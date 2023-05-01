const { Page } = require('./_page')

class AccountCreatedPage extends Page {
  constructor(page) {
    super(page, '/account_created')

    this.h2Title = this.locator('h2[data-qa="account-created"]')
    this.pSuccessMessage = this.locator('h2[data-qa="account-created"] ~ p')
    this.aContinue = this.locator('a[data-qa="continue-button"]')
  }

  async validateTitle({ title }) {
    await expect(this.h2Title).toMatchText(title)
  }

  async successMessage({ successMessage }) {
    await expect(this.pSuccessMessage.first()).toMatchText(successMessage)
  }

  async continue() {
    await this.aContinue.click()
  }
}

module.exports = { AccountCreatedPage }
