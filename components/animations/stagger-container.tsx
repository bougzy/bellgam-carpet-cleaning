'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.15,
  ...props
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const customContainer = {
    ...container,
    show: {
      ...container.show,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={customContainer}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}
