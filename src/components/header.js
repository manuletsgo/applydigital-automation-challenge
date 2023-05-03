const { Component } = require('./_component')

class HeaderComponent extends Component {
  constructor(page) {
    super(page, '#header')

    this.aCart = this.componentLocator('a[href="/view_cart"]')
    this.aLogout = this.componentLocator('a[href="/logout"]')
    this.aSignupLogin = this.componentLocator('a[href="/login"]')
    this.aUserLogged = this.componentLocator(
      'div.shop-menu li a:not([href*="/"])'
    )
    this.aContactUs = this.componentLocator('a[href*="contact_us"]')
  }
  async accessCart() {
    await expect(this.aCart).toBeVisible()
    await this.aCart.click()
  }

  async doLogout() {
    await expect(this.aLogout).toBeVisible()
    await this.aLogout.click()
    await expect(this.aSignupLogin).toBeVisible()
  }

  async accessSignupLogin() {
    await expect(this.aSignupLogin).toBeVisible()
    await this.aSignupLogin.click()
  }

  async validateUserLogged({ messageLogged }) {
    await expect(this.aUserLogged).toMatchText(messageLogged)
  }

  async accessContactUs() {
    await expect(this.aContactUs).toBeVisible()
    await this.aContactUs.click()
  }
}

module.exports = { HeaderComponent }
