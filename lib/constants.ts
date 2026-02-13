/**
 * Site-wide constants and configuration
 */

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Bellgams Carpet Cleaning',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description: 'Professional carpet cleaning services in British Columbia. Expert steam cleaning, pet stain removal, and upholstery cleaning.',
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+16049021805',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '(604) 902-1805',
  email: process.env.NEXT_PUBLIC_EMAIL || 'sbellgam2019@gmail.com',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+16049021805',
  address: {
    street: '281 Holdom Avenue',
    city: 'Burnaby',
    province: 'BC',
    postalCode: 'V5B 3T9',
    country: 'Canada',
  },
  social: {
    facebook: 'https://facebook.com/bellgams',
    instagram: 'https://instagram.com/bellgams',
    twitter: 'https://twitter.com/bellgams',
    linkedin: 'https://linkedin.com/company/bellgams',
    youtube: 'https://youtube.com/@bellgams',
  },
  businessHours: {
    monday: '8:00 AM - 8:00 PM',
    tuesday: '8:00 AM - 8:00 PM',
    wednesday: '8:00 AM - 8:00 PM',
    thursday: '8:00 AM - 8:00 PM',
    friday: '8:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '10:00 AM - 5:00 PM',
  },
} as const;

export const SERVICES = [
  {
    id: 'carpet-steam-cleaning',
    name: 'Carpet Steam Cleaning',
    shortDescription: 'Professional hot water extraction for deep carpet cleaning',
  },
  {
    id: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    shortDescription: 'Deep cleaning for sofas, chairs, and furniture',
  },
  {
    id: 'area-rug-cleaning',
    name: 'Area Rug Cleaning',
    shortDescription: 'Gentle yet effective cleaning for delicate rugs',
  },
  {
    id: 'pet-odor-removal',
    name: 'Pet Odor & Stain Removal',
    shortDescription: 'Eliminate pet stains and odors completely',
  },
  {
    id: 'stain-removal',
    name: 'Stain Removal',
    shortDescription: 'Professional treatment for stubborn stains',
  },
] as const;

export const LOCATIONS = {
  'British Columbia': [
    'Vancouver',
    'Burnaby',
    'Surrey',
    'Richmond',
    'Coquitlam',
    'New Westminster',
    'North Vancouver',
    'West Vancouver',
    'Langley',
    'Abbotsford',
    'Delta',
    'Maple Ridge',
    'Port Coquitlam',
    'Port Moody',
    'White Rock',
  ],
} as const;

export const ALL_CITIES = Object.values(LOCATIONS).flat();

export const PROPERTY_TYPES = [
  'Residential Home',
  'Apartment/Condo',
  'Townhouse',
  'Commercial Office',
  'Restaurant',
  'Retail Store',
  'Other',
] as const;

export const ROOM_TYPES = [
  'Living Room',
  'Bedroom',
  'Dining Room',
  'Hallway',
  'Stairs',
  'Basement',
  'Other',
] as const;

export const FAQ_ITEMS = [
  {
    question: 'How long does carpet cleaning take?',
    answer: 'Most residential carpet cleaning takes 1-3 hours depending on the size of the area and the level of soiling. We work efficiently to minimize disruption to your day.',
  },
  {
    question: 'How long until my carpets are dry?',
    answer: 'With our hot water extraction method, carpets typically dry within 6-12 hours. We use high-powered extraction equipment to remove as much moisture as possible. Using fans can speed up the drying process.',
  },
  {
    question: 'Is your cleaning solution safe for pets and children?',
    answer: 'Yes! We use eco-friendly, non-toxic cleaning solutions that are completely safe for pets and children. Your family\'s health and safety is our top priority.',
  },
  {
    question: 'Do you move furniture?',
    answer: 'Yes, we move light furniture as part of our standard service. However, we recommend removing valuable or fragile items, and we cannot move very heavy furniture like pianos or entertainment centers.',
  },
  {
    question: 'Can you remove all stains?',
    answer: 'While we have a very high success rate with stain removal, some stains (especially old or set-in stains) may be permanent. We assess each stain and use specialized treatments for the best possible results.',
  },
  {
    question: 'How often should I get my carpets cleaned?',
    answer: 'We recommend professional carpet cleaning every 12-18 months for most homes. High-traffic areas or homes with pets and children may benefit from cleaning every 6-12 months.',
  },
  {
    question: 'Do I need to vacuum before you arrive?',
    answer: 'While not required, vacuuming beforehand helps us focus on deep cleaning rather than removing surface dirt. However, we can vacuum as part of our service if needed.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards, debit cards, and e-transfer. Payment is due upon completion of the service.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes! We offer same-day service based on availability. Contact us early in the day for the best chance of same-day scheduling.',
  },
  {
    question: 'Are you insured and bonded?',
    answer: 'Yes, Bellgam Carpet Cleaning is fully insured and bonded. We carry liability insurance to protect your property and our team.',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Vancouver, BC',
    rating: 5,
    text: 'Absolutely amazing service! My carpets look brand new. The team was professional, on time, and the results exceeded my expectations.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Burnaby, BC',
    rating: 5,
    text: 'Best carpet cleaning company I\'ve used. They removed pet stains I thought were permanent. Highly recommend!',
  },
  {
    id: 3,
    name: 'Emily Thompson',
    location: 'Surrey, BC',
    rating: 5,
    text: 'Professional, courteous, and thorough. They took the time to explain their process and the results were fantastic.',
  },
] as const;

export const PRICING_PACKAGES = [
  {
    id: '1-bedroom',
    name: '1 Bedroom Apartment',
    price: '$125',
    description: 'Includes 1 room and Living Room',
    features: [
      'Approximately 150 sq ft per room',
      'Professional steam cleaning',
      'Eco-friendly solutions',
      'Same-day service available',
      'Free estimates',
      'Satisfaction guaranteed',
    ],
    popular: false,
  },
  {
    id: '2-bedroom',
    name: '2 Bedroom Apartment',
    price: '$170',
    description: 'Includes 2 rooms and Living Room',
    features: [
      'Approximately 150 sq ft per room',
      'Professional steam cleaning',
      'Eco-friendly solutions',
      'Same-day service available',
      'Free estimates',
      'Satisfaction guaranteed',
    ],
    popular: true,
  },
  {
    id: '3-bedroom',
    name: '3 Bedroom Apartment',
    price: '$215',
    description: 'Includes 3 rooms and Living Room',
    features: [
      'Approximately 150 sq ft per room',
      'Professional steam cleaning',
      'Eco-friendly solutions',
      'Same-day service available',
      'Free estimates',
      'Satisfaction guaranteed',
    ],
    popular: false,
  },
] as const;

export const STATS = [
  {
    label: 'Years in Business',
    value: 15,
    suffix: '+',
  },
  {
    label: 'Happy Customers',
    value: 10000,
    suffix: '+',
  },
  {
    label: 'BC Cities Served',
    value: 15,
    suffix: '+',
  },
  {
    label: '5-Star Reviews',
    value: 500,
    suffix: '+',
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: 'Certified Professionals',
    description: 'Our team is fully trained and certified in the latest carpet cleaning techniques.',
    icon: 'shield-check',
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'We use only environmentally safe, non-toxic cleaning products.',
    icon: 'leaf',
  },
  {
    title: 'Advanced Equipment',
    description: 'State-of-the-art cleaning equipment for superior results.',
    icon: 'sparkles',
  },
  {
    title: '100% Satisfaction Guarantee',
    description: 'If you\'re not completely satisfied, we\'ll re-clean for free.',
    icon: 'check-circle',
  },
  {
    title: 'Same-Day Service',
    description: 'Need it done today? We offer same-day service based on availability.',
    icon: 'clock',
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden fees. Transparent pricing always.',
    icon: 'dollar-sign',
  },
] as const;

export const CLEANING_PROCESS = [
  {
    step: 1,
    title: 'Inspection',
    description: 'We assess your carpets and identify any problem areas or stains.',
  },
  {
    step: 2,
    title: 'Pre-Treatment',
    description: 'Apply specialized solutions to break down dirt and stains.',
  },
  {
    step: 3,
    title: 'Deep Cleaning',
    description: 'Hot water extraction removes deep-seated dirt and allergens.',
  },
  {
    step: 4,
    title: 'Final Inspection',
    description: 'We ensure everything meets our high standards before we leave.',
  },
] as const;

export const BLOG_CATEGORIES = [
  'Cleaning Tips',
  'Maintenance',
  'Pet Care',
  'Stain Removal',
  'Industry News',
  'DIY Guides',
] as const;

export const CONTACT_SUBJECTS = [
  'General Inquiry',
  'Quote Request',
  'Service Booking',
  'Complaint',
  'Feedback',
  'Other',
] as const;
