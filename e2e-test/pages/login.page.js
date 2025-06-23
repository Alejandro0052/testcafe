import { Selector } from 'testcafe';

export class LoginPage {
    constructor() {
        this.usernameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginButton   = Selector('#login-button');
    }

    async login(t, username, password) {
        await t
            .typeText(this.usernameInput, username)
            .wait(1000)
            .typeText(this.passwordInput, password)
            .wait(1000)
            .click(this.loginButton)
            .wait(1500);
    }
}
