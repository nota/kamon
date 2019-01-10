const fs = require('fs')
const svgDir = './svg'

// svgファイルが存在するアイコンを表示するためのhtmlを生成するスクリプト
// fsモジュールがブラウザでは使えないため、Node.jsで実行
const svgFileNames = fs.readdirSync(svgDir)
let html = ''
svgFileNames.forEach(function (fileName) {
  if (!fileName.match(/svg/)) return
  const id = fileName.replace('.svg', '')
  html += `<li><svg class="icon"><use xlink:href="#${id}"></use></svg></li>`
})
fs.writeFileSync('example/dest/icons.html', html)
