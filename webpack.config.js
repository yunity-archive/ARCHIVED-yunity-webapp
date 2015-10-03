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
