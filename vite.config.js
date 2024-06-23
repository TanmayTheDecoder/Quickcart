import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
	plugins: [
		react(),
		imagemin({
			svgo: {
				plugins: [{ removeViewBox: true }, { removeUselessDefs: true }],
			},
			pngquant: {
				quality: [0.65, 0.9],
				speed: 4,
			},
			optipng: {
				optimizationLevel: 2,
			},
			mozjpeg: {
				quality: 80,
				progressive: true,
			},
		}),
	],
});
