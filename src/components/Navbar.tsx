"use client";
import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determinar si el navbar debe forzar el modo claro (cuando el menú móvil está abierto arriba)
  const isSolidMenu = isMobileMenuOpen || isScrolled;

  const navBg = isSolidMenu 
    ? "bg-bg-blanco/75 backdrop-blur-xl border-white/50 shadow-lg"
    : "bg-transparent border-transparent shadow-none";
    
  const textColor = isSolidMenu ? "text-texto-oscuro" : "text-bg-blanco";
  const underlineBg = isSolidMenu ? "bg-texto-oscuro" : "bg-bg-blanco";
  
  const buttonStyle = isSolidMenu
    ? "bg-texto-oscuro text-bg-blanco hover:bg-texto-claro"
    : "bg-bg-blanco text-texto-oscuro hover:bg-bg-gris";

  return (
    <nav className={`${isScrolled ? 'fixed animate-in slide-in-from-top-[-100%] duration-500' : 'absolute'} top-4 left-0 right-0 mx-4 md:mx-auto w-[calc(100%-2rem)] md:w-full max-w-5xl z-50 px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center rounded-xl transition-all duration-300 border ${navBg}`}>
      
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className={`flex items-center gap-2 select-none hover:opacity-80 transition-opacity cursor-pointer ${textColor}`}>
          <AnimatedLogo />
          <div className="flex items-baseline gap-1.5">
            <span className="italic text-xl md:text-2xl">Ing.</span>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight">Juan Farias</span>
          </div>
        </div>
        
        {/* Mobile Menu Button with Animated Icons */}
        <div className="flex items-center gap-2 md:hidden">
          <div className={textColor}>
            <ThemeToggle />
          </div>
          <button 
            className={`focus:outline-none transition-colors relative w-7 h-7 flex items-center justify-center ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Menu Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" 
              className={`absolute w-7 h-7 transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* Close Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" 
              className={`absolute w-7 h-7 transition-all duration-300 transform ${isMobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex space-x-6 text-sm font-medium items-center ${textColor}`}>
        <a href="#sobre-mi" className="relative group transition-colors duration-300">
          Sobre mí
          <span className={`absolute -bottom-1 left-1/2 w-0 h-[2px] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${underlineBg}`}></span>
        </a>
        <a href="#servicios" className="relative group transition-colors duration-300">
          Servicios
          <span className={`absolute -bottom-1 left-1/2 w-0 h-[2px] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${underlineBg}`}></span>
        </a>
        <a href="#experiencia" className="relative group transition-colors duration-300">
          Experiencia
          <span className={`absolute -bottom-1 left-1/2 w-0 h-[2px] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${underlineBg}`}></span>
        </a>
        <a href="#proyectos" className="relative group transition-colors duration-300">
          Proyectos
          <span className={`absolute -bottom-1 left-1/2 w-0 h-[2px] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full ${underlineBg}`}></span>
        </a>
        <a href="#contacto" className={`px-5 py-2 rounded-md transition-all hover:scale-105 shadow-md ${buttonStyle}`}>
          Contactar
        </a>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Dropdown (Animated with max-height and opacity) */}
      <div 
        className={`w-full md:hidden flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 pt-8 pb-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 w-full text-texto-oscuro font-medium">
          <a href="#sobre-mi" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Sobre mí</a>
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Servicios</a>
          <a href="#experiencia" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Experiencia</a>
          <a href="#proyectos" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">Proyectos</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 bg-texto-oscuro text-bg-blanco rounded-md hover:bg-texto-claro transition-all shadow-md w-full text-center">
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
}
