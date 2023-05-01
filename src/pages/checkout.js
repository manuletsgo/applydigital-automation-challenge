const { Page } = require('./_page')

const { ModalDialogComponent } = require('../components/modalDialog')

class CheckoutPage extends Page {
  constructor(page) {
    super(page, '/checkout')

    this.modalDialog = new ModalDialogComponent(page)

    this.inputName = this.locator('input[data-qa="signup-name"]')
  }

  async fill() {
    await this.buttonCheckout.click()
  }
}

module.exports = { CheckoutPage }
