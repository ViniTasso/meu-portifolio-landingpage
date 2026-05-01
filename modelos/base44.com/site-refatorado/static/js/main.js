import { initMobileMenu } from "./mobile-menu.js";
import { initAnchorScroll } from "./scroll.js";
import { initViewportMotion } from "./motion.js";

function bootstrap() {
  const mobileMenu = initMobileMenu();
  initAnchorScroll({
    onNavigate: () => mobileMenu.close(),
  });
  initViewportMotion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
} else {
  bootstrap();
}
