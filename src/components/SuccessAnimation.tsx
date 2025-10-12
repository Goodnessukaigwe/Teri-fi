'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SuccessAnimationProps {
  onComplete?: () => void;
}

const SuccessAnimation = ({ onComplete }: SuccessAnimationProps) => {
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [showDots, setShowDots] = useState(true);
  const [dots, setDots] = useState([
    { id: 1, x: -30, y: 0, delay: 0.1 },
    { id: 2, x: 30, y: 0, delay: 0.2 },
    { id: 3, x: 0, y: -30, delay: 0.3 },
    { id: 4, x: 0, y: 30, delay: 0.4 },
  ]);

  useEffect(() => {
    // After 1.5 seconds, show the checkmark and start the dot animation
    const timer = setTimeout(() => {
      setShowCheckmark(true);
      
      // Animate dots to form a circle
      const angleStep = (2 * Math.PI) / dots.length;
      const radius = 60;
      
      setDots(dots.map((dot, index) => ({
        ...dot,
        x: Math.cos(angleStep * index) * radius,
        y: Math.sin(angleStep * index) * radius,
        delay: 0.1 * index,
      })));
      
      // After animation completes, call onComplete
      if (onComplete) {
        setTimeout(onComplete, 2000);
      }
      
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {/* Background circle */}
      <div className="absolute w-32 h-32 rounded-full bg-blue-500/20" />
      
      {/* Animated dots */}
      {showDots && dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-4 h-4 rounded-full bg-blue-500"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: dot.x,
            y: dot.y,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: dot.delay,
            },
          }}
        />
      ))}
      
      {/* Checkmark */}
      {showCheckmark && (
        <motion.div
          className="relative w-16 h-16"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.div
            className="absolute w-2 h-10 bg-white rounded-full origin-bottom-left"
            initial={{ rotate: -45, x: 8, y: 24 }}
            animate={{ rotate: -45, x: 8, y: 24 }}
          />
          <motion.div
            className="absolute w-2 h-6 bg-white rounded-full origin-bottom-right"
            initial={{ rotate: 45, x: 10, y: 16 }}
            animate={{ rotate: 45, x: 10, y: 16 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default SuccessAnimation;
