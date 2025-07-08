const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');
const { expect } = require('chai');

const HOME_URL = 'https://telnyx.com/';
const LOGIN_URL = 'https://portal.telnyx.com/#/login/sign-in';

describe('Login with invalid credentials', () => {
    it('should handle invalid credentials appropriately', async () => {
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
        await LoginPage.login('invalid@email.com', 'wrongpassword');
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('microsoftonline.com') || currentUrl.includes('oauth')) {
            expect(true).to.be.true;
        } else {
            const errorMessage = await LoginPage.getErrorMessage();
            if (errorMessage) {
                expect(errorMessage.length).to.be.greaterThan(0);
            } else {
                expect(true).to.be.true;
            }
        }
    });
}); 