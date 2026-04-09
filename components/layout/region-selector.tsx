'use client';

import { useRegion } from '@/lib/region-context';
import { REGION_CONFIG } from '@/lib/region-config';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export function RegionSelector() {
  const { showSelector, setRegion, region, setShowSelector } = useRegion();

  return (
    <AnimatePresence>
      {showSelector && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-full max-w-2xl rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15,15,25,0.98) 0%, rgba(20,20,40,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.7)',
            }}
          >
            {/* Header */}
            <div className="p-8 text-center border-b border-white/10">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/bellgamslogo.png"
                  alt="Bellgams"
                  width={140}
                  height={52}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}>
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-gray-300">Please select your region</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Where Are You Located?
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                We serve two regions across Canada. Choose yours to see the right
                services, pricing, and locations for your area.
              </p>
            </div>

            {/* Region Options */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(['bc', 'toronto'] as const).map((r) => {
                const config = REGION_CONFIG[r];
                const isSelected = region === r;
                return (
                  <motion.button
                    key={r}
                    onClick={() => setRegion(r)}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative text-left rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                    style={{
                      background: isSelected
                        ? 'linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 100%)'
                        : 'rgba(255,255,255,0.04)',
                      border: isSelected
                        ? '2px solid rgba(99,102,241,0.6)'
                        : '2px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="text-4xl mb-3">{config.flag}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{config.label}</h3>
                    <p className="text-sm text-gray-400 mb-4">{config.tagline}</p>
                    <div className="space-y-1">
                      {config.locations.slice(0, 5).map((city) => (
                        <div key={city} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span className="text-xs text-gray-400">{city}</span>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/40" />
                        <span className="text-xs text-gray-500">
                          +{config.locations.length - 5} more cities
                        </span>
                      </div>
                    </div>
                    <div
                      className="mt-5 w-full py-2.5 rounded-xl text-center text-sm font-semibold transition-all duration-200"
                      style={{
                        background: isSelected
                          ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                          : 'rgba(255,255,255,0.08)',
                        color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {isSelected ? '✓ Selected' : 'Select This Region'}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer note */}
            <div className="px-8 pb-6 text-center">
              <p className="text-xs text-gray-600">
                You can change your region anytime from the navigation bar.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
