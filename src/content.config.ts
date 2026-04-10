import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default('Daniel Orosz'),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
    }),
});

const blogEn = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        author: z.string().default('Daniel Orosz'),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
    }),
});

export const collections = { blog, 'blog-en': blogEn };
