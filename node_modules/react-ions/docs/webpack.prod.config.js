const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const StatsPlugin = require('stats-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: [
    path.join(__dirname, 'src/app/index.js')
  ],
  resolve: {
    extensions: ['', '.js', '.md', '.txt', '.scss', '.css'],
    alias: {
      'react-ions/lib': path.resolve(__dirname, '../src'),
      'react-ions/styles': path.resolve(__dirname, '../src/styles'),
      'react-ions/utilities': path.resolve(__dirname, '../src/utilities'),
      'global/fonts': path.resolve(__dirname, '../src/assets/fonts'),
      'private/css': path.resolve(__dirname, 'src/www/css'),
      'private/base': path.resolve(__dirname, 'src/www/css/base'),
      'private/images': path.resolve(__dirname, 'src/www/images'),
      'private/modules': path.resolve(__dirname, 'src/app/modules'),
      'private/config': path.resolve(__dirname, 'src/app/_config')
    }
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '/')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/app/index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader!sass'
      ),
      exclude: [
        path.resolve(__dirname, '../src/styles/global/')
      ]
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css!postcss-loader!sass'
      ),
      include: [
        path.resolve(__dirname, '../src/styles/global/')
      ]
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(jpe?g|gif|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}

module.exports = config
