const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devserve');
const saas = require('./webpack/saas');
const stylus = require('./webpack/stylus');

const PATHS = {
  source : path.join(__dirname,'source'),
  build: path.join(__dirname,'build')
};


const common = merge(
  {
  entry:  {
    'index': PATHS.source + '/pages/index/index.js',
    'blog': PATHS.source + '/pages/blog/blog.js',
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new htmlWebPackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pages/index/index.pug'
    }),
    new htmlWebPackPlugin({
      filename: 'blog.html',
      chunks: ['blog'],
      template: PATHS.source + '/pages/blog/blog.pug'
    })
  ],
},
pug(),
stylus()
)



module.exports = function (env) {
  if(env === 'production') {
    return common;
  }
  if(env === 'development') {
    return merge ([
      common,
      devServer(),
      saas()
    ])
  }
}
