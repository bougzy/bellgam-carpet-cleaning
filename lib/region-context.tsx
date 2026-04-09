'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Region, REGION_CONFIG, type RegionConfig } from './region-config';

interface RegionContextValue {
  region: Region;
  regionConfig: RegionConfig;
  setRegion: (r: Region) => void;
  showSelector: boolean;
  setShowSelector: (v: boolean) => void;
}

const RegionContext = createContext<RegionContextValue | null>(null);

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>('bc');
  const [showSelector, setShowSelector] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('bellgams-region') as Region | null;
    if (saved && (saved === 'bc' || saved === 'toronto')) {
      setRegionState(saved);
    } else {
      // Show selector on first visit
      setShowSelector(true);
    }
  }, []);

  const setRegion = (r: Region) => {
    setRegionState(r);
    localStorage.setItem('bellgams-region', r);
    setShowSelector(false);
  };

  if (!mounted) {
    // Prevent SSR mismatch — render with default until client hydrates
    return (
      <RegionContext.Provider
        value={{
          region: 'bc',
          regionConfig: REGION_CONFIG.bc,
          setRegion,
          showSelector: false,
          setShowSelector,
        }}
      >
        {children}
      </RegionContext.Provider>
    );
  }

  return (
    <RegionContext.Provider
      value={{
        region,
        regionConfig: REGION_CONFIG[region],
        setRegion,
        showSelector,
        setShowSelector,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion(): RegionContextValue {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error('useRegion must be used inside <RegionProvider>');
  return ctx;
}
