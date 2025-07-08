const SignUpPage = require('../pageobjects/signup.page');
const { expect } = require('chai');

describe('Sign Up with already registered email', () => {
    it('should show error for duplicate email', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        await SignUpPage.emailInput.setValue('qa.viktormironiuk@gmail.com');
        await SignUpPage.firstNameInput.setValue('Test');
        await SignUpPage.lastNameInput.setValue('User');
        await SignUpPage.passwordInput.setValue('ValidPassword123!');
        await SignUpPage.termsCheckbox.click();
        await SignUpPage.submitButton.click();
        const errorDiv = await $(".c-UUKrH.c-UUKrH-kDyeyw-type-error");
        await errorDiv.waitForDisplayed({ timeout: 5000 });
        const errorText = await errorDiv.getText();
        expect(errorText.toLowerCase()).to.include('that email and password combination is not valid');
    });
}); 