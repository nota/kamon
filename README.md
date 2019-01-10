# kamon
* Notaのプロダクトで共通して使えるアイコン群をまとめたリポジトリです。
* アイコンはSVGスプライトにまとめられており、これを各プロダクトにインポートすることで利用できるようになります。
* アイコンの一覧 : https://nota.github.io/kamon/example/

## 使い方
1. SVGスプライトをプロダクトのbody直下に配置する
2. useタグを使って使用したい場所でアイコンを呼び出す
```html
<body>
  <div class='sprite' hidden></div>
  
  <!-- 実際にアイコンを利用する箇所 -->
  <svg>
    <use xlink:href='#plus'></use>
  </svg>
  
  <!-- svgスプライトの配置 -->
  <script>
    $(function () {
      $('.sprite').load('https://raw.githubusercontent.com/nota/kamon/master/dist/sprite.svg?token=AAlwkZlxOhLak4puO-J5wAQ9_EE1GhhYks5cQCPKwA%3D%3D')
    })
  </script>
</body>
```

## スタイルの編集方法
クラスを追加し、cssで編集できます
```html
<svg class='icon'>
  <use xlink:href='#icon-name'></use>
</svg>
```

```css
.icon {
  fill: #666;
}
```

