const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'query-keeper.js',
    library: 'queryKeeper',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
};
