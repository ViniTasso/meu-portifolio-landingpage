! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(["globals"], t) : "object" == typeof exports ? exports.zsj1t = t() : e.zsj1t = t()
}(this, (function(globals) {
  var $w = globals.$w,
    $ns = globals.$ns,
    $wixContext = globals.$wixContext,
    $widget = globals.$widget,
    console = globals.console,
    elementorySupport = globals.elementorySupport,
    e = globals.generateWebMethodUrl || ((e, t) => `/_webMethods/${t}/${e}.ajax`);
  return function() {
    var t = {
        574: function(e, t, n) {
          "use strict";
          t.xh = void 0;
          var r = n(736);
          var o = n(864);
          Object.defineProperty(t, "xh", {
            enumerable: !0,
            get: function() {
              return o.locationRuntime
            }
          })
        },
        864: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.locationRuntime = void 0;
          const r = n(409);
          t.locationRuntime = (0, r.createHostModule)({
            baseUrl: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "baseUrl",
                args: t
              })
            },
            path: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "path",
                args: t
              })
            },
            prefix: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "prefix",
                args: t
              })
            },
            protocol: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "protocol",
                args: t
              })
            },
            query: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "query",
                args: t
              })
            },
            url: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "url",
                args: t
              })
            },
            onChange: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "onChange",
                args: t
              })
            },
            to: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "to",
                args: t
              })
            }
          })
        },
        736: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.queryParamsRuntime = void 0;
          const r = n(409);
          t.queryParamsRuntime = (0, r.createHostModule)({
            add: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "queryParams.add",
                args: t
              })
            },
            remove: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "location",
                method: "queryParams.remove",
                args: t
              })
            }
          })
        },
        526: function(e, t, n) {
          "use strict";
          t.lz = void 0;
          var r = n(502);
          var o = n(325);
          Object.defineProperty(t, "lz", {
            enumerable: !0,
            get: function() {
              return o.siteRuntime
            }
          })
        },
        325: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.siteRuntime = void 0;
          const r = n(409);
          t.siteRuntime = (0, r.createHostModule)({
            currency: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "currency",
                args: t
              })
            },
            currentPage: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "currentPage",
                args: t
              })
            },
            language: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "language",
                args: t
              })
            },
            regionalSettings: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "regionalSettings",
                args: t
              })
            },
            revision: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "revision",
                args: t
              })
            },
            timezone: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "timezone",
                args: t
              })
            },
            getFontsHtml: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "getFontsHtml",
                args: t
              })
            },
            getSiteDisplayName: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "getSiteDisplayName",
                args: t
              })
            },
            getSiteStructure: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "getSiteStructure",
                args: t
              })
            },
            getSiteThemeHtml: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "getSiteThemeHtml",
                args: t
              })
            },
            prefetchPageResources: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "prefetchPageResources",
                args: t
              })
            },
            routerSitemap: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "routerSitemap",
                args: t
              })
            }
          })
        },
        502: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.wixRouterSitemapEntryRuntime = void 0;
          const r = n(409);
          t.wixRouterSitemapEntryRuntime = (0, r.createHostModule)({
            changeFrequency: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "wixRouterSitemapEntry.changeFrequency",
                args: t
              })
            },
            lastModified: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "wixRouterSitemapEntry.lastModified",
                args: t
              })
            },
            pageName: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "wixRouterSitemapEntry.pageName",
                args: t
              })
            },
            priority: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "wixRouterSitemapEntry.priority",
                args: t
              })
            },
            title: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "wixRouterSitemapEntry.title",
                args: t
              })
            },
            url: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "site",
                method: "wixRouterSitemapEntry.url",
                args: t
              })
            }
          })
        },
        658: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.consentPolicyRuntime = void 0;
          const r = n(409);
          t.consentPolicyRuntime = (0, r.createHostModule)({
            getCurrentConsentPolicy: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "consentPolicy.getCurrentConsentPolicy",
                args: t
              })
            },
            onConsentPolicyChanged: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "consentPolicy.onConsentPolicyChanged",
                args: t
              })
            },
            resetConsentPolicy: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "consentPolicy.resetConsentPolicy",
                args: t
              })
            },
            setConsentPolicy: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "consentPolicy.setConsentPolicy",
                args: t
              })
            }
          })
        },
        668: function(e, t, n) {
          "use strict";
          t.n6 = t.gH = void 0;
          var r = n(658);
          var o = n(205);
          var i = n(449);
          Object.defineProperty(t, "gH", {
            enumerable: !0,
            get: function() {
              return i.multilingualRuntime
            }
          });
          var a = n(996);
          Object.defineProperty(t, "n6", {
            enumerable: !0,
            get: function() {
              return a.renderingRuntime
            }
          });
          var s = n(195);
          var c = n(0)
        },
        205: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.lightboxRuntime = void 0;
          const r = n(409);
          t.lightboxRuntime = (0, r.createHostModule)({
            close: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "lightbox.close",
                args: t
              })
            },
            getContext: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "lightbox.getContext",
                args: t
              })
            },
            open: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "lightbox.open",
                args: t
              })
            },
            setBackgroundScroll: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "lightbox.setBackgroundScroll",
                args: t
              })
            }
          })
        },
        449: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.multilingualRuntime = void 0;
          const r = n(409);
          t.multilingualRuntime = (0, r.createHostModule)({
            currentLanguage: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "multilingual.currentLanguage",
                args: t
              })
            },
            isEnabled: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "multilingual.isEnabled",
                args: t
              })
            },
            siteLanguages: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "multilingual.siteLanguages",
                args: t
              })
            }
          })
        },
        996: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.renderingRuntime = void 0;
          const r = n(409);
          t.renderingRuntime = (0, r.createHostModule)({
            env: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "rendering.env",
                args: t
              })
            }
          })
        },
        195: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.warmupDataRuntime = void 0;
          const r = n(409);
          t.warmupDataRuntime = (0, r.createHostModule)({
            get: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "warmupData.get",
                args: t
              })
            },
            set: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "warmupData.set",
                args: t
              })
            }
          })
        },
        0: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.windowRuntime = void 0;
          const r = n(409);
          t.windowRuntime = (0, r.createHostModule)({
            browserLocale: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "browserLocale",
                args: t
              })
            },
            formFactor: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "formFactor",
                args: t
              })
            },
            referrer: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "referrer",
                args: t
              })
            },
            viewMode: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "viewMode",
                args: t
              })
            },
            copyToClipboard: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "copyToClipboard",
                args: t
              })
            },
            getAppPageData: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "getAppPageData",
                args: t
              })
            },
            getBoundingRect: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "getBoundingRect",
                args: t
              })
            },
            getCurrentGeolocation: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "getCurrentGeolocation",
                args: t
              })
            },
            getRouterData: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "getRouterData",
                args: t
              })
            },
            openAppLightbox: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "openAppLightbox",
                args: t
              })
            },
            openLightbox: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "openLightbox",
                args: t
              })
            },
            openModal: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "openModal",
                args: t
              })
            },
            postMessage: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "postMessage",
                args: t
              })
            },
            registerEventListener: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "registerEventListener",
                args: t
              })
            },
            scrollBy: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "scrollBy",
                args: t
              })
            },
            scrollTo: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "scrollTo",
                args: t
              })
            },
            trackEvent: ({
              channel: e
            }) => function(...t) {
              return e.invoke({
                namespace: "window",
                method: "trackEvent",
                args: t
              })
            }
          })
        },
        763: function(t, n) {
          n.M = function() {
            return elementorySupport.getJSON(e("getUploadUrl", "backend/media-platform.web.js"), arguments, void 0, void 0)
          }
        },
        787: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ServicePluginDefinition = t.EventDefinition = void 0, t.contextualizeHostModuleV2 = function(e, t) {
            return {
              ...e,
              ...Object.fromEntries(t.map((t => [t, (...n) => {
                const r = (0, o.resolveContext)();
                if (!r) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
                return r.initWixModules(e)[t].apply(void 0, n)
              }])))
            }
          }, t.contextualizeRESTModuleV2 = function(e, t) {
            return (...n) => {
              const r = (0, o.resolveContext)();
              return r ? r.initWixModules(e, t).apply(void 0, n) : e.apply(void 0, n)
            }
          }, t.contextualizeEventDefinitionModuleV2 = function(e) {
            const t = (...t) => {
              const n = (0, o.resolveContext)();
              return n ? n.initWixModules(e).apply(void 0, t) : () => {}
            };
            return t.__type = e.__type, t.type = e.type, t.isDomainEvent = e.isDomainEvent, t.transformations = e.transformations, t
          }, t.contextualizeSerivcePluginModuleV2 = function(e) {
            const t = (...t) => {
              const n = (0, o.resolveContext)();
              return n ? n.initWixModules(e).apply(void 0, t) : () => {}
            };
            return t.__type = e.__type, t.componentType = e.componentType, t.methods = e.methods, t
          };
          const r = n(497);
          Object.defineProperty(t, "EventDefinition", {
            enumerable: !0,
            get: function() {
              return r.EventDefinition
            }
          }), Object.defineProperty(t, "ServicePluginDefinition", {
            enumerable: !0,
            get: function() {
              return r.ServicePluginDefinition
            }
          });
          const o = n(492)
        },
        492: function(e, t, n) {
          "use strict";
          var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
              void 0 === r && (r = n);
              var o = Object.getOwnPropertyDescriptor(t, n);
              o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                enumerable: !0,
                get: function() {
                  return t[n]
                }
              }), Object.defineProperty(e, r, o)
            } : function(e, t, n, r) {
              void 0 === r && (r = n), e[r] = t[n]
            }),
            o = this && this.__exportStar || function(e, t) {
              for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
            };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.resolveContext = a, t.contextualizeHostModule = function(e, t) {
            return (...n) => {
              const r = a();
              if (!r) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
              return r.initWixModules(e)[t].apply(void 0, n)
            }
          }, t.getContextualAuth = function() {
            const e = a();
            if (!e) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
            return e.getAuth()
          }, t.contextualizeRESTModule = function(e, t) {
            return (...n) => {
              const r = a();
              if (!r) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
              return r.initWixModules(e, !!n[t]?.suppressAuth).apply(void 0, n)
            }
          }, t.contextualizeEventDefinitionModule = function(e) {
            return (...t) => {
              const n = a();
              if (!n) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
              return n.initWixModules(e).apply(void 0, t)
            }
          }, t.contextualizeSerivcePluginModule = function(e) {
            return (...t) => {
              const n = a();
              if (!n) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
              return n.initWixModules(e).apply(void 0, t)
            }
          }, t.runWithoutContext = s;
          const i = n(868);

          function a() {
            const e = void 0 !== $wixContext && $wixContext.initWixModules ? $wixContext.initWixModules : void 0 !== globalThis.__wix_context__ && globalThis.__wix_context__.initWixModules ? globalThis.__wix_context__.initWixModules : void 0;
            if (e) return {
              initWixModules(t, n) {
                return s((() => e(t, n)))
              },
              fetchWithAuth() {
                throw new Error("fetchWithAuth is not available in this context")
              },
              graphql() {
                throw new Error("graphql is not available in this context")
              }
            };
            const t = void 0 !== $wixContext ? $wixContext.client : void 0 !== i.wixContext.client ? i.wixContext.client : void 0 !== globalThis.__wix_context__ ? globalThis.__wix_context__.client : void 0,
              n = void 0 !== $wixContext ? $wixContext.elevatedClient : void 0 !== i.wixContext.elevatedClient ? i.wixContext.elevatedClient : void 0 !== globalThis.__wix_context__ ? globalThis.__wix_context__.elevatedClient : void 0;
            return t || n ? {
              initWixModules(e, r) {
                if (r) {
                  if (!n) throw new Error("An elevated client is required to use elevated modules. Make sure to initialize the Wix context with an elevated client before using elevated SDK modules");
                  return s((() => n.use(e)))
                }
                if (!t) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
                return s((() => t.use(e)))
              },
              fetchWithAuth: (e, n) => {
                if (!t) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
                return t.fetchWithAuth(e, n)
              },
              getAuth() {
                if (!t) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
                return t.auth
              },
              async graphql(e, n, r) {
                if (!t) throw new Error("Wix context is not available. Make sure to initialize the Wix context before using SDK modules");
                return t.graphql(e, n, r)
              }
            } : void 0
          }

          function s(e) {
            const t = globalThis.__wix_context__,
              n = {
                client: i.wixContext.client,
                elevatedClient: i.wixContext.elevatedClient
              };
            let r;
            globalThis.__wix_context__ = void 0, i.wixContext.client = void 0, i.wixContext.elevatedClient = void 0, void 0 !== $wixContext && (r = {
              client: $wixContext?.client,
              elevatedClient: $wixContext?.elevatedClient
            }, delete $wixContext.client, delete $wixContext.elevatedClient);
            try {
              return e()
            } finally {
              globalThis.__wix_context__ = t, i.wixContext.client = n.client, i.wixContext.elevatedClient = n.elevatedClient, void 0 !== $wixContext && ($wixContext.client = r.client, $wixContext.elevatedClient = r.elevatedClient)
            }
          }
          o(n(787), t)
        },
        409: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.createHostModule = function(e) {
            return (0, r.contextualizeHostModuleV2)({
              __type: "host",
              create: t => Object.entries(e).reduce(((e, [n, r]) => ({
                ...e,
                [n]: r(t)
              })), {})
            }, Object.keys(e))
          };
          const r = n(787)
        },
        868: function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, {
            wixContext: function() {
              return r
            }
          });
          var r = {}
        },
        497: function(e, t, n) {
          "use strict";

          function r(e, t = !1, n = (e => e)) {
            return () => ({
              __type: "event-definition",
              type: e,
              isDomainEvent: t,
              transformations: n
            })
          }

          function o(e, t) {
            return {
              __type: "service-plugin-definition",
              componentType: e,
              methods: t
            }
          }
          n.r(t), n.d(t, {
            EventDefinition: function() {
              return r
            },
            SERVICE_PLUGIN_ERROR_TYPE: function() {
              return i
            },
            SORT_CAPABILITIES: function() {
              return s
            },
            SORT_DIRECTIONS: function() {
              return a
            },
            ServicePluginDefinition: function() {
              return o
            }
          });
          var i = "wix_spi_error",
            a = {
              ASC: "ASC",
              DESC: "DESC"
            },
            s = {
              ...a,
              BOTH: "BOTH",
              NONE: "NONE"
            }
        }
      },
      n = {};

    function r(e) {
      var o = n[e];
      if (void 0 !== o) return o.exports;
      var i = n[e] = {
        exports: {}
      };
      return t[e].call(i.exports, i, i.exports, r), i.exports
    }
    r.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return r.d(t, {
        a: t
      }), t
    }, r.d = function(e, t) {
      for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
        enumerable: !0,
        get: t[n]
      })
    }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    };
    var o = {};
    return function() {
      "use strict";
      r.r(o);
      var e = {};
      r.r(e), r.d(e, {
        hasBrowserEnv: function() {
          return he
        },
        hasStandardBrowserEnv: function() {
          return me
        },
        hasStandardBrowserWebWorkerEnv: function() {
          return ge
        },
        navigator: function() {
          return pe
        },
        origin: function() {
          return ve
        }
      });
      var t = r(668),
        n = r(574),
        i = r(526);

      function a(e, t) {
        return function() {
          return e.apply(t, arguments)
        }
      }
      const {
        toString: s
      } = Object.prototype, {
        getPrototypeOf: c
      } = Object, {
        iterator: u,
        toStringTag: l
      } = Symbol, f = (d = Object.create(null), e => {
        const t = s.call(e);
        return d[t] || (d[t] = t.slice(8, -1).toLowerCase())
      });
      var d;
      const h = e => (e = e.toLowerCase(), t => f(t) === e),
        p = e => t => typeof t === e,
        {
          isArray: m
        } = Array,
        g = p("undefined");

      function v(e) {
        return null !== e && !g(e) && null !== e.constructor && !g(e.constructor) && b(e.constructor.isBuffer) && e.constructor.isBuffer(e)
      }
      const y = h("ArrayBuffer");
      const w = p("string"),
        b = p("function"),
        x = p("number"),
        E = e => null !== e && "object" == typeof e,
        S = e => {
          if ("object" !== f(e)) return !1;
          const t = c(e);
          return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || l in e || u in e)
        },
        O = h("Date"),
        _ = h("File"),
        R = h("Blob"),
        k = h("FileList"),
        L = h("URLSearchParams"),
        [T, P, C, A] = ["ReadableStream", "Request", "Response", "Headers"].map(h);

      function j(e, t, {
        allOwnKeys: n = !1
      } = {}) {
        if (null == e) return;
        let r, o;
        if ("object" != typeof e && (e = [e]), m(e))
          for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
        else {
          if (v(e)) return;
          const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = o.length;
          let a;
          for (r = 0; r < i; r++) a = o[r], t.call(null, e[a], a, e)
        }
      }

      function M(e, t) {
        if (v(e)) return null;
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r, o = n.length;
        for (; o-- > 0;)
          if (r = n[o], t === r.toLowerCase()) return r;
        return null
      }
      const N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        D = e => !g(e) && e !== N;
      const U = (F = "undefined" != typeof Uint8Array && c(Uint8Array), e => F && e instanceof F);
      var F;
      const B = h("HTMLFormElement"),
        I = (({
          hasOwnProperty: e
        }) => (t, n) => e.call(t, n))(Object.prototype),
        W = h("RegExp"),
        q = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          j(n, ((n, o) => {
            let i;
            !1 !== (i = t(n, o, e)) && (r[o] = i || n)
          })), Object.defineProperties(e, r)
        };
      const z = h("AsyncFunction"),
        H = (G = "function" == typeof setImmediate, K = b(N.postMessage), G ? setImmediate : K ? ($ = `axios@${Math.random()}`, J = [], N.addEventListener("message", (({
          source: e,
          data: t
        }) => {
          e === N && t === $ && J.length && J.shift()()
        }), !1), e => {
          J.push(e), N.postMessage($, "*")
        }) : e => setTimeout(e));
      var G, K, $, J;
      const V = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(N) : "undefined" != typeof process && process.nextTick || H;
      var X = {
        isArray: m,
        isArrayBuffer: y,
        isBuffer: v,
        isFormData: e => {
          let t;
          return e && ("function" == typeof FormData && e instanceof FormData || b(e.append) && ("formdata" === (t = f(e)) || "object" === t && b(e.toString) && "[object FormData]" === e.toString()))
        },
        isArrayBufferView: function(e) {
          let t;
          return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && y(e.buffer), t
        },
        isString: w,
        isNumber: x,
        isBoolean: e => !0 === e || !1 === e,
        isObject: E,
        isPlainObject: S,
        isEmptyObject: e => {
          if (!E(e) || v(e)) return !1;
          try {
            return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
          } catch (e) {
            return !1
          }
        },
        isReadableStream: T,
        isRequest: P,
        isResponse: C,
        isHeaders: A,
        isUndefined: g,
        isDate: O,
        isFile: _,
        isBlob: R,
        isRegExp: W,
        isFunction: b,
        isStream: e => E(e) && b(e.pipe),
        isURLSearchParams: L,
        isTypedArray: U,
        isFileList: k,
        forEach: j,
        merge: function e() {
          const {
            caseless: t,
            skipUndefined: n
          } = D(this) && this || {}, r = {}, o = (o, i) => {
            if ("__proto__" === i || "constructor" === i || "prototype" === i) return;
            const a = t && M(r, i) || i;
            S(r[a]) && S(o) ? r[a] = e(r[a], o) : S(o) ? r[a] = e({}, o) : m(o) ? r[a] = o.slice() : n && g(o) || (r[a] = o)
          };
          for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && j(arguments[e], o);
          return r
        },
        extend: (e, t, n, {
          allOwnKeys: r
        } = {}) => (j(t, ((t, r) => {
          n && b(t) ? Object.defineProperty(e, r, {
            value: a(t, n),
            writable: !0,
            enumerable: !0,
            configurable: !0
          }) : Object.defineProperty(e, r, {
            value: t,
            writable: !0,
            enumerable: !0,
            configurable: !0
          })
        }), {
          allOwnKeys: r
        }), e),
        trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, n, r) => {
          e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e, "super", {
            value: t.prototype
          }), n && Object.assign(e.prototype, n)
        },
        toFlatObject: (e, t, n, r) => {
          let o, i, a;
          const s = {};
          if (t = t || {}, null == e) return t;
          do {
            for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0;) a = o[i], r && !r(a, e, t) || s[a] || (t[a] = e[a], s[a] = !0);
            e = !1 !== n && c(e)
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t
        },
        kindOf: f,
        kindOfTest: h,
        endsWith: (e, t, n) => {
          e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
          const r = e.indexOf(t, n);
          return -1 !== r && r === n
        },
        toArray: e => {
          if (!e) return null;
          if (m(e)) return e;
          let t = e.length;
          if (!x(t)) return null;
          const n = new Array(t);
          for (; t-- > 0;) n[t] = e[t];
          return n
        },
        forEachEntry: (e, t) => {
          const n = (e && e[u]).call(e);
          let r;
          for (;
            (r = n.next()) && !r.done;) {
            const n = r.value;
            t.call(e, n[0], n[1])
          }
        },
        matchAll: (e, t) => {
          let n;
          const r = [];
          for (; null !== (n = e.exec(t));) r.push(n);
          return r
        },
        isHTMLForm: B,
        hasOwnProperty: I,
        hasOwnProp: I,
        reduceDescriptors: q,
        freezeMethods: e => {
          q(e, ((t, n) => {
            if (b(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
            const r = e[n];
            b(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'")
            }))
          }))
        },
        toObjectSet: (e, t) => {
          const n = {},
            r = e => {
              e.forEach((e => {
                n[e] = !0
              }))
            };
          return m(e) ? r(e) : r(String(e).split(t)), n
        },
        toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
          return t.toUpperCase() + n
        })),
        noop: () => {},
        toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
        findKey: M,
        global: N,
        isContextDefined: D,
        isSpecCompliantForm: function(e) {
          return !!(e && b(e.append) && "FormData" === e[l] && e[u])
        },
        toJSONObject: e => {
          const t = new Array(10),
            n = (e, r) => {
              if (E(e)) {
                if (t.indexOf(e) >= 0) return;
                if (v(e)) return e;
                if (!("toJSON" in e)) {
                  t[r] = e;
                  const o = m(e) ? [] : {};
                  return j(e, ((e, t) => {
                    const i = n(e, r + 1);
                    !g(i) && (o[t] = i)
                  })), t[r] = void 0, o
                }
              }
              return e
            };
          return n(e, 0)
        },
        isAsyncFn: z,
        isThenable: e => e && (E(e) || b(e)) && b(e.then) && b(e.catch),
        setImmediate: H,
        asap: V,
        isIterable: e => null != e && b(e[u])
      };
      class Y extends Error {
        static from(e, t, n, r, o, i) {
          const a = new Y(e.message, t || e.code, n, r, o);
          return a.cause = e, a.name = e.name, i && Object.assign(a, i), a
        }
        constructor(e, t, n, r, o) {
          super(e), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status)
        }
        toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: X.toJSONObject(this.config),
            code: this.code,
            status: this.status
          }
        }
      }
      Y.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", Y.ERR_BAD_OPTION = "ERR_BAD_OPTION", Y.ECONNABORTED = "ECONNABORTED", Y.ETIMEDOUT = "ETIMEDOUT", Y.ERR_NETWORK = "ERR_NETWORK", Y.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", Y.ERR_DEPRECATED = "ERR_DEPRECATED", Y.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", Y.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", Y.ERR_CANCELED = "ERR_CANCELED", Y.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", Y.ERR_INVALID_URL = "ERR_INVALID_URL";
      var Q = Y;

      function Z(e) {
        return X.isPlainObject(e) || X.isArray(e)
      }

      function ee(e) {
        return X.endsWith(e, "[]") ? e.slice(0, -2) : e
      }

      function te(e, t, n) {
        return e ? e.concat(t).map((function(e, t) {
          return e = ee(e), !n && t ? "[" + e + "]" : e
        })).join(n ? "." : "") : t
      }
      const ne = X.toFlatObject(X, {}, null, (function(e) {
        return /^is[A-Z]/.test(e)
      }));
      var re = function(e, t, n) {
        if (!X.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData;
        const r = (n = X.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
          }, !1, (function(e, t) {
            return !X.isUndefined(t[e])
          }))).metaTokens,
          o = n.visitor || u,
          i = n.dots,
          a = n.indexes,
          s = (n.Blob || "undefined" != typeof Blob && Blob) && X.isSpecCompliantForm(t);
        if (!X.isFunction(o)) throw new TypeError("visitor must be a function");

        function c(e) {
          if (null === e) return "";
          if (X.isDate(e)) return e.toISOString();
          if (X.isBoolean(e)) return e.toString();
          if (!s && X.isBlob(e)) throw new Q("Blob is not supported. Use a Buffer instead.");
          return X.isArrayBuffer(e) || X.isTypedArray(e) ? s && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
        }

        function u(e, n, o) {
          let s = e;
          if (e && !o && "object" == typeof e)
            if (X.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
            else if (X.isArray(e) && function(e) {
              return X.isArray(e) && !e.some(Z)
            }(e) || (X.isFileList(e) || X.endsWith(n, "[]")) && (s = X.toArray(e))) return n = ee(n), s.forEach((function(e, r) {
            !X.isUndefined(e) && null !== e && t.append(!0 === a ? te([n], r, i) : null === a ? n : n + "[]", c(e))
          })), !1;
          return !!Z(e) || (t.append(te(o, n, i), c(e)), !1)
        }
        const l = [],
          f = Object.assign(ne, {
            defaultVisitor: u,
            convertValue: c,
            isVisitable: Z
          });
        if (!X.isObject(e)) throw new TypeError("data must be an object");
        return function e(n, r) {
          if (!X.isUndefined(n)) {
            if (-1 !== l.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
            l.push(n), X.forEach(n, (function(n, i) {
              !0 === (!(X.isUndefined(n) || null === n) && o.call(t, n, X.isString(i) ? i.trim() : i, r, f)) && e(n, r ? r.concat(i) : [i])
            })), l.pop()
          }
        }(e), t
      };

      function oe(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
          return t[e]
        }))
      }

      function ie(e, t) {
        this._pairs = [], e && re(e, this, t)
      }
      const ae = ie.prototype;
      ae.append = function(e, t) {
        this._pairs.push([e, t])
      }, ae.toString = function(e) {
        const t = e ? function(t) {
          return e.call(this, t, oe)
        } : oe;
        return this._pairs.map((function(e) {
          return t(e[0]) + "=" + t(e[1])
        }), "").join("&")
      };
      var se = ie;

      function ce(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
      }

      function ue(e, t, n) {
        if (!t) return e;
        const r = n && n.encode || ce,
          o = X.isFunction(n) ? {
            serialize: n
          } : n,
          i = o && o.serialize;
        let a;
        if (a = i ? i(t, o) : X.isURLSearchParams(t) ? t.toString() : new se(t, o).toString(r), a) {
          const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
        }
        return e
      }
      var le = class {
          constructor() {
            this.handlers = []
          }
          use(e, t, n) {
            return this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null)
          }
          clear() {
            this.handlers && (this.handlers = [])
          }
          forEach(e) {
            X.forEach(this.handlers, (function(t) {
              null !== t && e(t)
            }))
          }
        },
        fe = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
          legacyInterceptorReqResOrdering: !0
        },
        de = {
          isBrowser: !0,
          classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : se,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
          },
          protocols: ["http", "https", "file", "blob", "url", "data"]
        };
      const he = "undefined" != typeof window && "undefined" != typeof document,
        pe = "object" == typeof navigator && navigator || void 0,
        me = he && (!pe || ["ReactNative", "NativeScript", "NS"].indexOf(pe.product) < 0),
        ge = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        ve = he && window.location.href || "http://localhost";
      var ye = {
        ...e,
        ...de
      };
      var we = function(e) {
        function t(e, n, r, o) {
          let i = e[o++];
          if ("__proto__" === i) return !0;
          const a = Number.isFinite(+i),
            s = o >= e.length;
          if (i = !i && X.isArray(r) ? r.length : i, s) return X.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !a;
          r[i] && X.isObject(r[i]) || (r[i] = []);
          return t(e, n, r[i], o) && X.isArray(r[i]) && (r[i] = function(e) {
            const t = {},
              n = Object.keys(e);
            let r;
            const o = n.length;
            let i;
            for (r = 0; r < o; r++) i = n[r], t[i] = e[i];
            return t
          }(r[i])), !a
        }
        if (X.isFormData(e) && X.isFunction(e.entries)) {
          const n = {};
          return X.forEachEntry(e, ((e, r) => {
            t(function(e) {
              return X.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
            }(e), r, n, 0)
          })), n
        }
        return null
      };
      const be = {
        transitional: fe,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [function(e, t) {
          const n = t.getContentType() || "",
            r = n.indexOf("application/json") > -1,
            o = X.isObject(e);
          o && X.isHTMLForm(e) && (e = new FormData(e));
          if (X.isFormData(e)) return r ? JSON.stringify(we(e)) : e;
          if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e) || X.isReadableStream(e)) return e;
          if (X.isArrayBufferView(e)) return e.buffer;
          if (X.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
          let i;
          if (o) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
              return re(e, new ye.classes.URLSearchParams, {
                visitor: function(e, t, n, r) {
                  return ye.isNode && X.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                },
                ...t
              })
            }(e, this.formSerializer).toString();
            if ((i = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
              const t = this.env && this.env.FormData;
              return re(i ? {
                "files[]": e
              } : e, t && new t, this.formSerializer)
            }
          }
          return o || r ? (t.setContentType("application/json", !1), function(e, t, n) {
            if (X.isString(e)) try {
              return (t || JSON.parse)(e), X.trim(e)
            } catch (e) {
              if ("SyntaxError" !== e.name) throw e
            }
            return (n || JSON.stringify)(e)
          }(e)) : e
        }],
        transformResponse: [function(e) {
          const t = this.transitional || be.transitional,
            n = t && t.forcedJSONParsing,
            r = "json" === this.responseType;
          if (X.isResponse(e) || X.isReadableStream(e)) return e;
          if (e && X.isString(e) && (n && !this.responseType || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
              return JSON.parse(e, this.parseReviver)
            } catch (e) {
              if (n) {
                if ("SyntaxError" === e.name) throw Q.from(e, Q.ERR_BAD_RESPONSE, this, null, this.response);
                throw e
              }
            }
          }
          return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: ye.classes.FormData,
          Blob: ye.classes.Blob
        },
        validateStatus: function(e) {
          return e >= 200 && e < 300
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
          }
        }
      };
      X.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
        be.headers[e] = {}
      }));
      var xe = be;
      const Ee = X.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
      const Se = Symbol("internals");

      function Oe(e) {
        return e && String(e).trim().toLowerCase()
      }

      function _e(e) {
        return !1 === e || null == e ? e : X.isArray(e) ? e.map(_e) : String(e)
      }

      function Re(e, t, n, r, o) {
        return X.isFunction(r) ? r.call(this, t, n) : (o && (t = n), X.isString(t) ? X.isString(r) ? -1 !== t.indexOf(r) : X.isRegExp(r) ? r.test(t) : void 0 : void 0)
      }
      class ke {
        constructor(e) {
          e && this.set(e)
        }
        set(e, t, n) {
          const r = this;

          function o(e, t, n) {
            const o = Oe(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const i = X.findKey(r, o);
            (!i || void 0 === r[i] || !0 === n || void 0 === n && !1 !== r[i]) && (r[i || t] = _e(e))
          }
          const i = (e, t) => X.forEach(e, ((e, n) => o(e, n, t)));
          if (X.isPlainObject(e) || e instanceof this.constructor) i(e, t);
          else if (X.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) i((e => {
            const t = {};
            let n, r, o;
            return e && e.split("\n").forEach((function(e) {
              o = e.indexOf(":"), n = e.substring(0, o).trim().toLowerCase(), r = e.substring(o + 1).trim(), !n || t[n] && Ee[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            })), t
          })(e), t);
          else if (X.isObject(e) && X.isIterable(e)) {
            let n, r, o = {};
            for (const t of e) {
              if (!X.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
              o[r = t[0]] = (n = o[r]) ? X.isArray(n) ? [...n, t[1]] : [n, t[1]] : t[1]
            }
            i(o, t)
          } else null != e && o(t, e, n);
          return this
        }
        get(e, t) {
          if (e = Oe(e)) {
            const n = X.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t) return function(e) {
                const t = Object.create(null),
                  n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let r;
                for (; r = n.exec(e);) t[r[1]] = r[2];
                return t
              }(e);
              if (X.isFunction(t)) return t.call(this, e, n);
              if (X.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function")
            }
          }
        }
        has(e, t) {
          if (e = Oe(e)) {
            const n = X.findKey(this, e);
            return !(!n || void 0 === this[n] || t && !Re(0, this[n], n, t))
          }
          return !1
        }
        delete(e, t) {
          const n = this;
          let r = !1;

          function o(e) {
            if (e = Oe(e)) {
              const o = X.findKey(n, e);
              !o || t && !Re(0, n[o], o, t) || (delete n[o], r = !0)
            }
          }
          return X.isArray(e) ? e.forEach(o) : o(e), r
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--;) {
            const o = t[n];
            e && !Re(0, this[o], o, e, !0) || (delete this[o], r = !0)
          }
          return r
        }
        normalize(e) {
          const t = this,
            n = {};
          return X.forEach(this, ((r, o) => {
            const i = X.findKey(n, o);
            if (i) return t[i] = _e(r), void delete t[o];
            const a = e ? function(e) {
              return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
            }(o) : String(o).trim();
            a !== o && delete t[o], t[a] = _e(r), n[a] = !0
          })), this
        }
        concat(...e) {
          return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
          const t = Object.create(null);
          return X.forEach(this, ((n, r) => {
            null != n && !1 !== n && (t[r] = e && X.isArray(n) ? n.join(", ") : n)
          })), t
        } [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
          return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
        }
        getSetCookie() {
          return this.get("set-cookie") || []
        }
        get[Symbol.toStringTag]() {
          return "AxiosHeaders"
        }
        static from(e) {
          return e instanceof this ? e : new this(e)
        }
        static concat(e, ...t) {
          const n = new this(e);
          return t.forEach((e => n.set(e))), n
        }
        static accessor(e) {
          const t = (this[Se] = this[Se] = {
              accessors: {}
            }).accessors,
            n = this.prototype;

          function r(e) {
            const r = Oe(e);
            t[r] || (! function(e, t) {
              const n = X.toCamelCase(" " + t);
              ["get", "set", "has"].forEach((r => {
                Object.defineProperty(e, r + n, {
                  value: function(e, n, o) {
                    return this[r].call(this, t, e, n, o)
                  },
                  configurable: !0
                })
              }))
            }(n, e), t[r] = !0)
          }
          return X.isArray(e) ? e.forEach(r) : r(e), this
        }
      }
      ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), X.reduceDescriptors(ke.prototype, (({
        value: e
      }, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
          get: () => e,
          set(e) {
            this[n] = e
          }
        }
      })), X.freezeMethods(ke);
      var Le = ke;

      function Te(e, t) {
        const n = this || xe,
          r = t || n,
          o = Le.from(r.headers);
        let i = r.data;
        return X.forEach(e, (function(e) {
          i = e.call(n, i, o.normalize(), t ? t.status : void 0)
        })), o.normalize(), i
      }

      function Pe(e) {
        return !(!e || !e.__CANCEL__)
      }
      var Ce = class extends Q {
        constructor(e, t, n) {
          super(null == e ? "canceled" : e, Q.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0
        }
      };

      function Ae(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(new Q("Request failed with status code " + n.status, [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
      }
      var je = function(e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let o, i = 0,
          a = 0;
        return t = void 0 !== t ? t : 1e3,
          function(s) {
            const c = Date.now(),
              u = r[a];
            o || (o = c), n[i] = s, r[i] = c;
            let l = a,
              f = 0;
            for (; l !== i;) f += n[l++], l %= e;
            if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
            const d = u && c - u;
            return d ? Math.round(1e3 * f / d) : void 0
          }
      };
      var Me = function(e, t) {
        let n, r, o = 0,
          i = 1e3 / t;
        const a = (t, i = Date.now()) => {
          o = i, n = null, r && (clearTimeout(r), r = null), e(...t)
        };
        return [(...e) => {
          const t = Date.now(),
            s = t - o;
          s >= i ? a(e, t) : (n = e, r || (r = setTimeout((() => {
            r = null, a(n)
          }), i - s)))
        }, () => n && a(n)]
      };
      const Ne = (e, t, n = 3) => {
          let r = 0;
          const o = je(50, 250);
          return Me((n => {
            const i = n.loaded,
              a = n.lengthComputable ? n.total : void 0,
              s = i - r,
              c = o(s);
            r = i;
            e({
              loaded: i,
              total: a,
              progress: a ? i / a : void 0,
              bytes: s,
              rate: c || void 0,
              estimated: c && a && i <= a ? (a - i) / c : void 0,
              event: n,
              lengthComputable: null != a,
              [t ? "download" : "upload"]: !0
            })
          }), n)
        },
        De = (e, t) => {
          const n = null != e;
          return [r => t[0]({
            lengthComputable: n,
            total: e,
            loaded: r
          }), t[1]]
        },
        Ue = e => (...t) => X.asap((() => e(...t)));
      var Fe = ye.hasStandardBrowserEnv ? ((e, t) => n => (n = new URL(n, ye.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(ye.origin), ye.navigator && /(msie|trident)/i.test(ye.navigator.userAgent)) : () => !0,
        Be = ye.hasStandardBrowserEnv ? {
          write(e, t, n, r, o, i, a) {
            if ("undefined" == typeof document) return;
            const s = [`${e}=${encodeURIComponent(t)}`];
            X.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), X.isString(r) && s.push(`path=${r}`), X.isString(o) && s.push(`domain=${o}`), !0 === i && s.push("secure"), X.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ")
          },
          read(e) {
            if ("undefined" == typeof document) return null;
            const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : null
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5, "/")
          }
        } : {
          write() {},
          read() {
            return null
          },
          remove() {}
        };

      function Ie(e, t, n) {
        let r = !("string" == typeof(o = t) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o));
        var o;
        return e && (r || 0 == n) ? function(e, t) {
          return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
      }
      const We = e => e instanceof Le ? {
        ...e
      } : e;

      function qe(e, t) {
        t = t || {};
        const n = {};

        function r(e, t, n, r) {
          return X.isPlainObject(e) && X.isPlainObject(t) ? X.merge.call({
            caseless: r
          }, e, t) : X.isPlainObject(t) ? X.merge({}, t) : X.isArray(t) ? t.slice() : t
        }

        function o(e, t, n, o) {
          return X.isUndefined(t) ? X.isUndefined(e) ? void 0 : r(void 0, e, 0, o) : r(e, t, 0, o)
        }

        function i(e, t) {
          if (!X.isUndefined(t)) return r(void 0, t)
        }

        function a(e, t) {
          return X.isUndefined(t) ? X.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
        }

        function s(n, o, i) {
          return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0
        }
        const c = {
          url: i,
          method: i,
          data: i,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: s,
          headers: (e, t, n) => o(We(e), We(t), 0, !0)
        };
        return X.forEach(Object.keys({
          ...e,
          ...t
        }), (function(r) {
          if ("__proto__" === r || "constructor" === r || "prototype" === r) return;
          const i = X.hasOwnProp(c, r) ? c[r] : o,
            a = i(e[r], t[r], r);
          X.isUndefined(a) && i !== s || (n[r] = a)
        })), n
      }
      var ze = e => {
        const t = qe({}, e);
        let {
          data: n,
          withXSRFToken: r,
          xsrfHeaderName: o,
          xsrfCookieName: i,
          headers: a,
          auth: s
        } = t;
        if (t.headers = a = Le.from(a), t.url = ue(Ie(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && a.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), X.isFormData(n))
          if (ye.hasStandardBrowserEnv || ye.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
          else if (X.isFunction(n.getHeaders)) {
          const e = n.getHeaders(),
            t = ["content-type", "content-length"];
          Object.entries(e).forEach((([e, n]) => {
            t.includes(e.toLowerCase()) && a.set(e, n)
          }))
        }
        if (ye.hasStandardBrowserEnv && (r && X.isFunction(r) && (r = r(t)), r || !1 !== r && Fe(t.url))) {
          const e = o && i && Be.read(i);
          e && a.set(o, e)
        }
        return t
      };
      var He = "undefined" != typeof XMLHttpRequest && function(e) {
        return new Promise((function(t, n) {
          const r = ze(e);
          let o = r.data;
          const i = Le.from(r.headers).normalize();
          let a, s, c, u, l, {
            responseType: f,
            onUploadProgress: d,
            onDownloadProgress: h
          } = r;

          function p() {
            u && u(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(a), r.signal && r.signal.removeEventListener("abort", a)
          }
          let m = new XMLHttpRequest;

          function g() {
            if (!m) return;
            const r = Le.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
            Ae((function(e) {
              t(e), p()
            }), (function(e) {
              n(e), p()
            }), {
              data: f && "text" !== f && "json" !== f ? m.response : m.responseText,
              status: m.status,
              statusText: m.statusText,
              headers: r,
              config: e,
              request: m
            }), m = null
          }
          m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout, "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
            m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
          }, m.onabort = function() {
            m && (n(new Q("Request aborted", Q.ECONNABORTED, e, m)), m = null)
          }, m.onerror = function(t) {
            const r = t && t.message ? t.message : "Network Error",
              o = new Q(r, Q.ERR_NETWORK, e, m);
            o.event = t || null, n(o), m = null
          }, m.ontimeout = function() {
            let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
            const o = r.transitional || fe;
            r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new Q(t, o.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, m)), m = null
          }, void 0 === o && i.setContentType(null), "setRequestHeader" in m && X.forEach(i.toJSON(), (function(e, t) {
            m.setRequestHeader(t, e)
          })), X.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), f && "json" !== f && (m.responseType = r.responseType), h && ([c, l] = Ne(h, !0), m.addEventListener("progress", c)), d && m.upload && ([s, u] = Ne(d), m.upload.addEventListener("progress", s), m.upload.addEventListener("loadend", u)), (r.cancelToken || r.signal) && (a = t => {
            m && (n(!t || t.type ? new Ce(null, e, m) : t), m.abort(), m = null)
          }, r.cancelToken && r.cancelToken.subscribe(a), r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
          const v = function(e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return t && t[1] || ""
          }(r.url);
          v && -1 === ye.protocols.indexOf(v) ? n(new Q("Unsupported protocol " + v + ":", Q.ERR_BAD_REQUEST, e)) : m.send(o || null)
        }))
      };
      var Ge = (e, t) => {
        const {
          length: n
        } = e = e ? e.filter(Boolean) : [];
        if (t || n) {
          let n, r = new AbortController;
          const o = function(e) {
            if (!n) {
              n = !0, a();
              const t = e instanceof Error ? e : this.reason;
              r.abort(t instanceof Q ? t : new Ce(t instanceof Error ? t.message : t))
            }
          };
          let i = t && setTimeout((() => {
            i = null, o(new Q(`timeout of ${t}ms exceeded`, Q.ETIMEDOUT))
          }), t);
          const a = () => {
            e && (i && clearTimeout(i), i = null, e.forEach((e => {
              e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o)
            })), e = null)
          };
          e.forEach((e => e.addEventListener("abort", o)));
          const {
            signal: s
          } = r;
          return s.unsubscribe = () => X.asap(a), s
        }
      };
      const Ke = function*(e, t) {
          let n = e.byteLength;
          if (!t || n < t) return void(yield e);
          let r, o = 0;
          for (; o < n;) r = o + t, yield e.slice(o, r), o = r
        },
        $e = async function*(e) {
          if (e[Symbol.asyncIterator]) return void(yield* e);
          const t = e.getReader();
          try {
            for (;;) {
              const {
                done: e,
                value: n
              } = await t.read();
              if (e) break;
              yield n
            }
          } finally {
            await t.cancel()
          }
        }, Je = (e, t, n, r) => {
          const o = async function*(e, t) {
            for await (const n of $e(e)) yield* Ke(n, t)
          }(e, t);
          let i, a = 0,
            s = e => {
              i || (i = !0, r && r(e))
            };
          return new ReadableStream({
            async pull(e) {
              try {
                const {
                  done: t,
                  value: r
                } = await o.next();
                if (t) return s(), void e.close();
                let i = r.byteLength;
                if (n) {
                  let e = a += i;
                  n(e)
                }
                e.enqueue(new Uint8Array(r))
              } catch (e) {
                throw s(e), e
              }
            },
            cancel(e) {
              return s(e), o.return()
            }
          }, {
            highWaterMark: 2
          })
        }, {
          isFunction: Ve
        } = X, Xe = (({
          Request: e,
          Response: t
        }) => ({
          Request: e,
          Response: t
        }))(X.global), {
          ReadableStream: Ye,
          TextEncoder: Qe
        } = X.global, Ze = (e, ...t) => {
          try {
            return !!e(...t)
          } catch (e) {
            return !1
          }
        }, et = e => {
          e = X.merge.call({
            skipUndefined: !0
          }, Xe, e);
          const {
            fetch: t,
            Request: n,
            Response: r
          } = e, o = t ? Ve(t) : "function" == typeof fetch, i = Ve(n), a = Ve(r);
          if (!o) return !1;
          const s = o && Ve(Ye),
            c = o && ("function" == typeof Qe ? (u = new Qe, e => u.encode(e)) : async e => new Uint8Array(await new n(e).arrayBuffer()));
          var u;
          const l = i && s && Ze((() => {
              let e = !1;
              const t = new n(ye.origin, {
                body: new Ye,
                method: "POST",
                get duplex() {
                  return e = !0, "half"
                }
              }).headers.has("Content-Type");
              return e && !t
            })),
            f = a && s && Ze((() => X.isReadableStream(new r("").body))),
            d = {
              stream: f && (e => e.body)
            };
          o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e => {
            !d[e] && (d[e] = (t, n) => {
              let r = t && t[e];
              if (r) return r.call(t);
              throw new Q(`Response type '${e}' is not supported`, Q.ERR_NOT_SUPPORT, n)
            })
          }));
          const h = async (e, t) => {
            const r = X.toFiniteNumber(e.getContentLength());
            return null == r ? (async e => {
              if (null == e) return 0;
              if (X.isBlob(e)) return e.size;
              if (X.isSpecCompliantForm(e)) {
                const t = new n(ye.origin, {
                  method: "POST",
                  body: e
                });
                return (await t.arrayBuffer()).byteLength
              }
              return X.isArrayBufferView(e) || X.isArrayBuffer(e) ? e.byteLength : (X.isURLSearchParams(e) && (e += ""), X.isString(e) ? (await c(e)).byteLength : void 0)
            })(t) : r
          };
          return async e => {
            let {
              url: o,
              method: a,
              data: s,
              signal: c,
              cancelToken: u,
              timeout: p,
              onDownloadProgress: m,
              onUploadProgress: g,
              responseType: v,
              headers: y,
              withCredentials: w = "same-origin",
              fetchOptions: b
            } = ze(e), x = t || fetch;
            v = v ? (v + "").toLowerCase() : "text";
            let E = Ge([c, u && u.toAbortSignal()], p),
              S = null;
            const O = E && E.unsubscribe && (() => {
              E.unsubscribe()
            });
            let _;
            try {
              if (g && l && "get" !== a && "head" !== a && 0 !== (_ = await h(y, s))) {
                let e, t = new n(o, {
                  method: "POST",
                  body: s,
                  duplex: "half"
                });
                if (X.isFormData(s) && (e = t.headers.get("content-type")) && y.setContentType(e), t.body) {
                  const [e, n] = De(_, Ne(Ue(g)));
                  s = Je(t.body, 65536, e, n)
                }
              }
              X.isString(w) || (w = w ? "include" : "omit");
              const t = i && "credentials" in n.prototype,
                c = {
                  ...b,
                  signal: E,
                  method: a.toUpperCase(),
                  headers: y.normalize().toJSON(),
                  body: s,
                  duplex: "half",
                  credentials: t ? w : void 0
                };
              S = i && new n(o, c);
              let u = await (i ? x(S, b) : x(o, c));
              const p = f && ("stream" === v || "response" === v);
              if (f && (m || p && O)) {
                const e = {};
                ["status", "statusText", "headers"].forEach((t => {
                  e[t] = u[t]
                }));
                const t = X.toFiniteNumber(u.headers.get("content-length")),
                  [n, o] = m && De(t, Ne(Ue(m), !0)) || [];
                u = new r(Je(u.body, 65536, n, (() => {
                  o && o(), O && O()
                })), e)
              }
              v = v || "text";
              let R = await d[X.findKey(d, v) || "text"](u, e);
              return !p && O && O(), await new Promise(((t, n) => {
                Ae(t, n, {
                  data: R,
                  headers: Le.from(u.headers),
                  status: u.status,
                  statusText: u.statusText,
                  config: e,
                  request: S
                })
              }))
            } catch (t) {
              if (O && O(), t && "TypeError" === t.name && /Load failed|fetch/i.test(t.message)) throw Object.assign(new Q("Network Error", Q.ERR_NETWORK, e, S, t && t.response), {
                cause: t.cause || t
              });
              throw Q.from(t, t && t.code, e, S, t && t.response)
            }
          }
        }, tt = new Map, nt = e => {
          let t = e && e.env || {};
          const {
            fetch: n,
            Request: r,
            Response: o
          } = t, i = [r, o, n];
          let a, s, c = i.length,
            u = tt;
          for (; c--;) a = i[c], s = u.get(a), void 0 === s && u.set(a, s = c ? new Map : et(t)), u = s;
          return s
        };
      nt();
      const rt = {
        http: null,
        xhr: He,
        fetch: {
          get: nt
        }
      };
      X.forEach(rt, ((e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", {
              value: t
            })
          } catch (e) {}
          Object.defineProperty(e, "adapterName", {
            value: t
          })
        }
      }));
      const ot = e => `- ${e}`,
        it = e => X.isFunction(e) || null === e || !1 === e;
      var at = {
        getAdapter: function(e, t) {
          e = X.isArray(e) ? e : [e];
          const {
            length: n
          } = e;
          let r, o;
          const i = {};
          for (let a = 0; a < n; a++) {
            let n;
            if (r = e[a], o = r, !it(r) && (o = rt[(n = String(r)).toLowerCase()], void 0 === o)) throw new Q(`Unknown adapter '${n}'`);
            if (o && (X.isFunction(o) || (o = o.get(t)))) break;
            i[n || "#" + a] = o
          }
          if (!o) {
            const e = Object.entries(i).map((([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
            let t = n ? e.length > 1 ? "since :\n" + e.map(ot).join("\n") : " " + ot(e[0]) : "as no adapter specified";
            throw new Q("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT")
          }
          return o
        },
        adapters: rt
      };

      function st(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ce(null, e)
      }

      function ct(e) {
        st(e), e.headers = Le.from(e.headers), e.data = Te.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return at.getAdapter(e.adapter || xe.adapter, e)(e).then((function(t) {
          return st(e), t.data = Te.call(e, e.transformResponse, t), t.headers = Le.from(t.headers), t
        }), (function(t) {
          return Pe(t) || (st(e), t && t.response && (t.response.data = Te.call(e, e.transformResponse, t.response), t.response.headers = Le.from(t.response.headers))), Promise.reject(t)
        }))
      }
      const ut = "1.13.5",
        lt = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
        lt[e] = function(n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
      }));
      const ft = {};
      lt.transitional = function(e, t, n) {
        function r(e, t) {
          return "[Axios v1.13.5] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, o, i) => {
          if (!1 === e) throw new Q(r(o, " has been removed" + (t ? " in " + t : "")), Q.ERR_DEPRECATED);
          return t && !ft[o] && (ft[o] = !0, console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, o, i)
        }
      }, lt.spelling = function(e) {
        return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0)
      };
      var dt = {
        assertOptions: function(e, t, n) {
          if ("object" != typeof e) throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
          const r = Object.keys(e);
          let o = r.length;
          for (; o-- > 0;) {
            const i = r[o],
              a = t[i];
            if (a) {
              const t = e[i],
                n = void 0 === t || a(t, i, e);
              if (!0 !== n) throw new Q("option " + i + " must be " + n, Q.ERR_BAD_OPTION_VALUE)
            } else if (!0 !== n) throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION)
          }
        },
        validators: lt
      };
      const ht = dt.validators;
      class pt {
        constructor(e) {
          this.defaults = e || {}, this.interceptors = {
            request: new le,
            response: new le
          }
        }
        async request(e, t) {
          try {
            return await this._request(e, t)
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace ? Error.captureStackTrace(t) : t = new Error;
              const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
              try {
                e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n
              } catch (e) {}
            }
            throw e
          }
        }
        _request(e, t) {
          "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = qe(this.defaults, t);
          const {
            transitional: n,
            paramsSerializer: r,
            headers: o
          } = t;
          void 0 !== n && dt.assertOptions(n, {
            silentJSONParsing: ht.transitional(ht.boolean),
            forcedJSONParsing: ht.transitional(ht.boolean),
            clarifyTimeoutError: ht.transitional(ht.boolean),
            legacyInterceptorReqResOrdering: ht.transitional(ht.boolean)
          }, !1), null != r && (X.isFunction(r) ? t.paramsSerializer = {
            serialize: r
          } : dt.assertOptions(r, {
            encode: ht.function,
            serialize: ht.function
          }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), dt.assertOptions(t, {
            baseUrl: ht.spelling("baseURL"),
            withXsrfToken: ht.spelling("withXSRFToken")
          }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
          let i = o && X.merge(o.common, o[t.method]);
          o && X.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
            delete o[e]
          })), t.headers = Le.concat(i, o);
          const a = [];
          let s = !0;
          this.interceptors.request.forEach((function(e) {
            if ("function" == typeof e.runWhen && !1 === e.runWhen(t)) return;
            s = s && e.synchronous;
            const n = t.transitional || fe;
            n && n.legacyInterceptorReqResOrdering ? a.unshift(e.fulfilled, e.rejected) : a.push(e.fulfilled, e.rejected)
          }));
          const c = [];
          let u;
          this.interceptors.response.forEach((function(e) {
            c.push(e.fulfilled, e.rejected)
          }));
          let l, f = 0;
          if (!s) {
            const e = [ct.bind(this), void 0];
            for (e.unshift(...a), e.push(...c), l = e.length, u = Promise.resolve(t); f < l;) u = u.then(e[f++], e[f++]);
            return u
          }
          l = a.length;
          let d = t;
          for (; f < l;) {
            const e = a[f++],
              t = a[f++];
            try {
              d = e(d)
            } catch (e) {
              t.call(this, e);
              break
            }
          }
          try {
            u = ct.call(this, d)
          } catch (e) {
            return Promise.reject(e)
          }
          for (f = 0, l = c.length; f < l;) u = u.then(c[f++], c[f++]);
          return u
        }
        getUri(e) {
          return ue(Ie((e = qe(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
        }
      }
      X.forEach(["delete", "get", "head", "options"], (function(e) {
        pt.prototype[e] = function(t, n) {
          return this.request(qe(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
          }))
        }
      })), X.forEach(["post", "put", "patch"], (function(e) {
        function t(t) {
          return function(n, r, o) {
            return this.request(qe(o || {}, {
              method: e,
              headers: t ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url: n,
              data: r
            }))
          }
        }
        pt.prototype[e] = t(), pt.prototype[e + "Form"] = t(!0)
      }));
      var mt = pt;
      class gt {
        constructor(e) {
          if ("function" != typeof e) throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise((function(e) {
            t = e
          }));
          const n = this;
          this.promise.then((e => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0;) n._listeners[t](e);
            n._listeners = null
          })), this.promise.then = e => {
            let t;
            const r = new Promise((e => {
              n.subscribe(e), t = e
            })).then(e);
            return r.cancel = function() {
              n.unsubscribe(t)
            }, r
          }, e((function(e, r, o) {
            n.reason || (n.reason = new Ce(e, r, o), t(n.reason))
          }))
        }
        throwIfRequested() {
          if (this.reason) throw this.reason
        }
        subscribe(e) {
          this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
          const e = new AbortController,
            t = t => {
              e.abort(t)
            };
          return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
          let e;
          return {
            token: new gt((function(t) {
              e = t
            })),
            cancel: e
          }
        }
      }
      var vt = gt;
      const yt = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526
      };
      Object.entries(yt).forEach((([e, t]) => {
        yt[t] = e
      }));
      var wt = yt;
      const bt = function e(t) {
        const n = new mt(t),
          r = a(mt.prototype.request, n);
        return X.extend(r, mt.prototype, n, {
          allOwnKeys: !0
        }), X.extend(r, n, null, {
          allOwnKeys: !0
        }), r.create = function(n) {
          return e(qe(t, n))
        }, r
      }(xe);
      bt.Axios = mt, bt.CanceledError = Ce, bt.CancelToken = vt, bt.isCancel = Pe, bt.VERSION = ut, bt.toFormData = re, bt.AxiosError = Q, bt.Cancel = bt.CanceledError, bt.all = function(e) {
        return Promise.all(e)
      }, bt.spread = function(e) {
        return function(t) {
          return e.apply(null, t)
        }
      }, bt.isAxiosError = function(e) {
        return X.isObject(e) && !0 === e.isAxiosError
      }, bt.mergeConfig = qe, bt.AxiosHeaders = Le, bt.formToJSON = e => we(X.isHTMLForm(e) ? new FormData(e) : e), bt.getAdapter = at.getAdapter, bt.HttpStatusCode = wt, bt.default = bt;
      var xt = bt,
        Et = r(763);

      function St(e) {
        return St = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, St(e)
      }

      function Ot() {
        Ot = function() {
          return e
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";

        function s(e, t, n) {
          return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), e[t]
        }
        try {
          s({}, "")
        } catch (e) {
          s = function(e, t, n) {
            return e[t] = n
          }
        }

        function c(e, t, n, r) {
          var o = t && t.prototype instanceof f ? t : f,
            i = Object.create(o.prototype),
            a = new S(r || []);
          return i._invoke = function(e, t, n) {
            var r = "suspendedStart";
            return function(o, i) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return _()
              }
              for (n.method = o, n.arg = i;;) {
                var a = n.delegate;
                if (a) {
                  var s = b(a, n);
                  if (s) {
                    if (s === l) continue;
                    return s
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw r = "completed", n.arg;
                  n.dispatchException(n.arg)
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                  return {
                    value: c.arg,
                    done: n.done
                  }
                }
                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
              }
            }
          }(e, n, a), i
        }

        function u(e, t, n) {
          try {
            return {
              type: "normal",
              arg: e.call(t, n)
            }
          } catch (e) {
            return {
              type: "throw",
              arg: e
            }
          }
        }
        e.wrap = c;
        var l = {};

        function f() {}

        function d() {}

        function h() {}
        var p = {};
        s(p, o, (function() {
          return this
        }));
        var m = Object.getPrototypeOf,
          g = m && m(m(O([])));
        g && g !== t && n.call(g, o) && (p = g);
        var v = h.prototype = f.prototype = Object.create(p);

        function y(e) {
          ["next", "throw", "return"].forEach((function(t) {
            s(e, t, (function(e) {
              return this._invoke(t, e)
            }))
          }))
        }

        function w(e, t) {
          function r(o, i, a, s) {
            var c = u(e[o], e, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && "object" == St(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                r("next", e, a, s)
              }), (function(e) {
                r("throw", e, a, s)
              })) : t.resolve(f).then((function(e) {
                l.value = e, a(l)
              }), (function(e) {
                return r("throw", e, a, s)
              }))
            }
            s(c.arg)
          }
          var o;
          this._invoke = function(e, n) {
            function i() {
              return new t((function(t, o) {
                r(e, n, t, o)
              }))
            }
            return o = o ? o.then(i, i) : i()
          }
        }

        function b(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (t.delegate = null, "throw" === t.method) {
              if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return l;
              t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return l
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
          var o = r.arg;
          return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
        }

        function x(e) {
          var t = {
            tryLoc: e[0]
          };
          1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function E(e) {
          var t = e.completion || {};
          t.type = "normal", delete t.arg, e.completion = t
        }

        function S(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }], e.forEach(x, this), this.reset(!0)
        }

        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length;)
                    if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                  return t.value = void 0, t.done = !0, t
                };
              return i.next = i
            }
          }
          return {
            next: _
          }
        }

        function _() {
          return {
            value: void 0,
            done: !0
          }
        }
        return d.prototype = h, s(v, "constructor", h), s(h, "constructor", d), d.displayName = s(h, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, a, "GeneratorFunction")), e.prototype = Object.create(v), e
        }, e.awrap = function(e) {
          return {
            __await: e
          }
        }, y(w.prototype), s(w.prototype, i, (function() {
          return this
        })), e.AsyncIterator = w, e.async = function(t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(c(t, n, r, o), i);
          return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
            return e.done ? e.value : a.next()
          }))
        }, y(v), s(v, a, "Generator"), s(v, o, (function() {
          return this
        })), s(v, "toString", (function() {
          return "[object Generator]"
        })), e.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return t.reverse(),
            function n() {
              for (; t.length;) {
                var r = t.pop();
                if (r in e) return n.value = r, n.done = !1, n
              }
              return n.done = !0, n
            }
        }, e.values = O, S.prototype = {
          constructor: S,
          reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
              for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;

            function r(n, r) {
              return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var s = n.call(i, "catchLoc"),
                  c = n.call(i, "finallyLoc");
                if (s && c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                } else if (s) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break
              }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), l
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  E(n)
                }
                return o
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function(e, t, n) {
            return this.delegate = {
              iterator: O(e),
              resultName: t,
              nextLoc: n
            }, "next" === this.method && (this.arg = void 0), l
          }
        }, e
      }

      function _t(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }

      function Rt(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise((function(r, o) {
            var i = e.apply(t, n);

            function a(e) {
              _t(i, r, o, a, s, "next", e)
            }

            function s(e) {
              _t(i, r, o, a, s, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      var kt = function() {
          var e = Rt(Ot().mark((function e(t) {
            var n, r, o;
            return Ot().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, e.next = 3, (0, Et.M)(t.type);
                case 3:
                  return n = e.sent, e.next = 6, t.arrayBuffer();
                case 6:
                  return r = e.sent, e.next = 9, xt.put(n, r);
                case 9:
                  if (200 !== (o = e.sent).status) {
                    e.next = 14;
                    break
                  }
                  return e.abrupt("return", o.data.payload);
                case 14:
                  return console.error(o.statusText), e.abrupt("return", null);
                case 16:
                  e.next = 22;
                  break;
                case 18:
                  return e.prev = 18, e.t0 = e.catch(0), console.error(e.t0.message), e.abrupt("return", null);
                case 22:
                case "end":
                  return e.stop()
              }
            }), e, null, [
              [0, 18]
            ])
          })));
          return function(t) {
            return e.apply(this, arguments)
          }
        }(),
        Lt = function(e, t) {
          var n = e.bucket,
            r = e.path,
            o = t.width,
            i = t.height;
          return "https://img-".concat(n, ".wixmp.com").concat(r, "/v1/fill/w_").concat(o, ",h_").concat(i, "/image.jpg")
        },
        Tt = $ns["wix-window-frontend"],
        Pt = r.n(Tt);

      function Ct(e) {
        return Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Ct(e)
      }

      function At() {
        At = function() {
          return e
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";

        function s(e, t, n) {
          return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), e[t]
        }
        try {
          s({}, "")
        } catch (e) {
          s = function(e, t, n) {
            return e[t] = n
          }
        }

        function c(e, t, n, r) {
          var o = t && t.prototype instanceof f ? t : f,
            i = Object.create(o.prototype),
            a = new S(r || []);
          return i._invoke = function(e, t, n) {
            var r = "suspendedStart";
            return function(o, i) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return _()
              }
              for (n.method = o, n.arg = i;;) {
                var a = n.delegate;
                if (a) {
                  var s = b(a, n);
                  if (s) {
                    if (s === l) continue;
                    return s
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw r = "completed", n.arg;
                  n.dispatchException(n.arg)
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                  return {
                    value: c.arg,
                    done: n.done
                  }
                }
                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
              }
            }
          }(e, n, a), i
        }

        function u(e, t, n) {
          try {
            return {
              type: "normal",
              arg: e.call(t, n)
            }
          } catch (e) {
            return {
              type: "throw",
              arg: e
            }
          }
        }
        e.wrap = c;
        var l = {};

        function f() {}

        function d() {}

        function h() {}
        var p = {};
        s(p, o, (function() {
          return this
        }));
        var m = Object.getPrototypeOf,
          g = m && m(m(O([])));
        g && g !== t && n.call(g, o) && (p = g);
        var v = h.prototype = f.prototype = Object.create(p);

        function y(e) {
          ["next", "throw", "return"].forEach((function(t) {
            s(e, t, (function(e) {
              return this._invoke(t, e)
            }))
          }))
        }

        function w(e, t) {
          function r(o, i, a, s) {
            var c = u(e[o], e, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && "object" == Ct(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                r("next", e, a, s)
              }), (function(e) {
                r("throw", e, a, s)
              })) : t.resolve(f).then((function(e) {
                l.value = e, a(l)
              }), (function(e) {
                return r("throw", e, a, s)
              }))
            }
            s(c.arg)
          }
          var o;
          this._invoke = function(e, n) {
            function i() {
              return new t((function(t, o) {
                r(e, n, t, o)
              }))
            }
            return o = o ? o.then(i, i) : i()
          }
        }

        function b(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (t.delegate = null, "throw" === t.method) {
              if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return l;
              t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return l
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
          var o = r.arg;
          return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
        }

        function x(e) {
          var t = {
            tryLoc: e[0]
          };
          1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function E(e) {
          var t = e.completion || {};
          t.type = "normal", delete t.arg, e.completion = t
        }

        function S(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }], e.forEach(x, this), this.reset(!0)
        }

        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length;)
                    if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                  return t.value = void 0, t.done = !0, t
                };
              return i.next = i
            }
          }
          return {
            next: _
          }
        }

        function _() {
          return {
            value: void 0,
            done: !0
          }
        }
        return d.prototype = h, s(v, "constructor", h), s(h, "constructor", d), d.displayName = s(h, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, a, "GeneratorFunction")), e.prototype = Object.create(v), e
        }, e.awrap = function(e) {
          return {
            __await: e
          }
        }, y(w.prototype), s(w.prototype, i, (function() {
          return this
        })), e.AsyncIterator = w, e.async = function(t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(c(t, n, r, o), i);
          return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
            return e.done ? e.value : a.next()
          }))
        }, y(v), s(v, a, "Generator"), s(v, o, (function() {
          return this
        })), s(v, "toString", (function() {
          return "[object Generator]"
        })), e.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return t.reverse(),
            function n() {
              for (; t.length;) {
                var r = t.pop();
                if (r in e) return n.value = r, n.done = !1, n
              }
              return n.done = !0, n
            }
        }, e.values = O, S.prototype = {
          constructor: S,
          reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
              for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;

            function r(n, r) {
              return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var s = n.call(i, "catchLoc"),
                  c = n.call(i, "finallyLoc");
                if (s && c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                } else if (s) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break
              }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), l
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  E(n)
                }
                return o
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function(e, t, n) {
            return this.delegate = {
              iterator: O(e),
              resultName: t,
              nextLoc: n
            }, "next" === this.method && (this.arg = void 0), l
          }
        }, e
      }

      function jt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }

      function Mt(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise((function(r, o) {
            var i = e.apply(t, n);

            function a(e) {
              jt(i, r, o, a, s, "next", e)
            }

            function s(e) {
              jt(i, r, o, a, s, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      var Nt = {
          markers: ["|", ""],
          markersBlinkRate: 320,
          resetMarkerOnType: !0,
          hideMarkerOnWait: !1,
          writeMinSpeed: 50,
          writeMaxSpeed: 100,
          waitAfterWriteMin: 1e3,
          waitAfterWriteMax: 2e3,
          deleteMinSpeed: 20,
          deleteMaxSpeed: 30,
          waitAfterDeleteMin: 100,
          waitAfterDeleteMax: 200
        },
        Dt = $ns["wix-location"];

      function Ut(e) {
        return Ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Ut(e)
      }

      function Ft(e) {
        return function(e) {
          if (Array.isArray(e)) return Bt(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
          if (!e) return;
          if ("string" == typeof e) return Bt(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(e, t)
        }(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function Bt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function It() {
        It = function() {
          return e
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";

        function s(e, t, n) {
          return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), e[t]
        }
        try {
          s({}, "")
        } catch (e) {
          s = function(e, t, n) {
            return e[t] = n
          }
        }

        function c(e, t, n, r) {
          var o = t && t.prototype instanceof f ? t : f,
            i = Object.create(o.prototype),
            a = new S(r || []);
          return i._invoke = function(e, t, n) {
            var r = "suspendedStart";
            return function(o, i) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === o) throw i;
                return _()
              }
              for (n.method = o, n.arg = i;;) {
                var a = n.delegate;
                if (a) {
                  var s = b(a, n);
                  if (s) {
                    if (s === l) continue;
                    return s
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw r = "completed", n.arg;
                  n.dispatchException(n.arg)
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                  return {
                    value: c.arg,
                    done: n.done
                  }
                }
                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
              }
            }
          }(e, n, a), i
        }

        function u(e, t, n) {
          try {
            return {
              type: "normal",
              arg: e.call(t, n)
            }
          } catch (e) {
            return {
              type: "throw",
              arg: e
            }
          }
        }
        e.wrap = c;
        var l = {};

        function f() {}

        function d() {}

        function h() {}
        var p = {};
        s(p, o, (function() {
          return this
        }));
        var m = Object.getPrototypeOf,
          g = m && m(m(O([])));
        g && g !== t && n.call(g, o) && (p = g);
        var v = h.prototype = f.prototype = Object.create(p);

        function y(e) {
          ["next", "throw", "return"].forEach((function(t) {
            s(e, t, (function(e) {
              return this._invoke(t, e)
            }))
          }))
        }

        function w(e, t) {
          function r(o, i, a, s) {
            var c = u(e[o], e, i);
            if ("throw" !== c.type) {
              var l = c.arg,
                f = l.value;
              return f && "object" == Ut(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                r("next", e, a, s)
              }), (function(e) {
                r("throw", e, a, s)
              })) : t.resolve(f).then((function(e) {
                l.value = e, a(l)
              }), (function(e) {
                return r("throw", e, a, s)
              }))
            }
            s(c.arg)
          }
          var o;
          this._invoke = function(e, n) {
            function i() {
              return new t((function(t, o) {
                r(e, n, t, o)
              }))
            }
            return o = o ? o.then(i, i) : i()
          }
        }

        function b(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (t.delegate = null, "throw" === t.method) {
              if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return l;
              t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return l
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
          var o = r.arg;
          return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
        }

        function x(e) {
          var t = {
            tryLoc: e[0]
          };
          1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function E(e) {
          var t = e.completion || {};
          t.type = "normal", delete t.arg, e.completion = t
        }

        function S(e) {
          this.tryEntries = [{
            tryLoc: "root"
          }], e.forEach(x, this), this.reset(!0)
        }

        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                i = function t() {
                  for (; ++r < e.length;)
                    if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                  return t.value = void 0, t.done = !0, t
                };
              return i.next = i
            }
          }
          return {
            next: _
          }
        }

        function _() {
          return {
            value: void 0,
            done: !0
          }
        }
        return d.prototype = h, s(v, "constructor", h), s(h, "constructor", d), d.displayName = s(h, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, a, "GeneratorFunction")), e.prototype = Object.create(v), e
        }, e.awrap = function(e) {
          return {
            __await: e
          }
        }, y(w.prototype), s(w.prototype, i, (function() {
          return this
        })), e.AsyncIterator = w, e.async = function(t, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(c(t, n, r, o), i);
          return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
            return e.done ? e.value : a.next()
          }))
        }, y(v), s(v, a, "Generator"), s(v, o, (function() {
          return this
        })), s(v, "toString", (function() {
          return "[object Generator]"
        })), e.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return t.reverse(),
            function n() {
              for (; t.length;) {
                var r = t.pop();
                if (r in e) return n.value = r, n.done = !1, n
              }
              return n.done = !0, n
            }
        }, e.values = O, S.prototype = {
          constructor: S,
          reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
              for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;

            function r(n, r) {
              return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var s = n.call(i, "catchLoc"),
                  c = n.call(i, "finallyLoc");
                if (s && c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                } else if (s) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break
              }
            }
            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), l
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  E(n)
                }
                return o
              }
            }
            throw new Error("illegal catch attempt")
          },
          delegateYield: function(e, t, n) {
            return this.delegate = {
              iterator: O(e),
              resultName: t,
              nextLoc: n
            }, "next" === this.method && (this.arg = void 0), l
          }
        }, e
      }

      function Wt(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value
        } catch (e) {
          return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, o)
      }

      function qt(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise((function(r, o) {
            var i = e.apply(t, n);

            function a(e) {
              Wt(i, r, o, a, s, "next", e)
            }

            function s(e) {
              Wt(i, r, o, a, s, "throw", e)
            }
            a(void 0)
          }))
        }
      }
      var zt = ["Build me a travel itinerary app for weekend getaways", "Design a personal budget tracker with charts", "Make a note-taking app that syncs in real time", "Generate a workout planner for beginners"],
        Ht = "Tell Base what you want",
        Gt = [],
        Kt = null;
      $w.onReady((function() {
        console.log("v7.5"), Zt(), en(), Qt(), Xt(), Jt(), Vt(), $t()
      }));
      var $t = function() {
          var e = $w("#prompt-text-box"),
            t = $w("#plan-mode");
          Kt = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = Object.assign({}, Nt, n),
              o = r.markers,
              i = r.markersBlinkRate,
              a = r.resetMarkerOnType,
              s = r.hideMarkerOnWait,
              c = r.writeMinSpeed,
              u = r.writeMaxSpeed,
              l = r.waitAfterWriteMin,
              f = r.waitAfterWriteMax,
              d = r.deleteMinSpeed,
              h = r.deleteMaxSpeed,
              p = r.waitAfterDeleteMin,
              m = r.waitAfterDeleteMax,
              g = t[0],
              v = "",
              y = function() {
                e.placeholder = g + v
              };
            if ("backend" !== Pt().rendering.env) {
              var w, b = {
                  reset: function() {
                    clearInterval(w);
                    var e = 0;
                    v = o[e], w = setInterval((function() {
                      v = o[e], y(), e = o.length === e + 1 ? 0 : e + 1
                    }), i)
                  },
                  hide: function() {
                    clearInterval(w), v = "", y()
                  }
                },
                x = !0,
                E = function() {},
                S = function(e) {
                  return new Promise((function(t) {
                    setTimeout((function() {
                      x ? t() : E = function() {
                        t()
                      }
                    }), e)
                  }))
                },
                O = function(e, t) {
                  return Math.floor(Math.random() * t) + e
                },
                _ = function() {
                  var e = Mt(At().mark((function e(n) {
                    var r, o, i, v, w, x = arguments;
                    return At().wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (r = x.length > 1 && void 0 !== x[1] && x[1], o = t[n], b.reset(), r) {
                            e.next = 17;
                            break
                          }
                          i = 0;
                        case 5:
                          if (!(i <= o.length)) {
                            e.next = 14;
                            break
                          }
                          return g = o.slice(0, i), y(), a && b.reset(), e.next = 11, S(O(c, u));
                        case 11:
                          i++, e.next = 5;
                          break;
                        case 14:
                          return s && b.hide(), e.next = 17, S(O(l, f));
                        case 17:
                          b.reset(), v = o.length;
                        case 19:
                          if (!(v >= 0)) {
                            e.next = 28;
                            break
                          }
                          return g = o.slice(0, v), y(), a && b.reset(), e.next = 25, S(O(d, h));
                        case 25:
                          v--, e.next = 19;
                          break;
                        case 28:
                          return s && b.hide(), e.next = 31, S(O(p, m));
                        case 31:
                          w = t.length === n + 1 ? 0 : n + 1, _(w);
                        case 33:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })));
                  return function(t) {
                    return e.apply(this, arguments)
                  }
                }();
              return _(0, !0), {
                play: function() {
                  x = !0, b.reset(), E()
                },
                pause: function() {
                  x = !1, b.hide()
                },
                isPlaying: function() {
                  return x
                }
              }
            }
          }(e, zt, {
            markers: [""]
          }), e.onFocus((function() {
            Kt.pause(), e.placeholder = ""
          })), e.onBlur((function() {
            t.checked ? e.placeholder = Ht : Kt.play()
          }))
        },
        Jt = function() {
          $w("#plan-mode").onChange((function(e) {
            var t = e.target;
            $widget.props.planMode = t.checked, $widget.fireEvent("planModeChange", {
              checked: t.checked
            }), t.checked ? (Kt.pause(), $w("#prompt-text-box").placeholder = Ht) : Kt.play()
          }))
        },
        Vt = function() {
          var e = qt(It().mark((function e() {
            var r, o;
            return It().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.gH.currentLanguage();
                case 2:
                  return r = e.sent, e.next = 5, i.lz.language();
                case 5:
                  o = e.sent, $w("#go-button").onClick((function() {
                    var e = new URL("https://app.base44.com/create-app"),
                      t = $w("#prompt-text-box").value;
                    e.searchParams.set("prompt", t), Gt.forEach((function(t) {
                      var n = t.url;
                      n && e.searchParams.append("file", n)
                    }));
                    var i = $w("#plan-mode").checked;
                    e.searchParams.set("plan", i.toString());
                    var a = r || o;
                    e.searchParams.set("lng", a), $widget.fireEvent("goClicked", {
                      prompt: t,
                      files: Gt,
                      planMode: i
                    }), n.xh.to(e.toString())
                  }));
                case 7:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function() {
            return e.apply(this, arguments)
          }
        }(),
        Xt = function() {
          var e = Dt.query.prompt;
          e && ($w("#prompt-text-box").value = e, $widget.props.prompt = e, Yt(e)), $w("#prompt-text-box").onInput((function(e) {
            var t = e.target;
            $widget.props.prompt = t.value, Yt(t.value)
          }))
        },
        Yt = function(e) {
          e.length < 2 ? $w("#go-button").disable() : $w("#go-button").enable()
        };
      $widget.onPropsChanged((function(e, t) {
        e.prompt !== t.prompt && ($w("#prompt-text-box").value = t.prompt, Yt(t.prompt))
      }));
      var Qt = function() {
          var e = qt(It().mark((function e() {
            return It().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, t.n6.env();
                case 2:
                  if (e.t0 = e.sent, "browser" === e.t0) {
                    e.next = 5;
                    break
                  }
                  return e.abrupt("return");
                case 5:
                  $w("#speech-button").enable(), $w("#upload-files-button").enable();
                case 7:
                case "end":
                  return e.stop()
              }
            }), e)
          })));
          return function() {
            return e.apply(this, arguments)
          }
        }(),
        Zt = function() {
          var e = $w("#speech-button"),
            t = $w("#speech-button-container"),
            n = $w("#speech-api"),
            r = function() {
              e.icon = "https://static.wixstatic.com/shapes/dea07e_d26fe99a06f543eaa98a59d467ba91c7.svg", t.customClassList.remove("active-speech")
            };
          n.on("start", (function() {
            e.icon = "https://static.wixstatic.com/shapes/dea07e_0a86ab317d95488cba1e97deeab0aadb.svg", t.customClassList.add("active-speech"), $widget.fireEvent("speechStart")
          })), n.on("stop", (function() {
            r(), $widget.fireEvent("speechStop")
          })), n.on("end", (function(e) {
            var t = e.detail.transcript;
            t && ($widget.props.prompt = t, $w("#prompt-text-box").value = t, Yt(t)), r(), $widget.fireEvent("speechEnd", {
              transcript: t
            })
          })), n.on("error", (function(e) {
            console.warn(e.detail);
            var t = e.detail,
              n = t.error,
              o = t.message;
            if ("service-not-allowed" === n) $w("#speech-button").label = "To use voice input, enable Speech Recognition in your iPhone settings";
            else $w("#speech-button").label = "Encountered an error.";
            $w("#speech-button").customClassList.add("disabled-speech"), $w("#speech-button").customClassList.add("speech-tooltip"), $widget.fireEvent("speechError", {
              error: n,
              message: o
            }), r()
          }));
          var o = JSON.stringify({
            id: e.uniqueId
          });
          n.setAttribute("button", o)
        },
        en = function() {
          var e = $w("#upload-element"),
            t = JSON.stringify({
              id: $w("#base44PromptBox").uniqueId,
              removePointerEvents: !1
            });
          e.setAttribute("dropzone", t);
          var n = JSON.stringify({
            id: $w("#upload-files-button").uniqueId
          });
          e.setAttribute("button", n), e.on("files", function() {
            var e = qt(It().mark((function e(t) {
              var n, r, i, c;
              return It().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = t.detail, r = n.files, n.type, i = Array.from(r), c = i.map((function(e) {
                      return {
                        _id: e.lastModified.toString(),
                        fileToUpload: e
                      }
                    })), Gt.push.apply(Gt, Ft(c)), o(), $widget.fireEvent("filesUploadStart", {
                      files: Gt
                    }), c.forEach(function() {
                      var e = qt(It().mark((function e(t) {
                        var n, r, i, c;
                        return It().wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              return n = t._id, r = t.fileToUpload, a(n), e.next = 4, kt(r);
                            case 4:
                              i = e.sent, c = Gt.find((function(e) {
                                return e._id === n
                              })), i && (c.url = (l = void 0, f = void 0, l = (u = i).bucket, f = u.path, "https://".concat(l, ".wixmp.com").concat(f)), c.bucket = i.bucket, c.path = i.path), o(), s(n), $widget.fireEvent("fileUploadFinished", {
                                file: c
                              });
                            case 10:
                            case "end":
                              return e.stop()
                          }
                          var u, l, f
                        }), e)
                      })));
                      return function(t) {
                        return e.apply(this, arguments)
                      }
                    }());
                  case 8:
                  case "end":
                    return e.stop()
                }
              }), e)
            })));
            return function(t) {
              return e.apply(this, arguments)
            }
          }());
          var r = $w("#files");
          $w("#imageRemove, #errorRemove, #fileRemove").onClick((function(e) {
            var t = e.context,
              n = Gt.findIndex((function(e) {
                return e._id === t.itemId
              })),
              r = Gt.splice(n, 1)[0];
            o(), $widget.fireEvent("fileRemoved", {
              file: r
            })
          }));
          var o = function() {
              return 0 === Gt.length ? r.collapse() : (r.data = Gt, r.expand())
            },
            i = tn(),
            a = function(e) {
              c(e, function() {
                var e = qt(It().mark((function e(t, n) {
                  var r;
                  return It().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = n.fileToUpload, n.url, n.bucket, n.path, !r.type.startsWith("image/")) {
                          e.next = 11;
                          break
                        }
                        return e.next = 5, t("#fileMultiStateBox").changeState("stateImage");
                      case 5:
                        t("#imageLoader").expand(), t("#image").customClassList.add("blur-loading-image"), t("#image").src = URL.createObjectURL(r), i.get(t("#image")), e.next = 14;
                        break;
                      case 11:
                        t("#fileName").text = nn(r.name, 18), t("#fileStateLoader").expand(), t("#fileMultiStateBox").changeState("stateFile");
                      case 14:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }())
            },
            s = function(e) {
              c(e, function() {
                var e = qt(It().mark((function e(t, n) {
                  var r, o, a, s, c;
                  return It().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = n.fileToUpload, o = n.url, a = n.bucket, s = n.path, o) {
                          e.next = 5;
                          break
                        }
                        t("#fileMultiStateBox").changeState("stateError"), e.next = 18;
                        break;
                      case 5:
                        if (!r.type.startsWith("image/")) {
                          e.next = 15;
                          break
                        }
                        return e.next = 9, i.get(t("#image"));
                      case 9:
                        (c = e.sent) && (t("#image").src = Lt({
                          bucket: a,
                          path: s
                        }, c)), t("#image").customClassList.remove("blur-loading-image"), t("#imageLoader").collapse(), e.next = 18;
                        break;
                      case 15:
                        t("#fileName").text = nn(r.name, 18), t("#fileMultiStateBox").changeState("stateFile"), t("#fileStateLoader").collapse();
                      case 18:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })));
                return function(t, n) {
                  return e.apply(this, arguments)
                }
              }())
            },
            c = function(e, t) {
              r.forItems([e], t)
            }
        },
        tn = function() {
          var e = null,
            t = null;
          return $w("#get-element-dimensions").on("dimensions", (function(n) {
            e = n.detail, t(e)
          })), {
            get: function(n) {
              return e || ($w("#get-element-dimensions").setAttribute("elementid", n.uniqueId), new Promise((function(e) {
                t = e
              })))
            }
          }
        };

      function nn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
        return !e || e.length <= t ? e : e.substring(0, t) + n
      }
    }(), o
  }()
}));
