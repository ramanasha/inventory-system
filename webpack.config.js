var path = require('path');

module.exports = {
  entry: './public/js/app.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:8080/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
};
