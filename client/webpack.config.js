const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config({ path: './.env' }); 

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader' }],
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 100000 },
          },
        ],
      },
    ],
  },
  resolve: {
    // allows us to do absolute imports from "src"
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      favicon: path.join(__dirname, 'public/house.png'),
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
};