const {VueLoaderPlugin} = require("vue-loader");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        main: "./resources/js/app.js",
    },
    output: {
        publicPath: '/js/',
        path: path.resolve(__dirname, "public/js"),
    },
    plugins: [
        new UglifyJsPlugin(),
        new WebpackBundleAnalyzer(),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(mov|mp4|m4v)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    optimization: {
        concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](vue|axios|jquery|bootstrap|lodash|vue-i18n|vue-router|vuex|vue-lazyload|vue-ls|popper)[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
    }
}
