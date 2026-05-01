(function() {
  var n, aa = typeof Object.create == "function" ? Object.create : function(a) {
      var b = function() {};
      b.prototype = a;
      return new b
    },
    ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
    },
    ca = function(a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
      }
      throw Error("Cannot find global object");
    },
    q = ca(this),
    r = function(a, b) {
      if (b) a: {
        var c = q;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        })
      }
    },
    da;
  if (typeof Object.setPrototypeOf == "function") da = Object.setPrototypeOf;
  else {
    var ea;
    a: {
      var fa = {
          a: !0
        },
        ha = {};
      try {
        ha.__proto__ = fa;
        ea = ha.a;
        break a
      } catch (a) {}
      ea = !1
    }
    da = ea ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ia = da,
    ja = function(a, b) {
      a.prototype = aa(b.prototype);
      a.prototype.constructor = a;
      if (ia) ia(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c];
      a.J = b.prototype
    },
    ka = function(a) {
      var b = 0;
      return function() {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    },
    u = function(a) {
      var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return {
        next: ka(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    la = function(a) {
      if (!(a instanceof Array)) {
        a = u(a);
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        a = c
      }
      return a
    },
    ma = function(a) {
      return v(a, a)
    },
    v = function(a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a
    },
    w = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    },
    na = function() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b
    };
  r("globalThis", function(a) {
    return a || q
  });
  r("Symbol", function(a) {
    if (a) return a;
    var b = function(f, g) {
      this.g = f;
      ba(this, "description", {
        configurable: !0,
        writable: !0,
        value: g
      })
    };
    b.prototype.toString = function() {
      return this.g
    };
    var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
      d = 0,
      e = function(f) {
        if (this instanceof e) throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f)
      };
    return e
  });
  r("Symbol.iterator", function(a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    ba(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function() {
        return oa(ka(this))
      }
    });
    return a
  });
  var oa = function(a) {
    a = {
      next: a
    };
    a[Symbol.iterator] = function() {
      return this
    };
    return a
  };
  r("Promise", function(a) {
    function b() {
      this.g = null
    }

    function c(g) {
      return g instanceof e ? g : new e(function(h) {
        h(g)
      })
    }
    if (a) return a;
    b.prototype.i = function(g) {
      if (this.g == null) {
        this.g = [];
        var h = this;
        this.j(function() {
          h.m()
        })
      }
      this.g.push(g)
    };
    var d = q.setTimeout;
    b.prototype.j = function(g) {
      d(g, 0)
    };
    b.prototype.m = function() {
      for (; this.g && this.g.length;) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k()
          } catch (l) {
            this.l(l)
          }
        }
      }
      this.g = null
    };
    b.prototype.l = function(g) {
      this.j(function() {
        throw g;
      })
    };
    var e = function(g) {
      this.g = 0;
      this.j = void 0;
      this.i = [];
      this.v = !1;
      var h = this.l();
      try {
        g(h.resolve, h.reject)
      } catch (k) {
        h.reject(k)
      }
    };
    e.prototype.l = function() {
      function g(l) {
        return function(m) {
          k || (k = !0, l.call(h, m))
        }
      }
      var h = this,
        k = !1;
      return {
        resolve: g(this.D),
        reject: g(this.m)
      }
    };
    e.prototype.D = function(g) {
      if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof e) this.G(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = g != null;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1
        }
        h ? this.B(g) : this.u(g)
      }
    };
    e.prototype.B = function(g) {
      var h = void 0;
      try {
        h = g.then
      } catch (k) {
        this.m(k);
        return
      }
      typeof h == "function" ? this.I(h, g) : this.u(g)
    };
    e.prototype.m = function(g) {
      this.o(2, g)
    };
    e.prototype.u = function(g) {
      this.o(1, g)
    };
    e.prototype.o = function(g, h) {
      if (this.g != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
      this.g = g;
      this.j = h;
      this.g === 2 && this.F();
      this.C()
    };
    e.prototype.F = function() {
      var g = this;
      d(function() {
        if (g.A()) {
          var h = q.console;
          typeof h !== "undefined" && h.error(g.j)
        }
      }, 1)
    };
    e.prototype.A = function() {
      if (this.v) return !1;
      var g = q.CustomEvent,
        h = q.Event,
        k = q.dispatchEvent;
      if (typeof k === "undefined") return !0;
      typeof g === "function" ? g = new g("unhandledrejection", {
        cancelable: !0
      }) : typeof h === "function" ? g = new h("unhandledrejection", {
        cancelable: !0
      }) : (g = q.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.j;
      return k(g)
    };
    e.prototype.C = function() {
      if (this.i != null) {
        for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
        this.i = null
      }
    };
    var f = new b;
    e.prototype.G = function(g) {
      var h = this.l();
      g.T(h.resolve, h.reject)
    };
    e.prototype.I = function(g, h) {
      var k = this.l();
      try {
        g.call(h, k.resolve, k.reject)
      } catch (l) {
        k.reject(l)
      }
    };
    e.prototype.then = function(g, h) {
      function k(t, H) {
        return typeof t == "function" ? function(Ba) {
          try {
            l(t(Ba))
          } catch (Ca) {
            m(Ca)
          }
        } : H
      }
      var l, m, p = new e(function(t, H) {
        l = t;
        m = H
      });
      this.T(k(g, l), k(h, m));
      return p
    };
    e.prototype.catch = function(g) {
      return this.then(void 0, g)
    };
    e.prototype.T = function(g, h) {
      function k() {
        switch (l.g) {
          case 1:
            g(l.j);
            break;
          case 2:
            h(l.j);
            break;
          default:
            throw Error("Unexpected state: " + l.g);
        }
      }
      var l = this;
      this.i == null ? f.i(k) : this.i.push(k);
      this.v = !0
    };
    e.resolve = c;
    e.reject = function(g) {
      return new e(function(h, k) {
        k(g)
      })
    };
    e.race = function(g) {
      return new e(function(h, k) {
        for (var l = u(g), m = l.next(); !m.done; m = l.next()) c(m.value).T(h, k)
      })
    };
    e.all = function(g) {
      var h = u(g),
        k = h.next();
      return k.done ? c([]) : new e(function(l, m) {
        function p(Ba) {
          return function(Ca) {
            t[Ba] = Ca;
            H--;
            H == 0 && l(t)
          }
        }
        var t = [],
          H = 0;
        do t.push(void 0), H++, c(k.value).T(p(t.length -
          1), m), k = h.next(); while (!k.done)
      })
    };
    return e
  });
  r("Symbol.dispose", function(a) {
    return a ? a : Symbol("Symbol.dispose")
  });
  r("WeakMap", function(a) {
    function b() {}

    function c(k) {
      var l = typeof k;
      return l === "object" && k !== null || l === "function"
    }

    function d(k) {
      if (!w(k, f)) {
        var l = new b;
        ba(k, f, {
          value: l
        })
      }
    }

    function e(k) {
      var l = Object[k];
      l && (Object[k] = function(m) {
        if (m instanceof b) return m;
        Object.isExtensible(m) && d(m);
        return l(m)
      })
    }
    if (function() {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            m = new a([
              [k, 2],
              [l, 3]
            ]);
          if (m.get(k) != 2 || m.get(l) != 3) return !1;
          m.delete(k);
          m.set(l, 4);
          return !m.has(k) && m.get(l) == 4
        } catch (p) {
          return !1
        }
      }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function(k) {
        this.g = (g += Math.random() + 1).toString();
        if (k) {
          k = u(k);
          for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
        }
      };
    h.prototype.set = function(k, l) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!w(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = l;
      return this
    };
    h.prototype.get = function(k) {
      return c(k) && w(k, f) ? k[f][this.g] : void 0
    };
    h.prototype.has = function(k) {
      return c(k) && w(k, f) && w(k[f], this.g)
    };
    h.prototype.delete = function(k) {
      return c(k) && w(k, f) && w(k[f], this.g) ? delete k[f][this.g] : !1
    };
    return h
  });
  r("Map", function(a) {
    if (function() {
        if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
        try {
          var h = Object.seal({
              x: 4
            }),
            k = new a(u([
              [h, "s"]
            ]));
          if (k.get(h) != "s" || k.size != 1 || k.get({
              x: 4
            }) || k.set({
              x: 4
            }, "t") != k || k.size != 2) return !1;
          var l = k.entries(),
            m = l.next();
          if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
          m = l.next();
          return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
        } catch (p) {
          return !1
        }
      }()) return a;
    var b = new WeakMap,
      c = function(h) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (h) {
          h = u(h);
          for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
        }
      };
    c.prototype.set = function(h, k) {
      h = h === 0 ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.entry ? l.entry.value = k : (l.entry = {
        next: this[1],
        H: this[1].H,
        head: this[1],
        key: h,
        value: k
      }, l.list.push(l.entry), this[1].H.next = l.entry, this[1].H = l.entry, this.size++);
      return this
    };
    c.prototype.delete = function(h) {
      h = d(this, h);
      return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.entry.H.next = h.entry.next, h.entry.next.H = h.entry.H, h.entry.head = null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
      this[0] = {};
      this[1] = this[1].H = f();
      this.size = 0
    };
    c.prototype.has = function(h) {
      return !!d(this, h).entry
    };
    c.prototype.get = function(h) {
      return (h = d(this, h).entry) && h.value
    };
    c.prototype.entries = function() {
      return e(this, function(h) {
        return [h.key, h.value]
      })
    };
    c.prototype.keys = function() {
      return e(this, function(h) {
        return h.key
      })
    };
    c.prototype.values = function() {
      return e(this, function(h) {
        return h.value
      })
    };
    c.prototype.forEach = function(h, k) {
      for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, k) {
        var l = k && typeof k;
        l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
        var m = h[0][l];
        if (m && w(h[0], l))
          for (h = 0; h < m.length; h++) {
            var p = m[h];
            if (k !== k && p.key !== p.key || k === p.key) return {
              id: l,
              list: m,
              index: h,
              entry: p
            }
          }
        return {
          id: l,
          list: m,
          index: -1,
          entry: void 0
        }
      },
      e = function(h, k) {
        var l = h[1];
        return oa(function() {
          if (l) {
            for (; l.head != h[1];) l = l.H;
            for (; l.next != l.head;) return l = l.next, {
              done: !1,
              value: k(l)
            };
            l = null
          }
          return {
            done: !0,
            value: void 0
          }
        })
      },
      f = function() {
        var h = {};
        return h.H = h.next = h.head = h
      },
      g = 0;
    return c
  });
  r("Set", function(a) {
    if (function() {
        if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
        try {
          var c = Object.seal({
              x: 4
            }),
            d = new a(u([c]));
          if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
              x: 4
            }) != d || d.size != 2) return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
        } catch (g) {
          return !1
        }
      }()) return a;
    var b = function(c) {
      this.g = new Map;
      if (c) {
        c = u(c);
        for (var d; !(d = c.next()).done;) this.add(d.value)
      }
      this.size = this.g.size
    };
    b.prototype.add = function(c) {
      c = c === 0 ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this
    };
    b.prototype.delete = function(c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c
    };
    b.prototype.clear = function() {
      this.g.clear();
      this.size = 0
    };
    b.prototype.has = function(c) {
      return this.g.has(c)
    };
    b.prototype.entries = function() {
      return this.g.entries()
    };
    b.prototype.values = function() {
      return this.g.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
      var e = this;
      this.g.forEach(function(f) {
        return c.call(d, f, f, e)
      })
    };
    return b
  });
  r("Math.log2", function(a) {
    return a ? a : function(b) {
      return Math.log(b) / Math.LN2
    }
  });
  r("Object.values", function(a) {
    return a ? a : function(b) {
      var c = [],
        d;
      for (d in b) w(b, d) && c.push(b[d]);
      return c
    }
  });
  r("Object.is", function(a) {
    return a ? a : function(b, c) {
      return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
    }
  });
  r("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      var d = this;
      d instanceof String && (d = String(d));
      var e = d.length;
      c = c || 0;
      for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
        var f = d[c];
        if (f === b || Object.is(f, b)) return !0
      }
      return !1
    }
  });
  r("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
      if (this == null) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return (this + "").indexOf(b, c || 0) !== -1
    }
  });
  r("Array.from", function(a) {
    return a ? a : function(b, c, d) {
      c = c != null ? c : function(h) {
        return h
      };
      var e = [],
        f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
      if (typeof f == "function") {
        b = f.call(b);
        for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
      } else
        for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
      return e
    }
  });
  r("Object.entries", function(a) {
    return a ? a : function(b) {
      var c = [],
        d;
      for (d in b) w(b, d) && c.push([d, b[d]]);
      return c
    }
  });
  r("Number.isFinite", function(a) {
    return a ? a : function(b) {
      return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
    }
  });
  var pa = function(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function() {
          if (!d && c < a.length) {
            var f = c++;
            return {
              value: b(f, a[f]),
              done: !1
            }
          }
          d = !0;
          return {
            done: !0,
            value: void 0
          }
        }
      };
    e[Symbol.iterator] = function() {
      return e
    };
    return e
  };
  r("Array.prototype.entries", function(a) {
    return a ? a : function() {
      return pa(this, function(b, c) {
        return [b, c]
      })
    }
  });
  r("Array.prototype.keys", function(a) {
    return a ? a : function() {
      return pa(this, function(b) {
        return b
      })
    }
  });
  r("Array.prototype.values", function(a) {
    return a ? a : function() {
      return pa(this, function(b, c) {
        return c
      })
    }
  });
  var x = this || self,
    qa = function(a) {
      var b = typeof a;
      return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    },
    ra = function(a) {
      var b = qa(a);
      return b == "array" || b == "object" && typeof a.length == "number"
    },
    y = function(a) {
      var b = typeof a;
      return b == "object" && a != null || b == "function"
    },
    sa = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    ta = function(a, b, c) {
      if (!a) throw Error();
      if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    },
    ua = function(a, b, c) {
      ua = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? sa : ta;
      return ua.apply(null, arguments)
    },
    va = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
      }
    },
    z = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.J = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.Ya = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
      }
    };

  function A(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, A);
    else {
      var c = Error().stack;
      c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
  }
  z(A, Error);
  A.prototype.name = "CustomError";

  function wa(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    A.call(this, c + a[d])
  }
  z(wa, A);
  wa.prototype.name = "AssertionError";

  function xa(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var f = d
    } else a && (e += ": " + a, f = b);
    throw new wa("" + e, f || []);
  }
  var B = function(a, b, c) {
      a || xa("", null, b, Array.prototype.slice.call(arguments, 2))
    },
    ya = function(a, b, c) {
      a == null && xa("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    C = function(a, b, c) {
      typeof a !== "number" && xa("Expected number but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    },
    za = function(a, b, c) {
      Array.isArray(a) || xa("Expected array but got %s: %s.", [qa(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    };
  var Aa = Array.prototype.indexOf ? function(a, b) {
      B(a.length != null);
      return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
      if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b) return c;
      return -1
    },
    D = Array.prototype.forEach ? function(a, b) {
      B(a.length != null);
      Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
      for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

  function Da(a) {
    var b = a.length;
    if (b > 0) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c
    }
    return []
  };
  var Ea = function(a) {
    Ea[" "](a);
    return a
  };
  Ea[" "] = function() {};
  var Fa = typeof Symbol === "function" && typeof Symbol() === "symbol";

  function Ga(a, b, c) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol" ? (c === void 0 ? 0 : c) && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
  }
  var Ha = Ga("jas", void 0, !0),
    Ia = Ga("destroyedStructure", "destroyedStructure");
  B(Math.round(Math.log2(Math.max.apply(Math, la(Object.values({
    Ia: 1,
    Ha: 2,
    Ga: 4,
    Ma: 8,
    Wa: 16,
    Ka: 32,
    pa: 64,
    Ea: 128,
    ra: 256,
    Ua: 512,
    sa: 1024,
    Fa: 2048,
    La: 4096,
    Ja: 8192
  }))))) === 13);
  var Ja = Fa ? ya(Ha) : "Za",
    Ka = Object.getOwnPropertyDescriptor(Array.prototype, "ma");
  Object.defineProperties(Array.prototype, {
    ma: {
      get: function() {
        var a = La(this);
        return Ka ? Ka.get.call(this) + "|" + a : a
      },
      configurable: !0,
      enumerable: !1
    }
  });

  function La(a) {
    function b(e, f) {
      e & c && d.push(f)
    }
    var c = za(a, "state is only maintained on arrays.")[Ja] | 0,
      d = [];
    b(1, "IS_REPEATED_FIELD");
    b(2, "IS_IMMUTABLE_ARRAY");
    b(4, "IS_API_FORMATTED");
    b(512, "STRING_FORMATTED");
    b(1024, "GBIGINT_FORMATTED");
    b(1024, "BINARY");
    b(8, "ONLY_MUTABLE_VALUES");
    b(16, "UNFROZEN_SHARED");
    b(32, "MUTABLE_REFERENCES_ARE_OWNED");
    b(64, "CONSTRUCTED");
    b(128, "HAS_MESSAGE_ID");
    b(256, "FROZEN_ARRAY");
    b(2048, "HAS_WRAPPER");
    b(4096, "MUTABLE_SUBSTRUCTURES");
    b(8192, "KNOWN_MAP_ARRAY");
    c & 64 && (B(c & 64), a = c >> 14 & 1023 || 536870912, a !== 536870912 && d.push("pivot: " + a));
    return d.join(",")
  };

  function Ma(a, b) {
    b = b === void 0 ? new Set : b;
    if (b.has(a)) return "(Recursive reference)";
    switch (typeof a) {
      case "object":
        if (a) {
          var c = Object.getPrototypeOf(a);
          switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
              b.add(a);
              var d = "[" + Array.from(a, function(e) {
                return Ma(e, b)
              }).join(", ") + "]";
              b.delete(a);
              c !== Array.prototype && (d = Na(c.constructor) + "(" + d + ")");
              return d;
            case Object.prototype:
              return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                var f = u(e);
                e = f.next().value;
                f = f.next().value;
                return e + ": " + Ma(f, b)
              }).join(", ") + "}", b.delete(a), c;
            default:
              return d = "Object", c && c.constructor && (d = Na(c.constructor)), typeof a.toString === "function" && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
          }
        }
        break;
      case "function":
        return "function " + Na(a);
      case "number":
        if (!Number.isFinite(a)) return String(a);
        break;
      case "bigint":
        return a.toString(10) + "n";
      case "symbol":
        return a.toString()
    }
    return JSON.stringify(a)
  }

  function Na(a) {
    var b = a.displayName;
    return b && typeof b === "string" || (b = a.name) && typeof b === "string" ? b : (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)"
  };

  function Oa(a, b) {
    var c = Pa,
      d = [];
    Qa(b, a, d) || Ra.apply(null, [void 0, c, "Guard " + b.X().trim() + " failed:"].concat(la(d.reverse())))
  }

  function Sa(a) {
    var b = Pa;
    a || Ra("Guard truthy failed:", b || "Expected truthy, got " + Ma(a))
  }

  function E(a, b) {
    a.ab = !0;
    a.X = typeof b === "function" ? b : function() {
      return b
    };
    return a
  }

  function Qa(a, b, c, d) {
    var e = a(b, c);
    e || Ta(c, function() {
      var f = d ? (typeof d === "function" ? d() : d).trim() : "";
      f.length > 0 && (f += ": ");
      return f + "Expected " + a.X().trim() + ", got " + Ma(b)
    });
    return e
  }

  function Ta(a, b) {
    a == null || a.push((typeof b === "function" ? b() : b).trim())
  }
  var Pa = void 0;

  function Ua(a) {
    return typeof a === "function" ? a() : a
  }

  function Ra() {
    throw Error(na.apply(0, arguments).map(Ua).filter(Boolean).join("\n").trim().replace(/:$/, ""));
  }
  var Va = E(function(a) {
    return a !== null && a !== void 0
  }, "exists");
  var Wa = E(function(a) {
      return typeof a === "number"
    }, "number"),
    Xa = E(function(a) {
      return typeof a === "string"
    }, "string"),
    Ya = E(function(a) {
      return Array.isArray(a)
    }, "Array<unknown>");

  function Za() {
    return E(function(a, b) {
      return Qa(Ya, a, b) ? a.every(function(c, d) {
        return Qa(Xa, c, b, "At index " + d)
      }) : !1
    }, function() {
      return "Array<" + Xa.X().trim() + ">"
    })
  };
  var $a = function() {
    throw Error("please construct maps as mutable then call toImmutable");
  };
  if (typeof Symbol != "undefined" && typeof Symbol.hasInstance != "undefined") {
    var ab = function() {
        throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");
      },
      bb = {};
    Object.defineProperties($a, (bb[Symbol.hasInstance] = {
      value: ab,
      configurable: !1,
      writable: !1,
      enumerable: !1
    }, bb));
    B($a[Symbol.hasInstance] === ab, "defineProperties did not work: was it monkey-patched?")
  };
  if (typeof Proxy !== "undefined") {
    var F = cb;
    new Proxy({}, {
      getPrototypeOf: F,
      setPrototypeOf: F,
      isExtensible: F,
      preventExtensions: F,
      getOwnPropertyDescriptor: F,
      defineProperty: F,
      has: F,
      get: F,
      set: F,
      deleteProperty: F,
      apply: F,
      construct: F
    })
  }

  function cb(a, b) {
    if (b === Ia) return !0;
    throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");
  };
  B(!0);

  function db() {};
  (function() {
    var a = x.jspbGetTypeName;
    x.jspbGetTypeName = a ? function(b) {
      return a(b) || void 0
    } : db
  })();
  var eb = {};

  function fb() {
    if (eb !== eb) throw Error("Bad secret");
  };
  var gb = ma([""]),
    hb = v(["\x00"], ["\\0"]),
    ib = v(["\n"], ["\\n"]),
    jb = v(["\x00"], ["\\u0000"]),
    kb = ma([""]),
    lb = v(["\x00"], ["\\0"]),
    mb = v(["\n"], ["\\n"]),
    nb = v(["\x00"], ["\\u0000"]);

  function ob(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw)
  }

  function pb(a) {
    return a.toString().indexOf("`") === -1
  }
  var qb = pb(function(a) {
      return a(gb)
    }) || pb(function(a) {
      return a(hb)
    }) || pb(function(a) {
      return a(ib)
    }) || pb(function(a) {
      return a(jb)
    }),
    rb = ob(kb) && ob(lb) && ob(mb) && ob(nb);
  var sb = globalThis.trustedTypes,
    tb;

  function ub() {
    var a = null;
    if (!sb) return a;
    try {
      var b = function(c) {
        return c
      };
      a = sb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b
      })
    } catch (c) {
      throw c;
    }
    return a
  };
  var vb = function(a) {
    fb();
    this.g = a
  };
  vb.prototype.toString = function() {
    return this.g + ""
  };

  function wb(a) {
    var b;
    tb === void 0 && (tb = ub());
    a = (b = tb) ? b.createScriptURL(a) : a;
    return new vb(a)
  };
  var G = function(a) {
    fb();
    this.g = a
  };
  G.prototype.toString = function() {
    return this.g
  };
  new G("about:blank");
  var xb = new G("about:invalid#zClosurez");
  var yb = function(a) {
    this.la = a
  };

  function zb(a) {
    return new yb(function(b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
  }
  var Ab = [zb("data"), zb("http"), zb("https"), zb("mailto"), zb("ftp"), new yb(function(a) {
      return /^[^:]*([/?#]|$)/.test(a)
    })],
    Bb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i,
    Cb = [],
    Db = function() {};
  Eb(function(a) {
    console.warn("A URL with content '" + a + "' was sanitized away.")
  });

  function Eb(a) {
    Cb.indexOf(a) === -1 && Cb.push(a);
    Db = function(b) {
      Cb.forEach(function(c) {
        c(b)
      })
    }
  };

  function Fb(a) {
    var b = na.apply(1, arguments);
    if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !qb && a === a.raw || !(qb && !rb || ob(a)) || b.length + 1 !== a.length) throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
    if (b.length === 0) return wb(a[0]);
    var c = a[0].toLowerCase();
    if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var d = c.indexOf("//") + 2;
      var e = c.indexOf("/", d);
      if (e <= d) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
      d = c.substring(d, e);
      if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
      if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
      if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
      d = !0
    } else d = !1;
    if (!d)
      if (/^\//.test(c))
        if (c === "/" || c.length > 1 && c[1] !== "/" && c[1] !== "\\") d = !0;
        else throw Error("The path start in the url is invalid.");
    else d = !1;
    if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
      if (/^about:blank/.test(c)) {
        if (c !== "about:blank" && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
        d = !0
      } else d = !1;
    if (!d) throw Error("Trying to interpolate expressions in an unsupported url format.");
    c = a[0];
    for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return wb(c)
  };
  var Gb = /^((market|itms|intent|itms-appss):\/\/)/i;

  function Hb(a, b) {
    if (b instanceof vb) b = b.g;
    else throw Error("Unexpected type when unwrapping TrustedResourceUrl");
    a.src = b;
    var c;
    b = a.ownerDocument;
    b = b === void 0 ? document : b;
    var d;
    b = (d = (c = b).querySelector) == null ? void 0 : d.call(c, "script[nonce]");
    (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") && a.setAttribute("nonce", c)
  };
  var Ib = function() {
    this.name = "CONFIG";
    this.value = 700
  };
  Ib.prototype.toString = function() {
    return this.name
  };
  var Jb = new Ib,
    Kb = function() {
      this.level = null;
      this.g = []
    },
    Lb = function() {
      this.entries = {};
      var a = new Kb;
      a.level = Jb;
      this.entries[""] = a
    },
    Mb, Nb = function(a, b, c) {
      var d = a.entries[b];
      if (d) return c !== void 0 && (d.level = c), d;
      d = Nb(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      var e = new Kb;
      a.entries[b] = e;
      d.g.push(e);
      c !== void 0 && (e.level = c);
      return e
    };
  var Ob = function(a) {
    return a == null ? "" : String(a)
  };

  function Pb(a) {
    try {
      var b;
      if (b = !!a && a.location.href != null) a: {
        try {
          Ea(a.foo);
          b = !0;
          break a
        } catch (c) {}
        b = !1
      }
      return b
    } catch (c) {
      return !1
    }
  };
  var Qb = function(a) {
    var b = 0,
      c = !1,
      d = [],
      e = function() {
        b = 0;
        c && (c = !1, f())
      },
      f = function() {
        b = x.setTimeout(e, 1E3);
        var g = d;
        d = [];
        a.apply(void 0, g)
      };
    return function(g) {
      d = arguments;
      b ? c = !0 : f()
    }
  };

  function Rb(a, b) {
    if (a)
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
  };
  var Sb = function(a, b) {
    b = b === void 0 ? document : b;
    return b.createElement(String(a).toLowerCase())
  };
  var Tb = function() {
    if (!x.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        }
      });
    try {
      var c = function() {};
      x.addEventListener("test", c, b);
      x.removeEventListener("test", c, b)
    } catch (d) {}
    return a
  }();

  function Ub(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }

  function Vb(a) {
    for (var b in a) delete a[b]
  }
  var Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function Xb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Wb.length; f++) c = Wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  };
  var Zb = function(a, b) {
      Ub(b, function(c, d) {
        d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : Yb.hasOwnProperty(d) ? a.setAttribute(Yb[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
      })
    },
    Yb = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    ac = function(a, b, c) {
      var d = arguments,
        e = document,
        f = d[1];
      var g = String(d[0]);
      g = String(g);
      e.contentType === "application/xhtml+xml" && (g = g.toLowerCase());
      g = e.createElement(g);
      f && (typeof f === "string" ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Zb(g, f));
      d.length > 2 && $b(e, g, d);
      return g
    },
    $b = function(a, b, c) {
      function d(h) {
        h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!ra(f) || y(f) && f.nodeType > 0) d(f);
        else {
          a: {
            if (f && typeof f.length == "number") {
              if (y(f)) {
                var g = typeof f.item == "function" || typeof f.item == "string";
                break a
              }
              if (typeof f === "function") {
                g = typeof f.item == "function";
                break a
              }
            }
            g = !1
          }
          D(g ? Da(f) : f, d)
        }
      }
    };

  function bc(a, b, c) {
    typeof a.addEventListener === "function" && a.addEventListener(b, c, !1)
  };

  function cc(a) {
    a = a === void 0 ? x : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b) try {
      b = a.parent.context || a.parent.AMP_CONTEXT_DATA
    } catch (e) {}
    var c, d;
    return ((c = b) == null ? 0 : c.pageViewId) && ((d = b) == null ? 0 : d.canonicalUrl) ? b : null
  };
  var dc = function() {
      this.S = {}
    },
    ec = function() {
      var a = cc(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          Xa(a) && (b += a.replace(/\D/g, "").substring(0, 6))
        } else b = null;
        return +b
      }
      for (a = b = window; b && b !== b.parent;) b = b.parent, Pb(b) && (a = b);
      b = a;
      a = b.google_global_correlator;
      a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * 8796093022208));
      return a
    },
    hc = function(a, b) {
      var c = fc[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      return d === void 0 ? (a[c] = b(), a[c]) : d
    },
    ic = function(a) {
      var b = ec();
      return hc(a, function() {
        return b
      })
    },
    jc = null,
    kc = {},
    fc = (kc[8] = "google_prev_ad_formats_by_region", kc[9] = "google_prev_ad_slotnames_by_region", kc);
  var lc = function(a, b) {
    var c = c === void 0 ? {} : c;
    this.error = a;
    this.meta = c;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror"
  };
  var mc = ma(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    nc = function() {
      var a = a === void 0 ? "jserror" : a;
      var b = b === void 0 ? .01 : b;
      var c = c === void 0 ? Fb(mc) : c;
      this.g = a;
      this.j = b;
      this.i = c
    };

  function oc(a) {
    var b;
    a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b
  };
  var pc = null;

  function qc() {
    var a = a === void 0 ? x : a;
    return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
  }

  function rc() {
    var a = a === void 0 ? x : a;
    return (a = a.performance) && a.now ? a.now() : null
  };
  var sc = function(a, b) {
    var c = rc() || qc();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random()
  };
  var I = x.performance,
    tc = !!(I && I.mark && I.measure && I.clearMarks),
    uc = function(a) {
      var b = !1,
        c;
      return function() {
        b || (c = a(), b = !0);
        return c
      }
    }(function() {
      var a;
      if (a = tc) {
        var b = b === void 0 ? window : b;
        if (pc === null) {
          pc = "";
          try {
            a = "";
            try {
              a = b.top.location.hash
            } catch (d) {
              a = b.location.hash
            }
            if (a) {
              var c = a.match(/\bdeid=([\d,]+)/);
              pc = c ? c[1] : ""
            }
          } catch (d) {}
        }
        b = pc;
        a = !!b.indexOf && b.indexOf("1337") >= 0
      }
      return a
    }),
    J = function(a, b) {
      this.j = [];
      this.g = b || x;
      var c = null;
      b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], c = b.google_js_reporting_queue, Oa(c, Va), this.j = c, c = b.google_measure_js_timing);
      this.u = uc() || (c != null ? c : Math.random() < a)
    };
  J.prototype.A = function() {
    this.u = !1;
    this.j !== this.g.google_js_reporting_queue && (uc() && D(this.j, vc), this.j.length = 0)
  };
  J.prototype.F = function(a) {
    !this.u || this.j.length > 2048 || this.j.push(a)
  };
  var vc = function(a) {
    a && I && uc() && (I.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), I.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
  };
  J.prototype.start = function(a, b) {
    if (!this.u) return null;
    a = new sc(a, b);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    I && uc() && I.mark(b);
    return a
  };
  J.prototype.end = function(a) {
    if (this.u && (B(a), Wa(a.value))) {
      a.duration = (rc() || qc()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      I && uc() && I.mark(b);
      this.F(a)
    }
  };

  function wc(a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return a.pq = a.pq || []
  };

  function xc(a, b, c) {
    Rb(b, function(d, e) {
      var f = c && c[e];
      !d && d !== 0 || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
    });
    return a
  }
  var Ac = function(a, b, c, d, e, f, g, h) {
    f = f === void 0 ? Infinity : f;
    g = g === void 0 ? !1 : g;
    J.call(this, a, h);
    var k = this;
    this.N = b;
    this.domain = c;
    this.path = d;
    this.P = e;
    this.o = 0;
    this.v = {};
    this.D = {};
    this.O = [];
    this.l = {};
    this.i = 0;
    this.B = [];
    this.G = f;
    a = this.g.navigator;
    this.L = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
    this.g.performance && this.g.performance.now || K(this, "dat", 1);
    a && a.deviceMemory && K(this, "dmc", a.deviceMemory);
    this.g === this.g.top && K(this, "top", 1);
    this.U = !g;
    this.I = function() {
      k.g.setTimeout(function() {
        L(k)
      }, 1100)
    };
    this.K = function() {
      for (var m = u(k.O), p = m.next(); !p.done; p = m.next()) {
        p = p.value;
        try {
          p()
        } catch (H) {}
      }
      m = k.g;
      var t = t === void 0 ? {} : t;
      typeof window.CustomEvent === "function" ? p = new CustomEvent("rum_blp", t) : (p = document.createEvent("CustomEvent"), p.initCustomEvent("rum_blp", !!t.bubbles, !!t.cancelable, t.detail));
      m.dispatchEvent(p);
      L(k)
    };
    this.V = Qb(function() {
      L(k)
    });
    this.W = function() {
      var m = k.g.document;
      (m.hidden != null ? m.hidden : m.mozHidden != null ? m.mozHidden : m.webkitHidden != null && m.webkitHidden) && k.V()
    };
    this.C = this.g.setTimeout(function() {
      L(k)
    }, 5E3);
    this.m = b.length + c.length + d.length + e.length + 3;
    D(this.j, function(m) {
      yc(k, m)
    });
    b = wc(this.g);
    var l = function() {
      var m = na.apply(0, arguments)[0];
      Oa(m, Za());
      Sa(m.length === 2);
      var p = m[0];
      m = m[1];
      var t = p.length + m.length + 2;
      k.m + k.i + t > 8E3 && L(k);
      k.B.push([p, m]);
      k.i += t;
      k.m + k.i >= 6E3 && L(k);
      return 0
    };
    D(b, function(m) {
      return l(m)
    });
    b.length = 0;
    b.push = l;
    K(this, "puid", (this.o + 1).toString(36) + "~" + Date.now().toString(36));
    zc(this)
  };
  ja(Ac, J);
  var zc = function(a) {
      a.g.document.readyState === "complete" ? a.g.setTimeout(function() {
        L(a)
      }, 0) : bc(a.g, "load", a.I);
      var b = oc(a.g.document);
      typeof b !== "undefined" && bc(a.g, b, a.W);
      bc(a.g, "pagehide", a.K)
    },
    K = function(a, b, c) {
      c = String(c);
      a.m = a.v[b] != null ? a.m + (c.length - a.v[b].length) : a.m + (b.length + c.length + 2);
      a.v[b] = c
    },
    Cc = function(a, b, c) {
      var d = b + "=" + c;
      a.D[d] || (Bc(a, b, c, !1), d.length < 1E3 && (a.D[d] = !0))
    },
    Bc = function(a, b, c, d, e) {
      e = e === void 0 ? "" : e;
      var f = a.l[b] == null ? b.length + c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a.l[b].length;
      a.m + a.i + f > 8E3 && (L(a), f = b.length + c.length + 2);
      a.l[b] = d && a.l[b] != null ? a.l[b] + ("" + (e === void 0 ? "" : e) + c) : c;
      a.i += f;
      a.m + a.i >= 6E3 && L(a)
    },
    L = function(a) {
      if (a.u && a.U) {
        try {
          a.i && (a.sendBeacon(a.l), a.o === a.G && a.A())
        } catch (f) {
          var b = new nc,
            c = f;
          var d = d === void 0 ? b.j : d;
          var e = e === void 0 ? b.g : e;
          Math.random() > d || (c.error && c.meta && c.id || (c = new lc(c, {
            context: 358,
            id: e
          })), x.google_js_errors = x.google_js_errors || [], x.google_js_errors.push(c), x.error_rep_loaded || (d = x.document, c = Sb("SCRIPT", d), Hb(c, b.i), (b = d.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(c, b), x.error_rep_loaded = !0))
        }
        a.l = {};
        a.i = 0;
        a.j.length = 0;
        a.g.clearTimeout(a.C);
        a.C = 0
      }
    },
    Dc = function(a, b) {
      Sa(a.path.split("?").length === 2);
      Sa(a.path[a.path.length - 1] === "=");
      var c = a.N + "//" + a.domain + a.path + a.P,
        d = {};
      c = xc(c, a.v, d);
      c = xc(c, b, d);
      b = a.g;
      b.google_timing_params && (c = xc(c, b.google_timing_params, d), b.google_timing_params = void 0);
      D(a.B, function(e) {
        Sa(e.length === 2);
        var f = u(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = xc(c, (g[e] = f, g))
      });
      a.B.length = 0;
      return c
    };
  Ac.prototype.sendBeacon = function(a) {
    this.o++;
    a = Dc(this, a);
    var b = !1;
    try {
      b = !!(this.L && this.g.navigator && this.g.navigator.sendBeacon(a, null))
    } catch (d) {
      this.L = !1
    }
    if (!b) {
      b = this.g;
      b.google_image_requests || (b.google_image_requests = []);
      var c = Sb("IMG", b.document);
      c.src = a;
      b.google_image_requests.push(c)
    }
    K(this, "puid", (this.o + 1).toString(36) + "~" + Date.now().toString(36))
  };
  var yc = function(a, b) {
    var c = "met." + b.type,
      d = Wa(b.value) ? Math.round(b.value).toString(36) : b.value,
      e = Math.round(b.duration);
    b = "" + b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (e > 0 ? "_" + e.toString(36) : "") + (b.taskId != null ? "__" + Math.round(b.taskId).toString(36) : "");
    Bc(a, c, b, !0, "~")
  };
  Ac.prototype.F = function(a) {
    this.u && this.o < this.G && (J.prototype.F.call(this, a), yc(this, a))
  };
  Ac.prototype.A = function() {
    J.prototype.A.call(this);
    this.g.clearTimeout(this.C);
    this.i = this.C = 0;
    this.l = {};
    Vb(this.D);
    Vb(this.v);
    var a = this.g;
    typeof a.removeEventListener === "function" && a.removeEventListener("load", this.I, !1);
    a = this.g;
    typeof a.removeEventListener === "function" && a.removeEventListener("pagehide", this.K, !1)
  };
  var Ec = [];
  var M = function() {
      this.g = new Ac(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
      if (jc) var a = jc;
      else {
        a = ((a = a === void 0 ? cc() : a) ? Pb(a.master) ? a.master : null : null) || window;
        var b = a.google_persistent_state_async;
        a = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? jc = b : a.google_persistent_state_async = jc = new dc
      }
      a = ic(a);
      a != null && K(this.g, "c", a);
      a = Math.floor(Number(this.g.v.c) / 2);
      a != null && K(this.g, "slotId", a);
      a = Nb;
      Mb || (Mb = new Lb);
      a(Mb, "google3.javascript.ads.imalib.instrumentation.instrumentation")
    },
    Fc = function() {
      B(!Object.isSealed(M), "Cannot use getInstance() with a sealed constructor.");
      var a = "Y";
      if (M.Y && M.hasOwnProperty(a)) a = M.Y;
      else {
        Ec.push(M);
        var b = new M;
        M.Y = b;
        B(M.hasOwnProperty(a), "Could not instantiate singleton.");
        a = b
      }
      return a
    };

  function Gc(a, b) {
    if (typeof ReportingObserver !== "undefined") {
      var c = function(e) {
          e = u(e);
          for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
        },
        d = new ReportingObserver(c, {
          buffered: !0
        });
      x.addEventListener("pagehide", function() {
        c(d.takeRecords(), d);
        d.disconnect()
      });
      d.observe()
    }
  }

  function Hc(a) {
    Gc(function(b) {
      return b.body && b.body.id === "HeavyAdIntervention"
    }, a)
  }

  function Ic(a) {
    Hc(function(b) {
      b = b.body.message;
      b.includes("CPU") ? a("heavy_ad_intervention_cpu") : b.includes("network") && a("heavy_ad_intervention_network")
    })
  }

  function Jc(a) {
    a = a === void 0 ? null : a;
    Gc(function(b) {
      return b.body && b.body.id === "HeavyAdIntervention"
    }, function(b) {
      var c = b.body.message,
        d = Fc();
      c != null && Cc(d.g, "ham", c);
      c.includes("CPU") ? Cc(d.g, "hacpu", "true") : c.includes("network") && Cc(d.g, "habytes", "true");
      a && a(b)
    })
  };
  var Kc = {
    oa: "collapseAd",
    qa: "expandAd",
    ta: "getAdIcons",
    ua: "getAdCompanions",
    va: "getAdDuration",
    wa: "getAdExpanded",
    xa: "getAdHeight",
    ya: "getAdLinear",
    za: "getAdRemainingTime",
    Aa: "getAdSkippableState",
    Ba: "getAdVolume",
    Ca: "getAdWidth",
    Da: "handshakeVersion",
    INIT: "initAd",
    Na: "pauseAd",
    Oa: "resizeAd",
    Pa: "resumeAd",
    Ra: "skipAd",
    Sa: "startAd",
    Qa: "setAdVolume",
    Ta: "stopAd",
    Va: "subscribe",
    Xa: "unsubscribe"
  };
  var Lc = function(a, b, c) {
      this.m = a;
      this.g = b;
      this.l = c;
      this.j = !1;
      this.i = new Map
    },
    Mc = function(a) {
      a.subscribe(a.aa, "AdClickThru");
      a.subscribe(a.ba, "AdDurationChange");
      a.subscribe(a.ca, "AdError");
      a.subscribe(a.da, "AdExpandedChange");
      a.subscribe(function() {
        return N(a, "AdImpression")
      }, "AdImpression");
      a.subscribe(a.ea, "AdInteraction");
      a.subscribe(a.fa, "AdLinearChange");
      a.subscribe(a.ga, "AdLoaded");
      a.subscribe(a.ha, "AdLog");
      a.subscribe(function() {
        return N(a, "AdPaused")
      }, "AdPaused");
      a.subscribe(function() {
        return N(a, "AdPlaying")
      }, "AdPlaying");
      a.subscribe(a.ia, "AdRemainingTimeChange");
      a.subscribe(function() {
        return N(a, "AdSizeChange")
      }, "AdSizeChange");
      a.subscribe(function() {
        return N(a, "AdSkipped")
      }, "AdSkipped");
      a.subscribe(function() {
        return N(a, "AdStarted")
      }, "AdStarted");
      a.subscribe(a.ja, "AdStopped");
      a.subscribe(function() {
        return N(a, "AdSkippableStateChange")
      }, "AdSkippableStateChange");
      a.subscribe(function() {
        return N(a, "AdUserAcceptInvitation")
      }, "AdUserAcceptInvitation");
      a.subscribe(function() {
        return N(a, "AdUserClose")
      }, "AdUserClose");
      a.subscribe(function() {
        return N(a, "AdUserMinimize")
      }, "AdUserMinimize");
      a.subscribe(function() {
        return N(a, "AdVideoComplete")
      }, "AdVideoComplete");
      a.subscribe(function() {
        return N(a, "AdVideoFirstQuartile")
      }, "AdVideoFirstQuartile");
      a.subscribe(function() {
        return N(a, "AdVideoMidpoint")
      }, "AdVideoMidpoint");
      a.subscribe(function() {
        return N(a, "AdVideoStart")
      }, "AdVideoStart");
      a.subscribe(function() {
        return N(a, "AdVideoThirdQuartile")
      }, "AdVideoThirdQuartile");
      a.subscribe(a.ka, "AdVolumeChange");
      a.subscribe(a.na, "Ping")
    };
  n = Lc.prototype;
  n.aa = function(a, b, c) {
    var d = null;
    /^[\s\xa0]*$/.test(Ob(a)) ? /^[\s\xa0]*$/.test(Ob(this.l)) || (d = this.l) : d = a;
    if (c && d != null && (a = d, !/^[\s\xa0]*$/.test(Ob(a)))) {
      var e;
      a instanceof G || !Gb.test(a) ? e = a : e = new G(a);
      if (e instanceof G) var f = e;
      else {
        f = f === void 0 ? Ab : f;
        a: if (f = f === void 0 ? Ab : f, a instanceof G) f = a;
          else {
            for (e = 0; e < f.length; ++e)
              if (c = f[e], c instanceof yb && c.la(a)) {
                f = new G(a);
                break a
              } f = void 0
          } f === void 0 && Db(a.toString());
        f = f || xb
      }
      a = window;
      if (f instanceof G)
        if (f instanceof G) f = f.g;
        else throw Error("Unexpected type when unwrapping SafeUrl, got '" + f + "' of type '" + typeof f + "'");
      else(e = !Bb.test(f)) && Db(f), f = e ? void 0 : f;
      f !== void 0 && a.open(f, "_blank", void 0)
    }
    N(this, "AdClickThru", {
      url: d,
      id: b
    })
  };
  n.ba = function() {
    var a = this.g.getAdDuration(),
      b = this.g.getAdRemainingTime();
    N(this, "AdDurationChange", {
      duration: a,
      remainingTime: b
    })
  };
  n.ca = function(a) {
    N(this, "AdError", {
      message: a
    })
  };
  n.da = function() {
    var a = {};
    a.expanded = this.g.getAdExpanded();
    N(this, "AdExpandedChange", a)
  };
  n.ea = function(a) {
    N(this, "AdInteraction", {
      id: a
    })
  };
  n.fa = function() {
    var a = {};
    a.isLinear = this.g.getAdLinear();
    N(this, "AdLinearChange", a)
  };
  n.ga = function() {
    var a = {
      companions: typeof this.g.getAdCompanions === "function" ? this.g.getAdCompanions() : ""
    };
    N(this, "AdLoaded", a)
  };
  n.ha = function(a) {
    N(this, "AdLog", {
      message: a
    })
  };
  n.ia = function() {
    var a = {
      remainingTime: this.g.getAdRemainingTime()
    };
    N(this, "AdRemainingTimeChange", a)
  };
  n.ja = function() {
    for (var a = u(this.i), b = a.next(); !b.done; b = a.next()) {
      var c = u(b.value);
      b = c.next().value;
      c = c.next().value;
      if (this.g) {
        try {
          this.g.unsubscribe(c, b)
        } catch (d) {}
        try {
          this.g.unsubscribe(b, c)
        } catch (d) {}
      }
    }
    this.i.clear();
    N(this, "AdStopped");
    this.j = !0
  };
  n.ka = function() {
    var a = {
      volume: this.g.getAdVolume()
    };
    N(this, "AdVolumeChange", a)
  };
  n.na = function(a) {
    N(this, "Ping", {
      url: a
    })
  };
  n.subscribe = function(a, b) {
    this.i.set(b, a.bind(this));
    this.g.subscribe(a.bind(this), b)
  };
  var N = function(a, b, c) {
    c = c === void 0 ? {} : c;
    a.j || (a = {
      type: b,
      session: a.m
    }, Xb(a, c), window.parent !== window && window.parent.postMessage(JSON.stringify(a), "*"))
  };

  function Nc(a) {
    a && typeof a.dispose == "function" && a.dispose()
  };

  function O() {
    this.C = this.C;
    this.v = this.v
  }
  O.prototype.C = !1;
  O.prototype.dispose = function() {
    this.C || (this.C = !0, this.u())
  };
  O.prototype[Symbol.dispose] = function() {
    this.dispose()
  };
  O.prototype.u = function() {
    if (this.v)
      for (; this.v.length;) this.v.shift()()
  };
  var P = function(a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = !1
  };
  P.prototype.i = function() {
    this.defaultPrevented = !0
  };

  function Q(a, b) {
    P.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.j = null;
    a && this.init(a, b)
  }
  z(Q, P);
  Q.prototype.init = function(a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b;
    b = a.relatedTarget;
    b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
    this.relatedTarget = b;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = a.pointerType;
    this.state = a.state;
    this.j = a;
    a.defaultPrevented && Q.J.i.call(this)
  };
  Q.prototype.i = function() {
    Q.J.i.call(this);
    var a = this.j;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  };
  var Oc = "closure_listenable_" + (Math.random() * 1E6 | 0);
  var Pc = 0;

  function Qc(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.handler = e;
    this.key = ++Pc;
    this.M = this.R = !1
  }
  var Rc = function(a) {
    a.M = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.handler = null
  };

  function Sc(a) {
    this.src = a;
    this.g = {};
    this.i = 0
  }
  Sc.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.i++);
    var g = Tc(a, b, d, e);
    g > -1 ? (b = a[g], c || (b.R = !1)) : (b = new Qc(b, this.src, f, !!d, e), b.R = c, a.push(b));
    return b
  };
  var Uc = function(a, b) {
      var c = b.type;
      if (c in a.g) {
        var d = a.g[c],
          e = Aa(d, b),
          f;
        if (f = e >= 0) B(d.length != null), Array.prototype.splice.call(d, e, 1);
        f && (Rc(b), a.g[c].length == 0 && (delete a.g[c], a.i--))
      }
    },
    Tc = function(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.M && f.listener == b && f.capture == !!c && f.handler == d) return e
      }
      return -1
    };
  var Vc = "closure_lm_" + (Math.random() * 1E6 | 0),
    Wc = {},
    Xc = 0,
    Zc = function(a, b, c, d, e) {
      if (d && d.once) return Yc(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Zc(a, b[f], c, d, e);
        return null
      }
      c = $c(c);
      return a && a[Oc] ? a.listen(b, c, y(d) ? !!d.capture : !!d, e) : ad(a, b, c, !1, d, e)
    },
    ad = function(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = y(e) ? !!e.capture : !!e,
        h = bd(a);
      h || (a[Vc] = h = new Sc(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = cd();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Tb || (e = g), e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(dd(b.toString()), d);
      else if (a.addListener && a.removeListener) B(b === "change", "MediaQueryList only has a change event"), a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Xc++;
      return c
    },
    cd = function() {
      var a = ed,
        b = function(c) {
          return a.call(b.src, b.listener, c)
        };
      return b
    },
    Yc = function(a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Yc(a, b[f], c, d, e);
        return null
      }
      c = $c(c);
      return a && a[Oc] ? a.g.add(String(b), c, !0, y(d) ? !!d.capture : !!d, e) : ad(a, b, c, !0, d, e)
    },
    fd = function(a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) fd(a, b[f], c, d, e);
      else(d = y(d) ? !!d.capture : !!d, c = $c(c), a && a[Oc]) ? (a = a.g, b = String(b).toString(), b in a.g && (f = a.g[b], c = Tc(f, c, d, e), c > -1 && (Rc(f[c]), B(f.length != null), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.g[b], a.i--)))) : a && (a = bd(a)) && (b = a.g[b.toString()], a = -1, b && (a = Tc(b, c, d, e)), (c = a > -1 ? b[a] : null) && gd(c))
    },
    gd = function(a) {
      if (typeof a !== "number" && a && !a.M) {
        var b = a.src;
        if (b && b[Oc]) Uc(b.g, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(dd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          Xc--;
          (c = bd(b)) ? (Uc(c, a), c.i == 0 && (c.src = null, b[Vc] = null)) : Rc(a)
        }
      }
    },
    dd = function(a) {
      return a in Wc ? Wc[a] : Wc[a] = "on" + a
    },
    ed = function(a, b) {
      if (a.M) a = !0;
      else {
        b = new Q(b, this);
        var c = a.listener,
          d = a.handler || a.src;
        a.R && gd(a);
        a = c.call(d, b)
      }
      return a
    },
    bd = function(a) {
      a = a[Vc];
      return a instanceof Sc ? a : null
    },
    hd = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0),
    $c = function(a) {
      B(a, "Listener can not be null.");
      if (typeof a === "function") return a;
      B(a.handleEvent, "An object listener must have handleEvent method.");
      a[hd] || (a[hd] = function(b) {
        return a.handleEvent(b)
      });
      return a[hd]
    };

  function R() {
    O.call(this);
    this.g = new Sc(this);
    this.G = this;
    this.m = null
  }
  z(R, O);
  R.prototype[Oc] = !0;
  R.prototype.addEventListener = function(a, b, c, d) {
    Zc(this, a, b, c, d)
  };
  R.prototype.removeEventListener = function(a, b, c, d) {
    fd(this, a, b, c, d)
  };
  var kd = function(a, b) {
    id(a);
    var c = a.m;
    if (c) {
      var d = [];
      for (var e = 1; c; c = c.m) d.push(c), B(++e < 1E3, "infinite loop")
    }
    a = a.G;
    c = b.type || b;
    typeof b === "string" ? b = new P(b, a) : b instanceof P ? b.target = b.target || a : (e = b, b = new P(c, a), Xb(b, e));
    e = !0;
    var f;
    if (d)
      for (f = d.length - 1; f >= 0; f--) {
        var g = b.g = d[f];
        e = jd(g, c, !0, b) && e
      }
    g = b.g = a;
    e = jd(g, c, !0, b) && e;
    e = jd(g, c, !1, b) && e;
    if (d)
      for (f = 0; f < d.length; f++) g = b.g = d[f], e = jd(g, c, !1, b) && e
  };
  R.prototype.u = function() {
    R.J.u.call(this);
    if (this.g) {
      var a = this.g,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Rc(d[e]);
        delete a.g[c];
        a.i--
      }
    }
    this.m = null
  };
  R.prototype.listen = function(a, b, c, d) {
    id(this);
    return this.g.add(String(a), b, !1, c, d)
  };
  var jd = function(a, b, c, d) {
      b = a.g.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.M && g.capture == c) {
          var h = g.listener,
            k = g.handler || g.src;
          g.R && Uc(a.g, g);
          e = h.call(k, d) !== !1 && e
        }
      }
      return e && !d.defaultPrevented
    },
    id = function(a) {
      B(a.g, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
  var S = function() {
    R.call(this);
    this.duration = this.currentTime = 0;
    this.type = this.src = "";
    this.playbackRate = 1;
    this.ended = !1;
    this.paused = !0;
    this.o = [];
    this.i = "";
    this.j = this.l = null
  };
  ja(S, R);
  S.prototype.load = function() {
    ld({
      type: "videoCall",
      func: "load",
      src: this.src,
      mimetype: this.type,
      session: this.i
    })
  };
  S.prototype.D = function() {
    var a = this;
    this.paused = !1;
    ld({
      type: "videoCall",
      func: "play",
      src: this.src,
      mimetype: this.type,
      session: this.i
    });
    return new Promise(function(b, c) {
      a.l = b;
      a.j = c
    })
  };
  S.prototype.B = function() {
    this.paused = !0;
    ld({
      type: "videoCall",
      func: "pause",
      session: this.i
    })
  };
  var ld = function(a) {
    window.parent !== window && window.parent.postMessage(JSON.stringify(a), "*")
  };
  S.prototype.A = function(a) {
    return this.o.includes(a) ? "maybe" : ""
  };
  S.prototype.F = function(a, b) {
    switch (a) {
      case "currentTime":
        if (typeof b !== "number") break;
        this.currentTime = b;
        ld({
          type: "videoCall",
          func: "currentTime",
          currentTime: b,
          session: this.i
        });
        break;
      case "src":
        this.src = b;
        break;
      case "type":
        this.type = b
    }
  };
  S.prototype.removeEventListener = function(a, b, c, d) {
    b != null && fd(this, a, b, c, d)
  };
  S.prototype.removeEventListener = S.prototype.removeEventListener;
  S.prototype.addEventListener = S.prototype.addEventListener;
  S.prototype.canPlayType = S.prototype.A;
  S.prototype.load = S.prototype.load;
  S.prototype.pause = S.prototype.B;
  S.prototype.play = S.prototype.D;
  S.prototype.setAttribute = S.prototype.F;

  function T(a) {
    O.call(this);
    this.V = a;
    this.B = {}
  }
  z(T, O);
  var md = [];
  T.prototype.listen = function(a, b, c, d) {
    Array.isArray(b) || (b && (md[0] = b.toString()), b = md);
    for (var e = 0; e < b.length; e++) {
      var f = Zc(a, b[e], c || this.handleEvent, d || !1, this.V || this);
      if (!f) break;
      this.B[f.key] = f
    }
    return this
  };
  var nd = function(a) {
    Ub(a.B, function(b, c) {
      this.B.hasOwnProperty(c) && gd(b)
    }, a);
    a.B = {}
  };
  T.prototype.u = function() {
    T.J.u.call(this);
    nd(this)
  };
  T.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };

  function U(a, b) {
    R.call(this);
    this.l = a || 1;
    this.j = b || x;
    this.o = ua(this.B, this);
    this.A = Date.now()
  }
  z(U, R);
  U.prototype.enabled = !1;
  U.prototype.i = null;
  U.prototype.B = function() {
    if (this.enabled) {
      var a = Date.now() - this.A;
      a > 0 && a < this.l * .8 ? this.i = this.j.setTimeout(this.o, this.l - a) : (this.i && (this.j.clearTimeout(this.i), this.i = null), kd(this, "tick"), this.enabled && (od(this), this.start()))
    }
  };
  U.prototype.start = function() {
    this.enabled = !0;
    this.i || (this.i = this.j.setTimeout(this.o, this.l), this.A = Date.now())
  };
  var od = function(a) {
    a.enabled = !1;
    a.i && (a.j.clearTimeout(a.i), a.i = null)
  };
  U.prototype.u = function() {
    U.J.u.call(this);
    od(this);
    delete this.j
  };
  var pd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

  function qd(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (d >= 0) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1)
        } else f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
      }
    }
  };

  function rd(a) {
    this.i = this.v = this.l = "";
    this.o = null;
    this.u = this.g = "";
    this.m = !1;
    var b;
    a instanceof rd ? (this.m = a.m, sd(this, a.l), this.v = a.v, this.i = a.i, td(this, a.o), this.g = a.g, ud(this, vd(a.j)), this.u = a.u) : a && (b = String(a).match(pd)) ? (this.m = !1, sd(this, b[1] || "", !0), this.v = V(b[2] || ""), this.i = V(b[3] || "", !0), td(this, b[4]), this.g = V(b[5] || "", !0), ud(this, b[6] || "", !0), this.u = V(b[7] || "")) : (this.m = !1, this.j = new W(null, this.m))
  }
  rd.prototype.toString = function() {
    var a = [],
      b = this.l;
    b && a.push(wd(b, xd, !0), ":");
    var c = this.i;
    if (c || b == "file") a.push("//"), (b = this.v) && a.push(wd(b, xd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.o, c != null && a.push(":", String(c));
    if (c = this.g) this.i && c.charAt(0) != "/" && a.push("/"), a.push(wd(c, c.charAt(0) == "/" ? yd : zd, !0));
    (c = this.j.toString()) && a.push("?", c);
    (c = this.u) && a.push("#", wd(c, Ad));
    return a.join("")
  };
  rd.prototype.resolve = function(a) {
    var b = new rd(this),
      c = !!a.l;
    c ? sd(b, a.l) : c = !!a.v;
    c ? b.v = a.v : c = !!a.i;
    c ? b.i = a.i : c = a.o != null;
    var d = a.g;
    if (c) td(b, a.o);
    else if (c = !!a.g) {
      if (d.charAt(0) != "/")
        if (this.i && !this.g) d = "/" + d;
        else {
          var e = b.g.lastIndexOf("/");
          e != -1 && (d = b.g.slice(0, e + 1) + d)
        } e = d;
      if (e == ".." || e == ".") d = "";
      else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
        d = e.lastIndexOf("/", 0) == 0;
        e = e.split("/");
        for (var f = [], g = 0; g < e.length;) {
          var h = e[g++];
          h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
        }
        d = f.join("/")
      } else d = e
    }
    c ? b.g = d : c = a.j.toString() !== "";
    c ? ud(b, vd(a.j)) : c = !!a.u;
    c && (b.u = a.u);
    return b
  };
  var sd = function(a, b, c) {
      a.l = c ? V(b, !0) : b;
      a.l && (a.l = a.l.replace(/:$/, ""))
    },
    td = function(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
        a.o = b
      } else a.o = null
    },
    ud = function(a, b, c) {
      b instanceof W ? (a.j = b, Bd(a.j, a.m)) : (c || (b = wd(b, Cd)), a.j = new W(b, a.m))
    },
    Dd = function() {
      var a = new rd(window.location.href);
      return V(a.j.toString())
    },
    V = function(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    },
    wd = function(a, b, c) {
      return typeof a === "string" ? (a = encodeURI(a).replace(b, Ed), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    },
    Ed = function(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    xd = /[#\/\?@]/g,
    zd = /[#\?:]/g,
    yd = /[#\?]/g,
    Cd = /[#\?@]/g,
    Ad = /#/g,
    W = function(a, b) {
      this.i = this.g = null;
      this.j = a || null;
      this.l = !!b
    },
    X = function(a) {
      a.g || (a.g = new Map, a.i = 0, a.j && qd(a.j, function(b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      }))
    };
  W.prototype.add = function(a, b) {
    X(this);
    this.j = null;
    a = Y(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.i = C(this.i) + 1;
    return this
  };
  var Fd = function(a, b) {
    X(a);
    b = Y(a, b);
    a.g.has(b) && (a.j = null, a.i = C(a.i) - a.g.get(b).length, a.g.delete(b))
  };
  W.prototype.clear = function() {
    this.g = this.j = null;
    this.i = 0
  };
  var Gd = function(a, b) {
    X(a);
    b = Y(a, b);
    return a.g.has(b)
  };
  W.prototype.forEach = function(a, b) {
    X(this);
    this.g.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  var Hd = function(a, b) {
    X(a);
    var c = [];
    if (typeof b === "string") Gd(a, b) && (c = c.concat(a.g.get(Y(a, b))));
    else
      for (a = Array.from(a.g.values()), b = 0; b < a.length; b++) c = c.concat(a[b]);
    return c
  };
  W.prototype.set = function(a, b) {
    X(this);
    this.j = null;
    a = Y(this, a);
    Gd(this, a) && (this.i = C(this.i) - this.g.get(a).length);
    this.g.set(a, [b]);
    this.i = C(this.i) + 1;
    return this
  };
  W.prototype.get = function(a, b) {
    if (!a) return b;
    a = Hd(this, a);
    return a.length > 0 ? String(a[0]) : b
  };
  W.prototype.toString = function() {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = Hd(this, d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    }
    return this.j = a.join("&")
  };
  var vd = function(a) {
      var b = new W;
      b.j = a.j;
      a.g && (b.g = new Map(a.g), b.i = a.i);
      return b
    },
    Y = function(a, b) {
      b = String(b);
      a.l && (b = b.toLowerCase());
      return b
    },
    Bd = function(a, b) {
      b && !a.l && (X(a), a.j = null, a.g.forEach(function(c, d) {
        var e = d.toLowerCase();
        d != e && (Fd(this, d), Fd(this, e), c.length > 0 && (this.j = null, this.g.set(Y(this, e), Da(c)), this.i = C(this.i) + c.length))
      }, a));
      a.l = b
    };

  function Id(a) {
    a = a === null ? "null" : a === void 0 ? "undefined" : a;
    if (typeof a !== "string") throw Error("Expected a string");
    return wb(a)
  };
  var Z = function(a, b) {
    a = a === void 0 ? !1 : a;
    b = b === void 0 ? null : b;
    T.call(this);
    this.U = a;
    this.g = null;
    this.o = this.I = this.F = "";
    this.i = this.l = this.P = null;
    this.O = [];
    this.K = "";
    this.width = this.height = 0;
    this.A = null;
    this.N = -2;
    this.D = new S;
    (this.j = b != null) ? this.listen(window.parent, "message", this.G): this.listen(window, "message", this.G);
    b != null && (this.j = !0, this.o = b, Jd(this, "friendlyReady"))
  };
  ja(Z, T);
  Z.prototype.W = function(a, b) {
    this.l = a;
    this.i = b
  };
  var Kd = function(a, b) {
      Ic(function(d) {
        var e = {};
        d = (e.heavyAdInterventionEventType = d, e);
        Jd(a, "heavyAdIntervention", d)
      });
      Jc(function(d) {
        a.m(Error(d.body.message));
        d = Fc();
        Cc(d.g, "havl", "1")
      });
      a.K = b.clickThroughUrl;
      a.F = b.viewMode;
      a.N = b.desiredBitrate;
      a.I = b.creativeData;
      if (a.U) a.L();
      else {
        var c = a.j ? b.adUrl : Dd();
        a.j && a.l && (a.l.volume = b.volume);
        b = ac("SCRIPT", {
          type: "text/javascript"
        });
        Hb(b, Id(c));
        a.listen(b, "load", a.L);
        a.listen(b, "error", a.m);
        window.document.body.appendChild(b)
      }
    },
    Jd = function(a, b, c) {
      c = c === void 0 ? {} : c;
      window.parent !== window && (c.type = b, c.session = a.o, a = JSON.stringify(c), window.parent.postMessage(a, "*"))
    };
  Z.prototype.G = function(a) {
    try {
      var b = JSON.parse(a.j.data)
    } catch (e) {
      return
    }
    a = b.type;
    var c = b.session;
    if (!this.j && a === "initAd") this.o = c, this.D.i = this.o;
    else if (this.o !== c) return;
    switch (a) {
      case "wrapperCall":
        a: {
          var d = this.D;a = b.messageType;
          switch (a) {
            case "ended":
              d.ended = !0;
              break;
            case "pause":
              d.paused = !0;
              break;
            case "play":
              d.paused = !1;
              d.ended = !1;
              break;
            case "playing":
              d.l != null && (d.l(), d.j = null, d.l = null);
              d.paused = !1;
              d.ended = !1;
              break;
            case "supportedMimeTypes":
              d.o = b.supportedMimeTypes;
              break a;
            case "timeupdate":
              d.duration = b.duration;
              d.currentTime = b.currentTime;
              break;
            case "loadedmetadata":
              d.duration = b.duration;
              break;
            case "autoplayDisallowed":
              d.j != null && (d.j(), d.j = null, d.l = null)
          }
          kd(d, {
            type: a
          })
        }
        break;
      case "initAd":
        Kd(this, b);
        break;
      case "getAdDuration":
        Ld(this, "getAdDuration", "returnDuration", "duration");
        break;
      case "getAdRemainingTime":
        Ld(this, "getAdRemainingTime", "returnRemainingTime", "remainingTime");
        break;
      case "setAdVolume":
        this.g != null && this.g.setAdVolume(b.value);
        break;
      case "resizeAd":
        d = b.width;
        a = b.height;
        b = b.viewMode;
        this.l && this.l.style && (this.l.style.width = d + "px", this.l.style.height = a + "px");
        this.i && this.i.style && (this.height = a, this.width = d, this.i.style.height = a + "px", this.i.style.width = d + "px");
        if (this.g != null) try {
          this.g.resizeAd(d, a, b)
        } catch (e) {
          this.m(e)
        }
        break;
      case "friendlyReady":
        break;
      default:
        if (this.g) {
          if (typeof((d = this.g) == null ? void 0 : d[a]) === "function") this.g[a]()
        } else this.O.push(a)
    }
  };
  Z.prototype.Z = function() {
    this.width = Md(this);
    this.height = Nd(this);
    if (this.width !== 0 && this.height !== 0) {
      this.i.style.height = this.height + "px";
      this.i.style.width = this.width + "px";
      try {
        var a;
        (a = this.g) == null || a.resizeAd(this.width, this.height, this.F)
      } catch (c) {
        this.m(c)
      }
      var b;
      (b = this.A) == null || od(b)
    }
  };
  Z.prototype.m = function(a) {
    a = a === void 0 ? null : a;
    Jd(this, "AdError", {
      message: a != null ? a.message : ""
    })
  };
  var Od = function(a) {
      Ub(Kc, function(b) {
        if (b !== "getAdCompanions") {
          var c;
          if (!(b in this.g && typeof((c = this.g) == null ? void 0 : c[b]) === "function")) throw Error("missing functions " + b);
        }
      }, a);
      if (a.g.handshakeVersion("2.0") !== "2.0") throw Error("version");
    },
    Pd = function(a) {
      a.O.forEach(function(b) {
        var c;
        if (typeof((c = a.g) == null ? void 0 : c[b]) === "function") {
          var d;
          (d = a.g) == null || d[b]()
        }
      })
    };
  Z.prototype.L = function() {
    var a = window.getVPAIDAd;
    try {
      this.g = a(), Od(this), Pd(this)
    } catch (d) {
      this.m(d);
      return
    }
    if (this.g == null) this.m();
    else {
      this.P = new Lc(this.o, this.g, this.K);
      Mc(this.P);
      this.j ? a = {
        slot: this.i,
        videoSlot: this.l,
        videoSlotCanAutoPlay: !0
      } : (this.i = document.getElementById("slot"), this.i == null ? a = window.document.body : (this.i.style.height = window.innerHeight !== 0 ? window.innerHeight + "px" : this.height !== 0 ? this.height + "px" : "100%", this.i.style.width = window.innerWidth !== 0 ? window.innerWidth + "px" : this.width !== 0 ? this.width + "px" : "100%", a = this.i), a = {
        slot: a,
        videoSlot: this.D,
        videoSlotCanAutoPlay: !0
      });
      var b = {
        AdParameters: this.I
      };
      try {
        this.height = Nd(this);
        this.width = Md(this);
        if (this.height === 0 || this.width === 0) {
          this.A = new U(200);
          var c = va(Nc, this.A);
          this.C ? c() : (this.v || (this.v = []), this.v.push(c));
          this.listen(this.A, "tick", this.Z);
          this.A.start()
        }
        this.g.initAd(this.width, this.height, this.F, this.N, b, a)
      } catch (d) {
        this.m(d)
      }
    }
  };
  var Md = function(a) {
      if (a.j) {
        var b;
        return ((b = a.i) == null ? void 0 : b.clientWidth) || a.width
      }
      return window.innerWidth
    },
    Nd = function(a) {
      if (a.j) {
        var b;
        return ((b = a.i) == null ? void 0 : b.clientHeight) || a.height
      }
      return window.innerHeight
    },
    Ld = function(a, b, c, d) {
      var e = -1;
      try {
        var f;
        e = (f = a.g) == null ? void 0 : f[b]()
      } catch (g) {}
      typeof e !== "number" && (e = -1);
      b = {};
      b[d] = e;
      Jd(a, c, b)
    };
  Z.prototype.initFriendly = Z.prototype.W;
  window.VPAIDLoader = Z;
}).call(this);
