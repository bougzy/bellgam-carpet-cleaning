'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { Review, Service } from '@prisma/client';

const reviewSchema = z.object({
  customerName: z.string().min(1, 'Customer name is required'),
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
  content: z.string().min(1, 'Review content is required'),
  serviceId: z.string().optional(),
  location: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  review?: Review;
  services: Service[];
  isEdit?: boolean;
}

export function ReviewForm({ review, services, isEdit = false }: ReviewFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: review
      ? {
          customerName: review.customerName,
          rating: review.rating,
          content: review.content,
          serviceId: review.serviceId || '',
          location: review.location || '',
          featured: review.featured,
          published: review.published,
        }
      : {
          rating: 5,
          featured: false,
          published: true,
        },
  });

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);

    try {
      const url = isEdit && review
        ? `/api/admin/reviews/${review.id}`
        : '/api/admin/reviews';

      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/admin/reviews');
        router.refresh();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save review');
      }
    } catch (error) {
      alert('Error saving review');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Review Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Customer Name"
            {...register('customerName')}
            error={errors.customerName?.message}
            placeholder="John Doe"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Rating"
              {...register('rating', { valueAsNumber: true })}
              error={errors.rating?.message}
              options={[
                { value: '5', label: '⭐⭐⭐⭐⭐ (5 stars)' },
                { value: '4', label: '⭐⭐⭐⭐ (4 stars)' },
                { value: '3', label: '⭐⭐⭐ (3 stars)' },
                { value: '2', label: '⭐⭐ (2 stars)' },
                { value: '1', label: '⭐ (1 star)' },
              ]}
              required
            />

            <Input
              label="Location"
              {...register('location')}
              error={errors.location?.message}
              placeholder="Vancouver, BC"
            />
          </div>

          <Select
            label="Related Service (Optional)"
            {...register('serviceId')}
            error={errors.serviceId?.message}
            options={services.map(service => ({
              value: service.id,
              label: service.title,
            }))}
          />

          <Textarea
            label="Review Content"
            {...register('content')}
            error={errors.content?.message}
            placeholder="Write the customer's review..."
            required
            rows={6}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Publishing Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                {...register('published')}
                className="w-4 h-4 rounded glass-input"
              />
              <span className="text-sm">Published (visible on website)</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                {...register('featured')}
                className="w-4 h-4 rounded glass-input"
              />
              <span className="text-sm">Featured (show on homepage)</span>
            </label>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-4">
        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isEdit ? 'Update Review' : 'Create Review'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
