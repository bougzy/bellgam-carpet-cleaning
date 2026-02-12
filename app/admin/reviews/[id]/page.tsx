import { prisma } from '@/lib/prisma';
import { ReviewForm } from '@/components/admin/review-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

async function getReview(id: string) {
  const review = await prisma.review.findUnique({
    where: { id },
  });

  if (!review) {
    notFound();
  }

  return review;
}

async function getServices() {
  return await prisma.service.findMany({
    orderBy: { title: 'asc' },
  });
}

export default async function EditReviewPage({
  params,
}: {
  params: { id: string };
}) {
  const [review, services] = await Promise.all([
    getReview(params.id),
    getServices(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/admin/reviews">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Edit Review
          </h1>
          <p className="text-gray-400">{review.customerName}</p>
        </div>
      </div>

      <ReviewForm review={review} services={services} isEdit />
    </div>
  );
}
