import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "la-imaginaria",
    title: "Plataforma SaaS de Loterías (La Imaginaria)",
    elevatorPitch: "Diseño y despliegue del sitio corporativo y sistema administrativo en Google Cloud. Creación de puente de impresión fiscal en Go.",
    fullDescription: "Diseño y despliegue del sitio corporativo y sistema administrativo en Google Cloud. Creación de puente de impresión fiscal en Go.",
    tags: ["Google Cloud", "Go", "React", "CI/CD"],
    images: [],
    colorPlaceholder: "bg-blue-100"
  },
  {
    id: "aipos",
    title: "AIPOS",
    role: "Fundador, Pionero y Desarrollador Full Stack",
    deployment: "Firebase (App Hosting) & Supabase",
    elevatorPitch: "AIPOS centraliza la operatividad de negocios y restaurantes mediante un avanzado sistema POS (facturación, cierres de caja), integración de comandas para mesoneros y pantallas KDS para cocina. Desarrollado como una Progressive Web App (PWA), destaca por su arquitectura Multi-tenant segura y un módulo administrativo integral.",
    fullDescription: "AIPOS es una plataforma SaaS (Software as a Service) y PWA (Progressive Web App) con arquitectura Multi-tenant, ideada y desarrollada desde cero para modernizar y centralizar la operatividad de negocios y restaurantes. El sistema abarca el ciclo comercial completo, combinando un Punto de Venta (POS) de alto rendimiento con un módulo administrativo robusto. Desde la gestión inicial de pedidos hasta la facturación y auditoría financiera, AIPOS garantiza un control estricto sobre las ventas, el personal y los ingresos bajo una infraestructura escalable.",
    tags: ["PWA", "React 18", "Next.js 15", "TypeScript", "Supabase", "Firebase App Hosting", "Tailwind CSS", "Framer Motion", "Zustand", "TanStack Query"],
    features: [
      "Caja y Facturación (POS): Interfaz de cobro rápida con soporte para múltiples métodos de pago, facturación detallada y flujos de seguridad para aperturas y cierres de caja (Reportes Z).",
      "Módulo Operativo para Restaurantes: Apartado de Mesoneros (toma de comandas) y KDS (Kitchen Display System).",
      "Administración Multi-tenant: Panel central que soporta la gestión de múltiples cuentas/negocios de forma aislada.",
      "Auditoría y Reportes: Generación de métricas de ventas, auditoría detallada de transacciones."
    ],
    link: "https://aipos.dpana.com.ve/",
    images: [
      { src: "/projects/aipos/0.jpg", alt: "AIPOS Dispositivos - Portátil y Móvil" },
      { src: "/projects/aipos/1.png", alt: "AIPOS Salón y Planos" },
      { src: "/projects/aipos/2.png", alt: "AIPOS Panel de Administración - Productos" },
      { src: "/projects/aipos/3.png", alt: "AIPOS Reportes Z" },
      { src: "/projects/aipos/4.png", alt: "AIPOS Ambientes y Mesas" },
      { src: "/projects/aipos/5.png", alt: "AIPOS KDS - Preparación" },
      { src: "/projects/aipos/6.png", alt: "AIPOS Interfaz de Cobro (POS)" }
    ]
  },
  {
    id: "mrw",
    title: "Sistema de Gestión Logística (MRW)",
    elevatorPitch: "Desarrollo y mantenimiento evolutivo de sistemas críticos en operaciones logísticas. Diseño de bases de datos para nuevos módulos.",
    fullDescription: "Desarrollo y mantenimiento evolutivo de sistemas críticos en operaciones logísticas. Diseño de bases de datos para nuevos módulos.",
    tags: ["Laravel", "PHP", "PostgreSQL"],
    images: [],
    colorPlaceholder: "bg-gray-200"
  },
  {
    id: "banco-mercantil",
    title: "Monitoreo Bancario (Banco Mercantil)",
    elevatorPitch: "Análisis crítico de errores y monitoreo de microservicios mediante SiteScope e Instana para mitigar impactos en la operatividad.",
    fullDescription: "Análisis crítico de errores y monitoreo de microservicios mediante SiteScope e Instana para mitigar impactos en la operatividad.",
    tags: ["SiteScope", "Kibana", "Infraestructura"],
    images: [],
    colorPlaceholder: "bg-purple-100"
  }
];
