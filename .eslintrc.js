module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    'no-console': 'warn',
    'no-nested-ternary': 'warn',
    'node/no-deprecated-api': 'warn',
    'prettier/prettier': ['warn', prettierConfig],
    'react/jsx-sort-default-props': 'off',
    // Increase strictness later.
    'react/button-has-type': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/prop-types': 'warn',
    'react/sort-prop-types': 'off',
    'react/static-property-placement': 'off'
  },
};