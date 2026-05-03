/* Encoding: UTF-8 */

var browserPrefix = "", $htmlbody = jQuery("html:not(:animated),body:not(:animated)");

usrAg = navigator.userAgent;
if(usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
    browserPrefix = "-webkit-";
} else if (usrAg.indexOf("Opera") > -1) {
    browserPrefix = "-o";
} else if (usrAg.indexOf("Firefox") > -1) {
    browserPrefix = "-moz-";
} else if (usrAg.indexOf("MSIE") > -1) {
    browserPrefix = "-ms-";
}

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( callback ){
        window.setTimeout(callback, 100);
    };

function scroll_to_element($element, offset, speed){
    offset = typeof offset !== 'undefined' ? offset : 0;
    speed = typeof speed !== 'undefined' ? speed : 1800;
    var top = $element.offset().top - offset;
    $htmlbody.animate({ scrollTop: top}, speed);
}
function scroll_to_position(top, speed){
    speed = typeof speed !== 'undefined' ? speed : 600;
    $htmlbody.animate({ scrollTop: top}, speed);
}
/*
function text_limit_toggle(config){
    config = Object.assign({
        block_text_limit: jQuery(".block-text-limit"),
        block_text_limit_inner: jQuery(".block-text-limit-inner"),
        togglingLink: jQuery(".togglingLink"),
        action: jQuery(".togglingLink .action")
    }, config);

    config.block_text_limit.each(function (index) {
        text_limit_h = jQuery(this).height();
        if (jQuery(this).data("height") != '') {
            text_limit_h = jQuery(this).data('height');
        }
        key = jQuery(this).data("name");
        text_limit_inner_h = jQuery(this).find(config.block_text_limit_inner).height();
        if (text_limit_inner_h <= text_limit_h + 24) {
            jQuery(this).addClass('autoheight');
            config.togglingLink.filter("[data-target='" + key + "']").addClass('hidden');
        }
    });

    var text_init_h = config.block_text_limit.filter(":eq(0)").height();
    config.togglingLink.click(function () {
        var id = jQuery(this).data("target");
        var text_limit_block = config.block_text_limit.filter("[data-name='" + id + "']");
        var text_limit_block_inner = text_limit_block.find(config.block_text_limit_inner);

        text_init_h = jQuery(text_limit_block).data("height");
        if (text_init_h == "") {
            text_init_h = jQuery(text_limit_block).height();
            jQuery(text_limit_block).data("height", text_init_h);
        }

        if (jQuery(text_limit_block).height() > text_init_h) {
            jQuery(text_limit_block).stop().animate({height: text_init_h}, 550);
        }
        else {
            jQuery(text_limit_block).stop().animate({height: jQuery(text_limit_block_inner).height()}, 550);

            /*var href = jQuery(text_limit_block).data("href");
             if (href!="" && href!="undefined" && typeof(href)!="undefined"){
             window.location.hash = "!"+href;
             }*
        }
        jQuery(this).find(config.action).toggleClass('faded');
    });
}
*/
/* underscore.js:
 Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. Useful for rate-limiting events that occur faster than you can keep up with.
 if you'd like to disable the execution on the leading edge, pass
 `{leading: false}`. To disable execution on the trailing edge, ditto.

exmple:
 $(document).on('scroll', _throttle(function(){
 check_if_needs_more_content();
 }, 200));
*/
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

/*
debounce_.debounce(function, wait, [immediate])
Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving. For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.

    At the end of the wait interval, the function will be called with the arguments that were passed most recently to the debounced function.

Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time.

* Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.

    var lazyResize = _debounce(resizeFunction, 300);
    $(window).resize(lazyResize);
*/

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
    if (field.value.length ==0){
        return false;
    }
    if (field.value.match(emailExp)){
        return true;
    }
    else {
        return false;
    }
}

function show_error(id, formid){
    jQuery('#'+id).addClass('field-with-error');
    jQuery("#"+formid+" label[for='"+id+"']").addClass('label_with_error');
}

function clear_errors(formid){
    jQuery("#"+formid+" input, #"+formid+" select, #"+formid+" textarea").each(function(){
        if ( jQuery(this).attr('type') != 'hidden' && jQuery(this).attr('type') != 'button' && jQuery(this).attr('type') != 'submit' || typeof(jQuery(this).attr('noborder')) != 'undefined') {
            jQuery(this).removeClass('field-with-error');
            var id = jQuery(this).attr("id");
            jQuery("#"+formid+" label[for='"+id+"']").removeClass('label_with_error');
        }
    });
}


/*
function checkform(formid, reply_holder){
    clear_errors(formid);
    var valid = 1;
    var form = jQuery("#"+formid);
    var reply_div = form.find(reply_holder);

    form.find(".required").each(function() {
        id = jQuery(this).attr("id");
        if (jQuery(this).val()==""){
            valid = 0;
            show_error(id,formid);
            reply_div.html('<div class="err-msg">Τα πεδία με αστερίσκο (*) είναι υποχρεωτικά.</div>');
            jQuery(this).focus().select();
            return false;
        }
    });

    if (valid==1){
        form.find(".email").each(function() {
            id = jQuery(this).attr("id");
            if (checkEmail(id)==false && valid==1){
                valid = 0;
                show_error(id, formid);
                jQuery(this).focus().select();
                reply_div.html('<div class="err-msg">To email δεν είναι έγκυρο.</div>');
                return false;
            }
        });
    }
    else {return(false); }

    if (form.find("#vf-chk").val()!=""){
        valid = 0;
    }
    if (valid==1){
        reply_div.removeClass('bg--white').html('<div class="loading"></div>');

        form.submit();
    }
}*/