const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

const fs = require('fs-extra');
const bemxjst = require('bem-xjst');
const bemhtml = bemxjst.bemhtml;

const templates = bemhtml.compile([
    fs.readFileSync('./node_modules/bem-core/common.blocks/ua/ua.bemhtml'),
    fs.readFileSync('./node_modules/bem-core/common.blocks/page/page.bemhtml'),
    fs.readFileSync('./node_modules/bem-core/common.blocks/page/__js/page__js.bemhtml'),
    fs.readFileSync('./node_modules/bem-core/common.blocks/page/__css/page__css.bemhtml'),
    fs.readFileSync('./components/react/react.bemhtml.js')
].join(''));

fs.outputFile(
    './index.html',
    templates.apply({
        block: 'page',
        scripts: { elem: 'js', url: '/main.js' },
        content: { block: 'react' }
    })
);

new WebpackDevServer(compiler, {
    contentBase: './',
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
