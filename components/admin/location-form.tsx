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
import type { Location } from '@prisma/client';

const locationSchema = z.object({
  city: z.string().min(1, 'City name is required'),
  province: z.string().min(1, 'Province is required'),
  slug: z.string().min(1, 'Slug is required'),
  content: z.string().min(1, 'Content is required'),
  phoneNumber: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

type LocationFormData = z.infer<typeof locationSchema>;

interface LocationFormProps {
  location?: Location;
  isEdit?: boolean;
}

export function LocationForm({ location, isEdit = false }: LocationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
    defaultValues: location
      ? {
          city: location.city,
          province: location.province,
          slug: location.slug,
          content: location.content,
          phoneNumber: location.phoneNumber || '',
          featured: location.featured,
          published: location.published,
          seoTitle: location.seoTitle || '',
          seoDescription: location.seoDescription || '',
        }
      : {
          featured: false,
          published: true,
        },
  });

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCity = e.target.value;
    if (!isEdit || !location) {
      setValue('slug', slugify(`${newCity}-carpet-cleaning`));
    }
  };

  const onSubmit = async (data: LocationFormData) => {
    setIsSubmitting(true);

    try {
      const url = isEdit && location
        ? `/api/admin/locations/${location.id}`
        : '/api/admin/locations';

      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/admin/locations');
        router.refresh();
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to save location');
      }
    } catch (error) {
      alert('Error saving location');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Location Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="City Name"
              {...register('city')}
              onChange={handleCityChange}
              error={errors.city?.message}
              placeholder="Vancouver"
              required
            />

            <Input
              label="Province/State"
              {...register('province')}
              error={errors.province?.message}
              placeholder="BC"
              required
            />
          </div>

          <Input
            label="URL Slug"
            {...register('slug')}
            error={errors.slug?.message}
            placeholder="vancouver-carpet-cleaning"
            helperText="This will be used in the URL"
            required
          />

          <Input
            label="Local Phone Number"
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
            placeholder="+16049021805"
            helperText="Optional: Location-specific phone number"
          />

          <Textarea
            label="Location Content"
            {...register('content')}
            error={errors.content?.message}
            placeholder="Serving [City] and surrounding areas..."
            required
            rows={10}
            helperText="Full content about this service area"
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
            placeholder="Carpet Cleaning Vancouver BC | Professional Services"
            helperText="Recommended: 50-60 characters"
          />

          <Textarea
            label="SEO Description"
            {...register('seoDescription')}
            error={errors.seoDescription?.message}
            placeholder="Professional carpet cleaning in Vancouver, BC..."
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
          {isEdit ? 'Update Location' : 'Create Location'}
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
