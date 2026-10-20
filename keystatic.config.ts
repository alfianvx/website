import { collection, config, fields } from "@keystatic/core";

/**
 * Keystatic CMS configuration — drives both the admin UI (/keystatic, dev
 * only) and the Reader API used by src/data/*.ts at build time.
 *
 * Storage is local: entries are plain YAML files in content/<collection>/.
 */
export default config({
  storage: { kind: "local" },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "content/posts/*/",
      columns: ["pubDate"],
      schema: {
        title: fields.slug({
          name: { label: "Title", description: "Shown on the blog index" },
        }),
        description: fields.text({
          label: "Description",
          description: "Short summary shown in post lists",
          multiline: true,
          validation: { isRequired: true },
        }),
        pubDate: fields.date({
          label: "Published date",
          validation: { isRequired: true },
        }),
        content: fields.array(fields.text({ label: "Paragraph", multiline: true }), {
          label: "Content",
          description: "The post body, one entry per paragraph",
          itemLabel: ({ value }: { value: string }) => value.slice(0, 60),
        }),
      },
    }),

    work: collection({
      label: "Work experience",
      slugField: "company",
      path: "content/work/*/",
      columns: ["role", "period"],
      schema: {
        company: fields.slug({
          name: { label: "Company" },
        }),
        role: fields.text({
          label: "Role",
          validation: { isRequired: true },
        }),
        period: fields.text({
          label: "Period",
          description: 'e.g. "Jan 2024 - Present"',
          validation: { isRequired: true },
        }),
        highlights: fields.array(
          fields.text({ label: "Highlight", multiline: true }),
          {
            label: "Highlights",
            itemLabel: ({ value }: { value: string }) => value.slice(0, 60),
          },
        ),
        order: fields.integer({
          label: "Order",
          description: "Lower numbers show first",
          defaultValue: 0,
        }),
      },
    }),

    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*/",
      columns: ["period", "role"],
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        description: fields.text({
          label: "Description",
          description: "Short summary shown in project lists",
          multiline: true,
          validation: { isRequired: true },
        }),
        period: fields.text({
          label: "Period",
          description: 'e.g. "2026" or "2024 - 2025"',
          validation: { isRequired: true },
        }),
        role: fields.text({
          label: "Role",
          description: 'e.g. "Fullstack Developer @ Ladeva Software"',
          validation: { isRequired: true },
        }),
        tech: fields.array(fields.text({ label: "Technology" }), {
          label: "Tech stack",
          itemLabel: ({ value }: { value: string }) => value,
        }),
        highlights: fields.array(
          fields.text({ label: "Highlight", multiline: true }),
          {
            label: "Highlights",
            itemLabel: ({ value }: { value: string }) => value.slice(0, 60),
          },
        ),
        order: fields.integer({
          label: "Order",
          description: "Lower numbers show first",
          defaultValue: 0,
        }),
      },
    }),
  },
});
