const { Page } = require('./_page')

const { ModalDialogComponent } = require('../components/modalDialog')

class LoginPage extends Page {
  constructor(page) {
    super(page, '/checkout')

    this.modalDialog = new ModalDialogComponent(page)

    this.inputName = this.locator('input[data-qa="signup-name"]')
    this.inputEmailAddress = this.locator('input[data-qa="signup-email"]')
    this.buttonSignup = this.locator('button[data-qa="signup-button"]')
  }

  async registerUser({ name, emailAddress }) {
    await this.inputName.fill(name)
    await this.inputEmailAddress.fill(emailAddress)
    await this.buttonSignup.click()
  }
}

module.exports = { LoginPage }
