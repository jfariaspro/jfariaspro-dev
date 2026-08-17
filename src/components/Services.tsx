"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaHeadset, FaProjectDiagram, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    title: "Desarrollo de Software a Medida",
    desc: "Creación de plataformas escalables y sistemas SaaS adaptados a necesidades empresariales y de negocios.",
    icon: FaCode,
    span: "md:col-span-7",
    delay: 600 // Tarda más en aparecer
  },
  {
    title: "Soporte Técnico L1/L2",
    desc: "Monitoreo, atención y resolución de incidencias en infraestructuras, redes y sistemas críticos.",
    icon: FaHeadset,
    span: "md:col-span-5",
    delay: 150 // Aparece casi de inmediato
  },
  {
    title: "Arquitectura de Software",
    desc: "Planificación de arquitecturas robustas orientadas a escalabilidad, seguridad y eficiencia.",
    icon: FaProjectDiagram,
    span: "md:col-span-5",
    delay: 850 // Es la última en aparecer
  },
  {
    title: "Asesoramiento Técnico",
    desc: "Consultoría especializada para optimización de recursos, DevOps y toma de decisiones tecnológicas.",
    icon: FaLightbulb,
    span: "md:col-span-7",
    delay: 350 // Aparece en el medio
  }
];

export default function Services() {
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
      { threshold: 0.3 } // Se activa cuando el 30% es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="w-full max-w-4xl px-6 mt-24 mx-auto" ref={sectionRef}>
      <h2 className={`text-3xl font-bold text-texto-oscuro mb-8 border-b border-bg-gris pb-3 transition-all duration-1000 transform ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        Servicios Freelance
      </h2>

      {/* Sistema Bento Grid de 12 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {services.map((svc, idx) => {
          const IconComponent = svc.icon;
          return (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-bg-gris p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-1000 ease-out hover:-translate-y-2 col-span-1 ${svc.span} ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-16'}`}
              style={{ transitionDelay: `${svc.delay}ms` }}
            >
              {/* Ícono gigante de fondo (Marca de agua) */}
              <div className="absolute -right-8 -bottom-8 text-texto-oscuro opacity-[0.03] pointer-events-none transition-all duration-700 ease-out group-hover:scale-[1.2] group-hover:opacity-[0.08]">
                <IconComponent size={220} />
              </div>

              {/* Contenido principal */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-bg-blanco rounded-xl shadow-sm flex items-center justify-center mb-6 text-texto-oscuro transition-transform duration-300 group-hover:scale-110">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-texto-oscuro mb-3">{svc.title}</h3>
                  <p className="text-texto-claro/80 leading-relaxed font-medium">{svc.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
