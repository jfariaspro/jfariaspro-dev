# INICIADOR del Proyecto: Portafolio Web

Este proyecto está diseñado bajo una arquitectura de **Orquestación Modular**, adaptada específicamente para un entorno puramente **Frontend** con Next.js y TailwindCSS.

## 1. Filosofía de Diseño: El Modo Orquestador

El sistema funciona bajo el concepto de un **Cerebro Central** (el Agente) que coordina múltiples **Especialistas** (las Skills).

### Principios Fundamentales:
- **Modularidad por Clusters:** Las habilidades se agrupan en categorías lógicas orientadas al Frontend.
- **Memoria de Sesión (Project Brain):** Un sistema de persistencia que permite que el contexto del proyecto sobreviva entre diferentes chats o sesiones de trabajo.
- **Descubrimiento Dinámico:** El agente analiza la estructura de carpetas en tiempo de ejecución.

---

## 2. Estructura de Directorios

La arquitectura se organiza de la siguiente manera:

### 📂 `/.agents/`
Contiene las instrucciones maestras.

### 📂 `/.brain/`
Es el almacenamiento físico de la memoria del proyecto.

### 📂 `/.agents/skills/` (El Motor de Capacidades)
Las habilidades están divididas en **Clusters**.

#### ☁️ Cloud & DevOps (`/.agents/skills/cloud-devops/`)
Despliegue y Nube (Git, Vercel).

#### 🎨 Frontend & UI (`/.agents/skills/frontend-ui/`)
Especializado en interfaces modernas, TailwindCSS y experiencia de usuario.

#### 🧠 Lógica & TypeScript (`/.agents/skills/logic-typescript/`)
Arquitectura de código React/Next.js robusta.

#### ⚙️ Gestión & Memoria (`/.agents/skills/project-brain/`)
La skill central que gestiona la carga y guardado del contexto (LOAD/SAVE).

#### 🛠️ Herramientas Especializadas (`/.agents/skills/specialized-tools/`)
Herramientas de nicho (SEO, optimizaciones).

---

## 3. Flujo de Trabajo (Workflow)

1. **Inicio:** El usuario solicita una tarea (ej: *"Crea la sección de galería de proyectos"*).
2. **Carga de Contexto:** El Agente usa `project-brain` para leer el estado actual.
3. **Ejecución:** Se invoca `frontend-ui` o `logic-typescript` para generar los componentes.
4. **Persistencia:** Al terminar, el Agente usa `project-brain` (modo SAVE) para documentar el cambio en `.brain/`.

---

## 4. Mapa del Proyecto (La Escalera)

```text
/modern-portfolio/
├── .agents/                    # Reglas e instrucciones maestras
│   └── skills/                 # Biblioteca de habilidades
│       ├── cloud-devops/       # Despliegue (Git, Vercel)
│       ├── frontend-ui/        # Diseño y UI (Tailwind, UX)
│       ├── logic-typescript/   # Arquitectura Next.js
│       ├── project-brain/      # Sistema de Memoria (LOAD/SAVE)
│       └── specialized-tools/  # Herramientas de nicho (SEO)
├── .brain/                     # Memoria persistente del proyecto
├── src/                        # Código fuente de Next.js
├── public/                     # Archivos estáticos
└── INICIADOR.md                # Este documento
```
