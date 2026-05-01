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
