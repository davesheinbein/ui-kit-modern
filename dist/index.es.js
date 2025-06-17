import * as Ha from "react";
import S, { createContext as Bt, useContext as et, useState as mt, useEffect as Gi, isValidElement as Et, Children as Jr, PureComponent as tt, forwardRef as eg, useRef as Eo, useImperativeHandle as H1, useCallback as q1, useMemo as tg, cloneElement as Ie, createElement as rg, Component as ng } from "react";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function me(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pu = { exports: {} }, $a = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function K1() {
  if (Kd) return $a;
  Kd = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, a, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      i = {};
      for (var s in a)
        s !== "key" && (i[s] = a[s]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return $a.Fragment = t, $a.jsx = r, $a.jsxs = r, $a;
}
var Ta = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function V1() {
  return Vd || (Vd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === M ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case y:
          return "Fragment";
        case g:
          return "Profiler";
        case h:
          return "StrictMode";
        case m:
          return "Suspense";
        case x:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case v:
            return "Portal";
          case b:
            return (E.displayName || "Context") + ".Provider";
          case w:
            return (E._context.displayName || "Context") + ".Consumer";
          case O:
            var k = E.render;
            return E = E.displayName, E || (E = k.displayName || k.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case _:
            return k = E.displayName || null, k !== null ? k : e(E.type) || "Memo";
          case P:
            k = E._payload, E = E._init;
            try {
              return e(E(k));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function r(E) {
      try {
        t(E);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var L = k.error, W = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return L.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(E);
      }
    }
    function n(E) {
      if (E === y) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === P)
        return "<...>";
      try {
        var k = e(E);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var E = T.A;
      return E === null ? null : E.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(E) {
      if (j.call(E, "key")) {
        var k = Object.getOwnPropertyDescriptor(E, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function s(E, k) {
      function L() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var E = e(this.type);
      return R[E] || (R[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function u(E, k, L, W, Y, J, ne, oe) {
      return L = J.ref, E = {
        $$typeof: p,
        type: E,
        key: k,
        props: J,
        _owner: Y
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function l(E, k, L, W, Y, J, ne, oe) {
      var Q = k.children;
      if (Q !== void 0)
        if (W)
          if (N(Q)) {
            for (W = 0; W < Q.length; W++)
              f(Q[W]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Q);
      if (j.call(k, "key")) {
        Q = e(E);
        var z = Object.keys(k).filter(function(te) {
          return te !== "key";
        });
        W = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", q[Q + W] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Q,
          z,
          Q
        ), q[Q + W] = !0);
      }
      if (Q = null, L !== void 0 && (r(L), Q = "" + L), o(k) && (r(k.key), Q = "" + k.key), "key" in k) {
        L = {};
        for (var V in k)
          V !== "key" && (L[V] = k[V]);
      } else L = k;
      return Q && s(
        L,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), u(
        E,
        Q,
        J,
        Y,
        a(),
        L,
        ne,
        oe
      );
    }
    function f(E) {
      typeof E == "object" && E !== null && E.$$typeof === p && E._store && (E._store.validated = 1);
    }
    var d = S, p = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), b = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), T = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, N = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var I, R = {}, F = d["react-stack-bottom-frame"].bind(
      d,
      i
    )(), U = D(n(i)), q = {};
    Ta.Fragment = y, Ta.jsx = function(E, k, L, W, Y) {
      var J = 1e4 > T.recentlyCreatedOwnerStacks++;
      return l(
        E,
        k,
        L,
        !1,
        W,
        Y,
        J ? Error("react-stack-top-frame") : F,
        J ? D(n(E)) : U
      );
    }, Ta.jsxs = function(E, k, L, W, Y) {
      var J = 1e4 > T.recentlyCreatedOwnerStacks++;
      return l(
        E,
        k,
        L,
        !0,
        W,
        Y,
        J ? Error("react-stack-top-frame") : F,
        J ? D(n(E)) : U
      );
    };
  }()), Ta;
}
process.env.NODE_ENV === "production" ? Pu.exports = K1() : Pu.exports = V1();
var A = Pu.exports;
const Y1 = "_animated_1ok3j_1", X1 = {
  animated: Y1
}, cV = ({ label: e, onClick: t, className: r }) => /* @__PURE__ */ A.jsx(
  "button",
  {
    type: "button",
    role: "button",
    "aria-label": e,
    onClick: t,
    className: `bg-blue-600 text-white px-4 py-2 rounded transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${X1.animated} ${r || ""}`.trim(),
    children: e
  }
), Z1 = "_primaryBtn_liq31_1", J1 = {
  primaryBtn: Z1
}, uV = ({
  children: e,
  className: t = "",
  ...r
}) => /* @__PURE__ */ A.jsx(
  "button",
  {
    className: `${J1.primaryBtn} ${t}`.trim(),
    ...r,
    children: e
  }
), Q1 = "_secondaryBtn_8embq_1", ew = {
  secondaryBtn: Q1
}, lV = ({
  children: e,
  className: t = "",
  ...r
}) => /* @__PURE__ */ A.jsx(
  "button",
  {
    className: `${ew.secondaryBtn} ${t}`.trim(),
    ...r,
    children: e
  }
), tw = "_iconBtn_1hm0g_1", rw = {
  iconBtn: tw
}, fV = ({
  icon: e,
  label: t,
  className: r = "",
  ...n
}) => /* @__PURE__ */ A.jsx(
  "button",
  {
    className: `${rw.iconBtn} ${r}`.trim(),
    "aria-label": t,
    ...n,
    children: e
  }
), dV = ({
  getShareUrl: e,
  copyToClipboard: t
}) => {
  const [r, n] = S.useState(!1), a = () => {
    t(e()), n(!0), setTimeout(() => n(!1), 1500);
  };
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ A.jsxs(
          "a",
          {
            href: "#",
            onClick: (i) => {
              i.preventDefault(), a();
            },
            className: "share-link share-link--copy",
            children: [
              /* @__PURE__ */ A.jsx(
                "span",
                {
                  className: "share-link-icon",
                  style: { color: "#fff" },
                  children: /* @__PURE__ */ A.jsxs(
                    "svg",
                    {
                      width: "22",
                      height: "22",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      children: [
                        /* @__PURE__ */ A.jsx("circle", { cx: "16", cy: "16", r: "16", fill: "#64748b" }),
                        /* @__PURE__ */ A.jsxs("g", { children: [
                          /* @__PURE__ */ A.jsx(
                            "rect",
                            {
                              x: "10",
                              y: "14",
                              width: "8",
                              height: "8",
                              rx: "2",
                              fill: "#fff"
                            }
                          ),
                          /* @__PURE__ */ A.jsx(
                            "rect",
                            {
                              x: "14",
                              y: "10",
                              width: "8",
                              height: "8",
                              rx: "2",
                              fill: "none",
                              stroke: "#fff",
                              strokeWidth: "2"
                            }
                          )
                        ] })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ A.jsx("span", { className: "share-link-text", children: "Copy URL" })
            ]
          }
        ),
        r && /* @__PURE__ */ A.jsx(
          "span",
          {
            style: {
              color: "#16a34a",
              fontSize: 14,
              marginLeft: 10,
              fontWeight: 700
            },
            children: "✓ Copied!"
          }
        )
      ]
    }
  );
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function nw(e, t, r) {
  return (t = iw(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yd(Object(r), !0).forEach(function(n) {
      nw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aw(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iw(e) {
  var t = aw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Xd = () => {
};
let Ef = {}, ag = {}, ig = null, og = {
  mark: Xd,
  measure: Xd
};
try {
  typeof window < "u" && (Ef = window), typeof document < "u" && (ag = document), typeof MutationObserver < "u" && (ig = MutationObserver), typeof performance < "u" && (og = performance);
} catch {
}
const {
  userAgent: Zd = ""
} = Ef.navigator || {}, Or = Ef, Ee = ag, Jd = ig, no = og;
Or.document;
const or = !!Ee.documentElement && !!Ee.head && typeof Ee.addEventListener == "function" && typeof Ee.createElement == "function", sg = ~Zd.indexOf("MSIE") || ~Zd.indexOf("Trident/");
var ow = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, sw = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, cg = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  }
}, cw = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ug = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], He = "classic", Bs = "duotone", uw = "sharp", lw = "sharp-duotone", lg = [He, Bs, uw, lw], fw = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, dw = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, pw = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}]]), hw = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, vw = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Qd = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, yw = ["kit"], mw = {
  kit: {
    "fa-kit": "fak"
  }
}, gw = ["fak", "fakd"], bw = {
  kit: {
    fak: "fa-kit"
  }
}, ep = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, ao = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, xw = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ww = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ow = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, _w = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  }
}, Sw = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Eu = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  }
}, Aw = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], $u = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...xw, ...Aw], Pw = ["solid", "regular", "light", "thin", "duotone", "brands"], fg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Ew = fg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), $w = [...Object.keys(Sw), ...Pw, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ao.GROUP, ao.SWAP_OPACITY, ao.PRIMARY, ao.SECONDARY].concat(fg.map((e) => "".concat(e, "x"))).concat(Ew.map((e) => "w-".concat(e))), Tw = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
const Qt = "___FONT_AWESOME___", Tu = 16, dg = "fa", pg = "svg-inline--fa", tn = "data-fa-i2svg", ju = "data-fa-pseudo-element", jw = "data-fa-pseudo-element-pending", $f = "data-prefix", Tf = "data-icon", tp = "fontawesome-i2svg", Cw = "async", Mw = ["HTML", "HEAD", "STYLE", "SCRIPT"], hg = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function Hi(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[He];
    }
  });
}
const vg = G({}, cg);
vg[He] = G(G(G(G({}, {
  "fa-duotone": "duotone"
}), cg[He]), Qd.kit), Qd["kit-duotone"]);
const kw = Hi(vg), Cu = G({}, hw);
Cu[He] = G(G(G(G({}, {
  duotone: "fad"
}), Cu[He]), ep.kit), ep["kit-duotone"]);
const rp = Hi(Cu), Mu = G({}, Eu);
Mu[He] = G(G({}, Mu[He]), bw.kit);
const jf = Hi(Mu), ku = G({}, _w);
ku[He] = G(G({}, ku[He]), mw.kit);
Hi(ku);
const Iw = ow, yg = "fa-layers-text", Nw = sw, Rw = G({}, fw);
Hi(Rw);
const Dw = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Tc = cw, Lw = [...yw, ...$w], Va = Or.FontAwesomeConfig || {};
function Bw(e) {
  var t = Ee.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Fw(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Ee && typeof Ee.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const a = Fw(Bw(r));
  a != null && (Va[n] = a);
});
const mg = {
  styleDefault: "solid",
  familyDefault: He,
  cssPrefix: dg,
  replacementClass: pg,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Va.familyPrefix && (Va.cssPrefix = Va.familyPrefix);
const Cn = G(G({}, mg), Va);
Cn.autoReplaceSvg || (Cn.observeMutations = !1);
const re = {};
Object.keys(mg).forEach((e) => {
  Object.defineProperty(re, e, {
    enumerable: !0,
    set: function(t) {
      Cn[e] = t, Ya.forEach((r) => r(re));
    },
    get: function() {
      return Cn[e];
    }
  });
});
Object.defineProperty(re, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Cn.cssPrefix = e, Ya.forEach((t) => t(re));
  },
  get: function() {
    return Cn.cssPrefix;
  }
});
Or.FontAwesomeConfig = re;
const Ya = [];
function zw(e) {
  return Ya.push(e), () => {
    Ya.splice(Ya.indexOf(e), 1);
  };
}
const pr = Tu, Ct = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ww(e) {
  if (!e || !or)
    return;
  const t = Ee.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = Ee.head.childNodes;
  let n = null;
  for (let a = r.length - 1; a > -1; a--) {
    const i = r[a], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
  }
  return Ee.head.insertBefore(t, n), e;
}
const Uw = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ii() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Uw[Math.random() * 62 | 0];
  return t;
}
function ua(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Cf(e) {
  return e.classList ? ua(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function gg(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Gw(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(gg(e[r]), '" '), "").trim();
}
function Fs(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function Mf(e) {
  return e.size !== Ct.size || e.x !== Ct.x || e.y !== Ct.y || e.rotate !== Ct.rotate || e.flipX || e.flipY;
}
function Hw(e) {
  let {
    transform: t,
    containerWidth: r,
    iconWidth: n
  } = e;
  const a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: c,
    path: u
  };
}
function qw(e) {
  let {
    transform: t,
    width: r = Tu,
    height: n = Tu,
    startCentered: a = !1
  } = e, i = "";
  return a && sg ? i += "translate(".concat(t.x / pr - r / 2, "em, ").concat(t.y / pr - n / 2, "em) ") : a ? i += "translate(calc(-50% + ".concat(t.x / pr, "em), calc(-50% + ").concat(t.y / pr, "em)) ") : i += "translate(".concat(t.x / pr, "em, ").concat(t.y / pr, "em) "), i += "scale(".concat(t.size / pr * (t.flipX ? -1 : 1), ", ").concat(t.size / pr * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var Kw = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function bg() {
  const e = dg, t = pg, r = re.cssPrefix, n = re.replacementClass;
  let a = Kw;
  if (r !== e || n !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return a;
}
let np = !1;
function jc() {
  re.autoAddCss && !np && (Ww(bg()), np = !0);
}
var Vw = {
  mixout() {
    return {
      dom: {
        css: bg,
        insertCss: jc
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        jc();
      },
      beforeI2svg() {
        jc();
      }
    };
  }
};
const er = Or || {};
er[Qt] || (er[Qt] = {});
er[Qt].styles || (er[Qt].styles = {});
er[Qt].hooks || (er[Qt].hooks = {});
er[Qt].shims || (er[Qt].shims = []);
var Mt = er[Qt];
const xg = [], wg = function() {
  Ee.removeEventListener("DOMContentLoaded", wg), $o = 1, xg.map((e) => e());
};
let $o = !1;
or && ($o = (Ee.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ee.readyState), $o || Ee.addEventListener("DOMContentLoaded", wg));
function Yw(e) {
  or && ($o ? setTimeout(e, 0) : xg.push(e));
}
function qi(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? gg(e) : "<".concat(t, " ").concat(Gw(r), ">").concat(n.map(qi).join(""), "</").concat(t, ">");
}
function ap(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Cc = function(t, r, n, a) {
  var i = Object.keys(t), o = i.length, s = r, c, u, l;
  for (n === void 0 ? (c = 1, l = t[i[0]]) : (c = 0, l = n); c < o; c++)
    u = i[c], l = s(l, t[u], u, t);
  return l;
};
function Xw(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const a = e.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      const i = e.charCodeAt(r++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), r--);
    } else
      t.push(a);
  }
  return t;
}
function Iu(e) {
  const t = Xw(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Zw(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function ip(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Nu(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, a = ip(t);
  typeof Mt.hooks.addPack == "function" && !n ? Mt.hooks.addPack(e, ip(t)) : Mt.styles[e] = G(G({}, Mt.styles[e] || {}), a), e === "fas" && Nu("fa", t);
}
const {
  styles: oi,
  shims: Jw
} = Mt, Og = Object.keys(jf), Qw = Og.reduce((e, t) => (e[t] = Object.keys(jf[t]), e), {});
let kf = null, _g = {}, Sg = {}, Ag = {}, Pg = {}, Eg = {};
function eO(e) {
  return ~Lw.indexOf(e);
}
function tO(e, t) {
  const r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !eO(a) ? a : null;
}
const $g = () => {
  const e = (n) => Cc(oi, (a, i, o) => (a[o] = Cc(i, n, {}), a), {});
  _g = e((n, a, i) => (a[3] && (n[a[3]] = i), a[2] && a[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = i;
  }), n)), Sg = e((n, a, i) => (n[i] = i, a[2] && a[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = i;
  }), n)), Eg = e((n, a, i) => {
    const o = a[2];
    return n[i] = i, o.forEach((s) => {
      n[s] = i;
    }), n;
  });
  const t = "far" in oi || re.autoFetchSvg, r = Cc(Jw, (n, a) => {
    const i = a[0];
    let o = a[1];
    const s = a[2];
    return o === "far" && !t && (o = "fas"), typeof i == "string" && (n.names[i] = {
      prefix: o,
      iconName: s
    }), typeof i == "number" && (n.unicodes[i.toString(16)] = {
      prefix: o,
      iconName: s
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  Ag = r.names, Pg = r.unicodes, kf = zs(re.styleDefault, {
    family: re.familyDefault
  });
};
zw((e) => {
  kf = zs(e.styleDefault, {
    family: re.familyDefault
  });
});
$g();
function If(e, t) {
  return (_g[e] || {})[t];
}
function rO(e, t) {
  return (Sg[e] || {})[t];
}
function qr(e, t) {
  return (Eg[e] || {})[t];
}
function Tg(e) {
  return Ag[e] || {
    prefix: null,
    iconName: null
  };
}
function nO(e) {
  const t = Pg[e], r = If("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function _r() {
  return kf;
}
const jg = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function aO(e) {
  let t = He;
  const r = Og.reduce((n, a) => (n[a] = "".concat(re.cssPrefix, "-").concat(a), n), {});
  return lg.forEach((n) => {
    (e.includes(r[n]) || e.some((a) => Qw[n].includes(a))) && (t = n);
  }), t;
}
function zs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = He
  } = t, n = kw[r][e];
  if (r === Bs && !e)
    return "fad";
  const a = rp[r][e] || rp[r][n], i = e in Mt.styles ? e : null;
  return a || i || null;
}
function iO(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const a = tO(re.cssPrefix, n);
    a ? r = a : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function op(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Ws(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const a = $u.concat(ww), i = op(e.filter((f) => a.includes(f))), o = op(e.filter((f) => !$u.includes(f))), s = i.filter((f) => (n = f, !ug.includes(f))), [c = null] = s, u = aO(i), l = G(G({}, iO(o)), {}, {
    prefix: zs(c, {
      family: u
    })
  });
  return G(G(G({}, l), uO({
    values: e,
    family: u,
    styles: oi,
    config: re,
    canonical: l,
    givenPrefix: n
  })), oO(r, n, l));
}
function oO(e, t, r) {
  let {
    prefix: n,
    iconName: a
  } = r;
  if (e || !n || !a)
    return {
      prefix: n,
      iconName: a
    };
  const i = t === "fa" ? Tg(a) : {}, o = qr(n, a);
  return a = i.iconName || o || a, n = i.prefix || n, n === "far" && !oi.far && oi.fas && !re.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: a
  };
}
const sO = lg.filter((e) => e !== He || e !== Bs), cO = Object.keys(Eu).filter((e) => e !== He).map((e) => Object.keys(Eu[e])).flat();
function uO(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: a = "",
    styles: i = {},
    config: o = {}
  } = e, s = r === Bs, c = t.includes("fa-duotone") || t.includes("fad"), u = o.familyDefault === "duotone", l = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (c || u || l) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && sO.includes(r) && (Object.keys(i).find((d) => cO.includes(d)) || o.autoFetchSvg)) {
    const d = pw.get(r).defaultShortPrefixId;
    n.prefix = d, n.iconName = qr(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || a === "fa") && (n.prefix = _r() || "fas"), n;
}
class lO {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const a = r.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((i) => {
      this.definitions[i] = G(G({}, this.definitions[i] || {}), a[i]), Nu(i, a[i]);
      const o = jf[He][i];
      o && Nu(o, a[i]), $g();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, r) {
    const n = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(n).map((a) => {
      const {
        prefix: i,
        iconName: o,
        icon: s
      } = n[a], c = s[2];
      t[i] || (t[i] = {}), c.length > 0 && c.forEach((u) => {
        typeof u == "string" && (t[i][u] = s);
      }), t[i][o] = s;
    }), t;
  }
}
let sp = [], xn = {};
const En = {}, fO = Object.keys(En);
function dO(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return sp = e, xn = {}, Object.keys(En).forEach((n) => {
    fO.indexOf(n) === -1 && delete En[n];
  }), sp.forEach((n) => {
    const a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach((i) => {
      typeof a[i] == "function" && (r[i] = a[i]), typeof a[i] == "object" && Object.keys(a[i]).forEach((o) => {
        r[i] || (r[i] = {}), r[i][o] = a[i][o];
      });
    }), n.hooks) {
      const i = n.hooks();
      Object.keys(i).forEach((o) => {
        xn[o] || (xn[o] = []), xn[o].push(i[o]);
      });
    }
    n.provides && n.provides(En);
  }), r;
}
function Ru(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return (xn[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...n]);
  }), t;
}
function rn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (xn[e] || []).forEach((i) => {
    i.apply(null, r);
  });
}
function Sr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return En[e] ? En[e].apply(null, t) : void 0;
}
function Du(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || _r();
  if (t)
    return t = qr(r, t) || t, ap(Cg.definitions, r, t) || ap(Mt.styles, r, t);
}
const Cg = new lO(), pO = () => {
  re.autoReplaceSvg = !1, re.observeMutations = !1, rn("noAuto");
}, hO = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return or ? (rn("beforeI2svg", e), Sr("pseudoElements2svg", e), Sr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    re.autoReplaceSvg === !1 && (re.autoReplaceSvg = !0), re.observeMutations = !0, Yw(() => {
      yO({
        autoReplaceSvgRoot: t
      }), rn("watch", e);
    });
  }
}, vO = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: qr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = zs(e[0]);
      return {
        prefix: r,
        iconName: qr(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(re.cssPrefix, "-")) > -1 || e.match(Iw))) {
      const t = Ws(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || _r(),
        iconName: qr(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = _r();
      return {
        prefix: t,
        iconName: qr(t, e) || e
      };
    }
  }
}, ut = {
  noAuto: pO,
  config: re,
  dom: hO,
  parse: vO,
  library: Cg,
  findIconDefinition: Du,
  toHtml: qi
}, yO = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Ee
  } = e;
  (Object.keys(Mt.styles).length > 0 || re.autoFetchSvg) && or && re.autoReplaceSvg && ut.dom.i2svg({
    node: t
  });
};
function Us(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => qi(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!or) return;
      const r = Ee.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function mO(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: a,
    styles: i,
    transform: o
  } = e;
  if (Mf(o) && r.found && !n.found) {
    const {
      width: s,
      height: c
    } = r, u = {
      x: s / c / 2,
      y: 0.5
    };
    a.style = Fs(G(G({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function gO(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: a,
    symbol: i
  } = e;
  const o = i === !0 ? "".concat(t, "-").concat(re.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: G(G({}, a), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Nf(e) {
  const {
    icons: {
      main: t,
      mask: r
    },
    prefix: n,
    iconName: a,
    transform: i,
    symbol: o,
    title: s,
    maskId: c,
    titleId: u,
    extra: l,
    watchable: f = !1
  } = e, {
    width: d,
    height: p
  } = r.found ? r : t, v = gw.includes(n), y = [re.replacementClass, a ? "".concat(re.cssPrefix, "-").concat(a) : ""].filter((m) => l.classes.indexOf(m) === -1).filter((m) => m !== "" || !!m).concat(l.classes).join(" ");
  let h = {
    children: [],
    attributes: G(G({}, l.attributes), {}, {
      "data-prefix": n,
      "data-icon": a,
      class: y,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(d, " ").concat(p)
    })
  };
  const g = v && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(d / p * 16 * 0.0625, "em")
  } : {};
  f && (h.attributes[tn] = ""), s && (h.children.push({
    tag: "title",
    attributes: {
      id: h.attributes["aria-labelledby"] || "title-".concat(u || ii())
    },
    children: [s]
  }), delete h.attributes.title);
  const w = G(G({}, h), {}, {
    prefix: n,
    iconName: a,
    main: t,
    mask: r,
    maskId: c,
    transform: i,
    symbol: o,
    styles: G(G({}, g), l.styles)
  }), {
    children: b,
    attributes: O
  } = r.found && t.found ? Sr("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Sr("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = b, w.attributes = O, o ? gO(w) : mO(w);
}
function cp(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: a,
    title: i,
    extra: o,
    watchable: s = !1
  } = e, c = G(G(G({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (c[tn] = "");
  const u = G({}, o.styles);
  Mf(a) && (u.transform = qw({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), u["-webkit-transform"] = u.transform);
  const l = Fs(u);
  l.length > 0 && (c.style = l);
  const f = [];
  return f.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), f;
}
function bO(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, a = G(G(G({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = Fs(n.styles);
  i.length > 0 && (a.style = i);
  const o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
const {
  styles: Mc
} = Mt;
function Lu(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let a = null;
  return Array.isArray(n) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(re.cssPrefix, "-").concat(Tc.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(re.cssPrefix, "-").concat(Tc.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(re.cssPrefix, "-").concat(Tc.PRIMARY),
        fill: "currentColor",
        d: n[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: n
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: a
  };
}
const xO = {
  found: !1,
  width: 512,
  height: 512
};
function wO(e, t) {
  !hg && !re.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Bu(e, t) {
  let r = t;
  return t === "fa" && re.styleDefault !== null && (t = _r()), new Promise((n, a) => {
    if (r === "fa") {
      const i = Tg(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Mc[t] && Mc[t][e]) {
      const i = Mc[t][e];
      return n(Lu(i));
    }
    wO(e, t), n(G(G({}, xO), {}, {
      icon: re.showMissingIcons && e ? Sr("missingIconAbstract") || {} : {}
    }));
  });
}
const up = () => {
}, Fu = re.measurePerformance && no && no.mark && no.measure ? no : {
  mark: up,
  measure: up
}, qa = 'FA "6.7.2"', OO = (e) => (Fu.mark("".concat(qa, " ").concat(e, " begins")), () => Mg(e)), Mg = (e) => {
  Fu.mark("".concat(qa, " ").concat(e, " ends")), Fu.measure("".concat(qa, " ").concat(e), "".concat(qa, " ").concat(e, " begins"), "".concat(qa, " ").concat(e, " ends"));
};
var Rf = {
  begin: OO,
  end: Mg
};
const So = () => {
};
function lp(e) {
  return typeof (e.getAttribute ? e.getAttribute(tn) : null) == "string";
}
function _O(e) {
  const t = e.getAttribute ? e.getAttribute($f) : null, r = e.getAttribute ? e.getAttribute(Tf) : null;
  return t && r;
}
function SO(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(re.replacementClass);
}
function AO() {
  return re.autoReplaceSvg === !0 ? Ao.replace : Ao[re.autoReplaceSvg] || Ao.replace;
}
function PO(e) {
  return Ee.createElementNS("http://www.w3.org/2000/svg", e);
}
function EO(e) {
  return Ee.createElement(e);
}
function kg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? PO : EO
  } = t;
  if (typeof e == "string")
    return Ee.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    n.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    n.appendChild(kg(i, {
      ceFn: r
    }));
  }), n;
}
function $O(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ao = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(kg(r), t);
      }), t.getAttribute(tn) === null && re.keepOriginalSource) {
        let r = Ee.createComment($O(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~Cf(t).indexOf(re.replacementClass))
      return Ao.replace(e);
    const n = new RegExp("".concat(re.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const i = r[0].attributes.class.split(" ").reduce((o, s) => (s === re.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const a = r.map((i) => qi(i)).join(`
`);
    t.setAttribute(tn, ""), t.innerHTML = a;
  }
};
function fp(e) {
  e();
}
function Ig(e, t) {
  const r = typeof t == "function" ? t : So;
  if (e.length === 0)
    r();
  else {
    let n = fp;
    re.mutateApproach === Cw && (n = Or.requestAnimationFrame || fp), n(() => {
      const a = AO(), i = Rf.begin("mutate");
      e.map(a), i(), r();
    });
  }
}
let Df = !1;
function Ng() {
  Df = !0;
}
function zu() {
  Df = !1;
}
let To = null;
function dp(e) {
  if (!Jd || !re.observeMutations)
    return;
  const {
    treeCallback: t = So,
    nodeCallback: r = So,
    pseudoElementsCallback: n = So,
    observeMutationsRoot: a = Ee
  } = e;
  To = new Jd((i) => {
    if (Df) return;
    const o = _r();
    ua(i).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !lp(s.addedNodes[0]) && (re.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && re.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && lp(s.target) && ~Dw.indexOf(s.attributeName))
        if (s.attributeName === "class" && _O(s.target)) {
          const {
            prefix: c,
            iconName: u
          } = Ws(Cf(s.target));
          s.target.setAttribute($f, c || o), u && s.target.setAttribute(Tf, u);
        } else SO(s.target) && r(s.target);
    });
  }), or && To.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function TO() {
  To && To.disconnect();
}
function jO(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, a) => {
    const i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function CO(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Ws(Cf(e));
  return a.prefix || (a.prefix = _r()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = rO(a.prefix, e.innerText) || If(a.prefix, Iu(e.innerText))), !a.iconName && re.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function MO(e) {
  const t = ua(e.attributes).reduce((a, i) => (a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return re.autoA11y && (r ? t["aria-labelledby"] = "".concat(re.replacementClass, "-title-").concat(n || ii()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function kO() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ct,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function pp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: a
  } = CO(e), i = MO(e), o = Ru("parseNodeAttributes", {}, e);
  let s = t.styleParser ? jO(e) : [];
  return G({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: Ct,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: s,
      attributes: i
    }
  }, o);
}
const {
  styles: IO
} = Mt;
function Rg(e) {
  const t = re.autoReplaceSvg === "nest" ? pp(e, {
    styleParser: !1
  }) : pp(e);
  return ~t.extra.classes.indexOf(yg) ? Sr("generateLayersText", e, t) : Sr("generateSvgReplacementMutation", e, t);
}
function NO() {
  return [...vw, ...$u];
}
function hp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!or) return Promise.resolve();
  const r = Ee.documentElement.classList, n = (l) => r.add("".concat(tp, "-").concat(l)), a = (l) => r.remove("".concat(tp, "-").concat(l)), i = re.autoFetchSvg ? NO() : ug.concat(Object.keys(IO));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(yg, ":not([").concat(tn, "])")].concat(i.map((l) => ".".concat(l, ":not([").concat(tn, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = ua(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  const c = Rf.begin("onTree"), u = s.reduce((l, f) => {
    try {
      const d = Rg(f);
      d && l.push(d);
    } catch (d) {
      hg || d.name === "MissingIcon" && console.error(d);
    }
    return l;
  }, []);
  return new Promise((l, f) => {
    Promise.all(u).then((d) => {
      Ig(d, () => {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), c(), l();
      });
    }).catch((d) => {
      c(), f(d);
    });
  });
}
function RO(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Rg(e).then((r) => {
    r && Ig([r], t);
  });
}
function DO(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : Du(t || {});
    let {
      mask: a
    } = r;
    return a && (a = (a || {}).icon ? a : Du(a || {})), e(n, G(G({}, r), {}, {
      mask: a
    }));
  };
}
const LO = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = Ct,
    symbol: n = !1,
    mask: a = null,
    maskId: i = null,
    title: o = null,
    titleId: s = null,
    classes: c = [],
    attributes: u = {},
    styles: l = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: d,
    icon: p
  } = e;
  return Us(G({
    type: "icon"
  }, e), () => (rn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), re.autoA11y && (o ? u["aria-labelledby"] = "".concat(re.replacementClass, "-title-").concat(s || ii()) : (u["aria-hidden"] = "true", u.focusable = "false")), Nf({
    icons: {
      main: Lu(p),
      mask: a ? Lu(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: d,
    transform: G(G({}, Ct), r),
    symbol: n,
    title: o,
    maskId: i,
    titleId: s,
    extra: {
      attributes: u,
      styles: l,
      classes: c
    }
  })));
};
var BO = {
  mixout() {
    return {
      icon: DO(LO)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = hp, e.nodeCallback = RO, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = Ee,
        callback: n = () => {
        }
      } = t;
      return hp(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: a,
        titleId: i,
        prefix: o,
        transform: s,
        symbol: c,
        mask: u,
        maskId: l,
        extra: f
      } = r;
      return new Promise((d, p) => {
        Promise.all([Bu(n, o), u.iconName ? Bu(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((v) => {
          let [y, h] = v;
          d([t, Nf({
            icons: {
              main: y,
              mask: h
            },
            prefix: o,
            iconName: n,
            transform: s,
            symbol: c,
            maskId: l,
            title: a,
            titleId: i,
            extra: f,
            watchable: !0
          })]);
        }).catch(p);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: r,
        attributes: n,
        main: a,
        transform: i,
        styles: o
      } = t;
      const s = Fs(o);
      s.length > 0 && (n.style = s);
      let c;
      return Mf(i) && (c = Sr("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(c || a.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, FO = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return Us({
          type: "layer"
        }, () => {
          rn("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let n = [];
          return e((a) => {
            Array.isArray(a) ? a.map((i) => {
              n = n.concat(i.abstract);
            }) : n = n.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(re.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, zO = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: n = [],
          attributes: a = {},
          styles: i = {}
        } = t;
        return Us({
          type: "counter",
          content: e
        }, () => (rn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), bO({
          content: e.toString(),
          title: r,
          extra: {
            attributes: a,
            styles: i,
            classes: ["".concat(re.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, WO = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = Ct,
          title: n = null,
          classes: a = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return Us({
          type: "text",
          content: e
        }, () => (rn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), cp({
          content: e,
          transform: G(G({}, Ct), r),
          title: n,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(re.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, r) {
      const {
        title: n,
        transform: a,
        extra: i
      } = r;
      let o = null, s = null;
      if (sg) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / c, s = u.height / c;
      }
      return re.autoA11y && !n && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, cp({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: a,
        title: n,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const UO = new RegExp('"', "ug"), vp = [1105920, 1112319], yp = G(G(G(G({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), dw), Tw), Ow), Wu = Object.keys(yp).reduce((e, t) => (e[t.toLowerCase()] = yp[t], e), {}), GO = Object.keys(Wu).reduce((e, t) => {
  const r = Wu[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function HO(e) {
  const t = e.replace(UO, ""), r = Zw(t, 0), n = r >= vp[0] && r <= vp[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Iu(a ? t[0] : t),
    isSecondary: n || a
  };
}
function qO(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), a = isNaN(n) ? "normal" : n;
  return (Wu[r] || {})[a] || GO[r];
}
function mp(e, t) {
  const r = "".concat(jw).concat(t.replace(":", "-"));
  return new Promise((n, a) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = ua(e.children).filter((d) => d.getAttribute(ju) === t)[0], s = Or.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), u = c.match(Nw), l = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return e.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      const d = s.getPropertyValue("content");
      let p = qO(c, l);
      const {
        value: v,
        isSecondary: y
      } = HO(d), h = u[0].startsWith("FontAwesome");
      let g = If(p, v), w = g;
      if (h) {
        const b = nO(v);
        b.iconName && b.prefix && (g = b.iconName, p = b.prefix);
      }
      if (g && !y && (!o || o.getAttribute($f) !== p || o.getAttribute(Tf) !== w)) {
        e.setAttribute(r, w), o && e.removeChild(o);
        const b = kO(), {
          extra: O
        } = b;
        O.attributes[ju] = t, Bu(g, p).then((m) => {
          const x = Nf(G(G({}, b), {}, {
            icons: {
              main: m,
              mask: jg()
            },
            prefix: p,
            iconName: w,
            extra: O,
            watchable: !0
          })), _ = Ee.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(_, e.firstChild) : e.appendChild(_), _.outerHTML = x.map((P) => qi(P)).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function KO(e) {
  return Promise.all([mp(e, "::before"), mp(e, "::after")]);
}
function VO(e) {
  return e.parentNode !== document.head && !~Mw.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ju) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function gp(e) {
  if (or)
    return new Promise((t, r) => {
      const n = ua(e.querySelectorAll("*")).filter(VO).map(KO), a = Rf.begin("searchPseudoElements");
      Ng(), Promise.all(n).then(() => {
        a(), zu(), t();
      }).catch(() => {
        a(), zu(), r();
      });
    });
}
var YO = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = gp, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = Ee
      } = t;
      re.searchPseudoElements && gp(r);
    };
  }
};
let bp = !1;
var XO = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Ng(), bp = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        dp(Ru("mutationObserverCallbacks", {}));
      },
      noAuto() {
        TO();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        bp ? zu() : dp(Ru("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const xp = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((r, n) => {
    const a = n.toLowerCase().split("-"), i = a[0];
    let o = a.slice(1).join("-");
    if (i && o === "h")
      return r.flipX = !0, r;
    if (i && o === "v")
      return r.flipY = !0, r;
    if (o = parseFloat(o), isNaN(o))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + o;
        break;
      case "shrink":
        r.size = r.size - o;
        break;
      case "left":
        r.x = r.x - o;
        break;
      case "right":
        r.x = r.x + o;
        break;
      case "up":
        r.y = r.y - o;
        break;
      case "down":
        r.y = r.y + o;
        break;
      case "rotate":
        r.rotate = r.rotate + o;
        break;
    }
    return r;
  }, t);
};
var ZO = {
  mixout() {
    return {
      parse: {
        transform: (e) => xp(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = xp(r)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: r,
        transform: n,
        containerWidth: a,
        iconWidth: i
      } = t;
      const o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), c = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), u = "rotate(".concat(n.rotate, " 0 0)"), l = {
        transform: "".concat(s, " ").concat(c, " ").concat(u)
      }, f = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: l,
        path: f
      };
      return {
        tag: "g",
        attributes: G({}, d.outer),
        children: [{
          tag: "g",
          attributes: G({}, d.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: G(G({}, r.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
};
const kc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function wp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function JO(e) {
  return e.tag === "g" ? e.children : [e];
}
var QO = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? Ws(r.split(" ").map((a) => a.trim())) : jg();
        return n.prefix || (n.prefix = _r()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: r,
        attributes: n,
        main: a,
        mask: i,
        maskId: o,
        transform: s
      } = t;
      const {
        width: c,
        icon: u
      } = a, {
        width: l,
        icon: f
      } = i, d = Hw({
        transform: s,
        containerWidth: l,
        iconWidth: c
      }), p = {
        tag: "rect",
        attributes: G(G({}, kc), {}, {
          fill: "white"
        })
      }, v = u.children ? {
        children: u.children.map(wp)
      } : {}, y = {
        tag: "g",
        attributes: G({}, d.inner),
        children: [wp(G({
          tag: u.tag,
          attributes: G(G({}, u.attributes), d.path)
        }, v))]
      }, h = {
        tag: "g",
        attributes: G({}, d.outer),
        children: [y]
      }, g = "mask-".concat(o || ii()), w = "clip-".concat(o || ii()), b = {
        tag: "mask",
        attributes: G(G({}, kc), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [p, h]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: JO(f)
        }, b]
      };
      return r.push(O, {
        tag: "rect",
        attributes: G({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(g, ")")
        }, kc)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, e_ = {
  provides(e) {
    let t = !1;
    Or.matchMedia && (t = Or.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: G(G({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const i = G(G({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: G(G({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: G(G({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: G(G({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: G(G({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: G(G({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: G(G({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: G(G({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, t_ = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, r_ = [Vw, BO, FO, zO, WO, YO, XO, ZO, QO, e_, t_];
dO(r_, {
  mixoutsTo: ut
});
ut.noAuto;
ut.config;
ut.library;
ut.dom;
const Uu = ut.parse;
ut.findIconDefinition;
ut.toHtml;
const n_ = ut.icon;
ut.layer;
ut.text;
ut.counter;
var Gu = { exports: {} }, io = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Op;
function a_() {
  if (Op) return pe;
  Op = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case n:
            case i:
            case a:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case l:
                case v:
                case p:
                case o:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function O(m) {
    return b(m) === u;
  }
  return pe.AsyncMode = c, pe.ConcurrentMode = u, pe.ContextConsumer = s, pe.ContextProvider = o, pe.Element = t, pe.ForwardRef = l, pe.Fragment = n, pe.Lazy = v, pe.Memo = p, pe.Portal = r, pe.Profiler = i, pe.StrictMode = a, pe.Suspense = f, pe.isAsyncMode = function(m) {
    return O(m) || b(m) === c;
  }, pe.isConcurrentMode = O, pe.isContextConsumer = function(m) {
    return b(m) === s;
  }, pe.isContextProvider = function(m) {
    return b(m) === o;
  }, pe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, pe.isForwardRef = function(m) {
    return b(m) === l;
  }, pe.isFragment = function(m) {
    return b(m) === n;
  }, pe.isLazy = function(m) {
    return b(m) === v;
  }, pe.isMemo = function(m) {
    return b(m) === p;
  }, pe.isPortal = function(m) {
    return b(m) === r;
  }, pe.isProfiler = function(m) {
    return b(m) === i;
  }, pe.isStrictMode = function(m) {
    return b(m) === a;
  }, pe.isSuspense = function(m) {
    return b(m) === f;
  }, pe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === i || m === a || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === p || m.$$typeof === o || m.$$typeof === s || m.$$typeof === l || m.$$typeof === h || m.$$typeof === g || m.$$typeof === w || m.$$typeof === y);
  }, pe.typeOf = b, pe;
}
var he = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p;
function i_() {
  return _p || (_p = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function b(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === u || C === i || C === a || C === f || C === d || typeof C == "object" && C !== null && (C.$$typeof === v || C.$$typeof === p || C.$$typeof === o || C.$$typeof === s || C.$$typeof === l || C.$$typeof === h || C.$$typeof === g || C.$$typeof === w || C.$$typeof === y);
    }
    function O(C) {
      if (typeof C == "object" && C !== null) {
        var le = C.$$typeof;
        switch (le) {
          case t:
            var K = C.type;
            switch (K) {
              case c:
              case u:
              case n:
              case i:
              case a:
              case f:
                return K;
              default:
                var Oe = K && K.$$typeof;
                switch (Oe) {
                  case s:
                  case l:
                  case v:
                  case p:
                  case o:
                    return Oe;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, _ = s, P = o, $ = t, M = l, T = n, j = v, N = p, D = r, I = i, R = a, F = f, U = !1;
    function q(C) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(C) || O(C) === c;
    }
    function E(C) {
      return O(C) === u;
    }
    function k(C) {
      return O(C) === s;
    }
    function L(C) {
      return O(C) === o;
    }
    function W(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function Y(C) {
      return O(C) === l;
    }
    function J(C) {
      return O(C) === n;
    }
    function ne(C) {
      return O(C) === v;
    }
    function oe(C) {
      return O(C) === p;
    }
    function Q(C) {
      return O(C) === r;
    }
    function z(C) {
      return O(C) === i;
    }
    function V(C) {
      return O(C) === a;
    }
    function te(C) {
      return O(C) === f;
    }
    he.AsyncMode = m, he.ConcurrentMode = x, he.ContextConsumer = _, he.ContextProvider = P, he.Element = $, he.ForwardRef = M, he.Fragment = T, he.Lazy = j, he.Memo = N, he.Portal = D, he.Profiler = I, he.StrictMode = R, he.Suspense = F, he.isAsyncMode = q, he.isConcurrentMode = E, he.isContextConsumer = k, he.isContextProvider = L, he.isElement = W, he.isForwardRef = Y, he.isFragment = J, he.isLazy = ne, he.isMemo = oe, he.isPortal = Q, he.isProfiler = z, he.isStrictMode = V, he.isSuspense = te, he.isValidElementType = b, he.typeOf = O;
  }()), he;
}
var Sp;
function Dg() {
  return Sp || (Sp = 1, process.env.NODE_ENV === "production" ? io.exports = a_() : io.exports = i_()), io.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ic, Ap;
function o_() {
  if (Ap) return Ic;
  Ap = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ic = a() ? Object.assign : function(i, o) {
    for (var s, c = n(i), u, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var d = 0; d < u.length; d++)
          r.call(s, u[d]) && (c[u[d]] = s[u[d]]);
      }
    }
    return c;
  }, Ic;
}
var Nc, Pp;
function Lf() {
  if (Pp) return Nc;
  Pp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nc = e, Nc;
}
var Rc, Ep;
function Lg() {
  return Ep || (Ep = 1, Rc = Function.call.bind(Object.prototype.hasOwnProperty)), Rc;
}
var Dc, $p;
function s_() {
  if ($p) return Dc;
  $p = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Lf(), r = {}, n = Lg();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (n(i, l)) {
          var f;
          try {
            if (typeof i[l] != "function") {
              var d = Error(
                (c || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = i[l](o, l, c, s, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Dc = a, Dc;
}
var Lc, Tp;
function c_() {
  if (Tp) return Lc;
  Tp = 1;
  var e = Dg(), t = o_(), r = Lf(), n = Lg(), a = s_(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Lc = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(E) {
      var k = E && (u && E[u] || E[l]);
      if (typeof k == "function")
        return k;
    }
    var d = "<<anonymous>>", p = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: w(),
      arrayOf: b,
      element: O(),
      elementType: m(),
      instanceOf: x,
      node: M(),
      objectOf: P,
      oneOf: _,
      oneOfType: $,
      shape: j,
      exact: N
    };
    function v(E, k) {
      return E === k ? E !== 0 || 1 / E === 1 / k : E !== E && k !== k;
    }
    function y(E, k) {
      this.message = E, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function h(E) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, L = 0;
      function W(J, ne, oe, Q, z, V, te) {
        if (Q = Q || d, V = V || oe, te !== r) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = Q + ":" + oe;
            !k[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[le] = !0, L++);
          }
        }
        return ne[oe] == null ? J ? ne[oe] === null ? new y("The " + z + " `" + V + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new y("The " + z + " `" + V + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : E(ne, oe, Q, z, V);
      }
      var Y = W.bind(null, !1);
      return Y.isRequired = W.bind(null, !0), Y;
    }
    function g(E) {
      function k(L, W, Y, J, ne, oe) {
        var Q = L[W], z = R(Q);
        if (z !== E) {
          var V = F(Q);
          return new y(
            "Invalid " + J + " `" + ne + "` of type " + ("`" + V + "` supplied to `" + Y + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return h(k);
    }
    function w() {
      return h(o);
    }
    function b(E) {
      function k(L, W, Y, J, ne) {
        if (typeof E != "function")
          return new y("Property `" + ne + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var oe = L[W];
        if (!Array.isArray(oe)) {
          var Q = R(oe);
          return new y("Invalid " + J + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var z = 0; z < oe.length; z++) {
          var V = E(oe, z, Y, J, ne + "[" + z + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return h(k);
    }
    function O() {
      function E(k, L, W, Y, J) {
        var ne = k[L];
        if (!s(ne)) {
          var oe = R(ne);
          return new y("Invalid " + Y + " `" + J + "` of type " + ("`" + oe + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(E);
    }
    function m() {
      function E(k, L, W, Y, J) {
        var ne = k[L];
        if (!e.isValidElementType(ne)) {
          var oe = R(ne);
          return new y("Invalid " + Y + " `" + J + "` of type " + ("`" + oe + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(E);
    }
    function x(E) {
      function k(L, W, Y, J, ne) {
        if (!(L[W] instanceof E)) {
          var oe = E.name || d, Q = q(L[W]);
          return new y("Invalid " + J + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + Y + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return h(k);
    }
    function _(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function k(L, W, Y, J, ne) {
        for (var oe = L[W], Q = 0; Q < E.length; Q++)
          if (v(oe, E[Q]))
            return null;
        var z = JSON.stringify(E, function(te, C) {
          var le = F(C);
          return le === "symbol" ? String(C) : C;
        });
        return new y("Invalid " + J + " `" + ne + "` of value `" + String(oe) + "` " + ("supplied to `" + Y + "`, expected one of " + z + "."));
      }
      return h(k);
    }
    function P(E) {
      function k(L, W, Y, J, ne) {
        if (typeof E != "function")
          return new y("Property `" + ne + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var oe = L[W], Q = R(oe);
        if (Q !== "object")
          return new y("Invalid " + J + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + Y + "`, expected an object."));
        for (var z in oe)
          if (n(oe, z)) {
            var V = E(oe, z, Y, J, ne + "." + z, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return h(k);
    }
    function $(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var k = 0; k < E.length; k++) {
        var L = E[k];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(L) + " at index " + k + "."
          ), o;
      }
      function W(Y, J, ne, oe, Q) {
        for (var z = [], V = 0; V < E.length; V++) {
          var te = E[V], C = te(Y, J, ne, oe, Q, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && z.push(C.data.expectedType);
        }
        var le = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new y("Invalid " + oe + " `" + Q + "` supplied to " + ("`" + ne + "`" + le + "."));
      }
      return h(W);
    }
    function M() {
      function E(k, L, W, Y, J) {
        return D(k[L]) ? null : new y("Invalid " + Y + " `" + J + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return h(E);
    }
    function T(E, k, L, W, Y) {
      return new y(
        (E || "React class") + ": " + k + " type `" + L + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function j(E) {
      function k(L, W, Y, J, ne) {
        var oe = L[W], Q = R(oe);
        if (Q !== "object")
          return new y("Invalid " + J + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var z in E) {
          var V = E[z];
          if (typeof V != "function")
            return T(Y, J, ne, z, F(V));
          var te = V(oe, z, Y, J, ne + "." + z, r);
          if (te)
            return te;
        }
        return null;
      }
      return h(k);
    }
    function N(E) {
      function k(L, W, Y, J, ne) {
        var oe = L[W], Q = R(oe);
        if (Q !== "object")
          return new y("Invalid " + J + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var z = t({}, L[W], E);
        for (var V in z) {
          var te = E[V];
          if (n(E, V) && typeof te != "function")
            return T(Y, J, ne, V, F(te));
          if (!te)
            return new y(
              "Invalid " + J + " `" + ne + "` key `" + V + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(L[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var C = te(oe, V, Y, J, ne + "." + V, r);
          if (C)
            return C;
        }
        return null;
      }
      return h(k);
    }
    function D(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(D);
          if (E === null || s(E))
            return !0;
          var k = f(E);
          if (k) {
            var L = k.call(E), W;
            if (k !== E.entries) {
              for (; !(W = L.next()).done; )
                if (!D(W.value))
                  return !1;
            } else
              for (; !(W = L.next()).done; ) {
                var Y = W.value;
                if (Y && !D(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function I(E, k) {
      return E === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function R(E) {
      var k = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : I(k, E) ? "symbol" : k;
    }
    function F(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var k = R(E);
      if (k === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function U(E) {
      var k = F(E);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function q(E) {
      return !E.constructor || !E.constructor.name ? d : E.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, Lc;
}
var Bc, jp;
function u_() {
  if (jp) return Bc;
  jp = 1;
  var e = Lf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Bc = function() {
    function n(o, s, c, u, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Bc;
}
if (process.env.NODE_ENV !== "production") {
  var l_ = Dg(), f_ = !0;
  Gu.exports = c_()(l_.isElement, f_);
} else
  Gu.exports = u_()();
var d_ = Gu.exports;
const X = /* @__PURE__ */ me(d_);
function Cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cp(Object(r), !0).forEach(function(n) {
      wn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jo(e) {
  "@babel/helpers - typeof";
  return jo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jo(e);
}
function wn(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function p_(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function h_(e, t) {
  if (e == null) return {};
  var r = p_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Hu(e) {
  return v_(e) || y_(e) || m_(e) || g_();
}
function v_(e) {
  if (Array.isArray(e)) return qu(e);
}
function y_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function m_(e, t) {
  if (e) {
    if (typeof e == "string") return qu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qu(e, t);
  }
}
function qu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function g_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b_(e) {
  var t, r = e.beat, n = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, c = e.spin, u = e.spinPulse, l = e.spinReverse, f = e.pulse, d = e.fixedWidth, p = e.inverse, v = e.border, y = e.listItem, h = e.flip, g = e.size, w = e.rotation, b = e.pull, O = (t = {
    "fa-beat": r,
    "fa-fade": n,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": l,
    "fa-spin-pulse": u,
    "fa-pulse": f,
    "fa-fw": d,
    "fa-inverse": p,
    "fa-border": v,
    "fa-li": y,
    "fa-flip": h === !0,
    "fa-flip-horizontal": h === "horizontal" || h === "both",
    "fa-flip-vertical": h === "vertical" || h === "both"
  }, wn(t, "fa-".concat(g), typeof g < "u" && g !== null), wn(t, "fa-rotate-".concat(w), typeof w < "u" && w !== null && w !== 0), wn(t, "fa-pull-".concat(b), typeof b < "u" && b !== null), wn(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(O).map(function(m) {
    return O[m] ? m : null;
  }).filter(function(m) {
    return m;
  });
}
function x_(e) {
  return e = e - 0, e === e;
}
function Bg(e) {
  return x_(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, r) {
    return r ? r.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var w_ = ["style"];
function O_(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function __(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = Bg(r.slice(0, n)), i = r.slice(n + 1).trim();
    return a.startsWith("webkit") ? t[O_(a)] = i : t[a] = i, t;
  }, {});
}
function Fg(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(c) {
    return Fg(e, c);
  }), a = Object.keys(t.attributes || {}).reduce(function(c, u) {
    var l = t.attributes[u];
    switch (u) {
      case "class":
        c.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = __(l);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? c.attrs[u.toLowerCase()] = l : c.attrs[Bg(u)] = l;
    }
    return c;
  }, {
    attrs: {}
  }), i = r.style, o = i === void 0 ? {} : i, s = h_(r, w_);
  return a.attrs.style = jt(jt({}, a.attrs.style), o), e.apply(void 0, [t.tag, jt(jt({}, a.attrs), s)].concat(Hu(n)));
}
var zg = !1;
try {
  zg = process.env.NODE_ENV === "production";
} catch {
}
function S_() {
  if (!zg && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Mp(e) {
  if (e && jo(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Uu.icon)
    return Uu.icon(e);
  if (e === null)
    return null;
  if (e && jo(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Fc(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? wn({}, e, t) : {};
}
var kp = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, Bf = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var r = jt(jt({}, kp), e), n = r.icon, a = r.mask, i = r.symbol, o = r.className, s = r.title, c = r.titleId, u = r.maskId, l = Mp(n), f = Fc("classes", [].concat(Hu(b_(r)), Hu((o || "").split(" ")))), d = Fc("transform", typeof r.transform == "string" ? Uu.transform(r.transform) : r.transform), p = Fc("mask", Mp(a)), v = n_(l, jt(jt(jt(jt({}, f), d), p), {}, {
    symbol: i,
    title: s,
    titleId: c,
    maskId: u
  }));
  if (!v)
    return S_("Could not find icon", l), null;
  var y = v.abstract, h = {
    ref: t
  };
  return Object.keys(r).forEach(function(g) {
    kp.hasOwnProperty(g) || (h[g] = r[g]);
  }), A_(y[0], h);
});
Bf.displayName = "FontAwesomeIcon";
Bf.propTypes = {
  beat: X.bool,
  border: X.bool,
  beatFade: X.bool,
  bounce: X.bool,
  className: X.string,
  fade: X.bool,
  flash: X.bool,
  mask: X.oneOfType([X.object, X.array, X.string]),
  maskId: X.string,
  fixedWidth: X.bool,
  inverse: X.bool,
  flip: X.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: X.oneOfType([X.object, X.array, X.string]),
  listItem: X.bool,
  pull: X.oneOf(["right", "left"]),
  pulse: X.bool,
  rotation: X.oneOf([0, 90, 180, 270]),
  shake: X.bool,
  size: X.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: X.bool,
  spinPulse: X.bool,
  spinReverse: X.bool,
  symbol: X.oneOfType([X.bool, X.string]),
  title: X.string,
  titleId: X.string,
  transform: X.oneOfType([X.string, X.object]),
  swapOpacity: X.bool
};
var A_ = Fg.bind(null, S.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const P_ = {
  prefix: "fas",
  iconName: "arrow-left",
  icon: [448, 512, [8592], "f060", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, E_ = "_iconBtn_rsrwh_1", $_ = "_goBackBtn_rsrwh_12", T_ = "_goBackIcon_rsrwh_16", j_ = "_goBackLabel_rsrwh_21", oo = {
  iconBtn: E_,
  goBackBtn: $_,
  goBackIcon: T_,
  goBackLabel: j_
}, C_ = ({
  onClick: e,
  className: t = "",
  style: r,
  label: n
}) => /* @__PURE__ */ A.jsxs(
  "button",
  {
    type: "button",
    className: `${oo.iconBtn} ${oo.goBackBtn} ${t}`.trim(),
    onClick: e,
    style: r,
    "aria-label": n || "Back",
    children: [
      /* @__PURE__ */ A.jsx(
        Bf,
        {
          icon: P_,
          className: oo.goBackIcon
        }
      ),
      n && /* @__PURE__ */ A.jsx("span", { className: oo.goBackLabel, children: n })
    ]
  }
), M_ = "_closeBtn_18aj4_1", k_ = "_modalCloseAbsolute_18aj4_18", Ip = {
  closeBtn: M_,
  modalCloseAbsolute: k_
}, I_ = ({
  onClick: e,
  className: t = "",
  label: r = "Close",
  style: n
}) => /* @__PURE__ */ A.jsx(
  "button",
  {
    type: "button",
    className: `${Ip.closeBtn} ${Ip.modalCloseAbsolute} ${t}`.trim(),
    onClick: e,
    "aria-label": r,
    style: n,
    children: "✕"
  }
), N_ = "_wordBtn_1c0s5_1", R_ = "_selected_1c0s5_13", D_ = "_locked_1c0s5_18", L_ = "_burnSuspect_1c0s5_24", B_ = "_burned_1c0s5_29", ja = {
  wordBtn: N_,
  selected: R_,
  locked: D_,
  burnSuspect: L_,
  burned: B_
}, F_ = ({
  word: e,
  isSelected: t,
  isLocked: r,
  onClick: n,
  onKeyDown: a,
  burnSuspect: i = !1,
  isBurned: o = !1,
  ...s
}) => {
  let c = ja.wordBtn;
  return t && (c += " " + ja.selected), r && (c += " " + ja.locked), i && (c += " " + ja.burnSuspect), o && (c += " " + ja.burned), /* @__PURE__ */ A.jsx(
    "button",
    {
      type: "button",
      className: c,
      disabled: r,
      onClick: n,
      onKeyDown: a,
      ...s,
      children: e
    }
  );
}, pV = ({
  onClick: e,
  className: t = "",
  style: r,
  imageUrl: n,
  userName: a
}) => /* @__PURE__ */ A.jsx(
  "button",
  {
    onClick: e,
    className: `friends-toggle-btn ${t}`.trim(),
    style: r,
    "aria-label": "Open friends sidebar",
    children: n ? /* @__PURE__ */ A.jsx(
      "img",
      {
        src: n,
        alt: a || "Profile",
        style: {
          width: 36,
          height: 36,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #38bdf8"
        }
      }
    ) : /* @__PURE__ */ A.jsx(
      "span",
      {
        className: "friends-toggle-icon",
        style: { fontSize: 28, color: "#2563eb" },
        children: /* @__PURE__ */ A.jsxs(
          "svg",
          {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#2563eb",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ A.jsx("circle", { cx: "9", cy: "7", r: "4" }),
              /* @__PURE__ */ A.jsx("path", { d: "M17 11v-1a4 4 0 0 0-4-4" }),
              /* @__PURE__ */ A.jsx("path", { d: "M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" })
            ]
          }
        )
      }
    )
  }
), z_ = "_modalOverlay_75chu_1", W_ = "_modalContent_75chu_11", Np = {
  modalOverlay: z_,
  modalContent: W_
}, Wg = ({
  open: e,
  onClose: t,
  children: r,
  className: n = "",
  contentClassName: a = ""
}) => e ? /* @__PURE__ */ A.jsx(
  "div",
  {
    className: `${Np.modalOverlay} ${n}`.trim(),
    onClick: t,
    children: /* @__PURE__ */ A.jsx(
      "div",
      {
        className: `${Np.modalContent} ${a}`.trim(),
        onClick: (i) => i.stopPropagation(),
        children: r
      }
    )
  }
) : null, U_ = "_endgameModal_b2gln_1", G_ = "_endgameModalContent_b2gln_5", H_ = "_endgameModalScore_b2gln_15", q_ = "_endgameModalAttempts_b2gln_16", K_ = "_endgameModalBurnBonus_b2gln_17", V_ = "_endgameModalFinishTime_b2gln_18", Y_ = "_endgameModalActions_b2gln_23", Ir = {
  endgameModal: U_,
  endgameModalContent: G_,
  endgameModalScore: H_,
  endgameModalAttempts: q_,
  endgameModalBurnBonus: K_,
  endgameModalFinishTime: V_,
  endgameModalActions: Y_
}, hV = ({
  message: e,
  score: t,
  attemptsLeft: r,
  burnBonus: n,
  win: a,
  onShare: i,
  finishTime: o
}) => /* @__PURE__ */ A.jsx("div", { className: Ir.endgameModal, children: /* @__PURE__ */ A.jsxs("div", { className: Ir.endgameModalContent, children: [
  /* @__PURE__ */ A.jsx("h2", { children: a ? "You Win!" : "Game Over" }),
  /* @__PURE__ */ A.jsx("p", { children: e }),
  /* @__PURE__ */ A.jsxs("div", { className: Ir.endgameModalScore, children: [
    "Score: ",
    t
  ] }),
  /* @__PURE__ */ A.jsxs("div", { className: Ir.endgameModalAttempts, children: [
    "Attempts Left: ",
    r
  ] }),
  /* @__PURE__ */ A.jsxs("div", { className: Ir.endgameModalBurnBonus, children: [
    "Burn Bonus: ",
    n
  ] }),
  o && /* @__PURE__ */ A.jsxs("div", { className: Ir.endgameModalFinishTime, children: [
    "Finish Time: ",
    o
  ] }),
  /* @__PURE__ */ A.jsx("div", { className: Ir.endgameModalActions, children: /* @__PURE__ */ A.jsx("button", { onClick: i, children: "Share" }) })
] }) }), Rp = {}, vV = ({ open: e, onClose: t, children: r }) => e ? /* @__PURE__ */ A.jsx(
  "div",
  {
    className: Rp.customPuzzleModalOverlay,
    onClick: t,
    children: /* @__PURE__ */ A.jsx(
      "div",
      {
        className: Rp.customPuzzleModalContent,
        onClick: (n) => n.stopPropagation(),
        children: r
      }
    )
  }
) : null, X_ = "_pregameModalOverlay_1sysx_1", Z_ = "_pregameModal_1sysx_1", J_ = "_pregameModalTitle_1sysx_21", Q_ = "_pregameModalSubtext_1sysx_26", eS = "_pregameModalReadyBtn_1sysx_31", tS = "_pregameModalGoHomeBtn_1sysx_42", hn = {
  pregameModalOverlay: X_,
  pregameModal: Z_,
  pregameModalTitle: J_,
  pregameModalSubtext: Q_,
  pregameModalReadyBtn: eS,
  pregameModalGoHomeBtn: tS
}, yV = ({
  open: e,
  onReady: t,
  onGoHome: r
}) => e ? /* @__PURE__ */ A.jsx("div", { className: hn.pregameModalOverlay, children: /* @__PURE__ */ A.jsxs("div", { className: hn.pregameModal, children: [
  /* @__PURE__ */ A.jsx("h2", { className: hn.pregameModalTitle, children: "Ready to Start?" }),
  /* @__PURE__ */ A.jsx("p", { className: hn.pregameModalSubtext, children: "Get ready for your puzzle!" }),
  /* @__PURE__ */ A.jsx(
    "button",
    {
      className: hn.pregameModalReadyBtn,
      onClick: t,
      children: "Ready"
    }
  ),
  /* @__PURE__ */ A.jsx(
    "button",
    {
      className: hn.pregameModalGoHomeBtn,
      onClick: r,
      children: "Go Home"
    }
  )
] }) }) : null, rS = "_rulesModalContent_m5wj5_1", nS = "_modalCloseAbsolute_m5wj5_12", Dp = {
  rulesModalContent: rS,
  modalCloseAbsolute: nS
}, mV = ({
  open: e,
  onClose: t,
  columnCount: r = 4,
  mode: n = "daily",
  wildcardsActive: a
}) => e ? /* @__PURE__ */ A.jsxs("div", { className: Dp.rulesModalContent, children: [
  /* @__PURE__ */ A.jsx(
    "button",
    {
      className: Dp.modalCloseAbsolute,
      onClick: t,
      "aria-label": "Close",
      children: "×"
    }
  ),
  /* @__PURE__ */ A.jsx("h2", { children: "How to Play" }),
  /* @__PURE__ */ A.jsxs("ul", { children: [
    /* @__PURE__ */ A.jsxs("li", { children: [
      "Find groups of ",
      r,
      " related words."
    ] }),
    /* @__PURE__ */ A.jsx("li", { children: "Click words to select, then submit your guess." }),
    /* @__PURE__ */ A.jsxs("li", { children: [
      "Mode: ",
      n
    ] }),
    a && /* @__PURE__ */ A.jsx("li", { children: "Wildcards are active!" })
  ] })
] }) : null, aS = "_signinModal_mcyu9_1", so = {
  signinModal: aS
}, gV = ({
  open: e,
  onClose: t,
  onSignIn: r
}) => /* @__PURE__ */ A.jsx(
  Wg,
  {
    open: e,
    onClose: t,
    className: so.signinModal,
    children: /* @__PURE__ */ A.jsxs("div", { className: so.signinModalContent, children: [
      /* @__PURE__ */ A.jsx("h2", { className: so.signinModalTitle, children: "Sign In Required" }),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: so.signinModalBtn,
          onClick: r,
          children: "Sign In"
        }
      )
    ] })
  }
), iS = "_settingsPanelContainer_o4zkb_2", oS = "_settingsPanelOptions_o4zkb_8", sS = "_settingsPanelLabel_o4zkb_14", Ca = {
  settingsPanelContainer: iS,
  settingsPanelOptions: oS,
  settingsPanelLabel: sS
}, Ff = Bt({
  settings: null,
  setSettings: () => {
  }
}), bV = () => et(Ff), xV = ({ children: e }) => {
  const [t, r] = mt(null);
  return /* @__PURE__ */ A.jsx(
    Ff.Provider,
    {
      value: { settings: t, setSettings: r },
      children: e
    }
  );
}, wV = () => {
  const { settings: e, setSettings: t } = et(
    Ff
  );
  return e ? /* @__PURE__ */ A.jsxs("div", { className: Ca.settingsPanelContainer, children: [
    /* @__PURE__ */ A.jsx("h2", { children: "User Settings" }),
    /* @__PURE__ */ A.jsxs("div", { className: Ca.settingsPanelOptions, children: [
      /* @__PURE__ */ A.jsxs("label", { className: Ca.settingsPanelLabel, children: [
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "checkbox",
            checked: e.chatEnabled,
            onChange: (r) => t({
              ...e,
              chatEnabled: r.target.checked
            })
          }
        ),
        "Enable Chat"
      ] }),
      /* @__PURE__ */ A.jsxs("label", { className: Ca.settingsPanelLabel, children: [
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "checkbox",
            checked: e.profanityFilter,
            onChange: (r) => t({
              ...e,
              profanityFilter: r.target.checked
            })
          }
        ),
        "Profanity Filter"
      ] }),
      /* @__PURE__ */ A.jsxs("label", { className: Ca.settingsPanelLabel, children: [
        /* @__PURE__ */ A.jsx(
          "input",
          {
            type: "checkbox",
            checked: e.notificationsEnabled,
            onChange: (r) => t({
              ...e,
              notificationsEnabled: r.target.checked
            })
          }
        ),
        "Enable Notifications"
      ] })
    ] })
  ] }) : null;
}, cS = "_themeSelectorContainer_1h64n_1", uS = "_themeSelectorLabel_1h64n_7", lS = "_themeSelectorSelect_1h64n_11", zc = {
  themeSelectorContainer: cS,
  themeSelectorLabel: uS,
  themeSelectorSelect: lS
}, OV = ({
  value: e,
  onChange: t,
  themes: r
}) => /* @__PURE__ */ A.jsxs("div", { className: zc.themeSelectorContainer, children: [
  /* @__PURE__ */ A.jsx("label", { className: zc.themeSelectorLabel, children: "Theme:" }),
  /* @__PURE__ */ A.jsx(
    "select",
    {
      className: zc.themeSelectorSelect,
      value: e,
      onChange: (n) => t(n.target.value),
      children: r.map((n) => /* @__PURE__ */ A.jsx("option", { value: n, children: n }, n))
    }
  )
] }), fS = "_startupPageContainer_1wa9b_2", dS = "_gridRoyaleTitle_1wa9b_11", pS = "_startupHeaderRow_1wa9b_17", Wc = {
  startupPageContainer: fS,
  gridRoyaleTitle: dS,
  startupHeaderRow: pS
}, _V = ({
  onStartDaily: e,
  onStartCustom: t,
  onBrowseCustom: r,
  onShare: n
}) => /* @__PURE__ */ A.jsxs("div", { className: Wc.startupPageContainer, children: [
  /* @__PURE__ */ A.jsx("h1", { className: Wc.gridRoyaleTitle, children: "Grid Royale" }),
  /* @__PURE__ */ A.jsxs("div", { className: Wc.startupHeaderRow, children: [
    /* @__PURE__ */ A.jsx("button", { onClick: e, children: "Start Daily" }),
    /* @__PURE__ */ A.jsx("button", { onClick: t, children: "Start Custom" }),
    /* @__PURE__ */ A.jsx("button", { onClick: r, children: "Browse Custom" }),
    n && /* @__PURE__ */ A.jsx("button", { onClick: n, children: "Share" })
  ] })
] }), hS = "_darkModeToggle_1u9m8_1", vS = {
  darkModeToggle: hS
}, zf = Bt({
  darkMode: !1,
  setDarkMode: () => {
  },
  palette: {},
  setPalette: () => {
  }
}), SV = () => et(zf), AV = ({ children: e }) => {
  const [t, r] = mt(!1), [n, a] = mt({});
  return /* @__PURE__ */ A.jsx(
    zf.Provider,
    {
      value: { darkMode: t, setDarkMode: r, palette: n, setPalette: a },
      children: e
    }
  );
}, PV = () => {
  const { darkMode: e, setDarkMode: t } = et(
    zf
  );
  return /* @__PURE__ */ A.jsx(
    "button",
    {
      className: vS.darkModeToggle,
      onClick: () => t(!e),
      "aria-label": e ? "Switch to light mode" : "Switch to dark mode",
      children: e ? "🌙" : "☀️"
    }
  );
}, Ug = Bt({
  socket: null,
  setSocket: () => {
  }
}), yS = () => et(Ug), EV = ({
  children: e
}) => {
  const [t, r] = mt(
    null
  );
  return /* @__PURE__ */ A.jsx(Ug.Provider, { value: { socket: t, setSocket: r }, children: e });
}, mS = "_vsModeModalOverlay_6vcmw_1", gS = "_vsModeModalContent_6vcmw_11", Lp = {
  vsModeModalOverlay: mS,
  vsModeModalContent: gS
}, $V = ({
  open: e,
  onClose: t,
  onStart: r
}) => e ? /* @__PURE__ */ A.jsx("div", { className: Lp.vsModeModalOverlay, children: /* @__PURE__ */ A.jsxs("div", { className: Lp.vsModeModalContent, children: [
  /* @__PURE__ */ A.jsx("h2", { children: "Choose VS Mode" }),
  /* @__PURE__ */ A.jsx("button", { onClick: () => r("classic"), children: "Classic" }),
  /* @__PURE__ */ A.jsx("button", { onClick: () => r("timed"), children: "Timed" }),
  /* @__PURE__ */ A.jsx("button", { onClick: t, children: "Cancel" })
] }) }) : null, bS = "_vsRoomModalOverlay_1etlq_1", xS = "_vsRoomModalContent_1etlq_11", wS = "_vsRoomModalInput_1etlq_23", OS = "_vsRoomModalActions_1etlq_31", co = {
  vsRoomModalOverlay: bS,
  vsRoomModalContent: xS,
  vsRoomModalInput: wS,
  vsRoomModalActions: OS
}, TV = ({
  open: e,
  onClose: t,
  onJoin: r
}) => {
  const [n, a] = S.useState("");
  return e ? /* @__PURE__ */ A.jsx("div", { className: co.vsRoomModalOverlay, children: /* @__PURE__ */ A.jsxs("div", { className: co.vsRoomModalContent, children: [
    /* @__PURE__ */ A.jsx("h2", { children: "Join Room" }),
    /* @__PURE__ */ A.jsx(
      "input",
      {
        className: co.vsRoomModalInput,
        value: n,
        onChange: (i) => a(i.target.value),
        placeholder: "Enter room code"
      }
    ),
    /* @__PURE__ */ A.jsxs("div", { className: co.vsRoomModalActions, children: [
      /* @__PURE__ */ A.jsx("button", { onClick: () => r(n), children: "Join" }),
      /* @__PURE__ */ A.jsx("button", { onClick: t, children: "Cancel" })
    ] })
  ] }) }) : null;
};
var Uc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bp;
function _S() {
  if (Bp) return Uc;
  Bp = 1;
  var e = S;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, a = e.useRef, i = e.useEffect, o = e.useMemo, s = e.useDebugValue;
  return Uc.useSyncExternalStoreWithSelector = function(c, u, l, f, d) {
    var p = a(null);
    if (p.current === null) {
      var v = { hasValue: !1, value: null };
      p.current = v;
    } else v = p.current;
    p = o(
      function() {
        function h(m) {
          if (!g) {
            if (g = !0, w = m, m = f(m), d !== void 0 && v.hasValue) {
              var x = v.value;
              if (d(x, m))
                return b = x;
            }
            return b = m;
          }
          if (x = b, r(w, m)) return x;
          var _ = f(m);
          return d !== void 0 && d(x, _) ? (w = m, x) : (w = m, b = _);
        }
        var g = !1, w, b, O = l === void 0 ? null : l;
        return [
          function() {
            return h(u());
          },
          O === null ? void 0 : function() {
            return h(O());
          }
        ];
      },
      [u, l, f, d]
    );
    var y = n(c, p[0], p[1]);
    return i(
      function() {
        v.hasValue = !0, v.value = y;
      },
      [y]
    ), s(y), y;
  }, Uc;
}
var Gc = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fp;
function SS() {
  return Fp || (Fp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = S, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, a = t.useRef, i = t.useEffect, o = t.useMemo, s = t.useDebugValue;
    Gc.useSyncExternalStoreWithSelector = function(c, u, l, f, d) {
      var p = a(null);
      if (p.current === null) {
        var v = { hasValue: !1, value: null };
        p.current = v;
      } else v = p.current;
      p = o(
        function() {
          function h(m) {
            if (!g) {
              if (g = !0, w = m, m = f(m), d !== void 0 && v.hasValue) {
                var x = v.value;
                if (d(x, m))
                  return b = x;
              }
              return b = m;
            }
            if (x = b, r(w, m))
              return x;
            var _ = f(m);
            return d !== void 0 && d(x, _) ? (w = m, x) : (w = m, b = _);
          }
          var g = !1, w, b, O = l === void 0 ? null : l;
          return [
            function() {
              return h(u());
            },
            O === null ? void 0 : function() {
              return h(O());
            }
          ];
        },
        [u, l, f, d]
      );
      var y = n(c, p[0], p[1]);
      return i(
        function() {
          v.hasValue = !0, v.value = y;
        },
        [y]
      ), s(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Gc;
}
process.env.NODE_ENV === "production" ? _S() : SS();
var Hc = /* @__PURE__ */ Symbol.for("react-redux-context"), qc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function AS() {
  if (!Ha.createContext) return {};
  const e = qc[Hc] ?? (qc[Hc] = /* @__PURE__ */ new Map());
  let t = e.get(Ha.createContext);
  return t || (t = Ha.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(Ha.createContext, t)), t;
}
var si = /* @__PURE__ */ AS();
function Gg(e = si) {
  return function() {
    const r = Ha.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var PS = /* @__PURE__ */ Gg();
function Hg(e = si) {
  const t = e === si ? PS : (
    // @ts-ignore
    Gg(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var ES = /* @__PURE__ */ Hg();
function $S(e = si) {
  const t = e === si ? ES : Hg(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var TS = /* @__PURE__ */ $S();
const jV = () => {
  const e = TS(), { socket: t } = yS();
  return Gi(() => {
    if (t)
      return () => {
      };
  }, [t, e]), null;
}, jS = "_footer_n8jlp_1", Kc = {
  footer: jS
}, CV = () => /* @__PURE__ */ A.jsxs("div", { className: Kc.footer, children: [
  /* @__PURE__ */ A.jsx("div", { className: Kc.footerLeft }),
  /* @__PURE__ */ A.jsx("div", { className: Kc.footerRight })
] }), CS = "_friendCard_dbq9c_1", MS = "_friendCardHover_dbq9c_10", kS = "_friendCardHeader_dbq9c_14", IS = "_friendStatusDot_dbq9c_20", NS = "_friendUsername_dbq9c_43", RS = "_friendCardActions_dbq9c_47", Nr = {
  friendCard: CS,
  friendCardHover: MS,
  friendCardHeader: kS,
  friendStatusDot: IS,
  "status-inmatch": "_status-inmatch_dbq9c_27",
  "status-idle": "_status-idle_dbq9c_31",
  "status-online": "_status-online_dbq9c_35",
  "status-offline": "_status-offline_dbq9c_39",
  friendUsername: NS,
  friendCardActions: RS
}, DS = (e) => e.online && e.inMatch ? { text: "In match", color: "#a259f7" } : e.online && e.idle ? { text: "Idle", color: "#fbbf24" } : e.online ? { text: "Online", color: "#22c55e" } : { text: "Offline", color: "#64748b" }, LS = {
  "In match": "status-inmatch",
  Idle: "status-idle",
  Online: "status-online",
  Offline: "status-offline"
}, MV = ({
  friend: e,
  onChallenge: t,
  onMessage: r,
  onRemove: n,
  unreadCount: a = 0
}) => {
  const [i, o] = mt(!1), s = DS(e), c = LS[s.text] || "status-offline";
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: Nr.friendCard + (i ? " " + Nr.friendCardHover : ""),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        /* @__PURE__ */ A.jsxs("div", { className: Nr.friendCardHeader, children: [
          /* @__PURE__ */ A.jsx(
            "span",
            {
              className: Nr.friendStatusDot + " " + Nr[c]
            }
          ),
          /* @__PURE__ */ A.jsx("span", { className: Nr.friendUsername, children: e.username })
        ] }),
        /* @__PURE__ */ A.jsxs("div", { className: Nr.friendCardActions, children: [
          /* @__PURE__ */ A.jsx("button", { onClick: () => t(e.id), children: "Challenge" }),
          /* @__PURE__ */ A.jsxs("button", { onClick: () => r(e.id), children: [
            "Message",
            a > 0 ? ` (${a})` : ""
          ] }),
          /* @__PURE__ */ A.jsx("button", { onClick: () => n(e.id), children: "Remove" })
        ] })
      ]
    }
  );
}, BS = "_feedbackBanner_18zih_1", FS = "_feedbackBannerHidden_18zih_14", zp = {
  feedbackBanner: BS,
  feedbackBannerHidden: FS
}, kV = ({
  message: e
}) => /* @__PURE__ */ A.jsx(
  "div",
  {
    className: zp.feedbackBanner + (e ? "" : " " + zp.feedbackBannerHidden),
    "aria-live": "polite",
    children: e
  }
), IV = () => /* @__PURE__ */ A.jsx(
  "div",
  {
    style: {
      position: "fixed",
      top: 24,
      left: 0,
      right: 0,
      zIndex: 2e3,
      pointerEvents: "none"
    }
  }
);
var qg = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (i = a(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var s in i)
        t.call(i, s) && i[s] && (o = a(o, s));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(qg);
var zS = qg.exports;
const WS = /* @__PURE__ */ me(zS), US = "_notificationBanner_17vpi_1", GS = "_notificationFadeIn_17vpi_1", HS = "_notificationBannerBurn_17vpi_22", qS = "_notificationBannerAchievement_17vpi_28", KS = "_notificationBannerSystem_17vpi_34", VS = "_notificationBannerTaunt_17vpi_40", Wp = {
  notificationBanner: US,
  notificationFadeIn: GS,
  notificationBannerBurn: HS,
  notificationBannerAchievement: qS,
  notificationBannerSystem: KS,
  notificationBannerTaunt: VS
}, YS = {
  burn: "#ff7043",
  achievement: "#ffd700",
  system: "#2196f3",
  taunt: "#a259f7"
}, NV = ({ type: e, message: t, onClose: r, index: n }) => (S.useEffect(() => {
  const a = setTimeout(() => {
    r();
  }, 2500);
  return () => clearTimeout(a);
}, [r]), /* @__PURE__ */ A.jsx(
  "div",
  {
    className: WS(
      Wp.notificationBanner,
      Wp[`notificationBanner${e.charAt(0).toUpperCase() + e.slice(1)}`]
    ),
    style: { backgroundColor: YS[e] },
    children: t
  }
)), XS = {
  achievement: "#fbbf24",
  success: "#22c55e",
  error: "#ef4444",
  info: "#2563eb",
  warning: "#f59e42",
  system: "#2196f3",
  burn: "#ff7043",
  taunt: "#a259f7"
}, RV = ({
  message: e,
  icon: t = "🎉",
  onClose: r,
  duration: n = 3200,
  type: a = "achievement",
  style: i = {}
}) => (S.useEffect(() => {
  if (n && r) {
    const o = setTimeout(r, n);
    return () => clearTimeout(o);
  }
}, [n, r]), /* @__PURE__ */ A.jsxs(
  "div",
  {
    className: `toast-banner toast-banner--${a}`,
    style: {
      position: "fixed",
      right: 32,
      bottom: 32,
      zIndex: 9999,
      background: XS[a] || "#fff",
      color: "#1e293b",
      borderRadius: 12,
      boxShadow: "0 2px 16px 0 #0002",
      padding: "16px 28px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      ...i
    },
    children: [
      t && /* @__PURE__ */ A.jsx("span", { style: { marginRight: 12 }, children: t }),
      /* @__PURE__ */ A.jsx("span", { children: e }),
      r && /* @__PURE__ */ A.jsx(
        "button",
        {
          onClick: r,
          style: {
            marginLeft: 16,
            background: "none",
            border: "none",
            cursor: "pointer"
          },
          children: "×"
        }
      )
    ]
  }
)), DV = () => null, ZS = "_friendsSidebarOpen_a94t1_21", JS = "_friendsSidebarClosed_a94t1_25", QS = "_friendsSidebarCloseBtn_a94t1_29", Vc = {
  friendsSidebarOpen: ZS,
  friendsSidebarClosed: JS,
  friendsSidebarCloseBtn: QS
}, LV = ({
  open: e,
  onClose: t,
  children: r
}) => /* @__PURE__ */ A.jsxs(
  "div",
  {
    className: e ? Vc.friendsSidebarOpen : Vc.friendsSidebarClosed,
    children: [
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: Vc.friendsSidebarCloseBtn,
          onClick: t,
          children: "Close"
        }
      ),
      r
    ]
  }
), eA = "_inMatchChatWindow_o076h_2", tA = "_inMatchChatHeader_o076h_9", rA = "_inMatchChatMessages_o076h_14", nA = "_chatMessageSelf_o076h_24", aA = "_chatMessageFriend_o076h_29", iA = "_chatMessageText_o076h_39", oA = "_chatMessageTime_o076h_43", Rr = {
  inMatchChatWindow: eA,
  inMatchChatHeader: tA,
  inMatchChatMessages: rA,
  chatMessageSelf: nA,
  chatMessageFriend: aA,
  chatMessageText: iA,
  chatMessageTime: oA
}, BV = ({ messages: e, onSend: t, currentUser: r }) => /* @__PURE__ */ A.jsxs("div", { className: Rr.inMatchChatWindow, children: [
  /* @__PURE__ */ A.jsx("div", { className: Rr.inMatchChatHeader, children: "In-Match Chat" }),
  /* @__PURE__ */ A.jsx("div", { className: Rr.inMatchChatMessages, children: e.map((n) => /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: n.sender === r ? Rr.chatMessageSelf : Rr.chatMessageFriend,
      children: [
        /* @__PURE__ */ A.jsx("span", { className: Rr.chatMessageText, children: n.text }),
        /* @__PURE__ */ A.jsx("span", { className: Rr.chatMessageTime, children: n.time })
      ]
    },
    n.id
  )) })
] }), sA = "_matchChatWindow_ukohi_3", cA = "_matchChatHeader_ukohi_10", uA = "_matchChatMessages_ukohi_15", lA = "_chatMessageSelf_ukohi_25", fA = "_chatMessageFriend_ukohi_30", dA = "_chatMessageText_ukohi_40", pA = "_chatMessageTime_ukohi_44", Dr = {
  matchChatWindow: sA,
  matchChatHeader: cA,
  matchChatMessages: uA,
  chatMessageSelf: lA,
  chatMessageFriend: fA,
  chatMessageText: dA,
  chatMessageTime: pA
}, FV = ({
  messages: e,
  onSend: t,
  currentUser: r
}) => /* @__PURE__ */ A.jsxs("div", { className: Dr.matchChatWindow, children: [
  /* @__PURE__ */ A.jsx("div", { className: Dr.matchChatHeader, children: "Match Chat" }),
  /* @__PURE__ */ A.jsx("div", { className: Dr.matchChatMessages, children: e.map((n) => /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: n.sender === r ? Dr.chatMessageSelf : Dr.chatMessageFriend,
      children: [
        /* @__PURE__ */ A.jsx("span", { className: Dr.chatMessageText, children: n.text }),
        /* @__PURE__ */ A.jsx("span", { className: Dr.chatMessageTime, children: n.time })
      ]
    },
    n.id
  )) })
] }), hA = "_vsQuickChatBar_114hr_3", vA = {
  vsQuickChatBar: hA
}, zV = ({
  options: e,
  onSend: t
}) => /* @__PURE__ */ A.jsx("div", { className: vA.vsQuickChatBar, children: e.map((r) => /* @__PURE__ */ A.jsx("button", { onClick: () => t(r), children: r }, r)) }), yA = "_pregameGridLockout_1re9m_1", mA = "_pregameGridBlur_1re9m_7", gA = "_pregameGridCellLockout_1re9m_13", Yc = {
  pregameGridLockout: yA,
  pregameGridBlur: mA,
  pregameGridCellLockout: gA
}, WV = ({ gridWords: e, gridCols: t, gridRows: r }) => /* @__PURE__ */ A.jsx("div", { className: Yc.pregameGridLockout, children: /* @__PURE__ */ A.jsx(
  "div",
  {
    className: Yc.pregameGridBlur,
    "data-cols": t,
    "data-rows": r,
    style: {
      gridTemplateColumns: `repeat(${t}, 1fr)`
    },
    children: e.map((n, a) => /* @__PURE__ */ A.jsx(
      "div",
      {
        className: Yc.pregameGridCellLockout,
        style: {
          pointerEvents: "none",
          userSelect: "none",
          cursor: "not-allowed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 700,
          color: "#64748b",
          background: "#f1f5f9",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          minHeight: 44
        },
        children: /* @__PURE__ */ A.jsx("span", { style: { fontSize: 32, fontWeight: 800 }, children: "×" })
      },
      a
    ))
  }
) }), bA = "_solvedGroupsDisplay_djxgz_1", xA = "_solvedGroup_djxgz_1", wA = "_solvedLabel_djxgz_27", OA = "_solvedWords_djxgz_35", _A = "_solvedWord_djxgz_35", Ma = {
  solvedGroupsDisplay: bA,
  solvedGroup: xA,
  solvedLabel: wA,
  solvedWords: OA,
  solvedWord: _A
}, UV = ({ pendingSolvedGroups: e, activePuzzle: t }) => e.length ? /* @__PURE__ */ A.jsx(
  "div",
  {
    className: Ma.solvedGroupsDisplay,
    "aria-label": "Solved Groups",
    children: e.filter(
      (r, n, a) => a.findIndex(
        (i) => i.groupIdx === r.groupIdx
      ) === n
    ).sort((r, n) => r.groupIdx - n.groupIdx).map(({ groupIdx: r, words: n }) => {
      var a, i;
      return /* @__PURE__ */ A.jsxs(
        "section",
        {
          className: Ma.solvedGroup,
          role: "img",
          "aria-label": `Solved group: ${((a = t == null ? void 0 : t.groupLabels) == null ? void 0 : a[r]) || `Group ${r + 1}`}`,
          children: [
            /* @__PURE__ */ A.jsx("div", { className: Ma.solvedLabel, children: ((i = t == null ? void 0 : t.groupLabels) == null ? void 0 : i[r]) || `Group ${r + 1}` }),
            /* @__PURE__ */ A.jsx("ul", { className: Ma.solvedWords, children: (Array.isArray(n) ? n : []).map(
              (o) => /* @__PURE__ */ A.jsx(
                "li",
                {
                  className: Ma.solvedWord,
                  children: o
                },
                o
              )
            ) })
          ]
        },
        r
      );
    })
  }
) : null, SA = {}, GV = ({
  gridWords: e,
  gridCols: t,
  gridRows: r,
  botDifficulty: n,
  solvedGroups: a,
  activeGroup: i,
  onWordClick: o,
  isLocked: s = !1
}) => /* @__PURE__ */ A.jsx("div", { className: SA.vsBotGame, children: /* @__PURE__ */ A.jsx("div", { children: "VS Bot Game Board (implement grid logic)" }) }), AA = "_vsGrid_skt0y_1", PA = "_vsGhostOverlay_skt0y_14", EA = "_vsSolvedBadge_skt0y_27", Xc = {
  vsGrid: AA,
  vsGhostOverlay: PA,
  vsSolvedBadge: EA
}, HV = ({
  words: e,
  selected: t,
  locked: r,
  wildcards: n = [],
  onSelect: a,
  opponentSelected: i = [],
  playerColor: o = "#2563eb",
  opponentColor: s = "#ef4444",
  solvedBy: c = {},
  playerId: u,
  opponentId: l,
  gridSize: f = { rows: 4, cols: 4 },
  preview: d = !1
}) => {
  const p = {
    display: "grid",
    gridTemplateColumns: `repeat(${f.cols}, 1fr)`,
    gridTemplateRows: `repeat(${f.rows}, 1fr)`,
    gap: 12,
    width: "100%",
    maxWidth: 480,
    margin: "0 auto",
    minHeight: 320,
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 2px 16px 0 #e3eaff33",
    padding: 12
  };
  return /* @__PURE__ */ A.jsx("div", { className: Xc.vsGrid, style: p, children: e.map((v, y) => {
    var m;
    const h = t.includes(v), g = r.includes(v), w = n.includes(v), b = i.includes(v);
    let O = null;
    for (const x in c)
      (m = c[x]) != null && m.includes(v) && (O = x);
    return /* @__PURE__ */ A.jsxs("div", { style: { position: "relative" }, children: [
      /* @__PURE__ */ A.jsx(
        F_,
        {
          word: v,
          isSelected: h,
          isLocked: g,
          onClick: d ? () => {
          } : () => a(v),
          className: (w ? "wildcard " : "") + (b ? "opponent " : "") + (O === u ? "solved-by-player " : O === l ? "solved-by-opponent " : ""),
          style: d ? {
            background: "rgb(253.8571428571, 240.7142857143, 188.1428571429)",
            color: "#1e293b",
            borderColor: "#fde047",
            boxShadow: "0 0 0 3px rgba(253, 224, 71, 0.3333333333), 0 4px 16px 0 rgba(56, 189, 248, 0.3333333333)",
            transform: "translateY(-2px) scale(1.03)",
            zIndex: 2
          } : void 0,
          tabIndex: d ? -1 : 0
        }
      ),
      b && !d && /* @__PURE__ */ A.jsx("span", { className: Xc.vsGhostOverlay, children: "Opponent" }),
      O && !d && /* @__PURE__ */ A.jsx(
        "span",
        {
          className: Xc.vsSolvedBadge,
          style: {
            background: O === u ? o : s
          },
          children: O === u ? "You" : "Them"
        }
      )
    ] }, v);
  }) });
}, $A = {}, qV = ({
  gridWords: e,
  gridCols: t,
  gridRows: r,
  playerId: n,
  opponentId: a,
  solvedGroups: i,
  activeGroup: o,
  onWordClick: s,
  isLocked: c = !1
}) => /* @__PURE__ */ A.jsx("div", { className: $A.vsMultiplayerGame, children: /* @__PURE__ */ A.jsx("div", { children: "VS Multiplayer Game Board (implement grid logic)" }) }), TA = "_vsStatusBar_1unks_1", jA = "_vsStatusAvatar_1unks_9", CA = "_vsStatusUsername_1unks_15", MA = "_vsStatusGroups_1unks_19", kA = "_vsStatusMistakes_1unks_23", IA = "_vsStatusTimer_1unks_27", NA = "_vsStatusEmoteBtn_1unks_32", wt = {
  vsStatusBar: TA,
  vsStatusAvatar: jA,
  vsStatusUsername: CA,
  vsStatusGroups: MA,
  vsStatusMistakes: kA,
  vsStatusTimer: IA,
  vsStatusEmoteBtn: NA
}, KV = ({
  player: e,
  opponent: t,
  timer: r,
  totalGroups: n,
  showMistakes: a = !0,
  showTimer: i = !0,
  onEmoteClick: o
}) => /* @__PURE__ */ A.jsxs("div", { className: wt.vsStatusBar, children: [
  /* @__PURE__ */ A.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      children: [
        e.avatarUrl && /* @__PURE__ */ A.jsx(
          "img",
          {
            src: e.avatarUrl,
            alt: e.username,
            className: wt.vsStatusAvatar
          }
        ),
        /* @__PURE__ */ A.jsxs("span", { className: wt.vsStatusUsername, children: [
          e.username,
          e.isYou ? " (You)" : ""
        ] }),
        /* @__PURE__ */ A.jsxs("span", { className: wt.vsStatusGroups, children: [
          "Groups: ",
          e.groupsSolved,
          "/",
          n
        ] }),
        a && /* @__PURE__ */ A.jsxs("span", { className: wt.vsStatusMistakes, children: [
          "Mistakes: ",
          e.mistakes
        ] })
      ]
    }
  ),
  i && r && /* @__PURE__ */ A.jsxs("div", { className: wt.vsStatusTimer, children: [
    "⏱ ",
    r
  ] }),
  t && /* @__PURE__ */ A.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      },
      children: [
        t.avatarUrl && /* @__PURE__ */ A.jsx(
          "img",
          {
            src: t.avatarUrl,
            alt: t.username,
            className: wt.vsStatusAvatar
          }
        ),
        /* @__PURE__ */ A.jsx("span", { className: wt.vsStatusUsername, children: t.username }),
        /* @__PURE__ */ A.jsxs("span", { className: wt.vsStatusGroups, children: [
          "Groups: ",
          t.groupsSolved,
          "/",
          n
        ] }),
        a && /* @__PURE__ */ A.jsxs("span", { className: wt.vsStatusMistakes, children: [
          "Mistakes: ",
          t.mistakes
        ] }),
        o && /* @__PURE__ */ A.jsx(
          "button",
          {
            className: wt.vsStatusEmoteBtn,
            onClick: o,
            "aria-label": "Send Emote",
            children: "😊"
          }
        )
      ]
    }
  )
] }), RA = "_browsePuzzlesHeader_i5vnz_1", DA = "_backIconBtn_i5vnz_7", LA = "_browsePuzzlesHeaderTitle_i5vnz_11", BA = "_gridRoyaleTitle_i5vnz_15", FA = "_browsePuzzlesTabs_i5vnz_21", zA = "_active_i5vnz_27", vn = {
  browsePuzzlesHeader: RA,
  backIconBtn: DA,
  browsePuzzlesHeaderTitle: LA,
  gridRoyaleTitle: BA,
  browsePuzzlesTabs: FA,
  active: zA
}, VV = ({
  title: e,
  tabs: t,
  currentTab: r,
  setTab: n,
  onBack: a
}) => /* @__PURE__ */ A.jsxs("div", { className: vn.browsePuzzlesHeader, children: [
  /* @__PURE__ */ A.jsx(
    C_,
    {
      onClick: a,
      className: vn.backIconBtn
    }
  ),
  /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: vn.browsePuzzlesHeaderTitle,
      style: { flex: 1 },
      children: [
        /* @__PURE__ */ A.jsx("h1", { className: vn.gridRoyaleTitle, children: e }),
        /* @__PURE__ */ A.jsx("div", { className: vn.browsePuzzlesTabs, children: t.map((i) => /* @__PURE__ */ A.jsx(
          "button",
          {
            onClick: () => n(i.value),
            className: r === i.value ? vn.active : "",
            children: i.label
          },
          i.value
        )) })
      ]
    }
  )
] });
function Kg(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Kg(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ce() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Kg(e)) && (n && (n += " "), n += t);
  return n;
}
var WA = Array.isArray, rt = WA, UA = typeof ro == "object" && ro && ro.Object === Object && ro, Vg = UA, GA = Vg, HA = typeof self == "object" && self && self.Object === Object && self, qA = GA || HA || Function("return this")(), Ft = qA, KA = Ft, VA = KA.Symbol, Ki = VA, Up = Ki, Yg = Object.prototype, YA = Yg.hasOwnProperty, XA = Yg.toString, ka = Up ? Up.toStringTag : void 0;
function ZA(e) {
  var t = YA.call(e, ka), r = e[ka];
  try {
    e[ka] = void 0;
    var n = !0;
  } catch {
  }
  var a = XA.call(e);
  return n && (t ? e[ka] = r : delete e[ka]), a;
}
var JA = ZA, QA = Object.prototype, eP = QA.toString;
function tP(e) {
  return eP.call(e);
}
var rP = tP, Gp = Ki, nP = JA, aP = rP, iP = "[object Null]", oP = "[object Undefined]", Hp = Gp ? Gp.toStringTag : void 0;
function sP(e) {
  return e == null ? e === void 0 ? oP : iP : Hp && Hp in Object(e) ? nP(e) : aP(e);
}
var sr = sP;
function cP(e) {
  return e != null && typeof e == "object";
}
var cr = cP, uP = sr, lP = cr, fP = "[object Symbol]";
function dP(e) {
  return typeof e == "symbol" || lP(e) && uP(e) == fP;
}
var la = dP, pP = rt, hP = la, vP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yP = /^\w*$/;
function mP(e, t) {
  if (pP(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || hP(e) ? !0 : yP.test(e) || !vP.test(e) || t != null && e in Object(t);
}
var Wf = mP;
function gP(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $r = gP;
const fa = /* @__PURE__ */ me($r);
var bP = sr, xP = $r, wP = "[object AsyncFunction]", OP = "[object Function]", _P = "[object GeneratorFunction]", SP = "[object Proxy]";
function AP(e) {
  if (!xP(e))
    return !1;
  var t = bP(e);
  return t == OP || t == _P || t == wP || t == SP;
}
var Uf = AP;
const ae = /* @__PURE__ */ me(Uf);
var PP = Ft, EP = PP["__core-js_shared__"], $P = EP, Zc = $P, qp = function() {
  var e = /[^.]+$/.exec(Zc && Zc.keys && Zc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function TP(e) {
  return !!qp && qp in e;
}
var jP = TP, CP = Function.prototype, MP = CP.toString;
function kP(e) {
  if (e != null) {
    try {
      return MP.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xg = kP, IP = Uf, NP = jP, RP = $r, DP = Xg, LP = /[\\^$.*+?()[\]{}|]/g, BP = /^\[object .+?Constructor\]$/, FP = Function.prototype, zP = Object.prototype, WP = FP.toString, UP = zP.hasOwnProperty, GP = RegExp(
  "^" + WP.call(UP).replace(LP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function HP(e) {
  if (!RP(e) || NP(e))
    return !1;
  var t = IP(e) ? GP : BP;
  return t.test(DP(e));
}
var qP = HP;
function KP(e, t) {
  return e == null ? void 0 : e[t];
}
var VP = KP, YP = qP, XP = VP;
function ZP(e, t) {
  var r = XP(e, t);
  return YP(r) ? r : void 0;
}
var un = ZP, JP = un, QP = JP(Object, "create"), Gs = QP, Kp = Gs;
function eE() {
  this.__data__ = Kp ? Kp(null) : {}, this.size = 0;
}
var tE = eE;
function rE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nE = rE, aE = Gs, iE = "__lodash_hash_undefined__", oE = Object.prototype, sE = oE.hasOwnProperty;
function cE(e) {
  var t = this.__data__;
  if (aE) {
    var r = t[e];
    return r === iE ? void 0 : r;
  }
  return sE.call(t, e) ? t[e] : void 0;
}
var uE = cE, lE = Gs, fE = Object.prototype, dE = fE.hasOwnProperty;
function pE(e) {
  var t = this.__data__;
  return lE ? t[e] !== void 0 : dE.call(t, e);
}
var hE = pE, vE = Gs, yE = "__lodash_hash_undefined__";
function mE(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = vE && t === void 0 ? yE : t, this;
}
var gE = mE, bE = tE, xE = nE, wE = uE, OE = hE, _E = gE;
function da(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
da.prototype.clear = bE;
da.prototype.delete = xE;
da.prototype.get = wE;
da.prototype.has = OE;
da.prototype.set = _E;
var SE = da;
function AE() {
  this.__data__ = [], this.size = 0;
}
var PE = AE;
function EE(e, t) {
  return e === t || e !== e && t !== t;
}
var Gf = EE, $E = Gf;
function TE(e, t) {
  for (var r = e.length; r--; )
    if ($E(e[r][0], t))
      return r;
  return -1;
}
var Hs = TE, jE = Hs, CE = Array.prototype, ME = CE.splice;
function kE(e) {
  var t = this.__data__, r = jE(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ME.call(t, r, 1), --this.size, !0;
}
var IE = kE, NE = Hs;
function RE(e) {
  var t = this.__data__, r = NE(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var DE = RE, LE = Hs;
function BE(e) {
  return LE(this.__data__, e) > -1;
}
var FE = BE, zE = Hs;
function WE(e, t) {
  var r = this.__data__, n = zE(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var UE = WE, GE = PE, HE = IE, qE = DE, KE = FE, VE = UE;
function pa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pa.prototype.clear = GE;
pa.prototype.delete = HE;
pa.prototype.get = qE;
pa.prototype.has = KE;
pa.prototype.set = VE;
var qs = pa, YE = un, XE = Ft, ZE = YE(XE, "Map"), Hf = ZE, Vp = SE, JE = qs, QE = Hf;
function e$() {
  this.size = 0, this.__data__ = {
    hash: new Vp(),
    map: new (QE || JE)(),
    string: new Vp()
  };
}
var t$ = e$;
function r$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var n$ = r$, a$ = n$;
function i$(e, t) {
  var r = e.__data__;
  return a$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Ks = i$, o$ = Ks;
function s$(e) {
  var t = o$(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var c$ = s$, u$ = Ks;
function l$(e) {
  return u$(this, e).get(e);
}
var f$ = l$, d$ = Ks;
function p$(e) {
  return d$(this, e).has(e);
}
var h$ = p$, v$ = Ks;
function y$(e, t) {
  var r = v$(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var m$ = y$, g$ = t$, b$ = c$, x$ = f$, w$ = h$, O$ = m$;
function ha(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ha.prototype.clear = g$;
ha.prototype.delete = b$;
ha.prototype.get = x$;
ha.prototype.has = w$;
ha.prototype.set = O$;
var qf = ha, Zg = qf, _$ = "Expected a function";
function Kf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_$);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (Kf.Cache || Zg)(), r;
}
Kf.Cache = Zg;
var Jg = Kf;
const S$ = /* @__PURE__ */ me(Jg);
var A$ = Jg, P$ = 500;
function E$(e) {
  var t = A$(e, function(n) {
    return r.size === P$ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var $$ = E$, T$ = $$, j$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, C$ = /\\(\\)?/g, M$ = T$(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(j$, function(r, n, a, i) {
    t.push(a ? i.replace(C$, "$1") : n || r);
  }), t;
}), k$ = M$;
function I$(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Vf = I$, Yp = Ki, N$ = Vf, R$ = rt, D$ = la, Xp = Yp ? Yp.prototype : void 0, Zp = Xp ? Xp.toString : void 0;
function Qg(e) {
  if (typeof e == "string")
    return e;
  if (R$(e))
    return N$(e, Qg) + "";
  if (D$(e))
    return Zp ? Zp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var L$ = Qg, B$ = L$;
function F$(e) {
  return e == null ? "" : B$(e);
}
var eb = F$, z$ = rt, W$ = Wf, U$ = k$, G$ = eb;
function H$(e, t) {
  return z$(e) ? e : W$(e, t) ? [e] : U$(G$(e));
}
var tb = H$, q$ = la;
function K$(e) {
  if (typeof e == "string" || q$(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Vs = K$, V$ = tb, Y$ = Vs;
function X$(e, t) {
  t = V$(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Y$(t[r++])];
  return r && r == n ? e : void 0;
}
var Yf = X$, Z$ = Yf;
function J$(e, t, r) {
  var n = e == null ? void 0 : Z$(e, t);
  return n === void 0 ? r : n;
}
var rb = J$;
const st = /* @__PURE__ */ me(rb);
function Q$(e) {
  return e == null;
}
var eT = Q$;
const ie = /* @__PURE__ */ me(eT);
var tT = sr, rT = rt, nT = cr, aT = "[object String]";
function iT(e) {
  return typeof e == "string" || !rT(e) && nT(e) && tT(e) == aT;
}
var oT = iT;
const nn = /* @__PURE__ */ me(oT);
var Ku = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp;
function sT() {
  if (Jp) return ve;
  Jp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var g = h.$$typeof;
      switch (g) {
        case e:
          switch (h = h.type, h) {
            case r:
            case a:
            case n:
            case u:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case o:
                case c:
                case d:
                case f:
                case i:
                  return h;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return ve.ContextConsumer = o, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = c, ve.Fragment = r, ve.Lazy = d, ve.Memo = f, ve.Portal = t, ve.Profiler = a, ve.StrictMode = n, ve.Suspense = u, ve.SuspenseList = l, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(h) {
    return y(h) === o;
  }, ve.isContextProvider = function(h) {
    return y(h) === i;
  }, ve.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ve.isForwardRef = function(h) {
    return y(h) === c;
  }, ve.isFragment = function(h) {
    return y(h) === r;
  }, ve.isLazy = function(h) {
    return y(h) === d;
  }, ve.isMemo = function(h) {
    return y(h) === f;
  }, ve.isPortal = function(h) {
    return y(h) === t;
  }, ve.isProfiler = function(h) {
    return y(h) === a;
  }, ve.isStrictMode = function(h) {
    return y(h) === n;
  }, ve.isSuspense = function(h) {
    return y(h) === u;
  }, ve.isSuspenseList = function(h) {
    return y(h) === l;
  }, ve.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === a || h === n || h === u || h === l || h === p || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === i || h.$$typeof === o || h.$$typeof === c || h.$$typeof === v || h.getModuleId !== void 0);
  }, ve.typeOf = y, ve;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qp;
function cT() {
  return Qp || (Qp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, y = !1, h = !1, g = !1, w = !1, b;
    b = Symbol.for("react.module.reference");
    function O(K) {
      return !!(typeof K == "string" || typeof K == "function" || K === r || K === a || w || K === n || K === u || K === l || g || K === p || v || y || h || typeof K == "object" && K !== null && (K.$$typeof === d || K.$$typeof === f || K.$$typeof === i || K.$$typeof === o || K.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      K.$$typeof === b || K.getModuleId !== void 0));
    }
    function m(K) {
      if (typeof K == "object" && K !== null) {
        var Oe = K.$$typeof;
        switch (Oe) {
          case e:
            var $e = K.type;
            switch ($e) {
              case r:
              case a:
              case n:
              case u:
              case l:
                return $e;
              default:
                var Fe = $e && $e.$$typeof;
                switch (Fe) {
                  case s:
                  case o:
                  case c:
                  case d:
                  case f:
                  case i:
                    return Fe;
                  default:
                    return Oe;
                }
            }
          case t:
            return Oe;
        }
      }
    }
    var x = o, _ = i, P = e, $ = c, M = r, T = d, j = f, N = t, D = a, I = n, R = u, F = l, U = !1, q = !1;
    function E(K) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(K) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(K) {
      return m(K) === o;
    }
    function W(K) {
      return m(K) === i;
    }
    function Y(K) {
      return typeof K == "object" && K !== null && K.$$typeof === e;
    }
    function J(K) {
      return m(K) === c;
    }
    function ne(K) {
      return m(K) === r;
    }
    function oe(K) {
      return m(K) === d;
    }
    function Q(K) {
      return m(K) === f;
    }
    function z(K) {
      return m(K) === t;
    }
    function V(K) {
      return m(K) === a;
    }
    function te(K) {
      return m(K) === n;
    }
    function C(K) {
      return m(K) === u;
    }
    function le(K) {
      return m(K) === l;
    }
    ye.ContextConsumer = x, ye.ContextProvider = _, ye.Element = P, ye.ForwardRef = $, ye.Fragment = M, ye.Lazy = T, ye.Memo = j, ye.Portal = N, ye.Profiler = D, ye.StrictMode = I, ye.Suspense = R, ye.SuspenseList = F, ye.isAsyncMode = E, ye.isConcurrentMode = k, ye.isContextConsumer = L, ye.isContextProvider = W, ye.isElement = Y, ye.isForwardRef = J, ye.isFragment = ne, ye.isLazy = oe, ye.isMemo = Q, ye.isPortal = z, ye.isProfiler = V, ye.isStrictMode = te, ye.isSuspense = C, ye.isSuspenseList = le, ye.isValidElementType = O, ye.typeOf = m;
  }()), ye;
}
process.env.NODE_ENV === "production" ? Ku.exports = sT() : Ku.exports = cT();
var uT = Ku.exports, lT = sr, fT = cr, dT = "[object Number]";
function pT(e) {
  return typeof e == "number" || fT(e) && lT(e) == dT;
}
var nb = pT;
const hT = /* @__PURE__ */ me(nb);
var vT = nb;
function yT(e) {
  return vT(e) && e != +e;
}
var mT = yT;
const va = /* @__PURE__ */ me(mT);
var Ve = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Kr = function(t) {
  return nn(t) && t.indexOf("%") === t.length - 1;
}, H = function(t) {
  return hT(t) && !va(t);
}, Ne = function(t) {
  return H(t) || nn(t);
}, gT = 0, Tr = function(t) {
  var r = ++gT;
  return "".concat(t || "").concat(r);
}, Ye = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!H(t) && !nn(t))
    return n;
  var i;
  if (Kr(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return va(i) && (i = n), a && i > r && (i = r), i;
}, yr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, bT = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, be = function(t, r) {
  return H(t) && H(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Co(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : st(n, t)) === r;
  });
}
var xT = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, a = 0, i = 0, o = 0, s = 1 / 0, c = -1 / 0, u = 0, l = 0, f = 0; f < r; f++)
    u = t[f].cx || 0, l = t[f].cy || 0, n += u, a += l, i += u * l, o += u * u, s = Math.min(s, u), c = Math.max(c, u);
  var d = r * o !== n * n ? (r * i - n * a) / (r * o - n * n) : 0;
  return {
    xmin: s,
    xmax: c,
    a: d,
    b: (a - d * n) / r
  };
}, wT = function(t, r) {
  return H(t) && H(r) ? t - r : nn(t) && nn(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function $n(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Vu(e) {
  "@babel/helpers - typeof";
  return Vu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vu(e);
}
var OT = ["viewBox", "children"], _T = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], eh = ["points", "pathLength"], Jc = {
  svg: OT,
  polygon: eh,
  polyline: eh
}, Xf = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Mo = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Et(t) && (n = t.props), !fa(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Xf.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, ST = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Ar = function(t, r, n) {
  if (!fa(t) || Vu(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Xf.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = ST(o, r, n));
  }), a;
}, AT = ["children"], PT = ["children"];
function th(e, t) {
  if (e == null) return {};
  var r = ET(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ET(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Yu(e) {
  "@babel/helpers - typeof";
  return Yu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yu(e);
}
var rh = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, Xt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, nh = null, Qc = null, Zf = function e(t) {
  if (t === nh && Array.isArray(Qc))
    return Qc;
  var r = [];
  return Jr.forEach(t, function(n) {
    ie(n) || (uT.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Qc = r, nh = t, r;
};
function Ze(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return Xt(a);
  }) : n = [Xt(t)], Zf(e).forEach(function(a) {
    var i = st(a, "type.displayName") || st(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function it(e, t) {
  var r = Ze(e, t);
  return r && r[0];
}
var ah = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!H(n) || n <= 0 || !H(a) || a <= 0);
}, $T = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], TT = function(t) {
  return t && t.type && nn(t.type) && $T.indexOf(t.type) >= 0;
}, ab = function(t) {
  return t && Yu(t) === "object" && "clipDot" in t;
}, jT = function(t, r, n, a) {
  var i, o = (i = Jc == null ? void 0 : Jc[a]) !== null && i !== void 0 ? i : [];
  return r.startsWith("data-") || !ae(t) && (a && o.includes(r) || _T.includes(r)) || n && Xf.includes(r);
}, Z = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Et(t) && (a = t.props), !fa(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    jT((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Xu = function e(t, r) {
  if (t === r)
    return !0;
  var n = Jr.count(t);
  if (n !== Jr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return ih(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!ih(i, o))
      return !1;
  }
  return !0;
}, ih = function(t, r) {
  if (ie(t) && ie(r))
    return !0;
  if (!ie(t) && !ie(r)) {
    var n = t.props || {}, a = n.children, i = th(n, AT), o = r.props || {}, s = o.children, c = th(o, PT);
    return a && s ? $n(i, c) && Xu(a, s) : !a && !s ? $n(i, c) : !1;
  }
  return !1;
}, oh = function(t, r) {
  var n = [], a = {};
  return Zf(t).forEach(function(i, o) {
    if (TT(i))
      n.push(i);
    else if (i) {
      var s = Xt(i.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !a[s])) {
        var f = u(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, CT = function(t) {
  var r = t && t.type;
  return r && rh[r] ? rh[r] : null;
}, MT = function(t, r) {
  return Zf(r).indexOf(t);
}, kT = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Zu() {
  return Zu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zu.apply(this, arguments);
}
function IT(e, t) {
  if (e == null) return {};
  var r = NT(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ju(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, c = e.desc, u = IT(e, kT), l = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = ce("recharts-surface", i);
  return /* @__PURE__ */ S.createElement("svg", Zu({}, Z(u, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ S.createElement("title", null, s), /* @__PURE__ */ S.createElement("desc", null, c), t);
}
var RT = ["children", "className"];
function Qu() {
  return Qu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qu.apply(this, arguments);
}
function DT(e, t) {
  if (e == null) return {};
  var r = LT(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ue = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = DT(e, RT), i = ce("recharts-layer", n);
  return /* @__PURE__ */ S.createElement("g", Qu({
    className: i
  }, Z(a, !0), {
    ref: t
  }), r);
}), BT = process.env.NODE_ENV !== "production", $t = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (BT && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
};
function FT(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var zT = FT, WT = zT;
function UT(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : WT(e, t, r);
}
var GT = UT, HT = "\\ud800-\\udfff", qT = "\\u0300-\\u036f", KT = "\\ufe20-\\ufe2f", VT = "\\u20d0-\\u20ff", YT = qT + KT + VT, XT = "\\ufe0e\\ufe0f", ZT = "\\u200d", JT = RegExp("[" + ZT + HT + YT + XT + "]");
function QT(e) {
  return JT.test(e);
}
var ib = QT;
function ej(e) {
  return e.split("");
}
var tj = ej, ob = "\\ud800-\\udfff", rj = "\\u0300-\\u036f", nj = "\\ufe20-\\ufe2f", aj = "\\u20d0-\\u20ff", ij = rj + nj + aj, oj = "\\ufe0e\\ufe0f", sj = "[" + ob + "]", el = "[" + ij + "]", tl = "\\ud83c[\\udffb-\\udfff]", cj = "(?:" + el + "|" + tl + ")", sb = "[^" + ob + "]", cb = "(?:\\ud83c[\\udde6-\\uddff]){2}", ub = "[\\ud800-\\udbff][\\udc00-\\udfff]", uj = "\\u200d", lb = cj + "?", fb = "[" + oj + "]?", lj = "(?:" + uj + "(?:" + [sb, cb, ub].join("|") + ")" + fb + lb + ")*", fj = fb + lb + lj, dj = "(?:" + [sb + el + "?", el, cb, ub, sj].join("|") + ")", pj = RegExp(tl + "(?=" + tl + ")|" + dj + fj, "g");
function hj(e) {
  return e.match(pj) || [];
}
var vj = hj, yj = tj, mj = ib, gj = vj;
function bj(e) {
  return mj(e) ? gj(e) : yj(e);
}
var xj = bj, wj = GT, Oj = ib, _j = xj, Sj = eb;
function Aj(e) {
  return function(t) {
    t = Sj(t);
    var r = Oj(t) ? _j(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? wj(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var Pj = Aj, Ej = Pj, $j = Ej("toUpperCase"), Tj = $j;
const Ys = /* @__PURE__ */ me(Tj);
function Se(e) {
  return function() {
    return e;
  };
}
const db = Math.cos, ko = Math.sin, Tt = Math.sqrt, Io = Math.PI, Xs = 2 * Io, rl = Math.PI, nl = 2 * rl, Wr = 1e-6, jj = nl - Wr;
function pb(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Cj(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return pb;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class Mj {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? pb : Cj(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, a) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +a}`;
  }
  bezierCurveTo(t, r, n, a, i, o) {
    this._append`C${+t},${+r},${+n},${+a},${this._x1 = +i},${this._y1 = +o}`;
  }
  arcTo(t, r, n, a, i) {
    if (t = +t, r = +r, n = +n, a = +a, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let o = this._x1, s = this._y1, c = n - t, u = a - r, l = o - t, f = s - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > Wr) if (!(Math.abs(f * c - u * l) > Wr) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, v = a - s, y = c * c + u * u, h = p * p + v * v, g = Math.sqrt(y), w = Math.sqrt(d), b = i * Math.tan((rl - Math.acos((y + d - h) / (2 * g * w))) / 2), O = b / w, m = b / g;
      Math.abs(O - 1) > Wr && this._append`L${t + O * l},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > l * v)},${this._x1 = t + m * c},${this._y1 = r + m * u}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), c = n * Math.sin(a), u = t + s, l = r + c, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > Wr || Math.abs(this._y1 - l) > Wr) && this._append`L${u},${l}`, n && (d < 0 && (d = d % nl + nl), d > jj ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : d > Wr && this._append`A${n},${n},0,${+(d >= rl)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Jf(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new Mj(t);
}
function Qf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function hb(e) {
  this._context = e;
}
hb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Zs(e) {
  return new hb(e);
}
function vb(e) {
  return e[0];
}
function yb(e) {
  return e[1];
}
function mb(e, t) {
  var r = Se(!0), n = null, a = Zs, i = null, o = Jf(s);
  e = typeof e == "function" ? e : e === void 0 ? vb : Se(e), t = typeof t == "function" ? t : t === void 0 ? yb : Se(t);
  function s(c) {
    var u, l = (c = Qf(c)).length, f, d = !1, p;
    for (n == null && (i = a(p = o())), u = 0; u <= l; ++u)
      !(u < l && r(f = c[u], u, c)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(f, u, c), +t(f, u, c));
    if (p) return i = null, p + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Se(+c), s) : e;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Se(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Se(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (a = c, n != null && (i = a(n)), s) : a;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = i = null : i = a(n = c), s) : n;
  }, s;
}
function uo(e, t, r) {
  var n = null, a = Se(!0), i = null, o = Zs, s = null, c = Jf(u);
  e = typeof e == "function" ? e : e === void 0 ? vb : Se(+e), t = typeof t == "function" ? t : Se(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? yb : Se(+r);
  function u(f) {
    var d, p, v, y = (f = Qf(f)).length, h, g = !1, w, b = new Array(y), O = new Array(y);
    for (i == null && (s = o(w = c())), d = 0; d <= y; ++d) {
      if (!(d < y && a(h = f[d], d, f)) === g)
        if (g = !g)
          p = d, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), v = d - 1; v >= p; --v)
            s.point(b[v], O[v]);
          s.lineEnd(), s.areaEnd();
        }
      g && (b[d] = +e(h, d, f), O[d] = +t(h, d, f), s.point(n ? +n(h, d, f) : b[d], r ? +r(h, d, f) : O[d]));
    }
    if (w) return s = null, w + "" || null;
  }
  function l() {
    return mb().defined(a).curve(o).context(i);
  }
  return u.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Se(+f), n = null, u) : e;
  }, u.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Se(+f), u) : e;
  }, u.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Se(+f), u) : n;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Se(+f), r = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Se(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Se(+f), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return l().x(e).y(t);
  }, u.lineY1 = function() {
    return l().x(e).y(r);
  }, u.lineX1 = function() {
    return l().x(n).y(t);
  }, u.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Se(!!f), u) : a;
  }, u.curve = function(f) {
    return arguments.length ? (o = f, i != null && (s = o(i)), u) : o;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? i = s = null : s = o(i = f), u) : i;
  }, u;
}
class gb {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function kj(e) {
  return new gb(e, !0);
}
function Ij(e) {
  return new gb(e, !1);
}
const ed = {
  draw(e, t) {
    const r = Tt(t / Io);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Xs);
  }
}, Nj = {
  draw(e, t) {
    const r = Tt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, bb = Tt(1 / 3), Rj = bb * 2, Dj = {
  draw(e, t) {
    const r = Tt(t / Rj), n = r * bb;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Lj = {
  draw(e, t) {
    const r = Tt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Bj = 0.8908130915292852, xb = ko(Io / 10) / ko(7 * Io / 10), Fj = ko(Xs / 10) * xb, zj = -db(Xs / 10) * xb, Wj = {
  draw(e, t) {
    const r = Tt(t * Bj), n = Fj * r, a = zj * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Xs * i / 5, s = db(o), c = ko(o);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * a, c * n + s * a);
    }
    e.closePath();
  }
}, eu = Tt(3), Uj = {
  draw(e, t) {
    const r = -Tt(t / (eu * 3));
    e.moveTo(0, r * 2), e.lineTo(-eu * r, -r), e.lineTo(eu * r, -r), e.closePath();
  }
}, lt = -0.5, ft = Tt(3) / 2, al = 1 / Tt(12), Gj = (al / 2 + 1) * 3, Hj = {
  draw(e, t) {
    const r = Tt(t / Gj), n = r / 2, a = r * al, i = n, o = r * al + r, s = -i, c = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, c), e.lineTo(lt * n - ft * a, ft * n + lt * a), e.lineTo(lt * i - ft * o, ft * i + lt * o), e.lineTo(lt * s - ft * c, ft * s + lt * c), e.lineTo(lt * n + ft * a, lt * a - ft * n), e.lineTo(lt * i + ft * o, lt * o - ft * i), e.lineTo(lt * s + ft * c, lt * c - ft * s), e.closePath();
  }
};
function qj(e, t) {
  let r = null, n = Jf(a);
  e = typeof e == "function" ? e : Se(e || ed), t = typeof t == "function" ? t : Se(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Se(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Se(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function No() {
}
function Ro(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function wb(e) {
  this._context = e;
}
wb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Ro(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Ro(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Kj(e) {
  return new wb(e);
}
function Ob(e) {
  this._context = e;
}
Ob.prototype = {
  areaStart: No,
  areaEnd: No,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Ro(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Vj(e) {
  return new Ob(e);
}
function _b(e) {
  this._context = e;
}
_b.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Ro(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Yj(e) {
  return new _b(e);
}
function Sb(e) {
  this._context = e;
}
Sb.prototype = {
  areaStart: No,
  areaEnd: No,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Xj(e) {
  return new Sb(e);
}
function sh(e) {
  return e < 0 ? -1 : 1;
}
function ch(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (sh(i) + sh(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function uh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function tu(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function Do(e) {
  this._context = e;
}
Do.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        tu(this, this._t0, uh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, tu(this, uh(this, r = ch(this, e, t)), r);
          break;
        default:
          tu(this, this._t0, r = ch(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Ab(e) {
  this._context = new Pb(e);
}
(Ab.prototype = Object.create(Do.prototype)).point = function(e, t) {
  Do.prototype.point.call(this, t, e);
};
function Pb(e) {
  this._context = e;
}
Pb.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, i) {
    this._context.bezierCurveTo(t, e, n, r, i, a);
  }
};
function Zj(e) {
  return new Do(e);
}
function Jj(e) {
  return new Ab(e);
}
function Eb(e) {
  this._context = e;
}
Eb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = lh(e), a = lh(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function lh(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function Qj(e) {
  return new Eb(e);
}
function Js(e, t) {
  this._context = e, this._t = t;
}
Js.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function eC(e) {
  return new Js(e, 0.5);
}
function tC(e) {
  return new Js(e, 0);
}
function rC(e) {
  return new Js(e, 1);
}
function Mn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function il(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function nC(e, t) {
  return e[t];
}
function aC(e) {
  const t = [];
  return t.key = e, t;
}
function iC() {
  var e = Se([]), t = il, r = Mn, n = nC;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), aC), s, c = o.length, u = -1, l;
    for (const f of i)
      for (s = 0, ++u; s < c; ++s)
        (o[s][u] = [0, +n(f, o[s].key, u, i)]).data = f;
    for (s = 0, l = Qf(t(o)); s < c; ++s)
      o[l[s]].index = s;
    return r(o, l), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Se(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Se(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? il : typeof i == "function" ? i : Se(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Mn, a) : r;
  }, a;
}
function oC(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Mn(e, t);
  }
}
function sC(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Mn(e, t);
  }
}
function cC(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e[t[s]], f = l[n][1] || 0, d = l[n - 1][1] || 0, p = (f - d) / 2, v = 0; v < s; ++v) {
          var y = e[t[v]], h = y[n][1] || 0, g = y[n - 1][1] || 0;
          p += h - g;
        }
        c += f, u += p * f;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= u / c);
    }
    a[n - 1][1] += a[n - 1][0] = r, Mn(e, t);
  }
}
function ci(e) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ci(e);
}
var uC = ["type", "size", "sizeType"];
function ol() {
  return ol = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ol.apply(this, arguments);
}
function fh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fh(Object(r), !0).forEach(function(n) {
      lC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lC(e, t, r) {
  return t = fC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fC(e) {
  var t = dC(e, "string");
  return ci(t) == "symbol" ? t : t + "";
}
function dC(e, t) {
  if (ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pC(e, t) {
  if (e == null) return {};
  var r = hC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var $b = {
  symbolCircle: ed,
  symbolCross: Nj,
  symbolDiamond: Dj,
  symbolSquare: Lj,
  symbolStar: Wj,
  symbolTriangle: Uj,
  symbolWye: Hj
}, vC = Math.PI / 180, yC = function(t) {
  var r = "symbol".concat(Ys(t));
  return $b[r] || ed;
}, mC = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var a = 18 * vC;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, gC = function(t, r) {
  $b["symbol".concat(Ys(t))] = r;
}, Qs = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, c = pC(t, uC), u = dh(dh({}, c), {}, {
    type: n,
    size: i,
    sizeType: s
  }), l = function() {
    var h = yC(n), g = qj().type(h).size(mC(i, s, n));
    return g();
  }, f = u.className, d = u.cx, p = u.cy, v = Z(u, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ S.createElement("path", ol({}, v, {
    className: ce("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
Qs.registerSymbol = gC;
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function sl() {
  return sl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sl.apply(this, arguments);
}
function ph(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ph(Object(r), !0).forEach(function(n) {
      ui(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jb(n.key), n);
  }
}
function OC(e, t, r) {
  return t && wC(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _C(e, t, r) {
  return t = Lo(t), SC(e, Tb() ? Reflect.construct(t, r || [], Lo(e).constructor) : t.apply(e, r));
}
function SC(e, t) {
  if (t && (kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AC(e);
}
function AC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tb = function() {
    return !!e;
  })();
}
function Lo(e) {
  return Lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lo(e);
}
function PC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cl(e, t);
}
function cl(e, t) {
  return cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, cl(e, t);
}
function ui(e, t, r) {
  return t = jb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jb(e) {
  var t = EC(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function EC(e, t) {
  if (kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var dt = 32, td = /* @__PURE__ */ function(e) {
  function t() {
    return xC(this, t), _C(this, t, arguments);
  }
  return PC(t, e), OC(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = dt / 2, o = dt / 6, s = dt / 3, c = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ S.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: dt,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ S.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(i, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(i, `
            H`).concat(dt, "M").concat(2 * s, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ S.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(dt / 8, "h").concat(dt, "v").concat(dt * 3 / 4, "h").concat(-dt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ S.isValidElement(n.legendIcon)) {
          var u = bC({}, n);
          return delete u.legendIcon, /* @__PURE__ */ S.cloneElement(n.legendIcon, u);
        }
        return /* @__PURE__ */ S.createElement(Qs, {
          fill: c,
          cx: i,
          cy: i,
          size: dt,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, a = this.props, i = a.payload, o = a.iconSize, s = a.layout, c = a.formatter, u = a.inactiveColor, l = {
        x: 0,
        y: 0,
        width: dt,
        height: dt
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, v) {
        var y = p.formatter || c, h = ce(ui(ui({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var g = ae(p.value) ? null : p.value;
        $t(
          !ae(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = p.inactive ? u : p.color;
        return /* @__PURE__ */ S.createElement("li", sl({
          className: h,
          style: f,
          key: "legend-item-".concat(v)
        }, Ar(n.props, p, v)), /* @__PURE__ */ S.createElement(Ju, {
          width: o,
          height: o,
          viewBox: l,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ S.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, y ? y(g, p, v) : g));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.payload, i = n.layout, o = n.align;
      if (!a || !a.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ S.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(tt);
ui(td, "displayName", "Legend");
ui(td, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var $C = qs;
function TC() {
  this.__data__ = new $C(), this.size = 0;
}
var jC = TC;
function CC(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var MC = CC;
function kC(e) {
  return this.__data__.get(e);
}
var IC = kC;
function NC(e) {
  return this.__data__.has(e);
}
var RC = NC, DC = qs, LC = Hf, BC = qf, FC = 200;
function zC(e, t) {
  var r = this.__data__;
  if (r instanceof DC) {
    var n = r.__data__;
    if (!LC || n.length < FC - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new BC(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var WC = zC, UC = qs, GC = jC, HC = MC, qC = IC, KC = RC, VC = WC;
function ya(e) {
  var t = this.__data__ = new UC(e);
  this.size = t.size;
}
ya.prototype.clear = GC;
ya.prototype.delete = HC;
ya.prototype.get = qC;
ya.prototype.has = KC;
ya.prototype.set = VC;
var Cb = ya, YC = "__lodash_hash_undefined__";
function XC(e) {
  return this.__data__.set(e, YC), this;
}
var ZC = XC;
function JC(e) {
  return this.__data__.has(e);
}
var QC = JC, eM = qf, tM = ZC, rM = QC;
function Bo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new eM(); ++t < r; )
    this.add(e[t]);
}
Bo.prototype.add = Bo.prototype.push = tM;
Bo.prototype.has = rM;
var Mb = Bo;
function nM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var kb = nM;
function aM(e, t) {
  return e.has(t);
}
var Ib = aM, iM = Mb, oM = kb, sM = Ib, cM = 1, uM = 2;
function lM(e, t, r, n, a, i) {
  var o = r & cM, s = e.length, c = t.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = i.get(e), l = i.get(t);
  if (u && l)
    return u == t && l == e;
  var f = -1, d = !0, p = r & uM ? new iM() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var v = e[f], y = t[f];
    if (n)
      var h = o ? n(y, v, f, t, e, i) : n(v, y, f, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!oM(t, function(g, w) {
        if (!sM(p, w) && (v === g || a(v, g, r, n, i)))
          return p.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(v === y || a(v, y, r, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var Nb = lM, fM = Ft, dM = fM.Uint8Array, pM = dM;
function hM(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var vM = hM;
function yM(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var rd = yM, hh = Ki, vh = pM, mM = Gf, gM = Nb, bM = vM, xM = rd, wM = 1, OM = 2, _M = "[object Boolean]", SM = "[object Date]", AM = "[object Error]", PM = "[object Map]", EM = "[object Number]", $M = "[object RegExp]", TM = "[object Set]", jM = "[object String]", CM = "[object Symbol]", MM = "[object ArrayBuffer]", kM = "[object DataView]", yh = hh ? hh.prototype : void 0, ru = yh ? yh.valueOf : void 0;
function IM(e, t, r, n, a, i, o) {
  switch (r) {
    case kM:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case MM:
      return !(e.byteLength != t.byteLength || !i(new vh(e), new vh(t)));
    case _M:
    case SM:
    case EM:
      return mM(+e, +t);
    case AM:
      return e.name == t.name && e.message == t.message;
    case $M:
    case jM:
      return e == t + "";
    case PM:
      var s = bM;
    case TM:
      var c = n & wM;
      if (s || (s = xM), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= OM, o.set(e, t);
      var l = gM(s(e), s(t), n, a, i, o);
      return o.delete(e), l;
    case CM:
      if (ru)
        return ru.call(e) == ru.call(t);
  }
  return !1;
}
var NM = IM;
function RM(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Rb = RM, DM = Rb, LM = rt;
function BM(e, t, r) {
  var n = t(e);
  return LM(e) ? n : DM(n, r(e));
}
var FM = BM;
function zM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var WM = zM;
function UM() {
  return [];
}
var GM = UM, HM = WM, qM = GM, KM = Object.prototype, VM = KM.propertyIsEnumerable, mh = Object.getOwnPropertySymbols, YM = mh ? function(e) {
  return e == null ? [] : (e = Object(e), HM(mh(e), function(t) {
    return VM.call(e, t);
  }));
} : qM, XM = YM;
function ZM(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var JM = ZM, QM = sr, ek = cr, tk = "[object Arguments]";
function rk(e) {
  return ek(e) && QM(e) == tk;
}
var nk = rk, gh = nk, ak = cr, Db = Object.prototype, ik = Db.hasOwnProperty, ok = Db.propertyIsEnumerable, sk = gh(/* @__PURE__ */ function() {
  return arguments;
}()) ? gh : function(e) {
  return ak(e) && ik.call(e, "callee") && !ok.call(e, "callee");
}, nd = sk, Fo = { exports: {} };
function ck() {
  return !1;
}
var uk = ck;
Fo.exports;
(function(e, t) {
  var r = Ft, n = uk, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e.exports = u;
})(Fo, Fo.exports);
var Lb = Fo.exports, lk = 9007199254740991, fk = /^(?:0|[1-9]\d*)$/;
function dk(e, t) {
  var r = typeof e;
  return t = t ?? lk, !!t && (r == "number" || r != "symbol" && fk.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ad = dk, pk = 9007199254740991;
function hk(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pk;
}
var id = hk, vk = sr, yk = id, mk = cr, gk = "[object Arguments]", bk = "[object Array]", xk = "[object Boolean]", wk = "[object Date]", Ok = "[object Error]", _k = "[object Function]", Sk = "[object Map]", Ak = "[object Number]", Pk = "[object Object]", Ek = "[object RegExp]", $k = "[object Set]", Tk = "[object String]", jk = "[object WeakMap]", Ck = "[object ArrayBuffer]", Mk = "[object DataView]", kk = "[object Float32Array]", Ik = "[object Float64Array]", Nk = "[object Int8Array]", Rk = "[object Int16Array]", Dk = "[object Int32Array]", Lk = "[object Uint8Array]", Bk = "[object Uint8ClampedArray]", Fk = "[object Uint16Array]", zk = "[object Uint32Array]", Ae = {};
Ae[kk] = Ae[Ik] = Ae[Nk] = Ae[Rk] = Ae[Dk] = Ae[Lk] = Ae[Bk] = Ae[Fk] = Ae[zk] = !0;
Ae[gk] = Ae[bk] = Ae[Ck] = Ae[xk] = Ae[Mk] = Ae[wk] = Ae[Ok] = Ae[_k] = Ae[Sk] = Ae[Ak] = Ae[Pk] = Ae[Ek] = Ae[$k] = Ae[Tk] = Ae[jk] = !1;
function Wk(e) {
  return mk(e) && yk(e.length) && !!Ae[vk(e)];
}
var Uk = Wk;
function Gk(e) {
  return function(t) {
    return e(t);
  };
}
var Bb = Gk, zo = { exports: {} };
zo.exports;
(function(e, t) {
  var r = Vg, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(zo, zo.exports);
var Hk = zo.exports, qk = Uk, Kk = Bb, bh = Hk, xh = bh && bh.isTypedArray, Vk = xh ? Kk(xh) : qk, Fb = Vk, Yk = JM, Xk = nd, Zk = rt, Jk = Lb, Qk = ad, e2 = Fb, t2 = Object.prototype, r2 = t2.hasOwnProperty;
function n2(e, t) {
  var r = Zk(e), n = !r && Xk(e), a = !r && !n && Jk(e), i = !r && !n && !a && e2(e), o = r || n || a || i, s = o ? Yk(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || r2.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Qk(u, c))) && s.push(u);
  return s;
}
var a2 = n2, i2 = Object.prototype;
function o2(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || i2;
  return e === r;
}
var s2 = o2;
function c2(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var zb = c2, u2 = zb, l2 = u2(Object.keys, Object), f2 = l2, d2 = s2, p2 = f2, h2 = Object.prototype, v2 = h2.hasOwnProperty;
function y2(e) {
  if (!d2(e))
    return p2(e);
  var t = [];
  for (var r in Object(e))
    v2.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var m2 = y2, g2 = Uf, b2 = id;
function x2(e) {
  return e != null && b2(e.length) && !g2(e);
}
var Vi = x2, w2 = a2, O2 = m2, _2 = Vi;
function S2(e) {
  return _2(e) ? w2(e) : O2(e);
}
var ec = S2, A2 = FM, P2 = XM, E2 = ec;
function $2(e) {
  return A2(e, E2, P2);
}
var T2 = $2, wh = T2, j2 = 1, C2 = Object.prototype, M2 = C2.hasOwnProperty;
function k2(e, t, r, n, a, i) {
  var o = r & j2, s = wh(e), c = s.length, u = wh(t), l = u.length;
  if (c != l && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = s[f];
    if (!(o ? d in t : M2.call(t, d)))
      return !1;
  }
  var p = i.get(e), v = i.get(t);
  if (p && v)
    return p == t && v == e;
  var y = !0;
  i.set(e, t), i.set(t, e);
  for (var h = o; ++f < c; ) {
    d = s[f];
    var g = e[d], w = t[d];
    if (n)
      var b = o ? n(w, g, d, t, e, i) : n(g, w, d, e, t, i);
    if (!(b === void 0 ? g === w || a(g, w, r, n, i) : b)) {
      y = !1;
      break;
    }
    h || (h = d == "constructor");
  }
  if (y && !h) {
    var O = e.constructor, m = t.constructor;
    O != m && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return i.delete(e), i.delete(t), y;
}
var I2 = k2, N2 = un, R2 = Ft, D2 = N2(R2, "DataView"), L2 = D2, B2 = un, F2 = Ft, z2 = B2(F2, "Promise"), W2 = z2, U2 = un, G2 = Ft, H2 = U2(G2, "Set"), Wb = H2, q2 = un, K2 = Ft, V2 = q2(K2, "WeakMap"), Y2 = V2, ul = L2, ll = Hf, fl = W2, dl = Wb, pl = Y2, Ub = sr, ma = Xg, Oh = "[object Map]", X2 = "[object Object]", _h = "[object Promise]", Sh = "[object Set]", Ah = "[object WeakMap]", Ph = "[object DataView]", Z2 = ma(ul), J2 = ma(ll), Q2 = ma(fl), eI = ma(dl), tI = ma(pl), Ur = Ub;
(ul && Ur(new ul(new ArrayBuffer(1))) != Ph || ll && Ur(new ll()) != Oh || fl && Ur(fl.resolve()) != _h || dl && Ur(new dl()) != Sh || pl && Ur(new pl()) != Ah) && (Ur = function(e) {
  var t = Ub(e), r = t == X2 ? e.constructor : void 0, n = r ? ma(r) : "";
  if (n)
    switch (n) {
      case Z2:
        return Ph;
      case J2:
        return Oh;
      case Q2:
        return _h;
      case eI:
        return Sh;
      case tI:
        return Ah;
    }
  return t;
});
var rI = Ur, nu = Cb, nI = Nb, aI = NM, iI = I2, Eh = rI, $h = rt, Th = Lb, oI = Fb, sI = 1, jh = "[object Arguments]", Ch = "[object Array]", lo = "[object Object]", cI = Object.prototype, Mh = cI.hasOwnProperty;
function uI(e, t, r, n, a, i) {
  var o = $h(e), s = $h(t), c = o ? Ch : Eh(e), u = s ? Ch : Eh(t);
  c = c == jh ? lo : c, u = u == jh ? lo : u;
  var l = c == lo, f = u == lo, d = c == u;
  if (d && Th(e)) {
    if (!Th(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return i || (i = new nu()), o || oI(e) ? nI(e, t, r, n, a, i) : aI(e, t, c, r, n, a, i);
  if (!(r & sI)) {
    var p = l && Mh.call(e, "__wrapped__"), v = f && Mh.call(t, "__wrapped__");
    if (p || v) {
      var y = p ? e.value() : e, h = v ? t.value() : t;
      return i || (i = new nu()), a(y, h, r, n, i);
    }
  }
  return d ? (i || (i = new nu()), iI(e, t, r, n, a, i)) : !1;
}
var lI = uI, fI = lI, kh = cr;
function Gb(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !kh(e) && !kh(t) ? e !== e && t !== t : fI(e, t, r, n, Gb, a);
}
var od = Gb, dI = Cb, pI = od, hI = 1, vI = 2;
function yI(e, t, r, n) {
  var a = r.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var s = r[a];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    s = r[a];
    var c = s[0], u = e[c], l = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var f = new dI();
      if (n)
        var d = n(u, l, c, e, t, f);
      if (!(d === void 0 ? pI(l, u, hI | vI, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var mI = yI, gI = $r;
function bI(e) {
  return e === e && !gI(e);
}
var Hb = bI, xI = Hb, wI = ec;
function OI(e) {
  for (var t = wI(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, xI(a)];
  }
  return t;
}
var _I = OI;
function SI(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var qb = SI, AI = mI, PI = _I, EI = qb;
function $I(e) {
  var t = PI(e);
  return t.length == 1 && t[0][2] ? EI(t[0][0], t[0][1]) : function(r) {
    return r === e || AI(r, e, t);
  };
}
var TI = $I;
function jI(e, t) {
  return e != null && t in Object(e);
}
var CI = jI, MI = tb, kI = nd, II = rt, NI = ad, RI = id, DI = Vs;
function LI(e, t, r) {
  t = MI(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = DI(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && RI(a) && NI(o, a) && (II(e) || kI(e)));
}
var BI = LI, FI = CI, zI = BI;
function WI(e, t) {
  return e != null && zI(e, t, FI);
}
var UI = WI, GI = od, HI = rb, qI = UI, KI = Wf, VI = Hb, YI = qb, XI = Vs, ZI = 1, JI = 2;
function QI(e, t) {
  return KI(e) && VI(t) ? YI(XI(e), t) : function(r) {
    var n = HI(r, e);
    return n === void 0 && n === t ? qI(r, e) : GI(t, n, ZI | JI);
  };
}
var eN = QI;
function tN(e) {
  return e;
}
var ga = tN;
function rN(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var nN = rN, aN = Yf;
function iN(e) {
  return function(t) {
    return aN(t, e);
  };
}
var oN = iN, sN = nN, cN = oN, uN = Wf, lN = Vs;
function fN(e) {
  return uN(e) ? sN(lN(e)) : cN(e);
}
var dN = fN, pN = TI, hN = eN, vN = ga, yN = rt, mN = dN;
function gN(e) {
  return typeof e == "function" ? e : e == null ? vN : typeof e == "object" ? yN(e) ? hN(e[0], e[1]) : pN(e) : mN(e);
}
var zt = gN;
function bN(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var Kb = bN;
function xN(e) {
  return e !== e;
}
var wN = xN;
function ON(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var _N = ON, SN = Kb, AN = wN, PN = _N;
function EN(e, t, r) {
  return t === t ? PN(e, t, r) : SN(e, AN, r);
}
var $N = EN, TN = $N;
function jN(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && TN(e, t, 0) > -1;
}
var CN = jN;
function MN(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var kN = MN;
function IN() {
}
var NN = IN, au = Wb, RN = NN, DN = rd, LN = 1 / 0, BN = au && 1 / DN(new au([, -0]))[1] == LN ? function(e) {
  return new au(e);
} : RN, FN = BN, zN = Mb, WN = CN, UN = kN, GN = Ib, HN = FN, qN = rd, KN = 200;
function VN(e, t, r) {
  var n = -1, a = WN, i = e.length, o = !0, s = [], c = s;
  if (r)
    o = !1, a = UN;
  else if (i >= KN) {
    var u = t ? null : HN(e);
    if (u)
      return qN(u);
    o = !1, a = GN, c = new zN();
  } else
    c = t ? [] : s;
  e:
    for (; ++n < i; ) {
      var l = e[n], f = t ? t(l) : l;
      if (l = r || l !== 0 ? l : 0, o && f === f) {
        for (var d = c.length; d--; )
          if (c[d] === f)
            continue e;
        t && c.push(f), s.push(l);
      } else a(c, f, r) || (c !== s && c.push(f), s.push(l));
    }
  return s;
}
var YN = VN, XN = zt, ZN = YN;
function JN(e, t) {
  return e && e.length ? ZN(e, XN(t)) : [];
}
var QN = JN;
const Ih = /* @__PURE__ */ me(QN);
function Vb(e, t, r) {
  return t === !0 ? Ih(e, r) : ae(t) ? Ih(e, t) : e;
}
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
}
var eR = ["ref"];
function Nh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nh(Object(r), !0).forEach(function(n) {
      tc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xb(n.key), n);
  }
}
function rR(e, t, r) {
  return t && Rh(e.prototype, t), r && Rh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nR(e, t, r) {
  return t = Wo(t), aR(e, Yb() ? Reflect.construct(t, r || [], Wo(e).constructor) : t.apply(e, r));
}
function aR(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return iR(e);
}
function iR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Yb = function() {
    return !!e;
  })();
}
function Wo(e) {
  return Wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wo(e);
}
function oR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hl(e, t);
}
function hl(e, t) {
  return hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hl(e, t);
}
function tc(e, t, r) {
  return t = Xb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xb(e) {
  var t = sR(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function sR(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function cR(e, t) {
  if (e == null) return {};
  var r = uR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lR(e) {
  return e.value;
}
function fR(e, t) {
  if (/* @__PURE__ */ S.isValidElement(e))
    return /* @__PURE__ */ S.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ S.createElement(e, t);
  t.ref;
  var r = cR(t, eR);
  return /* @__PURE__ */ S.createElement(td, r);
}
var Dh = 1, Zt = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    tR(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = nR(this, t, [].concat(a)), tc(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return oR(t, e), rR(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > Dh || Math.abs(a.height - this.lastBoundingBox.height) > Dh) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Gt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, s = a.verticalAlign, c = a.margin, u = a.chartWidth, l = a.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var p = this.getBBoxSnapshot();
          f = {
            left: ((u || 0) - p.width) / 2
          };
        } else
          f = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var v = this.getBBoxSnapshot();
          d = {
            top: ((l || 0) - v.height) / 2
          };
        } else
          d = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Gt(Gt({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, s = a.height, c = a.wrapperStyle, u = a.payloadUniqBy, l = a.payload, f = Gt(Gt({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ S.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, fR(i, Gt(Gt({}, this.props), {}, {
        payload: Vb(l, u, lR)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = Gt(Gt({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && H(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
}(tt);
tc(Zt, "displayName", "Legend");
tc(Zt, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Lh = Ki, dR = nd, pR = rt, Bh = Lh ? Lh.isConcatSpreadable : void 0;
function hR(e) {
  return pR(e) || dR(e) || !!(Bh && e && e[Bh]);
}
var vR = hR, yR = Rb, mR = vR;
function Zb(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = mR), a || (a = []); ++i < o; ) {
    var s = e[i];
    t > 0 && r(s) ? t > 1 ? Zb(s, t - 1, r, n, a) : yR(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var Jb = Zb;
function gR(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e ? s : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var bR = gR, xR = bR, wR = xR(), OR = wR, _R = OR, SR = ec;
function AR(e, t) {
  return e && _R(e, t, SR);
}
var Qb = AR, PR = Vi;
function ER(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!PR(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var $R = ER, TR = Qb, jR = $R, CR = jR(TR), sd = CR, MR = sd, kR = Vi;
function IR(e, t) {
  var r = -1, n = kR(e) ? Array(e.length) : [];
  return MR(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var e0 = IR;
function NR(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var RR = NR, Fh = la;
function DR(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = Fh(e), o = t !== void 0, s = t === null, c = t === t, u = Fh(t);
    if (!s && !u && !i && e > t || i && o && c && !s && !u || n && o && c || !r && c || !a)
      return 1;
    if (!n && !i && !u && e < t || u && r && a && !n && !i || s && r && a || !o && a || !c)
      return -1;
  }
  return 0;
}
var LR = DR, BR = LR;
function FR(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, s = r.length; ++n < o; ) {
    var c = BR(a[n], i[n]);
    if (c) {
      if (n >= s)
        return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var zR = FR, iu = Vf, WR = Yf, UR = zt, GR = e0, HR = RR, qR = Bb, KR = zR, VR = ga, YR = rt;
function XR(e, t, r) {
  t.length ? t = iu(t, function(i) {
    return YR(i) ? function(o) {
      return WR(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [VR];
  var n = -1;
  t = iu(t, qR(UR));
  var a = GR(e, function(i, o, s) {
    var c = iu(t, function(u) {
      return u(i);
    });
    return { criteria: c, index: ++n, value: i };
  });
  return HR(a, function(i, o) {
    return KR(i, o, r);
  });
}
var ZR = XR;
function JR(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var QR = JR, eD = QR, zh = Math.max;
function tD(e, t, r) {
  return t = zh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = zh(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = n[a];
    return s[t] = r(o), eD(e, this, s);
  };
}
var rD = tD;
function nD(e) {
  return function() {
    return e;
  };
}
var aD = nD, iD = un, oD = function() {
  try {
    var e = iD(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), t0 = oD, sD = aD, Wh = t0, cD = ga, uD = Wh ? function(e, t) {
  return Wh(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: sD(t),
    writable: !0
  });
} : cD, lD = uD, fD = 800, dD = 16, pD = Date.now;
function hD(e) {
  var t = 0, r = 0;
  return function() {
    var n = pD(), a = dD - (n - r);
    if (r = n, a > 0) {
      if (++t >= fD)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var vD = hD, yD = lD, mD = vD, gD = mD(yD), bD = gD, xD = ga, wD = rD, OD = bD;
function _D(e, t) {
  return OD(wD(e, t, xD), e + "");
}
var SD = _D, AD = Gf, PD = Vi, ED = ad, $D = $r;
function TD(e, t, r) {
  if (!$D(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? PD(r) && ED(t, r.length) : n == "string" && t in r) ? AD(r[t], e) : !1;
}
var rc = TD, jD = Jb, CD = ZR, MD = SD, Uh = rc, kD = MD(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Uh(e, t[0], t[1]) ? t = [] : r > 2 && Uh(t[0], t[1], t[2]) && (t = [t[0]]), CD(e, jD(t, 1), []);
}), ID = kD;
const cd = /* @__PURE__ */ me(ID);
function li(e) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, li(e);
}
function vl() {
  return vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vl.apply(this, arguments);
}
function ND(e, t) {
  return BD(e) || LD(e, t) || DD(e, t) || RD();
}
function RD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DD(e, t) {
  if (e) {
    if (typeof e == "string") return Gh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gh(e, t);
  }
}
function Gh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function LD(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function BD(e) {
  if (Array.isArray(e)) return e;
}
function Hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ou(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hh(Object(r), !0).forEach(function(n) {
      FD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FD(e, t, r) {
  return t = zD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zD(e) {
  var t = WD(e, "string");
  return li(t) == "symbol" ? t : t + "";
}
function WD(e, t) {
  if (li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UD(e) {
  return Array.isArray(e) && Ne(e[0]) && Ne(e[1]) ? e.join(" ~ ") : e;
}
var GD = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, v = t.labelClassName, y = t.label, h = t.labelFormatter, g = t.accessibilityLayer, w = g === void 0 ? !1 : g, b = function() {
    if (l && l.length) {
      var j = {
        padding: 0,
        margin: 0
      }, N = (d ? cd(l, d) : l).map(function(D, I) {
        if (D.type === "none")
          return null;
        var R = ou({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: D.color || "#000"
        }, s), F = D.formatter || f || UD, U = D.value, q = D.name, E = U, k = q;
        if (F && E != null && k != null) {
          var L = F(U, q, D, I, l);
          if (Array.isArray(L)) {
            var W = ND(L, 2);
            E = W[0], k = W[1];
          } else
            E = L;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ S.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: R
          }, Ne(k) ? /* @__PURE__ */ S.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, k) : null, Ne(k) ? /* @__PURE__ */ S.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ S.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, E), /* @__PURE__ */ S.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, D.unit || ""))
        );
      });
      return /* @__PURE__ */ S.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: j
      }, N);
    }
    return null;
  }, O = ou({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = ou({
    margin: 0
  }, u), x = !ie(y), _ = x ? y : "", P = ce("recharts-default-tooltip", p), $ = ce("recharts-tooltip-label", v);
  x && h && l !== void 0 && l !== null && (_ = h(y, l));
  var M = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ S.createElement("div", vl({
    className: P,
    style: O
  }, M), /* @__PURE__ */ S.createElement("p", {
    className: $,
    style: m
  }, /* @__PURE__ */ S.isValidElement(_) ? _ : "".concat(_)), b());
};
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function fo(e, t, r) {
  return t = HD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HD(e) {
  var t = qD(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function qD(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ia = "recharts-tooltip-wrapper", KD = {
  visibility: "hidden"
};
function VD(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return ce(Ia, fo(fo(fo(fo({}, "".concat(Ia, "-right"), H(r) && t && H(t.x) && r >= t.x), "".concat(Ia, "-left"), H(r) && t && H(t.x) && r < t.x), "".concat(Ia, "-bottom"), H(n) && t && H(t.y) && n >= t.y), "".concat(Ia, "-top"), H(n) && t && H(t.y) && n < t.y));
}
function qh(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, u = e.viewBoxDimension;
  if (i && H(i[n]))
    return i[n];
  var l = r[n] - s - a, f = r[n] + a;
  if (t[n])
    return o[n] ? l : f;
  if (o[n]) {
    var d = l, p = c[n];
    return d < p ? Math.max(f, c[n]) : Math.max(l, c[n]);
  }
  var v = f + s, y = c[n] + u;
  return v > y ? Math.max(l, c[n]) : Math.max(f, c[n]);
}
function YD(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function XD(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = qh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = qh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = YD({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : u = KD, {
    cssProperties: u,
    cssClasses: VD({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
function Kh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kh(Object(r), !0).forEach(function(n) {
      ml(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function JD(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n0(n.key), n);
  }
}
function QD(e, t, r) {
  return t && JD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eL(e, t, r) {
  return t = Uo(t), tL(e, r0() ? Reflect.construct(t, r || [], Uo(e).constructor) : t.apply(e, r));
}
function tL(e, t) {
  if (t && (Nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rL(e);
}
function rL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function r0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (r0 = function() {
    return !!e;
  })();
}
function Uo(e) {
  return Uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Uo(e);
}
function nL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yl(e, t);
}
function yl(e, t) {
  return yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yl(e, t);
}
function ml(e, t, r) {
  return t = n0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n0(e) {
  var t = aL(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function aL(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Yh = 1, iL = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    ZD(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = eL(this, t, [].concat(a)), ml(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ml(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0
          }
        });
      }
    }), r;
  }
  return nL(t, e), QD(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Yh || Math.abs(n.height - this.state.lastBoundingBox.height) > Yh) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, c = a.animationEasing, u = a.children, l = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, v = a.position, y = a.reverseDirection, h = a.useTranslate3d, g = a.viewBox, w = a.wrapperStyle, b = XD({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: p,
        position: v,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: h,
        viewBox: g
      }), O = b.cssClasses, m = b.cssProperties, x = Vh(Vh({
        transition: d && i ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ S.createElement("div", {
          tabIndex: -1,
          className: O,
          style: x,
          ref: function(P) {
            n.wrapperNode = P;
          }
        }, u)
      );
    }
  }]);
}(tt), oL = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Wt = {
  isSsr: oL()
};
function Rn(e) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e);
}
function Xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(r), !0).forEach(function(n) {
      ud(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i0(n.key), n);
  }
}
function uL(e, t, r) {
  return t && cL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lL(e, t, r) {
  return t = Go(t), fL(e, a0() ? Reflect.construct(t, r || [], Go(e).constructor) : t.apply(e, r));
}
function fL(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dL(e);
}
function dL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function a0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (a0 = function() {
    return !!e;
  })();
}
function Go(e) {
  return Go = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Go(e);
}
function pL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gl(e, t);
}
function gl(e, t) {
  return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, gl(e, t);
}
function ud(e, t, r) {
  return t = i0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i0(e) {
  var t = hL(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function hL(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function vL(e) {
  return e.dataKey;
}
function yL(e, t) {
  return /* @__PURE__ */ S.isValidElement(e) ? /* @__PURE__ */ S.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ S.createElement(e, t) : /* @__PURE__ */ S.createElement(GD, t);
}
var ht = /* @__PURE__ */ function(e) {
  function t() {
    return sL(this, t), lL(this, t, arguments);
  }
  return pL(t, e), uL(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, c = a.animationEasing, u = a.content, l = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, v = a.payload, y = a.payloadUniqBy, h = a.position, g = a.reverseDirection, w = a.useTranslate3d, b = a.viewBox, O = a.wrapperStyle, m = v ?? [];
      f && m.length && (m = Vb(v.filter(function(_) {
        return _.value != null && (_.hide !== !0 || n.props.includeHidden);
      }), y, vL));
      var x = m.length > 0;
      return /* @__PURE__ */ S.createElement(iL, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: d,
        active: i,
        coordinate: l,
        hasPayload: x,
        offset: p,
        position: h,
        reverseDirection: g,
        useTranslate3d: w,
        viewBox: b,
        wrapperStyle: O
      }, yL(u, Zh(Zh({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
}(tt);
ud(ht, "displayName", "Tooltip");
ud(ht, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Wt.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var mL = Ft, gL = function() {
  return mL.Date.now();
}, bL = gL, xL = /\s/;
function wL(e) {
  for (var t = e.length; t-- && xL.test(e.charAt(t)); )
    ;
  return t;
}
var OL = wL, _L = OL, SL = /^\s+/;
function AL(e) {
  return e && e.slice(0, _L(e) + 1).replace(SL, "");
}
var PL = AL, EL = PL, Jh = $r, $L = la, Qh = NaN, TL = /^[-+]0x[0-9a-f]+$/i, jL = /^0b[01]+$/i, CL = /^0o[0-7]+$/i, ML = parseInt;
function kL(e) {
  if (typeof e == "number")
    return e;
  if ($L(e))
    return Qh;
  if (Jh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Jh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = EL(e);
  var r = jL.test(e);
  return r || CL.test(e) ? ML(e.slice(2), r ? 2 : 8) : TL.test(e) ? Qh : +e;
}
var o0 = kL, IL = $r, su = bL, ev = o0, NL = "Expected a function", RL = Math.max, DL = Math.min;
function LL(e, t, r) {
  var n, a, i, o, s, c, u = 0, l = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(NL);
  t = ev(t) || 0, IL(r) && (l = !!r.leading, f = "maxWait" in r, i = f ? RL(ev(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function p(x) {
    var _ = n, P = a;
    return n = a = void 0, u = x, o = e.apply(P, _), o;
  }
  function v(x) {
    return u = x, s = setTimeout(g, t), l ? p(x) : o;
  }
  function y(x) {
    var _ = x - c, P = x - u, $ = t - _;
    return f ? DL($, i - P) : $;
  }
  function h(x) {
    var _ = x - c, P = x - u;
    return c === void 0 || _ >= t || _ < 0 || f && P >= i;
  }
  function g() {
    var x = su();
    if (h(x))
      return w(x);
    s = setTimeout(g, y(x));
  }
  function w(x) {
    return s = void 0, d && n ? p(x) : (n = a = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = a = s = void 0;
  }
  function O() {
    return s === void 0 ? o : w(su());
  }
  function m() {
    var x = su(), _ = h(x);
    if (n = arguments, a = this, c = x, _) {
      if (s === void 0)
        return v(c);
      if (f)
        return clearTimeout(s), s = setTimeout(g, t), p(c);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return m.cancel = b, m.flush = O, m;
}
var BL = LL, FL = BL, zL = $r, WL = "Expected a function";
function UL(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(WL);
  return zL(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), FL(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var GL = UL;
const s0 = /* @__PURE__ */ me(GL);
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(r), !0).forEach(function(n) {
      HL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HL(e, t, r) {
  return t = qL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qL(e) {
  var t = KL(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function KL(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VL(e, t) {
  return JL(e) || ZL(e, t) || XL(e, t) || YL();
}
function YL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XL(e, t) {
  if (e) {
    if (typeof e == "string") return rv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rv(e, t);
  }
}
function rv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function JL(e) {
  if (Array.isArray(e)) return e;
}
var QL = /* @__PURE__ */ eg(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, c = s === void 0 ? "100%" : s, u = e.minWidth, l = u === void 0 ? 0 : u, f = e.minHeight, d = e.maxHeight, p = e.children, v = e.debounce, y = v === void 0 ? 0 : v, h = e.id, g = e.className, w = e.onResize, b = e.style, O = b === void 0 ? {} : b, m = Eo(null), x = Eo();
  x.current = w, H1(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var _ = mt({
    containerWidth: a.width,
    containerHeight: a.height
  }), P = VL(_, 2), $ = P[0], M = P[1], T = q1(function(N, D) {
    M(function(I) {
      var R = Math.round(N), F = Math.round(D);
      return I.containerWidth === R && I.containerHeight === F ? I : {
        containerWidth: R,
        containerHeight: F
      };
    });
  }, []);
  Gi(function() {
    var N = function(q) {
      var E, k = q[0].contentRect, L = k.width, W = k.height;
      T(L, W), (E = x.current) === null || E === void 0 || E.call(x, L, W);
    };
    y > 0 && (N = s0(N, y, {
      trailing: !0,
      leading: !1
    }));
    var D = new ResizeObserver(N), I = m.current.getBoundingClientRect(), R = I.width, F = I.height;
    return T(R, F), D.observe(m.current), function() {
      D.disconnect();
    };
  }, [T, y]);
  var j = tg(function() {
    var N = $.containerWidth, D = $.containerHeight;
    if (N < 0 || D < 0)
      return null;
    $t(Kr(o) || Kr(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), $t(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = Kr(o) ? N : o, R = Kr(c) ? D : c;
    r && r > 0 && (I ? R = I / r : R && (I = R * r), d && R > d && (R = d)), $t(I > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, R, o, c, l, f, r);
    var F = !Array.isArray(p) && Xt(p.type).endsWith("Chart");
    return S.Children.map(p, function(U) {
      return /* @__PURE__ */ S.isValidElement(U) ? /* @__PURE__ */ Ie(U, po({
        width: I,
        height: R
      }, F ? {
        style: po({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: I
        }, U.props.style)
      } : {})) : U;
    });
  }, [r, p, c, d, f, l, $, o]);
  return /* @__PURE__ */ S.createElement("div", {
    id: h ? "".concat(h) : void 0,
    className: ce("recharts-responsive-container", g),
    style: po(po({}, O), {}, {
      width: o,
      height: c,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, j);
}), Yi = function(t) {
  return null;
};
Yi.displayName = "Cell";
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function nv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nv(Object(r), !0).forEach(function(n) {
      eB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eB(e, t, r) {
  return t = tB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tB(e) {
  var t = rB(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function rB(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yn = {
  widthCache: {},
  cacheCount: 0
}, nB = 2e3, aB = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, av = "recharts_measurement_span";
function iB(e) {
  var t = bl({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Xa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Wt.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = iB(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (yn.widthCache[a])
    return yn.widthCache[a];
  try {
    var i = document.getElementById(av);
    i || (i = document.createElement("span"), i.setAttribute("id", av), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = bl(bl({}, aB), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), c = {
      width: s.width,
      height: s.height
    };
    return yn.widthCache[a] = c, ++yn.cacheCount > nB && (yn.cacheCount = 0, yn.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, oB = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
function Ho(e, t) {
  return lB(e) || uB(e, t) || cB(e, t) || sB();
}
function sB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cB(e, t) {
  if (e) {
    if (typeof e == "string") return iv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return iv(e, t);
  }
}
function iv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function lB(e) {
  if (Array.isArray(e)) return e;
}
function fB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ov(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pB(n.key), n);
  }
}
function dB(e, t, r) {
  return t && ov(e.prototype, t), r && ov(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function pB(e) {
  var t = hB(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function hB(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var sv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, cv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, vB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, yB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, c0 = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, mB = Object.keys(c0), On = "NaN";
function gB(e, t) {
  return e * c0[t];
}
var ho = /* @__PURE__ */ function() {
  function e(t, r) {
    fB(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !vB.test(r) && (this.num = NaN, this.unit = ""), mB.includes(r) && (this.num = gB(t, r), this.unit = "px");
  }
  return dB(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, a = (n = yB.exec(r)) !== null && n !== void 0 ? n : [], i = Ho(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function u0(e) {
  if (e.includes(On))
    return On;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = sv.exec(t)) !== null && r !== void 0 ? r : [], a = Ho(n, 4), i = a[1], o = a[2], s = a[3], c = ho.parse(i ?? ""), u = ho.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN())
      return On;
    t = t.replace(sv, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = cv.exec(t)) !== null && f !== void 0 ? f : [], p = Ho(d, 4), v = p[1], y = p[2], h = p[3], g = ho.parse(v ?? ""), w = ho.parse(h ?? ""), b = y === "+" ? g.add(w) : g.subtract(w);
    if (b.isNaN())
      return On;
    t = t.replace(cv, b.toString());
  }
  return t;
}
var uv = /\(([^()]*)\)/;
function bB(e) {
  for (var t = e; t.includes("("); ) {
    var r = uv.exec(t), n = Ho(r, 2), a = n[1];
    t = t.replace(uv, u0(a));
  }
  return t;
}
function xB(e) {
  var t = e.replace(/\s+/g, "");
  return t = bB(t), t = u0(t), t;
}
function wB(e) {
  try {
    return xB(e);
  } catch {
    return On;
  }
}
function cu(e) {
  var t = wB(e.slice(5, -1));
  return t === On ? "" : t;
}
var OB = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], _B = ["dx", "dy", "angle", "className", "breakAll"];
function xl() {
  return xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xl.apply(this, arguments);
}
function lv(e, t) {
  if (e == null) return {};
  var r = SB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fv(e, t) {
  return $B(e) || EB(e, t) || PB(e, t) || AB();
}
function AB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PB(e, t) {
  if (e) {
    if (typeof e == "string") return dv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dv(e, t);
  }
}
function dv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function EB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function $B(e) {
  if (Array.isArray(e)) return e;
}
var l0 = /[ \f\n\r\t\v\u2028\u2029]+/, f0 = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    ie(r) || (n ? i = r.toString().split("") : i = r.toString().split(l0));
    var o = i.map(function(c) {
      return {
        word: c,
        width: Xa(c, a).width
      };
    }), s = n ? 0 : Xa(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, TB = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, c = t.style, u = t.breakAll, l = H(o), f = s, d = function() {
    var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return I.reduce(function(R, F) {
      var U = F.word, q = F.width, E = R[R.length - 1];
      if (E && (a == null || i || E.width + q + n < Number(a)))
        E.words.push(U), E.width += q + n;
      else {
        var k = {
          words: [U],
          width: q
        };
        R.push(k);
      }
      return R;
    }, []);
  }, p = d(r), v = function(I) {
    return I.reduce(function(R, F) {
      return R.width > F.width ? R : F;
    });
  };
  if (!l)
    return p;
  for (var y = "…", h = function(I) {
    var R = f.slice(0, I), F = f0({
      breakAll: u,
      style: c,
      children: R + y
    }).wordsWithComputedWidth, U = d(F), q = U.length > o || v(U).width > Number(a);
    return [q, U];
  }, g = 0, w = f.length - 1, b = 0, O; g <= w && b <= f.length - 1; ) {
    var m = Math.floor((g + w) / 2), x = m - 1, _ = h(x), P = fv(_, 2), $ = P[0], M = P[1], T = h(m), j = fv(T, 1), N = j[0];
    if (!$ && !N && (g = m + 1), $ && N && (w = m - 1), !$ && N) {
      O = M;
      break;
    }
    b++;
  }
  return O || p;
}, pv = function(t) {
  var r = ie(t) ? [] : t.toString().split(l0);
  return [{
    words: r
  }];
}, jB = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Wt.isSsr) {
    var c, u, l = f0({
      breakAll: o,
      children: a,
      style: i
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      c = f, u = d;
    } else
      return pv(a);
    return TB({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, c, u, r, n);
  }
  return pv(a);
}, hv = "#808080", an = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, v = t.verticalAnchor, y = v === void 0 ? "end" : v, h = t.fill, g = h === void 0 ? hv : h, w = lv(t, OB), b = tg(function() {
    return jB({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: f,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, f, w.style, w.width]), O = w.dx, m = w.dy, x = w.angle, _ = w.className, P = w.breakAll, $ = lv(w, _B);
  if (!Ne(n) || !Ne(i))
    return null;
  var M = n + (H(O) ? O : 0), T = i + (H(m) ? m : 0), j;
  switch (y) {
    case "start":
      j = cu("calc(".concat(u, ")"));
      break;
    case "middle":
      j = cu("calc(".concat((b.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      j = cu("calc(".concat(b.length - 1, " * -").concat(s, ")"));
      break;
  }
  var N = [];
  if (f) {
    var D = b[0].width, I = w.width;
    N.push("scale(".concat((H(I) ? I / D : 1) / D, ")"));
  }
  return x && N.push("rotate(".concat(x, ", ").concat(M, ", ").concat(T, ")")), N.length && ($.transform = N.join(" ")), /* @__PURE__ */ S.createElement("text", xl({}, Z($, !0), {
    x: M,
    y: T,
    className: ce("recharts-text", _),
    textAnchor: p,
    fill: g.includes("url") ? hv : g
  }), b.map(function(R, F) {
    var U = R.words.join(P ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ S.createElement("tspan", {
        x: M,
        dy: F === 0 ? j : s,
        key: "".concat(U, "-").concat(F)
      }, U)
    );
  }));
};
function xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function CB(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ld(e) {
  let t, r, n;
  e.length !== 2 ? (t = xr, r = (s, c) => xr(e(s), c), n = (s, c) => e(s) - c) : (t = e === xr || e === CB ? e : MB, r = e, n = e);
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        r(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        r(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = a(s, c, u, l - 1);
    return f > u && n(s[f - 1], c) > -n(s[f], c) ? f - 1 : f;
  }
  return { left: a, center: o, right: i };
}
function MB() {
  return 0;
}
function d0(e) {
  return e === null ? NaN : +e;
}
function* kB(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const IB = ld(xr), Xi = IB.right;
ld(d0).center;
class vv extends Map {
  constructor(t, r = DB) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(yv(this, t));
  }
  has(t) {
    return super.has(yv(this, t));
  }
  set(t, r) {
    return super.set(NB(this, t), r);
  }
  delete(t) {
    return super.delete(RB(this, t));
  }
}
function yv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function NB({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function RB({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function DB(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function LB(e = xr) {
  if (e === xr) return p0;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function p0(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const BB = Math.sqrt(50), FB = Math.sqrt(10), zB = Math.sqrt(2);
function qo(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= BB ? 10 : i >= FB ? 5 : i >= zB ? 2 : 1;
  let s, c, u;
  return a < 0 ? (u = Math.pow(10, -a) / o, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, a) * o, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? qo(e, t, r * 2) : [s, c, u];
}
function wl(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? qo(t, e, r) : qo(e, t, r);
  if (!(i >= a)) return [];
  const s = i - a + 1, c = new Array(s);
  if (n)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (i - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (a + u) * o;
  return c;
}
function Ol(e, t, r) {
  return t = +t, e = +e, r = +r, qo(e, t, r)[2];
}
function _l(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Ol(t, e, r) : Ol(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function mv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function gv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function h0(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? p0 : LB(a); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - u * f / c + d)), v = Math.min(n, Math.floor(t + (c - u) * f / c + d));
      h0(e, t, p, v, a);
    }
    const i = e[t];
    let o = r, s = n;
    for (Na(e, r, t), a(e[n], i) > 0 && Na(e, r, n); o < s; ) {
      for (Na(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? Na(e, r, s) : (++s, Na(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Na(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function WB(e, t, r) {
  if (e = Float64Array.from(kB(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return gv(e);
    if (t >= 1) return mv(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = mv(h0(e, i).subarray(0, i + 1)), s = gv(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function UB(e, t, r = d0) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function GB(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function xt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function ur(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Sl = Symbol("implicit");
function fd() {
  var e = new vv(), t = [], r = [], n = Sl;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Sl) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new vv();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return fd(t, r).unknown(n);
  }, xt.apply(a, arguments), a;
}
function vi() {
  var e = fd().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, v = p ? a : n, y = p ? n : a;
    i = (y - v) / Math.max(1, d - c + u * 2), s && (i = Math.floor(i)), v += (y - v - i * (d - c)) * l, o = i * (1 - c), s && (v = Math.round(v), o = Math.round(o));
    var h = GB(d).map(function(g) {
      return v + i * g;
    });
    return r(p ? h.reverse() : h);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, f()) : [n, a];
  }, e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, s = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, f()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (c = Math.min(1, u = +d), f()) : c;
  }, e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), f()) : c;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (u = +d, f()) : u;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return vi(t(), [n, a]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, xt.apply(f(), arguments);
}
function v0(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return v0(t());
  }, e;
}
function Za() {
  return v0(vi.apply(null, arguments).paddingInner(1));
}
function dd(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function y0(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Zi() {
}
var yi = 0.7, Ko = 1 / yi, Tn = "\\s*([+-]?\\d+)\\s*", mi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", HB = /^#([0-9a-f]{3,8})$/, qB = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), KB = new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`), VB = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${mi}\\)$`), YB = new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${mi}\\)$`), XB = new RegExp(`^hsl\\(${mi},${Nt},${Nt}\\)$`), ZB = new RegExp(`^hsla\\(${mi},${Nt},${Nt},${mi}\\)$`), bv = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
dd(Zi, gi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: xv,
  // Deprecated! Use color.formatHex.
  formatHex: xv,
  formatHex8: JB,
  formatHsl: QB,
  formatRgb: wv,
  toString: wv
});
function xv() {
  return this.rgb().formatHex();
}
function JB() {
  return this.rgb().formatHex8();
}
function QB() {
  return m0(this).formatHsl();
}
function wv() {
  return this.rgb().formatRgb();
}
function gi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = HB.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ov(t) : r === 3 ? new Je(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? vo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? vo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = qB.exec(e)) ? new Je(t[1], t[2], t[3], 1) : (t = KB.exec(e)) ? new Je(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = VB.exec(e)) ? vo(t[1], t[2], t[3], t[4]) : (t = YB.exec(e)) ? vo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = XB.exec(e)) ? Av(t[1], t[2] / 100, t[3] / 100, 1) : (t = ZB.exec(e)) ? Av(t[1], t[2] / 100, t[3] / 100, t[4]) : bv.hasOwnProperty(e) ? Ov(bv[e]) : e === "transparent" ? new Je(NaN, NaN, NaN, 0) : null;
}
function Ov(e) {
  return new Je(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function vo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Je(e, t, r, n);
}
function e3(e) {
  return e instanceof Zi || (e = gi(e)), e ? (e = e.rgb(), new Je(e.r, e.g, e.b, e.opacity)) : new Je();
}
function Al(e, t, r, n) {
  return arguments.length === 1 ? e3(e) : new Je(e, t, r, n ?? 1);
}
function Je(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
dd(Je, Al, y0(Zi, {
  brighter(e) {
    return e = e == null ? Ko : Math.pow(Ko, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yi : Math.pow(yi, e), new Je(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Je(Qr(this.r), Qr(this.g), Qr(this.b), Vo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _v,
  // Deprecated! Use color.formatHex.
  formatHex: _v,
  formatHex8: t3,
  formatRgb: Sv,
  toString: Sv
}));
function _v() {
  return `#${Vr(this.r)}${Vr(this.g)}${Vr(this.b)}`;
}
function t3() {
  return `#${Vr(this.r)}${Vr(this.g)}${Vr(this.b)}${Vr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Sv() {
  const e = Vo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qr(this.r)}, ${Qr(this.g)}, ${Qr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Vo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Vr(e) {
  return e = Qr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Av(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new At(e, t, r, n);
}
function m0(e) {
  if (e instanceof At) return new At(e.h, e.s, e.l, e.opacity);
  if (e instanceof Zi || (e = gi(e)), !e) return new At();
  if (e instanceof At) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, c = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? i + a : 2 - i - a, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new At(o, s, c, e.opacity);
}
function r3(e, t, r, n) {
  return arguments.length === 1 ? m0(e) : new At(e, t, r, n ?? 1);
}
function At(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
dd(At, r3, y0(Zi, {
  brighter(e) {
    return e = e == null ? Ko : Math.pow(Ko, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? yi : Math.pow(yi, e), new At(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Je(
      uu(e >= 240 ? e - 240 : e + 120, a, n),
      uu(e, a, n),
      uu(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new At(Pv(this.h), yo(this.s), yo(this.l), Vo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Vo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Pv(this.h)}, ${yo(this.s) * 100}%, ${yo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Pv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function yo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function uu(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const pd = (e) => () => e;
function n3(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function a3(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function i3(e) {
  return (e = +e) == 1 ? g0 : function(t, r) {
    return r - t ? a3(t, r, e) : pd(isNaN(t) ? r : t);
  };
}
function g0(e, t) {
  var r = t - e;
  return r ? n3(e, r) : pd(isNaN(e) ? t : e);
}
const Ev = function e(t) {
  var r = i3(t);
  function n(a, i) {
    var o = r((a = Al(a)).r, (i = Al(i)).r), s = r(a.g, i.g), c = r(a.b, i.b), u = g0(a.opacity, i.opacity);
    return function(l) {
      return a.r = o(l), a.g = s(l), a.b = c(l), a.opacity = u(l), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function o3(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function s3(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function c3(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ba(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function u3(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Yo(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function l3(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ba(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var Pl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, lu = new RegExp(Pl.source, "g");
function f3(e) {
  return function() {
    return e;
  };
}
function d3(e) {
  return function(t) {
    return e(t) + "";
  };
}
function p3(e, t) {
  var r = Pl.lastIndex = lu.lastIndex = 0, n, a, i, o = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = Pl.exec(e)) && (a = lu.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, c.push({ i: o, x: Yo(n, a) })), r = lu.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? c[0] ? d3(c[0].x) : f3(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function ba(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? pd(t) : (r === "number" ? Yo : r === "string" ? (n = gi(t)) ? (t = n, Ev) : p3 : t instanceof gi ? Ev : t instanceof Date ? u3 : s3(t) ? o3 : Array.isArray(t) ? c3 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? l3 : Yo)(e, t);
}
function hd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function h3(e, t) {
  t === void 0 && (t = e, e = ba);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function v3(e) {
  return function() {
    return e;
  };
}
function Xo(e) {
  return +e;
}
var $v = [0, 1];
function Xe(e) {
  return e;
}
function El(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : v3(isNaN(t) ? NaN : 0.5);
}
function y3(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function m3(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = El(a, n), i = r(o, i)) : (n = El(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function g3(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = El(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = Xi(e, s, 1, n) - 1;
    return i[c](a[c](s));
  };
}
function Ji(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function nc() {
  var e = $v, t = $v, r = ba, n, a, i, o = Xe, s, c, u;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== Xe && (o = y3(e[0], e[d - 1])), s = d > 2 ? g3 : m3, c = u = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (c || (c = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((u || (u = s(t, e.map(n), Yo)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Xo), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = hd, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Xe, l()) : o !== Xe;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, p) {
    return n = d, a = p, l();
  };
}
function vd() {
  return nc()(Xe, Xe);
}
function b3(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Zo(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Dn(e) {
  return e = Zo(Math.abs(e)), e ? e[1] : NaN;
}
function x3(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], c = 0; a > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), i.push(r.substring(a -= s, a + s)), !((c += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function w3(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var O3 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function bi(e) {
  if (!(t = O3.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new yd({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
bi.prototype = yd.prototype;
function yd(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
yd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function _3(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var b0;
function S3(e, t) {
  var r = Zo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (b0 = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Zo(e, Math.max(0, t + i - 1))[0];
}
function Tv(e, t) {
  var r = Zo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const jv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: b3,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Tv(e * 100, t),
  r: Tv,
  s: S3,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Cv(e) {
  return e;
}
var Mv = Array.prototype.map, kv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function A3(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Cv : x3(Mv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Cv : w3(Mv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = bi(f);
    var d = f.fill, p = f.align, v = f.sign, y = f.symbol, h = f.zero, g = f.width, w = f.comma, b = f.precision, O = f.trim, m = f.type;
    m === "n" ? (w = !0, m = "g") : jv[m] || (b === void 0 && (b = 12), O = !0, m = "g"), (h || d === "0" && p === "=") && (h = !0, d = "0", p = "=");
    var x = y === "$" ? r : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", _ = y === "$" ? n : /[%p]/.test(m) ? o : "", P = jv[m], $ = /[defgprs%]/.test(m);
    b = b === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function M(T) {
      var j = x, N = _, D, I, R;
      if (m === "c")
        N = P(T) + N, T = "";
      else {
        T = +T;
        var F = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? c : P(Math.abs(T), b), O && (T = _3(T)), F && +T == 0 && v !== "+" && (F = !1), j = (F ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + j, N = (m === "s" ? kv[8 + b0 / 3] : "") + N + (F && v === "(" ? ")" : ""), $) {
          for (D = -1, I = T.length; ++D < I; )
            if (R = T.charCodeAt(D), 48 > R || R > 57) {
              N = (R === 46 ? a + T.slice(D + 1) : T.slice(D)) + N, T = T.slice(0, D);
              break;
            }
        }
      }
      w && !h && (T = t(T, 1 / 0));
      var U = j.length + T.length + N.length, q = U < g ? new Array(g - U + 1).join(d) : "";
      switch (w && h && (T = t(q + T, q.length ? g - N.length : 1 / 0), q = ""), p) {
        case "<":
          T = j + T + N + q;
          break;
        case "=":
          T = j + q + T + N;
          break;
        case "^":
          T = q.slice(0, U = q.length >> 1) + j + T + N + q.slice(U);
          break;
        default:
          T = q + j + T + N;
          break;
      }
      return i(T);
    }
    return M.toString = function() {
      return f + "";
    }, M;
  }
  function l(f, d) {
    var p = u((f = bi(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(Dn(d) / 3))) * 3, y = Math.pow(10, -v), h = kv[8 + v / 3];
    return function(g) {
      return p(y * g) + h;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var mo, md, x0;
P3({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function P3(e) {
  return mo = A3(e), md = mo.format, x0 = mo.formatPrefix, mo;
}
function E3(e) {
  return Math.max(0, -Dn(Math.abs(e)));
}
function $3(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Dn(t) / 3))) * 3 - Dn(Math.abs(e)));
}
function T3(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Dn(t) - Dn(e)) + 1;
}
function w0(e, t, r, n) {
  var a = _l(e, t, r), i;
  switch (n = bi(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = $3(a, o)) && (n.precision = i), x0(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = T3(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = E3(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return md(n);
}
function jr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return wl(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return w0(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], s = n[i], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = a, a = i, i = u); l-- > 0; ) {
      if (u = Ol(o, s, r), u === c)
        return n[a] = o, n[i] = s, t(n);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function Jo() {
  var e = vd();
  return e.copy = function() {
    return Ji(e, Jo());
  }, xt.apply(e, arguments), jr(e);
}
function O0(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Xo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return O0(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Xo) : [0, 1], jr(r);
}
function _0(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function Iv(e) {
  return Math.log(e);
}
function Nv(e) {
  return Math.exp(e);
}
function j3(e) {
  return -Math.log(-e);
}
function C3(e) {
  return -Math.exp(-e);
}
function M3(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function k3(e) {
  return e === 10 ? M3 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function I3(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Rv(e) {
  return (t, r) => -e(-t, r);
}
function gd(e) {
  const t = e(Iv, Nv), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = I3(n), i = k3(n), r()[0] < 0 ? (a = Rv(a), i = Rv(i), e(j3, C3)) : e(Iv, Nv), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let u = c[0], l = c[c.length - 1];
    const f = l < u;
    f && ([u, l] = [l, u]);
    let d = a(u), p = a(l), v, y;
    const h = s == null ? 10 : +s;
    let g = [];
    if (!(n % 1) && p - d < h) {
      if (d = Math.floor(d), p = Math.ceil(p), u > 0) {
        for (; d <= p; ++d)
          for (v = 1; v < n; ++v)
            if (y = d < 0 ? v / i(-d) : v * i(d), !(y < u)) {
              if (y > l) break;
              g.push(y);
            }
      } else for (; d <= p; ++d)
        for (v = n - 1; v >= 1; --v)
          if (y = d > 0 ? v / i(-d) : v * i(d), !(y < u)) {
            if (y > l) break;
            g.push(y);
          }
      g.length * 2 < h && (g = wl(u, l, h));
    } else
      g = wl(d, p, Math.min(p - d, h)).map(i);
    return f ? g.reverse() : g;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = bi(c)).precision == null && (c.trim = !0), c = md(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / i(Math.round(a(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(_0(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function S0() {
  const e = gd(nc()).domain([1, 10]);
  return e.copy = () => Ji(e, S0()).base(e.base()), xt.apply(e, arguments), e;
}
function Dv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Lv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function bd(e) {
  var t = 1, r = e(Dv(t), Lv(t));
  return r.constant = function(n) {
    return arguments.length ? e(Dv(t = +n), Lv(t)) : t;
  }, jr(r);
}
function A0() {
  var e = bd(nc());
  return e.copy = function() {
    return Ji(e, A0()).constant(e.constant());
  }, xt.apply(e, arguments);
}
function Bv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function N3(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function R3(e) {
  return e < 0 ? -e * e : e * e;
}
function xd(e) {
  var t = e(Xe, Xe), r = 1;
  function n() {
    return r === 1 ? e(Xe, Xe) : r === 0.5 ? e(N3, R3) : e(Bv(r), Bv(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, jr(t);
}
function wd() {
  var e = xd(nc());
  return e.copy = function() {
    return Ji(e, wd()).exponent(e.exponent());
  }, xt.apply(e, arguments), e;
}
function D3() {
  return wd.apply(null, arguments).exponent(0.5);
}
function Fv(e) {
  return Math.sign(e) * e * e;
}
function L3(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function P0() {
  var e = vd(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = L3(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(Fv(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Xo)).map(Fv)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return P0(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, xt.apply(a, arguments), jr(a);
}
function E0() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = UB(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[Xi(r, o)];
  }
  return i.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(xr), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return E0().domain(e).range(t).unknown(n);
  }, xt.apply(i, arguments);
}
function $0() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(c) {
    return c != null && c <= c ? a[Xi(n, c, 0, r)] : i;
  }
  function s() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (a = Array.from(c)).length - 1, s()) : a.slice();
  }, o.invertExtent = function(c) {
    var u = a.indexOf(c);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, o.unknown = function(c) {
    return arguments.length && (i = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return $0().domain([e, t]).range(a).unknown(i);
  }, xt.apply(jr(o), arguments);
}
function T0() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[Xi(e, i, 0, n)] : r;
  }
  return a.domain = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(e.length, t.length - 1), a) : e.slice();
  }, a.range = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(e.length, t.length - 1), a) : t.slice();
  }, a.invertExtent = function(i) {
    var o = t.indexOf(i);
    return [e[o - 1], e[o]];
  }, a.unknown = function(i) {
    return arguments.length ? (r = i, a) : r;
  }, a.copy = function() {
    return T0().domain(e).range(t).unknown(r);
  }, xt.apply(a, arguments);
}
const fu = /* @__PURE__ */ new Date(), du = /* @__PURE__ */ new Date();
function Re(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), s = a.ceil(i);
    return i - o < s - i ? o : s;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, s) => {
    const c = [];
    if (i = a.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < o) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+i)), t(i, s), e(i);
    while (u < i && i < o);
    return c;
  }, a.filter = (i) => Re((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (fu.setTime(+i), du.setTime(+o), e(fu), e(du), Math.floor(r(fu, du))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const Qo = Re(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Qo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Re((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Qo);
Qo.range;
const Kt = 1e3, yt = Kt * 60, Vt = yt * 60, tr = Vt * 24, Od = tr * 7, zv = tr * 30, pu = tr * 365, Yr = Re((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCSeconds());
Yr.range;
const _d = Re((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kt);
}, (e, t) => {
  e.setTime(+e + t * yt);
}, (e, t) => (t - e) / yt, (e) => e.getMinutes());
_d.range;
const Sd = Re((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * yt);
}, (e, t) => (t - e) / yt, (e) => e.getUTCMinutes());
Sd.range;
const Ad = Re((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kt - e.getMinutes() * yt);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getHours());
Ad.range;
const Pd = Re((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getUTCHours());
Pd.range;
const Qi = Re(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * yt) / tr,
  (e) => e.getDate() - 1
);
Qi.range;
const ac = Re((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / tr, (e) => e.getUTCDate() - 1);
ac.range;
const j0 = Re((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / tr, (e) => Math.floor(e / tr));
j0.range;
function ln(e) {
  return Re((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * yt) / Od);
}
const ic = ln(0), es = ln(1), B3 = ln(2), F3 = ln(3), Ln = ln(4), z3 = ln(5), W3 = ln(6);
ic.range;
es.range;
B3.range;
F3.range;
Ln.range;
z3.range;
W3.range;
function fn(e) {
  return Re((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Od);
}
const oc = fn(0), ts = fn(1), U3 = fn(2), G3 = fn(3), Bn = fn(4), H3 = fn(5), q3 = fn(6);
oc.range;
ts.range;
U3.range;
G3.range;
Bn.range;
H3.range;
q3.range;
const Ed = Re((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ed.range;
const $d = Re((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
$d.range;
const rr = Re((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
rr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Re((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
rr.range;
const nr = Re((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
nr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Re((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
nr.range;
function C0(e, t, r, n, a, i) {
  const o = [
    [Yr, 1, Kt],
    [Yr, 5, 5 * Kt],
    [Yr, 15, 15 * Kt],
    [Yr, 30, 30 * Kt],
    [i, 1, yt],
    [i, 5, 5 * yt],
    [i, 15, 15 * yt],
    [i, 30, 30 * yt],
    [a, 1, Vt],
    [a, 3, 3 * Vt],
    [a, 6, 6 * Vt],
    [a, 12, 12 * Vt],
    [n, 1, tr],
    [n, 2, 2 * tr],
    [r, 1, Od],
    [t, 1, zv],
    [t, 3, 3 * zv],
    [e, 1, pu]
  ];
  function s(u, l, f) {
    const d = l < u;
    d && ([u, l] = [l, u]);
    const p = f && typeof f.range == "function" ? f : c(u, l, f), v = p ? p.range(u, +l + 1) : [];
    return d ? v.reverse() : v;
  }
  function c(u, l, f) {
    const d = Math.abs(l - u) / f, p = ld(([, , h]) => h).right(o, d);
    if (p === o.length) return e.every(_l(u / pu, l / pu, f));
    if (p === 0) return Qo.every(Math.max(_l(u, l, f), 1));
    const [v, y] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(y);
  }
  return [s, c];
}
const [K3, V3] = C0(nr, $d, oc, j0, Pd, Sd), [Y3, X3] = C0(rr, Ed, ic, Qi, Ad, _d);
function hu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function vu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ra(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Z3(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, u = Da(a), l = La(a), f = Da(i), d = La(i), p = Da(o), v = La(o), y = Da(s), h = La(s), g = Da(c), w = La(c), b = {
    a: F,
    A: U,
    b: q,
    B: E,
    c: null,
    d: Kv,
    e: Kv,
    f: xF,
    g: jF,
    G: MF,
    H: mF,
    I: gF,
    j: bF,
    L: M0,
    m: wF,
    M: OF,
    p: k,
    q: L,
    Q: Xv,
    s: Zv,
    S: _F,
    u: SF,
    U: AF,
    V: PF,
    w: EF,
    W: $F,
    x: null,
    X: null,
    y: TF,
    Y: CF,
    Z: kF,
    "%": Yv
  }, O = {
    a: W,
    A: Y,
    b: J,
    B: ne,
    c: null,
    d: Vv,
    e: Vv,
    f: DF,
    g: KF,
    G: YF,
    H: IF,
    I: NF,
    j: RF,
    L: I0,
    m: LF,
    M: BF,
    p: oe,
    q: Q,
    Q: Xv,
    s: Zv,
    S: FF,
    u: zF,
    U: WF,
    V: UF,
    w: GF,
    W: HF,
    x: null,
    X: null,
    y: qF,
    Y: VF,
    Z: XF,
    "%": Yv
  }, m = {
    a: M,
    A: T,
    b: j,
    B: N,
    c: D,
    d: Hv,
    e: Hv,
    f: pF,
    g: Gv,
    G: Uv,
    H: qv,
    I: qv,
    j: uF,
    L: dF,
    m: cF,
    M: lF,
    p: $,
    q: sF,
    Q: vF,
    s: yF,
    S: fF,
    u: rF,
    U: nF,
    V: aF,
    w: tF,
    W: iF,
    x: I,
    X: R,
    y: Gv,
    Y: Uv,
    Z: oF,
    "%": hF
  };
  b.x = x(r, b), b.X = x(n, b), b.c = x(t, b), O.x = x(r, O), O.X = x(n, O), O.c = x(t, O);
  function x(z, V) {
    return function(te) {
      var C = [], le = -1, K = 0, Oe = z.length, $e, Fe, dr;
      for (te instanceof Date || (te = /* @__PURE__ */ new Date(+te)); ++le < Oe; )
        z.charCodeAt(le) === 37 && (C.push(z.slice(K, le)), (Fe = Wv[$e = z.charAt(++le)]) != null ? $e = z.charAt(++le) : Fe = $e === "e" ? " " : "0", (dr = V[$e]) && ($e = dr(te, Fe)), C.push($e), K = le + 1);
      return C.push(z.slice(K, le)), C.join("");
    };
  }
  function _(z, V) {
    return function(te) {
      var C = Ra(1900, void 0, 1), le = P(C, z, te += "", 0), K, Oe;
      if (le != te.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (V && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (K = vu(Ra(C.y, 0, 1)), Oe = K.getUTCDay(), K = Oe > 4 || Oe === 0 ? ts.ceil(K) : ts(K), K = ac.offset(K, (C.V - 1) * 7), C.y = K.getUTCFullYear(), C.m = K.getUTCMonth(), C.d = K.getUTCDate() + (C.w + 6) % 7) : (K = hu(Ra(C.y, 0, 1)), Oe = K.getDay(), K = Oe > 4 || Oe === 0 ? es.ceil(K) : es(K), K = Qi.offset(K, (C.V - 1) * 7), C.y = K.getFullYear(), C.m = K.getMonth(), C.d = K.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), Oe = "Z" in C ? vu(Ra(C.y, 0, 1)).getUTCDay() : hu(Ra(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (Oe + 5) % 7 : C.w + C.U * 7 - (Oe + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, vu(C)) : hu(C);
    };
  }
  function P(z, V, te, C) {
    for (var le = 0, K = V.length, Oe = te.length, $e, Fe; le < K; ) {
      if (C >= Oe) return -1;
      if ($e = V.charCodeAt(le++), $e === 37) {
        if ($e = V.charAt(le++), Fe = m[$e in Wv ? V.charAt(le++) : $e], !Fe || (C = Fe(z, te, C)) < 0) return -1;
      } else if ($e != te.charCodeAt(C++))
        return -1;
    }
    return C;
  }
  function $(z, V, te) {
    var C = u.exec(V.slice(te));
    return C ? (z.p = l.get(C[0].toLowerCase()), te + C[0].length) : -1;
  }
  function M(z, V, te) {
    var C = p.exec(V.slice(te));
    return C ? (z.w = v.get(C[0].toLowerCase()), te + C[0].length) : -1;
  }
  function T(z, V, te) {
    var C = f.exec(V.slice(te));
    return C ? (z.w = d.get(C[0].toLowerCase()), te + C[0].length) : -1;
  }
  function j(z, V, te) {
    var C = g.exec(V.slice(te));
    return C ? (z.m = w.get(C[0].toLowerCase()), te + C[0].length) : -1;
  }
  function N(z, V, te) {
    var C = y.exec(V.slice(te));
    return C ? (z.m = h.get(C[0].toLowerCase()), te + C[0].length) : -1;
  }
  function D(z, V, te) {
    return P(z, t, V, te);
  }
  function I(z, V, te) {
    return P(z, r, V, te);
  }
  function R(z, V, te) {
    return P(z, n, V, te);
  }
  function F(z) {
    return o[z.getDay()];
  }
  function U(z) {
    return i[z.getDay()];
  }
  function q(z) {
    return c[z.getMonth()];
  }
  function E(z) {
    return s[z.getMonth()];
  }
  function k(z) {
    return a[+(z.getHours() >= 12)];
  }
  function L(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function W(z) {
    return o[z.getUTCDay()];
  }
  function Y(z) {
    return i[z.getUTCDay()];
  }
  function J(z) {
    return c[z.getUTCMonth()];
  }
  function ne(z) {
    return s[z.getUTCMonth()];
  }
  function oe(z) {
    return a[+(z.getUTCHours() >= 12)];
  }
  function Q(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var V = x(z += "", b);
      return V.toString = function() {
        return z;
      }, V;
    },
    parse: function(z) {
      var V = _(z += "", !1);
      return V.toString = function() {
        return z;
      }, V;
    },
    utcFormat: function(z) {
      var V = x(z += "", O);
      return V.toString = function() {
        return z;
      }, V;
    },
    utcParse: function(z) {
      var V = _(z += "", !0);
      return V.toString = function() {
        return z;
      }, V;
    }
  };
}
var Wv = { "-": "", _: " ", 0: "0" }, Be = /^\s*\d+/, J3 = /^%/, Q3 = /[\\^$*+?|[\]().{}]/g;
function fe(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function eF(e) {
  return e.replace(Q3, "\\$&");
}
function Da(e) {
  return new RegExp("^(?:" + e.map(eF).join("|") + ")", "i");
}
function La(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function tF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function rF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function nF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function aF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function iF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Uv(e, t, r) {
  var n = Be.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Gv(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function oF(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function sF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function cF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Hv(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function uF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function qv(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function lF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function fF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function dF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function pF(e, t, r) {
  var n = Be.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function hF(e, t, r) {
  var n = J3.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function vF(e, t, r) {
  var n = Be.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function yF(e, t, r) {
  var n = Be.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Kv(e, t) {
  return fe(e.getDate(), t, 2);
}
function mF(e, t) {
  return fe(e.getHours(), t, 2);
}
function gF(e, t) {
  return fe(e.getHours() % 12 || 12, t, 2);
}
function bF(e, t) {
  return fe(1 + Qi.count(rr(e), e), t, 3);
}
function M0(e, t) {
  return fe(e.getMilliseconds(), t, 3);
}
function xF(e, t) {
  return M0(e, t) + "000";
}
function wF(e, t) {
  return fe(e.getMonth() + 1, t, 2);
}
function OF(e, t) {
  return fe(e.getMinutes(), t, 2);
}
function _F(e, t) {
  return fe(e.getSeconds(), t, 2);
}
function SF(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function AF(e, t) {
  return fe(ic.count(rr(e) - 1, e), t, 2);
}
function k0(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Ln(e) : Ln.ceil(e);
}
function PF(e, t) {
  return e = k0(e), fe(Ln.count(rr(e), e) + (rr(e).getDay() === 4), t, 2);
}
function EF(e) {
  return e.getDay();
}
function $F(e, t) {
  return fe(es.count(rr(e) - 1, e), t, 2);
}
function TF(e, t) {
  return fe(e.getFullYear() % 100, t, 2);
}
function jF(e, t) {
  return e = k0(e), fe(e.getFullYear() % 100, t, 2);
}
function CF(e, t) {
  return fe(e.getFullYear() % 1e4, t, 4);
}
function MF(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Ln(e) : Ln.ceil(e), fe(e.getFullYear() % 1e4, t, 4);
}
function kF(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + fe(t / 60 | 0, "0", 2) + fe(t % 60, "0", 2);
}
function Vv(e, t) {
  return fe(e.getUTCDate(), t, 2);
}
function IF(e, t) {
  return fe(e.getUTCHours(), t, 2);
}
function NF(e, t) {
  return fe(e.getUTCHours() % 12 || 12, t, 2);
}
function RF(e, t) {
  return fe(1 + ac.count(nr(e), e), t, 3);
}
function I0(e, t) {
  return fe(e.getUTCMilliseconds(), t, 3);
}
function DF(e, t) {
  return I0(e, t) + "000";
}
function LF(e, t) {
  return fe(e.getUTCMonth() + 1, t, 2);
}
function BF(e, t) {
  return fe(e.getUTCMinutes(), t, 2);
}
function FF(e, t) {
  return fe(e.getUTCSeconds(), t, 2);
}
function zF(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function WF(e, t) {
  return fe(oc.count(nr(e) - 1, e), t, 2);
}
function N0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function UF(e, t) {
  return e = N0(e), fe(Bn.count(nr(e), e) + (nr(e).getUTCDay() === 4), t, 2);
}
function GF(e) {
  return e.getUTCDay();
}
function HF(e, t) {
  return fe(ts.count(nr(e) - 1, e), t, 2);
}
function qF(e, t) {
  return fe(e.getUTCFullYear() % 100, t, 2);
}
function KF(e, t) {
  return e = N0(e), fe(e.getUTCFullYear() % 100, t, 2);
}
function VF(e, t) {
  return fe(e.getUTCFullYear() % 1e4, t, 4);
}
function YF(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Bn(e) : Bn.ceil(e), fe(e.getUTCFullYear() % 1e4, t, 4);
}
function XF() {
  return "+0000";
}
function Yv() {
  return "%";
}
function Xv(e) {
  return +e;
}
function Zv(e) {
  return Math.floor(+e / 1e3);
}
var mn, R0, D0;
ZF({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ZF(e) {
  return mn = Z3(e), R0 = mn.format, mn.parse, D0 = mn.utcFormat, mn.utcParse, mn;
}
function JF(e) {
  return new Date(e);
}
function QF(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Td(e, t, r, n, a, i, o, s, c, u) {
  var l = vd(), f = l.invert, d = l.domain, p = u(".%L"), v = u(":%S"), y = u("%I:%M"), h = u("%I %p"), g = u("%a %d"), w = u("%b %d"), b = u("%B"), O = u("%Y");
  function m(x) {
    return (c(x) < x ? p : s(x) < x ? v : o(x) < x ? y : i(x) < x ? h : n(x) < x ? a(x) < x ? g : w : r(x) < x ? b : O)(x);
  }
  return l.invert = function(x) {
    return new Date(f(x));
  }, l.domain = function(x) {
    return arguments.length ? d(Array.from(x, QF)) : d().map(JF);
  }, l.ticks = function(x) {
    var _ = d();
    return e(_[0], _[_.length - 1], x ?? 10);
  }, l.tickFormat = function(x, _) {
    return _ == null ? m : u(_);
  }, l.nice = function(x) {
    var _ = d();
    return (!x || typeof x.range != "function") && (x = t(_[0], _[_.length - 1], x ?? 10)), x ? d(_0(_, x)) : l;
  }, l.copy = function() {
    return Ji(l, Td(e, t, r, n, a, i, o, s, c, u));
  }, l;
}
function ez() {
  return xt.apply(Td(Y3, X3, rr, Ed, ic, Qi, Ad, _d, Yr, R0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function tz() {
  return xt.apply(Td(K3, V3, nr, $d, oc, ac, Pd, Sd, Yr, D0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function sc() {
  var e = 0, t = 1, r, n, a, i, o = Xe, s = !1, c;
  function u(f) {
    return f == null || isNaN(f = +f) ? c : o(a === 0 ? 0.5 : (f = (i(f) - r) * a, s ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), u) : [e, t];
  }, u.clamp = function(f) {
    return arguments.length ? (s = !!f, u) : s;
  }, u.interpolator = function(f) {
    return arguments.length ? (o = f, u) : o;
  };
  function l(f) {
    return function(d) {
      var p, v;
      return arguments.length ? ([p, v] = d, o = f(p, v), u) : [o(0), o(1)];
    };
  }
  return u.range = l(ba), u.rangeRound = l(hd), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), u;
  };
}
function Cr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function L0() {
  var e = jr(sc()(Xe));
  return e.copy = function() {
    return Cr(e, L0());
  }, ur.apply(e, arguments);
}
function B0() {
  var e = gd(sc()).domain([1, 10]);
  return e.copy = function() {
    return Cr(e, B0()).base(e.base());
  }, ur.apply(e, arguments);
}
function F0() {
  var e = bd(sc());
  return e.copy = function() {
    return Cr(e, F0()).constant(e.constant());
  }, ur.apply(e, arguments);
}
function jd() {
  var e = xd(sc());
  return e.copy = function() {
    return Cr(e, jd()).exponent(e.exponent());
  }, ur.apply(e, arguments);
}
function rz() {
  return jd.apply(null, arguments).exponent(0.5);
}
function z0() {
  var e = [], t = Xe;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Xi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(xr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => WB(e, i / n));
  }, r.copy = function() {
    return z0(t).domain(e);
  }, ur.apply(r, arguments);
}
function cc() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, s, c, u = Xe, l, f = !1, d;
  function p(y) {
    return isNaN(y = +y) ? d : (y = 0.5 + ((y = +l(y)) - i) * (n * y < n * i ? s : c), u(f ? Math.max(0, Math.min(1, y)) : y));
  }
  p.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, a = l(e = +e), i = l(t = +t), o = l(r = +r), s = a === i ? 0 : 0.5 / (i - a), c = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(y) {
    return arguments.length ? (f = !!y, p) : f;
  }, p.interpolator = function(y) {
    return arguments.length ? (u = y, p) : u;
  };
  function v(y) {
    return function(h) {
      var g, w, b;
      return arguments.length ? ([g, w, b] = h, u = h3(y, [g, w, b]), p) : [u(0), u(0.5), u(1)];
    };
  }
  return p.range = v(ba), p.rangeRound = v(hd), p.unknown = function(y) {
    return arguments.length ? (d = y, p) : d;
  }, function(y) {
    return l = y, a = y(e), i = y(t), o = y(r), s = a === i ? 0 : 0.5 / (i - a), c = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function W0() {
  var e = jr(cc()(Xe));
  return e.copy = function() {
    return Cr(e, W0());
  }, ur.apply(e, arguments);
}
function U0() {
  var e = gd(cc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Cr(e, U0()).base(e.base());
  }, ur.apply(e, arguments);
}
function G0() {
  var e = bd(cc());
  return e.copy = function() {
    return Cr(e, G0()).constant(e.constant());
  }, ur.apply(e, arguments);
}
function Cd() {
  var e = xd(cc());
  return e.copy = function() {
    return Cr(e, Cd()).exponent(e.exponent());
  }, ur.apply(e, arguments);
}
function nz() {
  return Cd.apply(null, arguments).exponent(0.5);
}
const Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: vi,
  scaleDiverging: W0,
  scaleDivergingLog: U0,
  scaleDivergingPow: Cd,
  scaleDivergingSqrt: nz,
  scaleDivergingSymlog: G0,
  scaleIdentity: O0,
  scaleImplicit: Sl,
  scaleLinear: Jo,
  scaleLog: S0,
  scaleOrdinal: fd,
  scalePoint: Za,
  scalePow: wd,
  scaleQuantile: E0,
  scaleQuantize: $0,
  scaleRadial: P0,
  scaleSequential: L0,
  scaleSequentialLog: B0,
  scaleSequentialPow: jd,
  scaleSequentialQuantile: z0,
  scaleSequentialSqrt: rz,
  scaleSequentialSymlog: F0,
  scaleSqrt: D3,
  scaleSymlog: A0,
  scaleThreshold: T0,
  scaleTime: ez,
  scaleUtc: tz,
  tickFormat: w0
}, Symbol.toStringTag, { value: "Module" }));
var az = la;
function iz(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n], o = t(i);
    if (o != null && (s === void 0 ? o === o && !az(o) : r(o, s)))
      var s = o, c = i;
  }
  return c;
}
var uc = iz;
function oz(e, t) {
  return e > t;
}
var H0 = oz, sz = uc, cz = H0, uz = ga;
function lz(e) {
  return e && e.length ? sz(e, uz, cz) : void 0;
}
var fz = lz;
const mr = /* @__PURE__ */ me(fz);
function dz(e, t) {
  return e < t;
}
var q0 = dz, pz = uc, hz = q0, vz = ga;
function yz(e) {
  return e && e.length ? pz(e, vz, hz) : void 0;
}
var mz = yz;
const lc = /* @__PURE__ */ me(mz);
var gz = Vf, bz = zt, xz = e0, wz = rt;
function Oz(e, t) {
  var r = wz(e) ? gz : xz;
  return r(e, bz(t));
}
var _z = Oz, Sz = Jb, Az = _z;
function Pz(e, t) {
  return Sz(Az(e, t), 1);
}
var Ez = Pz;
const $z = /* @__PURE__ */ me(Ez);
var Tz = od;
function jz(e, t) {
  return Tz(e, t);
}
var Cz = jz;
const ar = /* @__PURE__ */ me(Cz);
var xa = 1e9, Mz = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, kd, Te = !0, bt = "[DecimalError] ", en = bt + "Invalid argument: ", Md = bt + "Exponent out of range: ", wa = Math.floor, Gr = Math.pow, kz = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ot, De = 1e7, Pe = 7, K0 = 9007199254740991, rs = wa(K0 / Pe), ee = {};
ee.absoluteValue = ee.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ee.comparedTo = ee.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
ee.decimalPlaces = ee.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Pe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ee.dividedBy = ee.div = function(e) {
  return Jt(this, new this.constructor(e));
};
ee.dividedToIntegerBy = ee.idiv = function(e) {
  var t = this, r = t.constructor;
  return we(Jt(t, new r(e), 0, 1), r.precision);
};
ee.equals = ee.eq = function(e) {
  return !this.cmp(e);
};
ee.exponent = function() {
  return Me(this);
};
ee.greaterThan = ee.gt = function(e) {
  return this.cmp(e) > 0;
};
ee.greaterThanOrEqualTo = ee.gte = function(e) {
  return this.cmp(e) >= 0;
};
ee.isInteger = ee.isint = function() {
  return this.e > this.d.length - 2;
};
ee.isNegative = ee.isneg = function() {
  return this.s < 0;
};
ee.isPositive = ee.ispos = function() {
  return this.s > 0;
};
ee.isZero = function() {
  return this.s === 0;
};
ee.lessThan = ee.lt = function(e) {
  return this.cmp(e) < 0;
};
ee.lessThanOrEqualTo = ee.lte = function(e) {
  return this.cmp(e) < 1;
};
ee.logarithm = ee.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(ot)) throw Error(bt + "NaN");
  if (r.s < 1) throw Error(bt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(ot) ? new n(0) : (Te = !1, t = Jt(xi(r, i), xi(e, i), i), Te = !0, we(t, a));
};
ee.minus = ee.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? X0(t, e) : V0(t, (e.s = -e.s, e));
};
ee.modulo = ee.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(bt + "NaN");
  return r.s ? (Te = !1, t = Jt(r, e, 0, 1).times(e), Te = !0, r.minus(t)) : we(new n(r), a);
};
ee.naturalExponential = ee.exp = function() {
  return Y0(this);
};
ee.naturalLogarithm = ee.ln = function() {
  return xi(this);
};
ee.negated = ee.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ee.plus = ee.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? V0(t, e) : X0(t, (e.s = -e.s, e));
};
ee.precision = ee.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(en + e);
  if (t = Me(a) + 1, n = a.d.length - 1, r = n * Pe + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ee.squareRoot = ee.sqrt = function() {
  var e, t, r, n, a, i, o, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(bt + "NaN");
  }
  for (e = Me(s), Te = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = kt(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = wa((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(a.toString()), r = c.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(Jt(s, i, o + 2)).times(0.5), kt(i.d).slice(0, o) === (t = kt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (we(i, r + 1, 0), i.times(i).eq(s)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Te = !0, we(n, r);
};
ee.times = ee.mul = function(e) {
  var t, r, n, a, i, o, s, c, u, l = this, f = l.constructor, d = l.d, p = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, c = d.length, u = p.length, c < u && (i = d, d = p, p = i, o = c, c = u, u = o), i = [], o = c + u, n = o; n--; ) i.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, a = c + n; a > n; )
      s = i[a] + p[n] * d[a - n - 1] + t, i[a--] = s % De | 0, t = s / De | 0;
    i[a] = (i[a] + t) % De | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, Te ? we(e, f.precision) : e;
};
ee.toDecimalPlaces = ee.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Lt(e, 0, xa), t === void 0 ? t = n.rounding : Lt(t, 0, 8), we(r, e + Me(r) + 1, t));
};
ee.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = on(n, !0) : (Lt(e, 0, xa), t === void 0 ? t = a.rounding : Lt(t, 0, 8), n = we(new a(n), e + 1, t), r = on(n, !0, e + 1)), r;
};
ee.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? on(a) : (Lt(e, 0, xa), t === void 0 ? t = i.rounding : Lt(t, 0, 8), n = we(new i(a), e + Me(a) + 1, t), r = on(n.abs(), !1, e + Me(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
ee.toInteger = ee.toint = function() {
  var e = this, t = e.constructor;
  return we(new t(e), Me(e) + 1, t.rounding);
};
ee.toNumber = function() {
  return +this;
};
ee.toPower = ee.pow = function(e) {
  var t, r, n, a, i, o, s = this, c = s.constructor, u = 12, l = +(e = new c(e));
  if (!e.s) return new c(ot);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(bt + "Infinity");
    return s;
  }
  if (s.eq(ot)) return s;
  if (n = c.precision, e.eq(ot)) return we(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = s.s, o) {
    if ((r = l < 0 ? -l : l) <= K0) {
      for (a = new c(ot), t = Math.ceil(n / Pe + 4), Te = !1; r % 2 && (a = a.times(s), ey(a.d, t)), r = wa(r / 2), r !== 0; )
        s = s.times(s), ey(s.d, t);
      return Te = !0, e.s < 0 ? new c(ot).div(a) : we(a, n);
    }
  } else if (i < 0) throw Error(bt + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Te = !1, a = e.times(xi(s, n + u)), Te = !0, a = Y0(a), a.s = i, a;
};
ee.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = Me(a), n = on(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Lt(e, 1, xa), t === void 0 ? t = i.rounding : Lt(t, 0, 8), a = we(new i(a), e, t), r = Me(a), n = on(a, e <= r || r <= i.toExpNeg, e)), n;
};
ee.toSignificantDigits = ee.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Lt(e, 1, xa), t === void 0 ? t = n.rounding : Lt(t, 0, 8)), we(new n(r), e, t);
};
ee.toString = ee.valueOf = ee.val = ee.toJSON = ee[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Me(e), r = e.constructor;
  return on(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function V0(e, t) {
  var r, n, a, i, o, s, c, u, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Te ? we(t, f) : t;
  if (c = e.d, u = t.d, o = e.e, a = t.e, c = c.slice(), i = o - a, i) {
    for (i < 0 ? (n = c, i = -i, s = u.length) : (n = u, a = o, s = c.length), o = Math.ceil(f / Pe), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, i = u.length, s - i < 0 && (i = s, n = u, u = c, c = n), r = 0; i; )
    r = (c[--i] = c[i] + u[i] + r) / De | 0, c[i] %= De;
  for (r && (c.unshift(r), ++a), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = a, Te ? we(t, f) : t;
}
function Lt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(en + e);
}
function kt(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = Pe - n.length, r && (i += vr(r)), i += n;
    o = e[t], n = o + "", r = Pe - n.length, r && (i += vr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var Jt = /* @__PURE__ */ function() {
  function e(n, a) {
    var i, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      i = n[s] * a + o, n[s] = i % De | 0, o = i / De | 0;
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var s, c;
    if (i != o)
      c = i > o ? 1 : -1;
    else
      for (s = c = 0; s < i; s++)
        if (n[s] != a[s]) {
          c = n[s] > a[s] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * De + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var s, c, u, l, f, d, p, v, y, h, g, w, b, O, m, x, _, P, $ = n.constructor, M = n.s == a.s ? 1 : -1, T = n.d, j = a.d;
    if (!n.s) return new $(n);
    if (!a.s) throw Error(bt + "Division by zero");
    for (c = n.e - a.e, _ = j.length, m = T.length, p = new $(M), v = p.d = [], u = 0; j[u] == (T[u] || 0); ) ++u;
    if (j[u] > (T[u] || 0) && --c, i == null ? w = i = $.precision : o ? w = i + (Me(n) - Me(a)) + 1 : w = i, w < 0) return new $(0);
    if (w = w / Pe + 2 | 0, u = 0, _ == 1)
      for (l = 0, j = j[0], w++; (u < m || l) && w--; u++)
        b = l * De + (T[u] || 0), v[u] = b / j | 0, l = b % j | 0;
    else {
      for (l = De / (j[0] + 1) | 0, l > 1 && (j = e(j, l), T = e(T, l), _ = j.length, m = T.length), O = _, y = T.slice(0, _), h = y.length; h < _; ) y[h++] = 0;
      P = j.slice(), P.unshift(0), x = j[0], j[1] >= De / 2 && ++x;
      do
        l = 0, s = t(j, y, _, h), s < 0 ? (g = y[0], _ != h && (g = g * De + (y[1] || 0)), l = g / x | 0, l > 1 ? (l >= De && (l = De - 1), f = e(j, l), d = f.length, h = y.length, s = t(f, y, d, h), s == 1 && (l--, r(f, _ < d ? P : j, d))) : (l == 0 && (s = l = 1), f = j.slice()), d = f.length, d < h && f.unshift(0), r(y, f, h), s == -1 && (h = y.length, s = t(j, y, _, h), s < 1 && (l++, r(y, _ < h ? P : j, h))), h = y.length) : s === 0 && (l++, y = [0]), v[u++] = l, s && y[0] ? y[h++] = T[O] || 0 : (y = [T[O]], h = 1);
      while ((O++ < m || y[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), p.e = c, we(p, o ? i + Me(p) + 1 : i);
  };
}();
function Y0(e, t) {
  var r, n, a, i, o, s, c = 0, u = 0, l = e.constructor, f = l.precision;
  if (Me(e) > 16) throw Error(Md + Me(e));
  if (!e.s) return new l(ot);
  for (Te = !1, s = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), u += 5;
  for (n = Math.log(Gr(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new l(ot), l.precision = s; ; ) {
    if (a = we(a.times(e), s), r = r.times(++c), o = i.plus(Jt(a, r, s)), kt(o.d).slice(0, s) === kt(i.d).slice(0, s)) {
      for (; u--; ) i = we(i.times(i), s);
      return l.precision = f, t == null ? (Te = !0, we(i, f)) : i;
    }
    i = o;
  }
}
function Me(e) {
  for (var t = e.e * Pe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function yu(e, t, r) {
  if (t > e.LN10.sd())
    throw Te = !0, r && (e.precision = r), Error(bt + "LN10 precision limit exceeded");
  return we(new e(e.LN10), t);
}
function vr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function xi(e, t) {
  var r, n, a, i, o, s, c, u, l, f = 1, d = 10, p = e, v = p.d, y = p.constructor, h = y.precision;
  if (p.s < 1) throw Error(bt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(ot)) return new y(0);
  if (t == null ? (Te = !1, u = h) : u = t, p.eq(10))
    return t == null && (Te = !0), yu(y, u);
  if (u += d, y.precision = u, r = kt(v), n = r.charAt(0), i = Me(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = kt(p.d), n = r.charAt(0), f++;
    i = Me(p), n > 1 ? (p = new y("0." + r), i++) : p = new y(n + "." + r.slice(1));
  } else
    return c = yu(y, u + 2, h).times(i + ""), p = xi(new y(n + "." + r.slice(1)), u - d).plus(c), y.precision = h, t == null ? (Te = !0, we(p, h)) : p;
  for (s = o = p = Jt(p.minus(ot), p.plus(ot), u), l = we(p.times(p), u), a = 3; ; ) {
    if (o = we(o.times(l), u), c = s.plus(Jt(o, new y(a), u)), kt(c.d).slice(0, u) === kt(s.d).slice(0, u))
      return s = s.times(2), i !== 0 && (s = s.plus(yu(y, u + 2, h).times(i + ""))), s = Jt(s, new y(f), u), y.precision = h, t == null ? (Te = !0, we(s, h)) : s;
    s = c, a += 2;
  }
}
function Qv(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = wa(r / Pe), e.d = [], n = (r + 1) % Pe, r < 0 && (n += Pe), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= Pe; n < a; ) e.d.push(+t.slice(n, n += Pe));
      t = t.slice(n), n = Pe - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Te && (e.e > rs || e.e < -rs)) throw Error(Md + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function we(e, t, r) {
  var n, a, i, o, s, c, u, l, f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += Pe, a = t, u = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Pe), i = f.length, l >= i) return e;
    for (u = i = f[l], o = 1; i >= 10; i /= 10) o++;
    n %= Pe, a = n - Pe + o;
  }
  if (r !== void 0 && (i = Gr(10, o - a - 1), s = u / i % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || u % i, c = r < 4 ? (s || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? u / Gr(10, o - a) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (i = Me(e), f.length = 1, t = t - i - 1, f[0] = Gr(10, (Pe - t % Pe) % Pe), e.e = wa(-t / Pe) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, i = 1, l--) : (f.length = l + 1, i = Gr(10, Pe - n), f[l] = a > 0 ? (u / Gr(10, o - a) % Gr(10, a) | 0) * i : 0), c)
    for (; ; )
      if (l == 0) {
        (f[0] += i) == De && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += i, f[l] != De) break;
        f[l--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Te && (e.e > rs || e.e < -rs))
    throw Error(Md + Me(e));
  return e;
}
function X0(e, t) {
  var r, n, a, i, o, s, c, u, l, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Te ? we(t, p) : t;
  if (c = e.d, f = t.d, n = t.e, u = e.e, c = c.slice(), o = u - n, o) {
    for (l = o < 0, l ? (r = c, o = -o, s = f.length) : (r = f, n = u, s = c.length), a = Math.max(Math.ceil(p / Pe), s) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = c.length, s = f.length, l = a < s, l && (s = a), a = 0; a < s; a++)
      if (c[a] != f[a]) {
        l = c[a] < f[a];
        break;
      }
    o = 0;
  }
  for (l && (r = c, c = f, f = r, t.s = -t.s), s = c.length, a = f.length - s; a > 0; --a) c[s++] = 0;
  for (a = f.length; a > o; ) {
    if (c[--a] < f[a]) {
      for (i = a; i && c[--i] === 0; ) c[i] = De - 1;
      --c[i], c[a] += De;
    }
    c[a] -= f[a];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Te ? we(t, p) : t) : new d(0);
}
function on(e, t, r) {
  var n, a = Me(e), i = kt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + vr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + vr(-a - 1) + i, r && (n = r - o) > 0 && (i += vr(n))) : a >= o ? (i += vr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + vr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += vr(n))), e.s < 0 ? "-" + i : i;
}
function ey(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Z0(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (o.constructor = a, i instanceof a) {
      o.s = i.s, o.e = i.e, o.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(en + i);
      if (i > 0)
        o.s = 1;
      else if (i < 0)
        i = -i, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        o.e = 0, o.d = [i];
        return;
      }
      return Qv(o, i.toString());
    } else if (typeof i != "string")
      throw Error(en + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, kz.test(i)) Qv(o, i);
    else throw Error(en + i);
  }
  if (a.prototype = ee, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = Z0, a.config = a.set = Iz, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function Iz(e) {
  if (!e || typeof e != "object")
    throw Error(bt + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    xa,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < a.length; t += 3)
    if ((n = e[r = a[t]]) !== void 0)
      if (wa(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(en + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(en + r + ": " + n);
  return this;
}
var kd = Z0(Mz);
ot = new kd(1);
const ge = kd;
function Nz(e) {
  return Bz(e) || Lz(e) || Dz(e) || Rz();
}
function Rz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dz(e, t) {
  if (e) {
    if (typeof e == "string") return $l(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $l(e, t);
  }
}
function Lz(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Bz(e) {
  if (Array.isArray(e)) return $l(e);
}
function $l(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Fz = function(t) {
  return t;
}, J0 = {}, Q0 = function(t) {
  return t === J0;
}, ty = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && Q0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, zz = function e(t, r) {
  return t === 1 ? r : ty(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== J0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, ty(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      var l = a.map(function(f) {
        return Q0(f) ? c.shift() : f;
      });
      return r.apply(void 0, Nz(l).concat(c));
    }));
  });
}, fc = function(t) {
  return zz(t.length, t);
}, Tl = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, Wz = fc(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), Uz = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return Fz;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, i.apply(void 0, arguments));
  };
}, jl = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, ex = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, c) {
      return s === r[c];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function Gz(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ge(e).abs().log(10).toNumber()) + 1, t;
}
function Hz(e, t, r) {
  for (var n = new ge(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var qz = fc(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), Kz = fc(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), Vz = fc(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const dc = {
  rangeStep: Hz,
  getDigitCount: Gz,
  interpolateNumber: qz,
  uninterpolateNumber: Kz,
  uninterpolateTruncation: Vz
};
function Cl(e) {
  return Zz(e) || Xz(e) || tx(e) || Yz();
}
function Yz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xz(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Zz(e) {
  if (Array.isArray(e)) return Ml(e);
}
function wi(e, t) {
  return e5(e) || Qz(e, t) || tx(e, t) || Jz();
}
function Jz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tx(e, t) {
  if (e) {
    if (typeof e == "string") return Ml(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ml(e, t);
  }
}
function Ml(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Qz(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (c) {
      a = !0, i = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function e5(e) {
  if (Array.isArray(e)) return e;
}
function rx(e) {
  var t = wi(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function nx(e, t, r) {
  if (e.lte(0))
    return new ge(0);
  var n = dc.getDigitCount(e.toNumber()), a = new ge(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new ge(Math.ceil(i.div(o).toNumber())).add(r).mul(o), c = s.mul(a);
  return t ? c : new ge(Math.ceil(c));
}
function t5(e, t, r) {
  var n = 1, a = new ge(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new ge(10).pow(dc.getDigitCount(e) - 1), a = new ge(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new ge(Math.floor(e)));
  } else e === 0 ? a = new ge(Math.floor((t - 1) / 2)) : r || (a = new ge(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = Uz(Wz(function(c) {
    return a.add(new ge(c - o).mul(n)).toNumber();
  }), Tl);
  return s(0, t);
}
function ax(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ge(0),
      tickMin: new ge(0),
      tickMax: new ge(0)
    };
  var i = nx(new ge(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new ge(0) : (o = new ge(e).add(t).div(2), o = o.sub(new ge(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), c = Math.ceil(new ge(t).sub(o).div(i).toNumber()), u = s + c + 1;
  return u > r ? ax(e, t, r, n, a + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), {
    step: i,
    tickMin: o.sub(new ge(s).mul(i)),
    tickMax: o.add(new ge(c).mul(i))
  });
}
function r5(e) {
  var t = wi(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = rx([r, n]), c = wi(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(Cl(Tl(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Cl(Tl(0, a - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? jl(f) : f;
  }
  if (u === l)
    return t5(u, a, i);
  var d = ax(u, l, o, i), p = d.step, v = d.tickMin, y = d.tickMax, h = dc.rangeStep(v, y.add(new ge(0.1).mul(p)), p);
  return r > n ? jl(h) : h;
}
function n5(e, t) {
  var r = wi(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = rx([n, a]), s = wi(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0)
    return [n, a];
  if (c === u)
    return [c];
  var l = Math.max(t, 2), f = nx(new ge(u).sub(c).div(l - 1), i, 0), d = [].concat(Cl(dc.rangeStep(new ge(c), new ge(u).sub(new ge(0.99).mul(f)), f)), [u]);
  return n > a ? jl(d) : d;
}
var a5 = ex(r5), i5 = ex(n5), o5 = process.env.NODE_ENV === "production", mu = "Invariant failed";
function Qe(e, t) {
  if (o5)
    throw new Error(mu);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(mu, ": ").concat(r) : mu;
  throw new Error(n);
}
var s5 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Fn(e) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fn(e);
}
function ns() {
  return ns = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ns.apply(this, arguments);
}
function c5(e, t) {
  return d5(e) || f5(e, t) || l5(e, t) || u5();
}
function u5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l5(e, t) {
  if (e) {
    if (typeof e == "string") return ry(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ry(e, t);
  }
}
function ry(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function f5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function d5(e) {
  if (Array.isArray(e)) return e;
}
function p5(e, t) {
  if (e == null) return {};
  var r = h5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function h5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function v5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sx(n.key), n);
  }
}
function m5(e, t, r) {
  return t && y5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g5(e, t, r) {
  return t = as(t), b5(e, ix() ? Reflect.construct(t, r || [], as(e).constructor) : t.apply(e, r));
}
function b5(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return x5(e);
}
function x5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ix() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ix = function() {
    return !!e;
  })();
}
function as(e) {
  return as = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, as(e);
}
function w5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kl(e, t);
}
function kl(e, t) {
  return kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, kl(e, t);
}
function ox(e, t, r) {
  return t = sx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sx(e) {
  var t = O5(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function O5(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Oa = /* @__PURE__ */ function(e) {
  function t() {
    return v5(this, t), g5(this, t, arguments);
  }
  return w5(t, e), m5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = p5(n, s5), p = Z(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? Qe(!1, 'ErrorBar requires Axis type property to be "number".') : Qe());
      var v = c.map(function(y) {
        var h = u(y, s), g = h.x, w = h.y, b = h.value, O = h.errorVal;
        if (!O)
          return null;
        var m = [], x, _;
        if (Array.isArray(O)) {
          var P = c5(O, 2);
          x = P[0], _ = P[1];
        } else
          x = _ = O;
        if (i === "vertical") {
          var $ = l.scale, M = w + a, T = M + o, j = M - o, N = $(b - x), D = $(b + _);
          m.push({
            x1: D,
            y1: T,
            x2: D,
            y2: j
          }), m.push({
            x1: N,
            y1: M,
            x2: D,
            y2: M
          }), m.push({
            x1: N,
            y1: T,
            x2: N,
            y2: j
          });
        } else if (i === "horizontal") {
          var I = f.scale, R = g + a, F = R - o, U = R + o, q = I(b - x), E = I(b + _);
          m.push({
            x1: F,
            y1: E,
            x2: U,
            y2: E
          }), m.push({
            x1: R,
            y1: q,
            x2: R,
            y2: E
          }), m.push({
            x1: F,
            y1: q,
            x2: U,
            y2: q
          });
        }
        return /* @__PURE__ */ S.createElement(ue, ns({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(k) {
            return "".concat(k.x1, "-").concat(k.x2, "-").concat(k.y1, "-").concat(k.y2);
          }))
        }, p), m.map(function(k) {
          return /* @__PURE__ */ S.createElement("line", ns({}, k, {
            key: "line-".concat(k.x1, "-").concat(k.x2, "-").concat(k.y1, "-").concat(k.y2)
          }));
        }));
      });
      return /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-errorBars"
      }, v);
    }
  }]);
}(S.Component);
ox(Oa, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
ox(Oa, "displayName", "ErrorBar");
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(n) {
      _5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _5(e, t, r) {
  return t = S5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S5(e) {
  var t = A5(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function A5(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cx = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = it(r, Zt);
  if (!o)
    return null;
  var s = Zt.defaultProps, c = s !== void 0 ? Lr(Lr({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : i === "children" ? u = (n || []).reduce(function(l, f) {
    var d = f.item, p = f.props, v = p.sectors || p.data || [];
    return l.concat(v.map(function(y) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: y.name,
        color: y.fill,
        payload: y
      };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, d = f.type.defaultProps, p = d !== void 0 ? Lr(Lr({}, d), f.props) : {}, v = p.dataKey, y = p.name, h = p.legendType, g = p.hide;
    return {
      inactive: g,
      dataKey: v,
      type: c.iconType || h || "square",
      color: Id(f),
      value: y || v,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), Lr(Lr(Lr({}, c), Zt.getWithHeight(o, a)), {}, {
    payload: u,
    item: o
  });
};
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function ay(e) {
  return T5(e) || $5(e) || E5(e) || P5();
}
function P5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E5(e, t) {
  if (e) {
    if (typeof e == "string") return Il(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Il(e, t);
  }
}
function $5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function T5(e) {
  if (Array.isArray(e)) return Il(e);
}
function Il(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iy(Object(r), !0).forEach(function(n) {
      jn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jn(e, t, r) {
  return t = j5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j5(e) {
  var t = C5(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function C5(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xe(e, t, r) {
  return ie(e) || ie(t) ? r : Ne(t) ? st(e, t, r) : ae(t) ? t(e) : r;
}
function Ja(e, t, r, n) {
  var a = $z(e, function(s) {
    return xe(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return H(s) || parseFloat(s);
    });
    return i.length ? [lc(i), mr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !ie(s);
  }) : a;
  return o.map(function(s) {
    return Ne(s) || s instanceof Date ? s : "";
  });
}
var M5 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var c = i.range, u = 0; u < s; u++) {
      var l = u > 0 ? a[u - 1].coordinate : a[s - 1].coordinate, f = a[u].coordinate, d = u >= s - 1 ? a[0].coordinate : a[u + 1].coordinate, p = void 0;
      if (Ve(f - l) !== Ve(d - f)) {
        var v = [];
        if (Ve(d - f) === Ve(c[1] - c[0])) {
          p = d;
          var y = f + c[1] - c[0];
          v[0] = Math.min(y, (y + l) / 2), v[1] = Math.max(y, (y + l) / 2);
        } else {
          p = l;
          var h = d + c[1] - c[0];
          v[0] = Math.min(f, (h + f) / 2), v[1] = Math.max(f, (h + f) / 2);
        }
        var g = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
        if (t > g[0] && t <= g[1] || t >= v[0] && t <= v[1]) {
          o = a[u].index;
          break;
        }
      } else {
        var w = Math.min(l, d), b = Math.max(l, d);
        if (t > (w + f) / 2 && t <= (b + f) / 2) {
          o = a[u].index;
          break;
        }
      }
    }
  else
    for (var O = 0; O < s; O++)
      if (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O > 0 && O < s - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O === s - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2) {
        o = n[O].index;
        break;
      }
  return o;
}, Id = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? je(je({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, s = i.fill, c;
  switch (a) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : s;
      break;
    default:
      c = s;
      break;
  }
  return c;
}, k5 = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), c = 0, u = s.length; c < u; c++)
    for (var l = i[s[c]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var v = l[f[d]], y = v.items, h = v.cateAxisId, g = y.filter(function(_) {
        return Xt(_.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var w = g[0].type.defaultProps, b = w !== void 0 ? je(je({}, w), g[0].props) : g[0].props, O = b.barSize, m = b[h];
        o[m] || (o[m] = []);
        var x = ie(O) ? r : O;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: ie(x) ? void 0 : Ye(x, n, 0)
        });
      }
    }
  return o;
}, I5 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var u = Ye(r, a, 0, !0), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = a / c, v = o.reduce(function(O, m) {
      return O + m.barSize || 0;
    }, 0);
    v += (c - 1) * u, v >= a && (v -= (c - 1) * u, u = 0), v >= a && p > 0 && (d = !0, p *= 0.9, v = c * p);
    var y = (a - v) / 2 >> 0, h = {
      offset: y - u,
      size: 0
    };
    l = o.reduce(function(O, m) {
      var x = {
        item: m.item,
        position: {
          offset: h.offset + h.size + u,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : m.barSize
        }
      }, _ = [].concat(ay(O), [x]);
      return h = _[_.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
        _.push({
          item: P,
          position: h
        });
      }), _;
    }, f);
  } else {
    var g = Ye(n, a, 0, !0);
    a - 2 * g - (c - 1) * u <= 0 && (u = 0);
    var w = (a - 2 * g - (c - 1) * u) / c;
    w > 1 && (w >>= 0);
    var b = s === +s ? Math.min(w, s) : w;
    l = o.reduce(function(O, m, x) {
      var _ = [].concat(ay(O), [{
        item: m.item,
        position: {
          offset: g + (w + u) * x + (w - b) / 2,
          size: b
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
        _.push({
          item: P,
          position: _[_.length - 1].position
        });
      }), _;
    }, f);
  }
  return l;
}, N5 = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = cx({
    children: i,
    legendWidth: c
  });
  if (u) {
    var l = a || {}, f = l.width, d = l.height, p = u.align, v = u.verticalAlign, y = u.layout;
    if ((y === "vertical" || y === "horizontal" && v === "middle") && p !== "center" && H(t[p]))
      return je(je({}, t), {}, jn({}, p, t[p] + (f || 0)));
    if ((y === "horizontal" || y === "vertical" && p === "center") && v !== "middle" && H(t[v]))
      return je(je({}, t), {}, jn({}, v, t[v] + (d || 0)));
  }
  return t;
}, R5 = function(t, r, n) {
  return ie(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, ux = function(t, r, n, a, i) {
  var o = r.props.children, s = Ze(o, Oa).filter(function(u) {
    return R5(a, i, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = xe(l, n);
      if (ie(f)) return u;
      var d = Array.isArray(f) ? [lc(f), mr(f)] : [f, f], p = c.reduce(function(v, y) {
        var h = xe(l, y, 0), g = d[0] - Math.abs(Array.isArray(h) ? h[0] : h), w = d[1] + Math.abs(Array.isArray(h) ? h[1] : h);
        return [Math.min(g, v[0]), Math.max(w, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], u[0]), Math.max(p[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, D5 = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return ux(t, s, n, i, a);
  }).filter(function(s) {
    return !ie(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, lx = function(t, r, n, a, i) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && ux(t, c, u, a) || Ja(t, u, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, u) {
        return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++)
      s[u[l]] || (s[u[l]] = !0, c.push(u[l]));
    return c;
  }, []);
}, fx = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, dx = function(t, r, n, a) {
  if (a)
    return t.map(function(c) {
      return c.coordinate;
    });
  var i, o, s = t.map(function(c) {
    return c.coordinate === r && (i = !0), c.coordinate === n && (o = !0), c.coordinate;
  });
  return i || s.push(r), o || s.push(n), s;
}, Yt = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, s = t.range, c = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, u = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / c : 0;
  if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? Ve(s[0] - s[1]) * 2 * u : u, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var d = i ? i.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + u,
        value: f,
        offset: u
      };
    });
    return l.filter(function(f) {
      return !va(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: a(f) + u,
      value: f,
      index: d,
      offset: u
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: a(f) + u,
      value: f,
      offset: u
    };
  }) : a.domain().map(function(f, d) {
    return {
      coordinate: a(f) + u,
      value: i ? i[f] : f,
      index: d,
      offset: u
    };
  });
}, gu = /* @__PURE__ */ new WeakMap(), go = function(t, r) {
  if (typeof r != "function")
    return t;
  gu.has(t) || gu.set(t, /* @__PURE__ */ new WeakMap());
  var n = gu.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, px = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: vi(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Jo(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Za(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: vi(),
      realScaleType: "band"
    } : {
      scale: Jo(),
      realScaleType: "linear"
    };
  if (nn(a)) {
    var c = "scale".concat(Ys(a));
    return {
      scale: (Jv[c] || Za)(),
      realScaleType: Jv[c] ? c : "point"
    };
  }
  return ae(a) ? {
    scale: a
  } : {
    scale: Za(),
    realScaleType: "point"
  };
}, oy = 1e-4, hx = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - oy, o = Math.max(a[0], a[1]) + oy, s = t(r[0]), c = t(r[n - 1]);
    (s < i || s > o || c < i || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, L5 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, B5 = function(t, r) {
  if (!r || r.length !== 2 || !H(r[0]) || !H(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!H(t[0]) || t[0] < n) && (i[0] = n), (!H(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, F5 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var c = va(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        c >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + c, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
      }
}, z5 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = va(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, W5 = {
  sign: F5,
  // @ts-expect-error definitelytyped types are incorrect
  expand: oC,
  // @ts-expect-error definitelytyped types are incorrect
  none: Mn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: sC,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: cC,
  positive: z5
}, U5 = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = W5[n], o = iC().keys(a).value(function(s, c) {
    return +xe(s, c, 0);
  }).order(il).offset(i);
  return o(t);
}, G5 = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, d) {
    var p, v = (p = d.type) !== null && p !== void 0 && p.defaultProps ? je(je({}, d.type.defaultProps), d.props) : d.props, y = v.stackId, h = v.hide;
    if (h)
      return f;
    var g = v[n], w = f[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ne(y)) {
      var b = w.stackGroups[y] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      b.items.push(d), w.hasStack = !0, w.stackGroups[y] = b;
    } else
      w.stackGroups[Tr("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return je(je({}, f), {}, jn({}, g, w));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, d) {
    var p = u[d];
    if (p.hasStack) {
      var v = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(y, h) {
        var g = p.stackGroups[h];
        return je(je({}, y), {}, jn({}, h, {
          numericAxisId: n,
          cateAxisId: a,
          items: g.items,
          stackedData: U5(t, g.items, i)
        }));
      }, v);
    }
    return je(je({}, f), {}, jn({}, d, p));
  }, l);
}, vx = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length)
      return null;
    var l = a5(u, i, s);
    return t.domain([lc(l), mr(l)]), {
      niceTicks: l
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = i5(f, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function zn(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ie(a[t.dataKey])) {
      var s = Co(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var c = xe(a, ie(o) ? t.dataKey : o);
  return ie(c) ? null : t.scale(c);
}
var sy = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var c = xe(o, r.dataKey, r.domain[s]);
  return ie(c) ? null : r.scale(c) - i / 2 + a;
}, H5 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, q5 = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? je(je({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Ne(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, K5 = function(t) {
  return t.reduce(function(r, n) {
    return [lc(n.concat([r[0]]).filter(H)), mr(n.concat([r[1]]).filter(H))];
  }, [1 / 0, -1 / 0]);
}, yx = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = K5(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], a[0]), Math.max(c[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, cy = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, uy = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Nl = function(t, r, n) {
  if (ae(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (H(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (cy.test(t[0])) {
    var i = +cy.exec(t[0])[1];
    a[0] = r[0] - i;
  } else ae(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (H(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (uy.test(t[1])) {
    var o = +uy.exec(t[1])[1];
    a[1] = r[1] + o;
  } else ae(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, is = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = cd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = i.length; s < c; s++) {
      var u = i[s], l = i[s - 1];
      o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, ly = function(t, r, n) {
  return !t || !t.length || ar(t, st(n, "type.defaultProps.domain")) ? r : t;
}, mx = function(t, r) {
  var n = t.type.defaultProps ? je(je({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return je(je({}, Z(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: Id(t),
    value: xe(r, a),
    type: c,
    payload: r,
    chartType: u,
    hide: l
  });
};
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(Object(r), !0).forEach(function(n) {
      gx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gx(e, t, r) {
  return t = V5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V5(e) {
  var t = Y5(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function Y5(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function X5(e, t) {
  return e4(e) || Q5(e, t) || J5(e, t) || Z5();
}
function Z5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J5(e, t) {
  if (e) {
    if (typeof e == "string") return dy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dy(e, t);
  }
}
function dy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Q5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function e4(e) {
  if (Array.isArray(e)) return e;
}
var os = Math.PI / 180, t4 = function(t) {
  return t * 180 / Math.PI;
}, de = function(t, r, n, a) {
  return {
    x: t + Math.cos(-os * a) * n,
    y: r + Math.sin(-os * a) * n
  };
}, bx = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, xx = function(t, r, n, a, i) {
  var o = t.width, s = t.height, c = t.startAngle, u = t.endAngle, l = Ye(t.cx, o, o / 2), f = Ye(t.cy, s, s / 2), d = bx(o, s, n), p = Ye(t.innerRadius, d, 0), v = Ye(t.outerRadius, d, d * 0.8), y = Object.keys(r);
  return y.reduce(function(h, g) {
    var w = r[g], b = w.domain, O = w.reversed, m;
    if (ie(w.range))
      a === "angleAxis" ? m = [c, u] : a === "radiusAxis" && (m = [p, v]), O && (m = [m[1], m[0]]);
    else {
      m = w.range;
      var x = m, _ = X5(x, 2);
      c = _[0], u = _[1];
    }
    var P = px(w, i), $ = P.realScaleType, M = P.scale;
    M.domain(b).range(m), hx(M);
    var T = vx(M, Ht(Ht({}, w), {}, {
      realScaleType: $
    })), j = Ht(Ht(Ht({}, w), T), {}, {
      range: m,
      radius: v,
      realScaleType: $,
      scale: M,
      cx: l,
      cy: f,
      innerRadius: p,
      outerRadius: v,
      startAngle: c,
      endAngle: u
    });
    return Ht(Ht({}, h), {}, gx({}, g, j));
  }, {});
}, r4 = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, n4 = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = r4({
    x: n,
    y: a
  }, {
    x: i,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var c = (n - i) / s, u = Math.acos(c);
  return a > o && (u = 2 * Math.PI - u), {
    radius: s,
    angle: t4(u),
    angleInRadian: u
  };
}, a4 = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, i4 = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, py = function(t, r) {
  var n = t.x, a = t.y, i = n4({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u)
    return !1;
  if (o === 0)
    return !0;
  var l = a4(r), f = l.startAngle, d = l.endAngle, p = s, v;
  if (f <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < f; )
      p += 360;
    v = p >= f && p <= d;
  } else {
    for (; p > f; )
      p -= 360;
    for (; p < d; )
      p += 360;
    v = p >= d && p <= f;
  }
  return v ? Ht(Ht({}, r), {}, {
    radius: o,
    angle: i4(p, r)
  }) : null;
}, wx = function(t) {
  return !/* @__PURE__ */ Et(t) && !ae(t) && typeof t != "boolean" ? t.className : "";
};
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
var o4 = ["offset"];
function s4(e) {
  return f4(e) || l4(e) || u4(e) || c4();
}
function c4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u4(e, t) {
  if (e) {
    if (typeof e == "string") return Rl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rl(e, t);
  }
}
function l4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function f4(e) {
  if (Array.isArray(e)) return Rl(e);
}
function Rl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function d4(e, t) {
  if (e == null) return {};
  var r = p4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hy(Object(r), !0).forEach(function(n) {
      h4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h4(e, t, r) {
  return t = v4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v4(e) {
  var t = y4(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function y4(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pi() {
  return Pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pi.apply(this, arguments);
}
var m4 = function(t) {
  var r = t.value, n = t.formatter, a = ie(t.children) ? r : t.children;
  return ae(n) ? n(a) : a;
}, g4 = function(t, r) {
  var n = Ve(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, b4 = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, c = i, u = c.cx, l = c.cy, f = c.innerRadius, d = c.outerRadius, p = c.startAngle, v = c.endAngle, y = c.clockWise, h = (f + d) / 2, g = g4(p, v), w = g >= 0 ? 1 : -1, b, O;
  a === "insideStart" ? (b = p + w * o, O = y) : a === "insideEnd" ? (b = v - w * o, O = !y) : a === "end" && (b = v + w * o, O = y), O = g <= 0 ? O : !O;
  var m = de(u, l, h, b), x = de(u, l, h, b + (O ? 1 : -1) * 359), _ = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(h, ",").concat(h, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), P = ie(t.id) ? Tr("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ S.createElement("text", Pi({}, n, {
    dominantBaseline: "central",
    className: ce("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("path", {
    id: P,
    d: _
  })), /* @__PURE__ */ S.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, x4 = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, s = i.cy, c = i.innerRadius, u = i.outerRadius, l = i.startAngle, f = i.endAngle, d = (l + f) / 2;
  if (a === "outside") {
    var p = de(o, s, u + n, d), v = p.x, y = p.y;
    return {
      x: v,
      y,
      textAnchor: v >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (a === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (a === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (a === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var h = (c + u) / 2, g = de(o, s, h, d), w = g.x, b = g.y;
  return {
    x: w,
    y: b,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, w4 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, s = o.x, c = o.y, u = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * a, p = f > 0 ? "end" : "start", v = f > 0 ? "start" : "end", y = u >= 0 ? 1 : -1, h = y * a, g = y > 0 ? "end" : "start", w = y > 0 ? "start" : "end";
  if (i === "top") {
    var b = {
      x: s + u / 2,
      y: c - f * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return ke(ke({}, b), n ? {
      height: Math.max(c - n.y, 0),
      width: u
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: s + u / 2,
      y: c + l + d,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return ke(ke({}, O), n ? {
      height: Math.max(n.y + n.height - (c + l), 0),
      width: u
    } : {});
  }
  if (i === "left") {
    var m = {
      x: s - h,
      y: c + l / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return ke(ke({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: l
    } : {});
  }
  if (i === "right") {
    var x = {
      x: s + u + h,
      y: c + l / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return ke(ke({}, x), n ? {
      width: Math.max(n.x + n.width - x.x, 0),
      height: l
    } : {});
  }
  var _ = n ? {
    width: u,
    height: l
  } : {};
  return i === "insideLeft" ? ke({
    x: s + h,
    y: c + l / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, _) : i === "insideRight" ? ke({
    x: s + u - h,
    y: c + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, _) : i === "insideTop" ? ke({
    x: s + u / 2,
    y: c + d,
    textAnchor: "middle",
    verticalAnchor: v
  }, _) : i === "insideBottom" ? ke({
    x: s + u / 2,
    y: c + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, _) : i === "insideTopLeft" ? ke({
    x: s + h,
    y: c + d,
    textAnchor: w,
    verticalAnchor: v
  }, _) : i === "insideTopRight" ? ke({
    x: s + u - h,
    y: c + d,
    textAnchor: g,
    verticalAnchor: v
  }, _) : i === "insideBottomLeft" ? ke({
    x: s + h,
    y: c + l - d,
    textAnchor: w,
    verticalAnchor: p
  }, _) : i === "insideBottomRight" ? ke({
    x: s + u - h,
    y: c + l - d,
    textAnchor: g,
    verticalAnchor: p
  }, _) : fa(i) && (H(i.x) || Kr(i.x)) && (H(i.y) || Kr(i.y)) ? ke({
    x: s + Ye(i.x, u),
    y: c + Ye(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, _) : ke({
    x: s + u / 2,
    y: c + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, _);
}, O4 = function(t) {
  return "cx" in t && H(t.cx);
};
function Le(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = d4(e, o4), a = ke({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, c = a.children, u = a.content, l = a.className, f = l === void 0 ? "" : l, d = a.textBreakAll;
  if (!i || ie(s) && ie(c) && !/* @__PURE__ */ Et(u) && !ae(u))
    return null;
  if (/* @__PURE__ */ Et(u))
    return /* @__PURE__ */ Ie(u, a);
  var p;
  if (ae(u)) {
    if (p = /* @__PURE__ */ rg(u, a), /* @__PURE__ */ Et(p))
      return p;
  } else
    p = m4(a);
  var v = O4(i), y = Z(a, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return b4(a, p, y);
  var h = v ? x4(a) : w4(a);
  return /* @__PURE__ */ S.createElement(an, Pi({
    className: ce("recharts-label", f)
  }, y, h, {
    breakAll: d
  }), p);
}
Le.displayName = "Label";
var Ox = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, p = t.top, v = t.left, y = t.width, h = t.height, g = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (H(y) && H(h)) {
    if (H(f) && H(d))
      return {
        x: f,
        y: d,
        width: y,
        height: h
      };
    if (H(p) && H(v))
      return {
        x: p,
        y: v,
        width: y,
        height: h
      };
  }
  return H(f) && H(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : H(r) && H(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: u || 0,
    outerRadius: l || c || s || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, _4 = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ S.createElement(Le, {
    key: "label-implicit",
    viewBox: r
  }) : Ne(t) ? /* @__PURE__ */ S.createElement(Le, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Et(t) ? t.type === Le ? /* @__PURE__ */ Ie(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ S.createElement(Le, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ae(t) ? /* @__PURE__ */ S.createElement(Le, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : fa(t) ? /* @__PURE__ */ S.createElement(Le, Pi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, S4 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = Ox(t), o = Ze(a, Le).map(function(c, u) {
    return /* @__PURE__ */ Ie(c, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(u)
    });
  });
  if (!n)
    return o;
  var s = _4(t.label, r || i);
  return [s].concat(s4(o));
};
Le.parseViewBox = Ox;
Le.renderCallByParent = S4;
function A4(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var P4 = A4;
const _x = /* @__PURE__ */ me(P4);
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
var E4 = ["valueAccessor"], $4 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function T4(e) {
  return k4(e) || M4(e) || C4(e) || j4();
}
function j4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C4(e, t) {
  if (e) {
    if (typeof e == "string") return Dl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dl(e, t);
  }
}
function M4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k4(e) {
  if (Array.isArray(e)) return Dl(e);
}
function Dl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ss() {
  return ss = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ss.apply(this, arguments);
}
function vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vy(Object(r), !0).forEach(function(n) {
      I4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I4(e, t, r) {
  return t = N4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N4(e) {
  var t = R4(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function R4(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function my(e, t) {
  if (e == null) return {};
  var r = D4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function D4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var L4 = function(t) {
  return Array.isArray(t.value) ? _x(t.value) : t.value;
};
function gt(e) {
  var t = e.valueAccessor, r = t === void 0 ? L4 : t, n = my(e, E4), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = my(n, $4);
  return !a || !a.length ? null : /* @__PURE__ */ S.createElement(ue, {
    className: "recharts-label-list"
  }, a.map(function(l, f) {
    var d = ie(i) ? r(l, f) : xe(l && l.payload, i), p = ie(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ S.createElement(Le, ss({}, Z(l, !0), u, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: c,
      viewBox: Le.parseViewBox(ie(o) ? l : yy(yy({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
gt.displayName = "LabelList";
function B4(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ S.createElement(gt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ S.isValidElement(e) || ae(e) ? /* @__PURE__ */ S.createElement(gt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : fa(e) ? /* @__PURE__ */ S.createElement(gt, ss({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function F4(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = Ze(n, gt).map(function(o, s) {
    return /* @__PURE__ */ Ie(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = B4(e.label, t);
  return [i].concat(T4(a));
}
gt.renderCallByParent = F4;
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Ll() {
  return Ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ll.apply(this, arguments);
}
function gy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function by(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gy(Object(r), !0).forEach(function(n) {
      z4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z4(e, t, r) {
  return t = W4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W4(e) {
  var t = U4(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function U4(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var G4 = function(t, r) {
  var n = Ve(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, bo = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + a, f = Math.asin(c / l) / os, d = u ? i : i + o * f, p = de(r, n, l, d), v = de(r, n, a, d), y = u ? i - o * f : i, h = de(r, n, l * Math.cos(f * os), y);
  return {
    center: p,
    circleTangency: v,
    lineTangency: h,
    theta: f
  };
}, Sx = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, c = G4(o, s), u = o + c, l = de(r, n, i, o), f = de(r, n, i, u), d = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > u), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (a > 0) {
    var p = de(r, n, a, o), v = de(r, n, a, u);
    d += "L ".concat(v.x, ",").concat(v.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= u), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, H4 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = Ve(l - u), d = bo({
    cx: r,
    cy: n,
    radius: i,
    angle: u,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: c
  }), p = d.circleTangency, v = d.lineTangency, y = d.theta, h = bo({
    cx: r,
    cy: n,
    radius: i,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: c
  }), g = h.circleTangency, w = h.lineTangency, b = h.theta, O = c ? Math.abs(u - l) : Math.abs(u - l) - y - b;
  if (O < 0)
    return s ? "M ".concat(v.x, ",").concat(v.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Sx({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: u,
      endAngle: l
    });
  var m = "M ".concat(v.x, ",").concat(v.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (a > 0) {
    var x = bo({
      cx: r,
      cy: n,
      radius: a,
      angle: u,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), _ = x.circleTangency, P = x.lineTangency, $ = x.theta, M = bo({
      cx: r,
      cy: n,
      radius: a,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), T = M.circleTangency, j = M.lineTangency, N = M.theta, D = c ? Math.abs(u - l) : Math.abs(u - l) - $ - N;
    if (D < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(j.x, ",").concat(j.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(D > 180), ",").concat(+(f > 0), ",").concat(_.x, ",").concat(_.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, q4 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Ax = function(t) {
  var r = by(by({}, q4), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || l === f)
    return null;
  var p = ce("recharts-sector", d), v = o - i, y = Ye(s, v, 0, !0), h;
  return y > 0 && Math.abs(l - f) < 360 ? h = H4({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(y, v / 2),
    forceCornerRadius: c,
    cornerIsExternal: u,
    startAngle: l,
    endAngle: f
  }) : h = Sx({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ S.createElement("path", Ll({}, Z(r, !0), {
    className: p,
    d: h,
    role: "img"
  }));
};
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
function Bl() {
  return Bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bl.apply(this, arguments);
}
function xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xy(Object(r), !0).forEach(function(n) {
      K4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K4(e, t, r) {
  return t = V4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V4(e) {
  var t = Y4(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function Y4(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oy = {
  curveBasisClosed: Vj,
  curveBasisOpen: Yj,
  curveBasis: Kj,
  curveBumpX: kj,
  curveBumpY: Ij,
  curveLinearClosed: Xj,
  curveLinear: Zs,
  curveMonotoneX: Zj,
  curveMonotoneY: Jj,
  curveNatural: Qj,
  curveStep: eC,
  curveStepAfter: rC,
  curveStepBefore: tC
}, xo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Ba = function(t) {
  return t.x;
}, Fa = function(t) {
  return t.y;
}, X4 = function(t, r) {
  if (ae(t))
    return t;
  var n = "curve".concat(Ys(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Oy["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Oy[n] || Zs;
}, Z4 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? !1 : c, l = X4(n, s), f = u ? i.filter(function(y) {
    return xo(y);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = u ? o.filter(function(y) {
      return xo(y);
    }) : o, v = f.map(function(y, h) {
      return wy(wy({}, y), {}, {
        base: p[h]
      });
    });
    return s === "vertical" ? d = uo().y(Fa).x1(Ba).x0(function(y) {
      return y.base.x;
    }) : d = uo().x(Ba).y1(Fa).y0(function(y) {
      return y.base.y;
    }), d.defined(xo).curve(l), d(v);
  }
  return s === "vertical" && H(o) ? d = uo().y(Fa).x1(Ba).x0(o) : H(o) ? d = uo().x(Ba).y1(Fa).y0(o) : d = mb().x(Ba).y(Fa), d.defined(xo).curve(l), d(f);
}, wr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? Z4(t) : a;
  return /* @__PURE__ */ S.createElement("path", Bl({}, Z(t, !1), Mo(t), {
    className: ce("recharts-curve", r),
    d: o,
    ref: i
  }));
}, J4 = Object.getOwnPropertyNames, Q4 = Object.getOwnPropertySymbols, e6 = Object.prototype.hasOwnProperty;
function _y(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function wo(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    var i = a.cache, o = i.get(r), s = i.get(n);
    if (o && s)
      return o === n && s === r;
    i.set(r, n), i.set(n, r);
    var c = e(r, n, a);
    return i.delete(r), i.delete(n), c;
  };
}
function Sy(e) {
  return J4(e).concat(Q4(e));
}
var t6 = Object.hasOwn || function(e, t) {
  return e6.call(e, t);
};
function dn(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var r6 = "__v", n6 = "__o", a6 = "_owner", Ay = Object.getOwnPropertyDescriptor, Py = Object.keys;
function i6(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function o6(e, t) {
  return dn(e.getTime(), t.getTime());
}
function s6(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function c6(e, t) {
  return e === t;
}
function Ey(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.entries(), o, s, c = 0; (o = i.next()) && !o.done; ) {
    for (var u = t.entries(), l = !1, f = 0; (s = u.next()) && !s.done; ) {
      if (a[f]) {
        f++;
        continue;
      }
      var d = o.value, p = s.value;
      if (r.equals(d[0], p[0], c, f, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
        l = a[f] = !0;
        break;
      }
      f++;
    }
    if (!l)
      return !1;
    c++;
  }
  return !0;
}
var u6 = dn;
function l6(e, t, r) {
  var n = Py(e), a = n.length;
  if (Py(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!Px(e, t, r, n[a]))
      return !1;
  return !0;
}
function za(e, t, r) {
  var n = Sy(e), a = n.length;
  if (Sy(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !Px(e, t, r, i) || (o = Ay(e, i), s = Ay(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function f6(e, t) {
  return dn(e.valueOf(), t.valueOf());
}
function d6(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function $y(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.values(), o, s; (o = i.next()) && !o.done; ) {
    for (var c = t.values(), u = !1, l = 0; (s = c.next()) && !s.done; ) {
      if (!a[l] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        u = a[l] = !0;
        break;
      }
      l++;
    }
    if (!u)
      return !1;
  }
  return !0;
}
function p6(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function h6(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function Px(e, t, r, n) {
  return (n === a6 || n === n6 || n === r6) && (e.$$typeof || t.$$typeof) ? !0 : t6(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var v6 = "[object Arguments]", y6 = "[object Boolean]", m6 = "[object Date]", g6 = "[object Error]", b6 = "[object Map]", x6 = "[object Number]", w6 = "[object Object]", O6 = "[object RegExp]", _6 = "[object Set]", S6 = "[object String]", A6 = "[object URL]", P6 = Array.isArray, Ty = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, jy = Object.assign, E6 = Object.prototype.toString.call.bind(Object.prototype.toString);
function $6(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, a = e.areFunctionsEqual, i = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, c = e.arePrimitiveWrappersEqual, u = e.areRegExpsEqual, l = e.areSetsEqual, f = e.areTypedArraysEqual, d = e.areUrlsEqual;
  return function(v, y, h) {
    if (v === y)
      return !0;
    if (v == null || y == null)
      return !1;
    var g = typeof v;
    if (g !== typeof y)
      return !1;
    if (g !== "object")
      return g === "number" ? o(v, y, h) : g === "function" ? a(v, y, h) : !1;
    var w = v.constructor;
    if (w !== y.constructor)
      return !1;
    if (w === Object)
      return s(v, y, h);
    if (P6(v))
      return t(v, y, h);
    if (Ty != null && Ty(v))
      return f(v, y, h);
    if (w === Date)
      return r(v, y, h);
    if (w === RegExp)
      return u(v, y, h);
    if (w === Map)
      return i(v, y, h);
    if (w === Set)
      return l(v, y, h);
    var b = E6(v);
    return b === m6 ? r(v, y, h) : b === O6 ? u(v, y, h) : b === b6 ? i(v, y, h) : b === _6 ? l(v, y, h) : b === w6 ? typeof v.then != "function" && typeof y.then != "function" && s(v, y, h) : b === A6 ? d(v, y, h) : b === g6 ? n(v, y, h) : b === v6 ? s(v, y, h) : b === y6 || b === x6 || b === S6 ? c(v, y, h) : !1;
  };
}
function T6(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? za : i6,
    areDatesEqual: o6,
    areErrorsEqual: s6,
    areFunctionsEqual: c6,
    areMapsEqual: n ? _y(Ey, za) : Ey,
    areNumbersEqual: u6,
    areObjectsEqual: n ? za : l6,
    arePrimitiveWrappersEqual: f6,
    areRegExpsEqual: d6,
    areSetsEqual: n ? _y($y, za) : $y,
    areTypedArraysEqual: n ? za : p6,
    areUrlsEqual: h6
  };
  if (r && (a = jy({}, a, r(a))), t) {
    var i = wo(a.areArraysEqual), o = wo(a.areMapsEqual), s = wo(a.areObjectsEqual), c = wo(a.areSetsEqual);
    a = jy({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: c
    });
  }
  return a;
}
function j6(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function C6(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(c, u) {
      var l = n(), f = l.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, p = l.meta;
      return r(c, u, {
        cache: d,
        equals: a,
        meta: p,
        strict: i
      });
    };
  if (t)
    return function(c, u) {
      return r(c, u, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: a,
        meta: void 0,
        strict: i
      });
    };
  var o = {
    cache: void 0,
    equals: a,
    meta: void 0,
    strict: i
  };
  return function(c, u) {
    return r(c, u, o);
  };
}
var M6 = Mr();
Mr({ strict: !0 });
Mr({ circular: !0 });
Mr({
  circular: !0,
  strict: !0
});
Mr({
  createInternalComparator: function() {
    return dn;
  }
});
Mr({
  strict: !0,
  createInternalComparator: function() {
    return dn;
  }
});
Mr({
  circular: !0,
  createInternalComparator: function() {
    return dn;
  }
});
Mr({
  circular: !0,
  createInternalComparator: function() {
    return dn;
  },
  strict: !0
});
function Mr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = T6(e), c = $6(s), u = n ? n(c) : j6(c);
  return C6({ circular: r, comparator: c, createState: a, equals: u, strict: o });
}
function k6(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Cy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : k6(a);
  };
  requestAnimationFrame(n);
}
function Fl(e) {
  "@babel/helpers - typeof";
  return Fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fl(e);
}
function I6(e) {
  return L6(e) || D6(e) || R6(e) || N6();
}
function N6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R6(e, t) {
  if (e) {
    if (typeof e == "string") return My(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return My(e, t);
  }
}
function My(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function D6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function L6(e) {
  if (Array.isArray(e)) return e;
}
function B6() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = I6(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          Cy(a.bind(null, u), c);
          return;
        }
        a(c), Cy(a.bind(null, u));
        return;
      }
      Fl(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(i) {
      r = !1, n(i);
    },
    subscribe: function(i) {
      return t = i, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Iy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ky(Object(r), !0).forEach(function(n) {
      Ex(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ex(e, t, r) {
  return t = F6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F6(e) {
  var t = z6(e, "string");
  return ji(t) === "symbol" ? t : String(t);
}
function z6(e, t) {
  if (ji(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var W6 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, U6 = function(t) {
  return t;
}, G6 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Qa = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Iy(Iy({}, n), {}, Ex({}, a, t(a, r[a])));
  }, {});
}, Ny = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(G6(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, H6 = process.env.NODE_ENV !== "production", cs = function(t, r, n, a, i, o, s, c) {
  if (H6 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var u = [n, a, i, o, s, c], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return u[l++];
      }));
    }
};
function q6(e, t) {
  return Y6(e) || V6(e, t) || $x(e, t) || K6();
}
function K6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V6(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function Y6(e) {
  if (Array.isArray(e)) return e;
}
function X6(e) {
  return Q6(e) || J6(e) || $x(e) || Z6();
}
function Z6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $x(e, t) {
  if (e) {
    if (typeof e == "string") return zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zl(e, t);
  }
}
function J6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Q6(e) {
  if (Array.isArray(e)) return zl(e);
}
function zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var us = 1e-4, Tx = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, jx = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Ry = function(t, r) {
  return function(n) {
    var a = Tx(t, r);
    return jx(a, n);
  };
}, eW = function(t, r) {
  return function(n) {
    var a = Tx(t, r), i = [].concat(X6(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return jx(i, n);
  };
}, Dy = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0], i = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        a = 0, i = 0, o = 1, s = 1;
        break;
      case "ease":
        a = 0.25, i = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        a = 0.42, i = 0, o = 1, s = 1;
        break;
      case "ease-out":
        a = 0.42, i = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        a = 0, i = 0, o = 0.58, s = 1;
        break;
      default: {
        var c = r[0].split("(");
        if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
          var u = c[1].split(")")[0].split(",").map(function(h) {
            return parseFloat(h);
          }), l = q6(u, 4);
          a = l[0], i = l[1], o = l[2], s = l[3];
        } else
          cs(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  cs([a, o, i, s].every(function(h) {
    return typeof h == "number" && h >= 0 && h <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = Ry(a, o), d = Ry(i, s), p = eW(a, o), v = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, y = function(g) {
    for (var w = g > 1 ? 1 : g, b = w, O = 0; O < 8; ++O) {
      var m = f(b) - w, x = p(b);
      if (Math.abs(m - w) < us || x < us)
        return d(b);
      b = v(b - m / x);
    }
    return d(b);
  };
  return y.isStepper = !1, y;
}, tW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, d) {
    var p = -(l - f) * n, v = d * i, y = d + (p - v) * s / 1e3, h = d * s / 1e3 + l;
    return Math.abs(h - f) < us && Math.abs(y) < us ? [f, 0] : [h, y];
  };
  return c.isStepper = !0, c.dt = s, c;
}, rW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0];
  if (typeof a == "string")
    switch (a) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Dy(a);
      case "spring":
        return tW();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Dy(a);
        cs(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (cs(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function Ly(e) {
  return iW(e) || aW(e) || Cx(e) || nW();
}
function nW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function iW(e) {
  if (Array.isArray(e)) return Ul(e);
}
function By(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? By(Object(r), !0).forEach(function(n) {
      Wl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : By(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wl(e, t, r) {
  return t = oW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oW(e) {
  var t = sW(e, "string");
  return Ci(t) === "symbol" ? t : String(t);
}
function sW(e, t) {
  if (Ci(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cW(e, t) {
  return fW(e) || lW(e, t) || Cx(e, t) || uW();
}
function uW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cx(e, t) {
  if (e) {
    if (typeof e == "string") return Ul(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ul(e, t);
  }
}
function Ul(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function fW(e) {
  if (Array.isArray(e)) return e;
}
var ls = function(t, r, n) {
  return t + (r - t) * n;
}, Gl = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, dW = function e(t, r, n) {
  var a = Qa(function(i, o) {
    if (Gl(o)) {
      var s = t(o.from, o.to, o.velocity), c = cW(s, 2), u = c[0], l = c[1];
      return ze(ze({}, o), {}, {
        from: u,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? Qa(function(i, o) {
    return Gl(o) ? ze(ze({}, o), {}, {
      velocity: ls(o.velocity, a[i].velocity, n),
      from: ls(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const pW = function(e, t, r, n, a) {
  var i = W6(e, t), o = i.reduce(function(h, g) {
    return ze(ze({}, h), {}, Wl({}, g, [e[g], t[g]]));
  }, {}), s = i.reduce(function(h, g) {
    return ze(ze({}, h), {}, Wl({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, d = function() {
    return Qa(function(g, w) {
      return w.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(Gl).length;
  }, v = function(g) {
    u || (u = g);
    var w = g - u, b = w / r.dt;
    s = dW(r, s, b), a(ze(ze(ze({}, e), t), d())), u = g, p() || (c = requestAnimationFrame(f));
  }, y = function(g) {
    l || (l = g);
    var w = (g - l) / n, b = Qa(function(m, x) {
      return ls.apply(void 0, Ly(x).concat([r(w)]));
    }, o);
    if (a(ze(ze(ze({}, e), t), b)), w < 1)
      c = requestAnimationFrame(f);
    else {
      var O = Qa(function(m, x) {
        return ls.apply(void 0, Ly(x).concat([r(1)]));
      }, o);
      a(ze(ze(ze({}, e), t), O));
    }
  };
  return f = r.isStepper ? v : y, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
}
var hW = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function vW(e, t) {
  if (e == null) return {};
  var r = yW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yW(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function bu(e) {
  return xW(e) || bW(e) || gW(e) || mW();
}
function mW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gW(e, t) {
  if (e) {
    if (typeof e == "string") return Hl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hl(e, t);
  }
}
function bW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xW(e) {
  if (Array.isArray(e)) return Hl(e);
}
function Hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fy(Object(r), !0).forEach(function(n) {
      Ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ka(e, t, r) {
  return t = Mx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function OW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mx(n.key), n);
  }
}
function _W(e, t, r) {
  return t && OW(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Mx(e) {
  var t = SW(e, "string");
  return Wn(t) === "symbol" ? t : String(t);
}
function SW(e, t) {
  if (Wn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ql(e, t);
}
function ql(e, t) {
  return ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ql(e, t);
}
function PW(e) {
  var t = EW();
  return function() {
    var n = fs(e), a;
    if (t) {
      var i = fs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Kl(this, a);
  };
}
function Kl(e, t) {
  if (t && (Wn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Vl(e);
}
function Vl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function EW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
var ct = /* @__PURE__ */ function(e) {
  AW(r, e);
  var t = PW(r);
  function r(n, a) {
    var i;
    wW(this, r), i = t.call(this, n, a);
    var o = i.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(Vl(i)), i.changeStyle = i.changeStyle.bind(Vl(i)), !s || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: l
      }), Kl(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (u) {
      if (typeof d == "function")
        return i.state = {
          style: u
        }, Kl(i);
      i.state = {
        style: c ? Ka({}, c, u) : u
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return _W(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, s = i.canBegin, c = i.attributeName, u = i.shouldReAnimate, l = i.to, f = i.from, d = this.state.style;
      if (s) {
        if (!o) {
          var p = {
            style: c ? Ka({}, c, l) : l
          };
          this.state && d && (c && d[c] !== l || !c && d !== l) && this.setState(p);
          return;
        }
        if (!(M6(a.to, l) && a.canBegin && a.isActive)) {
          var v = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = v || u ? f : a.to;
          if (this.state && d) {
            var h = {
              style: c ? Ka({}, c, y) : y
            };
            (c && d[c] !== y || !c && d !== y) && this.setState(h);
          }
          this.runAnimation(Ot(Ot({}, this.props), {}, {
            from: y,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), a && a();
    }
  }, {
    key: "handleStyleChange",
    value: function(a) {
      this.changeStyle(a);
    }
  }, {
    key: "changeStyle",
    value: function(a) {
      this.mounted && this.setState({
        style: a
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(a) {
      var i = this, o = a.from, s = a.to, c = a.duration, u = a.easing, l = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = pW(o, s, rW(u), c, this.changeStyle), v = function() {
        i.stopJSAnimation = p();
      };
      this.manager.start([d, l, v, c, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, s = a.begin, c = a.onAnimationStart, u = o[0], l = u.style, f = u.duration, d = f === void 0 ? 0 : f, p = function(y, h, g) {
        if (g === 0)
          return y;
        var w = h.duration, b = h.easing, O = b === void 0 ? "ease" : b, m = h.style, x = h.properties, _ = h.onAnimationEnd, P = g > 0 ? o[g - 1] : h, $ = x || Object.keys(m);
        if (typeof O == "function" || O === "spring")
          return [].concat(bu(y), [i.runJSAnimation.bind(i, {
            from: P.style,
            to: m,
            duration: w,
            easing: O
          }), w]);
        var M = Ny($, w, O), T = Ot(Ot(Ot({}, P.style), m), {}, {
          transition: M
        });
        return [].concat(bu(y), [T, w, _]).filter(U6);
      };
      return this.manager.start([c].concat(bu(o.reduce(p, [l, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = B6());
      var i = a.begin, o = a.duration, s = a.attributeName, c = a.to, u = a.easing, l = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof u == "function" || typeof p == "function" || u === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var y = s ? Ka({}, s, c) : c, h = Ny(Object.keys(y), o, u);
      v.start([l, i, Ot(Ot({}, y), {}, {
        transition: h
      }), o, f]);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, i = a.children;
      a.begin;
      var o = a.duration;
      a.attributeName, a.easing;
      var s = a.isActive;
      a.steps, a.from, a.to, a.canBegin, a.onAnimationEnd, a.shouldReAnimate, a.onAnimationReStart;
      var c = vW(a, hW), u = Jr.count(i), l = this.state.style;
      if (typeof i == "function")
        return i(l);
      if (!s || u === 0 || o <= 0)
        return i;
      var f = function(p) {
        var v = p.props, y = v.style, h = y === void 0 ? {} : y, g = v.className, w = /* @__PURE__ */ Ie(p, Ot(Ot({}, c), {}, {
          style: Ot(Ot({}, h), l),
          className: g
        }));
        return w;
      };
      return u === 1 ? f(Jr.only(i)) : /* @__PURE__ */ S.createElement("div", null, Jr.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(tt);
ct.displayName = "Animate";
ct.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
ct.propTypes = {
  from: X.oneOfType([X.object, X.string]),
  to: X.oneOfType([X.object, X.string]),
  attributeName: X.string,
  // animation duration
  duration: X.number,
  begin: X.number,
  easing: X.oneOfType([X.string, X.func]),
  steps: X.arrayOf(X.shape({
    duration: X.number.isRequired,
    style: X.object.isRequired,
    easing: X.oneOfType([X.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), X.func]),
    // transition css properties(dash case), optional
    properties: X.arrayOf("string"),
    onAnimationEnd: X.func
  })),
  children: X.oneOfType([X.node, X.func]),
  isActive: X.bool,
  canBegin: X.bool,
  onAnimationEnd: X.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: X.bool,
  onAnimationStart: X.func,
  onAnimationReStart: X.func
};
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ds.apply(this, arguments);
}
function $W(e, t) {
  return MW(e) || CW(e, t) || jW(e, t) || TW();
}
function TW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jW(e, t) {
  if (e) {
    if (typeof e == "string") return zy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zy(e, t);
  }
}
function zy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function MW(e) {
  if (Array.isArray(e)) return e;
}
function Wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wy(Object(r), !0).forEach(function(n) {
      kW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kW(e, t, r) {
  return t = IW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IW(e) {
  var t = NW(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function NW(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gy = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), s = a >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, u = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && i instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      f[d] = i[d] > o ? o : i[d];
    l = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(u, ",").concat(t + c * f[0], ",").concat(r)), l += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(u, `,
        `).concat(t + n, ",").concat(r + s * f[1])), l += "L ".concat(t + n, ",").concat(r + a - s * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(u, `,
        `).concat(t + n - c * f[2], ",").concat(r + a)), l += "L ".concat(t + c * f[3], ",").concat(r + a), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(u, `,
        `).concat(t, ",").concat(r + a - s * f[3])), l += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var v = Math.min(o, i);
    l = "M ".concat(t, ",").concat(r + s * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(u, ",").concat(t + c * v, ",").concat(r, `
            L `).concat(t + n - c * v, ",").concat(r, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(u, ",").concat(t + n, ",").concat(r + s * v, `
            L `).concat(t + n, ",").concat(r + a - s * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(u, ",").concat(t + n - c * v, ",").concat(r + a, `
            L `).concat(t + c * v, ",").concat(r + a, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(u, ",").concat(t, ",").concat(r + a - s * v, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return l;
}, RW = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(i, i + s), l = Math.max(i, i + s), f = Math.min(o, o + c), d = Math.max(o, o + c);
    return n >= u && n <= l && a >= f && a <= d;
  }
  return !1;
}, DW = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Nd = function(t) {
  var r = Uy(Uy({}, DW), t), n = Eo(), a = mt(-1), i = $W(a, 2), o = i[0], s = i[1];
  Gi(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && s(O);
      } catch {
      }
  }, []);
  var c = r.x, u = r.y, l = r.width, f = r.height, d = r.radius, p = r.className, v = r.animationEasing, y = r.animationDuration, h = r.animationBegin, g = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || l === 0 || f === 0)
    return null;
  var b = ce("recharts-rectangle", p);
  return w ? /* @__PURE__ */ S.createElement(ct, {
    canBegin: o > 0,
    from: {
      width: l,
      height: f,
      x: c,
      y: u
    },
    to: {
      width: l,
      height: f,
      x: c,
      y: u
    },
    duration: y,
    animationEasing: v,
    isActive: w
  }, function(O) {
    var m = O.width, x = O.height, _ = O.x, P = O.y;
    return /* @__PURE__ */ S.createElement(ct, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: y,
      isActive: g,
      easing: v
    }, /* @__PURE__ */ S.createElement("path", ds({}, Z(r, !0), {
      className: b,
      d: Gy(_, P, m, x, d),
      ref: n
    })));
  }) : /* @__PURE__ */ S.createElement("path", ds({}, Z(r, !0), {
    className: b,
    d: Gy(c, u, l, f, d)
  }));
}, LW = ["points", "className", "baseLinePoints", "connectNulls"];
function _n() {
  return _n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _n.apply(this, arguments);
}
function BW(e, t) {
  if (e == null) return {};
  var r = FW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function FW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Hy(e) {
  return GW(e) || UW(e) || WW(e) || zW();
}
function zW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WW(e, t) {
  if (e) {
    if (typeof e == "string") return Yl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yl(e, t);
  }
}
function UW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GW(e) {
  if (Array.isArray(e)) return Yl(e);
}
function Yl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var qy = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, HW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    qy(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), qy(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, ei = function(t, r) {
  var n = HW(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(Hy(i), Hy(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, qW = function(t, r, n) {
  var a = ei(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(ei(r.reverse(), n).slice(1));
}, kx = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = BW(t, LW);
  if (!r || !r.length)
    return null;
  var s = ce("recharts-polygon", n);
  if (a && a.length) {
    var c = o.stroke && o.stroke !== "none", u = qW(r, a, i);
    return /* @__PURE__ */ S.createElement("g", {
      className: s
    }, /* @__PURE__ */ S.createElement("path", _n({}, Z(o, !0), {
      fill: u.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: u
    })), c ? /* @__PURE__ */ S.createElement("path", _n({}, Z(o, !0), {
      fill: "none",
      d: ei(r, i)
    })) : null, c ? /* @__PURE__ */ S.createElement("path", _n({}, Z(o, !0), {
      fill: "none",
      d: ei(a, i)
    })) : null);
  }
  var l = ei(r, i);
  return /* @__PURE__ */ S.createElement("path", _n({}, Z(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: l
  }));
};
function Xl() {
  return Xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xl.apply(this, arguments);
}
var _a = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = ce("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ S.createElement("circle", Xl({}, Z(t, !1), Mo(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
var KW = ["x", "y", "top", "left", "width", "height", "className"];
function Zl() {
  return Zl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zl.apply(this, arguments);
}
function Ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function VW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ky(Object(r), !0).forEach(function(n) {
      YW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YW(e, t, r) {
  return t = XW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XW(e) {
  var t = ZW(e, "string");
  return ki(t) == "symbol" ? t : t + "";
}
function ZW(e, t) {
  if (ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JW(e, t) {
  if (e == null) return {};
  var r = QW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var e8 = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, t8 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, v = t.className, y = JW(t, KW), h = VW({
    x: n,
    y: i,
    top: s,
    left: u,
    width: f,
    height: p
  }, y);
  return !H(n) || !H(i) || !H(f) || !H(p) || !H(s) || !H(u) ? null : /* @__PURE__ */ S.createElement("path", Zl({}, Z(h, !0), {
    className: ce("recharts-cross", v),
    d: e8(n, i, f, p, s, u)
  }));
}, r8 = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
function n8(e, t) {
  if (e == null) return {};
  var r = a8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function a8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ir.apply(this, arguments);
}
function Vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ni(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vy(Object(r), !0).forEach(function(n) {
      i8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i8(e, t, r) {
  return t = o8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o8(e) {
  var t = s8(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function s8(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var c8 = function(t, r, n, a) {
  var i = "";
  return a.forEach(function(o, s) {
    var c = de(r, n, t, o);
    s ? i += "L ".concat(c.x, ",").concat(c.y) : i += "M ".concat(c.x, ",").concat(c.y);
  }), i += "Z", i;
}, u8 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.polarAngles, s = t.radialLines;
  if (!o || !o.length || !s)
    return null;
  var c = Ni({
    stroke: "#ccc"
  }, Z(t, !1));
  return /* @__PURE__ */ S.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, o.map(function(u) {
    var l = de(r, n, a, u), f = de(r, n, i, u);
    return /* @__PURE__ */ S.createElement("line", ir({}, c, {
      key: "line-".concat(u),
      x1: l.x,
      y1: l.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, l8 = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.index, o = Ni(Ni({
    stroke: "#ccc"
  }, Z(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ S.createElement("circle", ir({}, o, {
    className: ce("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(i),
    cx: r,
    cy: n,
    r: a
  }));
}, f8 = function(t) {
  var r = t.radius, n = t.index, a = Ni(Ni({
    stroke: "#ccc"
  }, Z(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ S.createElement("path", ir({}, a, {
    className: ce("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(n),
    d: c8(r, t.cx, t.cy, t.polarAngles)
  }));
}, d8 = function(t) {
  var r = t.polarRadius, n = t.gridType;
  return !r || !r.length ? null : /* @__PURE__ */ S.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, r.map(function(a, i) {
    var o = i;
    return n === "circle" ? /* @__PURE__ */ S.createElement(l8, ir({
      key: o
    }, t, {
      radius: a,
      index: i
    })) : /* @__PURE__ */ S.createElement(f8, ir({
      key: o
    }, t, {
      radius: a,
      index: i
    }));
  }));
}, Ix = function(t) {
  var r = t.cx, n = r === void 0 ? 0 : r, a = t.cy, i = a === void 0 ? 0 : a, o = t.innerRadius, s = o === void 0 ? 0 : o, c = t.outerRadius, u = c === void 0 ? 0 : c, l = t.gridType, f = l === void 0 ? "polygon" : l, d = t.radialLines, p = d === void 0 ? !0 : d, v = n8(t, r8);
  return u <= 0 ? null : /* @__PURE__ */ S.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ S.createElement(u8, ir({
    cx: n,
    cy: i,
    innerRadius: s,
    outerRadius: u,
    gridType: f,
    radialLines: p
  }, v)), /* @__PURE__ */ S.createElement(d8, ir({
    cx: n,
    cy: i,
    innerRadius: s,
    outerRadius: u,
    gridType: f,
    radialLines: p
  }, v)));
};
Ix.displayName = "PolarGrid";
var p8 = uc, h8 = H0, v8 = zt;
function y8(e, t) {
  return e && e.length ? p8(e, v8(t), h8) : void 0;
}
var m8 = y8;
const g8 = /* @__PURE__ */ me(m8);
var b8 = uc, x8 = zt, w8 = q0;
function O8(e, t) {
  return e && e.length ? b8(e, x8(t), w8) : void 0;
}
var _8 = O8;
const S8 = /* @__PURE__ */ me(_8);
var A8 = ["cx", "cy", "angle", "ticks", "axisLine"], P8 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ti.apply(this, arguments);
}
function Yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yy(Object(r), !0).forEach(function(n) {
      pc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xy(e, t) {
  if (e == null) return {};
  var r = E8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function $8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Rx(n.key), n);
  }
}
function T8(e, t, r) {
  return t && Zy(e.prototype, t), r && Zy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function j8(e, t, r) {
  return t = ps(t), C8(e, Nx() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function C8(e, t) {
  if (t && (Un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return M8(e);
}
function M8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Nx = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function k8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jl(e, t);
}
function Jl(e, t) {
  return Jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Jl(e, t);
}
function pc(e, t, r) {
  return t = Rx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rx(e) {
  var t = I8(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function I8(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Sa = /* @__PURE__ */ function(e) {
  function t() {
    return $8(this, t), j8(this, t, arguments);
  }
  return k8(t, e), T8(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, s = i.cx, c = i.cy;
        return de(s, c, a, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, a;
      switch (n) {
        case "left":
          a = "end";
          break;
        case "right":
          a = "start";
          break;
        default:
          a = "middle";
          break;
      }
      return a;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, c = g8(s, function(l) {
        return l.coordinate || 0;
      }), u = S8(s, function(l) {
        return l.coordinate || 0;
      });
      return {
        cx: a,
        cy: i,
        startAngle: o,
        endAngle: o,
        innerRadius: u.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, c = n.axisLine, u = Xy(n, A8), l = s.reduce(function(v, y) {
        return [Math.min(v[0], y.coordinate), Math.max(v[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), f = de(a, i, l[0], o), d = de(a, i, l[1], o), p = Br(Br(Br({}, Z(u, !1)), {}, {
        fill: "none"
      }, Z(c, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ S.createElement("line", ti({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, c = a.tickFormatter, u = a.stroke, l = Xy(a, P8), f = this.getTickTextAnchor(), d = Z(l, !1), p = Z(o, !1), v = i.map(function(y, h) {
        var g = n.getTickValueCoord(y), w = Br(Br(Br(Br({
          textAnchor: f,
          transform: "rotate(".concat(90 - s, ", ").concat(g.x, ", ").concat(g.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: u
        }, p), {}, {
          index: h
        }, g), {}, {
          payload: y
        });
        return /* @__PURE__ */ S.createElement(ue, ti({
          className: ce("recharts-polar-radius-axis-tick", wx(o)),
          key: "tick-".concat(y.coordinate)
        }, Ar(n.props, y, h)), t.renderTickItem(o, w, c ? c(y.value, h) : y.value));
      });
      return /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-polar-radius-axis-ticks"
      }, v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ S.createElement(ue, {
        className: ce("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), Le.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ S.isValidElement(n) ? o = /* @__PURE__ */ S.cloneElement(n, a) : ae(n) ? o = n(a) : o = /* @__PURE__ */ S.createElement(an, ti({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
}(tt);
pc(Sa, "displayName", "PolarRadiusAxis");
pc(Sa, "axisType", "radiusAxis");
pc(Sa, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
function Hr() {
  return Hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hr.apply(this, arguments);
}
function Jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jy(Object(r), !0).forEach(function(n) {
      hc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lx(n.key), n);
  }
}
function R8(e, t, r) {
  return t && Qy(e.prototype, t), r && Qy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function D8(e, t, r) {
  return t = hs(t), L8(e, Dx() ? Reflect.construct(t, r || [], hs(e).constructor) : t.apply(e, r));
}
function L8(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return B8(e);
}
function B8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dx = function() {
    return !!e;
  })();
}
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(e);
}
function F8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ql(e, t);
}
function Ql(e, t) {
  return Ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ql(e, t);
}
function hc(e, t, r) {
  return t = Lx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lx(e) {
  var t = z8(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function z8(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var W8 = Math.PI / 180, em = 1e-5, Aa = /* @__PURE__ */ function(e) {
  function t() {
    return N8(this, t), D8(this, t, arguments);
  }
  return F8(t, e), R8(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var a = this.props, i = a.cx, o = a.cy, s = a.radius, c = a.orientation, u = a.tickSize, l = u || 8, f = de(i, o, s, n.coordinate), d = de(i, o, s + (c === "inner" ? -1 : 1) * l, n.coordinate);
        return {
          x1: f.x,
          y1: f.y,
          x2: d.x,
          y2: d.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var a = this.props.orientation, i = Math.cos(-n.coordinate * W8), o;
      return i > em ? o = a === "outer" ? "start" : "end" : i < -em ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, c = n.axisLineType, u = Fr(Fr({}, Z(this.props, !1)), {}, {
        fill: "none"
      }, Z(s, !1));
      if (c === "circle")
        return /* @__PURE__ */ S.createElement(_a, Hr({
          className: "recharts-polar-angle-axis-line"
        }, u, {
          cx: a,
          cy: i,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return de(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ S.createElement(kx, Hr({
        className: "recharts-polar-angle-axis-line"
      }, u, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, c = a.tickFormatter, u = a.stroke, l = Z(this.props, !1), f = Z(o, !1), d = Fr(Fr({}, l), {}, {
        fill: "none"
      }, Z(s, !1)), p = i.map(function(v, y) {
        var h = n.getTickLineCoord(v), g = n.getTickTextAnchor(v), w = Fr(Fr(Fr({
          textAnchor: g
        }, l), {}, {
          stroke: "none",
          fill: u
        }, f), {}, {
          index: y,
          payload: v,
          x: h.x2,
          y: h.y2
        });
        return /* @__PURE__ */ S.createElement(ue, Hr({
          className: ce("recharts-polar-angle-axis-tick", wx(o)),
          key: "tick-".concat(v.coordinate)
        }, Ar(n.props, v, y)), s && /* @__PURE__ */ S.createElement("line", Hr({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, h)), o && t.renderTickItem(o, w, c ? c(v.value, y) : v.value));
      });
      return /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ S.createElement(ue, {
        className: ce("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ S.isValidElement(n) ? o = /* @__PURE__ */ S.cloneElement(n, a) : ae(n) ? o = n(a) : o = /* @__PURE__ */ S.createElement(an, Hr({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
}(tt);
hc(Aa, "displayName", "PolarAngleAxis");
hc(Aa, "axisType", "angleAxis");
hc(Aa, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var U8 = zb, G8 = U8(Object.getPrototypeOf, Object), H8 = G8, q8 = sr, K8 = H8, V8 = cr, Y8 = "[object Object]", X8 = Function.prototype, Z8 = Object.prototype, Bx = X8.toString, J8 = Z8.hasOwnProperty, Q8 = Bx.call(Object);
function eU(e) {
  if (!V8(e) || q8(e) != Y8)
    return !1;
  var t = K8(e);
  if (t === null)
    return !0;
  var r = J8.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Bx.call(r) == Q8;
}
var tU = eU;
const rU = /* @__PURE__ */ me(tU);
var nU = sr, aU = cr, iU = "[object Boolean]";
function oU(e) {
  return e === !0 || e === !1 || aU(e) && nU(e) == iU;
}
var sU = oU;
const cU = /* @__PURE__ */ me(sU);
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function uU(e, t) {
  return pU(e) || dU(e, t) || fU(e, t) || lU();
}
function lU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fU(e, t) {
  if (e) {
    if (typeof e == "string") return tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tm(e, t);
  }
}
function tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dU(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function pU(e) {
  if (Array.isArray(e)) return e;
}
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rm(Object(r), !0).forEach(function(n) {
      hU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hU(e, t, r) {
  return t = vU(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vU(e) {
  var t = yU(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function yU(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var am = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, mU = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, gU = function(t) {
  var r = nm(nm({}, mU), t), n = Eo(), a = mt(-1), i = uU(a, 2), o = i[0], s = i[1];
  Gi(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var b = n.current.getTotalLength();
        b && s(b);
      } catch {
      }
  }, []);
  var c = r.x, u = r.y, l = r.upperWidth, f = r.lowerWidth, d = r.height, p = r.className, v = r.animationEasing, y = r.animationDuration, h = r.animationBegin, g = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || d !== +d || l === 0 && f === 0 || d === 0)
    return null;
  var w = ce("recharts-trapezoid", p);
  return g ? /* @__PURE__ */ S.createElement(ct, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: c,
      y: u
    },
    to: {
      upperWidth: l,
      lowerWidth: f,
      height: d,
      x: c,
      y: u
    },
    duration: y,
    animationEasing: v,
    isActive: g
  }, function(b) {
    var O = b.upperWidth, m = b.lowerWidth, x = b.height, _ = b.x, P = b.y;
    return /* @__PURE__ */ S.createElement(ct, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: y,
      easing: v
    }, /* @__PURE__ */ S.createElement("path", vs({}, Z(r, !0), {
      className: w,
      d: am(_, P, O, m, x),
      ref: n
    })));
  }) : /* @__PURE__ */ S.createElement("g", null, /* @__PURE__ */ S.createElement("path", vs({}, Z(r, !0), {
    className: w,
    d: am(c, u, l, f, d)
  })));
}, bU = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Di(e) {
  "@babel/helpers - typeof";
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
function xU(e, t) {
  if (e == null) return {};
  var r = wU(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? im(Object(r), !0).forEach(function(n) {
      OU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : im(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OU(e, t, r) {
  return t = _U(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _U(e) {
  var t = SU(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}
function SU(e, t) {
  if (Di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AU(e, t) {
  return ys(ys({}, t), e);
}
function PU(e, t) {
  return e === "symbols";
}
function om(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ S.createElement(Nd, r);
    case "trapezoid":
      return /* @__PURE__ */ S.createElement(gU, r);
    case "sector":
      return /* @__PURE__ */ S.createElement(Ax, r);
    case "symbols":
      if (PU(t))
        return /* @__PURE__ */ S.createElement(Qs, r);
      break;
    default:
      return null;
  }
}
function EU(e) {
  return /* @__PURE__ */ Et(e) ? e.props : e;
}
function ms(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? AU : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, c = xU(e, bU), u;
  if (/* @__PURE__ */ Et(t))
    u = /* @__PURE__ */ Ie(t, ys(ys({}, c), EU(t)));
  else if (ae(t))
    u = t(c);
  else if (rU(t) && !cU(t)) {
    var l = a(t, c);
    u = /* @__PURE__ */ S.createElement(om, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = c;
    u = /* @__PURE__ */ S.createElement(om, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ S.createElement(ue, {
    className: o
  }, u) : u;
}
function vc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function yc(e, t) {
  return t != null && "sectors" in e.props;
}
function Li(e, t) {
  return t != null && "points" in e.props;
}
function $U(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function TU(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function jU(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function CU(e, t) {
  var r;
  return vc(e, t) ? r = $U : yc(e, t) ? r = TU : Li(e, t) && (r = jU), r;
}
function MU(e, t) {
  var r;
  return vc(e, t) ? r = "trapezoids" : yc(e, t) ? r = "sectors" : Li(e, t) && (r = "points"), r;
}
function kU(e, t) {
  if (vc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (yc(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Li(e, t) ? t.payload : {};
}
function IU(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = MU(r, t), i = kU(r, t), o = n.filter(function(c, u) {
    var l = ar(i, c), f = r.props[a].filter(function(v) {
      var y = CU(r, t);
      return y(v, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = u === d;
    return l && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var Po;
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sn.apply(this, arguments);
}
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      vt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zx(n.key), n);
  }
}
function RU(e, t, r) {
  return t && cm(e.prototype, t), r && cm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function DU(e, t, r) {
  return t = gs(t), LU(e, Fx() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r));
}
function LU(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BU(e);
}
function BU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fx = function() {
    return !!e;
  })();
}
function gs(e) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gs(e);
}
function FU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ef(e, t);
}
function ef(e, t) {
  return ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ef(e, t);
}
function vt(e, t, r) {
  return t = zx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zx(e) {
  var t = zU(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function zU(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var lr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return NU(this, t), n = DU(this, t, [r]), vt(n, "pieRef", null), vt(n, "sectorRefs", []), vt(n, "id", Tr("recharts-pie-")), vt(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ae(a) && a();
    }), vt(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), ae(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return FU(t, e), RU(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var a = this.props.activeIndex;
      return Array.isArray(a) ? a.indexOf(n) !== -1 : n === a;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.label, s = i.labelLine, c = i.dataKey, u = i.valueKey, l = Z(this.props, !1), f = Z(o, !1), d = Z(s, !1), p = o && o.offsetRadius || 20, v = n.map(function(y, h) {
        var g = (y.startAngle + y.endAngle) / 2, w = de(y.cx, y.cy, y.outerRadius + p, g), b = _e(_e(_e(_e({}, l), y), {}, {
          stroke: "none"
        }, f), {}, {
          index: h,
          textAnchor: t.getTextAnchor(w.x, y.cx)
        }, w), O = _e(_e(_e(_e({}, l), y), {}, {
          fill: "none",
          stroke: y.fill
        }, d), {}, {
          index: h,
          points: [de(y.cx, y.cy, y.outerRadius, g), w]
        }), m = c;
        return ie(c) && ie(u) ? m = "value" : ie(c) && (m = u), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ S.createElement(ue, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(h)
        }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, b, xe(y, m)));
      });
      return /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-pie-labels"
      }, v);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, s = i.blendStroke, c = i.inactiveShape;
      return n.map(function(u, l) {
        if ((u == null ? void 0 : u.startAngle) === 0 && (u == null ? void 0 : u.endAngle) === 0 && n.length !== 1) return null;
        var f = a.isActiveIndex(l), d = c && a.hasActiveIndex() ? c : null, p = f ? o : d, v = _e(_e({}, u), {}, {
          stroke: s ? u.fill : u.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ S.createElement(ue, Sn({
          ref: function(h) {
            h && !a.sectorRefs.includes(h) && a.sectorRefs.push(h);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Ar(a.props, u, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(u == null ? void 0 : u.startAngle, "-").concat(u == null ? void 0 : u.endAngle, "-").concat(u.midAngle, "-").concat(l)
        }), /* @__PURE__ */ S.createElement(ms, Sn({
          option: p,
          isActive: f,
          shapeType: "sector"
        }, v)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, u = a.animationEasing, l = a.animationId, f = this.state, d = f.prevSectors, p = f.prevIsAnimationActive;
      return /* @__PURE__ */ S.createElement(ct, {
        begin: s,
        duration: c,
        isActive: o,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(v) {
        var y = v.t, h = [], g = i && i[0], w = g.startAngle;
        return i.forEach(function(b, O) {
          var m = d && d[O], x = O > 0 ? st(b, "paddingAngle", 0) : 0;
          if (m) {
            var _ = be(m.endAngle - m.startAngle, b.endAngle - b.startAngle), P = _e(_e({}, b), {}, {
              startAngle: w + x,
              endAngle: w + _(y) + x
            });
            h.push(P), w = P.endAngle;
          } else {
            var $ = b.endAngle, M = b.startAngle, T = be(0, $ - M), j = T(y), N = _e(_e({}, b), {}, {
              startAngle: w + x,
              endAngle: w + j + x
            });
            h.push(N), w = N.endAngle;
          }
        }), /* @__PURE__ */ S.createElement(ue, null, n.renderSectorsStatically(h));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var a = this;
      n.onkeydown = function(i) {
        if (!i.altKey)
          switch (i.key) {
            case "ArrowLeft": {
              var o = ++a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[o].focus(), a.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var s = --a.state.sectorToFocus < 0 ? a.sectorRefs.length - 1 : a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[s].focus(), a.setState({
                sectorToFocus: s
              });
              break;
            }
            case "Escape": {
              a.sectorRefs[a.state.sectorToFocus].blur(), a.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, a = n.sectors, i = n.isAnimationActive, o = this.state.prevSectors;
      return i && a && a.length && (!o || !ar(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.hide, o = a.sectors, s = a.className, c = a.label, u = a.cx, l = a.cy, f = a.innerRadius, d = a.outerRadius, p = a.isAnimationActive, v = this.state.isAnimationFinished;
      if (i || !o || !o.length || !H(u) || !H(l) || !H(f) || !H(d))
        return null;
      var y = ce("recharts-pie", s);
      return /* @__PURE__ */ S.createElement(ue, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(g) {
          n.pieRef = g;
        }
      }, this.renderSectors(), c && this.renderLabels(o), Le.renderCallByParent(this.props, null, !1), (!p || v) && gt.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return a.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: a.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== a.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, a) {
      return n > a ? "start" : n < a ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ S.isValidElement(n))
        return /* @__PURE__ */ S.cloneElement(n, a);
      if (ae(n))
        return n(a);
      var o = ce("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ S.createElement(wr, Sn({}, a, {
        key: i,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ S.isValidElement(n))
        return /* @__PURE__ */ S.cloneElement(n, a);
      var o = i;
      if (ae(n) && (o = n(a), /* @__PURE__ */ S.isValidElement(o)))
        return o;
      var s = ce("recharts-pie-label-text", typeof n != "boolean" && !ae(n) ? n.className : "");
      return /* @__PURE__ */ S.createElement(an, Sn({}, a, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
}(tt);
Po = lr;
vt(lr, "displayName", "Pie");
vt(lr, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
vt(lr, "parseDeltaAngle", function(e, t) {
  var r = Ve(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
vt(lr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = Z(e, !1), a = Ze(r, Yi);
  return t && t.length ? t.map(function(i, o) {
    return _e(_e(_e({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return _e(_e({}, n), i.props);
  }) : [];
});
vt(lr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = bx(a, i), s = n + Ye(e.cx, a, a / 2), c = r + Ye(e.cy, i, i / 2), u = Ye(e.innerRadius, o, 0), l = Ye(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: c,
    innerRadius: u,
    outerRadius: l,
    maxRadius: f
  };
});
vt(lr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? _e(_e({}, t.type.defaultProps), t.props) : t.props, a = Po.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, c = n.paddingAngle, u = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), v = Po.parseCoordinateOfPie(n, r), y = Po.parseDeltaAngle(o, s), h = Math.abs(y), g = u;
  ie(u) && ie(f) ? ($t(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : ie(u) && ($t(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = f);
  var w = a.filter(function(P) {
    return xe(P, g, 0) !== 0;
  }).length, b = (h >= 360 ? w : w - 1) * c, O = h - w * p - b, m = a.reduce(function(P, $) {
    var M = xe($, g, 0);
    return P + (H(M) ? M : 0);
  }, 0), x;
  if (m > 0) {
    var _;
    x = a.map(function(P, $) {
      var M = xe(P, g, 0), T = xe(P, l, $), j = (H(M) ? M : 0) / m, N;
      $ ? N = _.endAngle + Ve(y) * c * (M !== 0 ? 1 : 0) : N = o;
      var D = N + Ve(y) * ((M !== 0 ? p : 0) + j * O), I = (N + D) / 2, R = (v.innerRadius + v.outerRadius) / 2, F = [{
        name: T,
        value: M,
        payload: P,
        dataKey: g,
        type: d
      }], U = de(v.cx, v.cy, R, I);
      return _ = _e(_e(_e({
        percent: j,
        cornerRadius: i,
        name: T,
        tooltipPayload: F,
        midAngle: I,
        middleRadius: R,
        tooltipPosition: U
      }, P), v), {}, {
        value: xe(P, g),
        startAngle: N,
        endAngle: D,
        payload: P,
        paddingAngle: Ve(y) * c
      }), _;
    });
  }
  return _e(_e({}, v), {}, {
    sectors: x,
    data: a
  });
});
function WU(e) {
  return e && e.length ? e[0] : void 0;
}
var UU = WU, GU = UU;
const HU = /* @__PURE__ */ me(GU);
var qU = ["key"];
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function KU(e, t) {
  if (e == null) return {};
  var r = VU(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function bs() {
  return bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bs.apply(this, arguments);
}
function um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? um(Object(r), !0).forEach(function(n) {
      qt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ux(n.key), n);
  }
}
function XU(e, t, r) {
  return t && lm(e.prototype, t), r && lm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZU(e, t, r) {
  return t = xs(t), JU(e, Wx() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function JU(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QU(e);
}
function QU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Wx = function() {
    return !!e;
  })();
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function e9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tf(e, t);
}
function tf(e, t) {
  return tf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, tf(e, t);
}
function qt(e, t, r) {
  return t = Ux(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ux(e) {
  var t = t9(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function t9(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var eo = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    YU(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = ZU(this, t, [].concat(a)), qt(r, "state", {
      isAnimationFinished: !1
    }), qt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ae(o) && o();
    }), qt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ae(o) && o();
    }), qt(r, "handleMouseEnter", function(o) {
      var s = r.props.onMouseEnter;
      s && s(r.props, o);
    }), qt(r, "handleMouseLeave", function(o) {
      var s = r.props.onMouseLeave;
      s && s(r.props, o);
    }), r;
  }
  return e9(t, e), XU(t, [{
    key: "renderDots",
    value: function(n) {
      var a = this.props, i = a.dot, o = a.dataKey, s = Z(this.props, !1), c = Z(i, !0), u = n.map(function(l, f) {
        var d = Ke(Ke(Ke({
          key: "dot-".concat(f),
          r: 3
        }, s), c), {}, {
          dataKey: o,
          cx: l.x,
          cy: l.y,
          index: f,
          payload: l
        });
        return t.renderDotItem(i, d);
      });
      return /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-radar-dots"
      }, u);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(n) {
      var a = this.props, i = a.shape, o = a.dot, s = a.isRange, c = a.baseLinePoints, u = a.connectNulls, l;
      return /* @__PURE__ */ S.isValidElement(i) ? l = /* @__PURE__ */ S.cloneElement(i, Ke(Ke({}, this.props), {}, {
        points: n
      })) : ae(i) ? l = i(Ke(Ke({}, this.props), {}, {
        points: n
      })) : l = /* @__PURE__ */ S.createElement(kx, bs({}, Z(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: n,
        baseLinePoints: s ? c : null,
        connectNulls: u
      })), /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-radar-polygon"
      }, l, o ? this.renderDots(n) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.points, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, u = a.animationEasing, l = a.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ S.createElement(ct, {
        begin: s,
        duration: c,
        isActive: o,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var p = d.t, v = f && f.length / i.length, y = i.map(function(h, g) {
          var w = f && f[Math.floor(g * v)];
          if (w) {
            var b = be(w.x, h.x), O = be(w.y, h.y);
            return Ke(Ke({}, h), {}, {
              x: b(p),
              y: O(p)
            });
          }
          var m = be(h.cx, h.x), x = be(h.cy, h.y);
          return Ke(Ke({}, h), {}, {
            x: m(p),
            y: x(p)
          });
        });
        return n.renderPolygonStatically(y);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var n = this.props, a = n.points, i = n.isAnimationActive, o = n.isRange, s = this.state.prevPoints;
      return i && a && a.length && !o && (!s || !ar(s, a)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(a);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.className, o = n.points, s = n.isAnimationActive;
      if (a || !o || !o.length)
        return null;
      var c = this.state.isAnimationFinished, u = ce("recharts-radar", i);
      return /* @__PURE__ */ S.createElement(ue, {
        className: u
      }, this.renderPolygon(), (!s || c) && gt.renderCallByParent(this.props, o));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: a.curPoints
      } : n.points !== a.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "renderDotItem",
    value: function(n, a) {
      var i;
      if (/* @__PURE__ */ S.isValidElement(n))
        i = /* @__PURE__ */ S.cloneElement(n, a);
      else if (ae(n))
        i = n(a);
      else {
        var o = a.key, s = KU(a, qU);
        i = /* @__PURE__ */ S.createElement(_a, bs({}, s, {
          key: o,
          className: ce("recharts-radar-dot", typeof n != "boolean" ? n.className : "")
        }));
      }
      return i;
    }
  }]);
}(tt);
qt(eo, "displayName", "Radar");
qt(eo, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
qt(eo, "getComposedData", function(e) {
  var t = e.radiusAxis, r = e.angleAxis, n = e.displayedData, a = e.dataKey, i = e.bandSize, o = r.cx, s = r.cy, c = !1, u = [], l = r.type !== "number" ? i ?? 0 : 0;
  n.forEach(function(d, p) {
    var v = xe(d, r.dataKey, p), y = xe(d, a), h = r.scale(v) + l, g = Array.isArray(y) ? _x(y) : y, w = ie(g) ? void 0 : t.scale(g);
    Array.isArray(y) && y.length >= 2 && (c = !0), u.push(Ke(Ke({}, de(o, s, w, h)), {}, {
      name: v,
      value: y,
      cx: o,
      cy: s,
      radius: w,
      angle: h,
      payload: d
    }));
  });
  var f = [];
  return c && u.forEach(function(d) {
    if (Array.isArray(d.value)) {
      var p = HU(d.value), v = ie(p) ? void 0 : t.scale(p);
      f.push(Ke(Ke({}, d), {}, {
        radius: v
      }, de(o, s, v, d.angle)));
    } else
      f.push(d);
  }), {
    points: u,
    isRange: c,
    baseLinePoints: f
  };
});
var r9 = Math.ceil, n9 = Math.max;
function a9(e, t, r, n) {
  for (var a = -1, i = n9(r9((t - e) / (r || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += r;
  return o;
}
var i9 = a9, o9 = o0, fm = 1 / 0, s9 = 17976931348623157e292;
function c9(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = o9(e), e === fm || e === -fm) {
    var t = e < 0 ? -1 : 1;
    return t * s9;
  }
  return e === e ? e : 0;
}
var Gx = c9, u9 = i9, l9 = rc, xu = Gx;
function f9(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && l9(t, r, n) && (r = n = void 0), t = xu(t), r === void 0 ? (r = t, t = 0) : r = xu(r), n = n === void 0 ? t < r ? 1 : -1 : xu(n), u9(t, r, n, e);
  };
}
var d9 = f9, p9 = d9, h9 = p9(), v9 = h9;
const ws = /* @__PURE__ */ me(v9);
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
function dm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dm(Object(r), !0).forEach(function(n) {
      Hx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hx(e, t, r) {
  return t = y9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y9(e) {
  var t = m9(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function m9(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var g9 = ["Webkit", "Moz", "O", "ms"], b9 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = g9.reduce(function(i, o) {
    return pm(pm({}, i), {}, Hx({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function Os() {
  return Os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Os.apply(this, arguments);
}
function hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hm(Object(r), !0).forEach(function(n) {
      at(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Kx(n.key), n);
  }
}
function w9(e, t, r) {
  return t && vm(e.prototype, t), r && vm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O9(e, t, r) {
  return t = _s(t), _9(e, qx() ? Reflect.construct(t, r || [], _s(e).constructor) : t.apply(e, r));
}
function _9(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return S9(e);
}
function S9(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qx = function() {
    return !!e;
  })();
}
function _s(e) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _s(e);
}
function A9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rf(e, t);
}
function rf(e, t) {
  return rf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, rf(e, t);
}
function at(e, t, r) {
  return t = Kx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Kx(e) {
  var t = P9(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function P9(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var E9 = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, u = Za().domain(ws(0, c)).range([i, i + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: u(n),
    endX: u(a),
    scale: u,
    scaleValues: l
  };
}, ym = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Vn = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return x9(this, t), n = O9(this, t, [r]), at(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), at(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), at(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var a = n.props, i = a.endIndex, o = a.onDragEnd, s = a.startIndex;
        o == null || o({
          endIndex: i,
          startIndex: s
        });
      }), n.detachDragEndListener();
    }), at(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), at(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), at(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), at(n, "handleSlideDragStart", function(a) {
      var i = ym(a) ? a.changedTouches[0] : a;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: i.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return A9(t, e), w9(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, s = this.props, c = s.gap, u = s.data, l = u.length - 1, f = Math.min(a, i), d = Math.max(a, i), p = t.getIndexInRange(o, f), v = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % c,
        endIndex: v === l ? l : v - v % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, s = a.dataKey, c = xe(i[n], s, n);
      return ae(o) ? o(c, n) : c;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var a = this.state, i = a.slideMoveStartX, o = a.startX, s = a.endX, c = this.props, u = c.x, l = c.width, f = c.travellerWidth, d = c.startIndex, p = c.endIndex, v = c.onChange, y = n.pageX - i;
      y > 0 ? y = Math.min(y, u + l - f - s, u + l - f - o) : y < 0 && (y = Math.max(y, u - o, u - s));
      var h = this.getIndex({
        startX: o + y,
        endX: s + y
      });
      (h.startIndex !== d || h.endIndex !== p) && v && v(h), this.setState({
        startX: o + y,
        endX: s + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = ym(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: i.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, s = a.endX, c = a.startX, u = this.state[o], l = this.props, f = l.x, d = l.width, p = l.travellerWidth, v = l.onChange, y = l.gap, h = l.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = n.pageX - i;
      w > 0 ? w = Math.min(w, f + d - p - u) : w < 0 && (w = Math.max(w, f - u)), g[o] = u + w;
      var b = this.getIndex(g), O = b.startIndex, m = b.endIndex, x = function() {
        var P = h.length - 1;
        return o === "startX" && (s > c ? O % y === 0 : m % y === 0) || s < c && m === P || o === "endX" && (s > c ? m % y === 0 : O % y === 0) || s > c && m === P;
      };
      this.setState(at(at({}, o, u + w), "brushMoveStartX", n.pageX), function() {
        v && x() && v(b);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, s = o.scaleValues, c = o.startX, u = o.endX, l = this.state[a], f = s.indexOf(l);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= s.length)) {
          var p = s[d];
          a === "startX" && p >= u || a === "endX" && p <= c || this.setState(at({}, a, p), function() {
            i.props.onChange(i.getIndex({
              startX: i.state.startX,
              endX: i.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, c = n.fill, u = n.stroke;
      return /* @__PURE__ */ S.createElement("rect", {
        stroke: u,
        fill: c,
        x: a,
        y: i,
        width: o,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, c = n.data, u = n.children, l = n.padding, f = Jr.only(u);
      return f ? /* @__PURE__ */ S.cloneElement(f, {
        x: a,
        y: i,
        width: o,
        height: s,
        margin: l,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, d = c.traveller, p = c.ariaLabel, v = c.data, y = c.startIndex, h = c.endIndex, g = Math.max(n, this.props.x), w = wu(wu({}, Z(this.props, !1)), {}, {
        x: g,
        y: u,
        width: l,
        height: f
      }), b = p || "Min value: ".concat((i = v[y]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = v[h]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ S.createElement(ue, {
        tabIndex: 0,
        role: "slider",
        "aria-label": b,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), s.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, a));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, w));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, s = i.height, c = i.stroke, u = i.travellerWidth, l = Math.min(n, a) + u, f = Math.max(Math.abs(a - n) - u, 0);
      return /* @__PURE__ */ S.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: c,
        fillOpacity: 0.2,
        x: l,
        y: o,
        width: f,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, s = n.height, c = n.travellerWidth, u = n.stroke, l = this.state, f = l.startX, d = l.endX, p = 5, v = {
        pointerEvents: "none",
        fill: u
      };
      return /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ S.createElement(an, Os({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + s / 2
      }, v), this.getTextOfTick(a)), /* @__PURE__ */ S.createElement(an, Os({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + c + p,
        y: o + s / 2
      }, v), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, d = this.state, p = d.startX, v = d.endX, y = d.isTextActive, h = d.isSlideMoving, g = d.isTravellerMoving, w = d.isTravellerFocused;
      if (!a || !a.length || !H(s) || !H(c) || !H(u) || !H(l) || u <= 0 || l <= 0)
        return null;
      var b = ce("recharts-brush", i), O = S.Children.count(o) === 1, m = b9("userSelect", "none");
      return /* @__PURE__ */ S.createElement(ue, {
        className: b,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(p, v), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(v, "endX"), (y || h || g || w || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(i + s / 2) - 1;
      return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: s,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ S.createElement("line", {
        x1: a + 1,
        y1: u,
        x2: a + o - 1,
        y2: u,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ S.createElement("line", {
        x1: a + 1,
        y1: u + 2,
        x2: a + o - 1,
        y2: u + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ S.isValidElement(n) ? i = /* @__PURE__ */ S.cloneElement(n, a) : ae(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
      if (i !== a.prevData || u !== a.prevUpdateId)
        return wu({
          prevData: i,
          prevTravellerWidth: c,
          prevUpdateId: u,
          prevX: s,
          prevWidth: o
        }, i && i.length ? E9({
          data: i,
          width: o,
          x: s,
          travellerWidth: c,
          startIndex: l,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || s !== a.prevX || c !== a.prevTravellerWidth)) {
        a.scale.range([s, s + o - c]);
        var d = a.scale.domain().map(function(p) {
          return a.scale(p);
        });
        return {
          prevData: i,
          prevTravellerWidth: c,
          prevUpdateId: u,
          prevX: s,
          prevWidth: o,
          startX: a.scale(n.startIndex),
          endX: a.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, a) {
      for (var i = n.length, o = 0, s = i - 1; s - o > 1; ) {
        var c = Math.floor((o + s) / 2);
        n[c] > a ? s = c : o = c;
      }
      return a >= n[s] ? s : o;
    }
  }]);
}(tt);
at(Vn, "displayName", "Brush");
at(Vn, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var $9 = sd;
function T9(e, t) {
  var r;
  return $9(e, function(n, a, i) {
    return r = t(n, a, i), !r;
  }), !!r;
}
var j9 = T9, C9 = kb, M9 = zt, k9 = j9, I9 = rt, N9 = rc;
function R9(e, t, r) {
  var n = I9(e) ? C9 : k9;
  return r && N9(e, t, r) && (t = void 0), n(e, M9(t));
}
var D9 = R9;
const L9 = /* @__PURE__ */ me(D9);
var Rt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, mm = t0;
function B9(e, t, r) {
  t == "__proto__" && mm ? mm(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var F9 = B9, z9 = F9, W9 = Qb, U9 = zt;
function G9(e, t) {
  var r = {};
  return t = U9(t), W9(e, function(n, a, i) {
    z9(r, a, t(n, a, i));
  }), r;
}
var H9 = G9;
const q9 = /* @__PURE__ */ me(H9);
function K9(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var V9 = K9, Y9 = sd;
function X9(e, t) {
  var r = !0;
  return Y9(e, function(n, a, i) {
    return r = !!t(n, a, i), r;
  }), r;
}
var Z9 = X9, J9 = V9, Q9 = Z9, eG = zt, tG = rt, rG = rc;
function nG(e, t, r) {
  var n = tG(e) ? J9 : Q9;
  return r && rG(e, t, r) && (t = void 0), n(e, eG(t));
}
var aG = nG;
const Vx = /* @__PURE__ */ me(aG);
var iG = ["x", "y"];
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nf.apply(this, arguments);
}
function gm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), !0).forEach(function(n) {
      oG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oG(e, t, r) {
  return t = sG(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sG(e) {
  var t = cG(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function cG(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uG(e, t) {
  if (e == null) return {};
  var r = lG(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function lG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fG(e, t) {
  var r = e.x, n = e.y, a = uG(e, iG), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || a.height), l = parseInt(u, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return Wa(Wa(Wa(Wa(Wa({}, t), a), o ? {
    x: o
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: l,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function bm(e) {
  return /* @__PURE__ */ S.createElement(ms, nf({
    shapeType: "rectangle",
    propTransformer: fG,
    activeClassName: "recharts-active-bar"
  }, e));
}
var dG = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? Qe(!1, "minPointSize callback function received a value with type of ".concat(Yn(n), ". Currently only numbers are supported.")) : Qe()), r);
  };
}, pG = ["value", "background"], Yx;
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function hG(e, t) {
  if (e == null) return {};
  var r = vG(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ss() {
  return Ss = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ss.apply(this, arguments);
}
function xm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xm(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Zx(n.key), n);
  }
}
function mG(e, t, r) {
  return t && wm(e.prototype, t), r && wm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gG(e, t, r) {
  return t = As(t), bG(e, Xx() ? Reflect.construct(t, r || [], As(e).constructor) : t.apply(e, r));
}
function bG(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xG(e);
}
function xG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xx = function() {
    return !!e;
  })();
}
function As(e) {
  return As = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, As(e);
}
function wG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && af(e, t);
}
function af(e, t) {
  return af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, af(e, t);
}
function gr(e, t, r) {
  return t = Zx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zx(e) {
  var t = OG(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function OG(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Dt = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    yG(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = gG(this, t, [].concat(a)), gr(r, "state", {
      isAnimationFinished: !1
    }), gr(r, "id", Tr("recharts-bar-")), gr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), gr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return wG(t, e), mG(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.dataKey, c = i.activeIndex, u = i.activeBar, l = Z(this.props, !1);
      return n && n.map(function(f, d) {
        var p = d === c, v = p ? u : o, y = Ce(Ce(Ce({}, l), f), {}, {
          isActive: p,
          option: v,
          index: d,
          dataKey: s,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ S.createElement(ue, Ss({
          className: "recharts-bar-rectangle"
        }, Ar(a.props, f, d), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(d)
        }), /* @__PURE__ */ S.createElement(bm, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, s = a.isAnimationActive, c = a.animationBegin, u = a.animationDuration, l = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ S.createElement(ct, {
        begin: c,
        duration: u,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var v = p.t, y = i.map(function(h, g) {
          var w = d && d[g];
          if (w) {
            var b = be(w.x, h.x), O = be(w.y, h.y), m = be(w.width, h.width), x = be(w.height, h.height);
            return Ce(Ce({}, h), {}, {
              x: b(v),
              y: O(v),
              width: m(v),
              height: x(v)
            });
          }
          if (o === "horizontal") {
            var _ = be(0, h.height), P = _(v);
            return Ce(Ce({}, h), {}, {
              y: h.y + h.height - P,
              height: P
            });
          }
          var $ = be(0, h.width), M = $(v);
          return Ce(Ce({}, h), {}, {
            width: M
          });
        });
        return /* @__PURE__ */ S.createElement(ue, null, n.renderRectanglesStatically(y));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !ar(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, s = a.activeIndex, c = Z(this.props.background, !1);
      return i.map(function(u, l) {
        u.value;
        var f = u.background, d = hG(u, pG);
        if (!f)
          return null;
        var p = Ce(Ce(Ce(Ce(Ce({}, d), {}, {
          fill: "#eee"
        }, f), c), Ar(n.props, u, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ S.createElement(bm, Ss({
          key: "background-bar-".concat(l),
          option: n.props.background,
          isActive: l === s
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, s = i.xAxis, c = i.yAxis, u = i.layout, l = i.children, f = Ze(l, Oa);
      if (!f)
        return null;
      var d = u === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(h, g) {
        var w = Array.isArray(h.value) ? h.value[1] : h.value;
        return {
          x: h.x,
          y: h.y,
          value: w,
          errorVal: xe(h, g)
        };
      }, v = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ S.createElement(ue, v, f.map(function(y) {
        return /* @__PURE__ */ S.cloneElement(y, {
          key: "error-bar-".concat(a, "-").concat(y.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: c,
          layout: u,
          offset: d,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, s = n.xAxis, c = n.yAxis, u = n.left, l = n.top, f = n.width, d = n.height, p = n.isAnimationActive, v = n.background, y = n.id;
      if (a || !i || !i.length)
        return null;
      var h = this.state.isAnimationFinished, g = ce("recharts-bar", o), w = s && s.allowDataOverflow, b = c && c.allowDataOverflow, O = w || b, m = ie(y) ? this.id : y;
      return /* @__PURE__ */ S.createElement(ue, {
        className: g
      }, w || b ? /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ S.createElement("rect", {
        x: w ? u : u - f / 2,
        y: b ? l : l - d / 2,
        width: w ? f : f * 2,
        height: b ? d : d * 2
      }))) : null, /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(m, ")") : null
      }, v ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!p || h) && gt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: a.curData
      } : n.data !== a.curData ? {
        curData: n.data
      } : null;
    }
  }]);
}(tt);
Yx = Dt;
gr(Dt, "displayName", "Bar");
gr(Dt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
gr(Dt, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, c = e.yAxisTicks, u = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = L5(n, r);
  if (!p)
    return null;
  var v = t.layout, y = r.type.defaultProps, h = y !== void 0 ? Ce(Ce({}, y), r.props) : r.props, g = h.dataKey, w = h.children, b = h.minPointSize, O = v === "horizontal" ? o : i, m = u ? O.scale.domain() : null, x = H5({
    numericAxis: O
  }), _ = Ze(w, Yi), P = f.map(function($, M) {
    var T, j, N, D, I, R;
    u ? T = B5(u[l + M], m) : (T = xe($, g), Array.isArray(T) || (T = [x, T]));
    var F = dG(b, Yx.defaultProps.minPointSize)(T[1], M);
    if (v === "horizontal") {
      var U, q = [o.scale(T[0]), o.scale(T[1])], E = q[0], k = q[1];
      j = sy({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: $,
        index: M
      }), N = (U = k ?? E) !== null && U !== void 0 ? U : void 0, D = p.size;
      var L = E - k;
      if (I = Number.isNaN(L) ? 0 : L, R = {
        x: j,
        y: o.y,
        width: D,
        height: o.height
      }, Math.abs(F) > 0 && Math.abs(I) < Math.abs(F)) {
        var W = Ve(I || F) * (Math.abs(F) - Math.abs(I));
        N -= W, I += W;
      }
    } else {
      var Y = [i.scale(T[0]), i.scale(T[1])], J = Y[0], ne = Y[1];
      if (j = J, N = sy({
        axis: o,
        ticks: c,
        bandSize: a,
        offset: p.offset,
        entry: $,
        index: M
      }), D = ne - J, I = p.size, R = {
        x: i.x,
        y: N,
        width: i.width,
        height: I
      }, Math.abs(F) > 0 && Math.abs(D) < Math.abs(F)) {
        var oe = Ve(D || F) * (Math.abs(F) - Math.abs(D));
        D += oe;
      }
    }
    return Ce(Ce(Ce({}, $), {}, {
      x: j,
      y: N,
      width: D,
      height: I,
      value: u ? T : T[1],
      payload: $,
      background: R
    }, _ && _[M] && _[M].props), {}, {
      tooltipPayload: [mx(r, $)],
      tooltipPosition: {
        x: j + D / 2,
        y: N + I / 2
      }
    });
  });
  return Ce({
    data: P,
    layout: v
  }, d);
});
function Fi(e) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e);
}
function _G(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Om(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Jx(n.key), n);
  }
}
function SG(e, t, r) {
  return t && Om(e.prototype, t), r && Om(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      mc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mc(e, t, r) {
  return t = Jx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Jx(e) {
  var t = AG(e, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function AG(e, t) {
  if (Fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gc = function(t, r, n, a, i) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!it(u, Dt);
  return l.reduce(function(p, v) {
    var y = r[v], h = y.orientation, g = y.domain, w = y.padding, b = w === void 0 ? {} : w, O = y.mirror, m = y.reversed, x = "".concat(h).concat(O ? "Mirror" : ""), _, P, $, M, T;
    if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
      var j = g[1] - g[0], N = 1 / 0, D = y.categoricalDomain.sort(wT);
      if (D.forEach(function(Y, J) {
        J > 0 && (N = Math.min((Y || 0) - (D[J - 1] || 0), N));
      }), Number.isFinite(N)) {
        var I = N / j, R = y.layout === "vertical" ? n.height : n.width;
        if (y.padding === "gap" && (_ = I * R / 2), y.padding === "no-gap") {
          var F = Ye(t.barCategoryGap, I * R), U = I * R / 2;
          _ = U - F - (U - F) / R * F;
        }
      }
    }
    a === "xAxis" ? P = [n.left + (b.left || 0) + (_ || 0), n.left + n.width - (b.right || 0) - (_ || 0)] : a === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (b.bottom || 0), n.top + (b.top || 0)] : [n.top + (b.top || 0) + (_ || 0), n.top + n.height - (b.bottom || 0) - (_ || 0)] : P = y.range, m && (P = [P[1], P[0]]);
    var q = px(y, i, d), E = q.scale, k = q.realScaleType;
    E.domain(g).range(P), hx(E);
    var L = vx(E, _t(_t({}, y), {}, {
      realScaleType: k
    }));
    a === "xAxis" ? (T = h === "top" && !O || h === "bottom" && O, $ = n.left, M = f[x] - T * y.height) : a === "yAxis" && (T = h === "left" && !O || h === "right" && O, $ = f[x] - T * y.width, M = n.top);
    var W = _t(_t(_t({}, y), L), {}, {
      realScaleType: k,
      x: $,
      y: M,
      scale: E,
      width: a === "xAxis" ? n.width : y.width,
      height: a === "yAxis" ? n.height : y.height
    });
    return W.bandSize = is(W, L), !y.hide && a === "xAxis" ? f[x] += (T ? -1 : 1) * W.height : y.hide || (f[x] += (T ? -1 : 1) * W.width), _t(_t({}, p), {}, mc({}, v, W));
  }, {});
}, Qx = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, PG = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return Qx({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, e1 = /* @__PURE__ */ function() {
  function e(t) {
    _G(this, e), this.scale = t;
  }
  return SG(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.bandAware, i = n.position;
      if (r !== void 0) {
        if (i)
          switch (i) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (a) {
          var c = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + c;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), a = n[0], i = n[n.length - 1];
      return a <= i ? r >= a && r <= i : r >= i && r <= a;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
}();
mc(e1, "EPS", 1e-4);
var Rd = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return _t(_t({}, n), {}, mc({}, a, e1.create(t[a])));
  }, {});
  return _t(_t({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return q9(a, function(c, u) {
        return r[u].apply(c, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return Vx(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function EG(e) {
  return (e % 180 + 180) % 180;
}
var $G = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = EG(a), o = i * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, TG = zt, jG = Vi, CG = ec;
function MG(e) {
  return function(t, r, n) {
    var a = Object(t);
    if (!jG(t)) {
      var i = TG(r);
      t = CG(t), r = function(s) {
        return i(a[s], s, a);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? a[i ? t[o] : o] : void 0;
  };
}
var kG = MG, IG = Gx;
function NG(e) {
  var t = IG(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var RG = NG, DG = Kb, LG = zt, BG = RG, FG = Math.max;
function zG(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var a = r == null ? 0 : BG(r);
  return a < 0 && (a = FG(n + a, 0)), DG(e, LG(t), a);
}
var WG = zG, UG = kG, GG = WG, HG = UG(GG), qG = HG;
const KG = /* @__PURE__ */ me(qG);
var VG = S$(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function Ps(e) {
  "@babel/helpers - typeof";
  return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ps(e);
}
var Dd = /* @__PURE__ */ Bt(void 0), Ld = /* @__PURE__ */ Bt(void 0), t1 = /* @__PURE__ */ Bt(void 0), r1 = /* @__PURE__ */ Bt({}), n1 = /* @__PURE__ */ Bt(void 0), a1 = /* @__PURE__ */ Bt(0), i1 = /* @__PURE__ */ Bt(0), Sm = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = VG(i);
  return /* @__PURE__ */ S.createElement(Dd.Provider, {
    value: n
  }, /* @__PURE__ */ S.createElement(Ld.Provider, {
    value: a
  }, /* @__PURE__ */ S.createElement(r1.Provider, {
    value: i
  }, /* @__PURE__ */ S.createElement(t1.Provider, {
    value: l
  }, /* @__PURE__ */ S.createElement(n1.Provider, {
    value: o
  }, /* @__PURE__ */ S.createElement(a1.Provider, {
    value: u
  }, /* @__PURE__ */ S.createElement(i1.Provider, {
    value: c
  }, s)))))));
}, YG = function() {
  return et(n1);
};
function o1(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var s1 = function(t) {
  var r = et(Dd);
  r == null && (process.env.NODE_ENV !== "production" ? Qe(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Qe());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Qe(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(Ps(t), "]. ").concat(o1(r))) : Qe()), n;
}, XG = function() {
  var t = et(Dd);
  return yr(t);
}, ZG = function() {
  var t = et(Ld), r = KG(t, function(n) {
    return Vx(n.domain, Number.isFinite);
  });
  return r || yr(t);
}, c1 = function(t) {
  var r = et(Ld);
  r == null && (process.env.NODE_ENV !== "production" ? Qe(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Qe());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Qe(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(Ps(t), "]. ").concat(o1(r))) : Qe()), n;
}, JG = function() {
  var t = et(t1);
  return t;
}, QG = function() {
  return et(r1);
}, Bd = function() {
  return et(i1);
}, Fd = function() {
  return et(a1);
};
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function e7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function t7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l1(n.key), n);
  }
}
function r7(e, t, r) {
  return t && t7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n7(e, t, r) {
  return t = Es(t), a7(e, u1() ? Reflect.construct(t, r || [], Es(e).constructor) : t.apply(e, r));
}
function a7(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return i7(e);
}
function i7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (u1 = function() {
    return !!e;
  })();
}
function Es(e) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Es(e);
}
function o7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && of(e, t);
}
function of(e, t) {
  return of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, of(e, t);
}
function Am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), !0).forEach(function(n) {
      zd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zd(e, t, r) {
  return t = l1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l1(e) {
  var t = s7(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function s7(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function c7(e, t) {
  return d7(e) || f7(e, t) || l7(e, t) || u7();
}
function u7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l7(e, t) {
  if (e) {
    if (typeof e == "string") return Em(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Em(e, t);
  }
}
function Em(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function f7(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function d7(e) {
  if (Array.isArray(e)) return e;
}
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sf.apply(this, arguments);
}
var p7 = function(t, r) {
  var n;
  return /* @__PURE__ */ S.isValidElement(t) ? n = /* @__PURE__ */ S.cloneElement(t, r) : ae(t) ? n = t(r) : n = /* @__PURE__ */ S.createElement("line", sf({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, h7 = function(t, r, n, a, i, o, s, c, u) {
  var l = i.x, f = i.y, d = i.width, p = i.height;
  if (n) {
    var v = u.y, y = t.y.apply(v, {
      position: o
    });
    if (Rt(u, "discard") && !t.y.isInRange(y))
      return null;
    var h = [{
      x: l + d,
      y
    }, {
      x: l,
      y
    }];
    return c === "left" ? h.reverse() : h;
  }
  if (r) {
    var g = u.x, w = t.x.apply(g, {
      position: o
    });
    if (Rt(u, "discard") && !t.x.isInRange(w))
      return null;
    var b = [{
      x: w,
      y: f + p
    }, {
      x: w,
      y: f
    }];
    return s === "top" ? b.reverse() : b;
  }
  if (a) {
    var O = u.segment, m = O.map(function(x) {
      return t.apply(x, {
        position: o
      });
    });
    return Rt(u, "discard") && L9(m, function(x) {
      return !t.isInRange(x);
    }) ? null : m;
  }
  return null;
};
function v7(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, c = e.alwaysShow, u = YG(), l = s1(a), f = c1(i), d = JG();
  if (!u || !d)
    return null;
  $t(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Rd({
    x: l.scale,
    y: f.scale
  }), v = Ne(t), y = Ne(r), h = n && n.length === 2, g = h7(p, v, y, h, d, e.position, l.orientation, f.orientation, e);
  if (!g)
    return null;
  var w = c7(g, 2), b = w[0], O = b.x, m = b.y, x = w[1], _ = x.x, P = x.y, $ = Rt(e, "hidden") ? "url(#".concat(u, ")") : void 0, M = Pm(Pm({
    clipPath: $
  }, Z(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: _,
    y2: P
  });
  return /* @__PURE__ */ S.createElement(ue, {
    className: ce("recharts-reference-line", s)
  }, p7(o, M), Le.renderCallByParent(e, PG({
    x1: O,
    y1: m,
    x2: _,
    y2: P
  })));
}
var Wd = /* @__PURE__ */ function(e) {
  function t() {
    return e7(this, t), n7(this, t, arguments);
  }
  return o7(t, e), r7(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ S.createElement(v7, this.props);
    }
  }]);
}(S.Component);
zd(Wd, "displayName", "ReferenceLine");
zd(Wd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function $m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), !0).forEach(function(n) {
      bc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, d1(n.key), n);
  }
}
function g7(e, t, r) {
  return t && m7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b7(e, t, r) {
  return t = $s(t), x7(e, f1() ? Reflect.construct(t, r || [], $s(e).constructor) : t.apply(e, r));
}
function x7(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return w7(e);
}
function w7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (f1 = function() {
    return !!e;
  })();
}
function $s(e) {
  return $s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $s(e);
}
function O7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uf(e, t);
}
function uf(e, t) {
  return uf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, uf(e, t);
}
function bc(e, t, r) {
  return t = d1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d1(e) {
  var t = _7(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function _7(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var S7 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Rd({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Rt(t, "discard") && !o.isInRange(s) ? null : s;
}, xc = /* @__PURE__ */ function(e) {
  function t() {
    return y7(this, t), b7(this, t, arguments);
  }
  return O7(t, e), g7(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = Ne(a), l = Ne(i);
      if ($t(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l)
        return null;
      var f = S7(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, v = this.props, y = v.shape, h = v.className, g = Rt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, w = Tm(Tm({
        clipPath: g
      }, Z(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ S.createElement(ue, {
        className: ce("recharts-reference-dot", h)
      }, t.renderDot(y, w), Le.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(S.Component);
bc(xc, "displayName", "ReferenceDot");
bc(xc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
bc(xc, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ S.isValidElement(e) ? r = /* @__PURE__ */ S.cloneElement(e, t) : ae(e) ? r = e(t) : r = /* @__PURE__ */ S.createElement(_a, cf({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lf.apply(this, arguments);
}
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
function jm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jm(Object(r), !0).forEach(function(n) {
      wc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P7(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, h1(n.key), n);
  }
}
function E7(e, t, r) {
  return t && P7(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $7(e, t, r) {
  return t = Ts(t), T7(e, p1() ? Reflect.construct(t, r || [], Ts(e).constructor) : t.apply(e, r));
}
function T7(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j7(e);
}
function j7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function p1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (p1 = function() {
    return !!e;
  })();
}
function Ts(e) {
  return Ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ts(e);
}
function C7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ff(e, t);
}
function ff(e, t) {
  return ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ff(e, t);
}
function wc(e, t, r) {
  return t = h1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h1(e) {
  var t = M7(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function M7(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var k7 = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, c = i.y1, u = i.y2, l = i.xAxis, f = i.yAxis;
  if (!l || !f) return null;
  var d = Rd({
    x: l.scale,
    y: f.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(c, {
      position: "start"
    }) : d.y.rangeMin
  }, v = {
    x: r ? d.x.apply(s, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(u, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Rt(i, "discard") && (!d.isInRange(p) || !d.isInRange(v)) ? null : Qx(p, v);
}, Oc = /* @__PURE__ */ function(e) {
  function t() {
    return A7(this, t), $7(this, t, arguments);
  }
  return C7(t, e), E7(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
      $t(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ne(a), d = Ne(i), p = Ne(o), v = Ne(s), y = this.props.shape;
      if (!f && !d && !p && !v && !y)
        return null;
      var h = k7(f, d, p, v, this.props);
      if (!h && !y)
        return null;
      var g = Rt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ S.createElement(ue, {
        className: ce("recharts-reference-area", c)
      }, t.renderRect(y, Cm(Cm({
        clipPath: g
      }, Z(this.props, !0)), h)), Le.renderCallByParent(this.props, h));
    }
  }]);
}(S.Component);
wc(Oc, "displayName", "ReferenceArea");
wc(Oc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
wc(Oc, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ S.isValidElement(e) ? r = /* @__PURE__ */ S.cloneElement(e, t) : ae(e) ? r = e(t) : r = /* @__PURE__ */ S.createElement(Nd, lf({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function v1(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function I7(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return $G(n, r);
}
function N7(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function js(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function R7(e, t) {
  return v1(e, t + 1);
}
function D7(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var v = n == null ? void 0 : n[c];
    if (v === void 0)
      return {
        v: v1(n, u)
      };
    var y = c, h, g = function() {
      return h === void 0 && (h = r(v, y)), h;
    }, w = v.coordinate, b = c === 0 || js(e, w, g, l, s);
    b || (c = 0, l = o, u += 1), b && (l = w + e * (g() / 2 + a), c += u);
  }, d; u <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function zi(e) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e);
}
function Mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mm(Object(r), !0).forEach(function(n) {
      L7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L7(e, t, r) {
  return t = B7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B7(e) {
  var t = F7(e, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function F7(e, t) {
  if (zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function z7(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, s = t.start, c = t.end, u = function(d) {
    var p = i[d], v, y = function() {
      return v === void 0 && (v = r(p, d)), v;
    };
    if (d === o - 1) {
      var h = e * (p.coordinate + e * y() / 2 - c);
      i[d] = p = Ue(Ue({}, p), {}, {
        tickCoord: h > 0 ? p.coordinate - h * e : p.coordinate
      });
    } else
      i[d] = p = Ue(Ue({}, p), {}, {
        tickCoord: p.coordinate
      });
    var g = js(e, p.tickCoord, y, s, c);
    g && (c = p.tickCoord - e * (y() / 2 + a), i[d] = Ue(Ue({}, p), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    u(l);
  return i;
}
function W7(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (i) {
    var l = n[s - 1], f = r(l, s - 1), d = e * (l.coordinate + e * f / 2 - u);
    o[s - 1] = l = Ue(Ue({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var p = js(e, l.tickCoord, function() {
      return f;
    }, c, u);
    p && (u = l.tickCoord - e * (f / 2 + a), o[s - 1] = Ue(Ue({}, l), {}, {
      isShow: !0
    }));
  }
  for (var v = i ? s - 1 : s, y = function(w) {
    var b = o[w], O, m = function() {
      return O === void 0 && (O = r(b, w)), O;
    };
    if (w === 0) {
      var x = e * (b.coordinate - e * m() / 2 - c);
      o[w] = b = Ue(Ue({}, b), {}, {
        tickCoord: x < 0 ? b.coordinate - x * e : b.coordinate
      });
    } else
      o[w] = b = Ue(Ue({}, b), {}, {
        tickCoord: b.coordinate
      });
    var _ = js(e, b.tickCoord, m, c, u);
    _ && (c = b.tickCoord + e * (m() / 2 + a), o[w] = Ue(Ue({}, b), {}, {
      isShow: !0
    }));
  }, h = 0; h < v; h++)
    y(h);
  return o;
}
function Ud(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, c = e.interval, u = e.tickFormatter, l = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (H(c) || Wt.isSsr)
    return R7(a, typeof c == "number" && H(c) ? c : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", v = l && p === "width" ? Xa(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(b, O) {
    var m = ae(u) ? u(b.value, O) : b.value;
    return p === "width" ? I7(Xa(m, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : Xa(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, h = a.length >= 2 ? Ve(a[1].coordinate - a[0].coordinate) : 1, g = N7(i, h, p);
  return c === "equidistantPreserveStart" ? D7(h, g, y, a, o) : (c === "preserveStart" || c === "preserveStartEnd" ? d = W7(h, g, y, a, o, c === "preserveStartEnd") : d = z7(h, g, y, a, o), d.filter(function(w) {
    return w.isShow;
  }));
}
var U7 = ["viewBox"], G7 = ["viewBox"], H7 = ["ticks"];
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function An() {
  return An = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, An.apply(this, arguments);
}
function km(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? km(Object(r), !0).forEach(function(n) {
      Gd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : km(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ou(e, t) {
  if (e == null) return {};
  var r = q7(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function q7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function K7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Im(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, m1(n.key), n);
  }
}
function V7(e, t, r) {
  return t && Im(e.prototype, t), r && Im(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y7(e, t, r) {
  return t = Cs(t), X7(e, y1() ? Reflect.construct(t, r || [], Cs(e).constructor) : t.apply(e, r));
}
function X7(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z7(e);
}
function Z7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y1 = function() {
    return !!e;
  })();
}
function Cs(e) {
  return Cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Cs(e);
}
function J7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && df(e, t);
}
function df(e, t) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, df(e, t);
}
function Gd(e, t, r) {
  return t = m1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m1(e) {
  var t = Q7(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function Q7(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Pa = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return K7(this, t), n = Y7(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return J7(t, e), V7(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Ou(n, U7), s = this.props, c = s.viewBox, u = Ou(s, G7);
      return !$n(i, c) || !$n(o, u) || !$n(a, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var a = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        a && this.setState({
          fontSize: window.getComputedStyle(a).fontSize,
          letterSpacing: window.getComputedStyle(a).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var a = this.props, i = a.x, o = a.y, s = a.width, c = a.height, u = a.orientation, l = a.tickSize, f = a.mirror, d = a.tickMargin, p, v, y, h, g, w, b = f ? -1 : 1, O = n.tickSize || l, m = H(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (u) {
        case "top":
          p = v = n.coordinate, h = o + +!f * c, y = h - b * O, w = y - b * d, g = m;
          break;
        case "left":
          y = h = n.coordinate, v = i + +!f * s, p = v - b * O, g = p - b * d, w = m;
          break;
        case "right":
          y = h = n.coordinate, v = i + +f * s, p = v + b * O, g = p + b * d, w = m;
          break;
        default:
          p = v = n.coordinate, h = o + +f * c, y = h + b * O, w = y + b * d, g = m;
          break;
      }
      return {
        line: {
          x1: p,
          y1: y,
          x2: v,
          y2: h
        },
        tick: {
          x: g,
          y: w
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, a = n.orientation, i = n.mirror, o;
      switch (a) {
        case "left":
          o = i ? "start" : "end";
          break;
        case "right":
          o = i ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, a = n.orientation, i = n.mirror, o = "end";
      switch (a) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = i ? "start" : "end";
          break;
        default:
          o = i ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, c = n.orientation, u = n.mirror, l = n.axisLine, f = qe(qe(qe({}, Z(this.props, !1)), Z(l, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var d = +(c === "top" && !u || c === "bottom" && u);
        f = qe(qe({}, f), {}, {
          x1: a,
          y1: i + d * s,
          x2: a + o,
          y2: i + d * s
        });
      } else {
        var p = +(c === "left" && !u || c === "right" && u);
        f = qe(qe({}, f), {}, {
          x1: a + p * o,
          y1: i,
          x2: a + p * o,
          y2: i + s
        });
      }
      return /* @__PURE__ */ S.createElement("line", An({}, f, {
        className: ce("recharts-cartesian-axis-line", st(l, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, a, i) {
        var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, p = Ud(qe(qe({}, this.props), {}, {
          ticks: n
        }), a, i), v = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), h = Z(this.props, !1), g = Z(l, !1), w = qe(qe({}, h), {}, {
          fill: "none"
        }, Z(c, !1)), b = p.map(function(O, m) {
          var x = o.getTickLineCoord(O), _ = x.line, P = x.tick, $ = qe(qe(qe(qe({
            textAnchor: v,
            verticalAnchor: y
          }, h), {}, {
            stroke: "none",
            fill: u
          }, g), P), {}, {
            index: m,
            payload: O,
            visibleTicksCount: p.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ S.createElement(ue, An({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, Ar(o.props, O, m)), c && /* @__PURE__ */ S.createElement("line", An({}, w, _, {
            className: ce("recharts-cartesian-axis-tick-line", st(c, "className"))
          })), l && t.renderTickItem(l, $, "".concat(ae(f) ? f(O.value, m) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ S.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, b);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, s = a.height, c = a.ticksGenerator, u = a.className, l = a.hide;
      if (l)
        return null;
      var f = this.props, d = f.ticks, p = Ou(f, H7), v = d;
      return ae(c) && (v = d && d.length > 0 ? c(this.props) : c(p)), o <= 0 || s <= 0 || !v || !v.length ? null : /* @__PURE__ */ S.createElement(ue, {
        className: ce("recharts-cartesian-axis", u),
        ref: function(h) {
          n.layerReference = h;
        }
      }, i && this.renderAxisLine(), this.renderTicks(v, this.state.fontSize, this.state.letterSpacing), Le.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ S.isValidElement(n) ? o = /* @__PURE__ */ S.cloneElement(n, a) : ae(n) ? o = n(a) : o = /* @__PURE__ */ S.createElement(an, An({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
}(ng);
Gd(Pa, "displayName", "CartesianAxis");
Gd(Pa, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var eH = ["x1", "y1", "x2", "y2", "key"], tH = ["offset"];
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function Nm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nm(Object(r), !0).forEach(function(n) {
      rH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rH(e, t, r) {
  return t = nH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nH(e) {
  var t = aH(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function aH(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xr() {
  return Xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xr.apply(this, arguments);
}
function Rm(e, t) {
  if (e == null) return {};
  var r = iH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var oH = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, a = t.x, i = t.y, o = t.width, s = t.height, c = t.ry;
  return /* @__PURE__ */ S.createElement("rect", {
    x: a,
    y: i,
    ry: c,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function g1(e, t) {
  var r;
  if (/* @__PURE__ */ S.isValidElement(e))
    r = /* @__PURE__ */ S.cloneElement(e, t);
  else if (ae(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, c = Rm(t, eH), u = Z(c, !1);
    u.offset;
    var l = Rm(u, tH);
    r = /* @__PURE__ */ S.createElement("line", Xr({}, l, {
      x1: n,
      y1: a,
      x2: i,
      y2: o,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function sH(e) {
  var t = e.x, r = e.width, n = e.horizontal, a = n === void 0 ? !0 : n, i = e.horizontalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, c) {
    var u = Ge(Ge({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(c),
      index: c
    });
    return g1(a, u);
  });
  return /* @__PURE__ */ S.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function cH(e) {
  var t = e.y, r = e.height, n = e.vertical, a = n === void 0 ? !0 : n, i = e.verticalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, c) {
    var u = Ge(Ge({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(c),
      index: c
    });
    return g1(a, u);
  });
  return /* @__PURE__ */ S.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function uH(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, a = e.y, i = e.width, o = e.height, s = e.horizontalPoints, c = e.horizontal, u = c === void 0 ? !0 : c;
  if (!u || !t || !t.length)
    return null;
  var l = s.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, p) {
    return d - p;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(d, p) {
    var v = !l[p + 1], y = v ? a + o - d : l[p + 1] - d;
    if (y <= 0)
      return null;
    var h = p % t.length;
    return /* @__PURE__ */ S.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: y,
      width: i,
      stroke: "none",
      fill: t[h],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ S.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function lH(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, a = e.fillOpacity, i = e.x, o = e.y, s = e.width, c = e.height, u = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var l = u.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, p) {
    return d - p;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(d, p) {
    var v = !l[p + 1], y = v ? i + s - d : l[p + 1] - d;
    if (y <= 0)
      return null;
    var h = p % n.length;
    return /* @__PURE__ */ S.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: o,
      width: y,
      height: c,
      stroke: "none",
      fill: n[h],
      fillOpacity: a,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ S.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var fH = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return dx(Ud(Ge(Ge(Ge({}, Pa.defaultProps), n), {}, {
    ticks: Yt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, dH = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return dx(Ud(Ge(Ge(Ge({}, Pa.defaultProps), n), {}, {
    ticks: Yt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.top, o.top + o.height, r);
}, gn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function b1(e) {
  var t, r, n, a, i, o, s = Bd(), c = Fd(), u = QG(), l = Ge(Ge({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : gn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : gn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : gn.horizontal,
    horizontalFill: (a = e.horizontalFill) !== null && a !== void 0 ? a : gn.horizontalFill,
    vertical: (i = e.vertical) !== null && i !== void 0 ? i : gn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : gn.verticalFill,
    x: H(e.x) ? e.x : u.left,
    y: H(e.y) ? e.y : u.top,
    width: H(e.width) ? e.width : u.width,
    height: H(e.height) ? e.height : u.height
  }), f = l.x, d = l.y, p = l.width, v = l.height, y = l.syncWithTicks, h = l.horizontalValues, g = l.verticalValues, w = XG(), b = ZG();
  if (!H(p) || p <= 0 || !H(v) || v <= 0 || !H(f) || f !== +f || !H(d) || d !== +d)
    return null;
  var O = l.verticalCoordinatesGenerator || fH, m = l.horizontalCoordinatesGenerator || dH, x = l.horizontalPoints, _ = l.verticalPoints;
  if ((!x || !x.length) && ae(m)) {
    var P = h && h.length, $ = m({
      yAxis: b ? Ge(Ge({}, b), {}, {
        ticks: P ? h : b.ticks
      }) : void 0,
      width: s,
      height: c,
      offset: u
    }, P ? !0 : y);
    $t(Array.isArray($), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(sn($), "]")), Array.isArray($) && (x = $);
  }
  if ((!_ || !_.length) && ae(O)) {
    var M = g && g.length, T = O({
      xAxis: w ? Ge(Ge({}, w), {}, {
        ticks: M ? g : w.ticks
      }) : void 0,
      width: s,
      height: c,
      offset: u
    }, M ? !0 : y);
    $t(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(sn(T), "]")), Array.isArray(T) && (_ = T);
  }
  return /* @__PURE__ */ S.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ S.createElement(oH, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ S.createElement(sH, Xr({}, l, {
    offset: u,
    horizontalPoints: x,
    xAxis: w,
    yAxis: b
  })), /* @__PURE__ */ S.createElement(cH, Xr({}, l, {
    offset: u,
    verticalPoints: _,
    xAxis: w,
    yAxis: b
  })), /* @__PURE__ */ S.createElement(uH, Xr({}, l, {
    horizontalPoints: x
  })), /* @__PURE__ */ S.createElement(lH, Xr({}, l, {
    verticalPoints: _
  })));
}
b1.displayName = "CartesianGrid";
var pH = ["type", "layout", "connectNulls", "ref"], hH = ["key"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function Dm(e, t) {
  if (e == null) return {};
  var r = vH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ri.apply(this, arguments);
}
function Lm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lm(Object(r), !0).forEach(function(n) {
      St(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bn(e) {
  return bH(e) || gH(e) || mH(e) || yH();
}
function yH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mH(e, t) {
  if (e) {
    if (typeof e == "string") return pf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pf(e, t);
  }
}
function gH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bH(e) {
  if (Array.isArray(e)) return pf(e);
}
function pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, w1(n.key), n);
  }
}
function wH(e, t, r) {
  return t && Bm(e.prototype, t), r && Bm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function OH(e, t, r) {
  return t = Ms(t), _H(e, x1() ? Reflect.construct(t, r || [], Ms(e).constructor) : t.apply(e, r));
}
function _H(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return SH(e);
}
function SH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function x1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (x1 = function() {
    return !!e;
  })();
}
function Ms(e) {
  return Ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ms(e);
}
function AH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hf(e, t);
}
function hf(e, t) {
  return hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hf(e, t);
}
function St(e, t, r) {
  return t = w1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w1(e) {
  var t = PH(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function PH(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var cn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    xH(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = OH(this, t, [].concat(a)), St(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), St(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), St(r, "getStrokeDasharray", function(o, s, c) {
      var u = c.reduce(function(g, w) {
        return g + w;
      });
      if (!u)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / u), f = o % u, d = s - o, p = [], v = 0, y = 0; v < c.length; y += c[v], ++v)
        if (y + c[v] > f) {
          p = [].concat(bn(c.slice(0, v)), [f - y]);
          break;
        }
      var h = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(bn(t.repeat(c, l)), bn(p), h).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), St(r, "id", Tr("recharts-line-")), St(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), St(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), St(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return AH(t, e), wH(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.points, s = i.xAxis, c = i.yAxis, u = i.layout, l = i.children, f = Ze(l, Oa);
      if (!f)
        return null;
      var d = function(y, h) {
        return {
          x: y.x,
          y: y.y,
          value: y.value,
          errorVal: xe(y.payload, h)
        };
      }, p = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ S.createElement(ue, p, f.map(function(v) {
        return /* @__PURE__ */ S.cloneElement(v, {
          key: "bar-".concat(v.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: c,
          layout: u,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var s = this.props, c = s.dot, u = s.points, l = s.dataKey, f = Z(this.props, !1), d = Z(c, !0), p = u.map(function(y, h) {
        var g = nt(nt(nt({
          key: "dot-".concat(h),
          r: 3
        }, f), d), {}, {
          index: h,
          cx: y.x,
          cy: y.y,
          value: y.value,
          dataKey: l,
          payload: y.payload,
          points: u
        });
        return t.renderDotItem(c, g);
      }), v = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ S.createElement(ue, ri({
        className: "recharts-line-dots",
        key: "dots"
      }, v), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, c = s.type, u = s.layout, l = s.connectNulls;
      s.ref;
      var f = Dm(s, pH), d = nt(nt(nt({}, Z(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: c,
        layout: u,
        connectNulls: l
      });
      return /* @__PURE__ */ S.createElement(wr, ri({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, c = o.strokeDasharray, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, v = o.animateNewValues, y = o.width, h = o.height, g = this.state, w = g.prevPoints, b = g.totalLength;
      return /* @__PURE__ */ S.createElement(ct, {
        begin: l,
        duration: f,
        isActive: u,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(O) {
        var m = O.t;
        if (w) {
          var x = w.length / s.length, _ = s.map(function(j, N) {
            var D = Math.floor(N * x);
            if (w[D]) {
              var I = w[D], R = be(I.x, j.x), F = be(I.y, j.y);
              return nt(nt({}, j), {}, {
                x: R(m),
                y: F(m)
              });
            }
            if (v) {
              var U = be(y * 2, j.x), q = be(h / 2, j.y);
              return nt(nt({}, j), {}, {
                x: U(m),
                y: q(m)
              });
            }
            return nt(nt({}, j), {}, {
              x: j.x,
              y: j.y
            });
          });
          return i.renderCurveStatically(_, n, a);
        }
        var P = be(0, b), $ = P(m), M;
        if (c) {
          var T = "".concat(c).split(/[,\s]+/gim).map(function(j) {
            return parseFloat(j);
          });
          M = i.getStrokeDasharray($, b, T);
        } else
          M = i.generateSimpleStrokeDasharray(b, $);
        return i.renderCurveStatically(s, n, a, {
          strokeDasharray: M
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.isAnimationActive, c = this.state, u = c.prevPoints, l = c.totalLength;
      return s && o && o.length && (!u && l > 0 || !ar(u, o)) ? this.renderCurveWithAnimation(n, a) : this.renderCurveStatically(o, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, c = a.className, u = a.xAxis, l = a.yAxis, f = a.top, d = a.left, p = a.width, v = a.height, y = a.isAnimationActive, h = a.id;
      if (i || !s || !s.length)
        return null;
      var g = this.state.isAnimationFinished, w = s.length === 1, b = ce("recharts-line", c), O = u && u.allowDataOverflow, m = l && l.allowDataOverflow, x = O || m, _ = ie(h) ? this.id : h, P = (n = Z(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, $ = P.r, M = $ === void 0 ? 3 : $, T = P.strokeWidth, j = T === void 0 ? 2 : T, N = ab(o) ? o : {}, D = N.clipDot, I = D === void 0 ? !0 : D, R = M * 2 + j;
      return /* @__PURE__ */ S.createElement(ue, {
        className: b
      }, O || m ? /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("clipPath", {
        id: "clipPath-".concat(_)
      }, /* @__PURE__ */ S.createElement("rect", {
        x: O ? d : d - p / 2,
        y: m ? f : f - v / 2,
        width: O ? p : p * 2,
        height: m ? v : v * 2
      })), !I && /* @__PURE__ */ S.createElement("clipPath", {
        id: "clipPath-dots-".concat(_)
      }, /* @__PURE__ */ S.createElement("rect", {
        x: d - R / 2,
        y: f - R / 2,
        width: p + R,
        height: v + R
      }))) : null, !w && this.renderCurve(x, _), this.renderErrorBar(x, _), (w || o) && this.renderDots(x, I, _), (!y || g) && gt.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: a.curPoints
      } : n.points !== a.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, a) {
      for (var i = n.length % 2 !== 0 ? [].concat(bn(n), [0]) : n, o = [], s = 0; s < a; ++s)
        o = [].concat(bn(o), bn(i));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, a) {
      var i;
      if (/* @__PURE__ */ S.isValidElement(n))
        i = /* @__PURE__ */ S.cloneElement(n, a);
      else if (ae(n))
        i = n(a);
      else {
        var o = a.key, s = Dm(a, hH), c = ce("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ S.createElement(_a, ri({
          key: o
        }, s, {
          className: c
        }));
      }
      return i;
    }
  }]);
}(tt);
St(cn, "displayName", "Line");
St(cn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Wt.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
St(cn, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, c = e.displayedData, u = e.offset, l = t.layout, f = c.map(function(d, p) {
    var v = xe(d, o);
    return l === "horizontal" ? {
      x: zn({
        axis: r,
        ticks: a,
        bandSize: s,
        entry: d,
        index: p
      }),
      y: ie(v) ? null : n.scale(v),
      value: v,
      payload: d
    } : {
      x: ie(v) ? null : r.scale(v),
      y: zn({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: d,
        index: p
      }),
      value: v,
      payload: d
    };
  });
  return nt({
    points: f,
    layout: l
  }, u);
});
var EH = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], $H = ["key"], O1;
function ra(e) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
}
function _1(e, t) {
  if (e == null) return {};
  var r = TH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Zr() {
  return Zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zr.apply(this, arguments);
}
function Fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fm(Object(r), !0).forEach(function(n) {
      It(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, A1(n.key), n);
  }
}
function CH(e, t, r) {
  return t && zm(e.prototype, t), r && zm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MH(e, t, r) {
  return t = ks(t), kH(e, S1() ? Reflect.construct(t, r || [], ks(e).constructor) : t.apply(e, r));
}
function kH(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IH(e);
}
function IH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function S1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (S1 = function() {
    return !!e;
  })();
}
function ks(e) {
  return ks = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ks(e);
}
function NH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vf(e, t);
}
function vf(e, t) {
  return vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vf(e, t);
}
function It(e, t, r) {
  return t = A1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A1(e) {
  var t = RH(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function RH(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fr = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    jH(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = MH(this, t, [].concat(a)), It(r, "state", {
      isAnimationFinished: !0
    }), It(r, "id", Tr("recharts-area-")), It(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ae(o) && o();
    }), It(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ae(o) && o();
    }), r;
  }
  return NH(t, e), CH(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var c = this.props, u = c.dot, l = c.points, f = c.dataKey, d = Z(this.props, !1), p = Z(u, !0), v = l.map(function(h, g) {
        var w = hr(hr(hr({
          key: "dot-".concat(g),
          r: 3
        }, d), p), {}, {
          index: g,
          cx: h.x,
          cy: h.y,
          dataKey: f,
          value: h.value,
          payload: h.payload,
          points: l
        });
        return t.renderDotItem(u, w);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ S.createElement(ue, Zr({
        className: "recharts-area-dots"
      }, y), v);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, c = o[0].x, u = o[o.length - 1].x, l = n * Math.abs(c - u), f = mr(o.map(function(d) {
        return d.y || 0;
      }));
      return H(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(mr(i.map(function(d) {
        return d.y || 0;
      })), f)), H(f) ? /* @__PURE__ */ S.createElement("rect", {
        x: c < u ? c : c - l,
        y: 0,
        width: l,
        height: Math.floor(f + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, c = o[0].y, u = o[o.length - 1].y, l = n * Math.abs(c - u), f = mr(o.map(function(d) {
        return d.x || 0;
      }));
      return H(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(mr(i.map(function(d) {
        return d.x || 0;
      })), f)), H(f) ? /* @__PURE__ */ S.createElement("rect", {
        x: 0,
        y: c < u ? c : c - l,
        width: f + (s ? parseInt("".concat(s), 10) : 1),
        height: Math.floor(l)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var a = this.props.layout;
      return a === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, a, i, o) {
      var s = this.props, c = s.layout, u = s.type, l = s.stroke, f = s.connectNulls, d = s.isRange;
      s.ref;
      var p = _1(s, EH);
      return /* @__PURE__ */ S.createElement(ue, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ S.createElement(wr, Zr({}, Z(p, !0), {
        points: n,
        connectNulls: f,
        type: u,
        baseLine: a,
        layout: c,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ S.createElement(wr, Zr({}, Z(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: u,
        connectNulls: f,
        fill: "none",
        points: n
      })), l !== "none" && d && /* @__PURE__ */ S.createElement(wr, Zr({}, Z(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: u,
        connectNulls: f,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, c = o.baseLine, u = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, v = this.state, y = v.prevPoints, h = v.prevBaseLine;
      return /* @__PURE__ */ S.createElement(ct, {
        begin: l,
        duration: f,
        isActive: u,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(g) {
        var w = g.t;
        if (y) {
          var b = y.length / s.length, O = s.map(function(P, $) {
            var M = Math.floor($ * b);
            if (y[M]) {
              var T = y[M], j = be(T.x, P.x), N = be(T.y, P.y);
              return hr(hr({}, P), {}, {
                x: j(w),
                y: N(w)
              });
            }
            return P;
          }), m;
          if (H(c) && typeof c == "number") {
            var x = be(h, c);
            m = x(w);
          } else if (ie(c) || va(c)) {
            var _ = be(h, 0);
            m = _(w);
          } else
            m = c.map(function(P, $) {
              var M = Math.floor($ * b);
              if (h[M]) {
                var T = h[M], j = be(T.x, P.x), N = be(T.y, P.y);
                return hr(hr({}, P), {}, {
                  x: j(w),
                  y: N(w)
                });
              }
              return P;
            });
          return i.renderAreaStatically(O, m, n, a);
        }
        return /* @__PURE__ */ S.createElement(ue, null, /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(w))), /* @__PURE__ */ S.createElement(ue, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(s, c, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.baseLine, c = i.isAnimationActive, u = this.state, l = u.prevPoints, f = u.prevBaseLine, d = u.totalLength;
      return c && o && o.length && (!l && d > 0 || !ar(l, o) || !ar(f, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, c = a.className, u = a.top, l = a.left, f = a.xAxis, d = a.yAxis, p = a.width, v = a.height, y = a.isAnimationActive, h = a.id;
      if (i || !s || !s.length)
        return null;
      var g = this.state.isAnimationFinished, w = s.length === 1, b = ce("recharts-area", c), O = f && f.allowDataOverflow, m = d && d.allowDataOverflow, x = O || m, _ = ie(h) ? this.id : h, P = (n = Z(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, $ = P.r, M = $ === void 0 ? 3 : $, T = P.strokeWidth, j = T === void 0 ? 2 : T, N = ab(o) ? o : {}, D = N.clipDot, I = D === void 0 ? !0 : D, R = M * 2 + j;
      return /* @__PURE__ */ S.createElement(ue, {
        className: b
      }, O || m ? /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("clipPath", {
        id: "clipPath-".concat(_)
      }, /* @__PURE__ */ S.createElement("rect", {
        x: O ? l : l - p / 2,
        y: m ? u : u - v / 2,
        width: O ? p : p * 2,
        height: m ? v : v * 2
      })), !I && /* @__PURE__ */ S.createElement("clipPath", {
        id: "clipPath-dots-".concat(_)
      }, /* @__PURE__ */ S.createElement("rect", {
        x: l - R / 2,
        y: u - R / 2,
        width: p + R,
        height: v + R
      }))) : null, w ? null : this.renderArea(x, _), (o || w) && this.renderDots(x, I, _), (!y || g) && gt.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: a.curPoints,
        prevBaseLine: a.curBaseLine
      } : n.points !== a.curPoints || n.baseLine !== a.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]);
}(tt);
O1 = fr;
It(fr, "displayName", "Area");
It(fr, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
It(fr, "getBaseValue", function(e, t, r, n) {
  var a = e.layout, i = e.baseValue, o = t.props.baseValue, s = o ?? i;
  if (H(s) && typeof s == "number")
    return s;
  var c = a === "horizontal" ? n : r, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), f = Math.min(u[0], u[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return s === "dataMin" ? u[0] : s === "dataMax" ? u[1] : u[0];
});
It(fr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, c = e.dataKey, u = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, v = u && u.length, y = O1.getBaseValue(t, r, n, a), h = p === "horizontal", g = !1, w = f.map(function(O, m) {
    var x;
    v ? x = u[l + m] : (x = xe(O, c), Array.isArray(x) ? g = !0 : x = [y, x]);
    var _ = x[1] == null || v && xe(O, c) == null;
    return h ? {
      x: zn({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: O,
        index: m
      }),
      y: _ ? null : a.scale(x[1]),
      value: x,
      payload: O
    } : {
      x: _ ? null : n.scale(x[1]),
      y: zn({
        axis: a,
        ticks: o,
        bandSize: s,
        entry: O,
        index: m
      }),
      value: x,
      payload: O
    };
  }), b;
  return v || g ? b = w.map(function(O) {
    var m = Array.isArray(O.value) ? O.value[0] : null;
    return h ? {
      x: O.x,
      y: m != null && O.y != null ? a.scale(m) : null
    } : {
      x: m != null ? n.scale(m) : null,
      y: O.y
    };
  }) : b = h ? a.scale(y) : n.scale(y), hr({
    points: w,
    baseLine: b,
    layout: p,
    isRange: g
  }, d);
});
It(fr, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ S.isValidElement(e))
    r = /* @__PURE__ */ S.cloneElement(e, t);
  else if (ae(e))
    r = e(t);
  else {
    var n = ce("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = _1(t, $H);
    r = /* @__PURE__ */ S.createElement(_a, Zr({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function na(e) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e);
}
function DH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LH(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $1(n.key), n);
  }
}
function BH(e, t, r) {
  return t && LH(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function FH(e, t, r) {
  return t = Is(t), zH(e, P1() ? Reflect.construct(t, r || [], Is(e).constructor) : t.apply(e, r));
}
function zH(e, t) {
  if (t && (na(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return WH(e);
}
function WH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function P1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (P1 = function() {
    return !!e;
  })();
}
function Is(e) {
  return Is = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Is(e);
}
function UH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yf(e, t);
}
function yf(e, t) {
  return yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yf(e, t);
}
function E1(e, t, r) {
  return t = $1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $1(e) {
  var t = GH(e, "string");
  return na(t) == "symbol" ? t : t + "";
}
function GH(e, t) {
  if (na(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _c = /* @__PURE__ */ function(e) {
  function t() {
    return DH(this, t), FH(this, t, arguments);
  }
  return UH(t, e), BH(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(S.Component);
E1(_c, "displayName", "ZAxis");
E1(_c, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var HH = ["option", "isActive"];
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ni.apply(this, arguments);
}
function qH(e, t) {
  if (e == null) return {};
  var r = KH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function VH(e) {
  var t = e.option, r = e.isActive, n = qH(e, HH);
  return typeof t == "string" ? /* @__PURE__ */ S.createElement(ms, ni({
    option: /* @__PURE__ */ S.createElement(Qs, ni({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ S.createElement(ms, ni({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, n));
}
function aa(e) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, aa(e);
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ai.apply(this, arguments);
}
function Wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wm(Object(r), !0).forEach(function(n) {
      br(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Um(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j1(n.key), n);
  }
}
function XH(e, t, r) {
  return t && Um(e.prototype, t), r && Um(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZH(e, t, r) {
  return t = Ns(t), JH(e, T1() ? Reflect.construct(t, r || [], Ns(e).constructor) : t.apply(e, r));
}
function JH(e, t) {
  if (t && (aa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QH(e);
}
function QH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function T1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (T1 = function() {
    return !!e;
  })();
}
function Ns(e) {
  return Ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ns(e);
}
function eq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mf(e, t);
}
function mf(e, t) {
  return mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, mf(e, t);
}
function br(e, t, r) {
  return t = j1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j1(e) {
  var t = tq(e, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function tq(e, t) {
  if (aa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Sc = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    YH(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = ZH(this, t, [].concat(a)), br(r, "state", {
      isAnimationFinished: !1
    }), br(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), br(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), br(r, "id", Tr("recharts-scatter-")), r;
  }
  return eq(t, e), XH(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.activeShape, c = i.activeIndex, u = Z(this.props, !1);
      return n.map(function(l, f) {
        var d = c === f, p = d ? s : o, v = pt(pt({}, u), l);
        return /* @__PURE__ */ S.createElement(ue, ai({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(f)
        }, Ar(a.props, l, f), {
          role: "img"
        }), /* @__PURE__ */ S.createElement(VH, ai({
          option: p,
          isActive: d,
          key: "symbol-".concat(f)
        }, v)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.points, o = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, u = a.animationEasing, l = a.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ S.createElement(ct, {
        begin: s,
        duration: c,
        isActive: o,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var p = d.t, v = i.map(function(y, h) {
          var g = f && f[h];
          if (g) {
            var w = be(g.cx, y.cx), b = be(g.cy, y.cy), O = be(g.size, y.size);
            return pt(pt({}, y), {}, {
              cx: w(p),
              cy: b(p),
              size: O(p)
            });
          }
          var m = be(0, y.size);
          return pt(pt({}, y), {}, {
            size: m(p)
          });
        });
        return /* @__PURE__ */ S.createElement(ue, null, n.renderSymbolsStatically(v));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, a = n.points, i = n.isAnimationActive, o = this.state.prevPoints;
      return i && a && a.length && (!o || !ar(o, a)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(a);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var a = this.props, i = a.points, o = a.xAxis, s = a.yAxis, c = a.children, u = Ze(c, Oa);
      return u ? u.map(function(l, f) {
        var d = l.props, p = d.direction, v = d.dataKey;
        return /* @__PURE__ */ S.cloneElement(l, {
          key: "".concat(p, "-").concat(v, "-").concat(i[f]),
          data: i,
          xAxis: o,
          yAxis: s,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(h, g) {
            return {
              x: h.cx,
              y: h.cy,
              value: p === "x" ? +h.node.x : +h.node.y,
              errorVal: xe(h, g)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, a = n.points, i = n.line, o = n.lineType, s = n.lineJointType, c = Z(this.props, !1), u = Z(i, !1), l, f;
      if (o === "joint")
        l = a.map(function(b) {
          return {
            x: b.cx,
            y: b.cy
          };
        });
      else if (o === "fitting") {
        var d = xT(a), p = d.xmin, v = d.xmax, y = d.a, h = d.b, g = function(O) {
          return y * O + h;
        };
        l = [{
          x: p,
          y: g(p)
        }, {
          x: v,
          y: g(v)
        }];
      }
      var w = pt(pt(pt({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, u), {}, {
        points: l
      });
      return /* @__PURE__ */ S.isValidElement(i) ? f = /* @__PURE__ */ S.cloneElement(i, w) : ae(i) ? f = i(w) : f = /* @__PURE__ */ S.createElement(wr, ai({}, w, {
        type: s
      })), /* @__PURE__ */ S.createElement(ue, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.points, o = n.line, s = n.className, c = n.xAxis, u = n.yAxis, l = n.left, f = n.top, d = n.width, p = n.height, v = n.id, y = n.isAnimationActive;
      if (a || !i || !i.length)
        return null;
      var h = this.state.isAnimationFinished, g = ce("recharts-scatter", s), w = c && c.allowDataOverflow, b = u && u.allowDataOverflow, O = w || b, m = ie(v) ? this.id : v;
      return /* @__PURE__ */ S.createElement(ue, {
        className: g,
        clipPath: O ? "url(#clipPath-".concat(m, ")") : null
      }, w || b ? /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ S.createElement("rect", {
        x: w ? l : l - d / 2,
        y: b ? f : f - p / 2,
        width: w ? d : d * 2,
        height: b ? p : p * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ S.createElement(ue, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!y || h) && gt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: a.curPoints
      } : n.points !== a.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }]);
}(tt);
br(Sc, "displayName", "Scatter");
br(Sc, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
br(Sc, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, a = e.item, i = e.displayedData, o = e.xAxisTicks, s = e.yAxisTicks, c = e.offset, u = a.props.tooltipType, l = Ze(a.props.children, Yi), f = ie(t.dataKey) ? a.props.dataKey : t.dataKey, d = ie(r.dataKey) ? a.props.dataKey : r.dataKey, p = n && n.dataKey, v = n ? n.range : _c.defaultProps.range, y = v && v[0], h = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, w = i.map(function(b, O) {
    var m = xe(b, f), x = xe(b, d), _ = !ie(p) && xe(b, p) || "-", P = [{
      name: ie(t.dataKey) ? a.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: m,
      payload: b,
      dataKey: f,
      type: u
    }, {
      name: ie(r.dataKey) ? a.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: b,
      dataKey: d,
      type: u
    }];
    _ !== "-" && P.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: _,
      payload: b,
      dataKey: p,
      type: u
    });
    var $ = zn({
      axis: t,
      ticks: o,
      bandSize: h,
      entry: b,
      index: O,
      dataKey: f
    }), M = zn({
      axis: r,
      ticks: s,
      bandSize: g,
      entry: b,
      index: O,
      dataKey: d
    }), T = _ !== "-" ? n.scale(_) : y, j = Math.sqrt(Math.max(T, 0) / Math.PI);
    return pt(pt({}, b), {}, {
      cx: $,
      cy: M,
      x: $ - j,
      y: M - j,
      xAxis: t,
      yAxis: r,
      zAxis: n,
      width: 2 * j,
      height: 2 * j,
      size: T,
      node: {
        x: m,
        y: x,
        z: _
      },
      tooltipPayload: P,
      tooltipPosition: {
        x: $,
        y: M
      },
      payload: b
    }, l && l[O] && l[O].props);
  });
  return pt({
    points: w
  }, c);
});
function ia(e) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e);
}
function rq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, k1(n.key), n);
  }
}
function aq(e, t, r) {
  return t && nq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iq(e, t, r) {
  return t = Rs(t), oq(e, C1() ? Reflect.construct(t, r || [], Rs(e).constructor) : t.apply(e, r));
}
function oq(e, t) {
  if (t && (ia(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sq(e);
}
function sq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function C1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (C1 = function() {
    return !!e;
  })();
}
function Rs(e) {
  return Rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rs(e);
}
function cq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gf(e, t);
}
function gf(e, t) {
  return gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, gf(e, t);
}
function M1(e, t, r) {
  return t = k1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k1(e) {
  var t = uq(e, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function uq(e, t) {
  if (ia(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function lq(e) {
  var t = e.xAxisId, r = Bd(), n = Fd(), a = s1(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ S.createElement(Pa, bf({}, a, {
      className: ce("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return Yt(o, !0);
      }
    }))
  );
}
var Pr = /* @__PURE__ */ function(e) {
  function t() {
    return rq(this, t), iq(this, t, arguments);
  }
  return cq(t, e), aq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ S.createElement(lq, this.props);
    }
  }]);
}(S.Component);
M1(Pr, "displayName", "XAxis");
M1(Pr, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function oa(e) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
function fq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, R1(n.key), n);
  }
}
function pq(e, t, r) {
  return t && dq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hq(e, t, r) {
  return t = Ds(t), vq(e, I1() ? Reflect.construct(t, r || [], Ds(e).constructor) : t.apply(e, r));
}
function vq(e, t) {
  if (t && (oa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yq(e);
}
function yq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function I1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (I1 = function() {
    return !!e;
  })();
}
function Ds(e) {
  return Ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ds(e);
}
function mq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xf(e, t);
}
function N1(e, t, r) {
  return t = R1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R1(e) {
  var t = gq(e, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function gq(e, t) {
  if (oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wf.apply(this, arguments);
}
var bq = function(t) {
  var r = t.yAxisId, n = Bd(), a = Fd(), i = c1(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ S.createElement(Pa, wf({}, i, {
      className: ce("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: a
      },
      ticksGenerator: function(s) {
        return Yt(s, !0);
      }
    }))
  );
}, Er = /* @__PURE__ */ function(e) {
  function t() {
    return fq(this, t), hq(this, t, arguments);
  }
  return mq(t, e), pq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ S.createElement(bq, this.props);
    }
  }]);
}(S.Component);
N1(Er, "displayName", "YAxis");
N1(Er, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function Gm(e) {
  return _q(e) || Oq(e) || wq(e) || xq();
}
function xq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wq(e, t) {
  if (e) {
    if (typeof e == "string") return Of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Of(e, t);
  }
}
function Oq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _q(e) {
  if (Array.isArray(e)) return Of(e);
}
function Of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var _f = function(t, r, n, a, i) {
  var o = Ze(t, Wd), s = Ze(t, xc), c = [].concat(Gm(o), Gm(s)), u = Ze(t, Oc), l = "".concat(a, "Id"), f = a[0], d = r;
  if (c.length && (d = c.reduce(function(y, h) {
    if (h.props[l] === n && Rt(h.props, "extendDomain") && H(h.props[f])) {
      var g = h.props[f];
      return [Math.min(y[0], g), Math.max(y[1], g)];
    }
    return y;
  }, d)), u.length) {
    var p = "".concat(f, "1"), v = "".concat(f, "2");
    d = u.reduce(function(y, h) {
      if (h.props[l] === n && Rt(h.props, "extendDomain") && H(h.props[p]) && H(h.props[v])) {
        var g = h.props[p], w = h.props[v];
        return [Math.min(y[0], g, w), Math.max(y[1], g, w)];
      }
      return y;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(y, h) {
    return H(h) ? [Math.min(y[0], h), Math.max(y[1], h)] : y;
  }, d)), d;
}, D1 = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(c, u, l) {
    this.fn = c, this.context = u, this.once = l || !1;
  }
  function i(c, u, l, f, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var p = new a(l, f || c, d), v = r ? r + u : u;
    return c._events[v] ? c._events[v].fn ? c._events[v] = [c._events[v], p] : c._events[v].push(p) : (c._events[v] = p, c._eventsCount++), c;
  }
  function o(c, u) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[u];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var u = [], l, f;
    if (this._eventsCount === 0) return u;
    for (f in l = this._events)
      t.call(l, f) && u.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
  }, s.prototype.listeners = function(u) {
    var l = r ? r + u : u, f = this._events[l];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, p = f.length, v = new Array(p); d < p; d++)
      v[d] = f[d].fn;
    return v;
  }, s.prototype.listenerCount = function(u) {
    var l = r ? r + u : u, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, s.prototype.emit = function(u, l, f, d, p, v) {
    var y = r ? r + u : u;
    if (!this._events[y]) return !1;
    var h = this._events[y], g = arguments.length, w, b;
    if (h.fn) {
      switch (h.once && this.removeListener(u, h.fn, void 0, !0), g) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, l), !0;
        case 3:
          return h.fn.call(h.context, l, f), !0;
        case 4:
          return h.fn.call(h.context, l, f, d), !0;
        case 5:
          return h.fn.call(h.context, l, f, d, p), !0;
        case 6:
          return h.fn.call(h.context, l, f, d, p, v), !0;
      }
      for (b = 1, w = new Array(g - 1); b < g; b++)
        w[b - 1] = arguments[b];
      h.fn.apply(h.context, w);
    } else {
      var O = h.length, m;
      for (b = 0; b < O; b++)
        switch (h[b].once && this.removeListener(u, h[b].fn, void 0, !0), g) {
          case 1:
            h[b].fn.call(h[b].context);
            break;
          case 2:
            h[b].fn.call(h[b].context, l);
            break;
          case 3:
            h[b].fn.call(h[b].context, l, f);
            break;
          case 4:
            h[b].fn.call(h[b].context, l, f, d);
            break;
          default:
            if (!w) for (m = 1, w = new Array(g - 1); m < g; m++)
              w[m - 1] = arguments[m];
            h[b].fn.apply(h[b].context, w);
        }
    }
    return !0;
  }, s.prototype.on = function(u, l, f) {
    return i(this, u, l, f, !1);
  }, s.prototype.once = function(u, l, f) {
    return i(this, u, l, f, !0);
  }, s.prototype.removeListener = function(u, l, f, d) {
    var p = r ? r + u : u;
    if (!this._events[p]) return this;
    if (!l)
      return o(this, p), this;
    var v = this._events[p];
    if (v.fn)
      v.fn === l && (!d || v.once) && (!f || v.context === f) && o(this, p);
    else {
      for (var y = 0, h = [], g = v.length; y < g; y++)
        (v[y].fn !== l || d && !v[y].once || f && v[y].context !== f) && h.push(v[y]);
      h.length ? this._events[p] = h.length === 1 ? h[0] : h : o(this, p);
    }
    return this;
  }, s.prototype.removeAllListeners = function(u) {
    var l;
    return u ? (l = r ? r + u : u, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(D1);
var Sq = D1.exports;
const Aq = /* @__PURE__ */ me(Sq);
var _u = new Aq(), Su = "recharts.syncMouseEvents";
function Wi(e) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e);
}
function Pq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, L1(n.key), n);
  }
}
function $q(e, t, r) {
  return t && Eq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Au(e, t, r) {
  return t = L1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L1(e) {
  var t = Tq(e, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function Tq(e, t) {
  if (Wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var jq = /* @__PURE__ */ function() {
  function e() {
    Pq(this, e), Au(this, "activeIndex", 0), Au(this, "coordinateList", []), Au(this, "layout", "horizontal");
  }
  return $q(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, s = o === void 0 ? null : o, c = r.layout, u = c === void 0 ? null : c, l = r.offset, f = l === void 0 ? null : l, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = u ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, s = a.height, c = this.coordinateList[this.activeIndex].coordinate, u = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = i + c + u, d = o + this.offset.top + s / 2 + l;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function Cq(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], a = e == null ? void 0 : e[1];
    if (n && a && H(n) && H(a))
      return !0;
  }
  return !1;
}
function Mq(e, t, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - a : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - a,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function B1(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = de(t, r, n, a), s = de(t, r, n, i);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function kq(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, d = de(s, c, u, f), p = de(s, c, l, f);
      n = d.x, a = d.y, i = p.x, o = p.y;
    } else
      return B1(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
}
function Hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hm(Object(r), !0).forEach(function(n) {
      Iq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Iq(e, t, r) {
  return t = Nq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nq(e) {
  var t = Rq(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function Rq(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dq(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, c = e.offset, u = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var v, y = wr;
  if (d === "ScatterChart")
    v = o, y = t8;
  else if (d === "BarChart")
    v = Mq(f, o, c, l), y = Nd;
  else if (f === "radial") {
    var h = B1(o), g = h.cx, w = h.cy, b = h.radius, O = h.startAngle, m = h.endAngle;
    v = {
      cx: g,
      cy: w,
      startAngle: O,
      endAngle: m,
      innerRadius: b,
      outerRadius: b
    }, y = Ax;
  } else
    v = {
      points: kq(f, o, c)
    }, y = wr;
  var x = Oo(Oo(Oo(Oo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, c), v), Z(p, !1)), {}, {
    payload: s,
    payloadIndex: u,
    className: ce("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Et(p) ? /* @__PURE__ */ Ie(p, x) : /* @__PURE__ */ rg(y, x);
}
var Lq = ["item"], Bq = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function sa(e) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e);
}
function Pn() {
  return Pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pn.apply(this, arguments);
}
function qm(e, t) {
  return Wq(e) || zq(e, t) || z1(e, t) || Fq();
}
function Fq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function Wq(e) {
  if (Array.isArray(e)) return e;
}
function Km(e, t) {
  if (e == null) return {};
  var r = Uq(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Uq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Gq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, W1(n.key), n);
  }
}
function qq(e, t, r) {
  return t && Hq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Kq(e, t, r) {
  return t = Ls(t), Vq(e, F1() ? Reflect.construct(t, r || [], Ls(e).constructor) : t.apply(e, r));
}
function Vq(e, t) {
  if (t && (sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Yq(e);
}
function Yq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function F1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (F1 = function() {
    return !!e;
  })();
}
function Ls(e) {
  return Ls = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ls(e);
}
function Xq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Sf(e, t);
}
function ca(e) {
  return Qq(e) || Jq(e) || z1(e) || Zq();
}
function Zq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z1(e, t) {
  if (e) {
    if (typeof e == "string") return Af(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Af(e, t);
  }
}
function Jq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qq(e) {
  if (Array.isArray(e)) return Af(e);
}
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vm(Object(r), !0).forEach(function(n) {
      se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function se(e, t, r) {
  return t = W1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W1(e) {
  var t = eK(e, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function eK(e, t) {
  if (sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tK = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, rK = {
  width: "100%",
  height: "100%"
}, U1 = {
  x: 0,
  y: 0
};
function _o(e) {
  return e;
}
var nK = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, aK = function(t, r, n, a) {
  var i = r.find(function(l) {
    return l && l.index === n;
  });
  if (i) {
    if (t === "horizontal")
      return {
        x: i.coordinate,
        y: a.y
      };
    if (t === "vertical")
      return {
        x: a.x,
        y: i.coordinate
      };
    if (t === "centric") {
      var o = i.coordinate, s = a.radius;
      return B(B(B({}, a), de(a.cx, a.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var c = i.coordinate, u = a.angle;
    return B(B(B({}, a), de(a.cx, a.cy, c, u)), {}, {
      angle: u,
      radius: c
    });
  }
  return U1;
}, Ac = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(ca(s), ca(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && H(a) && H(i) ? t.slice(a, i + 1) : [];
};
function G1(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Pf = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = Ac(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = Co(p, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(ca(c), [mx(u, d)]) : c;
  }, []);
}, Ym = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = nK(i, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = M5(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, d = Pf(t, r, l, f), p = aK(n, s, l, i);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, iK = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = fx(l, i);
  return n.reduce(function(v, y) {
    var h, g = y.type.defaultProps !== void 0 ? B(B({}, y.type.defaultProps), y.props) : y.props, w = g.type, b = g.dataKey, O = g.allowDataOverflow, m = g.allowDuplicatedCategory, x = g.scale, _ = g.ticks, P = g.includeHidden, $ = g[o];
    if (v[$])
      return v;
    var M = Ac(t.data, {
      graphicalItems: a.filter(function(L) {
        var W, Y = o in L.props ? L.props[o] : (W = L.type.defaultProps) === null || W === void 0 ? void 0 : W[o];
        return Y === $;
      }),
      dataStartIndex: c,
      dataEndIndex: u
    }), T = M.length, j, N, D;
    Cq(g.domain, O, w) && (j = Nl(g.domain, null, O), p && (w === "number" || x !== "auto") && (D = Ja(M, b, "category")));
    var I = G1(w);
    if (!j || j.length === 0) {
      var R, F = (R = g.domain) !== null && R !== void 0 ? R : I;
      if (b) {
        if (j = Ja(M, b, w), w === "category" && p) {
          var U = bT(j);
          m && U ? (N = j, j = ws(0, T)) : m || (j = ly(F, j, y).reduce(function(L, W) {
            return L.indexOf(W) >= 0 ? L : [].concat(ca(L), [W]);
          }, []));
        } else if (w === "category")
          m ? j = j.filter(function(L) {
            return L !== "" && !ie(L);
          }) : j = ly(F, j, y).reduce(function(L, W) {
            return L.indexOf(W) >= 0 || W === "" || ie(W) ? L : [].concat(ca(L), [W]);
          }, []);
        else if (w === "number") {
          var q = D5(M, a.filter(function(L) {
            var W, Y, J = o in L.props ? L.props[o] : (W = L.type.defaultProps) === null || W === void 0 ? void 0 : W[o], ne = "hide" in L.props ? L.props.hide : (Y = L.type.defaultProps) === null || Y === void 0 ? void 0 : Y.hide;
            return J === $ && (P || !ne);
          }), b, i, l);
          q && (j = q);
        }
        p && (w === "number" || x !== "auto") && (D = Ja(M, b, "category"));
      } else p ? j = ws(0, T) : s && s[$] && s[$].hasStack && w === "number" ? j = d === "expand" ? [0, 1] : yx(s[$].stackGroups, c, u) : j = lx(M, a.filter(function(L) {
        var W = o in L.props ? L.props[o] : L.type.defaultProps[o], Y = "hide" in L.props ? L.props.hide : L.type.defaultProps.hide;
        return W === $ && (P || !Y);
      }), w, l, !0);
      if (w === "number")
        j = _f(f, j, $, i, _), F && (j = Nl(F, j, O));
      else if (w === "category" && F) {
        var E = F, k = j.every(function(L) {
          return E.indexOf(L) >= 0;
        });
        k && (j = E);
      }
    }
    return B(B({}, v), {}, se({}, $, B(B({}, g), {}, {
      axisType: i,
      domain: j,
      categoricalDomain: D,
      duplicateDomain: N,
      originalDomain: (h = g.domain) !== null && h !== void 0 ? h : I,
      isCategorical: p,
      layout: l
    })));
  }, {});
}, oK = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, d = Ac(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: u
  }), p = d.length, v = fx(l, i), y = -1;
  return n.reduce(function(h, g) {
    var w = g.type.defaultProps !== void 0 ? B(B({}, g.type.defaultProps), g.props) : g.props, b = w[o], O = G1("number");
    if (!h[b]) {
      y++;
      var m;
      return v ? m = ws(0, p) : s && s[b] && s[b].hasStack ? (m = yx(s[b].stackGroups, c, u), m = _f(f, m, b, i)) : (m = Nl(O, lx(d, n.filter(function(x) {
        var _, P, $ = o in x.props ? x.props[o] : (_ = x.type.defaultProps) === null || _ === void 0 ? void 0 : _[o], M = "hide" in x.props ? x.props.hide : (P = x.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return $ === b && !M;
      }), "number", l), a.defaultProps.allowDataOverflow), m = _f(f, m, b, i)), B(B({}, h), {}, se({}, b, B(B({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: st(tK, "".concat(i, ".").concat(y % 2), null),
        domain: m,
        originalDomain: O,
        isCategorical: v,
        layout: l
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return h;
  }, {});
}, sK = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(a, "Id"), d = Ze(l, i), p = {};
  return d && d.length ? p = iK(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: c,
    dataEndIndex: u
  }) : o && o.length && (p = oK(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: c,
    dataEndIndex: u
  })), p;
}, cK = function(t) {
  var r = yr(t), n = Yt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: cd(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: is(r, n)
  };
}, Xm = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = it(r, Vn), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, uK = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Xt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Zm = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, lK = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, d = n.margin || {}, p = it(f, Vn), v = it(f, Zt), y = Object.keys(c).reduce(function(m, x) {
    var _ = c[x], P = _.orientation;
    return !_.mirror && !_.hide ? B(B({}, m), {}, se({}, P, m[P] + _.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), h = Object.keys(o).reduce(function(m, x) {
    var _ = o[x], P = _.orientation;
    return !_.mirror && !_.hide ? B(B({}, m), {}, se({}, P, st(m, "".concat(P)) + _.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), g = B(B({}, h), y), w = g.bottom;
  p && (g.bottom += p.props.height || Vn.defaultProps.height), v && r && (g = N5(g, a, n, r));
  var b = u - g.left - g.right, O = l - g.top - g.bottom;
  return B(B({
    brushBottom: w
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(b, 0),
    height: Math.max(O, 0)
  });
}, fK = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Ea = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(g, w) {
    var b = w.graphicalItems, O = w.stackGroups, m = w.offset, x = w.updateId, _ = w.dataStartIndex, P = w.dataEndIndex, $ = g.barSize, M = g.layout, T = g.barGap, j = g.barCategoryGap, N = g.maxBarSize, D = Zm(M), I = D.numericAxisName, R = D.cateAxisName, F = uK(b), U = [];
    return b.forEach(function(q, E) {
      var k = Ac(g.data, {
        graphicalItems: [q],
        dataStartIndex: _,
        dataEndIndex: P
      }), L = q.type.defaultProps !== void 0 ? B(B({}, q.type.defaultProps), q.props) : q.props, W = L.dataKey, Y = L.maxBarSize, J = L["".concat(I, "Id")], ne = L["".concat(R, "Id")], oe = {}, Q = c.reduce(function(kr, Ut) {
        var Pc, Ec, $c = w["".concat(Ut.axisType, "Map")], Hd = L["".concat(Ut.axisType, "Id")];
        $c && $c[Hd] || Ut.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? Qe(!1, "Specifying a(n) ".concat(Ut.axisType, "Id requires a corresponding ").concat(
          Ut.axisType,
          "Id on the targeted graphical component "
        ).concat((Pc = q == null || (Ec = q.type) === null || Ec === void 0 ? void 0 : Ec.displayName) !== null && Pc !== void 0 ? Pc : "")) : Qe());
        var qd = $c[Hd];
        return B(B({}, kr), {}, se(se({}, Ut.axisType, qd), "".concat(Ut.axisType, "Ticks"), Yt(qd)));
      }, oe), z = Q[R], V = Q["".concat(R, "Ticks")], te = O && O[J] && O[J].hasStack && q5(q, O[J].stackGroups), C = Xt(q.type).indexOf("Bar") >= 0, le = is(z, V), K = [], Oe = F && k5({
        barSize: $,
        stackGroups: O,
        totalSize: fK(Q, R)
      });
      if (C) {
        var $e, Fe, dr = ie(Y) ? N : Y, pn = ($e = (Fe = is(z, V, !0)) !== null && Fe !== void 0 ? Fe : dr) !== null && $e !== void 0 ? $e : 0;
        K = I5({
          barGap: T,
          barCategoryGap: j,
          bandSize: pn !== le ? pn : le,
          sizeList: Oe[ne],
          maxBarSize: dr
        }), pn !== le && (K = K.map(function(kr) {
          return B(B({}, kr), {}, {
            position: B(B({}, kr.position), {}, {
              offset: kr.position.offset - pn / 2
            })
          });
        }));
      }
      var to = q && q.type && q.type.getComposedData;
      to && U.push({
        props: B(B({}, to(B(B({}, Q), {}, {
          displayedData: k,
          props: g,
          dataKey: W,
          item: q,
          bandSize: le,
          barPosition: K,
          offset: m,
          stackedData: te,
          layout: M,
          dataStartIndex: _,
          dataEndIndex: P
        }))), {}, se(se(se({
          key: q.key || "item-".concat(E)
        }, I, Q[I]), R, Q[R]), "animationId", x)),
        childIndex: MT(q, g.children),
        item: q
      });
    }), U;
  }, p = function(g, w) {
    var b = g.props, O = g.dataStartIndex, m = g.dataEndIndex, x = g.updateId;
    if (!ah({
      props: b
    }))
      return null;
    var _ = b.children, P = b.layout, $ = b.stackOffset, M = b.data, T = b.reverseStackOrder, j = Zm(P), N = j.numericAxisName, D = j.cateAxisName, I = Ze(_, n), R = G5(M, I, "".concat(N, "Id"), "".concat(D, "Id"), $, T), F = c.reduce(function(L, W) {
      var Y = "".concat(W.axisType, "Map");
      return B(B({}, L), {}, se({}, Y, sK(b, B(B({}, W), {}, {
        graphicalItems: I,
        stackGroups: W.axisType === N && R,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), U = lK(B(B({}, F), {}, {
      props: b,
      graphicalItems: I
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(F).forEach(function(L) {
      F[L] = l(b, F[L], U, L.replace("Map", ""), r);
    });
    var q = F["".concat(D, "Map")], E = cK(q), k = d(b, B(B({}, F), {}, {
      dataStartIndex: O,
      dataEndIndex: m,
      updateId: x,
      graphicalItems: I,
      stackGroups: R,
      offset: U
    }));
    return B(B({
      formattedGraphicalItems: k,
      graphicalItems: I,
      offset: U,
      stackGroups: R
    }, E), F);
  }, v = /* @__PURE__ */ function(h) {
    function g(w) {
      var b, O, m;
      return Gq(this, g), m = Kq(this, g, [w]), se(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), se(m, "accessibilityManager", new jq()), se(m, "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var _ = m.state, P = _.dataStartIndex, $ = _.dataEndIndex, M = _.updateId;
          m.setState(B({
            legendBBox: x
          }, p({
            props: m.props,
            dataStartIndex: P,
            dataEndIndex: $,
            updateId: M
          }, B(B({}, m.state), {}, {
            legendBBox: x
          }))));
        }
      }), se(m, "handleReceiveSyncEvent", function(x, _, P) {
        if (m.props.syncId === x) {
          if (P === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(_);
        }
      }), se(m, "handleBrushChange", function(x) {
        var _ = x.startIndex, P = x.endIndex;
        if (_ !== m.state.dataStartIndex || P !== m.state.dataEndIndex) {
          var $ = m.state.updateId;
          m.setState(function() {
            return B({
              dataStartIndex: _,
              dataEndIndex: P
            }, p({
              props: m.props,
              dataStartIndex: _,
              dataEndIndex: P,
              updateId: $
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: _,
            dataEndIndex: P
          });
        }
      }), se(m, "handleMouseEnter", function(x) {
        var _ = m.getMouseInfo(x);
        if (_) {
          var P = B(B({}, _), {}, {
            isTooltipActive: !0
          });
          m.setState(P), m.triggerSyncEvent(P);
          var $ = m.props.onMouseEnter;
          ae($) && $(P, x);
        }
      }), se(m, "triggeredAfterMouseMove", function(x) {
        var _ = m.getMouseInfo(x), P = _ ? B(B({}, _), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(P), m.triggerSyncEvent(P);
        var $ = m.props.onMouseMove;
        ae($) && $(P, x);
      }), se(m, "handleItemMouseEnter", function(x) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: x,
            activePayload: x.tooltipPayload,
            activeCoordinate: x.tooltipPosition || {
              x: x.cx,
              y: x.cy
            }
          };
        });
      }), se(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), se(m, "handleMouseMove", function(x) {
        x.persist(), m.throttleTriggeredAfterMouseMove(x);
      }), se(m, "handleMouseLeave", function(x) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var _ = {
          isTooltipActive: !1
        };
        m.setState(_), m.triggerSyncEvent(_);
        var P = m.props.onMouseLeave;
        ae(P) && P(_, x);
      }), se(m, "handleOuterEvent", function(x) {
        var _ = CT(x), P = st(m.props, "".concat(_));
        if (_ && ae(P)) {
          var $, M;
          /.*touch.*/i.test(_) ? M = m.getMouseInfo(x.changedTouches[0]) : M = m.getMouseInfo(x), P(($ = M) !== null && $ !== void 0 ? $ : {}, x);
        }
      }), se(m, "handleClick", function(x) {
        var _ = m.getMouseInfo(x);
        if (_) {
          var P = B(B({}, _), {}, {
            isTooltipActive: !0
          });
          m.setState(P), m.triggerSyncEvent(P);
          var $ = m.props.onClick;
          ae($) && $(P, x);
        }
      }), se(m, "handleMouseDown", function(x) {
        var _ = m.props.onMouseDown;
        if (ae(_)) {
          var P = m.getMouseInfo(x);
          _(P, x);
        }
      }), se(m, "handleMouseUp", function(x) {
        var _ = m.props.onMouseUp;
        if (ae(_)) {
          var P = m.getMouseInfo(x);
          _(P, x);
        }
      }), se(m, "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), se(m, "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseDown(x.changedTouches[0]);
      }), se(m, "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseUp(x.changedTouches[0]);
      }), se(m, "handleDoubleClick", function(x) {
        var _ = m.props.onDoubleClick;
        if (ae(_)) {
          var P = m.getMouseInfo(x);
          _(P, x);
        }
      }), se(m, "handleContextMenu", function(x) {
        var _ = m.props.onContextMenu;
        if (ae(_)) {
          var P = m.getMouseInfo(x);
          _(P, x);
        }
      }), se(m, "triggerSyncEvent", function(x) {
        m.props.syncId !== void 0 && _u.emit(Su, m.props.syncId, x, m.eventEmitterSymbol);
      }), se(m, "applySyncEvent", function(x) {
        var _ = m.props, P = _.layout, $ = _.syncMethod, M = m.state.updateId, T = x.dataStartIndex, j = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          m.setState(B({
            dataStartIndex: T,
            dataEndIndex: j
          }, p({
            props: m.props,
            dataStartIndex: T,
            dataEndIndex: j,
            updateId: M
          }, m.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var N = x.chartX, D = x.chartY, I = x.activeTooltipIndex, R = m.state, F = R.offset, U = R.tooltipTicks;
          if (!F)
            return;
          if (typeof $ == "function")
            I = $(U, x);
          else if ($ === "value") {
            I = -1;
            for (var q = 0; q < U.length; q++)
              if (U[q].value === x.activeLabel) {
                I = q;
                break;
              }
          }
          var E = B(B({}, F), {}, {
            x: F.left,
            y: F.top
          }), k = Math.min(N, E.x + E.width), L = Math.min(D, E.y + E.height), W = U[I] && U[I].value, Y = Pf(m.state, m.props.data, I), J = U[I] ? {
            x: P === "horizontal" ? U[I].coordinate : k,
            y: P === "horizontal" ? L : U[I].coordinate
          } : U1;
          m.setState(B(B({}, x), {}, {
            activeLabel: W,
            activeCoordinate: J,
            activePayload: Y,
            activeTooltipIndex: I
          }));
        } else
          m.setState(x);
      }), se(m, "renderCursor", function(x) {
        var _, P = m.state, $ = P.isTooltipActive, M = P.activeCoordinate, T = P.activePayload, j = P.offset, N = P.activeTooltipIndex, D = P.tooltipAxisBandSize, I = m.getTooltipEventType(), R = (_ = x.props.active) !== null && _ !== void 0 ? _ : $, F = m.props.layout, U = x.key || "_recharts-cursor";
        return /* @__PURE__ */ S.createElement(Dq, {
          key: U,
          activeCoordinate: M,
          activePayload: T,
          activeTooltipIndex: N,
          chartName: r,
          element: x,
          isActive: R,
          layout: F,
          offset: j,
          tooltipAxisBandSize: D,
          tooltipEventType: I
        });
      }), se(m, "renderPolarAxis", function(x, _, P) {
        var $ = st(x, "type.axisType"), M = st(m.state, "".concat($, "Map")), T = x.type.defaultProps, j = T !== void 0 ? B(B({}, T), x.props) : x.props, N = M && M[j["".concat($, "Id")]];
        return /* @__PURE__ */ Ie(x, B(B({}, N), {}, {
          className: ce($, N.className),
          key: x.key || "".concat(_, "-").concat(P),
          ticks: Yt(N, !0)
        }));
      }), se(m, "renderPolarGrid", function(x) {
        var _ = x.props, P = _.radialLines, $ = _.polarAngles, M = _.polarRadius, T = m.state, j = T.radiusAxisMap, N = T.angleAxisMap, D = yr(j), I = yr(N), R = I.cx, F = I.cy, U = I.innerRadius, q = I.outerRadius;
        return /* @__PURE__ */ Ie(x, {
          polarAngles: Array.isArray($) ? $ : Yt(I, !0).map(function(E) {
            return E.coordinate;
          }),
          polarRadius: Array.isArray(M) ? M : Yt(D, !0).map(function(E) {
            return E.coordinate;
          }),
          cx: R,
          cy: F,
          innerRadius: U,
          outerRadius: q,
          key: x.key || "polar-grid",
          radialLines: P
        });
      }), se(m, "renderLegend", function() {
        var x = m.state.formattedGraphicalItems, _ = m.props, P = _.children, $ = _.width, M = _.height, T = m.props.margin || {}, j = $ - (T.left || 0) - (T.right || 0), N = cx({
          children: P,
          formattedGraphicalItems: x,
          legendWidth: j,
          legendContent: u
        });
        if (!N)
          return null;
        var D = N.item, I = Km(N, Lq);
        return /* @__PURE__ */ Ie(D, B(B({}, I), {}, {
          chartWidth: $,
          chartHeight: M,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), se(m, "renderTooltip", function() {
        var x, _ = m.props, P = _.children, $ = _.accessibilityLayer, M = it(P, ht);
        if (!M)
          return null;
        var T = m.state, j = T.isTooltipActive, N = T.activeCoordinate, D = T.activePayload, I = T.activeLabel, R = T.offset, F = (x = M.props.active) !== null && x !== void 0 ? x : j;
        return /* @__PURE__ */ Ie(M, {
          viewBox: B(B({}, R), {}, {
            x: R.left,
            y: R.top
          }),
          active: F,
          label: I,
          payload: F ? D : [],
          coordinate: N,
          accessibilityLayer: $
        });
      }), se(m, "renderBrush", function(x) {
        var _ = m.props, P = _.margin, $ = _.data, M = m.state, T = M.offset, j = M.dataStartIndex, N = M.dataEndIndex, D = M.updateId;
        return /* @__PURE__ */ Ie(x, {
          key: x.key || "_recharts-brush",
          onChange: go(m.handleBrushChange, x.props.onChange),
          data: $,
          x: H(x.props.x) ? x.props.x : T.left,
          y: H(x.props.y) ? x.props.y : T.top + T.height + T.brushBottom - (P.bottom || 0),
          width: H(x.props.width) ? x.props.width : T.width,
          startIndex: j,
          endIndex: N,
          updateId: "brush-".concat(D)
        });
      }), se(m, "renderReferenceElement", function(x, _, P) {
        if (!x)
          return null;
        var $ = m, M = $.clipPathId, T = m.state, j = T.xAxisMap, N = T.yAxisMap, D = T.offset, I = x.type.defaultProps || {}, R = x.props, F = R.xAxisId, U = F === void 0 ? I.xAxisId : F, q = R.yAxisId, E = q === void 0 ? I.yAxisId : q;
        return /* @__PURE__ */ Ie(x, {
          key: x.key || "".concat(_, "-").concat(P),
          xAxis: j[U],
          yAxis: N[E],
          viewBox: {
            x: D.left,
            y: D.top,
            width: D.width,
            height: D.height
          },
          clipPathId: M
        });
      }), se(m, "renderActivePoints", function(x) {
        var _ = x.item, P = x.activePoint, $ = x.basePoint, M = x.childIndex, T = x.isRange, j = [], N = _.props.key, D = _.item.type.defaultProps !== void 0 ? B(B({}, _.item.type.defaultProps), _.item.props) : _.item.props, I = D.activeDot, R = D.dataKey, F = B(B({
          index: M,
          dataKey: R,
          cx: P.x,
          cy: P.y,
          r: 4,
          fill: Id(_.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: P.payload,
          value: P.value
        }, Z(I, !1)), Mo(I));
        return j.push(g.renderActiveDot(I, F, "".concat(N, "-activePoint-").concat(M))), $ ? j.push(g.renderActiveDot(I, B(B({}, F), {}, {
          cx: $.x,
          cy: $.y
        }), "".concat(N, "-basePoint-").concat(M))) : T && j.push(null), j;
      }), se(m, "renderGraphicChild", function(x, _, P) {
        var $ = m.filterFormatItem(x, _, P);
        if (!$)
          return null;
        var M = m.getTooltipEventType(), T = m.state, j = T.isTooltipActive, N = T.tooltipAxis, D = T.activeTooltipIndex, I = T.activeLabel, R = m.props.children, F = it(R, ht), U = $.props, q = U.points, E = U.isRange, k = U.baseLine, L = $.item.type.defaultProps !== void 0 ? B(B({}, $.item.type.defaultProps), $.item.props) : $.item.props, W = L.activeDot, Y = L.hide, J = L.activeBar, ne = L.activeShape, oe = !!(!Y && j && F && (W || J || ne)), Q = {};
        M !== "axis" && F && F.props.trigger === "click" ? Q = {
          onClick: go(m.handleItemMouseEnter, x.props.onClick)
        } : M !== "axis" && (Q = {
          onMouseLeave: go(m.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: go(m.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var z = /* @__PURE__ */ Ie(x, B(B({}, $.props), Q));
        function V(Ut) {
          return typeof N.dataKey == "function" ? N.dataKey(Ut.payload) : null;
        }
        if (oe)
          if (D >= 0) {
            var te, C;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var le = typeof N.dataKey == "function" ? V : "payload.".concat(N.dataKey.toString());
              te = Co(q, le, I), C = E && k && Co(k, le, I);
            } else
              te = q == null ? void 0 : q[D], C = E && k && k[D];
            if (ne || J) {
              var K = x.props.activeIndex !== void 0 ? x.props.activeIndex : D;
              return [/* @__PURE__ */ Ie(x, B(B(B({}, $.props), Q), {}, {
                activeIndex: K
              })), null, null];
            }
            if (!ie(te))
              return [z].concat(ca(m.renderActivePoints({
                item: $,
                activePoint: te,
                basePoint: C,
                childIndex: D,
                isRange: E
              })));
          } else {
            var Oe, $e = (Oe = m.getItemByXY(m.state.activeCoordinate)) !== null && Oe !== void 0 ? Oe : {
              graphicalItem: z
            }, Fe = $e.graphicalItem, dr = Fe.item, pn = dr === void 0 ? x : dr, to = Fe.childIndex, kr = B(B(B({}, $.props), Q), {}, {
              activeIndex: to
            });
            return [/* @__PURE__ */ Ie(pn, kr), null, null];
          }
        return E ? [z, null, null] : [z, null];
      }), se(m, "renderCustomized", function(x, _, P) {
        return /* @__PURE__ */ Ie(x, B(B({
          key: "recharts-customized-".concat(P)
        }, m.props), m.state));
      }), se(m, "renderMap", {
        CartesianGrid: {
          handler: _o,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: _o
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: _o
        },
        YAxis: {
          handler: _o
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((b = w.id) !== null && b !== void 0 ? b : Tr("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = s0(m.triggeredAfterMouseMove, (O = w.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return Xq(g, h), qq(g, [{
      key: "componentDidMount",
      value: function() {
        var b, O;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
            top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var b = this.props, O = b.children, m = b.data, x = b.height, _ = b.layout, P = it(O, ht);
        if (P) {
          var $ = P.props.defaultIndex;
          if (!(typeof $ != "number" || $ < 0 || $ > this.state.tooltipTicks.length - 1)) {
            var M = this.state.tooltipTicks[$] && this.state.tooltipTicks[$].value, T = Pf(this.state, m, $, M), j = this.state.tooltipTicks[$].coordinate, N = (this.state.offset.top + x) / 2, D = _ === "horizontal", I = D ? {
              x: j,
              y: N
            } : {
              y: j,
              x: N
            }, R = this.state.formattedGraphicalItems.find(function(U) {
              var q = U.item;
              return q.type.name === "Scatter";
            });
            R && (I = B(B({}, I), R.props.points[$].tooltipPosition), T = R.props.points[$].tooltipPayload);
            var F = {
              activeTooltipIndex: $,
              isTooltipActive: !0,
              activeLabel: M,
              activePayload: T,
              activeCoordinate: I
            };
            this.setState(F), this.renderCursor(P), this.accessibilityManager.setIndex($);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(b, O) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== b.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== b.margin) {
          var m, x;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(b) {
        Xu([it(b.children, ht)], [it(this.props.children, ht)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var b = it(this.props.children, ht);
        if (b && typeof b.props.shared == "boolean") {
          var O = b.props.shared ? "axis" : "item";
          return s.indexOf(O) >= 0 ? O : i;
        }
        return i;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(b) {
        if (!this.container)
          return null;
        var O = this.container, m = O.getBoundingClientRect(), x = oB(m), _ = {
          chartX: Math.round(b.pageX - x.left),
          chartY: Math.round(b.pageY - x.top)
        }, P = m.width / O.offsetWidth || 1, $ = this.inRange(_.chartX, _.chartY, P);
        if (!$)
          return null;
        var M = this.state, T = M.xAxisMap, j = M.yAxisMap, N = this.getTooltipEventType(), D = Ym(this.state, this.props.data, this.props.layout, $);
        if (N !== "axis" && T && j) {
          var I = yr(T).scale, R = yr(j).scale, F = I && I.invert ? I.invert(_.chartX) : null, U = R && R.invert ? R.invert(_.chartY) : null;
          return B(B({}, _), {}, {
            xValue: F,
            yValue: U
          }, D);
        }
        return D ? B(B({}, _), D) : null;
      }
    }, {
      key: "inRange",
      value: function(b, O) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, _ = b / m, P = O / m;
        if (x === "horizontal" || x === "vertical") {
          var $ = this.state.offset, M = _ >= $.left && _ <= $.left + $.width && P >= $.top && P <= $.top + $.height;
          return M ? {
            x: _,
            y: P
          } : null;
        }
        var T = this.state, j = T.angleAxisMap, N = T.radiusAxisMap;
        if (j && N) {
          var D = yr(j);
          return py({
            x: _,
            y: P
          }, D);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, O = this.getTooltipEventType(), m = it(b, ht), x = {};
        m && O === "axis" && (m.props.trigger === "click" ? x = {
          onClick: this.handleClick
        } : x = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var _ = Mo(this.props, this.handleOuterEvent);
        return B(B({}, _), x);
      }
    }, {
      key: "addListener",
      value: function() {
        _u.on(Su, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        _u.removeListener(Su, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(b, O, m) {
        for (var x = this.state.formattedGraphicalItems, _ = 0, P = x.length; _ < P; _++) {
          var $ = x[_];
          if ($.item === b || $.props.key === b.key || O === Xt($.item.type) && m === $.childIndex)
            return $;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var b = this.clipPathId, O = this.state.offset, m = O.left, x = O.top, _ = O.height, P = O.width;
        return /* @__PURE__ */ S.createElement("defs", null, /* @__PURE__ */ S.createElement("clipPath", {
          id: b
        }, /* @__PURE__ */ S.createElement("rect", {
          x: m,
          y: x,
          height: _,
          width: P
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var b = this.state.xAxisMap;
        return b ? Object.entries(b).reduce(function(O, m) {
          var x = qm(m, 2), _ = x[0], P = x[1];
          return B(B({}, O), {}, se({}, _, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(O, m) {
          var x = qm(m, 2), _ = x[0], P = x[1];
          return B(B({}, O), {}, se({}, _, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(b) {
        var O;
        return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[b]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(b) {
        var O;
        return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[b]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(b) {
        var O = this.state, m = O.formattedGraphicalItems, x = O.activeItem;
        if (m && m.length)
          for (var _ = 0, P = m.length; _ < P; _++) {
            var $ = m[_], M = $.props, T = $.item, j = T.type.defaultProps !== void 0 ? B(B({}, T.type.defaultProps), T.props) : T.props, N = Xt(T.type);
            if (N === "Bar") {
              var D = (M.data || []).find(function(U) {
                return RW(b, U);
              });
              if (D)
                return {
                  graphicalItem: $,
                  payload: D
                };
            } else if (N === "RadialBar") {
              var I = (M.data || []).find(function(U) {
                return py(b, U);
              });
              if (I)
                return {
                  graphicalItem: $,
                  payload: I
                };
            } else if (vc($, x) || yc($, x) || Li($, x)) {
              var R = IU({
                graphicalItem: $,
                activeTooltipItem: x,
                itemData: j.data
              }), F = j.activeIndex === void 0 ? R : j.activeIndex;
              return {
                graphicalItem: B(B({}, $), {}, {
                  childIndex: F
                }),
                payload: Li($, x) ? j.data[R] : $.props.data[R]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!ah(this))
          return null;
        var O = this.props, m = O.children, x = O.className, _ = O.width, P = O.height, $ = O.style, M = O.compact, T = O.title, j = O.desc, N = Km(O, Bq), D = Z(N, !1);
        if (M)
          return /* @__PURE__ */ S.createElement(Sm, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ S.createElement(Ju, Pn({}, D, {
            width: _,
            height: P,
            title: T,
            desc: j
          }), this.renderClipPath(), oh(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var I, R;
          D.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0, D.role = (R = this.props.role) !== null && R !== void 0 ? R : "application", D.onKeyDown = function(U) {
            b.accessibilityManager.keyboardEvent(U);
          }, D.onFocus = function() {
            b.accessibilityManager.focus();
          };
        }
        var F = this.parseEventsOfWrapper();
        return /* @__PURE__ */ S.createElement(Sm, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ S.createElement("div", Pn({
          className: ce("recharts-wrapper", x),
          style: B({
            position: "relative",
            cursor: "default",
            width: _,
            height: P
          }, $)
        }, F, {
          ref: function(q) {
            b.container = q;
          }
        }), /* @__PURE__ */ S.createElement(Ju, Pn({}, D, {
          width: _,
          height: P,
          title: T,
          desc: j,
          style: rK
        }), this.renderClipPath(), oh(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(ng);
  se(v, "displayName", r), se(v, "defaultProps", B({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, f)), se(v, "getDerivedStateFromProps", function(h, g) {
    var w = h.dataKey, b = h.data, O = h.children, m = h.width, x = h.height, _ = h.layout, P = h.stackOffset, $ = h.margin, M = g.dataStartIndex, T = g.dataEndIndex;
    if (g.updateId === void 0) {
      var j = Xm(h);
      return B(B(B({}, j), {}, {
        updateId: 0
      }, p(B(B({
        props: h
      }, j), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: w,
        prevData: b,
        prevWidth: m,
        prevHeight: x,
        prevLayout: _,
        prevStackOffset: P,
        prevMargin: $,
        prevChildren: O
      });
    }
    if (w !== g.prevDataKey || b !== g.prevData || m !== g.prevWidth || x !== g.prevHeight || _ !== g.prevLayout || P !== g.prevStackOffset || !$n($, g.prevMargin)) {
      var N = Xm(h), D = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, I = B(B({}, Ym(g, b, _)), {}, {
        updateId: g.updateId + 1
      }), R = B(B(B({}, N), D), I);
      return B(B(B({}, R), p(B({
        props: h
      }, R), g)), {}, {
        prevDataKey: w,
        prevData: b,
        prevWidth: m,
        prevHeight: x,
        prevLayout: _,
        prevStackOffset: P,
        prevMargin: $,
        prevChildren: O
      });
    }
    if (!Xu(O, g.prevChildren)) {
      var F, U, q, E, k = it(O, Vn), L = k && (F = (U = k.props) === null || U === void 0 ? void 0 : U.startIndex) !== null && F !== void 0 ? F : M, W = k && (q = (E = k.props) === null || E === void 0 ? void 0 : E.endIndex) !== null && q !== void 0 ? q : T, Y = L !== M || W !== T, J = !ie(b), ne = J && !Y ? g.updateId : g.updateId + 1;
      return B(B({
        updateId: ne
      }, p(B(B({
        props: h
      }, g), {}, {
        updateId: ne,
        dataStartIndex: L,
        dataEndIndex: W
      }), g)), {}, {
        prevChildren: O,
        dataStartIndex: L,
        dataEndIndex: W
      });
    }
    return null;
  }), se(v, "renderActiveDot", function(h, g, w) {
    var b;
    return /* @__PURE__ */ Et(h) ? b = /* @__PURE__ */ Ie(h, g) : ae(h) ? b = h(g) : b = /* @__PURE__ */ S.createElement(_a, g), /* @__PURE__ */ S.createElement(ue, {
      className: "recharts-active-dot",
      key: w
    }, b);
  });
  var y = /* @__PURE__ */ eg(function(g, w) {
    return /* @__PURE__ */ S.createElement(v, Pn({}, g, {
      ref: w
    }));
  });
  return y.displayName = v.displayName, y;
}, dK = Ea({
  chartName: "LineChart",
  GraphicalChild: cn,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Pr
  }, {
    axisType: "yAxis",
    AxisComp: Er
  }],
  formatAxisMap: gc
}), Jm = Ea({
  chartName: "BarChart",
  GraphicalChild: Dt,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Pr
  }, {
    axisType: "yAxis",
    AxisComp: Er
  }],
  formatAxisMap: gc
}), pK = Ea({
  chartName: "PieChart",
  GraphicalChild: lr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Aa
  }, {
    axisType: "radiusAxis",
    AxisComp: Sa
  }],
  formatAxisMap: xx,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), hK = Ea({
  chartName: "RadarChart",
  GraphicalChild: eo,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Aa
  }, {
    axisType: "radiusAxis",
    AxisComp: Sa
  }],
  formatAxisMap: xx,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), vK = Ea({
  chartName: "AreaChart",
  GraphicalChild: fr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Pr
  }, {
    axisType: "yAxis",
    AxisComp: Er
  }],
  formatAxisMap: gc
}), yK = Ea({
  chartName: "ComposedChart",
  GraphicalChild: [cn, fr, Dt, Sc],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Pr
  }, {
    axisType: "yAxis",
    AxisComp: Er
  }, {
    axisType: "zAxis",
    AxisComp: _c
  }],
  formatAxisMap: gc
});
const mK = "_graphsContainer_1qtmf_1", gK = "_graphsTitle_1qtmf_6", Qm = {
  graphsContainer: mK,
  graphsTitle: gK
}, bK = [
  "#2563eb",
  "#38bdf8",
  "#a78bfa",
  "#fbbf24",
  "#ef4444",
  "#10b981",
  "#f472b6",
  "#6366f1",
  "#f59e42",
  "#0ea5e9",
  "#64748b",
  "#eab308",
  "#f43f5e",
  "#14b8a6",
  "#f87171",
  "#a3e635"
], Ua = (e, t = !1) => [
  t ? /* @__PURE__ */ A.jsx(
    Pr,
    {
      type: "number",
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    "x"
  ) : /* @__PURE__ */ A.jsx(
    Pr,
    {
      dataKey: e,
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    "x"
  ),
  t ? /* @__PURE__ */ A.jsx(
    Er,
    {
      dataKey: e,
      type: "category",
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    "y"
  ) : /* @__PURE__ */ A.jsx(
    Er,
    {
      fontSize: 12,
      tickLine: !1,
      axisLine: !1
    },
    "y"
  )
], Ga = (e = !1) => [
  /* @__PURE__ */ A.jsx(b1, { strokeDasharray: "3 3" }, "grid"),
  /* @__PURE__ */ A.jsx(ht, {}, "tooltip"),
  e ? /* @__PURE__ */ A.jsx(Zt, {}, "legend") : null
], YV = ({
  data: e,
  shape: t = "bar",
  dataKey: r = "score",
  labelKey: n = "match",
  title: a = "",
  colors: i = bK,
  style: o = {},
  height: s = 140
}) => {
  const c = {
    data: e,
    margin: { left: -18, right: 8 }
  };
  return /* @__PURE__ */ A.jsxs(
    "div",
    {
      className: Qm.graphsContainer,
      style: {
        width: "100%",
        height: s + 40,
        margin: "1.2em 0 0.5em 0",
        ...o
      },
      children: [
        a && /* @__PURE__ */ A.jsx("h4", { className: Qm.graphsTitle, children: a }),
        /* @__PURE__ */ A.jsx(QL, { width: "100%", height: s, children: (() => {
          switch (t) {
            case "bar":
              return /* @__PURE__ */ A.jsxs(Jm, { ...c, children: [
                Ua(n),
                Ga(),
                /* @__PURE__ */ A.jsx(
                  Dt,
                  {
                    dataKey: r,
                    fill: i[0],
                    radius: [6, 6, 0, 0]
                  }
                )
              ] });
            case "horizontalBar":
              return /* @__PURE__ */ A.jsxs(
                Jm,
                {
                  ...c,
                  layout: "vertical",
                  margin: {
                    top: 8,
                    right: 8,
                    left: 8,
                    bottom: 8
                  },
                  children: [
                    Ua(n, !0),
                    Ga(),
                    /* @__PURE__ */ A.jsx(
                      Dt,
                      {
                        dataKey: r,
                        fill: i[0],
                        radius: [0, 6, 6, 0]
                      }
                    )
                  ]
                }
              );
            case "pie":
              return /* @__PURE__ */ A.jsxs(pK, { children: [
                /* @__PURE__ */ A.jsx(
                  lr,
                  {
                    data: e,
                    dataKey: r,
                    nameKey: n,
                    cx: "50%",
                    cy: "50%",
                    outerRadius: s / 2 - 10,
                    fill: i[0],
                    label: !0,
                    children: e.map((u, l) => /* @__PURE__ */ A.jsx(
                      Yi,
                      {
                        fill: i[l % i.length]
                      },
                      `cell-${l}`
                    ))
                  }
                ),
                /* @__PURE__ */ A.jsx(ht, {}),
                /* @__PURE__ */ A.jsx(Zt, {})
              ] });
            case "line":
              return /* @__PURE__ */ A.jsxs(dK, { ...c, children: [
                Ua(n),
                Ga(),
                /* @__PURE__ */ A.jsx(
                  cn,
                  {
                    type: "monotone",
                    dataKey: r,
                    stroke: i[0],
                    strokeWidth: 2,
                    dot: { r: 3 }
                  }
                )
              ] });
            case "area":
              return /* @__PURE__ */ A.jsxs(vK, { ...c, children: [
                Ua(n),
                Ga(),
                /* @__PURE__ */ A.jsx(
                  fr,
                  {
                    type: "monotone",
                    dataKey: r,
                    stroke: i[0],
                    fill: i[1] || i[0],
                    fillOpacity: 0.5
                  }
                )
              ] });
            case "radar":
              return /* @__PURE__ */ A.jsxs(
                hK,
                {
                  cx: "50%",
                  cy: "50%",
                  outerRadius: s / 2 - 10,
                  data: e,
                  children: [
                    /* @__PURE__ */ A.jsx(Ix, {}),
                    /* @__PURE__ */ A.jsx(Aa, { dataKey: n }),
                    /* @__PURE__ */ A.jsx(Sa, {}),
                    /* @__PURE__ */ A.jsx(
                      eo,
                      {
                        name: r,
                        dataKey: r,
                        stroke: i[0],
                        fill: i[1] || i[0],
                        fillOpacity: 0.6
                      }
                    ),
                    /* @__PURE__ */ A.jsx(Zt, {}),
                    /* @__PURE__ */ A.jsx(ht, {})
                  ]
                }
              );
            case "composed":
              return /* @__PURE__ */ A.jsxs(yK, { ...c, children: [
                Ua(n),
                Ga(!0),
                /* @__PURE__ */ A.jsx(
                  Dt,
                  {
                    dataKey: r,
                    fill: i[0],
                    radius: [6, 6, 0, 0]
                  }
                ),
                /* @__PURE__ */ A.jsx(
                  cn,
                  {
                    type: "monotone",
                    dataKey: r,
                    stroke: i[1] || i[0],
                    strokeWidth: 2
                  }
                )
              ] });
            default:
              return /* @__PURE__ */ A.jsx(A.Fragment, {});
          }
        })() })
      ]
    }
  );
}, XV = ({
  stats: e,
  mode: t,
  className: r = "",
  style: n = {},
  opponentStats: a,
  globalStats: i
}) => /* @__PURE__ */ A.jsx("div", { className: r, style: n, children: /* @__PURE__ */ A.jsxs("div", { children: [
  "Statistics Summary for mode: ",
  t
] }) }), xK = "_shareModalContent_9ajcm_1", wK = {
  shareModalContent: xK
}, ZV = ({ children: e, className: t = "" }) => /* @__PURE__ */ A.jsx(
  "div",
  {
    className: `${wK.shareModalContent} ${t}`.trim(),
    children: e
  }
), OK = "_modalOverlay_cwnrw_1", _K = "_modalContent_cwnrw_11", SK = "_closeBtn_cwnrw_23", AK = "_title_cwnrw_33", PK = "_previewSection_cwnrw_39", EK = "_previewImg_cwnrw_43", $K = "_description_cwnrw_48", TK = "_priceSection_cwnrw_53", jK = "_priceLabel_cwnrw_57", CK = "_priceValue_cwnrw_62", MK = "_error_cwnrw_68", kK = "_success_cwnrw_73", IK = "_buyBtn_cwnrw_78", NK = "_actionsRow_cwnrw_97", RK = "_giftBtn_cwnrw_103", DK = "_tradeBtn_cwnrw_114", We = {
  modalOverlay: OK,
  modalContent: _K,
  closeBtn: SK,
  title: AK,
  previewSection: PK,
  previewImg: EK,
  description: $K,
  priceSection: TK,
  priceLabel: jK,
  priceValue: CK,
  error: MK,
  success: kK,
  buyBtn: IK,
  actionsRow: NK,
  giftBtn: RK,
  tradeBtn: DK
}, JV = ({
  item: e,
  onClose: t,
  onPurchase: r,
  user: n
}) => {
  const [a, i] = mt(!1), [o, s] = mt(null), [c, u] = mt(!1), l = async () => {
    i(!0), s(null);
    try {
      await r(e), u(!0), setTimeout(() => {
        t();
      }, 1200);
    } catch (p) {
      s((p == null ? void 0 : p.message) || "Purchase failed.");
    } finally {
      i(!1);
    }
  }, f = () => alert("Gifting coming soon!"), d = () => alert("Trading coming soon!");
  return /* @__PURE__ */ A.jsx("div", { className: We.modalOverlay, children: /* @__PURE__ */ A.jsxs("div", { className: We.modalContent, children: [
    /* @__PURE__ */ A.jsx(
      "button",
      {
        className: We.closeBtn,
        onClick: t,
        children: "×"
      }
    ),
    /* @__PURE__ */ A.jsx("h2", { className: We.title, children: e.label || e.name }),
    /* @__PURE__ */ A.jsxs("div", { className: We.previewSection, children: [
      e.previewUrl && /* @__PURE__ */ A.jsx(
        "img",
        {
          src: e.previewUrl,
          alt: e.label,
          className: We.previewImg
        }
      ),
      /* @__PURE__ */ A.jsx("p", { className: We.description, children: e.description })
    ] }),
    /* @__PURE__ */ A.jsxs("div", { className: We.priceSection, children: [
      /* @__PURE__ */ A.jsx("span", { className: We.priceLabel, children: "Price: " }),
      /* @__PURE__ */ A.jsxs("span", { className: We.priceValue, children: [
        e.price,
        " ",
        e.currency || "coins"
      ] })
    ] }),
    o && /* @__PURE__ */ A.jsx("div", { className: We.error, children: o }),
    c && /* @__PURE__ */ A.jsx("div", { className: We.success, children: "Purchase successful!" }),
    /* @__PURE__ */ A.jsx(
      "button",
      {
        className: We.buyBtn,
        onClick: l,
        disabled: !n || a || c,
        children: a ? "Processing..." : c ? "Purchased!" : "Buy Now"
      }
    ),
    e.type === "consumable" && !c && /* @__PURE__ */ A.jsxs("div", { className: We.actionsRow, children: [
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: We.giftBtn,
          onClick: f,
          children: "Gift"
        }
      ),
      /* @__PURE__ */ A.jsx(
        "button",
        {
          className: We.tradeBtn,
          onClick: d,
          children: "Trade"
        }
      )
    ] })
  ] }) });
}, LK = "_statisticsModal_1vaoh_1", BK = "_statisticsHeader_1vaoh_9", FK = "_statisticsStats_1vaoh_16", zK = "_statisticsStatRow_1vaoh_20", WK = "_statisticsStatLabel_1vaoh_27", UK = "_statisticsUserInfo_1vaoh_32", GK = "_statisticsUserAvatar_1vaoh_39", HK = "_statisticsUserName_1vaoh_47", qK = "_statisticsUserEmail_1vaoh_52", KK = "_statisticsGuestMessage_1vaoh_57", VK = "_statisticsSignInBtn_1vaoh_66", Pt = {
  statisticsModal: LK,
  statisticsHeader: BK,
  statisticsStats: FK,
  statisticsStatRow: zK,
  statisticsStatLabel: WK,
  statisticsUserInfo: UK,
  statisticsUserAvatar: GK,
  statisticsUserName: HK,
  statisticsUserEmail: qK,
  statisticsGuestMessage: KK,
  statisticsSignInBtn: VK
}, YK = [
  { label: "Completed", key: "completed", suffix: "" },
  { label: "Win %", key: "winPercentage", suffix: "%" },
  {
    label: "Current Streak",
    key: "currentStreak",
    suffix: ""
  },
  { label: "Max Streak", key: "maxStreak", suffix: "" },
  {
    label: "Perfect Puzzles",
    key: "perfectPuzzles",
    suffix: ""
  }
], XK = ({ user: e }) => /* @__PURE__ */ A.jsxs("div", { className: Pt.statisticsUserInfo, children: [
  /* @__PURE__ */ A.jsx(
    "img",
    {
      src: e.photoUrl || "/default-avatar.png",
      alt: e.name,
      className: Pt.statisticsUserAvatar
    }
  ),
  /* @__PURE__ */ A.jsxs("div", { children: [
    /* @__PURE__ */ A.jsx("div", { className: Pt.statisticsUserName, children: e.name }),
    /* @__PURE__ */ A.jsx("div", { className: Pt.statisticsUserEmail, children: e.email })
  ] })
] }), ZK = ({ stats: e }) => /* @__PURE__ */ A.jsx("div", { className: Pt.statisticsStats, children: YK.map(({ label: t, key: r, suffix: n }) => /* @__PURE__ */ A.jsxs("div", { className: Pt.statisticsStatRow, children: [
  /* @__PURE__ */ A.jsxs("span", { className: Pt.statisticsStatLabel, children: [
    t,
    ":"
  ] }),
  " ",
  e[r],
  n
] }, r)) }), QV = ({
  open: e,
  onClose: t,
  user: r,
  dailyCompleted: n,
  mode: a = "daily"
}) => {
  const i = {
    completed: 58,
    winPercentage: 78,
    currentStreak: 0,
    maxStreak: 5,
    perfectPuzzles: 20,
    purpleFirst: 6,
    mistakeDistribution: [20, 11, 3, 11, 13]
  }, o = () => a === "vs" ? /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
    /* @__PURE__ */ A.jsx("h3", { children: "VS Mode Rules" }),
    /* @__PURE__ */ A.jsxs("ul", { children: [
      /* @__PURE__ */ A.jsx("li", { children: "Compete head-to-head against a bot or another player." }),
      /* @__PURE__ */ A.jsx("li", { children: "First to solve all groups wins, or whoever solves the most with fewest mistakes." }),
      /* @__PURE__ */ A.jsx("li", { children: "Wildcards and mistakes affect your score and strategy." })
    ] })
  ] }) : null;
  return /* @__PURE__ */ A.jsx(Wg, { open: e, onClose: t, children: /* @__PURE__ */ A.jsxs("div", { className: Pt.statisticsModal, children: [
    /* @__PURE__ */ A.jsx(I_, { onClick: t }),
    /* @__PURE__ */ A.jsx("div", { className: Pt.statisticsHeader, children: "Statistics" }),
    r && r.name ? /* @__PURE__ */ A.jsxs(A.Fragment, { children: [
      /* @__PURE__ */ A.jsx(XK, { user: r }),
      /* @__PURE__ */ A.jsx(ZK, { stats: i }),
      o()
    ] }) : /* @__PURE__ */ A.jsxs("div", { className: Pt.statisticsGuestMessage, children: [
      /* @__PURE__ */ A.jsx("p", { children: "Sign in to track your progress and unlock streaks, win rate, and daily scores." }),
      /* @__PURE__ */ A.jsx("button", { className: Pt.statisticsSignInBtn, children: "Sign In with Google" })
    ] })
  ] }) });
}, JK = "_customizationCategory_niv6l_1", QK = "_customizationGrid_niv6l_6", eV = "_customizationItemBtn_niv6l_13", tV = "_customizationEquippedIndicator_niv6l_41", rV = "_customizationLockedBadge_niv6l_58", nV = "_customizationEmptyMsg_niv6l_72", zr = {
  customizationCategory: JK,
  customizationGrid: QK,
  customizationItemBtn: eV,
  customizationEquippedIndicator: tV,
  customizationLockedBadge: rV,
  customizationEmptyMsg: nV
};
function aV(e) {
  const t = e.toLowerCase();
  return {
    isEmote: t.includes("emote"),
    isFont: t.includes("font"),
    isTheme: t.includes("theme"),
    isBorder: t.includes("border"),
    isBackground: t.includes("background"),
    lowerTitle: t
  };
}
const eY = (e) => {
  const {
    title: t,
    items: r = [],
    onEquip: n,
    ariaLabelPrefix: a,
    lockedIndices: i = [],
    onLockedClick: o,
    onShopItemClick: s
  } = e, {
    isEmote: c,
    isFont: u,
    isTheme: l,
    isBorder: f,
    isBackground: d,
    lowerTitle: p
  } = aV(t);
  return /* @__PURE__ */ A.jsx(
    "div",
    {
      className: ce(
        zr.customizationCategory,
        `customization-category-${p}`
      ),
      children: r.length === 0 ? /* @__PURE__ */ A.jsxs("div", { className: zr.customizationEmptyMsg, children: [
        "No ",
        p,
        " unlocked yet."
      ] }) : /* @__PURE__ */ A.jsx("div", { className: zr.customizationGrid, children: r.map((v, y) => {
        const h = i.includes(y), g = !!v.shop && !v.unlocked;
        return /* @__PURE__ */ A.jsxs(
          "button",
          {
            onClick: h ? (w) => {
              w.preventDefault(), o && o(v);
            } : g ? (w) => {
              w.preventDefault(), s && s(v);
            } : () => {
              n(p, v.id);
            },
            className: ce(
              zr.customizationItemBtn,
              {
                equipped: v.equipped,
                "theme-preview": l,
                "emote-preview": c,
                "font-preview": u,
                "border-preview": f,
                "background-preview": d,
                locked: h,
                "shop-item": g
              }
            ),
            style: {
              height: "fit-content",
              width: "100%",
              maxWidth: 320,
              padding: "14px",
              borderRadius: 14,
              border: v.equipped ? "2.5px solid #38bdf8" : "2px solid #e0e7ef",
              background: h ? "#f1f5f9" : v.equipped ? "linear-gradient(90deg, #e0f2fe 0%, #bae6fd 100%)" : g ? "#f8fafc" : "#fff",
              fontWeight: 700,
              color: h ? "#b0b7c3" : v.equipped ? "#2563eb" : g ? "#64748b" : "#222",
              boxShadow: v.equipped ? "0 0 12px 2px #38bdf855" : "0 1px 4px 0 #e3eaff33",
              fontSize: "1.1rem",
              fontFamily: u ? v.name : void 0,
              cursor: "pointer",
              transition: "all 0.18s",
              position: "relative",
              opacity: g ? 0.7 : 1
            },
            "aria-label": h ? `Locked: log in to unlock ${v.name}` : g ? `Buy ${v.name} ${a}` : `Equip ${v.name} ${a}`,
            children: [
              /* @__PURE__ */ A.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  },
                  children: [
                    l && /* @__PURE__ */ A.jsx(
                      "div",
                      {
                        style: {
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          background: v.primaryColor || v.accentColor || "#e0e7ef",
                          border: `3px solid ${v.secondaryColor || v.borderColor || "#38bdf8"}`,
                          marginBottom: 6,
                          position: "relative"
                        },
                        children: /* @__PURE__ */ A.jsx(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: 10,
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              background: v.swatchGradient || v.accentColor || "#a78bfa"
                            }
                          }
                        )
                      }
                    ),
                    c && /* @__PURE__ */ A.jsx(
                      "img",
                      {
                        src: v.imageUrl || "/logo.svg",
                        alt: v.name,
                        width: 60,
                        height: 60,
                        style: {
                          borderRadius: 10,
                          marginBottom: 6,
                          objectFit: "cover",
                          background: "#f3f6fa"
                        }
                      }
                    ),
                    f && /* @__PURE__ */ A.jsx(
                      "div",
                      {
                        style: {
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          border: v.previewBorder || "3px solid #e0e7ef",
                          marginBottom: 6,
                          background: "#fff"
                        }
                      }
                    ),
                    d && /* @__PURE__ */ A.jsx(
                      "div",
                      {
                        style: {
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          marginBottom: 6,
                          background: v.previewImage ? `url(${v.previewImage}) center/cover no-repeat` : v.backgroundColor || "#e0e7ef"
                        }
                      }
                    ),
                    u && /* @__PURE__ */ A.jsx(
                      "div",
                      {
                        style: {
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                          marginBottom: 6,
                          background: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: v.name,
                          fontWeight: 700,
                          fontSize: 20,
                          color: "#222"
                        },
                        children: v.previewText || "Aa"
                      }
                    ),
                    /* @__PURE__ */ A.jsx(
                      "span",
                      {
                        style: {
                          fontSize: 14,
                          fontWeight: 600,
                          marginTop: 2,
                          fontFamily: u ? v.name : void 0
                        },
                        children: v.name
                      }
                    ),
                    v.description && /* @__PURE__ */ A.jsx(
                      "span",
                      {
                        style: {
                          fontSize: 10,
                          color: "#64748b",
                          marginTop: 2,
                          fontFamily: u ? v.name : void 0
                        },
                        children: v.description
                      }
                    )
                  ]
                }
              ),
              v.equipped && /* @__PURE__ */ A.jsx(
                "div",
                {
                  className: zr.customizationEquippedIndicator,
                  children: "✓"
                }
              ),
              h && /* @__PURE__ */ A.jsx(
                "span",
                {
                  className: zr.customizationLockedBadge,
                  title: "Log in to unlock this style",
                  children: "🔒"
                }
              ),
              g && /* @__PURE__ */ A.jsxs(
                "span",
                {
                  style: {
                    position: "absolute",
                    top: 8,
                    left: 8,
                    background: "#fff",
                    borderRadius: 8,
                    padding: "2px 10px",
                    fontSize: 13,
                    color: "#2563eb",
                    fontWeight: 700,
                    boxShadow: "0 1px 4px #e3eaff33",
                    border: "1.5px solid #e0e7ef",
                    zIndex: 2
                  },
                  children: [
                    v.price,
                    " ",
                    v.currency || "coins"
                  ]
                }
              ),
              g && /* @__PURE__ */ A.jsx(
                "span",
                {
                  className: zr.customizationLockedBadge,
                  title: "Purchase to unlock this style",
                  children: "🔒"
                }
              )
            ]
          },
          v.id
        );
      }) })
    }
  );
}, iV = "_sessionDebugger_rumj1_1", oV = {
  sessionDebugger: iV
}, tY = ({
  enabled: e = !1
}) => {
  const [t, r] = mt(null);
  return Gi(() => {
    r((/* @__PURE__ */ new Date()).toLocaleTimeString());
  }, []), e ? /* @__PURE__ */ A.jsxs("div", { className: oV.sessionDebugger, children: [
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("strong", { children: "Session Status:" }),
      " ",
      "unknown"
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("strong", { children: "User ID:" }),
      " ",
      "None"
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("strong", { children: "Email:" }),
      " ",
      "None"
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("strong", { children: "Session Exists:" }),
      " ",
      "No"
    ] }),
    /* @__PURE__ */ A.jsxs("div", { children: [
      /* @__PURE__ */ A.jsx("strong", { children: "Timestamp:" }),
      " ",
      t || "..."
    ] })
  ] }) : null;
};
export {
  jV as AchievementSocketListener,
  VV as BrowseHeader,
  cV as Button,
  I_ as CloseButton,
  dV as CopyLinkButton,
  vV as CustomPuzzleModal,
  eY as CustomizationCategory,
  PV as DarkModeToggle,
  hV as EndGameModal,
  kV as FeedbackBanner,
  CV as Footer,
  MV as FriendCard,
  DV as FriendChatWindow,
  LV as FriendsSidebar,
  pV as FriendsToggleButton,
  IV as GlobalToast,
  C_ as GoBackButton,
  YV as Graphs,
  fV as IconButton,
  BV as InMatchChatWindow,
  FV as MatchChatWindow,
  Wg as Modal,
  NV as NotificationBanner,
  yV as PreGameModal,
  WV as PregameGridLockout,
  uV as PrimaryButton,
  JV as PurchaseModal,
  mV as RulesModal,
  lV as SecondaryButton,
  tY as SessionDebugger,
  wV as SettingsPanel,
  ZV as ShareModalContent,
  gV as SignInModal,
  Ug as SocketContext,
  EV as SocketProvider,
  UV as SolvedGroupsDisplay,
  _V as StartupPage,
  QV as StatisticsModal,
  XV as StatisticsSummary,
  zf as ThemePaletteContext,
  AV as ThemePaletteProvider,
  OV as ThemeSelector,
  RV as ToastBanner,
  Ff as UserSettingsContext,
  xV as UserSettingsProvider,
  GV as VSBotGame,
  HV as VSGrid,
  $V as VSModeModal,
  qV as VSMultiplayerGame,
  zV as VSQuickChatBar,
  TV as VSRoomModal,
  KV as VSStatusBar,
  F_ as WordButton,
  yS as useSocket,
  SV as useThemePalette,
  bV as useUserSettings
};
//# sourceMappingURL=index.es.js.map
