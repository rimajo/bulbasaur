const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: { 
      aggregateTimeout: 300, 
      poll: true 
    },
  hot: true,
  historyApiFallback: true
}).listen(5000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5000');
});
