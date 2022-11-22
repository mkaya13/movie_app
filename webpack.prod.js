const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const commonConfig = require('./webpack.config.js');

const devConfig = {
  mode: 'development',
  plugins: [
    new EnvironmentPlugin({
      BASE_MOVIE_API: 'https://api.tvmaze.com/shows',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
