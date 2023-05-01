const { Component } = require('./_component')

class ModalDialogComponent extends Component {
  constructor(page) {
    super(page, 'div.modal-dialog')

    this.divContent = this.componentLocator('.modal-content')
    this.pContent = this.componentLocator('.modal-body > p:nth-child(1)')
    this.aViewCart = this.componentLocator('a[href="/view_cart"]')
    this.buttonCloseModal = this.componentLocator('button.close-modal')
    this.aLogin = this.componentLocator('a[href="/login"]')
  }

  async validateMessage() {
    await expect(this.divContent).toBeVisible()
    await expect(this.pContent).toMatchText(
      'Your product has been added to cart.'
    )
  }

  async viewCart() {
    await this.aViewCart.click()
  }

  async closeModal() {
    await this.buttonCloseModal.click()
  }

  async accessLogin() {
    await this.aLogin.click()
  }
}

module.exports = { ModalDialogComponent }
