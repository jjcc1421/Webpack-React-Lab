var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var CLIENT_DIR = path.resolve(__dirname, 'src/client');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'  
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [
          { loader: "babel-loader" },
        ]
      }
    ]
  },
  watch: true,

};