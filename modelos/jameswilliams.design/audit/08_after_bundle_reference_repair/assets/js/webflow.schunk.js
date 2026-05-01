(self.webpackChunk = self.webpackChunk || []).push([
  ["282"], {
    5487: function() {
      "use strict";
      window.tram = function(e) {
        function t(e, t) {
          return (new G.Bare).init(e, t)
        }

        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }

        function a(e, t, n) {
          return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
        }

        function i() {}

        function o(e, t, n) {
          if (void 0 !== t && (n = t), void 0 === e) return n;
          var a = n;
          return $.test(e) || !q.test(e) ? a = parseInt(e, 10) : q.test(e) && (a = 1e3 * parseFloat(e)), 0 > a && (a = 0), a == a ? a : n
        }

        function l(e) {
          X.debug && window && window.console.warn(e)
        }
        var d, c, r, s = function(e, t, n) {
            function a(e) {
              return "object" == typeof e
            }

            function i(e) {
              return "function" == typeof e
            }

            function o() {}
            return function l(d, c) {
              function r() {
                var e = new s;
                return i(e.init) && e.init.apply(e, arguments), e
              }

              function s() {}
              c === n && (c = d, d = Object), r.Bare = s;
              var u, f = o[e] = d[e],
                p = s[e] = r[e] = new o;
              return p.constructor = r, r.mixin = function(t) {
                return s[e] = r[e] = l(r, t)[e], r
              }, r.open = function(e) {
                if (u = {}, i(e) ? u = e.call(r, p, f, r, d) : a(e) && (u = e), a(u))
                  for (var n in u) t.call(u, n) && (p[n] = u[n]);
                return i(p.init) || (p.init = d), r
              }, r.open(c)
            }
          }("prototype", {}.hasOwnProperty),
          u = {
            ease: ["ease", function(e, t, n, a) {
              var i = (e /= a) * e,
                o = i * e;
              return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
            }],
            "ease-in": ["ease-in", function(e, t, n, a) {
              var i = (e /= a) * e,
                o = i * e;
              return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
            }],
            "ease-out": ["ease-out", function(e, t, n, a) {
              var i = (e /= a) * e,
                o = i * e;
              return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
            }],
            "ease-in-out": ["ease-in-out", function(e, t, n, a) {
              var i = (e /= a) * e,
                o = i * e;
              return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
            }],
            linear: ["linear", function(e, t, n, a) {
              return n * e / a + t
            }],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, a) {
              return n * (e /= a) * e + t
            }],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, a) {
              return -n * (e /= a) * (e - 2) + t
            }],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, a) {
              return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
            }],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, a) {
              return n * (e /= a) * e * e + t
            }],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, a) {
              return n * ((e = e / a - 1) * e * e + 1) + t
            }],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, a) {
              return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
            }],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, a) {
              return n * (e /= a) * e * e * e + t
            }],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, a) {
              return -n * ((e = e / a - 1) * e * e * e - 1) + t
            }],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, a) {
              return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
            }],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, a) {
              return n * (e /= a) * e * e * e * e + t
            }],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, a) {
              return n * ((e = e / a - 1) * e * e * e * e + 1) + t
            }],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, a) {
              return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
            }],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, a) {
              return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
            }],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, a) {
              return n * Math.sin(e / a * (Math.PI / 2)) + t
            }],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, a) {
              return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
            }],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, a) {
              return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
            }],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, a) {
              return e === a ? t + n : n * (-Math.pow(2, -10 * e / a) + 1) + t
            }],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, a) {
              return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
            }],
            "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, a) {
              return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
            }],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, a) {
              return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
            }],
            "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, a) {
              return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
            }],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, a, i) {
              return void 0 === i && (i = 1.70158), n * (e /= a) * e * ((i + 1) * e - i) + t
            }],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, a, i) {
              return void 0 === i && (i = 1.70158), n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
            }],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, a, i) {
              return void 0 === i && (i = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
            }]
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          },
          p = window,
          E = "bkwld-tram",
          I = /[\-\.0-9]/g,
          T = /[A-Z]/,
          y = "number",
          b = /^(rgb|#)/,
          g = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          _ = /(all|none) 0s ease 0s/,
          R = /^(width|height)$/,
          N = document.createElement("a"),
          L = ["Webkit", "Moz", "O", "ms"],
          A = ["-webkit-", "-moz-", "-o-", "-ms-"],
          h = function(e) {
            if (e in N.style) return {
              dom: e,
              css: e
            };
            var t, n, a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++) a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < L.length; t++)
              if ((n = L[t] + a) in N.style) return {
                dom: n,
                css: A[t] + e
              }
          },
          S = t.support = {
            bind: Function.prototype.bind,
            transform: h("transform"),
            transition: h("transition"),
            backface: h("backface-visibility"),
            timing: h("transition-timing-function")
          };
        if (S.transition) {
          var C = S.timing.dom;
          if (N.style[C] = u["ease-in-back"][0], !N.style[C])
            for (var M in f) u[M][0] = f[M]
        }
        var U = t.frame = (d = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && S.bind ? d.bind(p) : function(e) {
            p.setTimeout(e, 16)
          },
          w = t.now = (r = (c = p.performance) && (c.now || c.webkitNow || c.msNow || c.mozNow)) && S.bind ? r.bind(c) : Date.now || function() {
            return +new Date
          },
          V = s(function(t) {
            function n(e, t) {
              var n = function(e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n;) {
                    var i = e[t];
                    i && a.push(i)
                  }
                  return a
                }(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = z[a];
              if (!i) return l("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  d = this.props[a];
                return d || (d = this.props[a] = new o.Bare), d.init(this.$el, n, i, t), d
              }
            }

            function a(e, t, a) {
              if (e) {
                var l = typeof e;
                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == l && t) return this.timer = new B({
                  duration: e,
                  context: this,
                  complete: i
                }), void(this.active = !0);
                if ("string" == l && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      d.call(this);
                      break;
                    case "redraw":
                      r.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1])
                  }
                  return i.call(this)
                }
                if ("function" == l) return void e.call(this, this);
                if ("object" == l) {
                  var f = 0;
                  u.call(this, e, function(e, t) {
                    e.span > f && (f = e.span), e.stop(), e.animate(t)
                  }, function(e) {
                    "wait" in e && (f = o(e.wait, 0))
                  }), s.call(this), f > 0 && (this.timer = new B({
                    duration: f,
                    context: this
                  }), this.active = !0, t && (this.timer.complete = i));
                  var p = this,
                    E = !1,
                    I = {};
                  U(function() {
                    u.call(p, e, function(e) {
                      e.active && (E = !0, I[e.name] = e.nextStyle)
                    }), E && p.$el.css(I)
                  })
                }
              }
            }

            function i() {
              if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args)
              }
            }

            function d(e) {
              var t;
              this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
            }

            function c() {
              d.call(this), this.el.style.display = "none"
            }

            function r() {
              this.el.offsetHeight
            }

            function s() {
              var e, t, n = [];
              for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
              n = n.join(","), this.style !== n && (this.style = n, this.el.style[S.transition.dom] = n)
            }

            function u(e, t, a) {
              var i, o, l, d, c = t !== f,
                r = {};
              for (i in e) l = e[i], i in j ? (r.transform || (r.transform = {}), r.transform[i] = l) : (T.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
              })), i in z ? r[i] = l : (d || (d = {}), d[i] = l));
              for (i in r) {
                if (l = r[i], !(o = this.props[i])) {
                  if (!c) continue;
                  o = n.call(this, i)
                }
                t.call(this, o, l)
              }
              a && d && a.call(this, d)
            }

            function f(e) {
              e.stop()
            }

            function p(e, t) {
              e.set(t)
            }

            function I(e) {
              this.$el.css(e)
            }

            function y(e, n) {
              t[e] = function() {
                return this.children ? b.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
              }
            }

            function b(e, t) {
              var n, a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this
            }
            t.init = function(t) {
              if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
                var n = Y(this.el, "transition");
                n && !_.test(n) && (this.upstream = n)
              }
              S.backface && X.hideBackface && H(this.el, S.backface.css, "hidden")
            }, y("add", n), y("start", a), y("wait", function(e) {
              e = o(e, 0), this.active ? this.queue.push({
                options: e
              }) : (this.timer = new B({
                duration: e,
                context: this,
                complete: i
              }), this.active = !0)
            }), y("then", function(e) {
              return this.active ? (this.queue.push({
                options: e,
                args: arguments
              }), void(this.timer.complete = i)) : l("No active transition timer. Use start() or wait() before then().")
            }), y("next", i), y("stop", d), y("set", function(e) {
              d.call(this, e), u.call(this, e, p, I)
            }), y("show", function(e) {
              "string" != typeof e && (e = "block"), this.el.style.display = e
            }), y("hide", c), y("redraw", r), y("destroy", function() {
              d.call(this), e.removeData(this.el, E), this.$el = this.el = null
            })
          }),
          G = s(V, function(t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new V.Bare);
              return a.el || a.init(t), n ? a.start(n) : a
            }
            t.init = function(t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return i.each(function(e, t) {
                o.push(n(t, a))
              }), this.children = o, this
            }
          }),
          P = s(function(e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t
            }
            e.init = function(e, t, n, a) {
              this.$el = e, this.el = e[0];
              var i, l, d, c = t[0];
              n[2] && (c = n[2]), W[c] && (c = W[c]), this.name = c, this.type = n[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], l = this.ease, d = "ease", void 0 !== l && (d = l), i in u ? i : d), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = R.test(this.name), this.unit = a.unit || this.unit || X.defaultUnit, this.angle = a.angle || this.angle || X.defaultAngle, X.fallback || a.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
            }, e.set = function(e) {
              e = this.convert(e, this.type), this.update(e), this.redraw()
            }, e.transition = function(e) {
              this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
            }, e.fallback = function(e) {
              var n = this.el.style[this.name] || this.convert(this.get(), this.type);
              e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new D({
                from: n,
                to: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              })
            }, e.get = function() {
              return Y(this.el, this.name)
            }, e.update = function(e) {
              H(this.el, this.name, e)
            }, e.stop = function() {
              (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
              var e = this.tween;
              e && e.context && e.destroy()
            }, e.convert = function(e, t) {
              if ("auto" == e && this.auto) return e;
              var n, i, o = "number" == typeof e,
                d = "string" == typeof e;
              switch (t) {
                case y:
                  if (o) return e;
                  if (d && "" === e.replace(I, "")) return +e;
                  i = "number(unitless)";
                  break;
                case b:
                  if (d) {
                    if ("" === e && this.original) return this.original;
                    if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? a(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                  }
                  i = "hex or rgb string";
                  break;
                case g:
                  if (o) return e + this.unit;
                  if (d && t.test(e)) return e;
                  i = "number(px) or string(unit)";
                  break;
                case m:
                  if (o) return e + this.unit;
                  if (d && t.test(e)) return e;
                  i = "number(px) or string(unit or %)";
                  break;
                case O:
                  if (o) return e + this.angle;
                  if (d && t.test(e)) return e;
                  i = "number(deg) or string(angle)";
                  break;
                case v:
                  if (o || d && m.test(e)) return e;
                  i = "number(unitless) or string(unit or %)"
              }
              return l("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
            }, e.redraw = function() {
              this.el.offsetHeight
            }
          }),
          k = s(P, function(e, t) {
            e.init = function() {
              t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
            }
          }),
          x = s(P, function(e, t) {
            e.init = function() {
              t.init.apply(this, arguments), this.animate = this.fallback
            }, e.get = function() {
              return this.$el[this.name]()
            }, e.update = function(e) {
              this.$el[this.name](e)
            }
          }),
          F = s(P, function(e, t) {
            function n(e, t) {
              var n, a, i, o, l;
              for (n in e) i = (o = j[n])[0], a = o[1] || n, l = this.convert(e[n], i), t.call(this, a, l, i)
            }
            e.init = function() {
              t.init.apply(this, arguments), this.current || (this.current = {}, j.perspective && X.perspective && (this.current.perspective = X.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
            }, e.set = function(e) {
              n.call(this, e, function(e, t) {
                this.current[e] = t
              }), H(this.el, this.name, this.style(this.current)), this.redraw()
            }, e.transition = function(e) {
              var t = this.values(e);
              this.tween = new Q({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
              });
              var n, a = {};
              for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
              this.active = !0, this.nextStyle = this.style(a)
            }, e.fallback = function(e) {
              var t = this.values(e);
              this.tween = new Q({
                current: this.current,
                values: t,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              })
            }, e.update = function() {
              H(this.el, this.name, this.style(this.current))
            }, e.style = function(e) {
              var t, n = "";
              for (t in e) n += t + "(" + e[t] + ") ";
              return n
            }, e.values = function(e) {
              var t, a = {};
              return n.call(this, e, function(e, n, i) {
                a[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
              }), a
            }
          }),
          D = s(function(t) {
            function o() {
              var e, t, n, a = c.length;
              if (a)
                for (U(o), t = w(), e = a; e--;)(n = c[e]) && n.render(t)
            }
            var d = {
              ease: u.ease[1],
              from: 0,
              to: 1
            };
            t.init = function(e) {
              this.duration = e.duration || 0, this.delay = e.delay || 0;
              var t = e.ease || d.ease;
              u[t] && (t = u[t][1]), "function" != typeof t && (t = d.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
              var n = e.from,
                a = e.to;
              void 0 === n && (n = d.from), void 0 === a && (a = d.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof a ? (this.begin = n, this.change = a - n) : this.format(a, n), this.value = this.begin + this.unit, this.start = w(), !1 !== e.autoplay && this.play()
            }, t.play = function() {
              this.active || (this.start || (this.start = w()), this.active = !0, 1 === c.push(this) && U(o))
            }, t.stop = function() {
              var t, n;
              this.active && (this.active = !1, (n = e.inArray(this, c)) >= 0 && (t = c.slice(n + 1), c.length = n, t.length && (c = c.concat(t))))
            }, t.render = function(e) {
              var t, n = e - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay
              }
              if (n < this.duration) {
                var i, o, l = this.ease(n, 0, 1, this.duration);
                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, a(i[0] + l * (o[0] - i[0]), i[1] + l * (o[1] - i[1]), i[2] + l * (o[2] - i[2]))) : Math.round((this.begin + l * this.change) * r) / r, this.value = t + this.unit, void this.update.call(this.context, this.value)
              }
              t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
            }, t.format = function(e, t) {
              if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
              if (!this.unit) {
                var a = t.replace(I, "");
                a !== e.replace(I, "") && l("Units do not match [tween]: " + t + ", " + e), this.unit = a
              }
              t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
            }, t.destroy = function() {
              this.stop(), this.context = null, this.ease = this.update = this.complete = i
            };
            var c = [],
              r = 1e3
          }),
          B = s(D, function(e) {
            e.init = function(e) {
              this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
            }, e.render = function(e) {
              e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
            }
          }),
          Q = s(D, function(e, t) {
            e.init = function(e) {
              var t, n;
              for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new D({
                name: t,
                from: this.current[t],
                to: n,
                duration: e.duration,
                delay: e.delay,
                ease: e.ease,
                autoplay: !1
              }));
              this.play()
            }, e.render = function(e) {
              var t, n, a = this.tweens.length,
                i = !1;
              for (t = a; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, i = !0);
              return i ? void(this.update && this.update.call(this.context)) : this.destroy()
            }, e.destroy = function() {
              if (t.destroy.call(this), this.tweens) {
                var e;
                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                this.tweens = null, this.current = null
              }
            }
          }),
          X = t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: []
          };
        t.fallback = function(e) {
          if (!S.transition) return X.fallback = !0;
          X.agentTests.push("(" + e + ")");
          var t = RegExp(X.agentTests.join("|"), "i");
          X.fallback = t.test(navigator.userAgent)
        }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
          return new D(e)
        }, t.delay = function(e, t, n) {
          return new B({
            complete: t,
            duration: e,
            context: n
          })
        }, e.fn.tram = function(e) {
          return t.call(null, this, e)
        };
        var H = e.style,
          Y = e.css,
          W = {
            transform: S.transform && S.transform.css
          },
          z = {
            color: [k, b],
            background: [k, b, "background-color"],
            "outline-color": [k, b],
            "border-color": [k, b],
            "border-top-color": [k, b],
            "border-right-color": [k, b],
            "border-bottom-color": [k, b],
            "border-left-color": [k, b],
            "border-width": [P, g],
            "border-top-width": [P, g],
            "border-right-width": [P, g],
            "border-bottom-width": [P, g],
            "border-left-width": [P, g],
            "border-spacing": [P, g],
            "letter-spacing": [P, g],
            margin: [P, g],
            "margin-top": [P, g],
            "margin-right": [P, g],
            "margin-bottom": [P, g],
            "margin-left": [P, g],
            padding: [P, g],
            "padding-top": [P, g],
            "padding-right": [P, g],
            "padding-bottom": [P, g],
            "padding-left": [P, g],
            "outline-width": [P, g],
            opacity: [P, y],
            top: [P, m],
            right: [P, m],
            bottom: [P, m],
            left: [P, m],
            "font-size": [P, m],
            "text-indent": [P, m],
            "word-spacing": [P, m],
            width: [P, m],
            "min-width": [P, m],
            "max-width": [P, m],
            height: [P, m],
            "min-height": [P, m],
            "max-height": [P, m],
            "line-height": [P, v],
            "scroll-top": [x, y, "scrollTop"],
            "scroll-left": [x, y, "scrollLeft"]
          },
          j = {};
        S.transform && (z.transform = [F], j = {
          x: [m, "translateX"],
          y: [m, "translateY"],
          rotate: [O],
          rotateX: [O],
          rotateY: [O],
          scale: [y],
          scaleX: [y],
          scaleY: [y],
          skew: [O],
          skewX: [O],
          skewY: [O]
        }), S.transform && S.backface && (j.z = [m, "translateZ"], j.rotateZ = [O], j.scaleZ = [y], j.perspective = [g]);
        var $ = /ms/,
          q = /s|\./;
        return e.tram = t
      }(window.jQuery)
    },
    5756: function(e, t, n) {
      "use strict";
      var a, i, o, l, d, c, r, s, u, f, p, E, I, T, y, b, g, m, O, v, _ = window.$,
        R = n(5487) && _.tram;
      (a = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, l = Object.prototype, d = Function.prototype, o.push, c = o.slice, o.concat, l.toString, r = l.hasOwnProperty, s = o.forEach, u = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, p = o.some, E = o.indexOf, o.lastIndexOf, I = Object.keys, d.bind, T = a.each = a.forEach = function(e, t, n) {
        if (null == e) return e;
        if (s && e.forEach === s) e.forEach(t, n);
        else if (e.length === +e.length) {
          for (var o = 0, l = e.length; o < l; o++)
            if (t.call(n, e[o], o, e) === i) return
        } else
          for (var d = a.keys(e), o = 0, l = d.length; o < l; o++)
            if (t.call(n, e[d[o]], d[o], e) === i) return;
        return e
      }, a.map = a.collect = function(e, t, n) {
        var a = [];
        return null == e ? a : u && e.map === u ? e.map(t, n) : (T(e, function(e, i, o) {
          a.push(t.call(n, e, i, o))
        }), a)
      }, a.find = a.detect = function(e, t, n) {
        var a;
        return y(e, function(e, i, o) {
          if (t.call(n, e, i, o)) return a = e, !0
        }), a
      }, a.filter = a.select = function(e, t, n) {
        var a = [];
        return null == e ? a : f && e.filter === f ? e.filter(t, n) : (T(e, function(e, i, o) {
          t.call(n, e, i, o) && a.push(e)
        }), a)
      }, y = a.some = a.any = function(e, t, n) {
        t || (t = a.identity);
        var o = !1;
        return null == e ? o : p && e.some === p ? e.some(t, n) : (T(e, function(e, a, l) {
          if (o || (o = t.call(n, e, a, l))) return i
        }), !!o)
      }, a.contains = a.include = function(e, t) {
        return null != e && (E && e.indexOf === E ? -1 != e.indexOf(t) : y(e, function(e) {
          return e === t
        }))
      }, a.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
          return e.apply(null, n)
        }, t)
      }, a.defer = function(e) {
        return a.delay.apply(a, [e, 1].concat(c.call(arguments, 1)))
      }, a.throttle = function(e) {
        var t, n, a;
        return function() {
          t || (t = !0, n = arguments, a = this, R.frame(function() {
            t = !1, e.apply(a, n)
          }))
        }
      }, a.debounce = function(e, t, n) {
        var i, o, l, d, c, r = function() {
          var s = a.now() - d;
          s < t ? i = setTimeout(r, t - s) : (i = null, n || (c = e.apply(l, o), l = o = null))
        };
        return function() {
          l = this, o = arguments, d = a.now();
          var s = n && !i;
          return i || (i = setTimeout(r, t)), s && (c = e.apply(l, o), l = o = null), c
        }
      }, a.defaults = function(e) {
        if (!a.isObject(e)) return e;
        for (var t = 1, n = arguments.length; t < n; t++) {
          var i = arguments[t];
          for (var o in i) void 0 === e[o] && (e[o] = i[o])
        }
        return e
      }, a.keys = function(e) {
        if (!a.isObject(e)) return [];
        if (I) return I(e);
        var t = [];
        for (var n in e) a.has(e, n) && t.push(n);
        return t
      }, a.has = function(e, t) {
        return r.call(e, t)
      }, a.isObject = function(e) {
        return e === Object(e)
      }, a.now = Date.now || function() {
        return new Date().getTime()
      }, a.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      }, b = /(.)^/, g = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, m = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
        return "\\" + g[e]
      }, v = /^\s*(\w|\$)+\s*$/, a.template = function(e, t, n) {
        !t && n && (t = n);
        var i, o = RegExp([((t = a.defaults({}, t, a.templateSettings)).escape || b).source, (t.interpolate || b).source, (t.evaluate || b).source].join("|") + "|$", "g"),
          l = 0,
          d = "__p+='";
        e.replace(o, function(t, n, a, i, o) {
          return d += e.slice(l, o).replace(m, O), l = o + t.length, n ? d += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : a ? d += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (d += "';\n" + i + "\n__p+='"), t
        }), d += "';\n";
        var c = t.variable;
        if (c) {
          if (!v.test(c)) throw Error("variable is not a bare identifier: " + c)
        } else d = "with(obj||{}){\n" + d + "}\n", c = "obj";
        d = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + d + "return __p;\n";
        try {
          i = Function(t.variable || "obj", "_", d)
        } catch (e) {
          throw e.source = d, e
        }
        var r = function(e) {
          return i.call(this, e, a)
        };
        return r.source = "function(" + c + "){\n" + d + "}", r
      }, e.exports = a
    },
    9461: function(e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("brand", e.exports = function(e) {
        var t, n = {},
          i = document,
          o = e("html"),
          l = e("body"),
          d = window.location,
          c = /PhantomJS/i.test(navigator.userAgent),
          r = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function s() {
          var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
          e(t).attr("style", n ? "display: none !important;" : "")
        }

        function u() {
          var e = l.children(".w-webflow-badge"),
            n = e.length && e.get(0) === t,
            i = a.env("editor");
          if (n) {
            i && e.remove();
            return
          }
          e.length && e.remove(), i || l.append(t)
        }
        return n.ready = function() {
          var n, a, l, f = o.attr("data-wf-status"),
            p = o.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(p) && d.hostname !== p && (f = !0), f && !c && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), a = e("<img>").attr("src", "/assets/icons/webflow-badge-icon-d2.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          }), l = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(a, l), n[0]), u(), setTimeout(u, 500), e(i).off(r, s).on(r, s))
        }, n
      })
    },
    322: function(e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("edit", e.exports = function(e, t, n) {
        if (n = n || {}, (a.env("test") || a.env("frame")) && !n.fixture && ! function() {
            try {
              return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
            } catch (e) {
              return !1
            }
          }()) return {
          exit: 1
        };
        var i, o = e(window),
          l = e(document.documentElement),
          d = document.location,
          c = "hashchange",
          r = n.load || function() {
            var t, n, a;
            i = !0, window.WebflowEditor = !0, o.off(c, u), t = function(t) {
              var n;
              e.ajax({
                url: p("https://editor-api.webflow.com/api/editor/view"),
                data: {
                  siteId: l.attr("data-wf-site")
                },
                xhrFields: {
                  withCredentials: !0
                },
                dataType: "json",
                crossDomain: !0,
                success: (n = t, function(t) {
                  var a, i, o;
                  if (!t) return void console.error("Could not load editor data");
                  t.thirdPartyCookiesSupported = n, i = (a = t.scriptPath).indexOf("//") >= 0 ? a : p("https://editor-api.webflow.com" + a), o = function() {
                    window.WebflowEditor(t)
                  }, e.ajax({
                    type: "GET",
                    url: i,
                    dataType: "script",
                    cache: !0
                  }).then(o, f)
                })
              })
            }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", a = function(e) {
              "WF_third_party_cookies_unsupported" === e.data ? (E(n, a), t(!1)) : "WF_third_party_cookies_supported" === e.data && (E(n, a), t(!0))
            }, n.onerror = function() {
              E(n, a), t(!1)
            }, window.addEventListener("message", a, !1), window.document.body.appendChild(n)
          },
          s = !1;
        try {
          s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (e) {}

        function u() {
          !i && /\?edit/.test(d.hash) && r()
        }

        function f(e, t, n) {
          throw console.error("Could not load editor script: " + t), n
        }

        function p(e) {
          return e.replace(/([^:])\/\//g, "$1/")
        }

        function E(e, t) {
          window.removeEventListener("message", t, !1), e.remove()
        }
        return /[?&](update)(?:[=&?]|$)/.test(d.search) || /\?update$/.test(d.href) ? function() {
          var e = document.documentElement,
            t = e.getAttribute("data-wf-site"),
            n = e.getAttribute("data-wf-page"),
            a = e.getAttribute("data-wf-item-slug"),
            i = e.getAttribute("data-wf-collection"),
            o = e.getAttribute("data-wf-domain");
          if (t && n) {
            var l = "pageId=" + n + "&mode=edit";
            l += "&simulateRole=editor&utm_source=legacy_editor", a && i && o && (l += "&domain=" + encodeURIComponent(o) + "&itemSlug=" + encodeURIComponent(a) + "&collectionId=" + i), window.location.href = "https://webflow.com/external/designer/" + t + "?" + l
          }
        }() : s ? r() : d.search ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) || /\?edit$/.test(d.href)) && r() : o.on(c, u).triggerHandler(c), {}
      })
    },
    2338: function(e, t, n) {
      "use strict";
      n(3949).define("focus-visible", e.exports = function() {
        return {
          ready: function() {
            if ("undefined" != typeof document) try {
              document.querySelector(":focus-visible")
            } catch (e) {
              ! function(e) {
                var t = !0,
                  n = !1,
                  a = null,
                  i = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                  };

                function o(e) {
                  return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                }

                function l(e) {
                  e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                }

                function d() {
                  t = !1
                }

                function c() {
                  document.addEventListener("mousemove", r), document.addEventListener("mousedown", r), document.addEventListener("mouseup", r), document.addEventListener("pointermove", r), document.addEventListener("pointerdown", r), document.addEventListener("pointerup", r), document.addEventListener("touchmove", r), document.addEventListener("touchstart", r), document.addEventListener("touchend", r)
                }

                function r(e) {
                  e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mousedown", r), document.removeEventListener("mouseup", r), document.removeEventListener("pointermove", r), document.removeEventListener("pointerdown", r), document.removeEventListener("pointerup", r), document.removeEventListener("touchmove", r), document.removeEventListener("touchstart", r), document.removeEventListener("touchend", r))
                }
                document.addEventListener("keydown", function(n) {
                  n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && l(e.activeElement), t = !0)
                }, !0), document.addEventListener("mousedown", d, !0), document.addEventListener("pointerdown", d, !0), document.addEventListener("touchstart", d, !0), document.addEventListener("visibilitychange", function() {
                  "hidden" === document.visibilityState && (n && (t = !0), c())
                }, !0), c(), e.addEventListener("focus", function(e) {
                  if (o(e.target)) {
                    var n, a, d;
                    (t || (a = (n = e.target).type, "INPUT" === (d = n.tagName) && i[a] && !n.readOnly || "TEXTAREA" === d && !n.readOnly || n.isContentEditable || 0)) && l(e.target)
                  }
                }, !0), e.addEventListener("blur", function(e) {
                  if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                    var t;
                    n = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                      n = !1
                    }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                  }
                }, !0)
              }(document)
            }
          }
        }
      })
    },
    8334: function(e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("focus", e.exports = function() {
        var e = [],
          t = !1;

        function n(n) {
          t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
        }

        function i(n) {
          var a, i;
          i = (a = n.target).tagName, (/^a$/i.test(i) && null != a.href || /^(button|textarea)$/i.test(i) && !0 !== a.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === a.controls) && (t = !0, setTimeout(() => {
            for (t = !1, n.target.focus(); e.length > 0;) {
              var a = e.pop();
              a.target.dispatchEvent(new MouseEvent(a.type, a))
            }
          }, 0))
        }
        return {
          ready: function() {
            "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
          }
        }
      })
    },
    7199: function(e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function(e, t) {
            t.__wf_intro = null
          },
          intro: function(e, a) {
            a.__wf_intro || (a.__wf_intro = !0, t(a).triggerHandler(n.types.INTRO))
          },
          outro: function(e, a) {
            a.__wf_intro && (a.__wf_intro = null, t(a).triggerHandler(n.types.OUTRO))
          }
        };
      n.triggers = {}, n.types = {
        INTRO: "w-ix-intro" + i,
        OUTRO: "w-ix-outro" + i
      }, n.init = function() {
        for (var e = a.length, i = 0; i < e; i++) {
          var l = a[i];
          l[0](0, l[1])
        }
        a = [], t.extend(n.triggers, o)
      }, n.async = function() {
        for (var e in o) {
          var t = o[e];
          o.hasOwnProperty(e) && (n.triggers[e] = function(e, n) {
            a.push([t, n])
          })
        }
      }, n.async(), e.exports = n
    },
    5134: function(e, t, n) {
      "use strict";
      var a = n(7199);

      function i(e, t, n) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(a)
      }
      var o = window.jQuery,
        l = {},
        d = ".w-ix";
      l.triggers = {}, l.types = {
        INTRO: "w-ix-intro" + d,
        OUTRO: "w-ix-outro" + d
      }, o.extend(l.triggers, {
        reset: function(e, t) {
          a.triggers.reset(e, t)
        },
        intro: function(e, t) {
          a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
        },
        outro: function(e, t) {
          a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
        }
      }), l.dispatchCustomEvent = i, e.exports = l
    },
    941: function(e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env), a.define("ix2", e.exports = function() {
        return i
      })
    },
    3949: function(e, t, n) {
      "use strict";
      var a, i, o = {},
        l = {},
        d = [],
        c = window.Webflow || [],
        r = window.jQuery,
        s = r(window),
        u = r(document),
        f = r.isFunction,
        p = o._ = n(5756),
        E = o.tram = n(5487) && r.tram,
        I = !1,
        T = !1;

      function y(e) {
        o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
          if (I) return e.ready();
          p.contains(d, e.ready) || d.push(e.ready)
        }(e)
      }

      function b(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, d = p.filter(d, function(e) {
          return e !== t.ready
        }))
      }
      E.config.hideBackface = !1, E.config.keepInherited = !0, o.define = function(e, t, n) {
        l[e] && b(l[e]);
        var a = l[e] = t(r, p, n) || {};
        return y(a), a
      }, o.require = function(e) {
        return l[e]
      }, o.push = function(e) {
        if (I) {
          f(e) && e();
          return
        }
        c.push(e)
      }, o.env = function(e) {
        var t = window.__wf_design,
          n = void 0 !== t;
        return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
      };
      var g = navigator.userAgent.toLowerCase(),
        m = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        O = o.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
        v = o.env.ios = /(ipod|iphone|ipad)/.test(g);
      o.env.safari = /safari/.test(g) && !O && !v, m && u.on("touchstart mousedown", function(e) {
        a = e.target
      }), o.validClick = m ? function(e) {
        return e === a || r.contains(e, a)
      } : function() {
        return !0
      };
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        R = "scroll.webflow " + _;

      function N(e, t) {
        var n = [],
          a = {};
        return a.up = p.throttle(function(e) {
          p.each(n, function(t) {
            t(e)
          })
        }), e && t && e.on(t, a.up), a.on = function(e) {
          "function" == typeof e && (p.contains(n, e) || n.push(e))
        }, a.off = function(e) {
          if (!arguments.length) {
            n = [];
            return
          }
          n = p.filter(n, function(t) {
            return t !== e
          })
        }, a
      }

      function L(e) {
        f(e) && e()
      }

      function A() {
        i && (i.reject(), s.off("load", i.resolve)), i = new r.Deferred, s.on("load", i.resolve)
      }
      o.resize = N(s, _), o.scroll = N(s, R), o.redraw = N(), o.location = function(e) {
        window.location = e
      }, o.env() && (o.location = function() {}), o.ready = function() {
        I = !0, T ? (T = !1, p.each(l, y)) : p.each(d, L), p.each(c, L), o.resize.up()
      }, o.load = function(e) {
        i.then(e)
      }, o.destroy = function(e) {
        e = e || {}, T = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (I = e.domready), p.each(l, b), o.resize.off(), o.scroll.off(), o.redraw.off(), d = [], c = [], "pending" === i.state() && A()
      }, r(o.ready), A(), e.exports = window.Webflow = o
    },
    7624: function(e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("links", e.exports = function(e, t) {
        var n, i, o, l = {},
          d = e(window),
          c = a.env(),
          r = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          p = /\/$/;

        function E() {
          var e = d.scrollTop(),
            n = d.height();
          t.each(i, function(t) {
            if (!t.link.attr("hreflang")) {
              var a = t.link,
                i = t.sec,
                o = i.offset().top,
                l = i.outerHeight(),
                d = .5 * n,
                c = i.is(":visible") && o + l - d >= e && o + d <= e + n;
              t.active !== c && (t.active = c, I(a, u, c))
            }
          })
        }

        function I(e, t, n) {
          var a = e.hasClass(t);
          (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t))
        }
        return l.ready = l.design = l.preview = function() {
          n = c && a.env("design"), o = a.env("slug") || r.pathname || "", a.scroll.off(E), i = [];
          for (var t = document.links, l = 0; l < t.length; ++l) ! function(t) {
            if (!t.getAttribute("hreflang")) {
              var a = n && t.getAttribute("href-disabled") || t.getAttribute("href");
              if (s.href = a, !(a.indexOf(":") >= 0)) {
                var l = e(t);
                if (s.hash.length > 1 && s.host + s.pathname === r.host + r.pathname) {
                  if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                  var d = e(s.hash);
                  d.length && i.push({
                    link: l,
                    sec: d,
                    active: !1
                  });
                  return
                }
                "#" !== a && "" !== a && I(l, u, !c && s.href === r.href || a === o || f.test(a) && p.test(o))
              }
            }
          }(t[l]);
          i.length && (a.scroll.on(E), E())
        }, l
      })
    },
    286: function(e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("scroll", e.exports = function(e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
          },
          n = window.location,
          i = ! function() {
            try {
              return !!window.frameElement
            } catch (e) {
              return !0
            }
          }() ? window.history : null,
          o = e(window),
          l = e(document),
          d = e(document.body),
          c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
            window.setTimeout(e, 15)
          },
          r = a.env("editor") ? ".w-editor-body" : "body",
          s = "header, " + r + " > .header, " + r + " > .w-nav:not([data-no-scroll])",
          u = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
          p = document.createElement("style");
        p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var E = /^#[a-zA-Z0-9][\w:.-]*$/;
        let I = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function T(e, t) {
          var n;
          switch (t) {
            case "add":
              (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
              break;
            case "remove":
              (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
          }
          e.toggleClass("wf-force-outline-none", "add" === t)
        }

        function y(t) {
          var l = t.currentTarget;
          if (!(a.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(l.className))) {
            var r = E.test(l.hash) && l.host + l.pathname === n.host + n.pathname ? l.hash : "";
            if ("" !== r) {
              var u, f = e(r);
              f.length && (t && (t.preventDefault(), t.stopPropagation()), u = r, n.hash !== u && i && i.pushState && !(a.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                hash: u
              }, "", u), window.setTimeout(function() {
                ! function(t, n) {
                  var a = o.scrollTop(),
                    i = function(t) {
                      var n = e(s),
                        a = "fixed" === n.css("position") ? n.outerHeight() : 0,
                        i = t.offset().top - a;
                      if ("mid" === t.data("scroll")) {
                        var l = o.height() - a,
                          d = t.outerHeight();
                        d < l && (i -= Math.round((l - d) / 2))
                      }
                      return i
                    }(t);
                  if (a !== i) {
                    var l = function(e, t, n) {
                        if ("none" === document.body.getAttribute("data-wf-scroll-motion") || I.matches) return 0;
                        var a = 1;
                        return d.add(e).each(function(e, t) {
                          var n = parseFloat(t.getAttribute("data-scroll-time"));
                          !isNaN(n) && n >= 0 && (a = n)
                        }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * a
                      }(t, a, i),
                      r = Date.now(),
                      u = function() {
                        var e, t, o, d, s, f = Date.now() - r;
                        window.scroll(0, (e = a, t = i, (o = f) > (d = l) ? t : e + (t - e) * ((s = o / d) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= l ? c(u) : "function" == typeof n && n()
                      };
                    c(u)
                  }
                }(f, function() {
                  T(f, "add"), f.get(0).focus({
                    preventScroll: !0
                  }), T(f, "remove")
                })
              }, 300 * !t))
            }
          }
        }
        return {
          ready: function() {
            var {
              WF_CLICK_EMPTY: e,
              WF_CLICK_SCROLL: n
            } = t;
            l.on(n, f, y), l.on(e, u, function(e) {
              e.preventDefault()
            }), document.head.insertBefore(p, document.head.firstChild)
          }
        }
      })
    },
    3695: function(e, t, n) {
      "use strict";
      n(3949).define("touch", e.exports = function(e) {
        var t = {},
          n = window.getSelection;

        function a(t) {
          var a, i, o = !1,
            l = !1,
            d = Math.min(Math.round(.04 * window.innerWidth), 40);

          function c(e) {
            var t = e.touches;
            t && t.length > 1 || (o = !0, t ? (l = !0, a = t[0].clientX) : a = e.clientX, i = a)
          }

          function r(t) {
            if (o) {
              if (l && "mousemove" === t.type) {
                t.preventDefault(), t.stopPropagation();
                return
              }
              var a, c, r, s, f = t.touches,
                p = f ? f[0].clientX : t.clientX,
                E = p - i;
              i = p, Math.abs(E) > d && n && "" === String(n()) && (a = "swipe", c = t, r = {
                direction: E > 0 ? "right" : "left"
              }, s = e.Event(a, {
                originalEvent: c
              }), e(c.target).trigger(s, r), u())
            }
          }

          function s(e) {
            if (o && (o = !1, l && "mouseup" === e.type)) {
              e.preventDefault(), e.stopPropagation(), l = !1;
              return
            }
          }

          function u() {
            o = !1
          }
          t.addEventListener("touchstart", c, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", c, !1), t.addEventListener("mousemove", r, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
            t.removeEventListener("touchstart", c, !1), t.removeEventListener("touchmove", r, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", c, !1), t.removeEventListener("mousemove", r, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
          }
        }
        return e.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        }, t.init = function(t) {
          return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null
        }, t.instance = t.init(document), t
      })
    },
    9858: function(e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };

      function l(e, t) {
        i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
          component: "dropdown",
          state: t
        })
      }
      let d = /^#[a-zA-Z0-9\-_]+$/;
      a.define("dropdown", e.exports = function(e, t) {
        var n, c, r = t.debounce,
          s = {},
          u = a.env(),
          f = !1,
          p = a.env.touch,
          E = ".w-dropdown",
          I = "w--open",
          T = i.triggers,
          y = "focusout" + E,
          b = "keydown" + E,
          g = "mouseenter" + E,
          m = "mousemove" + E,
          O = "mouseleave" + E,
          v = (p ? "click" : "mouseup") + E,
          _ = "w-close" + E,
          R = "setting" + E,
          N = e(document);

        function L() {
          n = u && a.env("design"), (c = N.find(E)).each(A)
        }

        function A(t, i) {
          var l, c, s, f, p, T, m, O, L, A, w = e(i),
            V = e.data(i, E);
          V || (V = e.data(i, E, {
            open: !1,
            el: w,
            config: {},
            selectedIdx: -1
          })), V.toggle = V.el.children(".w-dropdown-toggle"), V.list = V.el.children(".w-dropdown-list"), V.links = V.list.find("a:not(.w-dropdown .w-dropdown a)"), V.complete = (l = V, function() {
            l.list.removeClass(I), l.toggle.removeClass(I), l.manageZ && l.el.css("z-index", "")
          }), V.mouseLeave = (c = V, function() {
            c.hovering = !1, c.links.is(":focus") || M(c)
          }), V.mouseUpOutside = ((s = V).mouseUpOutside && N.off(v, s.mouseUpOutside), r(function(t) {
            if (s.open) {
              var n = e(t.target);
              if (!n.closest(".w-dropdown-toggle").length) {
                var i = -1 === e.inArray(s.el[0], n.parents(E)),
                  o = a.env("editor");
                if (i) {
                  if (o) {
                    var l = 1 === n.parents().length && 1 === n.parents("svg").length,
                      d = n.parents(".w-editor-bem-EditorHoverControls").length;
                    if (l || d) return
                  }
                  M(s)
                }
              }
            }
          })), V.mouseMoveOutside = (f = V, r(function(t) {
            if (f.open) {
              var n = e(t.target);
              if (-1 === e.inArray(f.el[0], n.parents(E))) {
                var a = n.parents(".w-editor-bem-EditorHoverControls").length,
                  i = n.parents(".w-editor-bem-RTToolbar").length,
                  o = e(".w-editor-bem-EditorOverlay"),
                  l = o.find(".w-editor-edit-outline").length || o.find(".w-editor-bem-RTToolbar").length;
                if (a || i || l) return;
                f.hovering = !1, M(f)
              }
            }
          })), h(V);
          var G = V.toggle.attr("id"),
            P = V.list.attr("id");
          G || (G = "w-dropdown-toggle-" + t), P || (P = "w-dropdown-list-" + t), V.toggle.attr("id", G), V.toggle.attr("aria-controls", P), V.toggle.attr("aria-haspopup", "menu"), V.toggle.attr("aria-expanded", "false"), V.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== V.toggle.prop("tagName") && (V.toggle.attr("role", "button"), V.toggle.attr("tabindex") || V.toggle.attr("tabindex", "0")), V.list.attr("id", P), V.list.attr("aria-labelledby", G), V.links.each(function(e, t) {
            t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"), d.test(t.hash) && t.addEventListener("click", M.bind(null, V))
          }), V.el.off(E), V.toggle.off(E), V.nav && V.nav.off(E);
          var k = S(V, !0);
          n && V.el.on(R, (p = V, function(e, t) {
            t = t || {}, h(p), !0 === t.open && C(p), !1 === t.open && M(p, {
              immediate: !0
            })
          })), n || (u && (V.hovering = !1, M(V)), V.config.hover && V.toggle.on(g, (T = V, function() {
            T.hovering = !0, C(T)
          })), V.el.on(_, k), V.el.on(b, (m = V, function(e) {
            if (!n && m.open) switch (m.selectedIdx = m.links.index(document.activeElement), e.keyCode) {
              case o.HOME:
                if (!m.open) return;
                return m.selectedIdx = 0, U(m), e.preventDefault();
              case o.END:
                if (!m.open) return;
                return m.selectedIdx = m.links.length - 1, U(m), e.preventDefault();
              case o.ESCAPE:
                return M(m), m.toggle.focus(), e.stopPropagation();
              case o.ARROW_RIGHT:
              case o.ARROW_DOWN:
                return m.selectedIdx = Math.min(m.links.length - 1, m.selectedIdx + 1), U(m), e.preventDefault();
              case o.ARROW_LEFT:
              case o.ARROW_UP:
                return m.selectedIdx = Math.max(-1, m.selectedIdx - 1), U(m), e.preventDefault()
            }
          })), V.el.on(y, (O = V, r(function(e) {
            var {
              relatedTarget: t,
              target: n
            } = e, a = O.el[0];
            return a.contains(t) || a.contains(n) || M(O), e.stopPropagation()
          }))), V.toggle.on(v, k), V.toggle.on(b, (A = S(L = V, !0), function(e) {
            if (!n) {
              if (!L.open) switch (e.keyCode) {
                case o.ARROW_UP:
                case o.ARROW_DOWN:
                  return e.stopPropagation()
              }
              switch (e.keyCode) {
                case o.SPACE:
                case o.ENTER:
                  return A(), e.stopPropagation(), e.preventDefault()
              }
            }
          })), V.nav = V.el.closest(".w-nav"), V.nav.on(_, k))
        }

        function h(e) {
          var t = Number(e.el.css("z-index"));
          e.manageZ = 900 === t || 901 === t, e.config = {
            hover: "true" === e.el.attr("data-hover") && !p,
            delay: e.el.attr("data-delay")
          }
        }

        function S(e, t) {
          return r(function(n) {
            if (e.open || n && "w-close" === n.type) return M(e, {
              forceClose: t
            });
            C(e)
          })
        }

        function C(t) {
          if (!t.open) {
            i = t.el[0], c.each(function(t, n) {
              var a = e(n);
              a.is(i) || a.has(i).length || a.triggerHandler(_)
            }), t.open = !0, t.list.addClass(I), t.toggle.addClass(I), t.toggle.attr("aria-expanded", "true"), T.intro(0, t.el[0]), l(t.el[0], "open"), a.redraw.up(), t.manageZ && t.el.css("z-index", 901);
            var i, o = a.env("editor");
            n || N.on(v, t.mouseUpOutside), t.hovering && !o && t.el.on(O, t.mouseLeave), t.hovering && o && N.on(m, t.mouseMoveOutside), window.clearTimeout(t.delayId)
          }
        }

        function M(e, {
          immediate: t,
          forceClose: n
        } = {}) {
          if (e.open && (!e.config.hover || !e.hovering || n)) {
            e.toggle.attr("aria-expanded", "false"), e.open = !1;
            var a = e.config;
            if (T.outro(0, e.el[0]), l(e.el[0], "close"), N.off(v, e.mouseUpOutside), N.off(m, e.mouseMoveOutside), e.el.off(O, e.mouseLeave), window.clearTimeout(e.delayId), !a.delay || t) return e.complete();
            e.delayId = window.setTimeout(e.complete, a.delay)
          }
        }

        function U(e) {
          e.links[e.selectedIdx] && e.links[e.selectedIdx].focus()
        }
        return s.ready = L, s.design = function() {
          f && N.find(E).each(function(t, n) {
            e(n).triggerHandler(_)
          }), f = !1, L()
        }, s.preview = function() {
          f = !0, L()
        }, s
      })
    },
    1655: function(e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };

      function l(e, t) {
        i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
          component: "navbar",
          state: t
        })
      }
      a.define("navbar", e.exports = function(e, t) {
        var n, d, c, r, s = {},
          u = e.tram,
          f = e(window),
          p = e(document),
          E = t.debounce,
          I = a.env(),
          T = ".w-nav",
          y = "w--open",
          b = "w--nav-dropdown-open",
          g = "w--nav-dropdown-toggle-open",
          m = "w--nav-dropdown-list-open",
          O = "w--nav-link-open",
          v = i.triggers,
          _ = e();

        function R() {
          a.resize.off(N)
        }

        function N() {
          d.each(G)
        }

        function L(n, a) {
          var i, l, d, s, u, E = e(a),
            I = e.data(a, T);
          I || (I = e.data(a, T, {
            open: !1,
            el: E,
            config: {},
            selectedIdx: -1
          })), I.menu = E.find(".w-nav-menu"), I.links = I.menu.find(".w-nav-link"), I.dropdowns = I.menu.find(".w-dropdown"), I.dropdownToggle = I.menu.find(".w-dropdown-toggle"), I.dropdownList = I.menu.find(".w-dropdown-list"), I.button = E.find(".w-nav-button"), I.container = E.find(".w-container"), I.overlayContainerId = "w-nav-overlay-" + n, I.outside = ((i = I).outside && p.off("click" + T, i.outside), function(t) {
            var n = e(t.target);
            r && n.closest(".w-editor-bem-EditorOverlay").length || V(i, n)
          });
          var y = E.find(".w-nav-brand");
          y && "/" === y.attr("href") && null == y.attr("aria-label") && y.attr("aria-label", "home"), I.button.attr("style", "-webkit-user-select: text;"), null == I.button.attr("aria-label") && I.button.attr("aria-label", "menu"), I.button.attr("role", "button"), I.button.attr("tabindex", "0"), I.button.attr("aria-controls", I.overlayContainerId), I.button.attr("aria-haspopup", "menu"), I.button.attr("aria-expanded", "false"), I.el.off(T), I.button.off(T), I.menu.off(T), S(I), c ? (h(I), I.el.on("setting" + T, (l = I, function(e, n) {
            n = n || {};
            var a = f.width();
            S(l), !0 === n.open && F(l, !0), !1 === n.open && B(l, !0), l.open && t.defer(function() {
              a !== f.width() && M(l)
            })
          }))) : ((d = I).overlay || (d.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(d.el), d.overlay.attr("id", d.overlayContainerId), d.parent = d.menu.parent(), B(d, !0)), I.button.on("click" + T, U(I)), I.menu.on("click" + T, "a", w(I)), I.button.on("keydown" + T, (s = I, function(e) {
            switch (e.keyCode) {
              case o.SPACE:
              case o.ENTER:
                return U(s)(), e.preventDefault(), e.stopPropagation();
              case o.ESCAPE:
                return B(s), e.preventDefault(), e.stopPropagation();
              case o.ARROW_RIGHT:
              case o.ARROW_DOWN:
              case o.HOME:
              case o.END:
                if (!s.open) return e.preventDefault(), e.stopPropagation();
                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, C(s), e.preventDefault(), e.stopPropagation()
            }
          })), I.el.on("keydown" + T, (u = I, function(e) {
            if (u.open) switch (u.selectedIdx = u.links.index(document.activeElement), e.keyCode) {
              case o.HOME:
              case o.END:
                return e.keyCode === o.END ? u.selectedIdx = u.links.length - 1 : u.selectedIdx = 0, C(u), e.preventDefault(), e.stopPropagation();
              case o.ESCAPE:
                return B(u), u.button.focus(), e.preventDefault(), e.stopPropagation();
              case o.ARROW_LEFT:
              case o.ARROW_UP:
                return u.selectedIdx = Math.max(-1, u.selectedIdx - 1), C(u), e.preventDefault(), e.stopPropagation();
              case o.ARROW_RIGHT:
              case o.ARROW_DOWN:
                return u.selectedIdx = Math.min(u.links.length - 1, u.selectedIdx + 1), C(u), e.preventDefault(), e.stopPropagation()
            }
          }))), G(n, a)
        }

        function A(t, n) {
          var a = e.data(n, T);
          a && (h(a), e.removeData(n, T))
        }

        function h(e) {
          e.overlay && (B(e, !0), e.overlay.remove(), e.overlay = null)
        }

        function S(e) {
          var n = {},
            a = e.config || {},
            i = n.animation = e.el.attr("data-animation") || "default";
          n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, a.animation !== i && e.open && t.defer(M, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
          var o = e.el.attr("data-duration");
          n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
        }

        function C(e) {
          if (e.links[e.selectedIdx]) {
            var t = e.links[e.selectedIdx];
            t.focus(), w(t)
          }
        }

        function M(e) {
          e.open && (B(e, !0), F(e, !0))
        }

        function U(e) {
          return E(function() {
            e.open ? B(e) : F(e)
          })
        }

        function w(t) {
          return function(n) {
            var i = e(this).attr("href");
            if (!a.validClick(n.currentTarget)) return void n.preventDefault();
            i && 0 === i.indexOf("#") && t.open && B(t)
          }
        }
        s.ready = s.design = s.preview = function() {
          c = I && a.env("design"), r = a.env("editor"), n = e(document.body), (d = p.find(T)).length && (d.each(L), R(), a.resize.on(N))
        }, s.destroy = function() {
          _ = e(), R(), d && d.length && d.each(A)
        };
        var V = E(function(e, t) {
          if (e.open) {
            var n = t.closest(".w-nav-menu");
            e.menu.is(n) || B(e)
          }
        });

        function G(t, n) {
          var a = e.data(n, T),
            i = a.collapsed = "none" !== a.button.css("display");
          if (!a.open || i || c || B(a, !0), a.container.length) {
            var o, l = ("none" === (o = a.container.css(P)) && (o = ""), function(t, n) {
              (n = e(n)).css(P, ""), "none" === n.css(P) && n.css(P, o)
            });
            a.links.each(l), a.dropdowns.each(l)
          }
          a.open && D(a)
        }
        var P = "max-width";

        function k(e, t) {
          t.setAttribute("data-nav-menu-open", "")
        }

        function x(e, t) {
          t.removeAttribute("data-nav-menu-open")
        }

        function F(e, t) {
          if (!e.open) {
            e.open = !0, e.menu.each(k), e.links.addClass(O), e.dropdowns.addClass(b), e.dropdownToggle.addClass(g), e.dropdownList.addClass(m), e.button.addClass(y);
            var n = e.config;
            ("none" === n.animation || !u.support.transform || n.duration <= 0) && (t = !0);
            var i = D(e),
              o = e.menu.outerHeight(!0),
              d = e.menu.outerWidth(!0),
              r = e.el.height(),
              s = e.el[0];
            if (G(0, s), v.intro(0, s), l(s, "open"), a.redraw.up(), c || p.on("click" + T, e.outside), t) return void E();
            var f = "transform " + n.duration + "ms " + n.easing;
            if (e.overlay && (_ = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) {
              u(e.menu).add(f).set({
                x: n.animDirect * d,
                height: i
              }).start({
                x: 0
              }).then(E), e.overlay && e.overlay.width(d);
              return
            }
            u(e.menu).add(f).set({
              y: -(r + o)
            }).start({
              y: 0
            }).then(E)
          }

          function E() {
            e.button.attr("aria-expanded", "true")
          }
        }

        function D(e) {
          var t = e.config,
            a = t.docHeight ? p.height() : n.height();
          return t.animOver ? e.menu.height(a) : "fixed" !== e.el.css("position") && (a -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(a), a
        }

        function B(e, t) {
          if (e.open) {
            e.open = !1, e.button.removeClass(y);
            var n = e.config;
            if (("none" === n.animation || !u.support.transform || n.duration <= 0) && (t = !0), v.outro(0, e.el[0]), l(e.el[0], "close"), p.off("click" + T, e.outside), t) {
              u(e.menu).stop(), c();
              return
            }
            var a = "transform " + n.duration + "ms " + n.easing2,
              i = e.menu.outerHeight(!0),
              o = e.menu.outerWidth(!0),
              d = e.el.height();
            if (n.animOver) return void u(e.menu).add(a).start({
              x: o * n.animDirect
            }).then(c);
            u(e.menu).add(a).start({
              y: -(d + i)
            }).then(c)
          }

          function c() {
            e.menu.height(""), u(e.menu).set({
              x: 0,
              y: 0
            }), e.menu.each(x), e.links.removeClass(O), e.dropdowns.removeClass(b), e.dropdownToggle.removeClass(g), e.dropdownList.removeClass(m), e.overlay && e.overlay.children().length && (_.length ? e.menu.insertAfter(_) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
          }
        }
        return s
      })
    },
    3946: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        actionListPlaybackChanged: function() {
          return Y
        },
        animationFrameChanged: function() {
          return F
        },
        clearRequested: function() {
          return G
        },
        elementStateChanged: function() {
          return H
        },
        eventListenerAdded: function() {
          return P
        },
        eventStateChanged: function() {
          return x
        },
        instanceAdded: function() {
          return B
        },
        instanceRemoved: function() {
          return X
        },
        instanceStarted: function() {
          return Q
        },
        mediaQueriesDefined: function() {
          return z
        },
        parameterChanged: function() {
          return D
        },
        playbackRequested: function() {
          return w
        },
        previewRequested: function() {
          return U
        },
        rawDataImported: function() {
          return h
        },
        sessionInitialized: function() {
          return S
        },
        sessionStarted: function() {
          return C
        },
        sessionStopped: function() {
          return M
        },
        stopRequested: function() {
          return V
        },
        testFrameRendered: function() {
          return k
        },
        viewportWidthChanged: function() {
          return W
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = n(7087),
        l = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: d,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: r,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: b,
          IX2_PARAMETER_CHANGED: g,
          IX2_INSTANCE_ADDED: m,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
          IX2_VIEWPORT_WIDTH_CHANGED: N,
          IX2_MEDIA_QUERIES_DEFINED: L
        } = o.IX2EngineActionTypes,
        {
          reifyState: A
        } = l.IX2VanillaUtils,
        h = e => ({
          type: d,
          payload: {
            ...A(e)
          }
        }),
        S = ({
          hasBoundaryNodes: e,
          reducedMotion: t
        }) => ({
          type: c,
          payload: {
            hasBoundaryNodes: e,
            reducedMotion: t
          }
        }),
        C = () => ({
          type: r
        }),
        M = () => ({
          type: s
        }),
        U = ({
          rawData: e,
          defer: t
        }) => ({
          type: u,
          payload: {
            defer: t,
            rawData: e
          }
        }),
        w = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: l,
          testManual: d,
          verbose: c,
          rawData: r
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: d,
            eventId: a,
            allowEvents: i,
            immediate: l,
            verbose: c,
            rawData: r
          }
        }),
        V = e => ({
          type: p,
          payload: {
            actionListId: e
          }
        }),
        G = () => ({
          type: E
        }),
        P = (e, t) => ({
          type: I,
          payload: {
            target: e,
            listenerParams: t
          }
        }),
        k = (e = 1) => ({
          type: T,
          payload: {
            step: e
          }
        }),
        x = (e, t) => ({
          type: y,
          payload: {
            stateKey: e,
            newState: t
          }
        }),
        F = (e, t) => ({
          type: b,
          payload: {
            now: e,
            parameters: t
          }
        }),
        D = (e, t) => ({
          type: g,
          payload: {
            key: e,
            value: t
          }
        }),
        B = e => ({
          type: m,
          payload: {
            ...e
          }
        }),
        Q = (e, t) => ({
          type: O,
          payload: {
            instanceId: e,
            time: t
          }
        }),
        X = e => ({
          type: v,
          payload: {
            instanceId: e
          }
        }),
        H = (e, t, n, a) => ({
          type: _,
          payload: {
            elementId: e,
            actionTypeId: t,
            current: n,
            actionItem: a
          }
        }),
        Y = ({
          actionListId: e,
          isPlaying: t
        }) => ({
          type: R,
          payload: {
            actionListId: e,
            isPlaying: t
          }
        }),
        W = ({
          width: e,
          mediaQueries: t
        }) => ({
          type: N,
          payload: {
            width: e,
            mediaQueries: t
          }
        }),
        z = () => ({
          type: L
        })
    },
    6011: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a, i = {
        actions: function() {
          return r
        },
        destroy: function() {
          return E
        },
        init: function() {
          return p
        },
        setEnv: function() {
          return f
        },
        store: function() {
          return u
        }
      };
      for (var o in i) Object.defineProperty(t, o, {
        enumerable: !0,
        get: i[o]
      });
      let l = n(9516),
        d = (a = n(7243)) && a.__esModule ? a : {
          default: a
        },
        c = n(1970),
        r = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = {
              __proto__: null
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
            } return a.default = e, n && n.set(e, a), a
        }(n(3946));

      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (s = function(e) {
          return e ? n : t
        })(e)
      }
      let u = (0, l.createStore)(d.default);

      function f(e) {
        e() && (0, c.observeRequests)(u)
      }

      function p(e) {
        E(), (0, c.startEngine)({
          store: u,
          rawData: e,
          allowEvents: !0
        })
      }

      function E() {
        (0, c.stopEngine)(u)
      }
    },
    5012: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        elementContains: function() {
          return g
        },
        getChildElements: function() {
          return O
        },
        getClosestElement: function() {
          return _
        },
        getProperty: function() {
          return E
        },
        getQuerySelector: function() {
          return T
        },
        getRefType: function() {
          return R
        },
        getSiblingElements: function() {
          return v
        },
        getStyle: function() {
          return p
        },
        getValidDocument: function() {
          return y
        },
        isSiblingNode: function() {
          return m
        },
        matchSelector: function() {
          return I
        },
        queryDocument: function() {
          return b
        },
        setStyle: function() {
          return f
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = n(9468),
        l = n(7087),
        {
          ELEMENT_MATCHES: d
        } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: r,
          PLAIN_OBJECT: s,
          WF_PAGE: u
        } = l.IX2EngineConstants;

      function f(e, t, n) {
        e.style[t] = n
      }

      function p(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
      }

      function E(e, t) {
        return e[t]
      }

      function I(e) {
        return t => t[d](e)
      }

      function T({
        id: e,
        selector: t
      }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              a = n[0];
            if (t = n[1], a !== document.documentElement.getAttribute(u)) return null
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
        }
        return t
      }

      function y(e) {
        return null == e || e === document.documentElement.getAttribute(u) ? document : null
      }

      function b(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
      }

      function g(e, t) {
        return e.contains(t)
      }

      function m(e, t) {
        return e !== t && e.parentNode === t.parentNode
      }

      function O(e) {
        let t = [];
        for (let n = 0, {
            length: a
          } = e || []; n < a; n++) {
          let {
            children: a
          } = e[n], {
            length: i
          } = a;
          if (i)
            for (let e = 0; e < i; e++) t.push(a[e])
        }
        return t
      }

      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, {
            length: i
          } = e; a < i; a++) {
          let {
            parentNode: i
          } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
        }
        return t
      }
      let _ = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
        if (!document.documentElement.contains(e)) return null;
        let n = e;
        do {
          if (n[d] && n[d](t)) return n;
          n = n.parentNode
        } while (null != n);
        return null
      };

      function R(e) {
        return null != e && "object" == typeof e ? e instanceof Element ? r : s : null
      }
    },
    1970: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        observeRequests: function() {
          return K
        },
        startActionGroup: function() {
          return eE
        },
        startEngine: function() {
          return ea
        },
        stopActionGroup: function() {
          return ep
        },
        stopAllActionGroups: function() {
          return ef
        },
        stopEngine: function() {
          return ei
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = b(n(9777)),
        l = b(n(4738)),
        d = b(n(4659)),
        c = b(n(3452)),
        r = b(n(6633)),
        s = b(n(3729)),
        u = b(n(2397)),
        f = b(n(5082)),
        p = n(7087),
        E = n(9468),
        I = n(3946),
        T = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var n = g(t);
          if (n && n.has(e)) return n.get(e);
          var a = {
              __proto__: null
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
            } return a.default = e, n && n.set(e, a), a
        }(n(5012)),
        y = b(n(8955));

      function b(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function g(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (g = function(e) {
          return e ? n : t
        })(e)
      }
      let m = Object.keys(p.QuickEffectIds),
        O = e => m.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: R,
          RENDER_GENERAL: N,
          W_MOD_IX: L
        } = p.IX2EngineConstants,
        {
          getAffectedElements: A,
          getElementId: h,
          getDestinationValues: S,
          observeStore: C,
          getInstanceId: M,
          renderHTMLElement: U,
          clearAllStyles: w,
          getMaxDurationItemIndex: V,
          getComputedStyle: G,
          getInstanceOrigin: P,
          reduceListToGroup: k,
          shouldNamespaceEventParameter: x,
          getNamespacedParameterId: F,
          shouldAllowMediaQuery: D,
          cleanupHTMLElement: B,
          clearObjectCache: Q,
          stringifyTarget: X,
          mediaQueriesEqual: H,
          shallowEqual: Y
        } = E.IX2VanillaUtils,
        {
          isPluginType: W,
          createPluginInstance: z,
          getPluginDuration: j
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);

      function K(e) {
        C({
          store: e,
          select: ({
            ixRequest: e
          }) => e.preview,
          onChange: Z
        }), C({
          store: e,
          select: ({
            ixRequest: e
          }) => e.playback,
          onChange: ee
        }), C({
          store: e,
          select: ({
            ixRequest: e
          }) => e.stop,
          onChange: et
        }), C({
          store: e,
          select: ({
            ixRequest: e
          }) => e.clear,
          onChange: en
        })
      }

      function Z({
        rawData: e,
        defer: t
      }, n) {
        let a = () => {
          ea({
            store: n,
            rawData: e,
            allowEvents: !0
          }), J()
        };
        t ? setTimeout(a, 0) : a()
      }

      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
      }

      function ee(e, t) {
        let {
          actionTypeId: n,
          actionListId: a,
          actionItemId: i,
          eventId: o,
          allowEvents: l,
          immediate: d,
          testManual: c,
          verbose: r = !0
        } = e, {
          rawData: s
        } = e;
        if (a && i && s && d) {
          let e = s.actionLists[a];
          e && (s = k({
            actionList: e,
            actionItemId: i,
            rawData: s
          }))
        }
        if (ea({
            store: t,
            rawData: s,
            allowEvents: l,
            testManual: c
          }), a && n === p.ActionTypeConsts.GENERAL_START_ACTION || O(n)) {
          ep({
            store: t,
            actionListId: a
          }), eu({
            store: t,
            actionListId: a,
            eventId: o
          });
          let e = eE({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: d,
            verbose: r
          });
          r && e && t.dispatch((0, I.actionListPlaybackChanged)({
            actionListId: a,
            isPlaying: !d
          }))
        }
      }

      function et({
        actionListId: e
      }, t) {
        e ? ep({
          store: t,
          actionListId: e
        }) : ef({
          store: t
        }), ei(t)
      }

      function en(e, t) {
        ei(t), w({
          store: t,
          elementApi: T
        })
      }

      function ea({
        store: e,
        rawData: t,
        allowEvents: n,
        testManual: a
      }) {
        let {
          ixSession: i
        } = e.getState();
        if (t && e.dispatch((0, I.rawDataImported)(t)), !i.active) {
          (e.dispatch((0, I.sessionInitialized)({
            hasBoundaryNodes: !!document.querySelector(_),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
          })), n) && (function(e) {
            let {
              ixData: t
            } = e.getState(), {
              eventTypeMap: n
            } = t;
            ed(e), (0, u.default)(n, (t, n) => {
              let a = y.default[n];
              if (!a) return void console.warn(`IX2 event type not configured: ${n}`);
              ! function({
                logic: e,
                store: t,
                events: n
              }) {
                ! function(e) {
                  if (!q) return;
                  let t = {},
                    n = "";
                  for (let a in e) {
                    let {
                      eventTypeId: i,
                      target: o
                    } = e[a], l = T.getQuerySelector(o);
                    t[l] || (i === p.EventTypeConsts.MOUSE_CLICK || i === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[l] = !0, n += l + "{cursor: pointer;touch-action: manipulation;}")
                  }
                  if (n) {
                    let e = document.createElement("style");
                    e.textContent = n, document.body.appendChild(e)
                  }
                }(n);
                let {
                  types: a,
                  handler: i
                } = e, {
                  ixData: c
                } = t.getState(), {
                  actionLists: r
                } = c, s = ec(n, es);
                if (!(0, d.default)(s)) return;
                (0, u.default)(s, (e, a) => {
                  let i = n[a],
                    {
                      action: d,
                      id: s,
                      mediaQueries: u = c.mediaQueryKeys
                    } = i,
                    {
                      actionListId: f
                    } = d.config;
                  H(u, c.mediaQueryKeys) || t.dispatch((0, I.mediaQueriesDefined)()), d.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(n => {
                    let {
                      continuousParameterGroupId: a
                    } = n, i = (0, l.default)(r, `${f}.continuousParameterGroups`, []), d = (0, o.default)(i, ({
                      id: e
                    }) => e === a), c = (n.smoothing || 0) / 100, u = (n.restingState || 0) / 100;
                    d && e.forEach((e, a) => {
                      ! function({
                        store: e,
                        eventStateKey: t,
                        eventTarget: n,
                        eventId: a,
                        eventConfig: i,
                        actionListId: o,
                        parameterGroup: d,
                        smoothing: c,
                        restingValue: r
                      }) {
                        let {
                          ixData: s,
                          ixSession: u
                        } = e.getState(), {
                          events: f
                        } = s, E = f[a], {
                          eventTypeId: I
                        } = E, y = {}, b = {}, g = [], {
                          continuousActionGroups: m
                        } = d, {
                          id: O
                        } = d;
                        x(I, i) && (O = F(t, O));
                        let R = u.hasBoundaryNodes && n ? T.getClosestElement(n, _) : null;
                        m.forEach(e => {
                          let {
                            keyframe: t,
                            actionItems: a
                          } = e;
                          a.forEach(e => {
                            let {
                              actionTypeId: a
                            } = e, {
                              target: i
                            } = e.config;
                            if (!i) return;
                            let o = i.boundaryMode ? R : null,
                              l = X(i) + v + a;
                            if (b[l] = function(e = [], t, n) {
                                let a, i = [...e];
                                return i.some((e, n) => e.keyframe === t && (a = n, !0)), null == a && (a = i.length, i.push({
                                  keyframe: t,
                                  actionItems: []
                                })), i[a].actionItems.push(n), i
                              }(b[l], t, e), !y[l]) {
                              y[l] = !0;
                              let {
                                config: t
                              } = e;
                              A({
                                config: t,
                                event: E,
                                eventTarget: n,
                                elementRoot: o,
                                elementApi: T
                              }).forEach(e => {
                                g.push({
                                  element: e,
                                  key: l
                                })
                              })
                            }
                          })
                        }), g.forEach(({
                          element: t,
                          key: n
                        }) => {
                          let i = b[n],
                            d = (0, l.default)(i, "[0].actionItems[0]", {}),
                            {
                              actionTypeId: s
                            } = d,
                            u = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (d.config?.target?.selectorGuids || []).length : W(s)) ? z(s)?.(t, d) : null,
                            f = S({
                              element: t,
                              actionItem: d,
                              elementApi: T
                            }, u);
                          eI({
                            store: e,
                            element: t,
                            eventId: a,
                            actionListId: o,
                            actionItem: d,
                            destination: f,
                            continuous: !0,
                            parameterId: O,
                            actionGroups: i,
                            smoothing: c,
                            restingValue: r,
                            pluginInstance: u
                          })
                        })
                      }({
                        store: t,
                        eventStateKey: s + v + a,
                        eventTarget: e,
                        eventId: s,
                        eventConfig: n,
                        actionListId: f,
                        parameterGroup: d,
                        smoothing: c,
                        restingValue: u
                      })
                    })
                  }), (d.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || O(d.actionTypeId)) && eu({
                    store: t,
                    actionListId: f,
                    eventId: s
                  })
                });
                let E = e => {
                    let {
                      ixSession: a
                    } = t.getState();
                    er(s, (o, l, d) => {
                      let r = n[l],
                        s = a.eventState[d],
                        {
                          action: u,
                          mediaQueries: f = c.mediaQueryKeys
                        } = r;
                      if (!D(f, a.mediaQueryKey)) return;
                      let E = (n = {}) => {
                        let a = i({
                          store: t,
                          element: o,
                          event: r,
                          eventConfig: n,
                          nativeEvent: e,
                          eventStateKey: d
                        }, s);
                        Y(a, s) || t.dispatch((0, I.eventStateChanged)(d, a))
                      };
                      u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(r.config) ? r.config : [r.config]).forEach(E) : E()
                    })
                  },
                  y = (0, f.default)(E, 12),
                  b = ({
                    target: e = document,
                    types: n,
                    throttle: a
                  }) => {
                    n.split(" ").filter(Boolean).forEach(n => {
                      let i = a ? y : E;
                      e.addEventListener(n, i), t.dispatch((0, I.eventListenerAdded)(e, [n, i]))
                    })
                  };
                Array.isArray(a) ? a.forEach(b) : "string" == typeof a && b(e)
              }({
                logic: a,
                store: e,
                events: t
              })
            });
            let {
              ixSession: a
            } = e.getState();
            a.eventListeners.length && function(e) {
              let t = () => {
                ed(e)
              };
              el.forEach(n => {
                window.addEventListener(n, t), e.dispatch((0, I.eventListenerAdded)(window, [n, t]))
              }), t()
            }(e)
          }(e), function() {
            let {
              documentElement: e
            } = document; - 1 === e.className.indexOf(L) && (e.className += ` ${L}`)
          }(), e.getState().ixSession.hasDefinedMediaQueries && C({
            store: e,
            select: ({
              ixSession: e
            }) => e.mediaQueryKey,
            onChange: () => {
              ei(e), w({
                store: e,
                elementApi: T
              }), ea({
                store: e,
                allowEvents: !0
              }), J()
            }
          }));
          e.dispatch((0, I.sessionStarted)()),
            function(e, t) {
              let n = a => {
                let {
                  ixSession: i,
                  ixParameters: o
                } = e.getState();
                if (i.active)
                  if (e.dispatch((0, I.animationFrameChanged)(a, o)), t) {
                    let t = C({
                      store: e,
                      select: ({
                        ixSession: e
                      }) => e.tick,
                      onChange: e => {
                        n(e), t()
                      }
                    })
                  } else requestAnimationFrame(n)
              };
              n(window.performance.now())
            }(e, a)
        }
      }

      function ei(e) {
        let {
          ixSession: t
        } = e.getState();
        if (t.active) {
          let {
            eventListeners: n
          } = t;
          n.forEach(eo), Q(), e.dispatch((0, I.sessionStopped)())
        }
      }

      function eo({
        target: e,
        listenerParams: t
      }) {
        e.removeEventListener.apply(e, t)
      }
      let el = ["resize", "orientationchange"];

      function ed(e) {
        let {
          ixSession: t,
          ixData: n
        } = e.getState(), a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let {
            mediaQueries: t
          } = n;
          e.dispatch((0, I.viewportWidthChanged)({
            width: a,
            mediaQueries: t
          }))
        }
      }
      let ec = (e, t) => (0, c.default)((0, s.default)(e, t), r.default),
        er = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a)
            })
          })
        },
        es = e => A({
          config: {
            target: e.target,
            targets: e.targets
          },
          elementApi: T
        });

      function eu({
        store: e,
        actionListId: t,
        eventId: n
      }) {
        let {
          ixData: a,
          ixSession: i
        } = e.getState(), {
          actionLists: o,
          events: d
        } = a, c = d[n], r = o[t];
        if (r && r.useFirstGroupAsInitialState) {
          let o = (0, l.default)(r, "actionItemGroups[0].actionItems", []);
          if (!D((0, l.default)(c, "mediaQueries", a.mediaQueryKeys), i.mediaQueryKey)) return;
          o.forEach(a => {
            let {
              config: i,
              actionTypeId: o
            } = a, l = A({
              config: i?.target?.useEventTarget === !0 && i?.target?.objectId == null ? {
                target: c.target,
                targets: c.targets
              } : i,
              event: c,
              elementApi: T
            }), d = W(o);
            l.forEach(i => {
              let l = d ? z(o)?.(i, a) : null;
              eI({
                destination: S({
                  element: i,
                  actionItem: a,
                  elementApi: T
                }, l),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: l
              })
            })
          })
        }
      }

      function ef({
        store: e
      }) {
        let {
          ixInstances: t
        } = e.getState();
        (0, u.default)(t, t => {
          if (!t.continuous) {
            let {
              actionListId: n,
              verbose: a
            } = t;
            eT(t, e), a && e.dispatch((0, I.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !1
            }))
          }
        })
      }

      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i
      }) {
        let {
          ixInstances: o,
          ixSession: d
        } = e.getState(), c = d.hasBoundaryNodes && n ? T.getClosestElement(n, _) : null;
        (0, u.default)(o, n => {
          let o = (0, l.default)(n, "actionItem.config.target.boundaryMode"),
            d = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && d) {
            if (c && o && !T.elementContains(c, n.element)) return;
            eT(n, e), n.verbose && e.dispatch((0, I.actionListPlaybackChanged)({
              actionListId: i,
              isPlaying: !1
            }))
          }
        })
      }

      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: d,
        verbose: c
      }) {
        let {
          ixData: r,
          ixSession: s
        } = e.getState(), {
          events: u
        } = r, f = u[t] || {}, {
          mediaQueries: p = r.mediaQueryKeys
        } = f, {
          actionItemGroups: E,
          useFirstGroupAsInitialState: I
        } = (0, l.default)(r, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        o >= E.length && (0, l.default)(f, "config.loop") && (o = 0), 0 === o && I && o++;
        let y = (0 === o || 1 === o && I) && O(f.action?.actionTypeId) ? f.config.delay : void 0,
          b = (0, l.default)(E, [o, "actionItems"], []);
        if (!b.length || !D(p, s.mediaQueryKey)) return !1;
        let g = s.hasBoundaryNodes && n ? T.getClosestElement(n, _) : null,
          m = V(b),
          v = !1;
        return b.forEach((l, r) => {
          let {
            config: s,
            actionTypeId: u
          } = l, p = W(u), {
            target: E
          } = s;
          E && A({
            config: s,
            event: f,
            eventTarget: n,
            elementRoot: E.boundaryMode ? g : null,
            elementApi: T
          }).forEach((s, f) => {
            let E = p ? z(u)?.(s, l) : null,
              I = p ? j(u)(s, l) : null;
            v = !0;
            let b = G({
                element: s,
                actionItem: l
              }),
              g = S({
                element: s,
                actionItem: l,
                elementApi: T
              }, E);
            eI({
              store: e,
              element: s,
              actionItem: l,
              eventId: t,
              eventTarget: n,
              eventStateKey: a,
              actionListId: i,
              groupIndex: o,
              isCarrier: m === r && 0 === f,
              computedStyle: b,
              destination: g,
              immediate: d,
              verbose: c,
              pluginInstance: E,
              pluginDuration: I,
              instanceDelay: y
            })
          })
        }), v
      }

      function eI(e) {
        let t, {
            store: n,
            computedStyle: a,
            ...i
          } = e,
          {
            element: o,
            actionItem: l,
            immediate: d,
            pluginInstance: c,
            continuous: r,
            restingValue: s,
            eventId: u
          } = i,
          f = M(),
          {
            ixElements: E,
            ixSession: y,
            ixData: b
          } = n.getState(),
          g = h(E, o),
          {
            refState: m
          } = E[g] || {},
          O = T.getRefType(o),
          v = y.reducedMotion && p.ReducedMotionTypes[l.actionTypeId];
        if (v && r) switch (b.events[u]?.eventTypeId) {
          case p.EventTypeConsts.MOUSE_MOVE:
          case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            t = s;
            break;
          default:
            t = .5
        }
        let _ = P(o, m, a, l, T, c);
        if (n.dispatch((0, I.instanceAdded)({
            instanceId: f,
            elementId: g,
            origin: _,
            refType: O,
            skipMotion: v,
            skipToValue: t,
            ...i
          })), ey(document.body, "ix2-animation-started", f), d) return void
        function(e, t) {
          let {
            ixParameters: n
          } = e.getState();
          e.dispatch((0, I.instanceStarted)(t, 0)), e.dispatch((0, I.animationFrameChanged)(performance.now(), n));
          let {
            ixInstances: a
          } = e.getState();
          eb(a[t], e)
        }(n, f);
        C({
          store: n,
          select: ({
            ixInstances: e
          }) => e[f],
          onChange: eb
        }), r || n.dispatch((0, I.instanceStarted)(f, y.tick))
      }

      function eT(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
        });
        let {
          elementId: n,
          actionItem: a
        } = e, {
          ixElements: i
        } = t.getState(), {
          ref: o,
          refType: l
        } = i[n] || {};
        l === R && B(o, a, T), t.dispatch((0, I.instanceRemoved)(e.id))
      }

      function ey(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a)
      }

      function eb(e, t) {
        let {
          active: n,
          continuous: a,
          complete: i,
          elementId: o,
          actionItem: l,
          actionTypeId: d,
          renderType: c,
          current: r,
          groupIndex: s,
          eventId: u,
          eventTarget: f,
          eventStateKey: p,
          actionListId: E,
          isCarrier: y,
          styleProp: b,
          verbose: g,
          pluginInstance: m
        } = e, {
          ixData: O,
          ixSession: v
        } = t.getState(), {
          events: _
        } = O, {
          mediaQueries: L = O.mediaQueryKeys
        } = _ && _[u] ? _[u] : {};
        if (D(L, v.mediaQueryKey) && (a || n || i)) {
          if (r || c === N && i) {
            t.dispatch((0, I.elementStateChanged)(o, d, r, l));
            let {
              ixElements: e
            } = t.getState(), {
              ref: n,
              refType: a,
              refState: i
            } = e[o] || {}, s = i && i[d];
            (a === R || W(d)) && U(n, i, s, u, l, b, T, c, m)
          }
          if (i) {
            if (y) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: g
              });
              g && !e && t.dispatch((0, I.actionListPlaybackChanged)({
                actionListId: E,
                isPlaying: !1
              }))
            }
            eT(e, t)
          }
        }
      }
    },
    8955: function(e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return ep
        }
      });
      let i = u(n(5801)),
        o = u(n(4738)),
        l = u(n(3789)),
        d = n(7087),
        c = n(1970),
        r = n(3946),
        s = n(9468);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      let {
        MOUSE_CLICK: f,
        MOUSE_SECOND_CLICK: p,
        MOUSE_DOWN: E,
        MOUSE_UP: I,
        MOUSE_OVER: T,
        MOUSE_OUT: y,
        DROPDOWN_CLOSE: b,
        DROPDOWN_OPEN: g,
        SLIDER_ACTIVE: m,
        SLIDER_INACTIVE: O,
        TAB_ACTIVE: v,
        TAB_INACTIVE: _,
        NAVBAR_CLOSE: R,
        NAVBAR_OPEN: N,
        MOUSE_MOVE: L,
        PAGE_SCROLL_DOWN: A,
        SCROLL_INTO_VIEW: h,
        SCROLL_OUT_OF_VIEW: S,
        PAGE_SCROLL_UP: C,
        SCROLLING_IN_VIEW: M,
        PAGE_FINISH: U,
        ECOMMERCE_CART_CLOSE: w,
        ECOMMERCE_CART_OPEN: V,
        PAGE_START: G,
        PAGE_SCROLL: P
      } = d.EventTypeConsts, k = "COMPONENT_ACTIVE", x = "COMPONENT_INACTIVE", {
        COLON_DELIMITER: F
      } = d.IX2EngineConstants, {
        getNamespacedParameterId: D
      } = s.IX2VanillaUtils, B = e => t => !!("object" == typeof t && e(t)) || t, Q = B(({
        element: e,
        nativeEvent: t
      }) => e === t.target), X = B(({
        element: e,
        nativeEvent: t
      }) => e.contains(t.target)), H = (0, i.default)([Q, X]), Y = (e, t) => {
        if (t) {
          let {
            ixData: n
          } = e.getState(), {
            events: a
          } = n, i = a[t];
          if (i && !ee[i.eventTypeId]) return i
        }
        return null
      }, W = ({
        store: e,
        event: t
      }) => {
        let {
          action: n
        } = t, {
          autoStopEventId: a
        } = n.config;
        return !!Y(e, a)
      }, z = ({
        store: e,
        event: t,
        element: n,
        eventStateKey: a
      }, i) => {
        let {
          action: l,
          id: d
        } = t, {
          actionListId: r,
          autoStopEventId: s
        } = l.config, u = Y(e, s);
        return u && (0, c.stopActionGroup)({
          store: e,
          eventId: s,
          eventTarget: n,
          eventStateKey: s + F + a.split(F)[1],
          actionListId: (0, o.default)(u, "action.config.actionListId")
        }), (0, c.stopActionGroup)({
          store: e,
          eventId: d,
          eventTarget: n,
          eventStateKey: a,
          actionListId: r
        }), (0, c.startActionGroup)({
          store: e,
          eventId: d,
          eventTarget: n,
          eventStateKey: a,
          actionListId: r
        }), i
      }, j = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a, $ = {
        handler: j(H, z)
      }, q = {
        ...$,
        types: [k, x].join(" ")
      }, K = [{
        target: window,
        types: "resize orientationchange",
        throttle: !0
      }, {
        target: document,
        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
        throttle: !0
      }], Z = "mouseover mouseout", J = {
        types: K
      }, ee = {
        PAGE_START: G,
        PAGE_FINISH: U
      }, et = (() => {
        let e = void 0 !== window.pageXOffset,
          t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : t.scrollLeft,
          scrollTop: e ? window.pageYOffset : t.scrollTop,
          stiffScrollTop: (0, l.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
          scrollWidth: t.scrollWidth,
          scrollHeight: t.scrollHeight,
          clientWidth: t.clientWidth,
          clientHeight: t.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        })
      })(), en = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ea = ({
        element: e,
        nativeEvent: t
      }) => {
        let {
          type: n,
          target: a,
          relatedTarget: i
        } = t, o = e.contains(a);
        if ("mouseover" === n && o) return !0;
        let l = e.contains(i);
        return "mouseout" === n && !!o && !!l
      }, ei = e => {
        let {
          element: t,
          event: {
            config: n
          }
        } = e, {
          clientWidth: a,
          clientHeight: i
        } = et(), o = n.scrollOffsetValue, l = "PX" === n.scrollOffsetUnit ? o : i * (o || 0) / 100;
        return en(t.getBoundingClientRect(), {
          left: 0,
          top: l,
          right: a,
          bottom: i - l
        })
      }, eo = e => (t, n) => {
        let {
          type: a
        } = t.nativeEvent, i = -1 !== [k, x].indexOf(a) ? a === k : n.isActive, o = {
          ...n,
          isActive: i
        };
        return (!n || o.isActive !== n.isActive) && e(t, o) || o
      }, el = e => (t, n) => {
        let a = {
          elementHovered: ea(t)
        };
        return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
      }, ed = e => (t, n = {}) => {
        let a, i, {
            stiffScrollTop: o,
            scrollHeight: l,
            innerHeight: d
          } = et(),
          {
            event: {
              config: c,
              eventTypeId: r
            }
          } = t,
          {
            scrollOffsetValue: s,
            scrollOffsetUnit: u
          } = c,
          f = l - d,
          p = Number((o / f).toFixed(2));
        if (n && n.percentTop === p) return n;
        let E = ("PX" === u ? s : d * (s || 0) / 100) / f,
          I = 0;
        n && (a = p > n.percentTop, I = (i = n.scrollingDown !== a) ? p : n.anchorTop);
        let T = r === A ? p >= I + E : p <= I - E,
          y = {
            ...n,
            percentTop: p,
            inBounds: T,
            anchorTop: I,
            scrollingDown: a
          };
        return n && T && (i || y.inBounds !== n.inBounds) && e(t, y) || y
      }, ec = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, er = e => (t, n = {
        clickCount: 0
      }) => {
        let a = {
          clickCount: n.clickCount % 2 + 1
        };
        return a.clickCount !== n.clickCount && e(t, a) || a
      }, es = (e = !0) => ({
        ...q,
        handler: j(e ? H : Q, eo((e, t) => t.isActive ? $.handler(e, t) : t))
      }), eu = (e = !0) => ({
        ...q,
        handler: j(e ? H : Q, eo((e, t) => t.isActive ? t : $.handler(e, t)))
      }), ef = {
        ...J,
        handler: (a = (e, t) => {
          let {
            elementVisible: n
          } = t, {
            event: a,
            store: i
          } = e, {
            ixData: o
          } = i.getState(), {
            events: l
          } = o;
          return !l[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === h === n ? (z(e), {
            ...t,
            triggered: !0
          }) : t
        }, (e, t) => {
          let n = {
            ...t,
            elementVisible: ei(e)
          };
          return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
        })
      }, ep = {
        [m]: es(),
        [O]: eu(),
        [g]: es(),
        [b]: eu(),
        [N]: es(!1),
        [R]: eu(!1),
        [v]: es(),
        [_]: eu(),
        [V]: {
          types: "ecommerce-cart-open",
          handler: j(H, z)
        },
        [w]: {
          types: "ecommerce-cart-close",
          handler: j(H, z)
        },
        [f]: {
          types: "click",
          handler: j(H, er((e, {
            clickCount: t
          }) => {
            W(e) ? 1 === t && z(e) : z(e)
          }))
        },
        [p]: {
          types: "click",
          handler: j(H, er((e, {
            clickCount: t
          }) => {
            2 === t && z(e)
          }))
        },
        [E]: {
          ...$,
          types: "mousedown"
        },
        [I]: {
          ...$,
          types: "mouseup"
        },
        [T]: {
          types: Z,
          handler: j(H, el((e, t) => {
            t.elementHovered && z(e)
          }))
        },
        [y]: {
          types: Z,
          handler: j(H, el((e, t) => {
            t.elementHovered || z(e)
          }))
        },
        [L]: {
          types: "mousemove mouseout scroll",
          handler: ({
            store: e,
            element: t,
            eventConfig: n,
            nativeEvent: a,
            eventStateKey: i
          }, o = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }) => {
            let {
              basedOn: l,
              selectedAxis: c,
              continuousParameterGroupId: s,
              reverse: u,
              restingState: f = 0
            } = n, {
              clientX: p = o.clientX,
              clientY: E = o.clientY,
              pageX: I = o.pageX,
              pageY: T = o.pageY
            } = a, y = "X_AXIS" === c, b = "mouseout" === a.type, g = f / 100, m = s, O = !1;
            switch (l) {
              case d.EventBasedOn.VIEWPORT:
                g = y ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                break;
              case d.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: n,
                  scrollHeight: a
                } = et();
                g = y ? Math.min(e + I, n) / n : Math.min(t + T, a) / a;
                break
              }
              case d.EventBasedOn.ELEMENT:
              default: {
                m = D(i, s);
                let e = 0 === a.type.indexOf("mouse");
                if (e && !0 !== H({
                    element: t,
                    nativeEvent: a
                  })) break;
                let n = t.getBoundingClientRect(),
                  {
                    left: o,
                    top: l,
                    width: d,
                    height: c
                  } = n;
                if (!e && !ec({
                    left: p,
                    top: E
                  }, n)) break;
                O = !0, g = y ? (p - o) / d : (E - l) / c
              }
            }
            return b && (g > .95 || g < .05) && (g = Math.round(g)), (l !== d.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (g = u ? 1 - g : g, e.dispatch((0, r.parameterChanged)(m, g))), {
              elementHovered: O,
              clientX: p,
              clientY: E,
              pageX: I,
              pageY: T
            }
          }
        },
        [P]: {
          types: K,
          handler: ({
            store: e,
            eventConfig: t
          }) => {
            let {
              continuousParameterGroupId: n,
              reverse: a
            } = t, {
              scrollTop: i,
              scrollHeight: o,
              clientHeight: l
            } = et(), d = i / (o - l);
            d = a ? 1 - d : d, e.dispatch((0, r.parameterChanged)(n, d))
          }
        },
        [M]: {
          types: K,
          handler: ({
            element: e,
            store: t,
            eventConfig: n,
            eventStateKey: a
          }, i = {
            scrollPercent: 0
          }) => {
            let {
              scrollLeft: o,
              scrollTop: l,
              scrollWidth: c,
              scrollHeight: s,
              clientHeight: u
            } = et(), {
              basedOn: f,
              selectedAxis: p,
              continuousParameterGroupId: E,
              startsEntering: I,
              startsExiting: T,
              addEndOffset: y,
              addStartOffset: b,
              addOffsetValue: g = 0,
              endOffsetValue: m = 0
            } = n;
            if (f === d.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === p ? o / c : l / s;
              return e !== i.scrollPercent && t.dispatch((0, r.parameterChanged)(E, e)), {
                scrollPercent: e
              }
            } {
              let n = D(a, E),
                o = e.getBoundingClientRect(),
                l = (b ? g : 0) / 100,
                d = (y ? m : 0) / 100;
              l = I ? l : 1 - l, d = T ? d : 1 - d;
              let c = o.top + Math.min(o.height * l, u),
                f = Math.min(u + (o.top + o.height * d - c), s),
                p = Math.min(Math.max(0, u - c), f) / f;
              return p !== i.scrollPercent && t.dispatch((0, r.parameterChanged)(n, p)), {
                scrollPercent: p
              }
            }
          }
        },
        [h]: ef,
        [S]: ef,
        [A]: {
          ...J,
          handler: ed((e, t) => {
            t.scrollingDown && z(e)
          })
        },
        [C]: {
          ...J,
          handler: ed((e, t) => {
            t.scrollingDown || z(e)
          })
        },
        [U]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: j(Q, (e, t) => {
            let n = {
              finished: "complete" === document.readyState
            };
            return n.finished && !(t && t.finshed) && z(e), n
          })
        },
        [G]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: j(Q, (e, t) => (t || z(e), {
            started: !0
          }))
        }
      }
    },
    4609: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixData", {
        enumerable: !0,
        get: function() {
          return i
        }
      });
      let {
        IX2_RAW_DATA_IMPORTED: a
      } = n(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === a ? t.payload.ixData || Object.freeze({}) : e
    },
    7718: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixInstances", {
        enumerable: !0,
        get: function() {
          return O
        }
      });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_STOPPED: d,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: r,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E
        } = i.IX2EasingUtils,
        {
          RENDER_GENERAL: I
        } = a.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: y,
          getStyleProp: b
        } = i.IX2VanillaUtils,
        g = (e, t) => {
          let n, a, i, l, {
              position: d,
              parameterId: c,
              actionGroups: r,
              destinationKeys: s,
              smoothing: u,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: y,
              skipMotion: b,
              skipToValue: g
            } = e,
            {
              parameters: m
            } = t.payload,
            O = Math.max(1 - u, .01),
            v = m[c];
          null == v && (O = 1, v = E);
          let _ = f((Math.max(v, 0) || 0) - d),
            R = b ? g : f(d + _ * O),
            N = 100 * R;
          if (R === d && e.current) return e;
          for (let e = 0, {
              length: t
            } = r; e < t; e++) {
            let {
              keyframe: t,
              actionItems: o
            } = r[e];
            if (0 === e && (n = o[0]), N >= t) {
              n = o[0];
              let d = r[e + 1],
                c = d && N !== t;
              a = c ? d.actionItems[0] : null, c && (i = t / 100, l = (d.keyframe - t) / 100)
            }
          }
          let L = {};
          if (n && !a)
            for (let e = 0, {
                length: t
              } = s; e < t; e++) {
              let t = s[e];
              L[t] = T(I, t, n.config)
            } else if (n && a && void 0 !== i && void 0 !== l) {
              let e = (R - i) / l,
                t = p(n.config.easing, e, y);
              for (let e = 0, {
                  length: i
                } = s; e < i; e++) {
                let i = s[e],
                  o = T(I, i, n.config),
                  l = (T(I, i, a.config) - o) * t + o;
                L[i] = l
              }
            } return (0, o.merge)(e, {
            position: R,
            current: L
          })
        },
        m = (e, t) => {
          let {
            active: n,
            origin: a,
            start: i,
            immediate: l,
            renderType: d,
            verbose: c,
            actionItem: r,
            destination: s,
            destinationKeys: u,
            pluginDuration: E,
            instanceDelay: T,
            customEasingFn: y,
            skipMotion: b
          } = e, g = r.config.easing, {
            duration: m,
            delay: O
          } = r.config;
          null != E && (m = E), O = null != T ? T : O, d === I ? m = 0 : (l || b) && (m = O = 0);
          let {
            now: v
          } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (c) {
              let t = m + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n)
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / m), 1)),
              l = p(g, n, y),
              d = {},
              r = null;
            return u.length && (r = u.reduce((e, t) => {
              let n = s[t],
                i = parseFloat(a[t]) || 0,
                o = parseFloat(n) - i;
              return e[t] = o * l + i, e
            }, {})), d.current = r, d.position = n, 1 === n && (d.active = !1, d.complete = !0), (0, o.merge)(e, d)
          }
          return e
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case l:
              return t.payload.ixInstances || Object.freeze({});
            case d:
              return Object.freeze({});
            case c: {
              let {
                instanceId: n,
                elementId: a,
                actionItem: i,
                eventId: l,
                eventTarget: d,
                eventStateKey: c,
                actionListId: r,
                groupIndex: s,
                isCarrier: u,
                origin: f,
                destination: p,
                immediate: I,
                verbose: T,
                continuous: g,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: _,
                pluginInstance: R,
                pluginDuration: N,
                instanceDelay: L,
                skipMotion: A,
                skipToValue: h
              } = t.payload, {
                actionTypeId: S
              } = i, C = y(S), M = b(C, S), U = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]), {
                easing: w
              } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: U,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: S,
                eventId: l,
                eventTarget: d,
                eventStateKey: c,
                actionListId: r,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: M,
                continuous: g,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: _,
                pluginInstance: R,
                pluginDuration: N,
                instanceDelay: L,
                skipMotion: A,
                skipToValue: h,
                customEasingFn: Array.isArray(w) && 4 === w.length ? E(w) : void 0
              })
            }
            case r: {
              let {
                instanceId: n,
                time: a
              } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a
              })
            }
            case s: {
              let {
                instanceId: n
              } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                {
                  length: o
                } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o])
              }
              return a
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                {
                  length: i
                } = a;
              for (let l = 0; l < i; l++) {
                let i = a[l],
                  d = e[i],
                  c = d.continuous ? g : m;
                n = (0, o.set)(n, i, c(d, t))
              }
              return n
            }
            default:
              return e
          }
        }
    },
    1540: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixParameters", {
        enumerable: !0,
        get: function() {
          return l
        }
      });
      let {
        IX2_RAW_DATA_IMPORTED: a,
        IX2_SESSION_STOPPED: i,
        IX2_PARAMETER_CHANGED: o
      } = n(7087).IX2EngineActionTypes, l = (e = {}, t) => {
        switch (t.type) {
          case a:
            return t.payload.ixParameters || {};
          case i:
            return {};
          case o: {
            let {
              key: n,
              value: a
            } = t.payload;
            return e[n] = a, e
          }
          default:
            return e
        }
      }
    },
    7243: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return u
        }
      });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        l = n(5862),
        d = n(9468),
        c = n(7718),
        r = n(1540),
        {
          ixElements: s
        } = d.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: l.ixSession,
          ixElements: s,
          ixInstances: c.ixInstances,
          ixParameters: r.ixParameters
        })
    },
    628: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixRequest", {
        enumerable: !0,
        get: function() {
          return u
        }
      });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: l,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: c
        } = a.IX2EngineActionTypes,
        r = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
        },
        s = Object.create(null, {
          [o]: {
            value: "preview"
          },
          [l]: {
            value: "playback"
          },
          [d]: {
            value: "stop"
          },
          [c]: {
            value: "clear"
          }
        }),
        u = (e = r, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], {
              ...t.payload
            })
          }
          return e
        }
    },
    5862: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ixSession", {
        enumerable: !0,
        get: function() {
          return T
        }
      });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: l,
          IX2_TEST_FRAME_RENDERED: d,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: r,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E
        } = a.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
        },
        T = (e = I, t) => {
          switch (t.type) {
            case o: {
              let {
                hasBoundaryNodes: n,
                reducedMotion: a
              } = t.payload;
              return (0, i.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: a
              })
            }
            case l:
              return (0, i.set)(e, "active", !0);
            case d: {
              let {
                payload: {
                  step: n = 20
                }
              } = t;
              return (0, i.set)(e, "tick", e.tick + n)
            }
            case c:
              return I;
            case u: {
              let {
                payload: {
                  now: n
                }
              } = t;
              return (0, i.set)(e, "tick", n)
            }
            case r: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n)
            }
            case s: {
              let {
                stateKey: n,
                newState: a
              } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a)
            }
            case f: {
              let {
                actionListId: n,
                isPlaying: a
              } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a)
            }
            case p: {
              let {
                width: n,
                mediaQueries: a
              } = t.payload, o = a.length, l = null;
              for (let e = 0; e < o; e++) {
                let {
                  key: t,
                  min: i,
                  max: o
                } = a[e];
                if (n >= i && n <= o) {
                  l = t;
                  break
                }
              }
              return (0, i.merge)(e, {
                viewportWidth: n,
                mediaQueryKey: l
              })
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e
          }
        }
    },
    7377: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        clearPlugin: function() {
          return s
        },
        createPluginInstance: function() {
          return c
        },
        getPluginConfig: function() {
          return i
        },
        getPluginDestination: function() {
          return d
        },
        getPluginDuration: function() {
          return o
        },
        getPluginOrigin: function() {
          return l
        },
        renderPlugin: function() {
          return r
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = e => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
        },
        l = e => e || {
          value: 0
        },
        d = e => ({
          value: e.value
        }),
        c = e => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n
        },
        r = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a)
        },
        s = e => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop()
        }
    },
    2570: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        clearPlugin: function() {
          return E
        },
        createPluginInstance: function() {
          return f
        },
        getPluginConfig: function() {
          return c
        },
        getPluginDestination: function() {
          return u
        },
        getPluginDuration: function() {
          return r
        },
        getPluginOrigin: function() {
          return s
        },
        renderPlugin: function() {
          return p
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        l = e => document.querySelector(`[data-w-id="${e}"]`),
        d = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        r = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            {
              inputs: a = {}
            } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n
        },
        u = e => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? l(n) : null
        },
        p = (e, {
          PLUGIN_RIVE: t
        }, n) => {
          let a = d();
          if (!a) return;
          let l = a.getInstance(e),
            c = a.rive.StateMachineInputType,
            {
              name: r,
              inputs: s = {}
            } = n.config.value || {};

          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t)
              };
              e?.on("load", t)
            }

            function n() {
              let n = e.stateMachineInputs(r);
              if (null != n) {
                if (e.isPlaying || e.play(r, !1), i in s || o in s) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    a = s[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) && (e.layout = t.copyWith({
                    fit: n,
                    alignment: a
                  }))
                }
                for (let e in s) {
                  if (e === i || e === o) continue;
                  let a = n.find(t => t.name === e);
                  if (null != a) switch (a.type) {
                    case c.Boolean:
                      null != s[e] && (a.value = !!s[e]);
                      break;
                    case c.Number: {
                      let n = t[e];
                      null != n && (a.value = n);
                      break
                    }
                    case c.Trigger:
                      s[e] && a.fire()
                  }
                }
              }
            }
          }
          l?.rive ? u(l.rive) : a.setLoadHandler(e, u)
        },
        E = (e, t) => null
    },
    2866: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        clearPlugin: function() {
          return E
        },
        createPluginInstance: function() {
          return f
        },
        getPluginConfig: function() {
          return d
        },
        getPluginDestination: function() {
          return u
        },
        getPluginDuration: function() {
          return c
        },
        getPluginOrigin: function() {
          return s
        },
        renderPlugin: function() {
          return p
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = e => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        l = (e, t) => e.filter(e => !t.includes(e)),
        d = (e, t) => e.value[t],
        c = () => null,
        r = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = l(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => (e[t] = r[t], e), e) : e
          }
          return n.reduce((e, t) => (e[t] = r[t], e), {})
        },
        u = e => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            l = n.config.target.objectId,
            d = e => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = l && e.findObjectById(l);
              if (!n) return;
              let {
                PLUGIN_SPLINE: a
              } = t;
              null != a.positionX && (n.position.x = a.positionX), null != a.positionY && (n.position.y = a.positionY), null != a.positionZ && (n.position.z = a.positionZ), null != a.rotationX && (n.rotation.x = a.rotationX), null != a.rotationY && (n.rotation.y = a.rotationY), null != a.rotationZ && (n.rotation.z = a.rotationZ), null != a.scaleX && (n.scale.x = a.scaleX), null != a.scaleY && (n.scale.y = a.scaleY), null != a.scaleZ && (n.scale.z = a.scaleZ)
            };
          i ? d(i.spline) : a.setLoadHandler(e, d)
        },
        E = () => null
    },
    1407: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        clearPlugin: function() {
          return p
        },
        createPluginInstance: function() {
          return s
        },
        getPluginConfig: function() {
          return l
        },
        getPluginDestination: function() {
          return r
        },
        getPluginDuration: function() {
          return d
        },
        getPluginOrigin: function() {
          return c
        },
        renderPlugin: function() {
          return f
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = n(380),
        l = (e, t) => e.value[t],
        d = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size ? {
            size: parseInt(i, 10)
          } : "%" === n.unit || "-" === n.unit ? {
            size: parseFloat(i)
          } : null != n.red && null != n.green && null != n.blue ? (0, o.normalizeColor)(i) : void 0
        },
        r = e => e.value,
        s = () => null,
        u = {
          color: {
            match: ({
              red: e,
              green: t,
              blue: n,
              alpha: a
            }) => [e, t, n, a].every(e => null != e),
            getValue: ({
              red: e,
              green: t,
              blue: n,
              alpha: a
            }) => `rgba(${e}, ${t}, ${n}, ${a})`
          },
          size: {
            match: ({
              size: e
            }) => null != e,
            getValue: ({
              size: e
            }, t) => "-" === t ? e : `${e}${t}`
          }
        },
        f = (e, t, n) => {
          let {
            target: {
              objectId: a
            },
            value: {
              unit: i
            }
          } = n.config, o = t.PLUGIN_VARIABLE, l = Object.values(u).find(e => e.match(o, i));
          l && document.documentElement.style.setProperty(a, l.getValue(o, i))
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n)
        }
    },
    3690: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "pluginMethodMap", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let a = n(7087),
        i = r(n(7377)),
        o = r(n(2866)),
        l = r(n(2570)),
        d = r(n(1407));

      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (c = function(e) {
          return e ? n : t
        })(e)
      }

      function r(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var a = {
            __proto__: null
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
          } return a.default = e, n && n.set(e, a), a
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...i
        }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, {
          ...o
        }],
        [a.ActionTypeConsts.PLUGIN_RIVE, {
          ...l
        }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...d
        }]
      ])
    },
    8023: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
          return m
        },
        IX2_ANIMATION_FRAME_CHANGED: function() {
          return E
        },
        IX2_CLEAR_REQUESTED: function() {
          return u
        },
        IX2_ELEMENT_STATE_CHANGED: function() {
          return g
        },
        IX2_EVENT_LISTENER_ADDED: function() {
          return f
        },
        IX2_EVENT_STATE_CHANGED: function() {
          return p
        },
        IX2_INSTANCE_ADDED: function() {
          return T
        },
        IX2_INSTANCE_REMOVED: function() {
          return b
        },
        IX2_INSTANCE_STARTED: function() {
          return y
        },
        IX2_MEDIA_QUERIES_DEFINED: function() {
          return v
        },
        IX2_PARAMETER_CHANGED: function() {
          return I
        },
        IX2_PLAYBACK_REQUESTED: function() {
          return r
        },
        IX2_PREVIEW_REQUESTED: function() {
          return c
        },
        IX2_RAW_DATA_IMPORTED: function() {
          return i
        },
        IX2_SESSION_INITIALIZED: function() {
          return o
        },
        IX2_SESSION_STARTED: function() {
          return l
        },
        IX2_SESSION_STOPPED: function() {
          return d
        },
        IX2_STOP_REQUESTED: function() {
          return s
        },
        IX2_TEST_FRAME_RENDERED: function() {
          return _
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function() {
          return O
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        l = "IX2_SESSION_STARTED",
        d = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        r = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        T = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        b = "IX2_INSTANCE_REMOVED",
        g = "IX2_ELEMENT_STATE_CHANGED",
        m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED"
    },
    2686: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        ABSTRACT_NODE: function() {
          return et
        },
        AUTO: function() {
          return H
        },
        BACKGROUND: function() {
          return x
        },
        BACKGROUND_COLOR: function() {
          return k
        },
        BAR_DELIMITER: function() {
          return z
        },
        BORDER_COLOR: function() {
          return F
        },
        BOUNDARY_SELECTOR: function() {
          return c
        },
        CHILDREN: function() {
          return j
        },
        COLON_DELIMITER: function() {
          return W
        },
        COLOR: function() {
          return D
        },
        COMMA_DELIMITER: function() {
          return Y
        },
        CONFIG_UNIT: function() {
          return T
        },
        CONFIG_VALUE: function() {
          return f
        },
        CONFIG_X_UNIT: function() {
          return p
        },
        CONFIG_X_VALUE: function() {
          return r
        },
        CONFIG_Y_UNIT: function() {
          return E
        },
        CONFIG_Y_VALUE: function() {
          return s
        },
        CONFIG_Z_UNIT: function() {
          return I
        },
        CONFIG_Z_VALUE: function() {
          return u
        },
        DISPLAY: function() {
          return B
        },
        FILTER: function() {
          return w
        },
        FLEX: function() {
          return Q
        },
        FONT_VARIATION_SETTINGS: function() {
          return V
        },
        HEIGHT: function() {
          return P
        },
        HTML_ELEMENT: function() {
          return J
        },
        IMMEDIATE_CHILDREN: function() {
          return $
        },
        IX2_ID_DELIMITER: function() {
          return i
        },
        OPACITY: function() {
          return U
        },
        PARENT: function() {
          return K
        },
        PLAIN_OBJECT: function() {
          return ee
        },
        PRESERVE_3D: function() {
          return Z
        },
        RENDER_GENERAL: function() {
          return ea
        },
        RENDER_PLUGIN: function() {
          return eo
        },
        RENDER_STYLE: function() {
          return ei
        },
        RENDER_TRANSFORM: function() {
          return en
        },
        ROTATE_X: function() {
          return L
        },
        ROTATE_Y: function() {
          return A
        },
        ROTATE_Z: function() {
          return h
        },
        SCALE_3D: function() {
          return N
        },
        SCALE_X: function() {
          return v
        },
        SCALE_Y: function() {
          return _
        },
        SCALE_Z: function() {
          return R
        },
        SIBLINGS: function() {
          return q
        },
        SKEW: function() {
          return S
        },
        SKEW_X: function() {
          return C
        },
        SKEW_Y: function() {
          return M
        },
        TRANSFORM: function() {
          return y
        },
        TRANSLATE_3D: function() {
          return O
        },
        TRANSLATE_X: function() {
          return b
        },
        TRANSLATE_Y: function() {
          return g
        },
        TRANSLATE_Z: function() {
          return m
        },
        WF_PAGE: function() {
          return o
        },
        WIDTH: function() {
          return G
        },
        WILL_CHANGE: function() {
          return X
        },
        W_MOD_IX: function() {
          return d
        },
        W_MOD_JS: function() {
          return l
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = "|",
        o = "data-wf-page",
        l = "w-mod-js",
        d = "w-mod-ix",
        c = ".w-dyn-item",
        r = "xValue",
        s = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        I = "zUnit",
        T = "unit",
        y = "transform",
        b = "translateX",
        g = "translateY",
        m = "translateZ",
        O = "translate3d",
        v = "scaleX",
        _ = "scaleY",
        R = "scaleZ",
        N = "scale3d",
        L = "rotateX",
        A = "rotateY",
        h = "rotateZ",
        S = "skew",
        C = "skewX",
        M = "skewY",
        U = "opacity",
        w = "filter",
        V = "font-variation-settings",
        G = "width",
        P = "height",
        k = "backgroundColor",
        x = "background",
        F = "borderColor",
        D = "color",
        B = "display",
        Q = "flex",
        X = "willChange",
        H = "AUTO",
        Y = ",",
        W = ":",
        z = "|",
        j = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN"
    },
    262: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        ActionAppliesTo: function() {
          return o
        },
        ActionTypeConsts: function() {
          return i
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    },
    7087: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        ActionTypeConsts: function() {
          return l.ActionTypeConsts
        },
        IX2EngineActionTypes: function() {
          return d
        },
        IX2EngineConstants: function() {
          return c
        },
        QuickEffectIds: function() {
          return o.QuickEffectIds
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = r(n(1833), t),
        l = r(n(262), t);
      r(n(8704), t), r(n(3213), t);
      let d = u(n(8023)),
        c = u(n(2686));

      function r(e, t) {
        return Object.keys(e).forEach(function(n) {
          "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
              return e[n]
            }
          })
        }), e
      }

      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (s = function(e) {
          return e ? n : t
        })(e)
      }

      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = {
            __proto__: null
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
          } return a.default = e, n && n.set(e, a), a
      }
    },
    3213: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ReducedMotionTypes", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let {
        TRANSFORM_MOVE: a,
        TRANSFORM_SCALE: i,
        TRANSFORM_ROTATE: o,
        TRANSFORM_SKEW: l,
        STYLE_SIZE: d,
        STYLE_FILTER: c,
        STYLE_FONT_VARIATION: r
      } = n(262).ActionTypeConsts, s = {
        [a]: !0,
        [i]: !0,
        [o]: !0,
        [l]: !0,
        [d]: !0,
        [c]: !0,
        [r]: !0
      }
    },
    1833: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = {
        EventAppliesTo: function() {
          return o
        },
        EventBasedOn: function() {
          return l
        },
        EventContinuousMouseAxes: function() {
          return d
        },
        EventLimitAffectedElements: function() {
          return c
        },
        EventTypeConsts: function() {
          return i
        },
        QuickEffectDirectionConsts: function() {
          return s
        },
        QuickEffectIds: function() {
          return r
        }
      };
      for (var a in n) Object.defineProperty(t, a, {
        enumerable: !0,
        get: n[a]
      });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
        },
        o = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
        },
        l = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
        },
        d = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
        },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        r = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    },
    8704: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "InteractionTypeConsts", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
    },
    380: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "normalizeColor", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
      };

      function a(e) {
        let t, a, i, o = 1,
          l = e.replace(/\s/g, "").toLowerCase(),
          d = ("string" == typeof n[l] ? n[l].toLowerCase() : null) || l;
        if (d.startsWith("#")) {
          let e = d.substring(1);
          3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), a = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
        } else if (d.startsWith("rgba")) {
          let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
          t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
        } else if (d.startsWith("rgb")) {
          let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
          t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10)
        } else if (d.startsWith("hsla")) {
          let e, n, l, c = d.match(/hsla\(([^)]+)\)/)[1].split(","),
            r = parseFloat(c[0]),
            s = parseFloat(c[1].replace("%", "")) / 100,
            u = parseFloat(c[2].replace("%", "")) / 100;
          o = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(r / 60 % 2 - 1)),
            E = u - f / 2;
          r >= 0 && r < 60 ? (e = f, n = p, l = 0) : r >= 60 && r < 120 ? (e = p, n = f, l = 0) : r >= 120 && r < 180 ? (e = 0, n = f, l = p) : r >= 180 && r < 240 ? (e = 0, n = p, l = f) : r >= 240 && r < 300 ? (e = p, n = 0, l = f) : (e = f, n = 0, l = p), t = Math.round((e + E) * 255), a = Math.round((n + E) * 255), i = Math.round((l + E) * 255)
        } else if (d.startsWith("hsl")) {
          let e, n, o, l = d.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            r = parseFloat(l[1].replace("%", "")) / 100,
            s = parseFloat(l[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * r,
            f = u * (1 - Math.abs(c / 60 % 2 - 1)),
            p = s - u / 2;
          c >= 0 && c < 60 ? (e = u, n = f, o = 0) : c >= 60 && c < 120 ? (e = f, n = u, o = 0) : c >= 120 && c < 180 ? (e = 0, n = u, o = f) : c >= 180 && c < 240 ? (e = 0, n = f, o = u) : c >= 240 && c < 300 ? (e = f, n = 0, o = u) : (e = u, n = 0, o = f), t = Math.round((e + p) * 255), a = Math.round((n + p) * 255), i = Math.round((o + p) * 255)
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
        return {
          red: t,
          green: a,
          blue: i,
          alpha: o
        }
      }
    },
    9468: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        IX2BrowserSupport: function() {
          return o
        },
        IX2EasingUtils: function() {
          return d
        },
        IX2Easings: function() {
          return l
        },
        IX2ElementsReducer: function() {
          return c
        },
        IX2VanillaPlugins: function() {
          return r
        },
        IX2VanillaUtils: function() {
          return s
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = f(n(2662)),
        l = f(n(8686)),
        d = f(n(3767)),
        c = f(n(5861)),
        r = f(n(1799)),
        s = f(n(4124));

      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (u = function(e) {
          return e ? n : t
        })(e)
      }

      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
          default: e
        };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = {
            __proto__: null
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
          } return a.default = e, n && n.set(e, a), a
      }
    },
    2662: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a, i = {
        ELEMENT_MATCHES: function() {
          return r
        },
        FLEX_PREFIXED: function() {
          return s
        },
        IS_BROWSER_ENV: function() {
          return d
        },
        TRANSFORM_PREFIXED: function() {
          return u
        },
        TRANSFORM_STYLE_PREFIXED: function() {
          return p
        },
        withBrowser: function() {
          return c
        }
      };
      for (var o in i) Object.defineProperty(t, o, {
        enumerable: !0,
        get: i[o]
      });
      let l = (a = n(9777)) && a.__esModule ? a : {
          default: a
        },
        d = "undefined" != typeof window,
        c = (e, t) => d ? e() : t,
        r = c(() => (0, l.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        s = c(() => {
          let e = document.createElement("i"),
            t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
          try {
            let {
              length: n
            } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (e.style.display = n, e.style.display === n) return n
            }
            return ""
          } catch (e) {
            return ""
          }
        }, "flex"),
        u = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              {
                length: n
              } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n
            }
          }
          return "transform"
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle"
    },
    3767: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a, i = {
        applyEasing: function() {
          return u
        },
        createBezierEasing: function() {
          return s
        },
        optimizeFloat: function() {
          return r
        }
      };
      for (var o in i) Object.defineProperty(t, o, {
        enumerable: !0,
        get: i[o]
      });
      let l = function(e, t) {
          if (e && e.__esModule) return e;
          if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
          };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var a = {
              __proto__: null
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set) ? Object.defineProperty(a, o, l) : a[o] = e[o]
            } return a.default = e, n && n.set(e, a), a
        }(n(8686)),
        d = (a = n(1361)) && a.__esModule ? a : {
          default: a
        };

      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
          n = new WeakMap;
        return (c = function(e) {
          return e ? n : t
        })(e)
      }

      function r(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0
      }

      function s(e) {
        return (0, d.default)(...e)
      }

      function u(e, t, n) {
        return 0 === t ? 0 : 1 === t ? 1 : n ? r(t > 0 ? n(t) : t) : r(t > 0 && e && l[e] ? l[e](t) : t)
      }
    },
    8686: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a, i = {
        bounce: function() {
          return Q
        },
        bouncePast: function() {
          return X
        },
        ease: function() {
          return d
        },
        easeIn: function() {
          return c
        },
        easeInOut: function() {
          return s
        },
        easeOut: function() {
          return r
        },
        inBack: function() {
          return w
        },
        inCirc: function() {
          return S
        },
        inCubic: function() {
          return E
        },
        inElastic: function() {
          return P
        },
        inExpo: function() {
          return L
        },
        inOutBack: function() {
          return G
        },
        inOutCirc: function() {
          return M
        },
        inOutCubic: function() {
          return T
        },
        inOutElastic: function() {
          return x
        },
        inOutExpo: function() {
          return h
        },
        inOutQuad: function() {
          return p
        },
        inOutQuart: function() {
          return g
        },
        inOutQuint: function() {
          return v
        },
        inOutSine: function() {
          return N
        },
        inQuad: function() {
          return u
        },
        inQuart: function() {
          return y
        },
        inQuint: function() {
          return m
        },
        inSine: function() {
          return _
        },
        outBack: function() {
          return V
        },
        outBounce: function() {
          return U
        },
        outCirc: function() {
          return C
        },
        outCubic: function() {
          return I
        },
        outElastic: function() {
          return k
        },
        outExpo: function() {
          return A
        },
        outQuad: function() {
          return f
        },
        outQuart: function() {
          return b
        },
        outQuint: function() {
          return O
        },
        outSine: function() {
          return R
        },
        swingFrom: function() {
          return D
        },
        swingFromTo: function() {
          return F
        },
        swingTo: function() {
          return B
        }
      };
      for (var o in i) Object.defineProperty(t, o, {
        enumerable: !0,
        get: i[o]
      });
      let l = (a = n(1361)) && a.__esModule ? a : {
          default: a
        },
        d = (0, l.default)(.25, .1, .25, 1),
        c = (0, l.default)(.42, 0, 1, 1),
        r = (0, l.default)(0, 0, .58, 1),
        s = (0, l.default)(.42, 0, .58, 1);

      function u(e) {
        return Math.pow(e, 2)
      }

      function f(e) {
        return -(Math.pow(e - 1, 2) - 1)
      }

      function p(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
      }

      function E(e) {
        return Math.pow(e, 3)
      }

      function I(e) {
        return Math.pow(e - 1, 3) + 1
      }

      function T(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
      }

      function y(e) {
        return Math.pow(e, 4)
      }

      function b(e) {
        return -(Math.pow(e - 1, 4) - 1)
      }

      function g(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
      }

      function m(e) {
        return Math.pow(e, 5)
      }

      function O(e) {
        return Math.pow(e - 1, 5) + 1
      }

      function v(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
      }

      function _(e) {
        return -Math.cos(Math.PI / 2 * e) + 1
      }

      function R(e) {
        return Math.sin(Math.PI / 2 * e)
      }

      function N(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
      }

      function L(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
      }

      function A(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
      }

      function h(e) {
        return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
      }

      function S(e) {
        return -(Math.sqrt(1 - e * e) - 1)
      }

      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
      }

      function M(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
      }

      function U(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
      }

      function w(e) {
        return e * e * (2.70158 * e - 1.70158)
      }

      function V(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }

      function G(e) {
        let t = 1.70158;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
      }

      function P(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
      }

      function k(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
      }

      function x(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
      }

      function F(e) {
        let t = 1.70158;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
      }

      function D(e) {
        return e * e * (2.70158 * e - 1.70158)
      }

      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }

      function Q(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
      }

      function X(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
      }
    },
    1799: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        clearPlugin: function() {
          return I
        },
        createPluginInstance: function() {
          return p
        },
        getPluginConfig: function() {
          return r
        },
        getPluginDestination: function() {
          return f
        },
        getPluginDuration: function() {
          return u
        },
        getPluginOrigin: function() {
          return s
        },
        isPluginType: function() {
          return d
        },
        renderPlugin: function() {
          return E
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = n(2662),
        l = n(3690);

      function d(e) {
        return l.pluginMethodMap.has(e)
      }
      let c = e => t => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = l.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a
        },
        r = c("getPluginConfig"),
        s = c("getPluginOrigin"),
        u = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        E = c("renderPlugin"),
        I = c("clearPlugin")
    },
    4124: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        cleanupHTMLElement: function() {
          return eY
        },
        clearAllStyles: function() {
          return eQ
        },
        clearObjectCache: function() {
          return eu
        },
        getActionListProgress: function() {
          return e$
        },
        getAffectedElements: function() {
          return em
        },
        getComputedStyle: function() {
          return eO
        },
        getDestinationValues: function() {
          return eS
        },
        getElementId: function() {
          return eI
        },
        getInstanceId: function() {
          return ep
        },
        getInstanceOrigin: function() {
          return eN
        },
        getItemConfigByKey: function() {
          return eh
        },
        getMaxDurationItemIndex: function() {
          return ej
        },
        getNamespacedParameterId: function() {
          return eZ
        },
        getRenderType: function() {
          return eC
        },
        getStyleProp: function() {
          return eM
        },
        mediaQueriesEqual: function() {
          return e0
        },
        observeStore: function() {
          return eb
        },
        reduceListToGroup: function() {
          return eq
        },
        reifyState: function() {
          return eT
        },
        renderHTMLElement: function() {
          return eU
        },
        shallowEqual: function() {
          return s.default
        },
        shouldAllowMediaQuery: function() {
          return eJ
        },
        shouldNamespaceEventParameter: function() {
          return eK
        },
        stringifyTarget: function() {
          return e1
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = I(n(4075)),
        l = I(n(1455)),
        d = I(n(5720)),
        c = n(1185),
        r = n(7087),
        s = I(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);

      function I(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      let {
        BACKGROUND: T,
        TRANSFORM: y,
        TRANSLATE_3D: b,
        SCALE_3D: g,
        ROTATE_X: m,
        ROTATE_Y: O,
        ROTATE_Z: v,
        SKEW: _,
        PRESERVE_3D: R,
        FLEX: N,
        OPACITY: L,
        FILTER: A,
        FONT_VARIATION_SETTINGS: h,
        WIDTH: S,
        HEIGHT: C,
        BACKGROUND_COLOR: M,
        BORDER_COLOR: U,
        COLOR: w,
        CHILDREN: V,
        IMMEDIATE_CHILDREN: G,
        SIBLINGS: P,
        PARENT: k,
        DISPLAY: x,
        WILL_CHANGE: F,
        AUTO: D,
        COMMA_DELIMITER: B,
        COLON_DELIMITER: Q,
        BAR_DELIMITER: X,
        RENDER_TRANSFORM: H,
        RENDER_GENERAL: Y,
        RENDER_STYLE: W,
        RENDER_PLUGIN: z
      } = r.IX2EngineConstants, {
        TRANSFORM_MOVE: j,
        TRANSFORM_SCALE: $,
        TRANSFORM_ROTATE: q,
        TRANSFORM_SKEW: K,
        STYLE_OPACITY: Z,
        STYLE_FILTER: J,
        STYLE_FONT_VARIATION: ee,
        STYLE_SIZE: et,
        STYLE_BACKGROUND_COLOR: en,
        STYLE_BORDER: ea,
        STYLE_TEXT_COLOR: ei,
        GENERAL_DISPLAY: eo,
        OBJECT_VALUE: el
      } = r.ActionTypeConsts, ed = e => e.trim(), ec = Object.freeze({
        [en]: M,
        [ea]: U,
        [ei]: w
      }), er = Object.freeze({
        [E.TRANSFORM_PREFIXED]: y,
        [M]: T,
        [L]: L,
        [A]: A,
        [S]: S,
        [C]: C,
        [h]: h
      }), es = new Map;

      function eu() {
        es.clear()
      }
      let ef = 1;

      function ep() {
        return "i" + ef++
      }
      let eE = 1;

      function eI(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id
        }
        return "e" + eE++
      }

      function eT({
        events: e,
        actionLists: t,
        site: n
      } = {}) {
        let a = (0, l.default)(e, (e, t) => {
            let {
              eventTypeId: n
            } = t;
            return e[n] || (e[n] = {}), e[n][t.id] = t, e
          }, {}),
          i = n && n.mediaQueries,
          o = [];
        return i ? o = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: a,
            mediaQueries: i,
            mediaQueryKeys: o
          }
        }
      }
      let ey = (e, t) => e === t;

      function eb({
        store: e,
        select: t,
        onChange: n,
        comparator: a = ey
      }) {
        let {
          getState: i,
          subscribe: o
        } = e, l = o(function() {
          let o = t(i());
          if (null == o) return void l();
          a(o, d) || n(d = o, e)
        }), d = t(i());
        return l
      }

      function eg(e) {
        let t = typeof e;
        if ("string" === t) return {
          id: e
        };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l
          }
        }
        return {}
      }

      function em({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i
      }) {
        let o, l, d;
        if (!i) throw Error("IX2 missing elementApi");
        let {
          targets: c
        } = e;
        if (Array.isArray(c) && c.length > 0) return c.reduce((e, o) => e.concat(em({
          config: {
            target: o
          },
          event: t,
          eventTarget: n,
          elementRoot: a,
          elementApi: i
        })), []);
        let {
          getValidDocument: s,
          getQuerySelector: u,
          queryDocument: f,
          getChildElements: p,
          getSiblingElements: I,
          matchSelector: T,
          elementContains: y,
          isSiblingNode: b
        } = i, {
          target: g
        } = e;
        if (!g) return [];
        let {
          id: m,
          objectId: O,
          selector: v,
          selectorGuids: _,
          appliesTo: R,
          useEventTarget: N
        } = eg(g);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (R === r.EventAppliesTo.PAGE) {
          let e = s(m);
          return e ? [e] : []
        }
        let L = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
          A = !!(L.id || L.selector),
          h = t && u(eg(t.target));
        if (A ? (o = L.limitAffectedElements, l = h, d = u(L)) : l = d = u({
            id: m,
            selector: v,
            selectorGuids: _
          }), t && N) {
          let e = n && (d || !0 === N) ? [n] : f(h);
          if (d) {
            if (N === k) return f(d).filter(t => e.some(e => y(t, e)));
            if (N === V) return f(d).filter(t => e.some(e => y(e, t)));
            if (N === P) return f(d).filter(t => e.some(e => b(e, t)))
          }
          return e
        }
        return null == l || null == d ? [] : E.IS_BROWSER_ENV && a ? f(d).filter(e => a.contains(e)) : o === V ? f(l, d) : o === G ? p(f(l)).filter(T(d)) : o === P ? I(f(l)).filter(T(d)) : f(d)
      }

      function eO({
        element: e,
        actionItem: t
      }) {
        if (!E.IS_BROWSER_ENV) return {};
        let {
          actionTypeId: n
        } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {}
        }
      }
      let ev = /px/,
        e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e), e || {}),
        eR = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eG[t.type] || t.defaultValue || 0), e), e || {});

      function eN(e, t = {}, n = {}, a, i) {
        let {
          getStyle: l
        } = i, {
          actionTypeId: d
        } = a;
        if ((0, p.isPluginType)(d)) return (0, p.getPluginOrigin)(d)(t[d], a);
        switch (a.actionTypeId) {
          case j:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || ew[a.actionTypeId];
          case J:
            return e_(t[a.actionTypeId], a.config.filters);
          case ee:
            return eR(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return {
              value: (0, o.default)(parseFloat(l(e, L)), 1)
            };
          case et: {
            let t, i = l(e, S),
              d = l(e, C);
            return {
              widthValue: a.config.widthUnit === D ? ev.test(i) ? parseFloat(i) : parseFloat(n.width) : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue: a.config.heightUnit === D ? ev.test(d) ? parseFloat(d) : parseFloat(n.height) : (0, o.default)(parseFloat(d), parseFloat(n.height))
            }
          }
          case en:
          case ea:
          case ei:
            return function({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a
            }) {
              let i = ec[t],
                l = a(e, i),
                d = (function(e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : ""
                })(eF, ex.test(l) ? l : n[i]).split(B);
              return {
                rValue: (0, o.default)(parseInt(d[0], 10), 255),
                gValue: (0, o.default)(parseInt(d[1], 10), 255),
                bValue: (0, o.default)(parseInt(d[2], 10), 255),
                aValue: (0, o.default)(parseFloat(d[3]), 1)
              }
            }({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: l
            });
          case eo:
            return {
              value: (0, o.default)(l(e, x), n.display)
            };
          case el:
            return t[a.actionTypeId] || {
              value: 0
            };
          default:
            return
        }
      }
      let eL = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eh = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, d.default)(n.filters, ({
                type: e
              }) => e === t);
              return e ? e.value : 0
            }
            case ee: {
              let e = (0, d.default)(n.fontVariations, ({
                type: e
              }) => e === t);
              return e ? e.value : 0
            }
            default:
              return n[t]
          }
        };

      function eS({
        element: e,
        actionItem: t,
        elementApi: n
      }) {
        if ((0, p.isPluginType)(t.actionTypeId)) return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case j:
          case $:
          case q:
          case K: {
            let {
              xValue: e,
              yValue: n,
              zValue: a
            } = t.config;
            return {
              xValue: e,
              yValue: n,
              zValue: a
            }
          }
          case et: {
            let {
              getStyle: a,
              setStyle: i,
              getProperty: o
            } = n, {
              widthUnit: l,
              heightUnit: d
            } = t.config, {
              widthValue: c,
              heightValue: r
            } = t.config;
            if (!E.IS_BROWSER_ENV) return {
              widthValue: c,
              heightValue: r
            };
            if (l === D) {
              let t = a(e, S);
              i(e, S, ""), c = o(e, "offsetWidth"), i(e, S, t)
            }
            if (d === D) {
              let t = a(e, C);
              i(e, C, ""), r = o(e, "offsetHeight"), i(e, C, t)
            }
            return {
              widthValue: c,
              heightValue: r
            }
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: l,
              globalSwatchId: d
            } = t.config;
            if (d && d.startsWith("--")) {
              let {
                getStyle: t
              } = n, a = t(e, d), i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha
              }
            }
            return {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: l
            }
          }
          case J:
            return t.config.filters.reduce(eL, {});
          case ee:
            return t.config.fontVariations.reduce(eA, {});
          default: {
            let {
              value: e
            } = t.config;
            return {
              value: e
            }
          }
        }
      }

      function eC(e) {
        return /^TRANSFORM_/.test(e) ? H : /^STYLE_/.test(e) ? W : /^GENERAL_/.test(e) ? Y : /^PLUGIN_/.test(e) ? z : void 0
      }

      function eM(e, t) {
        return e === W ? t.replace("STYLE_", "").toLowerCase() : null
      }

      function eU(e, t, n, a, i, o, d, c, r) {
        switch (c) {
          case H:
            var s = e,
              u = t,
              f = n,
              I = i,
              T = d;
            let y = ek.map(e => {
                let t = ew[e],
                  {
                    xValue: n = t.xValue,
                    yValue: a = t.yValue,
                    zValue: i = t.zValue,
                    xUnit: o = "",
                    yUnit: l = "",
                    zUnit: d = ""
                  } = u[e] || {};
                switch (e) {
                  case j:
                    return `${b}(${n}${o}, ${a}${l}, ${i}${d})`;
                  case $:
                    return `${g}(${n}${o}, ${a}${l}, ${i}${d})`;
                  case q:
                    return `${m}(${n}${o}) ${O}(${a}${l}) ${v}(${i}${d})`;
                  case K:
                    return `${_}(${n}${o}, ${a}${l})`;
                  default:
                    return ""
                }
              }).join(" "),
              {
                setStyle: L
              } = T;
            eD(s, E.TRANSFORM_PREFIXED, T), L(s, E.TRANSFORM_PREFIXED, y),
              function({
                actionTypeId: e
              }, {
                xValue: t,
                yValue: n,
                zValue: a
              }) {
                return e === j && void 0 !== a || e === $ && void 0 !== a || e === q && (void 0 !== t || void 0 !== n)
              }(I, f) && L(s, E.TRANSFORM_STYLE_PREFIXED, R);
            return;
          case W:
            return function(e, t, n, a, i, o) {
              let {
                setStyle: d
              } = o;
              switch (a.actionTypeId) {
                case et: {
                  let {
                    widthUnit: t = "",
                    heightUnit: i = ""
                  } = a.config, {
                    widthValue: l,
                    heightValue: c
                  } = n;
                  void 0 !== l && (t === D && (t = "px"), eD(e, S, o), d(e, S, l + t)), void 0 !== c && (i === D && (i = "px"), eD(e, C, o), d(e, C, c + i));
                  break
                }
                case J:
                  var c = a.config;
                  let r = (0, l.default)(n, (e, t, n) => `${e} ${n}(${t}${eP(n,c)})`, ""),
                    {
                      setStyle: s
                    } = o;
                  eD(e, A, o), s(e, A, r);
                  break;
                case ee:
                  a.config;
                  let u = (0, l.default)(n, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                    {
                      setStyle: f
                    } = o;
                  eD(e, h, o), f(e, h, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ec[a.actionTypeId],
                    i = Math.round(n.rValue),
                    l = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    r = n.aValue;
                  eD(e, t, o), d(e, t, r >= 1 ? `rgb(${i},${l},${c})` : `rgba(${i},${l},${c},${r})`);
                  break
                }
                default: {
                  let {
                    unit: t = ""
                  } = a.config;
                  eD(e, i, o), d(e, i, n.value + t)
                }
              }
            }(e, 0, n, i, o, d);
          case Y:
            var M = e,
              U = i,
              w = d;
            let {
              setStyle: V
            } = w;
            if (U.actionTypeId === eo) {
              let {
                value: e
              } = U.config;
              V(M, x, e === N && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case z: {
            let {
              actionTypeId: e
            } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(r, t, i)
          }
        }
      }
      let ew = {
          [j]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [$]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
          }),
          [q]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
          }),
          [K]: Object.freeze({
            xValue: 0,
            yValue: 0
          })
        },
        eV = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
        }),
        eG = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
        }),
        eP = (e, t) => {
          let n = (0, d.default)(t.filters, ({
            type: t
          }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%"
          }
        },
        ek = Object.keys(ew),
        ex = /^rgb/,
        eF = RegExp("rgba?\\(([^)]+)\\)");

      function eD(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = er[t];
        if (!a) return;
        let {
          getStyle: i,
          setStyle: o
        } = n, l = i(e, F);
        if (!l) return void o(e, F, a);
        let d = l.split(B).map(ed); - 1 === d.indexOf(a) && o(e, F, d.concat(a).join(B))
      }

      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = er[t];
        if (!a) return;
        let {
          getStyle: i,
          setStyle: o
        } = n, l = i(e, F);
        l && -1 !== l.indexOf(a) && o(e, F, l.split(B).map(ed).filter(e => e !== a).join(B))
      }

      function eQ({
        store: e,
        elementApi: t
      }) {
        let {
          ixData: n
        } = e.getState(), {
          events: a = {},
          actionLists: i = {}
        } = n;
        Object.keys(a).forEach(e => {
          let n = a[e],
            {
              config: o
            } = n.action,
            {
              actionListId: l
            } = o,
            d = i[l];
          d && eX({
            actionList: d,
            event: n,
            elementApi: t
          })
        }), Object.keys(i).forEach(e => {
          eX({
            actionList: i[e],
            elementApi: t
          })
        })
      }

      function eX({
        actionList: e = {},
        event: t,
        elementApi: n
      }) {
        let {
          actionItemGroups: a,
          continuousParameterGroups: i
        } = e;
        a && a.forEach(e => {
          eH({
            actionGroup: e,
            event: t,
            elementApi: n
          })
        }), i && i.forEach(e => {
          let {
            continuousActionGroups: a
          } = e;
          a.forEach(e => {
            eH({
              actionGroup: e,
              event: t,
              elementApi: n
            })
          })
        })
      }

      function eH({
        actionGroup: e,
        event: t,
        elementApi: n
      }) {
        let {
          actionItems: a
        } = e;
        a.forEach(e => {
          let a, {
            actionTypeId: i,
            config: o
          } = e;
          a = (0, p.isPluginType)(i) ? t => (0, p.clearPlugin)(i)(t, e) : eW({
            effect: ez,
            actionTypeId: i,
            elementApi: n
          }), em({
            config: o,
            event: t,
            elementApi: n
          }).forEach(a)
        })
      }

      function eY(e, t, n) {
        let {
          setStyle: a,
          getStyle: i
        } = n, {
          actionTypeId: o
        } = t;
        if (o === et) {
          let {
            config: n
          } = t;
          n.widthUnit === D && a(e, S, ""), n.heightUnit === D && a(e, C, "")
        }
        i(e, F) && eW({
          effect: eB,
          actionTypeId: o,
          elementApi: n
        })(e)
      }
      let eW = ({
        effect: e,
        actionTypeId: t,
        elementApi: n
      }) => a => {
        switch (t) {
          case j:
          case $:
          case q:
          case K:
            e(a, E.TRANSFORM_PREFIXED, n);
            break;
          case J:
            e(a, A, n);
            break;
          case ee:
            e(a, h, n);
            break;
          case Z:
            e(a, L, n);
            break;
          case et:
            e(a, S, n), e(a, C, n);
            break;
          case en:
          case ea:
          case ei:
            e(a, ec[t], n);
            break;
          case eo:
            e(a, x, n)
        }
      };

      function ez(e, t, n) {
        let {
          setStyle: a
        } = n;
        eB(e, t, n), a(e, t, ""), t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, "")
      }

      function ej(e) {
        let t = 0,
          n = 0;
        return e.forEach((e, a) => {
          let {
            config: i
          } = e, o = i.delay + i.duration;
          o >= t && (t = o, n = a)
        }), n
      }

      function e$(e, t) {
        let {
          actionItemGroups: n,
          useFirstGroupAsInitialState: a
        } = e, {
          actionItem: i,
          verboseTimeElapsed: o = 0
        } = t, l = 0, d = 0;
        return n.forEach((e, t) => {
          if (a && 0 === t) return;
          let {
            actionItems: n
          } = e, c = n[ej(n)], {
            config: r,
            actionTypeId: s
          } = c;
          i.id === c.id && (d = l + o);
          let u = eC(s) === Y ? 0 : r.duration;
          l += r.delay + u
        }), l > 0 ? (0, u.optimizeFloat)(d / l) : 0
      }

      function eq({
        actionList: e,
        actionItemId: t,
        rawData: n
      }) {
        let {
          actionItemGroups: a,
          continuousParameterGroups: i
        } = e, o = [], l = e => (o.push((0, c.mergeIn)(e, ["config"], {
          delay: 0,
          duration: 0
        })), e.id === t);
        return a && a.some(({
          actionItems: e
        }) => e.some(l)), i && i.some(e => {
          let {
            continuousActionGroups: t
          } = e;
          return t.some(({
            actionItems: e
          }) => e.some(l))
        }), (0, c.setIn)(n, ["actionLists"], {
          [e.id]: {
            id: e.id,
            actionItemGroups: [{
              actionItems: o
            }]
          }
        })
      }

      function eK(e, {
        basedOn: t
      }) {
        return e === r.EventTypeConsts.SCROLLING_IN_VIEW && (t === r.EventBasedOn.ELEMENT || null == t) || e === r.EventTypeConsts.MOUSE_MOVE && t === r.EventBasedOn.ELEMENT
      }

      function eZ(e, t) {
        return e + Q + t
      }

      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t)
      }

      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort())
      }

      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let {
          id: t = "",
          selector: n = "",
          useEventTarget: a = ""
        } = e;
        return t + X + n + X + a
      }
    },
    7164: function(e, t) {
      "use strict";

      function n(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let a = function(e, t) {
        if (n(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0
      }
    },
    5861: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = {
        createElementState: function() {
          return _
        },
        ixElements: function() {
          return v
        },
        mergeActionState: function() {
          return R
        }
      };
      for (var i in a) Object.defineProperty(t, i, {
        enumerable: !0,
        get: a[i]
      });
      let o = n(1185),
        l = n(7087),
        {
          HTML_ELEMENT: d,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: r,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: y
        } = l.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: b,
          IX2_INSTANCE_ADDED: g,
          IX2_ELEMENT_STATE_CHANGED: m
        } = l.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case b:
              return O;
            case g: {
              let {
                elementId: n,
                element: a,
                origin: i,
                actionItem: l,
                refType: d
              } = t.payload, {
                actionTypeId: c
              } = l, r = e;
              return (0, o.getIn)(r, [n, a]) !== a && (r = _(r, a, d, n, l)), R(r, n, c, i, l)
            }
            case m: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o
              } = t.payload;
              return R(e, n, a, i, o)
            }
            default:
              return e
          }
        };

      function _(e, t, n, a, i) {
        let l = n === c ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], {
          id: a,
          ref: t,
          refId: l,
          refType: n
        })
      }

      function R(e, t, n, a, i) {
        let l = function(e) {
          let {
            config: t
          } = e;
          return N.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              l = t[i];
            return null != o && null != l && (e[i] = l), e
          }, {})
        }(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, l)
      }
      let N = [
        [s, E],
        [u, I],
        [f, T],
        [p, y]
      ]
    },
    3965: function() {
      Webflow.require("ix2").init({
        events: {
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889788c37d
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889788c37d
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889788c37d
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889788c37d
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889788c37d
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889788c37d
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-591"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "2905107d-f69c-6a46-d145-dc2bd26489b8",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "2905107d-f69c-6a46-d145-dc2bd26489b8",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x17a9f40006c
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-394"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "2905107d-f69c-6a46-d145-dc2bd26489b8",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "2905107d-f69c-6a46-d145-dc2bd26489b8",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x17a9f40006c
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x180f52f2c4e
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x180f52f2c5a
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x180f536967c
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "2905107d-f69c-6a46-d145-dc2bd26489bf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x180f5369688
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18897c56838
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 1,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18897c56838
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "e187333e-2ad9-ab79-973c-e0111f52c814",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "e187333e-2ad9-ab79-973c-e0111f52c814",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18897d8b0ab
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-35"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "e187333e-2ad9-ab79-973c-e0111f52c814",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "e187333e-2ad9-ab79-973c-e0111f52c814",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18897d8b0ad
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-56"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-58"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-61"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 1,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889b5844b8
          },
          "e-81": {
            id: "e-81",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-82"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-83": {
            id: "e-83",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-84"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-84": {
            id: "e-84",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-85": {
            id: "e-85",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-86"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-85"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-87": {
            id: "e-87",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-88"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 1,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1889ba4c86a
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-97"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-99": {
            id: "e-99",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-98"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-101"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-101": {
            id: "e-101",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-108": {
            id: "e-108",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-109"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-109": {
            id: "e-109",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-108"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 1,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ea5261d4c
          },
          "e-110": {
            id: "e-110",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-37",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-111"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eade01c29
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-38",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-38-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eae1c3f06
          },
          "e-113": {
            id: "e-113",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-38",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-38-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eae4a8edb
          },
          "e-117": {
            id: "e-117",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-118"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|edff74fc-d13d-d549-57b3-df3dc60aa974",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|edff74fc-d13d-d549-57b3-df3dc60aa974",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaea3d79b
          },
          "e-118": {
            id: "e-118",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-117"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|edff74fc-d13d-d549-57b3-df3dc60aa974",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|edff74fc-d13d-d549-57b3-df3dc60aa974",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaea3d79c
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-122"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|b646deb2-51d9-9d4c-6ee6-258703b57008",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|b646deb2-51d9-9d4c-6ee6-258703b57008",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaea6ed7c
          },
          "e-122": {
            id: "e-122",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-121"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|b646deb2-51d9-9d4c-6ee6-258703b57008",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|b646deb2-51d9-9d4c-6ee6-258703b57008",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaea6ed7c
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-124"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|a715edfa-397b-655a-fca0-fd1307fe1635",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|a715edfa-397b-655a-fca0-fd1307fe1635",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaeabeef8
          },
          "e-124": {
            id: "e-124",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-123"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|a715edfa-397b-655a-fca0-fd1307fe1635",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|a715edfa-397b-655a-fca0-fd1307fe1635",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaeabeef9
          },
          "e-125": {
            id: "e-125",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-126"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|4fb98e3c-218b-4811-67fa-973cc0f94431",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|4fb98e3c-218b-4811-67fa-973cc0f94431",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaeaed067
          },
          "e-126": {
            id: "e-126",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-125"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|4fb98e3c-218b-4811-67fa-973cc0f94431",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|4fb98e3c-218b-4811-67fa-973cc0f94431",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaeaed068
          },
          "e-127": {
            id: "e-127",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-128"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "660d9b2931fa00f631bce95d|328efde5-06c0-19ab-35a8-ced2f2f3b228",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|328efde5-06c0-19ab-35a8-ced2f2f3b228",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaeaf1040
          },
          "e-128": {
            id: "e-128",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-127"
              }
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "660d9b2931fa00f631bce95d|328efde5-06c0-19ab-35a8-ced2f2f3b228",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|328efde5-06c0-19ab-35a8-ced2f2f3b228",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaeaf1040
          },
          "e-144": {
            id: "e-144",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-145"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaf158eaf
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaf158eb0
          },
          "e-158": {
            id: "e-158",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-159"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|b1043fb3-7c73-9134-8242-0f4a54531b44",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|b1043fb3-7c73-9134-8242-0f4a54531b44",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaf3c4f84
          },
          "e-159": {
            id: "e-159",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-158"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|b1043fb3-7c73-9134-8242-0f4a54531b44",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|b1043fb3-7c73-9134-8242-0f4a54531b44",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eaf3c4f84
          },
          "e-160": {
            id: "e-160",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-52",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|730c4d09-d7ae-dc91-1dce-5ef7ec351225",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|730c4d09-d7ae-dc91-1dce-5ef7ec351225",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-52-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eaf6df070
          },
          "e-164": {
            id: "e-164",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-52",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|45e3f421-2803-ec0c-817b-f85885188428",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|45e3f421-2803-ec0c-817b-f85885188428",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-52-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eb013ff9a
          },
          "e-165": {
            id: "e-165",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-166"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb01f177c
          },
          "e-166": {
            id: "e-166",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-165"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb01f177d
          },
          "e-167": {
            id: "e-167",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-52",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|350eb038-782e-d1d5-8718-cc28b79e01db",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|350eb038-782e-d1d5-8718-cc28b79e01db",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-52-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eb25416d2
          },
          "e-168": {
            id: "e-168",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-52",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|aceeb74b-b023-b566-b671-204a78720848",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|aceeb74b-b023-b566-b671-204a78720848",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-52-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eb2578773
          },
          "e-170": {
            id: "e-170",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-171"
              }
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hero_background-image-wrapper",
              originalId: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".hero_background-image-wrapper",
              originalId: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb27dcf82
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-170"
              }
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hero_background-image-wrapper",
              originalId: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".hero_background-image-wrapper",
              originalId: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb27dcf83
          },
          "e-172": {
            id: "e-172",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-173"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb2965466
          },
          "e-173": {
            id: "e-173",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-172"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|af7a646c-ed38-e2d7-baa8-8da6a8057a17",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb2965466
          },
          "e-184": {
            id: "e-184",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-185"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa88",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa88",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb30674d2
          },
          "e-185": {
            id: "e-185",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-184"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa88",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa88",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb30674d2
          },
          "e-192": {
            id: "e-192",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-59",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-193"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa97",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa97",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb306d26e
          },
          "e-193": {
            id: "e-193",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-60",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-192"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa97",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa97",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb306d26e
          },
          "e-204": {
            id: "e-204",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-205"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-205": {
            id: "e-205",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-204"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-206": {
            id: "e-206",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-207"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-207": {
            id: "e-207",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-206"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-208": {
            id: "e-208",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-209"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-209": {
            id: "e-209",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-208"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-210": {
            id: "e-210",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-211"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-211": {
            id: "e-211",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-73",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-210"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 1,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb48027c3
          },
          "e-230": {
            id: "e-230",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-231"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|13ba1906-b8a5-1891-0385-aff9ea835a45",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|13ba1906-b8a5-1891-0385-aff9ea835a45",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb873928e
          },
          "e-231": {
            id: "e-231",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-230"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|13ba1906-b8a5-1891-0385-aff9ea835a45",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|13ba1906-b8a5-1891-0385-aff9ea835a45",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb873928e
          },
          "e-270": {
            id: "e-270",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-271"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba58",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba58",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-271": {
            id: "e-271",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-270"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba58",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba58",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-274": {
            id: "e-274",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-275"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba71",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba71",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-275": {
            id: "e-275",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-274"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba71",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba71",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-276": {
            id: "e-276",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-277"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba86",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba86",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-277": {
            id: "e-277",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-276"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba86",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba86",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-278": {
            id: "e-278",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-279"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba9e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba9e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-279": {
            id: "e-279",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-278"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba9e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|495f4982-6b34-309d-8f19-c9903fdcba9e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb8cab567
          },
          "e-309": {
            id: "e-309",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-310"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb97ca3d7
          },
          "e-310": {
            id: "e-310",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-55",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-309"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb97ca3d9
          },
          "e-314": {
            id: "e-314",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-45",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa4a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa4a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-45-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eb99f0b38
          },
          "e-315": {
            id: "e-315",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-316"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-316": {
            id: "e-316",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-315"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-319": {
            id: "e-319",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-320"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-320": {
            id: "e-320",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-319"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-321": {
            id: "e-321",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-322"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-322": {
            id: "e-322",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-321"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-323": {
            id: "e-323",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-324"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-324": {
            id: "e-324",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-323"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb99f0b38
          },
          "e-325": {
            id: "e-325",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-326"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a07975
          },
          "e-326": {
            id: "e-326",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-325"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a07975
          },
          "e-328": {
            id: "e-328",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-45",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac22",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac22",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-45-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eb9a1b6ac
          },
          "e-329": {
            id: "e-329",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-330"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac28",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac28",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-330": {
            id: "e-330",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-329"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac28",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac28",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-331": {
            id: "e-331",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-332"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac29",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac29",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-332": {
            id: "e-332",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-331"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac29",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac29",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-333": {
            id: "e-333",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-334"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac31",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac31",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-334": {
            id: "e-334",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-333"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac31",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac31",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-337": {
            id: "e-337",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-338"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac46",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac46",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-338": {
            id: "e-338",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-337"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac46",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|084adcdb-a68c-8bcd-0018-1f06b712ac46",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a1b6ac
          },
          "e-339": {
            id: "e-339",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-340"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|62c96bad-e3ef-8774-2ec2-e9d2dd60d73f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|62c96bad-e3ef-8774-2ec2-e9d2dd60d73f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a30199
          },
          "e-340": {
            id: "e-340",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-339"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|62c96bad-e3ef-8774-2ec2-e9d2dd60d73f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|62c96bad-e3ef-8774-2ec2-e9d2dd60d73f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a30199
          },
          "e-342": {
            id: "e-342",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-45",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5730b",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5730b",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-45-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18eb9a54f83
          },
          "e-343": {
            id: "e-343",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-344"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57311",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57311",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-344": {
            id: "e-344",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-343"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57311",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57311",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-345": {
            id: "e-345",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-346"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57312",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57312",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-346": {
            id: "e-346",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-345"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57312",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b57312",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-347": {
            id: "e-347",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-348"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5731a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5731a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-348": {
            id: "e-348",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-347"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5731a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5731a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-351": {
            id: "e-351",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-352"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5732f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5732f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-352": {
            id: "e-352",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-351"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5732f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|ee73fc1e-7a3e-beb0-053d-5a4fd9b5732f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a54f83
          },
          "e-357": {
            id: "e-357",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-358"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|afcfe893-be78-68f3-6ae4-bab5ee5a7a93",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|afcfe893-be78-68f3-6ae4-bab5ee5a7a93",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a7d49f
          },
          "e-358": {
            id: "e-358",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-357"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|afcfe893-be78-68f3-6ae4-bab5ee5a7a93",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|afcfe893-be78-68f3-6ae4-bab5ee5a7a93",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eb9a7d49f
          },
          "e-367": {
            id: "e-367",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-368"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|730c4d09-d7ae-dc91-1dce-5ef7ec35122e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|730c4d09-d7ae-dc91-1dce-5ef7ec35122e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eba170ea1
          },
          "e-368": {
            id: "e-368",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-367"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d|730c4d09-d7ae-dc91-1dce-5ef7ec35122e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|730c4d09-d7ae-dc91-1dce-5ef7ec35122e",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18eba170ea3
          },
          "e-369": {
            id: "e-369",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-76",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-370"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|cb2f2c73-499b-606d-884e-479bdefc48b3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|cb2f2c73-499b-606d-884e-479bdefc48b3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebd7e8c41
          },
          "e-370": {
            id: "e-370",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-369"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|cb2f2c73-499b-606d-884e-479bdefc48b3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|cb2f2c73-499b-606d-884e-479bdefc48b3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebd7e8c42
          },
          "e-371": {
            id: "e-371",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-76",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-372"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebdf07afe
          },
          "e-372": {
            id: "e-372",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-371"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebdf07afe
          },
          "e-373": {
            id: "e-373",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-76",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-374"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|43f6054e-bac9-8637-d440-93eaa50d7ddf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|43f6054e-bac9-8637-d440-93eaa50d7ddf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebdf15472
          },
          "e-374": {
            id: "e-374",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-373"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|43f6054e-bac9-8637-d440-93eaa50d7ddf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|43f6054e-bac9-8637-d440-93eaa50d7ddf",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebdf15472
          },
          "e-375": {
            id: "e-375",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-376"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebdffa0f0
          },
          "e-376": {
            id: "e-376",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-375"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ebdffa0f1
          },
          "e-379": {
            id: "e-379",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-380"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-380": {
            id: "e-380",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-379"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfab",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-381": {
            id: "e-381",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-382"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-382": {
            id: "e-382",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-381"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-383": {
            id: "e-383",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-384"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-384": {
            id: "e-384",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-383"
              }
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|2e0f0aeb-be91-e1f4-a5ca-2907b20bcfb6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-385": {
            id: "e-385",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-386"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-386": {
            id: "e-386",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-81",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-385"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 1,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-387": {
            id: "e-387",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-45",
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa4a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa4a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: [{
              continuousParameterGroupId: "a-45-p",
              smoothing: 50,
              startsEntering: !0,
              addStartOffset: !1,
              addOffsetValue: 50,
              startsExiting: !1,
              addEndOffset: !1,
              endOffsetValue: 50
            }],
            createdOn: 0x18ec6c2c313
          },
          "e-388": {
            id: "e-388",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-389"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 50,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-389": {
            id: "e-389",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-388"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa50",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-390": {
            id: "e-390",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-391"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-391": {
            id: "e-391",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-390"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa5a",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-392": {
            id: "e-392",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-393"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-393": {
            id: "e-393",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-392"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa62",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-394": {
            id: "e-394",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-395"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-395": {
            id: "e-395",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-394"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|db2ffa31-8f79-9074-8a55-9c6f5bcdfa6f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-396": {
            id: "e-396",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-397"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-397": {
            id: "e-397",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-396"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|5168bcbe-55fa-6445-5140-b0315799e78f",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-398": {
            id: "e-398",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-76",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-399"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-399": {
            id: "e-399",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-398"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "661635f45cdba701286edbe4|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "661635f45cdba701286edbe4|9a099518-2d84-79f0-5f44-36c998e51108",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c2c313
          },
          "e-400": {
            id: "e-400",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-401"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|39e528f8-ea41-5881-382f-d189830e3547",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|39e528f8-ea41-5881-382f-d189830e3547",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c8a533
          },
          "e-401": {
            id: "e-401",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-400"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481f4ef840f10719c1be987|39e528f8-ea41-5881-382f-d189830e3547",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481f4ef840f10719c1be987|39e528f8-ea41-5881-382f-d189830e3547",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c8a533
          },
          "e-402": {
            id: "e-402",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-403"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|47658309-1b2e-13c4-dca8-3084a0a7f0c6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|47658309-1b2e-13c4-dca8-3084a0a7f0c6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c8fe31
          },
          "e-403": {
            id: "e-403",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-402"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "66118941609bdb50ceca9928|47658309-1b2e-13c4-dca8-3084a0a7f0c6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "66118941609bdb50ceca9928|47658309-1b2e-13c4-dca8-3084a0a7f0c6",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c8fe31
          },
          "e-404": {
            id: "e-404",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-405"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|834495e4-1d68-34cd-1c32-9ff539457110",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|834495e4-1d68-34cd-1c32-9ff539457110",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c9a9a1
          },
          "e-405": {
            id: "e-405",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-404"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6480e79e33c6b584f4521695|834495e4-1d68-34cd-1c32-9ff539457110",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6480e79e33c6b584f4521695|834495e4-1d68-34cd-1c32-9ff539457110",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6c9a9a1
          },
          "e-406": {
            id: "e-406",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-407"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|1267dd4b-b185-edf3-e5bd-61a62838b6d2",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|1267dd4b-b185-edf3-e5bd-61a62838b6d2",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6ca2436
          },
          "e-407": {
            id: "e-407",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-406"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "6481e1581b0674b9756561ea|1267dd4b-b185-edf3-e5bd-61a62838b6d2",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "6481e1581b0674b9756561ea|1267dd4b-b185-edf3-e5bd-61a62838b6d2",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec6ca2436
          },
          "e-408": {
            id: "e-408",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-83",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-409"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec74e03de
          },
          "e-409": {
            id: "e-409",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-82",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-408"
              }
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d",
              appliesTo: "PAGE",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ec74e03e0
          },
          "e-410": {
            id: "e-410",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-411"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|8072b79e-40db-6c10-2a61-ac42208527c3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|8072b79e-40db-6c10-2a61-ac42208527c3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5eda039
          },
          "e-411": {
            id: "e-411",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-410"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|8072b79e-40db-6c10-2a61-ac42208527c3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|8072b79e-40db-6c10-2a61-ac42208527c3",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5eda03b
          },
          "e-412": {
            id: "e-412",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-413"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|a9c04822-506e-f741-044a-22f3eb4b91db",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|a9c04822-506e-f741-044a-22f3eb4b91db",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f0cb05
          },
          "e-413": {
            id: "e-413",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-412"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|a9c04822-506e-f741-044a-22f3eb4b91db",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|a9c04822-506e-f741-044a-22f3eb4b91db",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f0cb06
          },
          "e-414": {
            id: "e-414",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-415"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|3fc33993-b8bc-1567-a430-0c3ca7b2547c",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|3fc33993-b8bc-1567-a430-0c3ca7b2547c",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f15b37
          },
          "e-415": {
            id: "e-415",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-414"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|3fc33993-b8bc-1567-a430-0c3ca7b2547c",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|3fc33993-b8bc-1567-a430-0c3ca7b2547c",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f15b39
          },
          "e-416": {
            id: "e-416",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-417"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|70b3335e-3ea9-425e-51e7-998610e064ed",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|70b3335e-3ea9-425e-51e7-998610e064ed",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f1b841
          },
          "e-417": {
            id: "e-417",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-416"
              }
            },
            mediaQueries: ["main"],
            target: {
              id: "660d9b2931fa00f631bce95d|70b3335e-3ea9-425e-51e7-998610e064ed",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            },
            targets: [{
              id: "660d9b2931fa00f631bce95d|70b3335e-3ea9-425e-51e7-998610e064ed",
              appliesTo: "ELEMENT",
              styleBlockIds: []
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f1b863
          },
          "e-418": {
            id: "e-418",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-74",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-419"
              }
            },
            mediaQueries: ["main"],
            target: {
              selector: ".latest_case-wrapper",
              originalId: "660d9b2931fa00f631bce95d|4cb50d50-9a9f-08a9-3eaa-4f1ed0988a92",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".latest_case-wrapper",
              originalId: "660d9b2931fa00f631bce95d|4cb50d50-9a9f-08a9-3eaa-4f1ed0988a92",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f24cc5
          },
          "e-419": {
            id: "e-419",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-75",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-418"
              }
            },
            mediaQueries: ["main"],
            target: {
              selector: ".latest_case-wrapper",
              originalId: "660d9b2931fa00f631bce95d|4cb50d50-9a9f-08a9-3eaa-4f1ed0988a92",
              appliesTo: "CLASS"
            },
            targets: [{
              selector: ".latest_case-wrapper",
              originalId: "660d9b2931fa00f631bce95d|4cb50d50-9a9f-08a9-3eaa-4f1ed0988a92",
              appliesTo: "CLASS"
            }],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x18ee5f24ceb
          }
        },
        actionLists: {
          a: {
            id: "a",
            title: "Navbar 1 menu [Close]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 200,
                  target: {},
                  widthValue: 0,
                  widthUnit: "px",
                  heightUnit: "PX",
                  locked: !1
                }
              }, {
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {},
                  yValue: -8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {},
                  yValue: 8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {},
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {},
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f3042c6
          },
          "a-2": {
            id: "a-2",
            title: "Navbar 1 menu [Open]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-2-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {},
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-2-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 600,
                  target: {},
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-2-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {},
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-2-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {},
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-2-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 400,
                  easing: "inOutQuint",
                  duration: 200,
                  target: {},
                  widthValue: 24,
                  widthUnit: "px",
                  heightUnit: "PX",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17a9f363110
          },
          "a-3": {
            id: "a-3",
            title: "Navbar 1 dropdown [Open] [Desktop]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-3-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-3-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-3-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {},
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-3-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {},
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-3-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3932faf
          },
          "a-4": {
            id: "a-4",
            title: "Navbar 1 dropdown [Close] [Desktop]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-4-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {},
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-4-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }, {
              actionItems: [{
                id: "a-4-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 0,
                  target: {},
                  yValue: 4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3932faf
          },
          "a-5": {
            id: "a-5",
            title: "Navbar 1 dropdown [Open] [Tablet]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-5-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {},
                  heightValue: 0,
                  widthUnit: "px",
                  heightUnit: "px",
                  locked: !1
                }
              }]
            }, {
              actionItems: [{
                id: "a-5-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {},
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1
                }
              }, {
                id: "a-5-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3932faf
          },
          "a-6": {
            id: "a-6",
            title: "Navbar 1 dropdown [Close] [Tablet]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-6-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {},
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1
                }
              }, {
                id: "a-6-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3932faf
          },
          "a-14": {
            id: "a-14",
            title: "Navbar 2 menu [Open]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-14-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  yValue: 8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-14-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  yValue: -8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-14-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-14-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-14-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-middle",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692d"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa29a5e06
          },
          "a-15": {
            id: "a-15",
            title: "Navbar 2 menu [Close]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-15-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-15-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-15-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-15-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-15-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-middle",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692d"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa2a71292
          },
          "a-16": {
            id: "a-16",
            title: "Navbar 2 dropdown [Open] [Desktop]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-16-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-16-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-16-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-16-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-16-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3932faf
          },
          "a-17": {
            id: "a-17",
            title: "Navbar 2 dropdown [Close] [Desktop]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-17-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-17-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }, {
              actionItems: [{
                id: "a-17-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  yValue: 4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3932faf
          },
          "a-18": {
            id: "a-18",
            title: "Navbar 2 dropdown [Open] [Tablet]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-18-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  heightValue: 0,
                  widthUnit: "px",
                  heightUnit: "px",
                  locked: !1
                }
              }]
            }, {
              actionItems: [{
                id: "a-18-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1
                }
              }, {
                id: "a-18-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 180,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa3932faf
          },
          "a-19": {
            id: "a-19",
            title: "Navbar 2 dropdown [Close] [Tablet]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-19-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_dropdown-list",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f46927"]
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1
                }
              }, {
                id: "a-19-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 300,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".dropdown-icon",
                    selectorGuids: ["0b2c47c8-c526-43a8-af6d-7583e921d2c1"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa3932faf
          },
          "a-21": {
            id: "a-21",
            title: "Menu Down",
            actionItemGroups: [{
              actionItems: [{
                id: "a-21-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 80,
                  target: {
                    id: "2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-21-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 250,
                  target: {
                    id: "2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-20": {
            id: "a-20",
            title: "Menu Up",
            actionItemGroups: [{
              actionItems: [{
                id: "a-20-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-20-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-22": {
            id: "a-22",
            title: "send an email tooltip",
            actionItemGroups: [{
              actionItems: [{
                id: "a-22-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 100,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".text-block-3",
                    selectorGuids: ["ba6d5bd5-aa66-a8a8-261e-33f53f46c024"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-22-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 10,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".text-block-3",
                    selectorGuids: ["ba6d5bd5-aa66-a8a8-261e-33f53f46c024"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897d8def7
          },
          "a-23": {
            id: "a-23",
            title: "send an email tooltip 2",
            actionItemGroups: [{
              actionItems: [{
                id: "a-23-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 100,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".text-block-3",
                    selectorGuids: ["ba6d5bd5-aa66-a8a8-261e-33f53f46c024"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-23-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".text-block-3",
                    selectorGuids: ["ba6d5bd5-aa66-a8a8-261e-33f53f46c024"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897d8def7
          },
          "a-28": {
            id: "a-28",
            title: "Menu Down 2",
            actionItemGroups: [{
              actionItems: [{
                id: "a-28-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 80,
                  target: {
                    id: "6481e1581b0674b9756561ea|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-28-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 250,
                  target: {
                    id: "6481e1581b0674b9756561ea|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-29": {
            id: "a-29",
            title: "Menu Up 2",
            actionItemGroups: [{
              actionItems: [{
                id: "a-29-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "6481e1581b0674b9756561ea|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-29-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "6481e1581b0674b9756561ea|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-30": {
            id: "a-30",
            title: "Menu Down 3",
            actionItemGroups: [{
              actionItems: [{
                id: "a-30-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 80,
                  target: {
                    id: "6481f4ef840f10719c1be987|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-30-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 250,
                  target: {
                    id: "6481f4ef840f10719c1be987|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-31": {
            id: "a-31",
            title: "Menu Up 3",
            actionItemGroups: [{
              actionItems: [{
                id: "a-31-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "6481f4ef840f10719c1be987|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-31-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "6481f4ef840f10719c1be987|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-35": {
            id: "a-35",
            title: "Menu Down 4",
            actionItemGroups: [{
              actionItems: [{
                id: "a-35-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 80,
                  target: {
                    id: "660d9b2931fa00f631bce95d|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-35-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 250,
                  target: {
                    id: "660d9b2931fa00f631bce95d|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-36": {
            id: "a-36",
            title: "Menu Up 4",
            actionItemGroups: [{
              actionItems: [{
                id: "a-36-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "660d9b2931fa00f631bce95d|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-36-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "660d9b2931fa00f631bce95d|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-37": {
            id: "a-37",
            title: "Hero Background [page load]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-37-n-21",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero_color-filter",
                    selectorGuids: ["6d084a6c-b9d9-0b3b-972b-7e0883471ad0"]
                  },
                  yValue: 5,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad44"
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-37-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad43"
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-37-n-28",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad43"
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-18",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".hero_subtitle-wrapper",
                    selectorGuids: ["5273279c-454a-c811-7c08-590dea58b6f8"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-37-n-26",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|bd0ef9be-b301-3c2b-910a-fcffc5373cfd"
                  },
                  yValue: 2.5,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-23",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad45"
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-37-n-24",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  yValue: -7,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-30",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".navbar_menu-wrapper",
                    selectorGuids: ["e9b8f060-ac1f-7d1e-fecd-8ff0775fabf0"]
                  },
                  yValue: -6,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-32",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-37-n-34",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  yValue: 1,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-36",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".color-filter",
                    selectorGuids: ["15ff95b3-194e-9468-e109-d5e1ec133fd3"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-37-n-38",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad47"
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-37-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1750,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad44"
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-37-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 750,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad45"
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-37-n-39",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad47"
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-37-n-25",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-22",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad47"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-12",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad43"
                  },
                  value: .2,
                  unit: ""
                }
              }, {
                id: "a-37-n-27",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|bd0ef9be-b301-3c2b-910a-fcffc5373cfd"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-29",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad43"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-31",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 900,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".navbar_menu-wrapper",
                    selectorGuids: ["e9b8f060-ac1f-7d1e-fecd-8ff0775fabf0"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-37-n-17",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1100,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".hero_subtitle-wrapper",
                    selectorGuids: ["5273279c-454a-c811-7c08-590dea58b6f8"]
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-37-n-37",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1100,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".color-filter",
                    selectorGuids: ["15ff95b3-194e-9468-e109-d5e1ec133fd3"]
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-37-n-33",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 1500,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-37-n-35",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 1500,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eade03585
          },
          "a-38": {
            id: "a-38",
            title: "Color Overlay [page scroll]",
            continuousParameterGroups: [{
              id: "a-38-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 0,
                actionItems: [{
                  id: "a-38-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      selector: ".hero_color-filter",
                      selectorGuids: ["6d084a6c-b9d9-0b3b-972b-7e0883471ad0"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-38-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad43"
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "rem",
                    zUnit: "PX"
                  }
                }]
              }, {
                keyframe: 7,
                actionItems: [{
                  id: "a-38-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".hero_color-filter",
                      selectorGuids: ["6d084a6c-b9d9-0b3b-972b-7e0883471ad0"]
                    },
                    xValue: 2.5,
                    yValue: 2.5,
                    locked: !0
                  }
                }, {
                  id: "a-38-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "660d9b2931fa00f631bce95d|36fb146c-0c52-2d35-0ad6-e8137e3aad43"
                    },
                    yValue: -6,
                    xUnit: "PX",
                    yUnit: "rem",
                    zUnit: "PX"
                  }
                }]
              }]
            }],
            createdOn: 0x18eae1c52df
          },
          "a-48": {
            id: "a-48",
            title: "specialise [scroll in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-48-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".specialise_list-wrapper",
                    selectorGuids: ["4f961933-964a-503c-b852-6d8a30858c4c"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-48-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1300,
                  target: {
                    selector: ".specialise_list-wrapper",
                    selectorGuids: ["4f961933-964a-503c-b852-6d8a30858c4c"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eaf18c6fa
          },
          "a-49": {
            id: "a-49",
            title: "Specialise [scroll out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-49-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".specialise_list-wrapper",
                    selectorGuids: ["4f961933-964a-503c-b852-6d8a30858c4c"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eaf1990c8
          },
          "a-43": {
            id: "a-43",
            title: "Specialise List [Hover In]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-43-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".specialise_list-item",
                    selectorGuids: ["1028b786-eace-8aea-0324-6ac78b624bb1"]
                  },
                  xValue: 0,
                  xUnit: "rem",
                  yUnit: "PX",
                  zUnit: "PX"
                }
              }, {
                id: "a-43-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".specialise_list-item",
                    selectorGuids: ["1028b786-eace-8aea-0324-6ac78b624bb1"]
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1
                }
              }]
            }, {
              actionItems: [{
                id: "a-43-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".specialise_list-item",
                    selectorGuids: ["1028b786-eace-8aea-0324-6ac78b624bb1"]
                  },
                  xValue: -1,
                  xUnit: "rem",
                  yUnit: "PX",
                  zUnit: "PX"
                }
              }, {
                id: "a-43-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".specialise_list-item",
                    selectorGuids: ["1028b786-eace-8aea-0324-6ac78b624bb1"]
                  },
                  globalSwatchId: "",
                  rValue: 249,
                  bValue: 217,
                  gValue: 218,
                  aValue: 1
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eaea701ce
          },
          "a-44": {
            id: "a-44",
            title: "Specialise List [Hover Out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-44-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    selector: ".specialise_list-item",
                    selectorGuids: ["1028b786-eace-8aea-0324-6ac78b624bb1"]
                  },
                  xValue: 0,
                  xUnit: "rem",
                  yUnit: "PX",
                  zUnit: "PX"
                }
              }, {
                id: "a-44-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|328efde5-06c0-19ab-35a8-ced2f2f3b228"
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eaea701ce
          },
          "a-46": {
            id: "a-46",
            title: "Cards [Scroll in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-46-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7"
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-46-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1300,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7"
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eaf15de7b
          },
          "a-47": {
            id: "a-47",
            title: "Cards [scroll out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-47-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|02bd17be-8196-1642-b164-4c1c4b4fade7"
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eaf16db45
          },
          "a-50": {
            id: "a-50",
            title: "logos [scroll-in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-50-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".logo-component-wrapper",
                    selectorGuids: ["4087ab85-a920-40b8-f56b-a0f9acd4e438"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-50-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1300,
                  target: {
                    selector: ".logo-component-wrapper",
                    selectorGuids: ["4087ab85-a920-40b8-f56b-a0f9acd4e438"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eaf1a6f73
          },
          "a-51": {
            id: "a-51",
            title: "logos [scroll out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-51-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    selector: ".logo-component-wrapper",
                    selectorGuids: ["4087ab85-a920-40b8-f56b-a0f9acd4e438"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eaf1b2352
          },
          "a-52": {
            id: "a-52",
            title: "Box Scroll [scroll in]",
            continuousParameterGroups: [{
              id: "a-52-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 10,
                actionItems: [{
                  id: "a-52-n-13",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".padding-section-latest",
                      selectorGuids: ["ad1fd738-60f5-c0d9-2a07-dc080b40b635"]
                    },
                    globalSwatchId: "",
                    rValue: 26,
                    bValue: 26,
                    gValue: 26,
                    aValue: 1
                  }
                }]
              }, {
                keyframe: 23,
                actionItems: [{
                  id: "a-52-n-3",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".about_padding-section",
                      selectorGuids: ["bfeae02f-6be2-2cd7-e6aa-0ce881597ca7"]
                    },
                    globalSwatchId: "",
                    rValue: 26,
                    bValue: 26,
                    gValue: 26,
                    aValue: 1
                  }
                }, {
                  id: "a-52-n-7",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".specialise_padding-section",
                      selectorGuids: ["a96c5cf7-bab8-34f4-5581-e8da2cf1d75b"]
                    },
                    globalSwatchId: "",
                    rValue: 26,
                    bValue: 26,
                    gValue: 26,
                    aValue: 1
                  }
                }]
              }, {
                keyframe: 24,
                actionItems: [{
                  id: "a-52-n-14",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".padding-section-latest",
                      selectorGuids: ["ad1fd738-60f5-c0d9-2a07-dc080b40b635"]
                    },
                    globalSwatchId: "",
                    rValue: 29,
                    bValue: 29,
                    gValue: 29,
                    aValue: 1
                  }
                }]
              }, {
                keyframe: 37,
                actionItems: [{
                  id: "a-52-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".about_padding-section",
                      selectorGuids: ["bfeae02f-6be2-2cd7-e6aa-0ce881597ca7"]
                    },
                    globalSwatchId: "",
                    rValue: 29,
                    bValue: 29,
                    gValue: 29,
                    aValue: 1
                  }
                }, {
                  id: "a-52-n-8",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".specialise_padding-section",
                      selectorGuids: ["a96c5cf7-bab8-34f4-5581-e8da2cf1d75b"]
                    },
                    globalSwatchId: "",
                    rValue: 29,
                    bValue: 29,
                    gValue: 29,
                    aValue: 1
                  }
                }]
              }]
            }],
            createdOn: 0x18eaf6d7ac6
          },
          "a-54": {
            id: "a-54",
            title: "Message Tab [scroll in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-54-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-54-n-2",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 600,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  globalSwatchId: "",
                  rValue: 29,
                  bValue: 29,
                  gValue: 29,
                  aValue: 1
                }
              }, {
                id: "a-54-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eb01f36af
          },
          "a-55": {
            id: "a-55",
            title: "Message Tab [scroll out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-55-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1300,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-55-n-3",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  globalSwatchId: "",
                  rValue: 29,
                  bValue: 29,
                  gValue: 29,
                  aValue: 1
                }
              }, {
                id: "a-55-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-55-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 700,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  yValue: -1.9,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }, {
                id: "a-55-n-4",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  globalSwatchId: "",
                  rValue: 43,
                  bValue: 43,
                  gValue: 43,
                  aValue: 1
                }
              }, {
                id: "a-55-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "5a5c3428-c239-86a4-05d7-c37ecb1cfa8a"
                  },
                  yValue: -6,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eb01f36af
          },
          "a-57": {
            id: "a-57",
            title: "Footer CTA [Hover in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-57-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".hero_background-image.is-footer",
                    selectorGuids: ["253cf1c7-1f5c-4319-304f-6c63fc8771d9", "0e1d31e4-1507-a895-1058-c46d6da635ae"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }, {
                id: "a-57-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".footer-hero-2_color-filter",
                    selectorGuids: ["2c4ac720-20ad-81b1-518b-8215bdae4f4c"]
                  },
                  xValue: null,
                  yValue: 1,
                  locked: !1
                }
              }, {
                id: "a-57-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".hero_heading.is-footer",
                    selectorGuids: ["6d1e6d4b-2309-5c68-0ab4-b178fa6236ce", "73459ad9-dc68-7bea-1a9c-c65df61f880b"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }, {
              actionItems: [{
                id: "a-57-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".hero_background-image.is-footer",
                    selectorGuids: ["253cf1c7-1f5c-4319-304f-6c63fc8771d9", "0e1d31e4-1507-a895-1058-c46d6da635ae"]
                  },
                  xValue: 1.04,
                  yValue: 1.04,
                  locked: !0
                }
              }, {
                id: "a-57-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".footer-hero-2_color-filter",
                    selectorGuids: ["2c4ac720-20ad-81b1-518b-8215bdae4f4c"]
                  },
                  xValue: null,
                  yValue: .6,
                  locked: !1
                }
              }, {
                id: "a-57-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".hero_heading.is-footer",
                    selectorGuids: ["6d1e6d4b-2309-5c68-0ab4-b178fa6236ce", "73459ad9-dc68-7bea-1a9c-c65df61f880b"]
                  },
                  xValue: 1.01,
                  yValue: 1.01,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eb27de648
          },
          "a-58": {
            id: "a-58",
            title: "Footer CTA [Hover Out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-58-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".hero_background-image.is-footer",
                    selectorGuids: ["253cf1c7-1f5c-4319-304f-6c63fc8771d9", "0e1d31e4-1507-a895-1058-c46d6da635ae"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }, {
                id: "a-58-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".footer-hero-2_color-filter",
                    selectorGuids: ["2c4ac720-20ad-81b1-518b-8215bdae4f4c"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }, {
                id: "a-58-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".hero_heading.is-footer",
                    selectorGuids: ["6d1e6d4b-2309-5c68-0ab4-b178fa6236ce", "73459ad9-dc68-7bea-1a9c-c65df61f880b"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eb27f2a3a
          },
          "a-63": {
            id: "a-63",
            title: "Navbar 2 menu [Open] 2",
            actionItemGroups: [{
              actionItems: [{
                id: "a-63-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  yValue: 8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-63-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  yValue: -8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-63-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-63-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-63-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-middle",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692d"]
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa29a5e06
          },
          "a-64": {
            id: "a-64",
            title: "Navbar 2 menu [Close] 2",
            actionItemGroups: [{
              actionItems: [{
                id: "a-64-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-64-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }, {
                id: "a-64-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-bottom",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692e"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-64-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-top",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692c"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-64-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuint",
                  duration: 400,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu-icon2_line-middle",
                    selectorGuids: ["9b9f6ea4-57ff-6554-46eb-42ff49f4692d"]
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa2a71292
          },
          "a-59": {
            id: "a-59",
            title: "nav icon [hover in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-59-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }, {
                id: "a-59-n-3",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".icon-embed-medium.is-border",
                    selectorGuids: ["b93a8dd9-ad91-3f43-80f7-25c081cc5fad", "0d2a354e-a72a-0a12-eeef-69cb76b6a39b"]
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1
                }
              }, {
                id: "a-59-n-5",
                actionTypeId: "STYLE_BORDER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".icon-embed-medium.is-border",
                    selectorGuids: ["b93a8dd9-ad91-3f43-80f7-25c081cc5fad", "0d2a354e-a72a-0a12-eeef-69cb76b6a39b"]
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1
                }
              }]
            }, {
              actionItems: [{
                id: "a-59-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  xValue: 1.04,
                  yValue: 1.04,
                  locked: !0
                }
              }, {
                id: "a-59-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".icon-embed-medium.is-border",
                    selectorGuids: ["b93a8dd9-ad91-3f43-80f7-25c081cc5fad", "0d2a354e-a72a-0a12-eeef-69cb76b6a39b"]
                  },
                  globalSwatchId: "--misty-rose",
                  rValue: 249,
                  bValue: 217,
                  gValue: 218,
                  aValue: 1
                }
              }, {
                id: "a-59-n-6",
                actionTypeId: "STYLE_BORDER",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".icon-embed-medium.is-border",
                    selectorGuids: ["b93a8dd9-ad91-3f43-80f7-25c081cc5fad", "0d2a354e-a72a-0a12-eeef-69cb76b6a39b"]
                  },
                  globalSwatchId: "--misty-rose",
                  rValue: 249,
                  bValue: 217,
                  gValue: 218,
                  aValue: 1
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eb29f0591
          },
          "a-60": {
            id: "a-60",
            title: "nav icon [hover out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-60-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_message-wrapper",
                    selectorGuids: ["26f274fb-d9dc-6d70-54ee-9f1ac8ce3ae8"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }, {
                id: "a-60-n-2",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".icon-embed-medium.is-border",
                    selectorGuids: ["b93a8dd9-ad91-3f43-80f7-25c081cc5fad", "0d2a354e-a72a-0a12-eeef-69cb76b6a39b"]
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1
                }
              }, {
                id: "a-60-n-3",
                actionTypeId: "STYLE_BORDER",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".icon-embed-medium.is-border",
                    selectorGuids: ["b93a8dd9-ad91-3f43-80f7-25c081cc5fad", "0d2a354e-a72a-0a12-eeef-69cb76b6a39b"]
                  },
                  globalSwatchId: "",
                  rValue: 255,
                  bValue: 255,
                  gValue: 255,
                  aValue: 1
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eb2a02d66
          },
          "a-72": {
            id: "a-72",
            title: "Menu Down 5",
            actionItemGroups: [{
              actionItems: [{
                id: "a-72-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 80,
                  target: {
                    id: "66118941609bdb50ceca9928|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-72-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 250,
                  target: {
                    id: "66118941609bdb50ceca9928|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-73": {
            id: "a-73",
            title: "Menu Up 5",
            actionItemGroups: [{
              actionItems: [{
                id: "a-73-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "66118941609bdb50ceca9928|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-73-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "66118941609bdb50ceca9928|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-61": {
            id: "a-61",
            title: "Card [Hover in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-61-n-7",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".latest_case-wrapper",
                    selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }, {
              actionItems: [{
                id: "a-61-n-8",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".latest_case-wrapper",
                    selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69"]
                  },
                  xValue: 1.01,
                  yValue: 1.01,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eb2dd7a6b
          },
          "a-62": {
            id: "a-62",
            title: "Card [Hover out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-62-n-8",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".latest_case-wrapper",
                    selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eb2dd7a6b
          },
          "a-45": {
            id: "a-45",
            title: "Latest Card Scroll [scroll in]",
            continuousParameterGroups: [{
              id: "a-45-p",
              type: "SCROLL_PROGRESS",
              parameterLabel: "Scroll",
              continuousActionGroups: [{
                keyframe: 30,
                actionItems: [{
                  id: "a-45-n-13",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-23",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-4",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "deb44a44-46ad-c115-6e47-d6991f566e0b"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-24",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-4",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "deb44a44-46ad-c115-6e47-d6991f566e0b"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "cc11",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "28c5",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }]
              }, {
                keyframe: 36,
                actionItems: [{
                  id: "a-45-n-5",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-7",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "ce5a",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "b034",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }]
              }, {
                keyframe: 41,
                actionItems: [{
                  id: "a-45-n-3",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-1",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "9407a4dc-536a-49e8-6e3f-93b83cecb66d"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "15ad",
                      value: 0,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "3e0c",
                      value: 100,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-1",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "9407a4dc-536a-49e8-6e3f-93b83cecb66d"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }]
              }, {
                keyframe: 45,
                actionItems: [{
                  id: "a-45-n-14",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-8",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "572a",
                      value: 0,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "8259",
                      value: 100,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }]
              }, {
                keyframe: 50,
                actionItems: [{
                  id: "a-45-n-17",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "4f94",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "34e4",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }]
              }, {
                keyframe: 51,
                actionItems: [{
                  id: "a-45-n-4",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-1",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "9407a4dc-536a-49e8-6e3f-93b83cecb66d"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "8e50",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "13a8",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-1",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "9407a4dc-536a-49e8-6e3f-93b83cecb66d"]
                    },
                    xValue: .95,
                    yValue: .95,
                    locked: !0
                  }
                }]
              }, {
                keyframe: 55,
                actionItems: [{
                  id: "a-45-n-16",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-18",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "f593",
                      value: 0,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "ab1f",
                      value: 100,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n-15",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-9",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-11",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "b7b4",
                      value: 0,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "7e49",
                      value: 100,
                      unit: "%"
                    }]
                  }
                }]
              }, {
                keyframe: 58,
                actionItems: [{
                  id: "a-45-n-12",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "4d38",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "4bd8",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n-10",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-2",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "e04cdd98-831c-1279-fc8a-7e42ffe08425"]
                    },
                    xValue: .95,
                    yValue: .95,
                    locked: !0
                  }
                }]
              }, {
                keyframe: 66,
                actionItems: [{
                  id: "a-45-n-25",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-4",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "deb44a44-46ad-c115-6e47-d6991f566e0b"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-26",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-4",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "deb44a44-46ad-c115-6e47-d6991f566e0b"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "862f",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "f9dd",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }]
              }, {
                keyframe: 71,
                actionItems: [{
                  id: "a-45-n-19",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-21",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "57a5",
                      value: 0,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "824a",
                      value: 100,
                      unit: "%"
                    }]
                  }
                }]
              }, {
                keyframe: 77,
                actionItems: [{
                  id: "a-45-n-20",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    xValue: .95,
                    yValue: .95,
                    locked: !0
                  }
                }, {
                  id: "a-45-n-22",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-3",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "f98af038-6404-2d51-f749-5b78967896a7"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "41cb",
                      value: 100,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "867e",
                      value: 20,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n-27",
                  actionTypeId: "STYLE_FILTER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-4",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "deb44a44-46ad-c115-6e47-d6991f566e0b"]
                    },
                    filters: [{
                      type: "grayscale",
                      filterId: "b1d7",
                      value: 0,
                      unit: "%"
                    }, {
                      type: "brightness",
                      filterId: "e5cc",
                      value: 100,
                      unit: "%"
                    }]
                  }
                }, {
                  id: "a-45-n-28",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".latest_case-wrapper.is-4",
                      selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69", "deb44a44-46ad-c115-6e47-d6991f566e0b"]
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: !0
                  }
                }]
              }]
            }],
            createdOn: 0x18eaeea97d3
          },
          "a-41": {
            id: "a-41",
            title: "About Text [Scroll in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-41-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|aceeb74b-b023-b566-b671-204a78720850"
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-41-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1300,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|aceeb74b-b023-b566-b671-204a78720850"
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eae9d4fa1
          },
          "a-42": {
            id: "a-42",
            title: "About Text [Scroll Out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-42-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: !0,
                    id: "660d9b2931fa00f631bce95d|aceeb74b-b023-b566-b671-204a78720850"
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eae9d4fa1
          },
          "a-76": {
            id: "a-76",
            title: "Case Info [Hover in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-76-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_link-text",
                    selectorGuids: ["b7fd898e-fa04-926b-3474-2094a12d5921"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-76-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".case-info_link",
                    selectorGuids: ["5314b51f-b21e-e945-8264-bb2bf95e796d"]
                  },
                  widthValue: 2.125,
                  widthUnit: "rem",
                  heightUnit: "PX",
                  locked: !1
                }
              }, {
                id: "a-76-n-8",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_link-text",
                    selectorGuids: ["b7fd898e-fa04-926b-3474-2094a12d5921"]
                  },
                  widthValue: 0,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-76-n-10",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".case-info_link",
                    selectorGuids: ["5314b51f-b21e-e945-8264-bb2bf95e796d"]
                  },
                  globalSwatchId: "",
                  rValue: 199,
                  bValue: 199,
                  gValue: 199,
                  aValue: 1
                }
              }, {
                id: "a-76-n-12",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_icon",
                    selectorGuids: ["897c15a4-c397-4ebb-9268-a70b4173c162"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-76-n-14",
                actionTypeId: "STYLE_BORDER",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".case-info_link",
                    selectorGuids: ["5314b51f-b21e-e945-8264-bb2bf95e796d"]
                  },
                  globalSwatchId: "",
                  rValue: 199,
                  bValue: 199,
                  gValue: 199,
                  aValue: 1
                }
              }]
            }, {
              actionItems: [{
                id: "a-76-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_link-text",
                    selectorGuids: ["b7fd898e-fa04-926b-3474-2094a12d5921"]
                  },
                  value: 1,
                  unit: ""
                }
              }, {
                id: "a-76-n-7",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    selector: ".case-info_link",
                    selectorGuids: ["5314b51f-b21e-e945-8264-bb2bf95e796d"]
                  },
                  widthValue: 4.6,
                  widthUnit: "rem",
                  heightUnit: "PX",
                  locked: !1
                }
              }, {
                id: "a-76-n-9",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_link-text",
                    selectorGuids: ["b7fd898e-fa04-926b-3474-2094a12d5921"]
                  },
                  heightValue: 1.3,
                  widthUnit: "AUTO",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-76-n-11",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    selector: ".case-info_link",
                    selectorGuids: ["5314b51f-b21e-e945-8264-bb2bf95e796d"]
                  },
                  globalSwatchId: "--misty-rose",
                  rValue: 249,
                  bValue: 217,
                  gValue: 218,
                  aValue: 1
                }
              }, {
                id: "a-76-n-13",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_icon",
                    selectorGuids: ["897c15a4-c397-4ebb-9268-a70b4173c162"]
                  },
                  zValue: 10,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }, {
                id: "a-76-n-15",
                actionTypeId: "STYLE_BORDER",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    selector: ".case-info_link",
                    selectorGuids: ["5314b51f-b21e-e945-8264-bb2bf95e796d"]
                  },
                  globalSwatchId: "--misty-rose",
                  rValue: 249,
                  bValue: 217,
                  gValue: 218,
                  aValue: 1
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ebd7eb203
          },
          "a-77": {
            id: "a-77",
            title: "Case Info [Hover out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-77-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_link-text",
                    selectorGuids: ["b7fd898e-fa04-926b-3474-2094a12d5921"]
                  },
                  value: 0,
                  unit: ""
                }
              }, {
                id: "a-77-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_link-text",
                    selectorGuids: ["b7fd898e-fa04-926b-3474-2094a12d5921"]
                  },
                  widthValue: 0,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-77-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: !0,
                    id: "6480e79e33c6b584f4521695|cb2f2c73-499b-606d-884e-479bdefc48b3"
                  },
                  widthValue: 2.125,
                  widthUnit: "rem",
                  heightUnit: "PX",
                  locked: !1
                }
              }, {
                id: "a-77-n-4",
                actionTypeId: "STYLE_TEXT_COLOR",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: !0,
                    id: "6480e79e33c6b584f4521695|cb2f2c73-499b-606d-884e-479bdefc48b3"
                  },
                  globalSwatchId: "",
                  rValue: 199,
                  bValue: 199,
                  gValue: 199,
                  aValue: 1
                }
              }, {
                id: "a-77-n-5",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".case-info_icon",
                    selectorGuids: ["897c15a4-c397-4ebb-9268-a70b4173c162"]
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ebd7eb203
          },
          "a-78": {
            id: "a-78",
            title: "Home Icon [Hover in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-78-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".navbar_menu-wrapper",
                    selectorGuids: ["e9b8f060-ac1f-7d1e-fecd-8ff0775fabf0"]
                  },
                  widthValue: 3,
                  heightValue: 3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-78-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu_text-link",
                    selectorGuids: ["50406376-384e-0edd-ffe2-e14f6a95ac1b"]
                  },
                  widthValue: 0,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-78-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_spacer",
                    selectorGuids: ["06f32811-72bb-e0d3-a739-4181f6e64eab"]
                  },
                  widthValue: 0,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }]
            }, {
              actionItems: [{
                id: "a-78-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    selector: ".navbar_menu-wrapper",
                    selectorGuids: ["e9b8f060-ac1f-7d1e-fecd-8ff0775fabf0"]
                  },
                  widthValue: 9,
                  heightValue: 3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-78-n-4",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu_text-link",
                    selectorGuids: ["50406376-384e-0edd-ffe2-e14f6a95ac1b"]
                  },
                  widthValue: 4.7,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-78-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_spacer",
                    selectorGuids: ["06f32811-72bb-e0d3-a739-4181f6e64eab"]
                  },
                  widthValue: .5,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ebdffc319
          },
          "a-79": {
            id: "a-79",
            title: "Home Icon [Hover out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-79-n-2",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".menu_text-link",
                    selectorGuids: ["50406376-384e-0edd-ffe2-e14f6a95ac1b"]
                  },
                  widthValue: 0,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-79-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".navbar_spacer",
                    selectorGuids: ["06f32811-72bb-e0d3-a739-4181f6e64eab"]
                  },
                  widthValue: 0,
                  heightValue: 1.3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }, {
                id: "a-79-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "inOutQuad",
                  duration: 200,
                  target: {
                    selector: ".navbar_menu-wrapper",
                    selectorGuids: ["e9b8f060-ac1f-7d1e-fecd-8ff0775fabf0"]
                  },
                  widthValue: 3,
                  heightValue: 3,
                  widthUnit: "rem",
                  heightUnit: "rem",
                  locked: !1
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ebdffc319
          },
          "a-80": {
            id: "a-80",
            title: "Menu Down 6",
            actionItemGroups: [{
              actionItems: [{
                id: "a-80-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 80,
                  target: {
                    id: "661635f45cdba701286edbe4|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-80-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 250,
                  target: {
                    id: "661635f45cdba701286edbe4|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-81": {
            id: "a-81",
            title: "Menu Up 6",
            actionItemGroups: [{
              actionItems: [{
                id: "a-81-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "661635f45cdba701286edbe4|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX"
                }
              }]
            }, {
              actionItems: [{
                id: "a-81-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "inQuad",
                  duration: 100,
                  target: {
                    id: "661635f45cdba701286edbe4|2905107d-f69c-6a46-d145-dc2bd26489b8"
                  },
                  yValue: -4,
                  xUnit: "PX",
                  yUnit: "rem",
                  zUnit: "PX"
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18897b1bbab
          },
          "a-83": {
            id: "a-83",
            title: "Lottie [Scroll Down]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-83-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ec74e25c3
          },
          "a-82": {
            id: "a-82",
            title: "Lottie [Scroll uo]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-82-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  value: 1,
                  unit: ""
                }
              }]
            }, {
              actionItems: [{
                id: "a-82-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "660d9b2931fa00f631bce95d|994c2702-c2c5-e6d9-9d57-3d0c1aa49cc3"
                  },
                  value: 0,
                  unit: ""
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18ec74e25c3
          },
          "a-74": {
            id: "a-74",
            title: "home Card [Hover in]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-74-n-9",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".latest_case-wrapper",
                    selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }, {
              actionItems: [{
                id: "a-74-n-10",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".latest_case-wrapper",
                    selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69"]
                  },
                  xValue: 1.007,
                  yValue: 1.007,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18eb9d9c33a
          },
          "a-75": {
            id: "a-75",
            title: "home Card [Hover out]",
            actionItemGroups: [{
              actionItems: [{
                id: "a-75-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 100,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".latest_case-wrapper",
                    selectorGuids: ["b77af791-ecd7-950c-294b-1d3db5c87e69"]
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0
                }
              }]
            }],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18eb9d9c33a
          }
        },
        site: {
          mediaQueries: [{
            key: "main",
            min: 992,
            max: 1e4
          }, {
            key: "medium",
            min: 768,
            max: 991
          }, {
            key: "small",
            min: 480,
            max: 767
          }, {
            key: "tiny",
            min: 0,
            max: 479
          }]
        }
      })
    }
  }
]);
