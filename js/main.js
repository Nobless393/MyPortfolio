/* ==========================================================================
   Portfolio — Jason Alexander Castillo Rojas
   Interacciones y mejoras progresivas (vanilla JS, sin dependencias)
   ========================================================================== */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------------
     1. Navbar: sombra al hacer scroll
     ------------------------------------------------------------------------ */
  const nav = document.querySelector(".nav");

  function updateNavScroll() {
    if (!nav) return;
    nav.classList.toggle("nav--scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", updateNavScroll, { passive: true });
  updateNavScroll();

  /* ------------------------------------------------------------------------
     2. Navbar móvil: menú hamburguesa
     ------------------------------------------------------------------------ */
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  function closeMenu() {
    if (links) links.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cerrar el menú al pulsar un enlace o al pulsar fuera
    links.addEventListener("click", closeMenu);
    document.addEventListener("click", (e) => {
      if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  /* ------------------------------------------------------------------------
     3. Resaltar el enlace de la sección visible (scroll spy)
     ------------------------------------------------------------------------ */
  const navLinkItems = document.querySelectorAll(".nav__links a[href^='#']");

  function spySections() {
    const probe = window.scrollY + 90;
    let currentId = "";

    document.querySelectorAll("section[id], header[id]").forEach((section) => {
      if (section.offsetTop <= probe) currentId = section.id;
    });

    navLinkItems.forEach((link) => {
      const active = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("is-active", active);
    });
  }

  window.addEventListener("scroll", spySections, { passive: true });
  spySections();

  /* ------------------------------------------------------------------------
     4. Aparición suave de bloques al hacer scroll
     ------------------------------------------------------------------------ */
  const revealables = document.querySelectorAll(".reveal");

  function observeReveals() {
    if (!revealables.length || prefersReducedMotion) {
      revealables.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealables.forEach((el) => observer.observe(el));
  }

  observeReveals();

  /* ------------------------------------------------------------------------
     5. Año actual en el footer
     ------------------------------------------------------------------------ */
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
