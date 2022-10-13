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
				exports: 'named'
			},
		],
		plugins: [
			commonjs(),
			postcss({
				plugins: [],
				minimize: true,
			}),
			babel({
				exclude: 'node_modules/**',
				presets : ['@babel/preset-react'],
				// babelHelpers: "bundled",
			}),
			external(),
			resolve({
				// add .jsx so we don't have to include the extension when importing jsx files
				extensions: ['.js', '.jsx']
			}),
		],
	}
]
