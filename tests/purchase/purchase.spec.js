const { test } = require('config/customTest')

const { HomePage } = require('pages/home')
const { ProductDetailsPage } = require('pages/productDetails')
const { CartPage } = require('pages/cart')
const { LoginPage } = require('pages/login')
const { SignupPage } = require('pages/signup')
const { AccountCreatedPage } = require('pages/accountCreated')
const { CheckoutPage } = require('pages/checkout')
const { PaymentPage } = require('pages/payment')
const { PaymentDonePage } = require('pages/paymentDone')
const { ContactUsPage } = require('pages/contactUs')

const { blockAds } = require('utils/network')
const FileUtils = require('utils/file')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke Purchase Tests', () => {
  test('@purchase should be possible to create a purchase request', async ({
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

    const createdUser = data.auth.signup

    FileUtils.saveData('createdUser', createdUser)

    const accountCreated = new AccountCreatedPage(page)
    await accountCreated.validateTitle(data.auth.accountCreated)
    await accountCreated.validateSuccessMessage(data.auth.accountCreated)
    await accountCreated.continue()

    await homePage.load()
    await homePage.header.validateUserLogged(createdUser)
    await homePage.header.accessCart()

    await cartPage.validateBreadcrumb(data.purchase.cart)
    await cartPage.proceedToCheckout()

    const checkoutPage = new CheckoutPage(page)
    await checkoutPage.load()
    await checkoutPage.addComment(data.purchase.checkout)
    await checkoutPage.placeOrder()

    const paymentPage = new PaymentPage(page)
    await paymentPage.load()
    await paymentPage.validateTitle(data.purchase.payment)
    await paymentPage.payAndConfirmOrder(data.purchase.payment)

    const paymentDonePage = new PaymentDonePage(page)
    await paymentDonePage.load()
    await paymentDonePage.validateTitle(data.purchase.paymentDone)
    await paymentDonePage.validateSuccessMessage(data.purchase.paymentDone)
    await paymentDonePage.continue()

    await homePage.load()
    await homePage.header.validateUserLogged(createdUser)
    await homePage.header.doLogout()

    await loginPage.validateSubtitle(data.auth.page)
    await loginPage.doLogin(createdUser)

    await homePage.load()
    await homePage.header.validateUserLogged(createdUser)
    await homePage.header.accessContactUs()

    const contactUsPage = new ContactUsPage(page)
    await contactUsPage.load()
    await contactUsPage.validateTitle(data.purchase.contactUs)

    page.on('dialog', async dialog => {
      expect(dialog.type()).toContain('confirm')
      expect(dialog.message()).toContain('Press OK to proceed!')
      await dialog.accept()
    })

    await contactUsPage.fillContactForm(createdUser)
    await contactUsPage.validateSuccessMessage(data.purchase.contactUs)
  })
})
