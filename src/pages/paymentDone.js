const { Page } = require('./_page')

const { ModalDialogComponent } = require('../components/modalDialog')

class PaymentDonePage extends Page {
  constructor(page) {
    super(page, '/payment_done')

    this.modalDialog = new ModalDialogComponent(page)

    this.h2Title = this.locator('h2[data-qa="order-placed"]')
    this.pSuccessMessage = this.locator('h2[data-qa="order-placed"] ~ p')
    this.aContinue = this.locator('a[data-qa="continue-button"]')
  }

  async validateTitle({ title }) {
    await expect(this.h2Title).toMatchText(title)
  }

  async validateSuccessMessage({ successMessage }) {
    await expect(this.pSuccessMessage).toMatchText(successMessage)
  }

  async continue() {
    await this.aContinue.click()
  }
}

module.exports = { PaymentDonePage }
