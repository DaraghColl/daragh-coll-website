import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
			tech: z.array(z.string()),
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

export const collections = {
	projects: projectsCollection,
	workExperience: workExperienceCollection
};
