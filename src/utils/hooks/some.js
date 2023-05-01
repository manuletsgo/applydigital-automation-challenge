const { HomePage } = require('../../pages/home')

async function someHook(page, data) {
  const homePage = new HomePage(page)
  await homePage.doSomething()
}

module.exports = { someHook }
