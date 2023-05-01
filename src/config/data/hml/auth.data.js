const { faker } = require('@faker-js/faker')

const name = faker.name.findName()
const firstName = 'emanuele'

module.exports = {
  page: {
    subtitleLogin: 'Login to your account',
    subtitleSignup: 'New User Signup!'
  },
  login: {
    user: {
      emailAddress: 'emanuele4dev@gmail.com',
      password: 'GDQ@pde-kru5wcz5rae',
      firstName
    },
    messageLogged: ` Logged in as ${firstName}`
  },
  signup: {
    name,
    emailAddress: faker.internet.email(name, 'gmail.com')
  }
}
