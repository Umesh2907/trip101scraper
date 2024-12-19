const { environment } = require('@rails/webpacker')
const babelLoader = environment.loaders.get('babel')

babelLoader.use[0].options = {
  presets: [
    ['@babel/preset-env', {
      targets: "> 0.25%, not dead"
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ]
}

module.exports = environment
