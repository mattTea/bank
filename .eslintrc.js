module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    // "extends": "eslint:all",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "func-names": "off",
        "indent": ["error", 2],
        "no-undef": "off",
        "object-shorthand": "off",
        "quotes": ["error", "double"],
        "quote-props": "off",
        "semi": "off",
        "padded-blocks": "off"
    }
};