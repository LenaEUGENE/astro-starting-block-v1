// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const packages = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(["Let's do science", "Let's get physical", "Let's have fun" ]),
    category: z.string(),
    description: z.string(),
    duration: z.string(),
    price: z.string(),
    popular: z.boolean(),
    character: z.enum(["The hero best buddy", "The protagonist", "The (not so mad) scientist" ]),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  packages,
};
// 3. Export a single `collections` object to register your collection(s)
