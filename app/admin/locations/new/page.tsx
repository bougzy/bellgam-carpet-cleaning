import { LocationForm } from '@/components/admin/location-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NewLocationPage() {
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
            Add New Location
          </h1>
          <p className="text-gray-400">
            Add a new service area to your website
          </p>
        </div>
      </div>

      <LocationForm />
    </div>
  );
}
