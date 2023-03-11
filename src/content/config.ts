// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const packages = defineCollection({
  schema: z.object({
    type: z.string,
    categorie:z.string,
    departure: z.string,
    price: z.string,
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = {
  packages,
};
// 3. Export a single `collections` object to register your collection(s)
