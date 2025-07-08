const HeaderPage = require('../pageobjects/header.page');

describe('Main navigation menu', () => {
    before(async () => {
        await browser.url('https://telnyx.com/');
        await browser.setWindowSize(1440, 900);
        await HeaderPage.closeCookieBanner();
    });

    it('should be visible and contain all main items', async () => {
        expect(await HeaderPage.isMainMenuVisible()).toBe(true);
        expect(await HeaderPage.isMainMenuContentVisible()).toBe(true);
        expect(await HeaderPage.areMenuItemsVisible()).toBe(true);
    });
}); 