/*
  initScrollStacking
  ─────────────────
  Adiciona position:sticky ao heading "Considere-se sem limites" SOMENTE
  enquanto a seção de features (#comp-mkfn6wz6) está visível na viewport.

  Fora desse intervalo, o limitless section volta ao fluxo normal e não
  interfere nas seções posteriores (Pricing, FAQ, Sendoff).

  Mecanismo CSS (scroll-stacking.css):
    - .comp-mkfn6wz6-container tem grid-template-rows: 100vh × 4
    - Cada .feature-card-row é position:sticky top:0 com z-index crescente
    - Ao rolar, cada card cobre o anterior por baixo (efeito stacking)
*/
export function initScrollStacking() {
  const limitless = document.getElementById("comp-mkfmbp8m");
  const features = document.getElementById("comp-mkfn6wz6");

  if (!limitless || !features) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) return;

  const isDesktop = () => window.innerWidth >= 768;

  const setStacking = (active) => {
    if (!isDesktop()) {
      limitless.classList.remove("stacking-active");
      return;
    }
    limitless.classList.toggle("stacking-active", active);
  };

  const observer = new IntersectionObserver(
    ([entry]) => setStacking(entry.isIntersecting),
    { threshold: 0 }
  );

  observer.observe(features);

  window.addEventListener(
    "resize",
    () => {
      if (!isDesktop()) limitless.classList.remove("stacking-active");
    },
    { passive: true }
  );
}
