"use client";
import React from 'react';
import Image from 'next/image';

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
          className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:invert dark:opacity-80 dark:group-hover:invert-0"
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
          className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:invert dark:opacity-80 dark:group-hover:invert-0"
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
          className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:invert dark:opacity-80 dark:group-hover:invert-0"
        />
      </div>
    )
  }
];

export default function Collaborators() {
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
      
      <div className="relative w-full overflow-hidden flex bg-transparent">
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
              className="flex items-center justify-center px-16 group text-texto-oscuro hover:text-texto-oscuro transition-colors duration-300"
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
