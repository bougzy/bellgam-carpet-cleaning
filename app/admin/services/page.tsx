import { prisma } from '@/lib/prisma';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { ServiceActions } from '@/components/admin/service-actions';

async function getServices() {
  return await prisma.service.findMany({
    orderBy: { order: 'asc' },
  });
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Services</h1>
          <p className="text-gray-400">
            Manage your carpet cleaning services
          </p>
        </div>
        <Link href="/admin/services/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Service
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services ({services.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {services.length > 0 ? (
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="p-6 rounded-lg glass-card border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        {service.featured && (
                          <span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            Featured
                          </span>
                        )}
                        {service.published ? (
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
                      <p className="text-gray-400 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        {service.price && (
                          <span>Price: {service.price}</span>
                        )}
                        <span>Order: {service.order}</span>
                        <span>Slug: {service.slug}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Link href={`/admin/services/${service.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <ServiceActions serviceId={service.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No services found</p>
              <Link href="/admin/services/new">
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Service
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
