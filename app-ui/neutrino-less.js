const CSS_LOADER = require.resolve('css-loader');
const LESS_LOADER = require.resolve('less-loader');
const STYLE_LOADER = require.resolve('style-loader');
const POSTCSS_LOADER = require.resolve('postcss-loader');

const path = require('path');
const fs  = require('fs');

const lessToJs = require('less-vars-to-js');
//const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './antd.less'), 'utf8'));

module.exports = (neutrino) => {
  // We use cssnano with the postcss loader, so we tell
  // - css-loader not to duplicate minimization
  // - sass-loader not generate source maps
  const cssOptions = { minimize: true,modules: true,importLoaders: 1};
  const lessOptions = { sourceMap: true
                        ,modules: true
                        ,javascriptEnabled:true
                        ,strictMath: false
                        ,noIeCompat: true
                        };

  // If modules are present in the neutrino config,
  // set them as include paths.
  if (neutrino.config.resolve && neutrino.config.resolve.modules) {
    lessOptions.includePaths = neutrino.config.resolve.modules.values();

  }
  neutrino.config.module.rule('less').test(/\.less$/)
    .use('style')
    .loader(STYLE_LOADER)
    .end()
    .use('css')
    .loader(CSS_LOADER)
    .options(cssOptions)
    .end()
    .use('postcss')
    .loader(POSTCSS_LOADER)
    .end()
    .use('less')
    .loader(LESS_LOADER)
    .options(lessOptions);

    console.log('lessOptions:',lessOptions);
    console.log('LESS_LOADER:',LESS_LOADER);
};
