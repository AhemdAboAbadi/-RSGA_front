const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
  trailingSlash: true,
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    }

    return config
  },
})
