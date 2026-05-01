window.document.getElementById('base44-header-script').onload = function() {
  window.Base44Header.render({
    isWixSite: true,
    target: document.querySelector('#BASE44_HEADER'),
    replaceTarget: true,
    language: document.documentElement.getAttribute('lang') || 'en',
    ...window.BASE44_HEADER_CONFIG,
  })
};
;
{
  `(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`
}
;
(function() {
  var navEntry = performance.getEntriesByType('navigation')[0];
  if (navEntry && navEntry.type === 'reload') {
    return;
  }
  if ('PageRevealEvent' in window) {
    window.__pageRevealPromise = new Promise(function(resolve) {
      window.addEventListener('pagereveal', resolve, {
        once: true
      });
    });
  } else {
    window.__pageRevealPromise = Promise.resolve();
  }
})();
;
{
  "prefetch": [{
    "tag": "mpa-prefetch-eager",
    "where": {
      "and": [{
        "href_matches": "/*"
      }, {
        "not": {
          "href_matches": "/"
        }
      }]
    },
    "eagerness": "eager"
  }]
}
;
var bodyCacheable = true;
var exclusionReason = {
  "shouldRender": true,
  "forced": false
};
var ssrInfo = {
  "cacheExclusionReason": "",
  "renderBodyTime": 899,
  "renderTimeStamp": 1777589147256
}
;
document.addEventListener('DOMContentLoaded', function() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const currentUrl = window.location.href;
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isSafari = isIOS && userAgent.includes('safari') && userAgent.includes('version') && !userAgent.includes('crios') && !userAgent.includes('fxios');
  const isLinkedIn = userAgent.includes('linkedin');
  if (isIOS && isLinkedIn && !isSafari) {
    window.location = "x-safari-" + currentUrl;
    setTimeout(function() {
      window.location = currentUrl;
    }, 1000);
  }
});
;
if (window.ResizeObserver && (!window.PerformanceObserver || !PerformanceObserver.supportedEntryTypes || PerformanceObserver.supportedEntryTypes.indexOf('paint') === -1)) {
  new ResizeObserver(function(entries, observer) {
    entries.some(function(entry) {
      var contentRect = entry.contentRect;
      if (contentRect.width > 0 && contentRect.height > 0) {
        requestAnimationFrame(function(now) {
          window.wixFirstPaint = now;
          dispatchEvent(new CustomEvent('wixFirstPaint'));
        });
        observer.disconnect();
        return true;
      }
    });
  }).observe(document.body);
}
;
const div = document.createElement('div')
div.style.overflowY = 'scroll'
div.style.width = '50px'
div.style.height = '50px'
div.style.visibility = 'hidden'
document.body.appendChild(div)
const scrollbarWidth = div.offsetWidth - div.clientWidth
document.body.removeChild(div)
if (scrollbarWidth > 0) {
  document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
}
;
window.__pageRevealPromise && window.__pageRevealPromise.then(function() {
  requestAnimationFrame(function() {
    try {
      var stored = sessionStorage.getItem('wix-motion-played-animations');
      if (stored) {
        var played = JSON.parse(stored);
        for (var compId in played) {
          if (played[compId]) {
            var el = document.getElementById(compId);
            if (el) {
              el.dataset.motionEnter = 'done';
            }
          }
        }
      }
    } catch (e) {}
  });
});
;
window.fedops = JSON.parse(document.getElementById('wix-fedops').textContent)
;
(() => {
  "use strict";
  var e = {},
    r = {};

  function t(i) {
    var o = r[i];
    if (void 0 !== o) return o.exports;
    var n = r[i] = {
      exports: {}
    };
    return e[i](n, n.exports, t), n.exports
  }
  t.rv = () => "1.6.6", t.ruid = "bundler=rspack@1.6.6";
  let i = "unknown",
    o = e => {
      let r, t, o = (r = e.cache, t = e.varnish, `${r||i},${t||i}`);
      return {
        caching: o,
        isCached: o.includes("hit"),
        ...e.microPop ? {
          microPop: e.microPop
        } : {}
      }
    };

  function n() {
    return "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
      let r = 16 * Math.random() | 0;
      return ("x" === e ? r : 3 & r | 8).toString(16)
    })
  }
  let a = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
    s = /iPhone|iPad|iPod/i;
  ! function() {
    var e;
    let r, {
        site: t,
        rollout: c,
        fleetConfig: d,
        requestUrl: p,
        isInSEO: l,
        shouldReportErrorOnlyInPanorama: u
      } = window.fedops.data,
      m = (e => {
        let {
          userAgent: r
        } = e.navigator;
        return /instagram.+google\/google/i.test(r) ? "" : /bot|google(?!play)|phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(r) ? "ua" : ""
      })(window) || (() => {
        try {
          if (window.self === window.top) return ""
        } catch {}
        return "iframe"
      })() || (() => {
        if (!Function.prototype.bind) return "bind";
        let {
          document: e,
          navigator: r
        } = window;
        if (!e || !r) return "document";
        let {
          webdriver: t,
          userAgent: i,
          plugins: o,
          languages: n
        } = r;
        if (t) return "webdriver";
        if (!o || Array.isArray(o)) return "plugins";
        if (Object.getOwnPropertyDescriptor(o, "0")?.writable) return "plugins-extra";
        if (!i) return "userAgent";
        if (i.indexOf("Snapchat") > 0 && e.hidden) return "Snapchat";
        if (!n || 0 === n.length || !Object.isFrozen(n)) return "languages";
        try {
          throw Error()
        } catch (e) {
          if (e instanceof Error) {
            let {
              stack: r
            } = e;
            if (r && / (\(internal\/)|(\(?file:\/)/.test(r)) return "stack"
          }
        }
        return ""
      })() || (l ? "seo" : ""),
      w = !!m,
      {
        isCached: h,
        caching: f,
        microPop: v
      } = ((e, r) => {
        let t, n = (e => {
          let r;
          try {
            r = e()
          } catch {
            r = []
          }
          let t = r.reduce((e, r) => (e[r.name] = r.description, e), {});
          return {
            cache: t.cache,
            varnish: t.varnish,
            microPop: t.dc
          }
        })(r);
        if (n.cache || n.varnish) return o({
          cache: n.cache || i,
          varnish: n.varnish || i,
          microPop: n.microPop
        });
        let a = (t = e.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/)) && t.length ? {
          cache: t[1],
          varnish: t[2] || i,
          microPop: t[3]
        } : null;
        return a ? o(a) : {
          caching: i,
          isCached: !1
        }
      })(document.cookie, () => performance.getEntriesByType("navigation")[0].serverTiming || []),
      g = {
        WixSite: 1,
        UGC: 2,
        Template: 3
      } [t.siteType] || 0,
      x = t.appNameForBiEvents,
      {
        isDACRollout: S,
        siteAssetsVersionsRollout: y
      } = c,
      I = +!!S,
      $ = +!!y,
      P = 0 === d.code || 1 === d.code ? d.code : null,
      b = 2 === d.code,
      _ = Date.now() - window.initialTimestamps.initialTimestamp,
      O = Math.round(performance.now() - (() => {
        try {
          let e = performance.getEntriesByType("navigation")[0];
          if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e.activationStart ?? 0
        } catch {}
        return 0
      })()),
      {
        visibilityState: T
      } = document,
      {
        fedops: R,
        addEventListener: k,
        thunderboltVersion: A
      } = window;
    R.apps = R.apps || {}, R.apps[x] = {
      startLoadTime: O
    }, R.sessionId = t.sessionId, R.vsi = n(), R.is_cached = h, R.phaseStarted = C(28), R.phaseEnded = C(22), performance.mark("[cache] " + f + (v ? " [" + v + "]" : "")), R.reportError = (e, r = "load") => {
      let t = e?.reason || e?.message;
      t ? (u || M(26, `&errorInfo=${t}&errorType=${r}`), N({
        error: {
          name: r,
          message: t,
          stack: e?.stack
        }
      })) : e.preventDefault()
    }, k("error", R.reportError), k("unhandledrejection", R.reportError);
    let E = !1;

    function M(e, r = "") {
      if (p.includes("suppressbi=true")) return;
      var i = "//frog.wix.com/bolt-performance?src=72&evid=" + e + "&appName=" + x + "&is_rollout=" + P + "&is_company_network=" + b + "&is_sav_rollout=" + $ + "&is_dac_rollout=" + I + "&dc=" + t.dc + (v ? "&microPop=" + v : "") + "&is_cached=" + h + "&msid=" + t.metaSiteId + "&session_id=" + window.fedops.sessionId + "&ish=" + w + "&isb=" + w + (w ? "&isbr=" + m : "") + "&vsi=" + window.fedops.vsi + "&caching=" + f + (E ? ",browser_cache" : "") + "&pv=" + T + "&pn=1&v=" + A + "&url=" + encodeURIComponent(p) + "&st=" + g + `&ts=${_}&tsn=${O}` + r;
      let o = !1;
      if (!/\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent)) try {
        o = navigator.sendBeacon(i)
      } catch {}
      o || (new Image().src = i)
    }

    function N({
      transaction: e,
      error: r
    }) {
      let i = [{
        fullArtifactId: "com.wixpress.html-client.wix-thunderbolt",
        componentId: `${"Studio"===window.fedops.data.site.editorName?"wix-studio":`thunderbolt${window.fedops.data.site.isResponsive?"-responsive":""}`}`,
        platform: "viewer",
        msid: window.fedops.data.site.metaSiteId,
        sessionId: window.fedops.vsi,
        sessionTime: Date.now() - window.initialTimestamps.initialTimestamp,
        logLevel: r ? "ERROR" : "INFO",
        message: r?.message ?? (e?.name && `${e.name} START`),
        errorName: r?.name,
        errorStack: r?.stack,
        transactionName: e?.name,
        transactionAction: e && "START",
        isSsr: !1,
        dataCenter: t.dc,
        isCached: !!h,
        isRollout: !!P,
        isHeadless: !!w,
        isDacRollout: !!I,
        isSavRollout: !!$,
        isCompanyNetwork: !!b
      }];
      try {
        let e = JSON.stringify({
          messages: i
        });
        return navigator.sendBeacon("https://panorama.wixapps.net/api/v1/bulklog", e)
      } catch (e) {
        console.error(e)
      }
    }

    function C(e) {
      return (r, t) => {
        let i = Date.now() - _,
          o = `&name=${r}&duration=${i}`,
          n = t && t.paramsOverrides ? Object.keys(t.paramsOverrides).map(e => e + "=" + t.paramsOverrides[e]).join("&") : "";
        M(e, n ? `${o}&${n}` : o)
      }
    }
    if (k("pageshow", ({
        persisted: e
      }) => {
        e && !E && (E = !0, R.is_cached = !0)
      }, !0), window.__browser_deprecation__) return;
    let D = document.referrer ? `&document_referrer=${document.referrer}` : "",
      W = window.sessionStorage.getItem("isMpa"),
      B = W ? `&isMpa=${W}` : "";
    W && window.sessionStorage.removeItem("isMpa");
    let U = window.sessionStorage.getItem("mpaSessionId");
    U || (U = n(), window.sessionStorage.setItem("mpaSessionId", U)), window.fedops.mpaSessionId = U;
    let j = function(e) {
        let {
          userAgent: r,
          devicePixelRatio: t,
          innerWidth: i,
          outerWidth: o,
          visualViewportScale: n
        } = e;
        return r && a.test(r) ? !!(r && s.test(r)) && (n || 1) > 1 : function(e, r, t) {
          if (!e || !r || !t) return 1;
          let i = e && r && t ? Math.trunc(e * r) <= t ? 1 : 2 : 1;
          return !i || e <= i ? 1 : Math.round(e / i * 100) / 100
        }(t, i, o) > 1
      }({
        userAgent: navigator.userAgent,
        devicePixelRatio: window.devicePixelRatio || 1,
        innerWidth: window.innerWidth,
        outerWidth: window.outerWidth,
        visualViewportScale: window.visualViewport?.scale
      }),
      F = (e = window, r = e.visualViewport?.scale, {
        devicePixelRatio: e.devicePixelRatio || 1,
        innerWidth: e.innerWidth,
        outerWidth: e.outerWidth,
        ...null != r ? {
          visualViewportScale: r
        } : {}
      });
    M(21, `&platformOnSite=${window.fedops.data.platformOnSite}&hasInitialZoom=${j}&infoInitialZoom=${encodeURIComponent(JSON.stringify(F))}&mpaSessionId=${U}${D}${B}`), N({
      transaction: {
        name: "PANORAMA_COMPONENT_LOAD"
      }
    })
  }()
})();
;
if (typeof Promise === 'undefined' || typeof Set === 'undefined' || typeof Object.assign === 'undefined' || typeof Array.from === 'undefined' || typeof Symbol === 'undefined') {
  window.fedops.phaseStarted('missing_polyfills')
}
