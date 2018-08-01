const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: 'index',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js?[hash:8]',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js',
        },
        modules: [
            path.resolve('src'),
            path.resolve('node_modules')
        ],
        extensions: ['.js', '.vue']
    },
    module:{
        rules:[
            {
                test: /\.(sass|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(vue)$/,
                use: 'vue-loader',
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [require('autoprefixer')(
                    {
                        browsers: ['> 1%', 'last 5 versions', 'Firefox >= 45', 'iOS >=8', 'Safari >=8','ie >= 10']
                    }
                )]
            }
        })
    ]
};

module.exports = config;
