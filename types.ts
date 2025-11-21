export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  WHY_US = 'why-us',
  CONTACT = 'contact',
}