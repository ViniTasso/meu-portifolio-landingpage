const MOBILE_WIDTH = 1099;

function getFocusable(container) {
  return container.querySelector(
    "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
  );
}

export function initMobileMenu() {
  const trigger = document.getElementById("mobile-menu-trigger");
  const menuLayers = [
    document.getElementById("comp-kd5px9q0-pinned-layer"),
    document.getElementById("comp-mok06b5e-pinned-layer"),
  ].filter(Boolean);
  const closeButtons = [
    document.getElementById("comp-kd5px9q0_r_comp-kkmqi5tc"),
    document.getElementById("comp-mok06b5e_r_comp-mok06b0c"),
  ].filter(Boolean);

  if (!trigger || !menuLayers.length) {
    return { close: () => {} };
  }

  let isOpen = false;
  let previousFocus = null;

  const setOpen = (nextOpen) => {
    isOpen = nextOpen && window.innerWidth <= MOBILE_WIDTH;
    trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-open", isOpen);

    menuLayers.forEach((layer) => {
      layer.hidden = !isOpen;
    });

    if (isOpen) {
      previousFocus = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      const firstTarget = getFocusable(menuLayers[0]);
      firstTarget?.focus();
      return;
    }

    if (previousFocus instanceof HTMLElement) {
      previousFocus.focus();
    }
  };

  const close = () => setOpen(false);

  trigger.addEventListener("click", () => {
    setOpen(!isOpen);
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", close);
  });

  menuLayers.forEach((layer) => {
    layer.addEventListener("click", (event) => {
      if (event.target === layer) {
        close();
      }
    });

    layer.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", close);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) {
      close();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_WIDTH && isOpen) {
      close();
    }
  });

  return { close };
}
