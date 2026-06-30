import {
  ctaBannerSectionType,
  faqSectionType,
  featureGridSectionType,
  textImageSectionType,
} from "./customSectionTypes";
import { homePageType } from "./homePageType";
import { publicationType } from "./publicationType";

export const schema = {
  types: [
    homePageType,
    publicationType,
    textImageSectionType,
    featureGridSectionType,
    faqSectionType,
    ctaBannerSectionType,
  ],
};