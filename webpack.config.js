const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NetlifyPlugin } = require('netlify-webpack-plugin');

require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        clean: true,
        filename: 'app.js',
        assetModuleFilename: 'assets/images/[name][ext]'
    },
    devServer: {
        port: 9455,
        static: path.resolve(__dirname, 'src'),
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/images/logo.png'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.scss'
        }),
        new NetlifyPlugin({
            redirects: [
                {
                    from: '/*',
                    to: '/index.html',
                    status: 200
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ '@babel/preset-env' ]
                        },
                    },
                ]
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        modules: [ 'node_modules', path.resolve(__dirname, 'src/assets/images') ],
        extensions: [ '.js', '.jpg', '.otf', '.ttf', '.png', '.scss' ]
    },
    devtool: 'source-map'
};
