'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Save, Plus, Trash2, Upload, RefreshCw } from 'lucide-react';
import Image from 'next/image';

interface MediaImage {
  url: string;
  alt: string;
}

export default function MediaManagementPage() {
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
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

  const handleFileUpload = async (index: number, file: File) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      return;
    }

    setUploadingIndex(index);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'hero');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();

      // Update the image URL with the uploaded file path
      handleHeroImageChange(index, 'url', data.url);

      // Auto-generate alt text from filename if not set
      if (!heroImages[index].alt) {
        const altText = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        handleHeroImageChange(index, 'alt', altText);
      }

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadingIndex(null);
    }
  };

  const triggerFileInput = (index: number) => {
    fileInputRefs.current[index]?.click();
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
              <div key={index} className="p-6 rounded-lg border-2 border-primary-500/20 bg-dark-800/50 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <span className="text-primary-400 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-lg">Hero Image {index + 1}</h3>
                  </div>
                  {heroImages.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeHeroImage(index)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
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
                    {/* Replace Image Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        onClick={() => triggerFileInput(index)}
                        disabled={uploadingIndex === index}
                      >
                        {uploadingIndex === index ? (
                          <>
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Replace Image
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Hidden File Input */}
                <input
                  ref={(el) => { fileInputRefs.current[index] = el; }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(index, file);
                  }}
                  className="hidden"
                />

                {/* Upload Button (shown when no image) */}
                {!image.url && (
                  <div className="border-2 border-dashed border-primary-500/30 rounded-lg p-8 text-center bg-primary-500/5 hover:bg-primary-500/10 transition-colors">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-primary-400" />
                    <h4 className="text-lg font-semibold mb-2">No Image Yet</h4>
                    <p className="text-sm text-gray-400 mb-4">Click below to upload an image or paste a URL</p>
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      onClick={() => triggerFileInput(index)}
                      disabled={uploadingIndex === index}
                      className="w-full max-w-xs"
                    >
                      {uploadingIndex === index ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 mr-2" />
                          Choose Image File
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Image URL *
                    <span className="text-gray-500 text-xs ml-2">(or use upload buttons above/below)</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={image.url}
                      onChange={(e) => handleHeroImageChange(index, 'url', e.target.value)}
                      placeholder="https://example.com/image.jpg or /images/hero/image.jpg"
                      className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => triggerFileInput(index)}
                      disabled={uploadingIndex === index}
                      className="px-6"
                    >
                      {uploadingIndex === index ? (
                        <RefreshCw className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Upload className="w-5 h-5 mr-2" />
                          Browse
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Click "Browse" to upload from your computer, or paste an image URL above
                  </p>
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
              <p><strong>Option 1:</strong> Upload Files Directly (Recommended)</p>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>Click "Upload Image" button on any image slot</li>
                <li>Select your image file (JPG, PNG, WebP, etc.)</li>
                <li>Image will be automatically uploaded and saved to <code className="px-2 py-1 bg-dark-800 rounded text-primary-400">/images/hero/</code></li>
                <li>Maximum file size: 5MB</li>
              </ol>

              <p className="mt-3"><strong>Option 2:</strong> Use External URLs</p>
              <p className="ml-4">Paste the full URL in the Image URL field: <code className="px-2 py-1 bg-dark-800 rounded text-primary-400">https://example.com/image.jpg</code></p>

              <p className="mt-3"><strong>To Replace an Image:</strong></p>
              <p className="ml-4">Hover over the image preview and click "Replace Image", or click the upload button next to the URL field</p>
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
