const { test } = require('config/customTest')

const { HomePage } = require('pages/home')
const { LoginPage } = require('pages/authentication/login')

const { blockAds } = require('utils/network')
const { loginHook } = require('utils/hooks')
const { logoutHook } = require('utils/hooks')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke @authentication Authentication Tests', () => {
  test.beforeEach(async ({ page }) => {
    await blockAds(page)
  })

  test('@login should be possible to login', async ({ page, data }) => {
    await loginHook(page, data)
  })

  test('@logout should be possible to logout', async ({ page, data }) => {
    await loginHook(page, data)
    await logoutHook(page, data)
  })

  test('@exception_login @login_incorrect_email should not be able to login with invalid email', async ({
    page,
    data
  }) => {
    const homePage = new HomePage(page)
    await homePage.goto()
    await homePage.header.accessSignupLogin()

    const loginPage = new LoginPage(page)
    await loginPage.verifyPage()
    await loginPage.validateSubtitle(data.auth.page)
    await loginPage.doLogin(data.auth.loginError.incorrectEmail)
    await loginPage.validateErrorMessage(data.auth.loginError)
  })

  test('@exception_login @login_incorrect_password should not be able to login with invalid password', async ({
    page,
    data
  }) => {
    const homePage = new HomePage(page)
    await homePage.goto()
    await homePage.header.accessSignupLogin()

    const loginPage = new LoginPage(page)
    await loginPage.verifyPage()
    await loginPage.validateSubtitle(data.auth.page)
    await loginPage.doLogin(data.auth.loginError.incorrectPassword)
    await loginPage.validateErrorMessage(data.auth.loginError)
  })
})
