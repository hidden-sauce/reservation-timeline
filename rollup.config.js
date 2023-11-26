import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/reservation-status-bar.ts',
  output: [
	{
	  file: 'dist/reservation-status-bar.js',
	  format: 'esm',
	},
	{
	  file: 'dist/reservation-status-bar.umd.js',
	  format: 'umd',
	  name: 'ReservationStatusBar',
	},
  ],
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    typescript(),
    resolve(),
  ],
};
