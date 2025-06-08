// Animation variants for consistent usage across components
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.4,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const cardHover = {
  y: -8,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut",
  },
};

export const iconSpin = {
  rotate: 360,
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  },
};

// Viewport settings for performance
export const defaultViewport = {
  once: true,
  margin: "-100px 0px",
  amount: 0.3,
};
