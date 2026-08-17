"use client";
import React, { useEffect } from 'react';
import { Project } from '../types/project';
import ProjectCarousel from './ProjectCarousel';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-texto-oscuro/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-bg-blanco rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all cursor-pointer backdrop-blur-sm"
          aria-label="Cerrar modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Carousel Header */}
        <div className="w-full h-64 sm:h-80 md:h-96 shrink-0 relative bg-bg-gris">
          <ProjectCarousel images={project.images} className="w-full h-full" autoPlayInterval={4000} />
          {/* Gradient to blend with content */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-blanco to-transparent pointer-events-none"></div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Header Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-texto-oscuro mb-3">{project.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-texto-claro/80">
                {project.role && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {project.role}
                  </span>
                )}
                {project.deployment && (
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                    {project.deployment}
                  </span>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-texto-oscuro text-bg-blanco text-xs font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-texto-oscuro mb-3 border-b border-bg-gris pb-2">Acerca del Proyecto</h3>
              <p className="text-texto-claro leading-relaxed whitespace-pre-line text-lg">
                {project.fullDescription}
              </p>
            </div>

            {/* Features (if any) */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-texto-oscuro mb-4 border-b border-bg-gris pb-2">Características Principales</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => {
                    const [title, desc] = feature.includes(':') ? feature.split(':') : [feature, ''];
                    return (
                      <li key={idx} className="flex gap-3 text-texto-claro">
                        <svg className="w-6 h-6 shrink-0 text-texto-oscuro" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>
                          {desc ? (
                            <>
                              <strong className="text-texto-oscuro">{title}:</strong> {desc}
                            </>
                          ) : (
                            <span>{title}</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* CTA Action */}
            {project.link && (
              <div className="pt-6 mt-6 flex justify-center sm:justify-start">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-texto-oscuro text-bg-blanco font-extrabold text-lg rounded-xl overflow-hidden hover:scale-105 transition-all shadow-xl"
                >
                  <span className="relative z-10">Visitar Sitio Web</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                </a>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
