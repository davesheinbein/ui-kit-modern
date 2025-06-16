import Q from "react";
var b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function K() {
  if (I) return b;
  I = 1;
  var l = Symbol.for("react.transitional.element"), _ = Symbol.for("react.fragment");
  function f(d, o, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      s = {};
      for (var E in o)
        E !== "key" && (s[E] = o[E]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: d,
      key: m,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return b.Fragment = _, b.jsx = f, b.jsxs = f, b;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function ee() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case W:
          return "Profiler";
        case M:
          return "StrictMode";
        case q:
          return "Suspense";
        case G:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case z:
            return (e.displayName || "Context") + ".Provider";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case j:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function _(e) {
      return "" + e;
    }
    function f(e) {
      try {
        _(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), _(e);
      }
    }
    function d(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (h.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function F() {
      var e = l(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, r, t, n, c, u, O, A) {
      return t = u.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: u,
        _owner: c
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, c, u, O, A) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (H(a)) {
            for (n = 0; n < a.length; n++)
              w(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(a);
      if (h.call(r, "key")) {
        a = l(e);
        var i = Object.keys(r).filter(function(Z) {
          return Z !== "key";
        });
        n = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", Y[a + n] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          i,
          a
        ), Y[a + n] = !0);
      }
      if (a = null, t !== void 0 && (f(t), a = "" + t), m(r) && (f(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        a,
        u,
        c,
        o(),
        t,
        O,
        A
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var T = Q, g = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), z = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), k = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, H = Array.isArray, p = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, N = {}, x = T["react-stack-bottom-frame"].bind(
      T,
      s
    )(), C = p(d(s)), Y = {};
    R.Fragment = v, R.jsx = function(e, r, t, n, c) {
      var u = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n,
        c,
        u ? Error("react-stack-top-frame") : x,
        u ? p(d(e)) : C
      );
    }, R.jsxs = function(e, r, t, n, c) {
      var u = 1e4 > k.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n,
        c,
        u ? Error("react-stack-top-frame") : x,
        u ? p(d(e)) : C
      );
    };
  }()), R;
}
process.env.NODE_ENV === "production" ? K() : ee();
//# sourceMappingURL=index.es.js.map
