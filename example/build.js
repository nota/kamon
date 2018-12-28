const fs = require('fs')
const svgDir = './svg'

const fileNames = fs.readdirSync(svgDir)

let iconHtmls = fileNames.map(function (fileName) {
  const id = fileName.replace('.svg', '')
  const html = `<svg class="icon"><use xlink:href="#${id}"></use></svg>`
  console.log(html)
})
