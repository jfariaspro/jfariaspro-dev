"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const imgClass = "object-contain transition-all duration-500 grayscale opacity-40 dark:invert dark:opacity-60 group-data-[active=true]:grayscale-0 group-data-[active=true]:opacity-100 dark:group-data-[active=true]:invert-0 md:group-hover:grayscale-0 md:group-hover:opacity-100 dark:md:group-hover:invert-0";

const collaborators = [
  {
    name: "MRW",
    url: "#",
    logo: (
      <div className="relative w-32 h-12">
        <Image 
          src="/logos/mrw-logo.png" 
          alt="MRW" 
          fill
          className={imgClass}
        />
      </div>
    )
  },
  {
    name: "Superintendencia Nacional de Valores",
    url: "#",
    logo: (
      <div className="relative w-40 h-14">
        <Image 
          src="/logos/sunaval-logo.png" 
          alt="SUNAVAL" 
          fill
          className={imgClass}
        />
      </div>
    )
  },
  {
    name: "Servicios Expresos",
    url: "#",
    logo: (
      <div className="relative w-36 h-14">
        <Image 
          src="/logos/servicios-expresos-logo.png" 
          alt="Servicios Expresos" 
          fill
          className={imgClass}
        />
      </div>
    )
  }
];

export default function Collaborators() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const checkCenter = () => {
      // En desktop (>= 768px), limpiamos el estado activo y confiamos solo en el hover
      if (window.innerWidth >= 768) {
        const logos = document.querySelectorAll('.marquee-logo-container');
        logos.forEach(logo => logo.removeAttribute('data-active'));
        animationFrameId = requestAnimationFrame(checkCenter);
        return;
      }

      const centerX = window.innerWidth / 2;
      const logos = document.querySelectorAll('.marquee-logo-container');

      logos.forEach(logo => {
        const rect = logo.getBoundingClientRect();
        const logoCenter = rect.left + rect.width / 2;
        // Rango de activación: 80px a la izquierda o derecha del centro
        if (Math.abs(centerX - logoCenter) < 80) {
          logo.setAttribute('data-active', 'true');
        } else {
          logo.removeAttribute('data-active');
        }
      });

      animationFrameId = requestAnimationFrame(checkCenter);
    };

    animationFrameId = requestAnimationFrame(checkCenter);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicamos las marcas varias veces para garantizar que la cinta 
  // siempre desborde la pantalla, necesario para un loop continuo sin saltos.
  const half = [...collaborators, ...collaborators, ...collaborators];
  const items = [...half, ...half]; // Exactamente 2 mitades idénticas

  return (
    <section className="w-full py-8 overflow-hidden border-t border-b border-white/20 bg-bg-blanco/40 backdrop-blur-md shadow-sm">
      <div className="max-w-4xl mx-auto px-6 mb-6 text-center md:text-left">
        <h3 className="text-sm font-bold text-texto-oscuro/50 tracking-widest uppercase">
          Ecosistemas en los que he colaborado
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden flex bg-transparent" ref={containerRef}>
        {/* Desvanecimiento en los bordes para un efecto elegante */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-blanco/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-blanco/40 to-transparent z-10 pointer-events-none"></div>
        
        {/* Contenedor del Marquee */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((collab, idx) => (
            <a 
              key={idx} 
              href={collab.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="marquee-logo-container flex items-center justify-center px-16 group text-texto-oscuro transition-colors duration-300"
              title={collab.name}
            >
              {collab.logo}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
