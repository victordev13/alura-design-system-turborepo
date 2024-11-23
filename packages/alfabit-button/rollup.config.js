import typescript from 'rollup-plugin-typescript2';
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  external: ['react', 'styled-components'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
