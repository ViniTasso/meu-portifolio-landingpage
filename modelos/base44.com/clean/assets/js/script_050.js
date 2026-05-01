! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("rb_wixui.corvid[CustomElementComponent]", [], t) : "object" == typeof exports ? exports["rb_wixui.corvid[CustomElementComponent]"] = t() : e["rb_wixui.corvid[CustomElementComponent]"] = t()
}("undefined" != typeof self ? self : this, function() {
  return function() {
    "use strict";
    var e, t = {
        uHnH: function(e, t, r) {
          r.r(t), r.d(t, {
            components: function() {
              return v
            }
          });
          var n = r("iEnL"),
            o = r("J/5L"),
            i = r("fFB0");
          var u = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
          };
          let s;
          const c = new Uint8Array(16);

          function f() {
            if (!s && (s = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !s)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return s(c)
          }
          const p = [];
          for (let e = 0; e < 256; ++e) p.push((e + 256).toString(16).slice(1));

          function d(e, t = 0) {
            return p[e[t + 0]] + p[e[t + 1]] + p[e[t + 2]] + p[e[t + 3]] + "-" + p[e[t + 4]] + p[e[t + 5]] + "-" + p[e[t + 6]] + p[e[t + 7]] + "-" + p[e[t + 8]] + p[e[t + 9]] + "-" + p[e[t + 10]] + p[e[t + 11]] + p[e[t + 12]] + p[e[t + 13]] + p[e[t + 14]] + p[e[t + 15]]
          }
          var a = function(e, t, r) {
            if (u.randomUUID && !t && !e) return u.randomUUID();
            const n = (e = e || {}).random || (e.rng || f)();
            if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
              r = r || 0;
              for (let e = 0; e < 16; ++e) t[r + e] = n[e];
              return t
            }
            return d(n)
          };
          const l = (0, n.S)(e => {
              let {
                setProps: t,
                props: r,
                registerEvent: n,
                createSdkState: o
              } = e;
              const [i, u] = o({});
              n("handleEvents", e => {
                i[e.type] && i[e.type].forEach(t => t(e))
              });
              const s = function(e, r) {
                i[e] ? u({
                  [e]: [...i[e], r]
                }) : u({
                  [e]: [r]
                }), t({
                  events: Object.keys(i)
                })
              };
              return {
                get seoMarkup() {
                  return r.seoMarkup
                },
                set seoMarkup(e) {
                  t({
                    seoMarkup: e
                  })
                },
                setAttribute(e, n) {
                  t({
                    attributes: {
                      ...r.attributes,
                      [e]: n
                    }
                  })
                },
                on: s,
                setDirectMethod(e, n) {
                  const o = a();
                  s(e + "__" + o, e => {
                    var t, r;
                    const o = null != (t = null == e || null == (r = e.detail) ? void 0 : r.args) ? t : [];
                    n(...o)
                  }), t({
                    directMethods: {
                      ...r.directMethods,
                      [e]: o
                    }
                  })
                },
                setDirectProp(e, n) {
                  t({
                    directProps: {
                      ...r.directProps,
                      [e]: n
                    }
                  })
                }
              }
            }, {
              type: ["object"],
              properties: {
                seoMarkup: {
                  type: ["string"]
                }
              }
            }),
            y = (0, o.QI)(),
            m = (0, i.K)([y, l]);
          const v = {
            CustomElementComponent: {
              sdk: {
                factory: m
              }
            }
          }
        }
      },
      r = {};

    function n(e) {
      var o = r[e];
      if (void 0 !== o) return o.exports;
      var i = r[e] = {
        exports: {}
      };
      return t[e](i, i.exports, n), i.exports
    }
    n.m = t, e = [], n.O = function(t, r, o, i) {
        if (!r) {
          var u = 1 / 0;
          for (p = 0; p < e.length; p++) {
            r = e[p][0], o = e[p][1], i = e[p][2];
            for (var s = !0, c = 0; c < r.length; c++)(!1 & i || u >= i) && Object.keys(n.O).every(function(e) {
              return n.O[e](r[c])
            }) ? r.splice(c--, 1) : (s = !1, i < u && (u = i));
            if (s) {
              e.splice(p--, 1);
              var f = o();
              void 0 !== f && (t = f)
            }
          }
          return t
        }
        i = i || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
        e[p] = [r, o, i]
      }, n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        })
      }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        })
      }, n.j = 8073,
      function() {
        var e = {
          8073: 0
        };
        n.O.j = function(t) {
          return 0 === e[t]
        };
        var t = function(t, r) {
            var o, i, u = r[0],
              s = r[1],
              c = r[2],
              f = 0;
            if (u.some(function(t) {
                return 0 !== e[t]
              })) {
              for (o in s) n.o(s, o) && (n.m[o] = s[o]);
              if (c) var p = c(n)
            }
            for (t && t(r); f < u.length; f++) i = u[f], n.o(e, i) && e[i] && e[i][0](), e[i] = 0;
            return n.O(p)
          },
          r = ("undefined" != typeof self ? self : this).webpackJsonp__wix_editor_elements_library = ("undefined" != typeof self ? self : this).webpackJsonp__wix_editor_elements_library || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
      }();
    var o = n.O(void 0, [8409], function() {
      return n("uHnH")
    });
    return o = n.O(o)
  }()
});
