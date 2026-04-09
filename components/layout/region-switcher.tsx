'use client';

import { useRegion } from '@/lib/region-context';
import { REGION_CONFIG } from '@/lib/region-config';
import { ChevronDown, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function RegionSwitcher() {
  const { region, setRegion, regionConfig } = useRegion();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm font-medium"
        style={{
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.3)',
          color: '#a5b4fc',
        }}
      >
        <MapPin className="w-3.5 h-3.5" />
        <span>{regionConfig.flag} {regionConfig.shortLabel}</span>
        <ChevronDown
          className="w-3.5 h-3.5 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-64 rounded-2xl overflow-hidden z-50"
            style={{
              background: 'rgba(15,15,25,0.98)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div className="p-3 border-b border-white/10">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider px-2">
                Select Your Region
              </p>
            </div>
            {(['bc', 'toronto'] as const).map((r) => {
              const config = REGION_CONFIG[r];
              const isActive = region === r;
              return (
                <button
                  key={r}
                  onClick={() => { setRegion(r); setOpen(false); }}
                  className="w-full text-left px-4 py-3 transition-colors duration-150 hover:bg-white/5"
                  style={isActive ? { background: 'rgba(99,102,241,0.12)' } : {}}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-0.5">
                        <span className="text-lg">{config.flag}</span>
                        <span className="font-semibold text-white text-sm">{config.label}</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-7">{config.tagline}</p>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
