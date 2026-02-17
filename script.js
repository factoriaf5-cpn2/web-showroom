/**
 * Web Showroom - JavaScript
 * Ejemplo de buenas prácticas en desarrollo web
 */

'use strict';

// ========================================
// 1. CONSTANTES Y CONFIGURACIÓN
// ========================================
const CONFIG = {
  THEME_KEY: 'webshowroom-theme',
  ANIMATION_DURATION: 300,
  SCROLL_OFFSET: 80
};

// ========================================
// 2. GESTIÓN DEL TEMA (DARK MODE)
// ========================================
class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector('.theme-toggle');
    this.themeIcon = document.querySelector('.theme-icon');
    this.currentTheme = this.getStoredTheme() || 'light';

    this.init();
  }

  init() {
    // Aplicar tema guardado
    this.applyTheme(this.currentTheme);

    // Event listener para el botón de tema
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  getStoredTheme() {
    try {
      return localStorage.getItem(CONFIG.THEME_KEY);
    } catch (error) {
      console.warn('No se pudo acceder a localStorage:', error);
      return null;
    }
  }

  setStoredTheme(theme) {
    try {
      localStorage.setItem(CONFIG.THEME_KEY, theme);
    } catch (error) {
      console.warn('No se pudo guardar en localStorage:', error);
    }
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.updateIcon(theme);
    this.currentTheme = theme;
    this.setStoredTheme(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  updateIcon(theme) {
    if (this.themeIcon) {
      this.themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }
}

// ========================================
// 3. NAVEGACIÓN RESPONSIVE
// ========================================
class NavigationManager {
  constructor() {
    this.menuToggle = document.querySelector('.menu-toggle');
    this.nav = document.querySelector('.nav');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.isMenuOpen = false;

    this.init();
  }

  init() {
    // Event listener para el botón de menú
    if (this.menuToggle && this.nav) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
    }

    // Cerrar menú al hacer clic en un enlace
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (event) => this.handleOutsideClick(event));

    // Smooth scroll para los enlaces de navegación
    this.setupSmoothScroll();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.nav.classList.toggle('active', this.isMenuOpen);
    this.menuToggle.setAttribute('aria-expanded', this.isMenuOpen);
  }

  closeMenu() {
    if (this.isMenuOpen && window.innerWidth <= 768) {
      this.toggleMenu();
    }
  }

  handleOutsideClick(event) {
    if (this.isMenuOpen &&
      !this.nav.contains(event.target) &&
      !this.menuToggle.contains(event.target)) {
      this.closeMenu();
    }
  }

  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');

        // Solo aplicar smooth scroll a enlaces internos
        if (href && href.startsWith('#')) {
          event.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const offsetTop = targetElement.offsetTop - CONFIG.SCROLL_OFFSET;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}

// ========================================
// 4. VALIDACIÓN Y GESTIÓN DEL FORMULARIO
// ========================================
class FormManager {
  constructor() {
    this.form = document.getElementById('contactForm');
    this.formSuccess = document.getElementById('formSuccess');

    this.validators = {
      name: this.validateName.bind(this),
      email: this.validateEmail.bind(this),
      subject: this.validateSubject.bind(this),
      message: this.validateMessage.bind(this)
    };

    this.init();
  }

  init() {
    if (!this.form) return;

    // Event listener para el envío del formulario
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));

    // Validación en tiempo real (blur)
    const inputs = this.form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validar todos los campos
    const isValid = this.validateAllFields();

    if (isValid) {
      // Simular envío del formulario
      this.submitForm();
    }
  }

  validateAllFields() {
    const inputs = this.form.querySelectorAll('.form-input');
    let isValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateField(input) {
    const fieldName = input.name;
    const validator = this.validators[fieldName];

    if (!validator) return true;

    const error = validator(input.value);

    if (error) {
      this.showError(input, error);
      return false;
    } else {
      this.clearError(input);
      return true;
    }
  }

  validateName(value) {
    if (!value.trim()) {
      return 'El nombre es obligatorio';
    }
    if (value.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    return null;
  }

  validateEmail(value) {
    if (!value.trim()) {
      return 'El email es obligatorio';
    }

    // Expresión regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Introduce un email válido';
    }
    return null;
  }

  validateSubject(value) {
    if (!value) {
      return 'Selecciona un asunto';
    }
    return null;
  }

  validateMessage(value) {
    if (!value.trim()) {
      return 'El mensaje es obligatorio';
    }
    if (value.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres';
    }
    return null;
  }

  showError(input, errorMessage) {
    input.classList.add('error');
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add('visible');
    }
  }

  clearError(input) {
    input.classList.remove('error');
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('visible');
    }
  }

  submitForm() {
    // Obtener datos del formulario
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // En un caso real, aquí se enviarían los datos al servidor
    console.log('Datos del formulario:', data);

    // Mostrar mensaje de éxito
    this.showSuccess();

    // Resetear el formulario
    this.form.reset();
  }

  showSuccess() {
    if (this.formSuccess) {
      this.formSuccess.textContent = '¡Mensaje enviado correctamente! Te responderemos pronto.';
      this.formSuccess.classList.add('visible');

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        this.formSuccess.classList.remove('visible');
      }, 5000);

      // Scroll al mensaje de éxito
      this.formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// ========================================
// 5. ANIMACIONES AL HACER SCROLL
// ========================================
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.init();
  }

  init() {
    // Verificar soporte para Intersection Observer
    if (!('IntersectionObserver' in window)) {
      console.warn('Intersection Observer no está soportado');
      return;
    }

    // Crear observer
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      this.observerOptions
    );

    // Observar elementos
    const animatedElements = document.querySelectorAll(
      '.service-card, .project-card, .contact-form'
    );

    animatedElements.forEach(element => {
      element.classList.add('scroll-hidden');
      this.observer.observe(element);
    });
  }

  handleIntersection(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Añadir delay progresivo para efecto en cascada
        setTimeout(() => {
          entry.target.classList.remove('scroll-hidden');
          entry.target.classList.add('scroll-visible');
        }, index * 100);

        // Dejar de observar el elemento
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// ========================================
// 6. UTILIDADES
// ========================================
const Utils = {
  /**
   * Debounce para optimizar eventos que se disparan frecuentemente
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  /**
   * Detectar si el usuario prefiere modo oscuro
   */
  prefersDarkMode() {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

// ========================================
// 7. INICIALIZACIÓN DE LA APLICACIÓN
// ========================================
class App {
  constructor() {
    this.themeManager = null;
    this.navigationManager = null;
    this.formManager = null;
    this.scrollAnimations = null;
  }

  init() {
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    console.log('🚀 Inicializando Web Showroom...');

    try {
      // Inicializar componentes
      this.themeManager = new ThemeManager();
      this.navigationManager = new NavigationManager();
      this.formManager = new FormManager();
      this.scrollAnimations = new ScrollAnimations();

      // Event listeners globales
      this.setupGlobalListeners();

      console.log('✅ Web Showroom iniciado correctamente');
    } catch (error) {
      console.error('❌ Error al inicializar la aplicación:', error);
    }
  }

  setupGlobalListeners() {
    // Actualizar año en el footer (si existe)
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.textContent = `© ${currentYear} Web Showroom. Proyecto educativo de desarrollo web.`;
    }

    // Listener para cambios en el tamaño de la ventana
    const handleResize = Utils.debounce(() => {
      // Cerrar menú móvil si la ventana se agranda
      if (window.innerWidth > 768 && this.navigationManager.isMenuOpen) {
        this.navigationManager.closeMenu();
      }
    }, 250);

    window.addEventListener('resize', handleResize);
  }
}

// ========================================
// 8. INICIAR LA APLICACIÓN
// ========================================
const app = new App();
app.init();

// Exportar para uso en consola (debugging)
if (typeof window !== 'undefined') {
  window.WebShowroom = {
    app,
    utils: Utils,
    version: '1.0.0'
  };
}
