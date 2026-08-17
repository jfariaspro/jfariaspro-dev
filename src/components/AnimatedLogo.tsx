"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function AnimatedLogo() {
  const lineVariants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: [0, 1, 1, 0, 0],
      opacity: [0, 1, 1, 0, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        times: [0, 0.3, 0.5, 0.8, 1],
        ease: "easeInOut"
      }
    }
  };

  const nodeVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 1, 0, 0],
      opacity: [0, 1, 1, 0, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        times: [0, 0.3, 0.5, 0.8, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="relative flex items-center justify-center w-10 h-10 mr-2"
      initial="initial"
      animate="animate"
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-current" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Trazado principal de la letra J */}
        <motion.path 
          d="M 35 20 L 75 20 M 60 20 L 60 70 L 50 80 L 35 80 L 25 70" 
          className="drop-shadow-md"
        />
        
        {/* Nodos (puntos) fijos de la J principal */}
        <circle cx="35" cy="20" r="4" fill="currentColor" />
        <circle cx="75" cy="20" r="4" fill="currentColor" />
        <circle cx="25" cy="70" r="4" fill="currentColor" />
        
        {/* ======================================================== */}
        {/* Líneas adicionales animadas constantemente */}
        {/* ======================================================== */}
        
        {/* 1. Rama Top-Right */}
        <motion.path d="M 75 20 L 90 35 L 90 50" variants={lineVariants} />
        <motion.circle cx="90" cy="50" r="3" fill="currentColor" variants={nodeVariants} />

        {/* 2. Rama Bottom-Left */}
        <motion.path d="M 25 70 L 10 70 L 10 50" variants={lineVariants} />
        <motion.circle cx="10" cy="50" r="3" fill="currentColor" variants={nodeVariants} />

        {/* 3. Rama Central emergiendo del stem */}
        <motion.path d="M 60 45 L 45 45 L 35 35" variants={lineVariants} />
        <motion.circle cx="35" cy="35" r="3" fill="currentColor" variants={nodeVariants} />

        {/* 4. Nueva Rama Superior (hacia arriba) */}
        <motion.path d="M 60 20 L 60 5 L 45 5" variants={lineVariants} />
        <motion.circle cx="45" cy="5" r="3" fill="currentColor" variants={nodeVariants} />

        {/* 5. Nueva Rama Inferior (hacia la derecha desde la curva) */}
        <motion.path d="M 50 80 L 60 90 L 75 90" variants={lineVariants} />
        <motion.circle cx="75" cy="90" r="3" fill="currentColor" variants={nodeVariants} />
      </svg>
    </motion.div>
  );
}
