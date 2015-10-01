var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/_entry.js',
    output: {
        path: __dirname,
        filename: './www/build/bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true)
    ],
    // resolve: {
    //     extensions: ['', '.js'],
    //     root: [
    //         __dirname + '/node_modules'
    //     ]
    // },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // TODO(ns): need to include the yunity-webapp-common when it is not npm link'd
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/components'),
                loader: 'html'
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'src/assets/less'),
                loader: 'style!css!less'
            }
        ]
    }
};