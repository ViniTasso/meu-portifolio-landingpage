window.addEventListener("DOMContentLoaded", (event) => {
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

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
  $("[text-wavy]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
      stagger: {
        amount: 1
      }
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-zoom-in]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".word"), {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.1
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-flip-in]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      rotationY: -90,
      opacity: 0,
      transformOrigin: "50% 50% -50",
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: {
        amount: 0.6
      }
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-fade-slide-left]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".word"), {
      x: 50,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-pop-up]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      scale: 0,
      opacity: 0,
      rotation: 90,
      duration: 0.6,
      ease: "back.out(2.5)",
      stagger: {
        from: "end",
        amount: 0.5
      }
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-fly-in-left]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      xPercent: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.02
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-tracking-in]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      letterSpacing: "0.5em",
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.03
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-color-flip]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      color: "transparent",
      backgroundColor: "#FFFFFF",
      duration: 0.2,
      ease: "ease",
      stagger: 0.1
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-rotate-fade-in]").each(function() {
    let tl = gsap.timeline({
      paused: true
    });
    tl.from($(this).find(".char"), {
      rotation: -90,
      opacity: 0,
      transformOrigin: "0% 50%",
      duration: 0.6,
      ease: "back.out(2)",
      stagger: 0.03
    });
    createScrollTrigger($(this), tl);
  });
  $("[text-code-typing]").each(function() {
    let chars = $(this).find(".char");
    let tl = gsap.timeline({
      paused: true
    });
    let possibleChars = "+/0._[]-@£$%&*()".split("");
    chars.each(function(index, element) {
      let origText = element.textContent;
      let randDuration = gsap.utils.random(0.5, 2, 0.1);
      tl.to(element, {
        duration: 0.1,
        repeat: Math.floor(randDuration / 0.1) - 1,
        repeatDelay: 0.05,
        onRepeat: function() {
          element.textContent = possibleChars[Math.floor(Math.random() * possibleChars.length)];
        },
        onComplete: function() {
          element.textContent = origText;
        }
      }, index * 0.05);
    });
    createScrollTrigger($(this), tl);
  });
  gsap.set("[text-split]", {
    opacity: 1
  });
});
