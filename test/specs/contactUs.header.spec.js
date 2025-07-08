const HeaderPage = require('../pageobjects/header.page');
const { expect } = require('chai');

const HOME_URL = 'https://telnyx.com/';
const CONTACT_URL = 'https://telnyx.com/contact-us';

describe('Contact Us via header', () => {
    it('should open Contact Us page and display the form', async () => {
        await browser.setWindowSize(1440, 900);
        await browser.url(HOME_URL);
        await HeaderPage.closeCookieBanner();
        const contactBtn = await HeaderPage.contactUsButton;
        await contactBtn.waitForDisplayed({ timeout: 10000 });
        try {
            await HeaderPage.clickContactUs();
        } catch (e) {
            await browser.execute(el => el.click(), contactBtn);
        }
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/contact-us'), {
            timeout: 10000,
            timeoutMsg: 'Expected to be navigated to Contact Us page',
        });
        const formTitle = await $("h1.c-PJLV.c-rMlRu.c-hLiKYq");
        await formTitle.waitForDisplayed({ timeout: 10000 });
        expect(await formTitle.getText()).to.include('Talk to an expert');
        await (await $("form#mktoForm_1987")).waitForDisplayed({ timeout: 10000 });
        await (await $("input#FirstName")).waitForDisplayed({ timeout: 10000 });
        await (await $("input#LastName")).waitForDisplayed({ timeout: 10000 });
        await (await $("input#Email")).waitForDisplayed({ timeout: 10000 });
        await (await $("input#Website")).waitForDisplayed({ timeout: 10000 });
        await (await $("button.mktoButton[type='submit']")).waitForDisplayed({ timeout: 10000 });
    });
}); 