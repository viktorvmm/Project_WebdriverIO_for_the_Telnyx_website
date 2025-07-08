class ForgotPasswordPage {
    get emailInput() { return $("input[name='email']"); }
    get submitButton() { return $("button[type='submit']"); }
    get successAlert() { return $(".MuiAlert-root.MuiAlert-colorSuccess[role='alert']"); }
    get successMessage() { return this.successAlert.$(".MuiAlert-message"); }

    async open() {
        await browser.url('https://portal.telnyx.com/#/login/password-reset');
    }

    async requestReset(email) {
        await this.emailInput.setValue(email);
        await this.submitButton.click();
    }
}

module.exports = new ForgotPasswordPage(); 