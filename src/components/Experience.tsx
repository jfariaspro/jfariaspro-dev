"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    role: "Desarrollador FullStack",
    company: "La Imaginaria C.A",
    date: "03/2026 - Actualidad",
    desc: "Diseño y despliegue de plataforma SaaS en Google Cloud. Desarrollo FullStack con React y Node JS. Creación de conexiones bancarias (API R4) y desarrollo de puente de impresión fiscal automatizado usando Go.",
    bgColor: "bg-zinc-800",
    textColor: "text-zinc-100",
    descColor: "text-zinc-300",
    dotColor: "bg-zinc-900",
    dateColor: "text-zinc-400"
  },
  {
    role: "Consultor de Monitoreo",
    company: "Proyecto Banco Mercantil",
    date: "11/2025 - 03/2026",
    desc: "Monitoreo crítico de servidores, infraestructura y microservicios del sector bancario para mitigar impactos operativos. Análisis y trazabilidad utilizando SiteScope, Instana, Kibana y Cloud Control.",
    bgColor: "bg-zinc-600",
    textColor: "text-zinc-100",
    descColor: "text-zinc-200",
    dotColor: "bg-zinc-700",
    dateColor: "text-zinc-300"
  },
  {
    role: "Programador",
    company: "Superintendencia Nacional de Valores",
    date: "09/2025 - 11/2025",
    desc: "Desarrollo de software y mantenimiento web utilizando PHP, Laravel y JS puro. Adicionalmente, brindé Soporte Técnico nivel 1 a usuarios y Soporte nivel 2 enfocado en redes, cableado e infraestructura interna.",
    bgColor: "bg-zinc-400",
    textColor: "text-zinc-900",
    descColor: "text-zinc-800",
    dotColor: "bg-zinc-500",
    dateColor: "text-zinc-700"
  },
  {
    role: "Analista de Programación I",
    company: "Menssajero By MRW",
    date: "04/2025 - 08/2025",
    desc: "Mantenimiento evolutivo de sistemas críticos logísticos en Laravel. Diseño de bases de datos PostgreSQL para nuevos módulos de gestión y desarrollo/consumo de APIs empresariales.",
    bgColor: "bg-zinc-200",
    textColor: "text-zinc-900",
    descColor: "text-zinc-700",
    dotColor: "bg-zinc-400",
    dateColor: "text-zinc-600"
  }
];

function ExperienceItem({ exp }: { exp: typeof experiences[0] }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      // rootMargin anticipa la animación justo cuando el elemento va a entrar al centro de la pantalla
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } 
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-1000 transform ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Punto de la línea de tiempo */}
      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-blanco ${exp.dotColor} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 hover:scale-125`}>
        <span className="w-3 h-3 bg-bg-blanco rounded-full"></span>
      </div>
      
      {/* Contenedor de experiencia */}
      <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${exp.bgColor} p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
          <h3 className={`text-xl font-bold ${exp.textColor}`}>{exp.role}</h3>
          <span className={`text-sm font-semibold mt-1 md:mt-0 ${exp.dateColor}`}>{exp.date}</span>
        </div>
        <h4 className={`text-md font-medium mb-3 ${exp.textColor} opacity-90`}>{exp.company}</h4>
        <p className={`leading-relaxed ${exp.descColor}`}>{exp.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleExperiences = experiences.slice(0, 2);
  const hiddenExperiences = experiences.slice(2);

  return (
    <section id="experiencia" className="w-full max-w-4xl px-6 mt-24 mx-auto pb-12">
      <h2 
        ref={headerRef}
        className={`text-3xl font-bold text-texto-oscuro mb-8 border-b border-bg-gris pb-3 transition-all duration-1000 transform ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        Experiencia Profesional
      </h2>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className={`absolute top-0 bottom-0 left-5 -translate-x-px md:left-1/2 md:-translate-x-[2px] w-1 bg-gradient-to-b from-zinc-900 to-zinc-200 transition-opacity duration-1000 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'} z-0`}></div>

        <div className="space-y-8 relative z-10">
          {visibleExperiences.map((exp, idx) => (
            <ExperienceItem key={idx} exp={exp} />
          ))}

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden space-y-8 pt-8"
              >
                {hiddenExperiences.map((exp, idx) => (
                  <ExperienceItem key={idx + 2} exp={exp} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Gradient Overlay when collapsed */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-blanco to-transparent z-10 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Action Button */}
        <div className={`relative flex justify-center mt-8 z-20 ${!isExpanded ? '-translate-y-12' : 'translate-y-0'} transition-transform duration-500`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer text-sm font-semibold text-zinc-800 bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            {isExpanded ? (
              <>
                <span>Ver menos</span>
                <svg className="w-4 h-4 rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </>
            ) : (
              <>
                <span>Ver más experiencias</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

