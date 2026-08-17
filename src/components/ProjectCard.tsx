"use client";
import React from 'react';
import { Project } from '../types/project';
import ProjectCarousel from './ProjectCarousel';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="flex flex-col md:flex-row gap-8 items-stretch bg-bg-blanco border border-bg-gris rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
      onClick={onClick}
    >
      {/* Carousel Area */}
      <div className={`w-full md:w-5/12 shrink-0 h-64 md:h-auto min-h-[16rem] ${project.colorPlaceholder || 'bg-bg-gris'} relative overflow-hidden`}>
        {project.images && project.images.length > 0 ? (
          <ProjectCarousel images={project.images} className="w-full h-full" autoPlayInterval={5000} />
        ) : (
          <div className="w-full h-full flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
            <span className="text-white/50 font-medium">Pronto: Imágenes del Proyecto</span>
          </div>
        )}
      </div>
      
      {/* Elevator Pitch Area */}
      <div className="w-full md:w-7/12 p-8 pl-0 md:pl-4 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-texto-oscuro mb-3 group-hover:text-texto-claro transition-colors">{project.title}</h3>
        <p className="text-texto-claro/80 mb-6 text-base leading-relaxed line-clamp-3">
          {project.elevatorPitch}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 5).map(tag => (
            <span key={tag} className="px-3 py-1 bg-bg-gris text-xs font-semibold rounded-full text-texto-oscuro">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-3 py-1 bg-bg-gris/50 text-xs font-semibold rounded-full text-texto-claro">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
