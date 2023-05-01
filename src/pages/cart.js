const { Page } = require('./_page')

const { ModalDialogComponent } = require('../components/modalDialog')

class CartPage extends Page {
  constructor(page) {
    super(page, '/view_cart')

    this.modalDialog = new ModalDialogComponent(page)

    this.buttonCheckout = this.locator('a.check_out')
  }

  async proceedToCheckout() {
    await this.buttonCheckout.click()
  }
}

module.exports = { CartPage }
