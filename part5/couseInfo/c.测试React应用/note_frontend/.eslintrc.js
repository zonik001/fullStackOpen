/* eslint-env node */
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "jest"
    ],
    "rules": {
        // 缩进
        // "indent": [
        //     "error",
        //     2
        // ],
        // 换行符
        // "linebreak-style": [
        //     "error",
        //     "window"
        // ],
        // 单双引号
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        // 分号
        // "semi": [
        //     "error",
        //     "never"
        // ],
        "eqeqeq": "error",
        //末尾空格
        // "no-trailing-spaces": "error",
        // "object-curly-spacing": [
        //     "error", "always"
        // ],
        // "arrow-spacing": [
        //     "error", { "before": true, "after": true }
        // ],
        "no-console": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }