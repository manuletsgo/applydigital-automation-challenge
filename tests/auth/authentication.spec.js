const { test } = require('config/customTest')

const { HomePage } = require('pages/home')
const { LoginPage } = require('pages/login')

const { blockAds } = require('utils/network')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke Authentication Tests', () => {
  test('@login should be possible to login', async ({ page, data }) => {
    await blockAds(page)

    const homePage = new HomePage(page)
    await homePage.goto()

    await homePage.header.accessSignupLogin()

    const loginPage = new LoginPage(page)
    await loginPage.verifyPage()
    await loginPage.validateSubtitle(data.auth.page)
    await loginPage.doLogin(data.auth.login.user)

    await homePage.load()

    await homePage.header.validateUserLogged(data.auth.login)
  })
})
