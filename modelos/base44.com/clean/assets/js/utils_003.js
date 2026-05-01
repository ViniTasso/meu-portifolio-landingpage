function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  };
  return _extends.apply(this, arguments)
}(function() {
  var SENTRY_REROUTED_MARK_KEY = "_REROUTED";
  var SENTRY_IS_NON_WIX_TPA_MARK_KEY = "_isTPA";
  var SENTRY_REROUTE_DATA_KEY = "_ROUTE_TO";
  var addRerouteDataToSentryEvent = function(event) {
    var _event_extra, _event_exception_values__stacktrace, _event_exception_values, _event_exception;
    if (event == null ? void 0 : (_event_extra = event.extra) == null ? void 0 : _event_extra[SENTRY_REROUTE_DATA_KEY]) {
      return
    }
    if (event == null ? void 0 : (_event_exception = event.exception) == null ? void 0 : (_event_exception_values = _event_exception.values) == null ? void 0 : (_event_exception_values__stacktrace = _event_exception_values[0].stacktrace) == null ? void 0 : _event_exception_values__stacktrace.frames) {
      var frames = event.exception.values[0].stacktrace.frames;
      var framesModuleMetadata = frames.filter(function(frame) {
        return frame.module_metadata && frame.module_metadata.appId
      }).map(function(v) {
        return {
          appId: v.module_metadata.appId,
          release: v.module_metadata.release,
          dsn: v.module_metadata.dsn
        }
      });
      var routeTo = framesModuleMetadata.slice(-1);
      if (routeTo.length) {
        var _window_wixEmbedsAPI, _app_monitoringComponent_monitoring, _app_monitoringComponent;
        var appId = routeTo[0].appId;
        var app = (_window_wixEmbedsAPI = window.wixEmbedsAPI) == null ? void 0 : _window_wixEmbedsAPI.getMonitoringConfig(appId);
        if ((app == null ? void 0 : (_app_monitoringComponent = app.monitoringComponent) == null ? void 0 : (_app_monitoringComponent_monitoring = _app_monitoringComponent.monitoring) == null ? void 0 : _app_monitoringComponent_monitoring.type) === "SENTRY") {
          var _app_monitoringComponent_monitoring_sentryOptions, _app_monitoringComponent_monitoring1, _app_monitoringComponent1;
          var dsn = app == null ? void 0 : (_app_monitoringComponent1 = app.monitoringComponent) == null ? void 0 : (_app_monitoringComponent_monitoring1 = _app_monitoringComponent1.monitoring) == null ? void 0 : (_app_monitoringComponent_monitoring_sentryOptions = _app_monitoringComponent_monitoring1.sentryOptions) == null ? void 0 : _app_monitoringComponent_monitoring_sentryOptions.dsn;
          if (dsn) {
            if (!routeTo[0].dsn && dsn) {
              routeTo[0].dsn = dsn
            }
          }
        }
        if (app) {
          var _obj;
          event.extra = _extends({}, event.extra, (_obj = {}, _obj[SENTRY_IS_NON_WIX_TPA_MARK_KEY] = !app.isWixTPA, _obj))
        }
        var _obj1;
        event.extra = _extends({}, event.extra, (_obj1 = {}, _obj1[SENTRY_REROUTE_DATA_KEY] = routeTo, _obj1[SENTRY_REROUTED_MARK_KEY] = true, _obj1))
      }
    }
  };

  function overrideSentryInitOptions() {
    var Sentry = window.Sentry;
    var makeMultiplexedTransport = Sentry.makeMultiplexedTransport,
      makeFetchTransport = Sentry.makeFetchTransport;
    var transport = makeMultiplexedTransport ? makeMultiplexedTransport(makeFetchTransport, function(args) {
      var event = args.getEvent();
      if (event && event.extra && event.extra[SENTRY_REROUTE_DATA_KEY] && Array.isArray(event.extra[SENTRY_REROUTE_DATA_KEY])) {
        return event.extra[SENTRY_REROUTE_DATA_KEY]
      }
      return []
    }) : makeFetchTransport;
    Sentry.init({
      transport: transport,
      integrations: [Sentry.browserTracingIntegration({
        instrumentNavigation: false,
        instrumentPageLoad: false
      })],
      tracePropagationTargets: [/^https:\/\/[a-zA-Z0-9-]+\.wix-app\.run\/.*/],
      attachStacktrace: true,
      beforeSend: function(event, hint) {
        var customEvent = new CustomEvent("sentry-error", {
          cancelable: true,
          detail: {
            sentryEvent: event,
            sentryHint: hint
          }
        });
        var dispatchEventRes = window.dispatchEvent(customEvent);
        if (!dispatchEventRes) {
          return null
        }
        if (event.extra) {
          if (event.extra[SENTRY_REROUTED_MARK_KEY]) {
            delete event.extra[SENTRY_REROUTED_MARK_KEY]
          }
          if (event.extra[SENTRY_IS_NON_WIX_TPA_MARK_KEY]) {
            delete event.extra[SENTRY_IS_NON_WIX_TPA_MARK_KEY]
          }
        }
        return event
      }
    });
    if (Sentry.moduleMetadataIntegration) {
      Sentry.addIntegration(Sentry.moduleMetadataIntegration());
      Sentry.addGlobalEventProcessor(function(event) {
        addRerouteDataToSentryEvent(event);
        return event
      })
    }
  }
  window.sentryOnLoad = overrideSentryInitOptions
})();
;
! function(n, e, r, t, o, i, a, c, s) {
  for (var u = s, f = 0; f < document.scripts.length; f++)
    if (document.scripts[f].src.indexOf(i) > -1) {
      u && "no" === document.scripts[f].getAttribute("data-lazy") && (u = !1);
      break
    } var p = [];

  function l(n) {
    return "e" in n
  }

  function d(n) {
    return "p" in n
  }

  function _(n) {
    return "f" in n
  }
  var v = [];

  function y(n) {
    u && (l(n) || d(n) || _(n) && n.f.indexOf("capture") > -1 || _(n) && n.f.indexOf("showReportDialog") > -1) && L(), v.push(n)
  }

  function h() {
    y({
      e: [].slice.call(arguments)
    })
  }

  function g(n) {
    y({
      p: n
    })
  }

  function E() {
    try {
      n.SENTRY_SDK_SOURCE = "loader";
      var e = n[o],
        i = e.init;
      e.init = function(o) {
        n.removeEventListener(r, h), n.removeEventListener(t, g);
        var a = c;
        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (a[s] = o[s]);
        ! function(n, e) {
          var r = n.integrations || [];
          if (!Array.isArray(r)) return;
          var t = r.map((function(n) {
            return n.name
          }));
          n.tracesSampleRate && -1 === t.indexOf("BrowserTracing") && (e.browserTracingIntegration ? r.push(e.browserTracingIntegration({
            enableInp: !0
          })) : e.BrowserTracing && r.push(new e.BrowserTracing));
          (n.replaysSessionSampleRate || n.replaysOnErrorSampleRate) && -1 === t.indexOf("Replay") && (e.replayIntegration ? r.push(e.replayIntegration()) : e.Replay && r.push(new e.Replay));
          n.integrations = r
        }(a, e), i(a)
      }, setTimeout((function() {
        return function(e) {
          try {
            "function" == typeof n.sentryOnLoad && (n.sentryOnLoad(), n.sentryOnLoad = void 0)
          } catch (n) {
            console.error("Error while calling `sentryOnLoad` handler:"), console.error(n)
          }
          try {
            for (var r = 0; r < p.length; r++) "function" == typeof p[r] && p[r]();
            p.splice(0);
            for (r = 0; r < v.length; r++) {
              _(i = v[r]) && "init" === i.f && e.init.apply(e, i.a)
            }
            m() || e.init();
            var t = n.onerror,
              o = n.onunhandledrejection;
            for (r = 0; r < v.length; r++) {
              var i;
              if (_(i = v[r])) {
                if ("init" === i.f) continue;
                e[i.f].apply(e, i.a)
              } else l(i) && t ? t.apply(n, i.e) : d(i) && o && o.apply(n, [i.p])
            }
          } catch (n) {
            console.error(n)
          }
        }(e)
      }))
    } catch (n) {
      console.error(n)
    }
  }
  var O = !1;

  function L() {
    if (!O) {
      O = !0;
      var n = e.scripts[0],
        r = e.createElement("script");
      r.src = a, r.crossOrigin = "anonymous", r.addEventListener("load", E, {
        once: !0,
        passive: !0
      }), n.parentNode.insertBefore(r, n)
    }
  }

  function m() {
    var e = n.__SENTRY__,
      r = void 0 !== e && e.version;
    return r ? !!e[r] : !(void 0 === e || !e.hub || !e.hub.getClient())
  }
  n[o] = n[o] || {}, n[o].onLoad = function(n) {
    m() ? n() : p.push(n)
  }, n[o].forceLoad = function() {
    setTimeout((function() {
      L()
    }))
  }, ["init", "addBreadcrumb", "captureMessage", "captureException", "captureEvent", "configureScope", "withScope", "showReportDialog"].forEach((function(e) {
    n[o][e] = function() {
      y({
        f: e,
        a: arguments
      })
    }
  })), n.addEventListener(r, h), n.addEventListener(t, g), u || setTimeout((function() {
    L()
  }))
}(window, document, "error", "unhandledrejection", "Sentry", '605a7baede844d278b89dc95ae0a9123', 'https://browser.sentry-cdn.com/7.120.3/bundle.tracing.es5.min.js', {
  "dsn": "https://605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com/68",
  "tracesSampleRate": 1
}, true);
;
! function(n) {
  var r = {},
    t = function() {
      return t = Object.assign || function(n) {
        for (var r, t = 1, e = arguments.length; t < e; t++)
          for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
        return n
      }, t.apply(this, arguments)
    };

  function e(n, r, t, e) {
    return new(t || (t = Promise))((function(o, i) {
      function u(n) {
        try {
          f(e.next(n))
        } catch (n) {
          i(n)
        }
      }

      function c(n) {
        try {
          f(e.throw(n))
        } catch (n) {
          i(n)
        }
      }

      function f(n) {
        var r;
        n.done ? o(n.value) : (r = n.value, r instanceof t ? r : new t((function(n) {
          n(r)
        }))).then(u, c)
      }
      f((e = e.apply(n, r || [])).next())
    }))
  }

  function o(n, r) {
    var t, e, o, i, u = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return i = {
      next: c(0),
      throw: c(1),
      return: c(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
      return this
    }), i;

    function c(c) {
      return function(f) {
        return function(c) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; i && (i = 0, c[0] && (u = 0)), u;) try {
            if (t = 1, e && (o = 2 & c[0] ? e.return : c[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, c[1])).done) return o;
            switch (e = 0, o && (c = [2 & c[0], o.value]), c[0]) {
              case 0:
              case 1:
                o = c;
                break;
              case 4:
                return u.label++, {
                  value: c[1],
                  done: !1
                };
              case 5:
                u.label++, e = c[1], c = [0];
                continue;
              case 7:
                c = u.ops.pop(), u.trys.pop();
                continue;
              default:
                if (!(o = u.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                  u = 0;
                  continue
                }
                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                  u.label = c[1];
                  break
                }
                if (6 === c[0] && u.label < o[1]) {
                  u.label = o[1], o = c;
                  break
                }
                if (o && u.label < o[2]) {
                  u.label = o[2], u.ops.push(c);
                  break
                }
                o[2] && u.ops.pop(), u.trys.pop();
                continue
            }
            c = r.call(n, u)
          } catch (n) {
            c = [6, n], e = 0
          } finally {
            t = o = 0
          }
          if (5 & c[0]) throw c[1];
          return {
            value: c[0] ? c[1] : void 0,
            done: !0
          }
        }([c, f])
      }
    }
  }

  function i(n) {
    var r = "function" == typeof Symbol && Symbol.iterator,
      t = r && n[r],
      e = 0;
    if (t) return t.call(n);
    if (n && "number" == typeof n.length) return {
      next: function() {
        return n && e >= n.length && (n = void 0), {
          value: n && n[e++],
          done: !n
        }
      }
    };
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }

  function u(n, r) {
    var t = "function" == typeof Symbol && n[Symbol.iterator];
    if (!t) return n;
    var e, o, i = t.call(n),
      u = [];
    try {
      for (;
        (void 0 === r || r-- > 0) && !(e = i.next()).done;) u.push(e.value)
    } catch (n) {
      o = {
        error: n
      }
    } finally {
      try {
        e && !e.done && (t = i.return) && t.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return u
  }

  function c(n) {
    return n && n.Math == Math ? n : void 0
  }
  var f = "object" == typeof globalThis && c(globalThis) || "object" == typeof window && c(window) || "object" == typeof self && c(self) || "object" == typeof global && c(global) || function() {
      return this
    }() || {},
    a = {};
  var s = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

  function v(n) {
    var r = s.exec(n);
    if (r) {
      var t, e = u(r.slice(1), 6),
        o = e[0],
        i = e[1],
        c = e[2],
        v = void 0 === c ? "" : c,
        l = e[3],
        y = e[4],
        d = void 0 === y ? "" : y,
        p = "",
        h = e[5],
        b = h.split("/");
      if (b.length > 1 && (p = b.slice(0, -1).join("/"), h = b.pop()), h) {
        var w = h.match(/^\d+/);
        w && (h = w[0])
      }
      return {
        protocol: (t = {
          host: l,
          pass: v,
          path: p,
          projectId: h,
          port: d,
          protocol: o,
          publicKey: i
        }).protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
      }
    }! function(n) {
      if (!("console" in f)) return n();
      var r = f.console,
        t = {},
        e = Object.keys(a);
      e.forEach((function(n) {
        var e = a[n];
        t[n] = r[n], r[n] = e
      }));
      try {
        n()
      } finally {
        e.forEach((function(n) {
          r[n] = t[n]
        }))
      }
    }((function() {
      console.error("Invalid Sentry Dsn: ".concat(n))
    }))
  }

  function l(n, r) {
    return e = t({
      sentry_key: n.publicKey,
      sentry_version: "7"
    }, r && {
      sentry_client: "".concat(r.name, "/").concat(r.version)
    }), Object.keys(e).map((function(n) {
      return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(e[n]))
    })).join("&");
    var e
  }

  function y(n, r) {
    var t;
    return function(n, r) {
      var t, e, o = n[1];
      try {
        for (var u = i(o), c = u.next(); !c.done; c = u.next()) {
          var f = c.value;
          if (r(f, f[0].type)) return !0
        }
      } catch (n) {
        t = {
          error: n
        }
      } finally {
        try {
          c && !c.done && (e = u.return) && e.call(u)
        } finally {
          if (t) throw t.error
        }
      }
    }(n, (function(n, e) {
      return r.includes(e) && (t = Array.isArray(n) ? n[1] : void 0), !!t
    })), t
  }
  for (var d in r.makeMultiplexedTransport = function(n, r) {
      return function(c) {
        var f = n(c),
          a = new Map;

        function s(r, i) {
          var u = i ? "".concat(r, ":").concat(i) : r,
            f = a.get(u);
          if (!f) {
            var s = v(r);
            if (!s) return;
            var d = function(n, r) {
              void 0 === r && (r = {});
              var t = "string" == typeof r ? r : r.tunnel,
                e = "string" != typeof r && r.t ? r.t.sdk : void 0;
              return t || "".concat(function(n) {
                return "".concat(function(n) {
                  var r = n.protocol ? "".concat(n.protocol, ":") : "",
                    t = n.port ? ":".concat(n.port) : "";
                  return "".concat(r, "//").concat(n.host).concat(t).concat(n.path ? "/".concat(n.path) : "", "/api/")
                }(n)).concat(n.projectId, "/envelope/")
              }(n), "?").concat(l(n, e))
            }(s, c.tunnel);
            f = i ? function(n, r) {
              var i = this;
              return function(u) {
                var c = n(u);
                return t(t({}, c), {
                  send: function(n) {
                    return e(i, void 0, void 0, (function() {
                      var t;
                      return o(this, (function(e) {
                        return (t = y(n, ["event", "transaction", "profile", "replay_event"])) && (t.release = r), [2, c.send(n)]
                      }))
                    }))
                  }
                })
              }
            }(n, i)(t(t({}, c), {
              url: d
            })) : n(t(t({}, c), {
              url: d
            })), a.set(u, f)
          }
          return [r, f]
        }
        return {
          send: function(n) {
            return e(this, void 0, void 0, (function() {
              function e(r) {
                var t = r && r.length ? r : ["event"];
                return y(n, t)
              }
              var i;
              return o(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return 0 === (i = r({
                      envelope: n,
                      getEvent: e
                    }).map((function(n) {
                      return "string" == typeof n ? s(n, void 0) : s(n.dsn, n.release)
                    })).filter((function(n) {
                      return !!n
                    }))).length && i.push(["", f]), [4, Promise.all(i.map((function(r) {
                      var e = u(r, 2),
                        o = e[0];
                      return e[1].send(function(n, r) {
                        return e = r ? t(t({}, n[0]), {
                          dsn: r
                        }) : n[0], void 0 === (o = n[1]) && (o = []), [e, o];
                        var e, o
                      }(n, o))
                    })))];
                  case 1:
                    return [2, o.sent()[0]]
                }
              }))
            }))
          },
          flush: function(n) {
            return e(this, void 0, void 0, (function() {
              var r, t, e, c, s, v, l, y, d, p;
              return o(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return [4, f.flush(n)];
                  case 1:
                    r = [o.sent()], o.label = 2;
                  case 2:
                    o.trys.push([2, 7, 8, 9]), t = i(a), e = t.next(), o.label = 3;
                  case 3:
                    return e.done ? [3, 6] : (c = u(e.value, 2), s = c[1], l = (v = r).push, [4, s.flush(n)]);
                  case 4:
                    l.apply(v, [o.sent()]), o.label = 5;
                  case 5:
                    return e = t.next(), [3, 3];
                  case 6:
                    return [3, 9];
                  case 7:
                    return y = o.sent(), d = {
                      error: y
                    }, [3, 9];
                  case 8:
                    try {
                      e && !e.done && (p = t.return) && p.call(t)
                    } finally {
                      if (d) throw d.error
                    }
                    return [7];
                  case 9:
                    return [2, r.every((function(n) {
                      return n
                    }))]
                }
              }))
            }))
          }
        }
      }
    }, n.Sentry = n.Sentry || {}, n.Sentry.Integrations = n.Sentry.Integrations || {}, r) Object.prototype.hasOwnProperty.call(r, d) && (n.Sentry.Integrations[d] = r[d], n.Sentry[d] = r[d])
}(window);
;
window.resolveExternalsRegistryPromise = null
const externalRegistryPromise = new Promise((r) => window.resolveExternalsRegistryPromise = r)
window.resolveExternalsRegistryModule = (name) => externalRegistryPromise.then(() => window.externalsRegistry[name].onload())
;
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["7101"], {
    78635() {
      window.__imageClientApi__ = window.__imageClientApi__ || {
        sdk: {}
      };
      let {
        lodash: e,
        react: o,
        reactDOM: n,
        imageClientApi: d,
        clientSdk: a
      } = window.externalsRegistry = {
        lodash: {},
        react: {},
        reactDOM: {},
        imageClientApi: {},
        clientSdk: {}
      };
      d.loaded = new Promise(e => {
        d.onload = e
      }), e.loaded = new Promise(o => {
        e.onload = o
      }), a.loaded = new Promise(e => {
        a.onload = e
      }), window.ReactDOM || (window.reactDOMReference = window.ReactDOM = {
        loading: !0
      }), n.loaded = new Promise(e => {
        n.onload = () => {
          Object.assign(window.reactDOMReference || {}, window.ReactDOM, {
            loading: !1
          }), e()
        }
      }), window.React || (window.reactReference = window.React = {
        loading: !0
      }), o.loaded = new Promise(e => {
        o.onload = () => {
          Object.assign(window.reactReference || {}, window.React, {
            loading: !1
          }), e()
        }
      }), window.reactAndReactDOMLoaded = Promise.all([o.loaded, n.loaded]), window.resolveExternalsRegistryPromise()
    }
  },
  function(e) {
    e(e.s = 78635)
  }
]);
;
window.viewerModel = JSON.parse(document.getElementById('wix-viewer-model').textContent)
;
window.usedPlatformApis = JSON.parse(document.getElementById('used-platform-apis-data').textContent)
;
"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["6747"], {
    99090(e, t, o) {
      o.d(t, {
        O: () => c
      });
      let c = (e, t = "") => t.toLowerCase().includes("forcereducedmotion") || !!e?.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
  },
  function(e) {
    e.O(0, ["1619", "3033"], function() {
      return e(e.s = 19787)
    }), e.O()
  }
]);
;
"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["6008"], {
    68703(e, r, t) {
      t.d(r, {
        L: () => i
      });
      var o = t(8716),
        a = t(26778),
        n = t(89330);
      let i = (0, o.Og)([], () => ({
        definition: a.FedopsLoggerDefinition,
        impl: n.FedopsLoggerService,
        config: {},
        platformConfig: {}
      }))
    },
    89973(e, r, t) {
      t.d(r, {
        h: () => i
      });
      var o = t(65672),
        a = t(48869);
      let n = ({
          useBatch: e = !0,
          publishMethod: r = o.PublishMethods.Auto,
          endpoint: t,
          muteBi: a = !1,
          biStore: n,
          sessionManager: i,
          fetch: s,
          factory: d
        }) => d({
          useBatch: e,
          publishMethod: r,
          endpoint: t
        }).setMuted(a).withUoUContext({
          msid: n.msid
        }).withNonEssentialContext({
          visitorId: () => i.getVisitorId(),
          siteMemberId: () => i.getSiteMemberId()
        }).updateDefaults({
          vsi: n.viewerSessionId,
          _av: `thunderbolt-${n.viewerVersion}`,
          isb: n.is_headless,
          ...n.is_headless && {
            isbr: n.is_headless_reason
          }
        }),
        i = {
          createBaseBiLoggerFactory: n,
          createBiLoggerFactoryForFedops: e => {
            let {
              biStore: {
                session_id: r,
                initialTimestamp: t,
                initialRequestTimestamp: o,
                dc: i,
                microPop: s,
                is_headless: d,
                isCached: l,
                pageData: p,
                rolloutData: u,
                caching: c,
                checkVisibility: f = () => "",
                viewerVersion: m,
                requestUrl: I,
                st: h,
                isSuccessfulSSR: A,
                mpaSessionId: g
              },
              muteBi: _ = !1
            } = e;
            return n({
              ...e,
              muteBi: _
            }).updateDefaults({
              ts: () => Date.now() - t,
              tsn: () => (function({
                initialRequestTimestamp: e,
                adjustForPrerender: r = !1
              }) {
                if ("undefined" == typeof window) return Math.round(performance.now() + (performance.timeOrigin - e));
                let t = r ? (0, a.b)() : 0;
                return Math.round(performance.now() - t)
              })({
                initialRequestTimestamp: o,
                adjustForPrerender: !0
              }),
              dc: i,
              microPop: s,
              caching: c,
              session_id: r,
              st: h,
              url: I || p.pageUrl,
              ish: d,
              pn: p.pageNumber,
              isFirstNavigation: 1 === p.pageNumber,
              pv: f,
              pageId: p.pageId,
              isServerSide: !1,
              isSuccessfulSSR: A,
              is_lightbox: p.isLightbox,
              is_cached: l,
              is_sav_rollout: +!!u.siteAssetsVersionsRollout,
              is_dac_rollout: +!!u.isDACRollout,
              v: m,
              mpaSessionId: g,
              ..."undefined" != typeof document && document.referrer && {
                document_referrer: document.referrer
              },
              ..."undefined" != typeof navigator && navigator.language && {
                browserLanguage: navigator.language
              }
            })
          }
        }
    },
    48869(e, r, t) {
      t.d(r, {
        b: () => o
      });
      let o = () => {
        let e = (() => {
          if ("undefined" == typeof performance || "function" != typeof performance.getEntriesByType) return;
          let e = performance.getEntriesByType("navigation")[0];
          if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
        })();
        return e?.activationStart ?? 0
      }
    },
    35499(e, r, t) {
      t.d(r, {
        W: () => l
      });
      var o = t(41394),
        a = t(41789),
        n = t(683),
        i = t(4291),
        s = t(6355),
        d = t(63328);
      let l = ({
        biLoggerFactory: e,
        customParams: r = {},
        phasesConfig: t = "SEND_ON_FINISH",
        appName: l = "thunderbolt",
        presetType: p = o.u.BOLT,
        reportBlackbox: u = !1,
        paramsOverrides: c = {},
        factory: f,
        muteThunderboltEvents: m = !1,
        experiments: I = {},
        monitoringData: h
      }) => {
        let A, g, _, S, N, E, v, R, b = f(l, {
            presetType: p,
            phasesConfig: t,
            isPersistent: !0,
            isServerSide: !1,
            reportBlackbox: u,
            customParams: r,
            biLoggerFactory: e,
            paramsOverrides: c,
            enableSampleRateForAppNames: (0, d.k)("specs.thunderbolt.fedops_enableSampleRateForAppNames", I) ?? ("undefined" != typeof window && (0, d.k)("specs.thunderbolt.fedops_enableSampleRateForAppNames", I))
          }),
          {
            interactionStarted: w,
            interactionEnded: O,
            appLoadingPhaseStart: T,
            appLoadingPhaseFinish: y,
            appLoadStarted: D,
            appLoaded: L
          } = b,
          V = (0, d.k)("specs.thunderbolt.fedopsMuteErrors", I),
          C = (0, d.k)("specs.thunderbolt.panoramaInSsr", I),
          F = "undefined" == typeof window,
          B = e => e?.evid && 26 === parseInt(e.evid, 10),
          P = (A = (0, s.n)(), h?.viewerSessionId && A.setSessionId(h.viewerSessionId), g = h?.metaSiteId ?? "", _ = h?.dc ?? "", S = !!h?.isHeadless, N = !!h?.isCached, E = !!h?.rolloutData?.isTBRollout, v = !!h?.rolloutData?.isDACRollout, R = !!h?.rolloutData?.siteAssetsVersionsRollout, (0, n.V)({
            baseParams: {
              platform: i.OD.Viewer,
              msid: g,
              fullArtifactId: "com.wixpress.html-client.wix-thunderbolt",
              componentId: l
            },
            pluginParams: {
              useBatch: !0
            },
            data: {
              dataCenter: _,
              isHeadless: S,
              isCached: N,
              isRollout: E,
              isDacRollout: v,
              isSavRollout: R,
              isSsr: !1,
              presetType: p,
              customParams: r
            },
            reporterOptions: F ? {
              fetchFn: fetch
            } : {}
          }).withGlobalConfig(A).client()),
          G = e => {
            P && (C || !F) && (e ? P.reportLoadStart() : P.reportLoadFinish())
          },
          M = (e, r, t) => {
            if (!P) return;
            let o = e.replaceAll(" ", "_");
            r ? P.transaction(o).start(t) : P.transaction(o).finish(t)
          },
          k = (e, r, t, n) => {
            if (a.iy.has(l)) return !0;
            if (((e, r, t) => {
                let n;
                return B(t) ? V : (n = t?.siteAssetsModule ?? "", !(p !== o.u.BOLT || a.EQ.has(e) || r && ["thunderbolt-css", "thunderbolt-features", "thunderbolt-platform"].includes(n)))
              })(e, r, n)) return !1;
            if (n?.siteAssetsModule) return !0;
            let i = !!t?.appId && !a.S_.has(t.appId),
              s = a.S2.has(e),
              d = a.wV.has(e);
            return s || i || !d && !m
          };
        return b.interactionStarted = (e, r) => {
          if (B(r?.paramsOverrides) ? ((e = {}) => {
              if (!P) return;
              let {
                errorInfo: r,
                errorType: t
              } = e, o = Error(r);
              P?.errorMonitor().reportError(o, {
                errorName: t,
                environment: "Viewer"
              })
            })(r?.paramsOverrides) : (C || e.startsWith("platform_") || !F) && M(e, !0), k(e, !0, void 0, r?.paramsOverrides)) return w.call(b, e, r);
          try {
            performance.mark(`${e} started`)
          } catch (e) {}
          return {
            timeoutId: 0
          }
        }, b.interactionEnded = (e, r) => {
          if ((C || e.startsWith("platform_") || !F) && M(e, !1), k(e, !0, void 0, r?.paramsOverrides)) O.call(b, e, r);
          else try {
            performance.mark(`${e} ended`)
          } catch (e) {}
        }, b.appLoadingPhaseStart = (e, r) => {
          if (M(e, !0, {
              appDefId: r?.appId,
              componentId: r?.widgetId
            }), k(e, !1, r)) T.call(b, e, r);
          else try {
            performance.mark(`${e} started`)
          } catch (e) {}
        }, b.appLoadingPhaseFinish = (e, r, t) => {
          if (M(e, !1, {
              appDefId: r?.appId,
              componentId: r?.widgetId
            }), k(e, !1, r)) y.call(b, e, r, t);
          else try {
            performance.mark(`${e} finished`)
          } catch (e) {}
        }, b.appLoadStarted = e => {
          G(!0), D.call(b, e)
        }, b.appLoaded = e => {
          G(!1), L.call(b, e)
        }, b
      }
    },
    81855(e, r, t) {
      t.d(r, {
        c: () => o
      });
      let o = e => {
        let r = "thunderbolt-commons";
        return {
          reportAsyncWithCustomKey: (t, o, a) => e.reportAsyncWithCustomKey(t, r, o, a),
          runAsyncAndReport: (t, o) => e.runAsyncAndReport(t, r, o),
          runAndReport: (t, o) => e.runAndReport(t, r, o),
          reportError: t => {
            e.captureError(t, {
              tags: {
                feature: r,
                clientMetricsReporterError: !0
              }
            })
          },
          meter: (r, t) => {
            e.meter(r, t)
          },
          histogram: (e, r) => {}
        }
      }
    },
    27256(e, r, t) {
      t.r(r), t.d(r, {
        createBiReporter: () => i,
        site: () => s
      });
      var o = t(73388),
        a = t(60990);
      let n = (...e) => console.log("[TB] ", ...e);

      function i(e = n, r = n, t = () => {}, o = n, a = n) {
        return {
          reportBI: e,
          sendBeat: r,
          setDynamicSessionData: t,
          reportPageNavigation: o,
          reportPageNavigationDone: a
        }
      }
      let s = ({
        biReporter: e,
        wixBiSession: r,
        viewerModel: t
      }) => n => {
        n(o.O$).toConstantValue(r), n(o.u6).toConstantValue(e), n(o.lR).toConstantValue((0, a.f)(t))
      }
    },
    94756(e, r, t) {
      t.d(r, {
        lF: () => n,
        mY: () => s,
        w4: () => i
      });
      var o, a, n = ((o = {})[o.START = 1] = "START", o[o.VISIBLE = 2] = "VISIBLE", o[o.PARTIALLY_VISIBLE = 12] = "PARTIALLY_VISIBLE", o[o.PAGE_FINISH = 33] = "PAGE_FINISH", o[o.FIRST_CDN_RESPONSE = 4] = "FIRST_CDN_RESPONSE", o[o.TBD = -1] = "TBD", o[o.PAGE_NAVIGATION = 101] = "PAGE_NAVIGATION", o[o.PAGE_NAVIGATION_DONE = 103] = "PAGE_NAVIGATION_DONE", o),
        i = ((a = {})[a.NAVIGATION = 1] = "NAVIGATION", a[a.DYNAMIC_REDIRECT = 2] = "DYNAMIC_REDIRECT", a[a.INNER_ROUTE = 3] = "INNER_ROUTE", a[a.NAVIGATION_ERROR = 4] = "NAVIGATION_ERROR", a[a.CANCELED = 5] = "CANCELED", a);
      let s = {
        1: "page-navigation",
        2: "page-navigation-redirect",
        3: "page-navigation-inner-route",
        4: "navigation-error",
        5: "navigation-canceled"
      }
    },
    73388(e, r, t) {
      t.d(r, {
        O$: () => a,
        lR: () => n,
        u6: () => o
      });
      let o = Symbol.for("BI"),
        a = Symbol.for("WixBiSessionSymbol"),
        n = Symbol.for("appName")
    }
  }
]);
;
"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["8426"], {
    7146(e, r, t) {
      t.r(r), t.d(r, {
        platformWorkerPromise: () => m
      });
      let s = window.viewerModel,
        a = s?.siteFeatures || [],
        o = s?.siteFeaturesConfigs?.platform,
        p = s?.siteAssets?.clientTopology,
        l = s?.site?.externalBaseUrl,
        i = window.usedPlatformApis,
        c = "undefined" != typeof Worker && a.includes("platform") && !!o,
        n = async () => {
          let e;
          if (!o?.clientWorkerUrl || !o?.appsScripts || !o?.bootstrapData) return void console.warn("[create-worker] Platform config incomplete (missing clientWorkerUrl, appsScripts, or bootstrapData), skipping worker creation");
          let r = "platform_create-worker started";
          performance.mark(r);
          let {
            clientWorkerUrl: t,
            appsScripts: s,
            bootstrapData: a,
            sdksStaticPaths: c
          } = o, {
            appsSpecData: n = {},
            appDefIdToIsMigratedToGetPlatformApi: m = {},
            forceEmptySdks: d
          } = a || {}, f = new Worker(t.startsWith("http://localhost:") || t.startsWith("https://bo.wix.com/suricate/") || document.baseURI !== location.href ? (e = new Blob([`importScripts('${t}');`], {
            type: "application/javascript"
          }), URL.createObjectURL(e)) : t.replace(p?.fileRepoUrl || "", `${l}/_partials`)), u = s?.urls || {}, k = Object.keys(u).filter(e => !n[e]?.isModuleFederated).reduce((e, r) => (e[r] = u[r], e), {});
          c && c.mainSdks && c.nonMainSdks && (Object.values(m).every(e => e) || d ? f.postMessage({
            type: "preloadNamespaces",
            namespaces: i
          }) : f.postMessage({
            type: "preloadAllNamespaces",
            sdksStaticPaths: c
          })), f.postMessage({
            type: "platformScriptsToPreload",
            appScriptsUrls: k
          });
          let w = "platform_create-worker ended";
          return performance.mark(w), performance.measure("Create Platform Web Worker", r, w), f
        }, m = c ? n() : Promise.resolve()
    }
  },
  function(e) {
    e(e.s = 7146)
  }
]);
;
"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["1625"], {
    97534() {
      var e;
      let n, a, t;
      e = window, n = new Set, a = [], t = e => {
        let a = [];
        n.forEach(n => {
          e.canHandleEvent(n) && a.push(n)
        }), a.forEach(a => {
          n.delete(a), e.handleEvent(a)
        })
      }, e.addEventListener("message", e => {
        let d = {
            source: e.source,
            data: e.data,
            origin: e.origin
          },
          s = a.find(e => e.canHandleEvent(d));
        s ? (t(s), s.handleEvent(d)) : n.add(d)
      }), e._addWindowMessageHandler = e => {
        a.push(e), t(e)
      }
    }
  },
  function(e) {
    e(e.s = 97534)
  }
]);
;
window.clientSideRender = false;
;
"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["9114"], {
    79032(e, i, n) {
      let t, r, s, o;
      n.d(i, {
        K: () => h
      });
      var a = n(94756);
      let l = e => {
        let i = !1;
        if (!/\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent)) try {
          i = navigator.sendBeacon(e)
        } catch {}
        i || (new Image().src = e)
      };

      function c([e, i]) {
        return null !== i && `${e}=${i}`
      }
      let d = function(e, {
          eventType: i,
          ts: n,
          tts: t,
          extra: r = ""
        }, s, o) {
          let a, l, d = (a = r.split("&").reduce((e, i) => {
              let [n, t] = i.split("=");
              return {
                ...e,
                [n]: t
              }
            }, {}), (e, i) => void 0 !== a[e] ? a[e] : i),
            u = e => void 0 === s[e] ? null : s[e],
            p = !0,
            w = window?.consentPolicyManager;
          if (w) {
            let e = w.getCurrentConsentPolicy();
            if (e) {
              let {
                policy: i
              } = e;
              p = !(i.functional && i.analytics)
            }
          }
          let m = u("requestUrl"),
            h = Object.entries({
              src: "29",
              evid: "3",
              viewer_name: u("viewerName"),
              caching: u("caching"),
              client_id: p ? null : (l = document.cookie.match(/_wixCIDX=([^;]*)/)) && l[1],
              dc: u("dc"),
              microPop: u("microPop"),
              et: i,
              event_name: e ? encodeURIComponent(e) : null,
              is_cached: u("isCached"),
              is_platform_loaded: u("is_platform_loaded"),
              is_rollout: u("is_rollout"),
              ism: u("isMesh"),
              isp: 0,
              isjp: u("isjp"),
              iss: u("isServerSide"),
              ssr_fb: u("fallbackReason"),
              ita: d("ita", s.checkVisibility() ? "1" : "0"),
              mid: p ? null : o?.siteMemberId || null,
              msid: u("msId"),
              pid: d("pid", null),
              pn: d("pn", "1"),
              ref: document.referrer && !p ? encodeURIComponent(document.referrer) : null,
              sar: p ? null : d("sar", screen.availWidth ? `${screen.availWidth}x${screen.availHeight}` : null),
              sessionId: p && w ? null : u("sessionId"),
              siterev: s.siteRevision || s.siteCacheRevision ? `${s.siteRevision}-${s.siteCacheRevision}` : null,
              sr: p ? null : d("sr", screen.width ? `${screen.width}x${screen.height}` : null),
              st: u("st"),
              ts: n,
              tts: t,
              url: p ? function(e) {
                if (!e) return null;
                let i = new URL(decodeURIComponent(e));
                return i.search = "?", encodeURIComponent(i.href)
              }(m) : m,
              v: window?.thunderboltVersion || "0.0.0",
              vid: p ? null : o?.visitorId || null,
              bsi: p ? null : o?.bsi || null,
              vsi: u("viewerSessionId"),
              wor: p || !window.outerWidth ? null : `${window.outerWidth}x${window.outerHeight}`,
              wr: p ? null : d("wr", window.innerWidth ? `${window.innerWidth}x${window.innerHeight}` : null),
              _brandId: s.commonConfig?.brand || null,
              nt: d("nt", null)
            }).map(c).filter(Boolean).join("&");
          return `https://frog.wix.com/bt?${h}`
        },
        u = "unknown",
        p = e => {
          let i, n, t = (i = e.cache, n = e.varnish, `${i||u},${n||u}`);
          return {
            caching: t,
            isCached: t.includes("hit"),
            ...e.microPop ? {
              microPop: e.microPop
            } : {}
          }
        },
        w = {
          WixSite: 1,
          UGC: 2,
          Template: 3
        };
      var m = n(48869);
      let h = (t = (() => {
        let {
          fedops: e,
          viewerModel: {
            siteFeaturesConfigs: i,
            requestUrl: n,
            site: t,
            fleetConfig: r,
            commonConfig: s,
            interactionSampleRatio: o
          },
          clientSideRender: a,
          santaRenderingError: l
        } = window, c = (({
          requestUrl: e,
          interactionSampleRatio: i
        }) => {
          let n = new URL(e).searchParams;
          return n.has("sampleEvents") ? "true" === n.get("sampleEvents") : Math.random() < (i ? 1 - i : .9)
        })({
          requestUrl: n,
          interactionSampleRatio: o
        }), d = (e => {
          let {
            userAgent: i
          } = e.navigator;
          return /instagram.+google\/google/i.test(i) ? "" : /bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(i) ? "ua" : ""
        })(window) || (() => {
          try {
            if (window.self === window.top) return ""
          } catch {}
          return "iframe"
        })() || (() => {
          if (!Function.prototype.bind) return "bind";
          let {
            document: e,
            navigator: i
          } = window;
          if (!e || !i) return "document";
          let {
            webdriver: n,
            userAgent: t,
            plugins: r,
            languages: s
          } = i;
          if (n) return "webdriver";
          if (!r || Array.isArray(r)) return "plugins";
          if (Object.getOwnPropertyDescriptor(r, "0")?.writable) return "plugins-extra";
          if (!t) return "userAgent";
          if (t.indexOf("Snapchat") > 0 && e.hidden) return "Snapchat";
          if (!s || 0 === s.length || !Object.isFrozen(s)) return "languages";
          try {
            throw Error()
          } catch (e) {
            if (e instanceof Error) {
              let {
                stack: i
              } = e;
              if (i && / (\(internal\/)|(\(?file:\/)/.test(i)) return "stack"
            }
          }
          return ""
        })() || (({
          seo: e
        }) => e?.isInSEO ? "seo" : "")(i);
        return {
          suppressbi: n.includes("suppressbi=true"),
          initialTimestamp: window.initialTimestamps.initialTimestamp,
          initialRequestTimestamp: window.initialTimestamps.initialRequestTimestamp,
          viewerSessionId: e.vsi,
          viewerName: t.appNameForBiEvents,
          siteRevision: String(t.siteRevision),
          msId: t.metaSiteId,
          is_rollout: 0 === r.code || 1 === r.code ? r.code : null,
          is_platform_loaded: 0,
          requestUrl: encodeURIComponent(n),
          sessionId: String(t.sessionId),
          btype: d,
          isjp: !!d,
          dc: t.dc,
          siteCacheRevision: "__siteCacheRevision__",
          checkVisibility: (() => {
            let e = !0;

            function i() {
              e = e && !0 !== document.hidden
            }
            return document.addEventListener("visibilitychange", i, {
              passive: !0
            }), i(), () => (i(), e)
          })(),
          ...((e, i) => {
            let n, t = (e => {
              let i;
              try {
                i = e()
              } catch {
                i = []
              }
              let n = i.reduce((e, i) => (e[i.name] = i.description, e), {});
              return {
                cache: n.cache,
                varnish: n.varnish,
                microPop: n.dc
              }
            })(i);
            if (t.cache || t.varnish) return p({
              cache: t.cache || u,
              varnish: t.varnish || u,
              microPop: t.microPop
            });
            let r = (n = e.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/)) && n.length ? {
              cache: n[1],
              varnish: n[2] || u,
              microPop: n[3]
            } : null;
            return r ? p(r) : {
              caching: u,
              isCached: !1
            }
          })(document.cookie, () => [...performance.getEntriesByType("navigation")[0].serverTiming || []]),
          isMesh: 1,
          st: w[t.siteType] || 0,
          commonConfig: s,
          muteThunderboltEvents: c,
          isServerSide: +!a,
          isSuccessfulSSR: !a,
          fallbackReason: l?.errorInfo,
          mpaSessionId: e.mpaSessionId
        }
      })(), r = {}, s = 1, {
        sendBeat: o = (e, i, n = {}) => {
          if (i && performance.mark) {
            let n = `${i} (beat ${e})`;
            performance.mark(n)
          }
          let o = globalThis.window?.viewerModel;
          if (!o?.experiments["specs.thunderbolt.removeSendBeat"]) {
            let o = Date.now(),
              a = (0, m.b)(),
              c = Math.round(performance.now() - a),
              u = o - t.initialTimestamp;
            if (t.suppressbi || window.__browser_deprecation__) return;
            let {
              pageId: p,
              pageNumber: w = s,
              navigationType: h
            } = n, f = `&pn=${w}`;
            p && (f += `&pid=${p}`), h && (f += `&nt=${h}`), l(d(i, {
              eventType: e,
              ts: u,
              tts: c,
              extra: f
            }, t, r))
          }
        },
        reportBI: function(e, i) {
          let n, t;
          n = i ? `${e} - ${i}` : e, t = "end" === i ? `${e} - start` : null, performance.mark(n), performance.measure && t && performance.measure(`\u2B50${e}`, t, n)
        },
        wixBiSession: t,
        sendBeacon: l,
        setDynamicSessionData: ({
          visitorId: e,
          siteMemberId: i,
          bsi: n
        }) => {
          r.visitorId = e || r.visitorId, r.siteMemberId = i || r.siteMemberId, r.bsi = n || r.bsi
        },
        reportPageNavigation: function(e) {
          s += 1, o(a.lF.PAGE_NAVIGATION, "page navigation start", {
            pageId: e,
            pageNumber: s
          })
        },
        reportPageNavigationDone: function(e, i) {
          o(a.lF.PAGE_NAVIGATION_DONE, "page navigation complete", {
            pageId: e,
            pageNumber: s,
            navigationType: i
          }), (i === a.w4.DYNAMIC_REDIRECT || i === a.w4.NAVIGATION_ERROR || i === a.w4.CANCELED) && (s -= 1)
        }
      });
      window.bi = h, window.bi.wixBiSession.isServerSide = +!window.clientSideRender, window.bi.wixBiSession.isSuccessfulSSR = !window.clientSideRender, window.clientSideRender && (window.bi.wixBiSession.fallbackReason = window.santaRenderingError?.errorInfo), h.sendBeat(1, "Init")
    }
  },
  function(e) {
    e.O(0, ["6008"], function() {
      return e(e.s = 79032)
    }), e.O()
  }
]);
;
"use strict";
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([
  ["1698"], {
    40250(e, i, n) {
      var t = n(94756);
      n(79032).K.sendBeat(t.lF.PARTIALLY_VISIBLE, "Partially visible", {
        pageId: window.firstPageId
      })
    },
    79032(e, i, n) {
      let t, r, s, o;
      n.d(i, {
        K: () => h
      });
      var a = n(94756);
      let l = e => {
        let i = !1;
        if (!/\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent)) try {
          i = navigator.sendBeacon(e)
        } catch {}
        i || (new Image().src = e)
      };

      function c([e, i]) {
        return null !== i && `${e}=${i}`
      }
      let d = function(e, {
          eventType: i,
          ts: n,
          tts: t,
          extra: r = ""
        }, s, o) {
          let a, l, d = (a = r.split("&").reduce((e, i) => {
              let [n, t] = i.split("=");
              return {
                ...e,
                [n]: t
              }
            }, {}), (e, i) => void 0 !== a[e] ? a[e] : i),
            u = e => void 0 === s[e] ? null : s[e],
            p = !0,
            w = window?.consentPolicyManager;
          if (w) {
            let e = w.getCurrentConsentPolicy();
            if (e) {
              let {
                policy: i
              } = e;
              p = !(i.functional && i.analytics)
            }
          }
          let m = u("requestUrl"),
            h = Object.entries({
              src: "29",
              evid: "3",
              viewer_name: u("viewerName"),
              caching: u("caching"),
              client_id: p ? null : (l = document.cookie.match(/_wixCIDX=([^;]*)/)) && l[1],
              dc: u("dc"),
              microPop: u("microPop"),
              et: i,
              event_name: e ? encodeURIComponent(e) : null,
              is_cached: u("isCached"),
              is_platform_loaded: u("is_platform_loaded"),
              is_rollout: u("is_rollout"),
              ism: u("isMesh"),
              isp: 0,
              isjp: u("isjp"),
              iss: u("isServerSide"),
              ssr_fb: u("fallbackReason"),
              ita: d("ita", s.checkVisibility() ? "1" : "0"),
              mid: p ? null : o?.siteMemberId || null,
              msid: u("msId"),
              pid: d("pid", null),
              pn: d("pn", "1"),
              ref: document.referrer && !p ? encodeURIComponent(document.referrer) : null,
              sar: p ? null : d("sar", screen.availWidth ? `${screen.availWidth}x${screen.availHeight}` : null),
              sessionId: p && w ? null : u("sessionId"),
              siterev: s.siteRevision || s.siteCacheRevision ? `${s.siteRevision}-${s.siteCacheRevision}` : null,
              sr: p ? null : d("sr", screen.width ? `${screen.width}x${screen.height}` : null),
              st: u("st"),
              ts: n,
              tts: t,
              url: p ? function(e) {
                if (!e) return null;
                let i = new URL(decodeURIComponent(e));
                return i.search = "?", encodeURIComponent(i.href)
              }(m) : m,
              v: window?.thunderboltVersion || "0.0.0",
              vid: p ? null : o?.visitorId || null,
              bsi: p ? null : o?.bsi || null,
              vsi: u("viewerSessionId"),
              wor: p || !window.outerWidth ? null : `${window.outerWidth}x${window.outerHeight}`,
              wr: p ? null : d("wr", window.innerWidth ? `${window.innerWidth}x${window.innerHeight}` : null),
              _brandId: s.commonConfig?.brand || null,
              nt: d("nt", null)
            }).map(c).filter(Boolean).join("&");
          return `https://frog.wix.com/bt?${h}`
        },
        u = "unknown",
        p = e => {
          let i, n, t = (i = e.cache, n = e.varnish, `${i||u},${n||u}`);
          return {
            caching: t,
            isCached: t.includes("hit"),
            ...e.microPop ? {
              microPop: e.microPop
            } : {}
          }
        },
        w = {
          WixSite: 1,
          UGC: 2,
          Template: 3
        };
      var m = n(48869);
      let h = (t = (() => {
        let {
          fedops: e,
          viewerModel: {
            siteFeaturesConfigs: i,
            requestUrl: n,
            site: t,
            fleetConfig: r,
            commonConfig: s,
            interactionSampleRatio: o
          },
          clientSideRender: a,
          santaRenderingError: l
        } = window, c = (({
          requestUrl: e,
          interactionSampleRatio: i
        }) => {
          let n = new URL(e).searchParams;
          return n.has("sampleEvents") ? "true" === n.get("sampleEvents") : Math.random() < (i ? 1 - i : .9)
        })({
          requestUrl: n,
          interactionSampleRatio: o
        }), d = (e => {
          let {
            userAgent: i
          } = e.navigator;
          return /instagram.+google\/google/i.test(i) ? "" : /bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(i) ? "ua" : ""
        })(window) || (() => {
          try {
            if (window.self === window.top) return ""
          } catch {}
          return "iframe"
        })() || (() => {
          if (!Function.prototype.bind) return "bind";
          let {
            document: e,
            navigator: i
          } = window;
          if (!e || !i) return "document";
          let {
            webdriver: n,
            userAgent: t,
            plugins: r,
            languages: s
          } = i;
          if (n) return "webdriver";
          if (!r || Array.isArray(r)) return "plugins";
          if (Object.getOwnPropertyDescriptor(r, "0")?.writable) return "plugins-extra";
          if (!t) return "userAgent";
          if (t.indexOf("Snapchat") > 0 && e.hidden) return "Snapchat";
          if (!s || 0 === s.length || !Object.isFrozen(s)) return "languages";
          try {
            throw Error()
          } catch (e) {
            if (e instanceof Error) {
              let {
                stack: i
              } = e;
              if (i && / (\(internal\/)|(\(?file:\/)/.test(i)) return "stack"
            }
          }
          return ""
        })() || (({
          seo: e
        }) => e?.isInSEO ? "seo" : "")(i);
        return {
          suppressbi: n.includes("suppressbi=true"),
          initialTimestamp: window.initialTimestamps.initialTimestamp,
          initialRequestTimestamp: window.initialTimestamps.initialRequestTimestamp,
          viewerSessionId: e.vsi,
          viewerName: t.appNameForBiEvents,
          siteRevision: String(t.siteRevision),
          msId: t.metaSiteId,
          is_rollout: 0 === r.code || 1 === r.code ? r.code : null,
          is_platform_loaded: 0,
          requestUrl: encodeURIComponent(n),
          sessionId: String(t.sessionId),
          btype: d,
          isjp: !!d,
          dc: t.dc,
          siteCacheRevision: "__siteCacheRevision__",
          checkVisibility: (() => {
            let e = !0;

            function i() {
              e = e && !0 !== document.hidden
            }
            return document.addEventListener("visibilitychange", i, {
              passive: !0
            }), i(), () => (i(), e)
          })(),
          ...((e, i) => {
            let n, t = (e => {
              let i;
              try {
                i = e()
              } catch {
                i = []
              }
              let n = i.reduce((e, i) => (e[i.name] = i.description, e), {});
              return {
                cache: n.cache,
                varnish: n.varnish,
                microPop: n.dc
              }
            })(i);
            if (t.cache || t.varnish) return p({
              cache: t.cache || u,
              varnish: t.varnish || u,
              microPop: t.microPop
            });
            let r = (n = e.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/)) && n.length ? {
              cache: n[1],
              varnish: n[2] || u,
              microPop: n[3]
            } : null;
            return r ? p(r) : {
              caching: u,
              isCached: !1
            }
          })(document.cookie, () => [...performance.getEntriesByType("navigation")[0].serverTiming || []]),
          isMesh: 1,
          st: w[t.siteType] || 0,
          commonConfig: s,
          muteThunderboltEvents: c,
          isServerSide: +!a,
          isSuccessfulSSR: !a,
          fallbackReason: l?.errorInfo,
          mpaSessionId: e.mpaSessionId
        }
      })(), r = {}, s = 1, {
        sendBeat: o = (e, i, n = {}) => {
          if (i && performance.mark) {
            let n = `${i} (beat ${e})`;
            performance.mark(n)
          }
          let o = globalThis.window?.viewerModel;
          if (!o?.experiments["specs.thunderbolt.removeSendBeat"]) {
            let o = Date.now(),
              a = (0, m.b)(),
              c = Math.round(performance.now() - a),
              u = o - t.initialTimestamp;
            if (t.suppressbi || window.__browser_deprecation__) return;
            let {
              pageId: p,
              pageNumber: w = s,
              navigationType: h
            } = n, f = `&pn=${w}`;
            p && (f += `&pid=${p}`), h && (f += `&nt=${h}`), l(d(i, {
              eventType: e,
              ts: u,
              tts: c,
              extra: f
            }, t, r))
          }
        },
        reportBI: function(e, i) {
          let n, t;
          n = i ? `${e} - ${i}` : e, t = "end" === i ? `${e} - start` : null, performance.mark(n), performance.measure && t && performance.measure(`\u2B50${e}`, t, n)
        },
        wixBiSession: t,
        sendBeacon: l,
        setDynamicSessionData: ({
          visitorId: e,
          siteMemberId: i,
          bsi: n
        }) => {
          r.visitorId = e || r.visitorId, r.siteMemberId = i || r.siteMemberId, r.bsi = n || r.bsi
        },
        reportPageNavigation: function(e) {
          s += 1, o(a.lF.PAGE_NAVIGATION, "page navigation start", {
            pageId: e,
            pageNumber: s
          })
        },
        reportPageNavigationDone: function(e, i) {
          o(a.lF.PAGE_NAVIGATION_DONE, "page navigation complete", {
            pageId: e,
            pageNumber: s,
            navigationType: i
          }), (i === a.w4.DYNAMIC_REDIRECT || i === a.w4.NAVIGATION_ERROR || i === a.w4.CANCELED) && (s -= 1)
        }
      });
      window.bi = h, window.bi.wixBiSession.isServerSide = +!window.clientSideRender, window.bi.wixBiSession.isSuccessfulSSR = !window.clientSideRender, window.clientSideRender && (window.bi.wixBiSession.fallbackReason = window.santaRenderingError?.errorInfo), h.sendBeat(1, "Init")
    }
  },
  function(e) {
    e.O(0, ["6008"], function() {
      return e(e.s = 40250)
    }), e.O()
  }
]);
;
window.firstPageId = 'c1dmp'
if (window.requestCloseWelcomeScreen) {
  window.requestCloseWelcomeScreen()
}
if (!window.__browser_deprecation__) {
  window.fedops.phaseStarted('partially_visible', {
    paramsOverrides: {
      pageId: firstPageId,
      isSuccessfulSSR: !clientSideRender
    }
  })
}
;
const wixAdsOffsetHeight = document.querySelector(':is(.WIX_ADS, #WIX_ADS)')?.offsetHeight || 0;
const header = document.getElementsByTagName('header')[0];
let headerOffsetHeight = 0;
if (header) {
  const headerPosition = window.getComputedStyle(header).getPropertyValue('position').toLowerCase();
  const isHeaderStickyOrFixed = headerPosition === 'sticky' || headerPosition === 'fixed';
  headerOffsetHeight = isHeaderStickyOrFixed ? header.offsetHeight : 0;
}
document.documentElement.style.scrollPaddingTop = `${wixAdsOffsetHeight + headerOffsetHeight}px`;
