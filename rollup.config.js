import css from 'rollup-plugin-import-css';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
    plugins: [isProduction && terser()],
  },
  plugins: [
    css({
      output: 'style.css',
    }),
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};
