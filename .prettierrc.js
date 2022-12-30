module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.wxml',
      options: { parser: 'html' }
    },
    {
      files: '*.wxss',
      options: { parser: 'css' }
    },
    {
      files: '*.wxs',
      options: { parser: 'babel' }
    }
  ]
}
