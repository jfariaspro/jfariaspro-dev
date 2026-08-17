"use client";
import React, { useState } from 'react';
import ContactModal from './ContactModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contacto" className="w-full max-w-4xl px-6 mt-24 mb-16 mx-auto">
      <div className="bg-texto-oscuro text-bg-blanco rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-bg-blanco/80 text-lg">
            Contáctame para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel mediante soluciones tecnológicas sólidas.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <span className="bg-bg-blanco/10 px-4 py-2 rounded-full">+58 424-1499265</span>
            <span className="bg-bg-blanco/10 px-4 py-2 rounded-full">+58 412-9352968</span>
            <span className="bg-bg-blanco/10 px-4 py-2 rounded-full hover:bg-bg-blanco/20 transition-colors">fariasj142@gmail.com</span>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer px-8 py-4 bg-bg-blanco text-texto-oscuro font-bold rounded-xl hover:bg-bg-gris transition-colors w-full md:w-auto text-center text-lg shadow-lg hover:scale-105"
          >
            Contactar ahora
          </button>
        </div>
      </div>

      <footer className="mt-16 text-center text-texto-claro/60 text-sm border-t border-bg-gris pt-8">
        <p>© 2026 Juan Farias. Todos los derechos reservados.</p>
        <div className="mt-6 flex justify-center gap-4">
          {/* Botón de LinkedIn (Desplegable Horizontalmente) */}
          <a
            href="https://www.linkedin.com/in/jfariasdev/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-start w-[44px] overflow-hidden rounded-full bg-[#0077b5] text-white hover:w-[130px] transition-all duration-500 ease-out shadow-md"
          >
            <div className="flex-shrink-0 w-[44px] h-[44px] flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <span className="font-semibold text-sm pr-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">LinkedIn</span>
          </a>

          {/* Botón de GitHub (Desplegable Horizontalmente) */}
          <a
            href="https://github.com/jfariaspro"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-start w-[44px] overflow-hidden rounded-full bg-[#333] text-white hover:w-[125px] transition-all duration-500 ease-out shadow-md"
          >
            <div className="flex-shrink-0 w-[44px] h-[44px] flex items-center justify-center">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <span className="font-semibold text-sm pr-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">GitHub</span>
          </a>

          {/* Botón de WhatsApp (Desplegable Horizontalmente) */}
          <a
            href="https://wa.me/584241499265?text=Hola%20Juan%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20un%20proyecto."
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-start w-[44px] overflow-hidden rounded-full bg-[#25D366] text-white hover:w-[135px] transition-all duration-500 ease-out shadow-md"
          >
            <div className="flex-shrink-0 w-[44px] h-[44px] flex items-center justify-center">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <span className="font-semibold text-sm pr-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">WhatsApp</span>
          </a>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
