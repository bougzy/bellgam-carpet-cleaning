import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { generateLocationWhatsAppLink } from '@/lib/whatsapp';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

async function getLocation(slug: string) {
  const location = await prisma.location.findUnique({
    where: { slug, published: true },
  });

  if (!location) {
    notFound();
  }

  return location;
}

async function getServices() {
  return await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
    take: 6,
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const location = await getLocation(params.slug);

  return {
    title: location.seoTitle || `Carpet Cleaning ${location.city}, ${location.province} | Bellgam`,
    description: location.seoDescription || `Professional carpet cleaning in ${location.city}. Expert service, eco-friendly solutions, satisfaction guaranteed.`,
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [location, services] = await Promise.all([
    getLocation(params.slug),
    getServices(),
  ]);

  const whatsappLink = generateLocationWhatsAppLink(location.city);
  const phoneNumber = location.phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Service Area</span>
              </div>
              <h1 className="heading-1 mb-6">
                Carpet Cleaning in <span className="gradient-text">{location.city}</span>
              </h1>
              <p className="body-large text-gray-300 mb-8">
                Professional carpet cleaning services serving {location.city}, {location.province} and surrounding areas
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href={`tel:${phoneNumber}`}>
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Location Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  About Our {location.city} Service
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 whitespace-pre-line">
                    {location.content}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Available */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                Services Available in {location.city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card key={service.id}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      {service.price && (
                        <p className="text-primary-400 font-semibold">{service.price}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-primary-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Book in {location.city}?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get your free quote today for professional carpet cleaning in {location.city}
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    Get Free Quote Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
