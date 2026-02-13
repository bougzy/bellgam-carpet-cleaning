import { prisma } from '@/lib/prisma';
import { Hero } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats-section';
import { ServicesSection } from '@/components/sections/services-section';
import { PricingPreviewSection } from '@/components/sections/pricing-preview-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

async function getHomepageData() {
  const [services, reviews] = await Promise.all([
    prisma.service.findMany({
      where: { published: true, featured: true },
      orderBy: { order: 'asc' },
      take: 6,
    }),
    prisma.review.findMany({
      where: { published: true, featured: true },
      orderBy: { createdAt: 'desc' },
      take: 6,
    }),
  ]);

  return { services, reviews };
}

export const metadata = {
  title: 'Professional Carpet Cleaning Services | Bellgams Carpet Cleaning',
  description: 'Expert carpet cleaning services in British Columbia. Steam cleaning, pet stain removal, upholstery cleaning. Same-day service available. Get your free quote today!',
};

export default async function HomePage() {
  const { services, reviews } = await getHomepageData();

  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection services={services} />
      <PricingPreviewSection />
      <TestimonialsSection reviews={reviews} />
      <CTASection />
    </>
  );
}
