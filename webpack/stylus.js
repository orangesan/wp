module.exports = function() {
  return {
    module: {
      rules: [
           {
              test: /\.styl$/,
              use: [
                'style-loader',
                'css-loader',
                'stylus-loader'
              ]
          }
      ]
    }
  }
}
