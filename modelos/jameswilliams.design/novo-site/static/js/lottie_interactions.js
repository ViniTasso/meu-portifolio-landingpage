// lottie-interactions.js
// Gerencia playback de animações Lottie e interações scroll-controlled avançadas
// Complementa interactions.js com controle de reprodução (play/pause/scrub)

// ─────────────────────────────────────────────
// LOTTIE PLAYBACK CONTROL — toca/pausa a animação via scroll
// Padrão: play quando scroll está no topo (0-10%), pause ao rolar para baixo
// Suporta: play/pause, scrubbing (frame control), speed control
// ─────────────────────────────────────────────

// Armazenar instâncias de Lottie para controle posterior
window.lottieInstances = window.lottieInstances || {};

function getLottieInstance(element) {
  /**
   * Obtém a instância de Lottie carregada em um elemento
   * Tenta várias abordagens:
   * 1. Propriedade direta do elemento (adicionada por Lottie)
   * 2. Instância armazenada em window.lottieInstances
   * 3. Carrega manualmente se não encontrar
   */
  if (!element) return null;

  // Tenta acessar via propriedade do elemento (Lottie adiciona automaticamente)
  if (element.lottie) return element.lottie;

  // Tenta via ID armazenado
  const lottieId = element.getAttribute("data-w-id") || element.getAttribute("id");
  if (lottieId && window.lottieInstances[lottieId]) {
    return window.lottieInstances[lottieId];
  }

  // Se nada funcionar, carrega manualmente
  if (typeof lottie !== "undefined" && element.getAttribute("data-src")) {
    const src = element.getAttribute("data-src");
    const instance = lottie.loadAnimation({
      container: element,
      renderer: element.getAttribute("data-renderer") || "svg",
      loop: element.getAttribute("data-loop") !== "0",
      autoplay: false, // Começar pausado para controlar via script
      path: src
    });

    if (lottieId) {
      window.lottieInstances[lottieId] = instance;
    }

    return instance;
  }

  return null;
}

function initLottiePlaybackControl() {
  /**
   * Controla playback de Lottie baseado em scroll position
   * - Dentro dos primeiros 10% → play
   * - Depois de 10% → pause
   *
   * Usa "scrubbing light" mode:
   *   Quando scroll < 10%, ajusta velocidade para sincronizar com scroll
   *   Quando scroll > 10%, pausa completamente
   */
  const lottieEl = document.querySelector(
    ".lottie-animation[data-src], [data-animation-type='lottie'][data-src]"
  );

  if (!lottieEl) return;

  const instance = getLottieInstance(lottieEl);
  if (!instance) return;

  let lastScrollY = window.scrollY;
  const PLAYBACK_THRESHOLD = window.innerHeight * 0.10; // 10% da viewport
  let isPlaying = false;

  // Estado inicial: parado
  instance.pause();
  instance.goToAndStop(0, true);

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      const scrollPercentage =
        (currentScrollY / document.documentElement.scrollHeight) * 100;

      // Dentro dos primeiros 10% → ativa playback
      if (currentScrollY < PLAYBACK_THRESHOLD) {
        if (!isPlaying) {
          isPlaying = true;
          instance.play();
        }

        // Light scrubbing: ajusta frame baseado na posição do scroll
        // Frame é proporcional ao scroll dentro da zona (0-10%)
        const framePosition = Math.min(
          (currentScrollY / PLAYBACK_THRESHOLD) * 100,
          100
        );
        const totalFrames = instance.totalFrames;
        const targetFrame = (framePosition / 100) * totalFrames;

        // Suaviza o movimento do frame (evita jumps)
        instance.goToAndStop(targetFrame, true);
      } else {
        // Passou de 10% → pausa
        if (isPlaying) {
          isPlaying = false;
          instance.pause();
        }
      }

      lastScrollY = currentScrollY;
    },
    { passive: true }
  );
}

// ─────────────────────────────────────────────
// REVEAL ON SCROLL — elementos aparecem/desaparecem ao entrar em viewport
// Padrão: fade in quando elemento entra na viewport
// Aplicável a: sections, cards, imagens
// ─────────────────────────────────────────────

function initRevealOnScroll() {
  /**
   * Detecta elementos com classe .reveal-on-scroll e faz fade in
   * quando entram na viewport.
   *
   * Uso: adicione class="reveal-on-scroll" a qualquer elemento
   * Opções via atributos:
   *   data-reveal-duration="600" (ms)
   *   data-reveal-delay="0" (ms)
   *   data-reveal-offset="50" (px padding inferior para trigger)
   */
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.revealed) {
          const duration =
            parseFloat(entry.target.getAttribute("data-reveal-duration")) || 600;
          const delay =
            parseFloat(entry.target.getAttribute("data-reveal-delay")) || 0;

          entry.target.dataset.revealed = "true";

          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: duration / 1000,
            delay: delay / 1000,
            ease: "power2.out",
            overwrite: true
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" // Trigger 50px antes de entrar
    }
  );

  revealElements.forEach((el) => {
    // Estado inicial
    if (!el.style.opacity) {
      gsap.set(el, { opacity: 0, y: 20 });
    }
    observer.observe(el);
  });
}

// ─────────────────────────────────────────────
// PARALLAX SCROLL — profundidade visual com movimento em camadas
// Padrão: elementos se movem em velocidades diferentes ao scroll
// Aplicável a: imagens de fundo, heróis, decoração
// ─────────────────────────────────────────────

function initParallaxScroll() {
  /**
   * Aplica efeito parallax a elementos com class .parallax
   * Velocidade controlada por atributo data-parallax-speed (0.1 a 1)
   *   0.1 = move muito lentamente (profundo)
   *   0.5 = move na metade da velocidade do scroll (padrão)
   *   1.0 = move junto com o scroll
   *
   * Uso:
   *   <div class="parallax" data-parallax-speed="0.3">...</div>
   */
  const parallaxElements = document.querySelectorAll("[data-parallax-speed]");
  if (!parallaxElements.length) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;

      parallaxElements.forEach((element) => {
        const speed =
          parseFloat(element.getAttribute("data-parallax-speed")) || 0.5;
        const yPos = scrollY * speed;

        gsap.set(element, {
          y: yPos,
          overwrite: "auto"
        });
      });
    },
    { passive: true }
  );
}

// ─────────────────────────────────────────────
// SCROLL PROGRESS BAR — barra visual de progresso da página
// Padrão: barra horizontal no topo que preenche conforme scroll desce
// ─────────────────────────────────────────────

function initScrollProgressBar() {
  /**
   * Cria barra de progresso de scroll se elemento existir
   * Procura por: [class*="progress"], [data-scroll-progress]
   *
   * Uso:
   *   <div class="scroll-progress-bar"></div>
   */
  const progressBar = document.querySelector(
    '[data-scroll-progress], .scroll-progress-bar, [class*="progress-bar"]'
  );
  if (!progressBar) return;

  window.addEventListener(
    "scroll",
    () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / totalScroll) * 100;

      gsap.to(progressBar, {
        width: percentage + "%",
        overwrite: "auto"
      });
    },
    { passive: true }
  );
}

// ─────────────────────────────────────────────
// FLOATING ELEMENTS — animação flutuante contínua
// Padrão: elementos fluem suavemente para cima e para baixo
// Aplicável a: badges, ícones de decoração, elementos de destaque
// ─────────────────────────────────────────────

function initFloatingElements() {
  /**
   * Faz elementos flutuarem continuamente
   * Usa class="floating" ou atributo data-floating="true"
   * Velocidade em data-float-duration (padrão: 3s)
   * Amplitude em data-float-amount (padrão: 20px)
   */
  const floatingElements = document.querySelectorAll(
    ".floating, [data-floating='true']"
  );
  if (!floatingElements.length) return;

  floatingElements.forEach((element) => {
    const duration =
      parseFloat(element.getAttribute("data-float-duration")) || 3;
    const amount = parseFloat(element.getAttribute("data-float-amount")) || 20;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(element, {
      y: -amount,
      duration: duration,
      ease: "sine.inOut"
    });
  });
}

// Anima o ponto do Lottie
function animateLottieDot() {
  const dot = document.querySelector('.lottie-animation-dotlottie');
  console.log("Dot element:", dot);
  if (dot) {
    gsap.to(dot, {
      y: -50,           // Move 60px para cima
      duration: 2,
      ease: "power1.inOut",
      yoyo: false,       // Volta para baixo
      repeat: -1        // Loop infinito
    })// O segredo: Garantimos que ele resete ANTES de começar a aparecer
    .set(dot, { y: 0, opacity: 0 }) 
    
    // Aumentamos a duração aqui e garantimos que não haja sobreposição
    .to(dot, { 
      opacity: 1, 
      duration: 1.0, // Agora ele deve levar 1 segundo inteiro para aparecer
      ease: "none"
    }, "+=0.2"); // Este "+=0.2" adiciona um pequeno silêncio antes de reaparecer
  }
}

// ─────────────────────────────────────────────
// STAGGER ANIMATION — sequência de animações em cascata
// Padrão: itens animam um após outro
// Aplicável a: listas, galerias, menus
// ─────────────────────────────────────────────

function initStaggerAnimation() {
  /**
   * Anima sequencialmente itens de um container
   * Use class="stagger-container" no container pai
   * Itens filhos animam automaticamente em sequência
   *
   * Opções:
   *   data-stagger-delay="0.1" (delay entre items, em segundos)
   *   data-stagger-duration="0.5" (duração de cada item)
   *   data-stagger-from="opacity" (propriedade inicial: opacity, y, x, scale)
   *
   * Uso:
   *   <div class="stagger-container" data-stagger-delay="0.15">
   *     <div>Item 1</div>
   *     <div>Item 2</div>
   *   </div>
   */
  const staggerContainers = document.querySelectorAll(".stagger-container");
  if (!staggerContainers.length) return;

  staggerContainers.forEach((container) => {
    const items = container.children;
    const staggerDelay =
      parseFloat(container.getAttribute("data-stagger-delay")) || 0.1;
    const staggerDuration =
      parseFloat(container.getAttribute("data-stagger-duration")) || 0.5;
    const staggerFrom = container.getAttribute("data-stagger-from") || "opacity";

    // Set initial state
    const initialState = {};
    initialState[staggerFrom] = staggerFrom === "opacity" ? 0 : 20;
    gsap.set(items, initialState);

    // Anima em cascata
    const tl = gsap.timeline();
    Array.from(items).forEach((item, index) => {
      const animationState = {};
      animationState[staggerFrom] = staggerFrom === "opacity" ? 1 : 0;

      tl.to(item, animationState, index * staggerDelay, staggerDuration);
    });
  });
}

// ─────────────────────────────────────────────
// INIT MASTER — carrega todas as interações
// ─────────────────────────────────────────────

function initAdvancedInteractions() {
  if (typeof gsap === "undefined" || typeof lottie === "undefined") {
    // typeof lottie
    // requer a biblioteca:
    // - <script src="https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie.min.js"></script>
    requestAnimationFrame(initAdvancedInteractions);
    return;
  }

  // Lottie playback control (animação do scroll icon, etc)
  initLottiePlaybackControl();

  // Padrões reutilizáveis para futuras funcionalidades
  initRevealOnScroll();
  // initParallaxScroll();
  initScrollProgressBar();
  initFloatingElements();
  initStaggerAnimation();
  animateLottieDot();
}

// Executar quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", initAdvancedInteractions);