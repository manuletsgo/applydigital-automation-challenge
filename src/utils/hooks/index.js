const { HomePage } = require('pages/home')
const { LoginPage } = require('pages/login')

async function loginHook(page, data) {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.header.accessSignupLogin()

  const loginPage = new LoginPage(page)
  await loginPage.verifyPage()
  await loginPage.validateSubtitle(data.auth.page)
  await loginPage.doLogin(data.auth.login.user)

  await homePage.load()
  await homePage.header.validateUserLogged(data.auth.login)
}

async function logoutHook(page) {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.header.doLogout()
}

module.exports = { loginHook, logoutHook }
