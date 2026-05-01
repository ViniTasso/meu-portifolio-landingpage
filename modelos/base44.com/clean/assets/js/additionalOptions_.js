! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(["globals"], t) : "object" == typeof exports ? exports.zsj1t = t() : e.zsj1t = t()
}(this, (function(globals) {
  var $w = globals.$w,
    $ns = globals.$ns,
    $widget = (globals.$wixContext, globals.$widget);
  globals.console, globals.elementorySupport, globals.generateWebMethodUrl;
  return function() {
    "use strict";
    var e = {
        r: function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }
      },
      t = {};
    e.r(t);
    var i = $ns["wix-animations"];
    return $w.onReady((function() {
      $w("#Repeater").onItemReady((function(e, t, n) {
        var o = (0, i.timeline)().add(e("#itemIcon"), {
          duration: 250,
          rotate: 135,
          easing: "easeOutSine"
        });
        0 === n && ($widget.props.openFirstQuestion ? (o.play(), e("#ItemDescriptionCTN").expand().then((function() {
          e("#ItemButton").accessibility.ariaAttributes.expanded = !0
        }))) : (o.reverse(), e("#ItemDescriptionCTN").collapse().then((function() {
          e("#ItemButton").accessibility.ariaAttributes.expanded = !0
        })))), e("#ItemButton").accessibility.ariaAttributes.expanded = !1, e("#ItemButton").accessibility.ariaAttributes.describedBy = e("#ItemHeading"), e("#ItemButton").onClick((function() {
          e("#ItemDescriptionCTN").isVisible ? (o.reverse(), e("#ItemDescriptionCTN").collapse().then((function() {
            e("#ItemButton").accessibility.ariaAttributes.expanded = !1
          }))) : (o.play(), e("#ItemDescriptionCTN").expand().then((function() {
            e("#ItemButton").accessibility.ariaAttributes.expanded = !0
          })))
        }))
      }))
    })), $widget.onPropsChanged((function(e, t) {
      t.openFirstQuestion ? $w("#Repeater").forEachItem((function(e, t, n) {
        0 === n && ((0, i.timeline)().add(e("#itemIcon"), {
          duration: 250,
          rotate: 135,
          easing: "easeOutSine"
        }).play(), e("#ItemDescriptionCTN").expand().then((function() {
          e("#ItemButton").accessibility.ariaAttributes.expanded = !0
        })))
      })) : $w("#Repeater").forEachItem((function(e, t, n) {
        0 === n && ((0, i.timeline)().add(e("#itemIcon"), {
          duration: 250,
          rotate: 0,
          easing: "easeOutSine"
        }).play(), e("#ItemDescriptionCTN").collapse().then((function() {
          e("#ItemButton").accessibility.ariaAttributes.expanded = !0
        })))
      }))
    })), t
  }()
}));
