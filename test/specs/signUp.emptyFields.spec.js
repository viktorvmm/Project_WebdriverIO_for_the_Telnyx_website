const SignUpPage = require('../pageobjects/signup.page');
const { expect } = require('chai');

describe('Sign Up form with empty required fields', () => {
    it('should show errors for all empty required fields', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        await SignUpPage.submitButton.click();
        expect(await $('#email_message').getText()).to.include('This field is required.');
        expect(await $('#first_name_message').getText()).to.include('This field is required.');
        expect(await $('#last_name_message').getText()).to.include('This field is required.');
        const passwordText = await $('#password_message').getText();
        expect(passwordText).to.include('Password must:');
        expect(await $('#terms_and_conditions_message').getText()).to.include('Please accept the terms and conditions');
    });
}); 