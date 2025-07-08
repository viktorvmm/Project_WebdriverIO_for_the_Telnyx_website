const HeaderPage = require('../pageobjects/header.page');
const { expect } = require('chai');

// URL головної сторінки та сторінки логіну
const HOME_URL = 'https://telnyx.com/';
const LOGIN_URL = 'https://portal.telnyx.com/#/login/sign-in';

describe('Sign In via header', () => {
    it('should open Sign In page and display all required elements', async () => {
        await browser.setWindowSize(1440, 900);
        await browser.url(HOME_URL);
        const originalWindow = await browser.getWindowHandle();
        await HeaderPage.clickLogin();
        // Дочекатися появи нового вікна
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, {
            timeout: 5000,
            timeoutMsg: 'Expected a new window to open after clicking Log in',
        });
        const windowHandles = await browser.getWindowHandles();
        const newWindow = windowHandles.find(handle => handle !== originalWindow);
        await browser.switchToWindow(newWindow);
        await browser.url(LOGIN_URL); // Переконаємось, що на потрібній сторінці
        // Перевірки елементів
        await (await $("[data-testid='login.signin.title']")).waitForDisplayed({ timeout: 10000 });
        await (await $("input[name='email']")).waitForDisplayed({ timeout: 10000 });
        await (await $("input[name='password']")).waitForDisplayed({ timeout: 10000 });
        await (await $("button[type='submit']")).waitForDisplayed({ timeout: 10000 });
        await (await $("a[href*='password-reset']")).waitForDisplayed({ timeout: 10000 });
        // Single Sign-On: XPath по тексту
        const sso = await $("//div[contains(@class, 'frontend-customer-portal-1rwgium') and text()='Single Sign-On']");
        await sso.waitForDisplayed({ timeout: 10000 });
        await expect(sso).to.exist;
    });
}); 