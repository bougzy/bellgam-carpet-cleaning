'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    coverImage: '',
    published: false,
    seoTitle: '',
    seoDescription: '',
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      setFormData({
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        category: data.category || '',
        tags: data.tags || '',
        coverImage: data.coverImage || '',
        published: data.published || false,
        seoTitle: data.seoTitle || '',
        seoDescription: data.seoDescription || '',
      });
    } catch (error) {
      console.error('Error fetching post:', error);
      alert('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    // Auto-generate slug from title
    if (e.target.name === 'title') {
      const slug = e.target.value
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/blog/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          publishedAt: formData.published ? new Date() : null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      router.push('/admin/blog');
      router.refresh();
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
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
        <Link href="/admin/blog">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Edit Blog Post</h1>
          <p className="text-gray-400">Update blog article</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Slug * <span className="text-gray-500">(auto-generated from title)</span>
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={15}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Supports Markdown formatting</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <option value="Cleaning Tips">Cleaning Tips</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Pet Care">Pet Care</option>
                  <option value="Stain Removal">Stain Removal</option>
                  <option value="Industry News">Industry News</option>
                  <option value="DIY Guides">DIY Guides</option>
                </select>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cover Image URL
                </label>
                <input
                  type="text"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  placeholder="/images/blog/..."
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tags <span className="text-gray-500">(comma-separated)</span>
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="carpet care, cleaning tips, maintenance"
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* SEO Fields */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-semibold">SEO Settings</h3>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  maxLength={60}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-sm text-gray-500 mt-1">{formData.seoTitle.length}/60 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Description
                </label>
                <textarea
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleChange}
                  rows={3}
                  maxLength={160}
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-sm text-gray-500 mt-1">{formData.seoDescription.length}/160 characters</p>
              </div>
            </div>

            {/* Published */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-4 h-4 rounded border-white/10 bg-dark-800 text-primary-500 focus:ring-2 focus:ring-primary-500"
              />
              <label className="text-sm font-medium text-gray-300">
                Published
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-end space-x-4 pt-4">
              <Link href="/admin/blog">
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
                    Update Post
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
