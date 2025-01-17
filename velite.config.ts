import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehtpyPrettyCode, { rehypePrettyCode } from "rehype-pretty-code";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

// /blog/hello-world
const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post", // collection type name
  pattern: "blog/**/*.mdx", // content files glob pattern
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99), // Zod primitive type
      description: s.string().max(999).optional(),
      date: s.isodate(), // input Date-like string, output ISO Date string.
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "one-dark-pro" }],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
