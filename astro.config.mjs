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
					editorActiveTabIndicatorBottomColor: 'transparent',
					editorActiveTabForeground: '#ffffff',
					editorActiveTabBackground: '#3730a3'
				}
			},
			themes: ['material-theme-ocean']
		}),
		mdx()
	]
});
