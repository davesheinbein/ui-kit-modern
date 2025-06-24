var qc = Object.defineProperty;
var Yc = (t, i, a) => i in t ? qc(t, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[i] = a;
var Xa = (t, i, a) => Yc(t, typeof i != "symbol" ? i + "" : i, a);
import * as Oi from "react";
import Fe, { forwardRef as Ae, useMemo as ki, useEffect as Re, memo as oi, createElement as $o, useCallback as Je, useRef as ut, useState as At, createContext as ma, useContext as Jc, use as Xc, useImperativeHandle as pa, useId as ha } from "react";
import { createPortal as Qc } from "react-dom";
var ed = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function td(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var kr = { exports: {} }, kn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;
function id() {
  if (Wo) return kn;
  Wo = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function a(o, c, _) {
    var m = null;
    if (_ !== void 0 && (m = "" + _), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      _ = {};
      for (var h in c)
        h !== "key" && (_[h] = c[h]);
    } else _ = c;
    return c = _.ref, {
      $$typeof: t,
      type: o,
      key: m,
      ref: c !== void 0 ? c : null,
      props: _
    };
  }
  return kn.Fragment = i, kn.jsx = a, kn.jsxs = a, kn;
}
var Cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function nd() {
  return Uo || (Uo = 1, process.env.NODE_ENV !== "production" && function() {
    function t(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === G ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case j:
          return "Fragment";
        case O:
          return "Profiler";
        case A:
          return "StrictMode";
        case N:
          return "Suspense";
        case T:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case I:
            return "Portal";
          case W:
            return (x.displayName || "Context") + ".Provider";
          case X:
            return (x._context.displayName || "Context") + ".Consumer";
          case U:
            var Z = x.render;
            return x = x.displayName, x || (x = Z.displayName || Z.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case J:
            return Z = x.displayName || null, Z !== null ? Z : t(x.type) || "Memo";
          case V:
            Z = x._payload, x = x._init;
            try {
              return t(x(Z));
            } catch {
            }
        }
      return null;
    }
    function i(x) {
      return "" + x;
    }
    function a(x) {
      try {
        i(x);
        var Z = !1;
      } catch {
        Z = !0;
      }
      if (Z) {
        Z = console;
        var z = Z.error, H = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return z.call(
          Z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), i(x);
      }
    }
    function o(x) {
      if (x === j) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === V)
        return "<...>";
      try {
        var Z = t(x);
        return Z ? "<" + Z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var x = F.A;
      return x === null ? null : x.getOwner();
    }
    function _() {
      return Error("react-stack-top-frame");
    }
    function m(x) {
      if (Q.call(x, "key")) {
        var Z = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Z && Z.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function h(x, Z) {
      function z() {
        ie || (ie = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Z
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: z,
        configurable: !0
      });
    }
    function f() {
      var x = t(this.type);
      return ne[x] || (ne[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function g(x, Z, z, H, q, ee, Y, me) {
      return z = ee.ref, x = {
        $$typeof: w,
        type: x,
        key: Z,
        props: ee,
        _owner: q
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: f
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
        value: Y
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: me
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function b(x, Z, z, H, q, ee, Y, me) {
      var de = Z.children;
      if (de !== void 0)
        if (H)
          if (le(de)) {
            for (H = 0; H < de.length; H++)
              v(de[H]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(de);
      if (Q.call(Z, "key")) {
        de = t(x);
        var Me = Object.keys(Z).filter(function(ae) {
          return ae !== "key";
        });
        H = 0 < Me.length ? "{key: someKey, " + Me.join(": ..., ") + ": ...}" : "{key: someKey}", te[de + H] || (Me = 0 < Me.length ? "{" + Me.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          de,
          Me,
          de
        ), te[de + H] = !0);
      }
      if (de = null, z !== void 0 && (a(z), de = "" + z), m(Z) && (a(Z.key), de = "" + Z.key), "key" in Z) {
        z = {};
        for (var Ee in Z)
          Ee !== "key" && (z[Ee] = Z[Ee]);
      } else z = Z;
      return de && h(
        z,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), g(
        x,
        de,
        ee,
        q,
        c(),
        z,
        Y,
        me
      );
    }
    function v(x) {
      typeof x == "object" && x !== null && x.$$typeof === w && x._store && (x._store.validated = 1);
    }
    var C = Fe, w = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), W = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), F = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, le = Array.isArray, ge = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(x) {
        return x();
      }
    };
    var ie, ne = {}, ce = C["react-stack-bottom-frame"].bind(
      C,
      _
    )(), E = ge(o(_)), te = {};
    Cn.Fragment = j, Cn.jsx = function(x, Z, z, H, q) {
      var ee = 1e4 > F.recentlyCreatedOwnerStacks++;
      return b(
        x,
        Z,
        z,
        !1,
        H,
        q,
        ee ? Error("react-stack-top-frame") : ce,
        ee ? ge(o(x)) : E
      );
    }, Cn.jsxs = function(x, Z, z, H, q) {
      var ee = 1e4 > F.recentlyCreatedOwnerStacks++;
      return b(
        x,
        Z,
        z,
        !0,
        H,
        q,
        ee ? Error("react-stack-top-frame") : ce,
        ee ? ge(o(x)) : E
      );
    };
  }()), Cn;
}
process.env.NODE_ENV === "production" ? kr.exports = id() : kr.exports = nd();
var s = kr.exports;
const ad = "_adminComponent_1nez3_10", rd = "_sessionDebugger_1nez3_65", od = "_debugRow_1nez3_65", sd = "_performanceMonitor_1nez3_87", ld = "_metricRow_1nez3_87", cd = "_metricLabel_1nez3_97", dd = "_metricValue_1nez3_106", _d = "_errorLogger_1nez3_120", ud = "_errorEntry_1nez3_124", md = "_errorTime_1nez3_134", pd = "_errorMessage_1nez3_140", hd = "_debugPanel_1nez3_150", fd = "_panelHeader_1nez3_150", gd = "_panelSection_1nez3_163", yd = "_sectionTitle_1nez3_173", bd = "_darkTheme_1nez3_230", vd = "_lightTheme_1nez3_253", xd = "_animated_1nez3_292", wd = "_fadeInAdmin_1nez3_1", kd = "_pulse_1nez3_306", Cd = "_pulseAdmin_1nez3_1", Sd = "_compact_1nez3_321", zd = "_expanded_1nez3_328", jd = "_translucent_1nez3_335", Nd = "_opaque_1nez3_340", Td = "_adminZ9999_1nez3_348", Pd = "_adminZ9998_1nez3_352", Ed = "_adminZ9997_1nez3_356", Id = "_adminZ9996_1nez3_360", Ld = "_adminZ9995_1nez3_364", Ri = {
  adminComponent: ad,
  "admin-top-left": "_admin-top-left_1nez3_34",
  "admin-top-right": "_admin-top-right_1nez3_39",
  "admin-bottom-left": "_admin-bottom-left_1nez3_44",
  "admin-bottom-right": "_admin-bottom-right_1nez3_49",
  "admin-center": "_admin-center_1nez3_54",
  sessionDebugger: rd,
  debugRow: od,
  performanceMonitor: sd,
  metricRow: ld,
  metricLabel: cd,
  metricValue: dd,
  errorLogger: _d,
  errorEntry: ud,
  errorTime: md,
  errorMessage: pd,
  debugPanel: hd,
  panelHeader: fd,
  panelSection: gd,
  sectionTitle: yd,
  darkTheme: bd,
  lightTheme: vd,
  animated: xd,
  fadeInAdmin: wd,
  pulse: kd,
  pulseAdmin: Cd,
  compact: Sd,
  expanded: zd,
  translucent: jd,
  opaque: Nd,
  adminZ9999: Td,
  adminZ9998: Pd,
  adminZ9997: Ed,
  adminZ9996: Id,
  adminZ9995: Ld
}, Ad = "_container_kd8mr_131", Md = "_flex_kd8mr_262", Od = "_grid_kd8mr_358", Rd = "_relative_kd8mr_740", Bd = "_absolute_kd8mr_744", Fd = "_fixed_kd8mr_748", Dd = "_sticky_kd8mr_752", $d = "_truncate_kd8mr_891", Wd = "_border_kd8mr_951", Ud = "_rounded_kd8mr_991", Zd = "_shadow_kd8mr_1023", Hd = "_transition_kd8mr_1095", Vd = "_small_kd8mr_1595", Gd = "_large_kd8mr_1599", Kd = "_card_kd8mr_1647", qd = "_baseButton_kd8mr_1772", Yd = "_fullWidth_kd8mr_2060", Jd = "_loading_kd8mr_2065", Xd = "_content_kd8mr_2065", Qd = "_leftIcon_kd8mr_2069", e_ = "_rightIcon_kd8mr_2077", t_ = "_spinner_kd8mr_2096", i_ = "_spin_kd8mr_2096", n_ = "_modalCloseAbsolute_kd8mr_2110", a_ = "_iconBtn_kd8mr_2196", r_ = "_selected_kd8mr_2303", o_ = "_active_kd8mr_2308", s_ = "_locked_kd8mr_2313", l_ = "_burnSuspect_kd8mr_2318", c_ = "_burned_kd8mr_2323", d_ = "_goBackIcon_kd8mr_2490", __ = "_goBackLabel_kd8mr_2495", u_ = "_primaryBtn_kd8mr_2572", m_ = "_secondaryBtn_kd8mr_2614", p_ = "_linkButton_kd8mr_2766", h_ = "_closeButton_kd8mr_2793", f_ = "_wordButton_kd8mr_2800", st = {
  container: Ad,
  "container-sm": "_container-sm_kd8mr_147",
  "container-md": "_container-md_kd8mr_163",
  "container-lg": "_container-lg_kd8mr_179",
  "container-xl": "_container-xl_kd8mr_195",
  "container-2xl": "_container-2xl_kd8mr_211",
  "safe-area": "_safe-area_kd8mr_227",
  "overflow-hidden": "_overflow-hidden_kd8mr_233",
  "overflow-auto": "_overflow-auto_kd8mr_237",
  "overflow-x-auto": "_overflow-x-auto_kd8mr_242",
  "overflow-y-auto": "_overflow-y-auto_kd8mr_248",
  "box-border": "_box-border_kd8mr_254",
  "box-content": "_box-content_kd8mr_258",
  flex: Md,
  "flex-col": "_flex-col_kd8mr_266",
  "flex-row": "_flex-row_kd8mr_271",
  "flex-wrap": "_flex-wrap_kd8mr_276",
  "flex-nowrap": "_flex-nowrap_kd8mr_281",
  "flex-center": "_flex-center_kd8mr_286",
  "flex-between": "_flex-between_kd8mr_292",
  "justify-start": "_justify-start_kd8mr_298",
  "justify-center": "_justify-center_kd8mr_302",
  "justify-end": "_justify-end_kd8mr_306",
  "justify-between": "_justify-between_kd8mr_310",
  "justify-around": "_justify-around_kd8mr_314",
  "items-start": "_items-start_kd8mr_318",
  "items-center": "_items-center_kd8mr_322",
  "items-end": "_items-end_kd8mr_326",
  "items-stretch": "_items-stretch_kd8mr_330",
  "flex-1": "_flex-1_kd8mr_334",
  "flex-auto": "_flex-auto_kd8mr_338",
  "flex-none": "_flex-none_kd8mr_342",
  "flex-grow": "_flex-grow_kd8mr_346",
  "flex-shrink": "_flex-shrink_kd8mr_350",
  "flex-shrink-0": "_flex-shrink-0_kd8mr_354",
  grid: Od,
  "grid-auto-fit": "_grid-auto-fit_kd8mr_362",
  "grid-auto-fill": "_grid-auto-fill_kd8mr_369",
  "grid-cols-1": "_grid-cols-1_kd8mr_376",
  "grid-cols-2": "_grid-cols-2_kd8mr_380",
  "grid-cols-3": "_grid-cols-3_kd8mr_384",
  "grid-cols-4": "_grid-cols-4_kd8mr_388",
  "grid-cols-6": "_grid-cols-6_kd8mr_392",
  "grid-cols-12": "_grid-cols-12_kd8mr_396",
  "gap-0": "_gap-0_kd8mr_400",
  "gap-1": "_gap-1_kd8mr_404",
  "gap-2": "_gap-2_kd8mr_408",
  "gap-3": "_gap-3_kd8mr_412",
  "gap-4": "_gap-4_kd8mr_416",
  "gap-5": "_gap-5_kd8mr_420",
  "gap-6": "_gap-6_kd8mr_424",
  "gap-8": "_gap-8_kd8mr_428",
  "gap-10": "_gap-10_kd8mr_432",
  "gap-12": "_gap-12_kd8mr_436",
  "p-0": "_p-0_kd8mr_440",
  "p-1": "_p-1_kd8mr_444",
  "p-2": "_p-2_kd8mr_448",
  "p-3": "_p-3_kd8mr_452",
  "p-4": "_p-4_kd8mr_456",
  "p-5": "_p-5_kd8mr_460",
  "p-6": "_p-6_kd8mr_464",
  "p-8": "_p-8_kd8mr_468",
  "p-10": "_p-10_kd8mr_472",
  "p-12": "_p-12_kd8mr_476",
  "px-0": "_px-0_kd8mr_480",
  "px-1": "_px-1_kd8mr_485",
  "px-2": "_px-2_kd8mr_490",
  "px-3": "_px-3_kd8mr_495",
  "px-4": "_px-4_kd8mr_500",
  "px-6": "_px-6_kd8mr_505",
  "py-0": "_py-0_kd8mr_510",
  "py-1": "_py-1_kd8mr_515",
  "py-2": "_py-2_kd8mr_520",
  "py-3": "_py-3_kd8mr_525",
  "py-4": "_py-4_kd8mr_530",
  "py-6": "_py-6_kd8mr_535",
  "m-0": "_m-0_kd8mr_540",
  "m-1": "_m-1_kd8mr_544",
  "m-2": "_m-2_kd8mr_548",
  "m-3": "_m-3_kd8mr_552",
  "m-4": "_m-4_kd8mr_556",
  "m-auto": "_m-auto_kd8mr_560",
  "mx-auto": "_mx-auto_kd8mr_564",
  "my-auto": "_my-auto_kd8mr_569",
  "mx-0": "_mx-0_kd8mr_574",
  "mx-1": "_mx-1_kd8mr_579",
  "mx-2": "_mx-2_kd8mr_584",
  "mx-3": "_mx-3_kd8mr_589",
  "mx-4": "_mx-4_kd8mr_594",
  "my-0": "_my-0_kd8mr_599",
  "my-1": "_my-1_kd8mr_604",
  "my-2": "_my-2_kd8mr_609",
  "my-3": "_my-3_kd8mr_614",
  "my-4": "_my-4_kd8mr_619",
  "w-full": "_w-full_kd8mr_624",
  "w-auto": "_w-auto_kd8mr_628",
  "w-fit": "_w-fit_kd8mr_632",
  "w-min": "_w-min_kd8mr_636",
  "w-max": "_w-max_kd8mr_640",
  "max-w-none": "_max-w-none_kd8mr_644",
  "max-w-xs": "_max-w-xs_kd8mr_648",
  "max-w-sm": "_max-w-sm_kd8mr_652",
  "max-w-md": "_max-w-md_kd8mr_656",
  "max-w-lg": "_max-w-lg_kd8mr_660",
  "max-w-xl": "_max-w-xl_kd8mr_664",
  "max-w-2xl": "_max-w-2xl_kd8mr_668",
  "max-w-3xl": "_max-w-3xl_kd8mr_672",
  "max-w-4xl": "_max-w-4xl_kd8mr_676",
  "max-w-5xl": "_max-w-5xl_kd8mr_680",
  "max-w-6xl": "_max-w-6xl_kd8mr_684",
  "max-w-7xl": "_max-w-7xl_kd8mr_688",
  "max-w-full": "_max-w-full_kd8mr_692",
  "min-w-0": "_min-w-0_kd8mr_696",
  "min-w-full": "_min-w-full_kd8mr_700",
  "h-auto": "_h-auto_kd8mr_704",
  "h-fit": "_h-fit_kd8mr_708",
  "h-full": "_h-full_kd8mr_712",
  "h-screen": "_h-screen_kd8mr_716",
  "max-h-full": "_max-h-full_kd8mr_720",
  "max-h-screen": "_max-h-screen_kd8mr_724",
  "min-h-0": "_min-h-0_kd8mr_728",
  "min-h-full": "_min-h-full_kd8mr_732",
  "min-h-screen": "_min-h-screen_kd8mr_736",
  relative: Rd,
  absolute: Bd,
  fixed: Fd,
  sticky: Dd,
  static: "_static_kd8mr_756",
  "inset-0": "_inset-0_kd8mr_760",
  "top-0": "_top-0_kd8mr_767",
  "right-0": "_right-0_kd8mr_771",
  "bottom-0": "_bottom-0_kd8mr_775",
  "left-0": "_left-0_kd8mr_779",
  "text-left": "_text-left_kd8mr_783",
  "text-center": "_text-center_kd8mr_787",
  "text-right": "_text-right_kd8mr_791",
  "text-justify": "_text-justify_kd8mr_795",
  "text-xs": "_text-xs_kd8mr_799",
  "text-sm": "_text-sm_kd8mr_803",
  "text-base": "_text-base_kd8mr_807",
  "text-lg": "_text-lg_kd8mr_811",
  "text-xl": "_text-xl_kd8mr_815",
  "text-2xl": "_text-2xl_kd8mr_819",
  "text-3xl": "_text-3xl_kd8mr_823",
  "text-4xl": "_text-4xl_kd8mr_827",
  "font-normal": "_font-normal_kd8mr_831",
  "font-medium": "_font-medium_kd8mr_835",
  "font-semibold": "_font-semibold_kd8mr_839",
  "font-bold": "_font-bold_kd8mr_843",
  "leading-tight": "_leading-tight_kd8mr_847",
  "leading-normal": "_leading-normal_kd8mr_851",
  "leading-relaxed": "_leading-relaxed_kd8mr_855",
  "text-primary": "_text-primary_kd8mr_859",
  "text-secondary": "_text-secondary_kd8mr_863",
  "text-muted": "_text-muted_kd8mr_867",
  "text-inverse": "_text-inverse_kd8mr_871",
  "text-blue": "_text-blue_kd8mr_875",
  "text-red": "_text-red_kd8mr_879",
  "text-green": "_text-green_kd8mr_883",
  "text-yellow": "_text-yellow_kd8mr_887",
  truncate: $d,
  "text-ellipsis": "_text-ellipsis_kd8mr_898",
  "text-clip": "_text-clip_kd8mr_905",
  "bg-transparent": "_bg-transparent_kd8mr_911",
  "bg-white": "_bg-white_kd8mr_915",
  "bg-gray-50": "_bg-gray-50_kd8mr_919",
  "bg-gray-100": "_bg-gray-100_kd8mr_923",
  "bg-gray-200": "_bg-gray-200_kd8mr_927",
  "bg-primary": "_bg-primary_kd8mr_931",
  "bg-secondary": "_bg-secondary_kd8mr_935",
  "bg-success": "_bg-success_kd8mr_939",
  "bg-danger": "_bg-danger_kd8mr_943",
  "bg-warning": "_bg-warning_kd8mr_947",
  border: Wd,
  "border-0": "_border-0_kd8mr_955",
  "border-t": "_border-t_kd8mr_959",
  "border-r": "_border-r_kd8mr_963",
  "border-b": "_border-b_kd8mr_967",
  "border-l": "_border-l_kd8mr_971",
  "border-gray-200": "_border-gray-200_kd8mr_975",
  "border-gray-300": "_border-gray-300_kd8mr_979",
  "border-primary": "_border-primary_kd8mr_983",
  "border-danger": "_border-danger_kd8mr_987",
  "rounded-none": "_rounded-none_kd8mr_991",
  "rounded-sm": "_rounded-sm_kd8mr_995",
  rounded: Ud,
  "rounded-md": "_rounded-md_kd8mr_1003",
  "rounded-lg": "_rounded-lg_kd8mr_1007",
  "rounded-xl": "_rounded-xl_kd8mr_1011",
  "rounded-2xl": "_rounded-2xl_kd8mr_1015",
  "rounded-full": "_rounded-full_kd8mr_1019",
  "shadow-none": "_shadow-none_kd8mr_1023",
  "shadow-sm": "_shadow-sm_kd8mr_1027",
  shadow: Zd,
  "shadow-md": "_shadow-md_kd8mr_1035",
  "shadow-lg": "_shadow-lg_kd8mr_1039",
  "shadow-xl": "_shadow-xl_kd8mr_1043",
  "z-0": "_z-0_kd8mr_1047",
  "z-10": "_z-10_kd8mr_1051",
  "z-20": "_z-20_kd8mr_1055",
  "z-30": "_z-30_kd8mr_1059",
  "z-40": "_z-40_kd8mr_1063",
  "z-50": "_z-50_kd8mr_1067",
  "z-auto": "_z-auto_kd8mr_1071",
  "z-dropdown": "_z-dropdown_kd8mr_1075",
  "z-sticky": "_z-sticky_kd8mr_1079",
  "z-fixed": "_z-fixed_kd8mr_1083",
  "z-modal": "_z-modal_kd8mr_1087",
  "z-tooltip": "_z-tooltip_kd8mr_1091",
  "transition-none": "_transition-none_kd8mr_1095",
  "transition-all": "_transition-all_kd8mr_1099",
  "transition-fast": "_transition-fast_kd8mr_1103",
  "transition-slow": "_transition-slow_kd8mr_1107",
  "sr-only": "_sr-only_kd8mr_1111",
  "focus-ring": "_focus-ring_kd8mr_1123",
  "cursor-default": "_cursor-default_kd8mr_1129",
  "cursor-pointer": "_cursor-pointer_kd8mr_1133",
  "cursor-not-allowed": "_cursor-not-allowed_kd8mr_1137",
  "select-none": "_select-none_kd8mr_1141",
  "select-text": "_select-text_kd8mr_1145",
  "select-all": "_select-all_kd8mr_1149",
  "select-auto": "_select-auto_kd8mr_1153",
  "pointer-events-none": "_pointer-events-none_kd8mr_1157",
  "pointer-events-auto": "_pointer-events-auto_kd8mr_1161",
  "gap-sm": "_gap-sm_kd8mr_1165",
  "gap-md": "_gap-md_kd8mr_1169",
  "gap-lg": "_gap-lg_kd8mr_1173",
  "gap-xl": "_gap-xl_kd8mr_1177",
  "p-sm": "_p-sm_kd8mr_1181",
  "p-md": "_p-md_kd8mr_1185",
  "p-lg": "_p-lg_kd8mr_1189",
  "p-xl": "_p-xl_kd8mr_1193",
  "m-sm": "_m-sm_kd8mr_1197",
  "m-md": "_m-md_kd8mr_1201",
  "m-lg": "_m-lg_kd8mr_1205",
  "m-xl": "_m-xl_kd8mr_1209",
  "text-gray": "_text-gray_kd8mr_1213",
  "mobile:hidden": "_mobile:hidden_kd8mr_1218",
  "mobile:block": "_mobile:block_kd8mr_1221",
  "mobile:flex": "_mobile:flex_kd8mr_1224",
  "mobile:grid": "_mobile:grid_kd8mr_1227",
  "mobile:text-sm": "_mobile:text-sm_kd8mr_1230",
  "mobile:text-xs": "_mobile:text-xs_kd8mr_1233",
  "mobile:p-2": "_mobile:p-2_kd8mr_1236",
  "mobile:px-2": "_mobile:px-2_kd8mr_1239",
  "tablet:block": "_tablet:block_kd8mr_1245",
  "tablet:flex": "_tablet:flex_kd8mr_1248",
  "tablet:grid": "_tablet:grid_kd8mr_1251",
  "tablet:hidden": "_tablet:hidden_kd8mr_1254",
  "desktop:block": "_desktop:block_kd8mr_1259",
  "desktop:flex": "_desktop:flex_kd8mr_1262",
  "desktop:grid": "_desktop:grid_kd8mr_1265",
  "desktop:hidden": "_desktop:hidden_kd8mr_1268",
  "bg-gray": "_bg-gray_kd8mr_919",
  "border-secondary": "_border-secondary_kd8mr_1292",
  "border-gray": "_border-gray_kd8mr_975",
  "shadow-glow": "_shadow-glow_kd8mr_1328",
  "w-8": "_w-8_kd8mr_1376",
  "w-10": "_w-10_kd8mr_1380",
  "w-12": "_w-12_kd8mr_1384",
  "w-16": "_w-16_kd8mr_1388",
  "h-8": "_h-8_kd8mr_1392",
  "h-10": "_h-10_kd8mr_1396",
  "h-12": "_h-12_kd8mr_1400",
  "h-16": "_h-16_kd8mr_1404",
  "user-select-none": "_user-select-none_kd8mr_1420",
  transition: Hd,
  "transition-colors": "_transition-colors_kd8mr_1428",
  "transition-transform": "_transition-transform_kd8mr_1432",
  "hover-scale": "_hover-scale_kd8mr_1436",
  "fade-in": "_fade-in_kd8mr_1443",
  "status-online": "_status-online_kd8mr_1455",
  "status-offline": "_status-offline_kd8mr_1465",
  "status-away": "_status-away_kd8mr_1475",
  "status-busy": "_status-busy_kd8mr_1485",
  "modal-overlay": "_modal-overlay_kd8mr_1495",
  "modal-content": "_modal-content_kd8mr_1509",
  "close-button-absolute": "_close-button-absolute_kd8mr_1523",
  small: Vd,
  large: Gd,
  "primary-button": "_primary-button_kd8mr_1604",
  "secondary-button": "_secondary-button_kd8mr_1608",
  card: Kd,
  "input-base": "_input-base_kd8mr_1661",
  "chat-window": "_chat-window_kd8mr_1693",
  "chat-message": "_chat-message_kd8mr_1704",
  "z-overlay": "_z-overlay_kd8mr_1729",
  "mobile-hidden": "_mobile-hidden_kd8mr_1734",
  "mobile-flex-col": "_mobile-flex-col_kd8mr_1737",
  "mobile-text-center": "_mobile-text-center_kd8mr_1740",
  "mobile-p-sm": "_mobile-p-sm_kd8mr_1743",
  "mobile-gap-sm": "_mobile-gap-sm_kd8mr_1746",
  "desktop-hidden": "_desktop-hidden_kd8mr_1751",
  "print-hidden": "_print-hidden_kd8mr_1756",
  baseButton: qd,
  "button-primary": "_button-primary_kd8mr_1822",
  "button-secondary": "_button-secondary_kd8mr_1861",
  "button-danger": "_button-danger_kd8mr_1900",
  "button-success": "_button-success_kd8mr_1936",
  "button-warning": "_button-warning_kd8mr_1952",
  "button-ghost": "_button-ghost_kd8mr_1968",
  "button-link": "_button-link_kd8mr_2004",
  "button-small": "_button-small_kd8mr_2042",
  "button-medium": "_button-medium_kd8mr_2048",
  "button-large": "_button-large_kd8mr_2054",
  fullWidth: Yd,
  loading: Jd,
  content: Xd,
  leftIcon: Qd,
  rightIcon: e_,
  spinner: t_,
  spin: i_,
  "close-button": "_close-button_kd8mr_1523",
  modalCloseAbsolute: n_,
  iconBtn: a_,
  "word-button": "_word-button_kd8mr_2263",
  selected: r_,
  active: o_,
  locked: s_,
  burnSuspect: l_,
  burned: c_,
  "copy-link": "_copy-link_kd8mr_2329",
  "share-link--copy": "_share-link--copy_kd8mr_2404",
  "share-link-icon": "_share-link-icon_kd8mr_2410",
  "share-link-text": "_share-link-text_kd8mr_2416",
  "go-back": "_go-back_kd8mr_2424",
  goBackIcon: d_,
  goBackLabel: __,
  "friends-toggle": "_friends-toggle_kd8mr_2503",
  "friends-toggle-icon": "_friends-toggle-icon_kd8mr_2560",
  primaryBtn: u_,
  secondaryBtn: m_,
  "nav-back": "_nav-back_kd8mr_2656",
  linkButton: p_,
  closeButton: h_,
  wordButton: f_,
  "loading-shimmer": "_loading-shimmer_kd8mr_1"
}, hs = {
  // Basic variants
  primary: {
    variant: "primary",
    size: "medium",
    behavior: "button",
    className: st.primaryBtn
  },
  secondary: {
    variant: "secondary",
    size: "medium",
    behavior: "button",
    className: st.secondaryBtn
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
    className: st.iconBtn
  },
  close: {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "left",
    defaultText: "Close",
    behavior: "close",
    ariaLabel: "Close",
    className: st["close-button"]
  },
  "close-icon-only": {
    variant: "danger",
    size: "small",
    icon: "✕",
    iconPosition: "only",
    behavior: "close",
    ariaLabel: "Close",
    className: st["close-button"]
  },
  word: {
    variant: "secondary",
    size: "medium",
    behavior: "toggle",
    className: st["word-button"]
  },
  "copy-link": {
    variant: "ghost",
    size: "medium",
    icon: "📋",
    iconPosition: "left",
    defaultText: "Copy Link",
    behavior: "copy",
    ariaLabel: "Copy link",
    className: st["copy-link"]
  },
  "go-back": {
    variant: "ghost",
    size: "medium",
    icon: "←",
    iconPosition: "left",
    defaultText: "Back",
    behavior: "button",
    ariaLabel: "Go back",
    className: st["go-back"]
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
    className: st["nav-back"]
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
}, mi = (t, i) => ({
  ...hs[t],
  ...i
}), F2 = {
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
}, D2 = {
  saveButton: () => mi("primary", { defaultText: "Save" }),
  cancelButton: () => mi("secondary", {
    defaultText: "Cancel"
  }),
  deleteButton: () => mi("danger", { defaultText: "Delete" }),
  editButton: () => mi("ghost", {
    icon: "✏️",
    defaultText: "Edit"
  }),
  addButton: () => mi("success", {
    icon: "+",
    defaultText: "Add"
  }),
  shareButton: () => mi("ghost", {
    icon: "🔗",
    defaultText: "Share"
  }),
  settingsButton: () => mi("ghost", {
    icon: "⚙️",
    ariaLabel: "Settings"
  }),
  helpButton: () => mi("ghost", {
    icon: "?",
    ariaLabel: "Help"
  }),
  refreshButton: () => mi("ghost", {
    icon: "🔄",
    ariaLabel: "Refresh"
  }),
  downloadButton: () => mi("primary", {
    icon: "⬇️",
    defaultText: "Download"
  })
}, ke = Ae(
  ({
    kind: t = "primary",
    icon: i,
    word: a,
    text: o,
    children: c,
    href: _,
    copyText: m,
    isSelected: h = !1,
    isActive: f = !1,
    isLocked: g = !1,
    burnSuspect: b = !1,
    isBurned: v = !1,
    imageUrl: C,
    userName: w,
    isAuthenticated: I = !1,
    label: j,
    size: A,
    loading: O = !1,
    fullWidth: X = !1,
    className: W = "",
    onClick: U,
    ...N
  }, T) => {
    const J = hs[t], V = i || J.icon, B = o || a || c || J.defaultText;
    let G = null;
    t === "friends-toggle" && (I && C ? G = /* @__PURE__ */ s.jsx(
      "img",
      {
        src: C,
        alt: w || "Profile",
        style: {
          width: 36,
          height: 36,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #38bdf8"
        }
      }
    ) : G = /* @__PURE__ */ s.jsx("span", { className: "friends-toggle-icon", children: /* @__PURE__ */ s.jsxs(
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
          /* @__PURE__ */ s.jsx("circle", { cx: "9", cy: "7", r: "4" }),
          /* @__PURE__ */ s.jsx("path", { d: "M17 11v-1a4 4 0 0 0-4-4" }),
          /* @__PURE__ */ s.jsx("path", { d: "M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" })
        ]
      }
    ) }));
    const F = j || J.ariaLabel || (typeof B == "string" ? B : "Button"), Q = [
      st.baseButton,
      // Base button styles
      st[`button-${J.variant}`],
      // Variant styles
      st[`button-${A || J.size || "medium"}`],
      // Size styles
      W,
      J.className,
      h && st.selected,
      f && st.active,
      g && st.locked,
      b && st.burnSuspect,
      v && st.burned,
      O && st.loading,
      X && st.fullWidth
    ].filter(Boolean).join(" "), le = (ge) => {
      switch (J.behavior) {
        case "copy":
          m && navigator.clipboard.writeText(m).catch(console.error);
          break;
        case "close":
          break;
        case "toggle":
          break;
        case "link":
          if (_) {
            window.location.href = _;
            return;
          }
          break;
      }
      J.clickHandler && J.clickHandler(ge), U == null || U(ge);
    };
    return J.behavior === "link" && _ ? /* @__PURE__ */ s.jsxs(
      "a",
      {
        href: _,
        className: `${st.linkButton} ${Q}`.trim(),
        ref: T,
        "aria-label": F,
        ...N,
        children: [
          V && J.iconPosition !== "right" && /* @__PURE__ */ s.jsx("span", { className: st.leftIcon, children: V }),
          J.iconPosition !== "only" && B && /* @__PURE__ */ s.jsx("span", { children: B }),
          V && J.iconPosition === "right" && /* @__PURE__ */ s.jsx("span", { className: st.rightIcon, children: V })
        ]
      }
    ) : J.iconPosition === "only" ? /* @__PURE__ */ s.jsx(
      "button",
      {
        ref: T,
        className: Q,
        onClick: le,
        "aria-label": F,
        disabled: g || O,
        ...N,
        children: t === "friends-toggle" ? G : V
      }
    ) : /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: T,
        className: Q,
        onClick: le,
        "aria-label": F,
        disabled: g || O,
        ...N,
        children: [
          J.iconPosition === "left" && V && /* @__PURE__ */ s.jsx("span", { className: st.leftIcon, children: V }),
          B && /* @__PURE__ */ s.jsx("span", { children: B }),
          J.iconPosition === "right" && V && /* @__PURE__ */ s.jsx("span", { className: st.rightIcon, children: V })
        ]
      }
    );
  }
);
ke.displayName = "Button";
function Ut(t, i = {}) {
  return Fe.createElement(ke, {
    kind: t,
    ...i
  });
}
function $2(t, i = {}) {
  return Object.fromEntries(
    Object.entries(t).map(
      ([a, { kind: o, props: c = {} }]) => [
        a,
        Ut(o, { ...i, ...c })
      ]
    )
  );
}
const g_ = (t, i = "Save") => Ut("primary", { onClick: t, text: i }), y_ = (t, i = "Cancel") => Ut("secondary", { onClick: t, text: i }), W2 = (t, i = "Delete") => Ut("danger", { onClick: t, text: i }), U2 = (t, i = "Edit") => Ut("ghost", { onClick: t, text: i, icon: "✏️" }), Z2 = (t, i = "Add") => Ut("success", { onClick: t, text: i, icon: "+" }), H2 = (t) => Ut("close", { onClick: t }), V2 = (t, i = "Back") => Ut("go-back", { onClick: t, text: i }), G2 = (t, i = "Copy") => Ut("copy-link", { copyText: t, text: i }), K2 = (t, i, a) => Ut("icon", { icon: t, onClick: i, label: a }), q2 = (t, i) => ({
  confirm: Ut("danger", {
    onClick: t,
    text: "Confirm"
  }),
  cancel: Ut("secondary", {
    onClick: i,
    text: "Cancel"
  })
}), Y2 = (t, i, a) => ({
  delete: Ut("danger", {
    onClick: t,
    text: a ? `Delete ${a}` : "Delete"
  }),
  cancel: Ut("secondary", {
    onClick: i,
    text: "Cancel"
  })
}), J2 = (t, i) => ({
  save: g_(t),
  cancel: y_(i)
}), b_ = {
  kind: "component",
  variant: "component-wrapper",
  layout: "passthrough",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic component wrapper",
  migrationPath: "Use the specific  component or factory method"
}, v_ = {
  kind: "provider",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "Provider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic provider wrapper",
  migrationPath: "Use the specific  provider or factory method"
}, x_ = {
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
}, w_ = {
  kind: "flex-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "FlexContainer",
  Component: "FlexContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Flexbox container wrapper with positioning control",
  migrationPath: "Use CSS flexbox directly or Wrapper with flex kind"
}, k_ = {
  kind: "grid-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "GridContainer",
  Component: "GridContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "CSS Grid container wrapper with positioning control",
  migrationPath: "Use CSS grid directly or Wrapper with grid kind"
}, C_ = {
  kind: "center-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "CenterContainer",
  Component: "CenterContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Container that centers content both horizontally and vertically",
  migrationPath: "Use CSS centering techniques or Wrapper with center kind"
}, S_ = {
  kind: "stack-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "StackContainer",
  Component: "StackContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Vertical stack container with gap control",
  migrationPath: "Use CSS flexbox column or Wrapper with stack kind"
}, z_ = {
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
}, j_ = {
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
}, N_ = {
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
}, T_ = {
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
}, P_ = {
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
}, E_ = {
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
}, I_ = {
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
}, L_ = {
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
}, A_ = {
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
}, M_ = {
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
}, O_ = {
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
}, R_ = {
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
}, B_ = {
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
}, F_ = {
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
}, D_ = {
  kind: "socket-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "SocketProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for SocketProvider",
  migrationPath: 'Use Provider with kind="socket-provider"'
}, $_ = {
  kind: "user-settings-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "UserSettingsProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for UserSettingsProvider",
  migrationPath: 'Use Provider with kind="user-settings-provider"'
}, W_ = {
  kind: "theme-palette-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "ThemePaletteProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for ThemePaletteProvider",
  migrationPath: 'Use Provider with kind="theme-palette-provider"'
}, U_ = {
  kind: "achievement-socket-listener-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "AchievementSocketListener",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for AchievementSocketListener",
  migrationPath: 'Use Provider with kind="achievement-socket-listener"'
}, Z_ = {
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
}, H_ = {
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
}, V_ = {
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
}, G_ = {
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
}, K_ = {
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
}, q_ = {
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
}, Y_ = {
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
}, J_ = {
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
}, X_ = {
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
}, Q_ = {
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
}, eu = {
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
}, tu = {
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
}, iu = {
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
}, nu = {
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
}, au = {
  kind: "backward-compatibility-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic backward compatibility wrapper",
  migrationPath: "Migrate to the corresponding  component"
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
  migrationPath: "Use the corresponding  component or factory"
}, ou = {
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
}, su = {
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
}, In = {
  // Generic Wrappers
  component: b_,
  provider: v_,
  legacy: x_,
  // Layout Wrappers
  "flex-container": w_,
  "grid-container": k_,
  "center-container": C_,
  "stack-container": S_,
  // Component Wrappers
  "button-wrapper": z_,
  "header-wrapper": j_,
  "modal-wrapper": N_,
  "grid-wrapper": T_,
  "page-wrapper": P_,
  "graph-wrapper": E_,
  "sidebar-wrapper": I_,
  "settings-wrapper": L_,
  "theme-wrapper": A_,
  "admin-wrapper": M_,
  "card-wrapper": O_,
  "banner-wrapper": R_,
  "chat-wrapper": B_,
  "form-wrapper": F_,
  // Provider Wrappers
  "socket-provider-wrapper": D_,
  "user-settings-provider-wrapper": $_,
  "theme-palette-provider-wrapper": W_,
  "achievement-socket-listener-wrapper": U_,
  // Legacy Component Wrappers
  "primary-button-wrapper": Z_,
  "secondary-button-wrapper": H_,
  "close-button-wrapper": V_,
  "icon-button-wrapper": G_,
  "browse-header-wrapper": K_,
  "modal-header-wrapper": q_,
  "vs-grid-wrapper": Y_,
  "startup-page-wrapper": J_,
  "customization-category-wrapper": X_,
  "settings-panel-wrapper": Q_,
  "theme-selector-wrapper": eu,
  "friends-sidebar-wrapper": tu,
  "session-debugger-wrapper": iu,
  "dark-mode-toggle-wrapper": nu,
  // Generic Wrappers
  "backward-compatibility-wrapper": au,
  "legacy-wrapper": ru,
  "simple-wrapper": ou,
  "enhanced-wrapper": su
};
function lu(t) {
  return In[t];
}
function X2(t) {
  return t in In;
}
function Q2(t) {
  return Object.values(In).filter(
    (i) => i.variant === t
  );
}
function eC() {
  return Object.values(In).filter(
    (t) => t.deprecationWarning
  );
}
function tC(t, i = {}) {
  const a = In[t];
  return {
    ...a,
    ...i,
    // Merge className if both exist
    className: i.className ? `${a.className || ""} ${i.className}`.trim() : a.className
  };
}
const iC = {
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
}, nC = {
  BUTTON: "button-wrapper",
  HEADER: "header-wrapper",
  MODAL: "modal-wrapper",
  GRID: "grid-wrapper",
  PAGE: "page-wrapper",
  SIDEBAR: "sidebar-wrapper",
  SETTINGS: "settings-wrapper",
  LEGACY: "legacy-wrapper",
  COMPATIBILITY: "backward-compatibility-wrapper"
}, cu = "_Wrapper_g2zt1_132", du = "_migrationHelper_g2zt1_180", _u = "_migrationButton_g2zt1_306", Sn = {
  Wrapper: cu,
  "wrapper--elevated": "_wrapper--elevated_g2zt1_175",
  "wrapper--backward-compatibility": "_wrapper--backward-compatibility_g2zt1_180",
  migrationHelper: du,
  "wrapper--simplified-interface": "_wrapper--simplified-interface_g2zt1_187",
  "wrapper--enhanced-functionality": "_wrapper--enhanced-functionality_g2zt1_191",
  "wrapper--legacy-support": "_wrapper--legacy-support_g2zt1_203",
  "wrapper--provider-wrapper": "_wrapper--provider-wrapper_g2zt1_223",
  "wrapper--component-wrapper": "_wrapper--component-wrapper_g2zt1_228",
  "wrapper--layout-container": "_wrapper--layout-container_g2zt1_240",
  "wrapper--passthrough": "_wrapper--passthrough_g2zt1_271",
  "wrapper--enhanced": "_wrapper--enhanced_g2zt1_191",
  "wrapper--simplified": "_wrapper--simplified_g2zt1_187",
  "wrapper--decorated": "_wrapper--decorated_g2zt1_283",
  migrationButton: _u,
  "legacy-warning": "_legacy-warning_g2zt1_1",
  "loading-shimmer": "_loading-shimmer_g2zt1_1"
};
function uu(t, i, a, o) {
  const c = t.variant === "layout-container", _ = t.Component === "Button", m = t.Component === "Form", h = mu(
    t,
    i,
    c
  ), f = c ? {
    ...h.containerStyles.otherProps,
    style: h.containerStyles.style,
    className: o
  } : {
    ...i,
    className: o,
    "data--kind": h.mappedKind
  };
  return _ ? /* @__PURE__ */ s.jsx(ke, { ...f, children: a }) : m ? $o("form", f, a) : $o(
    "div",
    f,
    a
  );
}
function mu(t, i, a) {
  const o = gu(t.kind), c = a ? hu(t.kind) : pu(t.Component), _ = a ? fu(c, i) : { style: {}, otherProps: {} };
  return {
    mappedKind: o,
    wrapperType: c,
    containerStyles: _
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
function hu(t) {
  return {
    "flex-container": "flex-container",
    "grid-container": "grid-container",
    "center-container": "center-container",
    "stack-container": "stack-container"
  }[t] || "generic-container";
}
function fu(t, i) {
  const { style: a, ...o } = i, c = (g) => {
    const b = {}, v = {};
    return Object.entries(o).forEach(([C, w]) => {
      C in g ? b[C] = w !== void 0 ? w : g[C] : v[C] = w;
    }), Object.entries(g).forEach(
      ([C, w]) => {
        C in b || (b[C] = w);
      }
    ), { props: b, restProps: v };
  }, _ = t === "flex-container", m = t === "grid-container", h = t === "center-container";
  if (_ || t === "stack-container") {
    const g = _ ? {
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
    }, { props: b, restProps: v } = c(g);
    return {
      style: {
        display: "flex",
        flexDirection: b.direction,
        justifyContent: b.justify,
        alignItems: b.align,
        ..._ && {
          flexWrap: b.wrap
        },
        gap: b.gap,
        ...a
      },
      otherProps: v
    };
  }
  if (m) {
    const g = {
      columns: "repeat(auto-fit, minmax(250px, 1fr))",
      rows: "auto",
      gap: "1rem",
      justifyItems: "center",
      alignItems: "center"
    }, { props: b, restProps: v } = c(g);
    return {
      style: {
        display: "grid",
        gridTemplateColumns: b.columns,
        gridTemplateRows: b.rows,
        gap: b.gap,
        justifyItems: b.justifyItems,
        alignItems: b.alignItems,
        ...a
      },
      otherProps: v
    };
  }
  if (h) {
    const { method: g = "flex", ...b } = o;
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
      otherProps: b
    };
  }
  return {
    style: a || {},
    otherProps: o
  };
}
function gu(t) {
  const i = {
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
  for (const o of Object.values(i))
    if (o.patterns.some(
      (_) => t.includes(_)
    ))
      return o.map[t] || o.default;
  return "default";
}
const fs = Ae(
  ({
    kind: t,
    children: i,
    className: a,
    suppressDeprecationWarning: o = !1,
    onMigrationHelp: c,
    configuration: _,
    ...m
  }, h) => {
    const f = lu(t), g = _ ? { ...f, ..._ } : f;
    if (!g)
      return console.warn(
        `Wrapper: Unknown wrapper kind "${t}"`
      ), /* @__PURE__ */ s.jsx("div", { className: a, children: i });
    const b = ki(() => {
      const {
        suppressDeprecationWarning: w,
        onMigrationHelp: I,
        configuration: j,
        ...A
      } = m;
      return {
        ...A,
        ...(g == null ? void 0 : g.forwardRef) && { ref: h }
      };
    }, [m, g, h]), v = ki(
      () => [
        Sn.Wrapper,
        Sn[`wrapper--${(g == null ? void 0 : g.variant) || "default"}`],
        Sn[`wrapper--${(g == null ? void 0 : g.layout) || "default"}`],
        g == null ? void 0 : g.wrapperClassName,
        a
      ].filter(Boolean).join(" "),
      [g, a]
    );
    Re(() => {
      (g == null ? void 0 : g.deprecationWarning) && !o && typeof window < "u" && console.warn(
        `🚨 Deprecation Warning: ${g.targetComponent} is deprecated.
📖 Migration Path: ${g.migrationPath}
🔗 Component: ${g.Component}
📝 Description: ${g.description}`
      );
    }, [g, o]);
    const C = () => g != null && g.deprecationWarning && typeof window < "u" ? /* @__PURE__ */ s.jsx("div", { className: Sn.migrationHelper, children: /* @__PURE__ */ s.jsx(
      ke,
      {
        kind: "secondary",
        onClick: c,
        className: Sn.migrationButton,
        title: `Migration help for ${g == null ? void 0 : g.targetComponent}`,
        children: "📖 Migration Guide"
      }
    ) }) : null;
    return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      C(),
      uu(
        g,
        b,
        i,
        v
      )
    ] });
  }
);
fs.displayName = "Wrapper";
const p = oi(fs);
class ii {
  /**
   * Create a wrapper with full configuration control
   */
  static create(i) {
    return /* @__PURE__ */ s.jsx(p, { ...i });
  }
  // ========================================
  // Component Wrapper Methods
  // ========================================
  /**
   * Create a button wrapper
   */
  static button(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "button-wrapper", ...i });
  }
  /**
   * Create a header wrapper
   */
  static header(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "header-wrapper", ...i });
  }
  /**
   * Create a modal wrapper
   */
  static modal(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "modal-wrapper", ...i });
  }
  /**
   * Create a grid wrapper
   */
  static grid(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "grid-wrapper", ...i });
  }
  /**
   * Create a page wrapper
   */
  static page(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "page-wrapper", ...i });
  }
  /**
   * Create a graph wrapper
   */
  static graph(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "graph-wrapper", ...i });
  }
  /**
   * Create a sidebar wrapper
   */
  static sidebar(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "sidebar-wrapper", ...i });
  }
  /**
   * Create a settings wrapper
   */
  static settings(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "settings-wrapper", ...i });
  }
  /**
   * Create a theme wrapper
   */
  static theme(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "theme-wrapper", ...i });
  }
  /**
   * Create an admin wrapper
   */
  static admin(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "admin-wrapper", ...i });
  }
  /**
   * Create a card wrapper
   */
  static card(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "card-wrapper", ...i });
  }
  /**
   * Create a banner wrapper
   */
  static banner(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "banner-wrapper", ...i });
  }
  /**
   * Create a chat wrapper
   */
  static chat(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "chat-wrapper", ...i });
  }
  /**
   * Create a form wrapper
   */
  static form(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "form-wrapper", ...i });
  }
  // ========================================
  // Provider Wrapper Methods
  // ========================================
  /**
   * Create a socket provider wrapper
   */
  static socketProvider(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "socket-provider-wrapper", ...i });
  }
  /**
   * Create a user settings provider wrapper
   */
  static userSettingsProvider(i) {
    return /* @__PURE__ */ s.jsx(
      p,
      {
        kind: "user-settings-provider-wrapper",
        ...i
      }
    );
  }
  /**
   * Create a theme palette provider wrapper
   */
  static themePaletteProvider(i) {
    return /* @__PURE__ */ s.jsx(
      p,
      {
        kind: "theme-palette-provider-wrapper",
        ...i
      }
    );
  }
  /**
   * Create an achievement socket listener wrapper
   */
  static achievementSocketListener(i) {
    return /* @__PURE__ */ s.jsx(
      p,
      {
        kind: "achievement-socket-listener-wrapper",
        ...i
      }
    );
  }
  // ========================================
  // Legacy Wrapper Methods
  // ========================================
  /**
   * Create a legacy primary button wrapper
   */
  static primaryButton(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "primary-button-wrapper", ...i });
  }
  /**
   * Create a legacy secondary button wrapper
   */
  static secondaryButton(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "secondary-button-wrapper", ...i });
  }
  /**
   * Create a legacy close button wrapper
   */
  static closeButton(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "close-button-wrapper", ...i });
  }
  /**
   * Create a legacy icon button wrapper
   */
  static iconButton(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "icon-button-wrapper", ...i });
  }
  /**
   * Create a legacy browse header wrapper
   */
  static browseHeader(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "browse-header-wrapper", ...i });
  }
  /**
   * Create a legacy modal header wrapper
   */
  static modalHeader(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "modal-header-wrapper", ...i });
  }
  /**
   * Create a legacy VS grid wrapper
   */
  static vsGrid(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "vs-grid-wrapper", ...i });
  }
  /**
   * Create a legacy startup page wrapper
   */
  static startupPage(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "startup-page-wrapper", ...i });
  }
  /**
   * Create a legacy customization category wrapper
   */
  static customizationCategory(i) {
    return /* @__PURE__ */ s.jsx(
      p,
      {
        kind: "customization-category-wrapper",
        ...i
      }
    );
  }
  /**
   * Create a legacy settings panel wrapper
   */
  static settingsPanel(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "settings-panel-wrapper", ...i });
  }
  /**
   * Create a legacy theme selector wrapper
   */
  static themeSelector(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "theme-selector-wrapper", ...i });
  }
  /**
   * Create a legacy friends sidebar wrapper
   */
  static friendsSidebar(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "friends-sidebar-wrapper", ...i });
  }
  /**
   * Create a legacy session debugger wrapper
   */
  static sessionDebugger(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "session-debugger-wrapper", ...i });
  }
  /**
   * Create a legacy dark mode toggle wrapper
   */
  static darkModeToggle(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "dark-mode-toggle-wrapper", ...i });
  }
  // ========================================
  // Generic Wrapper Methods
  // ========================================
  /**
   * Create a generic component wrapper
   */
  static component(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "component", ...i });
  }
  /**
   * Create a generic provider wrapper
   */
  static provider(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "provider", ...i });
  }
  // ========================================
  // Layout Container Methods
  // ========================================
  /**
   * Create a flexbox container wrapper
   */
  static flexContainer(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "flex-container", ...i });
  }
  /**
   * Create a CSS grid container wrapper
   */
  static gridContainer(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "grid-container", ...i });
  }
  /**
   * Create a center container wrapper
   */
  static centerContainer(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "center-container", ...i });
  }
  /**
   * Create a stack container wrapper
   */
  static stackContainer(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "stack-container", ...i });
  }
  /**
   * Create a backward compatibility wrapper
   */
  static backwardCompatibility(i) {
    return /* @__PURE__ */ s.jsx(
      p,
      {
        kind: "backward-compatibility-wrapper",
        ...i
      }
    );
  }
  /**
   * Create a legacy wrapper
   */
  static legacy(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "legacy-wrapper", ...i });
  }
  /**
   * Create a simple wrapper
   */
  static simple(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "simple-wrapper", ...i });
  }
  /**
   * Create an enhanced wrapper
   */
  static enhanced(i) {
    return /* @__PURE__ */ s.jsx(p, { kind: "enhanced-wrapper", ...i });
  }
  // ========================================
  // Builder Pattern Methods
  // ========================================
  /**
   * Start building a wrapper with configuration
   */
  static builder(i) {
    return new yu(i);
  }
  /**
   * Create wrapper with custom configuration
   */
  static withConfig(i, a) {
    return (o) => /* @__PURE__ */ s.jsx(
      p,
      {
        kind: i,
        configuration: a,
        ...o
      }
    );
  }
}
class yu {
  constructor(i) {
    this.config = {}, this.kind = i;
  }
  /**
   * Set wrapper variant
   */
  variant(i) {
    return this.config.variant = i, this;
  }
  /**
   * Set wrapper layout
   */
  layout(i) {
    return this.config.layout = i, this;
  }
  /**
   * Set target component
   */
  target(i, a) {
    return this.config.targetComponent = i, this.config.Component = a, this;
  }
  /**
   * Enable/disable API maintenance
   */
  maintainAPI(i = !0) {
    return this.config.maintainAPI = i, this;
  }
  /**
   * Enable/disable deprecation warning
   */
  deprecationWarning(i = !0) {
    return this.config.deprecationWarning = i, this;
  }
  /**
   * Set migration path
   */
  migrationPath(i) {
    return this.config.migrationPath = i, this;
  }
  /**
   * Set description
   */
  description(i) {
    return this.config.description = i, this;
  }
  /**
   * Set className
   */
  className(i) {
    return this.config.className = i, this;
  }
  /**
   * Build the wrapper component
   */
  build() {
    return (i) => /* @__PURE__ */ s.jsx(
      p,
      {
        kind: this.kind,
        configuration: this.config,
        ...i
      }
    );
  }
}
const aC = {
  /**
   * Standard button wrapper
   */
  BUTTON: (t) => ii.button(t),
  /**
   * Standard header wrapper
   */
  HEADER: (t) => ii.header(t),
  /**
   * Standard modal wrapper
   */
  MODAL: (t) => ii.modal(t),
  /**
   * Standard grid wrapper
   */
  GRID: (t) => ii.grid(t),
  /**
   * Standard page wrapper
   */
  PAGE: (t) => ii.page(t),
  /**
   * Standard sidebar wrapper
   */
  SIDEBAR: (t) => ii.sidebar(t),
  /**
   * Standard settings wrapper
   */
  SETTINGS: (t) => ii.settings(t),
  /**
   * Legacy component wrapper with deprecation warning
   */
  LEGACY_WITH_WARNING: (t) => ii.legacy({
    ...t,
    configuration: { deprecationWarning: !0 }
  }),
  /**
   * Legacy component wrapper without deprecation warning
   */
  LEGACY_SILENT: (t) => ii.legacy({
    ...t,
    suppressDeprecationWarning: !0
  }),
  /**
   * Backward compatibility wrapper
   */
  BACKWARD_COMPATIBILITY: (t) => ii.backwardCompatibility(t),
  /**
   * Simple wrapper with minimal functionality
   */
  SIMPLE: (t) => ii.simple(t),
  /**
   * Enhanced wrapper with additional features
   */
  ENHANCED: (t) => ii.enhanced(t)
};
function rC(t, i = {}) {
  return /* @__PURE__ */ s.jsx(p, { kind: t, ...i });
}
function oC(t, i, a = {}) {
  return /* @__PURE__ */ s.jsx(
    p,
    {
      kind: t,
      configuration: i,
      ...a
    }
  );
}
function Et(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var bu = typeof Symbol == "function" && Symbol.observable || "@@observable", Zo = bu, Qa = () => Math.random().toString(36).substring(7).split("").join("."), vu = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Qa()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Qa()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Qa()}`
}, qi = vu;
function Ln(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let i = t;
  for (; Object.getPrototypeOf(i) !== null; )
    i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(t) === i || Object.getPrototypeOf(t) === null;
}
function xu(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  const i = typeof t;
  switch (i) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return i;
  }
  if (Array.isArray(t))
    return "array";
  if (Cu(t))
    return "date";
  if (ku(t))
    return "error";
  const a = wu(t);
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
function wu(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function ku(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function Cu(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function Li(t) {
  let i = typeof t;
  return process.env.NODE_ENV !== "production" && (i = xu(t)), i;
}
function gs(t, i, a) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Et(2) : `Expected the root reducer to be a function. Instead, received: '${Li(t)}'`);
  if (typeof i == "function" && typeof a == "function" || typeof a == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Et(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof i == "function" && typeof a > "u" && (a = i, i = void 0), typeof a < "u") {
    if (typeof a != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Et(1) : `Expected the enhancer to be a function. Instead, received: '${Li(a)}'`);
    return a(gs)(t, i);
  }
  let o = t, c = i, _ = /* @__PURE__ */ new Map(), m = _, h = 0, f = !1;
  function g() {
    m === _ && (m = /* @__PURE__ */ new Map(), _.forEach((A, O) => {
      m.set(O, A);
    }));
  }
  function b() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Et(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return c;
  }
  function v(A) {
    if (typeof A != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Et(4) : `Expected the listener to be a function. Instead, received: '${Li(A)}'`);
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Et(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let O = !0;
    g();
    const X = h++;
    return m.set(X, A), function() {
      if (O) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? Et(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        O = !1, g(), m.delete(X), _ = null;
      }
    };
  }
  function C(A) {
    if (!Ln(A))
      throw new Error(process.env.NODE_ENV === "production" ? Et(7) : `Actions must be plain objects. Instead, the actual type was: '${Li(A)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof A.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Et(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof A.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Et(17) : `Action "type" property must be a string. Instead, the actual type was: '${Li(A.type)}'. Value was: '${A.type}' (stringified)`);
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? Et(9) : "Reducers may not dispatch actions.");
    try {
      f = !0, c = o(c, A);
    } finally {
      f = !1;
    }
    return (_ = m).forEach((X) => {
      X();
    }), A;
  }
  function w(A) {
    if (typeof A != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Et(10) : `Expected the nextReducer to be a function. Instead, received: '${Li(A)}`);
    o = A, C({
      type: qi.REPLACE
    });
  }
  function I() {
    const A = v;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(O) {
        if (typeof O != "object" || O === null)
          throw new Error(process.env.NODE_ENV === "production" ? Et(11) : `Expected the observer to be an object. Instead, received: '${Li(O)}'`);
        function X() {
          const U = O;
          U.next && U.next(b());
        }
        return X(), {
          unsubscribe: A(X)
        };
      },
      [Zo]() {
        return this;
      }
    };
  }
  return C({
    type: qi.INIT
  }), {
    dispatch: C,
    subscribe: v,
    getState: b,
    replaceReducer: w,
    [Zo]: I
  };
}
function Ho(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Su(t, i, a, o) {
  const c = Object.keys(i), _ = a && a.type === qi.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (c.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ln(t))
    return `The ${_} has unexpected type of "${Li(t)}". Expected argument to be an object with the following keys: "${c.join('", "')}"`;
  const m = Object.keys(t).filter((h) => !i.hasOwnProperty(h) && !o[h]);
  if (m.forEach((h) => {
    o[h] = !0;
  }), !(a && a.type === qi.REPLACE) && m.length > 0)
    return `Unexpected ${m.length > 1 ? "keys" : "key"} "${m.join('", "')}" found in ${_}. Expected to find one of the known reducer keys instead: "${c.join('", "')}". Unexpected keys will be ignored.`;
}
function zu(t) {
  Object.keys(t).forEach((i) => {
    const a = t[i];
    if (typeof a(void 0, {
      type: qi.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Et(12) : `The slice reducer for key "${i}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof a(void 0, {
      type: qi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Et(13) : `The slice reducer for key "${i}" returned undefined when probed with a random type. Don't try to handle '${qi.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ju(t) {
  const i = Object.keys(t), a = {};
  for (let m = 0; m < i.length; m++) {
    const h = i[m];
    process.env.NODE_ENV !== "production" && typeof t[h] > "u" && Ho(`No reducer provided for key "${h}"`), typeof t[h] == "function" && (a[h] = t[h]);
  }
  const o = Object.keys(a);
  let c;
  process.env.NODE_ENV !== "production" && (c = {});
  let _;
  try {
    zu(a);
  } catch (m) {
    _ = m;
  }
  return function(h = {}, f) {
    if (_)
      throw _;
    if (process.env.NODE_ENV !== "production") {
      const v = Su(h, a, f, c);
      v && Ho(v);
    }
    let g = !1;
    const b = {};
    for (let v = 0; v < o.length; v++) {
      const C = o[v], w = a[C], I = h[C], j = w(I, f);
      if (typeof j > "u") {
        const A = f && f.type;
        throw new Error(process.env.NODE_ENV === "production" ? Et(14) : `When called with an action of type ${A ? `"${String(A)}"` : "(unknown type)"}, the slice reducer for key "${C}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      b[C] = j, g = g || j !== I;
    }
    return g = g || o.length !== Object.keys(h).length, g ? b : h;
  };
}
function la(...t) {
  return t.length === 0 ? (i) => i : t.length === 1 ? t[0] : t.reduce((i, a) => (...o) => i(a(...o)));
}
function Nu(...t) {
  return (i) => (a, o) => {
    const c = i(a, o);
    let _ = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Et(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const m = {
      getState: c.getState,
      dispatch: (f, ...g) => _(f, ...g)
    }, h = t.map((f) => f(m));
    return _ = la(...h)(c.dispatch), {
      ...c,
      dispatch: _
    };
  };
}
function ys(t) {
  return Ln(t) && "type" in t && typeof t.type == "string";
}
var bs = Symbol.for("immer-nothing"), Vo = Symbol.for("immer-draftable"), Kt = Symbol.for("immer-state"), Tu = process.env.NODE_ENV !== "production" ? [
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
function Wt(t, ...i) {
  if (process.env.NODE_ENV !== "production") {
    const a = Tu[t], o = typeof a == "function" ? a.apply(null, i) : a;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var cn = Object.getPrototypeOf;
function Yi(t) {
  return !!t && !!t[Kt];
}
function zi(t) {
  var i;
  return t ? vs(t) || Array.isArray(t) || !!t[Vo] || !!((i = t.constructor) != null && i[Vo]) || ga(t) || ya(t) : !1;
}
var Pu = Object.prototype.constructor.toString();
function vs(t) {
  if (!t || typeof t != "object")
    return !1;
  const i = cn(t);
  if (i === null)
    return !0;
  const a = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
  return a === Object ? !0 : typeof a == "function" && Function.toString.call(a) === Pu;
}
function ca(t, i) {
  fa(t) === 0 ? Reflect.ownKeys(t).forEach((a) => {
    i(a, t[a], t);
  }) : t.forEach((a, o) => i(o, a, t));
}
function fa(t) {
  const i = t[Kt];
  return i ? i.type_ : Array.isArray(t) ? 1 : ga(t) ? 2 : ya(t) ? 3 : 0;
}
function Cr(t, i) {
  return fa(t) === 2 ? t.has(i) : Object.prototype.hasOwnProperty.call(t, i);
}
function xs(t, i, a) {
  const o = fa(t);
  o === 2 ? t.set(i, a) : o === 3 ? t.add(a) : t[i] = a;
}
function Eu(t, i) {
  return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
}
function ga(t) {
  return t instanceof Map;
}
function ya(t) {
  return t instanceof Set;
}
function Ki(t) {
  return t.copy_ || t.base_;
}
function Sr(t, i) {
  if (ga(t))
    return new Map(t);
  if (ya(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const a = vs(t);
  if (i === !0 || i === "class_only" && !a) {
    const o = Object.getOwnPropertyDescriptors(t);
    delete o[Kt];
    let c = Reflect.ownKeys(o);
    for (let _ = 0; _ < c.length; _++) {
      const m = c[_], h = o[m];
      h.writable === !1 && (h.writable = !0, h.configurable = !0), (h.get || h.set) && (o[m] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: h.enumerable,
        value: t[m]
      });
    }
    return Object.create(cn(t), o);
  } else {
    const o = cn(t);
    if (o !== null && a)
      return { ...t };
    const c = Object.create(o);
    return Object.assign(c, t);
  }
}
function Rr(t, i = !1) {
  return ba(t) || Yi(t) || !zi(t) || (fa(t) > 1 && (t.set = t.add = t.clear = t.delete = Iu), Object.freeze(t), i && Object.entries(t).forEach(([a, o]) => Rr(o, !0))), t;
}
function Iu() {
  Wt(2);
}
function ba(t) {
  return Object.isFrozen(t);
}
var Lu = {};
function Ji(t) {
  const i = Lu[t];
  return i || Wt(0, t), i;
}
var Tn;
function ws() {
  return Tn;
}
function Au(t, i) {
  return {
    drafts_: [],
    parent_: t,
    immer_: i,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Go(t, i) {
  i && (Ji("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = i);
}
function zr(t) {
  jr(t), t.drafts_.forEach(Mu), t.drafts_ = null;
}
function jr(t) {
  t === Tn && (Tn = t.parent_);
}
function Ko(t) {
  return Tn = Au(Tn, t);
}
function Mu(t) {
  const i = t[Kt];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : i.revoked_ = !0;
}
function qo(t, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const a = i.drafts_[0];
  return t !== void 0 && t !== a ? (a[Kt].modified_ && (zr(i), Wt(4)), zi(t) && (t = da(i, t), i.parent_ || _a(i, t)), i.patches_ && Ji("Patches").generateReplacementPatches_(
    a[Kt].base_,
    t,
    i.patches_,
    i.inversePatches_
  )) : t = da(i, a, []), zr(i), i.patches_ && i.patchListener_(i.patches_, i.inversePatches_), t !== bs ? t : void 0;
}
function da(t, i, a) {
  if (ba(i))
    return i;
  const o = i[Kt];
  if (!o)
    return ca(
      i,
      (c, _) => Yo(t, o, i, c, _, a)
    ), i;
  if (o.scope_ !== t)
    return i;
  if (!o.modified_)
    return _a(t, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const c = o.copy_;
    let _ = c, m = !1;
    o.type_ === 3 && (_ = new Set(c), c.clear(), m = !0), ca(
      _,
      (h, f) => Yo(t, o, c, h, f, a, m)
    ), _a(t, c, !1), a && t.patches_ && Ji("Patches").generatePatches_(
      o,
      a,
      t.patches_,
      t.inversePatches_
    );
  }
  return o.copy_;
}
function Yo(t, i, a, o, c, _, m) {
  if (process.env.NODE_ENV !== "production" && c === a && Wt(5), Yi(c)) {
    const h = _ && i && i.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Cr(i.assigned_, o) ? _.concat(o) : void 0, f = da(t, c, h);
    if (xs(a, o, f), Yi(f))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else m && a.add(c);
  if (zi(c) && !ba(c)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    da(t, c), (!i || !i.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(a, o) && _a(t, c);
  }
}
function _a(t, i, a = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Rr(i, a);
}
function Ou(t, i) {
  const a = Array.isArray(t), o = {
    type_: a ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: i ? i.scope_ : ws(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: i,
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
  let c = o, _ = Br;
  a && (c = [o], _ = Pn);
  const { revoke: m, proxy: h } = Proxy.revocable(c, _);
  return o.draft_ = h, o.revoke_ = m, h;
}
var Br = {
  get(t, i) {
    if (i === Kt)
      return t;
    const a = Ki(t);
    if (!Cr(a, i))
      return Ru(t, a, i);
    const o = a[i];
    return t.finalized_ || !zi(o) ? o : o === er(t.base_, i) ? (tr(t), t.copy_[i] = Tr(o, t)) : o;
  },
  has(t, i) {
    return i in Ki(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Ki(t));
  },
  set(t, i, a) {
    const o = ks(Ki(t), i);
    if (o != null && o.set)
      return o.set.call(t.draft_, a), !0;
    if (!t.modified_) {
      const c = er(Ki(t), i), _ = c == null ? void 0 : c[Kt];
      if (_ && _.base_ === a)
        return t.copy_[i] = a, t.assigned_[i] = !1, !0;
      if (Eu(a, c) && (a !== void 0 || Cr(t.base_, i)))
        return !0;
      tr(t), Nr(t);
    }
    return t.copy_[i] === a && // special case: handle new props with value 'undefined'
    (a !== void 0 || i in t.copy_) || // special case: NaN
    Number.isNaN(a) && Number.isNaN(t.copy_[i]) || (t.copy_[i] = a, t.assigned_[i] = !0), !0;
  },
  deleteProperty(t, i) {
    return er(t.base_, i) !== void 0 || i in t.base_ ? (t.assigned_[i] = !1, tr(t), Nr(t)) : delete t.assigned_[i], t.copy_ && delete t.copy_[i], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, i) {
    const a = Ki(t), o = Reflect.getOwnPropertyDescriptor(a, i);
    return o && {
      writable: !0,
      configurable: t.type_ !== 1 || i !== "length",
      enumerable: o.enumerable,
      value: a[i]
    };
  },
  defineProperty() {
    Wt(11);
  },
  getPrototypeOf(t) {
    return cn(t.base_);
  },
  setPrototypeOf() {
    Wt(12);
  }
}, Pn = {};
ca(Br, (t, i) => {
  Pn[t] = function() {
    return arguments[0] = arguments[0][0], i.apply(this, arguments);
  };
});
Pn.deleteProperty = function(t, i) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(i)) && Wt(13), Pn.set.call(this, t, i, void 0);
};
Pn.set = function(t, i, a) {
  return process.env.NODE_ENV !== "production" && i !== "length" && isNaN(parseInt(i)) && Wt(14), Br.set.call(this, t[0], i, a, t[0]);
};
function er(t, i) {
  const a = t[Kt];
  return (a ? Ki(a) : t)[i];
}
function Ru(t, i, a) {
  var c;
  const o = ks(i, a);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (c = o.get) == null ? void 0 : c.call(t.draft_)
  ) : void 0;
}
function ks(t, i) {
  if (!(i in t))
    return;
  let a = cn(t);
  for (; a; ) {
    const o = Object.getOwnPropertyDescriptor(a, i);
    if (o)
      return o;
    a = cn(a);
  }
}
function Nr(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Nr(t.parent_));
}
function tr(t) {
  t.copy_ || (t.copy_ = Sr(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var Bu = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (i, a, o) => {
      if (typeof i == "function" && typeof a != "function") {
        const _ = a;
        a = i;
        const m = this;
        return function(f = _, ...g) {
          return m.produce(f, (b) => a.call(this, b, ...g));
        };
      }
      typeof a != "function" && Wt(6), o !== void 0 && typeof o != "function" && Wt(7);
      let c;
      if (zi(i)) {
        const _ = Ko(this), m = Tr(i, void 0);
        let h = !0;
        try {
          c = a(m), h = !1;
        } finally {
          h ? zr(_) : jr(_);
        }
        return Go(_, o), qo(c, _);
      } else if (!i || typeof i != "object") {
        if (c = a(i), c === void 0 && (c = i), c === bs && (c = void 0), this.autoFreeze_ && Rr(c, !0), o) {
          const _ = [], m = [];
          Ji("Patches").generateReplacementPatches_(i, c, _, m), o(_, m);
        }
        return c;
      } else
        Wt(1, i);
    }, this.produceWithPatches = (i, a) => {
      if (typeof i == "function")
        return (m, ...h) => this.produceWithPatches(m, (f) => i(f, ...h));
      let o, c;
      return [this.produce(i, a, (m, h) => {
        o = m, c = h;
      }), o, c];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    zi(t) || Wt(8), Yi(t) && (t = Fu(t));
    const i = Ko(this), a = Tr(t, void 0);
    return a[Kt].isManual_ = !0, jr(i), a;
  }
  finishDraft(t, i) {
    const a = t && t[Kt];
    (!a || !a.isManual_) && Wt(9);
    const { scope_: o } = a;
    return Go(o, i), qo(void 0, o);
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
  applyPatches(t, i) {
    let a;
    for (a = i.length - 1; a >= 0; a--) {
      const c = i[a];
      if (c.path.length === 0 && c.op === "replace") {
        t = c.value;
        break;
      }
    }
    a > -1 && (i = i.slice(a + 1));
    const o = Ji("Patches").applyPatches_;
    return Yi(t) ? o(t, i) : this.produce(
      t,
      (c) => o(c, i)
    );
  }
};
function Tr(t, i) {
  const a = ga(t) ? Ji("MapSet").proxyMap_(t, i) : ya(t) ? Ji("MapSet").proxySet_(t, i) : Ou(t, i);
  return (i ? i.scope_ : ws()).drafts_.push(a), a;
}
function Fu(t) {
  return Yi(t) || Wt(10, t), Cs(t);
}
function Cs(t) {
  if (!zi(t) || ba(t))
    return t;
  const i = t[Kt];
  let a;
  if (i) {
    if (!i.modified_)
      return i.base_;
    i.finalized_ = !0, a = Sr(t, i.scope_.immer_.useStrictShallowCopy_);
  } else
    a = Sr(t, !0);
  return ca(a, (o, c) => {
    xs(a, o, Cs(c));
  }), i && (i.finalized_ = !1), a;
}
var qt = new Bu(), Ss = qt.produce;
qt.produceWithPatches.bind(
  qt
);
qt.setAutoFreeze.bind(qt);
qt.setUseStrictShallowCopy.bind(qt);
qt.applyPatches.bind(qt);
qt.createDraft.bind(qt);
qt.finishDraft.bind(qt);
function zs(t) {
  return ({ dispatch: a, getState: o }) => (c) => (_) => typeof _ == "function" ? _(a, o, t) : c(_);
}
var Du = zs(), $u = zs, Wu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? la : la.apply(null, arguments);
}, js = (t) => t && typeof t.match == "function";
function Nn(t, i) {
  function a(...o) {
    if (i) {
      let c = i(...o);
      if (!c)
        throw new Error(process.env.NODE_ENV === "production" ? it(0) : "prepareAction did not return an object");
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
      payload: o[0]
    };
  }
  return a.toString = () => `${t}`, a.type = t, a.match = (o) => ys(o) && o.type === t, a;
}
function Uu(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  js(t);
}
function Zu(t) {
  const i = t ? `${t}`.split("/") : [], a = i[i.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${a}())\` instead of \`dispatch(${a})\`. This is necessary even if the action has no payload.`;
}
function Hu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (a) => (o) => a(o);
  const {
    isActionCreator: i = Uu
  } = t;
  return () => (a) => (o) => (i(o) && console.warn(Zu(o.type)), a(o));
}
function Ns(t, i) {
  let a = 0;
  return {
    measureTime(o) {
      const c = Date.now();
      try {
        return o();
      } finally {
        const _ = Date.now();
        a += _ - c;
      }
    },
    warnIfExceeded() {
      a > t && console.warn(`${i} took ${a}ms, which is more than the warning threshold of ${t}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Ts = class jn extends Array {
  constructor(...i) {
    super(...i), Object.setPrototypeOf(this, jn.prototype);
  }
  static get [Symbol.species]() {
    return jn;
  }
  concat(...i) {
    return super.concat.apply(this, i);
  }
  prepend(...i) {
    return i.length === 1 && Array.isArray(i[0]) ? new jn(...i[0].concat(this)) : new jn(...i.concat(this));
  }
};
function Jo(t) {
  return zi(t) ? Ss(t, () => {
  }) : t;
}
function na(t, i, a) {
  return t.has(i) ? t.get(i) : t.set(i, a(i)).get(i);
}
function Vu(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function Gu(t, i, a) {
  const o = Ps(t, i, a);
  return {
    detectMutations() {
      return Es(t, i, o, a);
    }
  };
}
function Ps(t, i = [], a, o = "", c = /* @__PURE__ */ new Set()) {
  const _ = {
    value: a
  };
  if (!t(a) && !c.has(a)) {
    c.add(a), _.children = {};
    for (const m in a) {
      const h = o ? o + "." + m : m;
      i.length && i.indexOf(h) !== -1 || (_.children[m] = Ps(t, i, a[m], h));
    }
  }
  return _;
}
function Es(t, i = [], a, o, c = !1, _ = "") {
  const m = a ? a.value : void 0, h = m === o;
  if (c && !h && !Number.isNaN(o))
    return {
      wasMutated: !0,
      path: _
    };
  if (t(m) || t(o))
    return {
      wasMutated: !1
    };
  const f = {};
  for (let b in a.children)
    f[b] = !0;
  for (let b in o)
    f[b] = !0;
  const g = i.length > 0;
  for (let b in f) {
    const v = _ ? _ + "." + b : b;
    if (g && i.some((I) => I instanceof RegExp ? I.test(v) : v === I))
      continue;
    const C = Es(t, i, a.children[b], o[b], h, v);
    if (C.wasMutated)
      return C;
  }
  return {
    wasMutated: !1
  };
}
function Ku(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (i) => (a) => i(a);
  {
    let i = function(h, f, g, b) {
      return JSON.stringify(h, a(f, b), g);
    }, a = function(h, f) {
      let g = [], b = [];
      return f || (f = function(v, C) {
        return g[0] === C ? "[Circular ~]" : "[Circular ~." + b.slice(0, g.indexOf(C)).join(".") + "]";
      }), function(v, C) {
        if (g.length > 0) {
          var w = g.indexOf(this);
          ~w ? g.splice(w + 1) : g.push(this), ~w ? b.splice(w, 1 / 0, v) : b.push(v), ~g.indexOf(C) && (C = f.call(this, v, C));
        } else g.push(C);
        return h == null ? C : h.call(this, v, C);
      };
    }, {
      isImmutable: o = Vu,
      ignoredPaths: c,
      warnAfter: _ = 32
    } = t;
    const m = Gu.bind(null, o, c);
    return ({
      getState: h
    }) => {
      let f = h(), g = m(f), b;
      return (v) => (C) => {
        const w = Ns(_, "ImmutableStateInvariantMiddleware");
        w.measureTime(() => {
          if (f = h(), b = g.detectMutations(), g = m(f), b.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? it(19) : `A state mutation was detected between dispatches, in the path '${b.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const I = v(C);
        return w.measureTime(() => {
          if (f = h(), b = g.detectMutations(), g = m(f), b.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? it(20) : `A state mutation was detected inside a dispatch, in the path: ${b.path || ""}. Take a look at the reducer(s) handling the action ${i(C)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), w.warnIfExceeded(), I;
      };
    };
  }
}
function Is(t) {
  const i = typeof t;
  return t == null || i === "string" || i === "boolean" || i === "number" || Array.isArray(t) || Ln(t);
}
function Pr(t, i = "", a = Is, o, c = [], _) {
  let m;
  if (!a(t))
    return {
      keyPath: i || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || _ != null && _.has(t)) return !1;
  const h = o != null ? o(t) : Object.entries(t), f = c.length > 0;
  for (const [g, b] of h) {
    const v = i ? i + "." + g : g;
    if (!(f && c.some((w) => w instanceof RegExp ? w.test(v) : v === w))) {
      if (!a(b))
        return {
          keyPath: v,
          value: b
        };
      if (typeof b == "object" && (m = Pr(b, v, a, o, c, _), m))
        return m;
    }
  }
  return _ && Ls(t) && _.add(t), !1;
}
function Ls(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const i of Object.values(t))
    if (!(typeof i != "object" || i === null) && !Ls(i))
      return !1;
  return !0;
}
function qu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (i) => (a) => i(a);
  {
    const {
      isSerializable: i = Is,
      getEntries: a,
      ignoredActions: o = [],
      ignoredActionPaths: c = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: _ = [],
      warnAfter: m = 32,
      ignoreState: h = !1,
      ignoreActions: f = !1,
      disableCache: g = !1
    } = t, b = !g && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (v) => (C) => (w) => {
      if (!ys(w))
        return C(w);
      const I = C(w), j = Ns(m, "SerializableStateInvariantMiddleware");
      return !f && !(o.length && o.indexOf(w.type) !== -1) && j.measureTime(() => {
        const A = Pr(w, "", i, a, c, b);
        if (A) {
          const {
            keyPath: O,
            value: X
          } = A;
          console.error(`A non-serializable value was detected in an action, in the path: \`${O}\`. Value:`, X, `
Take a look at the logic that dispatched this action: `, w, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), h || (j.measureTime(() => {
        const A = v.getState(), O = Pr(A, "", i, a, _, b);
        if (O) {
          const {
            keyPath: X,
            value: W
          } = O;
          console.error(`A non-serializable value was detected in the state, in the path: \`${X}\`. Value:`, W, `
Take a look at the reducer(s) handling this action type: ${w.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), j.warnIfExceeded()), I;
    };
  }
}
function aa(t) {
  return typeof t == "boolean";
}
var Yu = () => function(i) {
  const {
    thunk: a = !0,
    immutableCheck: o = !0,
    serializableCheck: c = !0,
    actionCreatorCheck: _ = !0
  } = i ?? {};
  let m = new Ts();
  if (a && (aa(a) ? m.push(Du) : m.push($u(a.extraArgument))), process.env.NODE_ENV !== "production") {
    if (o) {
      let h = {};
      aa(o) || (h = o), m.unshift(Ku(h));
    }
    if (c) {
      let h = {};
      aa(c) || (h = c), m.push(qu(h));
    }
    if (_) {
      let h = {};
      aa(_) || (h = _), m.unshift(Hu(h));
    }
  }
  return m;
}, Ju = "RTK_autoBatch", Xo = (t) => (i) => {
  setTimeout(i, t);
}, Xu = (t = {
  type: "raf"
}) => (i) => (...a) => {
  const o = i(...a);
  let c = !0, _ = !1, m = !1;
  const h = /* @__PURE__ */ new Set(), f = t.type === "tick" ? queueMicrotask : t.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xo(10)
  ) : t.type === "callback" ? t.queueNotification : Xo(t.timeout), g = () => {
    m = !1, _ && (_ = !1, h.forEach((b) => b()));
  };
  return Object.assign({}, o, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(b) {
      const v = () => c && b(), C = o.subscribe(v);
      return h.add(b), () => {
        C(), h.delete(b);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(b) {
      var v;
      try {
        return c = !((v = b == null ? void 0 : b.meta) != null && v[Ju]), _ = !c, _ && (m || (m = !0, f(g))), o.dispatch(b);
      } finally {
        c = !0;
      }
    }
  });
}, Qu = (t) => function(a) {
  const {
    autoBatch: o = !0
  } = a ?? {};
  let c = new Ts(t);
  return o && c.push(Xu(typeof o == "object" ? o : void 0)), c;
};
function As(t) {
  const i = Yu(), {
    reducer: a = void 0,
    middleware: o,
    devTools: c = !0,
    duplicateMiddlewareCheck: _ = !0,
    preloadedState: m = void 0,
    enhancers: h = void 0
  } = t || {};
  let f;
  if (typeof a == "function")
    f = a;
  else if (Ln(a))
    f = ju(a);
  else
    throw new Error(process.env.NODE_ENV === "production" ? it(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && o && typeof o != "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(2) : "`middleware` field must be a callback");
  let g;
  if (typeof o == "function") {
    if (g = o(i), process.env.NODE_ENV !== "production" && !Array.isArray(g))
      throw new Error(process.env.NODE_ENV === "production" ? it(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    g = i();
  if (process.env.NODE_ENV !== "production" && g.some((j) => typeof j != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? it(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && _) {
    let j = /* @__PURE__ */ new Set();
    g.forEach((A) => {
      if (j.has(A))
        throw new Error(process.env.NODE_ENV === "production" ? it(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      j.add(A);
    });
  }
  let b = la;
  c && (b = Wu({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof c == "object" && c
  }));
  const v = Nu(...g), C = Qu(v);
  if (process.env.NODE_ENV !== "production" && h && typeof h != "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(5) : "`enhancers` field must be a callback");
  let w = typeof h == "function" ? h(C) : C();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(w))
    throw new Error(process.env.NODE_ENV === "production" ? it(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && w.some((j) => typeof j != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? it(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && g.length && !w.includes(v) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const I = b(...w);
  return gs(f, m, I);
}
function Ms(t) {
  const i = {}, a = [];
  let o;
  const c = {
    addCase(_, m) {
      if (process.env.NODE_ENV !== "production") {
        if (a.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? it(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (o)
          throw new Error(process.env.NODE_ENV === "production" ? it(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const h = typeof _ == "string" ? _ : _.type;
      if (!h)
        throw new Error(process.env.NODE_ENV === "production" ? it(28) : "`builder.addCase` cannot be called with an empty action type");
      if (h in i)
        throw new Error(process.env.NODE_ENV === "production" ? it(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${h}'`);
      return i[h] = m, c;
    },
    addMatcher(_, m) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? it(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return a.push({
        matcher: _,
        reducer: m
      }), c;
    },
    addDefaultCase(_) {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error(process.env.NODE_ENV === "production" ? it(31) : "`builder.addDefaultCase` can only be called once");
      return o = _, c;
    }
  };
  return t(c), [i, a, o];
}
function em(t) {
  return typeof t == "function";
}
function tm(t, i) {
  if (process.env.NODE_ENV !== "production" && typeof i == "object")
    throw new Error(process.env.NODE_ENV === "production" ? it(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [a, o, c] = Ms(i), _;
  if (em(t))
    _ = () => Jo(t());
  else {
    const h = Jo(t);
    _ = () => h;
  }
  function m(h = _(), f) {
    let g = [a[f.type], ...o.filter(({
      matcher: b
    }) => b(f)).map(({
      reducer: b
    }) => b)];
    return g.filter((b) => !!b).length === 0 && (g = [c]), g.reduce((b, v) => {
      if (v)
        if (Yi(b)) {
          const w = v(b, f);
          return w === void 0 ? b : w;
        } else {
          if (zi(b))
            return Ss(b, (C) => v(C, f));
          {
            const C = v(b, f);
            if (C === void 0) {
              if (b === null)
                return b;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return C;
          }
        }
      return b;
    }, h);
  }
  return m.getInitialState = _, m;
}
var im = (t, i) => js(t) ? t.match(i) : t(i);
function nm(...t) {
  return (i) => t.some((a) => im(a, i));
}
var am = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", rm = (t = 21) => {
  let i = "", a = t;
  for (; a--; )
    i += am[Math.random() * 64 | 0];
  return i;
}, om = ["name", "message", "stack", "code"], ir = class {
  constructor(t, i) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Xa(this, "_type");
    this.payload = t, this.meta = i;
  }
}, Qo = class {
  constructor(t, i) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Xa(this, "_type");
    this.payload = t, this.meta = i;
  }
}, sm = (t) => {
  if (typeof t == "object" && t !== null) {
    const i = {};
    for (const a of om)
      typeof t[a] == "string" && (i[a] = t[a]);
    return i;
  }
  return {
    message: String(t)
  };
}, es = "External signal was aborted", zt = /* @__PURE__ */ (() => {
  function t(i, a, o) {
    const c = Nn(i + "/fulfilled", (f, g, b, v) => ({
      payload: f,
      meta: {
        ...v || {},
        arg: b,
        requestId: g,
        requestStatus: "fulfilled"
      }
    })), _ = Nn(i + "/pending", (f, g, b) => ({
      payload: void 0,
      meta: {
        ...b || {},
        arg: g,
        requestId: f,
        requestStatus: "pending"
      }
    })), m = Nn(i + "/rejected", (f, g, b, v, C) => ({
      payload: v,
      error: (o && o.serializeError || sm)(f || "Rejected"),
      meta: {
        ...C || {},
        arg: b,
        requestId: g,
        rejectedWithValue: !!v,
        requestStatus: "rejected",
        aborted: (f == null ? void 0 : f.name) === "AbortError",
        condition: (f == null ? void 0 : f.name) === "ConditionError"
      }
    }));
    function h(f, {
      signal: g
    } = {}) {
      return (b, v, C) => {
        const w = o != null && o.idGenerator ? o.idGenerator(f) : rm(), I = new AbortController();
        let j, A;
        function O(W) {
          A = W, I.abort();
        }
        g && (g.aborted ? O(es) : g.addEventListener("abort", () => O(es), {
          once: !0
        }));
        const X = async function() {
          var N, T;
          let W;
          try {
            let J = (N = o == null ? void 0 : o.condition) == null ? void 0 : N.call(o, f, {
              getState: v,
              extra: C
            });
            if (cm(J) && (J = await J), J === !1 || I.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const V = new Promise((B, G) => {
              j = () => {
                G({
                  name: "AbortError",
                  message: A || "Aborted"
                });
              }, I.signal.addEventListener("abort", j);
            });
            b(_(w, f, (T = o == null ? void 0 : o.getPendingMeta) == null ? void 0 : T.call(o, {
              requestId: w,
              arg: f
            }, {
              getState: v,
              extra: C
            }))), W = await Promise.race([V, Promise.resolve(a(f, {
              dispatch: b,
              getState: v,
              extra: C,
              requestId: w,
              signal: I.signal,
              abort: O,
              rejectWithValue: (B, G) => new ir(B, G),
              fulfillWithValue: (B, G) => new Qo(B, G)
            })).then((B) => {
              if (B instanceof ir)
                throw B;
              return B instanceof Qo ? c(B.payload, w, f, B.meta) : c(B, w, f);
            })]);
          } catch (J) {
            W = J instanceof ir ? m(null, w, f, J.payload, J.meta) : m(J, w, f);
          } finally {
            j && I.signal.removeEventListener("abort", j);
          }
          return o && !o.dispatchConditionRejection && m.match(W) && W.meta.condition || b(W), W;
        }();
        return Object.assign(X, {
          abort: O,
          requestId: w,
          arg: f,
          unwrap() {
            return X.then(lm);
          }
        });
      };
    }
    return Object.assign(h, {
      pending: _,
      rejected: m,
      fulfilled: c,
      settled: nm(m, c),
      typePrefix: i
    });
  }
  return t.withTypes = () => t, t;
})();
function lm(t) {
  if (t.meta && t.meta.rejectedWithValue)
    throw t.payload;
  if (t.error)
    throw t.error;
  return t.payload;
}
function cm(t) {
  return t !== null && typeof t == "object" && typeof t.then == "function";
}
var dm = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function _m(t, i) {
  return `${t}/${i}`;
}
function um({
  creators: t
} = {}) {
  var a;
  const i = (a = t == null ? void 0 : t.asyncThunk) == null ? void 0 : a[dm];
  return function(c) {
    const {
      name: _,
      reducerPath: m = _
    } = c;
    if (!_)
      throw new Error(process.env.NODE_ENV === "production" ? it(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const h = (typeof c.reducers == "function" ? c.reducers(pm()) : c.reducers) || {}, f = Object.keys(h), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, b = {
      addCase(U, N) {
        const T = typeof U == "string" ? U : U.type;
        if (!T)
          throw new Error(process.env.NODE_ENV === "production" ? it(12) : "`context.addCase` cannot be called with an empty action type");
        if (T in g.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? it(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + T);
        return g.sliceCaseReducersByType[T] = N, b;
      },
      addMatcher(U, N) {
        return g.sliceMatchers.push({
          matcher: U,
          reducer: N
        }), b;
      },
      exposeAction(U, N) {
        return g.actionCreators[U] = N, b;
      },
      exposeCaseReducer(U, N) {
        return g.sliceCaseReducersByName[U] = N, b;
      }
    };
    f.forEach((U) => {
      const N = h[U], T = {
        reducerName: U,
        type: _m(_, U),
        createNotation: typeof c.reducers == "function"
      };
      fm(N) ? ym(T, N, b, i) : hm(T, N, b);
    });
    function v() {
      if (process.env.NODE_ENV !== "production" && typeof c.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? it(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [U = {}, N = [], T = void 0] = typeof c.extraReducers == "function" ? Ms(c.extraReducers) : [c.extraReducers], J = {
        ...U,
        ...g.sliceCaseReducersByType
      };
      return tm(c.initialState, (V) => {
        for (let B in J)
          V.addCase(B, J[B]);
        for (let B of g.sliceMatchers)
          V.addMatcher(B.matcher, B.reducer);
        for (let B of N)
          V.addMatcher(B.matcher, B.reducer);
        T && V.addDefaultCase(T);
      });
    }
    const C = (U) => U, w = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new WeakMap();
    let j;
    function A(U, N) {
      return j || (j = v()), j(U, N);
    }
    function O() {
      return j || (j = v()), j.getInitialState();
    }
    function X(U, N = !1) {
      function T(V) {
        let B = V[U];
        if (typeof B > "u") {
          if (N)
            B = na(I, T, O);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? it(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return B;
      }
      function J(V = C) {
        const B = na(w, N, () => /* @__PURE__ */ new WeakMap());
        return na(B, V, () => {
          const G = {};
          for (const [F, Q] of Object.entries(c.selectors ?? {}))
            G[F] = mm(Q, V, () => na(I, V, O), N);
          return G;
        });
      }
      return {
        reducerPath: U,
        getSelectors: J,
        get selectors() {
          return J(T);
        },
        selectSlice: T
      };
    }
    const W = {
      name: _,
      reducer: A,
      actions: g.actionCreators,
      caseReducers: g.sliceCaseReducersByName,
      getInitialState: O,
      ...X(m),
      injectInto(U, {
        reducerPath: N,
        ...T
      } = {}) {
        const J = N ?? m;
        return U.inject({
          reducerPath: J,
          reducer: A
        }, T), {
          ...W,
          ...X(J, !0)
        };
      }
    };
    return W;
  };
}
function mm(t, i, a, o) {
  function c(_, ...m) {
    let h = i(_);
    if (typeof h > "u") {
      if (o)
        h = a();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? it(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(h, ...m);
  }
  return c.unwrapped = t, c;
}
var Yt = /* @__PURE__ */ um();
function pm() {
  function t(i, a) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: i,
      ...a
    };
  }
  return t.withTypes = () => t, {
    reducer(i) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [i.name](...a) {
          return i(...a);
        }
      }[i.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(i, a) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: i,
        reducer: a
      };
    },
    asyncThunk: t
  };
}
function hm({
  type: t,
  reducerName: i,
  createNotation: a
}, o, c) {
  let _, m;
  if ("reducer" in o) {
    if (a && !gm(o))
      throw new Error(process.env.NODE_ENV === "production" ? it(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    _ = o.reducer, m = o.prepare;
  } else
    _ = o;
  c.addCase(t, _).exposeCaseReducer(i, _).exposeAction(i, m ? Nn(t, m) : Nn(t));
}
function fm(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function gm(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function ym({
  type: t,
  reducerName: i
}, a, o, c) {
  if (!c)
    throw new Error(process.env.NODE_ENV === "production" ? it(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: _,
    fulfilled: m,
    pending: h,
    rejected: f,
    settled: g,
    options: b
  } = a, v = c(t, _, b);
  o.exposeAction(i, v), m && o.addCase(v.fulfilled, m), h && o.addCase(v.pending, h), f && o.addCase(v.rejected, f), g && o.addMatcher(v.settled, g), o.exposeCaseReducer(i, {
    fulfilled: m || ra,
    pending: h || ra,
    rejected: f || ra,
    settled: g || ra
  });
}
function ra() {
}
function it(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var Er = { exports: {} }, nr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function bm() {
  if (ts) return nr;
  ts = 1;
  var t = Fe;
  function i(f, g) {
    return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
  }
  var a = typeof Object.is == "function" ? Object.is : i, o = t.useSyncExternalStore, c = t.useRef, _ = t.useEffect, m = t.useMemo, h = t.useDebugValue;
  return nr.useSyncExternalStoreWithSelector = function(f, g, b, v, C) {
    var w = c(null);
    if (w.current === null) {
      var I = { hasValue: !1, value: null };
      w.current = I;
    } else I = w.current;
    w = m(
      function() {
        function A(N) {
          if (!O) {
            if (O = !0, X = N, N = v(N), C !== void 0 && I.hasValue) {
              var T = I.value;
              if (C(T, N))
                return W = T;
            }
            return W = N;
          }
          if (T = W, a(X, N)) return T;
          var J = v(N);
          return C !== void 0 && C(T, J) ? (X = N, T) : (X = N, W = J);
        }
        var O = !1, X, W, U = b === void 0 ? null : b;
        return [
          function() {
            return A(g());
          },
          U === null ? void 0 : function() {
            return A(U());
          }
        ];
      },
      [g, b, v, C]
    );
    var j = o(f, w[0], w[1]);
    return _(
      function() {
        I.hasValue = !0, I.value = j;
      },
      [j]
    ), h(j), j;
  }, nr;
}
var ar = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function vm() {
  return is || (is = 1, process.env.NODE_ENV !== "production" && function() {
    function t(f, g) {
      return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Fe, a = typeof Object.is == "function" ? Object.is : t, o = i.useSyncExternalStore, c = i.useRef, _ = i.useEffect, m = i.useMemo, h = i.useDebugValue;
    ar.useSyncExternalStoreWithSelector = function(f, g, b, v, C) {
      var w = c(null);
      if (w.current === null) {
        var I = { hasValue: !1, value: null };
        w.current = I;
      } else I = w.current;
      w = m(
        function() {
          function A(N) {
            if (!O) {
              if (O = !0, X = N, N = v(N), C !== void 0 && I.hasValue) {
                var T = I.value;
                if (C(T, N))
                  return W = T;
              }
              return W = N;
            }
            if (T = W, a(X, N))
              return T;
            var J = v(N);
            return C !== void 0 && C(T, J) ? (X = N, T) : (X = N, W = J);
          }
          var O = !1, X, W, U = b === void 0 ? null : b;
          return [
            function() {
              return A(g());
            },
            U === null ? void 0 : function() {
              return A(U());
            }
          ];
        },
        [g, b, v, C]
      );
      var j = o(f, w[0], w[1]);
      return _(
        function() {
          I.hasValue = !0, I.value = j;
        },
        [j]
      ), h(j), j;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ar;
}
process.env.NODE_ENV === "production" ? Er.exports = bm() : Er.exports = vm();
var xm = Er.exports, rr = /* @__PURE__ */ Symbol.for("react-redux-context"), or = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function wm() {
  if (!Oi.createContext) return {};
  const t = or[rr] ?? (or[rr] = /* @__PURE__ */ new Map());
  let i = t.get(Oi.createContext);
  return i || (i = Oi.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (i.displayName = "ReactRedux"), t.set(Oi.createContext, i)), i;
}
var Xi = /* @__PURE__ */ wm();
function Fr(t = Xi) {
  return function() {
    const a = Oi.useContext(t);
    if (process.env.NODE_ENV !== "production" && !a)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return a;
  };
}
var Os = /* @__PURE__ */ Fr();
function Rs(t = Xi) {
  const i = t === Xi ? Os : (
    // @ts-ignore
    Fr(t)
  ), a = () => {
    const { store: o } = i();
    return o;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var km = /* @__PURE__ */ Rs();
function Cm(t = Xi) {
  const i = t === Xi ? km : Rs(t), a = () => i().dispatch;
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var dn = /* @__PURE__ */ Cm(), Sm = (t, i) => t === i;
function zm(t = Xi) {
  const i = t === Xi ? Os : Fr(t), a = (o, c = {}) => {
    const { equalityFn: _ = Sm } = typeof c == "function" ? { equalityFn: c } : c;
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("You must pass a selector to useSelector");
      if (typeof o != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof _ != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const m = i(), { store: h, subscription: f, getServerState: g } = m, b = Oi.useRef(!0), v = Oi.useCallback(
      {
        [o.name](w) {
          const I = o(w);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: j = {} } = typeof c == "function" ? {} : c, { identityFunctionCheck: A, stabilityCheck: O } = m, {
              identityFunctionCheck: X,
              stabilityCheck: W
            } = {
              stabilityCheck: O,
              identityFunctionCheck: A,
              ...j
            };
            if (W === "always" || W === "once" && b.current) {
              const U = o(w);
              if (!_(I, U)) {
                let N;
                try {
                  throw new Error();
                } catch (T) {
                  ({ stack: N } = T);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: w,
                    selected: I,
                    selected2: U,
                    stack: N
                  }
                );
              }
            }
            if ((X === "always" || X === "once" && b.current) && I === w) {
              let U;
              try {
                throw new Error();
              } catch (N) {
                ({ stack: U } = N);
              }
              console.warn(
                "Selector " + (o.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: U }
              );
            }
            b.current && (b.current = !1);
          }
          return I;
        }
      }[o.name],
      [o]
    ), C = xm.useSyncExternalStoreWithSelector(
      f.addNestedSub,
      h.getState,
      g || h.getState,
      v,
      _
    );
    return Oi.useDebugValue(C), C;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var ni = /* @__PURE__ */ zm();
const jm = {
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
}, sr = zt(
  "user/login",
  async (t) => {
    const i = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!i.ok)
      throw new Error("Login failed");
    return i.json();
  }
), Nm = zt(
  "user/logout",
  async () => {
    await fetch("/api/auth/logout", { method: "POST" });
  }
), lr = zt(
  "user/updateProfile",
  async (t) => {
    const i = await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!i.ok)
      throw new Error("Profile update failed");
    return i.json();
  }
), cr = zt(
  "user/updatePreferences",
  async (t) => {
    const i = await fetch("/api/user/preferences", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!i.ok)
      throw new Error("Preferences update failed");
    return i.json();
  }
), Bs = Yt({
  name: "user",
  initialState: jm,
  reducers: {
    // Authentication actions
    clearAuthError: (t) => {
      t.authError = null;
    },
    // Session actions
    updateLastActivity: (t) => {
      t.lastActivity = Date.now();
    },
    setSessionExpiry: (t, i) => {
      t.sessionExpiry = i.payload;
    },
    // Quick preference updates (for immediate UI feedback)
    toggleChatEnabled: (t) => {
      t.preferences.chatEnabled = !t.preferences.chatEnabled;
    },
    toggleProfanityFilter: (t) => {
      t.preferences.profanityFilter = !t.preferences.profanityFilter;
    },
    setPrivacyLevel: (t, i) => {
      t.preferences.privacyLevel = i.payload;
    },
    // Clear all user data (for logout)
    clearUserData: (t) => {
      t.isAuthenticated = !1, t.profile = null, t.authError = null, t.profileError = null, t.preferencesError = null, t.sessionExpiry = null;
    }
  },
  extraReducers: (t) => {
    t.addCase(sr.pending, (i) => {
      i.isLoading = !0, i.authError = null;
    }).addCase(sr.fulfilled, (i, a) => {
      i.isLoading = !1, i.isAuthenticated = !0, i.profile = a.payload.user, i.sessionExpiry = a.payload.sessionExpiry;
    }).addCase(sr.rejected, (i, a) => {
      i.isLoading = !1, i.authError = a.error.message || "Login failed";
    }), t.addCase(Nm.fulfilled, (i) => {
      i.isAuthenticated = !1, i.profile = null, i.sessionExpiry = null;
    }), t.addCase(lr.pending, (i) => {
      i.profileLoading = !0, i.profileError = null;
    }).addCase(
      lr.fulfilled,
      (i, a) => {
        i.profileLoading = !1, i.profile && (i.profile = {
          ...i.profile,
          ...a.payload
        });
      }
    ).addCase(
      lr.rejected,
      (i, a) => {
        i.profileLoading = !1, i.profileError = a.error.message || "Profile update failed";
      }
    ), t.addCase(cr.pending, (i) => {
      i.preferencesLoading = !0, i.preferencesError = null;
    }).addCase(
      cr.fulfilled,
      (i, a) => {
        i.preferencesLoading = !1, i.preferences = {
          ...i.preferences,
          ...a.payload
        };
      }
    ).addCase(
      cr.rejected,
      (i, a) => {
        i.preferencesLoading = !1, i.preferencesError = a.error.message || "Preferences update failed";
      }
    );
  }
}), {
  clearAuthError: sC,
  updateLastActivity: lC,
  setSessionExpiry: cC,
  toggleChatEnabled: dC,
  toggleProfanityFilter: _C,
  setPrivacyLevel: uC,
  clearUserData: mC
} = Bs.actions, Fs = Bs.reducer, Tm = {
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
}, Ds = Yt({
  name: "ui",
  initialState: Tm,
  reducers: {
    // Global UI actions
    setGlobalLoading: (t, i) => {
      t.isLoading = i.payload;
    },
    setGlobalError: (t, i) => {
      t.globalError = i.payload;
    },
    clearGlobalError: (t) => {
      t.globalError = null;
    },
    // Drag and drop actions
    startDrag: (t, i) => {
      t.dragState.isDragging = !0, t.dragState.draggedItem = i.payload.item, t.dragState.dropZone = i.payload.dropZone || null;
    },
    endDrag: (t) => {
      t.dragState.isDragging = !1, t.dragState.draggedItem = null, t.dragState.dropZone = null;
    },
    setDropZone: (t, i) => {
      t.dragState.dropZone = i.payload;
    },
    // Table actions
    initializeTable: (t, i) => {
      const { tableId: a, config: o = {} } = i.payload;
      t.tables[a] = {
        sorting: { field: null, direction: "asc" },
        filters: {},
        searchTerm: "",
        selectedRows: [],
        expandedRows: [],
        editingCell: null,
        currentPage: 1,
        pageSize: 10,
        ...o
      };
    },
    updateTableSorting: (t, i) => {
      const { tableId: a, field: o, direction: c } = i.payload;
      t.tables[a] && (t.tables[a].sorting = {
        field: o,
        direction: c
      });
    },
    updateTableFilters: (t, i) => {
      const { tableId: a, filters: o } = i.payload;
      t.tables[a] && (t.tables[a].filters = {
        ...t.tables[a].filters,
        ...o
      });
    },
    setTableSearchTerm: (t, i) => {
      const { tableId: a, searchTerm: o } = i.payload;
      t.tables[a] && (t.tables[a].searchTerm = o);
    },
    toggleTableRowSelection: (t, i) => {
      const { tableId: a, rowId: o } = i.payload;
      if (t.tables[a]) {
        const c = t.tables[a].selectedRows, _ = c.indexOf(o);
        _ > -1 ? c.splice(_, 1) : c.push(o);
      }
    },
    // Form actions
    initializeForm: (t, i) => {
      const { formId: a, initialData: o = {} } = i.payload;
      t.forms[a] = {
        data: o,
        errors: {},
        touched: {},
        isSubmitting: !1,
        isDirty: !1,
        isValid: !0
      };
    },
    updateForms: (t, i) => {
      const { formId: a, field: o, value: c } = i.payload;
      t.forms[a] && (t.forms[a].data[o] = c, t.forms[a].touched[o] = !0, t.forms[a].isDirty = !0);
    },
    setFormError: (t, i) => {
      const { formId: a, field: o, error: c } = i.payload;
      t.forms[a] && (t.forms[a].errors[o] = c, t.forms[a].isValid = Object.keys(t.forms[a].errors).length === 0);
    },
    clearFormErrors: (t, i) => {
      const { formId: a, field: o } = i.payload;
      t.forms[a] && (o ? delete t.forms[a].errors[o] : t.forms[a].errors = {}, t.forms[a].isValid = Object.keys(t.forms[a].errors).length === 0);
    },
    setFormSubmitting: (t, i) => {
      const { formId: a, isSubmitting: o } = i.payload;
      t.forms[a] && (t.forms[a].isSubmitting = o);
    },
    // Generic component actions
    setComponentState: (t, i) => {
      const { componentId: a, updates: o } = i.payload;
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
        ...o
      };
    },
    // Input actions
    setInputValue: (t, i) => {
      const {
        inputId: a,
        value: o,
        error: c = null
      } = i.payload;
      t.inputs[a] = {
        ...t.inputs[a],
        value: o,
        error: c,
        isValid: !c
      };
    },
    setInputFocus: (t, i) => {
      const { inputId: a, isFocused: o } = i.payload;
      t.inputs[a] || (t.inputs[a] = {
        value: "",
        error: null,
        isFocused: !1,
        isValid: !0
      }), t.inputs[a].isFocused = o;
    },
    // Switch actions
    setSwitchState: (t, i) => {
      const {
        switchId: a,
        checked: o,
        disabled: c = !1
      } = i.payload;
      t.switches[a] = { checked: o, disabled: c };
    },
    // Media actions
    setMediaState: (t, i) => {
      const { mediaId: a, updates: o } = i.payload;
      t.media[a] || (t.media[a] = {
        isLoading: !1,
        hasError: !1,
        isPlaying: !1,
        hasLoaded: !1
      }), t.media[a] = {
        ...t.media[a],
        ...o
      };
    },
    // Chart actions
    initializeChart: (t, i) => {
      const {
        chartId: a,
        selectedSeries: o,
        isInteractive: c = !0,
        allowMultiSelect: _ = !0
      } = i.payload;
      t.charts[a] = {
        selectedSeries: o,
        searchTerm: "",
        isInteractive: c,
        allowMultiSelect: _
      };
    },
    setChartSelectedSeries: (t, i) => {
      const { chartId: a, selectedSeries: o } = i.payload;
      t.charts[a] && (t.charts[a].selectedSeries = o);
    },
    setChartSearchTerm: (t, i) => {
      const { chartId: a, searchTerm: o } = i.payload;
      t.charts[a] && (t.charts[a].searchTerm = o);
    },
    toggleChartSeries: (t, i) => {
      const { chartId: a, seriesId: o } = i.payload;
      if (t.charts[a]) {
        const c = t.charts[a], _ = c.selectedSeries.includes(o);
        c.allowMultiSelect ? _ ? c.selectedSeries = c.selectedSeries.filter(
          (m) => m !== o
        ) : c.selectedSeries = [
          ...c.selectedSeries,
          o
        ] : c.selectedSeries = _ ? [] : [o];
      }
    },
    selectAllChartSeries: (t, i) => {
      const { chartId: a, allSeriesIds: o } = i.payload;
      if (t.charts[a]) {
        const c = t.charts[a], _ = o.every(
          (m) => c.selectedSeries.includes(m)
        );
        c.selectedSeries = _ ? [] : o;
      }
    },
    // Notification component actions
    setNotificationState: (t, i) => {
      const { notificationId: a, updates: o } = i.payload;
      t.notifications[a] || (t.notifications[a] = {
        isVisible: !1,
        isPaused: !1,
        progress: 100
      }), t.notifications[a] = {
        ...t.notifications[a],
        ...o
      };
    },
    // Select component actions
    setSelectState: (t, i) => {
      const { selectId: a, updates: o } = i.payload;
      t.selects[a] || (t.selects[a] = {
        internalValue: "",
        isOpen: !1,
        searchValue: "",
        focusedIndex: -1
      }), t.selects[a] = {
        ...t.selects[a],
        ...o
      };
    },
    // Radio component actions
    setRadioState: (t, i) => {
      const { radioId: a, updates: o } = i.payload;
      t.radios[a] || (t.radios[a] = {
        internalValue: void 0
      }), t.radios[a] = {
        ...t.radios[a],
        ...o
      };
    },
    // Map component actions
    setMapState: (t, i) => {
      const { mapId: a, updates: o } = i.payload;
      t.maps[a] || (t.maps[a] = {
        currentZoom: 1,
        currentCenter: { lat: 0, lng: 0 }
      }), t.maps[a] = {
        ...t.maps[a],
        ...o
      };
    },
    // Card component actions
    setCardState: (t, i) => {
      const { cardId: a, updates: o } = i.payload;
      t.cards[a] || (t.cards[a] = {
        isHovered: !1
      }), t.cards[a] = {
        ...t.cards[a],
        ...o
      };
    },
    // Range component actions
    setRangeState: (t, i) => {
      const { rangeId: a, updates: o } = i.payload;
      t.ranges[a] || (t.ranges[a] = {
        value: 0,
        isDragging: !1,
        showTooltip: !1
      }), t.ranges[a] = {
        ...t.ranges[a],
        ...o
      };
    },
    // Chat component actions
    setChatState: (t, i) => {
      const { chatId: a, updates: o } = i.payload;
      t.chats[a] || (t.chats[a] = {
        inputValue: ""
      }), t.chats[a] = {
        ...t.chats[a],
        ...o
      };
    },
    // Cleanup actions
    cleanupComponent: (t, i) => {
      const a = i.payload;
      delete t.components[a], delete t.inputs[a], delete t.switches[a], delete t.media[a], delete t.charts[a], delete t.notifications[a], delete t.selects[a], delete t.radios[a], delete t.maps[a], delete t.cards[a], delete t.ranges[a], delete t.chats[a];
    },
    cleanupForm: (t, i) => {
      const a = i.payload;
      delete t.forms[a];
    },
    cleanupTable: (t, i) => {
      const a = i.payload;
      delete t.tables[a];
    },
    cleanupChart: (t, i) => {
      const a = i.payload;
      delete t.charts[a];
    }
  }
}), {
  setGlobalLoading: pC,
  setGlobalError: hC,
  clearGlobalError: fC,
  startDrag: gC,
  endDrag: yC,
  setDropZone: bC,
  initializeTable: vC,
  updateTableSorting: xC,
  updateTableFilters: wC,
  setTableSearchTerm: kC,
  toggleTableRowSelection: CC,
  initializeForm: SC,
  updateForms: zC,
  setFormError: jC,
  clearFormErrors: NC,
  setFormSubmitting: TC,
  setComponentState: zn,
  setInputValue: PC,
  setInputFocus: EC,
  setSwitchState: IC,
  setMediaState: dr,
  setNotificationState: LC,
  setSelectState: AC,
  setRadioState: MC,
  setMapState: Pm,
  setCardState: OC,
  setRangeState: RC,
  setChatState: BC,
  initializeChart: Em,
  setChartSelectedSeries: Im,
  setChartSearchTerm: Lm,
  toggleChartSeries: Am,
  selectAllChartSeries: Mm,
  cleanupComponent: Dr,
  cleanupForm: FC,
  cleanupTable: DC,
  cleanupChart: Om
} = Ds.actions, Rm = (t) => (i) => i.ui.components[t], Bm = (t) => (i) => i.ui.media[t], Fm = (t) => (i) => i.ui.maps[t], Dm = (t) => (i) => {
  var a;
  return ((a = i.ui.charts[t]) == null ? void 0 : a.selectedSeries) || [];
}, $m = (t) => (i) => {
  var a;
  return ((a = i.ui.charts[t]) == null ? void 0 : a.searchTerm) || "";
}, $s = Ds.reducer, Wm = [
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
], Um = {
  // Current theme
  currentTheme: "light",
  previousTheme: null,
  // Theme system
  systemPreference: "light",
  followSystem: !1,
  // Available themes
  availableThemes: Wm,
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
}, Ws = Yt({
  name: "theme",
  initialState: Um,
  reducers: {
    // Theme selection
    setTheme: (t, i) => {
      t.previousTheme = t.currentTheme, t.currentTheme = i.payload;
    },
    setSystemPreference: (t, i) => {
      t.systemPreference = i.payload, t.followSystem && (t.previousTheme = t.currentTheme, t.currentTheme = i.payload);
    },
    setFollowSystem: (t, i) => {
      t.followSystem = i.payload, i.payload && (t.previousTheme = t.currentTheme, t.currentTheme = t.systemPreference);
    },
    // Theme management
    addCustomTheme: (t, i) => {
      const a = t.customThemes.findIndex(
        (o) => o.id === i.payload.id
      );
      a >= 0 ? t.customThemes[a] = i.payload : t.customThemes.push(i.payload);
    },
    removeCustomTheme: (t, i) => {
      t.customThemes = t.customThemes.filter(
        (a) => a.id !== i.payload
      ), t.currentTheme === i.payload && (t.currentTheme = "light");
    },
    // Palette management
    setPalette: (t, i) => {
      t.currentPalette = i.payload;
    },
    addCustomPalette: (t, i) => {
      const a = t.customPalettes.findIndex(
        (o) => o.id === i.payload.id
      );
      a >= 0 ? t.customPalettes[a] = i.payload : t.customPalettes.push(i.payload);
    },
    removeCustomPalette: (t, i) => {
      t.customPalettes = t.customPalettes.filter(
        (a) => a.id !== i.payload
      ), t.currentPalette === i.payload && (t.currentPalette = null);
    },
    // Theme customization
    updateCustomization: (t, i) => {
      t.customization = {
        ...t.customization,
        ...i.payload
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
    updateAccessibility: (t, i) => {
      t.accessibility = {
        ...t.accessibility,
        ...i.payload
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
    setLoading: (t, i) => {
      t.isLoading = i.payload;
    },
    setError: (t, i) => {
      t.error = i.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    // Quick theme toggles
    toggleTheme: (t) => {
      const i = t.currentTheme;
      i === "light" ? (t.previousTheme = i, t.currentTheme = "dark") : i === "dark" && (t.previousTheme = i, t.currentTheme = "light");
    },
    revertTheme: (t) => {
      if (t.previousTheme) {
        const i = t.currentTheme;
        t.currentTheme = t.previousTheme, t.previousTheme = i;
      }
    }
  }
}), {
  setTheme: $C,
  setSystemPreference: WC,
  setFollowSystem: UC,
  addCustomTheme: ZC,
  removeCustomTheme: HC,
  setPalette: VC,
  addCustomPalette: GC,
  removeCustomPalette: KC,
  updateCustomization: qC,
  resetCustomization: YC,
  updateAccessibility: JC,
  toggleHighContrast: XC,
  toggleReducedMotion: QC,
  toggleLargeText: eS,
  toggleFocusRings: tS,
  setLoading: iS,
  setError: nS,
  clearError: aS,
  toggleTheme: rS,
  revertTheme: oS
} = Ws.actions, Us = Ws.reducer, Zm = {
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
}, _r = zt(
  "socket/connect",
  async (t) => {
    const { url: i, options: a = {} } = t;
    return new Promise((o, c) => {
      setTimeout(() => {
        o({
          socketId: `socket-${Date.now()}`,
          url: i,
          connectTime: Date.now()
        });
      }, 1e3);
    });
  }
), Hm = zt(
  "socket/disconnect",
  async () => new Promise(
    (t) => {
      setTimeout(() => {
        t({ disconnectTime: Date.now() });
      }, 500);
    }
  )
), ur = zt(
  "socket/sendMessage",
  async (t) => {
    const i = {
      id: `msg-${Date.now()}`,
      type: t.type,
      data: t.data,
      timestamp: Date.now(),
      acknowledged: !1
    };
    return await new Promise(
      (a) => setTimeout(a, 100)
    ), { ...i, acknowledged: !0 };
  }
), Zs = Yt({
  name: "socket",
  initialState: Zm,
  reducers: {
    // Connection management
    setConnecting: (t, i) => {
      t.isConnecting = i.payload;
    },
    setConnectionError: (t, i) => {
      t.connectionError = i.payload;
    },
    clearConnectionError: (t) => {
      t.connectionError = null;
    },
    // Message handling
    receiveMessage: (t, i) => {
      const a = i.payload;
      t.messages.push(a), t.messageHistory.push(a), t.stats.messagesReceived += 1, t.messageHistory.length > t.maxMessageHistory && (t.messageHistory = t.messageHistory.slice(
        -t.maxMessageHistory
      ));
    },
    acknowledgeMessage: (t, i) => {
      const a = i.payload, o = t.messages.find(
        (_) => _.id === a
      );
      o && (o.acknowledged = !0);
      const c = t.pendingMessages.find(
        (_) => _.id === a
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
    registerEvent: (t, i) => {
      const { type: a, handler: o } = i.payload, c = t.registeredEvents.find(
        (_) => _.type === a
      );
      c ? (c.handler = o, c.active = !0) : t.registeredEvents.push({
        type: a,
        handler: o,
        active: !0
      });
    },
    unregisterEvent: (t, i) => {
      const a = i.payload, o = t.registeredEvents.findIndex(
        (c) => c.type === a
      );
      o >= 0 && t.registeredEvents.splice(o, 1);
    },
    toggleEvent: (t, i) => {
      const a = i.payload, o = t.registeredEvents.find(
        (c) => c.type === a
      );
      o && (o.active = !o.active);
    },
    // Settings
    updateSettings: (t, i) => {
      const {
        autoReconnect: a,
        maxReconnectAttempts: o,
        reconnectDelay: c,
        heartbeatInterval: _,
        maxMessageHistory: m
      } = i.payload;
      a !== void 0 && (t.autoReconnect = a), o !== void 0 && (t.maxReconnectAttempts = o), c !== void 0 && (t.reconnectDelay = c), _ !== void 0 && (t.heartbeatInterval = _), m !== void 0 && (t.maxMessageHistory = m);
    },
    // Heartbeat
    updateHeartbeat: (t) => {
      t.lastHeartbeat = Date.now();
    },
    // Statistics
    incrementReconnectCount: (t) => {
      t.stats.reconnectCount += 1;
    },
    updateUptime: (t, i) => {
      t.stats.totalUptime = i.payload;
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
    t.addCase(_r.pending, (i) => {
      i.isConnecting = !0, i.connectionError = null;
    }).addCase(_r.fulfilled, (i, a) => {
      i.isConnecting = !1, i.isConnected = !0, i.socketId = a.payload.socketId, i.url = a.payload.url, i.stats.connectTime = a.payload.connectTime, i.reconnectAttempts = 0;
    }).addCase(_r.rejected, (i, a) => {
      i.isConnecting = !1, i.isConnected = !1, i.connectionError = a.error.message || "Connection failed", i.reconnectAttempts += 1;
    }), t.addCase(
      Hm.fulfilled,
      (i, a) => {
        i.isConnected = !1, i.isConnecting = !1, i.socketId = null, i.url = null, i.stats.connectTime && (i.stats.totalUptime += a.payload.disconnectTime - i.stats.connectTime), i.stats.connectTime = null;
      }
    ), t.addCase(ur.pending, (i, a) => {
      const o = {
        id: `temp-${Date.now()}`,
        type: a.meta.arg.type,
        data: a.meta.arg.data,
        timestamp: Date.now(),
        acknowledged: !1
      };
      i.pendingMessages.push(o);
    }).addCase(ur.fulfilled, (i, a) => {
      i.pendingMessages = i.pendingMessages.filter(
        (o) => o.id !== a.payload.id
      ), i.stats.messagesSent += 1;
    }).addCase(ur.rejected, (i, a) => {
      i.connectionError = a.error.message || "Failed to send message";
    });
  }
}), {
  setConnecting: sS,
  setConnectionError: lS,
  clearConnectionError: cS,
  receiveMessage: dS,
  acknowledgeMessage: _S,
  clearMessages: uS,
  clearMessageHistory: mS,
  registerEvent: pS,
  unregisterEvent: hS,
  toggleEvent: fS,
  updateSettings: gS,
  updateHeartbeat: yS,
  incrementReconnectCount: bS,
  updateUptime: vS,
  resetStats: xS,
  resetReconnectAttempts: wS
} = Zs.actions, Hs = Zs.reducer, Vm = {
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
}, mr = zt(
  "game/createSession",
  async (t) => {
    const i = await fetch("/api/game/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!i.ok)
      throw new Error("Failed to create game session");
    return i.json();
  }
), Gm = zt(
  "game/joinSession",
  async (t) => {
    const i = await fetch(
      `/api/game/session/${t}/join`,
      {
        method: "POST"
      }
    );
    if (!i.ok)
      throw new Error("Failed to join game session");
    return i.json();
  }
), pr = zt(
  "game/fetchMatches",
  async (t = {}) => {
    const i = await fetch(
      `/api/game/matches?limit=${t.limit || 20}&offset=${t.offset || 0}`
    );
    if (!i.ok)
      throw new Error("Failed to fetch matches");
    return i.json();
  }
), hr = zt(
  "game/fetchLeaderboard",
  async (t) => {
    const i = await fetch(
      `/api/game/leaderboard/${t}`
    );
    if (!i.ok)
      throw new Error("Failed to fetch leaderboard");
    return { gameType: t, data: await i.json() };
  }
), fr = zt(
  "game/fetchAchievements",
  async () => {
    const t = await fetch("/api/game/achievements");
    if (!t.ok)
      throw new Error("Failed to fetch achievements");
    return t.json();
  }
), Vs = Yt({
  name: "game",
  initialState: Vm,
  reducers: {
    // Session management
    updateSession: (t, i) => {
      t.currentSession && (t.currentSession = {
        ...t.currentSession,
        ...i.payload
      });
    },
    endSession: (t) => {
      t.currentSession && (t.currentSession.status = "completed", t.currentSession.endTime = Date.now());
    },
    clearSession: (t) => {
      t.currentSession = null;
    },
    // Player management
    updatePlayer: (t, i) => {
      if (t.currentSession) {
        const a = t.currentSession.players.find(
          (o) => o.id === i.payload.playerId
        );
        a && Object.assign(a, i.payload.updates);
      }
    },
    setPlayerReady: (t, i) => {
      if (t.currentSession) {
        const a = t.currentSession.players.find(
          (o) => o.id === i.payload.playerId
        );
        a && (a.isReady = i.payload.ready);
      }
    },
    // Achievements
    unlockAchievement: (t, i) => {
      const a = t.achievements.find(
        (o) => o.id === i.payload
      );
      a && !a.unlocked && (a.unlocked = !0, a.unlockedAt = Date.now(), a.progress = a.maxProgress);
    },
    updateAchievementProgress: (t, i) => {
      const a = t.achievements.find(
        (o) => o.id === i.payload.achievementId
      );
      a && !a.unlocked && (a.progress = Math.min(
        i.payload.progress,
        a.maxProgress
      ), a.progress >= a.maxProgress && (a.unlocked = !0, a.unlockedAt = Date.now()));
    },
    // Statistics
    updatePlayerStats: (t, i) => {
      t.playerStats = {
        ...t.playerStats,
        ...i.payload
      };
    },
    incrementGameCount: (t) => {
      t.playerStats.totalGames += 1;
    },
    recordWin: (t, i) => {
      t.playerStats.totalWins += 1, t.playerStats.winRate = t.playerStats.totalWins / t.playerStats.totalGames, t.playerStats.streaks.current += 1, t.playerStats.streaks.best = Math.max(
        t.playerStats.streaks.current,
        t.playerStats.streaks.best
      ), i.payload.score > t.playerStats.bestScore && (t.playerStats.bestScore = i.payload.score);
      const a = t.playerStats.averageScore * (t.playerStats.totalGames - 1) + i.payload.score;
      t.playerStats.averageScore = a / t.playerStats.totalGames;
    },
    recordLoss: (t) => {
      t.playerStats.totalLosses += 1, t.playerStats.winRate = t.playerStats.totalWins / t.playerStats.totalGames, t.playerStats.streaks.current = 0;
    },
    // Preferences
    updatePreferences: (t, i) => {
      t.preferences = {
        ...t.preferences,
        ...i.payload
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
    setDifficulty: (t, i) => {
      t.preferences.difficulty = i.payload;
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
    t.addCase(mr.pending, (i) => {
      i.sessionLoading = !0, i.sessionError = null;
    }).addCase(
      mr.fulfilled,
      (i, a) => {
        i.sessionLoading = !1, i.currentSession = a.payload;
      }
    ).addCase(
      mr.rejected,
      (i, a) => {
        i.sessionLoading = !1, i.sessionError = a.error.message || "Failed to create session";
      }
    ), t.addCase(
      Gm.fulfilled,
      (i, a) => {
        i.currentSession = a.payload;
      }
    ), t.addCase(pr.pending, (i) => {
      i.matchesLoading = !0, i.matchesError = null;
    }).addCase(pr.fulfilled, (i, a) => {
      i.matchesLoading = !1, i.matches = a.payload;
    }).addCase(pr.rejected, (i, a) => {
      i.matchesLoading = !1, i.matchesError = a.error.message || "Failed to fetch matches";
    }), t.addCase(hr.pending, (i) => {
      i.leaderboardsLoading = !0, i.leaderboardsError = null;
    }).addCase(
      hr.fulfilled,
      (i, a) => {
        i.leaderboardsLoading = !1, i.leaderboards[a.payload.gameType] = a.payload.data;
      }
    ).addCase(
      hr.rejected,
      (i, a) => {
        i.leaderboardsLoading = !1, i.leaderboardsError = a.error.message || "Failed to fetch leaderboard";
      }
    ), t.addCase(fr.pending, (i) => {
      i.achievementsLoading = !0, i.achievementsError = null;
    }).addCase(
      fr.fulfilled,
      (i, a) => {
        i.achievementsLoading = !1, i.achievements = a.payload;
      }
    ).addCase(
      fr.rejected,
      (i, a) => {
        i.achievementsLoading = !1, i.achievementsError = a.error.message || "Failed to fetch achievements";
      }
    );
  }
}), {
  updateSession: kS,
  endSession: CS,
  clearSession: SS,
  updatePlayer: zS,
  setPlayerReady: jS,
  unlockAchievement: NS,
  updateAchievementProgress: TS,
  updatePlayerStats: PS,
  incrementGameCount: ES,
  recordWin: IS,
  recordLoss: LS,
  updatePreferences: AS,
  toggleSound: MS,
  toggleMusic: OS,
  toggleAnimations: RS,
  setDifficulty: BS,
  clearSessionError: FS,
  clearMatchesError: DS,
  clearLeaderboardsError: $S,
  clearAchievementsError: WS
} = Vs.actions, Gs = Vs.reducer, Vi = {
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
}, gr = zt(
  "settings/load",
  async () => {
    const t = await fetch("/api/settings");
    if (!t.ok)
      throw new Error("Failed to load settings");
    return t.json();
  }
), yr = zt(
  "settings/save",
  async (t) => {
    const i = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    if (!i.ok)
      throw new Error("Failed to save settings");
    return i.json();
  }
), br = zt(
  "settings/sync",
  async () => {
    const t = await fetch("/api/settings/sync");
    if (!t.ok)
      throw new Error("Failed to sync settings");
    return t.json();
  }
), Ks = Yt({
  name: "settings",
  initialState: Vi,
  reducers: {
    // Notification settings
    updateNotificationSettings: (t, i) => {
      t.notifications = {
        ...t.notifications,
        ...i.payload
      }, t.lastUpdated = Date.now();
    },
    toggleNotifications: (t) => {
      t.notifications.enabled = !t.notifications.enabled, t.lastUpdated = Date.now();
    },
    // Privacy settings
    updatePrivacySettings: (t, i) => {
      t.privacy = {
        ...t.privacy,
        ...i.payload
      }, t.lastUpdated = Date.now();
    },
    setProfileVisibility: (t, i) => {
      t.privacy.profileVisibility = i.payload, t.lastUpdated = Date.now();
    },
    // Accessibility settings
    updateAccessibilitySettings: (t, i) => {
      t.accessibility = {
        ...t.accessibility,
        ...i.payload
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
    updatePerformanceSettings: (t, i) => {
      t.performance = {
        ...t.performance,
        ...i.payload
      }, t.lastUpdated = Date.now();
    },
    setGraphicsQuality: (t, i) => {
      t.performance.graphicsQuality = i.payload, t.lastUpdated = Date.now();
    },
    toggleAnimations: (t) => {
      t.performance.animationsEnabled = !t.performance.animationsEnabled, t.lastUpdated = Date.now();
    },
    // Security settings
    updateSecuritySettings: (t, i) => {
      t.security = {
        ...t.security,
        ...i.payload
      }, t.lastUpdated = Date.now();
    },
    toggleTwoFactorAuth: (t) => {
      t.security.twoFactorAuth = !t.security.twoFactorAuth, t.lastUpdated = Date.now();
    },
    setSessionTimeout: (t, i) => {
      t.security.sessionTimeout = i.payload, t.lastUpdated = Date.now();
    },
    // Localization
    setLanguage: (t, i) => {
      t.language = i.payload, t.lastUpdated = Date.now();
    },
    setTimezone: (t, i) => {
      t.timezone = i.payload, t.lastUpdated = Date.now();
    },
    setTimeFormat: (t, i) => {
      t.timeFormat = i.payload, t.lastUpdated = Date.now();
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
    updateStorageUsed: (t, i) => {
      t.storageUsed = i.payload;
    },
    updateCacheSize: (t, i) => {
      t.cacheSize = i.payload;
    },
    clearCache: (t) => {
      t.cacheSize = 0;
    },
    // Error handling
    setError: (t, i) => {
      t.error = i.payload;
    },
    setSyncError: (t, i) => {
      t.syncError = i.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    clearSyncError: (t) => {
      t.syncError = null;
    },
    // Reset settings
    resetToDefaults: (t) => {
      const { isLoading: i, isSyncing: a, error: o, syncError: c } = t;
      Object.assign(t, {
        ...Vi,
        isLoading: i,
        isSyncing: a,
        error: o,
        syncError: c,
        lastUpdated: Date.now()
      });
    },
    resetSection: (t, i) => {
      const a = i.payload;
      a === "notifications" ? t.notifications = Vi.notifications : a === "privacy" ? t.privacy = Vi.privacy : a === "accessibility" ? t.accessibility = Vi.accessibility : a === "performance" ? t.performance = Vi.performance : a === "security" && (t.security = Vi.security), t.lastUpdated = Date.now();
    }
  },
  extraReducers: (t) => {
    t.addCase(gr.pending, (i) => {
      i.isLoading = !0, i.error = null;
    }).addCase(gr.fulfilled, (i, a) => {
      i.isLoading = !1, Object.assign(i, a.payload), i.lastUpdated = Date.now();
    }).addCase(gr.rejected, (i, a) => {
      i.isLoading = !1, i.error = a.error.message || "Failed to load settings";
    }), t.addCase(yr.pending, (i) => {
      i.isLoading = !0, i.error = null;
    }).addCase(yr.fulfilled, (i) => {
      i.isLoading = !1, i.lastUpdated = Date.now();
    }).addCase(yr.rejected, (i, a) => {
      i.isLoading = !1, i.error = a.error.message || "Failed to save settings";
    }), t.addCase(br.pending, (i) => {
      i.isSyncing = !0, i.syncError = null;
    }).addCase(br.fulfilled, (i, a) => {
      i.isSyncing = !1, Object.assign(i, a.payload), i.lastSynced = Date.now();
    }).addCase(br.rejected, (i, a) => {
      i.isSyncing = !1, i.syncError = a.error.message || "Failed to sync settings";
    });
  }
}), {
  updateNotificationSettings: US,
  toggleNotifications: ZS,
  updatePrivacySettings: HS,
  setProfileVisibility: VS,
  updateAccessibilitySettings: GS,
  toggleHighContrast: KS,
  toggleLargeText: qS,
  toggleReducedMotion: YS,
  updatePerformanceSettings: JS,
  setGraphicsQuality: XS,
  toggleAnimations: QS,
  updateSecuritySettings: ez,
  toggleTwoFactorAuth: tz,
  setSessionTimeout: iz,
  setLanguage: nz,
  setTimezone: az,
  setTimeFormat: rz,
  toggleAutoSave: oz,
  toggleAutoSync: sz,
  toggleOfflineMode: lz,
  toggleDebugMode: cz,
  updateStorageUsed: dz,
  updateCacheSize: _z,
  clearCache: uz,
  setError: mz,
  setSyncError: pz,
  clearError: hz,
  clearSyncError: fz,
  resetToDefaults: gz,
  resetSection: yz
} = Ks.actions, qs = Ks.reducer, Km = {
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
}, Ai = Yt({
  name: "notifications",
  initialState: Km,
  reducers: {
    // Add notifications
    addNotification: (t, i) => {
      const a = {
        ...i.payload,
        id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
        read: !1,
        dismissed: !1
      };
      t.all.unshift(a), t.stats.total += 1, t.stats.unread += 1, a.type === "achievement" && (t.stats.achievements += 1), t.active.length < t.maxActive ? t.active.push(a) : t.queue.push(a);
    },
    // Quick notification creators
    addSuccess: (t, i) => {
      const { title: a, message: o, duration: c } = i.payload;
      Ai.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "success",
            title: a,
            message: o,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addError: (t, i) => {
      const {
        title: a,
        message: o,
        persistent: c = !1
      } = i.payload;
      Ai.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "error",
            title: a,
            message: o,
            persistent: c,
            duration: c ? void 0 : t.defaultDuration * 2
          }
        }
      );
    },
    addWarning: (t, i) => {
      const { title: a, message: o, duration: c } = i.payload;
      Ai.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "warning",
            title: a,
            message: o,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addInfo: (t, i) => {
      const { title: a, message: o, duration: c } = i.payload;
      Ai.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "info",
            title: a,
            message: o,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addAchievement: (t, i) => {
      const { title: a, message: o, icon: c, data: _ } = i.payload;
      Ai.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "achievement",
            title: a,
            message: o,
            icon: c,
            data: _,
            duration: 8e3,
            // Longer duration for achievements
            persistent: !1
          }
        }
      );
    },
    // Dismiss notifications
    dismissNotification: (t, i) => {
      const a = i.payload, o = t.active.findIndex(
        (_) => _.id === a
      );
      if (o >= 0 && (t.active.splice(o, 1), t.queue.length > 0)) {
        const _ = t.queue.shift();
        t.active.push(_);
      }
      const c = t.all.find(
        (_) => _.id === a
      );
      c && !c.dismissed && (c.dismissed = !0, t.stats.dismissed += 1);
    },
    dismissAll: (t) => {
      t.active.forEach((i) => {
        i.dismissed || (i.dismissed = !0, t.stats.dismissed += 1);
      }), t.active = [], t.queue.forEach((i) => {
        i.dismissed || (i.dismissed = !0, t.stats.dismissed += 1);
      }), t.queue = [];
    },
    // Mark as read
    markAsRead: (t, i) => {
      const a = i.payload, o = t.all.find(
        (c) => c.id === a
      );
      o && !o.read && (o.read = !0, t.stats.unread -= 1);
    },
    markAllAsRead: (t) => {
      t.all.forEach((i) => {
        i.read || (i.read = !0);
      }), t.stats.unread = 0;
    },
    // Handle notification actions
    executeAction: (t, i) => {
      const { notificationId: a } = i.payload, o = t.all.find(
        (c) => c.id === a
      );
      o && !o.read && (o.read = !0, t.stats.unread -= 1);
    },
    // Settings
    updateSettings: (t, i) => {
      const {
        soundEnabled: a,
        showAchievements: o,
        showSystem: c,
        showErrors: _,
        groupSimilar: m,
        maxActive: h,
        defaultDuration: f,
        position: g
      } = i.payload;
      a !== void 0 && (t.soundEnabled = a), o !== void 0 && (t.showAchievements = o), c !== void 0 && (t.showSystem = c), _ !== void 0 && (t.showErrors = _), m !== void 0 && (t.groupSimilar = m), h !== void 0 && (t.maxActive = h), f !== void 0 && (t.defaultDuration = f), g !== void 0 && (t.position = g);
    },
    toggleSound: (t) => {
      t.soundEnabled = !t.soundEnabled;
    },
    // Clear history
    clearHistory: (t) => {
      t.all = t.all.filter(
        (i) => t.active.includes(i) || t.queue.includes(i)
      ), t.stats.total = t.all.length, t.stats.unread = t.all.filter(
        (i) => !i.read
      ).length, t.stats.dismissed = t.all.filter(
        (i) => i.dismissed
      ).length, t.stats.achievements = t.all.filter(
        (i) => i.type === "achievement"
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
    removeByType: (t, i) => {
      const a = i.payload;
      t.active = t.active.filter(
        (m) => m.type !== a
      ), t.queue = t.queue.filter(
        (m) => m.type !== a
      );
      const o = t.all.filter(
        (m) => m.type === a
      ).length, c = t.all.filter(
        (m) => m.type === a && !m.read
      ).length, _ = a === "achievement" ? t.all.filter((m) => m.type === "achievement").length : 0;
      t.all = t.all.filter((m) => m.type !== a), t.stats.total -= o, t.stats.unread -= c, a === "achievement" && (t.stats.achievements -= _);
    },
    // Error handling
    setError: (t, i) => {
      t.error = i.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    setLoading: (t, i) => {
      t.isLoading = i.payload;
    },
    // Auto-dismiss expired notifications
    processExpiredNotifications: (t) => {
      const i = Date.now(), a = [];
      t.active.forEach((o) => {
        !o.persistent && o.duration && i - o.timestamp >= o.duration && a.push(o.id);
      }), a.forEach((o) => {
        Ai.caseReducers.dismissNotification(
          t,
          {
            type: "dismissNotification",
            payload: o
          }
        );
      });
    }
  }
}), {
  addNotification: bz,
  addSuccess: vz,
  addError: xz,
  addWarning: wz,
  addInfo: kz,
  addAchievement: Cz,
  dismissNotification: Sz,
  dismissAll: zz,
  markAsRead: jz,
  markAllAsRead: Nz,
  executeAction: Tz,
  updateSettings: Pz,
  toggleSound: Ez,
  clearHistory: Iz,
  clearAll: Lz,
  removeByType: Az,
  setError: Mz,
  clearError: Oz,
  setLoading: Rz,
  processExpiredNotifications: Bz
} = Ai.actions, Ys = Ai.reducer, qm = {
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
}, Ym = {
  sessions: {},
  activeSessionId: null,
  files: [],
  selectedFiles: [],
  globalConfig: qm,
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
}, vr = zt(
  "files/uploadFile",
  async (t) => {
    const { sessionId: i, fileId: a, file: o, config: c } = t;
    return new Promise((_, m) => {
      let h = 0;
      const f = setInterval(() => {
        h += Math.random() * 20, h >= 100 && (clearInterval(f), _({
          fileId: a,
          url: `https://example.com/files/${a}`,
          metadata: {
            originalName: o.name,
            mimeType: o.type,
            uploadedAt: Date.now()
          }
        }));
      }, 200);
    });
  }
), Jm = zt(
  "files/generateThumbnail",
  async (t) => {
    const { fileId: i, file: a } = t;
    return new Promise((o) => {
      setTimeout(() => {
        o({
          fileId: i,
          thumbnailUrl: `https://example.com/thumbnails/${i}`
        });
      }, 1e3);
    });
  }
), Xm = zt(
  "files/validateFiles",
  async (t) => {
    const { files: i, config: a } = t, o = {};
    return i.forEach((c, _) => {
      const m = [];
      c.size > a.maxSize && m.push(
        `File size exceeds maximum allowed size of ${a.maxSize / (1024 * 1024)}MB`
      ), a.allowedTypes.some(
        (f) => f.includes("*") ? c.type.startsWith(
          f.replace("*", "")
        ) : c.type === f || c.name.endsWith(f)
      ) || m.push(
        `File type ${c.type} is not allowed`
      ), m.length > 0 && (o[`file-${_}`] = m);
    }), o;
  }
), ua = Yt({
  name: "files",
  initialState: Ym,
  reducers: {
    // Session management
    createSession: (t, i) => {
      const { sessionId: a, config: o = {} } = i.payload;
      t.sessions[a] = {
        id: a,
        files: [],
        status: "idle",
        totalSize: 0,
        uploadedSize: 0,
        config: { ...t.globalConfig, ...o }
      }, t.activeSessionId = a;
    },
    removeSession: (t, i) => {
      const a = i.payload;
      delete t.sessions[a], t.activeSessionId === a && (t.activeSessionId = null);
    },
    setActiveSession: (t, i) => {
      t.activeSessionId = i.payload;
    },
    // File management
    addFiles: (t, i) => {
      const { sessionId: a, files: o } = i.payload, c = t.sessions[a];
      if (c) {
        const _ = o.map((m) => ({
          id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name: m.name,
          size: m.size,
          type: m.type,
          lastModified: m.lastModified,
          status: "pending",
          progress: 0
        }));
        c.files.push(..._), c.totalSize += o.reduce(
          (m, h) => m + h.size,
          0
        ), t.files.push(..._);
      }
    },
    removeFile: (t, i) => {
      const { sessionId: a, fileId: o } = i.payload, c = t.sessions[a];
      if (c) {
        const h = c.files.findIndex(
          (f) => f.id === o
        );
        if (h >= 0) {
          const f = c.files[h];
          c.totalSize -= f.size, c.files.splice(h, 1);
        }
      }
      const _ = t.files.findIndex(
        (h) => h.id === o
      );
      _ >= 0 && t.files.splice(_, 1);
      const m = t.selectedFiles.indexOf(o);
      m >= 0 && t.selectedFiles.splice(m, 1);
    },
    updateFileStatus: (t, i) => {
      const { fileId: a, status: o, error: c } = i.payload;
      Object.values(t.sessions).forEach((m) => {
        const h = m.files.find(
          (f) => f.id === a
        );
        h && (h.status = o, c && (h.error = c));
      });
      const _ = t.files.find(
        (m) => m.id === a
      );
      _ && (_.status = o, c && (_.error = c));
    },
    updateFileProgress: (t, i) => {
      const { fileId: a, progress: o } = i.payload;
      Object.values(t.sessions).forEach((_) => {
        const m = _.files.find(
          (h) => h.id === a
        );
        m && (m.progress = o, o === 100 && m.status === "uploading" && (m.status = "completed"));
      });
      const c = t.files.find(
        (_) => _.id === a
      );
      c && (c.progress = o, o === 100 && c.status === "uploading" && (c.status = "completed"));
    },
    // File selection
    selectFile: (t, i) => {
      const a = i.payload;
      t.selectedFiles.includes(a) || t.selectedFiles.push(a);
    },
    deselectFile: (t, i) => {
      const a = i.payload, o = t.selectedFiles.indexOf(a);
      o >= 0 && t.selectedFiles.splice(o, 1);
    },
    selectAllFiles: (t, i) => {
      const a = i.payload, o = t.sessions[a];
      o && (t.selectedFiles = [
        .../* @__PURE__ */ new Set([
          ...t.selectedFiles,
          ...o.files.map((c) => c.id)
        ])
      ]);
    },
    deselectAllFiles: (t) => {
      t.selectedFiles = [];
    },
    // Configuration
    updateGlobalConfig: (t, i) => {
      t.globalConfig = {
        ...t.globalConfig,
        ...i.payload
      };
    },
    updateSessionConfig: (t, i) => {
      const { sessionId: a, config: o } = i.payload, c = t.sessions[a];
      c && (c.config = { ...c.config, ...o });
    },
    // Validation
    setValidationErrors: (t, i) => {
      t.validationErrors = i.payload;
    },
    clearValidationErrors: (t, i) => {
      const a = i.payload;
      a ? delete t.validationErrors[a] : t.validationErrors = {};
    },
    // Statistics
    updateStats: (t, i) => {
      t.stats = { ...t.stats, ...i.payload };
    },
    incrementUploadCount: (t, i) => {
      const { success: a, size: o, duration: c } = i.payload;
      if (t.stats.totalUploads += 1, t.stats.totalBytesUploaded += o, a ? t.stats.successfulUploads += 1 : t.stats.failedUploads += 1, c) {
        const _ = t.stats.averageUploadTime * (t.stats.totalUploads - 1) + c;
        t.stats.averageUploadTime = _ / t.stats.totalUploads;
      }
    },
    // Utility actions
    clearCompletedFiles: (t, i) => {
      const a = i.payload, o = t.sessions[a];
      o && (o.files = o.files.filter(
        (c) => c.status !== "completed"
      ));
    },
    clearErrorFiles: (t, i) => {
      const a = i.payload, o = t.sessions[a];
      o && (o.files = o.files.filter(
        (c) => c.status !== "error"
      ));
    },
    retryFailedFiles: (t, i) => {
      const a = i.payload, o = t.sessions[a];
      o && o.files.forEach((c) => {
        c.status === "error" && (c.status = "pending", c.progress = 0, c.error = void 0);
      });
    },
    // Error handling
    setError: (t, i) => {
      t.error = i.payload;
    },
    clearError: (t) => {
      t.error = null;
    },
    setLoading: (t, i) => {
      t.isLoading = i.payload;
    },
    // Component-specific UI state management
    initializeComponentState: (t, i) => {
      const a = i.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        dragActive: !1,
        uploadProgress: 0,
        validationErrors: [],
        selectedFiles: []
      });
    },
    setComponentDragActive: (t, i) => {
      const { componentId: a, dragActive: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].dragActive = o);
    },
    setComponentUploadProgress: (t, i) => {
      const { componentId: a, progress: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].uploadProgress = o);
    },
    setComponentValidationErrors: (t, i) => {
      const { componentId: a, errors: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].validationErrors = o);
    },
    setComponentSelectedFiles: (t, i) => {
      const { componentId: a, files: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].selectedFiles = o);
    },
    clearComponentState: (t, i) => {
      const a = i.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        dragActive: !1,
        uploadProgress: 0,
        validationErrors: [],
        selectedFiles: []
      });
    },
    removeComponentState: (t, i) => {
      const a = i.payload;
      delete t.componentStates[a];
    }
  },
  extraReducers: (t) => {
    t.addCase(vr.pending, (i, a) => {
      const { fileId: o } = a.meta.arg;
      ua.caseReducers.updateFileStatus(i, {
        type: "updateFileStatus",
        payload: { fileId: o, status: "uploading" }
      });
    }).addCase(vr.fulfilled, (i, a) => {
      const { fileId: o, url: c, metadata: _ } = a.payload;
      Object.values(i.sessions).forEach((h) => {
        const f = h.files.find(
          (g) => g.id === o
        );
        f && (f.url = c, f.metadata = _, f.status = "completed", f.progress = 100);
      });
      const m = i.files.find(
        (h) => h.id === o
      );
      m && (m.url = c, m.metadata = _, m.status = "completed", m.progress = 100);
    }).addCase(vr.rejected, (i, a) => {
      const { fileId: o } = a.meta.arg;
      ua.caseReducers.updateFileStatus(i, {
        type: "updateFileStatus",
        payload: {
          fileId: o,
          status: "error",
          error: a.error.message || "Upload failed"
        }
      });
    }), t.addCase(
      Jm.fulfilled,
      (i, a) => {
        const { fileId: o, thumbnailUrl: c } = a.payload;
        Object.values(i.sessions).forEach((m) => {
          const h = m.files.find(
            (f) => f.id === o
          );
          h && (h.thumbnailUrl = c);
        });
        const _ = i.files.find(
          (m) => m.id === o
        );
        _ && (_.thumbnailUrl = c);
      }
    ), t.addCase(
      Xm.fulfilled,
      (i, a) => {
        i.validationErrors = a.payload;
      }
    );
  }
}), {
  createSession: Fz,
  removeSession: Dz,
  setActiveSession: $z,
  addFiles: Wz,
  removeFile: Uz,
  updateFileStatus: Zz,
  updateFileProgress: Hz,
  selectFile: Vz,
  deselectFile: Gz,
  selectAllFiles: Kz,
  deselectAllFiles: qz,
  updateGlobalConfig: Yz,
  updateSessionConfig: Jz,
  setValidationErrors: Xz,
  clearValidationErrors: Qz,
  updateStats: e3,
  incrementUploadCount: t3,
  clearCompletedFiles: i3,
  clearErrorFiles: n3,
  retryFailedFiles: a3,
  setError: r3,
  clearError: o3,
  setLoading: s3,
  // Component state actions
  initializeComponentState: Qm,
  setComponentDragActive: xr,
  setComponentUploadProgress: ns,
  setComponentValidationErrors: as,
  setComponentSelectedFiles: ep,
  clearComponentState: l3,
  removeComponentState: tp
} = ua.actions, ip = (t) => (i) => {
  var a;
  return ((a = i.files.componentStates[t]) == null ? void 0 : a.dragActive) || !1;
}, np = (t) => (i) => {
  var a;
  return ((a = i.files.componentStates[t]) == null ? void 0 : a.uploadProgress) || 0;
}, ap = (t) => (i) => {
  var a;
  return ((a = i.files.componentStates[t]) == null ? void 0 : a.validationErrors) || [];
}, rp = (t) => (i) => {
  var a;
  return ((a = i.files.componentStates[t]) == null ? void 0 : a.selectedFiles) || [];
}, Js = ua.reducer, op = {
  activeModals: [],
  globalLoading: !1,
  globalError: null
}, Xs = Yt({
  name: "modals",
  initialState: op,
  reducers: {
    // Modal lifecycle actions
    openModal: (t, i) => {
      const { id: a, data: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === a
      );
      c ? (c.isOpen = !0, o && (c.data = o)) : t.activeModals.push({
        id: a,
        isOpen: !0,
        data: o || {},
        loading: !1,
        error: null,
        success: !1
      });
    },
    closeModal: (t, i) => {
      const a = i.payload, o = t.activeModals.find(
        (c) => c.id === a
      );
      o && (o.isOpen = !1);
    },
    removeModal: (t, i) => {
      const a = i.payload;
      t.activeModals = t.activeModals.filter(
        (o) => o.id !== a
      );
    },
    closeAllModals: (t) => {
      t.activeModals.forEach((i) => {
        i.isOpen = !1;
      });
    },
    // Modal data actions
    updateModalData: (t, i) => {
      const { id: a, data: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === a
      );
      c && (c.data = { ...c.data, ...o });
    },
    setModalForms: (t, i) => {
      const { id: a, field: o, value: c } = i.payload, _ = t.activeModals.find(
        (m) => m.id === a
      );
      _ && (_.data || (_.data = {}), _.data[o] = c);
    },
    clearModalData: (t, i) => {
      const a = i.payload, o = t.activeModals.find(
        (c) => c.id === a
      );
      o && (o.data = {});
    },
    // Modal state actions
    setModalLoading: (t, i) => {
      const { id: a, loading: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === a
      );
      c && (c.loading = o);
    },
    setModalError: (t, i) => {
      const { id: a, error: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === a
      );
      c && (c.error = o);
    },
    setModalSuccess: (t, i) => {
      const { id: a, success: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === a
      );
      c && (c.success = o);
    },
    resetModalState: (t, i) => {
      const a = i.payload, o = t.activeModals.find(
        (c) => c.id === a
      );
      o && (o.loading = !1, o.error = null, o.success = !1);
    },
    // Global modal actions
    setGlobalLoading: (t, i) => {
      t.globalLoading = i.payload;
    },
    setGlobalError: (t, i) => {
      t.globalError = i.payload;
    },
    resetGlobalState: (t) => {
      t.globalLoading = !1, t.globalError = null;
    }
  }
}), {
  openModal: sp,
  closeModal: c3,
  removeModal: d3,
  closeAllModals: _3,
  updateModalData: u3,
  setModalForms: rs,
  clearModalData: m3,
  setModalLoading: os,
  setModalError: oa,
  setModalSuccess: lp,
  resetModalState: p3,
  setGlobalLoading: h3,
  setGlobalError: f3,
  resetGlobalState: g3
} = Xs.actions, cp = (t, i) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : a.data) || {};
}, dp = (t, i) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : a.loading) || !1;
}, _p = (t, i) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : a.error) || null;
}, up = (t, i) => {
  var a;
  return ((a = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : a.success) || !1;
}, Qs = Xs.reducer, el = {
  clientTime: null,
  performance: {
    memory: 0,
    fps: 0,
    loadTime: 0
  },
  errors: []
}, mp = {
  componentStates: {},
  isDebugModeEnabled: !1,
  globalAdminEnabled: typeof window < "u"
  // Default to true in browser
}, tl = Yt({
  name: "admin",
  initialState: mp,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...el
      });
    },
    // Session Debugger actions
    setClientTime: (t, i) => {
      const { componentId: a, time: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].clientTime = o);
    },
    // Performance Monitor actions
    setPerformanceMetrics: (t, i) => {
      const { componentId: a, metrics: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].performance = o);
    },
    // Error Logger actions
    addError: (t, i) => {
      const { componentId: a, error: o } = i.payload;
      t.componentStates[a] && t.componentStates[a].errors.push(
        o
      );
    },
    setErrors: (t, i) => {
      const { componentId: a, errors: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].errors = o);
    },
    clearErrors: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].errors = []);
    },
    // Global admin settings
    setDebugModeEnabled: (t, i) => {
      t.isDebugModeEnabled = i.payload;
    },
    setGlobalAdminEnabled: (t, i) => {
      t.globalAdminEnabled = i.payload;
    },
    // Cleanup
    removeComponentState: (t, i) => {
      const { componentId: a } = i.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    }
  }
}), {
  initializeComponentState: pp,
  setClientTime: hp,
  setPerformanceMetrics: fp,
  addError: y3,
  setErrors: gp,
  clearErrors: b3,
  setDebugModeEnabled: v3,
  setGlobalAdminEnabled: x3,
  removeComponentState: w3,
  clearAllComponentStates: k3
} = tl.actions, yp = (t, i) => {
  var a;
  return ((a = t.admin.componentStates[i]) == null ? void 0 : a.clientTime) || null;
}, bp = (t, i) => {
  var a;
  return ((a = t.admin.componentStates[i]) == null ? void 0 : a.performance) || el.performance;
}, vp = (t, i) => {
  var a;
  return ((a = t.admin.componentStates[i]) == null ? void 0 : a.errors) || [];
}, il = tl.reducer, Ir = {
  sorting: { column: "", direction: "asc" },
  filters: {},
  searchTerm: "",
  selectedRows: /* @__PURE__ */ new Set(),
  expandedRows: /* @__PURE__ */ new Set(),
  editingCell: null
}, xp = {
  componentStates: {}
}, nl = Yt({
  name: "table",
  initialState: xp,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const {
        componentId: a,
        initialState: o = {}
      } = i.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...Ir,
        ...o
      });
    },
    // Sorting actions
    setSorting: (t, i) => {
      const { componentId: a, sorting: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].sorting = o);
    },
    // Filtering actions
    setFilters: (t, i) => {
      const { componentId: a, filters: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].filters = o);
    },
    updateFilter: (t, i) => {
      const { componentId: a, key: o, value: c } = i.payload;
      t.componentStates[a] && (c == null || c === "" ? delete t.componentStates[a].filters[o] : t.componentStates[a].filters[o] = c);
    },
    setSearchTerm: (t, i) => {
      const { componentId: a, searchTerm: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].searchTerm = o);
    },
    // Selection actions
    setSelectedRows: (t, i) => {
      const { componentId: a, selectedRows: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].selectedRows = new Set(o));
    },
    addSelectedRow: (t, i) => {
      const { componentId: a, rowId: o } = i.payload;
      t.componentStates[a] && t.componentStates[a].selectedRows.add(
        o
      );
    },
    removeSelectedRow: (t, i) => {
      const { componentId: a, rowId: o } = i.payload;
      t.componentStates[a] && t.componentStates[a].selectedRows.delete(o);
    },
    clearSelectedRows: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && t.componentStates[a].selectedRows.clear();
    },
    // Expansion actions
    setExpandedRows: (t, i) => {
      const { componentId: a, expandedRows: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].expandedRows = new Set(o));
    },
    toggleRowExpansion: (t, i) => {
      const { componentId: a, rowId: o } = i.payload;
      if (t.componentStates[a]) {
        const c = t.componentStates[a].expandedRows;
        c.has(o) ? c.delete(o) : c.add(o);
      }
    },
    // Editing actions
    setEditingCell: (t, i) => {
      const { componentId: a, editingCell: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].editingCell = o);
    },
    clearEditingCell: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].editingCell = null);
    },
    // Cleanup
    removeComponentState: (t, i) => {
      const { componentId: a } = i.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetTableState: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        ...Ir
      });
    }
  }
}), {
  initializeComponentState: wp,
  setSorting: kp,
  setFilters: C3,
  updateFilter: S3,
  setSearchTerm: Cp,
  setSelectedRows: ss,
  addSelectedRow: z3,
  removeSelectedRow: j3,
  clearSelectedRows: N3,
  setExpandedRows: Sp,
  toggleRowExpansion: T3,
  setEditingCell: wr,
  clearEditingCell: P3,
  removeComponentState: zp,
  clearAllComponentStates: E3,
  resetTableState: I3
} = nl.actions, jp = (t, i) => {
  var a;
  return ((a = t.table.componentStates[i]) == null ? void 0 : a.sorting) || Ir.sorting;
}, Np = (t, i) => {
  var a;
  return ((a = t.table.componentStates[i]) == null ? void 0 : a.filters) || {};
}, Tp = (t, i) => {
  var a;
  return ((a = t.table.componentStates[i]) == null ? void 0 : a.searchTerm) || "";
}, Pp = (t, i) => {
  var a;
  return ((a = t.table.componentStates[i]) == null ? void 0 : a.selectedRows) || /* @__PURE__ */ new Set();
}, Ep = (t, i) => {
  var a;
  return ((a = t.table.componentStates[i]) == null ? void 0 : a.expandedRows) || /* @__PURE__ */ new Set();
}, Ip = (t, i) => {
  var a;
  return ((a = t.table.componentStates[i]) == null ? void 0 : a.editingCell) || null;
}, al = nl.reducer, ls = {
  isOpen: !1,
  isMobile: !1,
  activeItemId: null,
  mobileBreakpoint: 768
}, Lp = {
  componentStates: {},
  defaultMobileBreakpoint: 768,
  globalResponsiveEnabled: !0
}, rl = Yt({
  name: "navigation",
  initialState: Lp,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const {
        componentId: a,
        initialState: o = {}
      } = i.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...ls,
        ...o
      });
    },
    // Open/close actions
    setIsOpen: (t, i) => {
      const { componentId: a, isOpen: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].isOpen = o);
    },
    toggleNavigation: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].isOpen = !t.componentStates[a].isOpen);
    },
    closeNavigation: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].isOpen = !1);
    },
    // Responsive actions
    setIsMobile: (t, i) => {
      const { componentId: a, isMobile: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].isMobile = o);
    },
    setMobileBreakpoint: (t, i) => {
      const { componentId: a, breakpoint: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].mobileBreakpoint = o);
    },
    // Active item actions
    setActiveItem: (t, i) => {
      const { componentId: a, itemId: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].activeItemId = o);
    },
    // Global settings actions
    setDefaultMobileBreakpoint: (t, i) => {
      t.defaultMobileBreakpoint = i.payload;
    },
    setGlobalResponsiveEnabled: (t, i) => {
      t.globalResponsiveEnabled = i.payload;
    },
    // Cleanup
    removeComponentState: (t, i) => {
      const { componentId: a } = i.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetNavigationState: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        ...ls
      });
    }
  }
}), {
  initializeComponentState: L3,
  setIsOpen: A3,
  toggleNavigation: M3,
  closeNavigation: O3,
  setIsMobile: R3,
  setMobileBreakpoint: B3,
  setActiveItem: F3,
  setDefaultMobileBreakpoint: D3,
  setGlobalResponsiveEnabled: $3,
  removeComponentState: W3,
  clearAllComponentStates: U3,
  resetNavigationState: Z3
} = rl.actions, ol = rl.reducer, cs = {
  value: "",
  state: "default",
  errorText: "",
  showPassword: !1,
  isFocused: !1,
  isValid: !0,
  debounceTimeoutId: null
}, Ap = {
  componentStates: {},
  globalDebounceDelay: 300,
  globalValidationEnabled: !0
}, sl = Yt({
  name: "input",
  initialState: Ap,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const {
        componentId: a,
        initialState: o = {}
      } = i.payload;
      t.componentStates[a] || (t.componentStates[a] = {
        ...cs,
        ...o
      });
    },
    // Value actions
    setValue: (t, i) => {
      const { componentId: a, value: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].value = o);
    },
    clearValue: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].value = "");
    },
    // State actions
    setInputState: (t, i) => {
      const { componentId: a, inputState: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].state = o);
    },
    setErrorText: (t, i) => {
      const { componentId: a, errorText: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].errorText = o);
    },
    clearError: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].errorText = "", t.componentStates[a].state = "default");
    },
    // Password visibility actions
    setShowPassword: (t, i) => {
      const { componentId: a, showPassword: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].showPassword = o);
    },
    togglePasswordVisibility: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a].showPassword = !t.componentStates[a].showPassword);
    },
    // Focus actions
    setFocused: (t, i) => {
      const { componentId: a, isFocused: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].isFocused = o);
    },
    // Validation actions
    setValid: (t, i) => {
      const { componentId: a, isValid: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].isValid = o);
    },
    // Debounce actions
    setDebounceTimeout: (t, i) => {
      const { componentId: a, timeoutId: o } = i.payload;
      t.componentStates[a] && (t.componentStates[a].debounceTimeoutId = o);
    },
    // Global settings actions
    setGlobalDebounceDelay: (t, i) => {
      t.globalDebounceDelay = i.payload;
    },
    setGlobalValidationEnabled: (t, i) => {
      t.globalValidationEnabled = i.payload;
    },
    // Cleanup
    removeComponentState: (t, i) => {
      const { componentId: a } = i.payload;
      delete t.componentStates[a];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetInputState: (t, i) => {
      const { componentId: a } = i.payload;
      t.componentStates[a] && (t.componentStates[a] = {
        ...cs
      });
    }
  }
}), {
  initializeComponentState: H3,
  setValue: V3,
  clearValue: G3,
  setInputState: K3,
  setErrorText: q3,
  clearError: Y3,
  setShowPassword: J3,
  togglePasswordVisibility: X3,
  setFocused: Q3,
  setValid: e5,
  setDebounceTimeout: t5,
  setGlobalDebounceDelay: i5,
  setGlobalValidationEnabled: n5,
  removeComponentState: a5,
  clearAllComponentStates: r5,
  resetInputState: o5
} = sl.actions, ll = sl.reducer;
As({
  reducer: {
    // User domain - authentication, profile, preferences
    user: Fs,
    // UI domain - component states, loading, errors, form data
    ui: $s,
    // Theme domain - themes, palettes, dark mode
    theme: Us,
    // Socket domain - connection state, real-time events
    socket: Hs,
    // Game domain - game state, matches, leaderboards
    game: Gs,
    // Settings domain - application settings, configurations
    settings: qs,
    // Notification domain - alerts, toasts, achievements
    notifications: Ys,
    // File domain - uploads, file management
    files: Js,
    // Modal domain - modal states and data
    modals: Qs,
    // Admin domain - debug panels, performance monitoring, error logging
    admin: il,
    // Table domain - table state, sorting, filtering, selection
    table: al,
    // Navigation domain - navigation open/close, responsive, active items
    navigation: ol,
    // Input domain - input values, states, validation, focus
    input: ll
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
const $r = () => dn(), Ci = ni, Mp = {
  user: Fs,
  ui: $s,
  theme: Us,
  socket: Hs,
  game: Gs,
  settings: qs,
  notifications: Ys,
  files: Js,
  modals: Qs,
  admin: il,
  table: al,
  navigation: ol,
  input: ll
};
As({
  reducer: Mp
});
const cl = {
  time: () => (/* @__PURE__ */ new Date()).toLocaleTimeString(),
  performance: () => {
    var i;
    const t = (i = window.performance) == null ? void 0 : i.memory;
    return {
      memory: t ? Math.round(
        t.usedJSHeapSize / 1024 / 1024
      ) : 0,
      fps: Math.round(Math.random() * 60 + 30),
      loadTime: Math.round(window.performance.now())
    };
  },
  errors: () => [
    {
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
      message: "Network timeout"
    },
    {
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
      message: "Invalid API response"
    }
  ],
  environment: () => ({
    nodeEnv: typeof window < "u" ? "browser" : "development",
    userAgent: typeof navigator < "u" ? `${navigator.userAgent.substring(0, 50)}...` : "N/A",
    componentsRendered: Math.floor(Math.random() * 100),
    activeListeners: Math.floor(Math.random() * 20)
  })
}, Op = ({ label: t, value: i, className: a }) => /* @__PURE__ */ s.jsxs(p, { className: a || Ri.debugRow, children: [
  /* @__PURE__ */ s.jsxs("strong", { children: [
    t,
    ":"
  ] }),
  " ",
  i
] }), Rp = ({
  label: t,
  value: i,
  unit: a = "",
  className: o,
  labelClassName: c,
  valueClassName: _
}) => /* @__PURE__ */ s.jsxs(p, { className: o || Ri.metricRow, children: [
  /* @__PURE__ */ s.jsxs("span", { className: c || Ri.metricLabel, children: [
    t,
    ":"
  ] }),
  /* @__PURE__ */ s.jsxs("span", { className: _ || Ri.metricValue, children: [
    i,
    a ? ` ${a}` : ""
  ] })
] }), Bp = {
  "session-debugger": {
    className: "sessionDebugger",
    updateInterval: 1e3,
    dataKey: "time",
    selector: yp,
    actionCreator: hp,
    dataProcessor: (t, i) => {
      var a, o, c, _;
      return {
        debugData: [
          {
            label: "Session Status",
            value: i.status || "unknown"
          },
          {
            label: "User ID",
            value: ((o = (a = i.session) == null ? void 0 : a.user) == null ? void 0 : o.id) || "None"
          },
          {
            label: "Email",
            value: ((_ = (c = i.session) == null ? void 0 : c.user) == null ? void 0 : _.email) || "None"
          },
          {
            label: "Session Exists",
            value: i.session ? "Yes" : "No"
          },
          { label: "Timestamp", value: t || "..." }
        ]
      };
    },
    renderer: (t, i, a) => {
      var o;
      return /* @__PURE__ */ s.jsx(p, { className: i.sessionDebugger, children: ((o = t.debugData) == null ? void 0 : o.map(
        (c, _) => /* @__PURE__ */ s.jsx(
          Op,
          {
            label: c.label,
            value: c.value,
            className: a == null ? void 0 : a.rowClassName
          },
          _
        )
      )) || /* @__PURE__ */ s.jsx(p, { children: "No debug data available" }) });
    }
  },
  "performance-monitor": {
    className: "performanceMonitor",
    updateInterval: 2e3,
    dataKey: "performance",
    selector: bp,
    actionCreator: fp,
    dataProcessor: (t) => ({
      metricsData: [
        {
          label: "Memory",
          value: (t == null ? void 0 : t.memory) ?? 0,
          unit: "MB"
        },
        {
          label: "FPS",
          value: (t == null ? void 0 : t.fps) ?? 0,
          unit: ""
        },
        {
          label: "Load Time",
          value: (t == null ? void 0 : t.loadTime) ?? 0,
          unit: "ms"
        }
      ]
    }),
    renderer: (t, i, a) => {
      var o;
      return /* @__PURE__ */ s.jsx(p, { className: i.performanceMonitor, children: ((o = t.metricsData) == null ? void 0 : o.map(
        (c, _) => /* @__PURE__ */ s.jsx(
          Rp,
          {
            label: c.label,
            value: c.value,
            unit: c.unit,
            className: a == null ? void 0 : a.metricClassName,
            labelClassName: a == null ? void 0 : a.metricLabelClassName,
            valueClassName: a == null ? void 0 : a.metricValueClassName
          },
          _
        )
      )) || /* @__PURE__ */ s.jsx(p, { children: "No performance data available" }) });
    }
  },
  "error-logger": {
    className: "errorLogger",
    dataKey: "errors",
    selector: vp,
    actionCreator: gp,
    dataProcessor: (t) => ({
      errors: t || []
    }),
    renderer: (t, i, a) => {
      var o;
      return /* @__PURE__ */ s.jsxs(p, { className: i.errorLogger, children: [
        /* @__PURE__ */ s.jsx(
          p,
          {
            style: {
              marginBottom: "8px",
              fontWeight: "bold"
            },
            children: (a == null ? void 0 : a.title) || "Error Log"
          }
        ),
        (o = t.errors) != null && o.length ? t.errors.map((c, _) => /* @__PURE__ */ s.jsxs(
          p,
          {
            className: i.errorEntry,
            children: [
              /* @__PURE__ */ s.jsx(p, { className: i.errorTime, children: c.time }),
              /* @__PURE__ */ s.jsx(p, { className: i.errorMessage, children: c.message })
            ]
          },
          _
        )) : /* @__PURE__ */ s.jsx(p, { children: "No errors logged" })
      ] });
    }
  },
  "debug-panel": {
    className: "debugPanel",
    dataKey: "environment",
    dataProcessor: () => cl.environment(),
    renderer: (t, i, a) => /* @__PURE__ */ s.jsxs(p, { className: i.debugPanel, children: [
      /* @__PURE__ */ s.jsx(p, { className: i.panelHeader, children: /* @__PURE__ */ s.jsx("h3", { children: (a == null ? void 0 : a.title) || "Debug Panel" }) }),
      /* @__PURE__ */ s.jsxs(p, { className: i.panelSection, children: [
        /* @__PURE__ */ s.jsx(p, { className: i.sectionTitle, children: (a == null ? void 0 : a.environmentTitle) || "Environment" }),
        /* @__PURE__ */ s.jsxs(p, { children: [
          "Node Env: ",
          (t == null ? void 0 : t.nodeEnv) || "Unknown"
        ] }),
        /* @__PURE__ */ s.jsxs(p, { children: [
          "User Agent: ",
          (t == null ? void 0 : t.userAgent) || "N/A"
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs(p, { className: i.panelSection, children: [
        /* @__PURE__ */ s.jsx(p, { className: i.sectionTitle, children: (a == null ? void 0 : a.appStateTitle) || "Application State" }),
        /* @__PURE__ */ s.jsxs(p, { children: [
          "Components Rendered:",
          " ",
          (t == null ? void 0 : t.componentsRendered) || 0
        ] }),
        /* @__PURE__ */ s.jsxs(p, { children: [
          "Active Listeners: ",
          (t == null ? void 0 : t.activeListeners) || 0
        ] })
      ] })
    ] })
  },
  custom: {
    className: "custom",
    dataKey: "environment",
    dataProcessor: () => ({}),
    renderer: (t, i, a) => (a == null ? void 0 : a.children) || /* @__PURE__ */ s.jsx(p, { children: "Custom admin component" })
  }
}, Fp = (t, i, a) => {
  const o = $r();
  Re(() => {
    o(pp({ componentId: t }));
  }, [o, t]);
  const c = Je(() => {
    if (!(!a.actionCreator || !a.dataKey))
      try {
        const _ = cl[a.dataKey](), m = {
          componentId: t,
          [a.dataKey === "time" ? "time" : a.dataKey === "performance" ? "metrics" : "errors"]: _
        };
        o(a.actionCreator(m));
      } catch (_) {
        console.warn(
          `Admin component ${i} data generation failed:`,
          _
        );
      }
  }, [
    o,
    t,
    a.actionCreator,
    a.dataKey,
    i
  ]);
  return Re(() => {
    if (!a.actionCreator || !a.updateInterval || a.updateInterval < 100)
      return;
    c();
    const _ = setInterval(
      c,
      a.updateInterval
    );
    return () => clearInterval(_);
  }, [
    c,
    a.actionCreator,
    a.updateInterval
  ]), { dispatch: o };
}, Dp = (t) => t && Ri[`adminZ${t}`] || "", s5 = ({
  children: t,
  kind: i = "custom",
  position: a = "top-left",
  enabled: o = !1,
  className: c = "",
  zIndex: _ = 9999,
  componentId: m,
  ...h
}) => {
  if (!o) return null;
  const f = `admin-${a}`, g = Dp(_), b = [
    Ri.adminComponent,
    Ri[f],
    g,
    c
  ].filter(Boolean).join(" "), v = Bp[i], C = m || `${i}-default`, w = v && v.selector ? Ci(
    (j) => v.selector(j, C)
  ) : null;
  v && v.actionCreator && Fp(
    C,
    i,
    v
  );
  const I = v ? ki(
    () => v.dataProcessor(w, h),
    [v, w, h.session, h.status]
  ) : null;
  return /* @__PURE__ */ s.jsx(p, { className: b, ...h, children: v ? v.renderer(I, Ri, h) : t });
}, l5 = {
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
}, En = {
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
}, c5 = (t) => {
  const i = {
    type: "adsense",
    name: "Google AdSense",
    refreshRate: 3e4,
    maxRetries: 3,
    ...t
  };
  return {
    config: i,
    async loadAd(a, o) {
      try {
        if (typeof window < "u" && window.adsbygoogle) {
          const c = window.adsbygoogle, _ = document.createElement("ins");
          return _.className = "adsbygoogle", _.style.display = "block", _.setAttribute(
            "data-ad-client",
            i.publisherId || ""
          ), _.setAttribute(
            "data-ad-slot",
            i.adUnitId || ""
          ), _.setAttribute("data-ad-format", "auto"), a.appendChild(_), c.push({}), {
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
          i.publisherId || ""
        ), document.head.appendChild(a), window.adsbygoogle = window.adsbygoogle || [];
      }
    }
  };
}, d5 = (t) => {
  const i = {
    type: "adsterra",
    name: "Adsterra",
    refreshRate: 6e4,
    maxRetries: 2,
    ...t
  };
  return {
    config: i,
    async loadAd(a, o) {
      try {
        const c = document.createElement("div");
        c.id = `adsterra-${Date.now()}`, a.appendChild(c);
        const _ = document.createElement("script");
        return _.async = !0, _.setAttribute("data-cfasync", "false"), _.src = `//www.highperformanceformat.com/${i.zoneId}/invoke.js`, c.appendChild(_), {
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
}, _5 = (t) => ({
  config: t,
  loadAd: t.loadAdFunction,
  async reportMetrics(i) {
    if (t.reportingUrl)
      try {
        await fetch(t.reportingUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            metrics: i,
            providerId: t.name
          })
        });
      } catch (a) {
        console.error("Metrics reporting error:", a);
      }
  }
}), u5 = (t) => ({
  name: "Google Analytics",
  trackEvent(i) {
    typeof window < "u" && window.gtag && window.gtag("event", i.eventType, {
      event_category: "Advertisement",
      event_label: `${i.adKind}-${i.adId}`,
      custom_map: i.metadata
    });
  },
  async initialize(i) {
    if (typeof window < "u" && !document.querySelector(
      `script[src*="${t}"]`
    )) {
      const a = document.createElement("script");
      a.async = !0, a.src = `https://www.googletagmanager.com/gtag/js?id=${t}`, document.head.appendChild(a), window.dataLayer = window.dataLayer || [], window.gtag = function() {
        window.dataLayer.push(arguments);
      }, window.gtag("js", /* @__PURE__ */ new Date()), window.gtag("config", t);
    }
  }
}), m5 = (t) => {
  let i = [], a = null;
  const o = async () => {
    if (i.length !== 0)
      try {
        await fetch(t.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...t.apiKey && {
              Authorization: `Bearer ${t.apiKey}`
            }
          },
          body: JSON.stringify({ events: i })
        }), i = [];
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
      t.batchEvents ? (i.push(c), i.length >= (t.batchSize ?? 10) ? o() : a || (a = setTimeout(() => {
        o(), a = null;
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
        (_) => console.error("Analytics error:", _)
      );
    }
  };
}, $p = (t) => En[t] || En["banner-ad"], p5 = (t, i) => {
  const a = $p(t);
  return {
    ...a,
    ...i,
    content: {
      ...a.content,
      ...i.content
    }
  };
}, h5 = (t) => Object.keys(En).includes(
  t
), f5 = (t, i, a, o) => {
  var c;
  return {
    eventType: t,
    adId: i,
    adKind: a,
    timestamp: Date.now(),
    sessionId: typeof window < "u" && ((c = window.sessionStorage) == null ? void 0 : c.getItem("sessionId")) || void 0,
    metadata: o
  };
}, g5 = {
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
}, y5 = {
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
}, Wp = "_advertisement_jdx53_132", Up = "_advertisement__slot_jdx53_418", Zp = "_adsbygoogle_jdx53_432", Hp = "_advertisement__loading_jdx53_442", Vp = "_advertisement__modal_jdx53_451", Gp = "_advertisement__backdrop_jdx53_474", Kp = "_advertisement__modal_content_jdx53_485", qp = "_modalAppear_jdx53_1", Yp = "_advertisement__close_jdx53_522", Jp = "_advertisement__close_button_jdx53_560", Xp = "_advertisement__banner_jdx53_589", Qp = "_advertisement__native_jdx53_599", eh = "_advertisement__sticky_jdx53_609", th = "_advertisement__floating_jdx53_617", ih = "_advertisement__toast_jdx53_627", nh = "_advertisement__billboard_jdx53_634", ah = "_advertisement__billboard_overlay_jdx53_641", rh = "_advertisement__default_jdx53_651", oh = "_advertisement__image_jdx53_658", sh = "_advertisement__content_jdx53_673", lh = "_advertisement__title_jdx53_681", ch = "_advertisement__description_jdx53_689", dh = "_advertisement__cta_jdx53_697", _h = "_advertisement__sponsored_jdx53_732", uh = "_advertisement__reward_info_jdx53_746", mh = "_advertisement__reward_actions_jdx53_767", ph = "_advertisement__exit_intent_jdx53_776", hh = "_advertisement__carousel_controls_jdx53_808", fh = "_advertisement__carousel_button_jdx53_816", gh = "_advertisement__carousel_indicators_jdx53_839", yh = "_advertisement__carousel_indicator_jdx53_839", se = {
  advertisement: Wp,
  "advertisement--animated": "_advertisement--animated_jdx53_148",
  "advertisement--hidden": "_advertisement--hidden_jdx53_152",
  "advertisement--loading": "_advertisement--loading_jdx53_155",
  "loading-shimmer": "_loading-shimmer_jdx53_1",
  "advertisement--error": "_advertisement--error_jdx53_171",
  "advertisement--banner": "_advertisement--banner_jdx53_179",
  "advertisement--interstitial": "_advertisement--interstitial_jdx53_195",
  "advertisement--rewarded-modal": "_advertisement--rewarded-modal_jdx53_218",
  "advertisement--native-card": "_advertisement--native-card_jdx53_241",
  "advertisement--sticky-bar": "_advertisement--sticky-bar_jdx53_266",
  "advertisement--floating-widget": "_advertisement--floating-widget_jdx53_281",
  "advertisement--toast-notification": "_advertisement--toast-notification_jdx53_293",
  "advertisement--exit-intent-modal": "_advertisement--exit-intent-modal_jdx53_310",
  "advertisement--ingame-billboard": "_advertisement--ingame-billboard_jdx53_332",
  "advertisement--small": "_advertisement--small_jdx53_343",
  "advertisement--medium": "_advertisement--medium_jdx53_349",
  "advertisement--large": "_advertisement--large_jdx53_355",
  "advertisement--leaderboard": "_advertisement--leaderboard_jdx53_364",
  "advertisement--rectangle": "_advertisement--rectangle_jdx53_370",
  "advertisement--fullscreen": "_advertisement--fullscreen_jdx53_376",
  "advertisement--standard": "_advertisement--standard_jdx53_381",
  "advertisement--premium": "_advertisement--premium_jdx53_386",
  "advertisement--sponsored": "_advertisement--sponsored_jdx53_391",
  "advertisement--native": "_advertisement--native_jdx53_241",
  "advertisement--video": "_advertisement--video_jdx53_400",
  "advertisement--interactive": "_advertisement--interactive_jdx53_404",
  "advertisement--minimal": "_advertisement--minimal_jdx53_408",
  "advertisement--branded": "_advertisement--branded_jdx53_413",
  advertisement__slot: Up,
  adsbygoogle: Zp,
  advertisement__loading: Hp,
  advertisement__modal: Vp,
  advertisement__backdrop: Gp,
  advertisement__modal_content: Kp,
  modalAppear: qp,
  advertisement__close: Yp,
  advertisement__close_button: Jp,
  advertisement__banner: Xp,
  advertisement__native: Qp,
  advertisement__sticky: eh,
  advertisement__floating: th,
  advertisement__toast: ih,
  advertisement__billboard: nh,
  advertisement__billboard_overlay: ah,
  advertisement__default: rh,
  advertisement__image: oh,
  advertisement__content: sh,
  advertisement__title: lh,
  advertisement__description: ch,
  advertisement__cta: dh,
  advertisement__sponsored: _h,
  advertisement__reward_info: uh,
  advertisement__reward_actions: mh,
  advertisement__exit_intent: ph,
  "advertisement--container": "_advertisement--container_jdx53_785",
  "advertisement--layout-stack": "_advertisement--layout-stack_jdx53_789",
  "advertisement--layout-carousel": "_advertisement--layout-carousel_jdx53_793",
  "advertisement--layout-grid": "_advertisement--layout-grid_jdx53_799",
  "advertisement--layout-single": "_advertisement--layout-single_jdx53_804",
  advertisement__carousel_controls: hh,
  advertisement__carousel_button: fh,
  advertisement__carousel_indicators: gh,
  advertisement__carousel_indicator: yh,
  "advertisement__carousel_indicator--active": "_advertisement__carousel_indicator--active_jdx53_854"
}, Si = Ae(
  ({
    count: t = "one",
    kind: i,
    content: a,
    adPool: o = [],
    maxAds: c = 3,
    layout: _ = "stack",
    autoRotate: m = !1,
    rotationInterval: h = 3e4,
    spacing: f = 16,
    alignItems: g = "flex-start",
    justifyContent: b = "flex-start",
    responsive: v = !0,
    breakpoints: C = {},
    allowedAdTypes: w = [],
    fallbackContent: I,
    showFallbackOnError: j = !0,
    onAdLoad: A,
    onAdClick: O,
    onAdImpression: X,
    onAdClose: W,
    onAdError: U,
    onRewardEarned: N,
    analyticsHooks: T,
    sessionId: J,
    userId: V,
    providers: B = [],
    primaryProvider: G = "custom",
    fallbackProviders: F = [],
    providerConfig: Q = {},
    isVisible: le = !0,
    isLoading: ge = !1,
    isError: ie = !1,
    autoHide: ne = !1,
    hideDelay: ce = 5e3,
    animationEnabled: E = !0,
    targetingData: te = {},
    trackingEnabled: x = !0,
    maxWidth: Z,
    maxHeight: z,
    position: H = "relative",
    zIndex: q = 1e3,
    overrideConfig: ee = {},
    customClassName: Y = "",
    className: me = "",
    style: de = {},
    showBackdrop: Me = !0,
    backdropOpacity: Ee = 0.8,
    ...ae
  }, pe) => {
    var ji, Ni;
    if (t === "many")
      return /* @__PURE__ */ s.jsx(
        bh,
        {
          ref: pe,
          className: me,
          style: de,
          adPool: o,
          maxAds: c,
          layout: _,
          autoRotate: m,
          rotationInterval: h,
          spacing: f,
          alignItems: g,
          justifyContent: b,
          responsive: v,
          breakpoints: C,
          allowedAdTypes: w,
          fallbackContent: I,
          showFallbackOnError: j,
          onAdLoad: A,
          onAdClick: O,
          onAdImpression: X,
          onAdError: U,
          analyticsHooks: T,
          sessionId: J,
          userId: V,
          trackingEnabled: x,
          providers: B,
          primaryProvider: G,
          fallbackProviders: F,
          providerConfig: Q
        }
      );
    if (!i || !a)
      return console.error(
        'Advertisement: kind and content are required for single ads (count="one")'
      ), I ? /* @__PURE__ */ s.jsx(s.Fragment, { children: I }) : null;
    const we = ut(null), re = ut(!1), [Se, he] = At("loading"), [$, R] = At(le), [Le, Xe] = At({
      impressions: 0,
      clicks: 0,
      ctr: 0
    }), qe = En[i.replace(
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
    )] || En["banner-ad"], Ke = {
      ...qe,
      clickable: qe.clickable ?? !0,
      ...ee
    }, $e = Je(
      (ye, Te) => ({
        eventType: ye,
        adId: a.id || "unknown",
        adKind: qe.state,
        timestamp: Date.now(),
        sessionId: J,
        userId: V,
        metadata: Te
      }),
      [a.id, qe, J, V]
    ), ve = Je(
      (ye) => {
        var Te, at, Lt, ci, P, _e, ze;
        if (x)
          switch (ye.eventType) {
            case "impression":
              (Te = T == null ? void 0 : T.onImpression) == null || Te.call(T, ye);
              break;
            case "click":
              (at = T == null ? void 0 : T.onClick) == null || at.call(T, ye);
              break;
            case "dismiss":
              (Lt = T == null ? void 0 : T.onDismiss) == null || Lt.call(T, ye);
              break;
            case "error":
              (ci = T == null ? void 0 : T.onError) == null || ci.call(T, ye);
              break;
            case "conversion":
              (P = T == null ? void 0 : T.onConversion) == null || P.call(T, ye);
              break;
            case "view":
              (_e = T == null ? void 0 : T.onView) == null || _e.call(T, ye);
              break;
            case "interaction":
              (ze = T == null ? void 0 : T.onInteraction) == null || ze.call(T, ye);
              break;
          }
      },
      [x, T]
    ), Ue = Je(async () => {
      if (!we.current || B.length === 0)
        return;
      const ye = B.find(
        (Te) => Te.config.type === G
      );
      if (ye)
        try {
          if (await ye.loadAd(
            we.current,
            Ke
          )) {
            he("ready");
            return;
          }
        } catch (Te) {
          console.error(
            `Primary provider (${G}) failed:`,
            Te
          ), ve(
            $e("error", {
              provider: G,
              error: String(Te)
            })
          );
        }
      for (const Te of F) {
        const at = B.find(
          (Lt) => Lt.config.type === Te
        );
        if (at)
          try {
            if (await at.loadAd(
              we.current,
              Ke
            )) {
              he("ready");
              return;
            }
          } catch (Lt) {
            console.error(
              `Fallback provider (${Te}) failed:`,
              Lt
            ), ve(
              $e("error", {
                provider: Te,
                error: String(Lt)
              })
            );
          }
      }
      he("error");
    }, [
      B,
      G,
      F,
      Ke,
      ve,
      $e
    ]);
    Re(() => {
      B.length > 0 ? Ue() : he("ready");
    }, [Ue, B]), Re(() => {
      R(le);
    }, [le]), Re(() => {
      if (ne && ce > 0 && $) {
        const ye = setTimeout(() => {
          R(!1), ve(
            $e("dismiss", {
              reason: "auto-hide"
            })
          ), W == null || W(a.id || "unknown");
        }, ce);
        return () => clearTimeout(ye);
      }
    }, [
      ne,
      ce,
      $,
      a.id,
      W,
      ve,
      $e
    ]), Re(() => {
      $ && x && Se === "ready" && !re.current && (re.current = !0, Xe((ye) => ({
        ...ye,
        impressions: (ye.impressions || 0) + 1
      })), ve(
        $e("impression", {
          adKind: i,
          position: H,
          viewport: typeof window < "u" ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : void 0
        })
      ), X == null || X(a.id || "unknown"));
    }, [
      $,
      x,
      Se,
      a.id,
      X,
      ve,
      $e,
      i,
      H
    ]);
    const nt = Je(() => {
      a.actionUrl && (Xe((ye) => {
        const Te = (ye.clicks || 0) + 1, at = ye.impressions || 0;
        return {
          ...ye,
          clicks: Te,
          ctr: at > 0 ? Te / at * 100 : 0
        };
      }), ve(
        $e("click", {
          actionUrl: a.actionUrl,
          ctaText: a.ctaText,
          timestamp: Date.now()
        })
      ), O == null || O(
        a.id || "unknown",
        a.actionUrl
      ), Ke.clickable && window.open(
        a.actionUrl,
        "_blank",
        "noopener,noreferrer"
      ));
    }, [
      a.id,
      a.actionUrl,
      a.ctaText,
      Ke.clickable,
      O,
      ve,
      $e
    ]), mt = Je(() => {
      R(!1), ve(
        $e("dismiss", {
          reason: "user-close"
        })
      ), W == null || W(a.id || "unknown");
    }, [
      a.id,
      W,
      ve,
      $e
    ]), Oe = Je(() => {
      var ye, Te;
      i === "rewarded-modal" && (ve(
        $e("conversion", {
          rewardType: (ye = a.rewardData) == null ? void 0 : ye.type,
          rewardAmount: (Te = a.rewardData) == null ? void 0 : Te.amount
        })
      ), N == null || N(
        a.id || "unknown",
        a.rewardData
      ));
    }, [
      i,
      a.id,
      a.rewardData,
      N,
      ve,
      $e
    ]), jt = [
      se.advertisement,
      se[`advertisement--${i}`],
      se[`advertisement--${Ke.variant}`],
      se[`advertisement--${Ke.size}`],
      E && se["advertisement--animated"],
      ge && se["advertisement--loading"],
      ie && se["advertisement--error"],
      !$ && se["advertisement--hidden"],
      Y,
      me
    ].filter(Boolean).join(" "), It = {
      ...de,
      maxWidth: Z || ((ji = Ke.dimensions) == null ? void 0 : ji.maxWidth),
      maxHeight: z || ((Ni = Ke.dimensions) == null ? void 0 : Ni.maxHeight),
      position: H,
      zIndex: q,
      ...Ke.styles
    };
    if (!$ && ![
      "interstitial",
      "rewarded-modal",
      "exit-intent-modal"
    ].includes(i))
      return null;
    if (ge || Se === "loading")
      return /* @__PURE__ */ s.jsx(
        p,
        {
          ref: pe,
          className: jt,
          style: It,
          ...ae,
          children: /* @__PURE__ */ s.jsx(
            p,
            {
              className: se.advertisement__loading,
              children: "Loading advertisement..."
            }
          )
        }
      );
    if (ie || Se === "error")
      return I ? /* @__PURE__ */ s.jsx(
        p,
        {
          className: jt,
          style: It,
          children: I
        }
      ) : null;
    const Nt = ({
      imageUrl: ye,
      altText: Te,
      className: at
    }) => ye ? /* @__PURE__ */ s.jsx(
      "img",
      {
        src: ye,
        alt: Te || "Advertisement",
        className: at
      }
    ) : null, si = ({
      title: ye,
      className: Te,
      as: at = "h3"
    }) => ye ? Fe.createElement(at, { className: Te }, ye) : null, Bt = ({
      description: ye,
      className: Te
    }) => ye ? /* @__PURE__ */ s.jsx("p", { className: Te, children: ye }) : null, li = ({
      ctaText: ye,
      onClick: Te,
      className: at
    }) => ye ? /* @__PURE__ */ s.jsx(
      ke,
      {
        kind: "primary",
        className: at,
        onClick: Te,
        children: ye
      }
    ) : null, Ht = ({
      onClick: ye,
      className: Te,
      ariaLabel: at = "Close advertisement"
    }) => /* @__PURE__ */ s.jsx(
      ke,
      {
        kind: "ghost",
        className: Te,
        onClick: ye,
        "aria-label": at,
        children: "×"
      }
    ), Vt = ({
      title: ye,
      description: Te,
      ctaText: at,
      onCTAClick: Lt,
      titleClass: ci,
      descClass: P,
      ctaClass: _e,
      titleAs: ze = "h3"
    }) => /* @__PURE__ */ s.jsxs(p, { className: se.advertisement__content, children: [
      /* @__PURE__ */ s.jsx(
        si,
        {
          title: ye,
          className: ci,
          as: ze
        }
      ),
      /* @__PURE__ */ s.jsx(
        Bt,
        {
          description: Te,
          className: P
        }
      ),
      /* @__PURE__ */ s.jsx(
        li,
        {
          ctaText: at,
          onClick: Lt,
          className: _e
        }
      )
    ] }), Jt = () => {
      var ye;
      switch (i) {
        case "banner":
          return /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__banner,
              children: [
                /* @__PURE__ */ s.jsx(
                  Nt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: nt,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta
                  }
                )
              ]
            }
          );
        case "interstitial":
          return $ ? /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__modal,
              children: [
                Me && /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: se.advertisement__backdrop,
                    style: { opacity: Ee }
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  p,
                  {
                    className: se.advertisement__modal_content,
                    children: [
                      /* @__PURE__ */ s.jsx(
                        Ht,
                        {
                          onClick: mt,
                          className: se.advertisement__close
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        Nt,
                        {
                          imageUrl: a.imageUrl,
                          altText: a.altText,
                          className: se.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        Vt,
                        {
                          title: a.title,
                          description: a.description,
                          ctaText: a.ctaText,
                          onCTAClick: nt,
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
          return $ ? /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__modal,
              children: [
                Me && /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: se.advertisement__backdrop,
                    style: { opacity: Ee }
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  p,
                  {
                    className: se.advertisement__modal_content,
                    children: [
                      /* @__PURE__ */ s.jsxs(
                        p,
                        {
                          className: se.advertisement__reward_info,
                          children: [
                            /* @__PURE__ */ s.jsx("h2", { children: "Watch Ad to Earn Reward" }),
                            /* @__PURE__ */ s.jsxs("p", { children: [
                              "Complete this advertisement to earn:",
                              " ",
                              (ye = a.rewardData) == null ? void 0 : ye.description
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        Nt,
                        {
                          imageUrl: a.imageUrl,
                          altText: a.altText,
                          className: se.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        p,
                        {
                          className: se.advertisement__content,
                          children: [
                            /* @__PURE__ */ s.jsx(
                              si,
                              {
                                title: a.title,
                                className: se.advertisement__title,
                                as: "h3"
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              Bt,
                              {
                                description: a.description,
                                className: se.advertisement__description
                              }
                            ),
                            /* @__PURE__ */ s.jsxs(
                              p,
                              {
                                className: se.advertisement__reward_actions,
                                children: [
                                  /* @__PURE__ */ s.jsx(
                                    li,
                                    {
                                      ctaText: a.ctaText || "Claim Reward",
                                      onClick: () => {
                                        nt(), Oe();
                                      },
                                      className: se.advertisement__cta
                                    }
                                  ),
                                  /* @__PURE__ */ s.jsx(
                                    Ht,
                                    {
                                      onClick: mt,
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
          return /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__native,
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: se.advertisement__sponsored,
                    children: "Sponsored"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Nt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: nt,
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
          return /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__sticky,
              children: [
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: nt,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta,
                    titleAs: "span"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Ht,
                  {
                    onClick: mt,
                    className: se.advertisement__close
                  }
                )
              ]
            }
          );
        case "floating-widget":
          return /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__floating,
              children: [
                /* @__PURE__ */ s.jsx(
                  Ht,
                  {
                    onClick: mt,
                    className: se.advertisement__close
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Nt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: a.title,
                    ctaText: a.ctaText,
                    onCTAClick: nt,
                    titleClass: se.advertisement__title,
                    ctaClass: se.advertisement__cta,
                    titleAs: "h5"
                  }
                )
              ]
            }
          );
        case "toast-notification":
          return /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__toast,
              children: [
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: nt,
                    titleClass: se.advertisement__title,
                    descClass: se.advertisement__description,
                    ctaClass: se.advertisement__cta,
                    titleAs: "strong"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Ht,
                  {
                    onClick: mt,
                    className: se.advertisement__close
                  }
                )
              ]
            }
          );
        default:
          return /* @__PURE__ */ s.jsxs(
            p,
            {
              className: se.advertisement__default,
              children: [
                /* @__PURE__ */ s.jsx(
                  Nt,
                  {
                    imageUrl: a.imageUrl,
                    altText: a.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: a.title,
                    description: a.description,
                    ctaText: a.ctaText,
                    onCTAClick: nt,
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
    return /* @__PURE__ */ s.jsx(
      p,
      {
        ref: pe,
        className: jt,
        style: It,
        "data-ad-id": a.id,
        "data-ad-kind": i,
        ...ae,
        children: /* @__PURE__ */ s.jsx(
          p,
          {
            ref: we,
            className: se.advertisement__slot,
            children: Jt()
          }
        )
      }
    );
  }
);
Si.displayName = "Advertisements";
const bh = Ae(
  ({
    className: t = "",
    style: i = {},
    allowedAdTypes: a = [
      "banner",
      "native-card",
      "floating-widget"
    ],
    maxAds: o = 3,
    rotationInterval: c = 3e4,
    autoRotate: _ = !1,
    adPool: m = [],
    fallbackContent: h = null,
    showFallbackOnError: f = !0,
    onAdLoad: g,
    onAdError: b,
    onAdClick: v,
    onAdImpression: C,
    layout: w = "stack",
    spacing: I = 16,
    alignItems: j = "flex-start",
    justifyContent: A = "flex-start",
    responsive: O = !0,
    breakpoints: X = {
      mobile: { maxAds: 1, layout: "single" },
      tablet: { maxAds: 2, layout: "stack" },
      desktop: { maxAds: 3, layout: "stack" }
    },
    analyticsHooks: W,
    sessionId: U,
    userId: N,
    trackingEnabled: T = !0,
    providers: J = [],
    primaryProvider: V = "custom",
    fallbackProviders: B = [],
    providerConfig: G = {},
    enableProviderRotation: F = !1,
    providerRotationInterval: Q = 3e5,
    providerFailureThreshold: le = 3,
    globalTargeting: ge = {},
    providerSpecificTargeting: ie = {}
  }) => {
    const [ne, ce] = At([]), [E, te] = At({}), [x, Z] = At({
      totalImpressions: 0,
      totalClicks: 0,
      loadedAds: 0,
      errorRate: 0
    }), [z, H] = At(0), q = ut(), [ee, Y] = At("desktop"), me = ki(
      () => `ad-container-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      []
    ), de = Je(() => {
      if (!O || !X)
        return { maxAds: o, layout: w };
      const $ = X[ee];
      return $ ? {
        maxAds: $.maxAds || o,
        layout: $.layout || w
      } : { maxAds: o, layout: w };
    }, [
      O,
      X,
      ee,
      o,
      w
    ]);
    Re(() => {
      if (!O) return;
      const $ = () => {
        const R = window.innerWidth;
        R < 768 ? Y("mobile") : R < 1024 ? Y("tablet") : Y("desktop");
      };
      return $(), window.addEventListener("resize", $), () => {
        window.removeEventListener(
          "resize",
          $
        );
      };
    }, [O]);
    const Me = Je(() => {
      if (m.length === 0) return [];
      const { maxAds: $ } = de(), R = m.filter(
        (qe) => a.includes(qe.kind)
      );
      if (R.length === 0) return [];
      const Le = [];
      return R.forEach((qe) => {
        const Ke = qe.weight || 1;
        for (let $e = 0; $e < Ke; $e++)
          Le.push(qe);
      }), [...Le].sort(
        () => Math.random() - 0.5
      ).slice(0, $);
    }, [m, a, de]);
    Re(() => {
      const $ = Me();
      ce($);
    }, [Me]), Re(() => {
      if (!(!_ || c <= 0 || ne.length <= 1))
        return q.current = setInterval(() => {
          H(
            ($) => ($ + 1) % ne.length
          );
        }, c), () => {
          q.current && clearInterval(q.current);
        };
    }, [_, c, ne.length]), Je(
      ($, R) => {
        Z((Le) => ({
          ...Le,
          loadedAds: Le.loadedAds + 1
        })), g == null || g($, R);
      },
      [g]
    );
    const Ee = Je(
      ($, R) => {
        te((Le) => ({ ...Le, [$]: R })), Z((Le) => {
          const Xe = ne.length > 0 ? (Object.keys(E).length + 1) / ne.length : 0;
          return {
            ...Le,
            errorRate: Xe
          };
        }), b == null || b($, R);
      },
      [E, ne.length, b]
    ), ae = Je(
      ($, R) => {
        Z((Le) => ({
          ...Le,
          totalClicks: Le.totalClicks + 1
        })), v == null || v($, R);
      },
      [v]
    ), pe = Je(
      ($) => {
        Z((R) => ({
          ...R,
          totalImpressions: R.totalImpressions + 1
        })), C == null || C($);
      },
      [C]
    ), we = [
      se.adContainer,
      se[`adContainer--${w}`],
      O && se["adContainer--responsive"],
      t
    ].filter(Boolean).join(" "), re = {
      ...i,
      gap: I,
      alignItems: j,
      justifyContent: A
    };
    if (ne.length === 0 || Object.keys(E).length === ne.length)
      return f && h ? /* @__PURE__ */ s.jsx(
        p,
        {
          className: we,
          style: re,
          children: h
        }
      ) : null;
    const { layout: Se } = de(), he = () => {
      switch (Se) {
        case "single":
          const $ = ne[z] || ne[0];
          return $ ? /* @__PURE__ */ s.jsx(
            Si,
            {
              kind: $.kind,
              content: $.content,
              onAdClick: ae,
              onAdImpression: pe,
              onAdError: Ee,
              analyticsHooks: W,
              sessionId: U,
              userId: N,
              trackingEnabled: T,
              providers: J,
              primaryProvider: V,
              fallbackProviders: B,
              ...$.props
            },
            `${$.content.id}-${z}`
          ) : null;
        case "carousel":
          return ne.map((R) => /* @__PURE__ */ s.jsx(
            Si,
            {
              kind: R.kind,
              content: R.content,
              onAdClick: ae,
              onAdImpression: pe,
              onAdError: Ee,
              analyticsHooks: W,
              sessionId: U,
              userId: N,
              trackingEnabled: T,
              providers: J,
              primaryProvider: V,
              fallbackProviders: B,
              ...R.props
            },
            R.content.id
          ));
        case "grid":
          return /* @__PURE__ */ s.jsx(
            p,
            {
              kind: "grid-container",
              className: se.adContainer__grid,
              children: ne.map((R) => /* @__PURE__ */ s.jsx(
                Si,
                {
                  kind: R.kind,
                  content: R.content,
                  onAdClick: ae,
                  onAdImpression: pe,
                  onAdError: Ee,
                  analyticsHooks: W,
                  sessionId: U,
                  userId: N,
                  trackingEnabled: T,
                  providers: J,
                  primaryProvider: V,
                  fallbackProviders: B,
                  ...R.props
                },
                R.content.id
              ))
            }
          );
        case "stack":
        default:
          return ne.map((R) => /* @__PURE__ */ s.jsx(
            Si,
            {
              kind: R.kind,
              content: R.content,
              onAdClick: ae,
              onAdImpression: pe,
              onAdError: Ee,
              analyticsHooks: W,
              sessionId: U,
              userId: N,
              trackingEnabled: T,
              providers: J,
              primaryProvider: V,
              fallbackProviders: B,
              ...R.props
            },
            R.content.id
          ));
      }
    };
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        className: we,
        style: re,
        "data-container-id": me,
        "data-layout": Se,
        children: [
          Se === "carousel" && /* @__PURE__ */ s.jsxs(p, { className: se.adContainer__carousel, children: [
            he(),
            ne.length > 1 && /* @__PURE__ */ s.jsx(
              p,
              {
                className: se.adContainer__carousel_indicators,
                children: ne.map(($, R) => /* @__PURE__ */ s.jsx(
                  ke,
                  {
                    kind: "ghost",
                    className: [
                      se.adContainer__carousel_indicator,
                      R === z && se["adContainer__carousel_indicator--active"]
                    ].filter(Boolean).join(" "),
                    onClick: () => H(R),
                    "aria-label": `Show ad ${R + 1}`
                  },
                  R
                ))
              }
            )
          ] }),
          Se !== "carousel" && he()
        ]
      }
    );
  }
), vh = {
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
}, xh = {
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
  static createWithConfig(i, a, o = {}) {
    const c = vh[i], _ = {
      ...c == null ? void 0 : c.defaultProps,
      ...o,
      kind: i,
      content: a
    };
    return /* @__PURE__ */ s.jsx(Si, { ..._ });
  }
  static create(i, a, o = {}) {
    return He.createWithConfig(
      i,
      a,
      o
    );
  }
  static createBatch(i) {
    return i.map(
      ({ kind: a, content: o, props: c }) => He.createWithConfig(
        a,
        o,
        c
      )
    );
  }
  static createConditional(i, a, o, c) {
    return i ? He.createWithConfig(
      a,
      o,
      c
    ) : null;
  }
  static createSmart(i, a, o) {
    return i.isGame ? He.createWithConfig(
      "in-game-billboard",
      a,
      o
    ) : i.isMobile ? He.createWithConfig(
      "interstitial",
      a,
      o
    ) : i.userEngagement === "high" ? He.createWithConfig(
      "rewarded-modal",
      a,
      o
    ) : He.createWithConfig(
      "banner",
      a,
      o
    );
  }
  static createAdSet(i, a, o = {}) {
    const c = xh[i], _ = {};
    return o.onlyPrimary && c.primary ? (_.primary = He.createWithConfig(
      c.primary,
      a.primary || {},
      o.sharedProps
    ), _) : ([c.primary, ...c.secondary || []].forEach(
      (m, h) => {
        var g;
        const f = h === 0 ? "primary" : `secondary${h}`;
        _[f] = He.createWithConfig(
          m,
          a[f] || {},
          {
            ...o.sharedProps,
            ...((g = o.positions) == null ? void 0 : g[f]) || {}
          }
        );
      }
    ), _);
  }
}
const wh = {
  batchCreate: (t) => t.map(
    ({ kind: i, content: a, props: o }) => He.createWithConfig(
      i,
      a,
      o
    )
  ),
  conditionalCreate: (t) => t.map(
    ({ condition: i, kind: a, content: o, props: c }) => i ? He.createWithConfig(
      a,
      o,
      c
    ) : null
  ),
  responsiveCreate: (t, i) => ({
    mobile: i.mobile ? He.createWithConfig(
      i.mobile.kind,
      t,
      i.mobile.props
    ) : null,
    tablet: i.tablet ? He.createWithConfig(
      i.tablet.kind,
      t,
      i.tablet.props
    ) : null,
    desktop: i.desktop ? He.createWithConfig(
      i.desktop.kind,
      t,
      i.desktop.props
    ) : null
  }),
  abTestCreate: (t, i, a) => {
    const o = i.reduce(
      (m, h) => m + (h.weight || 1),
      0
    );
    let c = 0;
    if (a)
      c = Math.abs(
        a.split("").reduce((m, h) => m + h.charCodeAt(0), 0)
      ) % i.length;
    else {
      let m = Math.random() * o;
      for (let h = 0; h < i.length; h++)
        if (m -= i[h].weight || 1, m <= 0) {
          c = h;
          break;
        }
    }
    const _ = i[c];
    return He.createWithConfig(
      _.kind,
      t,
      _.props
    );
  }
}, kh = {
  websiteHeader: (t) => He.createWithConfig(
    "banner",
    t,
    { position: "relative" }
  ),
  websiteFooter: (t) => He.createWithConfig(
    "banner",
    t,
    { position: "relative" }
  ),
  websiteInContent: (t) => He.createWithConfig(
    "native-card",
    t,
    { position: "relative" }
  ),
  websiteSidebar: (t) => He.createWithConfig(
    "native-card",
    t,
    { position: "relative" }
  ),
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
  productPromo: (t) => He.createWithConfig(
    "banner",
    t,
    { position: "relative" }
  ),
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
  sponsoredContent: (t) => He.createWithConfig(
    "native-card",
    t,
    { position: "relative" }
  ),
  newsletterPromo: (t) => He.createWithConfig(
    "sticky-bar",
    t,
    { position: "fixed" }
  )
};
Si.Factory = He;
Si.Utils = wh;
Si.Presets = kh;
const Ch = "_analytics__container_8rpyb_1", Sh = "_analytics__header_8rpyb_15", zh = "_analytics__content_8rpyb_39", jh = "_analytics__footer_8rpyb_44", Nh = "_analytics__controls_8rpyb_211", Th = "_analytics__loading_8rpyb_230", Ph = "_spin_8rpyb_1", Eh = "_analytics__error_8rpyb_249", Ih = "_analytics__actions_8rpyb_277", Lh = "_analytics__metric_container_8rpyb_311", Ah = "_analytics__metric_value_8rpyb_324", Mh = "_analytics__header_actions_8rpyb_346", D = {
  analytics__container: Ch,
  analytics__header: Sh,
  "analytics__header-title": "_analytics__header-title_8rpyb_23",
  "analytics__header-subtitle": "_analytics__header-subtitle_8rpyb_29",
  "analytics__header-actions": "_analytics__header-actions_8rpyb_34",
  analytics__content: zh,
  analytics__footer: jh,
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
  analytics__controls: Nh,
  "analytics__controls-group": "_analytics__controls-group_8rpyb_220",
  "analytics__controls-label": "_analytics__controls-label_8rpyb_225",
  analytics__loading: Th,
  "analytics__loading-spinner": "_analytics__loading-spinner_8rpyb_237",
  spin: Ph,
  "analytics__loading-text": "_analytics__loading-text_8rpyb_245",
  analytics__error: Eh,
  "analytics__error-icon": "_analytics__error-icon_8rpyb_258",
  "analytics__error-message": "_analytics__error-message_8rpyb_263",
  "analytics__error-details": "_analytics__error-details_8rpyb_268",
  "analytics__error-actions": "_analytics__error-actions_8rpyb_273",
  analytics__actions: Ih,
  "analytics__actions-button": "_analytics__actions-button_8rpyb_282",
  "analytics__actions-button--primary": "_analytics__actions-button--primary_8rpyb_299",
  "analytics--dashboard": "_analytics--dashboard_8rpyb_308",
  "analytics--metrics": "_analytics--metrics_8rpyb_311",
  analytics__metric_container: Lh,
  "analytics--performance": "_analytics--performance_8rpyb_315",
  "analytics--realtime": "_analytics--realtime_8rpyb_318",
  "analytics--reports": "_analytics--reports_8rpyb_321",
  "analytics--sm": "_analytics--sm_8rpyb_324",
  analytics__metric_value: Ah,
  "analytics--md": "_analytics--md_8rpyb_330",
  "analytics--lg": "_analytics--lg_8rpyb_333",
  "analytics--loading": "_analytics--loading_8rpyb_339",
  "analytics--error": "_analytics--error_8rpyb_343",
  "analytics--refreshable": "_analytics--refreshable_8rpyb_346",
  analytics__header_actions: Mh,
  "analytics--exportable": "_analytics--exportable_8rpyb_349"
}, Oh = {
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
}, Rh = {
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
}, Fh = {
  kind: "chart",
  variant: "chart",
  type: "performance",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !1
}, Dh = {
  kind: "chart",
  variant: "chart",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, $h = {
  kind: "chart",
  variant: "chart",
  type: "traffic",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Wh = {
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
}, Uh = {
  kind: "metric",
  variant: "metric",
  type: "revenue",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Zh = {
  kind: "heatmap",
  variant: "heatmap",
  type: "user-behavior",
  layout: "fullscreen",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Hh = {
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
}, qh = {
  kind: "cohort",
  variant: "cohort",
  type: "revenue",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Yh = {
  kind: "report",
  variant: "report",
  type: "performance",
  layout: "list",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !1,
  drilldown: !1
}, Jh = {
  kind: "report",
  variant: "report",
  type: "custom",
  layout: "list",
  timeRange: "custom",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Xh = {
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
}, Qh = {
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
}, Lr = {
  "performance-dashboard": Oh,
  "user-behavior-dashboard": Rh,
  "conversion-dashboard": Bh,
  "line-chart": Fh,
  "bar-chart": Dh,
  "pie-chart": $h,
  "kpi-metric": Wh,
  "revenue-metric": Uh,
  "user-heatmap": Zh,
  "conversion-heatmap": Hh,
  "conversion-funnel": Vh,
  "user-journey-funnel": Gh,
  "user-cohort": Kh,
  "revenue-cohort": qh,
  "performance-report": Yh,
  "custom-report": Jh,
  "realtime-metrics": Xh,
  "realtime-traffic": Qh
}, ef = [], tf = [], nf = [], af = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6"
], rf = [], dl = Ae(
  ({
    children: t,
    className: i = "",
    style: a = {},
    "aria-label": o,
    // Analytics configuration
    kind: c = "dashboard",
    variant: _ = "dashboard",
    type: m = "chart",
    size: h = "md",
    // Content and data
    title: f,
    subtitle: g,
    data: b = ef,
    metrics: v = tf,
    query: C,
    filters: w = nf,
    // Configuration
    config: I = {},
    timeRange: j = "day",
    layout: A = "single",
    autoRefresh: O = !1,
    refreshInterval: X = 3e4,
    // States
    loading: W = !1,
    error: U = null,
    empty: N = !1,
    emptyMessage: T = "No data available",
    // Interactivity
    interactive: J = !0,
    drilldown: V = !1,
    exportable: B = !1,
    filterable: G = !1,
    searchable: F = !1,
    refreshable: Q = !1,
    // Event handlers
    onDataPoint: le,
    onMetricClick: ge,
    onFilter: ie,
    onExport: ne,
    onRefresh: ce,
    onDrilldown: E,
    onTimeRangeChange: te,
    // Customization
    colors: x = af,
    theme: Z = "auto",
    height: z = 300,
    showHeader: H = !0,
    showFooter: q = !1,
    showLegend: ee = !0,
    showControls: Y = !1,
    // Analytics-specific
    chartType: me = "line",
    aggregation: de = "sum",
    granularity: Me = "day",
    // Real-time
    realtime: Ee = !1,
    realtimeEndpoint: ae,
    // Advanced
    customRenderer: pe,
    plugins: we = rf,
    ...re
  }, Se) => {
    const he = ki(() => ({ ...Lr[`${c}-default`] || Lr[c] || {}, ...I }), [c, I]), [$, R] = At(b), [Le, Xe] = At(w), [qe, Ke] = At(!1), [$e, ve] = At(null), Ue = ut(null), nt = ut(ce);
    Re(() => {
      nt.current = ce;
    }, [ce]);
    const mt = Je(() => {
      var P;
      qe || (Ke(!0), (P = nt.current) == null || P.call(nt), setTimeout(() => {
        Ke(!1), ve(/* @__PURE__ */ new Date());
      }, 1e3));
    }, [qe]);
    Je(
      (P) => {
        Xe(P), ie == null || ie(P);
      },
      [ie]
    );
    const Oe = Je(
      (P) => {
        ne == null || ne(P);
      },
      [ne]
    ), jt = Je(
      (P) => {
        te == null || te(P);
      },
      [te]
    );
    Re(() => {
      if (O && X > 0)
        return Ue.current = setInterval(() => {
          var P;
          Ke(!0), (P = nt.current) == null || P.call(nt), setTimeout(() => {
            Ke(!1), ve(/* @__PURE__ */ new Date());
          }, 1e3);
        }, X), () => {
          Ue.current && clearInterval(Ue.current);
        };
    }, [O, X]), Re(() => {
      R(b), ve(/* @__PURE__ */ new Date());
    }, [b]);
    const It = (P, _e) => {
      switch (_e) {
        case "currency":
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(P);
        case "percentage":
          return `${P}%`;
        case "duration":
          return `${P}ms`;
        default:
          return new Intl.NumberFormat().format(P);
      }
    }, Nt = () => H ? /* @__PURE__ */ s.jsxs(p, { className: D.analytics__header, children: [
      /* @__PURE__ */ s.jsxs(p, { children: [
        f && /* @__PURE__ */ s.jsx(
          "h3",
          {
            className: D.analytics__header_title,
            children: f
          }
        ),
        g && /* @__PURE__ */ s.jsx(
          "p",
          {
            className: D.analytics__header_subtitle,
            children: g
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs(
        p,
        {
          className: D.analytics__header_actions,
          children: [
            Q && ce && /* @__PURE__ */ s.jsx(
              ke,
              {
                kind: "ghost",
                onClick: mt,
                disabled: qe,
                title: "Refresh data",
                children: qe ? "⟳" : "↻"
              }
            ),
            B && /* @__PURE__ */ s.jsxs(
              p,
              {
                className: D.analytics__actions,
                children: [
                  /* @__PURE__ */ s.jsx(
                    ke,
                    {
                      kind: "secondary",
                      className: D.analytics__actions_button,
                      onClick: () => Oe("csv"),
                      title: "Export as CSV",
                      children: "CSV"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    ke,
                    {
                      kind: "secondary",
                      className: D.analytics__actions_button,
                      onClick: () => Oe("pdf"),
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
    ] }) : null, si = () => Y ? /* @__PURE__ */ s.jsxs(p, { className: D.analytics__controls, children: [
      /* @__PURE__ */ s.jsxs(
        p,
        {
          className: D.analytics__controls_group,
          children: [
            /* @__PURE__ */ s.jsx(
              "label",
              {
                className: D.analytics__controls_label,
                children: "Time Range:"
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: j,
                onChange: (P) => jt(P.target.value),
                className: D.analytics__controls_select,
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: "hour", children: "Last Hour" }),
                  /* @__PURE__ */ s.jsx("option", { value: "day", children: "Last Day" }),
                  /* @__PURE__ */ s.jsx("option", { value: "week", children: "Last Week" }),
                  /* @__PURE__ */ s.jsx("option", { value: "month", children: "Last Month" }),
                  /* @__PURE__ */ s.jsx("option", { value: "quarter", children: "Last Quarter" }),
                  /* @__PURE__ */ s.jsx("option", { value: "year", children: "Last Year" })
                ]
              }
            )
          ]
        }
      ),
      G && /* @__PURE__ */ s.jsx(
        p,
        {
          className: D.analytics__controls_group,
          children: /* @__PURE__ */ s.jsx(
            "label",
            {
              className: D.analytics__controls_label,
              children: "Filters:"
            }
          )
        }
      )
    ] }) : null, Bt = () => {
      if (W)
        return /* @__PURE__ */ s.jsxs(p, { className: D.analytics__loading, children: [
          /* @__PURE__ */ s.jsx(
            p,
            {
              className: D.analytics__loading_spinner
            }
          ),
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: D.analytics__loading_text,
              children: "Loading analytics..."
            }
          )
        ] });
      if (U)
        return /* @__PURE__ */ s.jsxs(p, { className: D.analytics__error, children: [
          /* @__PURE__ */ s.jsx(
            p,
            {
              className: D.analytics__error_icon,
              children: "⚠️"
            }
          ),
          /* @__PURE__ */ s.jsxs(
            p,
            {
              className: D.analytics__error_message,
              children: [
                /* @__PURE__ */ s.jsx("strong", { children: "Error loading analytics:" }),
                /* @__PURE__ */ s.jsx("br", {}),
                U
              ]
            }
          ),
          Q && ce && /* @__PURE__ */ s.jsx(
            p,
            {
              className: D.analytics__error_actions,
              children: /* @__PURE__ */ s.jsx(
                ke,
                {
                  kind: "secondary",
                  onClick: mt,
                  className: D.analytics__error_retry,
                  children: "Retry"
                }
              )
            }
          )
        ] });
      if (N || !$.length && !v.length)
        return /* @__PURE__ */ s.jsx(p, { className: D.analytics__error, children: /* @__PURE__ */ s.jsx(
          p,
          {
            className: D.analytics__error_message,
            children: T
          }
        ) });
      if (pe)
        return pe($);
      if (t)
        return t;
      switch (c) {
        case "dashboard":
          return li();
        case "chart":
          return Ht();
        case "metric":
          return Vt();
        case "heatmap":
          return Jt();
        case "funnel":
          return ji();
        case "cohort":
          return Ni();
        case "report":
          return ye();
        case "realtime":
          return Te();
        default:
          return Ht();
      }
    }, li = () => /* @__PURE__ */ s.jsx(
      p,
      {
        kind: "grid-container",
        className: D.analytics__dashboard_grid,
        children: v.map((P, _e) => /* @__PURE__ */ s.jsxs(
          p,
          {
            className: D.analytics__metric_container,
            onClick: () => ge == null ? void 0 : ge(P),
            children: [
              /* @__PURE__ */ s.jsx(
                p,
                {
                  className: D.analytics__metric_value,
                  children: It(
                    P.value,
                    P.format
                  )
                }
              ),
              /* @__PURE__ */ s.jsx(
                p,
                {
                  className: D.analytics__metric_label,
                  children: P.name
                }
              ),
              P.change !== void 0 && /* @__PURE__ */ s.jsxs(
                p,
                {
                  className: `${D.analytics__metric_change} ${P.trend ? D[`analytics__metric_change--${P.trend}`] : ""}`,
                  children: [
                    P.change > 0 ? "+" : "",
                    P.change,
                    "%"
                  ]
                }
              )
            ]
          },
          P.id || _e
        ))
      }
    ), Ht = () => /* @__PURE__ */ s.jsxs(
      p,
      {
        className: D.analytics__chart_container,
        style: { height: z },
        children: [
          /* @__PURE__ */ s.jsxs(
            p,
            {
              className: D.analytics__chart_loading,
              children: [
                "📊 Chart visualization (",
                me,
                ") -",
                " ",
                $.length,
                " data points"
              ]
            }
          ),
          ee && at()
        ]
      }
    ), Vt = () => {
      const P = v[0] || {
        name: "Metric",
        value: 0
      };
      return /* @__PURE__ */ s.jsxs(
        p,
        {
          className: D.analytics__metric_container,
          children: [
            /* @__PURE__ */ s.jsx(
              p,
              {
                className: D.analytics__metric_value,
                children: It(P.value, P.format)
              }
            ),
            /* @__PURE__ */ s.jsx(
              p,
              {
                className: D.analytics__metric_label,
                children: P.name
              }
            ),
            P.change !== void 0 && /* @__PURE__ */ s.jsxs(
              p,
              {
                className: `${D.analytics__metric_change} ${P.trend ? D[`analytics__metric_change--${P.trend}`] : ""}`,
                children: [
                  P.change > 0 ? "+" : "",
                  P.change,
                  "%"
                ]
              }
            )
          ]
        }
      );
    }, Jt = () => /* @__PURE__ */ s.jsx(
      p,
      {
        className: D.analytics__heatmap_container,
        style: { height: z },
        children: /* @__PURE__ */ s.jsxs(
          p,
          {
            className: D.analytics__chart_loading,
            children: [
              "🔥 Heatmap visualization - ",
              $.length,
              " ",
              "data points"
            ]
          }
        )
      }
    ), ji = () => /* @__PURE__ */ s.jsx(
      p,
      {
        className: D.analytics__funnel_container,
        children: $.map((P, _e) => /* @__PURE__ */ s.jsx(
          p,
          {
            className: D.analytics__funnel_step,
            children: /* @__PURE__ */ s.jsxs(
              p,
              {
                className: D.analytics__funnel_step_content,
                children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: D.analytics__funnel_step_label,
                      children: P.label || `Step ${_e + 1}`
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: D.analytics__funnel_step_value,
                      children: P.value || 0
                    }
                  )
                ]
              }
            )
          },
          _e
        ))
      }
    ), Ni = () => /* @__PURE__ */ s.jsx(
      p,
      {
        className: D.analytics__chart_container,
        style: { height: z },
        children: /* @__PURE__ */ s.jsxs(
          p,
          {
            className: D.analytics__chart_loading,
            children: [
              "📋 Cohort analysis - ",
              v.length,
              " cohorts"
            ]
          }
        )
      }
    ), ye = () => /* @__PURE__ */ s.jsx(
      p,
      {
        className: D.analytics__chart_container,
        children: /* @__PURE__ */ s.jsxs(
          p,
          {
            className: D.analytics__chart_loading,
            children: [
              "📊 Report view - ",
              $.length,
              " rows"
            ]
          }
        )
      }
    ), Te = () => /* @__PURE__ */ s.jsxs(
      p,
      {
        kind: "grid-container",
        className: D.analytics__dashboard_grid,
        children: [
          Ee && /* @__PURE__ */ s.jsxs(
            p,
            {
              className: D.analytics__realtime_indicator,
              children: [
                /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: D.analytics__live_dot
                  }
                ),
                "LIVE"
              ]
            }
          ),
          v.map((P, _e) => /* @__PURE__ */ s.jsxs(
            p,
            {
              className: D.analytics__metric_container,
              children: [
                /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: D.analytics__metric_value,
                    children: It(
                      P.value,
                      P.format
                    )
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: D.analytics__metric_label,
                    children: P.name
                  }
                )
              ]
            },
            P.id || _e
          ))
        ]
      }
    ), at = () => /* @__PURE__ */ s.jsx(p, { className: D.analytics__chart_legend, children: x.map((P, _e) => /* @__PURE__ */ s.jsxs(
      p,
      {
        className: D.analytics__chart_legend_item,
        children: [
          /* @__PURE__ */ s.jsx(
            p,
            {
              className: D.analytics__chart_legend_item_color,
              style: { backgroundColor: P }
            }
          ),
          /* @__PURE__ */ s.jsxs("span", { children: [
            "Series ",
            _e + 1
          ] })
        ]
      },
      _e
    )) }), Lt = () => q ? /* @__PURE__ */ s.jsxs(p, { className: D.analytics__footer, children: [
      /* @__PURE__ */ s.jsx(p, { children: $e && /* @__PURE__ */ s.jsxs(
        "span",
        {
          className: D.analytics__last_updated,
          children: [
            "Last updated:",
            " ",
            $e.toLocaleTimeString()
          ]
        }
      ) }),
      /* @__PURE__ */ s.jsx(p, { children: O && /* @__PURE__ */ s.jsxs(
        "span",
        {
          className: D.analytics__auto_refresh,
          children: [
            "Auto-refresh: ",
            X / 1e3,
            "s"
          ]
        }
      ) })
    ] }) : null, ci = [
      D.analytics__container,
      D[`analytics--${_}`],
      D[`analytics--${h}`],
      W && D["analytics--loading"],
      U && D["analytics--error"],
      Q && D["analytics--refreshable"],
      B && D["analytics--exportable"],
      i
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        ref: Se,
        className: ci,
        style: a,
        "aria-label": o || `${_} analytics`,
        "data-analytics-kind": c,
        "data-analytics-type": he.type,
        ...re,
        children: [
          Nt(),
          si(),
          /* @__PURE__ */ s.jsx(p, { className: D.analytics__content, children: Bt() }),
          Lt()
        ]
      }
    );
  }
);
dl.displayName = "Analytics";
const _l = Ae(
  ({
    kind: t,
    configuration: i,
    title: a = "Analytics",
    data: o = [],
    metric: c,
    timeRange: _ = "24h",
    refreshRate: m = 3e4,
    showLegend: h = !0,
    showTooltip: f = !0,
    interactive: g = !0,
    loading: b = !1,
    error: v,
    onRefresh: C,
    onExport: w,
    index: I,
    ...j
  }, A) => {
    switch (t) {
      case "dashboard":
        return /* @__PURE__ */ s.jsxs(
          p,
          {
            ref: A,
            className: D.dashboardContainer,
            ...j,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.dashboardHeader, children: [
                /* @__PURE__ */ s.jsx("h2", { className: D.title, children: a }),
                /* @__PURE__ */ s.jsxs(p, { className: D.controls, children: [
                  C && /* @__PURE__ */ s.jsx(
                    ke,
                    {
                      kind: "ghost",
                      onClick: C,
                      className: D.refreshButton,
                      disabled: b,
                      children: b ? "⟳" : "↻"
                    }
                  ),
                  w && /* @__PURE__ */ s.jsx(
                    ke,
                    {
                      kind: "secondary",
                      onClick: () => w("csv"),
                      className: D.exportButton,
                      children: "Export"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ s.jsxs(p, { className: D.dashboardGrid, children: [
                c && /* @__PURE__ */ s.jsxs(p, { className: D.metricCard, children: [
                  /* @__PURE__ */ s.jsx(p, { className: D.metricValue, children: c.value }),
                  /* @__PURE__ */ s.jsx(p, { className: D.metricLabel, children: c.label }),
                  c.change && /* @__PURE__ */ s.jsxs(
                    p,
                    {
                      className: `${D.metricChange} ${D[c.trend || "neutral"]}`,
                      children: [
                        c.change > 0 ? "+" : "",
                        c.change,
                        "%"
                      ]
                    }
                  )
                ] }),
                o.length > 0 && /* @__PURE__ */ s.jsx(p, { className: D.chartContainer, children: /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: D.chartPlaceholder,
                    children: "📊 Chart visualization would go here"
                  }
                ) })
              ] }),
              v && /* @__PURE__ */ s.jsxs(p, { className: D.errorMessage, children: [
                "Error: ",
                v
              ] })
            ]
          }
        );
      case "realtime":
        return /* @__PURE__ */ s.jsxs(
          p,
          {
            ref: A,
            className: D.realtimeContainer,
            ...j,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.realtimeHeader, children: [
                /* @__PURE__ */ s.jsx("h3", { className: D.title, children: a }),
                /* @__PURE__ */ s.jsxs(p, { className: D.liveIndicator, children: [
                  /* @__PURE__ */ s.jsx("span", { className: D.liveDot }),
                  "LIVE"
                ] })
              ] }),
              /* @__PURE__ */ s.jsx(p, { className: D.realtimeMetrics, children: c && /* @__PURE__ */ s.jsxs(p, { className: D.realtimeMetric, children: [
                /* @__PURE__ */ s.jsx("span", { className: D.value, children: c.value }),
                /* @__PURE__ */ s.jsx("span", { className: D.label, children: c.label })
              ] }) }),
              o.length > 0 && /* @__PURE__ */ s.jsx(p, { className: D.realtimeChart, children: /* @__PURE__ */ s.jsx(
                p,
                {
                  className: D.chartPlaceholder,
                  children: "📈 Real-time chart"
                }
              ) })
            ]
          }
        );
      case "reports":
        return /* @__PURE__ */ s.jsxs(
          p,
          {
            ref: A,
            className: D.reportsContainer,
            ...j,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.reportsHeader, children: [
                /* @__PURE__ */ s.jsx("h3", { className: D.title, children: a }),
                /* @__PURE__ */ s.jsx(p, { className: D.timeRangeSelector, children: /* @__PURE__ */ s.jsxs(
                  "select",
                  {
                    value: _,
                    className: D.timeRangeSelect,
                    children: [
                      /* @__PURE__ */ s.jsx("option", { value: "1h", children: "Last Hour" }),
                      /* @__PURE__ */ s.jsx("option", { value: "24h", children: "Last 24 Hours" }),
                      /* @__PURE__ */ s.jsx("option", { value: "7d", children: "Last 7 Days" }),
                      /* @__PURE__ */ s.jsx("option", { value: "30d", children: "Last 30 Days" }),
                      /* @__PURE__ */ s.jsx("option", { value: "90d", children: "Last 90 Days" }),
                      /* @__PURE__ */ s.jsx("option", { value: "1y", children: "Last Year" })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ s.jsx(p, { className: D.reportsContent, children: o.length > 0 ? /* @__PURE__ */ s.jsx(p, { className: D.reportsTable, children: /* @__PURE__ */ s.jsx(
                p,
                {
                  className: D.tablePlaceholder,
                  children: "📋 Reports table would go here"
                }
              ) }) : /* @__PURE__ */ s.jsx(p, { className: D.noData, children: "No data available for selected time range" }) })
            ]
          }
        );
      case "metrics":
        return /* @__PURE__ */ s.jsxs(
          p,
          {
            ref: A,
            className: D.metricsContainer,
            ...j,
            children: [
              /* @__PURE__ */ s.jsx(p, { className: D.metricsHeader, children: /* @__PURE__ */ s.jsx("h3", { className: D.title, children: a }) }),
              /* @__PURE__ */ s.jsx(p, { className: D.metricsGrid, children: c && /* @__PURE__ */ s.jsxs(p, { className: D.metricCard, children: [
                /* @__PURE__ */ s.jsx(p, { className: D.metricIcon, children: "📊" }),
                /* @__PURE__ */ s.jsxs(p, { className: D.metricContent, children: [
                  /* @__PURE__ */ s.jsx(p, { className: D.metricValue, children: c.value }),
                  /* @__PURE__ */ s.jsx(p, { className: D.metricLabel, children: c.label })
                ] })
              ] }) })
            ]
          }
        );
      case "performance":
        return /* @__PURE__ */ s.jsxs(
          p,
          {
            ref: A,
            className: D.performanceContainer,
            ...j,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.performanceHeader, children: [
                /* @__PURE__ */ s.jsx("h3", { className: D.title, children: a }),
                /* @__PURE__ */ s.jsx(p, { className: D.performanceScore, children: (c == null ? void 0 : c.value) || 85 })
              ] }),
              /* @__PURE__ */ s.jsxs(p, { className: D.performanceMetrics, children: [
                /* @__PURE__ */ s.jsx(p, { className: D.performanceBar, children: /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: D.performanceFill,
                    style: {
                      width: `${(c == null ? void 0 : c.value) || 85}%`
                    }
                  }
                ) }),
                /* @__PURE__ */ s.jsx(p, { className: D.performanceLabel, children: (c == null ? void 0 : c.label) || "Overall Performance" })
              ] })
            ]
          }
        );
      default:
        return /* @__PURE__ */ s.jsx(p, { ref: A, ...j, children: /* @__PURE__ */ s.jsxs(p, { className: D.defaultAnalytics, children: [
          /* @__PURE__ */ s.jsx("h3", { children: a }),
          /* @__PURE__ */ s.jsx("p", { children: "Default analytics view" })
        ] }) });
    }
  }
);
_l.displayName = "AnalyticsBodyFactory";
const Mi = Ae(
  ({
    kind: t,
    configuration: i,
    title: a,
    data: o,
    metric: c,
    timeRange: _,
    variant: m = "default",
    size: h = "md",
    className: f = "",
    loading: g,
    error: b,
    onRefresh: v,
    onExport: C,
    ...w
  }, I) => {
    const j = i || Lr[t];
    return /* @__PURE__ */ s.jsx(
      dl,
      {
        ref: I,
        className: f,
        variant: m,
        size: h,
        loading: g,
        error: b,
        ...w,
        children: /* @__PURE__ */ s.jsx(
          _l,
          {
            kind: t,
            configuration: j,
            title: a,
            data: o,
            metric: c,
            timeRange: _,
            onRefresh: v,
            onExport: C,
            ...w
          }
        )
      }
    );
  }
);
Mi.displayName = "AnalyticsFactory";
class b5 {
  static create(i) {
    return Fe.createElement(Mi, i);
  }
}
const v5 = {
  Dashboard: (t) => /* @__PURE__ */ s.jsx(Mi, { kind: "dashboard", ...t }),
  Realtime: (t) => /* @__PURE__ */ s.jsx(Mi, { kind: "realtime", ...t }),
  Reports: (t) => /* @__PURE__ */ s.jsx(Mi, { kind: "reports", ...t }),
  Metrics: (t) => /* @__PURE__ */ s.jsx(Mi, { kind: "metrics", ...t }),
  Performance: (t) => /* @__PURE__ */ s.jsx(Mi, { kind: "performance", ...t })
}, x5 = Mi, of = "_baseCard_lw2pi_131", sf = "_cardHover_lw2pi_235", lf = "_cardClickable_lw2pi_240", cf = "_friendCardHeader_lw2pi_285", df = "_friendStatusDot_lw2pi_292", _f = "_friendUsername_lw2pi_336", uf = "_friendCardActions_lw2pi_344", mf = "_notificationHeader_lw2pi_378", pf = "_notificationIcon_lw2pi_385", St = {
  baseCard: of,
  "card-default": "_card-default_lw2pi_172",
  "card-elevated": "_card-elevated_lw2pi_179",
  "card-outlined": "_card-outlined_lw2pi_186",
  "card-filled": "_card-filled_lw2pi_198",
  "card-small": "_card-small_lw2pi_207",
  "card-medium": "_card-medium_lw2pi_211",
  "card-large": "_card-large_lw2pi_215",
  "card-padding-none": "_card-padding-none_lw2pi_219",
  "card-padding-small": "_card-padding-small_lw2pi_223",
  "card-padding-medium": "_card-padding-medium_lw2pi_227",
  "card-padding-large": "_card-padding-large_lw2pi_231",
  cardHover: sf,
  cardClickable: lf,
  "friend-card": "_friend-card_lw2pi_278",
  friendCardHeader: cf,
  friendStatusDot: df,
  "status-inmatch": "_status-inmatch_lw2pi_320",
  "status-idle": "_status-idle_lw2pi_324",
  "status-online": "_status-online_lw2pi_328",
  "status-offline": "_status-offline_lw2pi_332",
  friendUsername: _f,
  friendCardActions: uf,
  "game-card": "_game-card_lw2pi_351",
  "profile-card": "_profile-card_lw2pi_355",
  "notification-card": "_notification-card_lw2pi_362",
  "notification-warning": "_notification-warning_lw2pi_365",
  "notification-error": "_notification-error_lw2pi_368",
  "notification-success": "_notification-success_lw2pi_371",
  "notification-info": "_notification-info_lw2pi_374",
  notificationHeader: mf,
  notificationIcon: pf,
  "stats-card": "_stats-card_lw2pi_391",
  "card-title": "_card-title_lw2pi_395",
  "loading-shimmer": "_loading-shimmer_lw2pi_1"
}, ul = {
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
    className: St["friend-card"]
  },
  game: {
    variant: "elevated",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable",
    className: St["game-card"]
  },
  profile: {
    variant: "elevated",
    size: "large",
    padding: "large",
    hover: !0,
    behavior: "hoverable",
    className: St["profile-card"]
  },
  notification: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    behavior: "static",
    className: St["notification-card"]
  },
  stats: {
    variant: "filled",
    size: "medium",
    padding: "medium",
    hover: !0,
    behavior: "hoverable",
    className: St["stats-card"]
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
}, Gi = (t, i) => ({
  ...ul[t],
  ...i
}), w5 = {
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
}, k5 = {
  infoCard: () => Gi("default", {
    padding: "large",
    hover: !0
  }),
  actionCard: () => Gi("elevated", {
    clickable: !0,
    hover: !0
  }),
  contentCard: () => Gi("outlined", {
    padding: "large"
  }),
  headerCard: () => Gi("filled", {
    padding: "medium",
    size: "large"
  }),
  compactCard: () => Gi("default", {
    size: "small",
    padding: "small"
  }),
  interactiveCard: () => Gi("elevated", {
    clickable: !0,
    hover: !0,
    behavior: "interactive"
  }),
  displayCard: () => Gi("default", {
    behavior: "static",
    padding: "medium"
  })
}, Zt = Ae(
  ({
    children: t,
    className: i = "",
    variant: a,
    size: o,
    padding: c,
    hover: _,
    clickable: m,
    onClick: h,
    style: f,
    kind: g,
    title: b,
    subtitle: v,
    content: C,
    actions: w,
    friend: I,
    onChallenge: j,
    onMessage: A,
    onRemove: O,
    unreadCount: X = 0,
    notificationType: W = "info",
    statValue: U,
    statLabel: N,
    ...T
  }, J) => {
    const V = g ? ul[g] : null, B = a || (V == null ? void 0 : V.variant) || "default", G = o || (V == null ? void 0 : V.size) || "medium", F = c || (V == null ? void 0 : V.padding) || "medium", Q = _ !== void 0 ? _ : (V == null ? void 0 : V.hover) || !1, le = m !== void 0 ? m : (V == null ? void 0 : V.clickable) || !1, ge = [
      St.baseCard,
      St[`card-${B}`],
      St[`card-${G}`],
      St[`card-padding-${F}`],
      Q && St.cardHover,
      le && St.cardClickable,
      V == null ? void 0 : V.className,
      // Add kind-specific styling
      i
    ].filter(Boolean).join(" "), ie = (x) => {
      le && (h == null || h(x));
    }, ne = () => {
      if (!I) return null;
      const x = (q) => q.online && q.inMatch ? { text: "In match", color: "#a259f7" } : q.online && q.idle ? { text: "Idle", color: "#fbbf24" } : q.online ? { text: "Online", color: "#22c55e" } : { text: "Offline", color: "#64748b" }, Z = {
        "In match": "status-inmatch",
        Idle: "status-idle",
        Online: "status-online",
        Offline: "status-offline"
      }, z = x(I), H = Z[z.text] || "status-offline";
      return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs(p, { className: St.friendCardHeader, children: [
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: `${St.friendStatusDot} ${St[H]}`
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: St.friendUsername, children: I.username })
        ] }),
        /* @__PURE__ */ s.jsxs(p, { className: St.friendCardActions, children: [
          j && /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => j(I.id),
              children: "Challenge"
            }
          ),
          A && /* @__PURE__ */ s.jsxs("button", { onClick: () => A(I.id), children: [
            "Message",
            X > 0 ? ` (${X})` : ""
          ] }),
          O && /* @__PURE__ */ s.jsx("button", { onClick: () => O(I.id), children: "Remove" })
        ] })
      ] });
    }, ce = () => g !== "stats" ? null : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      U && /* @__PURE__ */ s.jsx(
        p,
        {
          className: "stat-value",
          style: {
            fontSize: "2rem",
            fontWeight: "bold"
          },
          children: U
        }
      ),
      N && /* @__PURE__ */ s.jsx(
        p,
        {
          className: "stat-label",
          style: { fontSize: "0.875rem", opacity: 0.8 },
          children: N
        }
      )
    ] }), E = () => {
      if (g !== "notification") return null;
      const x = () => {
        switch (W) {
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
      return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs(
          p,
          {
            className: `${St.notificationHeader} notification-${W}`,
            children: [
              /* @__PURE__ */ s.jsx("span", { className: St.notificationIcon, children: x() }),
              b && /* @__PURE__ */ s.jsx("h3", { className: "card-title", children: b })
            ]
          }
        ),
        v && /* @__PURE__ */ s.jsx("p", { className: "card-subtitle", children: v }),
        C && /* @__PURE__ */ s.jsx(p, { className: "card-content", children: C }),
        t,
        w && /* @__PURE__ */ s.jsx(p, { className: "card-actions", children: w })
      ] });
    }, te = () => g === "friend" ? ne() : g === "stats" ? ce() : g === "notification" ? E() : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      b && /* @__PURE__ */ s.jsx("h3", { className: "card-title", children: b }),
      v && /* @__PURE__ */ s.jsx("p", { className: "card-subtitle", children: v }),
      C && /* @__PURE__ */ s.jsx(p, { className: "card-content", children: C }),
      t,
      w && /* @__PURE__ */ s.jsx(p, { className: "card-actions", children: w })
    ] });
    return /* @__PURE__ */ s.jsx(
      p,
      {
        ref: J,
        className: ge,
        onClick: ie,
        style: f,
        ...T,
        children: te()
      }
    );
  }
);
Zt.displayName = "Card";
function C5(t, i = {}) {
  return /* @__PURE__ */ s.jsx(Zt, { kind: t, ...i });
}
function S5(t, i, a = {}) {
  return /* @__PURE__ */ s.jsx(Zt, { kind: t, ...a });
}
const z5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "friend", ...t }), j5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "profile", ...t }), N5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "notification", ...t }), T5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "stats", ...t }), P5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "game", ...t }), E5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "puzzle", ...t }), I5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "room-info", ...t }), L5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "match-summary", ...t }), A5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "default", hover: !0, ...t }), M5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "elevated", clickable: !0, hover: !0, ...t }), O5 = (t) => /* @__PURE__ */ s.jsx(Zt, { kind: "outlined", ...t }), ds = {
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
}, hf = (t) => ds[t] || ds["chart-legend"], ff = "_container_dc2yf_140", gf = "_flex_dc2yf_271", yf = "_grid_dc2yf_367", bf = "_relative_dc2yf_749", vf = "_absolute_dc2yf_753", xf = "_fixed_dc2yf_757", wf = "_sticky_dc2yf_761", kf = "_truncate_dc2yf_900", Cf = "_border_dc2yf_960", Sf = "_rounded_dc2yf_1000", zf = "_shadow_dc2yf_1032", jf = "_transition_dc2yf_1104", Nf = "_small_dc2yf_1604", Tf = "_large_dc2yf_1608", Pf = "_card_dc2yf_1656", Ef = "_chart_dc2yf_1781", If = "_legend_dc2yf_1862", Lf = "_legend__item_dc2yf_1868", Af = "_active_dc2yf_1895", Mf = "_legend__marker_dc2yf_1900", Of = "_legend__icon_dc2yf_1909", Rf = "_legend__label_dc2yf_1921", Bf = "_legend__value_dc2yf_1926", Ff = "_filter_dc2yf_1932", Df = "_filter__search_dc2yf_1938", $f = "_filter__select_all_dc2yf_1970", Wf = "_filter__items_dc2yf_2037", Uf = "_filter__item_dc2yf_2037", Zf = "_tooltip_dc2yf_2064", Hf = "_tooltip__arrow_dc2yf_2074", Vf = "_tooltip__content_dc2yf_2086", Gf = "_controls_dc2yf_2091", Kf = "_controls__button_dc2yf_2098", qf = "_controls__select_dc2yf_2164", et = {
  container: ff,
  "container-sm": "_container-sm_dc2yf_156",
  "container-md": "_container-md_dc2yf_172",
  "container-lg": "_container-lg_dc2yf_188",
  "container-xl": "_container-xl_dc2yf_204",
  "container-2xl": "_container-2xl_dc2yf_220",
  "safe-area": "_safe-area_dc2yf_236",
  "overflow-hidden": "_overflow-hidden_dc2yf_242",
  "overflow-auto": "_overflow-auto_dc2yf_246",
  "overflow-x-auto": "_overflow-x-auto_dc2yf_251",
  "overflow-y-auto": "_overflow-y-auto_dc2yf_257",
  "box-border": "_box-border_dc2yf_263",
  "box-content": "_box-content_dc2yf_267",
  flex: gf,
  "flex-col": "_flex-col_dc2yf_275",
  "flex-row": "_flex-row_dc2yf_280",
  "flex-wrap": "_flex-wrap_dc2yf_285",
  "flex-nowrap": "_flex-nowrap_dc2yf_290",
  "flex-center": "_flex-center_dc2yf_295",
  "flex-between": "_flex-between_dc2yf_301",
  "justify-start": "_justify-start_dc2yf_307",
  "justify-center": "_justify-center_dc2yf_311",
  "justify-end": "_justify-end_dc2yf_315",
  "justify-between": "_justify-between_dc2yf_319",
  "justify-around": "_justify-around_dc2yf_323",
  "items-start": "_items-start_dc2yf_327",
  "items-center": "_items-center_dc2yf_331",
  "items-end": "_items-end_dc2yf_335",
  "items-stretch": "_items-stretch_dc2yf_339",
  "flex-1": "_flex-1_dc2yf_343",
  "flex-auto": "_flex-auto_dc2yf_347",
  "flex-none": "_flex-none_dc2yf_351",
  "flex-grow": "_flex-grow_dc2yf_355",
  "flex-shrink": "_flex-shrink_dc2yf_359",
  "flex-shrink-0": "_flex-shrink-0_dc2yf_363",
  grid: yf,
  "grid-auto-fit": "_grid-auto-fit_dc2yf_371",
  "grid-auto-fill": "_grid-auto-fill_dc2yf_378",
  "grid-cols-1": "_grid-cols-1_dc2yf_385",
  "grid-cols-2": "_grid-cols-2_dc2yf_389",
  "grid-cols-3": "_grid-cols-3_dc2yf_393",
  "grid-cols-4": "_grid-cols-4_dc2yf_397",
  "grid-cols-6": "_grid-cols-6_dc2yf_401",
  "grid-cols-12": "_grid-cols-12_dc2yf_405",
  "gap-0": "_gap-0_dc2yf_409",
  "gap-1": "_gap-1_dc2yf_413",
  "gap-2": "_gap-2_dc2yf_417",
  "gap-3": "_gap-3_dc2yf_421",
  "gap-4": "_gap-4_dc2yf_425",
  "gap-5": "_gap-5_dc2yf_429",
  "gap-6": "_gap-6_dc2yf_433",
  "gap-8": "_gap-8_dc2yf_437",
  "gap-10": "_gap-10_dc2yf_441",
  "gap-12": "_gap-12_dc2yf_445",
  "p-0": "_p-0_dc2yf_449",
  "p-1": "_p-1_dc2yf_453",
  "p-2": "_p-2_dc2yf_457",
  "p-3": "_p-3_dc2yf_461",
  "p-4": "_p-4_dc2yf_465",
  "p-5": "_p-5_dc2yf_469",
  "p-6": "_p-6_dc2yf_473",
  "p-8": "_p-8_dc2yf_477",
  "p-10": "_p-10_dc2yf_481",
  "p-12": "_p-12_dc2yf_485",
  "px-0": "_px-0_dc2yf_489",
  "px-1": "_px-1_dc2yf_494",
  "px-2": "_px-2_dc2yf_499",
  "px-3": "_px-3_dc2yf_504",
  "px-4": "_px-4_dc2yf_509",
  "px-6": "_px-6_dc2yf_514",
  "py-0": "_py-0_dc2yf_519",
  "py-1": "_py-1_dc2yf_524",
  "py-2": "_py-2_dc2yf_529",
  "py-3": "_py-3_dc2yf_534",
  "py-4": "_py-4_dc2yf_539",
  "py-6": "_py-6_dc2yf_544",
  "m-0": "_m-0_dc2yf_549",
  "m-1": "_m-1_dc2yf_553",
  "m-2": "_m-2_dc2yf_557",
  "m-3": "_m-3_dc2yf_561",
  "m-4": "_m-4_dc2yf_565",
  "m-auto": "_m-auto_dc2yf_569",
  "mx-auto": "_mx-auto_dc2yf_573",
  "my-auto": "_my-auto_dc2yf_578",
  "mx-0": "_mx-0_dc2yf_583",
  "mx-1": "_mx-1_dc2yf_588",
  "mx-2": "_mx-2_dc2yf_593",
  "mx-3": "_mx-3_dc2yf_598",
  "mx-4": "_mx-4_dc2yf_603",
  "my-0": "_my-0_dc2yf_608",
  "my-1": "_my-1_dc2yf_613",
  "my-2": "_my-2_dc2yf_618",
  "my-3": "_my-3_dc2yf_623",
  "my-4": "_my-4_dc2yf_628",
  "w-full": "_w-full_dc2yf_633",
  "w-auto": "_w-auto_dc2yf_637",
  "w-fit": "_w-fit_dc2yf_641",
  "w-min": "_w-min_dc2yf_645",
  "w-max": "_w-max_dc2yf_649",
  "max-w-none": "_max-w-none_dc2yf_653",
  "max-w-xs": "_max-w-xs_dc2yf_657",
  "max-w-sm": "_max-w-sm_dc2yf_661",
  "max-w-md": "_max-w-md_dc2yf_665",
  "max-w-lg": "_max-w-lg_dc2yf_669",
  "max-w-xl": "_max-w-xl_dc2yf_673",
  "max-w-2xl": "_max-w-2xl_dc2yf_677",
  "max-w-3xl": "_max-w-3xl_dc2yf_681",
  "max-w-4xl": "_max-w-4xl_dc2yf_685",
  "max-w-5xl": "_max-w-5xl_dc2yf_689",
  "max-w-6xl": "_max-w-6xl_dc2yf_693",
  "max-w-7xl": "_max-w-7xl_dc2yf_697",
  "max-w-full": "_max-w-full_dc2yf_701",
  "min-w-0": "_min-w-0_dc2yf_705",
  "min-w-full": "_min-w-full_dc2yf_709",
  "h-auto": "_h-auto_dc2yf_713",
  "h-fit": "_h-fit_dc2yf_717",
  "h-full": "_h-full_dc2yf_721",
  "h-screen": "_h-screen_dc2yf_725",
  "max-h-full": "_max-h-full_dc2yf_729",
  "max-h-screen": "_max-h-screen_dc2yf_733",
  "min-h-0": "_min-h-0_dc2yf_737",
  "min-h-full": "_min-h-full_dc2yf_741",
  "min-h-screen": "_min-h-screen_dc2yf_745",
  relative: bf,
  absolute: vf,
  fixed: xf,
  sticky: wf,
  static: "_static_dc2yf_765",
  "inset-0": "_inset-0_dc2yf_769",
  "top-0": "_top-0_dc2yf_776",
  "right-0": "_right-0_dc2yf_780",
  "bottom-0": "_bottom-0_dc2yf_784",
  "left-0": "_left-0_dc2yf_788",
  "text-left": "_text-left_dc2yf_792",
  "text-center": "_text-center_dc2yf_796",
  "text-right": "_text-right_dc2yf_800",
  "text-justify": "_text-justify_dc2yf_804",
  "text-xs": "_text-xs_dc2yf_808",
  "text-sm": "_text-sm_dc2yf_812",
  "text-base": "_text-base_dc2yf_816",
  "text-lg": "_text-lg_dc2yf_820",
  "text-xl": "_text-xl_dc2yf_824",
  "text-2xl": "_text-2xl_dc2yf_828",
  "text-3xl": "_text-3xl_dc2yf_832",
  "text-4xl": "_text-4xl_dc2yf_836",
  "font-normal": "_font-normal_dc2yf_840",
  "font-medium": "_font-medium_dc2yf_844",
  "font-semibold": "_font-semibold_dc2yf_848",
  "font-bold": "_font-bold_dc2yf_852",
  "leading-tight": "_leading-tight_dc2yf_856",
  "leading-normal": "_leading-normal_dc2yf_860",
  "leading-relaxed": "_leading-relaxed_dc2yf_864",
  "text-primary": "_text-primary_dc2yf_868",
  "text-secondary": "_text-secondary_dc2yf_872",
  "text-muted": "_text-muted_dc2yf_876",
  "text-inverse": "_text-inverse_dc2yf_880",
  "text-blue": "_text-blue_dc2yf_884",
  "text-red": "_text-red_dc2yf_888",
  "text-green": "_text-green_dc2yf_892",
  "text-yellow": "_text-yellow_dc2yf_896",
  truncate: kf,
  "text-ellipsis": "_text-ellipsis_dc2yf_907",
  "text-clip": "_text-clip_dc2yf_914",
  "bg-transparent": "_bg-transparent_dc2yf_920",
  "bg-white": "_bg-white_dc2yf_924",
  "bg-gray-50": "_bg-gray-50_dc2yf_928",
  "bg-gray-100": "_bg-gray-100_dc2yf_932",
  "bg-gray-200": "_bg-gray-200_dc2yf_936",
  "bg-primary": "_bg-primary_dc2yf_940",
  "bg-secondary": "_bg-secondary_dc2yf_944",
  "bg-success": "_bg-success_dc2yf_948",
  "bg-danger": "_bg-danger_dc2yf_952",
  "bg-warning": "_bg-warning_dc2yf_956",
  border: Cf,
  "border-0": "_border-0_dc2yf_964",
  "border-t": "_border-t_dc2yf_968",
  "border-r": "_border-r_dc2yf_972",
  "border-b": "_border-b_dc2yf_976",
  "border-l": "_border-l_dc2yf_980",
  "border-gray-200": "_border-gray-200_dc2yf_984",
  "border-gray-300": "_border-gray-300_dc2yf_988",
  "border-primary": "_border-primary_dc2yf_992",
  "border-danger": "_border-danger_dc2yf_996",
  "rounded-none": "_rounded-none_dc2yf_1000",
  "rounded-sm": "_rounded-sm_dc2yf_1004",
  rounded: Sf,
  "rounded-md": "_rounded-md_dc2yf_1012",
  "rounded-lg": "_rounded-lg_dc2yf_1016",
  "rounded-xl": "_rounded-xl_dc2yf_1020",
  "rounded-2xl": "_rounded-2xl_dc2yf_1024",
  "rounded-full": "_rounded-full_dc2yf_1028",
  "shadow-none": "_shadow-none_dc2yf_1032",
  "shadow-sm": "_shadow-sm_dc2yf_1036",
  shadow: zf,
  "shadow-md": "_shadow-md_dc2yf_1044",
  "shadow-lg": "_shadow-lg_dc2yf_1048",
  "shadow-xl": "_shadow-xl_dc2yf_1052",
  "z-0": "_z-0_dc2yf_1056",
  "z-10": "_z-10_dc2yf_1060",
  "z-20": "_z-20_dc2yf_1064",
  "z-30": "_z-30_dc2yf_1068",
  "z-40": "_z-40_dc2yf_1072",
  "z-50": "_z-50_dc2yf_1076",
  "z-auto": "_z-auto_dc2yf_1080",
  "z-dropdown": "_z-dropdown_dc2yf_1084",
  "z-sticky": "_z-sticky_dc2yf_1088",
  "z-fixed": "_z-fixed_dc2yf_1092",
  "z-modal": "_z-modal_dc2yf_1096",
  "z-tooltip": "_z-tooltip_dc2yf_1100",
  "transition-none": "_transition-none_dc2yf_1104",
  "transition-all": "_transition-all_dc2yf_1108",
  "transition-fast": "_transition-fast_dc2yf_1112",
  "transition-slow": "_transition-slow_dc2yf_1116",
  "sr-only": "_sr-only_dc2yf_1120",
  "focus-ring": "_focus-ring_dc2yf_1132",
  "cursor-default": "_cursor-default_dc2yf_1138",
  "cursor-pointer": "_cursor-pointer_dc2yf_1142",
  "cursor-not-allowed": "_cursor-not-allowed_dc2yf_1146",
  "select-none": "_select-none_dc2yf_1150",
  "select-text": "_select-text_dc2yf_1154",
  "select-all": "_select-all_dc2yf_1158",
  "select-auto": "_select-auto_dc2yf_1162",
  "pointer-events-none": "_pointer-events-none_dc2yf_1166",
  "pointer-events-auto": "_pointer-events-auto_dc2yf_1170",
  "gap-sm": "_gap-sm_dc2yf_1174",
  "gap-md": "_gap-md_dc2yf_1178",
  "gap-lg": "_gap-lg_dc2yf_1182",
  "gap-xl": "_gap-xl_dc2yf_1186",
  "p-sm": "_p-sm_dc2yf_1190",
  "p-md": "_p-md_dc2yf_1194",
  "p-lg": "_p-lg_dc2yf_1198",
  "p-xl": "_p-xl_dc2yf_1202",
  "m-sm": "_m-sm_dc2yf_1206",
  "m-md": "_m-md_dc2yf_1210",
  "m-lg": "_m-lg_dc2yf_1214",
  "m-xl": "_m-xl_dc2yf_1218",
  "text-gray": "_text-gray_dc2yf_1222",
  "mobile:hidden": "_mobile:hidden_dc2yf_1227",
  "mobile:block": "_mobile:block_dc2yf_1230",
  "mobile:flex": "_mobile:flex_dc2yf_1233",
  "mobile:grid": "_mobile:grid_dc2yf_1236",
  "mobile:text-sm": "_mobile:text-sm_dc2yf_1239",
  "mobile:text-xs": "_mobile:text-xs_dc2yf_1242",
  "mobile:p-2": "_mobile:p-2_dc2yf_1245",
  "mobile:px-2": "_mobile:px-2_dc2yf_1248",
  "tablet:block": "_tablet:block_dc2yf_1254",
  "tablet:flex": "_tablet:flex_dc2yf_1257",
  "tablet:grid": "_tablet:grid_dc2yf_1260",
  "tablet:hidden": "_tablet:hidden_dc2yf_1263",
  "desktop:block": "_desktop:block_dc2yf_1268",
  "desktop:flex": "_desktop:flex_dc2yf_1271",
  "desktop:grid": "_desktop:grid_dc2yf_1274",
  "desktop:hidden": "_desktop:hidden_dc2yf_1277",
  "bg-gray": "_bg-gray_dc2yf_928",
  "border-secondary": "_border-secondary_dc2yf_1301",
  "border-gray": "_border-gray_dc2yf_984",
  "shadow-glow": "_shadow-glow_dc2yf_1337",
  "w-8": "_w-8_dc2yf_1385",
  "w-10": "_w-10_dc2yf_1389",
  "w-12": "_w-12_dc2yf_1393",
  "w-16": "_w-16_dc2yf_1397",
  "h-8": "_h-8_dc2yf_1401",
  "h-10": "_h-10_dc2yf_1405",
  "h-12": "_h-12_dc2yf_1409",
  "h-16": "_h-16_dc2yf_1413",
  "user-select-none": "_user-select-none_dc2yf_1429",
  transition: jf,
  "transition-colors": "_transition-colors_dc2yf_1437",
  "transition-transform": "_transition-transform_dc2yf_1441",
  "hover-scale": "_hover-scale_dc2yf_1445",
  "fade-in": "_fade-in_dc2yf_1452",
  "status-online": "_status-online_dc2yf_1464",
  "status-offline": "_status-offline_dc2yf_1474",
  "status-away": "_status-away_dc2yf_1484",
  "status-busy": "_status-busy_dc2yf_1494",
  "modal-overlay": "_modal-overlay_dc2yf_1504",
  "modal-content": "_modal-content_dc2yf_1518",
  "close-button-absolute": "_close-button-absolute_dc2yf_1532",
  small: Nf,
  large: Tf,
  "primary-button": "_primary-button_dc2yf_1613",
  "secondary-button": "_secondary-button_dc2yf_1617",
  card: Pf,
  "input-base": "_input-base_dc2yf_1670",
  "chat-window": "_chat-window_dc2yf_1702",
  "chat-message": "_chat-message_dc2yf_1713",
  "z-overlay": "_z-overlay_dc2yf_1738",
  "mobile-hidden": "_mobile-hidden_dc2yf_1743",
  "mobile-flex-col": "_mobile-flex-col_dc2yf_1746",
  "mobile-text-center": "_mobile-text-center_dc2yf_1749",
  "mobile-p-sm": "_mobile-p-sm_dc2yf_1752",
  "mobile-gap-sm": "_mobile-gap-sm_dc2yf_1755",
  "desktop-hidden": "_desktop-hidden_dc2yf_1760",
  "print-hidden": "_print-hidden_dc2yf_1765",
  chart: Ef,
  "chart--top": "_chart--top_dc2yf_1795",
  "chart--bottom": "_chart--bottom_dc2yf_1798",
  "chart--left": "_chart--left_dc2yf_1801",
  "chart--right": "_chart--right_dc2yf_1804",
  "chart--overlay": "_chart--overlay_dc2yf_1807",
  "chart--horizontal": "_chart--horizontal_dc2yf_1812",
  "chart--vertical": "_chart--vertical_dc2yf_1815",
  "chart--spacing-tight": "_chart--spacing-tight_dc2yf_1818",
  "chart--spacing-normal": "_chart--spacing-normal_dc2yf_1821",
  "chart--spacing-loose": "_chart--spacing-loose_dc2yf_1824",
  "chart--size-small": "_chart--size-small_dc2yf_1827",
  "chart--size-medium": "_chart--size-medium_dc2yf_1831",
  "chart--size-large": "_chart--size-large_dc2yf_1835",
  "chart--modern": "_chart--modern_dc2yf_1839",
  "chart--minimal": "_chart--minimal_dc2yf_1843",
  "chart--compact": "_chart--compact_dc2yf_1847",
  "chart--glass": "_chart--glass_dc2yf_1851",
  "chart--game_style": "_chart--game_style_dc2yf_1856",
  legend: If,
  legend__item: Lf,
  active: Af,
  legend__marker: Mf,
  legend__icon: Of,
  legend__label: Rf,
  legend__value: Bf,
  filter: Ff,
  filter__search: Df,
  filter__select_all: $f,
  filter__items: Wf,
  filter__item: Uf,
  tooltip: Zf,
  tooltip__arrow: Hf,
  tooltip__content: Vf,
  controls: Gf,
  controls__button: Kf,
  controls__select: qf,
  "loading-shimmer": "_loading-shimmer_dc2yf_1"
}, dt = Ae(
  (t, i) => {
    const {
      kind: a,
      chartId: o,
      children: c,
      className: _,
      dataSeries: m = [],
      // Configuration overrides
      variant: h,
      position: f,
      orientation: g,
      // Features
      showIcons: b,
      showValues: v,
      interactive: C,
      followCursor: w,
      showArrow: I,
      multiValue: j,
      allowMultiSelect: A,
      showSelectAll: O,
      searchable: X,
      // Styling
      spacing: W,
      size: U,
      // Callbacks
      onSeriesToggle: N,
      onFilterChange: T,
      onTooltipShow: J,
      onTooltipHide: V,
      ...B
    } = t, G = hf(a), F = {
      ...G,
      variant: h || G.variant,
      position: f || G.position,
      orientation: g || G.orientation,
      showIcons: b !== void 0 ? b : G.showIcons,
      showValues: v !== void 0 ? v : G.showValues,
      interactive: C !== void 0 ? C : G.interactive,
      followCursor: w !== void 0 ? w : G.followCursor,
      showArrow: I !== void 0 ? I : G.showArrow,
      multiValue: j !== void 0 ? j : G.multiValue,
      allowMultiSelect: A !== void 0 ? A : G.allowMultiSelect,
      showSelectAll: O !== void 0 ? O : G.showSelectAll,
      searchable: X !== void 0 ? X : G.searchable,
      spacing: W || G.spacing,
      size: U || G.size
    }, Q = dn(), le = ni(
      Dm(o)
    ), ge = ni(
      $m(o)
    );
    Re(() => {
      const z = m.filter((H) => H.visible).map((H) => H.id);
      return Q(
        Em({
          chartId: o,
          selectedSeries: z,
          isInteractive: F.interactive,
          allowMultiSelect: F.allowMultiSelect
        })
      ), () => {
        Q(Om(o));
      };
    }, [o, Q]);
    const ie = (z) => {
      if (!F.interactive) return;
      const H = m.find(
        (ee) => ee.id === z
      );
      if (!H) return;
      const q = !H.visible;
      if (H.visible = q, F.allowMultiSelect) {
        Q(Am({ chartId: o, seriesId: z }));
        const ee = q ? [...le, z] : le.filter(
          (Y) => Y !== z
        );
        T == null || T(ee);
      } else
        Q(
          Im({
            chartId: o,
            selectedSeries: [z]
          })
        ), T == null || T([z]);
      N == null || N(z, q);
    }, ne = () => {
      const z = m.every((q) => q.visible);
      m.forEach((q) => q.visible = !z);
      const H = z ? [] : m.map((q) => q.id);
      Q(
        Mm({
          chartId: o,
          allSeriesIds: m.map((q) => q.id)
        })
      ), T == null || T(H);
    }, ce = [
      et.chart,
      et[`chart--${F.kind}`],
      et[`chart--${F.variant}`],
      et[`chart--${F.position}`],
      F.orientation && et[`chart--${F.orientation}`],
      F.spacing && et[`chart--spacing-${F.spacing}`],
      F.size && et[`chart--size-${F.size}`],
      _
    ].filter(Boolean).join(" "), E = (z) => /* @__PURE__ */ s.jsxs(
      p,
      {
        className: `${et.legend__item} ${z.visible ? et["legend__item--active"] : ""}`,
        onClick: () => ie(z.id),
        children: [
          F.showIcons && /* @__PURE__ */ s.jsx(
            p,
            {
              className: et.legend__icon,
              style: { backgroundColor: z.color },
              children: z.icon
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: et.legend__label, children: z.label }),
          F.showValues && z.data && /* @__PURE__ */ s.jsx("span", { className: et.legend__value, children: z.data.length })
        ]
      },
      z.id
    ), te = () => {
      if (!F.kind.includes("filter")) return null;
      const z = F.searchable && ge ? m.filter(
        (H) => H.label.toLowerCase().includes(ge.toLowerCase())
      ) : m;
      return /* @__PURE__ */ s.jsxs(p, { className: et.filter, children: [
        F.searchable && /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search...",
            value: ge,
            onChange: (H) => Q(
              Lm({
                chartId: o,
                searchTerm: H.target.value
              })
            ),
            className: et.filter__search
          }
        ),
        F.showSelectAll && /* @__PURE__ */ s.jsx(
          ke,
          {
            kind: "secondary",
            onClick: ne,
            className: et.filter__select_all,
            children: m.every((H) => H.visible) ? "Deselect All" : "Select All"
          }
        ),
        /* @__PURE__ */ s.jsx(p, { className: et.filter__items, children: z.map((H) => /* @__PURE__ */ s.jsxs(
          "label",
          {
            className: et.filter__item,
            children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: F.allowMultiSelect ? "checkbox" : "radio",
                  checked: H.visible,
                  onChange: () => ie(H.id)
                }
              ),
              /* @__PURE__ */ s.jsx("span", { style: { color: H.color }, children: H.label })
            ]
          },
          H.id
        )) })
      ] });
    }, x = () => F.kind.includes("tooltip") ? /* @__PURE__ */ s.jsxs(p, { className: et.tooltip, children: [
      F.showArrow && /* @__PURE__ */ s.jsx(p, { className: et.tooltip__arrow }),
      /* @__PURE__ */ s.jsx(p, { className: et.tooltip__content, children: c || "Tooltip content" })
    ] }) : null, Z = () => !F.kind.includes("controls") && !F.kind.includes("zoom") ? null : /* @__PURE__ */ s.jsxs(p, { className: et.controls, children: [
      F.kind.includes("zoom") && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          ke,
          {
            kind: "secondary",
            className: et.controls__button,
            children: "+"
          }
        ),
        /* @__PURE__ */ s.jsx(
          ke,
          {
            kind: "secondary",
            className: et.controls__button,
            children: "-"
          }
        ),
        /* @__PURE__ */ s.jsx(
          ke,
          {
            kind: "secondary",
            className: et.controls__button,
            children: "Reset"
          }
        )
      ] }),
      F.kind.includes("time-range") && /* @__PURE__ */ s.jsxs("select", { className: et.controls__select, children: [
        /* @__PURE__ */ s.jsx("option", { children: "Last 7 days" }),
        /* @__PURE__ */ s.jsx("option", { children: "Last 30 days" }),
        /* @__PURE__ */ s.jsx("option", { children: "Last 90 days" })
      ] })
    ] });
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        ...B,
        ref: i,
        className: ce,
        children: [
          F.kind.includes("legend") && /* @__PURE__ */ s.jsx(p, { className: et.legend, children: m.map(E) }),
          te(),
          x(),
          Z(),
          c
        ]
      }
    );
  }
);
dt.displayName = "Chart";
const R5 = oi(dt);
function B5(t, i = {}) {
  return /* @__PURE__ */ s.jsx(dt, { kind: t, ...i });
}
const F5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "chart-legend", ...t }), D5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "legend-horizontal", ...t }), $5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "legend-vertical", ...t }), W5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "legend-grid", ...t }), U5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "legend-minimal", ...t }), Z5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "chart-tooltip", ...t }), H5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "tooltip-simple", ...t }), V5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "tooltip-detailed", ...t }), G5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "tooltip-custom", ...t }), K5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "chart-filter-controls", ...t }), q5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "filter-checkboxes", ...t }), Y5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "filter-buttons", ...t }), J5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "filter-dropdown", ...t }), X5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "filter-multi-select", ...t }), Q5 = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "chart-controls", ...t }), ej = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "zoom-controls", ...t }), tj = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "time-range-selector", ...t }), ij = (t) => /* @__PURE__ */ s.jsx(dt, { kind: "data-series-toggle", ...t }), nj = (t) => /* @__PURE__ */ s.jsx(
  dt,
  {
    kind: "legend-grid",
    variant: "modern",
    showIcons: !0,
    showValues: !0,
    interactive: !0,
    ...t
  }
), aj = (t) => /* @__PURE__ */ s.jsx(
  dt,
  {
    kind: "filter-buttons",
    variant: "game-style",
    allowMultiSelect: !0,
    spacing: "tight",
    ...t
  }
), Yf = {
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
}, Jf = "_provider_zj78e_131", Bi = {
  provider: Jf
}, ml = {
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
}, Xf = ma(null), pl = ma(null), Qf = ma(null), hl = Ae(
  ({
    kind: t,
    children: i,
    session: a,
    autoConnect: o = !0,
    url: c = "/socket",
    initialSettings: _ = {},
    initialTheme: m = "default",
    initialPalette: h = {},
    onAchievement: f,
    configuration: g,
    className: b,
    ...v
  }, C) => {
    const w = ml[t];
    if (!w)
      return console.warn(`Unknown provider kind: ${t}`), /* @__PURE__ */ s.jsx(s.Fragment, { children: i });
    switch ({ ...w, ...g }, t) {
      case "socket-provider":
        return /* @__PURE__ */ s.jsx(
          eg,
          {
            session: a,
            autoConnect: o,
            url: c,
            ref: C,
            className: b,
            ...v,
            children: i
          }
        );
      case "user-settings-provider":
        return /* @__PURE__ */ s.jsx(
          tg,
          {
            initialSettings: _,
            ref: C,
            className: b,
            ...v,
            children: i
          }
        );
      case "theme-palette-provider":
        return /* @__PURE__ */ s.jsx(
          ig,
          {
            initialTheme: m,
            initialPalette: h,
            ref: C,
            className: b,
            ...v,
            children: i
          }
        );
      case "achievement-socket-listener":
        return /* @__PURE__ */ s.jsx(
          ng,
          {
            onAchievement: f,
            ref: C,
            className: b,
            ...v,
            children: i
          }
        );
      default:
        return /* @__PURE__ */ s.jsx(s.Fragment, { children: i });
    }
  }
), eg = Ae(
  ({
    session: t,
    autoConnect: i,
    url: a,
    children: o,
    className: c,
    ..._
  }, m) => {
    const h = {
      socket: null,
      isConnected: !!i,
      emit: (f, g) => {
      },
      on: (f, g) => {
      },
      off: (f, g) => {
      }
    };
    return /* @__PURE__ */ s.jsx(Xf.Provider, { value: h, children: /* @__PURE__ */ s.jsx(
      p,
      {
        ref: m,
        className: `${Bi.provider} ${Bi["provider-socket"]} ${c || ""}`,
        ..._,
        children: o
      }
    ) });
  }
), tg = Ae(
  ({ initialSettings: t, children: i, className: a, ...o }, c) => {
    const _ = {
      settings: t || {},
      setSettings: () => {
      },
      updateSetting: () => {
      }
    };
    return /* @__PURE__ */ s.jsx(Qf.Provider, { value: _, children: /* @__PURE__ */ s.jsx(
      p,
      {
        ref: c,
        className: `${Bi.provider} ${Bi["provider-settings"]} ${a || ""}`,
        ...o,
        children: i
      }
    ) });
  }
), ig = Ae(
  ({
    initialTheme: t,
    initialPalette: i,
    children: a,
    className: o,
    ...c
  }, _) => {
    const m = {
      palette: i || {},
      setPalette: () => {
      },
      currentTheme: t || "default",
      setTheme: () => {
      }
    };
    return /* @__PURE__ */ s.jsx(pl.Provider, { value: m, children: /* @__PURE__ */ s.jsx(
      p,
      {
        ref: _,
        className: `${Bi.provider} ${Bi["provider-theme"]} ${o || ""}`,
        ...c,
        children: a
      }
    ) });
  }
), ng = Ae(
  ({ onAchievement: t, children: i, className: a, ...o }, c) => /* @__PURE__ */ s.jsx(
    p,
    {
      ref: c,
      className: `${Bi.provider} ${Bi["provider-listener"]} ${a || ""}`,
      ...o,
      children: i
    }
  )
);
hl.displayName = "Providers";
const ag = Ae(
  ({
    kind: t,
    children: i,
    session: a,
    autoConnect: o,
    url: c,
    initialSettings: _,
    className: m = "",
    configuration: h,
    ...f
  }, g) => {
    const b = ml[t];
    if (!b)
      return console.warn(`Unknown provider kind: ${t}`), null;
    const v = { ...b, ...h }, C = o ?? v.autoConnect, w = c ?? v.url, I = _ ?? v.initialSettings;
    return /* @__PURE__ */ s.jsx(
      hl,
      {
        ref: g,
        kind: t,
        session: a,
        autoConnect: C,
        url: w,
        initialSettings: I,
        className: m,
        ...f,
        children: i
      }
    );
  }
);
ag.displayName = "ProviderFactory";
const rg = "_Checkbox_1mr1j_132", og = "_disabled_1mr1j_158", sg = "_animated_1mr1j_163", lg = "_checkboxInput_1mr1j_167", cg = "_small_1mr1j_418", dg = "_large_1mr1j_422", _g = "_checkboxLabel_1mr1j_488", ug = "_errorText_1mr1j_500", mg = "_helperText_1mr1j_509", pg = "_error_1mr1j_500", hg = "_success_1mr1j_522", fg = "_warning_1mr1j_525", gg = "_fullWidth_1mr1j_529", yg = "_rounded_1mr1j_561", bg = "_shadow_1mr1j_565", vg = "_bordered_1mr1j_572", kt = {
  Checkbox: rg,
  disabled: og,
  animated: sg,
  checkboxInput: lg,
  "checkbox-default": "_checkbox-default_1mr1j_225",
  "checkbox-toggle": "_checkbox-toggle_1mr1j_229",
  "checkbox-switch": "_checkbox-switch_1mr1j_286",
  "dark-mode-toggle": "_dark-mode-toggle_1mr1j_343",
  small: cg,
  large: dg,
  "size-small": "_size-small_1mr1j_443",
  "size-large": "_size-large_1mr1j_463",
  checkboxLabel: _g,
  errorText: ug,
  helperText: mg,
  error: pg,
  success: hg,
  warning: fg,
  fullWidth: gg,
  "variant-success": "_variant-success_1mr1j_537",
  "variant-warning": "_variant-warning_1mr1j_545",
  "variant-danger": "_variant-danger_1mr1j_553",
  rounded: yg,
  shadow: bg,
  bordered: vg,
  "loading-shimmer": "_loading-shimmer_1mr1j_1"
}, va = Ae(
  ({
    kind: t = "checkbox",
    // Default to 'checkbox' for backward compatibility
    configuration: i,
    label: a,
    labelPosition: o,
    size: c,
    variant: _,
    animated: m = !0,
    error: h,
    helperText: f,
    fullWidth: g = !1,
    darkModeContext: b = !1,
    className: v = "",
    checked: C,
    onChange: w,
    disabled: I = !1,
    ...j
  }, A) => {
    const O = {
      ...Yf[t],
      ...i
    }, X = Jc(
      pl
    );
    let W = C, U = w;
    t === "dark-mode-toggle" && b && X && "darkMode" in X && (W = X.darkMode, U = () => X.setDarkMode(
      !X.darkMode
    ));
    const N = o || O.labelPosition, T = c || O.size, J = _ || O.variant, V = [
      kt.Checkbox,
      kt[O.className],
      kt[`size-${T}`],
      J !== "default" ? kt[`variant-${J}`] : "",
      m || O.behavior.animated ? kt.animated : "",
      O.styling.rounded ? kt.rounded : "",
      O.styling.shadow ? kt.shadow : "",
      O.styling.bordered ? kt.bordered : "",
      I ? kt.disabled : "",
      g ? kt.fullWidth : "",
      v
    ].filter(Boolean).join(" "), B = [kt.checkboxInput].filter(Boolean).join(" "), G = () => O.icon ? W ? O.icon.checked : O.icon.unchecked : null;
    if (t === "dark-mode-toggle")
      return /* @__PURE__ */ s.jsxs("label", { className: V, children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: A,
            type: "checkbox",
            className: B,
            checked: W,
            onChange: U,
            disabled: I,
            "data-icon": G(),
            "aria-label": W ? "Switch to light mode" : "Switch to dark mode",
            ...j
          }
        ),
        h && /* @__PURE__ */ s.jsx(p, { className: kt.errorText, children: h }),
        f && /* @__PURE__ */ s.jsx(p, { className: kt.helperText, children: f })
      ] });
    const F = a && N !== "none" ? /* @__PURE__ */ s.jsx(
      "span",
      {
        className: `${kt.checkboxLabel} ${I ? kt.disabled : ""}`,
        children: a
      }
    ) : null;
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        className: g ? kt.fullWidth : "",
        children: [
          /* @__PURE__ */ s.jsxs("label", { className: V, children: [
            N === "left" && F,
            /* @__PURE__ */ s.jsx(
              "input",
              {
                ref: A,
                type: "checkbox",
                className: B,
                checked: W,
                onChange: U,
                disabled: I,
                ...j
              }
            ),
            N === "right" && F
          ] }),
          h && /* @__PURE__ */ s.jsx(p, { className: kt.errorText, children: h }),
          f && /* @__PURE__ */ s.jsx(p, { className: kt.helperText, children: f })
        ]
      }
    );
  }
);
va.displayName = "Checkbox";
class pi {
  /**
   * Create any checkbox with required props and optional overrides
   */
  static create(i, a = {}) {
    return /* @__PURE__ */ s.jsx(va, { kind: i, ...a });
  }
  /**
   * Create a basic checkbox
   */
  static checkbox(i = {}) {
    return this.create("checkbox", i);
  }
  /**
   * Create a toggle checkbox
   */
  static toggle(i = {}) {
    return this.create("toggle", i);
  }
  /**
   * Create a switch checkbox
   */
  static switch(i = {}) {
    return this.create("switch", i);
  }
  /**
   * Create a dark mode toggle
   */
  static darkModeToggle(i = {}) {
    return this.create("dark-mode-toggle", {
      darkModeContext: !0,
      ...i
    });
  }
}
const xg = Ae(({ kind: t, ...i }, a) => /* @__PURE__ */ s.jsx(va, { ref: a, kind: t, ...i }));
xg.displayName = "CheckboxFactory";
const rj = {
  // Basic presets
  basic: (t, i = {}) => pi.checkbox({ label: t, ...i }),
  required: (t, i = {}) => pi.checkbox({
    label: `${t} *`,
    ...i
  }),
  // Toggle presets
  toggleSuccess: (t, i = {}) => pi.toggle({
    label: t,
    variant: "success",
    ...i
  }),
  toggleWarning: (t, i = {}) => pi.toggle({
    label: t,
    variant: "warning",
    ...i
  }),
  toggleDanger: (t, i = {}) => pi.toggle({
    label: t,
    variant: "danger",
    ...i
  }),
  // Switch presets
  switchLarge: (t, i = {}) => pi.switch({
    label: t,
    size: "large",
    ...i
  }),
  switchSmall: (t, i = {}) => pi.switch({
    label: t,
    size: "small",
    ...i
  }),
  // Special presets
  darkMode: (t = {}) => pi.darkModeToggle(t),
  termsAndConditions: (t = {}) => pi.checkbox({
    label: "I agree to the Terms and Conditions",
    ...t
  }),
  newsletter: (t = {}) => pi.checkbox({
    label: "Subscribe to newsletter",
    ...t
  })
}, wg = Ae((t, i) => Fe.createElement(va, {
  ref: i,
  kind: "dark-mode-toggle",
  darkModeContext: !0,
  ...t
}));
wg.displayName = "DarkModeToggle";
const Wr = {
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
}, oj = {
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
}, sj = {
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
}, kg = (t, i) => {
  const a = Wr[t];
  if (!a)
    throw new Error(`Unknown form field kind: ${t}`);
  return {
    ...a,
    ...i,
    validation: {
      ...a.validation,
      ...i.validation
    }
  };
}, lj = (t, i) => {
  const { validation: a } = i;
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
}, Cg = "_fieldWrapper_c5ny5_131", Sg = "_fullWidth_c5ny5_146", zg = "_hasError_c5ny5_151", jg = "_fieldContainer_c5ny5_151", Ng = "_label_c5ny5_165", Tg = "_required_c5ny5_175", Pg = "_errorText_c5ny5_278", Eg = "_helperText_c5ny5_286", Ii = {
  fieldWrapper: Cg,
  fullWidth: Sg,
  hasError: zg,
  fieldContainer: jg,
  label: Ng,
  required: Tg,
  errorText: Pg,
  helperText: Eg
}, fl = Ae(
  ({
    kind: t,
    configuration: i,
    value: a,
    onChange: o,
    onBlur: c,
    onFocus: _,
    placeholder: m,
    disabled: h = !1,
    required: f = !1,
    className: g = "",
    ...b
  }, v) => {
    const C = (I) => {
      const j = I.target;
      let A;
      switch (t) {
        case "checkbox":
        case "switch":
          A = j.checked;
          break;
        case "range":
          A = parseInt(j.value, 10);
          break;
        case "select":
          A = j.value;
          break;
        default:
          A = j.value;
      }
      o == null || o(A, I);
    }, w = {
      ref: v,
      value: a ?? "",
      onChange: C,
      onBlur: c,
      onFocus: _,
      placeholder: m,
      disabled: h,
      required: f,
      className: g,
      ...b
    };
    switch (t) {
      case "input":
      default:
        return /* @__PURE__ */ s.jsx(
          "input",
          {
            ...w,
            type: (i == null ? void 0 : i.inputMode) || "text"
          }
        );
      case "textarea":
        return /* @__PURE__ */ s.jsx(
          "textarea",
          {
            ...w,
            rows: (i == null ? void 0 : i.minRows) || 3
          }
        );
      case "select":
        const I = (i == null ? void 0 : i.options) || [];
        return /* @__PURE__ */ s.jsxs("select", { ...w, children: [
          m && /* @__PURE__ */ s.jsx("option", { value: "", disabled: !0, children: m }),
          I.map((O) => /* @__PURE__ */ s.jsx(
            "option",
            {
              value: O.value,
              disabled: O.disabled,
              children: O.label
            },
            O.value
          ))
        ] });
      case "checkbox":
        return /* @__PURE__ */ s.jsxs(p, { className: "checkboxContainer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ...w,
              type: "checkbox",
              checked: a || !1,
              value: void 0
            }
          ),
          (i == null ? void 0 : i.label) && /* @__PURE__ */ s.jsx("label", { children: i.label })
        ] });
      case "radio":
        const j = (i == null ? void 0 : i.options) || [];
        return /* @__PURE__ */ s.jsx(p, { className: "radioContainer", children: j.map((O) => /* @__PURE__ */ s.jsxs(
          "label",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: b.name,
                  value: O.value,
                  checked: a === O.value,
                  onChange: C,
                  disabled: h || O.disabled
                }
              ),
              O.label
            ]
          },
          O.value
        )) });
      case "radio-group":
        const A = (i == null ? void 0 : i.options) || [];
        return /* @__PURE__ */ s.jsx(p, { className: "radioGroup", children: A.map((O) => /* @__PURE__ */ s.jsxs(
          "label",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px"
            },
            children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "radio",
                  name: b.name || "radio-group",
                  value: O.value,
                  checked: a === O.value,
                  onChange: C,
                  disabled: h || O.disabled
                }
              ),
              O.label
            ]
          },
          O.value
        )) });
      case "switch":
        return /* @__PURE__ */ s.jsxs(p, { className: "switchContainer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ...w,
              type: "checkbox",
              checked: a || !1,
              value: void 0,
              style: {
                appearance: "none",
                width: "44px",
                height: "24px",
                backgroundColor: a ? "#2563eb" : "#d1d5db",
                borderRadius: "12px",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.2s"
              }
            }
          ),
          (i == null ? void 0 : i.label) && /* @__PURE__ */ s.jsx("label", { children: i.label })
        ] });
      case "range":
        return /* @__PURE__ */ s.jsx(
          "input",
          {
            ...w,
            type: "range",
            min: (i == null ? void 0 : i.min) || 0,
            max: (i == null ? void 0 : i.max) || 100,
            step: (i == null ? void 0 : i.step) || 1,
            value: a || 0
          }
        );
    }
  }
);
fl.displayName = "FormsBodyFactory";
const gl = Ae(
  ({
    kind: t,
    label: i,
    error: a,
    helperText: o,
    fullWidth: c,
    className: _,
    configuration: m,
    ...h
  }, f) => {
    const g = m || Wr.text, b = [
      Ii.fieldWrapper,
      c && Ii.fullWidth,
      a && Ii.hasError,
      _
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsxs(p, { ref: f, className: b, children: [
      i && /* @__PURE__ */ s.jsxs("label", { className: Ii.label, children: [
        i,
        h.required && /* @__PURE__ */ s.jsx("span", { className: Ii.required, children: "*" })
      ] }),
      /* @__PURE__ */ s.jsx(p, { className: Ii.fieldContainer, children: /* @__PURE__ */ s.jsx(
        fl,
        {
          ref: f,
          kind: t,
          configuration: g,
          ...h
        }
      ) }),
      a && /* @__PURE__ */ s.jsx("span", { className: Ii.errorText, children: a }),
      o && !a && /* @__PURE__ */ s.jsx("span", { className: Ii.helperText, children: o })
    ] });
  }
);
gl.displayName = "Forms";
const Ge = Ae(
  ({
    kind: t,
    value: i,
    onChange: a,
    error: o,
    overrideConfig: c,
    ..._
  }, m) => {
    const h = c ? kg(t, c) : Wr[t], g = {
      ref: m,
      kind: ((b) => ({
        input: "input",
        textarea: "textarea",
        select: "select",
        checkbox: "checkbox",
        radio: "radio",
        "radio-group": "radio-group",
        switch: "switch",
        range: "range"
      })[h.component] || "input")(),
      value: i,
      onChange: a,
      error: o,
      label: h.label,
      placeholder: h.placeholder,
      helperText: h.helperText,
      variant: h.variant === "standard" ? "outlined" : h.variant,
      // Fix variant incompatibility
      size: h.size,
      color: h.color,
      fullWidth: h.fullWidth,
      className: h.className,
      ..._
      // Props can override config
    };
    return h.component === "input" && (g.type = t.includes("-") ? t.split("-")[0] : t), /* @__PURE__ */ s.jsx(gl, { ...g });
  }
);
Ge.displayName = "FormsFactory";
const cj = {
  // Quick form creators
  loginForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: a.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "password",
        value: t.password,
        onChange: (o) => i("password", o),
        error: a.password
      },
      "password"
    )
  ],
  signupForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "first-name",
        value: t.firstName,
        onChange: (o) => i("firstName", o),
        error: a.firstName
      },
      "firstName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "last-name",
        value: t.lastName,
        onChange: (o) => i("lastName", o),
        error: a.lastName
      },
      "lastName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: a.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "password",
        value: t.password,
        onChange: (o) => i("password", o),
        error: a.password
      },
      "password"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "terms-checkbox",
        value: t.terms,
        onChange: (o) => i("terms", o),
        error: a.terms
      },
      "terms"
    )
  ],
  contactForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "full-name",
        value: t.name,
        onChange: (o) => i("name", o),
        error: a.name
      },
      "name"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: a.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "phone",
        value: t.phone,
        onChange: (o) => i("phone", o),
        error: a.phone
      },
      "phone"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "message",
        value: t.message,
        onChange: (o) => i("message", o),
        error: a.message
      },
      "message"
    )
  ],
  addressForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "address",
        value: t.address,
        onChange: (o) => i("address", o),
        error: a.address
      },
      "address"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "city",
        value: t.city,
        onChange: (o) => i("city", o),
        error: a.city
      },
      "city"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "state",
        value: t.state,
        onChange: (o) => i("state", o),
        error: a.state
      },
      "state"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "zip",
        value: t.zip,
        onChange: (o) => i("zip", o),
        error: a.zip
      },
      "zip"
    )
  ],
  paymentForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "credit-card",
        value: t.cardNumber,
        onChange: (o) => i("cardNumber", o),
        error: a.cardNumber
      },
      "cardNumber"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "expiry-date",
        value: t.expiry,
        onChange: (o) => i("expiry", o),
        error: a.expiry
      },
      "expiry"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "cvv",
        value: t.cvv,
        onChange: (o) => i("cvv", o),
        error: a.cvv
      },
      "cvv"
    )
  ],
  profileForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "first-name",
        value: t.firstName,
        onChange: (o) => i("firstName", o),
        error: a.firstName
      },
      "firstName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "last-name",
        value: t.lastName,
        onChange: (o) => i("lastName", o),
        error: a.lastName
      },
      "lastName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: a.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "phone",
        value: t.phone,
        onChange: (o) => i("phone", o),
        error: a.phone
      },
      "phone"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "bio",
        value: t.bio,
        onChange: (o) => i("bio", o),
        error: a.bio
      },
      "bio"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "website",
        value: t.website,
        onChange: (o) => i("website", o),
        error: a.website
      },
      "website"
    )
  ],
  settingsForm: (t, i, a = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "notification-switch",
        value: t.notifications,
        onChange: (o) => i("notifications", o),
        error: a.notifications
      },
      "notifications"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "privacy-switch",
        value: t.privacy,
        onChange: (o) => i("privacy", o),
        error: a.privacy
      },
      "privacy"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "theme-switch",
        value: t.theme,
        onChange: (o) => i("theme", o),
        error: a.theme
      },
      "theme"
    )
  ]
}, Ig = {
  // Button configurations (delegated to button factory)
  "btn-primary": { type: "button", component: "primary" },
  "btn-secondary": {
    type: "button",
    component: "secondary"
  },
  "btn-danger": { type: "button", component: "danger" },
  "btn-success": { type: "button", component: "success" },
  "btn-warning": { type: "button", component: "warning" },
  "btn-ghost": { type: "button", component: "ghost" },
  // Form field configurations (delegated to form factory)
  "field-text": { type: "form-field", component: "text" },
  "field-email": { type: "form-field", component: "email" },
  "field-password": {
    type: "form-field",
    component: "password"
  },
  "field-textarea": {
    type: "form-field",
    component: "textarea"
  },
  "field-select": {
    type: "form-field",
    component: "select"
  },
  "field-checkbox": {
    type: "form-field",
    component: "checkbox"
  },
  "field-radio": { type: "form-field", component: "radio" },
  "field-switch": {
    type: "form-field",
    component: "switch"
  },
  "field-range": { type: "form-field", component: "range" },
  // Layout configurations
  "layout-container": {
    type: "layout",
    component: "container",
    className: "container"
  },
  "layout-grid": {
    type: "layout",
    component: "grid",
    className: "grid"
  },
  "layout-flex": {
    type: "layout",
    component: "flex",
    className: "flex"
  },
  // Modal configurations
  "modal-basic": { type: "modal", component: "basic" },
  "modal-confirm": { type: "modal", component: "confirm" },
  "modal-alert": { type: "modal", component: "alert" }
}, ct = Ae(({ kind: t, children: i, ...a }, o) => {
  const c = Ig[t];
  if (!c)
    return console.warn(
      `ComponentFactory: Unknown component kind "${t}"`
    ), /* @__PURE__ */ s.jsx(p, { ref: o, ...a, children: i });
  switch (c.type) {
    case "button":
      return /* @__PURE__ */ s.jsx(
        ke,
        {
          ref: o,
          kind: c.component,
          ...a,
          children: i
        }
      );
    case "form-field":
      return /* @__PURE__ */ s.jsx(
        Ge,
        {
          ref: o,
          kind: c.component,
          ...a
        }
      );
    case "layout": {
      const _ = (c.component === "container" || c.component === "grid" || c.component === "flex", "div");
      return /* @__PURE__ */ s.jsx(
        _,
        {
          ref: o,
          className: `${c.className || ""} ${a.className || ""}`.trim(),
          ...a,
          children: i
        }
      );
    }
    case "modal":
      return /* @__PURE__ */ s.jsx(
        p,
        {
          ref: o,
          className: `modal ${c.className || ""} ${a.className || ""}`.trim(),
          ...a,
          children: i
        }
      );
    default:
      return /* @__PURE__ */ s.jsx(p, { ref: o, ...a, children: i });
  }
});
ct.displayName = "ComponentFactory";
const dj = {
  // Common button groups
  modalButtons: (t, i) => [
    /* @__PURE__ */ s.jsx(
      ct,
      {
        kind: "btn-secondary",
        onClick: i,
        children: "Cancel"
      },
      "cancel"
    ),
    /* @__PURE__ */ s.jsx(
      ct,
      {
        kind: "btn-primary",
        onClick: t,
        children: "Confirm"
      },
      "confirm"
    )
  ],
  formActions: (t, i) => [
    i && /* @__PURE__ */ s.jsx(
      ct,
      {
        kind: "btn-secondary",
        onClick: i,
        children: "Reset"
      },
      "reset"
    ),
    /* @__PURE__ */ s.jsx(
      ct,
      {
        kind: "btn-primary",
        onClick: t,
        children: "Submit"
      },
      "submit"
    )
  ].filter(Boolean),
  // Common form layouts
  loginForm: (t, i, a = {}) => /* @__PURE__ */ s.jsxs(
    ct,
    {
      kind: "layout-flex",
      style: { flexDirection: "column", gap: "1rem" },
      children: [
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-email",
            value: t.email,
            onChange: (o) => i("email", o),
            error: a.email
          }
        ),
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-password",
            value: t.password,
            onChange: (o) => i("password", o),
            error: a.password
          }
        )
      ]
    }
  ),
  contactForm: (t, i, a = {}) => /* @__PURE__ */ s.jsxs(
    ct,
    {
      kind: "layout-flex",
      style: { flexDirection: "column", gap: "1rem" },
      children: [
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-text",
            label: "Name",
            value: t.name,
            onChange: (o) => i("name", o),
            error: a.name
          }
        ),
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-email",
            value: t.email,
            onChange: (o) => i("email", o),
            error: a.email
          }
        ),
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-textarea",
            label: "Message",
            value: t.message,
            onChange: (o) => i("message", o),
            error: a.message
          }
        )
      ]
    }
  ),
  // Common layout patterns
  cardLayout: (t) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "layout-container",
      style: {
        padding: "1.5rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        background: "#fff"
      },
      children: t
    }
  ),
  gridLayout: (t, i = 3) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "layout-grid",
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${i}, 1fr)`,
        gap: "1rem"
      },
      children: t
    }
  )
}, _j = {
  // Quick buttons
  primaryBtn: (t, i) => /* @__PURE__ */ s.jsx(ct, { kind: "btn-primary", onClick: i, children: t }),
  secondaryBtn: (t, i) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "btn-secondary",
      onClick: i,
      children: t
    }
  ),
  dangerBtn: (t, i) => /* @__PURE__ */ s.jsx(ct, { kind: "btn-danger", onClick: i, children: t }),
  // Quick form fields
  textField: (t, i, a, o) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "field-text",
      label: t,
      value: i,
      onChange: a,
      error: o
    }
  ),
  emailField: (t, i, a) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "field-email",
      value: t,
      onChange: i,
      error: a
    }
  ),
  passwordField: (t, i, a) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "field-password",
      value: t,
      onChange: i,
      error: a
    }
  ),
  // Quick layouts
  flexColumn: (t, i = "1rem") => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "layout-flex",
      style: { flexDirection: "column", gap: i },
      children: t
    }
  ),
  flexRow: (t, i = "1rem") => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "layout-flex",
      style: { flexDirection: "row", gap: i },
      children: t
    }
  ),
  grid: (t, i = 3) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "layout-grid",
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${i}, 1fr)`,
        gap: "1rem"
      },
      children: t
    }
  )
}, _s = {
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
}, yl = (t) => _s[t] || _s["no-data"], Lg = "_empty_state_1v5ih_132", Ag = "_empty_state__icon_1v5ih_159", Mg = "_empty_state__content_1v5ih_173", Og = "_empty_state__title_1v5ih_177", Rg = "_empty_state__description_1v5ih_184", Bg = "_empty_state__actions_1v5ih_190", Fg = "_empty_state__custom_1v5ih_197", Dg = "_pulse_1v5ih_1", Ct = {
  empty_state: Lg,
  "empty_state--small": "_empty_state--small_1v5ih_142",
  "empty_state--medium": "_empty_state--medium_1v5ih_146",
  "empty_state--large": "_empty_state--large_1v5ih_150",
  "empty_state--full": "_empty_state--full_1v5ih_154",
  empty_state__icon: Ag,
  empty_state__content: Mg,
  empty_state__title: Og,
  empty_state__description: Rg,
  empty_state__actions: Bg,
  empty_state__custom: Fg,
  "empty_state--error": "_empty_state--error_1v5ih_200",
  "empty_state--warning": "_empty_state--warning_1v5ih_206",
  "empty_state--info": "_empty_state--info_1v5ih_212",
  "empty_state--success": "_empty_state--success_1v5ih_215",
  "empty_state--loading": "_empty_state--loading_1v5ih_218",
  pulse: Dg,
  "empty_state--compact": "_empty_state--compact_1v5ih_221",
  "empty_state--interactive": "_empty_state--interactive_1v5ih_243",
  "loading-shimmer": "_loading-shimmer_1v5ih_1"
}, bl = Ae((t, i) => {
  const {
    kind: a = "no-data",
    children: o,
    className: c,
    // Content overrides
    title: _,
    description: m,
    icon: h,
    illustration: f,
    // Configuration overrides
    variant: g,
    size: b,
    centered: v,
    fullHeight: C,
    // Actions
    primaryAction: w,
    secondaryAction: I,
    actions: j,
    // Features
    showIcon: A,
    showIllustration: O,
    allowCustomContent: X,
    ...W
  } = t, U = yl(a), N = {
    ...U,
    title: _ || U.title,
    description: m || U.description,
    icon: h || U.icon,
    illustration: f || U.illustration,
    variant: g || U.variant,
    size: b || U.size,
    centered: v !== void 0 ? v : U.centered,
    fullHeight: C !== void 0 ? C : U.fullHeight,
    primaryAction: w || U.primaryAction,
    secondaryAction: I || U.secondaryAction,
    actions: j || U.actions,
    showIcon: A !== void 0 ? A : U.showIcon,
    showIllustration: O !== void 0 ? O : U.showIllustration,
    allowCustomContent: X !== void 0 ? X : U.allowCustomContent
  }, T = [
    Ct.empty_state,
    Ct[`empty_state--${N.kind}`],
    Ct[`empty_state--${N.variant}`],
    N.size && Ct[`empty_state--${N.size}`],
    N.centered && Ct["empty_state--centered"],
    N.fullHeight && Ct["empty_state--full_height"],
    c
  ].filter(Boolean).join(" "), J = () => !N.showIcon || !N.icon ? null : /* @__PURE__ */ s.jsx(p, { className: Ct.empty_state__icon, children: typeof N.icon == "string" ? /* @__PURE__ */ s.jsx("span", { className: Ct.empty_state__icon_text, children: N.icon }) : N.icon }), V = () => !N.showIllustration || !N.illustration ? null : /* @__PURE__ */ s.jsx(p, { className: Ct.empty_state__illustration, children: /* @__PURE__ */ s.jsx(
    "img",
    {
      src: N.illustration,
      alt: "",
      className: Ct.empty_state__illustration_image
    }
  ) }), B = (F, Q = !1) => /* @__PURE__ */ s.jsxs(
    ke,
    {
      kind: F.variant === "text" ? "link" : F.variant || (Q ? "primary" : "secondary"),
      onClick: F.onClick,
      className: `${Ct.empty_state__action} ${Ct[`empty_state__action--${F.variant || (Q ? "primary" : "secondary")}`]}`,
      children: [
        F.icon && /* @__PURE__ */ s.jsx("span", { className: Ct.empty_state__action_icon, children: F.icon }),
        F.label
      ]
    },
    F.label
  ), G = () => {
    const F = [];
    return N.primaryAction && F.push({
      ...N.primaryAction,
      isPrimary: !0
    }), N.secondaryAction && F.push({
      ...N.secondaryAction,
      isPrimary: !1
    }), N.actions && F.push(
      ...N.actions.map((Q) => ({
        ...Q,
        isPrimary: !1
      }))
    ), F.length === 0 ? null : /* @__PURE__ */ s.jsx(p, { className: Ct.empty_state__actions, children: F.map(
      (Q, le) => B(Q, Q.isPrimary)
    ) });
  };
  return /* @__PURE__ */ s.jsxs(
    p,
    {
      ...W,
      ref: i,
      className: T,
      role: "status",
      "aria-live": "polite",
      children: [
        V(),
        J(),
        /* @__PURE__ */ s.jsxs(p, { className: Ct.empty_state__content, children: [
          N.title && /* @__PURE__ */ s.jsx("h3", { className: Ct.empty_state__title, children: N.title }),
          N.description && /* @__PURE__ */ s.jsx("p", { className: Ct.empty_state__description, children: N.description }),
          N.allowCustomContent && o && /* @__PURE__ */ s.jsx(p, { className: Ct.empty_state__custom, children: o })
        ] }),
        G()
      ]
    }
  );
});
bl.displayName = "EmptyState";
const $g = oi(bl);
class Dt {
  static create(i) {
    return Fe.forwardRef(
      (a, o) => Fe.createElement($g, {
        ref: o,
        ...i,
        ...a
      })
    );
  }
  static createFromKind(i) {
    const a = yl(i);
    return this.create(a);
  }
}
const uj = {
  // Data empty states
  NoData: Dt.createFromKind("no-data"),
  NoResults: Dt.createFromKind("no-results"),
  NoSearchResults: Dt.createFromKind(
    "no-search-results"
  ),
  EmptyTable: Dt.createFromKind("empty-table"),
  EmptyList: Dt.createFromKind("empty-list"),
  // User/Social empty states
  NoFriends: Dt.createFromKind("no-friends"),
  NoMessages: Dt.createFromKind("no-messages"),
  NoNotifications: Dt.createFromKind(
    "no-notifications"
  ),
  NoActivity: Dt.createFromKind("no-activity"),
  EmptyProfile: Dt.createFromKind("empty-profile"),
  // Content empty states
  EmptyFolder: Dt.createFromKind("empty-folder"),
  EmptyCart: Dt.createFromKind("empty-cart"),
  // Error states
  PermissionDenied: Dt.createFromKind(
    "permission-denied"
  ),
  NotFound: Dt.createFromKind("not-found")
}, Ar = {
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
}, mj = {
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
}, xa = (t) => Ar[t] || Ar.dropzone, pj = (t, i) => ({
  ...xa(t),
  ...i
}), hj = (t) => !!(t.kind && Ar[t.kind]), Mr = (t) => {
  if (t === 0) return "0 B";
  const i = 1024, a = ["B", "KB", "MB", "GB"], o = Math.floor(Math.log(t) / Math.log(i));
  return parseFloat((t / Math.pow(i, o)).toFixed(2)) + " " + a[o];
}, fj = (t) => {
  var i;
  return ((i = t.split(".").pop()) == null ? void 0 : i.toLowerCase()) || "";
}, gj = (t) => ({
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
})[t] || "application/octet-stream", yj = (t, i) => {
  if (i.maxSize && t.size > i.maxSize)
    return {
      valid: !1,
      error: `File size exceeds maximum of ${Mr(i.maxSize)}`
    };
  if (i.minSize && t.size < i.minSize)
    return {
      valid: !1,
      error: `File size is below minimum of ${Mr(i.minSize)}`
    };
  if (i.allowedTypes && i.allowedTypes.length > 0 && !i.allowedTypes.includes(t.type))
    return {
      valid: !1,
      error: `File type ${t.type} is not allowed`
    };
  if (i.blockedTypes && i.blockedTypes.includes(t.type))
    return {
      valid: !1,
      error: `File type ${t.type} is not allowed`
    };
  if (i.customValidator) {
    const a = i.customValidator(t);
    if (typeof a == "string")
      return { valid: !1, error: a };
    if (!a)
      return {
        valid: !1,
        error: "File failed custom validation"
      };
  }
  return { valid: !0 };
}, bj = () => Math.random().toString(36).substr(2, 9), vj = (t) => new Promise((i, a) => {
  if (!t.type.startsWith("image/")) {
    a(new Error("File is not an image"));
    return;
  }
  const o = new FileReader();
  o.onload = (c) => {
    var _;
    i((_ = c.target) == null ? void 0 : _.result);
  }, o.onerror = () => {
    a(new Error("Failed to read file"));
  }, o.readAsDataURL(t);
}), Wg = (t, i, a) => {
  var c, _, m, h, f, g;
  const o = xa(t);
  return {
    theme: ((c = o.styling) == null ? void 0 : c.theme) || "light",
    color: ((_ = o.styling) == null ? void 0 : _.color) || "primary",
    borderRadius: ((m = o.styling) == null ? void 0 : m.borderRadius) || "medium",
    shadow: (h = o.styling) == null ? void 0 : h.shadow,
    border: (f = o.styling) == null ? void 0 : f.border,
    animation: (g = o.styling) == null ? void 0 : g.animation
  };
}, Ug = (t, i) => {
  const a = [];
  return i != null && i.maxFiles && t.length > i.maxFiles && a.push(
    `Too many files. Maximum allowed: ${i.maxFiles}`
  ), t.forEach((o, c) => {
    i != null && i.maxFileSize && o.size > i.maxFileSize && a.push(
      `File "${o.name}" is too large. Maximum size: ${Mr(i.maxFileSize)}`
    ), i != null && i.allowedTypes && i.allowedTypes.length > 0 && (i.allowedTypes.includes(o.type) || a.push(
      `File "${o.name}" has unsupported type: ${o.type}`
    ));
  }), {
    isValid: a.length === 0,
    errors: a
  };
}, Zg = "_fileUploadWrapper_oehff_3", Hg = "_disabled_oehff_15", Vg = "_content_oehff_24", Gg = "_icon_oehff_35", Kg = "_text_oehff_41", qg = "_description_oehff_47", Yg = "_progressBar_oehff_53", Jg = "_progressFill_oehff_62", Xg = "_idle_oehff_71", Qg = "_dragActive_oehff_75", ey = "_uploading_oehff_85", ty = "_success_oehff_93", iy = "_error_oehff_102", ny = "_preview_oehff_114", ay = "_previewItem_oehff_121", ry = "_previewImage_oehff_130", oy = "_previewFile_oehff_137", sy = "_dropzone_oehff_150", ly = "_multipleFiles_oehff_150", cy = "_dragDropZone_oehff_151", dy = "_imageUploader_oehff_157", _y = "_galleryUploader_oehff_157", uy = "_avatarUploader_oehff_166", my = "_profilePicture_oehff_166", py = "_documentUploader_oehff_186", hy = "_fileButton_oehff_192", fy = "_bulkUploader_oehff_228", gy = "_light_oehff_240", yy = "_dark_oehff_245", by = "_gradient_oehff_250", vy = "_small_oehff_258", xy = "_medium_oehff_264", wy = "_large_oehff_270", ky = "_borderNone_oehff_279", Cy = "_borderSolid_oehff_283", Sy = "_borderDashed_oehff_287", zy = "_borderDotted_oehff_291", jy = "_borderRadiusNone_oehff_298", Ny = "_borderRadiusSmall_oehff_302", Ty = "_borderRadiusMedium_oehff_306", Py = "_borderRadiusLarge_oehff_310", Ey = "_borderRadiusRound_oehff_314", Iy = "_shadowNone_oehff_321", Ly = "_shadowSmall_oehff_325", Ay = "_shadowMedium_oehff_329", My = "_shadowLarge_oehff_333", Oy = "_primary_oehff_340", Ry = "_secondary_oehff_346", By = "_warning_oehff_358", Fy = "_pulse_oehff_373", Dy = "_bounce_oehff_385", $y = "_subtle_oehff_400", Wy = "_dropzoneActive_oehff_434", Uy = "_dropzoneReject_oehff_440", Zy = "_dropzoneDisabled_oehff_445", Hy = "_fileInput_oehff_454", Vy = "_fileInputHidden_oehff_465", Gy = "_uploadContent_oehff_472", Ky = "_uploadIcon_oehff_481", qy = "_uploadText_oehff_487", Yy = "_uploadSubtext_oehff_493", Jy = "_uploadButton_oehff_499", Xy = "_filePreview_oehff_519", Qy = "_fileList_oehff_523", eb = "_fileGrid_oehff_529", tb = "_fileCompact_oehff_535", ib = "_fileItem_oehff_541", nb = "_fileItemGrid_oehff_555", ab = "_fileItemCompact_oehff_561", rb = "_filePreviewImage_oehff_566", ob = "_filePreviewImageLarge_oehff_574", sb = "_filePreviewImageSmall_oehff_581", lb = "_fileIcon_oehff_586", cb = "_fileInfo_oehff_599", db = "_fileName_oehff_604", _b = "_fileSize_oehff_612", ub = "_fileStatus_oehff_617", mb = "_fileActions_oehff_624", pb = "_fileAction_oehff_624", hb = "_fileActionRemove_oehff_645", fb = "_progressText_oehff_669", gb = "_statusPending_oehff_678", yb = "_statusUploading_oehff_682", bb = "_statusSuccess_oehff_686", vb = "_statusError_oehff_690", xb = "_statusIcon_oehff_694", wb = "_spinner_oehff_698", kb = "_spin_oehff_698", Cb = "_avatarPreview_oehff_736", Sb = "_avatarPlaceholder_oehff_743", zb = "_avatarIcon_oehff_752", jb = "_avatarOverlay_oehff_758", Nb = "_errorMessage_oehff_782", Tb = "_errorIcon_oehff_792", Pb = "_loading_oehff_800", Eb = "_loadingOverlay_oehff_805", Ib = "_loadingSpinner_oehff_818", vt = {
  fileUploadWrapper: Zg,
  disabled: Hg,
  content: Vg,
  icon: Gg,
  text: Kg,
  description: qg,
  progressBar: Yg,
  progressFill: Jg,
  idle: Xg,
  dragActive: Qg,
  uploading: ey,
  success: ty,
  error: iy,
  preview: ny,
  previewItem: ay,
  previewImage: ry,
  previewFile: oy,
  dropzone: sy,
  multipleFiles: ly,
  dragDropZone: cy,
  imageUploader: dy,
  galleryUploader: _y,
  avatarUploader: uy,
  profilePicture: my,
  documentUploader: py,
  fileButton: hy,
  bulkUploader: fy,
  light: gy,
  dark: yy,
  gradient: by,
  small: vy,
  medium: xy,
  large: wy,
  borderNone: ky,
  borderSolid: Cy,
  borderDashed: Sy,
  borderDotted: zy,
  borderRadiusNone: jy,
  borderRadiusSmall: Ny,
  borderRadiusMedium: Ty,
  borderRadiusLarge: Py,
  borderRadiusRound: Ey,
  shadowNone: Iy,
  shadowSmall: Ly,
  shadowMedium: Ay,
  shadowLarge: My,
  primary: Oy,
  secondary: Ry,
  warning: By,
  pulse: Fy,
  bounce: Dy,
  subtle: $y,
  dropzoneActive: Wy,
  dropzoneReject: Uy,
  dropzoneDisabled: Zy,
  fileInput: Hy,
  fileInputHidden: Vy,
  uploadContent: Gy,
  uploadIcon: Ky,
  uploadText: qy,
  uploadSubtext: Yy,
  uploadButton: Jy,
  filePreview: Xy,
  fileList: Qy,
  fileGrid: eb,
  fileCompact: tb,
  fileItem: ib,
  fileItemGrid: nb,
  fileItemCompact: ab,
  filePreviewImage: rb,
  filePreviewImageLarge: ob,
  filePreviewImageSmall: sb,
  fileIcon: lb,
  fileInfo: cb,
  fileName: db,
  fileSize: _b,
  fileStatus: ub,
  fileActions: mb,
  fileAction: pb,
  fileActionRemove: hb,
  progressText: fb,
  statusPending: gb,
  statusUploading: yb,
  statusSuccess: bb,
  statusError: vb,
  statusIcon: xb,
  spinner: wb,
  spin: kb,
  avatarPreview: Cb,
  avatarPlaceholder: Sb,
  avatarIcon: zb,
  avatarOverlay: jb,
  errorMessage: Nb,
  errorIcon: Tb,
  loading: Pb,
  loadingOverlay: Eb,
  loadingSpinner: Ib
}, vl = Ae((t, i) => {
  var ae, pe, we, re, Se, he, $;
  const {
    kind: a,
    componentId: o,
    variant: c = "default",
    size: _ = "medium",
    state: m = "idle",
    className: h,
    disabled: f = !1,
    multiple: g,
    accept: b,
    maxFiles: v,
    maxSize: C,
    onFilesSelected: w,
    onFilesDrop: I,
    onUploadProgress: j,
    onUploadComplete: A,
    onUploadError: O,
    children: X,
    placeholder: W,
    dragActiveText: U,
    errorText: N,
    successText: T,
    showPreview: J = !1,
    allowedTypes: V,
    ...B
  } = t, G = xa(a), F = Wg(
    a
  ), Q = $r(), le = o || `file-upload-${a}-${Date.now()}`;
  Re(() => (Q(Qm(le)), () => {
    Q(tp(le));
  }), [Q, le]);
  const ge = Ci(
    (R) => ip(le)(R)
  ), ie = Ci(
    (R) => np(le)(R)
  ), ne = Ci(
    (R) => rp(le)(R)
  ), ce = Ci(
    (R) => ap(le)(R)
  ), E = ut(null), te = b || ((pe = (ae = G.validation) == null ? void 0 : ae.allowedTypes) == null ? void 0 : pe.join(",")) || G.accept, x = g !== void 0 ? g : G.multiple, Z = v || ((we = G.validation) == null ? void 0 : we.maxFiles), z = C || ((re = G.validation) == null ? void 0 : re.maxFileSize), H = Je(
    (R) => {
      var qe;
      const Le = Array.from(R), Xe = Ug(Le, {
        maxFiles: Z,
        maxFileSize: z,
        allowedTypes: V || ((qe = G.validation) == null ? void 0 : qe.allowedTypes)
      });
      if (!Xe.isValid) {
        Q(
          as({
            componentId: le,
            errors: Xe.errors
          })
        ), O == null || O(Xe.errors.join(", "));
        return;
      }
      if (Q(
        as({
          componentId: le,
          errors: []
        })
      ), Q(
        ep({
          componentId: le,
          files: Le
          // Use File[] directly for UI state
        })
      ), w == null || w(Le), j) {
        Q(
          ns({
            componentId: le,
            progress: 0
          })
        );
        const Ke = setInterval(() => {
          Q(
            ns({
              componentId: le,
              progress: Math.min(ie + 10, 100)
            })
          ), ie >= 100 && (clearInterval(Ke), A == null || A(Le));
        }, 100);
      }
    },
    [
      Z,
      z,
      V,
      (Se = G.validation) == null ? void 0 : Se.allowedTypes,
      w,
      j,
      A,
      O
    ]
  ), q = Je(
    (R) => {
      R.target.files && H(R.target.files);
    },
    [H]
  ), ee = Je(
    (R) => {
      if (R.preventDefault(), Q(
        xr({
          componentId: le,
          dragActive: !1
        })
      ), f || m === "disabled") return;
      const Le = R.dataTransfer.files;
      Le && (H(Le), I == null || I(Array.from(Le)));
    },
    [f, m, H, I]
  ), Y = Je(
    (R) => {
      R.preventDefault(), !f && m !== "disabled" && Q(
        xr({
          componentId: le,
          dragActive: !0
        })
      );
    },
    [f, m, Q, le]
  ), me = Je(
    (R) => {
      R.preventDefault(), Q(
        xr({
          componentId: le,
          dragActive: !1
        })
      );
    },
    [Q, le]
  ), de = Je(() => {
    var R;
    !f && m !== "disabled" && ((R = E.current) == null || R.click());
  }, [f, m]), Me = [
    vt.fileUploadWrapper,
    vt[a],
    vt[c],
    vt[_],
    F.theme && vt[F.theme],
    ge && vt.dragActive,
    m && vt[m],
    f && vt.disabled,
    ce.length > 0 && vt.error,
    h
  ].filter(Boolean).join(" "), Ee = () => {
    var R;
    return m === "uploading" ? `Uploading... ${ie}%` : m === "success" ? T || "Upload successful!" : m === "error" || ce.length > 0 ? N || ce[0] || "Upload failed" : ge ? U || "Drop files here" : ne.length > 0 ? `${ne.length} file${ne.length > 1 ? "s" : ""} selected` : W || ((R = G.display) == null ? void 0 : R.placeholder) || "Choose files or drag and drop";
  };
  return /* @__PURE__ */ s.jsxs(
    p,
    {
      ref: i,
      className: Me,
      onDrop: ee,
      onDragOver: Y,
      onDragLeave: me,
      onClick: de,
      role: "button",
      tabIndex: f ? -1 : 0,
      "aria-disabled": f,
      ...B,
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: E,
            type: "file",
            accept: te,
            multiple: x,
            onChange: q,
            style: { display: "none" },
            disabled: f || m === "disabled"
          }
        ),
        X || /* @__PURE__ */ s.jsxs(p, { className: vt.content, children: [
          ((he = G.display) == null ? void 0 : he.icon) && /* @__PURE__ */ s.jsx(p, { className: vt.icon, children: G.display.icon }),
          /* @__PURE__ */ s.jsx(p, { className: vt.text, children: Ee() }),
          (($ = G.display) == null ? void 0 : $.description) && /* @__PURE__ */ s.jsx(p, { className: vt.description, children: G.display.description }),
          m === "uploading" && /* @__PURE__ */ s.jsx(p, { className: vt.progressBar, children: /* @__PURE__ */ s.jsx(
            p,
            {
              className: vt.progressFill,
              style: { width: `${ie}%` }
            }
          ) })
        ] }),
        J && ne.length > 0 && /* @__PURE__ */ s.jsx(p, { className: vt.preview, children: ne.map(
          (R, Le) => /* @__PURE__ */ s.jsx(
            p,
            {
              className: vt.previewItem,
              children: R.type.startsWith("image/") ? /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: URL.createObjectURL(R),
                  alt: R.name,
                  className: vt.previewImage
                }
              ) : /* @__PURE__ */ s.jsx(p, { className: vt.previewFile, children: R.name })
            },
            Le
          )
        ) })
      ]
    }
  );
});
vl.displayName = "FileUpload";
const Lb = oi(vl);
class hi {
  static create(i) {
    return Fe.forwardRef(
      (a, o) => Fe.createElement(Lb, {
        ref: o,
        ...i,
        ...a
      })
    );
  }
  static createFromKind(i) {
    const a = xa(i);
    return this.create(a);
  }
}
const xj = {
  // Basic upload types
  Dropzone: hi.createFromKind("dropzone"),
  FileButton: hi.createFromKind("file-button"),
  DragDropZone: hi.createFromKind(
    "drag-drop-zone"
  ),
  MultipleFiles: hi.createFromKind(
    "multiple-files"
  ),
  BulkUploader: hi.createFromKind("bulk-uploader"),
  // Image upload types
  ImageUploader: hi.createFromKind(
    "image-uploader"
  ),
  AvatarUploader: hi.createFromKind(
    "avatar-uploader"
  ),
  GalleryUploader: hi.createFromKind(
    "gallery-uploader"
  ),
  ProfilePicture: hi.createFromKind(
    "profile-picture"
  ),
  // Document upload types
  DocumentUploader: hi.createFromKind(
    "document-uploader"
  )
}, Ab = "_header_1s5ph_131", Mb = "_headerInner_1s5ph_152", Ob = "_headerChildren_1s5ph_160", Rb = "_borderBottom_1s5ph_225", Bb = "_sticky_1s5ph_229", Fb = "_collapsible_1s5ph_236", Db = "_collapsed_1s5ph_240", $b = "_titleContent_1s5ph_240", Wb = "_tabs_1s5ph_241", Ub = "_responsive_1s5ph_247", Zb = "_rightSection_1s5ph_254", Hb = "_content_1s5ph_259", Vb = "_contentCentered_1s5ph_268", Gb = "_leftSection_1s5ph_273", Kb = "_titleSection_1s5ph_289", qb = "_titleIcon_1s5ph_299", Yb = "_title_1s5ph_240", Jb = "_subtitle_1s5ph_360", Xb = "_actions_1s5ph_374", Qb = "_actionButton_1s5ph_390", ev = "_collapseButton_1s5ph_394", tv = "_tab_1s5ph_241", iv = "_tabActive_1s5ph_485", nv = "_tabIcon_1s5ph_496", av = "_tabLabel_1s5ph_502", rv = "_tabBadge_1s5ph_508", ov = "_browseHeader_1s5ph_528", sv = "_browseTabbedHeader_1s5ph_528", lv = "_dashboardHeader_1s5ph_539", cv = "_dashboardSimpleHeader_1s5ph_549", dv = "_modalHeader_1s5ph_553", _v = "_modalCloseOnlyHeader_1s5ph_563", uv = "_pageHeader_1s5ph_568", mv = "_pageWithNavHeader_1s5ph_572", pv = "_sidebarHeader_1s5ph_585", hv = "_navigationHeader_1s5ph_595", fv = "_simpleHeader_1s5ph_609", gv = "_simpleCenteredHeader_1s5ph_609", yv = "_gameHeader_1s5ph_617", bv = "_settingsHeader_1s5ph_621", vv = "_profileHeader_1s5ph_630", be = {
  header: Ab,
  headerInner: Mb,
  headerChildren: Ob,
  "layout-left-aligned": "_layout-left-aligned_1s5ph_166",
  "layout-center-aligned": "_layout-center-aligned_1s5ph_173",
  "layout-space-between": "_layout-space-between_1s5ph_180",
  "layout-custom": "_layout-custom_1s5ph_187",
  "padding-none": "_padding-none_1s5ph_191",
  "padding-small": "_padding-small_1s5ph_195",
  "padding-medium": "_padding-medium_1s5ph_199",
  "padding-large": "_padding-large_1s5ph_203",
  "bg-transparent": "_bg-transparent_1s5ph_207",
  "bg-primary": "_bg-primary_1s5ph_211",
  "bg-secondary": "_bg-secondary_1s5ph_216",
  "bg-custom": "_bg-custom_1s5ph_221",
  borderBottom: Rb,
  sticky: Bb,
  collapsible: Fb,
  collapsed: Db,
  titleContent: $b,
  tabs: Wb,
  responsive: Ub,
  rightSection: Zb,
  content: Hb,
  contentCentered: Vb,
  leftSection: Gb,
  titleSection: Kb,
  titleIcon: qb,
  title: Yb,
  "title-small": "_title-small_1s5ph_324",
  "title-medium": "_title-medium_1s5ph_330",
  "title-large": "_title-large_1s5ph_336",
  "title-xlarge": "_title-xlarge_1s5ph_342",
  "title-normal": "_title-normal_1s5ph_348",
  "title-bold": "_title-bold_1s5ph_356",
  subtitle: Jb,
  actions: Xb,
  "actions-left": "_actions-left_1s5ph_382",
  "actions-right": "_actions-right_1s5ph_386",
  actionButton: Qb,
  collapseButton: ev,
  "tabs-below-title": "_tabs-below-title_1s5ph_414",
  "tabs-beside-title": "_tabs-beside-title_1s5ph_419",
  "tabs-separate-row": "_tabs-separate-row_1s5ph_423",
  "tabs-align-left": "_tabs-align-left_1s5ph_430",
  "tabs-align-center": "_tabs-align-center_1s5ph_434",
  "tabs-align-right": "_tabs-align-right_1s5ph_438",
  tab: tv,
  tabActive: iv,
  tabIcon: nv,
  tabLabel: av,
  tabBadge: rv,
  browseHeader: ov,
  browseTabbedHeader: sv,
  dashboardHeader: lv,
  dashboardSimpleHeader: cv,
  modalHeader: dv,
  modalCloseOnlyHeader: _v,
  pageHeader: uv,
  pageWithNavHeader: mv,
  sidebarHeader: pv,
  navigationHeader: hv,
  simpleHeader: fv,
  simpleCenteredHeader: gv,
  gameHeader: yv,
  settingsHeader: bv,
  profileHeader: vv,
  "loading-shimmer": "_loading-shimmer_1s5ph_1"
}, Ur = {
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
    className: be.browseHeader,
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
    className: be.browseTabbedHeader,
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
    className: be.dashboardHeader,
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
    className: be.dashboardSimpleHeader,
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
    className: be.modalHeader,
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
    className: be.modalCloseOnlyHeader,
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
    className: be.pageHeader,
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
    className: be.pageWithNavHeader,
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
    className: be.sidebarHeader,
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
    className: be.navigationHeader,
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
    className: be.simpleHeader,
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
    className: be.simpleCenteredHeader,
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
    className: be.gameHeader,
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
    className: be.settingsHeader,
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
    className: be.profileHeader,
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
}, wj = {
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
}, kj = {
  // Quick modal headers
  MODAL_WITH_TITLE: (t, i) => ({
    kind: "modal",
    title: t,
    actions: [{ type: "close", handler: i }]
  }),
  MODAL_CLOSE_ONLY: (t) => ({
    kind: "modal-close-only",
    actions: [{ type: "close", handler: t }]
  }),
  // Quick browse headers
  BROWSE_WITH_BACK: (t, i) => ({
    kind: "browse",
    title: t,
    actions: [{ type: "back", handler: i }]
  }),
  BROWSE_WITH_TABS: (t, i, a, o, c) => ({
    kind: "browse-tabbed",
    title: t,
    tabs: i,
    currentTab: a,
    onTabChange: o,
    actions: [{ type: "back", handler: c }]
  }),
  // Quick page headers
  PAGE_SIMPLE: (t) => ({
    kind: "page",
    title: t
  }),
  PAGE_WITH_BACK: (t, i) => ({
    kind: "page-with-nav",
    title: t,
    actions: [{ type: "back", handler: i }]
  })
};
function Cj(t, i = {}) {
  return {
    ...Ur[t],
    ...i
  };
}
function Sj(t, i) {
  return [...t, ...i];
}
const Zr = Ae(
  ({
    kind: t,
    title: i,
    subtitle: a,
    icon: o,
    children: c,
    tabs: _ = [],
    currentTab: m,
    onTabChange: h,
    actions: f = [],
    leftActions: g = [],
    rightActions: b = [],
    sticky: v = !1,
    collapsible: C = !1,
    isCollapsed: w = !1,
    onToggleCollapse: I,
    borderBottom: j,
    background: A,
    customBackgroundColor: O,
    className: X = "",
    overrideConfig: W = {},
    customClassName: U = "",
    ariaLabel: N,
    role: T = "banner",
    ...J
  }, V) => {
    const B = {
      ...Ur[t],
      ...W
    };
    [
      ...B.actionsPosition === "left" || B.actionsPosition === "both" ? g : [],
      ...f,
      ...B.actionsPosition === "right" || B.actionsPosition === "both" ? b : []
    ];
    const G = [
      be.header,
      B.className || "",
      X,
      U,
      B.layout ? be[`layout-${B.layout}`] : "",
      B.padding ? be[`padding-${B.padding}`] : "",
      B.background ? be[`bg-${B.background}`] : "",
      j !== void 0 ? j ? be.borderBottom : "" : B.borderBottom ? be.borderBottom : "",
      v !== void 0 ? v ? be.sticky : "" : B.sticky ? be.sticky : "",
      C ? be.collapsible : "",
      w ? be.collapsed : "",
      B.responsive ? be.responsive : ""
    ].filter(Boolean).join(" "), F = (ie, ne) => ie.length === 0 ? null : /* @__PURE__ */ s.jsx(
      p,
      {
        className: `${be.actions} ${be[`actions-${ne}`]}`,
        children: ie.map((ce, E) => {
          let te;
          switch (ce.type) {
            case "back":
              te = "go-back";
              break;
            case "close":
              te = "close";
              break;
            case "menu":
              te = "icon";
              break;
            default:
              te = "icon";
          }
          return /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: te,
              onClick: ce.handler,
              className: `${be.actionButton} ${ce.className || ""}`,
              "aria-label": ce.label,
              icon: ce.icon,
              children: ce.label && ce.type === "custom" ? ce.label : void 0
            },
            E
          );
        })
      }
    ), Q = () => !B.showTabs || _.length === 0 ? null : /* @__PURE__ */ s.jsx(
      p,
      {
        className: `${be.tabs} ${be[`tabs-${B.tabsPosition}`]} ${be[`tabs-align-${B.tabsAlign}`]}`,
        children: _.map((ie) => /* @__PURE__ */ s.jsxs(
          ke,
          {
            kind: "ghost",
            onClick: () => h == null ? void 0 : h(ie.value),
            className: `${be.tab} ${m === ie.value ? be.tabActive : ""}`,
            disabled: ie.disabled,
            "aria-selected": m === ie.value,
            role: "tab",
            children: [
              ie.icon && /* @__PURE__ */ s.jsx("span", { className: be.tabIcon, children: ie.icon }),
              /* @__PURE__ */ s.jsx("span", { className: be.tabLabel, children: ie.label }),
              ie.badge && /* @__PURE__ */ s.jsx("span", { className: be.tabBadge, children: ie.badge })
            ]
          },
          ie.value
        ))
      }
    ), le = () => !B.showTitle && !i && !a ? null : /* @__PURE__ */ s.jsxs(p, { className: be.titleSection, children: [
      o && /* @__PURE__ */ s.jsx("span", { className: be.titleIcon, children: o }),
      /* @__PURE__ */ s.jsxs(p, { className: be.titleContent, children: [
        i && /* @__PURE__ */ s.jsx(
          "h1",
          {
            className: `${be.title} ${be[`title-${B.titleSize}`]} ${be[`title-${B.titleWeight}`]}`,
            children: i
          }
        ),
        a && /* @__PURE__ */ s.jsx("p", { className: be.subtitle, children: a })
      ] }),
      C && /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: "icon",
          onClick: I,
          className: be.collapseButton,
          "aria-label": w ? "Expand header" : "Collapse header",
          icon: w ? "▼" : "▲"
        }
      )
    ] }), ge = () => {
      const ie = B.actionsPosition === "left" || B.actionsPosition === "both" ? [
        ...g,
        ...B.actionsPosition === "left" ? f : []
      ] : [], ne = B.actionsPosition === "right" || B.actionsPosition === "both" ? [
        ...B.actionsPosition === "right" ? f : [],
        ...b
      ] : [];
      switch (B.layout) {
        case "left-aligned":
          return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            F(ie, "left"),
            /* @__PURE__ */ s.jsxs(p, { className: be.content, children: [
              le(),
              B.tabsPosition === "below-title" && Q()
            ] }),
            F(ne, "right")
          ] });
        case "center-aligned":
          return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            F(ie, "left"),
            /* @__PURE__ */ s.jsxs(
              p,
              {
                className: `${be.content} ${be.contentCentered}`,
                children: [
                  le(),
                  B.tabsPosition === "below-title" && Q()
                ]
              }
            ),
            F(ne, "right")
          ] });
        case "space-between":
          return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs(p, { className: be.leftSection, children: [
              F(ie, "left"),
              le()
            ] }),
            B.tabsPosition === "beside-title" && Q(),
            /* @__PURE__ */ s.jsx(p, { className: be.rightSection, children: F(
              ne,
              "right"
            ) })
          ] });
        case "custom":
        default:
          return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            F(ie, "left"),
            /* @__PURE__ */ s.jsxs(p, { className: be.content, children: [
              le(),
              B.tabsPosition === "below-title" && Q()
            ] }),
            F(ne, "right")
          ] });
      }
    };
    return /* @__PURE__ */ s.jsxs(
      "header",
      {
        ...J,
        ref: V,
        className: G,
        role: T,
        "aria-label": N || i,
        style: {
          ...J.style,
          ...O && {
            backgroundColor: O
          }
        },
        children: [
          /* @__PURE__ */ s.jsxs(p, { className: be.headerInner, children: [
            ge(),
            B.tabsPosition === "separate-row" && Q()
          ] }),
          c && /* @__PURE__ */ s.jsx(p, { className: be.headerChildren, children: c })
        ]
      }
    );
  }
);
Zr.displayName = "Header";
class ht {
  /**
   * Create a header with a specific kind and minimal props
   */
  static create(i, a = {}) {
    return Fe.createElement(Zr, {
      kind: i,
      ...a
    });
  }
  /**
   * Create multiple headers from a group configuration
   */
  static createGroup(i, a = {}) {
    return Object.fromEntries(
      Object.entries(i).map(
        ([o, { kind: c, props: _ = {} }]) => [
          o,
          ht.create(c, {
            ...a,
            ..._
          })
        ]
      )
    );
  }
  /**
   * Get configuration for a specific header kind
   */
  static getConfig(i) {
    return Ur[i];
  }
  /**
   * Create a header with custom configuration overrides
   */
  static createWithOverrides(i, a, o = {}) {
    return ht.create(i, {
      ...o,
      overrideConfig: a
    });
  }
  /**
   * Quick header creation methods
   */
  static modal(i, a, o = {}) {
    return ht.create("modal", {
      title: i,
      actions: [{ type: "close", handler: a }],
      ...o
    });
  }
  static browse(i, a, o = {}) {
    return ht.create("browse", {
      title: i,
      actions: [{ type: "back", handler: a }],
      ...o
    });
  }
  static browseWithTabs(i, a, o, c, _, m = {}) {
    return ht.create("browse-tabbed", {
      title: i,
      tabs: a,
      currentTab: o,
      onTabChange: c,
      actions: [{ type: "back", handler: _ }],
      ...m
    });
  }
  static page(i, a = {}) {
    return ht.create("page", {
      title: i,
      ...a
    });
  }
  static dashboard(i, a = [], o = {}) {
    return ht.create("dashboard", {
      title: i,
      rightActions: a,
      ...o
    });
  }
}
const zj = {
  // Modal headers
  MODAL_WITH_CLOSE: (t, i) => ht.modal(t, i),
  MODAL_CLOSE_ONLY: (t) => ht.create("modal-close-only", {
    actions: [{ type: "close", handler: t }]
  }),
  // Browse headers
  BROWSE_SIMPLE: (t, i) => ht.browse(t, i),
  BROWSE_WITH_TABS: (t, i, a, o, c) => ht.browseWithTabs(
    t,
    i,
    a,
    o,
    c
  ),
  // Page headers
  PAGE_TITLE: (t) => ht.page(t),
  PAGE_WITH_BACK: (t, i) => ht.create("page-with-nav", {
    title: t,
    leftActions: [{ type: "back", handler: i }]
  }),
  // Dashboard headers
  DASHBOARD_BASIC: (t) => ht.dashboard(t),
  DASHBOARD_WITH_MENU: (t, i) => ht.dashboard(t, [
    { type: "menu", handler: i, label: "Menu" }
  ]),
  // Settings headers
  SETTINGS: (t, i) => ht.create("settings-header", {
    title: t,
    leftActions: [{ type: "back", handler: i }]
  }),
  SETTINGS_WITH_TABS: (t, i, a, o, c) => ht.create("settings-header", {
    title: t,
    tabs: i,
    currentTab: a,
    onTabChange: o,
    leftActions: [{ type: "back", handler: c }]
  }),
  // Game headers
  GAME: (t, i = [], a = []) => ht.create("game-header", {
    title: t,
    leftActions: i,
    rightActions: a
  }),
  // Profile headers
  PROFILE: (t, i = []) => ht.create("profile-header", {
    title: t,
    rightActions: i
  })
}, jj = ht.create, Nj = ({
  title: t,
  tabs: i,
  currentTab: a,
  setTab: o,
  onBack: c
}) => {
  const _ = i.map(
    (h) => ({
      label: h.label,
      value: h.value
    })
  ), m = [
    {
      type: "back",
      handler: c
    }
  ];
  return /* @__PURE__ */ s.jsx(
    Zr,
    {
      kind: "browse-tabbed",
      title: t,
      tabs: _,
      currentTab: a,
      onTabChange: o,
      actions: m
    }
  );
};
function xl(t, i) {
  const a = ut(i);
  Re(function() {
    i !== a.current && t.attributionControl != null && (a.current != null && t.attributionControl.removeAttribution(a.current), i != null && t.attributionControl.addAttribution(i)), a.current = i;
  }, [
    t,
    i
  ]);
}
const xv = 1;
function wv(t) {
  return Object.freeze({
    __version: xv,
    map: t
  });
}
function wl(t, i) {
  return Object.freeze({
    ...t,
    ...i
  });
}
const Hr = ma(null);
function An() {
  const t = Xc(Hr);
  if (t == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return t;
}
function kl(t) {
  function i(a, o) {
    const { instance: c, context: _ } = t(a).current;
    pa(o, () => c);
    const { children: m } = a;
    return m == null ? null : /* @__PURE__ */ Fe.createElement(Hr, {
      value: _
    }, m);
  }
  return /* @__PURE__ */ Ae(i);
}
function kv(t) {
  function i(a, o) {
    const [c, _] = At(!1), { instance: m } = t(a, _).current;
    pa(o, () => m), Re(function() {
      c && m.update();
    }, [
      m,
      c,
      a.children
    ]);
    const h = m._contentNode;
    return h ? /* @__PURE__ */ Qc(a.children, h) : null;
  }
  return /* @__PURE__ */ Ae(i);
}
function Cl(t) {
  function i(a, o) {
    const { instance: c } = t(a).current;
    return pa(o, () => c), null;
  }
  return /* @__PURE__ */ Ae(i);
}
function Cv(t) {
  return function(a) {
    const o = An(), c = t(a, o), { instance: _ } = c.current, m = ut(a.position), { position: h } = a;
    return Re(function() {
      return _.addTo(o.map), function() {
        _.remove();
      };
    }, [
      o.map,
      _
    ]), Re(function() {
      h != null && h !== m.current && (_.setPosition(h), m.current = h);
    }, [
      _,
      h
    ]), c;
  };
}
function Vr(t, i) {
  const a = ut(void 0);
  Re(function() {
    return i != null && t.instance.on(i), a.current = i, function() {
      a.current != null && t.instance.off(a.current), a.current = null;
    };
  }, [
    t,
    i
  ]);
}
function wa(t, i) {
  const a = t.pane ?? i.pane;
  return a ? {
    ...t,
    pane: a
  } : t;
}
function Sv(t, i) {
  return function(o, c) {
    const _ = An(), m = t(wa(o, _), _);
    return xl(_.map, o.attribution), Vr(m.current, o.eventHandlers), i(m.current, _, o, c), m;
  };
}
var Or = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(t, i) {
  (function(a, o) {
    o(i);
  })(ed, function(a) {
    var o = "1.9.4";
    function c(e) {
      var n, r, l, d;
      for (r = 1, l = arguments.length; r < l; r++) {
        d = arguments[r];
        for (n in d)
          e[n] = d[n];
      }
      return e;
    }
    var _ = Object.create || /* @__PURE__ */ function() {
      function e() {
      }
      return function(n) {
        return e.prototype = n, new e();
      };
    }();
    function m(e, n) {
      var r = Array.prototype.slice;
      if (e.bind)
        return e.bind.apply(e, r.call(arguments, 1));
      var l = r.call(arguments, 2);
      return function() {
        return e.apply(n, l.length ? l.concat(r.call(arguments)) : arguments);
      };
    }
    var h = 0;
    function f(e) {
      return "_leaflet_id" in e || (e._leaflet_id = ++h), e._leaflet_id;
    }
    function g(e, n, r) {
      var l, d, u, y;
      return y = function() {
        l = !1, d && (u.apply(r, d), d = !1);
      }, u = function() {
        l ? d = arguments : (e.apply(r, arguments), setTimeout(y, n), l = !0);
      }, u;
    }
    function b(e, n, r) {
      var l = n[1], d = n[0], u = l - d;
      return e === l && r ? e : ((e - d) % u + u) % u + d;
    }
    function v() {
      return !1;
    }
    function C(e, n) {
      if (n === !1)
        return e;
      var r = Math.pow(10, n === void 0 ? 6 : n);
      return Math.round(e * r) / r;
    }
    function w(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }
    function I(e) {
      return w(e).split(/\s+/);
    }
    function j(e, n) {
      Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? _(e.options) : {});
      for (var r in n)
        e.options[r] = n[r];
      return e.options;
    }
    function A(e, n, r) {
      var l = [];
      for (var d in e)
        l.push(encodeURIComponent(r ? d.toUpperCase() : d) + "=" + encodeURIComponent(e[d]));
      return (!n || n.indexOf("?") === -1 ? "?" : "&") + l.join("&");
    }
    var O = /\{ *([\w_ -]+) *\}/g;
    function X(e, n) {
      return e.replace(O, function(r, l) {
        var d = n[l];
        if (d === void 0)
          throw new Error("No value provided for variable " + r);
        return typeof d == "function" && (d = d(n)), d;
      });
    }
    var W = Array.isArray || function(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
    function U(e, n) {
      for (var r = 0; r < e.length; r++)
        if (e[r] === n)
          return r;
      return -1;
    }
    var N = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function T(e) {
      return window["webkit" + e] || window["moz" + e] || window["ms" + e];
    }
    var J = 0;
    function V(e) {
      var n = +/* @__PURE__ */ new Date(), r = Math.max(0, 16 - (n - J));
      return J = n + r, window.setTimeout(e, r);
    }
    var B = window.requestAnimationFrame || T("RequestAnimationFrame") || V, G = window.cancelAnimationFrame || T("CancelAnimationFrame") || T("CancelRequestAnimationFrame") || function(e) {
      window.clearTimeout(e);
    };
    function F(e, n, r) {
      if (r && B === V)
        e.call(n);
      else
        return B.call(window, m(e, n));
    }
    function Q(e) {
      e && G.call(window, e);
    }
    var le = {
      __proto__: null,
      extend: c,
      create: _,
      bind: m,
      get lastId() {
        return h;
      },
      stamp: f,
      throttle: g,
      wrapNum: b,
      falseFn: v,
      formatNum: C,
      trim: w,
      splitWords: I,
      setOptions: j,
      getParamString: A,
      template: X,
      isArray: W,
      indexOf: U,
      emptyImageUrl: N,
      requestFn: B,
      cancelFn: G,
      requestAnimFrame: F,
      cancelAnimFrame: Q
    };
    function ge() {
    }
    ge.extend = function(e) {
      var n = function() {
        j(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, r = n.__super__ = this.prototype, l = _(r);
      l.constructor = n, n.prototype = l;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (n[d] = this[d]);
      return e.statics && c(n, e.statics), e.includes && (ie(e.includes), c.apply(null, [l].concat(e.includes))), c(l, e), delete l.statics, delete l.includes, l.options && (l.options = r.options ? _(r.options) : {}, c(l.options, e.options)), l._initHooks = [], l.callInitHooks = function() {
        if (!this._initHooksCalled) {
          r.callInitHooks && r.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var u = 0, y = l._initHooks.length; u < y; u++)
            l._initHooks[u].call(this);
        }
      }, n;
    }, ge.include = function(e) {
      var n = this.prototype.options;
      return c(this.prototype, e), e.options && (this.prototype.options = n, this.mergeOptions(e.options)), this;
    }, ge.mergeOptions = function(e) {
      return c(this.prototype.options, e), this;
    }, ge.addInitHook = function(e) {
      var n = Array.prototype.slice.call(arguments, 1), r = typeof e == "function" ? e : function() {
        this[e].apply(this, n);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(r), this;
    };
    function ie(e) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        e = W(e) ? e : [e];
        for (var n = 0; n < e.length; n++)
          e[n] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
    var ne = {
      /* @method on(type: String, fn: Function, context?: Object): this
       * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
       *
       * @alternative
       * @method on(eventMap: Object): this
       * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
       */
      on: function(e, n, r) {
        if (typeof e == "object")
          for (var l in e)
            this._on(l, e[l], n);
        else {
          e = I(e);
          for (var d = 0, u = e.length; d < u; d++)
            this._on(e[d], n, r);
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
      off: function(e, n, r) {
        if (!arguments.length)
          delete this._events;
        else if (typeof e == "object")
          for (var l in e)
            this._off(l, e[l], n);
        else {
          e = I(e);
          for (var d = arguments.length === 1, u = 0, y = e.length; u < y; u++)
            d ? this._off(e[u]) : this._off(e[u], n, r);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(e, n, r, l) {
        if (typeof n != "function") {
          console.warn("wrong listener type: " + typeof n);
          return;
        }
        if (this._listens(e, n, r) === !1) {
          r === this && (r = void 0);
          var d = { fn: n, ctx: r };
          l && (d.once = !0), this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(d);
        }
      },
      _off: function(e, n, r) {
        var l, d, u;
        if (this._events && (l = this._events[e], !!l)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, u = l.length; d < u; d++)
                l[d].fn = v;
            delete this._events[e];
            return;
          }
          if (typeof n != "function") {
            console.warn("wrong listener type: " + typeof n);
            return;
          }
          var y = this._listens(e, n, r);
          if (y !== !1) {
            var k = l[y];
            this._firingCount && (k.fn = v, this._events[e] = l = l.slice()), l.splice(y, 1);
          }
        }
      },
      // @method fire(type: String, data?: Object, propagate?: Boolean): this
      // Fires an event of the specified type. You can optionally provide a data
      // object — the first argument of the listener function will contain its
      // properties. The event can optionally be propagated to event parents.
      fire: function(e, n, r) {
        if (!this.listens(e, r))
          return this;
        var l = c({}, n, {
          type: e,
          target: this,
          sourceTarget: n && n.sourceTarget || this
        });
        if (this._events) {
          var d = this._events[e];
          if (d) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var u = 0, y = d.length; u < y; u++) {
              var k = d[u], S = k.fn;
              k.once && this.off(e, S, k.ctx), S.call(k.ctx || this, l);
            }
            this._firingCount--;
          }
        }
        return r && this._propagateEvent(l), this;
      },
      // @method listens(type: String, propagate?: Boolean): Boolean
      // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
      // Returns `true` if a particular event type has any listeners attached to it.
      // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
      listens: function(e, n, r, l) {
        typeof e != "string" && console.warn('"string" type argument expected');
        var d = n;
        typeof n != "function" && (l = !!n, d = void 0, r = void 0);
        var u = this._events && this._events[e];
        if (u && u.length && this._listens(e, d, r) !== !1)
          return !0;
        if (l) {
          for (var y in this._eventParents)
            if (this._eventParents[y].listens(e, n, r, l))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(e, n, r) {
        if (!this._events)
          return !1;
        var l = this._events[e] || [];
        if (!n)
          return !!l.length;
        r === this && (r = void 0);
        for (var d = 0, u = l.length; d < u; d++)
          if (l[d].fn === n && l[d].ctx === r)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(e, n, r) {
        if (typeof e == "object")
          for (var l in e)
            this._on(l, e[l], n, !0);
        else {
          e = I(e);
          for (var d = 0, u = e.length; d < u; d++)
            this._on(e[d], n, r, !0);
        }
        return this;
      },
      // @method addEventParent(obj: Evented): this
      // Adds an event parent - an `Evented` that will receive propagated events
      addEventParent: function(e) {
        return this._eventParents = this._eventParents || {}, this._eventParents[f(e)] = e, this;
      },
      // @method removeEventParent(obj: Evented): this
      // Removes an event parent, so it will stop receiving propagated events
      removeEventParent: function(e) {
        return this._eventParents && delete this._eventParents[f(e)], this;
      },
      _propagateEvent: function(e) {
        for (var n in this._eventParents)
          this._eventParents[n].fire(e.type, c({
            layer: e.target,
            propagatedFrom: e.target
          }, e), !0);
      }
    };
    ne.addEventListener = ne.on, ne.removeEventListener = ne.clearAllEventListeners = ne.off, ne.addOneTimeEventListener = ne.once, ne.fireEvent = ne.fire, ne.hasEventListeners = ne.listens;
    var ce = ge.extend(ne);
    function E(e, n, r) {
      this.x = r ? Math.round(e) : e, this.y = r ? Math.round(n) : n;
    }
    var te = Math.trunc || function(e) {
      return e > 0 ? Math.floor(e) : Math.ceil(e);
    };
    E.prototype = {
      // @method clone(): Point
      // Returns a copy of the current point.
      clone: function() {
        return new E(this.x, this.y);
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
        return new E(this.x * e.x, this.y * e.y);
      },
      // @method unscaleBy(scale: Point): Point
      // Inverse of `scaleBy`. Divide each coordinate of the current point by
      // each coordinate of `scale`.
      unscaleBy: function(e) {
        return new E(this.x / e.x, this.y / e.y);
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
        return this.x = te(this.x), this.y = te(this.y), this;
      },
      // @method distanceTo(otherPoint: Point): Number
      // Returns the cartesian distance between the current and the given points.
      distanceTo: function(e) {
        e = x(e);
        var n = e.x - this.x, r = e.y - this.y;
        return Math.sqrt(n * n + r * r);
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
        return "Point(" + C(this.x) + ", " + C(this.y) + ")";
      }
    };
    function x(e, n, r) {
      return e instanceof E ? e : W(e) ? new E(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new E(e.x, e.y) : new E(e, n, r);
    }
    function Z(e, n) {
      if (e)
        for (var r = n ? [e, n] : e, l = 0, d = r.length; l < d; l++)
          this.extend(r[l]);
    }
    Z.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var n, r;
        if (!e)
          return this;
        if (e instanceof E || typeof e[0] == "number" || "x" in e)
          n = r = x(e);
        else if (e = z(e), n = e.min, r = e.max, !n || !r)
          return this;
        return !this.min && !this.max ? (this.min = n.clone(), this.max = r.clone()) : (this.min.x = Math.min(n.x, this.min.x), this.max.x = Math.max(r.x, this.max.x), this.min.y = Math.min(n.y, this.min.y), this.max.y = Math.max(r.y, this.max.y)), this;
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
        var n, r;
        return typeof e[0] == "number" || e instanceof E ? e = x(e) : e = z(e), e instanceof Z ? (n = e.min, r = e.max) : n = r = e, n.x >= this.min.x && r.x <= this.max.x && n.y >= this.min.y && r.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(e) {
        e = z(e);
        var n = this.min, r = this.max, l = e.min, d = e.max, u = d.x >= n.x && l.x <= r.x, y = d.y >= n.y && l.y <= r.y;
        return u && y;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(e) {
        e = z(e);
        var n = this.min, r = this.max, l = e.min, d = e.max, u = d.x > n.x && l.x < r.x, y = d.y > n.y && l.y < r.y;
        return u && y;
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
        var n = this.min, r = this.max, l = Math.abs(n.x - r.x) * e, d = Math.abs(n.y - r.y) * e;
        return z(
          x(n.x - l, n.y - d),
          x(r.x + l, r.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(e) {
        return e ? (e = z(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
      }
    };
    function z(e, n) {
      return !e || e instanceof Z ? e : new Z(e, n);
    }
    function H(e, n) {
      if (e)
        for (var r = n ? [e, n] : e, l = 0, d = r.length; l < d; l++)
          this.extend(r[l]);
    }
    H.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var n = this._southWest, r = this._northEast, l, d;
        if (e instanceof ee)
          l = e, d = e;
        else if (e instanceof H) {
          if (l = e._southWest, d = e._northEast, !l || !d)
            return this;
        } else
          return e ? this.extend(Y(e) || q(e)) : this;
        return !n && !r ? (this._southWest = new ee(l.lat, l.lng), this._northEast = new ee(d.lat, d.lng)) : (n.lat = Math.min(l.lat, n.lat), n.lng = Math.min(l.lng, n.lng), r.lat = Math.max(d.lat, r.lat), r.lng = Math.max(d.lng, r.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(e) {
        var n = this._southWest, r = this._northEast, l = Math.abs(n.lat - r.lat) * e, d = Math.abs(n.lng - r.lng) * e;
        return new H(
          new ee(n.lat - l, n.lng - d),
          new ee(r.lat + l, r.lng + d)
        );
      },
      // @method getCenter(): LatLng
      // Returns the center point of the bounds.
      getCenter: function() {
        return new ee(
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
        return new ee(this.getNorth(), this.getWest());
      },
      // @method getSouthEast(): LatLng
      // Returns the south-east point of the bounds.
      getSouthEast: function() {
        return new ee(this.getSouth(), this.getEast());
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
        typeof e[0] == "number" || e instanceof ee || "lat" in e ? e = Y(e) : e = q(e);
        var n = this._southWest, r = this._northEast, l, d;
        return e instanceof H ? (l = e.getSouthWest(), d = e.getNorthEast()) : l = d = e, l.lat >= n.lat && d.lat <= r.lat && l.lng >= n.lng && d.lng <= r.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(e) {
        e = q(e);
        var n = this._southWest, r = this._northEast, l = e.getSouthWest(), d = e.getNorthEast(), u = d.lat >= n.lat && l.lat <= r.lat, y = d.lng >= n.lng && l.lng <= r.lng;
        return u && y;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(e) {
        e = q(e);
        var n = this._southWest, r = this._northEast, l = e.getSouthWest(), d = e.getNorthEast(), u = d.lat > n.lat && l.lat < r.lat, y = d.lng > n.lng && l.lng < r.lng;
        return u && y;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(e, n) {
        return e ? (e = q(e), this._southWest.equals(e.getSouthWest(), n) && this._northEast.equals(e.getNorthEast(), n)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function q(e, n) {
      return e instanceof H ? e : new H(e, n);
    }
    function ee(e, n, r) {
      if (isNaN(e) || isNaN(n))
        throw new Error("Invalid LatLng object: (" + e + ", " + n + ")");
      this.lat = +e, this.lng = +n, r !== void 0 && (this.alt = +r);
    }
    ee.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(e, n) {
        if (!e)
          return !1;
        e = Y(e);
        var r = Math.max(
          Math.abs(this.lat - e.lat),
          Math.abs(this.lng - e.lng)
        );
        return r <= (n === void 0 ? 1e-9 : n);
      },
      // @method toString(): String
      // Returns a string representation of the point (for debugging purposes).
      toString: function(e) {
        return "LatLng(" + C(this.lat, e) + ", " + C(this.lng, e) + ")";
      },
      // @method distanceTo(otherLatLng: LatLng): Number
      // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
      distanceTo: function(e) {
        return de.distance(this, Y(e));
      },
      // @method wrap(): LatLng
      // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
      wrap: function() {
        return de.wrapLatLng(this);
      },
      // @method toBounds(sizeInMeters: Number): LatLngBounds
      // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
      toBounds: function(e) {
        var n = 180 * e / 40075017, r = n / Math.cos(Math.PI / 180 * this.lat);
        return q(
          [this.lat - n, this.lng - r],
          [this.lat + n, this.lng + r]
        );
      },
      clone: function() {
        return new ee(this.lat, this.lng, this.alt);
      }
    };
    function Y(e, n, r) {
      return e instanceof ee ? e : W(e) && typeof e[0] != "object" ? e.length === 3 ? new ee(e[0], e[1], e[2]) : e.length === 2 ? new ee(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new ee(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : n === void 0 ? null : new ee(e, n, r);
    }
    var me = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(e, n) {
        var r = this.projection.project(e), l = this.scale(n);
        return this.transformation._transform(r, l);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(e, n) {
        var r = this.scale(n), l = this.transformation.untransform(e, r);
        return this.projection.unproject(l);
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
        var n = this.projection.bounds, r = this.scale(e), l = this.transformation.transform(n.min, r), d = this.transformation.transform(n.max, r);
        return new Z(l, d);
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
        var n = this.wrapLng ? b(e.lng, this.wrapLng, !0) : e.lng, r = this.wrapLat ? b(e.lat, this.wrapLat, !0) : e.lat, l = e.alt;
        return new ee(r, n, l);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(e) {
        var n = e.getCenter(), r = this.wrapLatLng(n), l = n.lat - r.lat, d = n.lng - r.lng;
        if (l === 0 && d === 0)
          return e;
        var u = e.getSouthWest(), y = e.getNorthEast(), k = new ee(u.lat - l, u.lng - d), S = new ee(y.lat - l, y.lng - d);
        return new H(k, S);
      }
    }, de = c({}, me, {
      wrapLng: [-180, 180],
      // Mean Earth Radius, as recommended for use by
      // the International Union of Geodesy and Geophysics,
      // see https://rosettacode.org/wiki/Haversine_formula
      R: 6371e3,
      // distance between two geographical points using spherical law of cosines approximation
      distance: function(e, n) {
        var r = Math.PI / 180, l = e.lat * r, d = n.lat * r, u = Math.sin((n.lat - e.lat) * r / 2), y = Math.sin((n.lng - e.lng) * r / 2), k = u * u + Math.cos(l) * Math.cos(d) * y * y, S = 2 * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k));
        return this.R * S;
      }
    }), Me = 6378137, Ee = {
      R: Me,
      MAX_LATITUDE: 85.0511287798,
      project: function(e) {
        var n = Math.PI / 180, r = this.MAX_LATITUDE, l = Math.max(Math.min(r, e.lat), -r), d = Math.sin(l * n);
        return new E(
          this.R * e.lng * n,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(e) {
        var n = 180 / Math.PI;
        return new ee(
          (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * n,
          e.x * n / this.R
        );
      },
      bounds: function() {
        var e = Me * Math.PI;
        return new Z([-e, -e], [e, e]);
      }()
    };
    function ae(e, n, r, l) {
      if (W(e)) {
        this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
        return;
      }
      this._a = e, this._b = n, this._c = r, this._d = l;
    }
    ae.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(e, n) {
        return this._transform(e.clone(), n);
      },
      // destructive transform (faster)
      _transform: function(e, n) {
        return n = n || 1, e.x = n * (this._a * e.x + this._b), e.y = n * (this._c * e.y + this._d), e;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(e, n) {
        return n = n || 1, new E(
          (e.x / n - this._b) / this._a,
          (e.y / n - this._d) / this._c
        );
      }
    };
    function pe(e, n, r, l) {
      return new ae(e, n, r, l);
    }
    var we = c({}, de, {
      code: "EPSG:3857",
      projection: Ee,
      transformation: function() {
        var e = 0.5 / (Math.PI * Ee.R);
        return pe(e, 0.5, -e, 0.5);
      }()
    }), re = c({}, we, {
      code: "EPSG:900913"
    });
    function Se(e) {
      return document.createElementNS("http://www.w3.org/2000/svg", e);
    }
    function he(e, n) {
      var r = "", l, d, u, y, k, S;
      for (l = 0, u = e.length; l < u; l++) {
        for (k = e[l], d = 0, y = k.length; d < y; d++)
          S = k[d], r += (d ? "L" : "M") + S.x + " " + S.y;
        r += n ? ue.svg ? "z" : "x" : "";
      }
      return r || "M0 0";
    }
    var $ = document.documentElement.style, R = "ActiveXObject" in window, Le = R && !document.addEventListener, Xe = "msLaunchUri" in navigator && !("documentMode" in document), qe = Xt("webkit"), Ke = Xt("android"), $e = Xt("android 2") || Xt("android 3"), ve = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ue = Ke && Xt("Google") && ve < 537 && !("AudioNode" in window), nt = !!window.opera, mt = !Xe && Xt("chrome"), Oe = Xt("gecko") && !qe && !nt && !R, jt = !mt && Xt("safari"), It = Xt("phantom"), Nt = "OTransition" in $, si = navigator.platform.indexOf("Win") === 0, Bt = R && "transition" in $, li = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !$e, Ht = "MozPerspective" in $, Vt = !window.L_DISABLE_3D && (Bt || li || Ht) && !Nt && !It, Jt = typeof orientation < "u" || Xt("mobile"), ji = Jt && qe, Ni = Jt && li, ye = !window.PointerEvent && window.MSPointerEvent, Te = !!(window.PointerEvent || ye), at = "ontouchstart" in window || !!window.TouchEvent, Lt = !window.L_NO_TOUCH && (at || Te), ci = Jt && nt, P = Jt && Oe, _e = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ze = function() {
      var e = !1;
      try {
        var n = Object.defineProperty({}, "passive", {
          get: function() {
            e = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", v, n), window.removeEventListener("testPassiveEventSupport", v, n);
      } catch {
      }
      return e;
    }(), Tt = function() {
      return !!document.createElement("canvas").getContext;
    }(), Gt = !!(document.createElementNS && Se("svg").createSVGRect), Ca = !!Gt && function() {
      var e = document.createElement("div");
      return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), Sa = !Gt && function() {
      try {
        var e = document.createElement("div");
        e.innerHTML = '<v:shape adj="1"/>';
        var n = e.firstChild;
        return n.style.behavior = "url(#default#VML)", n && typeof n.adj == "object";
      } catch {
        return !1;
      }
    }(), bt = navigator.platform.indexOf("Mac") === 0, Di = navigator.platform.indexOf("Linux") === 0;
    function Xt(e) {
      return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
    }
    var ue = {
      ie: R,
      ielt9: Le,
      edge: Xe,
      webkit: qe,
      android: Ke,
      android23: $e,
      androidStock: Ue,
      opera: nt,
      chrome: mt,
      gecko: Oe,
      safari: jt,
      phantom: It,
      opera12: Nt,
      win: si,
      ie3d: Bt,
      webkit3d: li,
      gecko3d: Ht,
      any3d: Vt,
      mobile: Jt,
      mobileWebkit: ji,
      mobileWebkit3d: Ni,
      msPointer: ye,
      pointer: Te,
      touch: Lt,
      touchNative: at,
      mobileOpera: ci,
      mobileGecko: P,
      retina: _e,
      passiveEvents: ze,
      canvas: Tt,
      svg: Gt,
      vml: Sa,
      inlineSvg: Ca,
      mac: bt,
      linux: Di
    }, Bn = ue.msPointer ? "MSPointerDown" : "pointerdown", Ti = ue.msPointer ? "MSPointerMove" : "pointermove", Gr = ue.msPointer ? "MSPointerUp" : "pointerup", Kr = ue.msPointer ? "MSPointerCancel" : "pointercancel", za = {
      touchstart: Bn,
      touchmove: Ti,
      touchend: Gr,
      touchcancel: Kr
    }, qr = {
      touchstart: ql,
      touchmove: Fn,
      touchend: Fn,
      touchcancel: Fn
    }, Qi = {}, Yr = !1;
    function Zl(e, n, r) {
      return n === "touchstart" && Kl(), qr[n] ? (r = qr[n].bind(this, r), e.addEventListener(za[n], r, !1), r) : (console.warn("wrong event specified:", n), v);
    }
    function Hl(e, n, r) {
      if (!za[n]) {
        console.warn("wrong event specified:", n);
        return;
      }
      e.removeEventListener(za[n], r, !1);
    }
    function Vl(e) {
      Qi[e.pointerId] = e;
    }
    function Gl(e) {
      Qi[e.pointerId] && (Qi[e.pointerId] = e);
    }
    function Jr(e) {
      delete Qi[e.pointerId];
    }
    function Kl() {
      Yr || (document.addEventListener(Bn, Vl, !0), document.addEventListener(Ti, Gl, !0), document.addEventListener(Gr, Jr, !0), document.addEventListener(Kr, Jr, !0), Yr = !0);
    }
    function Fn(e, n) {
      if (n.pointerType !== (n.MSPOINTER_TYPE_MOUSE || "mouse")) {
        n.touches = [];
        for (var r in Qi)
          n.touches.push(Qi[r]);
        n.changedTouches = [n], e(n);
      }
    }
    function ql(e, n) {
      n.MSPOINTER_TYPE_TOUCH && n.pointerType === n.MSPOINTER_TYPE_TOUCH && Pt(n), Fn(e, n);
    }
    function Yl(e) {
      var n = {}, r, l;
      for (l in e)
        r = e[l], n[l] = r && r.bind ? r.bind(e) : r;
      return e = n, n.type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n;
    }
    var Jl = 200;
    function Xl(e, n) {
      e.addEventListener("dblclick", n);
      var r = 0, l;
      function d(u) {
        if (u.detail !== 1) {
          l = u.detail;
          return;
        }
        if (!(u.pointerType === "mouse" || u.sourceCapabilities && !u.sourceCapabilities.firesTouchEvents)) {
          var y = io(u);
          if (!(y.some(function(S) {
            return S instanceof HTMLLabelElement && S.attributes.for;
          }) && !y.some(function(S) {
            return S instanceof HTMLInputElement || S instanceof HTMLSelectElement;
          }))) {
            var k = Date.now();
            k - r <= Jl ? (l++, l === 2 && n(Yl(u))) : l = 1, r = k;
          }
        }
      }
      return e.addEventListener("click", d), {
        dblclick: n,
        simDblclick: d
      };
    }
    function Ql(e, n) {
      e.removeEventListener("dblclick", n.dblclick), e.removeEventListener("click", n.simDblclick);
    }
    var ja = Wn(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), _n = Wn(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), Xr = _n === "webkitTransition" || _n === "OTransition" ? _n + "End" : "transitionend";
    function Qr(e) {
      return typeof e == "string" ? document.getElementById(e) : e;
    }
    function un(e, n) {
      var r = e.style[n] || e.currentStyle && e.currentStyle[n];
      if ((!r || r === "auto") && document.defaultView) {
        var l = document.defaultView.getComputedStyle(e, null);
        r = l ? l[n] : null;
      }
      return r === "auto" ? null : r;
    }
    function We(e, n, r) {
      var l = document.createElement(e);
      return l.className = n || "", r && r.appendChild(l), l;
    }
    function lt(e) {
      var n = e.parentNode;
      n && n.removeChild(e);
    }
    function Dn(e) {
      for (; e.firstChild; )
        e.removeChild(e.firstChild);
    }
    function en(e) {
      var n = e.parentNode;
      n && n.lastChild !== e && n.appendChild(e);
    }
    function tn(e) {
      var n = e.parentNode;
      n && n.firstChild !== e && n.insertBefore(e, n.firstChild);
    }
    function Na(e, n) {
      if (e.classList !== void 0)
        return e.classList.contains(n);
      var r = $n(e);
      return r.length > 0 && new RegExp("(^|\\s)" + n + "(\\s|$)").test(r);
    }
    function Pe(e, n) {
      if (e.classList !== void 0)
        for (var r = I(n), l = 0, d = r.length; l < d; l++)
          e.classList.add(r[l]);
      else if (!Na(e, n)) {
        var u = $n(e);
        Ta(e, (u ? u + " " : "") + n);
      }
    }
    function pt(e, n) {
      e.classList !== void 0 ? e.classList.remove(n) : Ta(e, w((" " + $n(e) + " ").replace(" " + n + " ", " ")));
    }
    function Ta(e, n) {
      e.className.baseVal === void 0 ? e.className = n : e.className.baseVal = n;
    }
    function $n(e) {
      return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
    }
    function Qt(e, n) {
      "opacity" in e.style ? e.style.opacity = n : "filter" in e.style && ec(e, n);
    }
    function ec(e, n) {
      var r = !1, l = "DXImageTransform.Microsoft.Alpha";
      try {
        r = e.filters.item(l);
      } catch {
        if (n === 1)
          return;
      }
      n = Math.round(n * 100), r ? (r.Enabled = n !== 100, r.Opacity = n) : e.style.filter += " progid:" + l + "(opacity=" + n + ")";
    }
    function Wn(e) {
      for (var n = document.documentElement.style, r = 0; r < e.length; r++)
        if (e[r] in n)
          return e[r];
      return !1;
    }
    function $i(e, n, r) {
      var l = n || new E(0, 0);
      e.style[ja] = (ue.ie3d ? "translate(" + l.x + "px," + l.y + "px)" : "translate3d(" + l.x + "px," + l.y + "px,0)") + (r ? " scale(" + r + ")" : "");
    }
    function ft(e, n) {
      e._leaflet_pos = n, ue.any3d ? $i(e, n) : (e.style.left = n.x + "px", e.style.top = n.y + "px");
    }
    function Wi(e) {
      return e._leaflet_pos || new E(0, 0);
    }
    var mn, pn, Pa;
    if ("onselectstart" in document)
      mn = function() {
        je(window, "selectstart", Pt);
      }, pn = function() {
        Qe(window, "selectstart", Pt);
      };
    else {
      var hn = Wn(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      mn = function() {
        if (hn) {
          var e = document.documentElement.style;
          Pa = e[hn], e[hn] = "none";
        }
      }, pn = function() {
        hn && (document.documentElement.style[hn] = Pa, Pa = void 0);
      };
    }
    function Ea() {
      je(window, "dragstart", Pt);
    }
    function Ia() {
      Qe(window, "dragstart", Pt);
    }
    var Un, La;
    function Aa(e) {
      for (; e.tabIndex === -1; )
        e = e.parentNode;
      e.style && (Zn(), Un = e, La = e.style.outlineStyle, e.style.outlineStyle = "none", je(window, "keydown", Zn));
    }
    function Zn() {
      Un && (Un.style.outlineStyle = La, Un = void 0, La = void 0, Qe(window, "keydown", Zn));
    }
    function eo(e) {
      do
        e = e.parentNode;
      while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
      return e;
    }
    function Ma(e) {
      var n = e.getBoundingClientRect();
      return {
        x: n.width / e.offsetWidth || 1,
        y: n.height / e.offsetHeight || 1,
        boundingClientRect: n
      };
    }
    var tc = {
      __proto__: null,
      TRANSFORM: ja,
      TRANSITION: _n,
      TRANSITION_END: Xr,
      get: Qr,
      getStyle: un,
      create: We,
      remove: lt,
      empty: Dn,
      toFront: en,
      toBack: tn,
      hasClass: Na,
      addClass: Pe,
      removeClass: pt,
      setClass: Ta,
      getClass: $n,
      setOpacity: Qt,
      testProp: Wn,
      setTransform: $i,
      setPosition: ft,
      getPosition: Wi,
      get disableTextSelection() {
        return mn;
      },
      get enableTextSelection() {
        return pn;
      },
      disableImageDrag: Ea,
      enableImageDrag: Ia,
      preventOutline: Aa,
      restoreOutline: Zn,
      getSizedParentNode: eo,
      getScale: Ma
    };
    function je(e, n, r, l) {
      if (n && typeof n == "object")
        for (var d in n)
          Ra(e, d, n[d], r);
      else {
        n = I(n);
        for (var u = 0, y = n.length; u < y; u++)
          Ra(e, n[u], r, l);
      }
      return this;
    }
    var di = "_leaflet_events";
    function Qe(e, n, r, l) {
      if (arguments.length === 1)
        to(e), delete e[di];
      else if (n && typeof n == "object")
        for (var d in n)
          Ba(e, d, n[d], r);
      else if (n = I(n), arguments.length === 2)
        to(e, function(k) {
          return U(n, k) !== -1;
        });
      else
        for (var u = 0, y = n.length; u < y; u++)
          Ba(e, n[u], r, l);
      return this;
    }
    function to(e, n) {
      for (var r in e[di]) {
        var l = r.split(/\d/)[0];
        (!n || n(l)) && Ba(e, l, null, null, r);
      }
    }
    var Oa = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Ra(e, n, r, l) {
      var d = n + f(r) + (l ? "_" + f(l) : "");
      if (e[di] && e[di][d])
        return this;
      var u = function(k) {
        return r.call(l || e, k || window.event);
      }, y = u;
      !ue.touchNative && ue.pointer && n.indexOf("touch") === 0 ? u = Zl(e, n, u) : ue.touch && n === "dblclick" ? u = Xl(e, u) : "addEventListener" in e ? n === "touchstart" || n === "touchmove" || n === "wheel" || n === "mousewheel" ? e.addEventListener(Oa[n] || n, u, ue.passiveEvents ? { passive: !1 } : !1) : n === "mouseenter" || n === "mouseleave" ? (u = function(k) {
        k = k || window.event, Da(e, k) && y(k);
      }, e.addEventListener(Oa[n], u, !1)) : e.addEventListener(n, y, !1) : e.attachEvent("on" + n, u), e[di] = e[di] || {}, e[di][d] = u;
    }
    function Ba(e, n, r, l, d) {
      d = d || n + f(r) + (l ? "_" + f(l) : "");
      var u = e[di] && e[di][d];
      if (!u)
        return this;
      !ue.touchNative && ue.pointer && n.indexOf("touch") === 0 ? Hl(e, n, u) : ue.touch && n === "dblclick" ? Ql(e, u) : "removeEventListener" in e ? e.removeEventListener(Oa[n] || n, u, !1) : e.detachEvent("on" + n, u), e[di][d] = null;
    }
    function Ui(e) {
      return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
    }
    function Fa(e) {
      return Ra(e, "wheel", Ui), this;
    }
    function fn(e) {
      return je(e, "mousedown touchstart dblclick contextmenu", Ui), e._leaflet_disable_click = !0, this;
    }
    function Pt(e) {
      return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
    }
    function Zi(e) {
      return Pt(e), Ui(e), this;
    }
    function io(e) {
      if (e.composedPath)
        return e.composedPath();
      for (var n = [], r = e.target; r; )
        n.push(r), r = r.parentNode;
      return n;
    }
    function no(e, n) {
      if (!n)
        return new E(e.clientX, e.clientY);
      var r = Ma(n), l = r.boundingClientRect;
      return new E(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (e.clientX - l.left) / r.x - n.clientLeft,
        (e.clientY - l.top) / r.y - n.clientTop
      );
    }
    var ic = ue.linux && ue.chrome ? window.devicePixelRatio : ue.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function ao(e) {
      return ue.edge ? e.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        e.deltaY && e.deltaMode === 0 ? -e.deltaY / ic : (
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
    function Da(e, n) {
      var r = n.relatedTarget;
      if (!r)
        return !0;
      try {
        for (; r && r !== e; )
          r = r.parentNode;
      } catch {
        return !1;
      }
      return r !== e;
    }
    var nc = {
      __proto__: null,
      on: je,
      off: Qe,
      stopPropagation: Ui,
      disableScrollPropagation: Fa,
      disableClickPropagation: fn,
      preventDefault: Pt,
      stop: Zi,
      getPropagationPath: io,
      getMousePosition: no,
      getWheelDelta: ao,
      isExternalTarget: Da,
      addListener: je,
      removeListener: Qe
    }, ro = ce.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(e, n, r, l) {
        this.stop(), this._el = e, this._inProgress = !0, this._duration = r || 0.25, this._easeOutPower = 1 / Math.max(l || 0.5, 0.2), this._startPos = Wi(e), this._offset = n.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
      },
      // @method stop()
      // Stops the animation (if currently running).
      stop: function() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function() {
        this._animId = F(this._animate, this), this._step();
      },
      _step: function(e) {
        var n = +/* @__PURE__ */ new Date() - this._startTime, r = this._duration * 1e3;
        n < r ? this._runFrame(this._easeOut(n / r), e) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(e, n) {
        var r = this._startPos.add(this._offset.multiplyBy(e));
        n && r._round(), ft(this._el, r), this.fire("step");
      },
      _complete: function() {
        Q(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function(e) {
        return 1 - Math.pow(1 - e, this._easeOutPower);
      }
    }), De = ce.extend({
      options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: we,
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
      initialize: function(e, n) {
        n = j(this, n), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = m(this._onResize, this), this._initEvents(), n.maxBounds && this.setMaxBounds(n.maxBounds), n.zoom !== void 0 && (this._zoom = this._limitZoom(n.zoom)), n.center && n.zoom !== void 0 && this.setView(Y(n.center), n.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = _n && ue.any3d && !ue.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), je(this._proxy, Xr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(e, n, r) {
        if (n = n === void 0 ? this._zoom : this._limitZoom(n), e = this._limitCenter(Y(e), n, this.options.maxBounds), r = r || {}, this._stop(), this._loaded && !r.reset && r !== !0) {
          r.animate !== void 0 && (r.zoom = c({ animate: r.animate }, r.zoom), r.pan = c({ animate: r.animate, duration: r.duration }, r.pan));
          var l = this._zoom !== n ? this._tryAnimatedZoom && this._tryAnimatedZoom(e, n, r.zoom) : this._tryAnimatedPan(e, r.pan);
          if (l)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(e, n, r.pan && r.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(e, n) {
        return this._loaded ? this.setView(this.getCenter(), e, { zoom: n }) : (this._zoom = e, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(e, n) {
        return e = e || (ue.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + e, n);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(e, n) {
        return e = e || (ue.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - e, n);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(e, n, r) {
        var l = this.getZoomScale(n), d = this.getSize().divideBy(2), u = e instanceof E ? e : this.latLngToContainerPoint(e), y = u.subtract(d).multiplyBy(1 - 1 / l), k = this.containerPointToLatLng(d.add(y));
        return this.setView(k, n, { zoom: r });
      },
      _getBoundsCenterZoom: function(e, n) {
        n = n || {}, e = e.getBounds ? e.getBounds() : q(e);
        var r = x(n.paddingTopLeft || n.padding || [0, 0]), l = x(n.paddingBottomRight || n.padding || [0, 0]), d = this.getBoundsZoom(e, !1, r.add(l));
        if (d = typeof n.maxZoom == "number" ? Math.min(n.maxZoom, d) : d, d === 1 / 0)
          return {
            center: e.getCenter(),
            zoom: d
          };
        var u = l.subtract(r).divideBy(2), y = this.project(e.getSouthWest(), d), k = this.project(e.getNorthEast(), d), S = this.unproject(y.add(k).divideBy(2).add(u), d);
        return {
          center: S,
          zoom: d
        };
      },
      // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets a map view that contains the given geographical bounds with the
      // maximum zoom level possible.
      fitBounds: function(e, n) {
        if (e = q(e), !e.isValid())
          throw new Error("Bounds are not valid.");
        var r = this._getBoundsCenterZoom(e, n);
        return this.setView(r.center, r.zoom, n);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(e) {
        return this.fitBounds([[-90, -180], [90, 180]], e);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(e, n) {
        return this.setView(e, this._zoom, { pan: n });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(e, n) {
        if (e = x(e).round(), n = n || {}, !e.x && !e.y)
          return this.fire("moveend");
        if (n.animate !== !0 && !this.getSize().contains(e))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new ro(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), n.noMoveStart || this.fire("movestart"), n.animate !== !1) {
          Pe(this._mapPane, "leaflet-pan-anim");
          var r = this._getMapPanePos().subtract(e).round();
          this._panAnim.run(this._mapPane, r, n.duration || 0.25, n.easeLinearity);
        } else
          this._rawPanBy(e), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(e, n, r) {
        if (r = r || {}, r.animate === !1 || !ue.any3d)
          return this.setView(e, n, r);
        this._stop();
        var l = this.project(this.getCenter()), d = this.project(e), u = this.getSize(), y = this._zoom;
        e = Y(e), n = n === void 0 ? y : n;
        var k = Math.max(u.x, u.y), S = k * this.getZoomScale(y, n), K = d.distanceTo(l) || 1, oe = 1.42, xe = oe * oe;
        function Ie(gt) {
          var ia = gt ? -1 : 1, Hc = gt ? S : k, Vc = S * S - k * k + ia * xe * xe * K * K, Gc = 2 * Hc * xe * K, Ja = Vc / Gc, Do = Math.sqrt(Ja * Ja + 1) - Ja, Kc = Do < 1e-9 ? -18 : Math.log(Do);
          return Kc;
        }
        function Mt(gt) {
          return (Math.exp(gt) - Math.exp(-gt)) / 2;
        }
        function wt(gt) {
          return (Math.exp(gt) + Math.exp(-gt)) / 2;
        }
        function ti(gt) {
          return Mt(gt) / wt(gt);
        }
        var Ft = Ie(0);
        function ln(gt) {
          return k * (wt(Ft) / wt(Ft + oe * gt));
        }
        function $c(gt) {
          return k * (wt(Ft) * ti(Ft + oe * gt) - Mt(Ft)) / xe;
        }
        function Wc(gt) {
          return 1 - Math.pow(1 - gt, 1.5);
        }
        var Uc = Date.now(), Bo = (Ie(1) - Ft) / oe, Zc = r.duration ? 1e3 * r.duration : 1e3 * Bo * 0.8;
        function Fo() {
          var gt = (Date.now() - Uc) / Zc, ia = Wc(gt) * Bo;
          gt <= 1 ? (this._flyToFrame = F(Fo, this), this._move(
            this.unproject(l.add(d.subtract(l).multiplyBy($c(ia) / K)), y),
            this.getScaleZoom(k / ln(ia), y),
            { flyTo: !0 }
          )) : this._move(e, n)._moveEnd(!0);
        }
        return this._moveStart(!0, r.noMoveStart), Fo.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(e, n) {
        var r = this._getBoundsCenterZoom(e, n);
        return this.flyTo(r.center, r.zoom, n);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(e) {
        return e = q(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(e) {
        var n = this.options.minZoom;
        return this.options.minZoom = e, this._loaded && n !== e && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(e) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(e) {
        var n = this.options.maxZoom;
        return this.options.maxZoom = e, this._loaded && n !== e && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(e) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(e, n) {
        this._enforcingBounds = !0;
        var r = this.getCenter(), l = this._limitCenter(r, this._zoom, q(e));
        return r.equals(l) || this.panTo(l, n), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(e, n) {
        n = n || {};
        var r = x(n.paddingTopLeft || n.padding || [0, 0]), l = x(n.paddingBottomRight || n.padding || [0, 0]), d = this.project(this.getCenter()), u = this.project(e), y = this.getPixelBounds(), k = z([y.min.add(r), y.max.subtract(l)]), S = k.getSize();
        if (!k.contains(u)) {
          this._enforcingBounds = !0;
          var K = u.subtract(k.getCenter()), oe = k.extend(u).getSize().subtract(S);
          d.x += K.x < 0 ? -oe.x : oe.x, d.y += K.y < 0 ? -oe.y : oe.y, this.panTo(this.unproject(d), n), this._enforcingBounds = !1;
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
        var n = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var r = this.getSize(), l = n.divideBy(2).round(), d = r.divideBy(2).round(), u = l.subtract(d);
        return !u.x && !u.y ? this : (e.animate && e.pan ? this.panBy(u) : (e.pan && this._rawPanBy(u), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(m(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: n,
          newSize: r
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
        var n = m(this._handleGeolocationResponse, this), r = m(this._handleGeolocationError, this);
        return e.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, r, e) : navigator.geolocation.getCurrentPosition(n, r, e), this;
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
          var n = e.code, r = e.message || (n === 1 ? "permission denied" : n === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: n,
            message: "Geolocation error: " + r + "."
          });
        }
      },
      _handleGeolocationResponse: function(e) {
        if (this._container._leaflet_id) {
          var n = e.coords.latitude, r = e.coords.longitude, l = new ee(n, r), d = l.toBounds(e.coords.accuracy * 2), u = this._locateOptions;
          if (u.setView) {
            var y = this.getBoundsZoom(d);
            this.setView(l, u.maxZoom ? Math.min(y, u.maxZoom) : y);
          }
          var k = {
            latlng: l,
            bounds: d,
            timestamp: e.timestamp
          };
          for (var S in e.coords)
            typeof e.coords[S] == "number" && (k[S] = e.coords[S]);
          this.fire("locationfound", k);
        }
      },
      // TODO Appropriate docs section?
      // @section Other Methods
      // @method addHandler(name: String, HandlerClass: Function): this
      // Adds a new `Handler` to the map, given its name and constructor function.
      addHandler: function(e, n) {
        if (!n)
          return this;
        var r = this[e] = new n(this);
        return this._handlers.push(r), this.options[e] && r.enable(), this;
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
        this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), lt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Q(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
        var e;
        for (e in this._layers)
          this._layers[e].remove();
        for (e in this._panes)
          lt(this._panes[e]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      // @section Other Methods
      // @method createPane(name: String, container?: HTMLElement): HTMLElement
      // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
      // then returns it. The pane is created as a child of `container`, or
      // as a child of the main map pane if not set.
      createPane: function(e, n) {
        var r = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), l = We("div", r, n || this._mapPane);
        return e && (this._panes[e] = l), l;
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
        var e = this.getPixelBounds(), n = this.unproject(e.getBottomLeft()), r = this.unproject(e.getTopRight());
        return new H(n, r);
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
      getBoundsZoom: function(e, n, r) {
        e = q(e), r = x(r || [0, 0]);
        var l = this.getZoom() || 0, d = this.getMinZoom(), u = this.getMaxZoom(), y = e.getNorthWest(), k = e.getSouthEast(), S = this.getSize().subtract(r), K = z(this.project(k, l), this.project(y, l)).getSize(), oe = ue.any3d ? this.options.zoomSnap : 1, xe = S.x / K.x, Ie = S.y / K.y, Mt = n ? Math.max(xe, Ie) : Math.min(xe, Ie);
        return l = this.getScaleZoom(Mt, l), oe && (l = Math.round(l / (oe / 100)) * (oe / 100), l = n ? Math.ceil(l / oe) * oe : Math.floor(l / oe) * oe), Math.max(d, Math.min(u, l));
      },
      // @method getSize(): Point
      // Returns the current size of the map container (in pixels).
      getSize: function() {
        return (!this._size || this._sizeChanged) && (this._size = new E(
          this._container.clientWidth || 0,
          this._container.clientHeight || 0
        ), this._sizeChanged = !1), this._size.clone();
      },
      // @method getPixelBounds(): Bounds
      // Returns the bounds of the current map view in projected pixel
      // coordinates (sometimes useful in layer and overlay implementations).
      getPixelBounds: function(e, n) {
        var r = this._getTopLeftPoint(e, n);
        return new Z(r, r.add(this.getSize()));
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
      getZoomScale: function(e, n) {
        var r = this.options.crs;
        return n = n === void 0 ? this._zoom : n, r.scale(e) / r.scale(n);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(e, n) {
        var r = this.options.crs;
        n = n === void 0 ? this._zoom : n;
        var l = r.zoom(e * r.scale(n));
        return isNaN(l) ? 1 / 0 : l;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(e, n) {
        return n = n === void 0 ? this._zoom : n, this.options.crs.latLngToPoint(Y(e), n);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(e, n) {
        return n = n === void 0 ? this._zoom : n, this.options.crs.pointToLatLng(x(e), n);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(e) {
        var n = x(e).add(this.getPixelOrigin());
        return this.unproject(n);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(e) {
        var n = this.project(Y(e))._round();
        return n._subtract(this.getPixelOrigin());
      },
      // @method wrapLatLng(latlng: LatLng): LatLng
      // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
      // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
      // CRS's bounds.
      // By default this means longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees.
      wrapLatLng: function(e) {
        return this.options.crs.wrapLatLng(Y(e));
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring that
      // its center is within the CRS's bounds.
      // By default this means the center longitude is wrapped around the dateline so its
      // value is between -180 and +180 degrees, and the majority of the bounds
      // overlaps the CRS's bounds.
      wrapLatLngBounds: function(e) {
        return this.options.crs.wrapLatLngBounds(q(e));
      },
      // @method distance(latlng1: LatLng, latlng2: LatLng): Number
      // Returns the distance between two geographical coordinates according to
      // the map's CRS. By default this measures distance in meters.
      distance: function(e, n) {
        return this.options.crs.distance(Y(e), Y(n));
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
        var n = this.containerPointToLayerPoint(x(e));
        return this.layerPointToLatLng(n);
      },
      // @method latLngToContainerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the map container.
      latLngToContainerPoint: function(e) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(e)));
      },
      // @method mouseEventToContainerPoint(ev: MouseEvent): Point
      // Given a MouseEvent object, returns the pixel coordinate relative to the
      // map container where the event took place.
      mouseEventToContainerPoint: function(e) {
        return no(e, this._container);
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
        var n = this._container = Qr(e);
        if (n) {
          if (n._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        je(n, "scroll", this._onScroll, this), this._containerId = f(n);
      },
      _initLayout: function() {
        var e = this._container;
        this._fadeAnimated = this.options.fadeAnimation && ue.any3d, Pe(e, "leaflet-container" + (ue.touch ? " leaflet-touch" : "") + (ue.retina ? " leaflet-retina" : "") + (ue.ielt9 ? " leaflet-oldie" : "") + (ue.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var n = un(e, "position");
        n !== "absolute" && n !== "relative" && n !== "fixed" && n !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var e = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ft(this._mapPane, new E(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Pe(e.markerPane, "leaflet-zoom-hide"), Pe(e.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(e, n, r) {
        ft(this._mapPane, new E(0, 0));
        var l = !this._loaded;
        this._loaded = !0, n = this._limitZoom(n), this.fire("viewprereset");
        var d = this._zoom !== n;
        this._moveStart(d, r)._move(e, n)._moveEnd(d), this.fire("viewreset"), l && this.fire("load");
      },
      _moveStart: function(e, n) {
        return e && this.fire("zoomstart"), n || this.fire("movestart"), this;
      },
      _move: function(e, n, r, l) {
        n === void 0 && (n = this._zoom);
        var d = this._zoom !== n;
        return this._zoom = n, this._lastCenter = e, this._pixelOrigin = this._getNewPixelOrigin(e), l ? r && r.pinch && this.fire("zoom", r) : ((d || r && r.pinch) && this.fire("zoom", r), this.fire("move", r)), this;
      },
      _moveEnd: function(e) {
        return e && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Q(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(e) {
        ft(this._mapPane, this._getMapPanePos().subtract(e));
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
        this._targets = {}, this._targets[f(this._container)] = this;
        var n = e ? Qe : je;
        n(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && n(window, "resize", this._onResize, this), ue.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function() {
        Q(this._resizeRequest), this._resizeRequest = F(
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
      _findEventTargets: function(e, n) {
        for (var r = [], l, d = n === "mouseout" || n === "mouseover", u = e.target || e.srcElement, y = !1; u; ) {
          if (l = this._targets[f(u)], l && (n === "click" || n === "preclick") && this._draggableMoved(l)) {
            y = !0;
            break;
          }
          if (l && l.listens(n, !0) && (d && !Da(u, e) || (r.push(l), d)) || u === this._container)
            break;
          u = u.parentNode;
        }
        return !r.length && !y && !d && this.listens(n, !0) && (r = [this]), r;
      },
      _isClickDisabled: function(e) {
        for (; e && e !== this._container; ) {
          if (e._leaflet_disable_click)
            return !0;
          e = e.parentNode;
        }
      },
      _handleDOMEvent: function(e) {
        var n = e.target || e.srcElement;
        if (!(!this._loaded || n._leaflet_disable_events || e.type === "click" && this._isClickDisabled(n))) {
          var r = e.type;
          r === "mousedown" && Aa(n), this._fireDOMEvent(e, r);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(e, n, r) {
        if (e.type === "click") {
          var l = c({}, e);
          l.type = "preclick", this._fireDOMEvent(l, l.type, r);
        }
        var d = this._findEventTargets(e, n);
        if (r) {
          for (var u = [], y = 0; y < r.length; y++)
            r[y].listens(n, !0) && u.push(r[y]);
          d = u.concat(d);
        }
        if (d.length) {
          n === "contextmenu" && Pt(e);
          var k = d[0], S = {
            originalEvent: e
          };
          if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
            var K = k.getLatLng && (!k._radius || k._radius <= 10);
            S.containerPoint = K ? this.latLngToContainerPoint(k.getLatLng()) : this.mouseEventToContainerPoint(e), S.layerPoint = this.containerPointToLayerPoint(S.containerPoint), S.latlng = K ? k.getLatLng() : this.layerPointToLatLng(S.layerPoint);
          }
          for (y = 0; y < d.length; y++)
            if (d[y].fire(n, S, !0), S.originalEvent._stopped || d[y].options.bubblingMouseEvents === !1 && U(this._mouseEvents, n) !== -1)
              return;
        }
      },
      _draggableMoved: function(e) {
        return e = e.dragging && e.dragging.enabled() ? e : this, e.dragging && e.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var e = 0, n = this._handlers.length; e < n; e++)
          this._handlers[e].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(e, n) {
        return this._loaded ? e.call(n || this, { target: this }) : this.on("load", e, n), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return Wi(this._mapPane) || new E(0, 0);
      },
      _moved: function() {
        var e = this._getMapPanePos();
        return e && !e.equals([0, 0]);
      },
      _getTopLeftPoint: function(e, n) {
        var r = e && n !== void 0 ? this._getNewPixelOrigin(e, n) : this.getPixelOrigin();
        return r.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(e, n) {
        var r = this.getSize()._divideBy(2);
        return this.project(e, n)._subtract(r)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(e, n, r) {
        var l = this._getNewPixelOrigin(r, n);
        return this.project(e, n)._subtract(l);
      },
      _latLngBoundsToNewLayerBounds: function(e, n, r) {
        var l = this._getNewPixelOrigin(r, n);
        return z([
          this.project(e.getSouthWest(), n)._subtract(l),
          this.project(e.getNorthWest(), n)._subtract(l),
          this.project(e.getSouthEast(), n)._subtract(l),
          this.project(e.getNorthEast(), n)._subtract(l)
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
      _limitCenter: function(e, n, r) {
        if (!r)
          return e;
        var l = this.project(e, n), d = this.getSize().divideBy(2), u = new Z(l.subtract(d), l.add(d)), y = this._getBoundsOffset(u, r, n);
        return Math.abs(y.x) <= 1 && Math.abs(y.y) <= 1 ? e : this.unproject(l.add(y), n);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(e, n) {
        if (!n)
          return e;
        var r = this.getPixelBounds(), l = new Z(r.min.add(e), r.max.add(e));
        return e.add(this._getBoundsOffset(l, n));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(e, n, r) {
        var l = z(
          this.project(n.getNorthEast(), r),
          this.project(n.getSouthWest(), r)
        ), d = l.min.subtract(e.min), u = l.max.subtract(e.max), y = this._rebound(d.x, -u.x), k = this._rebound(d.y, -u.y);
        return new E(y, k);
      },
      _rebound: function(e, n) {
        return e + n > 0 ? Math.round(e - n) / 2 : Math.max(0, Math.ceil(e)) - Math.max(0, Math.floor(n));
      },
      _limitZoom: function(e) {
        var n = this.getMinZoom(), r = this.getMaxZoom(), l = ue.any3d ? this.options.zoomSnap : 1;
        return l && (e = Math.round(e / l) * l), Math.max(n, Math.min(r, e));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        pt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(e, n) {
        var r = this._getCenterOffset(e)._trunc();
        return (n && n.animate) !== !0 && !this.getSize().contains(r) ? !1 : (this.panBy(r, n), !0);
      },
      _createAnimProxy: function() {
        var e = this._proxy = We("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(e), this.on("zoomanim", function(n) {
          var r = ja, l = this._proxy.style[r];
          $i(this._proxy, this.project(n.center, n.zoom), this.getZoomScale(n.zoom, 1)), l === this._proxy.style[r] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        lt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var e = this.getCenter(), n = this.getZoom();
        $i(this._proxy, this.project(e, n), this.getZoomScale(n, 1));
      },
      _catchTransitionEnd: function(e) {
        this._animatingZoom && e.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(e, n, r) {
        if (this._animatingZoom)
          return !0;
        if (r = r || {}, !this._zoomAnimated || r.animate === !1 || this._nothingToAnimate() || Math.abs(n - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var l = this.getZoomScale(n), d = this._getCenterOffset(e)._divideBy(1 - 1 / l);
        return r.animate !== !0 && !this.getSize().contains(d) ? !1 : (F(function() {
          this._moveStart(!0, r.noMoveStart || !1)._animateZoom(e, n, !0);
        }, this), !0);
      },
      _animateZoom: function(e, n, r, l) {
        this._mapPane && (r && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = n, Pe(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: e,
          zoom: n,
          noUpdate: l
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(m(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && pt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function ac(e, n) {
      return new De(e, n);
    }
    var ai = ge.extend({
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
        var n = this._map;
        return n && n.removeControl(this), this.options.position = e, n && n.addControl(this), this;
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
        var n = this._container = this.onAdd(e), r = this.getPosition(), l = e._controlCorners[r];
        return Pe(n, "leaflet-control"), r.indexOf("bottom") !== -1 ? l.insertBefore(n, l.firstChild) : l.appendChild(n), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (lt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(e) {
        this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
      }
    }), gn = function(e) {
      return new ai(e);
    };
    De.include({
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
        var e = this._controlCorners = {}, n = "leaflet-", r = this._controlContainer = We("div", n + "control-container", this._container);
        function l(d, u) {
          var y = n + d + " " + n + u;
          e[d + u] = We("div", y, r);
        }
        l("top", "left"), l("top", "right"), l("bottom", "left"), l("bottom", "right");
      },
      _clearControlPos: function() {
        for (var e in this._controlCorners)
          lt(this._controlCorners[e]);
        lt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var oo = ai.extend({
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
        sortFunction: function(e, n, r, l) {
          return r < l ? -1 : l < r ? 1 : 0;
        }
      },
      initialize: function(e, n, r) {
        j(this, r), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var l in e)
          this._addLayer(e[l], l);
        for (l in n)
          this._addLayer(n[l], l, !0);
      },
      onAdd: function(e) {
        this._initLayout(), this._update(), this._map = e, e.on("zoomend", this._checkDisabledLayers, this);
        for (var n = 0; n < this._layers.length; n++)
          this._layers[n].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(e) {
        return ai.prototype.addTo.call(this, e), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(e, n) {
        return this._addLayer(e, n), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(e, n) {
        return this._addLayer(e, n, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(e) {
        e.off("add remove", this._onLayerChange, this);
        var n = this._getLayer(f(e));
        return n && this._layers.splice(this._layers.indexOf(n), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        Pe(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var e = this._map.getSize().y - (this._container.offsetTop + 50);
        return e < this._section.clientHeight ? (Pe(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : pt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return pt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var e = "leaflet-control-layers", n = this._container = We("div", e), r = this.options.collapsed;
        n.setAttribute("aria-haspopup", !0), fn(n), Fa(n);
        var l = this._section = We("section", e + "-list");
        r && (this._map.on("click", this.collapse, this), je(n, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = We("a", e + "-toggle", n);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), je(d, {
          keydown: function(u) {
            u.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(u) {
            Pt(u), this._expandSafely();
          }
        }, this), r || this.expand(), this._baseLayersList = We("div", e + "-base", l), this._separator = We("div", e + "-separator", l), this._overlaysList = We("div", e + "-overlays", l), n.appendChild(l);
      },
      _getLayer: function(e) {
        for (var n = 0; n < this._layers.length; n++)
          if (this._layers[n] && f(this._layers[n].layer) === e)
            return this._layers[n];
      },
      _addLayer: function(e, n, r) {
        this._map && e.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: e,
          name: n,
          overlay: r
        }), this.options.sortLayers && this._layers.sort(m(function(l, d) {
          return this.options.sortFunction(l.layer, d.layer, l.name, d.name);
        }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        Dn(this._baseLayersList), Dn(this._overlaysList), this._layerControlInputs = [];
        var e, n, r, l, d = 0;
        for (r = 0; r < this._layers.length; r++)
          l = this._layers[r], this._addItem(l), n = n || l.overlay, e = e || !l.overlay, d += l.overlay ? 0 : 1;
        return this.options.hideSingleBase && (e = e && d > 1, this._baseLayersList.style.display = e ? "" : "none"), this._separator.style.display = n && e ? "" : "none", this;
      },
      _onLayerChange: function(e) {
        this._handlingClick || this._update();
        var n = this._getLayer(f(e.target)), r = n.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
        r && this._map.fire(r, n);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(e, n) {
        var r = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"' + (n ? ' checked="checked"' : "") + "/>", l = document.createElement("div");
        return l.innerHTML = r, l.firstChild;
      },
      _addItem: function(e) {
        var n = document.createElement("label"), r = this._map.hasLayer(e.layer), l;
        e.overlay ? (l = document.createElement("input"), l.type = "checkbox", l.className = "leaflet-control-layers-selector", l.defaultChecked = r) : l = this._createRadioElement("leaflet-base-layers_" + f(this), r), this._layerControlInputs.push(l), l.layerId = f(e.layer), je(l, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + e.name;
        var u = document.createElement("span");
        n.appendChild(u), u.appendChild(l), u.appendChild(d);
        var y = e.overlay ? this._overlaysList : this._baseLayersList;
        return y.appendChild(n), this._checkDisabledLayers(), n;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var e = this._layerControlInputs, n, r, l = [], d = [];
          this._handlingClick = !0;
          for (var u = e.length - 1; u >= 0; u--)
            n = e[u], r = this._getLayer(n.layerId).layer, n.checked ? l.push(r) : n.checked || d.push(r);
          for (u = 0; u < d.length; u++)
            this._map.hasLayer(d[u]) && this._map.removeLayer(d[u]);
          for (u = 0; u < l.length; u++)
            this._map.hasLayer(l[u]) || this._map.addLayer(l[u]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var e = this._layerControlInputs, n, r, l = this._map.getZoom(), d = e.length - 1; d >= 0; d--)
          n = e[d], r = this._getLayer(n.layerId).layer, n.disabled = r.options.minZoom !== void 0 && l < r.options.minZoom || r.options.maxZoom !== void 0 && l > r.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var e = this._section;
        this._preventClick = !0, je(e, "click", Pt), this.expand();
        var n = this;
        setTimeout(function() {
          Qe(e, "click", Pt), n._preventClick = !1;
        });
      }
    }), rc = function(e, n, r) {
      return new oo(e, n, r);
    }, $a = ai.extend({
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
        var n = "leaflet-control-zoom", r = We("div", n + " leaflet-bar"), l = this.options;
        return this._zoomInButton = this._createButton(
          l.zoomInText,
          l.zoomInTitle,
          n + "-in",
          r,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          l.zoomOutText,
          l.zoomOutTitle,
          n + "-out",
          r,
          this._zoomOut
        ), this._updateDisabled(), e.on("zoomend zoomlevelschange", this._updateDisabled, this), r;
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
      _createButton: function(e, n, r, l, d) {
        var u = We("a", r, l);
        return u.innerHTML = e, u.href = "#", u.title = n, u.setAttribute("role", "button"), u.setAttribute("aria-label", n), fn(u), je(u, "click", Zi), je(u, "click", d, this), je(u, "click", this._refocusOnMap, this), u;
      },
      _updateDisabled: function() {
        var e = this._map, n = "leaflet-disabled";
        pt(this._zoomInButton, n), pt(this._zoomOutButton, n), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Pe(this._zoomOutButton, n), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Pe(this._zoomInButton, n), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    De.mergeOptions({
      zoomControl: !0
    }), De.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new $a(), this.addControl(this.zoomControl));
    });
    var oc = function(e) {
      return new $a(e);
    }, so = ai.extend({
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
        var n = "leaflet-control-scale", r = We("div", n), l = this.options;
        return this._addScales(l, n + "-line", r), e.on(l.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), r;
      },
      onRemove: function(e) {
        e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(e, n, r) {
        e.metric && (this._mScale = We("div", n, r)), e.imperial && (this._iScale = We("div", n, r));
      },
      _update: function() {
        var e = this._map, n = e.getSize().y / 2, r = e.distance(
          e.containerPointToLatLng([0, n]),
          e.containerPointToLatLng([this.options.maxWidth, n])
        );
        this._updateScales(r);
      },
      _updateScales: function(e) {
        this.options.metric && e && this._updateMetric(e), this.options.imperial && e && this._updateImperial(e);
      },
      _updateMetric: function(e) {
        var n = this._getRoundNum(e), r = n < 1e3 ? n + " m" : n / 1e3 + " km";
        this._updateScale(this._mScale, r, n / e);
      },
      _updateImperial: function(e) {
        var n = e * 3.2808399, r, l, d;
        n > 5280 ? (r = n / 5280, l = this._getRoundNum(r), this._updateScale(this._iScale, l + " mi", l / r)) : (d = this._getRoundNum(n), this._updateScale(this._iScale, d + " ft", d / n));
      },
      _updateScale: function(e, n, r) {
        e.style.width = Math.round(this.options.maxWidth * r) + "px", e.innerHTML = n;
      },
      _getRoundNum: function(e) {
        var n = Math.pow(10, (Math.floor(e) + "").length - 1), r = e / n;
        return r = r >= 10 ? 10 : r >= 5 ? 5 : r >= 3 ? 3 : r >= 2 ? 2 : 1, n * r;
      }
    }), sc = function(e) {
      return new so(e);
    }, lc = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Wa = ai.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (ue.inlineSvg ? lc + " " : "") + "Leaflet</a>"
      },
      initialize: function(e) {
        j(this, e), this._attributions = {};
      },
      onAdd: function(e) {
        e.attributionControl = this, this._container = We("div", "leaflet-control-attribution"), fn(this._container);
        for (var n in e._layers)
          e._layers[n].getAttribution && this.addAttribution(e._layers[n].getAttribution());
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
          for (var n in this._attributions)
            this._attributions[n] && e.push(n);
          var r = [];
          this.options.prefix && r.push(this.options.prefix), e.length && r.push(e.join(", ")), this._container.innerHTML = r.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    De.mergeOptions({
      attributionControl: !0
    }), De.addInitHook(function() {
      this.options.attributionControl && new Wa().addTo(this);
    });
    var cc = function(e) {
      return new Wa(e);
    };
    ai.Layers = oo, ai.Zoom = $a, ai.Scale = so, ai.Attribution = Wa, gn.layers = rc, gn.zoom = oc, gn.scale = sc, gn.attribution = cc;
    var _i = ge.extend({
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
    _i.addTo = function(e, n) {
      return e.addHandler(n, this), this;
    };
    var dc = { Events: ne }, lo = ue.touch ? "touchstart mousedown" : "mousedown", Pi = ce.extend({
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
      initialize: function(e, n, r, l) {
        j(this, l), this._element = e, this._dragStartTarget = n || e, this._preventOutline = r;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (je(this._dragStartTarget, lo, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (Pi._dragging === this && this.finishDrag(!0), Qe(this._dragStartTarget, lo, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(e) {
        if (this._enabled && (this._moved = !1, !Na(this._element, "leaflet-zoom-anim"))) {
          if (e.touches && e.touches.length !== 1) {
            Pi._dragging === this && this.finishDrag();
            return;
          }
          if (!(Pi._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (Pi._dragging = this, this._preventOutline && Aa(this._element), Ea(), mn(), !this._moving)) {
            this.fire("down");
            var n = e.touches ? e.touches[0] : e, r = eo(this._element);
            this._startPoint = new E(n.clientX, n.clientY), this._startPos = Wi(this._element), this._parentScale = Ma(r);
            var l = e.type === "mousedown";
            je(document, l ? "mousemove" : "touchmove", this._onMove, this), je(document, l ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(e) {
        if (this._enabled) {
          if (e.touches && e.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var n = e.touches && e.touches.length === 1 ? e.touches[0] : e, r = new E(n.clientX, n.clientY)._subtract(this._startPoint);
          !r.x && !r.y || Math.abs(r.x) + Math.abs(r.y) < this.options.clickTolerance || (r.x /= this._parentScale.x, r.y /= this._parentScale.y, Pt(e), this._moved || (this.fire("dragstart"), this._moved = !0, Pe(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Pe(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(r), this._moving = !0, this._lastEvent = e, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var e = { originalEvent: this._lastEvent };
        this.fire("predrag", e), ft(this._element, this._newPos), this.fire("drag", e);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(e) {
        pt(document.body, "leaflet-dragging"), this._lastTarget && (pt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Qe(document, "mousemove touchmove", this._onMove, this), Qe(document, "mouseup touchend touchcancel", this._onUp, this), Ia(), pn();
        var n = this._moved && this._moving;
        this._moving = !1, Pi._dragging = !1, n && this.fire("dragend", {
          noInertia: e,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function co(e, n, r) {
      var l, d = [1, 4, 2, 8], u, y, k, S, K, oe, xe, Ie;
      for (u = 0, oe = e.length; u < oe; u++)
        e[u]._code = Hi(e[u], n);
      for (k = 0; k < 4; k++) {
        for (xe = d[k], l = [], u = 0, oe = e.length, y = oe - 1; u < oe; y = u++)
          S = e[u], K = e[y], S._code & xe ? K._code & xe || (Ie = Hn(K, S, xe, n, r), Ie._code = Hi(Ie, n), l.push(Ie)) : (K._code & xe && (Ie = Hn(K, S, xe, n, r), Ie._code = Hi(Ie, n), l.push(Ie)), l.push(S));
        e = l;
      }
      return e;
    }
    function _o(e, n) {
      var r, l, d, u, y, k, S, K, oe;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      ei(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var xe = Y([0, 0]), Ie = q(e), Mt = Ie.getNorthWest().distanceTo(Ie.getSouthWest()) * Ie.getNorthEast().distanceTo(Ie.getNorthWest());
      Mt < 1700 && (xe = Ua(e));
      var wt = e.length, ti = [];
      for (r = 0; r < wt; r++) {
        var Ft = Y(e[r]);
        ti.push(n.project(Y([Ft.lat - xe.lat, Ft.lng - xe.lng])));
      }
      for (k = S = K = 0, r = 0, l = wt - 1; r < wt; l = r++)
        d = ti[r], u = ti[l], y = d.y * u.x - u.y * d.x, S += (d.x + u.x) * y, K += (d.y + u.y) * y, k += y * 3;
      k === 0 ? oe = ti[0] : oe = [S / k, K / k];
      var ln = n.unproject(x(oe));
      return Y([ln.lat + xe.lat, ln.lng + xe.lng]);
    }
    function Ua(e) {
      for (var n = 0, r = 0, l = 0, d = 0; d < e.length; d++) {
        var u = Y(e[d]);
        n += u.lat, r += u.lng, l++;
      }
      return Y([n / l, r / l]);
    }
    var _c = {
      __proto__: null,
      clipPolygon: co,
      polygonCenter: _o,
      centroid: Ua
    };
    function uo(e, n) {
      if (!n || !e.length)
        return e.slice();
      var r = n * n;
      return e = pc(e, r), e = mc(e, r), e;
    }
    function mo(e, n, r) {
      return Math.sqrt(yn(e, n, r, !0));
    }
    function uc(e, n, r) {
      return yn(e, n, r);
    }
    function mc(e, n) {
      var r = e.length, l = typeof Uint8Array < "u" ? Uint8Array : Array, d = new l(r);
      d[0] = d[r - 1] = 1, Za(e, d, n, 0, r - 1);
      var u, y = [];
      for (u = 0; u < r; u++)
        d[u] && y.push(e[u]);
      return y;
    }
    function Za(e, n, r, l, d) {
      var u = 0, y, k, S;
      for (k = l + 1; k <= d - 1; k++)
        S = yn(e[k], e[l], e[d], !0), S > u && (y = k, u = S);
      u > r && (n[y] = 1, Za(e, n, r, l, y), Za(e, n, r, y, d));
    }
    function pc(e, n) {
      for (var r = [e[0]], l = 1, d = 0, u = e.length; l < u; l++)
        hc(e[l], e[d]) > n && (r.push(e[l]), d = l);
      return d < u - 1 && r.push(e[u - 1]), r;
    }
    var po;
    function ho(e, n, r, l, d) {
      var u = l ? po : Hi(e, r), y = Hi(n, r), k, S, K;
      for (po = y; ; ) {
        if (!(u | y))
          return [e, n];
        if (u & y)
          return !1;
        k = u || y, S = Hn(e, n, k, r, d), K = Hi(S, r), k === u ? (e = S, u = K) : (n = S, y = K);
      }
    }
    function Hn(e, n, r, l, d) {
      var u = n.x - e.x, y = n.y - e.y, k = l.min, S = l.max, K, oe;
      return r & 8 ? (K = e.x + u * (S.y - e.y) / y, oe = S.y) : r & 4 ? (K = e.x + u * (k.y - e.y) / y, oe = k.y) : r & 2 ? (K = S.x, oe = e.y + y * (S.x - e.x) / u) : r & 1 && (K = k.x, oe = e.y + y * (k.x - e.x) / u), new E(K, oe, d);
    }
    function Hi(e, n) {
      var r = 0;
      return e.x < n.min.x ? r |= 1 : e.x > n.max.x && (r |= 2), e.y < n.min.y ? r |= 4 : e.y > n.max.y && (r |= 8), r;
    }
    function hc(e, n) {
      var r = n.x - e.x, l = n.y - e.y;
      return r * r + l * l;
    }
    function yn(e, n, r, l) {
      var d = n.x, u = n.y, y = r.x - d, k = r.y - u, S = y * y + k * k, K;
      return S > 0 && (K = ((e.x - d) * y + (e.y - u) * k) / S, K > 1 ? (d = r.x, u = r.y) : K > 0 && (d += y * K, u += k * K)), y = e.x - d, k = e.y - u, l ? y * y + k * k : new E(d, u);
    }
    function ei(e) {
      return !W(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
    }
    function fo(e) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ei(e);
    }
    function go(e, n) {
      var r, l, d, u, y, k, S, K;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      ei(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var oe = Y([0, 0]), xe = q(e), Ie = xe.getNorthWest().distanceTo(xe.getSouthWest()) * xe.getNorthEast().distanceTo(xe.getNorthWest());
      Ie < 1700 && (oe = Ua(e));
      var Mt = e.length, wt = [];
      for (r = 0; r < Mt; r++) {
        var ti = Y(e[r]);
        wt.push(n.project(Y([ti.lat - oe.lat, ti.lng - oe.lng])));
      }
      for (r = 0, l = 0; r < Mt - 1; r++)
        l += wt[r].distanceTo(wt[r + 1]) / 2;
      if (l === 0)
        K = wt[0];
      else
        for (r = 0, u = 0; r < Mt - 1; r++)
          if (y = wt[r], k = wt[r + 1], d = y.distanceTo(k), u += d, u > l) {
            S = (u - l) / d, K = [
              k.x - S * (k.x - y.x),
              k.y - S * (k.y - y.y)
            ];
            break;
          }
      var Ft = n.unproject(x(K));
      return Y([Ft.lat + oe.lat, Ft.lng + oe.lng]);
    }
    var fc = {
      __proto__: null,
      simplify: uo,
      pointToSegmentDistance: mo,
      closestPointOnSegment: uc,
      clipSegment: ho,
      _getEdgeIntersection: Hn,
      _getBitCode: Hi,
      _sqClosestPointOnSegment: yn,
      isFlat: ei,
      _flat: fo,
      polylineCenter: go
    }, Ha = {
      project: function(e) {
        return new E(e.lng, e.lat);
      },
      unproject: function(e) {
        return new ee(e.y, e.x);
      },
      bounds: new Z([-180, -90], [180, 90])
    }, Va = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new Z([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(e) {
        var n = Math.PI / 180, r = this.R, l = e.lat * n, d = this.R_MINOR / r, u = Math.sqrt(1 - d * d), y = u * Math.sin(l), k = Math.tan(Math.PI / 4 - l / 2) / Math.pow((1 - y) / (1 + y), u / 2);
        return l = -r * Math.log(Math.max(k, 1e-10)), new E(e.lng * n * r, l);
      },
      unproject: function(e) {
        for (var n = 180 / Math.PI, r = this.R, l = this.R_MINOR / r, d = Math.sqrt(1 - l * l), u = Math.exp(-e.y / r), y = Math.PI / 2 - 2 * Math.atan(u), k = 0, S = 0.1, K; k < 15 && Math.abs(S) > 1e-7; k++)
          K = d * Math.sin(y), K = Math.pow((1 - K) / (1 + K), d / 2), S = Math.PI / 2 - 2 * Math.atan(u * K) - y, y += S;
        return new ee(y * n, e.x * n / r);
      }
    }, gc = {
      __proto__: null,
      LonLat: Ha,
      Mercator: Va,
      SphericalMercator: Ee
    }, yc = c({}, de, {
      code: "EPSG:3395",
      projection: Va,
      transformation: function() {
        var e = 0.5 / (Math.PI * Va.R);
        return pe(e, 0.5, -e, 0.5);
      }()
    }), yo = c({}, de, {
      code: "EPSG:4326",
      projection: Ha,
      transformation: pe(1 / 180, 1, -1 / 180, 0.5)
    }), bc = c({}, me, {
      projection: Ha,
      transformation: pe(1, 0, -1, 0),
      scale: function(e) {
        return Math.pow(2, e);
      },
      zoom: function(e) {
        return Math.log(e) / Math.LN2;
      },
      distance: function(e, n) {
        var r = n.lng - e.lng, l = n.lat - e.lat;
        return Math.sqrt(r * r + l * l);
      },
      infinite: !0
    });
    me.Earth = de, me.EPSG3395 = yc, me.EPSG3857 = we, me.EPSG900913 = re, me.EPSG4326 = yo, me.Simple = bc;
    var ri = ce.extend({
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
        return this._map._targets[f(e)] = this, this;
      },
      removeInteractiveTarget: function(e) {
        return delete this._map._targets[f(e)], this;
      },
      // @method getAttribution: String
      // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
      getAttribution: function() {
        return this.options.attribution;
      },
      _layerAdd: function(e) {
        var n = e.target;
        if (n.hasLayer(this)) {
          if (this._map = n, this._zoomAnimated = n._zoomAnimated, this.getEvents) {
            var r = this.getEvents();
            n.on(r, this), this.once("remove", function() {
              n.off(r, this);
            }, this);
          }
          this.onAdd(n), this.fire("add"), n.fire("layeradd", { layer: this });
        }
      }
    });
    De.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(e) {
        if (!e._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var n = f(e);
        return this._layers[n] ? this : (this._layers[n] = e, e._mapToAdd = this, e.beforeAdd && e.beforeAdd(this), this.whenReady(e._layerAdd, e), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(e) {
        var n = f(e);
        return this._layers[n] ? (this._loaded && e.onRemove(this), delete this._layers[n], this._loaded && (this.fire("layerremove", { layer: e }), e.fire("remove")), e._map = e._mapToAdd = null, this) : this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the map
      hasLayer: function(e) {
        return f(e) in this._layers;
      },
      /* @method eachLayer(fn: Function, context?: Object): this
       * Iterates over the layers of the map, optionally specifying context of the iterator function.
       * ```
       * map.eachLayer(function(layer){
       *     layer.bindPopup('Hello');
       * });
       * ```
       */
      eachLayer: function(e, n) {
        for (var r in this._layers)
          e.call(n, this._layers[r]);
        return this;
      },
      _addLayers: function(e) {
        e = e ? W(e) ? e : [e] : [];
        for (var n = 0, r = e.length; n < r; n++)
          this.addLayer(e[n]);
      },
      _addZoomLimit: function(e) {
        (!isNaN(e.options.maxZoom) || !isNaN(e.options.minZoom)) && (this._zoomBoundLayers[f(e)] = e, this._updateZoomLevels());
      },
      _removeZoomLimit: function(e) {
        var n = f(e);
        this._zoomBoundLayers[n] && (delete this._zoomBoundLayers[n], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var e = 1 / 0, n = -1 / 0, r = this._getZoomSpan();
        for (var l in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[l].options;
          e = d.minZoom === void 0 ? e : Math.min(e, d.minZoom), n = d.maxZoom === void 0 ? n : Math.max(n, d.maxZoom);
        }
        this._layersMaxZoom = n === -1 / 0 ? void 0 : n, this._layersMinZoom = e === 1 / 0 ? void 0 : e, r !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var nn = ri.extend({
      initialize: function(e, n) {
        j(this, n), this._layers = {};
        var r, l;
        if (e)
          for (r = 0, l = e.length; r < l; r++)
            this.addLayer(e[r]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(e) {
        var n = this.getLayerId(e);
        return this._layers[n] = e, this._map && this._map.addLayer(e), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(e) {
        var n = e in this._layers ? e : this.getLayerId(e);
        return this._map && this._layers[n] && this._map.removeLayer(this._layers[n]), delete this._layers[n], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(e) {
        var n = typeof e == "number" ? e : this.getLayerId(e);
        return n in this._layers;
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
        var n = Array.prototype.slice.call(arguments, 1), r, l;
        for (r in this._layers)
          l = this._layers[r], l[e] && l[e].apply(l, n);
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
      eachLayer: function(e, n) {
        for (var r in this._layers)
          e.call(n, this._layers[r]);
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
        return f(e);
      }
    }), vc = function(e, n) {
      return new nn(e, n);
    }, gi = nn.extend({
      addLayer: function(e) {
        return this.hasLayer(e) ? this : (e.addEventParent(this), nn.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
      },
      removeLayer: function(e) {
        return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), nn.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
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
        for (var n in this._layers) {
          var r = this._layers[n];
          e.extend(r.getBounds ? r.getBounds() : r.getLatLng());
        }
        return e;
      }
    }), xc = function(e, n) {
      return new gi(e, n);
    }, an = ge.extend({
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
      _createIcon: function(e, n) {
        var r = this._getIconUrl(e);
        if (!r) {
          if (e === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var l = this._createImg(r, n && n.tagName === "IMG" ? n : null);
        return this._setIconStyles(l, e), (this.options.crossOrigin || this.options.crossOrigin === "") && (l.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), l;
      },
      _setIconStyles: function(e, n) {
        var r = this.options, l = r[n + "Size"];
        typeof l == "number" && (l = [l, l]);
        var d = x(l), u = x(n === "shadow" && r.shadowAnchor || r.iconAnchor || d && d.divideBy(2, !0));
        e.className = "leaflet-marker-" + n + " " + (r.className || ""), u && (e.style.marginLeft = -u.x + "px", e.style.marginTop = -u.y + "px"), d && (e.style.width = d.x + "px", e.style.height = d.y + "px");
      },
      _createImg: function(e, n) {
        return n = n || document.createElement("img"), n.src = e, n;
      },
      _getIconUrl: function(e) {
        return ue.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
      }
    });
    function wc(e) {
      return new an(e);
    }
    var bn = an.extend({
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
        return typeof bn.imagePath != "string" && (bn.imagePath = this._detectIconPath()), (this.options.imagePath || bn.imagePath) + an.prototype._getIconUrl.call(this, e);
      },
      _stripUrl: function(e) {
        var n = function(r, l, d) {
          var u = l.exec(r);
          return u && u[d];
        };
        return e = n(e, /^url\((['"])?(.+)\1\)$/, 2), e && n(e, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var e = We("div", "leaflet-default-icon-path", document.body), n = un(e, "background-image") || un(e, "backgroundImage");
        if (document.body.removeChild(e), n = this._stripUrl(n), n)
          return n;
        var r = document.querySelector('link[href$="leaflet.css"]');
        return r ? r.href.substring(0, r.href.length - 11 - 1) : "";
      }
    }), bo = _i.extend({
      initialize: function(e) {
        this._marker = e;
      },
      addHooks: function() {
        var e = this._marker._icon;
        this._draggable || (this._draggable = new Pi(e, e, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), Pe(e, "leaflet-marker-draggable");
      },
      removeHooks: function() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && pt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(e) {
        var n = this._marker, r = n._map, l = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, u = Wi(n._icon), y = r.getPixelBounds(), k = r.getPixelOrigin(), S = z(
          y.min._subtract(k).add(d),
          y.max._subtract(k).subtract(d)
        );
        if (!S.contains(u)) {
          var K = x(
            (Math.max(S.max.x, u.x) - S.max.x) / (y.max.x - S.max.x) - (Math.min(S.min.x, u.x) - S.min.x) / (y.min.x - S.min.x),
            (Math.max(S.max.y, u.y) - S.max.y) / (y.max.y - S.max.y) - (Math.min(S.min.y, u.y) - S.min.y) / (y.min.y - S.min.y)
          ).multiplyBy(l);
          r.panBy(K, { animate: !1 }), this._draggable._newPos._add(K), this._draggable._startPos._add(K), ft(n._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = F(this._adjustPan.bind(this, e));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(e) {
        this._marker.options.autoPan && (Q(this._panRequest), this._panRequest = F(this._adjustPan.bind(this, e)));
      },
      _onDrag: function(e) {
        var n = this._marker, r = n._shadow, l = Wi(n._icon), d = n._map.layerPointToLatLng(l);
        r && ft(r, l), n._latlng = d, e.latlng = d, e.oldLatLng = this._oldLatLng, n.fire("move", e).fire("drag", e);
      },
      _onDragEnd: function(e) {
        Q(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
      }
    }), Vn = ri.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new bn(),
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
      initialize: function(e, n) {
        j(this, n), this._latlng = Y(e);
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
        var n = this._latlng;
        return this._latlng = Y(e), this.update(), this.fire("move", { oldLatLng: n, latlng: this._latlng });
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
        var e = this.options, n = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), r = e.icon.createIcon(this._icon), l = !1;
        r !== this._icon && (this._icon && this._removeIcon(), l = !0, e.title && (r.title = e.title), r.tagName === "IMG" && (r.alt = e.alt || "")), Pe(r, n), e.keyboard && (r.tabIndex = "0", r.setAttribute("role", "button")), this._icon = r, e.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && je(r, "focus", this._panOnFocus, this);
        var d = e.icon.createShadow(this._shadow), u = !1;
        d !== this._shadow && (this._removeShadow(), u = !0), d && (Pe(d, n), d.alt = ""), this._shadow = d, e.opacity < 1 && this._updateOpacity(), l && this.getPane().appendChild(this._icon), this._initInteraction(), d && u && this.getPane(e.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Qe(this._icon, "focus", this._panOnFocus, this), lt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function() {
        this._shadow && lt(this._shadow), this._shadow = null;
      },
      _setPos: function(e) {
        this._icon && ft(this._icon, e), this._shadow && ft(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(e) {
        this._icon && (this._icon.style.zIndex = this._zIndex + e);
      },
      _animateZoom: function(e) {
        var n = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
        this._setPos(n);
      },
      _initInteraction: function() {
        if (this.options.interactive && (Pe(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), bo)) {
          var e = this.options.draggable;
          this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new bo(this), e && this.dragging.enable();
        }
      },
      // @method setOpacity(opacity: Number): this
      // Changes the opacity of the marker.
      setOpacity: function(e) {
        return this.options.opacity = e, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function() {
        var e = this.options.opacity;
        this._icon && Qt(this._icon, e), this._shadow && Qt(this._shadow, e);
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
          var n = this.options.icon.options, r = n.iconSize ? x(n.iconSize) : x(0, 0), l = n.iconAnchor ? x(n.iconAnchor) : x(0, 0);
          e.panInside(this._latlng, {
            paddingTopLeft: l,
            paddingBottomRight: r.subtract(l)
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
    function kc(e, n) {
      return new Vn(e, n);
    }
    var Ei = ri.extend({
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
    }), Gn = Ei.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(e, n) {
        j(this, n), this._latlng = Y(e), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(e) {
        var n = this._latlng;
        return this._latlng = Y(e), this.redraw(), this.fire("move", { oldLatLng: n, latlng: this._latlng });
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
        var n = e && e.radius || this._radius;
        return Ei.prototype.setStyle.call(this, e), this.setRadius(n), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var e = this._radius, n = this._radiusY || e, r = this._clickTolerance(), l = [e + r, n + r];
        this._pxBounds = new Z(this._point.subtract(l), this._point.add(l));
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
    function Cc(e, n) {
      return new Gn(e, n);
    }
    var Ga = Gn.extend({
      initialize: function(e, n, r) {
        if (typeof n == "number" && (n = c({}, r, { radius: n })), j(this, n), this._latlng = Y(e), isNaN(this.options.radius))
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
      setStyle: Ei.prototype.setStyle,
      _project: function() {
        var e = this._latlng.lng, n = this._latlng.lat, r = this._map, l = r.options.crs;
        if (l.distance === de.distance) {
          var d = Math.PI / 180, u = this._mRadius / de.R / d, y = r.project([n + u, e]), k = r.project([n - u, e]), S = y.add(k).divideBy(2), K = r.unproject(S).lat, oe = Math.acos((Math.cos(u * d) - Math.sin(n * d) * Math.sin(K * d)) / (Math.cos(n * d) * Math.cos(K * d))) / d;
          (isNaN(oe) || oe === 0) && (oe = u / Math.cos(Math.PI / 180 * n)), this._point = S.subtract(r.getPixelOrigin()), this._radius = isNaN(oe) ? 0 : S.x - r.project([K, e - oe]).x, this._radiusY = S.y - y.y;
        } else {
          var xe = l.unproject(l.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = r.latLngToLayerPoint(this._latlng), this._radius = this._point.x - r.latLngToLayerPoint(xe).x;
        }
        this._updateBounds();
      }
    });
    function Sc(e, n, r) {
      return new Ga(e, n, r);
    }
    var yi = Ei.extend({
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
      initialize: function(e, n) {
        j(this, n), this._setLatLngs(e);
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
        for (var n = 1 / 0, r = null, l = yn, d, u, y = 0, k = this._parts.length; y < k; y++)
          for (var S = this._parts[y], K = 1, oe = S.length; K < oe; K++) {
            d = S[K - 1], u = S[K];
            var xe = l(e, d, u, !0);
            xe < n && (n = xe, r = l(e, d, u));
          }
        return r && (r.distance = Math.sqrt(n)), r;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return go(this._defaultShape(), this._map.options.crs);
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
      addLatLng: function(e, n) {
        return n = n || this._defaultShape(), e = Y(e), n.push(e), this._bounds.extend(e), this.redraw();
      },
      _setLatLngs: function(e) {
        this._bounds = new H(), this._latlngs = this._convertLatLngs(e);
      },
      _defaultShape: function() {
        return ei(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(e) {
        for (var n = [], r = ei(e), l = 0, d = e.length; l < d; l++)
          r ? (n[l] = Y(e[l]), this._bounds.extend(n[l])) : n[l] = this._convertLatLngs(e[l]);
        return n;
      },
      _project: function() {
        var e = new Z();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
      },
      _updateBounds: function() {
        var e = this._clickTolerance(), n = new E(e, e);
        this._rawPxBounds && (this._pxBounds = new Z([
          this._rawPxBounds.min.subtract(n),
          this._rawPxBounds.max.add(n)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(e, n, r) {
        var l = e[0] instanceof ee, d = e.length, u, y;
        if (l) {
          for (y = [], u = 0; u < d; u++)
            y[u] = this._map.latLngToLayerPoint(e[u]), r.extend(y[u]);
          n.push(y);
        } else
          for (u = 0; u < d; u++)
            this._projectLatlngs(e[u], n, r);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var e = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var n = this._parts, r, l, d, u, y, k, S;
          for (r = 0, d = 0, u = this._rings.length; r < u; r++)
            for (S = this._rings[r], l = 0, y = S.length; l < y - 1; l++)
              k = ho(S[l], S[l + 1], e, l, !0), k && (n[d] = n[d] || [], n[d].push(k[0]), (k[1] !== S[l + 1] || l === y - 2) && (n[d].push(k[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var e = this._parts, n = this.options.smoothFactor, r = 0, l = e.length; r < l; r++)
          e[r] = uo(e[r], n);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e, n) {
        var r, l, d, u, y, k, S = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(e))
          return !1;
        for (r = 0, u = this._parts.length; r < u; r++)
          for (k = this._parts[r], l = 0, y = k.length, d = y - 1; l < y; d = l++)
            if (!(!n && l === 0) && mo(e, k[d], k[l]) <= S)
              return !0;
        return !1;
      }
    });
    function zc(e, n) {
      return new yi(e, n);
    }
    yi._flat = fo;
    var rn = yi.extend({
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
        return _o(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(e) {
        var n = yi.prototype._convertLatLngs.call(this, e), r = n.length;
        return r >= 2 && n[0] instanceof ee && n[0].equals(n[r - 1]) && n.pop(), n;
      },
      _setLatLngs: function(e) {
        yi.prototype._setLatLngs.call(this, e), ei(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return ei(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var e = this._renderer._bounds, n = this.options.weight, r = new E(n, n);
        if (e = new Z(e.min.subtract(r), e.max.add(r)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var l = 0, d = this._rings.length, u; l < d; l++)
            u = co(this._rings[l], e, !0), u.length && this._parts.push(u);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e) {
        var n = !1, r, l, d, u, y, k, S, K;
        if (!this._pxBounds || !this._pxBounds.contains(e))
          return !1;
        for (u = 0, S = this._parts.length; u < S; u++)
          for (r = this._parts[u], y = 0, K = r.length, k = K - 1; y < K; k = y++)
            l = r[y], d = r[k], l.y > e.y != d.y > e.y && e.x < (d.x - l.x) * (e.y - l.y) / (d.y - l.y) + l.x && (n = !n);
        return n || yi.prototype._containsPoint.call(this, e, !0);
      }
    });
    function jc(e, n) {
      return new rn(e, n);
    }
    var bi = gi.extend({
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
      initialize: function(e, n) {
        j(this, n), this._layers = {}, e && this.addData(e);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(e) {
        var n = W(e) ? e : e.features, r, l, d;
        if (n) {
          for (r = 0, l = n.length; r < l; r++)
            d = n[r], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var u = this.options;
        if (u.filter && !u.filter(e))
          return this;
        var y = Kn(e, u);
        return y ? (y.feature = Jn(e), y.defaultOptions = y.options, this.resetStyle(y), u.onEachFeature && u.onEachFeature(e, y), this.addLayer(y)) : this;
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
        return this.eachLayer(function(n) {
          this._setLayerStyle(n, e);
        }, this);
      },
      _setLayerStyle: function(e, n) {
        e.setStyle && (typeof n == "function" && (n = n(e.feature)), e.setStyle(n));
      }
    });
    function Kn(e, n) {
      var r = e.type === "Feature" ? e.geometry : e, l = r ? r.coordinates : null, d = [], u = n && n.pointToLayer, y = n && n.coordsToLatLng || Ka, k, S, K, oe;
      if (!l && !r)
        return null;
      switch (r.type) {
        case "Point":
          return k = y(l), vo(u, e, k, n);
        case "MultiPoint":
          for (K = 0, oe = l.length; K < oe; K++)
            k = y(l[K]), d.push(vo(u, e, k, n));
          return new gi(d);
        case "LineString":
        case "MultiLineString":
          return S = qn(l, r.type === "LineString" ? 0 : 1, y), new yi(S, n);
        case "Polygon":
        case "MultiPolygon":
          return S = qn(l, r.type === "Polygon" ? 1 : 2, y), new rn(S, n);
        case "GeometryCollection":
          for (K = 0, oe = r.geometries.length; K < oe; K++) {
            var xe = Kn({
              geometry: r.geometries[K],
              type: "Feature",
              properties: e.properties
            }, n);
            xe && d.push(xe);
          }
          return new gi(d);
        case "FeatureCollection":
          for (K = 0, oe = r.features.length; K < oe; K++) {
            var Ie = Kn(r.features[K], n);
            Ie && d.push(Ie);
          }
          return new gi(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function vo(e, n, r, l) {
      return e ? e(n, r) : new Vn(r, l && l.markersInheritOptions && l);
    }
    function Ka(e) {
      return new ee(e[1], e[0], e[2]);
    }
    function qn(e, n, r) {
      for (var l = [], d = 0, u = e.length, y; d < u; d++)
        y = n ? qn(e[d], n - 1, r) : (r || Ka)(e[d]), l.push(y);
      return l;
    }
    function qa(e, n) {
      return e = Y(e), e.alt !== void 0 ? [C(e.lng, n), C(e.lat, n), C(e.alt, n)] : [C(e.lng, n), C(e.lat, n)];
    }
    function Yn(e, n, r, l) {
      for (var d = [], u = 0, y = e.length; u < y; u++)
        d.push(n ? Yn(e[u], ei(e[u]) ? 0 : n - 1, r, l) : qa(e[u], l));
      return !n && r && d.length > 0 && d.push(d[0].slice()), d;
    }
    function on(e, n) {
      return e.feature ? c({}, e.feature, { geometry: n }) : Jn(n);
    }
    function Jn(e) {
      return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
        type: "Feature",
        properties: {},
        geometry: e
      };
    }
    var Ya = {
      toGeoJSON: function(e) {
        return on(this, {
          type: "Point",
          coordinates: qa(this.getLatLng(), e)
        });
      }
    };
    Vn.include(Ya), Ga.include(Ya), Gn.include(Ya), yi.include({
      toGeoJSON: function(e) {
        var n = !ei(this._latlngs), r = Yn(this._latlngs, n ? 1 : 0, !1, e);
        return on(this, {
          type: (n ? "Multi" : "") + "LineString",
          coordinates: r
        });
      }
    }), rn.include({
      toGeoJSON: function(e) {
        var n = !ei(this._latlngs), r = n && !ei(this._latlngs[0]), l = Yn(this._latlngs, r ? 2 : n ? 1 : 0, !0, e);
        return n || (l = [l]), on(this, {
          type: (r ? "Multi" : "") + "Polygon",
          coordinates: l
        });
      }
    }), nn.include({
      toMultiPoint: function(e) {
        var n = [];
        return this.eachLayer(function(r) {
          n.push(r.toGeoJSON(e).geometry.coordinates);
        }), on(this, {
          type: "MultiPoint",
          coordinates: n
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(e) {
        var n = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (n === "MultiPoint")
          return this.toMultiPoint(e);
        var r = n === "GeometryCollection", l = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var u = d.toGeoJSON(e);
            if (r)
              l.push(u.geometry);
            else {
              var y = Jn(u);
              y.type === "FeatureCollection" ? l.push.apply(l, y.features) : l.push(y);
            }
          }
        }), r ? on(this, {
          geometries: l,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: l
        };
      }
    });
    function xo(e, n) {
      return new bi(e, n);
    }
    var Nc = xo, Xn = ri.extend({
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
      initialize: function(e, n, r) {
        this._url = e, this._bounds = q(n), j(this, r);
      },
      onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Pe(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function() {
        lt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
        return this._map && en(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && tn(this._image), this;
      },
      // @method setUrl(url: String): this
      // Changes the URL of the image.
      setUrl: function(e) {
        return this._url = e, this._image && (this._image.src = e), this;
      },
      // @method setBounds(bounds: LatLngBounds): this
      // Update the bounds that this ImageOverlay covers
      setBounds: function(e) {
        return this._bounds = q(e), this._map && this._reset(), this;
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
        var e = this._url.tagName === "IMG", n = this._image = e ? this._url : We("img");
        if (Pe(n, "leaflet-image-layer"), this._zoomAnimated && Pe(n, "leaflet-zoom-animated"), this.options.className && Pe(n, this.options.className), n.onselectstart = v, n.onmousemove = v, n.onload = m(this.fire, this, "load"), n.onerror = m(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
          this._url = n.src;
          return;
        }
        n.src = this._url, n.alt = this.options.alt;
      },
      _animateZoom: function(e) {
        var n = this._map.getZoomScale(e.zoom), r = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
        $i(this._image, r, n);
      },
      _reset: function() {
        var e = this._image, n = new Z(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), r = n.getSize();
        ft(e, n.min), e.style.width = r.x + "px", e.style.height = r.y + "px";
      },
      _updateOpacity: function() {
        Qt(this._image, this.options.opacity);
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
    }), Tc = function(e, n, r) {
      return new Xn(e, n, r);
    }, wo = Xn.extend({
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
        var e = this._url.tagName === "VIDEO", n = this._image = e ? this._url : We("video");
        if (Pe(n, "leaflet-image-layer"), this._zoomAnimated && Pe(n, "leaflet-zoom-animated"), this.options.className && Pe(n, this.options.className), n.onselectstart = v, n.onmousemove = v, n.onloadeddata = m(this.fire, this, "load"), e) {
          for (var r = n.getElementsByTagName("source"), l = [], d = 0; d < r.length; d++)
            l.push(r[d].src);
          this._url = r.length > 0 ? l : [n.src];
          return;
        }
        W(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(n.style, "objectFit") && (n.style.objectFit = "fill"), n.autoplay = !!this.options.autoplay, n.loop = !!this.options.loop, n.muted = !!this.options.muted, n.playsInline = !!this.options.playsInline;
        for (var u = 0; u < this._url.length; u++) {
          var y = We("source");
          y.src = this._url[u], n.appendChild(y);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Pc(e, n, r) {
      return new wo(e, n, r);
    }
    var ko = Xn.extend({
      _initImage: function() {
        var e = this._image = this._url;
        Pe(e, "leaflet-image-layer"), this._zoomAnimated && Pe(e, "leaflet-zoom-animated"), this.options.className && Pe(e, this.options.className), e.onselectstart = v, e.onmousemove = v;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Ec(e, n, r) {
      return new ko(e, n, r);
    }
    var ui = ri.extend({
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
      initialize: function(e, n) {
        e && (e instanceof ee || W(e)) ? (this._latlng = Y(e), j(this, n)) : (j(this, e), this._source = n), this.options.content && (this._content = this.options.content);
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
        this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Qt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Qt(this._container, 1), this.bringToFront(), this.options.interactive && (Pe(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function(e) {
        e._fadeAnimated ? (Qt(this._container, 0), this._removeTimeout = setTimeout(m(lt, void 0, this._container), 200)) : lt(this._container), this.options.interactive && (pt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
        return this._latlng = Y(e), this._map && (this._updatePosition(), this._adjustPan()), this;
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
        return this._map && en(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && tn(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(e) {
        var n = this._source;
        if (!n._map)
          return !1;
        if (n instanceof gi) {
          n = null;
          var r = this._source._layers;
          for (var l in r)
            if (r[l]._map) {
              n = r[l];
              break;
            }
          if (!n)
            return !1;
          this._source = n;
        }
        if (!e)
          if (n.getCenter)
            e = n.getCenter();
          else if (n.getLatLng)
            e = n.getLatLng();
          else if (n.getBounds)
            e = n.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(e), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var e = this._contentNode, n = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof n == "string")
            e.innerHTML = n;
          else {
            for (; e.hasChildNodes(); )
              e.removeChild(e.firstChild);
            e.appendChild(n);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var e = this._map.latLngToLayerPoint(this._latlng), n = x(this.options.offset), r = this._getAnchor();
          this._zoomAnimated ? ft(this._container, e.add(r)) : n = n.add(e).add(r);
          var l = this._containerBottom = -n.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + n.x;
          this._container.style.bottom = l + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    De.include({
      _initOverlay: function(e, n, r, l) {
        var d = n;
        return d instanceof e || (d = new e(l).setContent(n)), r && d.setLatLng(r), d;
      }
    }), ri.include({
      _initOverlay: function(e, n, r, l) {
        var d = r;
        return d instanceof e ? (j(d, l), d._source = this) : (d = n && !l ? n : new e(l, this), d.setContent(r)), d;
      }
    });
    var Qn = ui.extend({
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
        return e = arguments.length ? e : this._source._map, !e.hasLayer(this) && e._popup && e._popup.options.autoClose && e.removeLayer(e._popup), e._popup = this, ui.prototype.openOn.call(this, e);
      },
      onAdd: function(e) {
        ui.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ei || this._source.on("preclick", Ui));
      },
      onRemove: function(e) {
        ui.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ei || this._source.off("preclick", Ui));
      },
      getEvents: function() {
        var e = ui.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
      },
      _initLayout: function() {
        var e = "leaflet-popup", n = this._container = We(
          "div",
          e + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), r = this._wrapper = We("div", e + "-content-wrapper", n);
        if (this._contentNode = We("div", e + "-content", r), fn(n), Fa(this._contentNode), je(n, "contextmenu", Ui), this._tipContainer = We("div", e + "-tip-container", n), this._tip = We("div", e + "-tip", this._tipContainer), this.options.closeButton) {
          var l = this._closeButton = We("a", e + "-close-button", n);
          l.setAttribute("role", "button"), l.setAttribute("aria-label", "Close popup"), l.href = "#close", l.innerHTML = '<span aria-hidden="true">&#215;</span>', je(l, "click", function(d) {
            Pt(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var e = this._contentNode, n = e.style;
        n.width = "", n.whiteSpace = "nowrap";
        var r = e.offsetWidth;
        r = Math.min(r, this.options.maxWidth), r = Math.max(r, this.options.minWidth), n.width = r + 1 + "px", n.whiteSpace = "", n.height = "";
        var l = e.offsetHeight, d = this.options.maxHeight, u = "leaflet-popup-scrolled";
        d && l > d ? (n.height = d + "px", Pe(e, u)) : pt(e, u), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(e) {
        var n = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), r = this._getAnchor();
        ft(this._container, n.add(r));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var e = this._map, n = parseInt(un(this._container, "marginBottom"), 10) || 0, r = this._container.offsetHeight + n, l = this._containerWidth, d = new E(this._containerLeft, -r - this._containerBottom);
          d._add(Wi(this._container));
          var u = e.layerPointToContainerPoint(d), y = x(this.options.autoPanPadding), k = x(this.options.autoPanPaddingTopLeft || y), S = x(this.options.autoPanPaddingBottomRight || y), K = e.getSize(), oe = 0, xe = 0;
          u.x + l + S.x > K.x && (oe = u.x + l - K.x + S.x), u.x - oe - k.x < 0 && (oe = u.x - k.x), u.y + r + S.y > K.y && (xe = u.y + r - K.y + S.y), u.y - xe - k.y < 0 && (xe = u.y - k.y), (oe || xe) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([oe, xe]));
        }
      },
      _getAnchor: function() {
        return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Ic = function(e, n) {
      return new Qn(e, n);
    };
    De.mergeOptions({
      closePopupOnClick: !0
    }), De.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(e, n, r) {
        return this._initOverlay(Qn, e, n, r).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(e) {
        return e = arguments.length ? e : this._popup, e && e.close(), this;
      }
    }), ri.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(e, n) {
        return this._popup = this._initOverlay(Qn, this._popup, e, n), this._popupHandlersAdded || (this.on({
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
        return this._popup && (this instanceof gi || (this._popup._source = this), this._popup._prepareOpen(e || this._latlng) && this._popup.openOn(this._map)), this;
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
          Zi(e);
          var n = e.layer || e.target;
          if (this._popup._source === n && !(n instanceof Ei)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(e.latlng);
            return;
          }
          this._popup._source = n, this.openPopup(e.latlng);
        }
      },
      _movePopup: function(e) {
        this._popup.setLatLng(e.latlng);
      },
      _onKeyPress: function(e) {
        e.originalEvent.keyCode === 13 && this._openPopup(e);
      }
    });
    var ea = ui.extend({
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
        ui.prototype.onAdd.call(this, e), this.setOpacity(this.options.opacity), e.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(e) {
        ui.prototype.onRemove.call(this, e), e.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var e = ui.prototype.getEvents.call(this);
        return this.options.permanent || (e.preclick = this.close), e;
      },
      _initLayout: function() {
        var e = "leaflet-tooltip", n = e + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = We("div", n), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(e) {
        var n, r, l = this._map, d = this._container, u = l.latLngToContainerPoint(l.getCenter()), y = l.layerPointToContainerPoint(e), k = this.options.direction, S = d.offsetWidth, K = d.offsetHeight, oe = x(this.options.offset), xe = this._getAnchor();
        k === "top" ? (n = S / 2, r = K) : k === "bottom" ? (n = S / 2, r = 0) : k === "center" ? (n = S / 2, r = K / 2) : k === "right" ? (n = 0, r = K / 2) : k === "left" ? (n = S, r = K / 2) : y.x < u.x ? (k = "right", n = 0, r = K / 2) : (k = "left", n = S + (oe.x + xe.x) * 2, r = K / 2), e = e.subtract(x(n, r, !0)).add(oe).add(xe), pt(d, "leaflet-tooltip-right"), pt(d, "leaflet-tooltip-left"), pt(d, "leaflet-tooltip-top"), pt(d, "leaflet-tooltip-bottom"), Pe(d, "leaflet-tooltip-" + k), ft(d, e);
      },
      _updatePosition: function() {
        var e = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(e);
      },
      setOpacity: function(e) {
        this.options.opacity = e, this._container && Qt(this._container, e);
      },
      _animateZoom: function(e) {
        var n = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
        this._setPosition(n);
      },
      _getAnchor: function() {
        return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Lc = function(e, n) {
      return new ea(e, n);
    };
    De.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(e, n, r) {
        return this._initOverlay(ea, e, n, r).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(e) {
        return e.close(), this;
      }
    }), ri.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(e, n) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ea, this._tooltip, e, n), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(e) {
        if (!(!e && this._tooltipHandlersAdded)) {
          var n = e ? "off" : "on", r = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? r.add = this._openTooltip : (r.mouseover = this._openTooltip, r.mouseout = this.closeTooltip, r.click = this._openTooltip, this._map ? this._addFocusListeners() : r.add = this._addFocusListeners), this._tooltip.options.sticky && (r.mousemove = this._moveTooltip), this[n](r), this._tooltipHandlersAdded = !e;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(e) {
        return this._tooltip && (this instanceof gi || (this._tooltip._source = this), this._tooltip._prepareOpen(e) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
        var n = typeof e.getElement == "function" && e.getElement();
        n && (je(n, "focus", function() {
          this._tooltip._source = e, this.openTooltip();
        }, this), je(n, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(e) {
        var n = typeof e.getElement == "function" && e.getElement();
        n && n.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(e) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var n = this;
            this._map.once("moveend", function() {
              n._openOnceFlag = !1, n._openTooltip(e);
            });
            return;
          }
          this._tooltip._source = e.layer || e.target, this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
        }
      },
      _moveTooltip: function(e) {
        var n = e.latlng, r, l;
        this._tooltip.options.sticky && e.originalEvent && (r = this._map.mouseEventToContainerPoint(e.originalEvent), l = this._map.containerPointToLayerPoint(r), n = this._map.layerPointToLatLng(l)), this._tooltip.setLatLng(n);
      }
    });
    var Co = an.extend({
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
        var n = e && e.tagName === "DIV" ? e : document.createElement("div"), r = this.options;
        if (r.html instanceof Element ? (Dn(n), n.appendChild(r.html)) : n.innerHTML = r.html !== !1 ? r.html : "", r.bgPos) {
          var l = x(r.bgPos);
          n.style.backgroundPosition = -l.x + "px " + -l.y + "px";
        }
        return this._setIconStyles(n, "icon"), n;
      },
      createShadow: function() {
        return null;
      }
    });
    function Ac(e) {
      return new Co(e);
    }
    an.Default = bn;
    var vn = ri.extend({
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
        updateWhenIdle: ue.mobile,
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
        this._removeAllTiles(), lt(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      },
      // @method bringToFront: this
      // Brings the tile layer to the top of all tile layers.
      bringToFront: function() {
        return this._map && (en(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (tn(this._container), this._setAutoZIndex(Math.min)), this;
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
        return e instanceof E ? e : new E(e, e);
      },
      _updateZIndex: function() {
        this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function(e) {
        for (var n = this.getPane().children, r = -e(-1 / 0, 1 / 0), l = 0, d = n.length, u; l < d; l++)
          u = n[l].style.zIndex, n[l] !== this._container && u && (r = e(r, +u));
        isFinite(r) && (this.options.zIndex = r + e(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !ue.ielt9) {
          Qt(this._container, this.options.opacity);
          var e = +/* @__PURE__ */ new Date(), n = !1, r = !1;
          for (var l in this._tiles) {
            var d = this._tiles[l];
            if (!(!d.current || !d.loaded)) {
              var u = Math.min(1, (e - d.loaded) / 200);
              Qt(d.el, u), u < 1 ? n = !0 : (d.active ? r = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          r && !this._noPrune && this._pruneTiles(), n && (Q(this._fadeFrame), this._fadeFrame = F(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function() {
        this._container || (this._container = We("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var e = this._tileZoom, n = this.options.maxZoom;
        if (e !== void 0) {
          for (var r in this._levels)
            r = Number(r), this._levels[r].el.children.length || r === e ? (this._levels[r].el.style.zIndex = n - Math.abs(e - r), this._onUpdateLevel(r)) : (lt(this._levels[r].el), this._removeTilesAtZoom(r), this._onRemoveLevel(r), delete this._levels[r]);
          var l = this._levels[e], d = this._map;
          return l || (l = this._levels[e] = {}, l.el = We("div", "leaflet-tile-container leaflet-zoom-animated", this._container), l.el.style.zIndex = n, l.origin = d.project(d.unproject(d.getPixelOrigin()), e).round(), l.zoom = e, this._setZoomTransform(l, d.getCenter(), d.getZoom()), v(l.el.offsetWidth), this._onCreateLevel(l)), this._level = l, l;
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function() {
        if (this._map) {
          var e, n, r = this._map.getZoom();
          if (r > this.options.maxZoom || r < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (e in this._tiles)
            n = this._tiles[e], n.retain = n.current;
          for (e in this._tiles)
            if (n = this._tiles[e], n.current && !n.active) {
              var l = n.coords;
              this._retainParent(l.x, l.y, l.z, l.z - 5) || this._retainChildren(l.x, l.y, l.z, l.z + 2);
            }
          for (e in this._tiles)
            this._tiles[e].retain || this._removeTile(e);
        }
      },
      _removeTilesAtZoom: function(e) {
        for (var n in this._tiles)
          this._tiles[n].coords.z === e && this._removeTile(n);
      },
      _removeAllTiles: function() {
        for (var e in this._tiles)
          this._removeTile(e);
      },
      _invalidateAll: function() {
        for (var e in this._levels)
          lt(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
        this._removeAllTiles(), this._tileZoom = void 0;
      },
      _retainParent: function(e, n, r, l) {
        var d = Math.floor(e / 2), u = Math.floor(n / 2), y = r - 1, k = new E(+d, +u);
        k.z = +y;
        var S = this._tileCoordsToKey(k), K = this._tiles[S];
        return K && K.active ? (K.retain = !0, !0) : (K && K.loaded && (K.retain = !0), y > l ? this._retainParent(d, u, y, l) : !1);
      },
      _retainChildren: function(e, n, r, l) {
        for (var d = 2 * e; d < 2 * e + 2; d++)
          for (var u = 2 * n; u < 2 * n + 2; u++) {
            var y = new E(d, u);
            y.z = r + 1;
            var k = this._tileCoordsToKey(y), S = this._tiles[k];
            if (S && S.active) {
              S.retain = !0;
              continue;
            } else S && S.loaded && (S.retain = !0);
            r + 1 < l && this._retainChildren(d, u, r + 1, l);
          }
      },
      _resetView: function(e) {
        var n = e && (e.pinch || e.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), n, n);
      },
      _animateZoom: function(e) {
        this._setView(e.center, e.zoom, !0, e.noUpdate);
      },
      _clampZoom: function(e) {
        var n = this.options;
        return n.minNativeZoom !== void 0 && e < n.minNativeZoom ? n.minNativeZoom : n.maxNativeZoom !== void 0 && n.maxNativeZoom < e ? n.maxNativeZoom : e;
      },
      _setView: function(e, n, r, l) {
        var d = Math.round(n);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var u = this.options.updateWhenZooming && d !== this._tileZoom;
        (!l || u) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(e), r || this._pruneTiles(), this._noPrune = !!r), this._setZoomTransforms(e, n);
      },
      _setZoomTransforms: function(e, n) {
        for (var r in this._levels)
          this._setZoomTransform(this._levels[r], e, n);
      },
      _setZoomTransform: function(e, n, r) {
        var l = this._map.getZoomScale(r, e.zoom), d = e.origin.multiplyBy(l).subtract(this._map._getNewPixelOrigin(n, r)).round();
        ue.any3d ? $i(e.el, d, l) : ft(e.el, d);
      },
      _resetGrid: function() {
        var e = this._map, n = e.options.crs, r = this._tileSize = this.getTileSize(), l = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = n.wrapLng && !this.options.noWrap && [
          Math.floor(e.project([0, n.wrapLng[0]], l).x / r.x),
          Math.ceil(e.project([0, n.wrapLng[1]], l).x / r.y)
        ], this._wrapY = n.wrapLat && !this.options.noWrap && [
          Math.floor(e.project([n.wrapLat[0], 0], l).y / r.x),
          Math.ceil(e.project([n.wrapLat[1], 0], l).y / r.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(e) {
        var n = this._map, r = n._animatingZoom ? Math.max(n._animateToZoom, n.getZoom()) : n.getZoom(), l = n.getZoomScale(r, this._tileZoom), d = n.project(e, this._tileZoom).floor(), u = n.getSize().divideBy(l * 2);
        return new Z(d.subtract(u), d.add(u));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(e) {
        var n = this._map;
        if (n) {
          var r = this._clampZoom(n.getZoom());
          if (e === void 0 && (e = n.getCenter()), this._tileZoom !== void 0) {
            var l = this._getTiledPixelBounds(e), d = this._pxBoundsToTileRange(l), u = d.getCenter(), y = [], k = this.options.keepBuffer, S = new Z(
              d.getBottomLeft().subtract([k, -k]),
              d.getTopRight().add([k, -k])
            );
            if (!(isFinite(d.min.x) && isFinite(d.min.y) && isFinite(d.max.x) && isFinite(d.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var K in this._tiles) {
              var oe = this._tiles[K].coords;
              (oe.z !== this._tileZoom || !S.contains(new E(oe.x, oe.y))) && (this._tiles[K].current = !1);
            }
            if (Math.abs(r - this._tileZoom) > 1) {
              this._setView(e, r);
              return;
            }
            for (var xe = d.min.y; xe <= d.max.y; xe++)
              for (var Ie = d.min.x; Ie <= d.max.x; Ie++) {
                var Mt = new E(Ie, xe);
                if (Mt.z = this._tileZoom, !!this._isValidTile(Mt)) {
                  var wt = this._tiles[this._tileCoordsToKey(Mt)];
                  wt ? wt.current = !0 : y.push(Mt);
                }
              }
            if (y.sort(function(Ft, ln) {
              return Ft.distanceTo(u) - ln.distanceTo(u);
            }), y.length !== 0) {
              this._loading || (this._loading = !0, this.fire("loading"));
              var ti = document.createDocumentFragment();
              for (Ie = 0; Ie < y.length; Ie++)
                this._addTile(y[Ie], ti);
              this._level.el.appendChild(ti);
            }
          }
        }
      },
      _isValidTile: function(e) {
        var n = this._map.options.crs;
        if (!n.infinite) {
          var r = this._globalTileRange;
          if (!n.wrapLng && (e.x < r.min.x || e.x > r.max.x) || !n.wrapLat && (e.y < r.min.y || e.y > r.max.y))
            return !1;
        }
        if (!this.options.bounds)
          return !0;
        var l = this._tileCoordsToBounds(e);
        return q(this.options.bounds).overlaps(l);
      },
      _keyToBounds: function(e) {
        return this._tileCoordsToBounds(this._keyToTileCoords(e));
      },
      _tileCoordsToNwSe: function(e) {
        var n = this._map, r = this.getTileSize(), l = e.scaleBy(r), d = l.add(r), u = n.unproject(l, e.z), y = n.unproject(d, e.z);
        return [u, y];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(e) {
        var n = this._tileCoordsToNwSe(e), r = new H(n[0], n[1]);
        return this.options.noWrap || (r = this._map.wrapLatLngBounds(r)), r;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(e) {
        return e.x + ":" + e.y + ":" + e.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(e) {
        var n = e.split(":"), r = new E(+n[0], +n[1]);
        return r.z = +n[2], r;
      },
      _removeTile: function(e) {
        var n = this._tiles[e];
        n && (lt(n.el), delete this._tiles[e], this.fire("tileunload", {
          tile: n.el,
          coords: this._keyToTileCoords(e)
        }));
      },
      _initTile: function(e) {
        Pe(e, "leaflet-tile");
        var n = this.getTileSize();
        e.style.width = n.x + "px", e.style.height = n.y + "px", e.onselectstart = v, e.onmousemove = v, ue.ielt9 && this.options.opacity < 1 && Qt(e, this.options.opacity);
      },
      _addTile: function(e, n) {
        var r = this._getTilePos(e), l = this._tileCoordsToKey(e), d = this.createTile(this._wrapCoords(e), m(this._tileReady, this, e));
        this._initTile(d), this.createTile.length < 2 && F(m(this._tileReady, this, e, null, d)), ft(d, r), this._tiles[l] = {
          el: d,
          coords: e,
          current: !0
        }, n.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: e
        });
      },
      _tileReady: function(e, n, r) {
        n && this.fire("tileerror", {
          error: n,
          tile: r,
          coords: e
        });
        var l = this._tileCoordsToKey(e);
        r = this._tiles[l], r && (r.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Qt(r.el, 0), Q(this._fadeFrame), this._fadeFrame = F(this._updateOpacity, this)) : (r.active = !0, this._pruneTiles()), n || (Pe(r.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: r.el,
          coords: e
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), ue.ielt9 || !this._map._fadeAnimated ? F(this._pruneTiles, this) : setTimeout(m(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(e) {
        return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(e) {
        var n = new E(
          this._wrapX ? b(e.x, this._wrapX) : e.x,
          this._wrapY ? b(e.y, this._wrapY) : e.y
        );
        return n.z = e.z, n;
      },
      _pxBoundsToTileRange: function(e) {
        var n = this.getTileSize();
        return new Z(
          e.min.unscaleBy(n).floor(),
          e.max.unscaleBy(n).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function() {
        for (var e in this._tiles)
          if (!this._tiles[e].loaded)
            return !1;
        return !0;
      }
    });
    function Mc(e) {
      return new vn(e);
    }
    var sn = vn.extend({
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
      initialize: function(e, n) {
        this._url = e, n = j(this, n), n.detectRetina && ue.retina && n.maxZoom > 0 ? (n.tileSize = Math.floor(n.tileSize / 2), n.zoomReverse ? (n.zoomOffset--, n.minZoom = Math.min(n.maxZoom, n.minZoom + 1)) : (n.zoomOffset++, n.maxZoom = Math.max(n.minZoom, n.maxZoom - 1)), n.minZoom = Math.max(0, n.minZoom)) : n.zoomReverse ? n.minZoom = Math.min(n.maxZoom, n.minZoom) : n.maxZoom = Math.max(n.minZoom, n.maxZoom), typeof n.subdomains == "string" && (n.subdomains = n.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(e, n) {
        return this._url === e && n === void 0 && (n = !0), this._url = e, n || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(e, n) {
        var r = document.createElement("img");
        return je(r, "load", m(this._tileOnLoad, this, n, r)), je(r, "error", m(this._tileOnError, this, n, r)), (this.options.crossOrigin || this.options.crossOrigin === "") && (r.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (r.referrerPolicy = this.options.referrerPolicy), r.alt = "", r.src = this.getTileUrl(e), r;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(e) {
        var n = {
          r: ue.retina ? "@2x" : "",
          s: this._getSubdomain(e),
          x: e.x,
          y: e.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var r = this._globalTileRange.max.y - e.y;
          this.options.tms && (n.y = r), n["-y"] = r;
        }
        return X(this._url, c(n, this.options));
      },
      _tileOnLoad: function(e, n) {
        ue.ielt9 ? setTimeout(m(e, this, null, n), 0) : e(null, n);
      },
      _tileOnError: function(e, n, r) {
        var l = this.options.errorTileUrl;
        l && n.getAttribute("src") !== l && (n.src = l), e(r, n);
      },
      _onTileRemove: function(e) {
        e.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var e = this._tileZoom, n = this.options.maxZoom, r = this.options.zoomReverse, l = this.options.zoomOffset;
        return r && (e = n - e), e + l;
      },
      _getSubdomain: function(e) {
        var n = Math.abs(e.x + e.y) % this.options.subdomains.length;
        return this.options.subdomains[n];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var e, n;
        for (e in this._tiles)
          if (this._tiles[e].coords.z !== this._tileZoom && (n = this._tiles[e].el, n.onload = v, n.onerror = v, !n.complete)) {
            n.src = N;
            var r = this._tiles[e].coords;
            lt(n), delete this._tiles[e], this.fire("tileabort", {
              tile: n,
              coords: r
            });
          }
      },
      _removeTile: function(e) {
        var n = this._tiles[e];
        if (n)
          return n.el.setAttribute("src", N), vn.prototype._removeTile.call(this, e);
      },
      _tileReady: function(e, n, r) {
        if (!(!this._map || r && r.getAttribute("src") === N))
          return vn.prototype._tileReady.call(this, e, n, r);
      }
    });
    function So(e, n) {
      return new sn(e, n);
    }
    var zo = sn.extend({
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
      initialize: function(e, n) {
        this._url = e;
        var r = c({}, this.defaultWmsParams);
        for (var l in n)
          l in this.options || (r[l] = n[l]);
        n = j(this, n);
        var d = n.detectRetina && ue.retina ? 2 : 1, u = this.getTileSize();
        r.width = u.x * d, r.height = u.y * d, this.wmsParams = r;
      },
      onAdd: function(e) {
        this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var n = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[n] = this._crs.code, sn.prototype.onAdd.call(this, e);
      },
      getTileUrl: function(e) {
        var n = this._tileCoordsToNwSe(e), r = this._crs, l = z(r.project(n[0]), r.project(n[1])), d = l.min, u = l.max, y = (this._wmsVersion >= 1.3 && this._crs === yo ? [d.y, d.x, u.y, u.x] : [d.x, d.y, u.x, u.y]).join(","), k = sn.prototype.getTileUrl.call(this, e);
        return k + A(this.wmsParams, k, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + y;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(e, n) {
        return c(this.wmsParams, e), n || this.redraw(), this;
      }
    });
    function Oc(e, n) {
      return new zo(e, n);
    }
    sn.WMS = zo, So.wms = Oc;
    var vi = ri.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(e) {
        j(this, e), f(this), this._layers = this._layers || {};
      },
      onAdd: function() {
        this._container || (this._initContainer(), Pe(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
      _updateTransform: function(e, n) {
        var r = this._map.getZoomScale(n, this._zoom), l = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, n), u = l.multiplyBy(-r).add(d).subtract(this._map._getNewPixelOrigin(e, n));
        ue.any3d ? $i(this._container, u, r) : ft(this._container, u);
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
        var e = this.options.padding, n = this._map.getSize(), r = this._map.containerPointToLayerPoint(n.multiplyBy(-e)).round();
        this._bounds = new Z(r, r.add(n.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), jo = vi.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var e = vi.prototype.getEvents.call(this);
        return e.viewprereset = this._onViewPreReset, e;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        vi.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var e = this._container = document.createElement("canvas");
        je(e, "mousemove", this._onMouseMove, this), je(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), je(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
      },
      _destroyContainer: function() {
        Q(this._redrawRequest), delete this._ctx, lt(this._container), Qe(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var e;
          this._redrawBounds = null;
          for (var n in this._layers)
            e = this._layers[n], e._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          vi.prototype._update.call(this);
          var e = this._bounds, n = this._container, r = e.getSize(), l = ue.retina ? 2 : 1;
          ft(n, e.min), n.width = l * r.x, n.height = l * r.y, n.style.width = r.x + "px", n.style.height = r.y + "px", ue.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
        }
      },
      _reset: function() {
        vi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(e) {
        this._updateDashArray(e), this._layers[f(e)] = e;
        var n = e._order = {
          layer: e,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = n), this._drawLast = n, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(e) {
        this._requestRedraw(e);
      },
      _removePath: function(e) {
        var n = e._order, r = n.next, l = n.prev;
        r ? r.prev = l : this._drawLast = l, l ? l.next = r : this._drawFirst = r, delete e._order, delete this._layers[f(e)], this._requestRedraw(e);
      },
      _updatePath: function(e) {
        this._extendRedrawBounds(e), e._project(), e._update(), this._requestRedraw(e);
      },
      _updateStyle: function(e) {
        this._updateDashArray(e), this._requestRedraw(e);
      },
      _updateDashArray: function(e) {
        if (typeof e.options.dashArray == "string") {
          var n = e.options.dashArray.split(/[, ]+/), r = [], l, d;
          for (d = 0; d < n.length; d++) {
            if (l = Number(n[d]), isNaN(l))
              return;
            r.push(l);
          }
          e.options._dashArray = r;
        } else
          e.options._dashArray = e.options.dashArray;
      },
      _requestRedraw: function(e) {
        this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || F(this._redraw, this));
      },
      _extendRedrawBounds: function(e) {
        if (e._pxBounds) {
          var n = (e.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new Z(), this._redrawBounds.extend(e._pxBounds.min.subtract([n, n])), this._redrawBounds.extend(e._pxBounds.max.add([n, n]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var e = this._redrawBounds;
        if (e) {
          var n = e.getSize();
          this._ctx.clearRect(e.min.x, e.min.y, n.x, n.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var e, n = this._redrawBounds;
        if (this._ctx.save(), n) {
          var r = n.getSize();
          this._ctx.beginPath(), this._ctx.rect(n.min.x, n.min.y, r.x, r.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var l = this._drawFirst; l; l = l.next)
          e = l.layer, (!n || e._pxBounds && e._pxBounds.intersects(n)) && e._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(e, n) {
        if (this._drawing) {
          var r, l, d, u, y = e._parts, k = y.length, S = this._ctx;
          if (k) {
            for (S.beginPath(), r = 0; r < k; r++) {
              for (l = 0, d = y[r].length; l < d; l++)
                u = y[r][l], S[l ? "lineTo" : "moveTo"](u.x, u.y);
              n && S.closePath();
            }
            this._fillStroke(S, e);
          }
        }
      },
      _updateCircle: function(e) {
        if (!(!this._drawing || e._empty())) {
          var n = e._point, r = this._ctx, l = Math.max(Math.round(e._radius), 1), d = (Math.max(Math.round(e._radiusY), 1) || l) / l;
          d !== 1 && (r.save(), r.scale(1, d)), r.beginPath(), r.arc(n.x, n.y / d, l, 0, Math.PI * 2, !1), d !== 1 && r.restore(), this._fillStroke(r, e);
        }
      },
      _fillStroke: function(e, n) {
        var r = n.options;
        r.fill && (e.globalAlpha = r.fillOpacity, e.fillStyle = r.fillColor || r.color, e.fill(r.fillRule || "evenodd")), r.stroke && r.weight !== 0 && (e.setLineDash && e.setLineDash(n.options && n.options._dashArray || []), e.globalAlpha = r.opacity, e.lineWidth = r.weight, e.strokeStyle = r.color, e.lineCap = r.lineCap, e.lineJoin = r.lineJoin, e.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(e) {
        for (var n = this._map.mouseEventToLayerPoint(e), r, l, d = this._drawFirst; d; d = d.next)
          r = d.layer, r.options.interactive && r._containsPoint(n) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(r)) && (l = r);
        this._fireEvent(l ? [l] : !1, e);
      },
      _onMouseMove: function(e) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var n = this._map.mouseEventToLayerPoint(e);
          this._handleMouseHover(e, n);
        }
      },
      _handleMouseOut: function(e) {
        var n = this._hoveredLayer;
        n && (pt(this._container, "leaflet-interactive"), this._fireEvent([n], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(e, n) {
        if (!this._mouseHoverThrottled) {
          for (var r, l, d = this._drawFirst; d; d = d.next)
            r = d.layer, r.options.interactive && r._containsPoint(n) && (l = r);
          l !== this._hoveredLayer && (this._handleMouseOut(e), l && (Pe(this._container, "leaflet-interactive"), this._fireEvent([l], e, "mouseover"), this._hoveredLayer = l)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(m(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(e, n, r) {
        this._map._fireDOMEvent(n, r || n.type, e);
      },
      _bringToFront: function(e) {
        var n = e._order;
        if (n) {
          var r = n.next, l = n.prev;
          if (r)
            r.prev = l;
          else
            return;
          l ? l.next = r : r && (this._drawFirst = r), n.prev = this._drawLast, this._drawLast.next = n, n.next = null, this._drawLast = n, this._requestRedraw(e);
        }
      },
      _bringToBack: function(e) {
        var n = e._order;
        if (n) {
          var r = n.next, l = n.prev;
          if (l)
            l.next = r;
          else
            return;
          r ? r.prev = l : l && (this._drawLast = l), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(e);
        }
      }
    });
    function No(e) {
      return ue.canvas ? new jo(e) : null;
    }
    var xn = function() {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(e) {
          return document.createElement("<lvml:" + e + ' class="lvml">');
        };
      } catch {
      }
      return function(e) {
        return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(), Rc = {
      _initContainer: function() {
        this._container = We("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (vi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(e) {
        var n = e._container = xn("shape");
        Pe(n, "leaflet-vml-shape " + (this.options.className || "")), n.coordsize = "1 1", e._path = xn("path"), n.appendChild(e._path), this._updateStyle(e), this._layers[f(e)] = e;
      },
      _addPath: function(e) {
        var n = e._container;
        this._container.appendChild(n), e.options.interactive && e.addInteractiveTarget(n);
      },
      _removePath: function(e) {
        var n = e._container;
        lt(n), e.removeInteractiveTarget(n), delete this._layers[f(e)];
      },
      _updateStyle: function(e) {
        var n = e._stroke, r = e._fill, l = e.options, d = e._container;
        d.stroked = !!l.stroke, d.filled = !!l.fill, l.stroke ? (n || (n = e._stroke = xn("stroke")), d.appendChild(n), n.weight = l.weight + "px", n.color = l.color, n.opacity = l.opacity, l.dashArray ? n.dashStyle = W(l.dashArray) ? l.dashArray.join(" ") : l.dashArray.replace(/( *, *)/g, " ") : n.dashStyle = "", n.endcap = l.lineCap.replace("butt", "flat"), n.joinstyle = l.lineJoin) : n && (d.removeChild(n), e._stroke = null), l.fill ? (r || (r = e._fill = xn("fill")), d.appendChild(r), r.color = l.fillColor || l.color, r.opacity = l.fillOpacity) : r && (d.removeChild(r), e._fill = null);
      },
      _updateCircle: function(e) {
        var n = e._point.round(), r = Math.round(e._radius), l = Math.round(e._radiusY || r);
        this._setPath(e, e._empty() ? "M0 0" : "AL " + n.x + "," + n.y + " " + r + "," + l + " 0," + 65535 * 360);
      },
      _setPath: function(e, n) {
        e._path.v = n;
      },
      _bringToFront: function(e) {
        en(e._container);
      },
      _bringToBack: function(e) {
        tn(e._container);
      }
    }, ta = ue.vml ? xn : Se, wn = vi.extend({
      _initContainer: function() {
        this._container = ta("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ta("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        lt(this._container), Qe(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          vi.prototype._update.call(this);
          var e = this._bounds, n = e.getSize(), r = this._container;
          (!this._svgSize || !this._svgSize.equals(n)) && (this._svgSize = n, r.setAttribute("width", n.x), r.setAttribute("height", n.y)), ft(r, e.min), r.setAttribute("viewBox", [e.min.x, e.min.y, n.x, n.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(e) {
        var n = e._path = ta("path");
        e.options.className && Pe(n, e.options.className), e.options.interactive && Pe(n, "leaflet-interactive"), this._updateStyle(e), this._layers[f(e)] = e;
      },
      _addPath: function(e) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
      },
      _removePath: function(e) {
        lt(e._path), e.removeInteractiveTarget(e._path), delete this._layers[f(e)];
      },
      _updatePath: function(e) {
        e._project(), e._update();
      },
      _updateStyle: function(e) {
        var n = e._path, r = e.options;
        n && (r.stroke ? (n.setAttribute("stroke", r.color), n.setAttribute("stroke-opacity", r.opacity), n.setAttribute("stroke-width", r.weight), n.setAttribute("stroke-linecap", r.lineCap), n.setAttribute("stroke-linejoin", r.lineJoin), r.dashArray ? n.setAttribute("stroke-dasharray", r.dashArray) : n.removeAttribute("stroke-dasharray"), r.dashOffset ? n.setAttribute("stroke-dashoffset", r.dashOffset) : n.removeAttribute("stroke-dashoffset")) : n.setAttribute("stroke", "none"), r.fill ? (n.setAttribute("fill", r.fillColor || r.color), n.setAttribute("fill-opacity", r.fillOpacity), n.setAttribute("fill-rule", r.fillRule || "evenodd")) : n.setAttribute("fill", "none"));
      },
      _updatePoly: function(e, n) {
        this._setPath(e, he(e._parts, n));
      },
      _updateCircle: function(e) {
        var n = e._point, r = Math.max(Math.round(e._radius), 1), l = Math.max(Math.round(e._radiusY), 1) || r, d = "a" + r + "," + l + " 0 1,0 ", u = e._empty() ? "M0 0" : "M" + (n.x - r) + "," + n.y + d + r * 2 + ",0 " + d + -r * 2 + ",0 ";
        this._setPath(e, u);
      },
      _setPath: function(e, n) {
        e._path.setAttribute("d", n);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(e) {
        en(e._path);
      },
      _bringToBack: function(e) {
        tn(e._path);
      }
    });
    ue.vml && wn.include(Rc);
    function To(e) {
      return ue.svg || ue.vml ? new wn(e) : null;
    }
    De.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(e) {
        var n = e.options.renderer || this._getPaneRenderer(e.options.pane) || this.options.renderer || this._renderer;
        return n || (n = this._renderer = this._createRenderer()), this.hasLayer(n) || this.addLayer(n), n;
      },
      _getPaneRenderer: function(e) {
        if (e === "overlayPane" || e === void 0)
          return !1;
        var n = this._paneRenderers[e];
        return n === void 0 && (n = this._createRenderer({ pane: e }), this._paneRenderers[e] = n), n;
      },
      _createRenderer: function(e) {
        return this.options.preferCanvas && No(e) || To(e);
      }
    });
    var Po = rn.extend({
      initialize: function(e, n) {
        rn.prototype.initialize.call(this, this._boundsToLatLngs(e), n);
      },
      // @method setBounds(latLngBounds: LatLngBounds): this
      // Redraws the rectangle with the passed bounds.
      setBounds: function(e) {
        return this.setLatLngs(this._boundsToLatLngs(e));
      },
      _boundsToLatLngs: function(e) {
        return e = q(e), [
          e.getSouthWest(),
          e.getNorthWest(),
          e.getNorthEast(),
          e.getSouthEast()
        ];
      }
    });
    function Bc(e, n) {
      return new Po(e, n);
    }
    wn.create = ta, wn.pointsToPath = he, bi.geometryToLayer = Kn, bi.coordsToLatLng = Ka, bi.coordsToLatLngs = qn, bi.latLngToCoords = qa, bi.latLngsToCoords = Yn, bi.getFeature = on, bi.asFeature = Jn, De.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Eo = _i.extend({
      initialize: function(e) {
        this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
      },
      addHooks: function() {
        je(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function() {
        Qe(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function() {
        return this._moved;
      },
      _destroy: function() {
        lt(this._pane), delete this._pane;
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
        this._clearDeferredResetState(), this._resetState(), mn(), Ea(), this._startPoint = this._map.mouseEventToContainerPoint(e), je(document, {
          contextmenu: Zi,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(e) {
        this._moved || (this._moved = !0, this._box = We("div", "leaflet-zoom-box", this._container), Pe(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
        var n = new Z(this._point, this._startPoint), r = n.getSize();
        ft(this._box, n.min), this._box.style.width = r.x + "px", this._box.style.height = r.y + "px";
      },
      _finish: function() {
        this._moved && (lt(this._box), pt(this._container, "leaflet-crosshair")), pn(), Ia(), Qe(document, {
          contextmenu: Zi,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(e) {
        if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(m(this._resetState, this), 0);
          var n = new H(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(n).fire("boxzoomend", { boxZoomBounds: n });
        }
      },
      _onKeyDown: function(e) {
        e.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    De.addInitHook("addHandler", "boxZoom", Eo), De.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var Io = _i.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(e) {
        var n = this._map, r = n.getZoom(), l = n.options.zoomDelta, d = e.originalEvent.shiftKey ? r - l : r + l;
        n.options.doubleClickZoom === "center" ? n.setZoom(d) : n.setZoomAround(e.containerPoint, d);
      }
    });
    De.addInitHook("addHandler", "doubleClickZoom", Io), De.mergeOptions({
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
    var Lo = _i.extend({
      addHooks: function() {
        if (!this._draggable) {
          var e = this._map;
          this._draggable = new Pi(e._mapPane, e._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
        }
        Pe(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        pt(this._map._container, "leaflet-grab"), pt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
          var n = q(this._map.options.maxBounds);
          this._offsetLimit = z(
            this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(e) {
        if (this._map.options.inertia) {
          var n = this._lastTime = +/* @__PURE__ */ new Date(), r = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(r), this._times.push(n), this._prunePositions(n);
        }
        this._map.fire("move", e).fire("drag", e);
      },
      _prunePositions: function(e) {
        for (; this._positions.length > 1 && e - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var e = this._map.getSize().divideBy(2), n = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = n.subtract(e).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(e, n) {
        return e - (e - n) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var e = this._draggable._newPos.subtract(this._draggable._startPos), n = this._offsetLimit;
          e.x < n.min.x && (e.x = this._viscousLimit(e.x, n.min.x)), e.y < n.min.y && (e.y = this._viscousLimit(e.y, n.min.y)), e.x > n.max.x && (e.x = this._viscousLimit(e.x, n.max.x)), e.y > n.max.y && (e.y = this._viscousLimit(e.y, n.max.y)), this._draggable._newPos = this._draggable._startPos.add(e);
        }
      },
      _onPreDragWrap: function() {
        var e = this._worldWidth, n = Math.round(e / 2), r = this._initialWorldOffset, l = this._draggable._newPos.x, d = (l - n + r) % e + n - r, u = (l + n + r) % e - n - r, y = Math.abs(d + r) < Math.abs(u + r) ? d : u;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = y;
      },
      _onDragEnd: function(e) {
        var n = this._map, r = n.options, l = !r.inertia || e.noInertia || this._times.length < 2;
        if (n.fire("dragend", e), l)
          n.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), u = (this._lastTime - this._times[0]) / 1e3, y = r.easeLinearity, k = d.multiplyBy(y / u), S = k.distanceTo([0, 0]), K = Math.min(r.inertiaMaxSpeed, S), oe = k.multiplyBy(K / S), xe = K / (r.inertiaDeceleration * y), Ie = oe.multiplyBy(-xe / 2).round();
          !Ie.x && !Ie.y ? n.fire("moveend") : (Ie = n._limitOffset(Ie, n.options.maxBounds), F(function() {
            n.panBy(Ie, {
              duration: xe,
              easeLinearity: y,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    De.addInitHook("addHandler", "dragging", Lo), De.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Ao = _i.extend({
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
        this._removeHooks(), Qe(this._map._container, {
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
          var e = document.body, n = document.documentElement, r = e.scrollTop || n.scrollTop, l = e.scrollLeft || n.scrollLeft;
          this._map._container.focus(), window.scrollTo(l, r);
        }
      },
      _onFocus: function() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function(e) {
        var n = this._panKeys = {}, r = this.keyCodes, l, d;
        for (l = 0, d = r.left.length; l < d; l++)
          n[r.left[l]] = [-1 * e, 0];
        for (l = 0, d = r.right.length; l < d; l++)
          n[r.right[l]] = [e, 0];
        for (l = 0, d = r.down.length; l < d; l++)
          n[r.down[l]] = [0, e];
        for (l = 0, d = r.up.length; l < d; l++)
          n[r.up[l]] = [0, -1 * e];
      },
      _setZoomDelta: function(e) {
        var n = this._zoomKeys = {}, r = this.keyCodes, l, d;
        for (l = 0, d = r.zoomIn.length; l < d; l++)
          n[r.zoomIn[l]] = e;
        for (l = 0, d = r.zoomOut.length; l < d; l++)
          n[r.zoomOut[l]] = -e;
      },
      _addHooks: function() {
        je(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Qe(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(e) {
        if (!(e.altKey || e.ctrlKey || e.metaKey)) {
          var n = e.keyCode, r = this._map, l;
          if (n in this._panKeys) {
            if (!r._panAnim || !r._panAnim._inProgress)
              if (l = this._panKeys[n], e.shiftKey && (l = x(l).multiplyBy(3)), r.options.maxBounds && (l = r._limitOffset(x(l), r.options.maxBounds)), r.options.worldCopyJump) {
                var d = r.wrapLatLng(r.unproject(r.project(r.getCenter()).add(l)));
                r.panTo(d);
              } else
                r.panBy(l);
          } else if (n in this._zoomKeys)
            r.setZoom(r.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[n]);
          else if (n === 27 && r._popup && r._popup.options.closeOnEscapeKey)
            r.closePopup();
          else
            return;
          Zi(e);
        }
      }
    });
    De.addInitHook("addHandler", "keyboard", Ao), De.mergeOptions({
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
    var Mo = _i.extend({
      addHooks: function() {
        je(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Qe(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(e) {
        var n = ao(e), r = this._map.options.wheelDebounceTime;
        this._delta += n, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var l = Math.max(r - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(m(this._performZoom, this), l), Zi(e);
      },
      _performZoom: function() {
        var e = this._map, n = e.getZoom(), r = this._map.options.zoomSnap || 0;
        e._stop();
        var l = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(l)))) / Math.LN2, u = r ? Math.ceil(d / r) * r : d, y = e._limitZoom(n + (this._delta > 0 ? u : -u)) - n;
        this._delta = 0, this._startTime = null, y && (e.options.scrollWheelZoom === "center" ? e.setZoom(n + y) : e.setZoomAround(this._lastMousePos, n + y));
      }
    });
    De.addInitHook("addHandler", "scrollWheelZoom", Mo);
    var Fc = 600;
    De.mergeOptions({
      // @section Touch interaction options
      // @option tapHold: Boolean
      // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
      tapHold: ue.touchNative && ue.safari && ue.mobile,
      // @option tapTolerance: Number = 15
      // The max number of pixels a user can shift his finger during touch
      // for it to be considered a valid tap.
      tapTolerance: 15
    });
    var Oo = _i.extend({
      addHooks: function() {
        je(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Qe(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(e) {
        if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
          var n = e.touches[0];
          this._startPos = this._newPos = new E(n.clientX, n.clientY), this._holdTimeout = setTimeout(m(function() {
            this._cancel(), this._isTapValid() && (je(document, "touchend", Pt), je(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", n));
          }, this), Fc), je(document, "touchend touchcancel contextmenu", this._cancel, this), je(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function e() {
        Qe(document, "touchend", Pt), Qe(document, "touchend touchcancel", e);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), Qe(document, "touchend touchcancel contextmenu", this._cancel, this), Qe(document, "touchmove", this._onMove, this);
      },
      _onMove: function(e) {
        var n = e.touches[0];
        this._newPos = new E(n.clientX, n.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(e, n) {
        var r = new MouseEvent(e, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: n.screenX,
          screenY: n.screenY,
          clientX: n.clientX,
          clientY: n.clientY
          // button: 2,
          // buttons: 2
        });
        r._simulated = !0, n.target.dispatchEvent(r);
      }
    });
    De.addInitHook("addHandler", "tapHold", Oo), De.mergeOptions({
      // @section Touch interaction options
      // @option touchZoom: Boolean|String = *
      // Whether the map can be zoomed by touch-dragging with two fingers. If
      // passed `'center'`, it will zoom to the center of the view regardless of
      // where the touch events (fingers) were. Enabled for touch-capable web
      // browsers.
      touchZoom: ue.touch,
      // @option bounceAtZoomLimits: Boolean = true
      // Set it to false if you don't want the map to zoom beyond min/max zoom
      // and then bounce back when pinch-zooming.
      bounceAtZoomLimits: !0
    });
    var Ro = _i.extend({
      addHooks: function() {
        Pe(this._map._container, "leaflet-touch-zoom"), je(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        pt(this._map._container, "leaflet-touch-zoom"), Qe(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(e) {
        var n = this._map;
        if (!(!e.touches || e.touches.length !== 2 || n._animatingZoom || this._zooming)) {
          var r = n.mouseEventToContainerPoint(e.touches[0]), l = n.mouseEventToContainerPoint(e.touches[1]);
          this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), n.options.touchZoom !== "center" && (this._pinchStartLatLng = n.containerPointToLatLng(r.add(l)._divideBy(2))), this._startDist = r.distanceTo(l), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), je(document, "touchmove", this._onTouchMove, this), je(document, "touchend touchcancel", this._onTouchEnd, this), Pt(e);
        }
      },
      _onTouchMove: function(e) {
        if (!(!e.touches || e.touches.length !== 2 || !this._zooming)) {
          var n = this._map, r = n.mouseEventToContainerPoint(e.touches[0]), l = n.mouseEventToContainerPoint(e.touches[1]), d = r.distanceTo(l) / this._startDist;
          if (this._zoom = n.getScaleZoom(d, this._startZoom), !n.options.bounceAtZoomLimits && (this._zoom < n.getMinZoom() && d < 1 || this._zoom > n.getMaxZoom() && d > 1) && (this._zoom = n._limitZoom(this._zoom)), n.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var u = r._add(l)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && u.x === 0 && u.y === 0)
              return;
            this._center = n.unproject(n.project(this._pinchStartLatLng, this._zoom).subtract(u), this._zoom);
          }
          this._moved || (n._moveStart(!0, !1), this._moved = !0), Q(this._animRequest);
          var y = m(n._move, n, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = F(y, this, !0), Pt(e);
        }
      },
      _onTouchEnd: function() {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        this._zooming = !1, Q(this._animRequest), Qe(document, "touchmove", this._onTouchMove, this), Qe(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    De.addInitHook("addHandler", "touchZoom", Ro), De.BoxZoom = Eo, De.DoubleClickZoom = Io, De.Drag = Lo, De.Keyboard = Ao, De.ScrollWheelZoom = Mo, De.TapHold = Oo, De.TouchZoom = Ro, a.Bounds = Z, a.Browser = ue, a.CRS = me, a.Canvas = jo, a.Circle = Ga, a.CircleMarker = Gn, a.Class = ge, a.Control = ai, a.DivIcon = Co, a.DivOverlay = ui, a.DomEvent = nc, a.DomUtil = tc, a.Draggable = Pi, a.Evented = ce, a.FeatureGroup = gi, a.GeoJSON = bi, a.GridLayer = vn, a.Handler = _i, a.Icon = an, a.ImageOverlay = Xn, a.LatLng = ee, a.LatLngBounds = H, a.Layer = ri, a.LayerGroup = nn, a.LineUtil = fc, a.Map = De, a.Marker = Vn, a.Mixin = dc, a.Path = Ei, a.Point = E, a.PolyUtil = _c, a.Polygon = rn, a.Polyline = yi, a.Popup = Qn, a.PosAnimation = ro, a.Projection = gc, a.Rectangle = Po, a.Renderer = vi, a.SVG = wn, a.SVGOverlay = ko, a.TileLayer = sn, a.Tooltip = ea, a.Transformation = ae, a.Util = le, a.VideoOverlay = wo, a.bind = m, a.bounds = z, a.canvas = No, a.circle = Sc, a.circleMarker = Cc, a.control = gn, a.divIcon = Ac, a.extend = c, a.featureGroup = xc, a.geoJSON = xo, a.geoJson = Nc, a.gridLayer = Mc, a.icon = wc, a.imageOverlay = Tc, a.latLng = Y, a.latLngBounds = q, a.layerGroup = vc, a.map = ac, a.marker = kc, a.point = x, a.polygon = jc, a.polyline = zc, a.popup = Ic, a.rectangle = Bc, a.setOptions = j, a.stamp = f, a.svg = To, a.svgOverlay = Ec, a.tileLayer = So, a.tooltip = Lc, a.transformation = pe, a.version = o, a.videoOverlay = Pc;
    var Dc = window.L;
    a.noConflict = function() {
      return window.L = Dc, this;
    }, window.L = a;
  });
})(Or, Or.exports);
var Fi = Or.exports;
const zv = /* @__PURE__ */ td(Fi);
function Mn(t, i, a) {
  return Object.freeze({
    instance: t,
    context: i,
    container: a
  });
}
function On(t, i) {
  return i == null ? function(o, c) {
    const _ = ut(void 0);
    return _.current || (_.current = t(o, c)), _;
  } : function(o, c) {
    const _ = ut(void 0);
    _.current || (_.current = t(o, c));
    const m = ut(o), { instance: h } = _.current;
    return Re(function() {
      m.current !== o && (i(h, o, m.current), m.current = o);
    }, [
      h,
      o,
      i
    ]), _;
  };
}
function Sl(t, i) {
  Re(function() {
    return (i.layerContainer ?? i.map).addLayer(t.instance), function() {
      var _;
      (_ = i.layerContainer) == null || _.removeLayer(t.instance), i.map.removeLayer(t.instance);
    };
  }, [
    i,
    t
  ]);
}
function zl(t) {
  return function(a) {
    const o = An(), c = t(wa(a, o), o);
    return xl(o.map, a.attribution), Vr(c.current, a.eventHandlers), Sl(c.current, o), c;
  };
}
function jv(t, i) {
  const a = ut(void 0);
  Re(function() {
    if (i.pathOptions !== a.current) {
      const c = i.pathOptions ?? {};
      t.instance.setStyle(c), a.current = c;
    }
  }, [
    t,
    i
  ]);
}
function Nv(t) {
  return function(a) {
    const o = An(), c = t(wa(a, o), o);
    return Vr(c.current, a.eventHandlers), Sl(c.current, o), jv(c.current, a), c;
  };
}
function jl(t) {
  function i(c, _) {
    return Mn(t(c), _);
  }
  const a = On(i), o = Cv(a);
  return Cl(o);
}
function Tv(t, i) {
  const a = On(t, i), o = zl(a);
  return kl(o);
}
function Pv(t, i) {
  const a = On(t), o = Sv(a, i);
  return kv(o);
}
function Ev(t, i) {
  const a = On(t, i), o = Nv(a);
  return kl(o);
}
function Iv(t, i) {
  const a = On(t, i), o = zl(a);
  return Cl(o);
}
function Lv(t, i, a) {
  const { opacity: o, zIndex: c } = i;
  o != null && o !== a.opacity && t.setOpacity(o), c != null && c !== a.zIndex && t.setZIndex(c);
}
function Av() {
  return An().map;
}
function Mv({ bounds: t, boundsOptions: i, center: a, children: o, className: c, id: _, placeholder: m, style: h, whenReady: f, zoom: g, ...b }, v) {
  const [C] = At({
    className: c,
    id: _,
    style: h
  }), [w, I] = At(null), j = ut(void 0);
  pa(v, () => (w == null ? void 0 : w.map) ?? null, [
    w
  ]);
  const A = Je((X) => {
    if (X !== null && !j.current) {
      const W = new Fi.Map(X, b);
      j.current = W, a != null && g != null ? W.setView(a, g) : t != null && W.fitBounds(t, i), f != null && W.whenReady(f), I(wv(W));
    }
  }, []);
  Re(() => () => {
    w == null || w.map.remove();
  }, [
    w
  ]);
  const O = w ? /* @__PURE__ */ Fe.createElement(Hr, {
    value: w
  }, o) : m ?? null;
  return /* @__PURE__ */ Fe.createElement("div", {
    ...C,
    ref: A
  }, O);
}
const Ov = /* @__PURE__ */ Ae(Mv), Rv = Tv(function({ position: i, ...a }, o) {
  const c = new Fi.Marker(i, a);
  return Mn(c, wl(o, {
    overlayContainer: c
  }));
}, function(i, a, o) {
  a.position !== o.position && i.setLatLng(a.position), a.icon != null && a.icon !== o.icon && i.setIcon(a.icon), a.zIndexOffset != null && a.zIndexOffset !== o.zIndexOffset && i.setZIndexOffset(a.zIndexOffset), a.opacity != null && a.opacity !== o.opacity && i.setOpacity(a.opacity), i.dragging != null && a.draggable !== o.draggable && (a.draggable === !0 ? i.dragging.enable() : i.dragging.disable());
}), Bv = Ev(function({ positions: i, ...a }, o) {
  const c = new Fi.Polygon(i, a);
  return Mn(c, wl(o, {
    overlayContainer: c
  }));
}, function(i, a, o) {
  a.positions !== o.positions && i.setLatLngs(a.positions);
}), us = Pv(function(i, a) {
  const o = new Fi.Popup(i, a.overlayContainer);
  return Mn(o, a);
}, function(i, a, { position: o }, c) {
  Re(function() {
    const { instance: m } = i;
    function h(g) {
      g.popup === m && (m.update(), c(!0));
    }
    function f(g) {
      g.popup === m && c(!1);
    }
    return a.map.on({
      popupopen: h,
      popupclose: f
    }), a.overlayContainer == null ? (o != null && m.setLatLng(o), m.openOn(a.map)) : a.overlayContainer.bindPopup(m), function() {
      var b;
      a.map.off({
        popupopen: h,
        popupclose: f
      }), (b = a.overlayContainer) == null || b.unbindPopup(), a.map.removeLayer(m);
    };
  }, [
    i,
    a,
    c,
    o
  ]);
}), Fv = jl(function(i) {
  return new Fi.Control.Scale(i);
}), Dv = Iv(function({ url: i, ...a }, o) {
  const c = new Fi.TileLayer(i, wa(a, o));
  return Mn(c, o);
}, function(i, a, o) {
  Lv(i, a, o);
  const { url: c } = a;
  c != null && c !== o.url && i.setUrl(c);
}), $v = jl(function(i) {
  return new Fi.Control.Zoom(i);
}), Wv = {
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
}, Nl = (t) => Wv[t], $t = {}, Uv = (t, i) => {
  if (t && typeof t == "string")
    return new zv.DivIcon({
      html: `<span style="font-size: 1.5em; color: ${i || "inherit"}">${t}</span>`
    });
}, Zv = (t) => {
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
}, Tl = Ae(
  ({
    kind: t,
    componentId: i,
    children: a,
    className: o = "",
    center: c,
    markers: _ = [],
    regions: m = [],
    zoom: h,
    minZoom: f,
    maxZoom: g,
    interactive: b,
    zoomable: v,
    pannable: C,
    rotatable: w,
    showZoomControls: I,
    showLayerControls: j,
    showScale: A,
    showCompass: O,
    showFullscreen: X,
    showGrid: W,
    showCoordinates: U,
    showMinimap: N,
    showFogOfWar: T,
    variant: J,
    size: V,
    aspectRatio: B,
    borderRadius: G,
    onClick: F,
    onMarkerClick: Q,
    onRegionClick: le,
    onZoomChange: ge,
    onCenterChange: ie,
    ...ne
  }, ce) => {
    const E = Nl(t), te = ha(), x = i || `map-${te}`, Z = dn();
    Re(() => (Z(
      Pm({
        mapId: x,
        updates: {
          currentZoom: h ?? E.zoom ?? 1,
          currentCenter: c ?? E.center ?? { lat: 0, lng: 0 }
        }
      })
    ), () => {
      Z(Dr(x));
    }), [
      Z,
      x,
      h,
      E.zoom,
      c,
      E.center
    ]);
    const z = ni(
      Fm(x)
    ), H = (z == null ? void 0 : z.currentZoom) ?? h ?? E.zoom ?? 1, q = (z == null ? void 0 : z.currentCenter) ?? c ?? E.center ?? { lat: 0, lng: 0 };
    ut(null);
    const ee = {
      ...E,
      center: c ?? E.center,
      zoom: h ?? E.zoom,
      minZoom: f ?? E.minZoom,
      maxZoom: g ?? E.maxZoom,
      interactive: b ?? E.interactive,
      zoomable: v ?? E.zoomable,
      pannable: C ?? E.pannable,
      rotatable: w ?? E.rotatable,
      showZoomControls: I ?? E.showZoomControls,
      showLayerControls: j ?? E.showLayerControls,
      showScale: A ?? E.showScale,
      showCompass: O ?? E.showCompass,
      showFullscreen: X ?? E.showFullscreen,
      showGrid: W ?? E.showGrid,
      showCoordinates: U ?? E.showCoordinates,
      showMinimap: N ?? E.showMinimap,
      showFogOfWar: T ?? E.showFogOfWar,
      variant: J ?? E.variant,
      size: V ?? E.size,
      aspectRatio: B ?? E.aspectRatio,
      borderRadius: G ?? E.borderRadius
    }, Y = [
      $t.map,
      $t[`map--${ee.kind}`],
      $t[`map--${ee.variant}`],
      $t[`map--${ee.size}`],
      ee.interactive && $t["map--interactive"],
      o
    ].filter(Boolean).join(" "), me = () => ee.showGrid ? /* @__PURE__ */ s.jsx(p, { className: $t.map__grid }) : null, de = () => ee.showCoordinates ? /* @__PURE__ */ s.jsxs(p, { className: $t.map__coordinates, children: [
      q.lat.toFixed(4),
      ",",
      " ",
      q.lng.toFixed(4)
    ] }) : null, Me = () => ee.showCompass ? /* @__PURE__ */ s.jsx(p, { className: $t.map__compass, children: /* @__PURE__ */ s.jsx(p, { className: $t.map__compass_needle, children: "🧭" }) }) : null, Ee = () => ee.showMinimap ? /* @__PURE__ */ s.jsx(p, { className: $t.map__minimap, children: /* @__PURE__ */ s.jsx(p, { className: $t.map__minimap_content, children: /* @__PURE__ */ s.jsx(
      p,
      {
        className: $t.map__minimap_viewport
      }
    ) }) }) : null, ae = _.filter(
      ($) => $.position && typeof $.position.lat == "number" && typeof $.position.lng == "number"
    ), pe = m.filter(
      ($) => Array.isArray($.coordinates) && $.coordinates.length > 0
    ), we = {
      aspectRatio: ee.aspectRatio,
      borderRadius: ee.borderRadius,
      width: "100%",
      height: "100%"
    }, re = [
      q.lat,
      q.lng
    ], Se = Number(H);
    function he() {
      return Av().on("click", (R) => {
        ee.interactive && F && F({ lat: R.latlng.lat, lng: R.latlng.lng });
      }), null;
    }
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        ref: ce,
        className: Y,
        style: we,
        ...ne,
        children: [
          /* @__PURE__ */ s.jsxs(
            Ov,
            {
              center: re,
              zoom: Se,
              minZoom: ee.minZoom,
              maxZoom: ee.maxZoom,
              style: {
                width: "100%",
                height: "100%",
                borderRadius: ee.borderRadius
              },
              scrollWheelZoom: !!ee.zoomable,
              zoomControl: !1,
              children: [
                /* @__PURE__ */ s.jsx(he, {}),
                /* @__PURE__ */ s.jsx(
                  Dv,
                  {
                    attribution: "© OpenStreetMap contributors",
                    url: Zv(ee.variant)
                  }
                ),
                ae.map(($) => /* @__PURE__ */ s.jsx(
                  Rv,
                  {
                    position: [
                      $.position.lat,
                      $.position.lng
                    ],
                    icon: Uv(
                      $.icon,
                      $.color
                    ),
                    eventHandlers: $.clickable && Q ? {
                      click: () => Q($)
                    } : void 0,
                    children: $.title && /* @__PURE__ */ s.jsx(us, { children: $.title })
                  },
                  $.id
                )),
                pe.map(($) => /* @__PURE__ */ s.jsx(
                  Bv,
                  {
                    positions: $.coordinates.map((R) => [
                      R.lat,
                      R.lng
                    ]),
                    pathOptions: {
                      color: $.color || "#3388ff",
                      fillColor: $.fillColor || $.color || "#3388ff",
                      fillOpacity: $.fillOpacity ?? 0.2,
                      weight: $.strokeWidth ?? 2
                    },
                    eventHandlers: $.clickable && le ? {
                      click: () => le($)
                    } : void 0,
                    children: $.title && /* @__PURE__ */ s.jsx(us, { children: $.title })
                  },
                  $.id
                )),
                ee.showZoomControls && /* @__PURE__ */ s.jsx($v, { position: "topright" }),
                ee.showScale && /* @__PURE__ */ s.jsx(Fv, { position: "bottomleft" })
              ]
            }
          ),
          Me(),
          de(),
          Ee(),
          me(),
          ee.showFogOfWar && /* @__PURE__ */ s.jsx(
            p,
            {
              className: $t.map__fog_of_war
            }
          ),
          a && /* @__PURE__ */ s.jsx(p, { className: $t.map__custom, children: a })
        ]
      }
    );
  }
);
Tl.displayName = "Map";
const Hv = oi(Tl);
class yt {
  static create(i) {
    return Fe.forwardRef(
      (a, o) => Fe.createElement(Hv, {
        ref: o,
        ...i,
        ...a
      })
    );
  }
  static createFromKind(i) {
    const a = Nl(i);
    return this.create(a);
  }
}
const Tj = {
  // Map views
  WorldMap: yt.createFromKind("world-map"),
  RegionMap: yt.createFromKind("region-map"),
  CityMap: yt.createFromKind("city-map"),
  StreetMap: yt.createFromKind("street-map"),
  SatelliteMap: yt.createFromKind("satellite-map"),
  TerrainMap: yt.createFromKind("terrain-map"),
  // Interactive maps
  InteractiveMap: yt.createFromKind(
    "interactive-map"
  ),
  GameMap: yt.createFromKind("game-map"),
  FloorPlan: yt.createFromKind("floor-plan"),
  CampusMap: yt.createFromKind("campus-map"),
  // Markers and indicators
  LocationMarker: yt.createFromKind(
    "location-marker"
  ),
  RegionClaimMarker: yt.createFromKind(
    "region-claim-marker"
  ),
  PlayerPresenceIndicator: yt.createFromKind(
    "player-presence-indicator"
  ),
  POIMarker: yt.createFromKind("poi-marker"),
  ClusterMarker: yt.createFromKind(
    "cluster-marker"
  ),
  // Game-specific
  TerritoryMap: yt.createFromKind("territory-map"),
  BattleMap: yt.createFromKind("battle-map"),
  ResourceMap: yt.createFromKind("resource-map"),
  MiniMap: yt.createFromKind("mini-map"),
  RadarView: yt.createFromKind("radar-view")
}, Vv = {
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
}, Pl = (t) => Vv[t], Gv = "_container_1o5u3_144", Kv = "_flex_1o5u3_275", qv = "_grid_1o5u3_371", Yv = "_relative_1o5u3_753", Jv = "_absolute_1o5u3_757", Xv = "_fixed_1o5u3_761", Qv = "_sticky_1o5u3_765", e1 = "_truncate_1o5u3_904", t1 = "_border_1o5u3_964", i1 = "_rounded_1o5u3_1004", n1 = "_shadow_1o5u3_1036", a1 = "_transition_1o5u3_1108", r1 = "_small_1o5u3_1608", o1 = "_large_1o5u3_1612", s1 = "_card_1o5u3_1660", l1 = "_media_1o5u3_1785", c1 = "_media__avatar_1o5u3_1849", d1 = "_media__image_1o5u3_1850", _1 = "_media__video_1o5u3_1866", u1 = "_media__content_1o5u3_1885", m1 = "_media__image_container_1o5u3_1946", p1 = "_media__fallback_1o5u3_1974", h1 = "_media__video_container_1o5u3_1985", f1 = "_media__play_button_1o5u3_2005", g1 = "_media__audio_container_1o5u3_2038", y1 = "_media__audio_cover_1o5u3_2044", b1 = "_media__audio_1o5u3_2038", v1 = "_media__overlay_1o5u3_2074", x1 = "_media__overlay_title_1o5u3_2089", w1 = "_media__overlay_description_1o5u3_2095", k1 = "_media__metadata_1o5u3_2099", C1 = "_media__metadata_title_1o5u3_2104", S1 = "_media__metadata_description_1o5u3_2112", z1 = "_media__metadata_details_1o5u3_2119", j1 = "_media__metadata_author_1o5u3_2131", N1 = "_media__metadata_duration_1o5u3_2131", T1 = "_media__metadata_size_1o5u3_2131", P1 = "_media__metadata_tags_1o5u3_2135", E1 = "_media__metadata_tag_1o5u3_2135", I1 = "_media__actions_1o5u3_2156", L1 = "_media__action_1o5u3_2156", A1 = "_media__action_icon_1o5u3_2311", M1 = "_media__action_label_1o5u3_2316", O1 = "_media__custom_1o5u3_2319", Ne = {
  container: Gv,
  "container-sm": "_container-sm_1o5u3_160",
  "container-md": "_container-md_1o5u3_176",
  "container-lg": "_container-lg_1o5u3_192",
  "container-xl": "_container-xl_1o5u3_208",
  "container-2xl": "_container-2xl_1o5u3_224",
  "safe-area": "_safe-area_1o5u3_240",
  "overflow-hidden": "_overflow-hidden_1o5u3_246",
  "overflow-auto": "_overflow-auto_1o5u3_250",
  "overflow-x-auto": "_overflow-x-auto_1o5u3_255",
  "overflow-y-auto": "_overflow-y-auto_1o5u3_261",
  "box-border": "_box-border_1o5u3_267",
  "box-content": "_box-content_1o5u3_271",
  flex: Kv,
  "flex-col": "_flex-col_1o5u3_279",
  "flex-row": "_flex-row_1o5u3_284",
  "flex-wrap": "_flex-wrap_1o5u3_289",
  "flex-nowrap": "_flex-nowrap_1o5u3_294",
  "flex-center": "_flex-center_1o5u3_299",
  "flex-between": "_flex-between_1o5u3_305",
  "justify-start": "_justify-start_1o5u3_311",
  "justify-center": "_justify-center_1o5u3_315",
  "justify-end": "_justify-end_1o5u3_319",
  "justify-between": "_justify-between_1o5u3_323",
  "justify-around": "_justify-around_1o5u3_327",
  "items-start": "_items-start_1o5u3_331",
  "items-center": "_items-center_1o5u3_335",
  "items-end": "_items-end_1o5u3_339",
  "items-stretch": "_items-stretch_1o5u3_343",
  "flex-1": "_flex-1_1o5u3_347",
  "flex-auto": "_flex-auto_1o5u3_351",
  "flex-none": "_flex-none_1o5u3_355",
  "flex-grow": "_flex-grow_1o5u3_359",
  "flex-shrink": "_flex-shrink_1o5u3_363",
  "flex-shrink-0": "_flex-shrink-0_1o5u3_367",
  grid: qv,
  "grid-auto-fit": "_grid-auto-fit_1o5u3_375",
  "grid-auto-fill": "_grid-auto-fill_1o5u3_382",
  "grid-cols-1": "_grid-cols-1_1o5u3_389",
  "grid-cols-2": "_grid-cols-2_1o5u3_393",
  "grid-cols-3": "_grid-cols-3_1o5u3_397",
  "grid-cols-4": "_grid-cols-4_1o5u3_401",
  "grid-cols-6": "_grid-cols-6_1o5u3_405",
  "grid-cols-12": "_grid-cols-12_1o5u3_409",
  "gap-0": "_gap-0_1o5u3_413",
  "gap-1": "_gap-1_1o5u3_417",
  "gap-2": "_gap-2_1o5u3_421",
  "gap-3": "_gap-3_1o5u3_425",
  "gap-4": "_gap-4_1o5u3_429",
  "gap-5": "_gap-5_1o5u3_433",
  "gap-6": "_gap-6_1o5u3_437",
  "gap-8": "_gap-8_1o5u3_441",
  "gap-10": "_gap-10_1o5u3_445",
  "gap-12": "_gap-12_1o5u3_449",
  "p-0": "_p-0_1o5u3_453",
  "p-1": "_p-1_1o5u3_457",
  "p-2": "_p-2_1o5u3_461",
  "p-3": "_p-3_1o5u3_465",
  "p-4": "_p-4_1o5u3_469",
  "p-5": "_p-5_1o5u3_473",
  "p-6": "_p-6_1o5u3_477",
  "p-8": "_p-8_1o5u3_481",
  "p-10": "_p-10_1o5u3_485",
  "p-12": "_p-12_1o5u3_489",
  "px-0": "_px-0_1o5u3_493",
  "px-1": "_px-1_1o5u3_498",
  "px-2": "_px-2_1o5u3_503",
  "px-3": "_px-3_1o5u3_508",
  "px-4": "_px-4_1o5u3_513",
  "px-6": "_px-6_1o5u3_518",
  "py-0": "_py-0_1o5u3_523",
  "py-1": "_py-1_1o5u3_528",
  "py-2": "_py-2_1o5u3_533",
  "py-3": "_py-3_1o5u3_538",
  "py-4": "_py-4_1o5u3_543",
  "py-6": "_py-6_1o5u3_548",
  "m-0": "_m-0_1o5u3_553",
  "m-1": "_m-1_1o5u3_557",
  "m-2": "_m-2_1o5u3_561",
  "m-3": "_m-3_1o5u3_565",
  "m-4": "_m-4_1o5u3_569",
  "m-auto": "_m-auto_1o5u3_573",
  "mx-auto": "_mx-auto_1o5u3_577",
  "my-auto": "_my-auto_1o5u3_582",
  "mx-0": "_mx-0_1o5u3_587",
  "mx-1": "_mx-1_1o5u3_592",
  "mx-2": "_mx-2_1o5u3_597",
  "mx-3": "_mx-3_1o5u3_602",
  "mx-4": "_mx-4_1o5u3_607",
  "my-0": "_my-0_1o5u3_612",
  "my-1": "_my-1_1o5u3_617",
  "my-2": "_my-2_1o5u3_622",
  "my-3": "_my-3_1o5u3_627",
  "my-4": "_my-4_1o5u3_632",
  "w-full": "_w-full_1o5u3_637",
  "w-auto": "_w-auto_1o5u3_641",
  "w-fit": "_w-fit_1o5u3_645",
  "w-min": "_w-min_1o5u3_649",
  "w-max": "_w-max_1o5u3_653",
  "max-w-none": "_max-w-none_1o5u3_657",
  "max-w-xs": "_max-w-xs_1o5u3_661",
  "max-w-sm": "_max-w-sm_1o5u3_665",
  "max-w-md": "_max-w-md_1o5u3_669",
  "max-w-lg": "_max-w-lg_1o5u3_673",
  "max-w-xl": "_max-w-xl_1o5u3_677",
  "max-w-2xl": "_max-w-2xl_1o5u3_681",
  "max-w-3xl": "_max-w-3xl_1o5u3_685",
  "max-w-4xl": "_max-w-4xl_1o5u3_689",
  "max-w-5xl": "_max-w-5xl_1o5u3_693",
  "max-w-6xl": "_max-w-6xl_1o5u3_697",
  "max-w-7xl": "_max-w-7xl_1o5u3_701",
  "max-w-full": "_max-w-full_1o5u3_705",
  "min-w-0": "_min-w-0_1o5u3_709",
  "min-w-full": "_min-w-full_1o5u3_713",
  "h-auto": "_h-auto_1o5u3_717",
  "h-fit": "_h-fit_1o5u3_721",
  "h-full": "_h-full_1o5u3_725",
  "h-screen": "_h-screen_1o5u3_729",
  "max-h-full": "_max-h-full_1o5u3_733",
  "max-h-screen": "_max-h-screen_1o5u3_737",
  "min-h-0": "_min-h-0_1o5u3_741",
  "min-h-full": "_min-h-full_1o5u3_745",
  "min-h-screen": "_min-h-screen_1o5u3_749",
  relative: Yv,
  absolute: Jv,
  fixed: Xv,
  sticky: Qv,
  static: "_static_1o5u3_769",
  "inset-0": "_inset-0_1o5u3_773",
  "top-0": "_top-0_1o5u3_780",
  "right-0": "_right-0_1o5u3_784",
  "bottom-0": "_bottom-0_1o5u3_788",
  "left-0": "_left-0_1o5u3_792",
  "text-left": "_text-left_1o5u3_796",
  "text-center": "_text-center_1o5u3_800",
  "text-right": "_text-right_1o5u3_804",
  "text-justify": "_text-justify_1o5u3_808",
  "text-xs": "_text-xs_1o5u3_812",
  "text-sm": "_text-sm_1o5u3_816",
  "text-base": "_text-base_1o5u3_820",
  "text-lg": "_text-lg_1o5u3_824",
  "text-xl": "_text-xl_1o5u3_828",
  "text-2xl": "_text-2xl_1o5u3_832",
  "text-3xl": "_text-3xl_1o5u3_836",
  "text-4xl": "_text-4xl_1o5u3_840",
  "font-normal": "_font-normal_1o5u3_844",
  "font-medium": "_font-medium_1o5u3_848",
  "font-semibold": "_font-semibold_1o5u3_852",
  "font-bold": "_font-bold_1o5u3_856",
  "leading-tight": "_leading-tight_1o5u3_860",
  "leading-normal": "_leading-normal_1o5u3_864",
  "leading-relaxed": "_leading-relaxed_1o5u3_868",
  "text-primary": "_text-primary_1o5u3_872",
  "text-secondary": "_text-secondary_1o5u3_876",
  "text-muted": "_text-muted_1o5u3_880",
  "text-inverse": "_text-inverse_1o5u3_884",
  "text-blue": "_text-blue_1o5u3_888",
  "text-red": "_text-red_1o5u3_892",
  "text-green": "_text-green_1o5u3_896",
  "text-yellow": "_text-yellow_1o5u3_900",
  truncate: e1,
  "text-ellipsis": "_text-ellipsis_1o5u3_911",
  "text-clip": "_text-clip_1o5u3_918",
  "bg-transparent": "_bg-transparent_1o5u3_924",
  "bg-white": "_bg-white_1o5u3_928",
  "bg-gray-50": "_bg-gray-50_1o5u3_932",
  "bg-gray-100": "_bg-gray-100_1o5u3_936",
  "bg-gray-200": "_bg-gray-200_1o5u3_940",
  "bg-primary": "_bg-primary_1o5u3_944",
  "bg-secondary": "_bg-secondary_1o5u3_948",
  "bg-success": "_bg-success_1o5u3_952",
  "bg-danger": "_bg-danger_1o5u3_956",
  "bg-warning": "_bg-warning_1o5u3_960",
  border: t1,
  "border-0": "_border-0_1o5u3_968",
  "border-t": "_border-t_1o5u3_972",
  "border-r": "_border-r_1o5u3_976",
  "border-b": "_border-b_1o5u3_980",
  "border-l": "_border-l_1o5u3_984",
  "border-gray-200": "_border-gray-200_1o5u3_988",
  "border-gray-300": "_border-gray-300_1o5u3_992",
  "border-primary": "_border-primary_1o5u3_996",
  "border-danger": "_border-danger_1o5u3_1000",
  "rounded-none": "_rounded-none_1o5u3_1004",
  "rounded-sm": "_rounded-sm_1o5u3_1008",
  rounded: i1,
  "rounded-md": "_rounded-md_1o5u3_1016",
  "rounded-lg": "_rounded-lg_1o5u3_1020",
  "rounded-xl": "_rounded-xl_1o5u3_1024",
  "rounded-2xl": "_rounded-2xl_1o5u3_1028",
  "rounded-full": "_rounded-full_1o5u3_1032",
  "shadow-none": "_shadow-none_1o5u3_1036",
  "shadow-sm": "_shadow-sm_1o5u3_1040",
  shadow: n1,
  "shadow-md": "_shadow-md_1o5u3_1048",
  "shadow-lg": "_shadow-lg_1o5u3_1052",
  "shadow-xl": "_shadow-xl_1o5u3_1056",
  "z-0": "_z-0_1o5u3_1060",
  "z-10": "_z-10_1o5u3_1064",
  "z-20": "_z-20_1o5u3_1068",
  "z-30": "_z-30_1o5u3_1072",
  "z-40": "_z-40_1o5u3_1076",
  "z-50": "_z-50_1o5u3_1080",
  "z-auto": "_z-auto_1o5u3_1084",
  "z-dropdown": "_z-dropdown_1o5u3_1088",
  "z-sticky": "_z-sticky_1o5u3_1092",
  "z-fixed": "_z-fixed_1o5u3_1096",
  "z-modal": "_z-modal_1o5u3_1100",
  "z-tooltip": "_z-tooltip_1o5u3_1104",
  "transition-none": "_transition-none_1o5u3_1108",
  "transition-all": "_transition-all_1o5u3_1112",
  "transition-fast": "_transition-fast_1o5u3_1116",
  "transition-slow": "_transition-slow_1o5u3_1120",
  "sr-only": "_sr-only_1o5u3_1124",
  "focus-ring": "_focus-ring_1o5u3_1136",
  "cursor-default": "_cursor-default_1o5u3_1142",
  "cursor-pointer": "_cursor-pointer_1o5u3_1146",
  "cursor-not-allowed": "_cursor-not-allowed_1o5u3_1150",
  "select-none": "_select-none_1o5u3_1154",
  "select-text": "_select-text_1o5u3_1158",
  "select-all": "_select-all_1o5u3_1162",
  "select-auto": "_select-auto_1o5u3_1166",
  "pointer-events-none": "_pointer-events-none_1o5u3_1170",
  "pointer-events-auto": "_pointer-events-auto_1o5u3_1174",
  "gap-sm": "_gap-sm_1o5u3_1178",
  "gap-md": "_gap-md_1o5u3_1182",
  "gap-lg": "_gap-lg_1o5u3_1186",
  "gap-xl": "_gap-xl_1o5u3_1190",
  "p-sm": "_p-sm_1o5u3_1194",
  "p-md": "_p-md_1o5u3_1198",
  "p-lg": "_p-lg_1o5u3_1202",
  "p-xl": "_p-xl_1o5u3_1206",
  "m-sm": "_m-sm_1o5u3_1210",
  "m-md": "_m-md_1o5u3_1214",
  "m-lg": "_m-lg_1o5u3_1218",
  "m-xl": "_m-xl_1o5u3_1222",
  "text-gray": "_text-gray_1o5u3_1226",
  "mobile:hidden": "_mobile:hidden_1o5u3_1231",
  "mobile:block": "_mobile:block_1o5u3_1234",
  "mobile:flex": "_mobile:flex_1o5u3_1237",
  "mobile:grid": "_mobile:grid_1o5u3_1240",
  "mobile:text-sm": "_mobile:text-sm_1o5u3_1243",
  "mobile:text-xs": "_mobile:text-xs_1o5u3_1246",
  "mobile:p-2": "_mobile:p-2_1o5u3_1249",
  "mobile:px-2": "_mobile:px-2_1o5u3_1252",
  "tablet:block": "_tablet:block_1o5u3_1258",
  "tablet:flex": "_tablet:flex_1o5u3_1261",
  "tablet:grid": "_tablet:grid_1o5u3_1264",
  "tablet:hidden": "_tablet:hidden_1o5u3_1267",
  "desktop:block": "_desktop:block_1o5u3_1272",
  "desktop:flex": "_desktop:flex_1o5u3_1275",
  "desktop:grid": "_desktop:grid_1o5u3_1278",
  "desktop:hidden": "_desktop:hidden_1o5u3_1281",
  "bg-gray": "_bg-gray_1o5u3_932",
  "border-secondary": "_border-secondary_1o5u3_1305",
  "border-gray": "_border-gray_1o5u3_988",
  "shadow-glow": "_shadow-glow_1o5u3_1341",
  "w-8": "_w-8_1o5u3_1389",
  "w-10": "_w-10_1o5u3_1393",
  "w-12": "_w-12_1o5u3_1397",
  "w-16": "_w-16_1o5u3_1401",
  "h-8": "_h-8_1o5u3_1405",
  "h-10": "_h-10_1o5u3_1409",
  "h-12": "_h-12_1o5u3_1413",
  "h-16": "_h-16_1o5u3_1417",
  "user-select-none": "_user-select-none_1o5u3_1433",
  transition: a1,
  "transition-colors": "_transition-colors_1o5u3_1441",
  "transition-transform": "_transition-transform_1o5u3_1445",
  "hover-scale": "_hover-scale_1o5u3_1449",
  "fade-in": "_fade-in_1o5u3_1456",
  "status-online": "_status-online_1o5u3_1468",
  "status-offline": "_status-offline_1o5u3_1478",
  "status-away": "_status-away_1o5u3_1488",
  "status-busy": "_status-busy_1o5u3_1498",
  "modal-overlay": "_modal-overlay_1o5u3_1508",
  "modal-content": "_modal-content_1o5u3_1522",
  "close-button-absolute": "_close-button-absolute_1o5u3_1536",
  small: r1,
  large: o1,
  "primary-button": "_primary-button_1o5u3_1617",
  "secondary-button": "_secondary-button_1o5u3_1621",
  card: s1,
  "input-base": "_input-base_1o5u3_1674",
  "chat-window": "_chat-window_1o5u3_1706",
  "chat-message": "_chat-message_1o5u3_1717",
  "z-overlay": "_z-overlay_1o5u3_1742",
  "mobile-hidden": "_mobile-hidden_1o5u3_1747",
  "mobile-flex-col": "_mobile-flex-col_1o5u3_1750",
  "mobile-text-center": "_mobile-text-center_1o5u3_1753",
  "mobile-p-sm": "_mobile-p-sm_1o5u3_1756",
  "mobile-gap-sm": "_mobile-gap-sm_1o5u3_1759",
  "desktop-hidden": "_desktop-hidden_1o5u3_1764",
  "print-hidden": "_print-hidden_1o5u3_1769",
  media: l1,
  "media--xs": "_media--xs_1o5u3_1792",
  "media--sm": "_media--sm_1o5u3_1796",
  "media--md": "_media--md_1o5u3_1800",
  "media--lg": "_media--lg_1o5u3_1804",
  "media--xl": "_media--xl_1o5u3_1808",
  "media--2xl": "_media--2xl_1o5u3_1812",
  "media--image-card": "_media--image-card_1o5u3_1816",
  "media--video-card": "_media--video-card_1o5u3_1816",
  "media--audio-card": "_media--audio-card_1o5u3_1816",
  "media--document-card": "_media--document-card_1o5u3_1816",
  "media--gallery-card": "_media--gallery-card_1o5u3_1816",
  "media--image-viewer": "_media--image-viewer_1o5u3_1841",
  "media--video-player": "_media--video-player_1o5u3_1841",
  "media--video-embed": "_media--video-embed_1o5u3_1841",
  "media--live-stream": "_media--live-stream_1o5u3_1841",
  "media--screen-share": "_media--screen-share_1o5u3_1841",
  "media--presentation-viewer": "_media--presentation-viewer_1o5u3_1841",
  "media--circle": "_media--circle_1o5u3_1849",
  media__avatar: c1,
  media__image: d1,
  "media--square": "_media--square_1o5u3_1853",
  "media--rounded": "_media--rounded_1o5u3_1857",
  "media--pill": "_media--pill_1o5u3_1861",
  "media--cover": "_media--cover_1o5u3_1865",
  media__video: _1,
  "media--contain": "_media--contain_1o5u3_1869",
  "media--fill": "_media--fill_1o5u3_1873",
  "media--scale-down": "_media--scale-down_1o5u3_1877",
  "media--none": "_media--none_1o5u3_1881",
  "media--default": "_media--default_1o5u3_1885",
  media__content: u1,
  "media--bordered": "_media--bordered_1o5u3_1889",
  "media--shadow": "_media--shadow_1o5u3_1892",
  "media--glass": "_media--glass_1o5u3_1895",
  "media--gradient": "_media--gradient_1o5u3_1900",
  "media--clickable": "_media--clickable_1o5u3_1903",
  media__image_container: m1,
  "media--loaded": "_media--loaded_1o5u3_1968",
  "media--error": "_media--error_1o5u3_1971",
  media__fallback: p1,
  media__video_container: h1,
  media__play_button: f1,
  media__audio_container: g1,
  media__audio_cover: y1,
  media__audio: b1,
  media__overlay: v1,
  media__overlay_title: x1,
  media__overlay_description: w1,
  media__metadata: k1,
  media__metadata_title: C1,
  media__metadata_description: S1,
  media__metadata_details: z1,
  media__metadata_author: j1,
  media__metadata_duration: N1,
  media__metadata_size: T1,
  media__metadata_tags: P1,
  media__metadata_tag: E1,
  media__actions: I1,
  media__action: L1,
  "media__action--primary": "_media__action--primary_1o5u3_2200",
  "media__action--secondary": "_media__action--secondary_1o5u3_2238",
  "media__action--ghost": "_media__action--ghost_1o5u3_2276",
  media__action_icon: A1,
  media__action_label: M1,
  media__custom: O1,
  "skeleton-shimmer": "_skeleton-shimmer_1o5u3_1",
  "loading-shimmer": "_loading-shimmer_1o5u3_1"
}, El = Ae(
  ({
    kind: t,
    componentId: i,
    children: a,
    className: o = "",
    src: c,
    sources: _,
    alt: m,
    title: h,
    description: f,
    placeholder: g,
    fallbackIcon: b,
    lazy: v,
    autoPlay: C,
    controls: w,
    muted: I,
    loop: j,
    clickable: A,
    draggable: O,
    actions: X,
    metadata: W,
    showOverlay: U,
    showMetadata: N,
    showActions: T,
    variant: J,
    size: V,
    shape: B,
    fit: G,
    aspectRatio: F,
    maxWidth: Q,
    maxHeight: le,
    borderRadius: ge,
    onClick: ie,
    onLoad: ne,
    onError: ce,
    onPlay: E,
    onPause: te,
    onEnded: x,
    ...Z
  }, z) => {
    const H = Pl(t), q = ha(), ee = i || `media-${q}`, Y = dn();
    Re(() => (Y(
      dr({
        mediaId: ee,
        updates: {
          isLoading: !1,
          hasError: !1,
          isPlaying: !1,
          hasLoaded: !1
        }
      })
    ), () => {
      Y(Dr(ee));
    }), [Y, ee]);
    const me = ni(
      Bm(ee)
    ), de = (me == null ? void 0 : me.hasError) || !1, Me = (me == null ? void 0 : me.hasLoaded) || !1, Ee = ut(null), ae = {
      ...H,
      alt: m ?? H.alt,
      placeholder: g ?? H.placeholder,
      fallbackIcon: b ?? H.fallbackIcon,
      lazy: v ?? H.lazy,
      autoPlay: C ?? H.autoPlay,
      controls: w ?? H.controls,
      muted: I ?? H.muted,
      loop: j ?? H.loop,
      clickable: A ?? H.clickable,
      draggable: O ?? H.draggable,
      actions: X ?? H.actions,
      showOverlay: U ?? H.showOverlay,
      showMetadata: N ?? H.showMetadata,
      showActions: T ?? H.showActions,
      variant: J ?? H.variant,
      size: V ?? H.size,
      shape: B ?? H.shape,
      fit: G ?? H.fit,
      aspectRatio: F ?? H.aspectRatio,
      maxWidth: Q ?? H.maxWidth,
      maxHeight: le ?? H.maxHeight,
      borderRadius: ge ?? H.borderRadius
    }, pe = [
      Ne.media,
      Ne[`media--${ae.kind}`],
      Ne[`media--${ae.variant}`],
      Ne[`media--${ae.size}`],
      ae.shape && Ne[`media--${ae.shape}`],
      Ne[`media--${ae.fit}`],
      ae.clickable && Ne["media--clickable"],
      Me && Ne["media--loaded"],
      de && Ne["media--error"],
      o
    ].filter(Boolean).join(" "), we = () => {
      Y(
        dr({
          mediaId: ee,
          updates: { hasLoaded: !0, hasError: !1 }
        })
      ), ne == null || ne();
    }, re = () => {
      Y(
        dr({
          mediaId: ee,
          updates: { hasError: !0, hasLoaded: !1 }
        })
      ), ce == null || ce();
    }, Se = () => {
      ae.clickable && ie && ie();
    }, he = () => {
      const ve = de ? ae.placeholder : c;
      return /* @__PURE__ */ s.jsx(p, { className: Ne.media__avatar, children: ve ? /* @__PURE__ */ s.jsx(
        "img",
        {
          src: ve,
          alt: ae.alt,
          loading: ae.lazy ? "lazy" : "eager",
          draggable: ae.draggable,
          onLoad: we,
          onError: re,
          className: Ne.media__image
        }
      ) : /* @__PURE__ */ s.jsx(p, { className: Ne.media__fallback, children: ae.fallbackIcon }) });
    }, $ = () => {
      const ve = de ? ae.placeholder : c;
      return /* @__PURE__ */ s.jsxs(p, { className: Ne.media__image_container, children: [
        ve ? /* @__PURE__ */ s.jsx(
          "img",
          {
            ref: Ee,
            src: ve,
            alt: ae.alt,
            loading: ae.lazy ? "lazy" : "eager",
            draggable: ae.draggable,
            onLoad: we,
            onError: re,
            className: Ne.media__image
          }
        ) : /* @__PURE__ */ s.jsx(p, { className: Ne.media__fallback, children: ae.fallbackIcon || "🖼️" }),
        ae.showOverlay && /* @__PURE__ */ s.jsxs(p, { className: Ne.media__overlay, children: [
          h && /* @__PURE__ */ s.jsx(
            p,
            {
              className: Ne.media__overlay_title,
              children: h
            }
          ),
          f && /* @__PURE__ */ s.jsx(
            p,
            {
              className: Ne.media__overlay_description,
              children: f
            }
          )
        ] })
      ] });
    }, R = () => /* @__PURE__ */ s.jsxs(p, { className: Ne.media__video_container, children: [
      /* @__PURE__ */ s.jsxs(
        "video",
        {
          ref: Ee,
          src: c,
          controls: ae.controls,
          autoPlay: ae.autoPlay,
          muted: ae.muted,
          loop: ae.loop,
          onPlay: E,
          onPause: te,
          onEnded: x,
          onLoadedData: we,
          onError: re,
          className: Ne.media__video,
          children: [
            _ == null ? void 0 : _.map((ve, Ue) => /* @__PURE__ */ s.jsx(
              "source",
              {
                src: ve.src,
                type: ve.type,
                media: ve.media
              },
              Ue
            )),
            "Your browser does not support the video tag."
          ]
        }
      ),
      ae.showOverlay && !ae.controls && /* @__PURE__ */ s.jsx(p, { className: Ne.media__overlay, children: /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: "icon",
          className: Ne.media__play_button,
          onClick: () => {
            const ve = Ee.current;
            ve && (ve.paused ? ve.play() : ve.pause());
          },
          "aria-label": "Play/Pause video",
          icon: "▶️"
        }
      ) })
    ] }), Le = () => /* @__PURE__ */ s.jsxs(p, { className: Ne.media__audio_container, children: [
      (t === "audio-card" || t === "podcast-player") && c && /* @__PURE__ */ s.jsx(p, { className: Ne.media__audio_cover, children: /* @__PURE__ */ s.jsx(
        "img",
        {
          src: c,
          alt: ae.alt,
          className: Ne.media__image,
          onLoad: we,
          onError: re
        }
      ) }),
      /* @__PURE__ */ s.jsxs(
        "audio",
        {
          ref: Ee,
          src: c,
          controls: ae.controls,
          autoPlay: ae.autoPlay,
          muted: ae.muted,
          loop: ae.loop,
          onPlay: E,
          onPause: te,
          onEnded: x,
          onLoadedData: we,
          onError: re,
          className: Ne.media__audio,
          children: [
            _ == null ? void 0 : _.map((ve, Ue) => /* @__PURE__ */ s.jsx(
              "source",
              {
                src: ve.src,
                type: ve.type
              },
              Ue
            )),
            "Your browser does not support the audio tag."
          ]
        }
      )
    ] }), Xe = () => t.includes("avatar") ? he() : t.includes("video") || t.includes("stream") || t.includes("presentation") ? R() : t.includes("audio") || t.includes("podcast") || t.includes("voice") || t.includes("waveform") ? Le() : $(), qe = () => !ae.showMetadata || !W ? null : /* @__PURE__ */ s.jsxs(p, { className: Ne.media__metadata, children: [
      W.title && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Ne.media__metadata_title,
          children: W.title
        }
      ),
      W.description && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Ne.media__metadata_description,
          children: W.description
        }
      ),
      /* @__PURE__ */ s.jsxs(
        p,
        {
          className: Ne.media__metadata_details,
          children: [
            W.author && /* @__PURE__ */ s.jsx(
              "span",
              {
                className: Ne.media__metadata_author,
                children: W.author
              }
            ),
            W.duration && /* @__PURE__ */ s.jsx(
              "span",
              {
                className: Ne.media__metadata_duration,
                children: W.duration
              }
            ),
            W.fileSize && /* @__PURE__ */ s.jsx("span", { className: Ne.media__metadata_size, children: W.fileSize })
          ]
        }
      ),
      W.tags && W.tags.length > 0 && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Ne.media__metadata_tags,
          children: W.tags.map((ve, Ue) => /* @__PURE__ */ s.jsx(
            "span",
            {
              className: Ne.media__metadata_tag,
              children: ve
            },
            Ue
          ))
        }
      )
    ] }), Ke = () => {
      var ve;
      return !ae.showActions || !((ve = ae.actions) != null && ve.length) ? null : /* @__PURE__ */ s.jsx(p, { className: Ne.media__actions, children: ae.actions.map((Ue) => /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: Ue.variant || "secondary",
          onClick: Ue.onClick,
          disabled: Ue.disabled,
          className: [
            Ne.media__action,
            Ne[`media__action--${Ue.variant || "secondary"}`]
          ].join(" "),
          "aria-label": Ue.label,
          icon: Ue.icon,
          children: /* @__PURE__ */ s.jsx("span", { className: Ne.media__action_label, children: Ue.label })
        },
        Ue.id
      )) });
    }, $e = {
      aspectRatio: ae.aspectRatio,
      maxWidth: ae.maxWidth,
      maxHeight: ae.maxHeight,
      borderRadius: ae.borderRadius
    };
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        ref: z,
        className: pe,
        style: $e,
        onClick: Se,
        role: ae.clickable ? "button" : void 0,
        tabIndex: ae.clickable ? 0 : void 0,
        ...Z,
        children: [
          /* @__PURE__ */ s.jsx(p, { className: Ne.media__content, children: Xe() }),
          qe(),
          Ke(),
          a && /* @__PURE__ */ s.jsx(p, { className: Ne.media__custom, children: a })
        ]
      }
    );
  }
);
El.displayName = "Media";
const R1 = oi(El);
class Ye {
  static create(i) {
    return Fe.forwardRef(
      (a, o) => Fe.createElement(R1, {
        ref: o,
        ...i,
        ...a
      })
    );
  }
  static createFromKind(i) {
    const a = Pl(i);
    return this.create(a);
  }
}
const Pj = {
  // Avatar types
  UserAvatar: Ye.createFromKind("user-avatar"),
  SystemAvatar: Ye.createFromKind("system-avatar"),
  BotAvatar: Ye.createFromKind("bot-avatar"),
  GuestAvatar: Ye.createFromKind("guest-avatar"),
  AdminAvatar: Ye.createFromKind("admin-avatar"),
  TeamAvatar: Ye.createFromKind("team-avatar"),
  OrganizationAvatar: Ye.createFromKind(
    "organization-avatar"
  ),
  // Media cards
  ImageCard: Ye.createFromKind("image-card"),
  VideoCard: Ye.createFromKind("video-card"),
  AudioCard: Ye.createFromKind("audio-card"),
  DocumentCard: Ye.createFromKind("document-card"),
  GalleryCard: Ye.createFromKind("gallery-card"),
  ThumbnailCard: Ye.createFromKind(
    "thumbnail-card"
  ),
  // Video players
  VideoPlayer: Ye.createFromKind("video-player"),
  VideoEmbed: Ye.createFromKind("video-embed"),
  LiveStream: Ye.createFromKind("live-stream"),
  ScreenShare: Ye.createFromKind("screen-share"),
  PresentationViewer: Ye.createFromKind(
    "presentation-viewer"
  ),
  // Image components
  ImageViewer: Ye.createFromKind("image-viewer"),
  ImageGallery: Ye.createFromKind("image-gallery"),
  ImageCarousel: Ye.createFromKind(
    "image-carousel"
  ),
  ImageGrid: Ye.createFromKind("image-grid"),
  ImageComparison: Ye.createFromKind(
    "image-comparison"
  ),
  // Audio components
  AudioPlayer: Ye.createFromKind("audio-player"),
  PodcastPlayer: Ye.createFromKind(
    "podcast-player"
  ),
  VoiceRecorder: Ye.createFromKind(
    "voice-recorder"
  ),
  WaveformVisualizer: Ye.createFromKind(
    "waveform-visualizer"
  )
}, B1 = "_modalOverlay_tlj10_131", F1 = "_modalContent_tlj10_145", D1 = "_fadeIn_tlj10_1", $1 = "_slideUp_tlj10_1", W1 = "_slideDown_tlj10_1", U1 = "_scaleIn_tlj10_1", Z1 = "_modalMessage_tlj10_250", H1 = "_modalTitle_tlj10_258", V1 = "_modalBody_tlj10_266", G1 = "_modalHeader_tlj10_273", K1 = "_modalFooter_tlj10_396", q1 = "_endGameContent_tlj10_404", Y1 = "_statisticsContent_tlj10_417", J1 = "_userInfo_tlj10_417", X1 = "_userAvatar_tlj10_425", Q1 = "_userName_tlj10_432", ex = "_userEmail_tlj10_436", tx = "_statsGrid_tlj10_440", ix = "_guestMessage_tlj10_443", nx = "_purchaseContent_tlj10_453", ax = "_itemPreview_tlj10_456", rx = "_itemImage_tlj10_468", ox = "_priceSection_tlj10_474", sx = "_priceLabel_tlj10_483", lx = "_priceValue_tlj10_486", cx = "_error_tlj10_491", dx = "_success_tlj10_496", _x = "_vsModeContent_tlj10_503", ux = "_searchingState_tlj10_506", mx = "_spinner_tlj10_509", px = "_spin_tlj10_509", hx = "_modeOptions_tlj10_521", fx = "_modeButton_tlj10_526", gx = "_vsRoomContent_tlj10_540", yx = "_roomSection_tlj10_540", bx = "_roomInput_tlj10_549", vx = "_statRow_tlj10_570", xx = "_statLabel_tlj10_581", wx = "_statValue_tlj10_586", Ce = {
  modalOverlay: B1,
  modalContent: F1,
  "modal-xs": "_modal-xs_tlj10_179",
  "modal-small": "_modal-small_tlj10_183",
  "modal-medium": "_modal-medium_tlj10_187",
  "modal-large": "_modal-large_tlj10_191",
  "modal-xl": "_modal-xl_tlj10_195",
  "modal-fullscreen": "_modal-fullscreen_tlj10_199",
  "modal-auto": "_modal-auto_tlj10_206",
  "modal-top": "_modal-top_tlj10_211",
  "modal-bottom": "_modal-bottom_tlj10_216",
  "modal-left": "_modal-left_tlj10_221",
  "modal-right": "_modal-right_tlj10_226",
  "modal-fade": "_modal-fade_tlj10_231",
  fadeIn: D1,
  "modal-slide-up": "_modal-slide-up_tlj10_235",
  slideUp: $1,
  "modal-slide-down": "_modal-slide-down_tlj10_239",
  slideDown: W1,
  "modal-scale": "_modal-scale_tlj10_243",
  scaleIn: U1,
  "confirmation-modal": "_confirmation-modal_tlj10_247",
  modalMessage: Z1,
  "alert-modal": "_alert-modal_tlj10_255",
  modalTitle: H1,
  "form-modal": "_form-modal_tlj10_266",
  modalBody: V1,
  "fullscreen-modal": "_fullscreen-modal_tlj10_270",
  modalHeader: G1,
  "pre-game-modal": "_pre-game-modal_tlj10_277",
  "end-game-modal": "_end-game-modal_tlj10_290",
  "rules-modal": "_rules-modal_tlj10_295",
  "statistics-modal": "_statistics-modal_tlj10_308",
  "purchase-modal": "_purchase-modal_tlj10_312",
  "sign-in-modal": "_sign-in-modal_tlj10_316",
  "custom-puzzle-modal": "_custom-puzzle-modal_tlj10_325",
  "share-content-modal": "_share-content-modal_tlj10_329",
  "vs-mode-modal": "_vs-mode-modal_tlj10_336",
  "vs-room-modal": "_vs-room-modal_tlj10_340",
  "overlay-only-modal": "_overlay-only-modal_tlj10_344",
  "sidebar-modal": "_sidebar-modal_tlj10_350",
  "toast-modal": "_toast-modal_tlj10_360",
  modalFooter: K1,
  endGameContent: q1,
  statisticsContent: Y1,
  userInfo: J1,
  userAvatar: X1,
  userName: Q1,
  userEmail: ex,
  statsGrid: tx,
  guestMessage: ix,
  purchaseContent: nx,
  itemPreview: ax,
  itemImage: rx,
  priceSection: ox,
  priceLabel: sx,
  priceValue: lx,
  error: cx,
  success: dx,
  vsModeContent: _x,
  searchingState: ux,
  spinner: mx,
  spin: px,
  modeOptions: hx,
  modeButton: fx,
  vsRoomContent: gx,
  roomSection: yx,
  roomInput: bx,
  statRow: vx,
  statLabel: xx,
  statValue: wx,
  "loading-shimmer": "_loading-shimmer_tlj10_1"
}, kx = {
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
}, Cx = (t) => kx[t], Sx = (t, i = {}) => ({ ...Cx(t), ...i }), Rn = {
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
}, Ej = (t) => Rn.gameFlow.includes(t), Ij = (t) => Rn.versus.includes(t), Lj = (t) => Rn.commerce.includes(t), Aj = (t) => Rn.interactions.includes(t), Mj = (t) => Rn.layouts.includes(t), Il = ({
  kind: t,
  modalId: i,
  title: a,
  message: o,
  children: c,
  confirmText: _,
  cancelText: m,
  onConfirm: h,
  onCancel: f,
  onSubmit: g,
  submitText: b,
  // Game-specific props
  score: v,
  attemptsLeft: C,
  burnBonus: w,
  win: I,
  finishTime: j,
  user: A,
  session: O,
  signIn: X,
  // VS mode props
  isSearching: W,
  roomCode: U,
  onCreateRoom: N,
  onJoinRoom: T,
  onSelect: J,
  // Purchase props
  item: V,
  onPurchase: B,
  // Rules props
  columnCount: G = 4,
  mode: F = "daily",
  wildcardsActive: Q,
  // Statistics props
  dailyCompleted: le,
  // Visual overrides
  size: ge,
  position: ie,
  animation: ne,
  showCloseButton: ce,
  showHeader: E,
  showFooter: te,
  // Configuration overrides
  configOverrides: x,
  onClose: Z,
  className: z = "",
  contentClassName: H = "",
  open: q = !0,
  ...ee
}) => {
  if (!q) return null;
  const Y = Sx(t, {
    ...ge && { size: ge },
    ...ie && { position: ie },
    ...ne && {
      animation: ne
    },
    ...ce !== void 0 && {
      showCloseButton: ce
    },
    ...E !== void 0 && {
      showHeader: E
    },
    ...te !== void 0 && {
      showFooter: te
    },
    ...x
  }), me = i || `${t}-${Date.now()}`, de = $r(), Me = Ci(
    (Oe) => cp(Oe, me)
  ), Ee = Ci(
    (Oe) => dp(Oe, me)
  ), ae = Ci(
    (Oe) => _p(Oe, me)
  ), pe = Ci(
    (Oe) => up(Oe, me)
  ), we = (Me == null ? void 0 : Me.roomCode) || U || "";
  Re(() => {
    de(
      sp({
        id: me,
        data: { roomCode: U || "" }
      })
    );
  }, [de, me, U]);
  const re = a || Y.defaultTitle, Se = o || Y.defaultMessage, he = _ || Y.primaryButtonText || "Confirm", $ = m || Y.secondaryButtonText || "Cancel", R = b || Y.primaryButtonText || "Submit", Le = [
    Ce.Modal,
    Ce[`modal-${Y.size}`],
    Ce[`modal-${Y.position}`],
    Ce[`modal-${Y.animation}`],
    Y.className && Ce[Y.className],
    z
  ].filter(Boolean).join(" "), Xe = () => Y.showHeader ? /* @__PURE__ */ s.jsxs(
    p,
    {
      className: `${Ce.modalHeader} ${Y.headerClassName || ""}`.trim(),
      children: [
        re && /* @__PURE__ */ s.jsx("h2", { className: Ce.modalTitle, children: re }),
        Y.showCloseButton && /* @__PURE__ */ s.jsx(ke, { kind: "close", onClick: Z })
      ]
    }
  ) : null, qe = () => {
    const Oe = `${Ce.modalBody} ${Y.bodyClassName || ""}`.trim();
    return Y.customBody ? /* @__PURE__ */ s.jsx(p, { className: Oe, children: Ke() }) : /* @__PURE__ */ s.jsxs(p, { className: Oe, children: [
      Se && /* @__PURE__ */ s.jsx("p", { className: Ce.modalMessage, children: Se }),
      c
    ] });
  }, Ke = () => {
    switch (t) {
      case "end-game":
        return /* @__PURE__ */ s.jsxs(p, { className: Ce.endGameContent, children: [
          /* @__PURE__ */ s.jsx("h2", { children: I ? "You Win!" : "Game Over" }),
          v !== void 0 && /* @__PURE__ */ s.jsxs(p, { className: Ce.statRow, children: [
            /* @__PURE__ */ s.jsx("span", { children: "Score:" }),
            " ",
            /* @__PURE__ */ s.jsx("span", { children: v })
          ] }),
          C !== void 0 && /* @__PURE__ */ s.jsxs(p, { className: Ce.statRow, children: [
            /* @__PURE__ */ s.jsx("span", { children: "Attempts Left:" }),
            " ",
            /* @__PURE__ */ s.jsx("span", { children: C })
          ] }),
          w !== void 0 && /* @__PURE__ */ s.jsxs(p, { className: Ce.statRow, children: [
            /* @__PURE__ */ s.jsx("span", { children: "Burn Bonus:" }),
            " ",
            /* @__PURE__ */ s.jsx("span", { children: w })
          ] }),
          j && /* @__PURE__ */ s.jsxs(p, { className: Ce.statRow, children: [
            /* @__PURE__ */ s.jsx("span", { children: "Finish Time:" }),
            " ",
            /* @__PURE__ */ s.jsx("span", { children: j })
          ] }),
          c
        ] });
      case "statistics":
        const Oe = {
          completed: 58,
          winPercentage: 78,
          currentStreak: 0,
          maxStreak: 5,
          perfectPuzzles: 20
        };
        return /* @__PURE__ */ s.jsxs(p, { className: Ce.statisticsContent, children: [
          A && /* @__PURE__ */ s.jsxs(p, { className: Ce.userInfo, children: [
            /* @__PURE__ */ s.jsx(
              "img",
              {
                src: A.photoUrl || "/default-avatar.png",
                alt: A.name,
                className: Ce.userAvatar
              }
            ),
            /* @__PURE__ */ s.jsxs(p, { children: [
              /* @__PURE__ */ s.jsx(p, { className: Ce.userName, children: A.name }),
              /* @__PURE__ */ s.jsx(p, { className: Ce.userEmail, children: A.email })
            ] })
          ] }),
          /* @__PURE__ */ s.jsx(p, { className: Ce.statsGrid, children: Object.entries(Oe).map(
            ([jt, It]) => /* @__PURE__ */ s.jsxs(
              p,
              {
                className: Ce.statRow,
                children: [
                  /* @__PURE__ */ s.jsx("span", { className: Ce.statLabel, children: jt.replace(/([A-Z])/g, " $1").replace(
                    /^./,
                    (Nt) => Nt.toUpperCase()
                  ) }),
                  /* @__PURE__ */ s.jsxs("span", { className: Ce.statValue, children: [
                    It,
                    jt.includes("Percentage") ? "%" : ""
                  ] })
                ]
              },
              jt
            )
          ) }),
          !A && /* @__PURE__ */ s.jsx(p, { className: Ce.guestMessage, children: "Sign in to track your statistics across devices" }),
          c
        ] });
      case "purchase":
        return /* @__PURE__ */ s.jsxs(p, { className: Ce.purchaseContent, children: [
          V && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsxs(p, { className: Ce.itemPreview, children: [
              V.previewUrl && /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: V.previewUrl,
                  alt: V.name,
                  className: Ce.itemImage
                }
              ),
              /* @__PURE__ */ s.jsx("h3", { children: V.label || V.name }),
              V.description && /* @__PURE__ */ s.jsx("p", { children: V.description })
            ] }),
            /* @__PURE__ */ s.jsxs(p, { className: Ce.priceSection, children: [
              /* @__PURE__ */ s.jsx("span", { className: Ce.priceLabel, children: "Price:" }),
              /* @__PURE__ */ s.jsxs("span", { className: Ce.priceValue, children: [
                V.price,
                " ",
                V.currency || "coins"
              ] })
            ] })
          ] }),
          ae && /* @__PURE__ */ s.jsx(p, { className: Ce.error, children: ae }),
          pe && /* @__PURE__ */ s.jsx(p, { className: Ce.success, children: "Purchase successful!" }),
          c
        ] });
      case "vs-mode":
        return /* @__PURE__ */ s.jsxs(p, { className: Ce.vsModeContent, children: [
          W ? /* @__PURE__ */ s.jsxs(p, { className: Ce.searchingState, children: [
            /* @__PURE__ */ s.jsx(
              p,
              {
                className: Ce.spinner
              }
            ),
            /* @__PURE__ */ s.jsx("p", { children: "Searching for opponent..." })
          ] }) : /* @__PURE__ */ s.jsxs(p, { className: Ce.modeOptions, children: [
            /* @__PURE__ */ s.jsx(
              ke,
              {
                kind: "secondary",
                onClick: () => J == null ? void 0 : J("room"),
                className: Ce.modeButton,
                children: "Private Room"
              }
            ),
            /* @__PURE__ */ s.jsx(
              ke,
              {
                kind: "secondary",
                onClick: () => J == null ? void 0 : J("matchmaking"),
                className: Ce.modeButton,
                children: "Quick Match"
              }
            ),
            /* @__PURE__ */ s.jsx(
              ke,
              {
                kind: "secondary",
                onClick: () => J == null ? void 0 : J("bot"),
                className: Ce.modeButton,
                children: "VS Bot"
              }
            )
          ] }),
          c
        ] });
      case "vs-room":
        return /* @__PURE__ */ s.jsxs(p, { className: Ce.vsRoomContent, children: [
          /* @__PURE__ */ s.jsxs(p, { className: Ce.roomSection, children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: "room-code", children: "Room Code:" }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: "room-code",
                type: "text",
                value: we,
                onChange: (jt) => de(
                  rs({
                    id: me,
                    field: "roomCode",
                    value: jt.target.value
                  })
                ),
                placeholder: "Enter room code",
                className: Ce.roomInput
              }
            ),
            ae && /* @__PURE__ */ s.jsx(p, { className: Ce.error, children: ae })
          ] }),
          c
        ] });
      case "share-content":
        return /* @__PURE__ */ s.jsx(s.Fragment, { children: c });
      default:
        return /* @__PURE__ */ s.jsx(s.Fragment, { children: c });
    }
  }, $e = () => {
    if (!Y.showFooter) return null;
    const Oe = `${Ce.modalFooter} ${Y.footerClassName || ""}`.trim();
    return /* @__PURE__ */ s.jsx(p, { className: Oe, children: ve() });
  }, ve = () => {
    switch (t) {
      case "confirmation":
        return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: Y.secondaryButtonKind || "secondary",
              onClick: f || Z,
              children: $
            }
          ),
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: Y.primaryButtonKind || "primary",
              onClick: h,
              children: he
            }
          )
        ] });
      case "alert":
        return /* @__PURE__ */ s.jsx(
          ke,
          {
            kind: Y.primaryButtonKind || "primary",
            onClick: Z,
            children: "OK"
          }
        );
      case "form":
        return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: Y.secondaryButtonKind || "secondary",
              onClick: Z,
              children: $
            }
          ),
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: Y.primaryButtonKind || "primary",
              onClick: g,
              children: R
            }
          )
        ] });
      case "pre-game":
        return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(ke, { kind: "secondary", onClick: f, children: $ }),
          /* @__PURE__ */ s.jsx(ke, { kind: "primary", onClick: h, children: he })
        ] });
      case "end-game":
        return /* @__PURE__ */ s.jsx(ke, { kind: "primary", onClick: h, children: "Share" });
      case "sign-in":
        return /* @__PURE__ */ s.jsx(
          ke,
          {
            kind: "primary",
            onClick: X || h,
            children: he
          }
        );
      case "purchase":
        return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(ke, { kind: "secondary", onClick: Z, children: "Cancel" }),
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: "primary",
              onClick: Ue,
              disabled: Ee || pe,
              children: Ee ? "Processing..." : pe ? "Success!" : he
            }
          )
        ] });
      case "vs-room":
        return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: "secondary",
              onClick: nt,
              children: "Create Room"
            }
          ),
          /* @__PURE__ */ s.jsx(ke, { kind: "primary", onClick: mt, children: "Join Room" })
        ] });
      case "custom-puzzle":
        return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(ke, { kind: "secondary", onClick: Z, children: $ }),
          /* @__PURE__ */ s.jsx(ke, { kind: "primary", onClick: h, children: he })
        ] });
      default:
        return null;
    }
  }, Ue = async () => {
    if (!(!B || !V)) {
      de(
        os({ id: me, loading: !0 })
      ), de(
        oa({ id: me, error: null })
      );
      try {
        await B(V), de(
          lp({ id: me, success: !0 })
        ), setTimeout(() => Z(), 1200);
      } catch (Oe) {
        de(
          oa({
            id: me,
            error: (Oe == null ? void 0 : Oe.message) || "Purchase failed."
          })
        );
      } finally {
        de(
          os({
            id: me,
            loading: !1
          })
        );
      }
    }
  }, nt = () => {
    const Oe = Math.random().toString(36).substring(2, 8).toUpperCase();
    de(
      rs({
        id: me,
        field: "roomCode",
        value: Oe
      })
    ), N == null || N(Oe);
  }, mt = () => {
    if (!we.trim()) {
      de(
        oa({
          id: me,
          error: "Please enter a room code."
        })
      );
      return;
    }
    de(
      oa({ id: me, error: null })
    ), T == null || T(we.trim());
  };
  return Re(() => {
    const Oe = (jt) => {
      jt.key === "Escape" && Y.closeOnEscape && Z();
    };
    if (Y.closeOnEscape)
      return document.addEventListener("keydown", Oe), () => document.removeEventListener(
        "keydown",
        Oe
      );
  }, [Y.closeOnEscape, Z]), Re(() => {
    if (Y.preventScroll)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "unset";
      };
  }, [Y.preventScroll]), /* @__PURE__ */ s.jsx(
    p,
    {
      className: `${Ce.modalOverlay} ${Le}`.trim(),
      onClick: Z,
      children: /* @__PURE__ */ s.jsxs(
        p,
        {
          className: `${Ce.modalContent} ${H}`.trim(),
          onClick: (Oe) => Oe.stopPropagation(),
          children: [
            Xe(),
            qe(),
            $e()
          ]
        }
      )
    }
  );
}, zx = ({
  kind: t,
  ...i
}) => /* @__PURE__ */ s.jsx(Il, { kind: t, ...i });
zx.displayName = "ModalFactory";
const Oj = {
  // Basic modals
  Alert: (t) => /* @__PURE__ */ s.jsx(M, { kind: "alert", ...t }),
  Confirm: (t) => /* @__PURE__ */ s.jsx(M, { kind: "confirmation", ...t }),
  Form: (t) => /* @__PURE__ */ s.jsx(M, { kind: "form", ...t }),
  // Game modals
  PreGame: (t) => /* @__PURE__ */ s.jsx(M, { kind: "pre-game", ...t }),
  EndGame: (t) => /* @__PURE__ */ s.jsx(M, { kind: "end-game", ...t }),
  Rules: (t) => /* @__PURE__ */ s.jsx(M, { kind: "rules", ...t }),
  Statistics: (t) => /* @__PURE__ */ s.jsx(M, { kind: "statistics", ...t }),
  // Commerce modals
  Purchase: (t) => /* @__PURE__ */ s.jsx(M, { kind: "purchase", ...t }),
  SignIn: (t) => /* @__PURE__ */ s.jsx(M, { kind: "sign-in", ...t }),
  // VS Mode modals
  VSMode: (t) => /* @__PURE__ */ s.jsx(M, { kind: "vs-mode", ...t }),
  VSRoom: (t) => /* @__PURE__ */ s.jsx(M, { kind: "vs-room", ...t }),
  // Utility modals
  Custom: (t) => /* @__PURE__ */ s.jsx(M, { kind: "custom", ...t }),
  Fullscreen: (t) => /* @__PURE__ */ s.jsx(M, { kind: "fullscreen", ...t })
}, Rj = {
  alert: (t, i, a) => ({
    kind: "alert",
    message: t,
    title: i,
    onClose: a,
    open: !0
  }),
  confirm: (t, i, a, o) => ({
    kind: "confirmation",
    message: t,
    title: o,
    onConfirm: i,
    onCancel: a,
    onClose: a,
    open: !0
  }),
  form: (t, i, a, o) => ({
    kind: "form",
    title: t,
    onSubmit: i,
    onCancel: a,
    onClose: a,
    children: o,
    open: !0
  })
};
class fi {
  /**
   * Create any modal with required props and optional overrides
   */
  static create(i, a, o, c = {}) {
    return /* @__PURE__ */ s.jsx(
      Il,
      {
        kind: i,
        open: a,
        onClose: o,
        ...c
      }
    );
  }
  // === CONFIRMATION MODALS ===
  static confirmation(i, a, o, c, _, m) {
    return this.create("confirmation", i, a, {
      title: o,
      message: c,
      onConfirm: _,
      onCancel: m || a
    });
  }
  // === ALERT MODALS ===
  static alert(i, a, o, c) {
    return this.create("alert", i, a, {
      title: o,
      message: c,
      onConfirm: a
    });
  }
  // === GAME MODALS ===
  static preGame(i, a, o, c) {
    return this.create("pre-game", i, a, {
      onConfirm: o,
      onCancel: c || a
    });
  }
  static endGame(i, a, o, c) {
    return this.create("end-game", i, a, {
      onConfirm: o,
      ...c
    });
  }
  static rules(i, a, o) {
    return this.create("rules", i, a, o);
  }
  static statistics(i, a) {
    return this.create("statistics", i, a);
  }
  // === VS MODE MODALS ===
  static vsMode(i, a, o, c) {
    return this.create("vs-mode", i, a, {
      onSelect: o,
      ...c
    });
  }
  static vsRoom(i, a, o, c, _) {
    return this.create("vs-room", i, a, {
      onCreateRoom: o,
      onJoinRoom: c,
      ..._
    });
  }
  // === COMMERCE MODALS ===
  static purchase(i, a, o, c, _) {
    return this.create("purchase", i, a, {
      item: o,
      onPurchase: c,
      user: _
    });
  }
  static signIn(i, a, o) {
    return this.create("sign-in", i, a, {
      onConfirm: o
    });
  }
  // === FORM MODALS ===
  static form(i, a, o, c, _, m) {
    return this.create("form", i, a, {
      title: o,
      onSubmit: c,
      onCancel: _ || a,
      submitText: m
    });
  }
  // === CUSTOM MODALS ===
  static customPuzzle(i, a, o) {
    return this.create("custom-puzzle", i, a, {
      children: o
    });
  }
  static shareContent(i, a, o) {
    return this.create("share-content", i, a, {
      children: o
    });
  }
  // === QUICK PRESETS ===
  static deleteConfirmation(i, a, o) {
    return this.confirmation(
      i,
      o || (() => {
      }),
      "Delete Item",
      "Are you sure you want to delete this item? This action cannot be undone.",
      a,
      o
    );
  }
  static saveConfirmation(i, a, o) {
    return this.confirmation(
      i,
      o || (() => {
      }),
      "Save Changes",
      "Do you want to save your changes before leaving?",
      a,
      o
    );
  }
  static errorAlert(i, a, o) {
    return this.alert(i, a, "Error", o);
  }
  static successAlert(i, a, o) {
    return this.alert(i, a, "Success", o);
  }
  static warningAlert(i, a, o) {
    return this.alert(i, a, "Warning", o);
  }
}
const Bj = {
  /**
   * Create predefined modal groups for game flow
   */
  createGameFlow: (t, i, a, o, c, _) => ({
    preGame: fi.create(
      "pre-game",
      t,
      i,
      {
        onConfirm: a,
        onCancel: o
      }
    ),
    endGame: fi.create(
      "end-game",
      t,
      i,
      {
        onConfirm: c,
        ..._
      }
    ),
    rules: fi.create(
      "rules",
      t,
      i,
      {}
    ),
    statistics: fi.create(
      "statistics",
      t,
      i,
      {}
    )
  }),
  /**
   * Create VS mode modal flow
   */
  createVSFlow: (t, i, a, o, c) => ({
    modeSelection: fi.create(
      "vs-mode",
      t,
      i,
      {
        onSelect: a
      }
    ),
    roomManagement: fi.create(
      "vs-room",
      t,
      i,
      {
        onCreateRoom: o,
        onJoinRoom: c
      }
    )
  }),
  /**
   * Create commerce modal flow
   */
  createCommerceFlow: (t, i, a, o, c, _) => ({
    purchase: fi.create(
      "purchase",
      t,
      i,
      {
        item: c,
        onPurchase: a,
        user: _
      }
    ),
    signIn: fi.create(
      "sign-in",
      t,
      i,
      {
        onConfirm: o
      }
    )
  })
};
function Fj() {
  const [t, i] = At({}), a = (f, g) => {
    i((b) => ({
      ...b,
      [f]: { open: !0, element: g }
    }));
  }, o = (f) => {
    i((g) => ({
      ...g,
      [f]: { ...g[f], open: !1 }
    }));
  }, c = () => {
    i({});
  }, _ = (f) => {
    var g;
    return ((g = t[f]) == null ? void 0 : g.open) || !1;
  }, m = (f, g, b, v) => {
    const C = fi.confirmation(
      !0,
      () => o(f),
      g,
      b,
      () => {
        v(), o(f);
      },
      () => o(f)
    );
    a(f, C);
  }, h = (f, g, b) => {
    const v = fi.alert(
      !0,
      () => o(f),
      g,
      b
    );
    a(f, v);
  };
  return {
    modals: Object.values(t).map(
      (f) => f.element
    ),
    open: a,
    close: o,
    closeAll: c,
    isOpen: _,
    showConfirmation: m,
    showAlert: h
  };
}
const jx = "_container_1tz0x_131", Nx = "_flex_1tz0x_262", Tx = "_grid_1tz0x_358", Px = "_relative_1tz0x_740", Ex = "_absolute_1tz0x_744", Ix = "_fixed_1tz0x_748", Lx = "_sticky_1tz0x_752", Ax = "_truncate_1tz0x_891", Mx = "_border_1tz0x_951", Ox = "_rounded_1tz0x_991", Rx = "_shadow_1tz0x_1023", Bx = "_transition_1tz0x_1095", Fx = "_small_1tz0x_1595", Dx = "_large_1tz0x_1599", $x = "_card_1tz0x_1647", Wx = "_Navigation_1tz0x_1772", Ux = "_navbarContainer_1tz0x_1918", Zx = "_navbarBrand_1tz0x_1940", Hx = "_navbarItems_1tz0x_1950", Vx = "_navbarItem_1tz0x_1950", Gx = "_navbarLink_1tz0x_1965", Kx = "_active_1tz0x_1997", qx = "_disabled_1tz0x_2002", Yx = "_navbarIcon_1tz0x_2008", Jx = "_navbarLabel_1tz0x_2016", Xx = "_navbarBadge_1tz0x_2023", Qx = "_mobileNavContainer_1tz0x_2040", ew = "_mobileNavItem_1tz0x_2063", tw = "_mobileNavIcon_1tz0x_2103", iw = "_mobileNavLabel_1tz0x_2108", nw = "_mobileNavBadge_1tz0x_2118", aw = "_breadcrumbsList_1tz0x_2145", rw = "_breadcrumbItem_1tz0x_2154", ow = "_breadcrumbLink_1tz0x_2160", sw = "_breadcrumbCurrent_1tz0x_2182", lw = "_breadcrumbSeparator_1tz0x_2187", cw = "_paginationContainer_1tz0x_2192", dw = "_paginationList_1tz0x_2199", _w = "_paginationItem_1tz0x_2207", uw = "_paginationButton_1tz0x_2211", mw = "_tabsContainer_1tz0x_2245", pw = "_tabsList_1tz0x_2249", hw = "_tabItem_1tz0x_2257", fw = "_tabButton_1tz0x_2261", gw = "_tabIcon_1tz0x_2294", yw = "_tabLabel_1tz0x_2298", bw = "_segmentedContainer_1tz0x_2305", vw = "_segmentedGroup_1tz0x_2311", xw = "_segmentedButton_1tz0x_2318", ww = "_hamburgerContainer_1tz0x_2347", kw = "_hamburgerList_1tz0x_2351", Cw = "_hamburgerItem_1tz0x_2357", Sw = "_hamburgerLink_1tz0x_2361", zw = "_hamburgerIcon_1tz0x_2391", jw = "_hamburgerLabel_1tz0x_2397", Nw = "_sideDrawerContainer_1tz0x_2401", Tw = "_sideDrawerList_1tz0x_2407", Pw = "_sideDrawerItem_1tz0x_2413", Ew = "_sideDrawerLink_1tz0x_2417", Iw = "_sideDrawerIcon_1tz0x_2448", Lw = "_sideDrawerLabel_1tz0x_2454", Aw = "_sideDrawerSubList_1tz0x_2458", Mw = "_sideDrawerSubItem_1tz0x_2467", Ow = "_sideDrawerSubLink_1tz0x_2471", Rw = "_genericNavigation_1tz0x_2500", Bw = "_genericList_1tz0x_2504", Fw = "_genericItem_1tz0x_2512", Dw = "_genericLink_1tz0x_2516", $w = "_genericIcon_1tz0x_2545", Ww = "_genericLabel_1tz0x_2549", sa = {
  container: jx,
  "container-sm": "_container-sm_1tz0x_147",
  "container-md": "_container-md_1tz0x_163",
  "container-lg": "_container-lg_1tz0x_179",
  "container-xl": "_container-xl_1tz0x_195",
  "container-2xl": "_container-2xl_1tz0x_211",
  "safe-area": "_safe-area_1tz0x_227",
  "overflow-hidden": "_overflow-hidden_1tz0x_233",
  "overflow-auto": "_overflow-auto_1tz0x_237",
  "overflow-x-auto": "_overflow-x-auto_1tz0x_242",
  "overflow-y-auto": "_overflow-y-auto_1tz0x_248",
  "box-border": "_box-border_1tz0x_254",
  "box-content": "_box-content_1tz0x_258",
  flex: Nx,
  "flex-col": "_flex-col_1tz0x_266",
  "flex-row": "_flex-row_1tz0x_271",
  "flex-wrap": "_flex-wrap_1tz0x_276",
  "flex-nowrap": "_flex-nowrap_1tz0x_281",
  "flex-center": "_flex-center_1tz0x_286",
  "flex-between": "_flex-between_1tz0x_292",
  "justify-start": "_justify-start_1tz0x_298",
  "justify-center": "_justify-center_1tz0x_302",
  "justify-end": "_justify-end_1tz0x_306",
  "justify-between": "_justify-between_1tz0x_310",
  "justify-around": "_justify-around_1tz0x_314",
  "items-start": "_items-start_1tz0x_318",
  "items-center": "_items-center_1tz0x_322",
  "items-end": "_items-end_1tz0x_326",
  "items-stretch": "_items-stretch_1tz0x_330",
  "flex-1": "_flex-1_1tz0x_334",
  "flex-auto": "_flex-auto_1tz0x_338",
  "flex-none": "_flex-none_1tz0x_342",
  "flex-grow": "_flex-grow_1tz0x_346",
  "flex-shrink": "_flex-shrink_1tz0x_350",
  "flex-shrink-0": "_flex-shrink-0_1tz0x_354",
  grid: Tx,
  "grid-auto-fit": "_grid-auto-fit_1tz0x_362",
  "grid-auto-fill": "_grid-auto-fill_1tz0x_369",
  "grid-cols-1": "_grid-cols-1_1tz0x_376",
  "grid-cols-2": "_grid-cols-2_1tz0x_380",
  "grid-cols-3": "_grid-cols-3_1tz0x_384",
  "grid-cols-4": "_grid-cols-4_1tz0x_388",
  "grid-cols-6": "_grid-cols-6_1tz0x_392",
  "grid-cols-12": "_grid-cols-12_1tz0x_396",
  "gap-0": "_gap-0_1tz0x_400",
  "gap-1": "_gap-1_1tz0x_404",
  "gap-2": "_gap-2_1tz0x_408",
  "gap-3": "_gap-3_1tz0x_412",
  "gap-4": "_gap-4_1tz0x_416",
  "gap-5": "_gap-5_1tz0x_420",
  "gap-6": "_gap-6_1tz0x_424",
  "gap-8": "_gap-8_1tz0x_428",
  "gap-10": "_gap-10_1tz0x_432",
  "gap-12": "_gap-12_1tz0x_436",
  "p-0": "_p-0_1tz0x_440",
  "p-1": "_p-1_1tz0x_444",
  "p-2": "_p-2_1tz0x_448",
  "p-3": "_p-3_1tz0x_452",
  "p-4": "_p-4_1tz0x_456",
  "p-5": "_p-5_1tz0x_460",
  "p-6": "_p-6_1tz0x_464",
  "p-8": "_p-8_1tz0x_468",
  "p-10": "_p-10_1tz0x_472",
  "p-12": "_p-12_1tz0x_476",
  "px-0": "_px-0_1tz0x_480",
  "px-1": "_px-1_1tz0x_485",
  "px-2": "_px-2_1tz0x_490",
  "px-3": "_px-3_1tz0x_495",
  "px-4": "_px-4_1tz0x_500",
  "px-6": "_px-6_1tz0x_505",
  "py-0": "_py-0_1tz0x_510",
  "py-1": "_py-1_1tz0x_515",
  "py-2": "_py-2_1tz0x_520",
  "py-3": "_py-3_1tz0x_525",
  "py-4": "_py-4_1tz0x_530",
  "py-6": "_py-6_1tz0x_535",
  "m-0": "_m-0_1tz0x_540",
  "m-1": "_m-1_1tz0x_544",
  "m-2": "_m-2_1tz0x_548",
  "m-3": "_m-3_1tz0x_552",
  "m-4": "_m-4_1tz0x_556",
  "m-auto": "_m-auto_1tz0x_560",
  "mx-auto": "_mx-auto_1tz0x_564",
  "my-auto": "_my-auto_1tz0x_569",
  "mx-0": "_mx-0_1tz0x_574",
  "mx-1": "_mx-1_1tz0x_579",
  "mx-2": "_mx-2_1tz0x_584",
  "mx-3": "_mx-3_1tz0x_589",
  "mx-4": "_mx-4_1tz0x_594",
  "my-0": "_my-0_1tz0x_599",
  "my-1": "_my-1_1tz0x_604",
  "my-2": "_my-2_1tz0x_609",
  "my-3": "_my-3_1tz0x_614",
  "my-4": "_my-4_1tz0x_619",
  "w-full": "_w-full_1tz0x_624",
  "w-auto": "_w-auto_1tz0x_628",
  "w-fit": "_w-fit_1tz0x_632",
  "w-min": "_w-min_1tz0x_636",
  "w-max": "_w-max_1tz0x_640",
  "max-w-none": "_max-w-none_1tz0x_644",
  "max-w-xs": "_max-w-xs_1tz0x_648",
  "max-w-sm": "_max-w-sm_1tz0x_652",
  "max-w-md": "_max-w-md_1tz0x_656",
  "max-w-lg": "_max-w-lg_1tz0x_660",
  "max-w-xl": "_max-w-xl_1tz0x_664",
  "max-w-2xl": "_max-w-2xl_1tz0x_668",
  "max-w-3xl": "_max-w-3xl_1tz0x_672",
  "max-w-4xl": "_max-w-4xl_1tz0x_676",
  "max-w-5xl": "_max-w-5xl_1tz0x_680",
  "max-w-6xl": "_max-w-6xl_1tz0x_684",
  "max-w-7xl": "_max-w-7xl_1tz0x_688",
  "max-w-full": "_max-w-full_1tz0x_692",
  "min-w-0": "_min-w-0_1tz0x_696",
  "min-w-full": "_min-w-full_1tz0x_700",
  "h-auto": "_h-auto_1tz0x_704",
  "h-fit": "_h-fit_1tz0x_708",
  "h-full": "_h-full_1tz0x_712",
  "h-screen": "_h-screen_1tz0x_716",
  "max-h-full": "_max-h-full_1tz0x_720",
  "max-h-screen": "_max-h-screen_1tz0x_724",
  "min-h-0": "_min-h-0_1tz0x_728",
  "min-h-full": "_min-h-full_1tz0x_732",
  "min-h-screen": "_min-h-screen_1tz0x_736",
  relative: Px,
  absolute: Ex,
  fixed: Ix,
  sticky: Lx,
  static: "_static_1tz0x_756",
  "inset-0": "_inset-0_1tz0x_760",
  "top-0": "_top-0_1tz0x_767",
  "right-0": "_right-0_1tz0x_771",
  "bottom-0": "_bottom-0_1tz0x_775",
  "left-0": "_left-0_1tz0x_779",
  "text-left": "_text-left_1tz0x_783",
  "text-center": "_text-center_1tz0x_787",
  "text-right": "_text-right_1tz0x_791",
  "text-justify": "_text-justify_1tz0x_795",
  "text-xs": "_text-xs_1tz0x_799",
  "text-sm": "_text-sm_1tz0x_803",
  "text-base": "_text-base_1tz0x_807",
  "text-lg": "_text-lg_1tz0x_811",
  "text-xl": "_text-xl_1tz0x_815",
  "text-2xl": "_text-2xl_1tz0x_819",
  "text-3xl": "_text-3xl_1tz0x_823",
  "text-4xl": "_text-4xl_1tz0x_827",
  "font-normal": "_font-normal_1tz0x_831",
  "font-medium": "_font-medium_1tz0x_835",
  "font-semibold": "_font-semibold_1tz0x_839",
  "font-bold": "_font-bold_1tz0x_843",
  "leading-tight": "_leading-tight_1tz0x_847",
  "leading-normal": "_leading-normal_1tz0x_851",
  "leading-relaxed": "_leading-relaxed_1tz0x_855",
  "text-primary": "_text-primary_1tz0x_859",
  "text-secondary": "_text-secondary_1tz0x_863",
  "text-muted": "_text-muted_1tz0x_867",
  "text-inverse": "_text-inverse_1tz0x_871",
  "text-blue": "_text-blue_1tz0x_875",
  "text-red": "_text-red_1tz0x_879",
  "text-green": "_text-green_1tz0x_883",
  "text-yellow": "_text-yellow_1tz0x_887",
  truncate: Ax,
  "text-ellipsis": "_text-ellipsis_1tz0x_898",
  "text-clip": "_text-clip_1tz0x_905",
  "bg-transparent": "_bg-transparent_1tz0x_911",
  "bg-white": "_bg-white_1tz0x_915",
  "bg-gray-50": "_bg-gray-50_1tz0x_919",
  "bg-gray-100": "_bg-gray-100_1tz0x_923",
  "bg-gray-200": "_bg-gray-200_1tz0x_927",
  "bg-primary": "_bg-primary_1tz0x_931",
  "bg-secondary": "_bg-secondary_1tz0x_935",
  "bg-success": "_bg-success_1tz0x_939",
  "bg-danger": "_bg-danger_1tz0x_943",
  "bg-warning": "_bg-warning_1tz0x_947",
  border: Mx,
  "border-0": "_border-0_1tz0x_955",
  "border-t": "_border-t_1tz0x_959",
  "border-r": "_border-r_1tz0x_963",
  "border-b": "_border-b_1tz0x_967",
  "border-l": "_border-l_1tz0x_971",
  "border-gray-200": "_border-gray-200_1tz0x_975",
  "border-gray-300": "_border-gray-300_1tz0x_979",
  "border-primary": "_border-primary_1tz0x_983",
  "border-danger": "_border-danger_1tz0x_987",
  "rounded-none": "_rounded-none_1tz0x_991",
  "rounded-sm": "_rounded-sm_1tz0x_995",
  rounded: Ox,
  "rounded-md": "_rounded-md_1tz0x_1003",
  "rounded-lg": "_rounded-lg_1tz0x_1007",
  "rounded-xl": "_rounded-xl_1tz0x_1011",
  "rounded-2xl": "_rounded-2xl_1tz0x_1015",
  "rounded-full": "_rounded-full_1tz0x_1019",
  "shadow-none": "_shadow-none_1tz0x_1023",
  "shadow-sm": "_shadow-sm_1tz0x_1027",
  shadow: Rx,
  "shadow-md": "_shadow-md_1tz0x_1035",
  "shadow-lg": "_shadow-lg_1tz0x_1039",
  "shadow-xl": "_shadow-xl_1tz0x_1043",
  "z-0": "_z-0_1tz0x_1047",
  "z-10": "_z-10_1tz0x_1051",
  "z-20": "_z-20_1tz0x_1055",
  "z-30": "_z-30_1tz0x_1059",
  "z-40": "_z-40_1tz0x_1063",
  "z-50": "_z-50_1tz0x_1067",
  "z-auto": "_z-auto_1tz0x_1071",
  "z-dropdown": "_z-dropdown_1tz0x_1075",
  "z-sticky": "_z-sticky_1tz0x_1079",
  "z-fixed": "_z-fixed_1tz0x_1083",
  "z-modal": "_z-modal_1tz0x_1087",
  "z-tooltip": "_z-tooltip_1tz0x_1091",
  "transition-none": "_transition-none_1tz0x_1095",
  "transition-all": "_transition-all_1tz0x_1099",
  "transition-fast": "_transition-fast_1tz0x_1103",
  "transition-slow": "_transition-slow_1tz0x_1107",
  "sr-only": "_sr-only_1tz0x_1111",
  "focus-ring": "_focus-ring_1tz0x_1123",
  "cursor-default": "_cursor-default_1tz0x_1129",
  "cursor-pointer": "_cursor-pointer_1tz0x_1133",
  "cursor-not-allowed": "_cursor-not-allowed_1tz0x_1137",
  "select-none": "_select-none_1tz0x_1141",
  "select-text": "_select-text_1tz0x_1145",
  "select-all": "_select-all_1tz0x_1149",
  "select-auto": "_select-auto_1tz0x_1153",
  "pointer-events-none": "_pointer-events-none_1tz0x_1157",
  "pointer-events-auto": "_pointer-events-auto_1tz0x_1161",
  "gap-sm": "_gap-sm_1tz0x_1165",
  "gap-md": "_gap-md_1tz0x_1169",
  "gap-lg": "_gap-lg_1tz0x_1173",
  "gap-xl": "_gap-xl_1tz0x_1177",
  "p-sm": "_p-sm_1tz0x_1181",
  "p-md": "_p-md_1tz0x_1185",
  "p-lg": "_p-lg_1tz0x_1189",
  "p-xl": "_p-xl_1tz0x_1193",
  "m-sm": "_m-sm_1tz0x_1197",
  "m-md": "_m-md_1tz0x_1201",
  "m-lg": "_m-lg_1tz0x_1205",
  "m-xl": "_m-xl_1tz0x_1209",
  "text-gray": "_text-gray_1tz0x_1213",
  "mobile:hidden": "_mobile:hidden_1tz0x_1218",
  "mobile:block": "_mobile:block_1tz0x_1221",
  "mobile:flex": "_mobile:flex_1tz0x_1224",
  "mobile:grid": "_mobile:grid_1tz0x_1227",
  "mobile:text-sm": "_mobile:text-sm_1tz0x_1230",
  "mobile:text-xs": "_mobile:text-xs_1tz0x_1233",
  "mobile:p-2": "_mobile:p-2_1tz0x_1236",
  "mobile:px-2": "_mobile:px-2_1tz0x_1239",
  "tablet:block": "_tablet:block_1tz0x_1245",
  "tablet:flex": "_tablet:flex_1tz0x_1248",
  "tablet:grid": "_tablet:grid_1tz0x_1251",
  "tablet:hidden": "_tablet:hidden_1tz0x_1254",
  "desktop:block": "_desktop:block_1tz0x_1259",
  "desktop:flex": "_desktop:flex_1tz0x_1262",
  "desktop:grid": "_desktop:grid_1tz0x_1265",
  "desktop:hidden": "_desktop:hidden_1tz0x_1268",
  "bg-gray": "_bg-gray_1tz0x_919",
  "border-secondary": "_border-secondary_1tz0x_1292",
  "border-gray": "_border-gray_1tz0x_975",
  "shadow-glow": "_shadow-glow_1tz0x_1328",
  "w-8": "_w-8_1tz0x_1376",
  "w-10": "_w-10_1tz0x_1380",
  "w-12": "_w-12_1tz0x_1384",
  "w-16": "_w-16_1tz0x_1388",
  "h-8": "_h-8_1tz0x_1392",
  "h-10": "_h-10_1tz0x_1396",
  "h-12": "_h-12_1tz0x_1400",
  "h-16": "_h-16_1tz0x_1404",
  "user-select-none": "_user-select-none_1tz0x_1420",
  transition: Bx,
  "transition-colors": "_transition-colors_1tz0x_1428",
  "transition-transform": "_transition-transform_1tz0x_1432",
  "hover-scale": "_hover-scale_1tz0x_1436",
  "fade-in": "_fade-in_1tz0x_1443",
  "status-online": "_status-online_1tz0x_1455",
  "status-offline": "_status-offline_1tz0x_1465",
  "status-away": "_status-away_1tz0x_1475",
  "status-busy": "_status-busy_1tz0x_1485",
  "modal-overlay": "_modal-overlay_1tz0x_1495",
  "modal-content": "_modal-content_1tz0x_1509",
  "close-button-absolute": "_close-button-absolute_1tz0x_1523",
  small: Fx,
  large: Dx,
  "primary-button": "_primary-button_1tz0x_1604",
  "secondary-button": "_secondary-button_1tz0x_1608",
  card: $x,
  "input-base": "_input-base_1tz0x_1661",
  "chat-window": "_chat-window_1tz0x_1693",
  "chat-message": "_chat-message_1tz0x_1704",
  "z-overlay": "_z-overlay_1tz0x_1729",
  "mobile-hidden": "_mobile-hidden_1tz0x_1734",
  "mobile-flex-col": "_mobile-flex-col_1tz0x_1737",
  "mobile-text-center": "_mobile-text-center_1tz0x_1740",
  "mobile-p-sm": "_mobile-p-sm_1tz0x_1743",
  "mobile-gap-sm": "_mobile-gap-sm_1tz0x_1746",
  "desktop-hidden": "_desktop-hidden_1tz0x_1751",
  "print-hidden": "_print-hidden_1tz0x_1756",
  Navigation: Wx,
  "navigation--primary": "_navigation--primary_1tz0x_1788",
  "navigation--secondary": "_navigation--secondary_1tz0x_1795",
  "navigation--minimal": "_navigation--minimal_1tz0x_1805",
  "navigation--floating": "_navigation--floating_1tz0x_1810",
  "navigation--overlay": "_navigation--overlay_1tz0x_1821",
  "navigation--horizontal": "_navigation--horizontal_1tz0x_1830",
  "navigation--vertical": "_navigation--vertical_1tz0x_1838",
  "navigation--stacked": "_navigation--stacked_1tz0x_1843",
  "navigation--top": "_navigation--top_1tz0x_1850",
  "navigation--bottom": "_navigation--bottom_1tz0x_1857",
  "navigation--left": "_navigation--left_1tz0x_1864",
  "navigation--right": "_navigation--right_1tz0x_1872",
  "navigation--fixed": "_navigation--fixed_1tz0x_1880",
  "navigation--sticky": "_navigation--sticky_1tz0x_1888",
  "navigation--mobile": "_navigation--mobile_1tz0x_1896",
  "navigation--open": "_navigation--open_1tz0x_1908",
  navbarContainer: Ux,
  navbarBrand: Zx,
  navbarItems: Hx,
  navbarItem: Vx,
  navbarLink: Gx,
  active: Kx,
  disabled: qx,
  navbarIcon: Yx,
  navbarLabel: Jx,
  navbarBadge: Xx,
  mobileNavContainer: Qx,
  mobileNavItem: ew,
  mobileNavIcon: tw,
  mobileNavLabel: iw,
  mobileNavBadge: nw,
  breadcrumbsList: aw,
  breadcrumbItem: rw,
  breadcrumbLink: ow,
  breadcrumbCurrent: sw,
  breadcrumbSeparator: lw,
  paginationContainer: cw,
  paginationList: dw,
  paginationItem: _w,
  paginationButton: uw,
  tabsContainer: mw,
  tabsList: pw,
  tabItem: hw,
  tabButton: fw,
  tabIcon: gw,
  tabLabel: yw,
  segmentedContainer: bw,
  segmentedGroup: vw,
  segmentedButton: xw,
  hamburgerContainer: ww,
  hamburgerList: kw,
  hamburgerItem: Cw,
  hamburgerLink: Sw,
  hamburgerIcon: zw,
  hamburgerLabel: jw,
  sideDrawerContainer: Nw,
  sideDrawerList: Tw,
  sideDrawerItem: Pw,
  sideDrawerLink: Ew,
  sideDrawerIcon: Iw,
  sideDrawerLabel: Lw,
  sideDrawerSubList: Aw,
  sideDrawerSubItem: Mw,
  sideDrawerSubLink: Ow,
  genericNavigation: Rw,
  genericList: Bw,
  genericItem: Fw,
  genericLink: Dw,
  genericIcon: $w,
  genericLabel: Ww,
  "loading-shimmer": "_loading-shimmer_1tz0x_1"
}, Uw = {
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
}, Zw = {
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
}, Hw = {
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
}, Vw = {
  kind: "side-drawer",
  variant: "embedded",
  layout: "vertical",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  persistState: !0,
  enableKeyboardNav: !0,
  description: "Side drawer navigation for desktop and tablet"
}, Gw = {
  kind: "breadcrumbs",
  variant: "minimal",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Breadcrumb navigation showing current page hierarchy"
}, Kw = {
  kind: "pagination",
  variant: "detailed",
  layout: "horizontal",
  position: "center",
  showIcons: !0,
  showLabels: !0,
  enableKeyboardNav: !0,
  description: "Pagination controls for data tables and lists"
}, qw = {
  kind: "tabs",
  variant: "primary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  enableKeyboardNav: !0,
  description: "Tab navigation for content sections"
}, Yw = {
  kind: "segmented-controls",
  variant: "secondary",
  layout: "horizontal",
  position: "center",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Segmented controls for option selection"
}, Jw = {
  kind: "back-navigation",
  variant: "minimal",
  layout: "horizontal",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  description: "Back navigation button for page transitions"
}, Xw = {
  kind: "step-navigation",
  variant: "detailed",
  layout: "horizontal",
  position: "top",
  showIcons: !0,
  showLabels: !0,
  highlightActive: !0,
  description: "Step-by-step navigation for multi-step processes"
}, Qw = {
  kind: "filter-navigation",
  variant: "secondary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  allowMultiSelect: !0,
  description: "Filter navigation for data filtering"
}, e0 = {
  kind: "quick-navigation",
  variant: "floating",
  layout: "vertical",
  position: "right",
  showIcons: !0,
  showLabels: !1,
  description: "Quick navigation for frequently used actions"
}, ka = {
  // Primary Navigation
  navbar: Uw,
  "mobile-nav": Zw,
  "hamburger-menu": Hw,
  "side-drawer": Vw,
  // Secondary Navigation
  breadcrumbs: Gw,
  pagination: Kw,
  tabs: qw,
  "segmented-controls": Yw,
  // Utility Navigation
  "back-navigation": Jw,
  "step-navigation": Xw,
  "filter-navigation": Qw,
  "quick-navigation": e0
};
function Ll(t) {
  return ka[t];
}
function Dj(t) {
  return t in ka;
}
function $j(t) {
  return Object.values(ka).filter(
    (i) => i.variant === t
  );
}
function Wj(t) {
  return Object.values(ka).filter(
    (i) => i.layout === t
  );
}
function wi(t, i) {
  return { ...Ll(t), ...i };
}
const Uj = {
  // App Navigation
  primaryApp: () => wi("navbar", {
    variant: "primary",
    showIcons: !0,
    showLabels: !0,
    responsive: !0
  }),
  mobileApp: () => wi("mobile-nav", {
    variant: "mobile-optimized",
    position: "bottom",
    showIcons: !0,
    showLabels: !1
  }),
  // Content Navigation
  contentTabs: () => wi("tabs", {
    variant: "primary",
    showIcons: !1,
    showLabels: !0
  }),
  // Data Navigation
  tablePagination: () => wi("pagination", {
    variant: "detailed",
    enableKeyboardNav: !0
  }),
  // Quick Actions
  floatingNav: () => wi("quick-navigation", {
    variant: "floating",
    position: "right",
    showIcons: !0,
    showLabels: !1
  })
}, Zj = {
  navbar: (t) => wi("navbar", { items: t }),
  tabs: (t) => wi("tabs", { items: t }),
  breadcrumbs: (t) => wi("breadcrumbs", { items: t }),
  pagination: (t, i) => wi("pagination", {
    items: t0(
      t,
      i
    )
  })
};
function t0(t, i) {
  const a = [];
  a.push({
    id: "prev",
    label: "Previous",
    disabled: i <= 1,
    path: `page-${i - 1}`
  });
  for (let o = 1; o <= t; o++)
    a.push({
      id: `page-${o}`,
      label: o.toString(),
      active: o === i,
      path: `page-${o}`
    });
  return a.push({
    id: "next",
    label: "Next",
    disabled: i >= t,
    path: `page-${i + 1}`
  }), a;
}
const Al = Ae(
  ({
    kind: t,
    componentId: i,
    children: a,
    className: o,
    items: c = [],
    currentPath: _,
    onNavigate: m,
    configuration: h,
    responsive: f,
    mobileBreakpoint: g,
    closeOnSelect: b,
    showIcons: v,
    showLabels: C,
    showBadges: w,
    totalPages: I,
    currentPage: j = 1,
    onPageChange: A,
    activeTab: O,
    onTabChange: X,
    isOpen: W = !1,
    onToggle: U,
    ...N
  }, T) => {
    const J = Ll(t), V = h ? { ...J, ...h } : J, B = [
      sa.Navigation,
      sa[`navigation--${V.variant}`],
      sa[`navigation--${V.layout}`],
      V.position && sa[`navigation--${V.position}`],
      o
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsx(
      "nav",
      {
        ref: T,
        className: B,
        "data-navigation-kind": t,
        role: V.role || "navigation",
        "aria-label": V.ariaLabel || `${t} navigation`,
        children: i0(
          V,
          c,
          _,
          O,
          I,
          j,
          m,
          v,
          C,
          w,
          a
        )
      }
    );
  }
);
function i0(t, i, a, o, c, _ = 1, m, h, f, g, b) {
  switch (t.kind) {
    case "navbar":
      return renderNavbar(
        t,
        i,
        a,
        m,
        h,
        f,
        g
      );
    case "mobile-nav":
      return renderMobileNav(
        t,
        i,
        a,
        m,
        h,
        f,
        g
      );
    case "hamburger-menu":
      return renderHamburgerMenu(
        t,
        i,
        a,
        m,
        h,
        f,
        g
      );
    case "side-drawer":
      return renderSideDrawer(
        t,
        i,
        a,
        m,
        h,
        f
      );
    case "breadcrumbs":
      return renderBreadcrumbs(t, i, m);
    case "pagination":
      return renderPagination(
        t,
        c,
        _,
        m
      );
    case "tabs":
      return renderTabs(
        t,
        i,
        o,
        m,
        h,
        f
      );
    case "segmented-controls":
      return renderSegmentedControls(
        t,
        i,
        o,
        m
      );
    default:
      return renderGenericNavigation(
        t,
        i,
        m,
        h,
        f,
        b
      );
  }
}
Al.displayName = "Navigation";
const n0 = oi(Al), Ot = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (a = {}) => {
    const o = { ...i, ...a };
    return Fe.createElement(n0, o);
  };
}, Hj = {
  // Primary Navigation
  navbar: Ot("navbar"),
  mobileNav: Ot("mobile-nav"),
  hamburger: Ot("hamburger-menu"),
  sideDrawer: Ot("side-drawer"),
  // Secondary Navigation
  breadcrumbs: Ot("breadcrumbs"),
  pagination: Ot("pagination"),
  tabs: Ot("tabs"),
  segmentedControls: Ot(
    "segmented-controls"
  ),
  // Utility Navigation
  backNav: Ot("back-navigation"),
  stepNav: Ot("step-navigation"),
  filterNav: Ot("filter-navigation"),
  quickNav: Ot("quick-navigation"),
  // Advanced Presets
  responsiveNav: Ot({
    kind: "navbar",
    responsive: !0,
    mobileBreakpoint: 768
  }),
  dashboardNav: Ot({
    kind: "side-drawer",
    collapsible: !0,
    defaultCollapsed: !1
  }),
  wizardNav: Ot({
    kind: "step-navigation",
    showProgress: !0,
    allowSkip: !1
  })
}, a0 = "_notification_1lz2j_134", r0 = "_notification__icon_1lz2j_156", o0 = "_notification__icon_text_1lz2j_165", s0 = "_notification__content_1lz2j_170", l0 = "_notification__title_1lz2j_176", c0 = "_notification__message_1lz2j_186", d0 = "_notification__children_1lz2j_195", _0 = "_notification__close_1lz2j_199", u0 = "_notification__actions_1lz2j_222", m0 = "_notification__action_1lz2j_222", p0 = "_notification__progress_1lz2j_295", h0 = "_notification__progress_bar_1lz2j_306", f0 = "_slideInRight_1lz2j_1", g0 = "_slideOutRight_1lz2j_1", y0 = "_fadeIn_1lz2j_1", b0 = "_fadeOut_1lz2j_1", v0 = "_scaleIn_1lz2j_1", x0 = "_scaleOut_1lz2j_1", w0 = "_bounceIn_1lz2j_1", k0 = "_shake_1lz2j_1", tt = {
  notification: a0,
  "notification--hidden": "_notification--hidden_1lz2j_151",
  notification__icon: r0,
  notification__icon_text: o0,
  notification__content: s0,
  notification__title: l0,
  notification__message: c0,
  notification__children: d0,
  notification__close: _0,
  notification__actions: u0,
  notification__action: m0,
  "notification__action--primary": "_notification__action--primary_1lz2j_265",
  "notification__action--secondary": "_notification__action--secondary_1lz2j_270",
  "notification__action--text": "_notification__action--text_1lz2j_275",
  "notification__action--confirm": "_notification__action--confirm_1lz2j_280",
  "notification__action--cancel": "_notification__action--cancel_1lz2j_285",
  notification__progress: p0,
  notification__progress_bar: h0,
  "notification--success": "_notification--success_1lz2j_314",
  "notification--error": "_notification--error_1lz2j_323",
  "notification--warning": "_notification--warning_1lz2j_332",
  "notification--info": "_notification--info_1lz2j_341",
  "notification--neutral": "_notification--neutral_1lz2j_350",
  "notification--filled": "_notification--filled_1lz2j_354",
  "notification--outlined": "_notification--outlined_1lz2j_375",
  "notification--minimal": "_notification--minimal_1lz2j_380",
  "notification--modern": "_notification--modern_1lz2j_386",
  "notification--glass": "_notification--glass_1lz2j_391",
  "notification--game_style": "_notification--game_style_1lz2j_397",
  "notification--center": "_notification--center_1lz2j_404",
  "notification--bottom_right": "_notification--bottom_right_1lz2j_404",
  "notification--bottom_center": "_notification--bottom_center_1lz2j_404",
  "notification--bottom_left": "_notification--bottom_left_1lz2j_404",
  "notification--top_right": "_notification--top_right_1lz2j_404",
  "notification--top_center": "_notification--top_center_1lz2j_404",
  "notification--top_left": "_notification--top_left_1lz2j_404",
  "notification--enter-slide": "_notification--enter-slide_1lz2j_530",
  slideInRight: f0,
  "notification--exit-slide": "_notification--exit-slide_1lz2j_534",
  slideOutRight: g0,
  "notification--enter-fade": "_notification--enter-fade_1lz2j_538",
  fadeIn: y0,
  "notification--exit-fade": "_notification--exit-fade_1lz2j_542",
  fadeOut: b0,
  "notification--enter-scale": "_notification--enter-scale_1lz2j_546",
  scaleIn: v0,
  "notification--exit-scale": "_notification--exit-scale_1lz2j_550",
  scaleOut: x0,
  "notification--enter-bounce": "_notification--enter-bounce_1lz2j_554",
  bounceIn: w0,
  "notification--enter-shake": "_notification--enter-shake_1lz2j_558",
  shake: k0,
  "loading-shimmer": "_loading-shimmer_1lz2j_1"
}, ms = {
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
}, Ml = (t) => ms[t] || ms.toast, C0 = (t, i) => ({
  ...t,
  ...i
}), Vj = (t, i = {}) => {
  const a = Ml(t);
  return C0(a, i);
}, Gj = (t) => {
  const i = [];
  return t.kind || i.push("Notification kind is required"), t.autoHide && t.duration && t.duration < 0 && i.push(
    "Duration must be positive when autoHide is true"
  ), t.actions && t.actions.forEach((a, o) => {
    a.label || i.push(`Action ${o} label is required`), a.onClick || i.push(
      `Action ${o} onClick handler is required`
    );
  }), i;
}, S0 = (t) => {
  const i = {
    success: "✓",
    error: "✗",
    warning: "⚠",
    info: "ℹ",
    neutral: "•"
  };
  return i[t] || i.neutral;
}, Ol = Ae((t, i) => {
  const {
    kind: a,
    componentId: o,
    children: c,
    className: _,
    // Content
    title: m,
    message: h,
    icon: f,
    image: g,
    // Configuration overrides
    variant: b,
    severity: v,
    position: C,
    // Behavior
    visible: w = !0,
    autoHide: I,
    duration: j,
    persistent: A,
    dismissible: O,
    pauseOnHover: X,
    // Actions
    actions: W,
    confirmText: U,
    cancelText: N,
    // Styling
    showIcon: T,
    showCloseButton: J,
    showProgress: V,
    // Animation
    enterAnimation: B,
    exitAnimation: G,
    // Callbacks
    onShow: F,
    onHide: Q,
    onClick: le,
    onConfirm: ge,
    onCancel: ie,
    onAction: ne,
    ...ce
  } = t, E = Ml(a), te = {
    ...E,
    title: m || E.title,
    message: h || E.message,
    variant: b || E.variant,
    severity: v || E.severity,
    position: C || E.position,
    autoHide: I !== void 0 ? I : E.autoHide,
    duration: j !== void 0 ? j : E.duration,
    persistent: A !== void 0 ? A : E.persistent,
    dismissible: O !== void 0 ? O : E.dismissible,
    pauseOnHover: X !== void 0 ? X : E.pauseOnHover,
    actions: W || E.actions,
    confirmText: U || E.confirmText,
    cancelText: N || E.cancelText,
    showIcon: T !== void 0 ? T : E.showIcon,
    showCloseButton: J !== void 0 ? J : E.showCloseButton,
    showProgress: V !== void 0 ? V : E.showProgress,
    enterAnimation: B || E.enterAnimation,
    exitAnimation: G || E.exitAnimation
  }, [x, Z] = Fe.useState(w), [z, H] = Fe.useState(!1), [q, ee] = Fe.useState(100);
  Fe.useEffect(() => {
    if (!te.autoHide || !x || z) return;
    const Se = setTimeout(() => {
      Y();
    }, te.duration);
    return () => clearTimeout(Se);
  }, [
    te.autoHide,
    te.duration,
    x,
    z
  ]), Fe.useEffect(() => {
    if (!te.autoHide || !te.showProgress || !x || z)
      return;
    const Se = setInterval(() => {
      ee(
        (he) => Math.max(
          0,
          he - 100 / ((te.duration || 4e3) / 100)
        )
      );
    }, 100);
    return () => clearInterval(Se);
  }, [
    te.autoHide,
    te.showProgress,
    te.duration,
    x,
    z
  ]);
  const Y = () => {
    Z(!1), Q == null || Q();
  }, me = () => {
    ge == null || ge(), Y();
  }, de = () => {
    ie == null || ie(), Y();
  }, Me = (Se) => {
    Se.onClick(), ne == null || ne(Se), Se.variant !== "text" && Y();
  }, Ee = [
    tt.notification,
    tt[`notification--${te.kind}`],
    tt[`notification--${te.variant}`],
    tt[`notification--${te.severity}`],
    te.position && tt[`notification--${te.position.replace("-", "_")}`],
    te.enterAnimation && tt[`notification--enter-${te.enterAnimation}`],
    !x && te.exitAnimation && tt[`notification--exit-${te.exitAnimation}`],
    !x && tt["notification--hidden"],
    _
  ].filter(Boolean).join(" "), ae = () => {
    if (!te.showIcon) return null;
    const Se = f || te.severity && S0(te.severity);
    return /* @__PURE__ */ s.jsx(p, { className: tt.notification__icon, children: typeof Se == "string" ? /* @__PURE__ */ s.jsx("span", { className: tt.notification__icon_text, children: Se }) : Se });
  }, pe = () => !te.showCloseButton || !te.dismissible ? null : /* @__PURE__ */ s.jsx(
    "button",
    {
      className: tt.notification__close,
      onClick: Y,
      "aria-label": "Close notification",
      children: "×"
    }
  ), we = () => {
    var Se;
    return te.kind.includes("confirm") ? /* @__PURE__ */ s.jsxs(p, { className: tt.notification__actions, children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: tt.notification__action + " " + tt["notification__action--confirm"],
          onClick: me,
          children: te.confirmText || "Confirm"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: tt.notification__action + " " + tt["notification__action--cancel"],
          onClick: de,
          children: te.cancelText || "Cancel"
        }
      )
    ] }) : (Se = te.actions) != null && Se.length ? /* @__PURE__ */ s.jsx(p, { className: tt.notification__actions, children: te.actions.map((he, $) => /* @__PURE__ */ s.jsx(
      "button",
      {
        className: tt.notification__action + (he.variant ? " " + tt[`notification__action--${he.variant}`] : ""),
        onClick: () => Me(he),
        disabled: he.disabled,
        children: he.label
      },
      $
    )) }) : null;
  }, re = () => !te.showProgress || !te.autoHide ? null : /* @__PURE__ */ s.jsx(p, { className: tt.notification__progress, children: /* @__PURE__ */ s.jsx(
    p,
    {
      className: tt.notification__progress_bar,
      style: { width: `${q}%` }
    }
  ) });
  return !x && te.exitAnimation && setTimeout(() => {
    Z(!1);
  }, 300), !x && !te.exitAnimation ? null : /* @__PURE__ */ s.jsxs(
    p,
    {
      ...ce,
      ref: i,
      className: Ee,
      onClick: le,
      onMouseEnter: () => te.pauseOnHover && H(!0),
      onMouseLeave: () => te.pauseOnHover && H(!1),
      role: "alert",
      "aria-live": "polite",
      children: [
        g && /* @__PURE__ */ s.jsx(p, { className: tt.notification__image, children: /* @__PURE__ */ s.jsx("img", { src: g, alt: "" }) }),
        ae(),
        /* @__PURE__ */ s.jsxs(p, { className: tt.notification__content, children: [
          te.title && /* @__PURE__ */ s.jsx("div", { className: tt.notification__title, children: te.title }),
          te.message && /* @__PURE__ */ s.jsx("div", { className: tt.notification__message, children: te.message }),
          c && /* @__PURE__ */ s.jsx("div", { className: tt.notification__children, children: c }),
          we()
        ] }),
        pe(),
        re()
      ]
    }
  );
});
Ol.displayName = "Notification";
const z0 = oi(Ol), rt = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (a = {}) => {
    const o = { ...i, ...a };
    return Fe.createElement(z0, o);
  };
}, Kj = {
  // Toasts
  toast: rt("toast"),
  toastSuccess: rt("toast-success"),
  toastError: rt("toast-error"),
  toastWarning: rt("toast-warning"),
  toastInfo: rt("toast-info"),
  // Snackbars
  snackbar: rt("snackbar"),
  snackbarAction: rt("snackbar-action"),
  snackbarPersistent: rt(
    "snackbar-persistent"
  ),
  // Alerts
  alert: rt("alert"),
  alertSuccess: rt("alert-success"),
  alertError: rt("alert-error"),
  alertWarning: rt("alert-warning"),
  alertInfo: rt("alert-info"),
  // Banners
  banner: rt("banner"),
  bannerAnnouncement: rt(
    "banner-announcement"
  ),
  bannerPromotion: rt("banner-promotion"),
  bannerUpdate: rt("banner-update"),
  // Confirmations
  confirmDialog: rt("confirm-dialog"),
  confirmDelete: rt("confirm-delete"),
  confirmAction: rt("confirm-action"),
  confirmNavigation: rt(
    "confirm-navigation"
  ),
  // Game notifications
  achievementToast: rt(
    "achievement-toast"
  ),
  gameAlert: rt("game-alert"),
  matchNotification: rt(
    "match-notification"
  ),
  socialNotification: rt(
    "social-notification"
  )
}, j0 = {
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
}, Rl = (t) => j0[t], N0 = "_progress_8roj1_132", T0 = "_progress__header_8roj1_142", P0 = "_progress__label_8roj1_188", E0 = "_progress__value_8roj1_192", I0 = "_progress__description_8roj1_197", L0 = "_progress__content_8roj1_202", A0 = "_progress__custom_8roj1_205", M0 = "_progress__track_8roj1_208", O0 = "_progress__fill_8roj1_216", R0 = "_progress__spinner_8roj1_234", B0 = "_progress__spinner_circle_8roj1_239", F0 = "_spin_8roj1_1", D0 = "_progress__dots_8roj1_267", $0 = "_progress__dot_8roj1_267", W0 = "_bounce_8roj1_1", U0 = "_progress__circular_8roj1_289", Z0 = "_progress__circular_indeterminate_8roj1_301", H0 = "_rotate_8roj1_1", V0 = "_progress__percentage_8roj1_304", G0 = "_progress__steps_8roj1_314", K0 = "_progress__step_8roj1_314", q0 = "_progress__step_marker_8roj1_349", Y0 = "_progress__step_content_8roj1_376", J0 = "_progress__step_label_8roj1_381", X0 = "_progress__step_description_8roj1_386", Q0 = "_progress__skeleton_8roj1_390", ek = "_progress__skeleton_line_8roj1_395", tk = "_pulse_8roj1_1", xi = {
  progress: N0,
  "progress--xs": "_progress--xs_8roj1_139",
  progress__header: T0,
  "progress--sm": "_progress--sm_8roj1_147",
  "progress--md": "_progress--md_8roj1_155",
  "progress--lg": "_progress--lg_8roj1_163",
  "progress--xl": "_progress--xl_8roj1_171",
  progress__label: P0,
  progress__value: E0,
  progress__description: I0,
  progress__content: L0,
  progress__custom: A0,
  progress__track: M0,
  progress__fill: O0,
  "progress--striped": "_progress--striped_8roj1_224",
  "progress--animated": "_progress--animated_8roj1_228",
  "progress-bar-stripes": "_progress-bar-stripes_8roj1_1",
  "progress--indeterminate": "_progress--indeterminate_8roj1_231",
  "progress-indeterminate": "_progress-indeterminate_8roj1_1",
  progress__spinner: R0,
  progress__spinner_circle: B0,
  spin: F0,
  progress__dots: D0,
  progress__dot: $0,
  bounce: W0,
  progress__circular: U0,
  progress__circular_indeterminate: Z0,
  rotate: H0,
  progress__percentage: V0,
  progress__steps: G0,
  "progress--vertical": "_progress--vertical_8roj1_318",
  progress__step: K0,
  "progress__step--completed": "_progress__step--completed_8roj1_346",
  progress__step_marker: q0,
  "progress__step--active": "_progress__step--active_8roj1_353",
  "progress__step--error": "_progress__step--error_8roj1_358",
  progress__step_content: Y0,
  progress__step_label: J0,
  progress__step_description: X0,
  progress__skeleton: Q0,
  progress__skeleton_line: ek,
  "skeleton-shimmer": "_skeleton-shimmer_8roj1_1",
  "progress--primary": "_progress--primary_8roj1_410",
  "progress--secondary": "_progress--secondary_8roj1_416",
  "progress--success": "_progress--success_8roj1_422",
  "progress--warning": "_progress--warning_8roj1_428",
  "progress--error": "_progress--error_8roj1_434",
  "progress--info": "_progress--info_8roj1_440",
  "progress--pulse": "_progress--pulse_8roj1_446",
  pulse: tk,
  "progress--bounce": "_progress--bounce_8roj1_450",
  "progress--spin": "_progress--spin_8roj1_453",
  "progress--slide": "_progress--slide_8roj1_456",
  "slide-in": "_slide-in_8roj1_1",
  "progress--fade": "_progress--fade_8roj1_459",
  "fade-in": "_fade-in_8roj1_1",
  "progress--horizontal": "_progress--horizontal_8roj1_574",
  "loading-shimmer": "_loading-shimmer_8roj1_1"
}, Bl = Ae(
  ({
    kind: t,
    children: i,
    className: a = "",
    value: o = 0,
    max: c = 100,
    label: _,
    description: m,
    showPercentage: h,
    showValue: f,
    indeterminate: g,
    striped: b,
    animated: v,
    duration: C,
    steps: w,
    currentStep: I = 0,
    orientation: j,
    variant: A,
    size: O,
    animation: X,
    thickness: W,
    color: U,
    backgroundColor: N,
    onComplete: T,
    onStepChange: J,
    ...V
  }, B) => {
    const G = Rl(t), F = {
      ...G,
      label: _ ?? G.label,
      description: m ?? G.description,
      showPercentage: h ?? G.showPercentage,
      showValue: f ?? G.showValue,
      indeterminate: g ?? G.indeterminate,
      striped: b ?? G.striped,
      animated: v ?? G.animated,
      duration: C ?? G.duration,
      steps: w ?? G.steps,
      orientation: j ?? G.orientation,
      variant: A ?? G.variant,
      size: O ?? G.size,
      animation: X ?? G.animation,
      thickness: W ?? G.thickness,
      color: U ?? G.color,
      backgroundColor: N ?? G.backgroundColor
    }, Q = Math.min(
      Math.max(o / c * 100, 0),
      100
    ), le = [
      xi.progress,
      xi[`progress--${F.kind}`],
      xi[`progress--${F.variant}`],
      xi[`progress--${F.size}`],
      F.animation !== "none" && xi[`progress--${F.animation}`],
      F.indeterminate && xi["progress--indeterminate"],
      F.striped && xi["progress--striped"],
      F.animated && xi["progress--animated"],
      F.orientation && xi[`progress--${F.orientation}`],
      a
    ].filter(Boolean).join(" ");
    return Fe.useEffect(() => {
      Q >= 100 && T && T();
    }, [Q, T]), Fe.useEffect(() => {
      J && J(I);
    }, [I, J]), /* @__PURE__ */ s.jsx(
      p,
      {
        ref: B,
        className: le,
        role: "progressbar",
        "aria-valuenow": F.indeterminate ? void 0 : o,
        "aria-valuemin": 0,
        "aria-valuemax": c,
        "aria-label": F.label,
        ...V
      }
    );
  }
);
Bl.displayName = "Progress";
const ik = oi(Bl);
class _t {
  static create(i) {
    return Fe.forwardRef(
      (a, o) => Fe.createElement(ik, {
        ref: o,
        ...i,
        ...a
      })
    );
  }
  static createFromKind(i) {
    const a = Rl(i);
    return this.create(a);
  }
}
const qj = {
  // Loading indicators
  LoadingSpinner: _t.createFromKind(
    "loading-spinner"
  ),
  DotsLoader: _t.createFromKind("dots-loader"),
  PulseLoader: _t.createFromKind("pulse-loader"),
  BounceLoader: _t.createFromKind("bounce-loader"),
  SkeletonLoader: _t.createFromKind(
    "skeleton-loader"
  ),
  // Progress bars
  LinearProgress: _t.createFromKind(
    "linear-progress"
  ),
  CircularProgress: _t.createFromKind(
    "circular-progress"
  ),
  RadialProgress: _t.createFromKind(
    "radial-progress"
  ),
  StepProgress: _t.createFromKind("step-progress"),
  MultiStep: _t.createFromKind("multi-step"),
  // Upload/Download progress
  UploadProgress: _t.createFromKind(
    "upload-progress"
  ),
  DownloadProgress: _t.createFromKind(
    "download-progress"
  ),
  SyncProgress: _t.createFromKind("sync-progress"),
  // Game/Activity progress
  LevelProgress: _t.createFromKind(
    "level-progress"
  ),
  AchievementProgress: _t.createFromKind(
    "achievement-progress"
  ),
  CompletionProgress: _t.createFromKind(
    "completion-progress"
  ),
  HealthBar: _t.createFromKind("health-bar"),
  ExperienceBar: _t.createFromKind(
    "experience-bar"
  ),
  // System progress
  InstallationProgress: _t.createFromKind(
    "installation-progress"
  ),
  BackupProgress: _t.createFromKind(
    "backup-progress"
  ),
  ProcessingProgress: _t.createFromKind(
    "processing-progress"
  ),
  BatteryIndicator: _t.createFromKind(
    "battery-indicator"
  )
}, nk = "_friendsSidebarOverlay_16x1o_131", ak = "_friendsSidebarOverlayModal_16x1o_131", rk = "_settingsSidebarOverlay_16x1o_132", ok = "_notificationsSidebarOverlay_16x1o_133", sk = "_notificationsSidebar_16x1o_133", lk = "_chatSidebar_16x1o_151", ck = "_settingsSidebar_16x1o_132", dk = "_friendsSidebar_16x1o_131", _k = "_friendsSidebarResponsive_16x1o_151", uk = "_friendsSidebarDesktop_16x1o_151", mk = "_friendsSidebarMobile_16x1o_151", pk = "_friendsSidebarNoAnimation_16x1o_151", hk = "_sidebarContent_16x1o_186", fk = "_sidebarHeader_16x1o_197", gk = "_sidebarTitle_16x1o_204", yk = "_sidebarFooter_16x1o_215", bk = "_sidebarCloseBtn_16x1o_551", vk = "_sidebarCloseBtnLeft_16x1o_551", fe = {
  friendsSidebarOverlay: nk,
  friendsSidebarOverlayModal: ak,
  settingsSidebarOverlay: rk,
  notificationsSidebarOverlay: ok,
  notificationsSidebar: sk,
  chatSidebar: lk,
  settingsSidebar: ck,
  friendsSidebar: dk,
  friendsSidebarResponsive: _k,
  friendsSidebarDesktop: uk,
  friendsSidebarMobile: mk,
  friendsSidebarNoAnimation: pk,
  sidebarContent: hk,
  sidebarHeader: fk,
  sidebarTitle: gk,
  sidebarFooter: yk,
  sidebarCloseBtn: bk,
  sidebarCloseBtnLeft: vk,
  "sidebar-sr-only": "_sidebar-sr-only_16x1o_644"
}, xk = {
  // Basic sidebars
  friends: {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar",
    className: fe.friendsSidebar,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-compact": {
    variant: "friends",
    position: "right",
    size: "small",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 250,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (compact)",
    className: fe.friendsSidebarCompact,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-expanded": {
    variant: "friends",
    position: "right",
    size: "large",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (expanded)",
    className: fe.friendsSidebarExpanded,
    overlayClassName: fe.friendsSidebarOverlay
  },
  settings: {
    variant: "settings",
    position: "left",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Settings sidebar",
    className: fe.settingsSidebar,
    overlayClassName: fe.settingsSidebarOverlay
  },
  "settings-minimal": {
    variant: "settings",
    position: "left",
    size: "small",
    hasOverlay: !1,
    showCloseButton: !1,
    behavior: "push",
    animation: "slide",
    animationDuration: 200,
    zIndex: 1e3,
    ariaLabel: "Settings sidebar (minimal)",
    className: fe.settingsSidebarMinimal
  },
  chat: {
    variant: "chat",
    position: "right",
    size: "medium",
    hasOverlay: !1,
    showCloseButton: !0,
    closeButtonText: "×",
    behavior: "slide",
    animation: "slide",
    animationDuration: 250,
    zIndex: 1500,
    ariaLabel: "Chat sidebar",
    className: fe.chatSidebar
  },
  "chat-compact": {
    variant: "chat",
    position: "right",
    size: "small",
    hasOverlay: !1,
    showCloseButton: !0,
    closeButtonText: "×",
    behavior: "slide",
    animation: "fade",
    animationDuration: 200,
    zIndex: 1500,
    ariaLabel: "Chat sidebar (compact)",
    className: fe.chatSidebarCompact
  },
  notifications: {
    variant: "notifications",
    position: "right",
    size: "small",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Dismiss",
    behavior: "slide",
    animation: "slide",
    animationDuration: 250,
    zIndex: 2200,
    ariaLabel: "Notifications sidebar",
    className: fe.notificationsSidebar,
    overlayClassName: fe.notificationsSidebarOverlay
  },
  "notifications-compact": {
    variant: "notifications",
    position: "right",
    size: "small",
    hasOverlay: !1,
    showCloseButton: !1,
    behavior: "slide",
    animation: "fade",
    animationDuration: 150,
    zIndex: 1800,
    ariaLabel: "Notifications sidebar (compact)",
    className: fe.notificationsSidebarCompact
  },
  // Position variants
  "friends-left": {
    variant: "friends",
    position: "left",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (left)",
    className: fe.friendsSidebarLeft,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-right": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (right)",
    className: fe.friendsSidebarRight,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "settings-left": {
    variant: "settings",
    position: "left",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Settings sidebar (left)",
    className: fe.settingsSidebarLeft,
    overlayClassName: fe.settingsSidebarOverlay
  },
  "settings-right": {
    variant: "settings",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Settings sidebar (right)",
    className: fe.settingsSidebarRight,
    overlayClassName: fe.settingsSidebarOverlay
  },
  // Size variants
  "friends-small": {
    variant: "friends",
    position: "right",
    size: "small",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 250,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (small)",
    className: fe.friendsSidebarSmall,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-medium": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (medium)",
    className: fe.friendsSidebarMedium,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-large": {
    variant: "friends",
    position: "right",
    size: "large",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 350,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (large)",
    className: fe.friendsSidebarLarge,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-full": {
    variant: "friends",
    position: "right",
    size: "full",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 400,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (full width)",
    className: fe.friendsSidebarFull,
    overlayClassName: fe.friendsSidebarOverlay
  },
  // Behavior variants
  "friends-modal": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "modal",
    animation: "fade",
    animationDuration: 250,
    zIndex: 2500,
    ariaLabel: "Friends sidebar (modal)",
    className: fe.friendsSidebarModal,
    overlayClassName: fe.friendsSidebarOverlayModal
  },
  "friends-slide": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (slide)",
    className: fe.friendsSidebarSlide,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-push": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !1,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "push",
    animation: "slide",
    animationDuration: 300,
    zIndex: 1e3,
    ariaLabel: "Friends sidebar (push)",
    className: fe.friendsSidebarPush
  },
  "friends-overlay": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "overlay",
    animation: "fade",
    animationDuration: 200,
    zIndex: 2e3,
    ariaLabel: "Friends sidebar (overlay)",
    className: fe.friendsSidebarOverlayMode,
    overlayClassName: fe.friendsSidebarOverlay
  },
  // Animation variants
  "friends-fade": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "fade",
    animationDuration: 250,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (fade animation)",
    className: fe.friendsSidebarFade,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-scale": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "scale",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (scale animation)",
    className: fe.friendsSidebarScale,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-no-animation": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "none",
    animationDuration: 0,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (no animation)",
    className: fe.friendsSidebarNoAnimation,
    overlayClassName: fe.friendsSidebarOverlay
  },
  // Custom combinations
  "friends-mobile": {
    variant: "friends",
    position: "right",
    size: "full",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 250,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (mobile)",
    className: fe.friendsSidebarMobile,
    overlayClassName: fe.friendsSidebarOverlay
  },
  "friends-desktop": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !1,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "push",
    animation: "slide",
    animationDuration: 300,
    zIndex: 1e3,
    ariaLabel: "Friends sidebar (desktop)",
    className: fe.friendsSidebarDesktop
  },
  "friends-responsive": {
    variant: "friends",
    position: "right",
    size: "medium",
    hasOverlay: !0,
    showCloseButton: !0,
    closeButtonText: "Close",
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 2100,
    ariaLabel: "Friends sidebar (responsive)",
    className: fe.friendsSidebarResponsive,
    overlayClassName: fe.friendsSidebarOverlay
  },
  custom: {
    variant: "custom",
    position: "right",
    size: "medium",
    hasOverlay: !1,
    showCloseButton: !1,
    behavior: "slide",
    animation: "slide",
    animationDuration: 300,
    zIndex: 1e3,
    ariaLabel: "Custom sidebar",
    className: ""
  }
}, Fl = Ae(
  ({
    kind: t = "friends",
    open: i,
    onClose: a,
    title: o,
    children: c,
    header: _,
    footer: m,
    hasOverlay: h,
    showCloseButton: f,
    closeButtonText: g,
    closeButtonIcon: b,
    closeOnOverlayClick: v = !0,
    closeOnEscape: C = !0,
    focusTrap: w = !0,
    returnFocus: I = !0,
    animationDuration: j,
    disableAnimation: A = !1,
    ariaLabel: O,
    ariaLabelledBy: X,
    ariaDescribedBy: W,
    role: U = "dialog",
    overlayClassName: N,
    headerClassName: T,
    contentClassName: J,
    footerClassName: V,
    closeButtonClassName: B,
    onOpen: G,
    onAnimationStart: F,
    onAnimationEnd: Q,
    onOverlayClick: le,
    onEscapeKey: ge,
    className: ie,
    style: ne,
    ...ce
  }, E) => {
    const te = xk[t], x = ut(null), Z = ut(null), z = ut(null), H = ut(!1), q = {
      ...te,
      hasOverlay: h ?? te.hasOverlay,
      showCloseButton: f ?? te.showCloseButton,
      closeButtonText: g ?? te.closeButtonText,
      animationDuration: j ?? te.animationDuration
    }, ee = Je(
      (R) => {
        R.key === "Escape" && i && C && (R.preventDefault(), ge == null || ge(), a == null || a());
      },
      [i, C, a, ge]
    ), Y = Je(
      (R) => {
        R.target === x.current && v && (le == null || le(), a == null || a());
      },
      [v, a, le]
    ), me = Je(() => {
      a == null || a();
    }, [a]);
    Re(() => (i && w && (z.current = document.activeElement, setTimeout(() => {
      var Le, Xe;
      const R = (Le = Z.current) == null ? void 0 : Le.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      R ? R.focus() : (Xe = Z.current) == null || Xe.focus();
    }, q.animationDuration || 0)), () => {
      !i && I && z.current && z.current.focus();
    }), [
      i,
      w,
      I,
      q.animationDuration
    ]), Re(() => {
      if (i)
        return document.addEventListener(
          "keydown",
          ee
        ), () => {
          document.removeEventListener(
            "keydown",
            ee
          );
        };
    }, [i, ee]), Re(() => {
      i && (G == null || G(), F == null || F(), !A && q.animationDuration ? (H.current = !0, setTimeout(() => {
        H.current = !1, Q == null || Q();
      }, q.animationDuration)) : Q == null || Q());
    }, [
      i,
      G,
      F,
      Q,
      A,
      q.animationDuration
    ]), Re(() => {
      if (i && q.hasOverlay) {
        const R = document.body.style.overflow;
        return document.body.style.overflow = "hidden", () => {
          document.body.style.overflow = R;
        };
      }
    }, [i, q.hasOverlay]);
    const de = [
      q.className,
      i ? "sidebar-open" : "",
      A ? "sidebar-no-animation" : "",
      ie
    ].filter(Boolean).join(" "), Me = [
      q.overlayClassName,
      i ? "overlay-visible" : "",
      N
    ].filter(Boolean).join(" "), Ee = [
      fe.sidebarHeader,
      T
    ].filter(Boolean).join(" "), ae = [
      fe.sidebarContent,
      J
    ].filter(Boolean).join(" "), pe = [
      fe.sidebarFooter,
      V
    ].filter(Boolean).join(" "), we = [
      q.position === "left" ? fe.sidebarCloseBtnLeft : fe.sidebarCloseBtn,
      B
    ].filter(Boolean).join(" "), re = {
      ...ne,
      zIndex: q.zIndex,
      minWidth: q.minWidth,
      maxWidth: q.maxWidth,
      height: q.height,
      transitionDuration: A ? "0s" : `${q.animationDuration}ms`
    }, Se = {
      zIndex: q.zIndex ? q.zIndex - 1 : void 0,
      transitionDuration: A ? "0s" : `${q.animationDuration}ms`
    }, he = () => _ || (!o && !q.showCloseButton ? null : /* @__PURE__ */ s.jsxs(p, { className: Ee, children: [
      o && /* @__PURE__ */ s.jsx(
        "h2",
        {
          className: fe.sidebarTitle,
          id: X || `sidebar-title-${t}`,
          children: o
        }
      ),
      q.showCloseButton && /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: "close",
          onClick: me,
          className: we,
          "aria-label": `Close ${q.ariaLabel || "sidebar"}`
        }
      )
    ] })), $ = () => m ? /* @__PURE__ */ s.jsx(p, { className: pe, children: m }) : null;
    return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      q.hasOverlay && /* @__PURE__ */ s.jsx(
        p,
        {
          ref: x,
          className: Me,
          style: Se,
          onClick: Y,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ s.jsxs(
        p,
        {
          ref: Z,
          className: de,
          style: re,
          role: U,
          "aria-label": O || q.ariaLabel,
          "aria-labelledby": X || (o ? `sidebar-title-${t}` : void 0),
          "aria-describedby": W,
          "aria-modal": q.hasOverlay,
          tabIndex: w ? -1 : void 0,
          ...ce,
          children: [
            he(),
            /* @__PURE__ */ s.jsx(p, { className: ae, children: c }),
            $(),
            /* @__PURE__ */ s.jsx(
              p,
              {
                className: fe["sidebar-sr-only"],
                "aria-live": "polite",
                "aria-atomic": "true",
                children: i ? `${q.ariaLabel} opened` : `${q.ariaLabel} closed`
              }
            )
          ]
        }
      )
    ] });
  }
);
Fl.displayName = "Sidebar";
const Yj = ({ open: t, onClose: i, children: a }) => /* @__PURE__ */ s.jsx(Fl, { kind: "friends", open: t, onClose: i, children: a });
class Rt {
  /**
   * Create a sidebar with a specific kind and minimal props
   */
  static create(i, a = {}) {
    return Fe.createElement(ot, {
      kind: i,
      open: !1,
      // Default value
      ...a
    });
  }
  /**
   * Create a sidebar from a configuration group
   */
  static createFromGroup(i, a = 0, o = {}) {
    const _ = SIDEBAR_GROUPS[i][a];
    if (!_)
      throw new Error(
        `Invalid index ${a} for group ${i}`
      );
    return this.create(_, o);
  }
  /**
   * Create a quick sidebar preset
   */
  static createQuick(i, a = {}) {
    const o = QUICK_SIDEBARS[i];
    return this.create(o, a);
  }
  /**
   * Create multiple sidebars at once
   */
  static createMultiple(i) {
    return i.map(
      ({ kind: a, props: o = {}, key: c }, _) => Fe.cloneElement(this.create(a, o), {
        key: c || `sidebar-${a}-${_}`
      })
    );
  }
  /**
   * Create a sidebar with custom configuration
   */
  static createCustom(i, a, o = {}) {
    return this.create(i, {
      ...o,
      className: a.className ? `${o.className || ""} ${a.className}`.trim() : o.className
    });
  }
}
const ot = (t, i) => Rt.create(t, i), Jj = {
  Friends: (t) => Rt.createQuick("FRIENDS_DEFAULT", t),
  FriendsMobile: (t) => Rt.createQuick("FRIENDS_MOBILE", t),
  FriendsDesktop: (t) => Rt.createQuick("FRIENDS_DESKTOP", t),
  Settings: (t) => Rt.createQuick("SETTINGS_DEFAULT", t),
  Chat: (t) => Rt.createQuick("CHAT_DEFAULT", t),
  Notifications: (t) => Rt.createQuick(
    "NOTIFICATIONS_DEFAULT",
    t
  )
}, Xj = {
  Friends: (t = 0, i) => Rt.createFromGroup("FRIENDS", t, i),
  Settings: (t = 0, i) => Rt.createFromGroup(
    "SETTINGS",
    t,
    i
  ),
  Chat: (t = 0, i) => Rt.createFromGroup("CHAT", t, i),
  Notifications: (t = 0, i) => Rt.createFromGroup(
    "NOTIFICATIONS",
    t,
    i
  ),
  Sizes: (t = 0, i) => Rt.createFromGroup("SIZES", t, i),
  Behaviors: (t = 0, i) => Rt.createFromGroup(
    "BEHAVIORS",
    t,
    i
  ),
  Animations: (t = 0, i) => Rt.createFromGroup(
    "ANIMATIONS",
    t,
    i
  ),
  Responsive: (t = 0, i) => Rt.createFromGroup(
    "RESPONSIVE",
    t,
    i
  )
}, Qj = (t) => ot("friends", t), eN = (t) => ot("friends-compact", t), tN = (t) => ot("friends-expanded", t), iN = (t) => ot("settings", t), nN = (t) => ot("chat", t), aN = (t) => ot("notifications", t), rN = (t = "friends", i) => ot(`${t}-left`, i), oN = (t = "friends", i) => ot(`${t}-right`, i), sN = (t = "friends", i) => ot(`${t}-small`, i), lN = (t = "friends", i) => ot(
  `${t}-medium`,
  i
), cN = (t = "friends", i) => ot(`${t}-large`, i), dN = (t = "friends", i) => ot(`${t}-full`, i), _N = (t = "friends", i) => ot(
  `${t}-mobile`,
  i
), uN = (t = "friends", i) => ot(
  `${t}-desktop`,
  i
), mN = (t = "friends", i) => ot(
  `${t}-responsive`,
  i
), pN = (t = "friends", i) => ot(`${t}-fade`, i), hN = (t = "friends", i) => ot(`${t}-scale`, i), fN = (t = "friends", i) => ot(
  `${t}-no-animation`,
  i
), gN = (t = "friends", i) => ot(`${t}-modal`, i), yN = (t = "friends", i) => ot(`${t}-slide`, i), bN = (t = "friends", i) => ot(`${t}-push`, i), vN = (t = "friends", i) => ot(
  `${t}-overlay`,
  i
), xN = {
  /**
   * Create a sidebar stack (multiple sidebars with different z-indexes)
   */
  createStack: (t) => t.map(
    ({ kind: i, props: a = {} }, o) => {
      var c;
      return ot(i, {
        ...a,
        style: {
          ...a.style,
          zIndex: (((c = a.style) == null ? void 0 : c.zIndex) || 1e3) + o
        }
      });
    }
  ),
  /**
   * Create a responsive sidebar that changes based on screen size
   */
  createResponsive: (t, i, a) => ot("friends-responsive", a)
}, ps = {
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
}, Dl = (t) => ps[t] || ps["data-table"], wk = (t, i) => ({
  ...t,
  ...i,
  columns: i.columns || t.columns,
  data: i.data || t.data
}), wN = (t, i = {}) => {
  const a = Dl(t);
  return wk(a, i);
}, kN = (t) => {
  const i = [];
  if (t.kind || i.push("Table kind is required"), t.pagination && typeof t.pagination == "object") {
    const a = t.pagination;
    a.page < 1 && i.push("Pagination page must be >= 1"), a.pageSize < 1 && i.push("Pagination pageSize must be >= 1");
  }
  return t.selectable && !t.selectionMode && i.push(
    "Selection mode required when selectable is true"
  ), i;
}, kk = "_container_m9htu_131", Ck = "_flex_m9htu_262", Sk = "_grid_m9htu_358", zk = "_relative_m9htu_740", jk = "_absolute_m9htu_744", Nk = "_fixed_m9htu_748", Tk = "_sticky_m9htu_752", Pk = "_truncate_m9htu_891", Ek = "_border_m9htu_951", Ik = "_rounded_m9htu_991", Lk = "_shadow_m9htu_1023", Ak = "_transition_m9htu_1095", Mk = "_small_m9htu_1595", Ok = "_large_m9htu_1599", Rk = "_card_m9htu_1647", Bk = "_table_container_m9htu_1772", Fk = "_table_wrapper_m9htu_1789", Dk = "_table_m9htu_1245", $k = "_table__header_m9htu_1847", Wk = "_table__header_row_m9htu_1862", Uk = "_table__header_cell_m9htu_1866", Zk = "_table__header_content_m9htu_1898", Hk = "_table__sort_indicator_m9htu_1907", Vk = "_table__body_m9htu_1916", Gk = "_table__row_m9htu_1920", Kk = "_table__cell_m9htu_1956", qk = "_table__empty_row_m9htu_1971", Yk = "_table__empty_cell_m9htu_1971", Jk = "_table__expand_button_m9htu_1978", Xk = "_table__search_m9htu_1995", Qk = "_table__search_input_m9htu_2001", e2 = "_skeleton_content_m9htu_2020", Be = {
  container: kk,
  "container-sm": "_container-sm_m9htu_147",
  "container-md": "_container-md_m9htu_163",
  "container-lg": "_container-lg_m9htu_179",
  "container-xl": "_container-xl_m9htu_195",
  "container-2xl": "_container-2xl_m9htu_211",
  "safe-area": "_safe-area_m9htu_227",
  "overflow-hidden": "_overflow-hidden_m9htu_233",
  "overflow-auto": "_overflow-auto_m9htu_237",
  "overflow-x-auto": "_overflow-x-auto_m9htu_242",
  "overflow-y-auto": "_overflow-y-auto_m9htu_248",
  "box-border": "_box-border_m9htu_254",
  "box-content": "_box-content_m9htu_258",
  flex: Ck,
  "flex-col": "_flex-col_m9htu_266",
  "flex-row": "_flex-row_m9htu_271",
  "flex-wrap": "_flex-wrap_m9htu_276",
  "flex-nowrap": "_flex-nowrap_m9htu_281",
  "flex-center": "_flex-center_m9htu_286",
  "flex-between": "_flex-between_m9htu_292",
  "justify-start": "_justify-start_m9htu_298",
  "justify-center": "_justify-center_m9htu_302",
  "justify-end": "_justify-end_m9htu_306",
  "justify-between": "_justify-between_m9htu_310",
  "justify-around": "_justify-around_m9htu_314",
  "items-start": "_items-start_m9htu_318",
  "items-center": "_items-center_m9htu_322",
  "items-end": "_items-end_m9htu_326",
  "items-stretch": "_items-stretch_m9htu_330",
  "flex-1": "_flex-1_m9htu_334",
  "flex-auto": "_flex-auto_m9htu_338",
  "flex-none": "_flex-none_m9htu_342",
  "flex-grow": "_flex-grow_m9htu_346",
  "flex-shrink": "_flex-shrink_m9htu_350",
  "flex-shrink-0": "_flex-shrink-0_m9htu_354",
  grid: Sk,
  "grid-auto-fit": "_grid-auto-fit_m9htu_362",
  "grid-auto-fill": "_grid-auto-fill_m9htu_369",
  "grid-cols-1": "_grid-cols-1_m9htu_376",
  "grid-cols-2": "_grid-cols-2_m9htu_380",
  "grid-cols-3": "_grid-cols-3_m9htu_384",
  "grid-cols-4": "_grid-cols-4_m9htu_388",
  "grid-cols-6": "_grid-cols-6_m9htu_392",
  "grid-cols-12": "_grid-cols-12_m9htu_396",
  "gap-0": "_gap-0_m9htu_400",
  "gap-1": "_gap-1_m9htu_404",
  "gap-2": "_gap-2_m9htu_408",
  "gap-3": "_gap-3_m9htu_412",
  "gap-4": "_gap-4_m9htu_416",
  "gap-5": "_gap-5_m9htu_420",
  "gap-6": "_gap-6_m9htu_424",
  "gap-8": "_gap-8_m9htu_428",
  "gap-10": "_gap-10_m9htu_432",
  "gap-12": "_gap-12_m9htu_436",
  "p-0": "_p-0_m9htu_440",
  "p-1": "_p-1_m9htu_444",
  "p-2": "_p-2_m9htu_448",
  "p-3": "_p-3_m9htu_452",
  "p-4": "_p-4_m9htu_456",
  "p-5": "_p-5_m9htu_460",
  "p-6": "_p-6_m9htu_464",
  "p-8": "_p-8_m9htu_468",
  "p-10": "_p-10_m9htu_472",
  "p-12": "_p-12_m9htu_476",
  "px-0": "_px-0_m9htu_480",
  "px-1": "_px-1_m9htu_485",
  "px-2": "_px-2_m9htu_490",
  "px-3": "_px-3_m9htu_495",
  "px-4": "_px-4_m9htu_500",
  "px-6": "_px-6_m9htu_505",
  "py-0": "_py-0_m9htu_510",
  "py-1": "_py-1_m9htu_515",
  "py-2": "_py-2_m9htu_520",
  "py-3": "_py-3_m9htu_525",
  "py-4": "_py-4_m9htu_530",
  "py-6": "_py-6_m9htu_535",
  "m-0": "_m-0_m9htu_540",
  "m-1": "_m-1_m9htu_544",
  "m-2": "_m-2_m9htu_548",
  "m-3": "_m-3_m9htu_552",
  "m-4": "_m-4_m9htu_556",
  "m-auto": "_m-auto_m9htu_560",
  "mx-auto": "_mx-auto_m9htu_564",
  "my-auto": "_my-auto_m9htu_569",
  "mx-0": "_mx-0_m9htu_574",
  "mx-1": "_mx-1_m9htu_579",
  "mx-2": "_mx-2_m9htu_584",
  "mx-3": "_mx-3_m9htu_589",
  "mx-4": "_mx-4_m9htu_594",
  "my-0": "_my-0_m9htu_599",
  "my-1": "_my-1_m9htu_604",
  "my-2": "_my-2_m9htu_609",
  "my-3": "_my-3_m9htu_614",
  "my-4": "_my-4_m9htu_619",
  "w-full": "_w-full_m9htu_624",
  "w-auto": "_w-auto_m9htu_628",
  "w-fit": "_w-fit_m9htu_632",
  "w-min": "_w-min_m9htu_636",
  "w-max": "_w-max_m9htu_640",
  "max-w-none": "_max-w-none_m9htu_644",
  "max-w-xs": "_max-w-xs_m9htu_648",
  "max-w-sm": "_max-w-sm_m9htu_652",
  "max-w-md": "_max-w-md_m9htu_656",
  "max-w-lg": "_max-w-lg_m9htu_660",
  "max-w-xl": "_max-w-xl_m9htu_664",
  "max-w-2xl": "_max-w-2xl_m9htu_668",
  "max-w-3xl": "_max-w-3xl_m9htu_672",
  "max-w-4xl": "_max-w-4xl_m9htu_676",
  "max-w-5xl": "_max-w-5xl_m9htu_680",
  "max-w-6xl": "_max-w-6xl_m9htu_684",
  "max-w-7xl": "_max-w-7xl_m9htu_688",
  "max-w-full": "_max-w-full_m9htu_692",
  "min-w-0": "_min-w-0_m9htu_696",
  "min-w-full": "_min-w-full_m9htu_700",
  "h-auto": "_h-auto_m9htu_704",
  "h-fit": "_h-fit_m9htu_708",
  "h-full": "_h-full_m9htu_712",
  "h-screen": "_h-screen_m9htu_716",
  "max-h-full": "_max-h-full_m9htu_720",
  "max-h-screen": "_max-h-screen_m9htu_724",
  "min-h-0": "_min-h-0_m9htu_728",
  "min-h-full": "_min-h-full_m9htu_732",
  "min-h-screen": "_min-h-screen_m9htu_736",
  relative: zk,
  absolute: jk,
  fixed: Nk,
  sticky: Tk,
  static: "_static_m9htu_756",
  "inset-0": "_inset-0_m9htu_760",
  "top-0": "_top-0_m9htu_767",
  "right-0": "_right-0_m9htu_771",
  "bottom-0": "_bottom-0_m9htu_775",
  "left-0": "_left-0_m9htu_779",
  "text-left": "_text-left_m9htu_783",
  "text-center": "_text-center_m9htu_787",
  "text-right": "_text-right_m9htu_791",
  "text-justify": "_text-justify_m9htu_795",
  "text-xs": "_text-xs_m9htu_799",
  "text-sm": "_text-sm_m9htu_803",
  "text-base": "_text-base_m9htu_807",
  "text-lg": "_text-lg_m9htu_811",
  "text-xl": "_text-xl_m9htu_815",
  "text-2xl": "_text-2xl_m9htu_819",
  "text-3xl": "_text-3xl_m9htu_823",
  "text-4xl": "_text-4xl_m9htu_827",
  "font-normal": "_font-normal_m9htu_831",
  "font-medium": "_font-medium_m9htu_835",
  "font-semibold": "_font-semibold_m9htu_839",
  "font-bold": "_font-bold_m9htu_843",
  "leading-tight": "_leading-tight_m9htu_847",
  "leading-normal": "_leading-normal_m9htu_851",
  "leading-relaxed": "_leading-relaxed_m9htu_855",
  "text-primary": "_text-primary_m9htu_859",
  "text-secondary": "_text-secondary_m9htu_863",
  "text-muted": "_text-muted_m9htu_867",
  "text-inverse": "_text-inverse_m9htu_871",
  "text-blue": "_text-blue_m9htu_875",
  "text-red": "_text-red_m9htu_879",
  "text-green": "_text-green_m9htu_883",
  "text-yellow": "_text-yellow_m9htu_887",
  truncate: Pk,
  "text-ellipsis": "_text-ellipsis_m9htu_898",
  "text-clip": "_text-clip_m9htu_905",
  "bg-transparent": "_bg-transparent_m9htu_911",
  "bg-white": "_bg-white_m9htu_915",
  "bg-gray-50": "_bg-gray-50_m9htu_919",
  "bg-gray-100": "_bg-gray-100_m9htu_923",
  "bg-gray-200": "_bg-gray-200_m9htu_927",
  "bg-primary": "_bg-primary_m9htu_931",
  "bg-secondary": "_bg-secondary_m9htu_935",
  "bg-success": "_bg-success_m9htu_939",
  "bg-danger": "_bg-danger_m9htu_943",
  "bg-warning": "_bg-warning_m9htu_947",
  border: Ek,
  "border-0": "_border-0_m9htu_955",
  "border-t": "_border-t_m9htu_959",
  "border-r": "_border-r_m9htu_963",
  "border-b": "_border-b_m9htu_967",
  "border-l": "_border-l_m9htu_971",
  "border-gray-200": "_border-gray-200_m9htu_975",
  "border-gray-300": "_border-gray-300_m9htu_979",
  "border-primary": "_border-primary_m9htu_983",
  "border-danger": "_border-danger_m9htu_987",
  "rounded-none": "_rounded-none_m9htu_991",
  "rounded-sm": "_rounded-sm_m9htu_995",
  rounded: Ik,
  "rounded-md": "_rounded-md_m9htu_1003",
  "rounded-lg": "_rounded-lg_m9htu_1007",
  "rounded-xl": "_rounded-xl_m9htu_1011",
  "rounded-2xl": "_rounded-2xl_m9htu_1015",
  "rounded-full": "_rounded-full_m9htu_1019",
  "shadow-none": "_shadow-none_m9htu_1023",
  "shadow-sm": "_shadow-sm_m9htu_1027",
  shadow: Lk,
  "shadow-md": "_shadow-md_m9htu_1035",
  "shadow-lg": "_shadow-lg_m9htu_1039",
  "shadow-xl": "_shadow-xl_m9htu_1043",
  "z-0": "_z-0_m9htu_1047",
  "z-10": "_z-10_m9htu_1051",
  "z-20": "_z-20_m9htu_1055",
  "z-30": "_z-30_m9htu_1059",
  "z-40": "_z-40_m9htu_1063",
  "z-50": "_z-50_m9htu_1067",
  "z-auto": "_z-auto_m9htu_1071",
  "z-dropdown": "_z-dropdown_m9htu_1075",
  "z-sticky": "_z-sticky_m9htu_1079",
  "z-fixed": "_z-fixed_m9htu_1083",
  "z-modal": "_z-modal_m9htu_1087",
  "z-tooltip": "_z-tooltip_m9htu_1091",
  "transition-none": "_transition-none_m9htu_1095",
  "transition-all": "_transition-all_m9htu_1099",
  "transition-fast": "_transition-fast_m9htu_1103",
  "transition-slow": "_transition-slow_m9htu_1107",
  "sr-only": "_sr-only_m9htu_1111",
  "focus-ring": "_focus-ring_m9htu_1123",
  "cursor-default": "_cursor-default_m9htu_1129",
  "cursor-pointer": "_cursor-pointer_m9htu_1133",
  "cursor-not-allowed": "_cursor-not-allowed_m9htu_1137",
  "select-none": "_select-none_m9htu_1141",
  "select-text": "_select-text_m9htu_1145",
  "select-all": "_select-all_m9htu_1149",
  "select-auto": "_select-auto_m9htu_1153",
  "pointer-events-none": "_pointer-events-none_m9htu_1157",
  "pointer-events-auto": "_pointer-events-auto_m9htu_1161",
  "gap-sm": "_gap-sm_m9htu_1165",
  "gap-md": "_gap-md_m9htu_1169",
  "gap-lg": "_gap-lg_m9htu_1173",
  "gap-xl": "_gap-xl_m9htu_1177",
  "p-sm": "_p-sm_m9htu_1181",
  "p-md": "_p-md_m9htu_1185",
  "p-lg": "_p-lg_m9htu_1189",
  "p-xl": "_p-xl_m9htu_1193",
  "m-sm": "_m-sm_m9htu_1197",
  "m-md": "_m-md_m9htu_1201",
  "m-lg": "_m-lg_m9htu_1205",
  "m-xl": "_m-xl_m9htu_1209",
  "text-gray": "_text-gray_m9htu_1213",
  "mobile:hidden": "_mobile:hidden_m9htu_1218",
  "mobile:block": "_mobile:block_m9htu_1221",
  "mobile:flex": "_mobile:flex_m9htu_1224",
  "mobile:grid": "_mobile:grid_m9htu_1227",
  "mobile:text-sm": "_mobile:text-sm_m9htu_1230",
  "mobile:text-xs": "_mobile:text-xs_m9htu_1233",
  "mobile:p-2": "_mobile:p-2_m9htu_1236",
  "mobile:px-2": "_mobile:px-2_m9htu_1239",
  "tablet:block": "_tablet:block_m9htu_1245",
  "tablet:flex": "_tablet:flex_m9htu_1248",
  "tablet:grid": "_tablet:grid_m9htu_1251",
  "tablet:hidden": "_tablet:hidden_m9htu_1254",
  "desktop:block": "_desktop:block_m9htu_1259",
  "desktop:flex": "_desktop:flex_m9htu_1262",
  "desktop:grid": "_desktop:grid_m9htu_1265",
  "desktop:hidden": "_desktop:hidden_m9htu_1268",
  "bg-gray": "_bg-gray_m9htu_919",
  "border-secondary": "_border-secondary_m9htu_1292",
  "border-gray": "_border-gray_m9htu_975",
  "shadow-glow": "_shadow-glow_m9htu_1328",
  "w-8": "_w-8_m9htu_1376",
  "w-10": "_w-10_m9htu_1380",
  "w-12": "_w-12_m9htu_1384",
  "w-16": "_w-16_m9htu_1388",
  "h-8": "_h-8_m9htu_1392",
  "h-10": "_h-10_m9htu_1396",
  "h-12": "_h-12_m9htu_1400",
  "h-16": "_h-16_m9htu_1404",
  "user-select-none": "_user-select-none_m9htu_1420",
  transition: Ak,
  "transition-colors": "_transition-colors_m9htu_1428",
  "transition-transform": "_transition-transform_m9htu_1432",
  "hover-scale": "_hover-scale_m9htu_1436",
  "fade-in": "_fade-in_m9htu_1443",
  "status-online": "_status-online_m9htu_1455",
  "status-offline": "_status-offline_m9htu_1465",
  "status-away": "_status-away_m9htu_1475",
  "status-busy": "_status-busy_m9htu_1485",
  "modal-overlay": "_modal-overlay_m9htu_1495",
  "modal-content": "_modal-content_m9htu_1509",
  "close-button-absolute": "_close-button-absolute_m9htu_1523",
  small: Mk,
  large: Ok,
  "primary-button": "_primary-button_m9htu_1604",
  "secondary-button": "_secondary-button_m9htu_1608",
  card: Rk,
  "input-base": "_input-base_m9htu_1661",
  "chat-window": "_chat-window_m9htu_1693",
  "chat-message": "_chat-message_m9htu_1704",
  "z-overlay": "_z-overlay_m9htu_1729",
  "mobile-hidden": "_mobile-hidden_m9htu_1734",
  "mobile-flex-col": "_mobile-flex-col_m9htu_1737",
  "mobile-text-center": "_mobile-text-center_m9htu_1740",
  "mobile-p-sm": "_mobile-p-sm_m9htu_1743",
  "mobile-gap-sm": "_mobile-gap-sm_m9htu_1746",
  "desktop-hidden": "_desktop-hidden_m9htu_1751",
  "print-hidden": "_print-hidden_m9htu_1756",
  table_container: Bk,
  table_wrapper: Fk,
  table: Dk,
  "table--fixed": "_table--fixed_m9htu_1832",
  "table--auto": "_table--auto_m9htu_1835",
  "table--responsive": "_table--responsive_m9htu_1838",
  table__header: $k,
  "table--sticky-header": "_table--sticky-header_m9htu_1851",
  table__header_row: Wk,
  table__header_cell: Uk,
  "table__header_cell--sortable": "_table__header_cell--sortable_m9htu_1878",
  table__header_content: Zk,
  table__sort_indicator: Hk,
  table__body: Vk,
  table__row: Gk,
  "table--hover": "_table--hover_m9htu_1927",
  "table--clickable": "_table--clickable_m9htu_1930",
  "table__row--selected": "_table__row--selected_m9htu_1945",
  "table__row--expanded": "_table__row--expanded_m9htu_1949",
  "table__row--skeleton": "_table__row--skeleton_m9htu_1952",
  table__cell: Kk,
  "table__cell--skeleton": "_table__cell--skeleton_m9htu_1967",
  table__empty_row: qk,
  table__empty_cell: Yk,
  table__expand_button: Jk,
  table__search: Xk,
  table__search_input: Qk,
  skeleton_content: e2,
  "skeleton-loading": "_skeleton-loading_m9htu_1",
  "table--loading": "_table--loading_m9htu_2036",
  "table--default": "_table--default_m9htu_2041",
  "table--minimal": "_table--minimal_m9htu_2045",
  "table--striped": "_table--striped_m9htu_2065",
  "table--bordered": "_table--bordered_m9htu_2069",
  "table--compact": "_table--compact_m9htu_2081",
  "table--spacious": "_table--spacious_m9htu_2086",
  "table--modern": "_table--modern_m9htu_2091",
  "table--glass": "_table--glass_m9htu_2109",
  "table--border-none": "_table--border-none_m9htu_2121",
  "table--border-horizontal": "_table--border-horizontal_m9htu_2127",
  "table--border-vertical": "_table--border-vertical_m9htu_2133",
  "table--border-all": "_table--border-all_m9htu_2137",
  "table--data-grid": "_table--data-grid_m9htu_2141",
  "table--pricing-table": "_table--pricing-table_m9htu_2146",
  "table--comparison-table": "_table--comparison-table_m9htu_2155",
  "table--stats-table": "_table--stats-table_m9htu_2165",
  "table--leaderboard-table": "_table--leaderboard-table_m9htu_2169",
  "loading-shimmer": "_loading-shimmer_m9htu_1"
}, $l = Ae(
  (t, i) => {
    const {
      kind: a,
      children: o,
      className: c,
      componentId: _,
      columns: m,
      data: h,
      keyField: f = "id",
      // Configuration overrides
      variant: g,
      layout: b,
      sortable: v,
      filterable: C,
      selectable: w,
      expandable: I,
      editable: j,
      // Sorting
      defaultSort: A,
      multiSort: O,
      onSort: X,
      // Filtering
      defaultFilters: W,
      searchable: U,
      searchPlaceholder: N,
      onFilter: T,
      // Pagination
      pagination: J,
      // Selection
      selectionMode: V,
      selectedRows: B,
      onSelect: G,
      // Expansion
      expandableRows: F,
      defaultExpanded: Q,
      onExpand: le,
      // Loading
      loading: ge,
      loadingRows: ie,
      // Styling
      height: ne,
      maxHeight: ce,
      minHeight: E,
      stickyHeader: te,
      zebraStripes: x,
      borderStyle: Z,
      // Behavior
      clickableRows: z,
      hoverEffects: H,
      onRowClick: q,
      onRowDoubleClick: ee,
      onCellEdit: Y,
      // Custom styling
      headerClassName: me,
      bodyClassName: de,
      rowClassName: Me,
      cellClassName: Ee,
      ...ae
    } = t, pe = Dl(a), we = (P, _e) => P !== void 0 ? P : _e, re = {
      ...pe,
      variant: g || pe.variant,
      layout: b || pe.layout,
      sortable: we(
        v,
        pe.sortable
      ),
      filterable: we(
        C,
        pe.filterable
      ),
      selectable: we(
        w,
        pe.selectable
      ),
      expandable: we(
        I,
        pe.expandable
      ),
      editable: we(
        j,
        pe.editable
      ),
      multiSort: we(
        O,
        pe.multiSort
      ),
      searchable: we(
        U,
        pe.searchable
      ),
      pagination: we(
        J,
        pe.pagination
      ),
      selectionMode: V || pe.selectionMode,
      expandableRows: we(
        F,
        pe.expandableRows
      ),
      loading: we(
        ge,
        pe.loading
      ),
      loadingRows: ie || pe.loadingRows,
      stickyHeader: we(
        te,
        pe.stickyHeader
      ),
      zebraStripes: we(
        x,
        pe.zebraStripes
      ),
      borderStyle: Z || pe.borderStyle,
      clickableRows: we(
        z,
        pe.clickableRows
      ),
      hoverEffects: we(
        H,
        pe.hoverEffects
      )
    }, Se = ha(), he = _ || `table-${Se}`, $ = dn();
    Re(() => ($(
      wp({
        componentId: he,
        initialState: {
          sorting: A && A.direction !== "none" ? {
            column: A.column,
            direction: A.direction
          } : { column: "", direction: "asc" },
          filters: W ? W.reduce(
            (P, _e) => (P[_e.column] = _e.value, P),
            {}
          ) : {},
          searchTerm: "",
          selectedRows: new Set(B || []),
          expandedRows: new Set(Q || []),
          editingCell: null
        }
      })
    ), () => {
      $(
        zp({
          componentId: he
        })
      );
    }), [
      $,
      he,
      A,
      W,
      B,
      Q
    ]);
    const R = ni(
      (P) => jp(P, he)
    ), Le = ni(
      (P) => Np(P, he)
    ), Xe = ni(
      (P) => Tp(P, he)
    ), qe = ni(
      (P) => Pp(P, he)
    ), Ke = ni(
      (P) => Ep(P, he)
    ), $e = ni(
      (P) => Ip(P, he)
    ), ve = Array.from(qe), Ue = Array.from(Ke), nt = Object.entries(Le).map(
      ([P, _e]) => ({
        column: P,
        value: _e,
        operator: "equals"
      })
    ), mt = m || [], Oe = h || [], jt = ki(() => re.loading ? Array.from(
      { length: re.loadingRows || 5 },
      (_e, ze) => {
        const Tt = { id: `skeleton-${ze}` };
        return mt.forEach((Gt) => {
          Tt[Gt.key] = "...";
        }), Tt;
      }
    ) : [], [re.loading, re.loadingRows, mt]), It = re.loading ? jt : Oe, Nt = ki(() => !re.searchable || !Xe.trim() ? It : It.filter((P) => mt.some((_e) => {
      const ze = P[_e.key];
      return String(ze).toLowerCase().includes(Xe.toLowerCase());
    })), [
      It,
      Xe,
      mt,
      re.searchable
    ]), si = ki(() => Le.length === 0 ? Nt : Nt.filter((P) => nt.every(
      (_e) => {
        const ze = P[_e.column];
        switch (_e.operator || "equals") {
          case "equals":
            return ze === _e.value;
          case "contains":
            return String(ze).toLowerCase().includes(
              String(_e.value).toLowerCase()
            );
          case "startsWith":
            return String(ze).toLowerCase().startsWith(
              String(_e.value).toLowerCase()
            );
          case "endsWith":
            return String(ze).toLowerCase().endsWith(
              String(_e.value).toLowerCase()
            );
          case "greaterThan":
            return Number(ze) > Number(_e.value);
          case "lessThan":
            return Number(ze) < Number(_e.value);
          default:
            return !0;
        }
      }
    )), [Nt, nt]), Bt = ki(() => !re.sortable || !R.column ? si : [...si].sort((P, _e) => {
      const ze = P[R.column], Tt = _e[R.column];
      let Gt = 0;
      return ze < Tt ? Gt = -1 : ze > Tt && (Gt = 1), R.direction === "desc" ? -Gt : Gt;
    }), [si, R, re.sortable]), li = (P) => {
      if (!re.sortable) return;
      let _e = "asc";
      R.column === P && (_e = R.direction === "asc" ? "desc" : R.direction === "desc" ? "none" : "asc");
      const ze = { column: P, direction: _e };
      $(
        kp({
          componentId: he,
          sorting: _e === "none" ? { column: "", direction: "asc" } : {
            column: P,
            direction: _e
          }
        })
      ), X == null || X(ze);
    }, Ht = (P, _e) => {
      if (!re.selectable) return;
      let ze;
      re.selectionMode === "single" ? ze = _e ? [P] : [] : ze = _e ? [...ve, P] : ve.filter(
        (Tt) => Tt !== P
      ), $(
        ss({
          componentId: he,
          selectedRows: ze
        })
      ), G == null || G(ze);
    }, Vt = (P) => {
      if (!re.expandable) return;
      const _e = Ue.includes(P), ze = _e ? Ue.filter(
        (Tt) => Tt !== P
      ) : [...Ue, P];
      $(
        Sp({
          componentId: he,
          expandedRows: ze
        })
      ), le == null || le(P, !_e);
    }, Jt = (P, _e, ze) => {
      Y == null || Y(P, _e, ze), $(
        wr({
          componentId: he,
          editingCell: null
        })
      );
    }, ji = [
      Be.table,
      Be[`table--${re.kind}`],
      Be[`table--${re.variant}`],
      Be[`table--${re.layout}`],
      re.stickyHeader && Be["table--sticky-header"],
      re.zebraStripes && Be["table--striped"],
      re.hoverEffects && Be["table--hover"],
      re.clickableRows && Be["table--clickable"],
      re.loading && Be["table--loading"],
      re.borderStyle && Be[`table--border-${re.borderStyle}`],
      c
    ].filter(Boolean).join(" "), Ni = [
      Be.table__header,
      me
    ].filter(Boolean).join(" "), ye = [Be.table__body, de].filter(Boolean).join(" "), Te = () => /* @__PURE__ */ s.jsx("thead", { className: Ni, children: /* @__PURE__ */ s.jsxs("tr", { className: Be.table__header_row, children: [
      re.selectable && /* @__PURE__ */ s.jsx("th", { className: Be.table__header_cell, children: /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          onChange: (P) => {
            const _e = Bt.map(
              (Tt) => Tt[f]
            ), ze = P.target.checked ? _e : [];
            $(
              ss({
                componentId: he,
                selectedRows: ze
              })
            ), G == null || G(ze);
          },
          checked: ve.length === Bt.length && Bt.length > 0,
          ref: (P) => {
            P && (P.indeterminate = ve.length > 0 && ve.length < Bt.length);
          }
        }
      ) }),
      re.expandable && /* @__PURE__ */ s.jsx("th", { className: Be.table__header_cell }),
      mt.map((P) => /* @__PURE__ */ s.jsx(
        "th",
        {
          className: `${Be.table__header_cell} ${P.sortable !== !1 && re.sortable ? Be["table__header_cell--sortable"] : ""}`,
          style: {
            width: P.width,
            minWidth: P.minWidth,
            maxWidth: P.maxWidth,
            textAlign: P.align || "left"
          },
          onClick: () => P.sortable !== !1 && li(P.key),
          children: /* @__PURE__ */ s.jsxs(
            "span",
            {
              className: Be.table__header_content,
              children: [
                P.label,
                re.sortable && P.sortable !== !1 && /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: Be.table__sort_indicator,
                    children: R.column === P.key && (R.direction === "asc" ? "↑" : R.direction === "desc" ? "↓" : "")
                  }
                )
              ]
            }
          )
        },
        P.key
      ))
    ] }) }), at = (P, _e) => {
      const ze = P[f], Tt = ve.includes(ze), Gt = Ue.includes(ze), Ca = typeof Me == "function" ? Me(P, _e) : Me, Sa = [
        Be.table__row,
        Tt && Be["table__row--selected"],
        Gt && Be["table__row--expanded"],
        re.loading && Be["table__row--skeleton"],
        Ca
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ s.jsxs(
        "tr",
        {
          className: Sa,
          onClick: () => {
            re.clickableRows && (q == null || q(P, _e));
          },
          onDoubleClick: () => ee == null ? void 0 : ee(P, _e),
          children: [
            re.selectable && /* @__PURE__ */ s.jsx("td", { className: Be.table__cell, children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: re.selectionMode === "single" ? "radio" : "checkbox",
                checked: Tt,
                onChange: (bt) => Ht(
                  ze,
                  bt.target.checked
                )
              }
            ) }),
            re.expandable && /* @__PURE__ */ s.jsx("td", { className: Be.table__cell, children: /* @__PURE__ */ s.jsx(
              ke,
              {
                kind: "ghost",
                className: Be.table__expand_button,
                onClick: (bt) => {
                  bt.stopPropagation(), Vt(ze);
                },
                children: Gt ? "−" : "+"
              }
            ) }),
            mt.map((bt) => {
              const Di = P[bt.key], Xt = ($e == null ? void 0 : $e.rowId) === ze && ($e == null ? void 0 : $e.column) === bt.key, ue = typeof Ee == "function" ? Ee(Di, P, bt) : Ee, Bn = [
                Be.table__cell,
                re.loading && Be["table__cell--skeleton"],
                ue
              ].filter(Boolean).join(" ");
              return /* @__PURE__ */ s.jsx(
                "td",
                {
                  className: Bn,
                  style: {
                    textAlign: bt.align || "left"
                  },
                  onDoubleClick: () => {
                    re.editable && $(
                      wr({
                        componentId: he,
                        editingCell: {
                          rowId: ze,
                          column: bt.key
                        }
                      })
                    );
                  },
                  children: Xt ? /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      defaultValue: Di,
                      onBlur: (Ti) => Jt(
                        ze,
                        bt.key,
                        Ti.target.value
                      ),
                      onKeyDown: (Ti) => {
                        Ti.key === "Enter" ? Jt(
                          ze,
                          bt.key,
                          Ti.currentTarget.value
                        ) : Ti.key === "Escape" && $(
                          wr({
                            componentId: he,
                            editingCell: null
                          })
                        );
                      },
                      autoFocus: !0
                    }
                  ) : bt.cellRenderer ? bt.cellRenderer(
                    Di,
                    P,
                    bt
                  ) : bt.format ? bt.format(Di) : re.loading ? /* @__PURE__ */ s.jsx(
                    p,
                    {
                      className: Be.skeleton_content
                    }
                  ) : Di
                },
                bt.key
              );
            })
          ]
        },
        ze
      );
    }, Lt = () => re.searchable ? /* @__PURE__ */ s.jsx(p, { className: Be.table__search, children: /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "text",
        placeholder: N || re.searchPlaceholder || "Search...",
        value: Xe,
        onChange: (P) => $(
          Cp({
            componentId: he,
            searchTerm: P.target.value
          })
        ),
        className: Be.table__search_input
      }
    ) }) : null, ci = {
      height: ne,
      maxHeight: ce,
      minHeight: E
    };
    return /* @__PURE__ */ s.jsxs(p, { className: Be.table_container, children: [
      Lt(),
      /* @__PURE__ */ s.jsx(
        p,
        {
          className: Be.table_wrapper,
          style: ci,
          children: /* @__PURE__ */ s.jsxs(
            "table",
            {
              ...ae,
              ref: i,
              className: ji,
              children: [
                Te(),
                /* @__PURE__ */ s.jsxs("tbody", { className: ye, children: [
                  Bt.map(
                    (P, _e) => at(P, _e)
                  ),
                  Bt.length === 0 && !re.loading && /* @__PURE__ */ s.jsx("tr", { className: Be.table__empty_row, children: /* @__PURE__ */ s.jsx(
                    "td",
                    {
                      colSpan: mt.length + (re.selectable ? 1 : 0) + (re.expandable ? 1 : 0),
                      className: Be.table__empty_cell,
                      children: "No data available"
                    }
                  ) })
                ] })
              ]
            }
          )
        }
      ),
      o
    ] });
  }
);
$l.displayName = "Table";
const t2 = oi($l), xt = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (a = {}) => {
    const o = { ...i, ...a };
    return Fe.createElement(t2, o);
  };
}, CN = {
  // Basic Tables
  dataTable: xt("data-table"),
  simpleTable: xt("simple-table"),
  sortableTable: xt("sortable-table"),
  filterableTable: xt("filterable-table"),
  // Advanced Tables
  dataGrid: xt("data-grid"),
  editableGrid: xt("editable-grid"),
  selectableGrid: xt("selectable-grid"),
  expandableGrid: xt("expandable-grid"),
  // Loading States
  skeletonTable: xt("skeleton-table"),
  loadingTable: xt("loading-table"),
  // Specialized Tables
  pricingTable: xt("pricing-table"),
  comparisonTable: xt("comparison-table"),
  statsTable: xt("stats-table"),
  leaderboardTable: xt("leaderboard-table"),
  // Advanced Presets
  dashboardGrid: xt({
    kind: "data-grid",
    variant: "modern",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    pagination: !0,
    stickyHeader: !0
  }),
  adminTable: xt({
    kind: "data-grid",
    variant: "bordered",
    sortable: !0,
    filterable: !0,
    selectable: !0,
    selectionMode: "multiple",
    editable: !0,
    pagination: !0
  }),
  reportTable: xt({
    kind: "stats-table",
    variant: "striped",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    zebraStripes: !0,
    stickyHeader: !0
  }),
  quickList: xt({
    kind: "simple-table",
    variant: "minimal",
    hoverEffects: !0,
    clickableRows: !0
  }),
  gameLeaderboard: xt({
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
}, i2 = "_container_17enc_143", n2 = "_flex_17enc_274", a2 = "_grid_17enc_370", r2 = "_relative_17enc_752", o2 = "_absolute_17enc_756", s2 = "_fixed_17enc_760", l2 = "_sticky_17enc_764", c2 = "_truncate_17enc_903", d2 = "_border_17enc_963", _2 = "_rounded_17enc_1003", u2 = "_shadow_17enc_1035", m2 = "_transition_17enc_1107", p2 = "_small_17enc_1607", h2 = "_large_17enc_1611", f2 = "_card_17enc_1659", g2 = "_utility_17enc_1784", y2 = "_utility__icon_17enc_2043", b2 = "_utility__label_17enc_2049", v2 = "_utility__dismiss_17enc_2055", x2 = "_utility__overlay_17enc_2092", w2 = "_utility__tooltip_17enc_2152", k2 = "_utility__popover_17enc_2155", C2 = "_utility__popover_title_17enc_2160", S2 = "_utility__popover_content_17enc_2165", z2 = "_utility__rating_17enc_2168", j2 = "_utility__star_17enc_2176", N2 = "_utility__rating_label_17enc_2215", T2 = "_utility__stepper_17enc_2222", P2 = "_utility__step_17enc_2222", E2 = "_utility__step_marker_17enc_2251", I2 = "_utility__step_connector_17enc_2267", L2 = "_utility__divider_label_17enc_2287", Ze = {
  container: i2,
  "container-sm": "_container-sm_17enc_159",
  "container-md": "_container-md_17enc_175",
  "container-lg": "_container-lg_17enc_191",
  "container-xl": "_container-xl_17enc_207",
  "container-2xl": "_container-2xl_17enc_223",
  "safe-area": "_safe-area_17enc_239",
  "overflow-hidden": "_overflow-hidden_17enc_245",
  "overflow-auto": "_overflow-auto_17enc_249",
  "overflow-x-auto": "_overflow-x-auto_17enc_254",
  "overflow-y-auto": "_overflow-y-auto_17enc_260",
  "box-border": "_box-border_17enc_266",
  "box-content": "_box-content_17enc_270",
  flex: n2,
  "flex-col": "_flex-col_17enc_278",
  "flex-row": "_flex-row_17enc_283",
  "flex-wrap": "_flex-wrap_17enc_288",
  "flex-nowrap": "_flex-nowrap_17enc_293",
  "flex-center": "_flex-center_17enc_298",
  "flex-between": "_flex-between_17enc_304",
  "justify-start": "_justify-start_17enc_310",
  "justify-center": "_justify-center_17enc_314",
  "justify-end": "_justify-end_17enc_318",
  "justify-between": "_justify-between_17enc_322",
  "justify-around": "_justify-around_17enc_326",
  "items-start": "_items-start_17enc_330",
  "items-center": "_items-center_17enc_334",
  "items-end": "_items-end_17enc_338",
  "items-stretch": "_items-stretch_17enc_342",
  "flex-1": "_flex-1_17enc_346",
  "flex-auto": "_flex-auto_17enc_350",
  "flex-none": "_flex-none_17enc_354",
  "flex-grow": "_flex-grow_17enc_358",
  "flex-shrink": "_flex-shrink_17enc_362",
  "flex-shrink-0": "_flex-shrink-0_17enc_366",
  grid: a2,
  "grid-auto-fit": "_grid-auto-fit_17enc_374",
  "grid-auto-fill": "_grid-auto-fill_17enc_381",
  "grid-cols-1": "_grid-cols-1_17enc_388",
  "grid-cols-2": "_grid-cols-2_17enc_392",
  "grid-cols-3": "_grid-cols-3_17enc_396",
  "grid-cols-4": "_grid-cols-4_17enc_400",
  "grid-cols-6": "_grid-cols-6_17enc_404",
  "grid-cols-12": "_grid-cols-12_17enc_408",
  "gap-0": "_gap-0_17enc_412",
  "gap-1": "_gap-1_17enc_416",
  "gap-2": "_gap-2_17enc_420",
  "gap-3": "_gap-3_17enc_424",
  "gap-4": "_gap-4_17enc_428",
  "gap-5": "_gap-5_17enc_432",
  "gap-6": "_gap-6_17enc_436",
  "gap-8": "_gap-8_17enc_440",
  "gap-10": "_gap-10_17enc_444",
  "gap-12": "_gap-12_17enc_448",
  "p-0": "_p-0_17enc_452",
  "p-1": "_p-1_17enc_456",
  "p-2": "_p-2_17enc_460",
  "p-3": "_p-3_17enc_464",
  "p-4": "_p-4_17enc_468",
  "p-5": "_p-5_17enc_472",
  "p-6": "_p-6_17enc_476",
  "p-8": "_p-8_17enc_480",
  "p-10": "_p-10_17enc_484",
  "p-12": "_p-12_17enc_488",
  "px-0": "_px-0_17enc_492",
  "px-1": "_px-1_17enc_497",
  "px-2": "_px-2_17enc_502",
  "px-3": "_px-3_17enc_507",
  "px-4": "_px-4_17enc_512",
  "px-6": "_px-6_17enc_517",
  "py-0": "_py-0_17enc_522",
  "py-1": "_py-1_17enc_527",
  "py-2": "_py-2_17enc_532",
  "py-3": "_py-3_17enc_537",
  "py-4": "_py-4_17enc_542",
  "py-6": "_py-6_17enc_547",
  "m-0": "_m-0_17enc_552",
  "m-1": "_m-1_17enc_556",
  "m-2": "_m-2_17enc_560",
  "m-3": "_m-3_17enc_564",
  "m-4": "_m-4_17enc_568",
  "m-auto": "_m-auto_17enc_572",
  "mx-auto": "_mx-auto_17enc_576",
  "my-auto": "_my-auto_17enc_581",
  "mx-0": "_mx-0_17enc_586",
  "mx-1": "_mx-1_17enc_591",
  "mx-2": "_mx-2_17enc_596",
  "mx-3": "_mx-3_17enc_601",
  "mx-4": "_mx-4_17enc_606",
  "my-0": "_my-0_17enc_611",
  "my-1": "_my-1_17enc_616",
  "my-2": "_my-2_17enc_621",
  "my-3": "_my-3_17enc_626",
  "my-4": "_my-4_17enc_631",
  "w-full": "_w-full_17enc_636",
  "w-auto": "_w-auto_17enc_640",
  "w-fit": "_w-fit_17enc_644",
  "w-min": "_w-min_17enc_648",
  "w-max": "_w-max_17enc_652",
  "max-w-none": "_max-w-none_17enc_656",
  "max-w-xs": "_max-w-xs_17enc_660",
  "max-w-sm": "_max-w-sm_17enc_664",
  "max-w-md": "_max-w-md_17enc_668",
  "max-w-lg": "_max-w-lg_17enc_672",
  "max-w-xl": "_max-w-xl_17enc_676",
  "max-w-2xl": "_max-w-2xl_17enc_680",
  "max-w-3xl": "_max-w-3xl_17enc_684",
  "max-w-4xl": "_max-w-4xl_17enc_688",
  "max-w-5xl": "_max-w-5xl_17enc_692",
  "max-w-6xl": "_max-w-6xl_17enc_696",
  "max-w-7xl": "_max-w-7xl_17enc_700",
  "max-w-full": "_max-w-full_17enc_704",
  "min-w-0": "_min-w-0_17enc_708",
  "min-w-full": "_min-w-full_17enc_712",
  "h-auto": "_h-auto_17enc_716",
  "h-fit": "_h-fit_17enc_720",
  "h-full": "_h-full_17enc_724",
  "h-screen": "_h-screen_17enc_728",
  "max-h-full": "_max-h-full_17enc_732",
  "max-h-screen": "_max-h-screen_17enc_736",
  "min-h-0": "_min-h-0_17enc_740",
  "min-h-full": "_min-h-full_17enc_744",
  "min-h-screen": "_min-h-screen_17enc_748",
  relative: r2,
  absolute: o2,
  fixed: s2,
  sticky: l2,
  static: "_static_17enc_768",
  "inset-0": "_inset-0_17enc_772",
  "top-0": "_top-0_17enc_779",
  "right-0": "_right-0_17enc_783",
  "bottom-0": "_bottom-0_17enc_787",
  "left-0": "_left-0_17enc_791",
  "text-left": "_text-left_17enc_795",
  "text-center": "_text-center_17enc_799",
  "text-right": "_text-right_17enc_803",
  "text-justify": "_text-justify_17enc_807",
  "text-xs": "_text-xs_17enc_811",
  "text-sm": "_text-sm_17enc_815",
  "text-base": "_text-base_17enc_819",
  "text-lg": "_text-lg_17enc_823",
  "text-xl": "_text-xl_17enc_827",
  "text-2xl": "_text-2xl_17enc_831",
  "text-3xl": "_text-3xl_17enc_835",
  "text-4xl": "_text-4xl_17enc_839",
  "font-normal": "_font-normal_17enc_843",
  "font-medium": "_font-medium_17enc_847",
  "font-semibold": "_font-semibold_17enc_851",
  "font-bold": "_font-bold_17enc_855",
  "leading-tight": "_leading-tight_17enc_859",
  "leading-normal": "_leading-normal_17enc_863",
  "leading-relaxed": "_leading-relaxed_17enc_867",
  "text-primary": "_text-primary_17enc_871",
  "text-secondary": "_text-secondary_17enc_875",
  "text-muted": "_text-muted_17enc_879",
  "text-inverse": "_text-inverse_17enc_883",
  "text-blue": "_text-blue_17enc_887",
  "text-red": "_text-red_17enc_891",
  "text-green": "_text-green_17enc_895",
  "text-yellow": "_text-yellow_17enc_899",
  truncate: c2,
  "text-ellipsis": "_text-ellipsis_17enc_910",
  "text-clip": "_text-clip_17enc_917",
  "bg-transparent": "_bg-transparent_17enc_923",
  "bg-white": "_bg-white_17enc_927",
  "bg-gray-50": "_bg-gray-50_17enc_931",
  "bg-gray-100": "_bg-gray-100_17enc_935",
  "bg-gray-200": "_bg-gray-200_17enc_939",
  "bg-primary": "_bg-primary_17enc_943",
  "bg-secondary": "_bg-secondary_17enc_947",
  "bg-success": "_bg-success_17enc_951",
  "bg-danger": "_bg-danger_17enc_955",
  "bg-warning": "_bg-warning_17enc_959",
  border: d2,
  "border-0": "_border-0_17enc_967",
  "border-t": "_border-t_17enc_971",
  "border-r": "_border-r_17enc_975",
  "border-b": "_border-b_17enc_979",
  "border-l": "_border-l_17enc_983",
  "border-gray-200": "_border-gray-200_17enc_987",
  "border-gray-300": "_border-gray-300_17enc_991",
  "border-primary": "_border-primary_17enc_995",
  "border-danger": "_border-danger_17enc_999",
  "rounded-none": "_rounded-none_17enc_1003",
  "rounded-sm": "_rounded-sm_17enc_1007",
  rounded: _2,
  "rounded-md": "_rounded-md_17enc_1015",
  "rounded-lg": "_rounded-lg_17enc_1019",
  "rounded-xl": "_rounded-xl_17enc_1023",
  "rounded-2xl": "_rounded-2xl_17enc_1027",
  "rounded-full": "_rounded-full_17enc_1031",
  "shadow-none": "_shadow-none_17enc_1035",
  "shadow-sm": "_shadow-sm_17enc_1039",
  shadow: u2,
  "shadow-md": "_shadow-md_17enc_1047",
  "shadow-lg": "_shadow-lg_17enc_1051",
  "shadow-xl": "_shadow-xl_17enc_1055",
  "z-0": "_z-0_17enc_1059",
  "z-10": "_z-10_17enc_1063",
  "z-20": "_z-20_17enc_1067",
  "z-30": "_z-30_17enc_1071",
  "z-40": "_z-40_17enc_1075",
  "z-50": "_z-50_17enc_1079",
  "z-auto": "_z-auto_17enc_1083",
  "z-dropdown": "_z-dropdown_17enc_1087",
  "z-sticky": "_z-sticky_17enc_1091",
  "z-fixed": "_z-fixed_17enc_1095",
  "z-modal": "_z-modal_17enc_1099",
  "z-tooltip": "_z-tooltip_17enc_1103",
  "transition-none": "_transition-none_17enc_1107",
  "transition-all": "_transition-all_17enc_1111",
  "transition-fast": "_transition-fast_17enc_1115",
  "transition-slow": "_transition-slow_17enc_1119",
  "sr-only": "_sr-only_17enc_1123",
  "focus-ring": "_focus-ring_17enc_1135",
  "cursor-default": "_cursor-default_17enc_1141",
  "cursor-pointer": "_cursor-pointer_17enc_1145",
  "cursor-not-allowed": "_cursor-not-allowed_17enc_1149",
  "select-none": "_select-none_17enc_1153",
  "select-text": "_select-text_17enc_1157",
  "select-all": "_select-all_17enc_1161",
  "select-auto": "_select-auto_17enc_1165",
  "pointer-events-none": "_pointer-events-none_17enc_1169",
  "pointer-events-auto": "_pointer-events-auto_17enc_1173",
  "gap-sm": "_gap-sm_17enc_1177",
  "gap-md": "_gap-md_17enc_1181",
  "gap-lg": "_gap-lg_17enc_1185",
  "gap-xl": "_gap-xl_17enc_1189",
  "p-sm": "_p-sm_17enc_1193",
  "p-md": "_p-md_17enc_1197",
  "p-lg": "_p-lg_17enc_1201",
  "p-xl": "_p-xl_17enc_1205",
  "m-sm": "_m-sm_17enc_1209",
  "m-md": "_m-md_17enc_1213",
  "m-lg": "_m-lg_17enc_1217",
  "m-xl": "_m-xl_17enc_1221",
  "text-gray": "_text-gray_17enc_1225",
  "mobile:hidden": "_mobile:hidden_17enc_1230",
  "mobile:block": "_mobile:block_17enc_1233",
  "mobile:flex": "_mobile:flex_17enc_1236",
  "mobile:grid": "_mobile:grid_17enc_1239",
  "mobile:text-sm": "_mobile:text-sm_17enc_1242",
  "mobile:text-xs": "_mobile:text-xs_17enc_1245",
  "mobile:p-2": "_mobile:p-2_17enc_1248",
  "mobile:px-2": "_mobile:px-2_17enc_1251",
  "tablet:block": "_tablet:block_17enc_1257",
  "tablet:flex": "_tablet:flex_17enc_1260",
  "tablet:grid": "_tablet:grid_17enc_1263",
  "tablet:hidden": "_tablet:hidden_17enc_1266",
  "desktop:block": "_desktop:block_17enc_1271",
  "desktop:flex": "_desktop:flex_17enc_1274",
  "desktop:grid": "_desktop:grid_17enc_1277",
  "desktop:hidden": "_desktop:hidden_17enc_1280",
  "bg-gray": "_bg-gray_17enc_931",
  "border-secondary": "_border-secondary_17enc_1304",
  "border-gray": "_border-gray_17enc_987",
  "shadow-glow": "_shadow-glow_17enc_1340",
  "w-8": "_w-8_17enc_1388",
  "w-10": "_w-10_17enc_1392",
  "w-12": "_w-12_17enc_1396",
  "w-16": "_w-16_17enc_1400",
  "h-8": "_h-8_17enc_1404",
  "h-10": "_h-10_17enc_1408",
  "h-12": "_h-12_17enc_1412",
  "h-16": "_h-16_17enc_1416",
  "user-select-none": "_user-select-none_17enc_1432",
  transition: m2,
  "transition-colors": "_transition-colors_17enc_1440",
  "transition-transform": "_transition-transform_17enc_1444",
  "hover-scale": "_hover-scale_17enc_1448",
  "fade-in": "_fade-in_17enc_1455",
  "status-online": "_status-online_17enc_1467",
  "status-offline": "_status-offline_17enc_1477",
  "status-away": "_status-away_17enc_1487",
  "status-busy": "_status-busy_17enc_1497",
  "modal-overlay": "_modal-overlay_17enc_1507",
  "modal-content": "_modal-content_17enc_1521",
  "close-button-absolute": "_close-button-absolute_17enc_1535",
  small: p2,
  large: h2,
  "primary-button": "_primary-button_17enc_1616",
  "secondary-button": "_secondary-button_17enc_1620",
  card: f2,
  "input-base": "_input-base_17enc_1673",
  "chat-window": "_chat-window_17enc_1705",
  "chat-message": "_chat-message_17enc_1716",
  "z-overlay": "_z-overlay_17enc_1741",
  "mobile-hidden": "_mobile-hidden_17enc_1746",
  "mobile-flex-col": "_mobile-flex-col_17enc_1749",
  "mobile-text-center": "_mobile-text-center_17enc_1752",
  "mobile-p-sm": "_mobile-p-sm_17enc_1755",
  "mobile-gap-sm": "_mobile-gap-sm_17enc_1758",
  "desktop-hidden": "_desktop-hidden_17enc_1763",
  "print-hidden": "_print-hidden_17enc_1768",
  utility: g2,
  "utility--xs": "_utility--xs_17enc_1792",
  "utility--sm": "_utility--sm_17enc_1799",
  "utility--md": "_utility--md_17enc_1806",
  "utility--lg": "_utility--lg_17enc_1813",
  "utility--xl": "_utility--xl_17enc_1820",
  "utility--default": "_utility--default_17enc_1828",
  "utility--primary": "_utility--primary_17enc_1833",
  "utility--secondary": "_utility--secondary_17enc_1838",
  "utility--success": "_utility--success_17enc_1843",
  "utility--warning": "_utility--warning_17enc_1848",
  "utility--error": "_utility--error_17enc_1853",
  "utility--info": "_utility--info_17enc_1858",
  "utility--active": "_utility--active_17enc_1863",
  "utility--disabled": "_utility--disabled_17enc_1868",
  "utility--loading": "_utility--loading_17enc_1873",
  "utility--interactive": "_utility--interactive_17enc_1877",
  "utility--dismissible": "_utility--dismissible_17enc_1896",
  "utility--tooltip": "_utility--tooltip_17enc_1899",
  "utility--popover": "_utility--popover_17enc_1899",
  "utility--tag": "_utility--tag_17enc_1902",
  "utility--chip": "_utility--chip_17enc_1902",
  "utility--badge": "_utility--badge_17enc_1902",
  "utility--pill": "_utility--pill_17enc_1902",
  "utility--label": "_utility--label_17enc_1902",
  "utility--status-indicator": "_utility--status-indicator_17enc_1902",
  "utility--divider": "_utility--divider_17enc_1934",
  "utility--separator": "_utility--separator_17enc_1934",
  "utility--spacer": "_utility--spacer_17enc_1951",
  "utility--section-break": "_utility--section-break_17enc_1971",
  "utility--container": "_utility--container_17enc_1995",
  "utility--stack": "_utility--stack_17enc_2014",
  "utility--inline-stack": "_utility--inline-stack_17enc_2022",
  "utility--rating-stars": "_utility--rating-stars_17enc_2031",
  "utility--rating-hearts": "_utility--rating-hearts_17enc_2031",
  "utility--thumbs-rating": "_utility--thumbs-rating_17enc_2031",
  "utility--stepper": "_utility--stepper_17enc_2036",
  "utility--wizard-steps": "_utility--wizard-steps_17enc_2036",
  utility__icon: y2,
  utility__label: b2,
  utility__dismiss: v2,
  utility__overlay: x2,
  "utility--visible": "_utility--visible_17enc_2111",
  "utility--top": "_utility--top_17enc_2116",
  "utility--bottom": "_utility--bottom_17enc_2125",
  "utility--left": "_utility--left_17enc_2134",
  "utility--right": "_utility--right_17enc_2143",
  utility__tooltip: w2,
  utility__popover: k2,
  utility__popover_title: C2,
  utility__popover_content: S2,
  utility__rating: z2,
  utility__star: j2,
  "utility__star--filled": "_utility__star--filled_17enc_2201",
  utility__rating_label: N2,
  utility__stepper: T2,
  utility__step: P2,
  utility__step_marker: E2,
  utility__step_connector: I2,
  "utility__step--completed": "_utility__step--completed_17enc_2273",
  "utility__step--active": "_utility__step--active_17enc_2281",
  utility__divider_label: L2,
  "loading-shimmer": "_loading-shimmer_17enc_1"
}, A2 = {
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
}, Wl = (t) => A2[t], Ul = Ae(
  ({
    kind: t = "tooltip",
    children: i,
    className: a = "",
    componentId: o,
    label: c,
    description: _,
    icon: m,
    placement: h,
    trigger: f,
    delay: g,
    dismissible: b,
    interactive: v,
    active: C,
    disabled: w,
    loading: I,
    value: j = 0,
    maxValue: A = 5,
    currentStep: O = 0,
    totalSteps: X = 3,
    actions: W,
    variant: U,
    size: N,
    color: T,
    backgroundColor: J,
    borderRadius: V,
    onClick: B,
    onDismiss: G,
    onValueChange: F,
    onStepChange: Q,
    ...le
  }, ge) => {
    const ie = Wl(t), ne = ha(), ce = o || `utility-${ne}`, E = dn();
    Re(() => (E(
      zn({
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
      E(Dr(ce));
    }), [E, ce]);
    const te = ni(
      Rm(ce)
    ) || {}, x = (te == null ? void 0 : te.isVisible) || !1;
    te != null && te.isHovered;
    const Z = ut(null);
    ut(null);
    const z = {
      ...ie,
      label: c ?? ie.label,
      description: _ ?? ie.description,
      icon: m ?? ie.icon,
      placement: h ?? ie.placement,
      trigger: f ?? ie.trigger,
      delay: g ?? ie.delay,
      dismissible: b ?? ie.dismissible,
      interactive: v ?? ie.interactive,
      active: C ?? ie.active,
      disabled: w ?? ie.disabled,
      loading: I ?? ie.loading,
      actions: W ?? ie.actions,
      variant: U ?? ie.variant,
      size: N ?? ie.size,
      color: T ?? ie.color,
      backgroundColor: J ?? ie.backgroundColor,
      borderRadius: V ?? ie.borderRadius
    }, H = [
      Ze.utility,
      Ze[`utility--${z.kind}`],
      Ze[`utility--${z.variant}`],
      Ze[`utility--${z.size}`],
      z.placement && Ze[`utility--${z.placement}`],
      z.active && Ze["utility--active"],
      z.disabled && Ze["utility--disabled"],
      z.loading && Ze["utility--loading"],
      z.interactive && Ze["utility--interactive"],
      z.dismissible && Ze["utility--dismissible"],
      x && Ze["utility--visible"],
      a
    ].filter(Boolean).join(" "), q = () => {
      if (z.trigger === "hover") {
        Z.current && clearTimeout(Z.current);
        const $ = setTimeout(() => {
          E(
            zn({
              componentId: ce,
              updates: { isVisible: !0 }
            })
          );
        }, z.delay || 0);
        Z.current = $;
      }
    }, ee = () => {
      z.trigger === "hover" && (Z.current && clearTimeout(Z.current), E(
        zn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ));
    }, Y = () => {
      z.trigger === "click" && E(
        zn({
          componentId: ce,
          updates: { isVisible: !x }
        })
      ), B == null || B();
    }, me = () => {
      E(
        zn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ), G == null || G();
    }, de = ($) => {
      !z.interactive || z.disabled || F == null || F($);
    }, Me = ($) => {
      !z.interactive || z.disabled || Q == null || Q($);
    }, Ee = () => t === "tooltip" ? /* @__PURE__ */ s.jsx(p, { className: Ze.utility__tooltip, children: z.label }) : t === "popover" ? /* @__PURE__ */ s.jsxs(p, { className: Ze.utility__popover, children: [
      z.label && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Ze.utility__popover_title,
          children: z.label
        }
      ),
      z.description && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Ze.utility__popover_content,
          children: z.description
        }
      ),
      i
    ] }) : i, ae = () => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      z.icon && /* @__PURE__ */ s.jsx("span", { className: Ze.utility__icon, children: z.icon }),
      /* @__PURE__ */ s.jsx("span", { className: Ze.utility__label, children: z.label || i }),
      z.dismissible && /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: "danger",
          className: Ze.utility__dismiss,
          onClick: me,
          "aria-label": "Dismiss",
          children: "×"
        }
      )
    ] }), pe = () => {
      const $ = [];
      for (let R = 1; R <= A; R++)
        $.push(
          /* @__PURE__ */ s.jsx(
            ke,
            {
              kind: "ghost",
              className: [
                Ze.utility__star,
                R <= j && Ze["utility__star--filled"]
              ].filter(Boolean).join(" "),
              onClick: () => de(R),
              disabled: z.disabled,
              "aria-label": `Rate ${R} stars`,
              children: t === "rating-hearts" ? "♥" : t === "thumbs-rating" ? "👍" : "★"
            },
            R
          )
        );
      return $;
    }, we = () => {
      const $ = [];
      for (let R = 0; R < X; R++)
        $.push(
          /* @__PURE__ */ s.jsxs(
            p,
            {
              className: [
                Ze.utility__step,
                R <= O && Ze["utility__step--completed"],
                R === O && Ze["utility__step--active"]
              ].filter(Boolean).join(" "),
              onClick: () => Me(R),
              children: [
                /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: Ze.utility__step_marker
                  }
                ),
                R < X - 1 && /* @__PURE__ */ s.jsx(
                  p,
                  {
                    className: Ze.utility__step_connector
                  }
                )
              ]
            },
            R
          )
        );
      return $;
    }, re = () => /* @__PURE__ */ s.jsx(s.Fragment, { children: z.label && /* @__PURE__ */ s.jsx("span", { className: Ze.utility__divider_label, children: z.label }) }), Se = () => {
      switch (!0) {
        case (t === "tooltip" || t === "popover"):
          return Ee();
        case (t.includes("tag") || t.includes("chip") || t.includes("badge") || t.includes("pill")):
          return ae();
        case t.includes("rating"):
          return /* @__PURE__ */ s.jsx(p, { className: Ze.utility__rating, children: pe() });
        case (t === "stepper" || t === "wizard-steps"):
          return /* @__PURE__ */ s.jsx(p, { className: Ze.utility__stepper, children: we() });
        case (t.includes("divider") || t.includes("separator")):
          return re();
        case t.includes("spacer"):
          return null;
        default:
          return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            z.icon && /* @__PURE__ */ s.jsx("span", { className: Ze.utility__icon, children: z.icon }),
            z.label && /* @__PURE__ */ s.jsx("span", { className: Ze.utility__label, children: z.label }),
            i
          ] });
      }
    }, he = {
      color: z.color,
      backgroundColor: z.backgroundColor,
      borderRadius: z.borderRadius
    };
    return /* @__PURE__ */ s.jsx(
      p,
      {
        ref: ge,
        className: H,
        style: he,
        onMouseEnter: q,
        onMouseLeave: ee,
        onClick: Y,
        role: z.interactive ? "button" : void 0,
        tabIndex: z.interactive ? 0 : void 0,
        "aria-disabled": z.disabled,
        ...le,
        children: Se()
      }
    );
  }
);
Ul.displayName = "Utility";
const M2 = oi(Ul);
class Ve {
  static create(i) {
    return Fe.forwardRef(
      (a, o) => Fe.createElement(M2, {
        ref: o,
        ...i,
        ...a
      })
    );
  }
  static createFromKind(i) {
    const a = Wl(i);
    return this.create(a);
  }
}
const SN = {
  // Overlay components
  Tooltip: Ve.createFromKind("tooltip"),
  Popover: Ve.createFromKind("popover"),
  DropdownMenu: Ve.createFromKind("dropdown-menu"),
  ContextMenu: Ve.createFromKind("context-menu"),
  ModalOverlay: Ve.createFromKind("modal-overlay"),
  // Separator components
  Divider: Ve.createFromKind("divider"),
  Separator: Ve.createFromKind("separator"),
  Spacer: Ve.createFromKind("spacer"),
  SectionBreak: Ve.createFromKind("section-break"),
  // Tag/Label components
  Tag: Ve.createFromKind("tag"),
  Chip: Ve.createFromKind("chip"),
  Badge: Ve.createFromKind("badge"),
  Label: Ve.createFromKind("label"),
  Pill: Ve.createFromKind("pill"),
  StatusIndicator: Ve.createFromKind(
    "status-indicator"
  ),
  // Step/Process components
  Stepper: Ve.createFromKind("stepper"),
  Breadcrumb: Ve.createFromKind("breadcrumb"),
  Pagination: Ve.createFromKind("pagination"),
  WizardSteps: Ve.createFromKind("wizard-steps"),
  // Rating/Feedback components
  RatingStars: Ve.createFromKind("rating-stars"),
  RatingHearts: Ve.createFromKind("rating-hearts"),
  ThumbsRating: Ve.createFromKind("thumbs-rating"),
  NumericRating: Ve.createFromKind(
    "numeric-rating"
  ),
  FeedbackScale: Ve.createFromKind(
    "feedback-scale"
  ),
  // Layout utilities
  Container: Ve.createFromKind("container"),
  GridItem: Ve.createFromKind("grid-item"),
  FlexItem: Ve.createFromKind("flex-item"),
  Stack: Ve.createFromKind("stack"),
  InlineStack: Ve.createFromKind("inline-stack")
};
export {
  l5 as ADMIN_CONFIGURATIONS,
  En as ADVERTISEMENT_CONFIGURATIONS,
  g5 as ADVERTISEMENT_GROUPS,
  y5 as ADVERTISEMENT_PRESETS,
  M5 as ActionCard,
  s5 as Admin,
  Si as Advertisements,
  x5 as Ana,
  dl as Analytics,
  _l as AnalyticsBodyFactory,
  Mi as AnalyticsFactory,
  b5 as AnalyticsFactoryClass,
  v5 as AnalyticsPresets,
  dl as AnalyticsReports,
  hs as BUTTON_CONFIGURATIONS,
  F2 as BUTTON_GROUPS,
  Nj as BrowseHeader,
  ke as Button,
  ul as CARD_CONFIGURATIONS,
  w5 as CARD_GROUPS,
  ds as CHART_CONFIGURATIONS,
  Yf as CHECKBOX_CONFIGURATIONS,
  Ig as COMPONENT_CONFIGURATIONS,
  Zt as Card,
  R5 as Chart,
  Q5 as ChartControls,
  va as Checkbox,
  xg as CheckboxFactory,
  pi as CheckboxFactoryClass,
  rj as CheckboxPresets,
  ct as ComponentFactory,
  dj as ComponentPresets,
  O5 as ContentCard,
  wg as DarkModeToggle,
  dl as Dashboard,
  nj as DashboardLegend,
  ij as DataSeriesToggle,
  $g as EmptyState,
  uj as EmptyStateComponents,
  Dt as EmptyStateFactory,
  Ar as FILE_UPLOAD_CONFIGURATIONS,
  mj as FILE_UPLOAD_GROUPS,
  Wr as FORM_FIELD_CONFIGURATIONS,
  oj as FORM_FIELD_GROUPS,
  sj as FORM_FIELD_PRESETS,
  Lb as FileUpload,
  xj as FileUploadComponents,
  hi as FileUploadFactory,
  Y5 as FilterButtons,
  q5 as FilterCheckboxes,
  K5 as FilterControls,
  J5 as FilterDropdown,
  X5 as FilterMultiSelect,
  gl as Forms,
  fl as FormsBodyFactory,
  Ge as FormsFactory,
  cj as FormsPresets,
  z5 as FriendCard,
  Yj as FriendsSidebar,
  P5 as GameCard,
  aj as GameStatsFilter,
  Ur as HEADER_CONFIGURATIONS,
  wj as HEADER_GROUPS,
  Zr as Header,
  ht as HeaderFactory,
  zj as HeaderPresets,
  A5 as InfoCard,
  F5 as LegendChart,
  W5 as LegendGrid,
  D5 as LegendHorizontal,
  U5 as LegendMinimal,
  $5 as LegendVertical,
  kx as MODAL_CONFIGURATIONS,
  Rn as MODAL_GROUPS,
  Hv as Map,
  Tj as MapComponents,
  yt as MapFactory,
  L5 as MatchCard,
  R1 as Media,
  Pj as MediaComponents,
  Ye as MediaFactory,
  dl as MetricsDashboard,
  Il as Modal,
  zx as ModalFactory,
  Oj as ModalPresets,
  Bj as ModalWorkflows,
  ka as NAVIGATION_CONFIGURATIONS,
  Uj as NAVIGATION_PRESETS,
  ms as NOTIFICATION_CONFIGURATIONS,
  n0 as Navigation,
  Ot as NavigationFactory,
  Hj as NavigationPresets,
  z0 as Notification,
  N5 as NotificationCard,
  rt as NotificationFactory,
  Kj as NotificationPresets,
  dl as PerformanceMetrics,
  j5 as ProfileCard,
  ik as Progress,
  qj as ProgressComponents,
  _t as ProgressFactory,
  E5 as PuzzleCard,
  D2 as QUICK_BUTTONS,
  k5 as QUICK_CARDS,
  kj as QUICK_HEADERS,
  Zj as QUICK_NAVIGATION,
  nC as QUICK_WRAPPERS,
  _j as QuickComponents,
  dl as RealtimeAnalytics,
  I5 as RoomCard,
  Fl as Sidebar,
  xN as SidebarComposer,
  Rt as SidebarFactory,
  Xj as SidebarGroups,
  Jj as SidebarPresets,
  fi as SimpleModalFactory,
  T5 as StatsCard,
  ps as TABLE_CONFIGURATIONS,
  t2 as Table,
  xt as TableFactory,
  CN as TablePresets,
  tj as TimeRangeSelector,
  Z5 as TooltipChart,
  G5 as TooltipCustom,
  V5 as TooltipDetailed,
  H5 as TooltipSimple,
  M2 as Utility,
  SN as UtilityComponents,
  Ve as UtilityFactory,
  In as WRAPPER_CONFIGURATIONS,
  iC as WRAPPER_GROUPS,
  p as Wrapper,
  ii as WrapperFactory,
  aC as WrapperPresets,
  ej as ZoomControls,
  Z2 as addButton,
  Lr as analyticsConfigurations,
  V2 as backButton,
  Dh as barChart,
  y_ as cancelButton,
  H2 as closeButton,
  q2 as confirmDialogButtons,
  Bh as conversionDashboard,
  Vh as conversionFunnel,
  Hh as conversionHeatmap,
  G2 as copyButton,
  c5 as createAdSenseProvider,
  d5 as createAdsterraProvider,
  p5 as createAdvertisementConfig,
  f5 as createAnalyticsEvent,
  Ut as createButton,
  mi as createButtonConfig,
  $2 as createButtonGroup,
  C5 as createCard,
  Gi as createCardConfig,
  S5 as createCardWithConfig,
  B5 as createChart,
  nN as createChatSidebar,
  m5 as createCustomAnalyticsProvider,
  _5 as createCustomProvider,
  uN as createDesktopSidebar,
  pN as createFadeSidebar,
  vj as createFilePreview,
  pj as createFileUploadConfig,
  kg as createFormsConfig,
  eN as createFriendsCompactSidebar,
  tN as createFriendsExpandedSidebar,
  Qj as createFriendsSidebar,
  dN as createFullSidebar,
  u5 as createGoogleAnalyticsProvider,
  jj as createHeader,
  Cj as createHeaderConfig,
  cN as createLargeSidebar,
  rN as createLeftSidebar,
  lN as createMediumSidebar,
  _N as createMobileSidebar,
  Rj as createModal,
  gN as createModalSidebar,
  wi as createNavigationConfig,
  fN as createNoAnimationSidebar,
  Vj as createNotificationConfig,
  aN as createNotificationsSidebar,
  vN as createOverlaySidebar,
  bN as createPushSidebar,
  mN as createResponsiveSidebar,
  oN as createRightSidebar,
  hN as createScaleSidebar,
  iN as createSettingsSidebar,
  yN as createSlideSidebar,
  sN as createSmallSidebar,
  wN as createTableConfig,
  rC as createWrapper,
  tC as createWrapperConfig,
  oC as createWrapperWithConfig,
  Jh as customReport,
  W2 as deleteButton,
  Y2 as deleteConfirmationButtons,
  U2 as editButton,
  Mr as formatFileSize,
  bj as generateFileId,
  $p as getAdvertisementConfig,
  hf as getChartConfig,
  S0 as getDefaultIcon,
  eC as getDeprecatedWrappers,
  yl as getEmptyStateConfig,
  fj as getFileExtension,
  xa as getFileUploadConfig,
  Wg as getFileUploadStyles,
  Nl as getMapConfig,
  Pl as getMediaConfig,
  gj as getMimeTypeFromExtension,
  Cx as getModalConfiguration,
  Ll as getNavigationConfig,
  Wj as getNavigationsByLayout,
  $j as getNavigationsByVariant,
  Ml as getNotificationConfig,
  Rl as getProgressConfig,
  Dl as getTableConfig,
  Wl as getUtilityConfig,
  lu as getWrapperConfig,
  Q2 as getWrappersByVariant,
  K2 as iconButton,
  h5 as isAdvertisementKind,
  Lj as isCommerceModal,
  Ej as isGameModal,
  Aj as isInteractionModal,
  Mj as isLayoutModal,
  Dj as isNavigationKind,
  Ij as isVersusModal,
  X2 as isWrapperKind,
  Wh as kpiMetric,
  Fh as lineChart,
  Sj as mergeActions,
  Sx as mergeModalConfiguration,
  C0 as mergeNotificationConfig,
  wk as mergeTableConfig,
  Oh as performanceDashboard,
  Yh as performanceReport,
  $h as pieChart,
  Xh as realtimeMetrics,
  Qh as realtimeTraffic,
  qh as revenueCohort,
  Uh as revenueMetric,
  g_ as saveButton,
  J2 as saveFormButtons,
  Fj as useModal,
  Rh as userBehaviorDashboard,
  Kh as userCohort,
  Zh as userHeatmap,
  Gh as userJourneyFunnel,
  yj as validateFile,
  hj as validateFileUploadConfig,
  Ug as validateFiles,
  lj as validateForms,
  Gj as validateNotificationConfig,
  kN as validateTableConfig
};
//# sourceMappingURL=index.es.js.map
