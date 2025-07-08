const { expect } = require('chai');

describe('Telnyx UI Smoke Test', () => {
    it('should display main UI elements on the homepage', async () => {
        await browser.setWindowSize(1440, 900);
        await browser.url('https://telnyx.com/');

        // Close cookie banner if present
        const cookieBtn = await $('#onetrust-accept-btn-handler');
        if (await cookieBtn.isDisplayed()) {
            await cookieBtn.click();
        }

        const logo = await $("header a[href='/']");
        await logo.waitForDisplayed({ timeout: 10000 });
        expect(await logo.isDisplayed()).to.be.true;

        // Перевіряємо головне меню через HeaderPage
        const HeaderPage = require('../pageobjects/header.page');
        const mainMenu = await HeaderPage.mainMenu;
        await mainMenu.waitForDisplayed({ timeout: 10000 });
        expect(await mainMenu.isDisplayed()).to.be.true;

        // Перевіряємо, що хоча б одна кнопка Sign Up видима
        const allSignUpBtns = await $$('a[href="/sign-up"]');
        let foundVisible = false;
        for (let i = 0; i < allSignUpBtns.length; i++) {
            if (await allSignUpBtns[i].isDisplayed()) {
                foundVisible = true;
                break;
            }
        }
        expect(foundVisible, 'Жодна кнопка Sign Up не видима').to.be.true;

        const footer = await $('footer');
        await footer.waitForDisplayed({ timeout: 10000 });
        expect(await footer.isDisplayed()).to.be.true;
    });
}); 