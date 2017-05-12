var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "app.bundle.js"
    },
    module: {
        rules: [ {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        } ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Project Cusom',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.ejs'
        } )/*,
        new ExtractTextPlugin( 'app.css' ) */
    ]
}
