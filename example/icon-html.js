const fs = require('fs')
const svgDir = './svg'

// svgファイルが存在するアイコンを表示するためのhtmlを生成
// fsモジュールがブラウザでは使えないため、Node.jsで実行している
const svgFileNames = fs.readdirSync(svgDir)
let html = ''
svgFileNames.forEach(function (fileName) {
  const id = fileName.replace('.svg', '')
  html += `<li><svg class="icon"><use xlink:href="#${id}"></use></svg></li>`
})
fs.writeFileSync('example/dest/icons.html', html)
