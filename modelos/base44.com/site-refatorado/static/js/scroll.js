function getHeaderOffset() {
  const headerValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-height")
    .trim();
  const parsed = Number.parseFloat(headerValue);
  return Number.isFinite(parsed) ? parsed : 88;
}

function resolveTarget(hash) {
  if (!hash || hash === "#") {
    return document.documentElement;
  }
  const id = decodeURIComponent(hash.slice(1));
  return document.getElementById(id);
}

function scrollToTarget(target) {
  if (target === document.documentElement) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const y = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

export function initAnchorScroll({ onNavigate } = {}) {
  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element
      ? event.target.closest("a[href^='#']")
      : null;

    if (!link) {
      return;
    }

    const href = link.getAttribute("href");
    const target = resolveTarget(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    scrollToTarget(target);
    if (href && href !== "#") {
      history.replaceState(null, "", href);
    }
    onNavigate?.();
  });
}
