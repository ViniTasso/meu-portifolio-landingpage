document.documentElement.classList.add("js");

function createScrollTrigger(triggerElement, timeline) {
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    }
  });

  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 60%",
    onEnter: () => timeline.play(),
    onLeave: () => timeline.pause(),
    onEnterBack: () => timeline.play(),
    onLeaveBack: () => timeline.pause(0).pause()
  });
}

function initTextSplit() {
  
  if (typeof SplitType === "undefined") return;
  const textSplits = document.querySelectorAll("[text-split]");
  textSplits.forEach((el) => {
    if (el.querySelector(".char")) return; // evita duplicação
    new SplitType(el, { types: "words, chars", tagName: "span" });
  });
  gsap.set("[text-split]", { opacity: 1 });
}

function initSectionFadeIn(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  gsap.set(el, { opacity: 0 });
  const tl = gsap.timeline({ paused: true });
  tl.to(el, { opacity: 1, duration: 0.8, ease: "power3.out" });
  createScrollTrigger(el, tl);
}

function initTextFlyIn(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    const chars = el.querySelectorAll(".char");
    if (!chars.length) return;
    const tl = gsap.timeline({ paused: true });
    tl.from(chars, {
      xPercent: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.02
    });
    createScrollTrigger(el, tl);
  });
}

function initHeroAnimations() {
  const bgImage = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad43"]');
  if (bgImage) {
    gsap.set(bgImage, { opacity: 0, y: -48, transformOrigin: "50% 50%" });
    const tl = gsap.timeline({ paused: true });
    tl.to(bgImage, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    createScrollTrigger(bgImage, tl);
  }

  const profileImage = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad44"]');
  if (profileImage) {
    gsap.set(profileImage, { opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(profileImage, { opacity: 1, duration: 0.8, ease: "power3.out" });
    createScrollTrigger(profileImage, tl);
  }

  const heading = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad45"]');
  if (heading) {
    gsap.set(heading, { opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(heading, { opacity: 1, duration: 0.8, ease: "power3.out" });
    createScrollTrigger(heading, tl);
  }

  const colorFilter = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad47"]');
  if (colorFilter) {
    gsap.set(colorFilter, { opacity: 0, y: 80, transformOrigin: "50% 50%" });
    const tl = gsap.timeline({ paused: true });
    tl.to(colorFilter, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    createScrollTrigger(colorFilter, tl);
  }

  const subtitleWrapper = document.querySelector('[data-w-id="bd0ef9be-b301-3c2b-910a-fcffc5373cfd"]');
  if (subtitleWrapper) {
    gsap.set(subtitleWrapper, { opacity: 0, y: 40, transformOrigin: "50% 50%" });
    const tl = gsap.timeline({ paused: true });
    tl.to(subtitleWrapper, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    createScrollTrigger(subtitleWrapper, tl);
  }
}

function initSpecialiseList() {
  const listItems = document.querySelectorAll(".specialise_list-item[data-w-id]");
  const wrapper = document.querySelector(".specialise_list-wrapper");
  if (!listItems.length || !wrapper) return;

  gsap.set(listItems, { opacity: 0, y: 20 });
  const tl = gsap.timeline({ paused: true });
  tl.to(listItems, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.1
  });
  createScrollTrigger(wrapper, tl);
}

function initLatestSection() {
  const latestSection = document.querySelector('[data-w-id="aceeb74b-b023-b566-b671-204a78720848"]');
  const latestComponent = document.querySelector('[data-w-id="02bd17be-8196-1642-b164-4c1c4b4fade7"]');
  if (latestSection && latestComponent) {
    gsap.set(latestComponent, { opacity: 0, y: 30 });
    const tl = gsap.timeline({ paused: true });
    tl.to(latestComponent, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
    createScrollTrigger(latestSection, tl);
  }
}

function initLottieAnimations() {
  if (typeof lottie === "undefined") return;
  document.querySelectorAll("[data-animation-type='lottie']").forEach((element) => {
    const src = element.getAttribute("data-src");
    if (!src) return;

    const animation = lottie.loadAnimation({
      container: element,
      renderer: element.getAttribute("data-renderer") || "svg",
      loop: element.getAttribute("data-loop") !== "0",
      autoplay: element.getAttribute("data-autoplay") !== "0",
      path: src
    });

    if (element.hasAttribute("data-duration")) {
      const duration = parseFloat(element.getAttribute("data-duration"));
      if (duration > 0) animation.setSpeed(1 / duration);
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: target, autoKill: false },
        duration: 0.6,
        ease: "power2.out"
      });
    });
  });
}

function updateLatestCardsContrast() {
  const cards = document.querySelectorAll(".latest_case-wrapper:not(:first-child)");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const transitionStart = 700;
    const transitionEnd = 220;

    if (cardTop <= transitionStart && cardTop >= transitionEnd) {
      const percentage = (cardTop - transitionEnd) / (transitionStart - transitionEnd);
      const brightness = 30 + 70 * (1 - percentage);
      const grayscale = 100 * percentage;
      const scale = 1.01 - 0.01 * (1 - percentage);
      card.style.filter = `brightness(${brightness}%) grayscale(${grayscale}%)`;
      card.style.transform = `scale(${scale})`;
    } else if (cardTop < transitionEnd) {
      card.classList.add("light");
      card.classList.remove("dark");
      card.style.transform = "scale(1)";
    } else {
      card.classList.add("dark");
      card.classList.remove("light");
      card.style.transform = "scale(1.01)";
    }
  });
}

function initAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    requestAnimationFrame(initAnimations);
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.set(".color-filter", { opacity: 0 });
  initTextSplit();
  initHeroAnimations();
  initTextFlyIn("[text-fly-in-left]");
  initSectionFadeIn('[data-w-id="730c4d09-d7ae-dc91-1dce-5ef7ec35122e"]');
  initSectionFadeIn('[data-w-id="b1043fb3-7c73-9134-8242-0f4a54531b44"]');
  initSpecialiseList();
  initLatestSection();
  initLottieAnimations();
  initSmoothScroll();
  updateLatestCardsContrast();
}

window.addEventListener("scroll", updateLatestCardsContrast, { passive: true });
window.addEventListener("resize", () => {
  if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  updateLatestCardsContrast();
});
document.addEventListener("DOMContentLoaded", initAnimations);
