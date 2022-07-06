/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',

  plugins: [require('prettier-plugin-packagejson'), require('prettier-plugin-organize-imports')],

  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 1,
      },
    },
  ],
};
