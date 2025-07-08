const VoiceAIPage = require('../pageobjects/voiceai.page');
const HeaderPage = require('../pageobjects/header.page');

describe('Voice AI Agents page', () => {
    before(async () => {
        await browser.url('https://telnyx.com/');
        await browser.setWindowSize(1440, 900);
        await HeaderPage.closeCookieBanner && await HeaderPage.closeCookieBanner();
    });

    it('should navigate to Voice AI Agents via menu and display all main elements', async () => {
        await HeaderPage.menuProducts.waitForClickable({ timeout: 10000 });
        await HeaderPage.menuProducts.click();
        const voiceAIMenuItem = await $("//a[@href='/products/voice-ai' and .//p[text()='Voice AI']]");
        if (!(await voiceAIMenuItem.isDisplayed())) {
            throw new Error('Voice AI menu item not found.');
        }
        await voiceAIMenuItem.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/products/voice-ai'),
            { timeout: 10000, timeoutMsg: 'URL did not change to /products/voice-ai' }
        );
        await VoiceAIPage.title.waitForDisplayed({ timeout: 10000 });
        expect(await VoiceAIPage.title.isDisplayed()).toBe(true);
        expect(await VoiceAIPage.subtitle.isDisplayed()).toBe(true);
        expect(await VoiceAIPage.startBuildingBtn.isDisplayed()).toBe(true);
        expect(await VoiceAIPage.contactUsBtn.isDisplayed()).toBe(true);
    });
}); 