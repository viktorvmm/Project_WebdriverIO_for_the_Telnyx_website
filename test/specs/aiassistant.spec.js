const AIAssistantPage = require('../pageobjects/aiassistant.page');

describe('AI Assistant interaction', () => {
    before(async () => {
        await browser.url('https://telnyx.com/');
        await browser.setWindowSize(1440, 900);
    });

    it('should open AI assistant, send a question and receive a response', async () => {
        await AIAssistantPage.openButton.waitForClickable({ timeout: 15000 });
        await AIAssistantPage.openButton.click();
        await AIAssistantPage.chatWidget.waitForDisplayed({ timeout: 10000 });
        expect(await AIAssistantPage.chatHeader.isDisplayed()).toBe(true);
        await AIAssistantPage.chatInput.waitForDisplayed({ timeout: 10000 });
        await AIAssistantPage.chatInput.setValue('What is Telnyx?');
        await browser.waitUntil(
            async () => !(await AIAssistantPage.sendButton.getAttribute('disabled')),
            { timeout: 10000, timeoutMsg: 'Send button did not become enabled' }
        );
        await AIAssistantPage.sendButton.click();
        await browser.waitUntil(
            async () => (await AIAssistantPage.lastBotMessage.getText()).length > 0,
            { timeout: 20000, timeoutMsg: 'No response from AI assistant' }
        );
        const botMsg = await AIAssistantPage.lastBotMessage.getText();
        expect(botMsg.toLowerCase()).toContain('telnyx');
    });
}); 