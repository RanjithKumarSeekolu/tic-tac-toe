const path = require('path');

module.exports = {
  entry: './spec/tic-tac-toe.spec.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode:"development"
};