import { ServiceForm } from '@/components/admin/service-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NewServicePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/admin/services">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            Add New Service
          </h1>
          <p className="text-gray-400">
            Create a new carpet cleaning service
          </p>
        </div>
      </div>

      <ServiceForm />
    </div>
  );
}
