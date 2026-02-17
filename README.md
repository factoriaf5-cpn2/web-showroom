# 🌐 Web Showroom

> Proyecto educativo de demostración de desarrollo web profesional

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Descripción

**Web Showroom** es un proyecto educativo diseñado para demostrar las mejores prácticas en el desarrollo web frontend. Este proyecto implementa un sitio web completo y funcional utilizando HTML semántico, CSS moderno y JavaScript vanilla con arquitectura orientada a objetos.

El proyecto es ideal para:
- 🎓 Cursos de desarrollo web
- 📚 Material de referencia para estudiantes
- 🔍 Ejemplo de código limpio y bien documentado
- 💡 Demostración de patrones y buenas prácticas

---

## ✨ Características

### 🎨 Diseño y UI/UX
- ✅ Diseño responsive (Mobile-first)
- ✅ Tema claro/oscuro con persistencia en localStorage
- ✅ Animaciones suaves y transiciones
- ✅ Interfaz moderna y atractiva
- ✅ Efectos de scroll interactivos

### 🏗️ HTML Semántico
- ✅ Estructura semántica completa (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ✅ Accesibilidad con atributos ARIA
- ✅ Meta tags SEO optimizados
- ✅ Formulario accesible con validación

### 🎯 CSS Moderno
- ✅ Variables CSS (Custom Properties)
- ✅ Flexbox y CSS Grid
- ✅ Mobile-first responsive design
- ✅ Transiciones y animaciones
- ✅ Media queries para diferentes dispositivos
- ✅ Soporte para `prefers-reduced-motion`

### ⚡ JavaScript
- ✅ Arquitectura orientada a objetos con clases
- ✅ Código modular y reutilizable
- ✅ Validación de formularios en tiempo real
- ✅ Intersection Observer API para animaciones
- ✅ LocalStorage para persistencia
- ✅ Event delegation y manejo eficiente de eventos

---

## 📁 Estructura del Proyecto

```
web-showroom/
│
├── index.html          # Documento HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

### 📄 Archivos Principales

#### `index.html`
Documento HTML5 bien estructurado con:
- Secciones semánticas claramente definidas
- Header con navegación responsive
- Sección Hero de presentación
- Grid de servicios
- Galería de proyectos
- Formulario de contacto completo
- Footer informativo

#### `styles.css`
Hoja de estilos organizada con:
- Variables CSS para temas y configuración
- Reset y estilos base
- Componentes modulares
- Sistema de diseño responsive
- Soporte para tema oscuro
- Media queries optimizadas

#### `script.js`
JavaScript modular que incluye:
- **ThemeManager**: Gestión de tema claro/oscuro
- **NavigationManager**: Menú responsive y smooth scroll
- **FormManager**: Validación de formularios
- **ScrollAnimations**: Animaciones al hacer scroll
- Utilidades y helpers

---

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- (Opcional) Servidor local para desarrollo

### Opción 1: Abrir directamente
```bash
# Simplemente abre el archivo index.html en tu navegador
open index.html
```

### Opción 2: Usar un servidor local

#### Con Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

#### Con Python
```bash
# Python 3
python -m http.server 8000

# Abre en el navegador: http://localhost:8000
```

#### Con Node.js
```bash
# Instala http-server globalmente
npm install -g http-server

# Ejecuta el servidor
http-server

# Abre en el navegador: http://localhost:8080
```

---

## 🎓 Conceptos Demostrados

### HTML Semántico
```html
<!-- Uso correcto de elementos semánticos -->
<header>, <nav>, <main>, <section>, <article>, <footer>
<form>, <label>, <input>, <button>
```

### CSS Variables
```css
/* Definición de variables */
:root {
  --color-primary: #4f46e5;
  --spacing-md: 1.5rem;
}

/* Uso de variables */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
}
```

### JavaScript Moderno
```javascript
// Clases ES6
class ThemeManager {
  constructor() { /* ... */ }
  toggleTheme() { /* ... */ }
}

// Intersection Observer
const observer = new IntersectionObserver(callback, options);

// LocalStorage
localStorage.setItem('theme', 'dark');
```

---

## 🎨 Personalización

### Cambiar Colores
Modifica las variables CSS en `styles.css`:
```css
:root {
  --color-primary: #4f46e5;        /* Color principal */
  --color-primary-dark: #4338ca;   /* Color principal oscuro */
  --color-primary-light: #818cf8;  /* Color principal claro */
}
```

### Ajustar Espaciado
```css
:root {
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
}
```

### Modificar Fuentes
```css
:root {
  --font-family-base: 'Tu Fuente', sans-serif;
  --font-size-base: 1rem;
}
```

---

## 📱 Responsive Design

El sitio está optimizado para múltiples dispositivos:

| Dispositivo | Breakpoint | Características |
|-------------|------------|-----------------|
| 📱 Móvil | < 480px | Menú hamburguesa, layout vertical |
| 📱 Tablet | 481px - 768px | Navegación plegable, grids adaptados |
| 💻 Desktop | > 769px | Navegación completa, multi-columna |

---

## ♿ Accesibilidad

El proyecto implementa prácticas de accesibilidad:

- ✅ Atributos ARIA (`aria-label`, `aria-expanded`, `aria-required`)
- ✅ Navegación por teclado
- ✅ Contraste de colores adecuado
- ✅ Textos alternativos y descriptivos
- ✅ Soporte para `prefers-reduced-motion`
- ✅ Formularios semánticos con labels

---

## 🧪 Validación

### Validar HTML
Usa el [W3C Validator](https://validator.w3.org/):
1. Abre https://validator.w3.org/
2. Sube tu archivo `index.html`
3. Verifica que no haya errores

### Validar CSS
Usa el [CSS Validator](https://jigsaw.w3.org/css-validator/):
1. Abre https://jigsaw.w3.org/css-validator/
2. Sube tu archivo `styles.css`
3. Verifica la compatibilidad

### Validar JavaScript
```bash
# Usando ESLint (opcional)
npm install -g eslint
eslint script.js
```

---

## 📚 Recursos de Aprendizaje

### Documentación Oficial
- [MDN Web Docs - HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Herramientas Útiles
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [CSS-Tricks](https://css-tricks.com/) - Guías y trucos de CSS
- [JavaScript.info](https://javascript.info/) - Tutorial moderno de JavaScript

### Extensiones VS Code Recomendadas
- Live Server
- Prettier - Code Formatter
- ESLint
- Auto Rename Tag
- Path Intellisense

---

## 🔧 Características Técnicas Destacadas

### 1. Sistema de Temas
```javascript
// Detecta preferencia del sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Guarda en localStorage
localStorage.setItem('theme', 'dark');
```

### 2. Validación de Formularios
```javascript
// Validación en tiempo real
input.addEventListener('blur', () => validateField(input));

// Expresiones regulares
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### 3. Animaciones con Intersection Observer
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
```

---

## 🐛 Solución de Problemas

### La página no se ve correctamente
- ✅ Verifica que los archivos CSS y JS estén en la misma carpeta
- ✅ Comprueba la consola del navegador (F12) para errores
- ✅ Asegúrate de usar un navegador moderno

### El tema oscuro no persiste
- ✅ Verifica que localStorage esté habilitado
- ✅ Comprueba la consola para errores de JavaScript
- ✅ Prueba en modo normal (no incógnito)

### Las animaciones no funcionan
- ✅ Verifica soporte para Intersection Observer
- ✅ Desactiva extensiones del navegador que puedan interferir
- ✅ Comprueba la configuración de `prefers-reduced-motion`

---

## 🤝 Contribuciones

Este es un proyecto educativo abierto. Sugerencias para mejoras:

1. **Fork** el proyecto
2. **Crea** una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Añade nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

---

## 📝 Mejores Prácticas Implementadas

### HTML
- ✅ Uso de HTML5 semántico
- ✅ Atributos de accesibilidad
- ✅ Meta tags apropiados
- ✅ Validación W3C

### CSS
- ✅ Mobile-first approach
- ✅ Variables CSS para mantenibilidad
- ✅ BEM-like naming conventions
- ✅ Comentarios descriptivos
- ✅ Organización modular

### JavaScript
- ✅ Programación orientada a objetos
- ✅ Principio DRY (Don't Repeat Yourself)
- ✅ Separación de responsabilidades
- ✅ Manejo de errores
- ✅ Código autodocumentado

---

## 📊 Compatibilidad de Navegadores

| Navegador | Versión Mínima |
|-----------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

### APIs Utilizadas
- ✅ CSS Variables (Custom Properties)
- ✅ Intersection Observer API
- ✅ LocalStorage API
- ✅ ES6 Classes
- ✅ Arrow Functions
- ✅ Template Literals

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

## 👨‍💻 Autor

Proyecto creado como material educativo para el **Curso de Desarrollo Web 2026**

---

## 📞 Contacto

- 📧 Email: info@webshowroom.com
- 🌐 Web: [Web Showroom](https://webshowroom.com)
- 📱 Teléfono: +34 123 456 789

---

## 🎯 Próximas Mejoras

- [ ] Añadir modo de alto contraste
- [ ] Implementar internacionalización (i18n)
- [ ] Añadir tests unitarios
- [ ] Mejorar accesibilidad con screen readers
- [ ] Añadir Service Worker para PWA
- [ ] Implementar lazy loading de imágenes
- [ ] Optimizar rendimiento con Lighthouse

---

## ⭐ Agradecimientos

Gracias por utilizar este proyecto como recurso educativo. Si te ha sido útil, considera darle una estrella ⭐

---

<div align="center">
  <p>Hecho con ❤️ para la educación en desarrollo web</p>
  <p>© 2026 Web Showroom - Proyecto Educativo</p>
</div>
