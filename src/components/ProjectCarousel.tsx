"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectImage } from '../types/project';

interface ProjectCarouselProps {
  images: ProjectImage[];
  autoPlayInterval?: number;
  className?: string;
}

export default function ProjectCarousel({ images, autoPlayInterval = 3000, className = "" }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    let timer: NodeJS.Timeout;
    if (!isHovered) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
    }
    
    return () => clearInterval(timer);
  }, [images, isHovered, autoPlayInterval]);

  if (!images || images.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-bg-gris text-texto-claro/50 ${className}`}>
        <span>Sin imágenes</span>
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div 
      className={`relative overflow-hidden group bg-black/10 dark:bg-black/40 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        {/* Fondo difuminado dinámico */}
        <motion.img
          key={`bg-${currentIndex}`}
          src={images[currentIndex].src}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
        />
        
        {/* Imagen principal */}
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Controles manuales (visibles siempre en móviles, o en hover en desktop si se desea. Aquí siempre por usabilidad táctil) */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 cursor-pointer z-10"
            aria-label="Anterior imagen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 cursor-pointer z-10"
            aria-label="Siguiente imagen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Indicadores (Dots) */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
