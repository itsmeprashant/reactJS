var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var webpack = require( 'webpack' );
var path = require( 'path' );

var isProd = process.env.NODE_ENV === 'production';

var publicPath = '/dist';

var cssDev = [ 'style-loader', 'css-loader', 'sass-loader' ];
var cssProd = ExtractTextPlugin.extract( {
    fallback: 'style-loader',
    loader: [ 'css-loader', 'sass-loader' ],
    publicPath: publicPath
} );

var prodPlugins = [
    new HtmlWebpackPlugin( {
        title: 'Project Cusom',
        minify: {
            collapseWhitespace: true
        },
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
];

var devPlugins = [
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
];

var cssConfig = isProd ? cssProd : cssDev;

// define the entry based on environment
// don't include hot module stuff for the production environment
var entry = isProd
    ?   {
            app: "./src/app.js",
            contact: "./src/contact.js"
        }
    :   {
            app: [ 'react-hot-loader/patch', "./src/app.js",
                'webpack/hot/only-dev-server',
                'webpack-dev-server/client?http://localhost:8080' ],
            contact: "./src/contact.js"
        };

module.exports = {
    entry: entry,
    output: {
        path: path.join( __dirname, '/dist' ),
        filename: "[name].bundle.js",
        publicPath: ''
        // sourceMapFilename: '[name].map'
    },
    // devtool: 'inline-source-map',
    devtool: 'source-map',
    module: {
        rules: [ 
            {
                test: /\.scss$/,
                use: cssConfig            
            }, 
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join( __dirname, 'dist' ),
        compress: true,
        port: 8080,
        hot: true,
        stats: 'errors-only',
        publicPath: ''
        // open: true
    },
    plugins: isProd ? prodPlugins : devPlugins
};
