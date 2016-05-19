# Code Linting

> [ESLint](http://eslint.org/) all the things.


## Present module setup

Setup to extend `airbnb` style.

Custom rules:
```json
    "indent": [ "error", 4 ],
    "no-console": 0,
    "space-in-parens": [ 2, "always" ],
    "padded-blocks": [ 0, "always" ],
    "quotes": [ "error",  "single" ],
    "comma-dangle": 0,
    "template-curly-spacing": [ "error", "always" ],
    "no-unused-expressions": 0,
    "max-len": 0,
```

## Installation

```bash
npm install -g eslint
npm install --save-dev eslint-plugin-promise
eslint --init
```

## Enable in Webstorm

`WebStorm | Preferences | Languages and Frameworks | JavaScript | Code Quality Tools | ESLint`