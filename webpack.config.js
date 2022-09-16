require("dotenv").config();
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "/Client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "./Client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Chinese Forum'
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }
    )
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
};
