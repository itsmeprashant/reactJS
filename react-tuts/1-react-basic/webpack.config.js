var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "app.bundle.js"
    },
    module: {
        rules: [ {
            test: /\.css$/,
            use: [ {
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            } ]
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
        } )
    ]
}
