var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/_entry.js',
    output: {
        path: path.resolve(__dirname, 'www/build/'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true)
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    /\/yunity-webapp-common\//,
                    path.resolve(__dirname, 'src')
                ],
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src'),
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
