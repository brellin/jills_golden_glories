const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NetlifyPlugin } = require('netlify-webpack-plugin');
const { webpack, Module } = require('webpack');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const env = process.env.ENV;

console.log('\n\nnode_env:', env, '\n\n');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/assets/images/logo.png'
    })
];

if (env === 'production') plugins.push(
    new NetlifyPlugin({
        redirects: [
            {
                from: '/*',
                to: '/index.html',
                status: 200
            }
        ]
    }),
    new MiniCssExtractPlugin()
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
                    env === 'development' ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: `$env: ${ env };`
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
