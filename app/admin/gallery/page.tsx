import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { GalleryActions } from '@/components/admin/gallery-actions';
import Image from 'next/image';

async function getGalleryImages() {
  return await prisma.galleryImage.findMany({
    orderBy: { order: 'asc' },
  });
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Gallery</h1>
          <p className="text-gray-400">
            Manage before/after images and project photos
          </p>
        </div>
        <Link href="/admin/gallery/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Upload Image
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Images ({images.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="rounded-lg glass-card border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                >
                  {/* Image Preview */}
                  <div className="relative h-48 bg-dark-800">
                    {image.imageUrl ? (
                      <Image
                        src={image.imageUrl}
                        alt={image.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <ImageIcon className="w-12 h-12 text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    {image.description && (
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                        {image.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {image.category && (
                          <span className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            {image.category}
                          </span>
                        )}
                        {image.beforeImage && image.afterImage && (
                          <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400 border border-green-500/30">
                            Before/After
                          </span>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/gallery/${image.id}`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <GalleryActions imageId={image.id} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No images found</p>
              <Link href="/admin/gallery/new">
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Your First Image
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
