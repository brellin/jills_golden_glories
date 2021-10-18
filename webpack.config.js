const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devServer: {
        port: 9455,
        static: path.resolve(__dirname, 'src'),
        open: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
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
        ]
    },
    resolve: {
        modules: [ 'node_modules', './src/assets' ]
    }
};
