'use client';

import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { motion } from 'framer-motion';

export function CTASection() {
  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a free quote for carpet cleaning.",
  });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-3xl glass-card border border-white/10 p-12 md:p-16 text-center"
          >
            {/* Animated background gradient */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20"
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="heading-2 mb-4"
              >
                Ready for <span className="gradient-text">Spotless Carpets</span>?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="body-large text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Get your free, no-obligation quote today. Same-day service available!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </Button>
                  </motion.div>
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="glass" size="lg" className="w-full sm:w-auto group">
                      <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                      {SITE_CONFIG.phoneDisplay}
                    </Button>
                  </motion.div>
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm text-gray-400 mt-6"
              >
                Available 7 days a week • Free estimates • Satisfaction guaranteed
              </motion.p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
