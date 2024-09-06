const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const copy = require('rollup-plugin-copy');
const del = require('rollup-plugin-delete');

const dest = './dist'; // Output folder

module.exports = {
  input: 'src/script.ts', // Entry file
  output: {
    file: `${dest}/script.js`,
    format: 'cjs', // Use IIFE format for browser compatibility
    sourcemap: false
  },
  plugins: [
    del({ targets: `${dest}/*` }), // Clean up the dist folder before building
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    copy({
      targets: [
        { src: 'config.json', dest },
        { src: 'assets/icon.png', dest },
        { src: 'assets/index.html', dest }
      ]
    })
  ]
};
