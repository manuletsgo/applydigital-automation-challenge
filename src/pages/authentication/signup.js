const { Page } = require('../_page')

const { ModalDialogComponent } = require('../../components/modalDialog')

class SignupPage extends Page {
  constructor(page) {
    super(page, '/signup')

    this.modalDialog = new ModalDialogComponent(page)

    this.h2FormTitle = this.locator('.login-form > h2.title')

    this.inputPassword = this.locator('input[data-qa="password"]')
    this.inputFirstName = this.locator('input[data-qa="first_name"]')
    this.inputLastName = this.locator('input[data-qa="last_name"]')
    this.inputAddress = this.locator('input[data-qa="address"]')
    this.selectCountry = this.locator('select[data-qa="country"]')
    this.inputState = this.locator('input[data-qa="state"]')
    this.inputCity = this.locator('input[data-qa="city"]')
    this.inputZipCode = this.locator('input[data-qa="zipcode"]')
    this.inputMobileNumber = this.locator('input[data-qa="mobile_number"]')
    this.buttonCreateAccount = this.locator('button[data-qa="create-account"]')
  }

  async validateTitle({ title }) {
    await expect(this.h2FormTitle).toMatchText(title)
  }

  async fillSignupForm({
    password,
    firstNameSignup,
    lastName,
    address,
    state,
    city,
    zipCode,
    mobileNumber
  }) {
    await this.inputPassword.fill(password)
    await this.inputFirstName.fill(firstNameSignup)
    await this.inputLastName.fill(lastName)
    await this.inputAddress.fill(address)
    await this.selectCountry.selectOption('New Zealand')
    await this.inputState.fill(state)
    await this.inputCity.fill(city)
    await this.inputZipCode.fill(zipCode)
    await this.inputMobileNumber.fill(mobileNumber)
    await this.buttonCreateAccount.click()
  }
}

module.exports = { SignupPage }
