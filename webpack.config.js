const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
    entry: './src/app.js',
    mode: process.env.NODE_ENV,
    output: {
        clean: true,
        filename: 'app.js',
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devServer: {
        port: 9455,
        static: path.resolve(__dirname, 'src'),
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
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
        modules: [ 'node_modules', './src/assets' ],
        extensions: [ '.js', '.jpg', '.otf', '.ttf', '.png', '.scss' ]
    }
};
