import { prisma } from '@/lib/prisma';
import { Card, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { Star, Quote } from 'lucide-react';

async function getReviews() {
  return await prisma.review.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    include: { service: true },
  });
}

export const metadata = {
  title: 'Customer Reviews & Testimonials | Bellgam Carpet Cleaning',
  description: 'Read what our customers say about Bellgam Carpet Cleaning. 500+ five-star reviews from satisfied customers in British Columbia.',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-300">Customer Reviews</span>
          </div>
          <h1 className="heading-1 mb-6">
            What Our <span className="gradient-text">Customers Say</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(avgRating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{avgRating.toFixed(1)}</span>
          </div>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            Based on {reviews.length} verified reviews from our happy customers
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
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
                      {review.service && (
                        <p className="text-xs text-primary-400 mt-1">
                          {review.service.title}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
