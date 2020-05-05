const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-join-line')],
  },
})

const nextConfig = {
  target: 'serverless',
  
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],
  
  cssModules: true,
  
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  
  env: {
    VERSION: require('./package.json').version,
  },
  
  webpack(config) {
    config.resolve.modules.push(__dirname)
    return config
  },
  
  experimental: {
    reactRefresh: true,
  },
}

module.exports = withMDX(nextConfig)
