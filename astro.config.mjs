import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		expressiveCode({
			frames: {
				showCopyToClipboardButton: true
			},
			styleOverrides: {
				// You can optionally override the plugin's default styles here
				frames: {
					editorActiveTabIndicatorTopColor: 'transparent',
					editorActiveTabIndicatorBottomColor: '#4f46e5'
				}
			}
		}),
		mdx()
	]
});
