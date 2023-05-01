const { test } = require('config/customTest')

const { HomePage } = require('pages/home')
const { ProductDetailsPage } = require('pages/productDetails')
const { CartPage } = require('pages/cart')
const { LoginPage } = require('pages/login')

const { blockAds } = require('utils/network')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke Authentication Tests', () => {
  test('@item should be possible to add first item to the cart', async ({
    page,
    data
  }) => {
    await blockAds(page)

    const homePage = new HomePage(page)
    await homePage.goto()

    await homePage.items.accessFirstItem()

    const productDetailsPage = new ProductDetailsPage(page)
    await productDetailsPage.load()
    await productDetailsPage.fillQuantity()
    await productDetailsPage.addToCart()
    await productDetailsPage.modalDialog.validateMessage()
    await productDetailsPage.modalDialog.viewCart()

    const cartPage = new CartPage(page)
    await cartPage.load()
    await cartPage.proceedToCheckout()

    await cartPage.modalDialog.accessLogin()

    const loginPage = new LoginPage(page)
    await loginPage.registerUser(data.auth.user)
  })
})
