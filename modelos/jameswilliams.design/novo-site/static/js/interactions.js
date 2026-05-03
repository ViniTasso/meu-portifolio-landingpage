// interactions.js
// Webflow IX2 interactions extraídas do webflow_schunk.js e normalizadas no padrão do main.js
// Gerencia: hover da navbar, smart-nav (scroll), visibilidade do lottie e hover dos cards de projeto.

// ─────────────────────────────────────────────
// NAVBAR ICON — hover no botão de e-mail
// Originado de: events e-192 / e-193 → actions a-59 / a-60
// Target: [data-w-id="5a5c3428-c239-86a4-05d7-c37ecb1cfa97"] (.navbar_message-wrapper)
// Comportamento: escala 1→1.04 + cor do ícone branco→misty-rose no hover
// Mídia: apenas desktop (≥ 992px)
// ─────────────────────────────────────────────
function initNavIconHover() {
  const messageWrapper = document.querySelector(
    '[data-w-id="5a5c3428-c239-86a4-05d7-c37ecb1cfa97"]'
  );
  if (!messageWrapper) return;

  const iconEl = messageWrapper.querySelector(".icon-embed-medium.is-border");
  const MISTY_ROSE = "rgb(249, 218, 217)";
  const WHITE = "rgb(255, 255, 255)";

  // Estado inicial (useFirstGroupAsInitialState: true em a-59)
  gsap.set(messageWrapper, { scale: 1 });
  if (iconEl) gsap.set(iconEl, { color: WHITE, outlineColor: WHITE });

  messageWrapper.addEventListener("mouseenter", () => {
    if (window.innerWidth < 992) return;
    gsap.to(messageWrapper, { scale: 1.04, duration: 0.2, ease: "power1.inOut" });
    if (iconEl) {
      gsap.to(iconEl, { color: MISTY_ROSE, outlineColor: MISTY_ROSE, duration: 0.2, ease: "power1.inOut" });
    }
  });

  messageWrapper.addEventListener("mouseleave", () => {
    if (window.innerWidth < 992) return;
    gsap.to(messageWrapper, { scale: 1, duration: 0.2, ease: "power1.inOut" });
    if (iconEl) {
      gsap.to(iconEl, { color: WHITE, outlineColor: WHITE, duration: 0.2, ease: "power1.inOut" });
    }
  });
}

// ─────────────────────────────────────────────
// NAVBAR MENU WRAPPER — hover expand do logo/nav
// Originado de: events e-375 / e-376 → actions a-78 / a-79
// Target: [data-w-id="5a5c3428-c239-86a4-05d7-c37ecb1cfa8a"] (.navbar_menu-wrapper)
// Comportamento: wrapper expande de 3rem para 9rem, revelando .menu_text-link e .navbar_spacer
// Mídia: apenas desktop (≥ 992px)
// ─────────────────────────────────────────────
function initNavMenuHover() {
  const menuWrapper = document.querySelector(
    '[data-w-id="5a5c3428-c239-86a4-05d7-c37ecb1cfa8a"]'
  );
  if (!menuWrapper) return;

  const textLink = menuWrapper.querySelector(".menu_text-link");
  const spacer   = menuWrapper.querySelector(".navbar_spacer");

  // Estado inicial (useFirstGroupAsInitialState: true em a-78)
  gsap.set(menuWrapper, { width: "3rem", height: "3rem" });
  if (textLink) gsap.set(textLink, { width: 0,       height: "1.3rem", overflow: "hidden" });
  if (spacer)   gsap.set(spacer,   { width: 0,       height: "1.3rem", overflow: "hidden" });

  menuWrapper.addEventListener("mouseenter", () => {
    if (window.innerWidth < 992) return;
    gsap.to(menuWrapper, { width: "9rem",   height: "3rem",   duration: 0.2, ease: "power1.inOut" });
    if (textLink) gsap.to(textLink, { width: "4.7rem", height: "1.3rem", duration: 0.2, ease: "power1.inOut" });
    if (spacer)   gsap.to(spacer,   { width: "0.5rem", height: "1.3rem", duration: 0.2, ease: "power1.inOut" });
  });

  menuWrapper.addEventListener("mouseleave", () => {
    if (window.innerWidth < 992) return;
    gsap.to(menuWrapper, { width: "3rem", height: "3rem",   duration: 0.2, ease: "power1.inOut" });
    if (textLink) gsap.to(textLink, { width: 0,       height: "1.3rem", duration: 0.2, ease: "power1.inOut" });
    if (spacer)   gsap.to(spacer,   { width: 0,       height: "1.3rem", duration: 0.2, ease: "power1.inOut" });
  });
}

// ─────────────────────────────────────────────
// SMART NAVBAR — esconde ao rolar para baixo, aparece ao rolar para cima
// Originado de: events e-385 / e-386 → actions a-80 / a-81
// Target: .w-nav (navbar principal)
// Comportamento:
//   scroll DOWN após 1% da página → y: 0 → -4rem (esconde)
//   scroll UP após 3% da página   → y: -4rem → 0 (revela)
// Mídia: todos os viewports
// ─────────────────────────────────────────────
function initSmartNavbar() {
  const navbar = document.querySelector(".w-nav");
  if (!navbar) return;

  let lastScrollY     = window.scrollY;
  let navbarHidden    = false;

  // Thresholds convertidos de % da altura total da página para px
  const getScrollDownThreshold = () => document.documentElement.scrollHeight * 0.01;
  const getScrollUpThreshold   = () => document.documentElement.scrollHeight * 0.03;

  gsap.set(navbar, { y: 0 });

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta          = currentScrollY - lastScrollY;

    if (delta > 0 && !navbarHidden && currentScrollY > getScrollDownThreshold()) {
      // Rolando para baixo → esconde (a-81: Menu Up 6)
      navbarHidden = true;
      gsap.killTweensOf(navbar);
      gsap.to(navbar, { y: "-4rem", duration: 0.1, ease: "power1.in", overwrite: true });
    } else if (delta < 0 && navbarHidden && currentScrollY > getScrollUpThreshold()) {
      // Rolando para cima após 3% → revela (a-80: Menu Down 6)
      navbarHidden = false;
      gsap.killTweensOf(navbar);
      gsap.to(navbar, { y: 0, duration: 0.25, ease: "power1.in", overwrite: true });
    } else if (currentScrollY <= getScrollUpThreshold()) {
      // Chegou ao topo → garante que o navbar está visível
      if (navbarHidden) navbarHidden = false;
      gsap.killTweensOf(navbar);
      gsap.to(navbar, { y: 0, duration: 0.25, ease: "power1.in", overwrite: true });
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// ─────────────────────────────────────────────
// LOTTIE SCROLL ICON — visibilidade pelo scroll
// Originado de: events e-408 / e-409 → actions a-83 / a-82
// Target: .lottie-animation [data-w-id="994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"]
// Comportamento:
//   scroll DOWN a partir de 0%  → opacidade 1 → 0 (a-82: Lottie Scroll Up)
//   scroll UP  após 10% da página → opacidade 0 → 1 (a-83: Lottie Scroll Down)
// Mídia: todos os viewports
// ─────────────────────────────────────────────
function initLottieScrollVisibility() {
  const lottieEl = document.querySelector(
    '[data-w-id="994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"]'
  );
  if (!lottieEl) return;

  let lastScrollY = window.scrollY;

  // threshold: 10% da altura total da página (scrollOffsetValue: 10% em e-408)
  const getFadeInThreshold = () => document.documentElement.scrollHeight * 0.10;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const delta          = currentScrollY - lastScrollY;

    if (delta > 0 && currentScrollY >= 0) {
      // Rolando para baixo → esconde ícone (a-82)
      gsap.to(lottieEl, { opacity: 0, duration: 0.5, ease: "power1.inOut", overwrite: true });
    } else if (delta < 0 && currentScrollY < getFadeInThreshold()) {
      // Rolando para cima e dentro dos 10% do topo → revela ícone (a-83)
      gsap.to(lottieEl, { opacity: 1, duration: 0.5, ease: "power1.inOut", overwrite: true });
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// ─────────────────────────────────────────────
// PROJECT CARD HOVER — escala sutil ao passar o mouse
// Originado de: events e-410/e-411 + múltiplos → actions a-74 / a-75
// Target: .latest_case-wrapper (todos os cards de projeto)
// Comportamento: scale 1 → 1.007 no mouseenter, volta a 1 no mouseleave
// ─────────────────────────────────────────────
function initProjectCardHover() {
  const cards = document.querySelectorAll(".latest_case-wrapper");
  cards.forEach((card) => {
    // Estado inicial (useFirstGroupAsInitialState: true em a-74)
    gsap.set(card, { scale: 1 });

    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.007, duration: 0.1, ease: "power1.inOut" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.1, ease: "power1.inOut" });
    });
  });
}

// ─────────────────────────────────────────────
// INIT — aguarda GSAP estar disponível
// ─────────────────────────────────────────────
function initInteractions() {
  if (typeof gsap === "undefined") {
    requestAnimationFrame(initInteractions);
    return;
  }

  initNavMenuHover();
  initNavIconHover();
  initSmartNavbar();
  initLottieScrollVisibility();
  initProjectCardHover();
}

document.addEventListener("DOMContentLoaded", initInteractions);