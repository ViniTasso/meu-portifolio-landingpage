
var s, device, os;
var Main = {
  el: {
    body: jQuery('body'),
    window: jQuery(window),
    scroll_to: jQuery('.scroll-to')
  },
  vars: {
    window_w: 1000,
    window_h: 1000
  },
  init: function() {
    var $window_w = Main.el.window.width();
    var $window_h = Main.el.window.height();
    var $body = Main.el.body;
    $body.addClass('loaded');
    Main.resizing();
    var ease_custom = {
      ease1: CustomEase.create("ease1", ".45,.01,.07,1"),
      ease2: CustomEase.create("ease2", "M0,0 C0.496,0.174 0.396,1 1,1"),
      ease3: CustomEase.create("ease3", "M0,0 C0.35,0.028 0.338,1 1,1"),
      ease4: CustomEase.create("ease4", ".58,.01,.16,1")
    };
    var cookie = {
      holder: jQuery('#cookie'),
      accept: jQuery('#cookie-accept'),
      close: jQuery('#close-cookie'),
      fade: jQuery('.js-cookie-fade'),
      bg: jQuery('#cookie-bg')
    };
    var tl_cookie = new TimelineMax({
      paused: true
    });
    tl_cookie.staggerTo(cookie.fade, 0.4, {
      autoAlpha: 0,
      ease: Power1.easeIn
    }, 0.02, 0);
    tl_cookie.to(cookie.bg, 0.8, {
      scaleY: 0,
      transformOrigin: "bottom left",
      ease: ease_custom.ease1
    }, 0.6);
    tl_cookie.set(cookie.holder, {
      autoAlpha: 0,
      className: '+=remove'
    }, 1);
    tl_cookie.staggerTo(cookie.fade, 0.4, {
      autoAlpha: 0,
      ease: Power1.easeIn
    }, 0.02, 0);
    tl_cookie.to(cookie.bg, 0.8, {
      scaleY: 0,
      transformOrigin: "bottom left",
      ease: ease_custom.ease1
    }, 0.6);
    tl_cookie.set(cookie.holder, {
      autoAlpha: 0,
      className: '+=remove'
    }, 1);
    cookie.close.click(function() {
      tl_cookie.play();
      tl_cookie.timeScale(2);
    });
    cookie.accept.click(function() {
      jQuery.ajax({
        url: templateURL + 'ajax_cookies_agree.php',
        type: 'post',
        success: function(reply) {
          tl_cookie.play();
          tl_cookie.timeScale(2);
        }
      });
    });
    var menu = {
      handler: jQuery('#menu-handler'),
      burger: jQuery('#menu-burger'),
      close: jQuery('#menu-close'),
      holder: jQuery('#menu-holder'),
      item: jQuery("#menu-holder .menu-a, #menu-holder .submenu-a"),
      bg: jQuery('#menu-holder__bg'),
      fade: jQuery('.js-menu-fade'),
      menuBanner: jQuery('#menu-banner'),
      bannerImage: jQuery('#menu-banner-img'),
      bannerImageMask: jQuery('#menu-banner-mask'),
      bannerFadeTop: jQuery('.js-menu-banner-ft')
    };
    var splitsTexts = [];
    var itemD = 0;
    var menu_tl = new TimelineMax({
      paused: true,
      reversed: false
    });
    menu_tl.set(menu.holder, {
      autoAlpha: 0,
      visibility: 'hidden'
    }).set(menu.bg, {
      scaleY: 0,
      transformOrigin: "top right"
    }).set(menu.holder, {
      autoAlpha: 1
    }, 0).to(menu.bg, 1.2, {
      scaleY: 1,
      ease: ease_custom.ease1
    }, 0.1)
    for (var i = 0; i <= menu.item.length - 1; i += 1) {
      splitsTexts.push(new SplitText(menu.item[i], {
        type: "chars"
      }));
      menu_tl.staggerFromTo(splitsTexts[i].chars, 1, {
        y: "100%",
        opacity: 0,
        force3D: true
      }, {
        y: "0%",
        opacity: 1,
        ease: ease_custom.ease1
      }, 0.03, 0.5);
    }
    menu_tl.staggerTo(menu.fade, 1, {
      alpha: 1,
      ease: ease_custom.ease1
    }, 0.02, 0.9).set(menu.menuBanner, {
      autoAlpha: 1
    }, .9).to(menu.bannerImageMask, 1.2, {
      scaleY: 0,
      transfromOrigin: "bottom left",
      ease: ease_custom.ease3,
      rotation: 0
    }, .95).to(menu.bannerImage, 1.2, {
      scale: 1,
      alpha: 1,
      transfromOrigin: "center center",
      ease: ease_custom.ease1,
      rotation: 0
    }, .95).staggerTo(menu.bannerFadeTop, 1, {
      y: 0,
      alpha: 1,
      ease: ease_custom.ease3
    }, 0.15, 1);
    menu.handler.click(function() {
      jQuery(this).toggleClass('loc');
      if (jQuery(this).hasClass('loc')) {
        menu_tl.play();
        menu_tl.timeScale(1);
      }
    });
    menu.close.click(function() {
      menu.handler.removeClass('loc');
      menu_tl.timeScale(1.5);
      menu_tl.reverse();
    });
    if (document.getElementById('home-video')) {
      var vid = document.getElementById("home-video");
      var videoExpand = {
        trigger: jQuery('#video-expand'),
        fade: jQuery('.js-expand-fade-out'),
        holder: jQuery('#video-holder'),
        rightBox: jQuery('#intro-right-box'),
        close: jQuery('#video-close')
      };
      var tl_expand_video = new TimelineMax({
        paused: true,
        reversed: false
      });
      tl_expand_video.to(videoExpand.fade, .7, {
        autoAlpha: 0,
        ease: ease_custom.ease1
      }, 0);
      tl_expand_video.to(videoExpand.holder, 1.4, {
        width: "100%",
        ease: ease_custom.ease1
      }, .5);
      tl_expand_video.to(videoExpand.rightBox, 1.4, {
        width: "0%",
        ease: ease_custom.ease1
      }, .5);
      tl_expand_video.to(videoExpand.close, 1.4, {
        autoAlpha: 1,
        ease: ease_custom.ease1
      }, 1.4);
      videoExpand.trigger.click(function() {
        tl_expand_video.timeScale(1).play();
      });
      videoExpand.close.click(function() {
        tl_expand_video.timeScale(1.5).reverse().eventCallback("onReverseComplete", function() {
          TweenLite.set(videoExpand.holder, {
            clearProps: 'all'
          });
          TweenLite.set(videoExpand.rightBox, {
            clearProps: 'all'
          });
        });
      });
      vid.load();
      vid.play();
    }
    if ($body.hasClass('page-template-gallery')) {
      var gallery = {
        trigger: jQuery('#g-trigger'),
        vertical: jQuery('#v-gallery'),
        horizontal: jQuery('#h-gallery'),
        gFadeout: jQuery('.js-g-fadeout'),
        gLeft: jQuery('.v-gallery--0'),
        gMiddle: jQuery('.v-gallery--1'),
        gRight: jQuery('.v-gallery--2'),
        mask: jQuery('.js-g-img-mask'),
        image: jQuery('.js-g-img'),
        cursor: jQuery('.drag-cursor'),
        header: jQuery('.header'),
        mobileHolder: jQuery('#gallery-m')
      };
      if ($window_w >= 768) {
        var tl_gallery = new TimelineMax({
          paused: true,
          reversed: false,
          onComplete: updateCursor
        });
        tl_gallery.staggerTo(gallery.gFadeout, 1.2, {
          autoAlpha: 0,
          ease: ease_custom.ease1
        }, 0.2, 0)
        tl_gallery.to(gallery.gLeft, 1.6, {
          y: "-100%",
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.3)
        tl_gallery.to(gallery.gMiddle, 1.6, {
          y: "100%",
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.35)
        tl_gallery.to(gallery.gRight, 1.6, {
          y: "-100%",
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.3)
        tl_gallery.to(gallery.vertical, 1.6, {
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.4)
        tl_gallery.set(gallery.horizontal, {
          autoAlpha: 1,
          visibility: "visible"
        }, 2.5)
        tl_gallery.to(gallery.mask, 1.8, {
          scaleY: 0,
          ease: ease_custom.ease3
        }, 2)
        tl_gallery.to(gallery.image, 1.6, {
          scale: 1,
          transformOrigin: "center center",
          ease: ease_custom.ease1
        }, 2)

        function updateCursor() {
          TweenMax.to(gallery.cursor, 1.2, {
            autoAlpha: 1,
            ease: ease_custom.ease1
          })
          gallery.header.mouseenter(function() {
            TweenMax.to(gallery.cursor, 1.2, {
              autoAlpha: 0,
              ease: Expo.easeOut
            })
          });
          gallery.header.mouseleave(function() {
            TweenMax.to(gallery.cursor, 1.2, {
              autoAlpha: 1,
              ease: Expo.easeOut
            })
          });
        }
        gallery.trigger.click(function() {
          tl_gallery.play();
        });
      }
    }
    if ($window_w > 767) {
      if ($body.hasClass('page-template-timeline')) {
        var timeLine = {
          trigger: jQuery('#tl-trigger'),
          vertical: jQuery('#tl-gallery'),
          tlFadeout: jQuery('.js-tl-fadeout'),
          gLeft: jQuery('.v-gallery--0'),
          gMiddle: jQuery('.v-gallery--1'),
          gRight: jQuery('.v-gallery--2')
        };
        var tl_timeline = new TimelineMax({
          paused: true,
          reversed: false
        });
        tl_timeline.staggerTo(timeLine.tlFadeout, 1.2, {
          autoAlpha: 0,
          ease: ease_custom.ease1
        }, 0.2, 0)
        tl_timeline.to(timeLine.gLeft, 1.6, {
          y: "-100%",
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.3)
        tl_timeline.to(timeLine.gMiddle, 1.6, {
          y: "100%",
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.35)
        tl_timeline.to(timeLine.gRight, 1.6, {
          y: "-100%",
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.3)
        tl_timeline.to(timeLine.vertical, 1.6, {
          autoAlpha: 0,
          ease: Expo.easeIn
        }, 0.4)
        timeLine.trigger.click(function(e) {
          e.preventDefault();
          e.stopPropagation();
          var link = jQuery(this).attr('href');
          tl_timeline.play();
          var delay = tl_timeline.duration();
          var delaySet = delay * 1000;
          setTimeout(function() {
            window.location.href = link;
          }, delaySet)
        });
      }
    }
    var categories = {
      trigger: jQuery('#categories-trigger'),
      holder: jQuery('#categories-holder'),
      bg: jQuery('#categories-bg'),
      tb: jQuery('.js-cat-tb'),
      fadeIn: jQuery('.js-cat-fade-in'),
      close: jQuery('.js-cat-close'),
      btn: jQuery('.js-cat-btn')
    };
    var tl_cat = new TimelineMax({
      paused: true,
      reversed: false
    });
    tl_cat.set($body, {
      className: "+=overflow"
    });
    tl_cat.set(categories.holder, {
      autoAlpha: 0
    });
    tl_cat.set(categories.bg, {
      scaleY: 0,
      transformOrigin: "top left"
    });
    tl_cat.set(categories.holder, {
      autoAlpha: 1
    }, 0);
    tl_cat.to(categories.bg, 1.2, {
      scaleY: 1,
      transformOrigin: "top left",
      ease: ease_custom.ease1
    }, 0.2);
    tl_cat.staggerTo(categories.tb, 1.2, {
      y: "0%",
      ease: ease_custom.ease1
    }, 0.2, 0.4);
    tl_cat.staggerTo(categories.fadeIn, 1.2, {
      alpha: 1,
      ease: ease_custom.ease1
    }, 0.15, 0.4);
    tl_cat.to(categories.close, 1.2, {
      alpha: 1,
      ease: ease_custom.ease1
    }, 0.2, 0.8);
    tl_cat.to(categories.btn, 1.2, {
      alpha: 1,
      ease: ease_custom.ease1
    }, 1.2);
    categories.trigger.click(function() {
      jQuery(this).toggleClass('loc');
      if (jQuery(this).hasClass('loc')) {
        tl_cat.play();
        tl_cat.timeScale(1)
      }
    });
    categories.close.click(function() {
      categories.trigger.removeClass('loc');
      tl_cat.timeScale(1.7);
      tl_cat.reverse();
    });
    var tl_ns = new TimelineMax({
      paused: true
    });
    var ns = {
      opener: jQuery('.open-ns-popup'),
      holder: jQuery('#ns-popup-holder'),
      bg: jQuery('#ns-popup-bg'),
      close: jQuery('#ns-popup-close'),
      fade: jQuery('.js-anim-fade')
    };
    tl_ns.set($body, {
      className: "+=overflow"
    });
    tl_ns.set(ns.holder, {
      autoAlpha: 0
    });
    tl_ns.set(ns.bg, {
      scaleY: 0,
      transformOrigin: "top right"
    });
    tl_ns.set(ns.holder, {
      autoAlpha: 1
    }, 0);
    tl_ns.to(ns.bg, 1.2, {
      scaleY: 1,
      transformOrigin: "top right",
      ease: ease_custom.ease1
    }, 0.2);
    tl_ns.staggerTo(ns.fade, 1, {
      autoAlpha: 1
    }, 0.2, 1);
    ns.opener.add(ns.close).click(function() {
      ns.holder.toggleClass('loc');
      if (ns.holder.hasClass("loc")) {
        tl_ns.play();
      } else {
        tl_ns.timeScale(1.5).reverse();
      }
    });
    if ($body.hasClass('page-template-timeline-years')) {
      var timeline = {
        progress: jQuery('.progress')
      };
      jQuery(window).scroll(function() {
        timeline.progress.css('width', (jQuery(this).scrollTop() / ($body.height() - $window_h)) * 100 + "%");
      });
    }
    var video = {
      trigger: jQuery('.video-target'),
      container: jQuery('#video-container'),
      bg: jQuery('#video__bg'),
      close: jQuery('#video-close'),
      jsFade: jQuery('.js-video-fade'),
      ajax_video_holder: jQuery('#ajax-video')
    };
    var video_tl = new TimelineMax({
      paused: true,
      reverse: false
    });
    video_tl.set($body, {
      className: "+=overflow"
    }).set(video.container, {
      autoAlpha: 0
    }).set(video.jsFade, {
      autoAlpha: 0
    }).to(video.container, 0.01, {
      autoAlpha: 1
    }, 0).to(video.bg, 1, {
      scaleX: 1.2,
      transformOrigin: "top right",
      ease: ease_custom.ease3
    }).set(video.close, {
      className: '+=loc'
    });
    video.trigger.each(function() {
      var el = jQuery(this);
      jQuery(el).click(function() {
        jQuery.ajax({
          url: templateURL + 'ajax_video.php',
          type: 'post',
          data: {
            video_url: el.data('target'),
            video_text: el.data('content')
          },
          success: function(reply) {
            video.ajax_video_holder.html(reply);
            var jsFade = jQuery('.js-video-fade');
            setTimeout(function() {
              video_tl.to(jsFade, .7, {
                autoAlpha: 1
              })
            }, 100)
          }
        });
        video_tl.timeScale(1).play();
      })
    });
    video.close.click(function() {
      video_tl.timeScale(1.5).reverse();
      setTimeout(function() {
        jQuery('#ajax-video').empty();
      }, 800)
    });
    if (document.getElementById('member-images')) {
      var title_link = jQuery(".member-link");
      jQuery(title_link).each(function() {
        var _this = jQuery(this)[0];
        var rect = _this.getBoundingClientRect();
        console.log(rect);
        jQuery(".contact-page__content").mousemove(function(e) {
          TweenMax.to(".member-images", .2, {
            x: e.clientX,
            y: e.pageY
          })
        });
      });
      title_link.on('mouseover', function() {
        var target = jQuery(this).attr("data-target");
        jQuery(".member-images__holder[data-target = " + target + "]").addClass("loc");
      });
      title_link.on('mouseleave', function() {
        jQuery('.member-images__holder').removeClass("loc")
      })
    }
    Main.el.scroll_to.click(function() {
      var target = (jQuery(this).data('target') !== undefined) ? jQuery(this).data('target') : '';
      var position = (jQuery(this).data('position') !== undefined) ? jQuery(this).data('position') : false;
      var offset = (jQuery(this).data('goto_offset') !== undefined) ? jQuery(this).data('goto_offset') : 105;
      var speed = (jQuery(this).data('goto_speed') !== undefined) ? jQuery(this).data('goto_speed') : 1000;
      if (position !== false && position >= 0) {
        scroll_to_position(position, speed);
      } else {
        scroll_to_element(jQuery(target), offset, speed);
      }
    });
    if (os == 'windows') {
      setTimeout(function() {
        skrollr__init();
      }, 500)
    } else {
      skrollr__init();
    }

    function skrollr__init() {
      skrollr.init({
        render: function(data) {},
        keyframe: function(element, name, direction) {
          var tl_anim = new TimelineMax();
          var $content = jQuery(element);
          var delay = jQuery(element).data('delay');
          var trans = jQuery(element).data('trans');
          var ease = jQuery(element).data('ease');
          var cubic = jQuery(element).data('cubic');
          if (trans == undefined) {
            trans = 1.2;
          }
          if (delay == undefined) {
            delay = 0;
          }
          if ($content.hasClass('video-in-view') && name == "dataBottomTop" && direction == "down") {
            if ($content.hasClass('video-in-view')) {
              var vid = document.getElementById("video-in-view");
              vid.play();
            }
          }
          if ($content.hasClass('js-clear') && name == "dataTopBottom" && direction == "down") {
            ClearProps()
            console.log('clear');
          }
          if ($content.hasClass('in-view') && name == "dataBottomTop" && direction == "down") {
            if ($content.hasClass('js-img-reveal')) {
              if (cubic == undefined || cubic != 'custom') {
                ease = ease_custom.ease1
              } else {
                ease = ease_custom.ease3
              }
              var holderDelay = jQuery(element).find('.js-img-reveal__holder').data('delay');
              var imageDelay = jQuery(element).find('.js-img-reveal__image').data('delay');
              var zoomDelay = jQuery(element).find('.js-zoom-out').data('delay');
              var holderTrans = jQuery(element).find('.js-img-reveal__holder').data('trans');
              var imageTrans = jQuery(element).find('.js-img-reveal__image').data('trans');
              var zoomTrans = jQuery(element).find('.js-zoom-out').data('trans');
              console.log(zoomTrans);
              tl_anim.to(jQuery(element).find('.js-img-reveal__holder'), holderTrans, {
                y: 0,
                ease: ease
              }, holderDelay);
              tl_anim.to(jQuery(element).find('.js-img-reveal__image'), imageTrans, {
                y: 0,
                ease: ease
              }, imageDelay);
              tl_anim.to(jQuery(element).find('.js-zoom-out '), zoomTrans, {
                scale: 1,
                transformOrigin: "center center",
                ease: ease
              }, zoomDelay);
            }
            if ($content.hasClass('js-s-x')) {
              tl_anim.to(jQuery(element), trans, {
                scaleX: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-s-y')) {
              tl_anim.to(jQuery(element), trans, {
                scaleY: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-s')) {
              tl_anim.to(jQuery(element), trans, {
                scale: 1,
                alpha: 1,
                ease: ease_custom.ease1,
                transformOrigin: "center center"
              }, delay);
            }
            if ($content.hasClass('js-s-alpha')) {
              tl_anim.to(jQuery(element), trans, {
                scale: 1,
                alpha: 0.6,
                ease: ease_custom.ease1,
                transformOrigin: "center center"
              }, delay);
            }
            if ($content.hasClass('js-s-xz')) {
              tl_anim.to(jQuery(element), trans, {
                scaleX: 0,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-s-yz')) {
              tl_anim.to(jQuery(element), trans, {
                scaleY: 0,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-zoom-out')) {
              if (cubic == undefined || cubic != 'custom') {
                ease = ease_custom.ease1
              } else {
                ease = ease_custom.ease2
              }
              tl_anim.to(jQuery(element), trans, {
                scale: 1,
                alpha: 1,
                transfromOrigin: "center center",
                ease: ease
              }, delay);
            }
            if ($content.hasClass('js-mask-reveal')) {
              if (cubic == undefined || cubic != 'custom') {
                ease = ease_custom.ease3
              } else {
                ease = ease_custom.ease2
              }
              tl_anim.to(jQuery(element).find('.js-mask-reveal__mask'), 1.6, {
                scaleY: 0,
                ease: ease_custom.ease3
              }, delay);
              tl_anim.to(jQuery(element).find('.js-mask-reveal__img'), 1.3, {
                scale: 1,
                transformOrigin: "center center",
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-zoom-r')) {
              if (cubic == undefined || cubic != 'custom') {
                ease = ease_custom.ease3
              } else {
                ease = ease_custom.ease2
              }
              tl_anim.to(jQuery(element).find('.js-zoom-r__holder'), 1.24, {
                scale: 1,
                transfromOrigin: "center center",
                ease: ease,
                rotation: 0
              }, delay);
              tl_anim.to(jQuery(element).find('.js-zoom-r__img'), 1.2, {
                scale: 1,
                alpha: 1,
                transfromOrigin: "center center",
                ease: ease,
                rotation: 0
              }, delay);
            }
            if ($content.hasClass('js-letters')) {
              var content = new SplitText(jQuery(element).find('.js-letters__title'), {
                  type: "chars lines",
                  linesClass: "overflow"
                }),
                content_chars = content.chars;
              tl_anim.set(element, {
                alpha: 1
              }, 0);
              tl_anim.staggerFromTo(content_chars, 1.2, {
                y: "100%"
              }, {
                y: "0%",
                ease: ease_custom.ease1
              }, 0.03, delay);
            }
            if ($content.hasClass('js-t-rtl')) {
              tl_anim.to(jQuery(element), trans, {
                x: 0,
                autoAlpha: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-t-btt')) {
              tl_anim.to(jQuery(element), trans, {
                y: 0,
                autoAlpha: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-t-ttb')) {
              tl_anim.to(jQuery(element), trans, {
                y: 0,
                autoAlpha: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-t-btt')) {
              tl_anim.to(jQuery(element), trans, {
                y: 0,
                autoAlpha: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            if ($content.hasClass('js-fade-in')) {
              tl_anim.to(element, trans, {
                autoAlpha: 1,
                ease: ease_custom.ease1
              }, delay);
            }
            $content.addClass('loc');
          } else {
            $content.removeClass('in-view');
          }

          function ClearProps() {
            $content.removeClass('in-view');
            tl_anim.progress(1);
            console.log(content);
            if (content == undefined) {} else {
              content.revert();
            }
          }
        },
        mobileCheck: function() {
          return false;
        },
        forceHeight: false
      });
    };
    var acceptNewsletter = jQuery("#ns-accept");
    var acceptText = jQuery(".ns-accept");
    acceptNewsletter.on("click", function() {
      if (jQuery(this).hasClass('check')) {
        jQuery(this).removeClass('check');
      } else {
        jQuery(this).addClass('check');
        acceptText.removeClass('ns-error-accept');
      }
    });
    jQuery("#ns-submit").on("click", function() {
      if (acceptNewsletter.hasClass('check')) {} else {
        acceptText.addClass('ns-error-accept');
      }
      var formid = jQuery(this).parents('form').attr("id");
      var reply = jQuery(jQuery(this).data('reply'));
      Main.checkform_ns(formid, reply);
    });
    jQuery("#gen_inq_button").click(function() {
      jQuery("#gen_inq_button").hasClass("active") || (jQuery("#gen_inq_button").addClass("active"), jQuery("#rec_desk_button").removeClass("active"), jQuery("#gen_inq_button span").addClass("btn-full--bl color--team").removeClass("btn--black btn--h-cream "), jQuery("#rec_desk_button span").addClass("btn--black btn--h-cream ").removeClass("btn-full--bl color--team"), jQuery("#reception_form").fadeOut(function() {
        jQuery("#inquiry_form").fadeIn()
      }))
    }), jQuery("#rec_desk_button").click(function() {
      jQuery("#rec_desk_button").hasClass("active") || (jQuery("#rec_desk_button").addClass("active"), jQuery("#gen_inq_button").removeClass("active"), jQuery("#rec_desk_button span").addClass("btn-full--bl color--team").removeClass("btn--black btn--h-cream "), jQuery("#gen_inq_button span").addClass("btn--black btn--h-cream ").removeClass("btn-full--bl color--team"), jQuery("#inquiry_form").fadeOut(function() {
        jQuery("#reception_form").fadeIn()
      }))
    })
  },
  checkform_ns: function(formid, $reply_holder) {
    clear_errors(formid);
    var flag = 1,
      id;
    var $this_form = jQuery('#' + formid);
    $this_form.find(".required").each(function() {
      id = jQuery(this).attr("id");
      if (jQuery(this).val() === "" || jQuery(this).val() === document.getElementById(id).defaultValue) {
        flag = 0;
        show_error(id, formid);
        jQuery($reply_holder).html('<div class="reply-error color--red">' + $this_form.data('error_mandatory') + '</div>');
      }
    });
    $this_form.find(".required-chk").each(function() {
      if (!jQuery(this).prop("checked")) {
        flag = 0;
        show_error(id, formid);
        jQuery($reply_holder).html('<div class="reply-error color--red">' + $this_form.data('error_mandatory') + '</div>');
      }
    });
    if (flag === 1) {
      $this_form.find(".email").each(function() {
        id = jQuery(this).attr("id");
        if (checkEmail(id) === false && flag === 1) {
          flag = 0;
          show_error(id, formid);
          jQuery($reply_holder).html('<div class="reply-error color--red">' + $this_form.data('error_email') + '</div>');
          return false;
        }
      });
    } else {
      return false;
    }
    if ($this_form.find("#ns-check").val() !== "") {
      flag = 0;
      return false;
    }
    if (flag === 1) {
      var data = $this_form.serialize();
      jQuery($reply_holder).html('<div class="loading"></div>');
      jQuery.post(templateURL + "ajax_ns_submit.php", data).done(function(reply) {
        jQuery($reply_holder).html(reply);
      });
    }
  },
  resizing: function() {
    Main.vars.window_w = Main.el.window.width();
    Main.vars.window_h = Main.el.window.height();
    jQuery("#test").html(Main.vars.window_w + 'x' + Main.vars.window_h);
  }
};
jQuery(window).load(function() {
  Main.init();
});
var debounce_resize = _debounce(Main.resizing, 70);
onresize = debounce_resize;
jQuery(document).ready(function($) {
  $('.intro-service').mouseover(function() {
    var hero_item = "#" + $(this).data('image-hover');
    $(hero_item).addClass('active');
  });
  $('.intro-service').mouseout(function() {
    $('.hero_cat_img').removeClass('active');
  });
});
