import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'UiKit',
			fileName: (format) => `index.${format}.js`,
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			// Externalize peer dependencies
			external: ['react', 'react-dom'],
			output: {
				globals: {
					'react': 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
		sourcemap: true,
		cssCodeSplit: true,
	},
	resolve: {
		alias: {
			'@components': path.resolve(
				__dirname,
				'src/components'
			),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@utils': path.resolve(__dirname, 'src/utils'),
		},
	},
});
