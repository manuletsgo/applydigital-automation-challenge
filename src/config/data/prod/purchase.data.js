const { faker } = require('@faker-js/faker')

module.exports = {
  cart: {
    breadcrumb: 'Shopping Cart'
  },
  checkout: {
    comment: faker.lorem.sentence()
  },
  payment: {
    title: 'Payment',
    nameOnCard: 'Test',
    cardNumber: faker.finance.creditCardNumber(),
    cvc: faker.finance.creditCardCVV(),
    expiryMonth: '12',
    expiryYear: '2025'
  },
  paymentDone: {
    title: 'Order Placed!',
    successMessage: 'Congratulations! Your order has been confirmed!'
  }
}
