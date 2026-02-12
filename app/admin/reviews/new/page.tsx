import { prisma } from '@/lib/prisma';
import { ReviewForm } from '@/components/admin/review-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

async function getServices() {
  return await prisma.service.findMany({
    orderBy: { title: 'asc' },
  });
}

export default async function NewReviewPage() {
  const services = await getServices();

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
            Add New Review
          </h1>
          <p className="text-gray-400">
            Add a customer review or testimonial
          </p>
        </div>
      </div>

      <ReviewForm services={services} />
    </div>
  );
}
