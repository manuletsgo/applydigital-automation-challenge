class Component {
  constructor(page, sectionMapping) {
    this.page = page

    this.sectionMapping = sectionMapping
  }

  componentLocator(locator) {
    return this.page.locator(`${this.sectionMapping} ${locator}`)
  }

  locator(locator) {
    return this.page.locator(locator)
  }
}

module.exports = { Component }
