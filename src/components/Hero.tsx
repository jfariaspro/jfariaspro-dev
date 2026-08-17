"use client";
import React, { useState, useEffect, useRef } from 'react';

const roles = [
  "Desarrollador FullStack",
  "DevOps & Cloud",
  "Arquitecto de Software",
  "Consultor de Monitoreo"
];

// Hook personalizado completamente desacoplado de React renders
function useTypewriter(words: string[]) {
  const [displayText, setDisplayText] = useState("");

  // Todo el estado vive en UN solo ref — completamente inmune a Strict Mode
  const stateRef = useRef({
    wordIndex: 0,
    charIndex: 0,
    isDeleting: false,
    isPaused: false,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const step = () => {
      const s = stateRef.current;
      const word = words[s.wordIndex % words.length];

      if (s.isPaused) {
        // Salir de la pausa
        s.isPaused = false;
        s.isDeleting = !s.isDeleting;

        if (!s.isDeleting) {
          // Cambiar a la siguiente palabra ANTES de empezar a escribir
          s.wordIndex += 1;
          s.charIndex = 0;
        }

        timeoutId = setTimeout(step, 80);
        return;
      }

      if (!s.isDeleting) {
        // Escribir una letra
        s.charIndex += 1;
        const currentWord = words[s.wordIndex % words.length];
        setDisplayText(currentWord.substring(0, s.charIndex));

        if (s.charIndex >= currentWord.length) {
          // Terminó de escribir: pausar 2 segundos
          s.isPaused = true;
          timeoutId = setTimeout(step, 2000);
        } else {
          timeoutId = setTimeout(step, 90);
        }
      } else {
        // Borrar una letra
        s.charIndex -= 1;
        setDisplayText(word.substring(0, s.charIndex));

        if (s.charIndex <= 0) {
          // Terminó de borrar: pausar 400ms
          s.isPaused = true;
          timeoutId = setTimeout(step, 400);
        } else {
          timeoutId = setTimeout(step, 40);
        }
      }
    };

    // Iniciar con retraso inicial
    timeoutId = setTimeout(step, 600);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sin dependencias: el estado vive en stateRef

  return displayText;
}

export default function Hero() {
  const displayText = useTypewriter(roles);

  return (
    <section id="sobre-mi" className="relative pt-40 pb-20 w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">

      {/* Fondo Tema Claro */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out opacity-100 dark:opacity-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/80"></div>

      {/* Fondo Tema Oscuro */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out opacity-0 dark:opacity-100 bg-[url('/hero-bg-light.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-white/80"></div>

      <div className="w-full max-w-4xl px-6 flex flex-col items-start gap-8 relative z-10 mx-auto transition-colors duration-700">
        <div className="space-y-4">
          <p className="text-xl font-medium text-bg-gris">Hola, soy Juan Farias</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-bg-blanco leading-tight min-h-[100px] md:min-h-[80px]">
            <span>{displayText}</span>
            <span className="inline-block animate-pulse ml-0.5 text-bg-blanco">|</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-gris/90 max-w-2xl leading-relaxed">
            Ingeniero en Informática especializado en el desarrollo y despliegue de soluciones tecnológicas. Con experiencia en la creación de APIs empresariales e integraciones complejas, hasta la orquestación de infraestructuras y monitoreo crítico de microservicios.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-6">
          <a href="#proyectos" className="px-8 py-3 bg-bg-blanco text-texto-oscuro font-semibold rounded-md hover:bg-bg-gris transition-all shadow-lg hover:-translate-y-1">
            Ver proyectos
          </a>
          <a href="/CV-Juan Farias.pdf" target="_blank" className="px-8 py-3 bg-transparent border-2 border-bg-blanco text-bg-blanco font-semibold rounded-md hover:bg-bg-blanco/10 transition-all hover:-translate-y-1">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
