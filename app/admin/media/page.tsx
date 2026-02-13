'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface MediaImage {
  url: string;
  alt: string;
}

export default function MediaManagementPage() {
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [heroImages, setHeroImages] = useState<MediaImage[]>([
    { url: '', alt: '' },
    { url: '', alt: '' },
    { url: '', alt: '' },
    { url: '', alt: '' },
  ]);

  useEffect(() => {
    fetchMediaSettings();
  }, []);

  const fetchMediaSettings = async () => {
    try {
      const response = await fetch('/api/admin/media');
      if (response.ok) {
        const data = await response.json();
        if (data.heroImages && data.heroImages.length > 0) {
          setHeroImages(data.heroImages);
        }
      }
    } catch (error) {
      console.error('Error fetching media settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleHeroImageChange = (index: number, field: 'url' | 'alt', value: string) => {
    const newImages = [...heroImages];
    newImages[index][field] = value;
    setHeroImages(newImages);
  };

  const addHeroImage = () => {
    setHeroImages([...heroImages, { url: '', alt: '' }]);
  };

  const removeHeroImage = (index: number) => {
    const newImages = heroImages.filter((_, i) => i !== index);
    setHeroImages(newImages);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch('/api/admin/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          heroImages: heroImages.filter(img => img.url), // Only save images with URLs
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save media settings');
      }

      alert('Media settings saved successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error saving media settings:', error);
      alert('Failed to save media settings. Please try again.');
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
      <div>
        <h1 className="text-3xl font-bold gradient-text mb-2">Site Media Management</h1>
        <p className="text-gray-400">
          Manage images across your entire website
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Hero Section Images */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Homepage Hero Carousel Images</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addHeroImage}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Image
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-gray-400">
              These images will appear in the rotating carousel on the homepage hero section.
              Recommended size: 1920x1080px
            </p>

            {heroImages.map((image, index) => (
              <div key={index} className="p-4 rounded-lg border border-white/10 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Image {index + 1}</h3>
                  {heroImages.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeHeroImage(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {/* Image Preview */}
                {image.url && (
                  <div className="relative h-48 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={image.url}
                      alt={image.alt || `Hero image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Image URL *
                  </label>
                  <input
                    type="text"
                    value={image.url}
                    onChange={(e) => handleHeroImageChange(index, 'url', e.target.value)}
                    placeholder="https://... or /images/hero/..."
                    className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Alt Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Alt Text (for SEO)
                  </label>
                  <input
                    type="text"
                    value={image.alt}
                    onChange={(e) => handleHeroImageChange(index, 'alt', e.target.value)}
                    placeholder="Professional carpet cleaning service"
                    className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mb-6 bg-blue-500/5 border-blue-500/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              💡 How to Add Images
            </h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p><strong>Option 1:</strong> Use the Upload API</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Upload your image to <code className="px-2 py-1 bg-dark-800 rounded text-primary-400">/public/images/hero/</code></li>
                <li>Use the path: <code className="px-2 py-1 bg-dark-800 rounded text-primary-400">/images/hero/your-image.jpg</code></li>
              </ol>

              <p className="mt-3"><strong>Option 2:</strong> Use External URLs</p>
              <p className="ml-4">Paste the full URL: <code className="px-2 py-1 bg-dark-800 rounded text-primary-400">https://example.com/image.jpg</code></p>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={saving}
            className="min-w-[200px]"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Save All Changes
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
