// import { prisma } from '@/lib/prisma';
// import { Hero } from '@/components/sections/hero';
// import { StatsSection } from '@/components/sections/stats-section';
// import { ServicesSection } from '@/components/sections/services-section';
// import { PricingPreviewSection } from '@/components/sections/pricing-preview-section';
// import { TestimonialsSection } from '@/components/sections/testimonials-section';
// import { CTASection } from '@/components/sections/cta-section';

// async function getHomepageData() {
//   const [services, reviews] = await Promise.all([
//     prisma.service.findMany({
//       where: { published: true, featured: true },
//       orderBy: { order: 'asc' },
//       take: 6,
//     }),
//     prisma.review.findMany({
//       where: { published: true, featured: true },
//       orderBy: { createdAt: 'desc' },
//       take: 6,
//     }),
//   ]);

//   return { services, reviews };
// }

// export const metadata = {
//   title: 'Professional Carpet Cleaning Services | Bellgams Carpet Cleaning',
//   description: 'Expert carpet cleaning services in British Columbia. Steam cleaning, pet stain removal, upholstery cleaning. Same-day service available. Get your free quote today!',
// };

// export default async function HomePage() {
//   const { services, reviews } = await getHomepageData();

//   return (
//     <>
//       <Hero />
//       <StatsSection />
//       <ServicesSection services={services} />
//       <PricingPreviewSection />
//       <TestimonialsSection reviews={reviews} />
//       <CTASection />
//     </>
//   );
// }


// import { Hero } from '@/components/sections/hero';
// import { StatsSection } from '@/components/sections/stats-section';
// import { ServicesSection } from '@/components/sections/services-section';
// import { PricingPreviewSection } from '@/components/sections/pricing-preview-section';
// import { TestimonialsSection } from '@/components/sections/testimonials-section';
// import { CTASection } from '@/components/sections/cta-section';

// // ─── Static fallback data ────────────────────────────────────────────────────
// // Used when the database is unavailable or empty.
// // These match the shape Prisma would return so components work identically.

// const FALLBACK_SERVICES = [
//   {
//     id: '1',
//     slug: 'carpet-steam-cleaning',
//     title: 'Carpet Steam Cleaning',
//     description:
//       'Professional hot water extraction carpet cleaning that deep cleans and sanitizes your carpets.',
//     longDescription: null,
//     icon: null,
//     price: 'From $99',
//     featured: true,
//     published: true,
//     order: 1,
//     seoTitle: null,
//     seoDescription: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '2',
//     slug: 'upholstery-cleaning',
//     title: 'Upholstery Cleaning',
//     description: 'Deep cleaning for sofas, chairs, and all types of furniture upholstery.',
//     longDescription: null,
//     icon: null,
//     price: 'From $99',
//     featured: true,
//     published: true,
//     order: 2,
//     seoTitle: null,
//     seoDescription: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '3',
//     slug: 'area-rug-cleaning',
//     title: 'Area Rug Cleaning',
//     description: 'Gentle yet effective cleaning for area rugs, Persian rugs, and delicate textiles.',
//     longDescription: null,
//     icon: null,
//     price: 'From $89',
//     featured: true,
//     published: true,
//     order: 3,
//     seoTitle: null,
//     seoDescription: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '4',
//     slug: 'pet-odor-removal',
//     title: 'Pet Odor & Stain Removal',
//     description: 'Eliminate pet stains and odors with our specialized treatment process.',
//     longDescription: null,
//     icon: null,
//     price: 'From $79',
//     featured: true,
//     published: true,
//     order: 4,
//     seoTitle: null,
//     seoDescription: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '5',
//     slug: 'stain-removal',
//     title: 'Stain Removal',
//     description: 'Professional treatment for stubborn stains including wine, coffee, and more.',
//     longDescription: null,
//     icon: null,
//     price: 'Starting at $59',
//     featured: true,
//     published: true,
//     order: 5,
//     seoTitle: null,
//     seoDescription: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ];

// const FALLBACK_REVIEWS = [
//   {
//     id: '1',
//     customerName: 'Priya Sandhu',
//     rating: 5,
//     content:
//       'My dog had been using a bedroom corner for weeks. Bellgams treated the carpet and padding and I cannot detect any odour at all now. Worth every penny.',
//     location: 'Kitsilano, Vancouver, BC',
//     featured: true,
//     published: true,
//     serviceId: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '2',
//     customerName: 'Connor MacPhail',
//     rating: 5,
//     content:
//       'Previous owners had a large dog. Bellgams did a full deep clean and the house finally smells like ours. Carpets look almost new.',
//     location: 'Burnaby Heights, Burnaby, BC',
//     featured: true,
//     published: true,
//     serviceId: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '3',
//     customerName: 'Derek Oliphant',
//     rating: 5,
//     content:
//       'Spilled red wine on my beige carpet. The stain is completely gone — not just faded, actually gone. Will be calling for regular maintenance from now on.',
//     location: 'Mount Pleasant, Vancouver, BC',
//     featured: true,
//     published: true,
//     serviceId: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '4',
//     customerName: 'Anika Johansson',
//     rating: 5,
//     content:
//       'I was nervous about having my grandmother\'s Persian rug cleaned. They explained their method carefully and the colours are brighter than I have seen in years.',
//     location: 'West End, Vancouver, BC',
//     featured: true,
//     published: true,
//     serviceId: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '5',
//     customerName: 'Mei-Ling Tso',
//     rating: 5,
//     content:
//       'Managed a commercial clean for our dental office on a Saturday morning. Finished in under two hours and the carpet was dry by opening time. Booking was easy.',
//     location: 'Richmond, BC',
//     featured: true,
//     published: true,
//     serviceId: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     id: '6',
//     customerName: 'James Kowalski',
//     rating: 5,
//     content:
//       'The traffic path through our hallway had turned dark grey with five people in the house. One session with Bellgams and it matches the rest of the room. Great value.',
//     location: 'Newton, Surrey, BC',
//     featured: true,
//     published: true,
//     serviceId: null,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ];

// // ─── Data fetching with safe fallback ────────────────────────────────────────

// async function getHomepageData() {
//   try {
//     // Dynamically import prisma so a DB connection failure doesn't
//     // crash the module — it falls through to the catch block instead.
//     const { prisma } = await import('@/lib/prisma');

//     const [services, reviews] = await Promise.all([
//       prisma.service.findMany({
//         where: { published: true, featured: true },
//         orderBy: { order: 'asc' },
//         take: 6,
//       }),
//       prisma.review.findMany({
//         where: { published: true, featured: true },
//         orderBy: { createdAt: 'desc' },
//         take: 6,
//       }),
//     ]);

//     return {
//       services: services.length > 0 ? services : FALLBACK_SERVICES,
//       reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS,
//     };
//   } catch (error) {
//     console.error('Database unavailable — rendering with static fallback data:', error);
//     return {
//       services: FALLBACK_SERVICES,
//       reviews: FALLBACK_REVIEWS,
//     };
//   }
// }

// // ─── Metadata ─────────────────────────────────────────────────────────────────

// export const metadata = {
//   title: 'Professional Carpet Cleaning Services | Bellgams Carpet Cleaning',
//   description:
//     'Expert carpet cleaning services in British Columbia. Steam cleaning, pet stain removal, upholstery cleaning. Same-day service available. Get your free quote today!',
// };

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default async function HomePage() {
//   const { services, reviews } = await getHomepageData();

//   return (
//     <>
//       <Hero />
//       <StatsSection />
//       <ServicesSection services={services as any} />
//       <PricingPreviewSection />
//       <TestimonialsSection reviews={reviews as any} />
//       <CTASection />
//     </>
//   );
// }



import { Hero } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats-section';
import { ServicesSection } from '@/components/sections/services-section';
import { PricingPreviewSection } from '@/components/sections/pricing-preview-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

// ─── Static fallback services ─────────────────────────────────────────────────

const FALLBACK_SERVICES = [
  {
    id: '1',
    slug: 'carpet-steam-cleaning',
    title: 'Carpet Steam Cleaning',
    description:
      'Professional hot water extraction carpet cleaning that deep cleans and sanitizes your carpets.',
    longDescription: null,
    icon: null,
    price: 'From $99',
    featured: true,
    published: true,
    order: 1,
    seoTitle: null,
    seoDescription: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    slug: 'upholstery-cleaning',
    title: 'Upholstery Cleaning',
    description: 'Deep cleaning for sofas, chairs, and all types of furniture upholstery.',
    longDescription: null,
    icon: null,
    price: 'From $99',
    featured: true,
    published: true,
    order: 2,
    seoTitle: null,
    seoDescription: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    slug: 'area-rug-cleaning',
    title: 'Area Rug Cleaning',
    description: 'Gentle yet effective cleaning for area rugs, Persian rugs, and delicate textiles.',
    longDescription: null,
    icon: null,
    price: 'From $89',
    featured: true,
    published: true,
    order: 3,
    seoTitle: null,
    seoDescription: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    slug: 'pet-odor-removal',
    title: 'Pet Odor & Stain Removal',
    description: 'Eliminate pet stains and odors with our specialized treatment process.',
    longDescription: null,
    icon: null,
    price: 'From $79',
    featured: true,
    published: true,
    order: 4,
    seoTitle: null,
    seoDescription: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    slug: 'stain-removal',
    title: 'Stain Removal',
    description: 'Professional treatment for stubborn stains including wine, coffee, and more.',
    longDescription: null,
    icon: null,
    price: 'Starting at $59',
    featured: true,
    published: true,
    order: 5,
    seoTitle: null,
    seoDescription: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ─── Data fetching ────────────────────────────────────────────────────────────

async function getHomepageData() {
  try {
    const { prisma } = await import('@/lib/prisma');
    const services = await prisma.service.findMany({
      where: { published: true, featured: true },
      orderBy: { order: 'asc' },
      take: 6,
    });
    return {
      services: services.length > 0 ? services : FALLBACK_SERVICES,
    };
  } catch (error) {
    console.error('Database unavailable — rendering with static fallback data:', error);
    return { services: FALLBACK_SERVICES };
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata = {
  title: 'Professional Carpet Cleaning Services | Bellgams Carpet Cleaning',
  description:
    'Expert carpet cleaning services in British Columbia and Toronto & the GTA. Steam cleaning, pet stain removal, upholstery cleaning. Same-day service available. Get your free quote today!',
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const { services } = await getHomepageData();

  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection services={services as any} />
      <PricingPreviewSection />
      {/* TestimonialsSection reads region context client-side — no DB reviews passed here */}
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
