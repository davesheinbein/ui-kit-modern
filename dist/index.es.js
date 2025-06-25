var Xc = Object.defineProperty;
var Qc = (t, n, a) => n in t ? Xc(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[n] = a;
var Ja = (t, n, a) => Qc(t, typeof n != "symbol" ? n + "" : n, a);
import * as Pi from "react";
import tt, { forwardRef as Le, useMemo as _i, useEffect as Te, memo as di, createElement as Fr, useRef as it, useState as zt, useCallback as Ze, createContext as ma, useContext as e_, useId as sn, use as t_, useImperativeHandle as ha } from "react";
import { createPortal as i_ } from "react-dom";
var n_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Co = { exports: {} }, vn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function a_() {
  if (qr) return vn;
  qr = 1;
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
  return vn.Fragment = n, vn.jsx = a, vn.jsxs = a, vn;
}
var xn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function o_() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    function t(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === T ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case j:
          return "Fragment";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case P:
          return "Suspense";
        case N:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case E:
            return "Portal";
          case M:
            return (v.displayName || "Context") + ".Provider";
          case q:
            return (v._context.displayName || "Context") + ".Consumer";
          case O:
            var R = v.render;
            return v = v.displayName, v || (v = R.displayName || R.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case J:
            return R = v.displayName || null, R !== null ? R : t(v.type) || "Memo";
          case $:
            R = v._payload, v = v._init;
            try {
              return t(v(R));
            } catch {
            }
        }
      return null;
    }
    function n(v) {
      return "" + v;
    }
    function a(v) {
      try {
        n(v);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var S = R.error, H = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return S.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), n(v);
      }
    }
    function r(v) {
      if (v === j) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === $)
        return "<...>";
      try {
        var R = t(v);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var v = A.A;
      return v === null ? null : v.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function u(v) {
      if (V.call(v, "key")) {
        var R = Object.getOwnPropertyDescriptor(v, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function h(v, R) {
      function S() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: S,
        configurable: !0
      });
    }
    function p() {
      var v = t(this.type);
      return te[v] || (te[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function g(v, R, S, H, ie, X, K, fe) {
      return S = X.ref, v = {
        $$typeof: z,
        type: v,
        key: R,
        props: X,
        _owner: ie
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function y(v, R, S, H, ie, X, K, fe) {
      var de = R.children;
      if (de !== void 0)
        if (H)
          if (ee(de)) {
            for (H = 0; H < de.length; H++)
              x(de[H]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(de);
      if (V.call(R, "key")) {
        de = t(v);
        var Pe = Object.keys(R).filter(function(Q) {
          return Q !== "key";
        });
        H = 0 < Pe.length ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}", G[de + H] || (Pe = 0 < Pe.length ? "{" + Pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          de,
          Pe,
          de
        ), G[de + H] = !0);
      }
      if (de = null, S !== void 0 && (a(S), de = "" + S), u(R) && (a(R.key), de = "" + R.key), "key" in R) {
        S = {};
        for (var be in R)
          be !== "key" && (S[be] = R[be]);
      } else S = R;
      return de && h(
        S,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), g(
        v,
        de,
        X,
        ie,
        c(),
        S,
        K,
        fe
      );
    }
    function x(v) {
      typeof v == "object" && v !== null && v.$$typeof === z && v._store && (v._store.validated = 1);
    }
    var k = tt, z = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), M = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), A = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, ee = Array.isArray, le = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      "react-stack-bottom-frame": function(v) {
        return v();
      }
    };
    var ae, te = {}, ce = k["react-stack-bottom-frame"].bind(
      k,
      d
    )(), w = le(r(d)), G = {};
    xn.Fragment = j, xn.jsx = function(v, R, S, H, ie) {
      var X = 1e4 > A.recentlyCreatedOwnerStacks++;
      return y(
        v,
        R,
        S,
        !1,
        H,
        ie,
        X ? Error("react-stack-top-frame") : ce,
        X ? le(r(v)) : w
      );
    }, xn.jsxs = function(v, R, S, H, ie) {
      var X = 1e4 > A.recentlyCreatedOwnerStacks++;
      return y(
        v,
        R,
        S,
        !0,
        H,
        ie,
        X ? Error("react-stack-top-frame") : ce,
        X ? le(r(v)) : w
      );
    };
  }()), xn;
}
process.env.NODE_ENV === "production" ? Co.exports = a_() : Co.exports = o_();
var l = Co.exports;
const r_ = "_container_1kxlm_117", s_ = "_flex_1kxlm_248", l_ = "_grid_1kxlm_344", c_ = "_relative_1kxlm_726", __ = "_absolute_1kxlm_730", d_ = "_fixed_1kxlm_734", u_ = "_sticky_1kxlm_738", m_ = "_truncate_1kxlm_877", h_ = "_border_1kxlm_937", p_ = "_rounded_1kxlm_977", f_ = "_shadow_1kxlm_1009", g_ = "_transition_1kxlm_1081", b_ = "_small_1kxlm_1581", y_ = "_large_1kxlm_1585", v_ = "_card_1kxlm_1633", x_ = "_baseButton_1kxlm_1758", w_ = "_fullWidth_1kxlm_2046", k_ = "_loading_1kxlm_2051", S_ = "_content_1kxlm_2051", C_ = "_leftIcon_1kxlm_2055", z_ = "_rightIcon_1kxlm_2063", j_ = "_spinner_1kxlm_2082", T_ = "_spin_1kxlm_2082", P_ = "_modalCloseAbsolute_1kxlm_2096", E_ = "_iconBtn_1kxlm_2182", N_ = "_selected_1kxlm_2289", I_ = "_active_1kxlm_2294", L_ = "_locked_1kxlm_2299", A_ = "_burnSuspect_1kxlm_2304", M_ = "_burned_1kxlm_2309", O_ = "_goBackIcon_1kxlm_2476", R_ = "_goBackLabel_1kxlm_2481", D_ = "_primaryBtn_1kxlm_2558", B_ = "_secondaryBtn_1kxlm_2600", $_ = "_linkButton_1kxlm_2752", F_ = "_closeButton_1kxlm_2779", q_ = "_wordButton_1kxlm_2786", rt = {
  container: r_,
  "container-sm": "_container-sm_1kxlm_133",
  "container-md": "_container-md_1kxlm_149",
  "container-lg": "_container-lg_1kxlm_165",
  "container-xl": "_container-xl_1kxlm_181",
  "container-2xl": "_container-2xl_1kxlm_197",
  "safe-area": "_safe-area_1kxlm_213",
  "overflow-hidden": "_overflow-hidden_1kxlm_219",
  "overflow-auto": "_overflow-auto_1kxlm_223",
  "overflow-x-auto": "_overflow-x-auto_1kxlm_228",
  "overflow-y-auto": "_overflow-y-auto_1kxlm_234",
  "box-border": "_box-border_1kxlm_240",
  "box-content": "_box-content_1kxlm_244",
  flex: s_,
  "flex-col": "_flex-col_1kxlm_252",
  "flex-row": "_flex-row_1kxlm_257",
  "flex-wrap": "_flex-wrap_1kxlm_262",
  "flex-nowrap": "_flex-nowrap_1kxlm_267",
  "flex-center": "_flex-center_1kxlm_272",
  "flex-between": "_flex-between_1kxlm_278",
  "justify-start": "_justify-start_1kxlm_284",
  "justify-center": "_justify-center_1kxlm_288",
  "justify-end": "_justify-end_1kxlm_292",
  "justify-between": "_justify-between_1kxlm_296",
  "justify-around": "_justify-around_1kxlm_300",
  "items-start": "_items-start_1kxlm_304",
  "items-center": "_items-center_1kxlm_308",
  "items-end": "_items-end_1kxlm_312",
  "items-stretch": "_items-stretch_1kxlm_316",
  "flex-1": "_flex-1_1kxlm_320",
  "flex-auto": "_flex-auto_1kxlm_324",
  "flex-none": "_flex-none_1kxlm_328",
  "flex-grow": "_flex-grow_1kxlm_332",
  "flex-shrink": "_flex-shrink_1kxlm_336",
  "flex-shrink-0": "_flex-shrink-0_1kxlm_340",
  grid: l_,
  "grid-auto-fit": "_grid-auto-fit_1kxlm_348",
  "grid-auto-fill": "_grid-auto-fill_1kxlm_355",
  "grid-cols-1": "_grid-cols-1_1kxlm_362",
  "grid-cols-2": "_grid-cols-2_1kxlm_366",
  "grid-cols-3": "_grid-cols-3_1kxlm_370",
  "grid-cols-4": "_grid-cols-4_1kxlm_374",
  "grid-cols-6": "_grid-cols-6_1kxlm_378",
  "grid-cols-12": "_grid-cols-12_1kxlm_382",
  "gap-0": "_gap-0_1kxlm_386",
  "gap-1": "_gap-1_1kxlm_390",
  "gap-2": "_gap-2_1kxlm_394",
  "gap-3": "_gap-3_1kxlm_398",
  "gap-4": "_gap-4_1kxlm_402",
  "gap-5": "_gap-5_1kxlm_406",
  "gap-6": "_gap-6_1kxlm_410",
  "gap-8": "_gap-8_1kxlm_414",
  "gap-10": "_gap-10_1kxlm_418",
  "gap-12": "_gap-12_1kxlm_422",
  "p-0": "_p-0_1kxlm_426",
  "p-1": "_p-1_1kxlm_430",
  "p-2": "_p-2_1kxlm_434",
  "p-3": "_p-3_1kxlm_438",
  "p-4": "_p-4_1kxlm_442",
  "p-5": "_p-5_1kxlm_446",
  "p-6": "_p-6_1kxlm_450",
  "p-8": "_p-8_1kxlm_454",
  "p-10": "_p-10_1kxlm_458",
  "p-12": "_p-12_1kxlm_462",
  "px-0": "_px-0_1kxlm_466",
  "px-1": "_px-1_1kxlm_471",
  "px-2": "_px-2_1kxlm_476",
  "px-3": "_px-3_1kxlm_481",
  "px-4": "_px-4_1kxlm_486",
  "px-6": "_px-6_1kxlm_491",
  "py-0": "_py-0_1kxlm_496",
  "py-1": "_py-1_1kxlm_501",
  "py-2": "_py-2_1kxlm_506",
  "py-3": "_py-3_1kxlm_511",
  "py-4": "_py-4_1kxlm_516",
  "py-6": "_py-6_1kxlm_521",
  "m-0": "_m-0_1kxlm_526",
  "m-1": "_m-1_1kxlm_530",
  "m-2": "_m-2_1kxlm_534",
  "m-3": "_m-3_1kxlm_538",
  "m-4": "_m-4_1kxlm_542",
  "m-auto": "_m-auto_1kxlm_546",
  "mx-auto": "_mx-auto_1kxlm_550",
  "my-auto": "_my-auto_1kxlm_555",
  "mx-0": "_mx-0_1kxlm_560",
  "mx-1": "_mx-1_1kxlm_565",
  "mx-2": "_mx-2_1kxlm_570",
  "mx-3": "_mx-3_1kxlm_575",
  "mx-4": "_mx-4_1kxlm_580",
  "my-0": "_my-0_1kxlm_585",
  "my-1": "_my-1_1kxlm_590",
  "my-2": "_my-2_1kxlm_595",
  "my-3": "_my-3_1kxlm_600",
  "my-4": "_my-4_1kxlm_605",
  "w-full": "_w-full_1kxlm_610",
  "w-auto": "_w-auto_1kxlm_614",
  "w-fit": "_w-fit_1kxlm_618",
  "w-min": "_w-min_1kxlm_622",
  "w-max": "_w-max_1kxlm_626",
  "max-w-none": "_max-w-none_1kxlm_630",
  "max-w-xs": "_max-w-xs_1kxlm_634",
  "max-w-sm": "_max-w-sm_1kxlm_638",
  "max-w-md": "_max-w-md_1kxlm_642",
  "max-w-lg": "_max-w-lg_1kxlm_646",
  "max-w-xl": "_max-w-xl_1kxlm_650",
  "max-w-2xl": "_max-w-2xl_1kxlm_654",
  "max-w-3xl": "_max-w-3xl_1kxlm_658",
  "max-w-4xl": "_max-w-4xl_1kxlm_662",
  "max-w-5xl": "_max-w-5xl_1kxlm_666",
  "max-w-6xl": "_max-w-6xl_1kxlm_670",
  "max-w-7xl": "_max-w-7xl_1kxlm_674",
  "max-w-full": "_max-w-full_1kxlm_678",
  "min-w-0": "_min-w-0_1kxlm_682",
  "min-w-full": "_min-w-full_1kxlm_686",
  "h-auto": "_h-auto_1kxlm_690",
  "h-fit": "_h-fit_1kxlm_694",
  "h-full": "_h-full_1kxlm_698",
  "h-screen": "_h-screen_1kxlm_702",
  "max-h-full": "_max-h-full_1kxlm_706",
  "max-h-screen": "_max-h-screen_1kxlm_710",
  "min-h-0": "_min-h-0_1kxlm_714",
  "min-h-full": "_min-h-full_1kxlm_718",
  "min-h-screen": "_min-h-screen_1kxlm_722",
  relative: c_,
  absolute: __,
  fixed: d_,
  sticky: u_,
  static: "_static_1kxlm_742",
  "inset-0": "_inset-0_1kxlm_746",
  "top-0": "_top-0_1kxlm_753",
  "right-0": "_right-0_1kxlm_757",
  "bottom-0": "_bottom-0_1kxlm_761",
  "left-0": "_left-0_1kxlm_765",
  "text-left": "_text-left_1kxlm_769",
  "text-center": "_text-center_1kxlm_773",
  "text-right": "_text-right_1kxlm_777",
  "text-justify": "_text-justify_1kxlm_781",
  "text-xs": "_text-xs_1kxlm_785",
  "text-sm": "_text-sm_1kxlm_789",
  "text-base": "_text-base_1kxlm_793",
  "text-lg": "_text-lg_1kxlm_797",
  "text-xl": "_text-xl_1kxlm_801",
  "text-2xl": "_text-2xl_1kxlm_805",
  "text-3xl": "_text-3xl_1kxlm_809",
  "text-4xl": "_text-4xl_1kxlm_813",
  "font-normal": "_font-normal_1kxlm_817",
  "font-medium": "_font-medium_1kxlm_821",
  "font-semibold": "_font-semibold_1kxlm_825",
  "font-bold": "_font-bold_1kxlm_829",
  "leading-tight": "_leading-tight_1kxlm_833",
  "leading-normal": "_leading-normal_1kxlm_837",
  "leading-relaxed": "_leading-relaxed_1kxlm_841",
  "text-primary": "_text-primary_1kxlm_845",
  "text-secondary": "_text-secondary_1kxlm_849",
  "text-muted": "_text-muted_1kxlm_853",
  "text-inverse": "_text-inverse_1kxlm_857",
  "text-blue": "_text-blue_1kxlm_861",
  "text-red": "_text-red_1kxlm_865",
  "text-green": "_text-green_1kxlm_869",
  "text-yellow": "_text-yellow_1kxlm_873",
  truncate: m_,
  "text-ellipsis": "_text-ellipsis_1kxlm_884",
  "text-clip": "_text-clip_1kxlm_891",
  "bg-transparent": "_bg-transparent_1kxlm_897",
  "bg-white": "_bg-white_1kxlm_901",
  "bg-gray-50": "_bg-gray-50_1kxlm_905",
  "bg-gray-100": "_bg-gray-100_1kxlm_909",
  "bg-gray-200": "_bg-gray-200_1kxlm_913",
  "bg-primary": "_bg-primary_1kxlm_917",
  "bg-secondary": "_bg-secondary_1kxlm_921",
  "bg-success": "_bg-success_1kxlm_925",
  "bg-danger": "_bg-danger_1kxlm_929",
  "bg-warning": "_bg-warning_1kxlm_933",
  border: h_,
  "border-0": "_border-0_1kxlm_941",
  "border-t": "_border-t_1kxlm_945",
  "border-r": "_border-r_1kxlm_949",
  "border-b": "_border-b_1kxlm_953",
  "border-l": "_border-l_1kxlm_957",
  "border-gray-200": "_border-gray-200_1kxlm_961",
  "border-gray-300": "_border-gray-300_1kxlm_965",
  "border-primary": "_border-primary_1kxlm_969",
  "border-danger": "_border-danger_1kxlm_973",
  "rounded-none": "_rounded-none_1kxlm_977",
  "rounded-sm": "_rounded-sm_1kxlm_981",
  rounded: p_,
  "rounded-md": "_rounded-md_1kxlm_989",
  "rounded-lg": "_rounded-lg_1kxlm_993",
  "rounded-xl": "_rounded-xl_1kxlm_997",
  "rounded-2xl": "_rounded-2xl_1kxlm_1001",
  "rounded-full": "_rounded-full_1kxlm_1005",
  "shadow-none": "_shadow-none_1kxlm_1009",
  "shadow-sm": "_shadow-sm_1kxlm_1013",
  shadow: f_,
  "shadow-md": "_shadow-md_1kxlm_1021",
  "shadow-lg": "_shadow-lg_1kxlm_1025",
  "shadow-xl": "_shadow-xl_1kxlm_1029",
  "z-0": "_z-0_1kxlm_1033",
  "z-10": "_z-10_1kxlm_1037",
  "z-20": "_z-20_1kxlm_1041",
  "z-30": "_z-30_1kxlm_1045",
  "z-40": "_z-40_1kxlm_1049",
  "z-50": "_z-50_1kxlm_1053",
  "z-auto": "_z-auto_1kxlm_1057",
  "z-dropdown": "_z-dropdown_1kxlm_1061",
  "z-sticky": "_z-sticky_1kxlm_1065",
  "z-fixed": "_z-fixed_1kxlm_1069",
  "z-modal": "_z-modal_1kxlm_1073",
  "z-tooltip": "_z-tooltip_1kxlm_1077",
  "transition-none": "_transition-none_1kxlm_1081",
  "transition-all": "_transition-all_1kxlm_1085",
  "transition-fast": "_transition-fast_1kxlm_1089",
  "transition-slow": "_transition-slow_1kxlm_1093",
  "sr-only": "_sr-only_1kxlm_1097",
  "focus-ring": "_focus-ring_1kxlm_1109",
  "cursor-default": "_cursor-default_1kxlm_1115",
  "cursor-pointer": "_cursor-pointer_1kxlm_1119",
  "cursor-not-allowed": "_cursor-not-allowed_1kxlm_1123",
  "select-none": "_select-none_1kxlm_1127",
  "select-text": "_select-text_1kxlm_1131",
  "select-all": "_select-all_1kxlm_1135",
  "select-auto": "_select-auto_1kxlm_1139",
  "pointer-events-none": "_pointer-events-none_1kxlm_1143",
  "pointer-events-auto": "_pointer-events-auto_1kxlm_1147",
  "gap-sm": "_gap-sm_1kxlm_1151",
  "gap-md": "_gap-md_1kxlm_1155",
  "gap-lg": "_gap-lg_1kxlm_1159",
  "gap-xl": "_gap-xl_1kxlm_1163",
  "p-sm": "_p-sm_1kxlm_1167",
  "p-md": "_p-md_1kxlm_1171",
  "p-lg": "_p-lg_1kxlm_1175",
  "p-xl": "_p-xl_1kxlm_1179",
  "m-sm": "_m-sm_1kxlm_1183",
  "m-md": "_m-md_1kxlm_1187",
  "m-lg": "_m-lg_1kxlm_1191",
  "m-xl": "_m-xl_1kxlm_1195",
  "text-gray": "_text-gray_1kxlm_1199",
  "mobile:hidden": "_mobile:hidden_1kxlm_1204",
  "mobile:block": "_mobile:block_1kxlm_1207",
  "mobile:flex": "_mobile:flex_1kxlm_1210",
  "mobile:grid": "_mobile:grid_1kxlm_1213",
  "mobile:text-sm": "_mobile:text-sm_1kxlm_1216",
  "mobile:text-xs": "_mobile:text-xs_1kxlm_1219",
  "mobile:p-2": "_mobile:p-2_1kxlm_1222",
  "mobile:px-2": "_mobile:px-2_1kxlm_1225",
  "tablet:block": "_tablet:block_1kxlm_1231",
  "tablet:flex": "_tablet:flex_1kxlm_1234",
  "tablet:grid": "_tablet:grid_1kxlm_1237",
  "tablet:hidden": "_tablet:hidden_1kxlm_1240",
  "desktop:block": "_desktop:block_1kxlm_1245",
  "desktop:flex": "_desktop:flex_1kxlm_1248",
  "desktop:grid": "_desktop:grid_1kxlm_1251",
  "desktop:hidden": "_desktop:hidden_1kxlm_1254",
  "bg-gray": "_bg-gray_1kxlm_905",
  "border-secondary": "_border-secondary_1kxlm_1278",
  "border-gray": "_border-gray_1kxlm_961",
  "shadow-glow": "_shadow-glow_1kxlm_1314",
  "w-8": "_w-8_1kxlm_1362",
  "w-10": "_w-10_1kxlm_1366",
  "w-12": "_w-12_1kxlm_1370",
  "w-16": "_w-16_1kxlm_1374",
  "h-8": "_h-8_1kxlm_1378",
  "h-10": "_h-10_1kxlm_1382",
  "h-12": "_h-12_1kxlm_1386",
  "h-16": "_h-16_1kxlm_1390",
  "user-select-none": "_user-select-none_1kxlm_1406",
  transition: g_,
  "transition-colors": "_transition-colors_1kxlm_1414",
  "transition-transform": "_transition-transform_1kxlm_1418",
  "hover-scale": "_hover-scale_1kxlm_1422",
  "fade-in": "_fade-in_1kxlm_1429",
  "status-online": "_status-online_1kxlm_1441",
  "status-offline": "_status-offline_1kxlm_1451",
  "status-away": "_status-away_1kxlm_1461",
  "status-busy": "_status-busy_1kxlm_1471",
  "modal-overlay": "_modal-overlay_1kxlm_1481",
  "modal-content": "_modal-content_1kxlm_1495",
  "close-button-absolute": "_close-button-absolute_1kxlm_1509",
  small: b_,
  large: y_,
  "primary-button": "_primary-button_1kxlm_1590",
  "secondary-button": "_secondary-button_1kxlm_1594",
  card: v_,
  "input-base": "_input-base_1kxlm_1647",
  "chat-window": "_chat-window_1kxlm_1679",
  "chat-message": "_chat-message_1kxlm_1690",
  "z-overlay": "_z-overlay_1kxlm_1715",
  "mobile-hidden": "_mobile-hidden_1kxlm_1720",
  "mobile-flex-col": "_mobile-flex-col_1kxlm_1723",
  "mobile-text-center": "_mobile-text-center_1kxlm_1726",
  "mobile-p-sm": "_mobile-p-sm_1kxlm_1729",
  "mobile-gap-sm": "_mobile-gap-sm_1kxlm_1732",
  "desktop-hidden": "_desktop-hidden_1kxlm_1737",
  "print-hidden": "_print-hidden_1kxlm_1742",
  baseButton: x_,
  "button-primary": "_button-primary_1kxlm_1808",
  "button-secondary": "_button-secondary_1kxlm_1847",
  "button-danger": "_button-danger_1kxlm_1886",
  "button-success": "_button-success_1kxlm_1922",
  "button-warning": "_button-warning_1kxlm_1938",
  "button-ghost": "_button-ghost_1kxlm_1954",
  "button-link": "_button-link_1kxlm_1990",
  "button-small": "_button-small_1kxlm_2028",
  "button-medium": "_button-medium_1kxlm_2034",
  "button-large": "_button-large_1kxlm_2040",
  fullWidth: w_,
  loading: k_,
  content: S_,
  leftIcon: C_,
  rightIcon: z_,
  spinner: j_,
  spin: T_,
  "close-button": "_close-button_1kxlm_1509",
  modalCloseAbsolute: P_,
  iconBtn: E_,
  "word-button": "_word-button_1kxlm_2249",
  selected: N_,
  active: I_,
  locked: L_,
  burnSuspect: A_,
  burned: M_,
  "copy-link": "_copy-link_1kxlm_2315",
  "share-link--copy": "_share-link--copy_1kxlm_2390",
  "share-link-icon": "_share-link-icon_1kxlm_2396",
  "share-link-text": "_share-link-text_1kxlm_2402",
  "go-back": "_go-back_1kxlm_2410",
  goBackIcon: O_,
  goBackLabel: R_,
  "friends-toggle": "_friends-toggle_1kxlm_2489",
  "friends-toggle-icon": "_friends-toggle-icon_1kxlm_2546",
  primaryBtn: D_,
  secondaryBtn: B_,
  "nav-back": "_nav-back_1kxlm_2642",
  linkButton: $_,
  closeButton: F_,
  wordButton: q_,
  "loading-shimmer": "_loading-shimmer_1kxlm_1"
}, js = {
  // Basic variants
  primary: {
    variant: "primary",
    size: "medium",
    behavior: "button",
    className: rt.primaryBtn
  },
  secondary: {
    variant: "secondary",
    size: "medium",
    behavior: "button",
    className: rt.secondaryBtn
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
    className: rt.iconBtn
  },
  close: {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "left",
    defaultText: "Close",
    behavior: "close",
    ariaLabel: "Close",
    className: rt["close-button"]
  },
  "close-icon-only": {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "only",
    behavior: "close",
    ariaLabel: "Close",
    className: rt["close-button"]
  },
  word: {
    variant: "secondary",
    size: "medium",
    behavior: "toggle",
    className: rt["word-button"]
  },
  "copy-link": {
    variant: "ghost",
    size: "medium",
    icon: "📋",
    iconPosition: "left",
    defaultText: "Copy Link",
    behavior: "copy",
    ariaLabel: "Copy link",
    className: rt["copy-link"]
  },
  "go-back": {
    variant: "ghost",
    size: "medium",
    icon: "←",
    iconPosition: "left",
    defaultText: "Back",
    behavior: "button",
    ariaLabel: "Go back",
    className: rt["go-back"]
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
    className: rt["nav-back"]
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
  ...js[t],
  ...n
}), sS = {
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
}, lS = {
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
var Ts = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Zr = tt.createContext && /* @__PURE__ */ tt.createContext(Ts), H_ = ["attr", "size", "title"];
function Z_(t, n) {
  if (t == null) return {};
  var a = U_(t, n), r, c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(t);
    for (c = 0; c < d.length; c++)
      r = d[c], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
function U_(t, n) {
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
function Ur(t, n) {
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
    n % 2 ? Ur(Object(a), !0).forEach(function(r) {
      W_(t, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Ur(Object(a)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return t;
}
function W_(t, n, a) {
  return n = V_(n), n in t ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = a, t;
}
function V_(t) {
  var n = G_(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function G_(t, n) {
  if (typeof t != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(t, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Ps(t) {
  return t && t.map((n, a) => /* @__PURE__ */ tt.createElement(n.tag, sa({
    key: a
  }, n.attr), Ps(n.child)));
}
function It(t) {
  return (n) => /* @__PURE__ */ tt.createElement(K_, ra({
    attr: sa({}, t.attr)
  }, n), Ps(t.child));
}
function K_(t) {
  var n = (a) => {
    var {
      attr: r,
      size: c,
      title: d
    } = t, u = Z_(t, H_), h = c || a.size || "1em", p;
    return a.className && (p = a.className), t.className && (p = (p ? p + " " : "") + t.className), /* @__PURE__ */ tt.createElement("svg", ra({
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
    }), d && /* @__PURE__ */ tt.createElement("title", null, d), t.children);
  };
  return Zr !== void 0 ? /* @__PURE__ */ tt.createElement(Zr.Consumer, null, (a) => n(a)) : n(Ts);
}
function Y_(t) {
  return It({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" }, child: [] }] })(t);
}
function J_(t) {
  return It({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" }, child: [] }] })(t);
}
function X_(t) {
  return It({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" }, child: [] }] })(t);
}
function Q_(t) {
  return It({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(t);
}
function ed(t) {
  return It({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(t);
}
function td(t) {
  return It({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(t);
}
function id(t) {
  return It({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(t);
}
function nd(t) {
  return It({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(t);
}
function ad(t) {
  return It({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" }, child: [] }] })(t);
}
function od(t) {
  return It({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" }, child: [] }] })(t);
}
function rd(t) {
  return It({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, child: [] }] })(t);
}
function sd(t) {
  return It({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" }, child: [] }] })(t);
}
function ld(t) {
  return It({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(t);
}
function cd(t) {
  return It({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(t);
}
function _d(t) {
  return It({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" }, child: [] }] })(t);
}
const dd = {
  check: ed,
  close: ld,
  settings: td,
  user: cd,
  home: od,
  star: sd,
  search: rd,
  heart: ad,
  bell: X_,
  "arrow-left": Y_,
  "arrow-right": J_,
  copy: _d,
  warning: nd,
  success: Q_,
  danger: id
}, ud = ({ name: t, size: n = 24, color: a = "currentColor", className: r = "", ...c }) => {
  const d = dd[t];
  return d ? /* @__PURE__ */ l.jsx(d, { size: n, color: a, className: r, ...c }) : null;
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
    burnSuspect: x = !1,
    isBurned: k = !1,
    imageUrl: z,
    userName: E,
    isAuthenticated: j = !1,
    label: D,
    size: F,
    loading: q = !1,
    fullWidth: M = !1,
    className: O = "",
    onClick: P,
    iconPosition: N,
    ...J
  }, $) => {
    const W = js[t], T = N || W.iconPosition || "left";
    let A = a || W.icon;
    typeof A == "string" && [
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
    ].includes(A) && (A = /* @__PURE__ */ l.jsx(
      ud,
      {
        name: A,
        size: F === "small" ? 16 : F === "large" ? 28 : 20
      }
    ));
    const V = c || r || d || W.defaultText;
    let ee = null;
    t === "friends-toggle" && (j && z ? ee = /* @__PURE__ */ l.jsx(
      "img",
      {
        src: z,
        alt: E || "Profile",
        style: {
          width: 36,
          height: 36,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #38bdf8"
        }
      }
    ) : ee = /* @__PURE__ */ l.jsx("span", { className: "friends-toggle-icon", children: /* @__PURE__ */ l.jsxs(
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
    const le = D || W.ariaLabel || (typeof V == "string" ? V : "Button"), ae = [
      rt.baseButton,
      // Base button styles
      rt[`button-${W.variant}`],
      // Variant styles
      rt[`button-${F || W.size || "medium"}`],
      // Size styles
      O,
      W.className,
      p && rt.selected,
      g && rt.active,
      y && rt.locked,
      x && rt.burnSuspect,
      k && rt.burned,
      q && rt.loading,
      M && rt.fullWidth
    ].filter(Boolean).join(" "), te = (w) => {
      switch (W.behavior) {
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
      W.clickHandler && W.clickHandler(w), P == null || P(w);
    }, ce = () => n === "icon" ? A : n === "textIcon" ? (T === "top" || T === "bottom") && A ? /* @__PURE__ */ l.jsxs(
      "span",
      {
        style: {
          display: "flex",
          flexDirection: T === "top" ? "column" : "column-reverse",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ l.jsx("span", { children: A }),
          V && /* @__PURE__ */ l.jsx("span", { children: V })
        ]
      }
    ) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      T === "left" && A && /* @__PURE__ */ l.jsx("span", { className: rt.leftIcon, children: A }),
      V && /* @__PURE__ */ l.jsx("span", { children: V }),
      T === "right" && A && /* @__PURE__ */ l.jsx("span", { className: rt.rightIcon, children: A })
    ] }) : V;
    return W.behavior === "link" && u ? /* @__PURE__ */ l.jsx(
      "a",
      {
        href: u,
        className: `${rt.linkButton} ${ae}`.trim(),
        ref: $,
        "aria-label": le,
        ...J,
        children: ce()
      }
    ) : n === "icon" ? /* @__PURE__ */ l.jsx(
      "button",
      {
        ref: $,
        className: ae,
        onClick: te,
        "aria-label": le,
        disabled: y || q,
        ...J,
        children: t === "friends-toggle" ? ee : A
      }
    ) : /* @__PURE__ */ l.jsx(
      "button",
      {
        ref: $,
        className: ae,
        onClick: te,
        "aria-label": le,
        disabled: y || q,
        ...J,
        children: t === "friends-toggle" ? ee : ce()
      }
    );
  }
);
Ce.displayName = "Button";
function Rt(t, n = {}) {
  return tt.createElement(Ce, {
    kind: t,
    ...n
  });
}
function cS(t, n = {}) {
  return Object.fromEntries(
    Object.entries(t).map(
      ([a, { kind: r, props: c = {} }]) => [
        a,
        Rt(r, { ...n, ...c })
      ]
    )
  );
}
const md = (t, n = "Save") => Rt("primary", { onClick: t, text: n }), hd = (t, n = "Cancel") => Rt("secondary", { onClick: t, text: n }), _S = (t, n = "Delete") => Rt("danger", { onClick: t, text: n }), dS = (t, n = "Edit") => Rt("ghost", { onClick: t, text: n, icon: "✏️" }), uS = (t, n = "Add") => Rt("success", { onClick: t, text: n, icon: "+" }), mS = (t) => Rt("close", { onClick: t }), hS = (t, n = "Back") => Rt("go-back", { onClick: t, text: n }), pS = (t, n = "Copy") => Rt("copy-link", { copyText: t, text: n }), fS = (t, n, a) => Rt("icon", { icon: t, onClick: n, label: a }), gS = (t, n) => ({
  confirm: Rt("danger", {
    onClick: t,
    text: "Confirm"
  }),
  cancel: Rt("secondary", {
    onClick: n,
    text: "Cancel"
  })
}), bS = (t, n, a) => ({
  delete: Rt("danger", {
    onClick: t,
    text: a ? `Delete ${a}` : "Delete"
  }),
  cancel: Rt("secondary", {
    onClick: n,
    text: "Cancel"
  })
}), yS = (t, n) => ({
  save: md(t),
  cancel: hd(n)
}), pd = {
  kind: "component",
  variant: "component-wrapper",
  layout: "passthrough",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic component wrapper",
  migrationPath: "Use the specific  component or factory method"
}, fd = {
  kind: "provider",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "Provider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic provider wrapper",
  migrationPath: "Use the specific  provider or factory method"
}, gd = {
  kind: "legacy",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Generic legacy wrapper",
  migrationPath: "Migrate to the corresponding  component"
}, bd = {
  kind: "flex-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "FlexContainer",
  Component: "FlexContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Flexbox container wrapper with positioning control",
  migrationPath: "Use CSS flexbox directly or Wrapper with flex kind"
}, yd = {
  kind: "grid-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "GridContainer",
  Component: "GridContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "CSS Grid container wrapper with positioning control",
  migrationPath: "Use CSS grid directly or Wrapper with grid kind"
}, vd = {
  kind: "center-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "CenterContainer",
  Component: "CenterContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Container that centers content both horizontally and vertically",
  migrationPath: "Use CSS centering techniques or Wrapper with center kind"
}, xd = {
  kind: "stack-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "StackContainer",
  Component: "StackContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Vertical stack container with gap control",
  migrationPath: "Use CSS flexbox column or Wrapper with stack kind"
}, wd = {
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
  migrationPath: "Use Button directly or ButtonFactory for new code"
}, kd = {
  kind: "header-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Header",
  Component: "Header",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Header component",
  migrationPath: "Use Header or HeaderFactory for advanced features"
}, Sd = {
  kind: "modal-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Modal",
  Component: "Modal",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Modal component",
  migrationPath: "Use Modal or ModalFactory for new features"
}, Cd = {
  kind: "grid-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Grid",
  Component: "Grid",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Basic wrapper around Grid for simple use cases",
  migrationPath: "Use Grid or GridFactory for advanced layouts"
}, zd = {
  kind: "page-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Page",
  Component: "Page",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Wrapper around Page for the most common use case",
  migrationPath: "Use Page or PageFactory for advanced features"
}, jd = {
  kind: "graph-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Graphs",
  Component: "Graph",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Wrapper around Graph for the most common use case",
  migrationPath: "Use Graph or GraphFactory for advanced charts"
}, Td = {
  kind: "sidebar-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Sidebar",
  Component: "Sidebar",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Sidebar component",
  migrationPath: "Use Sidebar or SidebarFactory for new features"
}, Pd = {
  kind: "settings-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Settings",
  Component: "Settings",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Settings component",
  migrationPath: "Use Settings or SettingsFactory for new features"
}, Ed = {
  kind: "theme-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Theme",
  Component: "Theme",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Theme component",
  migrationPath: "Use Theme or ThemeFactory for new features"
}, Nd = {
  kind: "admin-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "Admin",
  Component: "Admin",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Backward compatibility wrapper for Admin component",
  migrationPath: "Use Admin or AdminFactory for new features"
}, Id = {
  kind: "card-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Card",
  Component: "Card",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Card component",
  migrationPath: "Use Card or CardFactory for advanced features"
}, Ld = {
  kind: "banner-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Banner",
  Component: "Banner",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Banner component",
  migrationPath: "Use Banner or BannerFactory for advanced features"
}, Ad = {
  kind: "chat-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Chat",
  Component: "Chat",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Chat component",
  migrationPath: "Use Chat or ChatFactory for advanced features"
}, Md = {
  kind: "form-wrapper",
  variant: "simplified-interface",
  layout: "passthrough",
  targetComponent: "Form",
  Component: "Form",
  maintainAPI: !0,
  preserveEvents: !0,
  forwardRef: !0,
  description: "Simplified interface wrapper for Form component",
  migrationPath: "Use Form or FormFactory for advanced features"
}, Od = {
  kind: "socket-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "SocketProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for SocketProvider",
  migrationPath: 'Use Provider with kind="socket-provider"'
}, Rd = {
  kind: "user-settings-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "UserSettingsProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for UserSettingsProvider",
  migrationPath: 'Use Provider with kind="user-settings-provider"'
}, Dd = {
  kind: "theme-palette-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "ThemePaletteProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for ThemePaletteProvider",
  migrationPath: 'Use Provider with kind="theme-palette-provider"'
}, Bd = {
  kind: "achievement-socket-listener-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "AchievementSocketListener",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for AchievementSocketListener",
  migrationPath: 'Use Provider with kind="achievement-socket-listener"'
}, $d = {
  kind: "primary-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "PrimaryButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for PrimaryButton component",
  migrationPath: 'Use Button with kind="primary" or ButtonFactory.primary()'
}, Fd = {
  kind: "secondary-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "SecondaryButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for SecondaryButton component",
  migrationPath: 'Use Button with kind="secondary" or ButtonFactory.secondary()'
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
  migrationPath: 'Use Button with kind="close" or ButtonFactory.close()'
}, Hd = {
  kind: "icon-button-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "IconButton",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for IconButton component",
  migrationPath: 'Use Button with kind="icon" or ButtonFactory.icon()'
}, Zd = {
  kind: "browse-header-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "BrowseHeader",
  Component: "Header",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for BrowseHeader component",
  migrationPath: 'Use Header with kind="browse-tabbed" or HeaderFactory.browseWithTabs()'
}, Ud = {
  kind: "modal-header-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "ModalHeader",
  Component: "Header",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper for ModalHeader component",
  migrationPath: 'Use Header with kind="modal" or HeaderFactory.modal()'
}, Wd = {
  kind: "vs-grid-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "VSGrid",
  Component: "Grid",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy VSGrid component - wrapper around Grid",
  migrationPath: 'Use Grid with kind="vs-grid" or GridFactory.vsGrid()'
}, Vd = {
  kind: "startup-page-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "StartupPage",
  Component: "Page",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper using the  page system",
  migrationPath: 'Use Page with kind="startup" or PageFactory.startup()'
}, Gd = {
  kind: "customization-category-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "CustomizationCategory",
  Component: "Settings",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Backward compatibility wrapper for CustomizationCategory",
  migrationPath: 'Use Settings with kind="customization-category" or SettingsFactory'
}, Kd = {
  kind: "settings-panel-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "SettingsPanel",
  Component: "Settings",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Backward compatibility wrapper for SettingsPanel",
  migrationPath: 'Use Settings with kind="settings-panel" or SettingsFactory'
}, Yd = {
  kind: "theme-selector-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "ThemeSelector",
  Component: "Theme",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy wrapper using the  theme system",
  migrationPath: 'Use Theme with kind="selector" or ThemeFactory.selector()'
}, Jd = {
  kind: "friends-sidebar-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "FriendsSidebar",
  Component: "Sidebar",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy FriendsSidebar - Backward compatibility wrapper",
  migrationPath: 'Use Sidebar with kind="friends" or SidebarFactory.friends()'
}, Xd = {
  kind: "session-debugger-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "SessionDebugger",
  Component: "Admin",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Backward Compatibility Wrapper for SessionDebugger",
  migrationPath: 'Use Admin with kind="session-debugger" or AdminFactory.sessionDebugger()'
}, Qd = {
  kind: "dark-mode-toggle-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "DarkModeToggle",
  Component: "Button",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Legacy component wrapper for dark mode toggle functionality",
  migrationPath: 'Use Button with kind="dark-mode-toggle" or ButtonFactory.darkModeToggle()'
}, eu = {
  kind: "backward-compatibility-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic backward compatibility wrapper",
  migrationPath: "Migrate to the corresponding  component"
}, tu = {
  kind: "legacy-wrapper",
  variant: "legacy-support",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  deprecationWarning: !0,
  description: "Generic legacy component wrapper",
  migrationPath: "Use the corresponding  component or factory"
}, iu = {
  kind: "simple-wrapper",
  variant: "simplified-interface",
  layout: "simplified",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !1,
  simplifyProps: !0,
  preserveEvents: !0,
  description: "Simple wrapper with reduced API surface",
  migrationPath: "Use  component for advanced features"
}, nu = {
  kind: "enhanced-wrapper",
  variant: "enhanced-functionality",
  layout: "enhanced",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !0,
  addEnhancements: !0,
  preserveEvents: !0,
  description: "Enhanced wrapper with additional functionality",
  migrationPath: "Use  component directly for full control"
}, En = {
  // Generic Wrappers
  component: pd,
  provider: fd,
  legacy: gd,
  // Layout Wrappers
  "flex-container": bd,
  "grid-container": yd,
  "center-container": vd,
  "stack-container": xd,
  // Component Wrappers
  "button-wrapper": wd,
  "header-wrapper": kd,
  "modal-wrapper": Sd,
  "grid-wrapper": Cd,
  "page-wrapper": zd,
  "graph-wrapper": jd,
  "sidebar-wrapper": Td,
  "settings-wrapper": Pd,
  "theme-wrapper": Ed,
  "admin-wrapper": Nd,
  "card-wrapper": Id,
  "banner-wrapper": Ld,
  "chat-wrapper": Ad,
  "form-wrapper": Md,
  // Provider Wrappers
  "socket-provider-wrapper": Od,
  "user-settings-provider-wrapper": Rd,
  "theme-palette-provider-wrapper": Dd,
  "achievement-socket-listener-wrapper": Bd,
  // Legacy Component Wrappers
  "primary-button-wrapper": $d,
  "secondary-button-wrapper": Fd,
  "close-button-wrapper": qd,
  "icon-button-wrapper": Hd,
  "browse-header-wrapper": Zd,
  "modal-header-wrapper": Ud,
  "vs-grid-wrapper": Wd,
  "startup-page-wrapper": Vd,
  "customization-category-wrapper": Gd,
  "settings-panel-wrapper": Kd,
  "theme-selector-wrapper": Yd,
  "friends-sidebar-wrapper": Jd,
  "session-debugger-wrapper": Xd,
  "dark-mode-toggle-wrapper": Qd,
  // Generic Wrappers
  "backward-compatibility-wrapper": eu,
  "legacy-wrapper": tu,
  "simple-wrapper": iu,
  "enhanced-wrapper": nu
};
function au(t) {
  return En[t];
}
function vS(t) {
  return t in En;
}
function xS(t) {
  return Object.values(En).filter(
    (n) => n.variant === t
  );
}
function wS() {
  return Object.values(En).filter(
    (t) => t.deprecationWarning
  );
}
function kS(t, n = {}) {
  const a = En[t];
  return {
    ...a,
    ...n,
    // Merge className if both exist
    className: n.className ? `${a.className || ""} ${n.className}`.trim() : a.className
  };
}
const SS = {
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
    "backward-compatibility-wrapper",
    "legacy-wrapper",
    "simple-wrapper",
    "enhanced-wrapper"
  ]
}, CS = {
  BUTTON: "button-wrapper",
  HEADER: "header-wrapper",
  MODAL: "modal-wrapper",
  GRID: "grid-wrapper",
  PAGE: "page-wrapper",
  SIDEBAR: "sidebar-wrapper",
  SETTINGS: "settings-wrapper",
  LEGACY: "legacy-wrapper",
  COMPATIBILITY: "backward-compatibility-wrapper"
}, ou = "_Wrapper_algqq_118", ru = "_migrationHelper_algqq_166", su = "_migrationButton_algqq_292", wn = {
  Wrapper: ou,
  "wrapper--elevated": "_wrapper--elevated_algqq_161",
  "wrapper--backward-compatibility": "_wrapper--backward-compatibility_algqq_166",
  migrationHelper: ru,
  "wrapper--simplified-interface": "_wrapper--simplified-interface_algqq_173",
  "wrapper--enhanced-functionality": "_wrapper--enhanced-functionality_algqq_177",
  "wrapper--legacy-support": "_wrapper--legacy-support_algqq_189",
  "wrapper--provider-wrapper": "_wrapper--provider-wrapper_algqq_209",
  "wrapper--component-wrapper": "_wrapper--component-wrapper_algqq_214",
  "wrapper--layout-container": "_wrapper--layout-container_algqq_226",
  "wrapper--passthrough": "_wrapper--passthrough_algqq_257",
  "wrapper--enhanced": "_wrapper--enhanced_algqq_177",
  "wrapper--simplified": "_wrapper--simplified_algqq_173",
  "wrapper--decorated": "_wrapper--decorated_algqq_269",
  migrationButton: su,
  "legacy-warning": "_legacy-warning_algqq_1",
  "loading-shimmer": "_loading-shimmer_algqq_1"
};
function lu(t, n, a, r) {
  const c = t.variant === "layout-container", d = t.Component === "Button", u = t.Component === "Form", h = cu(
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
  return d ? /* @__PURE__ */ l.jsx(Ce, { ...p, children: a }) : u ? Fr("form", p, a) : Fr(
    "div",
    p,
    a
  );
}
function cu(t, n, a) {
  const r = mu(t.kind), c = a ? du(t.kind) : _u(t.Component), d = a ? uu(c, n) : { style: {}, otherProps: {} };
  return {
    mappedKind: r,
    wrapperType: c,
    containerStyles: d
  };
}
function _u(t) {
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
function du(t) {
  return {
    "flex-container": "flex-container",
    "grid-container": "grid-container",
    "center-container": "center-container",
    "stack-container": "stack-container"
  }[t] || "generic-container";
}
function uu(t, n) {
  const { style: a, ...r } = n, c = (g) => {
    const y = {}, x = {};
    return Object.entries(r).forEach(([k, z]) => {
      k in g ? y[k] = z !== void 0 ? z : g[k] : x[k] = z;
    }), Object.entries(g).forEach(
      ([k, z]) => {
        k in y || (y[k] = z);
      }
    ), { props: y, restProps: x };
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
    }, { props: y, restProps: x } = c(g);
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
      otherProps: x
    };
  }
  if (u) {
    const g = {
      columns: "repeat(auto-fit, minmax(250px, 1fr))",
      rows: "auto",
      gap: "1rem",
      justifyItems: "center",
      alignItems: "center"
    }, { props: y, restProps: x } = c(g);
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
      otherProps: x
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
function mu(t) {
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
const hu = Le(
  ({
    kind: t,
    children: n,
    className: a,
    suppressDeprecationWarning: r = !1,
    onMigrationHelp: c,
    configuration: d,
    ...u
  }, h) => {
    const p = au(t), g = d ? { ...p, ...d } : p;
    if (!g)
      return console.warn(
        `Wrapper: Unknown wrapper kind "${t}"`
      ), /* @__PURE__ */ l.jsx("div", { className: a, children: n });
    const y = _i(() => {
      const {
        suppressDeprecationWarning: z,
        onMigrationHelp: E,
        configuration: j,
        ...D
      } = u;
      return {
        ...D,
        ...(g == null ? void 0 : g.forwardRef) && { ref: h }
      };
    }, [u, g, h]), x = _i(
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
    const k = () => g != null && g.deprecationWarning && typeof window < "u" ? /* @__PURE__ */ l.jsx("div", { className: wn.migrationHelper, children: /* @__PURE__ */ l.jsx(
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
      k(),
      lu(
        g,
        y,
        n,
        x
      )
    ] });
  }
), f = di(hu);
function Ct(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var pu = typeof Symbol == "function" && Symbol.observable || "@@observable", Wr = pu, Xa = () => Math.random().toString(36).substring(7).split("").join("."), fu = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Xa()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Xa()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Xa()}`
}, qi = fu;
function Nn(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let n = t;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(t) === n || Object.getPrototypeOf(t) === null;
}
function gu(t) {
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
  if (vu(t))
    return "date";
  if (yu(t))
    return "error";
  const a = bu(t);
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
function bu(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function yu(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function vu(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function ji(t) {
  let n = typeof t;
  return process.env.NODE_ENV !== "production" && (n = gu(t)), n;
}
function Es(t, n, a) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ct(2) : `Expected the root reducer to be a function. Instead, received: '${ji(t)}'`);
  if (typeof n == "function" && typeof a == "function" || typeof a == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ct(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof n == "function" && typeof a > "u" && (a = n, n = void 0), typeof a < "u") {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(1) : `Expected the enhancer to be a function. Instead, received: '${ji(a)}'`);
    return a(Es)(t, n);
  }
  let r = t, c = n, d = /* @__PURE__ */ new Map(), u = d, h = 0, p = !1;
  function g() {
    u === d && (u = /* @__PURE__ */ new Map(), d.forEach((D, F) => {
      u.set(F, D);
    }));
  }
  function y() {
    if (p)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return c;
  }
  function x(D) {
    if (typeof D != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(4) : `Expected the listener to be a function. Instead, received: '${ji(D)}'`);
    if (p)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let F = !0;
    g();
    const q = h++;
    return u.set(q, D), function() {
      if (F) {
        if (p)
          throw new Error(process.env.NODE_ENV === "production" ? Ct(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        F = !1, g(), u.delete(q), d = null;
      }
    };
  }
  function k(D) {
    if (!Nn(D))
      throw new Error(process.env.NODE_ENV === "production" ? Ct(7) : `Actions must be plain objects. Instead, the actual type was: '${ji(D)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof D.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof D.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(17) : `Action "type" property must be a string. Instead, the actual type was: '${ji(D.type)}'. Value was: '${D.type}' (stringified)`);
    if (p)
      throw new Error(process.env.NODE_ENV === "production" ? Ct(9) : "Reducers may not dispatch actions.");
    try {
      p = !0, c = r(c, D);
    } finally {
      p = !1;
    }
    return (d = u).forEach((q) => {
      q();
    }), D;
  }
  function z(D) {
    if (typeof D != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(10) : `Expected the nextReducer to be a function. Instead, received: '${ji(D)}`);
    r = D, k({
      type: qi.REPLACE
    });
  }
  function E() {
    const D = x;
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
          throw new Error(process.env.NODE_ENV === "production" ? Ct(11) : `Expected the observer to be an object. Instead, received: '${ji(F)}'`);
        function q() {
          const O = F;
          O.next && O.next(y());
        }
        return q(), {
          unsubscribe: D(q)
        };
      },
      [Wr]() {
        return this;
      }
    };
  }
  return k({
    type: qi.INIT
  }), {
    dispatch: k,
    subscribe: x,
    getState: y,
    replaceReducer: z,
    [Wr]: E
  };
}
function Vr(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function xu(t, n, a, r) {
  const c = Object.keys(n), d = a && a.type === qi.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (c.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Nn(t))
    return `The ${d} has unexpected type of "${ji(t)}". Expected argument to be an object with the following keys: "${c.join('", "')}"`;
  const u = Object.keys(t).filter((h) => !n.hasOwnProperty(h) && !r[h]);
  if (u.forEach((h) => {
    r[h] = !0;
  }), !(a && a.type === qi.REPLACE) && u.length > 0)
    return `Unexpected ${u.length > 1 ? "keys" : "key"} "${u.join('", "')}" found in ${d}. Expected to find one of the known reducer keys instead: "${c.join('", "')}". Unexpected keys will be ignored.`;
}
function wu(t) {
  Object.keys(t).forEach((n) => {
    const a = t[n];
    if (typeof a(void 0, {
      type: qi.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(12) : `The slice reducer for key "${n}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof a(void 0, {
      type: qi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ct(13) : `The slice reducer for key "${n}" returned undefined when probed with a random type. Don't try to handle '${qi.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ku(t) {
  const n = Object.keys(t), a = {};
  for (let u = 0; u < n.length; u++) {
    const h = n[u];
    process.env.NODE_ENV !== "production" && typeof t[h] > "u" && Vr(`No reducer provided for key "${h}"`), typeof t[h] == "function" && (a[h] = t[h]);
  }
  const r = Object.keys(a);
  let c;
  process.env.NODE_ENV !== "production" && (c = {});
  let d;
  try {
    wu(a);
  } catch (u) {
    d = u;
  }
  return function(h = {}, p) {
    if (d)
      throw d;
    if (process.env.NODE_ENV !== "production") {
      const x = xu(h, a, p, c);
      x && Vr(x);
    }
    let g = !1;
    const y = {};
    for (let x = 0; x < r.length; x++) {
      const k = r[x], z = a[k], E = h[k], j = z(E, p);
      if (typeof j > "u") {
        const D = p && p.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ct(14) : `When called with an action of type ${D ? `"${String(D)}"` : "(unknown type)"}, the slice reducer for key "${k}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      y[k] = j, g = g || j !== E;
    }
    return g = g || r.length !== Object.keys(h).length, g ? y : h;
  };
}
function la(...t) {
  return t.length === 0 ? (n) => n : t.length === 1 ? t[0] : t.reduce((n, a) => (...r) => n(a(...r)));
}
function Su(...t) {
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
function Ns(t) {
  return Nn(t) && "type" in t && typeof t.type == "string";
}
var Is = Symbol.for("immer-nothing"), Gr = Symbol.for("immer-draftable"), Ht = Symbol.for("immer-state"), Cu = process.env.NODE_ENV !== "production" ? [
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
    const a = Cu[t], r = typeof a == "function" ? a.apply(null, n) : a;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var on = Object.getPrototypeOf;
function Hi(t) {
  return !!t && !!t[Ht];
}
function yi(t) {
  var n;
  return t ? Ls(t) || Array.isArray(t) || !!t[Gr] || !!((n = t.constructor) != null && n[Gr]) || fa(t) || ga(t) : !1;
}
var zu = Object.prototype.constructor.toString();
function Ls(t) {
  if (!t || typeof t != "object")
    return !1;
  const n = on(t);
  if (n === null)
    return !0;
  const a = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return a === Object ? !0 : typeof a == "function" && Function.toString.call(a) === zu;
}
function ca(t, n) {
  pa(t) === 0 ? Reflect.ownKeys(t).forEach((a) => {
    n(a, t[a], t);
  }) : t.forEach((a, r) => n(r, a, t));
}
function pa(t) {
  const n = t[Ht];
  return n ? n.type_ : Array.isArray(t) ? 1 : fa(t) ? 2 : ga(t) ? 3 : 0;
}
function zo(t, n) {
  return pa(t) === 2 ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
}
function As(t, n, a) {
  const r = pa(t);
  r === 2 ? t.set(n, a) : r === 3 ? t.add(a) : t[n] = a;
}
function ju(t, n) {
  return t === n ? t !== 0 || 1 / t === 1 / n : t !== t && n !== n;
}
function fa(t) {
  return t instanceof Map;
}
function ga(t) {
  return t instanceof Set;
}
function $i(t) {
  return t.copy_ || t.base_;
}
function jo(t, n) {
  if (fa(t))
    return new Map(t);
  if (ga(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const a = Ls(t);
  if (n === !0 || n === "class_only" && !a) {
    const r = Object.getOwnPropertyDescriptors(t);
    delete r[Ht];
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
function Bo(t, n = !1) {
  return ba(t) || Hi(t) || !yi(t) || (pa(t) > 1 && (t.set = t.add = t.clear = t.delete = Tu), Object.freeze(t), n && Object.entries(t).forEach(([a, r]) => Bo(r, !0))), t;
}
function Tu() {
  Ot(2);
}
function ba(t) {
  return Object.isFrozen(t);
}
var Pu = {};
function Zi(t) {
  const n = Pu[t];
  return n || Ot(0, t), n;
}
var jn;
function Ms() {
  return jn;
}
function Eu(t, n) {
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
function Kr(t, n) {
  n && (Zi("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = n);
}
function To(t) {
  Po(t), t.drafts_.forEach(Nu), t.drafts_ = null;
}
function Po(t) {
  t === jn && (jn = t.parent_);
}
function Yr(t) {
  return jn = Eu(jn, t);
}
function Nu(t) {
  const n = t[Ht];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function Jr(t, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const a = n.drafts_[0];
  return t !== void 0 && t !== a ? (a[Ht].modified_ && (To(n), Ot(4)), yi(t) && (t = _a(n, t), n.parent_ || da(n, t)), n.patches_ && Zi("Patches").generateReplacementPatches_(
    a[Ht].base_,
    t,
    n.patches_,
    n.inversePatches_
  )) : t = _a(n, a, []), To(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), t !== Is ? t : void 0;
}
function _a(t, n, a) {
  if (ba(n))
    return n;
  const r = n[Ht];
  if (!r)
    return ca(
      n,
      (c, d) => Xr(t, r, n, c, d, a)
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
      (h, p) => Xr(t, r, c, h, p, a, u)
    ), da(t, c, !1), a && t.patches_ && Zi("Patches").generatePatches_(
      r,
      a,
      t.patches_,
      t.inversePatches_
    );
  }
  return r.copy_;
}
function Xr(t, n, a, r, c, d, u) {
  if (process.env.NODE_ENV !== "production" && c === a && Ot(5), Hi(c)) {
    const h = d && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !zo(n.assigned_, r) ? d.concat(r) : void 0, p = _a(t, c, h);
    if (As(a, r, p), Hi(p))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else u && a.add(c);
  if (yi(c) && !ba(c)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    _a(t, c), (!n || !n.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(a, r) && da(t, c);
  }
}
function da(t, n, a = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Bo(n, a);
}
function Iu(t, n) {
  const a = Array.isArray(t), r = {
    type_: a ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : Ms(),
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
  let c = r, d = $o;
  a && (c = [r], d = Tn);
  const { revoke: u, proxy: h } = Proxy.revocable(c, d);
  return r.draft_ = h, r.revoke_ = u, h;
}
var $o = {
  get(t, n) {
    if (n === Ht)
      return t;
    const a = $i(t);
    if (!zo(a, n))
      return Lu(t, a, n);
    const r = a[n];
    return t.finalized_ || !yi(r) ? r : r === Qa(t.base_, n) ? (eo(t), t.copy_[n] = No(r, t)) : r;
  },
  has(t, n) {
    return n in $i(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys($i(t));
  },
  set(t, n, a) {
    const r = Os($i(t), n);
    if (r != null && r.set)
      return r.set.call(t.draft_, a), !0;
    if (!t.modified_) {
      const c = Qa($i(t), n), d = c == null ? void 0 : c[Ht];
      if (d && d.base_ === a)
        return t.copy_[n] = a, t.assigned_[n] = !1, !0;
      if (ju(a, c) && (a !== void 0 || zo(t.base_, n)))
        return !0;
      eo(t), Eo(t);
    }
    return t.copy_[n] === a && // special case: handle new props with value 'undefined'
    (a !== void 0 || n in t.copy_) || // special case: NaN
    Number.isNaN(a) && Number.isNaN(t.copy_[n]) || (t.copy_[n] = a, t.assigned_[n] = !0), !0;
  },
  deleteProperty(t, n) {
    return Qa(t.base_, n) !== void 0 || n in t.base_ ? (t.assigned_[n] = !1, eo(t), Eo(t)) : delete t.assigned_[n], t.copy_ && delete t.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, n) {
    const a = $i(t), r = Reflect.getOwnPropertyDescriptor(a, n);
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
ca($o, (t, n) => {
  Tn[t] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
Tn.deleteProperty = function(t, n) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(n)) && Ot(13), Tn.set.call(this, t, n, void 0);
};
Tn.set = function(t, n, a) {
  return process.env.NODE_ENV !== "production" && n !== "length" && isNaN(parseInt(n)) && Ot(14), $o.set.call(this, t[0], n, a, t[0]);
};
function Qa(t, n) {
  const a = t[Ht];
  return (a ? $i(a) : t)[n];
}
function Lu(t, n, a) {
  var c;
  const r = Os(n, a);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (c = r.get) == null ? void 0 : c.call(t.draft_)
  ) : void 0;
}
function Os(t, n) {
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
function Eo(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Eo(t.parent_));
}
function eo(t) {
  t.copy_ || (t.copy_ = jo(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var Au = class {
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
      if (yi(n)) {
        const d = Yr(this), u = No(n, void 0);
        let h = !0;
        try {
          c = a(u), h = !1;
        } finally {
          h ? To(d) : Po(d);
        }
        return Kr(d, r), Jr(c, d);
      } else if (!n || typeof n != "object") {
        if (c = a(n), c === void 0 && (c = n), c === Is && (c = void 0), this.autoFreeze_ && Bo(c, !0), r) {
          const d = [], u = [];
          Zi("Patches").generateReplacementPatches_(n, c, d, u), r(d, u);
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
    yi(t) || Ot(8), Hi(t) && (t = Mu(t));
    const n = Yr(this), a = No(t, void 0);
    return a[Ht].isManual_ = !0, Po(n), a;
  }
  finishDraft(t, n) {
    const a = t && t[Ht];
    (!a || !a.isManual_) && Ot(9);
    const { scope_: r } = a;
    return Kr(r, n), Jr(void 0, r);
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
    const r = Zi("Patches").applyPatches_;
    return Hi(t) ? r(t, n) : this.produce(
      t,
      (c) => r(c, n)
    );
  }
};
function No(t, n) {
  const a = fa(t) ? Zi("MapSet").proxyMap_(t, n) : ga(t) ? Zi("MapSet").proxySet_(t, n) : Iu(t, n);
  return (n ? n.scope_ : Ms()).drafts_.push(a), a;
}
function Mu(t) {
  return Hi(t) || Ot(10, t), Rs(t);
}
function Rs(t) {
  if (!yi(t) || ba(t))
    return t;
  const n = t[Ht];
  let a;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, a = jo(t, n.scope_.immer_.useStrictShallowCopy_);
  } else
    a = jo(t, !0);
  return ca(a, (r, c) => {
    As(a, r, Rs(c));
  }), n && (n.finalized_ = !1), a;
}
var Zt = new Au(), Ds = Zt.produce;
Zt.produceWithPatches.bind(
  Zt
);
Zt.setAutoFreeze.bind(Zt);
Zt.setUseStrictShallowCopy.bind(Zt);
Zt.applyPatches.bind(Zt);
Zt.createDraft.bind(Zt);
Zt.finishDraft.bind(Zt);
function Bs(t) {
  return ({ dispatch: a, getState: r }) => (c) => (d) => typeof d == "function" ? d(a, r, t) : c(d);
}
var Ou = Bs(), Ru = Bs, Du = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? la : la.apply(null, arguments);
}, $s = (t) => t && typeof t.match == "function";
function zn(t, n) {
  function a(...r) {
    if (n) {
      let c = n(...r);
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? Xe(0) : "prepareAction did not return an object");
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
  return a.toString = () => `${t}`, a.type = t, a.match = (r) => Ns(r) && r.type === t, a;
}
function Bu(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  $s(t);
}
function $u(t) {
  const n = t ? `${t}`.split("/") : [], a = n[n.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${a}())\` instead of \`dispatch(${a})\`. This is necessary even if the action has no payload.`;
}
function Fu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (a) => (r) => a(r);
  const {
    isActionCreator: n = Bu
  } = t;
  return () => (a) => (r) => (n(r) && console.warn($u(r.type)), a(r));
}
function Fs(t, n) {
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
var qs = class Cn extends Array {
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
function Qr(t) {
  return yi(t) ? Ds(t, () => {
  }) : t;
}
function ta(t, n, a) {
  return t.has(n) ? t.get(n) : t.set(n, a(n)).get(n);
}
function qu(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function Hu(t, n, a) {
  const r = Hs(t, n, a);
  return {
    detectMutations() {
      return Zs(t, n, r, a);
    }
  };
}
function Hs(t, n = [], a, r = "", c = /* @__PURE__ */ new Set()) {
  const d = {
    value: a
  };
  if (!t(a) && !c.has(a)) {
    c.add(a), d.children = {};
    for (const u in a) {
      const h = r ? r + "." + u : u;
      n.length && n.indexOf(h) !== -1 || (d.children[u] = Hs(t, n, a[u], h));
    }
  }
  return d;
}
function Zs(t, n = [], a, r, c = !1, d = "") {
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
    const x = d ? d + "." + y : y;
    if (g && n.some((E) => E instanceof RegExp ? E.test(x) : x === E))
      continue;
    const k = Zs(t, n, a.children[y], r[y], h, x);
    if (k.wasMutated)
      return k;
  }
  return {
    wasMutated: !1
  };
}
function Zu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (a) => n(a);
  {
    let n = function(h, p, g, y) {
      return JSON.stringify(h, a(p, y), g);
    }, a = function(h, p) {
      let g = [], y = [];
      return p || (p = function(x, k) {
        return g[0] === k ? "[Circular ~]" : "[Circular ~." + y.slice(0, g.indexOf(k)).join(".") + "]";
      }), function(x, k) {
        if (g.length > 0) {
          var z = g.indexOf(this);
          ~z ? g.splice(z + 1) : g.push(this), ~z ? y.splice(z, 1 / 0, x) : y.push(x), ~g.indexOf(k) && (k = p.call(this, x, k));
        } else g.push(k);
        return h == null ? k : h.call(this, x, k);
      };
    }, {
      isImmutable: r = qu,
      ignoredPaths: c,
      warnAfter: d = 32
    } = t;
    const u = Hu.bind(null, r, c);
    return ({
      getState: h
    }) => {
      let p = h(), g = u(p), y;
      return (x) => (k) => {
        const z = Fs(d, "ImmutableStateInvariantMiddleware");
        z.measureTime(() => {
          if (p = h(), y = g.detectMutations(), g = u(p), y.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Xe(19) : `A state mutation was detected between dispatches, in the path '${y.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const E = x(k);
        return z.measureTime(() => {
          if (p = h(), y = g.detectMutations(), g = u(p), y.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Xe(20) : `A state mutation was detected inside a dispatch, in the path: ${y.path || ""}. Take a look at the reducer(s) handling the action ${n(k)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), z.warnIfExceeded(), E;
      };
    };
  }
}
function Us(t) {
  const n = typeof t;
  return t == null || n === "string" || n === "boolean" || n === "number" || Array.isArray(t) || Nn(t);
}
function Io(t, n = "", a = Us, r, c = [], d) {
  let u;
  if (!a(t))
    return {
      keyPath: n || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || d != null && d.has(t)) return !1;
  const h = r != null ? r(t) : Object.entries(t), p = c.length > 0;
  for (const [g, y] of h) {
    const x = n ? n + "." + g : g;
    if (!(p && c.some((z) => z instanceof RegExp ? z.test(x) : x === z))) {
      if (!a(y))
        return {
          keyPath: x,
          value: y
        };
      if (typeof y == "object" && (u = Io(y, x, a, r, c, d), u))
        return u;
    }
  }
  return d && Ws(t) && d.add(t), !1;
}
function Ws(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const n of Object.values(t))
    if (!(typeof n != "object" || n === null) && !Ws(n))
      return !1;
  return !0;
}
function Uu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (a) => n(a);
  {
    const {
      isSerializable: n = Us,
      getEntries: a,
      ignoredActions: r = [],
      ignoredActionPaths: c = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: d = [],
      warnAfter: u = 32,
      ignoreState: h = !1,
      ignoreActions: p = !1,
      disableCache: g = !1
    } = t, y = !g && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (x) => (k) => (z) => {
      if (!Ns(z))
        return k(z);
      const E = k(z), j = Fs(u, "SerializableStateInvariantMiddleware");
      return !p && !(r.length && r.indexOf(z.type) !== -1) && j.measureTime(() => {
        const D = Io(z, "", n, a, c, y);
        if (D) {
          const {
            keyPath: F,
            value: q
          } = D;
          console.error(`A non-serializable value was detected in an action, in the path: \`${F}\`. Value:`, q, `
Take a look at the logic that dispatched this action: `, z, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), h || (j.measureTime(() => {
        const D = x.getState(), F = Io(D, "", n, a, d, y);
        if (F) {
          const {
            keyPath: q,
            value: M
          } = F;
          console.error(`A non-serializable value was detected in the state, in the path: \`${q}\`. Value:`, M, `
Take a look at the reducer(s) handling this action type: ${z.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), j.warnIfExceeded()), E;
    };
  }
}
function ia(t) {
  return typeof t == "boolean";
}
var Wu = () => function(n) {
  const {
    thunk: a = !0,
    immutableCheck: r = !0,
    serializableCheck: c = !0,
    actionCreatorCheck: d = !0
  } = n ?? {};
  let u = new qs();
  if (a && (ia(a) ? u.push(Ou) : u.push(Ru(a.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let h = {};
      ia(r) || (h = r), u.unshift(Zu(h));
    }
    if (c) {
      let h = {};
      ia(c) || (h = c), u.push(Uu(h));
    }
    if (d) {
      let h = {};
      ia(d) || (h = d), u.unshift(Fu(h));
    }
  }
  return u;
}, Vu = "RTK_autoBatch", es = (t) => (n) => {
  setTimeout(n, t);
}, Gu = (t = {
  type: "raf"
}) => (n) => (...a) => {
  const r = n(...a);
  let c = !0, d = !1, u = !1;
  const h = /* @__PURE__ */ new Set(), p = t.type === "tick" ? queueMicrotask : t.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : es(10)
  ) : t.type === "callback" ? t.queueNotification : es(t.timeout), g = () => {
    u = !1, d && (d = !1, h.forEach((y) => y()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(y) {
      const x = () => c && y(), k = r.subscribe(x);
      return h.add(y), () => {
        k(), h.delete(y);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(y) {
      var x;
      try {
        return c = !((x = y == null ? void 0 : y.meta) != null && x[Vu]), d = !c, d && (u || (u = !0, p(g))), r.dispatch(y);
      } finally {
        c = !0;
      }
    }
  });
}, Ku = (t) => function(a) {
  const {
    autoBatch: r = !0
  } = a ?? {};
  let c = new qs(t);
  return r && c.push(Gu(typeof r == "object" ? r : void 0)), c;
};
function Vs(t) {
  const n = Wu(), {
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
  else if (Nn(a))
    p = ku(a);
  else
    throw new Error(process.env.NODE_ENV === "production" ? Xe(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Xe(2) : "`middleware` field must be a callback");
  let g;
  if (typeof r == "function") {
    if (g = r(n), process.env.NODE_ENV !== "production" && !Array.isArray(g))
      throw new Error(process.env.NODE_ENV === "production" ? Xe(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    g = n();
  if (process.env.NODE_ENV !== "production" && g.some((j) => typeof j != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Xe(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && d) {
    let j = /* @__PURE__ */ new Set();
    g.forEach((D) => {
      if (j.has(D))
        throw new Error(process.env.NODE_ENV === "production" ? Xe(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      j.add(D);
    });
  }
  let y = la;
  c && (y = Du({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof c == "object" && c
  }));
  const x = Su(...g), k = Ku(x);
  if (process.env.NODE_ENV !== "production" && h && typeof h != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Xe(5) : "`enhancers` field must be a callback");
  let z = typeof h == "function" ? h(k) : k();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(z))
    throw new Error(process.env.NODE_ENV === "production" ? Xe(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && z.some((j) => typeof j != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Xe(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && g.length && !z.includes(x) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const E = y(...z);
  return Es(p, u, E);
}
function Gs(t) {
  const n = {}, a = [];
  let r;
  const c = {
    addCase(d, u) {
      if (process.env.NODE_ENV !== "production") {
        if (a.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Xe(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? Xe(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const h = typeof d == "string" ? d : d.type;
      if (!h)
        throw new Error(process.env.NODE_ENV === "production" ? Xe(28) : "`builder.addCase` cannot be called with an empty action type");
      if (h in n)
        throw new Error(process.env.NODE_ENV === "production" ? Xe(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${h}'`);
      return n[h] = u, c;
    },
    addMatcher(d, u) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? Xe(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return a.push({
        matcher: d,
        reducer: u
      }), c;
    },
    addDefaultCase(d) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? Xe(31) : "`builder.addDefaultCase` can only be called once");
      return r = d, c;
    }
  };
  return t(c), [n, a, r];
}
function Yu(t) {
  return typeof t == "function";
}
function Ju(t, n) {
  if (process.env.NODE_ENV !== "production" && typeof n == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Xe(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [a, r, c] = Gs(n), d;
  if (Yu(t))
    d = () => Qr(t());
  else {
    const h = Qr(t);
    d = () => h;
  }
  function u(h = d(), p) {
    let g = [a[p.type], ...r.filter(({
      matcher: y
    }) => y(p)).map(({
      reducer: y
    }) => y)];
    return g.filter((y) => !!y).length === 0 && (g = [c]), g.reduce((y, x) => {
      if (x)
        if (Hi(y)) {
          const z = x(y, p);
          return z === void 0 ? y : z;
        } else {
          if (yi(y))
            return Ds(y, (k) => x(k, p));
          {
            const k = x(y, p);
            if (k === void 0) {
              if (y === null)
                return y;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return k;
          }
        }
      return y;
    }, h);
  }
  return u.getInitialState = d, u;
}
var Xu = (t, n) => $s(t) ? t.match(n) : t(n);
function Qu(...t) {
  return (n) => t.some((a) => Xu(a, n));
}
var em = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", tm = (t = 21) => {
  let n = "", a = t;
  for (; a--; )
    n += em[Math.random() * 64 | 0];
  return n;
}, im = ["name", "message", "stack", "code"], to = class {
  constructor(t, n) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ja(this, "_type");
    this.payload = t, this.meta = n;
  }
}, ts = class {
  constructor(t, n) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ja(this, "_type");
    this.payload = t, this.meta = n;
  }
}, nm = (t) => {
  if (typeof t == "object" && t !== null) {
    const n = {};
    for (const a of im)
      typeof t[a] == "string" && (n[a] = t[a]);
    return n;
  }
  return {
    message: String(t)
  };
}, is = "External signal was aborted", vt = /* @__PURE__ */ (() => {
  function t(n, a, r) {
    const c = zn(n + "/fulfilled", (p, g, y, x) => ({
      payload: p,
      meta: {
        ...x || {},
        arg: y,
        requestId: g,
        requestStatus: "fulfilled"
      }
    })), d = zn(n + "/pending", (p, g, y) => ({
      payload: void 0,
      meta: {
        ...y || {},
        arg: g,
        requestId: p,
        requestStatus: "pending"
      }
    })), u = zn(n + "/rejected", (p, g, y, x, k) => ({
      payload: x,
      error: (r && r.serializeError || nm)(p || "Rejected"),
      meta: {
        ...k || {},
        arg: y,
        requestId: g,
        rejectedWithValue: !!x,
        requestStatus: "rejected",
        aborted: (p == null ? void 0 : p.name) === "AbortError",
        condition: (p == null ? void 0 : p.name) === "ConditionError"
      }
    }));
    function h(p, {
      signal: g
    } = {}) {
      return (y, x, k) => {
        const z = r != null && r.idGenerator ? r.idGenerator(p) : tm(), E = new AbortController();
        let j, D;
        function F(M) {
          D = M, E.abort();
        }
        g && (g.aborted ? F(is) : g.addEventListener("abort", () => F(is), {
          once: !0
        }));
        const q = async function() {
          var P, N;
          let M;
          try {
            let J = (P = r == null ? void 0 : r.condition) == null ? void 0 : P.call(r, p, {
              getState: x,
              extra: k
            });
            if (om(J) && (J = await J), J === !1 || E.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const $ = new Promise((W, T) => {
              j = () => {
                T({
                  name: "AbortError",
                  message: D || "Aborted"
                });
              }, E.signal.addEventListener("abort", j);
            });
            y(d(z, p, (N = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : N.call(r, {
              requestId: z,
              arg: p
            }, {
              getState: x,
              extra: k
            }))), M = await Promise.race([$, Promise.resolve(a(p, {
              dispatch: y,
              getState: x,
              extra: k,
              requestId: z,
              signal: E.signal,
              abort: F,
              rejectWithValue: (W, T) => new to(W, T),
              fulfillWithValue: (W, T) => new ts(W, T)
            })).then((W) => {
              if (W instanceof to)
                throw W;
              return W instanceof ts ? c(W.payload, z, p, W.meta) : c(W, z, p);
            })]);
          } catch (J) {
            M = J instanceof to ? u(null, z, p, J.payload, J.meta) : u(J, z, p);
          } finally {
            j && E.signal.removeEventListener("abort", j);
          }
          return r && !r.dispatchConditionRejection && u.match(M) && M.meta.condition || y(M), M;
        }();
        return Object.assign(q, {
          abort: F,
          requestId: z,
          arg: p,
          unwrap() {
            return q.then(am);
          }
        });
      };
    }
    return Object.assign(h, {
      pending: d,
      rejected: u,
      fulfilled: c,
      settled: Qu(u, c),
      typePrefix: n
    });
  }
  return t.withTypes = () => t, t;
})();
function am(t) {
  if (t.meta && t.meta.rejectedWithValue)
    throw t.payload;
  if (t.error)
    throw t.error;
  return t.payload;
}
function om(t) {
  return t !== null && typeof t == "object" && typeof t.then == "function";
}
var rm = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function sm(t, n) {
  return `${t}/${n}`;
}
function lm({
  creators: t
} = {}) {
  var a;
  const n = (a = t == null ? void 0 : t.asyncThunk) == null ? void 0 : a[rm];
  return function(c) {
    const {
      name: d,
      reducerPath: u = d
    } = c;
    if (!d)
      throw new Error(process.env.NODE_ENV === "production" ? Xe(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const h = (typeof c.reducers == "function" ? c.reducers(_m()) : c.reducers) || {}, p = Object.keys(h), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, y = {
      addCase(O, P) {
        const N = typeof O == "string" ? O : O.type;
        if (!N)
          throw new Error(process.env.NODE_ENV === "production" ? Xe(12) : "`context.addCase` cannot be called with an empty action type");
        if (N in g.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Xe(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + N);
        return g.sliceCaseReducersByType[N] = P, y;
      },
      addMatcher(O, P) {
        return g.sliceMatchers.push({
          matcher: O,
          reducer: P
        }), y;
      },
      exposeAction(O, P) {
        return g.actionCreators[O] = P, y;
      },
      exposeCaseReducer(O, P) {
        return g.sliceCaseReducersByName[O] = P, y;
      }
    };
    p.forEach((O) => {
      const P = h[O], N = {
        reducerName: O,
        type: sm(d, O),
        createNotation: typeof c.reducers == "function"
      };
      um(P) ? hm(N, P, y, n) : dm(N, P, y);
    });
    function x() {
      if (process.env.NODE_ENV !== "production" && typeof c.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Xe(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [O = {}, P = [], N = void 0] = typeof c.extraReducers == "function" ? Gs(c.extraReducers) : [c.extraReducers], J = {
        ...O,
        ...g.sliceCaseReducersByType
      };
      return Ju(c.initialState, ($) => {
        for (let W in J)
          $.addCase(W, J[W]);
        for (let W of g.sliceMatchers)
          $.addMatcher(W.matcher, W.reducer);
        for (let W of P)
          $.addMatcher(W.matcher, W.reducer);
        N && $.addDefaultCase(N);
      });
    }
    const k = (O) => O, z = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new WeakMap();
    let j;
    function D(O, P) {
      return j || (j = x()), j(O, P);
    }
    function F() {
      return j || (j = x()), j.getInitialState();
    }
    function q(O, P = !1) {
      function N($) {
        let W = $[O];
        if (typeof W > "u") {
          if (P)
            W = ta(E, N, F);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Xe(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return W;
      }
      function J($ = k) {
        const W = ta(z, P, () => /* @__PURE__ */ new WeakMap());
        return ta(W, $, () => {
          const T = {};
          for (const [A, V] of Object.entries(c.selectors ?? {}))
            T[A] = cm(V, $, () => ta(E, $, F), P);
          return T;
        });
      }
      return {
        reducerPath: O,
        getSelectors: J,
        get selectors() {
          return J(N);
        },
        selectSlice: N
      };
    }
    const M = {
      name: d,
      reducer: D,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: F,
      ...q(u),
      injectInto(O, {
        reducerPath: P,
        ...N
      } = {}) {
        const J = P ?? u;
        return O.inject({
          reducerPath: J,
          reducer: D
        }, N), {
          ...M,
          ...q(J, !0)
        };
      }
    };
    return M;
  };
}
function cm(t, n, a, r) {
  function c(d, ...u) {
    let h = n(d);
    if (typeof h > "u") {
      if (r)
        h = a();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Xe(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(h, ...u);
  }
  return c.unwrapped = t, c;
}
var Ut = /* @__PURE__ */ lm();
function _m() {
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
function dm({
  type: t,
  reducerName: n,
  createNotation: a
}, r, c) {
  let d, u;
  if ("reducer" in r) {
    if (a && !mm(r))
      throw new Error(process.env.NODE_ENV === "production" ? Xe(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    d = r.reducer, u = r.prepare;
  } else
    d = r;
  c.addCase(t, d).exposeCaseReducer(n, d).exposeAction(n, u ? zn(t, u) : zn(t));
}
function um(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function mm(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function hm({
  type: t,
  reducerName: n
}, a, r, c) {
  if (!c)
    throw new Error(process.env.NODE_ENV === "production" ? Xe(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: d,
    fulfilled: u,
    pending: h,
    rejected: p,
    settled: g,
    options: y
  } = a, x = c(t, d, y);
  r.exposeAction(n, x), u && r.addCase(x.fulfilled, u), h && r.addCase(x.pending, h), p && r.addCase(x.rejected, p), g && r.addMatcher(x.settled, g), r.exposeCaseReducer(n, {
    fulfilled: u || na,
    pending: h || na,
    rejected: p || na,
    settled: g || na
  });
}
function na() {
}
function Xe(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const Ks = {
  clientTime: null,
  performance: {
    memory: 0,
    fps: 0,
    loadTime: 0
  },
  errors: []
}, pm = {
  componentStates: {},
  isDebugModeEnabled: !1,
  globalAdminEnabled: typeof window < "u"
  // Default to true in browser
}, Ys = Ut({
  name: "admin",
  initialState: pm,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const { componentId: a } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...Ks
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
  initializeComponentState: zS,
  setClientTime: fm,
  setPerformanceMetrics: gm,
  addError: jS,
  setErrors: bm,
  clearErrors: TS,
  setDebugModeEnabled: PS,
  setGlobalAdminEnabled: ES,
  removeComponentState: NS,
  clearAllComponentStates: IS
} = Ys.actions, ym = (t, n) => {
  var a;
  return ((a = t.admin.componentStates[n]) == null ? void 0 : a.clientTime) || null;
}, vm = (t, n) => {
  var a;
  return ((a = t.admin.componentStates[n]) == null ? void 0 : a.performance) || Ks.performance;
}, xm = (t, n) => {
  var a;
  return ((a = t.admin.componentStates[n]) == null ? void 0 : a.errors) || [];
}, Js = Ys.reducer, wm = "_adminComponent_1nez3_10", km = "_sessionDebugger_1nez3_65", Sm = "_debugRow_1nez3_65", Cm = "_performanceMonitor_1nez3_87", zm = "_metricRow_1nez3_87", jm = "_metricLabel_1nez3_97", Tm = "_metricValue_1nez3_106", Pm = "_errorLogger_1nez3_120", Em = "_errorEntry_1nez3_124", Nm = "_errorTime_1nez3_134", Im = "_errorMessage_1nez3_140", Lm = "_debugPanel_1nez3_150", Am = "_panelHeader_1nez3_150", Mm = "_panelSection_1nez3_163", Om = "_sectionTitle_1nez3_173", Rm = "_darkTheme_1nez3_230", Dm = "_lightTheme_1nez3_253", Bm = "_animated_1nez3_292", $m = "_fadeInAdmin_1nez3_1", Fm = "_pulse_1nez3_306", qm = "_pulseAdmin_1nez3_1", Hm = "_compact_1nez3_321", Zm = "_expanded_1nez3_328", Um = "_translucent_1nez3_335", Wm = "_opaque_1nez3_340", Vm = "_adminZ9999_1nez3_348", Gm = "_adminZ9998_1nez3_352", Km = "_adminZ9997_1nez3_356", Ym = "_adminZ9996_1nez3_360", Jm = "_adminZ9995_1nez3_364", an = {
  adminComponent: wm,
  "admin-top-left": "_admin-top-left_1nez3_34",
  "admin-top-right": "_admin-top-right_1nez3_39",
  "admin-bottom-left": "_admin-bottom-left_1nez3_44",
  "admin-bottom-right": "_admin-bottom-right_1nez3_49",
  "admin-center": "_admin-center_1nez3_54",
  sessionDebugger: km,
  debugRow: Sm,
  performanceMonitor: Cm,
  metricRow: zm,
  metricLabel: jm,
  metricValue: Tm,
  errorLogger: Pm,
  errorEntry: Em,
  errorTime: Nm,
  errorMessage: Im,
  debugPanel: Lm,
  panelHeader: Am,
  panelSection: Mm,
  sectionTitle: Om,
  darkTheme: Rm,
  lightTheme: Dm,
  animated: Bm,
  fadeInAdmin: $m,
  pulse: Fm,
  pulseAdmin: qm,
  compact: Hm,
  expanded: Zm,
  translucent: Um,
  opaque: Wm,
  adminZ9999: Vm,
  adminZ9998: Gm,
  adminZ9997: Km,
  adminZ9996: Ym,
  adminZ9995: Jm
}, Xs = ({
  label: t,
  value: n,
  unit: a = "",
  className: r = "",
  labelClassName: c = "",
  valueClassName: d = ""
}) => /* @__PURE__ */ l.jsxs(
  f,
  {
    className: r,
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 4
    },
    children: [
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: c,
          style: { fontWeight: 600 },
          children: t
        }
      ),
      /* @__PURE__ */ l.jsxs("span", { className: d, children: [
        n,
        a ? ` ${a}` : ""
      ] })
    ]
  }
), ns = {
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
function as(t, n = [], a, r) {
  return /* @__PURE__ */ l.jsx(f, { children: n.map((c) => /* @__PURE__ */ l.jsx(
    Xs,
    {
      label: c.label,
      value: t[c.key] ?? "",
      unit: c.unit
    },
    c.key
  )) });
}
const os = {
  "session-debugger": {
    className: "sessionDebugger",
    updateInterval: 1e3,
    dataKey: "time",
    selector: ym,
    actionCreator: fm,
    fields: ns["session-debugger"],
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
    renderer: (t, n, a, r) => as(t, r)
  },
  "performance-monitor": {
    className: "performanceMonitor",
    updateInterval: 2e3,
    dataKey: "performance",
    selector: vm,
    actionCreator: gm,
    fields: ns["performance-monitor"],
    dataProcessor: (t, n) => {
      var a, r, c;
      return {
        memory: ((a = n.data) == null ? void 0 : a.memory) ?? 0,
        fps: ((r = n.data) == null ? void 0 : r.fps) ?? 0,
        loadTime: ((c = n.data) == null ? void 0 : c.loadTime) ?? 0
      };
    },
    renderer: (t, n, a, r) => as(t, r)
  },
  "error-logger": {
    className: "errorLogger",
    dataKey: "errors",
    selector: xm,
    actionCreator: bm,
    dataProcessor: (t, n) => {
      var a;
      return {
        errors: ((a = n.data) == null ? void 0 : a.errors) || []
      };
    },
    renderer: (t, n, a) => {
      var r;
      return /* @__PURE__ */ l.jsx(
        f,
        {
          className: n.errorLogger,
          style: { maxHeight: 200, overflowY: "auto" },
          children: (r = t.errors) != null && r.length ? t.errors.map((c, d) => /* @__PURE__ */ l.jsxs("div", { style: { marginBottom: 6 }, children: [
            /* @__PURE__ */ l.jsx(
              "span",
              {
                style: {
                  color: "#f87171",
                  fontWeight: 600
                },
                children: c.time
              }
            ),
            /* @__PURE__ */ l.jsx("span", { style: { marginLeft: 8 }, children: c.message })
          ] }, d)) : /* @__PURE__ */ l.jsx("span", { style: { color: "#aaa" }, children: "No errors" })
        }
      );
    }
  },
  "debug-panel": {
    className: "debugPanel",
    dataKey: "environment",
    dataProcessor: (t, n) => ({
      ...n.data
    }),
    renderer: (t, n, a) => /* @__PURE__ */ l.jsxs(f, { className: n.debugPanel, children: [
      /* @__PURE__ */ l.jsx("div", { style: { fontWeight: 600, marginBottom: 8 }, children: "Debug Panel" }),
      t && Object.keys(t).length ? Object.entries(t).map(([r, c]) => /* @__PURE__ */ l.jsx(
        Xs,
        {
          label: r,
          value: String(c)
        },
        r
      )) : /* @__PURE__ */ l.jsx("span", { style: { color: "#aaa" }, children: "No debug data" })
    ] })
  },
  custom: {
    className: "custom",
    dataKey: "environment",
    dataProcessor: (t, n) => ({}),
    renderer: (t, n, a) => (a == null ? void 0 : a.children) || /* @__PURE__ */ l.jsx(f, { children: "Custom admin component" })
  }
}, Xm = (t) => t ? an[`adminZ${t}`] || "" : an.adminZ9999, LS = ({
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
  const g = os[n] || os.custom, y = g.dataProcessor ? g.dataProcessor(null, { ...p, data: h }) : {}, x = [
    an.adminComponent,
    an[g.className],
    an[`admin-${a}`],
    Xm(d),
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ l.jsx(f, { className: x, style: { zIndex: d }, children: g.renderer ? g.renderer(
    y,
    an,
    { ...p, data: h, children: t },
    g.fields
  ) : null });
}, AS = {
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
}, MS = (t) => {
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
}, OS = (t) => {
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
}, RS = (t) => ({
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
}), DS = (t) => ({
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
}), BS = (t) => {
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
}, Qm = (t) => Pn[t] || Pn["banner-ad"], $S = (t, n) => {
  const a = Qm(t);
  return {
    ...a,
    ...n,
    content: {
      ...a.content,
      ...n.content
    }
  };
}, FS = (t) => Object.keys(Pn).includes(
  t
), qS = (t, n, a, r) => {
  var c;
  return {
    eventType: t,
    adId: n,
    adKind: a,
    timestamp: Date.now(),
    sessionId: typeof window < "u" && ((c = window.sessionStorage) == null ? void 0 : c.getItem("sessionId")) || void 0,
    metadata: r
  };
}, HS = {
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
}, ZS = {
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
}, eh = "_advertisement_1w70x_118", th = "_advertisement__slot_1w70x_139", ih = "_advertisement__loading_1w70x_150", nh = "_pulse_1w70x_1", ah = "_advertisement__modal_1w70x_160", oh = "_modalAppear_1w70x_1", rh = "_advertisement__backdrop_1w70x_174", sh = "_advertisement__modal_content_1w70x_181", lh = "_fadeIn_1w70x_1", ch = "_advertisement__close_1w70x_205", _h = "_advertisement__close_button_1w70x_212", dh = "_advertisement__banner_1w70x_227", uh = "_advertisement__native_1w70x_228", mh = "_advertisement__sticky_1w70x_229", hh = "_advertisement__floating_1w70x_230", ph = "_advertisement__toast_1w70x_231", fh = "_advertisement__billboard_1w70x_232", gh = "_advertisement__billboard_overlay_1w70x_245", bh = "_advertisement__default_1w70x_253", yh = "_advertisement__image_1w70x_263", vh = "_advertisement__content_1w70x_272", xh = "_advertisement__title_1w70x_280", wh = "_advertisement__description_1w70x_291", kh = "_advertisement__cta_1w70x_301", Sh = "_advertisement__sponsored_1w70x_320", Ch = "_advertisement__reward_info_1w70x_327", zh = "_advertisement__reward_actions_1w70x_333", jh = "_advertisement__exit_intent_1w70x_339", Th = "_advertisement__carousel_controls_1w70x_386", Ph = "_adFadeIn_1w70x_1", Eh = "_adSlideIn_1w70x_1", Nh = "_adModalAppear_1w70x_1", se = {
  advertisement: eh,
  advertisement__slot: th,
  advertisement__loading: ih,
  pulse: nh,
  advertisement__modal: ah,
  modalAppear: oh,
  advertisement__backdrop: rh,
  advertisement__modal_content: sh,
  fadeIn: lh,
  advertisement__close: ch,
  advertisement__close_button: _h,
  advertisement__banner: dh,
  advertisement__native: uh,
  advertisement__sticky: mh,
  advertisement__floating: hh,
  advertisement__toast: ph,
  advertisement__billboard: fh,
  advertisement__billboard_overlay: gh,
  advertisement__default: bh,
  advertisement__image: yh,
  advertisement__content: vh,
  advertisement__title: xh,
  advertisement__description: wh,
  advertisement__cta: kh,
  advertisement__sponsored: Sh,
  advertisement__reward_info: Ch,
  advertisement__reward_actions: zh,
  advertisement__exit_intent: jh,
  "advertisement--container": "_advertisement--container_1w70x_350",
  "advertisement--layout-stack": "_advertisement--layout-stack_1w70x_358",
  "advertisement--layout-carousel": "_advertisement--layout-carousel_1w70x_364",
  "advertisement--layout-grid": "_advertisement--layout-grid_1w70x_373",
  "advertisement--layout-single": "_advertisement--layout-single_1w70x_379",
  advertisement__carousel_controls: Th,
  "loading-shimmer": "_loading-shimmer_1w70x_1",
  adFadeIn: Ph,
  adSlideIn: Eh,
  adModalAppear: Nh
}, bi = Le(
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
    responsive: x = !0,
    breakpoints: k = {},
    allowedAdTypes: z = [],
    fallbackContent: E,
    showFallbackOnError: j = !0,
    onAdLoad: D,
    onAdClick: F,
    onAdImpression: q,
    onAdClose: M,
    onAdError: O,
    onRewardEarned: P,
    analyticsHooks: N,
    sessionId: J,
    userId: $,
    providers: W = [],
    primaryProvider: T = "custom",
    fallbackProviders: A = [],
    providerConfig: V = {},
    isVisible: ee = !0,
    isLoading: le = !1,
    isError: ae = !1,
    autoHide: te = !1,
    hideDelay: ce = 5e3,
    animationEnabled: w = !0,
    targetingData: G = {},
    trackingEnabled: v = !0,
    maxWidth: R,
    maxHeight: S,
    position: H = "relative",
    zIndex: ie = 1e3,
    overrideConfig: X = {},
    customClassName: K = "",
    className: fe = "",
    style: de = {},
    showBackdrop: Pe = !0,
    backdropOpacity: be = 0.8,
    ...Q
  }, ne) => {
    var xi, wi;
    if (t === "many")
      return /* @__PURE__ */ l.jsx(
        Ih,
        {
          ref: ne,
          className: fe,
          style: de,
          adPool: r,
          maxAds: c,
          layout: d,
          autoRotate: u,
          rotationInterval: h,
          spacing: p,
          alignItems: g,
          justifyContent: y,
          responsive: x,
          breakpoints: k,
          allowedAdTypes: z,
          fallbackContent: E,
          showFallbackOnError: j,
          onAdLoad: D,
          onAdClick: F,
          onAdImpression: q,
          onAdError: O,
          analyticsHooks: N,
          sessionId: J,
          userId: $,
          trackingEnabled: v,
          providers: W,
          primaryProvider: T,
          fallbackProviders: A,
          providerConfig: V
        }
      );
    if (!n || !a)
      return console.error(
        'Advertisement: kind and content are required for single ads (count="one")'
      ), E ? /* @__PURE__ */ l.jsx(l.Fragment, { children: E }) : null;
    const ue = it(null), oe = it(!1), [ke, he] = zt("loading"), [Z, U] = zt(ee), [Oe, nt] = zt({
      impressions: 0,
      clicks: 0,
      ctr: 0
    }), Ge = Pn[n.replace(
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
    )] || Pn["banner-ad"], Ue = {
      ...Ge,
      clickable: Ge.clickable ?? !0,
      ...X
    }, De = Ze(
      (ye, Ee) => ({
        eventType: ye,
        adId: a.id || "unknown",
        adKind: Ge.state,
        timestamp: Date.now(),
        sessionId: J,
        userId: $,
        metadata: Ee
      }),
      [a.id, Ge, J, $]
    ), ve = Ze(
      (ye) => {
        var Ee, et, Tt, oi, B, pe, Se;
        if (v)
          switch (ye.eventType) {
            case "impression":
              (Ee = N == null ? void 0 : N.onImpression) == null || Ee.call(N, ye);
              break;
            case "click":
              (et = N == null ? void 0 : N.onClick) == null || et.call(N, ye);
              break;
            case "dismiss":
              (Tt = N == null ? void 0 : N.onDismiss) == null || Tt.call(N, ye);
              break;
            case "error":
              (oi = N == null ? void 0 : N.onError) == null || oi.call(N, ye);
              break;
            case "conversion":
              (B = N == null ? void 0 : N.onConversion) == null || B.call(N, ye);
              break;
            case "view":
              (pe = N == null ? void 0 : N.onView) == null || pe.call(N, ye);
              break;
            case "interaction":
              (Se = N == null ? void 0 : N.onInteraction) == null || Se.call(N, ye);
              break;
          }
      },
      [v, N]
    ), $e = Ze(async () => {
      if (!ue.current || W.length === 0)
        return;
      const ye = W.find(
        (Ee) => Ee.config.type === T
      );
      if (ye)
        try {
          if (await ye.loadAd(
            ue.current,
            Ue
          )) {
            he("ready");
            return;
          }
        } catch (Ee) {
          console.error(
            `Primary provider (${T}) failed:`,
            Ee
          ), ve(
            De("error", {
              provider: T,
              error: String(Ee)
            })
          );
        }
      for (const Ee of A) {
        const et = W.find(
          (Tt) => Tt.config.type === Ee
        );
        if (et)
          try {
            if (await et.loadAd(
              ue.current,
              Ue
            )) {
              he("ready");
              return;
            }
          } catch (Tt) {
            console.error(
              `Fallback provider (${Ee}) failed:`,
              Tt
            ), ve(
              De("error", {
                provider: Ee,
                error: String(Tt)
              })
            );
          }
      }
      he("error");
    }, [
      W,
      T,
      A,
      Ue,
      ve,
      De
    ]);
    Te(() => {
      W.length > 0 ? $e() : he("ready");
    }, [$e, W]), Te(() => {
      U(ee);
    }, [ee]), Te(() => {
      if (te && ce > 0 && Z) {
        const ye = setTimeout(() => {
          U(!1), ve(
            De("dismiss", {
              reason: "auto-hide"
            })
          ), M == null || M(a.id || "unknown");
        }, ce);
        return () => clearTimeout(ye);
      }
    }, [
      te,
      ce,
      Z,
      a.id,
      M,
      ve,
      De
    ]), Te(() => {
      Z && v && ke === "ready" && !oe.current && (oe.current = !0, nt((ye) => ({
        ...ye,
        impressions: (ye.impressions || 0) + 1
      })), ve(
        De("impression", {
          adKind: n,
          position: H,
          viewport: typeof window < "u" ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : void 0
        })
      ), q == null || q(a.id || "unknown"));
    }, [
      Z,
      v,
      ke,
      a.id,
      q,
      ve,
      De,
      n,
      H
    ]);
    const Qe = Ze(() => {
      a.actionUrl && (nt((ye) => {
        const Ee = (ye.clicks || 0) + 1, et = ye.impressions || 0;
        return {
          ...ye,
          clicks: Ee,
          ctr: et > 0 ? Ee / et * 100 : 0
        };
      }), ve(
        De("click", {
          actionUrl: a.actionUrl,
          ctaText: a.ctaText,
          timestamp: Date.now()
        })
      ), F == null || F(
        a.id || "unknown",
        a.actionUrl
      ), Ue.clickable && window.open(
        a.actionUrl,
        "_blank",
        "noopener,noreferrer"
      ));
    }, [
      a.id,
      a.actionUrl,
      a.ctaText,
      Ue.clickable,
      F,
      ve,
      De
    ]), st = Ze(() => {
      U(!1), ve(
        De("dismiss", {
          reason: "user-close"
        })
      ), M == null || M(a.id || "unknown");
    }, [
      a.id,
      M,
      ve,
      De
    ]), Ae = Ze(() => {
      var ye, Ee;
      n === "rewarded-modal" && (ve(
        De("conversion", {
          rewardType: (ye = a.rewardData) == null ? void 0 : ye.type,
          rewardAmount: (Ee = a.rewardData) == null ? void 0 : Ee.amount
        })
      ), P == null || P(
        a.id || "unknown",
        a.rewardData
      ));
    }, [
      n,
      a.id,
      a.rewardData,
      P,
      ve,
      De
    ]), xt = [
      se.advertisement,
      se[`advertisement--${n}`],
      se[`advertisement--${Ue.variant}`],
      se[`advertisement--${Ue.size}`],
      w && se["advertisement--animated"],
      le && se["advertisement--loading"],
      ae && se["advertisement--error"],
      !Z && se["advertisement--hidden"],
      K,
      fe
    ].filter(Boolean).join(" "), jt = {
      ...de,
      maxWidth: R || ((xi = Ue.dimensions) == null ? void 0 : xi.maxWidth),
      maxHeight: S || ((wi = Ue.dimensions) == null ? void 0 : wi.maxHeight),
      position: H,
      zIndex: ie,
      ...Ue.styles
    };
    if (!Z && ![
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
          className: xt,
          style: jt,
          ...Q,
          children: /* @__PURE__ */ l.jsx(
            f,
            {
              className: se.advertisement__loading,
              children: "Loading advertisement..."
            }
          )
        }
      );
    if (ae || ke === "error")
      return E ? /* @__PURE__ */ l.jsx(
        f,
        {
          className: xt,
          style: jt,
          children: E
        }
      ) : null;
    const wt = ({
      imageUrl: ye,
      altText: Ee,
      className: et
    }) => ye ? /* @__PURE__ */ l.jsx(
      "img",
      {
        src: ye,
        alt: Ee || "Advertisement",
        className: et
      }
    ) : null, ni = ({
      title: ye,
      className: Ee,
      as: et = "h3"
    }) => ye ? tt.createElement(et, { className: Ee }, ye) : null, Lt = ({
      description: ye,
      className: Ee
    }) => ye ? /* @__PURE__ */ l.jsx("p", { className: Ee, children: ye }) : null, ai = ({
      ctaText: ye,
      onClick: Ee,
      className: et
    }) => ye ? /* @__PURE__ */ l.jsx(
      Ce,
      {
        kind: "primary",
        className: et,
        onClick: Ee,
        children: ye
      }
    ) : null, Bt = ({
      onClick: ye,
      className: Ee,
      ariaLabel: et = "Close advertisement"
    }) => /* @__PURE__ */ l.jsx(
      Ce,
      {
        kind: "ghost",
        className: Ee,
        onClick: ye,
        "aria-label": et,
        children: "×"
      }
    ), $t = ({
      title: ye,
      description: Ee,
      ctaText: et,
      onCTAClick: Tt,
      titleClass: oi,
      descClass: B,
      ctaClass: pe,
      titleAs: Se = "h3"
    }) => /* @__PURE__ */ l.jsxs(f, { className: se.advertisement__content, children: [
      /* @__PURE__ */ l.jsx(
        ni,
        {
          title: ye,
          className: oi,
          as: Se
        }
      ),
      /* @__PURE__ */ l.jsx(
        Lt,
        {
          description: Ee,
          className: B
        }
      ),
      /* @__PURE__ */ l.jsx(
        ai,
        {
          ctaText: et,
          onClick: Tt,
          className: pe
        }
      )
    ] }), Wt = () => {
      var ye;
      switch (n) {
        case "banner":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: se.advertisement__banner,
              children: [
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: Qe,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta
                  }
                )
              ]
            }
          );
        case "interstitial":
          return Z ? /* @__PURE__ */ l.jsxs(
            f,
            {
              className: se.advertisement__modal,
              children: [
                Pe && /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: se.advertisement__backdrop,
                    style: { opacity: be }
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  f,
                  {
                    className: se.advertisement__modal_content,
                    children: [
                      /* @__PURE__ */ l.jsx(
                        Bt,
                        {
                          onClick: st,
                          className: se.advertisement__close
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        wt,
                        {
                          imageUrl: a.imageUrl,
                          altText: a.altText,
                          className: se.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ l.jsx(
                        $t,
                        {
                          title: a.title,
                          description: a.description,
                          ctaText: a.ctaText,
                          onCTAClick: Qe,
                          titleClass: se.advertisement__title,
                          descClass: se.advertisement__description,
                          ctaClass: se.advertisement__cta,
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
          return Z ? /* @__PURE__ */ l.jsxs(
            f,
            {
              className: se.advertisement__modal,
              children: [
                Pe && /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: se.advertisement__backdrop,
                    style: { opacity: be }
                  }
                ),
                /* @__PURE__ */ l.jsxs(
                  f,
                  {
                    className: se.advertisement__modal_content,
                    children: [
                      /* @__PURE__ */ l.jsxs(
                        f,
                        {
                          className: se.advertisement__reward_info,
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
                          className: se.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ l.jsxs(
                        f,
                        {
                          className: se.advertisement__content,
                          children: [
                            /* @__PURE__ */ l.jsx(
                              ni,
                              {
                                title: a.title,
                                className: se.advertisement__title,
                                as: "h3"
                              }
                            ),
                            /* @__PURE__ */ l.jsx(
                              Lt,
                              {
                                description: a.description,
                                className: se.advertisement__description
                              }
                            ),
                            /* @__PURE__ */ l.jsxs(
                              f,
                              {
                                className: se.advertisement__reward_actions,
                                children: [
                                  /* @__PURE__ */ l.jsx(
                                    ai,
                                    {
                                      ctaText: a.ctaText || "Claim Reward",
                                      onClick: () => {
                                        Qe(), Ae();
                                      },
                                      className: se.advertisement__cta
                                    }
                                  ),
                                  /* @__PURE__ */ l.jsx(
                                    Bt,
                                    {
                                      onClick: st,
                                      className: se.advertisement__close_button,
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
              className: se.advertisement__native,
              children: [
                /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: se.advertisement__sponsored,
                    children: "Sponsored"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: Qe,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta,
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
              className: se.advertisement__sticky,
              children: [
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: Qe,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta,
                    titleAs: "span"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Bt,
                  {
                    onClick: st,
                    className: se.advertisement__close
                  }
                )
              ]
            }
          );
        case "floating-widget":
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: se.advertisement__floating,
              children: [
                /* @__PURE__ */ l.jsx(
                  Bt,
                  {
                    onClick: st,
                    className: se.advertisement__close
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    ctaText: a.ctaText,
                    onCTAClick: Qe,
                    titleClass: se.advertisement__title,
                    ctaClass: se.advertisement__cta,
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
              className: se.advertisement__toast,
              children: [
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: Qe,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta,
                    titleAs: "strong"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  Bt,
                  {
                    onClick: st,
                    className: se.advertisement__close
                  }
                )
              ]
            }
          );
        default:
          return /* @__PURE__ */ l.jsxs(
            f,
            {
              className: se.advertisement__default,
              children: [
                /* @__PURE__ */ l.jsx(
                  wt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  $t,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: Qe,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta
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
        className: xt,
        style: jt,
        "data-ad-id": a.id,
        "data-ad-kind": n,
        ...Q,
        children: /* @__PURE__ */ l.jsx(
          f,
          {
            ref: ue,
            className: se.advertisement__slot,
            children: Wt()
          }
        )
      }
    );
  }
);
bi.displayName = "Advertisements";
const Ih = Le(
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
    onAdClick: x,
    onAdImpression: k,
    layout: z = "stack",
    spacing: E = 16,
    alignItems: j = "flex-start",
    justifyContent: D = "flex-start",
    responsive: F = !0,
    breakpoints: q = {
      mobile: { maxAds: 1, layout: "single" },
      tablet: { maxAds: 2, layout: "stack" },
      desktop: { maxAds: 3, layout: "stack" }
    },
    analyticsHooks: M,
    sessionId: O,
    userId: P,
    trackingEnabled: N = !0,
    providers: J = [],
    primaryProvider: $ = "custom",
    fallbackProviders: W = [],
    providerConfig: T = {},
    enableProviderRotation: A = !1,
    providerRotationInterval: V = 3e5,
    providerFailureThreshold: ee = 3,
    globalTargeting: le = {},
    providerSpecificTargeting: ae = {}
  }) => {
    const [te, ce] = zt([]), [w, G] = zt({}), [v, R] = zt({
      totalImpressions: 0,
      totalClicks: 0,
      loadedAds: 0,
      errorRate: 0
    }), [S, H] = zt(0), ie = it(), [X, K] = zt("desktop"), fe = _i(
      () => `ad-container-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      []
    ), de = Ze(() => {
      if (!F || !q)
        return { maxAds: r, layout: z };
      const Z = q[X];
      return Z ? {
        maxAds: Z.maxAds || r,
        layout: Z.layout || z
      } : { maxAds: r, layout: z };
    }, [
      F,
      q,
      X,
      r,
      z
    ]);
    Te(() => {
      if (!F) return;
      const Z = () => {
        const U = window.innerWidth;
        U < 768 ? K("mobile") : U < 1024 ? K("tablet") : K("desktop");
      };
      return Z(), window.addEventListener("resize", Z), () => {
        window.removeEventListener(
          "resize",
          Z
        );
      };
    }, [F]);
    const Pe = Ze(() => {
      if (u.length === 0) return [];
      const { maxAds: Z } = de(), U = u.filter(
        (Ge) => a.includes(Ge.kind)
      );
      if (U.length === 0) return [];
      const Oe = [];
      return U.forEach((Ge) => {
        const Ue = Ge.weight || 1;
        for (let De = 0; De < Ue; De++)
          Oe.push(Ge);
      }), [...Oe].sort(
        () => Math.random() - 0.5
      ).slice(0, Z);
    }, [u, a, de]);
    Te(() => {
      const Z = Pe();
      ce(Z);
    }, [Pe]), Te(() => {
      if (!(!d || c <= 0 || te.length <= 1))
        return ie.current = setInterval(() => {
          H(
            (Z) => (Z + 1) % te.length
          );
        }, c), () => {
          ie.current && clearInterval(ie.current);
        };
    }, [d, c, te.length]), Ze(
      (Z, U) => {
        R((Oe) => ({
          ...Oe,
          loadedAds: Oe.loadedAds + 1
        })), g == null || g(Z, U);
      },
      [g]
    );
    const be = Ze(
      (Z, U) => {
        G((Oe) => ({ ...Oe, [Z]: U })), R((Oe) => {
          const nt = te.length > 0 ? (Object.keys(w).length + 1) / te.length : 0;
          return {
            ...Oe,
            errorRate: nt
          };
        }), y == null || y(Z, U);
      },
      [w, te.length, y]
    ), Q = Ze(
      (Z, U) => {
        R((Oe) => ({
          ...Oe,
          totalClicks: Oe.totalClicks + 1
        })), x == null || x(Z, U);
      },
      [x]
    ), ne = Ze(
      (Z) => {
        R((U) => ({
          ...U,
          totalImpressions: U.totalImpressions + 1
        })), k == null || k(Z);
      },
      [k]
    ), ue = [
      se.adContainer,
      se[`adContainer--${z}`],
      F && se["adContainer--responsive"],
      t
    ].filter(Boolean).join(" "), oe = {
      ...n,
      gap: E,
      alignItems: j,
      justifyContent: D
    };
    if (te.length === 0 || Object.keys(w).length === te.length)
      return p && h ? /* @__PURE__ */ l.jsx(
        f,
        {
          className: ue,
          style: oe,
          children: h
        }
      ) : null;
    const { layout: ke } = de(), he = () => {
      switch (ke) {
        case "single":
          const Z = te[S] || te[0];
          return Z ? /* @__PURE__ */ l.jsx(
            bi,
            {
              kind: Z.kind,
              content: Z.content,
              onAdClick: Q,
              onAdImpression: ne,
              onAdError: be,
              analyticsHooks: M,
              sessionId: O,
              userId: P,
              trackingEnabled: N,
              providers: J,
              primaryProvider: $,
              fallbackProviders: W,
              ...Z.props
            },
            `${Z.content.id}-${S}`
          ) : null;
        case "carousel":
          return te.map((U) => /* @__PURE__ */ l.jsx(
            bi,
            {
              kind: U.kind,
              content: U.content,
              onAdClick: Q,
              onAdImpression: ne,
              onAdError: be,
              analyticsHooks: M,
              sessionId: O,
              userId: P,
              trackingEnabled: N,
              providers: J,
              primaryProvider: $,
              fallbackProviders: W,
              ...U.props
            },
            U.content.id
          ));
        case "grid":
          return /* @__PURE__ */ l.jsx(
            f,
            {
              kind: "grid-container",
              className: se.adContainer__grid,
              children: te.map((U) => /* @__PURE__ */ l.jsx(
                bi,
                {
                  kind: U.kind,
                  content: U.content,
                  onAdClick: Q,
                  onAdImpression: ne,
                  onAdError: be,
                  analyticsHooks: M,
                  sessionId: O,
                  userId: P,
                  trackingEnabled: N,
                  providers: J,
                  primaryProvider: $,
                  fallbackProviders: W,
                  ...U.props
                },
                U.content.id
              ))
            }
          );
        case "stack":
        default:
          return te.map((U) => /* @__PURE__ */ l.jsx(
            bi,
            {
              kind: U.kind,
              content: U.content,
              onAdClick: Q,
              onAdImpression: ne,
              onAdError: be,
              analyticsHooks: M,
              sessionId: O,
              userId: P,
              trackingEnabled: N,
              providers: J,
              primaryProvider: $,
              fallbackProviders: W,
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
        style: oe,
        "data-container-id": fe,
        "data-layout": ke,
        children: [
          ke === "carousel" && /* @__PURE__ */ l.jsxs(f, { className: se.adContainer__carousel, children: [
            he(),
            te.length > 1 && /* @__PURE__ */ l.jsx(
              f,
              {
                className: se.adContainer__carousel_indicators,
                children: te.map((Z, U) => /* @__PURE__ */ l.jsx(
                  Ce,
                  {
                    kind: "ghost",
                    className: [
                      se.adContainer__carousel_indicator,
                      U === S && se["adContainer__carousel_indicator--active"]
                    ].filter(Boolean).join(" "),
                    onClick: () => H(U),
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
), Lh = {
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
}, Ah = {
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
class qe {
  static createWithConfig(n, a, r = {}) {
    const c = Lh[n], d = {
      ...c == null ? void 0 : c.defaultProps,
      ...r,
      kind: n,
      content: a
    };
    return /* @__PURE__ */ l.jsx(bi, { ...d });
  }
  static create(n, a, r = {}) {
    return qe.createWithConfig(
      n,
      a,
      r
    );
  }
  static createBatch(n) {
    return n.map(
      ({ kind: a, content: r, props: c }) => qe.createWithConfig(
        a,
        r,
        c
      )
    );
  }
  static createConditional(n, a, r, c) {
    return n ? qe.createWithConfig(
      a,
      r,
      c
    ) : null;
  }
  static createSmart(n, a, r) {
    return n.isGame ? qe.createWithConfig(
      "in-game-billboard",
      a,
      r
    ) : n.isMobile ? qe.createWithConfig(
      "interstitial",
      a,
      r
    ) : n.userEngagement === "high" ? qe.createWithConfig(
      "rewarded-modal",
      a,
      r
    ) : qe.createWithConfig(
      "banner",
      a,
      r
    );
  }
  static createAdSet(n, a, r = {}) {
    const c = Ah[n], d = {};
    return r.onlyPrimary && c.primary ? (d.primary = qe.createWithConfig(
      c.primary,
      a.primary || {},
      r.sharedProps
    ), d) : ([c.primary, ...c.secondary || []].forEach(
      (u, h) => {
        var g;
        const p = h === 0 ? "primary" : `secondary${h}`;
        d[p] = qe.createWithConfig(
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
const Mh = {
  batchCreate: (t) => t.map(
    ({ kind: n, content: a, props: r }) => qe.createWithConfig(
      n,
      a,
      r
    )
  ),
  conditionalCreate: (t) => t.map(
    ({ condition: n, kind: a, content: r, props: c }) => n ? qe.createWithConfig(
      a,
      r,
      c
    ) : null
  ),
  responsiveCreate: (t, n) => ({
    mobile: n.mobile ? qe.createWithConfig(
      n.mobile.kind,
      t,
      n.mobile.props
    ) : null,
    tablet: n.tablet ? qe.createWithConfig(
      n.tablet.kind,
      t,
      n.tablet.props
    ) : null,
    desktop: n.desktop ? qe.createWithConfig(
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
    return qe.createWithConfig(
      d.kind,
      t,
      d.props
    );
  }
}, Oh = {
  websiteHeader: (t) => qe.createWithConfig(
    "banner",
    t,
    { position: "relative" }
  ),
  websiteFooter: (t) => qe.createWithConfig(
    "banner",
    t,
    { position: "relative" }
  ),
  websiteInContent: (t) => qe.createWithConfig(
    "native-card",
    t,
    { position: "relative" }
  ),
  websiteSidebar: (t) => qe.createWithConfig(
    "native-card",
    t,
    { position: "relative" }
  ),
  mobileFullscreen: (t) => qe.createWithConfig(
    "interstitial",
    t,
    { position: "fixed" }
  ),
  mobileReward: (t) => qe.createWithConfig(
    "rewarded-modal",
    t,
    { position: "fixed" }
  ),
  gameBillboard: (t) => qe.createWithConfig(
    "in-game-billboard",
    t,
    { position: "relative" }
  ),
  gameReward: (t) => qe.createWithConfig(
    "rewarded-modal",
    t,
    { position: "fixed", showBackdrop: !0 }
  ),
  productPromo: (t) => qe.createWithConfig(
    "banner",
    t,
    { position: "relative" }
  ),
  cartAbandonment: (t) => qe.createWithConfig(
    "exit-intent-modal",
    t,
    { position: "fixed", showBackdrop: !0 }
  ),
  saleNotification: (t) => qe.createWithConfig(
    "toast-notification",
    t,
    { position: "fixed", autoHide: !0, hideDelay: 8e3 }
  ),
  sponsoredContent: (t) => qe.createWithConfig(
    "native-card",
    t,
    { position: "relative" }
  ),
  newsletterPromo: (t) => qe.createWithConfig(
    "sticky-bar",
    t,
    { position: "fixed" }
  )
};
bi.Factory = qe;
bi.Utils = Mh;
bi.Presets = Oh;
const Rh = {
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
}, Dh = {
  kind: "dashboard",
  variant: "dashboard",
  type: "user-behavior",
  layout: "grid",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Bh = {
  kind: "dashboard",
  variant: "dashboard",
  type: "conversion",
  layout: "grid",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, $h = {
  kind: "chart",
  variant: "chart",
  type: "performance",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !1
}, Fh = {
  kind: "chart",
  variant: "chart",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, qh = {
  kind: "chart",
  variant: "chart",
  type: "traffic",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Hh = {
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
}, Zh = {
  kind: "metric",
  variant: "metric",
  type: "revenue",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Uh = {
  kind: "heatmap",
  variant: "heatmap",
  type: "user-behavior",
  layout: "fullscreen",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Wh = {
  kind: "heatmap",
  variant: "heatmap",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Vh = {
  kind: "funnel",
  variant: "funnel",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Gh = {
  kind: "funnel",
  variant: "funnel",
  type: "user-behavior",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Kh = {
  kind: "cohort",
  variant: "cohort",
  type: "engagement",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Yh = {
  kind: "cohort",
  variant: "cohort",
  type: "revenue",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Jh = {
  kind: "report",
  variant: "report",
  type: "performance",
  layout: "list",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !1,
  drilldown: !1
}, Xh = {
  kind: "report",
  variant: "report",
  type: "custom",
  layout: "list",
  timeRange: "custom",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Qh = {
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
}, ep = {
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
}, rs = {
  "performance-dashboard": Rh,
  "user-behavior-dashboard": Dh,
  "conversion-dashboard": Bh,
  "line-chart": $h,
  "bar-chart": Fh,
  "pie-chart": qh,
  "kpi-metric": Hh,
  "revenue-metric": Zh,
  "user-heatmap": Uh,
  "conversion-heatmap": Wh,
  "conversion-funnel": Vh,
  "user-journey-funnel": Gh,
  "user-cohort": Kh,
  "revenue-cohort": Yh,
  "performance-report": Jh,
  "custom-report": Xh,
  "realtime-metrics": Qh,
  "realtime-traffic": ep
}, tp = "_analytics__container_8rpyb_1", ip = "_analytics__header_8rpyb_15", np = "_analytics__content_8rpyb_39", ap = "_analytics__footer_8rpyb_44", op = "_analytics__controls_8rpyb_211", rp = "_analytics__loading_8rpyb_230", sp = "_spin_8rpyb_1", lp = "_analytics__error_8rpyb_249", cp = "_analytics__actions_8rpyb_277", _p = "_analytics__metric_container_8rpyb_311", dp = "_analytics__metric_value_8rpyb_324", up = "_analytics__header_actions_8rpyb_346", _e = {
  analytics__container: tp,
  analytics__header: ip,
  "analytics__header-title": "_analytics__header-title_8rpyb_23",
  "analytics__header-subtitle": "_analytics__header-subtitle_8rpyb_29",
  "analytics__header-actions": "_analytics__header-actions_8rpyb_34",
  analytics__content: np,
  analytics__footer: ap,
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
  analytics__controls: op,
  "analytics__controls-group": "_analytics__controls-group_8rpyb_220",
  "analytics__controls-label": "_analytics__controls-label_8rpyb_225",
  analytics__loading: rp,
  "analytics__loading-spinner": "_analytics__loading-spinner_8rpyb_237",
  spin: sp,
  "analytics__loading-text": "_analytics__loading-text_8rpyb_245",
  analytics__error: lp,
  "analytics__error-icon": "_analytics__error-icon_8rpyb_258",
  "analytics__error-message": "_analytics__error-message_8rpyb_263",
  "analytics__error-details": "_analytics__error-details_8rpyb_268",
  "analytics__error-actions": "_analytics__error-actions_8rpyb_273",
  analytics__actions: cp,
  "analytics__actions-button": "_analytics__actions-button_8rpyb_282",
  "analytics__actions-button--primary": "_analytics__actions-button--primary_8rpyb_299",
  "analytics--dashboard": "_analytics--dashboard_8rpyb_308",
  "analytics--metrics": "_analytics--metrics_8rpyb_311",
  analytics__metric_container: _p,
  "analytics--performance": "_analytics--performance_8rpyb_315",
  "analytics--realtime": "_analytics--realtime_8rpyb_318",
  "analytics--reports": "_analytics--reports_8rpyb_321",
  "analytics--sm": "_analytics--sm_8rpyb_324",
  analytics__metric_value: dp,
  "analytics--md": "_analytics--md_8rpyb_330",
  "analytics--lg": "_analytics--lg_8rpyb_333",
  "analytics--loading": "_analytics--loading_8rpyb_339",
  "analytics--error": "_analytics--error_8rpyb_343",
  "analytics--refreshable": "_analytics--refreshable_8rpyb_346",
  analytics__header_actions: up,
  "analytics--exportable": "_analytics--exportable_8rpyb_349"
}, mp = [], hp = [], pp = [], fp = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6"
], gp = [], bp = Le(
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
    data: y = mp,
    metrics: x = hp,
    query: k,
    filters: z = pp,
    // Configuration
    config: E = {},
    timeRange: j = "day",
    layout: D = "single",
    autoRefresh: F = !1,
    refreshInterval: q = 3e4,
    // States
    loading: M = !1,
    error: O = null,
    empty: P = !1,
    emptyMessage: N = "No data available",
    // Interactivity
    interactive: J = !0,
    drilldown: $ = !1,
    exportable: W = !1,
    filterable: T = !1,
    searchable: A = !1,
    refreshable: V = !1,
    // Event handlers
    onDataPoint: ee,
    onMetricClick: le,
    onFilter: ae,
    onExport: te,
    onRefresh: ce,
    onDrilldown: w,
    onTimeRangeChange: G,
    // Customization
    colors: v = fp,
    theme: R = "auto",
    height: S = 300,
    showHeader: H = !0,
    showFooter: ie = !1,
    showLegend: X = !0,
    showControls: K = !1,
    // Analytics-specific
    chartType: fe = "line",
    aggregation: de = "sum",
    granularity: Pe = "day",
    // Real-time
    realtime: be = !1,
    realtimeEndpoint: Q,
    // Advanced
    customRenderer: ne,
    plugins: ue = gp,
    ...oe
  }, ke) => {
    const he = _i(() => ({ ...rs[`${c}-default`] || rs[c] || {}, ...E }), [c, E]), [Z, U] = zt(y), [Oe, nt] = zt(z), [Ge, Ue] = zt(!1), [De, ve] = zt(null), $e = it(null), Qe = it(ce);
    Te(() => {
      Qe.current = ce;
    }, [ce]);
    const st = Ze(() => {
      var B;
      Ge || (Ue(!0), (B = Qe.current) == null || B.call(Qe), setTimeout(() => {
        Ue(!1), ve(/* @__PURE__ */ new Date());
      }, 1e3));
    }, [Ge]);
    Ze(
      (B) => {
        nt(B), ae == null || ae(B);
      },
      [ae]
    );
    const Ae = Ze(
      (B) => {
        te == null || te(B);
      },
      [te]
    ), xt = Ze(
      (B) => {
        G == null || G(B);
      },
      [G]
    );
    Te(() => {
      if (F && q > 0)
        return $e.current = setInterval(() => {
          var B;
          Ue(!0), (B = Qe.current) == null || B.call(Qe), setTimeout(() => {
            Ue(!1), ve(/* @__PURE__ */ new Date());
          }, 1e3);
        }, q), () => {
          $e.current && clearInterval($e.current);
        };
    }, [F, q]), Te(() => {
      U(y), ve(/* @__PURE__ */ new Date());
    }, [y]);
    const jt = (B, pe) => {
      switch (pe) {
        case "currency":
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(B);
        case "percentage":
          return `${B}%`;
        case "duration":
          return `${B}ms`;
        default:
          return new Intl.NumberFormat().format(B);
      }
    }, wt = () => H ? /* @__PURE__ */ l.jsxs(f, { className: _e.analytics__header, children: [
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
                disabled: Ge,
                title: "Refresh data",
                children: Ge ? "⟳" : "↻"
              }
            ),
            W && /* @__PURE__ */ l.jsxs(
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
                value: j,
                onChange: (B) => xt(B.target.value),
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
      T && /* @__PURE__ */ l.jsx(
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
    ] }) : null, Lt = () => {
      if (M)
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
      if (O)
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
                O
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
      if (P || !Z.length && !x.length)
        return /* @__PURE__ */ l.jsx(f, { className: _e.analytics__error, children: /* @__PURE__ */ l.jsx(
          f,
          {
            className: _e.analytics__error_message,
            children: N
          }
        ) });
      if (ne)
        return ne(Z);
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
          return Wt();
        case "funnel":
          return xi();
        case "cohort":
          return wi();
        case "report":
          return ye();
        case "realtime":
          return Ee();
        default:
          return Bt();
      }
    }, ai = () => /* @__PURE__ */ l.jsx(
      f,
      {
        kind: "grid-container",
        className: _e.analytics__dashboard_grid,
        children: x.map((B, pe) => /* @__PURE__ */ l.jsxs(
          f,
          {
            className: _e.analytics__metric_container,
            onClick: () => le == null ? void 0 : le(B),
            children: [
              /* @__PURE__ */ l.jsx(
                f,
                {
                  className: _e.analytics__metric_value,
                  children: jt(
                    B.value,
                    B.format
                  )
                }
              ),
              /* @__PURE__ */ l.jsx(
                f,
                {
                  className: _e.analytics__metric_label,
                  children: B.name
                }
              ),
              B.change !== void 0 && /* @__PURE__ */ l.jsxs(
                f,
                {
                  className: `${_e.analytics__metric_change} ${B.trend ? _e[`analytics__metric_change--${B.trend}`] : ""}`,
                  children: [
                    B.change > 0 ? "+" : "",
                    B.change,
                    "%"
                  ]
                }
              )
            ]
          },
          B.id || pe
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
                fe,
                ") -",
                " ",
                Z.length,
                " data points"
              ]
            }
          ),
          X && et()
        ]
      }
    ), $t = () => {
      const B = x[0] || {
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
                children: jt(B.value, B.format)
              }
            ),
            /* @__PURE__ */ l.jsx(
              f,
              {
                className: _e.analytics__metric_label,
                children: B.name
              }
            ),
            B.change !== void 0 && /* @__PURE__ */ l.jsxs(
              f,
              {
                className: `${_e.analytics__metric_change} ${B.trend ? _e[`analytics__metric_change--${B.trend}`] : ""}`,
                children: [
                  B.change > 0 ? "+" : "",
                  B.change,
                  "%"
                ]
              }
            )
          ]
        }
      );
    }, Wt = () => /* @__PURE__ */ l.jsx(
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
              Z.length,
              " ",
              "data points"
            ]
          }
        )
      }
    ), xi = () => /* @__PURE__ */ l.jsx(
      f,
      {
        className: _e.analytics__funnel_container,
        children: Z.map((B, pe) => /* @__PURE__ */ l.jsx(
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
                      children: B.label || `Step ${pe + 1}`
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    "span",
                    {
                      className: _e.analytics__funnel_step_value,
                      children: B.value || 0
                    }
                  )
                ]
              }
            )
          },
          pe
        ))
      }
    ), wi = () => /* @__PURE__ */ l.jsx(
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
              x.length,
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
              Z.length,
              " rows"
            ]
          }
        )
      }
    ), Ee = () => /* @__PURE__ */ l.jsxs(
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
          x.map((B, pe) => /* @__PURE__ */ l.jsxs(
            f,
            {
              className: _e.analytics__metric_container,
              children: [
                /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: _e.analytics__metric_value,
                    children: jt(
                      B.value,
                      B.format
                    )
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  f,
                  {
                    className: _e.analytics__metric_label,
                    children: B.name
                  }
                )
              ]
            },
            B.id || pe
          ))
        ]
      }
    ), et = () => /* @__PURE__ */ l.jsx(f, { className: _e.analytics__chart_legend, children: v.map((B, pe) => /* @__PURE__ */ l.jsxs(
      f,
      {
        className: _e.analytics__chart_legend_item,
        children: [
          /* @__PURE__ */ l.jsx(
            f,
            {
              className: _e.analytics__chart_legend_item_color,
              style: { backgroundColor: B }
            }
          ),
          /* @__PURE__ */ l.jsxs("span", { children: [
            "Series ",
            pe + 1
          ] })
        ]
      },
      pe
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
            q / 1e3,
            "s"
          ]
        }
      ) })
    ] }) : null, oi = [
      _e.analytics__container,
      _e[`analytics--${d}`],
      _e[`analytics--${h}`],
      M && _e["analytics--loading"],
      O && _e["analytics--error"],
      V && _e["analytics--refreshable"],
      W && _e["analytics--exportable"],
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
        ...oe,
        children: [
          wt(),
          ni(),
          /* @__PURE__ */ l.jsx(f, { className: _e.analytics__content, children: Lt() }),
          Tt()
        ]
      }
    );
  }
);
bp.displayName = "Analytics";
const yp = "_baseCard_1ti03_117", vp = "_cardHover_1ti03_221", xp = "_cardClickable_1ti03_226", wp = "_friendCardHeader_1ti03_271", kp = "_friendStatusDot_1ti03_278", Sp = "_friendUsername_1ti03_322", Cp = "_friendCardActions_1ti03_330", zp = "_notificationHeader_1ti03_364", jp = "_notificationIcon_1ti03_371", yt = {
  baseCard: yp,
  "card-default": "_card-default_1ti03_158",
  "card-elevated": "_card-elevated_1ti03_165",
  "card-outlined": "_card-outlined_1ti03_172",
  "card-filled": "_card-filled_1ti03_184",
  "card-small": "_card-small_1ti03_193",
  "card-medium": "_card-medium_1ti03_197",
  "card-large": "_card-large_1ti03_201",
  "card-padding-none": "_card-padding-none_1ti03_205",
  "card-padding-small": "_card-padding-small_1ti03_209",
  "card-padding-medium": "_card-padding-medium_1ti03_213",
  "card-padding-large": "_card-padding-large_1ti03_217",
  cardHover: vp,
  cardClickable: xp,
  "friend-card": "_friend-card_1ti03_264",
  friendCardHeader: wp,
  friendStatusDot: kp,
  "status-inmatch": "_status-inmatch_1ti03_306",
  "status-idle": "_status-idle_1ti03_310",
  "status-online": "_status-online_1ti03_314",
  "status-offline": "_status-offline_1ti03_318",
  friendUsername: Sp,
  friendCardActions: Cp,
  "game-card": "_game-card_1ti03_337",
  "profile-card": "_profile-card_1ti03_341",
  "notification-card": "_notification-card_1ti03_348",
  "notification-warning": "_notification-warning_1ti03_351",
  "notification-error": "_notification-error_1ti03_354",
  "notification-success": "_notification-success_1ti03_357",
  "notification-info": "_notification-info_1ti03_360",
  notificationHeader: zp,
  notificationIcon: jp,
  "stats-card": "_stats-card_1ti03_377",
  "card-title": "_card-title_1ti03_381",
  "loading-shimmer": "_loading-shimmer_1ti03_1"
}, Qs = {
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
    className: yt["friend-card"]
  },
  game: {
    variant: "elevated",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable",
    className: yt["game-card"]
  },
  profile: {
    variant: "elevated",
    size: "large",
    padding: "large",
    hover: !0,
    behavior: "hoverable",
    className: yt["profile-card"]
  },
  notification: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    behavior: "static",
    className: yt["notification-card"]
  },
  stats: {
    variant: "filled",
    size: "medium",
    padding: "medium",
    hover: !0,
    behavior: "hoverable",
    className: yt["stats-card"]
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
}, Di = (t, n) => ({
  ...Qs[t],
  ...n
}), US = {
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
}, WS = {
  infoCard: () => Di("default", {
    padding: "large",
    hover: !0
  }),
  actionCard: () => Di("elevated", {
    clickable: !0,
    hover: !0
  }),
  contentCard: () => Di("outlined", {
    padding: "large"
  }),
  headerCard: () => Di("filled", {
    padding: "medium",
    size: "large"
  }),
  compactCard: () => Di("default", {
    size: "small",
    padding: "small"
  }),
  interactiveCard: () => Di("elevated", {
    clickable: !0,
    hover: !0,
    behavior: "interactive"
  }),
  displayCard: () => Di("default", {
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
    subtitle: x,
    content: k,
    actions: z,
    friend: E,
    onChallenge: j,
    onMessage: D,
    onRemove: F,
    unreadCount: q = 0,
    notificationType: M = "info",
    statValue: O,
    statLabel: P,
    ...N
  }, J) => {
    const $ = g ? Qs[g] : null, W = a || ($ == null ? void 0 : $.variant) || "default", T = r || ($ == null ? void 0 : $.size) || "medium", A = c || ($ == null ? void 0 : $.padding) || "medium", V = d !== void 0 ? d : ($ == null ? void 0 : $.hover) || !1, ee = u !== void 0 ? u : ($ == null ? void 0 : $.clickable) || !1, le = [
      yt.baseCard,
      yt[`card-${W}`],
      yt[`card-${T}`],
      yt[`card-padding-${A}`],
      V && yt.cardHover,
      ee && yt.cardClickable,
      $ == null ? void 0 : $.className,
      // Add kind-specific styling
      n
    ].filter(Boolean).join(" "), ae = (v) => {
      ee && (h == null || h(v));
    }, te = () => {
      if (!E) return null;
      const v = (ie) => ie.online && ie.inMatch ? { text: "In match", color: "#a259f7" } : ie.online && ie.idle ? { text: "Idle", color: "#fbbf24" } : ie.online ? { text: "Online", color: "#22c55e" } : { text: "Offline", color: "#64748b" }, R = {
        "In match": "status-inmatch",
        Idle: "status-idle",
        Online: "status-online",
        Offline: "status-offline"
      }, S = v(E), H = R[S.text] || "status-offline";
      return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs(f, { className: yt.friendCardHeader, children: [
          /* @__PURE__ */ l.jsx(
            "span",
            {
              className: `${yt.friendStatusDot} ${yt[H]}`
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: yt.friendUsername, children: E.username })
        ] }),
        /* @__PURE__ */ l.jsxs(f, { className: yt.friendCardActions, children: [
          j && /* @__PURE__ */ l.jsx(
            "button",
            {
              onClick: () => j(E.id),
              children: "Challenge"
            }
          ),
          D && /* @__PURE__ */ l.jsxs("button", { onClick: () => D(E.id), children: [
            "Message",
            q > 0 ? ` (${q})` : ""
          ] }),
          F && /* @__PURE__ */ l.jsx("button", { onClick: () => F(E.id), children: "Remove" })
        ] })
      ] });
    }, ce = () => g !== "stats" ? null : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      O && /* @__PURE__ */ l.jsx(
        f,
        {
          className: "stat-value",
          style: {
            fontSize: "2rem",
            fontWeight: "bold"
          },
          children: O
        }
      ),
      P && /* @__PURE__ */ l.jsx(
        f,
        {
          className: "stat-label",
          style: { fontSize: "0.875rem", opacity: 0.8 },
          children: P
        }
      )
    ] }), w = () => {
      if (g !== "notification") return null;
      const v = () => {
        switch (M) {
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
            className: `${yt.notificationHeader} notification-${M}`,
            children: [
              /* @__PURE__ */ l.jsx("span", { className: yt.notificationIcon, children: v() }),
              y && /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: y })
            ]
          }
        ),
        x && /* @__PURE__ */ l.jsx("p", { className: "card-subtitle", children: x }),
        k && /* @__PURE__ */ l.jsx(f, { className: "card-content", children: k }),
        t,
        z && /* @__PURE__ */ l.jsx(f, { className: "card-actions", children: z })
      ] });
    }, G = () => g === "friend" ? te() : g === "stats" ? ce() : g === "notification" ? w() : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      y && /* @__PURE__ */ l.jsx("h3", { className: "card-title", children: y }),
      x && /* @__PURE__ */ l.jsx("p", { className: "card-subtitle", children: x }),
      k && /* @__PURE__ */ l.jsx(f, { className: "card-content", children: k }),
      t,
      z && /* @__PURE__ */ l.jsx(f, { className: "card-actions", children: z })
    ] });
    return /* @__PURE__ */ l.jsx(
      f,
      {
        ref: J,
        className: le,
        onClick: ae,
        style: p,
        ...N,
        children: G()
      }
    );
  }
);
Dt.displayName = "Card";
function VS(t, n = {}) {
  return /* @__PURE__ */ l.jsx(Dt, { kind: t, ...n });
}
function GS(t, n, a = {}) {
  return /* @__PURE__ */ l.jsx(Dt, { kind: t, ...a });
}
const KS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "friend", ...t }), YS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "profile", ...t }), JS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "notification", ...t }), XS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "stats", ...t }), QS = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "game", ...t }), e9 = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "puzzle", ...t }), t9 = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "room-info", ...t }), i9 = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "match-summary", ...t }), n9 = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "default", hover: !0, ...t }), a9 = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "elevated", clickable: !0, hover: !0, ...t }), o9 = (t) => /* @__PURE__ */ l.jsx(Dt, { kind: "outlined", ...t });
var Lo = { exports: {} }, io = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function Tp() {
  if (ss) return io;
  ss = 1;
  var t = tt;
  function n(p, g) {
    return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
  }
  var a = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, c = t.useRef, d = t.useEffect, u = t.useMemo, h = t.useDebugValue;
  return io.useSyncExternalStoreWithSelector = function(p, g, y, x, k) {
    var z = c(null);
    if (z.current === null) {
      var E = { hasValue: !1, value: null };
      z.current = E;
    } else E = z.current;
    z = u(
      function() {
        function D(P) {
          if (!F) {
            if (F = !0, q = P, P = x(P), k !== void 0 && E.hasValue) {
              var N = E.value;
              if (k(N, P))
                return M = N;
            }
            return M = P;
          }
          if (N = M, a(q, P)) return N;
          var J = x(P);
          return k !== void 0 && k(N, J) ? (q = P, N) : (q = P, M = J);
        }
        var F = !1, q, M, O = y === void 0 ? null : y;
        return [
          function() {
            return D(g());
          },
          O === null ? void 0 : function() {
            return D(O());
          }
        ];
      },
      [g, y, x, k]
    );
    var j = r(p, z[0], z[1]);
    return d(
      function() {
        E.hasValue = !0, E.value = j;
      },
      [j]
    ), h(j), j;
  }, io;
}
var no = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function Pp() {
  return ls || (ls = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, g) {
      return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = tt, a = typeof Object.is == "function" ? Object.is : t, r = n.useSyncExternalStore, c = n.useRef, d = n.useEffect, u = n.useMemo, h = n.useDebugValue;
    no.useSyncExternalStoreWithSelector = function(p, g, y, x, k) {
      var z = c(null);
      if (z.current === null) {
        var E = { hasValue: !1, value: null };
        z.current = E;
      } else E = z.current;
      z = u(
        function() {
          function D(P) {
            if (!F) {
              if (F = !0, q = P, P = x(P), k !== void 0 && E.hasValue) {
                var N = E.value;
                if (k(N, P))
                  return M = N;
              }
              return M = P;
            }
            if (N = M, a(q, P))
              return N;
            var J = x(P);
            return k !== void 0 && k(N, J) ? (q = P, N) : (q = P, M = J);
          }
          var F = !1, q, M, O = y === void 0 ? null : y;
          return [
            function() {
              return D(g());
            },
            O === null ? void 0 : function() {
              return D(O());
            }
          ];
        },
        [g, y, x, k]
      );
      var j = r(p, z[0], z[1]);
      return d(
        function() {
          E.hasValue = !0, E.value = j;
        },
        [j]
      ), h(j), j;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), no;
}
process.env.NODE_ENV === "production" ? Lo.exports = Tp() : Lo.exports = Pp();
var Ep = Lo.exports, ao = /* @__PURE__ */ Symbol.for("react-redux-context"), oo = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Np() {
  if (!Pi.createContext) return {};
  const t = oo[ao] ?? (oo[ao] = /* @__PURE__ */ new Map());
  let n = t.get(Pi.createContext);
  return n || (n = Pi.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (n.displayName = "ReactRedux"), t.set(Pi.createContext, n)), n;
}
var Ui = /* @__PURE__ */ Np();
function Fo(t = Ui) {
  return function() {
    const a = Pi.useContext(t);
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return a;
  };
}
var el = /* @__PURE__ */ Fo();
function tl(t = Ui) {
  const n = t === Ui ? el : (
    // @ts-ignore
    Fo(t)
  ), a = () => {
    const { store: r } = n();
    return r;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var Ip = /* @__PURE__ */ tl();
function Lp(t = Ui) {
  const n = t === Ui ? Ip : tl(t), a = () => n().dispatch;
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var vi = /* @__PURE__ */ Lp(), Ap = (t, n) => t === n;
function Mp(t = Ui) {
  const n = t === Ui ? el : Fo(t), a = (r, c = {}) => {
    const { equalityFn: d = Ap } = typeof c == "function" ? { equalityFn: c } : c;
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
    const u = n(), { store: h, subscription: p, getServerState: g } = u, y = Pi.useRef(!0), x = Pi.useCallback(
      {
        [r.name](z) {
          const E = r(z);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: j = {} } = typeof c == "function" ? {} : c, { identityFunctionCheck: D, stabilityCheck: F } = u, {
              identityFunctionCheck: q,
              stabilityCheck: M
            } = {
              stabilityCheck: F,
              identityFunctionCheck: D,
              ...j
            };
            if (M === "always" || M === "once" && y.current) {
              const O = r(z);
              if (!d(E, O)) {
                let P;
                try {
                  throw new Error();
                } catch (N) {
                  ({ stack: P } = N);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: z,
                    selected: E,
                    selected2: O,
                    stack: P
                  }
                );
              }
            }
            if ((q === "always" || q === "once" && y.current) && E === z) {
              let O;
              try {
                throw new Error();
              } catch (P) {
                ({ stack: O } = P);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: O }
              );
            }
            y.current && (y.current = !1);
          }
          return E;
        }
      }[r.name],
      [r]
    ), k = Ep.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      h.getState,
      g || h.getState,
      x,
      d
    );
    return Pi.useDebugValue(k), k;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var Nt = /* @__PURE__ */ Mp();
const cs = {
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
}, Op = (t) => cs[t] || cs["chart-legend"], Rp = {
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
}, il = Ut({
  name: "ui",
  initialState: Rp,
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
  setGlobalLoading: r9,
  setGlobalError: s9,
  clearGlobalError: l9,
  startDrag: c9,
  endDrag: _9,
  setDropZone: d9,
  initializeTable: u9,
  updateTableSorting: m9,
  updateTableFilters: h9,
  setTableSearchTerm: p9,
  toggleTableRowSelection: f9,
  initializeForm: g9,
  updateForms: b9,
  setFormError: y9,
  clearFormErrors: v9,
  setFormSubmitting: x9,
  setComponentState: kn,
  setInputValue: w9,
  setInputFocus: k9,
  setSwitchState: ro,
  setMediaState: so,
  setNotificationState: S9,
  setSelectState: _s,
  setRadioState: lo,
  setMapState: Dp,
  setCardState: C9,
  setRangeState: Sn,
  setChatState: z9,
  initializeChart: Bp,
  setChartSelectedSeries: $p,
  setChartSearchTerm: Fp,
  toggleChartSeries: qp,
  selectAllChartSeries: Hp,
  cleanupComponent: Wi,
  cleanupForm: j9,
  cleanupTable: T9,
  cleanupChart: Zp
} = il.actions, Up = (t) => (n) => n.ui.components[t], Wp = (t) => (n) => n.ui.switches[t], Vp = (t) => (n) => n.ui.media[t], Gp = (t) => (n) => n.ui.selects[t], Kp = (t) => (n) => n.ui.radios[t], Yp = (t) => (n) => n.ui.maps[t], Jp = (t) => (n) => n.ui.ranges[t], Xp = (t) => (n) => {
  var a;
  return ((a = n.ui.charts[t]) == null ? void 0 : a.selectedSeries) || [];
}, Qp = (t) => (n) => {
  var a;
  return ((a = n.ui.charts[t]) == null ? void 0 : a.searchTerm) || "";
}, nl = il.reducer, ef = "_container_sko1j_126", tf = "_flex_sko1j_257", nf = "_grid_sko1j_353", af = "_relative_sko1j_735", of = "_absolute_sko1j_739", rf = "_fixed_sko1j_743", sf = "_sticky_sko1j_747", lf = "_truncate_sko1j_886", cf = "_border_sko1j_946", _f = "_rounded_sko1j_986", df = "_shadow_sko1j_1018", uf = "_transition_sko1j_1090", mf = "_small_sko1j_1590", hf = "_large_sko1j_1594", pf = "_card_sko1j_1642", ff = "_chart_sko1j_1767", gf = "_legend_sko1j_1848", bf = "_legend__item_sko1j_1854", yf = "_active_sko1j_1881", vf = "_legend__marker_sko1j_1886", xf = "_legend__icon_sko1j_1895", wf = "_legend__label_sko1j_1907", kf = "_legend__value_sko1j_1912", Sf = "_filter_sko1j_1918", Cf = "_filter__search_sko1j_1924", zf = "_filter__select_all_sko1j_1956", jf = "_filter__items_sko1j_2023", Tf = "_filter__item_sko1j_2023", Pf = "_tooltip_sko1j_2050", Ef = "_tooltip__arrow_sko1j_2060", Nf = "_tooltip__content_sko1j_2072", If = "_controls_sko1j_2077", Lf = "_controls__button_sko1j_2084", Af = "_controls__select_sko1j_2150", Ye = {
  container: ef,
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
  flex: tf,
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
  grid: nf,
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
  relative: af,
  absolute: of,
  fixed: rf,
  sticky: sf,
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
  truncate: lf,
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
  border: cf,
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
  rounded: _f,
  "rounded-md": "_rounded-md_sko1j_998",
  "rounded-lg": "_rounded-lg_sko1j_1002",
  "rounded-xl": "_rounded-xl_sko1j_1006",
  "rounded-2xl": "_rounded-2xl_sko1j_1010",
  "rounded-full": "_rounded-full_sko1j_1014",
  "shadow-none": "_shadow-none_sko1j_1018",
  "shadow-sm": "_shadow-sm_sko1j_1022",
  shadow: df,
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
  transition: uf,
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
  small: mf,
  large: hf,
  "primary-button": "_primary-button_sko1j_1599",
  "secondary-button": "_secondary-button_sko1j_1603",
  card: pf,
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
  chart: ff,
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
  legend: gf,
  legend__item: bf,
  active: yf,
  legend__marker: vf,
  legend__icon: xf,
  legend__label: wf,
  legend__value: kf,
  filter: Sf,
  filter__search: Cf,
  filter__select_all: zf,
  filter__items: jf,
  filter__item: Tf,
  tooltip: Pf,
  tooltip__arrow: Ef,
  tooltip__content: Nf,
  controls: If,
  controls__button: Lf,
  controls__select: Af,
  "loading-shimmer": "_loading-shimmer_sko1j_1"
}, ot = Le(
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
      showValues: x,
      interactive: k,
      followCursor: z,
      showArrow: E,
      multiValue: j,
      allowMultiSelect: D,
      showSelectAll: F,
      searchable: q,
      // Styling
      spacing: M,
      size: O,
      // Callbacks
      onSeriesToggle: P,
      onFilterChange: N,
      onTooltipShow: J,
      onTooltipHide: $,
      ...W
    } = t, T = Op(a), A = {
      ...T,
      variant: h || T.variant,
      position: p || T.position,
      orientation: g || T.orientation,
      showIcons: y !== void 0 ? y : T.showIcons,
      showValues: x !== void 0 ? x : T.showValues,
      interactive: k !== void 0 ? k : T.interactive,
      followCursor: z !== void 0 ? z : T.followCursor,
      showArrow: E !== void 0 ? E : T.showArrow,
      multiValue: j !== void 0 ? j : T.multiValue,
      allowMultiSelect: D !== void 0 ? D : T.allowMultiSelect,
      showSelectAll: F !== void 0 ? F : T.showSelectAll,
      searchable: q !== void 0 ? q : T.searchable,
      spacing: M || T.spacing,
      size: O || T.size
    }, V = vi(), ee = Nt(
      Xp(r)
    ), le = Nt(
      Qp(r)
    );
    Te(() => {
      const S = u.filter((H) => H.visible).map((H) => H.id);
      return V(
        Bp({
          chartId: r,
          selectedSeries: S,
          isInteractive: A.interactive,
          allowMultiSelect: A.allowMultiSelect
        })
      ), () => {
        V(Zp(r));
      };
    }, [r, V]);
    const ae = (S) => {
      if (!A.interactive) return;
      const H = u.find(
        (X) => X.id === S
      );
      if (!H) return;
      const ie = !H.visible;
      if (H.visible = ie, A.allowMultiSelect) {
        V(qp({ chartId: r, seriesId: S }));
        const X = ie ? [...ee, S] : ee.filter(
          (K) => K !== S
        );
        N == null || N(X);
      } else
        V(
          $p({
            chartId: r,
            selectedSeries: [S]
          })
        ), N == null || N([S]);
      P == null || P(S, ie);
    }, te = () => {
      const S = u.every((ie) => ie.visible);
      u.forEach((ie) => ie.visible = !S);
      const H = S ? [] : u.map((ie) => ie.id);
      V(
        Hp({
          chartId: r,
          allSeriesIds: u.map((ie) => ie.id)
        })
      ), N == null || N(H);
    }, ce = [
      Ye.chart,
      Ye[`chart--${A.kind}`],
      Ye[`chart--${A.variant}`],
      Ye[`chart--${A.position}`],
      A.orientation && Ye[`chart--${A.orientation}`],
      A.spacing && Ye[`chart--spacing-${A.spacing}`],
      A.size && Ye[`chart--size-${A.size}`],
      d
    ].filter(Boolean).join(" "), w = (S) => /* @__PURE__ */ l.jsxs(
      f,
      {
        className: `${Ye.legend__item} ${S.visible ? Ye["legend__item--active"] : ""}`,
        onClick: () => ae(S.id),
        children: [
          A.showIcons && /* @__PURE__ */ l.jsx(
            f,
            {
              className: Ye.legend__icon,
              style: { backgroundColor: S.color },
              children: S.icon
            }
          ),
          /* @__PURE__ */ l.jsx("span", { className: Ye.legend__label, children: S.label }),
          A.showValues && S.data && /* @__PURE__ */ l.jsx("span", { className: Ye.legend__value, children: S.data.length })
        ]
      },
      S.id
    ), G = () => {
      if (!A.kind.includes("filter")) return null;
      const S = A.searchable && le ? u.filter(
        (H) => H.label.toLowerCase().includes(le.toLowerCase())
      ) : u;
      return /* @__PURE__ */ l.jsxs(f, { className: Ye.filter, children: [
        A.searchable && /* @__PURE__ */ l.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search...",
            value: le,
            onChange: (H) => V(
              Fp({
                chartId: r,
                searchTerm: H.target.value
              })
            ),
            className: Ye.filter__search
          }
        ),
        A.showSelectAll && /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "secondary",
            onClick: te,
            className: Ye.filter__select_all,
            children: u.every((H) => H.visible) ? "Deselect All" : "Select All"
          }
        ),
        /* @__PURE__ */ l.jsx(f, { className: Ye.filter__items, children: S.map((H) => /* @__PURE__ */ l.jsxs(
          "label",
          {
            className: Ye.filter__item,
            children: [
              /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: A.allowMultiSelect ? "checkbox" : "radio",
                  checked: H.visible,
                  onChange: () => ae(H.id)
                }
              ),
              /* @__PURE__ */ l.jsx("span", { style: { color: H.color }, children: H.label })
            ]
          },
          H.id
        )) })
      ] });
    }, v = () => A.kind.includes("tooltip") ? /* @__PURE__ */ l.jsxs(f, { className: Ye.tooltip, children: [
      A.showArrow && /* @__PURE__ */ l.jsx(f, { className: Ye.tooltip__arrow }),
      /* @__PURE__ */ l.jsx(f, { className: Ye.tooltip__content, children: c || "Tooltip content" })
    ] }) : null, R = () => !A.kind.includes("controls") && !A.kind.includes("zoom") ? null : /* @__PURE__ */ l.jsxs(f, { className: Ye.controls, children: [
      A.kind.includes("zoom") && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
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
      A.kind.includes("time-range") && /* @__PURE__ */ l.jsxs("select", { className: Ye.controls__select, children: [
        /* @__PURE__ */ l.jsx("option", { children: "Last 7 days" }),
        /* @__PURE__ */ l.jsx("option", { children: "Last 30 days" }),
        /* @__PURE__ */ l.jsx("option", { children: "Last 90 days" })
      ] })
    ] });
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ...W,
        ref: n,
        className: ce,
        children: [
          A.kind.includes("legend") && /* @__PURE__ */ l.jsx(f, { className: Ye.legend, children: u.map(w) }),
          G(),
          v(),
          R(),
          c
        ]
      }
    );
  }
);
ot.displayName = "Chart";
const P9 = di(ot);
function E9(t, n = {}) {
  return /* @__PURE__ */ l.jsx(ot, { kind: t, ...n });
}
const N9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "chart-legend", ...t }), I9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "legend-horizontal", ...t }), L9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "legend-vertical", ...t }), A9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "legend-grid", ...t }), M9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "legend-minimal", ...t }), O9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "chart-tooltip", ...t }), R9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "tooltip-simple", ...t }), D9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "tooltip-detailed", ...t }), B9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "tooltip-custom", ...t }), $9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "chart-filter-controls", ...t }), F9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "filter-checkboxes", ...t }), q9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "filter-buttons", ...t }), H9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "filter-dropdown", ...t }), Z9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "filter-multi-select", ...t }), U9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "chart-controls", ...t }), W9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "zoom-controls", ...t }), V9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "time-range-selector", ...t }), G9 = (t) => /* @__PURE__ */ l.jsx(ot, { kind: "data-series-toggle", ...t }), K9 = (t) => /* @__PURE__ */ l.jsx(
  ot,
  {
    kind: "legend-grid",
    variant: "modern",
    showIcons: !0,
    showValues: !0,
    interactive: !0,
    ...t
  }
), Y9 = (t) => /* @__PURE__ */ l.jsx(
  ot,
  {
    kind: "filter-buttons",
    variant: "game-style",
    allowMultiSelect: !0,
    spacing: "tight",
    ...t
  }
), Mf = {
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
}, Of = "_provider_ba44k_117", Ei = {
  provider: Of
}, Rf = {
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
}, Df = ma(null), al = ma(null), Bf = ma(null), qt = Le(
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
    ...x
  }, k) => {
    const z = Rf[t];
    if (!z)
      return console.warn(`Unknown provider kind: ${t}`), /* @__PURE__ */ l.jsx(l.Fragment, { children: n });
    switch ({ ...z, ...g }, t) {
      case "socket-provider":
        return /* @__PURE__ */ l.jsx(
          $f,
          {
            session: a,
            autoConnect: r,
            url: c,
            ref: k,
            className: y,
            ...x,
            children: n
          }
        );
      case "user-settings-provider":
        return /* @__PURE__ */ l.jsx(
          Ff,
          {
            initialSettings: d,
            ref: k,
            className: y,
            ...x,
            children: n
          }
        );
      case "theme-palette-provider":
        return /* @__PURE__ */ l.jsx(
          qf,
          {
            initialTheme: u,
            initialPalette: h,
            ref: k,
            className: y,
            ...x,
            children: n
          }
        );
      case "achievement-socket-listener":
        return /* @__PURE__ */ l.jsx(
          Hf,
          {
            onAchievement: p,
            ref: k,
            className: y,
            ...x,
            children: n
          }
        );
      default:
        return /* @__PURE__ */ l.jsx(l.Fragment, { children: n });
    }
  }
), $f = Le(
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
    return /* @__PURE__ */ l.jsx(Df.Provider, { value: h, children: /* @__PURE__ */ l.jsx(
      f,
      {
        ref: u,
        className: `${Ei.provider} ${Ei["provider-socket"]} ${c || ""}`,
        ...d,
        children: r
      }
    ) });
  }
), Ff = Le(
  ({ initialSettings: t, children: n, className: a, ...r }, c) => {
    const d = {
      settings: t || {},
      setSettings: () => {
      },
      updateSetting: () => {
      }
    };
    return /* @__PURE__ */ l.jsx(Bf.Provider, { value: d, children: /* @__PURE__ */ l.jsx(
      f,
      {
        ref: c,
        className: `${Ei.provider} ${Ei["provider-settings"]} ${a || ""}`,
        ...r,
        children: n
      }
    ) });
  }
), qf = Le(
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
    return /* @__PURE__ */ l.jsx(al.Provider, { value: u, children: /* @__PURE__ */ l.jsx(
      f,
      {
        ref: d,
        className: `${Ei.provider} ${Ei["provider-theme"]} ${r || ""}`,
        ...c,
        children: a
      }
    ) });
  }
), Hf = Le(
  ({ onAchievement: t, children: n, className: a, ...r }, c) => /* @__PURE__ */ l.jsx(
    f,
    {
      ref: c,
      className: `${Ei.provider} ${Ei["provider-listener"]} ${a || ""}`,
      ...r,
      children: n
    }
  )
), nn = {
  SOCKET_CONNECTION: (t, n = !0, a) => /* @__PURE__ */ l.jsx(
    qt,
    {
      kind: "socket-provider",
      session: t,
      autoConnect: n,
      url: a
    }
  ),
  USER_SETTINGS: (t) => /* @__PURE__ */ l.jsx(
    qt,
    {
      kind: "user-settings-provider",
      initialSettings: t
    }
  ),
  ACHIEVEMENT_LISTENER: () => /* @__PURE__ */ l.jsx(qt, { kind: "achievement-socket-listener" }),
  THEME_PALETTE: () => /* @__PURE__ */ l.jsx(qt, { kind: "theme-palette-provider" }),
  FULL_SETUP: (t, n) => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      qt,
      {
        kind: "socket-provider",
        session: t,
        autoConnect: !0
      }
    ),
    /* @__PURE__ */ l.jsx(
      qt,
      {
        kind: "user-settings-provider",
        initialSettings: n
      }
    ),
    /* @__PURE__ */ l.jsx(qt, { kind: "achievement-socket-listener" })
  ] })
}, Zf = {
  socket: nn.SOCKET_CONNECTION,
  settings: nn.USER_SETTINGS,
  achievements: nn.ACHIEVEMENT_LISTENER,
  theme: nn.THEME_PALETTE,
  full: nn.FULL_SETUP
};
class fi {
  static create(n, a = {}) {
    return /* @__PURE__ */ l.jsx(qt, { kind: n, ...a });
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
const Uf = {
  SOCKET_CONNECTED: (t) => fi.socket({
    session: t,
    autoConnect: !0
  }),
  SOCKET_MANUAL: (t) => fi.socket({
    session: t,
    autoConnect: !1
  }),
  USER_SETTINGS: (t) => fi.userSettings({ initialSettings: t }),
  EMPTY_SETTINGS: () => fi.userSettings({
    initialSettings: {}
  }),
  THEME_LIGHT: () => fi.themePalette({
    initialTheme: "light"
  }),
  THEME_DARK: () => fi.themePalette({
    initialTheme: "dark"
  }),
  THEME_AUTO: () => fi.themePalette({
    initialTheme: "auto"
  }),
  ACHIEVEMENT_LISTENER: (t) => fi.achievementListener({
    onAchievement: t
  })
};
qt.Presets = nn;
qt.Quick = Zf;
qt.SimpleFactory = fi;
qt.ExtendedPresets = Uf;
qt.displayName = "Providers";
const Wf = "_Checkbox_if5h7_118", Vf = "_disabled_if5h7_144", Gf = "_animated_if5h7_149", Kf = "_checkboxInput_if5h7_153", Yf = "_small_if5h7_404", Jf = "_large_if5h7_408", Xf = "_checkboxLabel_if5h7_474", Qf = "_errorText_if5h7_486", e1 = "_helperText_if5h7_495", t1 = "_error_if5h7_486", i1 = "_success_if5h7_508", n1 = "_warning_if5h7_511", a1 = "_fullWidth_if5h7_515", o1 = "_rounded_if5h7_547", r1 = "_shadow_if5h7_551", s1 = "_bordered_if5h7_558", ft = {
  Checkbox: Wf,
  disabled: Vf,
  animated: Gf,
  checkboxInput: Kf,
  "checkbox-default": "_checkbox-default_if5h7_211",
  "checkbox-toggle": "_checkbox-toggle_if5h7_215",
  "checkbox-switch": "_checkbox-switch_if5h7_272",
  "dark-mode-toggle": "_dark-mode-toggle_if5h7_329",
  small: Yf,
  large: Jf,
  "size-small": "_size-small_if5h7_429",
  "size-large": "_size-large_if5h7_449",
  checkboxLabel: Xf,
  errorText: Qf,
  helperText: e1,
  error: t1,
  success: i1,
  warning: n1,
  fullWidth: a1,
  "variant-success": "_variant-success_if5h7_523",
  "variant-warning": "_variant-warning_if5h7_531",
  "variant-danger": "_variant-danger_if5h7_539",
  rounded: o1,
  shadow: r1,
  bordered: s1,
  "loading-shimmer": "_loading-shimmer_if5h7_1"
}, qo = Le(
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
    className: x = "",
    checked: k,
    onChange: z,
    disabled: E = !1,
    ...j
  }, D) => {
    const F = {
      ...Mf[t],
      ...n
    }, q = e_(
      al
    );
    let M = k, O = z;
    t === "dark-mode-toggle" && y && q && "darkMode" in q && (M = q.darkMode, O = () => q.setDarkMode(
      !q.darkMode
    ));
    const P = r || F.labelPosition, N = c || F.size, J = d || F.variant, $ = [
      ft.Checkbox,
      ft[F.className],
      ft[`size-${N}`],
      J !== "default" ? ft[`variant-${J}`] : "",
      u || F.behavior.animated ? ft.animated : "",
      F.styling.rounded ? ft.rounded : "",
      F.styling.shadow ? ft.shadow : "",
      F.styling.bordered ? ft.bordered : "",
      E ? ft.disabled : "",
      g ? ft.fullWidth : "",
      x
    ].filter(Boolean).join(" "), W = [ft.checkboxInput].filter(Boolean).join(" "), T = () => F.icon ? M ? F.icon.checked : F.icon.unchecked : null;
    if (t === "dark-mode-toggle")
      return /* @__PURE__ */ l.jsxs("label", { className: $, children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: D,
            type: "checkbox",
            className: W,
            checked: M,
            onChange: O,
            disabled: E,
            "data-icon": T(),
            "aria-label": M ? "Switch to light mode" : "Switch to dark mode",
            ...j
          }
        ),
        h && /* @__PURE__ */ l.jsx(f, { className: ft.errorText, children: h }),
        p && /* @__PURE__ */ l.jsx(f, { className: ft.helperText, children: p })
      ] });
    const A = a && P !== "none" ? /* @__PURE__ */ l.jsx(
      "span",
      {
        className: `${ft.checkboxLabel} ${E ? ft.disabled : ""}`,
        children: a
      }
    ) : null;
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        className: g ? ft.fullWidth : "",
        children: [
          /* @__PURE__ */ l.jsxs("label", { className: $, children: [
            P === "left" && A,
            /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: D,
                type: "checkbox",
                className: W,
                checked: M,
                onChange: O,
                disabled: E,
                ...j
              }
            ),
            P === "right" && A
          ] }),
          h && /* @__PURE__ */ l.jsx(f, { className: ft.errorText, children: h }),
          p && /* @__PURE__ */ l.jsx(f, { className: ft.helperText, children: p })
        ]
      }
    );
  }
);
qo.displayName = "Checkbox";
const l1 = Le((t, n) => tt.createElement(qo, {
  ref: n,
  kind: "dark-mode-toggle",
  darkModeContext: !0,
  ...t
}));
l1.displayName = "DarkModeToggle";
const ds = {
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
}, c1 = (t) => ds[t] || ds["no-data"], _1 = "_empty_state_t3lac_118", d1 = "_empty_state__icon_t3lac_145", u1 = "_empty_state__content_t3lac_159", m1 = "_empty_state__title_t3lac_163", h1 = "_empty_state__description_t3lac_170", p1 = "_empty_state__actions_t3lac_176", f1 = "_empty_state__custom_t3lac_183", g1 = "_pulse_t3lac_1", gt = {
  empty_state: _1,
  "empty_state--small": "_empty_state--small_t3lac_128",
  "empty_state--medium": "_empty_state--medium_t3lac_132",
  "empty_state--large": "_empty_state--large_t3lac_136",
  "empty_state--full": "_empty_state--full_t3lac_140",
  empty_state__icon: d1,
  empty_state__content: u1,
  empty_state__title: m1,
  empty_state__description: h1,
  empty_state__actions: p1,
  empty_state__custom: f1,
  "empty_state--error": "_empty_state--error_t3lac_186",
  "empty_state--warning": "_empty_state--warning_t3lac_192",
  "empty_state--info": "_empty_state--info_t3lac_198",
  "empty_state--success": "_empty_state--success_t3lac_201",
  "empty_state--loading": "_empty_state--loading_t3lac_204",
  pulse: g1,
  "empty_state--compact": "_empty_state--compact_t3lac_207",
  "empty_state--interactive": "_empty_state--interactive_t3lac_229",
  "loading-shimmer": "_loading-shimmer_t3lac_1"
}, ol = Le((t, n) => {
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
    centered: x,
    fullHeight: k,
    // Actions
    primaryAction: z,
    secondaryAction: E,
    actions: j,
    // Features
    showIcon: D,
    showIllustration: F,
    allowCustomContent: q,
    ...M
  } = t, O = c1(a), P = {
    ...O,
    title: d || O.title,
    description: u || O.description,
    icon: h || O.icon,
    illustration: p || O.illustration,
    variant: g || O.variant,
    size: y || O.size,
    centered: x !== void 0 ? x : O.centered,
    fullHeight: k !== void 0 ? k : O.fullHeight,
    primaryAction: z || O.primaryAction,
    secondaryAction: E || O.secondaryAction,
    actions: j || O.actions,
    showIcon: D !== void 0 ? D : O.showIcon,
    showIllustration: F !== void 0 ? F : O.showIllustration,
    allowCustomContent: q !== void 0 ? q : O.allowCustomContent
  }, N = [
    gt.empty_state,
    gt[`empty_state--${P.kind}`],
    gt[`empty_state--${P.variant}`],
    P.size && gt[`empty_state--${P.size}`],
    P.centered && gt["empty_state--centered"],
    P.fullHeight && gt["empty_state--full_height"],
    c
  ].filter(Boolean).join(" "), J = () => !P.showIcon || !P.icon ? null : /* @__PURE__ */ l.jsx(f, { className: gt.empty_state__icon, children: typeof P.icon == "string" ? /* @__PURE__ */ l.jsx("span", { className: gt.empty_state__icon_text, children: P.icon }) : P.icon }), $ = () => !P.showIllustration || !P.illustration ? null : /* @__PURE__ */ l.jsx(f, { className: gt.empty_state__illustration, children: /* @__PURE__ */ l.jsx(
    "img",
    {
      src: P.illustration,
      alt: "",
      className: gt.empty_state__illustration_image
    }
  ) }), W = (A, V = !1) => /* @__PURE__ */ l.jsxs(
    Ce,
    {
      kind: A.variant === "text" ? "link" : A.variant || (V ? "primary" : "secondary"),
      onClick: A.onClick,
      className: `${gt.empty_state__action} ${gt[`empty_state__action--${A.variant || (V ? "primary" : "secondary")}`]}`,
      children: [
        A.icon && /* @__PURE__ */ l.jsx("span", { className: gt.empty_state__action_icon, children: A.icon }),
        A.label
      ]
    },
    A.label
  ), T = () => {
    const A = [];
    return P.primaryAction && A.push({
      ...P.primaryAction,
      isPrimary: !0
    }), P.secondaryAction && A.push({
      ...P.secondaryAction,
      isPrimary: !1
    }), P.actions && A.push(
      ...P.actions.map((V) => ({
        ...V,
        isPrimary: !1
      }))
    ), A.length === 0 ? null : /* @__PURE__ */ l.jsx(f, { className: gt.empty_state__actions, children: A.map(
      (V, ee) => W(V, V.isPrimary)
    ) });
  };
  return /* @__PURE__ */ l.jsxs(
    f,
    {
      ...M,
      ref: n,
      className: N,
      role: "status",
      "aria-live": "polite",
      children: [
        $(),
        J(),
        /* @__PURE__ */ l.jsxs(f, { className: gt.empty_state__content, children: [
          P.title && /* @__PURE__ */ l.jsx("h3", { className: gt.empty_state__title, children: P.title }),
          P.description && /* @__PURE__ */ l.jsx("p", { className: gt.empty_state__description, children: P.description }),
          P.allowCustomContent && r && /* @__PURE__ */ l.jsx(f, { className: gt.empty_state__custom, children: r })
        ] }),
        T()
      ]
    }
  );
});
ol.displayName = "EmptyState";
const J9 = di(ol), Ao = {
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
}, X9 = {
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
}, Ho = (t) => Ao[t] || Ao.dropzone, Q9 = (t, n) => ({
  ...Ho(t),
  ...n
}), eC = (t) => !!(t.kind && Ao[t.kind]), Mo = (t) => {
  if (t === 0) return "0 B";
  const n = 1024, a = ["B", "KB", "MB", "GB"], r = Math.floor(Math.log(t) / Math.log(n));
  return parseFloat((t / Math.pow(n, r)).toFixed(2)) + " " + a[r];
}, tC = (t) => {
  var n;
  return ((n = t.split(".").pop()) == null ? void 0 : n.toLowerCase()) || "";
}, iC = (t) => ({
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
})[t] || "application/octet-stream", nC = (t, n) => {
  if (n.maxSize && t.size > n.maxSize)
    return {
      valid: !1,
      error: `File size exceeds maximum of ${Mo(n.maxSize)}`
    };
  if (n.minSize && t.size < n.minSize)
    return {
      valid: !1,
      error: `File size is below minimum of ${Mo(n.minSize)}`
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
}, aC = () => Math.random().toString(36).substr(2, 9), oC = (t) => new Promise((n, a) => {
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
}), b1 = (t, n, a) => {
  var c, d, u, h, p, g;
  const r = Ho(t);
  return {
    theme: ((c = r.styling) == null ? void 0 : c.theme) || "light",
    color: ((d = r.styling) == null ? void 0 : d.color) || "primary",
    borderRadius: ((u = r.styling) == null ? void 0 : u.borderRadius) || "medium",
    shadow: (h = r.styling) == null ? void 0 : h.shadow,
    border: (p = r.styling) == null ? void 0 : p.border,
    animation: (g = r.styling) == null ? void 0 : g.animation
  };
}, y1 = (t, n) => {
  const a = [];
  return n != null && n.maxFiles && t.length > n.maxFiles && a.push(
    `Too many files. Maximum allowed: ${n.maxFiles}`
  ), t.forEach((r, c) => {
    n != null && n.maxFileSize && r.size > n.maxFileSize && a.push(
      `File "${r.name}" is too large. Maximum size: ${Mo(n.maxFileSize)}`
    ), n != null && n.allowedTypes && n.allowedTypes.length > 0 && (n.allowedTypes.includes(r.type) || a.push(
      `File "${r.name}" has unsupported type: ${r.type}`
    ));
  }), {
    isValid: a.length === 0,
    errors: a
  };
}, v1 = "_fileUploadWrapper_1wrnk_2", x1 = "_disabled_1wrnk_14", w1 = "_content_1wrnk_20", k1 = "_icon_1wrnk_31", S1 = "_text_1wrnk_37", C1 = "_description_1wrnk_43", z1 = "_progressBar_1wrnk_49", j1 = "_progressFill_1wrnk_58", T1 = "_idle_1wrnk_64", P1 = "_dragActive_1wrnk_68", E1 = "_uploading_1wrnk_78", N1 = "_success_1wrnk_86", I1 = "_error_1wrnk_95", L1 = "_preview_1wrnk_104", A1 = "_previewItem_1wrnk_111", M1 = "_previewImage_1wrnk_120", O1 = "_previewFile_1wrnk_127", R1 = "_dropzone_1wrnk_137", D1 = "_multipleFiles_1wrnk_137", B1 = "_dragDropZone_1wrnk_138", $1 = "_imageUploader_1wrnk_144", F1 = "_galleryUploader_1wrnk_144", q1 = "_avatarUploader_1wrnk_153", H1 = "_profilePicture_1wrnk_153", Z1 = "_documentUploader_1wrnk_173", U1 = "_fileButton_1wrnk_179", W1 = "_bulkUploader_1wrnk_215", V1 = "_light_1wrnk_224", G1 = "_dark_1wrnk_229", K1 = "_gradient_1wrnk_234", Y1 = "_small_1wrnk_239", J1 = "_medium_1wrnk_245", X1 = "_large_1wrnk_251", Q1 = "_borderNone_1wrnk_257", eg = "_borderSolid_1wrnk_261", tg = "_borderDashed_1wrnk_265", ig = "_borderDotted_1wrnk_269", ng = "_borderRadiusNone_1wrnk_273", ag = "_borderRadiusSmall_1wrnk_277", og = "_borderRadiusMedium_1wrnk_281", rg = "_borderRadiusLarge_1wrnk_285", sg = "_borderRadiusRound_1wrnk_289", lg = "_shadowNone_1wrnk_293", cg = "_shadowSmall_1wrnk_297", _g = "_shadowMedium_1wrnk_301", dg = "_shadowLarge_1wrnk_305", ug = "_primary_1wrnk_309", mg = "_secondary_1wrnk_315", hg = "_warning_1wrnk_327", pg = "_pulse_1wrnk_339", fg = "_bounce_1wrnk_351", gg = "_subtle_1wrnk_366", bg = "_dropzoneActive_1wrnk_397", yg = "_dropzoneReject_1wrnk_403", vg = "_dropzoneDisabled_1wrnk_408", xg = "_fileInput_1wrnk_414", wg = "_fileInputHidden_1wrnk_425", kg = "_uploadContent_1wrnk_429", Sg = "_uploadIcon_1wrnk_438", Cg = "_uploadText_1wrnk_444", zg = "_uploadSubtext_1wrnk_450", jg = "_uploadButton_1wrnk_456", Tg = "_filePreview_1wrnk_473", Pg = "_fileList_1wrnk_477", Eg = "_fileGrid_1wrnk_483", Ng = "_fileCompact_1wrnk_489", Ig = "_fileItem_1wrnk_495", Lg = "_fileItemGrid_1wrnk_509", Ag = "_fileItemCompact_1wrnk_515", Mg = "_filePreviewImage_1wrnk_520", Og = "_filePreviewImageLarge_1wrnk_528", Rg = "_filePreviewImageSmall_1wrnk_535", Dg = "_fileIcon_1wrnk_540", Bg = "_fileInfo_1wrnk_553", $g = "_fileName_1wrnk_558", Fg = "_fileSize_1wrnk_566", qg = "_fileStatus_1wrnk_571", Hg = "_fileActions_1wrnk_578", Zg = "_fileAction_1wrnk_578", Ug = "_fileActionRemove_1wrnk_599", Wg = "_progressText_1wrnk_620", Vg = "_statusPending_1wrnk_626", Gg = "_statusUploading_1wrnk_630", Kg = "_statusSuccess_1wrnk_634", Yg = "_statusError_1wrnk_638", Jg = "_statusIcon_1wrnk_642", Xg = "_spinner_1wrnk_646", Qg = "_spin_1wrnk_646", eb = "_avatarPreview_1wrnk_681", tb = "_avatarPlaceholder_1wrnk_688", ib = "_avatarIcon_1wrnk_697", nb = "_avatarOverlay_1wrnk_703", ab = "_errorMessage_1wrnk_724", ob = "_errorIcon_1wrnk_734", rb = "_loading_1wrnk_739", sb = "_loadingOverlay_1wrnk_744", lb = "_loadingSpinner_1wrnk_757", ut = {
  fileUploadWrapper: v1,
  disabled: x1,
  content: w1,
  icon: k1,
  text: S1,
  description: C1,
  progressBar: z1,
  progressFill: j1,
  idle: T1,
  dragActive: P1,
  uploading: E1,
  success: N1,
  error: I1,
  preview: L1,
  previewItem: A1,
  previewImage: M1,
  previewFile: O1,
  dropzone: R1,
  multipleFiles: D1,
  dragDropZone: B1,
  imageUploader: $1,
  galleryUploader: F1,
  avatarUploader: q1,
  profilePicture: H1,
  documentUploader: Z1,
  fileButton: U1,
  bulkUploader: W1,
  light: V1,
  dark: G1,
  gradient: K1,
  small: Y1,
  medium: J1,
  large: X1,
  borderNone: Q1,
  borderSolid: eg,
  borderDashed: tg,
  borderDotted: ig,
  borderRadiusNone: ng,
  borderRadiusSmall: ag,
  borderRadiusMedium: og,
  borderRadiusLarge: rg,
  borderRadiusRound: sg,
  shadowNone: lg,
  shadowSmall: cg,
  shadowMedium: _g,
  shadowLarge: dg,
  primary: ug,
  secondary: mg,
  warning: hg,
  pulse: pg,
  bounce: fg,
  subtle: gg,
  dropzoneActive: bg,
  dropzoneReject: yg,
  dropzoneDisabled: vg,
  fileInput: xg,
  fileInputHidden: wg,
  uploadContent: kg,
  uploadIcon: Sg,
  uploadText: Cg,
  uploadSubtext: zg,
  uploadButton: jg,
  filePreview: Tg,
  fileList: Pg,
  fileGrid: Eg,
  fileCompact: Ng,
  fileItem: Ig,
  fileItemGrid: Lg,
  fileItemCompact: Ag,
  filePreviewImage: Mg,
  filePreviewImageLarge: Og,
  filePreviewImageSmall: Rg,
  fileIcon: Dg,
  fileInfo: Bg,
  fileName: $g,
  fileSize: Fg,
  fileStatus: qg,
  fileActions: Hg,
  fileAction: Zg,
  fileActionRemove: Ug,
  progressText: Wg,
  statusPending: Vg,
  statusUploading: Gg,
  statusSuccess: Kg,
  statusError: Yg,
  statusIcon: Jg,
  spinner: Xg,
  spin: Qg,
  avatarPreview: eb,
  avatarPlaceholder: tb,
  avatarIcon: ib,
  avatarOverlay: nb,
  errorMessage: ab,
  errorIcon: ob,
  loading: rb,
  loadingOverlay: sb,
  loadingSpinner: lb
}, cb = {
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
}, co = vt(
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
), _b = vt(
  "user/logout",
  async () => {
    await fetch("/api/auth/logout", { method: "POST" });
  }
), _o = vt(
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
), uo = vt(
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
), rl = Ut({
  name: "user",
  initialState: cb,
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
    t.addCase(co.pending, (n) => {
      n.isLoading = !0, n.authError = null;
    }).addCase(co.fulfilled, (n, a) => {
      n.isLoading = !1, n.isAuthenticated = !0, n.profile = a.payload.user, n.sessionExpiry = a.payload.sessionExpiry;
    }).addCase(co.rejected, (n, a) => {
      n.isLoading = !1, n.authError = a.error.message || "Login failed";
    }), t.addCase(_b.fulfilled, (n) => {
      n.isAuthenticated = !1, n.profile = null, n.sessionExpiry = null;
    }), t.addCase(_o.pending, (n) => {
      n.profileLoading = !0, n.profileError = null;
    }).addCase(
      _o.fulfilled,
      (n, a) => {
        n.profileLoading = !1, n.profile && (n.profile = {
          ...n.profile,
          ...a.payload
        });
      }
    ).addCase(
      _o.rejected,
      (n, a) => {
        n.profileLoading = !1, n.profileError = a.error.message || "Profile update failed";
      }
    ), t.addCase(uo.pending, (n) => {
      n.preferencesLoading = !0, n.preferencesError = null;
    }).addCase(
      uo.fulfilled,
      (n, a) => {
        n.preferencesLoading = !1, n.preferences = {
          ...n.preferences,
          ...a.payload
        };
      }
    ).addCase(
      uo.rejected,
      (n, a) => {
        n.preferencesLoading = !1, n.preferencesError = a.error.message || "Preferences update failed";
      }
    );
  }
}), {
  clearAuthError: rC,
  updateLastActivity: sC,
  setSessionExpiry: lC,
  toggleChatEnabled: cC,
  toggleProfanityFilter: _C,
  setPrivacyLevel: dC,
  clearUserData: uC
} = rl.actions, sl = rl.reducer, db = [
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
], ub = {
  // Current theme
  currentTheme: "light",
  previousTheme: null,
  // Theme system
  systemPreference: "light",
  followSystem: !1,
  // Available themes
  availableThemes: db,
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
}, ll = Ut({
  name: "theme",
  initialState: ub,
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
  setTheme: mC,
  setSystemPreference: hC,
  setFollowSystem: pC,
  addCustomTheme: fC,
  removeCustomTheme: gC,
  setPalette: bC,
  addCustomPalette: yC,
  removeCustomPalette: vC,
  updateCustomization: xC,
  resetCustomization: wC,
  updateAccessibility: kC,
  toggleHighContrast: SC,
  toggleReducedMotion: CC,
  toggleLargeText: zC,
  toggleFocusRings: jC,
  setLoading: TC,
  setError: PC,
  clearError: EC,
  toggleTheme: NC,
  revertTheme: IC
} = ll.actions, cl = ll.reducer, mb = {
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
}, mo = vt(
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
), hb = vt(
  "socket/disconnect",
  async () => new Promise(
    (t) => {
      setTimeout(() => {
        t({ disconnectTime: Date.now() });
      }, 500);
    }
  )
), ho = vt(
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
), _l = Ut({
  name: "socket",
  initialState: mb,
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
    t.addCase(mo.pending, (n) => {
      n.isConnecting = !0, n.connectionError = null;
    }).addCase(mo.fulfilled, (n, a) => {
      n.isConnecting = !1, n.isConnected = !0, n.socketId = a.payload.socketId, n.url = a.payload.url, n.stats.connectTime = a.payload.connectTime, n.reconnectAttempts = 0;
    }).addCase(mo.rejected, (n, a) => {
      n.isConnecting = !1, n.isConnected = !1, n.connectionError = a.error.message || "Connection failed", n.reconnectAttempts += 1;
    }), t.addCase(
      hb.fulfilled,
      (n, a) => {
        n.isConnected = !1, n.isConnecting = !1, n.socketId = null, n.url = null, n.stats.connectTime && (n.stats.totalUptime += a.payload.disconnectTime - n.stats.connectTime), n.stats.connectTime = null;
      }
    ), t.addCase(ho.pending, (n, a) => {
      const r = {
        id: `temp-${Date.now()}`,
        type: a.meta.arg.type,
        data: a.meta.arg.data,
        timestamp: Date.now(),
        acknowledged: !1
      };
      n.pendingMessages.push(r);
    }).addCase(ho.fulfilled, (n, a) => {
      n.pendingMessages = n.pendingMessages.filter(
        (r) => r.id !== a.payload.id
      ), n.stats.messagesSent += 1;
    }).addCase(ho.rejected, (n, a) => {
      n.connectionError = a.error.message || "Failed to send message";
    });
  }
}), {
  setConnecting: LC,
  setConnectionError: AC,
  clearConnectionError: MC,
  receiveMessage: OC,
  acknowledgeMessage: RC,
  clearMessages: DC,
  clearMessageHistory: BC,
  registerEvent: $C,
  unregisterEvent: FC,
  toggleEvent: qC,
  updateSettings: HC,
  updateHeartbeat: ZC,
  incrementReconnectCount: UC,
  updateUptime: WC,
  resetStats: VC,
  resetReconnectAttempts: GC
} = _l.actions, dl = _l.reducer, pb = {
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
}, po = vt(
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
), fb = vt(
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
), fo = vt(
  "game/fetchMatches",
  async (t = {}) => {
    const n = await fetch(
      `/api/game/matches?limit=${t.limit || 20}&offset=${t.offset || 0}`
    );
    if (!n.ok)
      throw new Error("Failed to fetch matches");
    return n.json();
  }
), go = vt(
  "game/fetchLeaderboard",
  async (t) => {
    const n = await fetch(
      `/api/game/leaderboard/${t}`
    );
    if (!n.ok)
      throw new Error("Failed to fetch leaderboard");
    return { gameType: t, data: await n.json() };
  }
), bo = vt(
  "game/fetchAchievements",
  async () => {
    const t = await fetch("/api/game/achievements");
    if (!t.ok)
      throw new Error("Failed to fetch achievements");
    return t.json();
  }
), ul = Ut({
  name: "game",
  initialState: pb,
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
    t.addCase(po.pending, (n) => {
      n.sessionLoading = !0, n.sessionError = null;
    }).addCase(
      po.fulfilled,
      (n, a) => {
        n.sessionLoading = !1, n.currentSession = a.payload;
      }
    ).addCase(
      po.rejected,
      (n, a) => {
        n.sessionLoading = !1, n.sessionError = a.error.message || "Failed to create session";
      }
    ), t.addCase(
      fb.fulfilled,
      (n, a) => {
        n.currentSession = a.payload;
      }
    ), t.addCase(fo.pending, (n) => {
      n.matchesLoading = !0, n.matchesError = null;
    }).addCase(fo.fulfilled, (n, a) => {
      n.matchesLoading = !1, n.matches = a.payload;
    }).addCase(fo.rejected, (n, a) => {
      n.matchesLoading = !1, n.matchesError = a.error.message || "Failed to fetch matches";
    }), t.addCase(go.pending, (n) => {
      n.leaderboardsLoading = !0, n.leaderboardsError = null;
    }).addCase(
      go.fulfilled,
      (n, a) => {
        n.leaderboardsLoading = !1, n.leaderboards[a.payload.gameType] = a.payload.data;
      }
    ).addCase(
      go.rejected,
      (n, a) => {
        n.leaderboardsLoading = !1, n.leaderboardsError = a.error.message || "Failed to fetch leaderboard";
      }
    ), t.addCase(bo.pending, (n) => {
      n.achievementsLoading = !0, n.achievementsError = null;
    }).addCase(
      bo.fulfilled,
      (n, a) => {
        n.achievementsLoading = !1, n.achievements = a.payload;
      }
    ).addCase(
      bo.rejected,
      (n, a) => {
        n.achievementsLoading = !1, n.achievementsError = a.error.message || "Failed to fetch achievements";
      }
    );
  }
}), {
  updateSession: KC,
  endSession: YC,
  clearSession: JC,
  updatePlayer: XC,
  setPlayerReady: QC,
  unlockAchievement: e6,
  updateAchievementProgress: t6,
  updatePlayerStats: i6,
  incrementGameCount: n6,
  recordWin: a6,
  recordLoss: o6,
  updatePreferences: r6,
  toggleSound: s6,
  toggleMusic: l6,
  toggleAnimations: c6,
  setDifficulty: _6,
  clearSessionError: d6,
  clearMatchesError: u6,
  clearLeaderboardsError: m6,
  clearAchievementsError: h6
} = ul.actions, ml = ul.reducer, Bi = {
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
}, yo = vt(
  "settings/load",
  async () => {
    const t = await fetch("/api/settings");
    if (!t.ok)
      throw new Error("Failed to load settings");
    return t.json();
  }
), vo = vt(
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
), xo = vt(
  "settings/sync",
  async () => {
    const t = await fetch("/api/settings/sync");
    if (!t.ok)
      throw new Error("Failed to sync settings");
    return t.json();
  }
), hl = Ut({
  name: "settings",
  initialState: Bi,
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
        ...Bi,
        isLoading: n,
        isSyncing: a,
        error: r,
        syncError: c,
        lastUpdated: Date.now()
      });
    },
    resetSection: (t, n) => {
      const a = n.payload;
      a === "notifications" ? t.notifications = Bi.notifications : a === "privacy" ? t.privacy = Bi.privacy : a === "accessibility" ? t.accessibility = Bi.accessibility : a === "performance" ? t.performance = Bi.performance : a === "security" && (t.security = Bi.security), t.lastUpdated = Date.now();
    }
  },
  extraReducers: (t) => {
    t.addCase(yo.pending, (n) => {
      n.isLoading = !0, n.error = null;
    }).addCase(yo.fulfilled, (n, a) => {
      n.isLoading = !1, Object.assign(n, a.payload), n.lastUpdated = Date.now();
    }).addCase(yo.rejected, (n, a) => {
      n.isLoading = !1, n.error = a.error.message || "Failed to load settings";
    }), t.addCase(vo.pending, (n) => {
      n.isLoading = !0, n.error = null;
    }).addCase(vo.fulfilled, (n) => {
      n.isLoading = !1, n.lastUpdated = Date.now();
    }).addCase(vo.rejected, (n, a) => {
      n.isLoading = !1, n.error = a.error.message || "Failed to save settings";
    }), t.addCase(xo.pending, (n) => {
      n.isSyncing = !0, n.syncError = null;
    }).addCase(xo.fulfilled, (n, a) => {
      n.isSyncing = !1, Object.assign(n, a.payload), n.lastSynced = Date.now();
    }).addCase(xo.rejected, (n, a) => {
      n.isSyncing = !1, n.syncError = a.error.message || "Failed to sync settings";
    });
  }
}), {
  updateNotificationSettings: p6,
  toggleNotifications: f6,
  updatePrivacySettings: g6,
  setProfileVisibility: b6,
  updateAccessibilitySettings: y6,
  toggleHighContrast: v6,
  toggleLargeText: x6,
  toggleReducedMotion: w6,
  updatePerformanceSettings: k6,
  setGraphicsQuality: S6,
  toggleAnimations: C6,
  updateSecuritySettings: z6,
  toggleTwoFactorAuth: j6,
  setSessionTimeout: T6,
  setLanguage: P6,
  setTimezone: E6,
  setTimeFormat: N6,
  toggleAutoSave: I6,
  toggleAutoSync: L6,
  toggleOfflineMode: A6,
  toggleDebugMode: M6,
  updateStorageUsed: O6,
  updateCacheSize: R6,
  clearCache: D6,
  setError: B6,
  setSyncError: $6,
  clearError: F6,
  clearSyncError: q6,
  resetToDefaults: H6,
  resetSection: Z6
} = hl.actions, pl = hl.reducer, gb = {
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
}, Ti = Ut({
  name: "notifications",
  initialState: gb,
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
  addNotification: U6,
  addSuccess: W6,
  addError: V6,
  addWarning: G6,
  addInfo: K6,
  addAchievement: Y6,
  dismissNotification: J6,
  dismissAll: X6,
  markAsRead: Q6,
  markAllAsRead: e5,
  executeAction: t5,
  updateSettings: i5,
  toggleSound: n5,
  clearHistory: a5,
  clearAll: o5,
  removeByType: r5,
  setError: s5,
  clearError: l5,
  setLoading: c5,
  processExpiredNotifications: _5
} = Ti.actions, fl = Ti.reducer, bb = {
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
}, yb = {
  sessions: {},
  activeSessionId: null,
  files: [],
  selectedFiles: [],
  globalConfig: bb,
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
}, wo = vt(
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
), vb = vt(
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
), xb = vt(
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
), ua = Ut({
  name: "files",
  initialState: yb,
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
    t.addCase(wo.pending, (n, a) => {
      const { fileId: r } = a.meta.arg;
      ua.caseReducers.updateFileStatus(n, {
        type: "updateFileStatus",
        payload: { fileId: r, status: "uploading" }
      });
    }).addCase(wo.fulfilled, (n, a) => {
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
    }).addCase(wo.rejected, (n, a) => {
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
      vb.fulfilled,
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
      xb.fulfilled,
      (n, a) => {
        n.validationErrors = a.payload;
      }
    );
  }
}), {
  createSession: d5,
  removeSession: u5,
  setActiveSession: m5,
  addFiles: h5,
  removeFile: p5,
  updateFileStatus: f5,
  updateFileProgress: g5,
  selectFile: b5,
  deselectFile: y5,
  selectAllFiles: v5,
  deselectAllFiles: x5,
  updateGlobalConfig: w5,
  updateSessionConfig: k5,
  setValidationErrors: S5,
  clearValidationErrors: C5,
  updateStats: z5,
  incrementUploadCount: j5,
  clearCompletedFiles: T5,
  clearErrorFiles: P5,
  retryFailedFiles: E5,
  setError: N5,
  clearError: I5,
  setLoading: L5,
  // Component state actions
  initializeComponentState: wb,
  setComponentDragActive: ko,
  setComponentUploadProgress: us,
  setComponentValidationErrors: ms,
  setComponentSelectedFiles: kb,
  clearComponentState: A5,
  removeComponentState: Sb
} = ua.actions, Cb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.dragActive) || !1;
}, zb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.uploadProgress) || 0;
}, jb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.validationErrors) || [];
}, Tb = (t) => (n) => {
  var a;
  return ((a = n.files.componentStates[t]) == null ? void 0 : a.selectedFiles) || [];
}, gl = ua.reducer, Pb = {
  activeModals: [],
  globalLoading: !1,
  globalError: null
}, bl = Ut({
  name: "modals",
  initialState: Pb,
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
  openModal: Eb,
  closeModal: M5,
  removeModal: O5,
  closeAllModals: R5,
  updateModalData: D5,
  setModalForms: hs,
  clearModalData: B5,
  setModalLoading: ps,
  setModalError: aa,
  setModalSuccess: Nb,
  resetModalState: $5,
  setGlobalLoading: F5,
  setGlobalError: q5,
  resetGlobalState: H5
} = bl.actions, Ib = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.data) || {};
}, Lb = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.loading) || !1;
}, Ab = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.error) || null;
}, Mb = (t, n) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (r) => r.id === n
  )) == null ? void 0 : a.success) || !1;
}, yl = bl.reducer, Oo = {
  sorting: { column: "", direction: "asc" },
  filters: {},
  searchTerm: "",
  selectedRows: /* @__PURE__ */ new Set(),
  expandedRows: /* @__PURE__ */ new Set(),
  editingCell: null
}, Ob = {
  componentStates: {}
}, vl = Ut({
  name: "table",
  initialState: Ob,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const {
        componentId: a,
        initialState: r = {}
      } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...Oo,
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
        ...Oo
      });
    }
  }
}), {
  initializeComponentState: Rb,
  setSorting: Db,
  setFilters: Z5,
  updateFilter: U5,
  setSearchTerm: Bb,
  setSelectedRows: fs,
  addSelectedRow: W5,
  removeSelectedRow: V5,
  clearSelectedRows: G5,
  setExpandedRows: $b,
  toggleRowExpansion: K5,
  setEditingCell: So,
  clearEditingCell: Y5,
  removeComponentState: Fb,
  clearAllComponentStates: J5,
  resetTableState: X5
} = vl.actions, qb = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.sorting) || Oo.sorting;
}, Hb = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.filters) || {};
}, Zb = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.searchTerm) || "";
}, Ub = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.selectedRows) || /* @__PURE__ */ new Set();
}, Wb = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.expandedRows) || /* @__PURE__ */ new Set();
}, Vb = (t, n) => {
  var a;
  return ((a = t.table.componentStates[n]) == null ? void 0 : a.editingCell) || null;
}, xl = vl.reducer, gs = {
  isOpen: !1,
  isMobile: !1,
  activeItemId: null,
  mobileBreakpoint: 768
}, Gb = {
  componentStates: {},
  defaultMobileBreakpoint: 768,
  globalResponsiveEnabled: !0
}, wl = Ut({
  name: "navigation",
  initialState: Gb,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const {
        componentId: a,
        initialState: r = {}
      } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...gs,
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
        ...gs
      });
    }
  }
}), {
  initializeComponentState: Q5,
  setIsOpen: e8,
  toggleNavigation: t8,
  closeNavigation: i8,
  setIsMobile: n8,
  setMobileBreakpoint: a8,
  setActiveItem: o8,
  setDefaultMobileBreakpoint: r8,
  setGlobalResponsiveEnabled: s8,
  removeComponentState: l8,
  clearAllComponentStates: c8,
  resetNavigationState: _8
} = wl.actions, kl = wl.reducer, bs = {
  value: "",
  state: "default",
  errorText: "",
  showPassword: !1,
  isFocused: !1,
  isValid: !0,
  debounceTimeoutId: null
}, Kb = {
  componentStates: {},
  globalDebounceDelay: 300,
  globalValidationEnabled: !0
}, Sl = Ut({
  name: "input",
  initialState: Kb,
  reducers: {
    // Component state management
    initializeComponentState: (t, n) => {
      const {
        componentId: a,
        initialState: r = {}
      } = n.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...bs,
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
        ...bs
      });
    }
  }
}), {
  initializeComponentState: d8,
  setValue: u8,
  clearValue: m8,
  setInputState: h8,
  setErrorText: p8,
  clearError: f8,
  setShowPassword: g8,
  togglePasswordVisibility: b8,
  setFocused: y8,
  setValid: v8,
  setDebounceTimeout: x8,
  setGlobalDebounceDelay: w8,
  setGlobalValidationEnabled: k8,
  removeComponentState: S8,
  clearAllComponentStates: C8,
  resetInputState: z8
} = Sl.actions, Yb = (t, n) => {
  var a;
  return ((a = t.input.componentStates[n]) == null ? void 0 : a.value) || "";
}, Jb = (t, n) => {
  var a;
  return ((a = t.input.componentStates[n]) == null ? void 0 : a.state) || "default";
}, Xb = (t, n) => {
  var a;
  return ((a = t.input.componentStates[n]) == null ? void 0 : a.showPassword) || !1;
}, Cl = Sl.reducer;
Vs({
  reducer: {
    // User domain - authentication, profile, preferences
    user: sl,
    // UI domain - component states, loading, errors, form data
    ui: nl,
    // Theme domain - themes, palettes, dark mode
    theme: cl,
    // Socket domain - connection state, real-time events
    socket: dl,
    // Game domain - game state, matches, leaderboards
    game: ml,
    // Settings domain - application settings, configurations
    settings: pl,
    // Notification domain - alerts, toasts, achievements
    notifications: fl,
    // File domain - uploads, file management
    files: gl,
    // Modal domain - modal states and data
    modals: yl,
    // Admin domain - debug panels, performance monitoring, error logging
    admin: Js,
    // Table domain - table state, sorting, filtering, selection
    table: xl,
    // Navigation domain - navigation open/close, responsive, active items
    navigation: kl,
    // Input domain - input values, states, validation, focus
    input: Cl
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
const ya = () => vi(), Xt = Nt, Qb = {
  user: sl,
  ui: nl,
  theme: cl,
  socket: dl,
  game: ml,
  settings: pl,
  notifications: fl,
  files: gl,
  modals: yl,
  admin: Js,
  table: xl,
  navigation: kl,
  input: Cl
};
Vs({
  reducer: Qb
});
const zl = Le((t, n) => {
  var Q, ne, ue, oe, ke, he, Z;
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
    maxFiles: x,
    maxSize: k,
    onFilesSelected: z,
    onFilesDrop: E,
    onUploadProgress: j,
    onUploadComplete: D,
    onUploadError: F,
    children: q,
    placeholder: M,
    dragActiveText: O,
    errorText: P,
    successText: N,
    showPreview: J = !1,
    allowedTypes: $,
    ...W
  } = t, T = Ho(a), A = b1(
    a
  ), V = ya(), ee = r || `file-upload-${a}-${Date.now()}`;
  Te(() => (V(wb(ee)), () => {
    V(Sb(ee));
  }), [V, ee]);
  const le = Xt(
    (U) => Cb(ee)(U)
  ), ae = Xt(
    (U) => zb(ee)(U)
  ), te = Xt(
    (U) => Tb(ee)(U)
  ), ce = Xt(
    (U) => jb(ee)(U)
  ), w = it(null), G = y || ((ne = (Q = T.validation) == null ? void 0 : Q.allowedTypes) == null ? void 0 : ne.join(",")) || T.accept, v = g !== void 0 ? g : T.multiple, R = x || ((ue = T.validation) == null ? void 0 : ue.maxFiles), S = k || ((oe = T.validation) == null ? void 0 : oe.maxFileSize), H = Ze(
    (U) => {
      var Ge;
      const Oe = Array.from(U), nt = y1(Oe, {
        maxFiles: R,
        maxFileSize: S,
        allowedTypes: $ || ((Ge = T.validation) == null ? void 0 : Ge.allowedTypes)
      });
      if (!nt.isValid) {
        V(
          ms({
            componentId: ee,
            errors: nt.errors
          })
        ), F == null || F(nt.errors.join(", "));
        return;
      }
      if (V(
        ms({
          componentId: ee,
          errors: []
        })
      ), V(
        kb({
          componentId: ee,
          files: Oe
          // Use File[] directly for UI state
        })
      ), z == null || z(Oe), j) {
        V(
          us({
            componentId: ee,
            progress: 0
          })
        );
        const Ue = setInterval(() => {
          V(
            us({
              componentId: ee,
              progress: Math.min(ae + 10, 100)
            })
          ), ae >= 100 && (clearInterval(Ue), D == null || D(Oe));
        }, 100);
      }
    },
    [
      R,
      S,
      $,
      (ke = T.validation) == null ? void 0 : ke.allowedTypes,
      z,
      j,
      D,
      F
    ]
  ), ie = Ze(
    (U) => {
      U.target.files && H(U.target.files);
    },
    [H]
  ), X = Ze(
    (U) => {
      if (U.preventDefault(), V(
        ko({
          componentId: ee,
          dragActive: !1
        })
      ), p || u === "disabled") return;
      const Oe = U.dataTransfer.files;
      Oe && (H(Oe), E == null || E(Array.from(Oe)));
    },
    [p, u, H, E]
  ), K = Ze(
    (U) => {
      U.preventDefault(), !p && u !== "disabled" && V(
        ko({
          componentId: ee,
          dragActive: !0
        })
      );
    },
    [p, u, V, ee]
  ), fe = Ze(
    (U) => {
      U.preventDefault(), V(
        ko({
          componentId: ee,
          dragActive: !1
        })
      );
    },
    [V, ee]
  ), de = Ze(() => {
    var U;
    !p && u !== "disabled" && ((U = w.current) == null || U.click());
  }, [p, u]), Pe = [
    ut.fileUploadWrapper,
    ut[a],
    ut[c],
    ut[d],
    A.theme && ut[A.theme],
    le && ut.dragActive,
    u && ut[u],
    p && ut.disabled,
    ce.length > 0 && ut.error,
    h
  ].filter(Boolean).join(" "), be = () => {
    var U;
    return u === "uploading" ? `Uploading... ${ae}%` : u === "success" ? N || "Upload successful!" : u === "error" || ce.length > 0 ? P || ce[0] || "Upload failed" : le ? O || "Drop files here" : te.length > 0 ? `${te.length} file${te.length > 1 ? "s" : ""} selected` : M || ((U = T.display) == null ? void 0 : U.placeholder) || "Choose files or drag and drop";
  };
  return /* @__PURE__ */ l.jsxs(
    f,
    {
      ref: n,
      className: Pe,
      onDrop: X,
      onDragOver: K,
      onDragLeave: fe,
      onClick: de,
      role: "button",
      tabIndex: p ? -1 : 0,
      "aria-disabled": p,
      ...W,
      children: [
        /* @__PURE__ */ l.jsx(
          "input",
          {
            ref: w,
            type: "file",
            accept: G,
            multiple: v,
            onChange: ie,
            style: { display: "none" },
            disabled: p || u === "disabled"
          }
        ),
        q || /* @__PURE__ */ l.jsxs(f, { className: ut.content, children: [
          ((he = T.display) == null ? void 0 : he.icon) && /* @__PURE__ */ l.jsx(f, { className: ut.icon, children: T.display.icon }),
          /* @__PURE__ */ l.jsx(f, { className: ut.text, children: be() }),
          ((Z = T.display) == null ? void 0 : Z.description) && /* @__PURE__ */ l.jsx(f, { className: ut.description, children: T.display.description }),
          u === "uploading" && /* @__PURE__ */ l.jsx(f, { className: ut.progressBar, children: /* @__PURE__ */ l.jsx(
            f,
            {
              className: ut.progressFill,
              style: { width: `${ae}%` }
            }
          ) })
        ] }),
        J && te.length > 0 && /* @__PURE__ */ l.jsx(f, { className: ut.preview, children: te.map(
          (U, Oe) => /* @__PURE__ */ l.jsx(
            f,
            {
              className: ut.previewItem,
              children: U.type.startsWith("image/") ? /* @__PURE__ */ l.jsx(
                "img",
                {
                  src: URL.createObjectURL(U),
                  alt: U.name,
                  className: ut.previewImage
                }
              ) : /* @__PURE__ */ l.jsx(f, { className: ut.previewFile, children: U.name })
            },
            Oe
          )
        ) })
      ]
    }
  );
});
zl.displayName = "FileUpload";
const j8 = di(zl), ey = "_fieldWrapper_7czb0_117", ty = "_fieldContainer_7czb0_137", iy = "_label_7czb0_151", ny = "_required_7czb0_161", ay = "_errorText_7czb0_264", oy = "_helperText_7czb0_272", zi = {
  fieldWrapper: ey,
  fieldContainer: ty,
  label: iy,
  required: ny,
  errorText: ay,
  helperText: oy
}, ry = "_container_1cs1w_129", sy = "_flex_1cs1w_260", ly = "_grid_1cs1w_356", cy = "_relative_1cs1w_738", _y = "_absolute_1cs1w_742", dy = "_fixed_1cs1w_746", uy = "_sticky_1cs1w_750", my = "_truncate_1cs1w_889", hy = "_border_1cs1w_949", py = "_rounded_1cs1w_989", fy = "_shadow_1cs1w_1021", gy = "_transition_1cs1w_1093", by = "_small_1cs1w_1593", yy = "_large_1cs1w_1597", vy = "_card_1cs1w_1645", xy = "_inputContainer_1cs1w_1770", wy = "_disabled_1cs1w_1777", ky = "_label_1cs1w_1782", Sy = "_required_1cs1w_1789", Cy = "_inputWrapper_1cs1w_1794", zy = "_input_1cs1w_1659", jy = "_hasIcon_1cs1w_1823", Ty = "_hasPrefix_1cs1w_1826", Py = "_hasSuffix_1cs1w_1829", Ey = "_icon_1cs1w_1837", Ny = "_prefix_1cs1w_1838", Iy = "_suffix_1cs1w_1839", Ly = "_helperText_1cs1w_1912", Ay = "_passwordToggle_1cs1w_1951", My = "_clearButton_1cs1w_1952", Et = {
  container: ry,
  "container-sm": "_container-sm_1cs1w_145",
  "container-md": "_container-md_1cs1w_161",
  "container-lg": "_container-lg_1cs1w_177",
  "container-xl": "_container-xl_1cs1w_193",
  "container-2xl": "_container-2xl_1cs1w_209",
  "safe-area": "_safe-area_1cs1w_225",
  "overflow-hidden": "_overflow-hidden_1cs1w_231",
  "overflow-auto": "_overflow-auto_1cs1w_235",
  "overflow-x-auto": "_overflow-x-auto_1cs1w_240",
  "overflow-y-auto": "_overflow-y-auto_1cs1w_246",
  "box-border": "_box-border_1cs1w_252",
  "box-content": "_box-content_1cs1w_256",
  flex: sy,
  "flex-col": "_flex-col_1cs1w_264",
  "flex-row": "_flex-row_1cs1w_269",
  "flex-wrap": "_flex-wrap_1cs1w_274",
  "flex-nowrap": "_flex-nowrap_1cs1w_279",
  "flex-center": "_flex-center_1cs1w_284",
  "flex-between": "_flex-between_1cs1w_290",
  "justify-start": "_justify-start_1cs1w_296",
  "justify-center": "_justify-center_1cs1w_300",
  "justify-end": "_justify-end_1cs1w_304",
  "justify-between": "_justify-between_1cs1w_308",
  "justify-around": "_justify-around_1cs1w_312",
  "items-start": "_items-start_1cs1w_316",
  "items-center": "_items-center_1cs1w_320",
  "items-end": "_items-end_1cs1w_324",
  "items-stretch": "_items-stretch_1cs1w_328",
  "flex-1": "_flex-1_1cs1w_332",
  "flex-auto": "_flex-auto_1cs1w_336",
  "flex-none": "_flex-none_1cs1w_340",
  "flex-grow": "_flex-grow_1cs1w_344",
  "flex-shrink": "_flex-shrink_1cs1w_348",
  "flex-shrink-0": "_flex-shrink-0_1cs1w_352",
  grid: ly,
  "grid-auto-fit": "_grid-auto-fit_1cs1w_360",
  "grid-auto-fill": "_grid-auto-fill_1cs1w_367",
  "grid-cols-1": "_grid-cols-1_1cs1w_374",
  "grid-cols-2": "_grid-cols-2_1cs1w_378",
  "grid-cols-3": "_grid-cols-3_1cs1w_382",
  "grid-cols-4": "_grid-cols-4_1cs1w_386",
  "grid-cols-6": "_grid-cols-6_1cs1w_390",
  "grid-cols-12": "_grid-cols-12_1cs1w_394",
  "gap-0": "_gap-0_1cs1w_398",
  "gap-1": "_gap-1_1cs1w_402",
  "gap-2": "_gap-2_1cs1w_406",
  "gap-3": "_gap-3_1cs1w_410",
  "gap-4": "_gap-4_1cs1w_414",
  "gap-5": "_gap-5_1cs1w_418",
  "gap-6": "_gap-6_1cs1w_422",
  "gap-8": "_gap-8_1cs1w_426",
  "gap-10": "_gap-10_1cs1w_430",
  "gap-12": "_gap-12_1cs1w_434",
  "p-0": "_p-0_1cs1w_438",
  "p-1": "_p-1_1cs1w_442",
  "p-2": "_p-2_1cs1w_446",
  "p-3": "_p-3_1cs1w_450",
  "p-4": "_p-4_1cs1w_454",
  "p-5": "_p-5_1cs1w_458",
  "p-6": "_p-6_1cs1w_462",
  "p-8": "_p-8_1cs1w_466",
  "p-10": "_p-10_1cs1w_470",
  "p-12": "_p-12_1cs1w_474",
  "px-0": "_px-0_1cs1w_478",
  "px-1": "_px-1_1cs1w_483",
  "px-2": "_px-2_1cs1w_488",
  "px-3": "_px-3_1cs1w_493",
  "px-4": "_px-4_1cs1w_498",
  "px-6": "_px-6_1cs1w_503",
  "py-0": "_py-0_1cs1w_508",
  "py-1": "_py-1_1cs1w_513",
  "py-2": "_py-2_1cs1w_518",
  "py-3": "_py-3_1cs1w_523",
  "py-4": "_py-4_1cs1w_528",
  "py-6": "_py-6_1cs1w_533",
  "m-0": "_m-0_1cs1w_538",
  "m-1": "_m-1_1cs1w_542",
  "m-2": "_m-2_1cs1w_546",
  "m-3": "_m-3_1cs1w_550",
  "m-4": "_m-4_1cs1w_554",
  "m-auto": "_m-auto_1cs1w_558",
  "mx-auto": "_mx-auto_1cs1w_562",
  "my-auto": "_my-auto_1cs1w_567",
  "mx-0": "_mx-0_1cs1w_572",
  "mx-1": "_mx-1_1cs1w_577",
  "mx-2": "_mx-2_1cs1w_582",
  "mx-3": "_mx-3_1cs1w_587",
  "mx-4": "_mx-4_1cs1w_592",
  "my-0": "_my-0_1cs1w_597",
  "my-1": "_my-1_1cs1w_602",
  "my-2": "_my-2_1cs1w_607",
  "my-3": "_my-3_1cs1w_612",
  "my-4": "_my-4_1cs1w_617",
  "w-full": "_w-full_1cs1w_622",
  "w-auto": "_w-auto_1cs1w_626",
  "w-fit": "_w-fit_1cs1w_630",
  "w-min": "_w-min_1cs1w_634",
  "w-max": "_w-max_1cs1w_638",
  "max-w-none": "_max-w-none_1cs1w_642",
  "max-w-xs": "_max-w-xs_1cs1w_646",
  "max-w-sm": "_max-w-sm_1cs1w_650",
  "max-w-md": "_max-w-md_1cs1w_654",
  "max-w-lg": "_max-w-lg_1cs1w_658",
  "max-w-xl": "_max-w-xl_1cs1w_662",
  "max-w-2xl": "_max-w-2xl_1cs1w_666",
  "max-w-3xl": "_max-w-3xl_1cs1w_670",
  "max-w-4xl": "_max-w-4xl_1cs1w_674",
  "max-w-5xl": "_max-w-5xl_1cs1w_678",
  "max-w-6xl": "_max-w-6xl_1cs1w_682",
  "max-w-7xl": "_max-w-7xl_1cs1w_686",
  "max-w-full": "_max-w-full_1cs1w_690",
  "min-w-0": "_min-w-0_1cs1w_694",
  "min-w-full": "_min-w-full_1cs1w_698",
  "h-auto": "_h-auto_1cs1w_702",
  "h-fit": "_h-fit_1cs1w_706",
  "h-full": "_h-full_1cs1w_710",
  "h-screen": "_h-screen_1cs1w_714",
  "max-h-full": "_max-h-full_1cs1w_718",
  "max-h-screen": "_max-h-screen_1cs1w_722",
  "min-h-0": "_min-h-0_1cs1w_726",
  "min-h-full": "_min-h-full_1cs1w_730",
  "min-h-screen": "_min-h-screen_1cs1w_734",
  relative: cy,
  absolute: _y,
  fixed: dy,
  sticky: uy,
  static: "_static_1cs1w_754",
  "inset-0": "_inset-0_1cs1w_758",
  "top-0": "_top-0_1cs1w_765",
  "right-0": "_right-0_1cs1w_769",
  "bottom-0": "_bottom-0_1cs1w_773",
  "left-0": "_left-0_1cs1w_777",
  "text-left": "_text-left_1cs1w_781",
  "text-center": "_text-center_1cs1w_785",
  "text-right": "_text-right_1cs1w_789",
  "text-justify": "_text-justify_1cs1w_793",
  "text-xs": "_text-xs_1cs1w_797",
  "text-sm": "_text-sm_1cs1w_801",
  "text-base": "_text-base_1cs1w_805",
  "text-lg": "_text-lg_1cs1w_809",
  "text-xl": "_text-xl_1cs1w_813",
  "text-2xl": "_text-2xl_1cs1w_817",
  "text-3xl": "_text-3xl_1cs1w_821",
  "text-4xl": "_text-4xl_1cs1w_825",
  "font-normal": "_font-normal_1cs1w_829",
  "font-medium": "_font-medium_1cs1w_833",
  "font-semibold": "_font-semibold_1cs1w_837",
  "font-bold": "_font-bold_1cs1w_841",
  "leading-tight": "_leading-tight_1cs1w_845",
  "leading-normal": "_leading-normal_1cs1w_849",
  "leading-relaxed": "_leading-relaxed_1cs1w_853",
  "text-primary": "_text-primary_1cs1w_857",
  "text-secondary": "_text-secondary_1cs1w_861",
  "text-muted": "_text-muted_1cs1w_865",
  "text-inverse": "_text-inverse_1cs1w_869",
  "text-blue": "_text-blue_1cs1w_873",
  "text-red": "_text-red_1cs1w_877",
  "text-green": "_text-green_1cs1w_881",
  "text-yellow": "_text-yellow_1cs1w_885",
  truncate: my,
  "text-ellipsis": "_text-ellipsis_1cs1w_896",
  "text-clip": "_text-clip_1cs1w_903",
  "bg-transparent": "_bg-transparent_1cs1w_909",
  "bg-white": "_bg-white_1cs1w_913",
  "bg-gray-50": "_bg-gray-50_1cs1w_917",
  "bg-gray-100": "_bg-gray-100_1cs1w_921",
  "bg-gray-200": "_bg-gray-200_1cs1w_925",
  "bg-primary": "_bg-primary_1cs1w_929",
  "bg-secondary": "_bg-secondary_1cs1w_933",
  "bg-success": "_bg-success_1cs1w_937",
  "bg-danger": "_bg-danger_1cs1w_941",
  "bg-warning": "_bg-warning_1cs1w_945",
  border: hy,
  "border-0": "_border-0_1cs1w_953",
  "border-t": "_border-t_1cs1w_957",
  "border-r": "_border-r_1cs1w_961",
  "border-b": "_border-b_1cs1w_965",
  "border-l": "_border-l_1cs1w_969",
  "border-gray-200": "_border-gray-200_1cs1w_973",
  "border-gray-300": "_border-gray-300_1cs1w_977",
  "border-primary": "_border-primary_1cs1w_981",
  "border-danger": "_border-danger_1cs1w_985",
  "rounded-none": "_rounded-none_1cs1w_989",
  "rounded-sm": "_rounded-sm_1cs1w_993",
  rounded: py,
  "rounded-md": "_rounded-md_1cs1w_1001",
  "rounded-lg": "_rounded-lg_1cs1w_1005",
  "rounded-xl": "_rounded-xl_1cs1w_1009",
  "rounded-2xl": "_rounded-2xl_1cs1w_1013",
  "rounded-full": "_rounded-full_1cs1w_1017",
  "shadow-none": "_shadow-none_1cs1w_1021",
  "shadow-sm": "_shadow-sm_1cs1w_1025",
  shadow: fy,
  "shadow-md": "_shadow-md_1cs1w_1033",
  "shadow-lg": "_shadow-lg_1cs1w_1037",
  "shadow-xl": "_shadow-xl_1cs1w_1041",
  "z-0": "_z-0_1cs1w_1045",
  "z-10": "_z-10_1cs1w_1049",
  "z-20": "_z-20_1cs1w_1053",
  "z-30": "_z-30_1cs1w_1057",
  "z-40": "_z-40_1cs1w_1061",
  "z-50": "_z-50_1cs1w_1065",
  "z-auto": "_z-auto_1cs1w_1069",
  "z-dropdown": "_z-dropdown_1cs1w_1073",
  "z-sticky": "_z-sticky_1cs1w_1077",
  "z-fixed": "_z-fixed_1cs1w_1081",
  "z-modal": "_z-modal_1cs1w_1085",
  "z-tooltip": "_z-tooltip_1cs1w_1089",
  "transition-none": "_transition-none_1cs1w_1093",
  "transition-all": "_transition-all_1cs1w_1097",
  "transition-fast": "_transition-fast_1cs1w_1101",
  "transition-slow": "_transition-slow_1cs1w_1105",
  "sr-only": "_sr-only_1cs1w_1109",
  "focus-ring": "_focus-ring_1cs1w_1121",
  "cursor-default": "_cursor-default_1cs1w_1127",
  "cursor-pointer": "_cursor-pointer_1cs1w_1131",
  "cursor-not-allowed": "_cursor-not-allowed_1cs1w_1135",
  "select-none": "_select-none_1cs1w_1139",
  "select-text": "_select-text_1cs1w_1143",
  "select-all": "_select-all_1cs1w_1147",
  "select-auto": "_select-auto_1cs1w_1151",
  "pointer-events-none": "_pointer-events-none_1cs1w_1155",
  "pointer-events-auto": "_pointer-events-auto_1cs1w_1159",
  "gap-sm": "_gap-sm_1cs1w_1163",
  "gap-md": "_gap-md_1cs1w_1167",
  "gap-lg": "_gap-lg_1cs1w_1171",
  "gap-xl": "_gap-xl_1cs1w_1175",
  "p-sm": "_p-sm_1cs1w_1179",
  "p-md": "_p-md_1cs1w_1183",
  "p-lg": "_p-lg_1cs1w_1187",
  "p-xl": "_p-xl_1cs1w_1191",
  "m-sm": "_m-sm_1cs1w_1195",
  "m-md": "_m-md_1cs1w_1199",
  "m-lg": "_m-lg_1cs1w_1203",
  "m-xl": "_m-xl_1cs1w_1207",
  "text-gray": "_text-gray_1cs1w_1211",
  "mobile:hidden": "_mobile:hidden_1cs1w_1216",
  "mobile:block": "_mobile:block_1cs1w_1219",
  "mobile:flex": "_mobile:flex_1cs1w_1222",
  "mobile:grid": "_mobile:grid_1cs1w_1225",
  "mobile:text-sm": "_mobile:text-sm_1cs1w_1228",
  "mobile:text-xs": "_mobile:text-xs_1cs1w_1231",
  "mobile:p-2": "_mobile:p-2_1cs1w_1234",
  "mobile:px-2": "_mobile:px-2_1cs1w_1237",
  "tablet:block": "_tablet:block_1cs1w_1243",
  "tablet:flex": "_tablet:flex_1cs1w_1246",
  "tablet:grid": "_tablet:grid_1cs1w_1249",
  "tablet:hidden": "_tablet:hidden_1cs1w_1252",
  "desktop:block": "_desktop:block_1cs1w_1257",
  "desktop:flex": "_desktop:flex_1cs1w_1260",
  "desktop:grid": "_desktop:grid_1cs1w_1263",
  "desktop:hidden": "_desktop:hidden_1cs1w_1266",
  "bg-gray": "_bg-gray_1cs1w_917",
  "border-secondary": "_border-secondary_1cs1w_1290",
  "border-gray": "_border-gray_1cs1w_973",
  "shadow-glow": "_shadow-glow_1cs1w_1326",
  "w-8": "_w-8_1cs1w_1374",
  "w-10": "_w-10_1cs1w_1378",
  "w-12": "_w-12_1cs1w_1382",
  "w-16": "_w-16_1cs1w_1386",
  "h-8": "_h-8_1cs1w_1390",
  "h-10": "_h-10_1cs1w_1394",
  "h-12": "_h-12_1cs1w_1398",
  "h-16": "_h-16_1cs1w_1402",
  "user-select-none": "_user-select-none_1cs1w_1418",
  transition: gy,
  "transition-colors": "_transition-colors_1cs1w_1426",
  "transition-transform": "_transition-transform_1cs1w_1430",
  "hover-scale": "_hover-scale_1cs1w_1434",
  "fade-in": "_fade-in_1cs1w_1441",
  "status-online": "_status-online_1cs1w_1453",
  "status-offline": "_status-offline_1cs1w_1463",
  "status-away": "_status-away_1cs1w_1473",
  "status-busy": "_status-busy_1cs1w_1483",
  "modal-overlay": "_modal-overlay_1cs1w_1493",
  "modal-content": "_modal-content_1cs1w_1507",
  "close-button-absolute": "_close-button-absolute_1cs1w_1521",
  small: by,
  large: yy,
  "primary-button": "_primary-button_1cs1w_1602",
  "secondary-button": "_secondary-button_1cs1w_1606",
  card: vy,
  "input-base": "_input-base_1cs1w_1659",
  "chat-window": "_chat-window_1cs1w_1691",
  "chat-message": "_chat-message_1cs1w_1702",
  "z-overlay": "_z-overlay_1cs1w_1727",
  "mobile-hidden": "_mobile-hidden_1cs1w_1732",
  "mobile-flex-col": "_mobile-flex-col_1cs1w_1735",
  "mobile-text-center": "_mobile-text-center_1cs1w_1738",
  "mobile-p-sm": "_mobile-p-sm_1cs1w_1741",
  "mobile-gap-sm": "_mobile-gap-sm_1cs1w_1744",
  "desktop-hidden": "_desktop-hidden_1cs1w_1749",
  "print-hidden": "_print-hidden_1cs1w_1754",
  inputContainer: xy,
  disabled: wy,
  label: ky,
  required: Sy,
  inputWrapper: Cy,
  input: zy,
  hasIcon: jy,
  hasPrefix: Ty,
  hasSuffix: Py,
  "size-small": "_size-small_1cs1w_1833",
  icon: Ey,
  prefix: Ny,
  suffix: Iy,
  "size-medium": "_size-medium_1cs1w_1843",
  "size-large": "_size-large_1cs1w_1848",
  "style-outlined": "_style-outlined_1cs1w_1858",
  "style-filled": "_style-filled_1cs1w_1870",
  "style-underlined": "_style-underlined_1cs1w_1883",
  "style-ghost": "_style-ghost_1cs1w_1896",
  "state-error": "_state-error_1cs1w_1908",
  helperText: Ly,
  "state-success": "_state-success_1cs1w_1916",
  "state-focus": "_state-focus_1cs1w_1924",
  passwordToggle: Ay,
  clearButton: My,
  "loading-shimmer": "_loading-shimmer_1cs1w_1"
}, jl = Le(
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
      errorText: x,
      successText: k,
      required: z = !1,
      disabled: E = !1,
      autoComplete: j,
      maxLength: D,
      minLength: F,
      pattern: q,
      customValidation: M,
      icon: O,
      prefix: P,
      suffix: N,
      clearable: J = !1,
      showPasswordToggle: $ = !1,
      debounceMs: W = 0,
      debounced: T = !1,
      onValueChange: A,
      containerClassName: V = "",
      labelClassName: ee = "",
      inputClassName: le = "",
      helperClassName: ae = "",
      iconClassName: te = "",
      className: ce = "",
      value: w,
      defaultValue: G,
      onChange: v,
      ...R
    } = t, S = r || `input-${a}-${tt.useId()}`, H = ya(), ie = Xt(
      (ne) => Yb(ne, S)
    );
    Xt(
      (ne) => Jb(ne, S)
    );
    const X = Xt(
      (ne) => Xb(ne, S)
    ), K = w !== void 0, fe = K ? w : ie, de = (ne) => {
      const ue = ne.target.value;
      K || H(
        setValue({
          componentId: S,
          value: ue
        })
      ), v && v(ne), A && (W > 0, A(ue)), M && M(ue);
    }, Pe = (ne) => {
      var ue;
      H(
        setFocused({
          componentId: S,
          isFocused: !0
        })
      ), (ue = t.onFocus) == null || ue.call(t, ne);
    }, be = (ne) => {
      var ue;
      H(
        setFocused({
          componentId: S,
          isFocused: !1
        })
      ), (ue = t.onBlur) == null || ue.call(t, ne);
    }, Q = c === "password" && X ? "text" : c;
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        className: `${Et.inputContainer} ${V}`,
        children: [
          g && /* @__PURE__ */ l.jsxs(
            "label",
            {
              className: `${Et.label} ${ee}`,
              children: [
                g,
                z && " *"
              ]
            }
          ),
          /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: `${Et.inputWrapper} ${Et[`size-${d}`]} ${Et[`style-${h}`]} ${Et[`state-${u}`]} ${ce}`,
              children: [
                O && /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: `${Et.icon} ${te}`,
                    children: O
                  }
                ),
                P && /* @__PURE__ */ l.jsx("span", { className: Et.prefix, children: P }),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    ref: n,
                    type: Q,
                    className: `${Et.input} ${le}`,
                    placeholder: p,
                    value: fe,
                    defaultValue: G,
                    required: z,
                    disabled: E,
                    maxLength: D,
                    minLength: F,
                    pattern: q,
                    autoComplete: j,
                    onChange: de,
                    onFocus: Pe,
                    onBlur: be,
                    ...R
                  }
                ),
                N && /* @__PURE__ */ l.jsx("span", { className: Et.suffix, children: N }),
                J && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: Et.clearButton,
                    "aria-label": "Clear input",
                    children: "×"
                  }
                ),
                $ && a === "password" && /* @__PURE__ */ l.jsx(
                  "button",
                  {
                    type: "button",
                    className: Et.passwordToggle,
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
              className: `${Et.helperText} ${ae}`,
              children: y
            }
          ),
          x && /* @__PURE__ */ l.jsx("div", { className: Et.stateError, children: x }),
          k && /* @__PURE__ */ l.jsx("div", { className: Et.stateSuccess, children: k })
        ]
      }
    );
  }
);
jl.displayName = "Input";
const ys = {
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
}, Tl = Le(
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
    maxLength: x,
    name: k,
    id: z,
    configuration: E,
    ...j
  }, D) => {
    var M;
    const q = {
      ...ys[t] || ys.standard,
      ...E
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        className: `textarea-container${p ? " " + p : ""}`,
        children: [
          c && /* @__PURE__ */ l.jsx("label", { htmlFor: z, children: c }),
          /* @__PURE__ */ l.jsx(
            "textarea",
            {
              ref: D,
              value: n,
              defaultValue: a,
              onChange: (O) => r == null ? void 0 : r(O.target.value),
              rows: q.rows,
              placeholder: d,
              disabled: g,
              required: y,
              maxLength: x,
              name: k,
              id: z,
              className: (M = q.customStyles) == null ? void 0 : M.textarea,
              ...j
            }
          ),
          u && !h && /* @__PURE__ */ l.jsx(f, { className: "help-text", children: u }),
          h && /* @__PURE__ */ l.jsx(f, { className: "error-text", children: h })
        ]
      }
    );
  }
);
Tl.displayName = "Textarea";
var Pl = { exports: {} };
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
})(Pl);
var Oy = Pl.exports;
const Fi = /* @__PURE__ */ zs(Oy), Ry = "_container_d4iu1_129", Dy = "_flex_d4iu1_260", By = "_grid_d4iu1_356", $y = "_relative_d4iu1_738", Fy = "_absolute_d4iu1_742", qy = "_fixed_d4iu1_746", Hy = "_sticky_d4iu1_750", Zy = "_truncate_d4iu1_889", Uy = "_border_d4iu1_949", Wy = "_rounded_d4iu1_989", Vy = "_shadow_d4iu1_1021", Gy = "_transition_d4iu1_1093", Ky = "_small_d4iu1_1593", Yy = "_large_d4iu1_1597", Jy = "_card_d4iu1_1645", Xy = "_selectContainer_d4iu1_1770", Qy = "_disabled_d4iu1_1776", ev = "_error_d4iu1_1783", tv = "_control_d4iu1_1783", iv = "_fieldLabel_d4iu1_1787", nv = "_requiredMark_d4iu1_1791", av = "_open_d4iu1_1815", ov = "_valueContainer_d4iu1_1821", rv = "_singleValue_d4iu1_1829", sv = "_placeholder_d4iu1_1836", lv = "_searchInput_d4iu1_1840", cv = "_indicators_d4iu1_1851", _v = "_loadingIndicator_d4iu1_1858", dv = "_spinner_d4iu1_1866", uv = "_spin_d4iu1_1866", mv = "_clearIndicator_d4iu1_1880", hv = "_dropdownIndicator_d4iu1_1898", pv = "_menu_d4iu1_1911", fv = "_menuSlideDown_d4iu1_1", gv = "_menuSlideUp_d4iu1_1", bv = "_option_d4iu1_1954", yv = "_focused_d4iu1_1969", vv = "_selected_d4iu1_1972", xv = "_optionIcon_d4iu1_1981", wv = "_optionImage_d4iu1_1994", kv = "_optionContent_d4iu1_2007", Sv = "_optionLabel_d4iu1_2015", Cv = "_optionDescription_d4iu1_2022", zv = "_checkmark_d4iu1_2029", jv = "_loadingMessage_d4iu1_2040", Tv = "_noOptionsMessage_d4iu1_2046", Pv = "_helpText_d4iu1_2166", Ev = "_errorText_d4iu1_2171", ti = {
  container: Ry,
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
  flex: Dy,
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
  grid: By,
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
  relative: $y,
  absolute: Fy,
  fixed: qy,
  sticky: Hy,
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
  truncate: Zy,
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
  border: Uy,
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
  rounded: Wy,
  "rounded-md": "_rounded-md_d4iu1_1001",
  "rounded-lg": "_rounded-lg_d4iu1_1005",
  "rounded-xl": "_rounded-xl_d4iu1_1009",
  "rounded-2xl": "_rounded-2xl_d4iu1_1013",
  "rounded-full": "_rounded-full_d4iu1_1017",
  "shadow-none": "_shadow-none_d4iu1_1021",
  "shadow-sm": "_shadow-sm_d4iu1_1025",
  shadow: Vy,
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
  transition: Gy,
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
  small: Ky,
  large: Yy,
  "primary-button": "_primary-button_d4iu1_1602",
  "secondary-button": "_secondary-button_d4iu1_1606",
  card: Jy,
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
  selectContainer: Xy,
  disabled: Qy,
  error: ev,
  control: tv,
  fieldLabel: iv,
  requiredMark: nv,
  open: av,
  valueContainer: ov,
  singleValue: rv,
  placeholder: sv,
  searchInput: lv,
  indicators: cv,
  loadingIndicator: _v,
  spinner: dv,
  spin: uv,
  clearIndicator: mv,
  dropdownIndicator: hv,
  menu: pv,
  menuSlideDown: fv,
  "placement-top": "_placement-top_d4iu1_1925",
  menuSlideUp: gv,
  option: bv,
  focused: yv,
  selected: vv,
  optionIcon: xv,
  optionImage: wv,
  optionContent: kv,
  optionLabel: Sv,
  optionDescription: Cv,
  checkmark: zv,
  loadingMessage: jv,
  noOptionsMessage: Tv,
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
  helpText: Pv,
  errorText: Ev,
  "loading-shimmer": "_loading-shimmer_d4iu1_1"
}, vs = {
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
}, El = Le(
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
    required: x,
    loading: k,
    name: z,
    id: E,
    configuration: j,
    kind: D,
    ...F
  }, q) => {
    const M = sn(), O = t || `select-${M}`, P = vi(), N = (R) => {
      P(
        _s({
          selectId: O,
          updates: { isOpen: R }
        })
      );
    };
    Te(() => (P(
      _s({
        selectId: O,
        updates: {
          internalValue: a || r || (j != null && j.multiple ? [] : ""),
          isOpen: !1,
          searchValue: "",
          focusedIndex: -1
        }
      })
    ), () => {
      P(Wi(O));
    }), [
      P,
      O,
      a,
      r,
      j == null ? void 0 : j.multiple
    ]);
    const J = Nt(
      Gp(O)
    );
    J != null && J.internalValue || j != null && j.multiple;
    const $ = (J == null ? void 0 : J.isOpen) || !1, W = (J == null ? void 0 : J.searchValue) || "";
    J != null && J.focusedIndex;
    const T = it(null);
    it(null), it(null);
    const A = _i(() => n.reduce((R, S) => "options" in S ? [...R, ...S.options] : [...R, S], []), [n]);
    _i(() => !(j != null && j.searchable) || !W ? A : A.filter(
      (R) => {
        var S;
        return R.label.toLowerCase().includes(W.toLowerCase()) || ((S = R.description) == null ? void 0 : S.toLowerCase().includes(W.toLowerCase()));
      }
    ), [
      A,
      W,
      j == null ? void 0 : j.searchable
    ]), Te(() => {
      const R = (S) => {
        T.current && !T.current.contains(
          S.target
        ) && N(!1);
      };
      if ($)
        return document.addEventListener(
          "mousedown",
          R
        ), () => document.removeEventListener(
          "mousedown",
          R
        );
    }, [$]);
    let V = j;
    D && (V = Nv(
      D,
      j,
      y,
      p,
      k
    ));
    const {
      variant: ee,
      size: le,
      style: ae,
      borderRadius: te,
      state: ce,
      customStyles: w,
      ...G
    } = V || {};
    ({
      ...G
    });
    const v = Fi(
      ti.selectContainer,
      ti[`variant-${ee}`],
      ti[`size-${le}`],
      ti[`style-${ae}`],
      ti[`radius-${te}`],
      {
        [ti.open]: $,
        [ti.disabled]: y || ce === "disabled",
        [ti.error]: p || ce === "error",
        [ti.loading]: k || ce === "loading",
        [ti.multiple]: V == null ? void 0 : V.multiple,
        [ti.searchable]: V == null ? void 0 : V.searchable
      },
      w == null ? void 0 : w.container,
      g
    );
    return /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: q,
        className: v,
        ...F
      }
    );
  }
);
El.displayName = "Select";
function Nv(t, n, a, r, c) {
  if (!t)
    return n;
  const u = {
    ...vs[t] || vs.dropdown,
    ...n
  };
  return a && (u.state = "disabled"), r && (u.state = "error"), c && (u.state = "loading"), u;
}
const Iv = "_container_ncqht_129", Lv = "_flex_ncqht_260", Av = "_grid_ncqht_356", Mv = "_relative_ncqht_738", Ov = "_absolute_ncqht_742", Rv = "_fixed_ncqht_746", Dv = "_sticky_ncqht_750", Bv = "_truncate_ncqht_889", $v = "_border_ncqht_949", Fv = "_rounded_ncqht_989", qv = "_shadow_ncqht_1021", Hv = "_transition_ncqht_1093", Zv = "_small_ncqht_1593", Uv = "_large_ncqht_1597", Wv = "_card_ncqht_1645", Vv = "_radioContainer_ncqht_1770", Gv = "_disabled_ncqht_1775", Kv = "_error_ncqht_1779", Yv = "_optionsContainer_ncqht_1779", Jv = "_fieldLabel_ncqht_1783", Xv = "_requiredMark_ncqht_1787", Qv = "_radioOption_ncqht_1821", ex = "_radioInput_ncqht_1836", tx = "_radioLabel_ncqht_1844", ix = "_optionText_ncqht_1875", nx = "_radioDescription_ncqht_1880", ax = "_optionIcon_ncqht_1886", ox = "_selected_ncqht_1894", rx = "_optionImage_ncqht_1898", sx = "_helpText_ncqht_2073", lx = "_errorText_ncqht_2078", We = {
  container: Iv,
  "container-sm": "_container-sm_ncqht_145",
  "container-md": "_container-md_ncqht_161",
  "container-lg": "_container-lg_ncqht_177",
  "container-xl": "_container-xl_ncqht_193",
  "container-2xl": "_container-2xl_ncqht_209",
  "safe-area": "_safe-area_ncqht_225",
  "overflow-hidden": "_overflow-hidden_ncqht_231",
  "overflow-auto": "_overflow-auto_ncqht_235",
  "overflow-x-auto": "_overflow-x-auto_ncqht_240",
  "overflow-y-auto": "_overflow-y-auto_ncqht_246",
  "box-border": "_box-border_ncqht_252",
  "box-content": "_box-content_ncqht_256",
  flex: Lv,
  "flex-col": "_flex-col_ncqht_264",
  "flex-row": "_flex-row_ncqht_269",
  "flex-wrap": "_flex-wrap_ncqht_274",
  "flex-nowrap": "_flex-nowrap_ncqht_279",
  "flex-center": "_flex-center_ncqht_284",
  "flex-between": "_flex-between_ncqht_290",
  "justify-start": "_justify-start_ncqht_296",
  "justify-center": "_justify-center_ncqht_300",
  "justify-end": "_justify-end_ncqht_304",
  "justify-between": "_justify-between_ncqht_308",
  "justify-around": "_justify-around_ncqht_312",
  "items-start": "_items-start_ncqht_316",
  "items-center": "_items-center_ncqht_320",
  "items-end": "_items-end_ncqht_324",
  "items-stretch": "_items-stretch_ncqht_328",
  "flex-1": "_flex-1_ncqht_332",
  "flex-auto": "_flex-auto_ncqht_336",
  "flex-none": "_flex-none_ncqht_340",
  "flex-grow": "_flex-grow_ncqht_344",
  "flex-shrink": "_flex-shrink_ncqht_348",
  "flex-shrink-0": "_flex-shrink-0_ncqht_352",
  grid: Av,
  "grid-auto-fit": "_grid-auto-fit_ncqht_360",
  "grid-auto-fill": "_grid-auto-fill_ncqht_367",
  "grid-cols-1": "_grid-cols-1_ncqht_374",
  "grid-cols-2": "_grid-cols-2_ncqht_378",
  "grid-cols-3": "_grid-cols-3_ncqht_382",
  "grid-cols-4": "_grid-cols-4_ncqht_386",
  "grid-cols-6": "_grid-cols-6_ncqht_390",
  "grid-cols-12": "_grid-cols-12_ncqht_394",
  "gap-0": "_gap-0_ncqht_398",
  "gap-1": "_gap-1_ncqht_402",
  "gap-2": "_gap-2_ncqht_406",
  "gap-3": "_gap-3_ncqht_410",
  "gap-4": "_gap-4_ncqht_414",
  "gap-5": "_gap-5_ncqht_418",
  "gap-6": "_gap-6_ncqht_422",
  "gap-8": "_gap-8_ncqht_426",
  "gap-10": "_gap-10_ncqht_430",
  "gap-12": "_gap-12_ncqht_434",
  "p-0": "_p-0_ncqht_438",
  "p-1": "_p-1_ncqht_442",
  "p-2": "_p-2_ncqht_446",
  "p-3": "_p-3_ncqht_450",
  "p-4": "_p-4_ncqht_454",
  "p-5": "_p-5_ncqht_458",
  "p-6": "_p-6_ncqht_462",
  "p-8": "_p-8_ncqht_466",
  "p-10": "_p-10_ncqht_470",
  "p-12": "_p-12_ncqht_474",
  "px-0": "_px-0_ncqht_478",
  "px-1": "_px-1_ncqht_483",
  "px-2": "_px-2_ncqht_488",
  "px-3": "_px-3_ncqht_493",
  "px-4": "_px-4_ncqht_498",
  "px-6": "_px-6_ncqht_503",
  "py-0": "_py-0_ncqht_508",
  "py-1": "_py-1_ncqht_513",
  "py-2": "_py-2_ncqht_518",
  "py-3": "_py-3_ncqht_523",
  "py-4": "_py-4_ncqht_528",
  "py-6": "_py-6_ncqht_533",
  "m-0": "_m-0_ncqht_538",
  "m-1": "_m-1_ncqht_542",
  "m-2": "_m-2_ncqht_546",
  "m-3": "_m-3_ncqht_550",
  "m-4": "_m-4_ncqht_554",
  "m-auto": "_m-auto_ncqht_558",
  "mx-auto": "_mx-auto_ncqht_562",
  "my-auto": "_my-auto_ncqht_567",
  "mx-0": "_mx-0_ncqht_572",
  "mx-1": "_mx-1_ncqht_577",
  "mx-2": "_mx-2_ncqht_582",
  "mx-3": "_mx-3_ncqht_587",
  "mx-4": "_mx-4_ncqht_592",
  "my-0": "_my-0_ncqht_597",
  "my-1": "_my-1_ncqht_602",
  "my-2": "_my-2_ncqht_607",
  "my-3": "_my-3_ncqht_612",
  "my-4": "_my-4_ncqht_617",
  "w-full": "_w-full_ncqht_622",
  "w-auto": "_w-auto_ncqht_626",
  "w-fit": "_w-fit_ncqht_630",
  "w-min": "_w-min_ncqht_634",
  "w-max": "_w-max_ncqht_638",
  "max-w-none": "_max-w-none_ncqht_642",
  "max-w-xs": "_max-w-xs_ncqht_646",
  "max-w-sm": "_max-w-sm_ncqht_650",
  "max-w-md": "_max-w-md_ncqht_654",
  "max-w-lg": "_max-w-lg_ncqht_658",
  "max-w-xl": "_max-w-xl_ncqht_662",
  "max-w-2xl": "_max-w-2xl_ncqht_666",
  "max-w-3xl": "_max-w-3xl_ncqht_670",
  "max-w-4xl": "_max-w-4xl_ncqht_674",
  "max-w-5xl": "_max-w-5xl_ncqht_678",
  "max-w-6xl": "_max-w-6xl_ncqht_682",
  "max-w-7xl": "_max-w-7xl_ncqht_686",
  "max-w-full": "_max-w-full_ncqht_690",
  "min-w-0": "_min-w-0_ncqht_694",
  "min-w-full": "_min-w-full_ncqht_698",
  "h-auto": "_h-auto_ncqht_702",
  "h-fit": "_h-fit_ncqht_706",
  "h-full": "_h-full_ncqht_710",
  "h-screen": "_h-screen_ncqht_714",
  "max-h-full": "_max-h-full_ncqht_718",
  "max-h-screen": "_max-h-screen_ncqht_722",
  "min-h-0": "_min-h-0_ncqht_726",
  "min-h-full": "_min-h-full_ncqht_730",
  "min-h-screen": "_min-h-screen_ncqht_734",
  relative: Mv,
  absolute: Ov,
  fixed: Rv,
  sticky: Dv,
  static: "_static_ncqht_754",
  "inset-0": "_inset-0_ncqht_758",
  "top-0": "_top-0_ncqht_765",
  "right-0": "_right-0_ncqht_769",
  "bottom-0": "_bottom-0_ncqht_773",
  "left-0": "_left-0_ncqht_777",
  "text-left": "_text-left_ncqht_781",
  "text-center": "_text-center_ncqht_785",
  "text-right": "_text-right_ncqht_789",
  "text-justify": "_text-justify_ncqht_793",
  "text-xs": "_text-xs_ncqht_797",
  "text-sm": "_text-sm_ncqht_801",
  "text-base": "_text-base_ncqht_805",
  "text-lg": "_text-lg_ncqht_809",
  "text-xl": "_text-xl_ncqht_813",
  "text-2xl": "_text-2xl_ncqht_817",
  "text-3xl": "_text-3xl_ncqht_821",
  "text-4xl": "_text-4xl_ncqht_825",
  "font-normal": "_font-normal_ncqht_829",
  "font-medium": "_font-medium_ncqht_833",
  "font-semibold": "_font-semibold_ncqht_837",
  "font-bold": "_font-bold_ncqht_841",
  "leading-tight": "_leading-tight_ncqht_845",
  "leading-normal": "_leading-normal_ncqht_849",
  "leading-relaxed": "_leading-relaxed_ncqht_853",
  "text-primary": "_text-primary_ncqht_857",
  "text-secondary": "_text-secondary_ncqht_861",
  "text-muted": "_text-muted_ncqht_865",
  "text-inverse": "_text-inverse_ncqht_869",
  "text-blue": "_text-blue_ncqht_873",
  "text-red": "_text-red_ncqht_877",
  "text-green": "_text-green_ncqht_881",
  "text-yellow": "_text-yellow_ncqht_885",
  truncate: Bv,
  "text-ellipsis": "_text-ellipsis_ncqht_896",
  "text-clip": "_text-clip_ncqht_903",
  "bg-transparent": "_bg-transparent_ncqht_909",
  "bg-white": "_bg-white_ncqht_913",
  "bg-gray-50": "_bg-gray-50_ncqht_917",
  "bg-gray-100": "_bg-gray-100_ncqht_921",
  "bg-gray-200": "_bg-gray-200_ncqht_925",
  "bg-primary": "_bg-primary_ncqht_929",
  "bg-secondary": "_bg-secondary_ncqht_933",
  "bg-success": "_bg-success_ncqht_937",
  "bg-danger": "_bg-danger_ncqht_941",
  "bg-warning": "_bg-warning_ncqht_945",
  border: $v,
  "border-0": "_border-0_ncqht_953",
  "border-t": "_border-t_ncqht_957",
  "border-r": "_border-r_ncqht_961",
  "border-b": "_border-b_ncqht_965",
  "border-l": "_border-l_ncqht_969",
  "border-gray-200": "_border-gray-200_ncqht_973",
  "border-gray-300": "_border-gray-300_ncqht_977",
  "border-primary": "_border-primary_ncqht_981",
  "border-danger": "_border-danger_ncqht_985",
  "rounded-none": "_rounded-none_ncqht_989",
  "rounded-sm": "_rounded-sm_ncqht_993",
  rounded: Fv,
  "rounded-md": "_rounded-md_ncqht_1001",
  "rounded-lg": "_rounded-lg_ncqht_1005",
  "rounded-xl": "_rounded-xl_ncqht_1009",
  "rounded-2xl": "_rounded-2xl_ncqht_1013",
  "rounded-full": "_rounded-full_ncqht_1017",
  "shadow-none": "_shadow-none_ncqht_1021",
  "shadow-sm": "_shadow-sm_ncqht_1025",
  shadow: qv,
  "shadow-md": "_shadow-md_ncqht_1033",
  "shadow-lg": "_shadow-lg_ncqht_1037",
  "shadow-xl": "_shadow-xl_ncqht_1041",
  "z-0": "_z-0_ncqht_1045",
  "z-10": "_z-10_ncqht_1049",
  "z-20": "_z-20_ncqht_1053",
  "z-30": "_z-30_ncqht_1057",
  "z-40": "_z-40_ncqht_1061",
  "z-50": "_z-50_ncqht_1065",
  "z-auto": "_z-auto_ncqht_1069",
  "z-dropdown": "_z-dropdown_ncqht_1073",
  "z-sticky": "_z-sticky_ncqht_1077",
  "z-fixed": "_z-fixed_ncqht_1081",
  "z-modal": "_z-modal_ncqht_1085",
  "z-tooltip": "_z-tooltip_ncqht_1089",
  "transition-none": "_transition-none_ncqht_1093",
  "transition-all": "_transition-all_ncqht_1097",
  "transition-fast": "_transition-fast_ncqht_1101",
  "transition-slow": "_transition-slow_ncqht_1105",
  "sr-only": "_sr-only_ncqht_1109",
  "focus-ring": "_focus-ring_ncqht_1121",
  "cursor-default": "_cursor-default_ncqht_1127",
  "cursor-pointer": "_cursor-pointer_ncqht_1131",
  "cursor-not-allowed": "_cursor-not-allowed_ncqht_1135",
  "select-none": "_select-none_ncqht_1139",
  "select-text": "_select-text_ncqht_1143",
  "select-all": "_select-all_ncqht_1147",
  "select-auto": "_select-auto_ncqht_1151",
  "pointer-events-none": "_pointer-events-none_ncqht_1155",
  "pointer-events-auto": "_pointer-events-auto_ncqht_1159",
  "gap-sm": "_gap-sm_ncqht_1163",
  "gap-md": "_gap-md_ncqht_1167",
  "gap-lg": "_gap-lg_ncqht_1171",
  "gap-xl": "_gap-xl_ncqht_1175",
  "p-sm": "_p-sm_ncqht_1179",
  "p-md": "_p-md_ncqht_1183",
  "p-lg": "_p-lg_ncqht_1187",
  "p-xl": "_p-xl_ncqht_1191",
  "m-sm": "_m-sm_ncqht_1195",
  "m-md": "_m-md_ncqht_1199",
  "m-lg": "_m-lg_ncqht_1203",
  "m-xl": "_m-xl_ncqht_1207",
  "text-gray": "_text-gray_ncqht_1211",
  "mobile:hidden": "_mobile:hidden_ncqht_1216",
  "mobile:block": "_mobile:block_ncqht_1219",
  "mobile:flex": "_mobile:flex_ncqht_1222",
  "mobile:grid": "_mobile:grid_ncqht_1225",
  "mobile:text-sm": "_mobile:text-sm_ncqht_1228",
  "mobile:text-xs": "_mobile:text-xs_ncqht_1231",
  "mobile:p-2": "_mobile:p-2_ncqht_1234",
  "mobile:px-2": "_mobile:px-2_ncqht_1237",
  "tablet:block": "_tablet:block_ncqht_1243",
  "tablet:flex": "_tablet:flex_ncqht_1246",
  "tablet:grid": "_tablet:grid_ncqht_1249",
  "tablet:hidden": "_tablet:hidden_ncqht_1252",
  "desktop:block": "_desktop:block_ncqht_1257",
  "desktop:flex": "_desktop:flex_ncqht_1260",
  "desktop:grid": "_desktop:grid_ncqht_1263",
  "desktop:hidden": "_desktop:hidden_ncqht_1266",
  "bg-gray": "_bg-gray_ncqht_917",
  "border-secondary": "_border-secondary_ncqht_1290",
  "border-gray": "_border-gray_ncqht_973",
  "shadow-glow": "_shadow-glow_ncqht_1326",
  "w-8": "_w-8_ncqht_1374",
  "w-10": "_w-10_ncqht_1378",
  "w-12": "_w-12_ncqht_1382",
  "w-16": "_w-16_ncqht_1386",
  "h-8": "_h-8_ncqht_1390",
  "h-10": "_h-10_ncqht_1394",
  "h-12": "_h-12_ncqht_1398",
  "h-16": "_h-16_ncqht_1402",
  "user-select-none": "_user-select-none_ncqht_1418",
  transition: Hv,
  "transition-colors": "_transition-colors_ncqht_1426",
  "transition-transform": "_transition-transform_ncqht_1430",
  "hover-scale": "_hover-scale_ncqht_1434",
  "fade-in": "_fade-in_ncqht_1441",
  "status-online": "_status-online_ncqht_1453",
  "status-offline": "_status-offline_ncqht_1463",
  "status-away": "_status-away_ncqht_1473",
  "status-busy": "_status-busy_ncqht_1483",
  "modal-overlay": "_modal-overlay_ncqht_1493",
  "modal-content": "_modal-content_ncqht_1507",
  "close-button-absolute": "_close-button-absolute_ncqht_1521",
  small: Zv,
  large: Uv,
  "primary-button": "_primary-button_ncqht_1602",
  "secondary-button": "_secondary-button_ncqht_1606",
  card: Wv,
  "input-base": "_input-base_ncqht_1659",
  "chat-window": "_chat-window_ncqht_1691",
  "chat-message": "_chat-message_ncqht_1702",
  "z-overlay": "_z-overlay_ncqht_1727",
  "mobile-hidden": "_mobile-hidden_ncqht_1732",
  "mobile-flex-col": "_mobile-flex-col_ncqht_1735",
  "mobile-text-center": "_mobile-text-center_ncqht_1738",
  "mobile-p-sm": "_mobile-p-sm_ncqht_1741",
  "mobile-gap-sm": "_mobile-gap-sm_ncqht_1744",
  "desktop-hidden": "_desktop-hidden_ncqht_1749",
  "print-hidden": "_print-hidden_ncqht_1754",
  radioContainer: Vv,
  disabled: Gv,
  error: Kv,
  optionsContainer: Yv,
  fieldLabel: Jv,
  requiredMark: Xv,
  "alignment-horizontal": "_alignment-horizontal_ncqht_1796",
  "alignment-vertical": "_alignment-vertical_ncqht_1800",
  "alignment-grid": "_alignment-grid_ncqht_1803",
  "spacing-tight": "_spacing-tight_ncqht_1809",
  "spacing-normal": "_spacing-normal_ncqht_1813",
  "spacing-loose": "_spacing-loose_ncqht_1817",
  radioOption: Qv,
  radioInput: ex,
  radioLabel: tx,
  optionText: ix,
  radioDescription: nx,
  optionIcon: ax,
  selected: ox,
  optionImage: rx,
  "variant-standard": "_variant-standard_ncqht_1910",
  "variant-button": "_variant-button_ncqht_1921",
  "variant-card": "_variant-card_ncqht_1940",
  "variant-switch": "_variant-switch_ncqht_1968",
  "size-small": "_size-small_ncqht_1999",
  "size-large": "_size-large_ncqht_2010",
  "style-outlined": "_style-outlined_ncqht_2021",
  "style-filled": "_style-filled_ncqht_2025",
  "style-ghost": "_style-ghost_ncqht_2033",
  "style-minimal": "_style-minimal_ncqht_2044",
  "radius-none": "_radius-none_ncqht_2053",
  "radius-small": "_radius-small_ncqht_2057",
  "radius-medium": "_radius-medium_ncqht_2061",
  "radius-large": "_radius-large_ncqht_2065",
  "radius-full": "_radius-full_ncqht_2069",
  helpText: sx,
  errorText: lx,
  "loading-shimmer": "_loading-shimmer_ncqht_1"
}, xs = {
  standard: {
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
  },
  "button-group": {
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
  },
  "card-selection": {
    variant: "card",
    size: "large",
    state: "default",
    style: "outlined",
    alignment: "grid",
    showLabels: !0,
    showDescriptions: !0,
    allowDeselect: !1,
    required: !1,
    spacing: "normal",
    borderRadius: "medium",
    animationDuration: 200
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
  },
  "image-radio": {
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
  },
  "color-picker": {
    variant: "button",
    size: "medium",
    state: "default",
    style: "filled",
    alignment: "horizontal",
    showLabels: !1,
    showDescriptions: !1,
    allowDeselect: !1,
    required: !1,
    spacing: "tight",
    borderRadius: "full",
    animationDuration: 150
  },
  "size-selector": {
    variant: "button",
    size: "small",
    state: "default",
    style: "outlined",
    alignment: "horizontal",
    showLabels: !0,
    showDescriptions: !1,
    allowDeselect: !1,
    required: !1,
    spacing: "tight",
    borderRadius: "small",
    animationDuration: 150
  },
  "plan-selector": {
    variant: "card",
    size: "large",
    state: "default",
    style: "outlined",
    alignment: "horizontal",
    showLabels: !0,
    showDescriptions: !0,
    allowDeselect: !1,
    required: !0,
    spacing: "normal",
    borderRadius: "medium",
    animationDuration: 200
  },
  preference: {
    variant: "standard",
    size: "medium",
    state: "default",
    style: "default",
    alignment: "vertical",
    showLabels: !0,
    showDescriptions: !0,
    allowDeselect: !1,
    required: !1,
    spacing: "normal",
    borderRadius: "small",
    animationDuration: 200
  },
  custom: {
    variant: "custom",
    size: "medium",
    state: "default",
    style: "default",
    alignment: "vertical",
    showLabels: !0,
    showDescriptions: !1,
    allowDeselect: !1,
    required: !1,
    spacing: "normal",
    borderRadius: "medium",
    animationDuration: 200
  }
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
    required: x,
    configuration: k,
    ...z
  }, E) => {
    var W;
    const j = sn(), D = t || `radio-${j}`, F = vi();
    Te(() => (F(
      lo({
        radioId: D,
        updates: {
          internalValue: r || c
        }
      })
    ), () => {
      F(Wi(D));
    }), [
      F,
      D,
      r,
      c
    ]);
    const q = Nt(
      Kp(D)
    ), M = q == null ? void 0 : q.internalValue, O = r !== void 0, P = O ? r : M;
    Te(() => {
      O && F(
        lo({
          radioId: D,
          updates: { internalValue: r }
        })
      );
    }, [
      r,
      O,
      F,
      D
    ]);
    const N = (T) => {
      if (y) return;
      const A = k.allowDeselect && P === T ? void 0 : T;
      O || F(
        lo({
          radioId: D,
          updates: { internalValue: A }
        })
      ), d == null || d(A || "");
    }, J = Fi(
      We.radioContainer,
      We[`variant-${k.variant}`],
      We[`size-${k.size}`],
      We[`style-${k.style}`],
      We[`alignment-${k.alignment}`],
      We[`spacing-${k.spacing}`],
      We[`radius-${k.borderRadius}`],
      {
        [We.disabled]: y || k.state === "disabled",
        [We.error]: p || k.state === "error",
        [We.required]: x || k.required
      },
      (W = k.customStyles) == null ? void 0 : W.container,
      g
    ), $ = (T, A) => {
      var w, G, v, R;
      const V = P === T.value, ee = y || T.disabled, le = Fi(
        We.radioOption,
        We[`option-${k.variant}`],
        {
          [We.selected]: V,
          [We.disabled]: ee,
          [We.hasIcon]: !!T.icon,
          [We.hasImage]: !!T.image,
          [We.hasDescription]: !!T.description && k.showDescriptions
        },
        (w = k.customStyles) == null ? void 0 : w.option,
        T.className
      ), ae = Fi(
        We.radioInput,
        (G = k.customStyles) == null ? void 0 : G.input
      ), te = Fi(
        We.radioLabel,
        (v = k.customStyles) == null ? void 0 : v.label
      ), ce = Fi(
        We.radioDescription,
        (R = k.customStyles) == null ? void 0 : R.description
      );
      return /* @__PURE__ */ l.jsxs(
        f,
        {
          className: le,
          children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "radio",
                id: `${n}-${T.value}`,
                name: n,
                value: T.value,
                checked: V,
                disabled: ee,
                onChange: () => N(T.value),
                className: ae,
                style: {
                  animationDuration: `${k.animationDuration}ms`
                }
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "label",
              {
                htmlFor: `${n}-${T.value}`,
                className: te,
                children: [
                  T.image && /* @__PURE__ */ l.jsx(f, { className: We.optionImage, children: /* @__PURE__ */ l.jsx(
                    "img",
                    {
                      src: T.image,
                      alt: T.label
                    }
                  ) }),
                  T.icon && /* @__PURE__ */ l.jsx(f, { className: We.optionIcon, children: T.icon }),
                  k.showLabels && /* @__PURE__ */ l.jsx("span", { className: We.optionText, children: T.label }),
                  T.description && k.showDescriptions && /* @__PURE__ */ l.jsx("span", { className: ce, children: T.description })
                ]
              }
            )
          ]
        },
        T.value
      );
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: E,
        className: J,
        ...z,
        children: [
          u && /* @__PURE__ */ l.jsxs(f, { className: We.fieldLabel, children: [
            u,
            (x || k.required) && /* @__PURE__ */ l.jsx("span", { className: We.requiredMark, children: "*" })
          ] }),
          /* @__PURE__ */ l.jsx(f, { className: We.optionsContainer, children: a.map($) }),
          h && !p && /* @__PURE__ */ l.jsx(f, { className: We.helpText, children: h }),
          p && /* @__PURE__ */ l.jsx(f, { className: We.errorText, children: p })
        ]
      }
    );
  }
);
rn.displayName = "Radio";
function ii({
  kind: t,
  configuration: n,
  ...a
}) {
  const c = {
    ...xs[t] || xs.standard,
    ...n
  };
  return /* @__PURE__ */ l.jsx(rn, { ...a, configuration: c });
}
const cx = {
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
rn.Presets = cx;
rn.createRadio = ii;
const ws = {
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
}, _x = "_switchContainer_10f5r_123", dx = "_disabled_10f5r_128", ux = "_fieldLabel_10f5r_133", mx = "_requiredMark_10f5r_137", hx = "_switchWrapper_10f5r_142", px = "_switchInput_10f5r_148", fx = "_switchLabel_10f5r_156", gx = "_switchTrack_10f5r_163", bx = "_checked_10f5r_172", yx = "_switchThumb_10f5r_177", vx = "_switchLabels_10f5r_192", xx = "_helpText_10f5r_196", wx = "_errorText_10f5r_200", mt = {
  switchContainer: _x,
  disabled: dx,
  fieldLabel: ux,
  requiredMark: mx,
  switchWrapper: hx,
  switchInput: px,
  switchLabel: fx,
  switchTrack: gx,
  checked: bx,
  switchThumb: yx,
  switchLabels: vx,
  helpText: xx,
  errorText: wx,
  "size-small": "_size-small_10f5r_204",
  "size-large": "_size-large_10f5r_218",
  "loading-shimmer": "_loading-shimmer_10f5r_1"
}, Nl = Le(
  ({
    kind: t,
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
    disabled: x,
    required: k,
    name: z,
    id: E,
    componentId: j,
    ...D
  }, F) => {
    var T;
    const q = j || `switch-${Date.now()}`, M = ya(), O = Xt((A) => {
      const V = A.ui;
      return Wp(q)({
        ui: V
      });
    }), P = a !== void 0, N = P ? a : (O == null ? void 0 : O.checked) ?? r ?? !1;
    Te(() => (M(
      ro({
        switchId: q,
        checked: r ?? a ?? !1,
        disabled: x ?? !1
      })
    ), () => {
      M(Wi(q));
    }), [
      M,
      q,
      r,
      a,
      x
    ]), Te(() => {
      P && a !== void 0 && M(
        ro({
          switchId: q,
          checked: a,
          disabled: x ?? !1
        })
      );
    }, [
      a,
      P,
      M,
      q,
      x
    ]);
    const J = Ze(() => {
      if (x) return;
      const A = !N;
      P || M(
        ro({
          switchId: q,
          checked: A,
          disabled: x ?? !1
        })
      ), c == null || c(A);
    }, [
      x,
      N,
      P,
      M,
      q,
      c
    ]);
    let $ = n;
    t && ($ = {
      ...ws[t] || ws.toggle,
      ...n
    });
    const W = Fi(
      mt.switchContainer,
      mt[`variant-${$.variant}`],
      mt[`size-${$.size}`],
      mt[`style-${$.style}`],
      mt[`radius-${$.borderRadius}`],
      {
        [mt.checked]: N,
        [mt.disabled]: x || $.state === "disabled",
        [mt.error]: g || $.state === "error",
        [mt.animated]: $.animated
      },
      (T = $.customStyles) == null ? void 0 : T.container,
      y
    );
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: F,
        className: W,
        ...D,
        children: [
          d && /* @__PURE__ */ l.jsxs(f, { className: mt.fieldLabel, children: [
            d,
            (k || $.required) && /* @__PURE__ */ l.jsx("span", { className: mt.requiredMark, children: "*" })
          ] }),
          /* @__PURE__ */ l.jsxs(f, { className: mt.switchWrapper, children: [
            /* @__PURE__ */ l.jsx(
              "input",
              {
                type: "checkbox",
                id: E,
                name: z,
                checked: N,
                onChange: J,
                disabled: x,
                className: mt.switchInput,
                style: {
                  animationDuration: `${$.animationDuration}ms`
                }
              }
            ),
            /* @__PURE__ */ l.jsxs(
              "label",
              {
                htmlFor: E,
                className: mt.switchLabel,
                children: [
                  /* @__PURE__ */ l.jsx(f, { className: mt.switchTrack, children: /* @__PURE__ */ l.jsx(f, { className: mt.switchThumb }) }),
                  $.showLabels && (u || h) && /* @__PURE__ */ l.jsx(f, { className: mt.switchLabels, children: N ? u : h })
                ]
              }
            )
          ] }),
          p && !g && /* @__PURE__ */ l.jsx(f, { className: mt.helpText, children: p }),
          g && /* @__PURE__ */ l.jsx(f, { className: mt.errorText, children: g })
        ]
      }
    );
  }
);
Nl.displayName = "Switch";
const Ro = {
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
}, va = Le(
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
    error: x,
    className: k = "",
    disabled: z = !1,
    readOnly: E = !1,
    required: j = !1,
    min: D,
    max: F,
    step: q,
    marks: M,
    name: O,
    id: P,
    "aria-label": N,
    "aria-describedby": J,
    ...$
  }, W) => {
    const T = vi(), A = Nt(
      Jp(c)
    ), ee = {
      ...Ro.range,
      variant: t,
      size: n,
      style: a,
      ...r
    }, le = d ?? u ?? (ee.range ? [ee.min, ee.max / 2] : ee.min), ae = (A == null ? void 0 : A.value) ?? le, te = (A == null ? void 0 : A.isDragging) || !1, ce = (A == null ? void 0 : A.showTooltip) || !1;
    Te(() => (A || T(
      Sn({
        rangeId: c,
        updates: {
          value: le,
          isDragging: !1,
          showTooltip: !1
        }
      })
    ), () => {
      T(Wi(c));
    }), [T, c, A, le]);
    const w = d ?? ae, G = D ?? ee.min, v = F ?? ee.max, R = q ?? ee.step, S = Ze(
      (be) => {
        T(
          Sn({
            rangeId: c,
            updates: { value: be }
          })
        ), h == null || h(be);
      },
      [h, T, c]
    ), H = Ze(() => {
      T(
        Sn({
          rangeId: c,
          updates: { isDragging: !0 }
        })
      ), ee.showTooltip && T(
        Sn({
          rangeId: c,
          updates: { showTooltip: !0 }
        })
      );
    }, [ee.showTooltip, T, c]), ie = Ze(() => {
      T(
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
      T,
      c
    ]), X = (be) => {
      if (z || E) return;
      const Q = parseFloat(be.target.value);
      S(Q);
    }, K = () => {
      if (ee.range && Array.isArray(w)) {
        const [be, Q] = w, ne = (be - G) / (v - G) * 100, ue = (Q - G) / (v - G) * 100;
        return {
          background: `linear-gradient(to right, 
						var(--range-track-color) ${ne}%, 
						var(--range-active-color) ${ne}%, 
						var(--range-active-color) ${ue}%, 
						var(--range-track-color) ${ue}%)`
        };
      } else {
        const be = (Number(w) - G) / (v - G) * 100;
        return {
          background: `linear-gradient(to right, 
						var(--range-active-color) ${be}%, 
						var(--range-track-color) ${be}%)`
        };
      }
    }, fe = () => {
      if (!ee.marks && !M) return null;
      const be = M === !0 ? Array.from(
        {
          length: Math.floor(
            (v - G) / R
          ) + 1
        },
        (Q, ne) => G + ne * R
      ) : typeof M == "object" ? Object.keys(M).map(Number) : [];
      return /* @__PURE__ */ l.jsx(f, { className: "range-marks", children: be.map((Q) => {
        const ne = (Q - G) / (v - G) * 100, ue = typeof M == "object" ? M[Q] : Q.toString();
        return /* @__PURE__ */ l.jsxs(
          f,
          {
            className: "range-mark",
            style: { left: `${ne}%` },
            children: [
              /* @__PURE__ */ l.jsx(f, { className: "range-mark-dot" }),
              ee.showLabels && /* @__PURE__ */ l.jsx(f, { className: "range-mark-label", children: ue })
            ]
          },
          Q
        );
      }) });
    }, de = () => {
      if (!ee.showTooltip && !ce)
        return null;
      const be = Array.isArray(w) ? (w[1] - G) / (v - G) * 100 : (Number(w) - G) / (v - G) * 100;
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
      `range-${ee.variant}`,
      `range-${ee.size}`,
      `range-${ee.style}`,
      `range-${ee.orientation}`,
      ee.state !== "default" && `range-${ee.state}`,
      z && "range-disabled",
      E && "range-readonly",
      te && "range-dragging",
      x && "range-error",
      k
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l.jsxs(f, { className: Pe, children: [
      g && /* @__PURE__ */ l.jsxs("label", { htmlFor: P, className: "range-label", children: [
        g,
        j && /* @__PURE__ */ l.jsx("span", { className: "range-required", children: "*" })
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
                  ref: W,
                  type: "range",
                  className: "range-input",
                  value: Array.isArray(w) ? w[0] : w,
                  onChange: X,
                  onMouseDown: H,
                  onMouseUp: ie,
                  min: G,
                  max: v,
                  step: R,
                  disabled: z,
                  readOnly: E,
                  required: j,
                  name: O,
                  id: P,
                  "aria-label": N || g,
                  "aria-describedby": J,
                  ...$
                }
              ),
              ee.range && Array.isArray(w) && /* @__PURE__ */ l.jsx(
                "input",
                {
                  type: "range",
                  className: "range-input range-input-high",
                  value: w[1],
                  onChange: (be) => {
                    const Q = parseFloat(
                      be.target.value
                    );
                    S([
                      w[0],
                      Q
                    ]);
                  },
                  onMouseDown: H,
                  onMouseUp: ie,
                  min: G,
                  max: v,
                  step: R,
                  disabled: z,
                  readOnly: E
                }
              )
            ]
          }
        ),
        fe(),
        de(),
        ee.showValue && /* @__PURE__ */ l.jsx(f, { className: "range-value", children: Array.isArray(w) ? `${w[0]} - ${w[1]}` : w })
      ] }),
      y && !x && /* @__PURE__ */ l.jsx(f, { className: "range-help-text", children: y }),
      x && /* @__PURE__ */ l.jsx(f, { className: "range-error-text", children: x })
    ] });
  }
);
va.displayName = "Range";
function kx({
  kind: t,
  configuration: n,
  ...a
}) {
  const c = {
    ...Ro[t] || Ro.range,
    ...n
  };
  return /* @__PURE__ */ l.jsx(va, { ...a, configuration: c });
}
va.createRange = kx;
const Il = Le(
  ({ kind: t, configuration: n, value: a, onChange: r, ...c }, d) => {
    switch (t) {
      case "input":
      default:
        return /* @__PURE__ */ l.jsx(
          jl,
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
          Tl,
          {
            ref: d,
            value: a ?? "",
            onChange: r,
            ...c
          }
        );
      case "select":
        return /* @__PURE__ */ l.jsx(
          El,
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
          qo,
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
          Nl,
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
          va,
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
Il.displayName = "FormsBodyFactory";
const Sx = Le(
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
    const [y, x] = zt(n), k = (E, j) => {
      const D = { ...y, [E]: j };
      x(D), a == null || a(D);
    }, z = (E) => {
      E.preventDefault(), r == null || r(y);
    };
    return /* @__PURE__ */ l.jsxs(
      "form",
      {
        ref: g,
        className: h,
        onSubmit: z,
        style: { width: u ? "100%" : void 0 },
        children: [
          t.map((E) => /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: zi.fieldWrapper,
              children: [
                E.label && /* @__PURE__ */ l.jsxs(
                  "label",
                  {
                    className: zi.label,
                    htmlFor: E.name,
                    children: [
                      E.label,
                      E.required && /* @__PURE__ */ l.jsx("span", { className: zi.required, children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { className: zi.fieldContainer, children: /* @__PURE__ */ l.jsx(
                  Il,
                  {
                    ...E,
                    value: y[E.name] ?? "",
                    onChange: (j) => k(E.name, j)
                  }
                ) }),
                E.error && /* @__PURE__ */ l.jsx("span", { className: zi.errorText, children: E.error }),
                E.helperText && !E.error && /* @__PURE__ */ l.jsx("span", { className: zi.helperText, children: E.helperText })
              ]
            },
            E.name
          )),
          c && /* @__PURE__ */ l.jsx("div", { className: zi.errorText, children: c }),
          d && !c && /* @__PURE__ */ l.jsx("div", { className: zi.helperText, children: d }),
          /* @__PURE__ */ l.jsx("button", { type: "submit", children: "Submit" })
        ]
      }
    );
  }
);
Sx.displayName = "Forms";
const Cx = {
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
}, T8 = {
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
}, P8 = {
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
}, E8 = (t, n) => {
  const a = Cx[t];
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
}, N8 = (t, n) => {
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
}, zx = "_header_4fxxo_117", jx = "_headerInner_4fxxo_138", Tx = "_headerChildren_4fxxo_146", Px = "_borderBottom_4fxxo_211", Ex = "_sticky_4fxxo_215", Nx = "_collapsible_4fxxo_222", Ix = "_collapsed_4fxxo_226", Lx = "_titleContent_4fxxo_226", Ax = "_tabs_4fxxo_227", Mx = "_responsive_4fxxo_233", Ox = "_rightSection_4fxxo_240", Rx = "_content_4fxxo_245", Dx = "_contentCentered_4fxxo_254", Bx = "_leftSection_4fxxo_259", $x = "_titleSection_4fxxo_275", Fx = "_titleIcon_4fxxo_285", qx = "_title_4fxxo_226", Hx = "_subtitle_4fxxo_346", Zx = "_actions_4fxxo_360", Ux = "_actionButton_4fxxo_376", Wx = "_collapseButton_4fxxo_380", Vx = "_tab_4fxxo_227", Gx = "_tabActive_4fxxo_471", Kx = "_tabIcon_4fxxo_482", Yx = "_tabLabel_4fxxo_488", Jx = "_tabBadge_4fxxo_494", Xx = "_browseHeader_4fxxo_514", Qx = "_browseTabbedHeader_4fxxo_514", ew = "_dashboardHeader_4fxxo_525", tw = "_dashboardSimpleHeader_4fxxo_535", iw = "_modalHeader_4fxxo_539", nw = "_modalCloseOnlyHeader_4fxxo_549", aw = "_pageHeader_4fxxo_554", ow = "_pageWithNavHeader_4fxxo_558", rw = "_sidebarHeader_4fxxo_571", sw = "_navigationHeader_4fxxo_581", lw = "_simpleHeader_4fxxo_595", cw = "_simpleCenteredHeader_4fxxo_595", _w = "_gameHeader_4fxxo_603", dw = "_settingsHeader_4fxxo_607", uw = "_profileHeader_4fxxo_616", mw = "_headerSlot_4fxxo_719", me = {
  header: zx,
  headerInner: jx,
  headerChildren: Tx,
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
  borderBottom: Px,
  sticky: Ex,
  collapsible: Nx,
  collapsed: Ix,
  titleContent: Lx,
  tabs: Ax,
  responsive: Mx,
  rightSection: Ox,
  content: Rx,
  contentCentered: Dx,
  leftSection: Bx,
  titleSection: $x,
  titleIcon: Fx,
  title: qx,
  "title-small": "_title-small_4fxxo_310",
  "title-medium": "_title-medium_4fxxo_316",
  "title-large": "_title-large_4fxxo_322",
  "title-xlarge": "_title-xlarge_4fxxo_328",
  "title-normal": "_title-normal_4fxxo_334",
  "title-bold": "_title-bold_4fxxo_342",
  subtitle: Hx,
  actions: Zx,
  "actions-left": "_actions-left_4fxxo_368",
  "actions-right": "_actions-right_4fxxo_372",
  actionButton: Ux,
  collapseButton: Wx,
  "tabs-below-title": "_tabs-below-title_4fxxo_400",
  "tabs-beside-title": "_tabs-beside-title_4fxxo_405",
  "tabs-separate-row": "_tabs-separate-row_4fxxo_409",
  "tabs-align-left": "_tabs-align-left_4fxxo_416",
  "tabs-align-center": "_tabs-align-center_4fxxo_420",
  "tabs-align-right": "_tabs-align-right_4fxxo_424",
  tab: Vx,
  tabActive: Gx,
  tabIcon: Kx,
  tabLabel: Yx,
  tabBadge: Jx,
  browseHeader: Xx,
  browseTabbedHeader: Qx,
  dashboardHeader: ew,
  dashboardSimpleHeader: tw,
  modalHeader: iw,
  modalCloseOnlyHeader: nw,
  pageHeader: aw,
  pageWithNavHeader: ow,
  sidebarHeader: rw,
  navigationHeader: sw,
  simpleHeader: lw,
  simpleCenteredHeader: cw,
  gameHeader: _w,
  settingsHeader: dw,
  profileHeader: uw,
  "layout-horizontal": "_layout-horizontal_4fxxo_625",
  "layout-vertical": "_layout-vertical_4fxxo_642",
  "layout-split": "_layout-split_4fxxo_655",
  "layout-stacked": "_layout-stacked_4fxxo_678",
  "layout-bottom": "_layout-bottom_4fxxo_697",
  headerSlot: mw,
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
}, Ll = {
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
}, I8 = {
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
}, L8 = {
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
function A8(t, n = {}) {
  return {
    ...Ll[t],
    ...n
  };
}
function M8(t, n) {
  return [...t, ...n];
}
const hw = "_sidebarOverlay_1b6n5_117", pw = "_friendsSidebarOverlay_1b6n5_117", fw = "_friendsSidebarOverlayModal_1b6n5_117", gw = "_settingsSidebarOverlay_1b6n5_118", bw = "_notificationsSidebarOverlay_1b6n5_119", yw = "_baseSidebar_1b6n5_137", vw = "_notificationsSidebar_1b6n5_119", xw = "_chatSidebar_1b6n5_137", ww = "_settingsSidebar_1b6n5_118", kw = "_friendsSidebar_1b6n5_117", Sw = "_friendsSidebarResponsive_1b6n5_137", Cw = "_friendsSidebarDesktop_1b6n5_137", zw = "_friendsSidebarMobile_1b6n5_137", jw = "_friendsSidebarNoAnimation_1b6n5_137", Tw = "_sidebarContent_1b6n5_172", Pw = "_sidebarHeader_1b6n5_183", Ew = "_sidebarTitle_1b6n5_190", Nw = "_sidebarFooter_1b6n5_201", Iw = "_sidebarCloseButton_1b6n5_411", Lw = "_sidebarSection_1b6n5_440", Aw = "_sidebarSectionTitle_1b6n5_447", Mw = "_sidebarList_1b6n5_460", Ow = "_sidebarListItem_1b6n5_466", Rw = "_sidebarCloseBtn_1b6n5_537", Dw = "_sidebarCloseBtnLeft_1b6n5_537", Jt = {
  sidebarOverlay: hw,
  friendsSidebarOverlay: pw,
  friendsSidebarOverlayModal: fw,
  settingsSidebarOverlay: gw,
  notificationsSidebarOverlay: bw,
  "overlay-visible": "_overlay-visible_1b6n5_130",
  baseSidebar: yw,
  notificationsSidebar: vw,
  chatSidebar: xw,
  settingsSidebar: ww,
  friendsSidebar: kw,
  friendsSidebarResponsive: Sw,
  friendsSidebarDesktop: Cw,
  friendsSidebarMobile: zw,
  friendsSidebarNoAnimation: jw,
  "sidebar-open": "_sidebar-open_1b6n5_154",
  "sidebar-left": "_sidebar-left_1b6n5_157",
  sidebarContent: Tw,
  sidebarHeader: Pw,
  sidebarTitle: Ew,
  sidebarFooter: Nw,
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
  sidebarCloseButton: Iw,
  sidebarSection: Lw,
  sidebarSectionTitle: Aw,
  sidebarList: Mw,
  sidebarListItem: Ow,
  sidebarCloseBtn: Rw,
  sidebarCloseBtnLeft: Dw,
  "sidebar-focus-trap": "_sidebar-focus-trap_1b6n5_625",
  "sidebar-sr-only": "_sidebar-sr-only_1b6n5_630",
  "sidebar-fast": "_sidebar-fast_1b6n5_643",
  "sidebar-slow": "_sidebar-slow_1b6n5_647",
  "loading-shimmer": "_loading-shimmer_1b6n5_1"
}, Bw = Le(
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
    closeOnEscape: x = !0,
    focusTrap: k = !0,
    returnFocus: z = !0,
    animationDuration: E = 250,
    disableAnimation: j = !1,
    ariaLabel: D,
    ariaLabelledBy: F,
    ariaDescribedBy: q,
    overlayClassName: M,
    headerClassName: O,
    contentClassName: P,
    footerClassName: N,
    closeButtonClassName: J,
    onOpen: $,
    onAnimationStart: W,
    onAnimationEnd: T,
    onOverlayClick: A,
    onEscapeKey: V,
    className: ee,
    style: le,
    children: ae,
    ...te
  }, ce) => {
    const w = it(null), G = it(null), v = it(null), R = it(!1), S = Ze(
      (he) => {
        he.key === "Escape" && t && x && (he.preventDefault(), V == null || V(), n == null || n());
      },
      [t, x, n, V]
    ), H = Ze(
      (he) => {
        he.target === w.current && y && (A == null || A(), n == null || n());
      },
      [y, n, A]
    );
    Te(() => (t && k && (v.current = document.activeElement, setTimeout(() => {
      var Z, U;
      const he = (Z = G.current) == null ? void 0 : Z.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      he ? he.focus() : (U = G.current) == null || U.focus();
    }, E || 0)), () => {
      !t && z && v.current && v.current.focus();
    }), [t, k, z, E]), Te(() => {
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
      t && ($ == null || $(), W == null || W(), !j && E ? (R.current = !0, setTimeout(() => {
        R.current = !1, T == null || T();
      }, E)) : T == null || T());
    }, [
      t,
      $,
      W,
      T,
      j,
      E
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
      j ? Jt["sidebar-no-animation"] : "",
      ee
    ].filter(Boolean).join(" "), X = [
      Jt.sidebarOverlay,
      M,
      t ? Jt["overlay-visible"] : ""
    ].filter(Boolean).join(" "), K = [
      Jt.sidebarHeader,
      O
    ].filter(Boolean).join(" "), fe = [
      Jt.sidebarContent,
      P
    ].filter(Boolean).join(" "), de = [
      Jt.sidebarFooter,
      N
    ].filter(Boolean).join(" "), Pe = [
      Jt.sidebarCloseBtn,
      J
    ].filter(Boolean).join(" "), be = {
      ...le,
      transitionDuration: j ? "0s" : `${E}ms`
    }, Q = {
      transitionDuration: j ? "0s" : `${E}ms`
    }, ne = typeof h == "boolean" ? h : c !== "permanent", ue = d !== void 0 ? /* @__PURE__ */ l.jsx("div", { className: K, children: d }) : null, oe = ne ? /* @__PURE__ */ l.jsx(
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
          style: Q,
          onClick: H,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l.jsxs(
        "div",
        {
          ref: ce || G,
          className: ie,
          style: be,
          role: "complementary",
          "aria-label": D,
          "aria-labelledby": F,
          "aria-describedby": q,
          tabIndex: -1,
          ...te,
          children: [
            ue,
            oe,
            /* @__PURE__ */ l.jsx("div", { className: fe, children: ae }),
            u && /* @__PURE__ */ l.jsx("div", { className: de, children: u })
          ]
        }
      )
    ] });
  }
), Al = Le(
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
    isCollapsed: x = !1,
    onToggleCollapse: k,
    borderBottom: z,
    background: E,
    customBackgroundColor: j,
    className: D = "",
    ariaLabel: F,
    role: q = "banner",
    // --- new flexible API ---
    layout: M,
    sections: O,
    position: P = "top",
    ...N
  }, J) => {
    const [$, W] = zt(!1);
    if (O) {
      const w = M ? me[`layout-${M}`] : "", G = P ? me[`position-${P}`] : "", v = Object.entries(O).map(
        ([S, H]) => {
          var ie;
          return S.toLowerCase().includes("hamburger") || S === "actionsRight" && tt.isValidElement(H) && ((ie = H.type) == null ? void 0 : ie.name) === "HamburgerMenu" ? /* @__PURE__ */ l.jsx(
            "div",
            {
              className: [
                me.headerSlot,
                me[`headerSlot-${S}`] || ""
              ].filter(Boolean).join(" "),
              onClick: () => W(!0),
              style: { cursor: "pointer" },
              children: H
            },
            S
          ) : /* @__PURE__ */ l.jsx(
            "div",
            {
              className: [
                me.headerSlot,
                me[`headerSlot-${S}`] || ""
              ].filter(Boolean).join(" "),
              children: H
            },
            S
          );
        }
      ), R = /* @__PURE__ */ l.jsxs("div", { style: { padding: 24 }, children: [
        O.nav && /* @__PURE__ */ l.jsx("div", { style: { marginBottom: 16 }, children: O.nav }),
        O.search && /* @__PURE__ */ l.jsx("div", { style: { marginBottom: 16 }, children: O.search }),
        O.actionsRight && /* @__PURE__ */ l.jsx("div", { children: O.actionsRight })
      ] });
      return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsxs(
          "header",
          {
            ...N,
            ref: J,
            className: [
              me.header,
              w,
              G,
              D,
              g ? me.sticky : "",
              E ? me[`bg-${E}`] : "",
              z ? me.borderBottom : ""
            ].filter(Boolean).join(" "),
            role: q,
            "aria-label": F || n,
            style: {
              ...N.style,
              ...j && {
                backgroundColor: j
              }
            },
            children: [
              /* @__PURE__ */ l.jsx(f, { className: me.headerInner, children: v }),
              c && /* @__PURE__ */ l.jsx(f, { className: me.headerChildren, children: c })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx(
          Bw,
          {
            kind: "navigation",
            open: $,
            onClose: () => W(!1),
            title: n || "Menu",
            header: null,
            hasOverlay: !0,
            showCloseButton: !0,
            role: "dialog",
            ariaLabel: "Mobile Navigation",
            children: R
          }
        )
      ] });
    }
    const T = Ll[t] || {}, A = p.filter(
      (w) => w.position === "left" || !w.position
    ), V = p.filter(
      (w) => w.position === "right"
    ), ee = [
      me.header,
      T.className || "",
      D,
      T.layout ? me[`layout-${T.layout}`] : "",
      T.padding ? me[`padding-${T.padding}`] : "",
      T.background ? me[`bg-${T.background}`] : "",
      z !== void 0 ? z ? me.borderBottom : "" : T.borderBottom ? me.borderBottom : "",
      g !== void 0 ? g ? me.sticky : "" : T.sticky ? me.sticky : "",
      y ? me.collapsible : "",
      x ? me.collapsed : "",
      T.responsive ? me.responsive : ""
    ].filter(Boolean).join(" "), le = (w, G) => w.length === 0 ? null : /* @__PURE__ */ l.jsx(
      f,
      {
        className: `${me.actions} ${me[`actions-${G}`]}`,
        children: w.map((v, R) => {
          let S;
          switch (v.type) {
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
              onClick: v.handler,
              className: v.className || "",
              "aria-label": v.label,
              icon: v.icon,
              children: v.label && v.type === "custom" ? v.label : void 0
            },
            R
          );
        })
      }
    ), ae = () => !T.showTabs || d.length === 0 ? null : /* @__PURE__ */ l.jsx(
      f,
      {
        className: `${me.tabs} ${me[`tabs-${T.tabsPosition}`]} ${me[`tabs-align-${T.tabsAlign}`]}`,
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
    ), te = () => !T.showTitle && !n && !a ? null : /* @__PURE__ */ l.jsxs(f, { className: me.titleSection, children: [
      r && /* @__PURE__ */ l.jsx("span", { className: me.titleIcon, children: r }),
      /* @__PURE__ */ l.jsxs(f, { className: me.titleContent, children: [
        n && /* @__PURE__ */ l.jsx(
          "h1",
          {
            className: `${me.title} ${me[`title-${T.titleSize}`]} ${me[`title-${T.titleWeight}`]}`,
            children: n
          }
        ),
        a && /* @__PURE__ */ l.jsx("p", { className: me.subtitle, children: a })
      ] }),
      y && /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: "icon",
          onClick: k,
          className: me.collapseButton,
          "aria-label": x ? "Expand header" : "Collapse header",
          icon: x ? "▼" : "▲"
        }
      )
    ] }), ce = () => {
      switch (T.layout) {
        case "left-aligned":
        case "center-aligned":
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            le(A, "left"),
            /* @__PURE__ */ l.jsxs(
              f,
              {
                className: T.layout === "center-aligned" ? `${me.content} ${me.contentCentered}` : me.content,
                children: [
                  te(),
                  T.tabsPosition === "below-title" && ae()
                ]
              }
            ),
            le(V, "right")
          ] });
        case "space-between":
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs(f, { className: me.leftSection, children: [
              le(A, "left"),
              te()
            ] }),
            T.tabsPosition === "beside-title" && ae(),
            /* @__PURE__ */ l.jsx(f, { className: me.rightSection, children: le(V, "right") })
          ] });
        case "custom":
        default:
          return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            le(A, "left"),
            /* @__PURE__ */ l.jsxs(f, { className: me.content, children: [
              te(),
              T.tabsPosition === "below-title" && ae()
            ] }),
            le(V, "right")
          ] });
      }
    };
    return /* @__PURE__ */ l.jsxs(
      "header",
      {
        ...N,
        ref: J,
        className: ee,
        role: q,
        "aria-label": F || n,
        style: {
          ...N.style,
          ...j && {
            backgroundColor: j
          }
        },
        children: [
          /* @__PURE__ */ l.jsxs(f, { className: me.headerInner, children: [
            ce(),
            T.tabsPosition === "separate-row" && ae()
          ] }),
          c && /* @__PURE__ */ l.jsx(f, { className: me.headerChildren, children: c })
        ]
      }
    );
  }
);
Al.displayName = "Header";
const O8 = ({
  title: t,
  tabs: n,
  currentTab: a,
  setTab: r,
  onBack: c
}) => {
  const d = n.map(
    (h) => ({
      label: h.label,
      value: h.value
    })
  ), u = [
    {
      type: "back",
      handler: c
    }
  ];
  return /* @__PURE__ */ l.jsx(
    Al,
    {
      kind: "browse-tabbed",
      title: t,
      tabs: d,
      currentTab: a,
      onTabChange: r,
      actions: u
    }
  );
};
function Ml(t, n) {
  const a = it(n);
  Te(function() {
    n !== a.current && t.attributionControl != null && (a.current != null && t.attributionControl.removeAttribution(a.current), n != null && t.attributionControl.addAttribution(n)), a.current = n;
  }, [
    t,
    n
  ]);
}
const $w = 1;
function Fw(t) {
  return Object.freeze({
    __version: $w,
    map: t
  });
}
function Ol(t, n) {
  return Object.freeze({
    ...t,
    ...n
  });
}
const Zo = ma(null);
function In() {
  const t = t_(Zo);
  if (t == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return t;
}
function Rl(t) {
  function n(a, r) {
    const { instance: c, context: d } = t(a).current;
    ha(r, () => c);
    const { children: u } = a;
    return u == null ? null : /* @__PURE__ */ tt.createElement(Zo, {
      value: d
    }, u);
  }
  return /* @__PURE__ */ Le(n);
}
function qw(t) {
  function n(a, r) {
    const [c, d] = zt(!1), { instance: u } = t(a, d).current;
    ha(r, () => u), Te(function() {
      c && u.update();
    }, [
      u,
      c,
      a.children
    ]);
    const h = u._contentNode;
    return h ? /* @__PURE__ */ i_(a.children, h) : null;
  }
  return /* @__PURE__ */ Le(n);
}
function Dl(t) {
  function n(a, r) {
    const { instance: c } = t(a).current;
    return ha(r, () => c), null;
  }
  return /* @__PURE__ */ Le(n);
}
function Hw(t) {
  return function(a) {
    const r = In(), c = t(a, r), { instance: d } = c.current, u = it(a.position), { position: h } = a;
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
function Uo(t, n) {
  const a = it(void 0);
  Te(function() {
    return n != null && t.instance.on(n), a.current = n, function() {
      a.current != null && t.instance.off(a.current), a.current = null;
    };
  }, [
    t,
    n
  ]);
}
function xa(t, n) {
  const a = t.pane ?? n.pane;
  return a ? {
    ...t,
    pane: a
  } : t;
}
function Zw(t, n) {
  return function(r, c) {
    const d = In(), u = t(xa(r, d), d);
    return Ml(d.map, r.attribution), Uo(u.current, r.eventHandlers), n(u.current, d, r, c), u;
  };
}
var Do = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(t, n) {
  (function(a, r) {
    r(n);
  })(n_, function(a) {
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
    function x() {
      return !1;
    }
    function k(e, i) {
      if (i === !1)
        return e;
      var o = Math.pow(10, i === void 0 ? 6 : i);
      return Math.round(e * o) / o;
    }
    function z(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }
    function E(e) {
      return z(e).split(/\s+/);
    }
    function j(e, i) {
      Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? d(e.options) : {});
      for (var o in i)
        e.options[o] = i[o];
      return e.options;
    }
    function D(e, i, o) {
      var s = [];
      for (var _ in e)
        s.push(encodeURIComponent(o ? _.toUpperCase() : _) + "=" + encodeURIComponent(e[_]));
      return (!i || i.indexOf("?") === -1 ? "?" : "&") + s.join("&");
    }
    var F = /\{ *([\w_ -]+) *\}/g;
    function q(e, i) {
      return e.replace(F, function(o, s) {
        var _ = i[s];
        if (_ === void 0)
          throw new Error("No value provided for variable " + o);
        return typeof _ == "function" && (_ = _(i)), _;
      });
    }
    var M = Array.isArray || function(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
    function O(e, i) {
      for (var o = 0; o < e.length; o++)
        if (e[o] === i)
          return o;
      return -1;
    }
    var P = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function N(e) {
      return window["webkit" + e] || window["moz" + e] || window["ms" + e];
    }
    var J = 0;
    function $(e) {
      var i = +/* @__PURE__ */ new Date(), o = Math.max(0, 16 - (i - J));
      return J = i + o, window.setTimeout(e, o);
    }
    var W = window.requestAnimationFrame || N("RequestAnimationFrame") || $, T = window.cancelAnimationFrame || N("CancelAnimationFrame") || N("CancelRequestAnimationFrame") || function(e) {
      window.clearTimeout(e);
    };
    function A(e, i, o) {
      if (o && W === $)
        e.call(i);
      else
        return W.call(window, u(e, i));
    }
    function V(e) {
      e && T.call(window, e);
    }
    var ee = {
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
      falseFn: x,
      formatNum: k,
      trim: z,
      splitWords: E,
      setOptions: j,
      getParamString: D,
      template: q,
      isArray: M,
      indexOf: O,
      emptyImageUrl: P,
      requestFn: W,
      cancelFn: T,
      requestAnimFrame: A,
      cancelAnimFrame: V
    };
    function le() {
    }
    le.extend = function(e) {
      var i = function() {
        j(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
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
        e = M(e) ? e : [e];
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
          e = E(e);
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
          e = E(e);
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
                s[_].fn = x;
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
            this._firingCount && (C.fn = x, this._events[e] = s = s.slice()), s.splice(b, 1);
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
          e = E(e);
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
    var G = Math.trunc || function(e) {
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
        return this.clone()._add(v(e));
      },
      _add: function(e) {
        return this.x += e.x, this.y += e.y, this;
      },
      // @method subtract(otherPoint: Point): Point
      // Returns the result of subtraction of the given point from the current.
      subtract: function(e) {
        return this.clone()._subtract(v(e));
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
        return this.x = G(this.x), this.y = G(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(e) {
        e = v(e);
        var i = e.x - this.x, o = e.y - this.y;
        return Math.sqrt(i * i + o * o);
      },
      // @method equals(otherPoint: Point): Boolean
      // Returns `true` if the given point has the same coordinates.
      equals: function(e) {
        return e = v(e), e.x === this.x && e.y === this.y;
      },
      // @method contains(otherPoint: Point): Boolean
      // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
      contains: function(e) {
        return e = v(e), Math.abs(e.x) <= Math.abs(this.x) && Math.abs(e.y) <= Math.abs(this.y);
      },
      // @method toString(): String
      // Returns a string representation of the point for debugging purposes.
      toString: function() {
        return "Point(" + k(this.x) + ", " + k(this.y) + ")";
      }
    };
    function v(e, i, o) {
      return e instanceof w ? e : M(e) ? new w(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new w(e.x, e.y) : new w(e, i, o);
    }
    function R(e, i) {
      if (e)
        for (var o = i ? [e, i] : e, s = 0, _ = o.length; s < _; s++)
          this.extend(o[s]);
    }
    R.prototype = {
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
          i = o = v(e);
        else if (e = S(e), i = e.min, o = e.max, !i || !o)
          return this;
        return !this.min && !this.max ? (this.min = i.clone(), this.max = o.clone()) : (this.min.x = Math.min(i.x, this.min.x), this.max.x = Math.max(o.x, this.max.x), this.min.y = Math.min(i.y, this.min.y), this.max.y = Math.max(o.y, this.max.y)), this;
      },
      // @method getCenter(round?: Boolean): Point
      // Returns the center point of the bounds.
      getCenter: function(e) {
        return v(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          e
        );
      },
      // @method getBottomLeft(): Point
      // Returns the bottom-left point of the bounds.
      getBottomLeft: function() {
        return v(this.min.x, this.max.y);
      },
      // @method getTopRight(): Point
      // Returns the top-right point of the bounds.
      getTopRight: function() {
        return v(this.max.x, this.min.y);
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
        return typeof e[0] == "number" || e instanceof w ? e = v(e) : e = S(e), e instanceof R ? (i = e.min, o = e.max) : i = o = e, i.x >= this.min.x && o.x <= this.max.x && i.y >= this.min.y && o.y <= this.max.y;
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
          v(i.x - s, i.y - _),
          v(o.x + s, o.y + _)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(e) {
        return e ? (e = S(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
      }
    };
    function S(e, i) {
      return !e || e instanceof R ? e : new R(e, i);
    }
    function H(e, i) {
      if (e)
        for (var o = i ? [e, i] : e, s = 0, _ = o.length; s < _; s++)
          this.extend(o[s]);
    }
    H.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var i = this._southWest, o = this._northEast, s, _;
        if (e instanceof X)
          s = e, _ = e;
        else if (e instanceof H) {
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
        return new H(
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
        return e instanceof H ? (s = e.getSouthWest(), _ = e.getNorthEast()) : s = _ = e, s.lat >= i.lat && _.lat <= o.lat && s.lng >= i.lng && _.lng <= o.lng;
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
      return e instanceof H ? e : new H(e, i);
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
        return "LatLng(" + k(this.lat, e) + ", " + k(this.lng, e) + ")";
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
      return e instanceof X ? e : M(e) && typeof e[0] != "object" ? e.length === 3 ? new X(e[0], e[1], e[2]) : e.length === 2 ? new X(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new X(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : i === void 0 ? null : new X(e, i, o);
    }
    var fe = {
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
        return new R(s, _);
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
        return new H(C, I);
      }
    }, de = c({}, fe, {
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
        return new R([-e, -e], [e, e]);
      }()
    };
    function Q(e, i, o, s) {
      if (M(e)) {
        this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
        return;
      }
      this._a = e, this._b = i, this._c = o, this._d = s;
    }
    Q.prototype = {
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
      return new Q(e, i, o, s);
    }
    var ue = c({}, de, {
      code: "EPSG:3857",
      projection: be,
      transformation: function() {
        var e = 0.5 / (Math.PI * be.R);
        return ne(e, 0.5, -e, 0.5);
      }()
    }), oe = c({}, ue, {
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
    var Z = document.documentElement.style, U = "ActiveXObject" in window, Oe = U && !document.addEventListener, nt = "msLaunchUri" in navigator && !("documentMode" in document), Ge = Vt("webkit"), Ue = Vt("android"), De = Vt("android 2") || Vt("android 3"), ve = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), $e = Ue && Vt("Google") && ve < 537 && !("AudioNode" in window), Qe = !!window.opera, st = !nt && Vt("chrome"), Ae = Vt("gecko") && !Ge && !Qe && !U, xt = !st && Vt("safari"), jt = Vt("phantom"), wt = "OTransition" in Z, ni = navigator.platform.indexOf("Win") === 0, Lt = U && "transition" in Z, ai = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !De, Bt = "MozPerspective" in Z, $t = !window.L_DISABLE_3D && (Lt || ai || Bt) && !wt && !jt, Wt = typeof orientation < "u" || Vt("mobile"), xi = Wt && Ge, wi = Wt && ai, ye = !window.PointerEvent && window.MSPointerEvent, Ee = !!(window.PointerEvent || ye), et = "ontouchstart" in window || !!window.TouchEvent, Tt = !window.L_NO_TOUCH && (et || Ee), oi = Wt && Qe, B = Wt && Ae, pe = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Se = function() {
      var e = !1;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function() {
            e = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", x, i), window.removeEventListener("testPassiveEventSupport", x, i);
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
    }(), dt = navigator.platform.indexOf("Mac") === 0, Ii = navigator.platform.indexOf("Linux") === 0;
    function Vt(e) {
      return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
    }
    var ge = {
      ie: U,
      ielt9: Oe,
      edge: nt,
      webkit: Ge,
      android: Ue,
      android23: De,
      androidStock: $e,
      opera: Qe,
      chrome: st,
      gecko: Ae,
      safari: xt,
      phantom: jt,
      opera12: wt,
      win: ni,
      ie3d: Lt,
      webkit3d: ai,
      gecko3d: Bt,
      any3d: $t,
      mobile: Wt,
      mobileWebkit: xi,
      mobileWebkit3d: wi,
      msPointer: ye,
      pointer: Ee,
      touch: Tt,
      touchNative: et,
      mobileOpera: oi,
      mobileGecko: B,
      retina: pe,
      passiveEvents: Se,
      canvas: kt,
      svg: Ft,
      vml: Sa,
      inlineSvg: ka,
      mac: dt,
      linux: Ii
    }, On = ge.msPointer ? "MSPointerDown" : "pointerdown", ki = ge.msPointer ? "MSPointerMove" : "pointermove", Go = ge.msPointer ? "MSPointerUp" : "pointerup", Ko = ge.msPointer ? "MSPointerCancel" : "pointercancel", Ca = {
      touchstart: On,
      touchmove: ki,
      touchend: Go,
      touchcancel: Ko
    }, Yo = {
      touchstart: Xl,
      touchmove: Rn,
      touchend: Rn,
      touchcancel: Rn
    }, Vi = {}, Jo = !1;
    function Vl(e, i, o) {
      return i === "touchstart" && Jl(), Yo[i] ? (o = Yo[i].bind(this, o), e.addEventListener(Ca[i], o, !1), o) : (console.warn("wrong event specified:", i), x);
    }
    function Gl(e, i, o) {
      if (!Ca[i]) {
        console.warn("wrong event specified:", i);
        return;
      }
      e.removeEventListener(Ca[i], o, !1);
    }
    function Kl(e) {
      Vi[e.pointerId] = e;
    }
    function Yl(e) {
      Vi[e.pointerId] && (Vi[e.pointerId] = e);
    }
    function Xo(e) {
      delete Vi[e.pointerId];
    }
    function Jl() {
      Jo || (document.addEventListener(On, Kl, !0), document.addEventListener(ki, Yl, !0), document.addEventListener(Go, Xo, !0), document.addEventListener(Ko, Xo, !0), Jo = !0);
    }
    function Rn(e, i) {
      if (i.pointerType !== (i.MSPOINTER_TYPE_MOUSE || "mouse")) {
        i.touches = [];
        for (var o in Vi)
          i.touches.push(Vi[o]);
        i.changedTouches = [i], e(i);
      }
    }
    function Xl(e, i) {
      i.MSPOINTER_TYPE_TOUCH && i.pointerType === i.MSPOINTER_TYPE_TOUCH && St(i), Rn(e, i);
    }
    function Ql(e) {
      var i = {}, o, s;
      for (s in e)
        o = e[s], i[s] = o && o.bind ? o.bind(e) : o;
      return e = i, i.type = "dblclick", i.detail = 2, i.isTrusted = !1, i._simulated = !0, i;
    }
    var ec = 200;
    function tc(e, i) {
      e.addEventListener("dblclick", i);
      var o = 0, s;
      function _(m) {
        if (m.detail !== 1) {
          s = m.detail;
          return;
        }
        if (!(m.pointerType === "mouse" || m.sourceCapabilities && !m.sourceCapabilities.firesTouchEvents)) {
          var b = nr(m);
          if (!(b.some(function(I) {
            return I instanceof HTMLLabelElement && I.attributes.for;
          }) && !b.some(function(I) {
            return I instanceof HTMLInputElement || I instanceof HTMLSelectElement;
          }))) {
            var C = Date.now();
            C - o <= ec ? (s++, s === 2 && i(Ql(m))) : s = 1, o = C;
          }
        }
      }
      return e.addEventListener("click", _), {
        dblclick: i,
        simDblclick: _
      };
    }
    function ic(e, i) {
      e.removeEventListener("dblclick", i.dblclick), e.removeEventListener("click", i.simDblclick);
    }
    var za = $n(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), ln = $n(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Qo = ln === "webkitTransition" || ln === "OTransition" ? ln + "End" : "transitionend";
    function er(e) {
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
    function at(e) {
      var i = e.parentNode;
      i && i.removeChild(e);
    }
    function Dn(e) {
      for (; e.firstChild; )
        e.removeChild(e.firstChild);
    }
    function Gi(e) {
      var i = e.parentNode;
      i && i.lastChild !== e && i.appendChild(e);
    }
    function Ki(e) {
      var i = e.parentNode;
      i && i.firstChild !== e && i.insertBefore(e, i.firstChild);
    }
    function ja(e, i) {
      if (e.classList !== void 0)
        return e.classList.contains(i);
      var o = Bn(e);
      return o.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(o);
    }
    function Ne(e, i) {
      if (e.classList !== void 0)
        for (var o = E(i), s = 0, _ = o.length; s < _; s++)
          e.classList.add(o[s]);
      else if (!ja(e, i)) {
        var m = Bn(e);
        Ta(e, (m ? m + " " : "") + i);
      }
    }
    function lt(e, i) {
      e.classList !== void 0 ? e.classList.remove(i) : Ta(e, z((" " + Bn(e) + " ").replace(" " + i + " ", " ")));
    }
    function Ta(e, i) {
      e.className.baseVal === void 0 ? e.className = i : e.className.baseVal = i;
    }
    function Bn(e) {
      return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
    }
    function Gt(e, i) {
      "opacity" in e.style ? e.style.opacity = i : "filter" in e.style && nc(e, i);
    }
    function nc(e, i) {
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
    function Li(e, i, o) {
      var s = i || new w(0, 0);
      e.style[za] = (ge.ie3d ? "translate(" + s.x + "px," + s.y + "px)" : "translate3d(" + s.x + "px," + s.y + "px,0)") + (o ? " scale(" + o + ")" : "");
    }
    function ct(e, i) {
      e._leaflet_pos = i, ge.any3d ? Li(e, i) : (e.style.left = i.x + "px", e.style.top = i.y + "px");
    }
    function Ai(e) {
      return e._leaflet_pos || new w(0, 0);
    }
    var _n, dn, Pa;
    if ("onselectstart" in document)
      _n = function() {
        ze(window, "selectstart", St);
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
    function Ea() {
      ze(window, "dragstart", St);
    }
    function Na() {
      Ke(window, "dragstart", St);
    }
    var Fn, Ia;
    function La(e) {
      for (; e.tabIndex === -1; )
        e = e.parentNode;
      e.style && (qn(), Fn = e, Ia = e.style.outlineStyle, e.style.outlineStyle = "none", ze(window, "keydown", qn));
    }
    function qn() {
      Fn && (Fn.style.outlineStyle = Ia, Fn = void 0, Ia = void 0, Ke(window, "keydown", qn));
    }
    function tr(e) {
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
    var ac = {
      __proto__: null,
      TRANSFORM: za,
      TRANSITION: ln,
      TRANSITION_END: Qo,
      get: er,
      getStyle: cn,
      create: Be,
      remove: at,
      empty: Dn,
      toFront: Gi,
      toBack: Ki,
      hasClass: ja,
      addClass: Ne,
      removeClass: lt,
      setClass: Ta,
      getClass: Bn,
      setOpacity: Gt,
      testProp: $n,
      setTransform: Li,
      setPosition: ct,
      getPosition: Ai,
      get disableTextSelection() {
        return _n;
      },
      get enableTextSelection() {
        return dn;
      },
      disableImageDrag: Ea,
      enableImageDrag: Na,
      preventOutline: La,
      restoreOutline: qn,
      getSizedParentNode: tr,
      getScale: Aa
    };
    function ze(e, i, o, s) {
      if (i && typeof i == "object")
        for (var _ in i)
          Oa(e, _, i[_], o);
      else {
        i = E(i);
        for (var m = 0, b = i.length; m < b; m++)
          Oa(e, i[m], o, s);
      }
      return this;
    }
    var ri = "_leaflet_events";
    function Ke(e, i, o, s) {
      if (arguments.length === 1)
        ir(e), delete e[ri];
      else if (i && typeof i == "object")
        for (var _ in i)
          Ra(e, _, i[_], o);
      else if (i = E(i), arguments.length === 2)
        ir(e, function(C) {
          return O(i, C) !== -1;
        });
      else
        for (var m = 0, b = i.length; m < b; m++)
          Ra(e, i[m], o, s);
      return this;
    }
    function ir(e, i) {
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
      !ge.touchNative && ge.pointer && i.indexOf("touch") === 0 ? m = Vl(e, i, m) : ge.touch && i === "dblclick" ? m = tc(e, m) : "addEventListener" in e ? i === "touchstart" || i === "touchmove" || i === "wheel" || i === "mousewheel" ? e.addEventListener(Ma[i] || i, m, ge.passiveEvents ? { passive: !1 } : !1) : i === "mouseenter" || i === "mouseleave" ? (m = function(C) {
        C = C || window.event, Ba(e, C) && b(C);
      }, e.addEventListener(Ma[i], m, !1)) : e.addEventListener(i, b, !1) : e.attachEvent("on" + i, m), e[ri] = e[ri] || {}, e[ri][_] = m;
    }
    function Ra(e, i, o, s, _) {
      _ = _ || i + p(o) + (s ? "_" + p(s) : "");
      var m = e[ri] && e[ri][_];
      if (!m)
        return this;
      !ge.touchNative && ge.pointer && i.indexOf("touch") === 0 ? Gl(e, i, m) : ge.touch && i === "dblclick" ? ic(e, m) : "removeEventListener" in e ? e.removeEventListener(Ma[i] || i, m, !1) : e.detachEvent("on" + i, m), e[ri][_] = null;
    }
    function Mi(e) {
      return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
    }
    function Da(e) {
      return Oa(e, "wheel", Mi), this;
    }
    function mn(e) {
      return ze(e, "mousedown touchstart dblclick contextmenu", Mi), e._leaflet_disable_click = !0, this;
    }
    function St(e) {
      return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
    }
    function Oi(e) {
      return St(e), Mi(e), this;
    }
    function nr(e) {
      if (e.composedPath)
        return e.composedPath();
      for (var i = [], o = e.target; o; )
        i.push(o), o = o.parentNode;
      return i;
    }
    function ar(e, i) {
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
    var oc = ge.linux && ge.chrome ? window.devicePixelRatio : ge.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function or(e) {
      return ge.edge ? e.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        e.deltaY && e.deltaMode === 0 ? -e.deltaY / oc : (
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
    var rc = {
      __proto__: null,
      on: ze,
      off: Ke,
      stopPropagation: Mi,
      disableScrollPropagation: Da,
      disableClickPropagation: mn,
      preventDefault: St,
      stop: Oi,
      getPropagationPath: nr,
      getMousePosition: ar,
      getWheelDelta: or,
      isExternalTarget: Ba,
      addListener: ze,
      removeListener: Ke
    }, rr = ce.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(e, i, o, s) {
        this.stop(), this._el = e, this._inProgress = !0, this._duration = o || 0.25, this._easeOutPower = 1 / Math.max(s || 0.5, 0.2), this._startPos = Ai(e), this._offset = i.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = A(this._animate, this), this._step();
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
        i = j(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = u(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), i.zoom !== void 0 && (this._zoom = this._limitZoom(i.zoom)), i.center && i.zoom !== void 0 && this.setView(K(i.center), i.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = ln && ge.any3d && !ge.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), ze(this._proxy, Qo, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
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
        var o = v(i.paddingTopLeft || i.padding || [0, 0]), s = v(i.paddingBottomRight || i.padding || [0, 0]), _ = this.getBoundsZoom(e, !1, o.add(s));
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
        if (e = v(e).round(), i = i || {}, !e.x && !e.y)
          return this.fire("moveend");
        if (i.animate !== !0 && !this.getSize().contains(e))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new rr(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), i.noMoveStart || this.fire("movestart"), i.animate !== !1) {
          Ne(this._mapPane, "leaflet-pan-anim");
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
        var C = Math.max(m.x, m.y), I = C * this.getZoomScale(b, i), Y = _.distanceTo(s) || 1, re = 1.42, xe = re * re;
        function Ie(_t) {
          var ea = _t ? -1 : 1, Gc = _t ? I : C, Kc = I * I - C * C + ea * xe * xe * Y * Y, Yc = 2 * Gc * xe * Y, Ya = Kc / Yc, $r = Math.sqrt(Ya * Ya + 1) - Ya, Jc = $r < 1e-9 ? -18 : Math.log($r);
          return Jc;
        }
        function Pt(_t) {
          return (Math.exp(_t) - Math.exp(-_t)) / 2;
        }
        function pt(_t) {
          return (Math.exp(_t) + Math.exp(-_t)) / 2;
        }
        function Yt(_t) {
          return Pt(_t) / pt(_t);
        }
        var At = Ie(0);
        function tn(_t) {
          return C * (pt(At) / pt(At + re * _t));
        }
        function Zc(_t) {
          return C * (pt(At) * Yt(At + re * _t) - Pt(At)) / xe;
        }
        function Uc(_t) {
          return 1 - Math.pow(1 - _t, 1.5);
        }
        var Wc = Date.now(), Dr = (Ie(1) - At) / re, Vc = o.duration ? 1e3 * o.duration : 1e3 * Dr * 0.8;
        function Br() {
          var _t = (Date.now() - Wc) / Vc, ea = Uc(_t) * Dr;
          _t <= 1 ? (this._flyToFrame = A(Br, this), this._move(
            this.unproject(s.add(_.subtract(s).multiplyBy(Zc(ea) / Y)), b),
            this.getScaleZoom(C / tn(ea), b),
            { flyTo: !0 }
          )) : this._move(e, i)._moveEnd(!0);
        }
        return this._moveStart(!0, o.noMoveStart), Br.call(this), this;
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
        var o = v(i.paddingTopLeft || i.padding || [0, 0]), s = v(i.paddingBottomRight || i.padding || [0, 0]), _ = this.project(this.getCenter()), m = this.project(e), b = this.getPixelBounds(), C = S([b.min.add(o), b.max.subtract(s)]), I = C.getSize();
        if (!C.contains(m)) {
          this._enforcingBounds = !0;
          var Y = m.subtract(C.getCenter()), re = C.extend(m).getSize().subtract(I);
          _.x += Y.x < 0 ? -re.x : re.x, _.y += Y.y < 0 ? -re.y : re.y, this.panTo(this.unproject(_), i), this._enforcingBounds = !1;
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
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), at(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (V(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var e;
        for (e in this._layers)
          this._layers[e].remove();
        for (e in this._panes)
          at(this._panes[e]);
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
        return new H(i, o);
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
        e = ie(e), o = v(o || [0, 0]);
        var s = this.getZoom() || 0, _ = this.getMinZoom(), m = this.getMaxZoom(), b = e.getNorthWest(), C = e.getSouthEast(), I = this.getSize().subtract(o), Y = S(this.project(C, s), this.project(b, s)).getSize(), re = ge.any3d ? this.options.zoomSnap : 1, xe = I.x / Y.x, Ie = I.y / Y.y, Pt = i ? Math.max(xe, Ie) : Math.min(xe, Ie);
        return s = this.getScaleZoom(Pt, s), re && (s = Math.round(s / (re / 100)) * (re / 100), s = i ? Math.ceil(s / re) * re : Math.floor(s / re) * re), Math.max(_, Math.min(m, s));
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
        return new R(o, o.add(this.getSize()));
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
        return i = i === void 0 ? this._zoom : i, this.options.crs.pointToLatLng(v(e), i);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(e) {
        var i = v(e).add(this.getPixelOrigin());
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
        return v(e).subtract(this._getMapPanePos());
      },
      // @method layerPointToContainerPoint(point: Point): Point
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding pixel coordinate relative to the map container.
      layerPointToContainerPoint: function(e) {
        return v(e).add(this._getMapPanePos());
      },
      // @method containerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the map container, returns
      // the corresponding geographical coordinate (for the current zoom level).
      containerPointToLatLng: function(e) {
        var i = this.containerPointToLayerPoint(v(e));
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
        return ar(e, this._container);
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
        var i = this._container = er(e);
        if (i) {
          if (i._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        ze(i, "scroll", this._onScroll, this), this._containerId = p(i);
      },
      _initLayout: function() {
        var e = this._container;
        this._fadeAnimated = this.options.fadeAnimation && ge.any3d, Ne(e, "leaflet-container" + (ge.touch ? " leaflet-touch" : "") + (ge.retina ? " leaflet-retina" : "") + (ge.ielt9 ? " leaflet-oldie" : "") + (ge.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var i = cn(e, "position");
        i !== "absolute" && i !== "relative" && i !== "fixed" && i !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var e = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ct(this._mapPane, new w(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ne(e.markerPane, "leaflet-zoom-hide"), Ne(e.shadowPane, "leaflet-zoom-hide"));
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
        var i = e ? Ke : ze;
        i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ge.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        V(this._resizeRequest), this._resizeRequest = A(
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
            if (_[b].fire(i, I, !0), I.originalEvent._stopped || _[b].options.bubblingMouseEvents === !1 && O(this._mouseEvents, i) !== -1)
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
        return Ai(this._mapPane) || new w(0, 0);
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
        var s = this.project(e, i), _ = this.getSize().divideBy(2), m = new R(s.subtract(_), s.add(_)), b = this._getBoundsOffset(m, o, i);
        return Math.abs(b.x) <= 1 && Math.abs(b.y) <= 1 ? e : this.unproject(s.add(b), i);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(e, i) {
        if (!i)
          return e;
        var o = this.getPixelBounds(), s = new R(o.min.add(e), o.max.add(e));
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
          var o = za, s = this._proxy.style[o];
          Li(this._proxy, this.project(i.center, i.zoom), this.getZoomScale(i.zoom, 1)), s === this._proxy.style[o] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        at(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var e = this.getCenter(), i = this.getZoom();
        Li(this._proxy, this.project(e, i), this.getZoomScale(i, 1));
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
        return o.animate !== !0 && !this.getSize().contains(_) ? !1 : (A(function() {
          this._moveStart(!0, o.noMoveStart || !1)._animateZoom(e, i, !0);
        }, this), !0);
      },
      _animateZoom: function(e, i, o, s) {
        this._mapPane && (o && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = i, Ne(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: e,
          zoom: i,
          noUpdate: s
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(u(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && lt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function sc(e, i) {
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
        j(this, e);
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
        return Ne(i, "leaflet-control"), o.indexOf("bottom") !== -1 ? s.insertBefore(i, s.firstChild) : s.appendChild(i), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (at(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
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
          at(this._controlCorners[e]);
        at(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var sr = Qt.extend({
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
        j(this, o), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
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
        Ne(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var e = this._map.getSize().y - (this._container.offsetTop + 50);
        return e < this._section.clientHeight ? (Ne(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : lt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
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
        o && (this._map.on("click", this.collapse, this), ze(i, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var _ = this._layersLink = Be("a", e + "-toggle", i);
        _.href = "#", _.title = "Layers", _.setAttribute("role", "button"), ze(_, {
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
        e.overlay ? (s = document.createElement("input"), s.type = "checkbox", s.className = "leaflet-control-layers-selector", s.defaultChecked = o) : s = this._createRadioElement("leaflet-base-layers_" + p(this), o), this._layerControlInputs.push(s), s.layerId = p(e.layer), ze(s, "click", this._onInputClick, this);
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
        this._preventClick = !0, ze(e, "click", St), this.expand();
        var i = this;
        setTimeout(function() {
          Ke(e, "click", St), i._preventClick = !1;
        });
      }
    }), lc = function(e, i, o) {
      return new sr(e, i, o);
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
        return m.innerHTML = e, m.href = "#", m.title = i, m.setAttribute("role", "button"), m.setAttribute("aria-label", i), mn(m), ze(m, "click", Oi), ze(m, "click", _, this), ze(m, "click", this._refocusOnMap, this), m;
      },
      _updateDisabled: function() {
        var e = this._map, i = "leaflet-disabled";
        lt(this._zoomInButton, i), lt(this._zoomOutButton, i), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Ne(this._zoomOutButton, i), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Ne(this._zoomInButton, i), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    Re.mergeOptions({
      zoomControl: !0
    }), Re.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new $a(), this.addControl(this.zoomControl));
    });
    var cc = function(e) {
      return new $a(e);
    }, lr = Qt.extend({
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
    }), _c = function(e) {
      return new lr(e);
    }, dc = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Fa = Qt.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (ge.inlineSvg ? dc + " " : "") + "Leaflet</a>"
      },
      initialize: function(e) {
        j(this, e), this._attributions = {};
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
    var uc = function(e) {
      return new Fa(e);
    };
    Qt.Layers = sr, Qt.Zoom = $a, Qt.Scale = lr, Qt.Attribution = Fa, hn.layers = lc, hn.zoom = cc, hn.scale = _c, hn.attribution = uc;
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
    var mc = { Events: te }, cr = ge.touch ? "touchstart mousedown" : "mousedown", Si = ce.extend({
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
        j(this, s), this._element = e, this._dragStartTarget = i || e, this._preventOutline = o;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (ze(this._dragStartTarget, cr, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (Si._dragging === this && this.finishDrag(!0), Ke(this._dragStartTarget, cr, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(e) {
        if (this._enabled && (this._moved = !1, !ja(this._element, "leaflet-zoom-anim"))) {
          if (e.touches && e.touches.length !== 1) {
            Si._dragging === this && this.finishDrag();
            return;
          }
          if (!(Si._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (Si._dragging = this, this._preventOutline && La(this._element), Ea(), _n(), !this._moving)) {
            this.fire("down");
            var i = e.touches ? e.touches[0] : e, o = tr(this._element);
            this._startPoint = new w(i.clientX, i.clientY), this._startPos = Ai(this._element), this._parentScale = Aa(o);
            var s = e.type === "mousedown";
            ze(document, s ? "mousemove" : "touchmove", this._onMove, this), ze(document, s ? "mouseup" : "touchend touchcancel", this._onUp, this);
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
          !o.x && !o.y || Math.abs(o.x) + Math.abs(o.y) < this.options.clickTolerance || (o.x /= this._parentScale.x, o.y /= this._parentScale.y, St(e), this._moved || (this.fire("dragstart"), this._moved = !0, Ne(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ne(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(o), this._moving = !0, this._lastEvent = e, this._updatePosition());
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
        lt(document.body, "leaflet-dragging"), this._lastTarget && (lt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Ke(document, "mousemove touchmove", this._onMove, this), Ke(document, "mouseup touchend touchcancel", this._onUp, this), Na(), dn();
        var i = this._moved && this._moving;
        this._moving = !1, Si._dragging = !1, i && this.fire("dragend", {
          noInertia: e,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function _r(e, i, o) {
      var s, _ = [1, 4, 2, 8], m, b, C, I, Y, re, xe, Ie;
      for (m = 0, re = e.length; m < re; m++)
        e[m]._code = Ri(e[m], i);
      for (C = 0; C < 4; C++) {
        for (xe = _[C], s = [], m = 0, re = e.length, b = re - 1; m < re; b = m++)
          I = e[m], Y = e[b], I._code & xe ? Y._code & xe || (Ie = Hn(Y, I, xe, i, o), Ie._code = Ri(Ie, i), s.push(Ie)) : (Y._code & xe && (Ie = Hn(Y, I, xe, i, o), Ie._code = Ri(Ie, i), s.push(Ie)), s.push(I));
        e = s;
      }
      return e;
    }
    function dr(e, i) {
      var o, s, _, m, b, C, I, Y, re;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      Kt(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var xe = K([0, 0]), Ie = ie(e), Pt = Ie.getNorthWest().distanceTo(Ie.getSouthWest()) * Ie.getNorthEast().distanceTo(Ie.getNorthWest());
      Pt < 1700 && (xe = qa(e));
      var pt = e.length, Yt = [];
      for (o = 0; o < pt; o++) {
        var At = K(e[o]);
        Yt.push(i.project(K([At.lat - xe.lat, At.lng - xe.lng])));
      }
      for (C = I = Y = 0, o = 0, s = pt - 1; o < pt; s = o++)
        _ = Yt[o], m = Yt[s], b = _.y * m.x - m.y * _.x, I += (_.x + m.x) * b, Y += (_.y + m.y) * b, C += b * 3;
      C === 0 ? re = Yt[0] : re = [I / C, Y / C];
      var tn = i.unproject(v(re));
      return K([tn.lat + xe.lat, tn.lng + xe.lng]);
    }
    function qa(e) {
      for (var i = 0, o = 0, s = 0, _ = 0; _ < e.length; _++) {
        var m = K(e[_]);
        i += m.lat, o += m.lng, s++;
      }
      return K([i / s, o / s]);
    }
    var hc = {
      __proto__: null,
      clipPolygon: _r,
      polygonCenter: dr,
      centroid: qa
    };
    function ur(e, i) {
      if (!i || !e.length)
        return e.slice();
      var o = i * i;
      return e = gc(e, o), e = fc(e, o), e;
    }
    function mr(e, i, o) {
      return Math.sqrt(pn(e, i, o, !0));
    }
    function pc(e, i, o) {
      return pn(e, i, o);
    }
    function fc(e, i) {
      var o = e.length, s = typeof Uint8Array < "u" ? Uint8Array : Array, _ = new s(o);
      _[0] = _[o - 1] = 1, Ha(e, _, i, 0, o - 1);
      var m, b = [];
      for (m = 0; m < o; m++)
        _[m] && b.push(e[m]);
      return b;
    }
    function Ha(e, i, o, s, _) {
      var m = 0, b, C, I;
      for (C = s + 1; C <= _ - 1; C++)
        I = pn(e[C], e[s], e[_], !0), I > m && (b = C, m = I);
      m > o && (i[b] = 1, Ha(e, i, o, s, b), Ha(e, i, o, b, _));
    }
    function gc(e, i) {
      for (var o = [e[0]], s = 1, _ = 0, m = e.length; s < m; s++)
        bc(e[s], e[_]) > i && (o.push(e[s]), _ = s);
      return _ < m - 1 && o.push(e[m - 1]), o;
    }
    var hr;
    function pr(e, i, o, s, _) {
      var m = s ? hr : Ri(e, o), b = Ri(i, o), C, I, Y;
      for (hr = b; ; ) {
        if (!(m | b))
          return [e, i];
        if (m & b)
          return !1;
        C = m || b, I = Hn(e, i, C, o, _), Y = Ri(I, o), C === m ? (e = I, m = Y) : (i = I, b = Y);
      }
    }
    function Hn(e, i, o, s, _) {
      var m = i.x - e.x, b = i.y - e.y, C = s.min, I = s.max, Y, re;
      return o & 8 ? (Y = e.x + m * (I.y - e.y) / b, re = I.y) : o & 4 ? (Y = e.x + m * (C.y - e.y) / b, re = C.y) : o & 2 ? (Y = I.x, re = e.y + b * (I.x - e.x) / m) : o & 1 && (Y = C.x, re = e.y + b * (C.x - e.x) / m), new w(Y, re, _);
    }
    function Ri(e, i) {
      var o = 0;
      return e.x < i.min.x ? o |= 1 : e.x > i.max.x && (o |= 2), e.y < i.min.y ? o |= 4 : e.y > i.max.y && (o |= 8), o;
    }
    function bc(e, i) {
      var o = i.x - e.x, s = i.y - e.y;
      return o * o + s * s;
    }
    function pn(e, i, o, s) {
      var _ = i.x, m = i.y, b = o.x - _, C = o.y - m, I = b * b + C * C, Y;
      return I > 0 && (Y = ((e.x - _) * b + (e.y - m) * C) / I, Y > 1 ? (_ = o.x, m = o.y) : Y > 0 && (_ += b * Y, m += C * Y)), b = e.x - _, C = e.y - m, s ? b * b + C * C : new w(_, m);
    }
    function Kt(e) {
      return !M(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
    }
    function fr(e) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Kt(e);
    }
    function gr(e, i) {
      var o, s, _, m, b, C, I, Y;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      Kt(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var re = K([0, 0]), xe = ie(e), Ie = xe.getNorthWest().distanceTo(xe.getSouthWest()) * xe.getNorthEast().distanceTo(xe.getNorthWest());
      Ie < 1700 && (re = qa(e));
      var Pt = e.length, pt = [];
      for (o = 0; o < Pt; o++) {
        var Yt = K(e[o]);
        pt.push(i.project(K([Yt.lat - re.lat, Yt.lng - re.lng])));
      }
      for (o = 0, s = 0; o < Pt - 1; o++)
        s += pt[o].distanceTo(pt[o + 1]) / 2;
      if (s === 0)
        Y = pt[0];
      else
        for (o = 0, m = 0; o < Pt - 1; o++)
          if (b = pt[o], C = pt[o + 1], _ = b.distanceTo(C), m += _, m > s) {
            I = (m - s) / _, Y = [
              C.x - I * (C.x - b.x),
              C.y - I * (C.y - b.y)
            ];
            break;
          }
      var At = i.unproject(v(Y));
      return K([At.lat + re.lat, At.lng + re.lng]);
    }
    var yc = {
      __proto__: null,
      simplify: ur,
      pointToSegmentDistance: mr,
      closestPointOnSegment: pc,
      clipSegment: pr,
      _getEdgeIntersection: Hn,
      _getBitCode: Ri,
      _sqClosestPointOnSegment: pn,
      isFlat: Kt,
      _flat: fr,
      polylineCenter: gr
    }, Za = {
      project: function(e) {
        return new w(e.lng, e.lat);
      },
      unproject: function(e) {
        return new X(e.y, e.x);
      },
      bounds: new R([-180, -90], [180, 90])
    }, Ua = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new R([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(e) {
        var i = Math.PI / 180, o = this.R, s = e.lat * i, _ = this.R_MINOR / o, m = Math.sqrt(1 - _ * _), b = m * Math.sin(s), C = Math.tan(Math.PI / 4 - s / 2) / Math.pow((1 - b) / (1 + b), m / 2);
        return s = -o * Math.log(Math.max(C, 1e-10)), new w(e.lng * i * o, s);
      },
      unproject: function(e) {
        for (var i = 180 / Math.PI, o = this.R, s = this.R_MINOR / o, _ = Math.sqrt(1 - s * s), m = Math.exp(-e.y / o), b = Math.PI / 2 - 2 * Math.atan(m), C = 0, I = 0.1, Y; C < 15 && Math.abs(I) > 1e-7; C++)
          Y = _ * Math.sin(b), Y = Math.pow((1 - Y) / (1 + Y), _ / 2), I = Math.PI / 2 - 2 * Math.atan(m * Y) - b, b += I;
        return new X(b * i, e.x * i / o);
      }
    }, vc = {
      __proto__: null,
      LonLat: Za,
      Mercator: Ua,
      SphericalMercator: be
    }, xc = c({}, de, {
      code: "EPSG:3395",
      projection: Ua,
      transformation: function() {
        var e = 0.5 / (Math.PI * Ua.R);
        return ne(e, 0.5, -e, 0.5);
      }()
    }), br = c({}, de, {
      code: "EPSG:4326",
      projection: Za,
      transformation: ne(1 / 180, 1, -1 / 180, 0.5)
    }), wc = c({}, fe, {
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
    fe.Earth = de, fe.EPSG3395 = xc, fe.EPSG3857 = ue, fe.EPSG900913 = oe, fe.EPSG4326 = br, fe.Simple = wc;
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
        e = e ? M(e) ? e : [e] : [];
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
    var Yi = ei.extend({
      initialize: function(e, i) {
        j(this, i), this._layers = {};
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
    }), kc = function(e, i) {
      return new Yi(e, i);
    }, ui = Yi.extend({
      addLayer: function(e) {
        return this.hasLayer(e) ? this : (e.addEventParent(this), Yi.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
      },
      removeLayer: function(e) {
        return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), Yi.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
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
        var e = new H();
        for (var i in this._layers) {
          var o = this._layers[i];
          e.extend(o.getBounds ? o.getBounds() : o.getLatLng());
        }
        return e;
      }
    }), Sc = function(e, i) {
      return new ui(e, i);
    }, Ji = le.extend({
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
        j(this, e);
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
        var _ = v(s), m = v(i === "shadow" && o.shadowAnchor || o.iconAnchor || _ && _.divideBy(2, !0));
        e.className = "leaflet-marker-" + i + " " + (o.className || ""), m && (e.style.marginLeft = -m.x + "px", e.style.marginTop = -m.y + "px"), _ && (e.style.width = _.x + "px", e.style.height = _.y + "px");
      },
      _createImg: function(e, i) {
        return i = i || document.createElement("img"), i.src = e, i;
      },
      _getIconUrl: function(e) {
        return ge.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
      }
    });
    function Cc(e) {
      return new Ji(e);
    }
    var fn = Ji.extend({
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
        return typeof fn.imagePath != "string" && (fn.imagePath = this._detectIconPath()), (this.options.imagePath || fn.imagePath) + Ji.prototype._getIconUrl.call(this, e);
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
    }), yr = si.extend({
      initialize: function(e) {
        this._marker = e;
      },
      addHooks: function() {
        var e = this._marker._icon;
        this._draggable || (this._draggable = new Si(e, e, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), Ne(e, "leaflet-marker-draggable");
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
        var i = this._marker, o = i._map, s = this._marker.options.autoPanSpeed, _ = this._marker.options.autoPanPadding, m = Ai(i._icon), b = o.getPixelBounds(), C = o.getPixelOrigin(), I = S(
          b.min._subtract(C).add(_),
          b.max._subtract(C).subtract(_)
        );
        if (!I.contains(m)) {
          var Y = v(
            (Math.max(I.max.x, m.x) - I.max.x) / (b.max.x - I.max.x) - (Math.min(I.min.x, m.x) - I.min.x) / (b.min.x - I.min.x),
            (Math.max(I.max.y, m.y) - I.max.y) / (b.max.y - I.max.y) - (Math.min(I.min.y, m.y) - I.min.y) / (b.min.y - I.min.y)
          ).multiplyBy(s);
          o.panBy(Y, { animate: !1 }), this._draggable._newPos._add(Y), this._draggable._startPos._add(Y), ct(i._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = A(this._adjustPan.bind(this, e));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(e) {
        this._marker.options.autoPan && (V(this._panRequest), this._panRequest = A(this._adjustPan.bind(this, e)));
      },
      _onDrag: function(e) {
        var i = this._marker, o = i._shadow, s = Ai(i._icon), _ = i._map.layerPointToLatLng(s);
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
        j(this, i), this._latlng = K(e);
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
        o !== this._icon && (this._icon && this._removeIcon(), s = !0, e.title && (o.title = e.title), o.tagName === "IMG" && (o.alt = e.alt || "")), Ne(o, i), e.keyboard && (o.tabIndex = "0", o.setAttribute("role", "button")), this._icon = o, e.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && ze(o, "focus", this._panOnFocus, this);
        var _ = e.icon.createShadow(this._shadow), m = !1;
        _ !== this._shadow && (this._removeShadow(), m = !0), _ && (Ne(_, i), _.alt = ""), this._shadow = _, e.opacity < 1 && this._updateOpacity(), s && this.getPane().appendChild(this._icon), this._initInteraction(), _ && m && this.getPane(e.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Ke(this._icon, "focus", this._panOnFocus, this), at(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && at(this._shadow), this._shadow = null;
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
        if (this.options.interactive && (Ne(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), yr)) {
          var e = this.options.draggable;
          this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new yr(this), e && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(e) {
        return this.options.opacity = e, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var e = this.options.opacity;
        this._icon && Gt(this._icon, e), this._shadow && Gt(this._shadow, e);
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
          var i = this.options.icon.options, o = i.iconSize ? v(i.iconSize) : v(0, 0), s = i.iconAnchor ? v(i.iconAnchor) : v(0, 0);
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
    function zc(e, i) {
      return new Zn(e, i);
    }
    var Ci = ei.extend({
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
        return j(this, e), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && e && Object.prototype.hasOwnProperty.call(e, "weight") && this._updateBounds()), this;
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
    }), Un = Ci.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(e, i) {
        j(this, i), this._latlng = K(e), this._radius = this.options.radius;
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
        return Ci.prototype.setStyle.call(this, e), this.setRadius(i), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var e = this._radius, i = this._radiusY || e, o = this._clickTolerance(), s = [e + o, i + o];
        this._pxBounds = new R(this._point.subtract(s), this._point.add(s));
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
    function jc(e, i) {
      return new Un(e, i);
    }
    var Wa = Un.extend({
      initialize: function(e, i, o) {
        if (typeof i == "number" && (i = c({}, o, { radius: i })), j(this, i), this._latlng = K(e), isNaN(this.options.radius))
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
        return new H(
          this._map.layerPointToLatLng(this._point.subtract(e)),
          this._map.layerPointToLatLng(this._point.add(e))
        );
      },
      setStyle: Ci.prototype.setStyle,
      _project: function() {
        var e = this._latlng.lng, i = this._latlng.lat, o = this._map, s = o.options.crs;
        if (s.distance === de.distance) {
          var _ = Math.PI / 180, m = this._mRadius / de.R / _, b = o.project([i + m, e]), C = o.project([i - m, e]), I = b.add(C).divideBy(2), Y = o.unproject(I).lat, re = Math.acos((Math.cos(m * _) - Math.sin(i * _) * Math.sin(Y * _)) / (Math.cos(i * _) * Math.cos(Y * _))) / _;
          (isNaN(re) || re === 0) && (re = m / Math.cos(Math.PI / 180 * i)), this._point = I.subtract(o.getPixelOrigin()), this._radius = isNaN(re) ? 0 : I.x - o.project([Y, e - re]).x, this._radiusY = I.y - b.y;
        } else {
          var xe = s.unproject(s.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = o.latLngToLayerPoint(this._latlng), this._radius = this._point.x - o.latLngToLayerPoint(xe).x;
        }
        this._updateBounds();
      }
    });
    function Tc(e, i, o) {
      return new Wa(e, i, o);
    }
    var mi = Ci.extend({
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
        j(this, i), this._setLatLngs(e);
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
          for (var I = this._parts[b], Y = 1, re = I.length; Y < re; Y++) {
            _ = I[Y - 1], m = I[Y];
            var xe = s(e, _, m, !0);
            xe < i && (i = xe, o = s(e, _, m));
          }
        return o && (o.distance = Math.sqrt(i)), o;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return gr(this._defaultShape(), this._map.options.crs);
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
        this._bounds = new H(), this._latlngs = this._convertLatLngs(e);
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
        var e = new R();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
      },
      _updateBounds: function() {
        var e = this._clickTolerance(), i = new w(e, e);
        this._rawPxBounds && (this._pxBounds = new R([
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
              C = pr(I[s], I[s + 1], e, s, !0), C && (i[_] = i[_] || [], i[_].push(C[0]), (C[1] !== I[s + 1] || s === b - 2) && (i[_].push(C[1]), _++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var e = this._parts, i = this.options.smoothFactor, o = 0, s = e.length; o < s; o++)
          e[o] = ur(e[o], i);
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
            if (!(!i && s === 0) && mr(e, C[_], C[s]) <= I)
              return !0;
        return !1;
      }
    });
    function Pc(e, i) {
      return new mi(e, i);
    }
    mi._flat = fr;
    var Xi = mi.extend({
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
        return dr(this._defaultShape(), this._map.options.crs);
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
        if (e = new R(e.min.subtract(o), e.max.add(o)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var s = 0, _ = this._rings.length, m; s < _; s++)
            m = _r(this._rings[s], e, !0), m.length && this._parts.push(m);
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
    function Ec(e, i) {
      return new Xi(e, i);
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
        j(this, i), this._layers = {}, e && this.addData(e);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(e) {
        var i = M(e) ? e : e.features, o, s, _;
        if (i) {
          for (o = 0, s = i.length; o < s; o++)
            _ = i[o], (_.geometries || _.geometry || _.features || _.coordinates) && this.addData(_);
          return this;
        }
        var m = this.options;
        if (m.filter && !m.filter(e))
          return this;
        var b = Wn(e, m);
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
    function Wn(e, i) {
      var o = e.type === "Feature" ? e.geometry : e, s = o ? o.coordinates : null, _ = [], m = i && i.pointToLayer, b = i && i.coordsToLatLng || Va, C, I, Y, re;
      if (!s && !o)
        return null;
      switch (o.type) {
        case "Point":
          return C = b(s), vr(m, e, C, i);
        case "MultiPoint":
          for (Y = 0, re = s.length; Y < re; Y++)
            C = b(s[Y]), _.push(vr(m, e, C, i));
          return new ui(_);
        case "LineString":
        case "MultiLineString":
          return I = Vn(s, o.type === "LineString" ? 0 : 1, b), new mi(I, i);
        case "Polygon":
        case "MultiPolygon":
          return I = Vn(s, o.type === "Polygon" ? 1 : 2, b), new Xi(I, i);
        case "GeometryCollection":
          for (Y = 0, re = o.geometries.length; Y < re; Y++) {
            var xe = Wn({
              geometry: o.geometries[Y],
              type: "Feature",
              properties: e.properties
            }, i);
            xe && _.push(xe);
          }
          return new ui(_);
        case "FeatureCollection":
          for (Y = 0, re = o.features.length; Y < re; Y++) {
            var Ie = Wn(o.features[Y], i);
            Ie && _.push(Ie);
          }
          return new ui(_);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function vr(e, i, o, s) {
      return e ? e(i, o) : new Zn(o, s && s.markersInheritOptions && s);
    }
    function Va(e) {
      return new X(e[1], e[0], e[2]);
    }
    function Vn(e, i, o) {
      for (var s = [], _ = 0, m = e.length, b; _ < m; _++)
        b = i ? Vn(e[_], i - 1, o) : (o || Va)(e[_]), s.push(b);
      return s;
    }
    function Ga(e, i) {
      return e = K(e), e.alt !== void 0 ? [k(e.lng, i), k(e.lat, i), k(e.alt, i)] : [k(e.lng, i), k(e.lat, i)];
    }
    function Gn(e, i, o, s) {
      for (var _ = [], m = 0, b = e.length; m < b; m++)
        _.push(i ? Gn(e[m], Kt(e[m]) ? 0 : i - 1, o, s) : Ga(e[m], s));
      return !i && o && _.length > 0 && _.push(_[0].slice()), _;
    }
    function Qi(e, i) {
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
        return Qi(this, {
          type: "Point",
          coordinates: Ga(this.getLatLng(), e)
        });
      }
    };
    Zn.include(Ka), Wa.include(Ka), Un.include(Ka), mi.include({
      toGeoJSON: function(e) {
        var i = !Kt(this._latlngs), o = Gn(this._latlngs, i ? 1 : 0, !1, e);
        return Qi(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: o
        });
      }
    }), Xi.include({
      toGeoJSON: function(e) {
        var i = !Kt(this._latlngs), o = i && !Kt(this._latlngs[0]), s = Gn(this._latlngs, o ? 2 : i ? 1 : 0, !0, e);
        return i || (s = [s]), Qi(this, {
          type: (o ? "Multi" : "") + "Polygon",
          coordinates: s
        });
      }
    }), Yi.include({
      toMultiPoint: function(e) {
        var i = [];
        return this.eachLayer(function(o) {
          i.push(o.toGeoJSON(e).geometry.coordinates);
        }), Qi(this, {
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
        }), o ? Qi(this, {
          geometries: s,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: s
        };
      }
    });
    function xr(e, i) {
      return new hi(e, i);
    }
    var Nc = xr, Yn = ei.extend({
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
        this._url = e, this._bounds = ie(i), j(this, o);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ne(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        at(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
        return this._map && Gi(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && Ki(this._image), this;
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
        if (Ne(i, "leaflet-image-layer"), this._zoomAnimated && Ne(i, "leaflet-zoom-animated"), this.options.className && Ne(i, this.options.className), i.onselectstart = x, i.onmousemove = x, i.onload = u(this.fire, this, "load"), i.onerror = u(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
          this._url = i.src;
          return;
        }
        i.src = this._url, i.alt = this.options.alt;
      },
      _animateZoom: function(e) {
        var i = this._map.getZoomScale(e.zoom), o = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
        Li(this._image, o, i);
      },
      _reset: function() {
        var e = this._image, i = new R(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), o = i.getSize();
        ct(e, i.min), e.style.width = o.x + "px", e.style.height = o.y + "px";
      },
      _updateOpacity: function() {
        Gt(this._image, this.options.opacity);
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
    }), Ic = function(e, i, o) {
      return new Yn(e, i, o);
    }, wr = Yn.extend({
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
        if (Ne(i, "leaflet-image-layer"), this._zoomAnimated && Ne(i, "leaflet-zoom-animated"), this.options.className && Ne(i, this.options.className), i.onselectstart = x, i.onmousemove = x, i.onloadeddata = u(this.fire, this, "load"), e) {
          for (var o = i.getElementsByTagName("source"), s = [], _ = 0; _ < o.length; _++)
            s.push(o[_].src);
          this._url = o.length > 0 ? s : [i.src];
          return;
        }
        M(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted, i.playsInline = !!this.options.playsInline;
        for (var m = 0; m < this._url.length; m++) {
          var b = Be("source");
          b.src = this._url[m], i.appendChild(b);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Lc(e, i, o) {
      return new wr(e, i, o);
    }
    var kr = Yn.extend({
      _initImage: function() {
        var e = this._image = this._url;
        Ne(e, "leaflet-image-layer"), this._zoomAnimated && Ne(e, "leaflet-zoom-animated"), this.options.className && Ne(e, this.options.className), e.onselectstart = x, e.onmousemove = x;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Ac(e, i, o) {
      return new kr(e, i, o);
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
        e && (e instanceof X || M(e)) ? (this._latlng = K(e), j(this, i)) : (j(this, e), this._source = i), this.options.content && (this._content = this.options.content);
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
        this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Gt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Gt(this._container, 1), this.bringToFront(), this.options.interactive && (Ne(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(e) {
        e._fadeAnimated ? (Gt(this._container, 0), this._removeTimeout = setTimeout(u(at, void 0, this._container), 200)) : at(this._container), this.options.interactive && (lt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
        return this._map && Gi(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && Ki(this._container), this;
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
          var e = this._map.latLngToLayerPoint(this._latlng), i = v(this.options.offset), o = this._getAnchor();
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
        return _ instanceof e ? (j(_, s), _._source = this) : (_ = i && !s ? i : new e(s, this), _.setContent(o)), _;
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
        li.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ci || this._source.on("preclick", Mi));
      },
      onRemove: function(e) {
        li.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ci || this._source.off("preclick", Mi));
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
        if (this._contentNode = Be("div", e + "-content", o), mn(i), Da(this._contentNode), ze(i, "contextmenu", Mi), this._tipContainer = Be("div", e + "-tip-container", i), this._tip = Be("div", e + "-tip", this._tipContainer), this.options.closeButton) {
          var s = this._closeButton = Be("a", e + "-close-button", i);
          s.setAttribute("role", "button"), s.setAttribute("aria-label", "Close popup"), s.href = "#close", s.innerHTML = '<span aria-hidden="true">&#215;</span>', ze(s, "click", function(_) {
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
        _ && s > _ ? (i.height = _ + "px", Ne(e, m)) : lt(e, m), this._containerWidth = this._container.offsetWidth;
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
          _._add(Ai(this._container));
          var m = e.layerPointToContainerPoint(_), b = v(this.options.autoPanPadding), C = v(this.options.autoPanPaddingTopLeft || b), I = v(this.options.autoPanPaddingBottomRight || b), Y = e.getSize(), re = 0, xe = 0;
          m.x + s + I.x > Y.x && (re = m.x + s - Y.x + I.x), m.x - re - C.x < 0 && (re = m.x - C.x), m.y + o + I.y > Y.y && (xe = m.y + o - Y.y + I.y), m.y - xe - C.y < 0 && (xe = m.y - C.y), (re || xe) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([re, xe]));
        }
      },
      _getAnchor: function() {
        return v(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Mc = function(e, i) {
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
          Oi(e);
          var i = e.layer || e.target;
          if (this._popup._source === i && !(i instanceof Ci)) {
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
        var i, o, s = this._map, _ = this._container, m = s.latLngToContainerPoint(s.getCenter()), b = s.layerPointToContainerPoint(e), C = this.options.direction, I = _.offsetWidth, Y = _.offsetHeight, re = v(this.options.offset), xe = this._getAnchor();
        C === "top" ? (i = I / 2, o = Y) : C === "bottom" ? (i = I / 2, o = 0) : C === "center" ? (i = I / 2, o = Y / 2) : C === "right" ? (i = 0, o = Y / 2) : C === "left" ? (i = I, o = Y / 2) : b.x < m.x ? (C = "right", i = 0, o = Y / 2) : (C = "left", i = I + (re.x + xe.x) * 2, o = Y / 2), e = e.subtract(v(i, o, !0)).add(re).add(xe), lt(_, "leaflet-tooltip-right"), lt(_, "leaflet-tooltip-left"), lt(_, "leaflet-tooltip-top"), lt(_, "leaflet-tooltip-bottom"), Ne(_, "leaflet-tooltip-" + C), ct(_, e);
      },
      _updatePosition: function() {
        var e = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(e);
      },
      setOpacity: function(e) {
        this.options.opacity = e, this._container && Gt(this._container, e);
      },
      _animateZoom: function(e) {
        var i = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
        this._setPosition(i);
      },
      _getAnchor: function() {
        return v(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Oc = function(e, i) {
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
        i && (ze(i, "focus", function() {
          this._tooltip._source = e, this.openTooltip();
        }, this), ze(i, "blur", this.closeTooltip, this));
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
    var Sr = Ji.extend({
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
          var s = v(o.bgPos);
          i.style.backgroundPosition = -s.x + "px " + -s.y + "px";
        }
        return this._setIconStyles(i, "icon"), i;
      },
      createShadow: function() {
        return null;
      }
    });
    function Rc(e) {
      return new Sr(e);
    }
    Ji.Default = fn;
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
        j(this, e);
      },
      onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
      },
      beforeAdd: function(e) {
        e._addZoomLimit(this);
      },
      onRemove: function(e) {
        this._removeAllTiles(), at(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (Gi(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (Ki(this._container), this._setAutoZIndex(Math.min)), this;
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
          Gt(this._container, this.options.opacity);
          var e = +/* @__PURE__ */ new Date(), i = !1, o = !1;
          for (var s in this._tiles) {
            var _ = this._tiles[s];
            if (!(!_.current || !_.loaded)) {
              var m = Math.min(1, (e - _.loaded) / 200);
              Gt(_.el, m), m < 1 ? i = !0 : (_.active ? o = !0 : this._onOpaqueTile(_), _.active = !0);
            }
          }
          o && !this._noPrune && this._pruneTiles(), i && (V(this._fadeFrame), this._fadeFrame = A(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: x,
      _initContainer: function() {
        this._container || (this._container = Be("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var e = this._tileZoom, i = this.options.maxZoom;
        if (e !== void 0) {
          for (var o in this._levels)
            o = Number(o), this._levels[o].el.children.length || o === e ? (this._levels[o].el.style.zIndex = i - Math.abs(e - o), this._onUpdateLevel(o)) : (at(this._levels[o].el), this._removeTilesAtZoom(o), this._onRemoveLevel(o), delete this._levels[o]);
          var s = this._levels[e], _ = this._map;
          return s || (s = this._levels[e] = {}, s.el = Be("div", "leaflet-tile-container leaflet-zoom-animated", this._container), s.el.style.zIndex = i, s.origin = _.project(_.unproject(_.getPixelOrigin()), e).round(), s.zoom = e, this._setZoomTransform(s, _.getCenter(), _.getZoom()), x(s.el.offsetWidth), this._onCreateLevel(s)), this._level = s, s;
        }
      },
      _onUpdateLevel: x,
      _onRemoveLevel: x,
      _onCreateLevel: x,
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
          at(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
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
        ge.any3d ? Li(e.el, _, s) : ct(e.el, _);
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
        return new R(_.subtract(m), _.add(m));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(e) {
        var i = this._map;
        if (i) {
          var o = this._clampZoom(i.getZoom());
          if (e === void 0 && (e = i.getCenter()), this._tileZoom !== void 0) {
            var s = this._getTiledPixelBounds(e), _ = this._pxBoundsToTileRange(s), m = _.getCenter(), b = [], C = this.options.keepBuffer, I = new R(
              _.getBottomLeft().subtract([C, -C]),
              _.getTopRight().add([C, -C])
            );
            if (!(isFinite(_.min.x) && isFinite(_.min.y) && isFinite(_.max.x) && isFinite(_.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var Y in this._tiles) {
              var re = this._tiles[Y].coords;
              (re.z !== this._tileZoom || !I.contains(new w(re.x, re.y))) && (this._tiles[Y].current = !1);
            }
            if (Math.abs(o - this._tileZoom) > 1) {
              this._setView(e, o);
              return;
            }
            for (var xe = _.min.y; xe <= _.max.y; xe++)
              for (var Ie = _.min.x; Ie <= _.max.x; Ie++) {
                var Pt = new w(Ie, xe);
                if (Pt.z = this._tileZoom, !!this._isValidTile(Pt)) {
                  var pt = this._tiles[this._tileCoordsToKey(Pt)];
                  pt ? pt.current = !0 : b.push(Pt);
                }
              }
            if (b.sort(function(At, tn) {
              return At.distanceTo(m) - tn.distanceTo(m);
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
        var i = this._tileCoordsToNwSe(e), o = new H(i[0], i[1]);
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
        i && (at(i.el), delete this._tiles[e], this.fire("tileunload", {
          tile: i.el,
          coords: this._keyToTileCoords(e)
        }));
      },
      _initTile: function(e) {
        Ne(e, "leaflet-tile");
        var i = this.getTileSize();
        e.style.width = i.x + "px", e.style.height = i.y + "px", e.onselectstart = x, e.onmousemove = x, ge.ielt9 && this.options.opacity < 1 && Gt(e, this.options.opacity);
      },
      _addTile: function(e, i) {
        var o = this._getTilePos(e), s = this._tileCoordsToKey(e), _ = this.createTile(this._wrapCoords(e), u(this._tileReady, this, e));
        this._initTile(_), this.createTile.length < 2 && A(u(this._tileReady, this, e, null, _)), ct(_, o), this._tiles[s] = {
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
        o = this._tiles[s], o && (o.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Gt(o.el, 0), V(this._fadeFrame), this._fadeFrame = A(this._updateOpacity, this)) : (o.active = !0, this._pruneTiles()), i || (Ne(o.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: o.el,
          coords: e
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), ge.ielt9 || !this._map._fadeAnimated ? A(this._pruneTiles, this) : setTimeout(u(this._pruneTiles, this), 250)));
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
        return new R(
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
    function Dc(e) {
      return new gn(e);
    }
    var en = gn.extend({
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
        this._url = e, i = j(this, i), i.detectRetina && ge.retina && i.maxZoom > 0 ? (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom = Math.min(i.maxZoom, i.minZoom + 1)) : (i.zoomOffset++, i.maxZoom = Math.max(i.minZoom, i.maxZoom - 1)), i.minZoom = Math.max(0, i.minZoom)) : i.zoomReverse ? i.minZoom = Math.min(i.maxZoom, i.minZoom) : i.maxZoom = Math.max(i.minZoom, i.maxZoom), typeof i.subdomains == "string" && (i.subdomains = i.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
        return ze(o, "load", u(this._tileOnLoad, this, i, o)), ze(o, "error", u(this._tileOnError, this, i, o)), (this.options.crossOrigin || this.options.crossOrigin === "") && (o.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (o.referrerPolicy = this.options.referrerPolicy), o.alt = "", o.src = this.getTileUrl(e), o;
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
        return q(this._url, c(i, this.options));
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
          if (this._tiles[e].coords.z !== this._tileZoom && (i = this._tiles[e].el, i.onload = x, i.onerror = x, !i.complete)) {
            i.src = P;
            var o = this._tiles[e].coords;
            at(i), delete this._tiles[e], this.fire("tileabort", {
              tile: i,
              coords: o
            });
          }
      },
      _removeTile: function(e) {
        var i = this._tiles[e];
        if (i)
          return i.el.setAttribute("src", P), gn.prototype._removeTile.call(this, e);
      },
      _tileReady: function(e, i, o) {
        if (!(!this._map || o && o.getAttribute("src") === P))
          return gn.prototype._tileReady.call(this, e, i, o);
      }
    });
    function Cr(e, i) {
      return new en(e, i);
    }
    var zr = en.extend({
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
        i = j(this, i);
        var _ = i.detectRetina && ge.retina ? 2 : 1, m = this.getTileSize();
        o.width = m.x * _, o.height = m.y * _, this.wmsParams = o;
      },
      onAdd: function(e) {
        this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[i] = this._crs.code, en.prototype.onAdd.call(this, e);
      },
      getTileUrl: function(e) {
        var i = this._tileCoordsToNwSe(e), o = this._crs, s = S(o.project(i[0]), o.project(i[1])), _ = s.min, m = s.max, b = (this._wmsVersion >= 1.3 && this._crs === br ? [_.y, _.x, m.y, m.x] : [_.x, _.y, m.x, m.y]).join(","), C = en.prototype.getTileUrl.call(this, e);
        return C + D(this.wmsParams, C, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + b;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(e, i) {
        return c(this.wmsParams, e), i || this.redraw(), this;
      }
    });
    function Bc(e, i) {
      return new zr(e, i);
    }
    en.WMS = zr, Cr.wms = Bc;
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
        j(this, e), p(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), Ne(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
        ge.any3d ? Li(this._container, m, o) : ct(this._container, m);
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
        this._bounds = new R(o, o.add(i.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), jr = pi.extend({
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
        ze(e, "mousemove", this._onMouseMove, this), ze(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), ze(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
      },
      _destroyContainer: function() {
        V(this._redrawRequest), delete this._ctx, at(this._container), Ke(this._container), delete this._container;
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
        this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || A(this._redraw, this));
      },
      _extendRedrawBounds: function(e) {
        if (e._pxBounds) {
          var i = (e.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new R(), this._redrawBounds.extend(e._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(e._pxBounds.max.add([i, i]));
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
          s !== this._hoveredLayer && (this._handleMouseOut(e), s && (Ne(this._container, "leaflet-interactive"), this._fireEvent([s], e, "mouseover"), this._hoveredLayer = s)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(u(function() {
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
    function Tr(e) {
      return ge.canvas ? new jr(e) : null;
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
    }(), $c = {
      _initContainer: function() {
        this._container = Be("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (pi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(e) {
        var i = e._container = bn("shape");
        Ne(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", e._path = bn("path"), i.appendChild(e._path), this._updateStyle(e), this._layers[p(e)] = e;
      },
      _addPath: function(e) {
        var i = e._container;
        this._container.appendChild(i), e.options.interactive && e.addInteractiveTarget(i);
      },
      _removePath: function(e) {
        var i = e._container;
        at(i), e.removeInteractiveTarget(i), delete this._layers[p(e)];
      },
      _updateStyle: function(e) {
        var i = e._stroke, o = e._fill, s = e.options, _ = e._container;
        _.stroked = !!s.stroke, _.filled = !!s.fill, s.stroke ? (i || (i = e._stroke = bn("stroke")), _.appendChild(i), i.weight = s.weight + "px", i.color = s.color, i.opacity = s.opacity, s.dashArray ? i.dashStyle = M(s.dashArray) ? s.dashArray.join(" ") : s.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = s.lineCap.replace("butt", "flat"), i.joinstyle = s.lineJoin) : i && (_.removeChild(i), e._stroke = null), s.fill ? (o || (o = e._fill = bn("fill")), _.appendChild(o), o.color = s.fillColor || s.color, o.opacity = s.fillOpacity) : o && (_.removeChild(o), e._fill = null);
      },
      _updateCircle: function(e) {
        var i = e._point.round(), o = Math.round(e._radius), s = Math.round(e._radiusY || o);
        this._setPath(e, e._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + o + "," + s + " 0," + 65535 * 360);
      },
      _setPath: function(e, i) {
        e._path.v = i;
      },
      _bringToFront: function(e) {
        Gi(e._container);
      },
      _bringToBack: function(e) {
        Ki(e._container);
      }
    }, Qn = ge.vml ? bn : ke, yn = pi.extend({
      _initContainer: function() {
        this._container = Qn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Qn("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        at(this._container), Ke(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
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
        e.options.className && Ne(i, e.options.className), e.options.interactive && Ne(i, "leaflet-interactive"), this._updateStyle(e), this._layers[p(e)] = e;
      },
      _addPath: function(e) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
      },
      _removePath: function(e) {
        at(e._path), e.removeInteractiveTarget(e._path), delete this._layers[p(e)];
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
        Gi(e._path);
      },
      _bringToBack: function(e) {
        Ki(e._path);
      }
    });
    ge.vml && yn.include($c);
    function Pr(e) {
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
        return this.options.preferCanvas && Tr(e) || Pr(e);
      }
    });
    var Er = Xi.extend({
      initialize: function(e, i) {
        Xi.prototype.initialize.call(this, this._boundsToLatLngs(e), i);
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
    function Fc(e, i) {
      return new Er(e, i);
    }
    yn.create = Qn, yn.pointsToPath = he, hi.geometryToLayer = Wn, hi.coordsToLatLng = Va, hi.coordsToLatLngs = Vn, hi.latLngToCoords = Ga, hi.latLngsToCoords = Gn, hi.getFeature = Qi, hi.asFeature = Kn, Re.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Nr = si.extend({
      initialize: function(e) {
        this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
      },
      addHooks: function() {
        ze(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        Ke(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        at(this._pane), delete this._pane;
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
        this._clearDeferredResetState(), this._resetState(), _n(), Ea(), this._startPoint = this._map.mouseEventToContainerPoint(e), ze(document, {
          contextmenu: Oi,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(e) {
        this._moved || (this._moved = !0, this._box = Be("div", "leaflet-zoom-box", this._container), Ne(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
        var i = new R(this._point, this._startPoint), o = i.getSize();
        ct(this._box, i.min), this._box.style.width = o.x + "px", this._box.style.height = o.y + "px";
      },
      _finish: function() {
        this._moved && (at(this._box), lt(this._container, "leaflet-crosshair")), dn(), Na(), Ke(document, {
          contextmenu: Oi,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(e) {
        if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(u(this._resetState, this), 0);
          var i = new H(
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
    Re.addInitHook("addHandler", "boxZoom", Nr), Re.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var Ir = si.extend({
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
    Re.addInitHook("addHandler", "doubleClickZoom", Ir), Re.mergeOptions({
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
    var Lr = si.extend({
      addHooks: function() {
        if (!this._draggable) {
          var e = this._map;
          this._draggable = new Si(e._mapPane, e._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
        }
        Ne(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
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
          var _ = this._lastPos.subtract(this._positions[0]), m = (this._lastTime - this._times[0]) / 1e3, b = o.easeLinearity, C = _.multiplyBy(b / m), I = C.distanceTo([0, 0]), Y = Math.min(o.inertiaMaxSpeed, I), re = C.multiplyBy(Y / I), xe = Y / (o.inertiaDeceleration * b), Ie = re.multiplyBy(-xe / 2).round();
          !Ie.x && !Ie.y ? i.fire("moveend") : (Ie = i._limitOffset(Ie, i.options.maxBounds), A(function() {
            i.panBy(Ie, {
              duration: xe,
              easeLinearity: b,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    Re.addInitHook("addHandler", "dragging", Lr), Re.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Ar = si.extend({
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
        e.tabIndex <= 0 && (e.tabIndex = "0"), ze(e, {
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
        ze(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Ke(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(e) {
        if (!(e.altKey || e.ctrlKey || e.metaKey)) {
          var i = e.keyCode, o = this._map, s;
          if (i in this._panKeys) {
            if (!o._panAnim || !o._panAnim._inProgress)
              if (s = this._panKeys[i], e.shiftKey && (s = v(s).multiplyBy(3)), o.options.maxBounds && (s = o._limitOffset(v(s), o.options.maxBounds)), o.options.worldCopyJump) {
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
          Oi(e);
        }
      }
    });
    Re.addInitHook("addHandler", "keyboard", Ar), Re.mergeOptions({
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
    var Mr = si.extend({
      addHooks: function() {
        ze(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Ke(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(e) {
        var i = or(e), o = this._map.options.wheelDebounceTime;
        this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var s = Math.max(o - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(u(this._performZoom, this), s), Oi(e);
      },
      _performZoom: function() {
        var e = this._map, i = e.getZoom(), o = this._map.options.zoomSnap || 0;
        e._stop();
        var s = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), _ = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(s)))) / Math.LN2, m = o ? Math.ceil(_ / o) * o : _, b = e._limitZoom(i + (this._delta > 0 ? m : -m)) - i;
        this._delta = 0, this._startTime = null, b && (e.options.scrollWheelZoom === "center" ? e.setZoom(i + b) : e.setZoomAround(this._lastMousePos, i + b));
      }
    });
    Re.addInitHook("addHandler", "scrollWheelZoom", Mr);
    var qc = 600;
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
    var Or = si.extend({
      addHooks: function() {
        ze(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Ke(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(e) {
        if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
          var i = e.touches[0];
          this._startPos = this._newPos = new w(i.clientX, i.clientY), this._holdTimeout = setTimeout(u(function() {
            this._cancel(), this._isTapValid() && (ze(document, "touchend", St), ze(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", i));
          }, this), qc), ze(document, "touchend touchcancel contextmenu", this._cancel, this), ze(document, "touchmove", this._onMove, this);
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
    Re.addInitHook("addHandler", "tapHold", Or), Re.mergeOptions({
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
    var Rr = si.extend({
      addHooks: function() {
        Ne(this._map._container, "leaflet-touch-zoom"), ze(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        lt(this._map._container, "leaflet-touch-zoom"), Ke(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(e) {
        var i = this._map;
        if (!(!e.touches || e.touches.length !== 2 || i._animatingZoom || this._zooming)) {
          var o = i.mouseEventToContainerPoint(e.touches[0]), s = i.mouseEventToContainerPoint(e.touches[1]);
          this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), i.options.touchZoom !== "center" && (this._pinchStartLatLng = i.containerPointToLatLng(o.add(s)._divideBy(2))), this._startDist = o.distanceTo(s), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), ze(document, "touchmove", this._onTouchMove, this), ze(document, "touchend touchcancel", this._onTouchEnd, this), St(e);
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
          this._animRequest = A(b, this, !0), St(e);
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
    Re.addInitHook("addHandler", "touchZoom", Rr), Re.BoxZoom = Nr, Re.DoubleClickZoom = Ir, Re.Drag = Lr, Re.Keyboard = Ar, Re.ScrollWheelZoom = Mr, Re.TapHold = Or, Re.TouchZoom = Rr, a.Bounds = R, a.Browser = ge, a.CRS = fe, a.Canvas = jr, a.Circle = Wa, a.CircleMarker = Un, a.Class = le, a.Control = Qt, a.DivIcon = Sr, a.DivOverlay = li, a.DomEvent = rc, a.DomUtil = ac, a.Draggable = Si, a.Evented = ce, a.FeatureGroup = ui, a.GeoJSON = hi, a.GridLayer = gn, a.Handler = si, a.Icon = Ji, a.ImageOverlay = Yn, a.LatLng = X, a.LatLngBounds = H, a.Layer = ei, a.LayerGroup = Yi, a.LineUtil = yc, a.Map = Re, a.Marker = Zn, a.Mixin = mc, a.Path = Ci, a.Point = w, a.PolyUtil = hc, a.Polygon = Xi, a.Polyline = mi, a.Popup = Jn, a.PosAnimation = rr, a.Projection = vc, a.Rectangle = Er, a.Renderer = pi, a.SVG = yn, a.SVGOverlay = kr, a.TileLayer = en, a.Tooltip = Xn, a.Transformation = Q, a.Util = ee, a.VideoOverlay = wr, a.bind = u, a.bounds = S, a.canvas = Tr, a.circle = Tc, a.circleMarker = jc, a.control = hn, a.divIcon = Rc, a.extend = c, a.featureGroup = Sc, a.geoJSON = xr, a.geoJson = Nc, a.gridLayer = Dc, a.icon = Cc, a.imageOverlay = Ic, a.latLng = K, a.latLngBounds = ie, a.layerGroup = kc, a.map = sc, a.marker = zc, a.point = v, a.polygon = Ec, a.polyline = Pc, a.popup = Mc, a.rectangle = Fc, a.setOptions = j, a.stamp = p, a.svg = Pr, a.svgOverlay = Ac, a.tileLayer = Cr, a.tooltip = Oc, a.transformation = ne, a.version = r, a.videoOverlay = Lc;
    var Hc = window.L;
    a.noConflict = function() {
      return window.L = Hc, this;
    }, window.L = a;
  });
})(Do, Do.exports);
var Ni = Do.exports;
const Uw = /* @__PURE__ */ zs(Ni);
function Ln(t, n, a) {
  return Object.freeze({
    instance: t,
    context: n,
    container: a
  });
}
function An(t, n) {
  return n == null ? function(r, c) {
    const d = it(void 0);
    return d.current || (d.current = t(r, c)), d;
  } : function(r, c) {
    const d = it(void 0);
    d.current || (d.current = t(r, c));
    const u = it(r), { instance: h } = d.current;
    return Te(function() {
      u.current !== r && (n(h, r, u.current), u.current = r);
    }, [
      h,
      r,
      n
    ]), d;
  };
}
function Bl(t, n) {
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
function $l(t) {
  return function(a) {
    const r = In(), c = t(xa(a, r), r);
    return Ml(r.map, a.attribution), Uo(c.current, a.eventHandlers), Bl(c.current, r), c;
  };
}
function Ww(t, n) {
  const a = it(void 0);
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
function Vw(t) {
  return function(a) {
    const r = In(), c = t(xa(a, r), r);
    return Uo(c.current, a.eventHandlers), Bl(c.current, r), Ww(c.current, a), c;
  };
}
function Fl(t) {
  function n(c, d) {
    return Ln(t(c), d);
  }
  const a = An(n), r = Hw(a);
  return Dl(r);
}
function Gw(t, n) {
  const a = An(t, n), r = $l(a);
  return Rl(r);
}
function Kw(t, n) {
  const a = An(t), r = Zw(a, n);
  return qw(r);
}
function Yw(t, n) {
  const a = An(t, n), r = Vw(a);
  return Rl(r);
}
function Jw(t, n) {
  const a = An(t, n), r = $l(a);
  return Dl(r);
}
function Xw(t, n, a) {
  const { opacity: r, zIndex: c } = n;
  r != null && r !== a.opacity && t.setOpacity(r), c != null && c !== a.zIndex && t.setZIndex(c);
}
function Qw() {
  return In().map;
}
function ek({ bounds: t, boundsOptions: n, center: a, children: r, className: c, id: d, placeholder: u, style: h, whenReady: p, zoom: g, ...y }, x) {
  const [k] = zt({
    className: c,
    id: d,
    style: h
  }), [z, E] = zt(null), j = it(void 0);
  ha(x, () => (z == null ? void 0 : z.map) ?? null, [
    z
  ]);
  const D = Ze((q) => {
    if (q !== null && !j.current) {
      const M = new Ni.Map(q, y);
      j.current = M, a != null && g != null ? M.setView(a, g) : t != null && M.fitBounds(t, n), p != null && M.whenReady(p), E(Fw(M));
    }
  }, []);
  Te(() => () => {
    z == null || z.map.remove();
  }, [
    z
  ]);
  const F = z ? /* @__PURE__ */ tt.createElement(Zo, {
    value: z
  }, r) : u ?? null;
  return /* @__PURE__ */ tt.createElement("div", {
    ...k,
    ref: D
  }, F);
}
const tk = /* @__PURE__ */ Le(ek), ik = Gw(function({ position: n, ...a }, r) {
  const c = new Ni.Marker(n, a);
  return Ln(c, Ol(r, {
    overlayContainer: c
  }));
}, function(n, a, r) {
  a.position !== r.position && n.setLatLng(a.position), a.icon != null && a.icon !== r.icon && n.setIcon(a.icon), a.zIndexOffset != null && a.zIndexOffset !== r.zIndexOffset && n.setZIndexOffset(a.zIndexOffset), a.opacity != null && a.opacity !== r.opacity && n.setOpacity(a.opacity), n.dragging != null && a.draggable !== r.draggable && (a.draggable === !0 ? n.dragging.enable() : n.dragging.disable());
}), nk = Yw(function({ positions: n, ...a }, r) {
  const c = new Ni.Polygon(n, a);
  return Ln(c, Ol(r, {
    overlayContainer: c
  }));
}, function(n, a, r) {
  a.positions !== r.positions && n.setLatLngs(a.positions);
}), ks = Kw(function(n, a) {
  const r = new Ni.Popup(n, a.overlayContainer);
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
}), ak = Fl(function(n) {
  return new Ni.Control.Scale(n);
}), ok = Jw(function({ url: n, ...a }, r) {
  const c = new Ni.TileLayer(n, xa(a, r));
  return Ln(c, r);
}, function(n, a, r) {
  Xw(n, a, r);
  const { url: c } = a;
  c != null && c !== r.url && n.setUrl(c);
}), rk = Fl(function(n) {
  return new Ni.Control.Zoom(n);
}), sk = {
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
}, lk = (t) => sk[t], Mt = {}, ck = (t, n) => {
  if (t && typeof t == "string")
    return new Uw.DivIcon({
      html: `<span style="font-size: 1.5em; color: ${n || "inherit"}">${t}</span>`
    });
}, _k = (t) => {
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
}, ql = Le(
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
    zoomable: x,
    pannable: k,
    rotatable: z,
    showZoomControls: E,
    showLayerControls: j,
    showScale: D,
    showCompass: F,
    showFullscreen: q,
    showGrid: M,
    showCoordinates: O,
    showMinimap: P,
    showFogOfWar: N,
    variant: J,
    size: $,
    aspectRatio: W,
    borderRadius: T,
    onClick: A,
    onMarkerClick: V,
    onRegionClick: ee,
    onZoomChange: le,
    onCenterChange: ae,
    ...te
  }, ce) => {
    const w = lk(t), G = sn(), v = n || `map-${G}`, R = vi();
    Te(() => (R(
      Dp({
        mapId: v,
        updates: {
          currentZoom: h ?? w.zoom ?? 1,
          currentCenter: c ?? w.center ?? { lat: 0, lng: 0 }
        }
      })
    ), () => {
      R(Wi(v));
    }), [
      R,
      v,
      h,
      w.zoom,
      c,
      w.center
    ]);
    const S = Nt(
      Yp(v)
    ), H = (S == null ? void 0 : S.currentZoom) ?? h ?? w.zoom ?? 1, ie = (S == null ? void 0 : S.currentCenter) ?? c ?? w.center ?? { lat: 0, lng: 0 };
    it(null);
    const X = {
      ...w,
      center: c ?? w.center,
      zoom: h ?? w.zoom,
      minZoom: p ?? w.minZoom,
      maxZoom: g ?? w.maxZoom,
      interactive: y ?? w.interactive,
      zoomable: x ?? w.zoomable,
      pannable: k ?? w.pannable,
      rotatable: z ?? w.rotatable,
      showZoomControls: E ?? w.showZoomControls,
      showLayerControls: j ?? w.showLayerControls,
      showScale: D ?? w.showScale,
      showCompass: F ?? w.showCompass,
      showFullscreen: q ?? w.showFullscreen,
      showGrid: M ?? w.showGrid,
      showCoordinates: O ?? w.showCoordinates,
      showMinimap: P ?? w.showMinimap,
      showFogOfWar: N ?? w.showFogOfWar,
      variant: J ?? w.variant,
      size: $ ?? w.size,
      aspectRatio: W ?? w.aspectRatio,
      borderRadius: T ?? w.borderRadius
    }, K = [
      Mt.map,
      Mt[`map--${X.kind}`],
      Mt[`map--${X.variant}`],
      Mt[`map--${X.size}`],
      X.interactive && Mt["map--interactive"],
      r
    ].filter(Boolean).join(" "), fe = () => X.showGrid ? /* @__PURE__ */ l.jsx(f, { className: Mt.map__grid }) : null, de = () => X.showCoordinates ? /* @__PURE__ */ l.jsxs(f, { className: Mt.map__coordinates, children: [
      ie.lat.toFixed(4),
      ",",
      " ",
      ie.lng.toFixed(4)
    ] }) : null, Pe = () => X.showCompass ? /* @__PURE__ */ l.jsx(f, { className: Mt.map__compass, children: /* @__PURE__ */ l.jsx(f, { className: Mt.map__compass_needle, children: "🧭" }) }) : null, be = () => X.showMinimap ? /* @__PURE__ */ l.jsx(f, { className: Mt.map__minimap, children: /* @__PURE__ */ l.jsx(f, { className: Mt.map__minimap_content, children: /* @__PURE__ */ l.jsx(
      f,
      {
        className: Mt.map__minimap_viewport
      }
    ) }) }) : null, Q = d.filter(
      (Z) => Z.position && typeof Z.position.lat == "number" && typeof Z.position.lng == "number"
    ), ne = u.filter(
      (Z) => Array.isArray(Z.coordinates) && Z.coordinates.length > 0
    ), ue = {
      aspectRatio: X.aspectRatio,
      borderRadius: X.borderRadius,
      width: "100%",
      height: "100%"
    }, oe = [
      ie.lat,
      ie.lng
    ], ke = Number(H);
    function he() {
      return Qw().on("click", (U) => {
        X.interactive && A && A({ lat: U.latlng.lat, lng: U.latlng.lng });
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
            tk,
            {
              center: oe,
              zoom: ke,
              minZoom: X.minZoom,
              maxZoom: X.maxZoom,
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
                  ok,
                  {
                    attribution: "© OpenStreetMap contributors",
                    url: _k(X.variant)
                  }
                ),
                Q.map((Z) => /* @__PURE__ */ l.jsx(
                  ik,
                  {
                    position: [
                      Z.position.lat,
                      Z.position.lng
                    ],
                    icon: ck(
                      Z.icon,
                      Z.color
                    ),
                    eventHandlers: Z.clickable && V ? {
                      click: () => V(Z)
                    } : void 0,
                    children: Z.title && /* @__PURE__ */ l.jsx(ks, { children: Z.title })
                  },
                  Z.id
                )),
                ne.map((Z) => /* @__PURE__ */ l.jsx(
                  nk,
                  {
                    positions: Z.coordinates.map((U) => [
                      U.lat,
                      U.lng
                    ]),
                    pathOptions: {
                      color: Z.color || "#3388ff",
                      fillColor: Z.fillColor || Z.color || "#3388ff",
                      fillOpacity: Z.fillOpacity ?? 0.2,
                      weight: Z.strokeWidth ?? 2
                    },
                    eventHandlers: Z.clickable && ee ? {
                      click: () => ee(Z)
                    } : void 0,
                    children: Z.title && /* @__PURE__ */ l.jsx(ks, { children: Z.title })
                  },
                  Z.id
                )),
                X.showZoomControls && /* @__PURE__ */ l.jsx(rk, { position: "topright" }),
                X.showScale && /* @__PURE__ */ l.jsx(ak, { position: "bottomleft" })
              ]
            }
          ),
          Pe(),
          de(),
          be(),
          fe(),
          X.showFogOfWar && /* @__PURE__ */ l.jsx(
            f,
            {
              className: Mt.map__fog_of_war
            }
          ),
          a && /* @__PURE__ */ l.jsx(f, { className: Mt.map__custom, children: a })
        ]
      }
    );
  }
);
ql.displayName = "Map";
const R8 = di(ql), dk = {
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
}, uk = (t) => dk[t], mk = "_container_11emm_130", hk = "_flex_11emm_261", pk = "_grid_11emm_357", fk = "_relative_11emm_739", gk = "_absolute_11emm_743", bk = "_fixed_11emm_747", yk = "_sticky_11emm_751", vk = "_truncate_11emm_890", xk = "_border_11emm_950", wk = "_rounded_11emm_990", kk = "_shadow_11emm_1022", Sk = "_transition_11emm_1094", Ck = "_small_11emm_1594", zk = "_large_11emm_1598", jk = "_card_11emm_1646", Tk = "_media_11emm_1771", Pk = "_media__avatar_11emm_1835", Ek = "_media__image_11emm_1836", Nk = "_media__video_11emm_1852", Ik = "_media__content_11emm_1871", Lk = "_media__image_container_11emm_1932", Ak = "_media__fallback_11emm_1960", Mk = "_media__video_container_11emm_1971", Ok = "_media__play_button_11emm_1991", Rk = "_media__audio_container_11emm_2024", Dk = "_media__audio_cover_11emm_2030", Bk = "_media__audio_11emm_2024", $k = "_media__overlay_11emm_2060", Fk = "_media__overlay_title_11emm_2075", qk = "_media__overlay_description_11emm_2081", Hk = "_media__metadata_11emm_2085", Zk = "_media__metadata_title_11emm_2090", Uk = "_media__metadata_description_11emm_2098", Wk = "_media__metadata_details_11emm_2105", Vk = "_media__metadata_author_11emm_2117", Gk = "_media__metadata_duration_11emm_2117", Kk = "_media__metadata_size_11emm_2117", Yk = "_media__metadata_tags_11emm_2121", Jk = "_media__metadata_tag_11emm_2121", Xk = "_media__actions_11emm_2142", Qk = "_media__action_11emm_2142", e0 = "_media__action_icon_11emm_2297", t0 = "_media__action_label_11emm_2302", i0 = "_media__custom_11emm_2305", je = {
  container: mk,
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
  flex: hk,
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
  grid: pk,
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
  relative: fk,
  absolute: gk,
  fixed: bk,
  sticky: yk,
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
  truncate: vk,
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
  border: xk,
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
  rounded: wk,
  "rounded-md": "_rounded-md_11emm_1002",
  "rounded-lg": "_rounded-lg_11emm_1006",
  "rounded-xl": "_rounded-xl_11emm_1010",
  "rounded-2xl": "_rounded-2xl_11emm_1014",
  "rounded-full": "_rounded-full_11emm_1018",
  "shadow-none": "_shadow-none_11emm_1022",
  "shadow-sm": "_shadow-sm_11emm_1026",
  shadow: kk,
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
  transition: Sk,
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
  small: Ck,
  large: zk,
  "primary-button": "_primary-button_11emm_1603",
  "secondary-button": "_secondary-button_11emm_1607",
  card: jk,
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
  media: Tk,
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
  media__avatar: Pk,
  media__image: Ek,
  "media--square": "_media--square_11emm_1839",
  "media--rounded": "_media--rounded_11emm_1843",
  "media--pill": "_media--pill_11emm_1847",
  "media--cover": "_media--cover_11emm_1851",
  media__video: Nk,
  "media--contain": "_media--contain_11emm_1855",
  "media--fill": "_media--fill_11emm_1859",
  "media--scale-down": "_media--scale-down_11emm_1863",
  "media--none": "_media--none_11emm_1867",
  "media--default": "_media--default_11emm_1871",
  media__content: Ik,
  "media--bordered": "_media--bordered_11emm_1875",
  "media--shadow": "_media--shadow_11emm_1878",
  "media--glass": "_media--glass_11emm_1881",
  "media--gradient": "_media--gradient_11emm_1886",
  "media--clickable": "_media--clickable_11emm_1889",
  media__image_container: Lk,
  "media--loaded": "_media--loaded_11emm_1954",
  "media--error": "_media--error_11emm_1957",
  media__fallback: Ak,
  media__video_container: Mk,
  media__play_button: Ok,
  media__audio_container: Rk,
  media__audio_cover: Dk,
  media__audio: Bk,
  media__overlay: $k,
  media__overlay_title: Fk,
  media__overlay_description: qk,
  media__metadata: Hk,
  media__metadata_title: Zk,
  media__metadata_description: Uk,
  media__metadata_details: Wk,
  media__metadata_author: Vk,
  media__metadata_duration: Gk,
  media__metadata_size: Kk,
  media__metadata_tags: Yk,
  media__metadata_tag: Jk,
  media__actions: Xk,
  media__action: Qk,
  "media__action--primary": "_media__action--primary_11emm_2186",
  "media__action--secondary": "_media__action--secondary_11emm_2224",
  "media__action--ghost": "_media__action--ghost_11emm_2262",
  media__action_icon: e0,
  media__action_label: t0,
  media__custom: i0,
  "skeleton-shimmer": "_skeleton-shimmer_11emm_1",
  "loading-shimmer": "_loading-shimmer_11emm_1"
}, Hl = Le(
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
    lazy: x,
    autoPlay: k,
    controls: z,
    muted: E,
    loop: j,
    clickable: D,
    draggable: F,
    actions: q,
    metadata: M,
    showOverlay: O,
    showMetadata: P,
    showActions: N,
    variant: J,
    size: $,
    shape: W,
    fit: T,
    aspectRatio: A,
    maxWidth: V,
    maxHeight: ee,
    borderRadius: le,
    onClick: ae,
    onLoad: te,
    onError: ce,
    onPlay: w,
    onPause: G,
    onEnded: v,
    ...R
  }, S) => {
    const H = uk(t), ie = sn(), X = n || `media-${ie}`, K = vi();
    Te(() => (K(
      so({
        mediaId: X,
        updates: {
          isLoading: !1,
          hasError: !1,
          isPlaying: !1,
          hasLoaded: !1
        }
      })
    ), () => {
      K(Wi(X));
    }), [K, X]);
    const fe = Nt(
      Vp(X)
    ), de = (fe == null ? void 0 : fe.hasError) || !1, Pe = (fe == null ? void 0 : fe.hasLoaded) || !1, be = it(null), Q = {
      ...H,
      alt: u ?? H.alt,
      placeholder: g ?? H.placeholder,
      fallbackIcon: y ?? H.fallbackIcon,
      lazy: x ?? H.lazy,
      autoPlay: k ?? H.autoPlay,
      controls: z ?? H.controls,
      muted: E ?? H.muted,
      loop: j ?? H.loop,
      clickable: D ?? H.clickable,
      draggable: F ?? H.draggable,
      actions: q ?? H.actions,
      showOverlay: O ?? H.showOverlay,
      showMetadata: P ?? H.showMetadata,
      showActions: N ?? H.showActions,
      variant: J ?? H.variant,
      size: $ ?? H.size,
      shape: W ?? H.shape,
      fit: T ?? H.fit,
      aspectRatio: A ?? H.aspectRatio,
      maxWidth: V ?? H.maxWidth,
      maxHeight: ee ?? H.maxHeight,
      borderRadius: le ?? H.borderRadius
    }, ne = [
      je.media,
      je[`media--${Q.kind}`],
      je[`media--${Q.variant}`],
      je[`media--${Q.size}`],
      Q.shape && je[`media--${Q.shape}`],
      je[`media--${Q.fit}`],
      Q.clickable && je["media--clickable"],
      Pe && je["media--loaded"],
      de && je["media--error"],
      r
    ].filter(Boolean).join(" "), ue = () => {
      K(
        so({
          mediaId: X,
          updates: { hasLoaded: !0, hasError: !1 }
        })
      ), te == null || te();
    }, oe = () => {
      K(
        so({
          mediaId: X,
          updates: { hasError: !0, hasLoaded: !1 }
        })
      ), ce == null || ce();
    }, ke = () => {
      Q.clickable && ae && ae();
    }, he = () => {
      const ve = de ? Q.placeholder : c;
      return /* @__PURE__ */ l.jsx(f, { className: je.media__avatar, children: ve ? /* @__PURE__ */ l.jsx(
        "img",
        {
          src: ve,
          alt: Q.alt,
          loading: Q.lazy ? "lazy" : "eager",
          draggable: Q.draggable,
          onLoad: ue,
          onError: oe,
          className: je.media__image
        }
      ) : /* @__PURE__ */ l.jsx(f, { className: je.media__fallback, children: Q.fallbackIcon }) });
    }, Z = () => {
      const ve = de ? Q.placeholder : c;
      return /* @__PURE__ */ l.jsxs(f, { className: je.media__image_container, children: [
        ve ? /* @__PURE__ */ l.jsx(
          "img",
          {
            ref: be,
            src: ve,
            alt: Q.alt,
            loading: Q.lazy ? "lazy" : "eager",
            draggable: Q.draggable,
            onLoad: ue,
            onError: oe,
            className: je.media__image
          }
        ) : /* @__PURE__ */ l.jsx(f, { className: je.media__fallback, children: Q.fallbackIcon || "🖼️" }),
        Q.showOverlay && /* @__PURE__ */ l.jsxs(f, { className: je.media__overlay, children: [
          h && /* @__PURE__ */ l.jsx(
            f,
            {
              className: je.media__overlay_title,
              children: h
            }
          ),
          p && /* @__PURE__ */ l.jsx(
            f,
            {
              className: je.media__overlay_description,
              children: p
            }
          )
        ] })
      ] });
    }, U = () => /* @__PURE__ */ l.jsxs(f, { className: je.media__video_container, children: [
      /* @__PURE__ */ l.jsxs(
        "video",
        {
          ref: be,
          src: c,
          controls: Q.controls,
          autoPlay: Q.autoPlay,
          muted: Q.muted,
          loop: Q.loop,
          onPlay: w,
          onPause: G,
          onEnded: v,
          onLoadedData: ue,
          onError: oe,
          className: je.media__video,
          children: [
            d == null ? void 0 : d.map((ve, $e) => /* @__PURE__ */ l.jsx(
              "source",
              {
                src: ve.src,
                type: ve.type,
                media: ve.media
              },
              $e
            )),
            "Your browser does not support the video tag."
          ]
        }
      ),
      Q.showOverlay && !Q.controls && /* @__PURE__ */ l.jsx(f, { className: je.media__overlay, children: /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: "icon",
          className: je.media__play_button,
          onClick: () => {
            const ve = be.current;
            ve && (ve.paused ? ve.play() : ve.pause());
          },
          "aria-label": "Play/Pause video",
          icon: "▶️"
        }
      ) })
    ] }), Oe = () => /* @__PURE__ */ l.jsxs(f, { className: je.media__audio_container, children: [
      (t === "audio-card" || t === "podcast-player") && c && /* @__PURE__ */ l.jsx(f, { className: je.media__audio_cover, children: /* @__PURE__ */ l.jsx(
        "img",
        {
          src: c,
          alt: Q.alt,
          className: je.media__image,
          onLoad: ue,
          onError: oe
        }
      ) }),
      /* @__PURE__ */ l.jsxs(
        "audio",
        {
          ref: be,
          src: c,
          controls: Q.controls,
          autoPlay: Q.autoPlay,
          muted: Q.muted,
          loop: Q.loop,
          onPlay: w,
          onPause: G,
          onEnded: v,
          onLoadedData: ue,
          onError: oe,
          className: je.media__audio,
          children: [
            d == null ? void 0 : d.map((ve, $e) => /* @__PURE__ */ l.jsx(
              "source",
              {
                src: ve.src,
                type: ve.type
              },
              $e
            )),
            "Your browser does not support the audio tag."
          ]
        }
      )
    ] }), nt = () => t.includes("avatar") ? he() : t.includes("video") || t.includes("stream") || t.includes("presentation") ? U() : t.includes("audio") || t.includes("podcast") || t.includes("voice") || t.includes("waveform") ? Oe() : Z(), Ge = () => !Q.showMetadata || !M ? null : /* @__PURE__ */ l.jsxs(f, { className: je.media__metadata, children: [
      M.title && /* @__PURE__ */ l.jsx(
        f,
        {
          className: je.media__metadata_title,
          children: M.title
        }
      ),
      M.description && /* @__PURE__ */ l.jsx(
        f,
        {
          className: je.media__metadata_description,
          children: M.description
        }
      ),
      /* @__PURE__ */ l.jsxs(
        f,
        {
          className: je.media__metadata_details,
          children: [
            M.author && /* @__PURE__ */ l.jsx(
              "span",
              {
                className: je.media__metadata_author,
                children: M.author
              }
            ),
            M.duration && /* @__PURE__ */ l.jsx(
              "span",
              {
                className: je.media__metadata_duration,
                children: M.duration
              }
            ),
            M.fileSize && /* @__PURE__ */ l.jsx("span", { className: je.media__metadata_size, children: M.fileSize })
          ]
        }
      ),
      M.tags && M.tags.length > 0 && /* @__PURE__ */ l.jsx(
        f,
        {
          className: je.media__metadata_tags,
          children: M.tags.map((ve, $e) => /* @__PURE__ */ l.jsx(
            "span",
            {
              className: je.media__metadata_tag,
              children: ve
            },
            $e
          ))
        }
      )
    ] }), Ue = () => {
      var ve;
      return !Q.showActions || !((ve = Q.actions) != null && ve.length) ? null : /* @__PURE__ */ l.jsx(f, { className: je.media__actions, children: Q.actions.map(($e) => /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: $e.variant || "secondary",
          onClick: $e.onClick,
          disabled: $e.disabled,
          className: [
            je.media__action,
            je[`media__action--${$e.variant || "secondary"}`]
          ].join(" "),
          "aria-label": $e.label,
          icon: $e.icon,
          children: /* @__PURE__ */ l.jsx("span", { className: je.media__action_label, children: $e.label })
        },
        $e.id
      )) });
    }, De = {
      aspectRatio: Q.aspectRatio,
      maxWidth: Q.maxWidth,
      maxHeight: Q.maxHeight,
      borderRadius: Q.borderRadius
    };
    return /* @__PURE__ */ l.jsxs(
      f,
      {
        ref: S,
        className: ne,
        style: De,
        onClick: ke,
        role: Q.clickable ? "button" : void 0,
        tabIndex: Q.clickable ? 0 : void 0,
        ...R,
        children: [
          /* @__PURE__ */ l.jsx(f, { className: je.media__content, children: nt() }),
          Ge(),
          Ue(),
          a && /* @__PURE__ */ l.jsx(f, { className: je.media__custom, children: a })
        ]
      }
    );
  }
);
Hl.displayName = "Media";
const D8 = di(Hl), n0 = "_modalOverlay_t6rkw_117", a0 = "_modalContent_t6rkw_131", o0 = "_fadeIn_t6rkw_1", r0 = "_slideUp_t6rkw_1", s0 = "_slideDown_t6rkw_1", l0 = "_scaleIn_t6rkw_1", c0 = "_modalMessage_t6rkw_236", _0 = "_modalTitle_t6rkw_244", d0 = "_modalBody_t6rkw_252", u0 = "_modalHeader_t6rkw_259", m0 = "_modalFooter_t6rkw_382", h0 = "_endGameContent_t6rkw_390", p0 = "_statisticsContent_t6rkw_403", f0 = "_userInfo_t6rkw_403", g0 = "_userAvatar_t6rkw_411", b0 = "_userName_t6rkw_418", y0 = "_userEmail_t6rkw_422", v0 = "_statsGrid_t6rkw_426", x0 = "_guestMessage_t6rkw_429", w0 = "_purchaseContent_t6rkw_439", k0 = "_itemPreview_t6rkw_442", S0 = "_itemImage_t6rkw_454", C0 = "_priceSection_t6rkw_460", z0 = "_priceLabel_t6rkw_469", j0 = "_priceValue_t6rkw_472", T0 = "_error_t6rkw_477", P0 = "_success_t6rkw_482", E0 = "_vsModeContent_t6rkw_489", N0 = "_searchingState_t6rkw_492", I0 = "_spinner_t6rkw_495", L0 = "_spin_t6rkw_495", A0 = "_modeOptions_t6rkw_507", M0 = "_modeButton_t6rkw_512", O0 = "_vsRoomContent_t6rkw_526", R0 = "_roomSection_t6rkw_526", D0 = "_roomInput_t6rkw_535", B0 = "_statRow_t6rkw_556", $0 = "_statLabel_t6rkw_567", F0 = "_statValue_t6rkw_572", we = {
  modalOverlay: n0,
  modalContent: a0,
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
  fadeIn: o0,
  "modal-slide-up": "_modal-slide-up_t6rkw_221",
  slideUp: r0,
  "modal-slide-down": "_modal-slide-down_t6rkw_225",
  slideDown: s0,
  "modal-scale": "_modal-scale_t6rkw_229",
  scaleIn: l0,
  "confirmation-modal": "_confirmation-modal_t6rkw_233",
  modalMessage: c0,
  "alert-modal": "_alert-modal_t6rkw_241",
  modalTitle: _0,
  "form-modal": "_form-modal_t6rkw_252",
  modalBody: d0,
  "fullscreen-modal": "_fullscreen-modal_t6rkw_256",
  modalHeader: u0,
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
  modalFooter: m0,
  endGameContent: h0,
  statisticsContent: p0,
  userInfo: f0,
  userAvatar: g0,
  userName: b0,
  userEmail: y0,
  statsGrid: v0,
  guestMessage: x0,
  purchaseContent: w0,
  itemPreview: k0,
  itemImage: S0,
  priceSection: C0,
  priceLabel: z0,
  priceValue: j0,
  error: T0,
  success: P0,
  vsModeContent: E0,
  searchingState: N0,
  spinner: I0,
  spin: L0,
  modeOptions: A0,
  modeButton: M0,
  vsRoomContent: O0,
  roomSection: R0,
  roomInput: D0,
  statRow: B0,
  statLabel: $0,
  statValue: F0,
  "loading-shimmer": "_loading-shimmer_t6rkw_1"
}, q0 = {
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
}, H0 = (t) => q0[t], Z0 = (t, n = {}) => ({ ...H0(t), ...n }), Mn = {
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
}, B8 = (t) => Mn.gameFlow.includes(t), $8 = (t) => Mn.versus.includes(t), F8 = (t) => Mn.commerce.includes(t), q8 = (t) => Mn.interactions.includes(t), H8 = (t) => Mn.layouts.includes(t), Z8 = ({
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
  score: x,
  attemptsLeft: k,
  burnBonus: z,
  win: E,
  finishTime: j,
  user: D,
  session: F,
  signIn: q,
  // VS mode props
  isSearching: M,
  roomCode: O,
  onCreateRoom: P,
  onJoinRoom: N,
  onSelect: J,
  // Purchase props
  item: $,
  onPurchase: W,
  // Rules props
  columnCount: T = 4,
  mode: A = "daily",
  wildcardsActive: V,
  // Statistics props
  dailyCompleted: ee,
  // Visual overrides
  size: le,
  position: ae,
  animation: te,
  showCloseButton: ce,
  showHeader: w,
  showFooter: G,
  // Configuration overrides
  configOverrides: v,
  onClose: R,
  className: S = "",
  contentClassName: H = "",
  open: ie = !0,
  ...X
}) => {
  if (!ie) return null;
  const K = Z0(t, {
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
    ...G !== void 0 && {
      showFooter: G
    },
    ...v
  }), fe = n || `${t}-${Date.now()}`, de = ya(), Pe = Xt(
    (Ae) => Ib(Ae, fe)
  ), be = Xt(
    (Ae) => Lb(Ae, fe)
  ), Q = Xt(
    (Ae) => Ab(Ae, fe)
  ), ne = Xt(
    (Ae) => Mb(Ae, fe)
  ), ue = (Pe == null ? void 0 : Pe.roomCode) || O || "";
  Te(() => {
    de(
      Eb({
        id: fe,
        data: { roomCode: O || "" }
      })
    );
  }, [de, fe, O]);
  const oe = a || K.defaultTitle, ke = r || K.defaultMessage, he = d || K.primaryButtonText || "Confirm", Z = u || K.secondaryButtonText || "Cancel", U = y || K.primaryButtonText || "Submit", Oe = [
    we.Modal,
    we[`modal-${K.size}`],
    we[`modal-${K.position}`],
    we[`modal-${K.animation}`],
    K.className && we[K.className],
    S
  ].filter(Boolean).join(" "), nt = () => K.showHeader ? /* @__PURE__ */ l.jsxs(
    f,
    {
      className: `${we.modalHeader} ${K.headerClassName || ""}`.trim(),
      children: [
        oe && /* @__PURE__ */ l.jsx("h2", { className: we.modalTitle, children: oe }),
        K.showCloseButton && /* @__PURE__ */ l.jsx(Ce, { kind: "close", onClick: R })
      ]
    }
  ) : null, Ge = () => {
    const Ae = `${we.modalBody} ${K.bodyClassName || ""}`.trim();
    return K.customBody ? /* @__PURE__ */ l.jsx(f, { className: Ae, children: Ue() }) : /* @__PURE__ */ l.jsxs(f, { className: Ae, children: [
      ke && /* @__PURE__ */ l.jsx("p", { className: we.modalMessage, children: ke }),
      c
    ] });
  }, Ue = () => {
    switch (t) {
      case "end-game":
        return /* @__PURE__ */ l.jsxs(f, { className: we.endGameContent, children: [
          /* @__PURE__ */ l.jsx("h2", { children: E ? "You Win!" : "Game Over" }),
          x !== void 0 && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Score:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: x })
          ] }),
          k !== void 0 && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Attempts Left:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: k })
          ] }),
          z !== void 0 && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Burn Bonus:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: z })
          ] }),
          j && /* @__PURE__ */ l.jsxs(f, { className: we.statRow, children: [
            /* @__PURE__ */ l.jsx("span", { children: "Finish Time:" }),
            " ",
            /* @__PURE__ */ l.jsx("span", { children: j })
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
          D && /* @__PURE__ */ l.jsxs(f, { className: we.userInfo, children: [
            /* @__PURE__ */ l.jsx(
              "img",
              {
                src: D.photoUrl || "/default-avatar.png",
                alt: D.name,
                className: we.userAvatar
              }
            ),
            /* @__PURE__ */ l.jsxs(f, { children: [
              /* @__PURE__ */ l.jsx(f, { className: we.userName, children: D.name }),
              /* @__PURE__ */ l.jsx(f, { className: we.userEmail, children: D.email })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx(f, { className: we.statsGrid, children: Object.entries(Ae).map(
            ([xt, jt]) => /* @__PURE__ */ l.jsxs(
              f,
              {
                className: we.statRow,
                children: [
                  /* @__PURE__ */ l.jsx("span", { className: we.statLabel, children: xt.replace(/([A-Z])/g, " $1").replace(
                    /^./,
                    (wt) => wt.toUpperCase()
                  ) }),
                  /* @__PURE__ */ l.jsxs("span", { className: we.statValue, children: [
                    jt,
                    xt.includes("Percentage") ? "%" : ""
                  ] })
                ]
              },
              xt
            )
          ) }),
          !D && /* @__PURE__ */ l.jsx(f, { className: we.guestMessage, children: "Sign in to track your statistics across devices" }),
          c
        ] });
      case "purchase":
        return /* @__PURE__ */ l.jsxs(f, { className: we.purchaseContent, children: [
          $ && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
            /* @__PURE__ */ l.jsxs(f, { className: we.itemPreview, children: [
              $.previewUrl && /* @__PURE__ */ l.jsx(
                "img",
                {
                  src: $.previewUrl,
                  alt: $.name,
                  className: we.itemImage
                }
              ),
              /* @__PURE__ */ l.jsx("h3", { children: $.label || $.name }),
              $.description && /* @__PURE__ */ l.jsx("p", { children: $.description })
            ] }),
            /* @__PURE__ */ l.jsxs(f, { className: we.priceSection, children: [
              /* @__PURE__ */ l.jsx("span", { className: we.priceLabel, children: "Price:" }),
              /* @__PURE__ */ l.jsxs("span", { className: we.priceValue, children: [
                $.price,
                " ",
                $.currency || "coins"
              ] })
            ] })
          ] }),
          Q && /* @__PURE__ */ l.jsx(f, { className: we.error, children: Q }),
          ne && /* @__PURE__ */ l.jsx(f, { className: we.success, children: "Purchase successful!" }),
          c
        ] });
      case "vs-mode":
        return /* @__PURE__ */ l.jsxs(f, { className: we.vsModeContent, children: [
          M ? /* @__PURE__ */ l.jsxs(f, { className: we.searchingState, children: [
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
                onChange: (xt) => de(
                  hs({
                    id: fe,
                    field: "roomCode",
                    value: xt.target.value
                  })
                ),
                placeholder: "Enter room code",
                className: we.roomInput
              }
            ),
            Q && /* @__PURE__ */ l.jsx(f, { className: we.error, children: Q })
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
    return /* @__PURE__ */ l.jsx(f, { className: Ae, children: ve() });
  }, ve = () => {
    switch (t) {
      case "confirmation":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: K.secondaryButtonKind || "secondary",
              onClick: p || R,
              children: Z
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
            onClick: R,
            children: "OK"
          }
        );
      case "form":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: K.secondaryButtonKind || "secondary",
              onClick: R,
              children: Z
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
          /* @__PURE__ */ l.jsx(Ce, { kind: "secondary", onClick: p, children: Z }),
          /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: h, children: he })
        ] });
      case "end-game":
        return /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: h, children: "Share" });
      case "sign-in":
        return /* @__PURE__ */ l.jsx(
          Ce,
          {
            kind: "primary",
            onClick: q || h,
            children: he
          }
        );
      case "purchase":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ce, { kind: "secondary", onClick: R, children: "Cancel" }),
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
              onClick: Qe,
              children: "Create Room"
            }
          ),
          /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: st, children: "Join Room" })
        ] });
      case "custom-puzzle":
        return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(Ce, { kind: "secondary", onClick: R, children: Z }),
          /* @__PURE__ */ l.jsx(Ce, { kind: "primary", onClick: h, children: he })
        ] });
      default:
        return null;
    }
  }, $e = async () => {
    if (!(!W || !$)) {
      de(
        ps({ id: fe, loading: !0 })
      ), de(
        aa({ id: fe, error: null })
      );
      try {
        await W($), de(
          Nb({ id: fe, success: !0 })
        ), setTimeout(() => R(), 1200);
      } catch (Ae) {
        de(
          aa({
            id: fe,
            error: (Ae == null ? void 0 : Ae.message) || "Purchase failed."
          })
        );
      } finally {
        de(
          ps({
            id: fe,
            loading: !1
          })
        );
      }
    }
  }, Qe = () => {
    const Ae = Math.random().toString(36).substring(2, 8).toUpperCase();
    de(
      hs({
        id: fe,
        field: "roomCode",
        value: Ae
      })
    ), P == null || P(Ae);
  }, st = () => {
    if (!ue.trim()) {
      de(
        aa({
          id: fe,
          error: "Please enter a room code."
        })
      );
      return;
    }
    de(
      aa({ id: fe, error: null })
    ), N == null || N(ue.trim());
  };
  return Te(() => {
    const Ae = (xt) => {
      xt.key === "Escape" && K.closeOnEscape && R();
    };
    if (K.closeOnEscape)
      return document.addEventListener("keydown", Ae), () => document.removeEventListener(
        "keydown",
        Ae
      );
  }, [K.closeOnEscape, R]), Te(() => {
    if (K.preventScroll)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "unset";
      };
  }, [K.preventScroll]), /* @__PURE__ */ l.jsx(
    f,
    {
      className: `${we.modalOverlay} ${Oe}`.trim(),
      onClick: R,
      children: /* @__PURE__ */ l.jsxs(
        f,
        {
          className: `${we.modalContent} ${H}`.trim(),
          onClick: (Ae) => Ae.stopPropagation(),
          children: [
            nt(),
            Ge(),
            De()
          ]
        }
      )
    }
  );
}, U0 = "_container_1bisn_117", W0 = "_flex_1bisn_248", V0 = "_grid_1bisn_344", G0 = "_relative_1bisn_726", K0 = "_absolute_1bisn_730", Y0 = "_fixed_1bisn_734", J0 = "_sticky_1bisn_738", X0 = "_truncate_1bisn_877", Q0 = "_border_1bisn_937", e2 = "_rounded_1bisn_977", t2 = "_shadow_1bisn_1009", i2 = "_transition_1bisn_1081", n2 = "_small_1bisn_1581", a2 = "_large_1bisn_1585", o2 = "_card_1bisn_1633", r2 = "_Navigation_1bisn_1758", s2 = "_navbarContainer_1bisn_1904", l2 = "_navbarBrand_1bisn_1926", c2 = "_navbarItems_1bisn_1936", _2 = "_navbarItem_1bisn_1936", d2 = "_navbarLink_1bisn_1951", u2 = "_active_1bisn_1983", m2 = "_disabled_1bisn_1988", h2 = "_navbarIcon_1bisn_1994", p2 = "_navbarLabel_1bisn_2002", f2 = "_navbarBadge_1bisn_2009", g2 = "_mobileNavContainer_1bisn_2026", b2 = "_mobileNavItem_1bisn_2049", y2 = "_mobileNavIcon_1bisn_2089", v2 = "_mobileNavLabel_1bisn_2094", x2 = "_mobileNavBadge_1bisn_2104", w2 = "_breadcrumbsList_1bisn_2131", k2 = "_breadcrumbItem_1bisn_2140", S2 = "_breadcrumbLink_1bisn_2146", C2 = "_breadcrumbCurrent_1bisn_2168", z2 = "_breadcrumbSeparator_1bisn_2173", j2 = "_paginationContainer_1bisn_2178", T2 = "_paginationList_1bisn_2185", P2 = "_paginationItem_1bisn_2193", E2 = "_paginationButton_1bisn_2197", N2 = "_tabsContainer_1bisn_2231", I2 = "_tabsList_1bisn_2235", L2 = "_tabItem_1bisn_2243", A2 = "_tabButton_1bisn_2247", M2 = "_tabIcon_1bisn_2280", O2 = "_tabLabel_1bisn_2284", R2 = "_segmentedContainer_1bisn_2291", D2 = "_segmentedGroup_1bisn_2297", B2 = "_segmentedButton_1bisn_2304", $2 = "_hamburgerContainer_1bisn_2333", F2 = "_hamburgerList_1bisn_2337", q2 = "_hamburgerItem_1bisn_2343", H2 = "_hamburgerLink_1bisn_2347", Z2 = "_hamburgerIcon_1bisn_2377", U2 = "_hamburgerLabel_1bisn_2383", W2 = "_sideDrawerContainer_1bisn_2387", V2 = "_sideDrawerList_1bisn_2393", G2 = "_sideDrawerItem_1bisn_2399", K2 = "_sideDrawerLink_1bisn_2403", Y2 = "_sideDrawerIcon_1bisn_2434", J2 = "_sideDrawerLabel_1bisn_2440", X2 = "_sideDrawerSubList_1bisn_2444", Q2 = "_sideDrawerSubItem_1bisn_2453", e4 = "_sideDrawerSubLink_1bisn_2457", t4 = "_genericNavigation_1bisn_2486", i4 = "_genericList_1bisn_2490", n4 = "_genericItem_1bisn_2498", a4 = "_genericLink_1bisn_2502", o4 = "_genericIcon_1bisn_2531", r4 = "_genericLabel_1bisn_2535", oa = {
  container: U0,
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
  flex: W0,
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
  grid: V0,
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
  relative: G0,
  absolute: K0,
  fixed: Y0,
  sticky: J0,
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
  truncate: X0,
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
  border: Q0,
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
  rounded: e2,
  "rounded-md": "_rounded-md_1bisn_989",
  "rounded-lg": "_rounded-lg_1bisn_993",
  "rounded-xl": "_rounded-xl_1bisn_997",
  "rounded-2xl": "_rounded-2xl_1bisn_1001",
  "rounded-full": "_rounded-full_1bisn_1005",
  "shadow-none": "_shadow-none_1bisn_1009",
  "shadow-sm": "_shadow-sm_1bisn_1013",
  shadow: t2,
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
  transition: i2,
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
  small: n2,
  large: a2,
  "primary-button": "_primary-button_1bisn_1590",
  "secondary-button": "_secondary-button_1bisn_1594",
  card: o2,
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
  Navigation: r2,
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
  navbarContainer: s2,
  navbarBrand: l2,
  navbarItems: c2,
  navbarItem: _2,
  navbarLink: d2,
  active: u2,
  disabled: m2,
  navbarIcon: h2,
  navbarLabel: p2,
  navbarBadge: f2,
  mobileNavContainer: g2,
  mobileNavItem: b2,
  mobileNavIcon: y2,
  mobileNavLabel: v2,
  mobileNavBadge: x2,
  breadcrumbsList: w2,
  breadcrumbItem: k2,
  breadcrumbLink: S2,
  breadcrumbCurrent: C2,
  breadcrumbSeparator: z2,
  paginationContainer: j2,
  paginationList: T2,
  paginationItem: P2,
  paginationButton: E2,
  tabsContainer: N2,
  tabsList: I2,
  tabItem: L2,
  tabButton: A2,
  tabIcon: M2,
  tabLabel: O2,
  segmentedContainer: R2,
  segmentedGroup: D2,
  segmentedButton: B2,
  hamburgerContainer: $2,
  hamburgerList: F2,
  hamburgerItem: q2,
  hamburgerLink: H2,
  hamburgerIcon: Z2,
  hamburgerLabel: U2,
  sideDrawerContainer: W2,
  sideDrawerList: V2,
  sideDrawerItem: G2,
  sideDrawerLink: K2,
  sideDrawerIcon: Y2,
  sideDrawerLabel: J2,
  sideDrawerSubList: X2,
  sideDrawerSubItem: Q2,
  sideDrawerSubLink: e4,
  genericNavigation: t4,
  genericList: i4,
  genericItem: n4,
  genericLink: a4,
  genericIcon: o4,
  genericLabel: r4,
  "loading-shimmer": "_loading-shimmer_1bisn_1"
}, s4 = {
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
}, l4 = {
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
}, c4 = {
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
}, _4 = {
  kind: "side-drawer",
  variant: "embedded",
  layout: "vertical",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  persistState: !0,
  enableKeyboardNav: !0,
  description: "Side drawer navigation for desktop and tablet"
}, d4 = {
  kind: "breadcrumbs",
  variant: "minimal",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Breadcrumb navigation showing current page hierarchy"
}, u4 = {
  kind: "pagination",
  variant: "detailed",
  layout: "horizontal",
  position: "center",
  showIcons: !0,
  showLabels: !0,
  enableKeyboardNav: !0,
  description: "Pagination controls for data tables and lists"
}, m4 = {
  kind: "tabs",
  variant: "primary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  enableKeyboardNav: !0,
  description: "Tab navigation for content sections"
}, h4 = {
  kind: "segmented-controls",
  variant: "secondary",
  layout: "horizontal",
  position: "center",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Segmented controls for option selection"
}, p4 = {
  kind: "back-navigation",
  variant: "minimal",
  layout: "horizontal",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  description: "Back navigation button for page transitions"
}, f4 = {
  kind: "step-navigation",
  variant: "detailed",
  layout: "horizontal",
  position: "top",
  showIcons: !0,
  showLabels: !0,
  highlightActive: !0,
  description: "Step-by-step navigation for multi-step processes"
}, g4 = {
  kind: "filter-navigation",
  variant: "secondary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  allowMultiSelect: !0,
  description: "Filter navigation for data filtering"
}, b4 = {
  kind: "quick-navigation",
  variant: "floating",
  layout: "vertical",
  position: "right",
  showIcons: !0,
  showLabels: !1,
  description: "Quick navigation for frequently used actions"
}, wa = {
  // Primary Navigation
  navbar: s4,
  "mobile-nav": l4,
  "hamburger-menu": c4,
  "side-drawer": _4,
  // Secondary Navigation
  breadcrumbs: d4,
  pagination: u4,
  tabs: m4,
  "segmented-controls": h4,
  // Utility Navigation
  "back-navigation": p4,
  "step-navigation": f4,
  "filter-navigation": g4,
  "quick-navigation": b4
};
function Zl(t) {
  return wa[t];
}
function U8(t) {
  return t in wa;
}
function W8(t) {
  return Object.values(wa).filter(
    (n) => n.variant === t
  );
}
function V8(t) {
  return Object.values(wa).filter(
    (n) => n.layout === t
  );
}
function gi(t, n) {
  return { ...Zl(t), ...n };
}
const G8 = {
  // App Navigation
  primaryApp: () => gi("navbar", {
    variant: "primary",
    showIcons: !0,
    showLabels: !0,
    responsive: !0
  }),
  mobileApp: () => gi("mobile-nav", {
    variant: "mobile-optimized",
    position: "bottom",
    showIcons: !0,
    showLabels: !1
  }),
  // Content Navigation
  contentTabs: () => gi("tabs", {
    variant: "primary",
    showIcons: !1,
    showLabels: !0
  }),
  // Data Navigation
  tablePagination: () => gi("pagination", {
    variant: "detailed",
    enableKeyboardNav: !0
  }),
  // Quick Actions
  floatingNav: () => gi("quick-navigation", {
    variant: "floating",
    position: "right",
    showIcons: !0,
    showLabels: !1
  })
}, K8 = {
  navbar: (t) => gi("navbar", { items: t }),
  tabs: (t) => gi("tabs", { items: t }),
  breadcrumbs: (t) => gi("breadcrumbs", { items: t }),
  pagination: (t, n) => gi("pagination", {
    items: y4(
      t,
      n
    )
  })
};
function y4(t, n) {
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
const bt = Le(
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
    showIcons: x,
    showLabels: k,
    showBadges: z,
    totalPages: E,
    currentPage: j = 1,
    onPageChange: D,
    activeTab: F,
    onTabChange: q,
    isOpen: M = !1,
    onToggle: O,
    ...P
  }, N) => {
    const J = Zl(t), $ = h ? { ...J, ...h } : J, W = [
      oa.Navigation,
      oa[`navigation--${$.variant}`],
      oa[`navigation--${$.layout}`],
      $.position && oa[`navigation--${$.position}`],
      r
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l.jsx(
      "nav",
      {
        ref: N,
        className: W,
        "data-navigation-kind": t,
        role: $.role || "navigation",
        "aria-label": $.ariaLabel || `${t} navigation`,
        children: v4(
          $,
          c,
          d,
          F,
          E,
          j,
          u,
          x,
          k,
          z,
          a
        )
      }
    );
  }
);
function v4(t, n, a, r, c, d = 1, u, h, p, g, y) {
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
bt.Presets = {
  navbar: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "navbar", ...t }),
  mobileNav: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "mobile-nav", ...t }),
  hamburger: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "hamburger-menu", ...t }),
  sideDrawer: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "side-drawer", ...t }),
  breadcrumbs: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "breadcrumbs", ...t }),
  pagination: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "pagination", ...t }),
  tabs: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "tabs", ...t }),
  segmentedControls: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "segmented-controls", ...t }),
  backNav: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "back-navigation", ...t }),
  stepNav: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "step-navigation", ...t }),
  filterNav: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "filter-navigation", ...t }),
  quickNav: (t = {}) => /* @__PURE__ */ l.jsx(bt, { kind: "quick-navigation", ...t }),
  responsiveNav: (t = {}) => /* @__PURE__ */ l.jsx(
    bt,
    {
      kind: "navbar",
      responsive: !0,
      mobileBreakpoint: 768,
      ...t
    }
  ),
  dashboardNav: (t = {}) => /* @__PURE__ */ l.jsx(
    bt,
    {
      kind: "side-drawer",
      collapsible: !0,
      defaultCollapsed: !1,
      ...t
    }
  ),
  wizardNav: (t = {}) => /* @__PURE__ */ l.jsx(
    bt,
    {
      kind: "step-navigation",
      showProgress: !0,
      allowSkip: !1,
      ...t
    }
  )
};
bt.displayName = "Navigation";
const Y8 = di(bt), x4 = "_notification_1hh72_120", w4 = "_notification__icon_1hh72_142", k4 = "_notification__icon_text_1hh72_151", S4 = "_notification__content_1hh72_156", C4 = "_notification__title_1hh72_162", z4 = "_notification__message_1hh72_172", j4 = "_notification__children_1hh72_181", T4 = "_notification__close_1hh72_185", P4 = "_notification__actions_1hh72_208", E4 = "_notification__action_1hh72_208", N4 = "_notification__progress_1hh72_281", I4 = "_notification__progress_bar_1hh72_292", L4 = "_slideInRight_1hh72_1", A4 = "_slideOutRight_1hh72_1", M4 = "_fadeIn_1hh72_1", O4 = "_fadeOut_1hh72_1", R4 = "_scaleIn_1hh72_1", D4 = "_scaleOut_1hh72_1", B4 = "_bounceIn_1hh72_1", $4 = "_shake_1hh72_1", Je = {
  notification: x4,
  "notification--hidden": "_notification--hidden_1hh72_137",
  notification__icon: w4,
  notification__icon_text: k4,
  notification__content: S4,
  notification__title: C4,
  notification__message: z4,
  notification__children: j4,
  notification__close: T4,
  notification__actions: P4,
  notification__action: E4,
  "notification__action--primary": "_notification__action--primary_1hh72_251",
  "notification__action--secondary": "_notification__action--secondary_1hh72_256",
  "notification__action--text": "_notification__action--text_1hh72_261",
  "notification__action--confirm": "_notification__action--confirm_1hh72_266",
  "notification__action--cancel": "_notification__action--cancel_1hh72_271",
  notification__progress: N4,
  notification__progress_bar: I4,
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
  slideInRight: L4,
  "notification--exit-slide": "_notification--exit-slide_1hh72_520",
  slideOutRight: A4,
  "notification--enter-fade": "_notification--enter-fade_1hh72_524",
  fadeIn: M4,
  "notification--exit-fade": "_notification--exit-fade_1hh72_528",
  fadeOut: O4,
  "notification--enter-scale": "_notification--enter-scale_1hh72_532",
  scaleIn: R4,
  "notification--exit-scale": "_notification--exit-scale_1hh72_536",
  scaleOut: D4,
  "notification--enter-bounce": "_notification--enter-bounce_1hh72_540",
  bounceIn: B4,
  "notification--enter-shake": "_notification--enter-shake_1hh72_544",
  shake: $4,
  "loading-shimmer": "_loading-shimmer_1hh72_1"
}, Ss = {
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
}, F4 = (t) => Ss[t] || Ss.toast, q4 = (t) => {
  const n = {
    success: "✓",
    error: "✗",
    warning: "⚠",
    info: "ℹ",
    neutral: "•"
  };
  return n[t] || n.neutral;
}, Ve = Le((t, n) => {
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
    severity: x,
    position: k,
    // Behavior
    visible: z = !0,
    autoHide: E,
    duration: j,
    persistent: D,
    dismissible: F,
    pauseOnHover: q,
    // Actions
    actions: M,
    confirmText: O,
    cancelText: P,
    // Styling
    showIcon: N,
    showCloseButton: J,
    showProgress: $,
    // Animation
    enterAnimation: W,
    exitAnimation: T,
    // Callbacks
    onShow: A,
    onHide: V,
    onClick: ee,
    onConfirm: le,
    onCancel: ae,
    onAction: te,
    ...ce
  } = t, w = F4(a), G = {
    ...w,
    title: u || w.title,
    message: h || w.message,
    variant: y || w.variant,
    severity: x || w.severity,
    position: k || w.position,
    autoHide: E !== void 0 ? E : w.autoHide,
    duration: j !== void 0 ? j : w.duration,
    persistent: D !== void 0 ? D : w.persistent,
    dismissible: F !== void 0 ? F : w.dismissible,
    pauseOnHover: q !== void 0 ? q : w.pauseOnHover,
    actions: M || w.actions,
    confirmText: O || w.confirmText,
    cancelText: P || w.cancelText,
    showIcon: N !== void 0 ? N : w.showIcon,
    showCloseButton: J !== void 0 ? J : w.showCloseButton,
    showProgress: $ !== void 0 ? $ : w.showProgress,
    enterAnimation: W || w.enterAnimation,
    exitAnimation: T || w.exitAnimation
  }, [v, R] = tt.useState(z), [S, H] = tt.useState(!1), [ie, X] = tt.useState(100);
  tt.useEffect(() => {
    if (!G.autoHide || !v || S) return;
    const ke = setTimeout(() => {
      K();
    }, G.duration);
    return () => clearTimeout(ke);
  }, [
    G.autoHide,
    G.duration,
    v,
    S
  ]), tt.useEffect(() => {
    if (!G.autoHide || !G.showProgress || !v || S)
      return;
    const ke = setInterval(() => {
      X(
        (he) => Math.max(
          0,
          he - 100 / ((G.duration || 4e3) / 100)
        )
      );
    }, 100);
    return () => clearInterval(ke);
  }, [
    G.autoHide,
    G.showProgress,
    G.duration,
    v,
    S
  ]);
  const K = () => {
    R(!1), V == null || V();
  }, fe = () => {
    le == null || le(), K();
  }, de = () => {
    ae == null || ae(), K();
  }, Pe = (ke) => {
    ke.onClick(), te == null || te(ke), ke.variant !== "text" && K();
  }, be = [
    Je.notification,
    Je[`notification--${G.kind}`],
    Je[`notification--${G.variant}`],
    Je[`notification--${G.severity}`],
    G.position && Je[`notification--${G.position.replace("-", "_")}`],
    G.enterAnimation && Je[`notification--enter-${G.enterAnimation}`],
    !v && G.exitAnimation && Je[`notification--exit-${G.exitAnimation}`],
    !v && Je["notification--hidden"],
    d
  ].filter(Boolean).join(" "), Q = () => {
    if (!G.showIcon) return null;
    const ke = p || G.severity && q4(G.severity);
    return /* @__PURE__ */ l.jsx(f, { className: Je.notification__icon, children: typeof ke == "string" ? /* @__PURE__ */ l.jsx("span", { className: Je.notification__icon_text, children: ke }) : ke });
  }, ne = () => !G.showCloseButton || !G.dismissible ? null : /* @__PURE__ */ l.jsx(
    "button",
    {
      className: Je.notification__close,
      onClick: K,
      "aria-label": "Close notification",
      children: "×"
    }
  ), ue = () => {
    var ke;
    return G.kind.includes("confirm") ? /* @__PURE__ */ l.jsxs(f, { className: Je.notification__actions, children: [
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: Je.notification__action + " " + Je["notification__action--confirm"],
          onClick: fe,
          children: G.confirmText || "Confirm"
        }
      ),
      /* @__PURE__ */ l.jsx(
        "button",
        {
          className: Je.notification__action + " " + Je["notification__action--cancel"],
          onClick: de,
          children: G.cancelText || "Cancel"
        }
      )
    ] }) : (ke = G.actions) != null && ke.length ? /* @__PURE__ */ l.jsx(f, { className: Je.notification__actions, children: G.actions.map((he, Z) => /* @__PURE__ */ l.jsx(
      "button",
      {
        className: Je.notification__action + (he.variant ? " " + Je[`notification__action--${he.variant}`] : ""),
        onClick: () => Pe(he),
        disabled: he.disabled,
        children: he.label
      },
      Z
    )) }) : null;
  }, oe = () => !G.showProgress || !G.autoHide ? null : /* @__PURE__ */ l.jsx(f, { className: Je.notification__progress, children: /* @__PURE__ */ l.jsx(
    f,
    {
      className: Je.notification__progress_bar,
      style: { width: `${ie}%` }
    }
  ) });
  return !v && G.exitAnimation && setTimeout(() => {
    R(!1);
  }, 300), !v && !G.exitAnimation ? null : /* @__PURE__ */ l.jsxs(
    f,
    {
      ...ce,
      ref: n,
      className: be,
      onClick: ee,
      onMouseEnter: () => G.pauseOnHover && H(!0),
      onMouseLeave: () => G.pauseOnHover && H(!1),
      role: "alert",
      "aria-live": "polite",
      children: [
        g && /* @__PURE__ */ l.jsx(f, { className: Je.notification__image, children: /* @__PURE__ */ l.jsx("img", { src: g, alt: "" }) }),
        Q(),
        /* @__PURE__ */ l.jsxs(f, { className: Je.notification__content, children: [
          G.title && /* @__PURE__ */ l.jsx("div", { className: Je.notification__title, children: G.title }),
          G.message && /* @__PURE__ */ l.jsx("div", { className: Je.notification__message, children: G.message }),
          c && /* @__PURE__ */ l.jsx("div", { className: Je.notification__children, children: c }),
          ue()
        ] }),
        ne(),
        oe()
      ]
    }
  );
});
Ve.displayName = "Notification";
Ve.Presets = {
  toast: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "toast", ...t }),
  toastSuccess: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "toast-success", ...t }),
  toastError: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "toast-error", ...t }),
  toastWarning: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "toast-warning", ...t }),
  toastInfo: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "toast-info", ...t }),
  snackbar: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "snackbar", ...t }),
  snackbarAction: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "snackbar-action", ...t }),
  snackbarPersistent: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "snackbar-persistent", ...t }),
  alert: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "alert", ...t }),
  alertSuccess: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "alert-success", ...t }),
  alertError: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "alert-error", ...t }),
  alertWarning: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "alert-warning", ...t }),
  alertInfo: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "alert-info", ...t }),
  banner: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "banner", ...t }),
  bannerAnnouncement: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "banner-announcement", ...t }),
  bannerPromotion: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "banner-promotion", ...t }),
  bannerUpdate: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "banner-update", ...t }),
  confirmDialog: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "confirm-dialog", ...t }),
  confirmDelete: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "confirm-delete", ...t }),
  confirmAction: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "confirm-action", ...t }),
  confirmNavigation: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "confirm-navigation", ...t }),
  achievementToast: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "achievement-toast", ...t }),
  gameAlert: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "game-alert", ...t }),
  matchNotification: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "match-notification", ...t }),
  socialNotification: (t = {}) => /* @__PURE__ */ l.jsx(Ve, { kind: "social-notification", ...t })
};
const J8 = di(Ve), H4 = Le(
  ({ kind: t = "linear-progress", ...n }, a) => /* @__PURE__ */ l.jsx(UnifiedProgress, { ref: a, kind: t, ...n })
);
H4.displayName = "Progress";
const Z4 = {
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
}, X8 = (t) => Z4[t], Cs = {
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
}, Ul = (t) => Cs[t] || Cs["data-table"], U4 = (t, n) => ({
  ...t,
  ...n,
  columns: n.columns || t.columns,
  data: n.data || t.data
}), Q8 = (t, n = {}) => {
  const a = Ul(t);
  return U4(a, n);
}, e7 = (t) => {
  const n = [];
  if (t.kind || n.push("Table kind is required"), t.pagination && typeof t.pagination == "object") {
    const a = t.pagination;
    a.page < 1 && n.push("Pagination page must be >= 1"), a.pageSize < 1 && n.push("Pagination pageSize must be >= 1");
  }
  return t.selectable && !t.selectionMode && n.push(
    "Selection mode required when selectable is true"
  ), n;
}, W4 = "_container_1khcc_117", V4 = "_flex_1khcc_248", G4 = "_grid_1khcc_344", K4 = "_relative_1khcc_726", Y4 = "_absolute_1khcc_730", J4 = "_fixed_1khcc_734", X4 = "_sticky_1khcc_738", Q4 = "_truncate_1khcc_877", e3 = "_border_1khcc_937", t3 = "_rounded_1khcc_977", i3 = "_shadow_1khcc_1009", n3 = "_transition_1khcc_1081", a3 = "_small_1khcc_1581", o3 = "_large_1khcc_1585", r3 = "_card_1khcc_1633", s3 = "_table_container_1khcc_1758", l3 = "_table_wrapper_1khcc_1775", c3 = "_table_1khcc_1231", _3 = "_table__header_1khcc_1833", d3 = "_table__header_row_1khcc_1848", u3 = "_table__header_cell_1khcc_1852", m3 = "_table__header_content_1khcc_1884", h3 = "_table__sort_indicator_1khcc_1893", p3 = "_table__body_1khcc_1902", f3 = "_table__row_1khcc_1906", g3 = "_table__cell_1khcc_1942", b3 = "_table__empty_row_1khcc_1957", y3 = "_table__empty_cell_1khcc_1957", v3 = "_table__expand_button_1khcc_1964", x3 = "_table__search_1khcc_1981", w3 = "_table__search_input_1khcc_1987", k3 = "_skeleton_content_1khcc_2006", Me = {
  container: W4,
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
  flex: V4,
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
  grid: G4,
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
  relative: K4,
  absolute: Y4,
  fixed: J4,
  sticky: X4,
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
  truncate: Q4,
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
  border: e3,
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
  rounded: t3,
  "rounded-md": "_rounded-md_1khcc_989",
  "rounded-lg": "_rounded-lg_1khcc_993",
  "rounded-xl": "_rounded-xl_1khcc_997",
  "rounded-2xl": "_rounded-2xl_1khcc_1001",
  "rounded-full": "_rounded-full_1khcc_1005",
  "shadow-none": "_shadow-none_1khcc_1009",
  "shadow-sm": "_shadow-sm_1khcc_1013",
  shadow: i3,
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
  transition: n3,
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
  small: a3,
  large: o3,
  "primary-button": "_primary-button_1khcc_1590",
  "secondary-button": "_secondary-button_1khcc_1594",
  card: r3,
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
  table_container: s3,
  table_wrapper: l3,
  table: c3,
  "table--fixed": "_table--fixed_1khcc_1818",
  "table--auto": "_table--auto_1khcc_1821",
  "table--responsive": "_table--responsive_1khcc_1824",
  table__header: _3,
  "table--sticky-header": "_table--sticky-header_1khcc_1837",
  table__header_row: d3,
  table__header_cell: u3,
  "table__header_cell--sortable": "_table__header_cell--sortable_1khcc_1864",
  table__header_content: m3,
  table__sort_indicator: h3,
  table__body: p3,
  table__row: f3,
  "table--hover": "_table--hover_1khcc_1913",
  "table--clickable": "_table--clickable_1khcc_1916",
  "table__row--selected": "_table__row--selected_1khcc_1931",
  "table__row--expanded": "_table__row--expanded_1khcc_1935",
  "table__row--skeleton": "_table__row--skeleton_1khcc_1938",
  table__cell: g3,
  "table__cell--skeleton": "_table__cell--skeleton_1khcc_1953",
  table__empty_row: b3,
  table__empty_cell: y3,
  table__expand_button: v3,
  table__search: x3,
  table__search_input: w3,
  skeleton_content: k3,
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
}, Wo = Le(
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
      sortable: x,
      filterable: k,
      selectable: z,
      expandable: E,
      editable: j,
      // Sorting
      defaultSort: D,
      multiSort: F,
      onSort: q,
      // Filtering
      defaultFilters: M,
      searchable: O,
      searchPlaceholder: P,
      onFilter: N,
      // Pagination
      pagination: J,
      // Selection
      selectionMode: $,
      selectedRows: W,
      onSelect: T,
      // Expansion
      expandableRows: A,
      defaultExpanded: V,
      onExpand: ee,
      // Loading
      loading: le,
      loadingRows: ae,
      // Styling
      height: te,
      maxHeight: ce,
      minHeight: w,
      stickyHeader: G,
      zebraStripes: v,
      borderStyle: R,
      // Behavior
      clickableRows: S,
      hoverEffects: H,
      onRowClick: ie,
      onRowDoubleClick: X,
      onCellEdit: K,
      // Custom styling
      headerClassName: fe,
      bodyClassName: de,
      rowClassName: Pe,
      cellClassName: be,
      ...Q
    } = t, ne = Ul(a), ue = (B, pe) => B !== void 0 ? B : pe, oe = {
      ...ne,
      variant: g || ne.variant,
      layout: y || ne.layout,
      sortable: ue(
        x,
        ne.sortable
      ),
      filterable: ue(
        k,
        ne.filterable
      ),
      selectable: ue(
        z,
        ne.selectable
      ),
      expandable: ue(
        E,
        ne.expandable
      ),
      editable: ue(
        j,
        ne.editable
      ),
      multiSort: ue(
        F,
        ne.multiSort
      ),
      searchable: ue(
        O,
        ne.searchable
      ),
      pagination: ue(
        J,
        ne.pagination
      ),
      selectionMode: $ || ne.selectionMode,
      expandableRows: ue(
        A,
        ne.expandableRows
      ),
      loading: ue(
        le,
        ne.loading
      ),
      loadingRows: ae || ne.loadingRows,
      stickyHeader: ue(
        G,
        ne.stickyHeader
      ),
      zebraStripes: ue(
        v,
        ne.zebraStripes
      ),
      borderStyle: R || ne.borderStyle,
      clickableRows: ue(
        S,
        ne.clickableRows
      ),
      hoverEffects: ue(
        H,
        ne.hoverEffects
      )
    }, ke = sn(), he = d || `table-${ke}`, Z = vi();
    Te(() => (Z(
      Rb({
        componentId: he,
        initialState: {
          sorting: D && D.direction !== "none" ? {
            column: D.column,
            direction: D.direction
          } : { column: "", direction: "asc" },
          filters: M ? M.reduce(
            (B, pe) => (B[pe.column] = pe.value, B),
            {}
          ) : {},
          searchTerm: "",
          selectedRows: new Set(W || []),
          expandedRows: new Set(V || []),
          editingCell: null
        }
      })
    ), () => {
      Z(
        Fb({
          componentId: he
        })
      );
    }), [
      Z,
      he,
      D,
      M,
      W,
      V
    ]);
    const U = Nt(
      (B) => qb(B, he)
    ), Oe = Nt(
      (B) => Hb(B, he)
    ), nt = Nt(
      (B) => Zb(B, he)
    ), Ge = Nt(
      (B) => Ub(B, he)
    ), Ue = Nt(
      (B) => Wb(B, he)
    ), De = Nt(
      (B) => Vb(B, he)
    ), ve = Array.from(Ge), $e = Array.from(Ue), Qe = Object.entries(Oe).map(
      ([B, pe]) => ({
        column: B,
        value: pe,
        operator: "equals"
      })
    ), st = u || [], Ae = h || [], xt = _i(() => oe.loading ? Array.from(
      { length: oe.loadingRows || 5 },
      (pe, Se) => {
        const kt = { id: `skeleton-${Se}` };
        return st.forEach((Ft) => {
          kt[Ft.key] = "...";
        }), kt;
      }
    ) : [], [oe.loading, oe.loadingRows, st]), jt = oe.loading ? xt : Ae, wt = _i(() => !oe.searchable || !nt.trim() ? jt : jt.filter((B) => st.some((pe) => {
      const Se = B[pe.key];
      return String(Se).toLowerCase().includes(nt.toLowerCase());
    })), [
      jt,
      nt,
      st,
      oe.searchable
    ]), ni = _i(() => Oe.length === 0 ? wt : wt.filter((B) => Qe.every(
      (pe) => {
        const Se = B[pe.column];
        switch (pe.operator || "equals") {
          case "equals":
            return Se === pe.value;
          case "contains":
            return String(Se).toLowerCase().includes(
              String(pe.value).toLowerCase()
            );
          case "startsWith":
            return String(Se).toLowerCase().startsWith(
              String(pe.value).toLowerCase()
            );
          case "endsWith":
            return String(Se).toLowerCase().endsWith(
              String(pe.value).toLowerCase()
            );
          case "greaterThan":
            return Number(Se) > Number(pe.value);
          case "lessThan":
            return Number(Se) < Number(pe.value);
          default:
            return !0;
        }
      }
    )), [wt, Qe]), Lt = _i(() => !oe.sortable || !U.column ? ni : [...ni].sort((B, pe) => {
      const Se = B[U.column], kt = pe[U.column];
      let Ft = 0;
      return Se < kt ? Ft = -1 : Se > kt && (Ft = 1), U.direction === "desc" ? -Ft : Ft;
    }), [ni, U, oe.sortable]), ai = (B) => {
      if (!oe.sortable) return;
      let pe = "asc";
      U.column === B && (pe = U.direction === "asc" ? "desc" : U.direction === "desc" ? "none" : "asc");
      const Se = { column: B, direction: pe };
      Z(
        Db({
          componentId: he,
          sorting: pe === "none" ? { column: "", direction: "asc" } : {
            column: B,
            direction: pe
          }
        })
      ), q == null || q(Se);
    }, Bt = (B, pe) => {
      if (!oe.selectable) return;
      let Se;
      oe.selectionMode === "single" ? Se = pe ? [B] : [] : Se = pe ? [...ve, B] : ve.filter(
        (kt) => kt !== B
      ), Z(
        fs({
          componentId: he,
          selectedRows: Se
        })
      ), T == null || T(Se);
    }, $t = (B) => {
      if (!oe.expandable) return;
      const pe = $e.includes(B), Se = pe ? $e.filter(
        (kt) => kt !== B
      ) : [...$e, B];
      Z(
        $b({
          componentId: he,
          expandedRows: Se
        })
      ), ee == null || ee(B, !pe);
    }, Wt = (B, pe, Se) => {
      K == null || K(B, pe, Se), Z(
        So({
          componentId: he,
          editingCell: null
        })
      );
    }, xi = [
      Me.table,
      Me[`table--${oe.kind}`],
      Me[`table--${oe.variant}`],
      Me[`table--${oe.layout}`],
      oe.stickyHeader && Me["table--sticky-header"],
      oe.zebraStripes && Me["table--striped"],
      oe.hoverEffects && Me["table--hover"],
      oe.clickableRows && Me["table--clickable"],
      oe.loading && Me["table--loading"],
      oe.borderStyle && Me[`table--border-${oe.borderStyle}`],
      c
    ].filter(Boolean).join(" "), wi = [
      Me.table__header,
      fe
    ].filter(Boolean).join(" "), ye = [Me.table__body, de].filter(Boolean).join(" "), Ee = () => /* @__PURE__ */ l.jsx("thead", { className: wi, children: /* @__PURE__ */ l.jsxs("tr", { className: Me.table__header_row, children: [
      oe.selectable && /* @__PURE__ */ l.jsx("th", { className: Me.table__header_cell, children: /* @__PURE__ */ l.jsx(
        "input",
        {
          type: "checkbox",
          onChange: (B) => {
            const pe = Lt.map(
              (kt) => kt[p]
            ), Se = B.target.checked ? pe : [];
            Z(
              fs({
                componentId: he,
                selectedRows: Se
              })
            ), T == null || T(Se);
          },
          checked: ve.length === Lt.length && Lt.length > 0,
          ref: (B) => {
            B && (B.indeterminate = ve.length > 0 && ve.length < Lt.length);
          }
        }
      ) }),
      oe.expandable && /* @__PURE__ */ l.jsx("th", { className: Me.table__header_cell }),
      st.map((B) => /* @__PURE__ */ l.jsx(
        "th",
        {
          className: `${Me.table__header_cell} ${B.sortable !== !1 && oe.sortable ? Me["table__header_cell--sortable"] : ""}`,
          style: {
            width: B.width,
            minWidth: B.minWidth,
            maxWidth: B.maxWidth,
            textAlign: B.align || "left"
          },
          onClick: () => B.sortable !== !1 && ai(B.key),
          children: /* @__PURE__ */ l.jsxs(
            "span",
            {
              className: Me.table__header_content,
              children: [
                B.label,
                oe.sortable && B.sortable !== !1 && /* @__PURE__ */ l.jsx(
                  "span",
                  {
                    className: Me.table__sort_indicator,
                    children: U.column === B.key && (U.direction === "asc" ? "↑" : U.direction === "desc" ? "↓" : "")
                  }
                )
              ]
            }
          )
        },
        B.key
      ))
    ] }) }), et = (B, pe) => {
      const Se = B[p], kt = ve.includes(Se), Ft = $e.includes(Se), ka = typeof Pe == "function" ? Pe(B, pe) : Pe, Sa = [
        Me.table__row,
        kt && Me["table__row--selected"],
        Ft && Me["table__row--expanded"],
        oe.loading && Me["table__row--skeleton"],
        ka
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ l.jsxs(
        "tr",
        {
          className: Sa,
          onClick: () => {
            oe.clickableRows && (ie == null || ie(B, pe));
          },
          onDoubleClick: () => X == null ? void 0 : X(B, pe),
          children: [
            oe.selectable && /* @__PURE__ */ l.jsx("td", { className: Me.table__cell, children: /* @__PURE__ */ l.jsx(
              "input",
              {
                type: oe.selectionMode === "single" ? "radio" : "checkbox",
                checked: kt,
                onChange: (dt) => Bt(
                  Se,
                  dt.target.checked
                )
              }
            ) }),
            oe.expandable && /* @__PURE__ */ l.jsx("td", { className: Me.table__cell, children: /* @__PURE__ */ l.jsx(
              Ce,
              {
                kind: "ghost",
                className: Me.table__expand_button,
                onClick: (dt) => {
                  dt.stopPropagation(), $t(Se);
                },
                children: Ft ? "−" : "+"
              }
            ) }),
            st.map((dt) => {
              const Ii = B[dt.key], Vt = (De == null ? void 0 : De.rowId) === Se && (De == null ? void 0 : De.column) === dt.key, ge = typeof be == "function" ? be(Ii, B, dt) : be, On = [
                Me.table__cell,
                oe.loading && Me["table__cell--skeleton"],
                ge
              ].filter(Boolean).join(" ");
              return /* @__PURE__ */ l.jsx(
                "td",
                {
                  className: On,
                  style: {
                    textAlign: dt.align || "left"
                  },
                  onDoubleClick: () => {
                    oe.editable && Z(
                      So({
                        componentId: he,
                        editingCell: {
                          rowId: Se,
                          column: dt.key
                        }
                      })
                    );
                  },
                  children: Vt ? /* @__PURE__ */ l.jsx(
                    "input",
                    {
                      type: "text",
                      defaultValue: Ii,
                      onBlur: (ki) => Wt(
                        Se,
                        dt.key,
                        ki.target.value
                      ),
                      onKeyDown: (ki) => {
                        ki.key === "Enter" ? Wt(
                          Se,
                          dt.key,
                          ki.currentTarget.value
                        ) : ki.key === "Escape" && Z(
                          So({
                            componentId: he,
                            editingCell: null
                          })
                        );
                      },
                      autoFocus: !0
                    }
                  ) : dt.cellRenderer ? dt.cellRenderer(
                    Ii,
                    B,
                    dt
                  ) : dt.format ? dt.format(Ii) : oe.loading ? /* @__PURE__ */ l.jsx(
                    f,
                    {
                      className: Me.skeleton_content
                    }
                  ) : Ii
                },
                dt.key
              );
            })
          ]
        },
        Se
      );
    }, Tt = () => oe.searchable ? /* @__PURE__ */ l.jsx(f, { className: Me.table__search, children: /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "text",
        placeholder: P || oe.searchPlaceholder || "Search...",
        value: nt,
        onChange: (B) => Z(
          Bb({
            componentId: he,
            searchTerm: B.target.value
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
              ...Q,
              ref: n,
              className: xi,
              children: [
                Ee(),
                /* @__PURE__ */ l.jsxs("tbody", { className: ye, children: [
                  Lt.map(
                    (B, pe) => et(B, pe)
                  ),
                  Lt.length === 0 && !oe.loading && /* @__PURE__ */ l.jsx("tr", { className: Me.table__empty_row, children: /* @__PURE__ */ l.jsx(
                    "td",
                    {
                      colSpan: st.length + (oe.selectable ? 1 : 0) + (oe.expandable ? 1 : 0),
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
Wo.displayName = "Table";
const t7 = di(Wo);
function ht(t) {
  const n = typeof t == "string" ? { kind: t } : t;
  return (a = {}) => {
    const r = { ...n, ...a };
    return tt.createElement(Wo, r);
  };
}
const i7 = {
  // Basic Tables
  dataTable: ht("data-table"),
  simpleTable: ht("simple-table"),
  sortableTable: ht("sortable-table"),
  filterableTable: ht("filterable-table"),
  // Advanced Tables
  dataGrid: ht("data-grid"),
  editableGrid: ht("editable-grid"),
  selectableGrid: ht("selectable-grid"),
  expandableGrid: ht("expandable-grid"),
  // Loading States
  skeletonTable: ht("skeleton-table"),
  loadingTable: ht("loading-table"),
  // Specialized Tables
  pricingTable: ht("pricing-table"),
  comparisonTable: ht("comparison-table"),
  statsTable: ht("stats-table"),
  leaderboardTable: ht("leaderboard-table"),
  // Advanced Presets
  dashboardGrid: ht({
    kind: "data-grid",
    variant: "modern",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    pagination: !0,
    stickyHeader: !0
  }),
  adminTable: ht({
    kind: "data-grid",
    variant: "bordered",
    sortable: !0,
    filterable: !0,
    selectable: !0,
    selectionMode: "multiple",
    editable: !0,
    pagination: !0
  }),
  reportTable: ht({
    kind: "stats-table",
    variant: "striped",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    zebraStripes: !0,
    stickyHeader: !0
  }),
  quickList: ht({
    kind: "simple-table",
    variant: "minimal",
    hoverEffects: !0,
    clickableRows: !0
  }),
  gameLeaderboard: ht({
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
}, S3 = "_container_hi9gt_129", C3 = "_flex_hi9gt_260", z3 = "_grid_hi9gt_356", j3 = "_relative_hi9gt_738", T3 = "_absolute_hi9gt_742", P3 = "_fixed_hi9gt_746", E3 = "_sticky_hi9gt_750", N3 = "_truncate_hi9gt_889", I3 = "_border_hi9gt_949", L3 = "_rounded_hi9gt_989", A3 = "_shadow_hi9gt_1021", M3 = "_transition_hi9gt_1093", O3 = "_small_hi9gt_1593", R3 = "_large_hi9gt_1597", D3 = "_card_hi9gt_1645", B3 = "_utility_hi9gt_1770", $3 = "_utility__icon_hi9gt_2029", F3 = "_utility__label_hi9gt_2035", q3 = "_utility__dismiss_hi9gt_2041", H3 = "_utility__overlay_hi9gt_2078", Z3 = "_utility__tooltip_hi9gt_2138", U3 = "_utility__popover_hi9gt_2141", W3 = "_utility__popover_title_hi9gt_2146", V3 = "_utility__popover_content_hi9gt_2151", G3 = "_utility__rating_hi9gt_2154", K3 = "_utility__star_hi9gt_2162", Y3 = "_utility__rating_label_hi9gt_2201", J3 = "_utility__stepper_hi9gt_2208", X3 = "_utility__step_hi9gt_2208", Q3 = "_utility__step_marker_hi9gt_2237", eS = "_utility__step_connector_hi9gt_2253", tS = "_utility__divider_label_hi9gt_2273", Fe = {
  container: S3,
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
  flex: C3,
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
  grid: z3,
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
  relative: j3,
  absolute: T3,
  fixed: P3,
  sticky: E3,
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
  truncate: N3,
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
  border: I3,
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
  rounded: L3,
  "rounded-md": "_rounded-md_hi9gt_1001",
  "rounded-lg": "_rounded-lg_hi9gt_1005",
  "rounded-xl": "_rounded-xl_hi9gt_1009",
  "rounded-2xl": "_rounded-2xl_hi9gt_1013",
  "rounded-full": "_rounded-full_hi9gt_1017",
  "shadow-none": "_shadow-none_hi9gt_1021",
  "shadow-sm": "_shadow-sm_hi9gt_1025",
  shadow: A3,
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
  transition: M3,
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
  small: O3,
  large: R3,
  "primary-button": "_primary-button_hi9gt_1602",
  "secondary-button": "_secondary-button_hi9gt_1606",
  card: D3,
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
  utility: B3,
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
  utility__icon: $3,
  utility__label: F3,
  utility__dismiss: q3,
  utility__overlay: H3,
  "utility--visible": "_utility--visible_hi9gt_2097",
  "utility--top": "_utility--top_hi9gt_2102",
  "utility--bottom": "_utility--bottom_hi9gt_2111",
  "utility--left": "_utility--left_hi9gt_2120",
  "utility--right": "_utility--right_hi9gt_2129",
  utility__tooltip: Z3,
  utility__popover: U3,
  utility__popover_title: W3,
  utility__popover_content: V3,
  utility__rating: G3,
  utility__star: K3,
  "utility__star--filled": "_utility__star--filled_hi9gt_2187",
  utility__rating_label: Y3,
  utility__stepper: J3,
  utility__step: X3,
  utility__step_marker: Q3,
  utility__step_connector: eS,
  "utility__step--completed": "_utility__step--completed_hi9gt_2259",
  "utility__step--active": "_utility__step--active_hi9gt_2267",
  utility__divider_label: tS,
  "loading-shimmer": "_loading-shimmer_hi9gt_1"
}, iS = {
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
}, Wl = (t) => iS[t], Vo = Le(
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
    interactive: x,
    active: k,
    disabled: z,
    loading: E,
    value: j = 0,
    maxValue: D = 5,
    currentStep: F = 0,
    totalSteps: q = 3,
    actions: M,
    variant: O,
    size: P,
    color: N,
    backgroundColor: J,
    borderRadius: $,
    onClick: W,
    onDismiss: T,
    onValueChange: A,
    onStepChange: V,
    ...ee
  }, le) => {
    const ae = Wl(t), te = sn(), ce = r || `utility-${te}`, w = vi();
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
      w(Wi(ce));
    }), [w, ce]);
    const G = Nt(
      Up(ce)
    ) || {}, v = (G == null ? void 0 : G.isVisible) || !1;
    G != null && G.isHovered;
    const R = it(null);
    it(null);
    const S = {
      ...ae,
      label: c ?? ae.label,
      description: d ?? ae.description,
      icon: u ?? ae.icon,
      placement: h ?? ae.placement,
      trigger: p ?? ae.trigger,
      delay: g ?? ae.delay,
      dismissible: y ?? ae.dismissible,
      interactive: x ?? ae.interactive,
      active: k ?? ae.active,
      disabled: z ?? ae.disabled,
      loading: E ?? ae.loading,
      actions: M ?? ae.actions,
      variant: O ?? ae.variant,
      size: P ?? ae.size,
      color: N ?? ae.color,
      backgroundColor: J ?? ae.backgroundColor,
      borderRadius: $ ?? ae.borderRadius
    }, H = [
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
      v && Fe["utility--visible"],
      a
    ].filter(Boolean).join(" "), ie = () => {
      if (S.trigger === "hover") {
        R.current && clearTimeout(R.current);
        const Z = setTimeout(() => {
          w(
            kn({
              componentId: ce,
              updates: { isVisible: !0 }
            })
          );
        }, S.delay || 0);
        R.current = Z;
      }
    }, X = () => {
      S.trigger === "hover" && (R.current && clearTimeout(R.current), w(
        kn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ));
    }, K = () => {
      S.trigger === "click" && w(
        kn({
          componentId: ce,
          updates: { isVisible: !v }
        })
      ), W == null || W();
    }, fe = () => {
      w(
        kn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ), T == null || T();
    }, de = (Z) => {
      !S.interactive || S.disabled || A == null || A(Z);
    }, Pe = (Z) => {
      !S.interactive || S.disabled || V == null || V(Z);
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
    ] }) : n, Q = () => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      S.icon && /* @__PURE__ */ l.jsx("span", { className: Fe.utility__icon, children: S.icon }),
      /* @__PURE__ */ l.jsx("span", { className: Fe.utility__label, children: S.label || n }),
      S.dismissible && /* @__PURE__ */ l.jsx(
        Ce,
        {
          kind: "danger",
          className: Fe.utility__dismiss,
          onClick: fe,
          "aria-label": "Dismiss",
          children: "×"
        }
      )
    ] }), ne = () => {
      const Z = [];
      for (let U = 1; U <= D; U++)
        Z.push(
          /* @__PURE__ */ l.jsx(
            Ce,
            {
              kind: "ghost",
              className: [
                Fe.utility__star,
                U <= j && Fe["utility__star--filled"]
              ].filter(Boolean).join(" "),
              onClick: () => de(U),
              disabled: S.disabled,
              "aria-label": `Rate ${U} stars`,
              children: t === "rating-hearts" ? "♥" : t === "thumbs-rating" ? "👍" : "★"
            },
            U
          )
        );
      return Z;
    }, ue = () => {
      const Z = [];
      for (let U = 0; U < q; U++)
        Z.push(
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
                U < q - 1 && /* @__PURE__ */ l.jsx(
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
      return Z;
    }, oe = () => /* @__PURE__ */ l.jsx(l.Fragment, { children: S.label && /* @__PURE__ */ l.jsx("span", { className: Fe.utility__divider_label, children: S.label }) }), ke = () => {
      switch (!0) {
        case (t === "tooltip" || t === "popover"):
          return be();
        case (t.includes("tag") || t.includes("chip") || t.includes("badge") || t.includes("pill")):
          return Q();
        case t.includes("rating"):
          return /* @__PURE__ */ l.jsx(f, { className: Fe.utility__rating, children: ne() });
        case (t === "stepper" || t === "wizard-steps"):
          return /* @__PURE__ */ l.jsx(f, { className: Fe.utility__stepper, children: ue() });
        case (t.includes("divider") || t.includes("separator")):
          return oe();
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
        className: H,
        style: he,
        onMouseEnter: ie,
        onMouseLeave: X,
        onClick: K,
        role: S.interactive ? "button" : void 0,
        tabIndex: S.interactive ? 0 : void 0,
        "aria-disabled": S.disabled,
        ...ee,
        children: ke()
      }
    );
  }
);
Vo.displayName = "Utility";
const n7 = di(Vo);
function nS(t) {
  return tt.forwardRef((n, a) => /* @__PURE__ */ l.jsx(Vo, { ref: a, ...t, ...n }));
}
function He(t) {
  const n = Wl(t);
  return nS(n);
}
He("tooltip"), He("popover"), He("dropdown-menu"), He("context-menu"), He("modal-overlay"), He("divider"), He("separator"), He("spacer"), He("section-break"), He("tag"), He("chip"), He("badge"), He("label"), He("pill"), He(
  "status-indicator"
), He("stepper"), He("breadcrumb"), He("pagination"), He("wizard-steps"), He("rating-stars"), He("rating-hearts"), He("thumbs-rating"), He("numeric-rating"), He("feedback-scale"), He("container"), He("grid-item"), He("flex-item"), He("stack"), He("inline-stack");
export {
  AS as ADMIN_CONFIGURATIONS,
  Pn as ADVERTISEMENT_CONFIGURATIONS,
  HS as ADVERTISEMENT_GROUPS,
  ZS as ADVERTISEMENT_PRESETS,
  a9 as ActionCard,
  LS as Admin,
  bi as Advertisements,
  bp as Analytics,
  bp as AnalyticsReports,
  js as BUTTON_CONFIGURATIONS,
  sS as BUTTON_GROUPS,
  O8 as BrowseHeader,
  Ce as Button,
  Qs as CARD_CONFIGURATIONS,
  US as CARD_GROUPS,
  cs as CHART_CONFIGURATIONS,
  Mf as CHECKBOX_CONFIGURATIONS,
  Dt as Card,
  P9 as Chart,
  U9 as ChartControls,
  qo as Checkbox,
  o9 as ContentCard,
  l1 as DarkModeToggle,
  bp as Dashboard,
  K9 as DashboardLegend,
  G9 as DataSeriesToggle,
  J9 as EmptyState,
  Ao as FILE_UPLOAD_CONFIGURATIONS,
  X9 as FILE_UPLOAD_GROUPS,
  Cx as FORM_FIELD_CONFIGURATIONS,
  T8 as FORM_FIELD_GROUPS,
  P8 as FORM_FIELD_PRESETS,
  j8 as FileUpload,
  q9 as FilterButtons,
  F9 as FilterCheckboxes,
  $9 as FilterControls,
  H9 as FilterDropdown,
  Z9 as FilterMultiSelect,
  Sx as Forms,
  Il as FormsBodyFactory,
  KS as FriendCard,
  QS as GameCard,
  Y9 as GameStatsFilter,
  Ll as HEADER_CONFIGURATIONS,
  I8 as HEADER_GROUPS,
  Al as Header,
  n9 as InfoCard,
  N9 as LegendChart,
  A9 as LegendGrid,
  I9 as LegendHorizontal,
  M9 as LegendMinimal,
  L9 as LegendVertical,
  dk as MEDIA_CONFIGURATIONS,
  q0 as MODAL_CONFIGURATIONS,
  Mn as MODAL_GROUPS,
  R8 as Map,
  i9 as MatchCard,
  D8 as Media,
  bp as MetricsDashboard,
  Z8 as Modal,
  wa as NAVIGATION_CONFIGURATIONS,
  G8 as NAVIGATION_PRESETS,
  Y8 as Navigation,
  J8 as Notification,
  JS as NotificationCard,
  Z4 as PROGRESS_CONFIGURATIONS,
  bp as PerformanceMetrics,
  YS as ProfileCard,
  H4 as Progress,
  e9 as PuzzleCard,
  lS as QUICK_BUTTONS,
  WS as QUICK_CARDS,
  L8 as QUICK_HEADERS,
  K8 as QUICK_NAVIGATION,
  CS as QUICK_WRAPPERS,
  bp as RealtimeAnalytics,
  t9 as RoomCard,
  Bw as Sidebar,
  XS as StatsCard,
  Cs as TABLE_CONFIGURATIONS,
  t7 as Table,
  i7 as TablePresets,
  V9 as TimeRangeSelector,
  O9 as TooltipChart,
  B9 as TooltipCustom,
  D9 as TooltipDetailed,
  R9 as TooltipSimple,
  n7 as Utility,
  En as WRAPPER_CONFIGURATIONS,
  SS as WRAPPER_GROUPS,
  f as Wrapper,
  W9 as ZoomControls,
  uS as addButton,
  rs as analyticsConfigurations,
  hS as backButton,
  Fh as barChart,
  hd as cancelButton,
  mS as closeButton,
  gS as confirmDialogButtons,
  Bh as conversionDashboard,
  Vh as conversionFunnel,
  Wh as conversionHeatmap,
  pS as copyButton,
  MS as createAdSenseProvider,
  OS as createAdsterraProvider,
  $S as createAdvertisementConfig,
  qS as createAnalyticsEvent,
  Rt as createButton,
  ci as createButtonConfig,
  cS as createButtonGroup,
  VS as createCard,
  Di as createCardConfig,
  GS as createCardWithConfig,
  E9 as createChart,
  BS as createCustomAnalyticsProvider,
  RS as createCustomProvider,
  oC as createFilePreview,
  Q9 as createFileUploadConfig,
  E8 as createFormsConfig,
  DS as createGoogleAnalyticsProvider,
  A8 as createHeaderConfig,
  gi as createNavigationConfig,
  ht as createTable,
  Q8 as createTableConfig,
  kS as createWrapperConfig,
  Xh as customReport,
  _S as deleteButton,
  bS as deleteConfirmationButtons,
  dS as editButton,
  Mo as formatFileSize,
  aC as generateFileId,
  Qm as getAdvertisementConfig,
  Op as getChartConfig,
  wS as getDeprecatedWrappers,
  c1 as getEmptyStateConfig,
  tC as getFileExtension,
  Ho as getFileUploadConfig,
  b1 as getFileUploadStyles,
  lk as getMapConfig,
  uk as getMediaConfig,
  iC as getMimeTypeFromExtension,
  H0 as getModalConfiguration,
  Zl as getNavigationConfig,
  V8 as getNavigationsByLayout,
  W8 as getNavigationsByVariant,
  X8 as getProgressConfig,
  Ul as getTableConfig,
  Wl as getUtilityConfig,
  au as getWrapperConfig,
  xS as getWrappersByVariant,
  fS as iconButton,
  FS as isAdvertisementKind,
  F8 as isCommerceModal,
  B8 as isGameModal,
  q8 as isInteractionModal,
  H8 as isLayoutModal,
  U8 as isNavigationKind,
  $8 as isVersusModal,
  vS as isWrapperKind,
  Hh as kpiMetric,
  $h as lineChart,
  M8 as mergeActions,
  Z0 as mergeModalConfiguration,
  U4 as mergeTableConfig,
  Rh as performanceDashboard,
  Jh as performanceReport,
  qh as pieChart,
  Qh as realtimeMetrics,
  ep as realtimeTraffic,
  Yh as revenueCohort,
  Zh as revenueMetric,
  md as saveButton,
  yS as saveFormButtons,
  Dh as userBehaviorDashboard,
  Kh as userCohort,
  Uh as userHeatmap,
  Gh as userJourneyFunnel,
  nC as validateFile,
  eC as validateFileUploadConfig,
  y1 as validateFiles,
  N8 as validateForms,
  e7 as validateTableConfig
};
//# sourceMappingURL=index.es.js.map
