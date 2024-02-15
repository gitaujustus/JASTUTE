// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// const webpack = require('webpack');

const exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    );
    return config;
  },
};
export default exports;
