var path = require('path');
module.exports = {
    entry: './src/_entry.js',
    output: {
        path: __dirname,
        filename: './www/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel'
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