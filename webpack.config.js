const path = require('path');

module.exports = {
  entry: './modules/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};