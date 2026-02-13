'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EditGalleryImagePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    beforeImage: '',
    afterImage: '',
    order: 0,
  });

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const response = await fetch(`/api/admin/gallery/${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch image');
      const data = await response.json();
      setFormData({
        title: data.title || '',
        description: data.description || '',
        imageUrl: data.imageUrl || '',
        category: data.category || '',
        beforeImage: data.beforeImage || '',
        afterImage: data.afterImage || '',
        order: data.order || 0,
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      alert('Failed to load image');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/gallery/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update image');
      }

      router.push('/admin/gallery');
      router.refresh();
    } catch (error) {
      console.error('Error updating image:', error);
      alert('Failed to update image. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/admin/gallery">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Edit Gallery Image</h1>
          <p className="text-gray-400">Update image details</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Image Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Preview */}
            {formData.imageUrl && (
              <div className="relative h-64 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={formData.imageUrl}
                  alt={formData.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Main Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image URL *
              </label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="/images/gallery/..."
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select category...</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="before-after">Before & After</option>
                <option value="carpet">Carpet Cleaning</option>
                <option value="upholstery">Upholstery Cleaning</option>
                <option value="rug">Area Rug Cleaning</option>
              </select>
            </div>

            {/* Before/After Images */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold">Before/After (Optional)</h3>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Before Image URL
                </label>
                <input
                  type="text"
                  name="beforeImage"
                  value={formData.beforeImage}
                  onChange={handleChange}
                  placeholder="/images/gallery/before-..."
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  After Image URL
                </label>
                <input
                  type="text"
                  name="afterImage"
                  value={formData.afterImage}
                  onChange={handleChange}
                  placeholder="/images/gallery/after-..."
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Order */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Display Order
              </label>
              <input
                type="number"
                name="order"
                value={formData.order}
                onChange={handleChange}
                min={0}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Lower numbers appear first
              </p>
            </div>

            {/* Submit */}
            <div className="flex justify-end space-x-4 pt-4">
              <Link href="/admin/gallery">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="primary" disabled={saving}>
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Update Image
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
