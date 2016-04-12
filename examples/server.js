const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

new WebpackDevServer(compiler, {
    contentBase: './dist',
    hot: true,
    quiet: false,
    noInfo: false,
    filename: 'index.jsx',
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    stats: { colors: true },
}).listen(8080, 'localhost', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Webpack dev server listening at localhost:8080');
    }
});
