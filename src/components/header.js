const { Component } = require('./_component')

class HeaderComponent extends Component {
  constructor(page) {
    super(page, '#header')

    this.aLogout = this.componentLocator('a[href="/logout"]')
  }

  async doLogout() {
    await expect(this.aLogout).toBeVisible()
    await this.aLogout.click()
  }
}

module.exports = { HeaderComponent }
