import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
			tech: z.array(z.string())
		})
});

export const collections = {
	projects: projectsCollection
};
