document.addEventListener('DOMContentLoaded', function() {
  var logo = document.querySelector('.custom-logo');
  var altLogo = document.querySelector('.custom-logo-link img');
  console.log('DOM fully loaded.');
  console.log('Logo element:', logo);
  console.log('Alt Logo element:', altLogo);
  console.log('Is homepage:', document.body.classList.contains('home'));
  if (document.body.classList.contains('home')) {
    console.log('Updating logo for homepage.');
    var alternativeLogoUrl = mytheme_customizer_settings.alternative_logo;
    if (altLogo && alternativeLogoUrl) {
      console.log('Using alternative logo.');
      altLogo.src = alternativeLogoUrl;
    } else if (logo) {
      console.log('Using default logo.');
    }
    if (window.innerWidth >= 1000) {
      console.log('Initializing animations.');
      initAnimation();
    }
  }
});

function initAnimation() {
  console.log('Animations initialized.');
  var titleElement = document.querySelector('.wp-block-site-title a');
  var logoElement = document.querySelector('.custom-logo-link');
  var fadeStart = 500;
  var fadeUntil = 1200;
  window.addEventListener('scroll', function() {
    updateElementStyle(titleElement, fadeStart, fadeUntil);
    updateElementStyle(logoElement, fadeStart, fadeUntil);
  });
}

function updateElementStyle(element, fadeStart, fadeUntil) {
  if (element) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var opacity = 1;
    var scale = 1;
    if (scrollTop > fadeStart && scrollTop < fadeUntil) {
      opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
      scale = opacity;
    } else if (scrollTop >= fadeUntil) {
      opacity = 0;
      scale = 0;
    } else {
      opacity = 1;
      scale = 1;
    }
    element.style.opacity = Math.max(Math.min(opacity, 1), 0);
    element.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }
}
