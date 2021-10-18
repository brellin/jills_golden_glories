const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        clean: true,
        filename: 'app.js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
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
            filename: 'assets/index.scss'
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
        ]
    },
    resolve: {
        modules: [ 'node_modules', './src/assets' ],
        extensions: [ '.js', '.jpg', '.otf', '.ttf', '.png', '.scss' ]
    }
};
