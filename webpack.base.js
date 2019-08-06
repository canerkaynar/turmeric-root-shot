const ExtractText = require('extract-text-webpack-plugin');
const nibPath = '~nib/lib/nib/';
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

let envKeys;

if(process.env.NODE_ENV) {
const currentPath = path.join(__dirname);
const basePath = currentPath + '/.env';
const fileEnv = dotenv.config({ path: basePath }).parsed;
envKeys = fileEnv && Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});
// eslint-disable-next-line no-console
console.log("ENVKEYS", envKeys);
}



const cssLoaderOptions = {
  loader: 'css-loader',
  options: {
    modules: true,
    camelCase: true,
    importLoaders: 1,
    sourceMap: true,
    localIdentName: '[local]--[hash:base64:5]',
  }
};

const stylusLoaderOptions = {
  loader: 'stylus-loader',
  options: {
    use: [require('nib')()],
    import: [
      `${nibPath}border.styl`,
      `${nibPath}border-radius.styl`,
      `${nibPath}clearfix.styl`,
      `${nibPath}gradients.styl`,
      `${nibPath}text/ellipsis.styl`,
      `${nibPath}overflow.styl`,
      `${nibPath}vendor.styl`,
      `${nibPath}size.styl`,
    ],
  },
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            'env'
          ]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.styl$/,
        use: ExtractText.extract({
          use: [cssLoaderOptions, stylusLoaderOptions],
        }),
      }
    ],
  },
  plugins: [
    // new webpack.EnvironmentPlugin({
    //   PORT: process.env.PORT,
    //   CUSTOM: process.env.PORT || 'kaynar',
    // })
    envKeys && new webpack.DefinePlugin(envKeys)
  ]
};
