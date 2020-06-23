const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/src/index.html',
      filename: './index.html',
    }),
  ],
};
