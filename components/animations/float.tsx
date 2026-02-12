'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface FloatProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
}

export function Float({
  children,
  delay = 0,
  duration = 3,
  ...props
}: FloatProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
