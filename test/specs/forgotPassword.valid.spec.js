const ForgotPasswordPage = require('../pageobjects/forgotPassword.page');
const { expect } = require('chai');

describe('Forgot Password with valid email', () => {
    it('should show success message after submitting valid email', async () => {
        await browser.setWindowSize(1440, 900);
        await ForgotPasswordPage.open();
        await ForgotPasswordPage.emailInput.waitForDisplayed({ timeout: 10000 });
        await ForgotPasswordPage.requestReset('qa.workmironiuk@gmail.com');
        await ForgotPasswordPage.successAlert.waitForDisplayed({ timeout: 10000 });
        const message = await ForgotPasswordPage.successMessage.getText();
        expect(message).to.include('We have accepted your password reset request');
    });
}); 