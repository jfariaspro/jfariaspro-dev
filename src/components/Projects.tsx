"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Plataforma SaaS de Loterías (La Imaginaria)",
    description: "Diseño y despliegue del sitio corporativo y sistema administrativo en Google Cloud. Creación de puente de impresión fiscal en Go.",
    tags: ["Google Cloud", "Go", "React", "CI/CD"],
    colorPlaceholder: "bg-blue-100"
  },
  {
    title: "Sistema de Gestión Logística (MRW)",
    description: "Desarrollo y mantenimiento evolutivo de sistemas críticos en operaciones logísticas. Diseño de bases de datos para nuevos módulos.",
    tags: ["Laravel", "PHP", "PostgreSQL"],
    colorPlaceholder: "bg-gray-200"
  },
  {
    title: "Monitoreo Bancario (Banco Mercantil)",
    description: "Análisis crítico de errores y monitoreo de microservicios mediante SiteScope e Instana para mitigar impactos en la operatividad.",
    tags: ["SiteScope", "Kibana", "Infraestructura"],
    colorPlaceholder: "bg-purple-100"
  }
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProjects = projects.slice(0, 2);
  const hiddenProjects = projects.slice(2);

  const renderProject = (proj: typeof projects[0], idx: number) => (
    <div key={idx} className="flex flex-col md:flex-row gap-8 items-center bg-bg-blanco border border-bg-gris rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className={`w-full md:w-1/2 h-64 ${proj.colorPlaceholder} flex items-center justify-center transition-transform hover:scale-105 duration-500`}>
        <span className="text-texto-claro/50 font-medium">Placeholder de Galería</span>
      </div>
      <div className="w-full md:w-1/2 p-8 pl-0 md:pl-4">
        <h3 className="text-2xl font-bold text-texto-oscuro mb-3">{proj.title}</h3>
        <p className="text-texto-claro/80 mb-6">{proj.description}</p>
        <div className="flex flex-wrap gap-2">
          {proj.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-bg-gris text-xs font-semibold rounded-full text-texto-oscuro">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="proyectos" className="w-full max-w-4xl px-6 mt-24 mx-auto pb-12">
      <h2 className="text-3xl font-bold text-texto-oscuro mb-8 border-b border-bg-gris pb-3">Proyectos Destacados</h2>
      
      <div className="relative">
        <div className="space-y-12 relative z-10">
          {visibleProjects.map((proj, idx) => renderProject(proj, idx))}

          <AnimatePresence initial={false}>
            {isExpanded && hiddenProjects.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden space-y-12 pt-12"
              >
                {hiddenProjects.map((proj, idx) => renderProject(proj, idx + 2))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Gradient Overlay when collapsed */}
        <AnimatePresence>
          {!isExpanded && hiddenProjects.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-blanco via-bg-blanco/80 to-transparent z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Action Button */}
      {hiddenProjects.length > 0 && (
        <div className={`relative flex justify-center z-30 ${!isExpanded ? '-translate-y-12' : 'mt-12'} transition-all duration-500`}>
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
                <span>Ver más proyectos</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
