const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    devtool:'inline-source-map',
    entry:path.join(__dirname,'src/main.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/i,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|jpeg|png|gif)$/i,
                type:'asset',
                generator:{
                    filename:'assets/[hash][ext]'
                }
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'src')
        }
    }

}