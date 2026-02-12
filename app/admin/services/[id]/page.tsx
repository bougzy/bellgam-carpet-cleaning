import { prisma } from '@/lib/prisma';
import { ServiceForm } from '@/components/admin/service-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';

async function getService(id: string) {
  const service = await prisma.service.findUnique({
    where: { id },
  });

  if (!service) {
    notFound();
  }

  return service;
}

export default async function EditServicePage({
  params,
}: {
  params: { id: string };
}) {
  const service = await getService(params.id);

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
            Edit Service
          </h1>
          <p className="text-gray-400">{service.title}</p>
        </div>
      </div>

      <ServiceForm service={service} isEdit />
    </div>
  );
}
