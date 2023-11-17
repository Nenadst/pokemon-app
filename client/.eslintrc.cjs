module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
},
  plugins: ['react-refresh', 'jest'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-misused-promises': [
      "off",
      {
        "checksVoidReturn": {
          "arguments": false
        }
      }
    ],
    "linebreak-style": 0,
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    'no-param-reassign': 'off',
    "import/export": "off",
    "function-paren-newline": "off",
  },
}
