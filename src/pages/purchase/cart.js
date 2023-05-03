const { Page } = require('../_page')

const { ModalDialogComponent } = require('../../components/modalDialog')

class CartPage extends Page {
  constructor(page) {
    super(page, '/view_cart')

    this.modalDialog = new ModalDialogComponent(page)

    this.breadcrumbShoppingCart = this.locator('.breadcrumb li.active')
    this.buttonCheckout = this.locator('a.check_out')
  }

  async validateBreadcrumb({ breadcrumb }) {
    await expect(this.breadcrumbShoppingCart).toBeVisible()
    await expect(this.breadcrumbShoppingCart).toMatchText(breadcrumb)
  }

  async proceedToCheckout() {
    await this.buttonCheckout.click()
  }
}

module.exports = { CartPage }
