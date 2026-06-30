import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Small Badge Text",
          type: "string",
          initialValue: "MOLwise Platform",
        }),
        defineField({
          name: "title",
          title: "Main Title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "primaryButtonText",
          title: "Primary Button Text",
          type: "string",
          initialValue: "Explore Platform",
        }),
        defineField({
          name: "primaryButtonLink",
          title: "Primary Button Link",
          type: "string",
          initialValue: "#platform",
        }),
        defineField({
          name: "secondaryButtonText",
          title: "Secondary Button Text",
          type: "string",
          initialValue: "Contact Us",
        }),
        defineField({
          name: "secondaryButtonLink",
          title: "Secondary Button Link",
          type: "string",
          initialValue: "#contact",
        }),
        defineField({
          name: "heroImage",
          title: "Hero Image Optional",
          type: "image",
          options: {
            hotspot: true,
          },
          description:
            "Optional. If no image is uploaded, the animated DNA/workflow visual will be used.",
        }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Stats / Trust Strip Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
      validation: (rule) => rule.max(6),
    }),

    defineField({
  name: "sectionOrder",
  title: "Homepage Section Order",
  description:
    "Drag to reorder the main homepage sections. If a section is missing, the website will automatically place it at the end.",
  type: "array",
  initialValue: [
    "problem",
    "solution",
    "workflow",
    "technology",
    "useCases",
    "publications",
    "about",
    "customSections",
  ],
  of: [
    defineArrayMember({
      type: "string",
      options: {
        list: [
          { title: "Problem", value: "problem" },
          { title: "Solution", value: "solution" },
          { title: "Workflow", value: "workflow" },
          { title: "Technology", value: "technology" },
          { title: "Use Cases", value: "useCases" },
          { title: "Publications", value: "publications" },
          { title: "About", value: "about" },
          { title: "Optional Custom Sections", value: "customSections" },
        ],
      },
    }),
  ],
  validation: (rule) => rule.unique(),
}),
    defineField({
  name: "problemSection",
  title: "Problem Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "The Problem",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "whyItMattersLabel",
      title: "Why It Matters Label",
      type: "string",
      initialValue: "Why it matters",
    }),
    defineField({
      name: "whyItMattersText",
      title: "Why It Matters Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "cards",
      title: "Problem Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Git Branch", value: "GitBranch" },
                  { title: "Clock", value: "Clock" },
                  { title: "Alert Triangle", value: "AlertTriangle" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
    }),
  ],
}),
defineField({
  name: "solutionSection",
  title: "Solution Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "The Solution",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "steps",
      title: "Solution Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Step Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
    }),
    defineField({
  name: "workflowSection",
  title: "Workflow Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "Workflow",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "highlightLabel",
      title: "Highlight Label",
      type: "string",
      initialValue: "Designed for clarity",
    }),
    defineField({
      name: "highlightText",
      title: "Highlight Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "steps",
      title: "Workflow Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Step Label",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Step Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "label",
            },
          },
        }),
      ],
    }),
  ],
}),
defineField({
  name: "technologySection",
  title: "Technology Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "Technology",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "coreIdeaLabel",
      title: "Core Idea Label",
      type: "string",
      initialValue: "Core idea",
    }),
    defineField({
      name: "coreIdeaText",
      title: "Core Idea Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "cards",
      title: "Technology Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "tag",
              title: "Small Tag",
              type: "string",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Brain", value: "Brain" },
                  { title: "Database", value: "Database" },
                  { title: "Network", value: "Network" },
                  { title: "Shield Check", value: "ShieldCheck" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "tag",
            },
          },
        }),
      ],
    }),
  ],
}),
defineField({
  name: "useCasesSection",
  title: "Use Cases Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "Use Cases",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "cards",
      title: "Use Case Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Flask", value: "FlaskConical" },
                  { title: "Microscope", value: "Microscope" },
                  { title: "Workflow", value: "Workflow" },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "bottomNote",
      title: "Bottom Note",
      type: "text",
      rows: 3,
    }),
  ],
}),
defineField({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "About MOLwise",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "principles",
      title: "Principle Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "closingText",
      title: "Closing Text",
      type: "text",
      rows: 4,
    }),
  ],
}),
defineField({
  name: "ctaSection",
  title: "CTA / Contact Section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small Label",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Section Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contactOptions",
      title: "Contact Options",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "formTitle",
      title: "Form Title",
      type: "string",
    }),
    defineField({
      name: "nameLabel",
      title: "Name Field Label",
      type: "string",
      initialValue: "Name",
    }),
    defineField({
      name: "emailLabel",
      title: "Email Field Label",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "messageLabel",
      title: "Message Field Label",
      type: "string",
      initialValue: "Message",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Send Message",
    }),
    defineField({
      name: "helperText",
      title: "Helper Text",
      type: "text",
      rows: 3,
    }),
  ],
}),
    defineField({
      name: "outcomeLabel",
      title: "Outcome Label",
      type: "string",
      initialValue: "Outcome",
    }),
    defineField({
      name: "outcomeText",
      title: "Outcome Text",
      type: "text",
      rows: 4,
    }),
  ],
}),
    defineField({
      name: "customSections",
      title: "Optional Custom Sections",
      description:
        "Add extra homepage sections without changing code. These appear after the main website sections.",
      type: "array",
      of: [
        defineArrayMember({ type: "textImageSection" }),
        defineArrayMember({ type: "featureGridSection" }),
        defineArrayMember({ type: "faqSection" }),
        defineArrayMember({ type: "ctaBannerSection" }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});