const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const { terser } = require('rollup-plugin-terser');
const postcss = require('rollup-plugin-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const packageJson = require('./package.json');

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss({
      extensions: ['.css'],
      modules: true,
      extract: true,
      minimize: true,
      plugins: [postcssPresetEnv({ stage: 0 }), cssnano()],
    }),
    terser({
      output: {
        comments: false,
      },
    }),
  ],
};
