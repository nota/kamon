# kamon
* Notaのプロダクトで共通して使えるアイコン群をまとめたリポジトリです。
* アイコンはSVGスプライトにまとめられており、これを各プロダクトにインポートすることで利用できるようになります。

## 使い方
1. SVGスプライトをプロダクトのbody直下に配置する
```javascript
$('.some-elem').load(https://raw.githubusercontent.com/nota/kamon/master/dist/sprite.svg?token=AAlwkZlxOhLak4puO-J5wAQ9_EE1GhhYks5cQCPKwA%3D%3D')
```
2. useタグを使って使用したい場所でアイコンを呼び出す
```html
<svg>
  <use xlink:href='#icon-name'></use>
</svg>
```

## スタイルの編集方法
クラスを追加し、cssで編集できます
```html
<svg class='icon'>
  <use xlink:href='#facebook'></use>
</svg>
```

```css
.icon {
  fill: #666;
}
```

