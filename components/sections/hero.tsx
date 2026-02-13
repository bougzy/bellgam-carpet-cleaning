'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  const whatsappLink = generateWhatsAppLink({
    message: "Hi! I'd like to get a free quote for carpet cleaning.",
  });

  const benefits = [
    'Same-Day Service Available',
    'Eco-Friendly Solutions',
    '100% Satisfaction Guaranteed',
    'Certified Professionals',
  ];

  // Carousel images - Professional carpet and upholstery cleaning
  const heroImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop&q=80', // Modern living room with clean carpet
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop&q=80', // Clean carpet interior
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop&q=80', // Sofa in living room
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&h=1080&fit=crop&q=80', // Clean white carpet bedroom
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={`Professional carpet cleaning service ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
        {/* Lighter overlay for better image visibility */}
        <div className="absolute inset-0 bg-dark-950/65" />
      </div>

      {/* Animated gradient effects on top */}
      <div className="absolute inset-0 z-[1]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm text-gray-300">Available 7 Days a Week</span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="heading-1 mb-6">
              Professional <span className="gradient-text animate-gradient">Carpet Cleaning</span><br />
              Services In British Columbia
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
              Expert steam cleaning, pet stain removal, and upholstery cleaning.
              Trusted by thousands of happy customers. Get your free quote today!
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </a>
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  {SITE_CONFIG.phoneDisplay}
                </Button>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg glass-card cursor-default"
                >
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
