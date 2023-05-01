const { faker } = require('@faker-js/faker')

const name = faker.name.findName()

module.exports = {
  page: {
    login: {
      subtitle: 'Login to your account'
    },
    signup: {
      subtitle: 'New user Signup!'
    }
  },
  user: {
    name,
    emailAddress: faker.internet.email(name, 'gmail.com')
  }
}
