"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types/project';

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // El primer proyecto es La Imaginaria, el segundo es AIPOS, etc.
  const visibleProjects = projectsData.slice(0, 2);
  const hiddenProjects = projectsData.slice(2);

  return (
    <section id="proyectos" className="w-full max-w-4xl px-6 mt-24 mx-auto pb-12 relative">
      <h2 className="text-3xl font-bold text-texto-oscuro mb-8 border-b border-bg-gris pb-3">Proyectos Destacados</h2>
      
      <div className="relative">
        <div className="space-y-12 relative z-10">
          {visibleProjects.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              project={proj} 
              onClick={() => setSelectedProject(proj)} 
            />
          ))}

          <AnimatePresence initial={false}>
            {isExpanded && hiddenProjects.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden space-y-12 pt-12"
              >
                {hiddenProjects.map((proj) => (
                  <ProjectCard 
                    key={proj.id} 
                    project={proj} 
                    onClick={() => setSelectedProject(proj)} 
                  />
                ))}
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

      {/* Modal para detalles del proyecto */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
