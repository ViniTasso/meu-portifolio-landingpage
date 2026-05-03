var browserPrefix = "",
  $htmlbody = jQuery("html:not(:animated),body:not(:animated)");
usrAg = navigator.userAgent;
if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
  browserPrefix = "-webkit-";
} else if (usrAg.indexOf("Opera") > -1) {
  browserPrefix = "-o";
} else if (usrAg.indexOf("Firefox") > -1) {
  browserPrefix = "-moz-";
} else if (usrAg.indexOf("MSIE") > -1) {
  browserPrefix = "-ms-";
}
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
  window.setTimeout(callback, 100);
};

function scroll_to_element($element, offset, speed) {
  offset = typeof offset !== 'undefined' ? offset : 0;
  speed = typeof speed !== 'undefined' ? speed : 1800;
  var top = $element.offset().top - offset;
  $htmlbody.animate({
    scrollTop: top
  }, speed);
}

function scroll_to_position(top, speed) {
  speed = typeof speed !== 'undefined' ? speed : 600;
  $htmlbody.animate({
    scrollTop: top
  }, speed);
}
get_now = Date.now || function() {
  return new Date().getTime();
};
_throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : get_now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = get_now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
_debounce = function(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  var later = function() {
    var last = get_now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function() {
    context = this;
    args = arguments;
    timestamp = get_now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
};

function checkEmail(elem) {
  var field = document.getElementById(elem);
  var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
  if (field.value.length == 0) {
    return false;
  }
  if (field.value.match(emailExp)) {
    return true;
  } else {
    return false;
  }
}

function show_error(id, formid) {
  jQuery('#' + id).addClass('field-with-error');
  jQuery("#" + formid + " label[for='" + id + "']").addClass('label_with_error');
}

function clear_errors(formid) {
  jQuery("#" + formid + " input, #" + formid + " select, #" + formid + " textarea").each(function() {
    if (jQuery(this).attr('type') != 'hidden' && jQuery(this).attr('type') != 'button' && jQuery(this).attr('type') != 'submit' || typeof(jQuery(this).attr('noborder')) != 'undefined') {
      jQuery(this).removeClass('field-with-error');
      var id = jQuery(this).attr("id");
      jQuery("#" + formid + " label[for='" + id + "']").removeClass('label_with_error');
    }
  });
}
