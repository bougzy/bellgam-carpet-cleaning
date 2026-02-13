import { prisma } from '@/lib/prisma';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import Link from 'next/link';

async function getGalleryImages() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { order: 'asc' },
  });

  // If no images in database, return sample data
  if (images.length === 0) {
    return [
      {
        id: 'sample-1',
        title: 'Living Room Carpet Transformation',
        category: 'Residential',
        description: 'Deep steam cleaning removed years of dirt and stains',
        beforeImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
        order: 1,
      },
      {
        id: 'sample-2',
        title: 'Pet Stain Removal Success',
        category: 'Pet Treatment',
        description: 'Complete removal of pet stains and odors from carpets',
        beforeImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
        imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
        order: 2,
      },
      {
        id: 'sample-3',
        title: 'Upholstery Deep Clean',
        category: 'Upholstery',
        description: 'Sofa and upholstery restored to like-new condition',
        beforeImage: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        order: 3,
      },
    ];
  }

  return images;
}

export const metadata = {
  title: 'Gallery - Before & After Photos | Bellgams Carpet Cleaning',
  description: 'See our professional carpet cleaning results in British Columbia. Before and after photos showing our expert steam cleaning, pet stain removal, and upholstery cleaning services.',
};

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();
  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a free quote for carpet cleaning.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <ImageIcon className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Our Work</span>
          </div>
          <h1 className="heading-1 mb-6">
            See Our <span className="gradient-text">Amazing Results</span>
          </h1>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            Real transformations from real customers. Browse our before and after gallery
            to see the quality of our professional carpet cleaning services.
          </p>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {galleryImages.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image) => (
                <StaggerItem key={image.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      {/* Before/After Images */}
                      {image.beforeImage && image.afterImage ? (
                        <div className="grid grid-cols-2 gap-0.5 bg-white/5">
                          {/* Before */}
                          <div className="relative aspect-[4/3] group">
                            <Image
                              src={image.beforeImage}
                              alt={`Before - ${image.title}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="bg-red-500/90 px-4 py-2 rounded-lg font-bold text-white">
                                BEFORE
                              </div>
                            </div>
                          </div>
                          {/* After */}
                          <div className="relative aspect-[4/3] group">
                            <Image
                              src={image.afterImage}
                              alt={`After - ${image.title}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-green-500/90 px-4 py-2 rounded-lg font-bold text-white">
                                AFTER
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={image.imageUrl}
                            alt={image.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}

                      {/* Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold">{image.title}</h3>
                          {image.category && (
                            <span className="px-3 py-1 text-xs rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30">
                              {image.category}
                            </span>
                          )}
                        </div>
                        {image.description && (
                          <p className="text-gray-400 text-sm">{image.description}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No gallery images yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-bg-2">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Ready for <span className="gradient-text">Similar Results</span>?
          </h2>
          <p className="body-large text-gray-400 mb-8 max-w-2xl mx-auto">
            Let us transform your carpets, upholstery, or rugs. Get your free quote today!
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
