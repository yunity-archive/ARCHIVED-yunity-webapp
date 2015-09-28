var path = require('path');
module.exports = {
    entry: './src/_entry.js',
    output: {
        path: __dirname,
        filename: 'www/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                loader: 'babel'
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'src/less'),
                loader: 'style!css!less'
            }
        ]
    }
};