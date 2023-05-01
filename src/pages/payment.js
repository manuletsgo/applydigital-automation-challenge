const { Page } = require('./_page')

class PaymentPage extends Page {
  constructor(page) {
    super(page, '/payment')

    this.h2Title = this.locator('h2.heading')
    this.inputNameOnCard = this.locator('input[data-qa="name-on-card"]')
    this.inputCardNumber = this.locator('input[data-qa="card-number"]')
    this.inputCvc = this.locator('input[data-qa="cvc"]')
    this.inputExpiryMonth = this.locator('input[data-qa="expiry-month"]')
    this.inputExpiryYear = this.locator('input[data-qa="expiry-year"]')
    this.buttonPayAndConfirm = this.locator('button[data-qa="pay-button"]')
  }

  async validateTitle({ title }) {
    await expect(this.h2Title).toMatchText(title)
  }

  async payAndConfirmOrder({
    nameOnCard,
    cardNumber,
    cvc,
    expiryMonth,
    expiryYear
  }) {
    await this.inputNameOnCard.fill(nameOnCard)
    await this.inputCardNumber.fill(cardNumber)
    await this.inputCvc.fill(cvc)
    await this.inputExpiryMonth.fill(expiryMonth)
    await this.inputExpiryYear.fill(expiryYear)
    await this.buttonPayAndConfirm.click()
  }
}

module.exports = { PaymentPage }
