const HeaderPage = require('../pageobjects/header.page');

describe('Header Telnyx logo', () => {
    before(async () => {
        await browser.url('https://telnyx.com/pricing');
        await browser.setWindowSize(1440, 900);
        await HeaderPage.closeCookieBanner && await HeaderPage.closeCookieBanner();
    });

    it('should navigate to the homepage when clicking the logo', async () => {
        await HeaderPage.logo.waitForClickable({ timeout: 10000 });
        await HeaderPage.logo.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()) === 'https://telnyx.com/',
            {
                timeout: 10000,
                timeoutMsg: 'Did not navigate to homepage after clicking logo'
            }
        );
        expect(await HeaderPage.isMainMenuVisible()).toBe(true);
    });
}); 