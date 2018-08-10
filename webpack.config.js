const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './public/app/js/main.js',

    output: {
        path: __dirname + '/public/build/',
        filename: 'bundle.js',
        library: 'fairyQuest'
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
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    /** Babel loader */
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'env' ]
                        }
                    },
                    /** ES lint For webpack build */
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true
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
    ],

    watch: true,

    /**
     * Rebuild bundles on files changes
     * Param --watch is a key for the command in the package.json scripts
     */
    watchOptions: {
        aggregateTimeout: 50,
    }

};