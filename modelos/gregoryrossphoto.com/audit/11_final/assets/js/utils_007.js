document.documentElement.style.setProperty('--scrollbar-offset', window.innerWidth - document.documentElement.clientWidth + 'px');
;
{
  "prefetch": [{
    "source": "document",
    "where": {
      "and": [{
        "href_matches": "/*"
      }, {
        "not": {
          "href_matches": ["/wp-*.php", "/wp-admin/*", "/wp-content/uploads/*", "/wp-content/*", "/wp-content/plugins/*", "/wp-content/themes/vernonia-1-13/*", "/wp-content/themes/kadence/*", "/*\\?(.+)"]
        }
      }, {
        "not": {
          "selector_matches": "a[rel~=\"nofollow\"]"
        }
      }, {
        "not": {
          "selector_matches": ".no-prefetch, .no-prefetch a"
        }
      }]
    },
    "eagerness": "conservative"
  }]
}
;
var sbiajaxurl = "https://www.gregoryrossphoto.com/wp-admin/admin-ajax.php";
;
var kadenceConfig = {
  "screenReader": {
    "expand": "Child menu",
    "expandOf": "Child menu of",
    "collapse": "Child menu",
    "collapseOf": "Child menu of"
  },
  "breakPoints": {
    "desktop": "1024",
    "tablet": 768
  },
  "scrollOffset": "0"
};
;
var kb_glightbox = {
  "moreText": "See more",
  "lightBoxAriaLabel": "Display this image in a lightbox"
};
;
var kadenceSlideConfig = {
  "of": "of",
  "to": "to",
  "slide": "Slide",
  "next": "Next",
  "prev": "Previous"
};
