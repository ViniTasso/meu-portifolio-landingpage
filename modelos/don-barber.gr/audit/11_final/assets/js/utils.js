var websiteURL = '';
var templateURL = 'https://don-barber.gr/wp-content/themes/don/';
var device = 'desktop';
var browser = '';
var os = 'mac';
;
(function(html) {
  html.className = html.className.replace(/\bno-js\b/, 'js')
})(document.documentElement);
;
document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
;
document.addEventListener('wpcf7mailsent', function(event) {
  if ("fb_pxl_code" in event.detail.apiResponse) {
    eval(event.detail.apiResponse.fb_pxl_code);
  }
}, false);
;
var wpcf7 = {
  "api": {
    "root": "https:\/\/don-barber.gr\/en\/wp-json\/",
    "namespace": "contact-form-7\/v1"
  }
};
