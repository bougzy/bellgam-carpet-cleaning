import { prisma } from '@/lib/prisma';
import { LocationForm } from '@/components/admin/location-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

async function getLocation(id: string) {
  const location = await prisma.location.findUnique({
    where: { id },
  });

  if (!location) {
    notFound();
  }

  return location;
}

export default async function EditLocationPage({
  params,
}: {
  params: { id: string };
}) {
  const location = await getLocation(params.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/admin/locations">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Edit Location
          </h1>
          <p className="text-gray-400">{location.city}, {location.province}</p>
        </div>
      </div>

      <LocationForm location={location} isEdit />
    </div>
  );
}
