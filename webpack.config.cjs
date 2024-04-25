const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, './build'),
    },

    // proxy: [
    //   {
    //     context: ['/api'],
    //     target: 'http://localhost:3000',
    //   },
    // ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // plugins: [
            //   '@babel/plugin-transform-runtime',
            //   '@babel/transform-async-to-generator',
            // ],
          },
        },
      },
      {
        test: /\.s?css$/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
};
