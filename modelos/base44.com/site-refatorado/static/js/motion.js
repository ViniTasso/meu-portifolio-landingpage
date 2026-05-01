const MOTION_SELECTORS = [
  "#comp-mkfn6wz6 .feature-card",
  "#comp-mkkxum1d .prompt-showcase",
  "#comp-mkla53qm .pricing-card",
  "#comp-mknvgyk7 .faq-list article",
  "#comp-mknu6y0a .comp-mknu6y0a-container",
];

function revealAll(elements) {
  elements.forEach((element) => element.classList.add("is-visible"));
}

export function initViewportMotion() {
  const elements = MOTION_SELECTORS
    .flatMap((selector) => [...document.querySelectorAll(selector)]);

  if (!elements.length) {
    return;
  }

  document.documentElement.classList.add("js-motion-ready");
  elements.forEach((element) => element.classList.add("motion-target"));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealAll(elements);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        instance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
}
