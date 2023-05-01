const { Component } = require('./_component')

class ItemsComponent extends Component {
  constructor(page) {
    super(page, 'div.features_items')

    this.cardItems = this.componentLocator('.product-image-wrapper')
    this.aViewProduct = this.componentLocator(
      '.product-image-wrapper .choose a'
    )
  }

  async accessFirstItem() {
    await expect(this.aViewProduct.first()).toBeVisible()
    await this.aViewProduct.first().click()
  }
}

module.exports = { ItemsComponent }
