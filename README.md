Steps for configuring webpack : 

1 - on cmd type ` npm init -y `

2 - on cmd type ` npm install webpack webpack-cli --save-dev`

node_modules and webpack installed so far.

3 - create file named webpack.config.js

  const path = require('path')

  module.exports = {
      entry: './src/app.ts',
      output: {
          filename : 'bundle.js',
          path: path.resolve(__dirname,'./dist')
      },
      mode: 'none'
  }

4 - type on cmd ' npx webpack ' , so basic setup is done.

5 - we need to install loaders to use css.
      type on cmd : ' npm i style-loader css-loader --save-dev ' 

6 - if we want to use sass , we need to install its loader.
      type on cmd : ' npm i sass-loader sass --save-dev '

7-  we have to use babel to use modern javascript versions , 
      so we need to install babel.
      type on cmd : ' npm i @babel/core''
                  : ' npm i @babel/ babel-loader '
                  : ' npm i @babel/preset-env ' 
                  : ' npm i @babel/plugin-proposal-class-properties '



      