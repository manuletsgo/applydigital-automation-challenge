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
  }
  async accessCart() {
    await expect(this.aCart).toBeVisible()
    await this.aCart.click()
  }

  async doLogout() {
    await expect(this.aLogout).toBeVisible()
    await this.aLogout.click()
  }

  async accessSignupLogin() {
    await expect(this.aSignupLogin).toBeVisible()
    await this.aSignupLogin.click()
  }

  async validateUserLogged({ messageLogged }) {
    await expect(this.aUserLogged).toMatchText(messageLogged)
  }
}

module.exports = { HeaderComponent }
