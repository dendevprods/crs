//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('./.nx-helpers/compiled.js');
const path = require('path');

/**
 * @type {import('./.nx-helpers/compiled.js').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  webpack(config) {
    config.resolve.alias['shared'] = path.resolve(__dirname, '../shared/src');
    config.resolve.alias['generated'] = path.resolve(__dirname, '../generated');
    return config;
  },
  experimental: {
    allowedDevOrigins: ['http://192.168.70.242:3000'],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
