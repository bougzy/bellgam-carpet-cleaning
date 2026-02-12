import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { LocationActions } from '@/components/admin/location-actions';

async function getLocations() {
  return await prisma.location.findMany({
    orderBy: { city: 'asc' },
  });
}

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Locations</h1>
          <p className="text-gray-400">
            Manage your service area locations
          </p>
        </div>
        <Link href="/admin/locations/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Location
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Locations ({locations.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {locations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="p-6 rounded-lg glass-card border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {location.city}, {location.province}
                      </h3>
                      <p className="text-sm text-gray-500">/{location.slug}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link href={`/admin/locations/${location.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <LocationActions locationId={location.id} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    {location.featured && (
                      <span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                    {location.published ? (
                      <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400 border border-green-500/30 flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        Published
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded bg-gray-500/20 text-gray-400 border border-gray-500/30 flex items-center">
                        <EyeOff className="w-3 h-3 mr-1" />
                        Draft
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 line-clamp-3">
                    {location.content}
                  </p>

                  {location.phoneNumber && (
                    <p className="text-sm text-gray-500 mt-2">
                      📞 {location.phoneNumber}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No locations found</p>
              <Link href="/admin/locations/new">
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Location
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
