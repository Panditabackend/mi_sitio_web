const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './src/js/index.js',
    quienes_somos: './src/js/quienes_somos.js',
    servicios: './src/js/servicios.js',
    contactenos: './src/js/contactenos.js',
    error: './src/js/404error.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inyecta los estilos en la página
          MiniCssExtractPlugin.loader,
          'css-loader', // Convierte CSS a módulos comunes
          'sass-loader', // Compila SASS/SCSS a CSS
           
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/quienes_somos.html',
      filename: 'quienes_somos.html',
      chunks: ['quienes_somos'],
    }),
    new HtmlWebpackPlugin({
      template: './src/servicios.html',
      filename: 'servicios.html',
      chunks: ['servicios'],
    }),
    new HtmlWebpackPlugin({
      template: './src/contactenos.html',
      filename: 'contactenos.html',
      chunks: ['contactenos'],
    }),
    new HtmlWebpackPlugin({
        template: './src/404error.html',
        filename: '404error.html',
        chunks: ['error'],
      })
  ],
};
