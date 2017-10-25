// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  //"extends": ["vue","airbnb-base"],
  "rules": {
    /*"indent": [2, 4],
    "linebreak-style": 0,
    "eol-last": 2,
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "eqeqeq": [2, "smart"],
    "no-use-before-define": [2, "nofunc"],
    "no-unused-vars": [2, {"vars": "local", "args": "none"}],
    "no-multi-str": 2,
    "no-irregular-whitespace": 2,
    "comma-dangle": "off",
    "max-len": "off",
    "func-names": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",

    "no-multi-assign": "off",
    "no-param-reassign": "off",
    "no-shadow": "off"*/
  }
}
