import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    categorie: z.enum(['Semences', 'Calendrier', 'Guides', 'Potager bio', 'Biodiversité', 'Aromatiques', 'Conservation']),
    tempsLecture: z.number().default(5),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { blog };