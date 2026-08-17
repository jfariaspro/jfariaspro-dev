# 🚀 Guía de Trabajo: Sistema de Skills y Memoria (Portafolio Web)

Esta guía te enseñará cómo usar este sistema para construir tu portafolio de forma organizada.

---

## 1. El Flujo Maestro (Día a Día)

### Paso 1: El Inicio (Cargar Memoria)
*   **Qué decir:** *"Carga el brain del proyecto"* o *"Ponme al día"*.

### Paso 2: El Trabajo (Usar Especialistas)
*   **Ejemplo:** *"Necesito una sección Hero animada"* (El agente activará `frontend-ui`).
*   **Ejemplo:** *"Configura el enrutamiento para los proyectos"* (El agente activará `logic-typescript`).

### Paso 3: El Cierre (Guardar Memoria)
*   **Qué decir:** *"Guarda la sesión"* o *"Actualiza el brain"*.

---

## 2. Caso de Uso Real: Creando la Galería de Proyectos

### 1. Preparación (Git)
Dile al agente: *"Crea una rama de desarrollo llamada `feat/gallery`"*.

### 2. Diseño de la Interfaz
Dile al agente: *"Usa tus skills de UI para diseñar una grilla de proyectos usando TailwindCSS"*.

### 3. Lógica y Datos Mocks
Dile al agente: *"Crea la lógica en TypeScript para renderizar la lista de proyectos desde un archivo JSON"*.

### 4. Pruebas y Subida (Deploy)
1.  **A `main`:** *"Sube los cambios a la rama `main`"*.
2.  **A `prod` / Vercel:** Vercel se encargará del despliegue automático al pushear a `main`.

---

## 3. Guía de Prompts (Qué decirle al Agente)

| Momento | Lo que debes decir (Prompt) |
| :--- | :--- |
| **Al empezar** | "Hola, carga el brain del proyecto y dime en qué nos quedamos." |
| **Para diseñar** | "Necesito diseñar una [página/componente] que se vea profesional y premium." |
| **Para programar** | "Implementa la lógica en React/Next.js para [función] asegurándote de que el código sea limpio." |
| **Para Git** | "Sube estos cambios a la rama `main` con un mensaje descriptivo." |
| **Al terminar** | "Hemos terminado por hoy. Resume lo que hicimos y guarda el brain." |
