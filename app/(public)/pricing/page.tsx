'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { PRICING_PACKAGES } from '@/lib/constants';
import { CheckCircle, Star, DollarSign } from 'lucide-react';

export default function PricingPage() {
  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a quote for carpet cleaning.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-bg-1">
        <div className="container-custom text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <DollarSign className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Pricing</span>
          </div>
          <h1 className="heading-1 mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest, upfront pricing for
            professional carpet cleaning services.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {PRICING_PACKAGES.map((pkg, index) => (
              <StaggerItem key={pkg.id}>
                <Card
                  className={`h-full ${
                    pkg.popular
                      ? 'border-primary-500/50 bg-gradient-to-br from-primary-500/10 to-transparent'
                      : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-primary-500 text-white text-center py-2 rounded-t-xl font-semibold text-sm">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={pkg.popular ? '' : 'pt-12'}>
                    <CardTitle className="text-center">
                      <div className="text-sm text-gray-400 mb-2">{pkg.name}</div>
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-500">{pkg.description}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        variant={pkg.popular ? 'primary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        Get This Package
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Free Estimates</h3>
                <p className="text-sm text-gray-400">
                  Get a free, no-obligation quote for your specific needs
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-sm text-gray-400">
                  100% satisfaction guarantee or we'll re-clean for free
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">No Hidden Fees</h3>
                <p className="text-sm text-gray-400">
                  Transparent pricing with no surprise charges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
