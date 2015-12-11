var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: './src/app/main.ts',
    output: {
        path: path.resolve(__dirname, "public/assets"),
        publicPath: "/assets/",
        filename: "app.js"
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // Add minification
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
}
