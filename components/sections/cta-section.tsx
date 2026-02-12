'use client';

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function CTASection() {
  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a free quote for carpet cleaning.",
  });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-12 md:p-16 text-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20" />

            <div className="relative z-10">
              <h2 className="heading-2 mb-4">
                Ready for <span className="gradient-text">Spotless Carpets</span>?
              </h2>
              <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
                Get your free, no-obligation quote today. Same-day service available!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Button variant="glass" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    {SITE_CONFIG.phoneDisplay}
                  </Button>
                </a>
              </div>

              <p className="text-sm text-gray-400 mt-6">
                Available 7 days a week • Free estimates • Satisfaction guaranteed
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
