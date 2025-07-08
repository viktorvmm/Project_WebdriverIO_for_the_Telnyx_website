const FooterPage = require('../pageobjects/footer.page');

describe('Footer LinkedIn button', () => {
    before(async () => {
        await browser.url('https://telnyx.com/');
        await browser.setWindowSize(1440, 900);
    });

    it('should open the Telnyx LinkedIn page in a new tab', async () => {
        // Close cookie banner if present
        const cookieBtn = await $('#onetrust-accept-btn-handler');
        if (await cookieBtn.isDisplayed()) {
            await cookieBtn.click();
        }
        await FooterPage.linkedInButton.scrollIntoView();
        await FooterPage.linkedInButton.waitForClickable({ timeout: 10000 });
        const originalWindow = await browser.getWindowHandle();
        await FooterPage.linkedInButton.click();
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > 1, {
            timeout: 10000,
            timeoutMsg: 'New tab did not open after clicking LinkedIn button'
        });
        const windowHandles = await browser.getWindowHandles();
        const newWindow = windowHandles.find(handle => handle !== originalWindow);
        await browser.switchToWindow(newWindow);
        await browser.waitUntil(
            async () => (await browser.getUrl()).startsWith('https://www.linkedin.com/company/telnyx/'),
            {
                timeout: 10000,
                timeoutMsg: 'LinkedIn page did not open'
            }
        );
        await browser.closeWindow();
        await browser.switchToWindow(originalWindow);
    });
}); 