import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
			tech: z.array(z.string()),
			code: z.string().optional(),
			demo: z.string().optional(),
			order: z.number()
		})
});

const workExperienceCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		job: z.string(),
		description: z.string(),
		date: z.string(),
		tech: z.array(z.string())
	})
});

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
			pubDate: z.string()
		})
});

export const collections = {
	projects: projectsCollection,
	workExperience: workExperienceCollection,
	blog: blogCollection
};
