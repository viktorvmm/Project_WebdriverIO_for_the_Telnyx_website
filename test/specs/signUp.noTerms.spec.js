const SignUpPage = require('../pageobjects/signup.page');
const { expect } = require('chai');

describe('Sign Up form without accepting Terms and Conditions', () => {
    it('should show error if terms are not accepted', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        await SignUpPage.emailInput.setValue(`testuser_${Date.now()}@example.com`);
        await SignUpPage.firstNameInput.setValue('Test');
        await SignUpPage.lastNameInput.setValue('User');
        await SignUpPage.passwordInput.setValue('ValidPassword123!');
        await SignUpPage.submitButton.click();
        const termsError = await $('#terms_and_conditions_message');
        await termsError.waitForDisplayed({ timeout: 5000 });
        const errorText = await termsError.getText();
        expect(errorText.toLowerCase()).to.include('please accept the terms and conditions');
    });
}); 