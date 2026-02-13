import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import Image from 'next/image';

// Professional carpet and upholstery cleaning images
const galleryImages = [
  {
    id: 1,
    title: 'Living Room Carpet Transformation',
    category: 'Residential',
    before: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
    description: 'Deep steam cleaning removed years of dirt and stains',
  },
  {
    id: 2,
    title: 'Pet Stain Removal Success',
    category: 'Pet Treatment',
    before: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
    description: 'Complete removal of pet stains and odors from carpets',
  },
  {
    id: 3,
    title: 'Office Carpet Restoration',
    category: 'Commercial',
    before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    description: 'High-traffic commercial carpet looking brand new',
  },
  {
    id: 4,
    title: 'Upholstery Deep Clean',
    category: 'Upholstery',
    before: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    description: 'Sofa and upholstery restored to like-new condition',
  },
  {
    id: 5,
    title: 'Bedroom Carpet Refresh',
    category: 'Residential',
    before: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
    description: 'Fresh and clean bedroom carpets throughout',
  },
  {
    id: 6,
    title: 'Area Rug Deep Cleaning',
    category: 'Rugs',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
    description: 'Delicate area rug cleaning with expert care',
  },
];

export const metadata = {
  title: 'Gallery - Before & After Photos | Bellgams Carpet Cleaning',
  description: 'See our professional carpet cleaning results in British Columbia. Before and after photos showing our expert steam cleaning, pet stain removal, and upholstery cleaning services.',
};

export default function GalleryPage() {
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image) => (
              <StaggerItem key={image.id}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-0.5 bg-white/5">
                      {/* Before */}
                      <div className="relative aspect-[4/3] group">
                        <Image
                          src={image.before}
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
                          src={image.after}
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

                    {/* Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{image.title}</h3>
                        <span className="px-3 py-1 text-xs rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30">
                          {image.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{image.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
          <Button variant="primary" size="lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Get Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
