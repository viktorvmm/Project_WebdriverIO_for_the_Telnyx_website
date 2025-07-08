// Видалено: const Page = require('./page');

class HeaderPage {
    get loginButton() { return $("//a[@href='https://portal.telnyx.com' and normalize-space()='Log in']"); }
    get signUpButton() { return $('a[href="/sign-up"]'); }
    get contactUsButton() { return $("a[href='/contact-us']"); }
    get mainMenu() { return $('#main-menu'); }
    get mainMenuContent() { return $('#main-menu-content'); }
    get menuProducts() { return $("//button[.//span[text()='Products']]"); }
    get menuSolutions() { return $("//button[.//span[text()='Solutions']]"); }
    get menuPricing() { return $("//a[@href='/pricing']//span[text()='Pricing']"); }
    get menuWhyTelnyx() { return $("//button[.//span[text()='Why Telnyx']]"); }
    get menuResources() { return $("//button[.//span[text()='Resources']]"); }
    get menuDevelopers() { return $("//button[.//span[text()='Developers']]"); }
    get logo() { return $("header a[href='/']"); }

    async clickLogin() {
        await this.loginButton.waitForClickable({ timeout: 10000 });
        await this.loginButton.click();
    }

    async clickSignUp() {
        await this.signUpButton.waitForClickable({ timeout: 10000 });
        await this.signUpButton.click();
    }

    async clickContactUs() {
        await this.contactUsButton.waitForClickable({ timeout: 10000 });
        await this.contactUsButton.click();
    }

    async closeCookieBanner() {
        const cookieAcceptBtn = await $('#onetrust-accept-btn-handler');
        if (await cookieAcceptBtn.isDisplayed()) {
            await cookieAcceptBtn.click();
            await browser.pause(500); // Дати банеру зникнути
        }
    }

    async isMainMenuVisible() {
        return await this.mainMenu.isDisplayed();
    }

    async isMainMenuContentVisible() {
        return await this.mainMenuContent.isDisplayed();
    }

    async areMenuItemsVisible() {
        return (
            await this.menuProducts.isDisplayed() &&
            await this.menuSolutions.isDisplayed() &&
            await this.menuPricing.isDisplayed() &&
            await this.menuWhyTelnyx.isDisplayed() &&
            await this.menuResources.isDisplayed() &&
            await this.menuDevelopers.isDisplayed()
        );
    }
}

module.exports = new HeaderPage(); 