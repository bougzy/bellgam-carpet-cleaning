'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { slugify } from '@/lib/utils';
import type { Service } from '@prisma/client';

const serviceSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  longDescription: z.string().min(1, 'Long description is required'),
  price: z.string().optional(),
  icon: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  order: z.number().min(0).default(0),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

type ServiceFormData = z.infer<typeof serviceSchema>;

interface ServiceFormProps {
  service?: Service;
  isEdit?: boolean;
}

export function ServiceForm({ service, isEdit = false }: ServiceFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: service
      ? {
          title: service.title,
          slug: service.slug,
          description: service.description,
          longDescription: service.longDescription,
          price: service.price || '',
          icon: service.icon || '',
          featured: service.featured,
          published: service.published,
          order: service.order,
          seoTitle: service.seoTitle || '',
          seoDescription: service.seoDescription || '',
        }
      : {
          featured: false,
          published: true,
          order: 0,
        },
  });

  const title = watch('title');

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (!isEdit || !service) {
      setValue('slug', slugify(newTitle));
    }
  };

  const onSubmit = async (data: ServiceFormData) => {
    setIsSubmitting(true);

    try {
      const url = isEdit && service
        ? `/api/admin/services/${service.id}`
        : '/api/admin/services';

      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/admin/services');
        router.refresh();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save service');
      }
    } catch (error) {
      alert('Error saving service');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Service Title"
            {...register('title')}
            onChange={handleTitleChange}
            error={errors.title?.message}
            placeholder="e.g., Carpet Steam Cleaning"
            required
          />

          <Input
            label="URL Slug"
            {...register('slug')}
            error={errors.slug?.message}
            placeholder="carpet-steam-cleaning"
            helperText="This will be used in the URL"
            required
          />

          <Textarea
            label="Short Description"
            {...register('description')}
            error={errors.description?.message}
            placeholder="Brief description for cards and listings"
            required
            rows={3}
          />

          <Textarea
            label="Long Description"
            {...register('longDescription')}
            error={errors.longDescription?.message}
            placeholder="Full description for the service detail page"
            required
            rows={8}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Price"
              {...register('price')}
              error={errors.price?.message}
              placeholder="From $99"
            />

            <Input
              label="Display Order"
              type="number"
              {...register('order', { valueAsNumber: true })}
              error={errors.order?.message}
              placeholder="0"
              helperText="Lower numbers appear first"
            />
          </div>

          <Input
            label="Icon Path"
            {...register('icon')}
            error={errors.icon?.message}
            placeholder="/images/services/carpet-cleaning.svg"
            helperText="Path to icon image"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="SEO Title"
            {...register('seoTitle')}
            error={errors.seoTitle?.message}
            placeholder="Professional Carpet Cleaning | Bellgam"
            helperText="Recommended: 50-60 characters"
          />

          <Textarea
            label="SEO Description"
            {...register('seoDescription')}
            error={errors.seoDescription?.message}
            placeholder="Expert carpet cleaning services..."
            helperText="Recommended: 150-160 characters"
            rows={3}
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
          {isEdit ? 'Update Service' : 'Create Service'}
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
