const ExtractText = require('extract-text-webpack-plugin');
const nibPath = '~nib/lib/nib/';
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// let envKeys;



// if(process.env.NODE_ENV) {
// const currentPath = path.join(__dirname);
// const basePath = currentPath + '/.env';
// const fileEnv = dotenv.config({ path: basePath }).parsed;
// envKeys = fileEnv && Object.keys(fileEnv).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
//   return prev;
// }, {});
// // eslint-disable-next-line no-console
// console.log("ENVKEYS", envKeys);
// }



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

// const env = process.env.NODE_ENV ? {
//   NODE_ENV: process.env.NODE_ENV,
//   API_GATEWAY: process.env.API_GATEWAY,
//   PORT: process.env.PORT,
//   CUSTOM: process.env.CUSTOM || 'xx',
// } : {}

// // eslint-disable-next-line no-console
// console.log('env: ', env);


// // eslint-disable-next-line no-console
// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

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
    // new webpack.DefinePlugin(envKeys),
    new webpack.DefinePlugin({ 
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), 
      "process.env.API_GATEWAY": JSON.stringify(process.env.API_GATEWAY), 
      "process.env.CUSTOM": JSON.stringify(process.env.CUSTOM || 'custommm'), 
      "process.env.PORT": JSON.stringify(process.env.PORT) 
    })
  ]
};

