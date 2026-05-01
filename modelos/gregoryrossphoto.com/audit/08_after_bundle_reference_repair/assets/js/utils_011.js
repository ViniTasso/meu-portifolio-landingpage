document.documentElement.classList.remove('no-js');
;
var breeze_prefetch = {
  "local_url": "https://www.gregoryrossphoto.com",
  "ignore_remote_prefetch": "1",
  "ignore_list": ["wp-admin", "wp-login.php"]
};
;
function hitsteps_gc(name) {
  if (document.cookie) {
    var hs_cookie_split = document.cookie.split(';');
    if (hs_cookie_split) {
      for (var i in hs_cookie_split) {
        if (typeof hs_cookie_split[i] == "undefined" || typeof hs_cookie_split[i] == "function") {} else {
          if (hs_cookie_split[i].indexOf(name + '=') != -1) return decodeURIComponent(hs_cookie_split[i].split('=')[1]);
        }
      }
    }
  }
  return '';
}
_hs_uniqueid = '';
ipname = '';
ipnames = hitsteps_gc('comment_author_e7c058868a6be0f5b35ac7befdd883d1');
ipemails = hitsteps_gc('comment_author_email_e7c058868a6be0f5b35ac7befdd883d1');
if (ipnames != '' && ipname == '') ipname = ipnames;
if (ipemails != '' && _hs_uniqueid == '') _hs_uniqueid = ipemails;
;
(function() {
  var hstc = document.createElement('script');
  var hstcs = 'www.';
  hstc.src = 'assets/code_6d4418374e82.js?code=3b8b4bd8c38becec433d347fb1982594';
  hstc.async = true;
  hstc.defer = true;
  var htssc = document.getElementsByTagName('script')[0];
  htssc.parentNode.insertBefore(hstc, htssc);
})();
var nochat = 0;
;
var mytheme_customizer_settings = {
  alternative_logo: 'assets/wp-content/uploads/2025/02/white-logo-thin.png'
};
;
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
var sb_instagram_js_options = {
  "font_method": "svg",
  "resized_url": "https://www.gregoryrossphoto.com/wp-content/uploads/sb-instagram-feed-images/",
  "placeholder": "/assets/images/placeholder.png",
  "ajax_url": "https://www.gregoryrossphoto.com/wp-admin/admin-ajax.php"
};
