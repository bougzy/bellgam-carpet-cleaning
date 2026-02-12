'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  ...props
}: StaggerContainerProps) {
  const customContainer = {
    ...container,
    show: {
      ...container.show,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={customContainer}
      initial="hidden"
      animate="show"
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
