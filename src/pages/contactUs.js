const { Page } = require('./_page')

const { HeaderComponent } = require('../components/header')

class ContactUsPage extends Page {
  constructor(page) {
    super(page, '/contact_us')

    this.header = new HeaderComponent(page)

    this.h2Title = this.locator('.bg h2.title')
    this.inputEmail = this.locator('#contact-us-form input[data-qa="email"]')
    this.inputSubmit = this.locator('input[data-qa="submit-button"]')
    this.divSuccessMessage = this.locator('.contact-form .alert-success')
  }

  async validateTitle({ title }) {
    await expect(this.h2Title).toMatchText(title)
  }

  async fillContactForm({ emailAddress }) {
    await this.inputEmail.fill(emailAddress)
    await this.inputSubmit.click()
  }

  async validateSuccessMessage({ successMessage }) {
    await expect(this.divSuccessMessage).toBeVisible()
    await expect(this.divSuccessMessage).toMatchText(successMessage)
  }
}

module.exports = { ContactUsPage }
