'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { generateContactWhatsAppLink } from '@/lib/whatsapp';
import { CheckCircle } from 'lucide-react';
import type { Service, Location } from '@prisma/client';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  services: Service[];
  locations: Location[];
}

export function ContactForm({ services, locations }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const formData = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Failed to submit form. Please try WhatsApp instead.');
      }
    } catch (error) {
      alert('Error submitting form. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = generateContactWhatsAppLink({
    name: formData.name || 'Customer',
    phone: formData.phone,
    email: formData.email,
    message: formData.message || '',
  });

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-300 mb-6">
            Thank you for contacting us. We'll get back to you shortly!
          </p>
          <p className="text-sm text-gray-400">
            Or you can{' '}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline"
            >
              message us on WhatsApp
            </a>{' '}
            for faster response
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Name"
            {...register('name')}
            error={errors.name?.message}
            placeholder="John Doe"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Email"
              type="email"
              {...register('email')}
              error={errors.email?.message}
              placeholder="john@example.com"
              required
            />

            <Input
              label="Phone"
              type="tel"
              {...register('phone')}
              error={errors.phone?.message}
              placeholder="(604) 123-4567"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Service"
              {...register('service')}
              error={errors.service?.message}
              options={services.map((s) => ({ value: s.title, label: s.title }))}
            />

            <Select
              label="Location"
              {...register('location')}
              error={errors.location?.message}
              options={locations.map((l) => ({ value: l.city, label: `${l.city}, ${l.province}` }))}
            />
          </div>

          <Textarea
            label="Message"
            {...register('message')}
            error={errors.message?.message}
            placeholder="Tell us about your carpet cleaning needs..."
            required
            rows={6}
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="flex-1"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Send Message
            </Button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="glass" size="lg" className="w-full">
                Or Message on WhatsApp
              </Button>
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
