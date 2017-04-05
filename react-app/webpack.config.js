const webpack = require( 'webpack' );
const path = require( 'path' );

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join( __dirname, 'public' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [ {
            test: /\.jsx?$/,
            use: [ {
                loader: 'react-hot-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    presets: [ 'react', 'es2015' ]
                }
            } ],
            exclude: /node_modules/
        } ]
        // loaders: [ {
        //     test: /\.jsx?$/,
        //     exclude: /node_modules/,
        //     loader: [ 'react-hot', 'babel?presets[]=react,presets[]=es2015' ]
        // } ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

