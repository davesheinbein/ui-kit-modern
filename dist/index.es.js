var n_ = Object.defineProperty;
var a_ = (t, n, a) => n in t ? n_(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a;
var Ja = (t, n, a) => a_(t, typeof n != "symbol" ? n + "" : n, a);
import * as Pi from "react";
import it, { forwardRef as Le, useMemo as _i, useEffect as Te, memo as di, createElement as Wr, useRef as nt, useState as jt, useCallback as Ze, createContext as ma, useContext as o_, useId as sn, use as r_, useImperativeHandle as ha } from "react";
import { createPortal as s_ } from "react-dom";
var l_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Es(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Po = { exports: {} }, xn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function c_() {
  if (Vr) return xn;
  Vr = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(r, c, d) {
    var u = null;
    if (d !== void 0 && (u = "" + d), c.key !== void 0 && (u = "" + c.key), "key" in c) {
      d = {};
      for (var h in c)
        h !== "key" && (d[h] = c[h]);
    } else d = c;
    return c = d.ref, {
      $$typeof: t,
      type: r,
      key: u,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return xn.Fragment = n, xn.jsx = a, xn.jsxs = a, xn;
}
var vn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function __() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && function() {
    function t(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === M ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case P:
          return "Fragment";
        case F:
          return "Profiler";
        case $:
          return "StrictMode";
        case T:
          return "Suspense";
        case E:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case N:
            return "Portal";
          case A:
            return (x.displayName || "Context") + ".Provider";
          case H:
            return (x._context.displayName || "Context") + ".Consumer";
          case R:
            var O = x.render;
            return x = x.displayName, x || (x = O.displayName || O.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case J:
            return O = x.displayName || null, O !== null ? O : t(x.type) || "Memo";
          case G:
            O = x._payload, x = x._init;
            try {
              return t(x(O));
            } catch {
            }
        }
      return null;
    }
    function n(x) {
      return "" + x;
    }
    function a(x) {
      try {
        n(x);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var S = O.error, Z = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return S.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Z
        ), n(x);
      }
    }
    function r(x) {
      if (x === P) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === G)
        return "<...>";
      try {
        var O = t(x);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var x = j.A;
      return x === null ? null : x.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function u(x) {
      if (V.call(x, "key")) {
        var O = Object.getOwnPropertyDescriptor(x, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function h(x, O) {
      function S() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: S,
        configurable: !0
      });
    }
    function p() {
      var x = t(this.type);
      return te[x] || (te[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function g(x, O, S, Z, ie, X, K, pe) {
      return S = X.ref, x = {
        $$typeof: k,
        type: x,
        key: O,
        props: X,
        _owner: ie
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: pe
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function y(x, O, S, Z, ie, X, K, pe) {
      var de = O.children;
      if (de !== void 0)
        if (Z)
          if (Q(de)) {
            for (Z = 0; Z < de.length; Z++)
              v(de[Z]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(de);
      if (V.call(O, "key")) {
        de = t(x);
        var Pe = Object.keys(O).filter(function(ee) {
          return ee !== "key";
        });
        Z = 0 < Pe.length ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}", q[de + Z] || (Pe = 0 < Pe.length ? "{" + Pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Z,
          de,
          Pe,
          de
        ), q[de + Z] = !0);
      }
      if (de = null, S !== void 0 && (a(S), de = "" + S), u(O) && (a(O.key), de = "" + O.key), "key" in O) {
        S = {};
        for (var be in O)
          be !== "key" && (S[be] = O[be]);
      } else S = O;
      return de && h(
        S,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), g(
        x,
        de,
        X,
        ie,
        c(),
        S,
        K,
        pe
      );
    }
    function v(x) {
      typeof x == "object" && x !== null && x.$$typeof === k && x._store && (x._store.validated = 1);
    }
    var z = it, k = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), A = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), j = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Q = Array.isArray, le = console.createTask ? console.createTask : function() {
      return null;
    };
    z = {
      "react-stack-bottom-frame": function(x) {
        return x();
      }
    };
    var ae, te = {}, ce = z["react-stack-bottom-frame"].bind(
      z,
      d
    )(), w = le(r(d)), q = {};
    vn.Fragment = P, vn.jsx = function(x, O, S, Z, ie) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        x,
        O,
        S,
        !1,
        Z,
        ie,
        X ? Error("react-stack-top-frame") : ce,
        X ? le(r(x)) : w
      );
    }, vn.jsxs = function(x, O, S, Z, ie) {
      var X = 1e4 > j.recentlyCreatedOwnerStacks++;
      return y(
        x,
        O,
        S,
        !0,
        Z,
        ie,
        X ? Error("react-stack-top-frame") : ce,
        X ? le(r(x)) : w
      );
    };
  }()), vn;
}
process.env.NODE_ENV === "production" ? Po.exports = c_() : Po.exports = __();
var l = Po.exports;
const d_ = "_container_1el4l_117", u_ = "_flex_1el4l_248", m_ = "_grid_1el4l_344", h_ = "_relative_1el4l_726", p_ = "_absolute_1el4l_730", f_ = "_fixed_1el4l_734", g_ = "_sticky_1el4l_738", b_ = "_truncate_1el4l_877", y_ = "_border_1el4l_937", x_ = "_rounded_1el4l_977", v_ = "_shadow_1el4l_1009", w_ = "_transition_1el4l_1081", k_ = "_small_1el4l_1581", S_ = "_large_1el4l_1585", C_ = "_card_1el4l_1633", j_ = "_baseButton_1el4l_1758", z_ = "_fullWidth_1el4l_2046", T_ = "_loading_1el4l_2051", P_ = "_content_1el4l_2051", N_ = "_leftIcon_1el4l_2055", E_ = "_rightIcon_1el4l_2063", I_ = "_spinner_1el4l_2082", L_ = "_spin_1el4l_2082", A_ = "_modalCloseAbsolute_1el4l_2096", M_ = "_iconBtn_1el4l_2182", O_ = "_selected_1el4l_2289", R_ = "_active_1el4l_2294", D_ = "_locked_1el4l_2299", B_ = "_burnSuspect_1el4l_2304", $_ = "_burned_1el4l_2309", F_ = "_goBackIcon_1el4l_2476", H_ = "_goBackLabel_1el4l_2481", U_ = "_primaryBtn_1el4l_2558", Z_ = "_secondaryBtn_1el4l_2600", W_ = "_linkButton_1el4l_2752", V_ = "_closeButton_1el4l_2779", G_ = "_wordButton_1el4l_2786", Xe = {
  container: d_,
  "container-sm": "_container-sm_1el4l_133",
  "container-md": "_container-md_1el4l_149",
  "container-lg": "_container-lg_1el4l_165",
  "container-xl": "_container-xl_1el4l_181",
  "container-2xl": "_container-2xl_1el4l_197",
  "safe-area": "_safe-area_1el4l_213",
  "overflow-hidden": "_overflow-hidden_1el4l_219",
  "overflow-auto": "_overflow-auto_1el4l_223",
  "overflow-x-auto": "_overflow-x-auto_1el4l_228",
  "overflow-y-auto": "_overflow-y-auto_1el4l_234",
  "box-border": "_box-border_1el4l_240",
  "box-content": "_box-content_1el4l_244",
  flex: u_,
  "flex-col": "_flex-col_1el4l_252",
  "flex-row": "_flex-row_1el4l_257",
  "flex-wrap": "_flex-wrap_1el4l_262",
  "flex-nowrap": "_flex-nowrap_1el4l_267",
  "flex-center": "_flex-center_1el4l_272",
  "flex-between": "_flex-between_1el4l_278",
  "justify-start": "_justify-start_1el4l_284",
  "justify-center": "_justify-center_1el4l_288",
  "justify-end": "_justify-end_1el4l_292",
  "justify-between": "_justify-between_1el4l_296",
  "justify-around": "_justify-around_1el4l_300",
  "items-start": "_items-start_1el4l_304",
  "items-center": "_items-center_1el4l_308",
  "items-end": "_items-end_1el4l_312",
  "items-stretch": "_items-stretch_1el4l_316",
  "flex-1": "_flex-1_1el4l_320",
  "flex-auto": "_flex-auto_1el4l_324",
  "flex-none": "_flex-none_1el4l_328",
  "flex-grow": "_flex-grow_1el4l_332",
  "flex-shrink": "_flex-shrink_1el4l_336",
  "flex-shrink-0": "_flex-shrink-0_1el4l_340",
  grid: m_,
  "grid-auto-fit": "_grid-auto-fit_1el4l_348",
  "grid-auto-fill": "_grid-auto-fill_1el4l_355",
  "grid-cols-1": "_grid-cols-1_1el4l_362",
  "grid-cols-2": "_grid-cols-2_1el4l_366",
  "grid-cols-3": "_grid-cols-3_1el4l_370",
  "grid-cols-4": "_grid-cols-4_1el4l_374",
  "grid-cols-6": "_grid-cols-6_1el4l_378",
  "grid-cols-12": "_grid-cols-12_1el4l_382",
  "gap-0": "_gap-0_1el4l_386",
  "gap-1": "_gap-1_1el4l_390",
  "gap-2": "_gap-2_1el4l_394",
  "gap-3": "_gap-3_1el4l_398",
  "gap-4": "_gap-4_1el4l_402",
  "gap-5": "_gap-5_1el4l_406",
  "gap-6": "_gap-6_1el4l_410",
  "gap-8": "_gap-8_1el4l_414",
  "gap-10": "_gap-10_1el4l_418",
  "gap-12": "_gap-12_1el4l_422",
  "p-0": "_p-0_1el4l_426",
  "p-1": "_p-1_1el4l_430",
  "p-2": "_p-2_1el4l_434",
  "p-3": "_p-3_1el4l_438",
  "p-4": "_p-4_1el4l_442",
  "p-5": "_p-5_1el4l_446",
  "p-6": "_p-6_1el4l_450",
  "p-8": "_p-8_1el4l_454",
  "p-10": "_p-10_1el4l_458",
  "p-12": "_p-12_1el4l_462",
  "px-0": "_px-0_1el4l_466",
  "px-1": "_px-1_1el4l_471",
  "px-2": "_px-2_1el4l_476",
  "px-3": "_px-3_1el4l_481",
  "px-4": "_px-4_1el4l_486",
  "px-6": "_px-6_1el4l_491",
  "py-0": "_py-0_1el4l_496",
  "py-1": "_py-1_1el4l_501",
  "py-2": "_py-2_1el4l_506",
  "py-3": "_py-3_1el4l_511",
  "py-4": "_py-4_1el4l_516",
  "py-6": "_py-6_1el4l_521",
  "m-0": "_m-0_1el4l_526",
  "m-1": "_m-1_1el4l_530",
  "m-2": "_m-2_1el4l_534",
  "m-3": "_m-3_1el4l_538",
  "m-4": "_m-4_1el4l_542",
  "m-auto": "_m-auto_1el4l_546",
  "mx-auto": "_mx-auto_1el4l_550",
  "my-auto": "_my-auto_1el4l_555",
  "mx-0": "_mx-0_1el4l_560",
  "mx-1": "_mx-1_1el4l_565",
  "mx-2": "_mx-2_1el4l_570",
  "mx-3": "_mx-3_1el4l_575",
  "mx-4": "_mx-4_1el4l_580",
  "my-0": "_my-0_1el4l_585",
  "my-1": "_my-1_1el4l_590",
  "my-2": "_my-2_1el4l_595",
  "my-3": "_my-3_1el4l_600",
  "my-4": "_my-4_1el4l_605",
  "w-full": "_w-full_1el4l_610",
  "w-auto": "_w-auto_1el4l_614",
  "w-fit": "_w-fit_1el4l_618",
  "w-min": "_w-min_1el4l_622",
  "w-max": "_w-max_1el4l_626",
  "max-w-none": "_max-w-none_1el4l_630",
  "max-w-xs": "_max-w-xs_1el4l_634",
  "max-w-sm": "_max-w-sm_1el4l_638",
  "max-w-md": "_max-w-md_1el4l_642",
  "max-w-lg": "_max-w-lg_1el4l_646",
  "max-w-xl": "_max-w-xl_1el4l_650",
  "max-w-2xl": "_max-w-2xl_1el4l_654",
  "max-w-3xl": "_max-w-3xl_1el4l_658",
  "max-w-4xl": "_max-w-4xl_1el4l_662",
  "max-w-5xl": "_max-w-5xl_1el4l_666",
  "max-w-6xl": "_max-w-6xl_1el4l_670",
  "max-w-7xl": "_max-w-7xl_1el4l_674",
  "max-w-full": "_max-w-full_1el4l_678",
  "min-w-0": "_min-w-0_1el4l_682",
  "min-w-full": "_min-w-full_1el4l_686",
  "h-auto": "_h-auto_1el4l_690",
  "h-fit": "_h-fit_1el4l_694",
  "h-full": "_h-full_1el4l_698",
  "h-screen": "_h-screen_1el4l_702",
  "max-h-full": "_max-h-full_1el4l_706",
  "max-h-screen": "_max-h-screen_1el4l_710",
  "min-h-0": "_min-h-0_1el4l_714",
  "min-h-full": "_min-h-full_1el4l_718",
  "min-h-screen": "_min-h-screen_1el4l_722",
  relative: h_,
  absolute: p_,
  fixed: f_,
  sticky: g_,
  static: "_static_1el4l_742",
  "inset-0": "_inset-0_1el4l_746",
  "top-0": "_top-0_1el4l_753",
  "right-0": "_right-0_1el4l_757",
  "bottom-0": "_bottom-0_1el4l_761",
  "left-0": "_left-0_1el4l_765",
  "text-left": "_text-left_1el4l_769",
  "text-center": "_text-center_1el4l_773",
  "text-right": "_text-right_1el4l_777",
  "text-justify": "_text-justify_1el4l_781",
  "text-xs": "_text-xs_1el4l_785",
  "text-sm": "_text-sm_1el4l_789",
  "text-base": "_text-base_1el4l_793",
  "text-lg": "_text-lg_1el4l_797",
  "text-xl": "_text-xl_1el4l_801",
  "text-2xl": "_text-2xl_1el4l_805",
  "text-3xl": "_text-3xl_1el4l_809",
  "text-4xl": "_text-4xl_1el4l_813",
  "font-normal": "_font-normal_1el4l_817",
  "font-medium": "_font-medium_1el4l_821",
  "font-semibold": "_font-semibold_1el4l_825",
  "font-bold": "_font-bold_1el4l_829",
  "leading-tight": "_leading-tight_1el4l_833",
  "leading-normal": "_leading-normal_1el4l_837",
  "leading-relaxed": "_leading-relaxed_1el4l_841",
  "text-primary": "_text-primary_1el4l_845",
  "text-secondary": "_text-secondary_1el4l_849",
  "text-muted": "_text-muted_1el4l_853",
  "text-inverse": "_text-inverse_1el4l_857",
  "text-blue": "_text-blue_1el4l_861",
  "text-red": "_text-red_1el4l_865",
  "text-green": "_text-green_1el4l_869",
  "text-yellow": "_text-yellow_1el4l_873",
  truncate: b_,
  "text-ellipsis": "_text-ellipsis_1el4l_884",
  "text-clip": "_text-clip_1el4l_891",
  "bg-transparent": "_bg-transparent_1el4l_897",
  "bg-white": "_bg-white_1el4l_901",
  "bg-gray-50": "_bg-gray-50_1el4l_905",
  "bg-gray-100": "_bg-gray-100_1el4l_909",
  "bg-gray-200": "_bg-gray-200_1el4l_913",
  "bg-primary": "_bg-primary_1el4l_917",
  "bg-secondary": "_bg-secondary_1el4l_921",
  "bg-success": "_bg-success_1el4l_925",
  "bg-danger": "_bg-danger_1el4l_929",
  "bg-warning": "_bg-warning_1el4l_933",
  border: y_,
  "border-0": "_border-0_1el4l_941",
  "border-t": "_border-t_1el4l_945",
  "border-r": "_border-r_1el4l_949",
  "border-b": "_border-b_1el4l_953",
  "border-l": "_border-l_1el4l_957",
  "border-gray-200": "_border-gray-200_1el4l_961",
  "border-gray-300": "_border-gray-300_1el4l_965",
  "border-primary": "_border-primary_1el4l_969",
  "border-danger": "_border-danger_1el4l_973",
  "rounded-none": "_rounded-none_1el4l_977",
  "rounded-sm": "_rounded-sm_1el4l_981",
  rounded: x_,
  "rounded-md": "_rounded-md_1el4l_989",
  "rounded-lg": "_rounded-lg_1el4l_993",
  "rounded-xl": "_rounded-xl_1el4l_997",
  "rounded-2xl": "_rounded-2xl_1el4l_1001",
  "rounded-full": "_rounded-full_1el4l_1005",
  "shadow-none": "_shadow-none_1el4l_1009",
  "shadow-sm": "_shadow-sm_1el4l_1013",
  shadow: v_,
  "shadow-md": "_shadow-md_1el4l_1021",
  "shadow-lg": "_shadow-lg_1el4l_1025",
  "shadow-xl": "_shadow-xl_1el4l_1029",
  "z-0": "_z-0_1el4l_1033",
  "z-10": "_z-10_1el4l_1037",
  "z-20": "_z-20_1el4l_1041",
  "z-30": "_z-30_1el4l_1045",
  "z-40": "_z-40_1el4l_1049",
  "z-50": "_z-50_1el4l_1053",
  "z-auto": "_z-auto_1el4l_1057",
  "z-dropdown": "_z-dropdown_1el4l_1061",
  "z-sticky": "_z-sticky_1el4l_1065",
  "z-fixed": "_z-fixed_1el4l_1069",
  "z-modal": "_z-modal_1el4l_1073",
  "z-tooltip": "_z-tooltip_1el4l_1077",
  "transition-none": "_transition-none_1el4l_1081",
  "transition-all": "_transition-all_1el4l_1085",
  "transition-fast": "_transition-fast_1el4l_1089",
  "transition-slow": "_transition-slow_1el4l_1093",
  "sr-only": "_sr-only_1el4l_1097",
  "focus-ring": "_focus-ring_1el4l_1109",
  "cursor-default": "_cursor-default_1el4l_1115",
  "cursor-pointer": "_cursor-pointer_1el4l_1119",
  "cursor-not-allowed": "_cursor-not-allowed_1el4l_1123",
  "select-none": "_select-none_1el4l_1127",
  "select-text": "_select-text_1el4l_1131",
  "select-all": "_select-all_1el4l_1135",
  "select-auto": "_select-auto_1el4l_1139",
  "pointer-events-none": "_pointer-events-none_1el4l_1143",
  "pointer-events-auto": "_pointer-events-auto_1el4l_1147",
  "gap-sm": "_gap-sm_1el4l_1151",
  "gap-md": "_gap-md_1el4l_1155",
  "gap-lg": "_gap-lg_1el4l_1159",
  "gap-xl": "_gap-xl_1el4l_1163",
  "p-sm": "_p-sm_1el4l_1167",
  "p-md": "_p-md_1el4l_1171",
  "p-lg": "_p-lg_1el4l_1175",
  "p-xl": "_p-xl_1el4l_1179",
  "m-sm": "_m-sm_1el4l_1183",
  "m-md": "_m-md_1el4l_1187",
  "m-lg": "_m-lg_1el4l_1191",
  "m-xl": "_m-xl_1el4l_1195",
  "text-gray": "_text-gray_1el4l_1199",
  "mobile:hidden": "_mobile:hidden_1el4l_1204",
  "mobile:block": "_mobile:block_1el4l_1207",
  "mobile:flex": "_mobile:flex_1el4l_1210",
  "mobile:grid": "_mobile:grid_1el4l_1213",
  "mobile:text-sm": "_mobile:text-sm_1el4l_1216",
  "mobile:text-xs": "_mobile:text-xs_1el4l_1219",
  "mobile:p-2": "_mobile:p-2_1el4l_1222",
  "mobile:px-2": "_mobile:px-2_1el4l_1225",
  "tablet:block": "_tablet:block_1el4l_1231",
  "tablet:flex": "_tablet:flex_1el4l_1234",
  "tablet:grid": "_tablet:grid_1el4l_1237",
  "tablet:hidden": "_tablet:hidden_1el4l_1240",
  "desktop:block": "_desktop:block_1el4l_1245",
  "desktop:flex": "_desktop:flex_1el4l_1248",
  "desktop:grid": "_desktop:grid_1el4l_1251",
  "desktop:hidden": "_desktop:hidden_1el4l_1254",
  "bg-gray": "_bg-gray_1el4l_905",
  "border-secondary": "_border-secondary_1el4l_1278",
  "border-gray": "_border-gray_1el4l_961",
  "shadow-glow": "_shadow-glow_1el4l_1314",
  "w-8": "_w-8_1el4l_1362",
  "w-10": "_w-10_1el4l_1366",
  "w-12": "_w-12_1el4l_1370",
  "w-16": "_w-16_1el4l_1374",
  "h-8": "_h-8_1el4l_1378",
  "h-10": "_h-10_1el4l_1382",
  "h-12": "_h-12_1el4l_1386",
  "h-16": "_h-16_1el4l_1390",
  "user-select-none": "_user-select-none_1el4l_1406",
  transition: w_,
  "transition-colors": "_transition-colors_1el4l_1414",
  "transition-transform": "_transition-transform_1el4l_1418",
  "hover-scale": "_hover-scale_1el4l_1422",
  "fade-in": "_fade-in_1el4l_1429",
  "status-online": "_status-online_1el4l_1441",
  "status-offline": "_status-offline_1el4l_1451",
  "status-away": "_status-away_1el4l_1461",
  "status-busy": "_status-busy_1el4l_1471",
  "modal-overlay": "_modal-overlay_1el4l_1481",
  "modal-content": "_modal-content_1el4l_1495",
  "close-button-absolute": "_close-button-absolute_1el4l_1509",
  small: k_,
  large: S_,
  "primary-button": "_primary-button_1el4l_1590",
  "secondary-button": "_secondary-button_1el4l_1594",
  card: C_,
  "input-base": "_input-base_1el4l_1647",
  "chat-window": "_chat-window_1el4l_1679",
  "chat-message": "_chat-message_1el4l_1690",
  "z-overlay": "_z-overlay_1el4l_1715",
  "mobile-hidden": "_mobile-hidden_1el4l_1720",
  "mobile-flex-col": "_mobile-flex-col_1el4l_1723",
  "mobile-text-center": "_mobile-text-center_1el4l_1726",
  "mobile-p-sm": "_mobile-p-sm_1el4l_1729",
  "mobile-gap-sm": "_mobile-gap-sm_1el4l_1732",
  "desktop-hidden": "_desktop-hidden_1el4l_1737",
  "print-hidden": "_print-hidden_1el4l_1742",
  baseButton: j_,
  "button-primary": "_button-primary_1el4l_1808",
  "button-secondary": "_button-secondary_1el4l_1847",
  "button-danger": "_button-danger_1el4l_1886",
  "button-success": "_button-success_1el4l_1922",
  "button-warning": "_button-warning_1el4l_1938",
  "button-ghost": "_button-ghost_1el4l_1954",
  "button-link": "_button-link_1el4l_1990",
  "button-small": "_button-small_1el4l_2028",
  "button-medium": "_button-medium_1el4l_2034",
  "button-large": "_button-large_1el4l_2040",
  fullWidth: z_,
  loading: T_,
  content: P_,
  leftIcon: N_,
  rightIcon: E_,
  spinner: I_,
  spin: L_,
  "close-button": "_close-button_1el4l_1509",
  modalCloseAbsolute: A_,
  iconBtn: M_,
  "word-button": "_word-button_1el4l_2249",
  selected: O_,
  active: R_,
  locked: D_,
  burnSuspect: B_,
  burned: $_,
  "copy-link": "_copy-link_1el4l_2315",
  "share-link--copy": "_share-link--copy_1el4l_2390",
  "share-link-icon": "_share-link-icon_1el4l_2396",
  "share-link-text": "_share-link-text_1el4l_2402",
  "go-back": "_go-back_1el4l_2410",
  goBackIcon: F_,
  goBackLabel: H_,
  "friends-toggle": "_friends-toggle_1el4l_2489",
  "friends-toggle__image": "_friends-toggle__image_1el4l_2539",
  "friends-toggle-icon": "_friends-toggle-icon_1el4l_2546",
  primaryBtn: U_,
  secondaryBtn: Z_,
  "nav-back": "_nav-back_1el4l_2642",
  linkButton: W_,
  closeButton: V_,
  wordButton: G_,
  "button__icon-text--top": "_button__icon-text--top_1el4l_2804",
  "button__icon-text--bottom": "_button__icon-text--bottom_1el4l_2811",
  "loading-shimmer": "_loading-shimmer_1el4l_1"
}, Is = {
  // Basic variants
  primary: {
    variant: "primary",
    size: "medium",
    behavior: "button",
    className: Xe.primaryBtn
  },
  secondary: {
    variant: "secondary",
    size: "medium",
    behavior: "button",
    className: Xe.secondaryBtn
  },
  danger: {
    variant: "danger",
    size: "medium",
    behavior: "button"
  },
  success: {
    variant: "success",
    size: "medium",
    behavior: "button"
  },
  warning: {
    variant: "warning",
    size: "medium",
    behavior: "button"
  },
  ghost: {
    variant: "ghost",
    size: "medium",
    behavior: "button"
  },
  link: {
    variant: "link",
    size: "medium",
    behavior: "link"
  },
  // Specialized UI buttons
  icon: {
    variant: "ghost",
    size: "small",
    iconPosition: "only",
    behavior: "button",
    ariaLabel: "Icon button",
    className: Xe.iconBtn
  },
  close: {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "left",
    defaultText: "Close",
    behavior: "close",
    ariaLabel: "Close",
    className: Xe["close-button"]
  },
  "close-icon-only": {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "only",
    behavior: "close",
    ariaLabel: "Close",
    className: Xe["close-button"]
  },
  word: {
    variant: "secondary",
    size: "medium",
    behavior: "toggle",
    className: Xe["word-button"]
  },
  "copy-link": {
    variant: "ghost",
    size: "medium",
    icon: "📋",
    iconPosition: "left",
    defaultText: "Copy Link",
    behavior: "copy",
    ariaLabel: "Copy link",
    className: Xe["copy-link"]
  },
  "go-back": {
    variant: "ghost",
    size: "medium",
    icon: "←",
    iconPosition: "left",
    defaultText: "Back",
    behavior: "button",
    ariaLabel: "Go back",
    className: Xe["go-back"]
  },
  "friends-toggle": {
    variant: "ghost",
    size: "medium",
    iconPosition: "only",
    behavior: "toggle",
    ariaLabel: "Open friends sidebar",
    className: "friends-toggle-btn"
  },
  // App-specific buttons
  "dark-mode-toggle": {
    variant: "ghost",
    size: "small",
    icon: "🌙",
    iconPosition: "only",
    behavior: "toggle",
    ariaLabel: "Toggle dark mode"
  },
  "notification-close": {
    variant: "ghost",
    size: "small",
    icon: "✕",
    iconPosition: "only",
    behavior: "close",
    ariaLabel: "Close notification"
  },
  "toast-action": {
    variant: "ghost",
    size: "small",
    behavior: "button",
    className: "toast-action"
  },
  "feedback-action": {
    variant: "primary",
    size: "small",
    behavior: "button",
    className: "feedback-action"
  },
  "customization-item": {
    variant: "secondary",
    size: "medium",
    behavior: "toggle",
    className: "customization-item"
  },
  // Game-specific buttons
  "vs-quick-chat": {
    variant: "ghost",
    size: "small",
    behavior: "button",
    className: "vs-quick-chat-btn"
  },
  "vs-status-emote": {
    variant: "ghost",
    size: "small",
    behavior: "button",
    ariaLabel: "Send emote",
    className: "vs-emote-btn"
  },
  "pregame-ready": {
    variant: "success",
    size: "large",
    defaultText: "Ready",
    behavior: "button"
  },
  // Purchase/Commerce buttons
  "purchase-buy": {
    variant: "primary",
    size: "medium",
    defaultText: "Buy",
    behavior: "button"
  },
  "purchase-gift": {
    variant: "secondary",
    size: "medium",
    defaultText: "Gift",
    behavior: "button"
  },
  // Modal buttons
  "modal-confirm": {
    variant: "primary",
    size: "medium",
    defaultText: "Confirm",
    behavior: "button"
  },
  "modal-cancel": {
    variant: "secondary",
    size: "medium",
    defaultText: "Cancel",
    behavior: "button"
  },
  // Form buttons
  "form-submit": {
    variant: "primary",
    size: "medium",
    defaultText: "Submit",
    behavior: "button"
  },
  "form-reset": {
    variant: "secondary",
    size: "medium",
    defaultText: "Reset",
    behavior: "button"
  },
  // Navigation buttons
  "nav-back": {
    variant: "ghost",
    size: "medium",
    icon: "←",
    iconPosition: "only",
    behavior: "button",
    ariaLabel: "Go back",
    className: Xe["nav-back"]
  },
  "nav-forward": {
    variant: "ghost",
    size: "medium",
    icon: "→",
    iconPosition: "right",
    defaultText: "Next",
    behavior: "button"
  },
  // Custom fallback
  custom: {
    variant: "primary",
    size: "medium",
    behavior: "button"
  }
}, ci = (t, n) => ({
  ...Is[t],
  ...n
}), j9 = {
  // Modal actions
  modalActions: {
    confirm: "modal-confirm",
    cancel: "modal-cancel"
  },
  // Form actions
  formActions: {
    submit: "form-submit",
    reset: "form-reset",
    cancel: "modal-cancel"
  },
  // Purchase actions
  purchaseActions: {
    buy: "purchase-buy",
    gift: "purchase-gift"
  },
  // Navigation actions
  navigationActions: {
    back: "nav-back",
    forward: "nav-forward",
    close: "close"
  },
  // Game actions
  gameActions: {
    ready: "pregame-ready",
    emote: "vs-status-emote",
    quickChat: "vs-quick-chat"
  },
  // Common UI actions
  uiActions: {
    copy: "copy-link",
    close: "close"
  },
  // Friends/Social UI actions
  socialActions: {
    friendsToggle: "friends-toggle",
    darkModeToggle: "dark-mode-toggle"
  }
}, z9 = {
  saveButton: () => ci("primary", { defaultText: "Save" }),
  cancelButton: () => ci("secondary", {
    defaultText: "Cancel"
  }),
  deleteButton: () => ci("danger", { defaultText: "Delete" }),
  editButton: () => ci("ghost", {
    icon: "✏️",
    defaultText: "Edit"
  }),
  addButton: () => ci("success", {
    icon: "+",
    defaultText: "Add"
  }),
  shareButton: () => ci("ghost", {
    icon: "🔗",
    defaultText: "Share"
  }),
  settingsButton: () => ci("ghost", {
    icon: "⚙️",
    ariaLabel: "Settings"
  }),
  helpButton: () => ci("ghost", {
    icon: "?",
    ariaLabel: "Help"
  }),
  refreshButton: () => ci("ghost", {
    icon: "🔄",
    ariaLabel: "Refresh"
  }),
  downloadButton: () => ci("primary", {
    icon: "⬇️",
    defaultText: "Download"
  })
};
var Ls = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, qr = it.createContext && /* @__PURE__ */ it.createContext(Ls), q_ = ["attr", "size", "title"];
function K_(t, n) {
  if (t == null) return {};
  var a = Y_(t, n), r, c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (c = 0; c < d.length; c++)
      r = d[c], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
function Y_(t, n) {
  if (t == null) return {};
  var a = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (n.indexOf(r) >= 0) continue;
      a[r] = t[r];
    }
  return a;
}
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    }
    return t;
  }, ra.apply(this, arguments);
}
function Kr(t, n) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function sa(t) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Kr(Object(a), !0).forEach(function(r) {
      J_(t, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Kr(Object(a)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return t;
}
function J_(t, n, a) {
  return n = X_(n), n in t ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = a, t;
}
function X_(t) {
  var n = Q_(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Q_(t, n) {
  if (typeof t != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(t, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function As(t) {
  return t && t.map((n, a) => /* @__PURE__ */ it.createElement(n.tag, sa({
    key: a
  }, n.attr), As(n.child)));
}
function Lt(t) {
  return (n) => /* @__PURE__ */ it.createElement(ed, ra({
    attr: sa({}, t.attr)
  }, n), As(t.child));
}
function ed(t) {
  var n = (a) => {
    var {
      attr: r,
      size: c,
      title: d
    } = t, u = K_(t, q_), h = c || a.size || "1em", p;
    return a.className && (p = a.className), t.className && (p = (p ? p + " " : "") + t.className), /* @__PURE__ */ it.createElement("svg", ra({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, r, u, {
      className: p,
      style: sa(sa({
        color: t.color || a.color
      }, a.style), t.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && /* @__PURE__ */ it.createElement("title", null, d), t.children);
  };
  return qr !== void 0 ? /* @__PURE__ */ it.createElement(qr.Consumer, null, (a) => n(a)) : n(Ls);
}
function td(t) {
  return Lt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" }, child: [] }] })(t);
}
function id(t) {
  return Lt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" }, child: [] }] })(t);
}
function nd(t) {
  return Lt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" }, child: [] }] })(t);
}
function ad(t) {
  return Lt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(t);
}
function od(t) {
  return Lt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(t);
}
function rd(t) {
  return Lt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(t);
}
function sd(t) {
  return Lt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(t);
}
function ld(t) {
  return Lt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(t);
}
function cd(t) {
  return Lt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" }, child: [] }] })(t);
}
function _d(t) {
  return Lt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" }, child: [] }] })(t);
}
function dd(t) {
  return Lt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, child: [] }] })(t);
}
function ud(t) {
  return Lt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" }, child: [] }] })(t);
}
function md(t) {
  return Lt({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(t);
}
function hd(t) {
  return Lt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(t);
}
function pd(t) {
  return Lt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" }, child: [] }] })(t);
}
const fd = "_icon_179k2_1", Xa = {
  icon: fd,
  "icon--small": "_icon--small_179k2_11",
  "icon--medium": "_icon--medium_179k2_15",
  "icon--large": "_icon--large_179k2_19",
  "icon--primary": "_icon--primary_179k2_23",
  "icon--secondary": "_icon--secondary_179k2_27",
  "icon--success": "_icon--success_179k2_31",
  "icon--warning": "_icon--warning_179k2_35",
  "icon--danger": "_icon--danger_179k2_39"
}, gd = {
  check: od,
  close: md,
  settings: rd,
  user: hd,
  home: _d,
  star: ud,
  search: dd,
  heart: cd,
  bell: nd,
  "arrow-left": td,
  "arrow-right": id,
  copy: pd,
  warning: ld,
  success: ad,
  danger: sd
}, bd = ({
  name: t,
  svg: n,
  imgSrc: a,
  size: r = 24,
  color: c = "currentColor",
  className: d = "",
  variant: u,
  sizeVariant: h,
  children: p,
  ...g
}) => {
  const y = t ? gd[t] : void 0, v = [
    Xa.icon,
    h && Xa[`icon--${h}`],
    u && Xa[`icon--${u}`],
    d
  ].filter(Boolean).join(" ");
  return n ? /* @__PURE__ */ l.jsx(
    "span",
    {
      className: v,
      style: { fontSize: r, color: c },
      ...g,
      children: n
    }
  ) : a ? /* @__PURE__ */ l.jsx(
    "img",
    {
      src: a,
      alt: t || "icon",
      className: v,
      style: { width: r, height: r, color: c },
      ...g
    }
  ) : p ? /* @__PURE__ */ l.jsx(
    "span",
    {
      className: v,
      style: { fontSize: r, color: c },
      ...g,
      children: p
    }
  ) : y ? /* @__PURE__ */ l.jsx(
    y,
    {
      size: r,
      color: c,
      className: v,
      ...g
    }
  ) : null;
}, Ce = Le(
  ({
    kind: t = "primary",
    contentType: n = "text",
    icon: a,
    word: r,
    text: c,
    children: d,
    href: u,
    copyText: h,
    isSelected: p = !1,
    isActive: g = !1,
    isLocked: y = !1,
    burnSuspect: v = !1,
    isBurned: z = !1,
    imageUrl: k,
    userName: N,
    isAuthenticated: P = !1,
    label: $,
    size: F,
    loading: H = !1,
    fullWidth: A = !1,
    className: R = "",
    onClick: T,
    iconPosition: E,
    ...J
  }, G) => {
    const B = Is[t], M = E || B.iconPosition || "left";
    let j = a || B.icon;
    typeof j == "string" && [
      "check",
      "close",
      "settings",
      "user",
      "home",
      "star",
      "search",
      "heart",
      "bell",
      "arrow-left",
      "arrow-right",
      "copy",
      "warning",
      "success",
      "danger"
    ].includes(j) && (j = /* @__PURE__ */ l.jsx(
      bd,
      {
        name: j,
        size: F === "small" ? 16 : F === "large" ? 28 : 20
      }
    ));
    const V = c || r || d || B.defaultText;
    let Q = null;
    t === "friends-toggle" && (P && k ? Q = /* @__PURE__ */ l.jsx(
      "img",
      {
        src: k,
        alt: N || "Profile",
        className: Xe["friends-toggle__image"]
      }
    ) : Q = /* @__PURE__ */ l.jsx("span", { className: Xe["friends-toggle-icon"], children: /* @__PURE__ */ l.jsxs(
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
          /* @__PURE__ */ l.jsx("circle", { cx: "9", cy: "7", r: "4" }),
          /* @__PURE__ */ l.jsx("path", { d: "M17 11v-1a4 4 0 0 0-4-4" }),
          /* @__PURE__ */ l.jsx("path", { d: "M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" })
        ]
      }
    ) }));
    const le = $ || B.ariaLabel || (typeof V == "string" ? V : "Button"), ae = [
      Xe.baseButton,
      // Base button styles
      Xe[`button-${B.variant}`],
      // Variant styles
      Xe[`button-${F || B.size || "medium"}`],
      // Size styles
      R,
      B.className,
      p && Xe.selected,
      g && Xe.active,
      y && Xe.locked,
      v && Xe.burnSuspect,
      z && Xe.burned,
      H && Xe.loading,
      A && Xe.fullWidth
    ].filter(Boolean).join(" "), te = (w) => {
      switch (B.behavior) {
        case "copy":
          h && navigator.clipboard.writeText(h).catch(console.error);
          break;
        case "close":
          break;
        case "toggle":
          break;
        case "link":
          if (u) {
            window.location.href = u;
            return;
          }
          break;
      }
      B.clickHandler && B.clickHandler(w), T == null || T(w);
    }, ce = () => n === "icon" ? j : n === "textIcon" ? (M === "top" || M === "bottom") && j ? /* @__PURE__ */ l.jsxs(
      "span",
      {
        className: M === "top" ? Xe["button__icon-text--top"] : Xe["button__icon-text--bottom"],
        children: [
          /* @__PURE__ */ l.jsx("span", { children: j }),
          V && /* @__PURE__ */ l.jsx("span", { children: V })
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      M === "left" && j && /* @__PURE__ */ l.jsx("span", { className: Xe.leftIcon, children: j }),
      V && /* @__PURE__ */ l.jsx("span", { children: V }),
      M === "right" && j && /* @__PURE__ */ l.jsx("span", { className: Xe.rightIcon, children: j })
    ] }) : V;
    return B.behavior === "link" && u ? /* @__PURE__ */ l.jsx(
      "a",
      {
        href: u,
        className: `${Xe.linkButton} ${ae}`.trim(),
        ref: G,
        "aria-label": le,
        ...J,
        children: ce()
      }
    ) : n === "icon" ? /* @__PURE__ */ l.jsx(
      "button",
      {
        ref: G,
        className: ae,
        onClick: te,
        "aria-label": le,
        disabled: y || H,
        ...J,
        children: t === "friends-toggle" ? Q : j
      }
    ) : /* @__PURE__ */ l.jsx(
      "button",
      {
        ref: G,
        className: ae,
        onClick: te,
        "aria-label": le,
        disabled: y || H,
        ...J,
        children: t === "friends-toggle" ? Q : ce()
      }
    );
  }
);
Ce.displayName = "Button";
function Rt(t, n = {}) {
  return it.createElement(Ce, {
    kind: t,
    ...n
  });
}
function T9(t, n = {}) {
  return Object.fromEntries(
    Object.entries(t).map(
      ([a, { kind: r, props: c = {} }]) => [
        a,
        Rt(r, { ...n, ...c })
      ]
    )
  );
}
const yd = (t, n = "Save") => Rt("primary", { onClick: t, text: n }), xd = (t, n = "Cancel") => Rt("secondary", { onClick: t, text: n }), P9 = (t, n = "Delete") => Rt("danger", { onClick: t, text: n }), N9 = (t, n = "Edit") => Rt("ghost", { onClick: t, text: n, icon: "✏️" }), E9 = (t, n = "Add") => Rt("success", { onClick: t, text: n, icon: "+" }), I9 = (t) => Rt("close", { onClick: t }), L9 = (t, n = "Back") => Rt("go-back", { onClick: t, text: n }), A9 = (t, n = "Copy") => Rt("copy-link", { copyText: t, text: n }), M9 = (t, n, a) => Rt("icon", { icon: t, onClick: n, label: a }), O9 = (t, n) => ({
  confirm: Rt("danger", {
    onClick: t,
    text: "Confirm"
  }),
  cancel: Rt("secondary", {
    onClick: n,
    text: "Cancel"
  })
}), R9 = (t, n, a) => ({
  delete: Rt("danger", {
    onClick: t,
    text: a ? `Delete ${a}` : "Delete"
  }),
  cancel: Rt("secondary", {
    onClick: n,
    text: "Cancel"
  })
}), D9 = (t, n) => ({
  save: yd(t),
  cancel: xd(n)
}), vd = {
  kind: "component",
  variant: "component-wrapper",
  layout: "passthrough",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic component wrapper",
  migrationPath: "Use the specific component method"
}, wd = {
  kind: "provider",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "Provider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic provider wrapper",
  migrationPath: "Use the specific provider method"
}, kd = {
  kind: "legacy",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Generic legacy wrapper",
  migrationPath: "Migrate to the corresponding component"
}, Sd = {
  kind: "flex-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "FlexContainer",
  Component: "FlexContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Flexbox container wrapper with positioning control",
  migrationPath: "Use CSS flexbox directly or Wrapper with flex kind"
}, Cd = {
  kind: "grid-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "GridContainer",
  Component: "GridContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "CSS Grid container wrapper with positioning control",
  migrationPath: "Use CSS grid directly or Wrapper with grid kind"
}, jd = {
  kind: "center-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "CenterContainer",
  Component: "CenterContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Container that centers content both horizontally and vertically",
  migrationPath: "Use CSS centering techniques or Wrapper with center kind"
}, zd = {
  kind: "stack-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "StackContainer",
  Component: "StackContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Vertical stack container with gap control",
  migrationPath: "Use CSS flexbox column or Wrapper with stack kind"
}, Td = {
  kind: "button-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Button",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  memoized: !0,
  description: "Backward compatibility wrapper for Button component",
  migrationPath: "Use Button directly or Button for new code"
}, Pd = {
  kind: "header-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Header",
  Component: "Header",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Header component",
  migrationPath: "Use Header or Header for advanced features"
}, Nd = {
  kind: "modal-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Modal",
  Component: "Modal",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Modal component",
  migrationPath: "Use Modal or Modal for new features"
}, Ed = {
  kind: "grid-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Grid",
  Component: "Grid",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Basic wrapper around Grid for simple use cases",
  migrationPath: "Use Grid or Grid for advanced layouts"
}, Id = {
  kind: "page-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Page",
  Component: "Page",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Wrapper around Page for the most common use case",
  migrationPath: "Use Page or Page for advanced features"
}, Ld = {
  kind: "graph-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Graphs",
  Component: "Graph",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Wrapper around Graph for the most common use case",
  migrationPath: "Use Graph or Graph for advanced charts"
}, Ad = {
  kind: "sidebar-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Sidebar",
  Component: "Sidebar",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Sidebar component",
  migrationPath: "Use Sidebar or Sidebar for new features"
}, Md = {
  kind: "settings-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Settings",
  Component: "Settings",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Settings component",
  migrationPath: "Use Settings or Settings for new features"
}, Od = {
  kind: "theme-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Theme",
  Component: "Theme",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Theme component",
  migrationPath: "Use Theme or Theme for new features"
}, Rd = {
  kind: "admin-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Admin",
  Component: "Admin",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Admin component",
  migrationPath: "Use Admin or Admin for new features"
}, Dd = {
  kind: "card-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Card",
  Component: "Card",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Card component",
  migrationPath: "Use Card or Card for advanced features"
}, Bd = {
  kind: "banner-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Banner",
  Component: "Banner",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Banner component",
  migrationPath: "Use Banner or Banner for advanced features"
}, $d = {
  kind: "chat-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Chat",
  Component: "Chat",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Chat component",
  migrationPath: "Use Chat or Chat for advanced features"
}, Fd = {
  kind: "form-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Form",
  Component: "Form",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Form component",
  migrationPath: "Use Form or Form for advanced features"
}, Hd = {
  kind: "socket-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "SocketProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for SocketProvider",
  migrationPath: 'Use Provider with kind="socket-provider"'
}, Ud = {
  kind: "user-settings-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "UserSettingsProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for UserSettingsProvider",
  migrationPath: 'Use Provider with kind="user-settings-provider"'
}, Zd = {
  kind: "theme-palette-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "ThemeProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for ThemeProvider",
  migrationPath: 'Use Provider with kind="theme-palette-provider"'
}, Wd = {
  kind: "achievement-socket-listener-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "AchievementSocketListener",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for AchievementSocketListener",
  migrationPath: 'Use Provider with kind="achievement-socket-listener"'
}, Vd = {
  kind: "primary-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "PrimaryButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for PrimaryButton component",
  migrationPath: 'Use Button with kind="primary" or Button.primary()'
}, Gd = {
  kind: "secondary-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "SecondaryButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for SecondaryButton component",
  migrationPath: 'Use Button with kind="secondary" or Button.secondary()'
}, qd = {
  kind: "close-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "CloseButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for CloseButton component",
  migrationPath: 'Use Button with kind="close" or Button.close()'
}, Kd = {
  kind: "icon-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "IconButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for IconButton component",
  migrationPath: 'Use Button with kind="icon" or Button.icon()'
}, Yd = {
  kind: "browse-header-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "BrowseHeader",
  Component: "Header",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for BrowseHeader component",
  migrationPath: 'Use Header with kind="browse-tabbed" or Header.browseWithTabs()'
}, Jd = {
  kind: "modal-header-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "ModalHeader",
  Component: "Header",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for ModalHeader component",
  migrationPath: 'Use Header with kind="modal" or Header.modal()'
}, Xd = {
  kind: "vs-grid-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "VSGrid",
  Component: "Grid",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy VSGrid component - wrapper around Grid",
  migrationPath: 'Use Grid with kind="vs-grid" or Grid.vsGrid()'
}, Qd = {
  kind: "startup-page-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "StartupPage",
  Component: "Page",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper using the page system",
  migrationPath: 'Use Page with kind="startup" or Page.startup()'
}, eu = {
  kind: "customization-category-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "CustomizationCategory",
  Component: "Settings",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Backward compatibility wrapper for CustomizationCategory",
  migrationPath: 'Use Settings with kind="customization-category" or Settings'
}, tu = {
  kind: "settings-panel-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "SettingsPanel",
  Component: "Settings",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Backward compatibility wrapper for SettingsPanel",
  migrationPath: 'Use Settings with kind="settings-panel" or Settings'
}, iu = {
  kind: "theme-selector-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "ThemeSelector",
  Component: "Theme",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper using the theme system",
  migrationPath: 'Use Theme with kind="selector" or Theme.selector()'
}, nu = {
  kind: "friends-sidebar-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "FriendsSidebar",
  Component: "Sidebar",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy FriendsSidebar - Backward compatibility wrapper",
  migrationPath: 'Use Sidebar with kind="friends" or Sidebar.friends()'
}, au = {
  kind: "session-debugger-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "SessionDebugger",
  Component: "Admin",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Backward Compatibility Wrapper for SessionDebugger",
  migrationPath: 'Use Admin with kind="session-debugger" or Admin.sessionDebugger()'
}, ou = {
  kind: "dark-mode-toggle-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "DarkModeToggle",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy component wrapper for dark mode toggle functionality",
  migrationPath: 'Use Button with kind="dark-mode-toggle" or Button.darkModeToggle()'
}, ru = {
  kind: "legacy-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Generic legacy component wrapper",
  migrationPath: "Use the corresponding component"
}, su = {
  kind: "simple-wrapper",
  variant: "simplified-interface",
  layout: "simplified",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !1,
  simplifyProps: !0,
  preserveEvents: !0,
  description: "Simple wrapper with reduced API surface",
  migrationPath: "Use component for advanced features"
}, lu = {
  kind: "enhanced-wrapper",
  variant: "enhanced-functionality",
  layout: "enhanced",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !0,
  addEnhancements: !0,
  preserveEvents: !0,
  description: "Enhanced wrapper with additional functionality",
  migrationPath: "Use component directly for full control"
}, Nn = {
  // Generic Wrappers
  component: vd,
  provider: wd,
  legacy: kd,
  // Layout Wrappers
  "flex-container": Sd,
  "grid-container": Cd,
  "center-container": jd,
  "stack-container": zd,
  // Component Wrappers
  "button-wrapper": Td,
  "header-wrapper": Pd,
  "modal-wrapper": Nd,
  "grid-wrapper": Ed,
  "page-wrapper": Id,
  "graph-wrapper": Ld,
  "sidebar-wrapper": Ad,
  "settings-wrapper": Md,
  "theme-wrapper": Od,
  "admin-wrapper": Rd,
  "card-wrapper": Dd,
  "banner-wrapper": Bd,
  "chat-wrapper": $d,
  "form-wrapper": Fd,
  // Provider Wrappers
  "socket-provider-wrapper": Hd,
  "user-settings-provider-wrapper": Ud,
  "theme-palette-provider-wrapper": Zd,
  "achievement-socket-listener-wrapper": Wd,
  // Legacy Component Wrappers
  "primary-button-wrapper": Vd,
  "secondary-button-wrapper": Gd,
  "close-button-wrapper": qd,
  "icon-button-wrapper": Kd,
  "browse-header-wrapper": Yd,
  "modal-header-wrapper": Jd,
  "vs-grid-wrapper": Xd,
  "startup-page-wrapper": Qd,
  "customization-category-wrapper": eu,
  "settings-panel-wrapper": tu,
  "theme-selector-wrapper": iu,
  "friends-sidebar-wrapper": nu,
  "session-debugger-wrapper": au,
  "dark-mode-toggle-wrapper": ou,
  // Generic Wrappers
  "legacy-wrapper": ru,
  "simple-wrapper": su,
  "enhanced-wrapper": lu
};
function cu(t) {
  return Nn[t];
}
function B9(t) {
  return t in Nn;
}
function $9(t) {
  return Object.values(Nn).filter(
    (n) => n.variant === t
  );
}
function F9() {
  return Object.values(Nn).filter(
    (t) => t.deprecationWarning
  );
}
function H9(t, n = {}) {
  const a = Nn[t];
  return {
    ...a,
    ...n,
    // Merge className if both exist
    className: n.className ? `${a.className || ""} ${n.className}`.trim() : a.className
  };
}
const U9 = {
  COMPONENT: [
    "button-wrapper",
    "header-wrapper",
    "modal-wrapper",
    "grid-wrapper",
    "page-wrapper",
    "graph-wrapper",
    "sidebar-wrapper",
    "settings-wrapper",
    "theme-wrapper",
    "admin-wrapper",
    "card-wrapper",
    "banner-wrapper",
    "chat-wrapper",
    "form-wrapper"
  ],
  PROVIDER: [
    "socket-provider-wrapper",
    "user-settings-provider-wrapper",
    "theme-palette-provider-wrapper",
    "achievement-socket-listener-wrapper"
  ],
  LEGACY: [
    "primary-button-wrapper",
    "secondary-button-wrapper",
    "close-button-wrapper",
    "icon-button-wrapper",
    "browse-header-wrapper",
    "modal-header-wrapper",
    "vs-grid-wrapper",
    "startup-page-wrapper",
    "customization-category-wrapper",
    "settings-panel-wrapper",
    "theme-selector-wrapper",
    "friends-sidebar-wrapper",
    "session-debugger-wrapper",
    "dark-mode-toggle-wrapper"
  ],
  GENERIC: [
    "legacy-wrapper",
    "simple-wrapper",
    "enhanced-wrapper"
  ]
}, Z9 = {
  BUTTON: "button-wrapper",
  HEADER: "header-wrapper",
  MODAL: "modal-wrapper",
  GRID: "grid-wrapper",
  PAGE: "page-wrapper",
  SIDEBAR: "sidebar-wrapper",
  SETTINGS: "settings-wrapper",
  LEGACY: "legacy-wrapper",
  COMPATIBILITY: "backward-compatibility-wrapper"
}, _u = "_Wrapper_1bwyt_118", du = "_migrationHelper_1bwyt_271", uu = "_migrationButton_1bwyt_285", wn = {
  Wrapper: _u,
  "wrapper--elevated": "_wrapper--elevated_1bwyt_161",
  "wrapper--simplified-interface": "_wrapper--simplified-interface_1bwyt_166",
  "wrapper--enhanced-functionality": "_wrapper--enhanced-functionality_1bwyt_170",
  "wrapper--legacy-support": "_wrapper--legacy-support_1bwyt_182",
  "wrapper--provider-wrapper": "_wrapper--provider-wrapper_1bwyt_202",
  "wrapper--component-wrapper": "_wrapper--component-wrapper_1bwyt_207",
  "wrapper--layout-container": "_wrapper--layout-container_1bwyt_219",
  "wrapper--passthrough": "_wrapper--passthrough_1bwyt_250",
  "wrapper--enhanced": "_wrapper--enhanced_1bwyt_170",
  "wrapper--simplified": "_wrapper--simplified_1bwyt_166",
  "wrapper--decorated": "_wrapper--decorated_1bwyt_262",
  migrationHelper: du,
  migrationButton: uu,
  "legacy-warning": "_legacy-warning_1bwyt_1",
  "loading-shimmer": "_loading-shimmer_1bwyt_1"
};
function mu(t, n, a, r) {
  const c = t.variant === "layout-container", d = t.Component === "Button", u = t.Component === "Form", h = hu(
    t,
    n,
    c
  ), p = c ? {
    ...h.containerStyles.otherProps,
    style: h.containerStyles.style,
    className: r
  } : {
    ...n,
    className: r,
    "data--kind": h.mappedKind
  };
  return d ? /* @__PURE__ */ l.jsx(Ce, { ...p, children: a }) : u ? Wr("form", p, a) : Wr(
    "div",
    p,
    a
  );
}
function hu(t, n, a) {
  const r = bu(t.kind), c = a ? fu(t.kind) : pu(t.Component), d = a ? gu(c, n) : { style: {}, otherProps: {} };
  return {
    mappedKind: r,
    wrapperType: c,
    containerStyles: d
  };
}
function pu(t) {
  return {
    Button: "button",
    Header: "header",
    Modal: "modal",
    Grid: "grid",
    Page: "page",
    Graph: "graph",
    Sidebar: "sidebar",
    Settings: "settings",
    Theme: "theme",
    Admin: "admin",
    Card: "card",
    Banner: "banner",
    Chat: "chat",
    Form: "form",
    Provider: "provider"
  }[t] || "generic";
}
function fu(t) {
  return {
    "flex-container": "flex-container",
    "grid-container": "grid-container",
    "center-container": "center-container",
    "stack-container": "stack-container"
  }[t] || "generic-container";
}
function gu(t, n) {
  const { style: a, ...r } = n, c = (g) => {
    const y = {}, v = {};
    return Object.entries(r).forEach(([z, k]) => {
      z in g ? y[z] = k !== void 0 ? k : g[z] : v[z] = k;
    }), Object.entries(g).forEach(
      ([z, k]) => {
        z in y || (y[z] = k);
      }
    ), { props: y, restProps: v };
  }, d = t === "flex-container", u = t === "grid-container", h = t === "center-container";
  if (d || t === "stack-container") {
    const g = d ? {
      direction: "row",
      justify: "center",
      align: "center",
      wrap: "nowrap",
      gap: "1rem"
    } : {
      direction: "column",
      gap: "1rem",
      align: "stretch",
      justify: "flex-start"
    }, { props: y, restProps: v } = c(g);
    return {
      style: {
        display: "flex",
        flexDirection: y.direction,
        justifyContent: y.justify,
        alignItems: y.align,
        ...d && {
          flexWrap: y.wrap
        },
        gap: y.gap,
        ...a
      },
      otherProps: v
    };
  }
  if (u) {
    const g = {
      columns: "repeat(auto-fit, minmax(250px, 1fr))",
      rows: "auto",
      gap: "1rem",
      justifyItems: "center",
      alignItems: "center"
    }, { props: y, restProps: v } = c(g);
    return {
      style: {
        display: "grid",
        gridTemplateColumns: y.columns,
        gridTemplateRows: y.rows,
        gap: y.gap,
        justifyItems: y.justifyItems,
        alignItems: y.alignItems,
        ...a
      },
      otherProps: v
    };
  }
  if (h) {
    const { method: g = "flex", ...y } = r;
    return {
      style: g === "grid" ? {
        display: "grid",
        placeItems: "center",
        minHeight: "100%",
        ...a
      } : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        ...a
      },
      otherProps: y
    };
  }
  return {
    style: a || {},
    otherProps: r
  };
}
function bu(t) {
  const n = {
    button: {
      patterns: ["button"],
      map: {
        "primary-button-wrapper": "primary",
        "secondary-button-wrapper": "secondary",
        "close-button-wrapper": "close",
        "icon-button-wrapper": "icon",
        "dark-mode-toggle-wrapper": "dark-mode-toggle"
      },
      default: "default"
    },
    header: {
      patterns: ["header"],
      map: {
        "browse-header-wrapper": "browse-tabbed",
        "modal-header-wrapper": "modal"
      },
      default: "simple"
    },
    grid: {
      patterns: ["grid"],
      map: {
        "vs-grid-wrapper": "vs-grid"
      },
      default: "basic"
    },
    page: {
      patterns: ["page"],
      map: {
        "startup-page-wrapper": "startup"
      },
      default: "basic"
    },
    sidebar: {
      patterns: ["sidebar"],
      map: {
        "friends-sidebar-wrapper": "friends"
      },
      default: "basic"
    },
    settings: {
      patterns: ["settings", "customization"],
      map: {
        "customization-category-wrapper": "customization-category",
        "settings-panel-wrapper": "settings-panel"
      },
      default: "settings-panel"
    },
    theme: {
      patterns: ["theme"],
      map: {
        "theme-selector-wrapper": "selector"
      },
      default: "basic"
    },
    admin: {
      patterns: ["admin", "session"],
      map: {
        "session-debugger-wrapper": "session-debugger"
      },
      default: "basic"
    },
    provider: {
      patterns: ["provider", "listener"],
      map: {
        "socket-provider-wrapper": "socket-provider",
        "user-settings-provider-wrapper": "user-settings-provider",
        "theme-palette-provider-wrapper": "theme-palette-provider",
        "achievement-socket-listener-wrapper": "achievement-socket-listener"
      },
      default: "generic"
    }
  }, a = {
    "card-wrapper": "basic",
    "banner-wrapper": "notification",
    "chat-wrapper": "basic",
    "form-wrapper": "basic",
    "graph-wrapper": "bar",
    "modal-wrapper": "default"
  };
  if (a[t])
    return a[t];
  for (const r of Object.values(n))
    if (r.patterns.some(
      (d) => t.includes(d)
    ))
      return r.map[t] || r.default;
  return "default";
}
const yu = Le(
  ({
    kind: t,
    children: n,
    className: a,
    suppressDeprecationWarning: r = !1,
    onMigrationHelp: c,
    configuration: d,
    ...u
  }, h) => {
    const p = cu(t), g = d ? { ...p, ...d } : p;
    if (!g)
      return console.warn(
        `Wrapper: Unknown wrapper kind "${t}"`
      ), /* @__PURE__ */ l.jsx("div", { className: a, children: n });
    const y = _i(() => {
      const {
        suppressDeprecationWarning: k,
        onMigrationHelp: N,
        configuration: P,
        ...$
      } = u;
      return {
        ...$,
        ...(g == null ? void 0 : g.forwardRef) && { ref: h }
      };
    }, [u, g, h]), v = _i(
      () => [
        wn.Wrapper,
        wn[`wrapper--${(g == null ? void 0 : g.variant) || "default"}`],
        wn[`wrapper--${(g == null ? void 0 : g.layout) || "default"}`],
        g == null ? void 0 : g.wrapperClassName,
        a
      ].filter(Boolean).join(" "),
      [g, a]
    );
    Te(() => {
      (g == null ? void 0 : g.deprecationWarning) && !r && typeof window < "u" && console.warn(
        `🚨 Deprecation Warning: ${g.targetComponent} is deprecated.
📖 Migration Path: ${g.migrationPath}
🔗 Component: ${g.Component}
📝 Description: ${g.description}`
      );
    }, [g, r]);
    const z = () => g != null && g.deprecationWarning && typeof window < "u" ? /* @__PURE__ */ l.jsx("div", { className: wn.migrationHelper, children: /* @__PURE__ */ l.jsx(
      Ce,
      {
        kind: "secondary",
        onClick: c,
        className: wn.migrationButton,
        title: `Migration help for ${g == null ? void 0 : g.targetComponent}`,
        children: "📖 Migration Guide"
      }
    ) }) : null;
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      z(),
      mu(
        g,
        y,
        n,
        v
      )
    ] });
  }
), f = di(yu);
function Ct(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var xu = typeof Symbol == "function" && Symbol.observable || "@@observable", Yr = xu, Qa = () => Math.random().toString(36).substring(7).split("").join("."), vu = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Qa()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Qa()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Qa()}`
}, Ui = vu;
function En(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(t) === n || Object.getPrototypeOf(t) === null;
}
function wu(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  const n = typeof t;
  switch (n) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return n;
  }
  if (Array.isArray(t))
    return "array";
  if (Cu(t))
    return "date";
  if (Su(t))
    return "error";
  const a = ku(t);
  switch (a) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return a;
  }
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ku(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Su(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function Cu(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function zi(t) {
  let n = typeof t;
  return process.env.NODE_ENV !== "production" && (n = wu(t)), n;
}
function Ms(t, n, a) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ct(2) : `Expected the root reducer to be a function. Instead, received: '${zi(t)}'`);
  if (typeof n == "function" && typeof a == "function" || typeof a == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ct(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof n == "function" && typeof a > "u" && (a = n, n = void 0), typeof a < "u") {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(1) : `Expected the enhancer to be a function. Instead, received: '${zi(a)}'`);
    return a(Ms)(t, n);
  }
  let r = t, c = n, d = /* @__PURE__ */ new Map(), u = d, h = 0, p = !1;
  function g() {
    u === d && (u = /* @__PURE__ */ new Map(), d.forEach(($, F) => {
      u.set(F, $);
    }));
  }
  function y() {
    if (p)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return c;
  }
  function v($) {
    if (typeof $ != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(4) : `Expected the listener to be a function. Instead, received: '${zi($)}'`);
    if (p)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let F = !0;
    g();
    const H = h++;
    return u.set(H, $), function() {
      if (F) {
        if (p)
          throw new Error(process.env.NODE_ENV === "production" ? Ct(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        F = !1, g(), u.delete(H), d = null;
      }
    };
  }
  function z($) {
    if (!En($))
      throw new Error(process.env.NODE_ENV === "production" ? Ct(7) : `Actions must be plain objects. Instead, the actual type was: '${zi($)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof $.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof $.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(17) : `Action "type" property must be a string. Instead, the actual type was: '${zi($.type)}'. Value was: '${$.type}' (stringified)`);
    if (p)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(9) : "Reducers may not dispatch actions.");
    try {
      p = !0, c = r(c, $);
    } finally {
      p = !1;
    }
    return (d = u).forEach((H) => {
      H();
    }), $;
  }
  function k($) {
    if (typeof $ != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(10) : `Expected the nextReducer to be a function. Instead, received: '${zi($)}`);
    r = $, z({
      type: Ui.REPLACE
    });
  }
  function N() {
    const $ = v;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(F) {
        if (typeof F != "object" || F === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ct(11) : `Expected the observer to be an object. Instead, received: '${zi(F)}'`);
        function H() {
          const R = F;
          R.next && R.next(y());
        }
        return H(), {
          unsubscribe: $(H)
        };
      },
      [Yr]() {
        return this;
      }
    };
  }
  return z({
    type: Ui.INIT
  }), {
    dispatch: z,
    subscribe: v,
    getState: y,
    replaceReducer: k,
    [Yr]: N
  };
}
function Jr(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function ju(t, n, a, r) {
  const c = Object.keys(n), d = a && a.type === Ui.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (c.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!En(t))
    return `The ${d} has unexpected type of "${zi(t)}". Expected argument to be an object with the following keys: "${c.join('", "')}"`;
  const u = Object.keys(t).filter((h) => !n.hasOwnProperty(h) && !r[h]);
  if (u.forEach((h) => {
    r[h] = !0;
  }), !(a && a.type === Ui.REPLACE) && u.length > 0)
    return `Unexpected ${u.length > 1 ? "keys" : "key"} "${u.join('", "')}" found in ${d}. Expected to find one of the known reducer keys instead: "${c.join('", "')}". Unexpected keys will be ignored.`;
}
function zu(t) {
  Object.keys(t).forEach((n) => {
    const a = t[n];
    if (typeof a(void 0, {
      type: Ui.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(12) : `The slice reducer for key "${n}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof a(void 0, {
      type: Ui.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(13) : `The slice reducer for key "${n}" returned undefined when probed with a random type. Don't try to handle '${Ui.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Tu(t) {
  const n = Object.keys(t), a = {};
  for (let u = 0; u < n.length; u++) {
    const h = n[u];
    process.env.NODE_ENV !== "production" && typeof t[h] > "u" && Jr(`No reducer provided for key "${h}"`), typeof t[h] == "function" && (a[h] = t[h]);
  }
  const r = Object.keys(a);
  let c;
  process.env.NODE_ENV !== "production" && (c = {});
  let d;
  try {
    zu(a);
  } catch (u) {
    d = u;
  }
  return function(h = {}, p) {
    if (d)
      throw d;
    if (process.env.NODE_ENV !== "production") {
      const v = ju(h, a, p, c);
      v && Jr(v);
    }
    let g = !1;
    const y = {};
    for (let v = 0; v < r.length; v++) {
      const z = r[v], k = a[z], N = h[z], P = k(N, p);
      if (typeof P > "u") {
        const $ = p && p.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ct(14) : `When called with an action of type ${$ ? `"${String($)}"` : "(unknown type)"}, the slice reducer for key "${z}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      y[z] = P, g = g || P !== N;
    }
    return g = g || r.length !== Object.keys(h).length, g ? y : h;
  };
}
function la(...t) {
  return t.length === 0 ? (n) => n : t.length === 1 ? t[0] : t.reduce((n, a) => (...r) => n(a(...r)));
}
function Pu(...t) {
  return (n) => (a, r) => {
    const c = n(a, r);
    let d = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Ct(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const u = {
      getState: c.getState,
      dispatch: (p, ...g) => d(p, ...g)
    }, h = t.map((p) => p(u));
    return d = la(...h)(c.dispatch), {
      ...c,
      dispatch: d
    };
  };
}
function Os(t) {
  return En(t) && "type" in t && typeof t.type == "string";
}
var Rs = Symbol.for("immer-nothing"), Xr = Symbol.for("immer-draftable"), Ut = Symbol.for("immer-state"), Nu = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Ot(t, ...n) {
  if (process.env.NODE_ENV !== "production") {
    const a = Nu[t], r = typeof a == "function" ? a.apply(null, n) : a;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var on = Object.getPrototypeOf;
function Zi(t) {
  return !!t && !!t[Ut];
}
function xi(t) {
  var n;
  return t ? Ds(t) || Array.isArray(t) || !!t[Xr] || !!((n = t.constructor) != null && n[Xr]) || fa(t) || ga(t) : !1;
}
var Eu = Object.prototype.constructor.toString();
function Ds(t) {
  if (!t || typeof t != "object")
    return !1;
  const n = on(t);
  if (n === null)
    return !0;
  const a = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return a === Object ? !0 : typeof a == "function" && Function.toString.call(a) === Eu;
}
function ca(t, n) {
  pa(t) === 0 ? Reflect.ownKeys(t).forEach((a) => {
    n(a, t[a], t);
  }) : t.forEach((a, r) => n(r, a, t));
}
function pa(t) {
  const n = t[Ut];
  return n ? n.type_ : Array.isArray(t) ? 1 : fa(t) ? 2 : ga(t) ? 3 : 0;
}
function No(t, n) {
  return pa(t) === 2 ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
}
function Bs(t, n, a) {
  const r = pa(t);
  r === 2 ? t.set(n, a) : r === 3 ? t.add(a) : t[n] = a;
}
function Iu(t, n) {
  return t === n ? t !== 0 || 1 / t === 1 / n : t !== t && n !== n;
}
function fa(t) {
  return t instanceof Map;
}
function ga(t) {
  return t instanceof Set;
}
function Fi(t) {
  return t.copy_ || t.base_;
}
function Eo(t, n) {
  if (fa(t))
    return new Map(t);
  if (ga(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const a = Ds(t);
  if (n === !0 || n === "class_only" && !a) {
    const r = Object.getOwnPropertyDescriptors(t);
    delete r[Ut];
    let c = Reflect.ownKeys(r);
    for (let d = 0; d < c.length; d++) {
      const u = c[d], h = r[u];
      h.writable === !1 && (h.writable = !0, h.configurable = !0), (h.get || h.set) && (r[u] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: h.enumerable,
        value: t[u]
      });
    }
    return Object.create(on(t), r);
  } else {
    const r = on(t);
    if (r !== null && a)
      return { ...t };
    const c = Object.create(r);
    return Object.assign(c, t);
  }
}
function Uo(t, n = !1) {
  return ba(t) || Zi(t) || !xi(t) || (pa(t) > 1 && (t.set = t.add = t.clear = t.delete = Lu), Object.freeze(t), n && Object.entries(t).forEach(([a, r]) => Uo(r, !0))), t;
}
function Lu() {
  Ot(2);
}
function ba(t) {
  return Object.isFrozen(t);
}
var Au = {};
function Wi(t) {
  const n = Au[t];
  return n || Ot(0, t), n;
}
var zn;
function $s() {
  return zn;
}
function Mu(t, n) {
  return {
    drafts_: [],
    parent_: t,
    immer_: n,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Qr(t, n) {
  n && (Wi("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = n);
}
function Io(t) {
  Lo(t), t.drafts_.forEach(Ou), t.drafts_ = null;
}
function Lo(t) {
  t === zn && (zn = t.parent_);
}
function es(t) {
  return zn = Mu(zn, t);
}
function Ou(t) {
  const n = t[Ut];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function ts(t, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const a = n.drafts_[0];
  return t !== void 0 && t !== a ? (a[Ut].modified_ && (Io(n), Ot(4)), xi(t) && (t = _a(n, t), n.parent_ || da(n, t)), n.patches_ && Wi("Patches").generateReplacementPatches_(
    a[Ut].base_,
    t,
    n.patches_,
    n.inversePatches_
  )) : t = _a(n, a, []), Io(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), t !== Rs ? t : void 0;
}
function _a(t, n, a) {
  if (ba(n))
    return n;
  const r = n[Ut];
  if (!r)
    return ca(
      n,
      (c, d) => is(t, r, n, c, d, a)
    ), n;
  if (r.scope_ !== t)
    return n;
  if (!r.modified_)
    return da(t, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const c = r.copy_;
    let d = c, u = !1;
    r.type_ === 3 && (d = new Set(c), c.clear(), u = !0), ca(
      d,
      (h, p) => is(t, r, c, h, p, a, u)
    ), da(t, c, !1), a && t.patches_ && Wi("Patches").generatePatches_(
      r,
      a,
      t.patches_,
      t.inversePatches_
    );
  }
  return r.copy_;
}
function is(t, n, a, r, c, d, u) {
  if (process.env.NODE_ENV !== "production" && c === a && Ot(5), Zi(c)) {
    const h = d && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !No(n.assigned_, r) ? d.concat(r) : void 0, p = _a(t, c, h);
    if (Bs(a, r, p), Zi(p))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else u && a.add(c);
  if (xi(c) && !ba(c)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    _a(t, c), (!n || !n.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(a, r) && da(t, c);
  }
}
function da(t, n, a = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Uo(n, a);
}
function Ru(t, n) {
  const a = Array.isArray(t), r = {
    type_: a ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : $s(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: n,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let c = r, d = Zo;
  a && (c = [r], d = Tn);
  const { revoke: u, proxy: h } = Proxy.revocable(c, d);
  return r.draft_ = h, r.revoke_ = u, h;
}
var Zo = {
  get(t, n) {
    if (n === Ut)
      return t;
    const a = Fi(t);
    if (!No(a, n))
      return Du(t, a, n);
    const r = a[n];
    return t.finalized_ || !xi(r) ? r : r === eo(t.base_, n) ? (to(t), t.copy_[n] = Mo(r, t)) : r;
  },
  has(t, n) {
    return n in Fi(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Fi(t));
  },
  set(t, n, a) {
    const r = Fs(Fi(t), n);
    if (r != null && r.set)
      return r.set.call(t.draft_, a), !0;
    if (!t.modified_) {
      const c = eo(Fi(t), n), d = c == null ? void 0 : c[Ut];
      if (d && d.base_ === a)
        return t.copy_[n] = a, t.assigned_[n] = !1, !0;
      if (Iu(a, c) && (a !== void 0 || No(t.base_, n)))
        return !0;
      to(t), Ao(t);
    }
    return t.copy_[n] === a && // special case: handle new props with value 'undefined'
    (a !== void 0 || n in t.copy_) || // special case: NaN
    Number.isNaN(a) && Number.isNaN(t.copy_[n]) || (t.copy_[n] = a, t.assigned_[n] = !0), !0;
  },
  deleteProperty(t, n) {
    return eo(t.base_, n) !== void 0 || n in t.base_ ? (t.assigned_[n] = !1, to(t), Ao(t)) : delete t.assigned_[n], t.copy_ && delete t.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, n) {
    const a = Fi(t), r = Reflect.getOwnPropertyDescriptor(a, n);
    return r && {
      writable: !0,
      configurable: t.type_ !== 1 || n !== "length",
      enumerable: r.enumerable,
      value: a[n]
    };
  },
  defineProperty() {
    Ot(11);
  },
  getPrototypeOf(t) {
    return on(t.base_);
  },
  setPrototypeOf() {
    Ot(12);
  }
}, Tn = {};
ca(Zo, (t, n) => {
  Tn[t] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
Tn.deleteProperty = function(t, n) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(n)) && Ot(13), Tn.set.call(this, t, n, void 0);
};
Tn.set = function(t, n, a) {
  return process.env.NODE_ENV !== "production" && n !== "length" && isNaN(parseInt(n)) && Ot(14), Zo.set.call(this, t[0], n, a, t[0]);
};
function eo(t, n) {
  const a = t[Ut];
  return (a ? Fi(a) : t)[n];
}
function Du(t, n, a) {
  var c;
  const r = Fs(n, a);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (c = r.get) == null ? void 0 : c.call(t.draft_)
  ) : void 0;
}
function Fs(t, n) {
  if (!(n in t))
    return;
  let a = on(t);
  for (; a; ) {
    const r = Object.getOwnPropertyDescriptor(a, n);
    if (r)
      return r;
    a = on(a);
  }
}
function Ao(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Ao(t.parent_));
}
function to(t) {
  t.copy_ || (t.copy_ = Eo(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var Bu = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, a, r) => {
      if (typeof n == "function" && typeof a != "function") {
        const d = a;
        a = n;
        const u = this;
        return function(p = d, ...g) {
          return u.produce(p, (y) => a.call(this, y, ...g));
        };
      }
      typeof a != "function" && Ot(6), r !== void 0 && typeof r != "function" && Ot(7);
      let c;
      if (xi(n)) {
        const d = es(this), u = Mo(n, void 0);
        let h = !0;
        try {
          c = a(u), h = !1;
        } finally {
          h ? Io(d) : Lo(d);
        }
        return Qr(d, r), ts(c, d);
      } else if (!n || typeof n != "object") {
        if (c = a(n), c === void 0 && (c = n), c === Rs && (c = void 0), this.autoFreeze_ && Uo(c, !0), r) {
          const d = [], u = [];
          Wi("Patches").generateReplacementPatches_(n, c, d, u), r(d, u);
        }
        return c;
      } else
        Ot(1, n);
    }, this.produceWithPatches = (n, a) => {
      if (typeof n == "function")
        return (u, ...h) => this.produceWithPatches(u, (p) => n(p, ...h));
      let r, c;
      return [this.produce(n, a, (u, h) => {
        r = u, c = h;
      }), r, c];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    xi(t) || Ot(8), Zi(t) && (t = $u(t));
    const n = es(this), a = Mo(t, void 0);
    return a[Ut].isManual_ = !0, Lo(n), a;
  }
  finishDraft(t, n) {
    const a = t && t[Ut];
    (!a || !a.isManual_) && Ot(9);
    const { scope_: r } = a;
    return Qr(r, n), ts(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, n) {
    let a;
    for (a = n.length - 1; a >= 0; a--) {
      const c = n[a];
      if (c.path.length === 0 && c.op === "replace") {
        t = c.value;
        break;
      }
    }
    a > -1 && (n = n.slice(a + 1));
    const r = Wi("Patches").applyPatches_;
    return Zi(t) ? r(t, n) : this.produce(
      t,
      (c) => r(c, n)
    );
  }
};
function Mo(t, n) {
  const a = fa(t) ? Wi("MapSet").proxyMap_(t, n) : ga(t) ? Wi("MapSet").proxySet_(t, n) : Ru(t, n);
  return (n ? n.scope_ : $s()).drafts_.push(a), a;
}
function $u(t) {
  return Zi(t) || Ot(10, t), Hs(t);
}
function Hs(t) {
  if (!xi(t) || ba(t))
    return t;
  const n = t[Ut];
  let a;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, a = Eo(t, n.scope_.immer_.useStrictShallowCopy_);
  } else
    a = Eo(t, !0);
  return ca(a, (r, c) => {
    Bs(a, r, Hs(c));
  }), n && (n.finalized_ = !1), a;
}
var Zt = new Bu(), Us = Zt.produce;
Zt.produceWithPatches.bind(
  Zt
);
Zt.setAutoFreeze.bind(Zt);
Zt.setUseStrictShallowCopy.bind(Zt);
Zt.applyPatches.bind(Zt);
Zt.createDraft.bind(Zt);
Zt.finishDraft.bind(Zt);
function Zs(t) {
  return ({ dispatch: a, getState: r }) => (c) => (d) => typeof d == "function" ? d(a, r, t) : c(d);
}
var Fu = Zs(), Hu = Zs, Uu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? la : la.apply(null, arguments);
}, Ws = (t) => t && typeof t.match == "function";
function jn(t, n) {
  function a(...r) {
    if (n) {
      let c = n(...r);
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? Qe(0) : "prepareAction did not return an object");
      return {
        type: t,
        payload: c.payload,
        ..."meta" in c && {
          meta: c.meta
        },
        ..."error" in c && {
          error: c.error
        }
      };
    }
    return {
      type: t,
      payload: r[0]
    };
  }
  return a.toString = () => `${t}`, a.type = t, a.match = (r) => Os(r) && r.type === t, a;
}
function Zu(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Ws(t);
}
function Wu(t) {
  const n = t ? `${t}`.split("/") : [], a = n[n.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${a}())\` instead of \`dispatch(${a})\`. This is necessary even if the action has no payload.`;
}
function Vu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (a) => (r) => a(r);
  const {
    isActionCreator: n = Zu
  } = t;
  return () => (a) => (r) => (n(r) && console.warn(Wu(r.type)), a(r));
}
function Vs(t, n) {
  let a = 0;
  return {
    measureTime(r) {
      const c = Date.now();
      try {
        return r();
      } finally {
        const d = Date.now();
        a += d - c;
      }
    },
    warnIfExceeded() {
      a > t && console.warn(`${n} took ${a}ms, which is more than the warning threshold of ${t}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Gs = class Cn extends Array {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, Cn.prototype);
  }
  static get [Symbol.species]() {
    return Cn;
  }
  concat(...n) {
    return super.concat.apply(this, n);
  }
  prepend(...n) {
    return n.length === 1 && Array.isArray(n[0]) ? new Cn(...n[0].concat(this)) : new Cn(...n.concat(this));
  }
};
function ns(t) {
  return xi(t) ? Us(t, () => {
  }) : t;
}
function ta(t, n, a) {
  return t.has(n) ? t.get(n) : t.set(n, a(n)).get(n);
}
function Gu(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function qu(t, n, a) {
  const r = qs(t, n, a);
  return {
    detectMutations() {
      return Ks(t, n, r, a);
    }
  };
}
function qs(t, n = [], a, r = "", c = /* @__PURE__ */ new Set()) {
  const d = {
    value: a
  };
  if (!t(a) && !c.has(a)) {
    c.add(a), d.children = {};
    for (const u in a) {
      const h = r ? r + "." + u : u;
      n.length && n.indexOf(h) !== -1 || (d.children[u] = qs(t, n, a[u], h));
    }
  }
  return d;
}
function Ks(t, n = [], a, r, c = !1, d = "") {
  const u = a ? a.value : void 0, h = u === r;
  if (c && !h && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: d
    };
  if (t(u) || t(r))
    return {
      wasMutated: !1
    };
  const p = {};
  for (let y in a.children)
    p[y] = !0;
  for (let y in r)
    p[y] = !0;
  const g = n.length > 0;
  for (let y in p) {
    const v = d ? d + "." + y : y;
    if (g && n.some((N) => N instanceof RegExp ? N.test(v) : v === N))
      continue;
    const z = Ks(t, n, a.children[y], r[y], h, v);
    if (z.wasMutated)
      return z;
  }
  return {
    wasMutated: !1
  };
}
function Ku(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (a) => n(a);
  {
    let n = function(h, p, g, y) {
      return JSON.stringify(h, a(p, y), g);
    }, a = function(h, p) {
      let g = [], y = [];
      return p || (p = function(v, z) {
        return g[0] === z ? "[Circular ~]" : "[Circular ~." + y.slice(0, g.indexOf(z)).join(".") + "]";
      }), function(v, z) {
        if (g.length > 0) {
          var k = g.indexOf(this);
          ~k ? g.splice(k + 1) : g.push(this), ~k ? y.splice(k, 1 / 0, v) : y.push(v), ~g.indexOf(z) && (z = p.call(this, v, z));
        } else g.push(z);
        return h == null ? z : h.call(this, v, z);
      };
    }, {
      isImmutable: r = Gu,
      ignoredPaths: c,
      warnAfter: d = 32
    } = t;
    const u = qu.bind(null, r, c);
    return ({
      getState: h
    }) => {
      let p = h(), g = u(p), y;
      return (v) => (z) => {
        const k = Vs(d, "ImmutableStateInvariantMiddleware");
        k.measureTime(() => {
          if (p = h(), y = g.detectMutations(), g = u(p), y.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Qe(19) : `A state mutation was detected between dispatches, in the path '${y.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const N = v(z);
        return k.measureTime(() => {
          if (p = h(), y = g.detectMutations(), g = u(p), y.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Qe(20) : `A state mutation was detected inside a dispatch, in the path: ${y.path || ""}. Take a look at the reducer(s) handling the action ${n(z)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), k.warnIfExceeded(), N;
      };
    };
  }
}
function Ys(t) {
  const n = typeof t;
  return t == null || n === "string" || n === "boolean" || n === "number" || Array.isArray(t) || En(t);
}
function Oo(t, n = "", a = Ys, r, c = [], d) {
  let u;
  if (!a(t))
    return {
      keyPath: n || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || d != null && d.has(t)) return !1;
  const h = r != null ? r(t) : Object.entries(t), p = c.length > 0;
  for (const [g, y] of h) {
    const v = n ? n + "." + g : g;
    if (!(p && c.some((k) => k instanceof RegExp ? k.test(v) : v === k))) {
      if (!a(y))
        return {
          keyPath: v,
          value: y
        };
      if (typeof y == "object" && (u = Oo(y, v, a, r, c, d), u))
        return u;
    }
  }
  return d && Js(t) && d.add(t), !1;
}
function Js(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const n of Object.values(t))
    if (!(typeof n != "object" || n === null) && !Js(n))
      return !1;
  return !0;
}
function Yu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (a) => n(a);
  {
    const {
      isSerializable: n = Ys,
      getEntries: a,
      ignoredActions: r = [],
      ignoredActionPaths: c = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: d = [],
      warnAfter: u = 32,
      ignoreState: h = !1,
      ignoreActions: p = !1,
      disableCache: g = !1
    } = t, y = !g && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (v) => (z) => (k) => {
      if (!Os(k))
        return z(k);
      const N = z(k), P = Vs(u, "SerializableStateInvariantMiddleware");
      return !p && !(r.length && r.indexOf(k.type) !== -1) && P.measureTime(() => {
        const $ = Oo(k, "", n, a, c, y);
        if ($) {
          const {
            keyPath: F,
            value: H
          } = $;
          console.error(`A non-serializable value was detected in an action, in the path: \`${F}\`. Value:`, H, `
Take a look at the logic that dispatched this action: `, k, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), h || (P.measureTime(() => {
        const $ = v.getState(), F = Oo($, "", n, a, d, y);
        if (F) {
          const {
            keyPath: H,
            value: A
          } = F;
          console.error(`A non-serializable value was detected in the state, in the path: \`${H}\`. Value:`, A, `
Take a look at the reducer(s) handling this action type: ${k.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), P.warnIfExceeded()), N;
    };
  }
}
function ia(t) {
  return typeof t == "boolean";
}
var Ju = () => function(n) {
  const {
    thunk: a = !0,
    immutableCheck: r = !0,
    serializableCheck: c = !0,
    actionCreatorCheck: d = !0
  } = n ?? {};
  let u = new Gs();
  if (a && (ia(a) ? u.push(Fu) : u.push(Hu(a.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let h = {};
      ia(r) || (h = r), u.unshift(Ku(h));
    }
    if (c) {
      let h = {};
      ia(c) || (h = c), u.push(Yu(h));
    }
    if (d) {
      let h = {};
      ia(d) || (h = d), u.unshift(Vu(h));
    }
  }
  return u;
}, Xu = "RTK_autoBatch", as = (t) => (n) => {
  setTimeout(n, t);
}, Qu = (t = {
  type: "raf"
}) => (n) => (...a) => {
  const r = n(...a);
  let c = !0, d = !1, u = !1;
  const h = /* @__PURE__ */ new Set(), p = t.type === "tick" ? queueMicrotask : t.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : as(10)
  ) : t.type === "callback" ? t.queueNotification : as(t.timeout), g = () => {
    u = !1, d && (d = !1, h.forEach((y) => y()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(y) {
      const v = () => c && y(), z = r.subscribe(v);
      return h.add(y), () => {
        z(), h.delete(y);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(y) {
      var v;
      try {
        return c = !((v = y == null ? void 0 : y.meta) != null && v[Xu]), d = !c, d && (u || (u = !0, p(g))), r.dispatch(y);
      } finally {
        c = !0;
      }
    }
  });
}, em = (t) => function(a) {
  const {
    autoBatch: r = !0
  } = a ?? {};
  let c = new Gs(t);
  return r && c.push(Qu(typeof r == "object" ? r : void 0)), c;
};
function Xs(t) {
  const n = Ju(), {
    reducer: a = void 0,
    middleware: r,
    devTools: c = !0,
    duplicateMiddlewareCheck: d = !0,
    preloadedState: u = void 0,
    enhancers: h = void 0
  } = t || {};
  let p;
  if (typeof a == "function")
    p = a;
  else if (En(a))
    p = Tu(a);
  else
    throw new Error(process.env.NODE_ENV === "production" ? Qe(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(2) : "`middleware` field must be a callback");
  let g;
  if (typeof r == "function") {
    if (g = r(n), process.env.NODE_ENV !== "production" && !Array.isArray(g))
      throw new Error(process.env.NODE_ENV === "production" ? Qe(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    g = n();
  if (process.env.NODE_ENV !== "production" && g.some((P) => typeof P != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Qe(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && d) {
    let P = /* @__PURE__ */ new Set();
    g.forEach(($) => {
      if (P.has($))
        throw new Error(process.env.NODE_ENV === "production" ? Qe(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      P.add($);
    });
  }
  let y = la;
  c && (y = Uu({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof c == "object" && c
  }));
  const v = Pu(...g), z = em(v);
  if (process.env.NODE_ENV !== "production" && h && typeof h != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(5) : "`enhancers` field must be a callback");
  let k = typeof h == "function" ? h(z) : z();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(k))
    throw new Error(process.env.NODE_ENV === "production" ? Qe(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && k.some((P) => typeof P != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Qe(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && g.length && !k.includes(v) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const N = y(...k);
  return Ms(p, u, N);
}
function Qs(t) {
  const n = {}, a = [];
  let r;
  const c = {
    addCase(d, u) {
      if (process.env.NODE_ENV !== "production") {
        if (a.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const h = typeof d == "string" ? d : d.type;
      if (!h)
        throw new Error(process.env.NODE_ENV === "production" ? Qe(28) : "`builder.addCase` cannot be called with an empty action type");
      if (h in n)
        throw new Error(process.env.NODE_ENV === "production" ? Qe(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${h}'`);
      return n[h] = u, c;
    },
    addMatcher(d, u) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? Qe(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return a.push({
        matcher: d,
        reducer: u
      }), c;
    },
    addDefaultCase(d) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? Qe(31) : "`builder.addDefaultCase` can only be called once");
      return r = d, c;
    }
  };
  return t(c), [n, a, r];
}
function tm(t) {
  return typeof t == "function";
}
function im(t, n) {
  if (process.env.NODE_ENV !== "production" && typeof n == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [a, r, c] = Qs(n), d;
  if (tm(t))
    d = () => ns(t());
  else {
    const h = ns(t);
    d = () => h;
  }
  function u(h = d(), p) {
    let g = [a[p.type], ...r.filter(({
      matcher: y
    }) => y(p)).map(({
      reducer: y
    }) => y)];
    return g.filter((y) => !!y).length === 0 && (g = [c]), g.reduce((y, v) => {
      if (v)
        if (Zi(y)) {
          const k = v(y, p);
          return k === void 0 ? y : k;
        } else {
          if (xi(y))
            return Us(y, (z) => v(z, p));
          {
            const z = v(y, p);
            if (z === void 0) {
              if (y === null)
                return y;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return z;
          }
        }
      return y;
    }, h);
  }
  return u.getInitialState = d, u;
}
var nm = (t, n) => Ws(t) ? t.match(n) : t(n);
function am(...t) {
  return (n) => t.some((a) => nm(a, n));
}
var om = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", rm = (t = 21) => {
  let n = "", a = t;
  for (; a--; )
    n += om[Math.random() * 64 | 0];
  return n;
}, sm = ["name", "message", "stack", "code"], io = class {
  constructor(t, n) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ja(this, "_type");
    this.payload = t, this.meta = n;
  }
}, os = class {
  constructor(t, n) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ja(this, "_type");
    this.payload = t, this.meta = n;
  }
}, lm = (t) => {
  if (typeof t == "object" && t !== null) {
    const n = {};
    for (const a of sm)
      typeof t[a] == "string" && (n[a] = t[a]);
    return n;
  }
  return {
    message: String(t)
  };
}, rs = "External signal was aborted", xt = /* @__PURE__ */ (() => {
  function t(n, a, r) {
    const c = jn(n + "/fulfilled", (p, g, y, v) => ({
      payload: p,
      meta: {
        ...v || {},
        arg: y,
        requestId: g,
        requestStatus: "fulfilled"
      }
    })), d = jn(n + "/pending", (p, g, y) => ({
      payload: void 0,
      meta: {
        ...y || {},
        arg: g,
        requestId: p,
        requestStatus: "pending"
      }
    })), u = jn(n + "/rejected", (p, g, y, v, z) => ({
      payload: v,
      error: (r && r.serializeError || lm)(p || "Rejected"),
      meta: {
        ...z || {},
        arg: y,
        requestId: g,
        rejectedWithValue: !!v,
        requestStatus: "rejected",
        aborted: (p == null ? void 0 : p.name) === "AbortError",
        condition: (p == null ? void 0 : p.name) === "ConditionError"
      }
    }));
    function h(p, {
      signal: g
    } = {}) {
      return (y, v, z) => {
        const k = r != null && r.idGenerator ? r.idGenerator(p) : rm(), N = new AbortController();
        let P, $;
        function F(A) {
          $ = A, N.abort();
        }
        g && (g.aborted ? F(rs) : g.addEventListener("abort", () => F(rs), {
          once: !0
        }));
        const H = async function() {
          var T, E;
          let A;
          try {
            let J = (T = r == null ? void 0 : r.condition) == null ? void 0 : T.call(r, p, {
              getState: v,
              extra: z
            });
            if (_m(J) && (J = await J), J === !1 || N.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const G = new Promise((B, M) => {
              P = () => {
                M({
                  name: "AbortError",
                  message: $ || "Aborted"
                });
              }, N.signal.addEventListener("abort", P);
            });
            y(d(k, p, (E = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : E.call(r, {
              requestId: k,
              arg: p
            }, {
              getState: v,
              extra: z
            }))), A = await Promise.race([G, Promise.resolve(a(p, {
              dispatch: y,
              getState: v,
              extra: z,
              requestId: k,
              signal: N.signal,
              abort: F,
              rejectWithValue: (B, M) => new io(B, M),
              fulfillWithValue: (B, M) => new os(B, M)
            })).then((B) => {
              if (B instanceof io)
                throw B;
              return B instanceof os ? c(B.payload, k, p, B.meta) : c(B, k, p);
            })]);
          } catch (J) {
            A = J instanceof io ? u(null, k, p, J.payload, J.meta) : u(J, k, p);
          } finally {
            P && N.signal.removeEventListener("abort", P);
          }
          return r && !r.dispatchConditionRejection && u.match(A) && A.meta.condition || y(A), A;
        }();
        return Object.assign(H, {
          abort: F,
          requestId: k,
          arg: p,
          unwrap() {
            return H.then(cm);
          }
        });
      };
    }
    return Object.assign(h, {
      pending: d,
      rejected: u,
      fulfilled: c,
      settled: am(u, c),
      typePrefix: n
    });
  }
  return t.withTypes = () => t, t;
})();
function cm(t) {
  if (t.meta && t.meta.rejectedWithValue)
    throw t.payload;
  if (t.error)
    throw t.error;
  return t.payload;
}
function _m(t) {
  return t !== null && typeof t == "object" && typeof t.then == "function";
}
var dm = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function um(t, n) {
  return `${t}/${n}`;
}
function mm({
  creators: t
} = {}) {
  var a;
  const n = (a = t == null ? void 0 : t.asyncThunk) == null ? void 0 : a[dm];
  return function(c) {
    const {
      name: d,
      reducerPath: u = d
    } = c;
    if (!d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const h = (typeof c.reducers == "function" ? c.reducers(pm()) : c.reducers) || {}, p = Object.keys(h), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, y = {
      addCase(R, T) {
        const E = typeof R == "string" ? R : R.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in g.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return g.sliceCaseReducersByType[E] = T, y;
      },
      addMatcher(R, T) {
        return g.sliceMatchers.push({
          matcher: R,
          reducer: T
        }), y;
      },
      exposeAction(R, T) {
        return g.actionCreators[R] = T, y;
      },
      exposeCaseReducer(R, T) {
        return g.sliceCaseReducersByName[R] = T, y;
      }
    };
    p.forEach((R) => {
      const T = h[R], E = {
        reducerName: R,
        type: um(d, R),
        createNotation: typeof c.reducers == "function"
      };
      gm(T) ? ym(E, T, y, n) : fm(E, T, y);
    });
    function v() {
      if (process.env.NODE_ENV !== "production" && typeof c.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Qe(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [R = {}, T = [], E = void 0] = typeof c.extraReducers == "function" ? Qs(c.extraReducers) : [c.extraReducers], J = {
        ...R,
        ...g.sliceCaseReducersByType
      };
      return im(c.initialState, (G) => {
        for (let B in J)
          G.addCase(B, J[B]);
        for (let B of g.sliceMatchers)
          G.addMatcher(B.matcher, B.reducer);
        for (let B of T)
          G.addMatcher(B.matcher, B.reducer);
        E && G.addDefaultCase(E);
      });
    }
    const z = (R) => R, k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new WeakMap();
    let P;
    function $(R, T) {
      return P || (P = v()), P(R, T);
    }
    function F() {
      return P || (P = v()), P.getInitialState();
    }
    function H(R, T = !1) {
      function E(G) {
        let B = G[R];
        if (typeof B > "u") {
          if (T)
            B = ta(N, E, F);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Qe(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return B;
      }
      function J(G = z) {
        const B = ta(k, T, () => /* @__PURE__ */ new WeakMap());
        return ta(B, G, () => {
          const M = {};
          for (const [j, V] of Object.entries(c.selectors ?? {}))
            M[j] = hm(V, G, () => ta(N, G, F), T);
          return M;
        });
      }
      return {
        reducerPath: R,
        getSelectors: J,
        get selectors() {
          return J(E);
        },
        selectSlice: E
      };
    }
    const A = {
      name: d,
      reducer: $,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: F,
      ...H(u),
      injectInto(R, {
        reducerPath: T,
        ...E
      } = {}) {
        const J = T ?? u;
        return R.inject({
          reducerPath: J,
          reducer: $
        }, E), {
          ...A,
          ...H(J, !0)
        };
      }
    };
    return A;
  };
}
function hm(t, n, a, r) {
  function c(d, ...u) {
    let h = n(d);
    if (typeof h > "u") {
      if (r)
        h = a();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Qe(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(h, ...u);
  }
  return c.unwrapped = t, c;
}
var Wt = /* @__PURE__ */ mm();
function pm() {
  function t(n, a) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: n,
      ...a
    };
  }
  return t.withTypes = () => t, {
    reducer(n) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [n.name](...a) {
          return n(...a);
        }
      }[n.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(n, a) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: n,
        reducer: a
      };
    },
    asyncThunk: t
  };
}
function fm({
  type: t,
  reducerName: n,
  createNotation: a
}, r, c) {
  let d, u;
  if ("reducer" in r) {
    if (a && !bm(r))
      throw new Error(process.env.NODE_ENV === "production" ? Qe(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    d = r.reducer, u = r.prepare;
  } else
    d = r;
  c.addCase(t, d).exposeCaseReducer(n, d).exposeAction(n, u ? jn(t, u) : jn(t));
}
function gm(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function bm(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function ym({
  type: t,
  reducerName: n
}, a, r, c) {
  if (!c)
    throw new Error(process.env.NODE_ENV === "production" ? Qe(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: d,
    fulfilled: u,
    pending: h,
    rejected: p,
    settled: g,
    options: y
  } = a, v = c(t, d, y);
  r.exposeAction(n, v), u && r.addCase(v.fulfilled, u), h && r.addCase(v.pending, h), p && r.addCase(v.rejected, p), g && r.addMatcher(v.settled, g), r.exposeCaseReducer(n, {
    fulfilled: u || na,
    pending: h || na,
    rejected: p || na,
    settled: g || na
  });
}
function na() {
}
function Qe(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const el = {
  clientTime: null,
  performance: {
    memory: 0,
    fps: 0,
    loadTime: 0
  },
  errors: []
}, xm = {
  componentStates: {},
  isDebugModeEnabled: !1,
  globalAdminEnabled: typeof window < "u"
  // Default to true in browser
}, tl = Wt({
  name: "admin",
  initialState: xm,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...el
      });
    },
    // Session Debugger actions
    setClientTime: (t, n) => {
      const { componentId: a, time: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].clientTime = r);
    },
    // Performance Monitor actions
    setPerformanceMetrics: (t, n) => {
      const { componentId: a, metrics: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].performance = r);
    },
    // Error Logger actions
    addError: (t, n) => {
      const { componentId: a, error: r } = n.payload;
      t.componentStates[a] && t.componentStates[a].errors.push(
        r
      );
    },
    setErrors: (t, n) => {
      const { componentId: a, errors: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].errors = r);
    },
    clearErrors: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].errors = []);
    },
    // Global admin settings
    setDebugModeEnabled: (t, n) => {
      t.isDebugModeEnabled = n.payload;
    },
    setGlobalAdminEnabled: (t, n) => {
      t.globalAdminEnabled = n.payload;
    },
    // Cleanup
    removeComponentState: (t, n) => {
      const { componentId: a } = n.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    }
  }
}), {
  initializeComponentState: W9,
  setClientTime: vm,
  setPerformanceMetrics: wm,
  addError: V9,
  setErrors: km,
  clearErrors: G9,
  setDebugModeEnabled: q9,
  setGlobalAdminEnabled: K9,
  removeComponentState: Y9,
  clearAllComponentStates: J9
} = tl.actions, Sm = (t, n) => {
  var a;
  return ((a = t.admin.componentStates[n]) == null ? void 0 : a.clientTime) || null;
}, Cm = (t, n) => {
  var a;
  return ((a = t.admin.componentStates[n]) == null ? void 0 : a.performance) || el.performance;
}, jm = (t, n) => {
  var a;
  return ((a = t.admin.componentStates[n]) == null ? void 0 : a.errors) || [];
}, il = tl.reducer, zm = "_adminComponent_18wo9_10", Tm = "_sessionDebugger_18wo9_65", Pm = "_debugRow_18wo9_65", Nm = "_performanceMonitor_18wo9_87", Em = "_metricRow_18wo9_87", Im = "_metricLabel_18wo9_97", Lm = "_metricValue_18wo9_106", Am = "_errorLogger_18wo9_120", Mm = "_errorEntry_18wo9_124", Om = "_errorTime_18wo9_134", Rm = "_errorMessage_18wo9_140", Dm = "_noErrors_18wo9_147", Bm = "_debugPanel_18wo9_154", $m = "_panelHeader_18wo9_154", Fm = "_panelHeaderTitle_18wo9_167", Hm = "_panelSection_18wo9_171", Um = "_sectionTitle_18wo9_181", Zm = "_noDebugData_18wo9_200", Wm = "_infoRow_18wo9_207", Vm = "_infoLabel_18wo9_213", Gm = "_darkTheme_18wo9_254", qm = "_lightTheme_18wo9_277", Km = "_animated_18wo9_316", Ym = "_fadeInAdmin_18wo9_1", Jm = "_pulse_18wo9_330", Xm = "_pulseAdmin_18wo9_1", Qm = "_compact_18wo9_345", eh = "_expanded_18wo9_352", th = "_translucent_18wo9_359", ih = "_opaque_18wo9_364", nh = "_adminZ9999_18wo9_372", ah = "_adminZ9998_18wo9_376", oh = "_adminZ9997_18wo9_380", rh = "_adminZ9996_18wo9_384", sh = "_adminZ9995_18wo9_388", Ni = {
  adminComponent: zm,
  "admin-top-left": "_admin-top-left_18wo9_34",
  "admin-top-right": "_admin-top-right_18wo9_39",
  "admin-bottom-left": "_admin-bottom-left_18wo9_44",
  "admin-bottom-right": "_admin-bottom-right_18wo9_49",
  "admin-center": "_admin-center_18wo9_54",
  sessionDebugger: Tm,
  debugRow: Pm,
  performanceMonitor: Nm,
  metricRow: Em,
  metricLabel: Im,
  metricValue: Lm,
  errorLogger: Am,
  errorEntry: Mm,
  errorTime: Om,
  errorMessage: Rm,
  noErrors: Dm,
  debugPanel: Bm,
  panelHeader: $m,
  panelHeaderTitle: Fm,
  panelSection: Hm,
  sectionTitle: Um,
  noDebugData: Zm,
  infoRow: Wm,
  infoLabel: Vm,
  darkTheme: Gm,
  lightTheme: qm,
  animated: Km,
  fadeInAdmin: Ym,
  pulse: Jm,
  pulseAdmin: Xm,
  compact: Qm,
  expanded: eh,
  translucent: th,
  opaque: ih,
  adminZ9999: nh,
  adminZ9998: ah,
  adminZ9997: oh,
  adminZ9996: rh,
  adminZ9995: sh,
  "admin__info-row": "_admin__info-row_18wo9_392",
  "admin__info-label": "_admin__info-label_18wo9_398"
}, nl = ({
  label: t,
  value: n,
  unit: a = "",
  className: r = "",
  labelClassName: c = "",
  valueClassName: d = ""
}) => /* @__PURE__ */ l.jsxs(
  f,
  {
    className: [Ni["admin__info-row"], r].filter(Boolean).join(" "),
    children: [
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: [
            Ni["admin__info-label"],
            c
          ].filter(Boolean).join(" "),
          children: t
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: d, children: [
        n,
        a ? ` ${a}` : ""
      ] })
    ]
  }
), ss = {
  "session-debugger": [
    { label: "Session Status", key: "status" },
    { label: "User ID", key: "userId" },
    { label: "Email", key: "email" },
    { label: "Session Exists", key: "sessionExists" },
    { label: "Timestamp", key: "timestamp" }
  ],
  "performance-monitor": [
    { label: "Memory", key: "memory", unit: "MB" },
    { label: "FPS", key: "fps" },
    { label: "Load Time", key: "loadTime", unit: "ms" }
  ]
  // Add more as needed
};
function ls(t, n = [], a, r) {
  return /* @__PURE__ */ l.jsx(f, { children: n.map((c) => /* @__PURE__ */ l.jsx(
    nl,
    {
      label: c.label,
      value: t[c.key] ?? "",
      unit: c.unit
    },
    c.key
  )) });
}
const cs = {
  "session-debugger": {
    className: "sessionDebugger",
    updateInterval: 1e3,
    dataKey: "time",
    selector: Sm,
    actionCreator: vm,
    fields: ss["session-debugger"],
    dataProcessor: (t, n) => {
      var a, r, c, d, u;
      return {
        status: ((a = n.data) == null ? void 0 : a.status) || "unknown",
        userId: ((r = n.data) == null ? void 0 : r.userId) || "None",
        email: ((c = n.data) == null ? void 0 : c.email) || "None",
        sessionExists: ((d = n.data) == null ? void 0 : d.sessionExists) || "No",
        timestamp: ((u = n.data) == null ? void 0 : u.timestamp) || "..."
      };
    },
    renderer: (t, n, a, r) => ls(t, r)
  },
  "performance-monitor": {
    className: "performanceMonitor",
    updateInterval: 2e3,
    dataKey: "performance",
    selector: Cm,
    actionCreator: wm,
    fields: ss["performance-monitor"],
    dataProcessor: (t, n) => {
      var a, r, c;
      return {
        memory: ((a = n.data) == null ? void 0 : a.memory) ?? 0,
        fps: ((r = n.data) == null ? void 0 : r.fps) ?? 0,
        loadTime: ((c = n.data) == null ? void 0 : c.loadTime) ?? 0
      };
    },
    renderer: (t, n, a, r) => ls(t, r)
  },
  "error-logger": {
    className: "errorLogger",
    dataKey: "errors",
    selector: jm,
    actionCreator: km,
    dataProcessor: (t, n) => {
      var a;
      return {
        errors: ((a = n.data) == null ? void 0 : a.errors) || []
      };
    },
    renderer: (t, n, a) => {
      var r;
      return /* @__PURE__ */ l.jsx(f, { className: n.errorLogger, children: (r = t.errors) != null && r.length ? t.errors.map((c, d) => /* @__PURE__ */ l.jsxs(
        "div",
        {
          className: n.errorEntry,
          children: [
            /* @__PURE__ */ l.jsx("span", { className: n.errorTime, children: c.time }),
            /* @__PURE__ */ l.jsx("span", { className: n.errorMessage, children: c.message })
          ]
        },
        d
      )) : /* @__PURE__ */ l.jsx("span", { className: n.noErrors, children: "No errors" }) });
    }
  },
  "debug-panel": {
    className: "debugPanel",
    dataKey: "environment",
    dataProcessor: (t, n) => ({
      ...n.data
    }),
    renderer: (t, n, a) => /* @__PURE__ */ l.jsxs(f, { className: n.debugPanel, children: [
      /* @__PURE__ */ l.jsx("div", { className: n.panelHeaderTitle, children: "Debug Panel" }),
      t && Object.keys(t).length ? Object.entries(t).map(([r, c]) => /* @__PURE__ */ l.jsx(
        nl,
        {
          label: r,
          value: String(c)
        },
        r
      )) : /* @__PURE__ */ l.jsx("span", { className: n.noDebugData, children: "No debug data" })
    ] })
  },
  custom: {
    className: "custom",
    dataKey: "environment",
    dataProcessor: (t, n) => ({}),
    renderer: (t, n, a) => (a == null ? void 0 : a.children) || /* @__PURE__ */ l.jsx(f, { children: "Custom admin component" })
  }
}, lh = (t) => t ? Ni[`adminZ${t}`] || "" : Ni.adminZ9999, X9 = ({
  children: t,
  kind: n = "custom",
  position: a = "top-left",
  enabled: r = !1,
  className: c = "",
  zIndex: d = 9999,
  componentId: u = "default",
  data: h = {},
  ...p
}) => {
  if (!r) return null;
  const g = cs[n] || cs.custom, y = g.dataProcessor ? g.dataProcessor(null, { ...p, data: h }) : {}, v = [
    Ni.adminComponent,
    Ni[g.className],
    Ni[`admin-${a}`],
    lh(d),
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx(f, { className: v, style: { zIndex: d }, children: g.renderer ? g.renderer(
    y,
    Ni,
    { ...p, data: h, children: t },
    g.fields
  ) : null });
}, Q9 = {
  "session-debugger": {
    position: "top-left",
    enabled: !1,
    zIndex: 9999
  },
  "performance-monitor": {
    position: "top-right",
    enabled: !1,
    zIndex: 9998
  },
  "error-logger": {
    position: "bottom-left",
    enabled: !1,
    zIndex: 9997
  },
  "debug-panel": {
    position: "center",
    enabled: !1,
    zIndex: 9996
  },
  custom: {
    enabled: !1
  }
}, Pn = {
  "banner-ad": {
    variant: "standard",
    size: "banner",
    position: "top",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Advertisement",
      ctaText: "Learn More"
    },
    closeable: !1,
    clickable: !0,
    autoClose: !1,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "small",
    shadow: !0,
    responsive: !0,
    showAdLabel: !0,
    animation: {
      entrance: "fade",
      duration: 300
    }
  },
  "interstitial-ad": {
    variant: "premium",
    size: "fullscreen",
    position: "overlay",
    state: "ready",
    displayMode: "conditional",
    content: {
      title: "Sponsored Content",
      ctaText: "Continue"
    },
    closeable: !0,
    clickable: !0,
    autoClose: !0,
    autoCloseDelay: 5e3,
    skipable: !0,
    skipDelay: 3e3,
    trackingEnabled: !0,
    theme: "dark",
    borderRadius: "medium",
    overlay: !0,
    backdrop: !0,
    animation: {
      entrance: "zoom",
      exit: "fade",
      duration: 500
    },
    mobileOptimized: !0
  },
  "rewarded-ad-modal": {
    variant: "interactive",
    size: "large",
    position: "center",
    state: "ready",
    displayMode: "user-triggered",
    content: {
      title: "Watch Ad for Reward",
      description: "Watch this short video to earn coins!",
      ctaText: "Watch Now"
    },
    closeable: !0,
    duration: 3e4,
    skipable: !1,
    trackingEnabled: !0,
    theme: "game",
    borderRadius: "large",
    shadow: !0,
    overlay: !0,
    backdrop: !0,
    animation: {
      entrance: "bounce",
      exit: "zoom",
      duration: 400
    }
  },
  "native-ad-card": {
    variant: "native",
    size: "medium",
    position: "inline",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Sponsored",
      ctaText: "Learn More"
    },
    closeable: !1,
    clickable: !0,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "medium",
    shadow: !1,
    responsive: !0,
    showAdLabel: !0,
    animation: {
      entrance: "fade",
      duration: 200
    }
  },
  "sticky-ad-bar": {
    variant: "minimal",
    size: "banner",
    position: "sticky",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Ad",
      ctaText: "Learn More"
    },
    closeable: !0,
    trackingEnabled: !0,
    theme: "light",
    borderRadius: "none",
    shadow: !0,
    responsive: !0,
    mobileOptimized: !0,
    animation: {
      entrance: "slide",
      duration: 300
    }
  },
  "floating-ad-widget": {
    variant: "standard",
    size: "small",
    position: "floating",
    state: "ready",
    displayMode: "timed",
    content: {
      ctaText: "Click Here"
    },
    closeable: !0,
    autoClose: !0,
    autoCloseDelay: 1e4,
    pauseOnHover: !0,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "full",
    shadow: !0,
    hover: !0,
    animation: {
      entrance: "bounce",
      exit: "fade",
      duration: 400
    }
  },
  "toast-ad-notification": {
    variant: "minimal",
    size: "small",
    position: "top-right",
    state: "ready",
    displayMode: "conditional",
    content: {
      title: "Special Offer",
      ctaText: "View Deal"
    },
    closeable: !0,
    autoClose: !0,
    autoCloseDelay: 5e3,
    trackingEnabled: !0,
    theme: "light",
    borderRadius: "medium",
    shadow: !0,
    animation: {
      entrance: "slide",
      exit: "fade",
      duration: 300
    }
  },
  "exit-intent-ad-modal": {
    variant: "premium",
    size: "large",
    position: "center",
    state: "ready",
    displayMode: "exit-intent",
    content: {
      title: "Wait! Special Offer",
      description: "Don't miss out on this exclusive deal!",
      ctaText: "Get Offer"
    },
    closeable: !0,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "large",
    shadow: !0,
    overlay: !0,
    backdrop: !0,
    animation: {
      entrance: "zoom",
      exit: "fade",
      duration: 500
    },
    frequency: 1,
    cooldown: 864e5
    // 24 hours
  },
  "in-game-billboard": {
    variant: "branded",
    size: "rectangle",
    position: "center",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Game Sponsor"
    },
    closeable: !1,
    trackingEnabled: !0,
    theme: "game",
    borderRadius: "small",
    shadow: !1,
    responsive: !1,
    animation: {
      entrance: "fade",
      duration: 500
    }
  },
  "ad-container": {
    variant: "standard",
    size: "custom",
    position: "inline",
    state: "loading",
    displayMode: "always",
    content: {},
    closeable: !1,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "small",
    responsive: !0,
    lazyLoad: !0,
    refreshRate: 3e4,
    animation: {
      entrance: "fade",
      duration: 200
    }
  },
  "video-ad": {
    variant: "video",
    size: "large",
    position: "center",
    state: "ready",
    displayMode: "user-triggered",
    content: {
      title: "Video Advertisement",
      ctaText: "Watch"
    },
    closeable: !0,
    duration: 3e4,
    skipable: !0,
    skipDelay: 5e3,
    controls: !0,
    muted: !1,
    trackingEnabled: !0,
    theme: "dark",
    borderRadius: "medium",
    overlay: !0,
    backdrop: !0,
    animation: {
      entrance: "zoom",
      exit: "fade",
      duration: 400
    }
  },
  "popup-ad": {
    variant: "standard",
    size: "medium",
    position: "center",
    state: "ready",
    displayMode: "timed",
    content: {
      title: "Advertisement",
      ctaText: "Learn More"
    },
    closeable: !0,
    autoClose: !0,
    autoCloseDelay: 8e3,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "medium",
    shadow: !0,
    overlay: !0,
    animation: {
      entrance: "zoom",
      exit: "fade",
      duration: 300
    }
  },
  "sidebar-ad": {
    variant: "standard",
    size: "skyscraper",
    position: "right",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Advertisement",
      ctaText: "Learn More"
    },
    closeable: !1,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "small",
    shadow: !0,
    responsive: !0,
    hideOnMobile: !0,
    animation: {
      entrance: "fade",
      duration: 300
    }
  },
  "footer-ad": {
    variant: "minimal",
    size: "banner",
    position: "bottom",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Advertisement",
      ctaText: "Learn More"
    },
    closeable: !1,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "none",
    shadow: !1,
    responsive: !0,
    animation: {
      entrance: "slide",
      duration: 300
    }
  },
  "header-ad": {
    variant: "minimal",
    size: "leaderboard",
    position: "top",
    state: "ready",
    displayMode: "always",
    content: {
      title: "Advertisement",
      ctaText: "Learn More"
    },
    closeable: !1,
    trackingEnabled: !0,
    theme: "auto",
    borderRadius: "none",
    shadow: !1,
    responsive: !0,
    animation: {
      entrance: "slide",
      duration: 300
    }
  }
}, eS = (t) => {
  const n = {
    type: "adsense",
    name: "Google AdSense",
    refreshRate: 3e4,
    maxRetries: 3,
    ...t
  };
  return {
    config: n,
    async loadAd(a, r) {
      try {
        if (typeof window < "u" && window.adsbygoogle) {
          const c = window.adsbygoogle, d = document.createElement("ins");
          return d.className = "adsbygoogle", d.style.display = "block", d.setAttribute(
            "data-ad-client",
            n.publisherId || ""
          ), d.setAttribute(
            "data-ad-slot",
            n.adUnitId || ""
          ), d.setAttribute("data-ad-format", "auto"), a.appendChild(d), c.push({}), {
            id: `adsense-${Date.now()}`,
            title: "Google AdSense Ad",
            sponsored: !0
          };
        }
        return null;
      } catch (c) {
        return console.error("AdSense loading error:", c), null;
      }
    },
    async initialize() {
      if (typeof window < "u" && !document.querySelector(
        'script[src*="adsbygoogle"]'
      )) {
        const a = document.createElement("script");
        a.async = !0, a.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", a.setAttribute(
          "data-ad-client",
          n.publisherId || ""
        ), document.head.appendChild(a), window.adsbygoogle = window.adsbygoogle || [];
      }
    }
  };
}, tS = (t) => {
  const n = {
    type: "adsterra",
    name: "Adsterra",
    refreshRate: 6e4,
    maxRetries: 2,
    ...t
  };
  return {
    config: n,
    async loadAd(a, r) {
      try {
        const c = document.createElement("div");
        c.id = `adsterra-${Date.now()}`, a.appendChild(c);
        const d = document.createElement("script");
        return d.async = !0, d.setAttribute("data-cfasync", "false"), d.src = `//www.highperformanceformat.com/${n.zoneId}/invoke.js`, c.appendChild(d), {
          id: c.id,
          title: "Adsterra Ad",
          sponsored: !0
        };
      } catch (c) {
        return console.error("Adsterra loading error:", c), null;
      }
    },
    destroyAd(a) {
      a.querySelectorAll(
        '[id^="adsterra-"]'
      ).forEach((c) => c.remove());
    }
  };
}, iS = (t) => ({
  config: t,
  loadAd: t.loadAdFunction,
  async reportMetrics(n) {
    if (t.reportingUrl)
      try {
        await fetch(t.reportingUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            metrics: n,
            providerId: t.name
          })
        });
      } catch (a) {
        console.error("Metrics reporting error:", a);
      }
  }
}), nS = (t) => ({
  name: "Google Analytics",
  trackEvent(n) {
    typeof window < "u" && window.gtag && window.gtag("event", n.eventType, {
      event_category: "Advertisement",
      event_label: `${n.adKind}-${n.adId}`,
      custom_map: n.metadata
    });
  },
  async initialize(n) {
    if (typeof window < "u" && !document.querySelector(
      `script[src*="${t}"]`
    )) {
      const a = document.createElement("script");
      a.async = !0, a.src = `https://www.googletagmanager.com/gtag/js?id=${t}`, document.head.appendChild(a), window.dataLayer = window.dataLayer || [], window.gtag = function() {
        window.dataLayer.push(arguments);
      }, window.gtag("js", /* @__PURE__ */ new Date()), window.gtag("config", t);
    }
  }
}), aS = (t) => {
  let n = [], a = null;
  const r = async () => {
    if (n.length !== 0)
      try {
        await fetch(t.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...t.apiKey && {
              Authorization: `Bearer ${t.apiKey}`
            }
          },
          body: JSON.stringify({ events: n })
        }), n = [];
      } catch (c) {
        console.error("Analytics flush error:", c);
      }
  };
  return {
    name: t.name,
    batchEvents: t.batchEvents ?? !0,
    batchSize: t.batchSize ?? 10,
    flushInterval: t.flushInterval ?? 3e4,
    trackEvent(c) {
      t.batchEvents ? (n.push(c), n.length >= (t.batchSize ?? 10) ? r() : a || (a = setTimeout(() => {
        r(), a = null;
      }, t.flushInterval ?? 3e4))) : fetch(t.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...t.apiKey && {
            Authorization: `Bearer ${t.apiKey}`
          }
        },
        body: JSON.stringify({ event: c })
      }).catch(
        (d) => console.error("Analytics error:", d)
      );
    }
  };
}, ch = (t) => Pn[t] || Pn["banner-ad"], oS = (t, n) => {
  const a = ch(t);
  return {
    ...a,
    ...n,
    content: {
      ...a.content,
      ...n.content
    }
  };
}, rS = (t) => Object.keys(Pn).includes(
  t
), sS = (t, n, a, r) => {
  var c;
  return {
    eventType: t,
    adId: n,
    adKind: a,
    timestamp: Date.now(),
    sessionId: typeof window < "u" && ((c = window.sessionStorage) == null ? void 0 : c.getItem("sessionId")) || void 0,
    metadata: r
  };
}, lS = {
  DISPLAY: [
    "banner-ad",
    "sidebar-ad",
    "header-ad",
    "footer-ad"
  ],
  INTERACTIVE: [
    "interstitial-ad",
    "rewarded-ad-modal",
    "video-ad"
  ],
  NATIVE: ["native-ad-card", "in-game-billboard"],
  OVERLAY: [
    "floating-ad-widget",
    "toast-ad-notification",
    "popup-ad"
  ],
  MODAL: [
    "exit-intent-ad-modal",
    "rewarded-ad-modal",
    "interstitial-ad"
  ],
  STICKY: ["sticky-ad-bar"],
  CONTAINER: ["ad-container"]
}, cS = {
  GAMING: [
    "rewarded-ad-modal",
    "in-game-billboard",
    "interstitial-ad"
  ],
  ECOMMERCE: [
    "exit-intent-ad-modal",
    "banner-ad",
    "native-ad-card"
  ],
  CONTENT: ["native-ad-card", "sidebar-ad", "footer-ad"],
  MOBILE: [
    "banner-ad",
    "interstitial-ad",
    "toast-ad-notification"
  ],
  MINIMAL: [
    "sticky-ad-bar",
    "toast-ad-notification",
    "native-ad-card"
  ]
}, _h = "_advertisement_13t7u_118", dh = "_advertisement__slot_13t7u_139", uh = "_advertisement__loading_13t7u_150", mh = "_pulse_13t7u_1", hh = "_advertisement__modal_13t7u_160", ph = "_modalAppear_13t7u_1", fh = "_advertisement__backdrop_13t7u_174", gh = "_advertisement__backdropOpacity_13t7u_181", bh = "_advertisement__modal_content_13t7u_186", yh = "_fadeIn_13t7u_1", xh = "_advertisement__close_13t7u_210", vh = "_advertisement__close_button_13t7u_217", wh = "_advertisement__banner_13t7u_232", kh = "_advertisement__native_13t7u_233", Sh = "_advertisement__sticky_13t7u_234", Ch = "_advertisement__floating_13t7u_235", jh = "_advertisement__toast_13t7u_236", zh = "_advertisement__billboard_13t7u_237", Th = "_advertisement__billboard_overlay_13t7u_250", Ph = "_advertisement__default_13t7u_258", Nh = "_advertisement__image_13t7u_268", Eh = "_advertisement__content_13t7u_277", Ih = "_advertisement__title_13t7u_285", Lh = "_advertisement__label_13t7u_296", Ah = "_advertisement__description_13t7u_300", Mh = "_advertisement__cta_13t7u_310", Oh = "_advertisement__sponsored_13t7u_329", Rh = "_advertisement__reward_info_13t7u_336", Dh = "_advertisement__reward_actions_13t7u_342", Bh = "_advertisement__exit_intent_13t7u_348", $h = "_advertisement__carousel_controls_13t7u_395", Fh = "_adFadeIn_13t7u_1", Hh = "_adSlideIn_13t7u_1", Uh = "_adModalAppear_13t7u_1", oe = {
  advertisement: _h,
  advertisement__slot: dh,
  advertisement__loading: uh,
  pulse: mh,
  advertisement__modal: hh,
  modalAppear: ph,
  advertisement__backdrop: fh,
  advertisement__backdropOpacity: gh,
  advertisement__modal_content: bh,
  fadeIn: yh,
  advertisement__close: xh,
  advertisement__close_button: vh,
  advertisement__banner: wh,
  advertisement__native: kh,
  advertisement__sticky: Sh,
  advertisement__floating: Ch,
  advertisement__toast: jh,
  advertisement__billboard: zh,
  advertisement__billboard_overlay: Th,
  advertisement__default: Ph,
  advertisement__image: Nh,
  advertisement__content: Eh,
  advertisement__title: Ih,
  advertisement__label: Lh,
  advertisement__description: Ah,
  advertisement__cta: Mh,
  advertisement__sponsored: Oh,
  advertisement__reward_info: Rh,
  advertisement__reward_actions: Dh,
  advertisement__exit_intent: Bh,
  "advertisement--container": "_advertisement--container_13t7u_359",
  "advertisement--layout-stack": "_advertisement--layout-stack_13t7u_367",
  "advertisement--layout-carousel": "_advertisement--layout-carousel_13t7u_373",
  "advertisement--layout-grid": "_advertisement--layout-grid_13t7u_382",
  "advertisement--layout-single": "_advertisement--layout-single_13t7u_388",
  advertisement__carousel_controls: $h,
  "loading-shimmer": "_loading-shimmer_13t7u_1",
  adFadeIn: Fh,
  adSlideIn: Hh,
  adModalAppear: Uh
}, yi = Le(
  ({
    count: t = "one",
    kind: n,
    content: a,
    adPool: r = [],
    maxAds: c = 3,
    layout: d = "stack",
    autoRotate: u = !1,
    rotationInterval: h = 3e4,
    spacing: p = 16,
    alignItems: g = "flex-start",
    justifyContent: y = "flex-start",
    responsive: v = !0,
    breakpoints: z = {},
    allowedAdTypes: k = [],
    fallbackContent: N,
    showFallbackOnError: P = !0,
    onAdLoad: $,
    onAdClick: F,
    onAdImpression: H,
    onAdClose: A,
    onAdError: R,
    onRewardEarned: T,
    analyticsHooks: E,
    sessionId: J,
    userId: G,
    providers: B = [],
    primaryProvider: M = "custom",
    fallbackProviders: j = [],
    providerConfig: V = {},
    isVisible: Q = !0,
    isLoading: le = !1,
    isError: ae = !1,
    autoHide: te = !1,
    hideDelay: ce = 5e3,
    animationEnabled: w = !0,
    targetingData: q = {},
    trackingEnabled: x = !0,
    maxWidth: O,
    maxHeight: S,
    position: Z = "relative",
    zIndex: ie = 1e3,
    overrideConfig: X = {},
    customClassName: K = "",
    className: pe = "",
    style: de = {},
    showBackdrop: Pe = !0,
    backdropOpacity: be = 0.8,
    ...ee
  }, ne) => {
    var wi, ki;
    if (t === "many")
      return /* @__PURE__ */ l.jsx(
        Zh,
        {
          ref: ne,
          className: pe,
          style: de,
          adPool: r,
          maxAds: c,
          layout: d,
          autoRotate: u,
          rotationInterval: h,
          spacing: p,
          alignItems: g,
          justifyContent: y,
          responsive: v,
          breakpoints: z,
          allowedAdTypes: k,
          fallbackContent: N,
          showFallbackOnError: P,
          onAdLoad: $,
          onAdClick: F,
          onAdImpression: H,
          onAdError: R,
          analyticsHooks: E,
          sessionId: J,
          userId: G,
          trackingEnabled: x,
          providers: B,
          primaryProvider: M,
          fallbackProviders: j,
          providerConfig: V
        }
      );
    if (!n || !a)
      return console.error(
        'Advertisement: kind and content are required for single ads (count="one")'
      ), N ? /* @__PURE__ */ l.jsx(l.Fragment, { children: N }) : null;
    const ue = nt(null), re = nt(!1), [ke, he] = jt("loading"), [W, U] = jt(Q), [Oe, at] = jt({
      impressions: 0,
      clicks: 0,
      ctr: 0
    }), qe = Pn[n.replace(
      /^(banner|interstitial|rewarded-modal|native-card|sticky-bar|floating-widget|toast-notification|exit-intent-modal|ingame-billboard|container)$/,
      (ye) => ({
        banner: "banner-ad",
        interstitial: "interstitial-ad",
        "rewarded-modal": "rewarded-ad-modal",
        "native-card": "native-ad-card",
        "sticky-bar": "sticky-ad-bar",
        "floating-widget": "floating-ad-widget",
        "toast-notification": "toast-ad-notification",
        "exit-intent-modal": "exit-intent-ad-modal",
        "ingame-billboard": "in-game-billboard",
        container: "ad-container"
      })[ye] || ye
    )] || Pn["banner-ad"], We = {
      ...qe,
      clickable: qe.clickable ?? !0,
      ...X
    }, De = Ze(
      (ye, Ne) => ({
        eventType: ye,
        adId: a.id || "unknown",
        adKind: qe.state,
        timestamp: Date.now(),
        sessionId: J,
        userId: G,
        metadata: Ne
      }),
      [a.id, qe, J, G]
    ), xe = Ze(
      (ye) => {
        var Ne, tt, Tt, oi, D, fe, Se;
        if (x)
          switch (ye.eventType) {
            case "impression":
              (Ne = E == null ? void 0 : E.onImpression) == null || Ne.call(E, ye);
              break;
            case "click":
              (tt = E == null ? void 0 : E.onClick) == null || tt.call(E, ye);
              break;
            case "dismiss":
              (Tt = E == null ? void 0 : E.onDismiss) == null || Tt.call(E, ye);
              break;
            case "error":
              (oi = E == null ? void 0 : E.onError) == null || oi.call(E, ye);
              break;
            case "conversion":
              (D = E == null ? void 0 : E.onConversion) == null || D.call(E, ye);
              break;
            case "view":
              (fe = E == null ? void 0 : E.onView) == null || fe.call(E, ye);
              break;
            case "interaction":
              (Se = E == null ? void 0 : E.onInteraction) == null || Se.call(E, ye);
              break;
          }
      },
      [x, E]
    ), $e = Ze(async () => {
      if (!ue.current || B.length === 0)
        return;
      const ye = B.find(
        (Ne) => Ne.config.type === M
      );
      if (ye)
        try {
          if (await ye.loadAd(
            ue.current,
            We
          )) {
            he("ready");
            return;
          }
        } catch (Ne) {
          console.error(
            `Primary provider (${M}) failed:`,
            Ne
          ), xe(
            De("error", {
              provider: M,
              error: String(Ne)
            })
          );
        }
      for (const Ne of j) {
        const tt = B.find(
          (Tt) => Tt.config.type === Ne
        );
        if (tt)
          try {
            if (await tt.loadAd(
              ue.current,
              We
            )) {
              he("ready");
              return;
            }
          } catch (Tt) {
            console.error(
              `Fallback provider (${Ne}) failed:`,
              Tt
            ), xe(
              De("error", {
                provider: Ne,
                error: String(Tt)
              })
            );
          }
      }
      he("error");
    }, [
      B,
      M,
      j,
      We,
      xe,
      De
    ]);
    Te(() => {
      B.length > 0 ? $e() : he("ready");
    }, [$e, B]), Te(() => {
      U(Q);
    }, [Q]), Te(() => {
      if (te && ce > 0 && W) {
        const ye = setTimeout(() => {
          U(!1), xe(
            De("dismiss", {
              reason: "auto-hide"
            })
          ), A == null || A(a.id || "unknown");
        }, ce);
        return () => clearTimeout(ye);
      }
    }, [
      te,
      ce,
      W,
      a.id,
      A,
      xe,
      De
    ]), Te(() => {
      W && x && ke === "ready" && !re.current && (re.current = !0, at((ye) => ({
        ...ye,
        impressions: (ye.impressions || 0) + 1
      })), xe(
        De("impression", {
          adKind: n,
          position: Z,
          viewport: typeof window < "u" ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : void 0
        })
      ), H == null || H(a.id || "unknown"));
    }, [
      W,
      x,
      ke,
      a.id,
      H,
      xe,
      De,
      n,
      Z
    ]);
    const et = Ze(() => {
      a.actionUrl && (at((ye) => {
        const Ne = (ye.clicks || 0) + 1, tt = ye.impressions || 0;
        return {
          ...ye,
          clicks: Ne,
          ctr: tt > 0 ? Ne / tt * 100 : 0
        };
      }), xe(
        De("click", {
          actionUrl: a.actionUrl,
          ctaText: a.ctaText,
          timestamp: Date.now()
        })
      ), F == null || F(
        a.id || "unknown",
        a.actionUrl
      ), We.clickable && window.open(
        a.actionUrl,
        "_blank",
        "noopener,noreferrer"
      ));
    }, [
      a.id,
      a.actionUrl,
      a.ctaText,
      We.clickable,
      F,
      xe,
      De
    ]), st = Ze(() => {
      U(!1), xe(
        De("dismiss", {
          reason: "user-close"
        })
      ), A == null || A(a.id || "unknown");
    }, [
      a.id,
      A,
      xe,
      De
    ]), Ae = Ze(() => {
      var ye, Ne;
      n === "rewarded-modal" && (xe(
        De("conversion", {
          rewardType: (ye = a.rewardData) == null ? void 0 : ye.type,
          rewardAmount: (Ne = a.rewardData) == null ? void 0 : Ne.amount
        })
      ), T == null || T(
        a.id || "unknown",
        a.rewardData
      ));
    }, [
      n,
      a.id,
      a.rewardData,
      T,
      xe,
      De
    ]), vt = [
      oe.advertisement,
      oe[`advertisement--${n}`],
      oe[`advertisement--${We.variant}`],
      oe[`advertisement--${We.size}`],
      w && oe["advertisement--animated"],
      le && oe["advertisement--loading"],
      ae && oe["advertisement--error"],
      !W && oe["advertisement--hidden"],
      K,
      pe
    ].filter(Boolean).join(" "), zt = {
      ...de,
      maxWidth: O || ((wi = We.dimensions) == null ? void 0 : wi.maxWidth),
      maxHeight: S || ((ki = We.dimensions) == null ? void 0 : ki.maxHeight),
      position: Z,
      zIndex: ie,
      ...We.styles
    };
    if (!W && ![
      "interstitial",
      "rewarded-modal",
      "exit-intent-modal"
    ].includes(n))
      return null;
    if (le || ke === "loading")
      return /* @__PURE__ */ l.jsx(
        f,
        {
          ref: ne,
          className: vt,
          style: zt,
          ...ee,
          children: /* @__PURE__ */ l.jsx(
            f,
            {
              className: oe.advertisement__loading,
              children: "Loading advertisement..."
            }
          )
        }
      );
    if (ae || ke === "error")
      return N ? /* @__PURE__ */ l.jsx(
        f,
        {
          className: vt,
          style: zt,
          children: N
        }
      ) : null;
    const wt = ({
      imageUrl: ye,
      altText: Ne,
      className: tt
    }) => ye ? /* @__PURE__ */ l.jsx(
      "img",
      {
        src: ye,
        alt: Ne || "Advertisement",
        className: tt
      }
    ) : null, ni = ({
      title: ye,
      className: Ne,
      as: tt = "h3"
    }) => ye ? it.createElement(
      tt,
      {
        className: [
          oe.advertisement__title,
          Ne
        ].filter(Boolean).join(" ")
      },
      ye
    ) : null, At = ({
      description: ye,
      className: Ne
    }) => ye ? /* @__PURE__ */ l.jsx(
      "p",
      {
        className: [
          oe.advertisement__description,
          Ne
        ].filter(Boolean).join(" "),
        children: ye
      }
    ) : null, ai = ({
      ctaText: ye,
      onClick: Ne,
      className: tt
    }) => ye ? /* @__PURE__ */ l.jsx(
      Ce,
      {
        kind: "primary",
        className: [oe.advertisement__cta, tt].filter(Boolean).join(" "),
        onClick: Ne,
        children: ye
      }
    ) : null, Bt = ({
      onClick: ye,
      className: Ne,
      ariaLabel: tt = "Close advertisement"
    }) => /* @__PURE__ */ l.jsx(
      Ce,
      {
        kind: "ghost",
        className: [
          oe.advertisement__close_button,
          Ne
        ].filter(Boolean).join(" "),
        onClick: ye,
        "aria-label": tt,
        children: "×"
      }
    ), $t = ({
      title: ye,
      description: Ne,
      ctaText: tt,
      onCTAClick: Tt,
      titleClass: oi,
      descClass: D,
      ctaClass: fe,
      titleAs: Se = "h3"
    }) => /* @__PURE__ */ l.jsxs(f, { className: oe.advertisement__content, children: [
      /* @__PURE__ */ l.jsx(
        ni,
        {
          title: ye,
          className: oi,
          as: Se
        }
      ),
      /* @__PURE__ */ l.jsx(
        At,
        {
          description: Ne,
          className: D
        }
      ),
      /* @__PURE__ */ l.jsx(
        ai,
        {
          ctaText: tt,
          onClick: Tt,
          className: fe
        }
      )
    ] }), Vt = () => {
      var ye;
      switch (n) {
        case "banner":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__banner,
              children: [
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: oe.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: et,
                    titleClass: oe.advertisement__title,
                    descClass: oe.advertisement__description,
                    ctaClass: oe.advertisement__cta
                  }
                )
              ]
            }
          );
        case "interstitial":
          return W ? /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__modal,
              children: [
                Pe && /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: oe.advertisement__backdrop,
                    style: { opacity: be }
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  f,
                  {
                    className: oe.advertisement__modal_content,
                    children: [
                      /* @__PURE__ */ l.jsx(
                        Bt,
                        {
                          onClick: st,
                          className: oe.advertisement__close
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        wt,
                        {
                          imageUrl: a.imageUrl,
                          altText: a.altText,
                          className: oe.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        $t,
                        {
                          title: a.title,
                          description: a.description,
                          ctaText: a.ctaText,
                          onCTAClick: et,
                          titleClass: oe.advertisement__title,
                          descClass: oe.advertisement__description,
                          ctaClass: oe.advertisement__cta,
                          titleAs: "h2"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ) : null;
        case "rewarded-modal":
          return W ? /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__modal,
              children: [
                Pe && /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: oe.advertisement__backdrop,
                    style: { opacity: be }
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  f,
                  {
                    className: oe.advertisement__modal_content,
                    children: [
                      /* @__PURE__ */ l.jsxs(
                        f,
                        {
                          className: oe.advertisement__reward_info,
                          children: [
                            /* @__PURE__ */ l.jsx("h2", { children: "Watch Ad to Earn Reward" }),
                            /* @__PURE__ */ l.jsxs("p", { children: [
                              "Complete this advertisement to earn:",
                              " ",
                              (ye = a.rewardData) == null ? void 0 : ye.description
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        wt,
                        {
                          imageUrl: a.imageUrl,
                          altText: a.altText,
                          className: oe.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ l.jsxs(
                        f,
                        {
                          className: oe.advertisement__content,
                          children: [
                            /* @__PURE__ */ l.jsx(
                              ni,
                              {
                                title: a.title,
                                className: oe.advertisement__title,
                                as: "h3"
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              At,
                              {
                                description: a.description,
                                className: oe.advertisement__description
                              }
                            ),
                            /* @__PURE__ */ l.jsxs(
                              f,
                              {
                                className: oe.advertisement__reward_actions,
                                children: [
                                  /* @__PURE__ */ l.jsx(
                                    ai,
                                    {
                                      ctaText: a.ctaText || "Claim Reward",
                                      onClick: () => {
                                        et(), Ae();
                                      },
                                      className: oe.advertisement__cta
                                    }
                                  ),
                                  /* @__PURE__ */ l.jsx(
                                    Bt,
                                    {
                                      onClick: st,
                                      className: oe.advertisement__close_button,
                                      ariaLabel: "Skip"
                                    }
                                  )
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ) : null;
        case "native-card":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__native,
              children: [
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: oe.advertisement__sponsored,
                    children: "Sponsored"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: oe.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: et,
                    titleClass: oe.advertisement__title,
                    descClass: oe.advertisement__description,
                    ctaClass: oe.advertisement__cta,
                    titleAs: "h4"
                  }
                )
              ]
            }
          );
        case "sticky-bar":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__sticky,
              children: [
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: et,
                    titleClass: oe.advertisement__title,
                    descClass: oe.advertisement__description,
                    ctaClass: oe.advertisement__cta,
                    titleAs: "span"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Bt,
                  {
                    onClick: st,
                    className: oe.advertisement__close
                  }
                )
              ]
            }
          );
        case "floating-widget":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__floating,
              children: [
                /* @__PURE__ */ l.jsx(
                  Bt,
                  {
                    onClick: st,
                    className: oe.advertisement__close
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: oe.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    ctaText: a.ctaText,
                    onCTAClick: et,
                    titleClass: oe.advertisement__title,
                    ctaClass: oe.advertisement__cta,
                    titleAs: "h5"
                  }
                )
              ]
            }
          );
        case "toast-notification":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__toast,
              children: [
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: et,
                    titleClass: oe.advertisement__title,
                    descClass: oe.advertisement__description,
                    ctaClass: oe.advertisement__cta,
                    titleAs: "strong"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Bt,
                  {
                    onClick: st,
                    className: oe.advertisement__close
                  }
                )
              ]
            }
          );
        default:
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: oe.advertisement__default,
              children: [
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: oe.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: et,
                    titleClass: oe.advertisement__title,
                    descClass: oe.advertisement__description,
                    ctaClass: oe.advertisement__cta
                  }
                )
              ]
            }
          );
      }
    };
    return /* @__PURE__ */ l.jsx(
      f,
      {
        ref: ne,
        className: vt,
        style: zt,
        "data-ad-id": a.id,
        "data-ad-kind": n,
        ...ee,
        children: /* @__PURE__ */ l.jsx(
          f,
          {
            ref: ue,
            className: oe.advertisement__slot,
            children: Vt()
          }
        )
      }
    );
  }
);
yi.displayName = "Advertisements";
const Zh = Le(
  ({
    className: t = "",
    style: n = {},
    allowedAdTypes: a = [
      "banner",
      "native-card",
      "floating-widget"
    ],
    maxAds: r = 3,
    rotationInterval: c = 3e4,
    autoRotate: d = !1,
    adPool: u = [],
    fallbackContent: h = null,
    showFallbackOnError: p = !0,
    onAdLoad: g,
    onAdError: y,
    onAdClick: v,
    onAdImpression: z,
    layout: k = "stack",
    spacing: N = 16,
    alignItems: P = "flex-start",
    justifyContent: $ = "flex-start",
    responsive: F = !0,
    breakpoints: H = {
      mobile: { maxAds: 1, layout: "single" },
      tablet: { maxAds: 2, layout: "stack" },
      desktop: { maxAds: 3, layout: "stack" }
    },
    analyticsHooks: A,
    sessionId: R,
    userId: T,
    trackingEnabled: E = !0,
    providers: J = [],
    primaryProvider: G = "custom",
    fallbackProviders: B = [],
    providerConfig: M = {},
    enableProviderRotation: j = !1,
    providerRotationInterval: V = 3e5,
    providerFailureThreshold: Q = 3,
    globalTargeting: le = {},
    providerSpecificTargeting: ae = {}
  }) => {
    const [te, ce] = jt([]), [w, q] = jt({}), [x, O] = jt({
      totalImpressions: 0,
      totalClicks: 0,
      loadedAds: 0,
      errorRate: 0
    }), [S, Z] = jt(0), ie = nt(), [X, K] = jt("desktop"), pe = _i(
      () => `ad-container-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      []
    ), de = Ze(() => {
      if (!F || !H)
        return { maxAds: r, layout: k };
      const W = H[X];
      return W ? {
        maxAds: W.maxAds || r,
        layout: W.layout || k
      } : { maxAds: r, layout: k };
    }, [
      F,
      H,
      X,
      r,
      k
    ]);
    Te(() => {
      if (!F) return;
      const W = () => {
        const U = window.innerWidth;
        U < 768 ? K("mobile") : U < 1024 ? K("tablet") : K("desktop");
      };
      return W(), window.addEventListener("resize", W), () => {
        window.removeEventListener(
          "resize",
          W
        );
      };
    }, [F]);
    const Pe = Ze(() => {
      if (u.length === 0) return [];
      const { maxAds: W } = de(), U = u.filter(
        (qe) => a.includes(qe.kind)
      );
      if (U.length === 0) return [];
      const Oe = [];
      return U.forEach((qe) => {
        const We = qe.weight || 1;
        for (let De = 0; De < We; De++)
          Oe.push(qe);
      }), [...Oe].sort(
        () => Math.random() - 0.5
      ).slice(0, W);
    }, [u, a, de]);
    Te(() => {
      const W = Pe();
      ce(W);
    }, [Pe]), Te(() => {
      if (!(!d || c <= 0 || te.length <= 1))
        return ie.current = setInterval(() => {
          Z(
            (W) => (W + 1) % te.length
          );
        }, c), () => {
          ie.current && clearInterval(ie.current);
        };
    }, [d, c, te.length]), Ze(
      (W, U) => {
        O((Oe) => ({
          ...Oe,
          loadedAds: Oe.loadedAds + 1
        })), g == null || g(W, U);
      },
      [g]
    );
    const be = Ze(
      (W, U) => {
        q((Oe) => ({ ...Oe, [W]: U })), O((Oe) => {
          const at = te.length > 0 ? (Object.keys(w).length + 1) / te.length : 0;
          return {
            ...Oe,
            errorRate: at
          };
        }), y == null || y(W, U);
      },
      [w, te.length, y]
    ), ee = Ze(
      (W, U) => {
        O((Oe) => ({
          ...Oe,
          totalClicks: Oe.totalClicks + 1
        })), v == null || v(W, U);
      },
      [v]
    ), ne = Ze(
      (W) => {
        O((U) => ({
          ...U,
          totalImpressions: U.totalImpressions + 1
        })), z == null || z(W);
      },
      [z]
    ), ue = [
      oe.adContainer,
      oe[`adContainer--${k}`],
      F && oe["adContainer--responsive"],
      t
    ].filter(Boolean).join(" "), re = {
      ...n,
      gap: N,
      alignItems: P,
      justifyContent: $
    };
    if (te.length === 0 || Object.keys(w).length === te.length)
      return p && h ? /* @__PURE__ */ l.jsx(
        f,
        {
          className: ue,
          style: re,
          children: h
        }
      ) : null;
    const { layout: ke } = de(), he = () => {
      switch (ke) {
        case "single":
          const W = te[S] || te[0];
          return W ? /* @__PURE__ */ l.jsx(
            yi,
            {
              kind: W.kind,
              content: W.content,
              onAdClick: ee,
              onAdImpression: ne,
              onAdError: be,
              analyticsHooks: A,
              sessionId: R,
              userId: T,
              trackingEnabled: E,
              providers: J,
              primaryProvider: G,
              fallbackProviders: B,
              ...W.props
            },
            `${W.content.id}-${S}`
          ) : null;
        case "carousel":
          return te.map((U) => /* @__PURE__ */ l.jsx(
            yi,
            {
              kind: U.kind,
              content: U.content,
              onAdClick: ee,
              onAdImpression: ne,
              onAdError: be,
              analyticsHooks: A,
              sessionId: R,
              userId: T,
              trackingEnabled: E,
              providers: J,
              primaryProvider: G,
              fallbackProviders: B,
              ...U.props
            },
            U.content.id
          ));
        case "grid":
          return /* @__PURE__ */ l.jsx(
            f,
            {
              kind: "grid-container",
              className: oe.adContainer__grid,
              children: te.map((U) => /* @__PURE__ */ l.jsx(
                yi,
                {
                  kind: U.kind,
                  content: U.content,
                  onAdClick: ee,
                  onAdImpression: ne,
                  onAdError: be,
                  analyticsHooks: A,
                  sessionId: R,
                  userId: T,
                  trackingEnabled: E,
                  providers: J,
                  primaryProvider: G,
                  fallbackProviders: B,
                  ...U.props
                },
                U.content.id
              ))
            }
          );
        case "stack":
        default:
          return te.map((U) => /* @__PURE__ */ l.jsx(
            yi,
            {
              kind: U.kind,
              content: U.content,
              onAdClick: ee,
              onAdImpression: ne,
              onAdError: be,
              analyticsHooks: A,
              sessionId: R,
              userId: T,
              trackingEnabled: E,
              providers: J,
              primaryProvider: G,
              fallbackProviders: B,
              ...U.props
            },
            U.content.id
          ));
      }
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        className: ue,
        style: re,
        "data-container-id": pe,
        "data-layout": ke,
        children: [
          ke === "carousel" && /* @__PURE__ */ l.jsxs(f, { className: oe.adContainer__carousel, children: [
            he(),
            te.length > 1 && /* @__PURE__ */ l.jsx(
              f,
              {
                className: oe.adContainer__carousel_indicators,
                children: te.map((W, U) => /* @__PURE__ */ l.jsx(
                  Ce,
                  {
                    kind: "ghost",
                    className: [
                      oe.adContainer__carousel_indicator,
                      U === S && oe["adContainer__carousel_indicator--active"]
                    ].filter(Boolean).join(" "),
                    onClick: () => Z(U),
                    "aria-label": `Show ad ${U + 1}`
                  },
                  U
                ))
              }
            )
          ] }),
          ke !== "carousel" && he()
        ]
      }
    );
  }
), Wh = {
  banner: {
    kind: "banner",
    defaultProps: { position: "relative" },
    validator: (t) => !!t.title || !!t.imageUrl
  },
  "banner-ad": {
    kind: "banner-ad",
    defaultProps: { position: "relative" },
    validator: (t) => !!t.title || !!t.imageUrl
  },
  interstitial: {
    kind: "interstitial",
    defaultProps: { position: "fixed", showBackdrop: !0 },
    validator: (t) => !!t.title && !!t.ctaText
  },
  "interstitial-ad": {
    kind: "interstitial-ad",
    defaultProps: { position: "fixed", showBackdrop: !0 },
    validator: (t) => !!t.title && !!t.ctaText
  },
  "rewarded-modal": {
    kind: "rewarded-modal",
    defaultProps: { position: "fixed", showBackdrop: !0 },
    validator: (t) => !!t.title && !!t.ctaText
  },
  "rewarded-ad-modal": {
    kind: "rewarded-ad-modal",
    defaultProps: { position: "fixed", showBackdrop: !0 },
    validator: (t) => !!t.title && !!t.ctaText
  },
  "native-card": {
    kind: "native-card",
    defaultProps: { position: "relative" },
    validator: (t) => !!t.title || !!t.description
  },
  "native-ad-card": {
    kind: "native-ad-card",
    defaultProps: { position: "relative" },
    validator: (t) => !!t.title || !!t.description
  },
  "sticky-bar": {
    kind: "sticky-bar",
    defaultProps: { position: "fixed" }
  },
  "sticky-ad-bar": {
    kind: "sticky-ad-bar",
    defaultProps: { position: "fixed" }
  },
  "floating-widget": {
    kind: "floating-widget",
    defaultProps: { position: "fixed" }
  },
  "floating-ad-widget": {
    kind: "floating-ad-widget",
    defaultProps: { position: "fixed" }
  },
  "toast-notification": {
    kind: "toast-notification",
    defaultProps: {
      position: "fixed",
      autoHide: !0,
      hideDelay: 5e3
    }
  },
  "toast-ad-notification": {
    kind: "toast-ad-notification",
    defaultProps: {
      position: "fixed",
      autoHide: !0,
      hideDelay: 5e3
    }
  },
  "exit-intent-modal": {
    kind: "exit-intent-modal",
    defaultProps: { position: "fixed", showBackdrop: !0 }
  },
  "exit-intent-ad-modal": {
    kind: "exit-intent-ad-modal",
    defaultProps: { position: "fixed", showBackdrop: !0 }
  },
  "in-game-billboard": {
    kind: "in-game-billboard",
    defaultProps: { position: "relative" }
  }
}, Vh = {
  website: {
    primary: "banner",
    secondary: [
      "native-card",
      "sticky-bar",
      "exit-intent-modal"
    ],
    priorities: {
      banner: 1,
      "native-card": 2,
      "sticky-bar": 3,
      "exit-intent-modal": 4
    }
  },
  mobile: {
    primary: "interstitial",
    secondary: [
      "rewarded-modal",
      "toast-notification"
    ],
    priorities: {
      interstitial: 1,
      "rewarded-modal": 2,
      "toast-notification": 3
    }
  },
  game: {
    primary: "in-game-billboard",
    secondary: [
      "rewarded-modal",
      "floating-widget"
    ],
    priorities: {
      "in-game-billboard": 1,
      "rewarded-modal": 2,
      "floating-widget": 3
    }
  },
  ecommerce: {
    primary: "banner",
    secondary: [
      "native-card",
      "exit-intent-modal",
      "sticky-bar"
    ],
    priorities: {
      banner: 1,
      "native-card": 2,
      "exit-intent-modal": 3,
      "sticky-bar": 4
    }
  },
  blog: {
    primary: "native-card",
    secondary: ["banner", "sticky-bar"],
    priorities: {
      "native-card": 1,
      banner: 2,
      "sticky-bar": 3
    }
  }
};
class He {
  static createWithConfig(n, a, r = {}) {
    const c = Wh[n], d = {
      ...c == null ? void 0 : c.defaultProps,
      ...r,
      kind: n,
      content: a
    };
    return /* @__PURE__ */ l.jsx(yi, { ...d });
  }
  static create(n, a, r = {}) {
    return He.createWithConfig(
      n,
      a,
      r
    );
  }
  static createBatch(n) {
    return n.map(
      ({ kind: a, content: r, props: c }) => He.createWithConfig(a, r, c)
    );
  }
  static createConditional(n, a, r, c) {
    return n ? He.createWithConfig(a, r, c) : null;
  }
  static createSmart(n, a, r) {
    return n.isGame ? He.createWithConfig(
      "in-game-billboard",
      a,
      r
    ) : n.isMobile ? He.createWithConfig(
      "interstitial",
      a,
      r
    ) : n.userEngagement === "high" ? He.createWithConfig(
      "rewarded-modal",
      a,
      r
    ) : He.createWithConfig(
      "banner",
      a,
      r
    );
  }
  static createAdSet(n, a, r = {}) {
    const c = Vh[n], d = {};
    return r.onlyPrimary && c.primary ? (d.primary = He.createWithConfig(
      c.primary,
      a.primary || {},
      r.sharedProps
    ), d) : ([c.primary, ...c.secondary || []].forEach(
      (u, h) => {
        var g;
        const p = h === 0 ? "primary" : `secondary${h}`;
        d[p] = He.createWithConfig(
          u,
          a[p] || {},
          {
            ...r.sharedProps,
            ...((g = r.positions) == null ? void 0 : g[p]) || {}
          }
        );
      }
    ), d);
  }
}
const Gh = {
  batchCreate: (t) => t.map(
    ({ kind: n, content: a, props: r }) => He.createWithConfig(n, a, r)
  ),
  conditionalCreate: (t) => t.map(
    ({ condition: n, kind: a, content: r, props: c }) => n ? He.createWithConfig(a, r, c) : null
  ),
  responsiveCreate: (t, n) => ({
    mobile: n.mobile ? He.createWithConfig(
      n.mobile.kind,
      t,
      n.mobile.props
    ) : null,
    tablet: n.tablet ? He.createWithConfig(
      n.tablet.kind,
      t,
      n.tablet.props
    ) : null,
    desktop: n.desktop ? He.createWithConfig(
      n.desktop.kind,
      t,
      n.desktop.props
    ) : null
  }),
  abTestCreate: (t, n, a) => {
    const r = n.reduce(
      (u, h) => u + (h.weight || 1),
      0
    );
    let c = 0;
    if (a)
      c = Math.abs(
        a.split("").reduce((u, h) => u + h.charCodeAt(0), 0)
      ) % n.length;
    else {
      let u = Math.random() * r;
      for (let h = 0; h < n.length; h++)
        if (u -= n[h].weight || 1, u <= 0) {
          c = h;
          break;
        }
    }
    const d = n[c];
    return He.createWithConfig(
      d.kind,
      t,
      d.props
    );
  }
}, qh = {
  websiteHeader: (t) => He.createWithConfig("banner", t, {
    position: "relative"
  }),
  websiteFooter: (t) => He.createWithConfig("banner", t, {
    position: "relative"
  }),
  websiteInContent: (t) => He.createWithConfig("native-card", t, {
    position: "relative"
  }),
  websiteSidebar: (t) => He.createWithConfig("native-card", t, {
    position: "relative"
  }),
  mobileFullscreen: (t) => He.createWithConfig(
    "interstitial",
    t,
    { position: "fixed" }
  ),
  mobileReward: (t) => He.createWithConfig(
    "rewarded-modal",
    t,
    { position: "fixed" }
  ),
  gameBillboard: (t) => He.createWithConfig(
    "in-game-billboard",
    t,
    { position: "relative" }
  ),
  gameReward: (t) => He.createWithConfig(
    "rewarded-modal",
    t,
    { position: "fixed", showBackdrop: !0 }
  ),
  productPromo: (t) => He.createWithConfig("banner", t, {
    position: "relative"
  }),
  cartAbandonment: (t) => He.createWithConfig(
    "exit-intent-modal",
    t,
    { position: "fixed", showBackdrop: !0 }
  ),
  saleNotification: (t) => He.createWithConfig(
    "toast-notification",
    t,
    { position: "fixed", autoHide: !0, hideDelay: 8e3 }
  ),
  sponsoredContent: (t) => He.createWithConfig("native-card", t, {
    position: "relative"
  }),
  newsletterPromo: (t) => He.createWithConfig("sticky-bar", t, {
    position: "fixed"
  })
};
yi.Factory = He;
yi.Utils = Gh;
yi.Presets = qh;
const Kh = {
  kind: "dashboard",
  variant: "dashboard",
  type: "performance",
  layout: "grid",
  timeRange: "day",
  autoRefresh: !0,
  refreshInterval: 3e4,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Yh = {
  kind: "dashboard",
  variant: "dashboard",
  type: "user-behavior",
  layout: "grid",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Jh = {
  kind: "dashboard",
  variant: "dashboard",
  type: "conversion",
  layout: "grid",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Xh = {
  kind: "chart",
  variant: "chart",
  type: "performance",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !1
}, Qh = {
  kind: "chart",
  variant: "chart",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, ep = {
  kind: "chart",
  variant: "chart",
  type: "traffic",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, tp = {
  kind: "metric",
  variant: "metric",
  type: "performance",
  layout: "single",
  timeRange: "day",
  autoRefresh: !0,
  refreshInterval: 6e4,
  exportable: !1,
  interactive: !1,
  drilldown: !1
}, ip = {
  kind: "metric",
  variant: "metric",
  type: "revenue",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, np = {
  kind: "heatmap",
  variant: "heatmap",
  type: "user-behavior",
  layout: "fullscreen",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, ap = {
  kind: "heatmap",
  variant: "heatmap",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, op = {
  kind: "funnel",
  variant: "funnel",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, rp = {
  kind: "funnel",
  variant: "funnel",
  type: "user-behavior",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, sp = {
  kind: "cohort",
  variant: "cohort",
  type: "engagement",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, lp = {
  kind: "cohort",
  variant: "cohort",
  type: "revenue",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, cp = {
  kind: "report",
  variant: "report",
  type: "performance",
  layout: "list",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !1,
  drilldown: !1
}, _p = {
  kind: "report",
  variant: "report",
  type: "custom",
  layout: "list",
  timeRange: "custom",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, dp = {
  kind: "realtime",
  variant: "realtime",
  type: "performance",
  layout: "grid",
  timeRange: "realtime",
  autoRefresh: !0,
  refreshInterval: 5e3,
  exportable: !1,
  interactive: !0,
  drilldown: !1
}, up = {
  kind: "realtime",
  variant: "realtime",
  type: "traffic",
  layout: "grid",
  timeRange: "realtime",
  autoRefresh: !0,
  refreshInterval: 1e4,
  exportable: !1,
  interactive: !0,
  drilldown: !0
}, _s = {
  "performance-dashboard": Kh,
  "user-behavior-dashboard": Yh,
  "conversion-dashboard": Jh,
  "line-chart": Xh,
  "bar-chart": Qh,
  "pie-chart": ep,
  "kpi-metric": tp,
  "revenue-metric": ip,
  "user-heatmap": np,
  "conversion-heatmap": ap,
  "conversion-funnel": op,
  "user-journey-funnel": rp,
  "user-cohort": sp,
  "revenue-cohort": lp,
  "performance-report": cp,
  "custom-report": _p,
  "realtime-metrics": dp,
  "realtime-traffic": up
}, mp = "_analytics__container_8rpyb_1", hp = "_analytics__header_8rpyb_15", pp = "_analytics__content_8rpyb_39", fp = "_analytics__footer_8rpyb_44", gp = "_analytics__controls_8rpyb_211", bp = "_analytics__loading_8rpyb_230", yp = "_spin_8rpyb_1", xp = "_analytics__error_8rpyb_249", vp = "_analytics__actions_8rpyb_277", wp = "_analytics__metric_container_8rpyb_311", kp = "_analytics__metric_value_8rpyb_324", Sp = "_analytics__header_actions_8rpyb_346", _e = {
  analytics__container: mp,
  analytics__header: hp,
  "analytics__header-title": "_analytics__header-title_8rpyb_23",
  "analytics__header-subtitle": "_analytics__header-subtitle_8rpyb_29",
  "analytics__header-actions": "_analytics__header-actions_8rpyb_34",
  analytics__content: pp,
  analytics__footer: fp,
  "analytics__dashboard-grid": "_analytics__dashboard-grid_8rpyb_52",
  "analytics__dashboard-sidebar": "_analytics__dashboard-sidebar_8rpyb_63",
  "analytics__chart-container": "_analytics__chart-container_8rpyb_75",
  "analytics__chart-loading": "_analytics__chart-loading_8rpyb_81",
  "analytics__chart-error": "_analytics__chart-error_8rpyb_88",
  "analytics__chart-legend": "_analytics__chart-legend_8rpyb_96",
  "analytics__chart-legend-item": "_analytics__chart-legend-item_8rpyb_104",
  "analytics__chart-legend-item-color": "_analytics__chart-legend-item-color_8rpyb_111",
  "analytics__metric-container": "_analytics__metric-container_8rpyb_116",
  "analytics__metric-value": "_analytics__metric-value_8rpyb_120",
  "analytics__metric-label": "_analytics__metric-label_8rpyb_127",
  "analytics__metric-change": "_analytics__metric-change_8rpyb_134",
  "analytics__metric-change--positive": "_analytics__metric-change--positive_8rpyb_142",
  "analytics__metric-change--negative": "_analytics__metric-change--negative_8rpyb_145",
  "analytics__metric-change--neutral": "_analytics__metric-change--neutral_8rpyb_148",
  "analytics__heatmap-container": "_analytics__heatmap-container_8rpyb_151",
  "analytics__heatmap-cell": "_analytics__heatmap-cell_8rpyb_156",
  "analytics__heatmap-tooltip": "_analytics__heatmap-tooltip_8rpyb_163",
  "analytics__funnel-container": "_analytics__funnel-container_8rpyb_174",
  "analytics__funnel-step": "_analytics__funnel-step_8rpyb_180",
  "analytics__funnel-step-content": "_analytics__funnel-step-content_8rpyb_193",
  "analytics__funnel-step-label": "_analytics__funnel-step-label_8rpyb_199",
  "analytics__funnel-step-value": "_analytics__funnel-step-value_8rpyb_203",
  "analytics__funnel-step-rate": "_analytics__funnel-step-rate_8rpyb_207",
  analytics__controls: gp,
  "analytics__controls-group": "_analytics__controls-group_8rpyb_220",
  "analytics__controls-label": "_analytics__controls-label_8rpyb_225",
  analytics__loading: bp,
  "analytics__loading-spinner": "_analytics__loading-spinner_8rpyb_237",
  spin: yp,
  "analytics__loading-text": "_analytics__loading-text_8rpyb_245",
  analytics__error: xp,
  "analytics__error-icon": "_analytics__error-icon_8rpyb_258",
  "analytics__error-message": "_analytics__error-message_8rpyb_263",
  "analytics__error-details": "_analytics__error-details_8rpyb_268",
  "analytics__error-actions": "_analytics__error-actions_8rpyb_273",
  analytics__actions: vp,
  "analytics__actions-button": "_analytics__actions-button_8rpyb_282",
  "analytics__actions-button--primary": "_analytics__actions-button--primary_8rpyb_299",
  "analytics--dashboard": "_analytics--dashboard_8rpyb_308",
  "analytics--metrics": "_analytics--metrics_8rpyb_311",
  analytics__metric_container: wp,
  "analytics--performance": "_analytics--performance_8rpyb_315",
  "analytics--realtime": "_analytics--realtime_8rpyb_318",
  "analytics--reports": "_analytics--reports_8rpyb_321",
  "analytics--sm": "_analytics--sm_8rpyb_324",
  analytics__metric_value: kp,
  "analytics--md": "_analytics--md_8rpyb_330",
  "analytics--lg": "_analytics--lg_8rpyb_333",
  "analytics--loading": "_analytics--loading_8rpyb_339",
  "analytics--error": "_analytics--error_8rpyb_343",
  "analytics--refreshable": "_analytics--refreshable_8rpyb_346",
  analytics__header_actions: Sp,
  "analytics--exportable": "_analytics--exportable_8rpyb_349"
}, Cp = [], jp = [], zp = [], Tp = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6"
], Pp = [], Np = Le(
  ({
    children: t,
    className: n = "",
    style: a = {},
    "aria-label": r,
    // Analytics configuration
    kind: c = "dashboard",
    variant: d = "dashboard",
    type: u = "chart",
    size: h = "md",
    // Content and data
    title: p,
    subtitle: g,
    data: y = Cp,
    metrics: v = jp,
    query: z,
    filters: k = zp,
    // Configuration
    config: N = {},
    timeRange: P = "day",
    layout: $ = "single",
    autoRefresh: F = !1,
    refreshInterval: H = 3e4,
    // States
    loading: A = !1,
    error: R = null,
    empty: T = !1,
    emptyMessage: E = "No data available",
    // Interactivity
    interactive: J = !0,
    drilldown: G = !1,
    exportable: B = !1,
    filterable: M = !1,
    searchable: j = !1,
    refreshable: V = !1,
    // Event handlers
    onDataPoint: Q,
    onMetricClick: le,
    onFilter: ae,
    onExport: te,
    onRefresh: ce,
    onDrilldown: w,
    onTimeRangeChange: q,
    // Customization
    colors: x = Tp,
    theme: O = "auto",
    height: S = 300,
    showHeader: Z = !0,
    showFooter: ie = !1,
    showLegend: X = !0,
    showControls: K = !1,
    // Analytics-specific
    chartType: pe = "line",
    aggregation: de = "sum",
    granularity: Pe = "day",
    // Real-time
    realtime: be = !1,
    realtimeEndpoint: ee,
    // Advanced
    customRenderer: ne,
    plugins: ue = Pp,
    ...re
  }, ke) => {
    const he = _i(() => ({ ..._s[`${c}-default`] || _s[c] || {}, ...N }), [c, N]), [W, U] = jt(y), [Oe, at] = jt(k), [qe, We] = jt(!1), [De, xe] = jt(null), $e = nt(null), et = nt(ce);
    Te(() => {
      et.current = ce;
    }, [ce]);
    const st = Ze(() => {
      var D;
      qe || (We(!0), (D = et.current) == null || D.call(et), setTimeout(() => {
        We(!1), xe(/* @__PURE__ */ new Date());
      }, 1e3));
    }, [qe]);
    Ze(
      (D) => {
        at(D), ae == null || ae(D);
      },
      [ae]
    );
    const Ae = Ze(
      (D) => {
        te == null || te(D);
      },
      [te]
    ), vt = Ze(
      (D) => {
        q == null || q(D);
      },
      [q]
    );
    Te(() => {
      if (F && H > 0)
        return $e.current = setInterval(() => {
          var D;
          We(!0), (D = et.current) == null || D.call(et), setTimeout(() => {
            We(!1), xe(/* @__PURE__ */ new Date());
          }, 1e3);
        }, H), () => {
          $e.current && clearInterval($e.current);
        };
    }, [F, H]), Te(() => {
      U(y), xe(/* @__PURE__ */ new Date());
    }, [y]);
    const zt = (D, fe) => {
      switch (fe) {
        case "currency":
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(D);
        case "percentage":
          return `${D}%`;
        case "duration":
          return `${D}ms`;
        default:
          return new Intl.NumberFormat().format(D);
      }
    }, wt = () => Z ? /* @__PURE__ */ l.jsxs(f, { className: _e.analytics__header, children: [
      /* @__PURE__ */ l.jsxs(f, { children: [
        p && /* @__PURE__ */ l.jsx(
          "h3",
          {
            className: _e.analytics__header_title,
            children: p
          }
        ),
        g && /* @__PURE__ */ l.jsx(
          "p",
          {
            className: _e.analytics__header_subtitle,
            children: g
          }
        )
      ] }),
      /* @__PURE__ */ l.jsxs(
        f,
        {
          className: _e.analytics__header_actions,
          children: [
            V && ce && /* @__PURE__ */ l.jsx(
              Ce,
              {
                kind: "ghost",
                onClick: st,
                disabled: qe,
                title: "Refresh data",
                children: qe ? "⟳" : "↻"
              }
            ),
            B && /* @__PURE__ */ l.jsxs(
              f,
              {
                className: _e.analytics__actions,
                children: [
                  /* @__PURE__ */ l.jsx(
                    Ce,
                    {
                      kind: "secondary",
                      className: _e.analytics__actions_button,
                      onClick: () => Ae("csv"),
                      title: "Export as CSV",
                      children: "CSV"
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Ce,
                    {
                      kind: "secondary",
                      className: _e.analytics__actions_button,
                      onClick: () => Ae("pdf"),
                      title: "Export as PDF",
                      children: "PDF"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }) : null, ni = () => K ? /* @__PURE__ */ l.jsxs(f, { className: _e.analytics__controls, children: [
      /* @__PURE__ */ l.jsxs(
        f,
        {
          className: _e.analytics__controls_group,
          children: [
            /* @__PURE__ */ l.jsx(
              "label",
              {
                className: _e.analytics__controls_label,
                children: "Time Range:"
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "select",
              {
                value: P,
                onChange: (D) => vt(D.target.value),
                className: _e.analytics__controls_select,
                children: [
                  /* @__PURE__ */ l.jsx("option", { value: "hour", children: "Last Hour" }),
                  /* @__PURE__ */ l.jsx("option", { value: "day", children: "Last Day" }),
                  /* @__PURE__ */ l.jsx("option", { value: "week", children: "Last Week" }),
                  /* @__PURE__ */ l.jsx("option", { value: "month", children: "Last Month" }),
                  /* @__PURE__ */ l.jsx("option", { value: "quarter", children: "Last Quarter" }),
                  /* @__PURE__ */ l.jsx("option", { value: "year", children: "Last Year" })
                ]
              }
            )
          ]
        }
      ),
      M && /* @__PURE__ */ l.jsx(
        f,
        {
          className: _e.analytics__controls_group,
          children: /* @__PURE__ */ l.jsx(
            "label",
            {
              className: _e.analytics__controls_label,
              children: "Filters:"
            }
          )
        }
      )
    ] }) : null, At = () => {
      if (A)
        return /* @__PURE__ */ l.jsxs(f, { className: _e.analytics__loading, children: [
          /* @__PURE__ */ l.jsx(
            f,
            {
              className: _e.analytics__loading_spinner
            }
          ),
          /* @__PURE__ */ l.jsx(
            "span",
            {
              className: _e.analytics__loading_text,
              children: "Loading analytics..."
            }
          )
        ] });
      if (R)
        return /* @__PURE__ */ l.jsxs(f, { className: _e.analytics__error, children: [
          /* @__PURE__ */ l.jsx(
            f,
            {
              className: _e.analytics__error_icon,
              children: "⚠️"
            }
          ),
          /* @__PURE__ */ l.jsxs(
            f,
            {
              className: _e.analytics__error_message,
              children: [
                /* @__PURE__ */ l.jsx("strong", { children: "Error loading analytics:" }),
                /* @__PURE__ */ l.jsx("br", {}),
                R
              ]
            }
          ),
          V && ce && /* @__PURE__ */ l.jsx(
            f,
            {
              className: _e.analytics__error_actions,
              children: /* @__PURE__ */ l.jsx(
                Ce,
                {
                  kind: "secondary",
                  onClick: st,
                  className: _e.analytics__error_retry,
                  children: "Retry"
                }
              )
            }
          )
        ] });
      if (T || !W.length && !v.length)
        return /* @__PURE__ */ l.jsx(f, { className: _e.analytics__error, children: /* @__PURE__ */ l.jsx(
          f,
          {
            className: _e.analytics__error_message,
            children: E
          }
        ) });
      if (ne)
        return ne(W);
      if (t)
        return t;
      switch (c) {
        case "dashboard":
          return ai();
        case "chart":
          return Bt();
        case "metric":
          return $t();
        case "heatmap":
          return Vt();
        case "funnel":
          return wi();
        case "cohort":
          return ki();
        case "report":
          return ye();
        case "realtime":
          return Ne();
        default:
          return Bt();
      }
    }, ai = () => /* @__PURE__ */ l.jsx(
      f,
      {
        kind: "grid-container",
        className: _e.analytics__dashboard_grid,
        children: v.map((D, fe) => /* @__PURE__ */ l.jsxs(
          f,
          {
            className: _e.analytics__metric_container,
            onClick: () => le == null ? void 0 : le(D),
            children: [
              /* @__PURE__ */ l.jsx(
                f,
                {
                  className: _e.analytics__metric_value,
                  children: zt(
                    D.value,
                    D.format
                  )
                }
              ),
              /* @__PURE__ */ l.jsx(
                f,
                {
                  className: _e.analytics__metric_label,
                  children: D.name
                }
              ),
              D.change !== void 0 && /* @__PURE__ */ l.jsxs(
                f,
                {
                  className: `${_e.analytics__metric_change} ${D.trend ? _e[`analytics__metric_change--${D.trend}`] : ""}`,
                  children: [
                    D.change > 0 ? "+" : "",
                    D.change,
                    "%"
                  ]
                }
              )
            ]
          },
          D.id || fe
        ))
      }
    ), Bt = () => /* @__PURE__ */ l.jsxs(
      f,
      {
        className: _e.analytics__chart_container,
        style: { height: S },
        children: [
          /* @__PURE__ */ l.jsxs(
            f,
            {
              className: _e.analytics__chart_loading,
              children: [
                "📊 Chart visualization (",
                pe,
                ") -",
                " ",
                W.length,
                " data points"
              ]
            }
          ),
          X && tt()
        ]
      }
    ), $t = () => {
      const D = v[0] || {
        name: "Metric",
        value: 0
      };
      return /* @__PURE__ */ l.jsxs(
        f,
        {
          className: _e.analytics__metric_container,
          children: [
            /* @__PURE__ */ l.jsx(
              f,
              {
                className: _e.analytics__metric_value,
                children: zt(D.value, D.format)
              }
            ),
            /* @__PURE__ */ l.jsx(
              f,
              {
                className: _e.analytics__metric_label,
                children: D.name
              }
            ),
            D.change !== void 0 && /* @__PURE__ */ l.jsxs(
              f,
              {
                className: `${_e.analytics__metric_change} ${D.trend ? _e[`analytics__metric_change--${D.trend}`] : ""}`,
                children: [
                  D.change > 0 ? "+" : "",
                  D.change,
                  "%"
                ]
              }
            )
          ]
        }
      );
    }, Vt = () => /* @__PURE__ */ l.jsx(
      f,
      {
        className: _e.analytics__heatmap_container,
        style: { height: S },
        children: /* @__PURE__ */ l.jsxs(
          f,
          {
            className: _e.analytics__chart_loading,
            children: [
              "🔥 Heatmap visualization - ",
              W.length,
              " ",
              "data points"
            ]
          }
        )
      }
    ), wi = () => /* @__PURE__ */ l.jsx(
      f,
      {
        className: _e.analytics__funnel_container,
        children: W.map((D, fe) => /* @__PURE__ */ l.jsx(
          f,
          {
            className: _e.analytics__funnel_step,
            children: /* @__PURE__ */ l.jsxs(
              f,
              {
                className: _e.analytics__funnel_step_content,
                children: [
                  /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: _e.analytics__funnel_step_label,
                      children: D.label || `Step ${fe + 1}`
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: _e.analytics__funnel_step_value,
                      children: D.value || 0
                    }
                  )
                ]
              }
            )
          },
          fe
        ))
      }
    ), ki = () => /* @__PURE__ */ l.jsx(
      f,
      {
        className: _e.analytics__chart_container,
        style: { height: S },
        children: /* @__PURE__ */ l.jsxs(
          f,
          {
            className: _e.analytics__chart_loading,
            children: [
              "📋 Cohort analysis - ",
              v.length,
              " cohorts"
            ]
          }
        )
      }
    ), ye = () => /* @__PURE__ */ l.jsx(
      f,
      {
        className: _e.analytics__chart_container,
        children: /* @__PURE__ */ l.jsxs(
          f,
          {
            className: _e.analytics__chart_loading,
            children: [
              "📊 Report view - ",
              W.length,
              " rows"
            ]
          }
        )
      }
    ), Ne = () => /* @__PURE__ */ l.jsxs(
      f,
      {
        kind: "grid-container",
        className: _e.analytics__dashboard_grid,
        children: [
          be && /* @__PURE__ */ l.jsxs(
            f,
            {
              className: _e.analytics__realtime_indicator,
              children: [
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: _e.analytics__live_dot
                  }
                ),
                "LIVE"
              ]
            }
          ),
          v.map((D, fe) => /* @__PURE__ */ l.jsxs(
            f,
            {
              className: _e.analytics__metric_container,
              children: [
                /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: _e.analytics__metric_value,
                    children: zt(
                      D.value,
                      D.format
                    )
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: _e.analytics__metric_label,
                    children: D.name
                  }
                )
              ]
            },
            D.id || fe
          ))
        ]
      }
    ), tt = () => /* @__PURE__ */ l.jsx(f, { className: _e.analytics__chart_legend, children: x.map((D, fe) => /* @__PURE__ */ l.jsxs(
      f,
      {
        className: _e.analytics__chart_legend_item,
        children: [
          /* @__PURE__ */ l.jsx(
            f,
            {
              className: _e.analytics__chart_legend_item_color,
              style: { backgroundColor: D }
            }
          ),
          /* @__PURE__ */ l.jsx("span", { children: "Series " })
        ]
      },
      fe
    )) }), Tt = () => ie ? /* @__PURE__ */ l.jsxs(f, { className: _e.analytics__footer, children: [
      /* @__PURE__ */ l.jsx(f, { children: De && /* @__PURE__ */ l.jsxs(
        "span",
        {
          className: _e.analytics__last_updated,
          children: [
            "Last updated:",
            " ",
            De.toLocaleTimeString()
          ]
        }
      ) }),
      /* @__PURE__ */ l.jsx(f, { children: F && /* @__PURE__ */ l.jsxs(
        "span",
        {
          className: _e.analytics__auto_refresh,
          children: [
            "Auto-refresh: ",
            H / 1e3,
            "s"
          ]
        }
      ) })
    ] }) : null, oi = [
      _e.analytics__container,
      _e[`analytics--${d}`],
      _e[`analytics--${h}`],
      A && _e["analytics--loading"],
      R && _e["analytics--error"],
      V && _e["analytics--refreshable"],
      B && _e["analytics--exportable"],
      n
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: ke,
        className: oi,
        style: a,
        "aria-label": r || `${d} analytics`,
        "data-analytics-kind": c,
        "data-analytics-type": he.type,
        ...re,
        children: [
          wt(),
          ni(),
          /* @__PURE__ */ l.jsx(f, { className: _e.analytics__content, children: At() }),
          Tt()
        ]
      }
    );
  }
);
Np.displayName = "Analytics";
const Ep = "_baseCard_141tz_117", Ip = "_cardHover_141tz_221", Lp = "_cardClickable_141tz_226", Ap = "_friendCardHeader_141tz_271", Mp = "_friendStatusDot_141tz_278", Op = "_friendUsername_141tz_322", Rp = "_friendCardActions_141tz_330", Dp = "_notificationHeader_141tz_364", Bp = "_notificationIcon_141tz_371", ut = {
  baseCard: Ep,
  "card-default": "_card-default_141tz_158",
  "card-elevated": "_card-elevated_141tz_165",
  "card-outlined": "_card-outlined_141tz_172",
  "card-filled": "_card-filled_141tz_184",
  "card-small": "_card-small_141tz_193",
  "card-medium": "_card-medium_141tz_197",
  "card-large": "_card-large_141tz_201",
  "card-padding-none": "_card-padding-none_141tz_205",
  "card-padding-small": "_card-padding-small_141tz_209",
  "card-padding-medium": "_card-padding-medium_141tz_213",
  "card-padding-large": "_card-padding-large_141tz_217",
  cardHover: Ip,
  cardClickable: Lp,
  "friend-card": "_friend-card_141tz_264",
  friendCardHeader: Ap,
  friendStatusDot: Mp,
  "status-inmatch": "_status-inmatch_141tz_306",
  "status-idle": "_status-idle_141tz_310",
  "status-online": "_status-online_141tz_314",
  "status-offline": "_status-offline_141tz_318",
  friendUsername: Op,
  friendCardActions: Rp,
  "game-card": "_game-card_141tz_337",
  "profile-card": "_profile-card_141tz_341",
  "notification-card": "_notification-card_141tz_348",
  "notification-warning": "_notification-warning_141tz_351",
  "notification-error": "_notification-error_141tz_354",
  "notification-success": "_notification-success_141tz_357",
  "notification-info": "_notification-info_141tz_360",
  notificationHeader: Dp,
  notificationIcon: Bp,
  "stats-card": "_stats-card_141tz_377",
  "card-title": "_card-title_141tz_381",
  "stats-card__value": "_stats-card__value_141tz_385",
  "stats-card__label": "_stats-card__label_141tz_389",
  "loading-shimmer": "_loading-shimmer_141tz_1"
}, al = {
  // Basic variants
  default: {
    variant: "default",
    size: "medium",
    padding: "medium",
    behavior: "static"
  },
  elevated: {
    variant: "elevated",
    size: "medium",
    padding: "medium",
    behavior: "static",
    hover: !0
  },
  outlined: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    behavior: "static"
  },
  filled: {
    variant: "filled",
    size: "medium",
    padding: "medium",
    behavior: "static"
  },
  // Specialized UI cards
  friend: {
    variant: "default",
    size: "medium",
    padding: "medium",
    hover: !0,
    behavior: "interactive",
    className: ut["friend-card"]
  },
  game: {
    variant: "elevated",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable",
    className: ut["game-card"]
  },
  profile: {
    variant: "elevated",
    size: "large",
    padding: "large",
    hover: !0,
    behavior: "hoverable",
    className: ut["profile-card"]
  },
  notification: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    behavior: "static",
    className: ut["notification-card"]
  },
  stats: {
    variant: "filled",
    size: "medium",
    padding: "medium",
    hover: !0,
    behavior: "hoverable",
    className: ut["stats-card"]
  },
  // App-specific cards
  settings: {
    variant: "default",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable"
  },
  achievement: {
    variant: "elevated",
    size: "small",
    padding: "small",
    hover: !0,
    behavior: "hoverable"
  },
  puzzle: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable"
  },
  leaderboard: {
    variant: "default",
    size: "medium",
    padding: "small",
    behavior: "static"
  },
  // Game-specific cards
  "chat-preview": {
    variant: "outlined",
    size: "small",
    padding: "small",
    hover: !0,
    clickable: !0,
    behavior: "clickable"
  },
  "room-info": {
    variant: "elevated",
    size: "large",
    padding: "large",
    behavior: "static"
  },
  "match-summary": {
    variant: "elevated",
    size: "large",
    padding: "medium",
    behavior: "static"
  },
  "user-status": {
    variant: "default",
    size: "small",
    padding: "small",
    hover: !0,
    behavior: "hoverable"
  },
  // Custom fallback
  custom: {
    variant: "default",
    size: "medium",
    padding: "medium",
    behavior: "static"
  }
}, Bi = (t, n) => ({
  ...al[t],
  ...n
}), _S = {
  // User interface cards
  userInterface: {
    friend: "friend",
    profile: "profile",
    settings: "settings",
    notification: "notification"
  },
  // Game cards
  gameInterface: {
    puzzle: "puzzle",
    game: "game",
    room: "room-info",
    match: "match-summary",
    chat: "chat-preview"
  },
  // Information cards
  informationDisplay: {
    stats: "stats",
    achievement: "achievement",
    leaderboard: "leaderboard",
    userStatus: "user-status"
  },
  // Layout cards
  layoutElements: {
    default: "default",
    elevated: "elevated",
    outlined: "outlined",
    filled: "filled"
  }
}, dS = {
  infoCard: () => Bi("default", {
    padding: "large",
    hover: !0
  }),
  actionCard: () => Bi("elevated", {
    clickable: !0,
    hover: !0
  }),
  contentCard: () => Bi("outlined", {
    padding: "large"
  }),
  headerCard: () => Bi("filled", {
    padding: "medium",
    size: "large"
  }),
  compactCard: () => Bi("default", {
    size: "small",
    padding: "small"
  }),
  interactiveCard: () => Bi("elevated", {
    clickable: !0,
    hover: !0,
    behavior: "interactive"
  }),
  displayCard: () => Bi("default", {
    behavior: "static",
    padding: "medium"
  })
}, Dt = Le(
  ({
    children: t,
    className: n = "",
    variant: a,
    size: r,
    padding: c,
    hover: d,
    clickable: u,
    onClick: h,
    style: p,
    kind: g,
    title: y,
    subtitle: v,
    content: z,
    actions: k,
    friend: N,
    onChallenge: P,
    onMessage: $,
    onRemove: F,
    unreadCount: H = 0,
    notificationType: A = "info",
    statValue: R,
    statLabel: T,
    ...E
  }, J) => {
    const G = g ? al[g] : null, B = a || (G == null ? void 0 : G.variant) || "default", M = r || (G == null ? void 0 : G.size) || "medium", j = c || (G == null ? void 0 : G.padding) || "medium", V = d !== void 0 ? d : (G == null ? void 0 : G.hover) || !1, Q = u !== void 0 ? u : (G == null ? void 0 : G.clickable) || !1, le = [
      ut.baseCard,
      ut[`card-${B}`],
      ut[`card-${M}`],
      ut[`card-padding-${j}`],
      V && ut.cardHover,
      Q && ut.cardClickable,
      G == null ? void 0 : G.className,
      // Add kind-specific styling
      n
    ].filter(Boolean).join(" "), ae = (x) => {
      Q && (h == null || h(x));
    }, te = () => {
      if (!N) return null;
      const x = (ie) => ie.online && ie.inMatch ? { text: "In match", color: "#a259f7" } : ie.online && ie.idle ? { text: "Idle", color: "#fbbf24" } : ie.online ? { text: "Online", color: "#22c55e" } : { text: "Offline", color: "#64748b" }, O = {
        "In match": "status-inmatch",
        Idle: "status-idle",
        Online: "status-online",
        Offline: "status-offline"
      }, S = x(N), Z = O[S.text] || "status-offline";
      return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs(f, { className: ut.friendCardHeader, children: [
          /* @__PURE__ */ l.jsx(
            "span",
            {
              className: `${ut.friendStatusDot} ${ut[Z]}`
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: ut.friendUsername, children: N.username })
        ] }),
        /* @__PURE__ */ l.jsxs(f, { className: ut.friendCardActions, children: [
          P && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => P(N.id),
              children: "Challenge"
            }
          ),
          $ && /* @__PURE__ */ l.jsxs("button", { onClick: () => $(N.id), children: [
            "Message",
            H > 0 ? ` (${H})` : ""
          ] }),
          F && /* @__PURE__ */ l.jsx("button", { onClick: () => F(N.id), children: "Remove" })
        ] })
      ] });
    }, ce = () => g !== "stats" ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      R && /* @__PURE__ */ l.jsx(
        f,
        {
          className: ut["stats-card__value"],
          children: R
        }
      ),
      T && /* @__PURE__ */ l.jsx(
        f,
        {
          className: ut["stats-card__label"],
          children: T
        }
      )
    ] }), w = () => {
      if (g !== "notification") return null;
      const x = () => {
        switch (A) {
          case "success":
            return "✅";
          case "warning":
            return "⚠️";
          case "error":
            return "❌";
          case "info":
          default:
            return "ℹ️";
        }
      };
      return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs(
          f,
          {
            className: `${ut.notificationHeader} notification-${A}`,
            children: [
              /* @__PURE__ */ l.jsx("span", { className: ut.notificationIcon, children: x() }),
              y && /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: y })
            ]
          }
        ),
        v && /* @__PURE__ */ l.jsx("p", { className: "card-subtitle", children: v }),
        z && /* @__PURE__ */ l.jsx(f, { className: "card-content", children: z }),
        t,
        k && /* @__PURE__ */ l.jsx(f, { className: "card-actions", children: k })
      ] });
    }, q = () => g === "friend" ? te() : g === "stats" ? ce() : g === "notification" ? w() : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      y && /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: y }),
      v && /* @__PURE__ */ l.jsx("p", { className: "card-subtitle", children: v }),
      z && /* @__PURE__ */ l.jsx(f, { className: "card-content", children: z }),
      t,
      k && /* @__PURE__ */ l.jsx(f, { className: "card-actions", children: k })
    ] });
    return /* @__PURE__ */ l.jsx(
      f,
      {
        ref: J,
        className: le,
        onClick: ae,
        style: p,
        ...E,
        children: q()
      }
    );
  }
);
Dt.displayName = "Card";
function uS(t, n = {}) {
  return /* @__PURE__ */ l.jsx(Dt, { kind: t, ...n });
}
function mS(t, n, a = {}) {
  return /* @__PURE__ */ l.jsx(Dt, { kind: t, ...a });
}
const hS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "friend", ...t }), pS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "profile", ...t }), fS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "notification", ...t }), gS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "stats", ...t }), bS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "game", ...t }), yS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "puzzle", ...t }), xS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "room-info", ...t }), vS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "match-summary", ...t }), wS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "default", hover: !0, ...t }), kS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "elevated", clickable: !0, hover: !0, ...t }), SS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "outlined", ...t });
var Ro = { exports: {} }, no = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ds;
function $p() {
  if (ds) return no;
  ds = 1;
  var t = it;
  function n(p, g) {
    return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
  }
  var a = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, c = t.useRef, d = t.useEffect, u = t.useMemo, h = t.useDebugValue;
  return no.useSyncExternalStoreWithSelector = function(p, g, y, v, z) {
    var k = c(null);
    if (k.current === null) {
      var N = { hasValue: !1, value: null };
      k.current = N;
    } else N = k.current;
    k = u(
      function() {
        function $(T) {
          if (!F) {
            if (F = !0, H = T, T = v(T), z !== void 0 && N.hasValue) {
              var E = N.value;
              if (z(E, T))
                return A = E;
            }
            return A = T;
          }
          if (E = A, a(H, T)) return E;
          var J = v(T);
          return z !== void 0 && z(E, J) ? (H = T, E) : (H = T, A = J);
        }
        var F = !1, H, A, R = y === void 0 ? null : y;
        return [
          function() {
            return $(g());
          },
          R === null ? void 0 : function() {
            return $(R());
          }
        ];
      },
      [g, y, v, z]
    );
    var P = r(p, k[0], k[1]);
    return d(
      function() {
        N.hasValue = !0, N.value = P;
      },
      [P]
    ), h(P), P;
  }, no;
}
var ao = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function Fp() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, g) {
      return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = it, a = typeof Object.is == "function" ? Object.is : t, r = n.useSyncExternalStore, c = n.useRef, d = n.useEffect, u = n.useMemo, h = n.useDebugValue;
    ao.useSyncExternalStoreWithSelector = function(p, g, y, v, z) {
      var k = c(null);
      if (k.current === null) {
        var N = { hasValue: !1, value: null };
        k.current = N;
      } else N = k.current;
      k = u(
        function() {
          function $(T) {
            if (!F) {
              if (F = !0, H = T, T = v(T), z !== void 0 && N.hasValue) {
                var E = N.value;
                if (z(E, T))
                  return A = E;
              }
              return A = T;
            }
            if (E = A, a(H, T))
              return E;
            var J = v(T);
            return z !== void 0 && z(E, J) ? (H = T, E) : (H = T, A = J);
          }
          var F = !1, H, A, R = y === void 0 ? null : y;
          return [
            function() {
              return $(g());
            },
            R === null ? void 0 : function() {
              return $(R());
            }
          ];
        },
        [g, y, v, z]
      );
      var P = r(p, k[0], k[1]);
      return d(
        function() {
          N.hasValue = !0, N.value = P;
        },
        [P]
      ), h(P), P;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ao;
}
process.env.NODE_ENV === "production" ? Ro.exports = $p() : Ro.exports = Fp();
var Hp = Ro.exports, oo = /* @__PURE__ */ Symbol.for("react-redux-context"), ro = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Up() {
  if (!Pi.createContext) return {};
  const t = ro[oo] ?? (ro[oo] = /* @__PURE__ */ new Map());
  let n = t.get(Pi.createContext);
  return n || (n = Pi.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(Pi.createContext, n)), n;
}
var Vi = /* @__PURE__ */ Up();
function Wo(t = Vi) {
  return function() {
    const a = Pi.useContext(t);
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return a;
  };
}
var ol = /* @__PURE__ */ Wo();
function rl(t = Vi) {
  const n = t === Vi ? ol : (
    // @ts-ignore
    Wo(t)
  ), a = () => {
    const { store: r } = n();
    return r;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var Zp = /* @__PURE__ */ rl();
function Wp(t = Vi) {
  const n = t === Vi ? Zp : rl(t), a = () => n().dispatch;
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var vi = /* @__PURE__ */ Wp(), Vp = (t, n) => t === n;
function Gp(t = Vi) {
  const n = t === Vi ? ol : Wo(t), a = (r, c = {}) => {
    const { equalityFn: d = Vp } = typeof c == "function" ? { equalityFn: c } : c;
    if (process.env.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof d != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const u = n(), { store: h, subscription: p, getServerState: g } = u, y = Pi.useRef(!0), v = Pi.useCallback(
      {
        [r.name](k) {
          const N = r(k);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: P = {} } = typeof c == "function" ? {} : c, { identityFunctionCheck: $, stabilityCheck: F } = u, {
              identityFunctionCheck: H,
              stabilityCheck: A
            } = {
              stabilityCheck: F,
              identityFunctionCheck: $,
              ...P
            };
            if (A === "always" || A === "once" && y.current) {
              const R = r(k);
              if (!d(N, R)) {
                let T;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: T } = E);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: k,
                    selected: N,
                    selected2: R,
                    stack: T
                  }
                );
              }
            }
            if ((H === "always" || H === "once" && y.current) && N === k) {
              let R;
              try {
                throw new Error();
              } catch (T) {
                ({ stack: R } = T);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: R }
              );
            }
            y.current && (y.current = !1);
          }
          return N;
        }
      }[r.name],
      [r]
    ), z = Hp.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      h.getState,
      g || h.getState,
      v,
      d
    );
    return Pi.useDebugValue(z), z;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var It = /* @__PURE__ */ Gp();
const ms = {
  // Legends
  "chart-legend": {
    kind: "chart-legend",
    variant: "default",
    position: "bottom",
    orientation: "horizontal",
    showIcons: !0,
    showValues: !1,
    interactive: !0,
    spacing: "normal",
    size: "medium"
  },
  "legend-horizontal": {
    kind: "legend-horizontal",
    variant: "default",
    position: "bottom",
    orientation: "horizontal",
    showIcons: !0,
    showValues: !1,
    interactive: !0,
    spacing: "normal"
  },
  "legend-vertical": {
    kind: "legend-vertical",
    variant: "default",
    position: "right",
    orientation: "vertical",
    showIcons: !0,
    showValues: !0,
    interactive: !0,
    spacing: "normal"
  },
  "legend-grid": {
    kind: "legend-grid",
    variant: "modern",
    position: "bottom",
    orientation: "horizontal",
    showIcons: !0,
    showValues: !0,
    interactive: !0,
    spacing: "loose"
  },
  "legend-minimal": {
    kind: "legend-minimal",
    variant: "minimal",
    position: "bottom",
    orientation: "horizontal",
    showIcons: !1,
    showValues: !1,
    interactive: !0,
    spacing: "tight",
    size: "small"
  },
  // Tooltips
  "chart-tooltip": {
    kind: "chart-tooltip",
    variant: "default",
    position: "floating",
    followCursor: !0,
    showArrow: !0,
    multiValue: !1
  },
  "tooltip-simple": {
    kind: "tooltip-simple",
    variant: "minimal",
    position: "floating",
    followCursor: !0,
    showArrow: !1,
    multiValue: !1
  },
  "tooltip-detailed": {
    kind: "tooltip-detailed",
    variant: "modern",
    position: "floating",
    followCursor: !1,
    showArrow: !0,
    multiValue: !0
  },
  "tooltip-custom": {
    kind: "tooltip-custom",
    variant: "glass",
    position: "floating",
    followCursor: !0,
    showArrow: !0,
    multiValue: !0
  },
  // Filter Controls
  "chart-filter-controls": {
    kind: "chart-filter-controls",
    variant: "default",
    position: "top",
    allowMultiSelect: !0,
    showSelectAll: !0,
    searchable: !1,
    spacing: "normal"
  },
  "filter-checkboxes": {
    kind: "filter-checkboxes",
    variant: "default",
    position: "top",
    allowMultiSelect: !0,
    showSelectAll: !0,
    searchable: !1,
    orientation: "vertical"
  },
  "filter-buttons": {
    kind: "filter-buttons",
    variant: "modern",
    position: "top",
    allowMultiSelect: !0,
    showSelectAll: !1,
    searchable: !1,
    orientation: "horizontal",
    spacing: "tight"
  },
  "filter-dropdown": {
    kind: "filter-dropdown",
    variant: "default",
    position: "top",
    allowMultiSelect: !1,
    showSelectAll: !1,
    searchable: !0
  },
  "filter-multi-select": {
    kind: "filter-multi-select",
    variant: "modern",
    position: "top",
    allowMultiSelect: !0,
    showSelectAll: !0,
    searchable: !0
  },
  // Chart Controls
  "chart-controls": {
    kind: "chart-controls",
    variant: "default",
    position: "top",
    spacing: "normal",
    size: "medium"
  },
  "zoom-controls": {
    kind: "zoom-controls",
    variant: "compact",
    position: "overlay",
    spacing: "tight",
    size: "small"
  },
  "time-range-selector": {
    kind: "time-range-selector",
    variant: "modern",
    position: "top",
    spacing: "normal",
    size: "medium"
  },
  "data-series-toggle": {
    kind: "data-series-toggle",
    variant: "default",
    position: "top",
    allowMultiSelect: !0,
    showSelectAll: !0,
    orientation: "horizontal",
    spacing: "normal"
  }
}, qp = (t) => ms[t] || ms["chart-legend"], Kp = {
  // Global
  isLoading: !1,
  globalError: null,
  // Drag and drop
  dragState: {
    isDragging: !1,
    draggedItem: null,
    dropZone: null
  },
  // Component collections
  tables: {},
  forms: {},
  components: {},
  inputs: {},
  switches: {},
  media: {},
  charts: {},
  notifications: {},
  selects: {},
  radios: {},
  maps: {},
  cards: {},
  ranges: {},
  chats: {}
}, sl = Wt({
  name: "ui",
  initialState: Kp,
  reducers: {
    // Global UI actions
    setGlobalLoading: (t, n) => {
      t.isLoading = n.payload;
    },
    setGlobalError: (t, n) => {
      t.globalError = n.payload;
    },
    clearGlobalError: (t) => {
      t.globalError = null;
    },
    // Drag and drop actions
    startDrag: (t, n) => {
      t.dragState.isDragging = !0, t.dragState.draggedItem = n.payload.item, t.dragState.dropZone = n.payload.dropZone || null;
    },
    endDrag: (t) => {
      t.dragState.isDragging = !1, t.dragState.draggedItem = null, t.dragState.dropZone = null;
    },
    setDropZone: (t, n) => {
      t.dragState.dropZone = n.payload;
    },
    // Table actions
    initializeTable: (t, n) => {
      const { tableId: a, config: r = {} } = n.payload;
      t.tables[a] = {
        sorting: { field: null, direction: "asc" },
        filters: {},
        searchTerm: "",
        selectedRows: [],
        expandedRows: [],
        editingCell: null,
        currentPage: 1,
        pageSize: 10,
        ...r
      };
    },
    updateTableSorting: (t, n) => {
      const { tableId: a, field: r, direction: c } = n.payload;
      t.tables[a] && (t.tables[a].sorting = {
        field: r,
        direction: c
      });
    },
    updateTableFilters: (t, n) => {
      const { tableId: a, filters: r } = n.payload;
      t.tables[a] && (t.tables[a].filters = {
        ...t.tables[a].filters,
        ...r
      });
    },
    setTableSearchTerm: (t, n) => {
      const { tableId: a, searchTerm: r } = n.payload;
      t.tables[a] && (t.tables[a].searchTerm = r);
    },
    toggleTableRowSelection: (t, n) => {
      const { tableId: a, rowId: r } = n.payload;
      if (t.tables[a]) {
        const c = t.tables[a].selectedRows, d = c.indexOf(r);
        d > -1 ? c.splice(d, 1) : c.push(r);
      }
    },
    // Form actions
    initializeForm: (t, n) => {
      const { formId: a, initialData: r = {} } = n.payload;
      t.forms[a] = {
        data: r,
        errors: {},
        touched: {},
        isSubmitting: !1,
        isDirty: !1,
        isValid: !0
      };
    },
    updateForms: (t, n) => {
      const { formId: a, field: r, value: c } = n.payload;
      t.forms[a] && (t.forms[a].data[r] = c, t.forms[a].touched[r] = !0, t.forms[a].isDirty = !0);
    },
    setFormError: (t, n) => {
      const { formId: a, field: r, error: c } = n.payload;
      t.forms[a] && (t.forms[a].errors[r] = c, t.forms[a].isValid = Object.keys(t.forms[a].errors).length === 0);
    },
    clearFormErrors: (t, n) => {
      const { formId: a, field: r } = n.payload;
      t.forms[a] && (r ? delete t.forms[a].errors[r] : t.forms[a].errors = {}, t.forms[a].isValid = Object.keys(t.forms[a].errors).length === 0);
    },
    setFormSubmitting: (t, n) => {
      const { formId: a, isSubmitting: r } = n.payload;
      t.forms[a] && (t.forms[a].isSubmitting = r);
    },
    // Generic component actions
    setComponentState: (t, n) => {
      const { componentId: a, updates: r } = n.payload;
      t.components[a] || (t.components[a] = {
        isLoading: !1,
        isVisible: !0,
        isExpanded: !1,
        isDragging: !1,
        isHovered: !1,
        isFocused: !1,
        error: null,
        data: null
      }), t.components[a] = {
        ...t.components[a],
        ...r
      };
    },
    // Input actions
    setInputValue: (t, n) => {
      const {
        inputId: a,
        value: r,
        error: c = null
      } = n.payload;
      t.inputs[a] = {
        ...t.inputs[a],
        value: r,
        error: c,
        isValid: !c
      };
    },
    setInputFocus: (t, n) => {
      const { inputId: a, isFocused: r } = n.payload;
      t.inputs[a] || (t.inputs[a] = {
        value: "",
        error: null,
        isFocused: !1,
        isValid: !0
      }), t.inputs[a].isFocused = r;
    },
    // Switch actions
    setSwitchState: (t, n) => {
      const {
        switchId: a,
        checked: r,
        disabled: c = !1
      } = n.payload;
      t.switches[a] = { checked: r, disabled: c };
    },
    // Media actions
    setMediaState: (t, n) => {
      const { mediaId: a, updates: r } = n.payload;
      t.media[a] || (t.media[a] = {
        isLoading: !1,
        hasError: !1,
        isPlaying: !1,
        hasLoaded: !1
      }), t.media[a] = {
        ...t.media[a],
        ...r
      };
    },
    // Chart actions
    initializeChart: (t, n) => {
      const {
        chartId: a,
        selectedSeries: r,
        isInteractive: c = !0,
        allowMultiSelect: d = !0
      } = n.payload;
      t.charts[a] = {
        selectedSeries: r,
        searchTerm: "",
        isInteractive: c,
        allowMultiSelect: d
      };
    },
    setChartSelectedSeries: (t, n) => {
      const { chartId: a, selectedSeries: r } = n.payload;
      t.charts[a] && (t.charts[a].selectedSeries = r);
    },
    setChartSearchTerm: (t, n) => {
      const { chartId: a, searchTerm: r } = n.payload;
      t.charts[a] && (t.charts[a].searchTerm = r);
    },
    toggleChartSeries: (t, n) => {
      const { chartId: a, seriesId: r } = n.payload;
      if (t.charts[a]) {
        const c = t.charts[a], d = c.selectedSeries.includes(r);
        c.allowMultiSelect ? d ? c.selectedSeries = c.selectedSeries.filter(
          (u) => u !== r
        ) : c.selectedSeries = [
          ...c.selectedSeries,
          r
        ] : c.selectedSeries = d ? [] : [r];
      }
    },
    selectAllChartSeries: (t, n) => {
      const { chartId: a, allSeriesIds: r } = n.payload;
      if (t.charts[a]) {
        const c = t.charts[a], d = r.every(
          (u) => c.selectedSeries.includes(u)
        );
        c.selectedSeries = d ? [] : r;
      }
    },
    // Notification component actions
    setNotificationState: (t, n) => {
      const { notificationId: a, updates: r } = n.payload;
      t.notifications[a] || (t.notifications[a] = {
        isVisible: !1,
        isPaused: !1,
        progress: 100
      }), t.notifications[a] = {
        ...t.notifications[a],
        ...r
      };
    },
    // Select component actions
    setSelectState: (t, n) => {
      const { selectId: a, updates: r } = n.payload;
      t.selects[a] || (t.selects[a] = {
        internalValue: "",
        isOpen: !1,
        searchValue: "",
        focusedIndex: -1
      }), t.selects[a] = {
        ...t.selects[a],
        ...r
      };
    },
    // Radio component actions
    setRadioState: (t, n) => {
      const { radioId: a, updates: r } = n.payload;
      t.radios[a] || (t.radios[a] = {
        internalValue: void 0
      }), t.radios[a] = {
        ...t.radios[a],
        ...r
      };
    },
    // Map component actions
    setMapState: (t, n) => {
      const { mapId: a, updates: r } = n.payload;
      t.maps[a] || (t.maps[a] = {
        currentZoom: 1,
        currentCenter: { lat: 0, lng: 0 }
      }), t.maps[a] = {
        ...t.maps[a],
        ...r
      };
    },
    // Card component actions
    setCardState: (t, n) => {
      const { cardId: a, updates: r } = n.payload;
      t.cards[a] || (t.cards[a] = {
        isHovered: !1
      }), t.cards[a] = {
        ...t.cards[a],
        ...r
      };
    },
    // Range component actions
    setRangeState: (t, n) => {
      const { rangeId: a, updates: r } = n.payload;
      t.ranges[a] || (t.ranges[a] = {
        value: 0,
        isDragging: !1,
        showTooltip: !1
      }), t.ranges[a] = {
        ...t.ranges[a],
        ...r
      };
    },
    // Chat component actions
    setChatState: (t, n) => {
      const { chatId: a, updates: r } = n.payload;
      t.chats[a] || (t.chats[a] = {
        inputValue: ""
      }), t.chats[a] = {
        ...t.chats[a],
        ...r
      };
    },
    // Cleanup actions
    cleanupComponent: (t, n) => {
      const a = n.payload;
      delete t.components[a], delete t.inputs[a], delete t.switches[a], delete t.media[a], delete t.charts[a], delete t.notifications[a], delete t.selects[a], delete t.radios[a], delete t.maps[a], delete t.cards[a], delete t.ranges[a], delete t.chats[a];
    },
    cleanupForm: (t, n) => {
      const a = n.payload;
      delete t.forms[a];
    },
    cleanupTable: (t, n) => {
      const a = n.payload;
      delete t.tables[a];
    },
    cleanupChart: (t, n) => {
      const a = n.payload;
      delete t.charts[a];
    }
  }
}), {
  setGlobalLoading: CS,
  setGlobalError: jS,
  clearGlobalError: zS,
  startDrag: TS,
  endDrag: PS,
  setDropZone: NS,
  initializeTable: ES,
  updateTableSorting: IS,
  updateTableFilters: LS,
  setTableSearchTerm: AS,
  toggleTableRowSelection: MS,
  initializeForm: OS,
  updateForms: RS,
  setFormError: DS,
  clearFormErrors: BS,
  setFormSubmitting: $S,
  setComponentState: kn,
  setInputValue: FS,
  setInputFocus: HS,
  setSwitchState: so,
  setMediaState: lo,
  setNotificationState: US,
  setSelectState: hs,
  setRadioState: co,
  setMapState: Yp,
  setCardState: ZS,
  setRangeState: Sn,
  setChatState: WS,
  initializeChart: Jp,
  setChartSelectedSeries: Xp,
  setChartSearchTerm: Qp,
  toggleChartSeries: ef,
  selectAllChartSeries: tf,
  cleanupComponent: Gi,
  cleanupForm: VS,
  cleanupTable: GS,
  cleanupChart: nf
} = sl.actions, af = (t) => (n) => n.ui.components[t], of = (t) => (n) => n.ui.switches[t], rf = (t) => (n) => n.ui.media[t], sf = (t) => (n) => n.ui.selects[t], lf = (t) => (n) => n.ui.radios[t], cf = (t) => (n) => n.ui.maps[t], _f = (t) => (n) => n.ui.ranges[t], df = (t) => (n) => {
  var a;
  return ((a = n.ui.charts[t]) == null ? void 0 : a.selectedSeries) || [];
}, uf = (t) => (n) => {
  var a;
  return ((a = n.ui.charts[t]) == null ? void 0 : a.searchTerm) || "";
}, ll = sl.reducer, mf = "_container_sko1j_126", hf = "_flex_sko1j_257", pf = "_grid_sko1j_353", ff = "_relative_sko1j_735", gf = "_absolute_sko1j_739", bf = "_fixed_sko1j_743", yf = "_sticky_sko1j_747", xf = "_truncate_sko1j_886", vf = "_border_sko1j_946", wf = "_rounded_sko1j_986", kf = "_shadow_sko1j_1018", Sf = "_transition_sko1j_1090", Cf = "_small_sko1j_1590", jf = "_large_sko1j_1594", zf = "_card_sko1j_1642", Tf = "_chart_sko1j_1767", Pf = "_legend_sko1j_1848", Nf = "_legend__item_sko1j_1854", Ef = "_active_sko1j_1881", If = "_legend__marker_sko1j_1886", Lf = "_legend__icon_sko1j_1895", Af = "_legend__label_sko1j_1907", Mf = "_legend__value_sko1j_1912", Of = "_filter_sko1j_1918", Rf = "_filter__search_sko1j_1924", Df = "_filter__select_all_sko1j_1956", Bf = "_filter__items_sko1j_2023", $f = "_filter__item_sko1j_2023", Ff = "_tooltip_sko1j_2050", Hf = "_tooltip__arrow_sko1j_2060", Uf = "_tooltip__content_sko1j_2072", Zf = "_controls_sko1j_2077", Wf = "_controls__button_sko1j_2084", Vf = "_controls__select_sko1j_2150", Ye = {
  container: mf,
  "container-sm": "_container-sm_sko1j_142",
  "container-md": "_container-md_sko1j_158",
  "container-lg": "_container-lg_sko1j_174",
  "container-xl": "_container-xl_sko1j_190",
  "container-2xl": "_container-2xl_sko1j_206",
  "safe-area": "_safe-area_sko1j_222",
  "overflow-hidden": "_overflow-hidden_sko1j_228",
  "overflow-auto": "_overflow-auto_sko1j_232",
  "overflow-x-auto": "_overflow-x-auto_sko1j_237",
  "overflow-y-auto": "_overflow-y-auto_sko1j_243",
  "box-border": "_box-border_sko1j_249",
  "box-content": "_box-content_sko1j_253",
  flex: hf,
  "flex-col": "_flex-col_sko1j_261",
  "flex-row": "_flex-row_sko1j_266",
  "flex-wrap": "_flex-wrap_sko1j_271",
  "flex-nowrap": "_flex-nowrap_sko1j_276",
  "flex-center": "_flex-center_sko1j_281",
  "flex-between": "_flex-between_sko1j_287",
  "justify-start": "_justify-start_sko1j_293",
  "justify-center": "_justify-center_sko1j_297",
  "justify-end": "_justify-end_sko1j_301",
  "justify-between": "_justify-between_sko1j_305",
  "justify-around": "_justify-around_sko1j_309",
  "items-start": "_items-start_sko1j_313",
  "items-center": "_items-center_sko1j_317",
  "items-end": "_items-end_sko1j_321",
  "items-stretch": "_items-stretch_sko1j_325",
  "flex-1": "_flex-1_sko1j_329",
  "flex-auto": "_flex-auto_sko1j_333",
  "flex-none": "_flex-none_sko1j_337",
  "flex-grow": "_flex-grow_sko1j_341",
  "flex-shrink": "_flex-shrink_sko1j_345",
  "flex-shrink-0": "_flex-shrink-0_sko1j_349",
  grid: pf,
  "grid-auto-fit": "_grid-auto-fit_sko1j_357",
  "grid-auto-fill": "_grid-auto-fill_sko1j_364",
  "grid-cols-1": "_grid-cols-1_sko1j_371",
  "grid-cols-2": "_grid-cols-2_sko1j_375",
  "grid-cols-3": "_grid-cols-3_sko1j_379",
  "grid-cols-4": "_grid-cols-4_sko1j_383",
  "grid-cols-6": "_grid-cols-6_sko1j_387",
  "grid-cols-12": "_grid-cols-12_sko1j_391",
  "gap-0": "_gap-0_sko1j_395",
  "gap-1": "_gap-1_sko1j_399",
  "gap-2": "_gap-2_sko1j_403",
  "gap-3": "_gap-3_sko1j_407",
  "gap-4": "_gap-4_sko1j_411",
  "gap-5": "_gap-5_sko1j_415",
  "gap-6": "_gap-6_sko1j_419",
  "gap-8": "_gap-8_sko1j_423",
  "gap-10": "_gap-10_sko1j_427",
  "gap-12": "_gap-12_sko1j_431",
  "p-0": "_p-0_sko1j_435",
  "p-1": "_p-1_sko1j_439",
  "p-2": "_p-2_sko1j_443",
  "p-3": "_p-3_sko1j_447",
  "p-4": "_p-4_sko1j_451",
  "p-5": "_p-5_sko1j_455",
  "p-6": "_p-6_sko1j_459",
  "p-8": "_p-8_sko1j_463",
  "p-10": "_p-10_sko1j_467",
  "p-12": "_p-12_sko1j_471",
  "px-0": "_px-0_sko1j_475",
  "px-1": "_px-1_sko1j_480",
  "px-2": "_px-2_sko1j_485",
  "px-3": "_px-3_sko1j_490",
  "px-4": "_px-4_sko1j_495",
  "px-6": "_px-6_sko1j_500",
  "py-0": "_py-0_sko1j_505",
  "py-1": "_py-1_sko1j_510",
  "py-2": "_py-2_sko1j_515",
  "py-3": "_py-3_sko1j_520",
  "py-4": "_py-4_sko1j_525",
  "py-6": "_py-6_sko1j_530",
  "m-0": "_m-0_sko1j_535",
  "m-1": "_m-1_sko1j_539",
  "m-2": "_m-2_sko1j_543",
  "m-3": "_m-3_sko1j_547",
  "m-4": "_m-4_sko1j_551",
  "m-auto": "_m-auto_sko1j_555",
  "mx-auto": "_mx-auto_sko1j_559",
  "my-auto": "_my-auto_sko1j_564",
  "mx-0": "_mx-0_sko1j_569",
  "mx-1": "_mx-1_sko1j_574",
  "mx-2": "_mx-2_sko1j_579",
  "mx-3": "_mx-3_sko1j_584",
  "mx-4": "_mx-4_sko1j_589",
  "my-0": "_my-0_sko1j_594",
  "my-1": "_my-1_sko1j_599",
  "my-2": "_my-2_sko1j_604",
  "my-3": "_my-3_sko1j_609",
  "my-4": "_my-4_sko1j_614",
  "w-full": "_w-full_sko1j_619",
  "w-auto": "_w-auto_sko1j_623",
  "w-fit": "_w-fit_sko1j_627",
  "w-min": "_w-min_sko1j_631",
  "w-max": "_w-max_sko1j_635",
  "max-w-none": "_max-w-none_sko1j_639",
  "max-w-xs": "_max-w-xs_sko1j_643",
  "max-w-sm": "_max-w-sm_sko1j_647",
  "max-w-md": "_max-w-md_sko1j_651",
  "max-w-lg": "_max-w-lg_sko1j_655",
  "max-w-xl": "_max-w-xl_sko1j_659",
  "max-w-2xl": "_max-w-2xl_sko1j_663",
  "max-w-3xl": "_max-w-3xl_sko1j_667",
  "max-w-4xl": "_max-w-4xl_sko1j_671",
  "max-w-5xl": "_max-w-5xl_sko1j_675",
  "max-w-6xl": "_max-w-6xl_sko1j_679",
  "max-w-7xl": "_max-w-7xl_sko1j_683",
  "max-w-full": "_max-w-full_sko1j_687",
  "min-w-0": "_min-w-0_sko1j_691",
  "min-w-full": "_min-w-full_sko1j_695",
  "h-auto": "_h-auto_sko1j_699",
  "h-fit": "_h-fit_sko1j_703",
  "h-full": "_h-full_sko1j_707",
  "h-screen": "_h-screen_sko1j_711",
  "max-h-full": "_max-h-full_sko1j_715",
  "max-h-screen": "_max-h-screen_sko1j_719",
  "min-h-0": "_min-h-0_sko1j_723",
  "min-h-full": "_min-h-full_sko1j_727",
  "min-h-screen": "_min-h-screen_sko1j_731",
  relative: ff,
  absolute: gf,
  fixed: bf,
  sticky: yf,
  static: "_static_sko1j_751",
  "inset-0": "_inset-0_sko1j_755",
  "top-0": "_top-0_sko1j_762",
  "right-0": "_right-0_sko1j_766",
  "bottom-0": "_bottom-0_sko1j_770",
  "left-0": "_left-0_sko1j_774",
  "text-left": "_text-left_sko1j_778",
  "text-center": "_text-center_sko1j_782",
  "text-right": "_text-right_sko1j_786",
  "text-justify": "_text-justify_sko1j_790",
  "text-xs": "_text-xs_sko1j_794",
  "text-sm": "_text-sm_sko1j_798",
  "text-base": "_text-base_sko1j_802",
  "text-lg": "_text-lg_sko1j_806",
  "text-xl": "_text-xl_sko1j_810",
  "text-2xl": "_text-2xl_sko1j_814",
  "text-3xl": "_text-3xl_sko1j_818",
  "text-4xl": "_text-4xl_sko1j_822",
  "font-normal": "_font-normal_sko1j_826",
  "font-medium": "_font-medium_sko1j_830",
  "font-semibold": "_font-semibold_sko1j_834",
  "font-bold": "_font-bold_sko1j_838",
  "leading-tight": "_leading-tight_sko1j_842",
  "leading-normal": "_leading-normal_sko1j_846",
  "leading-relaxed": "_leading-relaxed_sko1j_850",
  "text-primary": "_text-primary_sko1j_854",
  "text-secondary": "_text-secondary_sko1j_858",
  "text-muted": "_text-muted_sko1j_862",
  "text-inverse": "_text-inverse_sko1j_866",
  "text-blue": "_text-blue_sko1j_870",
  "text-red": "_text-red_sko1j_874",
  "text-green": "_text-green_sko1j_878",
  "text-yellow": "_text-yellow_sko1j_882",
  truncate: xf,
  "text-ellipsis": "_text-ellipsis_sko1j_893",
  "text-clip": "_text-clip_sko1j_900",
  "bg-transparent": "_bg-transparent_sko1j_906",
  "bg-white": "_bg-white_sko1j_910",
  "bg-gray-50": "_bg-gray-50_sko1j_914",
  "bg-gray-100": "_bg-gray-100_sko1j_918",
  "bg-gray-200": "_bg-gray-200_sko1j_922",
  "bg-primary": "_bg-primary_sko1j_926",
  "bg-secondary": "_bg-secondary_sko1j_930",
  "bg-success": "_bg-success_sko1j_934",
  "bg-danger": "_bg-danger_sko1j_938",
  "bg-warning": "_bg-warning_sko1j_942",
  border: vf,
  "border-0": "_border-0_sko1j_950",
  "border-t": "_border-t_sko1j_954",
  "border-r": "_border-r_sko1j_958",
  "border-b": "_border-b_sko1j_962",
  "border-l": "_border-l_sko1j_966",
  "border-gray-200": "_border-gray-200_sko1j_970",
  "border-gray-300": "_border-gray-300_sko1j_974",
  "border-primary": "_border-primary_sko1j_978",
  "border-danger": "_border-danger_sko1j_982",
  "rounded-none": "_rounded-none_sko1j_986",
  "rounded-sm": "_rounded-sm_sko1j_990",
  rounded: wf,
  "rounded-md": "_rounded-md_sko1j_998",
  "rounded-lg": "_rounded-lg_sko1j_1002",
  "rounded-xl": "_rounded-xl_sko1j_1006",
  "rounded-2xl": "_rounded-2xl_sko1j_1010",
  "rounded-full": "_rounded-full_sko1j_1014",
  "shadow-none": "_shadow-none_sko1j_1018",
  "shadow-sm": "_shadow-sm_sko1j_1022",
  shadow: kf,
  "shadow-md": "_shadow-md_sko1j_1030",
  "shadow-lg": "_shadow-lg_sko1j_1034",
  "shadow-xl": "_shadow-xl_sko1j_1038",
  "z-0": "_z-0_sko1j_1042",
  "z-10": "_z-10_sko1j_1046",
  "z-20": "_z-20_sko1j_1050",
  "z-30": "_z-30_sko1j_1054",
  "z-40": "_z-40_sko1j_1058",
  "z-50": "_z-50_sko1j_1062",
  "z-auto": "_z-auto_sko1j_1066",
  "z-dropdown": "_z-dropdown_sko1j_1070",
  "z-sticky": "_z-sticky_sko1j_1074",
  "z-fixed": "_z-fixed_sko1j_1078",
  "z-modal": "_z-modal_sko1j_1082",
  "z-tooltip": "_z-tooltip_sko1j_1086",
  "transition-none": "_transition-none_sko1j_1090",
  "transition-all": "_transition-all_sko1j_1094",
  "transition-fast": "_transition-fast_sko1j_1098",
  "transition-slow": "_transition-slow_sko1j_1102",
  "sr-only": "_sr-only_sko1j_1106",
  "focus-ring": "_focus-ring_sko1j_1118",
  "cursor-default": "_cursor-default_sko1j_1124",
  "cursor-pointer": "_cursor-pointer_sko1j_1128",
  "cursor-not-allowed": "_cursor-not-allowed_sko1j_1132",
  "select-none": "_select-none_sko1j_1136",
  "select-text": "_select-text_sko1j_1140",
  "select-all": "_select-all_sko1j_1144",
  "select-auto": "_select-auto_sko1j_1148",
  "pointer-events-none": "_pointer-events-none_sko1j_1152",
  "pointer-events-auto": "_pointer-events-auto_sko1j_1156",
  "gap-sm": "_gap-sm_sko1j_1160",
  "gap-md": "_gap-md_sko1j_1164",
  "gap-lg": "_gap-lg_sko1j_1168",
  "gap-xl": "_gap-xl_sko1j_1172",
  "p-sm": "_p-sm_sko1j_1176",
  "p-md": "_p-md_sko1j_1180",
  "p-lg": "_p-lg_sko1j_1184",
  "p-xl": "_p-xl_sko1j_1188",
  "m-sm": "_m-sm_sko1j_1192",
  "m-md": "_m-md_sko1j_1196",
  "m-lg": "_m-lg_sko1j_1200",
  "m-xl": "_m-xl_sko1j_1204",
  "text-gray": "_text-gray_sko1j_1208",
  "mobile:hidden": "_mobile:hidden_sko1j_1213",
  "mobile:block": "_mobile:block_sko1j_1216",
  "mobile:flex": "_mobile:flex_sko1j_1219",
  "mobile:grid": "_mobile:grid_sko1j_1222",
  "mobile:text-sm": "_mobile:text-sm_sko1j_1225",
  "mobile:text-xs": "_mobile:text-xs_sko1j_1228",
  "mobile:p-2": "_mobile:p-2_sko1j_1231",
  "mobile:px-2": "_mobile:px-2_sko1j_1234",
  "tablet:block": "_tablet:block_sko1j_1240",
  "tablet:flex": "_tablet:flex_sko1j_1243",
  "tablet:grid": "_tablet:grid_sko1j_1246",
  "tablet:hidden": "_tablet:hidden_sko1j_1249",
  "desktop:block": "_desktop:block_sko1j_1254",
  "desktop:flex": "_desktop:flex_sko1j_1257",
  "desktop:grid": "_desktop:grid_sko1j_1260",
  "desktop:hidden": "_desktop:hidden_sko1j_1263",
  "bg-gray": "_bg-gray_sko1j_914",
  "border-secondary": "_border-secondary_sko1j_1287",
  "border-gray": "_border-gray_sko1j_970",
  "shadow-glow": "_shadow-glow_sko1j_1323",
  "w-8": "_w-8_sko1j_1371",
  "w-10": "_w-10_sko1j_1375",
  "w-12": "_w-12_sko1j_1379",
  "w-16": "_w-16_sko1j_1383",
  "h-8": "_h-8_sko1j_1387",
  "h-10": "_h-10_sko1j_1391",
  "h-12": "_h-12_sko1j_1395",
  "h-16": "_h-16_sko1j_1399",
  "user-select-none": "_user-select-none_sko1j_1415",
  transition: Sf,
  "transition-colors": "_transition-colors_sko1j_1423",
  "transition-transform": "_transition-transform_sko1j_1427",
  "hover-scale": "_hover-scale_sko1j_1431",
  "fade-in": "_fade-in_sko1j_1438",
  "status-online": "_status-online_sko1j_1450",
  "status-offline": "_status-offline_sko1j_1460",
  "status-away": "_status-away_sko1j_1470",
  "status-busy": "_status-busy_sko1j_1480",
  "modal-overlay": "_modal-overlay_sko1j_1490",
  "modal-content": "_modal-content_sko1j_1504",
  "close-button-absolute": "_close-button-absolute_sko1j_1518",
  small: Cf,
  large: jf,
  "primary-button": "_primary-button_sko1j_1599",
  "secondary-button": "_secondary-button_sko1j_1603",
  card: zf,
  "input-base": "_input-base_sko1j_1656",
  "chat-window": "_chat-window_sko1j_1688",
  "chat-message": "_chat-message_sko1j_1699",
  "z-overlay": "_z-overlay_sko1j_1724",
  "mobile-hidden": "_mobile-hidden_sko1j_1729",
  "mobile-flex-col": "_mobile-flex-col_sko1j_1732",
  "mobile-text-center": "_mobile-text-center_sko1j_1735",
  "mobile-p-sm": "_mobile-p-sm_sko1j_1738",
  "mobile-gap-sm": "_mobile-gap-sm_sko1j_1741",
  "desktop-hidden": "_desktop-hidden_sko1j_1746",
  "print-hidden": "_print-hidden_sko1j_1751",
  chart: Tf,
  "chart--top": "_chart--top_sko1j_1781",
  "chart--bottom": "_chart--bottom_sko1j_1784",
  "chart--left": "_chart--left_sko1j_1787",
  "chart--right": "_chart--right_sko1j_1790",
  "chart--overlay": "_chart--overlay_sko1j_1793",
  "chart--horizontal": "_chart--horizontal_sko1j_1798",
  "chart--vertical": "_chart--vertical_sko1j_1801",
  "chart--spacing-tight": "_chart--spacing-tight_sko1j_1804",
  "chart--spacing-normal": "_chart--spacing-normal_sko1j_1807",
  "chart--spacing-loose": "_chart--spacing-loose_sko1j_1810",
  "chart--size-small": "_chart--size-small_sko1j_1813",
  "chart--size-medium": "_chart--size-medium_sko1j_1817",
  "chart--size-large": "_chart--size-large_sko1j_1821",
  "chart--modern": "_chart--modern_sko1j_1825",
  "chart--minimal": "_chart--minimal_sko1j_1829",
  "chart--compact": "_chart--compact_sko1j_1833",
  "chart--glass": "_chart--glass_sko1j_1837",
  "chart--game_style": "_chart--game_style_sko1j_1842",
  legend: Pf,
  legend__item: Nf,
  active: Ef,
  legend__marker: If,
  legend__icon: Lf,
  legend__label: Af,
  legend__value: Mf,
  filter: Of,
  filter__search: Rf,
  filter__select_all: Df,
  filter__items: Bf,
  filter__item: $f,
  tooltip: Ff,
  tooltip__arrow: Hf,
  tooltip__content: Uf,
  controls: Zf,
  controls__button: Wf,
  controls__select: Vf,
  "loading-shimmer": "_loading-shimmer_sko1j_1"
}, rt = Le(
  (t, n) => {
    const {
      kind: a,
      chartId: r,
      children: c,
      className: d,
      dataSeries: u = [],
      // Configuration overrides
      variant: h,
      position: p,
      orientation: g,
      // Features
      showIcons: y,
      showValues: v,
      interactive: z,
      followCursor: k,
      showArrow: N,
      multiValue: P,
      allowMultiSelect: $,
      showSelectAll: F,
      searchable: H,
      // Styling
      spacing: A,
      size: R,
      // Callbacks
      onSeriesToggle: T,
      onFilterChange: E,
      onTooltipShow: J,
      onTooltipHide: G,
      ...B
    } = t, M = qp(a), j = {
      ...M,
      variant: h || M.variant,
      position: p || M.position,
      orientation: g || M.orientation,
      showIcons: y !== void 0 ? y : M.showIcons,
      showValues: v !== void 0 ? v : M.showValues,
      interactive: z !== void 0 ? z : M.interactive,
      followCursor: k !== void 0 ? k : M.followCursor,
      showArrow: N !== void 0 ? N : M.showArrow,
      multiValue: P !== void 0 ? P : M.multiValue,
      allowMultiSelect: $ !== void 0 ? $ : M.allowMultiSelect,
      showSelectAll: F !== void 0 ? F : M.showSelectAll,
      searchable: H !== void 0 ? H : M.searchable,
      spacing: A || M.spacing,
      size: R || M.size
    }, V = vi(), Q = It(
      df(r)
    ), le = It(
      uf(r)
    );
    Te(() => {
      const S = u.filter((Z) => Z.visible).map((Z) => Z.id);
      return V(
        Jp({
          chartId: r,
          selectedSeries: S,
          isInteractive: j.interactive,
          allowMultiSelect: j.allowMultiSelect
        })
      ), () => {
        V(nf(r));
      };
    }, [r, V]);
    const ae = (S) => {
      if (!j.interactive) return;
      const Z = u.find(
        (X) => X.id === S
      );
      if (!Z) return;
      const ie = !Z.visible;
      if (Z.visible = ie, j.allowMultiSelect) {
        V(ef({ chartId: r, seriesId: S }));
        const X = ie ? [...Q, S] : Q.filter(
          (K) => K !== S
        );
        E == null || E(X);
      } else
        V(
          Xp({
            chartId: r,
            selectedSeries: [S]
          })
        ), E == null || E([S]);
      T == null || T(S, ie);
    }, te = () => {
      const S = u.every((ie) => ie.visible);
      u.forEach((ie) => ie.visible = !S);
      const Z = S ? [] : u.map((ie) => ie.id);
      V(
        tf({
          chartId: r,
          allSeriesIds: u.map((ie) => ie.id)
        })
      ), E == null || E(Z);
    }, ce = [
      Ye.chart,
      Ye[`chart--${j.kind}`],
      Ye[`chart--${j.variant}`],
      Ye[`chart--${j.position}`],
      j.orientation && Ye[`chart--${j.orientation}`],
      j.spacing && Ye[`chart--spacing-${j.spacing}`],
      j.size && Ye[`chart--size-${j.size}`],
      d
    ].filter(Boolean).join(" "), w = (S) => /* @__PURE__ */ l.jsxs(
      f,
      {
        className: `${Ye.legend__item} ${S.visible ? Ye["legend__item--active"] : ""}`,
        onClick: () => ae(S.id),
        children: [
          j.showIcons && /* @__PURE__ */ l.jsx(
            f,
            {
              className: Ye.legend__icon,
              style: { backgroundColor: S.color },
              children: S.icon
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: Ye.legend__label, children: S.label }),
          j.showValues && S.data && /* @__PURE__ */ l.jsx("span", { className: Ye.legend__value, children: S.data.length })
        ]
      },
      S.id
    ), q = () => {
      if (!j.kind.includes("filter")) return null;
      const S = j.searchable && le ? u.filter(
        (Z) => Z.label.toLowerCase().includes(le.toLowerCase())
      ) : u;
      return /* @__PURE__ */ l.jsxs(f, { className: Ye.filter, children: [
        j.searchable && /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search...",
            value: le,
            onChange: (Z) => V(
              Qp({
                chartId: r,
                searchTerm: Z.target.value
              })
            ),
            className: Ye.filter__search
          }
        ),
        j.showSelectAll && /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "secondary",
            onClick: te,
            className: Ye.filter__select_all,
            children: u.every((Z) => Z.visible) ? "Deselect All" : "Select All"
          }
        ),
        /* @__PURE__ */ l.jsx(f, { className: Ye.filter__items, children: S.map((Z) => /* @__PURE__ */ l.jsxs(
          "label",
          {
            className: Ye.filter__item,
            children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: j.allowMultiSelect ? "checkbox" : "radio",
                  checked: Z.visible,
                  onChange: () => ae(Z.id)
                }
              ),
              /* @__PURE__ */ l.jsx("span", { style: { color: Z.color }, children: Z.label })
            ]
          },
          Z.id
        )) })
      ] });
    }, x = () => j.kind.includes("tooltip") ? /* @__PURE__ */ l.jsxs(f, { className: Ye.tooltip, children: [
      j.showArrow && /* @__PURE__ */ l.jsx(f, { className: Ye.tooltip__arrow }),
      /* @__PURE__ */ l.jsx(f, { className: Ye.tooltip__content, children: c || "Tooltip content" })
    ] }) : null, O = () => !j.kind.includes("controls") && !j.kind.includes("zoom") ? null : /* @__PURE__ */ l.jsxs(f, { className: Ye.controls, children: [
      j.kind.includes("zoom") && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "secondary",
            className: Ye.controls__button,
            children: "+"
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "secondary",
            className: Ye.controls__button,
            children: "-"
          }
        ),
        /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "secondary",
            className: Ye.controls__button,
            children: "Reset"
          }
        )
      ] }),
      j.kind.includes("time-range") && /* @__PURE__ */ l.jsxs("select", { className: Ye.controls__select, children: [
        /* @__PURE__ */ l.jsx("option", { children: "Last 7 days" }),
        /* @__PURE__ */ l.jsx("option", { children: "Last 30 days" }),
        /* @__PURE__ */ l.jsx("option", { children: "Last 90 days" })
      ] })
    ] });
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ...B,
        ref: n,
        className: ce,
        children: [
          j.kind.includes("legend") && /* @__PURE__ */ l.jsx(f, { className: Ye.legend, children: u.map(w) }),
          q(),
          x(),
          O(),
          c
        ]
      }
    );
  }
);
rt.displayName = "Chart";
const qS = di(rt);
function KS(t, n = {}) {
  return /* @__PURE__ */ l.jsx(rt, { kind: t, ...n });
}
const YS = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "chart-legend", ...t }), JS = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "legend-horizontal", ...t }), XS = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "legend-vertical", ...t }), QS = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "legend-grid", ...t }), eC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "legend-minimal", ...t }), tC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "chart-tooltip", ...t }), iC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "tooltip-simple", ...t }), nC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "tooltip-detailed", ...t }), aC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "tooltip-custom", ...t }), oC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "chart-filter-controls", ...t }), rC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "filter-checkboxes", ...t }), sC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "filter-buttons", ...t }), lC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "filter-dropdown", ...t }), cC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "filter-multi-select", ...t }), _C = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "chart-controls", ...t }), dC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "zoom-controls", ...t }), uC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "time-range-selector", ...t }), mC = (t) => /* @__PURE__ */ l.jsx(rt, { kind: "data-series-toggle", ...t }), hC = (t) => /* @__PURE__ */ l.jsx(
  rt,
  {
    kind: "legend-grid",
    variant: "modern",
    showIcons: !0,
    showValues: !0,
    interactive: !0,
    ...t
  }
), pC = (t) => /* @__PURE__ */ l.jsx(
  rt,
  {
    kind: "filter-buttons",
    variant: "game-style",
    allowMultiSelect: !0,
    spacing: "tight",
    ...t
  }
), Gf = {
  checkbox: {
    variant: "default",
    className: "checkbox-default",
    size: "medium",
    labelPosition: "right",
    behavior: {
      toggle: !1,
      switch: !1,
      animated: !0
    },
    styling: {
      rounded: !1,
      bordered: !0,
      shadow: !1
    }
  },
  toggle: {
    variant: "toggle",
    className: "checkbox-toggle",
    size: "medium",
    labelPosition: "right",
    behavior: {
      toggle: !0,
      switch: !1,
      animated: !0
    },
    styling: {
      rounded: !0,
      bordered: !0,
      shadow: !0
    }
  },
  switch: {
    variant: "switch",
    className: "checkbox-switch",
    size: "medium",
    labelPosition: "right",
    behavior: {
      toggle: !1,
      switch: !0,
      animated: !0
    },
    styling: {
      rounded: !0,
      bordered: !1,
      shadow: !0
    }
  },
  "dark-mode-toggle": {
    variant: "toggle",
    className: "dark-mode-toggle",
    size: "large",
    labelPosition: "none",
    behavior: {
      toggle: !0,
      switch: !1,
      animated: !0
    },
    styling: {
      rounded: !0,
      bordered: !1,
      shadow: !1
    },
    icon: {
      checked: "🌙",
      unchecked: "☀️"
    }
  },
  custom: {
    variant: "custom",
    className: "checkbox-custom",
    size: "medium",
    labelPosition: "right",
    behavior: {
      toggle: !1,
      switch: !1,
      animated: !1
    },
    styling: {
      rounded: !1,
      bordered: !0,
      shadow: !1
    }
  }
}, qf = "_provider_1anhx_117", Ei = {
  provider: qf
}, Kf = {
  "socket-provider": {
    kind: "socket-provider",
    variant: "socket",
    position: "root",
    className: "provider-socket",
    description: "Provides socket connection and communication"
  },
  "user-settings-provider": {
    kind: "user-settings-provider",
    variant: "settings",
    position: "app",
    className: "provider-settings",
    description: "Manages user settings and preferences"
  },
  "theme-palette-provider": {
    kind: "theme-palette-provider",
    variant: "theme",
    position: "app",
    className: "provider-theme",
    description: "Provides theme and palette management"
  },
  "achievement-socket-listener": {
    kind: "achievement-socket-listener",
    variant: "listener",
    position: "component",
    className: "provider-listener",
    description: "Listens for achievement events"
  },
  "custom-provider": {
    kind: "custom-provider",
    variant: "custom",
    position: "inline",
    className: "provider-custom",
    description: "Custom provider implementation"
  }
}, Yf = ma(null), cl = ma(null), Jf = ma(null), Ht = Le(
  ({
    kind: t,
    children: n,
    session: a,
    autoConnect: r = !0,
    url: c = "/socket",
    initialSettings: d = {},
    initialTheme: u = "default",
    initialPalette: h = {},
    onAchievement: p,
    configuration: g,
    className: y,
    ...v
  }, z) => {
    const k = Kf[t];
    if (!k)
      return console.warn(`Unknown provider kind: ${t}`), /* @__PURE__ */ l.jsx(l.Fragment, { children: n });
    switch ({ ...k, ...g }, t) {
      case "socket-provider":
        return /* @__PURE__ */ l.jsx(
          Xf,
          {
            session: a,
            autoConnect: r,
            url: c,
            ref: z,
            className: y,
            ...v,
            children: n
          }
        );
      case "user-settings-provider":
        return /* @__PURE__ */ l.jsx(
          Qf,
          {
            initialSettings: d,
            ref: z,
            className: y,
            ...v,
            children: n
          }
        );
      case "theme-palette-provider":
        return /* @__PURE__ */ l.jsx(
          e1,
          {
            initialTheme: u,
            initialPalette: h,
            ref: z,
            className: y,
            ...v,
            children: n
          }
        );
      case "achievement-socket-listener":
        return /* @__PURE__ */ l.jsx(
          t1,
          {
            onAchievement: p,
            ref: z,
            className: y,
            ...v,
            children: n
          }
        );
      default:
        return /* @__PURE__ */ l.jsx(l.Fragment, { children: n });
    }
  }
), Xf = Le(
  ({
    session: t,
    autoConnect: n,
    url: a,
    children: r,
    className: c,
    ...d
  }, u) => {
    const h = {
      socket: null,
      isConnected: !!n,
      emit: (p, g) => {
      },
      on: (p, g) => {
      },
      off: (p, g) => {
      }
    };
    return /* @__PURE__ */ l.jsx(Yf.Provider, { value: h, children: /* @__PURE__ */ l.jsx(
      f,
      {
        ref: u,
        className: `${Ei.provider} ${Ei["provider-socket"]} ${c || ""}`,
        ...d,
        children: r
      }
    ) });
  }
), Qf = Le(
  ({ initialSettings: t, children: n, className: a, ...r }, c) => {
    const d = {
      settings: t || {},
      setSettings: () => {
      },
      updateSetting: () => {
      }
    };
    return /* @__PURE__ */ l.jsx(Jf.Provider, { value: d, children: /* @__PURE__ */ l.jsx(
      f,
      {
        ref: c,
        className: `${Ei.provider} ${Ei["provider-settings"]} ${a || ""}`,
        ...r,
        children: n
      }
    ) });
  }
), e1 = Le(
  ({
    initialTheme: t,
    initialPalette: n,
    children: a,
    className: r,
    ...c
  }, d) => {
    const u = {
      palette: n || {},
      setPalette: () => {
      },
      currentTheme: t || "default",
      setTheme: () => {
      }
    };
    return /* @__PURE__ */ l.jsx(cl.Provider, { value: u, children: /* @__PURE__ */ l.jsx(
      f,
      {
        ref: d,
        className: `${Ei.provider} ${Ei["provider-theme"]} ${r || ""}`,
        ...c,
        children: a
      }
    ) });
  }
), t1 = Le(
  ({ onAchievement: t, children: n, className: a, ...r }, c) => /* @__PURE__ */ l.jsx(
    f,
    {
      ref: c,
      className: `${Ei.provider} ${Ei["provider-listener"]} ${a || ""}`,
      ...r,
      children: n
    }
  )
), an = {
  SOCKET_CONNECTION: (t, n = !0, a) => /* @__PURE__ */ l.jsx(
    Ht,
    {
      kind: "socket-provider",
      session: t,
      autoConnect: n,
      url: a
    }
  ),
  USER_SETTINGS: (t) => /* @__PURE__ */ l.jsx(
    Ht,
    {
      kind: "user-settings-provider",
      initialSettings: t
    }
  ),
  ACHIEVEMENT_LISTENER: () => /* @__PURE__ */ l.jsx(Ht, { kind: "achievement-socket-listener" }),
  THEME_PALETTE: () => /* @__PURE__ */ l.jsx(Ht, { kind: "theme-palette-provider" }),
  FULL_SETUP: (t, n) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      Ht,
      {
        kind: "socket-provider",
        session: t,
        autoConnect: !0
      }
    ),
    /* @__PURE__ */ l.jsx(
      Ht,
      {
        kind: "user-settings-provider",
        initialSettings: n
      }
    ),
    /* @__PURE__ */ l.jsx(Ht, { kind: "achievement-socket-listener" })
  ] })
}, i1 = {
  socket: an.SOCKET_CONNECTION,
  settings: an.USER_SETTINGS,
  achievements: an.ACHIEVEMENT_LISTENER,
  theme: an.THEME_PALETTE,
  full: an.FULL_SETUP
};
class gi {
  static create(n, a = {}) {
    return /* @__PURE__ */ l.jsx(Ht, { kind: n, ...a });
  }
  static socket(n = {}) {
    return this.create("socket-provider", n);
  }
  static userSettings(n = {}) {
    return this.create("user-settings-provider", n);
  }
  static themePalette(n = {}) {
    return this.create("theme-palette-provider", n);
  }
  static achievementListener(n = {}) {
    return this.create(
      "achievement-socket-listener",
      n
    );
  }
}
const n1 = {
  SOCKET_CONNECTED: (t) => gi.socket({
    session: t,
    autoConnect: !0
  }),
  SOCKET_MANUAL: (t) => gi.socket({
    session: t,
    autoConnect: !1
  }),
  USER_SETTINGS: (t) => gi.userSettings({ initialSettings: t }),
  EMPTY_SETTINGS: () => gi.userSettings({
    initialSettings: {}
  }),
  THEME_LIGHT: () => gi.themePalette({
    initialTheme: "light"
  }),
  THEME_DARK: () => gi.themePalette({
    initialTheme: "dark"
  }),
  THEME_AUTO: () => gi.themePalette({
    initialTheme: "auto"
  }),
  ACHIEVEMENT_LISTENER: (t) => gi.achievementListener({
    onAchievement: t
  })
};
Ht.Presets = an;
Ht.Quick = i1;
Ht.Simple = gi;
Ht.ExtendedPresets = n1;
Ht.displayName = "Providers";
const a1 = "_Checkbox_if5h7_118", o1 = "_disabled_if5h7_144", r1 = "_animated_if5h7_149", s1 = "_checkboxInput_if5h7_153", l1 = "_small_if5h7_404", c1 = "_large_if5h7_408", _1 = "_checkboxLabel_if5h7_474", d1 = "_errorText_if5h7_486", u1 = "_helperText_if5h7_495", m1 = "_error_if5h7_486", h1 = "_success_if5h7_508", p1 = "_warning_if5h7_511", f1 = "_fullWidth_if5h7_515", g1 = "_rounded_if5h7_547", b1 = "_shadow_if5h7_551", y1 = "_bordered_if5h7_558", gt = {
  Checkbox: a1,
  disabled: o1,
  animated: r1,
  checkboxInput: s1,
  "checkbox-default": "_checkbox-default_if5h7_211",
  "checkbox-toggle": "_checkbox-toggle_if5h7_215",
  "checkbox-switch": "_checkbox-switch_if5h7_272",
  "dark-mode-toggle": "_dark-mode-toggle_if5h7_329",
  small: l1,
  large: c1,
  "size-small": "_size-small_if5h7_429",
  "size-large": "_size-large_if5h7_449",
  checkboxLabel: _1,
  errorText: d1,
  helperText: u1,
  error: m1,
  success: h1,
  warning: p1,
  fullWidth: f1,
  "variant-success": "_variant-success_if5h7_523",
  "variant-warning": "_variant-warning_if5h7_531",
  "variant-danger": "_variant-danger_if5h7_539",
  rounded: g1,
  shadow: b1,
  bordered: y1,
  "loading-shimmer": "_loading-shimmer_if5h7_1"
}, Vo = Le(
  ({
    kind: t = "checkbox",
    // Default to 'checkbox' for backward compatibility
    configuration: n,
    label: a,
    labelPosition: r,
    size: c,
    variant: d,
    animated: u = !0,
    error: h,
    helperText: p,
    fullWidth: g = !1,
    darkModeContext: y = !1,
    className: v = "",
    checked: z,
    onChange: k,
    disabled: N = !1,
    ...P
  }, $) => {
    const F = {
      ...Gf[t],
      ...n
    }, H = o_(
      cl
    );
    let A = z, R = k;
    t === "dark-mode-toggle" && y && H && "darkMode" in H && (A = H.darkMode, R = () => H.setDarkMode(
      !H.darkMode
    ));
    const T = r || F.labelPosition, E = c || F.size, J = d || F.variant, G = [
      gt.Checkbox,
      gt[F.className],
      gt[`size-${E}`],
      J !== "default" ? gt[`variant-${J}`] : "",
      u || F.behavior.animated ? gt.animated : "",
      F.styling.rounded ? gt.rounded : "",
      F.styling.shadow ? gt.shadow : "",
      F.styling.bordered ? gt.bordered : "",
      N ? gt.disabled : "",
      g ? gt.fullWidth : "",
      v
    ].filter(Boolean).join(" "), B = [gt.checkboxInput].filter(Boolean).join(" "), M = () => F.icon ? A ? F.icon.checked : F.icon.unchecked : null;
    if (t === "dark-mode-toggle")
      return /* @__PURE__ */ l.jsxs("label", { className: G, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: $,
            type: "checkbox",
            className: B,
            checked: A,
            onChange: R,
            disabled: N,
            "data-icon": M(),
            "aria-label": A ? "Switch to light mode" : "Switch to dark mode",
            ...P
          }
        ),
        h && /* @__PURE__ */ l.jsx(f, { className: gt.errorText, children: h }),
        p && /* @__PURE__ */ l.jsx(f, { className: gt.helperText, children: p })
      ] });
    const j = a && T !== "none" ? /* @__PURE__ */ l.jsx(
      "span",
      {
        className: `${gt.checkboxLabel} ${N ? gt.disabled : ""}`,
        children: a
      }
    ) : null;
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        className: g ? gt.fullWidth : "",
        children: [
          /* @__PURE__ */ l.jsxs("label", { className: G, children: [
            T === "left" && j,
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: $,
                type: "checkbox",
                className: B,
                checked: A,
                onChange: R,
                disabled: N,
                ...P
              }
            ),
            T === "right" && j
          ] }),
          h && /* @__PURE__ */ l.jsx(f, { className: gt.errorText, children: h }),
          p && /* @__PURE__ */ l.jsx(f, { className: gt.helperText, children: p })
        ]
      }
    );
  }
);
Vo.displayName = "Checkbox";
const x1 = Le((t, n) => it.createElement(Vo, {
  ref: n,
  kind: "dark-mode-toggle",
  darkModeContext: !0,
  ...t
}));
x1.displayName = "DarkModeToggle";
const ps = {
  // Data Empty States
  "no-data": {
    kind: "no-data",
    variant: "default",
    title: "No data available",
    description: "There is currently no data to display.",
    icon: "📊",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "no-results": {
    kind: "no-results",
    variant: "default",
    title: "No results found",
    description: "Try adjusting your search or filter criteria.",
    icon: "🔍",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "no-search-results": {
    kind: "no-search-results",
    variant: "minimal",
    title: "No search results",
    description: "We couldn't find anything matching your search.",
    icon: "🔍",
    size: "medium",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Clear search",
      onClick: () => {
      },
      variant: "secondary"
    }
  },
  "empty-table": {
    kind: "empty-table",
    variant: "inline",
    title: "No items",
    description: "No items to display in this table.",
    icon: "📋",
    size: "small",
    centered: !0,
    showIcon: !1
  },
  "empty-list": {
    kind: "empty-list",
    variant: "minimal",
    title: "Empty list",
    description: "No items in this list yet.",
    icon: "📝",
    size: "small",
    centered: !0,
    showIcon: !0
  },
  // User/Social Empty States
  "no-friends": {
    kind: "no-friends",
    variant: "illustrated",
    title: "No friends yet",
    description: "Start connecting with other players to build your network.",
    icon: "👥",
    size: "large",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Find friends",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "no-messages": {
    kind: "no-messages",
    variant: "centered",
    title: "No messages",
    description: "Your inbox is empty. Start a conversation!",
    icon: "💬",
    size: "medium",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Send message",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "no-notifications": {
    kind: "no-notifications",
    variant: "minimal",
    title: "No notifications",
    description: "You're all caught up!",
    icon: "🔔",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "no-activity": {
    kind: "no-activity",
    variant: "default",
    title: "No recent activity",
    description: "There hasn't been any activity recently.",
    icon: "📈",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "empty-profile": {
    kind: "empty-profile",
    variant: "card",
    title: "Complete your profile",
    description: "Add some information to get started.",
    icon: "👤",
    size: "large",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Edit profile",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  // Game-specific Empty States
  "no-games": {
    kind: "no-games",
    variant: "game-style",
    title: "No games played",
    description: "Start your first game to see your stats here.",
    icon: "🎮",
    size: "large",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Start playing",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "no-matches": {
    kind: "no-matches",
    variant: "game-style",
    title: "No matches found",
    description: "No active matches at the moment.",
    icon: "⚔️",
    size: "medium",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Create match",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "no-achievements": {
    kind: "no-achievements",
    variant: "game-style",
    title: "No achievements yet",
    description: "Play more games to unlock achievements.",
    icon: "🏆",
    size: "large",
    centered: !0,
    showIcon: !0
  },
  "empty-leaderboard": {
    kind: "empty-leaderboard",
    variant: "game-style",
    title: "Leaderboard empty",
    description: "Be the first to appear on the leaderboard!",
    icon: "👑",
    size: "large",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Play now",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "no-stats": {
    kind: "no-stats",
    variant: "game-style",
    title: "No statistics",
    description: "Play some games to see your statistics.",
    icon: "📊",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  // Content Empty States
  "no-content": {
    kind: "no-content",
    variant: "default",
    title: "No content",
    description: "There is no content available at this time.",
    icon: "📄",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "empty-folder": {
    kind: "empty-folder",
    variant: "minimal",
    title: "Empty folder",
    description: "This folder is empty.",
    icon: "📁",
    size: "medium",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Add files",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "no-files": {
    kind: "no-files",
    variant: "default",
    title: "No files",
    description: "No files have been uploaded yet.",
    icon: "📎",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "empty-cart": {
    kind: "empty-cart",
    variant: "illustrated",
    title: "Your cart is empty",
    description: "Add some items to get started.",
    icon: "🛒",
    size: "large",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Browse products",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  // Error Empty States
  "connection-error": {
    kind: "connection-error",
    variant: "card",
    title: "Connection error",
    description: "Unable to connect to the server. Please try again.",
    icon: "🌐",
    size: "medium",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Retry",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "loading-error": {
    kind: "loading-error",
    variant: "card",
    title: "Loading error",
    description: "Something went wrong while loading the data.",
    icon: "⚠️",
    size: "medium",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Try again",
      onClick: () => {
      },
      variant: "primary"
    }
  },
  "permission-denied": {
    kind: "permission-denied",
    variant: "card",
    title: "Access denied",
    description: "You don't have permission to view this content.",
    icon: "🔒",
    size: "medium",
    centered: !0,
    showIcon: !0
  },
  "not-found": {
    kind: "not-found",
    variant: "illustrated",
    title: "Page not found",
    description: "The page you're looking for doesn't exist.",
    icon: "🔍",
    size: "large",
    centered: !0,
    showIcon: !0,
    primaryAction: {
      label: "Go home",
      onClick: () => {
      },
      variant: "primary"
    }
  }
}, v1 = (t) => ps[t] || ps["no-data"], w1 = "_empty_state_1gswq_118", k1 = "_empty_state__icon_1gswq_145", S1 = "_empty_state__content_1gswq_159", C1 = "_empty_state__title_1gswq_163", j1 = "_empty_state__description_1gswq_170", z1 = "_empty_state__actions_1gswq_176", T1 = "_empty_state__custom_1gswq_183", P1 = "_pulse_1gswq_1", N1 = "_empty_state__icon_text_1gswq_245", E1 = "_empty_state__illustration_1gswq_253", I1 = "_empty_state__illustration_image_1gswq_259", L1 = "_empty_state__action_1gswq_176", A1 = "_empty_state__action_icon_1gswq_291", bt = {
  empty_state: w1,
  "empty_state--small": "_empty_state--small_1gswq_128",
  "empty_state--medium": "_empty_state--medium_1gswq_132",
  "empty_state--large": "_empty_state--large_1gswq_136",
  "empty_state--full": "_empty_state--full_1gswq_140",
  empty_state__icon: k1,
  empty_state__content: S1,
  empty_state__title: C1,
  empty_state__description: j1,
  empty_state__actions: z1,
  empty_state__custom: T1,
  "empty_state--error": "_empty_state--error_1gswq_186",
  "empty_state--warning": "_empty_state--warning_1gswq_192",
  "empty_state--info": "_empty_state--info_1gswq_198",
  "empty_state--success": "_empty_state--success_1gswq_201",
  "empty_state--loading": "_empty_state--loading_1gswq_204",
  pulse: P1,
  "empty_state--compact": "_empty_state--compact_1gswq_207",
  "empty_state--interactive": "_empty_state--interactive_1gswq_229",
  empty_state__icon_text: N1,
  empty_state__illustration: E1,
  empty_state__illustration_image: I1,
  empty_state__action: L1,
  "empty_state__action--primary": "_empty_state__action--primary_1gswq_276",
  "empty_state__action--secondary": "_empty_state__action--secondary_1gswq_280",
  "empty_state__action--text": "_empty_state__action--text_1gswq_284",
  empty_state__action_icon: A1,
  "loading-shimmer": "_loading-shimmer_1gswq_1"
}, _l = Le((t, n) => {
  const {
    kind: a = "no-data",
    children: r,
    className: c,
    // Content overrides
    title: d,
    description: u,
    icon: h,
    illustration: p,
    // Configuration overrides
    variant: g,
    size: y,
    centered: v,
    fullHeight: z,
    // Actions
    primaryAction: k,
    secondaryAction: N,
    actions: P,
    // Features
    showIcon: $,
    showIllustration: F,
    allowCustomContent: H,
    ...A
  } = t, R = v1(a), T = {
    ...R,
    title: d || R.title,
    description: u || R.description,
    icon: h || R.icon,
    illustration: p || R.illustration,
    variant: g || R.variant,
    size: y || R.size,
    centered: v !== void 0 ? v : R.centered,
    fullHeight: z !== void 0 ? z : R.fullHeight,
    primaryAction: k || R.primaryAction,
    secondaryAction: N || R.secondaryAction,
    actions: P || R.actions,
    showIcon: $ !== void 0 ? $ : R.showIcon,
    showIllustration: F !== void 0 ? F : R.showIllustration,
    allowCustomContent: H !== void 0 ? H : R.allowCustomContent
  }, E = [
    bt.empty_state,
    bt[`empty_state--${T.kind}`],
    bt[`empty_state--${T.variant}`],
    T.size && bt[`empty_state--${T.size}`],
    T.centered && bt["empty_state--centered"],
    T.fullHeight && bt["empty_state--full_height"],
    c
  ].filter(Boolean).join(" "), J = () => !T.showIcon || !T.icon ? null : /* @__PURE__ */ l.jsx(f, { className: bt.empty_state__icon, children: typeof T.icon == "string" ? /* @__PURE__ */ l.jsx("span", { className: bt.empty_state__icon_text, children: T.icon }) : T.icon }), G = () => !T.showIllustration || !T.illustration ? null : /* @__PURE__ */ l.jsx(f, { className: bt.empty_state__illustration, children: /* @__PURE__ */ l.jsx(
    "img",
    {
      src: T.illustration,
      alt: "",
      className: bt.empty_state__illustration_image
    }
  ) }), B = (j, V = !1) => /* @__PURE__ */ l.jsxs(
    Ce,
    {
      kind: j.variant === "text" ? "link" : j.variant || (V ? "primary" : "secondary"),
      onClick: j.onClick,
      className: [
        bt.empty_state__action,
        bt[`empty_state__action--${j.variant || (V ? "primary" : "secondary")}`]
      ].filter(Boolean).join(" "),
      children: [
        j.icon && /* @__PURE__ */ l.jsx("span", { className: bt.empty_state__action_icon, children: j.icon }),
        j.label
      ]
    },
    j.label
  ), M = () => {
    const j = [];
    return T.primaryAction && j.push({
      ...T.primaryAction,
      isPrimary: !0
    }), T.secondaryAction && j.push({
      ...T.secondaryAction,
      isPrimary: !1
    }), T.actions && j.push(
      ...T.actions.map((V) => ({
        ...V,
        isPrimary: !1
      }))
    ), j.length === 0 ? null : /* @__PURE__ */ l.jsx(f, { className: bt.empty_state__actions, children: j.map(
      (V, Q) => B(V, V.isPrimary)
    ) });
  };
  return /* @__PURE__ */ l.jsxs(
    f,
    {
      ...A,
      ref: n,
      className: E,
      role: "status",
      "aria-live": "polite",
      children: [
        G(),
        J(),
        /* @__PURE__ */ l.jsxs(f, { className: bt.empty_state__content, children: [
          T.title && /* @__PURE__ */ l.jsx("h3", { className: bt.empty_state__title, children: T.title }),
          T.description && /* @__PURE__ */ l.jsx("p", { className: bt.empty_state__description, children: T.description }),
          T.allowCustomContent && r && /* @__PURE__ */ l.jsx(f, { className: bt.empty_state__custom, children: r })
        ] }),
        M()
      ]
    }
  );
});
_l.displayName = "EmptyState";
const fC = di(_l), Do = {
  dropzone: {
    kind: "dropzone",
    variant: "bordered",
    size: "large",
    accept: "*/*",
    multiple: !0,
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "medium",
      shadow: "small",
      border: "dashed",
      animation: "subtle"
    },
    behavior: {
      multiple: !0,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      maxSize: 10 * 1024 * 1024,
      // 10MB
      maxFiles: 10
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      showFileList: !0,
      showFileSize: !0,
      layout: "grid",
      placeholder: "Drop files here or click to upload",
      icon: "📁",
      description: "Drag and drop files or click to browse"
    }
  },
  "image-uploader": {
    kind: "image-uploader",
    variant: "modern",
    size: "medium",
    accept: "image/*",
    multiple: !1,
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "medium",
      shadow: "medium",
      border: "solid"
    },
    behavior: {
      multiple: !1,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      accept: "image/*",
      allowedTypes: [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp"
      ],
      maxSize: 5 * 1024 * 1024,
      // 5MB
      maxFiles: 1
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      showFileName: !0,
      previewSize: "medium",
      placeholder: "Upload an image",
      icon: "🖼️",
      description: "Choose an image file to upload"
    }
  },
  "avatar-uploader": {
    kind: "avatar-uploader",
    variant: "modern",
    size: "medium",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "round",
      shadow: "medium",
      border: "solid"
    },
    behavior: {
      multiple: !1,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      accept: "image/*",
      allowedTypes: ["image/jpeg", "image/png"],
      maxSize: 2 * 1024 * 1024,
      // 2MB
      maxFiles: 1
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      previewSize: "large"
    }
  },
  "document-uploader": {
    kind: "document-uploader",
    variant: "default",
    size: "medium",
    styling: {
      theme: "light",
      color: "secondary",
      borderRadius: "medium",
      shadow: "small",
      border: "solid"
    },
    behavior: {
      multiple: !0,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      accept: ".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx",
      allowedTypes: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain"
      ],
      maxSize: 25 * 1024 * 1024,
      // 25MB
      maxFiles: 5
    },
    display: {
      showPreview: !1,
      showProgress: !0,
      showFileList: !0,
      showFileSize: !0,
      layout: "list"
    }
  },
  "file-button": {
    kind: "file-button",
    variant: "minimal",
    size: "small",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "medium",
      shadow: "none",
      border: "solid"
    },
    behavior: {
      multiple: !1,
      allowDragDrop: !1,
      clickToUpload: !0
    },
    validation: {
      maxSize: 5 * 1024 * 1024,
      // 5MB
      maxFiles: 1
    },
    display: {
      showPreview: !1,
      showProgress: !1,
      showFileList: !1
    }
  },
  "multiple-files": {
    kind: "multiple-files",
    variant: "default",
    size: "large",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "medium",
      shadow: "medium",
      border: "dashed"
    },
    behavior: {
      multiple: !0,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      maxSize: 10 * 1024 * 1024,
      // 10MB
      maxFiles: 20
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      showFileList: !0,
      showFileSize: !0,
      showRemoveButton: !0,
      layout: "grid"
    }
  },
  "drag-drop-zone": {
    kind: "drag-drop-zone",
    variant: "bordered",
    size: "large",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "large",
      shadow: "large",
      border: "dashed",
      animation: "bounce"
    },
    behavior: {
      multiple: !0,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      maxSize: 50 * 1024 * 1024,
      // 50MB
      maxFiles: 50
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      showFileList: !0,
      showFileSize: !0,
      showRemoveButton: !0,
      layout: "grid"
    }
  },
  "gallery-uploader": {
    kind: "gallery-uploader",
    variant: "modern",
    size: "large",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "medium",
      shadow: "medium",
      border: "solid"
    },
    behavior: {
      multiple: !0,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      accept: "image/*",
      allowedTypes: [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp"
      ],
      maxSize: 10 * 1024 * 1024,
      // 10MB
      maxFiles: 50
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      showFileList: !0,
      showRemoveButton: !0,
      previewSize: "medium",
      layout: "grid"
    }
  },
  "profile-picture": {
    kind: "profile-picture",
    variant: "modern",
    size: "medium",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "round",
      shadow: "medium",
      border: "solid"
    },
    behavior: {
      multiple: !1,
      allowDragDrop: !0,
      clickToUpload: !0
    },
    validation: {
      accept: "image/*",
      allowedTypes: ["image/jpeg", "image/png"],
      maxSize: 3 * 1024 * 1024,
      // 3MB
      maxFiles: 1
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      previewSize: "large"
    }
  },
  "bulk-uploader": {
    kind: "bulk-uploader",
    variant: "detailed",
    size: "large",
    styling: {
      theme: "light",
      color: "primary",
      borderRadius: "medium",
      shadow: "large",
      border: "dashed"
    },
    behavior: {
      multiple: !0,
      allowDragDrop: !0,
      clickToUpload: !0,
      pasteToUpload: !0
    },
    validation: {
      maxSize: 100 * 1024 * 1024,
      // 100MB
      maxFiles: 100
    },
    display: {
      showPreview: !0,
      showProgress: !0,
      showFileList: !0,
      showFileSize: !0,
      showFileName: !0,
      showRemoveButton: !0,
      layout: "list"
    }
  }
}, gC = {
  image: [
    "image-uploader",
    "avatar-uploader",
    "gallery-uploader",
    "profile-picture"
  ],
  document: [
    "document-uploader",
    "bulk-uploader"
  ],
  general: [
    "dropzone",
    "file-button",
    "multiple-files",
    "drag-drop-zone"
  ],
  profile: [
    "avatar-uploader",
    "profile-picture"
  ],
  bulk: [
    "multiple-files",
    "drag-drop-zone",
    "bulk-uploader"
  ]
}, Go = (t) => Do[t] || Do.dropzone, bC = (t, n) => ({
  ...Go(t),
  ...n
}), yC = (t) => !!(t.kind && Do[t.kind]), Bo = (t) => {
  if (t === 0) return "0 B";
  const n = 1024, a = ["B", "KB", "MB", "GB"], r = Math.floor(Math.log(t) / Math.log(n));
  return parseFloat((t / Math.pow(n, r)).toFixed(2)) + " " + a[r];
}, xC = (t) => {
  var n;
  return ((n = t.split(".").pop()) == null ? void 0 : n.toLowerCase()) || "";
}, vC = (t) => ({
  // Images
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  // Documents
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  txt: "text/plain",
  // Other
  zip: "application/zip",
  rar: "application/x-rar-compressed",
  json: "application/json",
  xml: "application/xml",
  csv: "text/csv"
})[t] || "application/octet-stream", wC = (t, n) => {
  if (n.maxSize && t.size > n.maxSize)
    return {
      valid: !1,
      error: `File size exceeds maximum of ${Bo(n.maxSize)}`
    };
  if (n.minSize && t.size < n.minSize)
    return {
      valid: !1,
      error: `File size is below minimum of ${Bo(n.minSize)}`
    };
  if (n.allowedTypes && n.allowedTypes.length > 0 && !n.allowedTypes.includes(t.type))
    return {
      valid: !1,
      error: `File type ${t.type} is not allowed`
    };
  if (n.blockedTypes && n.blockedTypes.includes(t.type))
    return {
      valid: !1,
      error: `File type ${t.type} is not allowed`
    };
  if (n.customValidator) {
    const a = n.customValidator(t);
    if (typeof a == "string")
      return { valid: !1, error: a };
    if (!a)
      return {
        valid: !1,
        error: "File failed custom validation"
      };
  }
  return { valid: !0 };
}, kC = () => Math.random().toString(36).substr(2, 9), SC = (t) => new Promise((n, a) => {
  if (!t.type.startsWith("image/")) {
    a(new Error("File is not an image"));
    return;
  }
  const r = new FileReader();
  r.onload = (c) => {
    var d;
    n((d = c.target) == null ? void 0 : d.result);
  }, r.onerror = () => {
    a(new Error("Failed to read file"));
  }, r.readAsDataURL(t);
}), M1 = (t, n, a) => {
  var c, d, u, h, p, g;
  const r = Go(t);
  return {
    theme: ((c = r.styling) == null ? void 0 : c.theme) || "light",
    color: ((d = r.styling) == null ? void 0 : d.color) || "primary",
    borderRadius: ((u = r.styling) == null ? void 0 : u.borderRadius) || "medium",
    shadow: (h = r.styling) == null ? void 0 : h.shadow,
    border: (p = r.styling) == null ? void 0 : p.border,
    animation: (g = r.styling) == null ? void 0 : g.animation
  };
}, O1 = (t, n) => {
  const a = [];
  return n != null && n.maxFiles && t.length > n.maxFiles && a.push(
    `Too many files. Maximum allowed: ${n.maxFiles}`
  ), t.forEach((r, c) => {
    n != null && n.maxFileSize && r.size > n.maxFileSize && a.push(
      `File "${r.name}" is too large. Maximum size: ${Bo(n.maxFileSize)}`
    ), n != null && n.allowedTypes && n.allowedTypes.length > 0 && (n.allowedTypes.includes(r.type) || a.push(
      `File "${r.name}" has unsupported type: ${r.type}`
    ));
  }), {
    isValid: a.length === 0,
    errors: a
  };
}, R1 = "_fileUploadWrapper_1223t_2", D1 = "_disabled_1223t_14", B1 = "_content_1223t_20", $1 = "_icon_1223t_31", F1 = "_text_1223t_37", H1 = "_description_1223t_43", U1 = "_progressBar_1223t_49", Z1 = "_progressFill_1223t_58", W1 = "_idle_1223t_64", V1 = "_dragActive_1223t_68", G1 = "_uploading_1223t_78", q1 = "_success_1223t_86", K1 = "_error_1223t_95", Y1 = "_preview_1223t_104", J1 = "_previewItem_1223t_111", X1 = "_previewImage_1223t_120", Q1 = "_previewFile_1223t_127", eg = "_dropzone_1223t_137", tg = "_multipleFiles_1223t_137", ig = "_dragDropZone_1223t_138", ng = "_imageUploader_1223t_144", ag = "_galleryUploader_1223t_144", og = "_avatarUploader_1223t_153", rg = "_profilePicture_1223t_153", sg = "_documentUploader_1223t_173", lg = "_fileButton_1223t_179", cg = "_bulkUploader_1223t_215", _g = "_light_1223t_224", dg = "_dark_1223t_229", ug = "_gradient_1223t_234", mg = "_small_1223t_239", hg = "_medium_1223t_245", pg = "_large_1223t_251", fg = "_borderNone_1223t_257", gg = "_borderSolid_1223t_261", bg = "_borderDashed_1223t_265", yg = "_borderDotted_1223t_269", xg = "_borderRadiusNone_1223t_273", vg = "_borderRadiusSmall_1223t_277", wg = "_borderRadiusMedium_1223t_281", kg = "_borderRadiusLarge_1223t_285", Sg = "_borderRadiusRound_1223t_289", Cg = "_shadowNone_1223t_293", jg = "_shadowSmall_1223t_297", zg = "_shadowMedium_1223t_301", Tg = "_shadowLarge_1223t_305", Pg = "_primary_1223t_309", Ng = "_secondary_1223t_315", Eg = "_warning_1223t_327", Ig = "_pulse_1223t_339", Lg = "_bounce_1223t_351", Ag = "_subtle_1223t_366", Mg = "_dropzoneActive_1223t_397", Og = "_dropzoneReject_1223t_403", Rg = "_dropzoneDisabled_1223t_408", Dg = "_fileInput_1223t_414", Bg = "_fileInputHidden_1223t_425", $g = "_fileUpload__progressFill_1223t_429", Fg = "_uploadContent_1223t_436", Hg = "_uploadIcon_1223t_445", Ug = "_uploadText_1223t_451", Zg = "_uploadSubtext_1223t_457", Wg = "_uploadButton_1223t_463", Vg = "_filePreview_1223t_480", Gg = "_fileList_1223t_484", qg = "_fileGrid_1223t_490", Kg = "_fileCompact_1223t_496", Yg = "_fileItem_1223t_502", Jg = "_fileItemGrid_1223t_516", Xg = "_fileItemCompact_1223t_522", Qg = "_filePreviewImage_1223t_527", eb = "_filePreviewImageLarge_1223t_535", tb = "_filePreviewImageSmall_1223t_542", ib = "_fileIcon_1223t_547", nb = "_fileInfo_1223t_560", ab = "_fileName_1223t_565", ob = "_fileSize_1223t_573", rb = "_fileStatus_1223t_578", sb = "_fileActions_1223t_585", lb = "_fileAction_1223t_585", cb = "_fileActionRemove_1223t_606", _b = "_progressText_1223t_627", db = "_statusPending_1223t_633", ub = "_statusUploading_1223t_637", mb = "_statusSuccess_1223t_641", hb = "_statusError_1223t_645", pb = "_statusIcon_1223t_649", fb = "_spinner_1223t_653", gb = "_spin_1223t_653", bb = "_avatarPreview_1223t_688", yb = "_avatarPlaceholder_1223t_695", xb = "_avatarIcon_1223t_704", vb = "_avatarOverlay_1223t_710", wb = "_errorMessage_1223t_731", kb = "_errorIcon_1223t_741", Sb = "_loading_1223t_746", Cb = "_loadingOverlay_1223t_751", jb = "_loadingSpinner_1223t_764", dt = {
  fileUploadWrapper: R1,
  disabled: D1,
  content: B1,
  icon: $1,
  text: F1,
  description: H1,
  progressBar: U1,
  progressFill: Z1,
  idle: W1,
  dragActive: V1,
  uploading: G1,
  success: q1,
  error: K1,
  preview: Y1,
  previewItem: J1,
  previewImage: X1,
  previewFile: Q1,
  dropzone: eg,
  multipleFiles: tg,
  dragDropZone: ig,
  imageUploader: ng,
  galleryUploader: ag,
  avatarUploader: og,
  profilePicture: rg,
  documentUploader: sg,
  fileButton: lg,
  bulkUploader: cg,
  light: _g,
  dark: dg,
  gradient: ug,
  small: mg,
  medium: hg,
  large: pg,
  borderNone: fg,
  borderSolid: gg,
  borderDashed: bg,
  borderDotted: yg,
  borderRadiusNone: xg,
  borderRadiusSmall: vg,
  borderRadiusMedium: wg,
  borderRadiusLarge: kg,
  borderRadiusRound: Sg,
  shadowNone: Cg,
  shadowSmall: jg,
  shadowMedium: zg,
  shadowLarge: Tg,
  primary: Pg,
  secondary: Ng,
  warning: Eg,
  pulse: Ig,
  bounce: Lg,
  subtle: Ag,
  dropzoneActive: Mg,
  dropzoneReject: Og,
  dropzoneDisabled: Rg,
  fileInput: Dg,
  fileInputHidden: Bg,
  fileUpload__progressFill: $g,
  uploadContent: Fg,
  uploadIcon: Hg,
  uploadText: Ug,
  uploadSubtext: Zg,
  uploadButton: Wg,
  filePreview: Vg,
  fileList: Gg,
  fileGrid: qg,
  fileCompact: Kg,
  fileItem: Yg,
  fileItemGrid: Jg,
  fileItemCompact: Xg,
  filePreviewImage: Qg,
  filePreviewImageLarge: eb,
  filePreviewImageSmall: tb,
  fileIcon: ib,
  fileInfo: nb,
  fileName: ab,
  fileSize: ob,
  fileStatus: rb,
  fileActions: sb,
  fileAction: lb,
  fileActionRemove: cb,
  progressText: _b,
  statusPending: db,
  statusUploading: ub,
  statusSuccess: mb,
  statusError: hb,
  statusIcon: pb,
  spinner: fb,
  spin: gb,
  avatarPreview: bb,
  avatarPlaceholder: yb,
  avatarIcon: xb,
  avatarOverlay: vb,
  errorMessage: wb,
  errorIcon: kb,
  loading: Sb,
  loadingOverlay: Cb,
  loadingSpinner: jb
}, zb = {
  // Authentication
  isAuthenticated: !1,
  isLoading: !1,
  authError: null,
  // Profile
  profile: null,
  profileLoading: !1,
  profileError: null,
  // Preferences
  preferences: {
    language: "en",
    timezone: "UTC",
    emailNotifications: !0,
    pushNotifications: !0,
    chatEnabled: !0,
    profanityFilter: !1,
    privacyLevel: "friends"
  },
  preferencesLoading: !1,
  preferencesError: null,
  // Session
  sessionExpiry: null,
  lastActivity: Date.now()
}, _o = xt(
  "user/login",
  async (t) => {
    const n = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error("Login failed");
    return n.json();
  }
), Tb = xt(
  "user/logout",
  async () => {
    await fetch("/api/auth/logout", { method: "POST" });
  }
), uo = xt(
  "user/updateProfile",
  async (t) => {
    const n = await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error("Profile update failed");
    return n.json();
  }
), mo = xt(
  "user/updatePreferences",
  async (t) => {
    const n = await fetch("/api/user/preferences", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error("Preferences update failed");
    return n.json();
  }
), dl = Wt({
  name: "user",
  initialState: zb,
  reducers: {
    // Authentication actions
    clearAuthError: (t) => {
      t.authError = null;
    },
    // Session actions
    updateLastActivity: (t) => {
      t.lastActivity = Date.now();
    },
    setSessionExpiry: (t, n) => {
      t.sessionExpiry = n.payload;
    },
    // Quick preference updates (for immediate UI feedback)
    toggleChatEnabled: (t) => {
      t.preferences.chatEnabled = !t.preferences.chatEnabled;
    },
    toggleProfanityFilter: (t) => {
      t.preferences.profanityFilter = !t.preferences.profanityFilter;
    },
    setPrivacyLevel: (t, n) => {
      t.preferences.privacyLevel = n.payload;
    },
    // Clear all user data (for logout)
    clearUserData: (t) => {
      t.isAuthenticated = !1, t.profile = null, t.authError = null, t.profileError = null, t.preferencesError = null, t.sessionExpiry = null;
    }
  },
  extraReducers: (t) => {
    t.addCase(_o.pending, (n) => {
      n.isLoading = !0, n.authError = null;
    }).addCase(_o.fulfilled, (n, a) => {
      n.isLoading = !1, n.isAuthenticated = !0, n.profile = a.payload.user, n.sessionExpiry = a.payload.sessionExpiry;
    }).addCase(_o.rejected, (n, a) => {
      n.isLoading = !1, n.authError = a.error.message || "Login failed";
    }), t.addCase(Tb.fulfilled, (n) => {
      n.isAuthenticated = !1, n.profile = null, n.sessionExpiry = null;
    }), t.addCase(uo.pending, (n) => {
      n.profileLoading = !0, n.profileError = null;
    }).addCase(
      uo.fulfilled,
      (n, a) => {
        n.profileLoading = !1, n.profile && (n.profile = {
          ...n.profile,
          ...a.payload
        });
      }
    ).addCase(
      uo.rejected,
      (n, a) => {
        n.profileLoading = !1, n.profileError = a.error.message || "Profile update failed";
      }
    ), t.addCase(mo.pending, (n) => {
      n.preferencesLoading = !0, n.preferencesError = null;
    }).addCase(
      mo.fulfilled,
      (n, a) => {
        n.preferencesLoading = !1, n.preferences = {
          ...n.preferences,
          ...a.payload
        };
      }
    ).addCase(
      mo.rejected,
      (n, a) => {
        n.preferencesLoading = !1, n.preferencesError = a.error.message || "Preferences update failed";
      }
    );
  }
}), {
  clearAuthError: CC,
  updateLastActivity: jC,
  setSessionExpiry: zC,
  toggleChatEnabled: TC,
  toggleProfanityFilter: PC,
  setPrivacyLevel: NC,
  clearUserData: EC
} = dl.actions, ul = dl.reducer, Pb = [
  {
    id: "light",
    name: "light",
    displayName: "Light",
    type: "light",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      accent: "#06b6d4",
      background: "#ffffff",
      surface: "#f8fafc",
      text: "#1e293b",
      textSecondary: "#64748b",
      border: "#e2e8f0",
      error: "#ef4444",
      warning: "#f59e0b",
      success: "#22c55e",
      info: "#3b82f6"
    }
  },
  {
    id: "dark",
    name: "dark",
    displayName: "Dark",
    type: "dark",
    colors: {
      primary: "#3b82f6",
      secondary: "#64748b",
      accent: "#06b6d4",
      background: "#0f172a",
      surface: "#1e293b",
      text: "#f1f5f9",
      textSecondary: "#94a3b8",
      border: "#334155",
      error: "#ef4444",
      warning: "#f59e0b",
      success: "#22c55e",
      info: "#3b82f6"
    }
  }
], Nb = {
  // Current theme
  currentTheme: "light",
  previousTheme: null,
  // Theme system
  systemPreference: "light",
  followSystem: !1,
  // Available themes
  availableThemes: Pb,
  customThemes: [],
  // Palettes
  currentPalette: null,
  availablePalettes: [],
  customPalettes: [],
  // Customization
  customization: {
    primaryColor: null,
    accentColor: null,
    borderRadius: null,
    fontSize: null,
    density: null
  },
  // Accessibility
  accessibility: {
    highContrast: !1,
    reducedMotion: !1,
    largeText: !1,
    focusRings: !0
  },
  // Loading
  isLoading: !1,
  error: null
}, ml = Wt({
  name: "theme",
  initialState: Nb,
  reducers: {
    // Theme selection
    setTheme: (t, n) => {
      t.previousTheme = t.currentTheme, t.currentTheme = n.payload;
    },
    setSystemPreference: (t, n) => {
      t.systemPreference = n.payload, t.followSystem && (t.previousTheme = t.currentTheme, t.currentTheme = n.payload);
    },
    setFollowSystem: (t, n) => {
      t.followSystem = n.payload, n.payload && (t.previousTheme = t.currentTheme, t.currentTheme = t.systemPreference);
    },
    // Theme management
    addCustomTheme: (t, n) => {
      const a = t.customThemes.findIndex(
        (r) => r.id === n.payload.id
      );
      a >= 0 ? t.customThemes[a] = n.payload : t.customThemes.push(n.payload);
    },
    removeCustomTheme: (t, n) => {
      t.customThemes = t.customThemes.filter(
        (a) => a.id !== n.payload
      ), t.currentTheme === n.payload && (t.currentTheme = "light");
    },
    // Palette management
    setPalette: (t, n) => {
      t.currentPalette = n.payload;
    },
    addCustomPalette: (t, n) => {
      const a = t.customPalettes.findIndex(
        (r) => r.id === n.payload.id
      );
      a >= 0 ? t.customPalettes[a] = n.payload : t.customPalettes.push(n.payload);
    },
    removeCustomPalette: (t, n) => {
      t.customPalettes = t.customPalettes.filter(
        (a) => a.id !== n.payload
      ), t.currentPalette === n.payload && (t.currentPalette = null);
    },
    // Theme customization
    updateCustomization: (t, n) => {
      t.customization = {
        ...t.customization,
        ...n.payload
      };
    },
    resetCustomization: (t) => {
      t.customization = {
        primaryColor: null,
        accentColor: null,
        borderRadius: null,
        fontSize: null,
        density: null
      };
    },
    // Accessibility
    updateAccessibility: (t, n) => {
      t.accessibility = {
        ...t.accessibility,
        ...n.payload
      };
    },
    toggleHighContrast: (t) => {
      t.accessibility.highContrast = !t.accessibility.highContrast;
    },
    toggleReducedMotion: (t) => {
      t.accessibility.reducedMotion = !t.accessibility.reducedMotion;
    },
    toggleLargeText: (t) => {
      t.accessibility.largeText = !t.accessibility.largeText;
    },
    toggleFocusRings: (t) => {
      t.accessibility.focusRings = !t.accessibility.focusRings;
    },
    // Utility actions
    setLoading: (t, n) => {
      t.isLoading = n.payload;
    },
    setError: (t, n) => {
      t.error = n.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    // Quick theme toggles
    toggleTheme: (t) => {
      const n = t.currentTheme;
      n === "light" ? (t.previousTheme = n, t.currentTheme = "dark") : n === "dark" && (t.previousTheme = n, t.currentTheme = "light");
    },
    revertTheme: (t) => {
      if (t.previousTheme) {
        const n = t.currentTheme;
        t.currentTheme = t.previousTheme, t.previousTheme = n;
      }
    }
  }
}), {
  setTheme: IC,
  setSystemPreference: LC,
  setFollowSystem: AC,
  addCustomTheme: MC,
  removeCustomTheme: OC,
  setPalette: RC,
  addCustomPalette: DC,
  removeCustomPalette: BC,
  updateCustomization: $C,
  resetCustomization: FC,
  updateAccessibility: HC,
  toggleHighContrast: UC,
  toggleReducedMotion: ZC,
  toggleLargeText: WC,
  toggleFocusRings: VC,
  setLoading: GC,
  setError: qC,
  clearError: KC,
  toggleTheme: YC,
  revertTheme: JC
} = ml.actions, hl = ml.reducer, Eb = {
  // Connection
  isConnected: !1,
  isConnecting: !1,
  connectionError: null,
  reconnectAttempts: 0,
  maxReconnectAttempts: 5,
  reconnectDelay: 1e3,
  // Socket instance
  socketId: null,
  url: null,
  // Messages
  messages: [],
  pendingMessages: [],
  messageHistory: [],
  maxMessageHistory: 100,
  // Events
  registeredEvents: [],
  // Settings
  autoReconnect: !0,
  heartbeatInterval: 3e4,
  lastHeartbeat: null,
  // Statistics
  stats: {
    messagesReceived: 0,
    messagesSent: 0,
    connectTime: null,
    totalUptime: 0,
    reconnectCount: 0
  }
}, ho = xt(
  "socket/connect",
  async (t) => {
    const { url: n, options: a = {} } = t;
    return new Promise((r, c) => {
      setTimeout(() => {
        r({
          socketId: `socket-${Date.now()}`,
          url: n,
          connectTime: Date.now()
        });
      }, 1e3);
    });
  }
), Ib = xt(
  "socket/disconnect",
  async () => new Promise(
    (t) => {
      setTimeout(() => {
        t({ disconnectTime: Date.now() });
      }, 500);
    }
  )
), po = xt(
  "socket/sendMessage",
  async (t) => {
    const n = {
      id: `msg-${Date.now()}`,
      type: t.type,
      data: t.data,
      timestamp: Date.now(),
      acknowledged: !1
    };
    return await new Promise(
      (a) => setTimeout(a, 100)
    ), { ...n, acknowledged: !0 };
  }
), pl = Wt({
  name: "socket",
  initialState: Eb,
  reducers: {
    // Connection management
    setConnecting: (t, n) => {
      t.isConnecting = n.payload;
    },
    setConnectionError: (t, n) => {
      t.connectionError = n.payload;
    },
    clearConnectionError: (t) => {
      t.connectionError = null;
    },
    // Message handling
    receiveMessage: (t, n) => {
      const a = n.payload;
      t.messages.push(a), t.messageHistory.push(a), t.stats.messagesReceived += 1, t.messageHistory.length > t.maxMessageHistory && (t.messageHistory = t.messageHistory.slice(
        -t.maxMessageHistory
      ));
    },
    acknowledgeMessage: (t, n) => {
      const a = n.payload, r = t.messages.find(
        (d) => d.id === a
      );
      r && (r.acknowledged = !0);
      const c = t.pendingMessages.find(
        (d) => d.id === a
      );
      c && (c.acknowledged = !0);
    },
    clearMessages: (t) => {
      t.messages = [];
    },
    clearMessageHistory: (t) => {
      t.messageHistory = [];
    },
    // Event management
    registerEvent: (t, n) => {
      const { type: a, handler: r } = n.payload, c = t.registeredEvents.find(
        (d) => d.type === a
      );
      c ? (c.handler = r, c.active = !0) : t.registeredEvents.push({
        type: a,
        handler: r,
        active: !0
      });
    },
    unregisterEvent: (t, n) => {
      const a = n.payload, r = t.registeredEvents.findIndex(
        (c) => c.type === a
      );
      r >= 0 && t.registeredEvents.splice(r, 1);
    },
    toggleEvent: (t, n) => {
      const a = n.payload, r = t.registeredEvents.find(
        (c) => c.type === a
      );
      r && (r.active = !r.active);
    },
    // Settings
    updateSettings: (t, n) => {
      const {
        autoReconnect: a,
        maxReconnectAttempts: r,
        reconnectDelay: c,
        heartbeatInterval: d,
        maxMessageHistory: u
      } = n.payload;
      a !== void 0 && (t.autoReconnect = a), r !== void 0 && (t.maxReconnectAttempts = r), c !== void 0 && (t.reconnectDelay = c), d !== void 0 && (t.heartbeatInterval = d), u !== void 0 && (t.maxMessageHistory = u);
    },
    // Heartbeat
    updateHeartbeat: (t) => {
      t.lastHeartbeat = Date.now();
    },
    // Statistics
    incrementReconnectCount: (t) => {
      t.stats.reconnectCount += 1;
    },
    updateUptime: (t, n) => {
      t.stats.totalUptime = n.payload;
    },
    resetStats: (t) => {
      t.stats = {
        messagesReceived: 0,
        messagesSent: 0,
        connectTime: null,
        totalUptime: 0,
        reconnectCount: 0
      };
    },
    // Utility
    resetReconnectAttempts: (t) => {
      t.reconnectAttempts = 0;
    }
  },
  extraReducers: (t) => {
    t.addCase(ho.pending, (n) => {
      n.isConnecting = !0, n.connectionError = null;
    }).addCase(ho.fulfilled, (n, a) => {
      n.isConnecting = !1, n.isConnected = !0, n.socketId = a.payload.socketId, n.url = a.payload.url, n.stats.connectTime = a.payload.connectTime, n.reconnectAttempts = 0;
    }).addCase(ho.rejected, (n, a) => {
      n.isConnecting = !1, n.isConnected = !1, n.connectionError = a.error.message || "Connection failed", n.reconnectAttempts += 1;
    }), t.addCase(
      Ib.fulfilled,
      (n, a) => {
        n.isConnected = !1, n.isConnecting = !1, n.socketId = null, n.url = null, n.stats.connectTime && (n.stats.totalUptime += a.payload.disconnectTime - n.stats.connectTime), n.stats.connectTime = null;
      }
    ), t.addCase(po.pending, (n, a) => {
      const r = {
        id: `temp-${Date.now()}`,
        type: a.meta.arg.type,
        data: a.meta.arg.data,
        timestamp: Date.now(),
        acknowledged: !1
      };
      n.pendingMessages.push(r);
    }).addCase(po.fulfilled, (n, a) => {
      n.pendingMessages = n.pendingMessages.filter(
        (r) => r.id !== a.payload.id
      ), n.stats.messagesSent += 1;
    }).addCase(po.rejected, (n, a) => {
      n.connectionError = a.error.message || "Failed to send message";
    });
  }
}), {
  setConnecting: XC,
  setConnectionError: QC,
  clearConnectionError: ej,
  receiveMessage: tj,
  acknowledgeMessage: ij,
  clearMessages: nj,
  clearMessageHistory: aj,
  registerEvent: oj,
  unregisterEvent: rj,
  toggleEvent: sj,
  updateSettings: lj,
  updateHeartbeat: cj,
  incrementReconnectCount: _j,
  updateUptime: dj,
  resetStats: uj,
  resetReconnectAttempts: mj
} = pl.actions, fl = pl.reducer, Lb = {
  // Current session
  currentSession: null,
  sessionLoading: !1,
  sessionError: null,
  // Match history
  matches: [],
  matchesLoading: !1,
  matchesError: null,
  // Leaderboards
  leaderboards: {},
  leaderboardsLoading: !1,
  leaderboardsError: null,
  // Achievements
  achievements: [],
  achievementsLoading: !1,
  achievementsError: null,
  // Statistics
  playerStats: {
    totalGames: 0,
    totalWins: 0,
    totalLosses: 0,
    winRate: 0,
    averageScore: 0,
    bestScore: 0,
    totalPlayTime: 0,
    favoriteGameType: null,
    streaks: {
      current: 0,
      best: 0
    }
  },
  // Preferences
  preferences: {
    difficulty: "medium",
    soundEnabled: !0,
    musicEnabled: !0,
    animationsEnabled: !0,
    autoAcceptMatches: !1,
    preferredGameTypes: []
  }
}, fo = xt(
  "game/createSession",
  async (t) => {
    const n = await fetch("/api/game/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error("Failed to create game session");
    return n.json();
  }
), Ab = xt(
  "game/joinSession",
  async (t) => {
    const n = await fetch(
      `/api/game/session/${t}/join`,
      {
        method: "POST"
      }
    );
    if (!n.ok)
      throw new Error("Failed to join game session");
    return n.json();
  }
), go = xt(
  "game/fetchMatches",
  async (t = {}) => {
    const n = await fetch(
      `/api/game/matches?limit=${t.limit || 20}&offset=${t.offset || 0}`
    );
    if (!n.ok)
      throw new Error("Failed to fetch matches");
    return n.json();
  }
), bo = xt(
  "game/fetchLeaderboard",
  async (t) => {
    const n = await fetch(
      `/api/game/leaderboard/${t}`
    );
    if (!n.ok)
      throw new Error("Failed to fetch leaderboard");
    return { gameType: t, data: await n.json() };
  }
), yo = xt(
  "game/fetchAchievements",
  async () => {
    const t = await fetch("/api/game/achievements");
    if (!t.ok)
      throw new Error("Failed to fetch achievements");
    return t.json();
  }
), gl = Wt({
  name: "game",
  initialState: Lb,
  reducers: {
    // Session management
    updateSession: (t, n) => {
      t.currentSession && (t.currentSession = {
        ...t.currentSession,
        ...n.payload
      });
    },
    endSession: (t) => {
      t.currentSession && (t.currentSession.status = "completed", t.currentSession.endTime = Date.now());
    },
    clearSession: (t) => {
      t.currentSession = null;
    },
    // Player management
    updatePlayer: (t, n) => {
      if (t.currentSession) {
        const a = t.currentSession.players.find(
          (r) => r.id === n.payload.playerId
        );
        a && Object.assign(a, n.payload.updates);
      }
    },
    setPlayerReady: (t, n) => {
      if (t.currentSession) {
        const a = t.currentSession.players.find(
          (r) => r.id === n.payload.playerId
        );
        a && (a.isReady = n.payload.ready);
      }
    },
    // Achievements
    unlockAchievement: (t, n) => {
      const a = t.achievements.find(
        (r) => r.id === n.payload
      );
      a && !a.unlocked && (a.unlocked = !0, a.unlockedAt = Date.now(), a.progress = a.maxProgress);
    },
    updateAchievementProgress: (t, n) => {
      const a = t.achievements.find(
        (r) => r.id === n.payload.achievementId
      );
      a && !a.unlocked && (a.progress = Math.min(
        n.payload.progress,
        a.maxProgress
      ), a.progress >= a.maxProgress && (a.unlocked = !0, a.unlockedAt = Date.now()));
    },
    // Statistics
    updatePlayerStats: (t, n) => {
      t.playerStats = {
        ...t.playerStats,
        ...n.payload
      };
    },
    incrementGameCount: (t) => {
      t.playerStats.totalGames += 1;
    },
    recordWin: (t, n) => {
      t.playerStats.totalWins += 1, t.playerStats.winRate = t.playerStats.totalWins / t.playerStats.totalGames, t.playerStats.streaks.current += 1, t.playerStats.streaks.best = Math.max(
        t.playerStats.streaks.current,
        t.playerStats.streaks.best
      ), n.payload.score > t.playerStats.bestScore && (t.playerStats.bestScore = n.payload.score);
      const a = t.playerStats.averageScore * (t.playerStats.totalGames - 1) + n.payload.score;
      t.playerStats.averageScore = a / t.playerStats.totalGames;
    },
    recordLoss: (t) => {
      t.playerStats.totalLosses += 1, t.playerStats.winRate = t.playerStats.totalWins / t.playerStats.totalGames, t.playerStats.streaks.current = 0;
    },
    // Preferences
    updatePreferences: (t, n) => {
      t.preferences = {
        ...t.preferences,
        ...n.payload
      };
    },
    toggleSound: (t) => {
      t.preferences.soundEnabled = !t.preferences.soundEnabled;
    },
    toggleMusic: (t) => {
      t.preferences.musicEnabled = !t.preferences.musicEnabled;
    },
    toggleAnimations: (t) => {
      t.preferences.animationsEnabled = !t.preferences.animationsEnabled;
    },
    setDifficulty: (t, n) => {
      t.preferences.difficulty = n.payload;
    },
    // Error handling
    clearSessionError: (t) => {
      t.sessionError = null;
    },
    clearMatchesError: (t) => {
      t.matchesError = null;
    },
    clearLeaderboardsError: (t) => {
      t.leaderboardsError = null;
    },
    clearAchievementsError: (t) => {
      t.achievementsError = null;
    }
  },
  extraReducers: (t) => {
    t.addCase(fo.pending, (n) => {
      n.sessionLoading = !0, n.sessionError = null;
    }).addCase(
      fo.fulfilled,
      (n, a) => {
        n.sessionLoading = !1, n.currentSession = a.payload;
      }
    ).addCase(
      fo.rejected,
      (n, a) => {
        n.sessionLoading = !1, n.sessionError = a.error.message || "Failed to create session";
      }
    ), t.addCase(
      Ab.fulfilled,
      (n, a) => {
        n.currentSession = a.payload;
      }
    ), t.addCase(go.pending, (n) => {
      n.matchesLoading = !0, n.matchesError = null;
    }).addCase(go.fulfilled, (n, a) => {
      n.matchesLoading = !1, n.matches = a.payload;
    }).addCase(go.rejected, (n, a) => {
      n.matchesLoading = !1, n.matchesError = a.error.message || "Failed to fetch matches";
    }), t.addCase(bo.pending, (n) => {
      n.leaderboardsLoading = !0, n.leaderboardsError = null;
    }).addCase(
      bo.fulfilled,
      (n, a) => {
        n.leaderboardsLoading = !1, n.leaderboards[a.payload.gameType] = a.payload.data;
      }
    ).addCase(
      bo.rejected,
      (n, a) => {
        n.leaderboardsLoading = !1, n.leaderboardsError = a.error.message || "Failed to fetch leaderboard";
      }
    ), t.addCase(yo.pending, (n) => {
      n.achievementsLoading = !0, n.achievementsError = null;
    }).addCase(
      yo.fulfilled,
      (n, a) => {
        n.achievementsLoading = !1, n.achievements = a.payload;
      }
    ).addCase(
      yo.rejected,
      (n, a) => {
        n.achievementsLoading = !1, n.achievementsError = a.error.message || "Failed to fetch achievements";
      }
    );
  }
}), {
  updateSession: hj,
  endSession: pj,
  clearSession: fj,
  updatePlayer: gj,
  setPlayerReady: bj,
  unlockAchievement: yj,
  updateAchievementProgress: xj,
  updatePlayerStats: vj,
  incrementGameCount: wj,
  recordWin: kj,
  recordLoss: Sj,
  updatePreferences: Cj,
  toggleSound: jj,
  toggleMusic: zj,
  toggleAnimations: Tj,
  setDifficulty: Pj,
  clearSessionError: Nj,
  clearMatchesError: Ej,
  clearLeaderboardsError: Ij,
  clearAchievementsError: Lj
} = gl.actions, bl = gl.reducer, $i = {
  // Notifications
  notifications: {
    enabled: !0,
    email: !0,
    push: !0,
    desktop: !1,
    sound: !0,
    vibration: !0,
    gameInvites: !0,
    friendRequests: !0,
    achievements: !0,
    systemUpdates: !1
  },
  // Privacy
  privacy: {
    profileVisibility: "friends",
    showOnlineStatus: !0,
    showGameHistory: !0,
    showAchievements: !0,
    allowFriendRequests: !0,
    allowGameInvites: !0,
    shareStatistics: !1,
    dataCollection: !1
  },
  // Accessibility
  accessibility: {
    highContrast: !1,
    largeText: !1,
    reducedMotion: !1,
    screenReader: !1,
    keyboardNavigation: !0,
    focusIndicators: !0,
    altText: !0,
    captionPreferences: {
      enabled: !1,
      size: "medium",
      color: "#ffffff",
      background: "#000000"
    }
  },
  // Performance
  performance: {
    animationsEnabled: !0,
    particleEffects: !0,
    graphicsQuality: "medium",
    frameRateLimit: null,
    memoryOptimization: !1,
    preloadAssets: !0,
    lazyLoading: !0
  },
  // Security
  security: {
    twoFactorAuth: !1,
    sessionTimeout: 30,
    autoLogout: !0,
    passwordReminder: !1,
    deviceTracking: !0,
    loginNotifications: !0,
    suspiciousActivityAlerts: !0
  },
  // Localization
  language: "en",
  region: "US",
  timezone: "UTC",
  dateFormat: "MM/DD/YYYY",
  timeFormat: "12h",
  numberFormat: "US",
  // Behavior
  autoSave: !0,
  autoSync: !0,
  offlineMode: !1,
  debugMode: !1,
  developerMode: !1,
  // Storage
  storageQuota: 1024 * 1024 * 100,
  // 100MB
  storageUsed: 0,
  cacheSize: 0,
  dataSyncInterval: 5 * 60 * 1e3,
  // 5 minutes
  // Loading
  isLoading: !1,
  isSyncing: !1,
  error: null,
  syncError: null,
  // Timestamps
  lastUpdated: null,
  lastSynced: null
}, xo = xt(
  "settings/load",
  async () => {
    const t = await fetch("/api/settings");
    if (!t.ok)
      throw new Error("Failed to load settings");
    return t.json();
  }
), vo = xt(
  "settings/save",
  async (t) => {
    const n = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!n.ok)
      throw new Error("Failed to save settings");
    return n.json();
  }
), wo = xt(
  "settings/sync",
  async () => {
    const t = await fetch("/api/settings/sync");
    if (!t.ok)
      throw new Error("Failed to sync settings");
    return t.json();
  }
), yl = Wt({
  name: "settings",
  initialState: $i,
  reducers: {
    // Notification settings
    updateNotificationSettings: (t, n) => {
      t.notifications = {
        ...t.notifications,
        ...n.payload
      }, t.lastUpdated = Date.now();
    },
    toggleNotifications: (t) => {
      t.notifications.enabled = !t.notifications.enabled, t.lastUpdated = Date.now();
    },
    // Privacy settings
    updatePrivacySettings: (t, n) => {
      t.privacy = {
        ...t.privacy,
        ...n.payload
      }, t.lastUpdated = Date.now();
    },
    setProfileVisibility: (t, n) => {
      t.privacy.profileVisibility = n.payload, t.lastUpdated = Date.now();
    },
    // Accessibility settings
    updateAccessibilitySettings: (t, n) => {
      t.accessibility = {
        ...t.accessibility,
        ...n.payload
      }, t.lastUpdated = Date.now();
    },
    toggleHighContrast: (t) => {
      t.accessibility.highContrast = !t.accessibility.highContrast, t.lastUpdated = Date.now();
    },
    toggleLargeText: (t) => {
      t.accessibility.largeText = !t.accessibility.largeText, t.lastUpdated = Date.now();
    },
    toggleReducedMotion: (t) => {
      t.accessibility.reducedMotion = !t.accessibility.reducedMotion, t.lastUpdated = Date.now();
    },
    // Performance settings
    updatePerformanceSettings: (t, n) => {
      t.performance = {
        ...t.performance,
        ...n.payload
      }, t.lastUpdated = Date.now();
    },
    setGraphicsQuality: (t, n) => {
      t.performance.graphicsQuality = n.payload, t.lastUpdated = Date.now();
    },
    toggleAnimations: (t) => {
      t.performance.animationsEnabled = !t.performance.animationsEnabled, t.lastUpdated = Date.now();
    },
    // Security settings
    updateSecuritySettings: (t, n) => {
      t.security = {
        ...t.security,
        ...n.payload
      }, t.lastUpdated = Date.now();
    },
    toggleTwoFactorAuth: (t) => {
      t.security.twoFactorAuth = !t.security.twoFactorAuth, t.lastUpdated = Date.now();
    },
    setSessionTimeout: (t, n) => {
      t.security.sessionTimeout = n.payload, t.lastUpdated = Date.now();
    },
    // Localization
    setLanguage: (t, n) => {
      t.language = n.payload, t.lastUpdated = Date.now();
    },
    setTimezone: (t, n) => {
      t.timezone = n.payload, t.lastUpdated = Date.now();
    },
    setTimeFormat: (t, n) => {
      t.timeFormat = n.payload, t.lastUpdated = Date.now();
    },
    // Application behavior
    toggleAutoSave: (t) => {
      t.autoSave = !t.autoSave, t.lastUpdated = Date.now();
    },
    toggleAutoSync: (t) => {
      t.autoSync = !t.autoSync, t.lastUpdated = Date.now();
    },
    toggleOfflineMode: (t) => {
      t.offlineMode = !t.offlineMode, t.lastUpdated = Date.now();
    },
    toggleDebugMode: (t) => {
      t.debugMode = !t.debugMode, t.lastUpdated = Date.now();
    },
    // Storage management
    updateStorageUsed: (t, n) => {
      t.storageUsed = n.payload;
    },
    updateCacheSize: (t, n) => {
      t.cacheSize = n.payload;
    },
    clearCache: (t) => {
      t.cacheSize = 0;
    },
    // Error handling
    setError: (t, n) => {
      t.error = n.payload;
    },
    setSyncError: (t, n) => {
      t.syncError = n.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    clearSyncError: (t) => {
      t.syncError = null;
    },
    // Reset settings
    resetToDefaults: (t) => {
      const { isLoading: n, isSyncing: a, error: r, syncError: c } = t;
      Object.assign(t, {
        ...$i,
        isLoading: n,
        isSyncing: a,
        error: r,
        syncError: c,
        lastUpdated: Date.now()
      });
    },
    resetSection: (t, n) => {
      const a = n.payload;
      a === "notifications" ? t.notifications = $i.notifications : a === "privacy" ? t.privacy = $i.privacy : a === "accessibility" ? t.accessibility = $i.accessibility : a === "performance" ? t.performance = $i.performance : a === "security" && (t.security = $i.security), t.lastUpdated = Date.now();
    }
  },
  extraReducers: (t) => {
    t.addCase(xo.pending, (n) => {
      n.isLoading = !0, n.error = null;
    }).addCase(xo.fulfilled, (n, a) => {
      n.isLoading = !1, Object.assign(n, a.payload), n.lastUpdated = Date.now();
    }).addCase(xo.rejected, (n, a) => {
      n.isLoading = !1, n.error = a.error.message || "Failed to load settings";
    }), t.addCase(vo.pending, (n) => {
      n.isLoading = !0, n.error = null;
    }).addCase(vo.fulfilled, (n) => {
      n.isLoading = !1, n.lastUpdated = Date.now();
    }).addCase(vo.rejected, (n, a) => {
      n.isLoading = !1, n.error = a.error.message || "Failed to save settings";
    }), t.addCase(wo.pending, (n) => {
      n.isSyncing = !0, n.syncError = null;
    }).addCase(wo.fulfilled, (n, a) => {
      n.isSyncing = !1, Object.assign(n, a.payload), n.lastSynced = Date.now();
    }).addCase(wo.rejected, (n, a) => {
      n.isSyncing = !1, n.syncError = a.error.message || "Failed to sync settings";
    });
  }
}), {
  updateNotificationSettings: Aj,
  toggleNotifications: Mj,
  updatePrivacySettings: Oj,
  setProfileVisibility: Rj,
  updateAccessibilitySettings: Dj,
  toggleHighContrast: Bj,
  toggleLargeText: $j,
  toggleReducedMotion: Fj,
  updatePerformanceSettings: Hj,
  setGraphicsQuality: Uj,
  toggleAnimations: Zj,
  updateSecuritySettings: Wj,
  toggleTwoFactorAuth: Vj,
  setSessionTimeout: Gj,
  setLanguage: qj,
  setTimezone: Kj,
  setTimeFormat: Yj,
  toggleAutoSave: Jj,
  toggleAutoSync: Xj,
  toggleOfflineMode: Qj,
  toggleDebugMode: e6,
  updateStorageUsed: t6,
  updateCacheSize: i6,
  clearCache: n6,
  setError: a6,
  setSyncError: o6,
  clearError: r6,
  clearSyncError: s6,
  resetToDefaults: l6,
  resetSection: c6
} = yl.actions, xl = yl.reducer, Mb = {
  active: [],
  all: [],
  queue: [],
  // Display settings
  maxActive: 5,
  defaultDuration: 5e3,
  position: "top-right",
  // Statistics
  stats: {
    total: 0,
    unread: 0,
    dismissed: 0,
    achievements: 0
  },
  // Settings
  soundEnabled: !0,
  showAchievements: !0,
  showSystem: !0,
  showErrors: !0,
  groupSimilar: !0,
  // Loading
  isLoading: !1,
  error: null
}, Ti = Wt({
  name: "notifications",
  initialState: Mb,
  reducers: {
    // Add notifications
    addNotification: (t, n) => {
      const a = {
        ...n.payload,
        id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
        read: !1,
        dismissed: !1
      };
      t.all.unshift(a), t.stats.total += 1, t.stats.unread += 1, a.type === "achievement" && (t.stats.achievements += 1), t.active.length < t.maxActive ? t.active.push(a) : t.queue.push(a);
    },
    // Quick notification creators
    addSuccess: (t, n) => {
      const { title: a, message: r, duration: c } = n.payload;
      Ti.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "success",
            title: a,
            message: r,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addError: (t, n) => {
      const {
        title: a,
        message: r,
        persistent: c = !1
      } = n.payload;
      Ti.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "error",
            title: a,
            message: r,
            persistent: c,
            duration: c ? void 0 : t.defaultDuration * 2
          }
        }
      );
    },
    addWarning: (t, n) => {
      const { title: a, message: r, duration: c } = n.payload;
      Ti.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "warning",
            title: a,
            message: r,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addInfo: (t, n) => {
      const { title: a, message: r, duration: c } = n.payload;
      Ti.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "info",
            title: a,
            message: r,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addAchievement: (t, n) => {
      const { title: a, message: r, icon: c, data: d } = n.payload;
      Ti.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "achievement",
            title: a,
            message: r,
            icon: c,
            data: d,
            duration: 8e3,
            // Longer duration for achievements
            persistent: !1
          }
        }
      );
    },
    // Dismiss notifications
    dismissNotification: (t, n) => {
      const a = n.payload, r = t.active.findIndex(
        (d) => d.id === a
      );
      if (r >= 0 && (t.active.splice(r, 1), t.queue.length > 0)) {
        const d = t.queue.shift();
        t.active.push(d);
      }
      const c = t.all.find(
        (d) => d.id === a
      );
      c && !c.dismissed && (c.dismissed = !0, t.stats.dismissed += 1);
    },
    dismissAll: (t) => {
      t.active.forEach((n) => {
        n.dismissed || (n.dismissed = !0, t.stats.dismissed += 1);
      }), t.active = [], t.queue.forEach((n) => {
        n.dismissed || (n.dismissed = !0, t.stats.dismissed += 1);
      }), t.queue = [];
    },
    // Mark as read
    markAsRead: (t, n) => {
      const a = n.payload, r = t.all.find(
        (c) => c.id === a
      );
      r && !r.read && (r.read = !0, t.stats.unread -= 1);
    },
    markAllAsRead: (t) => {
      t.all.forEach((n) => {
        n.read || (n.read = !0);
      }), t.stats.unread = 0;
    },
    // Handle notification actions
    executeAction: (t, n) => {
      const { notificationId: a } = n.payload, r = t.all.find(
        (c) => c.id === a
      );
      r && !r.read && (r.read = !0, t.stats.unread -= 1);
    },
    // Settings
    updateSettings: (t, n) => {
      const {
        soundEnabled: a,
        showAchievements: r,
        showSystem: c,
        showErrors: d,
        groupSimilar: u,
        maxActive: h,
        defaultDuration: p,
        position: g
      } = n.payload;
      a !== void 0 && (t.soundEnabled = a), r !== void 0 && (t.showAchievements = r), c !== void 0 && (t.showSystem = c), d !== void 0 && (t.showErrors = d), u !== void 0 && (t.groupSimilar = u), h !== void 0 && (t.maxActive = h), p !== void 0 && (t.defaultDuration = p), g !== void 0 && (t.position = g);
    },
    toggleSound: (t) => {
      t.soundEnabled = !t.soundEnabled;
    },
    // Clear history
    clearHistory: (t) => {
      t.all = t.all.filter(
        (n) => t.active.includes(n) || t.queue.includes(n)
      ), t.stats.total = t.all.length, t.stats.unread = t.all.filter(
        (n) => !n.read
      ).length, t.stats.dismissed = t.all.filter(
        (n) => n.dismissed
      ).length, t.stats.achievements = t.all.filter(
        (n) => n.type === "achievement"
      ).length;
    },
    clearAll: (t) => {
      t.active = [], t.all = [], t.queue = [], t.stats = {
        total: 0,
        unread: 0,
        dismissed: 0,
        achievements: 0
      };
    },
    // Filter notifications
    removeByType: (t, n) => {
      const a = n.payload;
      t.active = t.active.filter(
        (u) => u.type !== a
      ), t.queue = t.queue.filter(
        (u) => u.type !== a
      );
      const r = t.all.filter(
        (u) => u.type === a
      ).length, c = t.all.filter(
        (u) => u.type === a && !u.read
      ).length, d = a === "achievement" ? t.all.filter((u) => u.type === "achievement").length : 0;
      t.all = t.all.filter((u) => u.type !== a), t.stats.total -= r, t.stats.unread -= c, a === "achievement" && (t.stats.achievements -= d);
    },
    // Error handling
    setError: (t, n) => {
      t.error = n.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    setLoading: (t, n) => {
      t.isLoading = n.payload;
    },
    // Auto-dismiss expired notifications
    processExpiredNotifications: (t) => {
      const n = Date.now(), a = [];
      t.active.forEach((r) => {
        !r.persistent && r.duration && n - r.timestamp >= r.duration && a.push(r.id);
      }), a.forEach((r) => {
        Ti.caseReducers.dismissNotification(
          t,
          {
            type: "dismissNotification",
            payload: r
          }
        );
      });
    }
  }
}), {
  addNotification: _6,
  addSuccess: d6,
  addError: u6,
  addWarning: m6,
  addInfo: h6,
  addAchievement: p6,
  dismissNotification: f6,
  dismissAll: g6,
  markAsRead: b6,
  markAllAsRead: y6,
  executeAction: x6,
  updateSettings: v6,
  toggleSound: w6,
  clearHistory: k6,
  clearAll: S6,
  removeByType: C6,
  setError: j6,
  clearError: z6,
  setLoading: T6,
  processExpiredNotifications: P6
} = Ti.actions, vl = Ti.reducer, Ob = {
  maxSize: 10 * 1024 * 1024,
  // 10MB
  maxFiles: 5,
  allowedTypes: [
    "image/*",
    "video/*",
    "audio/*",
    ".pdf",
    ".doc",
    ".docx"
  ],
  autoUpload: !1,
  generateThumbnails: !0,
  validateOnSelect: !0,
  uploadEndpoint: "/api/upload",
  chunkSize: 1024 * 1024,
  // 1MB chunks
  retryAttempts: 3
}, Rb = {
  sessions: {},
  activeSessionId: null,
  files: [],
  selectedFiles: [],
  globalConfig: Ob,
  componentStates: {},
  validationErrors: {},
  stats: {
    totalUploads: 0,
    successfulUploads: 0,
    failedUploads: 0,
    totalBytesUploaded: 0,
    averageUploadTime: 0
  },
  isLoading: !1,
  error: null
}, ko = xt(
  "files/uploadFile",
  async (t) => {
    const { sessionId: n, fileId: a, file: r, config: c } = t;
    return new Promise((d, u) => {
      let h = 0;
      const p = setInterval(() => {
        h += Math.random() * 20, h >= 100 && (clearInterval(p), d({
          fileId: a,
          url: `https://example.com/files/${a}`,
          metadata: {
            originalName: r.name,
            mimeType: r.type,
            uploadedAt: Date.now()
          }
        }));
      }, 200);
    });
  }
), Db = xt(
  "files/generateThumbnail",
  async (t) => {
    const { fileId: n, file: a } = t;
    return new Promise((r) => {
      setTimeout(() => {
        r({
          fileId: n,
          thumbnailUrl: `https://example.com/thumbnails/${n}`
        });
      }, 1e3);
    });
  }
), Bb = xt(
  "files/validateFiles",
  async (t) => {
    const { files: n, config: a } = t, r = {};
    return n.forEach((c, d) => {
      const u = [];
      c.size > a.maxSize && u.push(
        `File size exceeds maximum allowed size of ${a.maxSize / (1024 * 1024)}MB`
      ), a.allowedTypes.some(
        (p) => p.includes("*") ? c.type.startsWith(
          p.replace("*", "")
        ) : c.type === p || c.name.endsWith(p)
      ) || u.push(
        `File type ${c.type} is not allowed`
      ), u.length > 0 && (r[`file-${d}`] = u);
    }), r;
  }
), ua = Wt({
  name: "files",
  initialState: Rb,
  reducers: {
    // Session management
    createSession: (t, n) => {
      const { sessionId: a, config: r = {} } = n.payload;
      t.sessions[a] = {
        id: a,
        files: [],
        status: "idle",
        totalSize: 0,
        uploadedSize: 0,
        config: { ...t.globalConfig, ...r }
      }, t.activeSessionId = a;
    },
    removeSession: (t, n) => {
      const a = n.payload;
      delete t.sessions[a], t.activeSessionId === a && (t.activeSessionId = null);
    },
    setActiveSession: (t, n) => {
      t.activeSessionId = n.payload;
    },
    // File management
    addFiles: (t, n) => {
      const { sessionId: a, files: r } = n.payload, c = t.sessions[a];
      if (c) {
        const d = r.map((u) => ({
          id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: u.name,
          size: u.size,
          type: u.type,
          lastModified: u.lastModified,
          status: "pending",
          progress: 0
        }));
        c.files.push(...d), c.totalSize += r.reduce(
          (u, h) => u + h.size,
          0
        ), t.files.push(...d);
      }
    },
    removeFile: (t, n) => {
      const { sessionId: a, fileId: r } = n.payload, c = t.sessions[a];
      if (c) {
        const h = c.files.findIndex(
          (p) => p.id === r
        );
        if (h >= 0) {
          const p = c.files[h];
          c.totalSize -= p.size, c.files.splice(h, 1);
        }
      }
      const d = t.files.findIndex(
        (h) => h.id === r
      );
      d >= 0 && t.files.splice(d, 1);
      const u = t.selectedFiles.indexOf(r);
      u >= 0 && t.selectedFiles.splice(u, 1);
    },
    updateFileStatus: (t, n) => {
      const { fileId: a, status: r, error: c } = n.payload;
      Object.values(t.sessions).forEach((u) => {
        const h = u.files.find(
          (p) => p.id === a
        );
        h && (h.status = r, c && (h.error = c));
      });
      const d = t.files.find(
        (u) => u.id === a
      );
      d && (d.status = r, c && (d.error = c));
    },
    updateFileProgress: (t, n) => {
      const { fileId: a, progress: r } = n.payload;
      Object.values(t.sessions).forEach((d) => {
        const u = d.files.find(
          (h) => h.id === a
        );
        u && (u.progress = r, r === 100 && u.status === "uploading" && (u.status = "completed"));
      });
      const c = t.files.find(
        (d) => d.id === a
      );
      c && (c.progress = r, r === 100 && c.status === "uploading" && (c.status = "completed"));
    },
    // File selection
    selectFile: (t, n) => {
      const a = n.payload;
      t.selectedFiles.includes(a) || t.selectedFiles.push(a);
    },
    deselectFile: (t, n) => {
      const a = n.payload, r = t.selectedFiles.indexOf(a);
      r >= 0 && t.selectedFiles.splice(r, 1);
    },
    selectAllFiles: (t, n) => {
      const a = n.payload, r = t.sessions[a];
      r && (t.selectedFiles = [
        .../* @__PURE__ */ new Set([
          ...t.selectedFiles,
          ...r.files.map((c) => c.id)
        ])
      ]);
    },
    deselectAllFiles: (t) => {
      t.selectedFiles = [];
    },
    // Configuration
    updateGlobalConfig: (t, n) => {
      t.globalConfig = {
        ...t.globalConfig,
        ...n.payload
      };
    },
    updateSessionConfig: (t, n) => {
      const { sessionId: a, config: r } = n.payload, c = t.sessions[a];
      c && (c.config = { ...c.config, ...r });
    },
    // Validation
    setValidationErrors: (t, n) => {
      t.validationErrors = n.payload;
    },
    clearValidationErrors: (t, n) => {
      const a = n.payload;
      a ? delete t.validationErrors[a] : t.validationErrors = {};
    },
    // Statistics
    updateStats: (t, n) => {
      t.stats = { ...t.stats, ...n.payload };
    },
    incrementUploadCount: (t, n) => {
      const { success: a, size: r, duration: c } = n.payload;
      if (t.stats.totalUploads += 1, t.stats.totalBytesUploaded += r, a ? t.stats.successfulUploads += 1 : t.stats.failedUploads += 1, c) {
        const d = t.stats.averageUploadTime * (t.stats.totalUploads - 1) + c;
        t.stats.averageUploadTime = d / t.stats.totalUploads;
      }
    },
    // Utility actions
    clearCompletedFiles: (t, n) => {
      const a = n.payload, r = t.sessions[a];
      r && (r.files = r.files.filter(
        (c) => c.status !== "completed"
      ));
    },
    clearErrorFiles: (t, n) => {
      const a = n.payload, r = t.sessions[a];
      r && (r.files = r.files.filter(
        (c) => c.status !== "error"
      ));
    },
    retryFailedFiles: (t, n) => {
      const a = n.payload, r = t.sessions[a];
      r && r.files.forEach((c) => {
        c.status === "error" && (c.status = "pending", c.progress = 0, c.error = void 0);
      });
    },
    // Error handling
    setError: (t, n) => {
      t.error = n.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    setLoading: (t, n) => {
      t.isLoading = n.payload;
    },
    // Component-specific UI state management
    initializeComponentState: (t, n) => {
      const a = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        dragActive: !1,
        uploadProgress: 0,
        validationErrors: [],
        selectedFiles: []
      });
    },
    setComponentDragActive: (t, n) => {
      const { componentId: a, dragActive: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].dragActive = r);
    },
    setComponentUploadProgress: (t, n) => {
      const { componentId: a, progress: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].uploadProgress = r);
    },
    setComponentValidationErrors: (t, n) => {
      const { componentId: a, errors: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].validationErrors = r);
    },
    setComponentSelectedFiles: (t, n) => {
      const { componentId: a, files: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].selectedFiles = r);
    },
    clearComponentState: (t, n) => {
      const a = n.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        dragActive: !1,
        uploadProgress: 0,
        validationErrors: [],
        selectedFiles: []
      });
    },
    removeComponentState: (t, n) => {
      const a = n.payload;
      delete t.componentStates[a];
    }
  },
  extraReducers: (t) => {
    t.addCase(ko.pending, (n, a) => {
      const { fileId: r } = a.meta.arg;
      ua.caseReducers.updateFileStatus(n, {
        type: "updateFileStatus",
        payload: { fileId: r, status: "uploading" }
      });
    }).addCase(ko.fulfilled, (n, a) => {
      const { fileId: r, url: c, metadata: d } = a.payload;
      Object.values(n.sessions).forEach((h) => {
        const p = h.files.find(
          (g) => g.id === r
        );
        p && (p.url = c, p.metadata = d, p.status = "completed", p.progress = 100);
      });
      const u = n.files.find(
        (h) => h.id === r
      );
      u && (u.url = c, u.metadata = d, u.status = "completed", u.progress = 100);
    }).addCase(ko.rejected, (n, a) => {
      const { fileId: r } = a.meta.arg;
      ua.caseReducers.updateFileStatus(n, {
        type: "updateFileStatus",
        payload: {
          fileId: r,
          status: "error",
          error: a.error.message || "Upload failed"
        }
      });
    }), t.addCase(
      Db.fulfilled,
      (n, a) => {
        const { fileId: r, thumbnailUrl: c } = a.payload;
        Object.values(n.sessions).forEach((u) => {
          const h = u.files.find(
            (p) => p.id === r
          );
          h && (h.thumbnailUrl = c);
        });
        const d = n.files.find(
          (u) => u.id === r
        );
        d && (d.thumbnailUrl = c);
      }
    ), t.addCase(
      Bb.fulfilled,
      (n, a) => {
        n.validationErrors = a.payload;
      }
    );
  }
}), {
  createSession: N6,
  removeSession: E6,
  setActiveSession: I6,
  addFiles: L6,
  removeFile: A6,
  updateFileStatus: M6,
  updateFileProgress: O6,
  selectFile: R6,
  deselectFile: D6,
  selectAllFiles: B6,
  deselectAllFiles: $6,
  updateGlobalConfig: F6,
  updateSessionConfig: H6,
  setValidationErrors: U6,
  clearValidationErrors: Z6,
  updateStats: W6,
  incrementUploadCount: V6,
  clearCompletedFiles: G6,
  clearErrorFiles: q6,
  retryFailedFiles: K6,
  setError: Y6,
  clearError: J6,
  setLoading: X6,
  // Component state actions
  initializeComponentState: $b,
  setComponentDragActive: So,
  setComponentUploadProgress: fs,
  setComponentValidationErrors: gs,
  setComponentSelectedFiles: Fb,
  clearComponentState: Q6,
  removeComponentState: Hb
} = ua.actions, Ub = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.dragActive) || !1;
}, Zb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.uploadProgress) || 0;
}, Wb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.validationErrors) || [];
}, Vb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.selectedFiles) || [];
}, wl = ua.reducer, Gb = {
  activeModals: [],
  globalLoading: !1,
  globalError: null
}, kl = Wt({
  name: "modals",
  initialState: Gb,
  reducers: {
    // Modal lifecycle actions
    openModal: (t, n) => {
      const { id: a, data: r } = n.payload, c = t.activeModals.find(
        (d) => d.id === a
      );
      c ? (c.isOpen = !0, r && (c.data = r)) : t.activeModals.push({
        id: a,
        isOpen: !0,
        data: r || {},
        loading: !1,
        error: null,
        success: !1
      });
    },
    closeModal: (t, n) => {
      const a = n.payload, r = t.activeModals.find(
        (c) => c.id === a
      );
      r && (r.isOpen = !1);
    },
    removeModal: (t, n) => {
      const a = n.payload;
      t.activeModals = t.activeModals.filter(
        (r) => r.id !== a
      );
    },
    closeAllModals: (t) => {
      t.activeModals.forEach((n) => {
        n.isOpen = !1;
      });
    },
    // Modal data actions
    updateModalData: (t, n) => {
      const { id: a, data: r } = n.payload, c = t.activeModals.find(
        (d) => d.id === a
      );
      c && (c.data = { ...c.data, ...r });
    },
    setModalForms: (t, n) => {
      const { id: a, field: r, value: c } = n.payload, d = t.activeModals.find(
        (u) => u.id === a
      );
      d && (d.data || (d.data = {}), d.data[r] = c);
    },
    clearModalData: (t, n) => {
      const a = n.payload, r = t.activeModals.find(
        (c) => c.id === a
      );
      r && (r.data = {});
    },
    // Modal state actions
    setModalLoading: (t, n) => {
      const { id: a, loading: r } = n.payload, c = t.activeModals.find(
        (d) => d.id === a
      );
      c && (c.loading = r);
    },
    setModalError: (t, n) => {
      const { id: a, error: r } = n.payload, c = t.activeModals.find(
        (d) => d.id === a
      );
      c && (c.error = r);
    },
    setModalSuccess: (t, n) => {
      const { id: a, success: r } = n.payload, c = t.activeModals.find(
        (d) => d.id === a
      );
      c && (c.success = r);
    },
    resetModalState: (t, n) => {
      const a = n.payload, r = t.activeModals.find(
        (c) => c.id === a
      );
      r && (r.loading = !1, r.error = null, r.success = !1);
    },
    // Global modal actions
    setGlobalLoading: (t, n) => {
      t.globalLoading = n.payload;
    },
    setGlobalError: (t, n) => {
      t.globalError = n.payload;
    },
    resetGlobalState: (t) => {
      t.globalLoading = !1, t.globalError = null;
    }
  }
}), {
  openModal: qb,
  closeModal: e8,
  removeModal: t8,
  closeAllModals: i8,
  updateModalData: n8,
  setModalForms: bs,
  clearModalData: a8,
  setModalLoading: ys,
  setModalError: aa,
  setModalSuccess: Kb,
  resetModalState: o8,
  setGlobalLoading: r8,
  setGlobalError: s8,
  resetGlobalState: l8
} = kl.actions, Yb = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.data) || {};
}, Jb = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.loading) || !1;
}, Xb = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.error) || null;
}, Qb = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.success) || !1;
}, Sl = kl.reducer, $o = {
  sorting: { column: "", direction: "asc" },
  filters: {},
  searchTerm: "",
  selectedRows: /* @__PURE__ */ new Set(),
  expandedRows: /* @__PURE__ */ new Set(),
  editingCell: null
}, ey = {
  componentStates: {}
}, Cl = Wt({
  name: "table",
  initialState: ey,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const {
        componentId: a,
        initialState: r = {}
      } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...$o,
        ...r
      });
    },
    // Sorting actions
    setSorting: (t, n) => {
      const { componentId: a, sorting: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].sorting = r);
    },
    // Filtering actions
    setFilters: (t, n) => {
      const { componentId: a, filters: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].filters = r);
    },
    updateFilter: (t, n) => {
      const { componentId: a, key: r, value: c } = n.payload;
      t.componentStates[a] && (c == null || c === "" ? delete t.componentStates[a].filters[r] : t.componentStates[a].filters[r] = c);
    },
    setSearchTerm: (t, n) => {
      const { componentId: a, searchTerm: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].searchTerm = r);
    },
    // Selection actions
    setSelectedRows: (t, n) => {
      const { componentId: a, selectedRows: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].selectedRows = new Set(r));
    },
    addSelectedRow: (t, n) => {
      const { componentId: a, rowId: r } = n.payload;
      t.componentStates[a] && t.componentStates[a].selectedRows.add(
        r
      );
    },
    removeSelectedRow: (t, n) => {
      const { componentId: a, rowId: r } = n.payload;
      t.componentStates[a] && t.componentStates[a].selectedRows.delete(r);
    },
    clearSelectedRows: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && t.componentStates[a].selectedRows.clear();
    },
    // Expansion actions
    setExpandedRows: (t, n) => {
      const { componentId: a, expandedRows: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].expandedRows = new Set(r));
    },
    toggleRowExpansion: (t, n) => {
      const { componentId: a, rowId: r } = n.payload;
      if (t.componentStates[a]) {
        const c = t.componentStates[a].expandedRows;
        c.has(r) ? c.delete(r) : c.add(r);
      }
    },
    // Editing actions
    setEditingCell: (t, n) => {
      const { componentId: a, editingCell: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].editingCell = r);
    },
    clearEditingCell: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].editingCell = null);
    },
    // Cleanup
    removeComponentState: (t, n) => {
      const { componentId: a } = n.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetTableState: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        ...$o
      });
    }
  }
}), {
  initializeComponentState: ty,
  setSorting: iy,
  setFilters: c8,
  updateFilter: _8,
  setSearchTerm: ny,
  setSelectedRows: xs,
  addSelectedRow: d8,
  removeSelectedRow: u8,
  clearSelectedRows: m8,
  setExpandedRows: ay,
  toggleRowExpansion: h8,
  setEditingCell: Co,
  clearEditingCell: p8,
  removeComponentState: oy,
  clearAllComponentStates: f8,
  resetTableState: g8
} = Cl.actions, ry = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.sorting) || $o.sorting;
}, sy = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.filters) || {};
}, ly = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.searchTerm) || "";
}, cy = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.selectedRows) || /* @__PURE__ */ new Set();
}, _y = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.expandedRows) || /* @__PURE__ */ new Set();
}, dy = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.editingCell) || null;
}, jl = Cl.reducer, vs = {
  isOpen: !1,
  isMobile: !1,
  activeItemId: null,
  mobileBreakpoint: 768
}, uy = {
  componentStates: {},
  defaultMobileBreakpoint: 768,
  globalResponsiveEnabled: !0
}, zl = Wt({
  name: "navigation",
  initialState: uy,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const {
        componentId: a,
        initialState: r = {}
      } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...vs,
        ...r
      });
    },
    // Open/close actions
    setIsOpen: (t, n) => {
      const { componentId: a, isOpen: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].isOpen = r);
    },
    toggleNavigation: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].isOpen = !t.componentStates[a].isOpen);
    },
    closeNavigation: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].isOpen = !1);
    },
    // Responsive actions
    setIsMobile: (t, n) => {
      const { componentId: a, isMobile: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].isMobile = r);
    },
    setMobileBreakpoint: (t, n) => {
      const { componentId: a, breakpoint: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].mobileBreakpoint = r);
    },
    // Active item actions
    setActiveItem: (t, n) => {
      const { componentId: a, itemId: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].activeItemId = r);
    },
    // Global settings actions
    setDefaultMobileBreakpoint: (t, n) => {
      t.defaultMobileBreakpoint = n.payload;
    },
    setGlobalResponsiveEnabled: (t, n) => {
      t.globalResponsiveEnabled = n.payload;
    },
    // Cleanup
    removeComponentState: (t, n) => {
      const { componentId: a } = n.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetNavigationState: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        ...vs
      });
    }
  }
}), {
  initializeComponentState: b8,
  setIsOpen: y8,
  toggleNavigation: x8,
  closeNavigation: v8,
  setIsMobile: w8,
  setMobileBreakpoint: k8,
  setActiveItem: S8,
  setDefaultMobileBreakpoint: C8,
  setGlobalResponsiveEnabled: j8,
  removeComponentState: z8,
  clearAllComponentStates: T8,
  resetNavigationState: P8
} = zl.actions, Tl = zl.reducer, ws = {
  value: "",
  state: "default",
  errorText: "",
  showPassword: !1,
  isFocused: !1,
  isValid: !0,
  debounceTimeoutId: null
}, my = {
  componentStates: {},
  globalDebounceDelay: 300,
  globalValidationEnabled: !0
}, Pl = Wt({
  name: "input",
  initialState: my,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const {
        componentId: a,
        initialState: r = {}
      } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...ws,
        ...r
      });
    },
    // Value actions
    setValue: (t, n) => {
      const { componentId: a, value: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].value = r);
    },
    clearValue: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].value = "");
    },
    // State actions
    setInputState: (t, n) => {
      const { componentId: a, inputState: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].state = r);
    },
    setErrorText: (t, n) => {
      const { componentId: a, errorText: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].errorText = r);
    },
    clearError: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].errorText = "", t.componentStates[a].state = "default");
    },
    // Password visibility actions
    setShowPassword: (t, n) => {
      const { componentId: a, showPassword: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].showPassword = r);
    },
    togglePasswordVisibility: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a].showPassword = !t.componentStates[a].showPassword);
    },
    // Focus actions
    setFocused: (t, n) => {
      const { componentId: a, isFocused: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].isFocused = r);
    },
    // Validation actions
    setValid: (t, n) => {
      const { componentId: a, isValid: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].isValid = r);
    },
    // Debounce actions
    setDebounceTimeout: (t, n) => {
      const { componentId: a, timeoutId: r } = n.payload;
      t.componentStates[a] && (t.componentStates[a].debounceTimeoutId = r);
    },
    // Global settings actions
    setGlobalDebounceDelay: (t, n) => {
      t.globalDebounceDelay = n.payload;
    },
    setGlobalValidationEnabled: (t, n) => {
      t.globalValidationEnabled = n.payload;
    },
    // Cleanup
    removeComponentState: (t, n) => {
      const { componentId: a } = n.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetInputState: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        ...ws
      });
    }
  }
}), {
  initializeComponentState: N8,
  setValue: E8,
  clearValue: I8,
  setInputState: L8,
  setErrorText: A8,
  clearError: M8,
  setShowPassword: O8,
  togglePasswordVisibility: R8,
  setFocused: D8,
  setValid: B8,
  setDebounceTimeout: $8,
  setGlobalDebounceDelay: F8,
  setGlobalValidationEnabled: H8,
  removeComponentState: U8,
  clearAllComponentStates: Z8,
  resetInputState: W8
} = Pl.actions, hy = (t, n) => {
  var a;
  return ((a = t.input.componentStates[n]) == null ? void 0 : a.value) || "";
}, py = (t, n) => {
  var a;
  return ((a = t.input.componentStates[n]) == null ? void 0 : a.state) || "default";
}, fy = (t, n) => {
  var a;
  return ((a = t.input.componentStates[n]) == null ? void 0 : a.showPassword) || !1;
}, Nl = Pl.reducer;
Xs({
  reducer: {
    // User domain - authentication, profile, preferences
    user: ul,
    // UI domain - component states, loading, errors, form data
    ui: ll,
    // Theme domain - themes, palettes, dark mode
    theme: hl,
    // Socket domain - connection state, real-time events
    socket: fl,
    // Game domain - game state, matches, leaderboards
    game: bl,
    // Settings domain - application settings, configurations
    settings: xl,
    // Notification domain - alerts, toasts, achievements
    notifications: vl,
    // File domain - uploads, file management
    files: wl,
    // Modal domain - modal states and data
    modals: Sl,
    // Admin domain - debug panels, performance monitoring, error logging
    admin: il,
    // Table domain - table state, sorting, filtering, selection
    table: jl,
    // Navigation domain - navigation open/close, responsive, active items
    navigation: Tl,
    // Input domain - input values, states, validation, focus
    input: Nl
  },
  middleware: (t) => t({
    serializableCheck: {
      // Ignore specific action types or paths that contain non-serializable data
      ignoredActions: [
        "socket/connected",
        "socket/disconnected"
      ],
      ignoredPaths: ["socket.socketInstance"]
    }
  }),
  devTools: typeof window < "u"
});
const ya = () => vi(), Xt = It, gy = {
  user: ul,
  ui: ll,
  theme: hl,
  socket: fl,
  game: bl,
  settings: xl,
  notifications: vl,
  files: wl,
  modals: Sl,
  admin: il,
  table: jl,
  navigation: Tl,
  input: Nl
};
Xs({
  reducer: gy
});
const El = Le((t, n) => {
  var ee, ne, ue, re, ke, he, W;
  const {
    kind: a,
    componentId: r,
    variant: c = "default",
    size: d = "medium",
    state: u = "idle",
    className: h,
    disabled: p = !1,
    multiple: g,
    accept: y,
    maxFiles: v,
    maxSize: z,
    onFilesSelected: k,
    onFilesDrop: N,
    onUploadProgress: P,
    onUploadComplete: $,
    onUploadError: F,
    children: H,
    placeholder: A,
    dragActiveText: R,
    errorText: T,
    successText: E,
    showPreview: J = !1,
    allowedTypes: G,
    ...B
  } = t, M = Go(a), j = M1(
    a
  ), V = ya(), Q = r || `file-upload-${a}-${Date.now()}`;
  Te(() => (V($b(Q)), () => {
    V(Hb(Q));
  }), [V, Q]);
  const le = Xt(
    (U) => Ub(Q)(U)
  ), ae = Xt(
    (U) => Zb(Q)(U)
  ), te = Xt(
    (U) => Vb(Q)(U)
  ), ce = Xt(
    (U) => Wb(Q)(U)
  ), w = nt(null), q = y || ((ne = (ee = M.validation) == null ? void 0 : ee.allowedTypes) == null ? void 0 : ne.join(",")) || M.accept, x = g !== void 0 ? g : M.multiple, O = v || ((ue = M.validation) == null ? void 0 : ue.maxFiles), S = z || ((re = M.validation) == null ? void 0 : re.maxFileSize), Z = Ze(
    (U) => {
      var qe;
      const Oe = Array.from(U), at = O1(Oe, {
        maxFiles: O,
        maxFileSize: S,
        allowedTypes: G || ((qe = M.validation) == null ? void 0 : qe.allowedTypes)
      });
      if (!at.isValid) {
        V(
          gs({
            componentId: Q,
            errors: at.errors
          })
        ), F == null || F(at.errors.join(", "));
        return;
      }
      if (V(
        gs({
          componentId: Q,
          errors: []
        })
      ), V(
        Fb({
          componentId: Q,
          files: Oe
          // Use File[] directly for UI state
        })
      ), k == null || k(Oe), P) {
        V(
          fs({
            componentId: Q,
            progress: 0
          })
        );
        const We = setInterval(() => {
          V(
            fs({
              componentId: Q,
              progress: Math.min(ae + 10, 100)
            })
          ), ae >= 100 && (clearInterval(We), $ == null || $(Oe));
        }, 100);
      }
    },
    [
      O,
      S,
      G,
      (ke = M.validation) == null ? void 0 : ke.allowedTypes,
      k,
      P,
      $,
      F
    ]
  ), ie = Ze(
    (U) => {
      U.target.files && Z(U.target.files);
    },
    [Z]
  ), X = Ze(
    (U) => {
      if (U.preventDefault(), V(
        So({
          componentId: Q,
          dragActive: !1
        })
      ), p || u === "disabled") return;
      const Oe = U.dataTransfer.files;
      Oe && (Z(Oe), N == null || N(Array.from(Oe)));
    },
    [p, u, Z, N]
  ), K = Ze(
    (U) => {
      U.preventDefault(), !p && u !== "disabled" && V(
        So({
          componentId: Q,
          dragActive: !0
        })
      );
    },
    [p, u, V, Q]
  ), pe = Ze(
    (U) => {
      U.preventDefault(), V(
        So({
          componentId: Q,
          dragActive: !1
        })
      );
    },
    [V, Q]
  ), de = Ze(() => {
    var U;
    !p && u !== "disabled" && ((U = w.current) == null || U.click());
  }, [p, u]), Pe = [
    dt.fileUploadWrapper,
    dt[a],
    dt[c],
    dt[d],
    j.theme && dt[j.theme],
    le && dt.dragActive,
    u && dt[u],
    p && dt.disabled,
    ce.length > 0 && dt.error,
    h
  ].filter(Boolean).join(" "), be = () => {
    var U;
    return u === "uploading" ? `Uploading... ${ae}%` : u === "success" ? E || "Upload successful!" : u === "error" || ce.length > 0 ? T || ce[0] || "Upload failed" : le ? R || "Drop files here" : te.length > 0 ? `${te.length} file${te.length > 1 ? "s" : ""} selected` : A || ((U = M.display) == null ? void 0 : U.placeholder) || "Choose files or drag and drop";
  };
  return /* @__PURE__ */ l.jsxs(
    f,
    {
      ref: n,
      className: Pe,
      onDrop: X,
      onDragOver: K,
      onDragLeave: pe,
      onClick: de,
      role: "button",
      tabIndex: p ? -1 : 0,
      "aria-disabled": p,
      ...B,
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: w,
            type: "file",
            accept: q,
            multiple: x,
            onChange: ie,
            className: dt.fileInputHidden,
            disabled: p || u === "disabled"
          }
        ),
        H || /* @__PURE__ */ l.jsxs(f, { className: dt.content, children: [
          ((he = M.display) == null ? void 0 : he.icon) && /* @__PURE__ */ l.jsx(f, { className: dt.icon, children: M.display.icon }),
          /* @__PURE__ */ l.jsx(f, { className: dt.text, children: be() }),
          ((W = M.display) == null ? void 0 : W.description) && /* @__PURE__ */ l.jsx(f, { className: dt.description, children: M.display.description }),
          u === "uploading" && /* @__PURE__ */ l.jsx(f, { className: dt.progressBar, children: /* @__PURE__ */ l.jsx(
            f,
            {
              className: dt.fileUpload__progressFill,
              "data-progress": ae
            }
          ) })
        ] }),
        J && te.length > 0 && /* @__PURE__ */ l.jsx(f, { className: dt.preview, children: te.map(
          (U, Oe) => /* @__PURE__ */ l.jsx(
            f,
            {
              className: dt.previewItem,
              children: U.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(
                "img",
                {
                  src: URL.createObjectURL(U),
                  alt: U.name,
                  className: dt.previewImage
                }
              ) : /* @__PURE__ */ l.jsx(f, { className: dt.previewFile, children: U.name })
            },
            Oe
          )
        ) })
      ]
    }
  );
});
El.displayName = "FileUpload";
const V8 = di(El), by = "_fieldWrapper_74inh_117", yy = "_fieldContainer_74inh_137", xy = "_label_74inh_151", vy = "_required_74inh_161", wy = "_errorText_74inh_264", ky = "_helperText_74inh_272", Sy = "_form__submit_74inh_358", fi = {
  fieldWrapper: by,
  fieldContainer: yy,
  label: xy,
  required: vy,
  errorText: wy,
  helperText: ky,
  form__submit: Sy
}, Cy = "_container_1h3xj_129", jy = "_flex_1h3xj_260", zy = "_grid_1h3xj_356", Ty = "_relative_1h3xj_738", Py = "_absolute_1h3xj_742", Ny = "_fixed_1h3xj_746", Ey = "_sticky_1h3xj_750", Iy = "_truncate_1h3xj_889", Ly = "_border_1h3xj_949", Ay = "_rounded_1h3xj_989", My = "_shadow_1h3xj_1021", Oy = "_transition_1h3xj_1093", Ry = "_small_1h3xj_1593", Dy = "_large_1h3xj_1597", By = "_card_1h3xj_1645", $y = "_inputContainer_1h3xj_1770", Fy = "_disabled_1h3xj_1777", Hy = "_label_1h3xj_1782", Uy = "_label__required_1h3xj_1789", Zy = "_inputWrapper_1h3xj_1795", Wy = "_input_1h3xj_1659", Vy = "_hasIcon_1h3xj_1824", Gy = "_hasPrefix_1h3xj_1827", qy = "_hasSuffix_1h3xj_1830", Ky = "_icon_1h3xj_1838", Yy = "_prefix_1h3xj_1839", Jy = "_suffix_1h3xj_1840", Xy = "_helperText_1h3xj_1913", Qy = "_passwordToggle_1h3xj_1952", ex = "_clearButton_1h3xj_1953", Pt = {
  container: Cy,
  "container-sm": "_container-sm_1h3xj_145",
  "container-md": "_container-md_1h3xj_161",
  "container-lg": "_container-lg_1h3xj_177",
  "container-xl": "_container-xl_1h3xj_193",
  "container-2xl": "_container-2xl_1h3xj_209",
  "safe-area": "_safe-area_1h3xj_225",
  "overflow-hidden": "_overflow-hidden_1h3xj_231",
  "overflow-auto": "_overflow-auto_1h3xj_235",
  "overflow-x-auto": "_overflow-x-auto_1h3xj_240",
  "overflow-y-auto": "_overflow-y-auto_1h3xj_246",
  "box-border": "_box-border_1h3xj_252",
  "box-content": "_box-content_1h3xj_256",
  flex: jy,
  "flex-col": "_flex-col_1h3xj_264",
  "flex-row": "_flex-row_1h3xj_269",
  "flex-wrap": "_flex-wrap_1h3xj_274",
  "flex-nowrap": "_flex-nowrap_1h3xj_279",
  "flex-center": "_flex-center_1h3xj_284",
  "flex-between": "_flex-between_1h3xj_290",
  "justify-start": "_justify-start_1h3xj_296",
  "justify-center": "_justify-center_1h3xj_300",
  "justify-end": "_justify-end_1h3xj_304",
  "justify-between": "_justify-between_1h3xj_308",
  "justify-around": "_justify-around_1h3xj_312",
  "items-start": "_items-start_1h3xj_316",
  "items-center": "_items-center_1h3xj_320",
  "items-end": "_items-end_1h3xj_324",
  "items-stretch": "_items-stretch_1h3xj_328",
  "flex-1": "_flex-1_1h3xj_332",
  "flex-auto": "_flex-auto_1h3xj_336",
  "flex-none": "_flex-none_1h3xj_340",
  "flex-grow": "_flex-grow_1h3xj_344",
  "flex-shrink": "_flex-shrink_1h3xj_348",
  "flex-shrink-0": "_flex-shrink-0_1h3xj_352",
  grid: zy,
  "grid-auto-fit": "_grid-auto-fit_1h3xj_360",
  "grid-auto-fill": "_grid-auto-fill_1h3xj_367",
  "grid-cols-1": "_grid-cols-1_1h3xj_374",
  "grid-cols-2": "_grid-cols-2_1h3xj_378",
  "grid-cols-3": "_grid-cols-3_1h3xj_382",
  "grid-cols-4": "_grid-cols-4_1h3xj_386",
  "grid-cols-6": "_grid-cols-6_1h3xj_390",
  "grid-cols-12": "_grid-cols-12_1h3xj_394",
  "gap-0": "_gap-0_1h3xj_398",
  "gap-1": "_gap-1_1h3xj_402",
  "gap-2": "_gap-2_1h3xj_406",
  "gap-3": "_gap-3_1h3xj_410",
  "gap-4": "_gap-4_1h3xj_414",
  "gap-5": "_gap-5_1h3xj_418",
  "gap-6": "_gap-6_1h3xj_422",
  "gap-8": "_gap-8_1h3xj_426",
  "gap-10": "_gap-10_1h3xj_430",
  "gap-12": "_gap-12_1h3xj_434",
  "p-0": "_p-0_1h3xj_438",
  "p-1": "_p-1_1h3xj_442",
  "p-2": "_p-2_1h3xj_446",
  "p-3": "_p-3_1h3xj_450",
  "p-4": "_p-4_1h3xj_454",
  "p-5": "_p-5_1h3xj_458",
  "p-6": "_p-6_1h3xj_462",
  "p-8": "_p-8_1h3xj_466",
  "p-10": "_p-10_1h3xj_470",
  "p-12": "_p-12_1h3xj_474",
  "px-0": "_px-0_1h3xj_478",
  "px-1": "_px-1_1h3xj_483",
  "px-2": "_px-2_1h3xj_488",
  "px-3": "_px-3_1h3xj_493",
  "px-4": "_px-4_1h3xj_498",
  "px-6": "_px-6_1h3xj_503",
  "py-0": "_py-0_1h3xj_508",
  "py-1": "_py-1_1h3xj_513",
  "py-2": "_py-2_1h3xj_518",
  "py-3": "_py-3_1h3xj_523",
  "py-4": "_py-4_1h3xj_528",
  "py-6": "_py-6_1h3xj_533",
  "m-0": "_m-0_1h3xj_538",
  "m-1": "_m-1_1h3xj_542",
  "m-2": "_m-2_1h3xj_546",
  "m-3": "_m-3_1h3xj_550",
  "m-4": "_m-4_1h3xj_554",
  "m-auto": "_m-auto_1h3xj_558",
  "mx-auto": "_mx-auto_1h3xj_562",
  "my-auto": "_my-auto_1h3xj_567",
  "mx-0": "_mx-0_1h3xj_572",
  "mx-1": "_mx-1_1h3xj_577",
  "mx-2": "_mx-2_1h3xj_582",
  "mx-3": "_mx-3_1h3xj_587",
  "mx-4": "_mx-4_1h3xj_592",
  "my-0": "_my-0_1h3xj_597",
  "my-1": "_my-1_1h3xj_602",
  "my-2": "_my-2_1h3xj_607",
  "my-3": "_my-3_1h3xj_612",
  "my-4": "_my-4_1h3xj_617",
  "w-full": "_w-full_1h3xj_622",
  "w-auto": "_w-auto_1h3xj_626",
  "w-fit": "_w-fit_1h3xj_630",
  "w-min": "_w-min_1h3xj_634",
  "w-max": "_w-max_1h3xj_638",
  "max-w-none": "_max-w-none_1h3xj_642",
  "max-w-xs": "_max-w-xs_1h3xj_646",
  "max-w-sm": "_max-w-sm_1h3xj_650",
  "max-w-md": "_max-w-md_1h3xj_654",
  "max-w-lg": "_max-w-lg_1h3xj_658",
  "max-w-xl": "_max-w-xl_1h3xj_662",
  "max-w-2xl": "_max-w-2xl_1h3xj_666",
  "max-w-3xl": "_max-w-3xl_1h3xj_670",
  "max-w-4xl": "_max-w-4xl_1h3xj_674",
  "max-w-5xl": "_max-w-5xl_1h3xj_678",
  "max-w-6xl": "_max-w-6xl_1h3xj_682",
  "max-w-7xl": "_max-w-7xl_1h3xj_686",
  "max-w-full": "_max-w-full_1h3xj_690",
  "min-w-0": "_min-w-0_1h3xj_694",
  "min-w-full": "_min-w-full_1h3xj_698",
  "h-auto": "_h-auto_1h3xj_702",
  "h-fit": "_h-fit_1h3xj_706",
  "h-full": "_h-full_1h3xj_710",
  "h-screen": "_h-screen_1h3xj_714",
  "max-h-full": "_max-h-full_1h3xj_718",
  "max-h-screen": "_max-h-screen_1h3xj_722",
  "min-h-0": "_min-h-0_1h3xj_726",
  "min-h-full": "_min-h-full_1h3xj_730",
  "min-h-screen": "_min-h-screen_1h3xj_734",
  relative: Ty,
  absolute: Py,
  fixed: Ny,
  sticky: Ey,
  static: "_static_1h3xj_754",
  "inset-0": "_inset-0_1h3xj_758",
  "top-0": "_top-0_1h3xj_765",
  "right-0": "_right-0_1h3xj_769",
  "bottom-0": "_bottom-0_1h3xj_773",
  "left-0": "_left-0_1h3xj_777",
  "text-left": "_text-left_1h3xj_781",
  "text-center": "_text-center_1h3xj_785",
  "text-right": "_text-right_1h3xj_789",
  "text-justify": "_text-justify_1h3xj_793",
  "text-xs": "_text-xs_1h3xj_797",
  "text-sm": "_text-sm_1h3xj_801",
  "text-base": "_text-base_1h3xj_805",
  "text-lg": "_text-lg_1h3xj_809",
  "text-xl": "_text-xl_1h3xj_813",
  "text-2xl": "_text-2xl_1h3xj_817",
  "text-3xl": "_text-3xl_1h3xj_821",
  "text-4xl": "_text-4xl_1h3xj_825",
  "font-normal": "_font-normal_1h3xj_829",
  "font-medium": "_font-medium_1h3xj_833",
  "font-semibold": "_font-semibold_1h3xj_837",
  "font-bold": "_font-bold_1h3xj_841",
  "leading-tight": "_leading-tight_1h3xj_845",
  "leading-normal": "_leading-normal_1h3xj_849",
  "leading-relaxed": "_leading-relaxed_1h3xj_853",
  "text-primary": "_text-primary_1h3xj_857",
  "text-secondary": "_text-secondary_1h3xj_861",
  "text-muted": "_text-muted_1h3xj_865",
  "text-inverse": "_text-inverse_1h3xj_869",
  "text-blue": "_text-blue_1h3xj_873",
  "text-red": "_text-red_1h3xj_877",
  "text-green": "_text-green_1h3xj_881",
  "text-yellow": "_text-yellow_1h3xj_885",
  truncate: Iy,
  "text-ellipsis": "_text-ellipsis_1h3xj_896",
  "text-clip": "_text-clip_1h3xj_903",
  "bg-transparent": "_bg-transparent_1h3xj_909",
  "bg-white": "_bg-white_1h3xj_913",
  "bg-gray-50": "_bg-gray-50_1h3xj_917",
  "bg-gray-100": "_bg-gray-100_1h3xj_921",
  "bg-gray-200": "_bg-gray-200_1h3xj_925",
  "bg-primary": "_bg-primary_1h3xj_929",
  "bg-secondary": "_bg-secondary_1h3xj_933",
  "bg-success": "_bg-success_1h3xj_937",
  "bg-danger": "_bg-danger_1h3xj_941",
  "bg-warning": "_bg-warning_1h3xj_945",
  border: Ly,
  "border-0": "_border-0_1h3xj_953",
  "border-t": "_border-t_1h3xj_957",
  "border-r": "_border-r_1h3xj_961",
  "border-b": "_border-b_1h3xj_965",
  "border-l": "_border-l_1h3xj_969",
  "border-gray-200": "_border-gray-200_1h3xj_973",
  "border-gray-300": "_border-gray-300_1h3xj_977",
  "border-primary": "_border-primary_1h3xj_981",
  "border-danger": "_border-danger_1h3xj_985",
  "rounded-none": "_rounded-none_1h3xj_989",
  "rounded-sm": "_rounded-sm_1h3xj_993",
  rounded: Ay,
  "rounded-md": "_rounded-md_1h3xj_1001",
  "rounded-lg": "_rounded-lg_1h3xj_1005",
  "rounded-xl": "_rounded-xl_1h3xj_1009",
  "rounded-2xl": "_rounded-2xl_1h3xj_1013",
  "rounded-full": "_rounded-full_1h3xj_1017",
  "shadow-none": "_shadow-none_1h3xj_1021",
  "shadow-sm": "_shadow-sm_1h3xj_1025",
  shadow: My,
  "shadow-md": "_shadow-md_1h3xj_1033",
  "shadow-lg": "_shadow-lg_1h3xj_1037",
  "shadow-xl": "_shadow-xl_1h3xj_1041",
  "z-0": "_z-0_1h3xj_1045",
  "z-10": "_z-10_1h3xj_1049",
  "z-20": "_z-20_1h3xj_1053",
  "z-30": "_z-30_1h3xj_1057",
  "z-40": "_z-40_1h3xj_1061",
  "z-50": "_z-50_1h3xj_1065",
  "z-auto": "_z-auto_1h3xj_1069",
  "z-dropdown": "_z-dropdown_1h3xj_1073",
  "z-sticky": "_z-sticky_1h3xj_1077",
  "z-fixed": "_z-fixed_1h3xj_1081",
  "z-modal": "_z-modal_1h3xj_1085",
  "z-tooltip": "_z-tooltip_1h3xj_1089",
  "transition-none": "_transition-none_1h3xj_1093",
  "transition-all": "_transition-all_1h3xj_1097",
  "transition-fast": "_transition-fast_1h3xj_1101",
  "transition-slow": "_transition-slow_1h3xj_1105",
  "sr-only": "_sr-only_1h3xj_1109",
  "focus-ring": "_focus-ring_1h3xj_1121",
  "cursor-default": "_cursor-default_1h3xj_1127",
  "cursor-pointer": "_cursor-pointer_1h3xj_1131",
  "cursor-not-allowed": "_cursor-not-allowed_1h3xj_1135",
  "select-none": "_select-none_1h3xj_1139",
  "select-text": "_select-text_1h3xj_1143",
  "select-all": "_select-all_1h3xj_1147",
  "select-auto": "_select-auto_1h3xj_1151",
  "pointer-events-none": "_pointer-events-none_1h3xj_1155",
  "pointer-events-auto": "_pointer-events-auto_1h3xj_1159",
  "gap-sm": "_gap-sm_1h3xj_1163",
  "gap-md": "_gap-md_1h3xj_1167",
  "gap-lg": "_gap-lg_1h3xj_1171",
  "gap-xl": "_gap-xl_1h3xj_1175",
  "p-sm": "_p-sm_1h3xj_1179",
  "p-md": "_p-md_1h3xj_1183",
  "p-lg": "_p-lg_1h3xj_1187",
  "p-xl": "_p-xl_1h3xj_1191",
  "m-sm": "_m-sm_1h3xj_1195",
  "m-md": "_m-md_1h3xj_1199",
  "m-lg": "_m-lg_1h3xj_1203",
  "m-xl": "_m-xl_1h3xj_1207",
  "text-gray": "_text-gray_1h3xj_1211",
  "mobile:hidden": "_mobile:hidden_1h3xj_1216",
  "mobile:block": "_mobile:block_1h3xj_1219",
  "mobile:flex": "_mobile:flex_1h3xj_1222",
  "mobile:grid": "_mobile:grid_1h3xj_1225",
  "mobile:text-sm": "_mobile:text-sm_1h3xj_1228",
  "mobile:text-xs": "_mobile:text-xs_1h3xj_1231",
  "mobile:p-2": "_mobile:p-2_1h3xj_1234",
  "mobile:px-2": "_mobile:px-2_1h3xj_1237",
  "tablet:block": "_tablet:block_1h3xj_1243",
  "tablet:flex": "_tablet:flex_1h3xj_1246",
  "tablet:grid": "_tablet:grid_1h3xj_1249",
  "tablet:hidden": "_tablet:hidden_1h3xj_1252",
  "desktop:block": "_desktop:block_1h3xj_1257",
  "desktop:flex": "_desktop:flex_1h3xj_1260",
  "desktop:grid": "_desktop:grid_1h3xj_1263",
  "desktop:hidden": "_desktop:hidden_1h3xj_1266",
  "bg-gray": "_bg-gray_1h3xj_917",
  "border-secondary": "_border-secondary_1h3xj_1290",
  "border-gray": "_border-gray_1h3xj_973",
  "shadow-glow": "_shadow-glow_1h3xj_1326",
  "w-8": "_w-8_1h3xj_1374",
  "w-10": "_w-10_1h3xj_1378",
  "w-12": "_w-12_1h3xj_1382",
  "w-16": "_w-16_1h3xj_1386",
  "h-8": "_h-8_1h3xj_1390",
  "h-10": "_h-10_1h3xj_1394",
  "h-12": "_h-12_1h3xj_1398",
  "h-16": "_h-16_1h3xj_1402",
  "user-select-none": "_user-select-none_1h3xj_1418",
  transition: Oy,
  "transition-colors": "_transition-colors_1h3xj_1426",
  "transition-transform": "_transition-transform_1h3xj_1430",
  "hover-scale": "_hover-scale_1h3xj_1434",
  "fade-in": "_fade-in_1h3xj_1441",
  "status-online": "_status-online_1h3xj_1453",
  "status-offline": "_status-offline_1h3xj_1463",
  "status-away": "_status-away_1h3xj_1473",
  "status-busy": "_status-busy_1h3xj_1483",
  "modal-overlay": "_modal-overlay_1h3xj_1493",
  "modal-content": "_modal-content_1h3xj_1507",
  "close-button-absolute": "_close-button-absolute_1h3xj_1521",
  small: Ry,
  large: Dy,
  "primary-button": "_primary-button_1h3xj_1602",
  "secondary-button": "_secondary-button_1h3xj_1606",
  card: By,
  "input-base": "_input-base_1h3xj_1659",
  "chat-window": "_chat-window_1h3xj_1691",
  "chat-message": "_chat-message_1h3xj_1702",
  "z-overlay": "_z-overlay_1h3xj_1727",
  "mobile-hidden": "_mobile-hidden_1h3xj_1732",
  "mobile-flex-col": "_mobile-flex-col_1h3xj_1735",
  "mobile-text-center": "_mobile-text-center_1h3xj_1738",
  "mobile-p-sm": "_mobile-p-sm_1h3xj_1741",
  "mobile-gap-sm": "_mobile-gap-sm_1h3xj_1744",
  "desktop-hidden": "_desktop-hidden_1h3xj_1749",
  "print-hidden": "_print-hidden_1h3xj_1754",
  inputContainer: $y,
  disabled: Fy,
  label: Hy,
  label__required: Uy,
  inputWrapper: Zy,
  input: Wy,
  hasIcon: Vy,
  hasPrefix: Gy,
  hasSuffix: qy,
  "size-small": "_size-small_1h3xj_1834",
  icon: Ky,
  prefix: Yy,
  suffix: Jy,
  "size-medium": "_size-medium_1h3xj_1844",
  "size-large": "_size-large_1h3xj_1849",
  "style-outlined": "_style-outlined_1h3xj_1859",
  "style-filled": "_style-filled_1h3xj_1871",
  "style-underlined": "_style-underlined_1h3xj_1884",
  "style-ghost": "_style-ghost_1h3xj_1897",
  "state-error": "_state-error_1h3xj_1909",
  helperText: Xy,
  "state-success": "_state-success_1h3xj_1917",
  "state-focus": "_state-focus_1h3xj_1925",
  passwordToggle: Qy,
  clearButton: ex,
  "loading-shimmer": "_loading-shimmer_1h3xj_1"
}, Il = Le(
  (t, n) => {
    const {
      kind: a,
      componentId: r,
      variant: c,
      size: d = "medium",
      state: u = "default",
      style: h = "outlined",
      placeholder: p,
      label: g,
      helperText: y,
      errorText: v,
      successText: z,
      required: k = !1,
      disabled: N = !1,
      autoComplete: P,
      maxLength: $,
      minLength: F,
      pattern: H,
      customValidation: A,
      icon: R,
      prefix: T,
      suffix: E,
      clearable: J = !1,
      showPasswordToggle: G = !1,
      debounceMs: B = 0,
      debounced: M = !1,
      onValueChange: j,
      containerClassName: V = "",
      labelClassName: Q = "",
      inputClassName: le = "",
      helperClassName: ae = "",
      iconClassName: te = "",
      className: ce = "",
      value: w,
      defaultValue: q,
      onChange: x,
      ...O
    } = t, S = r || `input-${a}-${it.useId()}`, Z = ya(), ie = Xt(
      (ne) => hy(ne, S)
    );
    Xt(
      (ne) => py(ne, S)
    );
    const X = Xt(
      (ne) => fy(ne, S)
    ), K = w !== void 0, pe = K ? w : ie, de = (ne) => {
      const ue = ne.target.value;
      K || Z(
        setValue({
          componentId: S,
          value: ue
        })
      ), x && x(ne), j && (B > 0, j(ue)), A && A(ue);
    }, Pe = (ne) => {
      var ue;
      Z(
        setFocused({
          componentId: S,
          isFocused: !0
        })
      ), (ue = t.onFocus) == null || ue.call(t, ne);
    }, be = (ne) => {
      var ue;
      Z(
        setFocused({
          componentId: S,
          isFocused: !1
        })
      ), (ue = t.onBlur) == null || ue.call(t, ne);
    }, ee = c === "password" && X ? "text" : c;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `${Pt.inputContainer} ${V}`,
        children: [
          g && /* @__PURE__ */ l.jsxs(
            "label",
            {
              className: `${Pt.label} ${Q}`,
              children: [
                g,
                k && /* @__PURE__ */ l.jsx("span", { className: Pt.label__required, children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `${Pt.inputWrapper} ${Pt[`size-${d}`]} ${Pt[`style-${h}`]} ${Pt[`state-${u}`]} ${ce}`,
              children: [
                R && /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: `${Pt.icon} ${te}`,
                    children: R
                  }
                ),
                T && /* @__PURE__ */ l.jsx("span", { className: Pt.prefix, children: T }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: n,
                    type: ee,
                    className: `${Pt.input} ${le}`,
                    placeholder: p,
                    value: pe,
                    defaultValue: q,
                    required: k,
                    disabled: N,
                    maxLength: $,
                    minLength: F,
                    pattern: H,
                    autoComplete: P,
                    onChange: de,
                    onFocus: Pe,
                    onBlur: be,
                    ...O
                  }
                ),
                E && /* @__PURE__ */ l.jsx("span", { className: Pt.suffix, children: E }),
                J && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: Pt.clearButton,
                    "aria-label": "Clear input",
                    children: "×"
                  }
                ),
                G && a === "password" && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: Pt.passwordToggle,
                    "aria-label": "Toggle password visibility",
                    children: "👁️"
                  }
                )
              ]
            }
          ),
          y && /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `${Pt.helperText} ${ae}`,
              children: y
            }
          ),
          v && /* @__PURE__ */ l.jsx("div", { className: Pt.stateError, children: v }),
          z && /* @__PURE__ */ l.jsx("div", { className: Pt.stateSuccess, children: z })
        ]
      }
    );
  }
);
Il.displayName = "Input";
const ks = {
  standard: {
    variant: "standard",
    size: "medium",
    state: "default",
    style: "outlined",
    showCounter: !1,
    autoResize: !1,
    required: !1,
    borderRadius: "medium",
    rows: 3
  },
  comment: {
    variant: "outlined",
    size: "medium",
    state: "default",
    style: "outlined",
    showCounter: !0,
    autoResize: !0,
    required: !1,
    borderRadius: "medium",
    rows: 3,
    maxRows: 8
  },
  description: {
    variant: "filled",
    size: "medium",
    state: "default",
    style: "filled",
    showCounter: !0,
    autoResize: !0,
    required: !1,
    borderRadius: "medium",
    rows: 4,
    maxRows: 10
  },
  message: {
    variant: "minimal",
    size: "medium",
    state: "default",
    style: "ghost",
    showCounter: !1,
    autoResize: !0,
    required: !1,
    borderRadius: "medium",
    rows: 2,
    maxRows: 6
  },
  code: {
    variant: "outlined",
    size: "medium",
    state: "default",
    style: "outlined",
    showCounter: !1,
    autoResize: !1,
    required: !1,
    borderRadius: "small",
    rows: 10
  },
  review: {
    variant: "outlined",
    size: "large",
    state: "default",
    style: "outlined",
    showCounter: !0,
    autoResize: !0,
    required: !0,
    borderRadius: "medium",
    rows: 5,
    maxRows: 12
  },
  feedback: {
    variant: "filled",
    size: "medium",
    state: "default",
    style: "filled",
    showCounter: !0,
    autoResize: !0,
    required: !1,
    borderRadius: "medium",
    rows: 4,
    maxRows: 8
  },
  note: {
    variant: "minimal",
    size: "small",
    state: "default",
    style: "ghost",
    showCounter: !1,
    autoResize: !0,
    required: !1,
    borderRadius: "small",
    rows: 2,
    maxRows: 5
  },
  custom: {
    variant: "custom",
    size: "medium",
    state: "default",
    style: "outlined",
    showCounter: !1,
    autoResize: !1,
    required: !1,
    borderRadius: "medium",
    rows: 4
  }
}, Ll = Le(
  ({
    kind: t = "standard",
    value: n,
    defaultValue: a,
    onChange: r,
    label: c,
    placeholder: d,
    helpText: u,
    error: h,
    className: p,
    disabled: g,
    required: y,
    maxLength: v,
    name: z,
    id: k,
    configuration: N,
    ...P
  }, $) => {
    var A, R;
    const H = {
      ...ks[t] || ks.standard,
      ...N
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        className: `textarea-container${p ? " " + p : ""}`,
        children: [
          c && /* @__PURE__ */ l.jsx("label", { htmlFor: k, children: c }),
          /* @__PURE__ */ l.jsx(
            "textarea",
            {
              ref: $,
              value: n,
              defaultValue: a,
              onChange: (T) => r == null ? void 0 : r(T.target.value),
              rows: H.rows,
              placeholder: d,
              disabled: g,
              required: y,
              maxLength: v,
              name: z,
              id: k,
              className: `textarea${(A = H.customStyles) != null && A.textarea ? " " + ((R = H.customStyles) == null ? void 0 : R.textarea) : ""}`,
              ...P
            }
          ),
          u && !h && /* @__PURE__ */ l.jsx(f, { className: "help-text", children: u }),
          h && /* @__PURE__ */ l.jsx(f, { className: "error-text", children: h })
        ]
      }
    );
  }
);
Ll.displayName = "Textarea";
var Al = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var n = {}.hasOwnProperty;
    function a() {
      for (var d = "", u = 0; u < arguments.length; u++) {
        var h = arguments[u];
        h && (d = c(d, r(h)));
      }
      return d;
    }
    function r(d) {
      if (typeof d == "string" || typeof d == "number")
        return d;
      if (typeof d != "object")
        return "";
      if (Array.isArray(d))
        return a.apply(null, d);
      if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]"))
        return d.toString();
      var u = "";
      for (var h in d)
        n.call(d, h) && d[h] && (u = c(u, h));
      return u;
    }
    function c(d, u) {
      return u ? d ? d + " " + u : d + u : d;
    }
    t.exports ? (a.default = a, t.exports = a) : window.classNames = a;
  })();
})(Al);
var tx = Al.exports;
const Hi = /* @__PURE__ */ Es(tx), ix = "_container_d4iu1_129", nx = "_flex_d4iu1_260", ax = "_grid_d4iu1_356", ox = "_relative_d4iu1_738", rx = "_absolute_d4iu1_742", sx = "_fixed_d4iu1_746", lx = "_sticky_d4iu1_750", cx = "_truncate_d4iu1_889", _x = "_border_d4iu1_949", dx = "_rounded_d4iu1_989", ux = "_shadow_d4iu1_1021", mx = "_transition_d4iu1_1093", hx = "_small_d4iu1_1593", px = "_large_d4iu1_1597", fx = "_card_d4iu1_1645", gx = "_selectContainer_d4iu1_1770", bx = "_disabled_d4iu1_1776", yx = "_error_d4iu1_1783", xx = "_control_d4iu1_1783", vx = "_fieldLabel_d4iu1_1787", wx = "_requiredMark_d4iu1_1791", kx = "_open_d4iu1_1815", Sx = "_valueContainer_d4iu1_1821", Cx = "_singleValue_d4iu1_1829", jx = "_placeholder_d4iu1_1836", zx = "_searchInput_d4iu1_1840", Tx = "_indicators_d4iu1_1851", Px = "_loadingIndicator_d4iu1_1858", Nx = "_spinner_d4iu1_1866", Ex = "_spin_d4iu1_1866", Ix = "_clearIndicator_d4iu1_1880", Lx = "_dropdownIndicator_d4iu1_1898", Ax = "_menu_d4iu1_1911", Mx = "_menuSlideDown_d4iu1_1", Ox = "_menuSlideUp_d4iu1_1", Rx = "_option_d4iu1_1954", Dx = "_focused_d4iu1_1969", Bx = "_selected_d4iu1_1972", $x = "_optionIcon_d4iu1_1981", Fx = "_optionImage_d4iu1_1994", Hx = "_optionContent_d4iu1_2007", Ux = "_optionLabel_d4iu1_2015", Zx = "_optionDescription_d4iu1_2022", Wx = "_checkmark_d4iu1_2029", Vx = "_loadingMessage_d4iu1_2040", Gx = "_noOptionsMessage_d4iu1_2046", qx = "_helpText_d4iu1_2166", Kx = "_errorText_d4iu1_2171", ti = {
  container: ix,
  "container-sm": "_container-sm_d4iu1_145",
  "container-md": "_container-md_d4iu1_161",
  "container-lg": "_container-lg_d4iu1_177",
  "container-xl": "_container-xl_d4iu1_193",
  "container-2xl": "_container-2xl_d4iu1_209",
  "safe-area": "_safe-area_d4iu1_225",
  "overflow-hidden": "_overflow-hidden_d4iu1_231",
  "overflow-auto": "_overflow-auto_d4iu1_235",
  "overflow-x-auto": "_overflow-x-auto_d4iu1_240",
  "overflow-y-auto": "_overflow-y-auto_d4iu1_246",
  "box-border": "_box-border_d4iu1_252",
  "box-content": "_box-content_d4iu1_256",
  flex: nx,
  "flex-col": "_flex-col_d4iu1_264",
  "flex-row": "_flex-row_d4iu1_269",
  "flex-wrap": "_flex-wrap_d4iu1_274",
  "flex-nowrap": "_flex-nowrap_d4iu1_279",
  "flex-center": "_flex-center_d4iu1_284",
  "flex-between": "_flex-between_d4iu1_290",
  "justify-start": "_justify-start_d4iu1_296",
  "justify-center": "_justify-center_d4iu1_300",
  "justify-end": "_justify-end_d4iu1_304",
  "justify-between": "_justify-between_d4iu1_308",
  "justify-around": "_justify-around_d4iu1_312",
  "items-start": "_items-start_d4iu1_316",
  "items-center": "_items-center_d4iu1_320",
  "items-end": "_items-end_d4iu1_324",
  "items-stretch": "_items-stretch_d4iu1_328",
  "flex-1": "_flex-1_d4iu1_332",
  "flex-auto": "_flex-auto_d4iu1_336",
  "flex-none": "_flex-none_d4iu1_340",
  "flex-grow": "_flex-grow_d4iu1_344",
  "flex-shrink": "_flex-shrink_d4iu1_348",
  "flex-shrink-0": "_flex-shrink-0_d4iu1_352",
  grid: ax,
  "grid-auto-fit": "_grid-auto-fit_d4iu1_360",
  "grid-auto-fill": "_grid-auto-fill_d4iu1_367",
  "grid-cols-1": "_grid-cols-1_d4iu1_374",
  "grid-cols-2": "_grid-cols-2_d4iu1_378",
  "grid-cols-3": "_grid-cols-3_d4iu1_382",
  "grid-cols-4": "_grid-cols-4_d4iu1_386",
  "grid-cols-6": "_grid-cols-6_d4iu1_390",
  "grid-cols-12": "_grid-cols-12_d4iu1_394",
  "gap-0": "_gap-0_d4iu1_398",
  "gap-1": "_gap-1_d4iu1_402",
  "gap-2": "_gap-2_d4iu1_406",
  "gap-3": "_gap-3_d4iu1_410",
  "gap-4": "_gap-4_d4iu1_414",
  "gap-5": "_gap-5_d4iu1_418",
  "gap-6": "_gap-6_d4iu1_422",
  "gap-8": "_gap-8_d4iu1_426",
  "gap-10": "_gap-10_d4iu1_430",
  "gap-12": "_gap-12_d4iu1_434",
  "p-0": "_p-0_d4iu1_438",
  "p-1": "_p-1_d4iu1_442",
  "p-2": "_p-2_d4iu1_446",
  "p-3": "_p-3_d4iu1_450",
  "p-4": "_p-4_d4iu1_454",
  "p-5": "_p-5_d4iu1_458",
  "p-6": "_p-6_d4iu1_462",
  "p-8": "_p-8_d4iu1_466",
  "p-10": "_p-10_d4iu1_470",
  "p-12": "_p-12_d4iu1_474",
  "px-0": "_px-0_d4iu1_478",
  "px-1": "_px-1_d4iu1_483",
  "px-2": "_px-2_d4iu1_488",
  "px-3": "_px-3_d4iu1_493",
  "px-4": "_px-4_d4iu1_498",
  "px-6": "_px-6_d4iu1_503",
  "py-0": "_py-0_d4iu1_508",
  "py-1": "_py-1_d4iu1_513",
  "py-2": "_py-2_d4iu1_518",
  "py-3": "_py-3_d4iu1_523",
  "py-4": "_py-4_d4iu1_528",
  "py-6": "_py-6_d4iu1_533",
  "m-0": "_m-0_d4iu1_538",
  "m-1": "_m-1_d4iu1_542",
  "m-2": "_m-2_d4iu1_546",
  "m-3": "_m-3_d4iu1_550",
  "m-4": "_m-4_d4iu1_554",
  "m-auto": "_m-auto_d4iu1_558",
  "mx-auto": "_mx-auto_d4iu1_562",
  "my-auto": "_my-auto_d4iu1_567",
  "mx-0": "_mx-0_d4iu1_572",
  "mx-1": "_mx-1_d4iu1_577",
  "mx-2": "_mx-2_d4iu1_582",
  "mx-3": "_mx-3_d4iu1_587",
  "mx-4": "_mx-4_d4iu1_592",
  "my-0": "_my-0_d4iu1_597",
  "my-1": "_my-1_d4iu1_602",
  "my-2": "_my-2_d4iu1_607",
  "my-3": "_my-3_d4iu1_612",
  "my-4": "_my-4_d4iu1_617",
  "w-full": "_w-full_d4iu1_622",
  "w-auto": "_w-auto_d4iu1_626",
  "w-fit": "_w-fit_d4iu1_630",
  "w-min": "_w-min_d4iu1_634",
  "w-max": "_w-max_d4iu1_638",
  "max-w-none": "_max-w-none_d4iu1_642",
  "max-w-xs": "_max-w-xs_d4iu1_646",
  "max-w-sm": "_max-w-sm_d4iu1_650",
  "max-w-md": "_max-w-md_d4iu1_654",
  "max-w-lg": "_max-w-lg_d4iu1_658",
  "max-w-xl": "_max-w-xl_d4iu1_662",
  "max-w-2xl": "_max-w-2xl_d4iu1_666",
  "max-w-3xl": "_max-w-3xl_d4iu1_670",
  "max-w-4xl": "_max-w-4xl_d4iu1_674",
  "max-w-5xl": "_max-w-5xl_d4iu1_678",
  "max-w-6xl": "_max-w-6xl_d4iu1_682",
  "max-w-7xl": "_max-w-7xl_d4iu1_686",
  "max-w-full": "_max-w-full_d4iu1_690",
  "min-w-0": "_min-w-0_d4iu1_694",
  "min-w-full": "_min-w-full_d4iu1_698",
  "h-auto": "_h-auto_d4iu1_702",
  "h-fit": "_h-fit_d4iu1_706",
  "h-full": "_h-full_d4iu1_710",
  "h-screen": "_h-screen_d4iu1_714",
  "max-h-full": "_max-h-full_d4iu1_718",
  "max-h-screen": "_max-h-screen_d4iu1_722",
  "min-h-0": "_min-h-0_d4iu1_726",
  "min-h-full": "_min-h-full_d4iu1_730",
  "min-h-screen": "_min-h-screen_d4iu1_734",
  relative: ox,
  absolute: rx,
  fixed: sx,
  sticky: lx,
  static: "_static_d4iu1_754",
  "inset-0": "_inset-0_d4iu1_758",
  "top-0": "_top-0_d4iu1_765",
  "right-0": "_right-0_d4iu1_769",
  "bottom-0": "_bottom-0_d4iu1_773",
  "left-0": "_left-0_d4iu1_777",
  "text-left": "_text-left_d4iu1_781",
  "text-center": "_text-center_d4iu1_785",
  "text-right": "_text-right_d4iu1_789",
  "text-justify": "_text-justify_d4iu1_793",
  "text-xs": "_text-xs_d4iu1_797",
  "text-sm": "_text-sm_d4iu1_801",
  "text-base": "_text-base_d4iu1_805",
  "text-lg": "_text-lg_d4iu1_809",
  "text-xl": "_text-xl_d4iu1_813",
  "text-2xl": "_text-2xl_d4iu1_817",
  "text-3xl": "_text-3xl_d4iu1_821",
  "text-4xl": "_text-4xl_d4iu1_825",
  "font-normal": "_font-normal_d4iu1_829",
  "font-medium": "_font-medium_d4iu1_833",
  "font-semibold": "_font-semibold_d4iu1_837",
  "font-bold": "_font-bold_d4iu1_841",
  "leading-tight": "_leading-tight_d4iu1_845",
  "leading-normal": "_leading-normal_d4iu1_849",
  "leading-relaxed": "_leading-relaxed_d4iu1_853",
  "text-primary": "_text-primary_d4iu1_857",
  "text-secondary": "_text-secondary_d4iu1_861",
  "text-muted": "_text-muted_d4iu1_865",
  "text-inverse": "_text-inverse_d4iu1_869",
  "text-blue": "_text-blue_d4iu1_873",
  "text-red": "_text-red_d4iu1_877",
  "text-green": "_text-green_d4iu1_881",
  "text-yellow": "_text-yellow_d4iu1_885",
  truncate: cx,
  "text-ellipsis": "_text-ellipsis_d4iu1_896",
  "text-clip": "_text-clip_d4iu1_903",
  "bg-transparent": "_bg-transparent_d4iu1_909",
  "bg-white": "_bg-white_d4iu1_913",
  "bg-gray-50": "_bg-gray-50_d4iu1_917",
  "bg-gray-100": "_bg-gray-100_d4iu1_921",
  "bg-gray-200": "_bg-gray-200_d4iu1_925",
  "bg-primary": "_bg-primary_d4iu1_929",
  "bg-secondary": "_bg-secondary_d4iu1_933",
  "bg-success": "_bg-success_d4iu1_937",
  "bg-danger": "_bg-danger_d4iu1_941",
  "bg-warning": "_bg-warning_d4iu1_945",
  border: _x,
  "border-0": "_border-0_d4iu1_953",
  "border-t": "_border-t_d4iu1_957",
  "border-r": "_border-r_d4iu1_961",
  "border-b": "_border-b_d4iu1_965",
  "border-l": "_border-l_d4iu1_969",
  "border-gray-200": "_border-gray-200_d4iu1_973",
  "border-gray-300": "_border-gray-300_d4iu1_977",
  "border-primary": "_border-primary_d4iu1_981",
  "border-danger": "_border-danger_d4iu1_985",
  "rounded-none": "_rounded-none_d4iu1_989",
  "rounded-sm": "_rounded-sm_d4iu1_993",
  rounded: dx,
  "rounded-md": "_rounded-md_d4iu1_1001",
  "rounded-lg": "_rounded-lg_d4iu1_1005",
  "rounded-xl": "_rounded-xl_d4iu1_1009",
  "rounded-2xl": "_rounded-2xl_d4iu1_1013",
  "rounded-full": "_rounded-full_d4iu1_1017",
  "shadow-none": "_shadow-none_d4iu1_1021",
  "shadow-sm": "_shadow-sm_d4iu1_1025",
  shadow: ux,
  "shadow-md": "_shadow-md_d4iu1_1033",
  "shadow-lg": "_shadow-lg_d4iu1_1037",
  "shadow-xl": "_shadow-xl_d4iu1_1041",
  "z-0": "_z-0_d4iu1_1045",
  "z-10": "_z-10_d4iu1_1049",
  "z-20": "_z-20_d4iu1_1053",
  "z-30": "_z-30_d4iu1_1057",
  "z-40": "_z-40_d4iu1_1061",
  "z-50": "_z-50_d4iu1_1065",
  "z-auto": "_z-auto_d4iu1_1069",
  "z-dropdown": "_z-dropdown_d4iu1_1073",
  "z-sticky": "_z-sticky_d4iu1_1077",
  "z-fixed": "_z-fixed_d4iu1_1081",
  "z-modal": "_z-modal_d4iu1_1085",
  "z-tooltip": "_z-tooltip_d4iu1_1089",
  "transition-none": "_transition-none_d4iu1_1093",
  "transition-all": "_transition-all_d4iu1_1097",
  "transition-fast": "_transition-fast_d4iu1_1101",
  "transition-slow": "_transition-slow_d4iu1_1105",
  "sr-only": "_sr-only_d4iu1_1109",
  "focus-ring": "_focus-ring_d4iu1_1121",
  "cursor-default": "_cursor-default_d4iu1_1127",
  "cursor-pointer": "_cursor-pointer_d4iu1_1131",
  "cursor-not-allowed": "_cursor-not-allowed_d4iu1_1135",
  "select-none": "_select-none_d4iu1_1139",
  "select-text": "_select-text_d4iu1_1143",
  "select-all": "_select-all_d4iu1_1147",
  "select-auto": "_select-auto_d4iu1_1151",
  "pointer-events-none": "_pointer-events-none_d4iu1_1155",
  "pointer-events-auto": "_pointer-events-auto_d4iu1_1159",
  "gap-sm": "_gap-sm_d4iu1_1163",
  "gap-md": "_gap-md_d4iu1_1167",
  "gap-lg": "_gap-lg_d4iu1_1171",
  "gap-xl": "_gap-xl_d4iu1_1175",
  "p-sm": "_p-sm_d4iu1_1179",
  "p-md": "_p-md_d4iu1_1183",
  "p-lg": "_p-lg_d4iu1_1187",
  "p-xl": "_p-xl_d4iu1_1191",
  "m-sm": "_m-sm_d4iu1_1195",
  "m-md": "_m-md_d4iu1_1199",
  "m-lg": "_m-lg_d4iu1_1203",
  "m-xl": "_m-xl_d4iu1_1207",
  "text-gray": "_text-gray_d4iu1_1211",
  "mobile:hidden": "_mobile:hidden_d4iu1_1216",
  "mobile:block": "_mobile:block_d4iu1_1219",
  "mobile:flex": "_mobile:flex_d4iu1_1222",
  "mobile:grid": "_mobile:grid_d4iu1_1225",
  "mobile:text-sm": "_mobile:text-sm_d4iu1_1228",
  "mobile:text-xs": "_mobile:text-xs_d4iu1_1231",
  "mobile:p-2": "_mobile:p-2_d4iu1_1234",
  "mobile:px-2": "_mobile:px-2_d4iu1_1237",
  "tablet:block": "_tablet:block_d4iu1_1243",
  "tablet:flex": "_tablet:flex_d4iu1_1246",
  "tablet:grid": "_tablet:grid_d4iu1_1249",
  "tablet:hidden": "_tablet:hidden_d4iu1_1252",
  "desktop:block": "_desktop:block_d4iu1_1257",
  "desktop:flex": "_desktop:flex_d4iu1_1260",
  "desktop:grid": "_desktop:grid_d4iu1_1263",
  "desktop:hidden": "_desktop:hidden_d4iu1_1266",
  "bg-gray": "_bg-gray_d4iu1_917",
  "border-secondary": "_border-secondary_d4iu1_1290",
  "border-gray": "_border-gray_d4iu1_973",
  "shadow-glow": "_shadow-glow_d4iu1_1326",
  "w-8": "_w-8_d4iu1_1374",
  "w-10": "_w-10_d4iu1_1378",
  "w-12": "_w-12_d4iu1_1382",
  "w-16": "_w-16_d4iu1_1386",
  "h-8": "_h-8_d4iu1_1390",
  "h-10": "_h-10_d4iu1_1394",
  "h-12": "_h-12_d4iu1_1398",
  "h-16": "_h-16_d4iu1_1402",
  "user-select-none": "_user-select-none_d4iu1_1418",
  transition: mx,
  "transition-colors": "_transition-colors_d4iu1_1426",
  "transition-transform": "_transition-transform_d4iu1_1430",
  "hover-scale": "_hover-scale_d4iu1_1434",
  "fade-in": "_fade-in_d4iu1_1441",
  "status-online": "_status-online_d4iu1_1453",
  "status-offline": "_status-offline_d4iu1_1463",
  "status-away": "_status-away_d4iu1_1473",
  "status-busy": "_status-busy_d4iu1_1483",
  "modal-overlay": "_modal-overlay_d4iu1_1493",
  "modal-content": "_modal-content_d4iu1_1507",
  "close-button-absolute": "_close-button-absolute_d4iu1_1521",
  small: hx,
  large: px,
  "primary-button": "_primary-button_d4iu1_1602",
  "secondary-button": "_secondary-button_d4iu1_1606",
  card: fx,
  "input-base": "_input-base_d4iu1_1659",
  "chat-window": "_chat-window_d4iu1_1691",
  "chat-message": "_chat-message_d4iu1_1702",
  "z-overlay": "_z-overlay_d4iu1_1727",
  "mobile-hidden": "_mobile-hidden_d4iu1_1732",
  "mobile-flex-col": "_mobile-flex-col_d4iu1_1735",
  "mobile-text-center": "_mobile-text-center_d4iu1_1738",
  "mobile-p-sm": "_mobile-p-sm_d4iu1_1741",
  "mobile-gap-sm": "_mobile-gap-sm_d4iu1_1744",
  "desktop-hidden": "_desktop-hidden_d4iu1_1749",
  "print-hidden": "_print-hidden_d4iu1_1754",
  selectContainer: gx,
  disabled: bx,
  error: yx,
  control: xx,
  fieldLabel: vx,
  requiredMark: wx,
  open: kx,
  valueContainer: Sx,
  singleValue: Cx,
  placeholder: jx,
  searchInput: zx,
  indicators: Tx,
  loadingIndicator: Px,
  spinner: Nx,
  spin: Ex,
  clearIndicator: Ix,
  dropdownIndicator: Lx,
  menu: Ax,
  menuSlideDown: Mx,
  "placement-top": "_placement-top_d4iu1_1925",
  menuSlideUp: Ox,
  option: Rx,
  focused: Dx,
  selected: Bx,
  optionIcon: $x,
  optionImage: Fx,
  optionContent: Hx,
  optionLabel: Ux,
  optionDescription: Zx,
  checkmark: Wx,
  loadingMessage: Vx,
  noOptionsMessage: Gx,
  "size-small": "_size-small_d4iu1_2052",
  "size-large": "_size-large_d4iu1_2059",
  "style-filled": "_style-filled_d4iu1_2066",
  "style-underlined": "_style-underlined_d4iu1_2078",
  "style-ghost": "_style-ghost_d4iu1_2099",
  "style-minimal": "_style-minimal_d4iu1_2112",
  "radius-none": "_radius-none_d4iu1_2129",
  "radius-small": "_radius-small_d4iu1_2136",
  "radius-large": "_radius-large_d4iu1_2146",
  "radius-full": "_radius-full_d4iu1_2156",
  helpText: qx,
  errorText: Kx,
  "loading-shimmer": "_loading-shimmer_d4iu1_1"
}, Ss = {
  dropdown: {
    variant: "dropdown",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !1,
    clearable: !0,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select an option...",
    searchPlaceholder: "Search...",
    noOptionsMessage: "No options found",
    loadingMessage: "Loading...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  multiselect: {
    variant: "multiselect",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !0,
    closeOnSelect: !1,
    showSelectedCount: !0,
    maxHeight: 200,
    placeholder: "Select options...",
    searchPlaceholder: "Search...",
    noOptionsMessage: "No options found",
    loadingMessage: "Loading...",
    maxSelectedDisplay: 2,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  autocomplete: {
    variant: "autocomplete",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Type to search...",
    searchPlaceholder: "Type to search...",
    noOptionsMessage: "No matches found",
    loadingMessage: "Searching...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 150,
    virtualized: !1,
    required: !1
  },
  "searchable-dropdown": {
    variant: "searchable",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 250,
    placeholder: "Select or search...",
    searchPlaceholder: "Search options...",
    noOptionsMessage: "No options found",
    loadingMessage: "Loading...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  "country-selector": {
    variant: "searchable",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !1,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select country...",
    searchPlaceholder: "Search countries...",
    noOptionsMessage: "No countries found",
    loadingMessage: "Loading countries...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !0,
    required: !1
  },
  "timezone-selector": {
    variant: "searchable",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !1,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select timezone...",
    searchPlaceholder: "Search timezones...",
    noOptionsMessage: "No timezones found",
    loadingMessage: "Loading timezones...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !0,
    required: !1
  },
  "language-selector": {
    variant: "searchable",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !1,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select language...",
    searchPlaceholder: "Search languages...",
    noOptionsMessage: "No languages found",
    loadingMessage: "Loading languages...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  "category-filter": {
    variant: "multiselect",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !0,
    closeOnSelect: !1,
    showSelectedCount: !0,
    maxHeight: 200,
    placeholder: "Filter by category...",
    searchPlaceholder: "Search categories...",
    noOptionsMessage: "No categories found",
    loadingMessage: "Loading categories...",
    maxSelectedDisplay: 2,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  "tag-selector": {
    variant: "multiselect",
    size: "medium",
    state: "default",
    style: "filled",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !0,
    closeOnSelect: !1,
    showSelectedCount: !1,
    maxHeight: 150,
    placeholder: "Add tags...",
    searchPlaceholder: "Search or add tags...",
    noOptionsMessage: "No tags found",
    loadingMessage: "Loading tags...",
    maxSelectedDisplay: 5,
    borderRadius: "small",
    animationDuration: 150,
    virtualized: !1,
    required: !1
  },
  "user-picker": {
    variant: "searchable",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select user...",
    searchPlaceholder: "Search users...",
    noOptionsMessage: "No users found",
    loadingMessage: "Searching users...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  "date-range": {
    variant: "dropdown",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !1,
    clearable: !0,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select date range...",
    searchPlaceholder: "Search...",
    noOptionsMessage: "No date ranges available",
    loadingMessage: "Loading...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  },
  custom: {
    variant: "custom",
    size: "medium",
    state: "default",
    style: "outlined",
    placement: "bottom",
    searchable: !0,
    clearable: !0,
    multiple: !1,
    closeOnSelect: !0,
    showSelectedCount: !1,
    maxHeight: 200,
    placeholder: "Select...",
    searchPlaceholder: "Search...",
    noOptionsMessage: "No options found",
    loadingMessage: "Loading...",
    maxSelectedDisplay: 3,
    borderRadius: "medium",
    animationDuration: 200,
    virtualized: !1,
    required: !1
  }
}, Ml = Le(
  ({
    componentId: t,
    options: n,
    value: a,
    defaultValue: r,
    onChange: c,
    onSearch: d,
    label: u,
    helpText: h,
    error: p,
    className: g,
    disabled: y,
    required: v,
    loading: z,
    name: k,
    id: N,
    configuration: P,
    kind: $,
    ...F
  }, H) => {
    const A = sn(), R = t || `select-${A}`, T = vi(), E = (O) => {
      T(
        hs({
          selectId: R,
          updates: { isOpen: O }
        })
      );
    };
    Te(() => (T(
      hs({
        selectId: R,
        updates: {
          internalValue: a || r || (P != null && P.multiple ? [] : ""),
          isOpen: !1,
          searchValue: "",
          focusedIndex: -1
        }
      })
    ), () => {
      T(Gi(R));
    }), [
      T,
      R,
      a,
      r,
      P == null ? void 0 : P.multiple
    ]);
    const J = It(
      sf(R)
    );
    J != null && J.internalValue || P != null && P.multiple;
    const G = (J == null ? void 0 : J.isOpen) || !1, B = (J == null ? void 0 : J.searchValue) || "";
    J != null && J.focusedIndex;
    const M = nt(null);
    nt(null), nt(null);
    const j = _i(() => n.reduce((O, S) => "options" in S ? [...O, ...S.options] : [...O, S], []), [n]);
    _i(() => !(P != null && P.searchable) || !B ? j : j.filter(
      (O) => {
        var S;
        return O.label.toLowerCase().includes(B.toLowerCase()) || ((S = O.description) == null ? void 0 : S.toLowerCase().includes(B.toLowerCase()));
      }
    ), [
      j,
      B,
      P == null ? void 0 : P.searchable
    ]), Te(() => {
      const O = (S) => {
        M.current && !M.current.contains(
          S.target
        ) && E(!1);
      };
      if (G)
        return document.addEventListener(
          "mousedown",
          O
        ), () => document.removeEventListener(
          "mousedown",
          O
        );
    }, [G]);
    let V = P;
    $ && (V = Yx(
      $,
      P,
      y,
      p,
      z
    ));
    const {
      variant: Q,
      size: le,
      style: ae,
      borderRadius: te,
      state: ce,
      customStyles: w,
      ...q
    } = V || {};
    ({
      ...q
    });
    const x = Hi(
      ti.selectContainer,
      ti[`variant-${Q}`],
      ti[`size-${le}`],
      ti[`style-${ae}`],
      ti[`radius-${te}`],
      {
        [ti.open]: G,
        [ti.disabled]: y || ce === "disabled",
        [ti.error]: p || ce === "error",
        [ti.loading]: z || ce === "loading",
        [ti.multiple]: V == null ? void 0 : V.multiple,
        [ti.searchable]: V == null ? void 0 : V.searchable
      },
      w == null ? void 0 : w.container,
      g
    );
    return /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: H,
        className: x,
        ...F
      }
    );
  }
);
Ml.displayName = "Select";
function Yx(t, n, a, r, c) {
  if (!t)
    return n;
  const u = {
    ...Ss[t] || Ss.dropdown,
    ...n
  };
  return a && (u.state = "disabled"), r && (u.state = "error"), c && (u.state = "loading"), u;
}
const jo = {
  variant: "standard",
  size: "medium",
  state: "default",
  style: "default",
  alignment: "vertical",
  showLabels: !0,
  showDescriptions: !1,
  allowDeselect: !1,
  required: !1,
  spacing: "normal",
  borderRadius: "small",
  animationDuration: 200
}, zo = {
  variant: "button",
  size: "medium",
  state: "default",
  style: "outlined",
  alignment: "horizontal",
  showLabels: !0,
  showDescriptions: !1,
  allowDeselect: !1,
  required: !1,
  spacing: "tight",
  borderRadius: "medium",
  animationDuration: 150
}, To = {
  variant: "card",
  size: "large",
  state: "default",
  style: "outlined",
  alignment: "horizontal",
  showLabels: !0,
  showDescriptions: !1,
  allowDeselect: !1,
  required: !1,
  spacing: "normal",
  borderRadius: "medium",
  animationDuration: 200
}, Cs = {
  standard: { ...jo },
  preference: { ...jo, showDescriptions: !0 },
  custom: {
    ...jo,
    variant: "custom",
    borderRadius: "medium"
  },
  "button-group": { ...zo },
  "color-picker": {
    ...zo,
    style: "filled",
    showLabels: !1,
    borderRadius: "full"
  },
  "size-selector": {
    ...zo,
    size: "small",
    borderRadius: "small"
  },
  "card-selection": {
    ...To,
    alignment: "grid",
    showDescriptions: !0
  },
  "image-radio": { ...To },
  "plan-selector": {
    ...To,
    showDescriptions: !0,
    required: !0
  },
  "toggle-switch": {
    variant: "switch",
    size: "medium",
    state: "default",
    style: "filled",
    alignment: "horizontal",
    showLabels: !0,
    showDescriptions: !1,
    allowDeselect: !0,
    required: !1,
    spacing: "normal",
    borderRadius: "full",
    animationDuration: 300
  }
}, Jx = "_container_1xr39_129", Xx = "_flex_1xr39_260", Qx = "_grid_1xr39_356", ev = "_relative_1xr39_738", tv = "_absolute_1xr39_742", iv = "_fixed_1xr39_746", nv = "_sticky_1xr39_750", av = "_truncate_1xr39_889", ov = "_border_1xr39_949", rv = "_rounded_1xr39_989", sv = "_shadow_1xr39_1021", lv = "_transition_1xr39_1093", cv = "_small_1xr39_1593", _v = "_large_1xr39_1597", dv = "_card_1xr39_1645", uv = "_radioContainer_1xr39_1770", mv = "_disabled_1xr39_1775", hv = "_error_1xr39_1779", pv = "_optionsContainer_1xr39_1779", fv = "_fieldLabel_1xr39_1783", gv = "_requiredMark_1xr39_1787", bv = "_radioOption_1xr39_1821", yv = "_radioInput_1xr39_1836", xv = "_radioLabel_1xr39_1844", vv = "_optionText_1xr39_1875", wv = "_radioDescription_1xr39_1884", kv = "_optionIcon_1xr39_1890", Sv = "_selected_1xr39_1898", Cv = "_optionImage_1xr39_1902", jv = "_helpText_1xr39_2077", zv = "_errorText_1xr39_2082", Ve = {
  container: Jx,
  "container-sm": "_container-sm_1xr39_145",
  "container-md": "_container-md_1xr39_161",
  "container-lg": "_container-lg_1xr39_177",
  "container-xl": "_container-xl_1xr39_193",
  "container-2xl": "_container-2xl_1xr39_209",
  "safe-area": "_safe-area_1xr39_225",
  "overflow-hidden": "_overflow-hidden_1xr39_231",
  "overflow-auto": "_overflow-auto_1xr39_235",
  "overflow-x-auto": "_overflow-x-auto_1xr39_240",
  "overflow-y-auto": "_overflow-y-auto_1xr39_246",
  "box-border": "_box-border_1xr39_252",
  "box-content": "_box-content_1xr39_256",
  flex: Xx,
  "flex-col": "_flex-col_1xr39_264",
  "flex-row": "_flex-row_1xr39_269",
  "flex-wrap": "_flex-wrap_1xr39_274",
  "flex-nowrap": "_flex-nowrap_1xr39_279",
  "flex-center": "_flex-center_1xr39_284",
  "flex-between": "_flex-between_1xr39_290",
  "justify-start": "_justify-start_1xr39_296",
  "justify-center": "_justify-center_1xr39_300",
  "justify-end": "_justify-end_1xr39_304",
  "justify-between": "_justify-between_1xr39_308",
  "justify-around": "_justify-around_1xr39_312",
  "items-start": "_items-start_1xr39_316",
  "items-center": "_items-center_1xr39_320",
  "items-end": "_items-end_1xr39_324",
  "items-stretch": "_items-stretch_1xr39_328",
  "flex-1": "_flex-1_1xr39_332",
  "flex-auto": "_flex-auto_1xr39_336",
  "flex-none": "_flex-none_1xr39_340",
  "flex-grow": "_flex-grow_1xr39_344",
  "flex-shrink": "_flex-shrink_1xr39_348",
  "flex-shrink-0": "_flex-shrink-0_1xr39_352",
  grid: Qx,
  "grid-auto-fit": "_grid-auto-fit_1xr39_360",
  "grid-auto-fill": "_grid-auto-fill_1xr39_367",
  "grid-cols-1": "_grid-cols-1_1xr39_374",
  "grid-cols-2": "_grid-cols-2_1xr39_378",
  "grid-cols-3": "_grid-cols-3_1xr39_382",
  "grid-cols-4": "_grid-cols-4_1xr39_386",
  "grid-cols-6": "_grid-cols-6_1xr39_390",
  "grid-cols-12": "_grid-cols-12_1xr39_394",
  "gap-0": "_gap-0_1xr39_398",
  "gap-1": "_gap-1_1xr39_402",
  "gap-2": "_gap-2_1xr39_406",
  "gap-3": "_gap-3_1xr39_410",
  "gap-4": "_gap-4_1xr39_414",
  "gap-5": "_gap-5_1xr39_418",
  "gap-6": "_gap-6_1xr39_422",
  "gap-8": "_gap-8_1xr39_426",
  "gap-10": "_gap-10_1xr39_430",
  "gap-12": "_gap-12_1xr39_434",
  "p-0": "_p-0_1xr39_438",
  "p-1": "_p-1_1xr39_442",
  "p-2": "_p-2_1xr39_446",
  "p-3": "_p-3_1xr39_450",
  "p-4": "_p-4_1xr39_454",
  "p-5": "_p-5_1xr39_458",
  "p-6": "_p-6_1xr39_462",
  "p-8": "_p-8_1xr39_466",
  "p-10": "_p-10_1xr39_470",
  "p-12": "_p-12_1xr39_474",
  "px-0": "_px-0_1xr39_478",
  "px-1": "_px-1_1xr39_483",
  "px-2": "_px-2_1xr39_488",
  "px-3": "_px-3_1xr39_493",
  "px-4": "_px-4_1xr39_498",
  "px-6": "_px-6_1xr39_503",
  "py-0": "_py-0_1xr39_508",
  "py-1": "_py-1_1xr39_513",
  "py-2": "_py-2_1xr39_518",
  "py-3": "_py-3_1xr39_523",
  "py-4": "_py-4_1xr39_528",
  "py-6": "_py-6_1xr39_533",
  "m-0": "_m-0_1xr39_538",
  "m-1": "_m-1_1xr39_542",
  "m-2": "_m-2_1xr39_546",
  "m-3": "_m-3_1xr39_550",
  "m-4": "_m-4_1xr39_554",
  "m-auto": "_m-auto_1xr39_558",
  "mx-auto": "_mx-auto_1xr39_562",
  "my-auto": "_my-auto_1xr39_567",
  "mx-0": "_mx-0_1xr39_572",
  "mx-1": "_mx-1_1xr39_577",
  "mx-2": "_mx-2_1xr39_582",
  "mx-3": "_mx-3_1xr39_587",
  "mx-4": "_mx-4_1xr39_592",
  "my-0": "_my-0_1xr39_597",
  "my-1": "_my-1_1xr39_602",
  "my-2": "_my-2_1xr39_607",
  "my-3": "_my-3_1xr39_612",
  "my-4": "_my-4_1xr39_617",
  "w-full": "_w-full_1xr39_622",
  "w-auto": "_w-auto_1xr39_626",
  "w-fit": "_w-fit_1xr39_630",
  "w-min": "_w-min_1xr39_634",
  "w-max": "_w-max_1xr39_638",
  "max-w-none": "_max-w-none_1xr39_642",
  "max-w-xs": "_max-w-xs_1xr39_646",
  "max-w-sm": "_max-w-sm_1xr39_650",
  "max-w-md": "_max-w-md_1xr39_654",
  "max-w-lg": "_max-w-lg_1xr39_658",
  "max-w-xl": "_max-w-xl_1xr39_662",
  "max-w-2xl": "_max-w-2xl_1xr39_666",
  "max-w-3xl": "_max-w-3xl_1xr39_670",
  "max-w-4xl": "_max-w-4xl_1xr39_674",
  "max-w-5xl": "_max-w-5xl_1xr39_678",
  "max-w-6xl": "_max-w-6xl_1xr39_682",
  "max-w-7xl": "_max-w-7xl_1xr39_686",
  "max-w-full": "_max-w-full_1xr39_690",
  "min-w-0": "_min-w-0_1xr39_694",
  "min-w-full": "_min-w-full_1xr39_698",
  "h-auto": "_h-auto_1xr39_702",
  "h-fit": "_h-fit_1xr39_706",
  "h-full": "_h-full_1xr39_710",
  "h-screen": "_h-screen_1xr39_714",
  "max-h-full": "_max-h-full_1xr39_718",
  "max-h-screen": "_max-h-screen_1xr39_722",
  "min-h-0": "_min-h-0_1xr39_726",
  "min-h-full": "_min-h-full_1xr39_730",
  "min-h-screen": "_min-h-screen_1xr39_734",
  relative: ev,
  absolute: tv,
  fixed: iv,
  sticky: nv,
  static: "_static_1xr39_754",
  "inset-0": "_inset-0_1xr39_758",
  "top-0": "_top-0_1xr39_765",
  "right-0": "_right-0_1xr39_769",
  "bottom-0": "_bottom-0_1xr39_773",
  "left-0": "_left-0_1xr39_777",
  "text-left": "_text-left_1xr39_781",
  "text-center": "_text-center_1xr39_785",
  "text-right": "_text-right_1xr39_789",
  "text-justify": "_text-justify_1xr39_793",
  "text-xs": "_text-xs_1xr39_797",
  "text-sm": "_text-sm_1xr39_801",
  "text-base": "_text-base_1xr39_805",
  "text-lg": "_text-lg_1xr39_809",
  "text-xl": "_text-xl_1xr39_813",
  "text-2xl": "_text-2xl_1xr39_817",
  "text-3xl": "_text-3xl_1xr39_821",
  "text-4xl": "_text-4xl_1xr39_825",
  "font-normal": "_font-normal_1xr39_829",
  "font-medium": "_font-medium_1xr39_833",
  "font-semibold": "_font-semibold_1xr39_837",
  "font-bold": "_font-bold_1xr39_841",
  "leading-tight": "_leading-tight_1xr39_845",
  "leading-normal": "_leading-normal_1xr39_849",
  "leading-relaxed": "_leading-relaxed_1xr39_853",
  "text-primary": "_text-primary_1xr39_857",
  "text-secondary": "_text-secondary_1xr39_861",
  "text-muted": "_text-muted_1xr39_865",
  "text-inverse": "_text-inverse_1xr39_869",
  "text-blue": "_text-blue_1xr39_873",
  "text-red": "_text-red_1xr39_877",
  "text-green": "_text-green_1xr39_881",
  "text-yellow": "_text-yellow_1xr39_885",
  truncate: av,
  "text-ellipsis": "_text-ellipsis_1xr39_896",
  "text-clip": "_text-clip_1xr39_903",
  "bg-transparent": "_bg-transparent_1xr39_909",
  "bg-white": "_bg-white_1xr39_913",
  "bg-gray-50": "_bg-gray-50_1xr39_917",
  "bg-gray-100": "_bg-gray-100_1xr39_921",
  "bg-gray-200": "_bg-gray-200_1xr39_925",
  "bg-primary": "_bg-primary_1xr39_929",
  "bg-secondary": "_bg-secondary_1xr39_933",
  "bg-success": "_bg-success_1xr39_937",
  "bg-danger": "_bg-danger_1xr39_941",
  "bg-warning": "_bg-warning_1xr39_945",
  border: ov,
  "border-0": "_border-0_1xr39_953",
  "border-t": "_border-t_1xr39_957",
  "border-r": "_border-r_1xr39_961",
  "border-b": "_border-b_1xr39_965",
  "border-l": "_border-l_1xr39_969",
  "border-gray-200": "_border-gray-200_1xr39_973",
  "border-gray-300": "_border-gray-300_1xr39_977",
  "border-primary": "_border-primary_1xr39_981",
  "border-danger": "_border-danger_1xr39_985",
  "rounded-none": "_rounded-none_1xr39_989",
  "rounded-sm": "_rounded-sm_1xr39_993",
  rounded: rv,
  "rounded-md": "_rounded-md_1xr39_1001",
  "rounded-lg": "_rounded-lg_1xr39_1005",
  "rounded-xl": "_rounded-xl_1xr39_1009",
  "rounded-2xl": "_rounded-2xl_1xr39_1013",
  "rounded-full": "_rounded-full_1xr39_1017",
  "shadow-none": "_shadow-none_1xr39_1021",
  "shadow-sm": "_shadow-sm_1xr39_1025",
  shadow: sv,
  "shadow-md": "_shadow-md_1xr39_1033",
  "shadow-lg": "_shadow-lg_1xr39_1037",
  "shadow-xl": "_shadow-xl_1xr39_1041",
  "z-0": "_z-0_1xr39_1045",
  "z-10": "_z-10_1xr39_1049",
  "z-20": "_z-20_1xr39_1053",
  "z-30": "_z-30_1xr39_1057",
  "z-40": "_z-40_1xr39_1061",
  "z-50": "_z-50_1xr39_1065",
  "z-auto": "_z-auto_1xr39_1069",
  "z-dropdown": "_z-dropdown_1xr39_1073",
  "z-sticky": "_z-sticky_1xr39_1077",
  "z-fixed": "_z-fixed_1xr39_1081",
  "z-modal": "_z-modal_1xr39_1085",
  "z-tooltip": "_z-tooltip_1xr39_1089",
  "transition-none": "_transition-none_1xr39_1093",
  "transition-all": "_transition-all_1xr39_1097",
  "transition-fast": "_transition-fast_1xr39_1101",
  "transition-slow": "_transition-slow_1xr39_1105",
  "sr-only": "_sr-only_1xr39_1109",
  "focus-ring": "_focus-ring_1xr39_1121",
  "cursor-default": "_cursor-default_1xr39_1127",
  "cursor-pointer": "_cursor-pointer_1xr39_1131",
  "cursor-not-allowed": "_cursor-not-allowed_1xr39_1135",
  "select-none": "_select-none_1xr39_1139",
  "select-text": "_select-text_1xr39_1143",
  "select-all": "_select-all_1xr39_1147",
  "select-auto": "_select-auto_1xr39_1151",
  "pointer-events-none": "_pointer-events-none_1xr39_1155",
  "pointer-events-auto": "_pointer-events-auto_1xr39_1159",
  "gap-sm": "_gap-sm_1xr39_1163",
  "gap-md": "_gap-md_1xr39_1167",
  "gap-lg": "_gap-lg_1xr39_1171",
  "gap-xl": "_gap-xl_1xr39_1175",
  "p-sm": "_p-sm_1xr39_1179",
  "p-md": "_p-md_1xr39_1183",
  "p-lg": "_p-lg_1xr39_1187",
  "p-xl": "_p-xl_1xr39_1191",
  "m-sm": "_m-sm_1xr39_1195",
  "m-md": "_m-md_1xr39_1199",
  "m-lg": "_m-lg_1xr39_1203",
  "m-xl": "_m-xl_1xr39_1207",
  "text-gray": "_text-gray_1xr39_1211",
  "mobile:hidden": "_mobile:hidden_1xr39_1216",
  "mobile:block": "_mobile:block_1xr39_1219",
  "mobile:flex": "_mobile:flex_1xr39_1222",
  "mobile:grid": "_mobile:grid_1xr39_1225",
  "mobile:text-sm": "_mobile:text-sm_1xr39_1228",
  "mobile:text-xs": "_mobile:text-xs_1xr39_1231",
  "mobile:p-2": "_mobile:p-2_1xr39_1234",
  "mobile:px-2": "_mobile:px-2_1xr39_1237",
  "tablet:block": "_tablet:block_1xr39_1243",
  "tablet:flex": "_tablet:flex_1xr39_1246",
  "tablet:grid": "_tablet:grid_1xr39_1249",
  "tablet:hidden": "_tablet:hidden_1xr39_1252",
  "desktop:block": "_desktop:block_1xr39_1257",
  "desktop:flex": "_desktop:flex_1xr39_1260",
  "desktop:grid": "_desktop:grid_1xr39_1263",
  "desktop:hidden": "_desktop:hidden_1xr39_1266",
  "bg-gray": "_bg-gray_1xr39_917",
  "border-secondary": "_border-secondary_1xr39_1290",
  "border-gray": "_border-gray_1xr39_973",
  "shadow-glow": "_shadow-glow_1xr39_1326",
  "w-8": "_w-8_1xr39_1374",
  "w-10": "_w-10_1xr39_1378",
  "w-12": "_w-12_1xr39_1382",
  "w-16": "_w-16_1xr39_1386",
  "h-8": "_h-8_1xr39_1390",
  "h-10": "_h-10_1xr39_1394",
  "h-12": "_h-12_1xr39_1398",
  "h-16": "_h-16_1xr39_1402",
  "user-select-none": "_user-select-none_1xr39_1418",
  transition: lv,
  "transition-colors": "_transition-colors_1xr39_1426",
  "transition-transform": "_transition-transform_1xr39_1430",
  "hover-scale": "_hover-scale_1xr39_1434",
  "fade-in": "_fade-in_1xr39_1441",
  "status-online": "_status-online_1xr39_1453",
  "status-offline": "_status-offline_1xr39_1463",
  "status-away": "_status-away_1xr39_1473",
  "status-busy": "_status-busy_1xr39_1483",
  "modal-overlay": "_modal-overlay_1xr39_1493",
  "modal-content": "_modal-content_1xr39_1507",
  "close-button-absolute": "_close-button-absolute_1xr39_1521",
  small: cv,
  large: _v,
  "primary-button": "_primary-button_1xr39_1602",
  "secondary-button": "_secondary-button_1xr39_1606",
  card: dv,
  "input-base": "_input-base_1xr39_1659",
  "chat-window": "_chat-window_1xr39_1691",
  "chat-message": "_chat-message_1xr39_1702",
  "z-overlay": "_z-overlay_1xr39_1727",
  "mobile-hidden": "_mobile-hidden_1xr39_1732",
  "mobile-flex-col": "_mobile-flex-col_1xr39_1735",
  "mobile-text-center": "_mobile-text-center_1xr39_1738",
  "mobile-p-sm": "_mobile-p-sm_1xr39_1741",
  "mobile-gap-sm": "_mobile-gap-sm_1xr39_1744",
  "desktop-hidden": "_desktop-hidden_1xr39_1749",
  "print-hidden": "_print-hidden_1xr39_1754",
  radioContainer: uv,
  disabled: mv,
  error: hv,
  optionsContainer: pv,
  fieldLabel: fv,
  requiredMark: gv,
  "alignment-horizontal": "_alignment-horizontal_1xr39_1796",
  "alignment-vertical": "_alignment-vertical_1xr39_1800",
  "alignment-grid": "_alignment-grid_1xr39_1803",
  "spacing-tight": "_spacing-tight_1xr39_1809",
  "spacing-normal": "_spacing-normal_1xr39_1813",
  "spacing-loose": "_spacing-loose_1xr39_1817",
  radioOption: bv,
  radioInput: yv,
  radioLabel: xv,
  optionText: vv,
  "optionText--bold": "_optionText--bold_1xr39_1880",
  radioDescription: wv,
  optionIcon: kv,
  selected: Sv,
  optionImage: Cv,
  "variant-standard": "_variant-standard_1xr39_1914",
  "variant-button": "_variant-button_1xr39_1925",
  "variant-card": "_variant-card_1xr39_1944",
  "variant-switch": "_variant-switch_1xr39_1972",
  "size-small": "_size-small_1xr39_2003",
  "size-large": "_size-large_1xr39_2014",
  "style-outlined": "_style-outlined_1xr39_2025",
  "style-filled": "_style-filled_1xr39_2029",
  "style-ghost": "_style-ghost_1xr39_2037",
  "style-minimal": "_style-minimal_1xr39_2048",
  "radius-none": "_radius-none_1xr39_2057",
  "radius-small": "_radius-small_1xr39_2061",
  "radius-medium": "_radius-medium_1xr39_2065",
  "radius-large": "_radius-large_1xr39_2069",
  "radius-full": "_radius-full_1xr39_2073",
  helpText: jv,
  errorText: zv,
  "loading-shimmer": "_loading-shimmer_1xr39_1"
}, rn = Le(
  ({
    componentId: t,
    name: n,
    options: a,
    value: r,
    defaultValue: c,
    onChange: d,
    label: u,
    helpText: h,
    error: p,
    className: g,
    disabled: y,
    required: v,
    kind: z = "standard",
    configuration: k = {},
    ...N
  }, P) => {
    var M;
    const $ = sn(), F = t || `radio-${$}`, H = vi();
    Te(() => (H(
      co({
        radioId: F,
        updates: {
          internalValue: r || c
        }
      })
    ), () => {
      H(Gi(F));
    }), [
      H,
      F,
      r,
      c
    ]);
    const A = It(
      lf(F)
    ), R = A == null ? void 0 : A.internalValue, T = r !== void 0, E = T ? r : R;
    Te(() => {
      T && H(
        co({
          radioId: F,
          updates: { internalValue: r }
        })
      );
    }, [
      r,
      T,
      H,
      F
    ]);
    const J = (j) => {
      if (y) return;
      const V = k.allowDeselect && E === j ? void 0 : j;
      T || H(
        co({
          radioId: F,
          updates: { internalValue: V }
        })
      ), d == null || d(V || "");
    }, G = Hi(
      Ve.radioContainer,
      Ve[`variant-${k.variant}`],
      Ve[`size-${k.size}`],
      Ve[`style-${k.style}`],
      Ve[`alignment-${k.alignment}`],
      Ve[`spacing-${k.spacing}`],
      Ve[`radius-${k.borderRadius}`],
      {
        [Ve.disabled]: y || k.state === "disabled",
        [Ve.error]: p || k.state === "error",
        [Ve.required]: v || k.required
      },
      (M = k.customStyles) == null ? void 0 : M.container,
      g
    ), B = (j, V) => {
      var q, x, O, S;
      const Q = E === j.value, le = y || j.disabled, ae = Hi(
        Ve.radioOption,
        Ve[`option-${k.variant}`],
        {
          [Ve.selected]: Q,
          [Ve.disabled]: le,
          [Ve.hasIcon]: !!j.icon,
          [Ve.hasImage]: !!j.image,
          [Ve.hasDescription]: !!j.description && k.showDescriptions
        },
        (q = k.customStyles) == null ? void 0 : q.option,
        j.className
      ), te = Hi(
        Ve.radioInput,
        (x = k.customStyles) == null ? void 0 : x.input
      ), ce = Hi(
        Ve.radioLabel,
        (O = k.customStyles) == null ? void 0 : O.label
      ), w = Hi(
        Ve.radioDescription,
        (S = k.customStyles) == null ? void 0 : S.description
      );
      return /* @__PURE__ */ l.jsxs(
        f,
        {
          className: ae,
          children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "radio",
                id: `${n}-${j.value}`,
                name: n,
                value: j.value,
                checked: Q,
                disabled: le,
                onChange: () => J(j.value),
                className: te,
                style: {
                  // Only keep prop-dependent inline styles
                  animationDuration: `${k.animationDuration}ms`
                }
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "label",
              {
                htmlFor: `${n}-${j.value}`,
                className: ce,
                children: [
                  j.image && /* @__PURE__ */ l.jsx(f, { className: Ve.optionImage, children: /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      src: j.image,
                      alt: j.label
                    }
                  ) }),
                  j.icon && /* @__PURE__ */ l.jsx(f, { className: Ve.optionIcon, children: j.icon }),
                  k.showLabels && /* @__PURE__ */ l.jsx("span", { className: Ve.optionText, children: j.label }),
                  j.description && k.showDescriptions && /* @__PURE__ */ l.jsx("span", { className: w, children: j.description })
                ]
              }
            )
          ]
        },
        j.value
      );
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: P,
        className: G,
        ...N,
        children: [
          u && /* @__PURE__ */ l.jsxs(f, { className: Ve.fieldLabel, children: [
            u,
            (v || k.required) && /* @__PURE__ */ l.jsx("span", { className: Ve.requiredMark, children: "*" })
          ] }),
          /* @__PURE__ */ l.jsx(f, { className: Ve.optionsContainer, children: a.map(B) }),
          h && !p && /* @__PURE__ */ l.jsx(f, { className: Ve.helpText, children: h }),
          p && /* @__PURE__ */ l.jsx(f, { className: Ve.errorText, children: p })
        ]
      }
    );
  }
);
rn.displayName = "Radio";
function ii({
  kind: t = "standard",
  configuration: n = {},
  ...a
}) {
  const c = {
    ...Cs[t] || Cs.standard,
    ...n
  };
  return /* @__PURE__ */ l.jsx(
    rn,
    {
      ...a,
      kind: t,
      configuration: c
    }
  );
}
const Tv = {
  Standard: (t) => ii({ kind: "standard", ...t }),
  ButtonGroup: (t) => ii({ kind: "button-group", ...t }),
  CardSelection: (t) => ii({ kind: "card-selection", ...t }),
  ToggleSwitch: (t) => ii({ kind: "toggle-switch", ...t }),
  Image: (t) => ii({ kind: "image-radio", ...t }),
  ColorPicker: (t) => ii({ kind: "color-picker", ...t }),
  SizeSelector: (t) => ii({ kind: "size-selector", ...t }),
  PlanSelector: (t) => ii({ kind: "plan-selector", ...t }),
  Preference: (t) => ii({ kind: "preference", ...t }),
  Custom: (t) => ii({ kind: "custom", ...t })
};
rn.Presets = Tv;
rn.createRadio = ii;
const js = {
  toggle: {
    variant: "toggle",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !1,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "full",
    animationDuration: 200
  },
  "checkbox-switch": {
    variant: "checkbox",
    size: "medium",
    state: "default",
    style: "outlined",
    showLabels: !0,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "small",
    animationDuration: 150
  },
  "button-switch": {
    variant: "button",
    size: "medium",
    state: "default",
    style: "filled",
    showLabels: !0,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "medium",
    animationDuration: 150
  },
  "slider-switch": {
    variant: "slider",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !1,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "full",
    animationDuration: 250
  },
  "dark-mode-toggle": {
    variant: "toggle",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !1,
    showIcons: !0,
    animated: !0,
    required: !1,
    borderRadius: "full",
    animationDuration: 300
  },
  "notification-toggle": {
    variant: "toggle",
    size: "small",
    state: "default",
    style: "minimal",
    showLabels: !0,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "full",
    animationDuration: 200
  },
  "privacy-switch": {
    variant: "toggle",
    size: "medium",
    state: "default",
    style: "outlined",
    showLabels: !0,
    showIcons: !0,
    animated: !0,
    required: !1,
    borderRadius: "full",
    animationDuration: 200
  },
  "feature-toggle": {
    variant: "button",
    size: "small",
    state: "default",
    style: "outlined",
    showLabels: !0,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "medium",
    animationDuration: 150
  },
  "power-switch": {
    variant: "toggle",
    size: "large",
    state: "default",
    style: "filled",
    showLabels: !1,
    showIcons: !0,
    animated: !0,
    required: !1,
    borderRadius: "full",
    animationDuration: 250
  },
  custom: {
    variant: "custom",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !0,
    showIcons: !1,
    animated: !0,
    required: !1,
    borderRadius: "medium",
    animationDuration: 200
  }
}, Pv = "_switchContainer_10f5r_123", Nv = "_disabled_10f5r_128", Ev = "_fieldLabel_10f5r_133", Iv = "_requiredMark_10f5r_137", Lv = "_switchWrapper_10f5r_142", Av = "_switchInput_10f5r_148", Mv = "_switchLabel_10f5r_156", Ov = "_switchTrack_10f5r_163", Rv = "_checked_10f5r_172", Dv = "_switchThumb_10f5r_177", Bv = "_switchLabels_10f5r_192", $v = "_helpText_10f5r_196", Fv = "_errorText_10f5r_200", ht = {
  switchContainer: Pv,
  disabled: Nv,
  fieldLabel: Ev,
  requiredMark: Iv,
  switchWrapper: Lv,
  switchInput: Av,
  switchLabel: Mv,
  switchTrack: Ov,
  checked: Rv,
  switchThumb: Dv,
  switchLabels: Bv,
  helpText: $v,
  errorText: Fv,
  "size-small": "_size-small_10f5r_204",
  "size-large": "_size-large_10f5r_218",
  "loading-shimmer": "_loading-shimmer_10f5r_1"
}, Ol = Le(
  ({
    kind: t = "toggle",
    // default kind
    configuration: n,
    checked: a,
    defaultChecked: r,
    onChange: c,
    label: d,
    onLabel: u,
    offLabel: h,
    helpText: p,
    error: g,
    className: y,
    disabled: v,
    required: z,
    name: k,
    id: N,
    componentId: P,
    ...$
  }, F) => {
    var j;
    const H = P || `switch-${Date.now()}`, A = ya(), R = Xt((V) => {
      const Q = V.ui;
      return of(H)({
        ui: Q
      });
    }), T = a !== void 0, E = T ? a : (R == null ? void 0 : R.checked) ?? r ?? !1;
    Te(() => (A(
      so({
        switchId: H,
        checked: r ?? a ?? !1,
        disabled: v ?? !1
      })
    ), () => {
      A(Gi(H));
    }), [
      A,
      H,
      r,
      a,
      v
    ]), Te(() => {
      T && a !== void 0 && A(
        so({
          switchId: H,
          checked: a,
          disabled: v ?? !1
        })
      );
    }, [
      a,
      T,
      A,
      H,
      v
    ]);
    const J = Ze(() => {
      if (v) return;
      const V = !E;
      T || A(
        so({
          switchId: H,
          checked: V,
          disabled: v ?? !1
        })
      ), c == null || c(V);
    }, [
      v,
      E,
      T,
      A,
      H,
      c
    ]), B = {
      ...js[t] || js.toggle,
      ...n || {}
    };
    v && (B.state = "disabled"), g && (B.state = "error"), z && (B.required = !0);
    const M = Hi(
      ht.switchContainer,
      ht[`variant-${B.variant}`],
      ht[`size-${B.size}`],
      ht[`style-${B.style}`],
      ht[`radius-${B.borderRadius}`],
      {
        [ht.checked]: E,
        [ht.disabled]: v || B.state === "disabled",
        [ht.error]: g || B.state === "error",
        [ht.animated]: B.animated
      },
      (j = B.customStyles) == null ? void 0 : j.container,
      y
    );
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: F,
        className: M,
        ...$,
        children: [
          d && /* @__PURE__ */ l.jsxs(f, { className: ht.fieldLabel, children: [
            d,
            (z || B.required) && /* @__PURE__ */ l.jsx("span", { className: ht.requiredMark, children: "*" })
          ] }),
          /* @__PURE__ */ l.jsxs(f, { className: ht.switchWrapper, children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "checkbox",
                id: N,
                name: k,
                checked: E,
                onChange: J,
                disabled: v,
                className: ht.switchInput,
                style: {
                  animationDuration: `${B.animationDuration}ms`
                }
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "label",
              {
                htmlFor: N,
                className: ht.switchLabel,
                children: [
                  /* @__PURE__ */ l.jsx(f, { className: ht.switchTrack, children: /* @__PURE__ */ l.jsx(f, { className: ht.switchThumb }) }),
                  B.showLabels && (u || h) && /* @__PURE__ */ l.jsx(f, { className: ht.switchLabels, children: E ? u : h })
                ]
              }
            )
          ] }),
          p && !g && /* @__PURE__ */ l.jsx(f, { className: ht.helpText, children: p }),
          g && /* @__PURE__ */ l.jsx(f, { className: ht.errorText, children: g })
        ]
      }
    );
  }
);
Ol.displayName = "Switch";
const Fo = {
  range: {
    variant: "default",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !0,
    showTicks: !1,
    showTooltip: !1,
    showValue: !0,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !1
  },
  slider: {
    variant: "primary",
    size: "medium",
    state: "default",
    style: "modern",
    showLabels: !0,
    showTicks: !1,
    showTooltip: !0,
    showValue: !0,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !1
  },
  "dual-range": {
    variant: "primary",
    size: "medium",
    state: "default",
    style: "modern",
    showLabels: !0,
    showTicks: !1,
    showTooltip: !0,
    showValue: !0,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !0
  },
  "stepped-range": {
    variant: "secondary",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !0,
    showTicks: !0,
    showTooltip: !1,
    showValue: !0,
    orientation: "horizontal",
    step: 10,
    min: 0,
    max: 100,
    marks: !0,
    range: !1
  },
  "color-picker": {
    variant: "custom",
    size: "medium",
    state: "default",
    style: "flat",
    showLabels: !1,
    showTicks: !1,
    showTooltip: !0,
    showValue: !1,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 360,
    marks: !1,
    range: !1
  },
  "volume-control": {
    variant: "primary",
    size: "small",
    state: "default",
    style: "minimal",
    showLabels: !1,
    showTicks: !1,
    showTooltip: !0,
    showValue: !1,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !1
  },
  "brightness-control": {
    variant: "secondary",
    size: "small",
    state: "default",
    style: "minimal",
    showLabels: !1,
    showTicks: !1,
    showTooltip: !0,
    showValue: !1,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !1
  },
  "progress-slider": {
    variant: "success",
    size: "medium",
    state: "default",
    style: "rounded",
    showLabels: !0,
    showTicks: !1,
    showTooltip: !1,
    showValue: !0,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !1
  },
  "temperature-control": {
    variant: "warning",
    size: "medium",
    state: "default",
    style: "rounded",
    showLabels: !0,
    showTicks: !0,
    showTooltip: !0,
    showValue: !0,
    orientation: "horizontal",
    step: 1,
    min: -10,
    max: 40,
    marks: !0,
    range: !1
  },
  custom: {
    variant: "custom",
    size: "medium",
    state: "default",
    style: "default",
    showLabels: !0,
    showTicks: !1,
    showTooltip: !1,
    showValue: !0,
    orientation: "horizontal",
    step: 1,
    min: 0,
    max: 100,
    marks: !1,
    range: !1
  }
}, xa = Le(
  ({
    variant: t = "default",
    size: n = "medium",
    style: a = "default",
    configuration: r,
    componentId: c = `range-${Date.now()}-${Math.random()}`,
    value: d,
    defaultValue: u,
    onChange: h,
    onChangeComplete: p,
    label: g,
    helpText: y,
    error: v,
    className: z = "",
    disabled: k = !1,
    readOnly: N = !1,
    required: P = !1,
    min: $,
    max: F,
    step: H,
    marks: A,
    name: R,
    id: T,
    "aria-label": E,
    "aria-describedby": J,
    ...G
  }, B) => {
    const M = vi(), j = It(
      _f(c)
    ), Q = {
      ...Fo.range,
      variant: t,
      size: n,
      style: a,
      ...r
    }, le = d ?? u ?? (Q.range ? [Q.min, Q.max / 2] : Q.min), ae = (j == null ? void 0 : j.value) ?? le, te = (j == null ? void 0 : j.isDragging) || !1, ce = (j == null ? void 0 : j.showTooltip) || !1;
    Te(() => (j || M(
      Sn({
        rangeId: c,
        updates: {
          value: le,
          isDragging: !1,
          showTooltip: !1
        }
      })
    ), () => {
      M(Gi(c));
    }), [M, c, j, le]);
    const w = d ?? ae, q = $ ?? Q.min, x = F ?? Q.max, O = H ?? Q.step, S = Ze(
      (be) => {
        M(
          Sn({
            rangeId: c,
            updates: { value: be }
          })
        ), h == null || h(be);
      },
      [h, M, c]
    ), Z = Ze(() => {
      M(
        Sn({
          rangeId: c,
          updates: { isDragging: !0 }
        })
      ), Q.showTooltip && M(
        Sn({
          rangeId: c,
          updates: { showTooltip: !0 }
        })
      );
    }, [Q.showTooltip, M, c]), ie = Ze(() => {
      M(
        Sn({
          rangeId: c,
          updates: {
            isDragging: !1,
            showTooltip: !1
          }
        })
      ), p == null || p(w);
    }, [
      p,
      w,
      M,
      c
    ]), X = (be) => {
      if (k || N) return;
      const ee = parseFloat(be.target.value);
      S(ee);
    }, K = () => {
      if (Q.range && Array.isArray(w)) {
        const [be, ee] = w, ne = (be - q) / (x - q) * 100, ue = (ee - q) / (x - q) * 100;
        return {
          background: `linear-gradient(to right, 
						var(--range-track-color) ${ne}%, 
						var(--range-active-color) ${ne}%, 
						var(--range-active-color) ${ue}%, 
						var(--range-track-color) ${ue}%)`
        };
      } else {
        const be = (Number(w) - q) / (x - q) * 100;
        return {
          background: `linear-gradient(to right, 
						var(--range-active-color) ${be}%, 
						var(--range-track-color) ${be}%)`
        };
      }
    }, pe = () => {
      if (!Q.marks && !A) return null;
      const be = A === !0 ? Array.from(
        {
          length: Math.floor(
            (x - q) / O
          ) + 1
        },
        (ee, ne) => q + ne * O
      ) : typeof A == "object" ? Object.keys(A).map(Number) : [];
      return /* @__PURE__ */ l.jsx(f, { className: "range-marks", children: be.map((ee) => {
        const ne = (ee - q) / (x - q) * 100, ue = typeof A == "object" ? A[ee] : ee.toString();
        return /* @__PURE__ */ l.jsxs(
          f,
          {
            className: "range-mark",
            style: { left: `${ne}%` },
            children: [
              /* @__PURE__ */ l.jsx(f, { className: "range-mark-dot" }),
              Q.showLabels && /* @__PURE__ */ l.jsx(f, { className: "range-mark-label", children: ue })
            ]
          },
          ee
        );
      }) });
    }, de = () => {
      if (!Q.showTooltip && !ce)
        return null;
      const be = Array.isArray(w) ? (w[1] - q) / (x - q) * 100 : (Number(w) - q) / (x - q) * 100;
      return /* @__PURE__ */ l.jsx(
        f,
        {
          className: "range-tooltip",
          style: { left: `${be}%` },
          children: Array.isArray(w) ? `${w[0]} - ${w[1]}` : w
        }
      );
    }, Pe = [
      "range-container",
      `range-${Q.variant}`,
      `range-${Q.size}`,
      `range-${Q.style}`,
      `range-${Q.orientation}`,
      Q.state !== "default" && `range-${Q.state}`,
      k && "range-disabled",
      N && "range-readonly",
      te && "range-dragging",
      v && "range-error",
      z
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l.jsxs(f, { className: Pe, children: [
      g && /* @__PURE__ */ l.jsxs("label", { htmlFor: T, className: "range-label", children: [
        g,
        P && /* @__PURE__ */ l.jsx("span", { className: "range-required", children: "*" })
      ] }),
      /* @__PURE__ */ l.jsxs(f, { className: "range-wrapper", children: [
        /* @__PURE__ */ l.jsxs(
          f,
          {
            className: "range-track",
            style: K(),
            children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  ref: B,
                  type: "range",
                  className: "range-input",
                  value: Array.isArray(w) ? w[0] : w,
                  onChange: X,
                  onMouseDown: Z,
                  onMouseUp: ie,
                  min: q,
                  max: x,
                  step: O,
                  disabled: k,
                  readOnly: N,
                  required: P,
                  name: R,
                  id: T,
                  "aria-label": E || g,
                  "aria-describedby": J,
                  ...G
                }
              ),
              Q.range && Array.isArray(w) && /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "range",
                  className: "range-input range-input-high",
                  value: w[1],
                  onChange: (be) => {
                    const ee = parseFloat(
                      be.target.value
                    );
                    S([
                      w[0],
                      ee
                    ]);
                  },
                  onMouseDown: Z,
                  onMouseUp: ie,
                  min: q,
                  max: x,
                  step: O,
                  disabled: k,
                  readOnly: N
                }
              )
            ]
          }
        ),
        pe(),
        de(),
        Q.showValue && /* @__PURE__ */ l.jsx(f, { className: "range-value", children: Array.isArray(w) ? `${w[0]} - ${w[1]}` : w })
      ] }),
      y && !v && /* @__PURE__ */ l.jsx(f, { className: "range-help-text", children: y }),
      v && /* @__PURE__ */ l.jsx(f, { className: "range-error-text", children: v })
    ] });
  }
);
xa.displayName = "Range";
function Hv({
  kind: t,
  configuration: n,
  ...a
}) {
  const c = {
    ...Fo[t] || Fo.range,
    ...n
  };
  return /* @__PURE__ */ l.jsx(xa, { ...a, configuration: c });
}
xa.createRange = Hv;
const Rl = Le(
  ({ kind: t, configuration: n, value: a, onChange: r, ...c }, d) => {
    switch (t) {
      case "input":
      default:
        return /* @__PURE__ */ l.jsx(
          Il,
          {
            ref: d,
            value: a ?? "",
            onChange: r,
            ...c,
            kind: (n == null ? void 0 : n.inputMode) || "text"
          }
        );
      case "textarea":
        return /* @__PURE__ */ l.jsx(
          Ll,
          {
            ref: d,
            value: a ?? "",
            onChange: r,
            ...c
          }
        );
      case "select":
        return /* @__PURE__ */ l.jsx(
          Ml,
          {
            ref: d,
            value: a ?? "",
            onChange: r,
            ...c,
            kind: (n == null ? void 0 : n.kind) || "dropdown",
            options: c.options || (n == null ? void 0 : n.options) || []
          }
        );
      case "checkbox":
        return /* @__PURE__ */ l.jsx(
          Vo,
          {
            ref: d,
            checked: !!a,
            onChange: r,
            ...c,
            label: c.label || (n == null ? void 0 : n.label)
          }
        );
      case "radio":
        return /* @__PURE__ */ l.jsx(
          rn,
          {
            ref: d,
            value: a ?? "",
            onChange: r,
            ...c,
            options: c.options || (n == null ? void 0 : n.options) || [],
            name: c.name,
            configuration: c.configuration
          }
        );
      case "radio-group":
        return /* @__PURE__ */ l.jsx(
          rn,
          {
            ref: d,
            value: a ?? "",
            onChange: r,
            ...c,
            options: c.options || (n == null ? void 0 : n.options) || [],
            name: c.name,
            configuration: c.configuration
          }
        );
      case "switch":
        return /* @__PURE__ */ l.jsx(
          Ol,
          {
            ref: d,
            checked: !!a,
            onChange: r,
            ...c,
            label: c.label || (n == null ? void 0 : n.label)
          }
        );
      case "range":
        return /* @__PURE__ */ l.jsx(
          xa,
          {
            ref: d,
            value: a ?? 0,
            onChange: r,
            ...c,
            min: c.min ?? (n == null ? void 0 : n.min) ?? 0,
            max: c.max ?? (n == null ? void 0 : n.max) ?? 100,
            step: c.step ?? (n == null ? void 0 : n.step) ?? 1
          }
        );
    }
  }
);
Rl.displayName = "FormsBody";
const Uv = Le(
  ({
    fields: t,
    values: n = {},
    onChange: a,
    onSubmit: r,
    error: c,
    helperText: d,
    fullWidth: u,
    className: h,
    ...p
  }, g) => {
    const [y, v] = jt(n), z = (N, P) => {
      const $ = { ...y, [N]: P };
      v($), a == null || a($);
    }, k = (N) => {
      N.preventDefault(), r == null || r(y);
    };
    return /* @__PURE__ */ l.jsxs(
      "form",
      {
        ref: g,
        className: h,
        onSubmit: k,
        children: [
          t.map((N) => /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: fi.fieldWrapper,
              children: [
                N.label && /* @__PURE__ */ l.jsxs(
                  "label",
                  {
                    className: fi.label,
                    htmlFor: N.name,
                    children: [
                      N.label,
                      N.required && /* @__PURE__ */ l.jsx("span", { className: fi.required, children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: fi.fieldContainer, children: /* @__PURE__ */ l.jsx(
                  Rl,
                  {
                    ...N,
                    value: y[N.name] ?? "",
                    onChange: (P) => z(N.name, P)
                  }
                ) }),
                N.error && /* @__PURE__ */ l.jsx("span", { className: fi.errorText, children: N.error }),
                N.helperText && !N.error && /* @__PURE__ */ l.jsx("span", { className: fi.helperText, children: N.helperText })
              ]
            },
            N.name
          )),
          c && /* @__PURE__ */ l.jsx("div", { className: fi.errorText, children: c }),
          d && !c && /* @__PURE__ */ l.jsx("div", { className: fi.helperText, children: d }),
          /* @__PURE__ */ l.jsx(
            "button",
            {
              type: "submit",
              className: fi.form__submit,
              children: "Submit"
            }
          )
        ]
      }
    );
  }
);
Uv.displayName = "Forms";
const Zv = {
  // Basic component types (used by stories)
  input: {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  textarea: {
    component: "textarea",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  select: {
    component: "select",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  checkbox: {
    component: "checkbox",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  radio: {
    component: "radio",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  "radio-group": {
    component: "radio-group",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  switch: {
    component: "switch",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  range: {
    component: "range",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  // Extended input types
  "email-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "email",
    inputMode: "email",
    autoComplete: "email"
  },
  "password-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "password",
    autoComplete: "current-password"
  },
  "search-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "search",
    inputMode: "search",
    placeholder: "Search..."
  },
  "number-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    inputMode: "numeric"
  },
  "tel-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    inputMode: "tel",
    autoComplete: "tel"
  },
  "url-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    inputMode: "url",
    autoComplete: "url"
  },
  "date-input": {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  "time-input": {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  "datetime-local-input": {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  "username-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Username",
    placeholder: "Enter username",
    autoComplete: "username"
  },
  "first-name-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "First Name",
    placeholder: "Enter first name",
    autoComplete: "given-name"
  },
  "last-name-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Last Name",
    placeholder: "Enter last name",
    autoComplete: "family-name"
  },
  "verification-code-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Verification Code",
    placeholder: "Enter code",
    inputMode: "numeric"
  },
  "credit-card-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Card Number",
    placeholder: "1234 5678 9012 3456",
    autoComplete: "cc-number"
  },
  "cvv-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "CVV",
    placeholder: "123",
    autoComplete: "cc-csc"
  },
  "zip-code-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "ZIP Code",
    placeholder: "12345",
    autoComplete: "postal-code"
  },
  "address-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Address",
    placeholder: "Enter address",
    autoComplete: "street-address"
  },
  "city-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "City",
    placeholder: "Enter city",
    autoComplete: "address-level2"
  },
  "state-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "State",
    placeholder: "Enter state",
    autoComplete: "address-level1"
  },
  "country-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Country",
    placeholder: "Enter country",
    autoComplete: "country"
  },
  "company-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Company",
    placeholder: "Enter company",
    autoComplete: "organization"
  },
  "job-title-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Job Title",
    placeholder: "Enter job title",
    autoComplete: "organization-title"
  },
  "website-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Website",
    placeholder: "https://example.com",
    inputMode: "url",
    autoComplete: "url"
  },
  "social-handle-input": {
    component: "input",
    variant: "outlined",
    size: "medium",
    label: "Social Handle",
    placeholder: "@username"
  },
  // Extended checkbox types
  "terms-checkbox": {
    component: "checkbox",
    variant: "outlined",
    size: "medium",
    label: "I agree to the terms and conditions",
    validation: {
      required: !0
    }
  },
  "privacy-checkbox": {
    component: "checkbox",
    variant: "outlined",
    size: "medium",
    label: "I agree to the privacy policy",
    validation: {
      required: !0
    }
  },
  "newsletter-checkbox": {
    component: "checkbox",
    variant: "outlined",
    size: "medium",
    label: "Subscribe to newsletter"
  },
  "consent-checkbox": {
    component: "checkbox",
    variant: "outlined",
    size: "medium",
    label: "I give my consent",
    validation: {
      required: !0
    }
  },
  // Extended radio types
  "gender-radio": {
    component: "radio-group",
    variant: "outlined",
    size: "medium",
    label: "Gender"
  },
  "subscription-radio": {
    component: "radio-group",
    variant: "outlined",
    size: "medium",
    label: "Subscription Plan"
  },
  "payment-radio": {
    component: "radio-group",
    variant: "outlined",
    size: "medium",
    label: "Payment Method"
  },
  // Extended switch types
  "notification-switch": {
    component: "switch",
    variant: "outlined",
    size: "medium",
    label: "Enable notifications"
  },
  "privacy-switch": {
    component: "switch",
    variant: "outlined",
    size: "medium",
    label: "Privacy mode"
  },
  "theme-switch": {
    component: "switch",
    variant: "outlined",
    size: "medium",
    label: "Dark theme"
  },
  "marketing-switch": {
    component: "switch",
    variant: "outlined",
    size: "medium",
    label: "Marketing emails"
  },
  // Extended range types
  "volume-range": {
    component: "range",
    variant: "outlined",
    size: "medium",
    label: "Volume"
  },
  "brightness-range": {
    component: "range",
    variant: "outlined",
    size: "medium",
    label: "Brightness"
  },
  "price-range": {
    component: "range",
    variant: "outlined",
    size: "medium",
    label: "Price Range"
  },
  "age-range": {
    component: "range",
    variant: "outlined",
    size: "medium",
    label: "Age"
  },
  // Extended select types
  "country-select": {
    component: "select",
    variant: "outlined",
    size: "medium",
    label: "Country"
  },
  "language-select": {
    component: "select",
    variant: "outlined",
    size: "medium",
    label: "Language"
  },
  "timezone-select": {
    component: "select",
    variant: "outlined",
    size: "medium",
    label: "Timezone"
  },
  "currency-select": {
    component: "select",
    variant: "outlined",
    size: "medium",
    label: "Currency"
  },
  // Extended textarea types
  comment: {
    component: "textarea",
    variant: "outlined",
    size: "medium",
    label: "Comment",
    placeholder: "Enter your comment...",
    helperText: "Share your thoughts"
  },
  description: {
    component: "textarea",
    variant: "outlined",
    size: "large",
    label: "Description",
    placeholder: "Enter description..."
  },
  message: {
    component: "textarea",
    variant: "outlined",
    size: "medium",
    label: "Message",
    placeholder: "Type your message..."
  },
  bio: {
    component: "textarea",
    variant: "outlined",
    size: "large",
    label: "Bio",
    placeholder: "Tell us about yourself..."
  },
  feedback: {
    component: "textarea",
    variant: "outlined",
    size: "medium",
    label: "Feedback",
    placeholder: "Your feedback..."
  },
  // Legacy backward compatibility
  text: {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  },
  email: {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "email",
    inputMode: "email",
    autoComplete: "email"
  },
  password: {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "password",
    autoComplete: "current-password"
  },
  search: {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "search",
    inputMode: "search",
    placeholder: "Search..."
  },
  tel: {
    component: "input",
    variant: "outlined",
    size: "medium",
    inputMode: "tel",
    autoComplete: "tel"
  },
  url: {
    component: "input",
    variant: "outlined",
    size: "medium",
    inputMode: "url",
    autoComplete: "url"
  },
  number: {
    component: "input",
    variant: "outlined",
    size: "medium",
    inputMode: "numeric"
  },
  date: {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  time: {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  "datetime-local": {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  file: {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  hidden: {
    component: "input",
    variant: "outlined",
    size: "medium"
  },
  custom: {
    component: "input",
    variant: "outlined",
    size: "medium",
    behavior: "standard"
  }
}, G8 = {
  basic: [
    "input",
    "textarea",
    "select",
    "checkbox",
    "radio",
    "radio-group",
    "switch",
    "range"
  ],
  inputs: [
    "input",
    "email-input",
    "password-input",
    "search-input",
    "number-input",
    "tel-input",
    "url-input",
    "date-input",
    "time-input",
    "datetime-local-input"
  ],
  personal: [
    "username-input",
    "first-name-input",
    "last-name-input",
    "email-input",
    "tel-input",
    "address-input",
    "city-input",
    "state-input",
    "country-input"
  ],
  business: [
    "company-input",
    "job-title-input",
    "website-input",
    "social-handle-input"
  ],
  payment: [
    "credit-card-input",
    "cvv-input",
    "zip-code-input"
  ],
  checkboxes: [
    "checkbox",
    "terms-checkbox",
    "privacy-checkbox",
    "newsletter-checkbox",
    "consent-checkbox"
  ],
  switches: [
    "switch",
    "notification-switch",
    "privacy-switch",
    "theme-switch",
    "marketing-switch"
  ],
  ranges: [
    "range",
    "volume-range",
    "brightness-range",
    "price-range",
    "age-range"
  ],
  selects: [
    "select",
    "country-select",
    "language-select",
    "timezone-select",
    "currency-select"
  ],
  textareas: [
    "textarea",
    "comment",
    "description",
    "message",
    "bio",
    "feedback"
  ]
}, q8 = {
  loginForm: ["email-input", "password-input"],
  registrationForm: [
    "first-name-input",
    "last-name-input",
    "email-input",
    "password-input",
    "terms-checkbox"
  ],
  profileForm: [
    "first-name-input",
    "last-name-input",
    "email-input",
    "tel-input",
    "bio"
  ],
  addressForm: [
    "address-input",
    "city-input",
    "state-input",
    "zip-code-input",
    "country-select"
  ],
  paymentForm: [
    "credit-card-input",
    "cvv-input",
    "zip-code-input"
  ],
  settingsForm: [
    "notification-switch",
    "privacy-switch",
    "theme-switch",
    "marketing-switch"
  ]
}, K8 = (t, n) => {
  const a = Zv[t];
  if (!a)
    throw new Error(`Unknown form field kind: ${t}`);
  return {
    ...a,
    ...n,
    validation: {
      ...a.validation,
      ...n.validation
    }
  };
}, Y8 = (t, n) => {
  const { validation: a } = n;
  if (!a) return null;
  if (a.required && (!t || typeof t == "string" && t.trim() === ""))
    return "This field is required";
  if (typeof t == "string") {
    if (a.minLength && t.length < a.minLength)
      return `Minimum length is ${a.minLength} characters`;
    if (a.maxLength && t.length > a.maxLength)
      return `Maximum length is ${a.maxLength} characters`;
    if (a.pattern && !new RegExp(a.pattern).test(t))
      return "Invalid format";
  }
  if (typeof t == "number") {
    if (a.min !== void 0 && t < a.min)
      return `Minimum value is ${a.min}`;
    if (a.max !== void 0 && t > a.max)
      return `Maximum value is ${a.max}`;
  }
  return a.custom ? a.custom(t) : null;
}, Wv = "_header_4fxxo_117", Vv = "_headerInner_4fxxo_138", Gv = "_headerChildren_4fxxo_146", qv = "_borderBottom_4fxxo_211", Kv = "_sticky_4fxxo_215", Yv = "_collapsible_4fxxo_222", Jv = "_collapsed_4fxxo_226", Xv = "_titleContent_4fxxo_226", Qv = "_tabs_4fxxo_227", ew = "_responsive_4fxxo_233", tw = "_rightSection_4fxxo_240", iw = "_content_4fxxo_245", nw = "_contentCentered_4fxxo_254", aw = "_leftSection_4fxxo_259", ow = "_titleSection_4fxxo_275", rw = "_titleIcon_4fxxo_285", sw = "_title_4fxxo_226", lw = "_subtitle_4fxxo_346", cw = "_actions_4fxxo_360", _w = "_actionButton_4fxxo_376", dw = "_collapseButton_4fxxo_380", uw = "_tab_4fxxo_227", mw = "_tabActive_4fxxo_471", hw = "_tabIcon_4fxxo_482", pw = "_tabLabel_4fxxo_488", fw = "_tabBadge_4fxxo_494", gw = "_browseHeader_4fxxo_514", bw = "_browseTabbedHeader_4fxxo_514", yw = "_dashboardHeader_4fxxo_525", xw = "_dashboardSimpleHeader_4fxxo_535", vw = "_modalHeader_4fxxo_539", ww = "_modalCloseOnlyHeader_4fxxo_549", kw = "_pageHeader_4fxxo_554", Sw = "_pageWithNavHeader_4fxxo_558", Cw = "_sidebarHeader_4fxxo_571", jw = "_navigationHeader_4fxxo_581", zw = "_simpleHeader_4fxxo_595", Tw = "_simpleCenteredHeader_4fxxo_595", Pw = "_gameHeader_4fxxo_603", Nw = "_settingsHeader_4fxxo_607", Ew = "_profileHeader_4fxxo_616", Iw = "_headerSlot_4fxxo_719", me = {
  header: Wv,
  headerInner: Vv,
  headerChildren: Gv,
  "layout-left-aligned": "_layout-left-aligned_4fxxo_152",
  "layout-center-aligned": "_layout-center-aligned_4fxxo_159",
  "layout-space-between": "_layout-space-between_4fxxo_166",
  "layout-custom": "_layout-custom_4fxxo_173",
  "padding-none": "_padding-none_4fxxo_177",
  "padding-small": "_padding-small_4fxxo_181",
  "padding-medium": "_padding-medium_4fxxo_185",
  "padding-large": "_padding-large_4fxxo_189",
  "bg-transparent": "_bg-transparent_4fxxo_193",
  "bg-primary": "_bg-primary_4fxxo_197",
  "bg-secondary": "_bg-secondary_4fxxo_202",
  "bg-custom": "_bg-custom_4fxxo_207",
  borderBottom: qv,
  sticky: Kv,
  collapsible: Yv,
  collapsed: Jv,
  titleContent: Xv,
  tabs: Qv,
  responsive: ew,
  rightSection: tw,
  content: iw,
  contentCentered: nw,
  leftSection: aw,
  titleSection: ow,
  titleIcon: rw,
  title: sw,
  "title-small": "_title-small_4fxxo_310",
  "title-medium": "_title-medium_4fxxo_316",
  "title-large": "_title-large_4fxxo_322",
  "title-xlarge": "_title-xlarge_4fxxo_328",
  "title-normal": "_title-normal_4fxxo_334",
  "title-bold": "_title-bold_4fxxo_342",
  subtitle: lw,
  actions: cw,
  "actions-left": "_actions-left_4fxxo_368",
  "actions-right": "_actions-right_4fxxo_372",
  actionButton: _w,
  collapseButton: dw,
  "tabs-below-title": "_tabs-below-title_4fxxo_400",
  "tabs-beside-title": "_tabs-beside-title_4fxxo_405",
  "tabs-separate-row": "_tabs-separate-row_4fxxo_409",
  "tabs-align-left": "_tabs-align-left_4fxxo_416",
  "tabs-align-center": "_tabs-align-center_4fxxo_420",
  "tabs-align-right": "_tabs-align-right_4fxxo_424",
  tab: uw,
  tabActive: mw,
  tabIcon: hw,
  tabLabel: pw,
  tabBadge: fw,
  browseHeader: gw,
  browseTabbedHeader: bw,
  dashboardHeader: yw,
  dashboardSimpleHeader: xw,
  modalHeader: vw,
  modalCloseOnlyHeader: ww,
  pageHeader: kw,
  pageWithNavHeader: Sw,
  sidebarHeader: Cw,
  navigationHeader: jw,
  simpleHeader: zw,
  simpleCenteredHeader: Tw,
  gameHeader: Pw,
  settingsHeader: Nw,
  profileHeader: Ew,
  "layout-horizontal": "_layout-horizontal_4fxxo_625",
  "layout-vertical": "_layout-vertical_4fxxo_642",
  "layout-split": "_layout-split_4fxxo_655",
  "layout-stacked": "_layout-stacked_4fxxo_678",
  "layout-bottom": "_layout-bottom_4fxxo_697",
  headerSlot: Iw,
  "headerSlot-logo": "_headerSlot-logo_4fxxo_726",
  "headerSlot-nav": "_headerSlot-nav_4fxxo_733",
  "headerSlot-navLeft": "_headerSlot-navLeft_4fxxo_734",
  "headerSlot-navRight": "_headerSlot-navRight_4fxxo_735",
  "headerSlot-bottomNav": "_headerSlot-bottomNav_4fxxo_736",
  "headerSlot-search": "_headerSlot-search_4fxxo_741",
  "headerSlot-actionsRight": "_headerSlot-actionsRight_4fxxo_747",
  "headerSlot-actionsLeft": "_headerSlot-actionsLeft_4fxxo_748",
  "headerSlot-cta": "_headerSlot-cta_4fxxo_753",
  "headerSlot-notification": "_headerSlot-notification_4fxxo_757",
  "headerSlot-breadcrumbs": "_headerSlot-breadcrumbs_4fxxo_766",
  "headerSlot-social": "_headerSlot-social_4fxxo_772",
  "headerSlot-language": "_headerSlot-language_4fxxo_777",
  "headerSlot-currency": "_headerSlot-currency_4fxxo_778",
  "loading-shimmer": "_loading-shimmer_4fxxo_1"
}, Dl = {
  // Browse headers
  browse: {
    variant: "browse",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "large",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "left",
    className: me.browseHeader,
    padding: "medium",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  "browse-tabbed": {
    variant: "browse",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "large",
    titleWeight: "bold",
    showTabs: !0,
    tabsPosition: "below-title",
    tabsAlign: "left",
    showActions: !0,
    actionsPosition: "left",
    className: me.browseTabbedHeader,
    padding: "medium",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  // Dashboard headers
  dashboard: {
    variant: "dashboard",
    layout: "space-between",
    showTitle: !0,
    titleSize: "large",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "right",
    className: me.dashboardHeader,
    padding: "medium",
    borderBottom: !0,
    background: "transparent",
    sticky: !0,
    responsive: !0
  },
  "dashboard-simple": {
    variant: "dashboard",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !1,
    className: me.dashboardSimpleHeader,
    padding: "small",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  // Modal headers
  modal: {
    variant: "modal",
    layout: "space-between",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "right",
    className: me.modalHeader,
    padding: "medium",
    borderBottom: !0,
    background: "transparent",
    responsive: !1
  },
  "modal-close-only": {
    variant: "modal",
    layout: "space-between",
    showTitle: !1,
    showTabs: !1,
    showActions: !0,
    actionsPosition: "right",
    className: me.modalCloseOnlyHeader,
    padding: "small",
    borderBottom: !1,
    background: "transparent",
    responsive: !1
  },
  // Page headers
  page: {
    variant: "page",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "xlarge",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !1,
    className: me.pageHeader,
    padding: "large",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  "page-with-nav": {
    variant: "page",
    layout: "space-between",
    showTitle: !0,
    titleSize: "large",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "both",
    className: me.pageWithNavHeader,
    padding: "medium",
    borderBottom: !0,
    background: "transparent",
    sticky: !0,
    responsive: !0
  },
  // Sidebar headers
  sidebar: {
    variant: "sidebar",
    layout: "space-between",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "right",
    className: me.sidebarHeader,
    padding: "medium",
    borderBottom: !0,
    background: "secondary",
    responsive: !1
  },
  // Navigation headers
  navigation: {
    variant: "navigation",
    layout: "space-between",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "bold",
    showTabs: !0,
    tabsPosition: "beside-title",
    tabsAlign: "center",
    showActions: !0,
    actionsPosition: "both",
    className: me.navigationHeader,
    padding: "medium",
    borderBottom: !0,
    background: "primary",
    sticky: !0,
    responsive: !0
  },
  // Simple headers
  simple: {
    variant: "simple",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "normal",
    showTabs: !1,
    showActions: !1,
    className: me.simpleHeader,
    padding: "small",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  "simple-centered": {
    variant: "simple",
    layout: "center-aligned",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "normal",
    showTabs: !1,
    showActions: !1,
    className: me.simpleCenteredHeader,
    padding: "small",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  // Specific use case headers
  "game-header": {
    variant: "custom",
    layout: "space-between",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "both",
    className: me.gameHeader,
    padding: "small",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  },
  "settings-header": {
    variant: "custom",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "large",
    titleWeight: "bold",
    showTabs: !0,
    tabsPosition: "below-title",
    tabsAlign: "left",
    showActions: !0,
    actionsPosition: "left",
    className: me.settingsHeader,
    padding: "medium",
    borderBottom: !0,
    background: "transparent",
    responsive: !0
  },
  "profile-header": {
    variant: "custom",
    layout: "space-between",
    showTitle: !0,
    titleSize: "large",
    titleWeight: "bold",
    showTabs: !1,
    showActions: !0,
    actionsPosition: "right",
    className: me.profileHeader,
    padding: "medium",
    borderBottom: !0,
    background: "transparent",
    responsive: !0
  },
  // Custom fallback
  custom: {
    variant: "custom",
    layout: "left-aligned",
    showTitle: !0,
    titleSize: "medium",
    titleWeight: "normal",
    showTabs: !1,
    showActions: !1,
    className: "",
    padding: "medium",
    borderBottom: !1,
    background: "transparent",
    responsive: !0
  }
}, J8 = {
  MODAL_HEADERS: {
    standard: {
      kind: "modal",
      props: {}
    },
    "close-only": {
      kind: "modal-close-only",
      props: {}
    }
  },
  BROWSE_HEADERS: {
    simple: {
      kind: "browse",
      props: {}
    },
    "with-tabs": {
      kind: "browse-tabbed",
      props: {}
    }
  },
  DASHBOARD_HEADERS: {
    full: {
      kind: "dashboard",
      props: {}
    },
    simple: {
      kind: "dashboard-simple",
      props: {}
    }
  }
}, X8 = {
  // Quick modal headers
  MODAL_WITH_TITLE: (t, n) => ({
    kind: "modal",
    title: t,
    actions: [{ type: "close", handler: n }]
  }),
  MODAL_CLOSE_ONLY: (t) => ({
    kind: "modal-close-only",
    actions: [{ type: "close", handler: t }]
  }),
  // Quick browse headers
  BROWSE_WITH_BACK: (t, n) => ({
    kind: "browse",
    title: t,
    actions: [{ type: "back", handler: n }]
  }),
  BROWSE_WITH_TABS: (t, n, a, r, c) => ({
    kind: "browse-tabbed",
    title: t,
    tabs: n,
    currentTab: a,
    onTabChange: r,
    actions: [{ type: "back", handler: c }]
  }),
  // Quick page headers
  PAGE_SIMPLE: (t) => ({
    kind: "page",
    title: t
  }),
  PAGE_WITH_BACK: (t, n) => ({
    kind: "page-with-nav",
    title: t,
    actions: [{ type: "back", handler: n }]
  })
};
function Q8(t, n = {}) {
  return {
    ...Dl[t],
    ...n
  };
}
function e5(t, n) {
  return [...t, ...n];
}
const Lw = "_sidebarOverlay_1b6n5_117", Aw = "_friendsSidebarOverlay_1b6n5_117", Mw = "_friendsSidebarOverlayModal_1b6n5_117", Ow = "_settingsSidebarOverlay_1b6n5_118", Rw = "_notificationsSidebarOverlay_1b6n5_119", Dw = "_baseSidebar_1b6n5_137", Bw = "_notificationsSidebar_1b6n5_119", $w = "_chatSidebar_1b6n5_137", Fw = "_settingsSidebar_1b6n5_118", Hw = "_friendsSidebar_1b6n5_117", Uw = "_friendsSidebarResponsive_1b6n5_137", Zw = "_friendsSidebarDesktop_1b6n5_137", Ww = "_friendsSidebarMobile_1b6n5_137", Vw = "_friendsSidebarNoAnimation_1b6n5_137", Gw = "_sidebarContent_1b6n5_172", qw = "_sidebarHeader_1b6n5_183", Kw = "_sidebarTitle_1b6n5_190", Yw = "_sidebarFooter_1b6n5_201", Jw = "_sidebarCloseButton_1b6n5_411", Xw = "_sidebarSection_1b6n5_440", Qw = "_sidebarSectionTitle_1b6n5_447", e0 = "_sidebarList_1b6n5_460", t0 = "_sidebarListItem_1b6n5_466", i0 = "_sidebarCloseBtn_1b6n5_537", n0 = "_sidebarCloseBtnLeft_1b6n5_537", Jt = {
  sidebarOverlay: Lw,
  friendsSidebarOverlay: Aw,
  friendsSidebarOverlayModal: Mw,
  settingsSidebarOverlay: Ow,
  notificationsSidebarOverlay: Rw,
  "overlay-visible": "_overlay-visible_1b6n5_130",
  baseSidebar: Dw,
  notificationsSidebar: Bw,
  chatSidebar: $w,
  settingsSidebar: Fw,
  friendsSidebar: Hw,
  friendsSidebarResponsive: Uw,
  friendsSidebarDesktop: Zw,
  friendsSidebarMobile: Ww,
  friendsSidebarNoAnimation: Vw,
  "sidebar-open": "_sidebar-open_1b6n5_154",
  "sidebar-left": "_sidebar-left_1b6n5_157",
  sidebarContent: Gw,
  sidebarHeader: qw,
  sidebarTitle: Kw,
  sidebarFooter: Yw,
  "sidebar-small": "_sidebar-small_1b6n5_209",
  "sidebar-medium": "_sidebar-medium_1b6n5_223",
  "sidebar-large": "_sidebar-large_1b6n5_237",
  "sidebar-compact": "_sidebar-compact_1b6n5_251",
  "sidebar-expanded": "_sidebar-expanded_1b6n5_260",
  "sidebar-full": "_sidebar-full_1b6n5_274",
  "sidebar-fade": "_sidebar-fade_1b6n5_323",
  "sidebar-scale": "_sidebar-scale_1b6n5_335",
  "sidebar-slide-up": "_sidebar-slide-up_1b6n5_349",
  "sidebar-modal": "_sidebar-modal_1b6n5_363",
  "sidebar-overlay": "_sidebar-overlay_1b6n5_367",
  "sidebar-push": "_sidebar-push_1b6n5_371",
  sidebarCloseButton: Jw,
  sidebarSection: Xw,
  sidebarSectionTitle: Qw,
  sidebarList: e0,
  sidebarListItem: t0,
  sidebarCloseBtn: i0,
  sidebarCloseBtnLeft: n0,
  "sidebar-focus-trap": "_sidebar-focus-trap_1b6n5_625",
  "sidebar-sr-only": "_sidebar-sr-only_1b6n5_630",
  "sidebar-fast": "_sidebar-fast_1b6n5_643",
  "sidebar-slow": "_sidebar-slow_1b6n5_647",
  "loading-shimmer": "_loading-shimmer_1b6n5_1"
}, a0 = Le(
  ({
    open: t,
    onClose: n,
    position: a = "left",
    size: r = "medium",
    variant: c = "permanent",
    header: d,
    footer: u,
    showCloseButton: h,
    closeButtonText: p = "Close sidebar",
    closeButtonIcon: g,
    closeOnOverlayClick: y = !0,
    closeOnEscape: v = !0,
    focusTrap: z = !0,
    returnFocus: k = !0,
    animationDuration: N = 250,
    disableAnimation: P = !1,
    ariaLabel: $,
    ariaLabelledBy: F,
    ariaDescribedBy: H,
    overlayClassName: A,
    headerClassName: R,
    contentClassName: T,
    footerClassName: E,
    closeButtonClassName: J,
    onOpen: G,
    onAnimationStart: B,
    onAnimationEnd: M,
    onOverlayClick: j,
    onEscapeKey: V,
    className: Q,
    style: le,
    children: ae,
    ...te
  }, ce) => {
    const w = nt(null), q = nt(null), x = nt(null), O = nt(!1), S = Ze(
      (he) => {
        he.key === "Escape" && t && v && (he.preventDefault(), V == null || V(), n == null || n());
      },
      [t, v, n, V]
    ), Z = Ze(
      (he) => {
        he.target === w.current && y && (j == null || j(), n == null || n());
      },
      [y, n, j]
    );
    Te(() => (t && z && (x.current = document.activeElement, setTimeout(() => {
      var W, U;
      const he = (W = q.current) == null ? void 0 : W.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      he ? he.focus() : (U = q.current) == null || U.focus();
    }, N || 0)), () => {
      !t && k && x.current && x.current.focus();
    }), [t, z, k, N]), Te(() => {
      if (t)
        return document.addEventListener(
          "keydown",
          S
        ), () => {
          document.removeEventListener(
            "keydown",
            S
          );
        };
    }, [t, S]), Te(() => {
      t && (G == null || G(), B == null || B(), !P && N ? (O.current = !0, setTimeout(() => {
        O.current = !1, M == null || M();
      }, N)) : M == null || M());
    }, [
      t,
      G,
      B,
      M,
      P,
      N
    ]), Te(() => {
      if (t && (c === "overlay" || c === "drawer" || c === "push" || c === "floating")) {
        const he = document.body.style.overflow;
        return document.body.style.overflow = "hidden", () => {
          document.body.style.overflow = he;
        };
      }
    }, [t, c]);
    const ie = [
      Jt.baseSidebar,
      Jt[`sidebar-${a}`],
      Jt[`sidebar-size-${r}`],
      Jt[`sidebar-variant-${c}`],
      t ? Jt["sidebar-open"] : "",
      P ? Jt["sidebar-no-animation"] : "",
      Q
    ].filter(Boolean).join(" "), X = [
      Jt.sidebarOverlay,
      A,
      t ? Jt["overlay-visible"] : ""
    ].filter(Boolean).join(" "), K = [
      Jt.sidebarHeader,
      R
    ].filter(Boolean).join(" "), pe = [
      Jt.sidebarContent,
      T
    ].filter(Boolean).join(" "), de = [
      Jt.sidebarFooter,
      E
    ].filter(Boolean).join(" "), Pe = [
      Jt.sidebarCloseBtn,
      J
    ].filter(Boolean).join(" "), be = {
      ...le,
      transitionDuration: P ? "0s" : `${N}ms`
    }, ee = {
      transitionDuration: P ? "0s" : `${N}ms`
    }, ne = typeof h == "boolean" ? h : c !== "permanent", ue = d !== void 0 ? /* @__PURE__ */ l.jsx("div", { className: K, children: d }) : null, re = ne ? /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: Pe,
        onClick: n,
        "aria-label": p,
        children: g || "×"
      }
    ) : null, ke = t && (c === "overlay" || c === "drawer" || c === "push" || c === "floating");
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      ke && /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: w,
          className: X,
          style: ee,
          onClick: Z,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: ce || q,
          className: ie,
          style: be,
          role: "complementary",
          "aria-label": $,
          "aria-labelledby": F,
          "aria-describedby": H,
          tabIndex: -1,
          ...te,
          children: [
            ue,
            re,
            /* @__PURE__ */ l.jsx("div", { className: pe, children: ae }),
            u && /* @__PURE__ */ l.jsx("div", { className: de, children: u })
          ]
        }
      )
    ] });
  }
), o0 = Le(
  ({
    kind: t = "custom",
    title: n,
    subtitle: a,
    icon: r,
    children: c,
    tabs: d = [],
    currentTab: u,
    onTabChange: h,
    actions: p = [],
    sticky: g = !1,
    collapsible: y = !1,
    isCollapsed: v = !1,
    onToggleCollapse: z,
    borderBottom: k,
    background: N,
    customBackgroundColor: P,
    className: $ = "",
    ariaLabel: F,
    role: H = "banner",
    // --- new flexible API ---
    layout: A,
    sections: R,
    position: T = "top",
    ...E
  }, J) => {
    const [G, B] = jt(!1);
    if (R) {
      const w = A ? me[`layout-${A}`] : "", q = T ? me[`position-${T}`] : "", x = Object.entries(R).map(
        ([S, Z]) => {
          var ie;
          return S.toLowerCase().includes("hamburger") || S === "actionsRight" && it.isValidElement(Z) && ((ie = Z.type) == null ? void 0 : ie.name) === "HamburgerMenu" ? /* @__PURE__ */ l.jsx(
            "div",
            {
              className: [
                me.headerSlot,
                me[`headerSlot-${S}`] || ""
              ].filter(Boolean).join(" "),
              onClick: () => B(!0),
              style: { cursor: "pointer" },
              children: Z
            },
            S
          ) : /* @__PURE__ */ l.jsx(
            "div",
            {
              className: [
                me.headerSlot,
                me[`headerSlot-${S}`] || ""
              ].filter(Boolean).join(" "),
              children: Z
            },
            S
          );
        }
      ), O = /* @__PURE__ */ l.jsxs("div", { style: { padding: 24 }, children: [
        R.nav && /* @__PURE__ */ l.jsx("div", { style: { marginBottom: 16 }, children: R.nav }),
        R.search && /* @__PURE__ */ l.jsx("div", { style: { marginBottom: 16 }, children: R.search }),
        R.actionsRight && /* @__PURE__ */ l.jsx("div", { children: R.actionsRight })
      ] });
      return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs(
          "header",
          {
            ...E,
            ref: J,
            className: [
              me.header,
              w,
              q,
              $,
              g ? me.sticky : "",
              N ? me[`bg-${N}`] : "",
              k ? me.borderBottom : ""
            ].filter(Boolean).join(" "),
            role: H,
            "aria-label": F || n,
            style: {
              ...E.style,
              ...P && {
                backgroundColor: P
              }
            },
            children: [
              /* @__PURE__ */ l.jsx(f, { className: me.headerInner, children: x }),
              c && /* @__PURE__ */ l.jsx(f, { className: me.headerChildren, children: c })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          a0,
          {
            kind: "navigation",
            open: G,
            onClose: () => B(!1),
            title: n || "Menu",
            header: null,
            hasOverlay: !0,
            showCloseButton: !0,
            role: "dialog",
            ariaLabel: "Mobile Navigation",
            children: O
          }
        )
      ] });
    }
    const M = Dl[t] || {}, j = p.filter(
      (w) => w.position === "left" || !w.position
    ), V = p.filter(
      (w) => w.position === "right"
    ), Q = [
      me.header,
      M.className || "",
      $,
      M.layout ? me[`layout-${M.layout}`] : "",
      M.padding ? me[`padding-${M.padding}`] : "",
      M.background ? me[`bg-${M.background}`] : "",
      k !== void 0 ? k ? me.borderBottom : "" : M.borderBottom ? me.borderBottom : "",
      g !== void 0 ? g ? me.sticky : "" : M.sticky ? me.sticky : "",
      y ? me.collapsible : "",
      v ? me.collapsed : "",
      M.responsive ? me.responsive : ""
    ].filter(Boolean).join(" "), le = (w, q) => w.length === 0 ? null : /* @__PURE__ */ l.jsx(
      f,
      {
        className: `${me.actions} ${me[`actions-${q}`]}`,
        children: w.map((x, O) => {
          let S;
          switch (x.type) {
            case "back":
              S = "go-back";
              break;
            case "close":
              S = "close";
              break;
            case "menu":
              S = "icon";
              break;
            default:
              S = "icon";
          }
          return /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: S,
              onClick: x.handler,
              className: x.className || "",
              "aria-label": x.label,
              icon: x.icon,
              children: x.label && x.type === "custom" ? x.label : void 0
            },
            O
          );
        })
      }
    ), ae = () => !M.showTabs || d.length === 0 ? null : /* @__PURE__ */ l.jsx(
      f,
      {
        className: `${me.tabs} ${me[`tabs-${M.tabsPosition}`]} ${me[`tabs-align-${M.tabsAlign}`]}`,
        children: d.map((w) => /* @__PURE__ */ l.jsxs(
          Ce,
          {
            kind: "ghost",
            onClick: () => h == null ? void 0 : h(w.value),
            className: `${me.tab} ${u === w.value ? me.tabActive : ""}`,
            disabled: w.disabled,
            "aria-selected": u === w.value,
            role: "tab",
            children: [
              w.icon && /* @__PURE__ */ l.jsx("span", { className: me.tabIcon, children: w.icon }),
              /* @__PURE__ */ l.jsx("span", { className: me.tabLabel, children: w.label }),
              w.badge && /* @__PURE__ */ l.jsx("span", { className: me.tabBadge, children: w.badge })
            ]
          },
          w.value
        ))
      }
    ), te = () => !M.showTitle && !n && !a ? null : /* @__PURE__ */ l.jsxs(f, { className: me.titleSection, children: [
      r && /* @__PURE__ */ l.jsx("span", { className: me.titleIcon, children: r }),
      /* @__PURE__ */ l.jsxs(f, { className: me.titleContent, children: [
        n && /* @__PURE__ */ l.jsx(
          "h1",
          {
            className: `${me.title} ${me[`title-${M.titleSize}`]} ${me[`title-${M.titleWeight}`]}`,
            children: n
          }
        ),
        a && /* @__PURE__ */ l.jsx("p", { className: me.subtitle, children: a })
      ] }),
      y && /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: "icon",
          onClick: z,
          className: me.collapseButton,
          "aria-label": v ? "Expand header" : "Collapse header",
          icon: v ? "▼" : "▲"
        }
      )
    ] }), ce = () => {
      switch (M.layout) {
        case "left-aligned":
        case "center-aligned":
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            le(j, "left"),
            /* @__PURE__ */ l.jsxs(
              f,
              {
                className: M.layout === "center-aligned" ? `${me.content} ${me.contentCentered}` : me.content,
                children: [
                  te(),
                  M.tabsPosition === "below-title" && ae()
                ]
              }
            ),
            le(V, "right")
          ] });
        case "space-between":
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs(f, { className: me.leftSection, children: [
              le(j, "left"),
              te()
            ] }),
            M.tabsPosition === "beside-title" && ae(),
            /* @__PURE__ */ l.jsx(f, { className: me.rightSection, children: le(V, "right") })
          ] });
        case "custom":
        default:
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            le(j, "left"),
            /* @__PURE__ */ l.jsxs(f, { className: me.content, children: [
              te(),
              M.tabsPosition === "below-title" && ae()
            ] }),
            le(V, "right")
          ] });
      }
    };
    return /* @__PURE__ */ l.jsxs(
      "header",
      {
        ...E,
        ref: J,
        className: Q,
        role: H,
        "aria-label": F || n,
        style: {
          ...E.style,
          ...P && {
            backgroundColor: P
          }
        },
        children: [
          /* @__PURE__ */ l.jsxs(f, { className: me.headerInner, children: [
            ce(),
            M.tabsPosition === "separate-row" && ae()
          ] }),
          c && /* @__PURE__ */ l.jsx(f, { className: me.headerChildren, children: c })
        ]
      }
    );
  }
);
o0.displayName = "Header";
function Bl(t, n) {
  const a = nt(n);
  Te(function() {
    n !== a.current && t.attributionControl != null && (a.current != null && t.attributionControl.removeAttribution(a.current), n != null && t.attributionControl.addAttribution(n)), a.current = n;
  }, [
    t,
    n
  ]);
}
const r0 = 1;
function s0(t) {
  return Object.freeze({
    __version: r0,
    map: t
  });
}
function $l(t, n) {
  return Object.freeze({
    ...t,
    ...n
  });
}
const qo = ma(null);
function In() {
  const t = r_(qo);
  if (t == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return t;
}
function Fl(t) {
  function n(a, r) {
    const { instance: c, context: d } = t(a).current;
    ha(r, () => c);
    const { children: u } = a;
    return u == null ? null : /* @__PURE__ */ it.createElement(qo, {
      value: d
    }, u);
  }
  return /* @__PURE__ */ Le(n);
}
function l0(t) {
  function n(a, r) {
    const [c, d] = jt(!1), { instance: u } = t(a, d).current;
    ha(r, () => u), Te(function() {
      c && u.update();
    }, [
      u,
      c,
      a.children
    ]);
    const h = u._contentNode;
    return h ? /* @__PURE__ */ s_(a.children, h) : null;
  }
  return /* @__PURE__ */ Le(n);
}
function Hl(t) {
  function n(a, r) {
    const { instance: c } = t(a).current;
    return ha(r, () => c), null;
  }
  return /* @__PURE__ */ Le(n);
}
function c0(t) {
  return function(a) {
    const r = In(), c = t(a, r), { instance: d } = c.current, u = nt(a.position), { position: h } = a;
    return Te(function() {
      return d.addTo(r.map), function() {
        d.remove();
      };
    }, [
      r.map,
      d
    ]), Te(function() {
      h != null && h !== u.current && (d.setPosition(h), u.current = h);
    }, [
      d,
      h
    ]), c;
  };
}
function Ko(t, n) {
  const a = nt(void 0);
  Te(function() {
    return n != null && t.instance.on(n), a.current = n, function() {
      a.current != null && t.instance.off(a.current), a.current = null;
    };
  }, [
    t,
    n
  ]);
}
function va(t, n) {
  const a = t.pane ?? n.pane;
  return a ? {
    ...t,
    pane: a
  } : t;
}
function _0(t, n) {
  return function(r, c) {
    const d = In(), u = t(va(r, d), d);
    return Bl(d.map, r.attribution), Ko(u.current, r.eventHandlers), n(u.current, d, r, c), u;
  };
}
var Ho = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(t, n) {
  (function(a, r) {
    r(n);
  })(l_, function(a) {
    var r = "1.9.4";
    function c(e) {
      var i, o, s, _;
      for (o = 1, s = arguments.length; o < s; o++) {
        _ = arguments[o];
        for (i in _)
          e[i] = _[i];
      }
      return e;
    }
    var d = Object.create || /* @__PURE__ */ function() {
      function e() {
      }
      return function(i) {
        return e.prototype = i, new e();
      };
    }();
    function u(e, i) {
      var o = Array.prototype.slice;
      if (e.bind)
        return e.bind.apply(e, o.call(arguments, 1));
      var s = o.call(arguments, 2);
      return function() {
        return e.apply(i, s.length ? s.concat(o.call(arguments)) : arguments);
      };
    }
    var h = 0;
    function p(e) {
      return "_leaflet_id" in e || (e._leaflet_id = ++h), e._leaflet_id;
    }
    function g(e, i, o) {
      var s, _, m, b;
      return b = function() {
        s = !1, _ && (m.apply(o, _), _ = !1);
      }, m = function() {
        s ? _ = arguments : (e.apply(o, arguments), setTimeout(b, i), s = !0);
      }, m;
    }
    function y(e, i, o) {
      var s = i[1], _ = i[0], m = s - _;
      return e === s && o ? e : ((e - _) % m + m) % m + _;
    }
    function v() {
      return !1;
    }
    function z(e, i) {
      if (i === !1)
        return e;
      var o = Math.pow(10, i === void 0 ? 6 : i);
      return Math.round(e * o) / o;
    }
    function k(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }
    function N(e) {
      return k(e).split(/\s+/);
    }
    function P(e, i) {
      Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? d(e.options) : {});
      for (var o in i)
        e.options[o] = i[o];
      return e.options;
    }
    function $(e, i, o) {
      var s = [];
      for (var _ in e)
        s.push(encodeURIComponent(o ? _.toUpperCase() : _) + "=" + encodeURIComponent(e[_]));
      return (!i || i.indexOf("?") === -1 ? "?" : "&") + s.join("&");
    }
    var F = /\{ *([\w_ -]+) *\}/g;
    function H(e, i) {
      return e.replace(F, function(o, s) {
        var _ = i[s];
        if (_ === void 0)
          throw new Error("No value provided for variable " + o);
        return typeof _ == "function" && (_ = _(i)), _;
      });
    }
    var A = Array.isArray || function(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
    function R(e, i) {
      for (var o = 0; o < e.length; o++)
        if (e[o] === i)
          return o;
      return -1;
    }
    var T = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function E(e) {
      return window["webkit" + e] || window["moz" + e] || window["ms" + e];
    }
    var J = 0;
    function G(e) {
      var i = +/* @__PURE__ */ new Date(), o = Math.max(0, 16 - (i - J));
      return J = i + o, window.setTimeout(e, o);
    }
    var B = window.requestAnimationFrame || E("RequestAnimationFrame") || G, M = window.cancelAnimationFrame || E("CancelAnimationFrame") || E("CancelRequestAnimationFrame") || function(e) {
      window.clearTimeout(e);
    };
    function j(e, i, o) {
      if (o && B === G)
        e.call(i);
      else
        return B.call(window, u(e, i));
    }
    function V(e) {
      e && M.call(window, e);
    }
    var Q = {
      __proto__: null,
      extend: c,
      create: d,
      bind: u,
      get lastId() {
        return h;
      },
      stamp: p,
      throttle: g,
      wrapNum: y,
      falseFn: v,
      formatNum: z,
      trim: k,
      splitWords: N,
      setOptions: P,
      getParamString: $,
      template: H,
      isArray: A,
      indexOf: R,
      emptyImageUrl: T,
      requestFn: B,
      cancelFn: M,
      requestAnimFrame: j,
      cancelAnimFrame: V
    };
    function le() {
    }
    le.extend = function(e) {
      var i = function() {
        P(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, o = i.__super__ = this.prototype, s = d(o);
      s.constructor = i, i.prototype = s;
      for (var _ in this)
        Object.prototype.hasOwnProperty.call(this, _) && _ !== "prototype" && _ !== "__super__" && (i[_] = this[_]);
      return e.statics && c(i, e.statics), e.includes && (ae(e.includes), c.apply(null, [s].concat(e.includes))), c(s, e), delete s.statics, delete s.includes, s.options && (s.options = o.options ? d(o.options) : {}, c(s.options, e.options)), s._initHooks = [], s.callInitHooks = function() {
        if (!this._initHooksCalled) {
          o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var m = 0, b = s._initHooks.length; m < b; m++)
            s._initHooks[m].call(this);
        }
      }, i;
    }, le.include = function(e) {
      var i = this.prototype.options;
      return c(this.prototype, e), e.options && (this.prototype.options = i, this.mergeOptions(e.options)), this;
    }, le.mergeOptions = function(e) {
      return c(this.prototype.options, e), this;
    }, le.addInitHook = function(e) {
      var i = Array.prototype.slice.call(arguments, 1), o = typeof e == "function" ? e : function() {
        this[e].apply(this, i);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(o), this;
    };
    function ae(e) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        e = A(e) ? e : [e];
        for (var i = 0; i < e.length; i++)
          e[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var te = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(e, i, o) {
        if (typeof e == "object")
          for (var s in e)
            this._on(s, e[s], i);
        else {
          e = N(e);
          for (var _ = 0, m = e.length; _ < m; _++)
            this._on(e[_], i, o);
        }
        return this;
      },
      /* @method off(type: String, fn?: Function, context?: Object): this
       * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
       *
       * @alternative
       * @method off(eventMap: Object): this
       * Removes a set of type/listener pairs.
       *
       * @alternative
       * @method off: this
       * Removes all listeners to all events on the object. This includes implicitly attached events.
       */
      off: function(e, i, o) {
        if (!arguments.length)
          delete this._events;
        else if (typeof e == "object")
          for (var s in e)
            this._off(s, e[s], i);
        else {
          e = N(e);
          for (var _ = arguments.length === 1, m = 0, b = e.length; m < b; m++)
            _ ? this._off(e[m]) : this._off(e[m], i, o);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(e, i, o, s) {
        if (typeof i != "function") {
          console.warn("wrong listener type: " + typeof i);
          return;
        }
        if (this._listens(e, i, o) === !1) {
          o === this && (o = void 0);
          var _ = { fn: i, ctx: o };
          s && (_.once = !0), this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(_);
        }
      },
      _off: function(e, i, o) {
        var s, _, m;
        if (this._events && (s = this._events[e], !!s)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (_ = 0, m = s.length; _ < m; _++)
                s[_].fn = v;
            delete this._events[e];
            return;
          }
          if (typeof i != "function") {
            console.warn("wrong listener type: " + typeof i);
            return;
          }
          var b = this._listens(e, i, o);
          if (b !== !1) {
            var C = s[b];
            this._firingCount && (C.fn = v, this._events[e] = s = s.slice()), s.splice(b, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(e, i, o) {
        if (!this.listens(e, o))
          return this;
        var s = c({}, i, {
          type: e,
          target: this,
          sourceTarget: i && i.sourceTarget || this
        });
        if (this._events) {
          var _ = this._events[e];
          if (_) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var m = 0, b = _.length; m < b; m++) {
              var C = _[m], I = C.fn;
              C.once && this.off(e, I, C.ctx), I.call(C.ctx || this, s);
            }
            this._firingCount--;
          }
        }
        return o && this._propagateEvent(s), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(e, i, o, s) {
        typeof e != "string" && console.warn('"string" type argument expected');
        var _ = i;
        typeof i != "function" && (s = !!i, _ = void 0, o = void 0);
        var m = this._events && this._events[e];
        if (m && m.length && this._listens(e, _, o) !== !1)
          return !0;
        if (s) {
          for (var b in this._eventParents)
            if (this._eventParents[b].listens(e, i, o, s))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(e, i, o) {
        if (!this._events)
          return !1;
        var s = this._events[e] || [];
        if (!i)
          return !!s.length;
        o === this && (o = void 0);
        for (var _ = 0, m = s.length; _ < m; _++)
          if (s[_].fn === i && s[_].ctx === o)
            return _;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(e, i, o) {
        if (typeof e == "object")
          for (var s in e)
            this._on(s, e[s], i, !0);
        else {
          e = N(e);
          for (var _ = 0, m = e.length; _ < m; _++)
            this._on(e[_], i, o, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(e) {
        return this._eventParents = this._eventParents || {}, this._eventParents[p(e)] = e, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(e) {
        return this._eventParents && delete this._eventParents[p(e)], this;
      },
      _propagateEvent: function(e) {
        for (var i in this._eventParents)
          this._eventParents[i].fire(e.type, c({
            layer: e.target,
            propagatedFrom: e.target
          }, e), !0);
      }
    };
    te.addEventListener = te.on, te.removeEventListener = te.clearAllEventListeners = te.off, te.addOneTimeEventListener = te.once, te.fireEvent = te.fire, te.hasEventListeners = te.listens;
    var ce = le.extend(te);
    function w(e, i, o) {
      this.x = o ? Math.round(e) : e, this.y = o ? Math.round(i) : i;
    }
    var q = Math.trunc || function(e) {
      return e > 0 ? Math.floor(e) : Math.ceil(e);
    };
    w.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new w(this.x, this.y);
      },
      // @method add(otherPoint: Point): Point
      // Returns the result of addition of the current and the given points.
      add: function(e) {
        return this.clone()._add(x(e));
      },
      _add: function(e) {
        return this.x += e.x, this.y += e.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(e) {
        return this.clone()._subtract(x(e));
      },
      _subtract: function(e) {
        return this.x -= e.x, this.y -= e.y, this;
      },
      // @method divideBy(num: Number): Point
      // Returns the result of division of the current point by the given number.
      divideBy: function(e) {
        return this.clone()._divideBy(e);
      },
      _divideBy: function(e) {
        return this.x /= e, this.y /= e, this;
      },
      // @method multiplyBy(num: Number): Point
      // Returns the result of multiplication of the current point by the given number.
      multiplyBy: function(e) {
        return this.clone()._multiplyBy(e);
      },
      _multiplyBy: function(e) {
        return this.x *= e, this.y *= e, this;
      },
      // @method scaleBy(scale: Point): Point
      // Multiply each coordinate of the current point by each coordinate of
      // `scale`. In linear algebra terms, multiply the point by the
      // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
      // defined by `scale`.
      scaleBy: function(e) {
        return new w(this.x * e.x, this.y * e.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(e) {
        return new w(this.x / e.x, this.y / e.y);
      },
      // @method round(): Point
      // Returns a copy of the current point with rounded coordinates.
      round: function() {
        return this.clone()._round();
      },
      _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      },
      // @method floor(): Point
      // Returns a copy of the current point with floored coordinates (rounded down).
      floor: function() {
        return this.clone()._floor();
      },
      _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      },
      // @method ceil(): Point
      // Returns a copy of the current point with ceiled coordinates (rounded up).
      ceil: function() {
        return this.clone()._ceil();
      },
      _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      },
      // @method trunc(): Point
      // Returns a copy of the current point with truncated coordinates (rounded towards zero).
      trunc: function() {
        return this.clone()._trunc();
      },
      _trunc: function() {
        return this.x = q(this.x), this.y = q(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(e) {
        e = x(e);
        var i = e.x - this.x, o = e.y - this.y;
        return Math.sqrt(i * i + o * o);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(e) {
        return e = x(e), e.x === this.x && e.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(e) {
        return e = x(e), Math.abs(e.x) <= Math.abs(this.x) && Math.abs(e.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + z(this.x) + ", " + z(this.y) + ")";
      }
    };
    function x(e, i, o) {
      return e instanceof w ? e : A(e) ? new w(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new w(e.x, e.y) : new w(e, i, o);
    }
    function O(e, i) {
      if (e)
        for (var o = i ? [e, i] : e, s = 0, _ = o.length; s < _; s++)
          this.extend(o[s]);
    }
    O.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var i, o;
        if (!e)
          return this;
        if (e instanceof w || typeof e[0] == "number" || "x" in e)
          i = o = x(e);
        else if (e = S(e), i = e.min, o = e.max, !i || !o)
          return this;
        return !this.min && !this.max ? (this.min = i.clone(), this.max = o.clone()) : (this.min.x = Math.min(i.x, this.min.x), this.max.x = Math.max(o.x, this.max.x), this.min.y = Math.min(i.y, this.min.y), this.max.y = Math.max(o.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(e) {
        return x(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          e
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return x(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return x(this.max.x, this.min.y);
      },
      // @method getTopLeft(): Point
      // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
      getTopLeft: function() {
        return this.min;
      },
      // @method getBottomRight(): Point
      // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
      getBottomRight: function() {
        return this.max;
      },
      // @method getSize(): Point
      // Returns the size of the given bounds
      getSize: function() {
        return this.max.subtract(this.min);
      },
      // @method contains(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains(point: Point): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(e) {
        var i, o;
        return typeof e[0] == "number" || e instanceof w ? e = x(e) : e = S(e), e instanceof O ? (i = e.min, o = e.max) : i = o = e, i.x >= this.min.x && o.x <= this.max.x && i.y >= this.min.y && o.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(e) {
        e = S(e);
        var i = this.min, o = this.max, s = e.min, _ = e.max, m = _.x >= i.x && s.x <= o.x, b = _.y >= i.y && s.y <= o.y;
        return m && b;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(e) {
        e = S(e);
        var i = this.min, o = this.max, s = e.min, _ = e.max, m = _.x > i.x && s.x < o.x, b = _.y > i.y && s.y < o.y;
        return m && b;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this.min && this.max);
      },
      // @method pad(bufferRatio: Number): Bounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(e) {
        var i = this.min, o = this.max, s = Math.abs(i.x - o.x) * e, _ = Math.abs(i.y - o.y) * e;
        return S(
          x(i.x - s, i.y - _),
          x(o.x + s, o.y + _)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(e) {
        return e ? (e = S(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
      }
    };
    function S(e, i) {
      return !e || e instanceof O ? e : new O(e, i);
    }
    function Z(e, i) {
      if (e)
        for (var o = i ? [e, i] : e, s = 0, _ = o.length; s < _; s++)
          this.extend(o[s]);
    }
    Z.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var i = this._southWest, o = this._northEast, s, _;
        if (e instanceof X)
          s = e, _ = e;
        else if (e instanceof Z) {
          if (s = e._southWest, _ = e._northEast, !s || !_)
            return this;
        } else
          return e ? this.extend(K(e) || ie(e)) : this;
        return !i && !o ? (this._southWest = new X(s.lat, s.lng), this._northEast = new X(_.lat, _.lng)) : (i.lat = Math.min(s.lat, i.lat), i.lng = Math.min(s.lng, i.lng), o.lat = Math.max(_.lat, o.lat), o.lng = Math.max(_.lng, o.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(e) {
        var i = this._southWest, o = this._northEast, s = Math.abs(i.lat - o.lat) * e, _ = Math.abs(i.lng - o.lng) * e;
        return new Z(
          new X(i.lat - s, i.lng - _),
          new X(o.lat + s, o.lng + _)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new X(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      // @method getSouthWest(): LatLng
      // Returns the south-west point of the bounds.
      getSouthWest: function() {
        return this._southWest;
      },
      // @method getNorthEast(): LatLng
      // Returns the north-east point of the bounds.
      getNorthEast: function() {
        return this._northEast;
      },
      // @method getNorthWest(): LatLng
      // Returns the north-west point of the bounds.
      getNorthWest: function() {
        return new X(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new X(this.getSouth(), this.getEast());
      },
      // @method getWest(): Number
      // Returns the west longitude of the bounds
      getWest: function() {
        return this._southWest.lng;
      },
      // @method getSouth(): Number
      // Returns the south latitude of the bounds
      getSouth: function() {
        return this._southWest.lat;
      },
      // @method getEast(): Number
      // Returns the east longitude of the bounds
      getEast: function() {
        return this._northEast.lng;
      },
      // @method getNorth(): Number
      // Returns the north latitude of the bounds
      getNorth: function() {
        return this._northEast.lat;
      },
      // @method contains(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle contains the given one.
      // @alternative
      // @method contains (latlng: LatLng): Boolean
      // Returns `true` if the rectangle contains the given point.
      contains: function(e) {
        typeof e[0] == "number" || e instanceof X || "lat" in e ? e = K(e) : e = ie(e);
        var i = this._southWest, o = this._northEast, s, _;
        return e instanceof Z ? (s = e.getSouthWest(), _ = e.getNorthEast()) : s = _ = e, s.lat >= i.lat && _.lat <= o.lat && s.lng >= i.lng && _.lng <= o.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(e) {
        e = ie(e);
        var i = this._southWest, o = this._northEast, s = e.getSouthWest(), _ = e.getNorthEast(), m = _.lat >= i.lat && s.lat <= o.lat, b = _.lng >= i.lng && s.lng <= o.lng;
        return m && b;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(e) {
        e = ie(e);
        var i = this._southWest, o = this._northEast, s = e.getSouthWest(), _ = e.getNorthEast(), m = _.lat > i.lat && s.lat < o.lat, b = _.lng > i.lng && s.lng < o.lng;
        return m && b;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(e, i) {
        return e ? (e = ie(e), this._southWest.equals(e.getSouthWest(), i) && this._northEast.equals(e.getNorthEast(), i)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function ie(e, i) {
      return e instanceof Z ? e : new Z(e, i);
    }
    function X(e, i, o) {
      if (isNaN(e) || isNaN(i))
        throw new Error("Invalid LatLng object: (" + e + ", " + i + ")");
      this.lat = +e, this.lng = +i, o !== void 0 && (this.alt = +o);
    }
    X.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(e, i) {
        if (!e)
          return !1;
        e = K(e);
        var o = Math.max(
          Math.abs(this.lat - e.lat),
          Math.abs(this.lng - e.lng)
        );
        return o <= (i === void 0 ? 1e-9 : i);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(e) {
        return "LatLng(" + z(this.lat, e) + ", " + z(this.lng, e) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(e) {
        return de.distance(this, K(e));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return de.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(e) {
        var i = 180 * e / 40075017, o = i / Math.cos(Math.PI / 180 * this.lat);
        return ie(
          [this.lat - i, this.lng - o],
          [this.lat + i, this.lng + o]
        );
      },
      clone: function() {
        return new X(this.lat, this.lng, this.alt);
      }
    };
    function K(e, i, o) {
      return e instanceof X ? e : A(e) && typeof e[0] != "object" ? e.length === 3 ? new X(e[0], e[1], e[2]) : e.length === 2 ? new X(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new X(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : i === void 0 ? null : new X(e, i, o);
    }
    var pe = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(e, i) {
        var o = this.projection.project(e), s = this.scale(i);
        return this.transformation._transform(o, s);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(e, i) {
        var o = this.scale(i), s = this.transformation.untransform(e, o);
        return this.projection.unproject(s);
      },
      // @method project(latlng: LatLng): Point
      // Projects geographical coordinates into coordinates in units accepted for
      // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
      project: function(e) {
        return this.projection.project(e);
      },
      // @method unproject(point: Point): LatLng
      // Given a projected coordinate returns the corresponding LatLng.
      // The inverse of `project`.
      unproject: function(e) {
        return this.projection.unproject(e);
      },
      // @method scale(zoom: Number): Number
      // Returns the scale used when transforming projected coordinates into
      // pixel coordinates for a particular zoom. For example, it returns
      // `256 * 2^zoom` for Mercator-based CRS.
      scale: function(e) {
        return 256 * Math.pow(2, e);
      },
      // @method zoom(scale: Number): Number
      // Inverse of `scale()`, returns the zoom level corresponding to a scale
      // factor of `scale`.
      zoom: function(e) {
        return Math.log(e / 256) / Math.LN2;
      },
      // @method getProjectedBounds(zoom: Number): Bounds
      // Returns the projection's bounds scaled and transformed for the provided `zoom`.
      getProjectedBounds: function(e) {
        if (this.infinite)
          return null;
        var i = this.projection.bounds, o = this.scale(e), s = this.transformation.transform(i.min, o), _ = this.transformation.transform(i.max, o);
        return new O(s, _);
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates.
      // @property code: String
      // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
      //
      // @property wrapLng: Number[]
      // An array of two numbers defining whether the longitude (horizontal) coordinate
      // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
      // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
      //
      // @property wrapLat: Number[]
      // Like `wrapLng`, but for the latitude (vertical) axis.
      // wrapLng: [min, max],
      // wrapLat: [min, max],
      // @property infinite: Boolean
      // If true, the coordinate space will be unbounded (infinite in both axes)
      infinite: !1,
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where lat and lng has been wrapped according to the
      // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
      wrapLatLng: function(e) {
        var i = this.wrapLng ? y(e.lng, this.wrapLng, !0) : e.lng, o = this.wrapLat ? y(e.lat, this.wrapLat, !0) : e.lat, s = e.alt;
        return new X(o, i, s);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(e) {
        var i = e.getCenter(), o = this.wrapLatLng(i), s = i.lat - o.lat, _ = i.lng - o.lng;
        if (s === 0 && _ === 0)
          return e;
        var m = e.getSouthWest(), b = e.getNorthEast(), C = new X(m.lat - s, m.lng - _), I = new X(b.lat - s, b.lng - _);
        return new Z(C, I);
      }
    }, de = c({}, pe, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(e, i) {
        var o = Math.PI / 180, s = e.lat * o, _ = i.lat * o, m = Math.sin((i.lat - e.lat) * o / 2), b = Math.sin((i.lng - e.lng) * o / 2), C = m * m + Math.cos(s) * Math.cos(_) * b * b, I = 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C));
        return this.R * I;
      }
    }), Pe = 6378137, be = {
      R: Pe,
      MAX_LATITUDE: 85.0511287798,
      project: function(e) {
        var i = Math.PI / 180, o = this.MAX_LATITUDE, s = Math.max(Math.min(o, e.lat), -o), _ = Math.sin(s * i);
        return new w(
          this.R * e.lng * i,
          this.R * Math.log((1 + _) / (1 - _)) / 2
        );
      },
      unproject: function(e) {
        var i = 180 / Math.PI;
        return new X(
          (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * i,
          e.x * i / this.R
        );
      },
      bounds: function() {
        var e = Pe * Math.PI;
        return new O([-e, -e], [e, e]);
      }()
    };
    function ee(e, i, o, s) {
      if (A(e)) {
        this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
        return;
      }
      this._a = e, this._b = i, this._c = o, this._d = s;
    }
    ee.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(e, i) {
        return this._transform(e.clone(), i);
      },
      // destructive transform (faster)
      _transform: function(e, i) {
        return i = i || 1, e.x = i * (this._a * e.x + this._b), e.y = i * (this._c * e.y + this._d), e;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(e, i) {
        return i = i || 1, new w(
          (e.x / i - this._b) / this._a,
          (e.y / i - this._d) / this._c
        );
      }
    };
    function ne(e, i, o, s) {
      return new ee(e, i, o, s);
    }
    var ue = c({}, de, {
      code: "EPSG:3857",
      projection: be,
      transformation: function() {
        var e = 0.5 / (Math.PI * be.R);
        return ne(e, 0.5, -e, 0.5);
      }()
    }), re = c({}, ue, {
      code: "EPSG:900913"
    });
    function ke(e) {
      return document.createElementNS("http://www.w3.org/2000/svg", e);
    }
    function he(e, i) {
      var o = "", s, _, m, b, C, I;
      for (s = 0, m = e.length; s < m; s++) {
        for (C = e[s], _ = 0, b = C.length; _ < b; _++)
          I = C[_], o += (_ ? "L" : "M") + I.x + " " + I.y;
        o += i ? ge.svg ? "z" : "x" : "";
      }
      return o || "M0 0";
    }
    var W = document.documentElement.style, U = "ActiveXObject" in window, Oe = U && !document.addEventListener, at = "msLaunchUri" in navigator && !("documentMode" in document), qe = Gt("webkit"), We = Gt("android"), De = Gt("android 2") || Gt("android 3"), xe = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), $e = We && Gt("Google") && xe < 537 && !("AudioNode" in window), et = !!window.opera, st = !at && Gt("chrome"), Ae = Gt("gecko") && !qe && !et && !U, vt = !st && Gt("safari"), zt = Gt("phantom"), wt = "OTransition" in W, ni = navigator.platform.indexOf("Win") === 0, At = U && "transition" in W, ai = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !De, Bt = "MozPerspective" in W, $t = !window.L_DISABLE_3D && (At || ai || Bt) && !wt && !zt, Vt = typeof orientation < "u" || Gt("mobile"), wi = Vt && qe, ki = Vt && ai, ye = !window.PointerEvent && window.MSPointerEvent, Ne = !!(window.PointerEvent || ye), tt = "ontouchstart" in window || !!window.TouchEvent, Tt = !window.L_NO_TOUCH && (tt || Ne), oi = Vt && et, D = Vt && Ae, fe = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Se = function() {
      var e = !1;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function() {
            e = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", v, i), window.removeEventListener("testPassiveEventSupport", v, i);
      } catch {
      }
      return e;
    }(), kt = function() {
      return !!document.createElement("canvas").getContext;
    }(), Ft = !!(document.createElementNS && ke("svg").createSVGRect), ka = !!Ft && function() {
      var e = document.createElement("div");
      return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), Sa = !Ft && function() {
      try {
        var e = document.createElement("div");
        e.innerHTML = '<v:shape adj="1"/>';
        var i = e.firstChild;
        return i.style.behavior = "url(#default#VML)", i && typeof i.adj == "object";
      } catch {
        return !1;
      }
    }(), mt = navigator.platform.indexOf("Mac") === 0, Li = navigator.platform.indexOf("Linux") === 0;
    function Gt(e) {
      return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
    }
    var ge = {
      ie: U,
      ielt9: Oe,
      edge: at,
      webkit: qe,
      android: We,
      android23: De,
      androidStock: $e,
      opera: et,
      chrome: st,
      gecko: Ae,
      safari: vt,
      phantom: zt,
      opera12: wt,
      win: ni,
      ie3d: At,
      webkit3d: ai,
      gecko3d: Bt,
      any3d: $t,
      mobile: Vt,
      mobileWebkit: wi,
      mobileWebkit3d: ki,
      msPointer: ye,
      pointer: Ne,
      touch: Tt,
      touchNative: tt,
      mobileOpera: oi,
      mobileGecko: D,
      retina: fe,
      passiveEvents: Se,
      canvas: kt,
      svg: Ft,
      vml: Sa,
      inlineSvg: ka,
      mac: mt,
      linux: Li
    }, On = ge.msPointer ? "MSPointerDown" : "pointerdown", Si = ge.msPointer ? "MSPointerMove" : "pointermove", Xo = ge.msPointer ? "MSPointerUp" : "pointerup", Qo = ge.msPointer ? "MSPointerCancel" : "pointercancel", Ca = {
      touchstart: On,
      touchmove: Si,
      touchend: Xo,
      touchcancel: Qo
    }, er = {
      touchstart: nc,
      touchmove: Rn,
      touchend: Rn,
      touchcancel: Rn
    }, qi = {}, tr = !1;
    function Xl(e, i, o) {
      return i === "touchstart" && ic(), er[i] ? (o = er[i].bind(this, o), e.addEventListener(Ca[i], o, !1), o) : (console.warn("wrong event specified:", i), v);
    }
    function Ql(e, i, o) {
      if (!Ca[i]) {
        console.warn("wrong event specified:", i);
        return;
      }
      e.removeEventListener(Ca[i], o, !1);
    }
    function ec(e) {
      qi[e.pointerId] = e;
    }
    function tc(e) {
      qi[e.pointerId] && (qi[e.pointerId] = e);
    }
    function ir(e) {
      delete qi[e.pointerId];
    }
    function ic() {
      tr || (document.addEventListener(On, ec, !0), document.addEventListener(Si, tc, !0), document.addEventListener(Xo, ir, !0), document.addEventListener(Qo, ir, !0), tr = !0);
    }
    function Rn(e, i) {
      if (i.pointerType !== (i.MSPOINTER_TYPE_MOUSE || "mouse")) {
        i.touches = [];
        for (var o in qi)
          i.touches.push(qi[o]);
        i.changedTouches = [i], e(i);
      }
    }
    function nc(e, i) {
      i.MSPOINTER_TYPE_TOUCH && i.pointerType === i.MSPOINTER_TYPE_TOUCH && St(i), Rn(e, i);
    }
    function ac(e) {
      var i = {}, o, s;
      for (s in e)
        o = e[s], i[s] = o && o.bind ? o.bind(e) : o;
      return e = i, i.type = "dblclick", i.detail = 2, i.isTrusted = !1, i._simulated = !0, i;
    }
    var oc = 200;
    function rc(e, i) {
      e.addEventListener("dblclick", i);
      var o = 0, s;
      function _(m) {
        if (m.detail !== 1) {
          s = m.detail;
          return;
        }
        if (!(m.pointerType === "mouse" || m.sourceCapabilities && !m.sourceCapabilities.firesTouchEvents)) {
          var b = sr(m);
          if (!(b.some(function(I) {
            return I instanceof HTMLLabelElement && I.attributes.for;
          }) && !b.some(function(I) {
            return I instanceof HTMLInputElement || I instanceof HTMLSelectElement;
          }))) {
            var C = Date.now();
            C - o <= oc ? (s++, s === 2 && i(ac(m))) : s = 1, o = C;
          }
        }
      }
      return e.addEventListener("click", _), {
        dblclick: i,
        simDblclick: _
      };
    }
    function sc(e, i) {
      e.removeEventListener("dblclick", i.dblclick), e.removeEventListener("click", i.simDblclick);
    }
    var ja = $n(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), ln = $n(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), nr = ln === "webkitTransition" || ln === "OTransition" ? ln + "End" : "transitionend";
    function ar(e) {
      return typeof e == "string" ? document.getElementById(e) : e;
    }
    function cn(e, i) {
      var o = e.style[i] || e.currentStyle && e.currentStyle[i];
      if ((!o || o === "auto") && document.defaultView) {
        var s = document.defaultView.getComputedStyle(e, null);
        o = s ? s[i] : null;
      }
      return o === "auto" ? null : o;
    }
    function Be(e, i, o) {
      var s = document.createElement(e);
      return s.className = i || "", o && o.appendChild(s), s;
    }
    function ot(e) {
      var i = e.parentNode;
      i && i.removeChild(e);
    }
    function Dn(e) {
      for (; e.firstChild; )
        e.removeChild(e.firstChild);
    }
    function Ki(e) {
      var i = e.parentNode;
      i && i.lastChild !== e && i.appendChild(e);
    }
    function Yi(e) {
      var i = e.parentNode;
      i && i.firstChild !== e && i.insertBefore(e, i.firstChild);
    }
    function za(e, i) {
      if (e.classList !== void 0)
        return e.classList.contains(i);
      var o = Bn(e);
      return o.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(o);
    }
    function Ee(e, i) {
      if (e.classList !== void 0)
        for (var o = N(i), s = 0, _ = o.length; s < _; s++)
          e.classList.add(o[s]);
      else if (!za(e, i)) {
        var m = Bn(e);
        Ta(e, (m ? m + " " : "") + i);
      }
    }
    function lt(e, i) {
      e.classList !== void 0 ? e.classList.remove(i) : Ta(e, k((" " + Bn(e) + " ").replace(" " + i + " ", " ")));
    }
    function Ta(e, i) {
      e.className.baseVal === void 0 ? e.className = i : e.className.baseVal = i;
    }
    function Bn(e) {
      return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
    }
    function qt(e, i) {
      "opacity" in e.style ? e.style.opacity = i : "filter" in e.style && lc(e, i);
    }
    function lc(e, i) {
      var o = !1, s = "DXImageTransform.Microsoft.Alpha";
      try {
        o = e.filters.item(s);
      } catch {
        if (i === 1)
          return;
      }
      i = Math.round(i * 100), o ? (o.Enabled = i !== 100, o.Opacity = i) : e.style.filter += " progid:" + s + "(opacity=" + i + ")";
    }
    function $n(e) {
      for (var i = document.documentElement.style, o = 0; o < e.length; o++)
        if (e[o] in i)
          return e[o];
      return !1;
    }
    function Ai(e, i, o) {
      var s = i || new w(0, 0);
      e.style[ja] = (ge.ie3d ? "translate(" + s.x + "px," + s.y + "px)" : "translate3d(" + s.x + "px," + s.y + "px,0)") + (o ? " scale(" + o + ")" : "");
    }
    function ct(e, i) {
      e._leaflet_pos = i, ge.any3d ? Ai(e, i) : (e.style.left = i.x + "px", e.style.top = i.y + "px");
    }
    function Mi(e) {
      return e._leaflet_pos || new w(0, 0);
    }
    var _n, dn, Pa;
    if ("onselectstart" in document)
      _n = function() {
        je(window, "selectstart", St);
      }, dn = function() {
        Ke(window, "selectstart", St);
      };
    else {
      var un = $n(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      _n = function() {
        if (un) {
          var e = document.documentElement.style;
          Pa = e[un], e[un] = "none";
        }
      }, dn = function() {
        un && (document.documentElement.style[un] = Pa, Pa = void 0);
      };
    }
    function Na() {
      je(window, "dragstart", St);
    }
    function Ea() {
      Ke(window, "dragstart", St);
    }
    var Fn, Ia;
    function La(e) {
      for (; e.tabIndex === -1; )
        e = e.parentNode;
      e.style && (Hn(), Fn = e, Ia = e.style.outlineStyle, e.style.outlineStyle = "none", je(window, "keydown", Hn));
    }
    function Hn() {
      Fn && (Fn.style.outlineStyle = Ia, Fn = void 0, Ia = void 0, Ke(window, "keydown", Hn));
    }
    function or(e) {
      do
        e = e.parentNode;
      while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
      return e;
    }
    function Aa(e) {
      var i = e.getBoundingClientRect();
      return {
        x: i.width / e.offsetWidth || 1,
        y: i.height / e.offsetHeight || 1,
        boundingClientRect: i
      };
    }
    var cc = {
      __proto__: null,
      TRANSFORM: ja,
      TRANSITION: ln,
      TRANSITION_END: nr,
      get: ar,
      getStyle: cn,
      create: Be,
      remove: ot,
      empty: Dn,
      toFront: Ki,
      toBack: Yi,
      hasClass: za,
      addClass: Ee,
      removeClass: lt,
      setClass: Ta,
      getClass: Bn,
      setOpacity: qt,
      testProp: $n,
      setTransform: Ai,
      setPosition: ct,
      getPosition: Mi,
      get disableTextSelection() {
        return _n;
      },
      get enableTextSelection() {
        return dn;
      },
      disableImageDrag: Na,
      enableImageDrag: Ea,
      preventOutline: La,
      restoreOutline: Hn,
      getSizedParentNode: or,
      getScale: Aa
    };
    function je(e, i, o, s) {
      if (i && typeof i == "object")
        for (var _ in i)
          Oa(e, _, i[_], o);
      else {
        i = N(i);
        for (var m = 0, b = i.length; m < b; m++)
          Oa(e, i[m], o, s);
      }
      return this;
    }
    var ri = "_leaflet_events";
    function Ke(e, i, o, s) {
      if (arguments.length === 1)
        rr(e), delete e[ri];
      else if (i && typeof i == "object")
        for (var _ in i)
          Ra(e, _, i[_], o);
      else if (i = N(i), arguments.length === 2)
        rr(e, function(C) {
          return R(i, C) !== -1;
        });
      else
        for (var m = 0, b = i.length; m < b; m++)
          Ra(e, i[m], o, s);
      return this;
    }
    function rr(e, i) {
      for (var o in e[ri]) {
        var s = o.split(/\d/)[0];
        (!i || i(s)) && Ra(e, s, null, null, o);
      }
    }
    var Ma = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Oa(e, i, o, s) {
      var _ = i + p(o) + (s ? "_" + p(s) : "");
      if (e[ri] && e[ri][_])
        return this;
      var m = function(C) {
        return o.call(s || e, C || window.event);
      }, b = m;
      !ge.touchNative && ge.pointer && i.indexOf("touch") === 0 ? m = Xl(e, i, m) : ge.touch && i === "dblclick" ? m = rc(e, m) : "addEventListener" in e ? i === "touchstart" || i === "touchmove" || i === "wheel" || i === "mousewheel" ? e.addEventListener(Ma[i] || i, m, ge.passiveEvents ? { passive: !1 } : !1) : i === "mouseenter" || i === "mouseleave" ? (m = function(C) {
        C = C || window.event, Ba(e, C) && b(C);
      }, e.addEventListener(Ma[i], m, !1)) : e.addEventListener(i, b, !1) : e.attachEvent("on" + i, m), e[ri] = e[ri] || {}, e[ri][_] = m;
    }
    function Ra(e, i, o, s, _) {
      _ = _ || i + p(o) + (s ? "_" + p(s) : "");
      var m = e[ri] && e[ri][_];
      if (!m)
        return this;
      !ge.touchNative && ge.pointer && i.indexOf("touch") === 0 ? Ql(e, i, m) : ge.touch && i === "dblclick" ? sc(e, m) : "removeEventListener" in e ? e.removeEventListener(Ma[i] || i, m, !1) : e.detachEvent("on" + i, m), e[ri][_] = null;
    }
    function Oi(e) {
      return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
    }
    function Da(e) {
      return Oa(e, "wheel", Oi), this;
    }
    function mn(e) {
      return je(e, "mousedown touchstart dblclick contextmenu", Oi), e._leaflet_disable_click = !0, this;
    }
    function St(e) {
      return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
    }
    function Ri(e) {
      return St(e), Oi(e), this;
    }
    function sr(e) {
      if (e.composedPath)
        return e.composedPath();
      for (var i = [], o = e.target; o; )
        i.push(o), o = o.parentNode;
      return i;
    }
    function lr(e, i) {
      if (!i)
        return new w(e.clientX, e.clientY);
      var o = Aa(i), s = o.boundingClientRect;
      return new w(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (e.clientX - s.left) / o.x - i.clientLeft,
        (e.clientY - s.top) / o.y - i.clientTop
      );
    }
    var _c = ge.linux && ge.chrome ? window.devicePixelRatio : ge.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function cr(e) {
      return ge.edge ? e.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        e.deltaY && e.deltaMode === 0 ? -e.deltaY / _c : (
          // Pixels
          e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : (
            // Lines
            e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : (
              // Pages
              e.deltaX || e.deltaZ ? 0 : (
                // Skip horizontal/depth wheel events
                e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : (
                  // Legacy IE pixels
                  e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : (
                    // Legacy Moz lines
                    e.detail ? e.detail / -32765 * 60 : (
                      // Legacy Moz pages
                      0
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    function Ba(e, i) {
      var o = i.relatedTarget;
      if (!o)
        return !0;
      try {
        for (; o && o !== e; )
          o = o.parentNode;
      } catch {
        return !1;
      }
      return o !== e;
    }
    var dc = {
      __proto__: null,
      on: je,
      off: Ke,
      stopPropagation: Oi,
      disableScrollPropagation: Da,
      disableClickPropagation: mn,
      preventDefault: St,
      stop: Ri,
      getPropagationPath: sr,
      getMousePosition: lr,
      getWheelDelta: cr,
      isExternalTarget: Ba,
      addListener: je,
      removeListener: Ke
    }, _r = ce.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(e, i, o, s) {
        this.stop(), this._el = e, this._inProgress = !0, this._duration = o || 0.25, this._easeOutPower = 1 / Math.max(s || 0.5, 0.2), this._startPos = Mi(e), this._offset = i.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = j(this._animate, this), this._step();
      },
      _step: function(e) {
        var i = +/* @__PURE__ */ new Date() - this._startTime, o = this._duration * 1e3;
        i < o ? this._runFrame(this._easeOut(i / o), e) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(e, i) {
        var o = this._startPos.add(this._offset.multiplyBy(e));
        i && o._round(), ct(this._el, o), this.fire("step");
      },
      _complete: function() {
        V(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(e) {
        return 1 - Math.pow(1 - e, this._easeOutPower);
      }
    }), Re = ce.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: ue,
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: void 0,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: void 0,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: void 0,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: void 0,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: void 0,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: void 0,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: !0,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: !0,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: !0,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // Precision limit of a 32-bit float
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: !0
      },
      initialize: function(e, i) {
        i = P(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = u(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), i.zoom !== void 0 && (this._zoom = this._limitZoom(i.zoom)), i.center && i.zoom !== void 0 && this.setView(K(i.center), i.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ln && ge.any3d && !ge.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), je(this._proxy, nr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(e, i, o) {
        if (i = i === void 0 ? this._zoom : this._limitZoom(i), e = this._limitCenter(K(e), i, this.options.maxBounds), o = o || {}, this._stop(), this._loaded && !o.reset && o !== !0) {
          o.animate !== void 0 && (o.zoom = c({ animate: o.animate }, o.zoom), o.pan = c({ animate: o.animate, duration: o.duration }, o.pan));
          var s = this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(e, i, o.zoom) : this._tryAnimatedPan(e, o.pan);
          if (s)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(e, i, o.pan && o.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(e, i) {
        return this._loaded ? this.setView(this.getCenter(), e, { zoom: i }) : (this._zoom = e, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(e, i) {
        return e = e || (ge.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + e, i);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(e, i) {
        return e = e || (ge.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - e, i);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(e, i, o) {
        var s = this.getZoomScale(i), _ = this.getSize().divideBy(2), m = e instanceof w ? e : this.latLngToContainerPoint(e), b = m.subtract(_).multiplyBy(1 - 1 / s), C = this.containerPointToLatLng(_.add(b));
        return this.setView(C, i, { zoom: o });
      },
      _getBoundsCenterZoom: function(e, i) {
        i = i || {}, e = e.getBounds ? e.getBounds() : ie(e);
        var o = x(i.paddingTopLeft || i.padding || [0, 0]), s = x(i.paddingBottomRight || i.padding || [0, 0]), _ = this.getBoundsZoom(e, !1, o.add(s));
        if (_ = typeof i.maxZoom == "number" ? Math.min(i.maxZoom, _) : _, _ === 1 / 0)
          return {
            center: e.getCenter(),
            zoom: _
          };
        var m = s.subtract(o).divideBy(2), b = this.project(e.getSouthWest(), _), C = this.project(e.getNorthEast(), _), I = this.unproject(b.add(C).divideBy(2).add(m), _);
        return {
          center: I,
          zoom: _
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(e, i) {
        if (e = ie(e), !e.isValid())
          throw new Error("Bounds are not valid.");
        var o = this._getBoundsCenterZoom(e, i);
        return this.setView(o.center, o.zoom, i);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(e) {
        return this.fitBounds([[-90, -180], [90, 180]], e);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(e, i) {
        return this.setView(e, this._zoom, { pan: i });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(e, i) {
        if (e = x(e).round(), i = i || {}, !e.x && !e.y)
          return this.fire("moveend");
        if (i.animate !== !0 && !this.getSize().contains(e))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new _r(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), i.noMoveStart || this.fire("movestart"), i.animate !== !1) {
          Ee(this._mapPane, "leaflet-pan-anim");
          var o = this._getMapPanePos().subtract(e).round();
          this._panAnim.run(this._mapPane, o, i.duration || 0.25, i.easeLinearity);
        } else
          this._rawPanBy(e), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(e, i, o) {
        if (o = o || {}, o.animate === !1 || !ge.any3d)
          return this.setView(e, i, o);
        this._stop();
        var s = this.project(this.getCenter()), _ = this.project(e), m = this.getSize(), b = this._zoom;
        e = K(e), i = i === void 0 ? b : i;
        var C = Math.max(m.x, m.y), I = C * this.getZoomScale(b, i), Y = _.distanceTo(s) || 1, se = 1.42, ve = se * se;
        function Ie(_t) {
          var ea = _t ? -1 : 1, Qc = _t ? I : C, e_ = I * I - C * C + ea * ve * ve * Y * Y, t_ = 2 * Qc * ve * Y, Ya = e_ / t_, Zr = Math.sqrt(Ya * Ya + 1) - Ya, i_ = Zr < 1e-9 ? -18 : Math.log(Zr);
          return i_;
        }
        function Nt(_t) {
          return (Math.exp(_t) - Math.exp(-_t)) / 2;
        }
        function ft(_t) {
          return (Math.exp(_t) + Math.exp(-_t)) / 2;
        }
        function Yt(_t) {
          return Nt(_t) / ft(_t);
        }
        var Mt = Ie(0);
        function nn(_t) {
          return C * (ft(Mt) / ft(Mt + se * _t));
        }
        function Kc(_t) {
          return C * (ft(Mt) * Yt(Mt + se * _t) - Nt(Mt)) / ve;
        }
        function Yc(_t) {
          return 1 - Math.pow(1 - _t, 1.5);
        }
        var Jc = Date.now(), Hr = (Ie(1) - Mt) / se, Xc = o.duration ? 1e3 * o.duration : 1e3 * Hr * 0.8;
        function Ur() {
          var _t = (Date.now() - Jc) / Xc, ea = Yc(_t) * Hr;
          _t <= 1 ? (this._flyToFrame = j(Ur, this), this._move(
            this.unproject(s.add(_.subtract(s).multiplyBy(Kc(ea) / Y)), b),
            this.getScaleZoom(C / nn(ea), b),
            { flyTo: !0 }
          )) : this._move(e, i)._moveEnd(!0);
        }
        return this._moveStart(!0, o.noMoveStart), Ur.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(e, i) {
        var o = this._getBoundsCenterZoom(e, i);
        return this.flyTo(o.center, o.zoom, i);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(e) {
        return e = ie(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(e) {
        var i = this.options.minZoom;
        return this.options.minZoom = e, this._loaded && i !== e && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(e) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(e) {
        var i = this.options.maxZoom;
        return this.options.maxZoom = e, this._loaded && i !== e && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(e) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(e, i) {
        this._enforcingBounds = !0;
        var o = this.getCenter(), s = this._limitCenter(o, this._zoom, ie(e));
        return o.equals(s) || this.panTo(s, i), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(e, i) {
        i = i || {};
        var o = x(i.paddingTopLeft || i.padding || [0, 0]), s = x(i.paddingBottomRight || i.padding || [0, 0]), _ = this.project(this.getCenter()), m = this.project(e), b = this.getPixelBounds(), C = S([b.min.add(o), b.max.subtract(s)]), I = C.getSize();
        if (!C.contains(m)) {
          this._enforcingBounds = !0;
          var Y = m.subtract(C.getCenter()), se = C.extend(m).getSize().subtract(I);
          _.x += Y.x < 0 ? -se.x : se.x, _.y += Y.y < 0 ? -se.y : se.y, this.panTo(this.unproject(_), i), this._enforcingBounds = !1;
        }
        return this;
      },
      // @method invalidateSize(options: Zoom/pan options): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default. If `options.pan` is `false`, panning will not occur.
      // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
      // that it doesn't happen often even if the method is called many
      // times in a row.
      // @alternative
      // @method invalidateSize(animate: Boolean): this
      // Checks if the map container size changed and updates the map if so —
      // call it after you've changed the map size dynamically, also animating
      // pan by default.
      invalidateSize: function(e) {
        if (!this._loaded)
          return this;
        e = c({
          animate: !1,
          pan: !0
        }, e === !0 ? { animate: !0 } : e);
        var i = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var o = this.getSize(), s = i.divideBy(2).round(), _ = o.divideBy(2).round(), m = s.subtract(_);
        return !m.x && !m.y ? this : (e.animate && e.pan ? this.panBy(m) : (e.pan && this._rawPanBy(m), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(u(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: i,
          newSize: o
        }));
      },
      // @section Methods for modifying map state
      // @method stop(): this
      // Stops the currently running `panTo` or `flyTo` animation, if any.
      stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      // @section Geolocation methods
      // @method locate(options?: Locate options): this
      // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
      // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
      // and optionally sets the map view to the user's location with respect to
      // detection accuracy (or to the world view if geolocation failed).
      // Note that, if your page doesn't use HTTPS, this method will fail in
      // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
      // See `Locate options` for more details.
      locate: function(e) {
        if (e = this._locateOptions = c({
          timeout: 1e4,
          watch: !1
          // setView: false
          // maxZoom: <Number>
          // maximumAge: 0
          // enableHighAccuracy: false
        }, e), !("geolocation" in navigator))
          return this._handleGeolocationError({
            code: 0,
            message: "Geolocation not supported."
          }), this;
        var i = u(this._handleGeolocationResponse, this), o = u(this._handleGeolocationError, this);
        return e.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, o, e) : navigator.geolocation.getCurrentPosition(i, o, e), this;
      },
      // @method stopLocate(): this
      // Stops watching location previously initiated by `map.locate({watch: true})`
      // and aborts resetting the map view if map.locate was called with
      // `{setView: true}`.
      stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function(e) {
        if (this._container._leaflet_id) {
          var i = e.code, o = e.message || (i === 1 ? "permission denied" : i === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + o + "."
          });
        }
      },
      _handleGeolocationResponse: function(e) {
        if (this._container._leaflet_id) {
          var i = e.coords.latitude, o = e.coords.longitude, s = new X(i, o), _ = s.toBounds(e.coords.accuracy * 2), m = this._locateOptions;
          if (m.setView) {
            var b = this.getBoundsZoom(_);
            this.setView(s, m.maxZoom ? Math.min(b, m.maxZoom) : b);
          }
          var C = {
            latlng: s,
            bounds: _,
            timestamp: e.timestamp
          };
          for (var I in e.coords)
            typeof e.coords[I] == "number" && (C[I] = e.coords[I]);
          this.fire("locationfound", C);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(e, i) {
        if (!i)
          return this;
        var o = this[e] = new i(this);
        return this._handlers.push(o), this.options[e] && o.enable(), this;
      },
      // @method remove(): this
      // Destroys the map and clears all related event listeners.
      remove: function() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), ot(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (V(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var e;
        for (e in this._layers)
          this._layers[e].remove();
        for (e in this._panes)
          ot(this._panes[e]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(e, i) {
        var o = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), s = Be("div", o, i || this._mapPane);
        return e && (this._panes[e] = s), s;
      },
      // @section Methods for Getting Map State
      // @method getCenter(): LatLng
      // Returns the geographical center of the map view
      getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      // @method getZoom(): Number
      // Returns the current zoom level of the map view
      getZoom: function() {
        return this._zoom;
      },
      // @method getBounds(): LatLngBounds
      // Returns the geographical bounds visible in the current map view
      getBounds: function() {
        var e = this.getPixelBounds(), i = this.unproject(e.getBottomLeft()), o = this.unproject(e.getTopRight());
        return new Z(i, o);
      },
      // @method getMinZoom(): Number
      // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
      getMinZoom: function() {
        return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      // @method getMaxZoom(): Number
      // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
      getMaxZoom: function() {
        return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
      // Returns the maximum zoom level on which the given bounds fit to the map
      // view in its entirety. If `inside` (optional) is set to `true`, the method
      // instead returns the minimum zoom level on which the map view fits into
      // the given bounds in its entirety.
      getBoundsZoom: function(e, i, o) {
        e = ie(e), o = x(o || [0, 0]);
        var s = this.getZoom() || 0, _ = this.getMinZoom(), m = this.getMaxZoom(), b = e.getNorthWest(), C = e.getSouthEast(), I = this.getSize().subtract(o), Y = S(this.project(C, s), this.project(b, s)).getSize(), se = ge.any3d ? this.options.zoomSnap : 1, ve = I.x / Y.x, Ie = I.y / Y.y, Nt = i ? Math.max(ve, Ie) : Math.min(ve, Ie);
        return s = this.getScaleZoom(Nt, s), se && (s = Math.round(s / (se / 100)) * (se / 100), s = i ? Math.ceil(s / se) * se : Math.floor(s / se) * se), Math.max(_, Math.min(m, s));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new w(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(e, i) {
        var o = this._getTopLeftPoint(e, i);
        return new O(o, o.add(this.getSize()));
      },
      // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
      // the map pane? "left point of the map layer" can be confusing, specially
      // since there can be negative offsets.
      // @method getPixelOrigin(): Point
      // Returns the projected pixel coordinates of the top left point of
      // the map layer (useful in custom layer and overlay implementations).
      getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      // @method getPixelWorldBounds(zoom?: Number): Bounds
      // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
      // If `zoom` is omitted, the map's current zoom level is used.
      getPixelWorldBounds: function(e) {
        return this.options.crs.getProjectedBounds(e === void 0 ? this.getZoom() : e);
      },
      // @section Other Methods
      // @method getPane(pane: String|HTMLElement): HTMLElement
      // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
      getPane: function(e) {
        return typeof e == "string" ? this._panes[e] : e;
      },
      // @method getPanes(): Object
      // Returns a plain object containing the names of all [panes](#map-pane) as keys and
      // the panes as values.
      getPanes: function() {
        return this._panes;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the map.
      getContainer: function() {
        return this._container;
      },
      // @section Conversion Methods
      // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
      // Returns the scale factor to be applied to a map transition from zoom level
      // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
      getZoomScale: function(e, i) {
        var o = this.options.crs;
        return i = i === void 0 ? this._zoom : i, o.scale(e) / o.scale(i);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(e, i) {
        var o = this.options.crs;
        i = i === void 0 ? this._zoom : i;
        var s = o.zoom(e * o.scale(i));
        return isNaN(s) ? 1 / 0 : s;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(e, i) {
        return i = i === void 0 ? this._zoom : i, this.options.crs.latLngToPoint(K(e), i);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(e, i) {
        return i = i === void 0 ? this._zoom : i, this.options.crs.pointToLatLng(x(e), i);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(e) {
        var i = x(e).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(e) {
        var i = this.project(K(e))._round();
        return i._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(e) {
        return this.options.crs.wrapLatLng(K(e));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(e) {
        return this.options.crs.wrapLatLngBounds(ie(e));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(e, i) {
        return this.options.crs.distance(K(e), K(i));
      },
      // @method containerPointToLayerPoint(point: Point): Point
      // Given a pixel coordinate relative to the map container, returns the corresponding
      // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
      containerPointToLayerPoint: function(e) {
        return x(e).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(e) {
        return x(e).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(e) {
        var i = this.containerPointToLayerPoint(x(e));
        return this.layerPointToLatLng(i);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(e) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(K(e)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(e) {
        return lr(e, this._container);
      },
      // @method mouseEventToLayerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to
      // the [origin pixel](#map-getpixelorigin) where the event took place.
      mouseEventToLayerPoint: function(e) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
      },
      // @method mouseEventToLatLng(ev: MouseEvent): LatLng
      // Given a MouseEvent object, returns geographical coordinate where the
      // event took place.
      mouseEventToLatLng: function(e) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
      },
      // map initialization methods
      _initContainer: function(e) {
        var i = this._container = ar(e);
        if (i) {
          if (i._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        je(i, "scroll", this._onScroll, this), this._containerId = p(i);
      },
      _initLayout: function() {
        var e = this._container;
        this._fadeAnimated = this.options.fadeAnimation && ge.any3d, Ee(e, "leaflet-container" + (ge.touch ? " leaflet-touch" : "") + (ge.retina ? " leaflet-retina" : "") + (ge.ielt9 ? " leaflet-oldie" : "") + (ge.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var i = cn(e, "position");
        i !== "absolute" && i !== "relative" && i !== "fixed" && i !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var e = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ct(this._mapPane, new w(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ee(e.markerPane, "leaflet-zoom-hide"), Ee(e.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(e, i, o) {
        ct(this._mapPane, new w(0, 0));
        var s = !this._loaded;
        this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
        var _ = this._zoom !== i;
        this._moveStart(_, o)._move(e, i)._moveEnd(_), this.fire("viewreset"), s && this.fire("load");
      },
      _moveStart: function(e, i) {
        return e && this.fire("zoomstart"), i || this.fire("movestart"), this;
      },
      _move: function(e, i, o, s) {
        i === void 0 && (i = this._zoom);
        var _ = this._zoom !== i;
        return this._zoom = i, this._lastCenter = e, this._pixelOrigin = this._getNewPixelOrigin(e), s ? o && o.pinch && this.fire("zoom", o) : ((_ || o && o.pinch) && this.fire("zoom", o), this.fire("move", o)), this;
      },
      _moveEnd: function(e) {
        return e && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return V(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(e) {
        ct(this._mapPane, this._getMapPanePos().subtract(e));
      },
      _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      },
      // DOM event handling
      // @section Interaction events
      _initEvents: function(e) {
        this._targets = {}, this._targets[p(this._container)] = this;
        var i = e ? Ke : je;
        i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ge.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        V(this._resizeRequest), this._resizeRequest = j(
          function() {
            this.invalidateSize({ debounceMoveend: !0 });
          },
          this
        );
      },
      _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function() {
        var e = this._getMapPanePos();
        Math.max(Math.abs(e.x), Math.abs(e.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function(e, i) {
        for (var o = [], s, _ = i === "mouseout" || i === "mouseover", m = e.target || e.srcElement, b = !1; m; ) {
          if (s = this._targets[p(m)], s && (i === "click" || i === "preclick") && this._draggableMoved(s)) {
            b = !0;
            break;
          }
          if (s && s.listens(i, !0) && (_ && !Ba(m, e) || (o.push(s), _)) || m === this._container)
            break;
          m = m.parentNode;
        }
        return !o.length && !b && !_ && this.listens(i, !0) && (o = [this]), o;
      },
      _isClickDisabled: function(e) {
        for (; e && e !== this._container; ) {
          if (e._leaflet_disable_click)
            return !0;
          e = e.parentNode;
        }
      },
      _handleDOMEvent: function(e) {
        var i = e.target || e.srcElement;
        if (!(!this._loaded || i._leaflet_disable_events || e.type === "click" && this._isClickDisabled(i))) {
          var o = e.type;
          o === "mousedown" && La(i), this._fireDOMEvent(e, o);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(e, i, o) {
        if (e.type === "click") {
          var s = c({}, e);
          s.type = "preclick", this._fireDOMEvent(s, s.type, o);
        }
        var _ = this._findEventTargets(e, i);
        if (o) {
          for (var m = [], b = 0; b < o.length; b++)
            o[b].listens(i, !0) && m.push(o[b]);
          _ = m.concat(_);
        }
        if (_.length) {
          i === "contextmenu" && St(e);
          var C = _[0], I = {
            originalEvent: e
          };
          if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
            var Y = C.getLatLng && (!C._radius || C._radius <= 10);
            I.containerPoint = Y ? this.latLngToContainerPoint(C.getLatLng()) : this.mouseEventToContainerPoint(e), I.layerPoint = this.containerPointToLayerPoint(I.containerPoint), I.latlng = Y ? C.getLatLng() : this.layerPointToLatLng(I.layerPoint);
          }
          for (b = 0; b < _.length; b++)
            if (_[b].fire(i, I, !0), I.originalEvent._stopped || _[b].options.bubblingMouseEvents === !1 && R(this._mouseEvents, i) !== -1)
              return;
        }
      },
      _draggableMoved: function(e) {
        return e = e.dragging && e.dragging.enabled() ? e : this, e.dragging && e.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var e = 0, i = this._handlers.length; e < i; e++)
          this._handlers[e].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(e, i) {
        return this._loaded ? e.call(i || this, { target: this }) : this.on("load", e, i), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return Mi(this._mapPane) || new w(0, 0);
      },
      _moved: function() {
        var e = this._getMapPanePos();
        return e && !e.equals([0, 0]);
      },
      _getTopLeftPoint: function(e, i) {
        var o = e && i !== void 0 ? this._getNewPixelOrigin(e, i) : this.getPixelOrigin();
        return o.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(e, i) {
        var o = this.getSize()._divideBy(2);
        return this.project(e, i)._subtract(o)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(e, i, o) {
        var s = this._getNewPixelOrigin(o, i);
        return this.project(e, i)._subtract(s);
      },
      _latLngBoundsToNewLayerBounds: function(e, i, o) {
        var s = this._getNewPixelOrigin(o, i);
        return S([
          this.project(e.getSouthWest(), i)._subtract(s),
          this.project(e.getNorthWest(), i)._subtract(s),
          this.project(e.getSouthEast(), i)._subtract(s),
          this.project(e.getNorthEast(), i)._subtract(s)
        ]);
      },
      // layer point of the current center
      _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      // offset of the specified place to the current center in pixels
      _getCenterOffset: function(e) {
        return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint());
      },
      // adjust center for view to get inside bounds
      _limitCenter: function(e, i, o) {
        if (!o)
          return e;
        var s = this.project(e, i), _ = this.getSize().divideBy(2), m = new O(s.subtract(_), s.add(_)), b = this._getBoundsOffset(m, o, i);
        return Math.abs(b.x) <= 1 && Math.abs(b.y) <= 1 ? e : this.unproject(s.add(b), i);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(e, i) {
        if (!i)
          return e;
        var o = this.getPixelBounds(), s = new O(o.min.add(e), o.max.add(e));
        return e.add(this._getBoundsOffset(s, i));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(e, i, o) {
        var s = S(
          this.project(i.getNorthEast(), o),
          this.project(i.getSouthWest(), o)
        ), _ = s.min.subtract(e.min), m = s.max.subtract(e.max), b = this._rebound(_.x, -m.x), C = this._rebound(_.y, -m.y);
        return new w(b, C);
      },
      _rebound: function(e, i) {
        return e + i > 0 ? Math.round(e - i) / 2 : Math.max(0, Math.ceil(e)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function(e) {
        var i = this.getMinZoom(), o = this.getMaxZoom(), s = ge.any3d ? this.options.zoomSnap : 1;
        return s && (e = Math.round(e / s) * s), Math.max(i, Math.min(o, e));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        lt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(e, i) {
        var o = this._getCenterOffset(e)._trunc();
        return (i && i.animate) !== !0 && !this.getSize().contains(o) ? !1 : (this.panBy(o, i), !0);
      },
      _createAnimProxy: function() {
        var e = this._proxy = Be("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(e), this.on("zoomanim", function(i) {
          var o = ja, s = this._proxy.style[o];
          Ai(this._proxy, this.project(i.center, i.zoom), this.getZoomScale(i.zoom, 1)), s === this._proxy.style[o] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        ot(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var e = this.getCenter(), i = this.getZoom();
        Ai(this._proxy, this.project(e, i), this.getZoomScale(i, 1));
      },
      _catchTransitionEnd: function(e) {
        this._animatingZoom && e.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(e, i, o) {
        if (this._animatingZoom)
          return !0;
        if (o = o || {}, !this._zoomAnimated || o.animate === !1 || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var s = this.getZoomScale(i), _ = this._getCenterOffset(e)._divideBy(1 - 1 / s);
        return o.animate !== !0 && !this.getSize().contains(_) ? !1 : (j(function() {
          this._moveStart(!0, o.noMoveStart || !1)._animateZoom(e, i, !0);
        }, this), !0);
      },
      _animateZoom: function(e, i, o, s) {
        this._mapPane && (o && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = i, Ee(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: e,
          zoom: i,
          noUpdate: s
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(u(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && lt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function uc(e, i) {
      return new Re(e, i);
    }
    var Qt = le.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(e) {
        P(this, e);
      },
      /* @section
       * Classes extending L.Control will inherit the following methods:
       *
       * @method getPosition: string
       * Returns the position of the control.
       */
      getPosition: function() {
        return this.options.position;
      },
      // @method setPosition(position: string): this
      // Sets the position of the control.
      setPosition: function(e) {
        var i = this._map;
        return i && i.removeControl(this), this.options.position = e, i && i.addControl(this), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTMLElement that contains the control.
      getContainer: function() {
        return this._container;
      },
      // @method addTo(map: Map): this
      // Adds the control to the given map.
      addTo: function(e) {
        this.remove(), this._map = e;
        var i = this._container = this.onAdd(e), o = this.getPosition(), s = e._controlCorners[o];
        return Ee(i, "leaflet-control"), o.indexOf("bottom") !== -1 ? s.insertBefore(i, s.firstChild) : s.appendChild(i), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (ot(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(e) {
        this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
      }
    }), hn = function(e) {
      return new Qt(e);
    };
    Re.include({
      // @method addControl(control: Control): this
      // Adds the given control to the map
      addControl: function(e) {
        return e.addTo(this), this;
      },
      // @method removeControl(control: Control): this
      // Removes the given control from the map
      removeControl: function(e) {
        return e.remove(), this;
      },
      _initControlPos: function() {
        var e = this._controlCorners = {}, i = "leaflet-", o = this._controlContainer = Be("div", i + "control-container", this._container);
        function s(_, m) {
          var b = i + _ + " " + i + m;
          e[_ + m] = Be("div", b, o);
        }
        s("top", "left"), s("top", "right"), s("bottom", "left"), s("bottom", "right");
      },
      _clearControlPos: function() {
        for (var e in this._controlCorners)
          ot(this._controlCorners[e]);
        ot(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var dr = Qt.extend({
      // @section
      // @aka Control.Layers options
      options: {
        // @option collapsed: Boolean = true
        // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
        collapsed: !0,
        position: "topright",
        // @option autoZIndex: Boolean = true
        // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
        autoZIndex: !0,
        // @option hideSingleBase: Boolean = false
        // If `true`, the base layers in the control will be hidden when there is only one.
        hideSingleBase: !1,
        // @option sortLayers: Boolean = false
        // Whether to sort the layers. When `false`, layers will keep the order
        // in which they were added to the control.
        sortLayers: !1,
        // @option sortFunction: Function = *
        // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
        // that will be used for sorting the layers, when `sortLayers` is `true`.
        // The function receives both the `L.Layer` instances and their names, as in
        // `sortFunction(layerA, layerB, nameA, nameB)`.
        // By default, it sorts layers alphabetically by their name.
        sortFunction: function(e, i, o, s) {
          return o < s ? -1 : s < o ? 1 : 0;
        }
      },
      initialize: function(e, i, o) {
        P(this, o), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var s in e)
          this._addLayer(e[s], s);
        for (s in i)
          this._addLayer(i[s], s, !0);
      },
      onAdd: function(e) {
        this._initLayout(), this._update(), this._map = e, e.on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(e) {
        return Qt.prototype.addTo.call(this, e), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(e, i) {
        return this._addLayer(e, i), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(e, i) {
        return this._addLayer(e, i, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(e) {
        e.off("add remove", this._onLayerChange, this);
        var i = this._getLayer(p(e));
        return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        Ee(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var e = this._map.getSize().y - (this._container.offsetTop + 50);
        return e < this._section.clientHeight ? (Ee(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : lt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return lt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var e = "leaflet-control-layers", i = this._container = Be("div", e), o = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), mn(i), Da(i);
        var s = this._section = Be("section", e + "-list");
        o && (this._map.on("click", this.collapse, this), je(i, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var _ = this._layersLink = Be("a", e + "-toggle", i);
        _.href = "#", _.title = "Layers", _.setAttribute("role", "button"), je(_, {
          keydown: function(m) {
            m.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(m) {
            St(m), this._expandSafely();
          }
        }, this), o || this.expand(), this._baseLayersList = Be("div", e + "-base", s), this._separator = Be("div", e + "-separator", s), this._overlaysList = Be("div", e + "-overlays", s), i.appendChild(s);
      },
      _getLayer: function(e) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && p(this._layers[i].layer) === e)
            return this._layers[i];
      },
      _addLayer: function(e, i, o) {
        this._map && e.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: e,
          name: i,
          overlay: o
        }), this.options.sortLayers && this._layers.sort(u(function(s, _) {
          return this.options.sortFunction(s.layer, _.layer, s.name, _.name);
        }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        Dn(this._baseLayersList), Dn(this._overlaysList), this._layerControlInputs = [];
        var e, i, o, s, _ = 0;
        for (o = 0; o < this._layers.length; o++)
          s = this._layers[o], this._addItem(s), i = i || s.overlay, e = e || !s.overlay, _ += s.overlay ? 0 : 1;
        return this.options.hideSingleBase && (e = e && _ > 1, this._baseLayersList.style.display = e ? "" : "none"), this._separator.style.display = i && e ? "" : "none", this;
      },
      _onLayerChange: function(e) {
        this._handlingClick || this._update();
        var i = this._getLayer(p(e.target)), o = i.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
        o && this._map.fire(o, i);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(e, i) {
        var o = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"' + (i ? ' checked="checked"' : "") + "/>", s = document.createElement("div");
        return s.innerHTML = o, s.firstChild;
      },
      _addItem: function(e) {
        var i = document.createElement("label"), o = this._map.hasLayer(e.layer), s;
        e.overlay ? (s = document.createElement("input"), s.type = "checkbox", s.className = "leaflet-control-layers-selector", s.defaultChecked = o) : s = this._createRadioElement("leaflet-base-layers_" + p(this), o), this._layerControlInputs.push(s), s.layerId = p(e.layer), je(s, "click", this._onInputClick, this);
        var _ = document.createElement("span");
        _.innerHTML = " " + e.name;
        var m = document.createElement("span");
        i.appendChild(m), m.appendChild(s), m.appendChild(_);
        var b = e.overlay ? this._overlaysList : this._baseLayersList;
        return b.appendChild(i), this._checkDisabledLayers(), i;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var e = this._layerControlInputs, i, o, s = [], _ = [];
          this._handlingClick = !0;
          for (var m = e.length - 1; m >= 0; m--)
            i = e[m], o = this._getLayer(i.layerId).layer, i.checked ? s.push(o) : i.checked || _.push(o);
          for (m = 0; m < _.length; m++)
            this._map.hasLayer(_[m]) && this._map.removeLayer(_[m]);
          for (m = 0; m < s.length; m++)
            this._map.hasLayer(s[m]) || this._map.addLayer(s[m]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var e = this._layerControlInputs, i, o, s = this._map.getZoom(), _ = e.length - 1; _ >= 0; _--)
          i = e[_], o = this._getLayer(i.layerId).layer, i.disabled = o.options.minZoom !== void 0 && s < o.options.minZoom || o.options.maxZoom !== void 0 && s > o.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var e = this._section;
        this._preventClick = !0, je(e, "click", St), this.expand();
        var i = this;
        setTimeout(function() {
          Ke(e, "click", St), i._preventClick = !1;
        });
      }
    }), mc = function(e, i, o) {
      return new dr(e, i, o);
    }, $a = Qt.extend({
      // @section
      // @aka Control.Zoom options
      options: {
        position: "topleft",
        // @option zoomInText: String = '<span aria-hidden="true">+</span>'
        // The text set on the 'zoom in' button.
        zoomInText: '<span aria-hidden="true">+</span>',
        // @option zoomInTitle: String = 'Zoom in'
        // The title set on the 'zoom in' button.
        zoomInTitle: "Zoom in",
        // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
        // The text set on the 'zoom out' button.
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        // @option zoomOutTitle: String = 'Zoom out'
        // The title set on the 'zoom out' button.
        zoomOutTitle: "Zoom out"
      },
      onAdd: function(e) {
        var i = "leaflet-control-zoom", o = Be("div", i + " leaflet-bar"), s = this.options;
        return this._zoomInButton = this._createButton(
          s.zoomInText,
          s.zoomInTitle,
          i + "-in",
          o,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          s.zoomOutText,
          s.zoomOutTitle,
          i + "-out",
          o,
          this._zoomOut
        ), this._updateDisabled(), e.on("zoomend zoomlevelschange", this._updateDisabled, this), o;
      },
      onRemove: function(e) {
        e.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function(e) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      },
      _zoomOut: function(e) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      },
      _createButton: function(e, i, o, s, _) {
        var m = Be("a", o, s);
        return m.innerHTML = e, m.href = "#", m.title = i, m.setAttribute("role", "button"), m.setAttribute("aria-label", i), mn(m), je(m, "click", Ri), je(m, "click", _, this), je(m, "click", this._refocusOnMap, this), m;
      },
      _updateDisabled: function() {
        var e = this._map, i = "leaflet-disabled";
        lt(this._zoomInButton, i), lt(this._zoomOutButton, i), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Ee(this._zoomOutButton, i), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Ee(this._zoomInButton, i), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    Re.mergeOptions({
      zoomControl: !0
    }), Re.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new $a(), this.addControl(this.zoomControl));
    });
    var hc = function(e) {
      return new $a(e);
    }, ur = Qt.extend({
      // @section
      // @aka Control.Scale options
      options: {
        position: "bottomleft",
        // @option maxWidth: Number = 100
        // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        maxWidth: 100,
        // @option metric: Boolean = True
        // Whether to show the metric scale line (m/km).
        metric: !0,
        // @option imperial: Boolean = True
        // Whether to show the imperial scale line (mi/ft).
        imperial: !0
        // @option updateWhenIdle: Boolean = false
        // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
      },
      onAdd: function(e) {
        var i = "leaflet-control-scale", o = Be("div", i), s = this.options;
        return this._addScales(s, i + "-line", o), e.on(s.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), o;
      },
      onRemove: function(e) {
        e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(e, i, o) {
        e.metric && (this._mScale = Be("div", i, o)), e.imperial && (this._iScale = Be("div", i, o));
      },
      _update: function() {
        var e = this._map, i = e.getSize().y / 2, o = e.distance(
          e.containerPointToLatLng([0, i]),
          e.containerPointToLatLng([this.options.maxWidth, i])
        );
        this._updateScales(o);
      },
      _updateScales: function(e) {
        this.options.metric && e && this._updateMetric(e), this.options.imperial && e && this._updateImperial(e);
      },
      _updateMetric: function(e) {
        var i = this._getRoundNum(e), o = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, o, i / e);
      },
      _updateImperial: function(e) {
        var i = e * 3.2808399, o, s, _;
        i > 5280 ? (o = i / 5280, s = this._getRoundNum(o), this._updateScale(this._iScale, s + " mi", s / o)) : (_ = this._getRoundNum(i), this._updateScale(this._iScale, _ + " ft", _ / i));
      },
      _updateScale: function(e, i, o) {
        e.style.width = Math.round(this.options.maxWidth * o) + "px", e.innerHTML = i;
      },
      _getRoundNum: function(e) {
        var i = Math.pow(10, (Math.floor(e) + "").length - 1), o = e / i;
        return o = o >= 10 ? 10 : o >= 5 ? 5 : o >= 3 ? 3 : o >= 2 ? 2 : 1, i * o;
      }
    }), pc = function(e) {
      return new ur(e);
    }, fc = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Fa = Qt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (ge.inlineSvg ? fc + " " : "") + "Leaflet</a>"
      },
      initialize: function(e) {
        P(this, e), this._attributions = {};
      },
      onAdd: function(e) {
        e.attributionControl = this, this._container = Be("div", "leaflet-control-attribution"), mn(this._container);
        for (var i in e._layers)
          e._layers[i].getAttribution && this.addAttribution(e._layers[i].getAttribution());
        return this._update(), e.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function(e) {
        e.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function(e) {
        e.layer.getAttribution && (this.addAttribution(e.layer.getAttribution()), e.layer.once("remove", function() {
          this.removeAttribution(e.layer.getAttribution());
        }, this));
      },
      // @method setPrefix(prefix: String|false): this
      // The HTML text shown before the attributions. Pass `false` to disable.
      setPrefix: function(e) {
        return this.options.prefix = e, this._update(), this;
      },
      // @method addAttribution(text: String): this
      // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
      addAttribution: function(e) {
        return e ? (this._attributions[e] || (this._attributions[e] = 0), this._attributions[e]++, this._update(), this) : this;
      },
      // @method removeAttribution(text: String): this
      // Removes an attribution text.
      removeAttribution: function(e) {
        return e ? (this._attributions[e] && (this._attributions[e]--, this._update()), this) : this;
      },
      _update: function() {
        if (this._map) {
          var e = [];
          for (var i in this._attributions)
            this._attributions[i] && e.push(i);
          var o = [];
          this.options.prefix && o.push(this.options.prefix), e.length && o.push(e.join(", ")), this._container.innerHTML = o.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    Re.mergeOptions({
      attributionControl: !0
    }), Re.addInitHook(function() {
      this.options.attributionControl && new Fa().addTo(this);
    });
    var gc = function(e) {
      return new Fa(e);
    };
    Qt.Layers = dr, Qt.Zoom = $a, Qt.Scale = ur, Qt.Attribution = Fa, hn.layers = mc, hn.zoom = hc, hn.scale = pc, hn.attribution = gc;
    var si = le.extend({
      initialize: function(e) {
        this._map = e;
      },
      // @method enable(): this
      // Enables the handler
      enable: function() {
        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
      },
      // @method disable(): this
      // Disables the handler
      disable: function() {
        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
      },
      // @method enabled(): Boolean
      // Returns `true` if the handler is enabled
      enabled: function() {
        return !!this._enabled;
      }
      // @section Extension methods
      // Classes inheriting from `Handler` must implement the two following methods:
      // @method addHooks()
      // Called when the handler is enabled, should add event hooks.
      // @method removeHooks()
      // Called when the handler is disabled, should remove the event hooks added previously.
    });
    si.addTo = function(e, i) {
      return e.addHandler(i, this), this;
    };
    var bc = { Events: te }, mr = ge.touch ? "touchstart mousedown" : "mousedown", Ci = ce.extend({
      options: {
        // @section
        // @aka Draggable options
        // @option clickTolerance: Number = 3
        // The max number of pixels a user can shift the mouse pointer during a click
        // for it to be considered a valid click (as opposed to a mouse drag).
        clickTolerance: 3
      },
      // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
      // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
      initialize: function(e, i, o, s) {
        P(this, s), this._element = e, this._dragStartTarget = i || e, this._preventOutline = o;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (je(this._dragStartTarget, mr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (Ci._dragging === this && this.finishDrag(!0), Ke(this._dragStartTarget, mr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(e) {
        if (this._enabled && (this._moved = !1, !za(this._element, "leaflet-zoom-anim"))) {
          if (e.touches && e.touches.length !== 1) {
            Ci._dragging === this && this.finishDrag();
            return;
          }
          if (!(Ci._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (Ci._dragging = this, this._preventOutline && La(this._element), Na(), _n(), !this._moving)) {
            this.fire("down");
            var i = e.touches ? e.touches[0] : e, o = or(this._element);
            this._startPoint = new w(i.clientX, i.clientY), this._startPos = Mi(this._element), this._parentScale = Aa(o);
            var s = e.type === "mousedown";
            je(document, s ? "mousemove" : "touchmove", this._onMove, this), je(document, s ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(e) {
        if (this._enabled) {
          if (e.touches && e.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var i = e.touches && e.touches.length === 1 ? e.touches[0] : e, o = new w(i.clientX, i.clientY)._subtract(this._startPoint);
          !o.x && !o.y || Math.abs(o.x) + Math.abs(o.y) < this.options.clickTolerance || (o.x /= this._parentScale.x, o.y /= this._parentScale.y, St(e), this._moved || (this.fire("dragstart"), this._moved = !0, Ee(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ee(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, this._lastEvent = e, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var e = { originalEvent: this._lastEvent };
        this.fire("predrag", e), ct(this._element, this._newPos), this.fire("drag", e);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(e) {
        lt(document.body, "leaflet-dragging"), this._lastTarget && (lt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Ke(document, "mousemove touchmove", this._onMove, this), Ke(document, "mouseup touchend touchcancel", this._onUp, this), Ea(), dn();
        var i = this._moved && this._moving;
        this._moving = !1, Ci._dragging = !1, i && this.fire("dragend", {
          noInertia: e,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function hr(e, i, o) {
      var s, _ = [1, 4, 2, 8], m, b, C, I, Y, se, ve, Ie;
      for (m = 0, se = e.length; m < se; m++)
        e[m]._code = Di(e[m], i);
      for (C = 0; C < 4; C++) {
        for (ve = _[C], s = [], m = 0, se = e.length, b = se - 1; m < se; b = m++)
          I = e[m], Y = e[b], I._code & ve ? Y._code & ve || (Ie = Un(Y, I, ve, i, o), Ie._code = Di(Ie, i), s.push(Ie)) : (Y._code & ve && (Ie = Un(Y, I, ve, i, o), Ie._code = Di(Ie, i), s.push(Ie)), s.push(I));
        e = s;
      }
      return e;
    }
    function pr(e, i) {
      var o, s, _, m, b, C, I, Y, se;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      Kt(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var ve = K([0, 0]), Ie = ie(e), Nt = Ie.getNorthWest().distanceTo(Ie.getSouthWest()) * Ie.getNorthEast().distanceTo(Ie.getNorthWest());
      Nt < 1700 && (ve = Ha(e));
      var ft = e.length, Yt = [];
      for (o = 0; o < ft; o++) {
        var Mt = K(e[o]);
        Yt.push(i.project(K([Mt.lat - ve.lat, Mt.lng - ve.lng])));
      }
      for (C = I = Y = 0, o = 0, s = ft - 1; o < ft; s = o++)
        _ = Yt[o], m = Yt[s], b = _.y * m.x - m.y * _.x, I += (_.x + m.x) * b, Y += (_.y + m.y) * b, C += b * 3;
      C === 0 ? se = Yt[0] : se = [I / C, Y / C];
      var nn = i.unproject(x(se));
      return K([nn.lat + ve.lat, nn.lng + ve.lng]);
    }
    function Ha(e) {
      for (var i = 0, o = 0, s = 0, _ = 0; _ < e.length; _++) {
        var m = K(e[_]);
        i += m.lat, o += m.lng, s++;
      }
      return K([i / s, o / s]);
    }
    var yc = {
      __proto__: null,
      clipPolygon: hr,
      polygonCenter: pr,
      centroid: Ha
    };
    function fr(e, i) {
      if (!i || !e.length)
        return e.slice();
      var o = i * i;
      return e = wc(e, o), e = vc(e, o), e;
    }
    function gr(e, i, o) {
      return Math.sqrt(pn(e, i, o, !0));
    }
    function xc(e, i, o) {
      return pn(e, i, o);
    }
    function vc(e, i) {
      var o = e.length, s = typeof Uint8Array < "u" ? Uint8Array : Array, _ = new s(o);
      _[0] = _[o - 1] = 1, Ua(e, _, i, 0, o - 1);
      var m, b = [];
      for (m = 0; m < o; m++)
        _[m] && b.push(e[m]);
      return b;
    }
    function Ua(e, i, o, s, _) {
      var m = 0, b, C, I;
      for (C = s + 1; C <= _ - 1; C++)
        I = pn(e[C], e[s], e[_], !0), I > m && (b = C, m = I);
      m > o && (i[b] = 1, Ua(e, i, o, s, b), Ua(e, i, o, b, _));
    }
    function wc(e, i) {
      for (var o = [e[0]], s = 1, _ = 0, m = e.length; s < m; s++)
        kc(e[s], e[_]) > i && (o.push(e[s]), _ = s);
      return _ < m - 1 && o.push(e[m - 1]), o;
    }
    var br;
    function yr(e, i, o, s, _) {
      var m = s ? br : Di(e, o), b = Di(i, o), C, I, Y;
      for (br = b; ; ) {
        if (!(m | b))
          return [e, i];
        if (m & b)
          return !1;
        C = m || b, I = Un(e, i, C, o, _), Y = Di(I, o), C === m ? (e = I, m = Y) : (i = I, b = Y);
      }
    }
    function Un(e, i, o, s, _) {
      var m = i.x - e.x, b = i.y - e.y, C = s.min, I = s.max, Y, se;
      return o & 8 ? (Y = e.x + m * (I.y - e.y) / b, se = I.y) : o & 4 ? (Y = e.x + m * (C.y - e.y) / b, se = C.y) : o & 2 ? (Y = I.x, se = e.y + b * (I.x - e.x) / m) : o & 1 && (Y = C.x, se = e.y + b * (C.x - e.x) / m), new w(Y, se, _);
    }
    function Di(e, i) {
      var o = 0;
      return e.x < i.min.x ? o |= 1 : e.x > i.max.x && (o |= 2), e.y < i.min.y ? o |= 4 : e.y > i.max.y && (o |= 8), o;
    }
    function kc(e, i) {
      var o = i.x - e.x, s = i.y - e.y;
      return o * o + s * s;
    }
    function pn(e, i, o, s) {
      var _ = i.x, m = i.y, b = o.x - _, C = o.y - m, I = b * b + C * C, Y;
      return I > 0 && (Y = ((e.x - _) * b + (e.y - m) * C) / I, Y > 1 ? (_ = o.x, m = o.y) : Y > 0 && (_ += b * Y, m += C * Y)), b = e.x - _, C = e.y - m, s ? b * b + C * C : new w(_, m);
    }
    function Kt(e) {
      return !A(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
    }
    function xr(e) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Kt(e);
    }
    function vr(e, i) {
      var o, s, _, m, b, C, I, Y;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      Kt(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var se = K([0, 0]), ve = ie(e), Ie = ve.getNorthWest().distanceTo(ve.getSouthWest()) * ve.getNorthEast().distanceTo(ve.getNorthWest());
      Ie < 1700 && (se = Ha(e));
      var Nt = e.length, ft = [];
      for (o = 0; o < Nt; o++) {
        var Yt = K(e[o]);
        ft.push(i.project(K([Yt.lat - se.lat, Yt.lng - se.lng])));
      }
      for (o = 0, s = 0; o < Nt - 1; o++)
        s += ft[o].distanceTo(ft[o + 1]) / 2;
      if (s === 0)
        Y = ft[0];
      else
        for (o = 0, m = 0; o < Nt - 1; o++)
          if (b = ft[o], C = ft[o + 1], _ = b.distanceTo(C), m += _, m > s) {
            I = (m - s) / _, Y = [
              C.x - I * (C.x - b.x),
              C.y - I * (C.y - b.y)
            ];
            break;
          }
      var Mt = i.unproject(x(Y));
      return K([Mt.lat + se.lat, Mt.lng + se.lng]);
    }
    var Sc = {
      __proto__: null,
      simplify: fr,
      pointToSegmentDistance: gr,
      closestPointOnSegment: xc,
      clipSegment: yr,
      _getEdgeIntersection: Un,
      _getBitCode: Di,
      _sqClosestPointOnSegment: pn,
      isFlat: Kt,
      _flat: xr,
      polylineCenter: vr
    }, Za = {
      project: function(e) {
        return new w(e.lng, e.lat);
      },
      unproject: function(e) {
        return new X(e.y, e.x);
      },
      bounds: new O([-180, -90], [180, 90])
    }, Wa = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new O([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(e) {
        var i = Math.PI / 180, o = this.R, s = e.lat * i, _ = this.R_MINOR / o, m = Math.sqrt(1 - _ * _), b = m * Math.sin(s), C = Math.tan(Math.PI / 4 - s / 2) / Math.pow((1 - b) / (1 + b), m / 2);
        return s = -o * Math.log(Math.max(C, 1e-10)), new w(e.lng * i * o, s);
      },
      unproject: function(e) {
        for (var i = 180 / Math.PI, o = this.R, s = this.R_MINOR / o, _ = Math.sqrt(1 - s * s), m = Math.exp(-e.y / o), b = Math.PI / 2 - 2 * Math.atan(m), C = 0, I = 0.1, Y; C < 15 && Math.abs(I) > 1e-7; C++)
          Y = _ * Math.sin(b), Y = Math.pow((1 - Y) / (1 + Y), _ / 2), I = Math.PI / 2 - 2 * Math.atan(m * Y) - b, b += I;
        return new X(b * i, e.x * i / o);
      }
    }, Cc = {
      __proto__: null,
      LonLat: Za,
      Mercator: Wa,
      SphericalMercator: be
    }, jc = c({}, de, {
      code: "EPSG:3395",
      projection: Wa,
      transformation: function() {
        var e = 0.5 / (Math.PI * Wa.R);
        return ne(e, 0.5, -e, 0.5);
      }()
    }), wr = c({}, de, {
      code: "EPSG:4326",
      projection: Za,
      transformation: ne(1 / 180, 1, -1 / 180, 0.5)
    }), zc = c({}, pe, {
      projection: Za,
      transformation: ne(1, 0, -1, 0),
      scale: function(e) {
        return Math.pow(2, e);
      },
      zoom: function(e) {
        return Math.log(e) / Math.LN2;
      },
      distance: function(e, i) {
        var o = i.lng - e.lng, s = i.lat - e.lat;
        return Math.sqrt(o * o + s * s);
      },
      infinite: !0
    });
    pe.Earth = de, pe.EPSG3395 = jc, pe.EPSG3857 = ue, pe.EPSG900913 = re, pe.EPSG4326 = wr, pe.Simple = zc;
    var ei = ce.extend({
      // Classes extending `L.Layer` will inherit the following options:
      options: {
        // @option pane: String = 'overlayPane'
        // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
        pane: "overlayPane",
        // @option attribution: String = null
        // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
        attribution: null,
        bubblingMouseEvents: !0
      },
      /* @section
       * Classes extending `L.Layer` will inherit the following methods:
       *
       * @method addTo(map: Map|LayerGroup): this
       * Adds the layer to the given map or layer group.
       */
      addTo: function(e) {
        return e.addLayer(this), this;
      },
      // @method remove: this
      // Removes the layer from the map it is currently active on.
      remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      // @method removeFrom(map: Map): this
      // Removes the layer from the given map
      //
      // @alternative
      // @method removeFrom(group: LayerGroup): this
      // Removes the layer from the given `LayerGroup`
      removeFrom: function(e) {
        return e && e.removeLayer(this), this;
      },
      // @method getPane(name? : String): HTMLElement
      // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
      getPane: function(e) {
        return this._map.getPane(e ? this.options[e] || e : this.options.pane);
      },
      addInteractiveTarget: function(e) {
        return this._map._targets[p(e)] = this, this;
      },
      removeInteractiveTarget: function(e) {
        return delete this._map._targets[p(e)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(e) {
        var i = e.target;
        if (i.hasLayer(this)) {
          if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
            var o = this.getEvents();
            i.on(o, this), this.once("remove", function() {
              i.off(o, this);
            }, this);
          }
          this.onAdd(i), this.fire("add"), i.fire("layeradd", { layer: this });
        }
      }
    });
    Re.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(e) {
        if (!e._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var i = p(e);
        return this._layers[i] ? this : (this._layers[i] = e, e._mapToAdd = this, e.beforeAdd && e.beforeAdd(this), this.whenReady(e._layerAdd, e), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(e) {
        var i = p(e);
        return this._layers[i] ? (this._loaded && e.onRemove(this), delete this._layers[i], this._loaded && (this.fire("layerremove", { layer: e }), e.fire("remove")), e._map = e._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(e) {
        return p(e) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(e, i) {
        for (var o in this._layers)
          e.call(i, this._layers[o]);
        return this;
      },
      _addLayers: function(e) {
        e = e ? A(e) ? e : [e] : [];
        for (var i = 0, o = e.length; i < o; i++)
          this.addLayer(e[i]);
      },
      _addZoomLimit: function(e) {
        (!isNaN(e.options.maxZoom) || !isNaN(e.options.minZoom)) && (this._zoomBoundLayers[p(e)] = e, this._updateZoomLevels());
      },
      _removeZoomLimit: function(e) {
        var i = p(e);
        this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var e = 1 / 0, i = -1 / 0, o = this._getZoomSpan();
        for (var s in this._zoomBoundLayers) {
          var _ = this._zoomBoundLayers[s].options;
          e = _.minZoom === void 0 ? e : Math.min(e, _.minZoom), i = _.maxZoom === void 0 ? i : Math.max(i, _.maxZoom);
        }
        this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = e === 1 / 0 ? void 0 : e, o !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var Ji = ei.extend({
      initialize: function(e, i) {
        P(this, i), this._layers = {};
        var o, s;
        if (e)
          for (o = 0, s = e.length; o < s; o++)
            this.addLayer(e[o]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(e) {
        var i = this.getLayerId(e);
        return this._layers[i] = e, this._map && this._map.addLayer(e), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(e) {
        var i = e in this._layers ? e : this.getLayerId(e);
        return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(e) {
        var i = typeof e == "number" ? e : this.getLayerId(e);
        return i in this._layers;
      },
      // @method clearLayers(): this
      // Removes all the layers from the group.
      clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      },
      // @method invoke(methodName: String, …): this
      // Calls `methodName` on every layer contained in this group, passing any
      // additional parameters. Has no effect if the layers contained do not
      // implement `methodName`.
      invoke: function(e) {
        var i = Array.prototype.slice.call(arguments, 1), o, s;
        for (o in this._layers)
          s = this._layers[o], s[e] && s[e].apply(s, i);
        return this;
      },
      onAdd: function(e) {
        this.eachLayer(e.addLayer, e);
      },
      onRemove: function(e) {
        this.eachLayer(e.removeLayer, e);
      },
      // @method eachLayer(fn: Function, context?: Object): this
      // Iterates over the layers of the group, optionally specifying context of the iterator function.
      // ```js
      // group.eachLayer(function (layer) {
      // 	layer.bindPopup('Hello');
      // });
      // ```
      eachLayer: function(e, i) {
        for (var o in this._layers)
          e.call(i, this._layers[o]);
        return this;
      },
      // @method getLayer(id: Number): Layer
      // Returns the layer with the given internal ID.
      getLayer: function(e) {
        return this._layers[e];
      },
      // @method getLayers(): Layer[]
      // Returns an array of all the layers added to the group.
      getLayers: function() {
        var e = [];
        return this.eachLayer(e.push, e), e;
      },
      // @method setZIndex(zIndex: Number): this
      // Calls `setZIndex` on every layer contained in this group, passing the z-index.
      setZIndex: function(e) {
        return this.invoke("setZIndex", e);
      },
      // @method getLayerId(layer: Layer): Number
      // Returns the internal ID for a layer
      getLayerId: function(e) {
        return p(e);
      }
    }), Tc = function(e, i) {
      return new Ji(e, i);
    }, ui = Ji.extend({
      addLayer: function(e) {
        return this.hasLayer(e) ? this : (e.addEventParent(this), Ji.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
      },
      removeLayer: function(e) {
        return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), Ji.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
      },
      // @method setStyle(style: Path options): this
      // Sets the given path options to each layer of the group that has a `setStyle` method.
      setStyle: function(e) {
        return this.invoke("setStyle", e);
      },
      // @method bringToFront(): this
      // Brings the layer group to the top of all other layers
      bringToFront: function() {
        return this.invoke("bringToFront");
      },
      // @method bringToBack(): this
      // Brings the layer group to the back of all other layers
      bringToBack: function() {
        return this.invoke("bringToBack");
      },
      // @method getBounds(): LatLngBounds
      // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
      getBounds: function() {
        var e = new Z();
        for (var i in this._layers) {
          var o = this._layers[i];
          e.extend(o.getBounds ? o.getBounds() : o.getLatLng());
        }
        return e;
      }
    }), Pc = function(e, i) {
      return new ui(e, i);
    }, Xi = le.extend({
      /* @section
       * @aka Icon options
       *
       * @option iconUrl: String = null
       * **(required)** The URL to the icon image (absolute or relative to your script path).
       *
       * @option iconRetinaUrl: String = null
       * The URL to a retina sized version of the icon image (absolute or relative to your
       * script path). Used for Retina screen devices.
       *
       * @option iconSize: Point = null
       * Size of the icon image in pixels.
       *
       * @option iconAnchor: Point = null
       * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
       * will be aligned so that this point is at the marker's geographical location. Centered
       * by default if size is specified, also can be set in CSS with negative margins.
       *
       * @option popupAnchor: Point = [0, 0]
       * The coordinates of the point from which popups will "open", relative to the icon anchor.
       *
       * @option tooltipAnchor: Point = [0, 0]
       * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
       *
       * @option shadowUrl: String = null
       * The URL to the icon shadow image. If not specified, no shadow image will be created.
       *
       * @option shadowRetinaUrl: String = null
       *
       * @option shadowSize: Point = null
       * Size of the shadow image in pixels.
       *
       * @option shadowAnchor: Point = null
       * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
       * as iconAnchor if not specified).
       *
       * @option className: String = ''
       * A custom class name to assign to both icon and shadow images. Empty by default.
       */
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1
      },
      initialize: function(e) {
        P(this, e);
      },
      // @method createIcon(oldIcon?: HTMLElement): HTMLElement
      // Called internally when the icon has to be shown, returns a `<img>` HTML element
      // styled according to the options.
      createIcon: function(e) {
        return this._createIcon("icon", e);
      },
      // @method createShadow(oldIcon?: HTMLElement): HTMLElement
      // As `createIcon`, but for the shadow beneath it.
      createShadow: function(e) {
        return this._createIcon("shadow", e);
      },
      _createIcon: function(e, i) {
        var o = this._getIconUrl(e);
        if (!o) {
          if (e === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var s = this._createImg(o, i && i.tagName === "IMG" ? i : null);
        return this._setIconStyles(s, e), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), s;
      },
      _setIconStyles: function(e, i) {
        var o = this.options, s = o[i + "Size"];
        typeof s == "number" && (s = [s, s]);
        var _ = x(s), m = x(i === "shadow" && o.shadowAnchor || o.iconAnchor || _ && _.divideBy(2, !0));
        e.className = "leaflet-marker-" + i + " " + (o.className || ""), m && (e.style.marginLeft = -m.x + "px", e.style.marginTop = -m.y + "px"), _ && (e.style.width = _.x + "px", e.style.height = _.y + "px");
      },
      _createImg: function(e, i) {
        return i = i || document.createElement("img"), i.src = e, i;
      },
      _getIconUrl: function(e) {
        return ge.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
      }
    });
    function Nc(e) {
      return new Xi(e);
    }
    var fn = Xi.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function(e) {
        return typeof fn.imagePath != "string" && (fn.imagePath = this._detectIconPath()), (this.options.imagePath || fn.imagePath) + Xi.prototype._getIconUrl.call(this, e);
      },
      _stripUrl: function(e) {
        var i = function(o, s, _) {
          var m = s.exec(o);
          return m && m[_];
        };
        return e = i(e, /^url\((['"])?(.+)\1\)$/, 2), e && i(e, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var e = Be("div", "leaflet-default-icon-path", document.body), i = cn(e, "background-image") || cn(e, "backgroundImage");
        if (document.body.removeChild(e), i = this._stripUrl(i), i)
          return i;
        var o = document.querySelector('link[href$="leaflet.css"]');
        return o ? o.href.substring(0, o.href.length - 11 - 1) : "";
      }
    }), kr = si.extend({
      initialize: function(e) {
        this._marker = e;
      },
      addHooks: function() {
        var e = this._marker._icon;
        this._draggable || (this._draggable = new Ci(e, e, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), Ee(e, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && lt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(e) {
        var i = this._marker, o = i._map, s = this._marker.options.autoPanSpeed, _ = this._marker.options.autoPanPadding, m = Mi(i._icon), b = o.getPixelBounds(), C = o.getPixelOrigin(), I = S(
          b.min._subtract(C).add(_),
          b.max._subtract(C).subtract(_)
        );
        if (!I.contains(m)) {
          var Y = x(
            (Math.max(I.max.x, m.x) - I.max.x) / (b.max.x - I.max.x) - (Math.min(I.min.x, m.x) - I.min.x) / (b.min.x - I.min.x),
            (Math.max(I.max.y, m.y) - I.max.y) / (b.max.y - I.max.y) - (Math.min(I.min.y, m.y) - I.min.y) / (b.min.y - I.min.y)
          ).multiplyBy(s);
          o.panBy(Y, { animate: !1 }), this._draggable._newPos._add(Y), this._draggable._startPos._add(Y), ct(i._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = j(this._adjustPan.bind(this, e));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(e) {
        this._marker.options.autoPan && (V(this._panRequest), this._panRequest = j(this._adjustPan.bind(this, e)));
      },
      _onDrag: function(e) {
        var i = this._marker, o = i._shadow, s = Mi(i._icon), _ = i._map.layerPointToLatLng(s);
        o && ct(o, s), i._latlng = _, e.latlng = _, e.oldLatLng = this._oldLatLng, i.fire("move", e).fire("drag", e);
      },
      _onDragEnd: function(e) {
        V(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
      }
    }), Zn = ei.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new fn(),
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option keyboard: Boolean = true
        // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
        keyboard: !0,
        // @option title: String = ''
        // Text for the browser tooltip that appear on marker hover (no tooltip by default).
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        title: "",
        // @option alt: String = 'Marker'
        // Text for the `alt` attribute of the icon image.
        // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
        alt: "Marker",
        // @option zIndexOffset: Number = 0
        // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
        zIndexOffset: 0,
        // @option opacity: Number = 1.0
        // The opacity of the marker.
        opacity: 1,
        // @option riseOnHover: Boolean = false
        // If `true`, the marker will get on top of others when you hover the mouse over it.
        riseOnHover: !1,
        // @option riseOffset: Number = 250
        // The z-index offset used for the `riseOnHover` feature.
        riseOffset: 250,
        // @option pane: String = 'markerPane'
        // `Map pane` where the markers icon will be added.
        pane: "markerPane",
        // @option shadowPane: String = 'shadowPane'
        // `Map pane` where the markers shadow will be added.
        shadowPane: "shadowPane",
        // @option bubblingMouseEvents: Boolean = false
        // When `true`, a mouse event on this marker will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !1,
        // @option autoPanOnFocus: Boolean = true
        // When `true`, the map will pan whenever the marker is focused (via
        // e.g. pressing `tab` on the keyboard) to ensure the marker is
        // visible within the map's bounds
        autoPanOnFocus: !0,
        // @section Draggable marker options
        // @option draggable: Boolean = false
        // Whether the marker is draggable with mouse/touch or not.
        draggable: !1,
        // @option autoPan: Boolean = false
        // Whether to pan the map when dragging this marker near its edge or not.
        autoPan: !1,
        // @option autoPanPadding: Point = Point(50, 50)
        // Distance (in pixels to the left/right and to the top/bottom) of the
        // map edge to start panning the map.
        autoPanPadding: [50, 50],
        // @option autoPanSpeed: Number = 10
        // Number of pixels the map should pan by.
        autoPanSpeed: 10
      },
      /* @section
       *
       * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
       */
      initialize: function(e, i) {
        P(this, i), this._latlng = K(e);
      },
      onAdd: function(e) {
        this._zoomAnimated = this._zoomAnimated && e.options.markerZoomAnimation, this._zoomAnimated && e.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function(e) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && e.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      // @method getLatLng: LatLng
      // Returns the current geographical position of the marker.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Changes the marker position to the given point.
      setLatLng: function(e) {
        var i = this._latlng;
        return this._latlng = K(e), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
      },
      // @method setZIndexOffset(offset: Number): this
      // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
      setZIndexOffset: function(e) {
        return this.options.zIndexOffset = e, this.update();
      },
      // @method getIcon: Icon
      // Returns the current icon used by the marker
      getIcon: function() {
        return this.options.icon;
      },
      // @method setIcon(icon: Icon): this
      // Changes the marker icon.
      setIcon: function(e) {
        return this.options.icon = e, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function() {
        return this._icon;
      },
      update: function() {
        if (this._icon && this._map) {
          var e = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(e);
        }
        return this;
      },
      _initIcon: function() {
        var e = this.options, i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), o = e.icon.createIcon(this._icon), s = !1;
        o !== this._icon && (this._icon && this._removeIcon(), s = !0, e.title && (o.title = e.title), o.tagName === "IMG" && (o.alt = e.alt || "")), Ee(o, i), e.keyboard && (o.tabIndex = "0", o.setAttribute("role", "button")), this._icon = o, e.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && je(o, "focus", this._panOnFocus, this);
        var _ = e.icon.createShadow(this._shadow), m = !1;
        _ !== this._shadow && (this._removeShadow(), m = !0), _ && (Ee(_, i), _.alt = ""), this._shadow = _, e.opacity < 1 && this._updateOpacity(), s && this.getPane().appendChild(this._icon), this._initInteraction(), _ && m && this.getPane(e.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Ke(this._icon, "focus", this._panOnFocus, this), ot(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && ot(this._shadow), this._shadow = null;
      },
      _setPos: function(e) {
        this._icon && ct(this._icon, e), this._shadow && ct(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(e) {
        this._icon && (this._icon.style.zIndex = this._zIndex + e);
      },
      _animateZoom: function(e) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
        this._setPos(i);
      },
      _initInteraction: function() {
        if (this.options.interactive && (Ee(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), kr)) {
          var e = this.options.draggable;
          this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new kr(this), e && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(e) {
        return this.options.opacity = e, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var e = this.options.opacity;
        this._icon && qt(this._icon, e), this._shadow && qt(this._shadow, e);
      },
      _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function() {
        this._updateZIndex(0);
      },
      _panOnFocus: function() {
        var e = this._map;
        if (e) {
          var i = this.options.icon.options, o = i.iconSize ? x(i.iconSize) : x(0, 0), s = i.iconAnchor ? x(i.iconAnchor) : x(0, 0);
          e.panInside(this._latlng, {
            paddingTopLeft: s,
            paddingBottomRight: o.subtract(s)
          });
        }
      },
      _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
    function Ec(e, i) {
      return new Zn(e, i);
    }
    var ji = ei.extend({
      // @section
      // @aka Path options
      options: {
        // @option stroke: Boolean = true
        // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
        stroke: !0,
        // @option color: String = '#3388ff'
        // Stroke color
        color: "#3388ff",
        // @option weight: Number = 3
        // Stroke width in pixels
        weight: 3,
        // @option opacity: Number = 1.0
        // Stroke opacity
        opacity: 1,
        // @option lineCap: String= 'round'
        // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
        lineCap: "round",
        // @option lineJoin: String = 'round'
        // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
        lineJoin: "round",
        // @option dashArray: String = null
        // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashArray: null,
        // @option dashOffset: String = null
        // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
        dashOffset: null,
        // @option fill: Boolean = depends
        // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
        fill: !1,
        // @option fillColor: String = *
        // Fill color. Defaults to the value of the [`color`](#path-color) option
        fillColor: null,
        // @option fillOpacity: Number = 0.2
        // Fill opacity.
        fillOpacity: 0.2,
        // @option fillRule: String = 'evenodd'
        // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
        fillRule: "evenodd",
        // className: '',
        // Option inherited from "Interactive layer" abstract class
        interactive: !0,
        // @option bubblingMouseEvents: Boolean = true
        // When `true`, a mouse event on this path will trigger the same event on the map
        // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
        bubblingMouseEvents: !0
      },
      beforeAdd: function(e) {
        this._renderer = e.getRenderer(this);
      },
      onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function() {
        this._renderer._removePath(this);
      },
      // @method redraw(): this
      // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
      redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      },
      // @method setStyle(style: Path options): this
      // Changes the appearance of a Path based on the options in the `Path options` object.
      setStyle: function(e) {
        return P(this, e), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && e && Object.prototype.hasOwnProperty.call(e, "weight") && this._updateBounds()), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all path layers.
      bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all path layers.
      bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function() {
        return this._path;
      },
      _reset: function() {
        this._project(), this._update();
      },
      _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }), Wn = ji.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(e, i) {
        P(this, i), this._latlng = K(e), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(e) {
        var i = this._latlng;
        return this._latlng = K(e), this.redraw(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
      },
      // @method getLatLng(): LatLng
      // Returns the current geographical position of the circle marker
      getLatLng: function() {
        return this._latlng;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle marker. Units are in pixels.
      setRadius: function(e) {
        return this.options.radius = this._radius = e, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of the circle
      getRadius: function() {
        return this._radius;
      },
      setStyle: function(e) {
        var i = e && e.radius || this._radius;
        return ji.prototype.setStyle.call(this, e), this.setRadius(i), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var e = this._radius, i = this._radiusY || e, o = this._clickTolerance(), s = [e + o, i + o];
        this._pxBounds = new O(this._point.subtract(s), this._point.add(s));
      },
      _update: function() {
        this._map && this._updatePath();
      },
      _updatePath: function() {
        this._renderer._updateCircle(this);
      },
      _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e) {
        return e.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
    function Ic(e, i) {
      return new Wn(e, i);
    }
    var Va = Wn.extend({
      initialize: function(e, i, o) {
        if (typeof i == "number" && (i = c({}, o, { radius: i })), P(this, i), this._latlng = K(e), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      // @method setRadius(radius: Number): this
      // Sets the radius of a circle. Units are in meters.
      setRadius: function(e) {
        return this._mRadius = e, this.redraw();
      },
      // @method getRadius(): Number
      // Returns the current radius of a circle. Units are in meters.
      getRadius: function() {
        return this._mRadius;
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        var e = [this._radius, this._radiusY || this._radius];
        return new Z(
          this._map.layerPointToLatLng(this._point.subtract(e)),
          this._map.layerPointToLatLng(this._point.add(e))
        );
      },
      setStyle: ji.prototype.setStyle,
      _project: function() {
        var e = this._latlng.lng, i = this._latlng.lat, o = this._map, s = o.options.crs;
        if (s.distance === de.distance) {
          var _ = Math.PI / 180, m = this._mRadius / de.R / _, b = o.project([i + m, e]), C = o.project([i - m, e]), I = b.add(C).divideBy(2), Y = o.unproject(I).lat, se = Math.acos((Math.cos(m * _) - Math.sin(i * _) * Math.sin(Y * _)) / (Math.cos(i * _) * Math.cos(Y * _))) / _;
          (isNaN(se) || se === 0) && (se = m / Math.cos(Math.PI / 180 * i)), this._point = I.subtract(o.getPixelOrigin()), this._radius = isNaN(se) ? 0 : I.x - o.project([Y, e - se]).x, this._radiusY = I.y - b.y;
        } else {
          var ve = s.unproject(s.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = o.latLngToLayerPoint(this._latlng), this._radius = this._point.x - o.latLngToLayerPoint(ve).x;
        }
        this._updateBounds();
      }
    });
    function Lc(e, i, o) {
      return new Va(e, i, o);
    }
    var mi = ji.extend({
      // @section
      // @aka Polyline options
      options: {
        // @option smoothFactor: Number = 1.0
        // How much to simplify the polyline on each zoom level. More means
        // better performance and smoother look, and less means more accurate representation.
        smoothFactor: 1,
        // @option noClip: Boolean = false
        // Disable polyline clipping.
        noClip: !1
      },
      initialize: function(e, i) {
        P(this, i), this._setLatLngs(e);
      },
      // @method getLatLngs(): LatLng[]
      // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
      getLatLngs: function() {
        return this._latlngs;
      },
      // @method setLatLngs(latlngs: LatLng[]): this
      // Replaces all the points in the polyline with the given array of geographical points.
      setLatLngs: function(e) {
        return this._setLatLngs(e), this.redraw();
      },
      // @method isEmpty(): Boolean
      // Returns `true` if the Polyline has no LatLngs.
      isEmpty: function() {
        return !this._latlngs.length;
      },
      // @method closestLayerPoint(p: Point): Point
      // Returns the point closest to `p` on the Polyline.
      closestLayerPoint: function(e) {
        for (var i = 1 / 0, o = null, s = pn, _, m, b = 0, C = this._parts.length; b < C; b++)
          for (var I = this._parts[b], Y = 1, se = I.length; Y < se; Y++) {
            _ = I[Y - 1], m = I[Y];
            var ve = s(e, _, m, !0);
            ve < i && (i = ve, o = s(e, _, m));
          }
        return o && (o.distance = Math.sqrt(i)), o;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return vr(this._defaultShape(), this._map.options.crs);
      },
      // @method getBounds(): LatLngBounds
      // Returns the `LatLngBounds` of the path.
      getBounds: function() {
        return this._bounds;
      },
      // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
      // Adds a given point to the polyline. By default, adds to the first ring of
      // the polyline in case of a multi-polyline, but can be overridden by passing
      // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
      addLatLng: function(e, i) {
        return i = i || this._defaultShape(), e = K(e), i.push(e), this._bounds.extend(e), this.redraw();
      },
      _setLatLngs: function(e) {
        this._bounds = new Z(), this._latlngs = this._convertLatLngs(e);
      },
      _defaultShape: function() {
        return Kt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(e) {
        for (var i = [], o = Kt(e), s = 0, _ = e.length; s < _; s++)
          o ? (i[s] = K(e[s]), this._bounds.extend(i[s])) : i[s] = this._convertLatLngs(e[s]);
        return i;
      },
      _project: function() {
        var e = new O();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
      },
      _updateBounds: function() {
        var e = this._clickTolerance(), i = new w(e, e);
        this._rawPxBounds && (this._pxBounds = new O([
          this._rawPxBounds.min.subtract(i),
          this._rawPxBounds.max.add(i)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(e, i, o) {
        var s = e[0] instanceof X, _ = e.length, m, b;
        if (s) {
          for (b = [], m = 0; m < _; m++)
            b[m] = this._map.latLngToLayerPoint(e[m]), o.extend(b[m]);
          i.push(b);
        } else
          for (m = 0; m < _; m++)
            this._projectLatlngs(e[m], i, o);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var e = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var i = this._parts, o, s, _, m, b, C, I;
          for (o = 0, _ = 0, m = this._rings.length; o < m; o++)
            for (I = this._rings[o], s = 0, b = I.length; s < b - 1; s++)
              C = yr(I[s], I[s + 1], e, s, !0), C && (i[_] = i[_] || [], i[_].push(C[0]), (C[1] !== I[s + 1] || s === b - 2) && (i[_].push(C[1]), _++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var e = this._parts, i = this.options.smoothFactor, o = 0, s = e.length; o < s; o++)
          e[o] = fr(e[o], i);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e, i) {
        var o, s, _, m, b, C, I = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(e))
          return !1;
        for (o = 0, m = this._parts.length; o < m; o++)
          for (C = this._parts[o], s = 0, b = C.length, _ = b - 1; s < b; _ = s++)
            if (!(!i && s === 0) && gr(e, C[_], C[s]) <= I)
              return !0;
        return !1;
      }
    });
    function Ac(e, i) {
      return new mi(e, i);
    }
    mi._flat = xr;
    var Qi = mi.extend({
      options: {
        fill: !0
      },
      isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return pr(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(e) {
        var i = mi.prototype._convertLatLngs.call(this, e), o = i.length;
        return o >= 2 && i[0] instanceof X && i[0].equals(i[o - 1]) && i.pop(), i;
      },
      _setLatLngs: function(e) {
        mi.prototype._setLatLngs.call(this, e), Kt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return Kt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var e = this._renderer._bounds, i = this.options.weight, o = new w(i, i);
        if (e = new O(e.min.subtract(o), e.max.add(o)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var s = 0, _ = this._rings.length, m; s < _; s++)
            m = hr(this._rings[s], e, !0), m.length && this._parts.push(m);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e) {
        var i = !1, o, s, _, m, b, C, I, Y;
        if (!this._pxBounds || !this._pxBounds.contains(e))
          return !1;
        for (m = 0, I = this._parts.length; m < I; m++)
          for (o = this._parts[m], b = 0, Y = o.length, C = Y - 1; b < Y; C = b++)
            s = o[b], _ = o[C], s.y > e.y != _.y > e.y && e.x < (_.x - s.x) * (e.y - s.y) / (_.y - s.y) + s.x && (i = !i);
        return i || mi.prototype._containsPoint.call(this, e, !0);
      }
    });
    function Mc(e, i) {
      return new Qi(e, i);
    }
    var hi = ui.extend({
      /* @section
       * @aka GeoJSON options
       *
       * @option pointToLayer: Function = *
       * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
       * called when data is added, passing the GeoJSON point feature and its `LatLng`.
       * The default is to spawn a default `Marker`:
       * ```js
       * function(geoJsonPoint, latlng) {
       * 	return L.marker(latlng);
       * }
       * ```
       *
       * @option style: Function = *
       * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
       * called internally when data is added.
       * The default value is to not override any defaults:
       * ```js
       * function (geoJsonFeature) {
       * 	return {}
       * }
       * ```
       *
       * @option onEachFeature: Function = *
       * A `Function` that will be called once for each created `Feature`, after it has
       * been created and styled. Useful for attaching events and popups to features.
       * The default is to do nothing with the newly created layers:
       * ```js
       * function (feature, layer) {}
       * ```
       *
       * @option filter: Function = *
       * A `Function` that will be used to decide whether to include a feature or not.
       * The default is to include all features:
       * ```js
       * function (geoJsonFeature) {
       * 	return true;
       * }
       * ```
       * Note: dynamically changing the `filter` option will have effect only on newly
       * added data. It will _not_ re-evaluate already included features.
       *
       * @option coordsToLatLng: Function = *
       * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
       * The default is the `coordsToLatLng` static method.
       *
       * @option markersInheritOptions: Boolean = false
       * Whether default Markers for "Point" type Features inherit from group options.
       */
      initialize: function(e, i) {
        P(this, i), this._layers = {}, e && this.addData(e);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(e) {
        var i = A(e) ? e : e.features, o, s, _;
        if (i) {
          for (o = 0, s = i.length; o < s; o++)
            _ = i[o], (_.geometries || _.geometry || _.features || _.coordinates) && this.addData(_);
          return this;
        }
        var m = this.options;
        if (m.filter && !m.filter(e))
          return this;
        var b = Vn(e, m);
        return b ? (b.feature = Kn(e), b.defaultOptions = b.options, this.resetStyle(b), m.onEachFeature && m.onEachFeature(e, b), this.addLayer(b)) : this;
      },
      // @method resetStyle( <Path> layer? ): this
      // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
      // If `layer` is omitted, the style of all features in the current layer is reset.
      resetStyle: function(e) {
        return e === void 0 ? this.eachLayer(this.resetStyle, this) : (e.options = c({}, e.defaultOptions), this._setLayerStyle(e, this.options.style), this);
      },
      // @method setStyle( <Function> style ): this
      // Changes styles of GeoJSON vector layers with the given style function.
      setStyle: function(e) {
        return this.eachLayer(function(i) {
          this._setLayerStyle(i, e);
        }, this);
      },
      _setLayerStyle: function(e, i) {
        e.setStyle && (typeof i == "function" && (i = i(e.feature)), e.setStyle(i));
      }
    });
    function Vn(e, i) {
      var o = e.type === "Feature" ? e.geometry : e, s = o ? o.coordinates : null, _ = [], m = i && i.pointToLayer, b = i && i.coordsToLatLng || Ga, C, I, Y, se;
      if (!s && !o)
        return null;
      switch (o.type) {
        case "Point":
          return C = b(s), Sr(m, e, C, i);
        case "MultiPoint":
          for (Y = 0, se = s.length; Y < se; Y++)
            C = b(s[Y]), _.push(Sr(m, e, C, i));
          return new ui(_);
        case "LineString":
        case "MultiLineString":
          return I = Gn(s, o.type === "LineString" ? 0 : 1, b), new mi(I, i);
        case "Polygon":
        case "MultiPolygon":
          return I = Gn(s, o.type === "Polygon" ? 1 : 2, b), new Qi(I, i);
        case "GeometryCollection":
          for (Y = 0, se = o.geometries.length; Y < se; Y++) {
            var ve = Vn({
              geometry: o.geometries[Y],
              type: "Feature",
              properties: e.properties
            }, i);
            ve && _.push(ve);
          }
          return new ui(_);
        case "FeatureCollection":
          for (Y = 0, se = o.features.length; Y < se; Y++) {
            var Ie = Vn(o.features[Y], i);
            Ie && _.push(Ie);
          }
          return new ui(_);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function Sr(e, i, o, s) {
      return e ? e(i, o) : new Zn(o, s && s.markersInheritOptions && s);
    }
    function Ga(e) {
      return new X(e[1], e[0], e[2]);
    }
    function Gn(e, i, o) {
      for (var s = [], _ = 0, m = e.length, b; _ < m; _++)
        b = i ? Gn(e[_], i - 1, o) : (o || Ga)(e[_]), s.push(b);
      return s;
    }
    function qa(e, i) {
      return e = K(e), e.alt !== void 0 ? [z(e.lng, i), z(e.lat, i), z(e.alt, i)] : [z(e.lng, i), z(e.lat, i)];
    }
    function qn(e, i, o, s) {
      for (var _ = [], m = 0, b = e.length; m < b; m++)
        _.push(i ? qn(e[m], Kt(e[m]) ? 0 : i - 1, o, s) : qa(e[m], s));
      return !i && o && _.length > 0 && _.push(_[0].slice()), _;
    }
    function en(e, i) {
      return e.feature ? c({}, e.feature, { geometry: i }) : Kn(i);
    }
    function Kn(e) {
      return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
        type: "Feature",
        properties: {},
        geometry: e
      };
    }
    var Ka = {
      toGeoJSON: function(e) {
        return en(this, {
          type: "Point",
          coordinates: qa(this.getLatLng(), e)
        });
      }
    };
    Zn.include(Ka), Va.include(Ka), Wn.include(Ka), mi.include({
      toGeoJSON: function(e) {
        var i = !Kt(this._latlngs), o = qn(this._latlngs, i ? 1 : 0, !1, e);
        return en(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: o
        });
      }
    }), Qi.include({
      toGeoJSON: function(e) {
        var i = !Kt(this._latlngs), o = i && !Kt(this._latlngs[0]), s = qn(this._latlngs, o ? 2 : i ? 1 : 0, !0, e);
        return i || (s = [s]), en(this, {
          type: (o ? "Multi" : "") + "Polygon",
          coordinates: s
        });
      }
    }), Ji.include({
      toMultiPoint: function(e) {
        var i = [];
        return this.eachLayer(function(o) {
          i.push(o.toGeoJSON(e).geometry.coordinates);
        }), en(this, {
          type: "MultiPoint",
          coordinates: i
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(e) {
        var i = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (i === "MultiPoint")
          return this.toMultiPoint(e);
        var o = i === "GeometryCollection", s = [];
        return this.eachLayer(function(_) {
          if (_.toGeoJSON) {
            var m = _.toGeoJSON(e);
            if (o)
              s.push(m.geometry);
            else {
              var b = Kn(m);
              b.type === "FeatureCollection" ? s.push.apply(s, b.features) : s.push(b);
            }
          }
        }), o ? en(this, {
          geometries: s,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: s
        };
      }
    });
    function Cr(e, i) {
      return new hi(e, i);
    }
    var Oc = Cr, Yn = ei.extend({
      // @section
      // @aka ImageOverlay options
      options: {
        // @option opacity: Number = 1.0
        // The opacity of the image overlay.
        opacity: 1,
        // @option alt: String = ''
        // Text for the `alt` attribute of the image (useful for accessibility).
        alt: "",
        // @option interactive: Boolean = false
        // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
        interactive: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the image.
        // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option errorOverlayUrl: String = ''
        // URL to the overlay image to show in place of the overlay that failed to load.
        errorOverlayUrl: "",
        // @option zIndex: Number = 1
        // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
        zIndex: 1,
        // @option className: String = ''
        // A custom class name to assign to the image. Empty by default.
        className: ""
      },
      initialize: function(e, i, o) {
        this._url = e, this._bounds = ie(i), P(this, o);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ee(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        ot(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      // @method setOpacity(opacity: Number): this
      // Sets the opacity of the overlay.
      setOpacity: function(e) {
        return this.options.opacity = e, this._image && this._updateOpacity(), this;
      },
      setStyle: function(e) {
        return e.opacity && this.setOpacity(e.opacity), this;
      },
      // @method bringToFront(): this
      // Brings the layer to the top of all overlays.
      bringToFront: function() {
        return this._map && Ki(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Yi(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(e) {
        return this._url = e, this._image && (this._image.src = e), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(e) {
        return this._bounds = ie(e), this._map && this._reset(), this;
      },
      getEvents: function() {
        var e = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
      },
      // @method setZIndex(value: Number): this
      // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
      setZIndex: function(e) {
        return this.options.zIndex = e, this._updateZIndex(), this;
      },
      // @method getBounds(): LatLngBounds
      // Get the bounds that this ImageOverlay covers
      getBounds: function() {
        return this._bounds;
      },
      // @method getElement(): HTMLElement
      // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
      // used by this overlay.
      getElement: function() {
        return this._image;
      },
      _initImage: function() {
        var e = this._url.tagName === "IMG", i = this._image = e ? this._url : Be("img");
        if (Ee(i, "leaflet-image-layer"), this._zoomAnimated && Ee(i, "leaflet-zoom-animated"), this.options.className && Ee(i, this.options.className), i.onselectstart = v, i.onmousemove = v, i.onload = u(this.fire, this, "load"), i.onerror = u(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
          this._url = i.src;
          return;
        }
        i.src = this._url, i.alt = this.options.alt;
      },
      _animateZoom: function(e) {
        var i = this._map.getZoomScale(e.zoom), o = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
        Ai(this._image, o, i);
      },
      _reset: function() {
        var e = this._image, i = new O(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), o = i.getSize();
        ct(e, i.min), e.style.width = o.x + "px", e.style.height = o.y + "px";
      },
      _updateOpacity: function() {
        qt(this._image, this.options.opacity);
      },
      _updateZIndex: function() {
        this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function() {
        this.fire("error");
        var e = this.options.errorOverlayUrl;
        e && this._url !== e && (this._url = e, this._image.src = e);
      },
      // @method getCenter(): LatLng
      // Returns the center of the ImageOverlay.
      getCenter: function() {
        return this._bounds.getCenter();
      }
    }), Rc = function(e, i, o) {
      return new Yn(e, i, o);
    }, jr = Yn.extend({
      // @section
      // @aka VideoOverlay options
      options: {
        // @option autoplay: Boolean = true
        // Whether the video starts playing automatically when loaded.
        // On some browsers autoplay will only work with `muted: true`
        autoplay: !0,
        // @option loop: Boolean = true
        // Whether the video will loop back to the beginning when played.
        loop: !0,
        // @option keepAspectRatio: Boolean = true
        // Whether the video will save aspect ratio after the projection.
        // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
        keepAspectRatio: !0,
        // @option muted: Boolean = false
        // Whether the video starts on mute when loaded.
        muted: !1,
        // @option playsInline: Boolean = true
        // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
        playsInline: !0
      },
      _initImage: function() {
        var e = this._url.tagName === "VIDEO", i = this._image = e ? this._url : Be("video");
        if (Ee(i, "leaflet-image-layer"), this._zoomAnimated && Ee(i, "leaflet-zoom-animated"), this.options.className && Ee(i, this.options.className), i.onselectstart = v, i.onmousemove = v, i.onloadeddata = u(this.fire, this, "load"), e) {
          for (var o = i.getElementsByTagName("source"), s = [], _ = 0; _ < o.length; _++)
            s.push(o[_].src);
          this._url = o.length > 0 ? s : [i.src];
          return;
        }
        A(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted, i.playsInline = !!this.options.playsInline;
        for (var m = 0; m < this._url.length; m++) {
          var b = Be("source");
          b.src = this._url[m], i.appendChild(b);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Dc(e, i, o) {
      return new jr(e, i, o);
    }
    var zr = Yn.extend({
      _initImage: function() {
        var e = this._image = this._url;
        Ee(e, "leaflet-image-layer"), this._zoomAnimated && Ee(e, "leaflet-zoom-animated"), this.options.className && Ee(e, this.options.className), e.onselectstart = v, e.onmousemove = v;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Bc(e, i, o) {
      return new zr(e, i, o);
    }
    var li = ei.extend({
      // @section
      // @aka DivOverlay options
      options: {
        // @option interactive: Boolean = false
        // If true, the popup/tooltip will listen to the mouse events.
        interactive: !1,
        // @option offset: Point = Point(0, 0)
        // The offset of the overlay position.
        offset: [0, 0],
        // @option className: String = ''
        // A custom CSS class name to assign to the overlay.
        className: "",
        // @option pane: String = undefined
        // `Map pane` where the overlay will be added.
        pane: void 0,
        // @option content: String|HTMLElement|Function = ''
        // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
        // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
        content: ""
      },
      initialize: function(e, i) {
        e && (e instanceof X || A(e)) ? (this._latlng = K(e), P(this, i)) : (P(this, e), this._source = i), this.options.content && (this._content = this.options.content);
      },
      // @method openOn(map: Map): this
      // Adds the overlay to the map.
      // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
      openOn: function(e) {
        return e = arguments.length ? e : this._source._map, e.hasLayer(this) || e.addLayer(this), this;
      },
      // @method close(): this
      // Closes the overlay.
      // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
      // and `layer.closePopup()`/`.closeTooltip()`.
      close: function() {
        return this._map && this._map.removeLayer(this), this;
      },
      // @method toggle(layer?: Layer): this
      // Opens or closes the overlay bound to layer depending on its current state.
      // Argument may be omitted only for overlay bound to layer.
      // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
      toggle: function(e) {
        return this._map ? this.close() : (arguments.length ? this._source = e : e = this._source, this._prepareOpen(), this.openOn(e._map)), this;
      },
      onAdd: function(e) {
        this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && qt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && qt(this._container, 1), this.bringToFront(), this.options.interactive && (Ee(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(e) {
        e._fadeAnimated ? (qt(this._container, 0), this._removeTimeout = setTimeout(u(ot, void 0, this._container), 200)) : ot(this._container), this.options.interactive && (lt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      // @namespace DivOverlay
      // @method getLatLng: LatLng
      // Returns the geographical point of the overlay.
      getLatLng: function() {
        return this._latlng;
      },
      // @method setLatLng(latlng: LatLng): this
      // Sets the geographical point where the overlay will open.
      setLatLng: function(e) {
        return this._latlng = K(e), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      // @method getContent: String|HTMLElement
      // Returns the content of the overlay.
      getContent: function() {
        return this._content;
      },
      // @method setContent(htmlContent: String|HTMLElement|Function): this
      // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
      // The function should return a `String` or `HTMLElement` to be used in the overlay.
      setContent: function(e) {
        return this._content = e, this.update(), this;
      },
      // @method getElement: String|HTMLElement
      // Returns the HTML container of the overlay.
      getElement: function() {
        return this._container;
      },
      // @method update: null
      // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
      update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function() {
        var e = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
      },
      // @method isOpen: Boolean
      // Returns `true` when the overlay is visible on the map.
      isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      },
      // @method bringToFront: this
      // Brings this overlay in front of other overlays (in the same map pane).
      bringToFront: function() {
        return this._map && Ki(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Yi(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(e) {
        var i = this._source;
        if (!i._map)
          return !1;
        if (i instanceof ui) {
          i = null;
          var o = this._source._layers;
          for (var s in o)
            if (o[s]._map) {
              i = o[s];
              break;
            }
          if (!i)
            return !1;
          this._source = i;
        }
        if (!e)
          if (i.getCenter)
            e = i.getCenter();
          else if (i.getLatLng)
            e = i.getLatLng();
          else if (i.getBounds)
            e = i.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(e), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var e = this._contentNode, i = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof i == "string")
            e.innerHTML = i;
          else {
            for (; e.hasChildNodes(); )
              e.removeChild(e.firstChild);
            e.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var e = this._map.latLngToLayerPoint(this._latlng), i = x(this.options.offset), o = this._getAnchor();
          this._zoomAnimated ? ct(this._container, e.add(o)) : i = i.add(e).add(o);
          var s = this._containerBottom = -i.y, _ = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
          this._container.style.bottom = s + "px", this._container.style.left = _ + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    Re.include({
      _initOverlay: function(e, i, o, s) {
        var _ = i;
        return _ instanceof e || (_ = new e(s).setContent(i)), o && _.setLatLng(o), _;
      }
    }), ei.include({
      _initOverlay: function(e, i, o, s) {
        var _ = o;
        return _ instanceof e ? (P(_, s), _._source = this) : (_ = i && !s ? i : new e(s, this), _.setContent(o)), _;
      }
    });
    var Jn = li.extend({
      // @section
      // @aka Popup options
      options: {
        // @option pane: String = 'popupPane'
        // `Map pane` where the popup will be added.
        pane: "popupPane",
        // @option offset: Point = Point(0, 7)
        // The offset of the popup position.
        offset: [0, 7],
        // @option maxWidth: Number = 300
        // Max width of the popup, in pixels.
        maxWidth: 300,
        // @option minWidth: Number = 50
        // Min width of the popup, in pixels.
        minWidth: 50,
        // @option maxHeight: Number = null
        // If set, creates a scrollable container of the given height
        // inside a popup if its content exceeds it.
        // The scrollable container can be styled using the
        // `leaflet-popup-scrolled` CSS class selector.
        maxHeight: null,
        // @option autoPan: Boolean = true
        // Set it to `false` if you don't want the map to do panning animation
        // to fit the opened popup.
        autoPan: !0,
        // @option autoPanPaddingTopLeft: Point = null
        // The margin between the popup and the top left corner of the map
        // view after autopanning was performed.
        autoPanPaddingTopLeft: null,
        // @option autoPanPaddingBottomRight: Point = null
        // The margin between the popup and the bottom right corner of the map
        // view after autopanning was performed.
        autoPanPaddingBottomRight: null,
        // @option autoPanPadding: Point = Point(5, 5)
        // Equivalent of setting both top left and bottom right autopan padding to the same value.
        autoPanPadding: [5, 5],
        // @option keepInView: Boolean = false
        // Set it to `true` if you want to prevent users from panning the popup
        // off of the screen while it is open.
        keepInView: !1,
        // @option closeButton: Boolean = true
        // Controls the presence of a close button in the popup.
        closeButton: !0,
        // @option autoClose: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the popup closing when another popup is opened.
        autoClose: !0,
        // @option closeOnEscapeKey: Boolean = true
        // Set it to `false` if you want to override the default behavior of
        // the ESC key for closing of the popup.
        closeOnEscapeKey: !0,
        // @option closeOnClick: Boolean = *
        // Set it if you want to override the default behavior of the popup closing when user clicks
        // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
        // @option className: String = ''
        // A custom CSS class name to assign to the popup.
        className: ""
      },
      // @namespace Popup
      // @method openOn(map: Map): this
      // Alternative to `map.openPopup(popup)`.
      // Adds the popup to the map and closes the previous one.
      openOn: function(e) {
        return e = arguments.length ? e : this._source._map, !e.hasLayer(this) && e._popup && e._popup.options.autoClose && e.removeLayer(e._popup), e._popup = this, li.prototype.openOn.call(this, e);
      },
      onAdd: function(e) {
        li.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof ji || this._source.on("preclick", Oi));
      },
      onRemove: function(e) {
        li.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof ji || this._source.off("preclick", Oi));
      },
      getEvents: function() {
        var e = li.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
      },
      _initLayout: function() {
        var e = "leaflet-popup", i = this._container = Be(
          "div",
          e + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), o = this._wrapper = Be("div", e + "-content-wrapper", i);
        if (this._contentNode = Be("div", e + "-content", o), mn(i), Da(this._contentNode), je(i, "contextmenu", Oi), this._tipContainer = Be("div", e + "-tip-container", i), this._tip = Be("div", e + "-tip", this._tipContainer), this.options.closeButton) {
          var s = this._closeButton = Be("a", e + "-close-button", i);
          s.setAttribute("role", "button"), s.setAttribute("aria-label", "Close popup"), s.href = "#close", s.innerHTML = '<span aria-hidden="true">&#215;</span>', je(s, "click", function(_) {
            St(_), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var e = this._contentNode, i = e.style;
        i.width = "", i.whiteSpace = "nowrap";
        var o = e.offsetWidth;
        o = Math.min(o, this.options.maxWidth), o = Math.max(o, this.options.minWidth), i.width = o + 1 + "px", i.whiteSpace = "", i.height = "";
        var s = e.offsetHeight, _ = this.options.maxHeight, m = "leaflet-popup-scrolled";
        _ && s > _ ? (i.height = _ + "px", Ee(e, m)) : lt(e, m), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(e) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), o = this._getAnchor();
        ct(this._container, i.add(o));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var e = this._map, i = parseInt(cn(this._container, "marginBottom"), 10) || 0, o = this._container.offsetHeight + i, s = this._containerWidth, _ = new w(this._containerLeft, -o - this._containerBottom);
          _._add(Mi(this._container));
          var m = e.layerPointToContainerPoint(_), b = x(this.options.autoPanPadding), C = x(this.options.autoPanPaddingTopLeft || b), I = x(this.options.autoPanPaddingBottomRight || b), Y = e.getSize(), se = 0, ve = 0;
          m.x + s + I.x > Y.x && (se = m.x + s - Y.x + I.x), m.x - se - C.x < 0 && (se = m.x - C.x), m.y + o + I.y > Y.y && (ve = m.y + o - Y.y + I.y), m.y - ve - C.y < 0 && (ve = m.y - C.y), (se || ve) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([se, ve]));
        }
      },
      _getAnchor: function() {
        return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), $c = function(e, i) {
      return new Jn(e, i);
    };
    Re.mergeOptions({
      closePopupOnClick: !0
    }), Re.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(e, i, o) {
        return this._initOverlay(Jn, e, i, o).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(e) {
        return e = arguments.length ? e : this._popup, e && e.close(), this;
      }
    }), ei.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(e, i) {
        return this._popup = this._initOverlay(Jn, this._popup, e, i), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      // @method unbindPopup(): this
      // Removes the popup previously bound with `bindPopup`.
      unbindPopup: function() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      // @method openPopup(latlng?: LatLng): this
      // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
      openPopup: function(e) {
        return this._popup && (this instanceof ui || (this._popup._source = this), this._popup._prepareOpen(e || this._latlng) && this._popup.openOn(this._map)), this;
      },
      // @method closePopup(): this
      // Closes the popup bound to this layer if it is open.
      closePopup: function() {
        return this._popup && this._popup.close(), this;
      },
      // @method togglePopup(): this
      // Opens or closes the popup bound to this layer depending on its current state.
      togglePopup: function() {
        return this._popup && this._popup.toggle(this), this;
      },
      // @method isPopupOpen(): boolean
      // Returns `true` if the popup bound to this layer is currently open.
      isPopupOpen: function() {
        return this._popup ? this._popup.isOpen() : !1;
      },
      // @method setPopupContent(content: String|HTMLElement|Popup): this
      // Sets the content of the popup bound to this layer.
      setPopupContent: function(e) {
        return this._popup && this._popup.setContent(e), this;
      },
      // @method getPopup(): Popup
      // Returns the popup bound to this layer.
      getPopup: function() {
        return this._popup;
      },
      _openPopup: function(e) {
        if (!(!this._popup || !this._map)) {
          Ri(e);
          var i = e.layer || e.target;
          if (this._popup._source === i && !(i instanceof ji)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(e.latlng);
            return;
          }
          this._popup._source = i, this.openPopup(e.latlng);
        }
      },
      _movePopup: function(e) {
        this._popup.setLatLng(e.latlng);
      },
      _onKeyPress: function(e) {
        e.originalEvent.keyCode === 13 && this._openPopup(e);
      }
    });
    var Xn = li.extend({
      // @section
      // @aka Tooltip options
      options: {
        // @option pane: String = 'tooltipPane'
        // `Map pane` where the tooltip will be added.
        pane: "tooltipPane",
        // @option offset: Point = Point(0, 0)
        // Optional offset of the tooltip position.
        offset: [0, 0],
        // @option direction: String = 'auto'
        // Direction where to open the tooltip. Possible values are: `right`, `left`,
        // `top`, `bottom`, `center`, `auto`.
        // `auto` will dynamically switch between `right` and `left` according to the tooltip
        // position on the map.
        direction: "auto",
        // @option permanent: Boolean = false
        // Whether to open the tooltip permanently or only on mouseover.
        permanent: !1,
        // @option sticky: Boolean = false
        // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
        sticky: !1,
        // @option opacity: Number = 0.9
        // Tooltip container opacity.
        opacity: 0.9
      },
      onAdd: function(e) {
        li.prototype.onAdd.call(this, e), this.setOpacity(this.options.opacity), e.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(e) {
        li.prototype.onRemove.call(this, e), e.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var e = li.prototype.getEvents.call(this);
        return this.options.permanent || (e.preclick = this.close), e;
      },
      _initLayout: function() {
        var e = "leaflet-tooltip", i = e + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = Be("div", i), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + p(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(e) {
        var i, o, s = this._map, _ = this._container, m = s.latLngToContainerPoint(s.getCenter()), b = s.layerPointToContainerPoint(e), C = this.options.direction, I = _.offsetWidth, Y = _.offsetHeight, se = x(this.options.offset), ve = this._getAnchor();
        C === "top" ? (i = I / 2, o = Y) : C === "bottom" ? (i = I / 2, o = 0) : C === "center" ? (i = I / 2, o = Y / 2) : C === "right" ? (i = 0, o = Y / 2) : C === "left" ? (i = I, o = Y / 2) : b.x < m.x ? (C = "right", i = 0, o = Y / 2) : (C = "left", i = I + (se.x + ve.x) * 2, o = Y / 2), e = e.subtract(x(i, o, !0)).add(se).add(ve), lt(_, "leaflet-tooltip-right"), lt(_, "leaflet-tooltip-left"), lt(_, "leaflet-tooltip-top"), lt(_, "leaflet-tooltip-bottom"), Ee(_, "leaflet-tooltip-" + C), ct(_, e);
      },
      _updatePosition: function() {
        var e = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(e);
      },
      setOpacity: function(e) {
        this.options.opacity = e, this._container && qt(this._container, e);
      },
      _animateZoom: function(e) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
        this._setPosition(i);
      },
      _getAnchor: function() {
        return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Fc = function(e, i) {
      return new Xn(e, i);
    };
    Re.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(e, i, o) {
        return this._initOverlay(Xn, e, i, o).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(e) {
        return e.close(), this;
      }
    }), ei.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(e, i) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Xn, this._tooltip, e, i), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(e) {
        if (!(!e && this._tooltipHandlersAdded)) {
          var i = e ? "off" : "on", o = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? o.add = this._openTooltip : (o.mouseover = this._openTooltip, o.mouseout = this.closeTooltip, o.click = this._openTooltip, this._map ? this._addFocusListeners() : o.add = this._addFocusListeners), this._tooltip.options.sticky && (o.mousemove = this._moveTooltip), this[i](o), this._tooltipHandlersAdded = !e;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(e) {
        return this._tooltip && (this instanceof ui || (this._tooltip._source = this), this._tooltip._prepareOpen(e) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      // @method closeTooltip(): this
      // Closes the tooltip bound to this layer if it is open.
      closeTooltip: function() {
        if (this._tooltip)
          return this._tooltip.close();
      },
      // @method toggleTooltip(): this
      // Opens or closes the tooltip bound to this layer depending on its current state.
      toggleTooltip: function() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      // @method isTooltipOpen(): boolean
      // Returns `true` if the tooltip bound to this layer is currently open.
      isTooltipOpen: function() {
        return this._tooltip.isOpen();
      },
      // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
      // Sets the content of the tooltip bound to this layer.
      setTooltipContent: function(e) {
        return this._tooltip && this._tooltip.setContent(e), this;
      },
      // @method getTooltip(): Tooltip
      // Returns the tooltip bound to this layer.
      getTooltip: function() {
        return this._tooltip;
      },
      _addFocusListeners: function() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function(e) {
        var i = typeof e.getElement == "function" && e.getElement();
        i && (je(i, "focus", function() {
          this._tooltip._source = e, this.openTooltip();
        }, this), je(i, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(e) {
        var i = typeof e.getElement == "function" && e.getElement();
        i && i.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(e) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var i = this;
            this._map.once("moveend", function() {
              i._openOnceFlag = !1, i._openTooltip(e);
            });
            return;
          }
          this._tooltip._source = e.layer || e.target, this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
        }
      },
      _moveTooltip: function(e) {
        var i = e.latlng, o, s;
        this._tooltip.options.sticky && e.originalEvent && (o = this._map.mouseEventToContainerPoint(e.originalEvent), s = this._map.containerPointToLayerPoint(o), i = this._map.layerPointToLatLng(s)), this._tooltip.setLatLng(i);
      }
    });
    var Tr = Xi.extend({
      options: {
        // @section
        // @aka DivIcon options
        iconSize: [12, 12],
        // also can be set through CSS
        // iconAnchor: (Point),
        // popupAnchor: (Point),
        // @option html: String|HTMLElement = ''
        // Custom HTML code to put inside the div element, empty by default. Alternatively,
        // an instance of `HTMLElement`.
        html: !1,
        // @option bgPos: Point = [0, 0]
        // Optional relative position of the background, in pixels
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function(e) {
        var i = e && e.tagName === "DIV" ? e : document.createElement("div"), o = this.options;
        if (o.html instanceof Element ? (Dn(i), i.appendChild(o.html)) : i.innerHTML = o.html !== !1 ? o.html : "", o.bgPos) {
          var s = x(o.bgPos);
          i.style.backgroundPosition = -s.x + "px " + -s.y + "px";
        }
        return this._setIconStyles(i, "icon"), i;
      },
      createShadow: function() {
        return null;
      }
    });
    function Hc(e) {
      return new Tr(e);
    }
    Xi.Default = fn;
    var gn = ei.extend({
      // @section
      // @aka GridLayer options
      options: {
        // @option tileSize: Number|Point = 256
        // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
        tileSize: 256,
        // @option opacity: Number = 1.0
        // Opacity of the tiles. Can be used in the `createTile()` function.
        opacity: 1,
        // @option updateWhenIdle: Boolean = (depends)
        // Load new tiles only when panning ends.
        // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
        // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
        // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
        updateWhenIdle: ge.mobile,
        // @option updateWhenZooming: Boolean = true
        // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
        updateWhenZooming: !0,
        // @option updateInterval: Number = 200
        // Tiles will not update more than once every `updateInterval` milliseconds when panning.
        updateInterval: 200,
        // @option zIndex: Number = 1
        // The explicit zIndex of the tile layer.
        zIndex: 1,
        // @option bounds: LatLngBounds = undefined
        // If set, tiles will only be loaded inside the set `LatLngBounds`.
        bounds: null,
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = undefined
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: void 0,
        // @option maxNativeZoom: Number = undefined
        // Maximum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
        // from `maxNativeZoom` level and auto-scaled.
        maxNativeZoom: void 0,
        // @option minNativeZoom: Number = undefined
        // Minimum zoom number the tile source has available. If it is specified,
        // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
        // from `minNativeZoom` level and auto-scaled.
        minNativeZoom: void 0,
        // @option noWrap: Boolean = false
        // Whether the layer is wrapped around the antimeridian. If `true`, the
        // GridLayer will only be displayed once at low zoom levels. Has no
        // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
        // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
        // tiles outside the CRS limits.
        noWrap: !1,
        // @option pane: String = 'tilePane'
        // `Map pane` where the grid layer will be added.
        pane: "tilePane",
        // @option className: String = ''
        // A custom class name to assign to the tile layer. Empty by default.
        className: "",
        // @option keepBuffer: Number = 2
        // When panning the map, keep this many rows and columns of tiles before unloading them.
        keepBuffer: 2
      },
      initialize: function(e) {
        P(this, e);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(e) {
        e._addZoomLimit(this);
      },
      onRemove: function(e) {
        this._removeAllTiles(), ot(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Ki(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Yi(this._container), this._setAutoZIndex(Math.min)), this;
      },
      // @method getContainer: HTMLElement
      // Returns the HTML element that contains the tiles for this layer.
      getContainer: function() {
        return this._container;
      },
      // @method setOpacity(opacity: Number): this
      // Changes the [opacity](#gridlayer-opacity) of the grid layer.
      setOpacity: function(e) {
        return this.options.opacity = e, this._updateOpacity(), this;
      },
      // @method setZIndex(zIndex: Number): this
      // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
      setZIndex: function(e) {
        return this.options.zIndex = e, this._updateZIndex(), this;
      },
      // @method isLoading: Boolean
      // Returns `true` if any tile in the grid layer has not finished loading.
      isLoading: function() {
        return this._loading;
      },
      // @method redraw: this
      // Causes the layer to clear all the tiles and request them again.
      redraw: function() {
        if (this._map) {
          this._removeAllTiles();
          var e = this._clampZoom(this._map.getZoom());
          e !== this._tileZoom && (this._tileZoom = e, this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function() {
        var e = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = g(this._onMoveEnd, this.options.updateInterval, this)), e.move = this._onMove), this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
      },
      // @section Extension methods
      // Layers extending `GridLayer` shall reimplement the following method.
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, must be overridden by classes extending `GridLayer`.
      // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
      // is specified, it must be called when the tile has finished loading and drawing.
      createTile: function() {
        return document.createElement("div");
      },
      // @section
      // @method getTileSize: Point
      // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
      getTileSize: function() {
        var e = this.options.tileSize;
        return e instanceof w ? e : new w(e, e);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(e) {
        for (var i = this.getPane().children, o = -e(-1 / 0, 1 / 0), s = 0, _ = i.length, m; s < _; s++)
          m = i[s].style.zIndex, i[s] !== this._container && m && (o = e(o, +m));
        isFinite(o) && (this.options.zIndex = o + e(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !ge.ielt9) {
          qt(this._container, this.options.opacity);
          var e = +/* @__PURE__ */ new Date(), i = !1, o = !1;
          for (var s in this._tiles) {
            var _ = this._tiles[s];
            if (!(!_.current || !_.loaded)) {
              var m = Math.min(1, (e - _.loaded) / 200);
              qt(_.el, m), m < 1 ? i = !0 : (_.active ? o = !0 : this._onOpaqueTile(_), _.active = !0);
            }
          }
          o && !this._noPrune && this._pruneTiles(), i && (V(this._fadeFrame), this._fadeFrame = j(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function() {
        this._container || (this._container = Be("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var e = this._tileZoom, i = this.options.maxZoom;
        if (e !== void 0) {
          for (var o in this._levels)
            o = Number(o), this._levels[o].el.children.length || o === e ? (this._levels[o].el.style.zIndex = i - Math.abs(e - o), this._onUpdateLevel(o)) : (ot(this._levels[o].el), this._removeTilesAtZoom(o), this._onRemoveLevel(o), delete this._levels[o]);
          var s = this._levels[e], _ = this._map;
          return s || (s = this._levels[e] = {}, s.el = Be("div", "leaflet-tile-container leaflet-zoom-animated", this._container), s.el.style.zIndex = i, s.origin = _.project(_.unproject(_.getPixelOrigin()), e).round(), s.zoom = e, this._setZoomTransform(s, _.getCenter(), _.getZoom()), v(s.el.offsetWidth), this._onCreateLevel(s)), this._level = s, s;
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function() {
        if (this._map) {
          var e, i, o = this._map.getZoom();
          if (o > this.options.maxZoom || o < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (e in this._tiles)
            i = this._tiles[e], i.retain = i.current;
          for (e in this._tiles)
            if (i = this._tiles[e], i.current && !i.active) {
              var s = i.coords;
              this._retainParent(s.x, s.y, s.z, s.z - 5) || this._retainChildren(s.x, s.y, s.z, s.z + 2);
            }
          for (e in this._tiles)
            this._tiles[e].retain || this._removeTile(e);
        }
      },
      _removeTilesAtZoom: function(e) {
        for (var i in this._tiles)
          this._tiles[i].coords.z === e && this._removeTile(i);
      },
      _removeAllTiles: function() {
        for (var e in this._tiles)
          this._removeTile(e);
      },
      _invalidateAll: function() {
        for (var e in this._levels)
          ot(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(e, i, o, s) {
        var _ = Math.floor(e / 2), m = Math.floor(i / 2), b = o - 1, C = new w(+_, +m);
        C.z = +b;
        var I = this._tileCoordsToKey(C), Y = this._tiles[I];
        return Y && Y.active ? (Y.retain = !0, !0) : (Y && Y.loaded && (Y.retain = !0), b > s ? this._retainParent(_, m, b, s) : !1);
      },
      _retainChildren: function(e, i, o, s) {
        for (var _ = 2 * e; _ < 2 * e + 2; _++)
          for (var m = 2 * i; m < 2 * i + 2; m++) {
            var b = new w(_, m);
            b.z = o + 1;
            var C = this._tileCoordsToKey(b), I = this._tiles[C];
            if (I && I.active) {
              I.retain = !0;
              continue;
            } else I && I.loaded && (I.retain = !0);
            o + 1 < s && this._retainChildren(_, m, o + 1, s);
          }
      },
      _resetView: function(e) {
        var i = e && (e.pinch || e.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
      },
      _animateZoom: function(e) {
        this._setView(e.center, e.zoom, !0, e.noUpdate);
      },
      _clampZoom: function(e) {
        var i = this.options;
        return i.minNativeZoom !== void 0 && e < i.minNativeZoom ? i.minNativeZoom : i.maxNativeZoom !== void 0 && i.maxNativeZoom < e ? i.maxNativeZoom : e;
      },
      _setView: function(e, i, o, s) {
        var _ = Math.round(i);
        this.options.maxZoom !== void 0 && _ > this.options.maxZoom || this.options.minZoom !== void 0 && _ < this.options.minZoom ? _ = void 0 : _ = this._clampZoom(_);
        var m = this.options.updateWhenZooming && _ !== this._tileZoom;
        (!s || m) && (this._tileZoom = _, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), _ !== void 0 && this._update(e), o || this._pruneTiles(), this._noPrune = !!o), this._setZoomTransforms(e, i);
      },
      _setZoomTransforms: function(e, i) {
        for (var o in this._levels)
          this._setZoomTransform(this._levels[o], e, i);
      },
      _setZoomTransform: function(e, i, o) {
        var s = this._map.getZoomScale(o, e.zoom), _ = e.origin.multiplyBy(s).subtract(this._map._getNewPixelOrigin(i, o)).round();
        ge.any3d ? Ai(e.el, _, s) : ct(e.el, _);
      },
      _resetGrid: function() {
        var e = this._map, i = e.options.crs, o = this._tileSize = this.getTileSize(), s = this._tileZoom, _ = this._map.getPixelWorldBounds(this._tileZoom);
        _ && (this._globalTileRange = this._pxBoundsToTileRange(_)), this._wrapX = i.wrapLng && !this.options.noWrap && [
          Math.floor(e.project([0, i.wrapLng[0]], s).x / o.x),
          Math.ceil(e.project([0, i.wrapLng[1]], s).x / o.y)
        ], this._wrapY = i.wrapLat && !this.options.noWrap && [
          Math.floor(e.project([i.wrapLat[0], 0], s).y / o.x),
          Math.ceil(e.project([i.wrapLat[1], 0], s).y / o.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(e) {
        var i = this._map, o = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(), s = i.getZoomScale(o, this._tileZoom), _ = i.project(e, this._tileZoom).floor(), m = i.getSize().divideBy(s * 2);
        return new O(_.subtract(m), _.add(m));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(e) {
        var i = this._map;
        if (i) {
          var o = this._clampZoom(i.getZoom());
          if (e === void 0 && (e = i.getCenter()), this._tileZoom !== void 0) {
            var s = this._getTiledPixelBounds(e), _ = this._pxBoundsToTileRange(s), m = _.getCenter(), b = [], C = this.options.keepBuffer, I = new O(
              _.getBottomLeft().subtract([C, -C]),
              _.getTopRight().add([C, -C])
            );
            if (!(isFinite(_.min.x) && isFinite(_.min.y) && isFinite(_.max.x) && isFinite(_.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var Y in this._tiles) {
              var se = this._tiles[Y].coords;
              (se.z !== this._tileZoom || !I.contains(new w(se.x, se.y))) && (this._tiles[Y].current = !1);
            }
            if (Math.abs(o - this._tileZoom) > 1) {
              this._setView(e, o);
              return;
            }
            for (var ve = _.min.y; ve <= _.max.y; ve++)
              for (var Ie = _.min.x; Ie <= _.max.x; Ie++) {
                var Nt = new w(Ie, ve);
                if (Nt.z = this._tileZoom, !!this._isValidTile(Nt)) {
                  var ft = this._tiles[this._tileCoordsToKey(Nt)];
                  ft ? ft.current = !0 : b.push(Nt);
                }
              }
            if (b.sort(function(Mt, nn) {
              return Mt.distanceTo(m) - nn.distanceTo(m);
            }), b.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var Yt = document.createDocumentFragment();
              for (Ie = 0; Ie < b.length; Ie++)
                this._addTile(b[Ie], Yt);
              this._level.el.appendChild(Yt);
            }
          }
        }
      },
      _isValidTile: function(e) {
        var i = this._map.options.crs;
        if (!i.infinite) {
          var o = this._globalTileRange;
          if (!i.wrapLng && (e.x < o.min.x || e.x > o.max.x) || !i.wrapLat && (e.y < o.min.y || e.y > o.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var s = this._tileCoordsToBounds(e);
        return ie(this.options.bounds).overlaps(s);
      },
      _keyToBounds: function(e) {
        return this._tileCoordsToBounds(this._keyToTileCoords(e));
      },
      _tileCoordsToNwSe: function(e) {
        var i = this._map, o = this.getTileSize(), s = e.scaleBy(o), _ = s.add(o), m = i.unproject(s, e.z), b = i.unproject(_, e.z);
        return [m, b];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(e) {
        var i = this._tileCoordsToNwSe(e), o = new Z(i[0], i[1]);
        return this.options.noWrap || (o = this._map.wrapLatLngBounds(o)), o;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(e) {
        return e.x + ":" + e.y + ":" + e.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(e) {
        var i = e.split(":"), o = new w(+i[0], +i[1]);
        return o.z = +i[2], o;
      },
      _removeTile: function(e) {
        var i = this._tiles[e];
        i && (ot(i.el), delete this._tiles[e], this.fire("tileunload", {
          tile: i.el,
          coords: this._keyToTileCoords(e)
        }));
      },
      _initTile: function(e) {
        Ee(e, "leaflet-tile");
        var i = this.getTileSize();
        e.style.width = i.x + "px", e.style.height = i.y + "px", e.onselectstart = v, e.onmousemove = v, ge.ielt9 && this.options.opacity < 1 && qt(e, this.options.opacity);
      },
      _addTile: function(e, i) {
        var o = this._getTilePos(e), s = this._tileCoordsToKey(e), _ = this.createTile(this._wrapCoords(e), u(this._tileReady, this, e));
        this._initTile(_), this.createTile.length < 2 && j(u(this._tileReady, this, e, null, _)), ct(_, o), this._tiles[s] = {
          el: _,
          coords: e,
          current: !0
        }, i.appendChild(_), this.fire("tileloadstart", {
          tile: _,
          coords: e
        });
      },
      _tileReady: function(e, i, o) {
        i && this.fire("tileerror", {
          error: i,
          tile: o,
          coords: e
        });
        var s = this._tileCoordsToKey(e);
        o = this._tiles[s], o && (o.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (qt(o.el, 0), V(this._fadeFrame), this._fadeFrame = j(this._updateOpacity, this)) : (o.active = !0, this._pruneTiles()), i || (Ee(o.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: o.el,
          coords: e
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), ge.ielt9 || !this._map._fadeAnimated ? j(this._pruneTiles, this) : setTimeout(u(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(e) {
        return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(e) {
        var i = new w(
          this._wrapX ? y(e.x, this._wrapX) : e.x,
          this._wrapY ? y(e.y, this._wrapY) : e.y
        );
        return i.z = e.z, i;
      },
      _pxBoundsToTileRange: function(e) {
        var i = this.getTileSize();
        return new O(
          e.min.unscaleBy(i).floor(),
          e.max.unscaleBy(i).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var e in this._tiles)
          if (!this._tiles[e].loaded)
            return !1;
        return !0;
      }
    });
    function Uc(e) {
      return new gn(e);
    }
    var tn = gn.extend({
      // @section
      // @aka TileLayer options
      options: {
        // @option minZoom: Number = 0
        // The minimum zoom level down to which this layer will be displayed (inclusive).
        minZoom: 0,
        // @option maxZoom: Number = 18
        // The maximum zoom level up to which this layer will be displayed (inclusive).
        maxZoom: 18,
        // @option subdomains: String|String[] = 'abc'
        // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
        subdomains: "abc",
        // @option errorTileUrl: String = ''
        // URL to the tile image to show in place of the tile that failed to load.
        errorTileUrl: "",
        // @option zoomOffset: Number = 0
        // The zoom number used in tile URLs will be offset with this value.
        zoomOffset: 0,
        // @option tms: Boolean = false
        // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
        tms: !1,
        // @option zoomReverse: Boolean = false
        // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
        zoomReverse: !1,
        // @option detectRetina: Boolean = false
        // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
        detectRetina: !1,
        // @option crossOrigin: Boolean|String = false
        // Whether the crossOrigin attribute will be added to the tiles.
        // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
        // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
        crossOrigin: !1,
        // @option referrerPolicy: Boolean|String = false
        // Whether the referrerPolicy attribute will be added to the tiles.
        // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
        // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
        // (e.g. to validate an API token).
        // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
        referrerPolicy: !1
      },
      initialize: function(e, i) {
        this._url = e, i = P(this, i), i.detectRetina && ge.retina && i.maxZoom > 0 ? (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom = Math.min(i.maxZoom, i.minZoom + 1)) : (i.zoomOffset++, i.maxZoom = Math.max(i.minZoom, i.maxZoom - 1)), i.minZoom = Math.max(0, i.minZoom)) : i.zoomReverse ? i.minZoom = Math.min(i.maxZoom, i.minZoom) : i.maxZoom = Math.max(i.minZoom, i.maxZoom), typeof i.subdomains == "string" && (i.subdomains = i.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(e, i) {
        return this._url === e && i === void 0 && (i = !0), this._url = e, i || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(e, i) {
        var o = document.createElement("img");
        return je(o, "load", u(this._tileOnLoad, this, i, o)), je(o, "error", u(this._tileOnError, this, i, o)), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (o.referrerPolicy = this.options.referrerPolicy), o.alt = "", o.src = this.getTileUrl(e), o;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(e) {
        var i = {
          r: ge.retina ? "@2x" : "",
          s: this._getSubdomain(e),
          x: e.x,
          y: e.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var o = this._globalTileRange.max.y - e.y;
          this.options.tms && (i.y = o), i["-y"] = o;
        }
        return H(this._url, c(i, this.options));
      },
      _tileOnLoad: function(e, i) {
        ge.ielt9 ? setTimeout(u(e, this, null, i), 0) : e(null, i);
      },
      _tileOnError: function(e, i, o) {
        var s = this.options.errorTileUrl;
        s && i.getAttribute("src") !== s && (i.src = s), e(o, i);
      },
      _onTileRemove: function(e) {
        e.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var e = this._tileZoom, i = this.options.maxZoom, o = this.options.zoomReverse, s = this.options.zoomOffset;
        return o && (e = i - e), e + s;
      },
      _getSubdomain: function(e) {
        var i = Math.abs(e.x + e.y) % this.options.subdomains.length;
        return this.options.subdomains[i];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var e, i;
        for (e in this._tiles)
          if (this._tiles[e].coords.z !== this._tileZoom && (i = this._tiles[e].el, i.onload = v, i.onerror = v, !i.complete)) {
            i.src = T;
            var o = this._tiles[e].coords;
            ot(i), delete this._tiles[e], this.fire("tileabort", {
              tile: i,
              coords: o
            });
          }
      },
      _removeTile: function(e) {
        var i = this._tiles[e];
        if (i)
          return i.el.setAttribute("src", T), gn.prototype._removeTile.call(this, e);
      },
      _tileReady: function(e, i, o) {
        if (!(!this._map || o && o.getAttribute("src") === T))
          return gn.prototype._tileReady.call(this, e, i, o);
      }
    });
    function Pr(e, i) {
      return new tn(e, i);
    }
    var Nr = tn.extend({
      // @section
      // @aka TileLayer.WMS options
      // If any custom options not documented here are used, they will be sent to the
      // WMS server as extra parameters in each request URL. This can be useful for
      // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        // @option layers: String = ''
        // **(required)** Comma-separated list of WMS layers to show.
        layers: "",
        // @option styles: String = ''
        // Comma-separated list of WMS styles.
        styles: "",
        // @option format: String = 'image/jpeg'
        // WMS image format (use `'image/png'` for layers with transparency).
        format: "image/jpeg",
        // @option transparent: Boolean = false
        // If `true`, the WMS service will return images with transparency.
        transparent: !1,
        // @option version: String = '1.1.1'
        // Version of the WMS service to use
        version: "1.1.1"
      },
      options: {
        // @option crs: CRS = null
        // Coordinate Reference System to use for the WMS requests, defaults to
        // map CRS. Don't change this if you're not sure what it means.
        crs: null,
        // @option uppercase: Boolean = false
        // If `true`, WMS request parameter keys will be uppercase.
        uppercase: !1
      },
      initialize: function(e, i) {
        this._url = e;
        var o = c({}, this.defaultWmsParams);
        for (var s in i)
          s in this.options || (o[s] = i[s]);
        i = P(this, i);
        var _ = i.detectRetina && ge.retina ? 2 : 1, m = this.getTileSize();
        o.width = m.x * _, o.height = m.y * _, this.wmsParams = o;
      },
      onAdd: function(e) {
        this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[i] = this._crs.code, tn.prototype.onAdd.call(this, e);
      },
      getTileUrl: function(e) {
        var i = this._tileCoordsToNwSe(e), o = this._crs, s = S(o.project(i[0]), o.project(i[1])), _ = s.min, m = s.max, b = (this._wmsVersion >= 1.3 && this._crs === wr ? [_.y, _.x, m.y, m.x] : [_.x, _.y, m.x, m.y]).join(","), C = tn.prototype.getTileUrl.call(this, e);
        return C + $(this.wmsParams, C, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + b;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(e, i) {
        return c(this.wmsParams, e), i || this.redraw(), this;
      }
    });
    function Zc(e, i) {
      return new Nr(e, i);
    }
    tn.WMS = Nr, Pr.wms = Zc;
    var pi = ei.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(e) {
        P(this, e), p(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), Ee(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function() {
        var e = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (e.zoomanim = this._onAnimZoom), e;
      },
      _onAnimZoom: function(e) {
        this._updateTransform(e.center, e.zoom);
      },
      _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function(e, i) {
        var o = this._map.getZoomScale(i, this._zoom), s = this._map.getSize().multiplyBy(0.5 + this.options.padding), _ = this._map.project(this._center, i), m = s.multiplyBy(-o).add(_).subtract(this._map._getNewPixelOrigin(e, i));
        ge.any3d ? Ai(this._container, m, o) : ct(this._container, m);
      },
      _reset: function() {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var e in this._layers)
          this._layers[e]._reset();
      },
      _onZoomEnd: function() {
        for (var e in this._layers)
          this._layers[e]._project();
      },
      _updatePaths: function() {
        for (var e in this._layers)
          this._layers[e]._update();
      },
      _update: function() {
        var e = this.options.padding, i = this._map.getSize(), o = this._map.containerPointToLayerPoint(i.multiplyBy(-e)).round();
        this._bounds = new O(o, o.add(i.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), Er = pi.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var e = pi.prototype.getEvents.call(this);
        return e.viewprereset = this._onViewPreReset, e;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        pi.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var e = this._container = document.createElement("canvas");
        je(e, "mousemove", this._onMouseMove, this), je(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), je(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
      },
      _destroyContainer: function() {
        V(this._redrawRequest), delete this._ctx, ot(this._container), Ke(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var e;
          this._redrawBounds = null;
          for (var i in this._layers)
            e = this._layers[i], e._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          pi.prototype._update.call(this);
          var e = this._bounds, i = this._container, o = e.getSize(), s = ge.retina ? 2 : 1;
          ct(i, e.min), i.width = s * o.x, i.height = s * o.y, i.style.width = o.x + "px", i.style.height = o.y + "px", ge.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
        }
      },
      _reset: function() {
        pi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(e) {
        this._updateDashArray(e), this._layers[p(e)] = e;
        var i = e._order = {
          layer: e,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(e) {
        this._requestRedraw(e);
      },
      _removePath: function(e) {
        var i = e._order, o = i.next, s = i.prev;
        o ? o.prev = s : this._drawLast = s, s ? s.next = o : this._drawFirst = o, delete e._order, delete this._layers[p(e)], this._requestRedraw(e);
      },
      _updatePath: function(e) {
        this._extendRedrawBounds(e), e._project(), e._update(), this._requestRedraw(e);
      },
      _updateStyle: function(e) {
        this._updateDashArray(e), this._requestRedraw(e);
      },
      _updateDashArray: function(e) {
        if (typeof e.options.dashArray == "string") {
          var i = e.options.dashArray.split(/[, ]+/), o = [], s, _;
          for (_ = 0; _ < i.length; _++) {
            if (s = Number(i[_]), isNaN(s))
              return;
            o.push(s);
          }
          e.options._dashArray = o;
        } else
          e.options._dashArray = e.options.dashArray;
      },
      _requestRedraw: function(e) {
        this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || j(this._redraw, this));
      },
      _extendRedrawBounds: function(e) {
        if (e._pxBounds) {
          var i = (e.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new O(), this._redrawBounds.extend(e._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(e._pxBounds.max.add([i, i]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var e = this._redrawBounds;
        if (e) {
          var i = e.getSize();
          this._ctx.clearRect(e.min.x, e.min.y, i.x, i.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var e, i = this._redrawBounds;
        if (this._ctx.save(), i) {
          var o = i.getSize();
          this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, o.x, o.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var s = this._drawFirst; s; s = s.next)
          e = s.layer, (!i || e._pxBounds && e._pxBounds.intersects(i)) && e._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(e, i) {
        if (this._drawing) {
          var o, s, _, m, b = e._parts, C = b.length, I = this._ctx;
          if (C) {
            for (I.beginPath(), o = 0; o < C; o++) {
              for (s = 0, _ = b[o].length; s < _; s++)
                m = b[o][s], I[s ? "lineTo" : "moveTo"](m.x, m.y);
              i && I.closePath();
            }
            this._fillStroke(I, e);
          }
        }
      },
      _updateCircle: function(e) {
        if (!(!this._drawing || e._empty())) {
          var i = e._point, o = this._ctx, s = Math.max(Math.round(e._radius), 1), _ = (Math.max(Math.round(e._radiusY), 1) || s) / s;
          _ !== 1 && (o.save(), o.scale(1, _)), o.beginPath(), o.arc(i.x, i.y / _, s, 0, Math.PI * 2, !1), _ !== 1 && o.restore(), this._fillStroke(o, e);
        }
      },
      _fillStroke: function(e, i) {
        var o = i.options;
        o.fill && (e.globalAlpha = o.fillOpacity, e.fillStyle = o.fillColor || o.color, e.fill(o.fillRule || "evenodd")), o.stroke && o.weight !== 0 && (e.setLineDash && e.setLineDash(i.options && i.options._dashArray || []), e.globalAlpha = o.opacity, e.lineWidth = o.weight, e.strokeStyle = o.color, e.lineCap = o.lineCap, e.lineJoin = o.lineJoin, e.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(e) {
        for (var i = this._map.mouseEventToLayerPoint(e), o, s, _ = this._drawFirst; _; _ = _.next)
          o = _.layer, o.options.interactive && o._containsPoint(i) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(o)) && (s = o);
        this._fireEvent(s ? [s] : !1, e);
      },
      _onMouseMove: function(e) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var i = this._map.mouseEventToLayerPoint(e);
          this._handleMouseHover(e, i);
        }
      },
      _handleMouseOut: function(e) {
        var i = this._hoveredLayer;
        i && (lt(this._container, "leaflet-interactive"), this._fireEvent([i], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(e, i) {
        if (!this._mouseHoverThrottled) {
          for (var o, s, _ = this._drawFirst; _; _ = _.next)
            o = _.layer, o.options.interactive && o._containsPoint(i) && (s = o);
          s !== this._hoveredLayer && (this._handleMouseOut(e), s && (Ee(this._container, "leaflet-interactive"), this._fireEvent([s], e, "mouseover"), this._hoveredLayer = s)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(u(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(e, i, o) {
        this._map._fireDOMEvent(i, o || i.type, e);
      },
      _bringToFront: function(e) {
        var i = e._order;
        if (i) {
          var o = i.next, s = i.prev;
          if (o)
            o.prev = s;
          else
            return;
          s ? s.next = o : o && (this._drawFirst = o), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(e);
        }
      },
      _bringToBack: function(e) {
        var i = e._order;
        if (i) {
          var o = i.next, s = i.prev;
          if (s)
            s.next = o;
          else
            return;
          o ? o.prev = s : s && (this._drawLast = s), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(e);
        }
      }
    });
    function Ir(e) {
      return ge.canvas ? new Er(e) : null;
    }
    var bn = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(e) {
          return document.createElement("<lvml:" + e + ' class="lvml">');
        };
      } catch {
      }
      return function(e) {
        return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), Wc = {
      _initContainer: function() {
        this._container = Be("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (pi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(e) {
        var i = e._container = bn("shape");
        Ee(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", e._path = bn("path"), i.appendChild(e._path), this._updateStyle(e), this._layers[p(e)] = e;
      },
      _addPath: function(e) {
        var i = e._container;
        this._container.appendChild(i), e.options.interactive && e.addInteractiveTarget(i);
      },
      _removePath: function(e) {
        var i = e._container;
        ot(i), e.removeInteractiveTarget(i), delete this._layers[p(e)];
      },
      _updateStyle: function(e) {
        var i = e._stroke, o = e._fill, s = e.options, _ = e._container;
        _.stroked = !!s.stroke, _.filled = !!s.fill, s.stroke ? (i || (i = e._stroke = bn("stroke")), _.appendChild(i), i.weight = s.weight + "px", i.color = s.color, i.opacity = s.opacity, s.dashArray ? i.dashStyle = A(s.dashArray) ? s.dashArray.join(" ") : s.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = s.lineCap.replace("butt", "flat"), i.joinstyle = s.lineJoin) : i && (_.removeChild(i), e._stroke = null), s.fill ? (o || (o = e._fill = bn("fill")), _.appendChild(o), o.color = s.fillColor || s.color, o.opacity = s.fillOpacity) : o && (_.removeChild(o), e._fill = null);
      },
      _updateCircle: function(e) {
        var i = e._point.round(), o = Math.round(e._radius), s = Math.round(e._radiusY || o);
        this._setPath(e, e._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + o + "," + s + " 0," + 65535 * 360);
      },
      _setPath: function(e, i) {
        e._path.v = i;
      },
      _bringToFront: function(e) {
        Ki(e._container);
      },
      _bringToBack: function(e) {
        Yi(e._container);
      }
    }, Qn = ge.vml ? bn : ke, yn = pi.extend({
      _initContainer: function() {
        this._container = Qn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Qn("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        ot(this._container), Ke(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          pi.prototype._update.call(this);
          var e = this._bounds, i = e.getSize(), o = this._container;
          (!this._svgSize || !this._svgSize.equals(i)) && (this._svgSize = i, o.setAttribute("width", i.x), o.setAttribute("height", i.y)), ct(o, e.min), o.setAttribute("viewBox", [e.min.x, e.min.y, i.x, i.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(e) {
        var i = e._path = Qn("path");
        e.options.className && Ee(i, e.options.className), e.options.interactive && Ee(i, "leaflet-interactive"), this._updateStyle(e), this._layers[p(e)] = e;
      },
      _addPath: function(e) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
      },
      _removePath: function(e) {
        ot(e._path), e.removeInteractiveTarget(e._path), delete this._layers[p(e)];
      },
      _updatePath: function(e) {
        e._project(), e._update();
      },
      _updateStyle: function(e) {
        var i = e._path, o = e.options;
        i && (o.stroke ? (i.setAttribute("stroke", o.color), i.setAttribute("stroke-opacity", o.opacity), i.setAttribute("stroke-width", o.weight), i.setAttribute("stroke-linecap", o.lineCap), i.setAttribute("stroke-linejoin", o.lineJoin), o.dashArray ? i.setAttribute("stroke-dasharray", o.dashArray) : i.removeAttribute("stroke-dasharray"), o.dashOffset ? i.setAttribute("stroke-dashoffset", o.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), o.fill ? (i.setAttribute("fill", o.fillColor || o.color), i.setAttribute("fill-opacity", o.fillOpacity), i.setAttribute("fill-rule", o.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
      },
      _updatePoly: function(e, i) {
        this._setPath(e, he(e._parts, i));
      },
      _updateCircle: function(e) {
        var i = e._point, o = Math.max(Math.round(e._radius), 1), s = Math.max(Math.round(e._radiusY), 1) || o, _ = "a" + o + "," + s + " 0 1,0 ", m = e._empty() ? "M0 0" : "M" + (i.x - o) + "," + i.y + _ + o * 2 + ",0 " + _ + -o * 2 + ",0 ";
        this._setPath(e, m);
      },
      _setPath: function(e, i) {
        e._path.setAttribute("d", i);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(e) {
        Ki(e._path);
      },
      _bringToBack: function(e) {
        Yi(e._path);
      }
    });
    ge.vml && yn.include(Wc);
    function Lr(e) {
      return ge.svg || ge.vml ? new yn(e) : null;
    }
    Re.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(e) {
        var i = e.options.renderer || this._getPaneRenderer(e.options.pane) || this.options.renderer || this._renderer;
        return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i;
      },
      _getPaneRenderer: function(e) {
        if (e === "overlayPane" || e === void 0)
          return !1;
        var i = this._paneRenderers[e];
        return i === void 0 && (i = this._createRenderer({ pane: e }), this._paneRenderers[e] = i), i;
      },
      _createRenderer: function(e) {
        return this.options.preferCanvas && Ir(e) || Lr(e);
      }
    });
    var Ar = Qi.extend({
      initialize: function(e, i) {
        Qi.prototype.initialize.call(this, this._boundsToLatLngs(e), i);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(e) {
        return this.setLatLngs(this._boundsToLatLngs(e));
      },
      _boundsToLatLngs: function(e) {
        return e = ie(e), [
          e.getSouthWest(),
          e.getNorthWest(),
          e.getNorthEast(),
          e.getSouthEast()
        ];
      }
    });
    function Vc(e, i) {
      return new Ar(e, i);
    }
    yn.create = Qn, yn.pointsToPath = he, hi.geometryToLayer = Vn, hi.coordsToLatLng = Ga, hi.coordsToLatLngs = Gn, hi.latLngToCoords = qa, hi.latLngsToCoords = qn, hi.getFeature = en, hi.asFeature = Kn, Re.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Mr = si.extend({
      initialize: function(e) {
        this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
      },
      addHooks: function() {
        je(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        Ke(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        ot(this._pane), delete this._pane;
      },
      _resetState: function() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function() {
        this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function(e) {
        if (!e.shiftKey || e.which !== 1 && e.button !== 1)
          return !1;
        this._clearDeferredResetState(), this._resetState(), _n(), Na(), this._startPoint = this._map.mouseEventToContainerPoint(e), je(document, {
          contextmenu: Ri,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(e) {
        this._moved || (this._moved = !0, this._box = Be("div", "leaflet-zoom-box", this._container), Ee(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
        var i = new O(this._point, this._startPoint), o = i.getSize();
        ct(this._box, i.min), this._box.style.width = o.x + "px", this._box.style.height = o.y + "px";
      },
      _finish: function() {
        this._moved && (ot(this._box), lt(this._container, "leaflet-crosshair")), dn(), Ea(), Ke(document, {
          contextmenu: Ri,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(e) {
        if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(u(this._resetState, this), 0);
          var i = new Z(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
        }
      },
      _onKeyDown: function(e) {
        e.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    Re.addInitHook("addHandler", "boxZoom", Mr), Re.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var Or = si.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(e) {
        var i = this._map, o = i.getZoom(), s = i.options.zoomDelta, _ = e.originalEvent.shiftKey ? o - s : o + s;
        i.options.doubleClickZoom === "center" ? i.setZoom(_) : i.setZoomAround(e.containerPoint, _);
      }
    });
    Re.addInitHook("addHandler", "doubleClickZoom", Or), Re.mergeOptions({
      // @option dragging: Boolean = true
      // Whether the map is draggable with mouse/touch or not.
      dragging: !0,
      // @section Panning Inertia Options
      // @option inertia: Boolean = *
      // If enabled, panning of the map will have an inertia effect where
      // the map builds momentum while dragging and continues moving in
      // the same direction for some time. Feels especially nice on touch
      // devices. Enabled by default.
      inertia: !0,
      // @option inertiaDeceleration: Number = 3000
      // The rate with which the inertial movement slows down, in pixels/second².
      inertiaDeceleration: 3400,
      // px/s^2
      // @option inertiaMaxSpeed: Number = Infinity
      // Max speed of the inertial movement, in pixels/second.
      inertiaMaxSpeed: 1 / 0,
      // px/s
      // @option easeLinearity: Number = 0.2
      easeLinearity: 0.2,
      // TODO refactor, move to CRS
      // @option worldCopyJump: Boolean = false
      // With this option enabled, the map tracks when you pan to another "copy"
      // of the world and seamlessly jumps to the original one so that all overlays
      // like markers and vector layers are still visible.
      worldCopyJump: !1,
      // @option maxBoundsViscosity: Number = 0.0
      // If `maxBounds` is set, this option will control how solid the bounds
      // are when dragging the map around. The default value of `0.0` allows the
      // user to drag outside the bounds at normal speed, higher values will
      // slow down map dragging outside bounds, and `1.0` makes the bounds fully
      // solid, preventing the user from dragging outside the bounds.
      maxBoundsViscosity: 0
    });
    var Rr = si.extend({
      addHooks: function() {
        if (!this._draggable) {
          var e = this._map;
          this._draggable = new Ci(e._mapPane, e._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
        }
        Ee(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        lt(this._map._container, "leaflet-grab"), lt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      moving: function() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function() {
        var e = this._map;
        if (e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
          var i = ie(this._map.options.maxBounds);
          this._offsetLimit = S(
            this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(e) {
        if (this._map.options.inertia) {
          var i = this._lastTime = +/* @__PURE__ */ new Date(), o = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(o), this._times.push(i), this._prunePositions(i);
        }
        this._map.fire("move", e).fire("drag", e);
      },
      _prunePositions: function(e) {
        for (; this._positions.length > 1 && e - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var e = this._map.getSize().divideBy(2), i = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = i.subtract(e).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(e, i) {
        return e - (e - i) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var e = this._draggable._newPos.subtract(this._draggable._startPos), i = this._offsetLimit;
          e.x < i.min.x && (e.x = this._viscousLimit(e.x, i.min.x)), e.y < i.min.y && (e.y = this._viscousLimit(e.y, i.min.y)), e.x > i.max.x && (e.x = this._viscousLimit(e.x, i.max.x)), e.y > i.max.y && (e.y = this._viscousLimit(e.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(e);
        }
      },
      _onPreDragWrap: function() {
        var e = this._worldWidth, i = Math.round(e / 2), o = this._initialWorldOffset, s = this._draggable._newPos.x, _ = (s - i + o) % e + i - o, m = (s + i + o) % e - i - o, b = Math.abs(_ + o) < Math.abs(m + o) ? _ : m;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = b;
      },
      _onDragEnd: function(e) {
        var i = this._map, o = i.options, s = !o.inertia || e.noInertia || this._times.length < 2;
        if (i.fire("dragend", e), s)
          i.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var _ = this._lastPos.subtract(this._positions[0]), m = (this._lastTime - this._times[0]) / 1e3, b = o.easeLinearity, C = _.multiplyBy(b / m), I = C.distanceTo([0, 0]), Y = Math.min(o.inertiaMaxSpeed, I), se = C.multiplyBy(Y / I), ve = Y / (o.inertiaDeceleration * b), Ie = se.multiplyBy(-ve / 2).round();
          !Ie.x && !Ie.y ? i.fire("moveend") : (Ie = i._limitOffset(Ie, i.options.maxBounds), j(function() {
            i.panBy(Ie, {
              duration: ve,
              easeLinearity: b,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    Re.addInitHook("addHandler", "dragging", Rr), Re.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Dr = si.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function(e) {
        this._map = e, this._setPanDelta(e.options.keyboardPanDelta), this._setZoomDelta(e.options.zoomDelta);
      },
      addHooks: function() {
        var e = this._map._container;
        e.tabIndex <= 0 && (e.tabIndex = "0"), je(e, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function() {
        this._removeHooks(), Ke(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function() {
        if (!this._focused) {
          var e = document.body, i = document.documentElement, o = e.scrollTop || i.scrollTop, s = e.scrollLeft || i.scrollLeft;
          this._map._container.focus(), window.scrollTo(s, o);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(e) {
        var i = this._panKeys = {}, o = this.keyCodes, s, _;
        for (s = 0, _ = o.left.length; s < _; s++)
          i[o.left[s]] = [-1 * e, 0];
        for (s = 0, _ = o.right.length; s < _; s++)
          i[o.right[s]] = [e, 0];
        for (s = 0, _ = o.down.length; s < _; s++)
          i[o.down[s]] = [0, e];
        for (s = 0, _ = o.up.length; s < _; s++)
          i[o.up[s]] = [0, -1 * e];
      },
      _setZoomDelta: function(e) {
        var i = this._zoomKeys = {}, o = this.keyCodes, s, _;
        for (s = 0, _ = o.zoomIn.length; s < _; s++)
          i[o.zoomIn[s]] = e;
        for (s = 0, _ = o.zoomOut.length; s < _; s++)
          i[o.zoomOut[s]] = -e;
      },
      _addHooks: function() {
        je(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Ke(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(e) {
        if (!(e.altKey || e.ctrlKey || e.metaKey)) {
          var i = e.keyCode, o = this._map, s;
          if (i in this._panKeys) {
            if (!o._panAnim || !o._panAnim._inProgress)
              if (s = this._panKeys[i], e.shiftKey && (s = x(s).multiplyBy(3)), o.options.maxBounds && (s = o._limitOffset(x(s), o.options.maxBounds)), o.options.worldCopyJump) {
                var _ = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(s)));
                o.panTo(_);
              } else
                o.panBy(s);
          } else if (i in this._zoomKeys)
            o.setZoom(o.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[i]);
          else if (i === 27 && o._popup && o._popup.options.closeOnEscapeKey)
            o.closePopup();
          else
            return;
          Ri(e);
        }
      }
    });
    Re.addInitHook("addHandler", "keyboard", Dr), Re.mergeOptions({
      // @section Mouse wheel options
      // @option scrollWheelZoom: Boolean|String = true
      // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
      // it will zoom to the center of the view regardless of where the mouse was.
      scrollWheelZoom: !0,
      // @option wheelDebounceTime: Number = 40
      // Limits the rate at which a wheel can fire (in milliseconds). By default
      // user can't zoom via wheel more often than once per 40 ms.
      wheelDebounceTime: 40,
      // @option wheelPxPerZoomLevel: Number = 60
      // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
      // mean a change of one full zoom level. Smaller values will make wheel-zooming
      // faster (and vice versa).
      wheelPxPerZoomLevel: 60
    });
    var Br = si.extend({
      addHooks: function() {
        je(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Ke(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(e) {
        var i = cr(e), o = this._map.options.wheelDebounceTime;
        this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var s = Math.max(o - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(u(this._performZoom, this), s), Ri(e);
      },
      _performZoom: function() {
        var e = this._map, i = e.getZoom(), o = this._map.options.zoomSnap || 0;
        e._stop();
        var s = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), _ = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(s)))) / Math.LN2, m = o ? Math.ceil(_ / o) * o : _, b = e._limitZoom(i + (this._delta > 0 ? m : -m)) - i;
        this._delta = 0, this._startTime = null, b && (e.options.scrollWheelZoom === "center" ? e.setZoom(i + b) : e.setZoomAround(this._lastMousePos, i + b));
      }
    });
    Re.addInitHook("addHandler", "scrollWheelZoom", Br);
    var Gc = 600;
    Re.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: ge.touchNative && ge.safari && ge.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var $r = si.extend({
      addHooks: function() {
        je(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Ke(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(e) {
        if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
          var i = e.touches[0];
          this._startPos = this._newPos = new w(i.clientX, i.clientY), this._holdTimeout = setTimeout(u(function() {
            this._cancel(), this._isTapValid() && (je(document, "touchend", St), je(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", i));
          }, this), Gc), je(document, "touchend touchcancel contextmenu", this._cancel, this), je(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function e() {
        Ke(document, "touchend", St), Ke(document, "touchend touchcancel", e);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), Ke(document, "touchend touchcancel contextmenu", this._cancel, this), Ke(document, "touchmove", this._onMove, this);
      },
      _onMove: function(e) {
        var i = e.touches[0];
        this._newPos = new w(i.clientX, i.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(e, i) {
        var o = new MouseEvent(e, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: i.screenX,
          screenY: i.screenY,
          clientX: i.clientX,
          clientY: i.clientY
          // button: 2,
          // buttons: 2
        });
        o._simulated = !0, i.target.dispatchEvent(o);
      }
    });
    Re.addInitHook("addHandler", "tapHold", $r), Re.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: ge.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var Fr = si.extend({
      addHooks: function() {
        Ee(this._map._container, "leaflet-touch-zoom"), je(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        lt(this._map._container, "leaflet-touch-zoom"), Ke(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(e) {
        var i = this._map;
        if (!(!e.touches || e.touches.length !== 2 || i._animatingZoom || this._zooming)) {
          var o = i.mouseEventToContainerPoint(e.touches[0]), s = i.mouseEventToContainerPoint(e.touches[1]);
          this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), i.options.touchZoom !== "center" && (this._pinchStartLatLng = i.containerPointToLatLng(o.add(s)._divideBy(2))), this._startDist = o.distanceTo(s), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), je(document, "touchmove", this._onTouchMove, this), je(document, "touchend touchcancel", this._onTouchEnd, this), St(e);
        }
      },
      _onTouchMove: function(e) {
        if (!(!e.touches || e.touches.length !== 2 || !this._zooming)) {
          var i = this._map, o = i.mouseEventToContainerPoint(e.touches[0]), s = i.mouseEventToContainerPoint(e.touches[1]), _ = o.distanceTo(s) / this._startDist;
          if (this._zoom = i.getScaleZoom(_, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && _ < 1 || this._zoom > i.getMaxZoom() && _ > 1) && (this._zoom = i._limitZoom(this._zoom)), i.options.touchZoom === "center") {
            if (this._center = this._startLatLng, _ === 1)
              return;
          } else {
            var m = o._add(s)._divideBy(2)._subtract(this._centerPoint);
            if (_ === 1 && m.x === 0 && m.y === 0)
              return;
            this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(m), this._zoom);
          }
          this._moved || (i._moveStart(!0, !1), this._moved = !0), V(this._animRequest);
          var b = u(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = j(b, this, !0), St(e);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, V(this._animRequest), Ke(document, "touchmove", this._onTouchMove, this), Ke(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    Re.addInitHook("addHandler", "touchZoom", Fr), Re.BoxZoom = Mr, Re.DoubleClickZoom = Or, Re.Drag = Rr, Re.Keyboard = Dr, Re.ScrollWheelZoom = Br, Re.TapHold = $r, Re.TouchZoom = Fr, a.Bounds = O, a.Browser = ge, a.CRS = pe, a.Canvas = Er, a.Circle = Va, a.CircleMarker = Wn, a.Class = le, a.Control = Qt, a.DivIcon = Tr, a.DivOverlay = li, a.DomEvent = dc, a.DomUtil = cc, a.Draggable = Ci, a.Evented = ce, a.FeatureGroup = ui, a.GeoJSON = hi, a.GridLayer = gn, a.Handler = si, a.Icon = Xi, a.ImageOverlay = Yn, a.LatLng = X, a.LatLngBounds = Z, a.Layer = ei, a.LayerGroup = Ji, a.LineUtil = Sc, a.Map = Re, a.Marker = Zn, a.Mixin = bc, a.Path = ji, a.Point = w, a.PolyUtil = yc, a.Polygon = Qi, a.Polyline = mi, a.Popup = Jn, a.PosAnimation = _r, a.Projection = Cc, a.Rectangle = Ar, a.Renderer = pi, a.SVG = yn, a.SVGOverlay = zr, a.TileLayer = tn, a.Tooltip = Xn, a.Transformation = ee, a.Util = Q, a.VideoOverlay = jr, a.bind = u, a.bounds = S, a.canvas = Ir, a.circle = Lc, a.circleMarker = Ic, a.control = hn, a.divIcon = Hc, a.extend = c, a.featureGroup = Pc, a.geoJSON = Cr, a.geoJson = Oc, a.gridLayer = Uc, a.icon = Nc, a.imageOverlay = Rc, a.latLng = K, a.latLngBounds = ie, a.layerGroup = Tc, a.map = uc, a.marker = Ec, a.point = x, a.polygon = Mc, a.polyline = Ac, a.popup = $c, a.rectangle = Vc, a.setOptions = P, a.stamp = p, a.svg = Lr, a.svgOverlay = Bc, a.tileLayer = Pr, a.tooltip = Fc, a.transformation = ne, a.version = r, a.videoOverlay = Dc;
    var qc = window.L;
    a.noConflict = function() {
      return window.L = qc, this;
    }, window.L = a;
  });
})(Ho, Ho.exports);
var Ii = Ho.exports;
const zs = /* @__PURE__ */ Es(Ii);
function Ln(t, n, a) {
  return Object.freeze({
    instance: t,
    context: n,
    container: a
  });
}
function An(t, n) {
  return n == null ? function(r, c) {
    const d = nt(void 0);
    return d.current || (d.current = t(r, c)), d;
  } : function(r, c) {
    const d = nt(void 0);
    d.current || (d.current = t(r, c));
    const u = nt(r), { instance: h } = d.current;
    return Te(function() {
      u.current !== r && (n(h, r, u.current), u.current = r);
    }, [
      h,
      r,
      n
    ]), d;
  };
}
function Ul(t, n) {
  Te(function() {
    return (n.layerContainer ?? n.map).addLayer(t.instance), function() {
      var d;
      (d = n.layerContainer) == null || d.removeLayer(t.instance), n.map.removeLayer(t.instance);
    };
  }, [
    n,
    t
  ]);
}
function Zl(t) {
  return function(a) {
    const r = In(), c = t(va(a, r), r);
    return Bl(r.map, a.attribution), Ko(c.current, a.eventHandlers), Ul(c.current, r), c;
  };
}
function d0(t, n) {
  const a = nt(void 0);
  Te(function() {
    if (n.pathOptions !== a.current) {
      const c = n.pathOptions ?? {};
      t.instance.setStyle(c), a.current = c;
    }
  }, [
    t,
    n
  ]);
}
function u0(t) {
  return function(a) {
    const r = In(), c = t(va(a, r), r);
    return Ko(c.current, a.eventHandlers), Ul(c.current, r), d0(c.current, a), c;
  };
}
function Wl(t) {
  function n(c, d) {
    return Ln(t(c), d);
  }
  const a = An(n), r = c0(a);
  return Hl(r);
}
function m0(t, n) {
  const a = An(t, n), r = Zl(a);
  return Fl(r);
}
function h0(t, n) {
  const a = An(t), r = _0(a, n);
  return l0(r);
}
function p0(t, n) {
  const a = An(t, n), r = u0(a);
  return Fl(r);
}
function f0(t, n) {
  const a = An(t, n), r = Zl(a);
  return Hl(r);
}
function g0(t, n, a) {
  const { opacity: r, zIndex: c } = n;
  r != null && r !== a.opacity && t.setOpacity(r), c != null && c !== a.zIndex && t.setZIndex(c);
}
function b0() {
  return In().map;
}
function y0({ bounds: t, boundsOptions: n, center: a, children: r, className: c, id: d, placeholder: u, style: h, whenReady: p, zoom: g, ...y }, v) {
  const [z] = jt({
    className: c,
    id: d,
    style: h
  }), [k, N] = jt(null), P = nt(void 0);
  ha(v, () => (k == null ? void 0 : k.map) ?? null, [
    k
  ]);
  const $ = Ze((H) => {
    if (H !== null && !P.current) {
      const A = new Ii.Map(H, y);
      P.current = A, a != null && g != null ? A.setView(a, g) : t != null && A.fitBounds(t, n), p != null && A.whenReady(p), N(s0(A));
    }
  }, []);
  Te(() => () => {
    k == null || k.map.remove();
  }, [
    k
  ]);
  const F = k ? /* @__PURE__ */ it.createElement(qo, {
    value: k
  }, r) : u ?? null;
  return /* @__PURE__ */ it.createElement("div", {
    ...z,
    ref: $
  }, F);
}
const x0 = /* @__PURE__ */ Le(y0), v0 = m0(function({ position: n, ...a }, r) {
  const c = new Ii.Marker(n, a);
  return Ln(c, $l(r, {
    overlayContainer: c
  }));
}, function(n, a, r) {
  a.position !== r.position && n.setLatLng(a.position), a.icon != null && a.icon !== r.icon && n.setIcon(a.icon), a.zIndexOffset != null && a.zIndexOffset !== r.zIndexOffset && n.setZIndexOffset(a.zIndexOffset), a.opacity != null && a.opacity !== r.opacity && n.setOpacity(a.opacity), n.dragging != null && a.draggable !== r.draggable && (a.draggable === !0 ? n.dragging.enable() : n.dragging.disable());
}), w0 = p0(function({ positions: n, ...a }, r) {
  const c = new Ii.Polygon(n, a);
  return Ln(c, $l(r, {
    overlayContainer: c
  }));
}, function(n, a, r) {
  a.positions !== r.positions && n.setLatLngs(a.positions);
}), Ts = h0(function(n, a) {
  const r = new Ii.Popup(n, a.overlayContainer);
  return Ln(r, a);
}, function(n, a, { position: r }, c) {
  Te(function() {
    const { instance: u } = n;
    function h(g) {
      g.popup === u && (u.update(), c(!0));
    }
    function p(g) {
      g.popup === u && c(!1);
    }
    return a.map.on({
      popupopen: h,
      popupclose: p
    }), a.overlayContainer == null ? (r != null && u.setLatLng(r), u.openOn(a.map)) : a.overlayContainer.bindPopup(u), function() {
      var y;
      a.map.off({
        popupopen: h,
        popupclose: p
      }), (y = a.overlayContainer) == null || y.unbindPopup(), a.map.removeLayer(u);
    };
  }, [
    n,
    a,
    c,
    r
  ]);
}), k0 = Wl(function(n) {
  return new Ii.Control.Scale(n);
}), S0 = f0(function({ url: n, ...a }, r) {
  const c = new Ii.TileLayer(n, va(a, r));
  return Ln(c, r);
}, function(n, a, r) {
  g0(n, a, r);
  const { url: c } = a;
  c != null && c !== r.url && n.setUrl(c);
}), C0 = Wl(function(n) {
  return new Ii.Control.Zoom(n);
}), j0 = {
  // Map views
  "world-map": {
    kind: "world-map",
    variant: "default",
    size: "lg",
    center: { lat: 0, lng: 0 },
    zoom: 2,
    minZoom: 1,
    maxZoom: 18,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showLayerControls: !0,
    aspectRatio: "16/9"
  },
  "region-map": {
    kind: "region-map",
    variant: "default",
    size: "md",
    zoom: 6,
    minZoom: 4,
    maxZoom: 12,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    aspectRatio: "4/3"
  },
  "city-map": {
    kind: "city-map",
    variant: "default",
    size: "md",
    zoom: 12,
    minZoom: 8,
    maxZoom: 18,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showScale: !0,
    aspectRatio: "16/9"
  },
  "street-map": {
    kind: "street-map",
    variant: "default",
    size: "lg",
    zoom: 16,
    minZoom: 12,
    maxZoom: 20,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showScale: !0,
    aspectRatio: "16/9"
  },
  "satellite-map": {
    kind: "satellite-map",
    variant: "satellite",
    size: "lg",
    zoom: 10,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showLayerControls: !0,
    aspectRatio: "16/9"
  },
  "terrain-map": {
    kind: "terrain-map",
    variant: "terrain",
    size: "lg",
    zoom: 8,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showLayerControls: !0,
    aspectRatio: "16/9"
  },
  // Interactive maps
  "interactive-map": {
    kind: "interactive-map",
    variant: "default",
    size: "xl",
    zoom: 10,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    rotatable: !0,
    showZoomControls: !0,
    showLayerControls: !0,
    showScale: !0,
    showCompass: !0,
    showFullscreen: !0,
    aspectRatio: "16/9"
  },
  "game-map": {
    kind: "game-map",
    variant: "gaming",
    size: "full",
    zoom: 1,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showGrid: !0,
    showCoordinates: !0,
    showMinimap: !0,
    aspectRatio: "16/9"
  },
  "floor-plan": {
    kind: "floor-plan",
    variant: "light",
    size: "lg",
    zoom: 1,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showGrid: !0,
    showScale: !0,
    aspectRatio: "4/3"
  },
  "campus-map": {
    kind: "campus-map",
    variant: "light",
    size: "lg",
    zoom: 16,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    aspectRatio: "16/9"
  },
  // Markers and indicators
  "location-marker": {
    kind: "location-marker",
    variant: "default",
    size: "sm",
    interactive: !1,
    aspectRatio: "1/1"
  },
  "region-claim-marker": {
    kind: "region-claim-marker",
    variant: "gaming",
    size: "md",
    interactive: !0,
    aspectRatio: "1/1"
  },
  "player-presence-indicator": {
    kind: "player-presence-indicator",
    variant: "gaming",
    size: "sm",
    interactive: !0,
    aspectRatio: "1/1"
  },
  "poi-marker": {
    kind: "poi-marker",
    variant: "default",
    size: "md",
    interactive: !0,
    aspectRatio: "1/1"
  },
  "cluster-marker": {
    kind: "cluster-marker",
    variant: "default",
    size: "lg",
    interactive: !0,
    aspectRatio: "1/1"
  },
  // Game-specific
  "territory-map": {
    kind: "territory-map",
    variant: "gaming",
    size: "lg",
    zoom: 4,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    showFogOfWar: !0,
    aspectRatio: "16/9"
  },
  "battle-map": {
    kind: "battle-map",
    variant: "dark",
    size: "xl",
    zoom: 1,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showGrid: !0,
    showCoordinates: !0,
    aspectRatio: "1/1"
  },
  "resource-map": {
    kind: "resource-map",
    variant: "terrain",
    size: "lg",
    zoom: 6,
    interactive: !0,
    zoomable: !0,
    pannable: !0,
    showZoomControls: !0,
    aspectRatio: "16/9"
  },
  "mini-map": {
    kind: "mini-map",
    variant: "dark",
    size: "xs",
    zoom: 1,
    interactive: !1,
    zoomable: !1,
    pannable: !1,
    aspectRatio: "1/1",
    borderRadius: "8px"
  },
  "radar-view": {
    kind: "radar-view",
    variant: "dark",
    size: "sm",
    zoom: 1,
    interactive: !1,
    aspectRatio: "1/1",
    borderRadius: "50%"
  }
}, z0 = (t) => j0[t], T0 = "_map__container_1drk5_1", Et = {
  map__container: T0
}, P0 = (t, n) => typeof t == "string" && t.trim() !== "" ? new zs.DivIcon({
  html: `<span style="font-size: 1.5em; color: ${n || "inherit"}">${t}</span>`
}) : new zs.DivIcon({
  html: `<span style="font-size: 1.5em; color: ${n || "inherit"}">📍</span>`
}), N0 = (t) => {
  switch (t) {
    case "satellite":
      return "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
    case "terrain":
      return "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
    case "dark":
      return "https://tiles.stadiamaps.com/tiles/alidade_dark/{z}/{x}/{y}{r}.png";
    case "light":
      return "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
    case "gaming":
      return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    default:
      return "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  }
}, Vl = Le(
  ({
    kind: t,
    componentId: n,
    children: a,
    className: r = "",
    center: c,
    markers: d = [],
    regions: u = [],
    zoom: h,
    minZoom: p,
    maxZoom: g,
    interactive: y,
    zoomable: v,
    pannable: z,
    rotatable: k,
    showZoomControls: N,
    showLayerControls: P,
    showScale: $,
    showCompass: F,
    showFullscreen: H,
    showGrid: A,
    showCoordinates: R,
    showMinimap: T,
    showFogOfWar: E,
    variant: J,
    size: G,
    aspectRatio: B,
    borderRadius: M,
    onClick: j,
    onMarkerClick: V,
    onRegionClick: Q,
    onZoomChange: le,
    onCenterChange: ae,
    ...te
  }, ce) => {
    const w = z0(t), q = sn(), x = n || `map-${q}`, O = vi();
    Te(() => (O(
      Yp({
        mapId: x,
        updates: {
          currentZoom: h ?? w.zoom ?? 1,
          currentCenter: c ?? w.center ?? { lat: 0, lng: 0 }
        }
      })
    ), () => {
      O(Gi(x));
    }), [
      O,
      x,
      h,
      w.zoom,
      c,
      w.center
    ]);
    const S = It(
      cf(x)
    ), Z = (S == null ? void 0 : S.currentZoom) ?? h ?? w.zoom ?? 1, ie = (S == null ? void 0 : S.currentCenter) ?? c ?? w.center ?? { lat: 0, lng: 0 };
    nt(null);
    const X = {
      ...w,
      center: c ?? w.center,
      zoom: h ?? w.zoom,
      minZoom: p ?? w.minZoom,
      maxZoom: g ?? w.maxZoom,
      interactive: y ?? w.interactive,
      zoomable: v ?? w.zoomable,
      pannable: z ?? w.pannable,
      rotatable: k ?? w.rotatable,
      showZoomControls: N ?? w.showZoomControls,
      showLayerControls: P ?? w.showLayerControls,
      showScale: $ ?? w.showScale,
      showCompass: F ?? w.showCompass,
      showFullscreen: H ?? w.showFullscreen,
      showGrid: A ?? w.showGrid,
      showCoordinates: R ?? w.showCoordinates,
      showMinimap: T ?? w.showMinimap,
      showFogOfWar: E ?? w.showFogOfWar,
      variant: J ?? w.variant,
      size: G ?? w.size,
      aspectRatio: B ?? w.aspectRatio,
      borderRadius: M ?? w.borderRadius
    }, K = [
      Et.map,
      Et[`map--${X.kind}`],
      Et[`map--${X.variant}`],
      Et[`map--${X.size}`],
      X.interactive && Et["map--interactive"],
      r
    ].filter(Boolean).join(" "), pe = () => X.showGrid ? /* @__PURE__ */ l.jsx(f, { className: Et.map__grid }) : null, de = () => X.showCoordinates ? /* @__PURE__ */ l.jsxs(f, { className: Et.map__coordinates, children: [
      ie.lat.toFixed(4),
      ",",
      " ",
      ie.lng.toFixed(4)
    ] }) : null, Pe = () => X.showCompass ? /* @__PURE__ */ l.jsx(f, { className: Et.map__compass, children: /* @__PURE__ */ l.jsx(f, { className: Et.map__compass_needle, children: "🧭" }) }) : null, be = () => X.showMinimap ? /* @__PURE__ */ l.jsx(f, { className: Et.map__minimap, children: /* @__PURE__ */ l.jsx(f, { className: Et.map__minimap_content, children: /* @__PURE__ */ l.jsx(
      f,
      {
        className: Et.map__minimap_viewport
      }
    ) }) }) : null, ee = d.filter(
      (W) => W.position && typeof W.position.lat == "number" && typeof W.position.lng == "number"
    ), ne = u.filter(
      (W) => Array.isArray(W.coordinates) && W.coordinates.length > 0
    ), ue = {
      aspectRatio: X.aspectRatio,
      borderRadius: X.borderRadius,
      width: "100%",
      height: "100%"
    }, re = [
      ie.lat,
      ie.lng
    ], ke = Number(Z);
    function he() {
      return b0().on("click", (U) => {
        X.interactive && j && j({ lat: U.latlng.lat, lng: U.latlng.lng });
      }), null;
    }
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: ce,
        className: K,
        style: ue,
        ...te,
        children: [
          /* @__PURE__ */ l.jsxs(
            x0,
            {
              center: re,
              zoom: ke,
              minZoom: X.minZoom,
              maxZoom: X.maxZoom,
              className: Et.map__container,
              style: {
                width: "100%",
                height: "100%",
                borderRadius: X.borderRadius
              },
              scrollWheelZoom: !!X.zoomable,
              zoomControl: !1,
              children: [
                /* @__PURE__ */ l.jsx(he, {}),
                /* @__PURE__ */ l.jsx(
                  S0,
                  {
                    attribution: "© OpenStreetMap contributors",
                    url: N0(X.variant)
                  }
                ),
                ee.map((W) => {
                  const U = P0(
                    W.icon,
                    W.color
                  );
                  return /* @__PURE__ */ l.jsx(
                    v0,
                    {
                      position: [
                        W.position.lat,
                        W.position.lng
                      ],
                      icon: U,
                      eventHandlers: W.clickable && V ? {
                        click: () => V(W)
                      } : void 0,
                      children: W.title && /* @__PURE__ */ l.jsx(Ts, { children: W.title })
                    },
                    W.id
                  );
                }),
                ne.map((W) => /* @__PURE__ */ l.jsx(
                  w0,
                  {
                    positions: W.coordinates.map((U) => [
                      U.lat,
                      U.lng
                    ]),
                    pathOptions: {
                      color: W.color || "#3388ff",
                      fillColor: W.fillColor || W.color || "#3388ff",
                      fillOpacity: W.fillOpacity ?? 0.2,
                      weight: W.strokeWidth ?? 2
                    },
                    eventHandlers: W.clickable && Q ? {
                      click: () => Q(W)
                    } : void 0,
                    children: W.title && /* @__PURE__ */ l.jsx(Ts, { children: W.title })
                  },
                  W.id
                )),
                X.showZoomControls && /* @__PURE__ */ l.jsx(C0, { position: "topright" }),
                X.showScale && /* @__PURE__ */ l.jsx(k0, { position: "bottomleft" })
              ]
            }
          ),
          Pe(),
          de(),
          be(),
          pe(),
          X.showFogOfWar && /* @__PURE__ */ l.jsx(
            f,
            {
              className: Et.map__fog_of_war
            }
          ),
          a && /* @__PURE__ */ l.jsx(f, { className: Et.map__custom, children: a })
        ]
      }
    );
  }
);
Vl.displayName = "Map";
const t5 = di(Vl), E0 = {
  // Avatar types
  "user-avatar": {
    kind: "user-avatar",
    variant: "default",
    size: "md",
    shape: "circle",
    fit: "cover",
    alt: "User avatar",
    placeholder: "/images/default-avatar.png",
    fallbackIcon: "👤",
    clickable: !1
  },
  "system-avatar": {
    kind: "system-avatar",
    variant: "bordered",
    size: "sm",
    shape: "square",
    fit: "cover",
    alt: "System avatar",
    placeholder: "/images/system-avatar.png",
    fallbackIcon: "⚙️",
    clickable: !1
  },
  "bot-avatar": {
    kind: "bot-avatar",
    variant: "gradient",
    size: "md",
    shape: "circle",
    fit: "cover",
    alt: "Bot avatar",
    placeholder: "/images/bot-avatar.png",
    fallbackIcon: "🤖",
    clickable: !1
  },
  "guest-avatar": {
    kind: "guest-avatar",
    variant: "default",
    size: "sm",
    shape: "circle",
    fit: "cover",
    alt: "Guest user",
    placeholder: "/images/guest-avatar.png",
    fallbackIcon: "👥",
    clickable: !1
  },
  "admin-avatar": {
    kind: "admin-avatar",
    variant: "bordered",
    size: "md",
    shape: "circle",
    fit: "cover",
    alt: "Admin user",
    placeholder: "/images/admin-avatar.png",
    fallbackIcon: "👑",
    clickable: !0
  },
  "team-avatar": {
    kind: "team-avatar",
    variant: "shadow",
    size: "lg",
    shape: "rounded",
    fit: "cover",
    alt: "Team avatar",
    placeholder: "/images/team-avatar.png",
    fallbackIcon: "👥",
    clickable: !0
  },
  "organization-avatar": {
    kind: "organization-avatar",
    variant: "bordered",
    size: "xl",
    shape: "square",
    fit: "cover",
    alt: "Organization logo",
    placeholder: "/images/org-avatar.png",
    fallbackIcon: "🏢",
    clickable: !0
  },
  // Media cards
  "image-card": {
    kind: "image-card",
    variant: "shadow",
    size: "md",
    fit: "cover",
    alt: "Image",
    lazy: !0,
    clickable: !0,
    showOverlay: !0,
    showActions: !0,
    aspectRatio: "16/9"
  },
  "video-card": {
    kind: "video-card",
    variant: "shadow",
    size: "lg",
    fit: "cover",
    alt: "Video thumbnail",
    lazy: !0,
    clickable: !0,
    showOverlay: !0,
    showMetadata: !0,
    showActions: !0,
    aspectRatio: "16/9",
    controls: !1
  },
  "audio-card": {
    kind: "audio-card",
    variant: "bordered",
    size: "md",
    shape: "rounded",
    fit: "cover",
    alt: "Audio cover",
    clickable: !0,
    showOverlay: !0,
    showMetadata: !0,
    showActions: !0,
    aspectRatio: "1/1"
  },
  "document-card": {
    kind: "document-card",
    variant: "bordered",
    size: "sm",
    shape: "rounded",
    fit: "contain",
    alt: "Document preview",
    clickable: !0,
    showMetadata: !0,
    showActions: !0,
    aspectRatio: "3/4"
  },
  "gallery-card": {
    kind: "gallery-card",
    variant: "shadow",
    size: "md",
    fit: "cover",
    alt: "Gallery item",
    lazy: !0,
    clickable: !0,
    showOverlay: !0,
    aspectRatio: "1/1"
  },
  "thumbnail-card": {
    kind: "thumbnail-card",
    variant: "default",
    size: "xs",
    fit: "cover",
    alt: "Thumbnail",
    lazy: !0,
    clickable: !0,
    aspectRatio: "1/1"
  },
  // Video players
  "video-player": {
    kind: "video-player",
    variant: "default",
    size: "lg",
    fit: "contain",
    alt: "Video player",
    controls: !0,
    autoPlay: !1,
    muted: !1,
    loop: !1,
    showActions: !0,
    aspectRatio: "16/9"
  },
  "video-embed": {
    kind: "video-embed",
    variant: "default",
    size: "lg",
    fit: "contain",
    alt: "Embedded video",
    controls: !0,
    autoPlay: !1,
    lazy: !0,
    aspectRatio: "16/9"
  },
  "live-stream": {
    kind: "live-stream",
    variant: "bordered",
    size: "xl",
    fit: "contain",
    alt: "Live stream",
    controls: !0,
    autoPlay: !0,
    muted: !1,
    showOverlay: !0,
    showActions: !0,
    aspectRatio: "16/9"
  },
  "screen-share": {
    kind: "screen-share",
    variant: "default",
    size: "xl",
    fit: "contain",
    alt: "Screen share",
    controls: !1,
    autoPlay: !0,
    muted: !0,
    showActions: !0,
    aspectRatio: "16/10"
  },
  "presentation-viewer": {
    kind: "presentation-viewer",
    variant: "bordered",
    size: "xl",
    fit: "contain",
    alt: "Presentation slide",
    controls: !0,
    showActions: !0,
    showMetadata: !0,
    aspectRatio: "16/9"
  },
  // Image components
  "image-viewer": {
    kind: "image-viewer",
    variant: "default",
    size: "xl",
    fit: "contain",
    alt: "Image",
    lazy: !0,
    clickable: !0,
    showActions: !0,
    showOverlay: !0
  },
  "image-gallery": {
    kind: "image-gallery",
    variant: "shadow",
    size: "md",
    fit: "cover",
    alt: "Gallery image",
    lazy: !0,
    clickable: !0,
    showOverlay: !0,
    aspectRatio: "1/1"
  },
  "image-carousel": {
    kind: "image-carousel",
    variant: "default",
    size: "lg",
    fit: "cover",
    alt: "Carousel image",
    lazy: !0,
    clickable: !0,
    showActions: !0,
    aspectRatio: "16/9"
  },
  "image-grid": {
    kind: "image-grid",
    variant: "shadow",
    size: "sm",
    fit: "cover",
    alt: "Grid image",
    lazy: !0,
    clickable: !0,
    aspectRatio: "1/1"
  },
  "image-comparison": {
    kind: "image-comparison",
    variant: "bordered",
    size: "lg",
    fit: "contain",
    alt: "Comparison image",
    clickable: !0,
    showActions: !0,
    aspectRatio: "16/9"
  },
  // Audio components
  "audio-player": {
    kind: "audio-player",
    variant: "bordered",
    size: "md",
    fit: "cover",
    alt: "Audio player",
    controls: !0,
    autoPlay: !1,
    muted: !1,
    loop: !1,
    showMetadata: !0,
    showActions: !0
  },
  "podcast-player": {
    kind: "podcast-player",
    variant: "shadow",
    size: "lg",
    fit: "cover",
    alt: "Podcast player",
    controls: !0,
    autoPlay: !1,
    showMetadata: !0,
    showActions: !0,
    aspectRatio: "1/1"
  },
  "voice-recorder": {
    kind: "voice-recorder",
    variant: "bordered",
    size: "sm",
    fit: "contain",
    alt: "Voice recorder",
    controls: !0,
    showActions: !0
  },
  "waveform-visualizer": {
    kind: "waveform-visualizer",
    variant: "default",
    size: "md",
    fit: "contain",
    alt: "Audio waveform",
    controls: !0,
    showActions: !0,
    aspectRatio: "4/1"
  }
}, I0 = (t) => E0[t], L0 = "_container_11emm_130", A0 = "_flex_11emm_261", M0 = "_grid_11emm_357", O0 = "_relative_11emm_739", R0 = "_absolute_11emm_743", D0 = "_fixed_11emm_747", B0 = "_sticky_11emm_751", $0 = "_truncate_11emm_890", F0 = "_border_11emm_950", H0 = "_rounded_11emm_990", U0 = "_shadow_11emm_1022", Z0 = "_transition_11emm_1094", W0 = "_small_11emm_1594", V0 = "_large_11emm_1598", G0 = "_card_11emm_1646", q0 = "_media_11emm_1771", K0 = "_media__avatar_11emm_1835", Y0 = "_media__image_11emm_1836", J0 = "_media__video_11emm_1852", X0 = "_media__content_11emm_1871", Q0 = "_media__image_container_11emm_1932", e2 = "_media__fallback_11emm_1960", t2 = "_media__video_container_11emm_1971", i2 = "_media__play_button_11emm_1991", n2 = "_media__audio_container_11emm_2024", a2 = "_media__audio_cover_11emm_2030", o2 = "_media__audio_11emm_2024", r2 = "_media__overlay_11emm_2060", s2 = "_media__overlay_title_11emm_2075", l2 = "_media__overlay_description_11emm_2081", c2 = "_media__metadata_11emm_2085", _2 = "_media__metadata_title_11emm_2090", d2 = "_media__metadata_description_11emm_2098", u2 = "_media__metadata_details_11emm_2105", m2 = "_media__metadata_author_11emm_2117", h2 = "_media__metadata_duration_11emm_2117", p2 = "_media__metadata_size_11emm_2117", f2 = "_media__metadata_tags_11emm_2121", g2 = "_media__metadata_tag_11emm_2121", b2 = "_media__actions_11emm_2142", y2 = "_media__action_11emm_2142", x2 = "_media__action_icon_11emm_2297", v2 = "_media__action_label_11emm_2302", w2 = "_media__custom_11emm_2305", ze = {
  container: L0,
  "container-sm": "_container-sm_11emm_146",
  "container-md": "_container-md_11emm_162",
  "container-lg": "_container-lg_11emm_178",
  "container-xl": "_container-xl_11emm_194",
  "container-2xl": "_container-2xl_11emm_210",
  "safe-area": "_safe-area_11emm_226",
  "overflow-hidden": "_overflow-hidden_11emm_232",
  "overflow-auto": "_overflow-auto_11emm_236",
  "overflow-x-auto": "_overflow-x-auto_11emm_241",
  "overflow-y-auto": "_overflow-y-auto_11emm_247",
  "box-border": "_box-border_11emm_253",
  "box-content": "_box-content_11emm_257",
  flex: A0,
  "flex-col": "_flex-col_11emm_265",
  "flex-row": "_flex-row_11emm_270",
  "flex-wrap": "_flex-wrap_11emm_275",
  "flex-nowrap": "_flex-nowrap_11emm_280",
  "flex-center": "_flex-center_11emm_285",
  "flex-between": "_flex-between_11emm_291",
  "justify-start": "_justify-start_11emm_297",
  "justify-center": "_justify-center_11emm_301",
  "justify-end": "_justify-end_11emm_305",
  "justify-between": "_justify-between_11emm_309",
  "justify-around": "_justify-around_11emm_313",
  "items-start": "_items-start_11emm_317",
  "items-center": "_items-center_11emm_321",
  "items-end": "_items-end_11emm_325",
  "items-stretch": "_items-stretch_11emm_329",
  "flex-1": "_flex-1_11emm_333",
  "flex-auto": "_flex-auto_11emm_337",
  "flex-none": "_flex-none_11emm_341",
  "flex-grow": "_flex-grow_11emm_345",
  "flex-shrink": "_flex-shrink_11emm_349",
  "flex-shrink-0": "_flex-shrink-0_11emm_353",
  grid: M0,
  "grid-auto-fit": "_grid-auto-fit_11emm_361",
  "grid-auto-fill": "_grid-auto-fill_11emm_368",
  "grid-cols-1": "_grid-cols-1_11emm_375",
  "grid-cols-2": "_grid-cols-2_11emm_379",
  "grid-cols-3": "_grid-cols-3_11emm_383",
  "grid-cols-4": "_grid-cols-4_11emm_387",
  "grid-cols-6": "_grid-cols-6_11emm_391",
  "grid-cols-12": "_grid-cols-12_11emm_395",
  "gap-0": "_gap-0_11emm_399",
  "gap-1": "_gap-1_11emm_403",
  "gap-2": "_gap-2_11emm_407",
  "gap-3": "_gap-3_11emm_411",
  "gap-4": "_gap-4_11emm_415",
  "gap-5": "_gap-5_11emm_419",
  "gap-6": "_gap-6_11emm_423",
  "gap-8": "_gap-8_11emm_427",
  "gap-10": "_gap-10_11emm_431",
  "gap-12": "_gap-12_11emm_435",
  "p-0": "_p-0_11emm_439",
  "p-1": "_p-1_11emm_443",
  "p-2": "_p-2_11emm_447",
  "p-3": "_p-3_11emm_451",
  "p-4": "_p-4_11emm_455",
  "p-5": "_p-5_11emm_459",
  "p-6": "_p-6_11emm_463",
  "p-8": "_p-8_11emm_467",
  "p-10": "_p-10_11emm_471",
  "p-12": "_p-12_11emm_475",
  "px-0": "_px-0_11emm_479",
  "px-1": "_px-1_11emm_484",
  "px-2": "_px-2_11emm_489",
  "px-3": "_px-3_11emm_494",
  "px-4": "_px-4_11emm_499",
  "px-6": "_px-6_11emm_504",
  "py-0": "_py-0_11emm_509",
  "py-1": "_py-1_11emm_514",
  "py-2": "_py-2_11emm_519",
  "py-3": "_py-3_11emm_524",
  "py-4": "_py-4_11emm_529",
  "py-6": "_py-6_11emm_534",
  "m-0": "_m-0_11emm_539",
  "m-1": "_m-1_11emm_543",
  "m-2": "_m-2_11emm_547",
  "m-3": "_m-3_11emm_551",
  "m-4": "_m-4_11emm_555",
  "m-auto": "_m-auto_11emm_559",
  "mx-auto": "_mx-auto_11emm_563",
  "my-auto": "_my-auto_11emm_568",
  "mx-0": "_mx-0_11emm_573",
  "mx-1": "_mx-1_11emm_578",
  "mx-2": "_mx-2_11emm_583",
  "mx-3": "_mx-3_11emm_588",
  "mx-4": "_mx-4_11emm_593",
  "my-0": "_my-0_11emm_598",
  "my-1": "_my-1_11emm_603",
  "my-2": "_my-2_11emm_608",
  "my-3": "_my-3_11emm_613",
  "my-4": "_my-4_11emm_618",
  "w-full": "_w-full_11emm_623",
  "w-auto": "_w-auto_11emm_627",
  "w-fit": "_w-fit_11emm_631",
  "w-min": "_w-min_11emm_635",
  "w-max": "_w-max_11emm_639",
  "max-w-none": "_max-w-none_11emm_643",
  "max-w-xs": "_max-w-xs_11emm_647",
  "max-w-sm": "_max-w-sm_11emm_651",
  "max-w-md": "_max-w-md_11emm_655",
  "max-w-lg": "_max-w-lg_11emm_659",
  "max-w-xl": "_max-w-xl_11emm_663",
  "max-w-2xl": "_max-w-2xl_11emm_667",
  "max-w-3xl": "_max-w-3xl_11emm_671",
  "max-w-4xl": "_max-w-4xl_11emm_675",
  "max-w-5xl": "_max-w-5xl_11emm_679",
  "max-w-6xl": "_max-w-6xl_11emm_683",
  "max-w-7xl": "_max-w-7xl_11emm_687",
  "max-w-full": "_max-w-full_11emm_691",
  "min-w-0": "_min-w-0_11emm_695",
  "min-w-full": "_min-w-full_11emm_699",
  "h-auto": "_h-auto_11emm_703",
  "h-fit": "_h-fit_11emm_707",
  "h-full": "_h-full_11emm_711",
  "h-screen": "_h-screen_11emm_715",
  "max-h-full": "_max-h-full_11emm_719",
  "max-h-screen": "_max-h-screen_11emm_723",
  "min-h-0": "_min-h-0_11emm_727",
  "min-h-full": "_min-h-full_11emm_731",
  "min-h-screen": "_min-h-screen_11emm_735",
  relative: O0,
  absolute: R0,
  fixed: D0,
  sticky: B0,
  static: "_static_11emm_755",
  "inset-0": "_inset-0_11emm_759",
  "top-0": "_top-0_11emm_766",
  "right-0": "_right-0_11emm_770",
  "bottom-0": "_bottom-0_11emm_774",
  "left-0": "_left-0_11emm_778",
  "text-left": "_text-left_11emm_782",
  "text-center": "_text-center_11emm_786",
  "text-right": "_text-right_11emm_790",
  "text-justify": "_text-justify_11emm_794",
  "text-xs": "_text-xs_11emm_798",
  "text-sm": "_text-sm_11emm_802",
  "text-base": "_text-base_11emm_806",
  "text-lg": "_text-lg_11emm_810",
  "text-xl": "_text-xl_11emm_814",
  "text-2xl": "_text-2xl_11emm_818",
  "text-3xl": "_text-3xl_11emm_822",
  "text-4xl": "_text-4xl_11emm_826",
  "font-normal": "_font-normal_11emm_830",
  "font-medium": "_font-medium_11emm_834",
  "font-semibold": "_font-semibold_11emm_838",
  "font-bold": "_font-bold_11emm_842",
  "leading-tight": "_leading-tight_11emm_846",
  "leading-normal": "_leading-normal_11emm_850",
  "leading-relaxed": "_leading-relaxed_11emm_854",
  "text-primary": "_text-primary_11emm_858",
  "text-secondary": "_text-secondary_11emm_862",
  "text-muted": "_text-muted_11emm_866",
  "text-inverse": "_text-inverse_11emm_870",
  "text-blue": "_text-blue_11emm_874",
  "text-red": "_text-red_11emm_878",
  "text-green": "_text-green_11emm_882",
  "text-yellow": "_text-yellow_11emm_886",
  truncate: $0,
  "text-ellipsis": "_text-ellipsis_11emm_897",
  "text-clip": "_text-clip_11emm_904",
  "bg-transparent": "_bg-transparent_11emm_910",
  "bg-white": "_bg-white_11emm_914",
  "bg-gray-50": "_bg-gray-50_11emm_918",
  "bg-gray-100": "_bg-gray-100_11emm_922",
  "bg-gray-200": "_bg-gray-200_11emm_926",
  "bg-primary": "_bg-primary_11emm_930",
  "bg-secondary": "_bg-secondary_11emm_934",
  "bg-success": "_bg-success_11emm_938",
  "bg-danger": "_bg-danger_11emm_942",
  "bg-warning": "_bg-warning_11emm_946",
  border: F0,
  "border-0": "_border-0_11emm_954",
  "border-t": "_border-t_11emm_958",
  "border-r": "_border-r_11emm_962",
  "border-b": "_border-b_11emm_966",
  "border-l": "_border-l_11emm_970",
  "border-gray-200": "_border-gray-200_11emm_974",
  "border-gray-300": "_border-gray-300_11emm_978",
  "border-primary": "_border-primary_11emm_982",
  "border-danger": "_border-danger_11emm_986",
  "rounded-none": "_rounded-none_11emm_990",
  "rounded-sm": "_rounded-sm_11emm_994",
  rounded: H0,
  "rounded-md": "_rounded-md_11emm_1002",
  "rounded-lg": "_rounded-lg_11emm_1006",
  "rounded-xl": "_rounded-xl_11emm_1010",
  "rounded-2xl": "_rounded-2xl_11emm_1014",
  "rounded-full": "_rounded-full_11emm_1018",
  "shadow-none": "_shadow-none_11emm_1022",
  "shadow-sm": "_shadow-sm_11emm_1026",
  shadow: U0,
  "shadow-md": "_shadow-md_11emm_1034",
  "shadow-lg": "_shadow-lg_11emm_1038",
  "shadow-xl": "_shadow-xl_11emm_1042",
  "z-0": "_z-0_11emm_1046",
  "z-10": "_z-10_11emm_1050",
  "z-20": "_z-20_11emm_1054",
  "z-30": "_z-30_11emm_1058",
  "z-40": "_z-40_11emm_1062",
  "z-50": "_z-50_11emm_1066",
  "z-auto": "_z-auto_11emm_1070",
  "z-dropdown": "_z-dropdown_11emm_1074",
  "z-sticky": "_z-sticky_11emm_1078",
  "z-fixed": "_z-fixed_11emm_1082",
  "z-modal": "_z-modal_11emm_1086",
  "z-tooltip": "_z-tooltip_11emm_1090",
  "transition-none": "_transition-none_11emm_1094",
  "transition-all": "_transition-all_11emm_1098",
  "transition-fast": "_transition-fast_11emm_1102",
  "transition-slow": "_transition-slow_11emm_1106",
  "sr-only": "_sr-only_11emm_1110",
  "focus-ring": "_focus-ring_11emm_1122",
  "cursor-default": "_cursor-default_11emm_1128",
  "cursor-pointer": "_cursor-pointer_11emm_1132",
  "cursor-not-allowed": "_cursor-not-allowed_11emm_1136",
  "select-none": "_select-none_11emm_1140",
  "select-text": "_select-text_11emm_1144",
  "select-all": "_select-all_11emm_1148",
  "select-auto": "_select-auto_11emm_1152",
  "pointer-events-none": "_pointer-events-none_11emm_1156",
  "pointer-events-auto": "_pointer-events-auto_11emm_1160",
  "gap-sm": "_gap-sm_11emm_1164",
  "gap-md": "_gap-md_11emm_1168",
  "gap-lg": "_gap-lg_11emm_1172",
  "gap-xl": "_gap-xl_11emm_1176",
  "p-sm": "_p-sm_11emm_1180",
  "p-md": "_p-md_11emm_1184",
  "p-lg": "_p-lg_11emm_1188",
  "p-xl": "_p-xl_11emm_1192",
  "m-sm": "_m-sm_11emm_1196",
  "m-md": "_m-md_11emm_1200",
  "m-lg": "_m-lg_11emm_1204",
  "m-xl": "_m-xl_11emm_1208",
  "text-gray": "_text-gray_11emm_1212",
  "mobile:hidden": "_mobile:hidden_11emm_1217",
  "mobile:block": "_mobile:block_11emm_1220",
  "mobile:flex": "_mobile:flex_11emm_1223",
  "mobile:grid": "_mobile:grid_11emm_1226",
  "mobile:text-sm": "_mobile:text-sm_11emm_1229",
  "mobile:text-xs": "_mobile:text-xs_11emm_1232",
  "mobile:p-2": "_mobile:p-2_11emm_1235",
  "mobile:px-2": "_mobile:px-2_11emm_1238",
  "tablet:block": "_tablet:block_11emm_1244",
  "tablet:flex": "_tablet:flex_11emm_1247",
  "tablet:grid": "_tablet:grid_11emm_1250",
  "tablet:hidden": "_tablet:hidden_11emm_1253",
  "desktop:block": "_desktop:block_11emm_1258",
  "desktop:flex": "_desktop:flex_11emm_1261",
  "desktop:grid": "_desktop:grid_11emm_1264",
  "desktop:hidden": "_desktop:hidden_11emm_1267",
  "bg-gray": "_bg-gray_11emm_918",
  "border-secondary": "_border-secondary_11emm_1291",
  "border-gray": "_border-gray_11emm_974",
  "shadow-glow": "_shadow-glow_11emm_1327",
  "w-8": "_w-8_11emm_1375",
  "w-10": "_w-10_11emm_1379",
  "w-12": "_w-12_11emm_1383",
  "w-16": "_w-16_11emm_1387",
  "h-8": "_h-8_11emm_1391",
  "h-10": "_h-10_11emm_1395",
  "h-12": "_h-12_11emm_1399",
  "h-16": "_h-16_11emm_1403",
  "user-select-none": "_user-select-none_11emm_1419",
  transition: Z0,
  "transition-colors": "_transition-colors_11emm_1427",
  "transition-transform": "_transition-transform_11emm_1431",
  "hover-scale": "_hover-scale_11emm_1435",
  "fade-in": "_fade-in_11emm_1442",
  "status-online": "_status-online_11emm_1454",
  "status-offline": "_status-offline_11emm_1464",
  "status-away": "_status-away_11emm_1474",
  "status-busy": "_status-busy_11emm_1484",
  "modal-overlay": "_modal-overlay_11emm_1494",
  "modal-content": "_modal-content_11emm_1508",
  "close-button-absolute": "_close-button-absolute_11emm_1522",
  small: W0,
  large: V0,
  "primary-button": "_primary-button_11emm_1603",
  "secondary-button": "_secondary-button_11emm_1607",
  card: G0,
  "input-base": "_input-base_11emm_1660",
  "chat-window": "_chat-window_11emm_1692",
  "chat-message": "_chat-message_11emm_1703",
  "z-overlay": "_z-overlay_11emm_1728",
  "mobile-hidden": "_mobile-hidden_11emm_1733",
  "mobile-flex-col": "_mobile-flex-col_11emm_1736",
  "mobile-text-center": "_mobile-text-center_11emm_1739",
  "mobile-p-sm": "_mobile-p-sm_11emm_1742",
  "mobile-gap-sm": "_mobile-gap-sm_11emm_1745",
  "desktop-hidden": "_desktop-hidden_11emm_1750",
  "print-hidden": "_print-hidden_11emm_1755",
  media: q0,
  "media--xs": "_media--xs_11emm_1778",
  "media--sm": "_media--sm_11emm_1782",
  "media--md": "_media--md_11emm_1786",
  "media--lg": "_media--lg_11emm_1790",
  "media--xl": "_media--xl_11emm_1794",
  "media--2xl": "_media--2xl_11emm_1798",
  "media--image-card": "_media--image-card_11emm_1802",
  "media--video-card": "_media--video-card_11emm_1802",
  "media--audio-card": "_media--audio-card_11emm_1802",
  "media--document-card": "_media--document-card_11emm_1802",
  "media--gallery-card": "_media--gallery-card_11emm_1802",
  "media--image-viewer": "_media--image-viewer_11emm_1827",
  "media--video-player": "_media--video-player_11emm_1827",
  "media--video-embed": "_media--video-embed_11emm_1827",
  "media--live-stream": "_media--live-stream_11emm_1827",
  "media--screen-share": "_media--screen-share_11emm_1827",
  "media--presentation-viewer": "_media--presentation-viewer_11emm_1827",
  "media--circle": "_media--circle_11emm_1835",
  media__avatar: K0,
  media__image: Y0,
  "media--square": "_media--square_11emm_1839",
  "media--rounded": "_media--rounded_11emm_1843",
  "media--pill": "_media--pill_11emm_1847",
  "media--cover": "_media--cover_11emm_1851",
  media__video: J0,
  "media--contain": "_media--contain_11emm_1855",
  "media--fill": "_media--fill_11emm_1859",
  "media--scale-down": "_media--scale-down_11emm_1863",
  "media--none": "_media--none_11emm_1867",
  "media--default": "_media--default_11emm_1871",
  media__content: X0,
  "media--bordered": "_media--bordered_11emm_1875",
  "media--shadow": "_media--shadow_11emm_1878",
  "media--glass": "_media--glass_11emm_1881",
  "media--gradient": "_media--gradient_11emm_1886",
  "media--clickable": "_media--clickable_11emm_1889",
  media__image_container: Q0,
  "media--loaded": "_media--loaded_11emm_1954",
  "media--error": "_media--error_11emm_1957",
  media__fallback: e2,
  media__video_container: t2,
  media__play_button: i2,
  media__audio_container: n2,
  media__audio_cover: a2,
  media__audio: o2,
  media__overlay: r2,
  media__overlay_title: s2,
  media__overlay_description: l2,
  media__metadata: c2,
  media__metadata_title: _2,
  media__metadata_description: d2,
  media__metadata_details: u2,
  media__metadata_author: m2,
  media__metadata_duration: h2,
  media__metadata_size: p2,
  media__metadata_tags: f2,
  media__metadata_tag: g2,
  media__actions: b2,
  media__action: y2,
  "media__action--primary": "_media__action--primary_11emm_2186",
  "media__action--secondary": "_media__action--secondary_11emm_2224",
  "media__action--ghost": "_media__action--ghost_11emm_2262",
  media__action_icon: x2,
  media__action_label: v2,
  media__custom: w2,
  "skeleton-shimmer": "_skeleton-shimmer_11emm_1",
  "loading-shimmer": "_loading-shimmer_11emm_1"
}, Gl = Le(
  ({
    kind: t,
    componentId: n,
    children: a,
    className: r = "",
    src: c,
    sources: d,
    alt: u,
    title: h,
    description: p,
    placeholder: g,
    fallbackIcon: y,
    lazy: v,
    autoPlay: z,
    controls: k,
    muted: N,
    loop: P,
    clickable: $,
    draggable: F,
    actions: H,
    metadata: A,
    showOverlay: R,
    showMetadata: T,
    showActions: E,
    variant: J,
    size: G,
    shape: B,
    fit: M,
    aspectRatio: j,
    maxWidth: V,
    maxHeight: Q,
    borderRadius: le,
    onClick: ae,
    onLoad: te,
    onError: ce,
    onPlay: w,
    onPause: q,
    onEnded: x,
    ...O
  }, S) => {
    const Z = I0(t), ie = sn(), X = n || `media-${ie}`, K = vi();
    Te(() => (K(
      lo({
        mediaId: X,
        updates: {
          isLoading: !1,
          hasError: !1,
          isPlaying: !1,
          hasLoaded: !1
        }
      })
    ), () => {
      K(Gi(X));
    }), [K, X]);
    const pe = It(
      rf(X)
    ), de = (pe == null ? void 0 : pe.hasError) || !1, Pe = (pe == null ? void 0 : pe.hasLoaded) || !1, be = nt(null), ee = {
      ...Z,
      alt: u ?? Z.alt,
      placeholder: g ?? Z.placeholder,
      fallbackIcon: y ?? Z.fallbackIcon,
      lazy: v ?? Z.lazy,
      autoPlay: z ?? Z.autoPlay,
      controls: k ?? Z.controls,
      muted: N ?? Z.muted,
      loop: P ?? Z.loop,
      clickable: $ ?? Z.clickable,
      draggable: F ?? Z.draggable,
      actions: H ?? Z.actions,
      showOverlay: R ?? Z.showOverlay,
      showMetadata: T ?? Z.showMetadata,
      showActions: E ?? Z.showActions,
      variant: J ?? Z.variant,
      size: G ?? Z.size,
      shape: B ?? Z.shape,
      fit: M ?? Z.fit,
      aspectRatio: j ?? Z.aspectRatio,
      maxWidth: V ?? Z.maxWidth,
      maxHeight: Q ?? Z.maxHeight,
      borderRadius: le ?? Z.borderRadius
    }, ne = [
      ze.media,
      ze[`media--${ee.kind}`],
      ze[`media--${ee.variant}`],
      ze[`media--${ee.size}`],
      ee.shape && ze[`media--${ee.shape}`],
      ze[`media--${ee.fit}`],
      ee.clickable && ze["media--clickable"],
      Pe && ze["media--loaded"],
      de && ze["media--error"],
      r
    ].filter(Boolean).join(" "), ue = () => {
      K(
        lo({
          mediaId: X,
          updates: { hasLoaded: !0, hasError: !1 }
        })
      ), te == null || te();
    }, re = () => {
      K(
        lo({
          mediaId: X,
          updates: { hasError: !0, hasLoaded: !1 }
        })
      ), ce == null || ce();
    }, ke = () => {
      ee.clickable && ae && ae();
    }, he = () => {
      const xe = de ? ee.placeholder : c;
      return /* @__PURE__ */ l.jsx(f, { className: ze.media__avatar, children: xe ? /* @__PURE__ */ l.jsx(
        "img",
        {
          src: xe,
          alt: ee.alt,
          loading: ee.lazy ? "lazy" : "eager",
          draggable: ee.draggable,
          onLoad: ue,
          onError: re,
          className: ze.media__image
        }
      ) : /* @__PURE__ */ l.jsx(f, { className: ze.media__fallback, children: ee.fallbackIcon }) });
    }, W = () => {
      const xe = de ? ee.placeholder : c;
      return /* @__PURE__ */ l.jsxs(f, { className: ze.media__image_container, children: [
        xe ? /* @__PURE__ */ l.jsx(
          "img",
          {
            ref: be,
            src: xe,
            alt: ee.alt,
            loading: ee.lazy ? "lazy" : "eager",
            draggable: ee.draggable,
            onLoad: ue,
            onError: re,
            className: ze.media__image
          }
        ) : /* @__PURE__ */ l.jsx(f, { className: ze.media__fallback, children: ee.fallbackIcon || "🖼️" }),
        ee.showOverlay && /* @__PURE__ */ l.jsxs(f, { className: ze.media__overlay, children: [
          h && /* @__PURE__ */ l.jsx(
            f,
            {
              className: ze.media__overlay_title,
              children: h
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            f,
            {
              className: ze.media__overlay_description,
              children: p
            }
          )
        ] })
      ] });
    }, U = () => /* @__PURE__ */ l.jsxs(f, { className: ze.media__video_container, children: [
      /* @__PURE__ */ l.jsxs(
        "video",
        {
          ref: be,
          src: c,
          controls: ee.controls,
          autoPlay: ee.autoPlay,
          muted: ee.muted,
          loop: ee.loop,
          onPlay: w,
          onPause: q,
          onEnded: x,
          onLoadedData: ue,
          onError: re,
          className: ze.media__video,
          children: [
            d == null ? void 0 : d.map((xe, $e) => /* @__PURE__ */ l.jsx(
              "source",
              {
                src: xe.src,
                type: xe.type,
                media: xe.media
              },
              $e
            )),
            "Your browser does not support the video tag."
          ]
        }
      ),
      ee.showOverlay && !ee.controls && /* @__PURE__ */ l.jsx(f, { className: ze.media__overlay, children: /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: "icon",
          className: ze.media__play_button,
          onClick: () => {
            const xe = be.current;
            xe && (xe.paused ? xe.play() : xe.pause());
          },
          "aria-label": "Play/Pause video",
          icon: "▶️"
        }
      ) })
    ] }), Oe = () => /* @__PURE__ */ l.jsxs(f, { className: ze.media__audio_container, children: [
      (t === "audio-card" || t === "podcast-player") && c && /* @__PURE__ */ l.jsx(f, { className: ze.media__audio_cover, children: /* @__PURE__ */ l.jsx(
        "img",
        {
          src: c,
          alt: ee.alt,
          className: ze.media__image,
          onLoad: ue,
          onError: re
        }
      ) }),
      /* @__PURE__ */ l.jsxs(
        "audio",
        {
          ref: be,
          src: c,
          controls: ee.controls,
          autoPlay: ee.autoPlay,
          muted: ee.muted,
          loop: ee.loop,
          onPlay: w,
          onPause: q,
          onEnded: x,
          onLoadedData: ue,
          onError: re,
          className: ze.media__audio,
          children: [
            d == null ? void 0 : d.map((xe, $e) => /* @__PURE__ */ l.jsx(
              "source",
              {
                src: xe.src,
                type: xe.type
              },
              $e
            )),
            "Your browser does not support the audio tag."
          ]
        }
      )
    ] }), at = () => t.includes("avatar") ? he() : t.includes("video") || t.includes("stream") || t.includes("presentation") ? U() : t.includes("audio") || t.includes("podcast") || t.includes("voice") || t.includes("waveform") ? Oe() : W(), qe = () => !ee.showMetadata || !A ? null : /* @__PURE__ */ l.jsxs(f, { className: ze.media__metadata, children: [
      A.title && /* @__PURE__ */ l.jsx(
        f,
        {
          className: ze.media__metadata_title,
          children: A.title
        }
      ),
      A.description && /* @__PURE__ */ l.jsx(
        f,
        {
          className: ze.media__metadata_description,
          children: A.description
        }
      ),
      /* @__PURE__ */ l.jsxs(
        f,
        {
          className: ze.media__metadata_details,
          children: [
            A.author && /* @__PURE__ */ l.jsx(
              "span",
              {
                className: ze.media__metadata_author,
                children: A.author
              }
            ),
            A.duration && /* @__PURE__ */ l.jsx(
              "span",
              {
                className: ze.media__metadata_duration,
                children: A.duration
              }
            ),
            A.fileSize && /* @__PURE__ */ l.jsx("span", { className: ze.media__metadata_size, children: A.fileSize })
          ]
        }
      ),
      A.tags && A.tags.length > 0 && /* @__PURE__ */ l.jsx(
        f,
        {
          className: ze.media__metadata_tags,
          children: A.tags.map((xe, $e) => /* @__PURE__ */ l.jsx(
            "span",
            {
              className: ze.media__metadata_tag,
              children: xe
            },
            $e
          ))
        }
      )
    ] }), We = () => {
      var xe;
      return !ee.showActions || !((xe = ee.actions) != null && xe.length) ? null : /* @__PURE__ */ l.jsx(f, { className: ze.media__actions, children: ee.actions.map(($e) => /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: $e.variant || "secondary",
          onClick: $e.onClick,
          disabled: $e.disabled,
          className: [
            ze.media__action,
            ze[`media__action--${$e.variant || "secondary"}`]
          ].join(" "),
          "aria-label": $e.label,
          icon: $e.icon,
          children: /* @__PURE__ */ l.jsx("span", { className: ze.media__action_label, children: $e.label })
        },
        $e.id
      )) });
    }, De = {
      aspectRatio: ee.aspectRatio,
      maxWidth: ee.maxWidth,
      maxHeight: ee.maxHeight,
      borderRadius: ee.borderRadius
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: S,
        className: ne,
        style: De,
        onClick: ke,
        role: ee.clickable ? "button" : void 0,
        tabIndex: ee.clickable ? 0 : void 0,
        ...O,
        children: [
          /* @__PURE__ */ l.jsx(f, { className: ze.media__content, children: at() }),
          qe(),
          We(),
          a && /* @__PURE__ */ l.jsx(f, { className: ze.media__custom, children: a })
        ]
      }
    );
  }
);
Gl.displayName = "Media";
const i5 = di(Gl), k2 = "_modalOverlay_t6rkw_117", S2 = "_modalContent_t6rkw_131", C2 = "_fadeIn_t6rkw_1", j2 = "_slideUp_t6rkw_1", z2 = "_slideDown_t6rkw_1", T2 = "_scaleIn_t6rkw_1", P2 = "_modalMessage_t6rkw_236", N2 = "_modalTitle_t6rkw_244", E2 = "_modalBody_t6rkw_252", I2 = "_modalHeader_t6rkw_259", L2 = "_modalFooter_t6rkw_382", A2 = "_endGameContent_t6rkw_390", M2 = "_statisticsContent_t6rkw_403", O2 = "_userInfo_t6rkw_403", R2 = "_userAvatar_t6rkw_411", D2 = "_userName_t6rkw_418", B2 = "_userEmail_t6rkw_422", $2 = "_statsGrid_t6rkw_426", F2 = "_guestMessage_t6rkw_429", H2 = "_purchaseContent_t6rkw_439", U2 = "_itemPreview_t6rkw_442", Z2 = "_itemImage_t6rkw_454", W2 = "_priceSection_t6rkw_460", V2 = "_priceLabel_t6rkw_469", G2 = "_priceValue_t6rkw_472", q2 = "_error_t6rkw_477", K2 = "_success_t6rkw_482", Y2 = "_vsModeContent_t6rkw_489", J2 = "_searchingState_t6rkw_492", X2 = "_spinner_t6rkw_495", Q2 = "_spin_t6rkw_495", ek = "_modeOptions_t6rkw_507", tk = "_modeButton_t6rkw_512", ik = "_vsRoomContent_t6rkw_526", nk = "_roomSection_t6rkw_526", ak = "_roomInput_t6rkw_535", ok = "_statRow_t6rkw_556", rk = "_statLabel_t6rkw_567", sk = "_statValue_t6rkw_572", we = {
  modalOverlay: k2,
  modalContent: S2,
  "modal-xs": "_modal-xs_t6rkw_165",
  "modal-small": "_modal-small_t6rkw_169",
  "modal-medium": "_modal-medium_t6rkw_173",
  "modal-large": "_modal-large_t6rkw_177",
  "modal-xl": "_modal-xl_t6rkw_181",
  "modal-fullscreen": "_modal-fullscreen_t6rkw_185",
  "modal-auto": "_modal-auto_t6rkw_192",
  "modal-top": "_modal-top_t6rkw_197",
  "modal-bottom": "_modal-bottom_t6rkw_202",
  "modal-left": "_modal-left_t6rkw_207",
  "modal-right": "_modal-right_t6rkw_212",
  "modal-fade": "_modal-fade_t6rkw_217",
  fadeIn: C2,
  "modal-slide-up": "_modal-slide-up_t6rkw_221",
  slideUp: j2,
  "modal-slide-down": "_modal-slide-down_t6rkw_225",
  slideDown: z2,
  "modal-scale": "_modal-scale_t6rkw_229",
  scaleIn: T2,
  "confirmation-modal": "_confirmation-modal_t6rkw_233",
  modalMessage: P2,
  "alert-modal": "_alert-modal_t6rkw_241",
  modalTitle: N2,
  "form-modal": "_form-modal_t6rkw_252",
  modalBody: E2,
  "fullscreen-modal": "_fullscreen-modal_t6rkw_256",
  modalHeader: I2,
  "pre-game-modal": "_pre-game-modal_t6rkw_263",
  "end-game-modal": "_end-game-modal_t6rkw_276",
  "rules-modal": "_rules-modal_t6rkw_281",
  "statistics-modal": "_statistics-modal_t6rkw_294",
  "purchase-modal": "_purchase-modal_t6rkw_298",
  "sign-in-modal": "_sign-in-modal_t6rkw_302",
  "custom-puzzle-modal": "_custom-puzzle-modal_t6rkw_311",
  "share-content-modal": "_share-content-modal_t6rkw_315",
  "vs-mode-modal": "_vs-mode-modal_t6rkw_322",
  "vs-room-modal": "_vs-room-modal_t6rkw_326",
  "overlay-only-modal": "_overlay-only-modal_t6rkw_330",
  "sidebar-modal": "_sidebar-modal_t6rkw_336",
  "toast-modal": "_toast-modal_t6rkw_346",
  modalFooter: L2,
  endGameContent: A2,
  statisticsContent: M2,
  userInfo: O2,
  userAvatar: R2,
  userName: D2,
  userEmail: B2,
  statsGrid: $2,
  guestMessage: F2,
  purchaseContent: H2,
  itemPreview: U2,
  itemImage: Z2,
  priceSection: W2,
  priceLabel: V2,
  priceValue: G2,
  error: q2,
  success: K2,
  vsModeContent: Y2,
  searchingState: J2,
  spinner: X2,
  spin: Q2,
  modeOptions: ek,
  modeButton: tk,
  vsRoomContent: ik,
  roomSection: nk,
  roomInput: ak,
  statRow: ok,
  statLabel: rk,
  statValue: sk,
  "loading-shimmer": "_loading-shimmer_t6rkw_1"
}, lk = {
  // === BASIC MODAL TYPES ===
  basic: {
    size: "medium",
    position: "center",
    animation: "fade",
    showHeader: !0,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "basic-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0
  },
  confirmation: {
    size: "small",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "confirmation-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    primaryButtonText: "Confirm",
    secondaryButtonText: "Cancel",
    primaryButtonKind: "primary",
    secondaryButtonKind: "secondary"
  },
  alert: {
    size: "small",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !1,
    closable: !0,
    backdrop: !0,
    className: "alert-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    primaryButtonText: "OK",
    primaryButtonKind: "primary"
  },
  form: {
    size: "large",
    position: "center",
    animation: "slide-up",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "form-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    primaryButtonText: "Submit",
    secondaryButtonText: "Cancel",
    primaryButtonKind: "primary",
    secondaryButtonKind: "secondary"
  },
  fullscreen: {
    size: "fullscreen",
    position: "center",
    animation: "fade",
    showHeader: !0,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !1,
    className: "fullscreen-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0
  },
  // === GAME-SPECIFIC MODALS ===
  "pre-game": {
    size: "medium",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !1,
    closable: !1,
    backdrop: !0,
    className: "pre-game-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !1,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "Ready to Start?",
    defaultMessage: "Get ready for your puzzle!",
    primaryButtonText: "Ready",
    secondaryButtonText: "Go Home",
    primaryButtonKind: "primary",
    secondaryButtonKind: "secondary"
  },
  "end-game": {
    size: "large",
    position: "center",
    animation: "slide-up",
    showHeader: !1,
    showFooter: !0,
    showCloseButton: !1,
    closable: !1,
    backdrop: !0,
    className: "end-game-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !1,
    preventScroll: !0,
    autoFocus: !0,
    customBody: !0,
    primaryButtonText: "Share",
    primaryButtonKind: "primary"
  },
  rules: {
    size: "large",
    position: "center",
    animation: "slide-up",
    showHeader: !0,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "rules-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "How to Play"
  },
  statistics: {
    size: "large",
    position: "center",
    animation: "slide-up",
    showHeader: !0,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "statistics-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "Statistics",
    customBody: !0
  },
  purchase: {
    size: "medium",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "purchase-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    customBody: !0,
    primaryButtonText: "Purchase",
    secondaryButtonText: "Cancel",
    primaryButtonKind: "primary",
    secondaryButtonKind: "secondary"
  },
  "sign-in": {
    size: "small",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "sign-in-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "Sign In Required",
    primaryButtonText: "Sign In",
    primaryButtonKind: "primary"
  },
  "custom-puzzle": {
    size: "large",
    position: "center",
    animation: "slide-up",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "custom-puzzle-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "Custom Puzzle",
    primaryButtonText: "Create",
    secondaryButtonText: "Cancel",
    primaryButtonKind: "primary",
    secondaryButtonKind: "secondary"
  },
  "share-content": {
    size: "medium",
    position: "center",
    animation: "scale",
    showHeader: !1,
    showFooter: !1,
    showCloseButton: !1,
    closable: !0,
    backdrop: !0,
    className: "share-content-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    customBody: !0
  },
  // === VS MODE MODALS ===
  "vs-mode": {
    size: "medium",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "vs-mode-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "Versus Mode",
    customBody: !0
  },
  "vs-room": {
    size: "medium",
    position: "center",
    animation: "scale",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "vs-room-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0,
    defaultTitle: "Join Room",
    customBody: !0,
    primaryButtonText: "Join",
    secondaryButtonText: "Create Room",
    primaryButtonKind: "primary",
    secondaryButtonKind: "secondary"
  },
  // === LAYOUT VARIATIONS ===
  "overlay-only": {
    size: "auto",
    position: "center",
    animation: "fade",
    showHeader: !1,
    showFooter: !1,
    showCloseButton: !1,
    closable: !0,
    backdrop: !1,
    className: "overlay-only-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !0,
    preventScroll: !1,
    autoFocus: !1
  },
  sidebar: {
    size: "auto",
    position: "right",
    animation: "slide-up",
    showHeader: !0,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "sidebar-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0
  },
  toast: {
    size: "auto",
    position: "top",
    animation: "slide-down",
    showHeader: !1,
    showFooter: !1,
    showCloseButton: !0,
    closable: !0,
    backdrop: !1,
    className: "toast-modal",
    closeOnBackdrop: !1,
    closeOnEscape: !0,
    preventScroll: !1,
    autoFocus: !1
  },
  // === CUSTOM ===
  custom: {
    size: "medium",
    position: "center",
    animation: "fade",
    showHeader: !0,
    showFooter: !0,
    showCloseButton: !0,
    closable: !0,
    backdrop: !0,
    className: "custom-modal",
    closeOnBackdrop: !0,
    closeOnEscape: !0,
    preventScroll: !0,
    autoFocus: !0
  }
}, ck = (t) => lk[t], _k = (t, n = {}) => ({ ...ck(t), ...n }), Mn = {
  // Game modals
  gameFlow: [
    "pre-game",
    "end-game",
    "rules",
    "statistics"
  ],
  // Purchase flow
  commerce: ["purchase", "sign-in"],
  // VS mode flow
  versus: ["vs-mode", "vs-room"],
  // Basic interactions
  interactions: [
    "confirmation",
    "alert",
    "form"
  ],
  // Layout types
  layouts: [
    "fullscreen",
    "sidebar",
    "toast",
    "overlay-only"
  ]
}, n5 = (t) => Mn.gameFlow.includes(t), a5 = (t) => Mn.versus.includes(t), o5 = (t) => Mn.commerce.includes(t), r5 = (t) => Mn.interactions.includes(t), s5 = (t) => Mn.layouts.includes(t), l5 = ({
  kind: t,
  modalId: n,
  title: a,
  message: r,
  children: c,
  confirmText: d,
  cancelText: u,
  onConfirm: h,
  onCancel: p,
  onSubmit: g,
  submitText: y,
  // Game-specific props
  score: v,
  attemptsLeft: z,
  burnBonus: k,
  win: N,
  finishTime: P,
  user: $,
  session: F,
  signIn: H,
  // VS mode props
  isSearching: A,
  roomCode: R,
  onCreateRoom: T,
  onJoinRoom: E,
  onSelect: J,
  // Purchase props
  item: G,
  onPurchase: B,
  // Rules props
  columnCount: M = 4,
  mode: j = "daily",
  wildcardsActive: V,
  // Statistics props
  dailyCompleted: Q,
  // Visual overrides
  size: le,
  position: ae,
  animation: te,
  showCloseButton: ce,
  showHeader: w,
  showFooter: q,
  // Configuration overrides
  configOverrides: x,
  onClose: O,
  className: S = "",
  contentClassName: Z = "",
  open: ie = !0,
  ...X
}) => {
  if (!ie) return null;
  const K = _k(t, {
    ...le && { size: le },
    ...ae && { position: ae },
    ...te && {
      animation: te
    },
    ...ce !== void 0 && {
      showCloseButton: ce
    },
    ...w !== void 0 && {
      showHeader: w
    },
    ...q !== void 0 && {
      showFooter: q
    },
    ...x
  }), pe = n || `${t}-${Date.now()}`, de = ya(), Pe = Xt(
    (Ae) => Yb(Ae, pe)
  ), be = Xt(
    (Ae) => Jb(Ae, pe)
  ), ee = Xt(
    (Ae) => Xb(Ae, pe)
  ), ne = Xt(
    (Ae) => Qb(Ae, pe)
  ), ue = (Pe == null ? void 0 : Pe.roomCode) || R || "";
  Te(() => {
    de(
      qb({
        id: pe,
        data: { roomCode: R || "" }
      })
    );
  }, [de, pe, R]);
  const re = a || K.defaultTitle, ke = r || K.defaultMessage, he = d || K.primaryButtonText || "Confirm", W = u || K.secondaryButtonText || "Cancel", U = y || K.primaryButtonText || "Submit", Oe = [
    we.Modal,
    we[`modal-${K.size}`],
    we[`modal-${K.position}`],
    we[`modal-${K.animation}`],
    K.className && we[K.className],
    S
  ].filter(Boolean).join(" "), at = () => K.showHeader ? /* @__PURE__ */ l.jsxs(
    f,
    {
      className: `${we.modalHeader} ${K.headerClassName || ""}`.trim(),
      children: [
        re && /* @__PURE__ */ l.jsx("h2", { className: we.modalTitle, children: re }),
        K.showCloseButton && /* @__PURE__ */ l.jsx(Ce, { kind: "close", onClick: O })
      ]
    }
  ) : null, qe = () => {
    const Ae = `${we.modalBody} ${K.bodyClassName || ""}`.trim();
    return K.customBody ? /* @__PURE__ */ l.jsx(f, { className: Ae, children: We() }) : /* @__PURE__ */ l.jsxs(f, { className: Ae, children: [
      ke && /* @__PURE__ */ l.jsx("p", { className: we.modalMessage, children: ke }),
      c
    ] });
  }, We = () => {
    switch (t) {
      case "end-game":
        return /* @__PURE__ */ l.jsxs(f, { className: we.endGameContent, children: [
          /* @__PURE__ */ l.jsx("h2", { children: N ? "You Win!" : "Game Over" }),
          v !== void 0 && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Score:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: v })
          ] }),
          z !== void 0 && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Attempts Left:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: z })
          ] }),
          k !== void 0 && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Burn Bonus:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: k })
          ] }),
          P && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Finish Time:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: P })
          ] }),
          c
        ] });
      case "statistics":
        const Ae = {
          completed: 58,
          winPercentage: 78,
          currentStreak: 0,
          maxStreak: 5,
          perfectPuzzles: 20
        };
        return /* @__PURE__ */ l.jsxs(f, { className: we.statisticsContent, children: [
          $ && /* @__PURE__ */ l.jsxs(f, { className: we.userInfo, children: [
            /* @__PURE__ */ l.jsx(
              "img",
              {
                src: $.photoUrl || "/default-avatar.png",
                alt: $.name,
                className: we.userAvatar
              }
            ),
            /* @__PURE__ */ l.jsxs(f, { children: [
              /* @__PURE__ */ l.jsx(f, { className: we.userName, children: $.name }),
              /* @__PURE__ */ l.jsx(f, { className: we.userEmail, children: $.email })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(f, { className: we.statsGrid, children: Object.entries(Ae).map(
            ([vt, zt]) => /* @__PURE__ */ l.jsxs(
              f,
              {
                className: we.statRow,
                children: [
                  /* @__PURE__ */ l.jsx("span", { className: we.statLabel, children: vt.replace(/([A-Z])/g, " $1").replace(
                    /^./,
                    (wt) => wt.toUpperCase()
                  ) }),
                  /* @__PURE__ */ l.jsxs("span", { className: we.statValue, children: [
                    zt,
                    vt.includes("Percentage") ? "%" : ""
                  ] })
                ]
              },
              vt
            )
          ) }),
          !$ && /* @__PURE__ */ l.jsx(f, { className: we.guestMessage, children: "Sign in to track your statistics across devices" }),
          c
        ] });
      case "purchase":
        return /* @__PURE__ */ l.jsxs(f, { className: we.purchaseContent, children: [
          G && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs(f, { className: we.itemPreview, children: [
              G.previewUrl && /* @__PURE__ */ l.jsx(
                "img",
                {
                  src: G.previewUrl,
                  alt: G.name,
                  className: we.itemImage
                }
              ),
              /* @__PURE__ */ l.jsx("h3", { children: G.label || G.name }),
              G.description && /* @__PURE__ */ l.jsx("p", { children: G.description })
            ] }),
            /* @__PURE__ */ l.jsxs(f, { className: we.priceSection, children: [
              /* @__PURE__ */ l.jsx("span", { className: we.priceLabel, children: "Price:" }),
              /* @__PURE__ */ l.jsxs("span", { className: we.priceValue, children: [
                G.price,
                " ",
                G.currency || "coins"
              ] })
            ] })
          ] }),
          ee && /* @__PURE__ */ l.jsx(f, { className: we.error, children: ee }),
          ne && /* @__PURE__ */ l.jsx(f, { className: we.success, children: "Purchase successful!" }),
          c
        ] });
      case "vs-mode":
        return /* @__PURE__ */ l.jsxs(f, { className: we.vsModeContent, children: [
          A ? /* @__PURE__ */ l.jsxs(f, { className: we.searchingState, children: [
            /* @__PURE__ */ l.jsx(
              f,
              {
                className: we.spinner
              }
            ),
            /* @__PURE__ */ l.jsx("p", { children: "Searching for opponent..." })
          ] }) : /* @__PURE__ */ l.jsxs(f, { className: we.modeOptions, children: [
            /* @__PURE__ */ l.jsx(
              Ce,
              {
                kind: "secondary",
                onClick: () => J == null ? void 0 : J("room"),
                className: we.modeButton,
                children: "Private Room"
              }
            ),
            /* @__PURE__ */ l.jsx(
              Ce,
              {
                kind: "secondary",
                onClick: () => J == null ? void 0 : J("matchmaking"),
                className: we.modeButton,
                children: "Quick Match"
              }
            ),
            /* @__PURE__ */ l.jsx(
              Ce,
              {
                kind: "secondary",
                onClick: () => J == null ? void 0 : J("bot"),
                className: we.modeButton,
                children: "VS Bot"
              }
            )
          ] }),
          c
        ] });
      case "vs-room":
        return /* @__PURE__ */ l.jsxs(f, { className: we.vsRoomContent, children: [
          /* @__PURE__ */ l.jsxs(f, { className: we.roomSection, children: [
            /* @__PURE__ */ l.jsx("label", { htmlFor: "room-code", children: "Room Code:" }),
            /* @__PURE__ */ l.jsx(
              "input",
              {
                id: "room-code",
                type: "text",
                value: ue,
                onChange: (vt) => de(
                  bs({
                    id: pe,
                    field: "roomCode",
                    value: vt.target.value
                  })
                ),
                placeholder: "Enter room code",
                className: we.roomInput
              }
            ),
            ee && /* @__PURE__ */ l.jsx(f, { className: we.error, children: ee })
          ] }),
          c
        ] });
      case "share-content":
        return /* @__PURE__ */ l.jsx(l.Fragment, { children: c });
      default:
        return /* @__PURE__ */ l.jsx(l.Fragment, { children: c });
    }
  }, De = () => {
    if (!K.showFooter) return null;
    const Ae = `${we.modalFooter} ${K.footerClassName || ""}`.trim();
    return /* @__PURE__ */ l.jsx(f, { className: Ae, children: xe() });
  }, xe = () => {
    switch (t) {
      case "confirmation":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: K.secondaryButtonKind || "secondary",
              onClick: p || O,
              children: W
            }
          ),
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: K.primaryButtonKind || "primary",
              onClick: h,
              children: he
            }
          )
        ] });
      case "alert":
        return /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: K.primaryButtonKind || "primary",
            onClick: O,
            children: "OK"
          }
        );
      case "form":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: K.secondaryButtonKind || "secondary",
              onClick: O,
              children: W
            }
          ),
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: K.primaryButtonKind || "primary",
              onClick: g,
              children: U
            }
          )
        ] });
      case "pre-game":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ce, { kind: "secondary", onClick: p, children: W }),
          /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: h, children: he })
        ] });
      case "end-game":
        return /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: h, children: "Share" });
      case "sign-in":
        return /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "primary",
            onClick: H || h,
            children: he
          }
        );
      case "purchase":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ce, { kind: "secondary", onClick: O, children: "Cancel" }),
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: "primary",
              onClick: $e,
              disabled: be || ne,
              children: be ? "Processing..." : ne ? "Success!" : he
            }
          )
        ] });
      case "vs-room":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: "secondary",
              onClick: et,
              children: "Create Room"
            }
          ),
          /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: st, children: "Join Room" })
        ] });
      case "custom-puzzle":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ce, { kind: "secondary", onClick: O, children: W }),
          /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: h, children: he })
        ] });
      default:
        return null;
    }
  }, $e = async () => {
    if (!(!B || !G)) {
      de(
        ys({ id: pe, loading: !0 })
      ), de(
        aa({ id: pe, error: null })
      );
      try {
        await B(G), de(
          Kb({ id: pe, success: !0 })
        ), setTimeout(() => O(), 1200);
      } catch (Ae) {
        de(
          aa({
            id: pe,
            error: (Ae == null ? void 0 : Ae.message) || "Purchase failed."
          })
        );
      } finally {
        de(
          ys({
            id: pe,
            loading: !1
          })
        );
      }
    }
  }, et = () => {
    const Ae = Math.random().toString(36).substring(2, 8).toUpperCase();
    de(
      bs({
        id: pe,
        field: "roomCode",
        value: Ae
      })
    ), T == null || T(Ae);
  }, st = () => {
    if (!ue.trim()) {
      de(
        aa({
          id: pe,
          error: "Please enter a room code."
        })
      );
      return;
    }
    de(
      aa({ id: pe, error: null })
    ), E == null || E(ue.trim());
  };
  return Te(() => {
    const Ae = (vt) => {
      vt.key === "Escape" && K.closeOnEscape && O();
    };
    if (K.closeOnEscape)
      return document.addEventListener("keydown", Ae), () => document.removeEventListener(
        "keydown",
        Ae
      );
  }, [K.closeOnEscape, O]), Te(() => {
    if (K.preventScroll)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "unset";
      };
  }, [K.preventScroll]), /* @__PURE__ */ l.jsx(
    f,
    {
      className: `${we.modalOverlay} ${Oe}`.trim(),
      onClick: O,
      children: /* @__PURE__ */ l.jsxs(
        f,
        {
          className: `${we.modalContent} ${Z}`.trim(),
          onClick: (Ae) => Ae.stopPropagation(),
          children: [
            at(),
            qe(),
            De()
          ]
        }
      )
    }
  );
}, dk = "_container_1bisn_117", uk = "_flex_1bisn_248", mk = "_grid_1bisn_344", hk = "_relative_1bisn_726", pk = "_absolute_1bisn_730", fk = "_fixed_1bisn_734", gk = "_sticky_1bisn_738", bk = "_truncate_1bisn_877", yk = "_border_1bisn_937", xk = "_rounded_1bisn_977", vk = "_shadow_1bisn_1009", wk = "_transition_1bisn_1081", kk = "_small_1bisn_1581", Sk = "_large_1bisn_1585", Ck = "_card_1bisn_1633", jk = "_Navigation_1bisn_1758", zk = "_navbarContainer_1bisn_1904", Tk = "_navbarBrand_1bisn_1926", Pk = "_navbarItems_1bisn_1936", Nk = "_navbarItem_1bisn_1936", Ek = "_navbarLink_1bisn_1951", Ik = "_active_1bisn_1983", Lk = "_disabled_1bisn_1988", Ak = "_navbarIcon_1bisn_1994", Mk = "_navbarLabel_1bisn_2002", Ok = "_navbarBadge_1bisn_2009", Rk = "_mobileNavContainer_1bisn_2026", Dk = "_mobileNavItem_1bisn_2049", Bk = "_mobileNavIcon_1bisn_2089", $k = "_mobileNavLabel_1bisn_2094", Fk = "_mobileNavBadge_1bisn_2104", Hk = "_breadcrumbsList_1bisn_2131", Uk = "_breadcrumbItem_1bisn_2140", Zk = "_breadcrumbLink_1bisn_2146", Wk = "_breadcrumbCurrent_1bisn_2168", Vk = "_breadcrumbSeparator_1bisn_2173", Gk = "_paginationContainer_1bisn_2178", qk = "_paginationList_1bisn_2185", Kk = "_paginationItem_1bisn_2193", Yk = "_paginationButton_1bisn_2197", Jk = "_tabsContainer_1bisn_2231", Xk = "_tabsList_1bisn_2235", Qk = "_tabItem_1bisn_2243", e4 = "_tabButton_1bisn_2247", t4 = "_tabIcon_1bisn_2280", i4 = "_tabLabel_1bisn_2284", n4 = "_segmentedContainer_1bisn_2291", a4 = "_segmentedGroup_1bisn_2297", o4 = "_segmentedButton_1bisn_2304", r4 = "_hamburgerContainer_1bisn_2333", s4 = "_hamburgerList_1bisn_2337", l4 = "_hamburgerItem_1bisn_2343", c4 = "_hamburgerLink_1bisn_2347", _4 = "_hamburgerIcon_1bisn_2377", d4 = "_hamburgerLabel_1bisn_2383", u4 = "_sideDrawerContainer_1bisn_2387", m4 = "_sideDrawerList_1bisn_2393", h4 = "_sideDrawerItem_1bisn_2399", p4 = "_sideDrawerLink_1bisn_2403", f4 = "_sideDrawerIcon_1bisn_2434", g4 = "_sideDrawerLabel_1bisn_2440", b4 = "_sideDrawerSubList_1bisn_2444", y4 = "_sideDrawerSubItem_1bisn_2453", x4 = "_sideDrawerSubLink_1bisn_2457", v4 = "_genericNavigation_1bisn_2486", w4 = "_genericList_1bisn_2490", k4 = "_genericItem_1bisn_2498", S4 = "_genericLink_1bisn_2502", C4 = "_genericIcon_1bisn_2531", j4 = "_genericLabel_1bisn_2535", oa = {
  container: dk,
  "container-sm": "_container-sm_1bisn_133",
  "container-md": "_container-md_1bisn_149",
  "container-lg": "_container-lg_1bisn_165",
  "container-xl": "_container-xl_1bisn_181",
  "container-2xl": "_container-2xl_1bisn_197",
  "safe-area": "_safe-area_1bisn_213",
  "overflow-hidden": "_overflow-hidden_1bisn_219",
  "overflow-auto": "_overflow-auto_1bisn_223",
  "overflow-x-auto": "_overflow-x-auto_1bisn_228",
  "overflow-y-auto": "_overflow-y-auto_1bisn_234",
  "box-border": "_box-border_1bisn_240",
  "box-content": "_box-content_1bisn_244",
  flex: uk,
  "flex-col": "_flex-col_1bisn_252",
  "flex-row": "_flex-row_1bisn_257",
  "flex-wrap": "_flex-wrap_1bisn_262",
  "flex-nowrap": "_flex-nowrap_1bisn_267",
  "flex-center": "_flex-center_1bisn_272",
  "flex-between": "_flex-between_1bisn_278",
  "justify-start": "_justify-start_1bisn_284",
  "justify-center": "_justify-center_1bisn_288",
  "justify-end": "_justify-end_1bisn_292",
  "justify-between": "_justify-between_1bisn_296",
  "justify-around": "_justify-around_1bisn_300",
  "items-start": "_items-start_1bisn_304",
  "items-center": "_items-center_1bisn_308",
  "items-end": "_items-end_1bisn_312",
  "items-stretch": "_items-stretch_1bisn_316",
  "flex-1": "_flex-1_1bisn_320",
  "flex-auto": "_flex-auto_1bisn_324",
  "flex-none": "_flex-none_1bisn_328",
  "flex-grow": "_flex-grow_1bisn_332",
  "flex-shrink": "_flex-shrink_1bisn_336",
  "flex-shrink-0": "_flex-shrink-0_1bisn_340",
  grid: mk,
  "grid-auto-fit": "_grid-auto-fit_1bisn_348",
  "grid-auto-fill": "_grid-auto-fill_1bisn_355",
  "grid-cols-1": "_grid-cols-1_1bisn_362",
  "grid-cols-2": "_grid-cols-2_1bisn_366",
  "grid-cols-3": "_grid-cols-3_1bisn_370",
  "grid-cols-4": "_grid-cols-4_1bisn_374",
  "grid-cols-6": "_grid-cols-6_1bisn_378",
  "grid-cols-12": "_grid-cols-12_1bisn_382",
  "gap-0": "_gap-0_1bisn_386",
  "gap-1": "_gap-1_1bisn_390",
  "gap-2": "_gap-2_1bisn_394",
  "gap-3": "_gap-3_1bisn_398",
  "gap-4": "_gap-4_1bisn_402",
  "gap-5": "_gap-5_1bisn_406",
  "gap-6": "_gap-6_1bisn_410",
  "gap-8": "_gap-8_1bisn_414",
  "gap-10": "_gap-10_1bisn_418",
  "gap-12": "_gap-12_1bisn_422",
  "p-0": "_p-0_1bisn_426",
  "p-1": "_p-1_1bisn_430",
  "p-2": "_p-2_1bisn_434",
  "p-3": "_p-3_1bisn_438",
  "p-4": "_p-4_1bisn_442",
  "p-5": "_p-5_1bisn_446",
  "p-6": "_p-6_1bisn_450",
  "p-8": "_p-8_1bisn_454",
  "p-10": "_p-10_1bisn_458",
  "p-12": "_p-12_1bisn_462",
  "px-0": "_px-0_1bisn_466",
  "px-1": "_px-1_1bisn_471",
  "px-2": "_px-2_1bisn_476",
  "px-3": "_px-3_1bisn_481",
  "px-4": "_px-4_1bisn_486",
  "px-6": "_px-6_1bisn_491",
  "py-0": "_py-0_1bisn_496",
  "py-1": "_py-1_1bisn_501",
  "py-2": "_py-2_1bisn_506",
  "py-3": "_py-3_1bisn_511",
  "py-4": "_py-4_1bisn_516",
  "py-6": "_py-6_1bisn_521",
  "m-0": "_m-0_1bisn_526",
  "m-1": "_m-1_1bisn_530",
  "m-2": "_m-2_1bisn_534",
  "m-3": "_m-3_1bisn_538",
  "m-4": "_m-4_1bisn_542",
  "m-auto": "_m-auto_1bisn_546",
  "mx-auto": "_mx-auto_1bisn_550",
  "my-auto": "_my-auto_1bisn_555",
  "mx-0": "_mx-0_1bisn_560",
  "mx-1": "_mx-1_1bisn_565",
  "mx-2": "_mx-2_1bisn_570",
  "mx-3": "_mx-3_1bisn_575",
  "mx-4": "_mx-4_1bisn_580",
  "my-0": "_my-0_1bisn_585",
  "my-1": "_my-1_1bisn_590",
  "my-2": "_my-2_1bisn_595",
  "my-3": "_my-3_1bisn_600",
  "my-4": "_my-4_1bisn_605",
  "w-full": "_w-full_1bisn_610",
  "w-auto": "_w-auto_1bisn_614",
  "w-fit": "_w-fit_1bisn_618",
  "w-min": "_w-min_1bisn_622",
  "w-max": "_w-max_1bisn_626",
  "max-w-none": "_max-w-none_1bisn_630",
  "max-w-xs": "_max-w-xs_1bisn_634",
  "max-w-sm": "_max-w-sm_1bisn_638",
  "max-w-md": "_max-w-md_1bisn_642",
  "max-w-lg": "_max-w-lg_1bisn_646",
  "max-w-xl": "_max-w-xl_1bisn_650",
  "max-w-2xl": "_max-w-2xl_1bisn_654",
  "max-w-3xl": "_max-w-3xl_1bisn_658",
  "max-w-4xl": "_max-w-4xl_1bisn_662",
  "max-w-5xl": "_max-w-5xl_1bisn_666",
  "max-w-6xl": "_max-w-6xl_1bisn_670",
  "max-w-7xl": "_max-w-7xl_1bisn_674",
  "max-w-full": "_max-w-full_1bisn_678",
  "min-w-0": "_min-w-0_1bisn_682",
  "min-w-full": "_min-w-full_1bisn_686",
  "h-auto": "_h-auto_1bisn_690",
  "h-fit": "_h-fit_1bisn_694",
  "h-full": "_h-full_1bisn_698",
  "h-screen": "_h-screen_1bisn_702",
  "max-h-full": "_max-h-full_1bisn_706",
  "max-h-screen": "_max-h-screen_1bisn_710",
  "min-h-0": "_min-h-0_1bisn_714",
  "min-h-full": "_min-h-full_1bisn_718",
  "min-h-screen": "_min-h-screen_1bisn_722",
  relative: hk,
  absolute: pk,
  fixed: fk,
  sticky: gk,
  static: "_static_1bisn_742",
  "inset-0": "_inset-0_1bisn_746",
  "top-0": "_top-0_1bisn_753",
  "right-0": "_right-0_1bisn_757",
  "bottom-0": "_bottom-0_1bisn_761",
  "left-0": "_left-0_1bisn_765",
  "text-left": "_text-left_1bisn_769",
  "text-center": "_text-center_1bisn_773",
  "text-right": "_text-right_1bisn_777",
  "text-justify": "_text-justify_1bisn_781",
  "text-xs": "_text-xs_1bisn_785",
  "text-sm": "_text-sm_1bisn_789",
  "text-base": "_text-base_1bisn_793",
  "text-lg": "_text-lg_1bisn_797",
  "text-xl": "_text-xl_1bisn_801",
  "text-2xl": "_text-2xl_1bisn_805",
  "text-3xl": "_text-3xl_1bisn_809",
  "text-4xl": "_text-4xl_1bisn_813",
  "font-normal": "_font-normal_1bisn_817",
  "font-medium": "_font-medium_1bisn_821",
  "font-semibold": "_font-semibold_1bisn_825",
  "font-bold": "_font-bold_1bisn_829",
  "leading-tight": "_leading-tight_1bisn_833",
  "leading-normal": "_leading-normal_1bisn_837",
  "leading-relaxed": "_leading-relaxed_1bisn_841",
  "text-primary": "_text-primary_1bisn_845",
  "text-secondary": "_text-secondary_1bisn_849",
  "text-muted": "_text-muted_1bisn_853",
  "text-inverse": "_text-inverse_1bisn_857",
  "text-blue": "_text-blue_1bisn_861",
  "text-red": "_text-red_1bisn_865",
  "text-green": "_text-green_1bisn_869",
  "text-yellow": "_text-yellow_1bisn_873",
  truncate: bk,
  "text-ellipsis": "_text-ellipsis_1bisn_884",
  "text-clip": "_text-clip_1bisn_891",
  "bg-transparent": "_bg-transparent_1bisn_897",
  "bg-white": "_bg-white_1bisn_901",
  "bg-gray-50": "_bg-gray-50_1bisn_905",
  "bg-gray-100": "_bg-gray-100_1bisn_909",
  "bg-gray-200": "_bg-gray-200_1bisn_913",
  "bg-primary": "_bg-primary_1bisn_917",
  "bg-secondary": "_bg-secondary_1bisn_921",
  "bg-success": "_bg-success_1bisn_925",
  "bg-danger": "_bg-danger_1bisn_929",
  "bg-warning": "_bg-warning_1bisn_933",
  border: yk,
  "border-0": "_border-0_1bisn_941",
  "border-t": "_border-t_1bisn_945",
  "border-r": "_border-r_1bisn_949",
  "border-b": "_border-b_1bisn_953",
  "border-l": "_border-l_1bisn_957",
  "border-gray-200": "_border-gray-200_1bisn_961",
  "border-gray-300": "_border-gray-300_1bisn_965",
  "border-primary": "_border-primary_1bisn_969",
  "border-danger": "_border-danger_1bisn_973",
  "rounded-none": "_rounded-none_1bisn_977",
  "rounded-sm": "_rounded-sm_1bisn_981",
  rounded: xk,
  "rounded-md": "_rounded-md_1bisn_989",
  "rounded-lg": "_rounded-lg_1bisn_993",
  "rounded-xl": "_rounded-xl_1bisn_997",
  "rounded-2xl": "_rounded-2xl_1bisn_1001",
  "rounded-full": "_rounded-full_1bisn_1005",
  "shadow-none": "_shadow-none_1bisn_1009",
  "shadow-sm": "_shadow-sm_1bisn_1013",
  shadow: vk,
  "shadow-md": "_shadow-md_1bisn_1021",
  "shadow-lg": "_shadow-lg_1bisn_1025",
  "shadow-xl": "_shadow-xl_1bisn_1029",
  "z-0": "_z-0_1bisn_1033",
  "z-10": "_z-10_1bisn_1037",
  "z-20": "_z-20_1bisn_1041",
  "z-30": "_z-30_1bisn_1045",
  "z-40": "_z-40_1bisn_1049",
  "z-50": "_z-50_1bisn_1053",
  "z-auto": "_z-auto_1bisn_1057",
  "z-dropdown": "_z-dropdown_1bisn_1061",
  "z-sticky": "_z-sticky_1bisn_1065",
  "z-fixed": "_z-fixed_1bisn_1069",
  "z-modal": "_z-modal_1bisn_1073",
  "z-tooltip": "_z-tooltip_1bisn_1077",
  "transition-none": "_transition-none_1bisn_1081",
  "transition-all": "_transition-all_1bisn_1085",
  "transition-fast": "_transition-fast_1bisn_1089",
  "transition-slow": "_transition-slow_1bisn_1093",
  "sr-only": "_sr-only_1bisn_1097",
  "focus-ring": "_focus-ring_1bisn_1109",
  "cursor-default": "_cursor-default_1bisn_1115",
  "cursor-pointer": "_cursor-pointer_1bisn_1119",
  "cursor-not-allowed": "_cursor-not-allowed_1bisn_1123",
  "select-none": "_select-none_1bisn_1127",
  "select-text": "_select-text_1bisn_1131",
  "select-all": "_select-all_1bisn_1135",
  "select-auto": "_select-auto_1bisn_1139",
  "pointer-events-none": "_pointer-events-none_1bisn_1143",
  "pointer-events-auto": "_pointer-events-auto_1bisn_1147",
  "gap-sm": "_gap-sm_1bisn_1151",
  "gap-md": "_gap-md_1bisn_1155",
  "gap-lg": "_gap-lg_1bisn_1159",
  "gap-xl": "_gap-xl_1bisn_1163",
  "p-sm": "_p-sm_1bisn_1167",
  "p-md": "_p-md_1bisn_1171",
  "p-lg": "_p-lg_1bisn_1175",
  "p-xl": "_p-xl_1bisn_1179",
  "m-sm": "_m-sm_1bisn_1183",
  "m-md": "_m-md_1bisn_1187",
  "m-lg": "_m-lg_1bisn_1191",
  "m-xl": "_m-xl_1bisn_1195",
  "text-gray": "_text-gray_1bisn_1199",
  "mobile:hidden": "_mobile:hidden_1bisn_1204",
  "mobile:block": "_mobile:block_1bisn_1207",
  "mobile:flex": "_mobile:flex_1bisn_1210",
  "mobile:grid": "_mobile:grid_1bisn_1213",
  "mobile:text-sm": "_mobile:text-sm_1bisn_1216",
  "mobile:text-xs": "_mobile:text-xs_1bisn_1219",
  "mobile:p-2": "_mobile:p-2_1bisn_1222",
  "mobile:px-2": "_mobile:px-2_1bisn_1225",
  "tablet:block": "_tablet:block_1bisn_1231",
  "tablet:flex": "_tablet:flex_1bisn_1234",
  "tablet:grid": "_tablet:grid_1bisn_1237",
  "tablet:hidden": "_tablet:hidden_1bisn_1240",
  "desktop:block": "_desktop:block_1bisn_1245",
  "desktop:flex": "_desktop:flex_1bisn_1248",
  "desktop:grid": "_desktop:grid_1bisn_1251",
  "desktop:hidden": "_desktop:hidden_1bisn_1254",
  "bg-gray": "_bg-gray_1bisn_905",
  "border-secondary": "_border-secondary_1bisn_1278",
  "border-gray": "_border-gray_1bisn_961",
  "shadow-glow": "_shadow-glow_1bisn_1314",
  "w-8": "_w-8_1bisn_1362",
  "w-10": "_w-10_1bisn_1366",
  "w-12": "_w-12_1bisn_1370",
  "w-16": "_w-16_1bisn_1374",
  "h-8": "_h-8_1bisn_1378",
  "h-10": "_h-10_1bisn_1382",
  "h-12": "_h-12_1bisn_1386",
  "h-16": "_h-16_1bisn_1390",
  "user-select-none": "_user-select-none_1bisn_1406",
  transition: wk,
  "transition-colors": "_transition-colors_1bisn_1414",
  "transition-transform": "_transition-transform_1bisn_1418",
  "hover-scale": "_hover-scale_1bisn_1422",
  "fade-in": "_fade-in_1bisn_1429",
  "status-online": "_status-online_1bisn_1441",
  "status-offline": "_status-offline_1bisn_1451",
  "status-away": "_status-away_1bisn_1461",
  "status-busy": "_status-busy_1bisn_1471",
  "modal-overlay": "_modal-overlay_1bisn_1481",
  "modal-content": "_modal-content_1bisn_1495",
  "close-button-absolute": "_close-button-absolute_1bisn_1509",
  small: kk,
  large: Sk,
  "primary-button": "_primary-button_1bisn_1590",
  "secondary-button": "_secondary-button_1bisn_1594",
  card: Ck,
  "input-base": "_input-base_1bisn_1647",
  "chat-window": "_chat-window_1bisn_1679",
  "chat-message": "_chat-message_1bisn_1690",
  "z-overlay": "_z-overlay_1bisn_1715",
  "mobile-hidden": "_mobile-hidden_1bisn_1720",
  "mobile-flex-col": "_mobile-flex-col_1bisn_1723",
  "mobile-text-center": "_mobile-text-center_1bisn_1726",
  "mobile-p-sm": "_mobile-p-sm_1bisn_1729",
  "mobile-gap-sm": "_mobile-gap-sm_1bisn_1732",
  "desktop-hidden": "_desktop-hidden_1bisn_1737",
  "print-hidden": "_print-hidden_1bisn_1742",
  Navigation: jk,
  "navigation--primary": "_navigation--primary_1bisn_1774",
  "navigation--secondary": "_navigation--secondary_1bisn_1781",
  "navigation--minimal": "_navigation--minimal_1bisn_1791",
  "navigation--floating": "_navigation--floating_1bisn_1796",
  "navigation--overlay": "_navigation--overlay_1bisn_1807",
  "navigation--horizontal": "_navigation--horizontal_1bisn_1816",
  "navigation--vertical": "_navigation--vertical_1bisn_1824",
  "navigation--stacked": "_navigation--stacked_1bisn_1829",
  "navigation--top": "_navigation--top_1bisn_1836",
  "navigation--bottom": "_navigation--bottom_1bisn_1843",
  "navigation--left": "_navigation--left_1bisn_1850",
  "navigation--right": "_navigation--right_1bisn_1858",
  "navigation--fixed": "_navigation--fixed_1bisn_1866",
  "navigation--sticky": "_navigation--sticky_1bisn_1874",
  "navigation--mobile": "_navigation--mobile_1bisn_1882",
  "navigation--open": "_navigation--open_1bisn_1894",
  navbarContainer: zk,
  navbarBrand: Tk,
  navbarItems: Pk,
  navbarItem: Nk,
  navbarLink: Ek,
  active: Ik,
  disabled: Lk,
  navbarIcon: Ak,
  navbarLabel: Mk,
  navbarBadge: Ok,
  mobileNavContainer: Rk,
  mobileNavItem: Dk,
  mobileNavIcon: Bk,
  mobileNavLabel: $k,
  mobileNavBadge: Fk,
  breadcrumbsList: Hk,
  breadcrumbItem: Uk,
  breadcrumbLink: Zk,
  breadcrumbCurrent: Wk,
  breadcrumbSeparator: Vk,
  paginationContainer: Gk,
  paginationList: qk,
  paginationItem: Kk,
  paginationButton: Yk,
  tabsContainer: Jk,
  tabsList: Xk,
  tabItem: Qk,
  tabButton: e4,
  tabIcon: t4,
  tabLabel: i4,
  segmentedContainer: n4,
  segmentedGroup: a4,
  segmentedButton: o4,
  hamburgerContainer: r4,
  hamburgerList: s4,
  hamburgerItem: l4,
  hamburgerLink: c4,
  hamburgerIcon: _4,
  hamburgerLabel: d4,
  sideDrawerContainer: u4,
  sideDrawerList: m4,
  sideDrawerItem: h4,
  sideDrawerLink: p4,
  sideDrawerIcon: f4,
  sideDrawerLabel: g4,
  sideDrawerSubList: b4,
  sideDrawerSubItem: y4,
  sideDrawerSubLink: x4,
  genericNavigation: v4,
  genericList: w4,
  genericItem: k4,
  genericLink: S4,
  genericIcon: C4,
  genericLabel: j4,
  "loading-shimmer": "_loading-shimmer_1bisn_1"
}, z4 = {
  kind: "navbar",
  variant: "primary",
  layout: "horizontal",
  position: "top",
  responsive: !0,
  showIcons: !0,
  showLabels: !0,
  highlightActive: !0,
  enableKeyboardNav: !0,
  description: "Primary navigation bar for application header"
}, T4 = {
  kind: "mobile-nav",
  variant: "mobile-optimized",
  layout: "vertical",
  position: "bottom",
  responsive: !0,
  showIcons: !0,
  showLabels: !1,
  closeOnSelect: !0,
  enableSwipeGestures: !0,
  description: "Mobile-optimized navigation for bottom tab bar"
}, P4 = {
  kind: "hamburger-menu",
  variant: "overlay",
  layout: "vertical",
  position: "left",
  responsive: !0,
  showIcons: !0,
  showLabels: !0,
  closeOnSelect: !0,
  animationDuration: 300,
  description: "Hamburger menu for mobile navigation overlay"
}, N4 = {
  kind: "side-drawer",
  variant: "embedded",
  layout: "vertical",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  persistState: !0,
  enableKeyboardNav: !0,
  description: "Side drawer navigation for desktop and tablet"
}, E4 = {
  kind: "breadcrumbs",
  variant: "minimal",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Breadcrumb navigation showing current page hierarchy"
}, I4 = {
  kind: "pagination",
  variant: "detailed",
  layout: "horizontal",
  position: "center",
  showIcons: !0,
  showLabels: !0,
  enableKeyboardNav: !0,
  description: "Pagination controls for data tables and lists"
}, L4 = {
  kind: "tabs",
  variant: "primary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  enableKeyboardNav: !0,
  description: "Tab navigation for content sections"
}, A4 = {
  kind: "segmented-controls",
  variant: "secondary",
  layout: "horizontal",
  position: "center",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Segmented controls for option selection"
}, M4 = {
  kind: "back-navigation",
  variant: "minimal",
  layout: "horizontal",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  description: "Back navigation button for page transitions"
}, O4 = {
  kind: "step-navigation",
  variant: "detailed",
  layout: "horizontal",
  position: "top",
  showIcons: !0,
  showLabels: !0,
  highlightActive: !0,
  description: "Step-by-step navigation for multi-step processes"
}, R4 = {
  kind: "filter-navigation",
  variant: "secondary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  allowMultiSelect: !0,
  description: "Filter navigation for data filtering"
}, D4 = {
  kind: "quick-navigation",
  variant: "floating",
  layout: "vertical",
  position: "right",
  showIcons: !0,
  showLabels: !1,
  description: "Quick navigation for frequently used actions"
}, wa = {
  // Primary Navigation
  navbar: z4,
  "mobile-nav": T4,
  "hamburger-menu": P4,
  "side-drawer": N4,
  // Secondary Navigation
  breadcrumbs: E4,
  pagination: I4,
  tabs: L4,
  "segmented-controls": A4,
  // Utility Navigation
  "back-navigation": M4,
  "step-navigation": O4,
  "filter-navigation": R4,
  "quick-navigation": D4
};
function ql(t) {
  return wa[t];
}
function c5(t) {
  return t in wa;
}
function _5(t) {
  return Object.values(wa).filter(
    (n) => n.variant === t
  );
}
function d5(t) {
  return Object.values(wa).filter(
    (n) => n.layout === t
  );
}
function bi(t, n) {
  return { ...ql(t), ...n };
}
const u5 = {
  // App Navigation
  primaryApp: () => bi("navbar", {
    variant: "primary",
    showIcons: !0,
    showLabels: !0,
    responsive: !0
  }),
  mobileApp: () => bi("mobile-nav", {
    variant: "mobile-optimized",
    position: "bottom",
    showIcons: !0,
    showLabels: !1
  }),
  // Content Navigation
  contentTabs: () => bi("tabs", {
    variant: "primary",
    showIcons: !1,
    showLabels: !0
  }),
  // Data Navigation
  tablePagination: () => bi("pagination", {
    variant: "detailed",
    enableKeyboardNav: !0
  }),
  // Quick Actions
  floatingNav: () => bi("quick-navigation", {
    variant: "floating",
    position: "right",
    showIcons: !0,
    showLabels: !1
  })
}, m5 = {
  navbar: (t) => bi("navbar", { items: t }),
  tabs: (t) => bi("tabs", { items: t }),
  breadcrumbs: (t) => bi("breadcrumbs", { items: t }),
  pagination: (t, n) => bi("pagination", {
    items: B4(
      t,
      n
    )
  })
};
function B4(t, n) {
  const a = [];
  a.push({
    id: "prev",
    label: "Previous",
    disabled: n <= 1,
    path: `page-${n - 1}`
  });
  for (let r = 1; r <= t; r++)
    a.push({
      id: `page-${r}`,
      label: r.toString(),
      active: r === n,
      path: `page-${r}`
    });
  return a.push({
    id: "next",
    label: "Next",
    disabled: n >= t,
    path: `page-${n + 1}`
  }), a;
}
const yt = Le(
  ({
    kind: t,
    componentId: n,
    children: a,
    className: r,
    items: c = [],
    currentPath: d,
    onNavigate: u,
    configuration: h,
    responsive: p,
    mobileBreakpoint: g,
    closeOnSelect: y,
    showIcons: v,
    showLabels: z,
    showBadges: k,
    totalPages: N,
    currentPage: P = 1,
    onPageChange: $,
    activeTab: F,
    onTabChange: H,
    isOpen: A = !1,
    onToggle: R,
    ...T
  }, E) => {
    const J = ql(t), G = h ? { ...J, ...h } : J, B = [
      oa.Navigation,
      oa[`navigation--${G.variant}`],
      oa[`navigation--${G.layout}`],
      G.position && oa[`navigation--${G.position}`],
      r
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l.jsx(
      "nav",
      {
        ref: E,
        className: B,
        "data-navigation-kind": t,
        role: G.role || "navigation",
        "aria-label": G.ariaLabel || `${t} navigation`,
        children: $4(
          G,
          c,
          d,
          F,
          N,
          P,
          u,
          v,
          z,
          k,
          a
        )
      }
    );
  }
);
function $4(t, n, a, r, c, d = 1, u, h, p, g, y) {
  switch (t.kind) {
    case "navbar":
      return renderNavbar(
        t,
        n,
        a,
        u,
        h,
        p,
        g
      );
    case "mobile-nav":
      return renderMobileNav(
        t,
        n,
        a,
        u,
        h,
        p,
        g
      );
    case "hamburger-menu":
      return renderHamburgerMenu(
        t,
        n,
        a,
        u,
        h,
        p,
        g
      );
    case "side-drawer":
      return renderSideDrawer(
        t,
        n,
        a,
        u,
        h,
        p
      );
    case "breadcrumbs":
      return renderBreadcrumbs(t, n, u);
    case "pagination":
      return renderPagination(
        t,
        c,
        d,
        u
      );
    case "tabs":
      return renderTabs(
        t,
        n,
        r,
        u,
        h,
        p
      );
    case "segmented-controls":
      return renderSegmentedControls(
        t,
        n,
        r,
        u
      );
    default:
      return renderGenericNavigation(
        t,
        n,
        u,
        h,
        p,
        y
      );
  }
}
yt.Presets = {
  navbar: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "navbar", ...t }),
  mobileNav: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "mobile-nav", ...t }),
  hamburger: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "hamburger-menu", ...t }),
  sideDrawer: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "side-drawer", ...t }),
  breadcrumbs: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "breadcrumbs", ...t }),
  pagination: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "pagination", ...t }),
  tabs: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "tabs", ...t }),
  segmentedControls: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "segmented-controls", ...t }),
  backNav: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "back-navigation", ...t }),
  stepNav: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "step-navigation", ...t }),
  filterNav: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "filter-navigation", ...t }),
  quickNav: (t = {}) => /* @__PURE__ */ l.jsx(yt, { kind: "quick-navigation", ...t }),
  responsiveNav: (t = {}) => /* @__PURE__ */ l.jsx(
    yt,
    {
      kind: "navbar",
      responsive: !0,
      mobileBreakpoint: 768,
      ...t
    }
  ),
  dashboardNav: (t = {}) => /* @__PURE__ */ l.jsx(
    yt,
    {
      kind: "side-drawer",
      collapsible: !0,
      defaultCollapsed: !1,
      ...t
    }
  ),
  wizardNav: (t = {}) => /* @__PURE__ */ l.jsx(
    yt,
    {
      kind: "step-navigation",
      showProgress: !0,
      allowSkip: !1,
      ...t
    }
  )
};
yt.displayName = "Navigation";
const h5 = di(yt), F4 = "_notification_1hh72_120", H4 = "_notification__icon_1hh72_142", U4 = "_notification__icon_text_1hh72_151", Z4 = "_notification__content_1hh72_156", W4 = "_notification__title_1hh72_162", V4 = "_notification__message_1hh72_172", G4 = "_notification__children_1hh72_181", q4 = "_notification__close_1hh72_185", K4 = "_notification__actions_1hh72_208", Y4 = "_notification__action_1hh72_208", J4 = "_notification__progress_1hh72_281", X4 = "_notification__progress_bar_1hh72_292", Q4 = "_slideInRight_1hh72_1", e3 = "_slideOutRight_1hh72_1", t3 = "_fadeIn_1hh72_1", i3 = "_fadeOut_1hh72_1", n3 = "_scaleIn_1hh72_1", a3 = "_scaleOut_1hh72_1", o3 = "_bounceIn_1hh72_1", r3 = "_shake_1hh72_1", Je = {
  notification: F4,
  "notification--hidden": "_notification--hidden_1hh72_137",
  notification__icon: H4,
  notification__icon_text: U4,
  notification__content: Z4,
  notification__title: W4,
  notification__message: V4,
  notification__children: G4,
  notification__close: q4,
  notification__actions: K4,
  notification__action: Y4,
  "notification__action--primary": "_notification__action--primary_1hh72_251",
  "notification__action--secondary": "_notification__action--secondary_1hh72_256",
  "notification__action--text": "_notification__action--text_1hh72_261",
  "notification__action--confirm": "_notification__action--confirm_1hh72_266",
  "notification__action--cancel": "_notification__action--cancel_1hh72_271",
  notification__progress: J4,
  notification__progress_bar: X4,
  "notification--success": "_notification--success_1hh72_300",
  "notification--error": "_notification--error_1hh72_309",
  "notification--warning": "_notification--warning_1hh72_318",
  "notification--info": "_notification--info_1hh72_327",
  "notification--neutral": "_notification--neutral_1hh72_336",
  "notification--filled": "_notification--filled_1hh72_340",
  "notification--outlined": "_notification--outlined_1hh72_361",
  "notification--minimal": "_notification--minimal_1hh72_366",
  "notification--modern": "_notification--modern_1hh72_372",
  "notification--glass": "_notification--glass_1hh72_377",
  "notification--game_style": "_notification--game_style_1hh72_383",
  "notification--center": "_notification--center_1hh72_390",
  "notification--bottom_right": "_notification--bottom_right_1hh72_390",
  "notification--bottom_center": "_notification--bottom_center_1hh72_390",
  "notification--bottom_left": "_notification--bottom_left_1hh72_390",
  "notification--top_right": "_notification--top_right_1hh72_390",
  "notification--top_center": "_notification--top_center_1hh72_390",
  "notification--top_left": "_notification--top_left_1hh72_390",
  "notification--enter-slide": "_notification--enter-slide_1hh72_516",
  slideInRight: Q4,
  "notification--exit-slide": "_notification--exit-slide_1hh72_520",
  slideOutRight: e3,
  "notification--enter-fade": "_notification--enter-fade_1hh72_524",
  fadeIn: t3,
  "notification--exit-fade": "_notification--exit-fade_1hh72_528",
  fadeOut: i3,
  "notification--enter-scale": "_notification--enter-scale_1hh72_532",
  scaleIn: n3,
  "notification--exit-scale": "_notification--exit-scale_1hh72_536",
  scaleOut: a3,
  "notification--enter-bounce": "_notification--enter-bounce_1hh72_540",
  bounceIn: o3,
  "notification--enter-shake": "_notification--enter-shake_1hh72_544",
  shake: r3,
  "loading-shimmer": "_loading-shimmer_1hh72_1"
}, Ps = {
  // Toast Notifications
  toast: {
    kind: "toast",
    variant: "default",
    severity: "neutral",
    position: "top-right",
    autoHide: !0,
    duration: 4e3,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "toast-success": {
    kind: "toast-success",
    variant: "filled",
    severity: "success",
    position: "top-right",
    autoHide: !0,
    duration: 3e3,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "toast-error": {
    kind: "toast-error",
    variant: "filled",
    severity: "error",
    position: "top-right",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "bounce",
    exitAnimation: "slide"
  },
  "toast-warning": {
    kind: "toast-warning",
    variant: "filled",
    severity: "warning",
    position: "top-right",
    autoHide: !0,
    duration: 5e3,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "toast-info": {
    kind: "toast-info",
    variant: "outlined",
    severity: "info",
    position: "top-right",
    autoHide: !0,
    duration: 4e3,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  // Snackbar Notifications
  snackbar: {
    kind: "snackbar",
    variant: "filled",
    severity: "neutral",
    position: "bottom-center",
    autoHide: !0,
    duration: 4e3,
    dismissible: !0,
    showIcon: !1,
    showCloseButton: !1,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "snackbar-action": {
    kind: "snackbar-action",
    variant: "filled",
    severity: "neutral",
    position: "bottom-left",
    autoHide: !0,
    duration: 6e3,
    dismissible: !0,
    showIcon: !1,
    showCloseButton: !1,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "snackbar-persistent": {
    kind: "snackbar-persistent",
    variant: "filled",
    severity: "neutral",
    position: "bottom-center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !1,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  // Alert Notifications
  alert: {
    kind: "alert",
    variant: "outlined",
    severity: "neutral",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "fade",
    exitAnimation: "fade"
  },
  "alert-success": {
    kind: "alert-success",
    variant: "filled",
    severity: "success",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "fade",
    exitAnimation: "fade"
  },
  "alert-error": {
    kind: "alert-error",
    variant: "filled",
    severity: "error",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "shake",
    exitAnimation: "fade"
  },
  "alert-warning": {
    kind: "alert-warning",
    variant: "filled",
    severity: "warning",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "fade",
    exitAnimation: "fade"
  },
  "alert-info": {
    kind: "alert-info",
    variant: "outlined",
    severity: "info",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "fade",
    exitAnimation: "fade"
  },
  // Banner Notifications
  banner: {
    kind: "banner",
    variant: "filled",
    severity: "neutral",
    position: "top-center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !1,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "banner-announcement": {
    kind: "banner-announcement",
    variant: "filled",
    severity: "info",
    position: "top-center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "banner-promotion": {
    kind: "banner-promotion",
    variant: "filled",
    severity: "success",
    position: "top-center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "banner-update": {
    kind: "banner-update",
    variant: "outlined",
    severity: "warning",
    position: "top-center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  // Confirmation Dialogs
  "confirm-dialog": {
    kind: "confirm-dialog",
    variant: "modern",
    severity: "neutral",
    position: "center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !1,
    showCloseButton: !1,
    confirmText: "Confirm",
    cancelText: "Cancel",
    enterAnimation: "scale",
    exitAnimation: "scale"
  },
  "confirm-delete": {
    kind: "confirm-delete",
    variant: "modern",
    severity: "error",
    position: "center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !1,
    confirmText: "Delete",
    cancelText: "Cancel",
    enterAnimation: "scale",
    exitAnimation: "scale"
  },
  "confirm-action": {
    kind: "confirm-action",
    variant: "modern",
    severity: "warning",
    position: "center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !1,
    confirmText: "Proceed",
    cancelText: "Cancel",
    enterAnimation: "scale",
    exitAnimation: "scale"
  },
  "confirm-navigation": {
    kind: "confirm-navigation",
    variant: "modern",
    severity: "info",
    position: "center",
    autoHide: !1,
    persistent: !0,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !1,
    confirmText: "Leave",
    cancelText: "Stay",
    enterAnimation: "scale",
    exitAnimation: "scale"
  },
  // Game-specific Notifications
  "achievement-toast": {
    kind: "achievement-toast",
    variant: "game-style",
    severity: "success",
    position: "top-center",
    autoHide: !0,
    duration: 5e3,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !1,
    enterAnimation: "bounce",
    exitAnimation: "fade"
  },
  "game-alert": {
    kind: "game-alert",
    variant: "game-style",
    severity: "warning",
    position: "center",
    autoHide: !0,
    duration: 3e3,
    dismissible: !1,
    showIcon: !0,
    showCloseButton: !1,
    enterAnimation: "scale",
    exitAnimation: "fade"
  },
  "match-notification": {
    kind: "match-notification",
    variant: "game-style",
    severity: "info",
    position: "top-right",
    autoHide: !0,
    duration: 4e3,
    dismissible: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  },
  "social-notification": {
    kind: "social-notification",
    variant: "modern",
    severity: "info",
    position: "bottom-right",
    autoHide: !0,
    duration: 6e3,
    dismissible: !0,
    pauseOnHover: !0,
    showIcon: !0,
    showCloseButton: !0,
    enterAnimation: "slide",
    exitAnimation: "slide"
  }
}, s3 = (t) => Ps[t] || Ps.toast, l3 = (t) => {
  const n = {
    success: "✓",
    error: "✗",
    warning: "⚠",
    info: "ℹ",
    neutral: "•"
  };
  return n[t] || n.neutral;
}, Ge = Le((t, n) => {
  const {
    kind: a,
    componentId: r,
    children: c,
    className: d,
    // Content
    title: u,
    message: h,
    icon: p,
    image: g,
    // Configuration overrides
    variant: y,
    severity: v,
    position: z,
    // Behavior
    visible: k = !0,
    autoHide: N,
    duration: P,
    persistent: $,
    dismissible: F,
    pauseOnHover: H,
    // Actions
    actions: A,
    confirmText: R,
    cancelText: T,
    // Styling
    showIcon: E,
    showCloseButton: J,
    showProgress: G,
    // Animation
    enterAnimation: B,
    exitAnimation: M,
    // Callbacks
    onShow: j,
    onHide: V,
    onClick: Q,
    onConfirm: le,
    onCancel: ae,
    onAction: te,
    ...ce
  } = t, w = s3(a), q = {
    ...w,
    title: u || w.title,
    message: h || w.message,
    variant: y || w.variant,
    severity: v || w.severity,
    position: z || w.position,
    autoHide: N !== void 0 ? N : w.autoHide,
    duration: P !== void 0 ? P : w.duration,
    persistent: $ !== void 0 ? $ : w.persistent,
    dismissible: F !== void 0 ? F : w.dismissible,
    pauseOnHover: H !== void 0 ? H : w.pauseOnHover,
    actions: A || w.actions,
    confirmText: R || w.confirmText,
    cancelText: T || w.cancelText,
    showIcon: E !== void 0 ? E : w.showIcon,
    showCloseButton: J !== void 0 ? J : w.showCloseButton,
    showProgress: G !== void 0 ? G : w.showProgress,
    enterAnimation: B || w.enterAnimation,
    exitAnimation: M || w.exitAnimation
  }, [x, O] = it.useState(k), [S, Z] = it.useState(!1), [ie, X] = it.useState(100);
  it.useEffect(() => {
    if (!q.autoHide || !x || S) return;
    const ke = setTimeout(() => {
      K();
    }, q.duration);
    return () => clearTimeout(ke);
  }, [
    q.autoHide,
    q.duration,
    x,
    S
  ]), it.useEffect(() => {
    if (!q.autoHide || !q.showProgress || !x || S)
      return;
    const ke = setInterval(() => {
      X(
        (he) => Math.max(
          0,
          he - 100 / ((q.duration || 4e3) / 100)
        )
      );
    }, 100);
    return () => clearInterval(ke);
  }, [
    q.autoHide,
    q.showProgress,
    q.duration,
    x,
    S
  ]);
  const K = () => {
    O(!1), V == null || V();
  }, pe = () => {
    le == null || le(), K();
  }, de = () => {
    ae == null || ae(), K();
  }, Pe = (ke) => {
    ke.onClick(), te == null || te(ke), ke.variant !== "text" && K();
  }, be = [
    Je.notification,
    Je[`notification--${q.kind}`],
    Je[`notification--${q.variant}`],
    Je[`notification--${q.severity}`],
    q.position && Je[`notification--${q.position.replace("-", "_")}`],
    q.enterAnimation && Je[`notification--enter-${q.enterAnimation}`],
    !x && q.exitAnimation && Je[`notification--exit-${q.exitAnimation}`],
    !x && Je["notification--hidden"],
    d
  ].filter(Boolean).join(" "), ee = () => {
    if (!q.showIcon) return null;
    const ke = p || q.severity && l3(q.severity);
    return /* @__PURE__ */ l.jsx(f, { className: Je.notification__icon, children: typeof ke == "string" ? /* @__PURE__ */ l.jsx("span", { className: Je.notification__icon_text, children: ke }) : ke });
  }, ne = () => !q.showCloseButton || !q.dismissible ? null : /* @__PURE__ */ l.jsx(
    "button",
    {
      className: Je.notification__close,
      onClick: K,
      "aria-label": "Close notification",
      children: "×"
    }
  ), ue = () => {
    var ke;
    return q.kind.includes("confirm") ? /* @__PURE__ */ l.jsxs(f, { className: Je.notification__actions, children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: Je.notification__action + " " + Je["notification__action--confirm"],
          onClick: pe,
          children: q.confirmText || "Confirm"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: Je.notification__action + " " + Je["notification__action--cancel"],
          onClick: de,
          children: q.cancelText || "Cancel"
        }
      )
    ] }) : (ke = q.actions) != null && ke.length ? /* @__PURE__ */ l.jsx(f, { className: Je.notification__actions, children: q.actions.map((he, W) => /* @__PURE__ */ l.jsx(
      "button",
      {
        className: Je.notification__action + (he.variant ? " " + Je[`notification__action--${he.variant}`] : ""),
        onClick: () => Pe(he),
        disabled: he.disabled,
        children: he.label
      },
      W
    )) }) : null;
  }, re = () => !q.showProgress || !q.autoHide ? null : /* @__PURE__ */ l.jsx(f, { className: Je.notification__progress, children: /* @__PURE__ */ l.jsx(
    f,
    {
      className: Je.notification__progress_bar,
      style: { width: `${ie}%` }
    }
  ) });
  return !x && q.exitAnimation && setTimeout(() => {
    O(!1);
  }, 300), !x && !q.exitAnimation ? null : /* @__PURE__ */ l.jsxs(
    f,
    {
      ...ce,
      ref: n,
      className: be,
      onClick: Q,
      onMouseEnter: () => q.pauseOnHover && Z(!0),
      onMouseLeave: () => q.pauseOnHover && Z(!1),
      role: "alert",
      "aria-live": "polite",
      children: [
        g && /* @__PURE__ */ l.jsx(f, { className: Je.notification__image, children: /* @__PURE__ */ l.jsx("img", { src: g, alt: "" }) }),
        ee(),
        /* @__PURE__ */ l.jsxs(f, { className: Je.notification__content, children: [
          q.title && /* @__PURE__ */ l.jsx("div", { className: Je.notification__title, children: q.title }),
          q.message && /* @__PURE__ */ l.jsx("div", { className: Je.notification__message, children: q.message }),
          c && /* @__PURE__ */ l.jsx("div", { className: Je.notification__children, children: c }),
          ue()
        ] }),
        ne(),
        re()
      ]
    }
  );
});
Ge.displayName = "Notification";
Ge.Presets = {
  toast: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "toast", ...t }),
  toastSuccess: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "toast-success", ...t }),
  toastError: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "toast-error", ...t }),
  toastWarning: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "toast-warning", ...t }),
  toastInfo: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "toast-info", ...t }),
  snackbar: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "snackbar", ...t }),
  snackbarAction: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "snackbar-action", ...t }),
  snackbarPersistent: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "snackbar-persistent", ...t }),
  alert: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "alert", ...t }),
  alertSuccess: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "alert-success", ...t }),
  alertError: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "alert-error", ...t }),
  alertWarning: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "alert-warning", ...t }),
  alertInfo: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "alert-info", ...t }),
  banner: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "banner", ...t }),
  bannerAnnouncement: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "banner-announcement", ...t }),
  bannerPromotion: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "banner-promotion", ...t }),
  bannerUpdate: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "banner-update", ...t }),
  confirmDialog: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "confirm-dialog", ...t }),
  confirmDelete: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "confirm-delete", ...t }),
  confirmAction: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "confirm-action", ...t }),
  confirmNavigation: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "confirm-navigation", ...t }),
  achievementToast: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "achievement-toast", ...t }),
  gameAlert: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "game-alert", ...t }),
  matchNotification: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "match-notification", ...t }),
  socialNotification: (t = {}) => /* @__PURE__ */ l.jsx(Ge, { kind: "social-notification", ...t })
};
const p5 = di(Ge), Kl = Le(
  ({ kind: t = "linear-progress", ...n }, a) => /* @__PURE__ */ l.jsx(Kl, { ref: a, kind: t, ...n })
);
Kl.displayName = "Progress";
const c3 = {
  // Loading indicators
  "loading-spinner": {
    kind: "loading-spinner",
    variant: "primary",
    size: "md",
    animation: "spin",
    label: "Loading...",
    indeterminate: !0,
    duration: 1e3
  },
  "dots-loader": {
    kind: "dots-loader",
    variant: "primary",
    size: "md",
    animation: "bounce",
    label: "Loading...",
    indeterminate: !0,
    duration: 1200
  },
  "pulse-loader": {
    kind: "pulse-loader",
    variant: "primary",
    size: "md",
    animation: "pulse",
    label: "Loading...",
    indeterminate: !0,
    duration: 2e3
  },
  "bounce-loader": {
    kind: "bounce-loader",
    variant: "primary",
    size: "md",
    animation: "bounce",
    label: "Loading...",
    indeterminate: !0,
    duration: 800
  },
  "skeleton-loader": {
    kind: "skeleton-loader",
    variant: "secondary",
    size: "md",
    animation: "slide",
    indeterminate: !0,
    duration: 1500
  },
  // Progress bars
  "linear-progress": {
    kind: "linear-progress",
    variant: "primary",
    size: "md",
    animation: "none",
    showPercentage: !0,
    thickness: 8
  },
  "circular-progress": {
    kind: "circular-progress",
    variant: "primary",
    size: "md",
    animation: "none",
    showPercentage: !0,
    thickness: 4
  },
  "radial-progress": {
    kind: "radial-progress",
    variant: "primary",
    size: "lg",
    animation: "none",
    showPercentage: !0,
    showValue: !0,
    thickness: 6
  },
  "step-progress": {
    kind: "step-progress",
    variant: "primary",
    size: "md",
    animation: "none",
    orientation: "horizontal",
    steps: []
  },
  "multi-step": {
    kind: "multi-step",
    variant: "primary",
    size: "md",
    animation: "none",
    orientation: "horizontal",
    showPercentage: !0,
    steps: []
  },
  // Upload/Download progress
  "upload-progress": {
    kind: "upload-progress",
    variant: "success",
    size: "md",
    animation: "slide",
    label: "Uploading...",
    showPercentage: !0,
    showValue: !0,
    striped: !0,
    animated: !0
  },
  "download-progress": {
    kind: "download-progress",
    variant: "info",
    size: "md",
    animation: "slide",
    label: "Downloading...",
    showPercentage: !0,
    showValue: !0,
    striped: !0,
    animated: !0
  },
  "sync-progress": {
    kind: "sync-progress",
    variant: "primary",
    size: "sm",
    animation: "pulse",
    label: "Syncing...",
    showPercentage: !1,
    indeterminate: !0
  },
  // Game/Activity progress
  "level-progress": {
    kind: "level-progress",
    variant: "warning",
    size: "md",
    animation: "none",
    label: "Level Progress",
    showPercentage: !1,
    showValue: !0,
    thickness: 12
  },
  "achievement-progress": {
    kind: "achievement-progress",
    variant: "success",
    size: "lg",
    animation: "none",
    showPercentage: !0,
    thickness: 8
  },
  "completion-progress": {
    kind: "completion-progress",
    variant: "primary",
    size: "md",
    animation: "none",
    label: "Completion",
    showPercentage: !0,
    thickness: 6
  },
  "health-bar": {
    kind: "health-bar",
    variant: "error",
    size: "md",
    animation: "none",
    showValue: !0,
    thickness: 10,
    color: "#dc2626"
  },
  "experience-bar": {
    kind: "experience-bar",
    variant: "info",
    size: "sm",
    animation: "none",
    showValue: !0,
    thickness: 6,
    color: "#3b82f6"
  },
  // System progress
  "installation-progress": {
    kind: "installation-progress",
    variant: "primary",
    size: "lg",
    animation: "slide",
    label: "Installing...",
    description: "Please wait while the installation completes",
    showPercentage: !0,
    showValue: !0,
    striped: !0,
    animated: !0
  },
  "backup-progress": {
    kind: "backup-progress",
    variant: "success",
    size: "md",
    animation: "slide",
    label: "Creating backup...",
    showPercentage: !0,
    showValue: !0,
    striped: !0
  },
  "processing-progress": {
    kind: "processing-progress",
    variant: "primary",
    size: "md",
    animation: "pulse",
    label: "Processing...",
    indeterminate: !0
  },
  "battery-indicator": {
    kind: "battery-indicator",
    variant: "success",
    size: "sm",
    animation: "none",
    showPercentage: !0,
    thickness: 8
  }
}, f5 = (t) => c3[t], Ns = {
  // Basic Tables
  "data-table": {
    kind: "data-table",
    variant: "default",
    layout: "auto",
    sortable: !0,
    filterable: !1,
    selectable: !1,
    hoverEffects: !0,
    stickyHeader: !1
  },
  "simple-table": {
    kind: "simple-table",
    variant: "minimal",
    layout: "auto",
    sortable: !1,
    filterable: !1,
    selectable: !1,
    hoverEffects: !1
  },
  "sortable-table": {
    kind: "sortable-table",
    variant: "default",
    layout: "auto",
    sortable: !0,
    multiSort: !1,
    hoverEffects: !0,
    stickyHeader: !1
  },
  "filterable-table": {
    kind: "filterable-table",
    variant: "default",
    layout: "responsive",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    searchPlaceholder: "Search...",
    hoverEffects: !0
  },
  // Advanced Tables
  "data-grid": {
    kind: "data-grid",
    variant: "modern",
    layout: "fixed",
    sortable: !0,
    filterable: !0,
    selectable: !0,
    selectionMode: "multiple",
    pagination: !0,
    stickyHeader: !0,
    hoverEffects: !0,
    borderStyle: "all"
  },
  "editable-grid": {
    kind: "editable-grid",
    variant: "bordered",
    layout: "fixed",
    sortable: !0,
    filterable: !0,
    editable: !0,
    selectable: !0,
    selectionMode: "single",
    hoverEffects: !0,
    clickableRows: !0
  },
  "selectable-grid": {
    kind: "selectable-grid",
    variant: "striped",
    layout: "auto",
    sortable: !0,
    selectable: !0,
    selectionMode: "multiple",
    hoverEffects: !0,
    borderStyle: "horizontal"
  },
  "expandable-grid": {
    kind: "expandable-grid",
    variant: "default",
    layout: "auto",
    sortable: !0,
    expandable: !0,
    expandableRows: !0,
    hoverEffects: !0,
    clickableRows: !0
  },
  // Loading States
  "skeleton-table": {
    kind: "skeleton-table",
    variant: "minimal",
    layout: "auto",
    loading: !0,
    loadingRows: 5,
    sortable: !1,
    filterable: !1,
    selectable: !1
  },
  "loading-table": {
    kind: "loading-table",
    variant: "default",
    layout: "auto",
    loading: !0,
    sortable: !1,
    filterable: !1,
    selectable: !1
  },
  // Specialized Tables
  "pricing-table": {
    kind: "pricing-table",
    variant: "modern",
    layout: "fixed",
    sortable: !1,
    filterable: !1,
    selectable: !1,
    borderStyle: "all",
    hoverEffects: !0
  },
  "comparison-table": {
    kind: "comparison-table",
    variant: "bordered",
    layout: "auto",
    sortable: !0,
    filterable: !1,
    selectable: !1,
    stickyHeader: !0,
    borderStyle: "all"
  },
  "stats-table": {
    kind: "stats-table",
    variant: "compact",
    layout: "auto",
    sortable: !0,
    filterable: !1,
    selectable: !1,
    zebraStripes: !0,
    hoverEffects: !0
  },
  "leaderboard-table": {
    kind: "leaderboard-table",
    variant: "spacious",
    layout: "auto",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    selectable: !1,
    hoverEffects: !0,
    pagination: !0
  }
}, Yl = (t) => Ns[t] || Ns["data-table"], _3 = (t, n) => ({
  ...t,
  ...n,
  columns: n.columns || t.columns,
  data: n.data || t.data
}), g5 = (t, n = {}) => {
  const a = Yl(t);
  return _3(a, n);
}, b5 = (t) => {
  const n = [];
  if (t.kind || n.push("Table kind is required"), t.pagination && typeof t.pagination == "object") {
    const a = t.pagination;
    a.page < 1 && n.push("Pagination page must be >= 1"), a.pageSize < 1 && n.push("Pagination pageSize must be >= 1");
  }
  return t.selectable && !t.selectionMode && n.push(
    "Selection mode required when selectable is true"
  ), n;
}, d3 = "_container_1khcc_117", u3 = "_flex_1khcc_248", m3 = "_grid_1khcc_344", h3 = "_relative_1khcc_726", p3 = "_absolute_1khcc_730", f3 = "_fixed_1khcc_734", g3 = "_sticky_1khcc_738", b3 = "_truncate_1khcc_877", y3 = "_border_1khcc_937", x3 = "_rounded_1khcc_977", v3 = "_shadow_1khcc_1009", w3 = "_transition_1khcc_1081", k3 = "_small_1khcc_1581", S3 = "_large_1khcc_1585", C3 = "_card_1khcc_1633", j3 = "_table_container_1khcc_1758", z3 = "_table_wrapper_1khcc_1775", T3 = "_table_1khcc_1231", P3 = "_table__header_1khcc_1833", N3 = "_table__header_row_1khcc_1848", E3 = "_table__header_cell_1khcc_1852", I3 = "_table__header_content_1khcc_1884", L3 = "_table__sort_indicator_1khcc_1893", A3 = "_table__body_1khcc_1902", M3 = "_table__row_1khcc_1906", O3 = "_table__cell_1khcc_1942", R3 = "_table__empty_row_1khcc_1957", D3 = "_table__empty_cell_1khcc_1957", B3 = "_table__expand_button_1khcc_1964", $3 = "_table__search_1khcc_1981", F3 = "_table__search_input_1khcc_1987", H3 = "_skeleton_content_1khcc_2006", Me = {
  container: d3,
  "container-sm": "_container-sm_1khcc_133",
  "container-md": "_container-md_1khcc_149",
  "container-lg": "_container-lg_1khcc_165",
  "container-xl": "_container-xl_1khcc_181",
  "container-2xl": "_container-2xl_1khcc_197",
  "safe-area": "_safe-area_1khcc_213",
  "overflow-hidden": "_overflow-hidden_1khcc_219",
  "overflow-auto": "_overflow-auto_1khcc_223",
  "overflow-x-auto": "_overflow-x-auto_1khcc_228",
  "overflow-y-auto": "_overflow-y-auto_1khcc_234",
  "box-border": "_box-border_1khcc_240",
  "box-content": "_box-content_1khcc_244",
  flex: u3,
  "flex-col": "_flex-col_1khcc_252",
  "flex-row": "_flex-row_1khcc_257",
  "flex-wrap": "_flex-wrap_1khcc_262",
  "flex-nowrap": "_flex-nowrap_1khcc_267",
  "flex-center": "_flex-center_1khcc_272",
  "flex-between": "_flex-between_1khcc_278",
  "justify-start": "_justify-start_1khcc_284",
  "justify-center": "_justify-center_1khcc_288",
  "justify-end": "_justify-end_1khcc_292",
  "justify-between": "_justify-between_1khcc_296",
  "justify-around": "_justify-around_1khcc_300",
  "items-start": "_items-start_1khcc_304",
  "items-center": "_items-center_1khcc_308",
  "items-end": "_items-end_1khcc_312",
  "items-stretch": "_items-stretch_1khcc_316",
  "flex-1": "_flex-1_1khcc_320",
  "flex-auto": "_flex-auto_1khcc_324",
  "flex-none": "_flex-none_1khcc_328",
  "flex-grow": "_flex-grow_1khcc_332",
  "flex-shrink": "_flex-shrink_1khcc_336",
  "flex-shrink-0": "_flex-shrink-0_1khcc_340",
  grid: m3,
  "grid-auto-fit": "_grid-auto-fit_1khcc_348",
  "grid-auto-fill": "_grid-auto-fill_1khcc_355",
  "grid-cols-1": "_grid-cols-1_1khcc_362",
  "grid-cols-2": "_grid-cols-2_1khcc_366",
  "grid-cols-3": "_grid-cols-3_1khcc_370",
  "grid-cols-4": "_grid-cols-4_1khcc_374",
  "grid-cols-6": "_grid-cols-6_1khcc_378",
  "grid-cols-12": "_grid-cols-12_1khcc_382",
  "gap-0": "_gap-0_1khcc_386",
  "gap-1": "_gap-1_1khcc_390",
  "gap-2": "_gap-2_1khcc_394",
  "gap-3": "_gap-3_1khcc_398",
  "gap-4": "_gap-4_1khcc_402",
  "gap-5": "_gap-5_1khcc_406",
  "gap-6": "_gap-6_1khcc_410",
  "gap-8": "_gap-8_1khcc_414",
  "gap-10": "_gap-10_1khcc_418",
  "gap-12": "_gap-12_1khcc_422",
  "p-0": "_p-0_1khcc_426",
  "p-1": "_p-1_1khcc_430",
  "p-2": "_p-2_1khcc_434",
  "p-3": "_p-3_1khcc_438",
  "p-4": "_p-4_1khcc_442",
  "p-5": "_p-5_1khcc_446",
  "p-6": "_p-6_1khcc_450",
  "p-8": "_p-8_1khcc_454",
  "p-10": "_p-10_1khcc_458",
  "p-12": "_p-12_1khcc_462",
  "px-0": "_px-0_1khcc_466",
  "px-1": "_px-1_1khcc_471",
  "px-2": "_px-2_1khcc_476",
  "px-3": "_px-3_1khcc_481",
  "px-4": "_px-4_1khcc_486",
  "px-6": "_px-6_1khcc_491",
  "py-0": "_py-0_1khcc_496",
  "py-1": "_py-1_1khcc_501",
  "py-2": "_py-2_1khcc_506",
  "py-3": "_py-3_1khcc_511",
  "py-4": "_py-4_1khcc_516",
  "py-6": "_py-6_1khcc_521",
  "m-0": "_m-0_1khcc_526",
  "m-1": "_m-1_1khcc_530",
  "m-2": "_m-2_1khcc_534",
  "m-3": "_m-3_1khcc_538",
  "m-4": "_m-4_1khcc_542",
  "m-auto": "_m-auto_1khcc_546",
  "mx-auto": "_mx-auto_1khcc_550",
  "my-auto": "_my-auto_1khcc_555",
  "mx-0": "_mx-0_1khcc_560",
  "mx-1": "_mx-1_1khcc_565",
  "mx-2": "_mx-2_1khcc_570",
  "mx-3": "_mx-3_1khcc_575",
  "mx-4": "_mx-4_1khcc_580",
  "my-0": "_my-0_1khcc_585",
  "my-1": "_my-1_1khcc_590",
  "my-2": "_my-2_1khcc_595",
  "my-3": "_my-3_1khcc_600",
  "my-4": "_my-4_1khcc_605",
  "w-full": "_w-full_1khcc_610",
  "w-auto": "_w-auto_1khcc_614",
  "w-fit": "_w-fit_1khcc_618",
  "w-min": "_w-min_1khcc_622",
  "w-max": "_w-max_1khcc_626",
  "max-w-none": "_max-w-none_1khcc_630",
  "max-w-xs": "_max-w-xs_1khcc_634",
  "max-w-sm": "_max-w-sm_1khcc_638",
  "max-w-md": "_max-w-md_1khcc_642",
  "max-w-lg": "_max-w-lg_1khcc_646",
  "max-w-xl": "_max-w-xl_1khcc_650",
  "max-w-2xl": "_max-w-2xl_1khcc_654",
  "max-w-3xl": "_max-w-3xl_1khcc_658",
  "max-w-4xl": "_max-w-4xl_1khcc_662",
  "max-w-5xl": "_max-w-5xl_1khcc_666",
  "max-w-6xl": "_max-w-6xl_1khcc_670",
  "max-w-7xl": "_max-w-7xl_1khcc_674",
  "max-w-full": "_max-w-full_1khcc_678",
  "min-w-0": "_min-w-0_1khcc_682",
  "min-w-full": "_min-w-full_1khcc_686",
  "h-auto": "_h-auto_1khcc_690",
  "h-fit": "_h-fit_1khcc_694",
  "h-full": "_h-full_1khcc_698",
  "h-screen": "_h-screen_1khcc_702",
  "max-h-full": "_max-h-full_1khcc_706",
  "max-h-screen": "_max-h-screen_1khcc_710",
  "min-h-0": "_min-h-0_1khcc_714",
  "min-h-full": "_min-h-full_1khcc_718",
  "min-h-screen": "_min-h-screen_1khcc_722",
  relative: h3,
  absolute: p3,
  fixed: f3,
  sticky: g3,
  static: "_static_1khcc_742",
  "inset-0": "_inset-0_1khcc_746",
  "top-0": "_top-0_1khcc_753",
  "right-0": "_right-0_1khcc_757",
  "bottom-0": "_bottom-0_1khcc_761",
  "left-0": "_left-0_1khcc_765",
  "text-left": "_text-left_1khcc_769",
  "text-center": "_text-center_1khcc_773",
  "text-right": "_text-right_1khcc_777",
  "text-justify": "_text-justify_1khcc_781",
  "text-xs": "_text-xs_1khcc_785",
  "text-sm": "_text-sm_1khcc_789",
  "text-base": "_text-base_1khcc_793",
  "text-lg": "_text-lg_1khcc_797",
  "text-xl": "_text-xl_1khcc_801",
  "text-2xl": "_text-2xl_1khcc_805",
  "text-3xl": "_text-3xl_1khcc_809",
  "text-4xl": "_text-4xl_1khcc_813",
  "font-normal": "_font-normal_1khcc_817",
  "font-medium": "_font-medium_1khcc_821",
  "font-semibold": "_font-semibold_1khcc_825",
  "font-bold": "_font-bold_1khcc_829",
  "leading-tight": "_leading-tight_1khcc_833",
  "leading-normal": "_leading-normal_1khcc_837",
  "leading-relaxed": "_leading-relaxed_1khcc_841",
  "text-primary": "_text-primary_1khcc_845",
  "text-secondary": "_text-secondary_1khcc_849",
  "text-muted": "_text-muted_1khcc_853",
  "text-inverse": "_text-inverse_1khcc_857",
  "text-blue": "_text-blue_1khcc_861",
  "text-red": "_text-red_1khcc_865",
  "text-green": "_text-green_1khcc_869",
  "text-yellow": "_text-yellow_1khcc_873",
  truncate: b3,
  "text-ellipsis": "_text-ellipsis_1khcc_884",
  "text-clip": "_text-clip_1khcc_891",
  "bg-transparent": "_bg-transparent_1khcc_897",
  "bg-white": "_bg-white_1khcc_901",
  "bg-gray-50": "_bg-gray-50_1khcc_905",
  "bg-gray-100": "_bg-gray-100_1khcc_909",
  "bg-gray-200": "_bg-gray-200_1khcc_913",
  "bg-primary": "_bg-primary_1khcc_917",
  "bg-secondary": "_bg-secondary_1khcc_921",
  "bg-success": "_bg-success_1khcc_925",
  "bg-danger": "_bg-danger_1khcc_929",
  "bg-warning": "_bg-warning_1khcc_933",
  border: y3,
  "border-0": "_border-0_1khcc_941",
  "border-t": "_border-t_1khcc_945",
  "border-r": "_border-r_1khcc_949",
  "border-b": "_border-b_1khcc_953",
  "border-l": "_border-l_1khcc_957",
  "border-gray-200": "_border-gray-200_1khcc_961",
  "border-gray-300": "_border-gray-300_1khcc_965",
  "border-primary": "_border-primary_1khcc_969",
  "border-danger": "_border-danger_1khcc_973",
  "rounded-none": "_rounded-none_1khcc_977",
  "rounded-sm": "_rounded-sm_1khcc_981",
  rounded: x3,
  "rounded-md": "_rounded-md_1khcc_989",
  "rounded-lg": "_rounded-lg_1khcc_993",
  "rounded-xl": "_rounded-xl_1khcc_997",
  "rounded-2xl": "_rounded-2xl_1khcc_1001",
  "rounded-full": "_rounded-full_1khcc_1005",
  "shadow-none": "_shadow-none_1khcc_1009",
  "shadow-sm": "_shadow-sm_1khcc_1013",
  shadow: v3,
  "shadow-md": "_shadow-md_1khcc_1021",
  "shadow-lg": "_shadow-lg_1khcc_1025",
  "shadow-xl": "_shadow-xl_1khcc_1029",
  "z-0": "_z-0_1khcc_1033",
  "z-10": "_z-10_1khcc_1037",
  "z-20": "_z-20_1khcc_1041",
  "z-30": "_z-30_1khcc_1045",
  "z-40": "_z-40_1khcc_1049",
  "z-50": "_z-50_1khcc_1053",
  "z-auto": "_z-auto_1khcc_1057",
  "z-dropdown": "_z-dropdown_1khcc_1061",
  "z-sticky": "_z-sticky_1khcc_1065",
  "z-fixed": "_z-fixed_1khcc_1069",
  "z-modal": "_z-modal_1khcc_1073",
  "z-tooltip": "_z-tooltip_1khcc_1077",
  "transition-none": "_transition-none_1khcc_1081",
  "transition-all": "_transition-all_1khcc_1085",
  "transition-fast": "_transition-fast_1khcc_1089",
  "transition-slow": "_transition-slow_1khcc_1093",
  "sr-only": "_sr-only_1khcc_1097",
  "focus-ring": "_focus-ring_1khcc_1109",
  "cursor-default": "_cursor-default_1khcc_1115",
  "cursor-pointer": "_cursor-pointer_1khcc_1119",
  "cursor-not-allowed": "_cursor-not-allowed_1khcc_1123",
  "select-none": "_select-none_1khcc_1127",
  "select-text": "_select-text_1khcc_1131",
  "select-all": "_select-all_1khcc_1135",
  "select-auto": "_select-auto_1khcc_1139",
  "pointer-events-none": "_pointer-events-none_1khcc_1143",
  "pointer-events-auto": "_pointer-events-auto_1khcc_1147",
  "gap-sm": "_gap-sm_1khcc_1151",
  "gap-md": "_gap-md_1khcc_1155",
  "gap-lg": "_gap-lg_1khcc_1159",
  "gap-xl": "_gap-xl_1khcc_1163",
  "p-sm": "_p-sm_1khcc_1167",
  "p-md": "_p-md_1khcc_1171",
  "p-lg": "_p-lg_1khcc_1175",
  "p-xl": "_p-xl_1khcc_1179",
  "m-sm": "_m-sm_1khcc_1183",
  "m-md": "_m-md_1khcc_1187",
  "m-lg": "_m-lg_1khcc_1191",
  "m-xl": "_m-xl_1khcc_1195",
  "text-gray": "_text-gray_1khcc_1199",
  "mobile:hidden": "_mobile:hidden_1khcc_1204",
  "mobile:block": "_mobile:block_1khcc_1207",
  "mobile:flex": "_mobile:flex_1khcc_1210",
  "mobile:grid": "_mobile:grid_1khcc_1213",
  "mobile:text-sm": "_mobile:text-sm_1khcc_1216",
  "mobile:text-xs": "_mobile:text-xs_1khcc_1219",
  "mobile:p-2": "_mobile:p-2_1khcc_1222",
  "mobile:px-2": "_mobile:px-2_1khcc_1225",
  "tablet:block": "_tablet:block_1khcc_1231",
  "tablet:flex": "_tablet:flex_1khcc_1234",
  "tablet:grid": "_tablet:grid_1khcc_1237",
  "tablet:hidden": "_tablet:hidden_1khcc_1240",
  "desktop:block": "_desktop:block_1khcc_1245",
  "desktop:flex": "_desktop:flex_1khcc_1248",
  "desktop:grid": "_desktop:grid_1khcc_1251",
  "desktop:hidden": "_desktop:hidden_1khcc_1254",
  "bg-gray": "_bg-gray_1khcc_905",
  "border-secondary": "_border-secondary_1khcc_1278",
  "border-gray": "_border-gray_1khcc_961",
  "shadow-glow": "_shadow-glow_1khcc_1314",
  "w-8": "_w-8_1khcc_1362",
  "w-10": "_w-10_1khcc_1366",
  "w-12": "_w-12_1khcc_1370",
  "w-16": "_w-16_1khcc_1374",
  "h-8": "_h-8_1khcc_1378",
  "h-10": "_h-10_1khcc_1382",
  "h-12": "_h-12_1khcc_1386",
  "h-16": "_h-16_1khcc_1390",
  "user-select-none": "_user-select-none_1khcc_1406",
  transition: w3,
  "transition-colors": "_transition-colors_1khcc_1414",
  "transition-transform": "_transition-transform_1khcc_1418",
  "hover-scale": "_hover-scale_1khcc_1422",
  "fade-in": "_fade-in_1khcc_1429",
  "status-online": "_status-online_1khcc_1441",
  "status-offline": "_status-offline_1khcc_1451",
  "status-away": "_status-away_1khcc_1461",
  "status-busy": "_status-busy_1khcc_1471",
  "modal-overlay": "_modal-overlay_1khcc_1481",
  "modal-content": "_modal-content_1khcc_1495",
  "close-button-absolute": "_close-button-absolute_1khcc_1509",
  small: k3,
  large: S3,
  "primary-button": "_primary-button_1khcc_1590",
  "secondary-button": "_secondary-button_1khcc_1594",
  card: C3,
  "input-base": "_input-base_1khcc_1647",
  "chat-window": "_chat-window_1khcc_1679",
  "chat-message": "_chat-message_1khcc_1690",
  "z-overlay": "_z-overlay_1khcc_1715",
  "mobile-hidden": "_mobile-hidden_1khcc_1720",
  "mobile-flex-col": "_mobile-flex-col_1khcc_1723",
  "mobile-text-center": "_mobile-text-center_1khcc_1726",
  "mobile-p-sm": "_mobile-p-sm_1khcc_1729",
  "mobile-gap-sm": "_mobile-gap-sm_1khcc_1732",
  "desktop-hidden": "_desktop-hidden_1khcc_1737",
  "print-hidden": "_print-hidden_1khcc_1742",
  table_container: j3,
  table_wrapper: z3,
  table: T3,
  "table--fixed": "_table--fixed_1khcc_1818",
  "table--auto": "_table--auto_1khcc_1821",
  "table--responsive": "_table--responsive_1khcc_1824",
  table__header: P3,
  "table--sticky-header": "_table--sticky-header_1khcc_1837",
  table__header_row: N3,
  table__header_cell: E3,
  "table__header_cell--sortable": "_table__header_cell--sortable_1khcc_1864",
  table__header_content: I3,
  table__sort_indicator: L3,
  table__body: A3,
  table__row: M3,
  "table--hover": "_table--hover_1khcc_1913",
  "table--clickable": "_table--clickable_1khcc_1916",
  "table__row--selected": "_table__row--selected_1khcc_1931",
  "table__row--expanded": "_table__row--expanded_1khcc_1935",
  "table__row--skeleton": "_table__row--skeleton_1khcc_1938",
  table__cell: O3,
  "table__cell--skeleton": "_table__cell--skeleton_1khcc_1953",
  table__empty_row: R3,
  table__empty_cell: D3,
  table__expand_button: B3,
  table__search: $3,
  table__search_input: F3,
  skeleton_content: H3,
  "skeleton-loading": "_skeleton-loading_1khcc_1",
  "table--loading": "_table--loading_1khcc_2022",
  "table--default": "_table--default_1khcc_2027",
  "table--minimal": "_table--minimal_1khcc_2031",
  "table--striped": "_table--striped_1khcc_2051",
  "table--bordered": "_table--bordered_1khcc_2055",
  "table--compact": "_table--compact_1khcc_2067",
  "table--spacious": "_table--spacious_1khcc_2072",
  "table--modern": "_table--modern_1khcc_2077",
  "table--glass": "_table--glass_1khcc_2095",
  "table--border-none": "_table--border-none_1khcc_2107",
  "table--border-horizontal": "_table--border-horizontal_1khcc_2113",
  "table--border-vertical": "_table--border-vertical_1khcc_2119",
  "table--border-all": "_table--border-all_1khcc_2123",
  "table--data-grid": "_table--data-grid_1khcc_2127",
  "table--pricing-table": "_table--pricing-table_1khcc_2132",
  "table--comparison-table": "_table--comparison-table_1khcc_2141",
  "table--stats-table": "_table--stats-table_1khcc_2151",
  "table--leaderboard-table": "_table--leaderboard-table_1khcc_2155",
  "loading-shimmer": "_loading-shimmer_1khcc_1"
}, Yo = Le(
  (t, n) => {
    const {
      kind: a,
      children: r,
      className: c,
      componentId: d,
      columns: u,
      data: h,
      keyField: p = "id",
      // Configuration overrides
      variant: g,
      layout: y,
      sortable: v,
      filterable: z,
      selectable: k,
      expandable: N,
      editable: P,
      // Sorting
      defaultSort: $,
      multiSort: F,
      onSort: H,
      // Filtering
      defaultFilters: A,
      searchable: R,
      searchPlaceholder: T,
      onFilter: E,
      // Pagination
      pagination: J,
      // Selection
      selectionMode: G,
      selectedRows: B,
      onSelect: M,
      // Expansion
      expandableRows: j,
      defaultExpanded: V,
      onExpand: Q,
      // Loading
      loading: le,
      loadingRows: ae,
      // Styling
      height: te,
      maxHeight: ce,
      minHeight: w,
      stickyHeader: q,
      zebraStripes: x,
      borderStyle: O,
      // Behavior
      clickableRows: S,
      hoverEffects: Z,
      onRowClick: ie,
      onRowDoubleClick: X,
      onCellEdit: K,
      // Custom styling
      headerClassName: pe,
      bodyClassName: de,
      rowClassName: Pe,
      cellClassName: be,
      ...ee
    } = t, ne = Yl(a), ue = (D, fe) => D !== void 0 ? D : fe, re = {
      ...ne,
      variant: g || ne.variant,
      layout: y || ne.layout,
      sortable: ue(
        v,
        ne.sortable
      ),
      filterable: ue(
        z,
        ne.filterable
      ),
      selectable: ue(
        k,
        ne.selectable
      ),
      expandable: ue(
        N,
        ne.expandable
      ),
      editable: ue(
        P,
        ne.editable
      ),
      multiSort: ue(
        F,
        ne.multiSort
      ),
      searchable: ue(
        R,
        ne.searchable
      ),
      pagination: ue(
        J,
        ne.pagination
      ),
      selectionMode: G || ne.selectionMode,
      expandableRows: ue(
        j,
        ne.expandableRows
      ),
      loading: ue(
        le,
        ne.loading
      ),
      loadingRows: ae || ne.loadingRows,
      stickyHeader: ue(
        q,
        ne.stickyHeader
      ),
      zebraStripes: ue(
        x,
        ne.zebraStripes
      ),
      borderStyle: O || ne.borderStyle,
      clickableRows: ue(
        S,
        ne.clickableRows
      ),
      hoverEffects: ue(
        Z,
        ne.hoverEffects
      )
    }, ke = sn(), he = d || `table-${ke}`, W = vi();
    Te(() => (W(
      ty({
        componentId: he,
        initialState: {
          sorting: $ && $.direction !== "none" ? {
            column: $.column,
            direction: $.direction
          } : { column: "", direction: "asc" },
          filters: A ? A.reduce(
            (D, fe) => (D[fe.column] = fe.value, D),
            {}
          ) : {},
          searchTerm: "",
          selectedRows: new Set(B || []),
          expandedRows: new Set(V || []),
          editingCell: null
        }
      })
    ), () => {
      W(
        oy({
          componentId: he
        })
      );
    }), [
      W,
      he,
      $,
      A,
      B,
      V
    ]);
    const U = It(
      (D) => ry(D, he)
    ), Oe = It(
      (D) => sy(D, he)
    ), at = It(
      (D) => ly(D, he)
    ), qe = It(
      (D) => cy(D, he)
    ), We = It(
      (D) => _y(D, he)
    ), De = It(
      (D) => dy(D, he)
    ), xe = Array.from(qe), $e = Array.from(We), et = Object.entries(Oe).map(
      ([D, fe]) => ({
        column: D,
        value: fe,
        operator: "equals"
      })
    ), st = u || [], Ae = h || [], vt = _i(() => re.loading ? Array.from(
      { length: re.loadingRows || 5 },
      (fe, Se) => {
        const kt = { id: `skeleton-${Se}` };
        return st.forEach((Ft) => {
          kt[Ft.key] = "...";
        }), kt;
      }
    ) : [], [re.loading, re.loadingRows, st]), zt = re.loading ? vt : Ae, wt = _i(() => !re.searchable || !at.trim() ? zt : zt.filter((D) => st.some((fe) => {
      const Se = D[fe.key];
      return String(Se).toLowerCase().includes(at.toLowerCase());
    })), [
      zt,
      at,
      st,
      re.searchable
    ]), ni = _i(() => Oe.length === 0 ? wt : wt.filter((D) => et.every(
      (fe) => {
        const Se = D[fe.column];
        switch (fe.operator || "equals") {
          case "equals":
            return Se === fe.value;
          case "contains":
            return String(Se).toLowerCase().includes(
              String(fe.value).toLowerCase()
            );
          case "startsWith":
            return String(Se).toLowerCase().startsWith(
              String(fe.value).toLowerCase()
            );
          case "endsWith":
            return String(Se).toLowerCase().endsWith(
              String(fe.value).toLowerCase()
            );
          case "greaterThan":
            return Number(Se) > Number(fe.value);
          case "lessThan":
            return Number(Se) < Number(fe.value);
          default:
            return !0;
        }
      }
    )), [wt, et]), At = _i(() => !re.sortable || !U.column ? ni : [...ni].sort((D, fe) => {
      const Se = D[U.column], kt = fe[U.column];
      let Ft = 0;
      return Se < kt ? Ft = -1 : Se > kt && (Ft = 1), U.direction === "desc" ? -Ft : Ft;
    }), [ni, U, re.sortable]), ai = (D) => {
      if (!re.sortable) return;
      let fe = "asc";
      U.column === D && (fe = U.direction === "asc" ? "desc" : U.direction === "desc" ? "none" : "asc");
      const Se = { column: D, direction: fe };
      W(
        iy({
          componentId: he,
          sorting: fe === "none" ? { column: "", direction: "asc" } : {
            column: D,
            direction: fe
          }
        })
      ), H == null || H(Se);
    }, Bt = (D, fe) => {
      if (!re.selectable) return;
      let Se;
      re.selectionMode === "single" ? Se = fe ? [D] : [] : Se = fe ? [...xe, D] : xe.filter(
        (kt) => kt !== D
      ), W(
        xs({
          componentId: he,
          selectedRows: Se
        })
      ), M == null || M(Se);
    }, $t = (D) => {
      if (!re.expandable) return;
      const fe = $e.includes(D), Se = fe ? $e.filter(
        (kt) => kt !== D
      ) : [...$e, D];
      W(
        ay({
          componentId: he,
          expandedRows: Se
        })
      ), Q == null || Q(D, !fe);
    }, Vt = (D, fe, Se) => {
      K == null || K(D, fe, Se), W(
        Co({
          componentId: he,
          editingCell: null
        })
      );
    }, wi = [
      Me.table,
      Me[`table--${re.kind}`],
      Me[`table--${re.variant}`],
      Me[`table--${re.layout}`],
      re.stickyHeader && Me["table--sticky-header"],
      re.zebraStripes && Me["table--striped"],
      re.hoverEffects && Me["table--hover"],
      re.clickableRows && Me["table--clickable"],
      re.loading && Me["table--loading"],
      re.borderStyle && Me[`table--border-${re.borderStyle}`],
      c
    ].filter(Boolean).join(" "), ki = [
      Me.table__header,
      pe
    ].filter(Boolean).join(" "), ye = [Me.table__body, de].filter(Boolean).join(" "), Ne = () => /* @__PURE__ */ l.jsx("thead", { className: ki, children: /* @__PURE__ */ l.jsxs("tr", { className: Me.table__header_row, children: [
      re.selectable && /* @__PURE__ */ l.jsx("th", { className: Me.table__header_cell, children: /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          onChange: (D) => {
            const fe = At.map(
              (kt) => kt[p]
            ), Se = D.target.checked ? fe : [];
            W(
              xs({
                componentId: he,
                selectedRows: Se
              })
            ), M == null || M(Se);
          },
          checked: xe.length === At.length && At.length > 0,
          ref: (D) => {
            D && (D.indeterminate = xe.length > 0 && xe.length < At.length);
          }
        }
      ) }),
      re.expandable && /* @__PURE__ */ l.jsx("th", { className: Me.table__header_cell }),
      st.map((D) => /* @__PURE__ */ l.jsx(
        "th",
        {
          className: `${Me.table__header_cell} ${D.sortable !== !1 && re.sortable ? Me["table__header_cell--sortable"] : ""}`,
          style: {
            width: D.width,
            minWidth: D.minWidth,
            maxWidth: D.maxWidth,
            textAlign: D.align || "left"
          },
          onClick: () => D.sortable !== !1 && ai(D.key),
          children: /* @__PURE__ */ l.jsxs(
            "span",
            {
              className: Me.table__header_content,
              children: [
                D.label,
                re.sortable && D.sortable !== !1 && /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: Me.table__sort_indicator,
                    children: U.column === D.key && (U.direction === "asc" ? "↑" : U.direction === "desc" ? "↓" : "")
                  }
                )
              ]
            }
          )
        },
        D.key
      ))
    ] }) }), tt = (D, fe) => {
      const Se = D[p], kt = xe.includes(Se), Ft = $e.includes(Se), ka = typeof Pe == "function" ? Pe(D, fe) : Pe, Sa = [
        Me.table__row,
        kt && Me["table__row--selected"],
        Ft && Me["table__row--expanded"],
        re.loading && Me["table__row--skeleton"],
        ka
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ l.jsxs(
        "tr",
        {
          className: Sa,
          onClick: () => {
            re.clickableRows && (ie == null || ie(D, fe));
          },
          onDoubleClick: () => X == null ? void 0 : X(D, fe),
          children: [
            re.selectable && /* @__PURE__ */ l.jsx("td", { className: Me.table__cell, children: /* @__PURE__ */ l.jsx(
              "input",
              {
                type: re.selectionMode === "single" ? "radio" : "checkbox",
                checked: kt,
                onChange: (mt) => Bt(
                  Se,
                  mt.target.checked
                )
              }
            ) }),
            re.expandable && /* @__PURE__ */ l.jsx("td", { className: Me.table__cell, children: /* @__PURE__ */ l.jsx(
              Ce,
              {
                kind: "ghost",
                className: Me.table__expand_button,
                onClick: (mt) => {
                  mt.stopPropagation(), $t(Se);
                },
                children: Ft ? "−" : "+"
              }
            ) }),
            st.map((mt) => {
              const Li = D[mt.key], Gt = (De == null ? void 0 : De.rowId) === Se && (De == null ? void 0 : De.column) === mt.key, ge = typeof be == "function" ? be(Li, D, mt) : be, On = [
                Me.table__cell,
                re.loading && Me["table__cell--skeleton"],
                ge
              ].filter(Boolean).join(" ");
              return /* @__PURE__ */ l.jsx(
                "td",
                {
                  className: On,
                  style: {
                    textAlign: mt.align || "left"
                  },
                  onDoubleClick: () => {
                    re.editable && W(
                      Co({
                        componentId: he,
                        editingCell: {
                          rowId: Se,
                          column: mt.key
                        }
                      })
                    );
                  },
                  children: Gt ? /* @__PURE__ */ l.jsx(
                    "input",
                    {
                      type: "text",
                      defaultValue: Li,
                      onBlur: (Si) => Vt(
                        Se,
                        mt.key,
                        Si.target.value
                      ),
                      onKeyDown: (Si) => {
                        Si.key === "Enter" ? Vt(
                          Se,
                          mt.key,
                          Si.currentTarget.value
                        ) : Si.key === "Escape" && W(
                          Co({
                            componentId: he,
                            editingCell: null
                          })
                        );
                      },
                      autoFocus: !0
                    }
                  ) : mt.cellRenderer ? mt.cellRenderer(
                    Li,
                    D,
                    mt
                  ) : mt.format ? mt.format(Li) : re.loading ? /* @__PURE__ */ l.jsx(
                    f,
                    {
                      className: Me.skeleton_content
                    }
                  ) : Li
                },
                mt.key
              );
            })
          ]
        },
        Se
      );
    }, Tt = () => re.searchable ? /* @__PURE__ */ l.jsx(f, { className: Me.table__search, children: /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "text",
        placeholder: T || re.searchPlaceholder || "Search...",
        value: at,
        onChange: (D) => W(
          ny({
            componentId: he,
            searchTerm: D.target.value
          })
        ),
        className: Me.table__search_input
      }
    ) }) : null, oi = {
      height: te,
      maxHeight: ce,
      minHeight: w
    };
    return /* @__PURE__ */ l.jsxs(f, { className: Me.table_container, children: [
      Tt(),
      /* @__PURE__ */ l.jsx(
        f,
        {
          className: Me.table_wrapper,
          style: oi,
          children: /* @__PURE__ */ l.jsxs(
            "table",
            {
              ...ee,
              ref: n,
              className: wi,
              children: [
                Ne(),
                /* @__PURE__ */ l.jsxs("tbody", { className: ye, children: [
                  At.map(
                    (D, fe) => tt(D, fe)
                  ),
                  At.length === 0 && !re.loading && /* @__PURE__ */ l.jsx("tr", { className: Me.table__empty_row, children: /* @__PURE__ */ l.jsx(
                    "td",
                    {
                      colSpan: st.length + (re.selectable ? 1 : 0) + (re.expandable ? 1 : 0),
                      className: Me.table__empty_cell,
                      children: "No data available"
                    }
                  ) })
                ] })
              ]
            }
          )
        }
      ),
      r
    ] });
  }
);
Yo.displayName = "Table";
const y5 = di(Yo);
function pt(t) {
  const n = typeof t == "string" ? { kind: t } : t;
  return (a = {}) => {
    const r = { ...n, ...a };
    return it.createElement(Yo, r);
  };
}
const x5 = {
  // Basic Tables
  dataTable: pt("data-table"),
  simpleTable: pt("simple-table"),
  sortableTable: pt("sortable-table"),
  filterableTable: pt("filterable-table"),
  // Advanced Tables
  dataGrid: pt("data-grid"),
  editableGrid: pt("editable-grid"),
  selectableGrid: pt("selectable-grid"),
  expandableGrid: pt("expandable-grid"),
  // Loading States
  skeletonTable: pt("skeleton-table"),
  loadingTable: pt("loading-table"),
  // Specialized Tables
  pricingTable: pt("pricing-table"),
  comparisonTable: pt("comparison-table"),
  statsTable: pt("stats-table"),
  leaderboardTable: pt("leaderboard-table"),
  // Advanced Presets
  dashboardGrid: pt({
    kind: "data-grid",
    variant: "modern",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    pagination: !0,
    stickyHeader: !0
  }),
  adminTable: pt({
    kind: "data-grid",
    variant: "bordered",
    sortable: !0,
    filterable: !0,
    selectable: !0,
    selectionMode: "multiple",
    editable: !0,
    pagination: !0
  }),
  reportTable: pt({
    kind: "stats-table",
    variant: "striped",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    zebraStripes: !0,
    stickyHeader: !0
  }),
  quickList: pt({
    kind: "simple-table",
    variant: "minimal",
    hoverEffects: !0,
    clickableRows: !0
  }),
  gameLeaderboard: pt({
    kind: "leaderboard-table",
    variant: "modern",
    sortable: !0,
    searchable: !0,
    pagination: {
      page: 1,
      pageSize: 10,
      total: 0,
      showSizeSelector: !0,
      pageSizeOptions: [10, 25, 50, 100]
    }
  })
}, U3 = "_container_hi9gt_129", Z3 = "_flex_hi9gt_260", W3 = "_grid_hi9gt_356", V3 = "_relative_hi9gt_738", G3 = "_absolute_hi9gt_742", q3 = "_fixed_hi9gt_746", K3 = "_sticky_hi9gt_750", Y3 = "_truncate_hi9gt_889", J3 = "_border_hi9gt_949", X3 = "_rounded_hi9gt_989", Q3 = "_shadow_hi9gt_1021", e9 = "_transition_hi9gt_1093", t9 = "_small_hi9gt_1593", i9 = "_large_hi9gt_1597", n9 = "_card_hi9gt_1645", a9 = "_utility_hi9gt_1770", o9 = "_utility__icon_hi9gt_2029", r9 = "_utility__label_hi9gt_2035", s9 = "_utility__dismiss_hi9gt_2041", l9 = "_utility__overlay_hi9gt_2078", c9 = "_utility__tooltip_hi9gt_2138", _9 = "_utility__popover_hi9gt_2141", d9 = "_utility__popover_title_hi9gt_2146", u9 = "_utility__popover_content_hi9gt_2151", m9 = "_utility__rating_hi9gt_2154", h9 = "_utility__star_hi9gt_2162", p9 = "_utility__rating_label_hi9gt_2201", f9 = "_utility__stepper_hi9gt_2208", g9 = "_utility__step_hi9gt_2208", b9 = "_utility__step_marker_hi9gt_2237", y9 = "_utility__step_connector_hi9gt_2253", x9 = "_utility__divider_label_hi9gt_2273", Fe = {
  container: U3,
  "container-sm": "_container-sm_hi9gt_145",
  "container-md": "_container-md_hi9gt_161",
  "container-lg": "_container-lg_hi9gt_177",
  "container-xl": "_container-xl_hi9gt_193",
  "container-2xl": "_container-2xl_hi9gt_209",
  "safe-area": "_safe-area_hi9gt_225",
  "overflow-hidden": "_overflow-hidden_hi9gt_231",
  "overflow-auto": "_overflow-auto_hi9gt_235",
  "overflow-x-auto": "_overflow-x-auto_hi9gt_240",
  "overflow-y-auto": "_overflow-y-auto_hi9gt_246",
  "box-border": "_box-border_hi9gt_252",
  "box-content": "_box-content_hi9gt_256",
  flex: Z3,
  "flex-col": "_flex-col_hi9gt_264",
  "flex-row": "_flex-row_hi9gt_269",
  "flex-wrap": "_flex-wrap_hi9gt_274",
  "flex-nowrap": "_flex-nowrap_hi9gt_279",
  "flex-center": "_flex-center_hi9gt_284",
  "flex-between": "_flex-between_hi9gt_290",
  "justify-start": "_justify-start_hi9gt_296",
  "justify-center": "_justify-center_hi9gt_300",
  "justify-end": "_justify-end_hi9gt_304",
  "justify-between": "_justify-between_hi9gt_308",
  "justify-around": "_justify-around_hi9gt_312",
  "items-start": "_items-start_hi9gt_316",
  "items-center": "_items-center_hi9gt_320",
  "items-end": "_items-end_hi9gt_324",
  "items-stretch": "_items-stretch_hi9gt_328",
  "flex-1": "_flex-1_hi9gt_332",
  "flex-auto": "_flex-auto_hi9gt_336",
  "flex-none": "_flex-none_hi9gt_340",
  "flex-grow": "_flex-grow_hi9gt_344",
  "flex-shrink": "_flex-shrink_hi9gt_348",
  "flex-shrink-0": "_flex-shrink-0_hi9gt_352",
  grid: W3,
  "grid-auto-fit": "_grid-auto-fit_hi9gt_360",
  "grid-auto-fill": "_grid-auto-fill_hi9gt_367",
  "grid-cols-1": "_grid-cols-1_hi9gt_374",
  "grid-cols-2": "_grid-cols-2_hi9gt_378",
  "grid-cols-3": "_grid-cols-3_hi9gt_382",
  "grid-cols-4": "_grid-cols-4_hi9gt_386",
  "grid-cols-6": "_grid-cols-6_hi9gt_390",
  "grid-cols-12": "_grid-cols-12_hi9gt_394",
  "gap-0": "_gap-0_hi9gt_398",
  "gap-1": "_gap-1_hi9gt_402",
  "gap-2": "_gap-2_hi9gt_406",
  "gap-3": "_gap-3_hi9gt_410",
  "gap-4": "_gap-4_hi9gt_414",
  "gap-5": "_gap-5_hi9gt_418",
  "gap-6": "_gap-6_hi9gt_422",
  "gap-8": "_gap-8_hi9gt_426",
  "gap-10": "_gap-10_hi9gt_430",
  "gap-12": "_gap-12_hi9gt_434",
  "p-0": "_p-0_hi9gt_438",
  "p-1": "_p-1_hi9gt_442",
  "p-2": "_p-2_hi9gt_446",
  "p-3": "_p-3_hi9gt_450",
  "p-4": "_p-4_hi9gt_454",
  "p-5": "_p-5_hi9gt_458",
  "p-6": "_p-6_hi9gt_462",
  "p-8": "_p-8_hi9gt_466",
  "p-10": "_p-10_hi9gt_470",
  "p-12": "_p-12_hi9gt_474",
  "px-0": "_px-0_hi9gt_478",
  "px-1": "_px-1_hi9gt_483",
  "px-2": "_px-2_hi9gt_488",
  "px-3": "_px-3_hi9gt_493",
  "px-4": "_px-4_hi9gt_498",
  "px-6": "_px-6_hi9gt_503",
  "py-0": "_py-0_hi9gt_508",
  "py-1": "_py-1_hi9gt_513",
  "py-2": "_py-2_hi9gt_518",
  "py-3": "_py-3_hi9gt_523",
  "py-4": "_py-4_hi9gt_528",
  "py-6": "_py-6_hi9gt_533",
  "m-0": "_m-0_hi9gt_538",
  "m-1": "_m-1_hi9gt_542",
  "m-2": "_m-2_hi9gt_546",
  "m-3": "_m-3_hi9gt_550",
  "m-4": "_m-4_hi9gt_554",
  "m-auto": "_m-auto_hi9gt_558",
  "mx-auto": "_mx-auto_hi9gt_562",
  "my-auto": "_my-auto_hi9gt_567",
  "mx-0": "_mx-0_hi9gt_572",
  "mx-1": "_mx-1_hi9gt_577",
  "mx-2": "_mx-2_hi9gt_582",
  "mx-3": "_mx-3_hi9gt_587",
  "mx-4": "_mx-4_hi9gt_592",
  "my-0": "_my-0_hi9gt_597",
  "my-1": "_my-1_hi9gt_602",
  "my-2": "_my-2_hi9gt_607",
  "my-3": "_my-3_hi9gt_612",
  "my-4": "_my-4_hi9gt_617",
  "w-full": "_w-full_hi9gt_622",
  "w-auto": "_w-auto_hi9gt_626",
  "w-fit": "_w-fit_hi9gt_630",
  "w-min": "_w-min_hi9gt_634",
  "w-max": "_w-max_hi9gt_638",
  "max-w-none": "_max-w-none_hi9gt_642",
  "max-w-xs": "_max-w-xs_hi9gt_646",
  "max-w-sm": "_max-w-sm_hi9gt_650",
  "max-w-md": "_max-w-md_hi9gt_654",
  "max-w-lg": "_max-w-lg_hi9gt_658",
  "max-w-xl": "_max-w-xl_hi9gt_662",
  "max-w-2xl": "_max-w-2xl_hi9gt_666",
  "max-w-3xl": "_max-w-3xl_hi9gt_670",
  "max-w-4xl": "_max-w-4xl_hi9gt_674",
  "max-w-5xl": "_max-w-5xl_hi9gt_678",
  "max-w-6xl": "_max-w-6xl_hi9gt_682",
  "max-w-7xl": "_max-w-7xl_hi9gt_686",
  "max-w-full": "_max-w-full_hi9gt_690",
  "min-w-0": "_min-w-0_hi9gt_694",
  "min-w-full": "_min-w-full_hi9gt_698",
  "h-auto": "_h-auto_hi9gt_702",
  "h-fit": "_h-fit_hi9gt_706",
  "h-full": "_h-full_hi9gt_710",
  "h-screen": "_h-screen_hi9gt_714",
  "max-h-full": "_max-h-full_hi9gt_718",
  "max-h-screen": "_max-h-screen_hi9gt_722",
  "min-h-0": "_min-h-0_hi9gt_726",
  "min-h-full": "_min-h-full_hi9gt_730",
  "min-h-screen": "_min-h-screen_hi9gt_734",
  relative: V3,
  absolute: G3,
  fixed: q3,
  sticky: K3,
  static: "_static_hi9gt_754",
  "inset-0": "_inset-0_hi9gt_758",
  "top-0": "_top-0_hi9gt_765",
  "right-0": "_right-0_hi9gt_769",
  "bottom-0": "_bottom-0_hi9gt_773",
  "left-0": "_left-0_hi9gt_777",
  "text-left": "_text-left_hi9gt_781",
  "text-center": "_text-center_hi9gt_785",
  "text-right": "_text-right_hi9gt_789",
  "text-justify": "_text-justify_hi9gt_793",
  "text-xs": "_text-xs_hi9gt_797",
  "text-sm": "_text-sm_hi9gt_801",
  "text-base": "_text-base_hi9gt_805",
  "text-lg": "_text-lg_hi9gt_809",
  "text-xl": "_text-xl_hi9gt_813",
  "text-2xl": "_text-2xl_hi9gt_817",
  "text-3xl": "_text-3xl_hi9gt_821",
  "text-4xl": "_text-4xl_hi9gt_825",
  "font-normal": "_font-normal_hi9gt_829",
  "font-medium": "_font-medium_hi9gt_833",
  "font-semibold": "_font-semibold_hi9gt_837",
  "font-bold": "_font-bold_hi9gt_841",
  "leading-tight": "_leading-tight_hi9gt_845",
  "leading-normal": "_leading-normal_hi9gt_849",
  "leading-relaxed": "_leading-relaxed_hi9gt_853",
  "text-primary": "_text-primary_hi9gt_857",
  "text-secondary": "_text-secondary_hi9gt_861",
  "text-muted": "_text-muted_hi9gt_865",
  "text-inverse": "_text-inverse_hi9gt_869",
  "text-blue": "_text-blue_hi9gt_873",
  "text-red": "_text-red_hi9gt_877",
  "text-green": "_text-green_hi9gt_881",
  "text-yellow": "_text-yellow_hi9gt_885",
  truncate: Y3,
  "text-ellipsis": "_text-ellipsis_hi9gt_896",
  "text-clip": "_text-clip_hi9gt_903",
  "bg-transparent": "_bg-transparent_hi9gt_909",
  "bg-white": "_bg-white_hi9gt_913",
  "bg-gray-50": "_bg-gray-50_hi9gt_917",
  "bg-gray-100": "_bg-gray-100_hi9gt_921",
  "bg-gray-200": "_bg-gray-200_hi9gt_925",
  "bg-primary": "_bg-primary_hi9gt_929",
  "bg-secondary": "_bg-secondary_hi9gt_933",
  "bg-success": "_bg-success_hi9gt_937",
  "bg-danger": "_bg-danger_hi9gt_941",
  "bg-warning": "_bg-warning_hi9gt_945",
  border: J3,
  "border-0": "_border-0_hi9gt_953",
  "border-t": "_border-t_hi9gt_957",
  "border-r": "_border-r_hi9gt_961",
  "border-b": "_border-b_hi9gt_965",
  "border-l": "_border-l_hi9gt_969",
  "border-gray-200": "_border-gray-200_hi9gt_973",
  "border-gray-300": "_border-gray-300_hi9gt_977",
  "border-primary": "_border-primary_hi9gt_981",
  "border-danger": "_border-danger_hi9gt_985",
  "rounded-none": "_rounded-none_hi9gt_989",
  "rounded-sm": "_rounded-sm_hi9gt_993",
  rounded: X3,
  "rounded-md": "_rounded-md_hi9gt_1001",
  "rounded-lg": "_rounded-lg_hi9gt_1005",
  "rounded-xl": "_rounded-xl_hi9gt_1009",
  "rounded-2xl": "_rounded-2xl_hi9gt_1013",
  "rounded-full": "_rounded-full_hi9gt_1017",
  "shadow-none": "_shadow-none_hi9gt_1021",
  "shadow-sm": "_shadow-sm_hi9gt_1025",
  shadow: Q3,
  "shadow-md": "_shadow-md_hi9gt_1033",
  "shadow-lg": "_shadow-lg_hi9gt_1037",
  "shadow-xl": "_shadow-xl_hi9gt_1041",
  "z-0": "_z-0_hi9gt_1045",
  "z-10": "_z-10_hi9gt_1049",
  "z-20": "_z-20_hi9gt_1053",
  "z-30": "_z-30_hi9gt_1057",
  "z-40": "_z-40_hi9gt_1061",
  "z-50": "_z-50_hi9gt_1065",
  "z-auto": "_z-auto_hi9gt_1069",
  "z-dropdown": "_z-dropdown_hi9gt_1073",
  "z-sticky": "_z-sticky_hi9gt_1077",
  "z-fixed": "_z-fixed_hi9gt_1081",
  "z-modal": "_z-modal_hi9gt_1085",
  "z-tooltip": "_z-tooltip_hi9gt_1089",
  "transition-none": "_transition-none_hi9gt_1093",
  "transition-all": "_transition-all_hi9gt_1097",
  "transition-fast": "_transition-fast_hi9gt_1101",
  "transition-slow": "_transition-slow_hi9gt_1105",
  "sr-only": "_sr-only_hi9gt_1109",
  "focus-ring": "_focus-ring_hi9gt_1121",
  "cursor-default": "_cursor-default_hi9gt_1127",
  "cursor-pointer": "_cursor-pointer_hi9gt_1131",
  "cursor-not-allowed": "_cursor-not-allowed_hi9gt_1135",
  "select-none": "_select-none_hi9gt_1139",
  "select-text": "_select-text_hi9gt_1143",
  "select-all": "_select-all_hi9gt_1147",
  "select-auto": "_select-auto_hi9gt_1151",
  "pointer-events-none": "_pointer-events-none_hi9gt_1155",
  "pointer-events-auto": "_pointer-events-auto_hi9gt_1159",
  "gap-sm": "_gap-sm_hi9gt_1163",
  "gap-md": "_gap-md_hi9gt_1167",
  "gap-lg": "_gap-lg_hi9gt_1171",
  "gap-xl": "_gap-xl_hi9gt_1175",
  "p-sm": "_p-sm_hi9gt_1179",
  "p-md": "_p-md_hi9gt_1183",
  "p-lg": "_p-lg_hi9gt_1187",
  "p-xl": "_p-xl_hi9gt_1191",
  "m-sm": "_m-sm_hi9gt_1195",
  "m-md": "_m-md_hi9gt_1199",
  "m-lg": "_m-lg_hi9gt_1203",
  "m-xl": "_m-xl_hi9gt_1207",
  "text-gray": "_text-gray_hi9gt_1211",
  "mobile:hidden": "_mobile:hidden_hi9gt_1216",
  "mobile:block": "_mobile:block_hi9gt_1219",
  "mobile:flex": "_mobile:flex_hi9gt_1222",
  "mobile:grid": "_mobile:grid_hi9gt_1225",
  "mobile:text-sm": "_mobile:text-sm_hi9gt_1228",
  "mobile:text-xs": "_mobile:text-xs_hi9gt_1231",
  "mobile:p-2": "_mobile:p-2_hi9gt_1234",
  "mobile:px-2": "_mobile:px-2_hi9gt_1237",
  "tablet:block": "_tablet:block_hi9gt_1243",
  "tablet:flex": "_tablet:flex_hi9gt_1246",
  "tablet:grid": "_tablet:grid_hi9gt_1249",
  "tablet:hidden": "_tablet:hidden_hi9gt_1252",
  "desktop:block": "_desktop:block_hi9gt_1257",
  "desktop:flex": "_desktop:flex_hi9gt_1260",
  "desktop:grid": "_desktop:grid_hi9gt_1263",
  "desktop:hidden": "_desktop:hidden_hi9gt_1266",
  "bg-gray": "_bg-gray_hi9gt_917",
  "border-secondary": "_border-secondary_hi9gt_1290",
  "border-gray": "_border-gray_hi9gt_973",
  "shadow-glow": "_shadow-glow_hi9gt_1326",
  "w-8": "_w-8_hi9gt_1374",
  "w-10": "_w-10_hi9gt_1378",
  "w-12": "_w-12_hi9gt_1382",
  "w-16": "_w-16_hi9gt_1386",
  "h-8": "_h-8_hi9gt_1390",
  "h-10": "_h-10_hi9gt_1394",
  "h-12": "_h-12_hi9gt_1398",
  "h-16": "_h-16_hi9gt_1402",
  "user-select-none": "_user-select-none_hi9gt_1418",
  transition: e9,
  "transition-colors": "_transition-colors_hi9gt_1426",
  "transition-transform": "_transition-transform_hi9gt_1430",
  "hover-scale": "_hover-scale_hi9gt_1434",
  "fade-in": "_fade-in_hi9gt_1441",
  "status-online": "_status-online_hi9gt_1453",
  "status-offline": "_status-offline_hi9gt_1463",
  "status-away": "_status-away_hi9gt_1473",
  "status-busy": "_status-busy_hi9gt_1483",
  "modal-overlay": "_modal-overlay_hi9gt_1493",
  "modal-content": "_modal-content_hi9gt_1507",
  "close-button-absolute": "_close-button-absolute_hi9gt_1521",
  small: t9,
  large: i9,
  "primary-button": "_primary-button_hi9gt_1602",
  "secondary-button": "_secondary-button_hi9gt_1606",
  card: n9,
  "input-base": "_input-base_hi9gt_1659",
  "chat-window": "_chat-window_hi9gt_1691",
  "chat-message": "_chat-message_hi9gt_1702",
  "z-overlay": "_z-overlay_hi9gt_1727",
  "mobile-hidden": "_mobile-hidden_hi9gt_1732",
  "mobile-flex-col": "_mobile-flex-col_hi9gt_1735",
  "mobile-text-center": "_mobile-text-center_hi9gt_1738",
  "mobile-p-sm": "_mobile-p-sm_hi9gt_1741",
  "mobile-gap-sm": "_mobile-gap-sm_hi9gt_1744",
  "desktop-hidden": "_desktop-hidden_hi9gt_1749",
  "print-hidden": "_print-hidden_hi9gt_1754",
  utility: a9,
  "utility--xs": "_utility--xs_hi9gt_1778",
  "utility--sm": "_utility--sm_hi9gt_1785",
  "utility--md": "_utility--md_hi9gt_1792",
  "utility--lg": "_utility--lg_hi9gt_1799",
  "utility--xl": "_utility--xl_hi9gt_1806",
  "utility--default": "_utility--default_hi9gt_1814",
  "utility--primary": "_utility--primary_hi9gt_1819",
  "utility--secondary": "_utility--secondary_hi9gt_1824",
  "utility--success": "_utility--success_hi9gt_1829",
  "utility--warning": "_utility--warning_hi9gt_1834",
  "utility--error": "_utility--error_hi9gt_1839",
  "utility--info": "_utility--info_hi9gt_1844",
  "utility--active": "_utility--active_hi9gt_1849",
  "utility--disabled": "_utility--disabled_hi9gt_1854",
  "utility--loading": "_utility--loading_hi9gt_1859",
  "utility--interactive": "_utility--interactive_hi9gt_1863",
  "utility--dismissible": "_utility--dismissible_hi9gt_1882",
  "utility--tooltip": "_utility--tooltip_hi9gt_1885",
  "utility--popover": "_utility--popover_hi9gt_1885",
  "utility--tag": "_utility--tag_hi9gt_1888",
  "utility--chip": "_utility--chip_hi9gt_1888",
  "utility--badge": "_utility--badge_hi9gt_1888",
  "utility--pill": "_utility--pill_hi9gt_1888",
  "utility--label": "_utility--label_hi9gt_1888",
  "utility--status-indicator": "_utility--status-indicator_hi9gt_1888",
  "utility--divider": "_utility--divider_hi9gt_1920",
  "utility--separator": "_utility--separator_hi9gt_1920",
  "utility--spacer": "_utility--spacer_hi9gt_1937",
  "utility--section-break": "_utility--section-break_hi9gt_1957",
  "utility--container": "_utility--container_hi9gt_1981",
  "utility--stack": "_utility--stack_hi9gt_2000",
  "utility--inline-stack": "_utility--inline-stack_hi9gt_2008",
  "utility--rating-stars": "_utility--rating-stars_hi9gt_2017",
  "utility--rating-hearts": "_utility--rating-hearts_hi9gt_2017",
  "utility--thumbs-rating": "_utility--thumbs-rating_hi9gt_2017",
  "utility--stepper": "_utility--stepper_hi9gt_2022",
  "utility--wizard-steps": "_utility--wizard-steps_hi9gt_2022",
  utility__icon: o9,
  utility__label: r9,
  utility__dismiss: s9,
  utility__overlay: l9,
  "utility--visible": "_utility--visible_hi9gt_2097",
  "utility--top": "_utility--top_hi9gt_2102",
  "utility--bottom": "_utility--bottom_hi9gt_2111",
  "utility--left": "_utility--left_hi9gt_2120",
  "utility--right": "_utility--right_hi9gt_2129",
  utility__tooltip: c9,
  utility__popover: _9,
  utility__popover_title: d9,
  utility__popover_content: u9,
  utility__rating: m9,
  utility__star: h9,
  "utility__star--filled": "_utility__star--filled_hi9gt_2187",
  utility__rating_label: p9,
  utility__stepper: f9,
  utility__step: g9,
  utility__step_marker: b9,
  utility__step_connector: y9,
  "utility__step--completed": "_utility__step--completed_hi9gt_2259",
  "utility__step--active": "_utility__step--active_hi9gt_2267",
  utility__divider_label: x9,
  "loading-shimmer": "_loading-shimmer_hi9gt_1"
}, v9 = {
  // Overlay components
  tooltip: {
    kind: "tooltip",
    variant: "default",
    size: "sm",
    placement: "top",
    trigger: "hover",
    delay: 300,
    dismissible: !1,
    interactive: !1
  },
  popover: {
    kind: "popover",
    variant: "default",
    size: "md",
    placement: "bottom",
    trigger: "click",
    dismissible: !0,
    interactive: !0
  },
  "dropdown-menu": {
    kind: "dropdown-menu",
    variant: "default",
    size: "md",
    placement: "bottom-start",
    trigger: "click",
    dismissible: !0,
    interactive: !0
  },
  "context-menu": {
    kind: "context-menu",
    variant: "default",
    size: "md",
    placement: "bottom-start",
    trigger: "click",
    dismissible: !0,
    interactive: !0
  },
  "modal-overlay": {
    kind: "modal-overlay",
    variant: "default",
    size: "lg",
    dismissible: !0,
    interactive: !0
  },
  // Separator components
  divider: {
    kind: "divider",
    variant: "default",
    size: "md"
  },
  separator: {
    kind: "separator",
    variant: "default",
    size: "sm"
  },
  spacer: {
    kind: "spacer",
    variant: "default",
    size: "md"
  },
  "section-break": {
    kind: "section-break",
    variant: "default",
    size: "lg",
    label: "Section Break"
  },
  // Tag/Label components
  tag: {
    kind: "tag",
    variant: "default",
    size: "sm",
    dismissible: !1
  },
  chip: {
    kind: "chip",
    variant: "primary",
    size: "md",
    dismissible: !0,
    interactive: !0
  },
  badge: {
    kind: "badge",
    variant: "error",
    size: "xs",
    dismissible: !1
  },
  label: {
    kind: "label",
    variant: "secondary",
    size: "sm",
    dismissible: !1
  },
  pill: {
    kind: "pill",
    variant: "primary",
    size: "md",
    dismissible: !1
  },
  "status-indicator": {
    kind: "status-indicator",
    variant: "success",
    size: "sm",
    dismissible: !1
  },
  // Step/Process components
  stepper: {
    kind: "stepper",
    variant: "primary",
    size: "md",
    interactive: !0
  },
  breadcrumb: {
    kind: "breadcrumb",
    variant: "default",
    size: "sm",
    interactive: !0
  },
  pagination: {
    kind: "pagination",
    variant: "default",
    size: "md",
    interactive: !0
  },
  "wizard-steps": {
    kind: "wizard-steps",
    variant: "primary",
    size: "lg",
    interactive: !0
  },
  // Rating/Feedback components
  "rating-stars": {
    kind: "rating-stars",
    variant: "warning",
    size: "md",
    interactive: !0
  },
  "rating-hearts": {
    kind: "rating-hearts",
    variant: "error",
    size: "md",
    interactive: !0
  },
  "thumbs-rating": {
    kind: "thumbs-rating",
    variant: "default",
    size: "md",
    interactive: !0
  },
  "numeric-rating": {
    kind: "numeric-rating",
    variant: "primary",
    size: "md",
    interactive: !0
  },
  "feedback-scale": {
    kind: "feedback-scale",
    variant: "default",
    size: "lg",
    interactive: !0
  },
  // Layout utilities
  container: {
    kind: "container",
    variant: "default",
    size: "lg"
  },
  "grid-item": {
    kind: "grid-item",
    variant: "default",
    size: "md"
  },
  "flex-item": {
    kind: "flex-item",
    variant: "default",
    size: "md"
  },
  stack: {
    kind: "stack",
    variant: "default",
    size: "md"
  },
  "inline-stack": {
    kind: "inline-stack",
    variant: "default",
    size: "sm"
  }
}, Jl = (t) => v9[t], Jo = Le(
  ({
    kind: t = "tooltip",
    children: n,
    className: a = "",
    componentId: r,
    label: c,
    description: d,
    icon: u,
    placement: h,
    trigger: p,
    delay: g,
    dismissible: y,
    interactive: v,
    active: z,
    disabled: k,
    loading: N,
    value: P = 0,
    maxValue: $ = 5,
    currentStep: F = 0,
    totalSteps: H = 3,
    actions: A,
    variant: R,
    size: T,
    color: E,
    backgroundColor: J,
    borderRadius: G,
    onClick: B,
    onDismiss: M,
    onValueChange: j,
    onStepChange: V,
    ...Q
  }, le) => {
    const ae = Jl(t), te = sn(), ce = r || `utility-${te}`, w = vi();
    Te(() => (w(
      kn({
        componentId: ce,
        updates: {
          isLoading: !1,
          isVisible: !1,
          isExpanded: !1,
          isDragging: !1,
          isHovered: !1,
          isFocused: !1,
          error: null,
          data: null
        }
      })
    ), () => {
      w(Gi(ce));
    }), [w, ce]);
    const q = It(
      af(ce)
    ) || {}, x = (q == null ? void 0 : q.isVisible) || !1;
    q != null && q.isHovered;
    const O = nt(null);
    nt(null);
    const S = {
      ...ae,
      label: c ?? ae.label,
      description: d ?? ae.description,
      icon: u ?? ae.icon,
      placement: h ?? ae.placement,
      trigger: p ?? ae.trigger,
      delay: g ?? ae.delay,
      dismissible: y ?? ae.dismissible,
      interactive: v ?? ae.interactive,
      active: z ?? ae.active,
      disabled: k ?? ae.disabled,
      loading: N ?? ae.loading,
      actions: A ?? ae.actions,
      variant: R ?? ae.variant,
      size: T ?? ae.size,
      color: E ?? ae.color,
      backgroundColor: J ?? ae.backgroundColor,
      borderRadius: G ?? ae.borderRadius
    }, Z = [
      Fe.utility,
      Fe[`utility--${S.kind}`],
      Fe[`utility--${S.variant}`],
      Fe[`utility--${S.size}`],
      S.placement && Fe[`utility--${S.placement}`],
      S.active && Fe["utility--active"],
      S.disabled && Fe["utility--disabled"],
      S.loading && Fe["utility--loading"],
      S.interactive && Fe["utility--interactive"],
      S.dismissible && Fe["utility--dismissible"],
      x && Fe["utility--visible"],
      a
    ].filter(Boolean).join(" "), ie = () => {
      if (S.trigger === "hover") {
        O.current && clearTimeout(O.current);
        const W = setTimeout(() => {
          w(
            kn({
              componentId: ce,
              updates: { isVisible: !0 }
            })
          );
        }, S.delay || 0);
        O.current = W;
      }
    }, X = () => {
      S.trigger === "hover" && (O.current && clearTimeout(O.current), w(
        kn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ));
    }, K = () => {
      S.trigger === "click" && w(
        kn({
          componentId: ce,
          updates: { isVisible: !x }
        })
      ), B == null || B();
    }, pe = () => {
      w(
        kn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ), M == null || M();
    }, de = (W) => {
      !S.interactive || S.disabled || j == null || j(W);
    }, Pe = (W) => {
      !S.interactive || S.disabled || V == null || V(W);
    }, be = () => t === "tooltip" ? /* @__PURE__ */ l.jsx(f, { className: Fe.utility__tooltip, children: S.label }) : t === "popover" ? /* @__PURE__ */ l.jsxs(f, { className: Fe.utility__popover, children: [
      S.label && /* @__PURE__ */ l.jsx(
        f,
        {
          className: Fe.utility__popover_title,
          children: S.label
        }
      ),
      S.description && /* @__PURE__ */ l.jsx(
        f,
        {
          className: Fe.utility__popover_content,
          children: S.description
        }
      ),
      n
    ] }) : n, ee = () => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      S.icon && /* @__PURE__ */ l.jsx("span", { className: Fe.utility__icon, children: S.icon }),
      /* @__PURE__ */ l.jsx("span", { className: Fe.utility__label, children: S.label || n }),
      S.dismissible && /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: "danger",
          className: Fe.utility__dismiss,
          onClick: pe,
          "aria-label": "Dismiss",
          children: "×"
        }
      )
    ] }), ne = () => {
      const W = [];
      for (let U = 1; U <= $; U++)
        W.push(
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: "ghost",
              className: [
                Fe.utility__star,
                U <= P && Fe["utility__star--filled"]
              ].filter(Boolean).join(" "),
              onClick: () => de(U),
              disabled: S.disabled,
              "aria-label": `Rate ${U} stars`,
              children: t === "rating-hearts" ? "♥" : t === "thumbs-rating" ? "👍" : "★"
            },
            U
          )
        );
      return W;
    }, ue = () => {
      const W = [];
      for (let U = 0; U < H; U++)
        W.push(
          /* @__PURE__ */ l.jsxs(
            f,
            {
              className: [
                Fe.utility__step,
                U <= F && Fe["utility__step--completed"],
                U === F && Fe["utility__step--active"]
              ].filter(Boolean).join(" "),
              onClick: () => Pe(U),
              children: [
                /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: Fe.utility__step_marker
                  }
                ),
                U < H - 1 && /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: Fe.utility__step_connector
                  }
                )
              ]
            },
            U
          )
        );
      return W;
    }, re = () => /* @__PURE__ */ l.jsx(l.Fragment, { children: S.label && /* @__PURE__ */ l.jsx("span", { className: Fe.utility__divider_label, children: S.label }) }), ke = () => {
      switch (!0) {
        case (t === "tooltip" || t === "popover"):
          return be();
        case (t.includes("tag") || t.includes("chip") || t.includes("badge") || t.includes("pill")):
          return ee();
        case t.includes("rating"):
          return /* @__PURE__ */ l.jsx(f, { className: Fe.utility__rating, children: ne() });
        case (t === "stepper" || t === "wizard-steps"):
          return /* @__PURE__ */ l.jsx(f, { className: Fe.utility__stepper, children: ue() });
        case (t.includes("divider") || t.includes("separator")):
          return re();
        case t.includes("spacer"):
          return null;
        default:
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            S.icon && /* @__PURE__ */ l.jsx("span", { className: Fe.utility__icon, children: S.icon }),
            S.label && /* @__PURE__ */ l.jsx("span", { className: Fe.utility__label, children: S.label }),
            n
          ] });
      }
    }, he = {
      color: S.color,
      backgroundColor: S.backgroundColor,
      borderRadius: S.borderRadius
    };
    return /* @__PURE__ */ l.jsx(
      f,
      {
        ref: le,
        className: Z,
        style: he,
        onMouseEnter: ie,
        onMouseLeave: X,
        onClick: K,
        role: S.interactive ? "button" : void 0,
        tabIndex: S.interactive ? 0 : void 0,
        "aria-disabled": S.disabled,
        ...Q,
        children: ke()
      }
    );
  }
);
Jo.displayName = "Utility";
const v5 = di(Jo);
function w9(t) {
  return it.forwardRef((n, a) => /* @__PURE__ */ l.jsx(Jo, { ref: a, ...t, ...n }));
}
function Ue(t) {
  const n = Jl(t);
  return w9(n);
}
Ue("tooltip"), Ue("popover"), Ue("dropdown-menu"), Ue("context-menu"), Ue("modal-overlay"), Ue("divider"), Ue("separator"), Ue("spacer"), Ue("section-break"), Ue("tag"), Ue("chip"), Ue("badge"), Ue("label"), Ue("pill"), Ue(
  "status-indicator"
), Ue("stepper"), Ue("breadcrumb"), Ue("pagination"), Ue("wizard-steps"), Ue("rating-stars"), Ue("rating-hearts"), Ue("thumbs-rating"), Ue("numeric-rating"), Ue("feedback-scale"), Ue("container"), Ue("grid-item"), Ue("flex-item"), Ue("stack"), Ue("inline-stack");
export {
  Q9 as ADMIN_CONFIGURATIONS,
  Pn as ADVERTISEMENT_CONFIGURATIONS,
  lS as ADVERTISEMENT_GROUPS,
  cS as ADVERTISEMENT_PRESETS,
  kS as ActionCard,
  X9 as Admin,
  yi as Advertisements,
  Np as Analytics,
  Np as AnalyticsReports,
  Is as BUTTON_CONFIGURATIONS,
  j9 as BUTTON_GROUPS,
  Ce as Button,
  al as CARD_CONFIGURATIONS,
  _S as CARD_GROUPS,
  ms as CHART_CONFIGURATIONS,
  Gf as CHECKBOX_CONFIGURATIONS,
  Dt as Card,
  qS as Chart,
  _C as ChartControls,
  Vo as Checkbox,
  SS as ContentCard,
  x1 as DarkModeToggle,
  Np as Dashboard,
  hC as DashboardLegend,
  mC as DataSeriesToggle,
  fC as EmptyState,
  Do as FILE_UPLOAD_CONFIGURATIONS,
  gC as FILE_UPLOAD_GROUPS,
  Zv as FORM_FIELD_CONFIGURATIONS,
  G8 as FORM_FIELD_GROUPS,
  q8 as FORM_FIELD_PRESETS,
  V8 as FileUpload,
  sC as FilterButtons,
  rC as FilterCheckboxes,
  oC as FilterControls,
  lC as FilterDropdown,
  cC as FilterMultiSelect,
  Uv as Forms,
  Rl as FormsBody,
  hS as FriendCard,
  bS as GameCard,
  pC as GameStatsFilter,
  Dl as HEADER_CONFIGURATIONS,
  J8 as HEADER_GROUPS,
  o0 as Header,
  wS as InfoCard,
  YS as LegendChart,
  QS as LegendGrid,
  JS as LegendHorizontal,
  eC as LegendMinimal,
  XS as LegendVertical,
  E0 as MEDIA_CONFIGURATIONS,
  lk as MODAL_CONFIGURATIONS,
  Mn as MODAL_GROUPS,
  t5 as Map,
  vS as MatchCard,
  i5 as Media,
  Np as MetricsDashboard,
  l5 as Modal,
  wa as NAVIGATION_CONFIGURATIONS,
  u5 as NAVIGATION_PRESETS,
  h5 as Navigation,
  p5 as Notification,
  fS as NotificationCard,
  c3 as PROGRESS_CONFIGURATIONS,
  Np as PerformanceMetrics,
  pS as ProfileCard,
  Kl as Progress,
  yS as PuzzleCard,
  z9 as QUICK_BUTTONS,
  dS as QUICK_CARDS,
  X8 as QUICK_HEADERS,
  m5 as QUICK_NAVIGATION,
  Z9 as QUICK_WRAPPERS,
  Np as RealtimeAnalytics,
  xS as RoomCard,
  a0 as Sidebar,
  gS as StatsCard,
  Ns as TABLE_CONFIGURATIONS,
  y5 as Table,
  x5 as TablePresets,
  uC as TimeRangeSelector,
  tC as TooltipChart,
  aC as TooltipCustom,
  nC as TooltipDetailed,
  iC as TooltipSimple,
  v5 as Utility,
  Nn as WRAPPER_CONFIGURATIONS,
  U9 as WRAPPER_GROUPS,
  f as Wrapper,
  dC as ZoomControls,
  E9 as addButton,
  _s as analyticsConfigurations,
  L9 as backButton,
  Qh as barChart,
  xd as cancelButton,
  I9 as closeButton,
  O9 as confirmDialogButtons,
  Jh as conversionDashboard,
  op as conversionFunnel,
  ap as conversionHeatmap,
  A9 as copyButton,
  eS as createAdSenseProvider,
  tS as createAdsterraProvider,
  oS as createAdvertisementConfig,
  sS as createAnalyticsEvent,
  Rt as createButton,
  ci as createButtonConfig,
  T9 as createButtonGroup,
  uS as createCard,
  Bi as createCardConfig,
  mS as createCardWithConfig,
  KS as createChart,
  aS as createCustomAnalyticsProvider,
  iS as createCustomProvider,
  SC as createFilePreview,
  bC as createFileUploadConfig,
  K8 as createFormsConfig,
  nS as createGoogleAnalyticsProvider,
  Q8 as createHeaderConfig,
  bi as createNavigationConfig,
  pt as createTable,
  g5 as createTableConfig,
  H9 as createWrapperConfig,
  _p as customReport,
  P9 as deleteButton,
  R9 as deleteConfirmationButtons,
  N9 as editButton,
  Bo as formatFileSize,
  kC as generateFileId,
  ch as getAdvertisementConfig,
  qp as getChartConfig,
  F9 as getDeprecatedWrappers,
  v1 as getEmptyStateConfig,
  xC as getFileExtension,
  Go as getFileUploadConfig,
  M1 as getFileUploadStyles,
  z0 as getMapConfig,
  I0 as getMediaConfig,
  vC as getMimeTypeFromExtension,
  ck as getModalConfiguration,
  ql as getNavigationConfig,
  d5 as getNavigationsByLayout,
  _5 as getNavigationsByVariant,
  f5 as getProgressConfig,
  Yl as getTableConfig,
  Jl as getUtilityConfig,
  cu as getWrapperConfig,
  $9 as getWrappersByVariant,
  M9 as iconButton,
  rS as isAdvertisementKind,
  o5 as isCommerceModal,
  n5 as isGameModal,
  r5 as isInteractionModal,
  s5 as isLayoutModal,
  c5 as isNavigationKind,
  a5 as isVersusModal,
  B9 as isWrapperKind,
  tp as kpiMetric,
  Xh as lineChart,
  e5 as mergeActions,
  _k as mergeModalConfiguration,
  _3 as mergeTableConfig,
  Kh as performanceDashboard,
  cp as performanceReport,
  ep as pieChart,
  dp as realtimeMetrics,
  up as realtimeTraffic,
  lp as revenueCohort,
  ip as revenueMetric,
  yd as saveButton,
  D9 as saveFormButtons,
  Yh as userBehaviorDashboard,
  sp as userCohort,
  np as userHeatmap,
  rp as userJourneyFunnel,
  wC as validateFile,
  yC as validateFileUploadConfig,
  O1 as validateFiles,
  Y8 as validateForms,
  b5 as validateTableConfig
};
//# sourceMappingURL=index.es.js.map
