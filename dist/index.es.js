import K from "react";
var P = { exports: {} }, _ = {};
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
function ee() {
  if (I) return _;
  I = 1;
  var s = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function i(m, a, u) {
    var E = null;
    if (u !== void 0 && (E = "" + u), a.key !== void 0 && (E = "" + a.key), "key" in a) {
      u = {};
      for (var b in a)
        b !== "key" && (u[b] = a[b]);
    } else u = a;
    return a = u.ref, {
      $$typeof: s,
      type: m,
      key: E,
      ref: a !== void 0 ? a : null,
      props: u
    };
  }
  return _.Fragment = f, _.jsx = i, _.jsxs = i, _;
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
var F;
function re() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case G:
          return "Suspense";
        case J:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case x:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function i(e) {
      try {
        f(e);
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
        ), f(e);
      }
    }
    function m(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = p.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (h.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
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
    function D() {
      var e = s(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, n, l, c, O, A) {
      return t = c.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: c,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
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
    function g(e, r, t, n, l, c, O, A) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (Z(o)) {
            for (n = 0; n < o.length; n++)
              j(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(o);
      if (h.call(r, "key")) {
        o = s(e);
        var d = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          d,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (i(t), o = "" + t), E(r) && (i(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return o && b(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        o,
        c,
        l,
        a(),
        t,
        O,
        A
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var v = K, w = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), p = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, Z = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, N = {}, C = v["react-stack-bottom-frame"].bind(
      v,
      u
    )(), Y = k(m(u)), $ = {};
    R.Fragment = T, R.jsx = function(e, r, t, n, l) {
      var c = 1e4 > p.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        n,
        l,
        c ? Error("react-stack-top-frame") : C,
        c ? k(m(e)) : Y
      );
    }, R.jsxs = function(e, r, t, n, l) {
      var c = 1e4 > p.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        n,
        l,
        c ? Error("react-stack-top-frame") : C,
        c ? k(m(e)) : Y
      );
    };
  }()), R;
}
process.env.NODE_ENV === "production" ? P.exports = ee() : P.exports = re();
var te = P.exports;
const ne = "_animated_1ok3j_1", oe = {
  animated: ne
}, se = ({ label: s, onClick: f, className: i }) => /* @__PURE__ */ te.jsx(
  "button",
  {
    type: "button",
    role: "button",
    "aria-label": s,
    onClick: f,
    className: `bg-blue-600 text-white px-4 py-2 rounded transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${oe.animated} ${i || ""}`.trim(),
    children: s
  }
);
export {
  se as Button
};
//# sourceMappingURL=index.es.js.map
