// TODO: we can split this file into several files (pre-eject, post-eject, test)
// and use those instead. This way we don't need to branch here.

var path = require('path');


function resolveOwn(relativePath) {
  return path.resolve(__dirname, relativePath);
}

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

  // after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appHtml: resolveApp('index.html'),
  appFavicon: resolveApp('favicon.ico'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  serverAssets: resolveApp('../Podcasts.Web')
};

console.log(module.exports);