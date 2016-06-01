const path = require('path');
const bemLoader = require('bem-loader');
const CollectBemAssetsPlugin = bemLoader.CollectBemAssetsPlugin;
const fs = require('fs-extra');
function wrapTemplates (code) {
    return `module.exports = function (${ require('xjst-vidom').prototype.locals.join(', ') }) {
    ${ code }
    }
    `;
}

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new CollectBemAssetsPlugin({
            done: function(data) {
                if (process.env.STANDALONE) {
                    fs.outputFileSync(
                        './src/provider/templates.js',
                        wrapTemplates(bemLoader.generateBemHtml(data.bemhtml))
                    );
                }
            },
            techs: ['bemhtml'],
            techExtensions: {
                bemhtml: ['bemhtml', 'bemhtml.js'],
            },
            levels: [
                'bem-core/common.blocks',
                'bem-core/desktop.blocks',
                'bem-components/common.blocks',
                'bem-components/desktop.blocks'
            ].map(function(short) {
                return path.resolve(process.cwd(), `./node_modules/${short}`);
            }).concat([
                './src/core',
                './src/components'
            ])
        })
    ]
};
