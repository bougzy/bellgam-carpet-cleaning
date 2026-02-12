import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Edit, Trash2, Star, Eye, EyeOff } from 'lucide-react';
import { ReviewActions } from '@/components/admin/review-actions';

async function getReviews() {
  return await prisma.review.findMany({
    include: { service: true },
    orderBy: { createdAt: 'desc' },
  });
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Reviews</h1>
          <p className="text-gray-400">
            Manage customer reviews and testimonials
          </p>
        </div>
        <Link href="/admin/reviews/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Review
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Reviews ({reviews.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-6 rounded-lg glass-card border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold">{review.customerName}</h3>
                        <div className="flex items-center">
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
                      </div>
                      {review.location && (
                        <p className="text-sm text-gray-500 mb-2">📍 {review.location}</p>
                      )}
                      {review.service && (
                        <p className="text-sm text-blue-400 mb-2">
                          Service: {review.service.title}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Link href={`/admin/reviews/${review.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <ReviewActions reviewId={review.id} />
                    </div>
                  </div>

                  <p className="text-gray-300 mb-3">{review.content}</p>

                  <div className="flex items-center space-x-2">
                    {review.featured && (
                      <span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                    {review.published ? (
                      <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400 border border-green-500/30 flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded bg-gray-500/20 text-gray-400 border border-gray-500/30 flex items-center">
                        <EyeOff className="w-3 h-3 mr-1" />
                        Draft
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No reviews found</p>
              <Link href="/admin/reviews/new">
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Review
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
