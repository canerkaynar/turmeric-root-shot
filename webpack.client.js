const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry: './app.js',
  target: 'web',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './frontend/build')
  }
};

module.exports = merge(baseConfig, config);
