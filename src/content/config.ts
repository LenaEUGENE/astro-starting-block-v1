// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const packages = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(["let's do science", "let's get physical", "let's have fun" ]),
    category: z.string(),
    description: z.string(),
    duration: z.string(),
    price: z.string(),
    popular: z.boolean(),
    level: z.enum(["the hero best buddy", "the hero", "the scientist" ]),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  packages,
};
// 3. Export a single `collections` object to register your collection(s)
