'use strict';
const webpack             = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './public/app/js/main.js'
    ],
    output: {
        path: __dirname + '/public/build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test : /\.(png|jpg|svg)$/,
                use : 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: [ /node_modules/ ],
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: 1,
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader'
                ]),
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    /** Babel loader */
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'env' ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        /** Used for migrating to newer webpack version */
        new webpack.LoaderOptionsPlugin({ options: {} }),
        /** Build separated styles bundle */
        new ExtractTextPlugin('bundle.css'),
        /** Vue loader */
        new VueLoaderPlugin()
    ],
    watch: true
};
