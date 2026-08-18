import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "r4-conecta-api",
    title: "R4 Conecta API - Middleware de Integración Bancaria",
    role: "Desarrollador Backend / Integrador de Sistemas",
    deployment: "Google Cloud Platform (GCP) utilizando Docker / Cloud Run",
    elevatorPitch: "R4 Conecta API es una robusta capa de integración (middleware) construida desde cero para conectar sistemas externos con la infraestructura bancaria oficial de R4 Conecta (v3.0). El sistema actúa como un puente seguro y eficiente para procesar operaciones financieras críticas como pagos móviles (C2P), domiciliaciones y consultas de tasas del BCV.",
    fullDescription: "R4 Conecta API es una robusta capa de integración (middleware) construida desde cero para conectar sistemas externos con la infraestructura bancaria oficial de R4 Conecta (v3.0). El sistema actúa como un puente seguro y eficiente para procesar operaciones financieras críticas como pagos móviles (C2P), domiciliaciones, créditos/débitos inmediatos y consultas de tasas del BCV. Diseñada bajo principios de Arquitectura Limpia, la API está contenerizada para un despliegue escalable en GCP, garantizando la integridad y seguridad de cada transacción mediante firmas criptográficas (HMAC-SHA256), un sistema de licenciamiento propietario y validación estricta de datos, al tiempo que proporciona su propia interfaz web para documentación técnica interactiva.",
    tags: ["Node.js", "TypeScript", "Express.js", "GCP", "Docker", "Zod", "EJS", "HMAC-SHA256"],
    features: [
      "Seguridad Bancaria y Licenciamiento: Implementación de un sistema de licencias propietario mediante hashes encriptados dependientes de fechas. Autenticación de cada petición con firmas HMAC-SHA256, validación de IPs (Whitelist) para Webhooks/Notificaciones bancarias y protección Rate Limiting.",
      "Motor de Operaciones Financieras: Endpoints estructurados para todo el ciclo de transacciones: cobros y anulaciones C2P, dispersión de pagos, débitos y créditos inmediatos (cuentas y números telefónicos), domiciliaciones y consultas automatizadas de la tasa oficial del BCV.",
      "Arquitectura Limpia y Tipado Fuerte: Separación estricta de responsabilidades (Rutas, Controladores, Servicios). Uso intensivo de TypeScript y Zod para garantizar una validación de esquemas inviolable en tiempo de ejecución y un manejo centralizado de más de 60 códigos de error bancarios.",
      "Portal de Documentación Web: Motor de plantillas EJS con Bootstrap integrado directamente en el servidor que despliega: manuales referenciales, documentación técnica con resaltado de sintaxis, colecciones listas para importar en Bruno API y un dashboard público para consultar la tasa BCV en tiempo real.",
      "Despliegue Cloud Nativo (GCP): Arquitectura contenerizada mediante Docker, optimizada para integrarse con los pipelines de CI/CD de Google Cloud Build. Despliegue elástico y de alta disponibilidad preparado para entornos Serverless (Cloud Run), complementado con trazabilidad de eventos mediante logs estructurados con Winston."
    ],
    images: [
      { src: "/projects/r4-conecta-api/0.jpg", alt: "R4 Conecta API - Plataforma Multipantalla" },
      { src: "/projects/r4-conecta-api/1.jpg", alt: "R4 Conecta API - Dashboard Tasa BCV" },
      { src: "/projects/r4-conecta-api/2.png", alt: "R4 Conecta API - Funcionalidades Integradas" },
      { src: "/projects/r4-conecta-api/3.png", alt: "R4 Conecta API - Panel de Pagos Móviles (C2P)" },
      { src: "/projects/r4-conecta-api/4.png", alt: "R4 Conecta API - Cobro e Interfaz C2P" },
      { src: "/projects/r4-conecta-api/5.png", alt: "R4 Conecta API - Dispersión de Pagos" },
      { src: "/projects/r4-conecta-api/6.png", alt: "R4 Conecta API - Gestión de Webhooks e IP Whitelist" }
    ]
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
    id: "devspacio",
    title: "devSpacio - Organizador de Tareas Kanban Avanzado",
    role: "Desarrollador Full Stack",
    deployment: "Supabase (PostgreSQL) / Vite (React)",
    elevatorPitch: "devSpacio es un organizador de tareas avanzado estilo Kanban construido para optimizar el flujo de trabajo en equipos de desarrollo, despliegues y soporte técnico. Diseñado con un enfoque en rendimiento y experiencia de usuario, cuenta con seguridad RLS, drag-and-drop interactivo y herramientas integradas para generación de reportes y asistencia mediante Inteligencia Artificial.",
    fullDescription: "devEspacio es un organizador de tareas avanzado estilo Kanban construido para optimizar el flujo de trabajo en equipos de desarrollo, despliegues y soporte técnico. El sistema permite la creación, asignación y control del ciclo de vida de cada tarea de forma visual. Diseñado con un enfoque en rendimiento y experiencia de usuario, cuenta con un sistema de seguridad (Row Level Security) para proteger la privacidad de los datos, capacidades interactivas de arrastrar y soltar, y herramientas integradas para generación de reportes y asistencia mediante Inteligencia Artificial.",
    tags: ["React", "TypeScript", "Supabase (PostgreSQL)", "Zustand", "Tailwind CSS", "dnd-kit", "jsPDF", "Google Generative AI"],
    features: [
      "Autenticación y Seguridad RLS: Gestión de perfiles vinculados a Supabase Auth. Políticas de seguridad a nivel de fila (RLS) estrictas donde las tareas bloqueadas son visibles únicamente por su creador o usuario asignado, bloqueando visualmente el acceso en la interfaz al resto del equipo.",
      "Tablero Kanban Interactivo: Gestión visual dividida en seis categorías con codificación de colores. Sistema fluido de arrastrar y soltar (drag-and-drop) para el control de estados y soporte integrado para redacción de tareas con Markdown.",
      "Arquitectura Moderna: Tipado fuerte en todo el ecosistema (TypeScript y Zod), manejo de estado global eficiente mediante Zustand, y gestión de formularios dinámicos con React Hook Form.",
      "Herramientas Adicionales Integradas: Generación y exportación de reportes en PDF y capturas del estado de los proyectos en tiempo real (jsPDF y html2canvas).",
      "Asistencia IA Integrada: Implementación del SDK de Google Generative AI, con un agente especializado (devChat) como ingeniero de software para apoyar automatizadamente en la redacción o resumen de tareas del equipo."
    ],
    link: "https://devspacio.dpana.com.ve/",
    images: [
      { src: "/projects/devspacio/0.jpg", alt: "devSpacio - Entorno y Autenticación" },
      { src: "/projects/devspacio/1.png", alt: "devChat - Asistente de IA Integrado" },
      { src: "/projects/devspacio/2.png", alt: "devSpacio - Hub Principal" },
      { src: "/projects/devspacio/3.png", alt: "devSpacio - Tablero Kanban (Marketplay Front)" },
      { src: "/projects/devspacio/4.png", alt: "devSocial - Motor de Estrategia" },
      { src: "/projects/devspacio/5.png", alt: "devTOOLBOX - Ecosistema de Utilidades" },
      { src: "/projects/devspacio/6.png", alt: "devJSON - Visor de Arquitectura JSON" }
    ]
  }
];
