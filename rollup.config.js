import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs', // common js
      },
      {
        file: 'dist/index.es.js',
        format: 'es', // es modules
        exports: 'named',
      },
    ],
    plugins: [
      // helps rollup know how to handle common js importing and exporting. e.g. the prop-types package
      commonjs(),
      // process our css files
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve({
        // add .jsx so we don't have to include the extension when importing jsx files
        extensions: ['.js', '.jsx'],
      }),
    ],
  },
]
