const { Page } = require('./_page')

const { ModalDialogComponent } = require('../components/modalDialog')

class ProductDetailsPage extends Page {
  constructor(page) {
    super(page, '/product_details/')

    this.modalDialog = new ModalDialogComponent(page)

    this.inputQuantity = this.locator('input#quantity')
    this.buttonCart = this.locator('button.cart')
  }

  async fillQuantity() {
    await this.inputQuantity.fill('30')
  }

  async addToCart() {
    await this.buttonCart.click()
  }
}

module.exports = { ProductDetailsPage }
