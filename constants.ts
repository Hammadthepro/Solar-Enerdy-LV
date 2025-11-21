import { ServiceItem, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Solar Energy LV",
  address: "625 South 6th Street, Suite 106, Las Vegas, NV",
  phone: "702-473-5181",
  email: "info@solarenergylv.com",
  hours: "24/7 Availability",
  yearsExperience: 25,
  financing: "120% Financing with $0 Down",
  warranty: "25-year warranty on panels and Enphase® IQ microinverters"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Solar Panel Maintenance",
    description: "Comprehensive diagnostic, cleaning, and inspection services to ensure peak efficiency.",
    iconName: "Sun"
  },
  {
    title: "Repairs & Reinstalls",
    description: "Expert removal and reinstallation for roof work, plus inverter repairs and system diagnostics.",
    iconName: "Wrench"
  },
  {
    title: "Solar Pool Heating",
    description: "Specialized repairs for solar pool heating systems to extend your swimming season.",
    iconName: "Waves"
  },
  {
    title: "Critter Guard Installation",
    description: "Protect your investment with bird spikes, critter guards, and reflective repellents.",
    iconName: "ShieldCheck"
  },
  {
    title: "System Upgrades",
    description: "Adding new panels and battery storage solutions to existing systems.",
    iconName: "BatteryCharging"
  },
  {
    title: "Commercial & Residential",
    description: "Serving both homeowners and businesses across the Las Vegas valley.",
    iconName: "Building2"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah J.",
    location: "Summerlin, LV",
    text: "Solar Energy LV saved us! Our system was down, and they diagnosed the inverter issue quickly. The $0 down financing for the upgrade was a lifesaver.",
    rating: 5
  },
  {
    name: "Mike T.",
    location: "Henderson, NV",
    text: "25 years of experience really shows. They handled the pigeon problem under my panels perfectly with their critter guards.",
    rating: 5
  },
  {
    name: "Elena R.",
    location: "Las Vegas, NV",
    text: "I love that they are available 24/7. Had an emergency leak related to the pool heating, and they fixed it immediately.",
    rating: 5
  }
];

export const SYSTEM_INSTRUCTION = `
You are "Sunny", the AI Solar Consultant for Solar Energy LV.
Your goal is to assist website visitors with information about solar services in Las Vegas.

Key Business Information:
- Name: Solar Energy LV
- Experience: Over 25 years in the industry.
- Location: 625 South 6th Street, Suite 106, Las Vegas, NV.
- Phone: 702-473-5181 (Available 24/7).
- Email: info@solarenergylv.com
- Financing: 120% financing available, $0 down payment, quick pre-approvals.
- Warranty: 25-year factory warranty on panels and Enphase® IQ microinverters.

Services Offered:
- Solar Panel Services: Maintenance, diagnostic, removals, reinstalls, repairs, inspections, cleaning.
- Upgrades: Adding panels, battery backup.
- Protection: Critter guard installations, bird spikes, reflective bird repellents.
- Pool: Solar pool heating repairs.

Tone:
- Professional, friendly, and energetic.
- Emphasize the benefits: Lower electric bills, increased home value, environmental impact.
- Encourage users to call 702-473-5181 or ask for a quote if they seem interested in pricing.

Restrictions:
- Do not make up pricing. Tell them quotes are free and customizable.
- Only answer questions related to solar energy, home efficiency, or the company's services.
`;