import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '/src/styles/breakpoints' as *;
        `
			}
		}
	},
	optimizeDeps: {
		exclude: ['dom-to-image-more']
	}
});
