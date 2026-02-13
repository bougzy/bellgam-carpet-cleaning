'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function PricingPreviewSection() {
  const pricingPackages = [
    {
      title: '1 Bedroom Apartment',
      price: '$125',
      description: 'This includes 1 room and Living Room',
      features: [
        'Approximately 150 sq ft per room',
        'Professional steam cleaning',
        'Eco-friendly solutions',
        'Same-day service available',
      ],
      popular: false,
    },
    {
      title: '2 Bedroom Apartment',
      price: '$170',
      description: 'This includes 2 rooms and Living Room',
      features: [
        'Approximately 150 sq ft per room',
        'Professional steam cleaning',
        'Eco-friendly solutions',
        'Same-day service available',
      ],
      popular: true,
    },
    {
      title: '3 Bedroom Apartment',
      price: '$215',
      description: 'This includes 3 rooms and Living Room',
      features: [
        'Approximately 150 sq ft per room',
        'Professional steam cleaning',
        'Eco-friendly solutions',
        'Same-day service available',
      ],
      popular: false,
    },
  ];

  return (
    <section className="section-padding bg-gradient-bg-2">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4 animate-pulse">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Discount Price List</span>
          </div>
          <h2 className="heading-2 mb-4">
            <span className="gradient-text">Carpet and Rugs</span> Pricing
          </h2>
          <p className="body-normal text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Professional carpet cleaning at affordable rates.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pricingPackages.map((pkg, index) => (
            <StaggerItem key={index}>
              <Card
                hover
                className={`h-full relative overflow-hidden ${
                  pkg.popular ? 'border-primary-500/50 shadow-lg shadow-primary-500/20' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold rounded-full shadow-lg animate-bounce">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:scale-105 inline-block">{pkg.title}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold gradient-text transition-all duration-500 group-hover:scale-110 inline-block">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-gray-400">{pkg.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-1">
                        <Check className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="block w-full relative z-20 mt-6">
                    <Button
                      variant={pkg.popular ? 'primary' : 'outline'}
                      className={cn(
                        "w-full group relative",
                        pkg.popular && "shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70"
                      )}
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center" delay={0.4}>
          <p className="text-sm text-gray-400 mb-4">
            * Additional rooms can be added at a discounted rate. Prices may vary based on carpet condition and size.
          </p>
          <Link href="/pricing">
            <Button variant="glass" size="lg" className="group">
              View Full Price List
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
