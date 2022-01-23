import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve'
import babel from 'rollup-plugin-babel'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const plugins = [
  babel({
    exclude: 'node_modules/**',
    extensions,
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['styled-jsx/babel'],
    babelrc: false,
  }),
  localResolve(),
  nodeResolve({
    browser: true,
    extensions,
  }),
  commonjs(),
]

const external = id => /^react|react-dom|@geist-ui\/core/.test(id)

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default {
  input: 'packages/index.ts',
  output: [
    {
      entryFileNames: 'index.js',
      format: 'cjs',
      exports: 'named',
      dir: 'dist',
      globals,
      manualChunks: id => {
        if (id.includes('node_modules/styled-jsx')) {
          return 'styled-jsx.cjs'
        }
      },
      chunkFileNames: '[name].js',
    },
  ],
  external,
  plugins,
}
