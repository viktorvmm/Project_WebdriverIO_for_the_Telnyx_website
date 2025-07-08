const SignUpPage = require('../pageobjects/signup.page');
const HeaderPage = require('../pageobjects/header.page');
const { expect } = require('chai');

describe('Sign Up form with invalid password', () => {
    it('should show only general message for too short password', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        await SignUpPage.emailInput.setValue(`testuser_${Date.now()}@example.com`);
        await SignUpPage.firstNameInput.setValue('Test');
        await SignUpPage.lastNameInput.setValue('User');
        await SignUpPage.passwordInput.setValue('short');
        await HeaderPage.closeCookieBanner();
        await SignUpPage.termsCheckbox.click();
        await SignUpPage.submitButton.click();
        const passwordText = await $('#password_message').getText();
        expect(passwordText).to.include('Password must:');
    });

    it('should show all requirements for long but weak password', async () => {
        await browser.setWindowSize(1440, 900);
        await SignUpPage.open();
        await SignUpPage.form.waitForDisplayed({ timeout: 10000 });
        await SignUpPage.emailInput.setValue(`testuser_${Date.now()}@example.com`);
        await SignUpPage.firstNameInput.setValue('Test');
        await SignUpPage.lastNameInput.setValue('User');
        await SignUpPage.passwordInput.setValue('weakpassword');
        await HeaderPage.closeCookieBanner();
        await SignUpPage.emailInput.click();
        await browser.waitUntil(async () => {
            const text = await $('#password_message').getText();
            return text && text !== 'Password must:';
        }, { timeout: 5000, timeoutMsg: 'Password requirements did not appear' });
        const passwordText = await $('#password_message').getText();
        expect(passwordText).to.include('12 and 128 characters');
        expect(passwordText).to.include('one number');
        expect(passwordText).to.include('one symbol');
        expect(passwordText).to.include('one upper-case letter');
    });
}); 