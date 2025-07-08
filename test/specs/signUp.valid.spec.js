const SignUpPage = require('../pageobjects/signup.page');
const { expect } = require('chai');

describe('Sign Up form UI with valid data', () => {
    it('should display all required elements and allow input', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        expect(await SignUpPage.emailInput.isDisplayed()).to.be.true;
        expect(await SignUpPage.firstNameInput.isDisplayed()).to.be.true;
        expect(await SignUpPage.lastNameInput.isDisplayed()).to.be.true;
        expect(await SignUpPage.passwordInput.isDisplayed()).to.be.true;
        expect(await SignUpPage.termsCheckbox.isDisplayed()).to.be.true;
        expect(await SignUpPage.submitButton.isDisplayed()).to.be.true;
        await SignUpPage.emailInput.setValue('testuser@example.com');
        await SignUpPage.firstNameInput.setValue('Test');
        await SignUpPage.lastNameInput.setValue('User');
        await SignUpPage.passwordInput.setValue('ValidPassword123!');
        expect(await SignUpPage.emailInput.getValue()).to.equal('testuser@example.com');
        expect(await SignUpPage.firstNameInput.getValue()).to.equal('Test');
        expect(await SignUpPage.lastNameInput.getValue()).to.equal('User');
        expect(await SignUpPage.passwordInput.getValue()).to.equal('ValidPassword123!');
    });
}); 