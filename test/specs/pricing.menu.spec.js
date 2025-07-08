const HeaderPage = require('../pageobjects/header.page');

describe('Pricing navigation', () => {
    before(async () => {
        await browser.url('https://telnyx.com/');
        await browser.setWindowSize(1440, 900);
        await HeaderPage.closeCookieBanner();
    });

    it('should navigate to Pricing page and display correct section', async () => {
        await HeaderPage.menuPricing.waitForClickable({ timeout: 10000 });
        await HeaderPage.menuPricing.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/pricing'),
            {
                timeout: 10000,
                timeoutMsg: 'URL did not change to /pricing'
            }
        );
        const heroSection = await $("section[contenttype='heroOverview']");
        await heroSection.waitForDisplayed({ timeout: 10000 });
        const h1 = await heroSection.$('h1 span');
        expect(await h1.getText()).toBe('Pricing');
        const leadText = await heroSection.$('p');
        expect(await leadText.getText()).toContain('Flexible, transparent pricing');
    });
}); 