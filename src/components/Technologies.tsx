"use client";
import React, { useEffect, useRef, useState } from 'react';
import { 
  SiHtml5, SiReact, SiNextdotjs, SiTailwindcss, SiSass, 
  SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiPostgresql, 
  SiMysql, SiSupabase, SiGooglecloud, SiDocker, 
  SiGit, SiGithub, SiGitlab, SiTypescript
} from 'react-icons/si';
import { MdSearch, MdApi } from 'react-icons/md';

const techGroups = [
  { 
    category: "Frontend & SEO", 
    items: [
      { name: "HTML Semántico", icon: SiHtml5, color: "#E34F26" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "SASS", icon: SiSass, color: "#CC6699" },
      { name: "SEO", icon: MdSearch, color: "#4CAF50" }
    ] 
  },
  { 
    category: "Backend & Bases de Datos", 
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }
    ] 
  },
  { 
    category: "DevOps & Cloud", 
    items: [
      { name: "Google Cloud (GCP)", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD pipelines", icon: SiGitlab, color: "#FC6D26" }
    ] 
  },
  { 
    category: "Herramientas", 
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "APIs REST", icon: MdApi, color: "#FF9900" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
    ] 
  }
];

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Umbral aumentado al 30% para que el usuario haya bajado lo suficiente antes de disparar la animación
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tecnologias" className="relative w-full mt-24 py-12 overflow-hidden" ref={sectionRef}>
      {/* Figura abstracta izquierda */}
      <svg className="absolute top-10 left-[-5%] w-64 h-64 md:w-96 md:h-96 text-texto-oscuro opacity-10 dark:opacity-40 animate-float transition-opacity duration-700" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tech-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon className="fill-current dark:fill-[url(#tech-grad-1)]" points="0,30 60,0 100,50 30,100" />
        <polygon className="fill-current dark:fill-[url(#tech-grad-1)]" points="60,0 100,50 80,100" opacity="0.6" />
        <polygon className="fill-current dark:fill-[url(#tech-grad-1)]" points="0,30 30,100 10,70" opacity="0.4" />
      </svg>
      
      {/* Figura abstracta derecha */}
      <svg className="absolute bottom-10 right-[-5%] w-72 h-72 md:w-[400px] md:h-[400px] text-texto-oscuro opacity-10 dark:opacity-40 animate-float-reverse transition-opacity duration-700" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tech-grad-2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon className="fill-current dark:fill-[url(#tech-grad-2)]" points="40,0 100,30 70,100 0,50" />
        <polygon className="fill-current dark:fill-[url(#tech-grad-2)]" points="40,0 0,50 20,20" opacity="0.6" />
        <polygon className="fill-current dark:fill-[url(#tech-grad-2)]" points="100,30 70,100 90,80" opacity="0.4" />
      </svg>

      <div className="w-full max-w-4xl px-6 mx-auto relative z-10">
        {/* Título más lento */}
        <h2 className={`text-3xl font-bold text-texto-oscuro mb-8 border-b border-bg-gris pb-3 transition-all duration-1000 transform ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          Tecnologías y Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techGroups.map((group, idx) => (
            <div 
              key={idx} 
              className={`bg-bg-blanco/80 backdrop-blur-sm border border-bg-gris p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-1000 transform ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${idx * 250}ms` }}
            >
              <h3 className="text-lg font-bold text-texto-oscuro mb-5">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, itemIdx) => {
                  const IconComponent = item.icon;
                  return (
                    <span 
                      key={item.name} 
                      className={`flex items-center gap-2 px-3 py-2 bg-texto-oscuro text-bg-blanco text-sm font-medium rounded-md shadow-sm transition-all duration-1000 transform ease-out hover:scale-105 hover:bg-texto-claro ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${(idx * 250) + (itemIdx * 100) + 400}ms` }}
                    >
                      <IconComponent size={18} style={{ color: item.color }} />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
