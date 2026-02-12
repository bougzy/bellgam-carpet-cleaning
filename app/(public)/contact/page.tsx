import { prisma } from '@/lib/prisma';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { SITE_CONFIG } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

async function getData() {
  const [services, locations] = await Promise.all([
    prisma.service.findMany({
      where: { published: true },
      orderBy: { title: 'asc' },
    }),
    prisma.location.findMany({
      where: { published: true },
      orderBy: { city: 'asc' },
    }),
  ]);

  return { services, locations };
}

export const metadata = {
  title: 'Contact Us | Get Your Free Quote | Bellgam Carpet Cleaning',
  description: 'Contact Bellgam Carpet Cleaning for a free quote. Available 7 days a week. Call, email, or message us on WhatsApp.',
};

export default async function ContactPage() {
  const { services, locations } = await getData();

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            Ready for spotless carpets? Contact us today for a free, no-obligation quote.
            Available 7 days a week!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-primary-400 mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-primary-400 mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary-400 mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province}
                    <br />
                    {SITE_CONFIG.address.country}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary-400 mb-4" />
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>Mon-Fri: {SITE_CONFIG.businessHours.monday}</p>
                    <p>Sat: {SITE_CONFIG.businessHours.saturday}</p>
                    <p>Sun: {SITE_CONFIG.businessHours.sunday}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm services={services} locations={locations} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
