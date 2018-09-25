const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'../index'),
    module: {
        rules:[
            {
                test: /.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            filename: 'index.html'
        })
    ]
}