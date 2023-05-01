const { test } = require('config/customTest')

const { HomePage } = require('pages/home')
const { ProductDetailsPage } = require('pages/productDetails')
const { CartPage } = require('pages/cart')
const { LoginPage } = require('pages/login')
const { SignupPage } = require('pages/signup')
const { AccountCreatedPage } = require('pages/accountCreated')

const { blockAds } = require('utils/network')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke Checkout Tests', () => {
  test('@checkout should be possible to add first item to the cart and do checkout', async ({
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
    await loginPage.registerUser(data.auth.signup)

    const signupPage = new SignupPage(page)
    await signupPage.load()
    await signupPage.validateTitle(data.auth.signup)
    await signupPage.fillSignupForm(data.auth.signup)

    const authData = data.auth

    const accountCreated = new AccountCreatedPage(page)
    await accountCreated.validateTitle(data.auth.accountCreated)
    await accountCreated.successMessage(data.auth.accountCreated)
    await accountCreated.continue()

    await homePage.load()
    await homePage.header.validateUserLogged(authData.signup)
    await homePage.header.accessCart()

    await cartPage.validateBreadcrumb(data.cart.page)
  })
})
