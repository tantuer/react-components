module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    indent: ['error', 2],
    'arrow-parens': 0
  }
};
