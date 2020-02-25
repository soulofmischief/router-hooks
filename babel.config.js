
module.exports = function ( api ) {
  // Cache the returned value forever and don't call this function again.
  api.cache( true )

  const
    env = {
      development: {},
      production: {},
    },

    presets = [
      '@babel/env',
      '@babel/flow',
    ],

    plugins = [
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-transform-runtime',
    ]

  return {
    env,
    presets,
    plugins,
  }
}
