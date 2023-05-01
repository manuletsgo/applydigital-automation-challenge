const { Page } = require('./_page')

const { ModalDialogComponent } = require('../components/modalDialog')

class LoginPage extends Page {
  constructor(page) {
    super(page, '/checkout')

    this.modalDialog = new ModalDialogComponent(page)

    this.h2TitleLogin = this.locator('.login-form h2')
    this.h2TitleSignup = this.locator('.signup-form h2')

    this.inputName = this.locator('input[data-qa="signup-name"]')
    this.inputEmailAddressSignUp = this.locator('input[data-qa="signup-email"]')
    this.buttonSignup = this.locator('button[data-qa="signup-button"]')

    this.inputEmailAddressLogin = this.locator('input[data-qa="login-email"]')
    this.inputPassword = this.locator('input[data-qa="login-password"]')
    this.buttonLogin = this.locator('button[data-qa="login-button"]')
  }

  async validateSubtitle({ subtitleLogin, subtitleSignup }) {
    await expect(this.h2TitleLogin).toMatchText(subtitleLogin)
    await expect(this.h2TitleSignup).toMatchText(subtitleSignup)
  }

  async registerUser({ firstName, emailAddress }) {
    await this.inputName.fill(firstName)
    await this.inputEmailAddressSignUp.fill(emailAddress)
    await this.buttonSignup.click()
  }

  async doLogin({ emailAddress, password }) {
    await this.inputEmailAddressLogin.fill(emailAddress)
    await this.inputPassword.fill(password)
    await this.buttonLogin.click()
  }
}

module.exports = { LoginPage }
