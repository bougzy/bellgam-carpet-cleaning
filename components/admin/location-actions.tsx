'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

export function LocationActions({ locationId }: { locationId: string }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this location?')) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(`/api/admin/locations/${locationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert('Failed to delete location');
      }
    } catch (error) {
      alert('Error deleting location');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
}
