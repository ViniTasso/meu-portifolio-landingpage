(function () {
  function supportsModernRuntime() {
    try {
      if (!window.fetch || !window.Promise || !window.requestAnimationFrame || !window.URL || !window.Map || !window.Set) {
        return false;
      }
      try {
        if (!eval('(function(){ var obj = { a: { b: 1 } }; return obj?.a?.b === 1; })()')) {
          return false;
        }
      } catch (error) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  function isLocalHost() {
    var host = String(location.hostname || '').toLowerCase();
    return host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host.endsWith('.local');
  }

  function isUnsupportedTarget(url) {
    return typeof url === 'string' && /unsupported\.html(?:[?#]|$)/i.test(url);
  }

  function shouldBypassUnsupported(url) {
    return isLocalHost() && supportsModernRuntime() && isUnsupportedTarget(url);
  }

  function patchRedirectMethod(name) {
    var original = Location.prototype[name];
    if (typeof original !== 'function') {
      return;
    }
    Location.prototype[name] = function (url) {
      if (shouldBypassUnsupported(String(url || ''))) {
        console.warn('[Runtime Compat] blocked local unsupported redirect:', url);
        return;
      }
      return original.call(this, url);
    };
  }

  function patchUnsupportedRedirect(target) {
    if (!target || target.__wdmUnsupportedPatched || typeof target.unsupported !== 'function') {
      return target;
    }

    var original = target.unsupported.bind(target);
    target.unsupported = function () {
      var result = original.apply(this, arguments);
      if (result && isLocalHost() && supportsModernRuntime()) {
        console.warn('[Runtime Compat] bypassed UnsupportedRedirect.unsupported() on local modern browser');
        return false;
      }
      return result;
    };
    target.__wdmUnsupportedPatched = true;
    return target;
  }

  patchRedirectMethod('replace');
  patchRedirectMethod('assign');

  var currentUnsupported;
  Object.defineProperty(window, 'UnsupportedRedirect', {
    configurable: true,
    enumerable: true,
    get: function () {
      return currentUnsupported;
    },
    set: function (value) {
      currentUnsupported = patchUnsupportedRedirect(value);
    }
  });
})();