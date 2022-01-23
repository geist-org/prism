const withTM = require('next-transpile-modules')(['@geist-ui/core'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism'), require('rehype-join-line')],
  },
})

const nextConfig = {
  pageExtensions: ['jsx', 'js', 'mdx', 'md', 'ts', 'tsx'],

  env: {
    VERSION: require('./package.json').version,
  },
}

module.exports = withTM(withBundleAnalyzer(withMDX(nextConfig)))
