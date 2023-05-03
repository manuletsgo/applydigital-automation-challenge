const { faker } = require('@faker-js/faker')

const name = faker.name.fullName()
const firstName = 'emanuele'
const firstNameSignup = name.split(' ').at(0)

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
  loginError: {
    incorrectEmail: {
      emailAddress: 'testzz1xs@asae.ee',
      password: 'GDQ@pde-kru5wcz5rae'
    },
    incorrectPassword: {
      emailAddress: 'emanuele4dev@gmail.com',
      password: '123#aQA'
    },
    errorMessage: 'Your email or password is incorrect!'
  },
  signup: {
    title: 'Enter Account Information',
    name,
    emailAddress: faker.internet.email(name),
    password: faker.internet.password(20, true, /[A-Z]/),
    firstNameSignup,
    lastName: name.split(' ').at(-1),
    company: faker.company.name(),
    address: faker.address.street(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    mobileNumber: faker.phone.number(),
    messageLogged: ` Logged in as ${firstNameSignup}`
  },
  accountCreated: {
    title: 'Account Created!',
    successMessage:
      'Congratulations! Your new account has been successfully created!'
  }
}
