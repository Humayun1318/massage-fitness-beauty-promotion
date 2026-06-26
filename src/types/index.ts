// export type NavLinkItem = {
//   label: string;
//   path: string;
// };

// export type Service = {
//   title: string;
//   description: string;
//   icon: string;
// };

// export type Testimonial = {
//   name: string;
//   role: string;
//   quote: string;
// };

// export type Membership = {
//   title: string;
//   price: string;
//   benefits: string[];
// };

// export type GalleryItem = {
//   title: string;
//   subtitle: string;
// };
export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  badge?: string;
  href: string;
}

export interface Treatment {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  initials: string;
  accent: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyCard {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}
