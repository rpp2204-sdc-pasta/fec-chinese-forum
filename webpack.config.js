require("dotenv").config();
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require("path");

module.exports = {
  mode: "development",
<<<<<<< HEAD
  entry: path.join(__dirname, "./client/src/index.jsx"),
=======
  entry: path.join(__dirname, "/Client/src/index.jsx"),
>>>>>>> 57263e9393d861591d29feab86b0234ca423a379
  output: {
    path: path.join(__dirname, "./client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Chinese Forum'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
