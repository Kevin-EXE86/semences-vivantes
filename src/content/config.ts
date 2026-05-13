// src/content/config.ts
// Définit le schéma de validation de tous les articles du blog
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titre:        z.string(),
    description:  z.string(),
    date:         z.coerce.date(),
    categorie:    z.enum(['Semences', 'Calendrier', 'Guides', 'Potager bio', 'Biodiversité', 'Aromatiques', 'Conservation']),
    tempsLecture: z.number().default(5),
    image:        z.string().optional(),
    brouillon:    z.boolean().default(false),
  }),
});

export const collections = { blog };
