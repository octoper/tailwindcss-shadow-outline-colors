# Tailwind CSS Shadow Outline Colors

[![license](https://badgen.net/github/license/octoper/tailwindcss-shadow-outline-colors)](https://github.com/octoper/tailwindcss-shadow-outline-colors/blob/master/LICENSE)
[![npm](https://badgen.net/npm/v/tailwindcss-shadow-outline-colors)](https://www.npmjs.com/package/tailwindcss-shadow-outline-colors)

## Installation

```bash
npm install tailwindcss-shadow-outline-colors
```

or using if you are using `yarn`

```bash
yarn add tailwindcss-shadow-outline-colors
```

Add the plugin to the `plugins` array in your Tailwind CSS configuration.

```js
plugins: [
    require('tailwindcss-shadow-outline-colors')()
]
```

## Colors
By default we use the `colors` variable from you TailwindCSS config.
But if you want to use different colors you can add `shadowOutlineColors` variable in your config

```js
// tailwind.config.js
module.exports = {
  theme: {
    shadowOutlineColors: {
        'primary': {
            500: '#EA4C89',
            600: '#D3447B',
            700: '#BE3D6F',
        },
    }
  },
  variants: {},
  plugins: [
    plugins: [ require('tailwindcss-shadow-outline-colors')() ]
  ],
}
```

## Variants
You can add `hover`, `focus` or any othe variant just place `shadowOutline` in your variants
```js
// tailwind.config.js
module.exports = {
  theme: {},
  variants: {
    'shadowOutline': ['focus']
  },
  plugins: [
    plugins: [ require('tailwindcss-shadow-outline-colors')() ]
  ],
}
```

## Shadow and Opacity
You can also change the your shadow style and the opacity of the color 
```js
// tailwind.config.js
module.exports = {
  theme: {
    shadowOutline: {
        'shadow': '0 0 0 0.2em',
        'alpha': '0.5'
    }
  },
  plugins: [
    plugins: [ require('tailwindcss-shadow-outline-colors')() ]
  ],
}
```
