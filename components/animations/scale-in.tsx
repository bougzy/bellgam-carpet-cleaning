'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface ScaleInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  scale?: number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.3,
  scale = 0.95,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
