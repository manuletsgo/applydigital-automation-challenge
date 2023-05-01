const { test } = require('config/customTest')

test.describe.configure({ mode: 'parallel' })

test.describe('@smoke Authentication Tests', () => {
  test('@login should be possible to login', async ({ page, data }) => {})
})
