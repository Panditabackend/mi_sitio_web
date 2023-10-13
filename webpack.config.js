const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.html',
    quienes_somos: './src/quienes_somos.html',
    servicios: './src/servicios.html',
    contactenos: './src/contactenos.html',
    error: './src/404error.html'
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
      {
        test: /\.scss$/, // Busca archivos con extensión .scss
        use: [
          'style-loader', // Inyecta los estilos en la página
          'css-loader', // Convierte CSS a módulos comunes
          'sass-loader', // Compila SASS/SCSS a CSS
        ],
      }
    ],
  },
  plugins: [
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
