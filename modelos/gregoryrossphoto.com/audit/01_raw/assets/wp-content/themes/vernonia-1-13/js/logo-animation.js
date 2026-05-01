document.addEventListener('DOMContentLoaded', function() {
    var logo = document.querySelector('.custom-logo'); // Fetch the logo element
    var altLogo = document.querySelector('.custom-logo-link img'); // Fetch the alternative logo element

    // Log details to ensure the script is running and the elements are correctly identified
    console.log('DOM fully loaded.');
    console.log('Logo element:', logo);
    console.log('Alt Logo element:', altLogo);
    console.log('Is homepage:', document.body.classList.contains('home'));

    // Explicitly check and change the logo only if on the homepage
    if (document.body.classList.contains('home')) {
        console.log('Updating logo for homepage.');
        
        var alternativeLogoUrl = mytheme_customizer_settings.alternative_logo;
        if (altLogo && alternativeLogoUrl) {
            console.log('Using alternative logo.');
            altLogo.src = alternativeLogoUrl; // Use the alternative logo from the customizer setting
        } else if (logo) {
            console.log('Using default logo.');
            // Update the logo src with the custom logo or do nothing if altLogo doesn't exist
        }

        // Check if viewport is wide enough for animation
        if (window.innerWidth >= 1000) {
            console.log('Initializing animations.');
            initAnimation(); // Initialize animations if the viewport is wide enough
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
        var opacity = 1; // Default opacity
        var scale = 1; // Default scale

        if (scrollTop > fadeStart && scrollTop < fadeUntil) {
            opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
            scale = opacity; // Link scale directly to opacity for simplicity
        } else if (scrollTop >= fadeUntil) {
            opacity = 0; // Fully transparent beyond fadeUntil
            scale = 0; // Fully scaled down
        } else {
            opacity = 1; // Reset to full opacity if above fadeStart
            scale = 1; // Reset to full scale
        }

        element.style.opacity = Math.max(Math.min(opacity, 1), 0);
        element.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
}
