import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Collaborators from "@/components/Collaborators";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-blanco text-texto-claro flex flex-col items-center overflow-x-hidden selection:bg-texto-oscuro selection:text-bg-blanco scroll-smooth">
      
      {/* Figuras Abstractas Animadas de Fondo (Variadas y Espaciadas) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Superior Izquierda: Cuadrado rotado (Triangular idéntico al primero) */}
        <div className="absolute top-[5%] -left-20 w-72 h-72 bg-gradient-to-br from-gray-200 to-bg-blanco/40 rounded-[2rem] rotate-45 animate-float shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white/50"></div>
        
        {/* Medio Derecha: Círculo perfecto */}
        <div className="absolute top-[30%] -right-24 w-80 h-80 bg-gradient-to-tr from-gray-200 to-bg-blanco/40 rounded-full animate-float-reverse shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white/50"></div>
        
        {/* Medio Izquierda: Nuevo Cuadrado Rotado (Triangular idéntico al primero) para zona de Experiencia */}
        <div className="absolute top-[50%] -left-20 w-72 h-72 bg-gradient-to-tl from-gray-200 to-bg-blanco/40 rounded-[2rem] rotate-45 animate-float shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white/50"></div>
        
        {/* Centro Derecha-Abajo: Polígono (Rombo redondeado) */}
        <div className="absolute top-[70%] -right-16 w-72 h-72 bg-gradient-to-tr from-gray-200 to-bg-blanco/40 rounded-[3rem] rotate-[30deg] skew-x-12 animate-float-reverse shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white/50"></div>
        
        {/* Inferior Izquierda: Rectángulo ancho rotado */}
        <div className="absolute top-[92%] -left-32 w-96 h-64 bg-gradient-to-tl from-gray-200 to-bg-blanco/40 rounded-[4rem] -rotate-12 animate-float shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-white/50"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />
        <Hero />
        <Technologies />
        <Services />
        <Experience />
        <Projects />
        <Collaborators />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
