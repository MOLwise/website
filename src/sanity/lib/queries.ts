import { groq } from "next-sanity";

export const publicationsQuery = groq`
  *[_type == "publication"] | order(year desc) {
    _id,
    title,
    authors,
    year,
    venue,
    description,
    publicationUrl,
    pdfUrl,
    featured
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    hero {
      eyebrow,
      title,
      description,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink,
      "heroImageUrl": heroImage.asset->url
    },
    stats,
    sectionOrder,
    problemSection {
      eyebrow,
      title,
      description,
      whyItMattersLabel,
      whyItMattersText,
      cards[] {
        title,
        description,
        icon
      }
    },
    solutionSection {
      eyebrow,
      title,
      description,
      steps[] {
        title,
        description
      },
      outcomeLabel,
      outcomeText
    },
    workflowSection {
      eyebrow,
      title,
      description,
      highlightLabel,
      highlightText,
      steps[] {
        label,
        title,
        description
      }
    },
    technologySection {
      eyebrow,
      title,
      description,
      coreIdeaLabel,
      coreIdeaText,
      cards[] {
        title,
        description,
        tag,
        icon
      }
    },
    useCasesSection {
      eyebrow,
      title,
      description,
      cards[] {
        title,
        description,
        icon
      },
      bottomNote
    },
    aboutSection {
      eyebrow,
      title,
      description,
      principles[] {
        title,
        description
      },
      closingText
    },
    ctaSection {
      eyebrow,
      title,
      description,
      contactOptions[] {
        label,
        value
      },
      formTitle,
      nameLabel,
      emailLabel,
      messageLabel,
      buttonText,
      helperText
    },
    customSections[] {
      _type,
      _key,
      eyebrow,
      title,
      description,
      buttonText,
      buttonLink,
      imagePosition,
      "imageUrl": image.asset->url,
      features[] {
        title,
        description
      },
      questions[] {
        question,
        answer
      }
    }
  }
`;