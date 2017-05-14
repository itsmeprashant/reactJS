var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var path = require( 'path' );

module.exports = {
    entry: {
        app: "./src/app.js",
        contact: "./src/contact.js"
    },
    output: {
        path: path.join( __dirname, '/dist' ),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [ {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract( {
                fallbackLoader: 'style-loader',
                loader: [ 'css-loader', 'sass-loader' ],
                publicPath: '/dist'
            } /*[ 'style-loader', 'css-loader', 'sass-loader' ]*/ )
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
        } ]
    },
    devServer: {
        contentBase: path.join( __dirname, 'dist' ),
        compress: true,
        port: 8080,
        stats: 'errors-only'/*,
        open: true*/
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Project Cusom',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            excludeChunks: [ 'contact' ],
            template: './src/index.ejs'
        } ),
        new HtmlWebpackPlugin( {
            title: 'Contact Page',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            filename: 'contact.html',
            chunks: [ 'contact' ],
            template: './src/contact.ejs'
        } ),
        new ExtractTextPlugin( {
            filename: 'app.css',
            disable: false,
            allChunks: true
        } )
    ]
}
