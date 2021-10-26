const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NetlifyPlugin } = require('netlify-webpack-plugin');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/images/logo.png'
    })
];

if (!process.env.NODE_ENV) plugins.push(
    new NetlifyPlugin({
        redirects: [
            {
                from: '/*',
                to: '/index.html',
                status: 200
            }
        ]
    }),
    new MiniCssExtractPlugin({
        filename: 'index.scss'
    })
);

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        clean: true,
        filename: 'app.js',
        assetModuleFilename: 'images/[name][ext]'
    },
    devServer: {
        port: 9455,
        historyApiFallback: true,
        open: true,
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: `$env: ${ process.env.NODE_ENV };`
                        }
                    },
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
