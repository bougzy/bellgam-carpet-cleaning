import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { MapPin, ArrowRight } from 'lucide-react';

async function getLocations() {
  return await prisma.location.findMany({
    where: { published: true },
    orderBy: { city: 'asc' },
  });
}

export const metadata = {
  title: 'Service Areas | Carpet Cleaning Across Canada | Bellgam',
  description: 'Professional carpet cleaning services in Vancouver, Toronto, Calgary, and more. Find your local Bellgam carpet cleaning service.',
};

export default async function LocationsPage() {
  const locations = await getLocations();

  // Group by province
  const locationsByProvince = locations.reduce((acc, location) => {
    if (!acc[location.province]) {
      acc[location.province] = [];
    }
    acc[location.province].push(location);
    return acc;
  }, {} as Record<string, typeof locations>);

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <MapPin className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Service Areas</span>
          </div>
          <h1 className="heading-1 mb-6">
            Serving <span className="gradient-text">Communities</span> Across Canada
          </h1>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            Professional carpet cleaning services in major cities in British Columbia.
            Find your local Bellgam service area below.
          </p>
        </div>
      </section>

      {/* Locations by Province */}
      <section className="section-padding">
        <div className="container-custom space-y-12">
          {Object.entries(locationsByProvince).map(([province, locs]) => (
            <div key={province}>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">{province}</span>
              </h2>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locs.map((location) => (
                  <StaggerItem key={location.id}>
                    <Link href={`/locations/${location.slug}`}>
                      <Card hover className="h-full">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-green-400" />
                          </div>
                          <CardTitle>{location.city}, {location.province}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 mb-4 line-clamp-3">
                            {location.content}
                          </p>
                          <div className="flex items-center text-primary-400 text-sm font-medium">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
