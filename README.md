# kamon
* kamon is a project to manage svg icons for the products of [NOTA Inc.](https://notainc.com)
* See https://nota.github.io/kamon/example/ to check all icons.


## Installation
* Please get svg icon set via npm.
* `npm install @notainc/kamon`

## Usage

### React

```js
import { Star } from '@notainc/kamon/react/Star';
import { StarFill } from '@notainc/kamon/react/StarFill';

function Like () {
  const [liked, setLiked] = useState(false);
  return <button onClick={setLiked(prev => !prev)}>
    {liked ? <StarFill /> : <Star />} Like
  </button>
}
```

### SVG

* For web applications, we recommend to use SVG Sprites.
* We are following this process in /example.
1. Generate the SVG Sprites file from /svg. (Using [svg-sprites](https://www.npmjs.com/package/svg-sprite) library)
2. Insert the generated SVG Sprites inline under the body element. (This process enables to use icon anywhere)
3. To call icon instance, do like this
```html
<body>
    <div class='sprite' hidden></div>  

    <!-- Call icon instance here -->
    <svg class='hoge'>
      <use xlink:href='#icon-name'></use>
    </svg>  

    <!-- Inserte SVG Sprites -->
    <script>
      $(function () {
        $('.sprite').load('dest/sprite.svg')
      })
    </script>
 </body>
  ```

```css
// Set icon color
.hoge {
  fill: #555;
 }
```

## Development

- Clone this repository.
- `npm install`
- `npm run build`

## License
#### Code
* Copyright (c) 2019 Nota Inc.
* This software is licensed under the MIT. (http://opensource.org/licenses/mit-license.html)
* Applies to all HTML and CSS and Javascript files.


#### Icons
* Some icons in the /svg directory use the source of following service, and it is necessary to follow the license applied by them.
* We do not guarantee that our users are compliant with the license.

* [Fontawesome](https://fontawesome.com/v4.7.0/license/)  
  License: SIL OFL 1.1 (http://scripts.sil.org/OFL)
