module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        'modules': 'commonjs',
        'debug': false
      }
    ]
  ];

  const plugins = [
    ['babel-plugin-rewire'],
  ];

  return {
    presets,
    plugins
  };
};
