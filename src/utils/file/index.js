const { writeFileSync, readFileSync } = require('fs')
const rimraf = require('rimraf')
const path = require('path')

class FileUtils {
  constructor() {}

  saveData(filename, dataToSave) {
    rimraf.sync(path.join(__dirname, `${dataToSave}.json`))

    return writeFileSync(
      path.join(__dirname, `${filename}.json`),
      JSON.stringify(dataToSave),
      function (err, data) {
        if (err) throw new Error(err)

        return data
      }
    )
  }

  getData(filename) {
    return JSON.parse(
      readFileSync(
        path.join(__dirname, `${filename}.json`),
        'utf8',
        function (err, data) {
          if (err) throw new Error(err)

          return data
        }
      )
    )
  }
}

module.exports = new FileUtils()
