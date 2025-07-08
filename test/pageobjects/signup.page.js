const Page = require('./page');

class SignUpPage extends Page {
    get emailInput() { return $("input[name='email']"); }
    get firstNameInput() { return $("input[name='first_name']"); }
    get lastNameInput() { return $("input[name='last_name']"); }
    get passwordInput() { return $("input[name='password']"); }
    get termsCheckbox() { return $("input[name='terms_and_conditions']"); }
    get submitButton() { return $("button[type='submit']"); }
    get form() { return $("form[aria-label='signup-form']"); }

    async open() {
        return super.open('https://telnyx.com/sign-up');
    }

    async signUp({ email, firstName, lastName, password }) {
        await this.emailInput.setValue(email);
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.passwordInput.setValue(password);
        await this.termsCheckbox.click();
        await this.submitButton.click();
    }
}

module.exports = new SignUpPage(); 