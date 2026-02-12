import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Service } from '@prisma/client';

interface ServicesSectionProps {
  services: Service[];
}

// Map service slugs to professional images
const serviceImages: Record<string, string> = {
  'carpet-steam-cleaning': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&q=80',
  'pet-stain-odor-removal': 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=600&h=400&fit=crop&q=80',
  'upholstery-cleaning': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&q=80',
  'area-rug-cleaning': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop&q=80',
  'tile-grout-cleaning': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&q=80',
  'commercial-cleaning': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&q=80',
};

const defaultServiceImage = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&q=80';

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section-padding bg-gradient-bg-1">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Our Services</span>
          </div>
          <h2 className="heading-2 mb-4">
            Professional <span className="gradient-text">Cleaning Solutions</span>
          </h2>
          <p className="body-normal text-gray-400 max-w-2xl mx-auto">
            From carpet steam cleaning to pet stain removal, we offer comprehensive
            cleaning services for your home or business
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const imageUrl = serviceImages[service.slug] || defaultServiceImage;

            return (
              <StaggerItem key={service.id}>
                <Link href={`/services/${service.slug}`}>
                  <Card hover className="h-full overflow-hidden">
                    {/* Service Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />
                      {/* Icon overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/30 backdrop-blur-sm flex items-center justify-center border border-primary-500/50">
                          <Sparkles className="w-6 h-6 text-primary-400" />
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      {service.price && (
                        <p className="text-primary-400 font-semibold mb-4">{service.price}</p>
                      )}
                      <div className="flex items-center text-primary-400 text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="text-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
