const path = require('path');

module.exports = {
  entry: './src/silhouette.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'silhouette.js',
    library: 'silhouette',
    libraryTarget: 'umd'
  },
  externals: ['ml-distance-matrix', 'ml-distance-euclidean'],
  mode: 'production'
}
