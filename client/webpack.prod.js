const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


module.exports = merge(common, {
	mode: 'production',
  output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, '../dist/gas')
    },
    plugins: [
     new webpack.ProvidePlugin({}),
     new HtmlWebpackPlugin({
     	  template: 'client/src/index.html',
        inlineSource: '.(js|css)$'
     }),
     new HtmlWebpackInlineSourcePlugin()
   ]
});