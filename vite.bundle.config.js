import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			emitCss: false
		})
	],
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
	},
	build: {
		lib: {
			entry: 'src/main.js',
			name: 'MyApp',
			fileName: 'bundle',
			formats: ['iife']
		},
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				inlineDynamicImports: true,
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'style.css') return 'style.css';
					return assetInfo.name;
				}
			}
		}
	}
});
