import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { ArrowRight, Sparkles } from 'lucide-react';

async function getServices() {
  return await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });
}

export const metadata = {
  title: 'Our Services | Professional Carpet Cleaning | Bellgams',
  description: 'Explore our carpet and upholstery cleaning services including steam cleaning, pet stain removal, and more. Professional service guaranteed.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Our Services</span>
          </div>
          <h1 className="heading-1 mb-6">
            Professional <span className="gradient-text">Cleaning Services</span>
          </h1>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            From carpet steam cleaning to specialized stain removal, we offer
            comprehensive cleaning solutions for your home or business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <Link href={`/services/${service.slug}`}>
                  <Card hover className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-primary-400" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      {service.price && (
                        <p className="text-primary-400 font-semibold mb-4">
                          {service.price}
                        </p>
                      )}
                      <div className="flex items-center text-primary-400 text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
