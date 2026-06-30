import { defineArrayMember, defineField, defineType } from "sanity";

export const textImageSectionType = defineType({
  name: "textImageSection",
  title: "Text + Image Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      initialValue: "right",
      options: {
        list: [
          { title: "Right", value: "right" },
          { title: "Left", value: "left" },
        ],
      },
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Text + Image Section",
        subtitle,
      };
    },
  },
});

export const featureGridSectionType = defineType({
  name: "featureGridSection",
  title: "Feature Grid Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Feature Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Feature Description",
              type: "text",
              rows: 3,
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Feature Grid Section",
        subtitle,
      };
    },
  },
});

export const faqSectionType = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "FAQ",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eyebrow",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "FAQ Section",
        subtitle,
      };
    },
  },
});

export const ctaBannerSectionType = defineType({
  name: "ctaBannerSection",
  title: "CTA Banner Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Contact Us",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      initialValue: "#contact",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "CTA Banner Section",
      };
    },
  },
});