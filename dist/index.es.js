var ed = Object.defineProperty;
var td = (t, i, n) => i in t ? ed(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[i] = n;
var er = (t, i, n) => td(t, typeof i != "symbol" ? i + "" : i, n);
import * as Bi from "react";
import Re, { forwardRef as Ae, useMemo as Ci, useEffect as Be, memo as si, createElement as Uo, useCallback as Je, useRef as _t, useState as Mt, createContext as ha, useContext as id, use as nd, useImperativeHandle as fa, useId as ga } from "react";
import { createPortal as ad } from "react-dom";
var rd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function od(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Sr = { exports: {} }, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zo;
function sd() {
  if (Zo) return Sn;
  Zo = 1;
  var t = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function n(o, c, _) {
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
  return Sn.Fragment = i, Sn.jsx = n, Sn.jsxs = n, Sn;
}
var zn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function ld() {
  return Ho || (Ho = 1, process.env.NODE_ENV !== "production" && function() {
    function t(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === G ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case N:
          return "Fragment";
        case O:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case j:
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
    function n(x) {
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
      if (x === N) return "<>";
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
      if (de = null, z !== void 0 && (n(z), de = "" + z), m(Z) && (n(Z.key), de = "" + Z.key), "key" in Z) {
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
    var C = Re, w = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), W = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), F = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, le = Array.isArray, ge = console.createTask ? console.createTask : function() {
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
    zn.Fragment = N, zn.jsx = function(x, Z, z, H, q) {
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
    }, zn.jsxs = function(x, Z, z, H, q) {
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
  }()), zn;
}
process.env.NODE_ENV === "production" ? Sr.exports = sd() : Sr.exports = ld();
var s = Sr.exports;
const cd = "_adminComponent_1nez3_10", dd = "_sessionDebugger_1nez3_65", _d = "_debugRow_1nez3_65", ud = "_performanceMonitor_1nez3_87", md = "_metricRow_1nez3_87", pd = "_metricLabel_1nez3_97", hd = "_metricValue_1nez3_106", fd = "_errorLogger_1nez3_120", gd = "_errorEntry_1nez3_124", yd = "_errorTime_1nez3_134", bd = "_errorMessage_1nez3_140", vd = "_debugPanel_1nez3_150", xd = "_panelHeader_1nez3_150", wd = "_panelSection_1nez3_163", kd = "_sectionTitle_1nez3_173", Cd = "_darkTheme_1nez3_230", Sd = "_lightTheme_1nez3_253", zd = "_animated_1nez3_292", Nd = "_fadeInAdmin_1nez3_1", Td = "_pulse_1nez3_306", jd = "_pulseAdmin_1nez3_1", Pd = "_compact_1nez3_321", Ed = "_expanded_1nez3_328", Id = "_translucent_1nez3_335", Ld = "_opaque_1nez3_340", Ad = "_adminZ9999_1nez3_348", Md = "_adminZ9998_1nez3_352", Od = "_adminZ9997_1nez3_356", Rd = "_adminZ9996_1nez3_360", Bd = "_adminZ9995_1nez3_364", Fi = {
  adminComponent: cd,
  "admin-top-left": "_admin-top-left_1nez3_34",
  "admin-top-right": "_admin-top-right_1nez3_39",
  "admin-bottom-left": "_admin-bottom-left_1nez3_44",
  "admin-bottom-right": "_admin-bottom-right_1nez3_49",
  "admin-center": "_admin-center_1nez3_54",
  sessionDebugger: dd,
  debugRow: _d,
  performanceMonitor: ud,
  metricRow: md,
  metricLabel: pd,
  metricValue: hd,
  errorLogger: fd,
  errorEntry: gd,
  errorTime: yd,
  errorMessage: bd,
  debugPanel: vd,
  panelHeader: xd,
  panelSection: wd,
  sectionTitle: kd,
  darkTheme: Cd,
  lightTheme: Sd,
  animated: zd,
  fadeInAdmin: Nd,
  pulse: Td,
  pulseAdmin: jd,
  compact: Pd,
  expanded: Ed,
  translucent: Id,
  opaque: Ld,
  adminZ9999: Ad,
  adminZ9998: Md,
  adminZ9997: Od,
  adminZ9996: Rd,
  adminZ9995: Bd
}, Fd = "_container_kd8mr_131", Dd = "_flex_kd8mr_262", $d = "_grid_kd8mr_358", Wd = "_relative_kd8mr_740", Ud = "_absolute_kd8mr_744", Zd = "_fixed_kd8mr_748", Hd = "_sticky_kd8mr_752", Vd = "_truncate_kd8mr_891", Gd = "_border_kd8mr_951", Kd = "_rounded_kd8mr_991", qd = "_shadow_kd8mr_1023", Yd = "_transition_kd8mr_1095", Jd = "_small_kd8mr_1595", Xd = "_large_kd8mr_1599", Qd = "_card_kd8mr_1647", e_ = "_baseButton_kd8mr_1772", t_ = "_fullWidth_kd8mr_2060", i_ = "_loading_kd8mr_2065", n_ = "_content_kd8mr_2065", a_ = "_leftIcon_kd8mr_2069", r_ = "_rightIcon_kd8mr_2077", o_ = "_spinner_kd8mr_2096", s_ = "_spin_kd8mr_2096", l_ = "_modalCloseAbsolute_kd8mr_2110", c_ = "_iconBtn_kd8mr_2196", d_ = "_selected_kd8mr_2303", __ = "_active_kd8mr_2308", u_ = "_locked_kd8mr_2313", m_ = "_burnSuspect_kd8mr_2318", p_ = "_burned_kd8mr_2323", h_ = "_goBackIcon_kd8mr_2490", f_ = "_goBackLabel_kd8mr_2495", g_ = "_primaryBtn_kd8mr_2572", y_ = "_secondaryBtn_kd8mr_2614", b_ = "_linkButton_kd8mr_2766", v_ = "_closeButton_kd8mr_2793", x_ = "_wordButton_kd8mr_2800", st = {
  container: Fd,
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
  flex: Dd,
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
  grid: $d,
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
  relative: Wd,
  absolute: Ud,
  fixed: Zd,
  sticky: Hd,
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
  truncate: Vd,
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
  border: Gd,
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
  rounded: Kd,
  "rounded-md": "_rounded-md_kd8mr_1003",
  "rounded-lg": "_rounded-lg_kd8mr_1007",
  "rounded-xl": "_rounded-xl_kd8mr_1011",
  "rounded-2xl": "_rounded-2xl_kd8mr_1015",
  "rounded-full": "_rounded-full_kd8mr_1019",
  "shadow-none": "_shadow-none_kd8mr_1023",
  "shadow-sm": "_shadow-sm_kd8mr_1027",
  shadow: qd,
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
  transition: Yd,
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
  small: Jd,
  large: Xd,
  "primary-button": "_primary-button_kd8mr_1604",
  "secondary-button": "_secondary-button_kd8mr_1608",
  card: Qd,
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
  baseButton: e_,
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
  fullWidth: t_,
  loading: i_,
  content: n_,
  leftIcon: a_,
  rightIcon: r_,
  spinner: o_,
  spin: s_,
  "close-button": "_close-button_kd8mr_1523",
  modalCloseAbsolute: l_,
  iconBtn: c_,
  "word-button": "_word-button_kd8mr_2263",
  selected: d_,
  active: __,
  locked: u_,
  burnSuspect: m_,
  burned: p_,
  "copy-link": "_copy-link_kd8mr_2329",
  "share-link--copy": "_share-link--copy_kd8mr_2404",
  "share-link-icon": "_share-link-icon_kd8mr_2410",
  "share-link-text": "_share-link-text_kd8mr_2416",
  "go-back": "_go-back_kd8mr_2424",
  goBackIcon: h_,
  goBackLabel: f_,
  "friends-toggle": "_friends-toggle_kd8mr_2503",
  "friends-toggle-icon": "_friends-toggle-icon_kd8mr_2560",
  primaryBtn: g_,
  secondaryBtn: y_,
  "nav-back": "_nav-back_kd8mr_2656",
  linkButton: b_,
  closeButton: v_,
  wordButton: x_,
  "loading-shimmer": "_loading-shimmer_kd8mr_1"
}, ys = {
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
}, pi = (t, i) => ({
  ...ys[t],
  ...i
}), U2 = {
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
}, Z2 = {
  saveButton: () => pi("primary", { defaultText: "Save" }),
  cancelButton: () => pi("secondary", {
    defaultText: "Cancel"
  }),
  deleteButton: () => pi("danger", { defaultText: "Delete" }),
  editButton: () => pi("ghost", {
    icon: "✏️",
    defaultText: "Edit"
  }),
  addButton: () => pi("success", {
    icon: "+",
    defaultText: "Add"
  }),
  shareButton: () => pi("ghost", {
    icon: "🔗",
    defaultText: "Share"
  }),
  settingsButton: () => pi("ghost", {
    icon: "⚙️",
    ariaLabel: "Settings"
  }),
  helpButton: () => pi("ghost", {
    icon: "?",
    ariaLabel: "Help"
  }),
  refreshButton: () => pi("ghost", {
    icon: "🔄",
    ariaLabel: "Refresh"
  }),
  downloadButton: () => pi("primary", {
    icon: "⬇️",
    defaultText: "Download"
  })
}, ke = Ae(
  ({
    kind: t = "primary",
    icon: i,
    word: n,
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
    label: N,
    size: A,
    loading: O = !1,
    fullWidth: X = !1,
    className: W = "",
    onClick: U,
    ...T
  }, j) => {
    const J = ys[t], V = i || J.icon, B = o || n || c || J.defaultText;
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
    const F = N || J.ariaLabel || (typeof B == "string" ? B : "Button"), Q = [
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
        ref: j,
        "aria-label": F,
        ...T,
        children: [
          V && J.iconPosition !== "right" && /* @__PURE__ */ s.jsx("span", { className: st.leftIcon, children: V }),
          J.iconPosition !== "only" && B && /* @__PURE__ */ s.jsx("span", { children: B }),
          V && J.iconPosition === "right" && /* @__PURE__ */ s.jsx("span", { className: st.rightIcon, children: V })
        ]
      }
    ) : J.iconPosition === "only" ? /* @__PURE__ */ s.jsx(
      "button",
      {
        ref: j,
        className: Q,
        onClick: le,
        "aria-label": F,
        disabled: g || O,
        ...T,
        children: t === "friends-toggle" ? G : V
      }
    ) : /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: j,
        className: Q,
        onClick: le,
        "aria-label": F,
        disabled: g || O,
        ...T,
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
const bt = class bt {
  /**
   * Create a button with a specific kind and minimal props
   */
  static create(i, n = {}) {
    return Re.createElement(ke, {
      kind: i,
      ...n
    });
  }
  /**
   * Create multiple buttons from a group configuration
   */
  static createGroup(i, n = {}) {
    return Object.fromEntries(
      Object.entries(i).map(
        ([o, { kind: c, props: _ = {} }]) => [
          o,
          this.create(c, { ...n, ..._ })
        ]
      )
    );
  }
  /**
   * Create predefined button groups (modal actions, form actions, etc.)
   */
  static createModalActions(i = {}) {
    return {
      confirm: this.create("modal-confirm", {
        onClick: i.onConfirm,
        text: i.confirmText
      }),
      cancel: this.create("modal-cancel", {
        onClick: i.onCancel,
        text: i.cancelText
      })
    };
  }
  static createFormActions(i = {}) {
    return {
      submit: this.create("form-submit", {
        onClick: i.onSubmit,
        text: i.submitText
      }),
      reset: this.create("form-reset", {
        onClick: i.onReset,
        text: i.resetText
      }),
      cancel: this.create("modal-cancel", {
        onClick: i.onCancel,
        text: i.cancelText
      })
    };
  }
};
bt.save = (i, n = "Save") => bt.create("primary", { onClick: i, text: n }), bt.cancel = (i, n = "Cancel") => bt.create("secondary", { onClick: i, text: n }), bt.delete = (i, n = "Delete") => bt.create("danger", { onClick: i, text: n }), bt.edit = (i, n = "Edit") => bt.create("ghost", { onClick: i, text: n, icon: "✏️" }), bt.add = (i, n = "Add") => bt.create("success", { onClick: i, text: n, icon: "+" }), bt.close = (i) => bt.create("close", { onClick: i }), bt.back = (i, n = "Back") => bt.create("go-back", { onClick: i, text: n }), bt.copy = (i, n = "Copy") => bt.create("copy-link", { copyText: i, text: n }), bt.icon = (i, n, o) => bt.create("icon", {
  icon: i,
  onClick: n,
  label: o
});
let Mi = bt;
const H2 = {
  // Confirmation dialogs
  confirmDialog: (t, i) => ({
    confirm: Mi.create("danger", {
      onClick: t,
      text: "Confirm"
    }),
    cancel: Mi.create("secondary", {
      onClick: i,
      text: "Cancel"
    })
  }),
  // Delete confirmation
  deleteConfirmation: (t, i, n) => ({
    delete: Mi.create("danger", {
      onClick: t,
      text: n ? `Delete ${n}` : "Delete"
    }),
    cancel: Mi.create("secondary", {
      onClick: i,
      text: "Cancel"
    })
  }),
  // Save/cancel form
  saveForm: (t, i) => ({
    save: Mi.save(t),
    cancel: Mi.cancel(i)
  })
}, w_ = {
  kind: "component",
  variant: "component-wrapper",
  layout: "passthrough",
  targetComponent: "Component",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic component wrapper",
  migrationPath: "Use the specific  component or factory method"
}, k_ = {
  kind: "provider",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "Provider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic provider wrapper",
  migrationPath: "Use the specific  provider or factory method"
}, C_ = {
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
}, S_ = {
  kind: "flex-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "FlexContainer",
  Component: "FlexContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Flexbox container wrapper with positioning control",
  migrationPath: "Use CSS flexbox directly or Wrapper with flex kind"
}, z_ = {
  kind: "grid-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "GridContainer",
  Component: "GridContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "CSS Grid container wrapper with positioning control",
  migrationPath: "Use CSS grid directly or Wrapper with grid kind"
}, N_ = {
  kind: "center-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "CenterContainer",
  Component: "CenterContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Container that centers content both horizontally and vertically",
  migrationPath: "Use CSS centering techniques or Wrapper with center kind"
}, T_ = {
  kind: "stack-container",
  variant: "layout-container",
  layout: "enhanced",
  targetComponent: "StackContainer",
  Component: "StackContainer",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Vertical stack container with gap control",
  migrationPath: "Use CSS flexbox column or Wrapper with stack kind"
}, j_ = {
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
}, P_ = {
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
}, E_ = {
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
}, I_ = {
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
}, L_ = {
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
}, A_ = {
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
}, M_ = {
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
}, O_ = {
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
}, R_ = {
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
}, B_ = {
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
}, F_ = {
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
}, D_ = {
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
}, $_ = {
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
}, W_ = {
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
}, U_ = {
  kind: "socket-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "SocketProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for SocketProvider",
  migrationPath: 'Use Provider with kind="socket-provider"'
}, Z_ = {
  kind: "user-settings-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "UserSettingsProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for UserSettingsProvider",
  migrationPath: 'Use Provider with kind="user-settings-provider"'
}, H_ = {
  kind: "theme-palette-provider-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "ThemePaletteProvider",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for ThemePaletteProvider",
  migrationPath: 'Use Provider with kind="theme-palette-provider"'
}, V_ = {
  kind: "achievement-socket-listener-wrapper",
  variant: "provider-wrapper",
  layout: "passthrough",
  targetComponent: "AchievementSocketListener",
  Component: "Provider",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Backward compatibility wrapper for AchievementSocketListener",
  migrationPath: 'Use Provider with kind="achievement-socket-listener"'
}, G_ = {
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
}, K_ = {
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
}, q_ = {
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
}, Y_ = {
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
}, J_ = {
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
}, X_ = {
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
}, Q_ = {
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
}, eu = {
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
}, tu = {
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
}, iu = {
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
}, nu = {
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
}, au = {
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
}, ru = {
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
  migrationPath: 'Use Button with kind="dark-mode-toggle" or ButtonFactory.darkModeToggle()'
}, su = {
  kind: "backward-compatibility-wrapper",
  variant: "backward-compatibility",
  layout: "passthrough",
  targetComponent: "LegacyComponent",
  Component: "Component",
  maintainAPI: !0,
  preserveEvents: !0,
  description: "Generic backward compatibility wrapper",
  migrationPath: "Migrate to the corresponding  component"
}, lu = {
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
}, cu = {
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
}, du = {
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
}, An = {
  // Generic Wrappers
  component: w_,
  provider: k_,
  legacy: C_,
  // Layout Wrappers
  "flex-container": S_,
  "grid-container": z_,
  "center-container": N_,
  "stack-container": T_,
  // Component Wrappers
  "button-wrapper": j_,
  "header-wrapper": P_,
  "modal-wrapper": E_,
  "grid-wrapper": I_,
  "page-wrapper": L_,
  "graph-wrapper": A_,
  "sidebar-wrapper": M_,
  "settings-wrapper": O_,
  "theme-wrapper": R_,
  "admin-wrapper": B_,
  "card-wrapper": F_,
  "banner-wrapper": D_,
  "chat-wrapper": $_,
  "form-wrapper": W_,
  // Provider Wrappers
  "socket-provider-wrapper": U_,
  "user-settings-provider-wrapper": Z_,
  "theme-palette-provider-wrapper": H_,
  "achievement-socket-listener-wrapper": V_,
  // Legacy Component Wrappers
  "primary-button-wrapper": G_,
  "secondary-button-wrapper": K_,
  "close-button-wrapper": q_,
  "icon-button-wrapper": Y_,
  "browse-header-wrapper": J_,
  "modal-header-wrapper": X_,
  "vs-grid-wrapper": Q_,
  "startup-page-wrapper": eu,
  "customization-category-wrapper": tu,
  "settings-panel-wrapper": iu,
  "theme-selector-wrapper": nu,
  "friends-sidebar-wrapper": au,
  "session-debugger-wrapper": ru,
  "dark-mode-toggle-wrapper": ou,
  // Generic Wrappers
  "backward-compatibility-wrapper": su,
  "legacy-wrapper": lu,
  "simple-wrapper": cu,
  "enhanced-wrapper": du
};
function _u(t) {
  return An[t];
}
function V2(t) {
  return t in An;
}
function G2(t) {
  return Object.values(An).filter(
    (i) => i.variant === t
  );
}
function K2() {
  return Object.values(An).filter(
    (t) => t.deprecationWarning
  );
}
function q2(t, i = {}) {
  const n = An[t];
  return {
    ...n,
    ...i,
    // Merge className if both exist
    className: i.className ? `${n.className || ""} ${i.className}`.trim() : n.className
  };
}
const Y2 = {
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
}, J2 = {
  BUTTON: "button-wrapper",
  HEADER: "header-wrapper",
  MODAL: "modal-wrapper",
  GRID: "grid-wrapper",
  PAGE: "page-wrapper",
  SIDEBAR: "sidebar-wrapper",
  SETTINGS: "settings-wrapper",
  LEGACY: "legacy-wrapper",
  COMPATIBILITY: "backward-compatibility-wrapper"
}, uu = "_Wrapper_g2zt1_132", mu = "_migrationHelper_g2zt1_180", pu = "_migrationButton_g2zt1_306", Nn = {
  Wrapper: uu,
  "wrapper--elevated": "_wrapper--elevated_g2zt1_175",
  "wrapper--backward-compatibility": "_wrapper--backward-compatibility_g2zt1_180",
  migrationHelper: mu,
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
  migrationButton: pu,
  "legacy-warning": "_legacy-warning_g2zt1_1",
  "loading-shimmer": "_loading-shimmer_g2zt1_1"
};
function hu(t, i, n, o) {
  const c = t.variant === "layout-container", _ = t.Component === "Button", m = t.Component === "Form", h = fu(
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
  return _ ? /* @__PURE__ */ s.jsx(ke, { ...f, children: n }) : m ? Uo("form", f, n) : Uo(
    "div",
    f,
    n
  );
}
function fu(t, i, n) {
  const o = vu(t.kind), c = n ? yu(t.kind) : gu(t.Component), _ = n ? bu(c, i) : { style: {}, otherProps: {} };
  return {
    mappedKind: o,
    wrapperType: c,
    containerStyles: _
  };
}
function gu(t) {
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
function yu(t) {
  return {
    "flex-container": "flex-container",
    "grid-container": "grid-container",
    "center-container": "center-container",
    "stack-container": "stack-container"
  }[t] || "generic-container";
}
function bu(t, i) {
  const { style: n, ...o } = i, c = (g) => {
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
        ...n
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
        ...n
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
        ...n
      } : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        ...n
      },
      otherProps: b
    };
  }
  return {
    style: n || {},
    otherProps: o
  };
}
function vu(t) {
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
  }, n = {
    "card-wrapper": "basic",
    "banner-wrapper": "notification",
    "chat-wrapper": "basic",
    "form-wrapper": "basic",
    "graph-wrapper": "bar",
    "modal-wrapper": "default"
  };
  if (n[t])
    return n[t];
  for (const o of Object.values(i))
    if (o.patterns.some(
      (_) => t.includes(_)
    ))
      return o.map[t] || o.default;
  return "default";
}
const bs = Ae(
  ({
    kind: t,
    children: i,
    className: n,
    suppressDeprecationWarning: o = !1,
    onMigrationHelp: c,
    configuration: _,
    ...m
  }, h) => {
    const f = _u(t), g = _ ? { ...f, ..._ } : f;
    if (!g)
      return console.warn(
        `Wrapper: Unknown wrapper kind "${t}"`
      ), /* @__PURE__ */ s.jsx("div", { className: n, children: i });
    const b = Ci(() => {
      const {
        suppressDeprecationWarning: w,
        onMigrationHelp: I,
        configuration: N,
        ...A
      } = m;
      return {
        ...A,
        ...(g == null ? void 0 : g.forwardRef) && { ref: h }
      };
    }, [m, g, h]), v = Ci(
      () => [
        Nn.Wrapper,
        Nn[`wrapper--${(g == null ? void 0 : g.variant) || "default"}`],
        Nn[`wrapper--${(g == null ? void 0 : g.layout) || "default"}`],
        g == null ? void 0 : g.wrapperClassName,
        n
      ].filter(Boolean).join(" "),
      [g, n]
    );
    Be(() => {
      (g == null ? void 0 : g.deprecationWarning) && !o && typeof window < "u" && console.warn(
        `🚨 Deprecation Warning: ${g.targetComponent} is deprecated.
📖 Migration Path: ${g.migrationPath}
🔗 Component: ${g.Component}
📝 Description: ${g.description}`
      );
    }, [g, o]);
    const C = () => g != null && g.deprecationWarning && typeof window < "u" ? /* @__PURE__ */ s.jsx("div", { className: Nn.migrationHelper, children: /* @__PURE__ */ s.jsx(
      ke,
      {
        kind: "secondary",
        onClick: c,
        className: Nn.migrationButton,
        title: `Migration help for ${g == null ? void 0 : g.targetComponent}`,
        children: "📖 Migration Guide"
      }
    ) }) : null;
    return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      C(),
      hu(
        g,
        b,
        i,
        v
      )
    ] });
  }
);
bs.displayName = "Wrapper";
const p = si(bs);
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
    return new xu(i);
  }
  /**
   * Create wrapper with custom configuration
   */
  static withConfig(i, n) {
    return (o) => /* @__PURE__ */ s.jsx(
      p,
      {
        kind: i,
        configuration: n,
        ...o
      }
    );
  }
}
class xu {
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
  target(i, n) {
    return this.config.targetComponent = i, this.config.Component = n, this;
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
const X2 = {
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
function Q2(t, i = {}) {
  return /* @__PURE__ */ s.jsx(p, { kind: t, ...i });
}
function eC(t, i, n = {}) {
  return /* @__PURE__ */ s.jsx(
    p,
    {
      kind: t,
      configuration: i,
      ...n
    }
  );
}
function It(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var wu = typeof Symbol == "function" && Symbol.observable || "@@observable", Vo = wu, tr = () => Math.random().toString(36).substring(7).split("").join("."), ku = {
  INIT: `@@redux/INIT${/* @__PURE__ */ tr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ tr()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${tr()}`
}, Ji = ku;
function Mn(t) {
  if (typeof t != "object" || t === null)
    return !1;
  let i = t;
  for (; Object.getPrototypeOf(i) !== null; )
    i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(t) === i || Object.getPrototypeOf(t) === null;
}
function Cu(t) {
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
  if (Nu(t))
    return "date";
  if (zu(t))
    return "error";
  const n = Su(t);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(t).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function Su(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function zu(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function Nu(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function Ai(t) {
  let i = typeof t;
  return process.env.NODE_ENV !== "production" && (i = Cu(t)), i;
}
function vs(t, i, n) {
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? It(2) : `Expected the root reducer to be a function. Instead, received: '${Ai(t)}'`);
  if (typeof i == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? It(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof i == "function" && typeof n > "u" && (n = i, i = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? It(1) : `Expected the enhancer to be a function. Instead, received: '${Ai(n)}'`);
    return n(vs)(t, i);
  }
  let o = t, c = i, _ = /* @__PURE__ */ new Map(), m = _, h = 0, f = !1;
  function g() {
    m === _ && (m = /* @__PURE__ */ new Map(), _.forEach((A, O) => {
      m.set(O, A);
    }));
  }
  function b() {
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? It(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return c;
  }
  function v(A) {
    if (typeof A != "function")
      throw new Error(process.env.NODE_ENV === "production" ? It(4) : `Expected the listener to be a function. Instead, received: '${Ai(A)}'`);
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? It(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let O = !0;
    g();
    const X = h++;
    return m.set(X, A), function() {
      if (O) {
        if (f)
          throw new Error(process.env.NODE_ENV === "production" ? It(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        O = !1, g(), m.delete(X), _ = null;
      }
    };
  }
  function C(A) {
    if (!Mn(A))
      throw new Error(process.env.NODE_ENV === "production" ? It(7) : `Actions must be plain objects. Instead, the actual type was: '${Ai(A)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof A.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? It(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof A.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? It(17) : `Action "type" property must be a string. Instead, the actual type was: '${Ai(A.type)}'. Value was: '${A.type}' (stringified)`);
    if (f)
      throw new Error(process.env.NODE_ENV === "production" ? It(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? It(10) : `Expected the nextReducer to be a function. Instead, received: '${Ai(A)}`);
    o = A, C({
      type: Ji.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? It(11) : `Expected the observer to be an object. Instead, received: '${Ai(O)}'`);
        function X() {
          const U = O;
          U.next && U.next(b());
        }
        return X(), {
          unsubscribe: A(X)
        };
      },
      [Vo]() {
        return this;
      }
    };
  }
  return C({
    type: Ji.INIT
  }), {
    dispatch: C,
    subscribe: v,
    getState: b,
    replaceReducer: w,
    [Vo]: I
  };
}
function Go(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Tu(t, i, n, o) {
  const c = Object.keys(i), _ = n && n.type === Ji.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (c.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Mn(t))
    return `The ${_} has unexpected type of "${Ai(t)}". Expected argument to be an object with the following keys: "${c.join('", "')}"`;
  const m = Object.keys(t).filter((h) => !i.hasOwnProperty(h) && !o[h]);
  if (m.forEach((h) => {
    o[h] = !0;
  }), !(n && n.type === Ji.REPLACE) && m.length > 0)
    return `Unexpected ${m.length > 1 ? "keys" : "key"} "${m.join('", "')}" found in ${_}. Expected to find one of the known reducer keys instead: "${c.join('", "')}". Unexpected keys will be ignored.`;
}
function ju(t) {
  Object.keys(t).forEach((i) => {
    const n = t[i];
    if (typeof n(void 0, {
      type: Ji.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? It(12) : `The slice reducer for key "${i}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: Ji.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? It(13) : `The slice reducer for key "${i}" returned undefined when probed with a random type. Don't try to handle '${Ji.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Pu(t) {
  const i = Object.keys(t), n = {};
  for (let m = 0; m < i.length; m++) {
    const h = i[m];
    process.env.NODE_ENV !== "production" && typeof t[h] > "u" && Go(`No reducer provided for key "${h}"`), typeof t[h] == "function" && (n[h] = t[h]);
  }
  const o = Object.keys(n);
  let c;
  process.env.NODE_ENV !== "production" && (c = {});
  let _;
  try {
    ju(n);
  } catch (m) {
    _ = m;
  }
  return function(h = {}, f) {
    if (_)
      throw _;
    if (process.env.NODE_ENV !== "production") {
      const v = Tu(h, n, f, c);
      v && Go(v);
    }
    let g = !1;
    const b = {};
    for (let v = 0; v < o.length; v++) {
      const C = o[v], w = n[C], I = h[C], N = w(I, f);
      if (typeof N > "u") {
        const A = f && f.type;
        throw new Error(process.env.NODE_ENV === "production" ? It(14) : `When called with an action of type ${A ? `"${String(A)}"` : "(unknown type)"}, the slice reducer for key "${C}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      b[C] = N, g = g || N !== I;
    }
    return g = g || o.length !== Object.keys(h).length, g ? b : h;
  };
}
function da(...t) {
  return t.length === 0 ? (i) => i : t.length === 1 ? t[0] : t.reduce((i, n) => (...o) => i(n(...o)));
}
function Eu(...t) {
  return (i) => (n, o) => {
    const c = i(n, o);
    let _ = () => {
      throw new Error(process.env.NODE_ENV === "production" ? It(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const m = {
      getState: c.getState,
      dispatch: (f, ...g) => _(f, ...g)
    }, h = t.map((f) => f(m));
    return _ = da(...h)(c.dispatch), {
      ...c,
      dispatch: _
    };
  };
}
function xs(t) {
  return Mn(t) && "type" in t && typeof t.type == "string";
}
var ws = Symbol.for("immer-nothing"), Ko = Symbol.for("immer-draftable"), Kt = Symbol.for("immer-state"), Iu = process.env.NODE_ENV !== "production" ? [
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
function Zt(t, ...i) {
  if (process.env.NODE_ENV !== "production") {
    const n = Iu[t], o = typeof n == "function" ? n.apply(null, i) : n;
    throw new Error(`[Immer] ${o}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var _n = Object.getPrototypeOf;
function Xi(t) {
  return !!t && !!t[Kt];
}
function Ni(t) {
  var i;
  return t ? ks(t) || Array.isArray(t) || !!t[Ko] || !!((i = t.constructor) != null && i[Ko]) || ba(t) || va(t) : !1;
}
var Lu = Object.prototype.constructor.toString();
function ks(t) {
  if (!t || typeof t != "object")
    return !1;
  const i = _n(t);
  if (i === null)
    return !0;
  const n = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Lu;
}
function _a(t, i) {
  ya(t) === 0 ? Reflect.ownKeys(t).forEach((n) => {
    i(n, t[n], t);
  }) : t.forEach((n, o) => i(o, n, t));
}
function ya(t) {
  const i = t[Kt];
  return i ? i.type_ : Array.isArray(t) ? 1 : ba(t) ? 2 : va(t) ? 3 : 0;
}
function zr(t, i) {
  return ya(t) === 2 ? t.has(i) : Object.prototype.hasOwnProperty.call(t, i);
}
function Cs(t, i, n) {
  const o = ya(t);
  o === 2 ? t.set(i, n) : o === 3 ? t.add(n) : t[i] = n;
}
function Au(t, i) {
  return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
}
function ba(t) {
  return t instanceof Map;
}
function va(t) {
  return t instanceof Set;
}
function Yi(t) {
  return t.copy_ || t.base_;
}
function Nr(t, i) {
  if (ba(t))
    return new Map(t);
  if (va(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const n = ks(t);
  if (i === !0 || i === "class_only" && !n) {
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
    return Object.create(_n(t), o);
  } else {
    const o = _n(t);
    if (o !== null && n)
      return { ...t };
    const c = Object.create(o);
    return Object.assign(c, t);
  }
}
function Fr(t, i = !1) {
  return xa(t) || Xi(t) || !Ni(t) || (ya(t) > 1 && (t.set = t.add = t.clear = t.delete = Mu), Object.freeze(t), i && Object.entries(t).forEach(([n, o]) => Fr(o, !0))), t;
}
function Mu() {
  Zt(2);
}
function xa(t) {
  return Object.isFrozen(t);
}
var Ou = {};
function Qi(t) {
  const i = Ou[t];
  return i || Zt(0, t), i;
}
var En;
function Ss() {
  return En;
}
function Ru(t, i) {
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
function qo(t, i) {
  i && (Qi("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = i);
}
function Tr(t) {
  jr(t), t.drafts_.forEach(Bu), t.drafts_ = null;
}
function jr(t) {
  t === En && (En = t.parent_);
}
function Yo(t) {
  return En = Ru(En, t);
}
function Bu(t) {
  const i = t[Kt];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : i.revoked_ = !0;
}
function Jo(t, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const n = i.drafts_[0];
  return t !== void 0 && t !== n ? (n[Kt].modified_ && (Tr(i), Zt(4)), Ni(t) && (t = ua(i, t), i.parent_ || ma(i, t)), i.patches_ && Qi("Patches").generateReplacementPatches_(
    n[Kt].base_,
    t,
    i.patches_,
    i.inversePatches_
  )) : t = ua(i, n, []), Tr(i), i.patches_ && i.patchListener_(i.patches_, i.inversePatches_), t !== ws ? t : void 0;
}
function ua(t, i, n) {
  if (xa(i))
    return i;
  const o = i[Kt];
  if (!o)
    return _a(
      i,
      (c, _) => Xo(t, o, i, c, _, n)
    ), i;
  if (o.scope_ !== t)
    return i;
  if (!o.modified_)
    return ma(t, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const c = o.copy_;
    let _ = c, m = !1;
    o.type_ === 3 && (_ = new Set(c), c.clear(), m = !0), _a(
      _,
      (h, f) => Xo(t, o, c, h, f, n, m)
    ), ma(t, c, !1), n && t.patches_ && Qi("Patches").generatePatches_(
      o,
      n,
      t.patches_,
      t.inversePatches_
    );
  }
  return o.copy_;
}
function Xo(t, i, n, o, c, _, m) {
  if (process.env.NODE_ENV !== "production" && c === n && Zt(5), Xi(c)) {
    const h = _ && i && i.type_ !== 3 && // Set objects are atomic since they have no keys.
    !zr(i.assigned_, o) ? _.concat(o) : void 0, f = ua(t, c, h);
    if (Cs(n, o, f), Xi(f))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else m && n.add(c);
  if (Ni(c) && !xa(c)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    ua(t, c), (!i || !i.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(n, o) && ma(t, c);
  }
}
function ma(t, i, n = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Fr(i, n);
}
function Fu(t, i) {
  const n = Array.isArray(t), o = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: i ? i.scope_ : Ss(),
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
  let c = o, _ = Dr;
  n && (c = [o], _ = In);
  const { revoke: m, proxy: h } = Proxy.revocable(c, _);
  return o.draft_ = h, o.revoke_ = m, h;
}
var Dr = {
  get(t, i) {
    if (i === Kt)
      return t;
    const n = Yi(t);
    if (!zr(n, i))
      return Du(t, n, i);
    const o = n[i];
    return t.finalized_ || !Ni(o) ? o : o === ir(t.base_, i) ? (nr(t), t.copy_[i] = Er(o, t)) : o;
  },
  has(t, i) {
    return i in Yi(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(Yi(t));
  },
  set(t, i, n) {
    const o = zs(Yi(t), i);
    if (o != null && o.set)
      return o.set.call(t.draft_, n), !0;
    if (!t.modified_) {
      const c = ir(Yi(t), i), _ = c == null ? void 0 : c[Kt];
      if (_ && _.base_ === n)
        return t.copy_[i] = n, t.assigned_[i] = !1, !0;
      if (Au(n, c) && (n !== void 0 || zr(t.base_, i)))
        return !0;
      nr(t), Pr(t);
    }
    return t.copy_[i] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || i in t.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(t.copy_[i]) || (t.copy_[i] = n, t.assigned_[i] = !0), !0;
  },
  deleteProperty(t, i) {
    return ir(t.base_, i) !== void 0 || i in t.base_ ? (t.assigned_[i] = !1, nr(t), Pr(t)) : delete t.assigned_[i], t.copy_ && delete t.copy_[i], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, i) {
    const n = Yi(t), o = Reflect.getOwnPropertyDescriptor(n, i);
    return o && {
      writable: !0,
      configurable: t.type_ !== 1 || i !== "length",
      enumerable: o.enumerable,
      value: n[i]
    };
  },
  defineProperty() {
    Zt(11);
  },
  getPrototypeOf(t) {
    return _n(t.base_);
  },
  setPrototypeOf() {
    Zt(12);
  }
}, In = {};
_a(Dr, (t, i) => {
  In[t] = function() {
    return arguments[0] = arguments[0][0], i.apply(this, arguments);
  };
});
In.deleteProperty = function(t, i) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(i)) && Zt(13), In.set.call(this, t, i, void 0);
};
In.set = function(t, i, n) {
  return process.env.NODE_ENV !== "production" && i !== "length" && isNaN(parseInt(i)) && Zt(14), Dr.set.call(this, t[0], i, n, t[0]);
};
function ir(t, i) {
  const n = t[Kt];
  return (n ? Yi(n) : t)[i];
}
function Du(t, i, n) {
  var c;
  const o = zs(i, n);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (c = o.get) == null ? void 0 : c.call(t.draft_)
  ) : void 0;
}
function zs(t, i) {
  if (!(i in t))
    return;
  let n = _n(t);
  for (; n; ) {
    const o = Object.getOwnPropertyDescriptor(n, i);
    if (o)
      return o;
    n = _n(n);
  }
}
function Pr(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Pr(t.parent_));
}
function nr(t) {
  t.copy_ || (t.copy_ = Nr(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var $u = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (i, n, o) => {
      if (typeof i == "function" && typeof n != "function") {
        const _ = n;
        n = i;
        const m = this;
        return function(f = _, ...g) {
          return m.produce(f, (b) => n.call(this, b, ...g));
        };
      }
      typeof n != "function" && Zt(6), o !== void 0 && typeof o != "function" && Zt(7);
      let c;
      if (Ni(i)) {
        const _ = Yo(this), m = Er(i, void 0);
        let h = !0;
        try {
          c = n(m), h = !1;
        } finally {
          h ? Tr(_) : jr(_);
        }
        return qo(_, o), Jo(c, _);
      } else if (!i || typeof i != "object") {
        if (c = n(i), c === void 0 && (c = i), c === ws && (c = void 0), this.autoFreeze_ && Fr(c, !0), o) {
          const _ = [], m = [];
          Qi("Patches").generateReplacementPatches_(i, c, _, m), o(_, m);
        }
        return c;
      } else
        Zt(1, i);
    }, this.produceWithPatches = (i, n) => {
      if (typeof i == "function")
        return (m, ...h) => this.produceWithPatches(m, (f) => i(f, ...h));
      let o, c;
      return [this.produce(i, n, (m, h) => {
        o = m, c = h;
      }), o, c];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Ni(t) || Zt(8), Xi(t) && (t = Wu(t));
    const i = Yo(this), n = Er(t, void 0);
    return n[Kt].isManual_ = !0, jr(i), n;
  }
  finishDraft(t, i) {
    const n = t && t[Kt];
    (!n || !n.isManual_) && Zt(9);
    const { scope_: o } = n;
    return qo(o, i), Jo(void 0, o);
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
    let n;
    for (n = i.length - 1; n >= 0; n--) {
      const c = i[n];
      if (c.path.length === 0 && c.op === "replace") {
        t = c.value;
        break;
      }
    }
    n > -1 && (i = i.slice(n + 1));
    const o = Qi("Patches").applyPatches_;
    return Xi(t) ? o(t, i) : this.produce(
      t,
      (c) => o(c, i)
    );
  }
};
function Er(t, i) {
  const n = ba(t) ? Qi("MapSet").proxyMap_(t, i) : va(t) ? Qi("MapSet").proxySet_(t, i) : Fu(t, i);
  return (i ? i.scope_ : Ss()).drafts_.push(n), n;
}
function Wu(t) {
  return Xi(t) || Zt(10, t), Ns(t);
}
function Ns(t) {
  if (!Ni(t) || xa(t))
    return t;
  const i = t[Kt];
  let n;
  if (i) {
    if (!i.modified_)
      return i.base_;
    i.finalized_ = !0, n = Nr(t, i.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Nr(t, !0);
  return _a(n, (o, c) => {
    Cs(n, o, Ns(c));
  }), i && (i.finalized_ = !1), n;
}
var qt = new $u(), Ts = qt.produce;
qt.produceWithPatches.bind(
  qt
);
qt.setAutoFreeze.bind(qt);
qt.setUseStrictShallowCopy.bind(qt);
qt.applyPatches.bind(qt);
qt.createDraft.bind(qt);
qt.finishDraft.bind(qt);
function js(t) {
  return ({ dispatch: n, getState: o }) => (c) => (_) => typeof _ == "function" ? _(n, o, t) : c(_);
}
var Uu = js(), Zu = js, Hu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? da : da.apply(null, arguments);
}, Ps = (t) => t && typeof t.match == "function";
function Pn(t, i) {
  function n(...o) {
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
  return n.toString = () => `${t}`, n.type = t, n.match = (o) => xs(o) && o.type === t, n;
}
function Vu(t) {
  return typeof t == "function" && "type" in t && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Ps(t);
}
function Gu(t) {
  const i = t ? `${t}`.split("/") : [], n = i[i.length - 1] || "actionCreator";
  return `Detected an action creator with type "${t || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function Ku(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (o) => n(o);
  const {
    isActionCreator: i = Vu
  } = t;
  return () => (n) => (o) => (i(o) && console.warn(Gu(o.type)), n(o));
}
function Es(t, i) {
  let n = 0;
  return {
    measureTime(o) {
      const c = Date.now();
      try {
        return o();
      } finally {
        const _ = Date.now();
        n += _ - c;
      }
    },
    warnIfExceeded() {
      n > t && console.warn(`${i} took ${n}ms, which is more than the warning threshold of ${t}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Is = class jn extends Array {
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
function Qo(t) {
  return Ni(t) ? Ts(t, () => {
  }) : t;
}
function ra(t, i, n) {
  return t.has(i) ? t.get(i) : t.set(i, n(i)).get(i);
}
function qu(t) {
  return typeof t != "object" || t == null || Object.isFrozen(t);
}
function Yu(t, i, n) {
  const o = Ls(t, i, n);
  return {
    detectMutations() {
      return As(t, i, o, n);
    }
  };
}
function Ls(t, i = [], n, o = "", c = /* @__PURE__ */ new Set()) {
  const _ = {
    value: n
  };
  if (!t(n) && !c.has(n)) {
    c.add(n), _.children = {};
    for (const m in n) {
      const h = o ? o + "." + m : m;
      i.length && i.indexOf(h) !== -1 || (_.children[m] = Ls(t, i, n[m], h));
    }
  }
  return _;
}
function As(t, i = [], n, o, c = !1, _ = "") {
  const m = n ? n.value : void 0, h = m === o;
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
  for (let b in n.children)
    f[b] = !0;
  for (let b in o)
    f[b] = !0;
  const g = i.length > 0;
  for (let b in f) {
    const v = _ ? _ + "." + b : b;
    if (g && i.some((I) => I instanceof RegExp ? I.test(v) : v === I))
      continue;
    const C = As(t, i, n.children[b], o[b], h, v);
    if (C.wasMutated)
      return C;
  }
  return {
    wasMutated: !1
  };
}
function Ju(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (i) => (n) => i(n);
  {
    let i = function(h, f, g, b) {
      return JSON.stringify(h, n(f, b), g);
    }, n = function(h, f) {
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
      isImmutable: o = qu,
      ignoredPaths: c,
      warnAfter: _ = 32
    } = t;
    const m = Yu.bind(null, o, c);
    return ({
      getState: h
    }) => {
      let f = h(), g = m(f), b;
      return (v) => (C) => {
        const w = Es(_, "ImmutableStateInvariantMiddleware");
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
function Ms(t) {
  const i = typeof t;
  return t == null || i === "string" || i === "boolean" || i === "number" || Array.isArray(t) || Mn(t);
}
function Ir(t, i = "", n = Ms, o, c = [], _) {
  let m;
  if (!n(t))
    return {
      keyPath: i || "<root>",
      value: t
    };
  if (typeof t != "object" || t === null || _ != null && _.has(t)) return !1;
  const h = o != null ? o(t) : Object.entries(t), f = c.length > 0;
  for (const [g, b] of h) {
    const v = i ? i + "." + g : g;
    if (!(f && c.some((w) => w instanceof RegExp ? w.test(v) : v === w))) {
      if (!n(b))
        return {
          keyPath: v,
          value: b
        };
      if (typeof b == "object" && (m = Ir(b, v, n, o, c, _), m))
        return m;
    }
  }
  return _ && Os(t) && _.add(t), !1;
}
function Os(t) {
  if (!Object.isFrozen(t)) return !1;
  for (const i of Object.values(t))
    if (!(typeof i != "object" || i === null) && !Os(i))
      return !1;
  return !0;
}
function Xu(t = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (i) => (n) => i(n);
  {
    const {
      isSerializable: i = Ms,
      getEntries: n,
      ignoredActions: o = [],
      ignoredActionPaths: c = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: _ = [],
      warnAfter: m = 32,
      ignoreState: h = !1,
      ignoreActions: f = !1,
      disableCache: g = !1
    } = t, b = !g && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (v) => (C) => (w) => {
      if (!xs(w))
        return C(w);
      const I = C(w), N = Es(m, "SerializableStateInvariantMiddleware");
      return !f && !(o.length && o.indexOf(w.type) !== -1) && N.measureTime(() => {
        const A = Ir(w, "", i, n, c, b);
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
      }), h || (N.measureTime(() => {
        const A = v.getState(), O = Ir(A, "", i, n, _, b);
        if (O) {
          const {
            keyPath: X,
            value: W
          } = O;
          console.error(`A non-serializable value was detected in the state, in the path: \`${X}\`. Value:`, W, `
Take a look at the reducer(s) handling this action type: ${w.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), N.warnIfExceeded()), I;
    };
  }
}
function oa(t) {
  return typeof t == "boolean";
}
var Qu = () => function(i) {
  const {
    thunk: n = !0,
    immutableCheck: o = !0,
    serializableCheck: c = !0,
    actionCreatorCheck: _ = !0
  } = i ?? {};
  let m = new Is();
  if (n && (oa(n) ? m.push(Uu) : m.push(Zu(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (o) {
      let h = {};
      oa(o) || (h = o), m.unshift(Ju(h));
    }
    if (c) {
      let h = {};
      oa(c) || (h = c), m.push(Xu(h));
    }
    if (_) {
      let h = {};
      oa(_) || (h = _), m.unshift(Ku(h));
    }
  }
  return m;
}, em = "RTK_autoBatch", es = (t) => (i) => {
  setTimeout(i, t);
}, tm = (t = {
  type: "raf"
}) => (i) => (...n) => {
  const o = i(...n);
  let c = !0, _ = !1, m = !1;
  const h = /* @__PURE__ */ new Set(), f = t.type === "tick" ? queueMicrotask : t.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : es(10)
  ) : t.type === "callback" ? t.queueNotification : es(t.timeout), g = () => {
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
        return c = !((v = b == null ? void 0 : b.meta) != null && v[em]), _ = !c, _ && (m || (m = !0, f(g))), o.dispatch(b);
      } finally {
        c = !0;
      }
    }
  });
}, im = (t) => function(n) {
  const {
    autoBatch: o = !0
  } = n ?? {};
  let c = new Is(t);
  return o && c.push(tm(typeof o == "object" ? o : void 0)), c;
};
function Rs(t) {
  const i = Qu(), {
    reducer: n = void 0,
    middleware: o,
    devTools: c = !0,
    duplicateMiddlewareCheck: _ = !0,
    preloadedState: m = void 0,
    enhancers: h = void 0
  } = t || {};
  let f;
  if (typeof n == "function")
    f = n;
  else if (Mn(n))
    f = Pu(n);
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
  if (process.env.NODE_ENV !== "production" && g.some((N) => typeof N != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? it(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && _) {
    let N = /* @__PURE__ */ new Set();
    g.forEach((A) => {
      if (N.has(A))
        throw new Error(process.env.NODE_ENV === "production" ? it(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      N.add(A);
    });
  }
  let b = da;
  c && (b = Hu({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof c == "object" && c
  }));
  const v = Eu(...g), C = im(v);
  if (process.env.NODE_ENV !== "production" && h && typeof h != "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(5) : "`enhancers` field must be a callback");
  let w = typeof h == "function" ? h(C) : C();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(w))
    throw new Error(process.env.NODE_ENV === "production" ? it(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && w.some((N) => typeof N != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? it(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && g.length && !w.includes(v) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const I = b(...w);
  return vs(f, m, I);
}
function Bs(t) {
  const i = {}, n = [];
  let o;
  const c = {
    addCase(_, m) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
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
      return n.push({
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
  return t(c), [i, n, o];
}
function nm(t) {
  return typeof t == "function";
}
function am(t, i) {
  if (process.env.NODE_ENV !== "production" && typeof i == "object")
    throw new Error(process.env.NODE_ENV === "production" ? it(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, o, c] = Bs(i), _;
  if (nm(t))
    _ = () => Qo(t());
  else {
    const h = Qo(t);
    _ = () => h;
  }
  function m(h = _(), f) {
    let g = [n[f.type], ...o.filter(({
      matcher: b
    }) => b(f)).map(({
      reducer: b
    }) => b)];
    return g.filter((b) => !!b).length === 0 && (g = [c]), g.reduce((b, v) => {
      if (v)
        if (Xi(b)) {
          const w = v(b, f);
          return w === void 0 ? b : w;
        } else {
          if (Ni(b))
            return Ts(b, (C) => v(C, f));
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
var rm = (t, i) => Ps(t) ? t.match(i) : t(i);
function om(...t) {
  return (i) => t.some((n) => rm(n, i));
}
var sm = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", lm = (t = 21) => {
  let i = "", n = t;
  for (; n--; )
    i += sm[Math.random() * 64 | 0];
  return i;
}, cm = ["name", "message", "stack", "code"], ar = class {
  constructor(t, i) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    er(this, "_type");
    this.payload = t, this.meta = i;
  }
}, ts = class {
  constructor(t, i) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    er(this, "_type");
    this.payload = t, this.meta = i;
  }
}, dm = (t) => {
  if (typeof t == "object" && t !== null) {
    const i = {};
    for (const n of cm)
      typeof t[n] == "string" && (i[n] = t[n]);
    return i;
  }
  return {
    message: String(t)
  };
}, is = "External signal was aborted", Nt = /* @__PURE__ */ (() => {
  function t(i, n, o) {
    const c = Pn(i + "/fulfilled", (f, g, b, v) => ({
      payload: f,
      meta: {
        ...v || {},
        arg: b,
        requestId: g,
        requestStatus: "fulfilled"
      }
    })), _ = Pn(i + "/pending", (f, g, b) => ({
      payload: void 0,
      meta: {
        ...b || {},
        arg: g,
        requestId: f,
        requestStatus: "pending"
      }
    })), m = Pn(i + "/rejected", (f, g, b, v, C) => ({
      payload: v,
      error: (o && o.serializeError || dm)(f || "Rejected"),
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
        const w = o != null && o.idGenerator ? o.idGenerator(f) : lm(), I = new AbortController();
        let N, A;
        function O(W) {
          A = W, I.abort();
        }
        g && (g.aborted ? O(is) : g.addEventListener("abort", () => O(is), {
          once: !0
        }));
        const X = async function() {
          var T, j;
          let W;
          try {
            let J = (T = o == null ? void 0 : o.condition) == null ? void 0 : T.call(o, f, {
              getState: v,
              extra: C
            });
            if (um(J) && (J = await J), J === !1 || I.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const V = new Promise((B, G) => {
              N = () => {
                G({
                  name: "AbortError",
                  message: A || "Aborted"
                });
              }, I.signal.addEventListener("abort", N);
            });
            b(_(w, f, (j = o == null ? void 0 : o.getPendingMeta) == null ? void 0 : j.call(o, {
              requestId: w,
              arg: f
            }, {
              getState: v,
              extra: C
            }))), W = await Promise.race([V, Promise.resolve(n(f, {
              dispatch: b,
              getState: v,
              extra: C,
              requestId: w,
              signal: I.signal,
              abort: O,
              rejectWithValue: (B, G) => new ar(B, G),
              fulfillWithValue: (B, G) => new ts(B, G)
            })).then((B) => {
              if (B instanceof ar)
                throw B;
              return B instanceof ts ? c(B.payload, w, f, B.meta) : c(B, w, f);
            })]);
          } catch (J) {
            W = J instanceof ar ? m(null, w, f, J.payload, J.meta) : m(J, w, f);
          } finally {
            N && I.signal.removeEventListener("abort", N);
          }
          return o && !o.dispatchConditionRejection && m.match(W) && W.meta.condition || b(W), W;
        }();
        return Object.assign(X, {
          abort: O,
          requestId: w,
          arg: f,
          unwrap() {
            return X.then(_m);
          }
        });
      };
    }
    return Object.assign(h, {
      pending: _,
      rejected: m,
      fulfilled: c,
      settled: om(m, c),
      typePrefix: i
    });
  }
  return t.withTypes = () => t, t;
})();
function _m(t) {
  if (t.meta && t.meta.rejectedWithValue)
    throw t.payload;
  if (t.error)
    throw t.error;
  return t.payload;
}
function um(t) {
  return t !== null && typeof t == "object" && typeof t.then == "function";
}
var mm = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function pm(t, i) {
  return `${t}/${i}`;
}
function hm({
  creators: t
} = {}) {
  var n;
  const i = (n = t == null ? void 0 : t.asyncThunk) == null ? void 0 : n[mm];
  return function(c) {
    const {
      name: _,
      reducerPath: m = _
    } = c;
    if (!_)
      throw new Error(process.env.NODE_ENV === "production" ? it(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && c.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const h = (typeof c.reducers == "function" ? c.reducers(gm()) : c.reducers) || {}, f = Object.keys(h), g = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, b = {
      addCase(U, T) {
        const j = typeof U == "string" ? U : U.type;
        if (!j)
          throw new Error(process.env.NODE_ENV === "production" ? it(12) : "`context.addCase` cannot be called with an empty action type");
        if (j in g.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? it(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + j);
        return g.sliceCaseReducersByType[j] = T, b;
      },
      addMatcher(U, T) {
        return g.sliceMatchers.push({
          matcher: U,
          reducer: T
        }), b;
      },
      exposeAction(U, T) {
        return g.actionCreators[U] = T, b;
      },
      exposeCaseReducer(U, T) {
        return g.sliceCaseReducersByName[U] = T, b;
      }
    };
    f.forEach((U) => {
      const T = h[U], j = {
        reducerName: U,
        type: pm(_, U),
        createNotation: typeof c.reducers == "function"
      };
      bm(T) ? xm(j, T, b, i) : ym(j, T, b);
    });
    function v() {
      if (process.env.NODE_ENV !== "production" && typeof c.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? it(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [U = {}, T = [], j = void 0] = typeof c.extraReducers == "function" ? Bs(c.extraReducers) : [c.extraReducers], J = {
        ...U,
        ...g.sliceCaseReducersByType
      };
      return am(c.initialState, (V) => {
        for (let B in J)
          V.addCase(B, J[B]);
        for (let B of g.sliceMatchers)
          V.addMatcher(B.matcher, B.reducer);
        for (let B of T)
          V.addMatcher(B.matcher, B.reducer);
        j && V.addDefaultCase(j);
      });
    }
    const C = (U) => U, w = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new WeakMap();
    let N;
    function A(U, T) {
      return N || (N = v()), N(U, T);
    }
    function O() {
      return N || (N = v()), N.getInitialState();
    }
    function X(U, T = !1) {
      function j(V) {
        let B = V[U];
        if (typeof B > "u") {
          if (T)
            B = ra(I, j, O);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? it(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return B;
      }
      function J(V = C) {
        const B = ra(w, T, () => /* @__PURE__ */ new WeakMap());
        return ra(B, V, () => {
          const G = {};
          for (const [F, Q] of Object.entries(c.selectors ?? {}))
            G[F] = fm(Q, V, () => ra(I, V, O), T);
          return G;
        });
      }
      return {
        reducerPath: U,
        getSelectors: J,
        get selectors() {
          return J(j);
        },
        selectSlice: j
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
        reducerPath: T,
        ...j
      } = {}) {
        const J = T ?? m;
        return U.inject({
          reducerPath: J,
          reducer: A
        }, j), {
          ...W,
          ...X(J, !0)
        };
      }
    };
    return W;
  };
}
function fm(t, i, n, o) {
  function c(_, ...m) {
    let h = i(_);
    if (typeof h > "u") {
      if (o)
        h = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? it(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return t(h, ...m);
  }
  return c.unwrapped = t, c;
}
var Yt = /* @__PURE__ */ hm();
function gm() {
  function t(i, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: i,
      ...n
    };
  }
  return t.withTypes = () => t, {
    reducer(i) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [i.name](...n) {
          return i(...n);
        }
      }[i.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(i, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: i,
        reducer: n
      };
    },
    asyncThunk: t
  };
}
function ym({
  type: t,
  reducerName: i,
  createNotation: n
}, o, c) {
  let _, m;
  if ("reducer" in o) {
    if (n && !vm(o))
      throw new Error(process.env.NODE_ENV === "production" ? it(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    _ = o.reducer, m = o.prepare;
  } else
    _ = o;
  c.addCase(t, _).exposeCaseReducer(i, _).exposeAction(i, m ? Pn(t, m) : Pn(t));
}
function bm(t) {
  return t._reducerDefinitionType === "asyncThunk";
}
function vm(t) {
  return t._reducerDefinitionType === "reducerWithPrepare";
}
function xm({
  type: t,
  reducerName: i
}, n, o, c) {
  if (!c)
    throw new Error(process.env.NODE_ENV === "production" ? it(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: _,
    fulfilled: m,
    pending: h,
    rejected: f,
    settled: g,
    options: b
  } = n, v = c(t, _, b);
  o.exposeAction(i, v), m && o.addCase(v.fulfilled, m), h && o.addCase(v.pending, h), f && o.addCase(v.rejected, f), g && o.addMatcher(v.settled, g), o.exposeCaseReducer(i, {
    fulfilled: m || sa,
    pending: h || sa,
    rejected: f || sa,
    settled: g || sa
  });
}
function sa() {
}
function it(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var Lr = { exports: {} }, rr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function wm() {
  if (ns) return rr;
  ns = 1;
  var t = Re;
  function i(f, g) {
    return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : i, o = t.useSyncExternalStore, c = t.useRef, _ = t.useEffect, m = t.useMemo, h = t.useDebugValue;
  return rr.useSyncExternalStoreWithSelector = function(f, g, b, v, C) {
    var w = c(null);
    if (w.current === null) {
      var I = { hasValue: !1, value: null };
      w.current = I;
    } else I = w.current;
    w = m(
      function() {
        function A(T) {
          if (!O) {
            if (O = !0, X = T, T = v(T), C !== void 0 && I.hasValue) {
              var j = I.value;
              if (C(j, T))
                return W = j;
            }
            return W = T;
          }
          if (j = W, n(X, T)) return j;
          var J = v(T);
          return C !== void 0 && C(j, J) ? (X = T, j) : (X = T, W = J);
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
    var N = o(f, w[0], w[1]);
    return _(
      function() {
        I.hasValue = !0, I.value = N;
      },
      [N]
    ), h(N), N;
  }, rr;
}
var or = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as;
function km() {
  return as || (as = 1, process.env.NODE_ENV !== "production" && function() {
    function t(f, g) {
      return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Re, n = typeof Object.is == "function" ? Object.is : t, o = i.useSyncExternalStore, c = i.useRef, _ = i.useEffect, m = i.useMemo, h = i.useDebugValue;
    or.useSyncExternalStoreWithSelector = function(f, g, b, v, C) {
      var w = c(null);
      if (w.current === null) {
        var I = { hasValue: !1, value: null };
        w.current = I;
      } else I = w.current;
      w = m(
        function() {
          function A(T) {
            if (!O) {
              if (O = !0, X = T, T = v(T), C !== void 0 && I.hasValue) {
                var j = I.value;
                if (C(j, T))
                  return W = j;
              }
              return W = T;
            }
            if (j = W, n(X, T))
              return j;
            var J = v(T);
            return C !== void 0 && C(j, J) ? (X = T, j) : (X = T, W = J);
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
      var N = o(f, w[0], w[1]);
      return _(
        function() {
          I.hasValue = !0, I.value = N;
        },
        [N]
      ), h(N), N;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), or;
}
process.env.NODE_ENV === "production" ? Lr.exports = wm() : Lr.exports = km();
var Cm = Lr.exports, sr = /* @__PURE__ */ Symbol.for("react-redux-context"), lr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Sm() {
  if (!Bi.createContext) return {};
  const t = lr[sr] ?? (lr[sr] = /* @__PURE__ */ new Map());
  let i = t.get(Bi.createContext);
  return i || (i = Bi.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (i.displayName = "ReactRedux"), t.set(Bi.createContext, i)), i;
}
var en = /* @__PURE__ */ Sm();
function $r(t = en) {
  return function() {
    const n = Bi.useContext(t);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Fs = /* @__PURE__ */ $r();
function Ds(t = en) {
  const i = t === en ? Fs : (
    // @ts-ignore
    $r(t)
  ), n = () => {
    const { store: o } = i();
    return o;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zm = /* @__PURE__ */ Ds();
function Nm(t = en) {
  const i = t === en ? zm : Ds(t), n = () => i().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var un = /* @__PURE__ */ Nm(), Tm = (t, i) => t === i;
function jm(t = en) {
  const i = t === en ? Fs : $r(t), n = (o, c = {}) => {
    const { equalityFn: _ = Tm } = typeof c == "function" ? { equalityFn: c } : c;
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
    const m = i(), { store: h, subscription: f, getServerState: g } = m, b = Bi.useRef(!0), v = Bi.useCallback(
      {
        [o.name](w) {
          const I = o(w);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: N = {} } = typeof c == "function" ? {} : c, { identityFunctionCheck: A, stabilityCheck: O } = m, {
              identityFunctionCheck: X,
              stabilityCheck: W
            } = {
              stabilityCheck: O,
              identityFunctionCheck: A,
              ...N
            };
            if (W === "always" || W === "once" && b.current) {
              const U = o(w);
              if (!_(I, U)) {
                let T;
                try {
                  throw new Error();
                } catch (j) {
                  ({ stack: T } = j);
                }
                console.warn(
                  "Selector " + (o.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: w,
                    selected: I,
                    selected2: U,
                    stack: T
                  }
                );
              }
            }
            if ((X === "always" || X === "once" && b.current) && I === w) {
              let U;
              try {
                throw new Error();
              } catch (T) {
                ({ stack: U } = T);
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
    ), C = Cm.useSyncExternalStoreWithSelector(
      f.addNestedSub,
      h.getState,
      g || h.getState,
      v,
      _
    );
    return Bi.useDebugValue(C), C;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ai = /* @__PURE__ */ jm();
const Pm = {
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
}, cr = Nt(
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
), Em = Nt(
  "user/logout",
  async () => {
    await fetch("/api/auth/logout", { method: "POST" });
  }
), dr = Nt(
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
), _r = Nt(
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
), $s = Yt({
  name: "user",
  initialState: Pm,
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
    t.addCase(cr.pending, (i) => {
      i.isLoading = !0, i.authError = null;
    }).addCase(cr.fulfilled, (i, n) => {
      i.isLoading = !1, i.isAuthenticated = !0, i.profile = n.payload.user, i.sessionExpiry = n.payload.sessionExpiry;
    }).addCase(cr.rejected, (i, n) => {
      i.isLoading = !1, i.authError = n.error.message || "Login failed";
    }), t.addCase(Em.fulfilled, (i) => {
      i.isAuthenticated = !1, i.profile = null, i.sessionExpiry = null;
    }), t.addCase(dr.pending, (i) => {
      i.profileLoading = !0, i.profileError = null;
    }).addCase(
      dr.fulfilled,
      (i, n) => {
        i.profileLoading = !1, i.profile && (i.profile = {
          ...i.profile,
          ...n.payload
        });
      }
    ).addCase(
      dr.rejected,
      (i, n) => {
        i.profileLoading = !1, i.profileError = n.error.message || "Profile update failed";
      }
    ), t.addCase(_r.pending, (i) => {
      i.preferencesLoading = !0, i.preferencesError = null;
    }).addCase(
      _r.fulfilled,
      (i, n) => {
        i.preferencesLoading = !1, i.preferences = {
          ...i.preferences,
          ...n.payload
        };
      }
    ).addCase(
      _r.rejected,
      (i, n) => {
        i.preferencesLoading = !1, i.preferencesError = n.error.message || "Preferences update failed";
      }
    );
  }
}), {
  clearAuthError: tC,
  updateLastActivity: iC,
  setSessionExpiry: nC,
  toggleChatEnabled: aC,
  toggleProfanityFilter: rC,
  setPrivacyLevel: oC,
  clearUserData: sC
} = $s.actions, Ws = $s.reducer, Im = {
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
}, Us = Yt({
  name: "ui",
  initialState: Im,
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
      const { tableId: n, config: o = {} } = i.payload;
      t.tables[n] = {
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
      const { tableId: n, field: o, direction: c } = i.payload;
      t.tables[n] && (t.tables[n].sorting = {
        field: o,
        direction: c
      });
    },
    updateTableFilters: (t, i) => {
      const { tableId: n, filters: o } = i.payload;
      t.tables[n] && (t.tables[n].filters = {
        ...t.tables[n].filters,
        ...o
      });
    },
    setTableSearchTerm: (t, i) => {
      const { tableId: n, searchTerm: o } = i.payload;
      t.tables[n] && (t.tables[n].searchTerm = o);
    },
    toggleTableRowSelection: (t, i) => {
      const { tableId: n, rowId: o } = i.payload;
      if (t.tables[n]) {
        const c = t.tables[n].selectedRows, _ = c.indexOf(o);
        _ > -1 ? c.splice(_, 1) : c.push(o);
      }
    },
    // Form actions
    initializeForm: (t, i) => {
      const { formId: n, initialData: o = {} } = i.payload;
      t.forms[n] = {
        data: o,
        errors: {},
        touched: {},
        isSubmitting: !1,
        isDirty: !1,
        isValid: !0
      };
    },
    updateForms: (t, i) => {
      const { formId: n, field: o, value: c } = i.payload;
      t.forms[n] && (t.forms[n].data[o] = c, t.forms[n].touched[o] = !0, t.forms[n].isDirty = !0);
    },
    setFormError: (t, i) => {
      const { formId: n, field: o, error: c } = i.payload;
      t.forms[n] && (t.forms[n].errors[o] = c, t.forms[n].isValid = Object.keys(t.forms[n].errors).length === 0);
    },
    clearFormErrors: (t, i) => {
      const { formId: n, field: o } = i.payload;
      t.forms[n] && (o ? delete t.forms[n].errors[o] : t.forms[n].errors = {}, t.forms[n].isValid = Object.keys(t.forms[n].errors).length === 0);
    },
    setFormSubmitting: (t, i) => {
      const { formId: n, isSubmitting: o } = i.payload;
      t.forms[n] && (t.forms[n].isSubmitting = o);
    },
    // Generic component actions
    setComponentState: (t, i) => {
      const { componentId: n, updates: o } = i.payload;
      t.components[n] || (t.components[n] = {
        isLoading: !1,
        isVisible: !0,
        isExpanded: !1,
        isDragging: !1,
        isHovered: !1,
        isFocused: !1,
        error: null,
        data: null
      }), t.components[n] = {
        ...t.components[n],
        ...o
      };
    },
    // Input actions
    setInputValue: (t, i) => {
      const {
        inputId: n,
        value: o,
        error: c = null
      } = i.payload;
      t.inputs[n] = {
        ...t.inputs[n],
        value: o,
        error: c,
        isValid: !c
      };
    },
    setInputFocus: (t, i) => {
      const { inputId: n, isFocused: o } = i.payload;
      t.inputs[n] || (t.inputs[n] = {
        value: "",
        error: null,
        isFocused: !1,
        isValid: !0
      }), t.inputs[n].isFocused = o;
    },
    // Switch actions
    setSwitchState: (t, i) => {
      const {
        switchId: n,
        checked: o,
        disabled: c = !1
      } = i.payload;
      t.switches[n] = { checked: o, disabled: c };
    },
    // Media actions
    setMediaState: (t, i) => {
      const { mediaId: n, updates: o } = i.payload;
      t.media[n] || (t.media[n] = {
        isLoading: !1,
        hasError: !1,
        isPlaying: !1,
        hasLoaded: !1
      }), t.media[n] = {
        ...t.media[n],
        ...o
      };
    },
    // Chart actions
    initializeChart: (t, i) => {
      const {
        chartId: n,
        selectedSeries: o,
        isInteractive: c = !0,
        allowMultiSelect: _ = !0
      } = i.payload;
      t.charts[n] = {
        selectedSeries: o,
        searchTerm: "",
        isInteractive: c,
        allowMultiSelect: _
      };
    },
    setChartSelectedSeries: (t, i) => {
      const { chartId: n, selectedSeries: o } = i.payload;
      t.charts[n] && (t.charts[n].selectedSeries = o);
    },
    setChartSearchTerm: (t, i) => {
      const { chartId: n, searchTerm: o } = i.payload;
      t.charts[n] && (t.charts[n].searchTerm = o);
    },
    toggleChartSeries: (t, i) => {
      const { chartId: n, seriesId: o } = i.payload;
      if (t.charts[n]) {
        const c = t.charts[n], _ = c.selectedSeries.includes(o);
        c.allowMultiSelect ? _ ? c.selectedSeries = c.selectedSeries.filter(
          (m) => m !== o
        ) : c.selectedSeries = [
          ...c.selectedSeries,
          o
        ] : c.selectedSeries = _ ? [] : [o];
      }
    },
    selectAllChartSeries: (t, i) => {
      const { chartId: n, allSeriesIds: o } = i.payload;
      if (t.charts[n]) {
        const c = t.charts[n], _ = o.every(
          (m) => c.selectedSeries.includes(m)
        );
        c.selectedSeries = _ ? [] : o;
      }
    },
    // Notification component actions
    setNotificationState: (t, i) => {
      const { notificationId: n, updates: o } = i.payload;
      t.notifications[n] || (t.notifications[n] = {
        isVisible: !1,
        isPaused: !1,
        progress: 100
      }), t.notifications[n] = {
        ...t.notifications[n],
        ...o
      };
    },
    // Select component actions
    setSelectState: (t, i) => {
      const { selectId: n, updates: o } = i.payload;
      t.selects[n] || (t.selects[n] = {
        internalValue: "",
        isOpen: !1,
        searchValue: "",
        focusedIndex: -1
      }), t.selects[n] = {
        ...t.selects[n],
        ...o
      };
    },
    // Radio component actions
    setRadioState: (t, i) => {
      const { radioId: n, updates: o } = i.payload;
      t.radios[n] || (t.radios[n] = {
        internalValue: void 0
      }), t.radios[n] = {
        ...t.radios[n],
        ...o
      };
    },
    // Map component actions
    setMapState: (t, i) => {
      const { mapId: n, updates: o } = i.payload;
      t.maps[n] || (t.maps[n] = {
        currentZoom: 1,
        currentCenter: { lat: 0, lng: 0 }
      }), t.maps[n] = {
        ...t.maps[n],
        ...o
      };
    },
    // Card component actions
    setCardState: (t, i) => {
      const { cardId: n, updates: o } = i.payload;
      t.cards[n] || (t.cards[n] = {
        isHovered: !1
      }), t.cards[n] = {
        ...t.cards[n],
        ...o
      };
    },
    // Range component actions
    setRangeState: (t, i) => {
      const { rangeId: n, updates: o } = i.payload;
      t.ranges[n] || (t.ranges[n] = {
        value: 0,
        isDragging: !1,
        showTooltip: !1
      }), t.ranges[n] = {
        ...t.ranges[n],
        ...o
      };
    },
    // Chat component actions
    setChatState: (t, i) => {
      const { chatId: n, updates: o } = i.payload;
      t.chats[n] || (t.chats[n] = {
        inputValue: ""
      }), t.chats[n] = {
        ...t.chats[n],
        ...o
      };
    },
    // Cleanup actions
    cleanupComponent: (t, i) => {
      const n = i.payload;
      delete t.components[n], delete t.inputs[n], delete t.switches[n], delete t.media[n], delete t.charts[n], delete t.notifications[n], delete t.selects[n], delete t.radios[n], delete t.maps[n], delete t.cards[n], delete t.ranges[n], delete t.chats[n];
    },
    cleanupForm: (t, i) => {
      const n = i.payload;
      delete t.forms[n];
    },
    cleanupTable: (t, i) => {
      const n = i.payload;
      delete t.tables[n];
    },
    cleanupChart: (t, i) => {
      const n = i.payload;
      delete t.charts[n];
    }
  }
}), {
  setGlobalLoading: lC,
  setGlobalError: cC,
  clearGlobalError: dC,
  startDrag: _C,
  endDrag: uC,
  setDropZone: mC,
  initializeTable: pC,
  updateTableSorting: hC,
  updateTableFilters: fC,
  setTableSearchTerm: gC,
  toggleTableRowSelection: yC,
  initializeForm: bC,
  updateForms: vC,
  setFormError: xC,
  clearFormErrors: wC,
  setFormSubmitting: kC,
  setComponentState: Tn,
  setInputValue: CC,
  setInputFocus: SC,
  setSwitchState: zC,
  setMediaState: ur,
  setNotificationState: NC,
  setSelectState: TC,
  setRadioState: jC,
  setMapState: Lm,
  setCardState: PC,
  setRangeState: EC,
  setChatState: IC,
  initializeChart: Am,
  setChartSelectedSeries: Mm,
  setChartSearchTerm: Om,
  toggleChartSeries: Rm,
  selectAllChartSeries: Bm,
  cleanupComponent: Wr,
  cleanupForm: LC,
  cleanupTable: AC,
  cleanupChart: Fm
} = Us.actions, Dm = (t) => (i) => i.ui.components[t], $m = (t) => (i) => i.ui.media[t], Wm = (t) => (i) => i.ui.maps[t], Um = (t) => (i) => {
  var n;
  return ((n = i.ui.charts[t]) == null ? void 0 : n.selectedSeries) || [];
}, Zm = (t) => (i) => {
  var n;
  return ((n = i.ui.charts[t]) == null ? void 0 : n.searchTerm) || "";
}, Zs = Us.reducer, Hm = [
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
], Vm = {
  // Current theme
  currentTheme: "light",
  previousTheme: null,
  // Theme system
  systemPreference: "light",
  followSystem: !1,
  // Available themes
  availableThemes: Hm,
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
}, Hs = Yt({
  name: "theme",
  initialState: Vm,
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
      const n = t.customThemes.findIndex(
        (o) => o.id === i.payload.id
      );
      n >= 0 ? t.customThemes[n] = i.payload : t.customThemes.push(i.payload);
    },
    removeCustomTheme: (t, i) => {
      t.customThemes = t.customThemes.filter(
        (n) => n.id !== i.payload
      ), t.currentTheme === i.payload && (t.currentTheme = "light");
    },
    // Palette management
    setPalette: (t, i) => {
      t.currentPalette = i.payload;
    },
    addCustomPalette: (t, i) => {
      const n = t.customPalettes.findIndex(
        (o) => o.id === i.payload.id
      );
      n >= 0 ? t.customPalettes[n] = i.payload : t.customPalettes.push(i.payload);
    },
    removeCustomPalette: (t, i) => {
      t.customPalettes = t.customPalettes.filter(
        (n) => n.id !== i.payload
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
  setTheme: MC,
  setSystemPreference: OC,
  setFollowSystem: RC,
  addCustomTheme: BC,
  removeCustomTheme: FC,
  setPalette: DC,
  addCustomPalette: $C,
  removeCustomPalette: WC,
  updateCustomization: UC,
  resetCustomization: ZC,
  updateAccessibility: HC,
  toggleHighContrast: VC,
  toggleReducedMotion: GC,
  toggleLargeText: KC,
  toggleFocusRings: qC,
  setLoading: YC,
  setError: JC,
  clearError: XC,
  toggleTheme: QC,
  revertTheme: eS
} = Hs.actions, Vs = Hs.reducer, Gm = {
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
}, mr = Nt(
  "socket/connect",
  async (t) => {
    const { url: i, options: n = {} } = t;
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
), Km = Nt(
  "socket/disconnect",
  async () => new Promise(
    (t) => {
      setTimeout(() => {
        t({ disconnectTime: Date.now() });
      }, 500);
    }
  )
), pr = Nt(
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
      (n) => setTimeout(n, 100)
    ), { ...i, acknowledged: !0 };
  }
), Gs = Yt({
  name: "socket",
  initialState: Gm,
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
      const n = i.payload;
      t.messages.push(n), t.messageHistory.push(n), t.stats.messagesReceived += 1, t.messageHistory.length > t.maxMessageHistory && (t.messageHistory = t.messageHistory.slice(
        -t.maxMessageHistory
      ));
    },
    acknowledgeMessage: (t, i) => {
      const n = i.payload, o = t.messages.find(
        (_) => _.id === n
      );
      o && (o.acknowledged = !0);
      const c = t.pendingMessages.find(
        (_) => _.id === n
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
      const { type: n, handler: o } = i.payload, c = t.registeredEvents.find(
        (_) => _.type === n
      );
      c ? (c.handler = o, c.active = !0) : t.registeredEvents.push({
        type: n,
        handler: o,
        active: !0
      });
    },
    unregisterEvent: (t, i) => {
      const n = i.payload, o = t.registeredEvents.findIndex(
        (c) => c.type === n
      );
      o >= 0 && t.registeredEvents.splice(o, 1);
    },
    toggleEvent: (t, i) => {
      const n = i.payload, o = t.registeredEvents.find(
        (c) => c.type === n
      );
      o && (o.active = !o.active);
    },
    // Settings
    updateSettings: (t, i) => {
      const {
        autoReconnect: n,
        maxReconnectAttempts: o,
        reconnectDelay: c,
        heartbeatInterval: _,
        maxMessageHistory: m
      } = i.payload;
      n !== void 0 && (t.autoReconnect = n), o !== void 0 && (t.maxReconnectAttempts = o), c !== void 0 && (t.reconnectDelay = c), _ !== void 0 && (t.heartbeatInterval = _), m !== void 0 && (t.maxMessageHistory = m);
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
    t.addCase(mr.pending, (i) => {
      i.isConnecting = !0, i.connectionError = null;
    }).addCase(mr.fulfilled, (i, n) => {
      i.isConnecting = !1, i.isConnected = !0, i.socketId = n.payload.socketId, i.url = n.payload.url, i.stats.connectTime = n.payload.connectTime, i.reconnectAttempts = 0;
    }).addCase(mr.rejected, (i, n) => {
      i.isConnecting = !1, i.isConnected = !1, i.connectionError = n.error.message || "Connection failed", i.reconnectAttempts += 1;
    }), t.addCase(
      Km.fulfilled,
      (i, n) => {
        i.isConnected = !1, i.isConnecting = !1, i.socketId = null, i.url = null, i.stats.connectTime && (i.stats.totalUptime += n.payload.disconnectTime - i.stats.connectTime), i.stats.connectTime = null;
      }
    ), t.addCase(pr.pending, (i, n) => {
      const o = {
        id: `temp-${Date.now()}`,
        type: n.meta.arg.type,
        data: n.meta.arg.data,
        timestamp: Date.now(),
        acknowledged: !1
      };
      i.pendingMessages.push(o);
    }).addCase(pr.fulfilled, (i, n) => {
      i.pendingMessages = i.pendingMessages.filter(
        (o) => o.id !== n.payload.id
      ), i.stats.messagesSent += 1;
    }).addCase(pr.rejected, (i, n) => {
      i.connectionError = n.error.message || "Failed to send message";
    });
  }
}), {
  setConnecting: tS,
  setConnectionError: iS,
  clearConnectionError: nS,
  receiveMessage: aS,
  acknowledgeMessage: rS,
  clearMessages: oS,
  clearMessageHistory: sS,
  registerEvent: lS,
  unregisterEvent: cS,
  toggleEvent: dS,
  updateSettings: _S,
  updateHeartbeat: uS,
  incrementReconnectCount: mS,
  updateUptime: pS,
  resetStats: hS,
  resetReconnectAttempts: fS
} = Gs.actions, Ks = Gs.reducer, qm = {
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
}, hr = Nt(
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
), Ym = Nt(
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
), fr = Nt(
  "game/fetchMatches",
  async (t = {}) => {
    const i = await fetch(
      `/api/game/matches?limit=${t.limit || 20}&offset=${t.offset || 0}`
    );
    if (!i.ok)
      throw new Error("Failed to fetch matches");
    return i.json();
  }
), gr = Nt(
  "game/fetchLeaderboard",
  async (t) => {
    const i = await fetch(
      `/api/game/leaderboard/${t}`
    );
    if (!i.ok)
      throw new Error("Failed to fetch leaderboard");
    return { gameType: t, data: await i.json() };
  }
), yr = Nt(
  "game/fetchAchievements",
  async () => {
    const t = await fetch("/api/game/achievements");
    if (!t.ok)
      throw new Error("Failed to fetch achievements");
    return t.json();
  }
), qs = Yt({
  name: "game",
  initialState: qm,
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
        const n = t.currentSession.players.find(
          (o) => o.id === i.payload.playerId
        );
        n && Object.assign(n, i.payload.updates);
      }
    },
    setPlayerReady: (t, i) => {
      if (t.currentSession) {
        const n = t.currentSession.players.find(
          (o) => o.id === i.payload.playerId
        );
        n && (n.isReady = i.payload.ready);
      }
    },
    // Achievements
    unlockAchievement: (t, i) => {
      const n = t.achievements.find(
        (o) => o.id === i.payload
      );
      n && !n.unlocked && (n.unlocked = !0, n.unlockedAt = Date.now(), n.progress = n.maxProgress);
    },
    updateAchievementProgress: (t, i) => {
      const n = t.achievements.find(
        (o) => o.id === i.payload.achievementId
      );
      n && !n.unlocked && (n.progress = Math.min(
        i.payload.progress,
        n.maxProgress
      ), n.progress >= n.maxProgress && (n.unlocked = !0, n.unlockedAt = Date.now()));
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
      const n = t.playerStats.averageScore * (t.playerStats.totalGames - 1) + i.payload.score;
      t.playerStats.averageScore = n / t.playerStats.totalGames;
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
    t.addCase(hr.pending, (i) => {
      i.sessionLoading = !0, i.sessionError = null;
    }).addCase(
      hr.fulfilled,
      (i, n) => {
        i.sessionLoading = !1, i.currentSession = n.payload;
      }
    ).addCase(
      hr.rejected,
      (i, n) => {
        i.sessionLoading = !1, i.sessionError = n.error.message || "Failed to create session";
      }
    ), t.addCase(
      Ym.fulfilled,
      (i, n) => {
        i.currentSession = n.payload;
      }
    ), t.addCase(fr.pending, (i) => {
      i.matchesLoading = !0, i.matchesError = null;
    }).addCase(fr.fulfilled, (i, n) => {
      i.matchesLoading = !1, i.matches = n.payload;
    }).addCase(fr.rejected, (i, n) => {
      i.matchesLoading = !1, i.matchesError = n.error.message || "Failed to fetch matches";
    }), t.addCase(gr.pending, (i) => {
      i.leaderboardsLoading = !0, i.leaderboardsError = null;
    }).addCase(
      gr.fulfilled,
      (i, n) => {
        i.leaderboardsLoading = !1, i.leaderboards[n.payload.gameType] = n.payload.data;
      }
    ).addCase(
      gr.rejected,
      (i, n) => {
        i.leaderboardsLoading = !1, i.leaderboardsError = n.error.message || "Failed to fetch leaderboard";
      }
    ), t.addCase(yr.pending, (i) => {
      i.achievementsLoading = !0, i.achievementsError = null;
    }).addCase(
      yr.fulfilled,
      (i, n) => {
        i.achievementsLoading = !1, i.achievements = n.payload;
      }
    ).addCase(
      yr.rejected,
      (i, n) => {
        i.achievementsLoading = !1, i.achievementsError = n.error.message || "Failed to fetch achievements";
      }
    );
  }
}), {
  updateSession: gS,
  endSession: yS,
  clearSession: bS,
  updatePlayer: vS,
  setPlayerReady: xS,
  unlockAchievement: wS,
  updateAchievementProgress: kS,
  updatePlayerStats: CS,
  incrementGameCount: SS,
  recordWin: zS,
  recordLoss: NS,
  updatePreferences: TS,
  toggleSound: jS,
  toggleMusic: PS,
  toggleAnimations: ES,
  setDifficulty: IS,
  clearSessionError: LS,
  clearMatchesError: AS,
  clearLeaderboardsError: MS,
  clearAchievementsError: OS
} = qs.actions, Ys = qs.reducer, Ki = {
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
}, br = Nt(
  "settings/load",
  async () => {
    const t = await fetch("/api/settings");
    if (!t.ok)
      throw new Error("Failed to load settings");
    return t.json();
  }
), vr = Nt(
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
), xr = Nt(
  "settings/sync",
  async () => {
    const t = await fetch("/api/settings/sync");
    if (!t.ok)
      throw new Error("Failed to sync settings");
    return t.json();
  }
), Js = Yt({
  name: "settings",
  initialState: Ki,
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
      const { isLoading: i, isSyncing: n, error: o, syncError: c } = t;
      Object.assign(t, {
        ...Ki,
        isLoading: i,
        isSyncing: n,
        error: o,
        syncError: c,
        lastUpdated: Date.now()
      });
    },
    resetSection: (t, i) => {
      const n = i.payload;
      n === "notifications" ? t.notifications = Ki.notifications : n === "privacy" ? t.privacy = Ki.privacy : n === "accessibility" ? t.accessibility = Ki.accessibility : n === "performance" ? t.performance = Ki.performance : n === "security" && (t.security = Ki.security), t.lastUpdated = Date.now();
    }
  },
  extraReducers: (t) => {
    t.addCase(br.pending, (i) => {
      i.isLoading = !0, i.error = null;
    }).addCase(br.fulfilled, (i, n) => {
      i.isLoading = !1, Object.assign(i, n.payload), i.lastUpdated = Date.now();
    }).addCase(br.rejected, (i, n) => {
      i.isLoading = !1, i.error = n.error.message || "Failed to load settings";
    }), t.addCase(vr.pending, (i) => {
      i.isLoading = !0, i.error = null;
    }).addCase(vr.fulfilled, (i) => {
      i.isLoading = !1, i.lastUpdated = Date.now();
    }).addCase(vr.rejected, (i, n) => {
      i.isLoading = !1, i.error = n.error.message || "Failed to save settings";
    }), t.addCase(xr.pending, (i) => {
      i.isSyncing = !0, i.syncError = null;
    }).addCase(xr.fulfilled, (i, n) => {
      i.isSyncing = !1, Object.assign(i, n.payload), i.lastSynced = Date.now();
    }).addCase(xr.rejected, (i, n) => {
      i.isSyncing = !1, i.syncError = n.error.message || "Failed to sync settings";
    });
  }
}), {
  updateNotificationSettings: RS,
  toggleNotifications: BS,
  updatePrivacySettings: FS,
  setProfileVisibility: DS,
  updateAccessibilitySettings: $S,
  toggleHighContrast: WS,
  toggleLargeText: US,
  toggleReducedMotion: ZS,
  updatePerformanceSettings: HS,
  setGraphicsQuality: VS,
  toggleAnimations: GS,
  updateSecuritySettings: KS,
  toggleTwoFactorAuth: qS,
  setSessionTimeout: YS,
  setLanguage: JS,
  setTimezone: XS,
  setTimeFormat: QS,
  toggleAutoSave: ez,
  toggleAutoSync: tz,
  toggleOfflineMode: iz,
  toggleDebugMode: nz,
  updateStorageUsed: az,
  updateCacheSize: rz,
  clearCache: oz,
  setError: sz,
  setSyncError: lz,
  clearError: cz,
  clearSyncError: dz,
  resetToDefaults: _z,
  resetSection: uz
} = Js.actions, Xs = Js.reducer, Jm = {
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
}, Oi = Yt({
  name: "notifications",
  initialState: Jm,
  reducers: {
    // Add notifications
    addNotification: (t, i) => {
      const n = {
        ...i.payload,
        id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now(),
        read: !1,
        dismissed: !1
      };
      t.all.unshift(n), t.stats.total += 1, t.stats.unread += 1, n.type === "achievement" && (t.stats.achievements += 1), t.active.length < t.maxActive ? t.active.push(n) : t.queue.push(n);
    },
    // Quick notification creators
    addSuccess: (t, i) => {
      const { title: n, message: o, duration: c } = i.payload;
      Oi.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "success",
            title: n,
            message: o,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addError: (t, i) => {
      const {
        title: n,
        message: o,
        persistent: c = !1
      } = i.payload;
      Oi.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "error",
            title: n,
            message: o,
            persistent: c,
            duration: c ? void 0 : t.defaultDuration * 2
          }
        }
      );
    },
    addWarning: (t, i) => {
      const { title: n, message: o, duration: c } = i.payload;
      Oi.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "warning",
            title: n,
            message: o,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addInfo: (t, i) => {
      const { title: n, message: o, duration: c } = i.payload;
      Oi.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "info",
            title: n,
            message: o,
            duration: c || t.defaultDuration
          }
        }
      );
    },
    addAchievement: (t, i) => {
      const { title: n, message: o, icon: c, data: _ } = i.payload;
      Oi.caseReducers.addNotification(
        t,
        {
          type: "addNotification",
          payload: {
            type: "achievement",
            title: n,
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
      const n = i.payload, o = t.active.findIndex(
        (_) => _.id === n
      );
      if (o >= 0 && (t.active.splice(o, 1), t.queue.length > 0)) {
        const _ = t.queue.shift();
        t.active.push(_);
      }
      const c = t.all.find(
        (_) => _.id === n
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
      const n = i.payload, o = t.all.find(
        (c) => c.id === n
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
      const { notificationId: n } = i.payload, o = t.all.find(
        (c) => c.id === n
      );
      o && !o.read && (o.read = !0, t.stats.unread -= 1);
    },
    // Settings
    updateSettings: (t, i) => {
      const {
        soundEnabled: n,
        showAchievements: o,
        showSystem: c,
        showErrors: _,
        groupSimilar: m,
        maxActive: h,
        defaultDuration: f,
        position: g
      } = i.payload;
      n !== void 0 && (t.soundEnabled = n), o !== void 0 && (t.showAchievements = o), c !== void 0 && (t.showSystem = c), _ !== void 0 && (t.showErrors = _), m !== void 0 && (t.groupSimilar = m), h !== void 0 && (t.maxActive = h), f !== void 0 && (t.defaultDuration = f), g !== void 0 && (t.position = g);
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
      const n = i.payload;
      t.active = t.active.filter(
        (m) => m.type !== n
      ), t.queue = t.queue.filter(
        (m) => m.type !== n
      );
      const o = t.all.filter(
        (m) => m.type === n
      ).length, c = t.all.filter(
        (m) => m.type === n && !m.read
      ).length, _ = n === "achievement" ? t.all.filter((m) => m.type === "achievement").length : 0;
      t.all = t.all.filter((m) => m.type !== n), t.stats.total -= o, t.stats.unread -= c, n === "achievement" && (t.stats.achievements -= _);
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
      const i = Date.now(), n = [];
      t.active.forEach((o) => {
        !o.persistent && o.duration && i - o.timestamp >= o.duration && n.push(o.id);
      }), n.forEach((o) => {
        Oi.caseReducers.dismissNotification(
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
  addNotification: mz,
  addSuccess: pz,
  addError: hz,
  addWarning: fz,
  addInfo: gz,
  addAchievement: yz,
  dismissNotification: bz,
  dismissAll: vz,
  markAsRead: xz,
  markAllAsRead: wz,
  executeAction: kz,
  updateSettings: Cz,
  toggleSound: Sz,
  clearHistory: zz,
  clearAll: Nz,
  removeByType: Tz,
  setError: jz,
  clearError: Pz,
  setLoading: Ez,
  processExpiredNotifications: Iz
} = Oi.actions, Qs = Oi.reducer, Xm = {
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
}, Qm = {
  sessions: {},
  activeSessionId: null,
  files: [],
  selectedFiles: [],
  globalConfig: Xm,
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
}, wr = Nt(
  "files/uploadFile",
  async (t) => {
    const { sessionId: i, fileId: n, file: o, config: c } = t;
    return new Promise((_, m) => {
      let h = 0;
      const f = setInterval(() => {
        h += Math.random() * 20, h >= 100 && (clearInterval(f), _({
          fileId: n,
          url: `https://example.com/files/${n}`,
          metadata: {
            originalName: o.name,
            mimeType: o.type,
            uploadedAt: Date.now()
          }
        }));
      }, 200);
    });
  }
), ep = Nt(
  "files/generateThumbnail",
  async (t) => {
    const { fileId: i, file: n } = t;
    return new Promise((o) => {
      setTimeout(() => {
        o({
          fileId: i,
          thumbnailUrl: `https://example.com/thumbnails/${i}`
        });
      }, 1e3);
    });
  }
), tp = Nt(
  "files/validateFiles",
  async (t) => {
    const { files: i, config: n } = t, o = {};
    return i.forEach((c, _) => {
      const m = [];
      c.size > n.maxSize && m.push(
        `File size exceeds maximum allowed size of ${n.maxSize / (1024 * 1024)}MB`
      ), n.allowedTypes.some(
        (f) => f.includes("*") ? c.type.startsWith(
          f.replace("*", "")
        ) : c.type === f || c.name.endsWith(f)
      ) || m.push(
        `File type ${c.type} is not allowed`
      ), m.length > 0 && (o[`file-${_}`] = m);
    }), o;
  }
), pa = Yt({
  name: "files",
  initialState: Qm,
  reducers: {
    // Session management
    createSession: (t, i) => {
      const { sessionId: n, config: o = {} } = i.payload;
      t.sessions[n] = {
        id: n,
        files: [],
        status: "idle",
        totalSize: 0,
        uploadedSize: 0,
        config: { ...t.globalConfig, ...o }
      }, t.activeSessionId = n;
    },
    removeSession: (t, i) => {
      const n = i.payload;
      delete t.sessions[n], t.activeSessionId === n && (t.activeSessionId = null);
    },
    setActiveSession: (t, i) => {
      t.activeSessionId = i.payload;
    },
    // File management
    addFiles: (t, i) => {
      const { sessionId: n, files: o } = i.payload, c = t.sessions[n];
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
      const { sessionId: n, fileId: o } = i.payload, c = t.sessions[n];
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
      const { fileId: n, status: o, error: c } = i.payload;
      Object.values(t.sessions).forEach((m) => {
        const h = m.files.find(
          (f) => f.id === n
        );
        h && (h.status = o, c && (h.error = c));
      });
      const _ = t.files.find(
        (m) => m.id === n
      );
      _ && (_.status = o, c && (_.error = c));
    },
    updateFileProgress: (t, i) => {
      const { fileId: n, progress: o } = i.payload;
      Object.values(t.sessions).forEach((_) => {
        const m = _.files.find(
          (h) => h.id === n
        );
        m && (m.progress = o, o === 100 && m.status === "uploading" && (m.status = "completed"));
      });
      const c = t.files.find(
        (_) => _.id === n
      );
      c && (c.progress = o, o === 100 && c.status === "uploading" && (c.status = "completed"));
    },
    // File selection
    selectFile: (t, i) => {
      const n = i.payload;
      t.selectedFiles.includes(n) || t.selectedFiles.push(n);
    },
    deselectFile: (t, i) => {
      const n = i.payload, o = t.selectedFiles.indexOf(n);
      o >= 0 && t.selectedFiles.splice(o, 1);
    },
    selectAllFiles: (t, i) => {
      const n = i.payload, o = t.sessions[n];
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
      const { sessionId: n, config: o } = i.payload, c = t.sessions[n];
      c && (c.config = { ...c.config, ...o });
    },
    // Validation
    setValidationErrors: (t, i) => {
      t.validationErrors = i.payload;
    },
    clearValidationErrors: (t, i) => {
      const n = i.payload;
      n ? delete t.validationErrors[n] : t.validationErrors = {};
    },
    // Statistics
    updateStats: (t, i) => {
      t.stats = { ...t.stats, ...i.payload };
    },
    incrementUploadCount: (t, i) => {
      const { success: n, size: o, duration: c } = i.payload;
      if (t.stats.totalUploads += 1, t.stats.totalBytesUploaded += o, n ? t.stats.successfulUploads += 1 : t.stats.failedUploads += 1, c) {
        const _ = t.stats.averageUploadTime * (t.stats.totalUploads - 1) + c;
        t.stats.averageUploadTime = _ / t.stats.totalUploads;
      }
    },
    // Utility actions
    clearCompletedFiles: (t, i) => {
      const n = i.payload, o = t.sessions[n];
      o && (o.files = o.files.filter(
        (c) => c.status !== "completed"
      ));
    },
    clearErrorFiles: (t, i) => {
      const n = i.payload, o = t.sessions[n];
      o && (o.files = o.files.filter(
        (c) => c.status !== "error"
      ));
    },
    retryFailedFiles: (t, i) => {
      const n = i.payload, o = t.sessions[n];
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
      const n = i.payload;
      t.componentStates[n] || (t.componentStates[n] = {
        dragActive: !1,
        uploadProgress: 0,
        validationErrors: [],
        selectedFiles: []
      });
    },
    setComponentDragActive: (t, i) => {
      const { componentId: n, dragActive: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].dragActive = o);
    },
    setComponentUploadProgress: (t, i) => {
      const { componentId: n, progress: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].uploadProgress = o);
    },
    setComponentValidationErrors: (t, i) => {
      const { componentId: n, errors: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].validationErrors = o);
    },
    setComponentSelectedFiles: (t, i) => {
      const { componentId: n, files: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].selectedFiles = o);
    },
    clearComponentState: (t, i) => {
      const n = i.payload;
      t.componentStates[n] && (t.componentStates[n] = {
        dragActive: !1,
        uploadProgress: 0,
        validationErrors: [],
        selectedFiles: []
      });
    },
    removeComponentState: (t, i) => {
      const n = i.payload;
      delete t.componentStates[n];
    }
  },
  extraReducers: (t) => {
    t.addCase(wr.pending, (i, n) => {
      const { fileId: o } = n.meta.arg;
      pa.caseReducers.updateFileStatus(i, {
        type: "updateFileStatus",
        payload: { fileId: o, status: "uploading" }
      });
    }).addCase(wr.fulfilled, (i, n) => {
      const { fileId: o, url: c, metadata: _ } = n.payload;
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
    }).addCase(wr.rejected, (i, n) => {
      const { fileId: o } = n.meta.arg;
      pa.caseReducers.updateFileStatus(i, {
        type: "updateFileStatus",
        payload: {
          fileId: o,
          status: "error",
          error: n.error.message || "Upload failed"
        }
      });
    }), t.addCase(
      ep.fulfilled,
      (i, n) => {
        const { fileId: o, thumbnailUrl: c } = n.payload;
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
      tp.fulfilled,
      (i, n) => {
        i.validationErrors = n.payload;
      }
    );
  }
}), {
  createSession: Lz,
  removeSession: Az,
  setActiveSession: Mz,
  addFiles: Oz,
  removeFile: Rz,
  updateFileStatus: Bz,
  updateFileProgress: Fz,
  selectFile: Dz,
  deselectFile: $z,
  selectAllFiles: Wz,
  deselectAllFiles: Uz,
  updateGlobalConfig: Zz,
  updateSessionConfig: Hz,
  setValidationErrors: Vz,
  clearValidationErrors: Gz,
  updateStats: Kz,
  incrementUploadCount: qz,
  clearCompletedFiles: Yz,
  clearErrorFiles: Jz,
  retryFailedFiles: Xz,
  setError: Qz,
  clearError: e3,
  setLoading: t3,
  // Component state actions
  initializeComponentState: ip,
  setComponentDragActive: kr,
  setComponentUploadProgress: rs,
  setComponentValidationErrors: os,
  setComponentSelectedFiles: np,
  clearComponentState: i3,
  removeComponentState: ap
} = pa.actions, rp = (t) => (i) => {
  var n;
  return ((n = i.files.componentStates[t]) == null ? void 0 : n.dragActive) || !1;
}, op = (t) => (i) => {
  var n;
  return ((n = i.files.componentStates[t]) == null ? void 0 : n.uploadProgress) || 0;
}, sp = (t) => (i) => {
  var n;
  return ((n = i.files.componentStates[t]) == null ? void 0 : n.validationErrors) || [];
}, lp = (t) => (i) => {
  var n;
  return ((n = i.files.componentStates[t]) == null ? void 0 : n.selectedFiles) || [];
}, el = pa.reducer, cp = {
  activeModals: [],
  globalLoading: !1,
  globalError: null
}, tl = Yt({
  name: "modals",
  initialState: cp,
  reducers: {
    // Modal lifecycle actions
    openModal: (t, i) => {
      const { id: n, data: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === n
      );
      c ? (c.isOpen = !0, o && (c.data = o)) : t.activeModals.push({
        id: n,
        isOpen: !0,
        data: o || {},
        loading: !1,
        error: null,
        success: !1
      });
    },
    closeModal: (t, i) => {
      const n = i.payload, o = t.activeModals.find(
        (c) => c.id === n
      );
      o && (o.isOpen = !1);
    },
    removeModal: (t, i) => {
      const n = i.payload;
      t.activeModals = t.activeModals.filter(
        (o) => o.id !== n
      );
    },
    closeAllModals: (t) => {
      t.activeModals.forEach((i) => {
        i.isOpen = !1;
      });
    },
    // Modal data actions
    updateModalData: (t, i) => {
      const { id: n, data: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === n
      );
      c && (c.data = { ...c.data, ...o });
    },
    setModalForms: (t, i) => {
      const { id: n, field: o, value: c } = i.payload, _ = t.activeModals.find(
        (m) => m.id === n
      );
      _ && (_.data || (_.data = {}), _.data[o] = c);
    },
    clearModalData: (t, i) => {
      const n = i.payload, o = t.activeModals.find(
        (c) => c.id === n
      );
      o && (o.data = {});
    },
    // Modal state actions
    setModalLoading: (t, i) => {
      const { id: n, loading: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === n
      );
      c && (c.loading = o);
    },
    setModalError: (t, i) => {
      const { id: n, error: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === n
      );
      c && (c.error = o);
    },
    setModalSuccess: (t, i) => {
      const { id: n, success: o } = i.payload, c = t.activeModals.find(
        (_) => _.id === n
      );
      c && (c.success = o);
    },
    resetModalState: (t, i) => {
      const n = i.payload, o = t.activeModals.find(
        (c) => c.id === n
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
  openModal: dp,
  closeModal: n3,
  removeModal: a3,
  closeAllModals: r3,
  updateModalData: o3,
  setModalForms: ss,
  clearModalData: s3,
  setModalLoading: ls,
  setModalError: la,
  setModalSuccess: _p,
  resetModalState: l3,
  setGlobalLoading: c3,
  setGlobalError: d3,
  resetGlobalState: _3
} = tl.actions, up = (t, i) => {
  var n;
  return ((n = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : n.data) || {};
}, mp = (t, i) => {
  var n;
  return ((n = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : n.loading) || !1;
}, pp = (t, i) => {
  var n;
  return ((n = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : n.error) || null;
}, hp = (t, i) => {
  var n;
  return ((n = t.modals.activeModals.find(
    (o) => o.id === i
  )) == null ? void 0 : n.success) || !1;
}, il = tl.reducer, nl = {
  clientTime: null,
  performance: {
    memory: 0,
    fps: 0,
    loadTime: 0
  },
  errors: []
}, fp = {
  componentStates: {},
  isDebugModeEnabled: !1,
  globalAdminEnabled: typeof window < "u"
  // Default to true in browser
}, al = Yt({
  name: "admin",
  initialState: fp,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] || (t.componentStates[n] = {
        ...nl
      });
    },
    // Session Debugger actions
    setClientTime: (t, i) => {
      const { componentId: n, time: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].clientTime = o);
    },
    // Performance Monitor actions
    setPerformanceMetrics: (t, i) => {
      const { componentId: n, metrics: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].performance = o);
    },
    // Error Logger actions
    addError: (t, i) => {
      const { componentId: n, error: o } = i.payload;
      t.componentStates[n] && t.componentStates[n].errors.push(
        o
      );
    },
    setErrors: (t, i) => {
      const { componentId: n, errors: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].errors = o);
    },
    clearErrors: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].errors = []);
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
      const { componentId: n } = i.payload;
      delete t.componentStates[n];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    }
  }
}), {
  initializeComponentState: gp,
  setClientTime: yp,
  setPerformanceMetrics: bp,
  addError: u3,
  setErrors: vp,
  clearErrors: m3,
  setDebugModeEnabled: p3,
  setGlobalAdminEnabled: h3,
  removeComponentState: f3,
  clearAllComponentStates: g3
} = al.actions, xp = (t, i) => {
  var n;
  return ((n = t.admin.componentStates[i]) == null ? void 0 : n.clientTime) || null;
}, wp = (t, i) => {
  var n;
  return ((n = t.admin.componentStates[i]) == null ? void 0 : n.performance) || nl.performance;
}, kp = (t, i) => {
  var n;
  return ((n = t.admin.componentStates[i]) == null ? void 0 : n.errors) || [];
}, rl = al.reducer, Ar = {
  sorting: { column: "", direction: "asc" },
  filters: {},
  searchTerm: "",
  selectedRows: /* @__PURE__ */ new Set(),
  expandedRows: /* @__PURE__ */ new Set(),
  editingCell: null
}, Cp = {
  componentStates: {}
}, ol = Yt({
  name: "table",
  initialState: Cp,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const {
        componentId: n,
        initialState: o = {}
      } = i.payload;
      t.componentStates[n] || (t.componentStates[n] = {
        ...Ar,
        ...o
      });
    },
    // Sorting actions
    setSorting: (t, i) => {
      const { componentId: n, sorting: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].sorting = o);
    },
    // Filtering actions
    setFilters: (t, i) => {
      const { componentId: n, filters: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].filters = o);
    },
    updateFilter: (t, i) => {
      const { componentId: n, key: o, value: c } = i.payload;
      t.componentStates[n] && (c == null || c === "" ? delete t.componentStates[n].filters[o] : t.componentStates[n].filters[o] = c);
    },
    setSearchTerm: (t, i) => {
      const { componentId: n, searchTerm: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].searchTerm = o);
    },
    // Selection actions
    setSelectedRows: (t, i) => {
      const { componentId: n, selectedRows: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].selectedRows = new Set(o));
    },
    addSelectedRow: (t, i) => {
      const { componentId: n, rowId: o } = i.payload;
      t.componentStates[n] && t.componentStates[n].selectedRows.add(
        o
      );
    },
    removeSelectedRow: (t, i) => {
      const { componentId: n, rowId: o } = i.payload;
      t.componentStates[n] && t.componentStates[n].selectedRows.delete(o);
    },
    clearSelectedRows: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && t.componentStates[n].selectedRows.clear();
    },
    // Expansion actions
    setExpandedRows: (t, i) => {
      const { componentId: n, expandedRows: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].expandedRows = new Set(o));
    },
    toggleRowExpansion: (t, i) => {
      const { componentId: n, rowId: o } = i.payload;
      if (t.componentStates[n]) {
        const c = t.componentStates[n].expandedRows;
        c.has(o) ? c.delete(o) : c.add(o);
      }
    },
    // Editing actions
    setEditingCell: (t, i) => {
      const { componentId: n, editingCell: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].editingCell = o);
    },
    clearEditingCell: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].editingCell = null);
    },
    // Cleanup
    removeComponentState: (t, i) => {
      const { componentId: n } = i.payload;
      delete t.componentStates[n];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetTableState: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n] = {
        ...Ar
      });
    }
  }
}), {
  initializeComponentState: Sp,
  setSorting: zp,
  setFilters: y3,
  updateFilter: b3,
  setSearchTerm: Np,
  setSelectedRows: cs,
  addSelectedRow: v3,
  removeSelectedRow: x3,
  clearSelectedRows: w3,
  setExpandedRows: Tp,
  toggleRowExpansion: k3,
  setEditingCell: Cr,
  clearEditingCell: C3,
  removeComponentState: jp,
  clearAllComponentStates: S3,
  resetTableState: z3
} = ol.actions, Pp = (t, i) => {
  var n;
  return ((n = t.table.componentStates[i]) == null ? void 0 : n.sorting) || Ar.sorting;
}, Ep = (t, i) => {
  var n;
  return ((n = t.table.componentStates[i]) == null ? void 0 : n.filters) || {};
}, Ip = (t, i) => {
  var n;
  return ((n = t.table.componentStates[i]) == null ? void 0 : n.searchTerm) || "";
}, Lp = (t, i) => {
  var n;
  return ((n = t.table.componentStates[i]) == null ? void 0 : n.selectedRows) || /* @__PURE__ */ new Set();
}, Ap = (t, i) => {
  var n;
  return ((n = t.table.componentStates[i]) == null ? void 0 : n.expandedRows) || /* @__PURE__ */ new Set();
}, Mp = (t, i) => {
  var n;
  return ((n = t.table.componentStates[i]) == null ? void 0 : n.editingCell) || null;
}, sl = ol.reducer, ds = {
  isOpen: !1,
  isMobile: !1,
  activeItemId: null,
  mobileBreakpoint: 768
}, Op = {
  componentStates: {},
  defaultMobileBreakpoint: 768,
  globalResponsiveEnabled: !0
}, ll = Yt({
  name: "navigation",
  initialState: Op,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const {
        componentId: n,
        initialState: o = {}
      } = i.payload;
      t.componentStates[n] || (t.componentStates[n] = {
        ...ds,
        ...o
      });
    },
    // Open/close actions
    setIsOpen: (t, i) => {
      const { componentId: n, isOpen: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].isOpen = o);
    },
    toggleNavigation: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].isOpen = !t.componentStates[n].isOpen);
    },
    closeNavigation: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].isOpen = !1);
    },
    // Responsive actions
    setIsMobile: (t, i) => {
      const { componentId: n, isMobile: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].isMobile = o);
    },
    setMobileBreakpoint: (t, i) => {
      const { componentId: n, breakpoint: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].mobileBreakpoint = o);
    },
    // Active item actions
    setActiveItem: (t, i) => {
      const { componentId: n, itemId: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].activeItemId = o);
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
      const { componentId: n } = i.payload;
      delete t.componentStates[n];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetNavigationState: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n] = {
        ...ds
      });
    }
  }
}), {
  initializeComponentState: N3,
  setIsOpen: T3,
  toggleNavigation: j3,
  closeNavigation: P3,
  setIsMobile: E3,
  setMobileBreakpoint: I3,
  setActiveItem: L3,
  setDefaultMobileBreakpoint: A3,
  setGlobalResponsiveEnabled: M3,
  removeComponentState: O3,
  clearAllComponentStates: R3,
  resetNavigationState: B3
} = ll.actions, cl = ll.reducer, _s = {
  value: "",
  state: "default",
  errorText: "",
  showPassword: !1,
  isFocused: !1,
  isValid: !0,
  debounceTimeoutId: null
}, Rp = {
  componentStates: {},
  globalDebounceDelay: 300,
  globalValidationEnabled: !0
}, dl = Yt({
  name: "input",
  initialState: Rp,
  reducers: {
    // Component state management
    initializeComponentState: (t, i) => {
      const {
        componentId: n,
        initialState: o = {}
      } = i.payload;
      t.componentStates[n] || (t.componentStates[n] = {
        ..._s,
        ...o
      });
    },
    // Value actions
    setValue: (t, i) => {
      const { componentId: n, value: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].value = o);
    },
    clearValue: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].value = "");
    },
    // State actions
    setInputState: (t, i) => {
      const { componentId: n, inputState: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].state = o);
    },
    setErrorText: (t, i) => {
      const { componentId: n, errorText: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].errorText = o);
    },
    clearError: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].errorText = "", t.componentStates[n].state = "default");
    },
    // Password visibility actions
    setShowPassword: (t, i) => {
      const { componentId: n, showPassword: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].showPassword = o);
    },
    togglePasswordVisibility: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n].showPassword = !t.componentStates[n].showPassword);
    },
    // Focus actions
    setFocused: (t, i) => {
      const { componentId: n, isFocused: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].isFocused = o);
    },
    // Validation actions
    setValid: (t, i) => {
      const { componentId: n, isValid: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].isValid = o);
    },
    // Debounce actions
    setDebounceTimeout: (t, i) => {
      const { componentId: n, timeoutId: o } = i.payload;
      t.componentStates[n] && (t.componentStates[n].debounceTimeoutId = o);
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
      const { componentId: n } = i.payload;
      delete t.componentStates[n];
    },
    clearAllComponentStates: (t) => {
      t.componentStates = {};
    },
    // Reset actions
    resetInputState: (t, i) => {
      const { componentId: n } = i.payload;
      t.componentStates[n] && (t.componentStates[n] = {
        ..._s
      });
    }
  }
}), {
  initializeComponentState: F3,
  setValue: D3,
  clearValue: $3,
  setInputState: W3,
  setErrorText: U3,
  clearError: Z3,
  setShowPassword: H3,
  togglePasswordVisibility: V3,
  setFocused: G3,
  setValid: K3,
  setDebounceTimeout: q3,
  setGlobalDebounceDelay: Y3,
  setGlobalValidationEnabled: J3,
  removeComponentState: X3,
  clearAllComponentStates: Q3,
  resetInputState: e5
} = dl.actions, _l = dl.reducer;
Rs({
  reducer: {
    // User domain - authentication, profile, preferences
    user: Ws,
    // UI domain - component states, loading, errors, form data
    ui: Zs,
    // Theme domain - themes, palettes, dark mode
    theme: Vs,
    // Socket domain - connection state, real-time events
    socket: Ks,
    // Game domain - game state, matches, leaderboards
    game: Ys,
    // Settings domain - application settings, configurations
    settings: Xs,
    // Notification domain - alerts, toasts, achievements
    notifications: Qs,
    // File domain - uploads, file management
    files: el,
    // Modal domain - modal states and data
    modals: il,
    // Admin domain - debug panels, performance monitoring, error logging
    admin: rl,
    // Table domain - table state, sorting, filtering, selection
    table: sl,
    // Navigation domain - navigation open/close, responsive, active items
    navigation: cl,
    // Input domain - input values, states, validation, focus
    input: _l
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
const Ur = () => un(), Si = ai, Bp = {
  user: Ws,
  ui: Zs,
  theme: Vs,
  socket: Ks,
  game: Ys,
  settings: Xs,
  notifications: Qs,
  files: el,
  modals: il,
  admin: rl,
  table: sl,
  navigation: cl,
  input: _l
};
Rs({
  reducer: Bp
});
const ul = {
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
}, Fp = ({ label: t, value: i, className: n }) => /* @__PURE__ */ s.jsxs(p, { className: n || Fi.debugRow, children: [
  /* @__PURE__ */ s.jsxs("strong", { children: [
    t,
    ":"
  ] }),
  " ",
  i
] }), Dp = ({
  label: t,
  value: i,
  unit: n = "",
  className: o,
  labelClassName: c,
  valueClassName: _
}) => /* @__PURE__ */ s.jsxs(p, { className: o || Fi.metricRow, children: [
  /* @__PURE__ */ s.jsxs("span", { className: c || Fi.metricLabel, children: [
    t,
    ":"
  ] }),
  /* @__PURE__ */ s.jsxs("span", { className: _ || Fi.metricValue, children: [
    i,
    n ? ` ${n}` : ""
  ] })
] }), $p = {
  "session-debugger": {
    className: "sessionDebugger",
    updateInterval: 1e3,
    dataKey: "time",
    selector: xp,
    actionCreator: yp,
    dataProcessor: (t, i) => {
      var n, o, c, _;
      return {
        debugData: [
          {
            label: "Session Status",
            value: i.status || "unknown"
          },
          {
            label: "User ID",
            value: ((o = (n = i.session) == null ? void 0 : n.user) == null ? void 0 : o.id) || "None"
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
    renderer: (t, i, n) => {
      var o;
      return /* @__PURE__ */ s.jsx(p, { className: i.sessionDebugger, children: ((o = t.debugData) == null ? void 0 : o.map(
        (c, _) => /* @__PURE__ */ s.jsx(
          Fp,
          {
            label: c.label,
            value: c.value,
            className: n == null ? void 0 : n.rowClassName
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
    selector: wp,
    actionCreator: bp,
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
    renderer: (t, i, n) => {
      var o;
      return /* @__PURE__ */ s.jsx(p, { className: i.performanceMonitor, children: ((o = t.metricsData) == null ? void 0 : o.map(
        (c, _) => /* @__PURE__ */ s.jsx(
          Dp,
          {
            label: c.label,
            value: c.value,
            unit: c.unit,
            className: n == null ? void 0 : n.metricClassName,
            labelClassName: n == null ? void 0 : n.metricLabelClassName,
            valueClassName: n == null ? void 0 : n.metricValueClassName
          },
          _
        )
      )) || /* @__PURE__ */ s.jsx(p, { children: "No performance data available" }) });
    }
  },
  "error-logger": {
    className: "errorLogger",
    dataKey: "errors",
    selector: kp,
    actionCreator: vp,
    dataProcessor: (t) => ({
      errors: t || []
    }),
    renderer: (t, i, n) => {
      var o;
      return /* @__PURE__ */ s.jsxs(p, { className: i.errorLogger, children: [
        /* @__PURE__ */ s.jsx(
          p,
          {
            style: {
              marginBottom: "8px",
              fontWeight: "bold"
            },
            children: (n == null ? void 0 : n.title) || "Error Log"
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
    dataProcessor: () => ul.environment(),
    renderer: (t, i, n) => /* @__PURE__ */ s.jsxs(p, { className: i.debugPanel, children: [
      /* @__PURE__ */ s.jsx(p, { className: i.panelHeader, children: /* @__PURE__ */ s.jsx("h3", { children: (n == null ? void 0 : n.title) || "Debug Panel" }) }),
      /* @__PURE__ */ s.jsxs(p, { className: i.panelSection, children: [
        /* @__PURE__ */ s.jsx(p, { className: i.sectionTitle, children: (n == null ? void 0 : n.environmentTitle) || "Environment" }),
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
        /* @__PURE__ */ s.jsx(p, { className: i.sectionTitle, children: (n == null ? void 0 : n.appStateTitle) || "Application State" }),
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
    renderer: (t, i, n) => (n == null ? void 0 : n.children) || /* @__PURE__ */ s.jsx(p, { children: "Custom admin component" })
  }
}, Wp = (t, i, n) => {
  const o = Ur();
  Be(() => {
    o(gp({ componentId: t }));
  }, [o, t]);
  const c = Je(() => {
    if (!(!n.actionCreator || !n.dataKey))
      try {
        const _ = ul[n.dataKey](), m = {
          componentId: t,
          [n.dataKey === "time" ? "time" : n.dataKey === "performance" ? "metrics" : "errors"]: _
        };
        o(n.actionCreator(m));
      } catch (_) {
        console.warn(
          `Admin component ${i} data generation failed:`,
          _
        );
      }
  }, [
    o,
    t,
    n.actionCreator,
    n.dataKey,
    i
  ]);
  return Be(() => {
    if (!n.actionCreator || !n.updateInterval || n.updateInterval < 100)
      return;
    c();
    const _ = setInterval(
      c,
      n.updateInterval
    );
    return () => clearInterval(_);
  }, [
    c,
    n.actionCreator,
    n.updateInterval
  ]), { dispatch: o };
}, Up = (t) => t && Fi[`adminZ${t}`] || "", t5 = ({
  children: t,
  kind: i = "custom",
  position: n = "top-left",
  enabled: o = !1,
  className: c = "",
  zIndex: _ = 9999,
  componentId: m,
  ...h
}) => {
  if (!o) return null;
  const f = `admin-${n}`, g = Up(_), b = [
    Fi.adminComponent,
    Fi[f],
    g,
    c
  ].filter(Boolean).join(" "), v = $p[i], C = m || `${i}-default`, w = v && v.selector ? Si(
    (N) => v.selector(N, C)
  ) : null;
  v && v.actionCreator && Wp(
    C,
    i,
    v
  );
  const I = v ? Ci(
    () => v.dataProcessor(w, h),
    [v, w, h.session, h.status]
  ) : null;
  return /* @__PURE__ */ s.jsx(p, { className: b, ...h, children: v ? v.renderer(I, Fi, h) : t });
}, i5 = {
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
}, Ln = {
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
}, n5 = (t) => {
  const i = {
    type: "adsense",
    name: "Google AdSense",
    refreshRate: 3e4,
    maxRetries: 3,
    ...t
  };
  return {
    config: i,
    async loadAd(n, o) {
      try {
        if (typeof window < "u" && window.adsbygoogle) {
          const c = window.adsbygoogle, _ = document.createElement("ins");
          return _.className = "adsbygoogle", _.style.display = "block", _.setAttribute(
            "data-ad-client",
            i.publisherId || ""
          ), _.setAttribute(
            "data-ad-slot",
            i.adUnitId || ""
          ), _.setAttribute("data-ad-format", "auto"), n.appendChild(_), c.push({}), {
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
        const n = document.createElement("script");
        n.async = !0, n.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", n.setAttribute(
          "data-ad-client",
          i.publisherId || ""
        ), document.head.appendChild(n), window.adsbygoogle = window.adsbygoogle || [];
      }
    }
  };
}, a5 = (t) => {
  const i = {
    type: "adsterra",
    name: "Adsterra",
    refreshRate: 6e4,
    maxRetries: 2,
    ...t
  };
  return {
    config: i,
    async loadAd(n, o) {
      try {
        const c = document.createElement("div");
        c.id = `adsterra-${Date.now()}`, n.appendChild(c);
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
    destroyAd(n) {
      n.querySelectorAll(
        '[id^="adsterra-"]'
      ).forEach((c) => c.remove());
    }
  };
}, r5 = (t) => ({
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
      } catch (n) {
        console.error("Metrics reporting error:", n);
      }
  }
}), o5 = (t) => ({
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
      const n = document.createElement("script");
      n.async = !0, n.src = `https://www.googletagmanager.com/gtag/js?id=${t}`, document.head.appendChild(n), window.dataLayer = window.dataLayer || [], window.gtag = function() {
        window.dataLayer.push(arguments);
      }, window.gtag("js", /* @__PURE__ */ new Date()), window.gtag("config", t);
    }
  }
}), s5 = (t) => {
  let i = [], n = null;
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
      t.batchEvents ? (i.push(c), i.length >= (t.batchSize ?? 10) ? o() : n || (n = setTimeout(() => {
        o(), n = null;
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
}, Zp = (t) => Ln[t] || Ln["banner-ad"], l5 = (t, i) => {
  const n = Zp(t);
  return {
    ...n,
    ...i,
    content: {
      ...n.content,
      ...i.content
    }
  };
}, c5 = (t) => Object.keys(Ln).includes(
  t
), d5 = (t, i, n, o) => {
  var c;
  return {
    eventType: t,
    adId: i,
    adKind: n,
    timestamp: Date.now(),
    sessionId: typeof window < "u" && ((c = window.sessionStorage) == null ? void 0 : c.getItem("sessionId")) || void 0,
    metadata: o
  };
}, _5 = {
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
}, u5 = {
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
}, Hp = "_advertisement_jdx53_132", Vp = "_advertisement__slot_jdx53_418", Gp = "_adsbygoogle_jdx53_432", Kp = "_advertisement__loading_jdx53_442", qp = "_advertisement__modal_jdx53_451", Yp = "_advertisement__backdrop_jdx53_474", Jp = "_advertisement__modal_content_jdx53_485", Xp = "_modalAppear_jdx53_1", Qp = "_advertisement__close_jdx53_522", eh = "_advertisement__close_button_jdx53_560", th = "_advertisement__banner_jdx53_589", ih = "_advertisement__native_jdx53_599", nh = "_advertisement__sticky_jdx53_609", ah = "_advertisement__floating_jdx53_617", rh = "_advertisement__toast_jdx53_627", oh = "_advertisement__billboard_jdx53_634", sh = "_advertisement__billboard_overlay_jdx53_641", lh = "_advertisement__default_jdx53_651", ch = "_advertisement__image_jdx53_658", dh = "_advertisement__content_jdx53_673", _h = "_advertisement__title_jdx53_681", uh = "_advertisement__description_jdx53_689", mh = "_advertisement__cta_jdx53_697", ph = "_advertisement__sponsored_jdx53_732", hh = "_advertisement__reward_info_jdx53_746", fh = "_advertisement__reward_actions_jdx53_767", gh = "_advertisement__exit_intent_jdx53_776", yh = "_advertisement__carousel_controls_jdx53_808", bh = "_advertisement__carousel_button_jdx53_816", vh = "_advertisement__carousel_indicators_jdx53_839", xh = "_advertisement__carousel_indicator_jdx53_839", se = {
  advertisement: Hp,
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
  advertisement__slot: Vp,
  adsbygoogle: Gp,
  advertisement__loading: Kp,
  advertisement__modal: qp,
  advertisement__backdrop: Yp,
  advertisement__modal_content: Jp,
  modalAppear: Xp,
  advertisement__close: Qp,
  advertisement__close_button: eh,
  advertisement__banner: th,
  advertisement__native: ih,
  advertisement__sticky: nh,
  advertisement__floating: ah,
  advertisement__toast: rh,
  advertisement__billboard: oh,
  advertisement__billboard_overlay: sh,
  advertisement__default: lh,
  advertisement__image: ch,
  advertisement__content: dh,
  advertisement__title: _h,
  advertisement__description: uh,
  advertisement__cta: mh,
  advertisement__sponsored: ph,
  advertisement__reward_info: hh,
  advertisement__reward_actions: fh,
  advertisement__exit_intent: gh,
  "advertisement--container": "_advertisement--container_jdx53_785",
  "advertisement--layout-stack": "_advertisement--layout-stack_jdx53_789",
  "advertisement--layout-carousel": "_advertisement--layout-carousel_jdx53_793",
  "advertisement--layout-grid": "_advertisement--layout-grid_jdx53_799",
  "advertisement--layout-single": "_advertisement--layout-single_jdx53_804",
  advertisement__carousel_controls: yh,
  advertisement__carousel_button: bh,
  advertisement__carousel_indicators: vh,
  advertisement__carousel_indicator: xh,
  "advertisement__carousel_indicator--active": "_advertisement__carousel_indicator--active_jdx53_854"
}, zi = Ae(
  ({
    count: t = "one",
    kind: i,
    content: n,
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
    showFallbackOnError: N = !0,
    onAdLoad: A,
    onAdClick: O,
    onAdImpression: X,
    onAdClose: W,
    onAdError: U,
    onRewardEarned: T,
    analyticsHooks: j,
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
    var Ti, ji;
    if (t === "many")
      return /* @__PURE__ */ s.jsx(
        wh,
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
          showFallbackOnError: N,
          onAdLoad: A,
          onAdClick: O,
          onAdImpression: X,
          onAdError: U,
          analyticsHooks: j,
          sessionId: J,
          userId: V,
          trackingEnabled: x,
          providers: B,
          primaryProvider: G,
          fallbackProviders: F,
          providerConfig: Q
        }
      );
    if (!i || !n)
      return console.error(
        'Advertisement: kind and content are required for single ads (count="one")'
      ), I ? /* @__PURE__ */ s.jsx(s.Fragment, { children: I }) : null;
    const we = _t(null), re = _t(!1), [Se, he] = Mt("loading"), [$, R] = Mt(le), [Le, Xe] = Mt({
      impressions: 0,
      clicks: 0,
      ctr: 0
    }), qe = Ln[i.replace(
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
    )] || Ln["banner-ad"], Ke = {
      ...qe,
      clickable: qe.clickable ?? !0,
      ...ee
    }, $e = Je(
      (ye, je) => ({
        eventType: ye,
        adId: n.id || "unknown",
        adKind: qe.state,
        timestamp: Date.now(),
        sessionId: J,
        userId: V,
        metadata: je
      }),
      [n.id, qe, J, V]
    ), ve = Je(
      (ye) => {
        var je, at, At, di, P, _e, ze;
        if (x)
          switch (ye.eventType) {
            case "impression":
              (je = j == null ? void 0 : j.onImpression) == null || je.call(j, ye);
              break;
            case "click":
              (at = j == null ? void 0 : j.onClick) == null || at.call(j, ye);
              break;
            case "dismiss":
              (At = j == null ? void 0 : j.onDismiss) == null || At.call(j, ye);
              break;
            case "error":
              (di = j == null ? void 0 : j.onError) == null || di.call(j, ye);
              break;
            case "conversion":
              (P = j == null ? void 0 : j.onConversion) == null || P.call(j, ye);
              break;
            case "view":
              (_e = j == null ? void 0 : j.onView) == null || _e.call(j, ye);
              break;
            case "interaction":
              (ze = j == null ? void 0 : j.onInteraction) == null || ze.call(j, ye);
              break;
          }
      },
      [x, j]
    ), Ue = Je(async () => {
      if (!we.current || B.length === 0)
        return;
      const ye = B.find(
        (je) => je.config.type === G
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
        } catch (je) {
          console.error(
            `Primary provider (${G}) failed:`,
            je
          ), ve(
            $e("error", {
              provider: G,
              error: String(je)
            })
          );
        }
      for (const je of F) {
        const at = B.find(
          (At) => At.config.type === je
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
          } catch (At) {
            console.error(
              `Fallback provider (${je}) failed:`,
              At
            ), ve(
              $e("error", {
                provider: je,
                error: String(At)
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
    Be(() => {
      B.length > 0 ? Ue() : he("ready");
    }, [Ue, B]), Be(() => {
      R(le);
    }, [le]), Be(() => {
      if (ne && ce > 0 && $) {
        const ye = setTimeout(() => {
          R(!1), ve(
            $e("dismiss", {
              reason: "auto-hide"
            })
          ), W == null || W(n.id || "unknown");
        }, ce);
        return () => clearTimeout(ye);
      }
    }, [
      ne,
      ce,
      $,
      n.id,
      W,
      ve,
      $e
    ]), Be(() => {
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
      ), X == null || X(n.id || "unknown"));
    }, [
      $,
      x,
      Se,
      n.id,
      X,
      ve,
      $e,
      i,
      H
    ]);
    const nt = Je(() => {
      n.actionUrl && (Xe((ye) => {
        const je = (ye.clicks || 0) + 1, at = ye.impressions || 0;
        return {
          ...ye,
          clicks: je,
          ctr: at > 0 ? je / at * 100 : 0
        };
      }), ve(
        $e("click", {
          actionUrl: n.actionUrl,
          ctaText: n.ctaText,
          timestamp: Date.now()
        })
      ), O == null || O(
        n.id || "unknown",
        n.actionUrl
      ), Ke.clickable && window.open(
        n.actionUrl,
        "_blank",
        "noopener,noreferrer"
      ));
    }, [
      n.id,
      n.actionUrl,
      n.ctaText,
      Ke.clickable,
      O,
      ve,
      $e
    ]), ut = Je(() => {
      R(!1), ve(
        $e("dismiss", {
          reason: "user-close"
        })
      ), W == null || W(n.id || "unknown");
    }, [
      n.id,
      W,
      ve,
      $e
    ]), Oe = Je(() => {
      var ye, je;
      i === "rewarded-modal" && (ve(
        $e("conversion", {
          rewardType: (ye = n.rewardData) == null ? void 0 : ye.type,
          rewardAmount: (je = n.rewardData) == null ? void 0 : je.amount
        })
      ), T == null || T(
        n.id || "unknown",
        n.rewardData
      ));
    }, [
      i,
      n.id,
      n.rewardData,
      T,
      ve,
      $e
    ]), Tt = [
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
    ].filter(Boolean).join(" "), Lt = {
      ...de,
      maxWidth: Z || ((Ti = Ke.dimensions) == null ? void 0 : Ti.maxWidth),
      maxHeight: z || ((ji = Ke.dimensions) == null ? void 0 : ji.maxHeight),
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
          className: Tt,
          style: Lt,
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
          className: Tt,
          style: Lt,
          children: I
        }
      ) : null;
    const jt = ({
      imageUrl: ye,
      altText: je,
      className: at
    }) => ye ? /* @__PURE__ */ s.jsx(
      "img",
      {
        src: ye,
        alt: je || "Advertisement",
        className: at
      }
    ) : null, li = ({
      title: ye,
      className: je,
      as: at = "h3"
    }) => ye ? Re.createElement(at, { className: je }, ye) : null, Ft = ({
      description: ye,
      className: je
    }) => ye ? /* @__PURE__ */ s.jsx("p", { className: je, children: ye }) : null, ci = ({
      ctaText: ye,
      onClick: je,
      className: at
    }) => ye ? /* @__PURE__ */ s.jsx(
      ke,
      {
        kind: "primary",
        className: at,
        onClick: je,
        children: ye
      }
    ) : null, Ht = ({
      onClick: ye,
      className: je,
      ariaLabel: at = "Close advertisement"
    }) => /* @__PURE__ */ s.jsx(
      ke,
      {
        kind: "ghost",
        className: je,
        onClick: ye,
        "aria-label": at,
        children: "×"
      }
    ), Vt = ({
      title: ye,
      description: je,
      ctaText: at,
      onCTAClick: At,
      titleClass: di,
      descClass: P,
      ctaClass: _e,
      titleAs: ze = "h3"
    }) => /* @__PURE__ */ s.jsxs(p, { className: se.advertisement__content, children: [
      /* @__PURE__ */ s.jsx(
        li,
        {
          title: ye,
          className: di,
          as: ze
        }
      ),
      /* @__PURE__ */ s.jsx(
        Ft,
        {
          description: je,
          className: P
        }
      ),
      /* @__PURE__ */ s.jsx(
        ci,
        {
          ctaText: at,
          onClick: At,
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
                  jt,
                  {
                    imageUrl: n.imageUrl,
                    altText: n.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: n.title,
                    description: n.description,
                    ctaText: n.ctaText,
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
                          onClick: ut,
                          className: se.advertisement__close
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        jt,
                        {
                          imageUrl: n.imageUrl,
                          altText: n.altText,
                          className: se.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        Vt,
                        {
                          title: n.title,
                          description: n.description,
                          ctaText: n.ctaText,
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
                              (ye = n.rewardData) == null ? void 0 : ye.description
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        jt,
                        {
                          imageUrl: n.imageUrl,
                          altText: n.altText,
                          className: se.advertisement__image
                        }
                      ),
                      /* @__PURE__ */ s.jsxs(
                        p,
                        {
                          className: se.advertisement__content,
                          children: [
                            /* @__PURE__ */ s.jsx(
                              li,
                              {
                                title: n.title,
                                className: se.advertisement__title,
                                as: "h3"
                              }
                            ),
                            /* @__PURE__ */ s.jsx(
                              Ft,
                              {
                                description: n.description,
                                className: se.advertisement__description
                              }
                            ),
                            /* @__PURE__ */ s.jsxs(
                              p,
                              {
                                className: se.advertisement__reward_actions,
                                children: [
                                  /* @__PURE__ */ s.jsx(
                                    ci,
                                    {
                                      ctaText: n.ctaText || "Claim Reward",
                                      onClick: () => {
                                        nt(), Oe();
                                      },
                                      className: se.advertisement__cta
                                    }
                                  ),
                                  /* @__PURE__ */ s.jsx(
                                    Ht,
                                    {
                                      onClick: ut,
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
                  jt,
                  {
                    imageUrl: n.imageUrl,
                    altText: n.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: n.title,
                    description: n.description,
                    ctaText: n.ctaText,
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
                    title: n.title,
                    description: n.description,
                    ctaText: n.ctaText,
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
                    onClick: ut,
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
                    onClick: ut,
                    className: se.advertisement__close
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  jt,
                  {
                    imageUrl: n.imageUrl,
                    altText: n.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: n.title,
                    ctaText: n.ctaText,
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
                    title: n.title,
                    description: n.description,
                    ctaText: n.ctaText,
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
                    onClick: ut,
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
                  jt,
                  {
                    imageUrl: n.imageUrl,
                    altText: n.altText,
                    className: se.advertisement__image
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  Vt,
                  {
                    title: n.title,
                    description: n.description,
                    ctaText: n.ctaText,
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
        className: Tt,
        style: Lt,
        "data-ad-id": n.id,
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
zi.displayName = "Advertisements";
const wh = Ae(
  ({
    className: t = "",
    style: i = {},
    allowedAdTypes: n = [
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
    alignItems: N = "flex-start",
    justifyContent: A = "flex-start",
    responsive: O = !0,
    breakpoints: X = {
      mobile: { maxAds: 1, layout: "single" },
      tablet: { maxAds: 2, layout: "stack" },
      desktop: { maxAds: 3, layout: "stack" }
    },
    analyticsHooks: W,
    sessionId: U,
    userId: T,
    trackingEnabled: j = !0,
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
    const [ne, ce] = Mt([]), [E, te] = Mt({}), [x, Z] = Mt({
      totalImpressions: 0,
      totalClicks: 0,
      loadedAds: 0,
      errorRate: 0
    }), [z, H] = Mt(0), q = _t(), [ee, Y] = Mt("desktop"), me = Ci(
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
    Be(() => {
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
        (qe) => n.includes(qe.kind)
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
    }, [m, n, de]);
    Be(() => {
      const $ = Me();
      ce($);
    }, [Me]), Be(() => {
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
      alignItems: N,
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
            zi,
            {
              kind: $.kind,
              content: $.content,
              onAdClick: ae,
              onAdImpression: pe,
              onAdError: Ee,
              analyticsHooks: W,
              sessionId: U,
              userId: T,
              trackingEnabled: j,
              providers: J,
              primaryProvider: V,
              fallbackProviders: B,
              ...$.props
            },
            `${$.content.id}-${z}`
          ) : null;
        case "carousel":
          return ne.map((R) => /* @__PURE__ */ s.jsx(
            zi,
            {
              kind: R.kind,
              content: R.content,
              onAdClick: ae,
              onAdImpression: pe,
              onAdError: Ee,
              analyticsHooks: W,
              sessionId: U,
              userId: T,
              trackingEnabled: j,
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
                zi,
                {
                  kind: R.kind,
                  content: R.content,
                  onAdClick: ae,
                  onAdImpression: pe,
                  onAdError: Ee,
                  analyticsHooks: W,
                  sessionId: U,
                  userId: T,
                  trackingEnabled: j,
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
            zi,
            {
              kind: R.kind,
              content: R.content,
              onAdClick: ae,
              onAdImpression: pe,
              onAdError: Ee,
              analyticsHooks: W,
              sessionId: U,
              userId: T,
              trackingEnabled: j,
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
), kh = {
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
}, Ch = {
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
  static createWithConfig(i, n, o = {}) {
    const c = kh[i], _ = {
      ...c == null ? void 0 : c.defaultProps,
      ...o,
      kind: i,
      content: n
    };
    return /* @__PURE__ */ s.jsx(zi, { ..._ });
  }
  static create(i, n, o = {}) {
    return He.createWithConfig(
      i,
      n,
      o
    );
  }
  static createBatch(i) {
    return i.map(
      ({ kind: n, content: o, props: c }) => He.createWithConfig(
        n,
        o,
        c
      )
    );
  }
  static createConditional(i, n, o, c) {
    return i ? He.createWithConfig(
      n,
      o,
      c
    ) : null;
  }
  static createSmart(i, n, o) {
    return i.isGame ? He.createWithConfig(
      "in-game-billboard",
      n,
      o
    ) : i.isMobile ? He.createWithConfig(
      "interstitial",
      n,
      o
    ) : i.userEngagement === "high" ? He.createWithConfig(
      "rewarded-modal",
      n,
      o
    ) : He.createWithConfig(
      "banner",
      n,
      o
    );
  }
  static createAdSet(i, n, o = {}) {
    const c = Ch[i], _ = {};
    return o.onlyPrimary && c.primary ? (_.primary = He.createWithConfig(
      c.primary,
      n.primary || {},
      o.sharedProps
    ), _) : ([c.primary, ...c.secondary || []].forEach(
      (m, h) => {
        var g;
        const f = h === 0 ? "primary" : `secondary${h}`;
        _[f] = He.createWithConfig(
          m,
          n[f] || {},
          {
            ...o.sharedProps,
            ...((g = o.positions) == null ? void 0 : g[f]) || {}
          }
        );
      }
    ), _);
  }
}
const Sh = {
  batchCreate: (t) => t.map(
    ({ kind: i, content: n, props: o }) => He.createWithConfig(
      i,
      n,
      o
    )
  ),
  conditionalCreate: (t) => t.map(
    ({ condition: i, kind: n, content: o, props: c }) => i ? He.createWithConfig(
      n,
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
  abTestCreate: (t, i, n) => {
    const o = i.reduce(
      (m, h) => m + (h.weight || 1),
      0
    );
    let c = 0;
    if (n)
      c = Math.abs(
        n.split("").reduce((m, h) => m + h.charCodeAt(0), 0)
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
}, zh = {
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
zi.Factory = He;
zi.Utils = Sh;
zi.Presets = zh;
const Nh = "_analytics__container_8rpyb_1", Th = "_analytics__header_8rpyb_15", jh = "_analytics__content_8rpyb_39", Ph = "_analytics__footer_8rpyb_44", Eh = "_analytics__controls_8rpyb_211", Ih = "_analytics__loading_8rpyb_230", Lh = "_spin_8rpyb_1", Ah = "_analytics__error_8rpyb_249", Mh = "_analytics__actions_8rpyb_277", Oh = "_analytics__metric_container_8rpyb_311", Rh = "_analytics__metric_value_8rpyb_324", Bh = "_analytics__header_actions_8rpyb_346", D = {
  analytics__container: Nh,
  analytics__header: Th,
  "analytics__header-title": "_analytics__header-title_8rpyb_23",
  "analytics__header-subtitle": "_analytics__header-subtitle_8rpyb_29",
  "analytics__header-actions": "_analytics__header-actions_8rpyb_34",
  analytics__content: jh,
  analytics__footer: Ph,
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
  analytics__controls: Eh,
  "analytics__controls-group": "_analytics__controls-group_8rpyb_220",
  "analytics__controls-label": "_analytics__controls-label_8rpyb_225",
  analytics__loading: Ih,
  "analytics__loading-spinner": "_analytics__loading-spinner_8rpyb_237",
  spin: Lh,
  "analytics__loading-text": "_analytics__loading-text_8rpyb_245",
  analytics__error: Ah,
  "analytics__error-icon": "_analytics__error-icon_8rpyb_258",
  "analytics__error-message": "_analytics__error-message_8rpyb_263",
  "analytics__error-details": "_analytics__error-details_8rpyb_268",
  "analytics__error-actions": "_analytics__error-actions_8rpyb_273",
  analytics__actions: Mh,
  "analytics__actions-button": "_analytics__actions-button_8rpyb_282",
  "analytics__actions-button--primary": "_analytics__actions-button--primary_8rpyb_299",
  "analytics--dashboard": "_analytics--dashboard_8rpyb_308",
  "analytics--metrics": "_analytics--metrics_8rpyb_311",
  analytics__metric_container: Oh,
  "analytics--performance": "_analytics--performance_8rpyb_315",
  "analytics--realtime": "_analytics--realtime_8rpyb_318",
  "analytics--reports": "_analytics--reports_8rpyb_321",
  "analytics--sm": "_analytics--sm_8rpyb_324",
  analytics__metric_value: Rh,
  "analytics--md": "_analytics--md_8rpyb_330",
  "analytics--lg": "_analytics--lg_8rpyb_333",
  "analytics--loading": "_analytics--loading_8rpyb_339",
  "analytics--error": "_analytics--error_8rpyb_343",
  "analytics--refreshable": "_analytics--refreshable_8rpyb_346",
  analytics__header_actions: Bh,
  "analytics--exportable": "_analytics--exportable_8rpyb_349"
}, Fh = {
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
}, $h = {
  kind: "dashboard",
  variant: "dashboard",
  type: "conversion",
  layout: "grid",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Wh = {
  kind: "chart",
  variant: "chart",
  type: "performance",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !1
}, Uh = {
  kind: "chart",
  variant: "chart",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Zh = {
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
}, Vh = {
  kind: "metric",
  variant: "metric",
  type: "revenue",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Gh = {
  kind: "heatmap",
  variant: "heatmap",
  type: "user-behavior",
  layout: "fullscreen",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Kh = {
  kind: "heatmap",
  variant: "heatmap",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, qh = {
  kind: "funnel",
  variant: "funnel",
  type: "conversion",
  layout: "single",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Yh = {
  kind: "funnel",
  variant: "funnel",
  type: "user-behavior",
  layout: "single",
  timeRange: "week",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Jh = {
  kind: "cohort",
  variant: "cohort",
  type: "engagement",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Xh = {
  kind: "cohort",
  variant: "cohort",
  type: "revenue",
  layout: "single",
  timeRange: "quarter",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, Qh = {
  kind: "report",
  variant: "report",
  type: "performance",
  layout: "list",
  timeRange: "month",
  autoRefresh: !1,
  exportable: !0,
  interactive: !1,
  drilldown: !1
}, ef = {
  kind: "report",
  variant: "report",
  type: "custom",
  layout: "list",
  timeRange: "custom",
  autoRefresh: !1,
  exportable: !0,
  interactive: !0,
  drilldown: !0
}, tf = {
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
}, nf = {
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
}, Mr = {
  "performance-dashboard": Fh,
  "user-behavior-dashboard": Dh,
  "conversion-dashboard": $h,
  "line-chart": Wh,
  "bar-chart": Uh,
  "pie-chart": Zh,
  "kpi-metric": Hh,
  "revenue-metric": Vh,
  "user-heatmap": Gh,
  "conversion-heatmap": Kh,
  "conversion-funnel": qh,
  "user-journey-funnel": Yh,
  "user-cohort": Jh,
  "revenue-cohort": Xh,
  "performance-report": Qh,
  "custom-report": ef,
  "realtime-metrics": tf,
  "realtime-traffic": nf
}, af = [], rf = [], of = [], sf = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6"
], lf = [], ml = Ae(
  ({
    children: t,
    className: i = "",
    style: n = {},
    "aria-label": o,
    // Analytics configuration
    kind: c = "dashboard",
    variant: _ = "dashboard",
    type: m = "chart",
    size: h = "md",
    // Content and data
    title: f,
    subtitle: g,
    data: b = af,
    metrics: v = rf,
    query: C,
    filters: w = of,
    // Configuration
    config: I = {},
    timeRange: N = "day",
    layout: A = "single",
    autoRefresh: O = !1,
    refreshInterval: X = 3e4,
    // States
    loading: W = !1,
    error: U = null,
    empty: T = !1,
    emptyMessage: j = "No data available",
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
    colors: x = sf,
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
    plugins: we = lf,
    ...re
  }, Se) => {
    const he = Ci(() => ({ ...Mr[`${c}-default`] || Mr[c] || {}, ...I }), [c, I]), [$, R] = Mt(b), [Le, Xe] = Mt(w), [qe, Ke] = Mt(!1), [$e, ve] = Mt(null), Ue = _t(null), nt = _t(ce);
    Be(() => {
      nt.current = ce;
    }, [ce]);
    const ut = Je(() => {
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
    ), Tt = Je(
      (P) => {
        te == null || te(P);
      },
      [te]
    );
    Be(() => {
      if (O && X > 0)
        return Ue.current = setInterval(() => {
          var P;
          Ke(!0), (P = nt.current) == null || P.call(nt), setTimeout(() => {
            Ke(!1), ve(/* @__PURE__ */ new Date());
          }, 1e3);
        }, X), () => {
          Ue.current && clearInterval(Ue.current);
        };
    }, [O, X]), Be(() => {
      R(b), ve(/* @__PURE__ */ new Date());
    }, [b]);
    const Lt = (P, _e) => {
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
    }, jt = () => H ? /* @__PURE__ */ s.jsxs(p, { className: D.analytics__header, children: [
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
                onClick: ut,
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
    ] }) : null, li = () => Y ? /* @__PURE__ */ s.jsxs(p, { className: D.analytics__controls, children: [
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
                value: N,
                onChange: (P) => Tt(P.target.value),
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
    ] }) : null, Ft = () => {
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
                  onClick: ut,
                  className: D.analytics__error_retry,
                  children: "Retry"
                }
              )
            }
          )
        ] });
      if (T || !$.length && !v.length)
        return /* @__PURE__ */ s.jsx(p, { className: D.analytics__error, children: /* @__PURE__ */ s.jsx(
          p,
          {
            className: D.analytics__error_message,
            children: j
          }
        ) });
      if (pe)
        return pe($);
      if (t)
        return t;
      switch (c) {
        case "dashboard":
          return ci();
        case "chart":
          return Ht();
        case "metric":
          return Vt();
        case "heatmap":
          return Jt();
        case "funnel":
          return Ti();
        case "cohort":
          return ji();
        case "report":
          return ye();
        case "realtime":
          return je();
        default:
          return Ht();
      }
    }, ci = () => /* @__PURE__ */ s.jsx(
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
                  children: Lt(
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
                children: Lt(P.value, P.format)
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
    ), Ti = () => /* @__PURE__ */ s.jsx(
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
    ), ji = () => /* @__PURE__ */ s.jsx(
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
    ), je = () => /* @__PURE__ */ s.jsxs(
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
                    children: Lt(
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
    )) }), At = () => q ? /* @__PURE__ */ s.jsxs(p, { className: D.analytics__footer, children: [
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
    ] }) : null, di = [
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
        className: di,
        style: n,
        "aria-label": o || `${_} analytics`,
        "data-analytics-kind": c,
        "data-analytics-type": he.type,
        ...re,
        children: [
          jt(),
          li(),
          /* @__PURE__ */ s.jsx(p, { className: D.analytics__content, children: Ft() }),
          At()
        ]
      }
    );
  }
);
ml.displayName = "Analytics";
const pl = Ae(
  ({
    kind: t,
    configuration: i,
    title: n = "Analytics",
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
    ...N
  }, A) => {
    switch (t) {
      case "dashboard":
        return /* @__PURE__ */ s.jsxs(
          p,
          {
            ref: A,
            className: D.dashboardContainer,
            ...N,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.dashboardHeader, children: [
                /* @__PURE__ */ s.jsx("h2", { className: D.title, children: n }),
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
            ...N,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.realtimeHeader, children: [
                /* @__PURE__ */ s.jsx("h3", { className: D.title, children: n }),
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
            ...N,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.reportsHeader, children: [
                /* @__PURE__ */ s.jsx("h3", { className: D.title, children: n }),
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
            ...N,
            children: [
              /* @__PURE__ */ s.jsx(p, { className: D.metricsHeader, children: /* @__PURE__ */ s.jsx("h3", { className: D.title, children: n }) }),
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
            ...N,
            children: [
              /* @__PURE__ */ s.jsxs(p, { className: D.performanceHeader, children: [
                /* @__PURE__ */ s.jsx("h3", { className: D.title, children: n }),
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
        return /* @__PURE__ */ s.jsx(p, { ref: A, ...N, children: /* @__PURE__ */ s.jsxs(p, { className: D.defaultAnalytics, children: [
          /* @__PURE__ */ s.jsx("h3", { children: n }),
          /* @__PURE__ */ s.jsx("p", { children: "Default analytics view" })
        ] }) });
    }
  }
);
pl.displayName = "AnalyticsBodyFactory";
const Ri = Ae(
  ({
    kind: t,
    configuration: i,
    title: n,
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
    const N = i || Mr[t];
    return /* @__PURE__ */ s.jsx(
      ml,
      {
        ref: I,
        className: f,
        variant: m,
        size: h,
        loading: g,
        error: b,
        ...w,
        children: /* @__PURE__ */ s.jsx(
          pl,
          {
            kind: t,
            configuration: N,
            title: n,
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
Ri.displayName = "AnalyticsFactory";
class m5 {
  static create(i) {
    return Re.createElement(Ri, i);
  }
}
const p5 = {
  Dashboard: (t) => /* @__PURE__ */ s.jsx(Ri, { kind: "dashboard", ...t }),
  Realtime: (t) => /* @__PURE__ */ s.jsx(Ri, { kind: "realtime", ...t }),
  Reports: (t) => /* @__PURE__ */ s.jsx(Ri, { kind: "reports", ...t }),
  Metrics: (t) => /* @__PURE__ */ s.jsx(Ri, { kind: "metrics", ...t }),
  Performance: (t) => /* @__PURE__ */ s.jsx(Ri, { kind: "performance", ...t })
}, h5 = Ri, cf = "_baseCard_lw2pi_131", df = "_cardHover_lw2pi_235", _f = "_cardClickable_lw2pi_240", uf = "_friendCardHeader_lw2pi_285", mf = "_friendStatusDot_lw2pi_292", pf = "_friendUsername_lw2pi_336", hf = "_friendCardActions_lw2pi_344", ff = "_notificationHeader_lw2pi_378", gf = "_notificationIcon_lw2pi_385", zt = {
  baseCard: cf,
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
  cardHover: df,
  cardClickable: _f,
  "friend-card": "_friend-card_lw2pi_278",
  friendCardHeader: uf,
  friendStatusDot: mf,
  "status-inmatch": "_status-inmatch_lw2pi_320",
  "status-idle": "_status-idle_lw2pi_324",
  "status-online": "_status-online_lw2pi_328",
  "status-offline": "_status-offline_lw2pi_332",
  friendUsername: pf,
  friendCardActions: hf,
  "game-card": "_game-card_lw2pi_351",
  "profile-card": "_profile-card_lw2pi_355",
  "notification-card": "_notification-card_lw2pi_362",
  "notification-warning": "_notification-warning_lw2pi_365",
  "notification-error": "_notification-error_lw2pi_368",
  "notification-success": "_notification-success_lw2pi_371",
  "notification-info": "_notification-info_lw2pi_374",
  notificationHeader: ff,
  notificationIcon: gf,
  "stats-card": "_stats-card_lw2pi_391",
  "card-title": "_card-title_lw2pi_395",
  "loading-shimmer": "_loading-shimmer_lw2pi_1"
}, hl = {
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
    className: zt["friend-card"]
  },
  game: {
    variant: "elevated",
    size: "medium",
    padding: "medium",
    hover: !0,
    clickable: !0,
    behavior: "clickable",
    className: zt["game-card"]
  },
  profile: {
    variant: "elevated",
    size: "large",
    padding: "large",
    hover: !0,
    behavior: "hoverable",
    className: zt["profile-card"]
  },
  notification: {
    variant: "outlined",
    size: "medium",
    padding: "medium",
    behavior: "static",
    className: zt["notification-card"]
  },
  stats: {
    variant: "filled",
    size: "medium",
    padding: "medium",
    hover: !0,
    behavior: "hoverable",
    className: zt["stats-card"]
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
}, qi = (t, i) => ({
  ...hl[t],
  ...i
}), f5 = {
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
}, g5 = {
  infoCard: () => qi("default", {
    padding: "large",
    hover: !0
  }),
  actionCard: () => qi("elevated", {
    clickable: !0,
    hover: !0
  }),
  contentCard: () => qi("outlined", {
    padding: "large"
  }),
  headerCard: () => qi("filled", {
    padding: "medium",
    size: "large"
  }),
  compactCard: () => qi("default", {
    size: "small",
    padding: "small"
  }),
  interactiveCard: () => qi("elevated", {
    clickable: !0,
    hover: !0,
    behavior: "interactive"
  }),
  displayCard: () => qi("default", {
    behavior: "static",
    padding: "medium"
  })
}, fl = Ae(
  ({
    children: t,
    className: i = "",
    variant: n,
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
    onChallenge: N,
    onMessage: A,
    onRemove: O,
    unreadCount: X = 0,
    notificationType: W = "info",
    statValue: U,
    statLabel: T,
    ...j
  }, J) => {
    const V = g ? hl[g] : null, B = n || (V == null ? void 0 : V.variant) || "default", G = o || (V == null ? void 0 : V.size) || "medium", F = c || (V == null ? void 0 : V.padding) || "medium", Q = _ !== void 0 ? _ : (V == null ? void 0 : V.hover) || !1, le = m !== void 0 ? m : (V == null ? void 0 : V.clickable) || !1, ge = [
      zt.baseCard,
      zt[`card-${B}`],
      zt[`card-${G}`],
      zt[`card-padding-${F}`],
      Q && zt.cardHover,
      le && zt.cardClickable,
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
        /* @__PURE__ */ s.jsxs(p, { className: zt.friendCardHeader, children: [
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: `${zt.friendStatusDot} ${zt[H]}`
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: zt.friendUsername, children: I.username })
        ] }),
        /* @__PURE__ */ s.jsxs(p, { className: zt.friendCardActions, children: [
          N && /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => N(I.id),
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
      T && /* @__PURE__ */ s.jsx(
        p,
        {
          className: "stat-label",
          style: { fontSize: "0.875rem", opacity: 0.8 },
          children: T
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
            className: `${zt.notificationHeader} notification-${W}`,
            children: [
              /* @__PURE__ */ s.jsx("span", { className: zt.notificationIcon, children: x() }),
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
        ...j,
        children: te()
      }
    );
  }
);
fl.displayName = "Card";
const Ut = ({
  kind: t,
  ...i
}) => /* @__PURE__ */ s.jsx(fl, { kind: t, ...i });
Ut.displayName = "CardFactory";
const y5 = {
  // User interface presets
  FriendCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "friend", ...t }),
  ProfileCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "profile", ...t }),
  NotificationCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "notification", ...t }),
  StatsCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "stats", ...t }),
  // Game interface presets
  GameCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "game", ...t }),
  PuzzleCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "puzzle", ...t }),
  RoomCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "room-info", ...t }),
  MatchCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "match-summary", ...t }),
  // Layout presets
  InfoCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "default", hover: !0, ...t }),
  ActionCard: (t) => /* @__PURE__ */ s.jsx(
    Ut,
    {
      kind: "elevated",
      clickable: !0,
      hover: !0,
      ...t
    }
  ),
  ContentCard: (t) => /* @__PURE__ */ s.jsx(Ut, { kind: "outlined", ...t })
}, ni = class ni {
  /**
   * Create a card with specific configuration
   */
  static create(i, n = {}) {
    return /* @__PURE__ */ s.jsx(Ut, { kind: i, ...n });
  }
  /**
   * Create a card with custom configuration override
   */
  static createWithConfig(i, n, o = {}) {
    return /* @__PURE__ */ s.jsx(Ut, { kind: i, ...o });
  }
};
ni.friend = (i) => ni.create("friend", i), ni.game = (i) => ni.create("game", i), ni.profile = (i) => ni.create("profile", i), ni.notification = (i) => ni.create("notification", i), ni.stats = (i) => ni.create("stats", i);
let us = ni;
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
}, yf = (t) => ms[t] || ms["chart-legend"], bf = "_container_dc2yf_140", vf = "_flex_dc2yf_271", xf = "_grid_dc2yf_367", wf = "_relative_dc2yf_749", kf = "_absolute_dc2yf_753", Cf = "_fixed_dc2yf_757", Sf = "_sticky_dc2yf_761", zf = "_truncate_dc2yf_900", Nf = "_border_dc2yf_960", Tf = "_rounded_dc2yf_1000", jf = "_shadow_dc2yf_1032", Pf = "_transition_dc2yf_1104", Ef = "_small_dc2yf_1604", If = "_large_dc2yf_1608", Lf = "_card_dc2yf_1656", Af = "_chart_dc2yf_1781", Mf = "_legend_dc2yf_1862", Of = "_legend__item_dc2yf_1868", Rf = "_active_dc2yf_1895", Bf = "_legend__marker_dc2yf_1900", Ff = "_legend__icon_dc2yf_1909", Df = "_legend__label_dc2yf_1921", $f = "_legend__value_dc2yf_1926", Wf = "_filter_dc2yf_1932", Uf = "_filter__search_dc2yf_1938", Zf = "_filter__select_all_dc2yf_1970", Hf = "_filter__items_dc2yf_2037", Vf = "_filter__item_dc2yf_2037", Gf = "_tooltip_dc2yf_2064", Kf = "_tooltip__arrow_dc2yf_2074", qf = "_tooltip__content_dc2yf_2086", Yf = "_controls_dc2yf_2091", Jf = "_controls__button_dc2yf_2098", Xf = "_controls__select_dc2yf_2164", et = {
  container: bf,
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
  flex: vf,
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
  grid: xf,
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
  relative: wf,
  absolute: kf,
  fixed: Cf,
  sticky: Sf,
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
  truncate: zf,
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
  border: Nf,
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
  rounded: Tf,
  "rounded-md": "_rounded-md_dc2yf_1012",
  "rounded-lg": "_rounded-lg_dc2yf_1016",
  "rounded-xl": "_rounded-xl_dc2yf_1020",
  "rounded-2xl": "_rounded-2xl_dc2yf_1024",
  "rounded-full": "_rounded-full_dc2yf_1028",
  "shadow-none": "_shadow-none_dc2yf_1032",
  "shadow-sm": "_shadow-sm_dc2yf_1036",
  shadow: jf,
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
  transition: Pf,
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
  small: Ef,
  large: If,
  "primary-button": "_primary-button_dc2yf_1613",
  "secondary-button": "_secondary-button_dc2yf_1617",
  card: Lf,
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
  chart: Af,
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
  legend: Mf,
  legend__item: Of,
  active: Rf,
  legend__marker: Bf,
  legend__icon: Ff,
  legend__label: Df,
  legend__value: $f,
  filter: Wf,
  filter__search: Uf,
  filter__select_all: Zf,
  filter__items: Hf,
  filter__item: Vf,
  tooltip: Gf,
  tooltip__arrow: Kf,
  tooltip__content: qf,
  controls: Yf,
  controls__button: Jf,
  controls__select: Xf,
  "loading-shimmer": "_loading-shimmer_dc2yf_1"
}, gl = Ae(
  (t, i) => {
    const {
      kind: n,
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
      multiValue: N,
      allowMultiSelect: A,
      showSelectAll: O,
      searchable: X,
      // Styling
      spacing: W,
      size: U,
      // Callbacks
      onSeriesToggle: T,
      onFilterChange: j,
      onTooltipShow: J,
      onTooltipHide: V,
      ...B
    } = t, G = yf(n), F = {
      ...G,
      variant: h || G.variant,
      position: f || G.position,
      orientation: g || G.orientation,
      showIcons: b !== void 0 ? b : G.showIcons,
      showValues: v !== void 0 ? v : G.showValues,
      interactive: C !== void 0 ? C : G.interactive,
      followCursor: w !== void 0 ? w : G.followCursor,
      showArrow: I !== void 0 ? I : G.showArrow,
      multiValue: N !== void 0 ? N : G.multiValue,
      allowMultiSelect: A !== void 0 ? A : G.allowMultiSelect,
      showSelectAll: O !== void 0 ? O : G.showSelectAll,
      searchable: X !== void 0 ? X : G.searchable,
      spacing: W || G.spacing,
      size: U || G.size
    }, Q = un(), le = ai(
      Um(o)
    ), ge = ai(
      Zm(o)
    );
    Be(() => {
      const z = m.filter((H) => H.visible).map((H) => H.id);
      return Q(
        Am({
          chartId: o,
          selectedSeries: z,
          isInteractive: F.interactive,
          allowMultiSelect: F.allowMultiSelect
        })
      ), () => {
        Q(Fm(o));
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
        Q(Rm({ chartId: o, seriesId: z }));
        const ee = q ? [...le, z] : le.filter(
          (Y) => Y !== z
        );
        j == null || j(ee);
      } else
        Q(
          Mm({
            chartId: o,
            selectedSeries: [z]
          })
        ), j == null || j([z]);
      T == null || T(z, q);
    }, ne = () => {
      const z = m.every((q) => q.visible);
      m.forEach((q) => q.visible = !z);
      const H = z ? [] : m.map((q) => q.id);
      Q(
        Bm({
          chartId: o,
          allSeriesIds: m.map((q) => q.id)
        })
      ), j == null || j(H);
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
              Om({
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
gl.displayName = "Chart";
const Qf = si(gl), gt = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (n = {}) => {
    const o = { ...i, ...n };
    return Re.createElement(Qf, o);
  };
}, b5 = {
  // Legends
  legend: gt("chart-legend"),
  legendHorizontal: gt("legend-horizontal"),
  legendVertical: gt("legend-vertical"),
  legendGrid: gt("legend-grid"),
  legendMinimal: gt("legend-minimal"),
  // Tooltips
  tooltip: gt("chart-tooltip"),
  tooltipSimple: gt("tooltip-simple"),
  tooltipDetailed: gt("tooltip-detailed"),
  tooltipCustom: gt("tooltip-custom"),
  // Filters
  filterControls: gt("chart-filter-controls"),
  filterCheckboxes: gt("filter-checkboxes"),
  filterButtons: gt("filter-buttons"),
  filterDropdown: gt("filter-dropdown"),
  filterMultiSelect: gt("filter-multi-select"),
  // Controls
  chartControls: gt("chart-controls"),
  zoomControls: gt("zoom-controls"),
  timeRangeSelector: gt("time-range-selector"),
  dataSeriesToggle: gt("data-series-toggle"),
  // Advanced Presets
  dashboardLegend: gt({
    kind: "legend-grid",
    variant: "modern",
    showIcons: !0,
    showValues: !0,
    interactive: !0
  }),
  gameStatsFilter: gt({
    kind: "filter-buttons",
    variant: "game-style",
    allowMultiSelect: !0,
    spacing: "tight"
  })
}, eg = {
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
}, tg = "_provider_zj78e_131", Di = {
  provider: tg
}, yl = {
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
}, ig = ha(null), bl = ha(null), ng = ha(null), vl = Ae(
  ({
    kind: t,
    children: i,
    session: n,
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
    const w = yl[t];
    if (!w)
      return console.warn(`Unknown provider kind: ${t}`), /* @__PURE__ */ s.jsx(s.Fragment, { children: i });
    switch ({ ...w, ...g }, t) {
      case "socket-provider":
        return /* @__PURE__ */ s.jsx(
          ag,
          {
            session: n,
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
          rg,
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
          og,
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
          sg,
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
), ag = Ae(
  ({
    session: t,
    autoConnect: i,
    url: n,
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
    return /* @__PURE__ */ s.jsx(ig.Provider, { value: h, children: /* @__PURE__ */ s.jsx(
      p,
      {
        ref: m,
        className: `${Di.provider} ${Di["provider-socket"]} ${c || ""}`,
        ..._,
        children: o
      }
    ) });
  }
), rg = Ae(
  ({ initialSettings: t, children: i, className: n, ...o }, c) => {
    const _ = {
      settings: t || {},
      setSettings: () => {
      },
      updateSetting: () => {
      }
    };
    return /* @__PURE__ */ s.jsx(ng.Provider, { value: _, children: /* @__PURE__ */ s.jsx(
      p,
      {
        ref: c,
        className: `${Di.provider} ${Di["provider-settings"]} ${n || ""}`,
        ...o,
        children: i
      }
    ) });
  }
), og = Ae(
  ({
    initialTheme: t,
    initialPalette: i,
    children: n,
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
    return /* @__PURE__ */ s.jsx(bl.Provider, { value: m, children: /* @__PURE__ */ s.jsx(
      p,
      {
        ref: _,
        className: `${Di.provider} ${Di["provider-theme"]} ${o || ""}`,
        ...c,
        children: n
      }
    ) });
  }
), sg = Ae(
  ({ onAchievement: t, children: i, className: n, ...o }, c) => /* @__PURE__ */ s.jsx(
    p,
    {
      ref: c,
      className: `${Di.provider} ${Di["provider-listener"]} ${n || ""}`,
      ...o,
      children: i
    }
  )
);
vl.displayName = "Providers";
const lg = Ae(
  ({
    kind: t,
    children: i,
    session: n,
    autoConnect: o,
    url: c,
    initialSettings: _,
    className: m = "",
    configuration: h,
    ...f
  }, g) => {
    const b = yl[t];
    if (!b)
      return console.warn(`Unknown provider kind: ${t}`), null;
    const v = { ...b, ...h }, C = o ?? v.autoConnect, w = c ?? v.url, I = _ ?? v.initialSettings;
    return /* @__PURE__ */ s.jsx(
      vl,
      {
        ref: g,
        kind: t,
        session: n,
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
lg.displayName = "ProviderFactory";
const cg = "_Checkbox_1mr1j_132", dg = "_disabled_1mr1j_158", _g = "_animated_1mr1j_163", ug = "_checkboxInput_1mr1j_167", mg = "_small_1mr1j_418", pg = "_large_1mr1j_422", hg = "_checkboxLabel_1mr1j_488", fg = "_errorText_1mr1j_500", gg = "_helperText_1mr1j_509", yg = "_error_1mr1j_500", bg = "_success_1mr1j_522", vg = "_warning_1mr1j_525", xg = "_fullWidth_1mr1j_529", wg = "_rounded_1mr1j_561", kg = "_shadow_1mr1j_565", Cg = "_bordered_1mr1j_572", Ct = {
  Checkbox: cg,
  disabled: dg,
  animated: _g,
  checkboxInput: ug,
  "checkbox-default": "_checkbox-default_1mr1j_225",
  "checkbox-toggle": "_checkbox-toggle_1mr1j_229",
  "checkbox-switch": "_checkbox-switch_1mr1j_286",
  "dark-mode-toggle": "_dark-mode-toggle_1mr1j_343",
  small: mg,
  large: pg,
  "size-small": "_size-small_1mr1j_443",
  "size-large": "_size-large_1mr1j_463",
  checkboxLabel: hg,
  errorText: fg,
  helperText: gg,
  error: yg,
  success: bg,
  warning: vg,
  fullWidth: xg,
  "variant-success": "_variant-success_1mr1j_537",
  "variant-warning": "_variant-warning_1mr1j_545",
  "variant-danger": "_variant-danger_1mr1j_553",
  rounded: wg,
  shadow: kg,
  bordered: Cg,
  "loading-shimmer": "_loading-shimmer_1mr1j_1"
}, wa = Ae(
  ({
    kind: t = "checkbox",
    // Default to 'checkbox' for backward compatibility
    configuration: i,
    label: n,
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
    ...N
  }, A) => {
    const O = {
      ...eg[t],
      ...i
    }, X = id(
      bl
    );
    let W = C, U = w;
    t === "dark-mode-toggle" && b && X && "darkMode" in X && (W = X.darkMode, U = () => X.setDarkMode(
      !X.darkMode
    ));
    const T = o || O.labelPosition, j = c || O.size, J = _ || O.variant, V = [
      Ct.Checkbox,
      Ct[O.className],
      Ct[`size-${j}`],
      J !== "default" ? Ct[`variant-${J}`] : "",
      m || O.behavior.animated ? Ct.animated : "",
      O.styling.rounded ? Ct.rounded : "",
      O.styling.shadow ? Ct.shadow : "",
      O.styling.bordered ? Ct.bordered : "",
      I ? Ct.disabled : "",
      g ? Ct.fullWidth : "",
      v
    ].filter(Boolean).join(" "), B = [Ct.checkboxInput].filter(Boolean).join(" "), G = () => O.icon ? W ? O.icon.checked : O.icon.unchecked : null;
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
            ...N
          }
        ),
        h && /* @__PURE__ */ s.jsx(p, { className: Ct.errorText, children: h }),
        f && /* @__PURE__ */ s.jsx(p, { className: Ct.helperText, children: f })
      ] });
    const F = n && T !== "none" ? /* @__PURE__ */ s.jsx(
      "span",
      {
        className: `${Ct.checkboxLabel} ${I ? Ct.disabled : ""}`,
        children: n
      }
    ) : null;
    return /* @__PURE__ */ s.jsxs(
      p,
      {
        className: g ? Ct.fullWidth : "",
        children: [
          /* @__PURE__ */ s.jsxs("label", { className: V, children: [
            T === "left" && F,
            /* @__PURE__ */ s.jsx(
              "input",
              {
                ref: A,
                type: "checkbox",
                className: B,
                checked: W,
                onChange: U,
                disabled: I,
                ...N
              }
            ),
            T === "right" && F
          ] }),
          h && /* @__PURE__ */ s.jsx(p, { className: Ct.errorText, children: h }),
          f && /* @__PURE__ */ s.jsx(p, { className: Ct.helperText, children: f })
        ]
      }
    );
  }
);
wa.displayName = "Checkbox";
class hi {
  /**
   * Create any checkbox with required props and optional overrides
   */
  static create(i, n = {}) {
    return /* @__PURE__ */ s.jsx(wa, { kind: i, ...n });
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
const Sg = Ae(({ kind: t, ...i }, n) => /* @__PURE__ */ s.jsx(wa, { ref: n, kind: t, ...i }));
Sg.displayName = "CheckboxFactory";
const v5 = {
  // Basic presets
  basic: (t, i = {}) => hi.checkbox({ label: t, ...i }),
  required: (t, i = {}) => hi.checkbox({
    label: `${t} *`,
    ...i
  }),
  // Toggle presets
  toggleSuccess: (t, i = {}) => hi.toggle({
    label: t,
    variant: "success",
    ...i
  }),
  toggleWarning: (t, i = {}) => hi.toggle({
    label: t,
    variant: "warning",
    ...i
  }),
  toggleDanger: (t, i = {}) => hi.toggle({
    label: t,
    variant: "danger",
    ...i
  }),
  // Switch presets
  switchLarge: (t, i = {}) => hi.switch({
    label: t,
    size: "large",
    ...i
  }),
  switchSmall: (t, i = {}) => hi.switch({
    label: t,
    size: "small",
    ...i
  }),
  // Special presets
  darkMode: (t = {}) => hi.darkModeToggle(t),
  termsAndConditions: (t = {}) => hi.checkbox({
    label: "I agree to the Terms and Conditions",
    ...t
  }),
  newsletter: (t = {}) => hi.checkbox({
    label: "Subscribe to newsletter",
    ...t
  })
}, zg = Ae((t, i) => Re.createElement(wa, {
  ref: i,
  kind: "dark-mode-toggle",
  darkModeContext: !0,
  ...t
}));
zg.displayName = "DarkModeToggle";
const Zr = {
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
}, x5 = {
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
}, w5 = {
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
}, Ng = (t, i) => {
  const n = Zr[t];
  if (!n)
    throw new Error(`Unknown form field kind: ${t}`);
  return {
    ...n,
    ...i,
    validation: {
      ...n.validation,
      ...i.validation
    }
  };
}, k5 = (t, i) => {
  const { validation: n } = i;
  if (!n) return null;
  if (n.required && (!t || typeof t == "string" && t.trim() === ""))
    return "This field is required";
  if (typeof t == "string") {
    if (n.minLength && t.length < n.minLength)
      return `Minimum length is ${n.minLength} characters`;
    if (n.maxLength && t.length > n.maxLength)
      return `Maximum length is ${n.maxLength} characters`;
    if (n.pattern && !new RegExp(n.pattern).test(t))
      return "Invalid format";
  }
  if (typeof t == "number") {
    if (n.min !== void 0 && t < n.min)
      return `Minimum value is ${n.min}`;
    if (n.max !== void 0 && t > n.max)
      return `Maximum value is ${n.max}`;
  }
  return n.custom ? n.custom(t) : null;
}, Tg = "_fieldWrapper_c5ny5_131", jg = "_fullWidth_c5ny5_146", Pg = "_hasError_c5ny5_151", Eg = "_fieldContainer_c5ny5_151", Ig = "_label_c5ny5_165", Lg = "_required_c5ny5_175", Ag = "_errorText_c5ny5_278", Mg = "_helperText_c5ny5_286", Li = {
  fieldWrapper: Tg,
  fullWidth: jg,
  hasError: Pg,
  fieldContainer: Eg,
  label: Ig,
  required: Lg,
  errorText: Ag,
  helperText: Mg
}, xl = Ae(
  ({
    kind: t,
    configuration: i,
    value: n,
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
      const N = I.target;
      let A;
      switch (t) {
        case "checkbox":
        case "switch":
          A = N.checked;
          break;
        case "range":
          A = parseInt(N.value, 10);
          break;
        case "select":
          A = N.value;
          break;
        default:
          A = N.value;
      }
      o == null || o(A, I);
    }, w = {
      ref: v,
      value: n ?? "",
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
              checked: n || !1,
              value: void 0
            }
          ),
          (i == null ? void 0 : i.label) && /* @__PURE__ */ s.jsx("label", { children: i.label })
        ] });
      case "radio":
        const N = (i == null ? void 0 : i.options) || [];
        return /* @__PURE__ */ s.jsx(p, { className: "radioContainer", children: N.map((O) => /* @__PURE__ */ s.jsxs(
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
                  checked: n === O.value,
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
                  checked: n === O.value,
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
              checked: n || !1,
              value: void 0,
              style: {
                appearance: "none",
                width: "44px",
                height: "24px",
                backgroundColor: n ? "#2563eb" : "#d1d5db",
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
            value: n || 0
          }
        );
    }
  }
);
xl.displayName = "FormsBodyFactory";
const wl = Ae(
  ({
    kind: t,
    label: i,
    error: n,
    helperText: o,
    fullWidth: c,
    className: _,
    configuration: m,
    ...h
  }, f) => {
    const g = m || Zr.text, b = [
      Li.fieldWrapper,
      c && Li.fullWidth,
      n && Li.hasError,
      _
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsxs(p, { ref: f, className: b, children: [
      i && /* @__PURE__ */ s.jsxs("label", { className: Li.label, children: [
        i,
        h.required && /* @__PURE__ */ s.jsx("span", { className: Li.required, children: "*" })
      ] }),
      /* @__PURE__ */ s.jsx(p, { className: Li.fieldContainer, children: /* @__PURE__ */ s.jsx(
        xl,
        {
          ref: f,
          kind: t,
          configuration: g,
          ...h
        }
      ) }),
      n && /* @__PURE__ */ s.jsx("span", { className: Li.errorText, children: n }),
      o && !n && /* @__PURE__ */ s.jsx("span", { className: Li.helperText, children: o })
    ] });
  }
);
wl.displayName = "Forms";
const Ge = Ae(
  ({
    kind: t,
    value: i,
    onChange: n,
    error: o,
    overrideConfig: c,
    ..._
  }, m) => {
    const h = c ? Ng(t, c) : Zr[t], g = {
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
      onChange: n,
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
    return h.component === "input" && (g.type = t.includes("-") ? t.split("-")[0] : t), /* @__PURE__ */ s.jsx(wl, { ...g });
  }
);
Ge.displayName = "FormsFactory";
const C5 = {
  // Quick form creators
  loginForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: n.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "password",
        value: t.password,
        onChange: (o) => i("password", o),
        error: n.password
      },
      "password"
    )
  ],
  signupForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "first-name",
        value: t.firstName,
        onChange: (o) => i("firstName", o),
        error: n.firstName
      },
      "firstName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "last-name",
        value: t.lastName,
        onChange: (o) => i("lastName", o),
        error: n.lastName
      },
      "lastName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: n.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "password",
        value: t.password,
        onChange: (o) => i("password", o),
        error: n.password
      },
      "password"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "terms-checkbox",
        value: t.terms,
        onChange: (o) => i("terms", o),
        error: n.terms
      },
      "terms"
    )
  ],
  contactForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "full-name",
        value: t.name,
        onChange: (o) => i("name", o),
        error: n.name
      },
      "name"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: n.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "phone",
        value: t.phone,
        onChange: (o) => i("phone", o),
        error: n.phone
      },
      "phone"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "message",
        value: t.message,
        onChange: (o) => i("message", o),
        error: n.message
      },
      "message"
    )
  ],
  addressForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "address",
        value: t.address,
        onChange: (o) => i("address", o),
        error: n.address
      },
      "address"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "city",
        value: t.city,
        onChange: (o) => i("city", o),
        error: n.city
      },
      "city"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "state",
        value: t.state,
        onChange: (o) => i("state", o),
        error: n.state
      },
      "state"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "zip",
        value: t.zip,
        onChange: (o) => i("zip", o),
        error: n.zip
      },
      "zip"
    )
  ],
  paymentForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "credit-card",
        value: t.cardNumber,
        onChange: (o) => i("cardNumber", o),
        error: n.cardNumber
      },
      "cardNumber"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "expiry-date",
        value: t.expiry,
        onChange: (o) => i("expiry", o),
        error: n.expiry
      },
      "expiry"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "cvv",
        value: t.cvv,
        onChange: (o) => i("cvv", o),
        error: n.cvv
      },
      "cvv"
    )
  ],
  profileForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "first-name",
        value: t.firstName,
        onChange: (o) => i("firstName", o),
        error: n.firstName
      },
      "firstName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "last-name",
        value: t.lastName,
        onChange: (o) => i("lastName", o),
        error: n.lastName
      },
      "lastName"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "email",
        value: t.email,
        onChange: (o) => i("email", o),
        error: n.email
      },
      "email"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "phone",
        value: t.phone,
        onChange: (o) => i("phone", o),
        error: n.phone
      },
      "phone"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "bio",
        value: t.bio,
        onChange: (o) => i("bio", o),
        error: n.bio
      },
      "bio"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "website",
        value: t.website,
        onChange: (o) => i("website", o),
        error: n.website
      },
      "website"
    )
  ],
  settingsForm: (t, i, n = {}) => [
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "notification-switch",
        value: t.notifications,
        onChange: (o) => i("notifications", o),
        error: n.notifications
      },
      "notifications"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "privacy-switch",
        value: t.privacy,
        onChange: (o) => i("privacy", o),
        error: n.privacy
      },
      "privacy"
    ),
    /* @__PURE__ */ s.jsx(
      Ge,
      {
        kind: "theme-switch",
        value: t.theme,
        onChange: (o) => i("theme", o),
        error: n.theme
      },
      "theme"
    )
  ]
}, Og = {
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
}, ct = Ae(({ kind: t, children: i, ...n }, o) => {
  const c = Og[t];
  if (!c)
    return console.warn(
      `ComponentFactory: Unknown component kind "${t}"`
    ), /* @__PURE__ */ s.jsx(p, { ref: o, ...n, children: i });
  switch (c.type) {
    case "button":
      return /* @__PURE__ */ s.jsx(
        ke,
        {
          ref: o,
          kind: c.component,
          ...n,
          children: i
        }
      );
    case "form-field":
      return /* @__PURE__ */ s.jsx(
        Ge,
        {
          ref: o,
          kind: c.component,
          ...n
        }
      );
    case "layout": {
      const _ = (c.component === "container" || c.component === "grid" || c.component === "flex", "div");
      return /* @__PURE__ */ s.jsx(
        _,
        {
          ref: o,
          className: `${c.className || ""} ${n.className || ""}`.trim(),
          ...n,
          children: i
        }
      );
    }
    case "modal":
      return /* @__PURE__ */ s.jsx(
        p,
        {
          ref: o,
          className: `modal ${c.className || ""} ${n.className || ""}`.trim(),
          ...n,
          children: i
        }
      );
    default:
      return /* @__PURE__ */ s.jsx(p, { ref: o, ...n, children: i });
  }
});
ct.displayName = "ComponentFactory";
const S5 = {
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
  loginForm: (t, i, n = {}) => /* @__PURE__ */ s.jsxs(
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
            error: n.email
          }
        ),
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-password",
            value: t.password,
            onChange: (o) => i("password", o),
            error: n.password
          }
        )
      ]
    }
  ),
  contactForm: (t, i, n = {}) => /* @__PURE__ */ s.jsxs(
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
            error: n.name
          }
        ),
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-email",
            value: t.email,
            onChange: (o) => i("email", o),
            error: n.email
          }
        ),
        /* @__PURE__ */ s.jsx(
          ct,
          {
            kind: "field-textarea",
            label: "Message",
            value: t.message,
            onChange: (o) => i("message", o),
            error: n.message
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
}, z5 = {
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
  textField: (t, i, n, o) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "field-text",
      label: t,
      value: i,
      onChange: n,
      error: o
    }
  ),
  emailField: (t, i, n) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "field-email",
      value: t,
      onChange: i,
      error: n
    }
  ),
  passwordField: (t, i, n) => /* @__PURE__ */ s.jsx(
    ct,
    {
      kind: "field-password",
      value: t,
      onChange: i,
      error: n
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
}, ps = {
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
}, kl = (t) => ps[t] || ps["no-data"], Rg = "_empty_state_1v5ih_132", Bg = "_empty_state__icon_1v5ih_159", Fg = "_empty_state__content_1v5ih_173", Dg = "_empty_state__title_1v5ih_177", $g = "_empty_state__description_1v5ih_184", Wg = "_empty_state__actions_1v5ih_190", Ug = "_empty_state__custom_1v5ih_197", Zg = "_pulse_1v5ih_1", St = {
  empty_state: Rg,
  "empty_state--small": "_empty_state--small_1v5ih_142",
  "empty_state--medium": "_empty_state--medium_1v5ih_146",
  "empty_state--large": "_empty_state--large_1v5ih_150",
  "empty_state--full": "_empty_state--full_1v5ih_154",
  empty_state__icon: Bg,
  empty_state__content: Fg,
  empty_state__title: Dg,
  empty_state__description: $g,
  empty_state__actions: Wg,
  empty_state__custom: Ug,
  "empty_state--error": "_empty_state--error_1v5ih_200",
  "empty_state--warning": "_empty_state--warning_1v5ih_206",
  "empty_state--info": "_empty_state--info_1v5ih_212",
  "empty_state--success": "_empty_state--success_1v5ih_215",
  "empty_state--loading": "_empty_state--loading_1v5ih_218",
  pulse: Zg,
  "empty_state--compact": "_empty_state--compact_1v5ih_221",
  "empty_state--interactive": "_empty_state--interactive_1v5ih_243",
  "loading-shimmer": "_loading-shimmer_1v5ih_1"
}, Cl = Ae((t, i) => {
  const {
    kind: n = "no-data",
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
    actions: N,
    // Features
    showIcon: A,
    showIllustration: O,
    allowCustomContent: X,
    ...W
  } = t, U = kl(n), T = {
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
    actions: N || U.actions,
    showIcon: A !== void 0 ? A : U.showIcon,
    showIllustration: O !== void 0 ? O : U.showIllustration,
    allowCustomContent: X !== void 0 ? X : U.allowCustomContent
  }, j = [
    St.empty_state,
    St[`empty_state--${T.kind}`],
    St[`empty_state--${T.variant}`],
    T.size && St[`empty_state--${T.size}`],
    T.centered && St["empty_state--centered"],
    T.fullHeight && St["empty_state--full_height"],
    c
  ].filter(Boolean).join(" "), J = () => !T.showIcon || !T.icon ? null : /* @__PURE__ */ s.jsx(p, { className: St.empty_state__icon, children: typeof T.icon == "string" ? /* @__PURE__ */ s.jsx("span", { className: St.empty_state__icon_text, children: T.icon }) : T.icon }), V = () => !T.showIllustration || !T.illustration ? null : /* @__PURE__ */ s.jsx(p, { className: St.empty_state__illustration, children: /* @__PURE__ */ s.jsx(
    "img",
    {
      src: T.illustration,
      alt: "",
      className: St.empty_state__illustration_image
    }
  ) }), B = (F, Q = !1) => /* @__PURE__ */ s.jsxs(
    ke,
    {
      kind: F.variant === "text" ? "link" : F.variant || (Q ? "primary" : "secondary"),
      onClick: F.onClick,
      className: `${St.empty_state__action} ${St[`empty_state__action--${F.variant || (Q ? "primary" : "secondary")}`]}`,
      children: [
        F.icon && /* @__PURE__ */ s.jsx("span", { className: St.empty_state__action_icon, children: F.icon }),
        F.label
      ]
    },
    F.label
  ), G = () => {
    const F = [];
    return T.primaryAction && F.push({
      ...T.primaryAction,
      isPrimary: !0
    }), T.secondaryAction && F.push({
      ...T.secondaryAction,
      isPrimary: !1
    }), T.actions && F.push(
      ...T.actions.map((Q) => ({
        ...Q,
        isPrimary: !1
      }))
    ), F.length === 0 ? null : /* @__PURE__ */ s.jsx(p, { className: St.empty_state__actions, children: F.map(
      (Q, le) => B(Q, Q.isPrimary)
    ) });
  };
  return /* @__PURE__ */ s.jsxs(
    p,
    {
      ...W,
      ref: i,
      className: j,
      role: "status",
      "aria-live": "polite",
      children: [
        V(),
        J(),
        /* @__PURE__ */ s.jsxs(p, { className: St.empty_state__content, children: [
          T.title && /* @__PURE__ */ s.jsx("h3", { className: St.empty_state__title, children: T.title }),
          T.description && /* @__PURE__ */ s.jsx("p", { className: St.empty_state__description, children: T.description }),
          T.allowCustomContent && o && /* @__PURE__ */ s.jsx(p, { className: St.empty_state__custom, children: o })
        ] }),
        G()
      ]
    }
  );
});
Cl.displayName = "EmptyState";
const Hg = si(Cl);
class $t {
  static create(i) {
    return Re.forwardRef(
      (n, o) => Re.createElement(Hg, {
        ref: o,
        ...i,
        ...n
      })
    );
  }
  static createFromKind(i) {
    const n = kl(i);
    return this.create(n);
  }
}
const N5 = {
  // Data empty states
  NoData: $t.createFromKind("no-data"),
  NoResults: $t.createFromKind("no-results"),
  NoSearchResults: $t.createFromKind(
    "no-search-results"
  ),
  EmptyTable: $t.createFromKind("empty-table"),
  EmptyList: $t.createFromKind("empty-list"),
  // User/Social empty states
  NoFriends: $t.createFromKind("no-friends"),
  NoMessages: $t.createFromKind("no-messages"),
  NoNotifications: $t.createFromKind(
    "no-notifications"
  ),
  NoActivity: $t.createFromKind("no-activity"),
  EmptyProfile: $t.createFromKind("empty-profile"),
  // Content empty states
  EmptyFolder: $t.createFromKind("empty-folder"),
  EmptyCart: $t.createFromKind("empty-cart"),
  // Error states
  PermissionDenied: $t.createFromKind(
    "permission-denied"
  ),
  NotFound: $t.createFromKind("not-found")
}, Or = {
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
}, T5 = {
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
}, ka = (t) => Or[t] || Or.dropzone, j5 = (t, i) => ({
  ...ka(t),
  ...i
}), P5 = (t) => !!(t.kind && Or[t.kind]), Rr = (t) => {
  if (t === 0) return "0 B";
  const i = 1024, n = ["B", "KB", "MB", "GB"], o = Math.floor(Math.log(t) / Math.log(i));
  return parseFloat((t / Math.pow(i, o)).toFixed(2)) + " " + n[o];
}, E5 = (t) => {
  var i;
  return ((i = t.split(".").pop()) == null ? void 0 : i.toLowerCase()) || "";
}, I5 = (t) => ({
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
})[t] || "application/octet-stream", L5 = (t, i) => {
  if (i.maxSize && t.size > i.maxSize)
    return {
      valid: !1,
      error: `File size exceeds maximum of ${Rr(i.maxSize)}`
    };
  if (i.minSize && t.size < i.minSize)
    return {
      valid: !1,
      error: `File size is below minimum of ${Rr(i.minSize)}`
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
    const n = i.customValidator(t);
    if (typeof n == "string")
      return { valid: !1, error: n };
    if (!n)
      return {
        valid: !1,
        error: "File failed custom validation"
      };
  }
  return { valid: !0 };
}, A5 = () => Math.random().toString(36).substr(2, 9), M5 = (t) => new Promise((i, n) => {
  if (!t.type.startsWith("image/")) {
    n(new Error("File is not an image"));
    return;
  }
  const o = new FileReader();
  o.onload = (c) => {
    var _;
    i((_ = c.target) == null ? void 0 : _.result);
  }, o.onerror = () => {
    n(new Error("Failed to read file"));
  }, o.readAsDataURL(t);
}), Vg = (t, i, n) => {
  var c, _, m, h, f, g;
  const o = ka(t);
  return {
    theme: ((c = o.styling) == null ? void 0 : c.theme) || "light",
    color: ((_ = o.styling) == null ? void 0 : _.color) || "primary",
    borderRadius: ((m = o.styling) == null ? void 0 : m.borderRadius) || "medium",
    shadow: (h = o.styling) == null ? void 0 : h.shadow,
    border: (f = o.styling) == null ? void 0 : f.border,
    animation: (g = o.styling) == null ? void 0 : g.animation
  };
}, Gg = (t, i) => {
  const n = [];
  return i != null && i.maxFiles && t.length > i.maxFiles && n.push(
    `Too many files. Maximum allowed: ${i.maxFiles}`
  ), t.forEach((o, c) => {
    i != null && i.maxFileSize && o.size > i.maxFileSize && n.push(
      `File "${o.name}" is too large. Maximum size: ${Rr(i.maxFileSize)}`
    ), i != null && i.allowedTypes && i.allowedTypes.length > 0 && (i.allowedTypes.includes(o.type) || n.push(
      `File "${o.name}" has unsupported type: ${o.type}`
    ));
  }), {
    isValid: n.length === 0,
    errors: n
  };
}, Kg = "_fileUploadWrapper_oehff_3", qg = "_disabled_oehff_15", Yg = "_content_oehff_24", Jg = "_icon_oehff_35", Xg = "_text_oehff_41", Qg = "_description_oehff_47", ey = "_progressBar_oehff_53", ty = "_progressFill_oehff_62", iy = "_idle_oehff_71", ny = "_dragActive_oehff_75", ay = "_uploading_oehff_85", ry = "_success_oehff_93", oy = "_error_oehff_102", sy = "_preview_oehff_114", ly = "_previewItem_oehff_121", cy = "_previewImage_oehff_130", dy = "_previewFile_oehff_137", _y = "_dropzone_oehff_150", uy = "_multipleFiles_oehff_150", my = "_dragDropZone_oehff_151", py = "_imageUploader_oehff_157", hy = "_galleryUploader_oehff_157", fy = "_avatarUploader_oehff_166", gy = "_profilePicture_oehff_166", yy = "_documentUploader_oehff_186", by = "_fileButton_oehff_192", vy = "_bulkUploader_oehff_228", xy = "_light_oehff_240", wy = "_dark_oehff_245", ky = "_gradient_oehff_250", Cy = "_small_oehff_258", Sy = "_medium_oehff_264", zy = "_large_oehff_270", Ny = "_borderNone_oehff_279", Ty = "_borderSolid_oehff_283", jy = "_borderDashed_oehff_287", Py = "_borderDotted_oehff_291", Ey = "_borderRadiusNone_oehff_298", Iy = "_borderRadiusSmall_oehff_302", Ly = "_borderRadiusMedium_oehff_306", Ay = "_borderRadiusLarge_oehff_310", My = "_borderRadiusRound_oehff_314", Oy = "_shadowNone_oehff_321", Ry = "_shadowSmall_oehff_325", By = "_shadowMedium_oehff_329", Fy = "_shadowLarge_oehff_333", Dy = "_primary_oehff_340", $y = "_secondary_oehff_346", Wy = "_warning_oehff_358", Uy = "_pulse_oehff_373", Zy = "_bounce_oehff_385", Hy = "_subtle_oehff_400", Vy = "_dropzoneActive_oehff_434", Gy = "_dropzoneReject_oehff_440", Ky = "_dropzoneDisabled_oehff_445", qy = "_fileInput_oehff_454", Yy = "_fileInputHidden_oehff_465", Jy = "_uploadContent_oehff_472", Xy = "_uploadIcon_oehff_481", Qy = "_uploadText_oehff_487", eb = "_uploadSubtext_oehff_493", tb = "_uploadButton_oehff_499", ib = "_filePreview_oehff_519", nb = "_fileList_oehff_523", ab = "_fileGrid_oehff_529", rb = "_fileCompact_oehff_535", ob = "_fileItem_oehff_541", sb = "_fileItemGrid_oehff_555", lb = "_fileItemCompact_oehff_561", cb = "_filePreviewImage_oehff_566", db = "_filePreviewImageLarge_oehff_574", _b = "_filePreviewImageSmall_oehff_581", ub = "_fileIcon_oehff_586", mb = "_fileInfo_oehff_599", pb = "_fileName_oehff_604", hb = "_fileSize_oehff_612", fb = "_fileStatus_oehff_617", gb = "_fileActions_oehff_624", yb = "_fileAction_oehff_624", bb = "_fileActionRemove_oehff_645", vb = "_progressText_oehff_669", xb = "_statusPending_oehff_678", wb = "_statusUploading_oehff_682", kb = "_statusSuccess_oehff_686", Cb = "_statusError_oehff_690", Sb = "_statusIcon_oehff_694", zb = "_spinner_oehff_698", Nb = "_spin_oehff_698", Tb = "_avatarPreview_oehff_736", jb = "_avatarPlaceholder_oehff_743", Pb = "_avatarIcon_oehff_752", Eb = "_avatarOverlay_oehff_758", Ib = "_errorMessage_oehff_782", Lb = "_errorIcon_oehff_792", Ab = "_loading_oehff_800", Mb = "_loadingOverlay_oehff_805", Ob = "_loadingSpinner_oehff_818", xt = {
  fileUploadWrapper: Kg,
  disabled: qg,
  content: Yg,
  icon: Jg,
  text: Xg,
  description: Qg,
  progressBar: ey,
  progressFill: ty,
  idle: iy,
  dragActive: ny,
  uploading: ay,
  success: ry,
  error: oy,
  preview: sy,
  previewItem: ly,
  previewImage: cy,
  previewFile: dy,
  dropzone: _y,
  multipleFiles: uy,
  dragDropZone: my,
  imageUploader: py,
  galleryUploader: hy,
  avatarUploader: fy,
  profilePicture: gy,
  documentUploader: yy,
  fileButton: by,
  bulkUploader: vy,
  light: xy,
  dark: wy,
  gradient: ky,
  small: Cy,
  medium: Sy,
  large: zy,
  borderNone: Ny,
  borderSolid: Ty,
  borderDashed: jy,
  borderDotted: Py,
  borderRadiusNone: Ey,
  borderRadiusSmall: Iy,
  borderRadiusMedium: Ly,
  borderRadiusLarge: Ay,
  borderRadiusRound: My,
  shadowNone: Oy,
  shadowSmall: Ry,
  shadowMedium: By,
  shadowLarge: Fy,
  primary: Dy,
  secondary: $y,
  warning: Wy,
  pulse: Uy,
  bounce: Zy,
  subtle: Hy,
  dropzoneActive: Vy,
  dropzoneReject: Gy,
  dropzoneDisabled: Ky,
  fileInput: qy,
  fileInputHidden: Yy,
  uploadContent: Jy,
  uploadIcon: Xy,
  uploadText: Qy,
  uploadSubtext: eb,
  uploadButton: tb,
  filePreview: ib,
  fileList: nb,
  fileGrid: ab,
  fileCompact: rb,
  fileItem: ob,
  fileItemGrid: sb,
  fileItemCompact: lb,
  filePreviewImage: cb,
  filePreviewImageLarge: db,
  filePreviewImageSmall: _b,
  fileIcon: ub,
  fileInfo: mb,
  fileName: pb,
  fileSize: hb,
  fileStatus: fb,
  fileActions: gb,
  fileAction: yb,
  fileActionRemove: bb,
  progressText: vb,
  statusPending: xb,
  statusUploading: wb,
  statusSuccess: kb,
  statusError: Cb,
  statusIcon: Sb,
  spinner: zb,
  spin: Nb,
  avatarPreview: Tb,
  avatarPlaceholder: jb,
  avatarIcon: Pb,
  avatarOverlay: Eb,
  errorMessage: Ib,
  errorIcon: Lb,
  loading: Ab,
  loadingOverlay: Mb,
  loadingSpinner: Ob
}, Sl = Ae((t, i) => {
  var ae, pe, we, re, Se, he, $;
  const {
    kind: n,
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
    onUploadProgress: N,
    onUploadComplete: A,
    onUploadError: O,
    children: X,
    placeholder: W,
    dragActiveText: U,
    errorText: T,
    successText: j,
    showPreview: J = !1,
    allowedTypes: V,
    ...B
  } = t, G = ka(n), F = Vg(
    n
  ), Q = Ur(), le = o || `file-upload-${n}-${Date.now()}`;
  Be(() => (Q(ip(le)), () => {
    Q(ap(le));
  }), [Q, le]);
  const ge = Si(
    (R) => rp(le)(R)
  ), ie = Si(
    (R) => op(le)(R)
  ), ne = Si(
    (R) => lp(le)(R)
  ), ce = Si(
    (R) => sp(le)(R)
  ), E = _t(null), te = b || ((pe = (ae = G.validation) == null ? void 0 : ae.allowedTypes) == null ? void 0 : pe.join(",")) || G.accept, x = g !== void 0 ? g : G.multiple, Z = v || ((we = G.validation) == null ? void 0 : we.maxFiles), z = C || ((re = G.validation) == null ? void 0 : re.maxFileSize), H = Je(
    (R) => {
      var qe;
      const Le = Array.from(R), Xe = Gg(Le, {
        maxFiles: Z,
        maxFileSize: z,
        allowedTypes: V || ((qe = G.validation) == null ? void 0 : qe.allowedTypes)
      });
      if (!Xe.isValid) {
        Q(
          os({
            componentId: le,
            errors: Xe.errors
          })
        ), O == null || O(Xe.errors.join(", "));
        return;
      }
      if (Q(
        os({
          componentId: le,
          errors: []
        })
      ), Q(
        np({
          componentId: le,
          files: Le
          // Use File[] directly for UI state
        })
      ), w == null || w(Le), N) {
        Q(
          rs({
            componentId: le,
            progress: 0
          })
        );
        const Ke = setInterval(() => {
          Q(
            rs({
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
      N,
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
        kr({
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
        kr({
          componentId: le,
          dragActive: !0
        })
      );
    },
    [f, m, Q, le]
  ), me = Je(
    (R) => {
      R.preventDefault(), Q(
        kr({
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
    xt.fileUploadWrapper,
    xt[n],
    xt[c],
    xt[_],
    F.theme && xt[F.theme],
    ge && xt.dragActive,
    m && xt[m],
    f && xt.disabled,
    ce.length > 0 && xt.error,
    h
  ].filter(Boolean).join(" "), Ee = () => {
    var R;
    return m === "uploading" ? `Uploading... ${ie}%` : m === "success" ? j || "Upload successful!" : m === "error" || ce.length > 0 ? T || ce[0] || "Upload failed" : ge ? U || "Drop files here" : ne.length > 0 ? `${ne.length} file${ne.length > 1 ? "s" : ""} selected` : W || ((R = G.display) == null ? void 0 : R.placeholder) || "Choose files or drag and drop";
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
        X || /* @__PURE__ */ s.jsxs(p, { className: xt.content, children: [
          ((he = G.display) == null ? void 0 : he.icon) && /* @__PURE__ */ s.jsx(p, { className: xt.icon, children: G.display.icon }),
          /* @__PURE__ */ s.jsx(p, { className: xt.text, children: Ee() }),
          (($ = G.display) == null ? void 0 : $.description) && /* @__PURE__ */ s.jsx(p, { className: xt.description, children: G.display.description }),
          m === "uploading" && /* @__PURE__ */ s.jsx(p, { className: xt.progressBar, children: /* @__PURE__ */ s.jsx(
            p,
            {
              className: xt.progressFill,
              style: { width: `${ie}%` }
            }
          ) })
        ] }),
        J && ne.length > 0 && /* @__PURE__ */ s.jsx(p, { className: xt.preview, children: ne.map(
          (R, Le) => /* @__PURE__ */ s.jsx(
            p,
            {
              className: xt.previewItem,
              children: R.type.startsWith("image/") ? /* @__PURE__ */ s.jsx(
                "img",
                {
                  src: URL.createObjectURL(R),
                  alt: R.name,
                  className: xt.previewImage
                }
              ) : /* @__PURE__ */ s.jsx(p, { className: xt.previewFile, children: R.name })
            },
            Le
          )
        ) })
      ]
    }
  );
});
Sl.displayName = "FileUpload";
const Rb = si(Sl);
class fi {
  static create(i) {
    return Re.forwardRef(
      (n, o) => Re.createElement(Rb, {
        ref: o,
        ...i,
        ...n
      })
    );
  }
  static createFromKind(i) {
    const n = ka(i);
    return this.create(n);
  }
}
const O5 = {
  // Basic upload types
  Dropzone: fi.createFromKind("dropzone"),
  FileButton: fi.createFromKind("file-button"),
  DragDropZone: fi.createFromKind(
    "drag-drop-zone"
  ),
  MultipleFiles: fi.createFromKind(
    "multiple-files"
  ),
  BulkUploader: fi.createFromKind("bulk-uploader"),
  // Image upload types
  ImageUploader: fi.createFromKind(
    "image-uploader"
  ),
  AvatarUploader: fi.createFromKind(
    "avatar-uploader"
  ),
  GalleryUploader: fi.createFromKind(
    "gallery-uploader"
  ),
  ProfilePicture: fi.createFromKind(
    "profile-picture"
  ),
  // Document upload types
  DocumentUploader: fi.createFromKind(
    "document-uploader"
  )
}, Bb = "_header_1s5ph_131", Fb = "_headerInner_1s5ph_152", Db = "_headerChildren_1s5ph_160", $b = "_borderBottom_1s5ph_225", Wb = "_sticky_1s5ph_229", Ub = "_collapsible_1s5ph_236", Zb = "_collapsed_1s5ph_240", Hb = "_titleContent_1s5ph_240", Vb = "_tabs_1s5ph_241", Gb = "_responsive_1s5ph_247", Kb = "_rightSection_1s5ph_254", qb = "_content_1s5ph_259", Yb = "_contentCentered_1s5ph_268", Jb = "_leftSection_1s5ph_273", Xb = "_titleSection_1s5ph_289", Qb = "_titleIcon_1s5ph_299", ev = "_title_1s5ph_240", tv = "_subtitle_1s5ph_360", iv = "_actions_1s5ph_374", nv = "_actionButton_1s5ph_390", av = "_collapseButton_1s5ph_394", rv = "_tab_1s5ph_241", ov = "_tabActive_1s5ph_485", sv = "_tabIcon_1s5ph_496", lv = "_tabLabel_1s5ph_502", cv = "_tabBadge_1s5ph_508", dv = "_browseHeader_1s5ph_528", _v = "_browseTabbedHeader_1s5ph_528", uv = "_dashboardHeader_1s5ph_539", mv = "_dashboardSimpleHeader_1s5ph_549", pv = "_modalHeader_1s5ph_553", hv = "_modalCloseOnlyHeader_1s5ph_563", fv = "_pageHeader_1s5ph_568", gv = "_pageWithNavHeader_1s5ph_572", yv = "_sidebarHeader_1s5ph_585", bv = "_navigationHeader_1s5ph_595", vv = "_simpleHeader_1s5ph_609", xv = "_simpleCenteredHeader_1s5ph_609", wv = "_gameHeader_1s5ph_617", kv = "_settingsHeader_1s5ph_621", Cv = "_profileHeader_1s5ph_630", be = {
  header: Bb,
  headerInner: Fb,
  headerChildren: Db,
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
  borderBottom: $b,
  sticky: Wb,
  collapsible: Ub,
  collapsed: Zb,
  titleContent: Hb,
  tabs: Vb,
  responsive: Gb,
  rightSection: Kb,
  content: qb,
  contentCentered: Yb,
  leftSection: Jb,
  titleSection: Xb,
  titleIcon: Qb,
  title: ev,
  "title-small": "_title-small_1s5ph_324",
  "title-medium": "_title-medium_1s5ph_330",
  "title-large": "_title-large_1s5ph_336",
  "title-xlarge": "_title-xlarge_1s5ph_342",
  "title-normal": "_title-normal_1s5ph_348",
  "title-bold": "_title-bold_1s5ph_356",
  subtitle: tv,
  actions: iv,
  "actions-left": "_actions-left_1s5ph_382",
  "actions-right": "_actions-right_1s5ph_386",
  actionButton: nv,
  collapseButton: av,
  "tabs-below-title": "_tabs-below-title_1s5ph_414",
  "tabs-beside-title": "_tabs-beside-title_1s5ph_419",
  "tabs-separate-row": "_tabs-separate-row_1s5ph_423",
  "tabs-align-left": "_tabs-align-left_1s5ph_430",
  "tabs-align-center": "_tabs-align-center_1s5ph_434",
  "tabs-align-right": "_tabs-align-right_1s5ph_438",
  tab: rv,
  tabActive: ov,
  tabIcon: sv,
  tabLabel: lv,
  tabBadge: cv,
  browseHeader: dv,
  browseTabbedHeader: _v,
  dashboardHeader: uv,
  dashboardSimpleHeader: mv,
  modalHeader: pv,
  modalCloseOnlyHeader: hv,
  pageHeader: fv,
  pageWithNavHeader: gv,
  sidebarHeader: yv,
  navigationHeader: bv,
  simpleHeader: vv,
  simpleCenteredHeader: xv,
  gameHeader: wv,
  settingsHeader: kv,
  profileHeader: Cv,
  "loading-shimmer": "_loading-shimmer_1s5ph_1"
}, Hr = {
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
}, R5 = {
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
}, B5 = {
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
  BROWSE_WITH_TABS: (t, i, n, o, c) => ({
    kind: "browse-tabbed",
    title: t,
    tabs: i,
    currentTab: n,
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
function F5(t, i = {}) {
  return {
    ...Hr[t],
    ...i
  };
}
function D5(t, i) {
  return [...t, ...i];
}
const Vr = Ae(
  ({
    kind: t,
    title: i,
    subtitle: n,
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
    borderBottom: N,
    background: A,
    customBackgroundColor: O,
    className: X = "",
    overrideConfig: W = {},
    customClassName: U = "",
    ariaLabel: T,
    role: j = "banner",
    ...J
  }, V) => {
    const B = {
      ...Hr[t],
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
      N !== void 0 ? N ? be.borderBottom : "" : B.borderBottom ? be.borderBottom : "",
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
    ), le = () => !B.showTitle && !i && !n ? null : /* @__PURE__ */ s.jsxs(p, { className: be.titleSection, children: [
      o && /* @__PURE__ */ s.jsx("span", { className: be.titleIcon, children: o }),
      /* @__PURE__ */ s.jsxs(p, { className: be.titleContent, children: [
        i && /* @__PURE__ */ s.jsx(
          "h1",
          {
            className: `${be.title} ${be[`title-${B.titleSize}`]} ${be[`title-${B.titleWeight}`]}`,
            children: i
          }
        ),
        n && /* @__PURE__ */ s.jsx("p", { className: be.subtitle, children: n })
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
        role: j,
        "aria-label": T || i,
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
Vr.displayName = "Header";
class pt {
  /**
   * Create a header with a specific kind and minimal props
   */
  static create(i, n = {}) {
    return Re.createElement(Vr, {
      kind: i,
      ...n
    });
  }
  /**
   * Create multiple headers from a group configuration
   */
  static createGroup(i, n = {}) {
    return Object.fromEntries(
      Object.entries(i).map(
        ([o, { kind: c, props: _ = {} }]) => [
          o,
          pt.create(c, {
            ...n,
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
    return Hr[i];
  }
  /**
   * Create a header with custom configuration overrides
   */
  static createWithOverrides(i, n, o = {}) {
    return pt.create(i, {
      ...o,
      overrideConfig: n
    });
  }
  /**
   * Quick header creation methods
   */
  static modal(i, n, o = {}) {
    return pt.create("modal", {
      title: i,
      actions: [{ type: "close", handler: n }],
      ...o
    });
  }
  static browse(i, n, o = {}) {
    return pt.create("browse", {
      title: i,
      actions: [{ type: "back", handler: n }],
      ...o
    });
  }
  static browseWithTabs(i, n, o, c, _, m = {}) {
    return pt.create("browse-tabbed", {
      title: i,
      tabs: n,
      currentTab: o,
      onTabChange: c,
      actions: [{ type: "back", handler: _ }],
      ...m
    });
  }
  static page(i, n = {}) {
    return pt.create("page", {
      title: i,
      ...n
    });
  }
  static dashboard(i, n = [], o = {}) {
    return pt.create("dashboard", {
      title: i,
      rightActions: n,
      ...o
    });
  }
}
const $5 = {
  // Modal headers
  MODAL_WITH_CLOSE: (t, i) => pt.modal(t, i),
  MODAL_CLOSE_ONLY: (t) => pt.create("modal-close-only", {
    actions: [{ type: "close", handler: t }]
  }),
  // Browse headers
  BROWSE_SIMPLE: (t, i) => pt.browse(t, i),
  BROWSE_WITH_TABS: (t, i, n, o, c) => pt.browseWithTabs(
    t,
    i,
    n,
    o,
    c
  ),
  // Page headers
  PAGE_TITLE: (t) => pt.page(t),
  PAGE_WITH_BACK: (t, i) => pt.create("page-with-nav", {
    title: t,
    leftActions: [{ type: "back", handler: i }]
  }),
  // Dashboard headers
  DASHBOARD_BASIC: (t) => pt.dashboard(t),
  DASHBOARD_WITH_MENU: (t, i) => pt.dashboard(t, [
    { type: "menu", handler: i, label: "Menu" }
  ]),
  // Settings headers
  SETTINGS: (t, i) => pt.create("settings-header", {
    title: t,
    leftActions: [{ type: "back", handler: i }]
  }),
  SETTINGS_WITH_TABS: (t, i, n, o, c) => pt.create("settings-header", {
    title: t,
    tabs: i,
    currentTab: n,
    onTabChange: o,
    leftActions: [{ type: "back", handler: c }]
  }),
  // Game headers
  GAME: (t, i = [], n = []) => pt.create("game-header", {
    title: t,
    leftActions: i,
    rightActions: n
  }),
  // Profile headers
  PROFILE: (t, i = []) => pt.create("profile-header", {
    title: t,
    rightActions: i
  })
}, W5 = pt.create, U5 = ({
  title: t,
  tabs: i,
  currentTab: n,
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
    Vr,
    {
      kind: "browse-tabbed",
      title: t,
      tabs: _,
      currentTab: n,
      onTabChange: o,
      actions: m
    }
  );
};
function zl(t, i) {
  const n = _t(i);
  Be(function() {
    i !== n.current && t.attributionControl != null && (n.current != null && t.attributionControl.removeAttribution(n.current), i != null && t.attributionControl.addAttribution(i)), n.current = i;
  }, [
    t,
    i
  ]);
}
const Sv = 1;
function zv(t) {
  return Object.freeze({
    __version: Sv,
    map: t
  });
}
function Nl(t, i) {
  return Object.freeze({
    ...t,
    ...i
  });
}
const Gr = ha(null);
function On() {
  const t = nd(Gr);
  if (t == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return t;
}
function Tl(t) {
  function i(n, o) {
    const { instance: c, context: _ } = t(n).current;
    fa(o, () => c);
    const { children: m } = n;
    return m == null ? null : /* @__PURE__ */ Re.createElement(Gr, {
      value: _
    }, m);
  }
  return /* @__PURE__ */ Ae(i);
}
function Nv(t) {
  function i(n, o) {
    const [c, _] = Mt(!1), { instance: m } = t(n, _).current;
    fa(o, () => m), Be(function() {
      c && m.update();
    }, [
      m,
      c,
      n.children
    ]);
    const h = m._contentNode;
    return h ? /* @__PURE__ */ ad(n.children, h) : null;
  }
  return /* @__PURE__ */ Ae(i);
}
function jl(t) {
  function i(n, o) {
    const { instance: c } = t(n).current;
    return fa(o, () => c), null;
  }
  return /* @__PURE__ */ Ae(i);
}
function Tv(t) {
  return function(n) {
    const o = On(), c = t(n, o), { instance: _ } = c.current, m = _t(n.position), { position: h } = n;
    return Be(function() {
      return _.addTo(o.map), function() {
        _.remove();
      };
    }, [
      o.map,
      _
    ]), Be(function() {
      h != null && h !== m.current && (_.setPosition(h), m.current = h);
    }, [
      _,
      h
    ]), c;
  };
}
function Kr(t, i) {
  const n = _t(void 0);
  Be(function() {
    return i != null && t.instance.on(i), n.current = i, function() {
      n.current != null && t.instance.off(n.current), n.current = null;
    };
  }, [
    t,
    i
  ]);
}
function Ca(t, i) {
  const n = t.pane ?? i.pane;
  return n ? {
    ...t,
    pane: n
  } : t;
}
function jv(t, i) {
  return function(o, c) {
    const _ = On(), m = t(Ca(o, _), _);
    return zl(_.map, o.attribution), Kr(m.current, o.eventHandlers), i(m.current, _, o, c), m;
  };
}
var Br = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function(t, i) {
  (function(n, o) {
    o(i);
  })(rd, function(n) {
    var o = "1.9.4";
    function c(e) {
      var a, r, l, d;
      for (r = 1, l = arguments.length; r < l; r++) {
        d = arguments[r];
        for (a in d)
          e[a] = d[a];
      }
      return e;
    }
    var _ = Object.create || /* @__PURE__ */ function() {
      function e() {
      }
      return function(a) {
        return e.prototype = a, new e();
      };
    }();
    function m(e, a) {
      var r = Array.prototype.slice;
      if (e.bind)
        return e.bind.apply(e, r.call(arguments, 1));
      var l = r.call(arguments, 2);
      return function() {
        return e.apply(a, l.length ? l.concat(r.call(arguments)) : arguments);
      };
    }
    var h = 0;
    function f(e) {
      return "_leaflet_id" in e || (e._leaflet_id = ++h), e._leaflet_id;
    }
    function g(e, a, r) {
      var l, d, u, y;
      return y = function() {
        l = !1, d && (u.apply(r, d), d = !1);
      }, u = function() {
        l ? d = arguments : (e.apply(r, arguments), setTimeout(y, a), l = !0);
      }, u;
    }
    function b(e, a, r) {
      var l = a[1], d = a[0], u = l - d;
      return e === l && r ? e : ((e - d) % u + u) % u + d;
    }
    function v() {
      return !1;
    }
    function C(e, a) {
      if (a === !1)
        return e;
      var r = Math.pow(10, a === void 0 ? 6 : a);
      return Math.round(e * r) / r;
    }
    function w(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }
    function I(e) {
      return w(e).split(/\s+/);
    }
    function N(e, a) {
      Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? _(e.options) : {});
      for (var r in a)
        e.options[r] = a[r];
      return e.options;
    }
    function A(e, a, r) {
      var l = [];
      for (var d in e)
        l.push(encodeURIComponent(r ? d.toUpperCase() : d) + "=" + encodeURIComponent(e[d]));
      return (!a || a.indexOf("?") === -1 ? "?" : "&") + l.join("&");
    }
    var O = /\{ *([\w_ -]+) *\}/g;
    function X(e, a) {
      return e.replace(O, function(r, l) {
        var d = a[l];
        if (d === void 0)
          throw new Error("No value provided for variable " + r);
        return typeof d == "function" && (d = d(a)), d;
      });
    }
    var W = Array.isArray || function(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
    function U(e, a) {
      for (var r = 0; r < e.length; r++)
        if (e[r] === a)
          return r;
      return -1;
    }
    var T = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function j(e) {
      return window["webkit" + e] || window["moz" + e] || window["ms" + e];
    }
    var J = 0;
    function V(e) {
      var a = +/* @__PURE__ */ new Date(), r = Math.max(0, 16 - (a - J));
      return J = a + r, window.setTimeout(e, r);
    }
    var B = window.requestAnimationFrame || j("RequestAnimationFrame") || V, G = window.cancelAnimationFrame || j("CancelAnimationFrame") || j("CancelRequestAnimationFrame") || function(e) {
      window.clearTimeout(e);
    };
    function F(e, a, r) {
      if (r && B === V)
        e.call(a);
      else
        return B.call(window, m(e, a));
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
      setOptions: N,
      getParamString: A,
      template: X,
      isArray: W,
      indexOf: U,
      emptyImageUrl: T,
      requestFn: B,
      cancelFn: G,
      requestAnimFrame: F,
      cancelAnimFrame: Q
    };
    function ge() {
    }
    ge.extend = function(e) {
      var a = function() {
        N(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
      }, r = a.__super__ = this.prototype, l = _(r);
      l.constructor = a, a.prototype = l;
      for (var d in this)
        Object.prototype.hasOwnProperty.call(this, d) && d !== "prototype" && d !== "__super__" && (a[d] = this[d]);
      return e.statics && c(a, e.statics), e.includes && (ie(e.includes), c.apply(null, [l].concat(e.includes))), c(l, e), delete l.statics, delete l.includes, l.options && (l.options = r.options ? _(r.options) : {}, c(l.options, e.options)), l._initHooks = [], l.callInitHooks = function() {
        if (!this._initHooksCalled) {
          r.callInitHooks && r.callInitHooks.call(this), this._initHooksCalled = !0;
          for (var u = 0, y = l._initHooks.length; u < y; u++)
            l._initHooks[u].call(this);
        }
      }, a;
    }, ge.include = function(e) {
      var a = this.prototype.options;
      return c(this.prototype, e), e.options && (this.prototype.options = a, this.mergeOptions(e.options)), this;
    }, ge.mergeOptions = function(e) {
      return c(this.prototype.options, e), this;
    }, ge.addInitHook = function(e) {
      var a = Array.prototype.slice.call(arguments, 1), r = typeof e == "function" ? e : function() {
        this[e].apply(this, a);
      };
      return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(r), this;
    };
    function ie(e) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        e = W(e) ? e : [e];
        for (var a = 0; a < e.length; a++)
          e[a] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
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
      on: function(e, a, r) {
        if (typeof e == "object")
          for (var l in e)
            this._on(l, e[l], a);
        else {
          e = I(e);
          for (var d = 0, u = e.length; d < u; d++)
            this._on(e[d], a, r);
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
      off: function(e, a, r) {
        if (!arguments.length)
          delete this._events;
        else if (typeof e == "object")
          for (var l in e)
            this._off(l, e[l], a);
        else {
          e = I(e);
          for (var d = arguments.length === 1, u = 0, y = e.length; u < y; u++)
            d ? this._off(e[u]) : this._off(e[u], a, r);
        }
        return this;
      },
      // attach listener (without syntactic sugar now)
      _on: function(e, a, r, l) {
        if (typeof a != "function") {
          console.warn("wrong listener type: " + typeof a);
          return;
        }
        if (this._listens(e, a, r) === !1) {
          r === this && (r = void 0);
          var d = { fn: a, ctx: r };
          l && (d.once = !0), this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(d);
        }
      },
      _off: function(e, a, r) {
        var l, d, u;
        if (this._events && (l = this._events[e], !!l)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (d = 0, u = l.length; d < u; d++)
                l[d].fn = v;
            delete this._events[e];
            return;
          }
          if (typeof a != "function") {
            console.warn("wrong listener type: " + typeof a);
            return;
          }
          var y = this._listens(e, a, r);
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
      fire: function(e, a, r) {
        if (!this.listens(e, r))
          return this;
        var l = c({}, a, {
          type: e,
          target: this,
          sourceTarget: a && a.sourceTarget || this
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
      listens: function(e, a, r, l) {
        typeof e != "string" && console.warn('"string" type argument expected');
        var d = a;
        typeof a != "function" && (l = !!a, d = void 0, r = void 0);
        var u = this._events && this._events[e];
        if (u && u.length && this._listens(e, d, r) !== !1)
          return !0;
        if (l) {
          for (var y in this._eventParents)
            if (this._eventParents[y].listens(e, a, r, l))
              return !0;
        }
        return !1;
      },
      // returns the index (number) or false
      _listens: function(e, a, r) {
        if (!this._events)
          return !1;
        var l = this._events[e] || [];
        if (!a)
          return !!l.length;
        r === this && (r = void 0);
        for (var d = 0, u = l.length; d < u; d++)
          if (l[d].fn === a && l[d].ctx === r)
            return d;
        return !1;
      },
      // @method once(…): this
      // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
      once: function(e, a, r) {
        if (typeof e == "object")
          for (var l in e)
            this._on(l, e[l], a, !0);
        else {
          e = I(e);
          for (var d = 0, u = e.length; d < u; d++)
            this._on(e[d], a, r, !0);
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
        for (var a in this._eventParents)
          this._eventParents[a].fire(e.type, c({
            layer: e.target,
            propagatedFrom: e.target
          }, e), !0);
      }
    };
    ne.addEventListener = ne.on, ne.removeEventListener = ne.clearAllEventListeners = ne.off, ne.addOneTimeEventListener = ne.once, ne.fireEvent = ne.fire, ne.hasEventListeners = ne.listens;
    var ce = ge.extend(ne);
    function E(e, a, r) {
      this.x = r ? Math.round(e) : e, this.y = r ? Math.round(a) : a;
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
        var a = e.x - this.x, r = e.y - this.y;
        return Math.sqrt(a * a + r * r);
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
    function x(e, a, r) {
      return e instanceof E ? e : W(e) ? new E(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new E(e.x, e.y) : new E(e, a, r);
    }
    function Z(e, a) {
      if (e)
        for (var r = a ? [e, a] : e, l = 0, d = r.length; l < d; l++)
          this.extend(r[l]);
    }
    Z.prototype = {
      // @method extend(point: Point): this
      // Extends the bounds to contain the given point.
      // @alternative
      // @method extend(otherBounds: Bounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var a, r;
        if (!e)
          return this;
        if (e instanceof E || typeof e[0] == "number" || "x" in e)
          a = r = x(e);
        else if (e = z(e), a = e.min, r = e.max, !a || !r)
          return this;
        return !this.min && !this.max ? (this.min = a.clone(), this.max = r.clone()) : (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(r.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(r.y, this.max.y)), this;
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
        var a, r;
        return typeof e[0] == "number" || e instanceof E ? e = x(e) : e = z(e), e instanceof Z ? (a = e.min, r = e.max) : a = r = e, a.x >= this.min.x && r.x <= this.max.x && a.y >= this.min.y && r.y <= this.max.y;
      },
      // @method intersects(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds
      // intersect if they have at least one point in common.
      intersects: function(e) {
        e = z(e);
        var a = this.min, r = this.max, l = e.min, d = e.max, u = d.x >= a.x && l.x <= r.x, y = d.y >= a.y && l.y <= r.y;
        return u && y;
      },
      // @method overlaps(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds
      // overlap if their intersection is an area.
      overlaps: function(e) {
        e = z(e);
        var a = this.min, r = this.max, l = e.min, d = e.max, u = d.x > a.x && l.x < r.x, y = d.y > a.y && l.y < r.y;
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
        var a = this.min, r = this.max, l = Math.abs(a.x - r.x) * e, d = Math.abs(a.y - r.y) * e;
        return z(
          x(a.x - l, a.y - d),
          x(r.x + l, r.y + d)
        );
      },
      // @method equals(otherBounds: Bounds): Boolean
      // Returns `true` if the rectangle is equivalent to the given bounds.
      equals: function(e) {
        return e ? (e = z(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
      }
    };
    function z(e, a) {
      return !e || e instanceof Z ? e : new Z(e, a);
    }
    function H(e, a) {
      if (e)
        for (var r = a ? [e, a] : e, l = 0, d = r.length; l < d; l++)
          this.extend(r[l]);
    }
    H.prototype = {
      // @method extend(latlng: LatLng): this
      // Extend the bounds to contain the given point
      // @alternative
      // @method extend(otherBounds: LatLngBounds): this
      // Extend the bounds to contain the given bounds
      extend: function(e) {
        var a = this._southWest, r = this._northEast, l, d;
        if (e instanceof ee)
          l = e, d = e;
        else if (e instanceof H) {
          if (l = e._southWest, d = e._northEast, !l || !d)
            return this;
        } else
          return e ? this.extend(Y(e) || q(e)) : this;
        return !a && !r ? (this._southWest = new ee(l.lat, l.lng), this._northEast = new ee(d.lat, d.lng)) : (a.lat = Math.min(l.lat, a.lat), a.lng = Math.min(l.lng, a.lng), r.lat = Math.max(d.lat, r.lat), r.lng = Math.max(d.lng, r.lng)), this;
      },
      // @method pad(bufferRatio: Number): LatLngBounds
      // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
      // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
      // Negative values will retract the bounds.
      pad: function(e) {
        var a = this._southWest, r = this._northEast, l = Math.abs(a.lat - r.lat) * e, d = Math.abs(a.lng - r.lng) * e;
        return new H(
          new ee(a.lat - l, a.lng - d),
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
        var a = this._southWest, r = this._northEast, l, d;
        return e instanceof H ? (l = e.getSouthWest(), d = e.getNorthEast()) : l = d = e, l.lat >= a.lat && d.lat <= r.lat && l.lng >= a.lng && d.lng <= r.lng;
      },
      // @method intersects(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
      intersects: function(e) {
        e = q(e);
        var a = this._southWest, r = this._northEast, l = e.getSouthWest(), d = e.getNorthEast(), u = d.lat >= a.lat && l.lat <= r.lat, y = d.lng >= a.lng && l.lng <= r.lng;
        return u && y;
      },
      // @method overlaps(otherBounds: LatLngBounds): Boolean
      // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
      overlaps: function(e) {
        e = q(e);
        var a = this._southWest, r = this._northEast, l = e.getSouthWest(), d = e.getNorthEast(), u = d.lat > a.lat && l.lat < r.lat, y = d.lng > a.lng && l.lng < r.lng;
        return u && y;
      },
      // @method toBBoxString(): String
      // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
      toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      },
      // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
      // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(e, a) {
        return e ? (e = q(e), this._southWest.equals(e.getSouthWest(), a) && this._northEast.equals(e.getNorthEast(), a)) : !1;
      },
      // @method isValid(): Boolean
      // Returns `true` if the bounds are properly initialized.
      isValid: function() {
        return !!(this._southWest && this._northEast);
      }
    };
    function q(e, a) {
      return e instanceof H ? e : new H(e, a);
    }
    function ee(e, a, r) {
      if (isNaN(e) || isNaN(a))
        throw new Error("Invalid LatLng object: (" + e + ", " + a + ")");
      this.lat = +e, this.lng = +a, r !== void 0 && (this.alt = +r);
    }
    ee.prototype = {
      // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
      // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
      equals: function(e, a) {
        if (!e)
          return !1;
        e = Y(e);
        var r = Math.max(
          Math.abs(this.lat - e.lat),
          Math.abs(this.lng - e.lng)
        );
        return r <= (a === void 0 ? 1e-9 : a);
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
        var a = 180 * e / 40075017, r = a / Math.cos(Math.PI / 180 * this.lat);
        return q(
          [this.lat - a, this.lng - r],
          [this.lat + a, this.lng + r]
        );
      },
      clone: function() {
        return new ee(this.lat, this.lng, this.alt);
      }
    };
    function Y(e, a, r) {
      return e instanceof ee ? e : W(e) && typeof e[0] != "object" ? e.length === 3 ? new ee(e[0], e[1], e[2]) : e.length === 2 ? new ee(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new ee(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : a === void 0 ? null : new ee(e, a, r);
    }
    var me = {
      // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
      // Projects geographical coordinates into pixel coordinates for a given zoom.
      latLngToPoint: function(e, a) {
        var r = this.projection.project(e), l = this.scale(a);
        return this.transformation._transform(r, l);
      },
      // @method pointToLatLng(point: Point, zoom: Number): LatLng
      // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
      // zoom into geographical coordinates.
      pointToLatLng: function(e, a) {
        var r = this.scale(a), l = this.transformation.untransform(e, r);
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
        var a = this.projection.bounds, r = this.scale(e), l = this.transformation.transform(a.min, r), d = this.transformation.transform(a.max, r);
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
        var a = this.wrapLng ? b(e.lng, this.wrapLng, !0) : e.lng, r = this.wrapLat ? b(e.lat, this.wrapLat, !0) : e.lat, l = e.alt;
        return new ee(r, a, l);
      },
      // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
      // Returns a `LatLngBounds` with the same size as the given one, ensuring
      // that its center is within the CRS's bounds.
      // Only accepts actual `L.LatLngBounds` instances, not arrays.
      wrapLatLngBounds: function(e) {
        var a = e.getCenter(), r = this.wrapLatLng(a), l = a.lat - r.lat, d = a.lng - r.lng;
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
      distance: function(e, a) {
        var r = Math.PI / 180, l = e.lat * r, d = a.lat * r, u = Math.sin((a.lat - e.lat) * r / 2), y = Math.sin((a.lng - e.lng) * r / 2), k = u * u + Math.cos(l) * Math.cos(d) * y * y, S = 2 * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k));
        return this.R * S;
      }
    }), Me = 6378137, Ee = {
      R: Me,
      MAX_LATITUDE: 85.0511287798,
      project: function(e) {
        var a = Math.PI / 180, r = this.MAX_LATITUDE, l = Math.max(Math.min(r, e.lat), -r), d = Math.sin(l * a);
        return new E(
          this.R * e.lng * a,
          this.R * Math.log((1 + d) / (1 - d)) / 2
        );
      },
      unproject: function(e) {
        var a = 180 / Math.PI;
        return new ee(
          (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * a,
          e.x * a / this.R
        );
      },
      bounds: function() {
        var e = Me * Math.PI;
        return new Z([-e, -e], [e, e]);
      }()
    };
    function ae(e, a, r, l) {
      if (W(e)) {
        this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
        return;
      }
      this._a = e, this._b = a, this._c = r, this._d = l;
    }
    ae.prototype = {
      // @method transform(point: Point, scale?: Number): Point
      // Returns a transformed point, optionally multiplied by the given scale.
      // Only accepts actual `L.Point` instances, not arrays.
      transform: function(e, a) {
        return this._transform(e.clone(), a);
      },
      // destructive transform (faster)
      _transform: function(e, a) {
        return a = a || 1, e.x = a * (this._a * e.x + this._b), e.y = a * (this._c * e.y + this._d), e;
      },
      // @method untransform(point: Point, scale?: Number): Point
      // Returns the reverse transformation of the given point, optionally divided
      // by the given scale. Only accepts actual `L.Point` instances, not arrays.
      untransform: function(e, a) {
        return a = a || 1, new E(
          (e.x / a - this._b) / this._a,
          (e.y / a - this._d) / this._c
        );
      }
    };
    function pe(e, a, r, l) {
      return new ae(e, a, r, l);
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
    function he(e, a) {
      var r = "", l, d, u, y, k, S;
      for (l = 0, u = e.length; l < u; l++) {
        for (k = e[l], d = 0, y = k.length; d < y; d++)
          S = k[d], r += (d ? "L" : "M") + S.x + " " + S.y;
        r += a ? ue.svg ? "z" : "x" : "";
      }
      return r || "M0 0";
    }
    var $ = document.documentElement.style, R = "ActiveXObject" in window, Le = R && !document.addEventListener, Xe = "msLaunchUri" in navigator && !("documentMode" in document), qe = Xt("webkit"), Ke = Xt("android"), $e = Xt("android 2") || Xt("android 3"), ve = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Ue = Ke && Xt("Google") && ve < 537 && !("AudioNode" in window), nt = !!window.opera, ut = !Xe && Xt("chrome"), Oe = Xt("gecko") && !qe && !nt && !R, Tt = !ut && Xt("safari"), Lt = Xt("phantom"), jt = "OTransition" in $, li = navigator.platform.indexOf("Win") === 0, Ft = R && "transition" in $, ci = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !$e, Ht = "MozPerspective" in $, Vt = !window.L_DISABLE_3D && (Ft || ci || Ht) && !jt && !Lt, Jt = typeof orientation < "u" || Xt("mobile"), Ti = Jt && qe, ji = Jt && ci, ye = !window.PointerEvent && window.MSPointerEvent, je = !!(window.PointerEvent || ye), at = "ontouchstart" in window || !!window.TouchEvent, At = !window.L_NO_TOUCH && (at || je), di = Jt && nt, P = Jt && Oe, _e = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ze = function() {
      var e = !1;
      try {
        var a = Object.defineProperty({}, "passive", {
          get: function() {
            e = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", v, a), window.removeEventListener("testPassiveEventSupport", v, a);
      } catch {
      }
      return e;
    }(), Pt = function() {
      return !!document.createElement("canvas").getContext;
    }(), Gt = !!(document.createElementNS && Se("svg").createSVGRect), za = !!Gt && function() {
      var e = document.createElement("div");
      return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }(), Na = !Gt && function() {
      try {
        var e = document.createElement("div");
        e.innerHTML = '<v:shape adj="1"/>';
        var a = e.firstChild;
        return a.style.behavior = "url(#default#VML)", a && typeof a.adj == "object";
      } catch {
        return !1;
      }
    }(), vt = navigator.platform.indexOf("Mac") === 0, Wi = navigator.platform.indexOf("Linux") === 0;
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
      chrome: ut,
      gecko: Oe,
      safari: Tt,
      phantom: Lt,
      opera12: jt,
      win: li,
      ie3d: Ft,
      webkit3d: ci,
      gecko3d: Ht,
      any3d: Vt,
      mobile: Jt,
      mobileWebkit: Ti,
      mobileWebkit3d: ji,
      msPointer: ye,
      pointer: je,
      touch: At,
      touchNative: at,
      mobileOpera: di,
      mobileGecko: P,
      retina: _e,
      passiveEvents: ze,
      canvas: Pt,
      svg: Gt,
      vml: Na,
      inlineSvg: za,
      mac: vt,
      linux: Wi
    }, Dn = ue.msPointer ? "MSPointerDown" : "pointerdown", Pi = ue.msPointer ? "MSPointerMove" : "pointermove", qr = ue.msPointer ? "MSPointerUp" : "pointerup", Yr = ue.msPointer ? "MSPointerCancel" : "pointercancel", Ta = {
      touchstart: Dn,
      touchmove: Pi,
      touchend: qr,
      touchcancel: Yr
    }, Jr = {
      touchstart: ec,
      touchmove: $n,
      touchend: $n,
      touchcancel: $n
    }, tn = {}, Xr = !1;
    function ql(e, a, r) {
      return a === "touchstart" && Ql(), Jr[a] ? (r = Jr[a].bind(this, r), e.addEventListener(Ta[a], r, !1), r) : (console.warn("wrong event specified:", a), v);
    }
    function Yl(e, a, r) {
      if (!Ta[a]) {
        console.warn("wrong event specified:", a);
        return;
      }
      e.removeEventListener(Ta[a], r, !1);
    }
    function Jl(e) {
      tn[e.pointerId] = e;
    }
    function Xl(e) {
      tn[e.pointerId] && (tn[e.pointerId] = e);
    }
    function Qr(e) {
      delete tn[e.pointerId];
    }
    function Ql() {
      Xr || (document.addEventListener(Dn, Jl, !0), document.addEventListener(Pi, Xl, !0), document.addEventListener(qr, Qr, !0), document.addEventListener(Yr, Qr, !0), Xr = !0);
    }
    function $n(e, a) {
      if (a.pointerType !== (a.MSPOINTER_TYPE_MOUSE || "mouse")) {
        a.touches = [];
        for (var r in tn)
          a.touches.push(tn[r]);
        a.changedTouches = [a], e(a);
      }
    }
    function ec(e, a) {
      a.MSPOINTER_TYPE_TOUCH && a.pointerType === a.MSPOINTER_TYPE_TOUCH && Et(a), $n(e, a);
    }
    function tc(e) {
      var a = {}, r, l;
      for (l in e)
        r = e[l], a[l] = r && r.bind ? r.bind(e) : r;
      return e = a, a.type = "dblclick", a.detail = 2, a.isTrusted = !1, a._simulated = !0, a;
    }
    var ic = 200;
    function nc(e, a) {
      e.addEventListener("dblclick", a);
      var r = 0, l;
      function d(u) {
        if (u.detail !== 1) {
          l = u.detail;
          return;
        }
        if (!(u.pointerType === "mouse" || u.sourceCapabilities && !u.sourceCapabilities.firesTouchEvents)) {
          var y = ao(u);
          if (!(y.some(function(S) {
            return S instanceof HTMLLabelElement && S.attributes.for;
          }) && !y.some(function(S) {
            return S instanceof HTMLInputElement || S instanceof HTMLSelectElement;
          }))) {
            var k = Date.now();
            k - r <= ic ? (l++, l === 2 && a(tc(u))) : l = 1, r = k;
          }
        }
      }
      return e.addEventListener("click", d), {
        dblclick: a,
        simDblclick: d
      };
    }
    function ac(e, a) {
      e.removeEventListener("dblclick", a.dblclick), e.removeEventListener("click", a.simDblclick);
    }
    var ja = Zn(
      ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
    ), mn = Zn(
      ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
    ), eo = mn === "webkitTransition" || mn === "OTransition" ? mn + "End" : "transitionend";
    function to(e) {
      return typeof e == "string" ? document.getElementById(e) : e;
    }
    function pn(e, a) {
      var r = e.style[a] || e.currentStyle && e.currentStyle[a];
      if ((!r || r === "auto") && document.defaultView) {
        var l = document.defaultView.getComputedStyle(e, null);
        r = l ? l[a] : null;
      }
      return r === "auto" ? null : r;
    }
    function We(e, a, r) {
      var l = document.createElement(e);
      return l.className = a || "", r && r.appendChild(l), l;
    }
    function lt(e) {
      var a = e.parentNode;
      a && a.removeChild(e);
    }
    function Wn(e) {
      for (; e.firstChild; )
        e.removeChild(e.firstChild);
    }
    function nn(e) {
      var a = e.parentNode;
      a && a.lastChild !== e && a.appendChild(e);
    }
    function an(e) {
      var a = e.parentNode;
      a && a.firstChild !== e && a.insertBefore(e, a.firstChild);
    }
    function Pa(e, a) {
      if (e.classList !== void 0)
        return e.classList.contains(a);
      var r = Un(e);
      return r.length > 0 && new RegExp("(^|\\s)" + a + "(\\s|$)").test(r);
    }
    function Pe(e, a) {
      if (e.classList !== void 0)
        for (var r = I(a), l = 0, d = r.length; l < d; l++)
          e.classList.add(r[l]);
      else if (!Pa(e, a)) {
        var u = Un(e);
        Ea(e, (u ? u + " " : "") + a);
      }
    }
    function mt(e, a) {
      e.classList !== void 0 ? e.classList.remove(a) : Ea(e, w((" " + Un(e) + " ").replace(" " + a + " ", " ")));
    }
    function Ea(e, a) {
      e.className.baseVal === void 0 ? e.className = a : e.className.baseVal = a;
    }
    function Un(e) {
      return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
    }
    function Qt(e, a) {
      "opacity" in e.style ? e.style.opacity = a : "filter" in e.style && rc(e, a);
    }
    function rc(e, a) {
      var r = !1, l = "DXImageTransform.Microsoft.Alpha";
      try {
        r = e.filters.item(l);
      } catch {
        if (a === 1)
          return;
      }
      a = Math.round(a * 100), r ? (r.Enabled = a !== 100, r.Opacity = a) : e.style.filter += " progid:" + l + "(opacity=" + a + ")";
    }
    function Zn(e) {
      for (var a = document.documentElement.style, r = 0; r < e.length; r++)
        if (e[r] in a)
          return e[r];
      return !1;
    }
    function Ui(e, a, r) {
      var l = a || new E(0, 0);
      e.style[ja] = (ue.ie3d ? "translate(" + l.x + "px," + l.y + "px)" : "translate3d(" + l.x + "px," + l.y + "px,0)") + (r ? " scale(" + r + ")" : "");
    }
    function ht(e, a) {
      e._leaflet_pos = a, ue.any3d ? Ui(e, a) : (e.style.left = a.x + "px", e.style.top = a.y + "px");
    }
    function Zi(e) {
      return e._leaflet_pos || new E(0, 0);
    }
    var hn, fn, Ia;
    if ("onselectstart" in document)
      hn = function() {
        Ne(window, "selectstart", Et);
      }, fn = function() {
        Qe(window, "selectstart", Et);
      };
    else {
      var gn = Zn(
        ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
      );
      hn = function() {
        if (gn) {
          var e = document.documentElement.style;
          Ia = e[gn], e[gn] = "none";
        }
      }, fn = function() {
        gn && (document.documentElement.style[gn] = Ia, Ia = void 0);
      };
    }
    function La() {
      Ne(window, "dragstart", Et);
    }
    function Aa() {
      Qe(window, "dragstart", Et);
    }
    var Hn, Ma;
    function Oa(e) {
      for (; e.tabIndex === -1; )
        e = e.parentNode;
      e.style && (Vn(), Hn = e, Ma = e.style.outlineStyle, e.style.outlineStyle = "none", Ne(window, "keydown", Vn));
    }
    function Vn() {
      Hn && (Hn.style.outlineStyle = Ma, Hn = void 0, Ma = void 0, Qe(window, "keydown", Vn));
    }
    function io(e) {
      do
        e = e.parentNode;
      while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
      return e;
    }
    function Ra(e) {
      var a = e.getBoundingClientRect();
      return {
        x: a.width / e.offsetWidth || 1,
        y: a.height / e.offsetHeight || 1,
        boundingClientRect: a
      };
    }
    var oc = {
      __proto__: null,
      TRANSFORM: ja,
      TRANSITION: mn,
      TRANSITION_END: eo,
      get: to,
      getStyle: pn,
      create: We,
      remove: lt,
      empty: Wn,
      toFront: nn,
      toBack: an,
      hasClass: Pa,
      addClass: Pe,
      removeClass: mt,
      setClass: Ea,
      getClass: Un,
      setOpacity: Qt,
      testProp: Zn,
      setTransform: Ui,
      setPosition: ht,
      getPosition: Zi,
      get disableTextSelection() {
        return hn;
      },
      get enableTextSelection() {
        return fn;
      },
      disableImageDrag: La,
      enableImageDrag: Aa,
      preventOutline: Oa,
      restoreOutline: Vn,
      getSizedParentNode: io,
      getScale: Ra
    };
    function Ne(e, a, r, l) {
      if (a && typeof a == "object")
        for (var d in a)
          Fa(e, d, a[d], r);
      else {
        a = I(a);
        for (var u = 0, y = a.length; u < y; u++)
          Fa(e, a[u], r, l);
      }
      return this;
    }
    var _i = "_leaflet_events";
    function Qe(e, a, r, l) {
      if (arguments.length === 1)
        no(e), delete e[_i];
      else if (a && typeof a == "object")
        for (var d in a)
          Da(e, d, a[d], r);
      else if (a = I(a), arguments.length === 2)
        no(e, function(k) {
          return U(a, k) !== -1;
        });
      else
        for (var u = 0, y = a.length; u < y; u++)
          Da(e, a[u], r, l);
      return this;
    }
    function no(e, a) {
      for (var r in e[_i]) {
        var l = r.split(/\d/)[0];
        (!a || a(l)) && Da(e, l, null, null, r);
      }
    }
    var Ba = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel"
    };
    function Fa(e, a, r, l) {
      var d = a + f(r) + (l ? "_" + f(l) : "");
      if (e[_i] && e[_i][d])
        return this;
      var u = function(k) {
        return r.call(l || e, k || window.event);
      }, y = u;
      !ue.touchNative && ue.pointer && a.indexOf("touch") === 0 ? u = ql(e, a, u) : ue.touch && a === "dblclick" ? u = nc(e, u) : "addEventListener" in e ? a === "touchstart" || a === "touchmove" || a === "wheel" || a === "mousewheel" ? e.addEventListener(Ba[a] || a, u, ue.passiveEvents ? { passive: !1 } : !1) : a === "mouseenter" || a === "mouseleave" ? (u = function(k) {
        k = k || window.event, Wa(e, k) && y(k);
      }, e.addEventListener(Ba[a], u, !1)) : e.addEventListener(a, y, !1) : e.attachEvent("on" + a, u), e[_i] = e[_i] || {}, e[_i][d] = u;
    }
    function Da(e, a, r, l, d) {
      d = d || a + f(r) + (l ? "_" + f(l) : "");
      var u = e[_i] && e[_i][d];
      if (!u)
        return this;
      !ue.touchNative && ue.pointer && a.indexOf("touch") === 0 ? Yl(e, a, u) : ue.touch && a === "dblclick" ? ac(e, u) : "removeEventListener" in e ? e.removeEventListener(Ba[a] || a, u, !1) : e.detachEvent("on" + a, u), e[_i][d] = null;
    }
    function Hi(e) {
      return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
    }
    function $a(e) {
      return Fa(e, "wheel", Hi), this;
    }
    function yn(e) {
      return Ne(e, "mousedown touchstart dblclick contextmenu", Hi), e._leaflet_disable_click = !0, this;
    }
    function Et(e) {
      return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
    }
    function Vi(e) {
      return Et(e), Hi(e), this;
    }
    function ao(e) {
      if (e.composedPath)
        return e.composedPath();
      for (var a = [], r = e.target; r; )
        a.push(r), r = r.parentNode;
      return a;
    }
    function ro(e, a) {
      if (!a)
        return new E(e.clientX, e.clientY);
      var r = Ra(a), l = r.boundingClientRect;
      return new E(
        // offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (e.clientX - l.left) / r.x - a.clientLeft,
        (e.clientY - l.top) / r.y - a.clientTop
      );
    }
    var sc = ue.linux && ue.chrome ? window.devicePixelRatio : ue.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    function oo(e) {
      return ue.edge ? e.wheelDeltaY / 2 : (
        // Don't trust window-geometry-based delta
        e.deltaY && e.deltaMode === 0 ? -e.deltaY / sc : (
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
    function Wa(e, a) {
      var r = a.relatedTarget;
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
    var lc = {
      __proto__: null,
      on: Ne,
      off: Qe,
      stopPropagation: Hi,
      disableScrollPropagation: $a,
      disableClickPropagation: yn,
      preventDefault: Et,
      stop: Vi,
      getPropagationPath: ao,
      getMousePosition: ro,
      getWheelDelta: oo,
      isExternalTarget: Wa,
      addListener: Ne,
      removeListener: Qe
    }, so = ce.extend({
      // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
      // Run an animation of a given element to a new position, optionally setting
      // duration in seconds (`0.25` by default) and easing linearity factor (3rd
      // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
      // `0.5` by default).
      run: function(e, a, r, l) {
        this.stop(), this._el = e, this._inProgress = !0, this._duration = r || 0.25, this._easeOutPower = 1 / Math.max(l || 0.5, 0.2), this._startPos = Zi(e), this._offset = a.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
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
        var a = +/* @__PURE__ */ new Date() - this._startTime, r = this._duration * 1e3;
        a < r ? this._runFrame(this._easeOut(a / r), e) : (this._runFrame(1), this._complete());
      },
      _runFrame: function(e, a) {
        var r = this._startPos.add(this._offset.multiplyBy(e));
        a && r._round(), ht(this._el, r), this.fire("step");
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
      initialize: function(e, a) {
        a = N(this, a), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = m(this._onResize, this), this._initEvents(), a.maxBounds && this.setMaxBounds(a.maxBounds), a.zoom !== void 0 && (this._zoom = this._limitZoom(a.zoom)), a.center && a.zoom !== void 0 && this.setView(Y(a.center), a.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = mn && ue.any3d && !ue.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Ne(this._proxy, eo, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      // @section Methods for modifying map state
      // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) with the given
      // animation options.
      setView: function(e, a, r) {
        if (a = a === void 0 ? this._zoom : this._limitZoom(a), e = this._limitCenter(Y(e), a, this.options.maxBounds), r = r || {}, this._stop(), this._loaded && !r.reset && r !== !0) {
          r.animate !== void 0 && (r.zoom = c({ animate: r.animate }, r.zoom), r.pan = c({ animate: r.animate, duration: r.duration }, r.pan));
          var l = this._zoom !== a ? this._tryAnimatedZoom && this._tryAnimatedZoom(e, a, r.zoom) : this._tryAnimatedPan(e, r.pan);
          if (l)
            return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(e, a, r.pan && r.pan.noMoveStart), this;
      },
      // @method setZoom(zoom: Number, options?: Zoom/pan options): this
      // Sets the zoom of the map.
      setZoom: function(e, a) {
        return this._loaded ? this.setView(this.getCenter(), e, { zoom: a }) : (this._zoom = e, this);
      },
      // @method zoomIn(delta?: Number, options?: Zoom options): this
      // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomIn: function(e, a) {
        return e = e || (ue.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + e, a);
      },
      // @method zoomOut(delta?: Number, options?: Zoom options): this
      // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
      zoomOut: function(e, a) {
        return e = e || (ue.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - e, a);
      },
      // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified geographical point on the map
      // stationary (e.g. used internally for scroll zoom and double-click zoom).
      // @alternative
      // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
      // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
      setZoomAround: function(e, a, r) {
        var l = this.getZoomScale(a), d = this.getSize().divideBy(2), u = e instanceof E ? e : this.latLngToContainerPoint(e), y = u.subtract(d).multiplyBy(1 - 1 / l), k = this.containerPointToLatLng(d.add(y));
        return this.setView(k, a, { zoom: r });
      },
      _getBoundsCenterZoom: function(e, a) {
        a = a || {}, e = e.getBounds ? e.getBounds() : q(e);
        var r = x(a.paddingTopLeft || a.padding || [0, 0]), l = x(a.paddingBottomRight || a.padding || [0, 0]), d = this.getBoundsZoom(e, !1, r.add(l));
        if (d = typeof a.maxZoom == "number" ? Math.min(a.maxZoom, d) : d, d === 1 / 0)
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
      fitBounds: function(e, a) {
        if (e = q(e), !e.isValid())
          throw new Error("Bounds are not valid.");
        var r = this._getBoundsCenterZoom(e, a);
        return this.setView(r.center, r.zoom, a);
      },
      // @method fitWorld(options?: fitBounds options): this
      // Sets a map view that mostly contains the whole world with the maximum
      // zoom level possible.
      fitWorld: function(e) {
        return this.fitBounds([[-90, -180], [90, 180]], e);
      },
      // @method panTo(latlng: LatLng, options?: Pan options): this
      // Pans the map to a given center.
      panTo: function(e, a) {
        return this.setView(e, this._zoom, { pan: a });
      },
      // @method panBy(offset: Point, options?: Pan options): this
      // Pans the map by a given number of pixels (animated).
      panBy: function(e, a) {
        if (e = x(e).round(), a = a || {}, !e.x && !e.y)
          return this.fire("moveend");
        if (a.animate !== !0 && !this.getSize().contains(e))
          return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
        if (this._panAnim || (this._panAnim = new so(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), a.noMoveStart || this.fire("movestart"), a.animate !== !1) {
          Pe(this._mapPane, "leaflet-pan-anim");
          var r = this._getMapPanePos().subtract(e).round();
          this._panAnim.run(this._mapPane, r, a.duration || 0.25, a.easeLinearity);
        } else
          this._rawPanBy(e), this.fire("move").fire("moveend");
        return this;
      },
      // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
      // Sets the view of the map (geographical center and zoom) performing a smooth
      // pan-zoom animation.
      flyTo: function(e, a, r) {
        if (r = r || {}, r.animate === !1 || !ue.any3d)
          return this.setView(e, a, r);
        this._stop();
        var l = this.project(this.getCenter()), d = this.project(e), u = this.getSize(), y = this._zoom;
        e = Y(e), a = a === void 0 ? y : a;
        var k = Math.max(u.x, u.y), S = k * this.getZoomScale(y, a), K = d.distanceTo(l) || 1, oe = 1.42, xe = oe * oe;
        function Ie(ft) {
          var aa = ft ? -1 : 1, Yc = ft ? S : k, Jc = S * S - k * k + aa * xe * xe * K * K, Xc = 2 * Yc * xe * K, Qa = Jc / Xc, Wo = Math.sqrt(Qa * Qa + 1) - Qa, Qc = Wo < 1e-9 ? -18 : Math.log(Wo);
          return Qc;
        }
        function Ot(ft) {
          return (Math.exp(ft) - Math.exp(-ft)) / 2;
        }
        function kt(ft) {
          return (Math.exp(ft) + Math.exp(-ft)) / 2;
        }
        function ti(ft) {
          return Ot(ft) / kt(ft);
        }
        var Dt = Ie(0);
        function dn(ft) {
          return k * (kt(Dt) / kt(Dt + oe * ft));
        }
        function Vc(ft) {
          return k * (kt(Dt) * ti(Dt + oe * ft) - Ot(Dt)) / xe;
        }
        function Gc(ft) {
          return 1 - Math.pow(1 - ft, 1.5);
        }
        var Kc = Date.now(), Do = (Ie(1) - Dt) / oe, qc = r.duration ? 1e3 * r.duration : 1e3 * Do * 0.8;
        function $o() {
          var ft = (Date.now() - Kc) / qc, aa = Gc(ft) * Do;
          ft <= 1 ? (this._flyToFrame = F($o, this), this._move(
            this.unproject(l.add(d.subtract(l).multiplyBy(Vc(aa) / K)), y),
            this.getScaleZoom(k / dn(aa), y),
            { flyTo: !0 }
          )) : this._move(e, a)._moveEnd(!0);
        }
        return this._moveStart(!0, r.noMoveStart), $o.call(this), this;
      },
      // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
      // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
      // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
      flyToBounds: function(e, a) {
        var r = this._getBoundsCenterZoom(e, a);
        return this.flyTo(r.center, r.zoom, a);
      },
      // @method setMaxBounds(bounds: LatLngBounds): this
      // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
      setMaxBounds: function(e) {
        return e = q(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      // @method setMinZoom(zoom: Number): this
      // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
      setMinZoom: function(e) {
        var a = this.options.minZoom;
        return this.options.minZoom = e, this._loaded && a !== e && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(e) : this;
      },
      // @method setMaxZoom(zoom: Number): this
      // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
      setMaxZoom: function(e) {
        var a = this.options.maxZoom;
        return this.options.maxZoom = e, this._loaded && a !== e && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(e) : this;
      },
      // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
      // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
      panInsideBounds: function(e, a) {
        this._enforcingBounds = !0;
        var r = this.getCenter(), l = this._limitCenter(r, this._zoom, q(e));
        return r.equals(l) || this.panTo(l, a), this._enforcingBounds = !1, this;
      },
      // @method panInside(latlng: LatLng, options?: padding options): this
      // Pans the map the minimum amount to make the `latlng` visible. Use
      // padding options to fit the display to more restricted bounds.
      // If `latlng` is already within the (optionally padded) display bounds,
      // the map will not be panned.
      panInside: function(e, a) {
        a = a || {};
        var r = x(a.paddingTopLeft || a.padding || [0, 0]), l = x(a.paddingBottomRight || a.padding || [0, 0]), d = this.project(this.getCenter()), u = this.project(e), y = this.getPixelBounds(), k = z([y.min.add(r), y.max.subtract(l)]), S = k.getSize();
        if (!k.contains(u)) {
          this._enforcingBounds = !0;
          var K = u.subtract(k.getCenter()), oe = k.extend(u).getSize().subtract(S);
          d.x += K.x < 0 ? -oe.x : oe.x, d.y += K.y < 0 ? -oe.y : oe.y, this.panTo(this.unproject(d), a), this._enforcingBounds = !1;
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
        var a = this.getSize();
        this._sizeChanged = !0, this._lastCenter = null;
        var r = this.getSize(), l = a.divideBy(2).round(), d = r.divideBy(2).round(), u = l.subtract(d);
        return !u.x && !u.y ? this : (e.animate && e.pan ? this.panBy(u) : (e.pan && this._rawPanBy(u), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(m(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: a,
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
        var a = m(this._handleGeolocationResponse, this), r = m(this._handleGeolocationError, this);
        return e.watch ? this._locationWatchId = navigator.geolocation.watchPosition(a, r, e) : navigator.geolocation.getCurrentPosition(a, r, e), this;
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
          var a = e.code, r = e.message || (a === 1 ? "permission denied" : a === 2 ? "position unavailable" : "timeout");
          this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
            code: a,
            message: "Geolocation error: " + r + "."
          });
        }
      },
      _handleGeolocationResponse: function(e) {
        if (this._container._leaflet_id) {
          var a = e.coords.latitude, r = e.coords.longitude, l = new ee(a, r), d = l.toBounds(e.coords.accuracy * 2), u = this._locateOptions;
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
      addHandler: function(e, a) {
        if (!a)
          return this;
        var r = this[e] = new a(this);
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
      createPane: function(e, a) {
        var r = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), l = We("div", r, a || this._mapPane);
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
        var e = this.getPixelBounds(), a = this.unproject(e.getBottomLeft()), r = this.unproject(e.getTopRight());
        return new H(a, r);
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
      getBoundsZoom: function(e, a, r) {
        e = q(e), r = x(r || [0, 0]);
        var l = this.getZoom() || 0, d = this.getMinZoom(), u = this.getMaxZoom(), y = e.getNorthWest(), k = e.getSouthEast(), S = this.getSize().subtract(r), K = z(this.project(k, l), this.project(y, l)).getSize(), oe = ue.any3d ? this.options.zoomSnap : 1, xe = S.x / K.x, Ie = S.y / K.y, Ot = a ? Math.max(xe, Ie) : Math.min(xe, Ie);
        return l = this.getScaleZoom(Ot, l), oe && (l = Math.round(l / (oe / 100)) * (oe / 100), l = a ? Math.ceil(l / oe) * oe : Math.floor(l / oe) * oe), Math.max(d, Math.min(u, l));
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
      getPixelBounds: function(e, a) {
        var r = this._getTopLeftPoint(e, a);
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
      getZoomScale: function(e, a) {
        var r = this.options.crs;
        return a = a === void 0 ? this._zoom : a, r.scale(e) / r.scale(a);
      },
      // @method getScaleZoom(scale: Number, fromZoom: Number): Number
      // Returns the zoom level that the map would end up at, if it is at `fromZoom`
      // level and everything is scaled by a factor of `scale`. Inverse of
      // [`getZoomScale`](#map-getZoomScale).
      getScaleZoom: function(e, a) {
        var r = this.options.crs;
        a = a === void 0 ? this._zoom : a;
        var l = r.zoom(e * r.scale(a));
        return isNaN(l) ? 1 / 0 : l;
      },
      // @method project(latlng: LatLng, zoom: Number): Point
      // Projects a geographical coordinate `LatLng` according to the projection
      // of the map's CRS, then scales it according to `zoom` and the CRS's
      // `Transformation`. The result is pixel coordinate relative to
      // the CRS origin.
      project: function(e, a) {
        return a = a === void 0 ? this._zoom : a, this.options.crs.latLngToPoint(Y(e), a);
      },
      // @method unproject(point: Point, zoom: Number): LatLng
      // Inverse of [`project`](#map-project).
      unproject: function(e, a) {
        return a = a === void 0 ? this._zoom : a, this.options.crs.pointToLatLng(x(e), a);
      },
      // @method layerPointToLatLng(point: Point): LatLng
      // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
      // returns the corresponding geographical coordinate (for the current zoom level).
      layerPointToLatLng: function(e) {
        var a = x(e).add(this.getPixelOrigin());
        return this.unproject(a);
      },
      // @method latLngToLayerPoint(latlng: LatLng): Point
      // Given a geographical coordinate, returns the corresponding pixel coordinate
      // relative to the [origin pixel](#map-getpixelorigin).
      latLngToLayerPoint: function(e) {
        var a = this.project(Y(e))._round();
        return a._subtract(this.getPixelOrigin());
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
      distance: function(e, a) {
        return this.options.crs.distance(Y(e), Y(a));
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
        var a = this.containerPointToLayerPoint(x(e));
        return this.layerPointToLatLng(a);
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
        return ro(e, this._container);
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
        var a = this._container = to(e);
        if (a) {
          if (a._leaflet_id)
            throw new Error("Map container is already initialized.");
        } else throw new Error("Map container not found.");
        Ne(a, "scroll", this._onScroll, this), this._containerId = f(a);
      },
      _initLayout: function() {
        var e = this._container;
        this._fadeAnimated = this.options.fadeAnimation && ue.any3d, Pe(e, "leaflet-container" + (ue.touch ? " leaflet-touch" : "") + (ue.retina ? " leaflet-retina" : "") + (ue.ielt9 ? " leaflet-oldie" : "") + (ue.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var a = pn(e, "position");
        a !== "absolute" && a !== "relative" && a !== "fixed" && a !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function() {
        var e = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ht(this._mapPane, new E(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Pe(e.markerPane, "leaflet-zoom-hide"), Pe(e.shadowPane, "leaflet-zoom-hide"));
      },
      // private methods that modify map state
      // @section Map state change events
      _resetView: function(e, a, r) {
        ht(this._mapPane, new E(0, 0));
        var l = !this._loaded;
        this._loaded = !0, a = this._limitZoom(a), this.fire("viewprereset");
        var d = this._zoom !== a;
        this._moveStart(d, r)._move(e, a)._moveEnd(d), this.fire("viewreset"), l && this.fire("load");
      },
      _moveStart: function(e, a) {
        return e && this.fire("zoomstart"), a || this.fire("movestart"), this;
      },
      _move: function(e, a, r, l) {
        a === void 0 && (a = this._zoom);
        var d = this._zoom !== a;
        return this._zoom = a, this._lastCenter = e, this._pixelOrigin = this._getNewPixelOrigin(e), l ? r && r.pinch && this.fire("zoom", r) : ((d || r && r.pinch) && this.fire("zoom", r), this.fire("move", r)), this;
      },
      _moveEnd: function(e) {
        return e && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function() {
        return Q(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function(e) {
        ht(this._mapPane, this._getMapPanePos().subtract(e));
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
        var a = e ? Qe : Ne;
        a(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && a(window, "resize", this._onResize, this), ue.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
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
      _findEventTargets: function(e, a) {
        for (var r = [], l, d = a === "mouseout" || a === "mouseover", u = e.target || e.srcElement, y = !1; u; ) {
          if (l = this._targets[f(u)], l && (a === "click" || a === "preclick") && this._draggableMoved(l)) {
            y = !0;
            break;
          }
          if (l && l.listens(a, !0) && (d && !Wa(u, e) || (r.push(l), d)) || u === this._container)
            break;
          u = u.parentNode;
        }
        return !r.length && !y && !d && this.listens(a, !0) && (r = [this]), r;
      },
      _isClickDisabled: function(e) {
        for (; e && e !== this._container; ) {
          if (e._leaflet_disable_click)
            return !0;
          e = e.parentNode;
        }
      },
      _handleDOMEvent: function(e) {
        var a = e.target || e.srcElement;
        if (!(!this._loaded || a._leaflet_disable_events || e.type === "click" && this._isClickDisabled(a))) {
          var r = e.type;
          r === "mousedown" && Oa(a), this._fireDOMEvent(e, r);
        }
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function(e, a, r) {
        if (e.type === "click") {
          var l = c({}, e);
          l.type = "preclick", this._fireDOMEvent(l, l.type, r);
        }
        var d = this._findEventTargets(e, a);
        if (r) {
          for (var u = [], y = 0; y < r.length; y++)
            r[y].listens(a, !0) && u.push(r[y]);
          d = u.concat(d);
        }
        if (d.length) {
          a === "contextmenu" && Et(e);
          var k = d[0], S = {
            originalEvent: e
          };
          if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
            var K = k.getLatLng && (!k._radius || k._radius <= 10);
            S.containerPoint = K ? this.latLngToContainerPoint(k.getLatLng()) : this.mouseEventToContainerPoint(e), S.layerPoint = this.containerPointToLayerPoint(S.containerPoint), S.latlng = K ? k.getLatLng() : this.layerPointToLatLng(S.layerPoint);
          }
          for (y = 0; y < d.length; y++)
            if (d[y].fire(a, S, !0), S.originalEvent._stopped || d[y].options.bubblingMouseEvents === !1 && U(this._mouseEvents, a) !== -1)
              return;
        }
      },
      _draggableMoved: function(e) {
        return e = e.dragging && e.dragging.enabled() ? e : this, e.dragging && e.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function() {
        for (var e = 0, a = this._handlers.length; e < a; e++)
          this._handlers[e].disable();
      },
      // @section Other Methods
      // @method whenReady(fn: Function, context?: Object): this
      // Runs the given function `fn` when the map gets initialized with
      // a view (center and zoom) and at least one layer, or immediately
      // if it's already initialized, optionally passing a function context.
      whenReady: function(e, a) {
        return this._loaded ? e.call(a || this, { target: this }) : this.on("load", e, a), this;
      },
      // private methods for getting map state
      _getMapPanePos: function() {
        return Zi(this._mapPane) || new E(0, 0);
      },
      _moved: function() {
        var e = this._getMapPanePos();
        return e && !e.equals([0, 0]);
      },
      _getTopLeftPoint: function(e, a) {
        var r = e && a !== void 0 ? this._getNewPixelOrigin(e, a) : this.getPixelOrigin();
        return r.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function(e, a) {
        var r = this.getSize()._divideBy(2);
        return this.project(e, a)._subtract(r)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function(e, a, r) {
        var l = this._getNewPixelOrigin(r, a);
        return this.project(e, a)._subtract(l);
      },
      _latLngBoundsToNewLayerBounds: function(e, a, r) {
        var l = this._getNewPixelOrigin(r, a);
        return z([
          this.project(e.getSouthWest(), a)._subtract(l),
          this.project(e.getNorthWest(), a)._subtract(l),
          this.project(e.getSouthEast(), a)._subtract(l),
          this.project(e.getNorthEast(), a)._subtract(l)
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
      _limitCenter: function(e, a, r) {
        if (!r)
          return e;
        var l = this.project(e, a), d = this.getSize().divideBy(2), u = new Z(l.subtract(d), l.add(d)), y = this._getBoundsOffset(u, r, a);
        return Math.abs(y.x) <= 1 && Math.abs(y.y) <= 1 ? e : this.unproject(l.add(y), a);
      },
      // adjust offset for view to get inside bounds
      _limitOffset: function(e, a) {
        if (!a)
          return e;
        var r = this.getPixelBounds(), l = new Z(r.min.add(e), r.max.add(e));
        return e.add(this._getBoundsOffset(l, a));
      },
      // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
      _getBoundsOffset: function(e, a, r) {
        var l = z(
          this.project(a.getNorthEast(), r),
          this.project(a.getSouthWest(), r)
        ), d = l.min.subtract(e.min), u = l.max.subtract(e.max), y = this._rebound(d.x, -u.x), k = this._rebound(d.y, -u.y);
        return new E(y, k);
      },
      _rebound: function(e, a) {
        return e + a > 0 ? Math.round(e - a) / 2 : Math.max(0, Math.ceil(e)) - Math.max(0, Math.floor(a));
      },
      _limitZoom: function(e) {
        var a = this.getMinZoom(), r = this.getMaxZoom(), l = ue.any3d ? this.options.zoomSnap : 1;
        return l && (e = Math.round(e / l) * l), Math.max(a, Math.min(r, e));
      },
      _onPanTransitionStep: function() {
        this.fire("move");
      },
      _onPanTransitionEnd: function() {
        mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function(e, a) {
        var r = this._getCenterOffset(e)._trunc();
        return (a && a.animate) !== !0 && !this.getSize().contains(r) ? !1 : (this.panBy(r, a), !0);
      },
      _createAnimProxy: function() {
        var e = this._proxy = We("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(e), this.on("zoomanim", function(a) {
          var r = ja, l = this._proxy.style[r];
          Ui(this._proxy, this.project(a.center, a.zoom), this.getZoomScale(a.zoom, 1)), l === this._proxy.style[r] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function() {
        lt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function() {
        var e = this.getCenter(), a = this.getZoom();
        Ui(this._proxy, this.project(e, a), this.getZoomScale(a, 1));
      },
      _catchTransitionEnd: function(e) {
        this._animatingZoom && e.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function(e, a, r) {
        if (this._animatingZoom)
          return !0;
        if (r = r || {}, !this._zoomAnimated || r.animate === !1 || this._nothingToAnimate() || Math.abs(a - this._zoom) > this.options.zoomAnimationThreshold)
          return !1;
        var l = this.getZoomScale(a), d = this._getCenterOffset(e)._divideBy(1 - 1 / l);
        return r.animate !== !0 && !this.getSize().contains(d) ? !1 : (F(function() {
          this._moveStart(!0, r.noMoveStart || !1)._animateZoom(e, a, !0);
        }, this), !0);
      },
      _animateZoom: function(e, a, r, l) {
        this._mapPane && (r && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = a, Pe(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: e,
          zoom: a,
          noUpdate: l
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(m(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
    function cc(e, a) {
      return new De(e, a);
    }
    var ri = ge.extend({
      // @section
      // @aka Control Options
      options: {
        // @option position: String = 'topright'
        // The position of the control (one of the map corners). Possible values are `'topleft'`,
        // `'topright'`, `'bottomleft'` or `'bottomright'`
        position: "topright"
      },
      initialize: function(e) {
        N(this, e);
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
        var a = this._map;
        return a && a.removeControl(this), this.options.position = e, a && a.addControl(this), this;
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
        var a = this._container = this.onAdd(e), r = this.getPosition(), l = e._controlCorners[r];
        return Pe(a, "leaflet-control"), r.indexOf("bottom") !== -1 ? l.insertBefore(a, l.firstChild) : l.appendChild(a), this._map.on("unload", this.remove, this), this;
      },
      // @method remove: this
      // Removes the control from the map it is currently active on.
      remove: function() {
        return this._map ? (lt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
      },
      _refocusOnMap: function(e) {
        this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
      }
    }), bn = function(e) {
      return new ri(e);
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
        var e = this._controlCorners = {}, a = "leaflet-", r = this._controlContainer = We("div", a + "control-container", this._container);
        function l(d, u) {
          var y = a + d + " " + a + u;
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
    var lo = ri.extend({
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
        sortFunction: function(e, a, r, l) {
          return r < l ? -1 : l < r ? 1 : 0;
        }
      },
      initialize: function(e, a, r) {
        N(this, r), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
        for (var l in e)
          this._addLayer(e[l], l);
        for (l in a)
          this._addLayer(a[l], l, !0);
      },
      onAdd: function(e) {
        this._initLayout(), this._update(), this._map = e, e.on("zoomend", this._checkDisabledLayers, this);
        for (var a = 0; a < this._layers.length; a++)
          this._layers[a].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function(e) {
        return ri.prototype.addTo.call(this, e), this._expandIfNotCollapsed();
      },
      onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++)
          this._layers[e].layer.off("add remove", this._onLayerChange, this);
      },
      // @method addBaseLayer(layer: Layer, name: String): this
      // Adds a base layer (radio button entry) with the given name to the control.
      addBaseLayer: function(e, a) {
        return this._addLayer(e, a), this._map ? this._update() : this;
      },
      // @method addOverlay(layer: Layer, name: String): this
      // Adds an overlay (checkbox entry) with the given name to the control.
      addOverlay: function(e, a) {
        return this._addLayer(e, a, !0), this._map ? this._update() : this;
      },
      // @method removeLayer(layer: Layer): this
      // Remove the given layer from the control.
      removeLayer: function(e) {
        e.off("add remove", this._onLayerChange, this);
        var a = this._getLayer(f(e));
        return a && this._layers.splice(this._layers.indexOf(a), 1), this._map ? this._update() : this;
      },
      // @method expand(): this
      // Expand the control container if collapsed.
      expand: function() {
        Pe(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var e = this._map.getSize().y - (this._container.offsetTop + 50);
        return e < this._section.clientHeight ? (Pe(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : mt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      // @method collapse(): this
      // Collapse the control container if expanded.
      collapse: function() {
        return mt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function() {
        var e = "leaflet-control-layers", a = this._container = We("div", e), r = this.options.collapsed;
        a.setAttribute("aria-haspopup", !0), yn(a), $a(a);
        var l = this._section = We("section", e + "-list");
        r && (this._map.on("click", this.collapse, this), Ne(a, {
          mouseenter: this._expandSafely,
          mouseleave: this.collapse
        }, this));
        var d = this._layersLink = We("a", e + "-toggle", a);
        d.href = "#", d.title = "Layers", d.setAttribute("role", "button"), Ne(d, {
          keydown: function(u) {
            u.keyCode === 13 && this._expandSafely();
          },
          // Certain screen readers intercept the key event and instead send a click event
          click: function(u) {
            Et(u), this._expandSafely();
          }
        }, this), r || this.expand(), this._baseLayersList = We("div", e + "-base", l), this._separator = We("div", e + "-separator", l), this._overlaysList = We("div", e + "-overlays", l), a.appendChild(l);
      },
      _getLayer: function(e) {
        for (var a = 0; a < this._layers.length; a++)
          if (this._layers[a] && f(this._layers[a].layer) === e)
            return this._layers[a];
      },
      _addLayer: function(e, a, r) {
        this._map && e.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: e,
          name: a,
          overlay: r
        }), this.options.sortLayers && this._layers.sort(m(function(l, d) {
          return this.options.sortFunction(l.layer, d.layer, l.name, d.name);
        }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function() {
        if (!this._container)
          return this;
        Wn(this._baseLayersList), Wn(this._overlaysList), this._layerControlInputs = [];
        var e, a, r, l, d = 0;
        for (r = 0; r < this._layers.length; r++)
          l = this._layers[r], this._addItem(l), a = a || l.overlay, e = e || !l.overlay, d += l.overlay ? 0 : 1;
        return this.options.hideSingleBase && (e = e && d > 1, this._baseLayersList.style.display = e ? "" : "none"), this._separator.style.display = a && e ? "" : "none", this;
      },
      _onLayerChange: function(e) {
        this._handlingClick || this._update();
        var a = this._getLayer(f(e.target)), r = a.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
        r && this._map.fire(r, a);
      },
      // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
      _createRadioElement: function(e, a) {
        var r = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"' + (a ? ' checked="checked"' : "") + "/>", l = document.createElement("div");
        return l.innerHTML = r, l.firstChild;
      },
      _addItem: function(e) {
        var a = document.createElement("label"), r = this._map.hasLayer(e.layer), l;
        e.overlay ? (l = document.createElement("input"), l.type = "checkbox", l.className = "leaflet-control-layers-selector", l.defaultChecked = r) : l = this._createRadioElement("leaflet-base-layers_" + f(this), r), this._layerControlInputs.push(l), l.layerId = f(e.layer), Ne(l, "click", this._onInputClick, this);
        var d = document.createElement("span");
        d.innerHTML = " " + e.name;
        var u = document.createElement("span");
        a.appendChild(u), u.appendChild(l), u.appendChild(d);
        var y = e.overlay ? this._overlaysList : this._baseLayersList;
        return y.appendChild(a), this._checkDisabledLayers(), a;
      },
      _onInputClick: function() {
        if (!this._preventClick) {
          var e = this._layerControlInputs, a, r, l = [], d = [];
          this._handlingClick = !0;
          for (var u = e.length - 1; u >= 0; u--)
            a = e[u], r = this._getLayer(a.layerId).layer, a.checked ? l.push(r) : a.checked || d.push(r);
          for (u = 0; u < d.length; u++)
            this._map.hasLayer(d[u]) && this._map.removeLayer(d[u]);
          for (u = 0; u < l.length; u++)
            this._map.hasLayer(l[u]) || this._map.addLayer(l[u]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function() {
        for (var e = this._layerControlInputs, a, r, l = this._map.getZoom(), d = e.length - 1; d >= 0; d--)
          a = e[d], r = this._getLayer(a.layerId).layer, a.disabled = r.options.minZoom !== void 0 && l < r.options.minZoom || r.options.maxZoom !== void 0 && l > r.options.maxZoom;
      },
      _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function() {
        var e = this._section;
        this._preventClick = !0, Ne(e, "click", Et), this.expand();
        var a = this;
        setTimeout(function() {
          Qe(e, "click", Et), a._preventClick = !1;
        });
      }
    }), dc = function(e, a, r) {
      return new lo(e, a, r);
    }, Ua = ri.extend({
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
        var a = "leaflet-control-zoom", r = We("div", a + " leaflet-bar"), l = this.options;
        return this._zoomInButton = this._createButton(
          l.zoomInText,
          l.zoomInTitle,
          a + "-in",
          r,
          this._zoomIn
        ), this._zoomOutButton = this._createButton(
          l.zoomOutText,
          l.zoomOutTitle,
          a + "-out",
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
      _createButton: function(e, a, r, l, d) {
        var u = We("a", r, l);
        return u.innerHTML = e, u.href = "#", u.title = a, u.setAttribute("role", "button"), u.setAttribute("aria-label", a), yn(u), Ne(u, "click", Vi), Ne(u, "click", d, this), Ne(u, "click", this._refocusOnMap, this), u;
      },
      _updateDisabled: function() {
        var e = this._map, a = "leaflet-disabled";
        mt(this._zoomInButton, a), mt(this._zoomOutButton, a), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Pe(this._zoomOutButton, a), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Pe(this._zoomInButton, a), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    });
    De.mergeOptions({
      zoomControl: !0
    }), De.addInitHook(function() {
      this.options.zoomControl && (this.zoomControl = new Ua(), this.addControl(this.zoomControl));
    });
    var _c = function(e) {
      return new Ua(e);
    }, co = ri.extend({
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
        var a = "leaflet-control-scale", r = We("div", a), l = this.options;
        return this._addScales(l, a + "-line", r), e.on(l.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), r;
      },
      onRemove: function(e) {
        e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function(e, a, r) {
        e.metric && (this._mScale = We("div", a, r)), e.imperial && (this._iScale = We("div", a, r));
      },
      _update: function() {
        var e = this._map, a = e.getSize().y / 2, r = e.distance(
          e.containerPointToLatLng([0, a]),
          e.containerPointToLatLng([this.options.maxWidth, a])
        );
        this._updateScales(r);
      },
      _updateScales: function(e) {
        this.options.metric && e && this._updateMetric(e), this.options.imperial && e && this._updateImperial(e);
      },
      _updateMetric: function(e) {
        var a = this._getRoundNum(e), r = a < 1e3 ? a + " m" : a / 1e3 + " km";
        this._updateScale(this._mScale, r, a / e);
      },
      _updateImperial: function(e) {
        var a = e * 3.2808399, r, l, d;
        a > 5280 ? (r = a / 5280, l = this._getRoundNum(r), this._updateScale(this._iScale, l + " mi", l / r)) : (d = this._getRoundNum(a), this._updateScale(this._iScale, d + " ft", d / a));
      },
      _updateScale: function(e, a, r) {
        e.style.width = Math.round(this.options.maxWidth * r) + "px", e.innerHTML = a;
      },
      _getRoundNum: function(e) {
        var a = Math.pow(10, (Math.floor(e) + "").length - 1), r = e / a;
        return r = r >= 10 ? 10 : r >= 5 ? 5 : r >= 3 ? 3 : r >= 2 ? 2 : 1, a * r;
      }
    }), uc = function(e) {
      return new co(e);
    }, mc = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Za = ri.extend({
      // @section
      // @aka Control.Attribution options
      options: {
        position: "bottomright",
        // @option prefix: String|false = 'Leaflet'
        // The HTML text shown before the attributions. Pass `false` to disable.
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (ue.inlineSvg ? mc + " " : "") + "Leaflet</a>"
      },
      initialize: function(e) {
        N(this, e), this._attributions = {};
      },
      onAdd: function(e) {
        e.attributionControl = this, this._container = We("div", "leaflet-control-attribution"), yn(this._container);
        for (var a in e._layers)
          e._layers[a].getAttribution && this.addAttribution(e._layers[a].getAttribution());
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
          for (var a in this._attributions)
            this._attributions[a] && e.push(a);
          var r = [];
          this.options.prefix && r.push(this.options.prefix), e.length && r.push(e.join(", ")), this._container.innerHTML = r.join(' <span aria-hidden="true">|</span> ');
        }
      }
    });
    De.mergeOptions({
      attributionControl: !0
    }), De.addInitHook(function() {
      this.options.attributionControl && new Za().addTo(this);
    });
    var pc = function(e) {
      return new Za(e);
    };
    ri.Layers = lo, ri.Zoom = Ua, ri.Scale = co, ri.Attribution = Za, bn.layers = dc, bn.zoom = _c, bn.scale = uc, bn.attribution = pc;
    var ui = ge.extend({
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
    ui.addTo = function(e, a) {
      return e.addHandler(a, this), this;
    };
    var hc = { Events: ne }, _o = ue.touch ? "touchstart mousedown" : "mousedown", Ei = ce.extend({
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
      initialize: function(e, a, r, l) {
        N(this, l), this._element = e, this._dragStartTarget = a || e, this._preventOutline = r;
      },
      // @method enable()
      // Enables the dragging ability
      enable: function() {
        this._enabled || (Ne(this._dragStartTarget, _o, this._onDown, this), this._enabled = !0);
      },
      // @method disable()
      // Disables the dragging ability
      disable: function() {
        this._enabled && (Ei._dragging === this && this.finishDrag(!0), Qe(this._dragStartTarget, _o, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function(e) {
        if (this._enabled && (this._moved = !1, !Pa(this._element, "leaflet-zoom-anim"))) {
          if (e.touches && e.touches.length !== 1) {
            Ei._dragging === this && this.finishDrag();
            return;
          }
          if (!(Ei._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (Ei._dragging = this, this._preventOutline && Oa(this._element), La(), hn(), !this._moving)) {
            this.fire("down");
            var a = e.touches ? e.touches[0] : e, r = io(this._element);
            this._startPoint = new E(a.clientX, a.clientY), this._startPos = Zi(this._element), this._parentScale = Ra(r);
            var l = e.type === "mousedown";
            Ne(document, l ? "mousemove" : "touchmove", this._onMove, this), Ne(document, l ? "mouseup" : "touchend touchcancel", this._onUp, this);
          }
        }
      },
      _onMove: function(e) {
        if (this._enabled) {
          if (e.touches && e.touches.length > 1) {
            this._moved = !0;
            return;
          }
          var a = e.touches && e.touches.length === 1 ? e.touches[0] : e, r = new E(a.clientX, a.clientY)._subtract(this._startPoint);
          !r.x && !r.y || Math.abs(r.x) + Math.abs(r.y) < this.options.clickTolerance || (r.x /= this._parentScale.x, r.y /= this._parentScale.y, Et(e), this._moved || (this.fire("dragstart"), this._moved = !0, Pe(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Pe(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(r), this._moving = !0, this._lastEvent = e, this._updatePosition());
        }
      },
      _updatePosition: function() {
        var e = { originalEvent: this._lastEvent };
        this.fire("predrag", e), ht(this._element, this._newPos), this.fire("drag", e);
      },
      _onUp: function() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function(e) {
        mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Qe(document, "mousemove touchmove", this._onMove, this), Qe(document, "mouseup touchend touchcancel", this._onUp, this), Aa(), fn();
        var a = this._moved && this._moving;
        this._moving = !1, Ei._dragging = !1, a && this.fire("dragend", {
          noInertia: e,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
    function uo(e, a, r) {
      var l, d = [1, 4, 2, 8], u, y, k, S, K, oe, xe, Ie;
      for (u = 0, oe = e.length; u < oe; u++)
        e[u]._code = Gi(e[u], a);
      for (k = 0; k < 4; k++) {
        for (xe = d[k], l = [], u = 0, oe = e.length, y = oe - 1; u < oe; y = u++)
          S = e[u], K = e[y], S._code & xe ? K._code & xe || (Ie = Gn(K, S, xe, a, r), Ie._code = Gi(Ie, a), l.push(Ie)) : (K._code & xe && (Ie = Gn(K, S, xe, a, r), Ie._code = Gi(Ie, a), l.push(Ie)), l.push(S));
        e = l;
      }
      return e;
    }
    function mo(e, a) {
      var r, l, d, u, y, k, S, K, oe;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      ei(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var xe = Y([0, 0]), Ie = q(e), Ot = Ie.getNorthWest().distanceTo(Ie.getSouthWest()) * Ie.getNorthEast().distanceTo(Ie.getNorthWest());
      Ot < 1700 && (xe = Ha(e));
      var kt = e.length, ti = [];
      for (r = 0; r < kt; r++) {
        var Dt = Y(e[r]);
        ti.push(a.project(Y([Dt.lat - xe.lat, Dt.lng - xe.lng])));
      }
      for (k = S = K = 0, r = 0, l = kt - 1; r < kt; l = r++)
        d = ti[r], u = ti[l], y = d.y * u.x - u.y * d.x, S += (d.x + u.x) * y, K += (d.y + u.y) * y, k += y * 3;
      k === 0 ? oe = ti[0] : oe = [S / k, K / k];
      var dn = a.unproject(x(oe));
      return Y([dn.lat + xe.lat, dn.lng + xe.lng]);
    }
    function Ha(e) {
      for (var a = 0, r = 0, l = 0, d = 0; d < e.length; d++) {
        var u = Y(e[d]);
        a += u.lat, r += u.lng, l++;
      }
      return Y([a / l, r / l]);
    }
    var fc = {
      __proto__: null,
      clipPolygon: uo,
      polygonCenter: mo,
      centroid: Ha
    };
    function po(e, a) {
      if (!a || !e.length)
        return e.slice();
      var r = a * a;
      return e = bc(e, r), e = yc(e, r), e;
    }
    function ho(e, a, r) {
      return Math.sqrt(vn(e, a, r, !0));
    }
    function gc(e, a, r) {
      return vn(e, a, r);
    }
    function yc(e, a) {
      var r = e.length, l = typeof Uint8Array < "u" ? Uint8Array : Array, d = new l(r);
      d[0] = d[r - 1] = 1, Va(e, d, a, 0, r - 1);
      var u, y = [];
      for (u = 0; u < r; u++)
        d[u] && y.push(e[u]);
      return y;
    }
    function Va(e, a, r, l, d) {
      var u = 0, y, k, S;
      for (k = l + 1; k <= d - 1; k++)
        S = vn(e[k], e[l], e[d], !0), S > u && (y = k, u = S);
      u > r && (a[y] = 1, Va(e, a, r, l, y), Va(e, a, r, y, d));
    }
    function bc(e, a) {
      for (var r = [e[0]], l = 1, d = 0, u = e.length; l < u; l++)
        vc(e[l], e[d]) > a && (r.push(e[l]), d = l);
      return d < u - 1 && r.push(e[u - 1]), r;
    }
    var fo;
    function go(e, a, r, l, d) {
      var u = l ? fo : Gi(e, r), y = Gi(a, r), k, S, K;
      for (fo = y; ; ) {
        if (!(u | y))
          return [e, a];
        if (u & y)
          return !1;
        k = u || y, S = Gn(e, a, k, r, d), K = Gi(S, r), k === u ? (e = S, u = K) : (a = S, y = K);
      }
    }
    function Gn(e, a, r, l, d) {
      var u = a.x - e.x, y = a.y - e.y, k = l.min, S = l.max, K, oe;
      return r & 8 ? (K = e.x + u * (S.y - e.y) / y, oe = S.y) : r & 4 ? (K = e.x + u * (k.y - e.y) / y, oe = k.y) : r & 2 ? (K = S.x, oe = e.y + y * (S.x - e.x) / u) : r & 1 && (K = k.x, oe = e.y + y * (k.x - e.x) / u), new E(K, oe, d);
    }
    function Gi(e, a) {
      var r = 0;
      return e.x < a.min.x ? r |= 1 : e.x > a.max.x && (r |= 2), e.y < a.min.y ? r |= 4 : e.y > a.max.y && (r |= 8), r;
    }
    function vc(e, a) {
      var r = a.x - e.x, l = a.y - e.y;
      return r * r + l * l;
    }
    function vn(e, a, r, l) {
      var d = a.x, u = a.y, y = r.x - d, k = r.y - u, S = y * y + k * k, K;
      return S > 0 && (K = ((e.x - d) * y + (e.y - u) * k) / S, K > 1 ? (d = r.x, u = r.y) : K > 0 && (d += y * K, u += k * K)), y = e.x - d, k = e.y - u, l ? y * y + k * k : new E(d, u);
    }
    function ei(e) {
      return !W(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
    }
    function yo(e) {
      return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ei(e);
    }
    function bo(e, a) {
      var r, l, d, u, y, k, S, K;
      if (!e || e.length === 0)
        throw new Error("latlngs not passed");
      ei(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
      var oe = Y([0, 0]), xe = q(e), Ie = xe.getNorthWest().distanceTo(xe.getSouthWest()) * xe.getNorthEast().distanceTo(xe.getNorthWest());
      Ie < 1700 && (oe = Ha(e));
      var Ot = e.length, kt = [];
      for (r = 0; r < Ot; r++) {
        var ti = Y(e[r]);
        kt.push(a.project(Y([ti.lat - oe.lat, ti.lng - oe.lng])));
      }
      for (r = 0, l = 0; r < Ot - 1; r++)
        l += kt[r].distanceTo(kt[r + 1]) / 2;
      if (l === 0)
        K = kt[0];
      else
        for (r = 0, u = 0; r < Ot - 1; r++)
          if (y = kt[r], k = kt[r + 1], d = y.distanceTo(k), u += d, u > l) {
            S = (u - l) / d, K = [
              k.x - S * (k.x - y.x),
              k.y - S * (k.y - y.y)
            ];
            break;
          }
      var Dt = a.unproject(x(K));
      return Y([Dt.lat + oe.lat, Dt.lng + oe.lng]);
    }
    var xc = {
      __proto__: null,
      simplify: po,
      pointToSegmentDistance: ho,
      closestPointOnSegment: gc,
      clipSegment: go,
      _getEdgeIntersection: Gn,
      _getBitCode: Gi,
      _sqClosestPointOnSegment: vn,
      isFlat: ei,
      _flat: yo,
      polylineCenter: bo
    }, Ga = {
      project: function(e) {
        return new E(e.lng, e.lat);
      },
      unproject: function(e) {
        return new ee(e.y, e.x);
      },
      bounds: new Z([-180, -90], [180, 90])
    }, Ka = {
      R: 6378137,
      R_MINOR: 6356752314245179e-9,
      bounds: new Z([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
      project: function(e) {
        var a = Math.PI / 180, r = this.R, l = e.lat * a, d = this.R_MINOR / r, u = Math.sqrt(1 - d * d), y = u * Math.sin(l), k = Math.tan(Math.PI / 4 - l / 2) / Math.pow((1 - y) / (1 + y), u / 2);
        return l = -r * Math.log(Math.max(k, 1e-10)), new E(e.lng * a * r, l);
      },
      unproject: function(e) {
        for (var a = 180 / Math.PI, r = this.R, l = this.R_MINOR / r, d = Math.sqrt(1 - l * l), u = Math.exp(-e.y / r), y = Math.PI / 2 - 2 * Math.atan(u), k = 0, S = 0.1, K; k < 15 && Math.abs(S) > 1e-7; k++)
          K = d * Math.sin(y), K = Math.pow((1 - K) / (1 + K), d / 2), S = Math.PI / 2 - 2 * Math.atan(u * K) - y, y += S;
        return new ee(y * a, e.x * a / r);
      }
    }, wc = {
      __proto__: null,
      LonLat: Ga,
      Mercator: Ka,
      SphericalMercator: Ee
    }, kc = c({}, de, {
      code: "EPSG:3395",
      projection: Ka,
      transformation: function() {
        var e = 0.5 / (Math.PI * Ka.R);
        return pe(e, 0.5, -e, 0.5);
      }()
    }), vo = c({}, de, {
      code: "EPSG:4326",
      projection: Ga,
      transformation: pe(1 / 180, 1, -1 / 180, 0.5)
    }), Cc = c({}, me, {
      projection: Ga,
      transformation: pe(1, 0, -1, 0),
      scale: function(e) {
        return Math.pow(2, e);
      },
      zoom: function(e) {
        return Math.log(e) / Math.LN2;
      },
      distance: function(e, a) {
        var r = a.lng - e.lng, l = a.lat - e.lat;
        return Math.sqrt(r * r + l * l);
      },
      infinite: !0
    });
    me.Earth = de, me.EPSG3395 = kc, me.EPSG3857 = we, me.EPSG900913 = re, me.EPSG4326 = vo, me.Simple = Cc;
    var oi = ce.extend({
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
        var a = e.target;
        if (a.hasLayer(this)) {
          if (this._map = a, this._zoomAnimated = a._zoomAnimated, this.getEvents) {
            var r = this.getEvents();
            a.on(r, this), this.once("remove", function() {
              a.off(r, this);
            }, this);
          }
          this.onAdd(a), this.fire("add"), a.fire("layeradd", { layer: this });
        }
      }
    });
    De.include({
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the map
      addLayer: function(e) {
        if (!e._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var a = f(e);
        return this._layers[a] ? this : (this._layers[a] = e, e._mapToAdd = this, e.beforeAdd && e.beforeAdd(this), this.whenReady(e._layerAdd, e), this);
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the map.
      removeLayer: function(e) {
        var a = f(e);
        return this._layers[a] ? (this._loaded && e.onRemove(this), delete this._layers[a], this._loaded && (this.fire("layerremove", { layer: e }), e.fire("remove")), e._map = e._mapToAdd = null, this) : this;
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
      eachLayer: function(e, a) {
        for (var r in this._layers)
          e.call(a, this._layers[r]);
        return this;
      },
      _addLayers: function(e) {
        e = e ? W(e) ? e : [e] : [];
        for (var a = 0, r = e.length; a < r; a++)
          this.addLayer(e[a]);
      },
      _addZoomLimit: function(e) {
        (!isNaN(e.options.maxZoom) || !isNaN(e.options.minZoom)) && (this._zoomBoundLayers[f(e)] = e, this._updateZoomLevels());
      },
      _removeZoomLimit: function(e) {
        var a = f(e);
        this._zoomBoundLayers[a] && (delete this._zoomBoundLayers[a], this._updateZoomLevels());
      },
      _updateZoomLevels: function() {
        var e = 1 / 0, a = -1 / 0, r = this._getZoomSpan();
        for (var l in this._zoomBoundLayers) {
          var d = this._zoomBoundLayers[l].options;
          e = d.minZoom === void 0 ? e : Math.min(e, d.minZoom), a = d.maxZoom === void 0 ? a : Math.max(a, d.maxZoom);
        }
        this._layersMaxZoom = a === -1 / 0 ? void 0 : a, this._layersMinZoom = e === 1 / 0 ? void 0 : e, r !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    });
    var rn = oi.extend({
      initialize: function(e, a) {
        N(this, a), this._layers = {};
        var r, l;
        if (e)
          for (r = 0, l = e.length; r < l; r++)
            this.addLayer(e[r]);
      },
      // @method addLayer(layer: Layer): this
      // Adds the given layer to the group.
      addLayer: function(e) {
        var a = this.getLayerId(e);
        return this._layers[a] = e, this._map && this._map.addLayer(e), this;
      },
      // @method removeLayer(layer: Layer): this
      // Removes the given layer from the group.
      // @alternative
      // @method removeLayer(id: Number): this
      // Removes the layer with the given internal ID from the group.
      removeLayer: function(e) {
        var a = e in this._layers ? e : this.getLayerId(e);
        return this._map && this._layers[a] && this._map.removeLayer(this._layers[a]), delete this._layers[a], this;
      },
      // @method hasLayer(layer: Layer): Boolean
      // Returns `true` if the given layer is currently added to the group.
      // @alternative
      // @method hasLayer(id: Number): Boolean
      // Returns `true` if the given internal ID is currently added to the group.
      hasLayer: function(e) {
        var a = typeof e == "number" ? e : this.getLayerId(e);
        return a in this._layers;
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
        var a = Array.prototype.slice.call(arguments, 1), r, l;
        for (r in this._layers)
          l = this._layers[r], l[e] && l[e].apply(l, a);
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
      eachLayer: function(e, a) {
        for (var r in this._layers)
          e.call(a, this._layers[r]);
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
    }), Sc = function(e, a) {
      return new rn(e, a);
    }, yi = rn.extend({
      addLayer: function(e) {
        return this.hasLayer(e) ? this : (e.addEventParent(this), rn.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
      },
      removeLayer: function(e) {
        return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), rn.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
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
        for (var a in this._layers) {
          var r = this._layers[a];
          e.extend(r.getBounds ? r.getBounds() : r.getLatLng());
        }
        return e;
      }
    }), zc = function(e, a) {
      return new yi(e, a);
    }, on = ge.extend({
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
        N(this, e);
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
      _createIcon: function(e, a) {
        var r = this._getIconUrl(e);
        if (!r) {
          if (e === "icon")
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var l = this._createImg(r, a && a.tagName === "IMG" ? a : null);
        return this._setIconStyles(l, e), (this.options.crossOrigin || this.options.crossOrigin === "") && (l.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), l;
      },
      _setIconStyles: function(e, a) {
        var r = this.options, l = r[a + "Size"];
        typeof l == "number" && (l = [l, l]);
        var d = x(l), u = x(a === "shadow" && r.shadowAnchor || r.iconAnchor || d && d.divideBy(2, !0));
        e.className = "leaflet-marker-" + a + " " + (r.className || ""), u && (e.style.marginLeft = -u.x + "px", e.style.marginTop = -u.y + "px"), d && (e.style.width = d.x + "px", e.style.height = d.y + "px");
      },
      _createImg: function(e, a) {
        return a = a || document.createElement("img"), a.src = e, a;
      },
      _getIconUrl: function(e) {
        return ue.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
      }
    });
    function Nc(e) {
      return new on(e);
    }
    var xn = on.extend({
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
        return typeof xn.imagePath != "string" && (xn.imagePath = this._detectIconPath()), (this.options.imagePath || xn.imagePath) + on.prototype._getIconUrl.call(this, e);
      },
      _stripUrl: function(e) {
        var a = function(r, l, d) {
          var u = l.exec(r);
          return u && u[d];
        };
        return e = a(e, /^url\((['"])?(.+)\1\)$/, 2), e && a(e, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function() {
        var e = We("div", "leaflet-default-icon-path", document.body), a = pn(e, "background-image") || pn(e, "backgroundImage");
        if (document.body.removeChild(e), a = this._stripUrl(a), a)
          return a;
        var r = document.querySelector('link[href$="leaflet.css"]');
        return r ? r.href.substring(0, r.href.length - 11 - 1) : "";
      }
    }), xo = ui.extend({
      initialize: function(e) {
        this._marker = e;
      },
      addHooks: function() {
        var e = this._marker._icon;
        this._draggable || (this._draggable = new Ei(e, e, !0)), this._draggable.on({
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
        }, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function(e) {
        var a = this._marker, r = a._map, l = this._marker.options.autoPanSpeed, d = this._marker.options.autoPanPadding, u = Zi(a._icon), y = r.getPixelBounds(), k = r.getPixelOrigin(), S = z(
          y.min._subtract(k).add(d),
          y.max._subtract(k).subtract(d)
        );
        if (!S.contains(u)) {
          var K = x(
            (Math.max(S.max.x, u.x) - S.max.x) / (y.max.x - S.max.x) - (Math.min(S.min.x, u.x) - S.min.x) / (y.min.x - S.min.x),
            (Math.max(S.max.y, u.y) - S.max.y) / (y.max.y - S.max.y) - (Math.min(S.min.y, u.y) - S.min.y) / (y.min.y - S.min.y)
          ).multiplyBy(l);
          r.panBy(K, { animate: !1 }), this._draggable._newPos._add(K), this._draggable._startPos._add(K), ht(a._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = F(this._adjustPan.bind(this, e));
        }
      },
      _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function(e) {
        this._marker.options.autoPan && (Q(this._panRequest), this._panRequest = F(this._adjustPan.bind(this, e)));
      },
      _onDrag: function(e) {
        var a = this._marker, r = a._shadow, l = Zi(a._icon), d = a._map.layerPointToLatLng(l);
        r && ht(r, l), a._latlng = d, e.latlng = d, e.oldLatLng = this._oldLatLng, a.fire("move", e).fire("drag", e);
      },
      _onDragEnd: function(e) {
        Q(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
      }
    }), Kn = oi.extend({
      // @section
      // @aka Marker options
      options: {
        // @option icon: Icon = *
        // Icon instance to use for rendering the marker.
        // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
        // If not specified, a common instance of `L.Icon.Default` is used.
        icon: new xn(),
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
      initialize: function(e, a) {
        N(this, a), this._latlng = Y(e);
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
        var a = this._latlng;
        return this._latlng = Y(e), this.update(), this.fire("move", { oldLatLng: a, latlng: this._latlng });
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
        var e = this.options, a = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), r = e.icon.createIcon(this._icon), l = !1;
        r !== this._icon && (this._icon && this._removeIcon(), l = !0, e.title && (r.title = e.title), r.tagName === "IMG" && (r.alt = e.alt || "")), Pe(r, a), e.keyboard && (r.tabIndex = "0", r.setAttribute("role", "button")), this._icon = r, e.riseOnHover && this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && Ne(r, "focus", this._panOnFocus, this);
        var d = e.icon.createShadow(this._shadow), u = !1;
        d !== this._shadow && (this._removeShadow(), u = !0), d && (Pe(d, a), d.alt = ""), this._shadow = d, e.opacity < 1 && this._updateOpacity(), l && this.getPane().appendChild(this._icon), this._initInteraction(), d && u && this.getPane(e.shadowPane).appendChild(this._shadow);
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
        this._icon && ht(this._icon, e), this._shadow && ht(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function(e) {
        this._icon && (this._icon.style.zIndex = this._zIndex + e);
      },
      _animateZoom: function(e) {
        var a = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
        this._setPos(a);
      },
      _initInteraction: function() {
        if (this.options.interactive && (Pe(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), xo)) {
          var e = this.options.draggable;
          this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new xo(this), e && this.dragging.enable();
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
          var a = this.options.icon.options, r = a.iconSize ? x(a.iconSize) : x(0, 0), l = a.iconAnchor ? x(a.iconAnchor) : x(0, 0);
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
    function Tc(e, a) {
      return new Kn(e, a);
    }
    var Ii = oi.extend({
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
        return N(this, e), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && e && Object.prototype.hasOwnProperty.call(e, "weight") && this._updateBounds()), this;
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
    }), qn = Ii.extend({
      // @section
      // @aka CircleMarker options
      options: {
        fill: !0,
        // @option radius: Number = 10
        // Radius of the circle marker, in pixels
        radius: 10
      },
      initialize: function(e, a) {
        N(this, a), this._latlng = Y(e), this._radius = this.options.radius;
      },
      // @method setLatLng(latLng: LatLng): this
      // Sets the position of a circle marker to a new location.
      setLatLng: function(e) {
        var a = this._latlng;
        return this._latlng = Y(e), this.redraw(), this.fire("move", { oldLatLng: a, latlng: this._latlng });
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
        var a = e && e.radius || this._radius;
        return Ii.prototype.setStyle.call(this, e), this.setRadius(a), this;
      },
      _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function() {
        var e = this._radius, a = this._radiusY || e, r = this._clickTolerance(), l = [e + r, a + r];
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
    function jc(e, a) {
      return new qn(e, a);
    }
    var qa = qn.extend({
      initialize: function(e, a, r) {
        if (typeof a == "number" && (a = c({}, r, { radius: a })), N(this, a), this._latlng = Y(e), isNaN(this.options.radius))
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
      setStyle: Ii.prototype.setStyle,
      _project: function() {
        var e = this._latlng.lng, a = this._latlng.lat, r = this._map, l = r.options.crs;
        if (l.distance === de.distance) {
          var d = Math.PI / 180, u = this._mRadius / de.R / d, y = r.project([a + u, e]), k = r.project([a - u, e]), S = y.add(k).divideBy(2), K = r.unproject(S).lat, oe = Math.acos((Math.cos(u * d) - Math.sin(a * d) * Math.sin(K * d)) / (Math.cos(a * d) * Math.cos(K * d))) / d;
          (isNaN(oe) || oe === 0) && (oe = u / Math.cos(Math.PI / 180 * a)), this._point = S.subtract(r.getPixelOrigin()), this._radius = isNaN(oe) ? 0 : S.x - r.project([K, e - oe]).x, this._radiusY = S.y - y.y;
        } else {
          var xe = l.unproject(l.project(this._latlng).subtract([this._mRadius, 0]));
          this._point = r.latLngToLayerPoint(this._latlng), this._radius = this._point.x - r.latLngToLayerPoint(xe).x;
        }
        this._updateBounds();
      }
    });
    function Pc(e, a, r) {
      return new qa(e, a, r);
    }
    var bi = Ii.extend({
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
      initialize: function(e, a) {
        N(this, a), this._setLatLngs(e);
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
        for (var a = 1 / 0, r = null, l = vn, d, u, y = 0, k = this._parts.length; y < k; y++)
          for (var S = this._parts[y], K = 1, oe = S.length; K < oe; K++) {
            d = S[K - 1], u = S[K];
            var xe = l(e, d, u, !0);
            xe < a && (a = xe, r = l(e, d, u));
          }
        return r && (r.distance = Math.sqrt(a)), r;
      },
      // @method getCenter(): LatLng
      // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
      getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return bo(this._defaultShape(), this._map.options.crs);
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
      addLatLng: function(e, a) {
        return a = a || this._defaultShape(), e = Y(e), a.push(e), this._bounds.extend(e), this.redraw();
      },
      _setLatLngs: function(e) {
        this._bounds = new H(), this._latlngs = this._convertLatLngs(e);
      },
      _defaultShape: function() {
        return ei(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
      _convertLatLngs: function(e) {
        for (var a = [], r = ei(e), l = 0, d = e.length; l < d; l++)
          r ? (a[l] = Y(e[l]), this._bounds.extend(a[l])) : a[l] = this._convertLatLngs(e[l]);
        return a;
      },
      _project: function() {
        var e = new Z();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
      },
      _updateBounds: function() {
        var e = this._clickTolerance(), a = new E(e, e);
        this._rawPxBounds && (this._pxBounds = new Z([
          this._rawPxBounds.min.subtract(a),
          this._rawPxBounds.max.add(a)
        ]));
      },
      // recursively turns latlngs into a set of rings with projected coordinates
      _projectLatlngs: function(e, a, r) {
        var l = e[0] instanceof ee, d = e.length, u, y;
        if (l) {
          for (y = [], u = 0; u < d; u++)
            y[u] = this._map.latLngToLayerPoint(e[u]), r.extend(y[u]);
          a.push(y);
        } else
          for (u = 0; u < d; u++)
            this._projectLatlngs(e[u], a, r);
      },
      // clip polyline by renderer bounds so that we have less to render for performance
      _clipPoints: function() {
        var e = this._renderer._bounds;
        if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var a = this._parts, r, l, d, u, y, k, S;
          for (r = 0, d = 0, u = this._rings.length; r < u; r++)
            for (S = this._rings[r], l = 0, y = S.length; l < y - 1; l++)
              k = go(S[l], S[l + 1], e, l, !0), k && (a[d] = a[d] || [], a[d].push(k[0]), (k[1] !== S[l + 1] || l === y - 2) && (a[d].push(k[1]), d++));
        }
      },
      // simplify each clipped part of the polyline for performance
      _simplifyPoints: function() {
        for (var e = this._parts, a = this.options.smoothFactor, r = 0, l = e.length; r < l; r++)
          e[r] = po(e[r], a);
      },
      _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function() {
        this._renderer._updatePoly(this);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e, a) {
        var r, l, d, u, y, k, S = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(e))
          return !1;
        for (r = 0, u = this._parts.length; r < u; r++)
          for (k = this._parts[r], l = 0, y = k.length, d = y - 1; l < y; d = l++)
            if (!(!a && l === 0) && ho(e, k[d], k[l]) <= S)
              return !0;
        return !1;
      }
    });
    function Ec(e, a) {
      return new bi(e, a);
    }
    bi._flat = yo;
    var sn = bi.extend({
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
        return mo(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function(e) {
        var a = bi.prototype._convertLatLngs.call(this, e), r = a.length;
        return r >= 2 && a[0] instanceof ee && a[0].equals(a[r - 1]) && a.pop(), a;
      },
      _setLatLngs: function(e) {
        bi.prototype._setLatLngs.call(this, e), ei(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function() {
        return ei(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function() {
        var e = this._renderer._bounds, a = this.options.weight, r = new E(a, a);
        if (e = new Z(e.min.subtract(r), e.max.add(r)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var l = 0, d = this._rings.length, u; l < d; l++)
            u = uo(this._rings[l], e, !0), u.length && this._parts.push(u);
        }
      },
      _updatePath: function() {
        this._renderer._updatePoly(this, !0);
      },
      // Needed by the `Canvas` renderer for interactivity
      _containsPoint: function(e) {
        var a = !1, r, l, d, u, y, k, S, K;
        if (!this._pxBounds || !this._pxBounds.contains(e))
          return !1;
        for (u = 0, S = this._parts.length; u < S; u++)
          for (r = this._parts[u], y = 0, K = r.length, k = K - 1; y < K; k = y++)
            l = r[y], d = r[k], l.y > e.y != d.y > e.y && e.x < (d.x - l.x) * (e.y - l.y) / (d.y - l.y) + l.x && (a = !a);
        return a || bi.prototype._containsPoint.call(this, e, !0);
      }
    });
    function Ic(e, a) {
      return new sn(e, a);
    }
    var vi = yi.extend({
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
      initialize: function(e, a) {
        N(this, a), this._layers = {}, e && this.addData(e);
      },
      // @method addData( <GeoJSON> data ): this
      // Adds a GeoJSON object to the layer.
      addData: function(e) {
        var a = W(e) ? e : e.features, r, l, d;
        if (a) {
          for (r = 0, l = a.length; r < l; r++)
            d = a[r], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(d);
          return this;
        }
        var u = this.options;
        if (u.filter && !u.filter(e))
          return this;
        var y = Yn(e, u);
        return y ? (y.feature = Qn(e), y.defaultOptions = y.options, this.resetStyle(y), u.onEachFeature && u.onEachFeature(e, y), this.addLayer(y)) : this;
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
        return this.eachLayer(function(a) {
          this._setLayerStyle(a, e);
        }, this);
      },
      _setLayerStyle: function(e, a) {
        e.setStyle && (typeof a == "function" && (a = a(e.feature)), e.setStyle(a));
      }
    });
    function Yn(e, a) {
      var r = e.type === "Feature" ? e.geometry : e, l = r ? r.coordinates : null, d = [], u = a && a.pointToLayer, y = a && a.coordsToLatLng || Ya, k, S, K, oe;
      if (!l && !r)
        return null;
      switch (r.type) {
        case "Point":
          return k = y(l), wo(u, e, k, a);
        case "MultiPoint":
          for (K = 0, oe = l.length; K < oe; K++)
            k = y(l[K]), d.push(wo(u, e, k, a));
          return new yi(d);
        case "LineString":
        case "MultiLineString":
          return S = Jn(l, r.type === "LineString" ? 0 : 1, y), new bi(S, a);
        case "Polygon":
        case "MultiPolygon":
          return S = Jn(l, r.type === "Polygon" ? 1 : 2, y), new sn(S, a);
        case "GeometryCollection":
          for (K = 0, oe = r.geometries.length; K < oe; K++) {
            var xe = Yn({
              geometry: r.geometries[K],
              type: "Feature",
              properties: e.properties
            }, a);
            xe && d.push(xe);
          }
          return new yi(d);
        case "FeatureCollection":
          for (K = 0, oe = r.features.length; K < oe; K++) {
            var Ie = Yn(r.features[K], a);
            Ie && d.push(Ie);
          }
          return new yi(d);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function wo(e, a, r, l) {
      return e ? e(a, r) : new Kn(r, l && l.markersInheritOptions && l);
    }
    function Ya(e) {
      return new ee(e[1], e[0], e[2]);
    }
    function Jn(e, a, r) {
      for (var l = [], d = 0, u = e.length, y; d < u; d++)
        y = a ? Jn(e[d], a - 1, r) : (r || Ya)(e[d]), l.push(y);
      return l;
    }
    function Ja(e, a) {
      return e = Y(e), e.alt !== void 0 ? [C(e.lng, a), C(e.lat, a), C(e.alt, a)] : [C(e.lng, a), C(e.lat, a)];
    }
    function Xn(e, a, r, l) {
      for (var d = [], u = 0, y = e.length; u < y; u++)
        d.push(a ? Xn(e[u], ei(e[u]) ? 0 : a - 1, r, l) : Ja(e[u], l));
      return !a && r && d.length > 0 && d.push(d[0].slice()), d;
    }
    function ln(e, a) {
      return e.feature ? c({}, e.feature, { geometry: a }) : Qn(a);
    }
    function Qn(e) {
      return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
        type: "Feature",
        properties: {},
        geometry: e
      };
    }
    var Xa = {
      toGeoJSON: function(e) {
        return ln(this, {
          type: "Point",
          coordinates: Ja(this.getLatLng(), e)
        });
      }
    };
    Kn.include(Xa), qa.include(Xa), qn.include(Xa), bi.include({
      toGeoJSON: function(e) {
        var a = !ei(this._latlngs), r = Xn(this._latlngs, a ? 1 : 0, !1, e);
        return ln(this, {
          type: (a ? "Multi" : "") + "LineString",
          coordinates: r
        });
      }
    }), sn.include({
      toGeoJSON: function(e) {
        var a = !ei(this._latlngs), r = a && !ei(this._latlngs[0]), l = Xn(this._latlngs, r ? 2 : a ? 1 : 0, !0, e);
        return a || (l = [l]), ln(this, {
          type: (r ? "Multi" : "") + "Polygon",
          coordinates: l
        });
      }
    }), rn.include({
      toMultiPoint: function(e) {
        var a = [];
        return this.eachLayer(function(r) {
          a.push(r.toGeoJSON(e).geometry.coordinates);
        }), ln(this, {
          type: "MultiPoint",
          coordinates: a
        });
      },
      // @method toGeoJSON(precision?: Number|false): Object
      // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
      // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
      toGeoJSON: function(e) {
        var a = this.feature && this.feature.geometry && this.feature.geometry.type;
        if (a === "MultiPoint")
          return this.toMultiPoint(e);
        var r = a === "GeometryCollection", l = [];
        return this.eachLayer(function(d) {
          if (d.toGeoJSON) {
            var u = d.toGeoJSON(e);
            if (r)
              l.push(u.geometry);
            else {
              var y = Qn(u);
              y.type === "FeatureCollection" ? l.push.apply(l, y.features) : l.push(y);
            }
          }
        }), r ? ln(this, {
          geometries: l,
          type: "GeometryCollection"
        }) : {
          type: "FeatureCollection",
          features: l
        };
      }
    });
    function ko(e, a) {
      return new vi(e, a);
    }
    var Lc = ko, ea = oi.extend({
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
      initialize: function(e, a, r) {
        this._url = e, this._bounds = q(a), N(this, r);
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
        return this._map && nn(this._image), this;
      },
      // @method bringToBack(): this
      // Brings the layer to the bottom of all overlays.
      bringToBack: function() {
        return this._map && an(this._image), this;
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
        var e = this._url.tagName === "IMG", a = this._image = e ? this._url : We("img");
        if (Pe(a, "leaflet-image-layer"), this._zoomAnimated && Pe(a, "leaflet-zoom-animated"), this.options.className && Pe(a, this.options.className), a.onselectstart = v, a.onmousemove = v, a.onload = m(this.fire, this, "load"), a.onerror = m(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
          this._url = a.src;
          return;
        }
        a.src = this._url, a.alt = this.options.alt;
      },
      _animateZoom: function(e) {
        var a = this._map.getZoomScale(e.zoom), r = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
        Ui(this._image, r, a);
      },
      _reset: function() {
        var e = this._image, a = new Z(
          this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
          this._map.latLngToLayerPoint(this._bounds.getSouthEast())
        ), r = a.getSize();
        ht(e, a.min), e.style.width = r.x + "px", e.style.height = r.y + "px";
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
    }), Ac = function(e, a, r) {
      return new ea(e, a, r);
    }, Co = ea.extend({
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
        var e = this._url.tagName === "VIDEO", a = this._image = e ? this._url : We("video");
        if (Pe(a, "leaflet-image-layer"), this._zoomAnimated && Pe(a, "leaflet-zoom-animated"), this.options.className && Pe(a, this.options.className), a.onselectstart = v, a.onmousemove = v, a.onloadeddata = m(this.fire, this, "load"), e) {
          for (var r = a.getElementsByTagName("source"), l = [], d = 0; d < r.length; d++)
            l.push(r[d].src);
          this._url = r.length > 0 ? l : [a.src];
          return;
        }
        W(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(a.style, "objectFit") && (a.style.objectFit = "fill"), a.autoplay = !!this.options.autoplay, a.loop = !!this.options.loop, a.muted = !!this.options.muted, a.playsInline = !!this.options.playsInline;
        for (var u = 0; u < this._url.length; u++) {
          var y = We("source");
          y.src = this._url[u], a.appendChild(y);
        }
      }
      // @method getElement(): HTMLVideoElement
      // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
      // used by this overlay.
    });
    function Mc(e, a, r) {
      return new Co(e, a, r);
    }
    var So = ea.extend({
      _initImage: function() {
        var e = this._image = this._url;
        Pe(e, "leaflet-image-layer"), this._zoomAnimated && Pe(e, "leaflet-zoom-animated"), this.options.className && Pe(e, this.options.className), e.onselectstart = v, e.onmousemove = v;
      }
      // @method getElement(): SVGElement
      // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
      // used by this overlay.
    });
    function Oc(e, a, r) {
      return new So(e, a, r);
    }
    var mi = oi.extend({
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
      initialize: function(e, a) {
        e && (e instanceof ee || W(e)) ? (this._latlng = Y(e), N(this, a)) : (N(this, e), this._source = a), this.options.content && (this._content = this.options.content);
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
        e._fadeAnimated ? (Qt(this._container, 0), this._removeTimeout = setTimeout(m(lt, void 0, this._container), 200)) : lt(this._container), this.options.interactive && (mt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
        return this._map && nn(this._container), this;
      },
      // @method bringToBack: this
      // Brings this overlay to the back of other overlays (in the same map pane).
      bringToBack: function() {
        return this._map && an(this._container), this;
      },
      // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
      _prepareOpen: function(e) {
        var a = this._source;
        if (!a._map)
          return !1;
        if (a instanceof yi) {
          a = null;
          var r = this._source._layers;
          for (var l in r)
            if (r[l]._map) {
              a = r[l];
              break;
            }
          if (!a)
            return !1;
          this._source = a;
        }
        if (!e)
          if (a.getCenter)
            e = a.getCenter();
          else if (a.getLatLng)
            e = a.getLatLng();
          else if (a.getBounds)
            e = a.getBounds().getCenter();
          else
            throw new Error("Unable to get source layer LatLng.");
        return this.setLatLng(e), this._map && this.update(), !0;
      },
      _updateContent: function() {
        if (this._content) {
          var e = this._contentNode, a = typeof this._content == "function" ? this._content(this._source || this) : this._content;
          if (typeof a == "string")
            e.innerHTML = a;
          else {
            for (; e.hasChildNodes(); )
              e.removeChild(e.firstChild);
            e.appendChild(a);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function() {
        if (this._map) {
          var e = this._map.latLngToLayerPoint(this._latlng), a = x(this.options.offset), r = this._getAnchor();
          this._zoomAnimated ? ht(this._container, e.add(r)) : a = a.add(e).add(r);
          var l = this._containerBottom = -a.y, d = this._containerLeft = -Math.round(this._containerWidth / 2) + a.x;
          this._container.style.bottom = l + "px", this._container.style.left = d + "px";
        }
      },
      _getAnchor: function() {
        return [0, 0];
      }
    });
    De.include({
      _initOverlay: function(e, a, r, l) {
        var d = a;
        return d instanceof e || (d = new e(l).setContent(a)), r && d.setLatLng(r), d;
      }
    }), oi.include({
      _initOverlay: function(e, a, r, l) {
        var d = r;
        return d instanceof e ? (N(d, l), d._source = this) : (d = a && !l ? a : new e(l, this), d.setContent(r)), d;
      }
    });
    var ta = mi.extend({
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
        return e = arguments.length ? e : this._source._map, !e.hasLayer(this) && e._popup && e._popup.options.autoClose && e.removeLayer(e._popup), e._popup = this, mi.prototype.openOn.call(this, e);
      },
      onAdd: function(e) {
        mi.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ii || this._source.on("preclick", Hi));
      },
      onRemove: function(e) {
        mi.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ii || this._source.off("preclick", Hi));
      },
      getEvents: function() {
        var e = mi.prototype.getEvents.call(this);
        return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
      },
      _initLayout: function() {
        var e = "leaflet-popup", a = this._container = We(
          "div",
          e + " " + (this.options.className || "") + " leaflet-zoom-animated"
        ), r = this._wrapper = We("div", e + "-content-wrapper", a);
        if (this._contentNode = We("div", e + "-content", r), yn(a), $a(this._contentNode), Ne(a, "contextmenu", Hi), this._tipContainer = We("div", e + "-tip-container", a), this._tip = We("div", e + "-tip", this._tipContainer), this.options.closeButton) {
          var l = this._closeButton = We("a", e + "-close-button", a);
          l.setAttribute("role", "button"), l.setAttribute("aria-label", "Close popup"), l.href = "#close", l.innerHTML = '<span aria-hidden="true">&#215;</span>', Ne(l, "click", function(d) {
            Et(d), this.close();
          }, this);
        }
      },
      _updateLayout: function() {
        var e = this._contentNode, a = e.style;
        a.width = "", a.whiteSpace = "nowrap";
        var r = e.offsetWidth;
        r = Math.min(r, this.options.maxWidth), r = Math.max(r, this.options.minWidth), a.width = r + 1 + "px", a.whiteSpace = "", a.height = "";
        var l = e.offsetHeight, d = this.options.maxHeight, u = "leaflet-popup-scrolled";
        d && l > d ? (a.height = d + "px", Pe(e, u)) : mt(e, u), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function(e) {
        var a = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), r = this._getAnchor();
        ht(this._container, a.add(r));
      },
      _adjustPan: function() {
        if (this.options.autoPan) {
          if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
            this._autopanning = !1;
            return;
          }
          var e = this._map, a = parseInt(pn(this._container, "marginBottom"), 10) || 0, r = this._container.offsetHeight + a, l = this._containerWidth, d = new E(this._containerLeft, -r - this._containerBottom);
          d._add(Zi(this._container));
          var u = e.layerPointToContainerPoint(d), y = x(this.options.autoPanPadding), k = x(this.options.autoPanPaddingTopLeft || y), S = x(this.options.autoPanPaddingBottomRight || y), K = e.getSize(), oe = 0, xe = 0;
          u.x + l + S.x > K.x && (oe = u.x + l - K.x + S.x), u.x - oe - k.x < 0 && (oe = u.x - k.x), u.y + r + S.y > K.y && (xe = u.y + r - K.y + S.y), u.y - xe - k.y < 0 && (xe = u.y - k.y), (oe || xe) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([oe, xe]));
        }
      },
      _getAnchor: function() {
        return x(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    }), Rc = function(e, a) {
      return new ta(e, a);
    };
    De.mergeOptions({
      closePopupOnClick: !0
    }), De.include({
      // @method openPopup(popup: Popup): this
      // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
      // @alternative
      // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
      // Creates a popup with the specified content and options and opens it in the given point on a map.
      openPopup: function(e, a, r) {
        return this._initOverlay(ta, e, a, r).openOn(this), this;
      },
      // @method closePopup(popup?: Popup): this
      // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
      closePopup: function(e) {
        return e = arguments.length ? e : this._popup, e && e.close(), this;
      }
    }), oi.include({
      // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
      // Binds a popup to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindPopup: function(e, a) {
        return this._popup = this._initOverlay(ta, this._popup, e, a), this._popupHandlersAdded || (this.on({
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
        return this._popup && (this instanceof yi || (this._popup._source = this), this._popup._prepareOpen(e || this._latlng) && this._popup.openOn(this._map)), this;
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
          Vi(e);
          var a = e.layer || e.target;
          if (this._popup._source === a && !(a instanceof Ii)) {
            this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(e.latlng);
            return;
          }
          this._popup._source = a, this.openPopup(e.latlng);
        }
      },
      _movePopup: function(e) {
        this._popup.setLatLng(e.latlng);
      },
      _onKeyPress: function(e) {
        e.originalEvent.keyCode === 13 && this._openPopup(e);
      }
    });
    var ia = mi.extend({
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
        mi.prototype.onAdd.call(this, e), this.setOpacity(this.options.opacity), e.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
      },
      onRemove: function(e) {
        mi.prototype.onRemove.call(this, e), e.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
      },
      getEvents: function() {
        var e = mi.prototype.getEvents.call(this);
        return this.options.permanent || (e.preclick = this.close), e;
      },
      _initLayout: function() {
        var e = "leaflet-tooltip", a = e + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = We("div", a), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + f(this));
      },
      _updateLayout: function() {
      },
      _adjustPan: function() {
      },
      _setPosition: function(e) {
        var a, r, l = this._map, d = this._container, u = l.latLngToContainerPoint(l.getCenter()), y = l.layerPointToContainerPoint(e), k = this.options.direction, S = d.offsetWidth, K = d.offsetHeight, oe = x(this.options.offset), xe = this._getAnchor();
        k === "top" ? (a = S / 2, r = K) : k === "bottom" ? (a = S / 2, r = 0) : k === "center" ? (a = S / 2, r = K / 2) : k === "right" ? (a = 0, r = K / 2) : k === "left" ? (a = S, r = K / 2) : y.x < u.x ? (k = "right", a = 0, r = K / 2) : (k = "left", a = S + (oe.x + xe.x) * 2, r = K / 2), e = e.subtract(x(a, r, !0)).add(oe).add(xe), mt(d, "leaflet-tooltip-right"), mt(d, "leaflet-tooltip-left"), mt(d, "leaflet-tooltip-top"), mt(d, "leaflet-tooltip-bottom"), Pe(d, "leaflet-tooltip-" + k), ht(d, e);
      },
      _updatePosition: function() {
        var e = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(e);
      },
      setOpacity: function(e) {
        this.options.opacity = e, this._container && Qt(this._container, e);
      },
      _animateZoom: function(e) {
        var a = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
        this._setPosition(a);
      },
      _getAnchor: function() {
        return x(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    }), Bc = function(e, a) {
      return new ia(e, a);
    };
    De.include({
      // @method openTooltip(tooltip: Tooltip): this
      // Opens the specified tooltip.
      // @alternative
      // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
      // Creates a tooltip with the specified content and options and open it.
      openTooltip: function(e, a, r) {
        return this._initOverlay(ia, e, a, r).openOn(this), this;
      },
      // @method closeTooltip(tooltip: Tooltip): this
      // Closes the tooltip given as parameter.
      closeTooltip: function(e) {
        return e.close(), this;
      }
    }), oi.include({
      // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
      // Binds a tooltip to the layer with the passed `content` and sets up the
      // necessary event listeners. If a `Function` is passed it will receive
      // the layer as the first argument and should return a `String` or `HTMLElement`.
      bindTooltip: function(e, a) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ia, this._tooltip, e, a), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      // @method unbindTooltip(): this
      // Removes the tooltip previously bound with `bindTooltip`.
      unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function(e) {
        if (!(!e && this._tooltipHandlersAdded)) {
          var a = e ? "off" : "on", r = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
          this._tooltip.options.permanent ? r.add = this._openTooltip : (r.mouseover = this._openTooltip, r.mouseout = this.closeTooltip, r.click = this._openTooltip, this._map ? this._addFocusListeners() : r.add = this._addFocusListeners), this._tooltip.options.sticky && (r.mousemove = this._moveTooltip), this[a](r), this._tooltipHandlersAdded = !e;
        }
      },
      // @method openTooltip(latlng?: LatLng): this
      // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
      openTooltip: function(e) {
        return this._tooltip && (this instanceof yi || (this._tooltip._source = this), this._tooltip._prepareOpen(e) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
        var a = typeof e.getElement == "function" && e.getElement();
        a && (Ne(a, "focus", function() {
          this._tooltip._source = e, this.openTooltip();
        }, this), Ne(a, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function(e) {
        var a = typeof e.getElement == "function" && e.getElement();
        a && a.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function(e) {
        if (!(!this._tooltip || !this._map)) {
          if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
            this._openOnceFlag = !0;
            var a = this;
            this._map.once("moveend", function() {
              a._openOnceFlag = !1, a._openTooltip(e);
            });
            return;
          }
          this._tooltip._source = e.layer || e.target, this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
        }
      },
      _moveTooltip: function(e) {
        var a = e.latlng, r, l;
        this._tooltip.options.sticky && e.originalEvent && (r = this._map.mouseEventToContainerPoint(e.originalEvent), l = this._map.containerPointToLayerPoint(r), a = this._map.layerPointToLatLng(l)), this._tooltip.setLatLng(a);
      }
    });
    var zo = on.extend({
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
        var a = e && e.tagName === "DIV" ? e : document.createElement("div"), r = this.options;
        if (r.html instanceof Element ? (Wn(a), a.appendChild(r.html)) : a.innerHTML = r.html !== !1 ? r.html : "", r.bgPos) {
          var l = x(r.bgPos);
          a.style.backgroundPosition = -l.x + "px " + -l.y + "px";
        }
        return this._setIconStyles(a, "icon"), a;
      },
      createShadow: function() {
        return null;
      }
    });
    function Fc(e) {
      return new zo(e);
    }
    on.Default = xn;
    var wn = oi.extend({
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
        N(this, e);
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
        return this._map && (nn(this._container), this._setAutoZIndex(Math.max)), this;
      },
      // @method bringToBack: this
      // Brings the tile layer to the bottom of all tile layers.
      bringToBack: function() {
        return this._map && (an(this._container), this._setAutoZIndex(Math.min)), this;
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
        for (var a = this.getPane().children, r = -e(-1 / 0, 1 / 0), l = 0, d = a.length, u; l < d; l++)
          u = a[l].style.zIndex, a[l] !== this._container && u && (r = e(r, +u));
        isFinite(r) && (this.options.zIndex = r + e(-1, 1), this._updateZIndex());
      },
      _updateOpacity: function() {
        if (this._map && !ue.ielt9) {
          Qt(this._container, this.options.opacity);
          var e = +/* @__PURE__ */ new Date(), a = !1, r = !1;
          for (var l in this._tiles) {
            var d = this._tiles[l];
            if (!(!d.current || !d.loaded)) {
              var u = Math.min(1, (e - d.loaded) / 200);
              Qt(d.el, u), u < 1 ? a = !0 : (d.active ? r = !0 : this._onOpaqueTile(d), d.active = !0);
            }
          }
          r && !this._noPrune && this._pruneTiles(), a && (Q(this._fadeFrame), this._fadeFrame = F(this._updateOpacity, this));
        }
      },
      _onOpaqueTile: v,
      _initContainer: function() {
        this._container || (this._container = We("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      },
      _updateLevels: function() {
        var e = this._tileZoom, a = this.options.maxZoom;
        if (e !== void 0) {
          for (var r in this._levels)
            r = Number(r), this._levels[r].el.children.length || r === e ? (this._levels[r].el.style.zIndex = a - Math.abs(e - r), this._onUpdateLevel(r)) : (lt(this._levels[r].el), this._removeTilesAtZoom(r), this._onRemoveLevel(r), delete this._levels[r]);
          var l = this._levels[e], d = this._map;
          return l || (l = this._levels[e] = {}, l.el = We("div", "leaflet-tile-container leaflet-zoom-animated", this._container), l.el.style.zIndex = a, l.origin = d.project(d.unproject(d.getPixelOrigin()), e).round(), l.zoom = e, this._setZoomTransform(l, d.getCenter(), d.getZoom()), v(l.el.offsetWidth), this._onCreateLevel(l)), this._level = l, l;
        }
      },
      _onUpdateLevel: v,
      _onRemoveLevel: v,
      _onCreateLevel: v,
      _pruneTiles: function() {
        if (this._map) {
          var e, a, r = this._map.getZoom();
          if (r > this.options.maxZoom || r < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (e in this._tiles)
            a = this._tiles[e], a.retain = a.current;
          for (e in this._tiles)
            if (a = this._tiles[e], a.current && !a.active) {
              var l = a.coords;
              this._retainParent(l.x, l.y, l.z, l.z - 5) || this._retainChildren(l.x, l.y, l.z, l.z + 2);
            }
          for (e in this._tiles)
            this._tiles[e].retain || this._removeTile(e);
        }
      },
      _removeTilesAtZoom: function(e) {
        for (var a in this._tiles)
          this._tiles[a].coords.z === e && this._removeTile(a);
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
      _retainParent: function(e, a, r, l) {
        var d = Math.floor(e / 2), u = Math.floor(a / 2), y = r - 1, k = new E(+d, +u);
        k.z = +y;
        var S = this._tileCoordsToKey(k), K = this._tiles[S];
        return K && K.active ? (K.retain = !0, !0) : (K && K.loaded && (K.retain = !0), y > l ? this._retainParent(d, u, y, l) : !1);
      },
      _retainChildren: function(e, a, r, l) {
        for (var d = 2 * e; d < 2 * e + 2; d++)
          for (var u = 2 * a; u < 2 * a + 2; u++) {
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
        var a = e && (e.pinch || e.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), a, a);
      },
      _animateZoom: function(e) {
        this._setView(e.center, e.zoom, !0, e.noUpdate);
      },
      _clampZoom: function(e) {
        var a = this.options;
        return a.minNativeZoom !== void 0 && e < a.minNativeZoom ? a.minNativeZoom : a.maxNativeZoom !== void 0 && a.maxNativeZoom < e ? a.maxNativeZoom : e;
      },
      _setView: function(e, a, r, l) {
        var d = Math.round(a);
        this.options.maxZoom !== void 0 && d > this.options.maxZoom || this.options.minZoom !== void 0 && d < this.options.minZoom ? d = void 0 : d = this._clampZoom(d);
        var u = this.options.updateWhenZooming && d !== this._tileZoom;
        (!l || u) && (this._tileZoom = d, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), d !== void 0 && this._update(e), r || this._pruneTiles(), this._noPrune = !!r), this._setZoomTransforms(e, a);
      },
      _setZoomTransforms: function(e, a) {
        for (var r in this._levels)
          this._setZoomTransform(this._levels[r], e, a);
      },
      _setZoomTransform: function(e, a, r) {
        var l = this._map.getZoomScale(r, e.zoom), d = e.origin.multiplyBy(l).subtract(this._map._getNewPixelOrigin(a, r)).round();
        ue.any3d ? Ui(e.el, d, l) : ht(e.el, d);
      },
      _resetGrid: function() {
        var e = this._map, a = e.options.crs, r = this._tileSize = this.getTileSize(), l = this._tileZoom, d = this._map.getPixelWorldBounds(this._tileZoom);
        d && (this._globalTileRange = this._pxBoundsToTileRange(d)), this._wrapX = a.wrapLng && !this.options.noWrap && [
          Math.floor(e.project([0, a.wrapLng[0]], l).x / r.x),
          Math.ceil(e.project([0, a.wrapLng[1]], l).x / r.y)
        ], this._wrapY = a.wrapLat && !this.options.noWrap && [
          Math.floor(e.project([a.wrapLat[0], 0], l).y / r.x),
          Math.ceil(e.project([a.wrapLat[1], 0], l).y / r.y)
        ];
      },
      _onMoveEnd: function() {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function(e) {
        var a = this._map, r = a._animatingZoom ? Math.max(a._animateToZoom, a.getZoom()) : a.getZoom(), l = a.getZoomScale(r, this._tileZoom), d = a.project(e, this._tileZoom).floor(), u = a.getSize().divideBy(l * 2);
        return new Z(d.subtract(u), d.add(u));
      },
      // Private method to load tiles in the grid's active zoom level according to map bounds
      _update: function(e) {
        var a = this._map;
        if (a) {
          var r = this._clampZoom(a.getZoom());
          if (e === void 0 && (e = a.getCenter()), this._tileZoom !== void 0) {
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
                var Ot = new E(Ie, xe);
                if (Ot.z = this._tileZoom, !!this._isValidTile(Ot)) {
                  var kt = this._tiles[this._tileCoordsToKey(Ot)];
                  kt ? kt.current = !0 : y.push(Ot);
                }
              }
            if (y.sort(function(Dt, dn) {
              return Dt.distanceTo(u) - dn.distanceTo(u);
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
        var a = this._map.options.crs;
        if (!a.infinite) {
          var r = this._globalTileRange;
          if (!a.wrapLng && (e.x < r.min.x || e.x > r.max.x) || !a.wrapLat && (e.y < r.min.y || e.y > r.max.y))
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
        var a = this._map, r = this.getTileSize(), l = e.scaleBy(r), d = l.add(r), u = a.unproject(l, e.z), y = a.unproject(d, e.z);
        return [u, y];
      },
      // converts tile coordinates to its geographical bounds
      _tileCoordsToBounds: function(e) {
        var a = this._tileCoordsToNwSe(e), r = new H(a[0], a[1]);
        return this.options.noWrap || (r = this._map.wrapLatLngBounds(r)), r;
      },
      // converts tile coordinates to key for the tile cache
      _tileCoordsToKey: function(e) {
        return e.x + ":" + e.y + ":" + e.z;
      },
      // converts tile cache key to coordinates
      _keyToTileCoords: function(e) {
        var a = e.split(":"), r = new E(+a[0], +a[1]);
        return r.z = +a[2], r;
      },
      _removeTile: function(e) {
        var a = this._tiles[e];
        a && (lt(a.el), delete this._tiles[e], this.fire("tileunload", {
          tile: a.el,
          coords: this._keyToTileCoords(e)
        }));
      },
      _initTile: function(e) {
        Pe(e, "leaflet-tile");
        var a = this.getTileSize();
        e.style.width = a.x + "px", e.style.height = a.y + "px", e.onselectstart = v, e.onmousemove = v, ue.ielt9 && this.options.opacity < 1 && Qt(e, this.options.opacity);
      },
      _addTile: function(e, a) {
        var r = this._getTilePos(e), l = this._tileCoordsToKey(e), d = this.createTile(this._wrapCoords(e), m(this._tileReady, this, e));
        this._initTile(d), this.createTile.length < 2 && F(m(this._tileReady, this, e, null, d)), ht(d, r), this._tiles[l] = {
          el: d,
          coords: e,
          current: !0
        }, a.appendChild(d), this.fire("tileloadstart", {
          tile: d,
          coords: e
        });
      },
      _tileReady: function(e, a, r) {
        a && this.fire("tileerror", {
          error: a,
          tile: r,
          coords: e
        });
        var l = this._tileCoordsToKey(e);
        r = this._tiles[l], r && (r.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Qt(r.el, 0), Q(this._fadeFrame), this._fadeFrame = F(this._updateOpacity, this)) : (r.active = !0, this._pruneTiles()), a || (Pe(r.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: r.el,
          coords: e
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), ue.ielt9 || !this._map._fadeAnimated ? F(this._pruneTiles, this) : setTimeout(m(this._pruneTiles, this), 250)));
      },
      _getTilePos: function(e) {
        return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function(e) {
        var a = new E(
          this._wrapX ? b(e.x, this._wrapX) : e.x,
          this._wrapY ? b(e.y, this._wrapY) : e.y
        );
        return a.z = e.z, a;
      },
      _pxBoundsToTileRange: function(e) {
        var a = this.getTileSize();
        return new Z(
          e.min.unscaleBy(a).floor(),
          e.max.unscaleBy(a).ceil().subtract([1, 1])
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
      return new wn(e);
    }
    var cn = wn.extend({
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
      initialize: function(e, a) {
        this._url = e, a = N(this, a), a.detectRetina && ue.retina && a.maxZoom > 0 ? (a.tileSize = Math.floor(a.tileSize / 2), a.zoomReverse ? (a.zoomOffset--, a.minZoom = Math.min(a.maxZoom, a.minZoom + 1)) : (a.zoomOffset++, a.maxZoom = Math.max(a.minZoom, a.maxZoom - 1)), a.minZoom = Math.max(0, a.minZoom)) : a.zoomReverse ? a.minZoom = Math.min(a.maxZoom, a.minZoom) : a.maxZoom = Math.max(a.minZoom, a.maxZoom), typeof a.subdomains == "string" && (a.subdomains = a.subdomains.split("")), this.on("tileunload", this._onTileRemove);
      },
      // @method setUrl(url: String, noRedraw?: Boolean): this
      // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
      // If the URL does not change, the layer will not be redrawn unless
      // the noRedraw parameter is set to false.
      setUrl: function(e, a) {
        return this._url === e && a === void 0 && (a = !0), this._url = e, a || this.redraw(), this;
      },
      // @method createTile(coords: Object, done?: Function): HTMLElement
      // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
      // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
      // callback is called when the tile has been loaded.
      createTile: function(e, a) {
        var r = document.createElement("img");
        return Ne(r, "load", m(this._tileOnLoad, this, a, r)), Ne(r, "error", m(this._tileOnError, this, a, r)), (this.options.crossOrigin || this.options.crossOrigin === "") && (r.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (r.referrerPolicy = this.options.referrerPolicy), r.alt = "", r.src = this.getTileUrl(e), r;
      },
      // @section Extension methods
      // @uninheritable
      // Layers extending `TileLayer` might reimplement the following method.
      // @method getTileUrl(coords: Object): String
      // Called only internally, returns the URL for a tile given its coordinates.
      // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
      getTileUrl: function(e) {
        var a = {
          r: ue.retina ? "@2x" : "",
          s: this._getSubdomain(e),
          x: e.x,
          y: e.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var r = this._globalTileRange.max.y - e.y;
          this.options.tms && (a.y = r), a["-y"] = r;
        }
        return X(this._url, c(a, this.options));
      },
      _tileOnLoad: function(e, a) {
        ue.ielt9 ? setTimeout(m(e, this, null, a), 0) : e(null, a);
      },
      _tileOnError: function(e, a, r) {
        var l = this.options.errorTileUrl;
        l && a.getAttribute("src") !== l && (a.src = l), e(r, a);
      },
      _onTileRemove: function(e) {
        e.tile.onload = null;
      },
      _getZoomForUrl: function() {
        var e = this._tileZoom, a = this.options.maxZoom, r = this.options.zoomReverse, l = this.options.zoomOffset;
        return r && (e = a - e), e + l;
      },
      _getSubdomain: function(e) {
        var a = Math.abs(e.x + e.y) % this.options.subdomains.length;
        return this.options.subdomains[a];
      },
      // stops loading all tiles in the background layer
      _abortLoading: function() {
        var e, a;
        for (e in this._tiles)
          if (this._tiles[e].coords.z !== this._tileZoom && (a = this._tiles[e].el, a.onload = v, a.onerror = v, !a.complete)) {
            a.src = T;
            var r = this._tiles[e].coords;
            lt(a), delete this._tiles[e], this.fire("tileabort", {
              tile: a,
              coords: r
            });
          }
      },
      _removeTile: function(e) {
        var a = this._tiles[e];
        if (a)
          return a.el.setAttribute("src", T), wn.prototype._removeTile.call(this, e);
      },
      _tileReady: function(e, a, r) {
        if (!(!this._map || r && r.getAttribute("src") === T))
          return wn.prototype._tileReady.call(this, e, a, r);
      }
    });
    function No(e, a) {
      return new cn(e, a);
    }
    var To = cn.extend({
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
      initialize: function(e, a) {
        this._url = e;
        var r = c({}, this.defaultWmsParams);
        for (var l in a)
          l in this.options || (r[l] = a[l]);
        a = N(this, a);
        var d = a.detectRetina && ue.retina ? 2 : 1, u = this.getTileSize();
        r.width = u.x * d, r.height = u.y * d, this.wmsParams = r;
      },
      onAdd: function(e) {
        this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var a = this._wmsVersion >= 1.3 ? "crs" : "srs";
        this.wmsParams[a] = this._crs.code, cn.prototype.onAdd.call(this, e);
      },
      getTileUrl: function(e) {
        var a = this._tileCoordsToNwSe(e), r = this._crs, l = z(r.project(a[0]), r.project(a[1])), d = l.min, u = l.max, y = (this._wmsVersion >= 1.3 && this._crs === vo ? [d.y, d.x, u.y, u.x] : [d.x, d.y, u.x, u.y]).join(","), k = cn.prototype.getTileUrl.call(this, e);
        return k + A(this.wmsParams, k, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + y;
      },
      // @method setParams(params: Object, noRedraw?: Boolean): this
      // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
      setParams: function(e, a) {
        return c(this.wmsParams, e), a || this.redraw(), this;
      }
    });
    function $c(e, a) {
      return new To(e, a);
    }
    cn.WMS = To, No.wms = $c;
    var xi = oi.extend({
      // @section
      // @aka Renderer options
      options: {
        // @option padding: Number = 0.1
        // How much to extend the clip area around the map view (relative to its size)
        // e.g. 0.1 would be 10% of map view in each direction
        padding: 0.1
      },
      initialize: function(e) {
        N(this, e), f(this), this._layers = this._layers || {};
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
      _updateTransform: function(e, a) {
        var r = this._map.getZoomScale(a, this._zoom), l = this._map.getSize().multiplyBy(0.5 + this.options.padding), d = this._map.project(this._center, a), u = l.multiplyBy(-r).add(d).subtract(this._map._getNewPixelOrigin(e, a));
        ue.any3d ? Ui(this._container, u, r) : ht(this._container, u);
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
        var e = this.options.padding, a = this._map.getSize(), r = this._map.containerPointToLayerPoint(a.multiplyBy(-e)).round();
        this._bounds = new Z(r, r.add(a.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }), jo = xi.extend({
      // @section
      // @aka Canvas options
      options: {
        // @option tolerance: Number = 0
        // How much to extend the click tolerance around a path/object on the map.
        tolerance: 0
      },
      getEvents: function() {
        var e = xi.prototype.getEvents.call(this);
        return e.viewprereset = this._onViewPreReset, e;
      },
      _onViewPreReset: function() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function() {
        xi.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function() {
        var e = this._container = document.createElement("canvas");
        Ne(e, "mousemove", this._onMouseMove, this), Ne(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Ne(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
      },
      _destroyContainer: function() {
        Q(this._redrawRequest), delete this._ctx, lt(this._container), Qe(this._container), delete this._container;
      },
      _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          var e;
          this._redrawBounds = null;
          for (var a in this._layers)
            e = this._layers[a], e._update();
          this._redraw();
        }
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          xi.prototype._update.call(this);
          var e = this._bounds, a = this._container, r = e.getSize(), l = ue.retina ? 2 : 1;
          ht(a, e.min), a.width = l * r.x, a.height = l * r.y, a.style.width = r.x + "px", a.style.height = r.y + "px", ue.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
        }
      },
      _reset: function() {
        xi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function(e) {
        this._updateDashArray(e), this._layers[f(e)] = e;
        var a = e._order = {
          layer: e,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = a), this._drawLast = a, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function(e) {
        this._requestRedraw(e);
      },
      _removePath: function(e) {
        var a = e._order, r = a.next, l = a.prev;
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
          var a = e.options.dashArray.split(/[, ]+/), r = [], l, d;
          for (d = 0; d < a.length; d++) {
            if (l = Number(a[d]), isNaN(l))
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
          var a = (e.options.weight || 0) + 1;
          this._redrawBounds = this._redrawBounds || new Z(), this._redrawBounds.extend(e._pxBounds.min.subtract([a, a])), this._redrawBounds.extend(e._pxBounds.max.add([a, a]));
        }
      },
      _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function() {
        var e = this._redrawBounds;
        if (e) {
          var a = e.getSize();
          this._ctx.clearRect(e.min.x, e.min.y, a.x, a.y);
        } else
          this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
      },
      _draw: function() {
        var e, a = this._redrawBounds;
        if (this._ctx.save(), a) {
          var r = a.getSize();
          this._ctx.beginPath(), this._ctx.rect(a.min.x, a.min.y, r.x, r.y), this._ctx.clip();
        }
        this._drawing = !0;
        for (var l = this._drawFirst; l; l = l.next)
          e = l.layer, (!a || e._pxBounds && e._pxBounds.intersects(a)) && e._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function(e, a) {
        if (this._drawing) {
          var r, l, d, u, y = e._parts, k = y.length, S = this._ctx;
          if (k) {
            for (S.beginPath(), r = 0; r < k; r++) {
              for (l = 0, d = y[r].length; l < d; l++)
                u = y[r][l], S[l ? "lineTo" : "moveTo"](u.x, u.y);
              a && S.closePath();
            }
            this._fillStroke(S, e);
          }
        }
      },
      _updateCircle: function(e) {
        if (!(!this._drawing || e._empty())) {
          var a = e._point, r = this._ctx, l = Math.max(Math.round(e._radius), 1), d = (Math.max(Math.round(e._radiusY), 1) || l) / l;
          d !== 1 && (r.save(), r.scale(1, d)), r.beginPath(), r.arc(a.x, a.y / d, l, 0, Math.PI * 2, !1), d !== 1 && r.restore(), this._fillStroke(r, e);
        }
      },
      _fillStroke: function(e, a) {
        var r = a.options;
        r.fill && (e.globalAlpha = r.fillOpacity, e.fillStyle = r.fillColor || r.color, e.fill(r.fillRule || "evenodd")), r.stroke && r.weight !== 0 && (e.setLineDash && e.setLineDash(a.options && a.options._dashArray || []), e.globalAlpha = r.opacity, e.lineWidth = r.weight, e.strokeStyle = r.color, e.lineCap = r.lineCap, e.lineJoin = r.lineJoin, e.stroke());
      },
      // Canvas obviously doesn't have mouse events for individual drawn objects,
      // so we emulate that by calculating what's under the mouse on mousemove/click manually
      _onClick: function(e) {
        for (var a = this._map.mouseEventToLayerPoint(e), r, l, d = this._drawFirst; d; d = d.next)
          r = d.layer, r.options.interactive && r._containsPoint(a) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(r)) && (l = r);
        this._fireEvent(l ? [l] : !1, e);
      },
      _onMouseMove: function(e) {
        if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
          var a = this._map.mouseEventToLayerPoint(e);
          this._handleMouseHover(e, a);
        }
      },
      _handleMouseOut: function(e) {
        var a = this._hoveredLayer;
        a && (mt(this._container, "leaflet-interactive"), this._fireEvent([a], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function(e, a) {
        if (!this._mouseHoverThrottled) {
          for (var r, l, d = this._drawFirst; d; d = d.next)
            r = d.layer, r.options.interactive && r._containsPoint(a) && (l = r);
          l !== this._hoveredLayer && (this._handleMouseOut(e), l && (Pe(this._container, "leaflet-interactive"), this._fireEvent([l], e, "mouseover"), this._hoveredLayer = l)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(m(function() {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function(e, a, r) {
        this._map._fireDOMEvent(a, r || a.type, e);
      },
      _bringToFront: function(e) {
        var a = e._order;
        if (a) {
          var r = a.next, l = a.prev;
          if (r)
            r.prev = l;
          else
            return;
          l ? l.next = r : r && (this._drawFirst = r), a.prev = this._drawLast, this._drawLast.next = a, a.next = null, this._drawLast = a, this._requestRedraw(e);
        }
      },
      _bringToBack: function(e) {
        var a = e._order;
        if (a) {
          var r = a.next, l = a.prev;
          if (l)
            l.next = r;
          else
            return;
          r ? r.prev = l : l && (this._drawLast = l), a.prev = null, a.next = this._drawFirst, this._drawFirst.prev = a, this._drawFirst = a, this._requestRedraw(e);
        }
      }
    });
    function Po(e) {
      return ue.canvas ? new jo(e) : null;
    }
    var kn = function() {
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
        this._container = We("div", "leaflet-vml-container");
      },
      _update: function() {
        this._map._animatingZoom || (xi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function(e) {
        var a = e._container = kn("shape");
        Pe(a, "leaflet-vml-shape " + (this.options.className || "")), a.coordsize = "1 1", e._path = kn("path"), a.appendChild(e._path), this._updateStyle(e), this._layers[f(e)] = e;
      },
      _addPath: function(e) {
        var a = e._container;
        this._container.appendChild(a), e.options.interactive && e.addInteractiveTarget(a);
      },
      _removePath: function(e) {
        var a = e._container;
        lt(a), e.removeInteractiveTarget(a), delete this._layers[f(e)];
      },
      _updateStyle: function(e) {
        var a = e._stroke, r = e._fill, l = e.options, d = e._container;
        d.stroked = !!l.stroke, d.filled = !!l.fill, l.stroke ? (a || (a = e._stroke = kn("stroke")), d.appendChild(a), a.weight = l.weight + "px", a.color = l.color, a.opacity = l.opacity, l.dashArray ? a.dashStyle = W(l.dashArray) ? l.dashArray.join(" ") : l.dashArray.replace(/( *, *)/g, " ") : a.dashStyle = "", a.endcap = l.lineCap.replace("butt", "flat"), a.joinstyle = l.lineJoin) : a && (d.removeChild(a), e._stroke = null), l.fill ? (r || (r = e._fill = kn("fill")), d.appendChild(r), r.color = l.fillColor || l.color, r.opacity = l.fillOpacity) : r && (d.removeChild(r), e._fill = null);
      },
      _updateCircle: function(e) {
        var a = e._point.round(), r = Math.round(e._radius), l = Math.round(e._radiusY || r);
        this._setPath(e, e._empty() ? "M0 0" : "AL " + a.x + "," + a.y + " " + r + "," + l + " 0," + 65535 * 360);
      },
      _setPath: function(e, a) {
        e._path.v = a;
      },
      _bringToFront: function(e) {
        nn(e._container);
      },
      _bringToBack: function(e) {
        an(e._container);
      }
    }, na = ue.vml ? kn : Se, Cn = xi.extend({
      _initContainer: function() {
        this._container = na("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = na("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function() {
        lt(this._container), Qe(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function() {
        if (!(this._map._animatingZoom && this._bounds)) {
          xi.prototype._update.call(this);
          var e = this._bounds, a = e.getSize(), r = this._container;
          (!this._svgSize || !this._svgSize.equals(a)) && (this._svgSize = a, r.setAttribute("width", a.x), r.setAttribute("height", a.y)), ht(r, e.min), r.setAttribute("viewBox", [e.min.x, e.min.y, a.x, a.y].join(" ")), this.fire("update");
        }
      },
      // methods below are called by vector layers implementations
      _initPath: function(e) {
        var a = e._path = na("path");
        e.options.className && Pe(a, e.options.className), e.options.interactive && Pe(a, "leaflet-interactive"), this._updateStyle(e), this._layers[f(e)] = e;
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
        var a = e._path, r = e.options;
        a && (r.stroke ? (a.setAttribute("stroke", r.color), a.setAttribute("stroke-opacity", r.opacity), a.setAttribute("stroke-width", r.weight), a.setAttribute("stroke-linecap", r.lineCap), a.setAttribute("stroke-linejoin", r.lineJoin), r.dashArray ? a.setAttribute("stroke-dasharray", r.dashArray) : a.removeAttribute("stroke-dasharray"), r.dashOffset ? a.setAttribute("stroke-dashoffset", r.dashOffset) : a.removeAttribute("stroke-dashoffset")) : a.setAttribute("stroke", "none"), r.fill ? (a.setAttribute("fill", r.fillColor || r.color), a.setAttribute("fill-opacity", r.fillOpacity), a.setAttribute("fill-rule", r.fillRule || "evenodd")) : a.setAttribute("fill", "none"));
      },
      _updatePoly: function(e, a) {
        this._setPath(e, he(e._parts, a));
      },
      _updateCircle: function(e) {
        var a = e._point, r = Math.max(Math.round(e._radius), 1), l = Math.max(Math.round(e._radiusY), 1) || r, d = "a" + r + "," + l + " 0 1,0 ", u = e._empty() ? "M0 0" : "M" + (a.x - r) + "," + a.y + d + r * 2 + ",0 " + d + -r * 2 + ",0 ";
        this._setPath(e, u);
      },
      _setPath: function(e, a) {
        e._path.setAttribute("d", a);
      },
      // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
      _bringToFront: function(e) {
        nn(e._path);
      },
      _bringToBack: function(e) {
        an(e._path);
      }
    });
    ue.vml && Cn.include(Wc);
    function Eo(e) {
      return ue.svg || ue.vml ? new Cn(e) : null;
    }
    De.include({
      // @namespace Map; @method getRenderer(layer: Path): Renderer
      // Returns the instance of `Renderer` that should be used to render the given
      // `Path`. It will ensure that the `renderer` options of the map and paths
      // are respected, and that the renderers do exist on the map.
      getRenderer: function(e) {
        var a = e.options.renderer || this._getPaneRenderer(e.options.pane) || this.options.renderer || this._renderer;
        return a || (a = this._renderer = this._createRenderer()), this.hasLayer(a) || this.addLayer(a), a;
      },
      _getPaneRenderer: function(e) {
        if (e === "overlayPane" || e === void 0)
          return !1;
        var a = this._paneRenderers[e];
        return a === void 0 && (a = this._createRenderer({ pane: e }), this._paneRenderers[e] = a), a;
      },
      _createRenderer: function(e) {
        return this.options.preferCanvas && Po(e) || Eo(e);
      }
    });
    var Io = sn.extend({
      initialize: function(e, a) {
        sn.prototype.initialize.call(this, this._boundsToLatLngs(e), a);
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
    function Uc(e, a) {
      return new Io(e, a);
    }
    Cn.create = na, Cn.pointsToPath = he, vi.geometryToLayer = Yn, vi.coordsToLatLng = Ya, vi.coordsToLatLngs = Jn, vi.latLngToCoords = Ja, vi.latLngsToCoords = Xn, vi.getFeature = ln, vi.asFeature = Qn, De.mergeOptions({
      // @option boxZoom: Boolean = true
      // Whether the map can be zoomed to a rectangular area specified by
      // dragging the mouse while pressing the shift key.
      boxZoom: !0
    });
    var Lo = ui.extend({
      initialize: function(e) {
        this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
      },
      addHooks: function() {
        Ne(this._container, "mousedown", this._onMouseDown, this);
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
        this._clearDeferredResetState(), this._resetState(), hn(), La(), this._startPoint = this._map.mouseEventToContainerPoint(e), Ne(document, {
          contextmenu: Vi,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function(e) {
        this._moved || (this._moved = !0, this._box = We("div", "leaflet-zoom-box", this._container), Pe(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
        var a = new Z(this._point, this._startPoint), r = a.getSize();
        ht(this._box, a.min), this._box.style.width = r.x + "px", this._box.style.height = r.y + "px";
      },
      _finish: function() {
        this._moved && (lt(this._box), mt(this._container, "leaflet-crosshair")), fn(), Aa(), Qe(document, {
          contextmenu: Vi,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function(e) {
        if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(m(this._resetState, this), 0);
          var a = new H(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(a).fire("boxzoomend", { boxZoomBounds: a });
        }
      },
      _onKeyDown: function(e) {
        e.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    De.addInitHook("addHandler", "boxZoom", Lo), De.mergeOptions({
      // @option doubleClickZoom: Boolean|String = true
      // Whether the map can be zoomed in by double clicking on it and
      // zoomed out by double clicking while holding shift. If passed
      // `'center'`, double-click zoom will zoom to the center of the
      //  view regardless of where the mouse was.
      doubleClickZoom: !0
    });
    var Ao = ui.extend({
      addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function(e) {
        var a = this._map, r = a.getZoom(), l = a.options.zoomDelta, d = e.originalEvent.shiftKey ? r - l : r + l;
        a.options.doubleClickZoom === "center" ? a.setZoom(d) : a.setZoomAround(e.containerPoint, d);
      }
    });
    De.addInitHook("addHandler", "doubleClickZoom", Ao), De.mergeOptions({
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
    var Mo = ui.extend({
      addHooks: function() {
        if (!this._draggable) {
          var e = this._map;
          this._draggable = new Ei(e._mapPane, e._container), this._draggable.on({
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
        }
        Pe(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function() {
        mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
          var a = q(this._map.options.maxBounds);
          this._offsetLimit = z(
            this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),
            this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
          ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
        } else
          this._offsetLimit = null;
        e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function(e) {
        if (this._map.options.inertia) {
          var a = this._lastTime = +/* @__PURE__ */ new Date(), r = this._lastPos = this._draggable._absPos || this._draggable._newPos;
          this._positions.push(r), this._times.push(a), this._prunePositions(a);
        }
        this._map.fire("move", e).fire("drag", e);
      },
      _prunePositions: function(e) {
        for (; this._positions.length > 1 && e - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function() {
        var e = this._map.getSize().divideBy(2), a = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = a.subtract(e).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function(e, a) {
        return e - (e - a) * this._viscosity;
      },
      _onPreDragLimit: function() {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var e = this._draggable._newPos.subtract(this._draggable._startPos), a = this._offsetLimit;
          e.x < a.min.x && (e.x = this._viscousLimit(e.x, a.min.x)), e.y < a.min.y && (e.y = this._viscousLimit(e.y, a.min.y)), e.x > a.max.x && (e.x = this._viscousLimit(e.x, a.max.x)), e.y > a.max.y && (e.y = this._viscousLimit(e.y, a.max.y)), this._draggable._newPos = this._draggable._startPos.add(e);
        }
      },
      _onPreDragWrap: function() {
        var e = this._worldWidth, a = Math.round(e / 2), r = this._initialWorldOffset, l = this._draggable._newPos.x, d = (l - a + r) % e + a - r, u = (l + a + r) % e - a - r, y = Math.abs(d + r) < Math.abs(u + r) ? d : u;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = y;
      },
      _onDragEnd: function(e) {
        var a = this._map, r = a.options, l = !r.inertia || e.noInertia || this._times.length < 2;
        if (a.fire("dragend", e), l)
          a.fire("moveend");
        else {
          this._prunePositions(+/* @__PURE__ */ new Date());
          var d = this._lastPos.subtract(this._positions[0]), u = (this._lastTime - this._times[0]) / 1e3, y = r.easeLinearity, k = d.multiplyBy(y / u), S = k.distanceTo([0, 0]), K = Math.min(r.inertiaMaxSpeed, S), oe = k.multiplyBy(K / S), xe = K / (r.inertiaDeceleration * y), Ie = oe.multiplyBy(-xe / 2).round();
          !Ie.x && !Ie.y ? a.fire("moveend") : (Ie = a._limitOffset(Ie, a.options.maxBounds), F(function() {
            a.panBy(Ie, {
              duration: xe,
              easeLinearity: y,
              noMoveStart: !0,
              animate: !0
            });
          }));
        }
      }
    });
    De.addInitHook("addHandler", "dragging", Mo), De.mergeOptions({
      // @option keyboard: Boolean = true
      // Makes the map focusable and allows users to navigate the map with keyboard
      // arrows and `+`/`-` keys.
      keyboard: !0,
      // @option keyboardPanDelta: Number = 80
      // Amount of pixels to pan when pressing an arrow key.
      keyboardPanDelta: 80
    });
    var Oo = ui.extend({
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
        e.tabIndex <= 0 && (e.tabIndex = "0"), Ne(e, {
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
          var e = document.body, a = document.documentElement, r = e.scrollTop || a.scrollTop, l = e.scrollLeft || a.scrollLeft;
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
        var a = this._panKeys = {}, r = this.keyCodes, l, d;
        for (l = 0, d = r.left.length; l < d; l++)
          a[r.left[l]] = [-1 * e, 0];
        for (l = 0, d = r.right.length; l < d; l++)
          a[r.right[l]] = [e, 0];
        for (l = 0, d = r.down.length; l < d; l++)
          a[r.down[l]] = [0, e];
        for (l = 0, d = r.up.length; l < d; l++)
          a[r.up[l]] = [0, -1 * e];
      },
      _setZoomDelta: function(e) {
        var a = this._zoomKeys = {}, r = this.keyCodes, l, d;
        for (l = 0, d = r.zoomIn.length; l < d; l++)
          a[r.zoomIn[l]] = e;
        for (l = 0, d = r.zoomOut.length; l < d; l++)
          a[r.zoomOut[l]] = -e;
      },
      _addHooks: function() {
        Ne(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function() {
        Qe(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function(e) {
        if (!(e.altKey || e.ctrlKey || e.metaKey)) {
          var a = e.keyCode, r = this._map, l;
          if (a in this._panKeys) {
            if (!r._panAnim || !r._panAnim._inProgress)
              if (l = this._panKeys[a], e.shiftKey && (l = x(l).multiplyBy(3)), r.options.maxBounds && (l = r._limitOffset(x(l), r.options.maxBounds)), r.options.worldCopyJump) {
                var d = r.wrapLatLng(r.unproject(r.project(r.getCenter()).add(l)));
                r.panTo(d);
              } else
                r.panBy(l);
          } else if (a in this._zoomKeys)
            r.setZoom(r.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[a]);
          else if (a === 27 && r._popup && r._popup.options.closeOnEscapeKey)
            r.closePopup();
          else
            return;
          Vi(e);
        }
      }
    });
    De.addInitHook("addHandler", "keyboard", Oo), De.mergeOptions({
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
    var Ro = ui.extend({
      addHooks: function() {
        Ne(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function() {
        Qe(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function(e) {
        var a = oo(e), r = this._map.options.wheelDebounceTime;
        this._delta += a, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
        var l = Math.max(r - (+/* @__PURE__ */ new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(m(this._performZoom, this), l), Vi(e);
      },
      _performZoom: function() {
        var e = this._map, a = e.getZoom(), r = this._map.options.zoomSnap || 0;
        e._stop();
        var l = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(l)))) / Math.LN2, u = r ? Math.ceil(d / r) * r : d, y = e._limitZoom(a + (this._delta > 0 ? u : -u)) - a;
        this._delta = 0, this._startTime = null, y && (e.options.scrollWheelZoom === "center" ? e.setZoom(a + y) : e.setZoomAround(this._lastMousePos, a + y));
      }
    });
    De.addInitHook("addHandler", "scrollWheelZoom", Ro);
    var Zc = 600;
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
    var Bo = ui.extend({
      addHooks: function() {
        Ne(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function() {
        Qe(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function(e) {
        if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
          var a = e.touches[0];
          this._startPos = this._newPos = new E(a.clientX, a.clientY), this._holdTimeout = setTimeout(m(function() {
            this._cancel(), this._isTapValid() && (Ne(document, "touchend", Et), Ne(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", a));
          }, this), Zc), Ne(document, "touchend touchcancel contextmenu", this._cancel, this), Ne(document, "touchmove", this._onMove, this);
        }
      },
      _cancelClickPrevent: function e() {
        Qe(document, "touchend", Et), Qe(document, "touchend touchcancel", e);
      },
      _cancel: function() {
        clearTimeout(this._holdTimeout), Qe(document, "touchend touchcancel contextmenu", this._cancel, this), Qe(document, "touchmove", this._onMove, this);
      },
      _onMove: function(e) {
        var a = e.touches[0];
        this._newPos = new E(a.clientX, a.clientY);
      },
      _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function(e, a) {
        var r = new MouseEvent(e, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          // detail: 1,
          screenX: a.screenX,
          screenY: a.screenY,
          clientX: a.clientX,
          clientY: a.clientY
          // button: 2,
          // buttons: 2
        });
        r._simulated = !0, a.target.dispatchEvent(r);
      }
    });
    De.addInitHook("addHandler", "tapHold", Bo), De.mergeOptions({
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
    var Fo = ui.extend({
      addHooks: function() {
        Pe(this._map._container, "leaflet-touch-zoom"), Ne(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function() {
        mt(this._map._container, "leaflet-touch-zoom"), Qe(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function(e) {
        var a = this._map;
        if (!(!e.touches || e.touches.length !== 2 || a._animatingZoom || this._zooming)) {
          var r = a.mouseEventToContainerPoint(e.touches[0]), l = a.mouseEventToContainerPoint(e.touches[1]);
          this._centerPoint = a.getSize()._divideBy(2), this._startLatLng = a.containerPointToLatLng(this._centerPoint), a.options.touchZoom !== "center" && (this._pinchStartLatLng = a.containerPointToLatLng(r.add(l)._divideBy(2))), this._startDist = r.distanceTo(l), this._startZoom = a.getZoom(), this._moved = !1, this._zooming = !0, a._stop(), Ne(document, "touchmove", this._onTouchMove, this), Ne(document, "touchend touchcancel", this._onTouchEnd, this), Et(e);
        }
      },
      _onTouchMove: function(e) {
        if (!(!e.touches || e.touches.length !== 2 || !this._zooming)) {
          var a = this._map, r = a.mouseEventToContainerPoint(e.touches[0]), l = a.mouseEventToContainerPoint(e.touches[1]), d = r.distanceTo(l) / this._startDist;
          if (this._zoom = a.getScaleZoom(d, this._startZoom), !a.options.bounceAtZoomLimits && (this._zoom < a.getMinZoom() && d < 1 || this._zoom > a.getMaxZoom() && d > 1) && (this._zoom = a._limitZoom(this._zoom)), a.options.touchZoom === "center") {
            if (this._center = this._startLatLng, d === 1)
              return;
          } else {
            var u = r._add(l)._divideBy(2)._subtract(this._centerPoint);
            if (d === 1 && u.x === 0 && u.y === 0)
              return;
            this._center = a.unproject(a.project(this._pinchStartLatLng, this._zoom).subtract(u), this._zoom);
          }
          this._moved || (a._moveStart(!0, !1), this._moved = !0), Q(this._animRequest);
          var y = m(a._move, a, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
          this._animRequest = F(y, this, !0), Et(e);
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
    De.addInitHook("addHandler", "touchZoom", Fo), De.BoxZoom = Lo, De.DoubleClickZoom = Ao, De.Drag = Mo, De.Keyboard = Oo, De.ScrollWheelZoom = Ro, De.TapHold = Bo, De.TouchZoom = Fo, n.Bounds = Z, n.Browser = ue, n.CRS = me, n.Canvas = jo, n.Circle = qa, n.CircleMarker = qn, n.Class = ge, n.Control = ri, n.DivIcon = zo, n.DivOverlay = mi, n.DomEvent = lc, n.DomUtil = oc, n.Draggable = Ei, n.Evented = ce, n.FeatureGroup = yi, n.GeoJSON = vi, n.GridLayer = wn, n.Handler = ui, n.Icon = on, n.ImageOverlay = ea, n.LatLng = ee, n.LatLngBounds = H, n.Layer = oi, n.LayerGroup = rn, n.LineUtil = xc, n.Map = De, n.Marker = Kn, n.Mixin = hc, n.Path = Ii, n.Point = E, n.PolyUtil = fc, n.Polygon = sn, n.Polyline = bi, n.Popup = ta, n.PosAnimation = so, n.Projection = wc, n.Rectangle = Io, n.Renderer = xi, n.SVG = Cn, n.SVGOverlay = So, n.TileLayer = cn, n.Tooltip = ia, n.Transformation = ae, n.Util = le, n.VideoOverlay = Co, n.bind = m, n.bounds = z, n.canvas = Po, n.circle = Pc, n.circleMarker = jc, n.control = bn, n.divIcon = Fc, n.extend = c, n.featureGroup = zc, n.geoJSON = ko, n.geoJson = Lc, n.gridLayer = Dc, n.icon = Nc, n.imageOverlay = Ac, n.latLng = Y, n.latLngBounds = q, n.layerGroup = Sc, n.map = cc, n.marker = Tc, n.point = x, n.polygon = Ic, n.polyline = Ec, n.popup = Rc, n.rectangle = Uc, n.setOptions = N, n.stamp = f, n.svg = Eo, n.svgOverlay = Oc, n.tileLayer = No, n.tooltip = Bc, n.transformation = pe, n.version = o, n.videoOverlay = Mc;
    var Hc = window.L;
    n.noConflict = function() {
      return window.L = Hc, this;
    }, window.L = n;
  });
})(Br, Br.exports);
var $i = Br.exports;
const Pv = /* @__PURE__ */ od($i);
function Rn(t, i, n) {
  return Object.freeze({
    instance: t,
    context: i,
    container: n
  });
}
function Bn(t, i) {
  return i == null ? function(o, c) {
    const _ = _t(void 0);
    return _.current || (_.current = t(o, c)), _;
  } : function(o, c) {
    const _ = _t(void 0);
    _.current || (_.current = t(o, c));
    const m = _t(o), { instance: h } = _.current;
    return Be(function() {
      m.current !== o && (i(h, o, m.current), m.current = o);
    }, [
      h,
      o,
      i
    ]), _;
  };
}
function Pl(t, i) {
  Be(function() {
    return (i.layerContainer ?? i.map).addLayer(t.instance), function() {
      var _;
      (_ = i.layerContainer) == null || _.removeLayer(t.instance), i.map.removeLayer(t.instance);
    };
  }, [
    i,
    t
  ]);
}
function El(t) {
  return function(n) {
    const o = On(), c = t(Ca(n, o), o);
    return zl(o.map, n.attribution), Kr(c.current, n.eventHandlers), Pl(c.current, o), c;
  };
}
function Ev(t, i) {
  const n = _t(void 0);
  Be(function() {
    if (i.pathOptions !== n.current) {
      const c = i.pathOptions ?? {};
      t.instance.setStyle(c), n.current = c;
    }
  }, [
    t,
    i
  ]);
}
function Iv(t) {
  return function(n) {
    const o = On(), c = t(Ca(n, o), o);
    return Kr(c.current, n.eventHandlers), Pl(c.current, o), Ev(c.current, n), c;
  };
}
function Il(t) {
  function i(c, _) {
    return Rn(t(c), _);
  }
  const n = Bn(i), o = Tv(n);
  return jl(o);
}
function Lv(t, i) {
  const n = Bn(t, i), o = El(n);
  return Tl(o);
}
function Av(t, i) {
  const n = Bn(t), o = jv(n, i);
  return Nv(o);
}
function Mv(t, i) {
  const n = Bn(t, i), o = Iv(n);
  return Tl(o);
}
function Ov(t, i) {
  const n = Bn(t, i), o = El(n);
  return jl(o);
}
function Rv(t, i, n) {
  const { opacity: o, zIndex: c } = i;
  o != null && o !== n.opacity && t.setOpacity(o), c != null && c !== n.zIndex && t.setZIndex(c);
}
function Bv() {
  return On().map;
}
function Fv({ bounds: t, boundsOptions: i, center: n, children: o, className: c, id: _, placeholder: m, style: h, whenReady: f, zoom: g, ...b }, v) {
  const [C] = Mt({
    className: c,
    id: _,
    style: h
  }), [w, I] = Mt(null), N = _t(void 0);
  fa(v, () => (w == null ? void 0 : w.map) ?? null, [
    w
  ]);
  const A = Je((X) => {
    if (X !== null && !N.current) {
      const W = new $i.Map(X, b);
      N.current = W, n != null && g != null ? W.setView(n, g) : t != null && W.fitBounds(t, i), f != null && W.whenReady(f), I(zv(W));
    }
  }, []);
  Be(() => () => {
    w == null || w.map.remove();
  }, [
    w
  ]);
  const O = w ? /* @__PURE__ */ Re.createElement(Gr, {
    value: w
  }, o) : m ?? null;
  return /* @__PURE__ */ Re.createElement("div", {
    ...C,
    ref: A
  }, O);
}
const Dv = /* @__PURE__ */ Ae(Fv), $v = Lv(function({ position: i, ...n }, o) {
  const c = new $i.Marker(i, n);
  return Rn(c, Nl(o, {
    overlayContainer: c
  }));
}, function(i, n, o) {
  n.position !== o.position && i.setLatLng(n.position), n.icon != null && n.icon !== o.icon && i.setIcon(n.icon), n.zIndexOffset != null && n.zIndexOffset !== o.zIndexOffset && i.setZIndexOffset(n.zIndexOffset), n.opacity != null && n.opacity !== o.opacity && i.setOpacity(n.opacity), i.dragging != null && n.draggable !== o.draggable && (n.draggable === !0 ? i.dragging.enable() : i.dragging.disable());
}), Wv = Mv(function({ positions: i, ...n }, o) {
  const c = new $i.Polygon(i, n);
  return Rn(c, Nl(o, {
    overlayContainer: c
  }));
}, function(i, n, o) {
  n.positions !== o.positions && i.setLatLngs(n.positions);
}), hs = Av(function(i, n) {
  const o = new $i.Popup(i, n.overlayContainer);
  return Rn(o, n);
}, function(i, n, { position: o }, c) {
  Be(function() {
    const { instance: m } = i;
    function h(g) {
      g.popup === m && (m.update(), c(!0));
    }
    function f(g) {
      g.popup === m && c(!1);
    }
    return n.map.on({
      popupopen: h,
      popupclose: f
    }), n.overlayContainer == null ? (o != null && m.setLatLng(o), m.openOn(n.map)) : n.overlayContainer.bindPopup(m), function() {
      var b;
      n.map.off({
        popupopen: h,
        popupclose: f
      }), (b = n.overlayContainer) == null || b.unbindPopup(), n.map.removeLayer(m);
    };
  }, [
    i,
    n,
    c,
    o
  ]);
}), Uv = Il(function(i) {
  return new $i.Control.Scale(i);
}), Zv = Ov(function({ url: i, ...n }, o) {
  const c = new $i.TileLayer(i, Ca(n, o));
  return Rn(c, o);
}, function(i, n, o) {
  Rv(i, n, o);
  const { url: c } = n;
  c != null && c !== o.url && i.setUrl(c);
}), Hv = Il(function(i) {
  return new $i.Control.Zoom(i);
}), Vv = {
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
}, Ll = (t) => Vv[t], Wt = {}, Gv = (t, i) => {
  if (t && typeof t == "string")
    return new Pv.DivIcon({
      html: `<span style="font-size: 1.5em; color: ${i || "inherit"}">${t}</span>`
    });
}, Kv = (t) => {
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
}, Al = Ae(
  ({
    kind: t,
    componentId: i,
    children: n,
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
    showLayerControls: N,
    showScale: A,
    showCompass: O,
    showFullscreen: X,
    showGrid: W,
    showCoordinates: U,
    showMinimap: T,
    showFogOfWar: j,
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
    const E = Ll(t), te = ga(), x = i || `map-${te}`, Z = un();
    Be(() => (Z(
      Lm({
        mapId: x,
        updates: {
          currentZoom: h ?? E.zoom ?? 1,
          currentCenter: c ?? E.center ?? { lat: 0, lng: 0 }
        }
      })
    ), () => {
      Z(Wr(x));
    }), [
      Z,
      x,
      h,
      E.zoom,
      c,
      E.center
    ]);
    const z = ai(
      Wm(x)
    ), H = (z == null ? void 0 : z.currentZoom) ?? h ?? E.zoom ?? 1, q = (z == null ? void 0 : z.currentCenter) ?? c ?? E.center ?? { lat: 0, lng: 0 };
    _t(null);
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
      showLayerControls: N ?? E.showLayerControls,
      showScale: A ?? E.showScale,
      showCompass: O ?? E.showCompass,
      showFullscreen: X ?? E.showFullscreen,
      showGrid: W ?? E.showGrid,
      showCoordinates: U ?? E.showCoordinates,
      showMinimap: T ?? E.showMinimap,
      showFogOfWar: j ?? E.showFogOfWar,
      variant: J ?? E.variant,
      size: V ?? E.size,
      aspectRatio: B ?? E.aspectRatio,
      borderRadius: G ?? E.borderRadius
    }, Y = [
      Wt.map,
      Wt[`map--${ee.kind}`],
      Wt[`map--${ee.variant}`],
      Wt[`map--${ee.size}`],
      ee.interactive && Wt["map--interactive"],
      o
    ].filter(Boolean).join(" "), me = () => ee.showGrid ? /* @__PURE__ */ s.jsx(p, { className: Wt.map__grid }) : null, de = () => ee.showCoordinates ? /* @__PURE__ */ s.jsxs(p, { className: Wt.map__coordinates, children: [
      q.lat.toFixed(4),
      ",",
      " ",
      q.lng.toFixed(4)
    ] }) : null, Me = () => ee.showCompass ? /* @__PURE__ */ s.jsx(p, { className: Wt.map__compass, children: /* @__PURE__ */ s.jsx(p, { className: Wt.map__compass_needle, children: "🧭" }) }) : null, Ee = () => ee.showMinimap ? /* @__PURE__ */ s.jsx(p, { className: Wt.map__minimap, children: /* @__PURE__ */ s.jsx(p, { className: Wt.map__minimap_content, children: /* @__PURE__ */ s.jsx(
      p,
      {
        className: Wt.map__minimap_viewport
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
      return Bv().on("click", (R) => {
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
            Dv,
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
                  Zv,
                  {
                    attribution: "© OpenStreetMap contributors",
                    url: Kv(ee.variant)
                  }
                ),
                ae.map(($) => /* @__PURE__ */ s.jsx(
                  $v,
                  {
                    position: [
                      $.position.lat,
                      $.position.lng
                    ],
                    icon: Gv(
                      $.icon,
                      $.color
                    ),
                    eventHandlers: $.clickable && Q ? {
                      click: () => Q($)
                    } : void 0,
                    children: $.title && /* @__PURE__ */ s.jsx(hs, { children: $.title })
                  },
                  $.id
                )),
                pe.map(($) => /* @__PURE__ */ s.jsx(
                  Wv,
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
                    children: $.title && /* @__PURE__ */ s.jsx(hs, { children: $.title })
                  },
                  $.id
                )),
                ee.showZoomControls && /* @__PURE__ */ s.jsx(Hv, { position: "topright" }),
                ee.showScale && /* @__PURE__ */ s.jsx(Uv, { position: "bottomleft" })
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
              className: Wt.map__fog_of_war
            }
          ),
          n && /* @__PURE__ */ s.jsx(p, { className: Wt.map__custom, children: n })
        ]
      }
    );
  }
);
Al.displayName = "Map";
const qv = si(Al);
class yt {
  static create(i) {
    return Re.forwardRef(
      (n, o) => Re.createElement(qv, {
        ref: o,
        ...i,
        ...n
      })
    );
  }
  static createFromKind(i) {
    const n = Ll(i);
    return this.create(n);
  }
}
const Z5 = {
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
}, Yv = {
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
}, Ml = (t) => Yv[t], Jv = "_container_1o5u3_144", Xv = "_flex_1o5u3_275", Qv = "_grid_1o5u3_371", e1 = "_relative_1o5u3_753", t1 = "_absolute_1o5u3_757", i1 = "_fixed_1o5u3_761", n1 = "_sticky_1o5u3_765", a1 = "_truncate_1o5u3_904", r1 = "_border_1o5u3_964", o1 = "_rounded_1o5u3_1004", s1 = "_shadow_1o5u3_1036", l1 = "_transition_1o5u3_1108", c1 = "_small_1o5u3_1608", d1 = "_large_1o5u3_1612", _1 = "_card_1o5u3_1660", u1 = "_media_1o5u3_1785", m1 = "_media__avatar_1o5u3_1849", p1 = "_media__image_1o5u3_1850", h1 = "_media__video_1o5u3_1866", f1 = "_media__content_1o5u3_1885", g1 = "_media__image_container_1o5u3_1946", y1 = "_media__fallback_1o5u3_1974", b1 = "_media__video_container_1o5u3_1985", v1 = "_media__play_button_1o5u3_2005", x1 = "_media__audio_container_1o5u3_2038", w1 = "_media__audio_cover_1o5u3_2044", k1 = "_media__audio_1o5u3_2038", C1 = "_media__overlay_1o5u3_2074", S1 = "_media__overlay_title_1o5u3_2089", z1 = "_media__overlay_description_1o5u3_2095", N1 = "_media__metadata_1o5u3_2099", T1 = "_media__metadata_title_1o5u3_2104", j1 = "_media__metadata_description_1o5u3_2112", P1 = "_media__metadata_details_1o5u3_2119", E1 = "_media__metadata_author_1o5u3_2131", I1 = "_media__metadata_duration_1o5u3_2131", L1 = "_media__metadata_size_1o5u3_2131", A1 = "_media__metadata_tags_1o5u3_2135", M1 = "_media__metadata_tag_1o5u3_2135", O1 = "_media__actions_1o5u3_2156", R1 = "_media__action_1o5u3_2156", B1 = "_media__action_icon_1o5u3_2311", F1 = "_media__action_label_1o5u3_2316", D1 = "_media__custom_1o5u3_2319", Te = {
  container: Jv,
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
  flex: Xv,
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
  grid: Qv,
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
  relative: e1,
  absolute: t1,
  fixed: i1,
  sticky: n1,
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
  truncate: a1,
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
  border: r1,
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
  rounded: o1,
  "rounded-md": "_rounded-md_1o5u3_1016",
  "rounded-lg": "_rounded-lg_1o5u3_1020",
  "rounded-xl": "_rounded-xl_1o5u3_1024",
  "rounded-2xl": "_rounded-2xl_1o5u3_1028",
  "rounded-full": "_rounded-full_1o5u3_1032",
  "shadow-none": "_shadow-none_1o5u3_1036",
  "shadow-sm": "_shadow-sm_1o5u3_1040",
  shadow: s1,
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
  transition: l1,
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
  small: c1,
  large: d1,
  "primary-button": "_primary-button_1o5u3_1617",
  "secondary-button": "_secondary-button_1o5u3_1621",
  card: _1,
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
  media: u1,
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
  media__avatar: m1,
  media__image: p1,
  "media--square": "_media--square_1o5u3_1853",
  "media--rounded": "_media--rounded_1o5u3_1857",
  "media--pill": "_media--pill_1o5u3_1861",
  "media--cover": "_media--cover_1o5u3_1865",
  media__video: h1,
  "media--contain": "_media--contain_1o5u3_1869",
  "media--fill": "_media--fill_1o5u3_1873",
  "media--scale-down": "_media--scale-down_1o5u3_1877",
  "media--none": "_media--none_1o5u3_1881",
  "media--default": "_media--default_1o5u3_1885",
  media__content: f1,
  "media--bordered": "_media--bordered_1o5u3_1889",
  "media--shadow": "_media--shadow_1o5u3_1892",
  "media--glass": "_media--glass_1o5u3_1895",
  "media--gradient": "_media--gradient_1o5u3_1900",
  "media--clickable": "_media--clickable_1o5u3_1903",
  media__image_container: g1,
  "media--loaded": "_media--loaded_1o5u3_1968",
  "media--error": "_media--error_1o5u3_1971",
  media__fallback: y1,
  media__video_container: b1,
  media__play_button: v1,
  media__audio_container: x1,
  media__audio_cover: w1,
  media__audio: k1,
  media__overlay: C1,
  media__overlay_title: S1,
  media__overlay_description: z1,
  media__metadata: N1,
  media__metadata_title: T1,
  media__metadata_description: j1,
  media__metadata_details: P1,
  media__metadata_author: E1,
  media__metadata_duration: I1,
  media__metadata_size: L1,
  media__metadata_tags: A1,
  media__metadata_tag: M1,
  media__actions: O1,
  media__action: R1,
  "media__action--primary": "_media__action--primary_1o5u3_2200",
  "media__action--secondary": "_media__action--secondary_1o5u3_2238",
  "media__action--ghost": "_media__action--ghost_1o5u3_2276",
  media__action_icon: B1,
  media__action_label: F1,
  media__custom: D1,
  "skeleton-shimmer": "_skeleton-shimmer_1o5u3_1",
  "loading-shimmer": "_loading-shimmer_1o5u3_1"
}, Ol = Ae(
  ({
    kind: t,
    componentId: i,
    children: n,
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
    loop: N,
    clickable: A,
    draggable: O,
    actions: X,
    metadata: W,
    showOverlay: U,
    showMetadata: T,
    showActions: j,
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
    const H = Ml(t), q = ga(), ee = i || `media-${q}`, Y = un();
    Be(() => (Y(
      ur({
        mediaId: ee,
        updates: {
          isLoading: !1,
          hasError: !1,
          isPlaying: !1,
          hasLoaded: !1
        }
      })
    ), () => {
      Y(Wr(ee));
    }), [Y, ee]);
    const me = ai(
      $m(ee)
    ), de = (me == null ? void 0 : me.hasError) || !1, Me = (me == null ? void 0 : me.hasLoaded) || !1, Ee = _t(null), ae = {
      ...H,
      alt: m ?? H.alt,
      placeholder: g ?? H.placeholder,
      fallbackIcon: b ?? H.fallbackIcon,
      lazy: v ?? H.lazy,
      autoPlay: C ?? H.autoPlay,
      controls: w ?? H.controls,
      muted: I ?? H.muted,
      loop: N ?? H.loop,
      clickable: A ?? H.clickable,
      draggable: O ?? H.draggable,
      actions: X ?? H.actions,
      showOverlay: U ?? H.showOverlay,
      showMetadata: T ?? H.showMetadata,
      showActions: j ?? H.showActions,
      variant: J ?? H.variant,
      size: V ?? H.size,
      shape: B ?? H.shape,
      fit: G ?? H.fit,
      aspectRatio: F ?? H.aspectRatio,
      maxWidth: Q ?? H.maxWidth,
      maxHeight: le ?? H.maxHeight,
      borderRadius: ge ?? H.borderRadius
    }, pe = [
      Te.media,
      Te[`media--${ae.kind}`],
      Te[`media--${ae.variant}`],
      Te[`media--${ae.size}`],
      ae.shape && Te[`media--${ae.shape}`],
      Te[`media--${ae.fit}`],
      ae.clickable && Te["media--clickable"],
      Me && Te["media--loaded"],
      de && Te["media--error"],
      o
    ].filter(Boolean).join(" "), we = () => {
      Y(
        ur({
          mediaId: ee,
          updates: { hasLoaded: !0, hasError: !1 }
        })
      ), ne == null || ne();
    }, re = () => {
      Y(
        ur({
          mediaId: ee,
          updates: { hasError: !0, hasLoaded: !1 }
        })
      ), ce == null || ce();
    }, Se = () => {
      ae.clickable && ie && ie();
    }, he = () => {
      const ve = de ? ae.placeholder : c;
      return /* @__PURE__ */ s.jsx(p, { className: Te.media__avatar, children: ve ? /* @__PURE__ */ s.jsx(
        "img",
        {
          src: ve,
          alt: ae.alt,
          loading: ae.lazy ? "lazy" : "eager",
          draggable: ae.draggable,
          onLoad: we,
          onError: re,
          className: Te.media__image
        }
      ) : /* @__PURE__ */ s.jsx(p, { className: Te.media__fallback, children: ae.fallbackIcon }) });
    }, $ = () => {
      const ve = de ? ae.placeholder : c;
      return /* @__PURE__ */ s.jsxs(p, { className: Te.media__image_container, children: [
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
            className: Te.media__image
          }
        ) : /* @__PURE__ */ s.jsx(p, { className: Te.media__fallback, children: ae.fallbackIcon || "🖼️" }),
        ae.showOverlay && /* @__PURE__ */ s.jsxs(p, { className: Te.media__overlay, children: [
          h && /* @__PURE__ */ s.jsx(
            p,
            {
              className: Te.media__overlay_title,
              children: h
            }
          ),
          f && /* @__PURE__ */ s.jsx(
            p,
            {
              className: Te.media__overlay_description,
              children: f
            }
          )
        ] })
      ] });
    }, R = () => /* @__PURE__ */ s.jsxs(p, { className: Te.media__video_container, children: [
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
          className: Te.media__video,
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
      ae.showOverlay && !ae.controls && /* @__PURE__ */ s.jsx(p, { className: Te.media__overlay, children: /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: "icon",
          className: Te.media__play_button,
          onClick: () => {
            const ve = Ee.current;
            ve && (ve.paused ? ve.play() : ve.pause());
          },
          "aria-label": "Play/Pause video",
          icon: "▶️"
        }
      ) })
    ] }), Le = () => /* @__PURE__ */ s.jsxs(p, { className: Te.media__audio_container, children: [
      (t === "audio-card" || t === "podcast-player") && c && /* @__PURE__ */ s.jsx(p, { className: Te.media__audio_cover, children: /* @__PURE__ */ s.jsx(
        "img",
        {
          src: c,
          alt: ae.alt,
          className: Te.media__image,
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
          className: Te.media__audio,
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
    ] }), Xe = () => t.includes("avatar") ? he() : t.includes("video") || t.includes("stream") || t.includes("presentation") ? R() : t.includes("audio") || t.includes("podcast") || t.includes("voice") || t.includes("waveform") ? Le() : $(), qe = () => !ae.showMetadata || !W ? null : /* @__PURE__ */ s.jsxs(p, { className: Te.media__metadata, children: [
      W.title && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Te.media__metadata_title,
          children: W.title
        }
      ),
      W.description && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Te.media__metadata_description,
          children: W.description
        }
      ),
      /* @__PURE__ */ s.jsxs(
        p,
        {
          className: Te.media__metadata_details,
          children: [
            W.author && /* @__PURE__ */ s.jsx(
              "span",
              {
                className: Te.media__metadata_author,
                children: W.author
              }
            ),
            W.duration && /* @__PURE__ */ s.jsx(
              "span",
              {
                className: Te.media__metadata_duration,
                children: W.duration
              }
            ),
            W.fileSize && /* @__PURE__ */ s.jsx("span", { className: Te.media__metadata_size, children: W.fileSize })
          ]
        }
      ),
      W.tags && W.tags.length > 0 && /* @__PURE__ */ s.jsx(
        p,
        {
          className: Te.media__metadata_tags,
          children: W.tags.map((ve, Ue) => /* @__PURE__ */ s.jsx(
            "span",
            {
              className: Te.media__metadata_tag,
              children: ve
            },
            Ue
          ))
        }
      )
    ] }), Ke = () => {
      var ve;
      return !ae.showActions || !((ve = ae.actions) != null && ve.length) ? null : /* @__PURE__ */ s.jsx(p, { className: Te.media__actions, children: ae.actions.map((Ue) => /* @__PURE__ */ s.jsx(
        ke,
        {
          kind: Ue.variant || "secondary",
          onClick: Ue.onClick,
          disabled: Ue.disabled,
          className: [
            Te.media__action,
            Te[`media__action--${Ue.variant || "secondary"}`]
          ].join(" "),
          "aria-label": Ue.label,
          icon: Ue.icon,
          children: /* @__PURE__ */ s.jsx("span", { className: Te.media__action_label, children: Ue.label })
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
          /* @__PURE__ */ s.jsx(p, { className: Te.media__content, children: Xe() }),
          qe(),
          Ke(),
          n && /* @__PURE__ */ s.jsx(p, { className: Te.media__custom, children: n })
        ]
      }
    );
  }
);
Ol.displayName = "Media";
const $1 = si(Ol);
class Ye {
  static create(i) {
    return Re.forwardRef(
      (n, o) => Re.createElement($1, {
        ref: o,
        ...i,
        ...n
      })
    );
  }
  static createFromKind(i) {
    const n = Ml(i);
    return this.create(n);
  }
}
const H5 = {
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
}, W1 = "_modalOverlay_tlj10_131", U1 = "_modalContent_tlj10_145", Z1 = "_fadeIn_tlj10_1", H1 = "_slideUp_tlj10_1", V1 = "_slideDown_tlj10_1", G1 = "_scaleIn_tlj10_1", K1 = "_modalMessage_tlj10_250", q1 = "_modalTitle_tlj10_258", Y1 = "_modalBody_tlj10_266", J1 = "_modalHeader_tlj10_273", X1 = "_modalFooter_tlj10_396", Q1 = "_endGameContent_tlj10_404", ex = "_statisticsContent_tlj10_417", tx = "_userInfo_tlj10_417", ix = "_userAvatar_tlj10_425", nx = "_userName_tlj10_432", ax = "_userEmail_tlj10_436", rx = "_statsGrid_tlj10_440", ox = "_guestMessage_tlj10_443", sx = "_purchaseContent_tlj10_453", lx = "_itemPreview_tlj10_456", cx = "_itemImage_tlj10_468", dx = "_priceSection_tlj10_474", _x = "_priceLabel_tlj10_483", ux = "_priceValue_tlj10_486", mx = "_error_tlj10_491", px = "_success_tlj10_496", hx = "_vsModeContent_tlj10_503", fx = "_searchingState_tlj10_506", gx = "_spinner_tlj10_509", yx = "_spin_tlj10_509", bx = "_modeOptions_tlj10_521", vx = "_modeButton_tlj10_526", xx = "_vsRoomContent_tlj10_540", wx = "_roomSection_tlj10_540", kx = "_roomInput_tlj10_549", Cx = "_statRow_tlj10_570", Sx = "_statLabel_tlj10_581", zx = "_statValue_tlj10_586", Ce = {
  modalOverlay: W1,
  modalContent: U1,
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
  fadeIn: Z1,
  "modal-slide-up": "_modal-slide-up_tlj10_235",
  slideUp: H1,
  "modal-slide-down": "_modal-slide-down_tlj10_239",
  slideDown: V1,
  "modal-scale": "_modal-scale_tlj10_243",
  scaleIn: G1,
  "confirmation-modal": "_confirmation-modal_tlj10_247",
  modalMessage: K1,
  "alert-modal": "_alert-modal_tlj10_255",
  modalTitle: q1,
  "form-modal": "_form-modal_tlj10_266",
  modalBody: Y1,
  "fullscreen-modal": "_fullscreen-modal_tlj10_270",
  modalHeader: J1,
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
  modalFooter: X1,
  endGameContent: Q1,
  statisticsContent: ex,
  userInfo: tx,
  userAvatar: ix,
  userName: nx,
  userEmail: ax,
  statsGrid: rx,
  guestMessage: ox,
  purchaseContent: sx,
  itemPreview: lx,
  itemImage: cx,
  priceSection: dx,
  priceLabel: _x,
  priceValue: ux,
  error: mx,
  success: px,
  vsModeContent: hx,
  searchingState: fx,
  spinner: gx,
  spin: yx,
  modeOptions: bx,
  modeButton: vx,
  vsRoomContent: xx,
  roomSection: wx,
  roomInput: kx,
  statRow: Cx,
  statLabel: Sx,
  statValue: zx,
  "loading-shimmer": "_loading-shimmer_tlj10_1"
}, Nx = {
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
}, Tx = (t) => Nx[t], jx = (t, i = {}) => ({ ...Tx(t), ...i }), Fn = {
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
}, V5 = (t) => Fn.gameFlow.includes(t), G5 = (t) => Fn.versus.includes(t), K5 = (t) => Fn.commerce.includes(t), q5 = (t) => Fn.interactions.includes(t), Y5 = (t) => Fn.layouts.includes(t), Rl = ({
  kind: t,
  modalId: i,
  title: n,
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
  finishTime: N,
  user: A,
  session: O,
  signIn: X,
  // VS mode props
  isSearching: W,
  roomCode: U,
  onCreateRoom: T,
  onJoinRoom: j,
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
  const Y = jx(t, {
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
  }), me = i || `${t}-${Date.now()}`, de = Ur(), Me = Si(
    (Oe) => up(Oe, me)
  ), Ee = Si(
    (Oe) => mp(Oe, me)
  ), ae = Si(
    (Oe) => pp(Oe, me)
  ), pe = Si(
    (Oe) => hp(Oe, me)
  ), we = (Me == null ? void 0 : Me.roomCode) || U || "";
  Be(() => {
    de(
      dp({
        id: me,
        data: { roomCode: U || "" }
      })
    );
  }, [de, me, U]);
  const re = n || Y.defaultTitle, Se = o || Y.defaultMessage, he = _ || Y.primaryButtonText || "Confirm", $ = m || Y.secondaryButtonText || "Cancel", R = b || Y.primaryButtonText || "Submit", Le = [
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
          N && /* @__PURE__ */ s.jsxs(p, { className: Ce.statRow, children: [
            /* @__PURE__ */ s.jsx("span", { children: "Finish Time:" }),
            " ",
            /* @__PURE__ */ s.jsx("span", { children: N })
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
            ([Tt, Lt]) => /* @__PURE__ */ s.jsxs(
              p,
              {
                className: Ce.statRow,
                children: [
                  /* @__PURE__ */ s.jsx("span", { className: Ce.statLabel, children: Tt.replace(/([A-Z])/g, " $1").replace(
                    /^./,
                    (jt) => jt.toUpperCase()
                  ) }),
                  /* @__PURE__ */ s.jsxs("span", { className: Ce.statValue, children: [
                    Lt,
                    Tt.includes("Percentage") ? "%" : ""
                  ] })
                ]
              },
              Tt
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
                onChange: (Tt) => de(
                  ss({
                    id: me,
                    field: "roomCode",
                    value: Tt.target.value
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
          /* @__PURE__ */ s.jsx(ke, { kind: "primary", onClick: ut, children: "Join Room" })
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
        ls({ id: me, loading: !0 })
      ), de(
        la({ id: me, error: null })
      );
      try {
        await B(V), de(
          _p({ id: me, success: !0 })
        ), setTimeout(() => Z(), 1200);
      } catch (Oe) {
        de(
          la({
            id: me,
            error: (Oe == null ? void 0 : Oe.message) || "Purchase failed."
          })
        );
      } finally {
        de(
          ls({
            id: me,
            loading: !1
          })
        );
      }
    }
  }, nt = () => {
    const Oe = Math.random().toString(36).substring(2, 8).toUpperCase();
    de(
      ss({
        id: me,
        field: "roomCode",
        value: Oe
      })
    ), T == null || T(Oe);
  }, ut = () => {
    if (!we.trim()) {
      de(
        la({
          id: me,
          error: "Please enter a room code."
        })
      );
      return;
    }
    de(
      la({ id: me, error: null })
    ), j == null || j(we.trim());
  };
  return Be(() => {
    const Oe = (Tt) => {
      Tt.key === "Escape" && Y.closeOnEscape && Z();
    };
    if (Y.closeOnEscape)
      return document.addEventListener("keydown", Oe), () => document.removeEventListener(
        "keydown",
        Oe
      );
  }, [Y.closeOnEscape, Z]), Be(() => {
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
}, Px = ({
  kind: t,
  ...i
}) => /* @__PURE__ */ s.jsx(Rl, { kind: t, ...i });
Px.displayName = "ModalFactory";
const J5 = {
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
}, X5 = {
  alert: (t, i, n) => ({
    kind: "alert",
    message: t,
    title: i,
    onClose: n,
    open: !0
  }),
  confirm: (t, i, n, o) => ({
    kind: "confirmation",
    message: t,
    title: o,
    onConfirm: i,
    onCancel: n,
    onClose: n,
    open: !0
  }),
  form: (t, i, n, o) => ({
    kind: "form",
    title: t,
    onSubmit: i,
    onCancel: n,
    onClose: n,
    children: o,
    open: !0
  })
};
class gi {
  /**
   * Create any modal with required props and optional overrides
   */
  static create(i, n, o, c = {}) {
    return /* @__PURE__ */ s.jsx(
      Rl,
      {
        kind: i,
        open: n,
        onClose: o,
        ...c
      }
    );
  }
  // === CONFIRMATION MODALS ===
  static confirmation(i, n, o, c, _, m) {
    return this.create("confirmation", i, n, {
      title: o,
      message: c,
      onConfirm: _,
      onCancel: m || n
    });
  }
  // === ALERT MODALS ===
  static alert(i, n, o, c) {
    return this.create("alert", i, n, {
      title: o,
      message: c,
      onConfirm: n
    });
  }
  // === GAME MODALS ===
  static preGame(i, n, o, c) {
    return this.create("pre-game", i, n, {
      onConfirm: o,
      onCancel: c || n
    });
  }
  static endGame(i, n, o, c) {
    return this.create("end-game", i, n, {
      onConfirm: o,
      ...c
    });
  }
  static rules(i, n, o) {
    return this.create("rules", i, n, o);
  }
  static statistics(i, n) {
    return this.create("statistics", i, n);
  }
  // === VS MODE MODALS ===
  static vsMode(i, n, o, c) {
    return this.create("vs-mode", i, n, {
      onSelect: o,
      ...c
    });
  }
  static vsRoom(i, n, o, c, _) {
    return this.create("vs-room", i, n, {
      onCreateRoom: o,
      onJoinRoom: c,
      ..._
    });
  }
  // === COMMERCE MODALS ===
  static purchase(i, n, o, c, _) {
    return this.create("purchase", i, n, {
      item: o,
      onPurchase: c,
      user: _
    });
  }
  static signIn(i, n, o) {
    return this.create("sign-in", i, n, {
      onConfirm: o
    });
  }
  // === FORM MODALS ===
  static form(i, n, o, c, _, m) {
    return this.create("form", i, n, {
      title: o,
      onSubmit: c,
      onCancel: _ || n,
      submitText: m
    });
  }
  // === CUSTOM MODALS ===
  static customPuzzle(i, n, o) {
    return this.create("custom-puzzle", i, n, {
      children: o
    });
  }
  static shareContent(i, n, o) {
    return this.create("share-content", i, n, {
      children: o
    });
  }
  // === QUICK PRESETS ===
  static deleteConfirmation(i, n, o) {
    return this.confirmation(
      i,
      o || (() => {
      }),
      "Delete Item",
      "Are you sure you want to delete this item? This action cannot be undone.",
      n,
      o
    );
  }
  static saveConfirmation(i, n, o) {
    return this.confirmation(
      i,
      o || (() => {
      }),
      "Save Changes",
      "Do you want to save your changes before leaving?",
      n,
      o
    );
  }
  static errorAlert(i, n, o) {
    return this.alert(i, n, "Error", o);
  }
  static successAlert(i, n, o) {
    return this.alert(i, n, "Success", o);
  }
  static warningAlert(i, n, o) {
    return this.alert(i, n, "Warning", o);
  }
}
const Q5 = {
  /**
   * Create predefined modal groups for game flow
   */
  createGameFlow: (t, i, n, o, c, _) => ({
    preGame: gi.create(
      "pre-game",
      t,
      i,
      {
        onConfirm: n,
        onCancel: o
      }
    ),
    endGame: gi.create(
      "end-game",
      t,
      i,
      {
        onConfirm: c,
        ..._
      }
    ),
    rules: gi.create(
      "rules",
      t,
      i,
      {}
    ),
    statistics: gi.create(
      "statistics",
      t,
      i,
      {}
    )
  }),
  /**
   * Create VS mode modal flow
   */
  createVSFlow: (t, i, n, o, c) => ({
    modeSelection: gi.create(
      "vs-mode",
      t,
      i,
      {
        onSelect: n
      }
    ),
    roomManagement: gi.create(
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
  createCommerceFlow: (t, i, n, o, c, _) => ({
    purchase: gi.create(
      "purchase",
      t,
      i,
      {
        item: c,
        onPurchase: n,
        user: _
      }
    ),
    signIn: gi.create(
      "sign-in",
      t,
      i,
      {
        onConfirm: o
      }
    )
  })
};
function eN() {
  const [t, i] = Mt({}), n = (f, g) => {
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
    const C = gi.confirmation(
      !0,
      () => o(f),
      g,
      b,
      () => {
        v(), o(f);
      },
      () => o(f)
    );
    n(f, C);
  }, h = (f, g, b) => {
    const v = gi.alert(
      !0,
      () => o(f),
      g,
      b
    );
    n(f, v);
  };
  return {
    modals: Object.values(t).map(
      (f) => f.element
    ),
    open: n,
    close: o,
    closeAll: c,
    isOpen: _,
    showConfirmation: m,
    showAlert: h
  };
}
const Ex = "_container_1tz0x_131", Ix = "_flex_1tz0x_262", Lx = "_grid_1tz0x_358", Ax = "_relative_1tz0x_740", Mx = "_absolute_1tz0x_744", Ox = "_fixed_1tz0x_748", Rx = "_sticky_1tz0x_752", Bx = "_truncate_1tz0x_891", Fx = "_border_1tz0x_951", Dx = "_rounded_1tz0x_991", $x = "_shadow_1tz0x_1023", Wx = "_transition_1tz0x_1095", Ux = "_small_1tz0x_1595", Zx = "_large_1tz0x_1599", Hx = "_card_1tz0x_1647", Vx = "_Navigation_1tz0x_1772", Gx = "_navbarContainer_1tz0x_1918", Kx = "_navbarBrand_1tz0x_1940", qx = "_navbarItems_1tz0x_1950", Yx = "_navbarItem_1tz0x_1950", Jx = "_navbarLink_1tz0x_1965", Xx = "_active_1tz0x_1997", Qx = "_disabled_1tz0x_2002", ew = "_navbarIcon_1tz0x_2008", tw = "_navbarLabel_1tz0x_2016", iw = "_navbarBadge_1tz0x_2023", nw = "_mobileNavContainer_1tz0x_2040", aw = "_mobileNavItem_1tz0x_2063", rw = "_mobileNavIcon_1tz0x_2103", ow = "_mobileNavLabel_1tz0x_2108", sw = "_mobileNavBadge_1tz0x_2118", lw = "_breadcrumbsList_1tz0x_2145", cw = "_breadcrumbItem_1tz0x_2154", dw = "_breadcrumbLink_1tz0x_2160", _w = "_breadcrumbCurrent_1tz0x_2182", uw = "_breadcrumbSeparator_1tz0x_2187", mw = "_paginationContainer_1tz0x_2192", pw = "_paginationList_1tz0x_2199", hw = "_paginationItem_1tz0x_2207", fw = "_paginationButton_1tz0x_2211", gw = "_tabsContainer_1tz0x_2245", yw = "_tabsList_1tz0x_2249", bw = "_tabItem_1tz0x_2257", vw = "_tabButton_1tz0x_2261", xw = "_tabIcon_1tz0x_2294", ww = "_tabLabel_1tz0x_2298", kw = "_segmentedContainer_1tz0x_2305", Cw = "_segmentedGroup_1tz0x_2311", Sw = "_segmentedButton_1tz0x_2318", zw = "_hamburgerContainer_1tz0x_2347", Nw = "_hamburgerList_1tz0x_2351", Tw = "_hamburgerItem_1tz0x_2357", jw = "_hamburgerLink_1tz0x_2361", Pw = "_hamburgerIcon_1tz0x_2391", Ew = "_hamburgerLabel_1tz0x_2397", Iw = "_sideDrawerContainer_1tz0x_2401", Lw = "_sideDrawerList_1tz0x_2407", Aw = "_sideDrawerItem_1tz0x_2413", Mw = "_sideDrawerLink_1tz0x_2417", Ow = "_sideDrawerIcon_1tz0x_2448", Rw = "_sideDrawerLabel_1tz0x_2454", Bw = "_sideDrawerSubList_1tz0x_2458", Fw = "_sideDrawerSubItem_1tz0x_2467", Dw = "_sideDrawerSubLink_1tz0x_2471", $w = "_genericNavigation_1tz0x_2500", Ww = "_genericList_1tz0x_2504", Uw = "_genericItem_1tz0x_2512", Zw = "_genericLink_1tz0x_2516", Hw = "_genericIcon_1tz0x_2545", Vw = "_genericLabel_1tz0x_2549", ca = {
  container: Ex,
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
  flex: Ix,
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
  grid: Lx,
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
  relative: Ax,
  absolute: Mx,
  fixed: Ox,
  sticky: Rx,
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
  truncate: Bx,
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
  border: Fx,
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
  rounded: Dx,
  "rounded-md": "_rounded-md_1tz0x_1003",
  "rounded-lg": "_rounded-lg_1tz0x_1007",
  "rounded-xl": "_rounded-xl_1tz0x_1011",
  "rounded-2xl": "_rounded-2xl_1tz0x_1015",
  "rounded-full": "_rounded-full_1tz0x_1019",
  "shadow-none": "_shadow-none_1tz0x_1023",
  "shadow-sm": "_shadow-sm_1tz0x_1027",
  shadow: $x,
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
  transition: Wx,
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
  small: Ux,
  large: Zx,
  "primary-button": "_primary-button_1tz0x_1604",
  "secondary-button": "_secondary-button_1tz0x_1608",
  card: Hx,
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
  Navigation: Vx,
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
  navbarContainer: Gx,
  navbarBrand: Kx,
  navbarItems: qx,
  navbarItem: Yx,
  navbarLink: Jx,
  active: Xx,
  disabled: Qx,
  navbarIcon: ew,
  navbarLabel: tw,
  navbarBadge: iw,
  mobileNavContainer: nw,
  mobileNavItem: aw,
  mobileNavIcon: rw,
  mobileNavLabel: ow,
  mobileNavBadge: sw,
  breadcrumbsList: lw,
  breadcrumbItem: cw,
  breadcrumbLink: dw,
  breadcrumbCurrent: _w,
  breadcrumbSeparator: uw,
  paginationContainer: mw,
  paginationList: pw,
  paginationItem: hw,
  paginationButton: fw,
  tabsContainer: gw,
  tabsList: yw,
  tabItem: bw,
  tabButton: vw,
  tabIcon: xw,
  tabLabel: ww,
  segmentedContainer: kw,
  segmentedGroup: Cw,
  segmentedButton: Sw,
  hamburgerContainer: zw,
  hamburgerList: Nw,
  hamburgerItem: Tw,
  hamburgerLink: jw,
  hamburgerIcon: Pw,
  hamburgerLabel: Ew,
  sideDrawerContainer: Iw,
  sideDrawerList: Lw,
  sideDrawerItem: Aw,
  sideDrawerLink: Mw,
  sideDrawerIcon: Ow,
  sideDrawerLabel: Rw,
  sideDrawerSubList: Bw,
  sideDrawerSubItem: Fw,
  sideDrawerSubLink: Dw,
  genericNavigation: $w,
  genericList: Ww,
  genericItem: Uw,
  genericLink: Zw,
  genericIcon: Hw,
  genericLabel: Vw,
  "loading-shimmer": "_loading-shimmer_1tz0x_1"
}, Gw = {
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
}, Kw = {
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
}, qw = {
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
}, Yw = {
  kind: "side-drawer",
  variant: "embedded",
  layout: "vertical",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  persistState: !0,
  enableKeyboardNav: !0,
  description: "Side drawer navigation for desktop and tablet"
}, Jw = {
  kind: "breadcrumbs",
  variant: "minimal",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Breadcrumb navigation showing current page hierarchy"
}, Xw = {
  kind: "pagination",
  variant: "detailed",
  layout: "horizontal",
  position: "center",
  showIcons: !0,
  showLabels: !0,
  enableKeyboardNav: !0,
  description: "Pagination controls for data tables and lists"
}, Qw = {
  kind: "tabs",
  variant: "primary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  enableKeyboardNav: !0,
  description: "Tab navigation for content sections"
}, e0 = {
  kind: "segmented-controls",
  variant: "secondary",
  layout: "horizontal",
  position: "center",
  showIcons: !1,
  showLabels: !0,
  highlightActive: !0,
  description: "Segmented controls for option selection"
}, t0 = {
  kind: "back-navigation",
  variant: "minimal",
  layout: "horizontal",
  position: "left",
  showIcons: !0,
  showLabels: !0,
  description: "Back navigation button for page transitions"
}, i0 = {
  kind: "step-navigation",
  variant: "detailed",
  layout: "horizontal",
  position: "top",
  showIcons: !0,
  showLabels: !0,
  highlightActive: !0,
  description: "Step-by-step navigation for multi-step processes"
}, n0 = {
  kind: "filter-navigation",
  variant: "secondary",
  layout: "horizontal",
  position: "top",
  showIcons: !1,
  showLabels: !0,
  allowMultiSelect: !0,
  description: "Filter navigation for data filtering"
}, a0 = {
  kind: "quick-navigation",
  variant: "floating",
  layout: "vertical",
  position: "right",
  showIcons: !0,
  showLabels: !1,
  description: "Quick navigation for frequently used actions"
}, Sa = {
  // Primary Navigation
  navbar: Gw,
  "mobile-nav": Kw,
  "hamburger-menu": qw,
  "side-drawer": Yw,
  // Secondary Navigation
  breadcrumbs: Jw,
  pagination: Xw,
  tabs: Qw,
  "segmented-controls": e0,
  // Utility Navigation
  "back-navigation": t0,
  "step-navigation": i0,
  "filter-navigation": n0,
  "quick-navigation": a0
};
function Bl(t) {
  return Sa[t];
}
function tN(t) {
  return t in Sa;
}
function iN(t) {
  return Object.values(Sa).filter(
    (i) => i.variant === t
  );
}
function nN(t) {
  return Object.values(Sa).filter(
    (i) => i.layout === t
  );
}
function ki(t, i) {
  return { ...Bl(t), ...i };
}
const aN = {
  // App Navigation
  primaryApp: () => ki("navbar", {
    variant: "primary",
    showIcons: !0,
    showLabels: !0,
    responsive: !0
  }),
  mobileApp: () => ki("mobile-nav", {
    variant: "mobile-optimized",
    position: "bottom",
    showIcons: !0,
    showLabels: !1
  }),
  // Content Navigation
  contentTabs: () => ki("tabs", {
    variant: "primary",
    showIcons: !1,
    showLabels: !0
  }),
  // Data Navigation
  tablePagination: () => ki("pagination", {
    variant: "detailed",
    enableKeyboardNav: !0
  }),
  // Quick Actions
  floatingNav: () => ki("quick-navigation", {
    variant: "floating",
    position: "right",
    showIcons: !0,
    showLabels: !1
  })
}, rN = {
  navbar: (t) => ki("navbar", { items: t }),
  tabs: (t) => ki("tabs", { items: t }),
  breadcrumbs: (t) => ki("breadcrumbs", { items: t }),
  pagination: (t, i) => ki("pagination", {
    items: r0(
      t,
      i
    )
  })
};
function r0(t, i) {
  const n = [];
  n.push({
    id: "prev",
    label: "Previous",
    disabled: i <= 1,
    path: `page-${i - 1}`
  });
  for (let o = 1; o <= t; o++)
    n.push({
      id: `page-${o}`,
      label: o.toString(),
      active: o === i,
      path: `page-${o}`
    });
  return n.push({
    id: "next",
    label: "Next",
    disabled: i >= t,
    path: `page-${i + 1}`
  }), n;
}
const Fl = Ae(
  ({
    kind: t,
    componentId: i,
    children: n,
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
    currentPage: N = 1,
    onPageChange: A,
    activeTab: O,
    onTabChange: X,
    isOpen: W = !1,
    onToggle: U,
    ...T
  }, j) => {
    const J = Bl(t), V = h ? { ...J, ...h } : J, B = [
      ca.Navigation,
      ca[`navigation--${V.variant}`],
      ca[`navigation--${V.layout}`],
      V.position && ca[`navigation--${V.position}`],
      o
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsx(
      "nav",
      {
        ref: j,
        className: B,
        "data-navigation-kind": t,
        role: V.role || "navigation",
        "aria-label": V.ariaLabel || `${t} navigation`,
        children: o0(
          V,
          c,
          _,
          O,
          I,
          N,
          m,
          v,
          C,
          w,
          n
        )
      }
    );
  }
);
function o0(t, i, n, o, c, _ = 1, m, h, f, g, b) {
  switch (t.kind) {
    case "navbar":
      return renderNavbar(
        t,
        i,
        n,
        m,
        h,
        f,
        g
      );
    case "mobile-nav":
      return renderMobileNav(
        t,
        i,
        n,
        m,
        h,
        f,
        g
      );
    case "hamburger-menu":
      return renderHamburgerMenu(
        t,
        i,
        n,
        m,
        h,
        f,
        g
      );
    case "side-drawer":
      return renderSideDrawer(
        t,
        i,
        n,
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
Fl.displayName = "Navigation";
const s0 = si(Fl), Rt = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (n = {}) => {
    const o = { ...i, ...n };
    return Re.createElement(s0, o);
  };
}, oN = {
  // Primary Navigation
  navbar: Rt("navbar"),
  mobileNav: Rt("mobile-nav"),
  hamburger: Rt("hamburger-menu"),
  sideDrawer: Rt("side-drawer"),
  // Secondary Navigation
  breadcrumbs: Rt("breadcrumbs"),
  pagination: Rt("pagination"),
  tabs: Rt("tabs"),
  segmentedControls: Rt(
    "segmented-controls"
  ),
  // Utility Navigation
  backNav: Rt("back-navigation"),
  stepNav: Rt("step-navigation"),
  filterNav: Rt("filter-navigation"),
  quickNav: Rt("quick-navigation"),
  // Advanced Presets
  responsiveNav: Rt({
    kind: "navbar",
    responsive: !0,
    mobileBreakpoint: 768
  }),
  dashboardNav: Rt({
    kind: "side-drawer",
    collapsible: !0,
    defaultCollapsed: !1
  }),
  wizardNav: Rt({
    kind: "step-navigation",
    showProgress: !0,
    allowSkip: !1
  })
}, l0 = "_notification_1lz2j_134", c0 = "_notification__icon_1lz2j_156", d0 = "_notification__icon_text_1lz2j_165", _0 = "_notification__content_1lz2j_170", u0 = "_notification__title_1lz2j_176", m0 = "_notification__message_1lz2j_186", p0 = "_notification__children_1lz2j_195", h0 = "_notification__close_1lz2j_199", f0 = "_notification__actions_1lz2j_222", g0 = "_notification__action_1lz2j_222", y0 = "_notification__progress_1lz2j_295", b0 = "_notification__progress_bar_1lz2j_306", v0 = "_slideInRight_1lz2j_1", x0 = "_slideOutRight_1lz2j_1", w0 = "_fadeIn_1lz2j_1", k0 = "_fadeOut_1lz2j_1", C0 = "_scaleIn_1lz2j_1", S0 = "_scaleOut_1lz2j_1", z0 = "_bounceIn_1lz2j_1", N0 = "_shake_1lz2j_1", tt = {
  notification: l0,
  "notification--hidden": "_notification--hidden_1lz2j_151",
  notification__icon: c0,
  notification__icon_text: d0,
  notification__content: _0,
  notification__title: u0,
  notification__message: m0,
  notification__children: p0,
  notification__close: h0,
  notification__actions: f0,
  notification__action: g0,
  "notification__action--primary": "_notification__action--primary_1lz2j_265",
  "notification__action--secondary": "_notification__action--secondary_1lz2j_270",
  "notification__action--text": "_notification__action--text_1lz2j_275",
  "notification__action--confirm": "_notification__action--confirm_1lz2j_280",
  "notification__action--cancel": "_notification__action--cancel_1lz2j_285",
  notification__progress: y0,
  notification__progress_bar: b0,
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
  slideInRight: v0,
  "notification--exit-slide": "_notification--exit-slide_1lz2j_534",
  slideOutRight: x0,
  "notification--enter-fade": "_notification--enter-fade_1lz2j_538",
  fadeIn: w0,
  "notification--exit-fade": "_notification--exit-fade_1lz2j_542",
  fadeOut: k0,
  "notification--enter-scale": "_notification--enter-scale_1lz2j_546",
  scaleIn: C0,
  "notification--exit-scale": "_notification--exit-scale_1lz2j_550",
  scaleOut: S0,
  "notification--enter-bounce": "_notification--enter-bounce_1lz2j_554",
  bounceIn: z0,
  "notification--enter-shake": "_notification--enter-shake_1lz2j_558",
  shake: N0,
  "loading-shimmer": "_loading-shimmer_1lz2j_1"
}, fs = {
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
}, Dl = (t) => fs[t] || fs.toast, T0 = (t, i) => ({
  ...t,
  ...i
}), sN = (t, i = {}) => {
  const n = Dl(t);
  return T0(n, i);
}, lN = (t) => {
  const i = [];
  return t.kind || i.push("Notification kind is required"), t.autoHide && t.duration && t.duration < 0 && i.push(
    "Duration must be positive when autoHide is true"
  ), t.actions && t.actions.forEach((n, o) => {
    n.label || i.push(`Action ${o} label is required`), n.onClick || i.push(
      `Action ${o} onClick handler is required`
    );
  }), i;
}, j0 = (t) => {
  const i = {
    success: "✓",
    error: "✗",
    warning: "⚠",
    info: "ℹ",
    neutral: "•"
  };
  return i[t] || i.neutral;
}, $l = Ae((t, i) => {
  const {
    kind: n,
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
    duration: N,
    persistent: A,
    dismissible: O,
    pauseOnHover: X,
    // Actions
    actions: W,
    confirmText: U,
    cancelText: T,
    // Styling
    showIcon: j,
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
  } = t, E = Dl(n), te = {
    ...E,
    title: m || E.title,
    message: h || E.message,
    variant: b || E.variant,
    severity: v || E.severity,
    position: C || E.position,
    autoHide: I !== void 0 ? I : E.autoHide,
    duration: N !== void 0 ? N : E.duration,
    persistent: A !== void 0 ? A : E.persistent,
    dismissible: O !== void 0 ? O : E.dismissible,
    pauseOnHover: X !== void 0 ? X : E.pauseOnHover,
    actions: W || E.actions,
    confirmText: U || E.confirmText,
    cancelText: T || E.cancelText,
    showIcon: j !== void 0 ? j : E.showIcon,
    showCloseButton: J !== void 0 ? J : E.showCloseButton,
    showProgress: V !== void 0 ? V : E.showProgress,
    enterAnimation: B || E.enterAnimation,
    exitAnimation: G || E.exitAnimation
  }, [x, Z] = Re.useState(w), [z, H] = Re.useState(!1), [q, ee] = Re.useState(100);
  Re.useEffect(() => {
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
  ]), Re.useEffect(() => {
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
    const Se = f || te.severity && j0(te.severity);
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
$l.displayName = "Notification";
const P0 = si($l), rt = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (n = {}) => {
    const o = { ...i, ...n };
    return Re.createElement(P0, o);
  };
}, cN = {
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
}, E0 = {
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
}, Wl = (t) => E0[t], I0 = "_progress_8roj1_132", L0 = "_progress__header_8roj1_142", A0 = "_progress__label_8roj1_188", M0 = "_progress__value_8roj1_192", O0 = "_progress__description_8roj1_197", R0 = "_progress__content_8roj1_202", B0 = "_progress__custom_8roj1_205", F0 = "_progress__track_8roj1_208", D0 = "_progress__fill_8roj1_216", $0 = "_progress__spinner_8roj1_234", W0 = "_progress__spinner_circle_8roj1_239", U0 = "_spin_8roj1_1", Z0 = "_progress__dots_8roj1_267", H0 = "_progress__dot_8roj1_267", V0 = "_bounce_8roj1_1", G0 = "_progress__circular_8roj1_289", K0 = "_progress__circular_indeterminate_8roj1_301", q0 = "_rotate_8roj1_1", Y0 = "_progress__percentage_8roj1_304", J0 = "_progress__steps_8roj1_314", X0 = "_progress__step_8roj1_314", Q0 = "_progress__step_marker_8roj1_349", ek = "_progress__step_content_8roj1_376", tk = "_progress__step_label_8roj1_381", ik = "_progress__step_description_8roj1_386", nk = "_progress__skeleton_8roj1_390", ak = "_progress__skeleton_line_8roj1_395", rk = "_pulse_8roj1_1", wi = {
  progress: I0,
  "progress--xs": "_progress--xs_8roj1_139",
  progress__header: L0,
  "progress--sm": "_progress--sm_8roj1_147",
  "progress--md": "_progress--md_8roj1_155",
  "progress--lg": "_progress--lg_8roj1_163",
  "progress--xl": "_progress--xl_8roj1_171",
  progress__label: A0,
  progress__value: M0,
  progress__description: O0,
  progress__content: R0,
  progress__custom: B0,
  progress__track: F0,
  progress__fill: D0,
  "progress--striped": "_progress--striped_8roj1_224",
  "progress--animated": "_progress--animated_8roj1_228",
  "progress-bar-stripes": "_progress-bar-stripes_8roj1_1",
  "progress--indeterminate": "_progress--indeterminate_8roj1_231",
  "progress-indeterminate": "_progress-indeterminate_8roj1_1",
  progress__spinner: $0,
  progress__spinner_circle: W0,
  spin: U0,
  progress__dots: Z0,
  progress__dot: H0,
  bounce: V0,
  progress__circular: G0,
  progress__circular_indeterminate: K0,
  rotate: q0,
  progress__percentage: Y0,
  progress__steps: J0,
  "progress--vertical": "_progress--vertical_8roj1_318",
  progress__step: X0,
  "progress__step--completed": "_progress__step--completed_8roj1_346",
  progress__step_marker: Q0,
  "progress__step--active": "_progress__step--active_8roj1_353",
  "progress__step--error": "_progress__step--error_8roj1_358",
  progress__step_content: ek,
  progress__step_label: tk,
  progress__step_description: ik,
  progress__skeleton: nk,
  progress__skeleton_line: ak,
  "skeleton-shimmer": "_skeleton-shimmer_8roj1_1",
  "progress--primary": "_progress--primary_8roj1_410",
  "progress--secondary": "_progress--secondary_8roj1_416",
  "progress--success": "_progress--success_8roj1_422",
  "progress--warning": "_progress--warning_8roj1_428",
  "progress--error": "_progress--error_8roj1_434",
  "progress--info": "_progress--info_8roj1_440",
  "progress--pulse": "_progress--pulse_8roj1_446",
  pulse: rk,
  "progress--bounce": "_progress--bounce_8roj1_450",
  "progress--spin": "_progress--spin_8roj1_453",
  "progress--slide": "_progress--slide_8roj1_456",
  "slide-in": "_slide-in_8roj1_1",
  "progress--fade": "_progress--fade_8roj1_459",
  "fade-in": "_fade-in_8roj1_1",
  "progress--horizontal": "_progress--horizontal_8roj1_574",
  "loading-shimmer": "_loading-shimmer_8roj1_1"
}, Ul = Ae(
  ({
    kind: t,
    children: i,
    className: n = "",
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
    orientation: N,
    variant: A,
    size: O,
    animation: X,
    thickness: W,
    color: U,
    backgroundColor: T,
    onComplete: j,
    onStepChange: J,
    ...V
  }, B) => {
    const G = Wl(t), F = {
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
      orientation: N ?? G.orientation,
      variant: A ?? G.variant,
      size: O ?? G.size,
      animation: X ?? G.animation,
      thickness: W ?? G.thickness,
      color: U ?? G.color,
      backgroundColor: T ?? G.backgroundColor
    }, Q = Math.min(
      Math.max(o / c * 100, 0),
      100
    ), le = [
      wi.progress,
      wi[`progress--${F.kind}`],
      wi[`progress--${F.variant}`],
      wi[`progress--${F.size}`],
      F.animation !== "none" && wi[`progress--${F.animation}`],
      F.indeterminate && wi["progress--indeterminate"],
      F.striped && wi["progress--striped"],
      F.animated && wi["progress--animated"],
      F.orientation && wi[`progress--${F.orientation}`],
      n
    ].filter(Boolean).join(" ");
    return Re.useEffect(() => {
      Q >= 100 && j && j();
    }, [Q, j]), Re.useEffect(() => {
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
Ul.displayName = "Progress";
const ok = si(Ul);
class dt {
  static create(i) {
    return Re.forwardRef(
      (n, o) => Re.createElement(ok, {
        ref: o,
        ...i,
        ...n
      })
    );
  }
  static createFromKind(i) {
    const n = Wl(i);
    return this.create(n);
  }
}
const dN = {
  // Loading indicators
  LoadingSpinner: dt.createFromKind(
    "loading-spinner"
  ),
  DotsLoader: dt.createFromKind("dots-loader"),
  PulseLoader: dt.createFromKind("pulse-loader"),
  BounceLoader: dt.createFromKind("bounce-loader"),
  SkeletonLoader: dt.createFromKind(
    "skeleton-loader"
  ),
  // Progress bars
  LinearProgress: dt.createFromKind(
    "linear-progress"
  ),
  CircularProgress: dt.createFromKind(
    "circular-progress"
  ),
  RadialProgress: dt.createFromKind(
    "radial-progress"
  ),
  StepProgress: dt.createFromKind("step-progress"),
  MultiStep: dt.createFromKind("multi-step"),
  // Upload/Download progress
  UploadProgress: dt.createFromKind(
    "upload-progress"
  ),
  DownloadProgress: dt.createFromKind(
    "download-progress"
  ),
  SyncProgress: dt.createFromKind("sync-progress"),
  // Game/Activity progress
  LevelProgress: dt.createFromKind(
    "level-progress"
  ),
  AchievementProgress: dt.createFromKind(
    "achievement-progress"
  ),
  CompletionProgress: dt.createFromKind(
    "completion-progress"
  ),
  HealthBar: dt.createFromKind("health-bar"),
  ExperienceBar: dt.createFromKind(
    "experience-bar"
  ),
  // System progress
  InstallationProgress: dt.createFromKind(
    "installation-progress"
  ),
  BackupProgress: dt.createFromKind(
    "backup-progress"
  ),
  ProcessingProgress: dt.createFromKind(
    "processing-progress"
  ),
  BatteryIndicator: dt.createFromKind(
    "battery-indicator"
  )
}, sk = "_friendsSidebarOverlay_16x1o_131", lk = "_friendsSidebarOverlayModal_16x1o_131", ck = "_settingsSidebarOverlay_16x1o_132", dk = "_notificationsSidebarOverlay_16x1o_133", _k = "_notificationsSidebar_16x1o_133", uk = "_chatSidebar_16x1o_151", mk = "_settingsSidebar_16x1o_132", pk = "_friendsSidebar_16x1o_131", hk = "_friendsSidebarResponsive_16x1o_151", fk = "_friendsSidebarDesktop_16x1o_151", gk = "_friendsSidebarMobile_16x1o_151", yk = "_friendsSidebarNoAnimation_16x1o_151", bk = "_sidebarContent_16x1o_186", vk = "_sidebarHeader_16x1o_197", xk = "_sidebarTitle_16x1o_204", wk = "_sidebarFooter_16x1o_215", kk = "_sidebarCloseBtn_16x1o_551", Ck = "_sidebarCloseBtnLeft_16x1o_551", fe = {
  friendsSidebarOverlay: sk,
  friendsSidebarOverlayModal: lk,
  settingsSidebarOverlay: ck,
  notificationsSidebarOverlay: dk,
  notificationsSidebar: _k,
  chatSidebar: uk,
  settingsSidebar: mk,
  friendsSidebar: pk,
  friendsSidebarResponsive: hk,
  friendsSidebarDesktop: fk,
  friendsSidebarMobile: gk,
  friendsSidebarNoAnimation: yk,
  sidebarContent: bk,
  sidebarHeader: vk,
  sidebarTitle: xk,
  sidebarFooter: wk,
  sidebarCloseBtn: kk,
  sidebarCloseBtnLeft: Ck,
  "sidebar-sr-only": "_sidebar-sr-only_16x1o_644"
}, Sk = {
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
}, Zl = Ae(
  ({
    kind: t = "friends",
    open: i,
    onClose: n,
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
    animationDuration: N,
    disableAnimation: A = !1,
    ariaLabel: O,
    ariaLabelledBy: X,
    ariaDescribedBy: W,
    role: U = "dialog",
    overlayClassName: T,
    headerClassName: j,
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
    const te = Sk[t], x = _t(null), Z = _t(null), z = _t(null), H = _t(!1), q = {
      ...te,
      hasOverlay: h ?? te.hasOverlay,
      showCloseButton: f ?? te.showCloseButton,
      closeButtonText: g ?? te.closeButtonText,
      animationDuration: N ?? te.animationDuration
    }, ee = Je(
      (R) => {
        R.key === "Escape" && i && C && (R.preventDefault(), ge == null || ge(), n == null || n());
      },
      [i, C, n, ge]
    ), Y = Je(
      (R) => {
        R.target === x.current && v && (le == null || le(), n == null || n());
      },
      [v, n, le]
    ), me = Je(() => {
      n == null || n();
    }, [n]);
    Be(() => (i && w && (z.current = document.activeElement, setTimeout(() => {
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
    ]), Be(() => {
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
    }, [i, ee]), Be(() => {
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
    ]), Be(() => {
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
      T
    ].filter(Boolean).join(" "), Ee = [
      fe.sidebarHeader,
      j
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
Zl.displayName = "Sidebar";
const _N = ({ open: t, onClose: i, children: n }) => /* @__PURE__ */ s.jsx(Zl, { kind: "friends", open: t, onClose: i, children: n });
class Bt {
  /**
   * Create a sidebar with a specific kind and minimal props
   */
  static create(i, n = {}) {
    return Re.createElement(ot, {
      kind: i,
      open: !1,
      // Default value
      ...n
    });
  }
  /**
   * Create a sidebar from a configuration group
   */
  static createFromGroup(i, n = 0, o = {}) {
    const _ = SIDEBAR_GROUPS[i][n];
    if (!_)
      throw new Error(
        `Invalid index ${n} for group ${i}`
      );
    return this.create(_, o);
  }
  /**
   * Create a quick sidebar preset
   */
  static createQuick(i, n = {}) {
    const o = QUICK_SIDEBARS[i];
    return this.create(o, n);
  }
  /**
   * Create multiple sidebars at once
   */
  static createMultiple(i) {
    return i.map(
      ({ kind: n, props: o = {}, key: c }, _) => Re.cloneElement(this.create(n, o), {
        key: c || `sidebar-${n}-${_}`
      })
    );
  }
  /**
   * Create a sidebar with custom configuration
   */
  static createCustom(i, n, o = {}) {
    return this.create(i, {
      ...o,
      className: n.className ? `${o.className || ""} ${n.className}`.trim() : o.className
    });
  }
}
const ot = (t, i) => Bt.create(t, i), uN = {
  Friends: (t) => Bt.createQuick("FRIENDS_DEFAULT", t),
  FriendsMobile: (t) => Bt.createQuick("FRIENDS_MOBILE", t),
  FriendsDesktop: (t) => Bt.createQuick("FRIENDS_DESKTOP", t),
  Settings: (t) => Bt.createQuick("SETTINGS_DEFAULT", t),
  Chat: (t) => Bt.createQuick("CHAT_DEFAULT", t),
  Notifications: (t) => Bt.createQuick(
    "NOTIFICATIONS_DEFAULT",
    t
  )
}, mN = {
  Friends: (t = 0, i) => Bt.createFromGroup("FRIENDS", t, i),
  Settings: (t = 0, i) => Bt.createFromGroup(
    "SETTINGS",
    t,
    i
  ),
  Chat: (t = 0, i) => Bt.createFromGroup("CHAT", t, i),
  Notifications: (t = 0, i) => Bt.createFromGroup(
    "NOTIFICATIONS",
    t,
    i
  ),
  Sizes: (t = 0, i) => Bt.createFromGroup("SIZES", t, i),
  Behaviors: (t = 0, i) => Bt.createFromGroup(
    "BEHAVIORS",
    t,
    i
  ),
  Animations: (t = 0, i) => Bt.createFromGroup(
    "ANIMATIONS",
    t,
    i
  ),
  Responsive: (t = 0, i) => Bt.createFromGroup(
    "RESPONSIVE",
    t,
    i
  )
}, pN = (t) => ot("friends", t), hN = (t) => ot("friends-compact", t), fN = (t) => ot("friends-expanded", t), gN = (t) => ot("settings", t), yN = (t) => ot("chat", t), bN = (t) => ot("notifications", t), vN = (t = "friends", i) => ot(`${t}-left`, i), xN = (t = "friends", i) => ot(`${t}-right`, i), wN = (t = "friends", i) => ot(`${t}-small`, i), kN = (t = "friends", i) => ot(
  `${t}-medium`,
  i
), CN = (t = "friends", i) => ot(`${t}-large`, i), SN = (t = "friends", i) => ot(`${t}-full`, i), zN = (t = "friends", i) => ot(
  `${t}-mobile`,
  i
), NN = (t = "friends", i) => ot(
  `${t}-desktop`,
  i
), TN = (t = "friends", i) => ot(
  `${t}-responsive`,
  i
), jN = (t = "friends", i) => ot(`${t}-fade`, i), PN = (t = "friends", i) => ot(`${t}-scale`, i), EN = (t = "friends", i) => ot(
  `${t}-no-animation`,
  i
), IN = (t = "friends", i) => ot(`${t}-modal`, i), LN = (t = "friends", i) => ot(`${t}-slide`, i), AN = (t = "friends", i) => ot(`${t}-push`, i), MN = (t = "friends", i) => ot(
  `${t}-overlay`,
  i
), ON = {
  /**
   * Create a sidebar stack (multiple sidebars with different z-indexes)
   */
  createStack: (t) => t.map(
    ({ kind: i, props: n = {} }, o) => {
      var c;
      return ot(i, {
        ...n,
        style: {
          ...n.style,
          zIndex: (((c = n.style) == null ? void 0 : c.zIndex) || 1e3) + o
        }
      });
    }
  ),
  /**
   * Create a responsive sidebar that changes based on screen size
   */
  createResponsive: (t, i, n) => ot("friends-responsive", n)
}, gs = {
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
}, Hl = (t) => gs[t] || gs["data-table"], zk = (t, i) => ({
  ...t,
  ...i,
  columns: i.columns || t.columns,
  data: i.data || t.data
}), RN = (t, i = {}) => {
  const n = Hl(t);
  return zk(n, i);
}, BN = (t) => {
  const i = [];
  if (t.kind || i.push("Table kind is required"), t.pagination && typeof t.pagination == "object") {
    const n = t.pagination;
    n.page < 1 && i.push("Pagination page must be >= 1"), n.pageSize < 1 && i.push("Pagination pageSize must be >= 1");
  }
  return t.selectable && !t.selectionMode && i.push(
    "Selection mode required when selectable is true"
  ), i;
}, Nk = "_container_m9htu_131", Tk = "_flex_m9htu_262", jk = "_grid_m9htu_358", Pk = "_relative_m9htu_740", Ek = "_absolute_m9htu_744", Ik = "_fixed_m9htu_748", Lk = "_sticky_m9htu_752", Ak = "_truncate_m9htu_891", Mk = "_border_m9htu_951", Ok = "_rounded_m9htu_991", Rk = "_shadow_m9htu_1023", Bk = "_transition_m9htu_1095", Fk = "_small_m9htu_1595", Dk = "_large_m9htu_1599", $k = "_card_m9htu_1647", Wk = "_table_container_m9htu_1772", Uk = "_table_wrapper_m9htu_1789", Zk = "_table_m9htu_1245", Hk = "_table__header_m9htu_1847", Vk = "_table__header_row_m9htu_1862", Gk = "_table__header_cell_m9htu_1866", Kk = "_table__header_content_m9htu_1898", qk = "_table__sort_indicator_m9htu_1907", Yk = "_table__body_m9htu_1916", Jk = "_table__row_m9htu_1920", Xk = "_table__cell_m9htu_1956", Qk = "_table__empty_row_m9htu_1971", e2 = "_table__empty_cell_m9htu_1971", t2 = "_table__expand_button_m9htu_1978", i2 = "_table__search_m9htu_1995", n2 = "_table__search_input_m9htu_2001", a2 = "_skeleton_content_m9htu_2020", Fe = {
  container: Nk,
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
  flex: Tk,
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
  grid: jk,
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
  relative: Pk,
  absolute: Ek,
  fixed: Ik,
  sticky: Lk,
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
  truncate: Ak,
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
  border: Mk,
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
  rounded: Ok,
  "rounded-md": "_rounded-md_m9htu_1003",
  "rounded-lg": "_rounded-lg_m9htu_1007",
  "rounded-xl": "_rounded-xl_m9htu_1011",
  "rounded-2xl": "_rounded-2xl_m9htu_1015",
  "rounded-full": "_rounded-full_m9htu_1019",
  "shadow-none": "_shadow-none_m9htu_1023",
  "shadow-sm": "_shadow-sm_m9htu_1027",
  shadow: Rk,
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
  transition: Bk,
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
  small: Fk,
  large: Dk,
  "primary-button": "_primary-button_m9htu_1604",
  "secondary-button": "_secondary-button_m9htu_1608",
  card: $k,
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
  table_container: Wk,
  table_wrapper: Uk,
  table: Zk,
  "table--fixed": "_table--fixed_m9htu_1832",
  "table--auto": "_table--auto_m9htu_1835",
  "table--responsive": "_table--responsive_m9htu_1838",
  table__header: Hk,
  "table--sticky-header": "_table--sticky-header_m9htu_1851",
  table__header_row: Vk,
  table__header_cell: Gk,
  "table__header_cell--sortable": "_table__header_cell--sortable_m9htu_1878",
  table__header_content: Kk,
  table__sort_indicator: qk,
  table__body: Yk,
  table__row: Jk,
  "table--hover": "_table--hover_m9htu_1927",
  "table--clickable": "_table--clickable_m9htu_1930",
  "table__row--selected": "_table__row--selected_m9htu_1945",
  "table__row--expanded": "_table__row--expanded_m9htu_1949",
  "table__row--skeleton": "_table__row--skeleton_m9htu_1952",
  table__cell: Xk,
  "table__cell--skeleton": "_table__cell--skeleton_m9htu_1967",
  table__empty_row: Qk,
  table__empty_cell: e2,
  table__expand_button: t2,
  table__search: i2,
  table__search_input: n2,
  skeleton_content: a2,
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
}, Vl = Ae(
  (t, i) => {
    const {
      kind: n,
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
      editable: N,
      // Sorting
      defaultSort: A,
      multiSort: O,
      onSort: X,
      // Filtering
      defaultFilters: W,
      searchable: U,
      searchPlaceholder: T,
      onFilter: j,
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
    } = t, pe = Hl(n), we = (P, _e) => P !== void 0 ? P : _e, re = {
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
        N,
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
    }, Se = ga(), he = _ || `table-${Se}`, $ = un();
    Be(() => ($(
      Sp({
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
        jp({
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
    const R = ai(
      (P) => Pp(P, he)
    ), Le = ai(
      (P) => Ep(P, he)
    ), Xe = ai(
      (P) => Ip(P, he)
    ), qe = ai(
      (P) => Lp(P, he)
    ), Ke = ai(
      (P) => Ap(P, he)
    ), $e = ai(
      (P) => Mp(P, he)
    ), ve = Array.from(qe), Ue = Array.from(Ke), nt = Object.entries(Le).map(
      ([P, _e]) => ({
        column: P,
        value: _e,
        operator: "equals"
      })
    ), ut = m || [], Oe = h || [], Tt = Ci(() => re.loading ? Array.from(
      { length: re.loadingRows || 5 },
      (_e, ze) => {
        const Pt = { id: `skeleton-${ze}` };
        return ut.forEach((Gt) => {
          Pt[Gt.key] = "...";
        }), Pt;
      }
    ) : [], [re.loading, re.loadingRows, ut]), Lt = re.loading ? Tt : Oe, jt = Ci(() => !re.searchable || !Xe.trim() ? Lt : Lt.filter((P) => ut.some((_e) => {
      const ze = P[_e.key];
      return String(ze).toLowerCase().includes(Xe.toLowerCase());
    })), [
      Lt,
      Xe,
      ut,
      re.searchable
    ]), li = Ci(() => Le.length === 0 ? jt : jt.filter((P) => nt.every(
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
    )), [jt, nt]), Ft = Ci(() => !re.sortable || !R.column ? li : [...li].sort((P, _e) => {
      const ze = P[R.column], Pt = _e[R.column];
      let Gt = 0;
      return ze < Pt ? Gt = -1 : ze > Pt && (Gt = 1), R.direction === "desc" ? -Gt : Gt;
    }), [li, R, re.sortable]), ci = (P) => {
      if (!re.sortable) return;
      let _e = "asc";
      R.column === P && (_e = R.direction === "asc" ? "desc" : R.direction === "desc" ? "none" : "asc");
      const ze = { column: P, direction: _e };
      $(
        zp({
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
        (Pt) => Pt !== P
      ), $(
        cs({
          componentId: he,
          selectedRows: ze
        })
      ), G == null || G(ze);
    }, Vt = (P) => {
      if (!re.expandable) return;
      const _e = Ue.includes(P), ze = _e ? Ue.filter(
        (Pt) => Pt !== P
      ) : [...Ue, P];
      $(
        Tp({
          componentId: he,
          expandedRows: ze
        })
      ), le == null || le(P, !_e);
    }, Jt = (P, _e, ze) => {
      Y == null || Y(P, _e, ze), $(
        Cr({
          componentId: he,
          editingCell: null
        })
      );
    }, Ti = [
      Fe.table,
      Fe[`table--${re.kind}`],
      Fe[`table--${re.variant}`],
      Fe[`table--${re.layout}`],
      re.stickyHeader && Fe["table--sticky-header"],
      re.zebraStripes && Fe["table--striped"],
      re.hoverEffects && Fe["table--hover"],
      re.clickableRows && Fe["table--clickable"],
      re.loading && Fe["table--loading"],
      re.borderStyle && Fe[`table--border-${re.borderStyle}`],
      c
    ].filter(Boolean).join(" "), ji = [
      Fe.table__header,
      me
    ].filter(Boolean).join(" "), ye = [Fe.table__body, de].filter(Boolean).join(" "), je = () => /* @__PURE__ */ s.jsx("thead", { className: ji, children: /* @__PURE__ */ s.jsxs("tr", { className: Fe.table__header_row, children: [
      re.selectable && /* @__PURE__ */ s.jsx("th", { className: Fe.table__header_cell, children: /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          onChange: (P) => {
            const _e = Ft.map(
              (Pt) => Pt[f]
            ), ze = P.target.checked ? _e : [];
            $(
              cs({
                componentId: he,
                selectedRows: ze
              })
            ), G == null || G(ze);
          },
          checked: ve.length === Ft.length && Ft.length > 0,
          ref: (P) => {
            P && (P.indeterminate = ve.length > 0 && ve.length < Ft.length);
          }
        }
      ) }),
      re.expandable && /* @__PURE__ */ s.jsx("th", { className: Fe.table__header_cell }),
      ut.map((P) => /* @__PURE__ */ s.jsx(
        "th",
        {
          className: `${Fe.table__header_cell} ${P.sortable !== !1 && re.sortable ? Fe["table__header_cell--sortable"] : ""}`,
          style: {
            width: P.width,
            minWidth: P.minWidth,
            maxWidth: P.maxWidth,
            textAlign: P.align || "left"
          },
          onClick: () => P.sortable !== !1 && ci(P.key),
          children: /* @__PURE__ */ s.jsxs(
            "span",
            {
              className: Fe.table__header_content,
              children: [
                P.label,
                re.sortable && P.sortable !== !1 && /* @__PURE__ */ s.jsx(
                  "span",
                  {
                    className: Fe.table__sort_indicator,
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
      const ze = P[f], Pt = ve.includes(ze), Gt = Ue.includes(ze), za = typeof Me == "function" ? Me(P, _e) : Me, Na = [
        Fe.table__row,
        Pt && Fe["table__row--selected"],
        Gt && Fe["table__row--expanded"],
        re.loading && Fe["table__row--skeleton"],
        za
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ s.jsxs(
        "tr",
        {
          className: Na,
          onClick: () => {
            re.clickableRows && (q == null || q(P, _e));
          },
          onDoubleClick: () => ee == null ? void 0 : ee(P, _e),
          children: [
            re.selectable && /* @__PURE__ */ s.jsx("td", { className: Fe.table__cell, children: /* @__PURE__ */ s.jsx(
              "input",
              {
                type: re.selectionMode === "single" ? "radio" : "checkbox",
                checked: Pt,
                onChange: (vt) => Ht(
                  ze,
                  vt.target.checked
                )
              }
            ) }),
            re.expandable && /* @__PURE__ */ s.jsx("td", { className: Fe.table__cell, children: /* @__PURE__ */ s.jsx(
              ke,
              {
                kind: "ghost",
                className: Fe.table__expand_button,
                onClick: (vt) => {
                  vt.stopPropagation(), Vt(ze);
                },
                children: Gt ? "−" : "+"
              }
            ) }),
            ut.map((vt) => {
              const Wi = P[vt.key], Xt = ($e == null ? void 0 : $e.rowId) === ze && ($e == null ? void 0 : $e.column) === vt.key, ue = typeof Ee == "function" ? Ee(Wi, P, vt) : Ee, Dn = [
                Fe.table__cell,
                re.loading && Fe["table__cell--skeleton"],
                ue
              ].filter(Boolean).join(" ");
              return /* @__PURE__ */ s.jsx(
                "td",
                {
                  className: Dn,
                  style: {
                    textAlign: vt.align || "left"
                  },
                  onDoubleClick: () => {
                    re.editable && $(
                      Cr({
                        componentId: he,
                        editingCell: {
                          rowId: ze,
                          column: vt.key
                        }
                      })
                    );
                  },
                  children: Xt ? /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      defaultValue: Wi,
                      onBlur: (Pi) => Jt(
                        ze,
                        vt.key,
                        Pi.target.value
                      ),
                      onKeyDown: (Pi) => {
                        Pi.key === "Enter" ? Jt(
                          ze,
                          vt.key,
                          Pi.currentTarget.value
                        ) : Pi.key === "Escape" && $(
                          Cr({
                            componentId: he,
                            editingCell: null
                          })
                        );
                      },
                      autoFocus: !0
                    }
                  ) : vt.cellRenderer ? vt.cellRenderer(
                    Wi,
                    P,
                    vt
                  ) : vt.format ? vt.format(Wi) : re.loading ? /* @__PURE__ */ s.jsx(
                    p,
                    {
                      className: Fe.skeleton_content
                    }
                  ) : Wi
                },
                vt.key
              );
            })
          ]
        },
        ze
      );
    }, At = () => re.searchable ? /* @__PURE__ */ s.jsx(p, { className: Fe.table__search, children: /* @__PURE__ */ s.jsx(
      "input",
      {
        type: "text",
        placeholder: T || re.searchPlaceholder || "Search...",
        value: Xe,
        onChange: (P) => $(
          Np({
            componentId: he,
            searchTerm: P.target.value
          })
        ),
        className: Fe.table__search_input
      }
    ) }) : null, di = {
      height: ne,
      maxHeight: ce,
      minHeight: E
    };
    return /* @__PURE__ */ s.jsxs(p, { className: Fe.table_container, children: [
      At(),
      /* @__PURE__ */ s.jsx(
        p,
        {
          className: Fe.table_wrapper,
          style: di,
          children: /* @__PURE__ */ s.jsxs(
            "table",
            {
              ...ae,
              ref: i,
              className: Ti,
              children: [
                je(),
                /* @__PURE__ */ s.jsxs("tbody", { className: ye, children: [
                  Ft.map(
                    (P, _e) => at(P, _e)
                  ),
                  Ft.length === 0 && !re.loading && /* @__PURE__ */ s.jsx("tr", { className: Fe.table__empty_row, children: /* @__PURE__ */ s.jsx(
                    "td",
                    {
                      colSpan: ut.length + (re.selectable ? 1 : 0) + (re.expandable ? 1 : 0),
                      className: Fe.table__empty_cell,
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
Vl.displayName = "Table";
const r2 = si(Vl), wt = (t) => {
  const i = typeof t == "string" ? { kind: t } : t;
  return (n = {}) => {
    const o = { ...i, ...n };
    return Re.createElement(r2, o);
  };
}, FN = {
  // Basic Tables
  dataTable: wt("data-table"),
  simpleTable: wt("simple-table"),
  sortableTable: wt("sortable-table"),
  filterableTable: wt("filterable-table"),
  // Advanced Tables
  dataGrid: wt("data-grid"),
  editableGrid: wt("editable-grid"),
  selectableGrid: wt("selectable-grid"),
  expandableGrid: wt("expandable-grid"),
  // Loading States
  skeletonTable: wt("skeleton-table"),
  loadingTable: wt("loading-table"),
  // Specialized Tables
  pricingTable: wt("pricing-table"),
  comparisonTable: wt("comparison-table"),
  statsTable: wt("stats-table"),
  leaderboardTable: wt("leaderboard-table"),
  // Advanced Presets
  dashboardGrid: wt({
    kind: "data-grid",
    variant: "modern",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    pagination: !0,
    stickyHeader: !0
  }),
  adminTable: wt({
    kind: "data-grid",
    variant: "bordered",
    sortable: !0,
    filterable: !0,
    selectable: !0,
    selectionMode: "multiple",
    editable: !0,
    pagination: !0
  }),
  reportTable: wt({
    kind: "stats-table",
    variant: "striped",
    sortable: !0,
    filterable: !0,
    searchable: !0,
    zebraStripes: !0,
    stickyHeader: !0
  }),
  quickList: wt({
    kind: "simple-table",
    variant: "minimal",
    hoverEffects: !0,
    clickableRows: !0
  }),
  gameLeaderboard: wt({
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
}, o2 = "_container_17enc_143", s2 = "_flex_17enc_274", l2 = "_grid_17enc_370", c2 = "_relative_17enc_752", d2 = "_absolute_17enc_756", _2 = "_fixed_17enc_760", u2 = "_sticky_17enc_764", m2 = "_truncate_17enc_903", p2 = "_border_17enc_963", h2 = "_rounded_17enc_1003", f2 = "_shadow_17enc_1035", g2 = "_transition_17enc_1107", y2 = "_small_17enc_1607", b2 = "_large_17enc_1611", v2 = "_card_17enc_1659", x2 = "_utility_17enc_1784", w2 = "_utility__icon_17enc_2043", k2 = "_utility__label_17enc_2049", C2 = "_utility__dismiss_17enc_2055", S2 = "_utility__overlay_17enc_2092", z2 = "_utility__tooltip_17enc_2152", N2 = "_utility__popover_17enc_2155", T2 = "_utility__popover_title_17enc_2160", j2 = "_utility__popover_content_17enc_2165", P2 = "_utility__rating_17enc_2168", E2 = "_utility__star_17enc_2176", I2 = "_utility__rating_label_17enc_2215", L2 = "_utility__stepper_17enc_2222", A2 = "_utility__step_17enc_2222", M2 = "_utility__step_marker_17enc_2251", O2 = "_utility__step_connector_17enc_2267", R2 = "_utility__divider_label_17enc_2287", Ze = {
  container: o2,
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
  flex: s2,
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
  grid: l2,
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
  relative: c2,
  absolute: d2,
  fixed: _2,
  sticky: u2,
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
  truncate: m2,
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
  border: p2,
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
  rounded: h2,
  "rounded-md": "_rounded-md_17enc_1015",
  "rounded-lg": "_rounded-lg_17enc_1019",
  "rounded-xl": "_rounded-xl_17enc_1023",
  "rounded-2xl": "_rounded-2xl_17enc_1027",
  "rounded-full": "_rounded-full_17enc_1031",
  "shadow-none": "_shadow-none_17enc_1035",
  "shadow-sm": "_shadow-sm_17enc_1039",
  shadow: f2,
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
  transition: g2,
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
  small: y2,
  large: b2,
  "primary-button": "_primary-button_17enc_1616",
  "secondary-button": "_secondary-button_17enc_1620",
  card: v2,
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
  utility: x2,
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
  utility__icon: w2,
  utility__label: k2,
  utility__dismiss: C2,
  utility__overlay: S2,
  "utility--visible": "_utility--visible_17enc_2111",
  "utility--top": "_utility--top_17enc_2116",
  "utility--bottom": "_utility--bottom_17enc_2125",
  "utility--left": "_utility--left_17enc_2134",
  "utility--right": "_utility--right_17enc_2143",
  utility__tooltip: z2,
  utility__popover: N2,
  utility__popover_title: T2,
  utility__popover_content: j2,
  utility__rating: P2,
  utility__star: E2,
  "utility__star--filled": "_utility__star--filled_17enc_2201",
  utility__rating_label: I2,
  utility__stepper: L2,
  utility__step: A2,
  utility__step_marker: M2,
  utility__step_connector: O2,
  "utility__step--completed": "_utility__step--completed_17enc_2273",
  "utility__step--active": "_utility__step--active_17enc_2281",
  utility__divider_label: R2,
  "loading-shimmer": "_loading-shimmer_17enc_1"
}, B2 = {
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
}, Gl = (t) => B2[t], Kl = Ae(
  ({
    kind: t = "tooltip",
    children: i,
    className: n = "",
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
    value: N = 0,
    maxValue: A = 5,
    currentStep: O = 0,
    totalSteps: X = 3,
    actions: W,
    variant: U,
    size: T,
    color: j,
    backgroundColor: J,
    borderRadius: V,
    onClick: B,
    onDismiss: G,
    onValueChange: F,
    onStepChange: Q,
    ...le
  }, ge) => {
    const ie = Gl(t), ne = ga(), ce = o || `utility-${ne}`, E = un();
    Be(() => (E(
      Tn({
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
      E(Wr(ce));
    }), [E, ce]);
    const te = ai(
      Dm(ce)
    ) || {}, x = (te == null ? void 0 : te.isVisible) || !1;
    te != null && te.isHovered;
    const Z = _t(null);
    _t(null);
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
      size: T ?? ie.size,
      color: j ?? ie.color,
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
      n
    ].filter(Boolean).join(" "), q = () => {
      if (z.trigger === "hover") {
        Z.current && clearTimeout(Z.current);
        const $ = setTimeout(() => {
          E(
            Tn({
              componentId: ce,
              updates: { isVisible: !0 }
            })
          );
        }, z.delay || 0);
        Z.current = $;
      }
    }, ee = () => {
      z.trigger === "hover" && (Z.current && clearTimeout(Z.current), E(
        Tn({
          componentId: ce,
          updates: { isVisible: !1 }
        })
      ));
    }, Y = () => {
      z.trigger === "click" && E(
        Tn({
          componentId: ce,
          updates: { isVisible: !x }
        })
      ), B == null || B();
    }, me = () => {
      E(
        Tn({
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
                R <= N && Ze["utility__star--filled"]
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
Kl.displayName = "Utility";
const F2 = si(Kl);
class Ve {
  static create(i) {
    return Re.forwardRef(
      (n, o) => Re.createElement(F2, {
        ref: o,
        ...i,
        ...n
      })
    );
  }
  static createFromKind(i) {
    const n = Gl(i);
    return this.create(n);
  }
}
const DN = {
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
  i5 as ADMIN_CONFIGURATIONS,
  Ln as ADVERTISEMENT_CONFIGURATIONS,
  _5 as ADVERTISEMENT_GROUPS,
  u5 as ADVERTISEMENT_PRESETS,
  t5 as Admin,
  zi as Advertisements,
  h5 as Ana,
  ml as Analytics,
  pl as AnalyticsBodyFactory,
  Ri as AnalyticsFactory,
  m5 as AnalyticsFactoryClass,
  p5 as AnalyticsPresets,
  ml as AnalyticsReports,
  ys as BUTTON_CONFIGURATIONS,
  U2 as BUTTON_GROUPS,
  U5 as BrowseHeader,
  ke as Button,
  Mi as ButtonFactory,
  H2 as ButtonPresets,
  hl as CARD_CONFIGURATIONS,
  f5 as CARD_GROUPS,
  ms as CHART_CONFIGURATIONS,
  eg as CHECKBOX_CONFIGURATIONS,
  Og as COMPONENT_CONFIGURATIONS,
  fl as Card,
  Ut as CardFactory,
  us as CardFactoryClass,
  y5 as CardPresets,
  Qf as Chart,
  gt as ChartFactory,
  b5 as ChartPresets,
  wa as Checkbox,
  Sg as CheckboxFactory,
  hi as CheckboxFactoryClass,
  v5 as CheckboxPresets,
  ct as ComponentFactory,
  S5 as ComponentPresets,
  zg as DarkModeToggle,
  ml as Dashboard,
  Hg as EmptyState,
  N5 as EmptyStateComponents,
  $t as EmptyStateFactory,
  Or as FILE_UPLOAD_CONFIGURATIONS,
  T5 as FILE_UPLOAD_GROUPS,
  Zr as FORM_FIELD_CONFIGURATIONS,
  x5 as FORM_FIELD_GROUPS,
  w5 as FORM_FIELD_PRESETS,
  Rb as FileUpload,
  O5 as FileUploadComponents,
  fi as FileUploadFactory,
  wl as Forms,
  xl as FormsBodyFactory,
  Ge as FormsFactory,
  C5 as FormsPresets,
  _N as FriendsSidebar,
  Hr as HEADER_CONFIGURATIONS,
  R5 as HEADER_GROUPS,
  Vr as Header,
  pt as HeaderFactory,
  $5 as HeaderPresets,
  Nx as MODAL_CONFIGURATIONS,
  Fn as MODAL_GROUPS,
  qv as Map,
  Z5 as MapComponents,
  yt as MapFactory,
  $1 as Media,
  H5 as MediaComponents,
  Ye as MediaFactory,
  ml as MetricsDashboard,
  Rl as Modal,
  Px as ModalFactory,
  J5 as ModalPresets,
  Q5 as ModalWorkflows,
  Sa as NAVIGATION_CONFIGURATIONS,
  aN as NAVIGATION_PRESETS,
  fs as NOTIFICATION_CONFIGURATIONS,
  s0 as Navigation,
  Rt as NavigationFactory,
  oN as NavigationPresets,
  P0 as Notification,
  rt as NotificationFactory,
  cN as NotificationPresets,
  ml as PerformanceMetrics,
  ok as Progress,
  dN as ProgressComponents,
  dt as ProgressFactory,
  Z2 as QUICK_BUTTONS,
  g5 as QUICK_CARDS,
  B5 as QUICK_HEADERS,
  rN as QUICK_NAVIGATION,
  J2 as QUICK_WRAPPERS,
  z5 as QuickComponents,
  ml as RealtimeAnalytics,
  Zl as Sidebar,
  ON as SidebarComposer,
  Bt as SidebarFactory,
  mN as SidebarGroups,
  uN as SidebarPresets,
  gi as SimpleModalFactory,
  gs as TABLE_CONFIGURATIONS,
  r2 as Table,
  wt as TableFactory,
  FN as TablePresets,
  F2 as Utility,
  DN as UtilityComponents,
  Ve as UtilityFactory,
  An as WRAPPER_CONFIGURATIONS,
  Y2 as WRAPPER_GROUPS,
  p as Wrapper,
  ii as WrapperFactory,
  X2 as WrapperPresets,
  Mr as analyticsConfigurations,
  Uh as barChart,
  $h as conversionDashboard,
  qh as conversionFunnel,
  Kh as conversionHeatmap,
  n5 as createAdSenseProvider,
  a5 as createAdsterraProvider,
  l5 as createAdvertisementConfig,
  d5 as createAnalyticsEvent,
  pi as createButtonConfig,
  qi as createCardConfig,
  yN as createChatSidebar,
  s5 as createCustomAnalyticsProvider,
  r5 as createCustomProvider,
  NN as createDesktopSidebar,
  jN as createFadeSidebar,
  M5 as createFilePreview,
  j5 as createFileUploadConfig,
  Ng as createFormsConfig,
  hN as createFriendsCompactSidebar,
  fN as createFriendsExpandedSidebar,
  pN as createFriendsSidebar,
  SN as createFullSidebar,
  o5 as createGoogleAnalyticsProvider,
  W5 as createHeader,
  F5 as createHeaderConfig,
  CN as createLargeSidebar,
  vN as createLeftSidebar,
  kN as createMediumSidebar,
  zN as createMobileSidebar,
  X5 as createModal,
  IN as createModalSidebar,
  ki as createNavigationConfig,
  EN as createNoAnimationSidebar,
  sN as createNotificationConfig,
  bN as createNotificationsSidebar,
  MN as createOverlaySidebar,
  AN as createPushSidebar,
  TN as createResponsiveSidebar,
  xN as createRightSidebar,
  PN as createScaleSidebar,
  gN as createSettingsSidebar,
  LN as createSlideSidebar,
  wN as createSmallSidebar,
  RN as createTableConfig,
  Q2 as createWrapper,
  q2 as createWrapperConfig,
  eC as createWrapperWithConfig,
  ef as customReport,
  Rr as formatFileSize,
  A5 as generateFileId,
  Zp as getAdvertisementConfig,
  yf as getChartConfig,
  j0 as getDefaultIcon,
  K2 as getDeprecatedWrappers,
  kl as getEmptyStateConfig,
  E5 as getFileExtension,
  ka as getFileUploadConfig,
  Vg as getFileUploadStyles,
  Ll as getMapConfig,
  Ml as getMediaConfig,
  I5 as getMimeTypeFromExtension,
  Tx as getModalConfiguration,
  Bl as getNavigationConfig,
  nN as getNavigationsByLayout,
  iN as getNavigationsByVariant,
  Dl as getNotificationConfig,
  Wl as getProgressConfig,
  Hl as getTableConfig,
  Gl as getUtilityConfig,
  _u as getWrapperConfig,
  G2 as getWrappersByVariant,
  c5 as isAdvertisementKind,
  K5 as isCommerceModal,
  V5 as isGameModal,
  q5 as isInteractionModal,
  Y5 as isLayoutModal,
  tN as isNavigationKind,
  G5 as isVersusModal,
  V2 as isWrapperKind,
  Hh as kpiMetric,
  Wh as lineChart,
  D5 as mergeActions,
  jx as mergeModalConfiguration,
  T0 as mergeNotificationConfig,
  zk as mergeTableConfig,
  Fh as performanceDashboard,
  Qh as performanceReport,
  Zh as pieChart,
  tf as realtimeMetrics,
  nf as realtimeTraffic,
  Xh as revenueCohort,
  Vh as revenueMetric,
  eN as useModal,
  Dh as userBehaviorDashboard,
  Jh as userCohort,
  Gh as userHeatmap,
  Yh as userJourneyFunnel,
  L5 as validateFile,
  P5 as validateFileUploadConfig,
  Gg as validateFiles,
  k5 as validateForms,
  lN as validateNotificationConfig,
  BN as validateTableConfig
};
//# sourceMappingURL=index.es.js.map
