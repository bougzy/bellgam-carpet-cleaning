import { Card, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { Star, Quote } from 'lucide-react';
import type { Review } from '@prisma/client';

interface TestimonialsSectionProps {
  reviews: Review[];
}

export function TestimonialsSection({ reviews }: TestimonialsSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-300">Customer Reviews</span>
          </div>
          <h2 className="heading-2 mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="body-normal text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <StaggerItem key={review.id}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary-400/30 mb-3" />
                  <p className="text-gray-300 mb-4">{review.content}</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{review.customerName}</p>
                    {review.location && (
                      <p className="text-sm text-gray-500">{review.location}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
