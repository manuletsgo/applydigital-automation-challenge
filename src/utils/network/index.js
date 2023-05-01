async function blockAds(page) {
  await page.route('**/*', request => {
    return request.request().url().startsWith('https://googleads.g.doubleclick')
      ? request.abort()
      : request.continue()
  })
}

module.exports = { blockAds }
