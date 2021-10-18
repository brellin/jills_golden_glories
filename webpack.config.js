const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
    entry: './src/app.js',
    mode: process.env.NODE_ENV,
    output: {
        clean: true,
        filename: 'app.js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    devServer: {
        port: 9455,
        static: path.resolve(__dirname, 'src'),
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].scss'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: __dirname }
                    },
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
                type: 'asset/inline'
            }
        ]
    },
    resolve: {
        modules: [ 'node_modules' ],
        extensions: [ '.js', '.jpg', '.otf', '.ttf', '.png', '.scss' ]
    },
    devtool: 'source-map'
};
