export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  stars: number;
  text: string;
  author: string;
  location: string;
  avatar: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
