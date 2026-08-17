import React from 'react';

const certs = [
  { name: "Desarrollo Backend (Node JS, Express, Typescript y Docker)", issuer: "BIGSCHOOL", year: "2025" },
  { name: "Diseño Web Responsive", issuer: "SOLOLEARN", year: "2023" },
  { name: "Codificación para especialistas en marketing", issuer: "SOLOLEARN", year: "2023" }
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="w-full max-w-4xl px-6 mt-24 mx-auto">
      <h2 className="text-3xl font-bold text-texto-oscuro mb-8 border-b border-bg-gris pb-3">Certificaciones y Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <div key={idx} className="bg-bg-blanco border border-bg-gris p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-transform flex flex-col justify-between">
            <div>
              <div className="text-texto-oscuro mb-2 text-2xl">🎓</div>
              <h3 className="text-lg font-bold text-texto-oscuro mb-2 leading-snug">{cert.name}</h3>
            </div>
            <div className="mt-4 pt-4 border-t border-bg-gris flex justify-between items-center text-sm">
              <span className="font-semibold text-texto-oscuro/70">{cert.issuer}</span>
              <span className="text-texto-claro/60">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
