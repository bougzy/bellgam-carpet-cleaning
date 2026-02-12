import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/fade-in';
import { generateServiceWhatsAppLink } from '@/lib/whatsapp';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import type { Metadata } from 'next';

async function getService(slug: string) {
  const service = await prisma.service.findUnique({
    where: { slug, published: true },
    include: {
      reviews: {
        where: { published: true },
        take: 3,
      },
    },
  });

  if (!service) {
    notFound();
  }

  return service;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getService(params.slug);

  return {
    title: service.seoTitle || `${service.title} | Bellgam Carpet Cleaning`,
    description: service.seoDescription || service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getService(params.slug);
  const whatsappLink = generateServiceWhatsAppLink(service.title);

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="heading-1 mb-6">{service.title}</h1>
              <p className="body-large text-gray-300 mb-8">
                {service.description}
              </p>
              {service.price && (
                <div className="inline-block px-6 py-3 rounded-full glass-card mb-8">
                  <p className="text-2xl font-bold gradient-text">{service.price}</p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">About This Service</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 whitespace-pre-line">
                    {service.longDescription}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            {service.reviews.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {service.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{review.content}</p>
                        <p className="font-semibold text-sm">{review.customerName}</p>
                        {review.location && (
                          <p className="text-xs text-gray-500">{review.location}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-primary-500/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Book {service.title}?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get your free quote today and experience professional cleaning
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
