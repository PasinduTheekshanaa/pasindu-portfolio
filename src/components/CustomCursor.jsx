import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
    };
    
    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const mouseLeave = () => {
      setIsVisible(false);
    };

    const mouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.glass-card-hover') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      const isTextInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA';

      if (isClickable && !isTextInput) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', mouseMove, { passive: true });
    window.addEventListener('mouseleave', mouseLeave);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
  
  // Outer ring position (delayed)
  const cursorXSpring = useSpring(mousePosition.x, springConfig);
  const cursorYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    cursorXSpring.set(mousePosition.x);
    cursorYSpring.set(mousePosition.y);
  }, [mousePosition, cursorXSpring, cursorYSpring]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer ring (follows smoothly) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: "-16px",
          marginTop: "-16px",
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.1)" : "transparent",
          borderColor: isHovered ? "rgba(6, 182, 212, 0.8)" : "rgba(6, 182, 212, 0.4)",
          borderWidth: "1px",
          borderStyle: "solid",
          boxShadow: isHovered ? "0 0 12px rgba(6, 182, 212, 0.4)" : "none"
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Center dot (follows instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-cyan rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          marginLeft: "-3px",
          marginTop: "-3px",
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
