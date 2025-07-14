import { Selector } from 'testcafe';

class LoginPage {
  constructor() {
    this.usernameInput = Selector('#username');
    this.passwordInput = Selector('#password');
     this.submitButton = Selector('#login-button');
  }

  async login(t, username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.submitButton);
  }
}

export default new LoginPage();
