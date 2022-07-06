module.exports = {
  arrowParens: 'always',
  printWidth: 120,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 1,
      },
    },
  ],
};
