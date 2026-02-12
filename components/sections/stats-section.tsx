'use client';

import { Card, CardContent } from '@/components/ui/card';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';
import { STATS } from '@/lib/constants';
import { TrendingUp } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
            <TrendingUp className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">Trusted by Thousands</span>
          </div>
          <h2 className="heading-2 mb-4">
            Serving Canada Since <span className="gradient-text">2010</span>
          </h2>
          <p className="body-normal text-gray-400 max-w-2xl mx-auto">
            Our commitment to excellence has made us the leading carpet cleaning service
            across Canada
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StaggerItem key={index}>
              <Card hover className="h-full text-center">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
