// Main animation and interaction controller
document.documentElement.classList.add("js");

// Wait for GSAP and ScrollTrigger to be available
function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Wait for GSAP to load
    requestAnimationFrame(initAnimations);
    return;
  }

  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Helper to create scroll triggers for elements
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
      onEnter: () => timeline.play()
    });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initAllAnimations);
  } else {
    initAllAnimations();
  }

  function initAllAnimations() {
    // Split text elements for character animations
    if (typeof SplitType !== 'undefined') {
      const textSplits = document.querySelectorAll("[text-split]");
      textSplits.forEach(el => {
        new SplitType(el, {
          types: "words, chars",
          tagName: "span"
        });
      });
    }

    // Hero section animations
    initHeroAnimations(createScrollTrigger);

    // About section text animations
    initAboutAnimations(createScrollTrigger);

    // Specialise section animations
    initSpecialiseAnimations(createScrollTrigger);

    // Latest case animations
    initLatestCaseAnimations(createScrollTrigger);

    // Initialize Lottie animations
    initLottieAnimations();

    // Smooth scroll to sections
    initSmoothScroll();

    // Color filter animation
    initColorFilterAnimation();
  }
}

/**
 * Initialize hero section animations
 * Animates: background image, profile image, heading, subtitle wrapper, and color filter
 */
function initHeroAnimations(createScrollTrigger) {
  // Background image animation
  const bgImage = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad43"]');
  if (bgImage) {
    gsap.set(bgImage, {
      opacity: 0,
      y: -48,
      transformOrigin: "50% 50%"
    });

    const bgTimeline = gsap.timeline({ paused: true });
    bgTimeline.to(bgImage, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(bgImage, bgTimeline);
  }

  // Profile image animation
  const profileImage = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad44"]');
  if (profileImage) {
    gsap.set(profileImage, { opacity: 0 });

    const profileTimeline = gsap.timeline({ paused: true });
    profileTimeline.to(profileImage, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(profileImage, profileTimeline);
  }

  // H1 heading animation
  const heading = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad45"]');
  if (heading) {
    gsap.set(heading, { opacity: 0 });

    const headingTimeline = gsap.timeline({ paused: true });
    headingTimeline.to(heading, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(heading, headingTimeline);
  }

  // Hero color filter animation
  const colorFilter = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad47"]');
  if (colorFilter) {
    gsap.set(colorFilter, {
      opacity: 0,
      y: 80,
      transformOrigin: "50% 50%"
    });

    const filterTimeline = gsap.timeline({ paused: true });
    filterTimeline.to(colorFilter, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    createScrollTrigger(colorFilter, filterTimeline);
  }

  // Subtitle wrapper animation
  const subtitleWrapper = document.querySelector('[data-w-id="bd0ef9be-b301-3c2b-910a-fcffc5373cfd"]');
  if (subtitleWrapper) {
    gsap.set(subtitleWrapper, {
      opacity: 0,
      y: 40,
      transformOrigin: "50% 50%"
    });

    const subtitleTimeline = gsap.timeline({ paused: true });
    subtitleTimeline.to(subtitleWrapper, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(subtitleWrapper, subtitleTimeline);
  }
}

/**
 * Initialize about section text animations
 */
function initAboutAnimations(createScrollTrigger) {
  // About heading with text fly-in-left animation
  const aboutHeading = document.querySelector('[text-fly-in-left=""]');
  if (aboutHeading) {
    const words = aboutHeading.querySelectorAll(".word");
    if (words.length > 0) {
      const timeline = gsap.timeline({ paused: true });
      timeline.from(words, {
        xPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.02
      });

      createScrollTrigger(aboutHeading, timeline);
    }
  }

  // About content section fade in
  const aboutContent = document.querySelector('[data-w-id="730c4d09-d7ae-dc91-1dce-5ef7ec35122e"]');
  if (aboutContent) {
    gsap.set(aboutContent, { opacity: 0 });

    const timeline = gsap.timeline({ paused: true });
    timeline.to(aboutContent, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(aboutContent, timeline);
  }
}

/**
 * Initialize specialise section animations
 */
function initSpecialiseAnimations(createScrollTrigger) {
  // Specialise list items stagger animation
  const listItems = document.querySelectorAll('.specialise_list-item[data-w-id]');
  if (listItems.length > 0) {
    const container = document.querySelector('.specialise_list-wrapper');
    if (container) {
      gsap.set(listItems, { opacity: 0, y: 20 });

      const timeline = gsap.timeline({ paused: true });
      timeline.to(listItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1
      });

      createScrollTrigger(container, timeline);
    }
  }
}

/**
 * Initialize latest case animations (project cards)
 */
function initLatestCaseAnimations(createScrollTrigger) {
  // Latest case component animations
  const cases = document.querySelectorAll('[data-w-id="02bd17be-8196-1642-b164-4c1c4b4fade7"]');
  if (cases.length > 0) {
    gsap.set(cases, { opacity: 0, y: 30 });

    const container = document.querySelector('[data-w-id="aceeb74b-b023-b566-b671-204a78720848"]');
    if (container) {
      const timeline = gsap.timeline({ paused: true });
      timeline.to(cases, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15
      });

      createScrollTrigger(container, timeline);
    }
  }

  // Add hover effects to case cards
  cases.forEach(caseCard => {
    caseCard.addEventListener("mouseenter", () => {
      gsap.to(caseCard, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    caseCard.addEventListener("mouseleave", () => {
      gsap.to(caseCard, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });
}

/**
 * Initialize Lottie animations
 * Loads and plays Lottie JSON from data-src attribute
 */
function initLottieAnimations() {
  const lottieElements = document.querySelectorAll("[data-animation-type='lottie']");
  
  lottieElements.forEach(element => {
    const src = element.getAttribute("data-src");
    if (src && typeof lottie !== "undefined") {
      const animationData = {
        container: element,
        renderer: element.getAttribute("data-renderer") || "svg",
        loop: element.getAttribute("data-loop") !== "0",
        autoplay: element.getAttribute("data-autoplay") !== "0",
        path: src
      };

      try {
        const animation = lottie.loadAnimation(animationData);
        
        // Apply animation properties from data attributes
        if (element.hasAttribute("data-duration")) {
          const duration = parseFloat(element.getAttribute("data-duration"));
          if (duration > 0) {
            animation.setSpeed(1 / duration);
          }
        }
      } catch (error) {
        console.warn("Failed to load Lottie animation from:", src, error);
      }
    }
  });
}

/**
 * Initialize smooth scroll to anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target && typeof gsap !== 'undefined') {
        e.preventDefault();
        
        // Check if ScrollToPlugin is loaded
        if (gsap.to.ScrollToPlugin) {
          gsap.to(window, {
            scrollTo: {
              y: target,
              autoKill: false
            },
            duration: 0.6,
            ease: "power2.out"
          });
        } else {
          // Fallback to regular scroll
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

/**
 * Initialize global color filter animation for page transitions
 */
function initColorFilterAnimation() {
  const colorFilter = document.querySelector(".color-filter");
  if (colorFilter && typeof gsap !== 'undefined') {
    // Initially hide the color filter
    gsap.set(colorFilter, { opacity: 0 });

    // Optional: Add animation triggers for color filter if needed
    // This can be extended for theme switching or page transitions
  }
}

// Start initialization when ready
initAnimations();

// Refresh ScrollTrigger on window resize
window.addEventListener("resize", () => {
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => {
      trigger.refresh();
    });
  }
});

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (typeof gsap !== 'undefined') {
    if (document.hidden) {
      // Pause all animations when page is hidden
      gsap.globalTimeline.pause();
    } else {
      // Resume animations when page becomes visible
      gsap.globalTimeline.resume();
    }
  }
});

/**
 * Initialize hero section animations
 * Animates: background image, profile image, heading, subtitle wrapper, and color filter
 */
function initHeroAnimations() {
  // Background image animation
  const bgImage = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad43"]');
  if (bgImage) {
    gsap.set(bgImage, {
      opacity: 0,
      y: -48,
      transformOrigin: "50% 50%"
    });

    const bgTimeline = gsap.timeline({ paused: true });
    bgTimeline.to(bgImage, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(bgImage, bgTimeline);
  }

  // Profile image animation
  const profileImage = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad44"]');
  if (profileImage) {
    gsap.set(profileImage, { opacity: 0 });

    const profileTimeline = gsap.timeline({ paused: true });
    profileTimeline.to(profileImage, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(profileImage, profileTimeline);
  }

  // H1 heading animation
  const heading = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad45"]');
  if (heading) {
    gsap.set(heading, { opacity: 0 });

    const headingTimeline = gsap.timeline({ paused: true });
    headingTimeline.to(heading, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(heading, headingTimeline);
  }

  // Hero color filter animation
  const colorFilter = document.querySelector('[data-w-id="36fb146c-0c52-2d35-0ad6-e8137e3aad47"]');
  if (colorFilter) {
    gsap.set(colorFilter, {
      opacity: 0,
      y: 80,
      transformOrigin: "50% 50%"
    });

    const filterTimeline = gsap.timeline({ paused: true });
    filterTimeline.to(colorFilter, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    createScrollTrigger(colorFilter, filterTimeline);
  }

  // Subtitle wrapper animation
  const subtitleWrapper = document.querySelector('[data-w-id="bd0ef9be-b301-3c2b-910a-fcffc5373cfd"]');
  if (subtitleWrapper) {
    gsap.set(subtitleWrapper, {
      opacity: 0,
      y: 40,
      transformOrigin: "50% 50%"
    });

    const subtitleTimeline = gsap.timeline({ paused: true });
    subtitleTimeline.to(subtitleWrapper, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(subtitleWrapper, subtitleTimeline);
  }
}

/**
 * Initialize about section text animations
 */
function initAboutAnimations() {
  // About heading with text fly-in-left animation
  const aboutHeading = document.querySelector('[text-fly-in-left=""]');
  if (aboutHeading) {
    const words = aboutHeading.querySelectorAll(".word");
    if (words.length > 0) {
      const timeline = gsap.timeline({ paused: true });
      timeline.from(words, {
        xPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.02
      });

      createScrollTrigger(aboutHeading, timeline);
    }
  }

  // About content section fade in
  const aboutContent = document.querySelector('[data-w-id="730c4d09-d7ae-dc91-1dce-5ef7ec35122e"]');
  if (aboutContent) {
    gsap.set(aboutContent, { opacity: 0 });

    const timeline = gsap.timeline({ paused: true });
    timeline.to(aboutContent, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    });

    createScrollTrigger(aboutContent, timeline);
  }
}

/**
 * Initialize specialise section animations
 */
function initSpecialiseAnimations() {
  // Specialise list items stagger animation
  const listItems = document.querySelectorAll('.specialise_list-item[data-w-id]');
  if (listItems.length > 0) {
    const container = document.querySelector('.specialise_list-wrapper');
    if (container) {
      gsap.set(listItems, { opacity: 0, y: 20 });

      const timeline = gsap.timeline({ paused: true });
      timeline.to(listItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1
      });

      createScrollTrigger(container, timeline);
    }
  }
}

/**
 * Initialize latest case animations (project cards)
 */
function initLatestCaseAnimations() {
  // Latest case component animations
  const cases = document.querySelectorAll('[data-w-id="02bd17be-8196-1642-b164-4c1c4b4fade7"]');
  if (cases.length > 0) {
    gsap.set(cases, { opacity: 0, y: 30 });

    const container = document.querySelector('[data-w-id="aceeb74b-b023-b566-b671-204a78720848"]');
    if (container) {
      const timeline = gsap.timeline({ paused: true });
      timeline.to(cases, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15
      });

      createScrollTrigger(container, timeline);
    }
  }

  // Add hover effects to case cards
  cases.forEach(caseCard => {
    caseCard.addEventListener("mouseenter", () => {
      gsap.to(caseCard, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    caseCard.addEventListener("mouseleave", () => {
      gsap.to(caseCard, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });
}

/**
 * Initialize Lottie animations
 * Loads and plays Lottie JSON from data-src attribute
 */
function initLottieAnimations() {
  const lottieElements = document.querySelectorAll("[data-animation-type='lottie']");
  
  lottieElements.forEach(element => {
    const src = element.getAttribute("data-src");
    if (src && typeof lottie !== "undefined") {
      const animationData = {
        container: element,
        renderer: element.getAttribute("data-renderer") || "svg",
        loop: element.getAttribute("data-loop") !== "0",
        autoplay: element.getAttribute("data-autoplay") !== "0",
        path: src
      };

      try {
        const animation = lottie.loadAnimation(animationData);
        
        // Apply animation properties from data attributes
        if (element.hasAttribute("data-duration")) {
          const duration = parseFloat(element.getAttribute("data-duration"));
          if (duration > 0) {
            animation.setSpeed(1 / duration);
          }
        }
      } catch (error) {
        console.warn("Failed to load Lottie animation from:", src, error);
      }
    }
  });
}

/**
 * Initialize smooth scroll to anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: target,
            autoKill: false
          },
          duration: 0.6,
          ease: "power2.out"
        });
      }
    });
  });
}

/**
 * Initialize global color filter animation for page transitions
 */
function initColorFilterAnimation() {
  const colorFilter = document.querySelector(".color-filter");
  if (colorFilter) {
    // Initially hide the color filter
    gsap.set(colorFilter, { opacity: 0 });

    // Optional: Add animation triggers for color filter if needed
    // This can be extended for theme switching or page transitions
  }
}

// Refresh ScrollTrigger on window resize
window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach(trigger => {
    trigger.refresh();
  });
});

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pause all animations when page is hidden
    gsap.globalTimeline.pause();
  } else {
    // Resume animations when page becomes visible
    gsap.globalTimeline.resume();
  }
});
