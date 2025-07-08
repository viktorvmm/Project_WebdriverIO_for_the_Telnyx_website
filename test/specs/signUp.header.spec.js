const HeaderPage = require('../pageobjects/header.page');
const { expect } = require('chai');

const HOME_URL = 'https://telnyx.com/';
const SIGNUP_URL = 'https://telnyx.com/sign-up';

/**
 * Клікає по першій видимій кнопці Sign up у хедері
 */
async function clickVisibleSignUpButton() {
    // Знаходимо всі кнопки Sign up
    const allSignUpBtns = await $$('a[href="/sign-up"]');
    for (let i = 0; i < allSignUpBtns.length; i++) {
        const el = allSignUpBtns[i];
        if (await el.isDisplayed()) {
            await el.scrollIntoView();
            await el.waitForClickable({ timeout: 5000 });
            await el.click();
            return;
        }
    }
    throw new Error('Жодна кнопка Sign up не була видима для кліку!');
}

describe('Sign Up via header', () => {
    it('should open Sign Up page and display all required elements', async () => {
        await browser.setWindowSize(1440, 900);
        await browser.url(HOME_URL);
        await clickVisibleSignUpButton();
        await browser.waitUntil(async () => (await browser.getUrl()).includes('/sign-up'), {
            timeout: 10000,
            timeoutMsg: 'Expected to be navigated to Sign Up page',
        });
        // Перевірки елементів форми
        const formTitle = await $("h1.c-PJLV.c-rMlRu.c-frvnKx");
        await formTitle.waitForDisplayed({ timeout: 10000 });
        expect(await formTitle.getText()).to.include('Create a Telnyx account');
        expect(await $("form[aria-label='signup-form']")).to.exist;
        expect(await $("input[name='email']")).to.exist;
        expect(await $("input[name='first_name']")).to.exist;
        expect(await $("input[name='last_name']")).to.exist;
        expect(await $("input[name='password']")).to.exist;
        expect(await $("input[name='terms_and_conditions']")).to.exist;
        expect(await $("button[type='submit']")).to.exist;
        expect(await $("[data-testid='google-gsi-signup-form']")).to.exist;
        expect(await $("form[aria-label='microsoft-signup-form'] button[type='submit']")).to.exist;
    });
}); 