const openTrigger = document.getElementById("mobile-menu-trigger");
const menuA = document.getElementById("comp-kd5px9q0-pinned-layer");
const menuB = document.getElementById("comp-mok06b5e-pinned-layer");
const closeA = document.getElementById("comp-kd5px9q0_r_comp-kkmqi5tc");
const closeB = document.getElementById("comp-mok06b5e_r_comp-mok06b0c");

function toggleMenus(visible) {
  if (!menuA || !menuB) return;
  menuA.hidden = !visible;
  menuB.hidden = !visible;
}

if (openTrigger) {
  openTrigger.addEventListener("click", () => toggleMenus(true));
}

if (closeA) {
  closeA.addEventListener("click", () => toggleMenus(false));
}

if (closeB) {
  closeB.addEventListener("click", () => toggleMenus(false));
}

