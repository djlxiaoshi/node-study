module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": "off",
        "quotes": [
            "error",
            "single"
        ],
        "no-console": "off",
        "semi": [
            "error",
            "always"
        ]
    }
};