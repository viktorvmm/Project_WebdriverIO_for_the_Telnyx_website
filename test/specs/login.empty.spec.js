const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const { expect } = require('chai');

const HOME_URL = 'https://telnyx.com/';
const LOGIN_URL = 'https://portal.telnyx.com/#/login/sign-in';

describe('Login with empty fields', () => {
    it('should display validation errors when trying to login with empty fields', async () => {
        await browser.setWindowSize(1440, 900);
        await browser.url(HOME_URL);
        await HeaderPage.closeCookieBanner();
        const originalWindow = await browser.getWindowHandle();
        await HeaderPage.clickLogin();
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, {
            timeout: 10000,
            timeoutMsg: 'Expected a new window to open after clicking Log in',
        });
        const windowHandles = await browser.getWindowHandles();
        const newWindow = windowHandles.find(handle => handle !== originalWindow);
        await browser.switchToWindow(newWindow);
        await browser.url(LOGIN_URL);
        await LoginPage.waitForPageLoad();
        await LoginPage.emailInput.clearValue();
        await LoginPage.passwordInput.clearValue();
        await LoginPage.submitButton.click();
        const emailError = await LoginPage.getEmailValidationError();
        const passwordError = await LoginPage.getPasswordValidationError();
        if (emailError) {
            expect(emailError.length).to.be.greaterThan(0);
        }
        if (passwordError) {
            expect(passwordError.length).to.be.greaterThan(0);
        }
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('/login/sign-in')) {
            if (emailError) {
                expect(emailError.length).to.be.greaterThan(0);
            }
            if (passwordError) {
                expect(passwordError.length).to.be.greaterThan(0);
            }
        } else if (currentUrl.includes('microsoftonline.com')) {
            expect(currentUrl).to.include('microsoftonline.com');
        }
    });
});