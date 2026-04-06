'use client';

import {motion, useInView} from 'framer-motion';
import {useRef, ReactNode} from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up'
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: '-100px'});

  const directions = {
    up: {y: 24, x: 0},
    down: {y: -24, x: 0},
    left: {x: 24, y: 0},
    right: {x: -24, y: 0}
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {
        opacity: 0,
        ...directions[direction]
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}