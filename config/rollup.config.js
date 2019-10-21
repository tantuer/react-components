const url = require('rollup-plugin-url');
const pkg = require('../package.json');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const path = require('path');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const externalIds = ['antd', 'prop-types', 'moment', 'react', 'react-dom', 'wangeditor'];
const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath);
};

const babelOptions = {
  exclude: ['node_modules/**']
};

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    external: function (id, parent, isResolved) {
      return !!(id && externalIds.some(e => id.startsWith(e)));
    },
    plugins: [
      postcss({
        extensions: [".pcss", ".less", ".css"],
        extract: false // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
      }),
      url(),
      babel(babelOptions),
      resolve(),
      commonjs({})
    ]
  }
];
