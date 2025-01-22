
export interface ElementsFaqItem {
  id?: number;
  question: string;
  answer?: any;
};

export interface ElementsFeatureColumn {
  id?: number;
  title: string;
  description?: string;
  icon: Media | null;
};

export interface ElementsFeatureRow {
  id?: number;
  title: string;
  description?: string;
  media: Media | null;
  link?: LinksLink | null;
};

export interface ElementsFeature {
  id?: number;
  name?: string;
};

export interface ElementsFooterSection {
  id?: number;
  title?: string;
  links?: LinksLink[] | null;
};

export interface ElementsListItem {
  id?: number;
  text?: string;
  link?: string;
};

export interface ElementsLogos {
  id?: number;
  title?: string;
  logo?: Media | null;
};

export interface ElementsNotificationBanner {
  id?: number;
  text?: string;
  type: "alert" | "info" | "warning";
};

export interface ElementsPlan {
  id?: number;
  name?: string;
  description?: string;
  features?: ElementsFeature[] | null;
  isRecommended?: boolean;
  price?: number;
  pricePeriod?: string;
};

export interface ElementsTestimonial {
  id?: number;
  logo?: Media | null;
  picture?: Media | null;
  text?: string;
  authorName?: string;
  authorTitle?: string;
  link?: string;
};

export interface LayoutFooter {
  id?: number;
  logo?: Media | null;
  columns?: ElementsFooterSection[] | null;
  smallText?: string;
};

export interface LayoutNavbar {
  id?: number;
  links?: LinksLink[] | null;
  button?: LinksButtonLink | null;
  logo: Media | null;
};

export interface LinksButtonLink {
  id?: number;
  url?: string;
  newTab?: boolean;
  text?: string;
  type?: "primary" | "secondary";
};

export interface LinksButton {
  id?: number;
  text?: string;
  type?: "primary" | "secondary";
};

export interface LinksLink {
  id?: number;
  url: string;
  newTab?: boolean;
  text: string;
};

export interface SectionsBodyWithTitle {
  id?: number;
  title?: string;
  body?: any;
};

export interface SectionsBottomActions {
  id?: number;
  title?: string;
  buttons?: LinksButtonLink[] | null;
};

export interface SectionsFaq {
  id?: number;
  title?: string;
  items?: ElementsFaqItem[] | null;
};

export interface SectionsFeatureColumnsGroup {
  id?: number;
  features?: ElementsFeatureColumn[] | null;
};

export interface SectionsFeatureRowsGroup {
  id?: number;
  features?: ElementsFeatureRow[] | null;
};

export interface SectionsHero {
  id?: number;
  title?: string;
  label?: string;
  description?: string;
  picture?: Media | null;
  smallTextWithLink?: string;
  buttons?: LinksButtonLink[] | null;
};

export interface SectionsLargeVideo {
  id?: number;
  title?: string;
  description?: string;
  video: Media | null;
  poster?: Media | null;
};

export interface SectionsLeadForm {
  id?: number;
  title?: string;
  emailPlaceholder?: string;
  submitButton?: LinksButton | null;
  location?: string;
};

export interface SectionsList {
  id?: number;
  title?: string;
  items?: ElementsListItem[] | null;
};

export interface SectionsPricing {
  id?: number;
  title?: string;
  plans?: ElementsPlan[] | null;
};

export interface SectionsRichText {
  id?: number;
  content?: string;
};

export interface SectionsTestimonialsGroup {
  id?: number;
  title?: string;
  description?: string;
  link?: LinksLink | null;
  logos?: ElementsLogos[] | null;
  testimonials?: ElementsTestimonial[] | null;
};

export interface SharedOpenGraph {
  id?: number;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: Media | null;
  ogUrl?: string;
  ogType?: string;
};

export interface SharedRedirect {
  id?: number;
  to?: string;
  from?: string;
  statusCode?: number;
};

export interface SharedSeo {
  id?: number;
  metaTitle: string;
  metaDescription: string;
  metaImage?: Media | null;
  openGraph?: SharedOpenGraph | null;
  keywords?: string;
  metaRobots?: string;
  metaViewport?: string;
  canonicalURL?: string;
  structuredData?: Record<string, any>;
};

export interface SharedSiteScript {
  id?: number;
  script: string;
  position: "Before closing head" | "After start body" | "Before closing body";
};

export interface SharedSocialNetwork {
  id?: number;
  name: string;
  url?: string;
  icon?: Media | null;
  inNewTab?: boolean;
};

export interface Activity {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  site?: string;
  message?: string;
  by?: string;
  currentStatus?: "success" | "error" | "processing" | "unknown";
  logFile?: Media | null;
};

export interface Article {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title: string;
  publishedDate?: Date | string;
  slug?: string;
  seo?: SharedSeo | null;
};

export interface Builder {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  BuildAutomatically?: boolean;
};

export interface Site {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  seo?: SharedSeo | null;
  footer?: LayoutFooter | null;
  navigation?: LayoutNavbar[] | null;
  favicon?: Media | null;
  socialNetworks?: SharedSocialNetwork[] | null;
  scripts?: SharedSiteScript[] | null;
};

export interface SitesPage {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  slug: string;
  seo?: SharedSeo | null;
  blocks?: any;
};

export interface SitesRedirect {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  domain: string;
  redirects?: SharedRedirect[] | null;
};

export interface UserMessage {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  message?: string;
  isSpam?: boolean;
};

export interface UserSubscriber {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  email: string;
  subscribedFromPage?: string;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  };
};
