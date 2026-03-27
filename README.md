# Portfolio - Owen Hernandez

Para correr el porfolio 

Portfolio personal desarrollado con React, Vite, Tailwind CSS y Framer Motion.

## 📋 Requisitos previos

- Node.js (versión 18 o superior)
- npm (viene con Node.js)

## 🚀 Instalación y ejecución

1. **Clonar o descargar el proyecto** en tu máquina.

2. **Abrir la terminal** en la carpeta del proyecto.

3. **Instalar dependencias**:
   ```bash
   npm install

## Ejecutar proyecto
1. npm run dev
2. El proyecto estará disponible en http://localhost:5173

📁 Estructura de archivos importantes

src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx       # Barra de navegación
│   ├── Hero.jsx         # Sección de presentación
│   ├── About.jsx        # Sobre mí
│   ├── Projects.jsx     # Lista de proyectos
│   ├── Skills.jsx       # Habilidades (badges)
│   ├── Contact.jsx      # Formulario e información de contacto
│   └── Footer.jsx       # Pie de página
├── data/
│   └── projects.js      # Datos de los proyectos (títulos, descripciones, etc.)
├── App.jsx              # Componente principal que une todo
├── index.css            # Estilos globales (Tailwind + animaciones)
└── main.jsx             # Punto de entrada de React

🎨 Personalización
1. Cambiar información personal

Archivo	Qué modificar
components/Header.jsx	Línea 20: el texto del logo Owen Hernandez
components/Hero.jsx	Línea 13-17: nombre y rol
components/About.jsx	Líneas 14-23: texto descriptivo
components/Contact.jsx	Líneas 49-67: email, teléfono, ubicación, redes sociales
components/Footer.jsx	Líneas 6-13: copyright y enlaces

2. Modificar proyectos

Edita el archivo src/data/projects.js. Cada proyecto tiene los campos:

title: Título del proyecto

description: Descripción breve

technologies: Array de tecnologías usadas

image: Ruta de la imagen (puede ser URL externa o local en public/)

demoLink: Enlace a demo (si no tienes, déjalo "#")

repoLink: Enlace al repositorio (si no tienes, déjalo "#)

Para imágenes locales: coloca tus imágenes en la carpeta public/images/ y usa la ruta "/images/nombre-archivo.jpg".

3. Modificar habilidades
Edita el array skillsList en components/Skills.jsx (líneas 4-8). Agrega o quita tecnologías según necesites.

4. Cambiar colores y estilos
Los estilos globales están en index.css. Allí encontrarás:

Fondo animado: clase .bg-animated (cambia colores del gradiente)

Círculos flotantes: clases .circle-1, .circle-2, .circle-3

Colores de texto: secciones section, encabezados h1, etc.

Tarjetas de proyectos: clase .project-card

También puedes modificar los colores en los componentes usando las clases de Tailwind.

5. Agregar o quitar secciones
En App.jsx, el componente principal renderiza las secciones en orden. Puedes comentar o agregar nuevos componentes importándolos previamente.

Actualiacion de rutas para visualizacion de imagenes