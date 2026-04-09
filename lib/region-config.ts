/**
 * Region configuration for British Columbia and Toronto/GTA
 * Each region has its own site config, locations, testimonials, and copy.
 */

export type Region = 'bc' | 'toronto';

export const REGION_CONFIG = {
  bc: {
    id: 'bc' as Region,
    label: 'British Columbia',
    shortLabel: 'BC',
    flag: '🌊',
    tagline: 'Greater Vancouver & the Lower Mainland',
    heroTitle: 'Professional Carpet Cleaning Services In British Columbia',
    heroSubtitle:
      'Expert steam cleaning, pet stain removal, and upholstery cleaning across Greater Vancouver. Trusted by thousands of BC families. Get your free quote today!',
    aboutHeadline: "BC's Trusted Carpet Cleaning Specialists",
    aboutDescription:
      'Since 2010, Bellgams has delivered professional carpet, upholstery, and area rug cleaning to thousands of homes and businesses across British Columbia. We are a family-run company built on honest work, eco-friendly methods, and results that speak for themselves.',
    statsLabel: 'BC Cities Served',
    statsSubheading: 'Serving British Columbia Since 2010',
    statsBody:
      'Our commitment to excellence has made us the leading carpet cleaning service in British Columbia.',
    localExpertise:
      'We understand BC homes: the damp Lower Mainland climate, pet-friendly households, and the high-density condo market. Our methods are tailored for local conditions.',
    communityText:
      "We serve over 15 cities across BC and invest in the communities we work in — from Vancouver's West End to Surrey's suburbs and beyond.",
    footerDescription:
      'Professional carpet cleaning services in British Columbia. Expert steam cleaning, pet stain removal, and upholstery cleaning.',
    locationsPageTitle: 'Serving Communities Across British Columbia',
    locationsPageSubtitle:
      'Professional carpet cleaning services across Greater Vancouver, the Fraser Valley, and beyond. Find your local Bellgams service area below.',
    reviewsMetaDescription:
      '500+ five-star reviews from satisfied customers in British Columbia.',
    phone: '+16049021805',
    phoneDisplay: '+1(604) 902-1805',
    email: 'sbellgam2019@gmail.com',
    address: {
      street: '281 Holdom Avenue',
      city: 'Burnaby',
      province: 'BC',
      postalCode: 'V5B 3T9',
      country: 'Canada',
    },
    locations: [
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
    footerLocations: [
      { name: 'Vancouver', href: '/locations/vancouver-carpet-cleaning' },
      { name: 'Burnaby', href: '/locations/burnaby-carpet-cleaning' },
      { name: 'Surrey', href: '/locations/surrey-carpet-cleaning' },
      { name: 'All Locations', href: '/locations' },
    ],
    testimonials: [
      {
        id: 'bc-1',
        customerName: 'Priya Sandhu',
        location: 'Kitsilano, Vancouver, BC',
        rating: 5,
        content:
          'My dog had been using a bedroom corner for weeks. Bellgams treated the carpet and the padding underneath — I cannot detect any odour at all now. Worth every penny.',
      },
      {
        id: 'bc-2',
        customerName: 'Connor MacPhail',
        location: 'Burnaby Heights, Burnaby, BC',
        rating: 5,
        content:
          'Previous owners had a large dog. Bellgams did a full deep clean and the house finally smells like ours. Carpets look almost brand new — amazing difference.',
      },
      {
        id: 'bc-3',
        customerName: 'Derek Oliphant',
        location: 'Mount Pleasant, Vancouver, BC',
        rating: 5,
        content:
          'Spilled red wine on my beige carpet at a dinner party. The stain is completely gone — not just faded, actually gone. Will be booking Bellgams for regular maintenance from now on.',
      },
      {
        id: 'bc-4',
        customerName: 'Anika Johansson',
        location: 'West End, Vancouver, BC',
        rating: 5,
        content:
          "I was nervous about having my grandmother's Persian rug cleaned. The technician explained every step carefully and the colours are brighter than I have seen in years. Exceptional care.",
      },
      {
        id: 'bc-5',
        customerName: 'Mei-Ling Tso',
        location: 'Richmond, BC',
        rating: 5,
        content:
          'Arranged a commercial clean for our dental clinic on a Saturday morning. Finished in under two hours and the carpet was fully dry by opening time Monday. Flawless service.',
      },
      {
        id: 'bc-6',
        customerName: 'James Kowalski',
        location: 'Newton, Surrey, BC',
        rating: 5,
        content:
          'The hallway traffic path had turned dark grey with five people in the house. One session with Bellgams and it matches the rest of the carpet perfectly. Fantastic value.',
      },
    ],
  },

  toronto: {
    id: 'toronto' as Region,
    label: 'Toronto & the GTA',
    shortLabel: 'GTA',
    flag: '🏙️',
    tagline: 'Toronto, Mississauga, Brampton & Beyond',
    heroTitle: 'Professional Carpet Cleaning Services In Toronto & the GTA',
    heroSubtitle:
      'Expert steam cleaning, pet stain removal, and upholstery cleaning across Toronto and the Greater Toronto Area. Trusted by GTA families. Get your free quote today!',
    aboutHeadline: "Toronto's Trusted Carpet Cleaning Specialists",
    aboutDescription:
      "Since 2010, Bellgams has delivered professional carpet, upholstery, and area rug cleaning to thousands of homes and businesses. We are now proudly expanding to serve Toronto and the GTA — bringing the same family-run values, eco-friendly methods, and exceptional results that BC customers have trusted for over a decade.",
    statsLabel: 'GTA Cities Served',
    statsSubheading: 'Now Serving Toronto & the GTA',
    statsBody:
      'Bringing our award-winning carpet cleaning service to Toronto, Mississauga, Brampton, and across the Greater Toronto Area.',
    localExpertise:
      "We understand GTA homes: older Toronto houses with decades of wear, high-rise condos in Mississauga, and busy family homes in Brampton and Markham. Our methods are adapted for every property type.",
    communityText:
      'We serve communities across the GTA — from downtown Toronto neighbourhoods to Oakville, Vaughan, Richmond Hill, and Pickering.',
    footerDescription:
      'Professional carpet cleaning services across Toronto and the Greater Toronto Area. Expert steam cleaning, pet stain removal, and upholstery cleaning.',
    locationsPageTitle: 'Serving Communities Across Toronto & the GTA',
    locationsPageSubtitle:
      'Professional carpet cleaning services across Toronto, Mississauga, Brampton, Markham, Vaughan, and all major GTA communities. Find your local Bellgams service area below.',
    reviewsMetaDescription:
      '500+ five-star reviews from satisfied customers — now serving the Greater Toronto Area.',
    phone: '+16049021805',
    phoneDisplay: '+1(604) 902-1805',
    email: 'sbellgam2019@gmail.com',
    address: {
      street: '',
      city: 'Toronto',
      province: 'ON',
      postalCode: '',
      country: 'Canada',
    },
    locations: [
      'Toronto',
      'Mississauga',
      'Brampton',
      'Markham',
      'Vaughan',
      'Richmond Hill',
      'Oakville',
      'Burlington',
      'Ajax',
      'Pickering',
      'Whitby',
      'Oshawa',
      'Scarborough',
      'Etobicoke',
      'North York',
    ],
    footerLocations: [
      { name: 'Toronto', href: '/locations/toronto-carpet-cleaning' },
      { name: 'Mississauga', href: '/locations/mississauga-carpet-cleaning' },
      { name: 'Brampton', href: '/locations/brampton-carpet-cleaning' },
      { name: 'All Locations', href: '/locations' },
    ],
    testimonials: [
      {
        id: 'to-1',
        customerName: 'Fatima Okafor',
        location: 'The Annex, Toronto, ON',
        rating: 5,
        content:
          "Our Victorian semi-detached had carpets that hadn't been professionally cleaned in years. Bellgams arrived on time, explained everything before starting, and the results were beyond what I expected. The whole house smells fresh.",
      },
      {
        id: 'to-2',
        customerName: 'Rajan Patel',
        location: 'Mississauga, ON',
        rating: 5,
        content:
          'Had a large family gathering and red curry sauce ended up on our light beige living room carpet. Called Bellgams in a panic the next morning. They came same day and the stain is completely gone. Truly impressive.',
      },
      {
        id: 'to-3',
        customerName: 'Sophie Tremblay',
        location: 'Etobicoke, Toronto, ON',
        rating: 5,
        content:
          'I manage several rental units in Etobicoke. Bellgams cleaned three apartments between tenants in a single day. Every unit was spotless and ready on time. They are now my go-to for all turnovers.',
      },
      {
        id: 'to-4',
        customerName: 'Marcus Chen',
        location: 'Markham, ON',
        rating: 5,
        content:
          "Our two cats had been slowly destroying the basement carpet for two years. I assumed it was beyond saving. Bellgams used a specialist treatment and the odour is completely gone. Didn't think that was even possible.",
      },
      {
        id: 'to-5',
        customerName: 'Adaeze Nwosu',
        location: 'Brampton, ON',
        rating: 5,
        content:
          'We had just moved into our new home in Brampton and the previous owners left the carpets in rough condition. Bellgams transformed them — bright, clean, and soft underfoot. We felt like we were in a brand-new house.',
      },
      {
        id: 'to-6',
        customerName: 'David Korhonen',
        location: 'North York, Toronto, ON',
        rating: 5,
        content:
          'Booked Bellgams for our condo in North York. The technician was professional, fast, and incredibly thorough. My carpets have never looked this clean in the five years I have lived here. Absolutely worth it.',
      },
    ],
  },
} as const;

export type RegionConfig = (typeof REGION_CONFIG)[Region];
