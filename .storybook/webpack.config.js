const path = require('path')
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
  	rules: [{
  		test: /\.stories\.js?$/,
  		loaders: [require.resolve('@storybook/addon-storysource/loader')],
  		enforce: 'pre',
  	},{
      // https://github.com/tuchk4/storybook-readme/tree/master/packages/storybook-readme#webpack-configuration-for-vue-storybook
      resourceQuery: /blockType=docs/,
      use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}