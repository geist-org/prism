import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve'
import babel from "rollup-plugin-babel"
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const plugins = [
  babel({
    exclude: "node_modules/**",
    extensions,
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['styled-jsx/babel'],
  }),
  localResolve(),
  nodeResolve({
    browser: true,
    extensions,
  }),
  commonjs(),
]

const external = id => /^react|react-dom|styled-jsx|@zeit-ui\/react/.test(id)

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default {
  input: 'packages/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      globals,
    },
    {
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
      name: 'Contextable',
      globals,
    },
  ],
  external,
  plugins,
}
