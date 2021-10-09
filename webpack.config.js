const path = require('path')

module.exports = {
    entry: './src/app.ts',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'bable-loader',
                    options: {
                        presets: [ '@babel/env'],
                        plugins: [ '@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ],
    },
    mode: 'none'
}