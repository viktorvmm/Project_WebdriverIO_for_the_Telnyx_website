class LoginPage {
    
    get emailInput() { return $("input[name='email']"); }
    get passwordInput() { return $("input[name='password']"); }
    get submitButton() { return $("button[type='submit']"); }
    get loginTitle() { return $("[data-testid='login.signin.title']"); }
    get forgotPasswordLink() { return $("a[href*='password-reset']"); }
    get ssoButton() { return $("//div[contains(@class, 'frontend-customer-portal-1rwgium') and text()='Single Sign-On']"); }
    
    // Селектори для перевірки успішного логіну (можуть змінюватися залежно від порталу)
    get dashboardElement() { return $("[data-testid='dashboard']"); }
    get userMenu() { return $("[data-testid='user-menu']"); }
    get logoutButton() { return $("[data-testid='logout']"); }

    async waitForPageLoad() {
        await this.loginTitle.waitForDisplayed({ timeout: 10000 });
        await this.emailInput.waitForDisplayed({ timeout: 10000 });
        await this.passwordInput.waitForDisplayed({ timeout: 10000 });
        await this.submitButton.waitForDisplayed({ timeout: 10000 });
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }

    async isLoggedIn() {
        try {
            // Чекаємо на появу елементів, які з'являються після успішного логіну
            await this.dashboardElement.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async getErrorMessage() {
        try {
            const errorElement = await $("[data-testid='error-message']");
            if (await errorElement.isDisplayed()) {
                return await errorElement.getText();
            }
        } catch (error) {
            
        }
        return null;
    }

    
    async getEmailValidationError() {
        try {
            const emailError = await $("input[name='email']").$("..").$("[data-testid='error-message']");
            if (await emailError.isDisplayed()) {
                return await emailError.getText();
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    
    async getPasswordValidationError() {
        try {
            const passwordError = await $("input[name='password']").$("..").$("[data-testid='error-message']");
            if (await passwordError.isDisplayed()) {
                return await passwordError.getText();
            }
            return null;
        } catch (error) {
            return null;
        }
    }
}

module.exports = new LoginPage(); 