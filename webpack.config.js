const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './index.html',
    quienes_somos: './quienes_somos.html',
    servicios: './servicios.html',
    contactenos: './contactenos.html',
    error: './404error.html'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './quienes_somos.html',
      filename: 'quienes_somos.html',
      chunks: ['quienes_somos'],
    }),
    new HtmlWebpackPlugin({
      template: './servicios.html',
      filename: 'servicios.html',
      chunks: ['servicios'],
    }),
    new HtmlWebpackPlugin({
      template: './contactenos.html',
      filename: 'contactenos.html',
      chunks: ['contactenos'],
    }),
    new HtmlWebpackPlugin({
        template: './404error.html',
        filename: '404error.html',
        chunks: ['error'],
      })
  ],
};
