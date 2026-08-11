/* ==========================================================================
   Portfolio — Jason Alexander Castillo Rojas
   Internacionalización (Español / English)
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-lang";
  const DEFAULT_LANG = "es";

  const i18n = {
    es: {
      "meta.title": "Jason Alexander Castillo Rojas · Desarrollador Backend (.NET)",
      "meta.description": "Portafolio de Jason Alexander Castillo Rojas — Desarrollador Backend .NET y C#",

      "nav.projects": "Proyectos",
      "nav.experience": "Experiencia",
      "nav.contact": "Contacto",

      "hero.title": "Hola, soy Jason Alexander<br />Castillo Rojas",
      "hero.tagline": "Desarrollador backend enfocado en aplicaciones web escalables con C#, .NET y Entity Framework, apoyadas en bases de datos SQL. Con experiencia en contabilidad y finanzas que me permite entender procesos de negocio y traducirlos en soluciones tecnológicas eficientes.",
      "hero.actions.projects": "Ver proyectos",
      "hero.actions.contact": "Contáctame",

      "skills.sub": "Tecnologías y herramientas que uso día a día.",
      "skills.data.title": "Datos",
      "skills.frontend.title": "Frontend (integración)",
      "skills.quality.title": "Calidad y otras",
      "skills.backend.i6": "Docker (básico)",
      "skills.data.i1": "Consultas y migraciones EF",
      "skills.data.i2": "Modelado de datos",
      "skills.data.i3": "Transacciones",

      "projects.title": "Proyectos",
      "projects.sub": "Proyecto destacado: un sistema completo backend + frontend.",
      "featured.tag": "Proyecto destacado · Full-stack",
      "featured.desc": "Plataforma web para la gestión de eventos de danza cultural en Bogotá. Sistema completo con autenticación JWT, control de roles (Admin, Gestor y Grupo), inscripciones a eventos, gestión de grupos y participantes, comentarios, categorías y localidades. Backend construido con arquitectura limpia en capas.",
      "featured.why.title": "¿Por qué este proyecto?",
      "featured.why.body": "Es mi proyecto de tesis en Ingeniería de Sistemas (UNAD). Nació del interés por dar visibilidad a los grupos de danza folclórica y cultural de Bogotá, que organizan y promocionan sus eventos de forma dispersa. Quería un sistema donde un administrador publique eventos, los grupos se inscriban y los gestores administren participantes e inscripciones, todo con roles y seguridad reales. No es solo un ejercicio académico: es una plataforma que resuelve un problema concreto de mi ciudad.",
      "featured.backend.i1": "Arquitectura limpia en capas (Application, Domain, Infrastructure, Transversal)",
      "featured.backend.i2": "Auth JWT con ASP.NET Core Identity y roles personalizados",
      "featured.backend.i3": "EF Core con migraciones y seeding de datos de referencia",
      "featured.backend.i4": "Validación con FluentValidation y filtro global de validación",
      "featured.backend.i5": "Logging con Serilog y middleware global de excepciones",
      "featured.backend.i6": "10+ controllers: Auth, Events, Groups, Participants, Inscriptions, Comments y más",
      "featured.backend.i7": "Documentación con Swagger / OpenAPI",
      "featured.frontend.i1": "SPA con Vite, React Router v6 y Axios",
      "featured.frontend.i2": "Interceptor de JWT para peticiones autenticadas",
      "featured.frontend.i3": "Rutas protegidas por rol (Admin / Gestor / Grupo)",
      "featured.frontend.i4": "Vistas por rol: dashboard, CRUD de eventos, inscripciones, grupos, usuarios",
      "featured.frontend.i5": "Página pública de eventos con detalle e inscripción",
      "featured.frontend.i6": "Tipos TypeScript alineados con los DTOs del backend",
      "featured.list.i1": "Proyecto de tesis — Ingeniería en Sistemas (UNAD)",
      "featured.list.i2": "Backend y frontend desplegables por separado, con proxy de desarrollo en Vite",
      "featured.list.i3": "Semilla con datos de prueba y credenciales de administrador",

      "upcoming.title": "Próximo proyecto",
      "upcoming.desc1": "Aquí mostraré mi siguiente proyecto backend con .NET.",
      "upcoming.desc2": "Más ejemplos de APIs, microservicios o herramientas de automatización.",
      "upcoming.note": "En construcción — se agregará pronto.",

      "experience.title": "Experiencia",
      "experience.sub": "Trayectoria profesional como desarrollador y en áreas de negocio.",
      "experience.finanzauto.title": "Desarrollador Junior — Finanzauto S.A.",
      "experience.finanzauto.period": "Oct 2024 · Dic 2025",
      "experience.finanzauto.desc": "Desarrollo y mantenimiento de APIs REST con C#, .NET, Entity Framework y SQL Server. Creación de endpoints e integración con APIs externas. Resolución de bugs, QA y soporte técnico. Uso de Docker para entornos y despliegues.",
      "experience.sinco.title": "Desarrollador Junior — Sinco ERP",
      "experience.sinco.period": "Feb 2022 · Ene 2024",
      "experience.sinco.desc": "Desarrollo y mantenimiento de aplicaciones web con Entity Framework, SQL y C#. Construcción de arquitecturas robustas para aplicaciones web.",
      "experience.iq.title": "Operador I — IQ Outsourcing",
      "experience.iq.period": "Jul 2017 · Dic 2021",
      "experience.iq.desc": "Digitación y gestión de cuentas médicas, homologación, control de calidad según manuales tarifarios ISS y SOAT, análisis de glosas y apoyo administrativo.",
      "experience.carvajal.title": "Auxiliar Operativo — Carvajal S.A.",
      "experience.carvajal.period": "Dic 2016 · Abr 2017",
      "experience.carvajal.desc": "Digitación de cuentas médicas, indexación, homologación, control de calidad y manejo de la plataforma OnBase.",

      "contact.title": "Contacto",
      "contact.intro": "¿Tienes un proyecto en mente o buscas un desarrollador .NET? Hablemos.",
      "contact.email": "Escríbeme",
      "contact.wa.href": "https://wa.me/573227869726?text=Hola%20Alexander%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20contigo",
      "contact.badge.i2": "Español · Nativo",

      "footer.role": "Desarrollador Backend .NET"
    },

    en: {
      "meta.title": "Jason Alexander Castillo Rojas · Backend Developer (.NET)",
      "meta.description": "Portfolio of Jason Alexander Castillo Rojas — Backend .NET and C# Developer",

      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",

      "hero.title": "Hi, I'm Jason Alexander<br />Castillo Rojas",
      "hero.tagline": "Backend developer focused on scalable web applications with C#, .NET and Entity Framework, backed by SQL databases. With experience in accounting and finance that lets me understand business processes and turn them into efficient technical solutions.",
      "hero.actions.projects": "View projects",
      "hero.actions.contact": "Contact me",

      "skills.sub": "Technologies and tools I use every day.",
      "skills.data.title": "Data",
      "skills.frontend.title": "Frontend (integration)",
      "skills.quality.title": "Quality & other",
      "skills.backend.i6": "Docker (basic)",
      "skills.data.i1": "EF queries & migrations",
      "skills.data.i2": "Data modeling",
      "skills.data.i3": "Transactions",

      "projects.title": "Projects",
      "projects.sub": "Featured project: a complete backend + frontend system.",
      "featured.tag": "Featured project · Full-stack",
      "featured.desc": "Web platform for managing cultural dance events in Bogotá. A complete system with JWT authentication, role control (Admin, Manager, and Group), event registrations, management of groups and participants, comments, categories, and localities. Backend built with clean layered architecture.",
      "featured.why.title": "Why this project?",
      "featured.why.body": "It is my thesis project for a Systems Engineering degree (UNAD). It was born from an interest in giving visibility to the folk and cultural dance groups of Bogotá, who organize and promote their events in a scattered way. I wanted a system where an administrator publishes events, groups register, and managers administer participants and registrations, all with real roles and security. It's not just an academic exercise: it's a platform that solves a concrete problem in my city.",
      "featured.backend.i1": "Clean layered architecture (Application, Domain, Infrastructure, Transversal)",
      "featured.backend.i2": "JWT authentication with ASP.NET Core Identity and custom roles",
      "featured.backend.i3": "EF Core with migrations and reference data seeding",
      "featured.backend.i4": "Validation with FluentValidation and a global validation filter",
      "featured.backend.i5": "Logging with Serilog and a global exception middleware",
      "featured.backend.i6": "10+ controllers: Auth, Events, Groups, Participants, Inscriptions, Comments and more",
      "featured.backend.i7": "Documentation with Swagger / OpenAPI",
      "featured.frontend.i1": "SPA with Vite, React Router v6 and Axios",
      "featured.frontend.i2": "JWT interceptor for authenticated requests",
      "featured.frontend.i3": "Role-protected routes (Admin / Manager / Group)",
      "featured.frontend.i4": "Role-based views: dashboard, event CRUD, registrations, groups, users",
      "featured.frontend.i5": "Public events page with detail and registration",
      "featured.frontend.i6": "TypeScript types aligned with the backend DTOs",
      "featured.list.i1": "Thesis project — Systems Engineering (UNAD)",
      "featured.list.i2": "Separately deployable backend and frontend, with a Vite dev proxy",
      "featured.list.i3": "Seeded with sample data and admin credentials",

      "upcoming.title": "Next project",
      "upcoming.desc1": "Here I'll showcase my next .NET backend project.",
      "upcoming.desc2": "More examples of APIs, microservices or automation tools.",
      "upcoming.note": "Under construction — coming soon.",

      "experience.title": "Experience",
      "experience.sub": "Professional background as a developer and in business areas.",
      "experience.finanzauto.title": "Junior Developer — Finanzauto S.A.",
      "experience.finanzauto.period": "Oct 2024 · Dec 2025",
      "experience.finanzauto.desc": "Development and maintenance of REST APIs with C#, .NET, Entity Framework and SQL Server. Creation of endpoints and integration with external APIs. Bug fixing, QA and technical support. Use of Docker for environments and deployments.",
      "experience.sinco.title": "Junior Developer — Sinco ERP",
      "experience.sinco.period": "Feb 2022 · Jan 2024",
      "experience.sinco.desc": "Development and maintenance of web applications with Entity Framework, SQL and C#. Building robust architectures for web applications.",
      "experience.iq.title": "Operator I — IQ Outsourcing",
      "experience.iq.period": "Jul 2017 · Dec 2021",
      "experience.iq.desc": "Medical billing data entry (alphanumeric), homologation, quality control according to ISS and SOAT fee schedules, analysis of discrepancies (glosas) and administrative support.",
      "experience.carvajal.title": "Operations Assistant — Carvajal S.A.",
      "experience.carvajal.period": "Dec 2016 · Apr 2017",
      "experience.carvajal.desc": "Medical billing data entry, indexing, homologation, quality control and management of the OnBase platform.",

      "contact.title": "Contact",
      "contact.intro": "Have a project in mind or looking for a .NET developer? Let's talk.",
      "contact.email": "Email me",
      "contact.wa.href": "https://wa.me/573227869726?text=Hi%20Alexander%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20talk%20to%20you",
      "contact.badge.i2": "Spanish · Native",

      "footer.role": "Backend .NET Developer"
    }
  };

  let currentLang = DEFAULT_LANG;

  function applyLanguage(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const key = el.dataset.i18nHref;
      if (dict[key] !== undefined) el.setAttribute("href", dict[key]);
    });

    document.title = dict["meta.title"];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll(".lang-toggle__option[data-lang]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage no disponible: ignorar */
    }
    applyLanguage(lang);
  }

  function init() {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignorar */
    }
    currentLang = saved && i18n[saved] ? saved : DEFAULT_LANG;

    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        setLanguage(currentLang === "es" ? "en" : "es");
      });
    }

    applyLanguage(currentLang);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
