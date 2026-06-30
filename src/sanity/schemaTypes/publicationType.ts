import { defineField, defineType } from "sanity";

export const publicationType = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Journal / Conference / Venue",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "publicationUrl",
      title: "Publication Link",
      type: "url",
    }),
    defineField({
      name: "pdfUrl",
      title: "PDF Link",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured publication",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "authors",
    },
  },
});