'use client';

import { Card, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { AnimatedCounter } from '@/components/animations/animated-counter';
import { STATS } from '@/lib/constants';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function StatsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4 animate-pulse"
          >
            <TrendingUp className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Trusted by Thousands</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-2 mb-4"
          >
            Serving Canada Since <span className="gradient-text">2010</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="body-normal text-gray-400 max-w-2xl mx-auto"
          >
            Our commitment to excellence has made us the leading carpet cleaning service
            across Canada
          </motion.p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card hover className="h-full text-center relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"
                  />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="text-5xl font-bold gradient-text mb-2 animate-gradient">
                      <AnimatedCounter
                        to={stat.value}
                        duration={2500}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-gray-400 font-medium transition-colors duration-300 group-hover:text-gray-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
