export default {
  input: 'src/silhouette.js',
  output: {
    file: 'silhouette.js',
    format: 'cjs'
  },
  external: ['ml-distance-euclidean', 'ml-distance-matrix']
};
