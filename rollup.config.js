import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.es',
  plugins: [
    babel()
  ],
  targets: [
    {
      format: 'iife',
      dest: 'dist/fullscream.js',
      moduleName: 'fullscream',
    },
    {
      format: 'cjs',
      dest: 'index.js',
    }
  ]
};
