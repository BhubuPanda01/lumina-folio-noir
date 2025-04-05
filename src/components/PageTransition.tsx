
import { motion } from "framer-motion";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen relative"
    >
      <div className="animated-bg">
        <div className="particle lavender-particle"></div>
        <div className="particle lavender-particle"></div>
        <div className="particle lavender-particle"></div>
        <div className="particle lavender-particle"></div>
        <div className="particle lavender-light-particle"></div>
        <div className="particle lavender-light-particle"></div>
        <div className="glow lavender-glow"></div>
        <div className="glow lavender-glow"></div>
        <div className="glow lavender-light-glow"></div>
      </div>
      {children}
    </motion.div>
  );
};

export default PageTransition;
