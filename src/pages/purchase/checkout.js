const { Page } = require('../_page')

const { ModalDialogComponent } = require('../../components/modalDialog')

class CheckoutPage extends Page {
  constructor(page) {
    super(page, '/checkout')

    this.modalDialog = new ModalDialogComponent(page)

    this.textareaComment = this.locator('#ordermsg textarea')
    this.aPayment = this.locator('a[href*="payment"]')
  }

  async addComment({ comment }) {
    await this.textareaComment.fill(comment)
  }

  async placeOrder() {
    await this.aPayment.click()
  }
}

module.exports = { CheckoutPage }
