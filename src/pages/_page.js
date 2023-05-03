class Page {
  constructor(page, path, baseUrl = CONFIG_ENV.baseUrl) {
    this.page = page
    this.path = path
    this.baseUrl = baseUrl

    this.url = `${this.baseUrl}${this.path}`
  }

  async goto() {
    await this.page.goto(this.url)
  }

  async load() {
    const currentUrl = this.page.url().split('?')[0]
    const pageUrlRegex = new RegExp(`${this.url}.*`)

    if (!currentUrl.match(pageUrlRegex))
      await this.page.waitForNavigation({
        url: pageUrlRegex
      })

    await this.page.waitForLoadState('load')
  }

  verifyPage() {
    return this.page.url().split('?')[0] === this.url
  }

  locator(locator) {
    return this.page.locator(locator)
  }
}

module.exports = { Page }
