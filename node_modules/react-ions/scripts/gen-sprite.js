const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')
const cwd = path.join(__dirname, '/../')
const list = require('../src/assets/icons/master-list')
const normalizeIconList = require('./normalize-icon-list')

const _generatePath = list => {
  const fs = require('fs')

  fs.writeFile(`${cwd}/src/assets/icons/generated-list.js`,
    `export const paths = ${JSON.stringify(list)}`, err => {
      return err
        ? console.log(err)
        : console.log('The file was saved!')
  })
}

(function (list) {
  // Consolidate several lists of icon paths into a single list
  const normalizedList = normalizeIconList(list)

  let returnedList = []

  normalizedList.forEach(file => {
    // Load and read the file into a Cheerio object
    const $ = cheerio.load((fs.readFileSync(path.join(cwd, file.split('#')[0]), 'utf-8')))
    // The file path includes a #hashed-name which will serve as the icon name
    // so here we split the two, so we have just the name of the icon
    let name = file.split('#')[1]

    // Grab the blob of HTML inside the SVG wrapper
    let data = $('svg').html()

    returnedList.push({
      name: name,
      data: data
    })
  })

  return _generatePath(returnedList)
}(list))
