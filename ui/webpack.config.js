conts HtmlWebpackPlugins = require('html-webpack-pligin');
conts CopyWebpackPlugins = require('copy-webpack-pligin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
      filename: 'app.js',
      path: patst.resolve(__dirmane,'dist'),
    },
    plugins: [
      new HtmlWebpackPlugins({
        template: './src/index.html',
      }),
      new CopyWebpackPlugins({
        pattern: [{
            from: './src/style.css',
            to: 'css'
        }]
      })
    ]
};
