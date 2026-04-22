import type { Variants } from 'motion/react';

type Direction = 'left' | 'right' | 'up' | 'down' | '';
type TransitionType = 'spring' | 'tween';

export const textVariant = (delay = 0): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  type: TransitionType | '',
  delay: number,
  duration: number
): Variants => {
  const transitionType: TransitionType = type || 'tween';

  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: transitionType,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: TransitionType | '',
  delay: number,
  duration: number
): Variants => {
  const transitionType: TransitionType = type || 'tween';

  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: transitionType,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren = 0,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
