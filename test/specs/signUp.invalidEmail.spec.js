const SignUpPage = require('../pageobjects/signup.page');
const { expect } = require('chai');

describe('Sign Up form with invalid email', () => {
    it('should show error for invalid email', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        await SignUpPage.emailInput.setValue('testemail');
        await SignUpPage.firstNameInput.setValue('Test');
        await SignUpPage.lastNameInput.setValue('User');
        await SignUpPage.passwordInput.setValue('ValidPassword123!');
        await SignUpPage.termsCheckbox.click();
        await SignUpPage.submitButton.click();
        const errorElem = await $(".c-UUKrH.c-UUKrH-kDyeyw-type-error");
        await errorElem.waitForDisplayed({ timeout: 5000 });
        const errorText = await errorElem.getText();
        expect(errorText.toLowerCase()).to.include('email');
    });
}); 