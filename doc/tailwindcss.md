#### Install packages

```bash
yarn add tailwindcss -D
yarn add gatsby-plugin-postcss
npx tailwind init
```

#### Configuration

gatsby-config.js

```js
module.exports = {
  plugins: ['gatsby-plugin-postcss'],
}
```

tailwind.config.js

```js
// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {},
  variants: {},
  plugins: [],
}
```

postcss.config.js

```js
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
}
```

#### Add to global css

style.css

```css
@import 'tailwindcss/base';

@import 'tailwindcss/components';

@import 'tailwindcss/utilities';
```

Import into index.tsx file

```tsx
import './style.css'
```
